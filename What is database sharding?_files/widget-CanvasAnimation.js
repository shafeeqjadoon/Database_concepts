(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[50,49],{1530:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),s=n.n(a),o=n(50),r=n(1730),i=n(2106);const l=Object(o.a)({resolved:{},chunkName:()=>"author",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(28)]).then(n.bind(null,1989)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 1989}},{fallback:s.a.createElement("div",null,"Loading...")});class c extends a.Component{constructor(){super(...arguments),this.canvasSvgRenderAreaRef=s.a.createRef(),this.dropTargetCanvasRef=s.a.createRef(),this.saveComponent=()=>{"edit"===this.props.mode&&this.dropTargetCanvasRef.current&&this.dropTargetCanvasRef.current.getDecoratedComponentInstance().saveComponent&&this.dropTargetCanvasRef.current.getDecoratedComponentInstance().saveComponent()},this.setSvg=e=>{if(!this.canvasSvgRenderAreaRef.current)return;const t=this.canvasSvgRenderAreaRef.current;t.innerHTML=e,t.lastChild&&t.lastChild.setAttribute("style","width: 100%; height: 100%; max-width: ".concat(this.props.content.width))}}static getComponentDefault(){return i.a}componentDidMount(){"view"===this.props.mode&&this.setSvg(this.props.content.svg_string)}componentDidUpdate(){"view"===this.props.mode&&this.setSvg(this.props.content.svg_string)}render(){const e="edit"!==this.props.mode;let t="center";if(this.props.pageProperties&&this.props.pageProperties.pageAlign&&(t=this.props.pageProperties.pageAlign),e){let n="";this.props.content.caption&&(n=this.props.content.caption);const a=s.a.createElement(r.a,{caption:n,onCaptionChange:this.onCaptionChange,readOnly:e});return s.a.createElement("div",{style:{textAlign:t}},s.a.createElement("div",{key:"canvas-wrapper-view",className:"canvas-wrapper"},s.a.createElement("div",{ref:this.canvasSvgRenderAreaRef,className:"canvas-svg-viewmode"}),a))}return s.a.createElement(l,Object.assign({ref:this.dropTargetCanvasRef},this.props))}}c.defaultProps={mode:"",content:{width:0,height:0,objectsDict:{}}}},1632:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(0),o=n.n(s),r=n(133),i=n.n(r),l=n(18),c=n(814),p=n(650),d=n(1809),h=n(330);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var v=o.a.createElement("path",{d:"M9.1 0v18.2M0 9.1h18.2"});const g=e=>{let{svgRef:t,title:n}=e,a=m(e,["svgRef","title"]);return o.a.createElement("svg",u({className:"thin-plus-icon",viewBox:"0 0 18.2 18.2",ref:t},a),n?o.a.createElement("title",null,n):null,v)},f=o.a.forwardRef((e,t)=>o.a.createElement(g,u({svgRef:t},e)));n.p;var b=n(1819),y=n(1966),C=n(1740),w=n(57),x=n.n(w),O=e=>{let{feedback:t=!1,bundle:n="",className:a="",glyph:s=""}=e,r={"rubix-icon":!0,"form-control-feedback":t||!1};if(n){const e="icon-".concat(n,"-").concat(s);r=i()(r,{[n]:{$set:!0},[e]:{$set:!0}})}else r=i()(r,{[s]:{$set:!0}});const l={className:[a,x()(r).trim()].join(" ")};return o.a.createElement("span",l)},E=n(1530),j=n(44),S=n(2107),k=n(1749),I=n(1),R=n(12),N=n(1512),_=n(1510),P=n(2),D=n.n(P);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var L=function(e){var t=e.color,n=e.size,a=A(e,["color","size"]);return o.a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.a.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),o.a.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))};L.propTypes={color:D.a.string,size:D.a.oneOfType([D.a.string,D.a.number])},L.defaultProps={color:"currentColor",size:"24"};var M=L,T=n(1511),H=n(1957),B=n(1682),F=n(1518),V=n(1519),q=n(2108),W=n(146);I.d.div.withConfig({displayName:"styles__CanvasAnimationStyled",componentId:"sc-2az9w3-0"})([""]);const J=Object(I.d)(C.a).withConfig({displayName:"styles__SlidePreviewButton",componentId:"sc-2az9w3-1"})([":active,:focus{outline:none;background:",";}.b-some-with-icon,.b-some-with-icon-icon,svg{:focus,:active{outline:none;}}"],e=>{let{theme:t}=e;return t.palette.common.white}),U=I.d.div.withConfig({displayName:"styles__ThumbnailStrip",componentId:"sc-2az9w3-2"})(["display:flex;padding:10px 5px 5px 5px;overflow:auto;position:static;text-align:left;white-space:nowrap;width:100%;background-color:",";margin-bottom:5px;border-radius:",";"],e=>{let{theme:t}=e;return t.palette.grey[100]},l.D),$=I.d.a.withConfig({displayName:"styles__PlusButton",componentId:"sc-2az9w3-3"})(["display:inline-block;cursor:pointer;cursor:hand;margin-left:15px;margin-right:15px;top:45px;position:relative;width:36px;height:36px;.clone-icon{width:32px;height:32px;fill:"," !important;}&:hover{border:none;padding-bottom:0px;}svg{width:24px;height:24px;stroke:",";}"],e=>{let{theme:t}=e;return t.palette.grey[700]},e=>{let{theme:t}=e;return t.palette.common.black}),K=I.d.div.withConfig({displayName:"styles__AnimationContainer",componentId:"sc-2az9w3-4"})(["display:block;min-height:768px;.canvasContainer{display:block;}.fullscreenBtnWrapper{position:absolute;right:10px;top:13px;}.btnFullscreen{border:none;background:transparent;&:active,&:hover,&:focus{outline:none;background:transparent;box-shadow:none;}}&.fullscreen{position:fixed;top:0;bottom:0;left:0;right:0;z-index:500;background:",";padding-top:131px;.btnFullscreen{font-size:",";}.canvasAnimationThumbnailStrip{position:absolute;top:0;}.canvasContainer{height:100%;overflow:auto;}}"],e=>{let{theme:t}=e;return t.palette.common.white},R.a.h4),X=Object(I.c)(["margin-right:18px;box-shadow:0px 0px 9px ",";:hover,:focus{box-shadow:0px 0px 12px ",";}"],e=>{let{theme:t}=e;return t.palette.alphas.black2},e=>{let{theme:t}=e;return t.palette.alphas.black2}),G=I.d.div.withConfig({displayName:"styles__CanvasAnimationViewer",componentId:"sc-2az9w3-5"})(["border:1px solid ",";border-radius:",";margin-bottom:10px;"],e=>{let{theme:t}=e;return t.palette.grey[300]},l.m),Q=I.d.div.withConfig({displayName:"styles__ButtonsWrap",componentId:"sc-2az9w3-6"})(["display:flex;align-items:center;justify-content:center;margin-top:15px;"]),Y=I.d.div.withConfig({displayName:"styles__Number",componentId:"sc-2az9w3-7"})(["font-size:",";text-align:right;margin-right:15px;margin-bottom:10px;"],R.a.textMedium),Z=Object(I.d)(W.a).attrs({children:o.a.createElement(N.a,{size:22,"aria-label":"previous slide"})}).withConfig({displayName:"styles__Left",componentId:"sc-2az9w3-8"})(["",";"],X),ee=Object(I.d)(W.a).attrs({children:o.a.createElement(_.a,{size:22,"aria-label":"next slide"})}).withConfig({displayName:"styles__Right",componentId:"sc-2az9w3-9"})(["",";"],X),te=Object(I.d)(W.a).attrs({children:o.a.createElement(M,{size:22,"aria-label":"pause slide show"})}).withConfig({displayName:"styles__AnimationPause",componentId:"sc-2az9w3-10"})(["",";"],X),ne=Object(I.d)(W.a).attrs({children:o.a.createElement(T.a,{size:20,"aria-label":"start slide show"})}).withConfig({displayName:"styles__AnimationPlay",componentId:"sc-2az9w3-11"})(["",";padding:10px 9px 10px 12px;"],X),ae=Object(I.d)(W.a).attrs({children:o.a.createElement(H.a,{size:22,"aria-label":"got to first slide"})}).withConfig({displayName:"styles__Repeat",componentId:"sc-2az9w3-12"})(["",";"],X),se=Object(I.d)(W.a).attrs({children:o.a.createElement(B.a,{size:22,"aria-label":"view all slides"})}).withConfig({displayName:"styles__AnimationPlus",componentId:"sc-2az9w3-13"})(["",";"],X),oe=Object(I.d)(W.a).attrs({children:o.a.createElement(F.a,{size:20,"aria-label":"maximize"})}).withConfig({displayName:"styles__AnimationMaximize",componentId:"sc-2az9w3-14"})(["",";margin-right:0px;padding:10px;"],X),re=Object(I.d)(W.a).attrs({children:o.a.createElement(V.a,{size:20,"aria-label":"minimize"})}).withConfig({displayName:"styles__AnimationMinimize",componentId:"sc-2az9w3-15"})(["",";margin-right:0px;padding:10px;"],X),ie=Object(I.d)(W.a).attrs({children:o.a.createElement(q.a,{size:22})}).withConfig({displayName:"styles__AnimationMinus",componentId:"sc-2az9w3-16"})(["",";"],X);class le extends s.Component{constructor(e,t){super(e,t),this.moveLeft=e=>{if(e&&e.stopPropagation(),this.stop(),this.state.selectedCanvas>0){const e=this.state.selectedCanvas-1;this.setState({selectedCanvas:e})}},this.moveRight=e=>{if(e&&e.stopPropagation(),this.stop(),this.state.selectedCanvas<this.props.content.canvasObjects.length-1){const e=this.state.selectedCanvas+1;this.setState({selectedCanvas:e})}},this.reset=e=>{e&&e.stopPropagation(),this.stop(),this.props.content.canvasObjects.length>0&&this.setState({selectedCanvas:0})},this.play=e=>{e.stopPropagation(),this.setState({play:!0,timer:setInterval(this.moveRightTimed,1e3)})},this.moveRightTimed=e=>{if(e&&e.stopPropagation(),clearInterval(this.state.timer),this.state.selectedCanvas<this.props.content.canvasObjects.length-1){const e=this.state.selectedCanvas+1;this.setState({selectedCanvas:e})}this.state.selectedCanvas<this.props.content.canvasObjects.length-1?this.setState({timer:setInterval(this.moveRightTimed,1e3)}):this.setState({play:!1})},this.stop=e=>{e&&e.stopPropagation(),clearInterval(this.state.timer),!0===this.state.play&&this.setState({play:!1})},this.switchExpandedView=e=>{e&&e.stopPropagation(),clearInterval(this.state.timer),!1===this.state.play?this.setState({expandedView:!this.state.expandedView}):this.setState({expandedView:!this.state.expandedView,play:!1})},this.closeModal=()=>{this.stop(),k.a.remove()},this.showCanvasAnimationInModal=e=>{e&&e.stopPropagation(),this.stop();const t=o.a.createElement(le,{content:this.props.content,config:{displayFullScreen:!0},pageProperties:this.props.pageProperties});class n extends s.PureComponent{constructor(){super(...arguments),this.modalDgRef=o.a.createRef(),this.open=()=>{var e,t,n,a,s;null===this||void 0===this||null===(e=this.modalDgRef)||void 0===e||null===(t=e.current)||void 0===t||null===(n=t.modalRef)||void 0===n||null===(a=n.current)||void 0===a||null===(s=a.open)||void 0===s||s.call(a)}}render(){return o.a.createElement(S.a,{ref:this.modalDgRef},t)}}k.a.create(n,this,this.props.theme)},this.renderAnimatedCanvas=(e,t,n,a,s,r)=>{let i=null;if(null!=t&&0!==s){const e="canvasView".concat(n);i=o.a.createElement(G,{key:e},o.a.createElement(E.default,{key:n,mode:"view",content:t,pageProperties:this.props.pageProperties,config:a,onWidthChange:this.changeWidth,onHeightChange:this.changeHeight}),s>1&&o.a.createElement(Y,null,o.a.createElement("strong",null,r+1)," of ",s))}else i=o.a.createElement("p",{className:"text-center fg-darkgray50"},o.a.createElement("br",null),o.a.createElement("br",null),"No Canvas Added",o.a.createElement("br",null),o.a.createElement("br",null));return o.a.createElement("div",{style:{textAlign:e}},o.a.createElement("div",{style:{display:"block"}},i),s>1?o.a.createElement("div",{style:{textAlign:e}},o.a.createElement(Q,null,o.a.createElement(Z,{disabled:0===this.state.selectedCanvas,onClick:this.moveLeft}),o.a.createElement(ee,{disabled:this.state.selectedCanvas===s-1,onClick:this.moveRight}),this.state.play?o.a.createElement(te,{onClick:this.stop}):o.a.createElement(ne,{disabled:this.state.selectedCanvas===s-1,onClick:this.play}),o.a.createElement(ae,{disabled:0===this.state.selectedCanvas,onClick:this.reset}),o.a.createElement(se,{onClick:this.switchExpandedView}),this.props.config&&this.props.config.displayFullScreen?o.a.createElement(re,{onClick:this.closeModal}):o.a.createElement(oe,{onClick:this.showCanvasAnimationInModal}))):null)},this.renderExpandedCanvas=(e,t,n)=>{let a=this.props.content.canvasObjects.map((e,n)=>{const a=this.state.keys[n];return o.a.createElement(G,null,o.a.createElement(E.default,{key:a,mode:"view",content:e,pageProperties:this.props.pageProperties,config:t,onWidthChange:this.changeWidth,onHeightChange:this.changeHeight}),o.a.createElement(Y,null,o.a.createElement("strong",null,n+1)," of"," ",this.props.content.canvasObjects.length))});return null==a&&(a=o.a.createElement("p",{className:"text-center fg-darkgray50"},o.a.createElement("br",null),o.a.createElement("br",null),"No Canvas Added",o.a.createElement("br",null),o.a.createElement("br",null))),o.a.createElement("div",{style:{textAlign:e}},o.a.createElement("div",{style:{display:"block"}},a),o.a.createElement("div",{style:{textAlign:e}},o.a.createElement(Q,null,o.a.createElement(ie,{onClick:this.switchExpandedView}),this.props.config&&this.props.config.displayFullScreen?o.a.createElement(re,{onClick:this.closeModal}):o.a.createElement(oe,{onClick:this.showCanvasAnimationInModal}))))};let n=0;const a=[];this.props.content.canvasObjects.map((e,t)=>a[t]=n++),this.state={keys:a,selectedCanvas:0,width:this.props.content.width,height:this.props.content.height,timer:null,expandedView:!1,play:!1}}render(){let e="center";this.props.pageProperties&&this.props.pageProperties.pageAlign&&(e=this.props.pageProperties.pageAlign);const t=this.props.content.canvasObjects[this.state.selectedCanvas],n=this.state.keys[this.state.selectedCanvas],a={canvasInAnimation:!0},s=null!=this.props.content.canvasObjects?this.props.content.canvasObjects.length:0;let r=null;return r=this.state.expandedView?this.renderExpandedCanvas(e,a,s):this.renderAnimatedCanvas(e,t,n,a,s,this.state.selectedCanvas),o.a.createElement("div",{style:{marginTop:30,marginBottom:25}},r)}}var ce=Object(p.a)(le);class pe extends o.a.Component{static getComponentDefault(){return{}}constructor(e,t){super(e,t),this.canvasAnimationSvgPreviewRef=o.a.createRef(),this.tabsContainerRef=o.a.createRef(),this.onDuplicateClickHandler=e=>{var t,n;e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onDuplicate)||void 0===t||t.call(n,this.state.index)},this.onRemoveClickHandler=e=>{var t,n;e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onRemove)||void 0===t||t.call(n,this.state.index)},this.onSelectClickHandler=e=>{var t,n;e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onSelect)||void 0===t||t.call(n,this.state.index)},this.state={index:e.index,svg:e.svg}}componentDidMount(){this.setSvgCSS()}shouldComponentUpdate(e,t){return this.props.svg!==e.svg||this.props.selected!==e.selected}componentDidUpdate(){this.setSvgCSS()}setSvgCSS(){var e,t;""!==this.props.svg&&(null===(e=this.canvasAnimationSvgPreviewRef.current)||void 0===e||null===(t=e.lastChild)||void 0===t||t.setAttribute("style","width: 100%; height: 100%"))}render(){const e={__html:this.props.svg},t=o.a.createElement("div",{ref:this.canvasAnimationSvgPreviewRef,style:{width:"100px",height:"80px",position:"relative"},dangerouslySetInnerHTML:e}),n=!0===this.props.selected?{border:"1px solid ".concat(this.props.theme.palette.primary.main),marginLeft:"5px",borderRadius:l.e}:{borderRadius:l.e,marginLeft:"5px"};return o.a.createElement("span",{className:"canvas-animation-thumbnail","data-thumb-index":this.state.index,style:n,onClick:this.onSelectClickHandler},t,o.a.createElement("div",{className:"text-center",style:{display:"block"}},o.a.createElement(j.a,{variant:"h5",className:"canvas-animation-thumbnail-text"},o.a.createElement("span",null,this.state.index+1)),o.a.createElement(J,{className:"canvas-animation-action-button",onClick:this.onDuplicateClickHandler},o.a.createElement(h.a,{icon:o.a.createElement(y.a,null)})),o.a.createElement(J,{className:"canvas-animation-action-button",onClick:this.onRemoveClickHandler},o.a.createElement(h.a,{icon:o.a.createElement(b.a,null)}))))}}const de=Object(p.a)(pe);class he extends o.a.Component{constructor(){super(...arguments),this.tabsContainerRef=o.a.createRef(),this.moveThumbnails=(e,t)=>{const n=this.tabsContainerRef.current.querySelectorAll(".canvas-animation-thumbnail"),a=Array.from(n).map(e=>parseInt(e.getAttribute("data-thumb-index"),10));[a[e.itemIndex],a[t.itemIndex]]=[a[t.itemIndex],a[e.itemIndex]],this.props.reorderCanvas(a)}}render(){const e=this.props.canvasObjects.map((e,t)=>{const n=o.a.createElement(de,{key:"th".concat(t),index:t,svg:e.svg_string,selected:t===this.props.selectedCanvas,onSelect:this.props.selectCanvas,onRemove:this.props.removeCanvas,onDuplicate:this.props.duplicateCanvas});return o.a.createElement(d.a,{index:t,moveItem:this.moveThumbnails,ListItemJSX:n,key:"item_".concat(t)})});return o.a.createElement(U,{ref:this.tabsContainerRef},e,o.a.createElement($,{onClick:this.props.addCanvas},o.a.createElement(h.a,{icon:o.a.createElement(f,null)})),o.a.createElement(C.a,{className:"cmcomp-tabs-scroll-left educative-codecomponent-scroll-control",onMouseDown:this.scrollLeft,onMouseUp:this.cancelScroll},o.a.createElement(O,{glyph:"glyphicon glyphicon-chevron-left"})),o.a.createElement(C.a,{className:"cmcomp-tabs-scroll-right educative-codecomponent-scroll-control",onMouseDown:this.scrollRight,onMouseUp:this.cancelScroll},o.a.createElement(O,{glyph:"glyphicon glyphicon-chevron-right"})))}}class ue extends o.a.Component{static getComponentDefault(){return{version:"1.0",width:600,height:400,canvasObjects:[E.default.getComponentDefault()]}}static getNewComponentDefault(){return{version:"2.0",width:600,height:400,canvasObjects:[E.default.getComponentDefault()],keys:[0],selectedCanvas:0}}constructor(e,t){super(e,t),this.canvasRef=o.a.createRef(),this.bufferedCanvasContent=null,this.props=void 0,this.addCanvas=()=>{const e=E.default.getComponentDefault();this.addCanvasObject(e)},this.changeHeight=e=>{const{canvasObjects:t}=this.props.content;t.map(t=>Object(a.a)({},t,{height:e})),this.props.updateContentState({canvasObjects:t,height:e})},this.changeWidth=e=>{const{canvasObjects:t}=this.props.content;t.map(t=>Object(a.a)({},t,{width:e})),this.props.updateContentState({canvasObjects:t,width:e})},this.duplicateCanvas=e=>{this.saveCurrentCanvas();let t=this.props.content.canvasObjects[e];e===this.getSelectedCanvasIndex()&&null!=this.bufferedCanvasContent&&(t=this.bufferedCanvasContent),t=c.a(t),this.addCanvasBase(t,!0,e)},this.removeCanvas=e=>{const t=this.getSelectedCanvasIndex();let n=t;e<t?n=t-1:e===t&&this.props.content.canvasObjects.length-1===t&&(n=t-1);const a=i()(this.state.keys,{$splice:[[e,1]]}),{canvasObjects:s}=this.props.content;this.props.updateContentState({canvasObjects:[...s.slice(0,e),...s.slice(e+1)],keys:[...a],selectedCanvas:n}),this.setState({keys:a})},this.reorderCanvas=e=>{if(e.length<=1)return;let t=e.findIndex(e=>this.getSelectedCanvasIndex()===e);const n=e.map(e=>this.props.content.canvasObjects[e]),a=e.map(e=>this.state.keys[e]);this.props.updateContentState({canvasObjects:n,keys:a,selectedCanvas:t}),this.setState({keys:a})},this.selectCanvas=e=>{this.saveCurrentCanvas();const{canvasObjects:t}=this.props.content,n=this.getSelectedCanvasIndex(),a=this.bufferedCanvasContent;this.props.updateContentState({canvasObjects:[...t.slice(0,n),{width:a.width,height:a.height,objectsDict:a.objectsDict,svg_string:a.svg_string,canvasJSON:a.canvasJSON,caption:a.caption,version:a.version},...t.slice(n+1)],selectedCanvas:e}),this.bufferedCanvasContent=null},this.updateCanvasState=e=>{this.bufferedCanvasContent=e},this.updateCanvasObjectCallback=e=>{const t=this.getSelectedCanvasIndex();let{canvasObjects:n}=this.props.content;n=i()(n,{[t]:{$set:e}}),this.props.updateContentState({canvasObjects:n})};let n=0;const s=[];e.content.canvasObjects.map((e,t)=>s[t]=n++),this.state={keys:s}}addCanvasBase(e,t,n){const s=Object(a.a)({},e,{width:this.props.content.width,height:this.props.content.height}),{canvasObjects:o}=this.props.content,r=function(e){return e&&0!==e.length?Math.max(...e)+1:0}(this.state.keys),l=this.getSelectedCanvasIndex(),c=this.bufferedCanvasContent;let{keys:p}=this.state;if(t){let e=[],t=[];for(let a=0;a<o.length;a++)e=null!=c&&a===l?[...e,{width:c.width,height:c.height,objectsDict:c.objectsDict,svg_string:c.svg_string,canvasJSON:c.canvasJSON,caption:c.caption,version:c.version}]:[...e,o[a]],t=[...t,p[a]],a===n&&(e=[...e,s],t=[...t,r]);p=[...p,r],this.props.updateContentState({canvasObjects:e,selectedCanvas:n+1,keys:t})}else p=i()(p,{[p.length]:{$set:r}}),null!=c?this.props.updateContentState({canvasObjects:[...o.slice(0,l),{width:c.width,height:c.height,objectsDict:c.objectsDict,svg_string:c.svg_string,canvasJSON:c.canvasJSON,caption:c.caption,version:c.version},...o.slice(l+1),s],selectedCanvas:o.length,keys:[...p]}):this.props.updateContentState({canvasObjects:[...o,s],selectedCanvas:o.length,keys:[...p]});this.bufferedCanvasContent=null,this.setState({keys:p})}addCanvasObject(e){this.saveCurrentCanvas(),this.addCanvasBase(e)}getSelectedCanvasIndex(){return this.props.content.selectedCanvas?this.props.content.selectedCanvas:0}saveComponent(){if("edit"===this.props.mode){this.saveCurrentCanvas();const{canvasObjects:e}=this.props.content,t=this.getSelectedCanvasIndex(),n=this.bufferedCanvasContent;this.props.updateContentState({canvasObjects:[...e.slice(0,t),{width:n.width,height:n.height,objectsDict:n.objectsDict,svg_string:n.svg_string,canvasJSON:n.canvasJSON,caption:n.caption,version:n.version},...e.slice(t+1)]}),this.bufferedCanvasContent=null}}saveCurrentCanvas(){var e,t,n;null===this||void 0===this||null===(e=this.canvasRef)||void 0===e||null===(t=e.current)||void 0===t||null===(n=t.saveComponent)||void 0===n||n.call(t)}render(){const e="edit"!==this.props.mode,{pageId:t,authorId:n,collectionId:a,isDraft:s,userId:r,shotId:i,editorPageId:l}=this.props,c={pageId:t,authorId:n,collectionId:a,userId:r,shotId:i,editorPageId:l};if(e)return o.a.createElement(ce,{content:this.props.content,pageProperties:this.props.pageProperties,key:"canvasViewer"});const p=this.getSelectedCanvasIndex(),d=this.props.content.canvasObjects?this.props.content.canvasObjects[p]:null;let h=null;const u={pageId:t,authorId:n,collectionId:a,isDraft:s,userId:r,shotId:i,editorPageId:l};if(null!=d){const e=this.state.keys[p],t={canvasInAnimation:!0};h=o.a.createElement(E.default,Object.assign({ref:this.canvasRef,key:e,mode:"edit",content:d,pageProperties:this.props.pageProperties,config:t,locationProps:u,onWidthChange:this.changeWidth,dispatch:this.props.dispatch,onHeightChange:this.changeHeight,updateContentState:this.updateCanvasState,updateCanvasObjectCallback:this.updateCanvasObjectCallback,isFullscreen:this.props.fullScreen},c))}else h=o.a.createElement("p",{className:"text-center fg-darkgray50"},o.a.createElement("br",null),o.a.createElement("br",null),"Click the add icon below to add a canvas",o.a.createElement("br",null),o.a.createElement("br",null));return o.a.createElement(K,null,o.a.createElement(he,{canvasObjects:this.props.content.canvasObjects,keys:this.state.keys,selectedCanvas:p,reorderCanvas:this.reorderCanvas,selectCanvas:this.selectCanvas,removeCanvas:this.removeCanvas,duplicateCanvas:this.duplicateCanvas,addCanvas:this.addCanvas}),o.a.createElement("div",null,h),!this.props.fullScreen&&this.props.fullscreenIconToggle({onClick:this.props.toggleFullScreen,style:{position:"absolute",right:"25px",top:"20px"}}))}}t.default=ue},1730:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(649),r=n(1),i=n(5),l=n(18),c=n(12);const p=r.d.div.withConfig({displayName:"styles__CaptionStyled",componentId:"sc-142nki3-0"})(["display:flex;margin-top:10px;align-items:center;justify-content:center;@media (max-width:","){justify-content:",";}"],i.f.pixels,e=>e.inCode&&"flex-start"),d=r.d.span.withConfig({displayName:"styles__Text",componentId:"sc-142nki3-1"})(["display:flex;text-align:center;font-size:",";color:",";background:",";padding:5px 20px;border-radius:",";:focus{outline:none;}"],c.a.textMedium,e=>{let{theme:t}=e;return t.palette.common.black},e=>{let{theme:t}=e;return t.palette.grey[100]},l.r),h=r.d.span.withConfig({displayName:"styles__Caption",componentId:"sc-142nki3-2"})(["margin-top:5px;.form-control{text-align:center;color:",";background:",";width:100%;font-size:",";margin:0 auto;height:28px;border-radius:",";&:focus{border:1px solid ",";}}.form-group{margin-bottom:0px;&::-webkit-input-placeholder{font-size:",";}&:-moz-placeholder{font-size:",";}&::-moz-placeholder{font-size:",";}&:-ms-input-placeholder{font-size:",";}}"],e=>{let{theme:t}=e;return t.palette.common.black},e=>{let{theme:t}=e;return t.palette.grey[100]},c.a.textMedium,l.r,e=>{let{theme:t}=e;return t.palette.primary.main},c.a.body,c.a.body,c.a.body,c.a.body);var u=p;n.d(t,"a",(function(){return m}));class m extends s.a.Component{constructor(){super(...arguments),this.inputFieldRef={current:null},this.handleChange=()=>{this.inputFieldRef.current&&this.props.onCaptionChange(this.inputFieldRef.current.value)}}componentDidMount(){!this.props.readOnly&&this.inputFieldRef.current&&(this.inputFieldRef.current.value=this.props.caption||null)}componentDidUpdate(){!this.props.readOnly&&this.inputFieldRef.current&&(this.inputFieldRef.current.value=this.props.caption||null)}render(){let e=null;if(this.props.readOnly){(this.props.caption?this.props.caption.trim():"").length>0&&(e=s.a.createElement(u,{inCode:this.props.inCode},s.a.createElement(d,null,this.props.caption)))}else e=s.a.createElement(h,null,s.a.createElement(o.a,{id:"caption-component",placeholder:"Caption Text",inputRef:e=>this.inputFieldRef.current=e,className:"cmcomp-caption",onBlur:this.handleChange,onChange:!0===this.props.hookOnChangeEvent?this.handleChange:()=>{}}));return e}}m.defaultProps={inCode:!1}},1740:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(57),r=n.n(o),i=n(133),l=n.n(i);t.a=e=>{let{xs:t,sm:n,lg:a,close:o,block:i,type:c="button",navbar:p,active:d,inverse:h=!1,rounded:u,outlined:m=!1,bsStyle:v="default",onlyOnHover:g,retainBackground:f,disabled:b=!1,onClick:y,className:C,componentClass:w="button",children:x}=e;const O=w;let E={btn:!0,"btn-xs":t,"btn-sm":n,"btn-lg":a,active:d,"btn-block":i,"navbar-btn":p,"btn-inverse":!!f||h,"btn-rounded":u,"btn-outlined":!!h||!!g||!!f||m,"btn-onlyOnHover":g,"btn-retainBg":f},j=null;v.split(",").forEach(e=>{const t="btn-".concat(e.trim());E=l()(E,{[t]:{$set:!0}})}),j=r()(E),o&&(j="close",x=s.a.createElement("span",null,s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},"Close")));const S={type:c,onClick:y,role:"button",disabled:b,className:[C,j].join(" ")};return s.a.createElement(O,S,x)}},1749:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(88),r=n.n(o),i=n(1655),l=n(1);t.a={create:(e,t,n)=>{const a=document.querySelector("body");let o;a.classList.add("modal-open"),a.insertAdjacentHTML("beforeend",'<div class="modal-backdrop fade in"></div><div id="modal-container"></div>'),r.a.render(s.a.createElement(l.a,{theme:n},s.a.createElement(i.a,{theme:n},s.a.createElement(e,{componentToRender:t,ref:e=>{o=e}}))),a.querySelector("#modal-container"),()=>{o.open()})},remove:()=>{document.querySelector("html").style.overflow="";const e=document.querySelector("body");e.style.overflow="",r.a.unmountComponentAtNode(e.querySelector("#modal-container")),e.removeChild(e.querySelector("#modal-container"))},isExist:()=>document.querySelector("#modal-container")}},1796:function(e,t,n){"use strict";var a=n(0),s=n(57),o=n.n(s),r=n(1749),i=n(64),l=n(1);function c(){const e=Object(i.a)(["\n    .modal-fullscreen {\n        .modal-dialog{\n            width: 100%;\n            height: 100%;\n            margin: 0;\n\n            .modal-content{\n                height: 100%;\n                overflow-y: auto;\n                border: 0;\n                border-radius: 0;\n            }\n\n            .modal-body {\n                position: absolute;\n                padding: 15px;\n                bottom: 61px;\n                top: 61px;\n                left: 0;\n                right: 0;    \n\n                &.without-footer{\n                    bottom: 0;\n                }        \n            }\n\n            .modal-footer{\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n            }\n        }\n    }\n"]);return c=function(){return e},e}var p=Object(l.b)(c());n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d}));const d=e=>{let{className:t,children:n}=e;const s={className:[t,"modal-footer"].join(" ")};return a.createElement("div",s,n)},h=e=>{let{className:t,children:n}=e;const s={className:[t,"modal-body"].join(" ")};return a.createElement("div",s,n)},u=e=>{let{className:t,children:n}=e;const s={className:[t,"modal-header"].join(" ")};return a.createElement("div",s,n)};function m(){const e=document.querySelector("body");e.classList.remove("modal-open");const t=e.querySelector(".modal-backdrop");e.removeChild(t)}class v extends a.Component{constructor(){super(...arguments),this.state={styles:{}}}componentWillUnmount(){m()}close(){this.props.onHide(),m();this.setState({styles:{display:"none"}},this.props.onHidden),r.a.remove()}open(){this.props.onShow();this.setState({styles:{display:"block"}},this.props.onShown),document.querySelector("html").style.overflow="hidden",document.querySelector("body").style.overflow="hidden"}render(){const e=o()({"modal-dialog":!0,"modal-lg":this.props.lg,"modal-sm":this.props.sm}),t=o()({modal:!0,fade:!0,in:"block"===this.state.styles.display,out:"none"===this.state.styles.display}),n={role:"dialog",tabIndex:"-1",style:this.state.styles,className:[this.props.className,!0===this.props.fullscreen&&"modal-fullscreen",t.trim()].join(" ")};return a.createElement(a.Fragment,null,a.createElement(p,null),a.createElement("div",n,a.createElement("div",{className:e.trim()},a.createElement("div",{className:"modal-content"},this.props.children))))}}v.defaultProps={onShow(){},onShown(){},onHide(){},onHidden(){}}},1809:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(533),r="draggable";const i={beginDrag:function(e){return{parentIndex:e.parentIndex,index:e.index}},canDrag:function(){return!0}};var l=n(88);const c={hover:function(e,t,n){const a=t.getItem().index,s=e.index;if(!function(e,t,n,a){if(n===a)return!1;const s=Object(l.findDOMNode)(e).getBoundingClientRect(),o=(s.bottom-s.top)/2,r=s.bottom-s.top-o,i=t.getClientOffset().y-s.top;if(n<a&&i<r/4)return!1;if(n>a&&i>o)return!1;return!0}(n,t,a,s))return;const o={itemIndex:a},r={itemIndex:s};e.moveItem(o,r),t.getItem().index=s}};const p=Object(o.DropTarget)(r,c,(e,t)=>({connectDropTarget:e.dropTarget(),canDrop:t.canDrop()}))(Object(o.DragSource)(r,i,(e,t)=>({connectDragSource:e.dragSource(),isDragging:t.isDragging()}))(class extends a.Component{render(){const{ListItemJSX:e,connectDragSource:t,connectDropTarget:n,onClick:a}=this.props;return t(n(s.a.createElement("div",{onClick:a,className:this.props.class},e)))}}));t.a=p},1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n.n(a);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createElement("path",{d:"M437.5 386.6L306.9 256l130.6-130.6a35.91 35.91 0 000-50.9 35.91 35.91 0 00-50.9 0L256 205.1 125.4 74.5a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9L205.1 256 74.5 386.6a35.91 35.91 0 000 50.9 35.91 35.91 0 0050.9 0L256 306.9l130.6 130.6a35.91 35.91 0 0050.9 0c14-14.1 14-36.9 0-50.9z"});const l=e=>{let{svgRef:t,title:n}=e,a=r(e,["svgRef","title"]);return s.a.createElement("svg",o({className:"close-icon",height:512,width:512,viewBox:"0 0 512 512",ref:t},a),n?s.a.createElement("title",null,n):null,i)},c=s.a.forwardRef((e,t)=>s.a.createElement(l,o({svgRef:t},e)));n.p},1957:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(2),r=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=function(e){var t=e.color,n=e.size,a=l(e,["color","size"]);return s.a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.a.createElement("polyline",{points:"9 14 4 9 9 4"}),s.a.createElement("path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}))};c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.defaultProps={color:"currentColor",size:"24"},t.a=c},1966:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),s=n.n(a);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createElement("path",{d:"M176.6 67.5h84.7c11.7 0 21.5 7.6 24.3 19 .5 2.1.8 4.4.8 6.6v168.2c0 11.3-6.1 20.7-16 24.4-3 1.1-6.4 1.7-9.7 1.7-56.2.1-112.3.1-168.5.1-14.8 0-25.8-10.9-25.8-25.7v-87.5-81.5c0-11.8 7.7-21.7 19.1-24.5 2.2-.5 4.4-.7 6.7-.7 28.2-.1 56.3-.1 84.4-.1zm-.1 20H92.8c-4.5 0-6.3 1.8-6.3 6.3V261c0 4.7 1.7 6.5 6.4 6.5h167.2c4.7 0 6.4-1.8 6.4-6.5V93.8c0-4.5-1.8-6.3-6.3-6.3h-83.7z"}),l=s.a.createElement("path",{d:"M56.4 207.5v19.9c-5.8 0-11.4.1-17 0-4.9-.1-9.8-.1-14.6-1.1-8.9-1.8-16.6-10.7-17.7-19.7-.3-2.5-.5-5-.5-7.4v-166c0-12.3 7.5-22.1 19.2-25 2.1-.5 4.3-.7 6.4-.7h168.7c14.7 0 25.6 10.9 25.7 25.6v24.1h-19.9V39.7v-6.2c0-4.2-1.9-6.1-6-6.1H33c-4.5 0-6.3 1.8-6.3 6.3v167.2c0 4.8 1.7 6.5 6.4 6.5 7.5.1 15.3.1 23.3.1z"});const c=e=>{let{svgRef:t,title:n}=e,a=r(e,["svgRef","title"]);return s.a.createElement("svg",o({className:"clone-icon",viewBox:"0 0 294 295",ref:t},a),n?s.a.createElement("title",null,n):null,i,l)},p=s.a.forwardRef((e,t)=>s.a.createElement(c,o({svgRef:t},e)));n.p},2106:function(e,t,n){"use strict";t.a={version:"1.0",width:600,height:400,objectsDict:{},svg_string:"",canvasJSON:"",caption:""}},2107:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),s=n.n(a),o=n(1796);class r extends a.Component{constructor(){super(...arguments),this.state={showChildren:!1},this.modalRef=s.a.createRef(),this.onShown=e=>{this.setState({showChildren:!0})}}render(){const e=this.props.children.props;return s.a.createElement(o.a,{lg:!0,ref:this.modalRef,className:"dumb-modal",onShown:this.onShown,fullscreen:!!e.config.displayFullScreen},s.a.createElement(o.b,null,this.state.showChildren?this.props.children:null))}}},2108:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(2),r=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=function(e){var t=e.color,n=e.size,a=l(e,["color","size"]);return s.a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))};c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.defaultProps={color:"currentColor",size:"24"},t.a=c}}]);
//# sourceMappingURL=widget-CanvasAnimation.7c0444f5.chunk.js.map