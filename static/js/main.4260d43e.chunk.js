(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(26),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),ctx,lastTime=0,RenderBox=function(_Component){function RenderBox(e){return Object(_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,RenderBox),Object(_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(RenderBox).call(this,e))}return Object(_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(RenderBox,_Component),Object(_home_jose_elfogre_GraphMathArt_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(RenderBox,[{key:"componentDidMount",value:function(){ctx=this.refs.canvas.getContext("2d"),this.updateCanvas(),this.startrun(this.updateCanvas)}},{key:"componentDidUpdate",value:function(){}},{key:"drawPixel",value:function(e,t,a,n,r,c,l){var s=4*(e+t*this.props.scene.scene.xsize);l.data[s+0]=a,l.data[s+1]=n,l.data[s+2]=r,l.data[s+3]=c}},{key:"updateCanvas",value:function updateCanvas(){try{var t=this.props.time.time,canvasData=this.evalCanvas(this.props.scene.scene,t);this.props.time.timepaused||this.props.actions.setTime(eval(this.props.scene.scene.timeIncrement)),ctx.putImageData(canvasData,0,0)}catch(e){console.log("Error",e.stack),console.log("Error",e.name),console.log("Error",e.message)}}},{key:"evalCanvas",value:function evalCanvas(scene,time){var t=time,canvasData=eval("\n    var x = ".concat(scene.xInitialValue,";\n    var y = ").concat(scene.yInitialValue,";\n    var canvasData = ctx.getImageData(0, 0, ").concat(scene.xsize,", ").concat(scene.ysize,");\n    for (var canvasx = 0; canvasx < ").concat(scene.xsize,"; canvasx++) {\n      y = ").concat(scene.yInitialValue,";\n      x = ").concat(scene.xIncrement,";\n      for (var canvasy = 0; canvasy < ").concat(scene.ysize,"; canvasy++) {\n        y = ").concat(scene.yIncrement,";\n        this.drawPixel (canvasx,canvasy, (").concat(scene.backgroundredcolour,")%256, (").concat(scene.backgroundgreencolour,")%256, (").concat(scene.backgroundbluecolour,")%256, 255, canvasData);\n      }\n    }\n    canvasData;"));return canvasData}},{key:"startrun",value:function(e){if(console.log("startrun:",this.lastTime),this.gameTick=e,0===lastTime){var t=this;requestAnimationFrame(function(){t.tick()}),this.lastTime=0}}},{key:"stoprun",value:function(){this.startrun(null)}},{key:"tick",value:function(){if(null!==this.gameTick){var e=this;requestAnimationFrame(function(){e.tick()});var t=Date.now(),a=t-this.lastTime;if(a>0){if(0!==this.lastTime){a>1e3&&(a=1e3);var n=(a+this.prevElapsed+this.prevElapsed2)/3;this.gameTick(.001*n),this.prevElapsed2=this.prevElapsed,this.prevElapsed=a}this.lastTime=t}}else this.lastTime=0}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas",{ref:"canvas",width:this.props.scene.scene.xsize,height:this.props.scene.scene.ysize})}}]),RenderBox}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=RenderBox},113:function(e,t,a){e.exports=a(205)},205:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"handlePauseTime",function(){return z}),a.d(n,"handleStartTime",function(){return U}),a.d(n,"handleRestartTime",function(){return W}),a.d(n,"setTime",function(){return K});var r=a(0),c=a.n(r),l=a(56),s=a(19),o=a(22),i=a(23),_=a(25),m=a(24),u=a(26),p=a(15),h=a(212),E=a(13),d=a(215),v=a(207),b=a(214),x=a(208),f=a(209),O=a(217),g=a(210),y=a(211),C=function(e){return c.a.createElement(d.a,Object.assign({type:"text"},e))},k=c.a.createElement("h3",null,"Background color"),M=c.a.createElement("h3",null,"Frame size"),T=c.a.createElement("h3",null,"Coordinates size"),I=c.a.createElement("h3",null,"Time control"),D=function(e){function t(){return Object(o.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log(JSON.stringify(e,null,2))}},{key:"render",value:function(){return c.a.createElement(E.Form,{model:"scene"},c.a.createElement(v.a,null,c.a.createElement(b.a,{header:k},c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Red value"),c.a.createElement(E.Control.text,{model:"scene.backgroundredcolour",component:C,value:this.props.scene.scene.backgroundredcolour}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Green value"),c.a.createElement(E.Control.text,{model:"scene.backgroundgreencolour",component:C,value:this.props.scene.scene.backgroundgreencolour}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Blue value"),c.a.createElement(E.Control.text,{model:"scene.backgroundbluecolour",component:C,value:this.props.scene.scene.backgroundbluecolour}))))),c.a.createElement(b.a,{header:M},c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Image x size"),c.a.createElement(E.Control.text,{model:"scene.xsize",component:C,value:this.props.scene.scene.xsize}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Image y size"),c.a.createElement(E.Control.text,{model:"scene.ysize",component:C,value:this.props.scene.scene.ysize}))))),c.a.createElement(b.a,{header:T},c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"x initial value"),c.a.createElement(E.Control.text,{model:"scene.xInitialValue",component:C,value:this.props.scene.scene.xInitialValue}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"x coordinates function"),c.a.createElement(E.Control.text,{model:"scene.xIncrement",component:C,value:this.props.scene.scene.xIncrement})))),c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"y initial value"),c.a.createElement(E.Control.text,{model:"scene.yInitialValue",component:C,value:this.props.scene.scene.yInitialValue}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"y coordinates function"),c.a.createElement(E.Control.text,{model:"scene.yIncrement",component:C,value:this.props.scene.scene.yIncrement}))))),c.a.createElement(b.a,{header:I},c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Time function"),c.a.createElement(E.Control.text,{model:"scene.timeIncrement",component:C,value:this.props.scene.scene.timeIncrement}))),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,c.a.createElement(g.a,null,"Actual time: ")," ",this.props.time.time)),c.a.createElement(f.a,{xs:4},c.a.createElement(O.a,null,this.props.time.timepaused?c.a.createElement(y.a,{onClick:this.props.actions.handleStartTime},"Play"):c.a.createElement(y.a,{onClick:this.props.actions.handlePauseTime},"Pause"),c.a.createElement(y.a,{onClick:this.props.actions.handleRestartTime},"Restart")))))))}}]),t}(r.Component),P=a(110),j=function(e){function t(){return Object(o.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleExportGraph",value:function(){window.open().document.write("<!DOCTYPE html><html><head><script><\/script></head><body><h1>My Web Page</h1></body></html>")}},{key:"render",value:function(){return c.a.createElement(x.a,{className:"show-grid"},c.a.createElement(f.a,{xs:4}),c.a.createElement(y.a,{onClick:this.handleExportGraph},"Export graph"))}}]),t}(r.Component),A="PAUSE_TIME",R="START_TIME",w="RESTART_TIME",B="SET_TIME";function z(){return{type:A}}function U(){return{type:R}}function W(){return{type:w}}function K(e){return{type:B,time:e}}var L=function(e){function t(){return Object(o.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.time,a=e.scene,n=e.timeActions;return c.a.createElement("div",{className:"row"},c.a.createElement(h.a,null,"GraphMathArt ",c.a.createElement("small",null,"converting functions in actual art")),c.a.createElement(D,{scene:a,time:t,actions:n}),c.a.createElement("div",null,c.a.createElement(P.a,{scene:a,time:t,actions:n})),c.a.createElement(j,{scene:a}))}}]),t}(r.Component);var G=Object(s.connect)(function(e){return{time:e.time,scene:e.scene}},function(e){return{timeActions:Object(p.bindActionCreators)(n,e)}})(L),q=Object(E.combineForms)({scene:{xsize:300,ysize:300,backgroundredcolour:"0",backgroundgreencolour:"0",backgroundbluecolour:"0",timeIncrement:"t+1",xInitialValue:0,xIncrement:"x+1",yInitialValue:0,yIncrement:"y+1"}}),S=a(43),V={time:0,timepaused:!0};var N=Object(p.combineReducers)({time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(S.a)({},e,{timepaused:!0});case R:return Object(S.a)({},e,{timepaused:!1});case w:return Object(S.a)({},e,{time:0});case B:return Object(S.a)({},e,{time:t.time});default:return e}},scene:q});var F,J=a(213),Y=a(216),H=Object(p.createStore)(N,F);Object(l.render)(c.a.createElement(s.Provider,{store:H},c.a.createElement(J.a,null,c.a.createElement(Y.a,{path:"/",component:G}))),document.getElementById("root"))}},[[113,2,1]]]);
//# sourceMappingURL=main.4260d43e.chunk.js.map