webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("Dd8w"),i=n.n(o),s=n("NYxO"),p={name:"Preview",data:function(){return{}},computed:i()({},Object(s.b)(["Config"]))},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Preview"},e._l(e.Config,function(t,a){return n("span",{key:t+a,staticClass:"Option_Preview"},[n("span",{staticClass:"option"},[n("span",{staticClass:"lineNR"},[a<=8?n("span",[e._v("0")]):e._e(),e._v(e._s(a+1)+".")]),e._v(" "+e._s(t.option)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"n.value"}],staticClass:"value",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"n.value"}],staticClass:"btn",attrs:{type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{__r:function(n){return e.$set(t,"value",n.target.value)}}})])}),0)},staticRenderFns:[]},m=n("VU/8")(p,l,!1,null,null,null).exports,u={name:"App",components:{Preview:m},data:function(){return{}},computed:i()({},Object(s.b)(["Config"])),methods:{goTo:function(e){this.$router.push(e)}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),"/"===e.$route.path?n("button",{staticClass:"getConfig",on:{click:function(t){return e.goTo("config")}}},[e._v("Config")]):n("button",{staticClass:"getConfig",on:{click:function(t){return e.goTo("/")}}},[e._v("Options")])],1)},staticRenderFns:[]},c=n("VU/8")(u,r,!1,null,null,null).exports,v=n("/ocq"),_={name:"Config",data:function(){return{}},computed:i()({},Object(s.b)(["Config"]))},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Preview"},e._l(e.Config,function(t,a){return n("span",{key:t+a,staticClass:"Option_Done"},[n("span",{staticClass:"doneOption"},[n("span",{staticClass:"lineNR"},[a<=8?n("span",[e._v("0")]):e._e(),e._v(e._s(a+1)+".")]),e._v(e._s(t.option)+' "'+e._s(t.value)+'"')])])}),0)},staticRenderFns:[]},x=n("VU/8")(_,d,!1,null,null,null).exports;a.a.use(v.a);var f=new v.a({routes:[{path:"/",name:"Preview",component:m},{path:"/config",name:"Config",component:x}]}),g=(n("jD+D"),n("n9CO")),C=n.n(g);a.a.use(s.a);const w=new s.a.Store({state:{Config:C.a},getters:{Config:e=>e.Config}});a.a.config.productionTip=!1,new a.a({el:"#app",router:f,store:w,components:{App:c},template:"<App/>"})},"jD+D":function(e,t){},n9CO:function(e,t){e.exports=[{option:"fps_max",value:0,min:0,max:999,step:1},{option:"sensitivity",value:2.5,min:.1,max:10,step:.1},{option:"rate",value:786432,min:62500,max:786432,step:1},{option:"cl_updaterate",value:128,min:64,max:128,step:64},{option:"cl_cmdrate",value:128,min:64,max:128,step:64},{option:"cl_interp_ratio",value:1,min:1,max:3,step:1},{option:"cl_interp",value:0,min:0,max:2,step:1},{option:"cl_lagcompensation",value:1,min:0,max:1,step:1},{option:"cl_forcepreload",value:1,min:0,max:1,step:1},{option:"cl_righthand",value:1,min:0,max:1,step:1},{option:"cl_autoweaponswitch",value:0,min:0,max:1,step:1},{option:"mat_monitorgamma",value:1.6,min:1,max:2.1,step:.1},{option:"mat_queue_mode",value:-1,min:-1,max:2,step:1},{option:"mat_disable_bloom",value:1,min:0,max:1,step:1},{option:"r_drawparticles",value:0,min:0,max:1,step:1},{option:"r_drawdecals",value:0,min:0,max:1,step:1},{option:"r_eyemove",value:0,min:0,max:1,step:1},{option:"r_gloss",value:0,min:0,max:1,step:1},{option:"r_dynamic",value:0,min:0,max:1,step:1},{option:"r_drawtracers_firstperson",value:0,min:0,max:1,step:1},{option:"func_break_max_pieces",value:0,min:0,max:1,step:1},{option:"voice_scale",value:.3,min:0,max:1,step:.01},{option:"snd_mixahead",value:.05,min:0,max:1,step:.01},{option:"snd_musicvolume",value:0,min:0,max:1,step:.01},{option:"snd_menumusic_volume",value:0,min:0,max:1,step:.01},{option:"snd_mvp_volum",value:.15,min:0,max:1,step:.01},{option:"snd_roundend_volume",value:0,min:0,max:1,step:.01},{option:"snd_roundstart_volume",value:0,min:0,max:1,step:.01},{option:"snd_tensecondwarning_volume",value:.25,min:0,max:1,step:.01},{option:"cl_showloadout",value:0,min:0,max:1,step:1},{option:"cl_disablefreezecam",value:1,min:0,max:1,step:1},{option:"gameinstructor_enable",value:0,min:0,max:1,step:1},{option:"cl_disablehtmlmotd",value:1,min:0,max:1,step:1}]}},["NHnr"]);
//# sourceMappingURL=app.f73771314033f41ff127.js.map