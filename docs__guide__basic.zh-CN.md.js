(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"2HG5":function(e,l,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("fAei");t("2PD5");function c(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?c(Object(t),!0).forEach((function(l){m(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function m(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function u(e,l){return E(e)||s(e,l)||f(e,l)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,l){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done);c=!0)if(r.push(n.value),l&&r.length===l)break}catch(m){i=!0,a=m}finally{try{c||null==t["return"]||t["return"]()}finally{if(i)throw a}}return r}}function E(e){if(Array.isArray(e))return e}function d(e){return v(e)||p(e)||f(e)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,l){if(e){if("string"===typeof e)return b(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,l):void 0}}function p(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function v(e){if(Array.isArray(e))return b(e)}function b(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}var w=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"__dumi-site-tree-icon icon-file",fill:"currentcolor",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"})),g=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"__dumi-site-tree-icon icon-folder-open",fill:"currentcolor",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"})),y=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"__dumi-site-tree-icon icon-folder",fill:"currentcolor",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"})),x=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"__dumi-site-tree-icon icon-minus-square",fill:"currentcolor",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),a.a.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"})),A=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"__dumi-site-tree-icon icon-plus-square",fill:"currentcolor",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),a.a.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}));function k(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=[];return[].concat(e).forEach((function(e,n){var a,r="".concat(l?"".concat(l,"-"):"").concat(n);switch(e.type){case"ul":var c=(null===(a=t[t.length-1])||void 0===a?void 0:a.children)||t,i=k(e.props.children||[],r);c.push.apply(c,d(i));break;case"li":var m=k(e.props.children,r);t.push({title:[].concat(e.props.children).filter((function(e){return"ul"!==e.type})),key:r,children:m,isLeaf:!m.length});break;default:}})),t}var H=function(e){var l=Object(n["useState"])(k(e)),t=u(l,2),a=t[0],r=t[1];return Object(n["useEffect"])((function(){r(k(e))}),[e]),a},O=function(e){var l=e.isLeaf,t=e.expanded;return l?w:t?g:y},j=function(e){var l=e.isLeaf,t=e.expanded;return l?a.a.createElement("span",{className:"tree-switcher-leaf-line"}):t?a.a.createElement("span",{className:"tree-switcher-line-icon"},x):a.a.createElement("span",{className:"tree-switcher-line-icon"},A)},L=function(){return{height:0,opacity:0}},N=function(e){return{height:e.scrollHeight,opacity:1}},V=function(e){return{height:e.offsetHeight}},z=function(e,l){return"height"===l.propertyName},M={motionName:"ant-motion-collapse",onAppearStart:L,onEnterStart:L,onAppearActive:N,onEnterActive:N,onLeaveStart:V,onLeaveActive:L,onAppearEnd:z,onEnterEnd:z,onLeaveEnd:z,motionDeadline:500};l["a"]=function(e){var l=H(e.children),t=Object(n["createRef"])(),c=function(e,l){var n=l.isLeaf;n||e.shiftKey||e.metaKey||e.ctrlKey||t.current.onNodeExpand(e,l)};return a.a.createElement(r["b"],{className:"__dumi-site-tree",icon:O,ref:t,itemHeight:20,showLine:!0,selectable:!1,motion:i(i({},M),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:e.title||"<root>",children:l}],defaultExpandAll:!0,switcherIcon:j})}},"2PD5":function(e,l,t){},cQTR:function(e,l,t){"use strict";t.r(l);var n=t("q1tI"),a=t.n(n),r=t("dEAq"),c=t("2HG5"),i=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},a.a.createElement(r["AnchorLink"],{to:"#\u76ee\u5f55\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u76ee\u5f55\u7ed3\u6784"),a.a.createElement("h3",{id:"\u666e\u901a\u9879\u76ee"},a.a.createElement(r["AnchorLink"],{to:"#\u666e\u901a\u9879\u76ee","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u666e\u901a\u9879\u76ee"),a.a.createElement("p",null,"\u4e00\u4e2a\u666e\u901a\u7684\u3001\u4f7f\u7528 dumi \u505a\u7814\u53d1\u7684\u7ec4\u4ef6\u5e93\u76ee\u5f55\u7ed3\u6784\u5927\u81f4\u5982\u4e0b\uff1a"),a.a.createElement(c["a"],null,a.a.createElement("ul",null,a.a.createElement("li",null,"docs",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6587\u6863\u76ee\u5f55"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.md",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6587\u6863\u9996\u9875\uff08\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u4f1a fallback \u5230 README.md\uff09")),a.a.createElement("li",null,"guide",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6587\u6863\u5176\u4ed6\u8def\u7531\uff08\u793a\u610f\uff09"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.md"),a.a.createElement("li",null,"sample.md"),a.a.createElement("li",null,"help.md"))))),a.a.createElement("li",null,"src",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6e90\u7801\u76ee\u5f55"),a.a.createElement("ul",null,a.a.createElement("li",null,"Button",a.a.createElement("small",null,"\u5355\u4e2a\u7ec4\u4ef6"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.tsx",a.a.createElement("small",null,"\u7ec4\u4ef6\u6e90\u7801")),a.a.createElement("li",null,"index.less",a.a.createElement("small",null,"\u7ec4\u4ef6\u6837\u5f0f")),a.a.createElement("li",null,"index.md",a.a.createElement("small",null,"\u7ec4\u4ef6\u6587\u6863")))),a.a.createElement("li",null,"index.ts",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u5165\u53e3\u6587\u4ef6")))),a.a.createElement("li",null,".umirc.ts",a.a.createElement("small",null,"dumi \u914d\u7f6e\u6587\u4ef6\uff08\u4e5f\u53ef\u4ee5\u662f config/config.ts\uff09")),a.a.createElement("li",null,".fatherrc.ts",a.a.createElement("small",null,"father-build \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u7ec4\u4ef6\u5e93\u6253\u5305")))),a.a.createElement("p",null,"\u5982\u679c\u662f\u5355\u7eaf\u7684\u6587\u6863\u7ad9\u70b9\u3001\u4e0d\u5305\u542b\u7ec4\u4ef6\u6e90\u7801\uff0c\u5ffd\u7565\u4e0a\u9762\u7684 ",a.a.createElement("code",null,"src")," \u76ee\u5f55\u7ed3\u6784\u5373\u53ef\u3002"),a.a.createElement("p",null,"\u6ce8\u610f\uff0c\u6b64\u5904\u4ec5\u5bf9\u76ee\u5f55\u7ed3\u6784\u505a\u8bf4\u660e\uff0c\u5982\u679c\u8981\u521d\u59cb\u5316\u4e00\u4e2a dumi \u9879\u76ee\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 ",a.a.createElement("code",null,"@umijs/create-dumi-lib")," \u6216 ",a.a.createElement("code",null,"@umijs/create-dumi-app")," \u7684\u811a\u624b\u67b6\u8fdb\u884c\u521b\u5efa\u3002"),a.a.createElement("h3",{id:"lerna-\u9879\u76ee"},a.a.createElement(r["AnchorLink"],{to:"#lerna-\u9879\u76ee","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"lerna \u9879\u76ee"),a.a.createElement("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u5c06\u6240\u6709 lerna \u5b50\u5305\u7684\u6587\u6863\u96c6\u4e2d\u5728\u540c\u4e00\u4e2a\u6587\u6863\u7ad9\u70b9\u4e2d\uff0c\u76ee\u5f55\u7ed3\u6784\u901a\u5e38\u662f\u8fd9\u6837\u7684\uff1a"),a.a.createElement(c["a"],null,a.a.createElement("ul",null,a.a.createElement("li",null,"docs",a.a.createElement("small",null,"\u4ed3\u5e93\u516c\u5171\u6587\u6863"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.md",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6587\u6863\u9996\u9875\uff08\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u4f1a fallback \u5230 README.md\uff09")),a.a.createElement("li",null,"guide",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u6587\u6863\u5176\u4ed6\u8def\u7531\uff08\u793a\u610f\uff09"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.md"),a.a.createElement("li",null,"sample.md"),a.a.createElement("li",null,"help.md"))))),a.a.createElement("li",null,"packages",a.a.createElement("ul",null,a.a.createElement("li",null,"a",a.a.createElement("small",null,"\u5b50\u5305 a"),a.a.createElement("ul",null,a.a.createElement("li",null,"src",a.a.createElement("small",null,"\u5b50\u5305 a \u7684\u6e90\u7801\u76ee\u5f55"),a.a.createElement("ul",null,a.a.createElement("li",null,"Button",a.a.createElement("small",null,"\u5355\u4e2a\u7ec4\u4ef6"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.tsx",a.a.createElement("small",null,"\u7ec4\u4ef6\u6e90\u7801")),a.a.createElement("li",null,"index.less",a.a.createElement("small",null,"\u7ec4\u4ef6\u6837\u5f0f")),a.a.createElement("li",null,"index.md",a.a.createElement("small",null,"\u7ec4\u4ef6\u6587\u6863")))),a.a.createElement("li",null,"index.ts",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u5165\u53e3\u6587\u4ef6")))))),a.a.createElement("li",null,"b",a.a.createElement("small",null,"\u5b50\u5305 b"),a.a.createElement("ul",null,a.a.createElement("li",null,"src",a.a.createElement("small",null,"\u5b50\u5305 b \u7684\u6e90\u7801\u76ee\u5f55"),a.a.createElement("ul",null,a.a.createElement("li",null,"Table",a.a.createElement("small",null,"\u5355\u4e2a\u7ec4\u4ef6"),a.a.createElement("ul",null,a.a.createElement("li",null,"index.tsx",a.a.createElement("small",null,"\u7ec4\u4ef6\u6e90\u7801")),a.a.createElement("li",null,"index.less",a.a.createElement("small",null,"\u7ec4\u4ef6\u6837\u5f0f")),a.a.createElement("li",null,"index.md",a.a.createElement("small",null,"\u7ec4\u4ef6\u6587\u6863")))),a.a.createElement("li",null,"index.ts",a.a.createElement("small",null,"\u7ec4\u4ef6\u5e93\u5165\u53e3\u6587\u4ef6")))))))),a.a.createElement("li",null,".umirc.ts",a.a.createElement("small",null,"dumi \u914d\u7f6e\u6587\u4ef6\uff08\u4e5f\u53ef\u4ee5\u662f config/config.ts\uff09")),a.a.createElement("li",null,".fatherrc.ts",a.a.createElement("small",null,"father-build \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u7ec4\u4ef6\u5e93\u6253\u5305")))),a.a.createElement("p",null,"dumi \u9ed8\u8ba4\u4f1a\u4ee5 ",a.a.createElement("code",null,"packages/[\u5305\u540d]/src")," \u4e3a\u57fa\u7840\u8def\u5f84\u641c\u5bfb\u6240\u6709\u5b50\u5305\u7684 Markdown \u6587\u6863\u5e76\u751f\u6210\u8def\u7531\uff0c\u76ee\u524d\u6ca1\u6709 lerna \u9879\u76ee\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u67e5\u770b ",a.a.createElement(r["Link"],{to:"https://github.com/alibaba/hooks"},"ahooks")," \u9879\u76ee\u4f5c\u4e3a\u53c2\u8003\u3002")))}));l["default"]=e=>{var l=a.a.useContext(r["context"]),t=l.demos;return a.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:t})}}}]);