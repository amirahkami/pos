<template>
	<div class="navbar">
		<ul>
			<li><i class="fa fa-lock"></i></li>
			<li><i class="fa fa-th"></i></li>
			<li><i class="fa fa-grip-lines"></i></li>
		</ul>
		<ul>
			<li class="profile">
				<span class="badge">{{ profile }}</span> {{ cashier }}
			</li>
			<li><i class="fa fa-plus"></i></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				cashier: "Verkauf 012",
				profile: "VK",
			};
		},
	};
</script>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #3f4f4f;
		color: #efefef;
		padding-top: 5px;
	}

	.navbar ul {
		list-style-type: none;
	}

	.navbar ul li {
		display: inline;
		padding: 18px;
	}

	.profile {
		background-color: #e5e5e7;
		color: #000;
	}

	.badge {
		padding: 0.75rem;
		border-radius: 100%;
		background-color: #046575;
		color: #efefef;
	}
</style>