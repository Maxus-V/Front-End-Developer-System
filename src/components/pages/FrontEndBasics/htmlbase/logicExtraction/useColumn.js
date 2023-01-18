const fieldEnum_zh = {
    level: '告警级别',
    modelname: '模型名称',
    host: '主机',
    description: '描述',
    sourcename: '告警源名称',
    sourcetype: '告警源类型',
    env: '环境',
    application: '应用',
    cluster: '集群',
    biz: '业务',
    modelid: '模型id',
    rulename: '规则名称',
    metrickey: '监控指标',
    checks: '检查项',
    check: '检查项',
    value: '统计值',
    ip: 'IP',
    metricname: '指标名称',
    timestamp: '告警时间',
    messagetype: '类型',
    group: '分组字段',
    searchcontent: '搜索内容',
    logsource: '索引',
    timefield: '时间字段',
    messagesource: '告警消息来源',
    baseline_value: '基线值',
    rate_of_change: '变化率',
    threshold: '阈值',
    time_range: '时间范围',
    remark:'备注',
    //Zabbix 告警消息
    triggername: "触发器名称",
    eventid: "告警事件ID",
    triggerurl: "触发器URL",
    triggerstatus: "触发器状态",
    alert_value: "真实值",
    alert_group_name: "告警组",
    ruletype: "监控类型",
    checkname: "指标名称",
    // JKB告警消息
    task_groups: "任务组",
    task_name: "任务名称",
    task_type: "监控任务类型",
    task_summary: "监控项目摘要",
    msg_id: "告警消息ID",
    task_user_id: "任务创建用户ID",
    task_id: "监控项目ID",
    server_id: "服务器ID",
    device_label: "设备名称",
    deviceid: "设备ID",
    monitor_lable: "监测点名称",
    monitorid: "监测点ID",
    monitor_label: "监测点名称",
    device_ip: '设备IP',
    device_group: '设备组',
    device_port: '设备端口',
    labelColumn: '标签',//都有用
    labels: '标签',//都有用
    //dola
    groupfieldkey: '分组字段',
    groupfieldvalue: '分组字段值',
    anomaly_type: '异常类型',
    pattern: '算法聚合的模式',
    rule_id: '规则id',
    controlled: '是否纳管',
    assignees: '处置人',
    CI: 'CI属性',
    closedType: '事件关闭类型',
    seriNum: '事件ID',
    incidentId: '事件ID',
    incidentName: '事件名称',
    incidentNameText: '事件名称',
    createdTime: '创建时间',
    updatedTime: '最近更新时间',
    alertSourceNames: '告警源名称',
    sourceIdList: '告警源名称',
    alertCount: '警报数',
    targetname: '告警对象',
    notifyFlagCount: '被屏蔽警报数',
    blockNotify: '告警屏蔽',
    incidentGenerateType: '事件分类',
    mergeRuleName:'合并规则',
    compressRate:'警报/事件压缩率',
    priority:'优先级',
    sim_threshold:'相似度阀值',
    dataType:'数据分类',
    from:'发送人地址',
    subject:'主题',
    messageid:'邮件id',
    mergeRuleIdList: '合并规则'
}

const specialColumns = {
    alertSourceNames: {
        title: '告警源名称',
        prop: 'alertSourceNames',
    },
    assignees: {
        title: '处置人',
        prop: 'assignees',
    },
    checks: {
        title: '检查项',
        prop: 'checks',
    },
    createdTime: {
        title: '创建时间',
        prop: 'createdTime',
    },
    updatedTime: {
        title: '最近更新时间',
        prop: 'updatedTime',
    },
    incidentNameText: {
        title: '事件名称',
        prop: 'incidentNameText',
        goto: '/overview',
    },
    alertCount: {
        title: '警报数',
        prop: 'alertCount',
    },
    labels: {
        title: '标签',
        prop: 'labels',
    },
    incidentGenerateType: {
        title: '事件分类',
        prop: 'incidentGenerateType',
    },
    description: {
        title: '描述',
        prop: 'description',
    },
    controlled: {
        title: '是否纳管',
        prop: 'controlled',
    },
    priority: {
        title: '优先级',
        prop: 'priority',
    },
    dataType: {
        title: '数据分类',
        prop: 'dataType',
    },
    remark: {
        title: '备注',
        prop: 'remark',
    }
}


const useColumn = (columnOrder=[]) => {
    const columns = columnOrder.map(id => {
        const column = specialColumns[id]
        return column || {
            title: fieldEnum_zh && fieldEnum_zh[id] ? fieldEnum_zh[id] : id,
            prop: id
        }
    })
    return columns
}

export default useColumn