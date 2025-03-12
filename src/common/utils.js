// 获取静态图片
export function getAssetsImages(path, name) {
  const imgPath = path ? `${path}/${name}` : `${name}`;
  // #ifdef H5
  return new URL(`/static/images/${imgPath}`, import.meta.url).href;
  // #endif
  // #ifdef MP-WEIXIN
  return `/static/images/${imgPath}`;
  // #endif
}


//定义 公共按钮样式
export const btnCustom = {
  width: "100%",
  height: "80rpx",
  background: "#3D7CFD",
  borderRadius: "16rpx",
  outline: "none",
  border: "none !important",
  color: "#fff",
  fontSize: "32rpx",
  letterSpacing: "2rpx",
  fontWeight: 500,
};

export const btnCustomNo = {
  width: "100%",
  height: "80rpx",
  background: "#ffffff",
  borderRadius: "16rpx",
  outline: "none",
  border: "none !important",
  color: "#3D7CFD",
  fontSize: "32rpx",
  letterSpacing: "2rpx",
  fontWeight: 500,
};
