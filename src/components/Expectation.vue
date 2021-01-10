<template>
	<div class="ex">
		<div
			class="btn"
			@click="$store.commit('select', $store.state.numberized)"
		>
			<div>
				{{ $store.state.numberized + " €" }}
			</div>
		</div>
		<div
			class="btn"
			@click="$store.commit('select', $store.state.expectationFirst)"
		>
			<div>
				{{ $store.state.expectationFirst + " €" }}
			</div>
		</div>
		<div
			class="btn"
			@click="$store.commit('select', $store.state.expectationSecond)"
		>
			<div>
				{{ $store.state.expectationSecond + " €" }}
			</div>
		</div>
		<div
			class="btn"
			@click="$store.commit('select', $store.state.expectationThird)"
		>
			<div>
				{{ $store.state.expectationThird + " €" }}
			</div>
		</div>
		<div
			class="btn"
			@click="$store.commit('select', $store.state.expectationFourth)"
		>
			<div>
				{{ $store.state.expectationFourth + " €" }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.ex {
		background-color: red;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		flex-direction: column;
	}

	.btn {
		display: flex;
		flex: 1;
		width: 198px;
		background-color: #667173;
		border: 1px solid #3f4f4f;
		font-size: 1.2rem;
		align-items: center;
		justify-content: center;
	}

	.btn:hover {
		background-color: #19bcc3;
		cursor: pointer;
	}
</style>