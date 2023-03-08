<script setup>
import { onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader' 

//出于保密，不能将key放在仓库上
const initMap = () => {
  AMapLoader.load({
    key: "", // 申请好的Web端开发者Key，首次调用 load 时必填。
    version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.Scale", //工具条，控制地图的缩放、平移等
      "AMap.ToolBar", //比例尺，显示当前地图中心的比例尺
      "AMap.Geolocation", //定位，提供了获取用户当前准确位置、所在城市的方法
      "AMap.HawkEye", //鹰眼，显示缩略图
      "AMap.ControlBar",
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
      map.addControl(new AMap.ControlBar())
      map.add(
        new AMap.Marker({
          position: map.getCenter(),
        })
      )

      //可多次调用load
      AMapLoader.load({
        plugins: ["AMap.MapType"],
      })
      .then((AMap) => {
          map.addControl(new AMap.MapType());
      })
      .catch((e) => {
        console.error(e);
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
  // initMap()
})
</script>

<template>
  <div>需要在代码里加上你自己的key，地图才能展示出来</div>
  <div id="map" class="container"></div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>