!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","prop-types","react"],t):"object"==typeof exports?exports.ReactSelectedItems=t(require("classnames"),require("noop"),require("prop-types"),require("react")):e.ReactSelectedItems=t(e.classnames,e.noop,e["prop-types"],e.react)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(5),d=r(p),v=n(4),y=r(v),h=n(2),m=r(h),b=n(3),g=r(b),O="selected",_=(l=i=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=c({disabled:e.disabled},t.getDefaultState(e)),n}return u(t,e),f(t,null,[{key:"getDefaultState",value:function(e){var t=e.items,n=e.value,r=e.valueKey,o=e.disabled;e.type;return t.forEach(function(e){e[O]=n.indexOf(e[r])>-1}),{items:t,value:n,disabled:o}}}]),f(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.state&&this.setState(t.getDefaultState(e))}},{key:"getValues",value:function(){var e=this.props.valueKey,t=this.state.items,n=[];return t.forEach(function(t){t[O]&&n.push(t[e])}),n}},{key:"getChildren",value:function(){var e=this,t=this.props.children,n=this.state.items;return n.map(function(n,r){n[O];return d.default.cloneElement(t,Object.assign({key:r,onClick:e._onClick.bind(e,n),"data-selected":n[O]},n))})}},{key:"multipleProcessor",value:function(e){var t=this.state.items;e[O]=!e[O],this.updateState(t)}},{key:"singleProcessor",value:function(e){var t=this.state.items;t.forEach(function(e){e[O]=!1}),e[O]=!0,this.updateState(t)}},{key:"toggleProcessor",value:function(e){var t=this.state.items;t.forEach(function(t){t===e?t[O]=!t[O]:t[O]=!1}),this.updateState(t)}},{key:"otherProcessor",value:function(e){var t=this.props.onChange;t(e,this)}},{key:"updateState",value:function(e){var t=this,n=this.props.onChange;this.setState({items:e.slice(0)},function(){var e=t.getValues();n({target:{value:e}})})}},{key:"_onClick",value:function(e){var t=this.props,n=(t.multiple,t.onChange,t.type),r=t.disabled;!r&&this[n+"Processor"](e)}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.type,e.items,e.value,e.valueKey,e.onChange,o(e,["className","type","items","value","valueKey","onChange"]));return d.default.createElement("div",c({},n,{className:(0,m.default)("react-active-items",t)}),this.getChildren())}}]),t}(p.PureComponent),i.SELECTED_KEY=O,i.propTypes={className:y.default.string,type:y.default.oneOf(["single","multiple","toggle","other"]),items:y.default.array,value:y.default.array,disabled:y.default.bool,valueKey:y.default.string,onChange:y.default.func},i.defaultProps={type:"single",items:[],value:[],disabled:!1,valueKey:"value",onChange:g.default},l);t.default=_},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-selected-items.js.map