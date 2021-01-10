<template>
	<div class="tabs">
		<input type="radio" name="tabs" id="tabone" checked="checked" />
		<label for="tabone">Bar</label>
		<div class="tab">
			<div class="flex">
				<div class="flex left">
					<div class="w100"></div>
					<Expectation />
				</div>
				<div class="flex">
					<Numpad />
					<div class="wrapper w100">
						<button class="btn-payment" @click="openModal">
							Zahlen
						</button>
					</div>
					<Modal v-model="modalOpen" />
				</div>
			</div>
		</div>

		<input type="radio" name="tabs" id="tabtwo" />
		<label for="tabtwo">EC</label>
		<div class="tab">
			<p class="lorem">EC</p>
		</div>

		<input type="radio" name="tabs" id="tabthree" />
		<label for="tabthree">Kreditkarte</label>
		<div class="tab">
			<p class="lorem">Kreditkarte</p>
		</div>

		<input type="radio" name="tabs" id="tabfour" />
		<label for="tabfour">Gutschein</label>
		<div class="tab"><p class="lorem">Gutschein</p></div>

		<input type="radio" name="tabs" id="tabfive" />
		<label for="tabfive">Sonstige</label>
		<div class="tab"><p class="lorem">Sonstige</p></div>
	</div>
</template>
<script>
	import Expectation from "./Expectation.vue";
	import Numpad from "./Numpad.vue";
	import Modal from "./Modal.vue";

	export default {
		name: "Tabs",
		components: {
			Expectation,
			Numpad,
			Modal,
		},
		data() {
			return {
				modalOpen: false,
			};
		},
		methods: {
			openModal() {
				this.modalOpen = !this.modalOpen;
			},
		},
	};
</script>

<style scoped>
	.flex {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-shrink: unset;
		justify-content: space-around;
		width: 100%;
		margin: 0.2rem;
	}

	.tabs {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.tabs label {
		order: 1;
		display: block;
		padding: 1rem 2rem;
		margin-right: 0.2rem;
		cursor: pointer;
		background: #c3c7c8;
		transition: background ease 0.2s;
		border-bottom: 3px solid #e5e5e7;
		min-width: 5rem;
		text-align: center;
	}

	.tabs .tab {
		order: 99;
		flex-grow: 1;
		width: 100%;
		display: none;
		padding: 1rem;
		background-color: #3f4f4f;
		color: #efefef;
	}

	.tabs input[type="radio"] {
		display: none;
	}

	.tabs input[type="radio"]:checked + label {
		background: #3f4f4f;
		border-bottom: none;
		color: #efefef;
	}

	.tabs input[type="radio"]:checked + label + .tab {
		display: block;
	}

	@media (max-width: 45em) {
		.tabs .tab,
		.tabs label {
			order: initial;
		}
		.tabs label {
			width: 100%;
			margin-right: 0;
			margin-top: 0.2rem;
		}
	}

	.lorem {
		height: 244px;
	}

	.left {
		justify-content: right;
	}

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