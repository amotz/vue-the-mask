(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTheMask=e():t.VueTheMask=e()})(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=8)}([function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"";for(var o=0,i=0,s="";o<e.length&&i<t.length;){var u=e[o],a=r[u],c=t[i];a&&!a.escape?(a.pattern.test(c)&&(s+=a.transform?a.transform(c):c,o++),i++):(a&&a.escape&&(o++,u=e[o]),n&&(s+=u),c===u&&i++,o++)}for(var f="";o<e.length&&n;){var u=e[o];if(r[u]){f="";break}f+=u,o++}return s+f}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";var r=n(1),o=n(5);o.tokens=r,o.install=function(t){return t.component(o.name,o)},o.version="0.7.0",t.exports=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=r(o),s=n(4),u=r(s),a=n(1),c=r(a);e.default={name:"TheMask",props:{value:String,mask:{type:[String,Function,Array],required:!0},masked:{type:Boolean,default:!1},placeholder:{type:String},type:{type:String,default:"text"},tokens:{type:Object,default:function(){return c.default}}},data:function(){return{result:""}},mounted:function(){this.refresh(this.value)},watch:{value:function(t){t!==this.result&&this.refresh(t)},mask:function(){this.refresh(this.getDisplay())},masked:function(){this.refresh(this.getDisplay())}},computed:{placeholderOrMask:function(){return void 0===this.placeholder||null===this.placeholder?"function"==typeof this.convertedMask?"":this.convertedMask:this.placeholder},convertedMask:function(){return Array.isArray(this.mask)?(0,u.default)(this.mask,this.tokens):this.mask},masker:function(){return"function"==typeof this.convertedMask?this.convertedMask:i.default}},methods:{refresh:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.getPosition();this.setDisplay(this.masker(t,this.convertedMask,!0,this.tokens));var n=this.result;this.result=this.masker(t,this.convertedMask,this.masked,this.tokens),n!=this.result&&this.$emit("input",this.result);var r=t.substring(0,e);if(r!==this.getDisplay().substring(0,e))for(var o=r[e-1];e<this.getDisplay().length&&this.getDisplay().charAt(e-1)!==o;)e++;this.setPosition(e)},emitCursor:function(){this.$emit("cursor",this.getPosition())},getPosition:function(){return this.$el.selectionEnd||0},setPosition:function(t){this.$el.setSelectionRange(t,t),this.emitCursor()},getDisplay:function(){return this.$el.value||""},setDisplay:function(t){this.$el.value=t}}}},function(t,e,n){"use strict";function r(t,e){var n=t.sort(function(t,e){return t.length-e.length}),r=o(n,2),i=r[0],u=r[1];return function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,s.default)(t,u,!0,e).length>i.length?(0,s.default)(t,u,r,e):(0,s.default)(t,i,r,e)}}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=r;var i=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){var r=n(6)(n(3),n(7),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var a=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}})}return{esModule:o,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:t.type,placeholder:t.placeholderOrMask},on:{input:function(e){t.refresh(e.target.value)}}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(2)}])});