(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pos/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d1f":function(t,e,n){"use strict";n("5e53")},"14a3":function(t,e,n){"use strict";n("9cb7")},"3da2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Entry"),n("Tabs")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),n("ul",[n("li",{staticClass:"profile"},[n("span",{staticClass:"badge"},[t._v(t._s(t.profile))]),t._v(" "+t._s(t.cashier)+" ")]),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("i",{staticClass:"fa fa-lock"})]),n("li",[n("i",{staticClass:"fa fa-th"})]),n("li",[n("i",{staticClass:"fa fa-grip-lines"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("i",{staticClass:"fa fa-plus"})])}],c={name:"Navbar",data:function(){return{cashier:"Verkauf 012",profile:"VK"}}},u=c,l=(n("9797"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,"86e2b71a",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{attrs:{id:"growing-search-freebie"}},[n("li",[n("div",{staticClass:"growing-search"},[t._m(0),n("div",{staticClass:"input"},[n("input",{directives:[{name:"number-only",rawName:"v-number-only"}],attrs:{type:"text"},domProps:{value:t.$store.state.numberized+" €"},on:{focus:function(e){return t.$store.commit("switch",1)}}})])])]),n("li",[n("div",{staticClass:"growing-search"},[t._m(1),n("div",{staticClass:"input"},[n("input",{attrs:{type:"text"},domProps:{value:t.$store.state.numberizedGiven+" €"},on:{focus:function(e){return t.$store.commit("switch",2)}}})])])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("button",{attrs:{type:"submit"}},[t._v("Zu zahlen")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("button",{attrs:{type:"submit"}},[t._v("Gegeben")])])}],v=(n("ac1f"),n("5319"),{name:"Entry",directives:{numberOnly:{bind:function(t){t.handler=function(){t.value=t.value.replace(/\D+/,"")},t.addEventListener("input",t.handler)},unbind:function(t){t.removeEventListener("input",t.handler)}}}}),b=v,_=(n("ad86"),Object(l["a"])(b,p,m,!1,null,"e7e4dae0",null)),h=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("input",{attrs:{type:"radio",name:"tabs",id:"tabone",checked:"checked"}}),n("label",{attrs:{for:"tabone"}},[t._v("Bar")]),n("div",{staticClass:"tab"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex left"},[n("div",{staticClass:"w100"}),n("Expectation")],1),n("div",{staticClass:"flex"},[n("Numpad"),n("div",{staticClass:"wrapper w100"},[n("button",{staticClass:"btn-payment",on:{click:t.openModal}},[t._v(" Zahlen ")])]),n("Modal",{model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}})],1)])]),n("input",{attrs:{type:"radio",name:"tabs",id:"tabtwo"}}),n("label",{attrs:{for:"tabtwo"}},[t._v("EC")]),t._m(0),n("input",{attrs:{type:"radio",name:"tabs",id:"tabthree"}}),n("label",{attrs:{for:"tabthree"}},[t._v("Kreditkarte")]),t._m(1),n("input",{attrs:{type:"radio",name:"tabs",id:"tabfour"}}),n("label",{attrs:{for:"tabfour"}},[t._v("Gutschein")]),t._m(2),n("input",{attrs:{type:"radio",name:"tabs",id:"tabfive"}}),n("label",{attrs:{for:"tabfive"}},[t._v("Sonstige")]),t._m(3)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("p",{staticClass:"lorem"},[t._v("EC")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("p",{staticClass:"lorem"},[t._v("Kreditkarte")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("p",{staticClass:"lorem"},[t._v("Gutschein")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("p",{staticClass:"lorem"},[t._v("Sonstige")])])}],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ex"},[n("div",{staticClass:"btn",on:{click:function(e){return t.$store.commit("select",t.$store.state.numberized)}}},[n("div",[t._v(" "+t._s(t.$store.state.numberized+" €")+" ")])]),n("div",{staticClass:"btn",on:{click:function(e){return t.$store.commit("select",t.$store.state.expectationFirst)}}},[n("div",[t._v(" "+t._s(t.$store.state.expectationFirst+" €")+" ")])]),n("div",{staticClass:"btn",on:{click:function(e){return t.$store.commit("select",t.$store.state.expectationSecond)}}},[n("div",[t._v(" "+t._s(t.$store.state.expectationSecond+" €")+" ")])]),n("div",{staticClass:"btn",on:{click:function(e){return t.$store.commit("select",t.$store.state.expectationThird)}}},[n("div",[t._v(" "+t._s(t.$store.state.expectationThird+" €")+" ")])]),n("div",{staticClass:"btn",on:{click:function(e){return t.$store.commit("select",t.$store.state.expectationFourth)}}},[n("div",[t._v(" "+t._s(t.$store.state.expectationFourth+" €")+" ")])])])},y=[],g={},k=g,F=(n("affd"),Object(l["a"])(k,$,y,!1,null,"1a2f50e8",null)),w=F.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"numpad"},[n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","7")}}},[t._v("7")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","8")}}},[t._v("8")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","9")}}},[t._v("9")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","4")}}},[t._v("4")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","5")}}},[t._v("5")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","6")}}},[t._v("6")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","1")}}},[t._v("1")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","2")}}},[t._v("2")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","3")}}},[t._v("3")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("back")}}},[n("i",{staticClass:"fa fa-backspace"})]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("append","0")}}},[t._v("0")]),n("div",{staticClass:"num",on:{click:function(e){return t.$store.commit("reset")}}},[t._v("C")])])])},O=[],E={},M=E,S=(n("8c2f"),Object(l["a"])(M,z,O,!1,null,"3dbf819b",null)),j=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal"},[n("div",[n("p",[t._v(" "+t._s(Number(t.$store.state.numberizedGiven-t.$store.state.numberized).toFixed(2)+" €")),n("br"),t._v("zurück ")]),n("div",[n("button",{staticClass:"btn",on:{click:[function(e){return e.preventDefault(),t.close(e)},function(e){return t.$store.commit("reset")}]}},[t._v(" Schließen ")])])])])},T=[],G={name:"Modal",props:{value:{required:!0}},methods:{close:function(){this.$emit("input",!this.value)}}},P=G,K=(n("14a3"),Object(l["a"])(P,N,T,!1,null,"e9f62378",null)),D=K.exports,J={name:"Tabs",components:{Expectation:w,Numpad:j,Modal:D},data:function(){return{modalOpen:!1}},methods:{openModal:function(){this.modalOpen=!this.modalOpen}}},L=J,V=(n("0d1f"),Object(l["a"])(L,x,C,!1,null,"2000ef52",null)),Z=V.exports,q={name:"App",components:{Navbar:f,Entry:h,Tabs:Z}},A=q,B=(n("034f"),Object(l["a"])(A,a,r,!1,null,null,null)),H=B.exports,I=(n("99af"),n("a9e3"),n("b680"),n("d3b7"),n("25f0"),n("2f62"));i["a"].use(I["a"]);var Q=new I["a"].Store({state:{topay:"",given:"",flag:0,numberized:0,numberizedGiven:0,expectationFirst:0,expectationSecond:0,expectationThird:0,expectationFourth:0},mutations:{switch:function(t,e){t.flag=e},append:function(t,e){if(1==t.flag){if(""==t.topay&&"0"==e)return;if(Number(t.topay.concat(e)>1e5))return;t.topay=t.topay.concat(e),t.numberized=(Number(t.topay)/100).toFixed(2),t.expectationFirst=(.5*Math.ceil(t.numberized/.5)).toFixed(2),t.expectationSecond=(5*Math.ceil(t.numberized/5)).toFixed(2),t.expectationThird=(50*Math.ceil(t.numberized/50)).toFixed(2),t.expectationFourth=(100*Math.ceil(t.numberized/100)).toFixed(2)}else{if(2!=t.flag)return;if(""==t.given&&"0"==e)return;if(Number(t.given.concat(e)>1e5))return;t.given=t.given.concat(e),t.numberizedGiven=(Number(t.given)/100).toFixed(2)}},select:function(t,e){t.given=(100*e).toFixed(0),t.given=t.given.toString(),t.numberizedGiven=(Number(t.given)/100).toFixed(2)},clear:function(t){t.topay="",t.numberized=0,t.expectationFirst=0,t.expectationSecond=0,t.expectationThird=0,t.expectationFourth=0},back:function(t){t.topay=t.topay.substring(0,t.topay.length-1),t.numberized=(Number(t.topay)/100).toFixed(2),t.expectationFirst=(.5*Math.ceil(t.numberized/.5)).toFixed(2),t.expectationSecond=(5*Math.ceil(t.numberized/5)).toFixed(2),t.expectationThird=(50*Math.ceil(t.numberized/50)).toFixed(2),t.expectationFourth=(100*Math.ceil(t.numberized/100)).toFixed(2)},reset:function(t){t.topay="",t.given="",t.flag=0,t.numberized=0,t.numberizedGiven=0,t.expectationFirst=0,t.expectationSecond=0,t.expectationThird=0,t.expectationFourth=0}},actions:{},getters:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:Q,render:function(t){return t(H)}}).$mount("#app")},"5e53":function(t,e,n){},"85ec":function(t,e,n){},"8c2f":function(t,e,n){"use strict";n("3da2")},9797:function(t,e,n){"use strict";n("baa8")},"9cb7":function(t,e,n){},ad86:function(t,e,n){"use strict";n("e8f1")},affd:function(t,e,n){"use strict";n("ffa9")},baa8:function(t,e,n){},e8f1:function(t,e,n){},ffa9:function(t,e,n){}});
//# sourceMappingURL=app.27575e95.js.map