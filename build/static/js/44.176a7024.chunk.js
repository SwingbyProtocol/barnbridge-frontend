(this["webpackJsonpbarnbridge-frontend"]=this["webpackJsonpbarnbridge-frontend"]||[]).push([[44],{1363:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(4),c=n(17),r=n(8),o=n.n(r),i=n(33),s=n(1431),l=n.n(s),u=n(1),d=["className","children","spinning"],f=function(e){var t=e.className,n=e.children,r=e.spinning,s=Object(c.a)(e,d);return n?r?Object(u.jsxs)("div",{className:l.a.container,children:[Object(u.jsx)("div",{className:l.a.children,children:n}),Object(u.jsx)(i.a,Object(a.a)({name:"loader",className:o()(l.a.spinner,t)},s))]}):Object(u.jsx)(u.Fragment,{children:n}):Object(u.jsx)(i.a,Object(a.a)({name:"loader",className:o()(l.a.spinner,t)},s))}},1368:function(e,t,n){"use strict";var a=n(4),c=n(17),r=n(0),o=n.n(r),i=n(1621),s=n(249),l=n.n(s),u=n(8),d=n.n(u),f=n(1384),b=n.n(f),m=n(1),j=["type","className"];t.a=function(e){var t=e.type,n=void 0===t?"default":t,r=e.className,s=Object(c.a)(e,j),u=o.a.useMemo((function(){if("circle"===n)return Object(m.jsx)(i.a,{spin:!0})}),[n]);return Object(m.jsx)(l.a,Object(a.a)({indicator:u,className:d()(b.a.spin,r)},s))}},1384:function(e,t,n){e.exports={spin:"s_spin__1EZtC"}},1401:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return h}));var a=n(4),c=n(13),r=n(56),o=n(8),i=n.n(o),s=n(0),l=n(33),u=n(1446),d=n.n(u),f=n(1);var b=function(e){var t=e.className,n=e.total,a=e.current,r=e.pageSize,o=e.onChange,u=Math.ceil(n/r),b=Object(s.useMemo)((function(){return function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,c=e-a,r=e+a+1,o=[],i=[];if(t<2)return[1];o.push(1);for(var s=e-a;s<=e+a;s++)s>=c&&s<r&&s<t&&s>1&&o.push(s);return o.push(t),o.forEach((function(e){n&&(e-n===2?i.push(n+1):e-n!==1&&i.push(null)),i.push(e),n=e})),i}(a,u)}),[a,u]);return u<2?null:Object(f.jsxs)("div",{className:i()(d.a.pagination,t),children:[Object(f.jsx)("button",{className:i()(d.a.page,d.a.prev),type:"button",onClick:function(){return o(a-1)},disabled:a<=1,children:Object(f.jsx)(l.a,{name:"chevron",rotate:180,size:24})}),b.map((function(e,t){return e?Object(f.jsx)("button",{onClick:function(){return o(e)},className:i()(d.a.page,Object(c.a)({},d.a.active,e===a)),type:"button",disabled:e===a,children:e},t):Object(f.jsx)("div",{className:d.a.separator,children:"..."},t)})),Object(f.jsx)("button",{className:i()(d.a.page,d.a.next),type:"button",onClick:function(){return o(a+1)},disabled:a>=u,children:Object(f.jsx)(l.a,{name:"chevron",size:24})})]})},m=n(1363),j=n(12),v=n(1447),p=n.n(v),O=function(e){var t,n=e.columns,o=e.data,s=e.loading,u=e.rowKey,d=e.variation,b=void 0===d?"standard":d,j=e.link,v=Object(r.g)();return Object(f.jsxs)("div",{className:i()("table-container",p.a.tableContainer,Object(c.a)({},p.a.loading,s)),children:[Object(f.jsxs)("table",{className:i()(p.a.table,(t={table:"standard"===b,"table-separated":"separated"===b},Object(c.a)(t,p.a.clickable,j),Object(c.a)(t,p.a.loading,s),t)),children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[n.map((function(e,t){var n=e.heading,a=e.align;return Object(f.jsx)("th",{className:a?"text-".concat(a):void 0,children:n},t)})),j?Object(f.jsx)("th",{}):null]})}),Object(f.jsx)("tbody",{children:o.map((function(e,t){var c;return Object(f.jsxs)("tr",{onClick:j?function(){return v.push(j(e))}:void 0,children:[n.map((function(t,n){var c=t.render,r=t.align;return Object(f.jsx)("td",{className:r?"text-".concat(r):void 0,children:Object(f.jsx)(c,Object(a.a)({},e))},n)})),j?Object(f.jsx)("td",{children:Object(f.jsx)(l.a,{name:"arrow",color:"red",className:p.a.arrowIcon})}):null]},null!==(c=null===u||void 0===u?void 0:u(e))&&void 0!==c?c:t)}))})]}),s&&Object(f.jsx)(m.a,{className:p.a.spinner,style:{width:40,height:40,position:"absolute",marginTop:-20,marginLeft:-20}})]})},h=function(e){e.children;var t=e.text,n=e.total,a=e.current,c=e.pageSize,r=e.onChange,o=function(e){var t,n=e.text,a=e.total,c=e.current,r=e.pageSize;if(n){var o=a?(c-1)*r+1:0,i=c*r>a?a:c*r;"function"===typeof n&&(t=n({total:a,from:o,to:i})),!0===n&&(t=Object(f.jsxs)(f.Fragment,{children:["Showing ",o," to ",i," out of ",a," entries"]}))}return t}({text:t,total:n,current:a,pageSize:c});return Object(f.jsxs)("div",{className:i()(p.a.tableFooter,"p-24"),children:[o?Object(f.jsx)(j.b,{type:"p2",weight:"semibold",color:"secondary",children:o}):null,Object(f.jsx)(b,{total:n,current:a,pageSize:c,onChange:r})]})}},1430:function(e,t,n){"use strict";var a=n(4),c=n(17),r=n(0),o=n.n(r),i=n(1452),s=n.n(i),l=n(8),u=n.n(l),d=n(33),f=n(1573),b=n.n(f),m=n(1),j=["className","type"];t.a=function(e){var t=e.className,n=e.type,r=void 0===n?"info":n,i=Object(c.a)(e,j),l=o.a.useMemo((function(){if("info"===r)return Object(m.jsx)(d.a,{name:"info"})}),[r]);return Object(m.jsx)(s.a,Object(a.a)({className:u()(b.a.component,t),type:r,showIcon:!0,icon:l},i))}},1431:function(e,t,n){e.exports={spinner:"s_spinner__2lxg5",rotate:"s_rotate__K9I_G",container:"s_container__2DwVy",children:"s_children__1ZC_G"}},1446:function(e,t,n){e.exports={pagination:"s_pagination__3UMZt",page:"s_page__29oPu",separator:"s_separator__1n_F1",prev:"s_prev__2g1Q9",next:"s_next__d_WwI",active:"s_active__ec-7d"}},1447:function(e,t,n){e.exports={tableContainer:"s_tableContainer__2Dki2",loading:"s_loading__1OMuZ",table:"s_table__Nd1Ke",clickable:"s_clickable__1x0tg",arrowIcon:"s_arrowIcon__1zygh",tableFooter:"s_tableFooter__3iZZl",spinner:"s_spinner__1axuf"}},1452:function(e,t,n){"use strict";var a=n(26),c=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(44)),o=c(n(72)),i=c(n(57)),s=a(n(0)),l=c(n(328)),u=c(n(438)),d=c(n(440)),f=c(n(441)),b=c(n(439)),m=c(n(431)),j=c(n(437)),v=c(n(657)),p=c(n(327)),O=c(n(92)),h=c(n(8)),x=n(70),g=c(n(1574)),_=c(n(1575)),y=n(251),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},N={success:m.default,info:v.default,error:p.default,warning:j.default},C={success:u.default,info:f.default,error:b.default,warning:d.default},w=function(e){var t,n=e.description,a=e.prefixCls,c=e.message,u=e.banner,d=e.className,f=void 0===d?"":d,b=e.style,m=e.onMouseEnter,j=e.onMouseLeave,v=e.onClick,p=e.afterClose,_=e.showIcon,w=e.closable,E=e.closeText,M=e.action,S=k(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),F=s.useState(!1),T=(0,i.default)(F,2),A=T[0],B=T[1],D=s.useRef(),I=s.useContext(x.ConfigContext),z=I.getPrefixCls,P=I.direction,H=z("alert",a),U=function(e){var t;B(!0),null===(t=S.onClose)||void 0===t||t.call(S,e)},L=!!E||w,Z=function(){var e=S.type;return void 0!==e?e:u?"warning":"info"}(),R=!(!u||void 0!==_)||_,V=(0,h.default)(H,"".concat(H,"-").concat(Z),(t={},(0,o.default)(t,"".concat(H,"-with-description"),!!n),(0,o.default)(t,"".concat(H,"-no-icon"),!R),(0,o.default)(t,"".concat(H,"-banner"),!!u),(0,o.default)(t,"".concat(H,"-rtl"),"rtl"===P),t),f),K=(0,g.default)(S);return s.createElement(O.default,{visible:!A,motionName:"".concat(H,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:p},(function(e){var t=e.className,a=e.style;return s.createElement("div",(0,r.default)({ref:D,"data-show":!A,className:(0,h.default)(V,t),style:(0,r.default)((0,r.default)({},b),a),onMouseEnter:m,onMouseLeave:j,onClick:v,role:"alert"},K),R?function(){var e=S.icon,t=(n?C:N)[Z]||null;return e?(0,y.replaceElement)(e,s.createElement("span",{className:"".concat(H,"-icon")},e),(function(){return{className:(0,h.default)("".concat(H,"-icon"),(0,o.default)({},e.props.className,e.props.className))}})):s.createElement(t,{className:"".concat(H,"-icon")})}():null,s.createElement("div",{className:"".concat(H,"-content")},s.createElement("div",{className:"".concat(H,"-message")},c),s.createElement("div",{className:"".concat(H,"-description")},n)),M?s.createElement("div",{className:"".concat(H,"-action")},M):null,L?s.createElement("button",{type:"button",onClick:U,className:"".concat(H,"-close-icon"),tabIndex:0},E?s.createElement("span",{className:"".concat(H,"-close-text")},E):s.createElement(l.default,null)):null)}))};w.ErrorBoundary=_.default;var E=w;t.default=E},1573:function(e,t,n){e.exports={component:"s_component__bp6jU"}},1574:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}},1575:function(e,t,n){"use strict";var a=n(26),c=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(42)),o=c(n(54)),i=c(n(89)),s=c(n(90)),l=a(n(0)),u=c(n(1452)),d=function(e){(0,i.default)(n,e);var t=(0,s.default)(n);function n(){var e;return(0,r.default)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,o.default)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,c=this.state,r=c.error,o=c.info,i=o&&o.componentStack?o.componentStack:null,s="undefined"===typeof t?(r||"").toString():t,d="undefined"===typeof n?i:n;return r?l.createElement(u.default,{type:"error",message:s,description:l.createElement("pre",null,d)}):a}}]),n}(l.Component);t.default=d},1621:function(e,t,n){"use strict";var a=n(4),c=n(0),r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},o=n(120),i=function(e,t){return c.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};i.displayName="LoadingOutlined";t.a=c.forwardRef(i)},2123:function(e,t,n){e.exports={alert:"s_alert__1y0nT",faucets:"s_faucets__3y5Xs"}},2295:function(e,t,n){"use strict";n.r(t);var a=n(15),c=n(14),r=n(16),o=n(23),i=n(24),s=n(0),l=n(19),u=n.n(l),d=n(66),f=n(37),b=n(45),m=n(250),j=n(73),v=n(59),p=n(1),O=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,[Object(f.c)("drip",["address"],[])],e,"")}return Object(r.a)(n,[{key:"drip",value:function(e){return this.send("drip",[e])}}]),n}(f.d);var h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,[Object(f.c)("mint",["address","uint256"],[])],e,"")}return Object(r.a)(n,[{key:"drip",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return this.send("mint",[e,new u.a(1e4).scaleBy(t)])}}]),n}(f.d);var x=Object(s.createContext)(Object(v.a)("FauceteerProvider"));var g=function(e){var t,n,c,r,o,i=e.children,l=Object(b.b)(),u=Object(j.c)(),f=Object(m.e)().getToken,v=function(){var e,t=null===(e=Object(b.b)().contracts.faucets)||void 0===e?void 0:e.compFauceteer;return Object(d.c)().getContract(t,(function(){return new O(t)}))}(),g=function(){var e,t=null===(e=Object(b.b)().contracts.faucets)||void 0===e?void 0:e.aaveFauceteer;return Object(d.c)().getContract(t,(function(){return new h(t)}))}(),_=Object(d.d)(null===(t=l.contracts.faucets)||void 0===t?void 0:t.compUsdc),y=Object(d.d)(null===(n=l.contracts.faucets)||void 0===n?void 0:n.compDai),k=Object(d.d)(null===(c=l.contracts.faucets)||void 0===c?void 0:c.aaveUsdc),N=Object(d.d)(null===(r=l.contracts.faucets)||void 0===r?void 0:r.aaveUsdt),C=Object(d.d)(null===(o=l.contracts.faucets)||void 0===o?void 0:o.aaveDai),w=Object(d.d)("0xc40a66AFB908789341A58B8423F89fE2cb7Dc1f9"),E=Object(s.useMemo)((function(){var e=f(m.a.WETH),t=f(m.a.USDC),n=f(m.a.USDT),c=f(m.a.DAI),r=f(m.a.BOND);return[{name:"kETH",icon:null===e||void 0===e?void 0:e.icon,decimals:null===e||void 0===e?void 0:e.decimals,label:"Kovan Ether",link:{url:"https://github.com/kovan-testnet/faucet",label:"Faucets"}},{name:null===r||void 0===r?void 0:r.symbol,icon:null===r||void 0===r?void 0:r.icon,decimals:null===r||void 0===r?void 0:r.decimals,link:{url:"https://app.uniswap.org/#/swap?use=V2&outputCurrency=".concat(null===w||void 0===w?void 0:w.address),label:"Swap"},token:w}].concat(Object(a.a)(t?[{name:t.symbol,icon:t.icon,decimals:t.decimals,markets:[{name:"Compound",icon:"compound"},{name:"C.R.E.A.M.",icon:"cream"}],fauceteer:v,token:_}]:[]),Object(a.a)(c?[{name:c.symbol,icon:c.icon,decimals:c.decimals,markets:[{name:"Compound",icon:"compound"},{name:"C.R.E.A.M.",icon:"cream"}],fauceteer:v,token:y}]:[]),Object(a.a)(t?[{name:t.symbol,icon:t.icon,decimals:t.decimals,markets:[{name:"AAVE",icon:"aave"}],fauceteer:g,token:k}]:[]),Object(a.a)(n?[{name:n.symbol,icon:n.icon,decimals:n.decimals,markets:[{name:"AAVE",icon:"aave"}],fauceteer:g,token:N}]:[]),Object(a.a)(c?[{name:c.symbol,icon:c.icon,decimals:c.decimals,markets:[{name:"AAVE",icon:"aave"}],fauceteer:g,token:C}]:[]))}),[]);Object(s.useEffect)((function(){u.account&&E.forEach((function(e){var t;null===(t=e.token)||void 0===t||t.loadBalance().catch(Error)}))}),[E,u.account]);var M={compFauceteerContract:v,aaveFauceteerContract:g,faucets:E};return Object(p.jsx)(x.Provider,{value:M,children:i})},_=n(29),y=n(5),k=n(4),N=n(9),C=n.n(N),w=n(8),E=n.n(w),M=n(65),S=n(1430),F=n(1368),T=n(1401),A=n(417),B=n(2123),D=n.n(B),I=[{heading:"Token Name",render:function(e){var t,n,a,c,r,o,i,s;return Object(p.jsxs)("div",{className:"flex align-center",children:[Object(p.jsx)(A.a,Object(k.a)(Object(k.a)(Object(k.a)({name:e.icon},null!==(t=e.markets)&&void 0!==t&&null!==(n=t[0])&&void 0!==n&&n.icon?{bubble1Name:null===(a=e.markets)||void 0===a||null===(c=a[0])||void 0===c?void 0:c.icon}:{}),null!==(r=e.markets)&&void 0!==r&&null!==(o=r[1])&&void 0!==o&&o.icon?{bubble2Name:null===(i=e.markets)||void 0===i||null===(s=i[1])||void 0===s?void 0:s.icon}:{}),{},{size:40,className:"mr-16"})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-p1 fw-semibold mb-4",children:e.name}),e.label&&Object(p.jsx)("div",{className:"text-sm fw-semibold color-secondary",children:e.label}),e.markets&&Object(p.jsx)("div",{className:"text-sm fw-semibold color-secondary",children:e.markets.map((function(e){return e.name})).join(" / ")})]})]})}},{heading:"Your balance",render:function(e){var t,n,a,c=Object(j.c)();return Object(p.jsx)("div",{className:"text-p1 fw-semibold",children:null!==(t=Object(M.d)(null===(n="kETH"===e.name?c.ethBalance:null===(a=e.token)||void 0===a?void 0:a.balance)||void 0===n?void 0:n.unscaleBy(e.decimals)))&&void 0!==t?t:"-"})}},{heading:"",render:function(e){return Object(p.jsxs)(p.Fragment,{children:[e.link&&Object(p.jsx)("a",{href:e.link.url,target:"_blank",rel:"noopener noreferrer",className:"button-ghost ml-auto",children:e.link.label}),Object(p.jsx)(P,{faucet:e})]})}}],z=function(){var e=Object(s.useContext)(x).faucets;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S.a,{type:"info",message:"In order to use the testnet app you must first use the kETH faucets to get kETH. The BOND faucet is a Uniswap market that allows you to swap kETH for BOND.",className:D.a.alert}),Object(p.jsx)("section",{className:E()("card",D.a.faucets),children:Object(p.jsx)(T.a,{columns:I,data:e})})]})},P=function(e){var t=e.faucet,n=Object(j.c)(),a=Object(s.useState)(!1),c=Object(y.a)(a,2),r=c[0],o=c[1];if(!t.fauceteer||!t.token)return null;function i(){return(i=Object(_.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,null===(n=t.fauceteer)||void 0===n?void 0:n.drip(t.token.address,t.decimals).finally((function(){return o(!1)}));case 3:t.token.loadBalance().catch(Error);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("button",{type:"button",className:"button-primary ml-auto",onClick:function(){return i.apply(this,arguments)},disabled:!n.isActive||r,style:{width:"100%"},children:[r&&Object(p.jsx)(F.a,{spinning:!0,style:{marginRight:8}}),"Get ",t.name]})};t.default=function(){return Object(p.jsx)(g,{children:Object(p.jsx)(z,{})})}}}]);
//# sourceMappingURL=44.176a7024.chunk.js.map