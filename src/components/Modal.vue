<template>
	<div class="modal" v-show="value">
		<div>
			<p>
				{{
					Number(
						$store.state.numberizedGiven -
							$store.state.numberized
					).toFixed(2) + " €"
				}}<br />zurück
			</p>
			<div>
				<button
					class="btn"
					@click.prevent="close"
					@click="$store.commit('reset')"
				>
					Schließen
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Modal",
		props: {
			value: {
				required: true,
			},
		},
		methods: {
			close() {
				this.$emit("input", !this.value);
			},
		},
	};
</script>

<style scoped>
	.modal {
		background-color: #c3c7c8;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 55%;
		height: 55%;
		border: 3px solid #19bcc3;
		text-align: center;
	}

	.modal p {
		font-size: 3rem;
		color: #000000;
	}

	.btn {
		width: 170px;
		height: 64px;
		background-color: #667173;
		color: #eee;
		font-size: 1rem;
		font-weight: bold;
	}
</style>