import Se from"./VInputBase-a7a0dcc3.mjs";import Me from"./VIcons-f6d178ce.mjs";import{h as Te}from"./mdi-00233b2d.mjs";import{o as p,f as w,H as E,Q as L,h,i as v,S as D,U as Ae,t as ce,W as xe,c as ee,j as m,X as $,a as He,r as U,b as ue,m as Ee,u as P}from"./entry-d823e272.mjs";const Re="";function I(e,t){t===void 0&&(t={});var r=t.insertAt;if(!(!e||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}const O=function(e,t){const{componentPrefix:r=Re}=t||{};e.component(`${r}${this.name}`,this)},te={};var N={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":`url(${Ie(this.white,this.grey,this.size)})`}}}};function Le(e,t,r){if(typeof document=="undefined")return null;const n=document.createElement("canvas");n.width=n.height=r*2;const a=n.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,n.width,n.height),a.fillStyle=t,a.fillRect(0,0,r,r),a.translate(r,r),a.fillRect(0,0,r,r),n.toDataURL()):null}function Ie(e,t,r){const n=`${e},${t},${r}`;if(te[n])return te[n];const a=Le(e,t,r);return te[n]=a,a}function Oe(e,t,r,n,a,i){return p(),w("div",{class:"vc-checkerboard",style:E(i.bgStyle)},null,4)}var je=".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";I(je);N.render=Oe;N.__file="src/components/checkboard/checkboard.vue";N.install=O;var G={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:N},computed:{colors(){return this.value},gradientColor(){const{rgba:e}=this.colors,t=[e.r,e.g,e.b].join(",");return`linear-gradient(to right, rgba(${t}, 0) 0%, rgba(${t}, 1) 100%)`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,a=r.getBoundingClientRect().left+window.pageXOffset,o=(e.pageX||(e.touches?e.touches[0].pageX:0))-a;let s;o<0?s=0:o>n?s=1:s=Math.round(o*100/n)/100,this.colors.a!==s&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:s,source:"rgba"})},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const Fe={class:"vc-alpha"},Be={class:"vc-alpha-checkboard-wrap"},De=h("div",{class:"vc-alpha-picker"},null,-1),Ne=[De];function $e(e,t,r,n,a,i){const o=L("checkboard");return p(),w("div",Fe,[h("div",Be,[v(o)]),h("div",{class:"vc-alpha-gradient",style:E({background:i.gradientColor})},null,4),h("div",{class:"vc-alpha-container",ref:"container",onMousedown:t[0]||(t[0]=(...s)=>i.handleMouseDown&&i.handleMouseDown(...s)),onTouchmove:t[1]||(t[1]=(...s)=>i.handleChange&&i.handleChange(...s)),onTouchstart:t[2]||(t[2]=(...s)=>i.handleChange&&i.handleChange(...s))},[h("div",{class:"vc-alpha-pointer",style:E({left:i.colors.a*100+"%"})},Ne,4)],544)])}var Ue=".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";I(Ue);G.render=$e;G.__file="src/components/alpha/alpha.vue";G.install=O;function g(e,t){Pe(e)&&(e="100%");var r=We(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function W(e){return Math.min(1,Math.max(0,e))}function Pe(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function We(e){return typeof e=="string"&&e.indexOf("%")!==-1}function we(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function V(e){return e<=1?"".concat(Number(e)*100,"%"):e}function R(e){return e.length===1?"0"+e:String(e)}function Ve(e,t,r){return{r:g(e,255)*255,g:g(t,255)*255,b:g(r,255)*255}}function de(e,t,r){e=g(e,255),t=g(t,255),r=g(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),i=0,o=0,s=(n+a)/2;if(n===a)o=0,i=0;else{var c=n-a;switch(o=s>.5?c/(2-n-a):c/(n+a),n){case e:i=(t-r)/c+(t<r?6:0);break;case t:i=(r-e)/c+2;break;case r:i=(e-t)/c+4;break}i/=6}return{h:i,s:o,l:s}}function re(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ze(e,t,r){var n,a,i;if(e=g(e,360),t=g(t,100),r=g(r,100),t===0)a=r,i=r,n=r;else{var o=r<.5?r*(1+t):r+t-r*t,s=2*r-o;n=re(s,o,e+1/3),a=re(s,o,e),i=re(s,o,e-1/3)}return{r:n*255,g:a*255,b:i*255}}function fe(e,t,r){e=g(e,255),t=g(t,255),r=g(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),i=0,o=n,s=n-a,c=n===0?0:s/n;if(n===a)i=0;else{switch(n){case e:i=(t-r)/s+(t<r?6:0);break;case t:i=(r-e)/s+2;break;case r:i=(e-t)/s+4;break}i/=6}return{h:i,s:c,v:o}}function Xe(e,t,r){e=g(e,360)*6,t=g(t,100),r=g(r,100);var n=Math.floor(e),a=e-n,i=r*(1-t),o=r*(1-a*t),s=r*(1-(1-a)*t),c=n%6,d=[r,o,i,i,s,r][c],u=[s,r,r,o,i,i][c],l=[i,i,s,r,r,o][c];return{r:d*255,g:u*255,b:l*255}}function ge(e,t,r,n){var a=[R(Math.round(e).toString(16)),R(Math.round(t).toString(16)),R(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Ge(e,t,r,n,a){var i=[R(Math.round(e).toString(16)),R(Math.round(t).toString(16)),R(Math.round(r).toString(16)),R(Ye(n))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Ye(e){return Math.round(parseFloat(e)*255).toString(16)}function pe(e){return x(e)/255}function x(e){return parseInt(e,16)}function qe(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var he={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ke(e){var t={r:0,g:0,b:0},r=1,n=null,a=null,i=null,o=!1,s=!1;return typeof e=="string"&&(e=Je(e)),typeof e=="object"&&(M(e.r)&&M(e.g)&&M(e.b)?(t=Ve(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):M(e.h)&&M(e.s)&&M(e.v)?(n=V(e.s),a=V(e.v),t=Xe(e.h,n,a),o=!0,s="hsv"):M(e.h)&&M(e.s)&&M(e.l)&&(n=V(e.s),i=V(e.l),t=ze(e.h,n,i),o=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=we(r),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var Ze="[-\\+]?\\d+%?",Qe="[-\\+]?\\d*\\.\\d+%?",H="(?:".concat(Qe,")|(?:").concat(Ze,")"),ne="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),ie="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),k={CSS_UNIT:new RegExp(H),rgb:new RegExp("rgb"+ne),rgba:new RegExp("rgba"+ie),hsl:new RegExp("hsl"+ne),hsla:new RegExp("hsla"+ie),hsv:new RegExp("hsv"+ne),hsva:new RegExp("hsva"+ie),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Je(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(he[e])e=he[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=k.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=k.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=k.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=k.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=k.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=k.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=k.hex8.exec(e),r?{r:x(r[1]),g:x(r[2]),b:x(r[3]),a:pe(r[4]),format:t?"name":"hex8"}:(r=k.hex6.exec(e),r?{r:x(r[1]),g:x(r[2]),b:x(r[3]),format:t?"name":"hex"}:(r=k.hex4.exec(e),r?{r:x(r[1]+r[1]),g:x(r[2]+r[2]),b:x(r[3]+r[3]),a:pe(r[4]+r[4]),format:t?"name":"hex8"}:(r=k.hex3.exec(e),r?{r:x(r[1]+r[1]),g:x(r[2]+r[2]),b:x(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function M(e){return Boolean(k.CSS_UNIT.exec(String(e)))}var et=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var n;if(t instanceof e)return t;typeof t=="number"&&(t=qe(t)),this.originalInput=t;var a=Ke(t);this.originalInput=t,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,n,a,i=t.r/255,o=t.g/255,s=t.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),s<=.03928?a=s/12.92:a=Math.pow((s+.055)/1.055,2.4),.2126*r+.7152*n+.0722*a},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=we(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var t=fe(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=fe(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),a=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=de(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=de(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),a=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),ge(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),Ge(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(n,")"):"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(g(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(g(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+ge(this.r,this.g,this.b,!1),r=0,n=Object.entries(he);r<n.length;r++){var a=n[r],i=a[0],o=a[1];if(t===o)return i}return!1},e.prototype.toString=function(t){var r=Boolean(t);t=t!=null?t:this.format;var n=!1,a=this.a<1&&this.a>=0,i=!r&&a&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=W(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=W(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=W(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=W(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var n=this.toRgb(),a=new e(t).toRgb(),i=r/100,o={r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a};return new e(o)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var n=this.toHsl(),a=360/r,i=[this];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(new e(n));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),n=r.h,a=r.s,i=r.v,o=[],s=1/t;t--;)o.push(new e({h:n,s:a,v:i})),i=(i+s)%1;return o},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),n=new e(t).toRgb();return new e({r:n.r+(r.r-n.r)*r.a,g:n.g+(r.g-n.g)*r.a,b:n.b+(r.b-n.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),n=r.h,a=[this],i=360/t,o=1;o<t;o++)a.push(new e({h:(n+o*i)%360,s:r.s,l:r.l}));return a},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();function A(...e){return new et(...e)}function ae(e,t){const r=e&&e.a;let n;e&&e.hsl?n=A(e.hsl):e&&e.hex&&e.hex.length>0?n=A(e.hex):e&&e.hsv?n=A(e.hsv):e&&e.rgba?n=A(e.rgba):e&&e.rgb?n=A(e.rgb):n=A(e),n&&(n._a===void 0||n._a===null)&&n.setAlpha(r||n.getAlpha());const a=n.toHsl(),i=n.toHsv();return a.s===0&&(i.h=a.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:a,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:i,oldHue:e.h||t||a.h,source:e.source,a:n.getAlpha()}}var tt={model:{prop:"modelValue",event:"update:modelValue"},props:["modelValue"],data(){return{val:ae(this.modelValue)}},computed:{colors:{get(){return this.val},set(e){this.val=e,this.$emit("update:modelValue",e)}}},watch:{modelValue(e){this.val=ae(e)}},methods:{colorChange(e,t){this.oldHue=this.colors.hsl.h,this.colors=ae(e,t||this.oldHue)},isValidHex(e){return A(e).isValid},simpleCheckForValidColor(e){const t=["r","g","b","a","h","s","l","v"];let r=0,n=0;for(let a=0;a<t.length;a++){const i=t[a];e[i]&&(r++,isNaN(e[i])||n++)}if(r===n)return e},paletteUpperCase(e){return e.map(t=>t.toUpperCase())},isTransparent(e){return A(e).getAlpha()===0}}},Y={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(e){if(this.max!==void 0&&+e>this.max)this.$refs.input.value=this.max;else return e}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(e){this.handleChange(e.target.value)},handleChange(e){const t={};t[this.label]=e,t.hex===void 0&&t["#"]===void 0?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown(e){let{val:t}=this;const r=Number(t);if(r){const n=this.arrowOffset||1;e.keyCode===38&&(t=r+n,this.handleChange(t),e.preventDefault()),e.keyCode===40&&(t=r-n,this.handleChange(t),e.preventDefault())}}}};const rt={class:"vc-editable-input"},nt=["aria-labelledby"],it=["for","id"],at={class:"vc-input__desc"};function ot(e,t,r,n,a,i){return p(),w("div",rt,[D(h("input",{"aria-labelledby":i.labelId,class:"vc-input__input","onUpdate:modelValue":t[0]||(t[0]=o=>i.val=o),onKeydown:t[1]||(t[1]=(...o)=>i.handleKeyDown&&i.handleKeyDown(...o)),onInput:t[2]||(t[2]=(...o)=>i.update&&i.update(...o)),ref:"input"},null,40,nt),[[Ae,i.val]]),h("span",{for:r.label,class:"vc-input__label",id:i.labelId},ce(i.labelSpanText),9,it),h("span",at,ce(r.desc),1)])}var st=".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}";I(st);Y.render=ot;Y.__file="src/components/editable-input/editable-input.vue";Y.install=O;var ht=typeof global=="object"&&global&&global.Object===Object&&global,lt=ht,ct=typeof self=="object"&&self&&self.Object===Object&&self,ut=lt||ct||Function("return this")(),ye=ut,dt=ye.Symbol,z=dt,Ce=Object.prototype,ft=Ce.hasOwnProperty,gt=Ce.toString,B=z?z.toStringTag:void 0;function pt(e){var t=ft.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch{}var a=gt.call(e);return n&&(t?e[B]=r:delete e[B]),a}var vt=Object.prototype,bt=vt.toString;function mt(e){return bt.call(e)}var xt="[object Null]",wt="[object Undefined]",ve=z?z.toStringTag:void 0;function yt(e){return e==null?e===void 0?wt:xt:ve&&ve in Object(e)?pt(e):mt(e)}function Ct(e){return e!=null&&typeof e=="object"}var _t="[object Symbol]";function kt(e){return typeof e=="symbol"||Ct(e)&&yt(e)==_t}var St=/\s/;function Mt(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t}var Tt=/^\s+/;function At(e){return e&&e.slice(0,Mt(e)+1).replace(Tt,"")}function X(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var be=0/0,Ht=/^[-+]0x[0-9a-f]+$/i,Et=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Lt=parseInt;function me(e){if(typeof e=="number")return e;if(kt(e))return be;if(X(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=X(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=At(e);var r=Et.test(e);return r||Rt.test(e)?Lt(e.slice(2),r?2:8):Ht.test(e)?be:+e}var It=function(){return ye.Date.now()},oe=It,Ot="Expected a function",jt=Math.max,Ft=Math.min;function Bt(e,t,r){var n,a,i,o,s,c,d=0,u=!1,l=!1,y=!0;if(typeof e!="function")throw new TypeError(Ot);t=me(t)||0,X(r)&&(u=!!r.leading,l="maxWait"in r,i=l?jt(me(r.maxWait)||0,t):i,y="trailing"in r?!!r.trailing:y);function j(f){var T=n,F=a;return n=a=void 0,d=f,o=e.apply(F,T),o}function Q(f){return d=f,s=setTimeout(C,t),u?j(f):o}function b(f){var T=f-c,F=f-d,le=t-T;return l?Ft(le,i-F):le}function _(f){var T=f-c,F=f-d;return c===void 0||T>=t||T<0||l&&F>=i}function C(){var f=oe();if(_(f))return S(f);s=setTimeout(C,b(f))}function S(f){return s=void 0,y&&n?j(f):(n=a=void 0,o)}function _e(){s!==void 0&&clearTimeout(s),d=0,n=c=a=s=void 0}function ke(){return s===void 0?o:S(oe())}function J(){var f=oe(),T=_(f);if(n=arguments,a=this,c=f,T){if(s===void 0)return Q(c);if(l)return clearTimeout(s),s=setTimeout(C,t),j(c)}return s===void 0&&(s=setTimeout(C,t)),o}return J.cancel=_e,J.flush=ke,J}var Dt="Expected a function";function Nt(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(Dt);return X(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),Bt(e,t,{leading:n,maxWait:t,trailing:a})}function se(e,t,r){return t<r?e<t?t:e>r?r:e:e<r?r:e>t?t:e}var q={name:"Saturation",props:{value:Object},computed:{colors(){return this.value},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return`${-(this.colors.hsv.v*100)+1+100}%`},pointerLeft(){return`${this.colors.hsv.s*100}%`}},methods:{throttle:Nt((e,t)=>{e(t)},20,{leading:!0,trailing:!1}),handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,a=r.clientHeight,i=r.getBoundingClientRect().left+window.pageXOffset,o=r.getBoundingClientRect().top+window.pageYOffset,s=e.pageX||(e.touches?e.touches[0].pageX:0),c=e.pageY||(e.touches?e.touches[0].pageY:0),d=se(s-i,0,n),u=se(c-o,0,a),l=d/n,y=se(-(u/a)+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:l,v:y,a:this.colors.hsv.a,source:"hsva"})},onChange(e){this.$emit("change",e)},handleMouseDown(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const $t=h("div",{class:"vc-saturation--white"},null,-1),Ut=h("div",{class:"vc-saturation--black"},null,-1),Pt=h("div",{class:"vc-saturation-circle"},null,-1),Wt=[Pt];function Vt(e,t,r,n,a,i){return p(),w("div",{class:"vc-saturation",style:E({background:i.bgColor}),ref:"container",onMousedown:t[0]||(t[0]=(...o)=>i.handleMouseDown&&i.handleMouseDown(...o)),onTouchmove:t[1]||(t[1]=(...o)=>i.handleChange&&i.handleChange(...o)),onTouchstart:t[2]||(t[2]=(...o)=>i.handleChange&&i.handleChange(...o))},[$t,Ut,h("div",{class:"vc-saturation-pointer",style:E({top:i.pointerTop,left:i.pointerLeft})},Wt,4)],36)}var zt=".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}";I(zt);q.render=Vt;q.__file="src/components/saturation/saturation.vue";q.install=O;var K={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data(){return{oldHue:0,pullDirection:""}},computed:{colors(){const{h:e}=this.value.hsl;return e!==0&&e-this.oldHue>0&&(this.pullDirection="right"),e!==0&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:`${-(this.colors.hsl.h*100/360)+100}%`:0},pointerLeft(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":`${this.colors.hsl.h*100/360}%`}},methods:{handleChange(e,t){!t&&e.preventDefault();const{container:r}=this.$refs;if(!r)return;const n=r.clientWidth,a=r.clientHeight,i=r.getBoundingClientRect().left+window.pageXOffset,o=r.getBoundingClientRect().top+window.pageYOffset,s=e.pageX||(e.touches?e.touches[0].pageX:0),c=e.pageY||(e.touches?e.touches[0].pageY:0),d=s-i,u=c-o;let l,y;this.direction==="vertical"?(u<0?l=360:u>a?l=0:(y=-(u*100/a)+100,l=360*y/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(d<0?l=0:d>n?l=360:(y=d*100/n,l=360*y/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(e){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const Xt=["aria-valuenow"],Gt=h("div",{class:"vc-hue-picker"},null,-1),Yt=[Gt];function qt(e,t,r,n,a,i){return p(),w("div",{class:xe(["vc-hue",i.directionClass])},[h("div",{class:"vc-hue-container",role:"slider","aria-valuenow":i.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",ref:"container",onMousedown:t[0]||(t[0]=(...o)=>i.handleMouseDown&&i.handleMouseDown(...o)),onTouchmove:t[1]||(t[1]=(...o)=>i.handleChange&&i.handleChange(...o)),onTouchstart:t[2]||(t[2]=(...o)=>i.handleChange&&i.handleChange(...o))},[h("div",{class:"vc-hue-pointer",style:E({top:i.pointerTop,left:i.pointerLeft}),role:"presentation"},Yt,4)],40,Xt)],2)}var Kt=".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";I(Kt);K.render=qt;K.__file="src/components/hue/hue.vue";K.install=O;var Z={name:"Chrome",mixins:[tt],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:q,hue:K,alpha:G,"ed-in":Y,checkboard:N},data(){return{fieldsIndex:0,highlight:!1}},computed:{hsl(){const{h:e,s:t,l:r}=this.colors.hsl;return{h:e.toFixed(),s:`${(t*100).toFixed()}%`,l:`${(r*100).toFixed()}%`}},activeColor(){const{rgba:e}=this.colors;return`rgba(${[e.r,e.g,e.b,e.a].join(",")})`},hasAlpha(){return this.colors.a<1}},methods:{childChange(e){this.colorChange(e)},inputChange(e){if(!!e){if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){const t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,r=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:r,source:"hsl"})}}},toggleViews(){if(this.fieldsIndex>=2){this.fieldsIndex=0;return}this.fieldsIndex++},showHighlight(){this.highlight=!0},hideHighlight(){this.highlight=!1}}};const Zt={class:"vc-chrome-saturation-wrap"},Qt={class:"vc-chrome-body"},Jt={class:"vc-chrome-controls"},er={class:"vc-chrome-color-wrap"},tr=["aria-label"],rr={class:"vc-chrome-sliders"},nr={class:"vc-chrome-hue-wrap"},ir={key:0,class:"vc-chrome-alpha-wrap"},ar={key:0,class:"vc-chrome-fields-wrap"},or={class:"vc-chrome-fields"},sr={class:"vc-chrome-field"},hr={class:"vc-chrome-fields"},lr={class:"vc-chrome-field"},cr={class:"vc-chrome-field"},ur={class:"vc-chrome-field"},dr={key:0,class:"vc-chrome-field"},fr={class:"vc-chrome-fields"},gr={class:"vc-chrome-field"},pr={class:"vc-chrome-field"},vr={class:"vc-chrome-field"},br={key:0,class:"vc-chrome-field"},mr={class:"vc-chrome-toggle-icon"},xr=h("path",{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"},null,-1),wr=[xr],yr={class:"vc-chrome-toggle-icon-highlight"};function Cr(e,t,r,n,a,i){const o=L("saturation"),s=L("checkboard"),c=L("hue"),d=L("alpha"),u=L("ed-in");return p(),w("div",{role:"application","aria-label":"Chrome color picker",class:xe(["vc-chrome",r.disableAlpha?"vc-chrome__disable-alpha":""])},[h("div",Zt,[v(o,{value:e.colors,onChange:i.childChange},null,8,["value","onChange"])]),h("div",Qt,[h("div",Jt,[h("div",er,[h("div",{"aria-label":`current color is ${e.colors.hex}`,class:"vc-chrome-active-color",style:E({background:i.activeColor})},null,12,tr),r.disableAlpha?m("v-if",!0):(p(),ee(s,{key:0}))]),h("div",rr,[h("div",nr,[v(c,{value:e.colors,onChange:i.childChange},null,8,["value","onChange"])]),r.disableAlpha?m("v-if",!0):(p(),w("div",ir,[v(d,{value:e.colors,onChange:i.childChange},null,8,["value","onChange"])]))])]),r.disableFields?m("v-if",!0):(p(),w("div",ar,[D(h("div",or,[m(" hex "),h("div",sr,[i.hasAlpha?m("v-if",!0):(p(),ee(u,{key:0,label:"hex",value:e.colors.hex,onChange:i.inputChange},null,8,["value","onChange"])),i.hasAlpha?(p(),ee(u,{key:1,label:"hex",value:e.colors.hex8,onChange:i.inputChange},null,8,["value","onChange"])):m("v-if",!0)])],512),[[$,a.fieldsIndex===0]]),D(h("div",hr,[m(" rgba "),h("div",lr,[v(u,{label:"r",value:e.colors.rgba.r,onChange:i.inputChange},null,8,["value","onChange"])]),h("div",cr,[v(u,{label:"g",value:e.colors.rgba.g,onChange:i.inputChange},null,8,["value","onChange"])]),h("div",ur,[v(u,{label:"b",value:e.colors.rgba.b,onChange:i.inputChange},null,8,["value","onChange"])]),r.disableAlpha?m("v-if",!0):(p(),w("div",dr,[v(u,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:i.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[$,a.fieldsIndex===1]]),D(h("div",fr,[m(" hsla "),h("div",gr,[v(u,{label:"h",value:i.hsl.h,onChange:i.inputChange},null,8,["value","onChange"])]),h("div",pr,[v(u,{label:"s",value:i.hsl.s,onChange:i.inputChange},null,8,["value","onChange"])]),h("div",vr,[v(u,{label:"l",value:i.hsl.l,onChange:i.inputChange},null,8,["value","onChange"])]),r.disableAlpha?m("v-if",!0):(p(),w("div",br,[v(u,{label:"a",value:e.colors.a,"arrow-offset":.01,max:1,onChange:i.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[$,a.fieldsIndex===2]]),m(" btn "),h("div",{class:"vc-chrome-toggle-btn",role:"button","aria-label":"Change another color definition",onClick:t[3]||(t[3]=(...l)=>i.toggleViews&&i.toggleViews(...l))},[h("div",mr,[(p(),w("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",onMouseover:t[0]||(t[0]=(...l)=>i.showHighlight&&i.showHighlight(...l)),onMouseenter:t[1]||(t[1]=(...l)=>i.showHighlight&&i.showHighlight(...l)),onMouseout:t[2]||(t[2]=(...l)=>i.hideHighlight&&i.hideHighlight(...l))},wr,32))]),D(h("div",yr,null,512),[[$,a.highlight]])]),m(" btn ")]))])],2)}var _r=".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}";I(_r);Z.render=Cr;Z.__file="src/components/chrome/chrome.vue";Z.install=O;const kr={style:{display:"flex",width:"100%"}},Hr=He({__name:"VColorInput",props:{value:null},emits:["updateColor"],setup(e,{emit:t}){const r=e;function n(b){t("updateColor",b.hex8)}const a=225,i=U(!1),o=U(0),s=U(0),c=U(null);function d(b,_=!1){var C,S;!_&&((S=(C=c.value)==null?void 0:C.parentElement)==null?void 0:S.contains(b.target))||(i.value=!1,window.removeEventListener("pointerdown",d))}function u(b){var C;if(i.value){d(b,!0);return}i.value=!0;const _=(C=c.value)==null?void 0:C.getBoundingClientRect();_&&(o.value=_.left-a,s.value=_.top),window.addEventListener("pointerdown",S=>d(S)),b.stopPropagation()}const l=ue(()=>r.value.toString());function y(b){return b.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i)}const j=ue(()=>!y(r.value.toString()));function Q(b){const _=b.target.value;t("updateColor",_)}return(b,_)=>{const C=Se,S=Me;return p(),w("div",kr,[v(C,Ee(b.$attrs,{value:e.value,invalid:P(j),onInput:Q}),null,16,["value","invalid"]),h("div",{ref_key:"el",ref:c,style:{display:"flex",position:"relative",cursor:"pointer"}},[v(S,{path:P(Te),style:{margin:"auto 4px","border-radius":"4px",border:"1px solid var(--border-grey)",width:"16px",height:"16px","user-select":"none"},viewBox:"0 0 24 24",fill:"currentColor",onClick:u},null,8,["path"]),i.value?(p(),w("div",{key:0,style:E(`left: ${o.value}px; top: ${s.value}px; position: fixed; z-index: 10`)},[v(P(Z),{"model-value":P(l),"onUpdate:modelValue":n},null,8,["model-value"])],4)):m("",!0)],512)])}}});export{Hr as default};
