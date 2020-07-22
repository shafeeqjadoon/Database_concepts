(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{1804:function(e,t,n){"use strict";var r=n(24),i=n(108),o=n(135),s=n(0),c=n(2),a=n.n(c),u=n(2568),h=["client","offset","scroll","bounds","margin"];function f(e){var t=[];return h.forEach((function(n){e[n]&&t.push(n)})),t}function d(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var i=getComputedStyle(e);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}var l=function(e){return function(t){var n,c;return c=n=function(n){function c(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=n.call.apply(n,[this].concat(i))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},t._animationFrameID=null,t._resizeObserver=null,t._node=null,t.measure=function(n){var r=d(t._node,e||f(t.props));n&&(r.entry=n[0].contentRect),t._animationFrameID=window.requestAnimationFrame((function(){null!==t._resizeObserver&&(t.setState({contentRect:r}),"function"===typeof t.props.onResize&&t.props.onResize(r))}))},t._handleRef=function(e){null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.unobserve(t._node),t._node=e,null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.observe(t._node);var n=t.props.innerRef;n&&("function"===typeof n?n(t._node):n.current=t._node)},t}Object(o.a)(c,n);var a=c.prototype;return a.componentDidMount=function(){this._resizeObserver=new u.a(this.measure),null!==this._node&&(this._resizeObserver.observe(this._node),"function"===typeof this.props.onResize&&this.props.onResize(d(this._node,e||f(this.props))))},a.componentWillUnmount=function(){null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),window.cancelAnimationFrame(this._animationFrameID)},a.render=function(){var e=this.props,n=(e.innerRef,e.onResize,Object(i.a)(e,["innerRef","onResize"]));return Object(s.createElement)(t,Object(r.a)({},n,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},c}(s.Component),n.propTypes={client:a.a.bool,offset:a.a.bool,scroll:a.a.bool,bounds:a.a.bool,margin:a.a.bool,innerRef:a.a.oneOfType([a.a.object,a.a.func]),onResize:a.a.func},c}}()((function(e){var t=e.measure,n=e.measureRef,r=e.contentRect;return(0,e.children)({measure:t,measureRef:n,contentRect:r})}));l.displayName="Measure",l.propTypes.children=a.a.func,t.a=l},2568:function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}())}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!==typeof MutationObserver,a=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&a()}function c(){o(s)}function a(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,t);i=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},h=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},f=b(0,0,0,0);function d(e){return parseFloat(e)||0}function l(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+d(e["border-"+n+"-width"])}),0)}function p(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return f;var r=h(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=d(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,c=d(r.width),a=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==t&&(c-=l(r,"left","right")+o),Math.round(a+s)!==n&&(a-=l(r,"top","bottom")+s)),!function(e){return e===h(e).document.documentElement}(e)){var u=Math.round(c+o)-t,p=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(p)&&(a-=p)}return b(i.left,i.top,c,a)}var _="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof h(e).SVGGraphicsElement}:function(e){return e instanceof h(e).SVGElement&&"function"===typeof e.getBBox};function v(e){return r?_(e)?function(e){var t=e.getBBox();return b(0,0,t.width,t.height)}(e):p(e):f}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}var m=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),y=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return u(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}(t);u(this,{target:e,contentRect:n})},g=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof h(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new m(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof h(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new y(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w="undefined"!==typeof WeakMap?new WeakMap:new n,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new g(t,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}}));var E="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:O;t.a=E}).call(this,n(191))}}]);
//# sourceMappingURL=3.c278f500.chunk.js.map