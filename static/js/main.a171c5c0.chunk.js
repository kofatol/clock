(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(4),s=c.n(r),o=c(2),a=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),a=s[0],j=s[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),b=d[0],O=d[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date;i((function(){return 30*e.getHours()})),j((function(){return 6*e.getMinutes()})),O((function(){return 6*e.getSeconds()}))}),500);return function(){clearInterval(e)}}),[c,a,b]),{hh:c,mm:a,ss:b}},j=(c(9),c(0)),u=function(e){var t=e.rotationDegree;return Object(j.jsx)("div",{className:"Hour",children:Object(j.jsx)("div",{className:"Hour__hr",style:{transform:"rotateZ(".concat(t,"deg)")}})})},d=i.a.createContext({}),b=(c(11),function(e){var t=e.rotationDegree,c=Object(n.useContext)(d).isLightMode;return Object(j.jsx)("div",{className:"Minute",children:Object(j.jsx)("div",{className:"Minute__mn\n          ".concat(c?"Minute__mn_light":"Minute__mn_dark"),style:{transform:"rotateZ(".concat(t,"deg)")}})})}),O=(c(12),function(e){var t=e.rotationDegree;return Object(j.jsx)("div",{className:"Second",children:Object(j.jsx)("div",{className:"Second__sc",style:{transform:"rotateZ(".concat(t,"deg)")}})})}),l=(c(13),function(){return Object(j.jsx)("div",{className:"Spinner",children:Object(j.jsxs)("div",{className:"Spinner__container",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}),h=(c(14),function(){var e=a(),t=e.hh,c=e.mm,i=e.ss,r=Object(n.useContext)(d).isLightMode;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsxs)("div",{className:"Clock\n          ".concat(r?"Clock_light":"Clock_dark"),children:[Object(j.jsx)(u,{rotationDegree:t+c/12}),Object(j.jsx)(b,{rotationDegree:c}),Object(j.jsx)(O,{rotationDegree:i})]}):Object(j.jsx)(l,{})})}),x=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1];return{isLightMode:c,onThemeChange:function(){i((function(e){return!e}))}}},v=(c(15),function(e){var t=e.onClick,c=Object(n.useContext)(d).isLightMode;return Object(j.jsx)("div",{onClick:t,className:"ThemeSwitcher\n      ".concat(c?"ThemeSwitcher_dark":"ThemeSwitcher_light"),children:Object(j.jsx)("span",{className:"ThemeSwitcher__text",children:c?"Dark mode":"Light mode"})})}),m=(c(16),function(){var e=x(),t=e.isLightMode,c=e.onThemeChange;return Object(j.jsx)("div",{className:"App\n      ".concat(t?"App_light":"App_dark"),children:Object(j.jsxs)(d.Provider,{value:{isLightMode:t},children:[Object(j.jsx)(v,{onClick:c}),Object(j.jsx)(h,{})]})})});s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a171c5c0.chunk.js.map