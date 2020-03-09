import{r as t,h as i,g as s,H as h}from"./p-1eafec4e.js";import{k as e,w as a,c as l,l as r,a as n,u as o,t as c,b as d,d as u,e as f,m as p,n as x,r as m,o as y,p as g,q as b,s as M,h as L,v as w,j as k,x as z,y as _,z as v}from"./p-39535a7c.js";import{d as P,a as F,b as S,c as T,e as E,g as j}from"./p-a5313538.js";const A=class{constructor(i){t(this,i),this.toggle=!1,this._update=!1}parseTitleProp(t){this.innerTitle=t||null}parseSubTitleProp(t){this.innerSubTitle=t||null}parseXTitleProp(t){this.innerXTitle=t||null}parseYTitleProp(t){this.innerYTitle=t||null}parseDataProp(t){const i=t||null;let s=[],h={status:200};if(null!=i){let t=JSON.parse(i),e=[];if(t instanceof Array?e=t:e.push(t),this._axisType=[],this._legendNames=[],this._legendColors=[],this._legendThicknesses=[],e.length>=1&&Object.keys(e[0]).length>=1){for(let t=0;t<e.length;t++)if(e[t].dataPoints){let i={};i.color=e[t].color?e[t].color:"#000000",i.name=e[t].name?e[t].name:null,i.lineThickness=e[t].lineThickness?e[t].lineThickness:1,i.markerType=e[t].markerType?e[t].markerType:"none",i.markerColor=e[t].markerColor?e[t].markerColor:i.color,i.markerSize=e[t].markerSize?e[t].markerSize:10,i.dataPoints=e[t].dataPoints,this._legendThicknesses.push(i.lineThickness),this._legendColors.push(i.color),null!==i.name&&this._legendNames.push(i.name);const a=Object.keys(i.dataPoints[0]);-1==a.indexOf("label")&&-1==a.indexOf("x")?(s=null,h={status:400,message:"Error: no 'x' or 'label' data in dataset: "+t+" of data property"}):-1===a.indexOf("y")?(s=null,h={status:400,message:"Error: no y data in dataset: "+t+" of data property"}):(0===t&&(-1!=a.indexOf("label")&&this._axisType.push("label"),-1!=a.indexOf("x")&&this._axisType.push("x"),this._axisType.push("y")),s.push(i))}else s=null,h={status:400,message:"Error: no dataPoints object in dataset: "+t+" of data property"};200===h.status&&s&&s.length>1&&s.length!==this._legendNames.length&&(s=null,h={status:400,message:"Error: name attribute missing in some datasets"})}else s=null,h={status:400,message:"Error: no data provided"}}else s=null,h={status:400,message:"Error: no data property"};if(200===h.status){const t=e(s,this._axisType);s=t.dataSets,null===s&&(h={status:400,message:"Error: "+t.message})}this.status=h,this._label=200===this.status.status&&"label"===this._axisType[0],this.innerData=200===this.status.status?[...s]:null}parseStyleProp(t){this.innerStyle=t||null}parseAnimationProp(t){this.innerAnimation=t||!1}parseBorderProp(t){this.innerBorder=t||!1}parseDelayProp(t){this.innerDelay=t?parseFloat(t):100}init(){return Promise.resolve(this._init())}getStatus(){return Promise.resolve(this.status)}renderChart(){return Promise.resolve(this._renderChart())}async getWindowSize(){return a(this.window)}async getCssProperties(){return this._prop}async componentWillLoad(){this.window=window,this._prop={},await this._init()}componentDidLoad(){this._element=this.el.shadowRoot,200===this.status.status&&this._renderChart()}async _init(){if(this.document=this.window.document,this.root=this.document.documentElement,this.window.addEventListener("resize",P(this,this._windowResize,100,!1),!1),this._selMarker=[],this._axisType=[],this._legendRect={},this._update=!1,this._dataColor=!1,this._yaxis={},this._xaxis={},this._legendRect={},this._showTarget=0,this._mouseStart=!1,this._xmlns="http://www.w3.org/2000/svg",this._xlink="http://www.w3.org/1999/xlink",this.parseTitleProp(this.ctitle?this.ctitle:null),this.parseSubTitleProp(this.subtitle?this.subtitle:null),this.parseXTitleProp(this.xtitle?this.xtitle:null),this.parseYTitleProp(this.ytitle?this.ytitle:null),this.parseAnimationProp(!!this.animation&&this.animation),this.parseBorderProp(!!this.cborder&&this.cborder),this.parseStyleProp(this.cstyle?this.cstyle:null),this.parseDelayProp(this.delay?this.delay:"100"),this._prop.topPlot=this._prop.topPlot?this._prop.topPlot:this._setPropertyValue("--chart-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-top")),this._prop.leftPlot=this._prop.leftPlot?this._prop.leftPlot:this._setPropertyValue("--chart-left",this.window.getComputedStyle(this.root).getPropertyValue("--chart-left")),this._prop.widthPlot=this._prop.widthPlot?this._prop.widthPlot:this._setPropertyValue("--chart-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-width")),this._prop.heightPlot=this._prop.heightPlot?this._prop.heightPlot:this._setPropertyValue("--chart-height",this.window.getComputedStyle(this.root).getPropertyValue("--chart-height")),this._prop.bgColor=this._prop.bgColor?this._prop.bgColor:this._setPropertyValue("--chart-background-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-background-color")),this._prop.tiColor=this._setPropertyValue("--chart-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-color")),this._prop.stColor=this._setPropertyValue("--chart-subtitle-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-color")),this._prop.ftFamily=this._setPropertyValue("--chart-font-family",this.window.getComputedStyle(this.root).getPropertyValue("--chart-font-family")),this._prop.ftTiSize=this._setPropertyValue("--chart-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-font-size")),this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size")),this._prop.axColor=this._setPropertyValue("--chart-axis-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-color")),this._prop.lnColor=this._setPropertyValue("--chart-line-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-line-color")),this._prop.atColor=this._setPropertyValue("--chart-axis-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-color")),this._prop.lbColor=this._setPropertyValue("--chart-label-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-color")),this._prop.ftLbSize=this._setPropertyValue("--chart-label-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-font-size")),this._prop.ftATSize=this._setPropertyValue("--chart-axis-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-font-size")),this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size")),this._prop.tickX=this._setPropertyValue("--chart-tick-x-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-x-length")),this._prop.tickY=this._setPropertyValue("--chart-tick-y-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-y-length")),this._prop.gridX=this._setPropertyValue("--chart-grid-x",this.window.getComputedStyle(this.root).getPropertyValue("--chart-grid-x")),this._prop.xInterval=this._setPropertyValue("--chart-axis-x-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-interval")),this._prop.yInterval=this._setPropertyValue("--chart-axis-y-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-interval")),this._prop.xZero=this._setPropertyValue("--chart-axis-x-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-zero")),this._prop.yZero=this._setPropertyValue("--chart-axis-y-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-zero")),this._prop.animDuration=this._setPropertyValue("--chart-animation-duration",this.window.getComputedStyle(this.root).getPropertyValue("--chart-animation-duration")),this._prop.legendTop=this._setPropertyValue("--chart-legend-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-top")),this._prop.ftLgSize=this._setPropertyValue("--chart-legend-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-font-size")),this._prop.bdColor=this._setPropertyValue("--chart-border-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-color")),this._prop.bdWidth=this._setPropertyValue("--chart-border-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-width")),null!=this.innerStyle){const t=await F(this.innerStyle);null!=t&&(this._prop.leftPlot=t.left?t.left:this._prop.leftPlot,this._prop.topPlot=t.top?t.top:this._prop.topPlot,this._prop.widthPlot=t.width?t.width:this._prop.widthPlot,this._prop.heightPlot=t.height?t.height:this._prop.heightPlot,this._prop.bgColor=t.backgroundcolor?t.backgroundcolor:this._prop.bgColor)}this.parseDataProp(this.data?this.data:null),this._wSize=await this.getWindowSize(),this._setContainerSize()}_setContainerSize(){this.w_width=S(this._prop.widthPlot,this._wSize.width,"0"),this.w_height=S(this._prop.heightPlot,this._wSize.height,"0"),this.el.style.setProperty("--top",this._prop.topPlot),this.el.style.setProperty("--left",this._prop.leftPlot),this.el.style.setProperty("--width",`${this.w_width}px`),this.el.style.setProperty("--height",`${this.w_height}px`),this.el.style.setProperty("--backgroundcolor",`${this._prop.bgColor}`),this._titleRect=null,this._chartRect={top:0,left:0,width:this.w_width,height:this.w_height}}_setPropertyValue(t,i){return"--chart-background-color"===t?i||"#ffffff":"color"===t.slice(-5)?i||"#000000":"border-width"===t.slice(-12)?i||"1":"font-size"===t.slice(-9)?i||"10px":"font-family"===t.slice(-11)?i||"Verdana":"grid"===t.slice(-6).substring(0,4)?i||"false":"zero"===t.slice(-4)?i||"true":"legend-top"===t.slice(-10)?i||"false":"duration"===t.slice(-8)?i||"1s":i||"0"}async _windowResize(){this._wSize=await this.getWindowSize(),this._setContainerSize(),this._update=!0,this.status&&200===this.status.status&&this._renderChart()}_createMarkers(){let t=l("defs",this.svg),i={id:"marker-circle",viewbox:"0 0 10 10"},s="M0,5 A5,5 0 1,1 10,5 A5,5 0 0,1 0,5 Z";r(t,s,i),i.id="marker-square",s="M0,0 L10,0 L10,10 L0,10 Z",r(t,s,i),i.id="marker-triangle",s="M5,0 L10,10 L0,10 Z",r(t,s,i),i.id="marker-cross",s="M0,2 L2,0 L5,3 L8,0 L10,2 L7,5 L10,8 L8,10 L5,7 L2,10 L0,8 L3,5 Z",r(t,s,i),i.id="marker-plus",s="M0,4 L4,4 L4,0 L6,0 L6,4 L10,4 L10,6 L6,6 L6,10 L4,10 L4,6 L0,6 Z",r(t,s,i)}_createTitle(){if(null!=this.innerTitle){let t,i;this._update?(t=this.svg.querySelector("#linechart-title"),t.removeAttributeNS(null,"transform")):(t=l("g",this.svg),t.setAttributeNS(null,"id","linechart-title"));let s={id:"linechart-title-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftTiSize,fill:this._prop.tiColor,anchor:"middle"},h={x:Math.round(this.w_width/2),y:T(this._prop.ftTiSize)+10};if(i=this._update?o(this.svg,s.id,s.anchor,h):n(t,this.innerTitle,h,s),null!=this.innerSubTitle){const e=i.getBoundingClientRect();s.id="linechart-subtitle-text",s.fontSize=this._prop.ftSTSize,s.fill=this._prop.stColor;let a=Math.ceil(e.bottom-this.borderBB.top)+5;h={x:Math.round(this.w_width/2),y:a+10},this._update?o(this.svg,s.id,s.anchor,h):n(t,this.innerSubTitle,h,s)}const e=t.getBoundingClientRect();let a=c(e.width,this.w_width,10),r="translate("+Math.round(10-e.left*a)+",0) scale("+a+","+a+")";1!=a&&t.setAttributeNS(null,"transform",r);const d=t.getBoundingClientRect();this._titleRect={left:d.left-this.borderBB.left,top:d.top-this.borderBB.top,width:d.width,height:d.height}}}_createAxis(){let t,i=T(this._prop.tickX),s=T(this._prop.tickY),h=parseFloat(this._prop.xInterval),e=parseFloat(this._prop.yInterval);this._update?t=this.svg.querySelector("#linechart-axes"):(t=l("g",this.svg),t.setAttributeNS(this._xmlns,"id","linechart-axes")),this._initChartRect(),this.innerData.length>1&&this._createLegend();let a=this._createTitleY(),r=this._createTitleX();this._lenY=d(this.innerData,"y",e,E(this._prop.yZero)),this._lenX=this._label?d(this.innerData,"label",h):d(this.innerData,"x",h,E(this._prop.xZero));let c=this._labelSize(this._lenY,0);this._x_axy=3+c.width+2+s,this._nXlines=this.innerData[0].dataPoints.length,this._lenX.interval&&"number"===this._lenX.type&&(this._nXlines=Math.abs(Math.floor(this._lenX.length/this._lenX.interval))+1);let p=this._chartRect.width-this._x_axy;this._xInterval=Math.floor(p/this._nXlines),this._lenX.interval&&"number"===this._lenX.type&&(this._xInterval=p/(this._nXlines-1));let x=this._xInterval;this._lenX.interval&&"string"===this._lenX.type&&(this._nXlines=Math.abs(Math.floor(this.innerData[0].dataPoints.length/this._lenX.interval)),x=p/this._nXlines),this._labelRotate=!1;let m=this._labelSize(this._lenX,0);m.width>x-10&&(m=this._labelSize(this._lenX,-80),this._labelRotate=!0),this._y_axy=10+m.height+3+i,this._yaxis={},this._yaxis.left=this._chartRect.left+this._x_axy,this._yaxis.width=0,this._yaxis.top=this._chartRect.top,this._yaxis.height=this._chartRect.height-this._y_axy;let y={id:"linechart-yaxis",stroke:this._prop.axColor,strokeWidth:"1"},g={x:this._yaxis.left,y:this._yaxis.top},b={x:this._yaxis.left+this._yaxis.width,y:this._yaxis.top+this._yaxis.height};if(this._update?f(this.svg,y.id,g,b):u(t,g,b,y),null!=a){let t="translate(0,0)";a.setAttributeNS(null,"transform",t);let i=a.getBoundingClientRect();t="translate(0,"+-Math.round(i.top-this.borderBB.top+i.height/2-(this._yaxis.top+this._yaxis.height/2))+")",a.setAttributeNS(null,"transform",t)}let M={id:"linechart-ylabel0",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"end"},L=Math.floor(parseFloat(this._prop.ftLbSize.split("px")[0])/2)-2;this._nYlines=Math.abs(Math.floor(this._lenY.length/this._lenY.interval))+1;for(let l=0;l<this._nYlines;l++){let i=this._lenY.top-l*Math.abs(this._lenY.interval);y.id="linechart-yLine"+i.toString(),y.stroke=this._prop.lnColor,l===this._nYlines-1&&(y.id="linechart-xaxis",y.stroke=this._prop.axColor),M.id="linechart-ylabel"+i.toString();let h=k(this._yaxis,this._lenY,i),e={x:this._yaxis.left,y:h},a={x:this._chartRect.left+this._chartRect.width,y:h};if(this._update?f(this.svg,y.id,e,a):u(t,e,a,y),s>0){let a={x:this._yaxis.left-s,y:h};y.id="linechart-ytick"+i.toString(),this._update?f(this.svg,y.id,e,a):u(t,e,a,y)}let r={x:this._yaxis.left-s-2,y:h+L};this._update?o(this.svg,M.id,M.anchor,r):n(t,i.toString(),r,M)}let w=this.svg.querySelector("#linechart-xaxis"),z=parseFloat(w.getAttribute("y1")),_=Math.floor(this._xInterval/2);this._lenX.interval&&"number"===this._lenX.type&&(_=0),M={id:"linechart-xlabel",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"middle"},L=Math.floor(T(this._prop.ftLbSize));for(let l=0;l<this._nXlines;l++){let s,h,e,a=this._lenX.bottom+l*Math.abs(this._lenX.interval),r={x:this._yaxis.left+_,y:z};if(E(this._prop.gridX)){y.id="linechart-xLine"+l.toString(),this._lenX.interval&&"number"===this._lenX.type&&(y.id="linechart-xLine"+a.toString()),this._lenX.interval&&"string"===this._lenX.type&&(y.id="linechart-xLine"+(l*this._lenX.interval).toString()),y.stroke=this._prop.lnColor;let i={x:this._yaxis.left+_,y:this._yaxis.top};(!this._lenX.interval||l>=1||"number"!=this._lenX.type)&&(this._update?f(this.svg,y.id,r,i):u(t,r,i,y))}if(i>0){let s={x:this._yaxis.left+_,y:z+i};y.id="linechart-xtick"+l.toString(),this._lenX.interval&&"number"===this._lenX.type&&(y.id="linechart-xtick"+a.toString()),this._lenX.interval&&"string"===this._lenX.type&&(y.id="linechart-xtick"+(l*this._lenX.interval).toString()),this._update?f(this.svg,y.id,r,s):u(t,r,s,y)}s="string"===this._lenX.type?this.innerData[0].dataPoints[l*(void 0!==this._lenX.interval?this._lenX.interval:1)][this._axisType[0]]:a.toString(),M.id="linechart-xlabel"+s;let c=null;this._labelRotate?(M.anchor="end",e={x:this._yaxis.left+_,y:z+i+3},c="rotate(-80,"+e.x+","+e.y+")"):(M.anchor="middle",e={x:this._yaxis.left+_,y:z+i+L},c="rotate(0,"+e.x+","+e.y+")"),h=this._update?o(this.svg,M.id,M.anchor,e):n(t,s,e,M),null!=c&&h.setAttributeNS(null,"transform",c),_+=this._lenX.interval&&"string"===this._lenX.type?this._xInterval*this._lenX.interval:this._xInterval}if(null!=r){r.setAttributeNS(null,"transform","translate(0,0)");let t=w.getBoundingClientRect(),i=r.getBoundingClientRect(),s=-Math.round(i.left+i.width/2-(t.left+t.width/2));Math.abs(s)>0&&r.setAttributeNS(null,"transform","translate("+s+",0)")}}_labelSize(t,i){let s,h={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,fill:this._prop.lbColor,anchor:"start"};if(t.label)s=t.label;else{s=t.top.toString();let i=t.bottom.toString();i.length>s.length&&(s=i)}let e=n(this.svg,s,{x:0,y:0},h);0!=i&&e.setAttributeNS(null,"transform","rotate("+i+",0,0)");let a=e.getBoundingClientRect();return this.svg.removeChild(e),{width:Math.ceil(a.width),height:Math.ceil(a.height)}}_initChartRect(){this._chartRect.top=20,null!=this._titleRect&&(this._chartRect.top+=Math.round(this._titleRect.height)),this._chartRect.left=0,this._chartRect.width=this.w_width-this._chartRect.left-20,this._chartRect.height=this.w_height-this._chartRect.top}_createLegend(){let t,i={},s={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLgSize,anchor:"start"},h=p(this.svg,this.w_width,this._legendNames,this._legendColors,this._legendThicknesses,s);i.left=h.bBox.left,i.width=h.bBox.width,E(this._prop.legendTop)?(i.top=this._chartRect.top+15,this._chartRect.top+=Math.ceil(h.bBox.height)+15):i.top=Math.floor(this._chartRect.top+this._chartRect.height-h.bBox.height),i.height=h.bBox.height,this._chartRect.height-=Math.floor(h.bBox.height)+10,this._update?(t=this.svg.querySelector("#linechart-legend"),m(t),x(t,this._legendNames,this._legendColors,this._legendThicknesses,h,this.w_width,i.top,s)):(t=l("g",this.svg),t.setAttributeNS(null,"id","linechart-legend"),x(t,this._legendNames,this._legendColors,this._legendThicknesses,h,this.w_width,i.top,s))}_createTitleY(){let t,i={id:"linechart-ytitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerYTitle){let s;this._update?t=this.svg.querySelector("#linechart-ytitle"):(t=l("g",this.svg),t.setAttributeNS(null,"id","linechart-ytitle"));let h=this._chartRect.top+Math.round(this._chartRect.height/2),e={x:5+parseFloat(this._prop.ftATSize.split("px")[0]),y:h};s=this._update?o(this.svg,i.id,i.anchor,e):n(t,this.innerYTitle,e,i);let a="rotate(-90 "+e.x.toString()+" "+e.y.toString()+")";s.setAttributeNS(null,"transform",a);let r=t.getBoundingClientRect();return this._chartRect.left=Math.ceil(r.right-this.borderBB.left),this._chartRect.width-=Math.ceil(r.right-this.borderBB.left),t}return null}_createTitleX(){let t={id:"linechart-xtitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerXTitle){let i;this._update?i=this.svg.querySelector("#linechart-xtitle"):(i=l("g",this.svg),i.setAttributeNS(null,"id","linechart-xtitle"));let s=this._chartRect.top+this._chartRect.height-15,h={x:Math.round(this._chartRect.left+this._chartRect.width/2),y:s};this._update?o(this.svg,t.id,t.anchor,h):n(i,this.innerXTitle,h,t);let e=i.getBoundingClientRect();return this._chartRect.height-=Math.floor(e.height),i}return null}_createLine(){let t;this._Points=[],this._update?t=this.svg.querySelector("#linechart-data"):(t=l("g",this.svg),t.setAttributeNS(null,"id","linechart-data"));for(let i=0;i<this.innerData.length;i++){let s,h,e=[],a={};a.stroke=this.innerData[i].color,a.strokeWidth=this.innerData[i].lineThickness.toString(),a.fill="none",a.id="linechart-data-"+i.toString(),this._xaxis.left=this._yaxis.left,this._xaxis.width=this._chartRect.left+this._chartRect.width-this._xaxis.left;let l=Math.floor(this._xInterval/2);for(let n=0;n<this.innerData[i].dataPoints.length;n++){a.stroke=this.innerData[i].dataPoints[n].color?this.innerData[i].dataPoints[n].color:this.innerData[i].color;let h={};h.y=k(this._yaxis,this._lenY,this.innerData[i].dataPoints[n].y),h.x=this._lenX.interval&&"number"===this._lenX.type?z(this._xaxis,this._lenX,this.innerData[i].dataPoints[n].x):this._xaxis.left+l,e.push(h),this._placeMarker("marker-"+this.innerData[i].markerType,t,h,i,n,this.innerData[i].markerSize/10,this.innerData[i].markerColor),0===n?s=h.x.toString()+","+h.y.toString():s+=" "+h.x.toString()+","+h.y.toString(),l+=this._xInterval}let r=_(e);r>0?(a.strokeLinejoin="round",a.strokeLinecap="round",a.strokeMiterlimit="10",h=this._update?g(this.svg,a.id,s):y(t,s,a),this.innerAnimation&&(h.setAttributeNS(null,"stroke-dasharray",r.toString()+","+r.toString()),h.setAttributeNS(null,"stroke-dashoffset",r.toString()),this._setAnimation(h,r.toString(),this._prop.animDuration))):(a.strokeWidth="2",a.fill=a.stroke,a.fillOpacity="0.75",h=this._update?M(this.svg,a.id,e[0],5):b(t,e[0],5,a)),this._Points.push(e)}}_setAnimation(t,i,s){let h={attributeName:"stroke-dashoffset"};h.from=i,h.to="0",h.dur=s,h.fill="freeze",L(t,h)}_placeMarker(t,i,s,h,e,a,r){let n,o;this._update?(o=i.querySelector("#"+t+"-g-"+h.toString()+"-"+e.toString()),n=o.querySelector("#"+t+"-"+h.toString()+"-"+e.toString())):(o=l("g",i),n=l("use",o)),o.setAttributeNS(null,"id",t+"-g-"+h.toString()+"-"+e.toString()),o.setAttribute("style","fill:"+r),n.setAttributeNS(this._xlink,"xlink:href","#"+t),n.setAttributeNS(null,"id",t+"-"+h.toString()+"-"+e.toString()),n.setAttributeNS(null,"x",(s.x-5).toString()),n.setAttributeNS(null,"y",(s.y-5).toString()),n.setAttributeNS(null,"width","10"),n.setAttributeNS(null,"height","10"),this._scaleMarker(n,a,s)}_scaleMarker(t,i,s){let h=1-i,e={};e.x=h*s.x,e.y=h*s.y;let a="translate("+e.x.toString()+","+e.y.toString()+") scale("+i+")";t.setAttributeNS(null,"transform",a)}_highlightMarker(t,i){let s=t.getAttributeNS(null,"transform"),h={};h.x=parseFloat(t.getAttributeNS(null,"x"))+5,h.y=parseFloat(t.getAttributeNS(null,"y"))+5;let e=1;null!=s&&(e=parseFloat(s.split("scale(")[1].slice(0,-1))),this._scaleMarker(t,i?e/1.5:1.5*e,h)}_waitRemoveLabel(){this._mouseStart&&setTimeout(()=>{this._removeLabel(this.svg),this._mouseStart=!1,this._showTarget=0},1200)}_removeLabel(t){let i=t.querySelectorAll("#linechart-label-value");if(i.length>0)for(let s=0;s<i.length;s++)m(i[s]),t.removeChild(i[s]);if(this._selMarker.length>0)for(let s=0;s<this._selMarker.length;s++){let t=this.svg.querySelector(this._selMarker[s]);this._highlightMarker(t,!0)}this._selMarker=[]}_handleTouchDown(t){t.preventDefault(),this._mouseStart=!0,this._handleEventTarget(t,{x:t.touches[0].pageX,y:t.touches[0].pageY})}_handleMouseDown(t){t.preventDefault(),this._mouseStart=!0,this._handleEventTarget(t,{x:t.pageX,y:t.pageY})}_handleTouchUp(t){t.preventDefault(),this._waitRemoveLabel()}_handleMouseUp(t){t.preventDefault(),this._waitRemoveLabel()}_handleEventTarget(t,i){this._showTarget=t.target,i.x-=this.borderBB.left,i.y-=this.borderBB.top,this._removeLabel(this.svg);let s=v(this._Points,i),h=this.innerData[s.line].dataPoints[s.index],e="#marker-"+this.innerData[s.line].markerType+"-";e+=s.line.toString()+"-"+s.index.toString(),this._selMarker.push(e);let a,l=this.svg.querySelector(e);this._highlightMarker(l,!1),"number"==typeof h.x&&(a=h.x.toString()),this._label&&(a=h.label),this._label||"string"!=typeof h.x||(a=h.x),a=a+" : "+h.y.toString();let r=1.2*parseFloat(this._prop.ftLbSize.split("px")[0]),n={fontFamily:this._prop.ftFamily,fontSize:r.toString()+"px",fill:this._prop.lbColor,anchor:"middle"};w(this.svg,a,s,this.innerData[s.line].color,n)}async _renderChart(){this.container=this._element.querySelector("#div-linechart-container"),this.chart=this._element.querySelector("#div-linechart-chart"),this.svg=this._element.querySelector("#svg-linechart"),this.borderEl=this.svg.querySelector("#svg-border-rect"),this.borderBB=await j(this.borderEl,this.innerDelay),0==this.borderBB.top&&0==this.borderBB.left&&0==this.borderBB.width&&0==this.borderBB.height||(this.container.addEventListener("touchstart",this._handleTouchDown.bind(this),!1),this.container.addEventListener("touchend",this._handleTouchUp.bind(this),!1),this.container.addEventListener("mousedown",this._handleMouseDown.bind(this),!1),this.container.addEventListener("mouseup",this._handleMouseUp.bind(this),!1),this.innerBorder&&this.borderEl.classList.remove("hidden"),this._createMarkers(),null!=this.innerTitle&&this.innerTitle.length>0&&this._createTitle(),this._createAxis(),this._createLine())}render(){let t=[];if(200===this.status.status){let s=`0 0 ${this.w_width.toString()} ${this.w_height.toString()}`;t=[...t,i("div",{id:"div-linechart-container"},i("div",{id:"div-linechart-chart"},i("svg",{id:"svg-linechart",width:this.w_width.toString(),height:this.w_height.toString(),viewBox:s},i("rect",{id:"svg-border-rect",class:"border-rect hidden",x:"0",y:"0",width:this.w_width.toString(),height:this.w_height.toString(),stroke:this._prop.bdColor,"stroke-width":this._prop.bdWidth,fill:"none","fill-opacity":"0"}))))]}else t=[...t,i("div",{id:"div-error-message"},i("p",{id:"p-error-message"},this.status.message))];return i(h,null,t)}get el(){return s(this)}static get watchers(){return{ctitle:["parseTitleProp"],subtitle:["parseSubTitleProp"],xtitle:["parseXTitleProp"],ytitle:["parseYTitleProp"],data:["parseDataProp"],cstyle:["parseStyleProp"],animation:["parseAnimationProp"],cborder:["parseBorderProp"],delay:["parseDelayProp"]}}static get style(){return":host{--height:200px;--width:300px;--top:30px;--left:10px;--backgroundcolor:#fff}#div-linechart-container{position:relative;left:0;top:0;width:100%;height:calc(var(--height) + var(--top));z-index:1}#div-linechart-chart{position:relative;left:var(--left);top:var(--top);width:var(--width);height:var(--height);background-color:var(--backgroundcolor);z-index:1}.hidden{visibility:hidden}#div-error-message{background-color:#f89393;position:absolute;top:0;left:0;margin:0 auto;width:var(--width);height:60px;line-height:60px;text-align:left;padding-left:10px;font-size:15px;font-family:Verdana}#p-error-message{display:inline-block;vertical-align:middle;line-height:normal}"}};export{A as jeep_linechart};