// 获取字典数据
import useDictStore from '@/store/modules/dict'
export function usezlDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
        res.value[dictType] = dicts;
      } else {
        uni.$u.apiGovern.dict.getDicts(dictType).then(resp => {
          res.value[dictType] = resp.data.map(p => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass,
            remark: p.remark
          }))
          useDictStore().setDict(dictType, res.value[dictType]);
        })
      }
    })
    return toRefs(res.value);
  })()
}

