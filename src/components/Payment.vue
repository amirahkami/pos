<template>
	<div class="wrapper w100">
		<button class="btn-payment">Zahlen</button>
	</div>
</template>
<script>
	export default {};
</script>
<style scoped>
	.wrapper {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}
	.btn-payment {
		width: 170px;
		height: 64px;
		border: 3px solid #fff;
		background-color: #19bcc3;
		color: #eee;
		font-size: 1rem;
		font-weight: bold;
	}
</style>