export function useModal(data) {
    const { title, content, showCancel, cancelText, cancelColor, confirmText, success, fail, complete } = data
    uni.showModal({
        title: title || "",
        content: content || "确认继续操作？",
        showCancel: showCancel || true,          // 是否显示取消按钮
        cancelText: cancelText || "取消",        // 取消按钮的文字 最多 4 个字符
        cancelColor: cancelColor || "#323233",   // 取消按钮的文字颜色
        confirmText: confirmText || "确定",      // 确定按钮的文字 
        confirmColor: "#00A6AC",                // 确定按钮的文字颜色
        success: (res) => {
            success && success(res)
        },
        fail: (err) => {
            fail && fail(err)
        },
        complete: (err) => {
            complete && complete(err)
        },
    });
}