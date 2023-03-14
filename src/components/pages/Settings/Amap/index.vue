<script setup>
import { reactive, onMounted } from 'vue'
import { ElButton, ElSelect, ElOption, ElInput } from 'element-plus';
import AMapLoader from '@amap/amap-jsapi-loader' 

let map = null

const amapState = reactive({
    language: 'zh_cn',
    zoom: 11,
    center: "116.397428, 39.90923",
    cityName: '',
})

const init = ()=> {
    AMapLoader.load({
        // key: "02c85434b6ea9c8f1e85cb0a6f2882f",
        key: "你的key",
        version: "1.4.15",
    })
    .then((AMap) => {
        map =  new AMap.Map("map", {
            resizeEnable: true,
            zoom: 11,
            center: [116.397428, 39.90923],
            showIndoorMap: false, //室内地图不可用，开着只会报错
            isHotspot: true,
        })
        map.on("complete", () => {

        })
        map.on('moveend', logMapinfo);
        map.on('zoomend', logMapinfo);
        map.plugin(["AMap.ToolBar", "AMap.PlaceSearch", "AMap.AdvancedInfoWindow", "AMap.Weather"], () => {
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.PlaceSearch())
            map.addControl(new AMap.AdvancedInfoWindow())
            // map.addControl(new AMap.Weather()) //是插件，但不一定要加这个
        })
        let weather = new AMap.Weather()
        //查询实时天气
        weather.getLive('天河区', (err, data) => {
            console.log('data', data)
        })
        //查询天气预报
        weather.getForecast('番禺区', (err, data) => {
            console.log('data', data)
        })
        let placeSearch = new AMap.PlaceSearch()
        let infoWindow = new AMap.AdvancedInfoWindow({})
        const placeSearch_CallBack = (data) => {
                console.log('data', data)
                let poiArr = data.poiList.pois;
                let location = poiArr[0].location;
                infoWindow.setContent(createContent(poiArr[0]));
                infoWindow.open(map,location);
        }
        const createContent = (poi) => {  //信息窗体内容
            var s = [];
            s.push('<div class="info-title">'+poi.name+'</div><div class="info-content">'+"地址：" + poi.address);
            s.push("电话：" + poi.tel);
            s.push("类型：" + poi.type);
            s.push('<div>');
            return s.join("<br>");
        }
        map.on('hotspotover', (result) => {
            // placeSearch.getDetails(result.id, (status, result) => {
            //     console.log('result2', result)
            //     if (status === 'complete' && result.info === 'OK') {
            //         placeSearch_CallBack(result);
            //     }
            // })
        })
    })
}

const destroyMap = () => {
    if (map) map.destroy()
}

onMounted(() => {
    // init()
})

const onSwitchChange = (value) => {
    if (map) map.setLang(value)
}
const logMapinfo = () => {
    if (map) {
        amapState.zoom = map.getZoom()
        amapState.center = map.getCenter()
    }
}
const setZoomAndCenter = () => {
    if (map) {
        let zoom = Math.floor(Math.random() * 7) + 11;
        let lng = 121.138398 + Math.floor(Math.random() * 589828) / 1e6;
        let lat = 30.972688 + Math.floor(Math.random() * 514923) / 1e6;
        map.setZoomAndCenter(zoom, [lng, lat])
    }
}
const goCity = (value) => {
    if (map) map.setCity(value)
}
</script>

<template>
    <div class="amap">
        <div id="map" class="container">
            若希望看到此处效果，可在下载该项目代码后，
            搜索"你的key"和"你的securityJsCode”，
            用自己的高德地图key和securityJsCode进行替换，
            并将这段文字删去，即可看到地图效果
        </div>
        <div>
            <ElSelect v-model="amapState.language" @change="onSwitchChange" placeholder="请选择语言">
                <ElOption label="中文" value="zh_cn"/>
                <ElOption label="英文" value="en"/>
                <ElOption label="中英双语" value="zh_en"/>
            </ElSelect>
            <ElButton @click="destroyMap">销毁地图</ElButton>
            <div>
                <h4>获取地图级别与中心点坐标：</h4>
                <p>当前级别：{{ amapState.zoom }}</p>
                <p>当前中心点：{{ amapState.center }}</p>
            </div>  
            <div>
                <ElButton @click="setZoomAndCenter">随机设置地图中心点/级别</ElButton>
            </div>
            <div>
                <ElInput v-model="amapState.cityName" 
                    placeholder="请输入想去的城市，然后点击回车" 
                    @change="goCity"
                    clearable
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.amap {
    display: flex;
    .container {
        width: 800px;
        height: 600px;
        border: 20px solid skyblue;
    }
}
</style>