(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"body {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#logo-space {\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    align-items: center;\r\n    column-gap: 10px;\r\n}\r\n\r\n#restaurant-logo {\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n\r\n#restaurant-name {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#header-links {\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n#main-img {\r\n    grid-column: 1/3;\r\n    justify-self: center;\r\n    width: 500px;\r\n    height: auto;\r\n    padding: 25px 0px 25px 0px;\r\n}\r\n\r\n#description {\r\n    grid-column: 1/3;\r\n    text-align: center;\r\n    justify-self: center;\r\n    width: 500px;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n#about-title {\r\n    grid-column: 2/3;\r\n    align-self: center;\r\n}\r\n\r\n#cooker-img {\r\n    height: 400px;\r\n    width: auto;\r\n    grid-row: 2/4;\r\n    grid-column: 1/2;\r\n    justify-self: center;\r\n    align-self: center;\r\n    padding: 25px 0px 25px 0px;\r\n}\r\n\r\n#about-para {\r\n    grid-column: 2/3;\r\n    align-self: center;\r\n}\r\n\r\n#logo-space, #header-links a{\r\n    cursor: pointer;\r\n}\r\n\r\n#contact-title {\r\n    grid-column: 1/3;\r\n    grid-row: 2/3;\r\n}\r\n\r\n#contact-para {\r\n    grid-column: 1/3;\r\n    grid-row: 3/4;\r\n}\r\n\r\n#about-title, #about-para, #menu-title, #contact-title, #contact-para {\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n#contact-form {\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n    padding : 25px;\r\n    grid-column: 1/3;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    align-items: center;\r\n    width: 600px;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    row-gap: 25px;\r\n}\r\n\r\n#submit-message {\r\n    grid-column: 2/3;\r\n}\r\n\r\n#menu-title {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#crep-table {\r\n    border: 1px solid black;\r\n    grid-column: 1/3;\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n    height: 50vh;\r\n    width: 50vw;\r\n}\r\n\r\n#default-row {\r\n    font-weight: bold;\r\n}\r\n\r\n#crep-table tr td {\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=t.base?d[0]+t.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var m=r(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var d=t(e,o),l=0;l<a.length;l++){var s=r(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},54:(e,n,r)=>{function t(){const e=document.createElement("div");e.id="main";const n=document.createElement("div");n.id="logo-space";const r=document.createElement("img");r.alt="Logo of the restaurant",r.id="restaurant-logo",r.src="../src/la-cabeza-logo.png",n.appendChild(r);const t=document.createElement("h1");t.id="restaurant-name",t.innerHTML="LA CABEZA",n.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.id="header-links";const a=document.createElement("a");a.rel="noopener noreferrer",a.id="home",a.innerHTML="HOME",o.appendChild(a);const i=document.createElement("a");i.rel="noopener noreferrer",i.id="about",i.innerHTML="ABOUT",o.appendChild(i);const c=document.createElement("a");c.rel="noopener noreferrer",c.id="menu",c.innerHTML="MENU",o.appendChild(c);const d=document.createElement("a");d.rel="noopener noreferrer",d.id="contact",d.innerHTML="CONTACT US",o.appendChild(d),e.appendChild(o);const l=document.createElement("h1");l.id="about-title",l.innerHTML="About Us",e.appendChild(l);const s=document.createElement("img");s.id="cooker-img",s.alt="Image of a cook member cooking creps",s.src="../src/cooker.jpg",e.appendChild(s);const p=document.createElement("p");return p.id="about-para",p.innerHTML="We are <b>La Cabeza Family</b>, since 2004.<br><br>\n                We want to expand the French cooking culture abroad,\n                and one of our favourite meal is the classic <em>Crêpe Jambon-Oeuf-Fromage</em>.<br>\n                We have been eating it once per week since our childhood, \n                we are absolute lovers of this typical parisian food that can be consumed \n                in any situation, alone or in company, at home or outside.<br><br>\n                <h2>Just try it and let us know how you liked it !</h2>",e.appendChild(p),e}r.d(n,{Z:()=>t})},637:(e,n,r)=>{function t(){const e=document.createElement("div");e.id="main";const n=document.createElement("div");n.id="logo-space";const r=document.createElement("img");r.alt="Logo of the restaurant",r.id="restaurant-logo",r.src="../src/la-cabeza-logo.png",n.appendChild(r);const t=document.createElement("h1");t.id="restaurant-name",t.innerHTML="LA CABEZA",n.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.id="header-links";const a=document.createElement("a");a.rel="noopener noreferrer",a.id="home",a.innerHTML="HOME",o.appendChild(a);const i=document.createElement("a");i.rel="noopener noreferrer",i.id="about",i.innerHTML="ABOUT",o.appendChild(i);const c=document.createElement("a");c.rel="noopener noreferrer",c.id="menu",c.innerHTML="MENU",o.appendChild(c);const d=document.createElement("a");d.rel="noopener noreferrer",d.id="contact",d.innerHTML="CONTACT US",o.appendChild(d),e.appendChild(o);const l=document.createElement("h1");l.id="contact-title",l.innerHTML="How To Contact Us",e.appendChild(l);const s=document.createElement("p");s.id="contact-para",s.innerHTML="Please fill in this form to send us your request",e.appendChild(s);const p=document.createElement("form");p.id="contact-form",e.appendChild(p);const m=document.createElement("label");m.htmlFor="object",m.innerHTML="Object",p.appendChild(m);const u=document.createElement("input");u.type="text",u.id="object",u.placeholder="Type the object of your message...",p.appendChild(u);const h=document.createElement("label");h.htmlFor="message",h.innerHTML="Your Message",p.appendChild(h);const f=document.createElement("textarea");f.id="message",f.placeholder="Type your message...",p.appendChild(f);const g=document.createElement("button");return g.type="submit",g.id="submit-message",g.innerHTML="Submit Message",p.appendChild(g),e}r.d(n,{Z:()=>t})},666:(e,n,r)=>{function t(){const e=document.createElement("div");e.id="main";const n=document.createElement("div");n.id="logo-space";const r=document.createElement("img");r.alt="Logo of the restaurant",r.id="restaurant-logo",r.src="../src/la-cabeza-logo.png",n.appendChild(r);const t=document.createElement("h1");t.id="restaurant-name",t.innerHTML="LA CABEZA",n.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.id="header-links";const a=document.createElement("a");a.rel="noopener noreferrer",a.id="home",a.innerHTML="HOME",o.appendChild(a);const i=document.createElement("a");i.rel="noopener noreferrer",i.id="about",i.innerHTML="ABOUT",o.appendChild(i);const c=document.createElement("a");c.rel="noopener noreferrer",c.id="menu",c.innerHTML="MENU",o.appendChild(c);const d=document.createElement("a");d.rel="noopener noreferrer",d.id="contact",d.innerHTML="CONTACT US",o.appendChild(d),e.appendChild(o);const l=document.createElement("img");l.id="main-img",l.alt="Image of the main meal",l.src="../src/crepe.jpg",e.appendChild(l);const s=document.createElement("h2");return s.id="description",s.innerHTML="Hello, welcome to the restaurant La Cabeza ! <br><br>\n                          Here, you will find the most popular meal from Paris that will turn your head crazy : <br><br>\n                          The <em>Crèpe Jambon-Oeuf-Fromage</em> ! <br><br>\n                          Don't hesitate to check our menu in the above links and contact us by mail or phone if you want to order something !",e.appendChild(s),e}r.d(n,{Z:()=>t})},83:(e,n,r)=>{function t(){const e=document.createElement("div");e.id="main";const n=document.createElement("div");n.id="logo-space";const r=document.createElement("img");r.alt="Logo of the restaurant",r.id="restaurant-logo",r.src="../src/la-cabeza-logo.png",n.appendChild(r);const t=document.createElement("h1");t.id="restaurant-name",t.innerHTML="LA CABEZA",n.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.id="header-links";const a=document.createElement("a");a.rel="noopener noreferrer",a.id="home",a.innerHTML="HOME",o.appendChild(a);const i=document.createElement("a");i.rel="noopener noreferrer",i.id="about",i.innerHTML="ABOUT",o.appendChild(i);const c=document.createElement("a");c.rel="noopener noreferrer",c.id="menu",c.innerHTML="MENU",o.appendChild(c);const d=document.createElement("a");d.rel="noopener noreferrer",d.id="contact",d.innerHTML="CONTACT US",o.appendChild(d),e.appendChild(o);const l=document.createElement("h1");l.id="menu-title",l.innerHTML="Our Menu",e.appendChild(l);const s=document.createElement("table");s.id="crep-table",e.appendChild(s);const p=document.createElement("tr");p.id="default-row";const m=document.createElement("td");m.innerHTML="Name";const u=document.createElement("td");u.innerHTML="Price (in €)",p.appendChild(m),p.appendChild(u),s.appendChild(p);for(let e=0;e<5;e++){const n=document.createElement("tr"),r=document.createElement("td");r.innerHTML="Crepe "+(e+1),n.appendChild(r);const t=document.createElement("td");t.innerHTML="10.00 €",n.appendChild(t),s.appendChild(n)}return e}r.d(n,{Z:()=>t})}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),d=r.n(c),l=r(216),s=r.n(l),p=r(589),m=r.n(p),u=r(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=r(666),g=r(54),C=r(83),b=r(637);const E=[(0,f.Z)(),(0,g.Z)(),(0,C.Z)(),(0,b.Z)()];let v=0;function y(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);return E[v]}document.getElementById("content").appendChild(y()),document.addEventListener("click",(function(e){switch(e.target.id){case"restaurant-logo":case"restaurant-name":case"home":v=0;break;case"about":v=1;break;case"menu":v=2;break;case"contact":v=3}document.getElementById("content").appendChild(y())}))})()})();