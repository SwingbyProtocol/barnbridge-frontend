(this["webpackJsonpbarnbridge-frontend"]=this["webpackJsonpbarnbridge-frontend"]||[]).push([[2],{1546:function(e,t,n){!function(){"use strict";function t(e,t,n){function r(t){for(var r=e.length;r--;)if(e[r].contains(t.target))return;n(t)}e=Array.isArray(e)?e:[e];for(var o=(t=Array.isArray(t)?t:[t]).length;o--;)document.addEventListener(t[o],r);return{remove:function(){for(var e=t.length;e--;)document.removeEventListener(t[e],r)}}}e.exports?e.exports=t:window.outy=t}()},2082:function(e,t){var n="undefined"!==typeof Element,r="function"===typeof Map,o="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var s,f,c,u;if(Array.isArray(e)){if((s=e.length)!=t.length)return!1;for(f=s;0!==f--;)if(!a(e[f],t[f]))return!1;return!0}if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!t.has(f.value[0]))return!1;for(u=e.entries();!(f=u.next()).done;)if(!a(f.value[1],t.get(f.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!t.has(f.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((s=e.length)!=t.length)return!1;for(f=s;0!==f--;)if(e[f]!==t[f])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(t,c[f]))return!1;if(n&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!e.$$typeof)&&!a(e[c[f]],t[c[f]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2288:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));var r=n(0);function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof o(e).Element||e instanceof Element}function a(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.round;function c(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;return a(e)&&t&&(r=n.width/e.offsetWidth||1,o=n.height/e.offsetHeight||1),{width:f(n.width/r),height:f(n.height/o),top:f(n.top/o),right:f(n.right/r),bottom:f(n.bottom/o),left:f(n.left/r),x:f(n.left/r),y:f(n.top/o)}}function u(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function p(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function d(e){return c(l(e)).left+u(e).scrollLeft}function m(e){return o(e).getComputedStyle(e)}function h(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function v(e,t,n){void 0===n&&(n=!1);var r=a(t),i=a(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),s=l(t),f=c(e,i),m={scrollLeft:0,scrollTop:0},v={x:0,y:0};return(r||!r&&!n)&&(("body"!==p(t)||h(s))&&(m=function(e){return e!==o(e)&&a(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:u(e);var t}(t)),a(t)?((v=c(t,!0)).x+=t.clientLeft,v.y+=t.clientTop):s&&(v.x=d(s))),{x:f.left+m.scrollLeft-v.x,y:f.top+m.scrollTop-v.y,width:f.width,height:f.height}}function y(e){var t=c(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||l(e)}function b(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:a(e)&&h(e)?e:b(g(e))}function w(e,t){var n;void 0===t&&(t=[]);var r=b(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],h(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(w(g(s)))}function x(e){return["table","td","th"].indexOf(p(e))>=0}function O(e){return a(e)&&"fixed"!==m(e).position?e.offsetParent:null}function j(e){for(var t=o(e),n=O(e);n&&x(n)&&"static"===m(n).position;)n=O(n);return n&&("html"===p(n)||"body"===p(n)&&"static"===m(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&a(e)&&"fixed"===m(e).position)return null;for(var n=g(e);a(n)&&["html","body"].indexOf(p(n))<0;){var r=m(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var E="top",D="bottom",k="right",A="left",M="auto",L=[E,D,k,A],S="start",P="end",B="viewport",W="popper",R=L.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+P])}),[]),H=[].concat(L,[M]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+P])}),[]),T=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var U={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function _(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?U:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},U,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,c={state:o,setOptions:function(n){u(),o.options=Object.assign({},a,o.options,n),o.scrollParents={reference:i(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var f=function(e){var t=q(e);return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:c,options:r}),f=function(){};s.push(a||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(V(t,n)){o.rects={reference:v(t,j(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,u=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:C((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),f=!0}};if(!V(e,t))return c;function u(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var z={passive:!0};var F={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,z)})),f&&c.addEventListener("resize",n.update,z),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),f&&c.removeEventListener("resize",n.update,z)}},data:{}};function N(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?N(o):null,a=o?I(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:f};break;case A:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?J(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case S:t[c]=t[c]-(n[u]/2-r[u]/2);break;case P:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var Y={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},$=Math.max,G=Math.min,K=Math.round,Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:K(K(t*r)/r)||0,y:K(K(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,d=p.x,h=void 0===d?0:d,v=p.y,y=void 0===v?0:v,g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=A,x=E,O=window;if(c){var M=j(n),L="clientHeight",S="clientWidth";M===o(n)&&"static"!==m(M=l(n)).position&&(L="scrollHeight",S="scrollWidth"),M=M,i===E&&(x=D,y-=M[L]-r.height,y*=f?1:-1),i===A&&(w=k,h-=M[S]-r.width,h*=f?1:-1)}var P,B=Object.assign({position:s},c&&Q);return f?Object.assign({},B,((P={})[x]=b?"0":"",P[w]=g?"0":"",P.transform=(O.devicePixelRatio||1)<2?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",P)):Object.assign({},B,((t={})[x]=b?y+"px":"",t[w]=g?h+"px":"",t.transform="",t))}var ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ae(e,t){return t===B?ie(function(e){var t=o(e),n=l(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+d(e),y:f}}(e)):a(t)?function(e){var t=c(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t,n=l(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+d(e),f=-r.scrollTop;return"rtl"===m(o||n).direction&&(s+=$(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(l(e)))}function se(e,t,n){var r="clippingParents"===t?function(e){var t=w(g(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&a(e)?j(e):e;return i(n)?t.filter((function(e){return i(e)&&oe(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),s=o[0],f=o.reduce((function(t,n){var r=ae(e,n);return t.top=$(r.top,t.top),t.right=G(r.right,t.right),t.bottom=G(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),ae(e,s));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function fe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,s=void 0===a?"clippingParents":a,f=n.rootBoundary,u=void 0===f?B:f,p=n.elementContext,d=void 0===p?W:p,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=fe("number"!==typeof y?y:ce(y,L)),b=d===W?"reference":W,w=e.elements.reference,x=e.rects.popper,O=e.elements[h?b:d],j=se(i(O)?O:O.contextElement||l(e.elements.popper),s,u),A=c(w),M=X({reference:A,element:x,strategy:"absolute",placement:o}),S=ie(Object.assign({},x,M)),P=d===W?S:A,R={top:j.top-P.top+g.top,bottom:P.bottom-j.bottom+g.bottom,left:j.left-P.left+g.left,right:P.right-j.right+g.right},H=e.modifiersData.offset;if(d===W&&H){var T=H[o];Object.keys(R).forEach((function(e){var t=[k,D].indexOf(e)>=0?1:-1,n=[E,D].indexOf(e)>=0?"y":"x";R[e]+=T[n]*t}))}return R}function pe(e,t,n){return $(e,G(t,n))}function le(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[E,k,D,A].some((function(t){return e[t]>=0}))}var me=_({defaultModifiers:[F,Y,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];a(o)&&p(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});a(r)&&p(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=N(e),o=[A,E].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,k].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=N(v),g=f||(y===v||!m?[te(v)]:function(e){if(N(e)===M)return[];var t=te(e);return[re(e),t,re(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(N(n)===M?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?H:f,u=I(r),p=u?s?R:R.filter((function(e){return I(e)===u})):L,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[N(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,P=b[0],B=0;B<b.length;B++){var W=b[B],T=N(W),q=I(W)===S,C=[E,D].indexOf(T)>=0,U=C?"width":"height",V=ue(t,{placement:W,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),_=C?q?k:A:q?D:E;w[U]>x[U]&&(_=te(_));var z=te(_),F=[];if(i&&F.push(V[T]<=0),s&&F.push(V[_]<=0,V[z]<=0),F.every((function(e){return e}))){P=W,j=!1;break}O.set(W,F)}if(j)for(var J=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},X=m?3:1;X>0;X--){if("break"===J(X))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=ue(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=N(t.placement),b=I(t.placement),w=!b,x=J(g),O="x"===x?"y":"x",M=t.modifiersData.popperOffsets,L=t.rects.reference,P=t.rects.popper,B="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(M){if(i||s){var R="y"===x?E:A,H="y"===x?D:k,T="y"===x?"height":"width",q=M[x],C=M[x]+v[R],U=M[x]-v[H],V=d?-P[T]/2:0,_=b===S?L[T]:P[T],z=b===S?-P[T]:-L[T],F=t.elements.arrow,X=d&&F?y(F):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=Y[R],Q=Y[H],Z=pe(0,L[T],X[T]),ee=w?L[T]/2-V-Z-K-B:_-Z-K-B,te=w?-L[T]/2+V+Z+Q+B:z+Z+Q+B,ne=t.elements.arrow&&j(t.elements.arrow),re=ne?"y"===x?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ie=M[x]+ee-oe-re,ae=M[x]+te-oe;if(i){var se=pe(d?G(C,ie):C,q,d?$(U,ae):U);M[x]=se,W[x]=se-q}if(s){var fe="x"===x?E:A,ce="x"===x?D:k,le=M[O],de=le+v[fe],me=le-v[ce],he=pe(d?G(de,ie):de,le,d?$(me,ae):me);M[O]=he,W[O]=he-le}}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=N(n.placement),f=J(s),c=[A,k].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return fe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,L))}(o.padding,n),p=y(i),l="y"===f?E:A,d="y"===f?D:k,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=j(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,w=u[l],x=g-p[c]-u[d],O=g/2-p[c]/2+b,M=pe(w,O,x),S=f;n.modifiersData[r]=((t={})[S]=M,t.centerOffset=M-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&oe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),f=le(a,r),c=le(s,o,i),u=de(f),p=de(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),he=n(2082),ve=n.n(he),ye=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},ge="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,be=[],we=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||be},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],c=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);f({styles:ye(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:ye(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return ve()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),p=r.useRef();return ge((function(){p.current&&p.current.setOptions(u)}),[u]),ge((function(){if(null!=e&&null!=t){var r=(n.createPopper||me)(e,t,u);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}}}]);
//# sourceMappingURL=2.c3fbc30f.chunk.js.map