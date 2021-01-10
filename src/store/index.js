import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		topay: "",
		given: "",
		flag: 0,
		numberized: 0,
		numberizedGiven: 0,
		expectationFirst: 0,
		expectationSecond: 0,
		expectationThird: 0,
		expectationFourth: 0,
	},

	mutations: {

		switch(state, aaa){
			state.flag = aaa;
		},

		append(state, num){

			if (state.flag == 1) {
				if (state.topay == "" && num == "0") {
					return;
				} else if (Number(state.topay.concat(num)>100000)) {
					return;
				} else {
					state.topay = state.topay.concat(num);
					state.numberized = (Number(state.topay)/100).toFixed(2);
					state.expectationFirst = (Math.ceil(state.numberized/0.5)*0.5).toFixed(2);
					state.expectationSecond = (Math.ceil(state.numberized/5)*5).toFixed(2);
					state.expectationThird = (Math.ceil(state.numberized/50)*50).toFixed(2);
					state.expectationFourth = (Math.ceil(state.numberized/100)*100).toFixed(2);
				}
			} else if (state.flag == 2) {
				if (state.given == "" && num == "0") {
					return;
				} else if (Number(state.given.concat(num)>100000)) {
					return;
				} else {
					state.given = state.given.concat(num);
					state.numberizedGiven = (Number(state.given)/100).toFixed(2);
				}
			}
			else {
				return;
			}
		},

		select(state, arg){
			state.given = (arg * 100).toFixed(0);
			state.given = state.given.toString();
			state.numberizedGiven = (Number(state.given)/100).toFixed(2);
		},

		clear(state){
			state.topay = "";
			state.numberized = 0;
			state.expectationFirst = 0;
			state.expectationSecond = 0;
			state.expectationThird = 0;
			state.expectationFourth = 0;
		},

		back(state){
			state.topay = state.topay.substring(0, state.topay.length - 1);
			state.numberized = (Number(state.topay)/100).toFixed(2);
			state.expectationFirst = (Math.ceil(state.numberized/0.5)*0.5).toFixed(2);
			state.expectationSecond = (Math.ceil(state.numberized/5)*5).toFixed(2);
			state.expectationThird = (Math.ceil(state.numberized/50)*50).toFixed(2);
			state.expectationFourth = (Math.ceil(state.numberized/100)*100).toFixed(2);
		},

		reset(state){
			state.topay = "";
			state.given = "";
			state.flag = 0;
			state.numberized = 0;
			state.numberizedGiven = 0;
			state.expectationFirst = 0;
			state.expectationSecond = 0;
			state.expectationThird = 0;
			state.expectationFourth = 0;
		}
	},

	actions: {
	},

	getters: {
	},

	modules: {
	}
})
