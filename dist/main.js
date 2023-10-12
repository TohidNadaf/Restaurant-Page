(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>l});var o=e(81),r=e.n(o),a=e(645),i=e.n(a),c=e(667),s=e.n(c),p=new URL(e(126),e.b),d=i()(r());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Hi+Melody&display=swap);"]);var u=s()(p);d.push([n.id,`/* src/styles.css */\nbody {\n    font-family: Arial, sans-serif;\n    /* background-color: aqua; */\n    background-image: url(${u});\n    /* background-image: url("bg.jpg"); */\n    height: auto;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size:cover;\n  backdrop-filter: blur(2px);\n\n}\n\n#content {\n\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    }\n   \nh1 {\n    color: #ff5733;\n    justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 41px;\n  font-family: 'Original Surfer', sans-serif;\n}\n\nh2{\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-top: 83px;\n  font-size: 79px;\n  /* height: 11px; */\n  font-family: 'Kelly Slab', sans-serif;\n  color:burlywood;\n  text-shadow: 0px 0px 20px #ff9000;\n\n}\n\n h3{\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-top: 140px;\n  font-size: 79px;\n  font-family: 'Hi Melody', sans-serif;\n  height: 0px;\n  text-shadow: 0px 0px 20px whitesmoke;\n} \n\nimg {\n  max-width: 30%;\n  height: 56vh;\n  margin-left: 479px;\n  border-radius: 58px;\n  box-shadow: 6px 9px 11px;\n}\n\np{\n    justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 22px;\n  height: 0px;\n  font-family: 'Original Surfer', sans-serif;\n  color: blanchedalmond;\n  text-shadow: 0px 0px 20px #c5b197;\n\n}\n\nbutton{\n  height: 60px;\n  width: 155px;\n  margin-left: 601px;\n  margin-top: -49px;\n  background-color: rgb(114, 114, 192);\n  border-radius: 12px;\n  border: none;\n\n}\n\n.button1{\n  position: relative;\n  top: -345px;\n  height: 40px;\n  width: 84px;\n  right: -541px;\n  cursor: pointer;\n  border: none;\n  text-shadow: 0px 0px 20px #ff9000;\n  box-shadow: 0px 0px 15px #f2f0ee;\n}\n.button1:active {\n  transform: translateY(4px);\n}\n.button3{\n  position: relative;\n  top: -334px;\n  right: -645px;\n  height: 38px;\n  width: 84px;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0px 0px 15px #f2f0ee;\n}\n.button3:active {\n  transform: translateY(4px);\n}\n\n\n#goBackButton{\n   height: 42px;\n  width: 85px;\n  margin-left: 601px;\n  margin-top: 14px;\n  position: fixed;\n  left: -566px;\n  box-shadow: 5px 2px 7px;\n  cursor: pointer;\n  border: none;\n\n}\n#goBackButton:active {\n  transform: translateY(4px);\n}\n#orderNow{\n  width: 191px;\n  position: relative;\n  top: 3pc;\n  right: 14px;\n  font-size: 20px;\n  border-radius: 6px;\n  box-shadow: 10px 9px 18px;\n  cursor: pointer;\n  border: none;\n\n}\n#orderNow:active {\n  transform: translateY(4px);\n}\n.button9{\n  height: 60px;\n  width: 155px;\n  margin-left: 601px;\n  margin-top: -49px;\n  font-size: 31px;\n  background-color: #ff4800;\n  border-radius: 10px;\n  box-shadow: 10px 9px 18px;\n  cursor: pointer;\n  border: none;\n\n}\n.button9:active {\n  transform: translateY(4px);\n}\n`,""]);const l=d},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=o.base?s[0]+o.base:s[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var l=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var h=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=o(n,r),p=0;p<a.length;p++){var d=e(a[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},126:(n,t,e)=>{n.exports=e.p+"4ce036f2c04edb67cc36.jpg"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),a=e(569),i=e.n(a),c=e(565),s=e.n(c),p=e(216),d=e.n(p),u=e(589),l=e.n(u),f=e(426),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=document.getElementById("content");document.getElementById("content");const x=document.getElementById("content");!function(){const n=document.createElement("h1");n.textContent="Welcome to Our Wonderful Restaurant!";const t=document.createElement("p");t.textContent="Experience the finest dining with a view that'll take your breath away.";const e=document.createElement("h2");e.classList.add("h2"),e.textContent="Pizza-Mania";const o=document.createElement("button");o.classList.add("button9"),o.textContent="Menu",x.appendChild(n),x.appendChild(t),x.appendChild(e),x.appendChild(o)}(),function(){const n=document.createElement("button");n.classList.add("button1"),n.textContent="Home";const t=document.createElement("button");t.classList.add("button3"),t.textContent="Contact us!",m.appendChild(n),m.appendChild(t)}(),function(){const n=document.getElementsByClassName("button9"),t=document.getElementById("content");for(const e of n)e.addEventListener("click",(()=>{t.innerHTML='\n        <h3>Margherita</h3>\n        <img src="../pizza/Margherita.jpg">\n        <p >Classic tomato and mozzarella cheese.</p>\n        <p>price: \'$11.99\' </p>\n        <button id="orderNow">Order Now!</button>\n\n\n        <h3>Pepperoni</h3>\n        <img src="../pizza/Pepperoni.jpg">\n        <p >Pepperoni, cheese, and tomato sauce.</p>\n        <p> price: \'$13.99</p>\n        <button id="orderNow">Order Now!</button>\n\n        <h3>Vegetarian</h3>\n        <img src="../pizza/Vegetarian.jpg">\n        <p >Assorted vegetables and cheese.</p>\n        <p> price: \'$13.99\'</p>\n        <button id="orderNow">Order Now!</button>\n\n        <h3>Hawaiian</h3>\n        <img src="../pizza/Hawaiian.jpg">\n        <p >Ham, pineapple, cheese, and tomato sauce.</p>\n        <p>price: \'$10.99</p>\n        <button id="orderNow">Order Now!</button>\n\n        <h3>Meat Lovers</h3>\n        <img src="../pizza/Meat Lovers.jpg">\n        <p >Pepperoni, sausage, bacon, cheese, and tomato sauce.</p>\n        <p>price: \'$12.99\' </p>\n        <button id="orderNow">Order Now!</button>\n\n\n        <h3>BBQ Chicken</h3>\n        <img src="../pizza/BBQ Chicken.jpg">\n        <p >Grilled chicken, barbecue sauce, cheese, and onions.</p>\n        <p>price: \'$14.99\' </p>\n        <button id="goBackButton">Go Back</button>\n        <button id="orderNow">Order Now!</button>\n    ',document.getElementById("goBackButton").addEventListener("click",(()=>{window.location.href="index.html"}))}))}(),function(){const n=document.getElementsByClassName("button3"),t=document.getElementById("content");for(const e of n)e.addEventListener("click",(()=>{t.innerHTML='\n        <p> Email: PizzaMania123@gmail.com </p>\n        <p> Contact No.:000-999-000-9 </p>\n        <button id="goBackButton">Go Back</button>\n    ',document.getElementById("goBackButton").addEventListener("click",(()=>{window.location.href="index.html"}))}))}()})()})();