(this.webpackJsonppractical=this.webpackJsonppractical||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"X":"4","Y":"2"},{"X":"2","Y":"7"},{"X":"8","Y":"4"},{"X":"6","Y":"9"},{"X":"7","Y":"3"},{"X":"9","Y":"5"},{"X":"5","Y":"7"}]')},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(13),n(1)),i=n(2),u=n(4),s=n(3),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e,t){a.setState({total:Number(e.X)+Number(e.Y),index:t})},a.state={total:"",index:null},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.test;return r.a.createElement("div",{className:"col"},r.a.createElement("table",{div:!0,className:"table"},r.a.createElement("tr",null,r.a.createElement("th",null,"X"),r.a.createElement("th",null,"Y"),r.a.createElement("th",null,"Add"),r.a.createElement("th",null,"Total")),t.map((function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",{className:"pos-x"},t.X),r.a.createElement("td",null,t.Y),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleClick(t,n)}},"ADD x+y")),r.a.createElement("td",null,e.state.index===n?e.state.total:""))}))))}}]),n}(a.Component),d=n(7),h=(n(14),d),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{test:h}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6f5cb6a4.chunk.js.map