(this["webpackJsonptic-tac-toe-spa"]=this["webpackJsonptic-tac-toe-spa"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),o=(n(9),n(1)),l=function(e){var t=e.value,n=e.onClick,a=t?"square square-".concat(t.toLowerCase()):"square square-empty";return r.a.createElement("button",{type:"button",className:a,onClick:n},t)};l.defaultProps={value:null,onClick:function(){return null}};var s=l,i=function(e){var t=e.squares,n=e.handleSquareClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(s,{key:"square-".concat(t),value:e,onClick:function(){return n(t)}})})))},m=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],u=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[u])return e[r]}return null},f=function(e){return e[Math.floor(Math.random()*e.length)]},v=function(e,t){var n=function e(t,n,a){var r=m(t);if(null!==r)return{score:r===n?1:-1,moves:[]};var c=function(e){var t=[];return e.forEach((function(e,n){null===e&&t.push(n)})),t}(t);if(0===c.length)return{score:0,moves:[]};var u="X"===a?"O":"X",o=a===n,l={score:o?-1/0:1/0,moves:[]};return c.forEach((function(r){t[r]=a;var c=e(t,n,u).score;t[r]=null,c>l.score?o&&(l.score=c,l.moves=[r]):c<l.score?o||(l.score=c,l.moves=[r]):l.moves.push(r)})),l}(e,t,t).moves;return f(n)},p=function(){var e=Object(a.useState)(Array(9).fill(null)),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!0),l=Object(o.a)(u,2),s=l[0],p=l[1],b=Object(a.useState)(!0),h=Object(o.a)(b,2),E=h[0],k=h[1],y=function(e,t){var a=n.slice();a[t]=e,c(a),p(!s)},O=function(){var e=s?"X":"O",t=v(n,e);y(e,t)};s||E||O();var d=m(n),C=d?"Winner: ".concat(d):"Next player: ".concat(s?"X":"O"),q=r.a.createElement(i,{squares:n,handleSquareClick:function(e){m(n)||n[e]||y(s?"X":"O",e)}}),j=r.a.createElement("button",{type:"button",className:"mr-1",onClick:function(){c(Array(9).fill(null)),p(f([!0,!1]))}},"Reset"),N=r.a.createElement("button",{type:"button",className:"mr-1",onClick:O},"Play AI Move"),S=r.a.createElement("button",{type:"button",onClick:function(){return k(!E)}},"Player O:"," ",E?"Human":"AI");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tic Tac Toe"),q,r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("h3",null,C),j,N,S))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.e54de241.chunk.js.map