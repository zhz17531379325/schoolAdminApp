const { VITE_APP_BASE_URL, VITE_APP_BASE_API } = import.meta.env;
export function useToast(data) {
  const { title, icon } = data;
  uni.showToast({
    title: title || "", // 最多显示 7 个汉字长度
    icon: icon || "success",
    duration: 2000, // 提示的延迟时间
    mask: false, // 是否显示透明蒙层
  });
}
/**
 * 获取静态资源图片网络地址
 * @param {Object} url
 */
export function getImgUrl(url) {
  console.log(VITE_APP_BASE_URL);
  return VITE_APP_BASE_URL + "/schoolAdminAppImages/" + url;
  
}
  /**
   * 获取原始图片，用于图片预览时查看大图
   * @param {Object} image 缩略图地址
   */
  export function getOriginImage(image) {
    if (!image) {
      return "";
    }
    if (image.indexOf("_thum.") > 0) {
      return image.replace("_thum.", ".");
    }
    return image;
  }
  //去除富文本里面的图片去除富文本里面样式
//html
export function clearRichText(texts) {
  let text1 = texts.replace(/style\s*?=\s*?([‘"])[\s\S]*?\1/g, ""); //去除样式
  let text2 = text1.replace(/class\s*?=\s*?([‘"])[\s\S]*?\1/g, ""); //清除类名
  let text3 = text2.replace(/<\/?.+?>/g, ""); //去除标签包裹
  let text4 = text3.replace(/[ | ]*\n/g, "\n"); //去除行尾空白
  let text5 = text4.replace(/ /g, ""); //去除空格
  let text6 = text5.replace(/<\/?(img|table|video)[^>]*>/g, ""); //去除图片、表格.视频
//isImg 存在 保留图片  反之清除图片


  return text6;
}
/**
 * 获取上传资源网络地址
 * @param {Object} url
 */
export function getProfileUrl(url,type) {

  //视频特殊处理
  if (url && url.toLowerCase().endsWith(".mp4")) {
    url =
      url.substring(0, url.lastIndexOf("/") + 1) +
      encodeURIComponent(url.substring(url.lastIndexOf("/") + 1));
  }
  url = '/profile' + url?.split('/profile')[1]
  return (type ? url  : VITE_APP_BASE_URL + url);
}
/**
 * @name: 解析富文本的图片和视频
 * @param {*}:
 **/
export function formatRichText(html) {
  if (html != undefined && html != null && html) {
    let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
      match = match
        .replace(/style="[^"]+"/gi, "")
        .replace(/style='[^']+'/gi, "");
      match = match
        .replace(/width="[^"]+"/gi, "")
        .replace(/width='[^']+'/gi, "");
      match = match
        .replace(/height="[^"]+"/gi, "")
        .replace(/height='[^']+'/gi, "");
      return match;
    });
    newContent = newContent.replace(
      /style="[^"]+"/gi,
      function (match, capture) {
        match = match
          .replace(/width:[^;]+;/gi, "width:100%;")
          .replace(/width:[^;]+;/gi, "width:100%;");
        return match;
      }
    );
    newContent = newContent.replace(/<br[^>]*\/>/gi, "");
    newContent = newContent.replace(
      /\<img/gi,
      '<img style="width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
    );
    newContent = newContent.replace(
      /\/profile/gi,
      VITE_APP_BASE_URL + VITE_APP_BASE_API + "/profile"
    );
    // 解析富文本编辑器得视频
    let videoList = [];
    let videoReg = /<video.*?(?:>|\/>)/gi; //匹配到字符串中的 video 标签
    let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; //匹配到字符串中的 video 标签 的路径
    let arr = newContent.match(videoReg) || []; // arr 为包含所有video标签的数组
  
    let articleList = newContent.split("</video>"); // 把字符串  从视频标签分成数组
    arr.forEach((item, index) => {
      // console.log(srcReg,"srcReg");
      var src = item.match(srcReg);
      videoList.push(src[1]); //所要显示的字符串中 所有的video 标签 的路径
    });
    let needArticleList = [];
    articleList.forEach((item, index) => {
      if (item != "" && item != undefined) {
        //  常见的标签渲染
        needArticleList.push({
          type: "rich-text",
          value: item + "</video>",
        });
      }
      let articleListLength = articleList.length; // 插入到原有video 标签位置
      if (index < articleListLength && videoList[index] != undefined) {
        needArticleList.push({
          type: "video",
          value: videoList[index],
        });
      }
    });
    return needArticleList;
  }
}
