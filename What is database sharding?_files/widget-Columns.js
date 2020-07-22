(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[56,37,76],{1527:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var o=n(0),i=n.n(o),a=n(50),s=n(182),r=n.n(s),l=n(818),c=n(1868),d=n(1869),p=n(1775);const h=Object(a.a)({resolved:{},chunkName:()=>"author",isReady(t){const e=this.resolve(t);return!1!==this.resolved[e]&&!!n.m[e]},importAsync:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(28)]).then(n.bind(null,1862)),requireAsync(t){const e=this.resolve(t);return this.resolved[e]=!1,this.importAsync(t).then(t=>(this.resolved[e]=!0,t))},requireSync(t){const e=this.resolve(t);return n(e)},resolve(){return 1862}},{fallback:i.a.createElement("div",null,"Loading...")});class m extends i.a.Component{constructor(){super(...arguments),this.state={isSpellCheckEnabled:!0},this.onMarkdownUpdated=r()(t=>{if(!t)return;const{mdText:e,mdHtml:n,cursorPosition:o,reFocus:i=null}=t;void 0!==e&&"edit"===this.props.mode&&this.props.updateContentState({text:e,mdHtml:n,cursorPosition:o},()=>{var t,e,n;i&&(null===(t=this.inEdit)||void 0===t||null===(e=t.textAreaElemRef)||void 0===e||null===(n=e.current)||void 0===n||n.focus())})},50),this.getMDHtml=()=>{let{mdHtml:t}=this.props.content;return!!this.props.config&&this.props.config.inEditor&&(null!==t&&""!==t||(t="".concat('<p style="font-size:16px;color:#ddd"><i>').concat(this.props.placeholder,"</i></p>"))),t},this.saveWidgetsData=t=>{this.props.saveWidgetUserData(t,{compId:this.props.content.comp_id,reset:!1})},this.toggleSpellCheck=()=>{this.setState({isSpellCheckEnabled:!this.state.isSpellCheckEnabled})},this.getViewerBackgroundColor=t=>{let e=null;const n=t.match(/<!--backgroundColor:'([\s\S]*?)'-->/);return n&&(e=n[1]),e}}static getComponentDefault(){return d.a}saveComponent(){const{text:t,mdHtml:e,cursorPosition:n}=this.props.content;this.props.updateContentState({text:t,mdHtml:e,cursorPosition:n})}render(){const{config:t,mode:e,content:n,fullScreen:o,toggleFullScreen:a,fullscreenIconToggle:s,comps:r,index:d,hash:m}=this.props,{text:u,mdHtml:g,cursorPosition:f}=n,v=!!t&&t.inEditor,y=o?p.a:p.g;if("edit"!==e){const{location:t}=this.props,e=Object(c.a)(t),n=this.getViewerBackgroundColor(g);return i.a.createElement(l.a,{highlightsAvailable:e||this.props.highlights,authorId:this.props.authorId,collectionId:this.props.collectionId,saveHighlights:this.saveWidgetsData,default_themes:this.props.default_themes,contentSnapshot:this.props.contentSnapshot,docker:this.props.docker,mdHtml:this.getMDHtml(),logWidgetInteraction:this.props.logWidgetInteraction,isShot:this.props.isShot,userThemes:this.props.userThemes,backgroundColor:n,positionedLeft:this.props.positionedLeft,isUsedInColumn:this.props.highlights,widthOfComp:this.props.widthOfComp,widthOfOtherComp:this.props.widthOfOtherComp})}const w=(r&&r.size-1)===d;return i.a.createElement(y,null,i.a.createElement(h,{ref:t=>this.inEdit=t,fullScreen:o,fullscreenIconToggle:s,text:u,mdHtml:g,cursorPosition:f,isSpellCheckEnabled:this.state.isSpellCheckEnabled,toggleSpellCheck:this.toggleSpellCheck,onUpdate:this.onMarkdownUpdated,onExpand:a,getMDHtml:this.getMDHtml,default_themes:this.props.default_themes,placeholder:this.props.placeholder,dispatch:this.props.dispatch,isDraft:this.props.isDraft,pageId:this.props.pageId,authorId:this.props.authorId,collectionId:this.props.collectionId,shotId:this.props.shotId,editorPageId:this.props.editorPageId,setFocus:v,userId:this.props.userId,docker:this.props.docker,index:d,hash:m,isLastWidgetOnPage:w}))}}m.defaultProps={placeholder:"Write here ...",docker:{},logWidgetInteraction:()=>null,userThemes:null,highlights:!1,positionedLeft:null,widthOfComp:50,widthOfOtherComp:50}},1535:function(t,e,n){"use strict";n.r(e);var o=n(14),i=n(0),a=n.n(i),s=n(50),r=n(1929),l=n(2129),c=n(2168),d=n(85),p=n(1783),h=n(1749),m=n(1730),u=n(1930),g=n(650);const f=Object(s.a)({resolved:{},chunkName:()=>"author",isReady(t){const e=this.resolve(t);return!1!==this.resolved[e]&&!!n.m[e]},importAsync:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(28)]).then(n.bind(null,1856)),requireAsync(t){const e=this.resolve(t);return this.resolved[e]=!1,this.importAsync(t).then(t=>(this.resolved[e]=!0,t))},requireSync(t){const e=this.resolve(t);return n(e)},resolve(){return 1856}},{fallback:a.a.createElement("div",null,"Loading...")});class v extends i.Component{static getComponentDefault(){return u.b}constructor(t){super(t),this.handleUploadSave=()=>{const t=this.props.isShot?this.handleCloseModalOnTransition():{},{svg:e}=this.state;if(!e)return;const n=e.replace(/&nbsp;/g,'<span style="visibility:hidden">_</span>'),o=new Blob([n],{type:"image/svg+xml"});this.uploadSvgBlob(o,t)},this.handleModify=()=>{var t,e;const n=null===(t=this.state)||void 0===t?void 0:t.prevPath,o=null===(e=this.state)||void 0===e?void 0:e.prevXml,{xml:i,path:a}=this.state;let{svg:s}=this.state;if(a)this.props.dispatch(Object(d.v)(a,(t,e)=>{const a=(new XMLSerializer).serializeToString(e);s=a;const r={xml:i,svg:s};h.a.create.call(this,Object(c.a)(f,{onUpdate:this.handleUpdate,content:r,onRestore:this.handleRestore,disableRestore:!n||!o,shotId:this.props.shotId,dispatch:this.props.dispatch,pageId:this.props.pageId,collectionId:this.props.collectionId,isDraft:this.props.isDraft,userId:this.props.userId,theme:this.props.theme}),void 0,this.props.theme)}));else{const t={xml:i,svg:s};h.a.create.call(this,Object(c.a)(f,{onUpdate:this.handleUpdate,onRestore:this.handleRestore,disableRestore:!n||!o,content:t,shotId:this.props.shotId,dispatch:this.props.dispatch,pageId:this.props.pageId,collectionId:this.props.collectionId,isDraft:this.props.isDraft,userId:this.props.userId,theme:this.props.theme}),void 0,this.props.theme)}},this.handleUpdate=t=>{t.xml!==this.state.xml&&this.setState({xml:t.xml,svg:t.svg,prevSvg:this.state.svg,prevXml:this.state.xml},()=>{this.handleUploadSave()})},this.handleRestore=()=>{const{prevXml:t,prevPath:e}=this.state;let{prevSvg:n}=this.state;if(e)this.props.dispatch(Object(d.v)(e,(e,o)=>{const i=(new XMLSerializer).serializeToString(o);n=i;const a={xml:t,svg:n};this.handleUpdate(a)}));else{const e={xml:t,svg:n};this.handleUpdate(e)}},this.handleCaptionChange=t=>{this.setState({caption:t})},this.handleCloseModalOnTransition=()=>{var t,e;return null===(t=window.MODAL_CONTAINER_REF)||void 0===t?void 0:null===(e=t.returnData)||void 0===e?void 0:e.call(t)},this.state=Object(o.a)({},this.props.content)}componentDidMount(){!this.props.content.waInstantlyOpened&&this.inEditMode()&&(this.handleModify(),this.props.updateContentState(Object(o.a)({},this.state,{waInstantlyOpened:!0})))}saveComponent(){const t=this.props.isShot?this.handleCloseModalOnTransition():{};this.props.updateContentState(Object(o.a)({},this.state,{},t)),h.a.isExist()&&h.a.remove.call(this,Object(c.a)(f,{theme:this.props.theme})),delete window.MODAL_CONTAINER_REF}async uploadSvgBlob(t,e,n){const{userId:i,authorId:a,pageId:s,collectionId:r,shotId:l,editorPageId:c}=this.props;let h=r?d.u:d.o;h=l?d.x:h;let m=r?{author_id:a,collection_id:r,page_id:s}:s;m=l||m;try{const e=await h(m),{upload_url:u}=JSON.parse(e),g=t;Object(d.P)({upload_url:u,file:g}).then(t=>{const{image_id:e}=JSON.parse(t),d=Object(p.a)(r,a||i,s,e,l,c);this.props.updateContentState(Object(o.a)({},this.state,{},n,{path:d,prevPath:this.state.path})),this.setState({prevPath:this.state.path,path:d,svg:""})})}catch(u){return}}inEditMode(){return"edit"===this.props.mode}render(){var t;const{userId:e,authorId:n,pageId:o,collectionId:i,shotId:s,editorPageId:c}=this.props,d=null===(t=this.state.path)||void 0===t?void 0:t.split("/"),h=null===d||void 0===d?void 0:d[d.length-1],u=h&&Object(p.a)(i,n||e,o,h,s,c);return this.inEditMode()?a.a.createElement(l.a,{onModify:this.handleModify},a.a.createElement(r.a,{content:this.state.svg,path:u}),a.a.createElement(m.a,{caption:this.state.caption,readOnly:!1,onCaptionChange:this.handleCaptionChange})):a.a.createElement("div",{style:{marginTop:30,marginBottom:30}},a.a.createElement(r.a,{content:this.state.svg,path:u}),a.a.createElement(m.a,{caption:this.state.caption,readOnly:!0}))}}e.default=Object(g.a)(v)},1637:function(t,e,n){"use strict";n.r(e);var o=n(14),i=n(27),a=n(0),s=n.n(a),r=n(1499),l=n(649),c=n(1656),d=n(1964),p=n.n(d),h=n(2105),m=n.n(h),u=n(817),g=n.n(u),f=n(414),v=n(35),y=n(386),w=n(1527),b=n(1535),x=n(1),C=n(58),I=n(5);const E=x.d.div.withConfig({displayName:"styles__ColumnsStyled",componentId:"sc-681ynz-0"})(["display:flex;margin-top:10px;@media (max-width:","){flex-direction:column;"," justify-content:center;}"],I.f.pixels,t=>t.mobileView&&Object(x.c)(["flex-direction:column-reverse;"])),k=x.d.div.withConfig({displayName:"styles__Column",componentId:"sc-681ynz-1"})(["width:50%;margin-right:10px;"," "," @media (max-width:","){margin-right:0px;width:100%;}&:last-child{margin-right:0px;margin-left:10px;@media (max-width:","){margin-left:0px;}}"],t=>t.width&&Object(x.c)(["width:",";"],"".concat(t.width,"%")),t=>"0"===t.width&&Object(x.c)(["display:none;"]),I.f.pixels,I.f.pixels),S=x.d.div.withConfig({displayName:"styles__ButtonsContainer",componentId:"sc-681ynz-2"})(["display:flex;margin-top:10px;"]),O=x.d.div.withConfig({displayName:"styles__Form",componentId:"sc-681ynz-3"})(["display:flex;flex-direction:row;flex:1;margin-left:5px;"]),_=x.d.div.withConfig({displayName:"styles__FormHeading",componentId:"sc-681ynz-4"})(["display:flex;width:70px;align-items:center;"]),j=Object(x.d)(C.a).attrs({small:!0,invi:!0,high:10}).withConfig({displayName:"styles__ColumnButton",componentId:"sc-681ynz-5"})(["display:block;width:15%;margin:0 auto;text-align:center;padding-left:2px;padding-right:2px;"]);var N=E,M={comps:[{type:"MarkdownEditor",content:{version:"2.0",text:"",mdHtml:"",cursorPosition:{line:0,ch:0}},hash:"1",width:"50"},{type:"MarkdownEditor",content:{version:"2.0",text:"",mdHtml:"",cursorPosition:{line:0,ch:0}},hash:"2",width:"50"}]},D=n(133),R=n.n(D);n.d(e,"default",(function(){return T}));const P=[{title:"Markdown",type:"MarkdownEditor",component:w.default},{title:"Drawing",type:"MxGraphWidget",component:b.default}];class T extends a.Component{constructor(){super(...arguments),this.compRefs=[],this.leftCompKey=Object(f.a)(),this.rightCompKey=Object(f.a)(),this.createTooltipObject=t=>s.a.createElement(r.a,{id:t},t),this.addWidget=(t,e)=>{if(window.confirm(v.h)){const n=P.find(e=>e.type===t),o=this.props.content.comps[e].width,i=R()(this.props.content.comps,{[e]:{$set:{type:n.type,content:n.component.getComponentDefault(),hash:e+1,width:o}}});this.props.updateContentState({comps:i})}},this.saveComponent=()=>{this.compRefs.forEach(t=>{var e;null===t||void 0===t||null===(e=t.saveComponent)||void 0===e||e.call(t)}),this.props.updateContentState({comps:this.props.content.comps})},this.onUpdateWidth=(t,e)=>{const n=parseInt(t,10)||0,o=R()(this.props.content.comps,{[e]:{width:{$set:n.toString()}},[1-e]:{width:{$set:(100-n).toString()}}});this.props.updateContentState({comps:o})},this.setPrevDefaultWidth=t=>(t[0]&&(t[0].width||(t=R()(t,{0:{width:{$set:"50"}}}))),t[1]&&(t[1].width||(t=R()(t,{1:{width:{$set:"50"}}}))),t),this.flipComps=()=>{this.leftCompKey=Object(f.a)(),this.rightCompKey=Object(f.a)(),this.compRefs.forEach(t=>{var e;null===t||void 0===t||null===(e=t.saveComponent)||void 0===e||e.call(t)}),this.props.updateContentState({comps:this.props.content.comps.reverse()})},this.copy=t=>{var e,n;null===(e=this.compRefs[t])||void 0===e||null===(n=e.saveComponent)||void 0===n||n.call(e);const a=this.props.content.comps[t],{hash:s}=a,r=Object(i.a)(a,["hash"]),l=p.a.encrypt(JSON.stringify({data:Object(o.a)({},r,{mode:"view"}),index:t,parentHash:"0"}),v.d);g()(l),this.props.dispatch(Object(y.a)(l))},this.paste=t=>{const{copiedWidget:e}=this.props.widgetsData&&this.props.widgetsData.toJS();if(!e)return;const n=JSON.parse(p.a.decrypt(e,v.d).toString(m.a)).data;if(!P.map(t=>t.type).includes(n.type))return void console.warn("No valid widget copied!");const o=R()(this.props.content.comps,{[t]:{$set:{type:n.type,content:n.content,hash:t+1}}});this.props.updateContentState({comps:o},()=>{this.compRefs[t].setState(o[t].content)})}}static getComponentDefault(){return M}shouldComponentUpdate(t){return!!t.content.comps}updateContentState(t,e){const n=P.find(t=>"MxGraphWidget"===t.type).component.getComponentDefault(),i=R()(this.props.content.comps,{[e]:{$set:{type:this.props.content.comps[e].type,content:Object(o.a)({},this.props.content.comps[e].content,{},t),hash:e+1,width:this.props.content.comps[e].width}}});t.waInstantlyOpened&&i[e].content.svg===n.svg||this.props.updateContentState({comps:i})}render(){const{mode:t,shotId:e,pageId:n,editorPageId:i,authorId:a,collectionId:r,userId:d,widgetsData:p,fullScreen:h,toggleFullScreen:m,fullscreenIconToggle:u}=this.props,g=this.setPrevDefaultWidth(this.props.content.comps);if("view"===t)return s.a.createElement(N,{mobileView:g.length&&"MxGraphWidget"===g[0].type&&"MarkdownEditor"===g[1].type},g.map((l,c)=>{const p=P.find(t=>t.type===l.type);return l=Object(o.a)({},l,{content:Object(o.a)({},l.content,{comp_id:this.props.compId})}),s.a.createElement(k,{width:l.width,key:c},s.a.createElement(p.component,{isShot:!!e,mode:t,content:l.content,updateContentState:t=>this.updateContentState(t,c),pageId:n,collectionId:r,authorId:a,userId:d,shotId:parseInt(e,10),fullScreen:h,toggleFullScreen:m,fullscreenIconToggle:u,editorPageId:parseInt(i,10),saveWidgetUserData:this.props.saveWidgetUserData,contentSnapshot:this.props.contentSnapshot,highlights:!0,positionedLeft:0===c,widthOfComp:g[c].width,widthOfOtherComp:g[1-c].width}))}));if("edit"===t){const{copiedWidget:o}=p&&p.toJS(),f=this.createTooltipObject("Width updates will be visible in view mode.");return s.a.createElement("div",null,s.a.createElement("div",{className:"edcomp-toolbar"},g.map((t,e)=>s.a.createElement("div",{style:{display:"flex",padding:"8px"},key:e},s.a.createElement(O,null,s.a.createElement(_,null,"Widget ",e+1),s.a.createElement(l.a,{componentClass:"select",value:g[e].type,onChange:t=>this.addWidget(t.target.value,e)},P.map(t=>s.a.createElement("option",{key:t.type,value:t.type},t.title)))),s.a.createElement(O,null,s.a.createElement(_,null,"Width (%)"),s.a.createElement(c.a,{trigger:["hover","focus"],placement:"top",overlay:f},s.a.createElement(l.a,{maxLength:2,value:g[e].width,style:{marginLeft:5},onChange:t=>this.onUpdateWidth(t.target.value,e)})))))),s.a.createElement(S,null,s.a.createElement(j,{onClick:()=>this.copy(0)},"Copy"),s.a.createElement(j,{disabled:!o,onClick:()=>this.paste(0)},"Paste"),s.a.createElement(j,{purple:!0,onClick:this.flipComps},"Flip Columns"),s.a.createElement(j,{onClick:()=>this.copy(1)},"Copy"),s.a.createElement(j,{disabled:!o,onClick:()=>this.paste(1)},"Paste")),s.a.createElement(N,null,g.map((o,l)=>{const c=P.find(t=>t.type===o.type);return s.a.createElement(k,{width:50,key:l?this.rightCompKey:this.leftCompKey},s.a.createElement(c.component,{ref:t=>{this.compRefs[l]=t},content:o.content,mode:t,updateContentState:t=>this.updateContentState(t,l),shotId:parseInt(e,10),editorPageId:parseInt(i,10),dispatch:this.props.dispatch,isColumn:!0,isDraft:this.props.isDraft,pageId:n,collectionId:r,authorId:a,userId:d,config:this.props.config,fullScreen:h,toggleFullScreen:m,fullscreenIconToggle:u}))})))}return null}}T.defaultProps={shotId:null,editorPageId:null}},1730:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(649),s=n(1),r=n(5),l=n(18),c=n(12);const d=s.d.div.withConfig({displayName:"styles__CaptionStyled",componentId:"sc-142nki3-0"})(["display:flex;margin-top:10px;align-items:center;justify-content:center;@media (max-width:","){justify-content:",";}"],r.f.pixels,t=>t.inCode&&"flex-start"),p=s.d.span.withConfig({displayName:"styles__Text",componentId:"sc-142nki3-1"})(["display:flex;text-align:center;font-size:",";color:",";background:",";padding:5px 20px;border-radius:",";:focus{outline:none;}"],c.a.textMedium,t=>{let{theme:e}=t;return e.palette.common.black},t=>{let{theme:e}=t;return e.palette.grey[100]},l.r),h=s.d.span.withConfig({displayName:"styles__Caption",componentId:"sc-142nki3-2"})(["margin-top:5px;.form-control{text-align:center;color:",";background:",";width:100%;font-size:",";margin:0 auto;height:28px;border-radius:",";&:focus{border:1px solid ",";}}.form-group{margin-bottom:0px;&::-webkit-input-placeholder{font-size:",";}&:-moz-placeholder{font-size:",";}&::-moz-placeholder{font-size:",";}&:-ms-input-placeholder{font-size:",";}}"],t=>{let{theme:e}=t;return e.palette.common.black},t=>{let{theme:e}=t;return e.palette.grey[100]},c.a.textMedium,l.r,t=>{let{theme:e}=t;return e.palette.primary.main},c.a.body,c.a.body,c.a.body,c.a.body);var m=d;n.d(e,"a",(function(){return u}));class u extends i.a.Component{constructor(){super(...arguments),this.inputFieldRef={current:null},this.handleChange=()=>{this.inputFieldRef.current&&this.props.onCaptionChange(this.inputFieldRef.current.value)}}componentDidMount(){!this.props.readOnly&&this.inputFieldRef.current&&(this.inputFieldRef.current.value=this.props.caption||null)}componentDidUpdate(){!this.props.readOnly&&this.inputFieldRef.current&&(this.inputFieldRef.current.value=this.props.caption||null)}render(){let t=null;if(this.props.readOnly){(this.props.caption?this.props.caption.trim():"").length>0&&(t=i.a.createElement(m,{inCode:this.props.inCode},i.a.createElement(p,null,this.props.caption)))}else t=i.a.createElement(h,null,i.a.createElement(a.a,{id:"caption-component",placeholder:"Caption Text",inputRef:t=>this.inputFieldRef.current=t,className:"cmcomp-caption",onBlur:this.handleChange,onChange:!0===this.props.hookOnChangeEvent?this.handleChange:()=>{}}));return t}}u.defaultProps={inCode:!1}},1737:function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"a",(function(){return h}));var o=n(55),i=n(35);function a(t){if(!t)return null;const e=/width="(.*?)pt"/.exec(t);return e&&e[1]?function(t){return Math.ceil(96*t/72)}(e[1]):null}function s(t){return"center"===t?"0 auto":"left"===t?"0 auto auto 0":"right"===t?"0 0 0 auto":"0 auto"}async function r(t){const e=(await Object(o.a)(()=>Promise.all([n.e(0),n.e(174),n.e(45)]).then(n.t.bind(null,1784,7)))).default;try{return{success:!0,svgString:e(t,{format:"svg",engine:"dot"})}}catch(i){return{success:!1,errorMessage:i.message}}}function l(t,e,n){if(null==e)return t;if("number"===typeof e)return[t.slice(0,e),n,t.slice(e)].join("");const{line:o,ch:i}=e,a=t.split(/\r\n|\r|\n/),s=a[o].slice(0,i)+n+a[o].slice(i);return[...a].splice(o,1,s).join("\n")}function c(t,e,n){const o=document.getElementById(e),i=setInterval(()=>{if(o.innerHTML){clearInterval(i);const e=o.getElementsByTagName("svg")[0],a=parseInt(e.width.baseVal.value,10),s=parseInt(e.height.baseVal.value,10),r='<?xml version="1.0" encoding="utf-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="'.concat(a,'" height="').concat(s,'" xmlns:xlink="http://www.w3.org/1999/xlink"><source><![CDATA[').concat(t,"]]></source>").concat(e.innerHTML,"</svg>");n(r)}},50)}function d(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n].content.length;return 1024*i.w-e}function p(t,e){let n=0;for(let i=0;i<e.length;i++){var o,a,s;n+=null!==(o=null===t||void 0===t?void 0:null===(a=t[e[i]])||void 0===a?void 0:null===(s=a.content)||void 0===s?void 0:s.length)&&void 0!==o?o:0}return 1024*i.w-n}function h(t){return 1024*i.x-t.length}},1740:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(57),s=n.n(a),r=n(133),l=n.n(r);e.a=t=>{let{xs:e,sm:n,lg:o,close:a,block:r,type:c="button",navbar:d,active:p,inverse:h=!1,rounded:m,outlined:u=!1,bsStyle:g="default",onlyOnHover:f,retainBackground:v,disabled:y=!1,onClick:w,className:b,componentClass:x="button",children:C}=t;const I=x;let E={btn:!0,"btn-xs":e,"btn-sm":n,"btn-lg":o,active:p,"btn-block":r,"navbar-btn":d,"btn-inverse":!!v||h,"btn-rounded":m,"btn-outlined":!!h||!!f||!!v||u,"btn-onlyOnHover":f,"btn-retainBg":v},k=null;g.split(",").forEach(t=>{const e="btn-".concat(t.trim());E=l()(E,{[e]:{$set:!0}})}),k=s()(E),a&&(k="close",C=i.a.createElement("span",null,i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},"Close")));const S={type:c,onClick:w,role:"button",disabled:y,className:[b,k].join(" ")};return i.a.createElement(I,S,C)}},1749:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(88),s=n.n(a),r=n(1655),l=n(1);e.a={create:(t,e,n)=>{const o=document.querySelector("body");let a;o.classList.add("modal-open"),o.insertAdjacentHTML("beforeend",'<div class="modal-backdrop fade in"></div><div id="modal-container"></div>'),s.a.render(i.a.createElement(l.a,{theme:n},i.a.createElement(r.a,{theme:n},i.a.createElement(t,{componentToRender:e,ref:t=>{a=t}}))),o.querySelector("#modal-container"),()=>{a.open()})},remove:()=>{document.querySelector("html").style.overflow="";const t=document.querySelector("body");t.style.overflow="",s.a.unmountComponentAtNode(t.querySelector("#modal-container")),t.removeChild(t.querySelector("#modal-container"))},isExist:()=>document.querySelector("#modal-container")}},1774:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(1851),s=n.n(a);var r=n(1).d.div.withConfig({displayName:"styles__ImageWrap",componentId:"sc-1h2l6dw-0"})(["img{border-width:1px !important;}"]);e.a=t=>{let{imageSrc:e,customStyle:n,alt:o}=t;return i.a.createElement(r,null,i.a.createElement(s.a,{image:{src:e,style:n,alt:o},zoomImage:{src:e},shouldReplaceImage:!1,shouldRespectMaxDimension:!0,zoomMargin:0,defaultStyles:{overlay:{cursor:"zoom-out"}}}))}},1775:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return u}));var o=n(1),i=n(1785),a=n(18),s=n(12),r=n(5);const l=o.d.div.withConfig({displayName:"styles__MarkdownEditorStyled",componentId:"sc-3mvtlg-0"})([".textEditor-Markdown{position:relative;}.textEditor-Markdown-label{z-index:100;text-align:center;border-bottom:none;background:",";border-radius:",";padding:10px 0;width:100%;&.left{left:-10px;}}@media (max-width:480px){.textEditor-Markdown-label{text-align:left;}}.btn .btn-expand{position:absolute;right:15px;top:5px;border:none;background:transparent;svg{transition:0.2s;cursor:pointer;&:hover{stroke:",";}}&:active,&:hover,&:focus{outline:none;background:transparent;box-shadow:none;}}.btn .btn-close{border:none;background:transparent;padding:0;position:absolute;top:27px;right:30px;z-index:1;svg{transition:0.2s;cursor:pointer;&:hover{stroke:",";}}&:active,&:hover,&:focus{outline:none;background:transparent;box-shadow:none;}& > i{font-size:",";}}.panel{box-shadow:none;border-color:",";margin-bottom:0;height:40px;.b-btn_default{color:",";line-height:0;vertical-align:super;&:hover{color:",";}}.panel-body{padding:0;}.grid-icon{stroke:",";margin:6px 8px 0px 9px;transition:0.2s;cursor:pointer;&:hover{stroke:",";}}.grid-icon-no-right-padding{stroke:",";margin:6px 0px 0px 9px;transition:0.2s;cursor:pointer;&:hover{stroke:",";}}.b-image-slim-uploader{width:35px;height:35px;.image-upload-btn{margin:0;font-size:",";color:",";padding:0;top:2px;&:hover{color:",";}}.form-control[type='file']{width:50px;height:auto;}}.markdown-help-icon{@media (max-width:","){display:none;}}}"],t=>{let{theme:e}=t;return e.palette.grey[100]},a.v,t=>{let{theme:e}=t;return e.palette.primary.main},t=>{let{theme:e}=t;return e.palette.primary.main},s.a.h4,t=>{let{theme:e}=t;return e.palette.grey[300]},t=>{let{theme:e}=t;return e.palette.grey[400]},t=>{let{theme:e}=t;return e.palette.grey[500]},t=>{let{theme:e}=t;return e.palette.grey[400]},t=>{let{theme:e}=t;return e.palette.primary.main},t=>{let{theme:e}=t;return e.palette.grey[400]},t=>{let{theme:e}=t;return e.palette.primary.main},s.a.textLarge,t=>{let{theme:e}=t;return e.palette.grey[400]},t=>{let{theme:e}=t;return e.palette.grey[500]},r.f.pixels),c=Object(o.d)(l).withConfig({displayName:"styles__FullScreen",componentId:"sc-3mvtlg-1"})(["padding:20px;overflow-y:auto;.col,.row,.textEditor-Markdown,.cmcomp-editor-container-markdown,.CodeMirror-wrap,.markdownViewer,.viewer-container{height:100%;}.markdownViewer{overflow:auto;}"]),d=o.d.div.withConfig({displayName:"styles__SpellCheckToggle",componentId:"sc-3mvtlg-2"})(["position:absolute;top:10px;right:30px;line-height:0;cursor:pointer;svg{transition:0.2s;cursor:pointer;&:hover{stroke:",";}}.switch{width:34px;height:18px;& .switch-toggle{width:17px;height:16px;}& .on{background:",";.switch-toggle{left:15px;}}}"],t=>{let{theme:e}=t;return e.palette.primary.main},t=>{let{theme:e}=t;return e.palette.grey[400]}),p=Object(o.d)(d).withConfig({displayName:"styles__SpellCheckToggleFullScreen",componentId:"sc-3mvtlg-3"})(["right:53px;svg{transition:0.2s;cursor:pointer;&:hover{stroke:",";}}"],t=>{let{theme:e}=t;return e.palette.primary.main}),h=o.d.div.withConfig({displayName:"styles__PreviewToggle",componentId:"sc-3mvtlg-4"})(["position:absolute;top:11px;right:60px;cursor:pointer;svg{transition:0.2s;cursor:pointer;&:hover{stroke:",";}}"],t=>{let{theme:e}=t;return e.palette.primary.main}),m=Object(o.d)(h).withConfig({displayName:"styles__PreviewToggleFullScreen",componentId:"sc-3mvtlg-5"})(["right:83px;"]),u=Object(o.d)(i.a).withConfig({displayName:"styles__MarkdownTextarea",componentId:"sc-3mvtlg-6"})(["width:98%;border:none;background:transparent;outline:none;resize:none;font-size:",";font-family:Consolas,'Liberation Mono',Menlo,Courier,monospace;"],s.a.detail);e.g=l},1783:function(t,e,n){"use strict";e.a=(t,e,n,o,i,a)=>t?"/api/collection/".concat(e,"/").concat(t,"/page/").concat(n,"/image/").concat(o):i?"/api/edpresso/shot/".concat(i,"/image/").concat(o):a?"/api/page/".concat(a,"/image/download/").concat(o):"/api/page/".concat(e,"/").concat(n,"/image/").concat(o)},1796:function(t,e,n){"use strict";var o=n(0),i=n(57),a=n.n(i),s=n(1749),r=n(64),l=n(1);function c(){const t=Object(r.a)(["\n    .modal-fullscreen {\n        .modal-dialog{\n            width: 100%;\n            height: 100%;\n            margin: 0;\n\n            .modal-content{\n                height: 100%;\n                overflow-y: auto;\n                border: 0;\n                border-radius: 0;\n            }\n\n            .modal-body {\n                position: absolute;\n                padding: 15px;\n                bottom: 61px;\n                top: 61px;\n                left: 0;\n                right: 0;    \n\n                &.without-footer{\n                    bottom: 0;\n                }        \n            }\n\n            .modal-footer{\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n            }\n        }\n    }\n"]);return c=function(){return t},t}var d=Object(l.b)(c());n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return p}));const p=t=>{let{className:e,children:n}=t;const i={className:[e,"modal-footer"].join(" ")};return o.createElement("div",i,n)},h=t=>{let{className:e,children:n}=t;const i={className:[e,"modal-body"].join(" ")};return o.createElement("div",i,n)},m=t=>{let{className:e,children:n}=t;const i={className:[e,"modal-header"].join(" ")};return o.createElement("div",i,n)};function u(){const t=document.querySelector("body");t.classList.remove("modal-open");const e=t.querySelector(".modal-backdrop");t.removeChild(e)}class g extends o.Component{constructor(){super(...arguments),this.state={styles:{}}}componentWillUnmount(){u()}close(){this.props.onHide(),u();this.setState({styles:{display:"none"}},this.props.onHidden),s.a.remove()}open(){this.props.onShow();this.setState({styles:{display:"block"}},this.props.onShown),document.querySelector("html").style.overflow="hidden",document.querySelector("body").style.overflow="hidden"}render(){const t=a()({"modal-dialog":!0,"modal-lg":this.props.lg,"modal-sm":this.props.sm}),e=a()({modal:!0,fade:!0,in:"block"===this.state.styles.display,out:"none"===this.state.styles.display}),n={role:"dialog",tabIndex:"-1",style:this.state.styles,className:[this.props.className,!0===this.props.fullscreen&&"modal-fullscreen",e.trim()].join(" ")};return o.createElement(o.Fragment,null,o.createElement(d,null),o.createElement("div",n,o.createElement("div",{className:t.trim()},o.createElement("div",{className:"modal-content"},this.props.children))))}}g.defaultProps={onShow(){},onShown(){},onHide(){},onHidden(){}}},1837:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(0),i=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var r=i.a.createElement("path",{d:"M1615 0q70 0 122.5 46.5t52.5 116.5q0 63-45 151-332 629-465 752-97 91-218 91-126 0-216.5-92.5t-90.5-219.5q0-128 92-212l638-579q59-54 130-54zm-909 1034q39 76 106.5 130t150.5 76l1 71q4 213-129.5 347t-348.5 134q-123 0-218-46.5t-152.5-127.5-86.5-183-29-220q7 5 41 30t62 44.5 59 36.5 46 17q41 0 55-37 25-66 57.5-112.5t69.5-76 88-47.5 103-25.5 125-10.5z"});const l=t=>{let{svgRef:e,title:n}=t,o=s(t,["svgRef","title"]);return i.a.createElement("svg",a({className:"paint-brush-icon",width:1792,height:1792,viewBox:"0 0 1792 1792",ref:e},o),n?i.a.createElement("title",null,n):null,r)},c=i.a.forwardRef((t,e)=>i.a.createElement(l,a({svgRef:e},t)));n.p},1868:function(t,e,n){"use strict";e.a=t=>{if(!(null===t||void 0===t?void 0:t.pathname))return!1;const e=t.pathname.split("/");if(e.length){if("page"===e[1]&&"draft"!==e[e.length-1])return!0;if(("courses"===e[1]||"collection"===e[1])&&"draft"!==e[e.length-1]&&"versions"!==e[e.length-1])return!0}return!1}},1869:function(t,e,n){"use strict";e.a={version:"2.0",text:"",mdHtml:"",cursorPosition:{line:0,ch:0}}},1929:function(t,e,n){"use strict";(function(t){var o=n(0),i=n.n(o),a=n(1774);e.a=e=>{if(!e.content&&!e.path)return null;const n=e.path||"data:image/svg+xml;base64,".concat(t.from(e.content).toString("base64"));return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(a.a,{imageSrc:n,customStyle:{maxWidth:"100%",height:"auto"},alt:"svg viewer"}))}}).call(this,n(1729).Buffer)},1930:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),e.b={xml:"<mxGraphModel><root></root></mxGraphModel>",svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" version="1.1"></svg>',caption:"",path:"",prevPath:"",prevSvg:"",prevXml:""};const o={xml_string:"<mxGraphModel><root></root></mxGraphModel>",svg_string:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" version="1.1"></svg>',path:""}},1943:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(817),s=n.n(a),r=n(650),l=n(1783),c=n(85),d=n(1737),p=n(58),h=n(114),m=n(282),u=n(35),g=n(1),f=n(1665),v=n(290);const y=Object(g.d)(f.a).attrs(t=>{let{theme:e}=t;return{size:v.e,color:e.palette.grey[400]}}).withConfig({displayName:"styles__ImageIconStyled",componentId:"igidxw-0"})(["cursor:pointer;transition:0.2s;:hover{stroke:",";}"],t=>{let{theme:e}=t;return e.palette.primary.main}),w=g.d.input.withConfig({displayName:"styles__Input",componentId:"igidxw-1"})(["width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;"]),b=g.d.span.withConfig({displayName:"styles__Container",componentId:"igidxw-2"})(["display:flex;"]),x=g.d.div.withConfig({displayName:"styles__UrlContainer",componentId:"igidxw-3"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin-left:20px;padding-left:20px;border-left:1px solid ",";"],t=>{let{theme:e}=t;return e.palette.grey[300]}),C=g.d.span.withConfig({displayName:"styles__Url",componentId:"igidxw-4"})(["color:",";"],t=>{let{theme:e}=t;return e.palette.primary.main});var I=y,E=n(540);class k extends o.Component{constructor(){super(...arguments),this.state={key:0},this.addImage=t=>{const{pageId:e,shotId:n,editorPageId:o,authorId:i,collectionId:a,text:s,cursorPosition:r,isSpellCheckEnabled:p,textAreaCursor:h}=this.props;let u=null;a?u=c.u:e?u=c.o:n?u=c.x:o&&(u=c.w);let g={};a?g={author_id:i,collection_id:a,page_id:e}:e?g=e:n?g=n:o&&(g=o);const{name:f}=t.file;let v=Object(d.c)(s,p?h:r,"![Uploading ".concat(f,"]"));this.props.onUpdate({mdText:v,mdHtml:Object(m.b)(v)}),u(g).then(s=>{const{upload_url:r}=JSON.parse(s),{file:d}=t;Object(c.P)({upload_url:r,file:d}).then(()=>{const{image_id:t}=JSON.parse(s);this.setState({imagePath:Object(l.a)(a,i,e,t,n,o),key:this.state.key+1},()=>{const{text:t,inDrawing:e}=this.props;e||(v=t.replace("![Uploading ".concat(f,"]"),"![](".concat(this.state.imagePath,")"))),this.props.onUpdate({mdText:v,mdHtml:Object(m.b)(v)})})})})},this.onFileChange=t=>{const{files:e}=t.target;e.length&&(e[0].size>u.p.THREE_MB?alert("Image Size Limit Exceeded (3mb)"):function(t,e){const n=new FileReader,o=new Image;n.readAsDataURL(t),n.onload=n=>{o.src=n.target.result,o.onload=function(){const o={thumbnail:n.target.result,metadata:{width:this.width,height:this.height,sizeInBytes:t.size,name:t.name}};return e(o)}}}(e[0],t=>{const n={file:e[0],thumbnail:t.thumbnail,metadata:t.metadata};this.addImage(n)}))},this.onButtonClick=()=>{this.fileInputRef.click()}}render(){let t=null;return t=this.props.inDrawing?i.a.createElement(b,{key:"drawing_image_upload"},i.a.createElement(p.a,{onClick:this.onButtonClick},"Upload Image"),i.a.createElement(w,{ref:t=>{this.fileInputRef=t},key:this.state.key,type:"file",onChange:this.onFileChange}),this.state.imagePath&&i.a.createElement(x,null,i.a.createElement(C,null,i.a.createElement("span",{style:{marginRight:"10px"}},"".concat(window.location.origin).concat(this.state.imagePath)),i.a.createElement(h.a,{zoomOnHover:!0,icon:"Copy",onClick:()=>s()("".concat(window.location.origin).concat(this.state.imagePath)),color:this.props.theme.palette.grey[800],size:20})),i.a.createElement("span",null,"Paste the URL in ",i.a.createElement("strong",null,"Insert Image...")," under"," ",i.a.createElement("strong",null,"+")," sign."))):i.a.createElement("span",{key:"markdown_image_upload"},i.a.createElement(I,{onClick:this.onButtonClick}),i.a.createElement(w,{ref:t=>{this.fileInputRef=t},key:this.state.key,type:"file",onChange:this.onFileChange})),[i.a.createElement(E.a,{key:"markdown_image_uploader_global"}),t]}}k.defaultProps={isDrawing:!1,editorPageId:null};e.a=Object(r.a)(k)},1961:function(t,e){},1962:function(t,e){},2062:function(t,e){},2063:function(t,e){},2129:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(330),s=n(1837),r=n(1740);e.a=t=>i.a.createElement("div",null,i.a.createElement("div",{className:"edcomp-toolbar"},i.a.createElement("div",{style:{padding:1}},i.a.createElement(r.a,{style:{marginLeft:15,float:"right"},sm:!0,outlined:!0,bsStyle:"darkgreen45",onClick:t.onModify},i.a.createElement(a.a,{icon:i.a.createElement(s.a,null)}),"Edit"))),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("div",null,t.children)))},2168:function(t,e,n){"use strict";var o=n(0),i=n.n(o),a=n(1749),s=n(1796),r=n(58),l=n(1943),c=n(35),d=n(64),p=n(1);function h(){const t=Object(d.a)(["\n  .modal-container {\n    .modal-content {\n      border-radius: 0px;\n      border: none;\n    }\n\n    .modal-header {\n      display: flex;\n      justify-content: space-between;\n      text-align: right;\n\n      ::before {\n        content: none;\n      }\n      button {\n        margin-left: 10px;\n      }\n    }\n\n    .modal-header::before {\n      content: none;\n    }\n    .modal-header::after {\n      content: none;\n    }\n    .mxPopupMenuItem {\n      display: none;\n    }\n  }\n"]);return h=function(){return t},t}const m=Object(p.b)(h());var u=n(1655);function g(){window.confirm(c.i)&&a.a.remove()}e.a=(t,e,n)=>class extends o.Component{constructor(){super(...arguments),this.handleSave=()=>{const t=this.props.onUpdate||e.onUpdate;null===t||void 0===t||t(this.buffer||this.props.content||e.content),a.a.remove()},this.restore=()=>{var t;window.confirm(c.G)&&(null===(t=e.onRestore)||void 0===t||t.call(e),a.a.remove())},this.handleUpdate=t=>{this.buffer=t},this.returnData=()=>this.buffer,this.setModalRefToWindow=t=>{this.modalRef=t,window.MODAL_CONTAINER_REF=this}}open(){this.modalRef.open()}render(){var o;let c=i.a.createElement("div",{key:"empty_upload_button"});(e.shotId||e.collectionId&&e.pageId)&&(c=i.a.createElement(l.a,{shotId:e.shotId,dispatch:e.dispatch,onUpdate:this.props.onUpdate||e.onUpdate,inDrawing:!0,pageId:e.pageId,collectionId:e.collectionId,isDraft:e.isDraft,userId:e.userId,key:"image_upload_for_markdown",authorId:e.userId}));const d=[c,i.a.createElement("div",{key:"default-button-container"},i.a.createElement(r.a,{key:"default-update-button",onClick:this.handleSave},"Update"),i.a.createElement(r.a,{key:"default-restore-button",disabled:e.disableRestore,onClick:this.restore},"Restore"),i.a.createElement(r.a,{key:"default-close-button",danger:!0,onClick:g,onTouchEnd:a.a.remove},"Close"))],h=(null===n||void 0===n?void 0:n.length)?n:d;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{theme:e.theme},i.a.createElement(u.a,{theme:e.theme},i.a.createElement(m,null),i.a.createElement(s.a,{className:"modal-container",lg:!0,ref:t=>this.setModalRefToWindow(t),fullscreen:!0},i.a.createElement(s.d,null,h),i.a.createElement(s.b,{className:"without-footer"},i.a.createElement(t,Object.assign({onUpdate:this.handleUpdate,content:null===e||void 0===e?void 0:null===(o=e.content)||void 0===o?void 0:o.xml},e.content)))))))}}}}]);
//# sourceMappingURL=widget-Columns.5e952445.chunk.js.map