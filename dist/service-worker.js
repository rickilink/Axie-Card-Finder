if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),t={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(c(...e),o)))}}define(["./workbox-1e4db2f2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/./index.html",revision:"c170736a441a56fa07da6f3c9ef39136"},{url:"/174.bundle.js",revision:"28410f2ef7f7b2c83dc54008315530ae"},{url:"/190.bundle.js",revision:"af6b67f9358ceaeb6c45518ad1830c4f"},{url:"/331.bundle.js",revision:"c970ffacdf71055ce5933b71c193a0a5"},{url:"/651.bundle.js",revision:"0e7100fce0015fd4e4028fe138f99674"},{url:"/bundle.js",revision:"48444c35eda8e4407a047ae1cf4d6d01"},{url:"/bundle.js.LICENSE.txt",revision:"84c1b6cd35d64d6484f42a9114665b9e"}],{}),e.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
