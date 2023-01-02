export const publicFields = [
    {
        name: '公共字段',
        id: 'public',
        children: [
            {
                name: '事件ID',
                id: 'seriNum',
                disabled: true,
                defaultSelected: true
            },
            {
                name: '事件名称',
                id: 'incidentNameText',
                disabled: true,
                defaultSelected: true
            },
            {
                name: '事件级别',
                id: 'level',
                disabled: true,
                defaultSelected: true
            },
            {
                name: '创建时间',
                id: 'createdTime',
                disabled: true,
                defaultSelected: true

            },
            {
                name: '是否纳管',
                id: 'controlled',
                defaultSelected: false,
                disabled: false
            },
            {
                name: '标签',
                id: 'labels',
                defaultSelected: false,
                disabled: false
            },
            {
                id: 'alertCount',
                name: '警报数',
            },
            {
                id: 'alertSourceNames',
                name: '告警源名称',
            },
            // {
            //     id: 'targetName',
            //     name: <FormattedMessage id={'event.object'} />
            // }, //fixed 930新增：事件告警对象不是公共字段
            {
                name: '检查项',
                id: 'checks',
                disabled: false,
                defaultSelected: false

            },
            {
                name: '最近更新时间',
                id: 'updatedTime',
                disabled: false,
                defaultSelected: false

            },
            {
                name: '描述',
                id: 'description',
                disabled: false
            },
            {
                name: '处置人',
                id: 'assignees',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '事件分类',
                id: 'incidentGenerateType',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '数据分类',
                id: 'dataType',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '警报/事件压缩率',
                id: 'compressRate',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '优先级',
                id: 'priority',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '合并规则',
                id: 'mergeRuleName',
                disabled: false,
                defaultSelected: false
            },
            {
                name: '备注',
                id: 'remark',
                disabled: false,
                defaultSelected: true
            },
        ]
    },
]