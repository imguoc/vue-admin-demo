webpackJsonp([5],{"+708":function(e,t,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,a,l,s,o,c,r,d,u,p,m,f){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:o,distance:r,color:l,opacity:c,width:s},move:{enable:!0,speed:d,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:u,mode:p},onclick:{enable:m,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},l=n("VU/8")(i,a,!1,null,null,null);t.a=l.exports},"4ju7":function(e,t){},"6lGe":function(e,t){},"8l5S":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-box"},[e._m(0),e._v(" "),n("el-menu",{staticClass:"flex-item",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[e._l(e.list,function(t){return[t.child&&t.child.length?n("el-submenu",{key:t.index,attrs:{index:t.index,"popper-class":"header-menu-popup"}},[n("template",{slot:"title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.child,function(t){return n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.handleClick(t)}}},[e._v(e._s(t.name))])])})],2):n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.handleClick(t)}}},[e._v(e._s(t.name))])])]})],2),e._v(" "),n("div",{staticClass:"setting flex-box flex-center"},[n("el-dropdown",{attrs:{size:"medium"}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-setting"}),e._v(" 设置\n            ")]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("设置1")]),e._v(" "),n("el-dropdown-item",[e._v("设置2")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo flex-box flex-center"},[t("span",[this._v("Hello World")])])}]};var l=n("VU/8")({name:"Header",data:function(){return{activeIndex:"0",list:[{name:"item1",path:"/item1",index:"1",child:[]},{name:"item2",index:"2",child:[{name:"item2-1",path:"/item2-1",index:"2-1",child:[]},{name:"item2-2",path:"/item2-2",index:"2-2",child:[]}]},{name:"item3",index:"3",child:[{name:"item3-1",path:"/item3-1",index:"3-1",child:[]},{name:"item3-2",path:"/item3-2",index:"3-2",child:[]},{name:"item3-3",path:"/item3-3",index:"3-3",child:[]}]},{name:"item4",index:"4",child:[{name:"item4-1",path:"/item4-1",index:"4-1",child:[]},{name:"item4-2",path:"/item4-2",index:"4-2",child:[]},{name:"item4-3",path:"/item4-3",index:"4-3",child:[]},{name:"item4-4",path:"/item4-4",index:"4-4",child:[]},{name:"item4-5",path:"/item4-5",index:"4-5",child:[]}]},{name:"item5",index:"5",child:[{name:"item5-1",path:"/item5-1",index:"5-1",child:[]},{name:"item5-2",path:"/item5-2",index:"5-2",child:[]},{name:"item5-3",path:"/item5-3",index:"5-3",child:[]},{name:"item5-4",path:"/item5-4",index:"5-4",child:[]},{name:"item5-5",path:"/item5-5",index:"5-5",child:[]}]}]}},methods:{handleSelect:function(){},handleClick:function(e){this.$addRouter.add({path:e.path,key:e.index,compName:"custom",props:e})}}},a,!1,function(e){n("8l5S")},null,null).exports,s=n("Dd8w"),o=n.n(s),c=n("NYxO"),r={name:"SideMenu",data:function(){return{list:[{path:"/",name:"Home",icon:"el-icon-s-home"},{path:"/test",name:"Test",icon:"el-icon-s-platform"}]}},computed:o()({},Object(c.c)("layout",["isOpenSide"])),watch:{},methods:o()({},Object(c.b)("layout",["sync_isOpenSide"]),{handleToggle:function(){localStorage.setItem("isOpenSide",!this.isOpenSide),this.sync_isOpenSide(!this.isOpenSide)},handleExit:function(){var e=this;this.$confirm("退出登陆？","提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.$message({type:"success",message:"已退出登陆！"}),localStorage.clear("TOKEN"),e.$router.push("/login")}).catch(function(){})}})},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex-box flex-column",style:{width:(e.isOpenSide?200:50)+"px"}},[i("div",{staticClass:"favicon flex-box flex-column flex-center"},[i("div",{staticClass:"img",style:{width:(e.isOpenSide?60:34)+"px",height:(e.isOpenSide?60:34)+"px"}},[i("img",{attrs:{src:n("ZURh"),alt:""}})]),e._v(" "),e.isOpenSide?i("div",{staticClass:"name animated fadeIn"},[e._v("\n            ADMIN\n        ")]):e._e()]),e._v(" "),i("ul",{staticClass:"flex-item"},e._l(e.list,function(t,n){return i("li",{key:n},[i("el-tooltip",{attrs:{content:t.name,placement:"right",disabled:e.isOpenSide}},[i("router-link",{staticClass:"flex-box flex-item flex-center",attrs:{to:t.path}},[i("i",{staticClass:"icon animated",class:t.icon,style:{"font-size":(e.isOpenSide?18:24)+"px"}}),e._v(" "),e.isOpenSide?[i("span",{staticClass:"flex-item animated fadeIn"},[e._v(e._s(t.name))]),e._v(" "),i("i",{staticClass:"el-icon-arrow-right arrow animated fadeInLeft"})]:e._e()],2)],1)],1)}),0),e._v(" "),i("div",{staticClass:"bottom-btn"},[i("el-tooltip",{attrs:{content:"展开",placement:"right",disabled:e.isOpenSide}},[i("a",{staticClass:"toggle flex-box flex-item flex-center",on:{click:e.handleToggle}},[i("i",{class:e.isOpenSide?"el-icon-open":"el-icon-turn-off",style:{"font-size":(e.isOpenSide?18:20)+"px"}}),e._v(" "),e.isOpenSide?i("span",{staticClass:"animated fadeIn"},[e._v("收起")]):e._e()])]),e._v(" "),i("el-tooltip",{attrs:{content:"退出",placement:"right",disabled:e.isOpenSide}},[i("a",{staticClass:"exit flex-box flex-item flex-center",on:{click:e.handleExit}},[i("i",{staticClass:"el-icon-switch-button",style:{"font-size":(e.isOpenSide?18:20)+"px"}}),e._v(" "),e.isOpenSide?i("span",{staticClass:"animated fadeIn"},[e._v("退出")]):e._e()])])],1)])},staticRenderFns:[]};var u={name:"App",components:{Header:l,SideMenu:n("VU/8")(r,d,!1,function(e){n("gCFW")},null,null).exports},data:function(){return{token:!0}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"layout-content flex-box"},["/login"!==this.$route.fullPath?[t("SideMenu",{staticClass:"layout-side-menu"}),this._v(" "),t("div",{staticClass:"layout-main flex-box flex-column flex-item"},[t("Header",{staticClass:"layout-header"}),this._v(" "),t("div",{staticClass:"layout-view flex-box flex-item flex-row",staticStyle:{position:"relative"}},[t("transition",{attrs:{"enter-active-class":"fadeInRight faster","leave-active-class":"fadeOutLeft faster"}},[t("keep-alive",[t("router-view",{staticClass:"animated layout-view-main"})],1)],1)],1)],1)]:[t("router-view",{staticClass:"animated fadeIn layout-view flex-item"})]],2)])},staticRenderFns:[]};var m=n("VU/8")(u,p,!1,function(e){n("4ju7")},null,null).exports,f={state:{isOpenSide:JSON.parse(localStorage.getItem("isOpenSide"))&&!0},mutations:{sync_isOpenSide:function(e,t){e.isOpenSide=t}},namespaced:!0};i.default.use(c.a);var h={layout:f},v=new c.a.Store({state:{},getters:{},mutations:{},actions:{},modules:h,strict:!1}),x=n("Gu7T"),y=n.n(x),_=n("/ocq"),b=[{path:"/",name:"Home",component:function(){return n.e(2).then(n.bind(null,"KR8f"))}}],g=[{path:"/test",name:"Test",component:function(){return n.e(3).then(n.bind(null,"7Zj+"))}}],S=[{path:"/login",name:"Login",component:function(){return n.e(0).then(n.bind(null,"T+/8"))}}],O=[{path:"/404",name:"Error404",component:function(){return n.e(1).then(n.bind(null,"VdfP"))}},{path:"*",redirect:"/404"}];i.default.use(_.a);var k=new _.a({routes:[].concat(y()(b),y()(g),y()(S),y()(O))}),C=["/login","/404"];k.beforeEach(function(e,t,n){var i=localStorage.getItem("TOKEN");C.includes(e.path)?n():i?n():n({path:"/login"})});var w=k,N=(n("oPmM"),n("uMhA"),n("tvR6"),n("ksBL"),n("zL8q")),E=n.n(N),M=n("mM94"),R={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    DemoComp\n")])},staticRenderFns:[]};var T=[n("VU/8")({name:"DemoComp",data:function(){return{}}},R,!1,function(e){n("6lGe")},"data-v-bd180ece",null).exports],I=function(e){T.forEach(function(t){e.component(t.name,t)})},$=n("M4fF"),z=n.n($),D=n("woOf"),H=n.n(D),L=n("mvHQ"),F=n.n(L),j={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    hello "+this._s(this.$attrs.name)+"\n")])},staticRenderFns:[]};var U={custom:n("VU/8")({name:"custom"},j,!1,function(e){n("XYnO")},"data-v-a57a4c06",null).exports},W={storage:{get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){return localStorage.setItem(e,F()(t))}},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.storage.get("addRouter")||[];e?t.find(function(t){return t.path===e.path})||t.push(e):(t.map(function(e){var t=z.a.cloneDeep(U[e.compName]);t.name=e.component.name,e.component=t}),this.router.addRoutes(t)),this.storage.set("addRouter",t)},add:function(e){var t=H()({},{path:"",key:"",compName:"",query:null,props:void 0},e),n=z.a.cloneDeep(U[t.compName]);n.name=t.key?t.compName+"-"+t.key:t.compName;var i=o()({},t,{component:n});this.router.addRoutes([i]),this.router.push({path:i.path,query:i.query}),this.init(i)},install:function(e,t){this.router=t.router,this.init()}},A=W;i.default.config.productionTip=!1,i.default.use(function(e,t){e.use(E.a),e.use(I),e.use(M.a),e.use(A,t),e._=e.prototype._=z.a,e.addRouter=e.prototype.$addRouter=A},{router:w}),window.vm=new i.default({el:"#app",store:v,router:w,components:{App:m},template:"<App/>"})},XYnO:function(e,t){},ZURh:function(e,t,n){e.exports=n.p+"static/img/favicon.f5808bb.png"},gCFW:function(e,t){},ksBL:function(e,t){},oPmM:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fa366322ea429dc8021b.js.map