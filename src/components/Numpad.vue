<template>
	<div>
		<div class="numpad">
			<div @click="$store.commit('append', '7')" class="num">7</div>
			<div @click="$store.commit('append', '8')" class="num">8</div>
			<div @click="$store.commit('append', '9')" class="num">9</div>
			<div @click="$store.commit('append', '4')" class="num">4</div>
			<div @click="$store.commit('append', '5')" class="num">5</div>
			<div @click="$store.commit('append', '6')" class="num">6</div>
			<div @click="$store.commit('append', '1')" class="num">1</div>
			<div @click="$store.commit('append', '2')" class="num">2</div>
			<div @click="$store.commit('append', '3')" class="num">3</div>
			<div @click="$store.commit('back')" class="num">
				<i class="fa fa-backspace"></i>
			</div>
			<div @click="$store.commit('append', '0')" class="num">0</div>
			<div @click="$store.commit('reset')" class="num">C</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.numpad {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(50px, auto);
	}

	.num {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #667173;
		border: 1px solid #3f4f4f;
		width: 64px;
		height: auto;
		font-size: 1.7rem;
	}

	.num:hover {
		background-color: #19bcc3;
		cursor: pointer;
	}
</style>