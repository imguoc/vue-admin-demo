webpackJsonp([5],{"+708":function(t,e,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;n("JAHf"),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,n,i,s,a,o,r,c,l,u,h,d,m,f){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:s,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:l,color:a,opacity:c,width:o},move:{enable:!0,speed:u,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:h,mode:d},onclick:{enable:m,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},s={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},staticRenderFns:[]},a=n("VU/8")(i,s,!1,null,null,null);e.a=a.exports},"8deH":function(t,e){},CjIf:function(t,e){},DS9z:function(t,e){},JiFp:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("Dd8w"),a=n.n(s),o=n("NYxO"),r={name:"Header",data:function(){return{activeIndex:"0",list:[{name:"item1",path:"/item1",index:"1",child:[]},{name:"item2",index:"2",child:[{name:"item2-1",path:"/item2-1",index:"2-1",child:[]},{name:"item2-2",path:"/item2-2",index:"2-2",child:[]}]},{name:"item3",index:"3",child:[{name:"item3-1",path:"/item3-1",index:"3-1",child:[]},{name:"item3-2",path:"/item3-2",index:"3-2",child:[]},{name:"item3-3",path:"/item3-3",index:"3-3",child:[]}]},{name:"item4",index:"4",child:[{name:"item4-1",path:"/item4-1",index:"4-1",child:[]},{name:"item4-2",path:"/item4-2",index:"4-2",child:[]},{name:"item4-3",path:"/item4-3",index:"4-3",child:[]},{name:"item4-4",path:"/item4-4",index:"4-4",child:[]},{name:"item4-5",path:"/item4-5",index:"4-5",child:[]}]},{name:"item5",index:"5",child:[{name:"item5-1",path:"/item5-1",index:"5-1",child:[]},{name:"item5-2",path:"/item5-2",index:"5-2",child:[]},{name:"item5-3",path:"/item5-3",index:"5-3",child:[]},{name:"item5-4",path:"/item5-4",index:"5-4",child:[]},{name:"item5-5",path:"/item5-5",index:"5-5",child:[]}]}]}},computed:a()({},Object(o.c)("tab",["tabList"])),methods:a()({},Object(o.b)("tab",["sync_currentTab","sync_tabList"]),{handleClick:function(t){this.$addRouter.add({path:t.path,key:t.index,compName:"custom",props:t});var e=this.$storage.get("tabList")||[];e.find(function(e){return e.name===t.name})||(e.push({title:t.name,name:t.name,path:t.path}),this.sync_tabList(e),this.$storage.set("tabList",this.tabList)),this.sync_currentTab(t.name),this.$storage.set("currentTab",t.name)}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-box"},[t._m(0),t._v(" "),n("el-menu",{staticClass:"flex-item",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[t._l(t.list,function(e){return[e.child&&e.child.length?n("el-submenu",{key:e.index,attrs:{index:e.index,"popper-class":"header-menu-popup"}},[n("template",{slot:"title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.child,function(e){return n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.handleClick(e)}}},[t._v(t._s(e.name))])])})],2):n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("a",{attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.handleClick(e)}}},[t._v(t._s(e.name))])])]})],2),t._v(" "),n("div",{staticClass:"setting flex-box flex-center"},[n("el-dropdown",{attrs:{size:"medium"}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-setting"}),t._v(" 设置\r\n            ")]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("设置1")]),t._v(" "),n("el-dropdown-item",[t._v("设置2")])],1)],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo flex-box flex-center"},[e("span",[this._v("Hello World")])])}]};var l=n("VU/8")(r,c,!1,function(t){n("8deH")},null,null).exports,u={name:"SideMenu",data:function(){return{list:[{path:"/",name:"Home",icon:"el-icon-s-home"},{path:"/test",name:"Test",icon:"el-icon-s-platform"}]}},computed:a()({},Object(o.c)("layout",["isOpenSide"])),watch:{},methods:a()({},Object(o.b)("layout",["sync_isOpenSide"]),Object(o.b)("tab",["sync_currentTab"]),{handleClick:function(t){this.sync_currentTab(t.name),this.$storage.set("currentTab",t.name)},handleToggle:function(){localStorage.setItem("isOpenSide",!this.isOpenSide),this.sync_isOpenSide(!this.isOpenSide)},handleExit:function(){var t=this;this.$confirm("退出登陆？","提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.$message({type:"success",message:"已退出登陆！"}),t.$storage.clear(),t.$router.push("/login")}).catch(function(){})}})},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-box flex-column",style:{width:(t.isOpenSide?200:50)+"px"}},[i("div",{staticClass:"favicon flex-box flex-column flex-center"},[i("div",{staticClass:"img",style:{width:(t.isOpenSide?60:34)+"px",height:(t.isOpenSide?60:34)+"px"}},[i("img",{attrs:{src:n("ZURh"),alt:""}})]),t._v(" "),t.isOpenSide?i("div",{staticClass:"name animated fadeIn"},[t._v("\n            ADMIN\n        ")]):t._e()]),t._v(" "),i("ul",{staticClass:"flex-item"},t._l(t.list,function(e,n){return i("li",{key:n},[i("el-tooltip",{attrs:{content:e.name,placement:"right",disabled:t.isOpenSide}},[i("router-link",{staticClass:"flex-box flex-item flex-center",attrs:{to:e.path},nativeOn:{click:function(n){return t.handleClick(e)}}},[i("i",{staticClass:"icon animated",class:e.icon,style:{"font-size":(t.isOpenSide?18:24)+"px"}}),t._v(" "),t.isOpenSide?[i("span",{staticClass:"flex-item animated fadeIn"},[t._v(t._s(e.name))]),t._v(" "),i("i",{staticClass:"el-icon-arrow-right arrow animated fadeInLeft"})]:t._e()],2)],1)],1)}),0),t._v(" "),i("div",{staticClass:"bottom-btn"},[i("el-tooltip",{attrs:{content:"展开",placement:"right",disabled:t.isOpenSide}},[i("a",{staticClass:"toggle flex-box flex-item flex-center",on:{click:t.handleToggle}},[i("i",{class:t.isOpenSide?"el-icon-open":"el-icon-turn-off",style:{"font-size":(t.isOpenSide?18:20)+"px"}}),t._v(" "),t.isOpenSide?i("span",{staticClass:"animated fadeIn"},[t._v("收起")]):t._e()])]),t._v(" "),i("el-tooltip",{attrs:{content:"退出",placement:"right",disabled:t.isOpenSide}},[i("a",{staticClass:"exit flex-box flex-item flex-center",on:{click:t.handleExit}},[i("i",{staticClass:"el-icon-switch-button",style:{"font-size":(t.isOpenSide?18:20)+"px"}}),t._v(" "),t.isOpenSide?i("span",{staticClass:"animated fadeIn"},[t._v("退出")]):t._e()])])],1)])},staticRenderFns:[]};var d=n("VU/8")(u,h,!1,function(t){n("DS9z")},null,null).exports,m={name:"Tab",data:function(){return{isShowContextmenu:!1,contextmenuLeft:0,contextmenuRight:0,currentItem:null}},computed:a()({},Object(o.c)("tab",["currentTab","defaultList","tabList"])),created:function(){this.initStoreTab()},methods:a()({},Object(o.b)("tab",["sync_currentTab","sync_tabList"]),{initStoreTab:function(){var t=this.$storage.get("tabList")||this.defaultList,e=this.$storage.get("currentTab")||this.currentTab;this.sync_currentTab(e),this.$storage.set("currentTab",this.currentTab),this.sync_tabList(t),this.$storage.set("tabList",t)},clickTab:function(t){this.$router.push(t.path||t.$attrs.path),this.sync_currentTab(t.name),this.$storage.set("currentTab",t.name)},closeTab:function(t){if("Home"!==t){var e=[].concat(this.tabList),n=e.find(function(e){return e.name===t}),i=this.tabList.indexOf(n);if(e.splice(i,1),this.sync_tabList(e),this.$storage.set("tabList",this.tabList),n.name===this.currentTab){var s=this.tabList[i-1];this.sync_currentTab(s.name),this.$storage.set("currentTab",s.name),this.$router.push(s.path)}}},mouseoutTab:function(){this.hideContextmenu()},mouseoverTab:function(){var t=event.target.id.replace("tab-","");this.currentItem&&t!==this.currentItem.name&&this.hideContextmenu(),this.hideContextmenu()},showContextmenu:function(){this.isShowContextmenu=!0},hideContextmenu:function(){this.isShowContextmenu=!1},handleContextmenu:function(t){var e=t.target.id&&t.target.id.replace("tab-","");e&&(this.currentItem=this.tabList.find(function(t){return t.name===e}),this.showContextmenu(),this.contextmenuLeft=t.pageX-50,this.contextmenuTop=t.pageY-50)},closeCurrent:function(){this.closeTab(this.currentItem.name),this.hideContextmenu()},closeAll:function(){this.sync_tabList(this.defaultList),this.$storage.set("tabList",this.defaultList),this.$router.push("/"),this.hideContextmenu()},closeLeft:function(){var t=this,e=[].concat(this.tabList),n=this.tabList.indexOf(this.currentItem);e.splice(1,n-1),this.sync_tabList(e),this.$storage.set("tabList",e),e.find(function(e){return e.name===t.currentTab})||this.clickTab(this.currentItem),this.hideContextmenu()},closeRight:function(){var t=this,e=[].concat(this.tabList),n=this.tabList.indexOf(this.currentItem);e.splice(n+1,e.length),this.sync_tabList(e),this.$storage.set("tabList",e),e.find(function(e){return e.name===t.currentTab})||this.clickTab(this.currentItem),this.hideContextmenu()}})},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-tabs"},[n("el-tabs",{ref:"tabs",attrs:{value:t.currentTab},on:{"tab-click":t.clickTab,"tab-remove":t.closeTab},nativeOn:{contextmenu:function(e){return e.preventDefault(),t.handleContextmenu(e)},mouseover:function(e){return t.mouseoverTab(e)}}},t._l(t.tabList,function(t){return n("el-tab-pane",{key:t.name,attrs:{closable:"Home"!==t.name||!1,label:t.title,name:t.name,path:t.path}})}),1),t._v(" "),t.isShowContextmenu?n("div",{staticClass:"contextmenu animated fadeIn faster",style:{left:t.contextmenuLeft+"px",top:t.contextmenuTop+"px"},on:{mouseleave:t.hideContextmenu}},[n("ul",[n("li",{on:{click:t.closeCurrent}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭当前")])]),t._v(" "),n("li",{on:{click:t.closeLeft}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭左侧")])]),t._v(" "),n("li",{on:{click:t.closeRight}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭右侧")])]),t._v(" "),n("li",{on:{click:t.closeAll}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭全部")])])])]):t._e()],1)},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(t){n("O0Cj")},"data-v-c8736024",null).exports,b=n("162o"),v={name:"Tabs",data:function(){return{isShowContextmenu:!1,isShowTabBtn:!1,contextmenuLeft:0,contextmenuTop:0,currentItem:null,tabUiLeft:0}},created:function(){var t=this;window.addEventListener("resize",function(){t.$refs.tabWrap.scrollWidth<=t.$refs.tabUi.scrollWidth?t.isShowTabBtn=!0:t.isShowTabBtn=!1,t.scrollTabTo()})},mounted:function(){var t=this;this.$nextTick(function(){t.scrollTabTo(),t.initStoreTab()})},watch:{tabList:function(){var t=this;this.$nextTick(function(){t.$refs.tabWrap.scrollWidth<=t.$refs.tabUi.scrollWidth?t.isShowTabBtn=!0:t.isShowTabBtn=!1}),this.scrollTabTo()}},computed:a()({},Object(o.c)("tab",["currentTab","defaultList","tabList"])),methods:a()({},Object(o.b)("tab",["sync_currentTab","sync_tabList"]),{initStoreTab:function(){var t=this.$storage.get("tabList")||this.defaultList,e=this.$storage.get("currentTab")||this.currentTab;this.sync_currentTab(e),this.$storage.set("currentTab",this.currentTab),this.sync_tabList(t),this.$storage.set("tabList",t)},clickTab:function(t){this.$router.push(t.path),this.sync_currentTab(t.name),this.$storage.set("currentTab",t.name),this.scrollTabTo()},closeTab:function(t){if("Home"!==t.name){var e=[].concat(this.tabList),n=this.tabList.indexOf(t);if(e.splice(n,1),this.sync_tabList(e),this.$storage.set("tabList",this.tabList),t.name===this.currentTab){var i=this.tabList[n-1];this.sync_currentTab(i.name),this.$storage.set("currentTab",i.name),this.$router.push(i.path)}}},mouseenterTab:function(t){this.currentItem&&t.name!==this.currentItem.name&&this.hideContextmenu()},showContextmenu:function(){this.isShowContextmenu=!0},hideContextmenu:function(){this.isShowContextmenu=!1},handleContextmenu:function(t,e){var n=this;this.showContextmenu(),Object(b.setTimeout)(function(){window.innerWidth-50-e.layerX-5<n.$refs.contextmenu.offsetWidth?n.contextmenuLeft=e.layerX-70:n.contextmenuLeft=e.layerX+5,n.contextmenuTop=e.layerY+5,n.currentItem=t},0)},closeCurrent:function(){this.closeTab(this.currentItem),this.hideContextmenu()},closeAll:function(){this.sync_tabList(this.defaultList),this.$storage.set("tabList",this.defaultList),this.$router.push("/"),this.hideContextmenu()},closeLeft:function(){var t=this,e=[].concat(this.tabList),n=this.tabList.indexOf(this.currentItem);e.splice(1,n-1),this.sync_tabList(e),this.$storage.set("tabList",e),e.find(function(e){return e.name===t.currentTab})||this.clickTab(this.currentItem),this.hideContextmenu()},closeRight:function(){var t=this,e=[].concat(this.tabList),n=this.tabList.indexOf(this.currentItem);e.splice(n+1,e.length),this.sync_tabList(e),this.$storage.set("tabList",e),e.find(function(e){return e.name===t.currentTab})||this.clickTab(this.currentItem),this.hideContextmenu()},scrollTabLeft:function(){this.tabUiLeft+100<=0?this.tabUiLeft+=100:this.tabUiLeft=0},scrollTabRight:function(){var t=this.$refs.tabUi.scrollWidth-this.$refs.tabWrap.offsetWidth;Math.abs(this.tabUiLeft-100)<t?this.tabUiLeft-=100:this.tabUiLeft=-t},scrollTabTo:function(){var t=this;Object(b.setTimeout)(function(){if(t.isShowTabBtn){var e=t.$refs.tabUi.querySelector("li.active");if(e){var n=e.offsetLeft,i=t.$refs.tabUi.scrollWidth,s=t.$refs.tabWrap.offsetWidth;t.tabUiLeft=s/2-n-e.offsetWidth/2,t.tabUiLeft>0&&(t.tabUiLeft=0),Math.abs(t.tabUiLeft)>i-s&&(t.tabUiLeft=-(i-s))}}},0)},handleChange:function(t){this.sync_tabList(t),this.$storage.set("tabList",t)}})},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-tabs"},[n("div",{staticClass:"tabs flex-box"},[t.isShowTabBtn?n("span",{staticClass:"tab-btn tab-btn-left el-icon-arrow-left",on:{mousedown:t.scrollTabLeft}}):t._e(),t._v(" "),n("div",{ref:"tabWrap",staticClass:"tabs-wrap flex"},[n("ul",{ref:"tabUi",style:{left:t.tabUiLeft+"px"}},[n("draggable",{attrs:{value:t.tabList,draggable:"li"},on:{input:t.handleChange}},t._l(t.tabList,function(e){return n("li",{key:e.name,class:e.name===t.currentTab?"active":"",on:{click:function(n){return t.clickTab(e)},contextmenu:function(n){return n.preventDefault(),t.handleContextmenu(e,n)},mouseenter:function(n){return t.mouseenterTab(e)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),"Home"!==e.name?n("i",{staticClass:"el-icon-close",on:{click:function(n){return n.stopPropagation(),t.closeTab(e)}}}):t._e()])}),0)],1)]),t._v(" "),t.isShowTabBtn?n("span",{staticClass:"tab-btn tab-btn-right el-icon-arrow-right",on:{mousedown:t.scrollTabRight}}):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowContextmenu,expression:"isShowContextmenu"}],ref:"contextmenu",staticClass:"contextmenu animated fadeIn faster",style:{left:t.contextmenuLeft+"px",top:t.contextmenuTop+"px"},on:{mouseleave:t.hideContextmenu}},[n("ul",[n("li",{on:{click:t.closeCurrent}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭当前")])]),t._v(" "),n("li",{on:{click:t.closeLeft}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭左侧")])]),t._v(" "),n("li",{on:{click:t.closeRight}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭右侧")])]),t._v(" "),n("li",{on:{click:t.closeAll}},[n("i",{staticClass:"el-icon-error"}),t._v(" "),n("span",[t._v("关闭全部")])])])])])},staticRenderFns:[]};var j={name:"App",components:{Header:l,SideMenu:d,Tab:p,Tabs:n("VU/8")(v,x,!1,function(t){n("Y7U8")},"data-v-f10f57e6",null).exports},data:function(){return{token:!0}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"layout-content flex-box"},["/login"!==this.$route.fullPath?[e("SideMenu",{staticClass:"layout-side-menu"}),this._v(" "),e("div",{staticClass:"layout-main flex-box flex-column flex-item"},[e("Header",{staticClass:"layout-header"}),this._v(" "),e("tabs"),this._v(" "),e("div",{staticClass:"layout-view flex-box flex-item flex-row",staticStyle:{position:"relative"}},[e("transition",{attrs:{"enter-active-class":"fadeInRight faster","leave-active-class":"fadeOut faster"}},[e("keep-alive",[e("router-view",{staticClass:"animated layout-view-main"})],1)],1)],1)],1)]:[e("router-view",{staticClass:"animated fadeIn layout-view flex-item"})]],2)])},staticRenderFns:[]};var y=n("VU/8")(j,g,!1,function(t){n("CjIf")},null,null).exports,_={state:{isOpenSide:JSON.parse(localStorage.getItem("isOpenSide"))&&!0},mutations:{sync_isOpenSide:function(t,e){t.isOpenSide=e}},namespaced:!0},T={state:{currentTab:"Home",defaultList:[{title:"Home",name:"Home",path:"/"}],tabList:[]},mutations:{sync_tabList:function(t,e){t.tabList=e},sync_currentTab:function(t,e){t.currentTab=e}},namespaced:!0};i.default.use(o.a);var L={layout:_,tab:T},C=new o.a.Store({state:{},getters:{},mutations:{},actions:{},modules:L,strict:!1}),k=n("Gu7T"),S=n.n(k),w=n("/ocq"),O=[{path:"/",name:"Home",component:function(){return n.e(2).then(n.bind(null,"KR8f"))}}],z=[{path:"/test",name:"Test",component:function(){return n.e(1).then(n.bind(null,"7Zj+"))}}],$=[{path:"/login",name:"Login",component:function(){return n.e(0).then(n.bind(null,"T+/8"))}}],I=[{path:"/404",name:"Error404",component:function(){return n.e(3).then(n.bind(null,"VdfP"))}},{path:"*",redirect:"/404"}];i.default.use(w.a);var U=new w.a({routes:[].concat(S()(O),S()(z),S()($),S()(I))}),R=["/login","/404"];U.beforeEach(function(t,e,n){var i=localStorage.getItem("TOKEN");R.includes(t.path)?n():i?n():n({path:"/login"})});var E=U,N=(n("oPmM"),n("uMhA"),n("tvR6"),n("ksBL"),n("mM94")),H=n("zL8q"),F=n.n(H),W=n("M4fF"),M=n.n(W),B=n("X57j"),q=n.n(B),D={set:function(t){return q()(t,{space:4})},get:function(t){return new Function("return "+t)()}},P=n("mvHQ"),V=n.n(P),X={get:function(t){var e=localStorage.getItem(t);return"undefined"===e?void 0:JSON.parse(e)},set:function(t,e){localStorage.setItem(t,V()(e))},clear:function(t){t?localStorage.removeItem(t):localStorage.clear()}},A=n("lbHh"),J=n.n(A),K=n("gaXx"),Y=n.n(K),G=n("PJh5"),Z=n.n(G),Q={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    DemoComp\n")])},staticRenderFns:[]};var tt=n("VU/8")({name:"DemoComp",data:function(){return{}}},Q,!1,function(t){n("RKzn")},"data-v-22f9e4e4",null).exports,et=n("u4Bf"),nt=[tt,n.n(et).a],it=function(t){nt.forEach(function(e){t.component(e.name,e)})},st=n("woOf"),at=n.n(st),ot={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    hello "+this._s(this.$attrs.name)+"\n")])},staticRenderFns:[]};var rt={custom:n("VU/8")({name:"custom"},ot,!1,function(t){n("JiFp")},"data-v-f49827b2",null).exports},ct=void 0,lt={init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=ct.storage.get("addRouter")||[];t?e.find(function(e){return e.path===t.path})||e.push(t):(e.map(function(t){var e=ct._.cloneDeep(rt[t.compName]);e.name=t.component.name,t.component=e}),ct.router.addRoutes(e)),ct.storage.set("addRouter",e)},add:function(t){var e=at()({},{path:"",key:"",compName:"",query:null,props:void 0},t),n=ct._.cloneDeep(rt[e.compName]);n.name=e.key?e.compName+"-"+e.key:e.compName;var i=a()({},e,{component:n});ct.router.addRoutes([i]),ct.router.push({path:i.path,query:i.query}),this.init(i)},install:function(t){ct=t,this.init()}},ut=lt;i.default.config.productionTip=!1,i.default.use(function(t,e){t.router=e.router,t._=t.prototype._=M.a,t.serialize=t.prototype.$serialize=D,t.storage=t.prototype.$storage=X,t.cookie=t.prototype.$cookie=J.a,t.big=t.prototype.$big=Y.a,t.moment=t.prototype.$moment=Z.a,t.addRouter=t.prototype.$addRouter=ut,t.use(N.a),t.use(F.a),t.use(it),t.use(ut,e)},{router:E}),window.vm=new i.default({el:"#app",store:C,router:E,components:{App:y},template:"<App/>"})},O0Cj:function(t,e){},RKzn:function(t,e){},Y7U8:function(t,e){},ZURh:function(t,e,n){t.exports=n.p+"static/img/favicon.f5808bb.png"},ksBL:function(t,e){},oPmM:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){},uslO:function(t,e,n){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return n(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.f5e0728dcf2a8ac626d3.js.map