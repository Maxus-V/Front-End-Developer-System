<script setup>
import { ref, onMounted, watch } from 'vue'
import { ElInput } from 'element-plus';
import AMapLoader from '@amap/amap-jsapi-loader' 

const searchValue = ref('')
const onValueChange = (value) => {
  
}

const initMap = () => {
  AMapLoader.load({
    key: "02c85434b6ea9c8f1e85cb0a6f2882f", // 申请好的Web端开发者Key，首次调用 load 时必填。
    version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.Scale", //工具条，控制地图的缩放、平移等
      "AMap.ToolBar", //比例尺，显示当前地图中心的比例尺
      "AMap.Geolocation", //定位，提供了获取用户当前准确位置、所在城市的方法
      "AMap.HawkEye", //鹰眼，显示缩略图
      "AMap.ControlBar",
      "AMap.MapType",
      // "AMap.Autocomplete"
    ],
  }).then((AMap) => {
      let map = new AMap.Map("map", {
        zoom: 5, //初始化地图层级
        viewMode: "3D", //是否为3D地图模式
        center: [116.397436, 39.909165], //初始化地图中心点位置
        dragEnable: true, //禁止鼠标拖拽
        scrollWheel: true, //鼠标滚轮放大缩小
        doubleClickZoom: true, //双击放大缩小
        keyboardEnable: true, //键盘控制放大缩小移动旋转
      })
      map.setDefaultCursor("pointer") //使用CSS默认样式定义地图上的鼠标样式（default/pointer/move/crosshair）
      map.addControl(new AMap.Scale()) //异步同时加载多个插件
      map.addControl(new AMap.ToolBar())
      map.addControl(new AMap.Geolocation())
      // map.addControl(new AMap.ControlBar({
      //   showControlButton: false
      // }))
      map.addControl(new AMap.MapType())
      // map.addControl(new AMap.Autocomplete({
      //   input: 'tipinput'
      // }))
      map.add(
        new AMap.Marker({
          position: map.getCenter(),
        })
      )

      AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function() {
        const autoOptions = {
          // 使用联想输入的input的div的id
          input: 'tipinput'
        }
        const autocomplete = new AMap.Autocomplete(autoOptions)
        const placeSearch = new AMap.PlaceSearch({
          city: '长沙',
          map: map
        })
        AMap.event.addListener(autocomplete, 'input', function(e) {
          console.log(e.poi.location) // 获取选中的的地址的经纬度
          placeSearch.search(e.poi.name)
        })
      })

      let geojson = new AMap.GeoJSON({
        geoJSON: null,
      })
      map.add(geojson)
 
      if (JSON.stringify(getData()) != '[]') {
        geojson.importData(getData())
        geojson.eachOverlay((item) => {
          item.on('click', (e) => {
            let ext = item.getExtData()
            let click = ++ ext._geoJsonProperties.click
            let infoWindow = new AMap.InfoWindow({
            anchor: 'top-center',
            content: `<div>打卡了${click}次</div>`
            })
            infoWindow.open(map, item.getPosition())
          })
        })
      }

      //为地图注册click事件获取鼠标点击出的经纬度坐标
      map.on("click",  (e) => {
        let marker = new AMap.Marker({
          position: e.lnglat,
          extData: {
            _geoJsonProperties: {
              gid: geojson.getOverlays().length + 1,
              click: 0,
            },
          },
        })
        marker.on("click", (e) => {
          let ext = marker.getExtData()
          let click = ++ ext._geoJsonProperties.click
          let infoWindow = new AMap.InfoWindow({
            anchor: 'top-center',
            content: `<div>打卡了${click}次</div>`,
          })
          infoWindow.open(map, marker.getPosition())
          saveData(geojson.toGeoJSON())
        })
        map.add(marker)
        geojson.addOverlay(marker)
        saveData(geojson.toGeoJSON())
      })
      
      map.on("click", (e) => {
        console.log('e', geojson)
      })
    })
    .catch((e) => {
      console.log(e)
    })
}

const getData = () => {
  if (!localStorage.getItem('geojson')) {
    localStorage.setItem('geojson', '[]')
  }
  return JSON.parse(localStorage.getItem('geojson'))
}

const saveData = (data) => {
  localStorage.setItem('geojson', JSON.stringify(data))
}

onMounted(() => {
  initMap()
})
watch(searchValue, (value) => {
  onValueChange(value)
})
</script>

<template>
  <!-- <ElInput v-model="searchValue" placeholder="请输入关键词" id="tipinput" /> -->
  <div id="map" class="container"></div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>