(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9,10,11],{259:function(t,e,r){"use strict";var n=r(11),o=r(0),c=r(3),l=r(104),f=r(18),d=r(14),v=r(190),m=r(42),y=r(103),h=r(189),x=r(4),_=r(73).f,O=r(36).f,w=r(16).f,C=r(262),j=r(263).trim,E="Number",k=o.Number,I=k.prototype,P=o.TypeError,N=c("".slice),A=c("".charCodeAt),S=function(t){var e=h(t,"number");return"bigint"==typeof e?e:$(e)},$=function(t){var e,r,n,o,c,l,f,code,d=h(t,"number");if(y(d))throw P("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=j(d),43===(e=A(d,0))||45===e){if(88===(r=A(d,2))||120===r)return NaN}else if(48===e){switch(A(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=N(d,2)).length,f=0;f<l;f++)if((code=A(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(E,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var F,D=function(t){var e=arguments.length<1?0:k(S(t)),r=this;return m(I,r)&&x((function(){C(r)}))?v(Object(e),r,D):e},L=n?_(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;L.length>T;T++)d(k,F=L[T])&&!d(D,F)&&w(D,F,O(k,F));D.prototype=I,I.constructor=D,f(o,E,D)}},260:function(t,e,r){"use strict";r.r(e);r(35),r(23),r(34),r(12),r(50),r(29),r(51);var n=r(19);r(259);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"AppFormInput",props:{value:{type:[String,Number],default:void 0},placeholder:{type:String,default:void 0},type:{type:String,default:"text"}},data:function(){return{localValue:this.value}},watch:{value:function(t){this.localValue=t}},computed:{inputListeners:function(){var t=this;return c(c({},this.$listeners),{},{input:function(e){t.$emit("input",e.target.value)}})}}},f=r(49),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",t._g({staticClass:"block w-full transition ease-in-out duration-150 text-gray-800 bg-white placeholder-gray-300 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200 shadow-sm text-sm px-4 py-2 rounded",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value}},t.inputListeners))}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,r){"use strict";r.r(e);var n={name:"AppFormLabel"},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"block text-gray-700 text-sm font-semibold mb-2 tracking-wide"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},263:function(t,e,r){var n=r(3),o=r(22),c=r(13),l=r(264),f=n("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),y=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,v,"")),2&t&&(r=f(r,m,"")),r}};t.exports={start:y(1),end:y(2),trim:y(3)}},264:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},265:function(t,e,r){"use strict";r.r(e);var n={name:"AppButton",data:function(){return{}},methods:{}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center justify-center border focus:outline-none transition ease-in-out duration-150 text-white bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 rounded text-sm px-4 py-2",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";var n=r(6),o=r(74).findIndex,c=r(133),l="findIndex",f=!0;l in[]&&Array(1).findIndex((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},278:function(t,e,r){"use strict";r.r(e);r(35),r(23),r(34),r(12),r(50),r(29),r(51);var n=r(19),o=r(10),c=(r(60),r(52),r(269),r(191),r(38),r(265)),l=r(260),f=r(261);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"categoriesPage",components:{AppButton:c.default,AppFormInput:l.default,AppFormLabel:f.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("categories/getCategories").then((function(t){return t.map((function(t){return v(v({},t),{},{is_updating:!1})}))}));case 3:return e.t0=e.sent,e.abrupt("return",{categories:e.t0});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{name:""}},methods:{deleteCategory:function(t){var e=this;this.$store.dispatch("categories/deleteCategory",t).then((function(){var r=e.categories.findIndex((function(e){return e.id===t}));e.categories.splice(r,1)}))},toUpdate:function(t){t.is_updating=!0},updateCategory:function(t){var data={name:t.name};this.$store.dispatch("categories/updateCategory",{id:t.id,data:data}).then((function(){t.is_updating=!1}))},addCategory:function(){var t=this;if(this.name){var data={name:this.name};this.$store.dispatch("categories/addCategory",data).then((function(e){t.categories.push(e),t.name=""}))}}}},y=r(49),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"max-w-7xl mx-auto p-4"},[r("div",{staticClass:"mt-4"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-6"},[r("div",[r("div",{staticClass:"flex items-center space-x-3"},[r("div",[r("AppFormInput",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCategory.apply(null,arguments)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("AppButton",{on:{click:t.addCategory}},[t._v(" Adicionar ")])],1)]),t._v(" "),r("table",{staticClass:"mt-4 min-w-full divide-y divide-gray-200 shadow"},[r("caption"),t._v(" "),t._m(1),t._v(" "),r("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.categories,(function(e){return r("tr",{key:e.id,staticClass:"bg-white"},[r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},[e.is_updating?r("div",{staticClass:"w-72"},[r("AppFormInput",{on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.updateCategory(e)}},model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"category.name"}})],1):[t._v("\n                  "+t._s(e.name)+"\n                ")]],2),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4"},[r("a",{staticClass:"text-indigo-600 hover:text-indigo-900",attrs:{href:"#"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toUpdate(e)}}},[t._v("Edit\n                ")]),t._v(" "),r("a",{staticClass:"text-red-600 hover:text-red-900",attrs:{href:"#"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteCategory(e.id)}}},[t._v("Excluir\n                ")])])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("h1",{staticClass:"font-bold text-2xl"},[t._v("Categorias")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"bg-gray-50"},[r("tr",[r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                Categoria\n              ")]),t._v(" "),r("th",{staticClass:"relative px-6 py-3",attrs:{scope:"col"}},[r("span",{staticClass:"sr-only"},[t._v("Edit")])])])])}],!1,null,null,null);e.default=component.exports}}]);