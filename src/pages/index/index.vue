<template>
	<view class="content">
		<u-button type="primary">{{ title }}</u-button>
	</view>
</template>

<script setup>
	const store = useStore()
	const title = ref('这里是冬梅')
	//直接调用
	// uni.$u.get('/getInfo')
	//api集中管理调用
	uni.$u.api.info.getInfo()
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
