document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.id="main";const n=document.createElement("div");n.id="logo-space";const t=document.createElement("img");t.alt="Logo of the restaurant",t.id="restaurant-logo",t.src="../src/la-cabeza-logo.png",t.style.height="100px",t.style.width="auto",n.appendChild(t);const a=document.createElement("p");a.id="restaurant-name",a.innerHTML="La Cabeza",n.appendChild(a),e.appendChild(n);const r=document.createElement("div");r.id="header-links";const o=document.createElement("a");o.target="_blank",o.href="#",o.rel="noopener noreferrer",o.id="about",o.innerHTML="About",r.appendChild(o);const d=document.createElement("a");d.target="_blank",d.href="#",d.rel="noopener noreferrer",d.id="menu",d.innerHTML="Menu",r.appendChild(d);const i=document.createElement("a");i.target="_blank",i.href="#",i.rel="noopener noreferrer",i.id="contact",i.innerHTML="Contact Us",r.appendChild(i),e.appendChild(r);const c=document.createElement("img");c.id="main-img",c.alt="Image of the main meal",c.src="../src/crepe.jpg",c.style.height="400px",c.style.width="auto",e.appendChild(c);const l=document.createElement("p");return l.id="description",l.innerHTML="Hello, welcome to the restaurant La Cabeza ! <br><br>\n                        Here, you will find the most popular meal from Paris that will turn your head crazy : <br><br>\n                        The <em>Crèpe Jambon-Oeuf-Fromage</em> ! <br><br>\n                        Don't hesitate to check our menu in the above links and contact us by mail or phone if you want to order something !",e.appendChild(l),e}());