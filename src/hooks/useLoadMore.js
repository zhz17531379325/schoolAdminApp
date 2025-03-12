/*
 * @Descripttion: 上拉加载，下拉刷新hooks
 * @Author: 马俊飞
 * @Date: 2022-11-16 20:50:06
 * @LastEditors: yjs yjs_job@163.com
 * @LastEditTime: 2022-12-12 10:15:25
 */
import { reactive, ref, toRefs } from "vue";
export function useLoadMore(pageSize) {
  const sourceList = ref([]);
  const total = ref(null);
  const loadmore = ref(false);
  const data = reactive({
    loadStatus: "loadmore",
    loadingText: "努力加载中",
    loadmoreText: "轻轻上拉",
    nomoreText: "没有更多数据了",
    params: {
      pageNum: 1,
      pageSize: pageSize ? pageSize : 8,
    },
  });

  const { params } = toRefs(data);
  const loadList = async (call) => {
    uni.showNavigationBarLoading();
    const res = await call();
    sourceList.value = res.rows
      ? sourceList.value.concat(res.rows)
      : sourceList.value.concat(res.data);
    total.value = res.total;
    loadmore.value = false;
    uni.hideNavigationBarLoading();
    uni.stopPullDownRefresh();
  };
  // 下拉刷新
  const pullDownRefresh = (call) => {
    loadmore.value = false;
    sourceList.value = [];
    params.value.pageNum = 1;
    loadList(call);
  };
  // 上拉加载
  const reachBottom = (call) => {
    loadmore.value = true;
    if (sourceList.value.length >= total.value) {
      data.loadStatus = "nomore";
      return;
    }
    data.loadStatus = "loading";
    setTimeout(() => {
      params.value.pageNum++;
      loadList(call);
    }, 800);
  };

  return {
    sourceList,
    params,
    loadmore,
    ...toRefs(data),
    loadList,
    pullDownRefresh,
    reachBottom,
  };
}
