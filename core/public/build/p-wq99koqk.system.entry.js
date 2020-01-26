var __awaiter=this&&this.__awaiter||function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function n(t){try{a(r.next(t))}catch(e){o(e)}}function h(t){try{a(r["throw"](t))}catch(e){o(e)}}function a(t){t.done?i(t.value):s(t.value).then(n,h)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,s,o,n;return n={next:h(0),throw:h(1),return:h(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function h(t){return function(e){return a([t,e])}}function a(n){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,s&&(o=n[0]&2?s["return"]:n[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,n[1])).done)return o;if(s=0,o)n=[n[0]&2,o.value];switch(n[0]){case 0:case 1:o=n;break;case 4:i.label++;return{value:n[1],done:false};case 5:i.label++;s=n[1];n=[0];continue;case 7:n=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(n[0]===6||n[0]===2)){i=0;continue}if(n[0]===3&&(!o||n[1]>o[0]&&n[1]<o[3])){i.label=n[1];break}if(n[0]===6&&i.label<o[1]){i.label=o[1];o=n;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(n);break}if(o[2])i.ops.pop();i.trys.pop();continue}n=e.call(t,i)}catch(h){n=[6,h];s=0}finally{r=o=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-56809b38.system.js","./p-893514ea.system.js","./p-971d08cd.system.js"],(function(t){"use strict";var e,i,r,s,o,n,h,a,c,p,l,u;return{setters:[function(t){e=t.r;i=t.c;r=t.h;s=t.H;o=t.g},function(t){n=t.h;h=t.f},function(t){a=t.h;c=t.i;p=t.f;l=t.H;u=t.o}],execute:function(){var _=t("jeep_cpicker",function(){function t(t){e(this,t);this.color="#ff0000";this.opacity="1.000";this.hidebuttons=false;this.hideheader=false;this.hideopacity=false;this.toggleDisplay=false;this._stateProperties={init:false};this._textType=["hex","rgb","hsl","hsb"];this._wrapCss={};this._wrapperSize={width:0,height:0};this._mouseStart=false;this._resize=false;this._onElement=null;this.onOpen=i(this,"jeepCpickerOpen",7);this.onClose=i(this,"jeepCpickerClose",7);this.onInstantColor=i(this,"jeepCpickerInstantColor",7)}t.prototype.parseColorProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.innerColor=t?t:"#ff0000";this._stateProperties.hsb=a(this.innerColor,this.innerOpacity?this.innerOpacity.toFixed(3):"1.000");if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor,this.innerOpacity?this.innerOpacity:1)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.parseOpacityProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.innerOpacity=t&&!this.innerHideOpacity?Number(t):1;this._stateProperties.hsb=a(this.innerColor?this.innerColor:"#ff0000",this.innerOpacity.toFixed(3));if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor?this.innerColor:"#ff0000",this.innerOpacity)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.parseButtonsProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(this.innerHideButtons){this.innerButtons=[]}else{this.innerButtons=t?t.substr(1).slice(0,-1).split(","):["Okay","Cancel"]}if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor,this.innerOpacity)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.parseHideButtonsProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.innerHideButtons=t?t:false;if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor,this.innerOpacity)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.parseHideHeaderProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.innerHideHeader=t?t:false;if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor,this.innerOpacity)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.parseHideOpacityProp=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.innerHideOpacity=t?t:false;if(!this._stateProperties.init)return[3,2];return[4,this._setSelected(this.innerColor,this.innerOpacity)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.handleWindowResize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this._windowResize()];case 1:t.sent();return[2]}}))}))};t.prototype.init=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this._init()];case 1:return[2,t.sent()]}}))}))};t.prototype.getStateProperties=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._stateProperties]}))}))};t.prototype.getWrapperCssVariables=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._wrapCss]}))}))};t.prototype.calcH=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return[2,Promise.resolve(this._calcH(t,e))]}))}))};t.prototype.calcS=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return[2,Promise.resolve(this._calcS(t,e))]}))}))};t.prototype.calcB=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return[2,Promise.resolve(this._calcB(t,e))]}))}))};t.prototype.calcO=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return[2,Promise.resolve(this._calcO(t,e))]}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.init()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this._wrapperEl=this.el.shadowRoot.querySelector(".cpicker-wrapper");this._circleEl=this.el.shadowRoot.querySelector("#cpickerHandler");this._pickEl=this.el.shadowRoot.querySelector("#cpickerGradientB");this._pickHueEl=this.el.shadowRoot.querySelector("#cpickerSliderHueColor");this._pickHueSliderHandleEl=this.el.shadowRoot.querySelector("#cpickerColSliderHandler");this._pickOpaEl=this.el.shadowRoot.querySelector("#cpickerSliderOpacity");this._pickOpaSliderHandleEl=this.el.shadowRoot.querySelector("#cpickerOpaSliderHandler");this._okEl=this.el.shadowRoot.querySelector("#cpickerOkay");this._cancelEl=this.el.shadowRoot.querySelector("#cpickerCancel");this._headlineEl=this.el.shadowRoot.querySelector("#cpickerSelColor");return[4,this._setBoundingBoxes()];case 1:t.sent();this.onOpen.emit();return[2]}}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this._resize)return[3,2];return[4,this._setBoundingBoxes()];case 1:t.sent();this._resize=false;t.label=2;case 2:return[2]}}))}))};t.prototype._init=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.parseColorProp(this.color?this.color:"#ff0000");this.parseHideOpacityProp(this.hideopacity?this.hideopacity:false);this.parseOpacityProp(this.opacity?this.opacity:"1");this.parseHideButtonsProp(this.hidebuttons?this.hidebuttons:false);this.parseButtonsProp(this.buttons?this.buttons:"[Okay,Cancel]");this.parseHideHeaderProp(this.hideheader?this.hideheader:false);this.innerOpacity=this.innerHideOpacity?1:this.innerOpacity;this._bboxes={};this._oriColor=c(this.innerColor?this.innerColor:"#ff0000",this.innerOpacity?this.innerOpacity.toFixed(3):"1");return[4,this._setCssVariable()];case 1:t.sent();return[4,this._setSelected(this.innerColor?this.innerColor:"#ff0000",this.innerOpacity?this.innerOpacity:1)];case 2:t.sent();return[2]}}))}))};t.prototype._setCssVariable=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._wrapCss.backColor=n(this.el,"--cpicker-background-color");this._wrapCss.backColor=this._wrapCss.backColor?this._wrapCss.backColor:n(this.el,"--cpicker-background-color","#242424");this._wrapCss.top=n(this.el,"--cpicker-top").replace(/  +/g," ");this._wrapCss.top=this._wrapCss.top?this._wrapCss.top:n(this.el,"--cpicker-top","10vh");this._wrapCss.left=n(this.el,"--cpicker-left").replace(/  +/g," ");this._wrapCss.left=this._wrapCss.left?this._wrapCss.left:n(this.el,"--cpicker-left","10vw");this._wrapCss.width=n(this.el,"--cpicker-width").replace(/  +/g," ");this._wrapCss.width=this._wrapCss.width?this._wrapCss.width:n(this.el,"--cpicker-width","70vmin");this._wrapCss.height=n(this.el,"--cpicker-height").replace(/  +/g," ");this._wrapCss.height=this._wrapCss.height?this._wrapCss.height:n(this.el,"--cpicker-height","50vmin");return[2]}))}))};t.prototype._setSelected=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i,r,s,o;return __generator(this,(function(n){switch(n.label){case 0:if(!this._stateProperties.init){this._stateProperties.init=true;this._stateProperties.textType="hex";this._stateProperties.hsb=a(t,e.toFixed(3))}this._stateProperties.window={};this._stateProperties.window.width=window.innerWidth;this._stateProperties.window.height=window.innerHeight;this._stateProperties.vmin=Math.min(window.innerWidth,window.innerHeight)/100;this._stateProperties.opacity=e.toFixed(3);this._stateProperties.color=p(this._stateProperties.hsb);this._stateProperties.colorHeadline=this._stateProperties.color[this._stateProperties.textType][this._stateProperties.textType+"a"];this._stateProperties.hue=l(this._stateProperties.hsb).hex;this._stateProperties.colorText=this._setTextColor(this._stateProperties.color.hsb);this._stateProperties.colorHandle=this._setTextColor(a(this._wrapCss.backColor),"back");i=this._stateProperties;return[4,h(this._wrapCss.top,"y")];case 1:i.wrapperTop=n.sent();r=this._stateProperties;return[4,h(this._wrapCss.left,"x")];case 2:r.wrapperLeft=n.sent();s=this._stateProperties;return[4,h(this._wrapCss.width,"x")];case 3:s.wrapperWidth=n.sent();o=this._stateProperties;return[4,h(this._wrapCss.height,"y")];case 4:o.wrapperHeight=n.sent();this._stateProperties.header={};this._stateProperties.colorArea={};this._stateProperties.buttonArea={};this._stateProperties.fill={};this._stateProperties.header.xtext=!this.hideopacity?.345*this._stateProperties.wrapperWidth:.4*this._stateProperties.wrapperWidth;this._stateProperties.header.height=!this.hideheader?.12*this._stateProperties.wrapperHeight:0;this._stateProperties.header.width=!this.hideopacity?.69*this._stateProperties.wrapperWidth:.83*this._stateProperties.wrapperWidth;this._stateProperties.header.width1=!this.hideopacity?.31*this._stateProperties.wrapperWidth:.17*this._stateProperties.wrapperWidth;this._stateProperties.colorArea.y=!this.hideheader?.15*this._stateProperties.wrapperHeight:.03*this._stateProperties.wrapperHeight;this._stateProperties.colorArea.widthSB=!this.hideopacity?.66*this._stateProperties.wrapperWidth:.8*this._stateProperties.wrapperWidth;this._stateProperties.colorArea.widthOpa=!this.hideopacity?.11*this._stateProperties.wrapperWidth:0;this._stateProperties.colorArea.widthHue=.11*this._stateProperties.wrapperWidth;this._stateProperties.colorArea.height=!this.hideheader&&!this.hidebuttons?.66*this._stateProperties.wrapperHeight:!this.hideheader&&this.hidebuttons?.78*this._stateProperties.wrapperHeight:this.hideheader&&!this.hidebuttons?.78*this._stateProperties.wrapperHeight:.9*this._stateProperties.wrapperHeight;this._stateProperties.buttonArea.height=!this.hidebuttons?.11*this._stateProperties.wrapperHeight:0;this._stateProperties.buttonArea.x=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?.39*this._stateProperties.wrapperWidth:.17*this._stateProperties.wrapperWidth:0;this._stateProperties.buttonArea.width=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?.08*this._stateProperties.wrapperWidth:.3*this._stateProperties.wrapperWidth:0;this._stateProperties.buttonArea.xText1=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?.43*this._stateProperties.wrapperWidth:.32*this._stateProperties.wrapperWidth:0;this._stateProperties.buttonArea.xText2=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?.57*this._stateProperties.wrapperWidth:.68*this._stateProperties.wrapperWidth:0;this._stateProperties.buttonArea.colorText1=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?"#00ff00":this._stateProperties.colorHandle:this._stateProperties.colorHandle;this._stateProperties.buttonArea.colorText2=!this.hidebuttons?this.innerButtons[0].length===1&&this.innerButtons[1].length===1?"#ff0000":this._stateProperties.colorHandle:this._stateProperties.colorHandle;this._stateProperties.opaHandlerY=this._stateProperties.colorArea.y+(1-e)*this._stateProperties.colorArea.height-.006*this._stateProperties.wrapperHeight;this._stateProperties.hueHandlerY=this._stateProperties.colorArea.y+this._stateProperties.color.hsb.h/360*this._stateProperties.colorArea.height-.006*this._stateProperties.wrapperHeight;this._stateProperties.pickerHandler={};this._stateProperties.pickerHandler.x=.03*this._stateProperties.wrapperWidth+this._stateProperties.color.hsb.s/100*this._stateProperties.colorArea.widthSB;this._stateProperties.pickerHandler.y=this._stateProperties.colorArea.y+(1-this._stateProperties.color.hsb.b/100)*this._stateProperties.colorArea.height;this._stateProperties.fill.color="url("+window.location.href+"#colorSliderGradient)";this._stateProperties.fill.brightness="url("+window.location.href+"#cpickerBrightness)";this._stateProperties.fill.hue="url("+window.location.href+"#cpickerHue)";this._stateProperties.fill.opacity="url("+window.location.href+"#opacitySliderGradient)";this._stateProperties.fill.transparency="url("+window.location.href+"#pattern-transparency)";return[2]}}))}))};t.prototype._setBoundingBoxes=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._bboxes.wrapper=this._wrapperEl.getBoundingClientRect();this._bboxes.headline=this._headlineEl?this._headlineEl.getBoundingClientRect():null;this._bboxes.color=this._pickEl.getBoundingClientRect();this._bboxes.hue=this._pickHueEl.getBoundingClientRect();this._bboxes.opacity=this._pickOpaEl?this._pickOpaEl.getBoundingClientRect():null;this._bboxes.ok=this._okEl?this._okEl.getBoundingClientRect():null;this._bboxes.cancel=this._cancelEl?this._cancelEl.getBoundingClientRect():null;return[2]}))}))};t.prototype._windowResize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this._resize=true;this._onElement=null;return[4,this._setSelected(this._stateProperties.color.hex.hex,Number(this._stateProperties.opacity))];case 1:t.sent();this.toggleDisplay=!this.toggleDisplay;return[2]}}))}))};t.prototype._setTextColor=function(t,e){var i=e?e:"col";var r=u(t);if(i=="col"&&r<.4)return"#ffffff";if(t.h<300&&t.h>195){if(t.s<60&&t.b>50)return"#000000";return"#ffffff"}if(t.h<195&&t.h>40){if(t.b<50)return"#ffffff";return"#000000"}if(t.b<50)return"#ffffff";if(t.s>60)return"#ffffff";return"#000000"};t.prototype._toggleTextType=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this._textType.indexOf(this._stateProperties.textType);t++;if(t>3)t=0;this._stateProperties.textType=this._textType[t];this._stateProperties.colorHeadline=this._stateProperties.color[this._stateProperties.textType][this._stateProperties.textType+"a"];this.toggleDisplay=!this.toggleDisplay;return[2]}))}))};t.prototype._okColorPickerHandler=function(){this.onClose.emit({color:this._stateProperties.color,button:1});return};t.prototype._cancelColorPickerHandler=function(){this.onClose.emit({color:this._oriColor,button:2});return};t.prototype._pickColor=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,r;return __generator(this,(function(s){switch(s.label){case 0:if(!(t.x<=this._bboxes.color.right&&t.x>=this._bboxes.color.left&&t.y<=this._bboxes.color.bottom&&t.y>=this._bboxes.color.top))return[3,4];e=this._getPickCoordinates(this._bboxes.color,t);i=this._updateStateProperties;r=[this._stateProperties.hsb.h];return[4,this.calcS(e.x,e.width)];case 1:r=r.concat([s.sent()]);return[4,this.calcB(e.y,e.height)];case 2:return[4,i.apply(this,r.concat([s.sent(),u(this._stateProperties.hsb)]))];case 3:return[2,s.sent()];case 4:return[2]}}))}))};t.prototype._pickHue=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i;return __generator(this,(function(r){switch(r.label){case 0:if(!(t.x<=this._bboxes.hue.right&&t.x>=this._bboxes.hue.left&&t.y<=this._bboxes.hue.bottom&&t.y>=this._bboxes.hue.top))return[3,3];e=this._getPickCoordinates(this._bboxes.hue,t);i=this._updateStateProperties;return[4,this.calcH(e.y,e.height)];case 1:return[4,i.apply(this,[r.sent(),this._stateProperties.hsb.s,this._stateProperties.hsb.b,u(this._stateProperties.hsb)])];case 2:return[2,r.sent()];case 3:return[2]}}))}))};t.prototype._pickOpacity=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,r;return __generator(this,(function(s){switch(s.label){case 0:if(!(t.x<=this._bboxes.opacity.right&&t.x>=this._bboxes.opacity.left&&t.y<=this._bboxes.opacity.bottom&&t.y>=this._bboxes.opacity.top))return[3,3];e=this._getPickCoordinates(this._bboxes.opacity,t);i=this._updateStateProperties;r=[this._stateProperties.hsb.h,this._stateProperties.hsb.s,this._stateProperties.hsb.b];return[4,this.calcO(e.y,e.height)];case 1:return[4,i.apply(this,r.concat([s.sent()]))];case 2:return[2,s.sent()];case 3:return[2]}}))}))};t.prototype._getPickCoordinates=function(t,e){var i={};i.x=e.x-t.x;i.y=e.y-t.y;i.width=t.width;i.height=t.height;return i};t.prototype._updateStateProperties=function(t,e,i,r){return __awaiter(this,void 0,void 0,(function(){var s;return __generator(this,(function(o){switch(o.label){case 0:s={};s.s=Number(e.toFixed(0));s.b=Number(i.toFixed(0));s.h=Number(t.toFixed(0));s.hsb="HSB("+s.h.toFixed(0)+","+s.s.toFixed(0)+"%,"+s.b.toFixed(0)+"%)";s.hsba="HSBA("+s.h.toFixed(0)+","+s.s.toFixed(0)+"%,"+s.b.toFixed(0)+"%,"+r.toFixed(3)+")";this._stateProperties.hsb=s;return[4,this._setSelected(p(s).hex.hex,r)];case 1:o.sent();this.toggleDisplay=!this.toggleDisplay;return[2]}}))}))};t.prototype._calcH=function(t,e){var i;if(t<.01*e){i=0}else if(t>.99*e){i=1}else{i=t/e}return i*360};t.prototype._calcS=function(t,e){var i;if(t<.01*e){i=0}else if(t>.99*e){i=100}else{i=t/e*100}return i};t.prototype._calcB=function(t,e){var i;if(t<.01*e){i=100}else if(t>.99*e){i=0}else{i=(1-t/e)*100}return i};t.prototype._calcO=function(t,e){var i;if(t<.01*e){i=1}else if(t>.99*e){i=0}else{i=1-t/e}return i};t.prototype._selectAction=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(r){switch(r.label){case 0:i=t;switch(i){case"cpickerSelColor":return[3,1];case"cpickerText":return[3,1];case"cpickerGradientB":return[3,4];case"cpickerSliderHueColor":return[3,6];case"cpickerColSliderHandler":return[3,6];case"cpickerSliderOpacity":return[3,8];case"cpickerOpaSliderHandler":return[3,8];case"cpickerOkay":return[3,10];case"cpickerOkayText":return[3,10];case"cpickerCancel":return[3,11];case"cpickerCancelText":return[3,11]}return[3,12];case 1:if(!!this._mouseStart)return[3,3];return[4,this._toggleTextType()];case 2:r.sent();r.label=3;case 3:return[3,12];case 4:return[4,this._pickColor(e)];case 5:r.sent();this.onInstantColor.emit(this._stateProperties.color);return[3,12];case 6:return[4,this._pickHue(e)];case 7:r.sent();this.onInstantColor.emit(this._stateProperties.color);return[3,12];case 8:return[4,this._pickOpacity(e)];case 9:r.sent();this.onInstantColor.emit(this._stateProperties.color);return[3,12];case 10:{this._okColorPickerHandler();return[3,12]}r.label=11;case 11:{this._cancelColorPickerHandler();return[3,12]}r.label=12;case 12:return[2]}}))}))};t.prototype._getOnElement=function(t){var e;var i=this._pickHueSliderHandleEl.getBoundingClientRect();var r=this._pickOpaSliderHandleEl?this._pickOpaSliderHandleEl.getBoundingClientRect():null;if(t.x<=this._bboxes.color.right&&t.x>=this._bboxes.color.left&&t.y<=this._bboxes.color.bottom&&t.y>=this._bboxes.color.top){e="cpickerGradientB"}else if(t.x<=this._bboxes.hue.right&&t.x>=this._bboxes.hue.left&&t.y<=this._bboxes.hue.bottom&&t.y>=this._bboxes.hue.top){e="cpickerSliderHueColor"}else if(!this.hideopacity&&(t.x<=this._bboxes.opacity.right&&t.x>=this._bboxes.opacity.left&&t.y<=this._bboxes.opacity.bottom&&t.y>=this._bboxes.opacity.top)){e="cpickerSliderOpacity"}else if(!this.hidebuttons&&(t.x<=this._bboxes.ok.right&&t.x>=this._bboxes.ok.left&&t.y<=this._bboxes.ok.bottom&&t.y>=this._bboxes.ok.top)){e="cpickerOkay"}else if(!this.hidebuttons&&(t.x<=this._bboxes.cancel.right&&t.x>=this._bboxes.cancel.left&&t.y<=this._bboxes.cancel.bottom&&t.y>=this._bboxes.cancel.top)){e="cpickerCancel"}else if(!this.hideheader&&(t.x<=this._bboxes.headline.right&&t.x>=this._bboxes.headline.left&&t.y<=this._bboxes.headline.bottom&&t.y>=this._bboxes.headline.top)){e="cpickerSelColor"}else if(!this.hideopacity&&(t.x<=r.right&&t.x>=r.left&&t.y<=r.bottom&&t.y>=r.top)){e="cpickerOpaSliderHandler"}else if(t.x<=i.right&&t.x>=i.left&&t.y<=i.bottom&&t.y>=i.top){e="cpickerColSliderHandler"}else if(this.hidebuttons){e="cpicker-wrapper"}else{e=null}return e};t.prototype._movePoint=function(t,e){var i=this;if(this._timeout){window.cancelAnimationFrame(this._timeout)}this._timeout=window.requestAnimationFrame((function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:return[4,this._selectAction(t,e)];case 1:i.sent();return[2]}}))}))}))};t.prototype._handleMouseDown=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){switch(i.label){case 0:t.preventDefault();e={x:t.pageX,y:t.pageY};this._onElement=this._getOnElement(e);if(!(this._onElement!=null))return[3,2];return[4,this._selectAction(this._onElement,e)];case 1:i.sent();this._mouseStart=true;i.label=2;case 2:return[2]}}))}))};t.prototype._handleMouseMove=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){t.preventDefault();if(this._mouseStart){e={x:t.pageX,y:t.pageY};if(this._onElement!=null&&(this._onElement==="cpickerGradientB"||this._onElement==="cpickerSliderHueColor"||this._onElement==="cpickerSliderOpacity")){this._movePoint(this._onElement,e)}}return[2]}))}))};t.prototype._handleMouseEnd=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.preventDefault();if(this._mouseStart){if(this.hidebuttons&&this._onElement==="cpicker-wrapper")this._okColorPickerHandler();this._mouseStart=false;this._onElement=null}return[2]}))}))};t.prototype._handleTouchStart=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){switch(i.label){case 0:t.preventDefault();e={x:t.touches[0].pageX,y:t.touches[0].pageY};this._onElement=this._getOnElement(e);if(!(this._onElement!=null))return[3,2];return[4,this._selectAction(this._onElement,e)];case 1:i.sent();i.label=2;case 2:return[2]}}))}))};t.prototype._handleTouchMove=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){t.preventDefault();e={x:t.touches[0].pageX,y:t.touches[0].pageY};if(this._onElement!=null&&(this._onElement==="cpickerGradientB"||this._onElement==="cpickerSliderHueColor"||this._onElement==="cpickerSliderOpacity")){this._movePoint(this._onElement,e)}return[2]}))}))};t.prototype._handleTouchEnd=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.preventDefault();if(this.hidebuttons&&this._onElement==="cpicker-wrapper")this._okColorPickerHandler();this._onElement=null;return[2]}))}))};t.prototype.render=function(){var t=this;var e={top:this._stateProperties.wrapperTop+"px",left:this._stateProperties.wrapperLeft+"px",width:this._stateProperties.wrapperWidth+"px",height:this._stateProperties.wrapperHeight+"px"};return r(s,null,r("div",{class:"cpicker-container"},r("div",{class:"cpicker-wrapper",style:e,onMouseDown:function(e){return t._handleMouseDown(e)},onMouseMove:function(e){return t._handleMouseMove(e)},onMouseUp:function(e){return t._handleMouseEnd(e)},onTouchStart:function(e){return t._handleTouchStart(e)},onTouchMove:function(e){return t._handleTouchMove(e)},onTouchEnd:function(e){return t._handleTouchEnd(e)}},r("svg",{width:"100%",height:"100%"},r("defs",null,r("pattern",{id:"pattern-transparency",x:"0",y:"0",width:(2.4*this._stateProperties.vmin).toString(),height:(2.4*this._stateProperties.vmin).toString(),patternUnits:"userSpaceOnUse"},r("rect",{class:"pattern-cube",x:"0",width:(1.2*this._stateProperties.vmin).toString(),height:(1.2*this._stateProperties.vmin).toString(),y:"0"}),r("rect",{class:"pattern-cube",x:(1.2*this._stateProperties.vmin).toString(),width:(1.2*this._stateProperties.vmin).toString(),height:(1.2*this._stateProperties.vmin).toString(),y:(1.2*this._stateProperties.vmin).toString()})),r("linearGradient",{id:"cpickerHue"},r("stop",{offset:"0","stop-color":"#ffffff","stop-opacity":"1"}),r("stop",{offset:"1","stop-color":"#ffffff","stop-opacity":"0"})),r("linearGradient",{id:"cpickerBrightness",x2:"0",y2:"1"},r("stop",{offset:"0","stop-color":"#000000","stop-opacity":"0"}),r("stop",{offset:"1","stop-color":"#000000","stop-opacity":"1"})),r("linearGradient",{id:"colorSliderGradient",x2:"0",y2:"1"},r("stop",{offset:"0","stop-color":"hsl(0,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.06","stop-color":"hsl(20,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.11","stop-color":"hsl(40,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.17","stop-color":"hsl(60,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.22","stop-color":"hsl(80,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.28","stop-color":"hsl(100,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.33","stop-color":"hsl(120,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.39","stop-color":"hsl(140,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.44","stop-color":"hsl(160,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.50","stop-color":"hsl(180,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.56","stop-color":"hsl(200,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.61","stop-color":"hsl(220,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.67","stop-color":"hsl(240,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.72","stop-color":"hsl(260,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.78","stop-color":"hsl(280,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.83","stop-color":"hsl(300,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.89","stop-color":"hsl(320,100%,50%","stop-opacity":"1"}),r("stop",{offset:"0.94","stop-color":"hsl(340,100%,50%","stop-opacity":"1"}),r("stop",{offset:"1.00","stop-color":"hsl(360,100%,50%","stop-opacity":"1"})),r("linearGradient",{id:"opacitySliderGradient",x2:"0",y2:"1"},r("stop",{offset:"0","stop-color":this._stateProperties.color.hex.hex,"stop-opacity":"1"}),r("stop",{offset:"1","stop-color":this._stateProperties.color.hex.hex,"stop-opacity":"0"}))),r("rect",{id:"cpickerBackground",width:"100%",height:"100%"}),!this.hideheader?r("g",{id:"cpickerHeader"},r("rect",{id:"cpickerWhite",x:"0",y:"0",width:this._stateProperties.header.width.toFixed(3),height:this._stateProperties.header.height.toFixed(3)}),r("rect",{id:"cpickerTransparency",x:"0",y:"0",width:this._stateProperties.header.width.toFixed(3),height:this._stateProperties.header.height.toFixed(3),fill:this._stateProperties.fill.transparency}),r("rect",{id:"cpickerSelColor",x:"0",y:"0",width:this._stateProperties.header.width.toFixed(3),height:this._stateProperties.header.height.toFixed(3),fill:this._stateProperties.color.hex.hex,"fill-opacity":this._stateProperties.opacity}),r("rect",{id:"cpickerHueColor",x:this._stateProperties.header.width.toFixed(3),y:"0",width:this._stateProperties.header.width1.toFixed(3),height:this._stateProperties.header.height.toFixed(3),fill:this._stateProperties.hue}),r("text",{id:"cpickerText","text-anchor":"middle",x:this._stateProperties.header.xtext.toFixed(3),y:"8.5%","font-family":"Verdana","font-size":(2.6*this._stateProperties.vmin).toFixed(3),"font-weight":"bold",fill:this._stateProperties.colorText},this._stateProperties.colorHeadline)):null,r("g",{id:"cpickerSBColor"},r("rect",{id:"cpickerPickColor",x:"3%",y:this._stateProperties.colorArea.y.toFixed(3),width:this._stateProperties.colorArea.widthSB.toFixed(3),height:this._stateProperties.colorArea.height.toFixed(3),fill:this._stateProperties.hue}),r("rect",{id:"cpickerGradientS",x:"3%",y:this._stateProperties.colorArea.y.toFixed(3),width:this._stateProperties.colorArea.widthSB.toFixed(3),height:this._stateProperties.colorArea.height.toFixed(3),rx:"2",ry:"2",fill:this._stateProperties.fill.hue}),r("rect",{id:"cpickerGradientB",x:"3%",y:this._stateProperties.colorArea.y.toFixed(3),width:this._stateProperties.colorArea.widthSB.toFixed(3),height:this._stateProperties.colorArea.height.toFixed(3),rx:"2",ry:"2",fill:this._stateProperties.fill.brightness}),r("circle",{id:"cpickerHandler",r:"1.5%",cx:this._stateProperties.pickerHandler.x.toFixed(3),cy:this._stateProperties.pickerHandler.y.toFixed(3),fill:"none",stroke:this._stateProperties.colorText,"stroke-width":"2"})),!this.hideopacity?r("g",{id:"cpickerOpacity"},r("rect",{id:"cpickerSliderWhite",x:"72%",y:this._stateProperties.colorArea.y.toFixed(3),width:"11%",height:this._stateProperties.colorArea.height.toFixed(3)}),r("rect",{id:"cpickerTransparencySlider",x:"72%",y:this._stateProperties.colorArea.y.toFixed(3),width:"11%",height:this._stateProperties.colorArea.height.toFixed(3),fill:this._stateProperties.fill.transparency}),r("rect",{id:"cpickerSliderOpacity",x:"72%",y:this._stateProperties.colorArea.y.toFixed(3),width:"11%",height:this._stateProperties.colorArea.height.toFixed(3),fill:this._stateProperties.fill.opacity}),r("rect",{id:"cpickerOpaSliderHandler",x:"71.8%",y:this._stateProperties.opaHandlerY.toFixed(3),width:"11.4%",height:"1.2%",fill:"none",stroke:this._stateProperties.colorHandle,"stroke-width":"2"})):null,r("g",{id:"cpickerHueColor"},r("rect",{id:"cpickerSliderHueColor",x:"86%",y:this._stateProperties.colorArea.y.toFixed(3),width:"11%",height:this._stateProperties.colorArea.height.toFixed(3),fill:this._stateProperties.fill.color}),r("rect",{id:"cpickerColSliderHandler",x:"85.8%",y:this._stateProperties.hueHandlerY.toFixed(3),width:"11.4%",height:"1.2%",fill:"none",stroke:this._stateProperties.colorHandle,"stroke-width":"2"})),!this.hidebuttons?r("g",{id:"cpickerFooter"},r("rect",{id:"cpickerOkay",x:this._stateProperties.buttonArea.x.toFixed(3),y:"85%",width:this._stateProperties.buttonArea.width.toFixed(3),height:this._stateProperties.buttonArea.height.toFixed(3),fill:"none",stroke:this._stateProperties.colorHandle,"stroke-width":"2"}),r("rect",{id:"cpickerCancel",x:"53%",y:"85%",width:this._stateProperties.buttonArea.width.toFixed(3),height:this._stateProperties.buttonArea.height.toFixed(3),fill:"none",stroke:this._stateProperties.colorHandle,"stroke-width":"2"}),r("text",{id:"cpickerOkayText","text-anchor":"middle",x:this._stateProperties.buttonArea.xText1.toFixed(3),y:"93%","font-family":"Verdana","font-size":(3.5*this._stateProperties.vmin).toFixed(3),fill:this._stateProperties.buttonArea.colorText1},this.innerButtons[0]),r("text",{id:"cpickerCancelText","text-anchor":"middle",x:this._stateProperties.buttonArea.xText2.toFixed(3),y:"93%","font-family":"Verdana","font-size":(3.5*this._stateProperties.vmin).toFixed(3),fill:this._stateProperties.buttonArea.colorText2},this.innerButtons[1])):null))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["parseColorProp"],opacity:["parseOpacityProp"],buttons:["parseButtonsProp"],hidebuttons:["parseHideButtonsProp"],hideheader:["parseHideHeaderProp"],hideopacity:["parseHideOpacityProp"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--cpicker-top:10vh;--cpicker-left:10vw;--cpicker-width:70vmin;--cpicker-height:50vmin;--cpicker-background-color:#242424}.cpicker-container{position:absolute;top:0;bottom:0;right:0;left:0;overflow:hidden}.cpicker-wrapper{margin:0;padding:0;position:relative;z-index:1000}#cpickerBackground{fill:var(--cpicker-background-color)}#cpickerSliderWhite,#cpickerWhite{fill:#ddd;fill-opacity:.4}.pattern-cube{fill:#022460;fill-opacity:.4}"},enumerable:true,configurable:true});return t}())}}}));