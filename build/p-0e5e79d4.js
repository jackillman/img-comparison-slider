let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=u(e,n),r=a(t,s),i=f(n);o.ael(c,l,r,i),(t.o=t.o||[]).push((()=>o.rel(c,l,r,i)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){_(e)}},u=(e,t)=>8&t?l:e,f=e=>0!=(2&e),$=new WeakMap,d=e=>"sc-"+e.$,y={},m=e=>"object"==(e=typeof e)||"function"===e,p=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!m(l))&&(l+=""),s&&o?c[c.length-1].m+=l:c.push(s?h(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=h(e,null);return i.p=t,c.length>0&&(i.h=c),i},h=(e,t)=>({t:0,g:e,m:t,S:null,h:null,p:null}),w={},b=(e,t,n,l,s,o)=>{if(n!==l){let c=V(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=S(n),o=S(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("ref"===t)l&&l(e);else{const r=m(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},g=/\s/,S=e=>e?e.split(g):[],j=(e,t,n,l)=>{const s=11===t.S.nodeType&&t.S.host?t.S.host:t.S,o=e&&e.p||y,c=t.p||y;for(l in c)b(s,l,o[l],c[l],n,t.t)},k=(t,n,l)=>{let o,c,r=n.h[l],i=0;if(o=r.S=s.createElement(r.g),j(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.h)for(i=0;i<r.h.length;++i)c=k(t,r,i),c&&o.appendChild(c);return o},M=(n,l)=>{const s=n.j,o=n.k||h(null,null),c=(e=>e&&e.g===w)(l)?l:p(null,null,l);t=s.tagName,c.g=null,c.t|=4,n.k=c,c.S=o.S=s.shadowRoot||s,e=s["s-sc"],((e,n)=>{const l=n.S=e.S,s=n.h;"slot"===n.g||j(e,n,!1),null!==s&&((e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=k(null,l,o),r&&(s[o].S=r,i.insertBefore(r,null)))})(l,0,n,s,0,s.length-1)})(o,c)},v=e=>F(e).j,C=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},O=(e,t)=>{if(!(4&e.t))return C(e,e.v),Z((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>T(n,e,t))),e.u=null),l=T(n,"componentWillLoad")),W(l,(()=>x(e,n,t)))},x=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.C,n=e.j,l=t.t,o=((e,t)=>{let n=d(t),l=G.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=$.get(e=e.head||e);o||$.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);M(e,E(e,t)),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>L(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(e,t)=>{try{t=t.render(),e.t|=2}catch(t){_(t,e.j)}return t},L=e=>{const t=e.j,n=e.v;T(e.i,"componentDidRender"),64&e.t||(e.t|=64,A(t),e.O(t),n||R()),e.M&&(e.M(),e.M=void 0),512&e.t&&Y((()=>O(e,!1))),e.t&=-517},R=()=>{A(s.documentElement),Y((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"component"}});return e.dispatchEvent(t),t})(l)))},T=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){_(e)}},W=(e,t)=>e&&e.then?e.then(t):t(),A=e=>e.classList.add("hydrated"),U=(e,t)=>(t.P&&Object.entries(t.P).map((([e,[t]])=>{})),e),q=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),y=[];let m,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],$:t[1],P:t[2],L:t[3]};l.P=t[2],l.L=t[3];const s=l.$,u=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=F(e),n=t.C,l=()=>{};if(1&t.t)i(e,t,n.L);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.v=n);break}}(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=B(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,n),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=d(n);if(!G.has(t)){const l=()=>{};((e,t,n)=>{let l=G.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,G.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.v,c=()=>O(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=F(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),T(t,"disconnectedCallback")}})()))}componentOnReady(){return F(this).R}};l.T=e[0],c.includes(s)||a.get(s)||(n.push(s),a.define(s,U(u,l)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>m=setTimeout(R,30)))},D=new WeakMap,F=e=>D.get(e),H=(e,t)=>D.set(t.i=e,t),N=(e,t)=>{const n={t:0,j:e,C:t,W:new Map};return n.R=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.L),D.set(e,n)},V=(e,t)=>t in e,_=(e,t)=>(0,console.error)(e,t),z=new Map,B=e=>{const t=e.$.replace(/-/g,"_"),n=e.T,l=z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(z.set(n,e),e[t])),_)},G=new Map,I=[],J=[],K=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?Y(X):o.raf(X))},Q=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},X=()=>{Q(I),Q(J),(n=I.length>0)&&o.raf(X)},Y=e=>c().then(e),Z=K(J,!0);export{q as b,v as g,p as h,c as p,H as r}