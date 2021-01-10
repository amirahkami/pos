<template>
	<div>
		<ul id="growing-search-freebie">
			<li>
				<div class="growing-search">
					<div class="submit">
						<button type="submit">Zu zahlen</button>
					</div>
					<div class="input">
						<input
							type="text"
							v-number-only
							@focus="$store.commit('switch', 1)"
							:value="$store.state.numberized + ' €'"
						/>
					</div>
				</div>
			</li>
			<li>
				<div class="growing-search">
					<div class="submit">
						<button type="submit">Gegeben</button>
					</div>
					<div class="input">
						<input
							type="text"
							@focus="$store.commit('switch', 2)"
							:value="$store.state.numberizedGiven + ' €'"
						/>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Entry",
		directives: {
			numberOnly: {
				bind: function (el) {
					el.handler = function () {
						el.value = el.value.replace(/\D+/, "");
					};
					el.addEventListener("input", el.handler);
				},
				unbind: function (el) {
					el.removeEventListener("input", el.handler);
				},
			},
		},
	};
</script>

<style scoped>
	ul#growing-search-freebie {
		display: table;
		list-style: none;
		margin: 5rem auto 5rem auto;
		padding: 0;
	}

	ul#growing-search-freebie > li {
		float: left;
		margin-right: 20px;
		margin-bottom: 20px;
		padding: 10px 10px;
	}

	ul#growing-search-freebie > li:last-child {
		margin-right: 0;
	}

	ul#growing-search-freebie > li > span {
		margin-bottom: 10px;
	}

	.growing-search {
		padding: 5px 5px 5px 7px;
		background: #fff;
	}

	.growing-search div {
		display: inline-block;
		font-size: 12px;
	}

	.growing-search .input input {
		margin-right: 0;
		border: none;
		font-size: inherit;
		transition: width 200ms;
		padding-top: 5px;
		padding-left: 5px;
		padding-bottom: 5px;
		width: 155px;
		height: 77px;
		color: #3f4f4f;
		border-bottom: 1px solid #667173;
		font-size: 2rem;
	}

	.growing-search .input input:focus {
		width: 250px;
	}

	.growing-search .submit button {
		margin-left: 0;
		border: none;
		font-size: 1.15em;
		color: #aaa;
		background-color: #fff;
		padding-top: 2px;
		padding-bottom: 2px;
		transition: color 200ms;
	}

	.growing-search .input input:hover,
	.growing-search .submit button:hover {
		cursor: pointer;
	}

	.growing-search .input input:focus,
	.growing-search .submit button:focus {
		outline: none;
	}
</style>