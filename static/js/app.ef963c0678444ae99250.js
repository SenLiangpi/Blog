webpackJsonp([0],{"0xDb":function(t,e,i){"use strict";e.a=function(){var t={};console.log("production"),t.url="https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/";return t},e.b=function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,20)};window.requestAnimationFrame=t;var e=[],i=document.getElementById("Snow"),n=i.getContext("2d"),a=parseInt(i.getAttribute("data-count")),r=-100,o=-100;function s(){n.clearRect(0,0,i.width,i.height);for(var c=0;c<a;c++){var d=e[c],l=r,m=o,u=parseInt(i.getAttribute("data-dist")),g=d.x,f=d.y,h=Math.sqrt((g-l)*(g-l)+(f-m)*(f-m));if(h<u){var _=u/(h*h),v=(l-g)/h,w=(m-f)/h,b=_/2;d.velX-=b*v,d.velY-=b*w}else d.velX*=.98,d.velY<=d.speed&&(d.velY=d.speed),d.velX+=Math.cos(d.step+=.05)*d.stepSize;n.fillStyle="rgba("+i.getAttribute("data-color")+","+d.opacity+")",d.y+=d.velY,d.x+=d.velX,(d.y>=i.height||d.y<=0)&&p(d),(d.x>=i.width||d.x<=0)&&p(d),n.beginPath();n.font="8px serif",n.fillText("❄",d.x,d.y),n.fill()}t(s)}function p(t){t.x=Math.floor(Math.random()*i.width),t.y=0,t.size=3*Math.random()+parseInt(i.getAttribute("data-size")),t.speed=1*Math.random()+parseInt(i.getAttribute("data-speed")),t.velY=t.speed,t.velX=0,t.opacity=.5*Math.random()+parseInt(i.getAttribute("data-opacity"))}i.width=window.innerWidth,i.height=window.innerHeight,document.addEventListener("mousemove",function(t){r=t.clientX,o=t.clientY}),window.addEventListener("resize",function(){i.width=window.innerWidth,i.height=window.innerHeight}),function(){for(var t=0;t<a;t++){var n=Math.floor(Math.random()*i.width),r=Math.floor(Math.random()*i.height),o=3*Math.random()+parseInt(i.getAttribute("data-size")),p=1*Math.random()+parseInt(i.getAttribute("data-speed")),c=.5*Math.random()+parseInt(i.getAttribute("data-opacity"));e.push({speed:p,velY:p,velX:0,x:n,y:r,size:o,stepSize:Math.random()/30*parseInt(i.getAttribute("data-step")),step:0,angle:180,opacity:c})}s()}()}},CdTh:function(t,e,i){"use strict";(function(t){var n=i("0xDb"),a=Object(n.a)().url;e.a={name:"blog",data:function(){return{images:[a+"pipi/file_6212624.webp",a+"pipi/file_6212625.webp",a+"pipi/file_6212626.webp",a+"pipi/file_6212627.webp",a+"pipi/file_6212628.webp",a+"pipi/file_6212629.webp",a+"pipi/file_6212630.webp",a+"pipi/file_6212631.webp",a+"pipi/file_6212632.webp",a+"pipi/file_6212623.webp",a+"pipi/file_6212651.webp",a+"pipi/file_6212659.webp",a+"pipi/file_6212660.webp",a+"pipi/file_6212661.webp",a+"pipi/file_6212662.webp"],imgpipi:"",lists:[{name:"wangEditor —— 轻量级web富文本框 测试demo",text:"wangEditor 是一款使用 Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。\n            兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。\n            不支持移动端",href:"/blog/editor"}]}},created:function(){this.imgpipi=parseInt(15*Math.random())},mounted:function(){this.$nextTick(function(){t(window).scroll(function(){t(window).scrollTop()>=20?t(".site-header").addClass("fixed"):t(".site-header").removeClass("fixed")})})}}}).call(e,i("7t+N"))},DReh:function(t,e){},IIHI:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("0xDb");function r(){var t=document.getElementById("SwanSong"),e=function e(){t.play(),document.removeEventListener("touchstart",e,!1)};t.play(),document.addEventListener("WeixinJSBridgeReady",function(){e()},!1),document.addEventListener("YixinJSBridgeReady",function(){e()},!1),document.addEventListener("touchstart",e,!1)}var o=Object(a.a)().url,s={name:"App",data:function(){return{audioSwanSong_type:!0,style:[{image:o+"background/preview.jpg",opacity:"1",gradient:"linear-gradient(45deg, #002453 0%,#ff2b4a 100%)",backgroundColor:"#000",bgm:o+"bgm/FeellikeCrying.mp3",backgroundPosition:"center center"},{image:o+"background/gallery_m_009.jpg",opacity:"0.75",gradient:"linear-gradient(65deg, #002453 34%,#ff2b4a 100%)",backgroundColor:"#000",bgm:o+"bgm/SwanSong.mp3",backgroundPosition:"center center"},{image:o+"background/Cover.jpg",opacity:"1",gradient:"rgb(0 0 0 / 80%)",backgroundColor:"#000",bgm:o+"bgm/EminenceSymphonyOrchestra.mp3",backgroundPosition:"0 center"},{image:o+"background/yan.jpg",opacity:"1",gradient:"rgb(0 0 0 / 80%)",backgroundColor:"#000",bgm:o+"bgm/EminenceSymphonyOrchestra.mp3",backgroundPosition:"center center"}],styleRandom:parseInt(3*Math.random())}},created:function(){var t=this;document.getElementById("SwanSong").src=this.style[this.styleRandom].bgm,document.getElementById("SwanSong").onended=function(){3===t.styleRandom?t.styleRandom=0:t.styleRandom++,document.getElementById("SwanSong").src=t.style[t.styleRandom].bgm,r()}},mounted:function(){this.$nextTick(function(){Object(a.b)()})},methods:{click_on:function(){var t=document.getElementById("SwanSong");if(this.audioSwanSong_type)try{this.audioSwanSong_type=!1,t.play(),r()}catch(t){r()}}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{backgroundColor:t.style[t.styleRandom].backgroundColor},attrs:{id:"app"},on:{click:t.click_on}},[i("div",{staticClass:"home-banner fullscreen"},[i("div",{staticClass:"background",style:{backgroundImage:"url("+t.style[t.styleRandom].image+")",opacity:t.style[t.styleRandom].opacity,backgroundPosition:t.style[t.styleRandom].backgroundPosition}}),t._v(" "),i("canvas",{attrs:{id:"Snow","data-count":"100","data-dist":"200","data-color":"255,255,255","data-size":"2","data-speed":"0.5","data-opacity":"0.8","data-step":"0",width:"1273",height:"913"}}),t._v(" "),i("div",{staticClass:"gradient",style:{background:t.style[t.styleRandom].gradient}}),t._v(" "),i("div",{staticClass:"banner-content dtable fullscreen"},[i("div",{staticClass:"content-inner dtablecell"},[i("router-view")],1)])])])},staticRenderFns:[]};var c=i("VU/8")(s,p,!1,function(t){i("huFp")},null,null).exports,d=i("/ocq"),l=Object(a.a)().url,m={name:"home",data:function(){return{images:[l+"pipi/file_6212624.webp",l+"pipi/file_6212625.webp",l+"pipi/file_6212626.webp",l+"pipi/file_6212627.webp",l+"pipi/file_6212628.webp",l+"pipi/file_6212629.webp",l+"pipi/file_6212630.webp",l+"pipi/file_6212631.webp",l+"pipi/file_6212632.webp",l+"pipi/file_6212623.webp",l+"pipi/file_6212651.webp",l+"pipi/file_6212659.webp",l+"pipi/file_6212660.webp",l+"pipi/file_6212661.webp",l+"pipi/file_6212662.webp"],imgpipi:l+"pipi/file_6212623.webp",imgpipi1:l+"pipi/file_6212624.webp",imgpipi_opacity:"1",imgpipi_opacity1:"0",img_if_1:!0,img_if_2:!1}},methods:{random:function(t){var e=parseInt(15*Math.random());return t==e?(9==e?e-=1:0==e&&(e+=1),e+=1):e}},created:function(){this.imgpipi=parseInt(15*Math.random()),this.imgpipi1=this.random(this.imgpipi)},mounted:function(){var t=this,e=!0;setInterval(function(){e?(e=!1,t.img_if_1=!1,setTimeout(function(){t.img_if_2=!0,t.imgpipi=t.random(t.imgpipi1)},510)):(e=!0,t.img_if_2=!1,setTimeout(function(){t.img_if_1=!0,t.imgpipi1=t.random(t.imgpipi)},510))},3e4)}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"container"},[i("transition",{attrs:{name:"fade"}},[t.img_if_1?i("img",{staticClass:"imgpipi",attrs:{src:t.images[t.imgpipi],alt:""}}):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.img_if_2?i("img",{staticClass:"imgpipi",attrs:{src:t.images[t.imgpipi1],alt:""}}):t._e()]),t._v(" "),i("p",{staticClass:"name"},[t._v("皮皮")]),t._v(" "),i("p",[t._v('皮皮研究所製作(￣▽￣)"')]),t._v(" "),t._m(0),t._v(" "),i("p"),t._v(" "),i("div",{staticClass:"lists"},[i("p",[i("router-link",{attrs:{to:""}},[t._v("Blog")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n            Email:\n            "),e("a",{attrs:{href:"mailto:pisenliang@gmail.com"}},[this._v("pisenliang@gmail.com")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://github.com/SenLiangpi"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://www.npmjs.com/~pipiandpikachu"}},[this._v("NPM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://t.me/webjavascript"}},[this._v("Telegram")])])}]};var g=i("VU/8")(m,u,!1,function(t){i("R8im")},"data-v-93abcbbe",null).exports,f=i("CdTh"),h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog"},[i("div",{staticStyle:{height:"120px"}}),t._v(" "),i("header",{staticClass:"site-header navbar-fixed-top navbar-default",staticStyle:{overflow:"hidden",position:"fixed",width:"100%",top:"0"}},[i("div",{staticClass:"container"},[i("img",{staticStyle:{height:"60px",float:"left"},attrs:{src:t.images[t.imgpipi],alt:""}}),t._v(" "),i("div",{staticClass:"lists"},[i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),i("p",[i("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),i("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://github.com/SenLiangpi"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://www.npmjs.com/~pipiandpikachu"}},[this._v("NPM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{target:"view_window",href:"https://t.me/webjavascript"}},[this._v("Telegram")])])}]};var _=function(t){i("IIHI")},v=i("VU/8")(f.a,h,!1,_,"data-v-2e0512c5",null).exports,w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("div",{staticClass:"test-lists container"},t._l(t.lists,function(e,n){return i("div",{key:n,staticClass:"dom-list"},[i("router-link",{attrs:{to:e.href}},[i("h1",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)}),0)])},staticRenderFns:[]};var b=i("VU/8")({name:"list",data:function(){return{lists:[{name:"wangEditor —— 轻量级web富文本框 测试demo",text:"wangEditor 是一款使用 Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。\n            兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。\n            不支持移动端",href:"/blog/editor"}]}},created:function(){},mounted:function(){}},w,!1,function(t){i("DReh")},"data-v-7f966478",null).exports,y=i("alfv"),x=i.n(y),C={name:"editor",data:function(){return{}},created:function(){},mounted:function(){this.$nextTick(function(){new x.a("#toolbar-container","#text-container").create()})}},E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor"},[e("div",{},[e("div",{staticClass:"toolbar",staticStyle:{width:"1000px",margin:"0 auto"},attrs:{id:"toolbar-container"}})]),this._v(" "),e("div",{staticClass:"text",staticStyle:{height:"500px",width:"1000px",margin:"0 auto"},attrs:{id:"text-container"}},[e("p",[this._v("wangEditor 编辑器测试使用")])])])}]};var k=i("VU/8")(C,E,!1,function(t){i("cKzY")},null,null).exports;n.a.use(d.a);var S=new d.a({routes:[{path:"/",name:"HelloWorld",component:g},{path:"/blog",name:"blog",component:v,redirect:"/blog/list",children:[{path:"list",component:b,name:"列表"},{path:"editor",component:k,name:"editor"}]}]});i("qb6w"),i("7t+N"),i("Rive");n.a.config.productionTip=!1,new n.a({el:"#app",router:S,components:{App:c},template:"<App/>"})},R8im:function(t,e){},cKzY:function(t,e){},huFp:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ef963c0678444ae99250.js.map