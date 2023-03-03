<script setup>
import { reactive } from 'vue'
import { ElMessage, ElForm, ElFormItem, ElInput, ElButton, ElDivider, ElTable, ElTableColumn, ElIcon } from 'element-plus'
import { VideoPause, VideoPlay, Download } from '@element-plus/icons-vue'

import BasicCard from '@/components/basic/BasicCard/index.vue'

import { getMusicList, getMusicUrl } from './config'

let audio = null

const state = reactive({
    searchName: '',
    musicList: [],

    playingMusicId: '',
    playingMusicName: '',
    playingMusic: false,
})

const onSearch = async () => {
    const res = await getMusicList(state.searchName)
    if (res.status === 200 && res.data) {
        const { result : { songs } } = res.data
        let tempArr = songs.map(song => {
            let { album: {name: albumName, artist : { img1v1Url }}, name, id } = song
            return {
                id,
                name,
                img1v1Url,
                albumName, 
            }
        })
        state.musicList = tempArr
    }
}

const onPlaying = async (song) => {
    const { id, name } = song
    if (id !== state.playingMusicId) {
        const res = await getMusicUrl(id)
        const { data } = res.data
        if (audio) audio.pause()
        audio = new Audio()
        audio.src = data[0].url
        audio.play()
        state.playingMusic = true
        state.playingMusicId = id
        state.playingMusicName = name
    } else {
        state.playingMusic = !state.playingMusic
        if (state.playingMusic) {
            audio.play()
        } else {
            audio.pause()
        }
    }
    
}
// const onDownload = async (id) => {
//     ElMessage({
//         message: '暂未实现下载功能！',
//         type: 'error',
//     })
// }
</script>

<template>
    <BasicCard title="音乐盒子">
        <ElForm>
            <ElFormItem label="搜索歌曲：">
                <ElInput placeholder="请输入歌曲名" 
                    v-model="state.searchName" 
                    @change="onSearch"
                    clearable
                />
                <ElButton @click="onSearch">查询</ElButton>
                <span> {{ state.playingMusicName ? '当前歌曲：' + state.playingMusicName : '' }}</span>
            </ElFormItem>
        </ElForm>
        <ElDivider />
        <ElTable :data="state.musicList">
            <ElTableColumn prop="name" label="歌曲名称" />
            <ElTableColumn prop="id" label="歌曲id" />
            <ElTableColumn prop="albumName" label="歌曲专辑" />
            <ElTableColumn fixed="right" label="操作">
                <template  #default="scope">
                    <ElButton link type="primary" @click="onPlaying(scope.row)">
                        <ElIcon>
                            <component :is="scope.row.id === state.playingMusicId && state.playingMusic ? VideoPause : VideoPlay" />
                        </ElIcon>
                    </ElButton>
                    <!-- <ElButton link type="primary" @click="onDownload(scope.row.id)">
                        <ElIcon><Download /></ElIcon>
                    </ElButton> -->
                </template>
            </ElTableColumn>
        </ElTable>
    </BasicCard>
</template>

<style lang="scss" scoped>
.el-input {
    width: 200px;
}
.el-button {
    margin: 0 10px 0;
}
.el-table {
    height: 520px;
    overflow-y: scroll;   
}
</style>