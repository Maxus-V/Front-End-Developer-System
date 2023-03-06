import {onMounted, reactive, ref} from 'vue'
import { useRoute } from 'vue-router'

import { io } from 'socket.io-client'

import {getConfigDetail, getHistory} from './api'

export const useConfigDetail = () => {
  const route = useRoute()

  const ioInstance = ref()
  const isRollBack = ref(false)
  const historyList = ref([])
  const rollBackHash = ref('')
  const stream = ref('')

  const detailData = reactive({
    id: '',
    projectName: '',
    gitUrl: '',
    gitBranch: '',
    buildCommand: '',
    uploadPath: ''
  })

  const initDetail = async () => {
    const { id } = route.params
    try {
      const res = await getConfigDetail({ id })
      Object.keys(detailData).forEach(key => {
        detailData[key] = res[key]
      })
      historyList.value = res.history.map(_ => ({ label: _.title, commitHash: _.commitHash }))
    } catch (e) {
    }
  }
  const initSocket = () => {
    const { id } = route.params
    ioInstance.value = io( {
      path: '/jenkins/build',
      query: {
        id
      }
    })
    initLogStream()
  }
  const initLogStream = () => {
    ioInstance.value.on('build:data', (data) => {
      stream.value = data
    })
    ioInstance.value.on('build:error', (err) => {})
    ioInstance.value.on('build:end', () => {})
  }
  const handleBuild = () => {
    ioInstance.value.emit('build:start')
    initLogStream()
  }
  const handleRollBack = () => isRollBack.value = !isRollBack.value

  onMounted(async () => {
    await initDetail()
    initSocket()
  })

  return {
    detailData,
    stream,
    isRollBack,
    historyList,
    rollBackHash,
    handleBuild,
    handleRollBack
  }
}