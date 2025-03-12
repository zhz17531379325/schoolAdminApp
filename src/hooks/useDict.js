// 获取字典数据
import useDictStore from '@/store/modules/dict'
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = [];
      // 2023-1-16 注释代码：因为后台系统新增某字典类型后 掌端走缓存 不会及时更新
      // const dicts = useDictStore().getDict(dictType);
      // if (dicts) {
      //   res.value[dictType] = dicts;
      // } else {
        uni.$u.api.info.getDicts(dictType).then(resp => {
          res.value[dictType] = resp.data.map(p => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass,
            remark: p.remark
          }))
          useDictStore().setDict(dictType, res.value[dictType]);
        })
      // }
    })
    return toRefs(res.value);
  })()
}

