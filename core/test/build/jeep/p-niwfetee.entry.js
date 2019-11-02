import{r as t,h as i,g as s}from"./p-0371218d.js";class e{constructor(t=0,i=0){this.x=t,this.y=i}toString(){return this.x+","+this.y}toFixed(t){return this.x%1==0&&this.y%1==0?this.x+","+this.y:this.x.toFixed(t)+","+this.y.toFixed(t)}fromString(t){let i=t.split(","),s=!1;return 2===i.length&&(this.x=Number(i[0]),this.y=Number(i[1]),s=!0),s}clone(){let t=new e;return t.x=this.x,t.y=this.y,t}multNumber(t){let i=new e;return i.x=this.x*t,i.y=this.y*t,i}multPoint(t){let i=new e;return i.x=this.x*t.x,i.y=this.y*t.y,i}multMatrix(t){let i=new e;return i.x=t[0][0]*this.x+t[0][1]*this.y,i.y=t[1][0]*this.x+t[1][1]*this.y,i}addPoint(t){let i=new e;return i.x=this.x+t.x,i.y=this.y+t.y,i}substractPoint(t){let i=new e;return i.x=this.x-t.x,i.y=this.y-t.y,i}middlePoint(t){let i=new e;return i.x=(this.x+t.x)/2,i.y=(this.y+t.y)/2,i}distance(t){let i=new e;return i.x=t.x-this.x,i.y=t.y-this.y,i}dotProduct(t,i){return(i.x-this.x)*(t.x-this.x)+(i.y-this.y)*(t.y-this.y)}isPointOnLine(t,i){let s=!1,e=this.scalarDistance(t),h=this.dotProduct(t,i)/(e*e),r=this.addPoint(t.substractPoint(this).multNumber(h)).scalarDistance(i);return Math.abs(r)<1e-4&&(s=!0),s}scalarDistance(t){return Math.sqrt((t.x-this.x)*(t.x-this.x)+(t.y-this.y)*(t.y-this.y))}atDistancePoint(t,i){let s=this.distance(t).multNumber(i);return this.addPoint(s)}}class h{constructor(t=null){null!=t&&(this._size=t,this.zeros())}set size(t){this._size=t,this.zeros()}get size(){return this._size}zeros(){let t,i=[];switch("number"==typeof this._size&&(t=1),this._size instanceof Array&&(t=this._size.length),t){case 1:let t=this._size instanceof Array?this._size[0]:this._size;for(let s=0;s<t;s++)i=[...i,0];break;case 2:for(let s=0;s<this._size[0];s++){let t=[];for(let i=0;i<this._size[1];i++)t=[...t,0];i=[...i,t]}break;default:i=[]}this.matrix=i}identity(){let t,i=[];switch("number"==typeof this._size&&(t=1),this._size instanceof Array&&(t=this._size.length),t){case 1:let t=this._size instanceof Array?this._size[0]:this._size;for(let s=0;s<t;s++)i=0===s?[...i,1]:[...i,0];break;case 2:for(let s=0;s<this._size[0];s++){let t=[];for(let i=0;i<this._size[1];i++)t=s===i?[...t,1]:[...t,0];i=[...i,t]}break;default:i=[]}this.matrix=i}clone(){let t,i=new h(this._size),s=[];switch("number"==typeof this._size&&(t=1),this._size instanceof Array&&(t=this._size.length),t){case 1:let t=this._size instanceof Array?this._size[0]:this._size;for(let i=0;i<t;i++)s=[...s,this.matrix[i]];break;case 2:for(let i=0;i<this._size[0];i++)s=[...s,this.matrix[i]];break;default:s=[]}return i.matrix=s,i}circularPermuteRow(t){let i,s=t.index?t.index:null,e=!!t.rowIndex&&t.rowIndex,h=[];switch("number"==typeof this._size&&(i=1),this._size instanceof Array&&(i=this._size.length),i){case 1:let t=this._size instanceof Array?this._size[0]:this._size;for(let s=0;s<t;s++)h=[...h,this.matrix[s]];let i=null!=s?s:0;for(;i>0;){let t=h.shift();h=[...h,t],i--}break;case 2:for(let s=0;s<this._size[0];s++)h=[...h,this.matrix[s]];for(let r=0;r<this._size[0]-1;r++){let t=e&&this._size[0]===this._size[1]?r+1:null!=s?s:0;for(;t>0;){let i=h[r].shift();h[r]=[...h[r],i],t--}}break;default:h=[]}this.matrix=h}flipRow(){let t=[],i=this._size instanceof Array?this._size[0]:this._size;for(let s=0;s<i;s++)t=[...t,this.matrix[s]];this.matrix=t.reverse()}multiply(t){let i,s,e,r;if("number"==typeof this._size?(i=this._size,s="number"==typeof t.size?t.size:t.size[0]?t.size[0]:null,e=t.size[1]?null:1):(i=this._size[0],s=t.size[1]?t.size[1]:t.size[0]?t.size[0]:t.size,e=(r=t.size[1]?t.size[0]:1)===(e=this._size[1]?this._size[1]:1)?e:null),null===i||null===s||null===e)return null;let l=new h([i,s]);if(l.zeros(),1===e){let e=this.matrix,h=t.matrix;for(let t=0;t<i;t++)for(let i=0;i<s;i++)l.matrix[t][i]=l.matrix[t][i]+e[t]*h[i]}else for(let h=0;h<i;h++)for(let i=0;i<s;i++)for(let s=0;s<e;s++)l.matrix[h][i]=l.matrix[h][i]+this.matrix[h][s]*t.matrix[s][i];return l}multiplyByVectorPoints(t){let i=[],s=this.matrix;if("number"==typeof this._size){if(this._size!=t.length)return null;i[0]=new e;for(let e=0;e<this._size;e++)i[0]=i[0].addPoint(t[e].multNumber(s[e]))}else{let h=this._size[1]?this._size[0]:1,r=this._size[1]?this._size[1]:this._size[0];if(r!=t.length)return null;for(let l=0;l<h;l++){i[l]=new e;for(let e=0;e<r;e++)i[l]=i[l].addPoint(t[e].multNumber(s[l][e]))}}return i}}const r=t=>t.toUpperCase()!=t.toLowerCase(),l=(t,i)=>{let s={},e=t[0].isPointOnLine(t[3],t[1]),r=t[0].isPointOnLine(t[3],t[2]);if(e&&r){s.C1=[],s.C2=[],s.C1=[...s.C1,t[0]];let e=t[0].addPoint(t[3].substractPoint(t[0]).multNumber(i)),h=t[0].addPoint(e.substractPoint(t[0]).multNumber(1/3)),r=t[0].addPoint(e.substractPoint(t[0]).multNumber(2/3));s.C1=[...s.C1,h],s.C1=[...s.C1,r],s.C1=[...s.C1,e],s.C2=[...s.C2,e],h=e.addPoint(t[3].substractPoint(e).multNumber(1/3)),r=e.addPoint(t[3].substractPoint(e).multNumber(2/3)),s.C2=[...s.C2,h],s.C2=[...s.C2,r],s.C2=[...s.C2,t[3]]}else{let e=new h([4,4]);e.identity();let r=i-1;e.matrix[1][0]=-r,e.matrix[2][0]=r*r,e.matrix[3][0]=-r*r*r,e.matrix[1][1]=i,e.matrix[2][1]=-2*r*i,e.matrix[3][1]=3*r*r*i,e.matrix[2][2]=i*i,e.matrix[3][2]=-3*r*i*i,e.matrix[3][3]=i*i*i,s.C1=e.multiplyByVectorPoints(t),e.circularPermuteRow({rowIndex:!0}),e.flipRow(),s.C2=e.multiplyByVectorPoints(t)}return s},n=t=>{let i="";for(let s=0;s<t.length-1;s+=3)0===s&&(i=i.concat("M ").concat(t[s].toFixed(2)).concat(" ")),i=(i=(i=i.concat("C ").concat(t[s+1].toFixed(2)).concat(" ")).concat(t[s+2].toFixed(2)).concat(" ")).concat(t[s+3].toFixed(2)).concat(" ");return i.trim()},a=(t,i,s,e)=>{let h=[];return h=[...h,t],h=[...h,i],h=[...h,s],[...h,e]},u=t=>{const i=t.cBz.split("C");let s=[];for(let h=0;h<i.length;h++){0===h&&"M"===i[h].charAt(0)&&(i[h]=i[h].slice(1));let t=i[h].trim().split(" ");if(t.length>0)for(let i=0;i<t.length;i++){let h=new e;h.fromString(t[i])&&(s=[...s,h])}}return s},o=(t,i)=>{let s=[];return s=c(t,i),n(s)},c=(t,i)=>{let s=t,e=[];if(i>0)for(let h=0;h<i;h++){s.splice(0,1);for(let t=0;t<2;t++)e=s.shift(),s=[...s,e];e=s[0],s=[...s,e]}else for(let h=0;h<Math.abs(i);h++){s.splice(-1);for(let t=0;t<2;t++)s.splice(0,0,s.splice(-1)[0]);s.splice(0,0,s[s.length-1])}return s},m=(t,i,s,e)=>{let h=t.scalarDistance(e);return(t.scalarDistance(i)+i.scalarDistance(s)+s.scalarDistance(e)+h)/2},f=(t,i,s)=>{let e=t,h=i,r=e.slice(-1)[0];for(let l=0;l<s;l++)e=[...e,r],e=[...e,r],e=[...e,r],h=[...h,0];return{points:e,segLength:h}},p=(t,i)=>{let s={};if(s.index=t.index,s.startIndex=t.startIndex,s.oriCBz=t.oriCBz,s.tLength=t.tLength,s.cLength=[],i/t.cLength.length<1)return Promise.resolve(null);let e,h=Math.floor(i/t.cLength.length),r=i%t.cLength.length;return h>1?(e=((t,i)=>{let s=[],e=[],h=[];if(s=u(t),i>1){for(let t=0;t<s.length-1;t+=3){let r=i;0===t&&(h=[...h,s[t]]);let n=a(s[t],s[t+1],s[t+2],s[t+3]);for(;r>1;){let t=1/r,i=a(n[0],n[1],n[2],n[3]),s=l(i,t);h=[...h,s.C1[1]],h=[...h,s.C1[2]],h=[...h,s.C1[3]],e=[...e,m(s.C1[0],s.C1[1],s.C1[2],s.C1[3])],1==--r?(h=[...h,s.C2[1]],h=[...h,s.C2[2]],h=[...h,s.C2[3]],e=[...e,m(s.C2[0],s.C2[1],s.C2[2],s.C2[3])]):n=a(s.C2[0],s.C2[1],s.C2[2],s.C2[3])}}s=h}return{points:s,segLength:e}})(t,h),r>0&&(e=f(e.points,e.segLength,r))):((e={}).points=u(t),e.segLength=t.cLength,r>0&&(e=f(e.points,e.segLength,r))),s.cLength=e.segLength,s.cBz=0!=t.startIndex?o(e.points,t.startIndex):n(e.points),Promise.resolve(s)},w=async(t,i)=>{let s={index:0};if(s.startIndex=i||0,s.cBz="",s.oriCBz="",s.cType="",s.lPoint=new e,s.cLength=[],s.tLength=0,t.length>0&&r(t.charAt(0))&&"M"===t.charAt(0).toUpperCase()){let i=t.trim().replace(/([A-Za-z](?!$))/g," $1 ").trim().replace(/([\-](?!$))/g," $1").split(/[ ,]+/);for(s.index=3,s.lPoint.x=Number(i[1]),s.lPoint.y=Number(i[2]),s.cBz=s.cBz.concat("M "),s.cBz=s.cBz.concat(s.lPoint.toFixed(2)+" ");s.index<i.length;){let t=!1;switch(r(i[s.index].charAt(0))&&(s.cType=i[s.index].charAt(0),t=!0),s.cType.toUpperCase()){case"H":case"V":case"L":s=await b(s,i,t);break;case"Q":s=await P(s,i,t);break;case"C":s=await d(s,i,t);break;case"Z":s.cBz=s.cBz.concat("Z")}}}return s.cBz=s.cBz.trim(),s.oriCBz=s.cBz,Promise.resolve(s)},b=(t,i,s)=>{let h=t,r=new e,l=new e;if(s)switch(h.cType.toUpperCase()){case"H":r.x=Number(i[h.index+1]),r.y=h.lPoint.y,h.index+=2;break;case"V":r.y=Number(i[h.index+1]),r.x=h.lPoint.x,h.index+=2;break;case"L":r.x=Number(i[h.index+1]),r.y=Number(i[h.index+2]),h.index+=3}else"L"===h.cType.toUpperCase()&&(r.x=Number(i[h.index]),r.y=Number(i[h.index+1]),h.index+=2);"l"===h.cType?(l.x=h.lPoint.x+r.x,l.y=h.lPoint.y+r.y):"h"===h.cType?(l.x=h.lPoint.x+r.x,l.y=h.lPoint.y):"v"===h.cType?(l.y=h.lPoint.y+r.y,l.x=h.lPoint.x):l=r,h.cBz=h.cBz.concat("C "),h.cBz=h.cBz.concat(h.lPoint.atDistancePoint(l,1/3).toFixed(2)+" "),h.cBz=h.cBz.concat(h.lPoint.atDistancePoint(l,2/3).toFixed(2)+" "),h.cBz=h.cBz.concat(l.toFixed(2)+" ");let n=h.lPoint.scalarDistance(l);return h.cLength=[...h.cLength,n],h.tLength+=n,h.lPoint=l,Promise.resolve(h)},P=(t,i,s)=>{let h=t,r=new e,l=new e,n=new e,a=new e;s?(r.x=Number(i[h.index+1]),r.y=Number(i[h.index+2]),l.x=Number(i[h.index+3]),l.y=Number(i[h.index+4]),h.index+=5):(r.x=Number(i[h.index]),r.y=Number(i[h.index+1]),l.x=Number(i[h.index+2]),l.y=Number(i[h.index+3]),h.index+=4),"q"===h.cType?(n.x=h.lPoint.x+r.x,n.y=h.lPoint.y+r.y,a.x=h.lPoint.x+l.x,a.y=h.lPoint.y+l.y):(n=r,a=l),h.cBz=h.cBz.concat("C ");const u=h.lPoint.addPoint(n.substractPoint(h.lPoint).multNumber(2/3));h.cBz=h.cBz.concat(u.toFixed(2)+" ");const o=a.addPoint(n.substractPoint(a).multNumber(2/3));h.cBz=h.cBz.concat(o.toFixed(2)+" "),h.cBz=h.cBz.concat(a.toFixed(2)+" ");let c=h.lPoint.scalarDistance(a),m=h.lPoint.scalarDistance(u)+u.scalarDistance(o)+o.scalarDistance(a);return h.cLength=[...h.cLength,(m+c)/2],h.tLength+=(m+c)/2,h.lPoint=a,Promise.resolve(h)},d=(t,i,s)=>{let h=t,r=new e,l=new e,n=new e,a=new e,u=new e,o=new e;s?(r.x=Number(i[h.index+1]),r.y=Number(i[h.index+2]),l.x=Number(i[h.index+3]),l.y=Number(i[h.index+4]),n.x=Number(i[h.index+5]),n.y=Number(i[h.index+6]),h.index+=7):(r.x=Number(i[h.index]),r.y=Number(i[h.index+1]),l.x=Number(i[h.index+2]),l.y=Number(i[h.index+3]),n.x=Number(i[h.index+4]),n.y=Number(i[h.index+5]),h.index+=6),"c"===h.cType?(a.x=h.lPoint.x+r.x,a.y=h.lPoint.y+r.y,u.x=h.lPoint.x+l.x,u.y=h.lPoint.y+l.y,o.x=h.lPoint.x+n.x,o.y=h.lPoint.y+n.y):(a=r,u=l,o=n),h.cBz=h.cBz.concat("C "),h.cBz=h.cBz.concat(a.toFixed(2)+" "),h.cBz=h.cBz.concat(u.toFixed(2)+" "),h.cBz=h.cBz.concat(o.toFixed(2)+" ");let c=m(h.lPoint,a,u,o);return h.cLength=[...h.cLength,c],h.tLength+=c,h.lPoint=o,Promise.resolve(h)},y=class{constructor(i){t(this,i),this.duration="2000ms",this.calcmode="linear",this._alignPathList=[],this._cBList=[],this._valuesPath="",this._valuesFill="",this._isUniqueColor=!1}parseDurationProp(t){this.innerDuration=t||"2000ms"}parseRepeatcountProp(t){this.innerRepeatcount=t||null}parsePathindexProp(t){this.innerPathindex=t?this._removeCarriageReturn(t).split(";").map(Number):null}parseNsegmentProp(t){this.innerNsegment=t?Number(t):null}parseKeytimesProp(t){this.innerKeytimes=t?this._removeCarriageReturn(t):null}parseCalcmodeProp(t){this.innerCalcmode=t||"linear"}parseKeysplinesProp(t){this.innerKeysplines=t?this._removeCarriageReturn(t):null}parseFillProp(t){this.innerFill=t||null}async init(){return await this._init()}async getStateProperties(){const t={};return t.duration=this.innerDuration,t.repeatCount=this.innerRepeatcount,t.pathIndex=this.innerPathindex,t.nSegment=this.innerNsegment,t.keyTimes=this.innerKeytimes,t.calcMode=this.innerCalcmode,t.keySplines=this.innerKeysplines,t.fill=this.innerFill,t}async getPath(){return this._getPath()}async getPathList(){return this._pathList}async getFillColor(){return this._fillColor}renderSVGFirstPath(){return this._renderSVGFirstPath()}async getAlignedPaths(t){return t&&await this._alignPaths(),this._alignPathList}async componentWillLoad(){await this.init()}async componentDidLoad(){this._element=this.el.shadowRoot,this.isSVG&&await this._renderSVGFirstPath()}async _init(){this.parseDurationProp(this.duration?this.duration:"2000ms"),this.parsePathindexProp(this.pathindex?this.pathindex:null),this.parseNsegmentProp(this.nsegment?this.nsegment:null),this.parseRepeatcountProp(this.repeatcount?this.repeatcount:null),this.parseFillProp(this.fill?this.fill:null),this.parseKeytimesProp(this.keytimes?this.keytimes:null),this.parseCalcmodeProp(this.calcmode?this.calcmode:"linear"),this.parseKeysplinesProp(this.keysplines?this.keysplines:null),null!=this.innerFill&&(this._uniqueColor=this.innerFill,this._isUniqueColor=!0),await this.getPath()}_removeCarriageReturn(t){let i=t.split(/\r?\n|\r/g),s=t;if(i.length>1){s="";for(let t=0;t<i.length;t++)s=s.concat(" "+i[t].trim())}return s}_setSVGAttributes(){this._svgOptions.width&&this._svg.setAttribute("width",this._svgOptions.width),this._svgOptions.height&&this._svg.setAttribute("height",this._svgOptions.height),this._svgOptions.viewBox&&this._svg.setAttribute("viewBox",this._svgOptions.viewBox),this._svgOptions.xmlns&&this._svg.setAttribute("xmlns",this._svgOptions.xmlns)}_drawFirstPath(){this._path=this._svg.querySelector("#initPath"),this._path.setAttribute("d",this._pathList[0]),this._fillColor.length>0&&this._path.setAttribute("fill",this._fillColor[0])}async _getPath(){const t=this.el.querySelector("svg");if(this.isSVG=!1,null!==t){this._svgOptions={},this._pathList=[],this._fillColor=[];let i=t.getAttribute("width"),s=t.getAttribute("height"),e=t.getAttribute("viewBox"),h=t.getAttribute("xmlns");if(this._svgOptions.width=i||!1,this._svgOptions.height=s||!1,this._svgOptions.viewBox=e||!1,this._svgOptions.xmlns=h||!1,t.childElementCount>0)for(let a=0;a<t.childElementCount;a++){let i=t.children[a].getAttribute("d"),s=i.split(/\r?\n|\r/g);if(s.length>1){let t="";for(let i=0;i<s.length;i++)t=t.concat(" "+s[i].trim());this._pathList=[...this._pathList,t.trim()]}else this._pathList=[...this._pathList,i];const e=t.children[a].getAttribute("fill");null==e||this._isUniqueColor||(this._fillColor=[...this._fillColor,e])}await this.getOccurrence(this._fillColor,this._fillColor[0])===this._fillColor.length&&(this._isUniqueColor=!0,this._uniqueColor=this._fillColor[0]),this.el.removeChild(t);let r=null!=this.innerKeytimes?this.innerKeytimes.split(";").length:0,l=null!=this.innerKeysplines?this.innerKeysplines.split(";").length:0,n=0===r||r===this._pathList.length;("spline"!==this.innerCalcmode||l==r-1)&&n&&(this.isSVG=!0)}}async _alignPaths(){let t;for(let i=0;i<this._pathList.length;i++){t=null!=this.innerPathindex&&this.innerPathindex[i]?this.innerPathindex[i]:0;const s=await w(this._pathList[i],t);this._cBList=[...this._cBList,s]}this._alignPathList=await(async(t,i)=>{let s=[],e=(t=>{let i=0,s=t[0].cLength.length;for(let e=1;e<t.length;e++)t[e].cLength.length>s&&(i=e,s=t[e].cLength.length);return{idx:i,segMax:s}})(t),h=i&&null!=i&&i>t[e.idx].cLength.length?i:t[e.idx].cLength.length;for(let r=0;r<t.length;r++)if(h>t[r].cLength.length){let i=await p(t[r],h);s=[...s,i]}else{if(0!=t[r].startIndex){let i=u(t[r]),s=o(i,t[r].startIndex);t[r].cBz=s}s=[...s,t[r]]}return Promise.resolve(s)})(this._cBList,this.innerNsegment)}_setAnimation(){let t=this._path.querySelector("#animPath");this._valuesPath="";for(let i=0;i<this._alignPathList.length;i++)null!=this._alignPathList[i].cBz&&(this._valuesPath=this._valuesPath.concat(this._alignPathList[i].cBz+";"));if(t.setAttribute("attributeName","d"),t.setAttribute("values",this._valuesPath),t.setAttribute("dur",this.innerDuration),t.setAttribute("xlink:href","#initPath"),null!=this.innerFill&&t.setAttribute("fill",this.innerFill),null!=this.innerRepeatcount&&t.setAttribute("repeatCount",this.innerRepeatcount),null!=this.innerKeytimes&&t.setAttribute("keyTimes",this.innerKeytimes),t.setAttribute("calcMode",this.innerCalcmode),null!=this.innerKeysplines&&t.setAttribute("keySplines",this.innerKeysplines),this._fillColor.length>1&&!this._isUniqueColor){let i=this._path.querySelector("#animFill");this._valuesFill="";for(let t=0;t<this._fillColor.length;t++)null!=this._alignPathList[t].cBz&&(this._valuesFill=this._valuesFill.concat(this._fillColor[t]+";"));i.setAttribute("attributeName","fill"),i.setAttribute("values",this._valuesFill),i.setAttribute("dur",this.innerDuration),i.setAttribute("xlink:href","#initPath"),null!=this.innerFill&&i.setAttribute("fill",this.innerFill),null!=this.innerRepeatcount&&i.setAttribute("repeatCount",this.innerRepeatcount),null!=this.innerKeytimes&&t.setAttribute("keyTimes",this.innerKeytimes),t.setAttribute("calcMode",this.innerCalcmode),null!=this.innerKeysplines&&t.setAttribute("keySplines",this.innerKeysplines)}}async getOccurrence(t,i){return t.filter(t=>t===i).length}async _renderSVGFirstPath(){return this._container=this._element.querySelector("#morph-container"),this._svg=this._container.querySelector("#morph-svg"),this._setSVGAttributes(),this._pathList&&this._pathList[0]&&(this._drawFirstPath(),await this._alignPaths(),this._setAnimation()),Promise.resolve()}render(){return this.isSVG?i("div",{id:"morph-container"},i("div",{id:"morph-svg-container"},i("svg",{id:"morph-svg",width:"500",height:"500",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg"},i("path",{id:"initPath"},i("animate",{id:"animPath",begin:"initPath.click"}),this._fillColor.length>1&&!this._uniqueColor?i("animate",{id:"animFill",begin:"animPath.begin"}):null)))):i("div",{id:"fake-container"})}get el(){return s(this)}static get watchers(){return{duration:["parseDurationProp"],repeatcount:["parseRepeatcountProp"],pathindex:["parsePathindexProp"],nsegment:["parseNsegmentProp"],keytimes:["parseKeytimesProp"],calcmode:["parseCalcmodeProp"],keysplines:["parseKeysplinesProp"],fill:["parseFillProp"]}}static get style(){return":host{--height:500px;--width:500px;--top:30px;--left:10px}#morph-container{position:relative;left:0;top:0;width:100%;height:calc(var(--height) + var(--top))}#morph-svg-container{position:relative;left:var(--left);top:var(--top);width:var(--width);height:var(--height)}svg{width:100%;height:100%}"}};export{y as jeep_svgmorph};