import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import { getConfig, postDelete, postSave, postUpdate } from './api'

export default function useConfigList () {
  const router = useRouter()

  const isEdit = ref(false)
  const dialogVisible = ref(false)
  const tableData = ref([])

  const formData = reactive({
    id: '',
    projectName: '',
    gitUrl: '',
    gitBranch: '',
    buildCommand: '',
    uploadPath: ''
  })
  const searchParams = reactive({
    projectName: '',
    pageNo: 1,
    pageSize: 10,
    total: 0
  })
  const dialogTitle = computed(() => isEdit.value ? '编辑配置信息' : '新增配置信息')

  const initData = async () => {
    // const res = await getConfig(searchParams)
    // tableData.value = res.list
    // searchParams.total = res.total
  }
  const onSubmit = async () => {
    try {
      isEdit.value
        ? await postUpdate(formData)
        : await postSave(formData)

      ElMessage.success(isEdit.value ? '配置编辑成功' : '配置保存成功')
      await initData()
      dialogVisible.value = false
    } catch (e) {
      ElMessage.error(isEdit.value ? '配置编辑失败' : '配置保存失败')
    }
  }
  const onDel = async rowData => {
    try {
      await postDelete({ id: rowData._id })
      ElMessage.success('配置删除成功')
      await initData()
    } catch (e) {
      ElMessage.error('配置删除失败')
    }
  }

  const handleSizeChange = () => {}
  const handleCurrentChange = () => {}

  const changeVisible = (value) => {
    dialogVisible.value = value
  }

  const onSearch = () => {
    initData()
  }
  const onAdd = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    isEdit.value = false
    dialogVisible.value = !dialogVisible.value
  }
  const onEdit = (rowData) => {
    isEdit.value = true
    dialogVisible.value = true

    Object.keys(formData).forEach(key => {
      formData[key] = rowData[key]
    })

    formData.id = rowData._id
  }
  const handleToDetail = (rowData) => {
    router.push({
      name:"ConfigDetail",
      params:{
        id: rowData._id
      }}
    )
  }

  onMounted(() => {
    initData()
  })

  return {
    searchParams,
    tableData,
    formData,
    dialogVisible,
    isEdit,
    dialogTitle,
    handleSizeChange,
    handleCurrentChange,
    onSearch,
    onAdd,
    onSubmit,
    onEdit,
    onDel,
    handleToDetail,
    changeVisible
  }
}