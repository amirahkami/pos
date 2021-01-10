<template>
	<div id="app">
		<Navbar />
		<Entry />
		<Tabs></Tabs>
	</div>
</template>

<script>
	import Navbar from "./components/Navbar.vue";
	import Entry from "./components/Entry.vue";
	import Tabs from "./components/Tabs.vue";

	export default {
		name: "App",
		components: {
			Navbar,
			Entry,
			Tabs,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #e5e5e7;
		height: 100vh;
	}
	.w100 {
		width: 100%;
	}
</style>
