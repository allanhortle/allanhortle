(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(e,t,r){"use strict";r.r(t);r(50),r(76),r(38),r(3),r(29),r(13),r(11),r(232);var n=r(0),o=r.n(n),a=r(103),i=r(1),l=r(47);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).tick=function(){var e=new Date,t=(e-(new Date).setHours(0,0,0,0))/864e5,n=""+t,o=e.getHours(),a=e.getMinutes(),i=e.getSeconds();r.setState({fraction:t,realTime:{h:o,m:a,s:i},decimalTime:{h:n.substring(2,3),m:n.substring(3,5),s:n.substring(5,7)}})},r.renderPercent=function(e,t,r){e.h,e.m;return c(Array(t)).map(function(e,r){var n=r,a={flex:"0 0 "+100/t+"%",key:n};return o.a.createElement(l.a,a,n)})},r.state={realTime:{h:0,m:0,s:0},decimalTime:{h:0,m:0,s:0}},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=n.prototype;return s.componentDidMount=function(){setInterval(this.tick,10)},s.render=function(){var e=this.state,t=e.fraction,r=e.realTime,n=e.decimalTime,c=function(e){return String(e).padStart(2,"0")},s=function(e){var t=e.h,r=e.m,n=e.s;return c(t)+":"+c(r)+":"+c(n)},u=Math.floor(100*t);return o.a.createElement(a.a,this.props,o.a.createElement(i.c,null,"Decimal Time"),o.a.createElement(l.a,{p:3,pt:4},o.a.createElement(l.b,null,o.a.createElement(l.a,{flexBasis:"10rem",as:"pre",pr:3},"Decimal   ",s(n)),o.a.createElement(l.a,{position:"relative",flexGrow:"1"},o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"red",width:u+"%"}),o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"comment",width:"0%"}),o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"comment",width:"25%"}),o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"comment",width:"50%"}),o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"comment",width:"75%"}),o.a.createElement(l.a,{position:"absolute",top:"-50%",left:0,height:"300%",borderRight:"1px solid",borderColor:"comment",width:"100%"}),o.a.createElement(l.b,null,this.renderPercent(r,10,100)))),o.a.createElement(l.b,null,o.a.createElement(l.a,{flexBasis:"10rem",as:"pre",pr:3},"Standard  ",s(r)),o.a.createElement(l.a,{position:"relative",flexGrow:"1"},o.a.createElement(l.b,null,this.renderPercent(r,24,60))))))},n}(o.a.Component);t.default=s},232:function(e,t,r){"use strict";var n=r(12),o=r(233),a=r(150),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);n(n.P+n.F*i,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},233:function(e,t,r){var n=r(28),o=r(234),a=r(49);e.exports=function(e,t,r,i){var l=String(a(e)),c=l.length,s=void 0===r?" ":String(r),u=n(t);if(u<=c||""==s)return l;var m=u-c,p=o.call(s,Math.ceil(m/s.length));return p.length>m&&(p=p.slice(0,m)),i?p+l:l+p}},234:function(e,t,r){"use strict";var n=r(58),o=r(49);e.exports=function(e){var t=String(o(this)),r="",a=n(e);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t);return r}}}]);
//# sourceMappingURL=component---src-pages-decimal-time-js-e7d86a55c4299344c5f6.js.map