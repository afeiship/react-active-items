!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("object-assign"),require("prop-types"),require("noop")):"function"==typeof define&&define.amd?define(["react","classnames","object-assign","prop-types","noop"],t):"object"==typeof exports?exports.ReactSelectedItems=t(require("react"),require("classnames"),require("object-assign"),require("prop-types"),require("noop")):e.ReactSelectedItems=t(e.react,e.classnames,e["object-assign"],e["prop-types"],e.noop)}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(7),a=r(o),i=n(6),u=r(i),c=n(2);e.exports={ReactSelectedItems:a.default,ReactSelectedItem:u.default,SELECTED_KEY:c.SELECTED_KEY}},function(t,n){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SELECTED_KEY="selected"},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),p=r(f),d=n(3),y=r(d),h=n(1),E=n(4),m=r(E),b=(s=c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return this.children}},{key:"children",get:function(){var e=this.props,t=e.nodeName,n=e.className,r=e.selected,a=(e.data,o(e,["nodeName","className","selected","data"])),i=(0,y.default)("react-selected-item",n),u=(0,m.default)({className:i,"data-selected":r},a);return(0,h.createElement)(t,u)}}]),t}(e.PureComponent),c.propTypes={nodeName:p.default.string,selected:p.default.bool},c.defaultProps={nodeName:"div",selected:!1},s);t.default=b}).call(t,n(1))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),y=r(d),h=n(5),E=r(h),m=n(2),b=n(3),_=r(b),v=n(8),g=r(v),O=n(4),j=r(O),C=(l=s=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:n.getItems(e)},n}return c(t,e),p(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({items:this.getItems(e)})}},{key:"radio",value:function(e){var t=this.state.items;t.forEach(function(t){e===t?e[m.SELECTED_KEY]=!0:t[m.SELECTED_KEY]=!1}),this.__updateItems(t)}},{key:"checkbox",value:function(e){var t=this.state.items;e[m.SELECTED_KEY]=!e[m.SELECTED_KEY],this.__updateItems(t)}},{key:"toggle",value:function(e){var t=this.state.items;t.forEach(function(t){t===e?t[m.SELECTED_KEY]=!t[m.SELECTED_KEY]:t[m.SELECTED_KEY]=!1}),this.__updateItems(t)}},{key:"other",value:function(){}},{key:"getItems",value:function(e){return d.Children.map(e.children,function(e){return f({},e.props)})}},{key:"_onClick",value:function(e){this[this.props.type](e)}},{key:"__getData",value:function(e){return e.map(function(e){return(0,j.default)(e.data,a({},m.SELECTED_KEY,e[m.SELECTED_KEY]))})}},{key:"__updateItems",value:function(e){var t=this,n=this.props.onChange,r=e.slice(0);this.setState({items:r},function(){n({target:{value:t.__getData(r)}})})}},{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);return y.default.createElement("div",f({},n,{className:(0,_.default)("react-active-items",t)}),this.children)}},{key:"children",get:function(){var e=this,t=this.state.items;return t.map(function(t,n){return t.onClick=e._onClick.bind(e,t),(0,d.cloneElement)(e.props.children[n],t)})}}]),t}(d.PureComponent),s.propTypes={className:E.default.string,onChange:E.default.func,type:E.default.oneOf(["toggle","radio","checkbox","other"])},s.defaultProps={value:[],onChange:g.default,type:"toggle"},l);t.default=C},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-selected-items.js.map