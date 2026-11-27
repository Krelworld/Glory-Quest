"use strict";(()=>{var pf=Object.defineProperty;var mf=(n,t,e)=>t in n?pf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var qt=(n,t,e)=>mf(n,typeof t!="symbol"?t+"":t,e);var zh=0,Hl=1,kh=2;var ss=1,Gh=2,qs=3,Bi=0,an=1,ln=2,rs=0,Ys=1,Ur=2,Vl=3,Wl=4,Hh=5;var as=100,Vh=101,Wh=102,Xh=103,qh=104,Yh=200,Zh=201,Jh=202,$h=203,Xl=204,ql=205,Kh=206,Qh=207,jh=208,tu=209,eu=210,nu=211,iu=212,su=213,ru=214,wa=0,Ra=1,Ca=2,Us=3,Pa=4,Ia=5,Fs=6,La=7,no=0,au=1,ou=2,$n=0,Yl=1,Zl=2,Jl=3,$l=4,Kl=5,Ql=6,jl=7;var tc=300,os=301,Zs=302,io=303,so=304,Os=1e3,Yn=1001,Da=1002,Ae=1003,lu=1004;var Fr=1005;var ze=1006,ro=1007;var kn=1008;var cn=1009,ec=1010,nc=1011,Js=1012,ao=1013,Gn=1014,Rn=1015,Hn=1016,oo=1017,lo=1018,ls=1020,ic=35902,sc=35899,rc=1021,ac=1022,Vn=1023,di=1026,mi=1027,co=1028,ho=1029,zi=1030,uo=1031;var fo=1033,Or=33776,Br=33777,zr=33778,kr=33779,po=35840,mo=35841,go=35842,xo=35843,_o=36196,vo=37492,yo=37496,bo=37488,Mo=37489,Gr=37490,So=37491,To=37808,Eo=37809,Ao=37810,wo=37811,Ro=37812,Co=37813,Po=37814,Io=37815,Lo=37816,Do=37817,No=37818,Uo=37819,Fo=37820,Oo=37821,Bo=36492,zo=36494,ko=36495,Go=36283,Ho=36284,Hr=36285,Vo=36286;var pr=2300,Na=2301,Ta=2302,Ul=2303,Fl=2400,Ol=2401,Bl=2402;var cu=3200;var Wo=0,hu=1,gi="",Fe="srgb",mr="srgb-linear",gr="linear",ve="srgb";var Ea=7680;var uu=519,du=512,fu=513,pu=514,oc=515,mu=516,gu=517,lc=518,cc=519,xu=35044,hc=35048;var uc="300 es",Tn=2e3,Bs=2001;function gf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _u(){let n=zs("canvas");return n.style.display="block",n}var fh={},ks=null;function dc(...n){let t="THREE."+n.shift();ks?ks("log",t,...n):console.log(t,...n)}function vu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Yt(...n){n=vu(n);let t="THREE."+n.shift();if(ks)ks("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function $t(...n){n=vu(n);let t="THREE."+n.shift();if(ks)ks("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function fr(...n){let t=n.join(" ");t in fh||(fh[t]=!0,Yt(...n))}function yu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bu={[wa]:wa,[Ca]:Fs,[Pa]:Pa,[Us]:Ia,[Ra]:Ra,[Fs]:Ca,[La]:La,[Ia]:Us},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fl=Math.PI/180,Ua=180/Math.PI;function Vr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function _f(n,t){return(n%t+t)%t}function pl(n,t,e){return(1-e)*n+e*t}function Mu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vf(n,t){if(t.constructor===Float32Array)return n;let e=fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function yf(n,t){if(t.constructor===Float32Array)return n;let e=fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var _c=class _c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;var de=_c,gn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[a+0],h=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||l!==f||c!==h||d!==g){let p=l*f+c*h+d*g+u*b;p<0&&(f=-f,h=-h,g=-g,b=-b,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),D=Math.sin(M);m=Math.sin(m*M)/D,o=Math.sin(o*M)/D,l=l*m+f*o,c=c*m+h*o,d=d*m+g*o,u=u*m+b*o}else{l=l*m+f*o,c=c*m+h*o,d=d*m+g*o,u=u*m+b*o;let M=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=M,c*=M,d*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return t[e]=o*g+d*u+l*h-c*f,t[e+1]=l*g+d*f+c*u-o*h,t[e+2]=c*g+d*h+o*f-l*u,t[e+3]=d*g-o*u-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u+f*h*g;break;case"YZX":this._x=f*d*u+c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u-f*h*g;break;case"XZY":this._x=f*d*u-c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u+f*h*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=i+o+u;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>u){let h=2*Math.sqrt(1+i-o-u);this._w=(d-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>u){let h=2*Math.sqrt(1+o-i-u);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+u-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vc=class vc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vc.prototype.isVector3=!0;var W=vc,ml=new W,ph=new gn,yc=class yc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],h=i[5],g=i[8],b=s[0],p=s[3],m=s[6],M=s[1],D=s[4],T=s[7],L=s[2],P=s[5],x=s[8];return r[0]=a*b+o*M+l*L,r[3]=a*p+o*D+l*P,r[6]=a*m+o*T+l*x,r[1]=c*b+d*M+u*L,r[4]=c*p+d*D+u*P,r[7]=c*m+d*T+u*x,r[2]=f*b+h*M+g*L,r[5]=f*p+h*D+g*P,r[8]=f*m+h*T+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,f=o*l-d*r,h=c*r-a*l,g=e*u+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(s*c-d*i)*b,t[2]=(o*i-s*a)*b,t[3]=f*b,t[4]=(d*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=h*b,t[7]=(i*l-c*e)*b,t[8]=(a*e-i*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gl.makeScale(t,e)),this}rotate(t){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yc.prototype.isMatrix3=!0;var Zt=yc,gl=new Zt,mh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){let n={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mr]:{primaries:t,whitePoint:i,transfer:gr,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}var he=bf();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vs,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vs===void 0&&(vs=zs("canvas")),vs.width=t.width,vs.height=t.height;let s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=vs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mf=0,Gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xl(s[a].image)):r.push(xl(s[a]))}else r=xl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var Sf=0,_l=new W,qe=class n extends Zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Yn,s=Yn,r=ze,a=kn,o=Vn,l=cn,c=n.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Vr(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=tc;qe.DEFAULT_ANISOTROPY=1;var bc=class bc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],h=l[5],g=l[9],b=l[2],p=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,T=(h+1)/2,L=(m+1)/2,P=(d+f)/4,x=(u+b)/4,E=(g+p)/4;return D>T&&D>L?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=P/i,r=x/i):T>L?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=P/s,r=E/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=x/r,s=E/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-b)*(u-b)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-b)/M,this.z=(f-d)/M,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;var Re=bc,Oa=class extends Zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new qe({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},xr=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var eo=class eo{constructor(t,e,i,s,r,a,o,l,c,d,u,f,h,g,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,u,f,h,g,b,p)}set(t,e,i,s,r,a,o,l,c,d,u,f,h,g,b,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=h,m[7]=g,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*d,h=a*u,g=o*d,b=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=h+g*c,e[5]=f-b*c,e[9]=-o*l,e[2]=b-f*c,e[6]=g+h*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*d,h=l*u,g=c*d,b=c*u;e[0]=f+b*o,e[4]=g*o-h,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=h*o-g,e[6]=b+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*d,h=l*u,g=c*d,b=c*u;e[0]=f-b*o,e[4]=-a*u,e[8]=g+h*o,e[1]=h+g*o,e[5]=a*d,e[9]=b-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*d,h=a*u,g=o*d,b=o*u;e[0]=l*d,e[4]=g*c-h,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=h*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,h=a*c,g=o*l,b=o*c;e[0]=l*d,e[4]=b-f*u,e[8]=g*u+h,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=h*u+g,e[10]=f-b*u}else if(t.order==="XZY"){let f=a*l,h=a*c,g=o*l,b=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+b,e[5]=a*d,e[9]=h*u-g,e[2]=g*u-h,e[6]=o*d,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Ef)}lookAt(t,e,i){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ti.crossVectors(i,fn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ti.crossVectors(i,fn)),Ti.normalize(),ia.crossVectors(fn,Ti),s[0]=Ti.x,s[4]=ia.x,s[8]=fn.x,s[1]=Ti.y,s[5]=ia.y,s[9]=fn.y,s[2]=Ti.z,s[6]=ia.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],h=i[13],g=i[2],b=i[6],p=i[10],m=i[14],M=i[3],D=i[7],T=i[11],L=i[15],P=s[0],x=s[4],E=s[8],Z=s[12],O=s[1],G=s[5],j=s[9],I=s[13],U=s[2],at=s[6],ut=s[10],nt=s[14],yt=s[3],st=s[7],mt=s[11],xt=s[15];return r[0]=a*P+o*O+l*U+c*yt,r[4]=a*x+o*G+l*at+c*st,r[8]=a*E+o*j+l*ut+c*mt,r[12]=a*Z+o*I+l*nt+c*xt,r[1]=d*P+u*O+f*U+h*yt,r[5]=d*x+u*G+f*at+h*st,r[9]=d*E+u*j+f*ut+h*mt,r[13]=d*Z+u*I+f*nt+h*xt,r[2]=g*P+b*O+p*U+m*yt,r[6]=g*x+b*G+p*at+m*st,r[10]=g*E+b*j+p*ut+m*mt,r[14]=g*Z+b*I+p*nt+m*xt,r[3]=M*P+D*O+T*U+L*yt,r[7]=M*x+D*G+T*at+L*st,r[11]=M*E+D*j+T*ut+L*mt,r[15]=M*Z+D*I+T*nt+L*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],h=t[14],g=t[3],b=t[7],p=t[11],m=t[15],M=l*h-c*f,D=o*h-c*u,T=o*f-l*u,L=a*h-c*d,P=a*f-l*d,x=a*u-o*d;return e*(b*M-p*D+m*T)-i*(g*M-p*L+m*P)+s*(g*D-b*L+m*x)-r*(g*T-b*P+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],g=t[12],b=t[13],p=t[14],m=t[15],M=e*o-i*a,D=e*l-s*a,T=e*c-r*a,L=i*l-s*o,P=i*c-r*o,x=s*c-r*l,E=d*b-u*g,Z=d*p-f*g,O=d*m-h*g,G=u*p-f*b,j=u*m-h*b,I=f*m-h*p,U=M*I-D*j+T*G+L*O-P*Z+x*E;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let at=1/U;return t[0]=(o*I-l*j+c*G)*at,t[1]=(s*j-i*I-r*G)*at,t[2]=(b*x-p*P+m*L)*at,t[3]=(f*P-u*x-h*L)*at,t[4]=(l*O-a*I-c*Z)*at,t[5]=(e*I-s*O+r*Z)*at,t[6]=(p*T-g*x-m*D)*at,t[7]=(d*x-f*T+h*D)*at,t[8]=(a*j-o*O+c*E)*at,t[9]=(i*O-e*j-r*E)*at,t[10]=(g*P-b*T+m*M)*at,t[11]=(u*T-d*P-h*M)*at,t[12]=(o*Z-a*G-l*E)*at,t[13]=(e*G-i*Z+s*E)*at,t[14]=(b*D-g*L-p*M)*at,t[15]=(d*L-u*D+f*M)*at,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,f=r*c,h=r*d,g=r*u,b=a*d,p=a*u,m=o*u,M=l*c,D=l*d,T=l*u,L=i.x,P=i.y,x=i.z;return s[0]=(1-(b+m))*L,s[1]=(h+T)*L,s[2]=(g-D)*L,s[3]=0,s[4]=(h-T)*P,s[5]=(1-(f+m))*P,s[6]=(p+M)*P,s[7]=0,s[8]=(g+D)*x,s[9]=(p-M)*x,s[10]=(1-(f+b))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,d=1/o,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Tn,l=!1){let c=this.elements,d=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Bs)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Tn,l=!1){let c=this.elements,d=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),h=-(i+s)/(i-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===Tn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Bs)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};eo.prototype.isMatrix4=!0;var fe=eo,ys=new W,Un=new fe,Tf=new W(0,0,0),Ef=new W(1,1,1),Ti=new W,ia=new W,fn=new W,xh=new fe,_h=new gn,fi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Af=0,vh=new W,bs=new gn,ai=new fe,sa=new W,or=new W,wf=new W,Rf=new gn,yh=new W(1,0,0),bh=new W(0,1,0),Mh=new W(0,0,1),Sh={type:"added"},Cf={type:"removed"},Ms={type:"childadded",child:null},vl={type:"childremoved",child:null},tn=class n extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,e=new fi,i=new gn,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sa.copy(t):sa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(or,sa,this.up):ai.lookAt(sa,or,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ai),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),f=a(t.skeletons),h=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new W(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var es=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pf={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,i),m=this._getHandJoint(c,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new es;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ra={h:0,s:0,l:0};function yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ne=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=_f(t,1),e=ue(e,0,1),i=ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let i=Su[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return he.workingToColorSpace(je.copy(this),t),Math.round(ue(je.r*255,0,255))*65536+Math.round(ue(je.g*255,0,255))*256+Math.round(ue(je.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Fe){he.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(ra);let i=pl(Ei.h,ra.h,e),s=pl(Ei.s,ra.s,e),r=pl(Ei.l,ra.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new ne;ne.NAMES=Su;var vr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new W,oi=new W,bl=new W,li=new W,Ss=new W,Ts=new W,Th=new W,Ml=new W,Sl=new W,Tl=new W,El=new Re,Al=new Re,wl=new Re,Ci=class n{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),oi.subVectors(i,e),bl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(oi),l=Fn.dot(bl),c=oi.dot(oi),d=oi.dot(bl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,h=(c*l-o*d)*f,g=(a*d-o*l)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return El.setScalar(0),Al.setScalar(0),wl.setScalar(0),El.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(wl,r.z),a}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),oi.subVectors(t,e),Fn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,i),Ts.subVectors(r,i),Ml.subVectors(t,i);let l=Ss.dot(Ml),c=Ts.dot(Ml);if(l<=0&&c<=0)return e.copy(i);Sl.subVectors(t,s);let d=Ss.dot(Sl),u=Ts.dot(Sl);if(d>=0&&u<=d)return e.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),e.copy(i).addScaledVector(Ss,a);Tl.subVectors(t,r);let h=Ss.dot(Tl),g=Ts.dot(Tl);if(g>=0&&h<=g)return e.copy(r);let b=h*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ts,o);let p=d*g-h*u;if(p<=0&&u-d>=0&&h-g>=0)return Th.subVectors(r,s),o=(u-d)/(u-d+(h-g)),e.copy(s).addScaledVector(Th,o);let m=1/(p+b+f);return a=b*m,o=f*m,e.copy(i).addScaledVector(Ss,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),oa.subVectors(this.max,lr),Es.subVectors(t.a,lr),As.subVectors(t.b,lr),ws.subVectors(t.c,lr),Ai.subVectors(As,Es),wi.subVectors(ws,As),Ki.subVectors(Es,ws);let e=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-Ki.y,Ki.x,0];return!Rl(e,Es,As,ws,oa)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,Es,As,ws,oa))?!1:(la.crossVectors(Ai,wi),e=[la.x,la.y,la.z],Rl(e,Es,As,ws,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new W,new W,new W,new W,new W,new W,new W,new W],On=new W,aa=new Jn,Es=new W,As=new W,ws=new W,Ai=new W,wi=new W,Ki=new W,lr=new W,oa=new W,la=new W,Qi=new W;function Rl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Qi.fromArray(n,r);let o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),d=i.dot(Qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ue=new W,ca=new de,If=0,zn=class extends Zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xu,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?fc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):yf(t,this.array)}};var br=class extends zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Mr=class extends zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Oe=class extends zn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lf=new Jn,cr=new W,Cl=new W,Pi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Lf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Cl)),this.expandByPoint(cr.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Df=0,Sn=new fe,Pl=new tn,Rs=new W,pn=new Jn,hr=new Jn,We=new W,En=class n extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?Mr:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(pn.min,hr.min),pn.expandByPoint(We),We.addVectors(pn.max,hr.max),pn.expandByPoint(We)):(pn.expandByPoint(hr.min),pn.expandByPoint(hr.max))}pn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)We.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),We.add(Rs)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new zn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let Z=0;Z<i.count;Z++)o[Z]=new W,l[Z]=new W;let d=new W,u=new W,f=new W,h=new de,g=new de,b=new de,p=new W,m=new W;function M(Z,O,G){c[Z]=c[O]=c[G]=1,d.fromBufferAttribute(i,Z),u.fromBufferAttribute(i,O),f.fromBufferAttribute(i,G),h.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,O),b.fromBufferAttribute(r,G),u.sub(d),f.sub(d),g.sub(h),b.sub(h);let j=1/(g.x*b.y-b.x*g.y);isFinite(j)&&(p.copy(u).multiplyScalar(b.y).addScaledVector(f,-g.y).multiplyScalar(j),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-b.x).multiplyScalar(j),o[Z].add(p),o[O].add(p),o[G].add(p),l[Z].add(m),l[O].add(m),l[G].add(m))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Z=0,O=D.length;Z<O;++Z){let G=D[Z],j=G.start,I=G.count;for(let U=j,at=j+I;U<at;U+=3)M(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let T=new W,L=new W,P=new W,x=new W;function E(Z){P.fromBufferAttribute(s,Z),x.copy(P);let O=o[Z];T.copy(O),T.sub(P.multiplyScalar(P.dot(O))).normalize(),L.crossVectors(x,O);let j=L.dot(l[Z])<0?-1:1;a.setXYZW(Z,T.x,T.y,T.z,j)}for(let Z=0,O=i.count;Z<O;++Z)c[Z]&&E(Z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,d=new W,u=new W;if(t)for(let f=0,h=t.count;f<h;f+=3){let g=t.getX(f+0),b=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d),h=0,g=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*d;for(let m=0;m<d;m++)f[g++]=c[h++]}return new zn(f,d,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let f=c[d],h=t(f,i);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let h=c[u];d.push(h.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Il=new W,Nf=new W,Uf=new Zt,Bn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Il.subVectors(i,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ff=0,Ii=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Ys,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Bn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hi=new W,Ll=new W,ha=new W,ua=new W,za=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ll.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Ll);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=ua.dot(this.direction),l=-ua.dot(ha),c=ua.lengthSq(),d=Math.abs(1-a*a),u,f,h,g;if(d>0)if(u=a*l-o,f=a*o-l,g=r*d,u>=0)if(f>=-g)if(f<=g){let b=1/d;u*=b,f*=b,h=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ll).addScaledVector(ha,f),h}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=t.x-a.x,f=t.y-a.y,h=t.z-a.z,g=e.x-a.x,b=e.y-a.y,p=e.z-a.z,m=i.x-a.x,M=i.y-a.y,D=i.z-a.z,T=Math.abs(l),L=Math.abs(c),P=Math.abs(d),x,E,Z,O,G,j,I,U,at,ut,nt,yt;if(T>=L&&T>=P?(Z=l,j=u,at=g,yt=m,l>=0?(x=c,E=d,O=f,G=h,I=b,U=p,ut=M,nt=D):(x=d,E=c,O=h,G=f,I=p,U=b,ut=D,nt=M)):L>=P?(Z=c,j=f,at=b,yt=M,c>=0?(x=d,E=l,O=h,G=u,I=p,U=g,ut=D,nt=m):(x=l,E=d,O=u,G=h,I=g,U=p,ut=m,nt=D)):(Z=d,j=h,at=p,yt=D,d>=0?(x=l,E=c,O=u,G=f,I=g,U=b,ut=m,nt=M):(x=c,E=l,O=f,G=u,I=b,U=g,ut=M,nt=m)),Z===0)return null;let st=x/Z,mt=E/Z,xt=1/Z,zt=O-st*j,Jt=G-mt*j,lt=I-st*at,Ct=U-mt*at,Ut=ut-st*yt,Vt=nt-mt*yt,wt=Ut*Ct-Vt*lt,Kt=zt*Vt-Jt*Ut,Te=lt*Jt-Ct*zt;if(s){if(wt<0||Kt<0||Te<0)return null}else if((wt<0||Kt<0||Te<0)&&(wt>0||Kt>0||Te>0))return null;let Wt=wt+Kt+Te;if(Wt===0)return null;let pe=xt*(wt*j+Kt*at+Te*yt);return(Wt>0?pe<0:pe>0)?null:this.at(pe/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eh=new fe,ji=new za,da=new Pi,Ah=new W,fa=new W,pa=new W,ma=new W,Dl=new W,ga=new W,wh=new W,xa=new W,De=class extends tn{constructor(t=new En,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Dl.fromBufferAttribute(u,t),a?ga.addScaledVector(Dl,d):ga.addScaledVector(Dl.sub(e),d))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(da.containsPoint(ji.origin)===!1&&(ji.intersectSphere(da,Ah)===null||ji.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,h.start),D=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let T=M,L=D;T<L;T+=3){let P=o.getX(T),x=o.getX(T+1),E=o.getX(T+2);s=_a(this,m,t,i,c,d,u,P,x,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let p=g,m=b;p<m;p+=3){let M=o.getX(p),D=o.getX(p+1),T=o.getX(p+2);s=_a(this,a,t,i,c,d,u,M,D,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,h.start),D=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let T=M,L=D;T<L;T+=3){let P=T,x=T+1,E=T+2;s=_a(this,m,t,i,c,d,u,P,x,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let p=g,m=b;p<m;p+=3){let M=p,D=p+1,T=p+2;s=_a(this,a,t,i,c,d,u,M,D,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Of(n,t,e,i,s,r,a,o){let l;if(t.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;xa.copy(o),xa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:n}}function _a(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,fa),n.getVertexPosition(l,pa),n.getVertexPosition(c,ma);let d=Of(n,t,e,i,fa,pa,ma,wh);if(d){let u=new W;Ci.getBarycoord(wh,fa,pa,ma,u),s&&(d.uv=Ci.getInterpolatedAttribute(s,o,l,c,u,new de)),r&&(d.uv1=Ci.getInterpolatedAttribute(r,o,l,c,u,new de)),a&&(d.normal=Ci.getInterpolatedAttribute(a,o,l,c,u,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new W,materialIndex:0};Ci.getNormal(fa,pa,ma,f.normal),d.face=f,d.barycoord=u}return d}var Sr=class extends qe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ae,d=Ae,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends zn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new fe,Rh=new fe,va=[],Ch=new Jn,Bf=new fe,ur=new De,dr=new Pi,ns=class extends De{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),Ch.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),dr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Rh.multiplyMatrices(i,Cs),ur.matrixWorld=Rh,ur.raycast(t,va);for(let a=0,o=va.length;a<o;a++){let l=va[a];l.instanceId=r,l.object=this,e.push(l)}va.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(s*this.count),s,this.count,co,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ts=new Pi,zf=new de(.5,.5),ya=new W,Li=class{constructor(t=new Bn,e=new Bn,i=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],h=r[7],g=r[8],b=r[9],p=r[10],m=r[11],M=r[12],D=r[13],T=r[14],L=r[15];if(s[0].setComponents(c-a,h-d,m-g,L-M).normalize(),s[1].setComponents(c+a,h+d,m+g,L+M).normalize(),s[2].setComponents(c+o,h+u,m+b,L+D).normalize(),s[3].setComponents(c-o,h-u,m-b,L-D).normalize(),i)s[4].setComponents(l,f,p,T).normalize(),s[5].setComponents(c-l,h-f,m-p,L-T).normalize();else if(s[4].setComponents(c-l,h-f,m-p,L-T).normalize(),e===Tn)s[5].setComponents(c+l,h+f,m+p,L+T).normalize();else if(e===Bs)s[5].setComponents(l,f,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=zf.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ph=new fe,ka=class n{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Li),i[s].setFromProjectionMatrix(Ph,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Li),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Er=class extends qe{constructor(t=[],e=os,i,s,r,a,o,l,c,d){super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Di=class extends qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends qe{constructor(t,e,i=Gn,s,r,a,o=Ae,l=Ae,c,d=di,u=1){if(d!==di&&d!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ar=class extends pi{constructor(t,e=Gn,i=os,s,r,a=Ae,o=Ae,l,c=di){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vs=class n extends En{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],f=0,h=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(u,2));function g(b,p,m,M,D,T,L,P,x,E,Z){let O=T/x,G=L/E,j=T/2,I=L/2,U=P/2,at=x+1,ut=E+1,nt=0,yt=0,st=new W;for(let mt=0;mt<ut;mt++){let xt=mt*G-I;for(let zt=0;zt<at;zt++){let Jt=zt*O-j;st[b]=Jt*M,st[p]=xt*D,st[m]=U,c.push(st.x,st.y,st.z),st[b]=0,st[p]=0,st[m]=P>0?1:-1,d.push(st.x,st.y,st.z),u.push(zt/x),u.push(1-mt/E),nt+=1}}for(let mt=0;mt<E;mt++)for(let xt=0;xt<x;xt++){let zt=f+xt+at*mt,Jt=f+xt+at*(mt+1),lt=f+(xt+1)+at*(mt+1),Ct=f+(xt+1)+at*mt;l.push(zt,Jt,Ct),l.push(Jt,lt,Ct),yt+=6}o.addGroup(h,yt,Z),h+=yt,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ni=class n extends En{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=t/o,f=e/l,h=[],g=[],b=[],p=[];for(let m=0;m<d;m++){let M=m*f-a;for(let D=0;D<c;D++){let T=D*u-r;g.push(T,-M,0),b.push(0,0,1),p.push(D/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let D=M+c*m,T=M+c*(m+1),L=M+1+c*(m+1),P=M+1+c*m;h.push(D,T,P),h.push(T,L,P)}this.setIndex(h),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(b,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ih(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ih(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function en(n){let t={};for(let e=0;e<n.length;e++){let i=cs(n[e]);for(let s in i)t[s]=i[s]}return t}function Ih(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Tu={clone:cs,merge:en},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new de().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ga=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ws=class extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=no,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ha=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ba(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ui=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends Ui{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ol:r=t,o=2*e-i;break;case Bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:a=t,l=2*i-e;break;case Bl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-e)/(s-e),b=g*g,p=b*g,m=-f*p+2*f*b-f*g,M=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*g+1,D=(-1-h)*p+(1.5+h)*b+.5*g,T=h*p-h*b;for(let L=0;L!==o;++L)r[L]=m*a[d+L]+M*a[c+L]+D*a[l+L]+T*a[u+L];return r}},Xa=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(i-e)/(s-e),u=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*d;return r}},qa=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ya=class extends Ui{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(i-e)/(s-e),b=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*b+a[l+p]*g;return r}let f=o*2,h=t-1;for(let g=0;g!==o;++g){let b=a[c+g],p=a[l+g],m=h*f+g*2,M=u[m],D=u[m+1],T=t*f+g*2,L=d[T],P=d[T+1],x=Wf(i,e,M,L,s);r[g]=Eu(x,b,D,P,p)}return r}};function Eu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Vf(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Wf(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Eu(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Vf(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var _n=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ba(t.settings)&&(i.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ya(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case Ul:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Yt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ba(this.settings)&&(Lh(this.settings.inTangents,t),Lh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ba(this.settings)&&(Dh(this.settings.inTangents,t),Dh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){$t("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&xf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,h=u+i;for(let g=0;g!==i;++g){let b=e[u+g];if(b!==e[f+g]||b!==e[h+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let h=0;h!==i;++h)e[f+h]=e[u+h]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Dh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Na;var Fi=class extends _n{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=pr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};Za.prototype.ValueTypeName="color";var Ja=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};Ja.prototype.ValueTypeName="number";var $a=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rr=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends _n{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=pr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};Ka.prototype.ValueTypeName="vector";var Aa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Nh(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Nh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Nh(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Qa=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let h=c[u],g=c[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Au=new Qa,Cr=class{constructor(t){this.manager=t!==void 0?t:Au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=new WeakMap,Pr=class extends Cr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Aa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Is.get(a);u===void 0&&(u=[],Is.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=zs("img");function l(){d(),e&&e(this);let u=Is.get(this)||[];for(let f=0;f<u.length;f++){let h=u[f];h.onLoad&&h.onLoad(this)}Is.delete(this),r.manager.itemEnd(t)}function c(u){d(),s&&s(u),Aa.remove(`image:${t}`);let f=Is.get(this)||[];for(let h=0;h<f.length;h++){let g=f[h];g.onError&&g.onError(u)}Is.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Aa.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ir=class extends tn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends Ir{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Nl=new fe,Uh=new W,Fh=new W,ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new W,Sa=new gn,qn=new W,Dr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ma,Sa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new W,Oh=new de,Bh=new de,mn=class extends Dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var is=class extends Dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zl=class extends ja{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ls=-90,Ds=1,Xs=class extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Ls,Ds,t,e);s.layers=this.layers,this.add(s);let r=new mn(Ls,Ds,t,e);r.layers=this.layers,this.add(r);let a=new mn(Ls,Ds,t,e);a.layers=this.layers,this.add(a);let o=new mn(Ls,Ds,t,e);o.layers=this.layers,this.add(o);let l=new mn(Ls,Ds,t,e);l.layers=this.layers,this.add(l);let c=new mn(Ls,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=b,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},to=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var mc="\\[\\]\\.:\\/",Xf=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",qf="[^"+mc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",gc),Zf=/(WCOD+)?/.source.replace("WCOD",qf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Kf=new RegExp("^"+Yf+Zf+Jf+$f+"$"),Qf=["material","materials","bones","map"],kl=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xf,"")}static parseTrackName(t){let e=Kf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=kl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var Mc=class Mc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Mc.prototype.isMatrix2=!0;var Gl=Mc;function xc(n,t,e,i){let s=jf(i);switch(e){case rc:return n*t;case co:return n*t/s.components*s.byteLength;case ho:return n*t/s.components*s.byteLength;case zi:return n*t*2/s.components*s.byteLength;case uo:return n*t*2/s.components*s.byteLength;case ac:return n*t*3/s.components*s.byteLength;case Vn:return n*t*4/s.components*s.byteLength;case fo:return n*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mo:case xo:return Math.max(n,16)*Math.max(t,8)/4;case po:case go:return Math.max(n,8)*Math.max(t,8)/2;case _o:case vo:case bo:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case Gr:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Bo:case zo:case ko:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Go:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hr:case Vo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(n){switch(n){case cn:case ec:return{byteLength:1,components:1};case Js:case nc:case Hn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case Gn:case ao:case Rn:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ep(n){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){let g=u[f],b=u[h];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){let b=u[h];n.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:yp,color_fragment:bp,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:Tp,common:Ep,defaultnormal_vertex:Ap,displacementmap_pars_vertex:wp,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:Qp,lights_physical_pars_fragment:jp,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,lightprobes_pars_fragment:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:y0,normal_pars_fragment:b0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:z0,shadowmask_pars_fragment:k0,skinbase_vertex:G0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:$0,uv_pars_fragment:K0,uv_pars_vertex:Q0,uv_vertex:j0,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distance_vert:cm,distance_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:xm,meshlambert_frag:_m,meshmatcap_vert:vm,meshmatcap_frag:ym,meshnormal_vert:bm,meshnormal_frag:Mm,meshphong_vert:Sm,meshphong_frag:Tm,meshphysical_vert:Em,meshphysical_frag:Am,meshtoon_vert:wm,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Im,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Nm},Pt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Qn={basic:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:en([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:en([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ne(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:en([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:en([Pt.points,Pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:en([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:en([Pt.common,Pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:en([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:en([Pt.sprite,Pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:en([Pt.common,Pt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:en([Pt.lights,Pt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Qn.physical={uniforms:en([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Xo={r:0,b:0,g:0},Um=new fe,Ju=new Zt;Ju.set(-1,0,0,0,1,0,0,0,1);function Fm(n,t,e,i,s,r){let a=new ne(0),o=s===!0?0:1,l,c,d=null,u=0,f=null;function h(M){let D=M.isScene===!0?M.background:null;if(D&&D.isTexture){let T=M.backgroundBlurriness>0;D=t.get(D,T)}return D}function g(M){let D=!1,T=h(M);T===null?p(a,o):T&&T.isColor&&(p(T,1),D=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(M,D){let T=h(D);T&&T.isCubeTexture?(c===void 0&&(c=new De(new Vs(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:cs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(D.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ju),c.material.toneMapped=he.getTransfer(T.colorSpace)!==ve,(d!==T||u!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,u=T.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new De(new Ni(2,2),new wn({name:"BackgroundMaterial",uniforms:cs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=he.getTransfer(T.colorSpace)!==ve,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,u=T.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,D){M.getRGB(Xo,pc(n)),e.buffers.color.setClear(Xo.r,Xo.g,Xo.b,D,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,D=1){a.set(M),o=D,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:b,dispose:m}}function Om(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(G,j,I,U,at){let ut=!1,nt=u(G,U,I,j);r!==nt&&(r=nt,c(r.object)),ut=h(G,U,I,at),ut&&g(G,U,I,at),at!==null&&t.update(at,n.ELEMENT_ARRAY_BUFFER),(ut||a)&&(a=!1,T(G,j,I,U),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return n.createVertexArray()}function c(G){return n.bindVertexArray(G)}function d(G){return n.deleteVertexArray(G)}function u(G,j,I,U){let at=U.wireframe===!0,ut=i[j.id];ut===void 0&&(ut={},i[j.id]=ut);let nt=G.isInstancedMesh===!0?G.id:0,yt=ut[nt];yt===void 0&&(yt={},ut[nt]=yt);let st=yt[I.id];st===void 0&&(st={},yt[I.id]=st);let mt=st[at];return mt===void 0&&(mt=f(l()),st[at]=mt),mt}function f(G){let j=[],I=[],U=[];for(let at=0;at<e;at++)j[at]=0,I[at]=0,U[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:I,attributeDivisors:U,object:G,attributes:{},index:null}}function h(G,j,I,U){let at=r.attributes,ut=j.attributes,nt=0,yt=I.getAttributes();for(let st in yt)if(yt[st].location>=0){let xt=at[st],zt=ut[st];if(zt===void 0&&(st==="instanceMatrix"&&G.instanceMatrix&&(zt=G.instanceMatrix),st==="instanceColor"&&G.instanceColor&&(zt=G.instanceColor)),xt===void 0||xt.attribute!==zt||zt&&xt.data!==zt.data)return!0;nt++}return r.attributesNum!==nt||r.index!==U}function g(G,j,I,U){let at={},ut=j.attributes,nt=0,yt=I.getAttributes();for(let st in yt)if(yt[st].location>=0){let xt=ut[st];xt===void 0&&(st==="instanceMatrix"&&G.instanceMatrix&&(xt=G.instanceMatrix),st==="instanceColor"&&G.instanceColor&&(xt=G.instanceColor));let zt={};zt.attribute=xt,xt&&xt.data&&(zt.data=xt.data),at[st]=zt,nt++}r.attributes=at,r.attributesNum=nt,r.index=U}function b(){let G=r.newAttributes;for(let j=0,I=G.length;j<I;j++)G[j]=0}function p(G){m(G,0)}function m(G,j){let I=r.newAttributes,U=r.enabledAttributes,at=r.attributeDivisors;I[G]=1,U[G]===0&&(n.enableVertexAttribArray(G),U[G]=1),at[G]!==j&&(n.vertexAttribDivisor(G,j),at[G]=j)}function M(){let G=r.newAttributes,j=r.enabledAttributes;for(let I=0,U=j.length;I<U;I++)j[I]!==G[I]&&(n.disableVertexAttribArray(I),j[I]=0)}function D(G,j,I,U,at,ut,nt){nt===!0?n.vertexAttribIPointer(G,j,I,at,ut):n.vertexAttribPointer(G,j,I,U,at,ut)}function T(G,j,I,U){b();let at=U.attributes,ut=I.getAttributes(),nt=j.defaultAttributeValues;for(let yt in ut){let st=ut[yt];if(st.location>=0){let mt=at[yt];if(mt===void 0&&(yt==="instanceMatrix"&&G.instanceMatrix&&(mt=G.instanceMatrix),yt==="instanceColor"&&G.instanceColor&&(mt=G.instanceColor)),mt!==void 0){let xt=mt.normalized,zt=mt.itemSize,Jt=t.get(mt);if(Jt===void 0)continue;let lt=Jt.buffer,Ct=Jt.type,Ut=Jt.bytesPerElement,Vt=Ct===n.INT||Ct===n.UNSIGNED_INT||mt.gpuType===ao;if(mt.isInterleavedBufferAttribute){let wt=mt.data,Kt=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,Te=mt.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let Wt=0;Wt<st.locationSize;Wt++)m(st.location+Wt,wt.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Wt=0;Wt<st.locationSize;Wt++)p(st.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Wt=0;Wt<st.locationSize;Wt++)D(st.location+Wt,zt/st.locationSize,Ct,xt,Kt*Ut,(Te+zt/st.locationSize*Wt)*Ut,Vt)}else{if(mt.isInstancedBufferAttribute){for(let wt=0;wt<st.locationSize;wt++)m(st.location+wt,mt.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let wt=0;wt<st.locationSize;wt++)p(st.location+wt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let wt=0;wt<st.locationSize;wt++)D(st.location+wt,zt/st.locationSize,Ct,xt,zt*Ut,zt/st.locationSize*wt*Ut,Vt)}}else if(nt!==void 0){let xt=nt[yt];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(st.location,xt);break;case 3:n.vertexAttrib3fv(st.location,xt);break;case 4:n.vertexAttrib4fv(st.location,xt);break;default:n.vertexAttrib1fv(st.location,xt)}}}}M()}function L(){Z();for(let G in i){let j=i[G];for(let I in j){let U=j[I];for(let at in U){let ut=U[at];for(let nt in ut)d(ut[nt].object),delete ut[nt];delete U[at]}}delete i[G]}}function P(G){if(i[G.id]===void 0)return;let j=i[G.id];for(let I in j){let U=j[I];for(let at in U){let ut=U[at];for(let nt in ut)d(ut[nt].object),delete ut[nt];delete U[at]}}delete i[G.id]}function x(G){for(let j in i){let I=i[j];for(let U in I){let at=I[U];if(at[G.id]===void 0)continue;let ut=at[G.id];for(let nt in ut)d(ut[nt].object),delete ut[nt];delete at[G.id]}}}function E(G){for(let j in i){let I=i[j],U=G.isInstancedMesh===!0?G.id:0,at=I[U];if(at!==void 0){for(let ut in at){let nt=at[ut];for(let yt in nt)d(nt[yt].object),delete nt[yt];delete at[ut]}delete I[U],Object.keys(I).length===0&&delete i[j]}}}function Z(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:Z,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:p,disableUnusedAttributes:M}}function Bm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let h=0;h<d;h++)f+=c[h];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Vn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==cn&&x!==Rn&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Yt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:D,maxFragmentUniforms:T,maxSamples:L,samples:P}}function km(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Bn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let h=u.length!==0||f||i!==0||s;return s=f,i=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,h){let g=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{let M=r?0:i,D=M*4,T=m.clippingState||null;l.value=T,T=d(g,f,D,h);for(let L=0;L!==D;++L)T[L]=e[L];m.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,f,h,g){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=l.value,g!==!0||p===null){let m=h+b*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let D=0,T=h;D!==b;++D,T+=4)a.copy(u[D]).applyMatrix4(M,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}var qr=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vs(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:rs});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=ze),new Xs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},wu=256,Gm=3,Hm=20,$u=256,Ku=16,Vm=3,Wm=new W,Xm=new ne,Yo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new De(new Vs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Wm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(Xm));let p=new Xs(i,s,d);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=g,t.background=b,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wu,Mu(t))}_fromTexture(t,e){t.mapping===os||t.mapping===Zs?this._setSize(t.image.length===0?wu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Ru(t,!1,!1),i=Math.log2(t)-Gm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ru(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=qm(),this._integrationMaterial=Ym());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ku);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Vm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/($u*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Zm());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Ru(n,t,e){return new qr(n,{minFilter:kn,generateMipmaps:t,type:Hn,colorSpace:mr,depthBuffer:e})}function Yr(n,t,e){return new wn({name:n,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:an,blending:rs,depthTest:!1,depthWrite:!1})}function qm(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$u}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ym(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ku}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zm(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cu(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pu(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===io||h===so)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let b=new qr(g.height);return b.fromEquirectangularTexture(n,f),t.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,g=h===io||h===so,b=h===os||h===Zs;if(g||b){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Yo(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||b&&M&&l(M)?(i===null&&(i=new Yo(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",d),p.texture):null}}}return f}function o(f,h){return h===io?f.mapping=os:h===so&&(f.mapping=Zs),f}function l(f){let h=0,g=6;for(let b=0;b<g;b++)f[b]!==void 0&&h++;return h===g}function c(f){let h=f.target;h.removeEventListener("dispose",c);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(f){let h=f.target;h.removeEventListener("dispose",d);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function $m(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&fr("WebGLRenderer: "+i+" extension not supported."),s}}}function Km(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let b=r.get(g);b&&(t.remove(b),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function d(g){let b=g.attributes;for(let p in b)t.update(b[p],n.ARRAY_BUFFER)}function u(g){let b=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=b!==null?b.array.length:p.array.length/3-1,D=p.count>=65535?Mr:br,T=new D(Math.ceil(M/3)*6,1),L=T.array;if(b!==null){let x=b.array;m=b.version;for(let E=0,Z=0;E<M;E+=3){let O=x[E+0],G=x[E+1],j=x[E+2];L[Z++]=O,L[Z++]=G,L[Z++]=G,L[Z++]=j,L[Z++]=j,L[Z++]=O}}else{m=p.version;for(let x=0,E=0;x<M;x+=3){let Z=x+0,O=x+1,G=x+2;L[E++]=Z,L[E++]=O,L[E++]=O,L[E++]=G,L[E++]=G,L[E++]=Z}}T.version=m;let P=r.get(g);P&&t.remove(P),r.set(g,T)}function f(g){let b=r.get(g);if(b){let p=g.index;p!==null&&b.version<p.version&&u(g)}else u(g);return r.get(g)}function h(){for(let g in s){let b=s[g].deref();b!==void 0&&l(b)}}return{get:c,update:d,getWireframeAttribute:f,dispose:h}}function Qm(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,u*a,h),e.update(f,i,h))}function d(u,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,h);let b=0;for(let p=0;p<h;p++)b+=f[p];e.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function jm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tg(n,t,e){let i=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=i.get(o);if(f===void 0||f.count!==u){let Z=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",Z)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],D=0;h===!0&&(D=1),g===!0&&(D=2),b===!0&&(D=3);let T=o.attributes.position.count*D,L=1;T>t.maxTextureSize&&(L=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let P=new Float32Array(T*L*4*u),x=new xr(P,T,L,u);x.type=Rn,x.needsUpdate=!0;let E=D*4;for(let O=0;O<u;O++){let G=p[O],j=m[O],I=M[O],U=T*L*4*O;for(let at=0;at<G.count;at++){let ut=at*E;h===!0&&(s.fromBufferAttribute(G,at),P[U+ut+0]=s.x,P[U+ut+1]=s.y,P[U+ut+2]=s.z,P[U+ut+3]=0),g===!0&&(s.fromBufferAttribute(j,at),P[U+ut+4]=s.x,P[U+ut+5]=s.y,P[U+ut+6]=s.z,P[U+ut+7]=0),b===!0&&(s.fromBufferAttribute(I,at),P[U+ut+8]=s.x,P[U+ut+9]=s.y,P[U+ut+10]=s.z,P[U+ut+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new de(T,L)},i.set(o,f),o.addEventListener("dispose",Z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function eg(n,t,e,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var ng={[Yl]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[$l]:"ACES_FILMIC_TONE_MAPPING",[Ql]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function ig(n,t,e,i,s,r){let a=new xn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new En;d.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let u=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new De(d,u),h=new is(-1,1,1,-1,0,1),g=null,b=null,p=!1,m,M=null,D=[],T=!1;this.setSize=function(L,P){a.setSize(L,P),o!==null&&o.setSize(L,P),l!==null&&l.setSize(L,P);for(let x=0;x<D.length;x++){let E=D[x];E.setSize&&E.setSize(L,P)}},this.setEffects=function(L){D=L,T=D.length>0&&D[0].isRenderPass===!0;let P=a.width,x=a.height;D.length>0&&o===null&&(o=new xn(P,x,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(P,x,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&D.some(Z=>Z.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new pi(P,x),r===!0&&(c.format=mi,c.type=ls)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let Z=0;Z<D.length;Z++){let O=D[Z];O.setSize&&O.setSize(P,x),E&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(L,P){if(p||L.toneMapping===$n&&D.length===0)return!1;if(M=P,P!==null){let x=P.width,E=P.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return T===!1&&L.setRenderTarget(a),m=L.toneMapping,L.toneMapping=$n,!0},this.hasRenderPass=function(){return T},this.end=function(L,P){L.toneMapping=m,p=!0;let x=a,E=o;for(let Z=0;Z<D.length;Z++){let O=D[Z];O.enabled!==!1&&(O.render(L,E,x,P),O.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(g!==L.outputColorSpace||b!==L.toneMapping){g=L.outputColorSpace,b=L.toneMapping,u.defines={},he.getTransfer(g)===ve&&(u.defines.SRGB_TRANSFER="");let Z=ng[b];Z&&(u.defines[Z]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,L.setRenderTarget(M),L.render(f,h),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}var Qu=new qe,ju=new pi(1,1),td=new Ar(1),ed=new xr,nd=new Ba,id=new Er,Iu=[],Lu=[],Du=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function Ks(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jo(n,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function lg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),Ge(e,i)}}function cg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;Nu.set(i),n.uniformMatrix3fv(this.addr,!1,Nu),Ge(e,i)}}function hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Ge(e,i)}}function ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function _g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function $o(n){return n.version===0&&(n.compareFunction=cc,n.needsUpdate=!0),n}function vg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=$o(ju):r=Qu,e.setTexture2D(t||r,s)}function yg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nd,s)}function bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=$o(td):r=id,e.setTextureCube(t||r,s)}function Mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ed,s)}function Sg(n){switch(n){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Tg(n,t){n.uniform1fv(this.addr,t)}function Eg(n,t){let e=Ks(t,this.size,2);n.uniform2fv(this.addr,e)}function Ag(n,t){let e=Ks(t,this.size,3);n.uniform3fv(this.addr,e)}function wg(n,t){let e=Ks(t,this.size,4);n.uniform4fv(this.addr,e)}function Rg(n,t){let e=Ks(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cg(n,t){let e=Ks(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pg(n,t){let e=Ks(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ig(n,t){n.uniform1iv(this.addr,t)}function Lg(n,t){n.uniform2iv(this.addr,t)}function Dg(n,t){n.uniform3iv(this.addr,t)}function Ng(n,t){n.uniform4iv(this.addr,t)}function Ug(n,t){n.uniform1uiv(this.addr,t)}function Fg(n,t){n.uniform2uiv(this.addr,t)}function Og(n,t){n.uniform3uiv(this.addr,t)}function Bg(n,t){n.uniform4uiv(this.addr,t)}function zg(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$o(ju):a=Qu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kg(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nd,r[a])}function Gg(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=$o(td):a=id;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Hg(n,t,e){let i=this.cache,s=t.length,r=Jo(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ed,r[a])}function Vg(n){switch(n){case 5126:return Tg;case 35664:return Eg;case 35665:return Ag;case 35666:return wg;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Hg}}var Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},Ac=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}},wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Fu(n,t){n.seq.push(t),n.map[t.id]=t}function Wg(n,t,e){let i=n.name,s=i.length;for(Sc.lastIndex=0;;){let r=Sc.exec(i),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fu(e,c===void 0?new Ec(o,n,t):new Ac(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new wc(o),Fu(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Ou(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Xg=37297,qg=0;function Yg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Bu=new Zt;function Zg(n){he._getMatrix(Bu,he.workingColorSpace,n);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case gr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Yg(n.getShaderSource(t),o)}else return r}function Jg(n,t){let e=Zg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $g={[Yl]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[$l]:"ACESFilmic",[Ql]:"AgX",[jl]:"Neutral",[Kl]:"Custom"};function Kg(n,t){let e=$g[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qo=new W;function Qg(){he.getLuminanceCoefficients(qo);let n=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function tx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Xr(n){return n!==""}function ku(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(nx,ix)}function ix(n,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rc(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(sx,rx)}function rx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ax={[ss]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function ox(n){return ax[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lx={[Zs]:"ENVMAP_MODE_REFRACTION"};function cx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[no]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hx[n.combine]||"ENVMAP_BLENDING_NONE"}function dx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ox(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=cx(e),u=ux(e),f=jg(e),h=tx(r),g=s.createProgram(),b,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Xr).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(b=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?re.tonemapping_pars_fragment:"",e.toneMapping!==$n?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Rc(a),a=ku(a,e),a=Gu(a,e),o=Rc(o),o=ku(o,e),o=Gu(o,e),a=Hu(a),o=Hu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+b+a,D=m+p+o,T=Ou(s,s.VERTEX_SHADER,M),L=Ou(s,s.FRAGMENT_SHADER,D);s.attachShader(g,T),s.attachShader(g,L),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(O){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(g)||"",j=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(L)||"",U=G.trim(),at=j.trim(),ut=I.trim(),nt=!0,yt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,L);else{let st=zu(s,T,"vertex"),mt=zu(s,L,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+U+`
`+st+`
`+mt)}else U!==""?Yt("WebGLProgram: Program Info Log:",U):(at===""||ut==="")&&(yt=!1);yt&&(O.diagnostics={runnable:nt,programLog:U,vertexShader:{log:at,prefix:b},fragmentShader:{log:ut,prefix:p}})}s.deleteShader(T),s.deleteShader(L),x=new $s(s,g),E=ex(s,g)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let Z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(g,Xg)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=L,this}var fx=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Pc(t),e.set(t,i)),i}},Pc=class{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}};function px(n){return n===zi||n===Gr||n===Hr}function mx(n,t,e,i,s,r){let a=new _r,o=new Cc,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,Z,O,G,j){let I=O.fog,U=G.geometry,at=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,ut=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||at,ut),yt=f[x.type],st=i.precision;x.precision!==null&&(st=i.getMaxPrecision(x.precision),st!==x.precision&&Yt("WebGLProgram.getParameters:",x.precision,"not supported, using",st,"instead."));let mt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,xt=mt!==void 0?mt.length:0,zt=0;U.morphAttributes.position!==void 0&&(zt=1),U.morphAttributes.normal!==void 0&&(zt=2),U.morphAttributes.color!==void 0&&(zt=3);let Jt,lt,Ct,Ut;if(yt){let Rt=Qn[yt];Jt=Rt.vertexShader,lt=Rt.fragmentShader}else{Jt=x.vertexShader,lt=x.fragmentShader;let Rt=o.getVertexShaderStage(x),ye=o.getFragmentShaderStage(x);o.update(x,Rt,ye),Ct=Rt.id,Ut=ye.id}let Vt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Kt=G.isInstancedMesh===!0,Te=G.isBatchedMesh===!0,Wt=!!x.map,pe=!!x.matcap,ge=!!nt,se=ge&&nt.isPMREMTexture===!0,Be=!!x.aoMap,Le=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,R=!!x.normalMap,N=!!x.displacementMap,F=!!x.emissiveMap,H=!!x.metalnessMap,$=!!x.roughnessMap,tt=x.anisotropy>0,S=x.clearcoat>0,At=x.diffuseRoughness>0,gt=x.dispersion>0,St=x.retroreflectivity>0,ft=x.iridescence>0,Dt=x.sheen>0,Mt=x.transmission>0,Lt=tt&&!!x.anisotropyMap,w=S&&!!x.clearcoatMap,v=S&&!!x.clearcoatNormalMap,X=S&&!!x.clearcoatRoughnessMap,dt=At&&!!x.diffuseRoughnessMap,it=ft&&!!x.iridescenceMap,k=ft&&!!x.iridescenceThicknessMap,rt=Dt&&!!x.sheenColorMap,q=Dt&&!!x.sheenRoughnessMap,B=!!x.specularMap,ot=!!x.specularColorMap,C=!!x.specularIntensityMap,V=Mt&&!!x.transmissionMap,K=Mt&&!!x.thicknessMap,ct=!!x.gradientMap,pt=!!x.alphaMap,_t=x.alphaTest>0,kt=!!x.alphaHash,ee=!!x.extensions,bt=$n;x.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(bt=n.toneMapping);let Ht=se?nt.isCompressedCubeTexture?nt.image[0].mipmaps:nt.mipmaps:null,te={shaderID:yt,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:lt,defines:x.defines,customVertexShaderID:Ct,customFragmentShaderID:Ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:st,batching:Te,batchingColor:Te&&G._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&G.instanceColor!==null,instancingMorph:Kt&&G.morphTexture!==null,outputColorSpace:Vt===null?n.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:pe,envMap:ge,envMapMode:ge&&nt.mapping,envMapPMREM:se,envMapMaxLod:se?Ht.length-1:null,envMapSize:se?Ht[0].width:null,aoMap:Be,lightMap:Le,bumpMap:Je,normalMap:R,displacementMap:N,emissiveMap:F,normalMapObjectSpace:R&&x.normalMapType===hu,normalMapTangentSpace:R&&x.normalMapType===Wo,packedNormalMap:R&&x.normalMapType===Wo&&px(x.normalMap.format),metalnessMap:H,roughnessMap:$,anisotropy:tt,anisotropyMap:Lt,clearcoat:S,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:X,diffuseRoughness:At,diffuseRoughnessMap:dt,dispersion:gt,retroreflection:St,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:k,sheen:Dt,sheenColorMap:rt,sheenRoughnessMap:q,specularMap:B,specularColorMap:ot,specularIntensityMap:C,transmission:Mt,transmissionMap:V,thicknessMap:K,gradientMap:ct,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:_t,alphaHash:kt,combine:x.combine,mapUv:Wt&&h(x.map.channel),aoMapUv:Be&&h(x.aoMap.channel),lightMapUv:Le&&h(x.lightMap.channel),bumpMapUv:Je&&h(x.bumpMap.channel),normalMapUv:R&&h(x.normalMap.channel),displacementMapUv:N&&h(x.displacementMap.channel),emissiveMapUv:F&&h(x.emissiveMap.channel),metalnessMapUv:H&&h(x.metalnessMap.channel),roughnessMapUv:$&&h(x.roughnessMap.channel),anisotropyMapUv:Lt&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:k&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&h(x.sheenRoughnessMap.channel),specularMapUv:B&&h(x.specularMap.channel),specularColorMapUv:ot&&h(x.specularColorMap.channel),specularIntensityMapUv:C&&h(x.specularIntensityMap.channel),transmissionMapUv:V&&h(x.transmissionMap.channel),thicknessMapUv:K&&h(x.thicknessMap.channel),alphaMapUv:pt&&h(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(R||tt),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(Wt||pt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&R===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:zt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Te)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function b(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let Z in x.defines)E.push(Z),E.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(p(E,x),m(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function m(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let E=f[x.type],Z;if(E){let O=Qn[E];Z=Tu.clone(O.uniforms)}else Z=x.uniforms;return Z}function D(x,E){let Z=d.get(E);return Z!==void 0?++Z.usedTimes:(Z=new dx(n,E,x,s),c.push(Z),d.set(E,Z)),Z}function T(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function L(x){o.remove(x)}function P(){o.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:M,acquireProgram:D,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:P}}function gx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,b,p,m){let M=n[t];return M===void 0?(M={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:p,group:m},n[t]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=g,M.materialVariant=a(f),M.groupOrder=b,M.renderOrder=f.renderOrder,M.z=p,M.group=m),t++,M}function l(f,h,g,b,p,m,M){M.reversedDepth===!0&&(p=-p);let D=o(f,h,g,b,p,m);g.transmission>0?i.push(D):g.transparent===!0?s.push(D):e.push(D)}function c(f,h,g,b,p,m){let M=o(f,h,g,b,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function d(f,h){e.length>1&&e.sort(f||xx),i.length>1&&i.sort(h||Wu),s.length>1&&s.sort(h||Wu)}function u(){for(let f=t,h=n.length;f<h;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function _x(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Xu,n.set(i,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ne};break;case"SpotLight":e={position:new W,direction:new W,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function yx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var bx=0;function Mx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Sx(n){let t=new vx,e=yx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new fe,a=new fe;function o(c){let d=0,u=0,f=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let h=0,g=0,b=0,p=0,m=0,M=0,D=0,T=0,L=0,P=0,x=0,E=0,Z=0,O=0;c.sort(Mx);for(let j=0,I=c.length;j<I;j++){let U=c[j],at=U.color,ut=U.intensity,nt=U.distance,yt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===zi?yt=U.shadow.map.texture:yt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=at.r*ut,u+=at.g*ut,f+=at.b*ut;else if(U.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(U.sh.coefficients[st],ut);O++}else if(U.isSunLight){let st=t.get(U);if(st.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let mt=U.shadow,xt=e.get(U);xt.shadowIntensity=mt.intensity,xt.shadowBias=mt.bias,xt.shadowNormalBias=mt.normalBias,xt.shadowRadius=mt.radius,xt.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),i.sunShadow[g]=xt,i.sunShadowMap[g]=yt;let zt=mt.getViewportCount();for(let Jt=0;Jt<zt;Jt++)i.sunShadowMatrix[b+Jt]=mt.getMatrix(Jt),i.sunShadowCascade[b+Jt]=mt._cascadeData[Jt];b+=zt,g++}i.sun[h]=st,h++}else if(U.isDirectionalLight){let st=t.get(U);if(st.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let mt=U.shadow,xt=e.get(U);xt.shadowIntensity=mt.intensity,xt.shadowBias=mt.bias,xt.shadowNormalBias=mt.normalBias,xt.shadowRadius=mt.radius,xt.shadowMapSize=mt.mapSize,i.directionalShadow[p]=xt,i.directionalShadowMap[p]=yt,i.directionalShadowMatrix[p]=U.shadow.matrix,L++}i.directional[p]=st,p++}else if(U.isSpotLight){let st=t.get(U);st.position.setFromMatrixPosition(U.matrixWorld),st.color.copy(at).multiplyScalar(ut),st.distance=nt,st.coneCos=Math.cos(U.angle),st.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),st.decay=U.decay,i.spot[M]=st;let mt=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,mt.updateMatrices(U),U.castShadow&&Z++),i.spotLightMatrix[M]=mt.matrix,U.castShadow){let xt=e.get(U);xt.shadowIntensity=mt.intensity,xt.shadowBias=mt.bias,xt.shadowNormalBias=mt.normalBias,xt.shadowRadius=mt.radius,xt.shadowMapSize=mt.mapSize,i.spotShadow[M]=xt,i.spotShadowMap[M]=yt,x++}M++}else if(U.isRectAreaLight){let st=t.get(U);st.color.copy(at).multiplyScalar(ut),st.halfWidth.set(U.width*.5,0,0),st.halfHeight.set(0,U.height*.5,0),i.rectArea[D]=st,D++}else if(U.isPointLight){let st=t.get(U);if(st.color.copy(U.color).multiplyScalar(U.intensity),st.distance=U.distance,st.decay=U.decay,U.castShadow){let mt=U.shadow,xt=e.get(U);xt.shadowIntensity=mt.intensity,xt.shadowBias=mt.bias,xt.shadowNormalBias=mt.normalBias,xt.shadowRadius=mt.radius,xt.shadowMapSize=mt.mapSize,xt.shadowCameraNear=mt.camera.near,xt.shadowCameraFar=mt.camera.far,i.pointShadow[m]=xt,i.pointShadowMap[m]=yt,i.pointShadowMatrix[m]=U.shadow.matrix,P++}i.point[m]=st,m++}else if(U.isHemisphereLight){let st=t.get(U);st.skyColor.copy(U.color).multiplyScalar(ut),st.groundColor.copy(U.groundColor).multiplyScalar(ut),i.hemi[T]=st,T++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;let G=i.hash;(G.sunLength!==h||G.directionalLength!==p||G.pointLength!==m||G.spotLength!==M||G.rectAreaLength!==D||G.hemiLength!==T||G.numSunShadows!==g||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==x||G.numSpotMaps!==E||G.numLightProbes!==O)&&(i.sun.length=h,i.directional.length=p,i.spot.length=M,i.rectArea.length=D,i.point.length=m,i.hemi.length=T,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=P,i.pointShadowMap.length=P,i.pointShadowMatrix.length=P,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-Z,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=Z,i.numLightProbes=O,G.sunLength=h,G.directionalLength=p,G.pointLength=m,G.spotLength=M,G.rectAreaLength=D,G.hemiLength=T,G.numSunShadows=g,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=x,G.numSpotMaps=E,G.numLightProbes=O,i.version=bx++)}function l(c,d){let u=0,f=0,h=0,g=0,b=0,p=0,m=d.matrixWorldInverse;for(let M=0,D=c.length;M<D;M++){let T=c[M];if(T.isSunLight){let L=i.sun[u];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(m),u++}else if(T.isDirectionalLight){let L=i.directional[f];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),f++}else if(T.isSpotLight){let L=i.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),g++}else if(T.isRectAreaLight){let L=i.rectArea[b];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),b++}else if(T.isPointLight){let L=i.point[h];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){let L=i.hemi[p];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function qu(n){let t=new Sx(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qu(n),t.set(s,[o])):r>=a.length?(o=new qu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wx=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Rx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Yu=new fe,Wr=new W,Tc=new W;function Cx(n,t,e){let i=new Li,s=new de,r=new de,a=new Re,o=new Ha,l=new Va,c={},d=e.maxTextureSize,u={[Bi]:an,[an]:Bi,[ln]:ln},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new En;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new De(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let m=this.type;this.render=function(P,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===Gh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let Z=n.getRenderTarget(),O=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),j=n.state;j.setBlending(rs),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let I=m!==this.type;I&&x.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(at=>at.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,at=P.length;U<at;U++){let ut=P[U],nt=ut.shadow;if(nt===void 0){Yt("WebGLShadowMap:",ut,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let yt=nt.getFrameExtents();s.multiply(yt),r.copy(nt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/yt.x),s.x=r.x*yt.x,nt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/yt.y),s.y=r.y*yt.y,nt.mapSize.y=r.y));let st=n.state.buffers.depth.getReversed();if(nt.camera._reversedDepth=st,nt.map===null||I===!0){if(nt.map!==null&&(nt.map.depthTexture!==null&&(nt.map.depthTexture.dispose(),nt.map.depthTexture=null),nt.map.dispose()),this.type===qs){if(ut.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}nt.map=new xn(s.x,s.y,{format:zi,type:Hn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),nt.map.texture.name=ut.name+".shadowMap",nt.map.depthTexture=new pi(s.x,s.y,Rn),nt.map.depthTexture.name=ut.name+".shadowMapDepth",nt.map.depthTexture.format=di,nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Ae,nt.map.depthTexture.magFilter=Ae}else ut.isPointLight?(nt.map=new qr(s.x),nt.map.depthTexture=new Ar(s.x,Gn)):(nt.map=new xn(s.x,s.y),nt.map.depthTexture=new pi(s.x,s.y,Gn)),nt.map.depthTexture.name=ut.name+".shadowMap",nt.map.depthTexture.format=di,this.type===ss?(nt.map.depthTexture.compareFunction=st?lc:oc,nt.map.depthTexture.minFilter=ze,nt.map.depthTexture.magFilter=ze):(nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Ae,nt.map.depthTexture.magFilter=Ae);nt.camera.updateProjectionMatrix()}nt.map.isWebGLCubeRenderTarget!==!0&&(nt.map.width!==s.x||nt.map.height!==s.y)&&nt.map.setSize(s.x,s.y);let mt=nt.map.isWebGLCubeRenderTarget?6:nt.getViewportCount();ut.isPointLight!==!0&&nt.updateMatrices(ut,E);let xt=(nt.camera.layers.mask&4294967294)!==0?nt.camera.layers:E.layers;for(let zt=0;zt<mt;zt++){let Jt=nt.getCamera(zt);if(ut.isPointLight){let lt=nt.camera,Ct=nt.matrix,Ut=ut.distance||lt.far;Ut!==lt.far&&(lt.far=Ut,lt.updateProjectionMatrix()),Wr.setFromMatrixPosition(ut.matrixWorld),lt.position.copy(Wr),Tc.copy(lt.position),Tc.add(wx[zt]),lt.up.copy(Rx[zt]),lt.lookAt(Tc),lt.updateMatrixWorld(),Ct.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Yu.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),nt._frustum.setFromProjectionMatrix(Yu,lt.coordinateSystem,lt.reversedDepth)}if(nt.map.isWebGLCubeRenderTarget)n.setRenderTarget(nt.map,zt),n.clear();else{zt===0&&(n.setRenderTarget(nt.map),n.clear());let lt=nt.getViewport(zt);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),j.viewport(a)}i=nt.getFrustum(zt),T(x,E,Jt,ut,xt,this.type)}nt.isPointLightShadow!==!0&&this.type===qs&&M(nt,E),nt.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Z,O,G)};function M(P,x){let E=t.update(b);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null?P.mapPass=new xn(s.x,s.y,{format:zi,type:Hn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(x,null,E,f,b,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value.set(P.map.width,P.map.height),h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(x,null,E,h,b,null)}function D(P,x,E,Z){let O=null,G=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)O=G;else if(O=E.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let j=O.uuid,I=x.uuid,U=c[j];U===void 0&&(U={},c[j]=U);let at=U[I];at===void 0&&(at=O.clone(),U[I]=at,x.addEventListener("dispose",L)),O=at}if(O.visible=x.visible,O.wireframe=x.wireframe,Z===qs?O.side=x.shadowSide!==null?x.shadowSide:x.side:O.side=x.shadowSide!==null?x.shadowSide:u[x.side],O.alphaMap=x.alphaMap,O.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,O.map=x.map,O.clipShadows=x.clipShadows,O.clippingPlanes=x.clippingPlanes,O.clipIntersection=x.clipIntersection,O.displacementMap=x.displacementMap,O.displacementScale=x.displacementScale,O.displacementBias=x.displacementBias,O.wireframeLinewidth=x.wireframeLinewidth,O.linewidth=x.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let j=n.properties.get(O);j.light=E}return O}function T(P,x,E,Z,O,G){if(P.visible===!1)return;if(P.layers.test(O)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&G===qs)&&(!P.frustumCulled||P.intersectsFrustum(i))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);let U=t.update(P),at=P.material;if(Array.isArray(at)){let ut=U.groups;for(let nt=0,yt=ut.length;nt<yt;nt++){let st=ut[nt],mt=at[st.materialIndex];if(mt&&mt.visible){let xt=D(P,mt,Z,G);P.onBeforeShadow(n,P,x,E,U,xt,st),n.renderBufferDirect(E,null,U,xt,P,st),P.onAfterShadow(n,P,x,E,U,xt,st)}}}else if(at.visible){let ut=D(P,at,Z,G);P.onBeforeShadow(n,P,x,E,U,ut,null),n.renderBufferDirect(E,null,U,ut,P,null),P.onAfterShadow(n,P,x,E,U,ut,null)}}let I=P.children;for(let U=0,at=I.length;U<at;U++)T(I[U],x,E,Z,O,G)}function L(P){P.target.removeEventListener("dispose",L);for(let E in c){let Z=c[E],O=P.target.uuid;O in Z&&(Z[O].dispose(),delete Z[O])}}}function Px(n,t){function e(){let C=!1,V=new Re,K=null,ct=new Re(0,0,0,0);return{setMask:function(pt){K!==pt&&!C&&(n.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){C=pt},setClear:function(pt,_t,kt,ee,bt){bt===!0&&(pt*=ee,_t*=ee,kt*=ee),V.set(pt,_t,kt,ee),ct.equals(V)===!1&&(n.clearColor(pt,_t,kt,ee),ct.copy(V))},reset:function(){C=!1,K=null,ct.set(-1,0,0,0)}}}function i(){let C=!1,V=!1,K=null,ct=null,pt=null;return{setReversed:function(_t){if(V!==_t){let kt=t.get("EXT_clip_control");_t?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),V=_t;let ee=pt;pt=null,this.setClear(ee)}},getReversed:function(){return V},setTest:function(_t){_t?wt(n.DEPTH_TEST):Kt(n.DEPTH_TEST)},setMask:function(_t){K!==_t&&!C&&(n.depthMask(_t),K=_t)},setFunc:function(_t){if(V&&(_t=bu[_t]),ct!==_t){switch(_t){case wa:n.depthFunc(n.NEVER);break;case Ra:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Fs:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=_t}},setLocked:function(_t){C=_t},setClear:function(_t){pt!==_t&&(pt=_t,V&&(_t=1-_t),n.clearDepth(_t))},reset:function(){C=!1,K=null,ct=null,pt=null,V=!1}}}function s(){let C=!1,V=null,K=null,ct=null,pt=null,_t=null,kt=null,ee=null,bt=null;return{setTest:function(Ht){C||(Ht?wt(n.STENCIL_TEST):Kt(n.STENCIL_TEST))},setMask:function(Ht){V!==Ht&&!C&&(n.stencilMask(Ht),V=Ht)},setFunc:function(Ht,te,Rt){(K!==Ht||ct!==te||pt!==Rt)&&(n.stencilFunc(Ht,te,Rt),K=Ht,ct=te,pt=Rt)},setOp:function(Ht,te,Rt){(_t!==Ht||kt!==te||ee!==Rt)&&(n.stencilOp(Ht,te,Rt),_t=Ht,kt=te,ee=Rt)},setLocked:function(Ht){C=Ht},setClear:function(Ht){bt!==Ht&&(n.clearStencil(Ht),bt=Ht)},reset:function(){C=!1,V=null,K=null,ct=null,pt=null,_t=null,kt=null,ee=null,bt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,d={},u={},f={},h=new WeakMap,g=[],b=null,p=!1,m=null,M=null,D=null,T=null,L=null,P=null,x=null,E=new ne(0,0,0),Z=0,O=!1,G=null,j=null,I=null,U=null,at=null,ut=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,yt=0,st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(st)[1]),nt=yt>=1):st.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),nt=yt>=2);let mt=null,xt={},zt=n.getParameter(n.SCISSOR_BOX),Jt=n.getParameter(n.VIEWPORT),lt=new Re().fromArray(zt),Ct=new Re().fromArray(Jt);function Ut(C,V,K,ct){let pt=new Uint8Array(4),_t=n.createTexture();n.bindTexture(C,_t),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<K;kt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(V,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(V+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return _t}let Vt={};Vt[n.TEXTURE_2D]=Ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Vt[n.TEXTURE_CUBE_MAP]=Ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Vt[n.TEXTURE_2D_ARRAY]=Ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Vt[n.TEXTURE_3D]=Ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),wt(n.DEPTH_TEST),a.setFunc(Us),Je(!1),R(Hl),wt(n.CULL_FACE),Be(rs);function wt(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Kt(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Te(C,V){return f[C]!==V?(n.bindFramebuffer(C,V),f[C]=V,C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=V),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=V),!0):!1}function Wt(C,V){let K=g,ct=!1;if(C){K=h.get(V),K===void 0&&(K=[],h.set(V,K));let pt=C.textures;if(K.length!==pt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,kt=pt.length;_t<kt;_t++)K[_t]=n.COLOR_ATTACHMENT0+_t;K.length=pt.length,ct=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ct=!0);ct&&n.drawBuffers(K)}function pe(C){return b!==C?(n.useProgram(C),b=C,!0):!1}let ge={[as]:n.FUNC_ADD,[Vh]:n.FUNC_SUBTRACT,[Wh]:n.FUNC_REVERSE_SUBTRACT};ge[Xh]=n.MIN,ge[qh]=n.MAX;let se={[Yh]:n.ZERO,[Zh]:n.ONE,[Jh]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[eu]:n.SRC_ALPHA_SATURATE,[jh]:n.DST_COLOR,[Kh]:n.DST_ALPHA,[$h]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[tu]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[nu]:n.CONSTANT_COLOR,[iu]:n.ONE_MINUS_CONSTANT_COLOR,[su]:n.CONSTANT_ALPHA,[ru]:n.ONE_MINUS_CONSTANT_ALPHA};function Be(C,V,K,ct,pt,_t,kt,ee,bt,Ht){if(C===rs){p===!0&&(Kt(n.BLEND),p=!1);return}if(p===!1&&(wt(n.BLEND),p=!0),C!==Hh){if(C!==m||Ht!==O){if((M!==as||L!==as)&&(n.blendEquation(n.FUNC_ADD),M=as,L=as),Ht)switch(C){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$t("WebGLState: Invalid blending: ",C);break}else switch(C){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",C);break}D=null,T=null,P=null,x=null,E.set(0,0,0),Z=0,m=C,O=Ht}return}pt=pt||V,_t=_t||K,kt=kt||ct,(V!==M||pt!==L)&&(n.blendEquationSeparate(ge[V],ge[pt]),M=V,L=pt),(K!==D||ct!==T||_t!==P||kt!==x)&&(n.blendFuncSeparate(se[K],se[ct],se[_t],se[kt]),D=K,T=ct,P=_t,x=kt),(ee.equals(E)===!1||bt!==Z)&&(n.blendColor(ee.r,ee.g,ee.b,bt),E.copy(ee),Z=bt),m=C,O=!1}function Le(C,V){C.side===ln?Kt(n.CULL_FACE):wt(n.CULL_FACE);let K=C.side===an;V&&(K=!K),Je(K),C.blending===Ys&&C.transparent===!1?Be(rs):Be(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):Kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(C){G!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),G=C)}function R(C){C!==zh?(wt(n.CULL_FACE),C!==j&&(C===Hl?n.cullFace(n.BACK):C===kh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Kt(n.CULL_FACE),j=C}function N(C){C!==I&&(nt&&n.lineWidth(C),I=C)}function F(C,V,K){C?(wt(n.POLYGON_OFFSET_FILL),(U!==V||at!==K)&&(U=V,at=K,a.getReversed()&&(V=-V,K=-K),n.polygonOffset(V,K))):Kt(n.POLYGON_OFFSET_FILL)}function H(C){C?wt(n.SCISSOR_TEST):Kt(n.SCISSOR_TEST)}function $(C){C===void 0&&(C=n.TEXTURE0+ut-1),mt!==C&&(n.activeTexture(C),mt=C)}function tt(C,V,K){K===void 0&&(mt===null?K=n.TEXTURE0+ut-1:K=mt);let ct=xt[K];ct===void 0&&(ct={type:void 0,texture:void 0},xt[K]=ct),(ct.type!==C||ct.texture!==V)&&(mt!==K&&(n.activeTexture(K),mt=K),n.bindTexture(C,V||Vt[C]),ct.type=C,ct.texture=V)}function S(){let C=xt[mt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function gt(){try{n.compressedTexImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function St(){try{n.texSubImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function ft(){try{n.texSubImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function Dt(){try{n.compressedTexSubImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function Lt(){try{n.texStorage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function w(){try{n.texStorage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function v(){try{n.texImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function X(){try{n.texImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function dt(C){return u[C]!==void 0?u[C]:n.getParameter(C)}function it(C,V){u[C]!==V&&(n.pixelStorei(C,V),u[C]=V)}function k(C){lt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function rt(C){Ct.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Ct.copy(C))}function q(C,V){let K=c.get(V);K===void 0&&(K=new WeakMap,c.set(V,K));let ct=K.get(C);ct===void 0&&(ct=n.getUniformBlockIndex(V,C.name),n.uniformBlockBinding(V,ct,ct),K.set(C,ct))}function B(C,V,K){let pt=c.get(V).get(C);l[pt]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,pt,K),l[pt]=K)}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},mt=null,xt={},f={},l={},h=new WeakMap,g=[],b=null,p=!1,m=null,M=null,D=null,T=null,L=null,P=null,x=null,E=new ne(0,0,0),Z=0,O=!1,G=null,j=null,I=null,U=null,at=null,lt.set(0,0,n.canvas.width,n.canvas.height),Ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:wt,disable:Kt,bindFramebuffer:Te,drawBuffers:Wt,useProgram:pe,setBlending:Be,setMaterial:Le,setFlipSided:Je,setCullFace:R,setLineWidth:N,setPolygonOffset:F,setScissorTest:H,activeTexture:$,bindTexture:tt,unbindTexture:S,compressedTexImage2D:At,compressedTexImage3D:gt,texImage2D:v,texImage3D:X,pixelStorei:it,getParameter:dt,updateUBOMapping:q,uniformBlockBinding:B,texStorage2D:Lt,texStorage3D:w,texSubImage2D:St,texSubImage3D:ft,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Mt,scissor:k,viewport:rt,reset:ot}}function Ix(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,d=new WeakMap,u=new Set,f,h=new WeakMap,g=new Set,b=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return p?new OffscreenCanvas(w,v):zs("canvas")}function M(w,v,X){let dt=1,it=Lt(w);if((it.width>X||it.height>X)&&(dt=X/Math.max(it.width,it.height)),dt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let k=Math.floor(dt*it.width),rt=Math.floor(dt*it.height);f===void 0&&(f=m(k,rt));let q=v?m(k,rt):f;return q.width=k,q.height=rt,q.getContext("2d").drawImage(w,0,0,k,rt),Yt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+k+"x"+rt+")."),q}else return"data"in w&&Yt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function D(w){return w.generateMipmaps}function T(w){n.generateMipmap(w)}function L(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(w,v,X,dt,it,k=!1){if(w!==null){if(n[w]!==void 0)return n[w];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt;dt&&(rt=t.get("EXT_texture_norm16"),rt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(X===n.FLOAT&&(q=n.R32F),X===n.HALF_FLOAT&&(q=n.R16F),X===n.UNSIGNED_BYTE&&(q=n.R8),X===n.UNSIGNED_SHORT&&rt&&(q=rt.R16_EXT),X===n.SHORT&&rt&&(q=rt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(q=n.R8UI),X===n.UNSIGNED_SHORT&&(q=n.R16UI),X===n.UNSIGNED_INT&&(q=n.R32UI),X===n.BYTE&&(q=n.R8I),X===n.SHORT&&(q=n.R16I),X===n.INT&&(q=n.R32I)),v===n.RG&&(X===n.FLOAT&&(q=n.RG32F),X===n.HALF_FLOAT&&(q=n.RG16F),X===n.UNSIGNED_BYTE&&(q=n.RG8),X===n.UNSIGNED_SHORT&&rt&&(q=rt.RG16_EXT),X===n.SHORT&&rt&&(q=rt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(q=n.RG8UI),X===n.UNSIGNED_SHORT&&(q=n.RG16UI),X===n.UNSIGNED_INT&&(q=n.RG32UI),X===n.BYTE&&(q=n.RG8I),X===n.SHORT&&(q=n.RG16I),X===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(q=n.RGB16UI),X===n.UNSIGNED_INT&&(q=n.RGB32UI),X===n.BYTE&&(q=n.RGB8I),X===n.SHORT&&(q=n.RGB16I),X===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),X===n.UNSIGNED_INT&&(q=n.RGBA32UI),X===n.BYTE&&(q=n.RGBA8I),X===n.SHORT&&(q=n.RGBA16I),X===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(X===n.UNSIGNED_SHORT&&rt&&(q=rt.RGB16_EXT),X===n.SHORT&&rt&&(q=rt.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){let B=k?gr:he.getTransfer(it);X===n.FLOAT&&(q=n.RGBA32F),X===n.HALF_FLOAT&&(q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(q=B===ve?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&rt&&(q=rt.RGBA16_EXT),X===n.SHORT&&rt&&(q=rt.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(w,v){let X;return w?v===null||v===Gn||v===ls?X=n.DEPTH24_STENCIL8:v===Rn?X=n.DEPTH32F_STENCIL8:v===Js&&(X=n.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===ls?X=n.DEPTH_COMPONENT24:v===Rn?X=n.DEPTH_COMPONENT32F:v===Js&&(X=n.DEPTH_COMPONENT16),X}function E(w,v){return D(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ae&&w.minFilter!==ze?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function Z(w){let v=new WeakRef(w);i.get(w).__ref=v,g.add(v),b.register(w,v,v)}function O(w){let v=i.get(w).__ref;v!==void 0&&(g.delete(v),b.unregister(v))}function G(w){I(w.target)}function j(w){U(w.target)}function I(w){w.removeEventListener("dispose",G),O(w),ut(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&u.delete(w)}function U(w){w.removeEventListener("dispose",j),O(w),yt(w)}function at(){for(let w of g){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?U(v):I(v))}g.clear(),u.clear()}function ut(w){let v=i.get(w);if(v.__webglInit===void 0)return;let X=w.source,dt=h.get(X);if(dt){let it=dt[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&nt(w),Object.keys(dt).length===0&&h.delete(X)}i.remove(w)}function nt(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let X=w.source,dt=h.get(X);delete dt[v.__cacheKey],a.memory.textures--}function yt(w){let v=i.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let X=w.depthTexture;if(X&&X.renderTarget===w&&I(X),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let k=0;k<v.__webglFramebuffer[it].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[it][k]);else n.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)n.deleteFramebuffer(v.__webglFramebuffer[it]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let dt=w.textures;for(let it=0,k=dt.length;it<k;it++){let rt=i.get(dt[it]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(dt[it])}i.remove(w)}let st=0;function mt(){st=0}function xt(){return st}function zt(w){st=w}function Jt(){let w=st;return w>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,w}function lt(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Ct(w,v){let X=i.get(w);if(w.isVideoTexture&&Dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){let dt=w.image;if(dt===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(X,w,v);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+v)}function Ut(w,v){let X=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Le(X,w,v);return}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+v)}function Vt(w,v){let X=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Le(X,w,v);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+v)}function wt(w,v){let X=i.get(w);if(w.version>0&&X.__version!==w.version){Je(X,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+v)}let Kt={[Os]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},Te={[Ae]:n.NEAREST,[lu]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},Wt={[du]:n.NEVER,[cc]:n.ALWAYS,[fu]:n.LESS,[oc]:n.LEQUAL,[pu]:n.EQUAL,[lc]:n.GEQUAL,[mu]:n.GREATER,[gu]:n.NOTEQUAL};function pe(w,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ze||v.magFilter===ro||v.magFilter===Fr||v.magFilter===kn||v.minFilter===ze||v.minFilter===ro||v.minFilter===Fr||v.minFilter===kn)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Kt[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Kt[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Kt[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ae||v.minFilter!==Fr&&v.minFilter!==kn||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ge(w,v){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",G),Z(v));let dt=v.source,it=h.get(dt);it===void 0&&(it={},h.set(dt,it));let k=lt(v);if(k!==w.__cacheKey){it[k]===void 0&&(it[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),it[k].usedTimes++;let rt=it[w.__cacheKey];rt!==void 0&&(it[w.__cacheKey].usedTimes--,rt.usedTimes===0&&nt(v)),w.__cacheKey=k,w.__webglTexture=it[k].texture}return X}function se(w,v,X){return Math.floor(Math.floor(w/X)/v)}function Be(w,v,X,dt){let k=w.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,X,dt,v.data);else{k.sort((C,V)=>C.start-V.start);let rt=0;for(let C=1;C<k.length;C++){let V=k[rt],K=k[C],ct=V.start+V.count,pt=se(K.start,v.width,4),_t=se(V.start,v.width,4);K.start<=ct+1&&pt===_t&&se(K.start+K.count-1,v.width,4)===pt?V.count=Math.max(V.count,K.start+K.count-V.start):(++rt,k[rt]=K)}k.length=rt+1;let q=e.getParameter(n.UNPACK_ROW_LENGTH),B=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let C=0,V=k.length;C<V;C++){let K=k[C],ct=Math.floor(K.start/4),pt=Math.ceil(K.count/4),_t=ct%v.width,kt=Math.floor(ct/v.width),ee=pt,bt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(n.UNPACK_SKIP_ROWS,kt),e.texSubImage2D(n.TEXTURE_2D,0,_t,kt,ee,bt,X,dt,v.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,B),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function Le(w,v,X){let dt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(dt=n.TEXTURE_3D);let it=ge(w,v),k=v.source;e.bindTexture(dt,w.__webglTexture,n.TEXTURE0+X);let rt=i.get(k);if(k.version!==rt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let bt=he.getPrimaries(he.workingColorSpace),Ht=v.colorSpace===gi?null:he.getPrimaries(v.colorSpace),te=v.colorSpace===gi||bt===Ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let B=M(v.image,!1,s.maxTextureSize);B=Mt(v,B);let ot=r.convert(v.format,v.colorSpace),C=r.convert(v.type),V=P(v.internalFormat,ot,C,v.normalized,v.colorSpace,v.isVideoTexture);pe(dt,v);let K,ct=v.mipmaps,pt=v.isVideoTexture!==!0,_t=rt.__version===void 0||it===!0,kt=k.dataReady,ee=E(v,B);if(v.isDepthTexture)V=x(v.format===mi,v.type),_t&&(pt?e.texStorage2D(n.TEXTURE_2D,1,V,B.width,B.height):e.texImage2D(n.TEXTURE_2D,0,V,B.width,B.height,0,ot,C,null));else if(v.isDataTexture)if(ct.length>0){pt&&_t&&e.texStorage2D(n.TEXTURE_2D,ee,V,ct[0].width,ct[0].height);for(let bt=0,Ht=ct.length;bt<Ht;bt++)K=ct[bt],pt?kt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,K.width,K.height,ot,C,K.data):e.texImage2D(n.TEXTURE_2D,bt,V,K.width,K.height,0,ot,C,K.data);v.generateMipmaps=!1}else pt?(_t&&e.texStorage2D(n.TEXTURE_2D,ee,V,B.width,B.height),kt&&Be(v,B,ot,C)):e.texImage2D(n.TEXTURE_2D,0,V,B.width,B.height,0,ot,C,B.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){pt&&_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,V,ct[0].width,ct[0].height,B.depth);for(let bt=0,Ht=ct.length;bt<Ht;bt++)if(K=ct[bt],v.format!==Vn)if(ot!==null)if(pt){if(kt)if(v.layerUpdates.size>0){let te=xc(K.width,K.height,v.format,v.type);for(let Rt of v.layerUpdates){let ye=K.data.subarray(Rt*te/K.data.BYTES_PER_ELEMENT,(Rt+1)*te/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,Rt,K.width,K.height,1,ot,ye)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,K.width,K.height,B.depth,ot,K.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,bt,V,K.width,K.height,B.depth,0,K.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?kt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,K.width,K.height,B.depth,ot,C,K.data):e.texImage3D(n.TEXTURE_2D_ARRAY,bt,V,K.width,K.height,B.depth,0,ot,C,K.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{pt&&_t&&e.texStorage2D(n.TEXTURE_2D,ee,V,ct[0].width,ct[0].height);for(let bt=0,Ht=ct.length;bt<Ht;bt++)K=ct[bt],v.format!==Vn?ot!==null?pt?kt&&e.compressedTexSubImage2D(n.TEXTURE_2D,bt,0,0,K.width,K.height,ot,K.data):e.compressedTexImage2D(n.TEXTURE_2D,bt,V,K.width,K.height,0,K.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?kt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,K.width,K.height,ot,C,K.data):e.texImage2D(n.TEXTURE_2D,bt,V,K.width,K.height,0,ot,C,K.data)}else if(v.isDataArrayTexture)if(pt){if(_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,V,B.width,B.height,B.depth),kt)if(v.layerUpdates.size>0){let bt=xc(B.width,B.height,v.format,v.type);for(let Ht of v.layerUpdates){let te=B.data.subarray(Ht*bt/B.data.BYTES_PER_ELEMENT,(Ht+1)*bt/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ht,B.width,B.height,1,ot,C,te)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ot,C,B.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,V,B.width,B.height,B.depth,0,ot,C,B.data);else if(v.isData3DTexture)pt?(_t&&e.texStorage3D(n.TEXTURE_3D,ee,V,B.width,B.height,B.depth),kt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ot,C,B.data)):e.texImage3D(n.TEXTURE_3D,0,V,B.width,B.height,B.depth,0,ot,C,B.data);else if(v.isFramebufferTexture){if(_t)if(pt)e.texStorage2D(n.TEXTURE_2D,ee,V,B.width,B.height);else{let bt=B.width,Ht=B.height;for(let te=0;te<ee;te++)e.texImage2D(n.TEXTURE_2D,te,V,bt,Ht,0,ot,C,null),bt>>=1,Ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let bt=n.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),B.parentNode!==bt){bt.appendChild(B),u.add(v),bt.onpaint=Ht=>{let te=Ht.changedElements;for(let Rt of u)te.includes(Rt.image)&&(Rt.needsUpdate=!0)},bt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,B);else{let te=n.RGBA,Rt=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,te,Rt,ye,B)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ct.length>0){if(pt&&_t){let bt=Lt(ct[0]);e.texStorage2D(n.TEXTURE_2D,ee,V,bt.width,bt.height)}for(let bt=0,Ht=ct.length;bt<Ht;bt++)K=ct[bt],pt?kt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,ot,C,K):e.texImage2D(n.TEXTURE_2D,bt,V,ot,C,K);v.generateMipmaps=!1}else if(pt){if(_t){let bt=Lt(B);e.texStorage2D(n.TEXTURE_2D,ee,V,bt.width,bt.height)}kt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,C,B)}else e.texImage2D(n.TEXTURE_2D,0,V,ot,C,B);D(v)&&v.mipmapsAutoUpdate===!0&&T(dt),rt.__version=k.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Je(w,v,X){if(v.image.length!==6)return;let dt=ge(w,v),it=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+X);let k=i.get(it);if(it.version!==k.__version||dt===!0){e.activeTexture(n.TEXTURE0+X);let rt=he.getPrimaries(he.workingColorSpace),q=v.colorSpace===gi?null:he.getPrimaries(v.colorSpace),B=v.colorSpace===gi||rt===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,V=[];for(let Rt=0;Rt<6;Rt++)!ot&&!C?V[Rt]=M(v.image[Rt],!0,s.maxCubemapSize):V[Rt]=C?v.image[Rt].image:v.image[Rt],V[Rt]=Mt(v,V[Rt]);let K=V[0],ct=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),_t=P(v.internalFormat,ct,pt,v.normalized,v.colorSpace),kt=v.isVideoTexture!==!0,ee=k.__version===void 0||dt===!0,bt=it.dataReady,Ht=E(v,K);pe(n.TEXTURE_CUBE_MAP,v);let te;if(v.isDepthTexture){if(_t=x(v.format===mi,v.type),ee)if(kt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,_t,K.width,K.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,K.width,K.height,0,ct,pt,null)}else if(ot){kt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,_t,K.width,K.height);for(let Rt=0;Rt<6;Rt++){te=V[Rt].mipmaps;for(let ye=0;ye<te.length;ye++){let He=te[ye];v.format!==Vn?ct!==null?kt?bt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,0,0,He.width,He.height,ct,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,_t,He.width,He.height,0,He.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,0,0,He.width,He.height,ct,pt,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye,_t,He.width,He.height,0,ct,pt,He.data)}}}else{if(te=v.mipmaps,kt&&ee){te.length>0&&Ht++;let Rt=Lt(V[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,_t,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(C){kt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,V[Rt].width,V[Rt].height,ct,pt,V[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,V[Rt].width,V[Rt].height,0,ct,pt,V[Rt].data);for(let ye=0;ye<te.length;ye++){let Mi=te[ye].image[Rt].image;kt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,0,0,Mi.width,Mi.height,ct,pt,Mi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,_t,Mi.width,Mi.height,0,ct,pt,Mi.data)}}else{kt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,ct,pt,V[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,_t,ct,pt,V[Rt]);for(let ye=0;ye<te.length;ye++){let He=te[ye];kt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,0,0,ct,pt,He.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ye+1,_t,ct,pt,He.image[Rt])}}}D(v)&&v.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),k.__version=it.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function R(w,v,X,dt,it,k){let rt=r.convert(X.format,X.colorSpace),q=r.convert(X.type),B=P(X.internalFormat,rt,q,X.normalized,X.colorSpace),ot=i.get(v),C=i.get(X);if(C.__renderTarget=v,!ot.__hasExternalTextures){let V=Math.max(1,v.width>>k),K=Math.max(1,v.height>>k);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,k,B,V,K,v.depth,0,rt,q,null):e.texImage2D(it,k,B,V,K,0,rt,q,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,it,C.__webglTexture,0,St(v)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,it,C.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function N(w,v,X){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let dt=v.depthTexture,it=dt&&dt.isDepthTexture?dt.type:null,k=x(v.stencilBuffer,it),rt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(v),k,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(v),k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,w)}else{let dt=v.textures;for(let it=0;it<dt.length;it++){let k=dt[it],rt=r.convert(k.format,k.colorSpace),q=r.convert(k.type),B=P(k.internalFormat,rt,q,k.normalized,k.colorSpace);ft(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(v),B,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(v),B,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,B,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v,X){let dt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(v.depthTexture);it.__renderTarget=v;let k=dt?v.depthTexture.image[0]:v.depthTexture.image;(!it.__webglTexture||k.width!==v.width||k.height!==v.height)&&(k.width=v.width,k.height=v.height,v.depthTexture.needsUpdate=!0),dt?wt(v.depthTexture,0):Ct(v.depthTexture,0);let rt=it.__webglTexture,q=St(v),B=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ot=v.depthTexture.format===mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===di)ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,B,rt,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,ot,B,rt,0);else if(v.depthTexture.format===mi)ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,B,rt,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,ot,B,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(w){let v=i.get(w),X=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let dt=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),dt){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,dt.removeEventListener("dispose",it)};dt.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=dt}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let dt=0;dt<6;dt++)F(v.__webglFramebuffer[dt],w,dt);else w.texture.mipmaps.length>0?F(v.__webglFramebuffer[0],w,0):F(v.__webglFramebuffer,w,0);else if(X){v.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[dt]),v.__webglDepthbuffer[dt]===void 0)v.__webglDepthbuffer[dt]=n.createRenderbuffer(),N(v.__webglDepthbuffer[dt],w,!1);else{let it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,k)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),N(v.__webglDepthbuffer,w,!1);else{let it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $(w,v,X){let dt=i.get(w);v!==void 0&&R(dt.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&H(w)}function tt(w){let v=w.texture,X=i.get(w),dt=i.get(v);w.addEventListener("dispose",j),Z(w);let it=w.textures,k=w.isWebGLCubeRenderTarget===!0,rt=it.length>1;if(rt||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=v.version,a.memory.textures++),k){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let B=0;B<v.mipmaps.length;B++)X.__webglFramebuffer[q][B]=n.createFramebuffer()}else X.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)X.__webglFramebuffer[q]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(rt)for(let q=0,B=it.length;q<B;q++){let ot=i.get(it[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&ft(w)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<it.length;q++){let B=it[q];X.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[q]);let ot=r.convert(B.format,B.colorSpace),C=r.convert(B.type),V=P(B.internalFormat,ot,C,B.normalized,B.colorSpace,w.isXRRenderTarget===!0),K=St(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,V,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,X.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),N(X.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),pe(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let B=0;B<v.mipmaps.length;B++)R(X.__webglFramebuffer[q][B],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,B);else R(X.__webglFramebuffer[q],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);D(v)?T(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(rt){for(let q=0,B=it.length;q<B;q++){let ot=it[q],C=i.get(ot),V=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(V=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(V,C.__webglTexture),pe(V,ot),R(X.__webglFramebuffer,w,ot,n.COLOR_ATTACHMENT0+q,V,0),D(ot)&&T(V)}e.unbindTexture()}else{let q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(q,dt.__webglTexture),pe(q,v),v.mipmaps.length>0)for(let B=0;B<v.mipmaps.length;B++)R(X.__webglFramebuffer[B],w,v,n.COLOR_ATTACHMENT0,q,B);else R(X.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,q,0);D(v)?T(q):v.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&H(w)}function S(w){let v=w.textures;for(let X=0,dt=v.length;X<dt;X++){let it=v[X];if(D(it)&&it.mipmapsAutoUpdate===!0){let k=L(w),rt=i.get(it).__webglTexture;e.bindTexture(k,rt),T(k),e.unbindTexture()}}}let At=[];function gt(w){if(w.samples>0){if(ft(w)===!1){let v=w.textures,X=w.width,dt=w.height,it=n.COLOR_BUFFER_BIT,k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(w),q=v.length>1;if(q)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let C=i.get(v[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,X,dt,0,0,X,dt,it,n.NEAREST),l===!0&&(At.length=0,At.push(n.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&At.push(k),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let C=i.get(v[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function St(w){return Math.min(s.maxSamples,w.samples)}function ft(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Dt(w){let v=a.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function Mt(w,v){let X=w.colorSpace,dt=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==mr&&X!==gi&&(he.getTransfer(X)===ve?(dt!==Vn||it!==cn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",X)),v}function Lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Jt,this.resetTextureUnits=mt,this.getTextureUnits=xt,this.setTextureUnits=zt,this.setTexture2D=Ct,this.setTexture2DArray=Ut,this.setTexture3D=Vt,this.setTextureCube=wt,this.rebindTextures=$,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=R,this.useMultisampledRTT=ft,this.dispose=at}function Lx(n,t){function e(i,s=gi){let r,a=he.getTransfer(s);if(i===cn)return n.UNSIGNED_BYTE;if(i===oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ec)return n.BYTE;if(i===nc)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===ao)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===rc)return n.ALPHA;if(i===ac)return n.RGB;if(i===Vn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===mi)return n.DEPTH_STENCIL;if(i===co)return n.RED;if(i===ho)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===uo)return n.RG_INTEGER;if(i===fo)return n.RGBA_INTEGER;if(i===Or||i===Br||i===zr||i===kr)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===po||i===mo||i===go||i===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===vo||i===yo||i===bo||i===Mo||i===Gr||i===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_o||i===vo)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===bo)return r.COMPRESSED_R11_EAC;if(i===Mo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gr)return r.COMPRESSED_RG11_EAC;if(i===So)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===To||i===Eo||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Io||i===Lo||i===Do||i===No||i===Uo||i===Fo||i===Oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===To)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Po)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Io)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Do)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bo||i===zo||i===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Bo)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Go||i===Ho||i===Hr||i===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wn({vertexShader:Dx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Zn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,g=null,b=typeof XRWebGLBinding<"u",p=new Ic,m={},M=e.getContextAttributes(),D=null,T=null,L=[],P=[],x=new de,E=null,Z=null,O=new mn;O.viewport=new Re;let G=new mn;G.viewport=new Re;let j=[O,G],I=new to,U=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let Ct=L[lt];return Ct===void 0&&(Ct=new Hs,L[lt]=Ct),Ct.getTargetRaySpace()},this.getControllerGrip=function(lt){let Ct=L[lt];return Ct===void 0&&(Ct=new Hs,L[lt]=Ct),Ct.getGripSpace()},this.getHand=function(lt){let Ct=L[lt];return Ct===void 0&&(Ct=new Hs,L[lt]=Ct),Ct.getHandSpace()};function ut(lt){let Ct=P.indexOf(lt.inputSource);if(Ct===-1)return;let Ut=L[Ct];Ut!==void 0&&(Ut.update(lt.inputSource,lt.frame,c||a),Ut.dispatchEvent({type:lt.type,data:lt.inputSource}))}function nt(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",yt);for(let lt=0;lt<L.length;lt++){let Ct=P[lt];Ct!==null&&(P[lt]=null,L[lt].disconnect(Ct))}U=null,at=null,p.reset();for(let lt in m)delete m[lt];if(t.setRenderTarget(D),h=null,f=null,u=null,s=null,T=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),Z!==null){let lt=Z.camera;lt.fov=Z.fov,lt.zoom=Z.zoom,lt.updateProjectionMatrix(),Z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){o=lt,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",yt),M.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Vt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=M.stencil?mi:di,Vt=M.stencil?ls:Gn);let Kt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new xn(f.textureWidth,f.textureHeight,{format:Vn,type:cn,depthTexture:new pi(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new xn(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function yt(lt){for(let Ct=0;Ct<lt.removed.length;Ct++){let Ut=lt.removed[Ct],Vt=P.indexOf(Ut);Vt>=0&&(P[Vt]=null,L[Vt].disconnect(Ut))}for(let Ct=0;Ct<lt.added.length;Ct++){let Ut=lt.added[Ct],Vt=P.indexOf(Ut);if(Vt===-1){for(let Kt=0;Kt<L.length;Kt++)if(Kt>=P.length){P.push(Ut),Vt=Kt;break}else if(P[Kt]===null){P[Kt]=Ut,Vt=Kt;break}if(Vt===-1)break}let wt=L[Vt];wt&&wt.connect(Ut)}}function st(lt,Ct){Ct===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(Ct.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let Ct=lt.near,Ut=lt.far;p.texture!==null&&(p.depthNear>0&&(Ct=p.depthNear),p.depthFar>0&&(Ut=p.depthFar)),I.near=G.near=O.near=Ct,I.far=G.far=O.far=Ut,(U!==I.near||at!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,at=I.far),I.layers.mask=lt.layers.mask|6,O.layers.mask=I.layers.mask&-5,G.layers.mask=I.layers.mask&-3;let Vt=lt.parent,wt=I.cameras;st(I,Vt);for(let Kt=0;Kt<wt.length;Kt++)st(wt[Kt],Vt);I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),Z===null&&lt.isPerspectiveCamera&&(Z={camera:lt,fov:lt.fov,zoom:lt.zoom}),mt(lt,I,Vt)};function mt(lt,Ct,Ut){Ut===null?lt.matrix.copy(Ct.matrixWorld):(lt.matrix.copy(Ut.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(Ct.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(Ct.projectionMatrix),lt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Ua*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(lt){l=lt,f!==null&&(f.fixedFoveation=lt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=lt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(lt){return m[lt]};let xt=null;function zt(lt,Ct){if(d=Ct.getViewerPose(c||a),g=Ct,d!==null){let Ut=d.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let Vt=!1;Ut.length!==I.cameras.length&&(I.cameras.length=0,Vt=!0);for(let Wt=0;Wt<Ut.length;Wt++){let pe=Ut[Wt],ge=null;if(h!==null)ge=h.getViewport(pe);else{let Be=u.getViewSubImage(f,pe);ge=Be.viewport,Wt===0&&(t.setRenderTargetTextures(T,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(T))}let se=j[Wt];se===void 0&&(se=new mn,se.layers.enable(Wt),se.viewport=new Re,j[Wt]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ge.x,ge.y,ge.width,ge.height),Wt===0&&(I.matrix.copy(se.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Vt===!0&&I.cameras.push(se)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let Wt=u.getDepthInformation(Ut[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(wt&&wt.includes("camera-access")&&b){t.state.unbindTexture(),u=i.getBinding();for(let Wt=0;Wt<Ut.length;Wt++){let pe=Ut[Wt].camera;if(pe){let ge=m[pe];ge||(ge=new wr,m[pe]=ge);let se=u.getCameraImage(pe);ge.sourceTexture=se}}}}for(let Ut=0;Ut<L.length;Ut++){let Vt=P[Ut],wt=L[Ut];Vt!==null&&wt!==void 0&&wt.update(Vt,Ct,c||a)}xt&&xt(lt,Ct),Ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ct}),g=null}let Jt=new Zu;Jt.setAnimationLoop(zt),this.setAnimationLoop=function(lt){xt=lt},this.dispose=function(){}}},Ux=new fe,sd=new Zt;sd.set(-1,0,0,0,1,0,0,0,1);function Fx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,pc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,D,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),b(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,D):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===an&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===an&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),D=M.envMap,T=M.envMapRotation;D&&(p.envMap.value=D,p.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(T)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,D){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=D*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ox(n,t,e,i){let s={},r={};function a(M,D){let T=D.program;i.uniformBlockBinding(M,T,s[M.id])}function o(M,D){let T=s[M.id];T===void 0&&(g(M),T=l(M),s[M.id]=T,M.addEventListener("dispose",p));let L=D.program;i.updateUBOMapping(M,L);let P=t.render.frame;r[M.id]!==P&&(c(M),r[M.id]=P)}function l(M){let D=n.createBuffer(),T=M.__size,L=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,T,L),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function c(M){let D=s[M.id],T=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let P=0,x=T.length;P<x;P++){let E=T[P];if(Array.isArray(E))for(let Z=0,O=E.length;Z<O;Z++)d(E[Z],P,Z,L);else d(E,P,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,D,T,L){if(f(M,D,T,L)===!0){let P=M.__offset,x=M.value;if(Array.isArray(x)){let E=0;for(let Z=0;Z<x.length;Z++){let O=x[Z],G=b(O,!0);u(O,M.__data,E),E+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,P,M.__data)}}function u(M,D,T){typeof M=="number"||typeof M=="boolean"?D[T]=M:M.isMatrix3?(D[T]=M.elements[0],D[T+1]=M.elements[1],D[T+2]=M.elements[2],D[T+3]=0,D[T+4]=M.elements[3],D[T+5]=M.elements[4],D[T+6]=M.elements[5],D[T+7]=0,D[T+8]=M.elements[6],D[T+9]=M.elements[7],D[T+10]=M.elements[8],D[T+11]=0):ArrayBuffer.isView(M)?D.set(M.subarray(0,D.length-T),T):M.toArray(D,T)}function f(M,D,T,L){let P=M.value,x=D+"_"+T;if(Array.isArray(P)){L[x]===void 0&&(L[x]=[]);let E=L[x],Z=!1;for(let O=0;O<P.length;O++)h(P[O],E,O)===!0&&(Z=!0);return Z}return h(P,L,x)}function h(M,D,T){if(D[T]===void 0)return typeof M=="number"||typeof M=="boolean"?D[T]=M:ArrayBuffer.isView(M)?D[T]=M.slice():D[T]=M.clone(),!0;{let L=D[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return D[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function g(M){let D=M.uniforms,T=0,L=16;for(let x=0,E=D.length;x<E;x++){let Z=Array.isArray(D[x])?D[x]:[D[x]];for(let O=0,G=Z.length;O<G;O++){let j=Z[O],I=Array.isArray(j.value)?j.value:[j.value],U=Array.isArray(D[x])||Array.isArray(j.value),at=T;for(let nt=0,yt=I.length;nt<yt;nt++){let st=I[nt],mt=b(st,U),xt=T%L,zt=xt%mt.boundary,Jt=xt+zt;T+=zt,Jt!==0&&L-Jt<mt.storage&&(T+=L-Jt),nt===0&&(at=T),T+=mt.storage}let ut=j.type==="int"?Int32Array:j.type==="uint"?Uint32Array:Float32Array;j.__data=new ut((T-at)/Float32Array.BYTES_PER_ELEMENT),j.__offset=at}}let P=T%L;return P>0&&(T+=L-P),M.__size=T,M.__cache={},this}function b(M,D){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",M),D===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(M){let D=M.target;D.removeEventListener("dispose",p),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function zx(){return Kn===null&&(Kn=new Sr(Bx,16,16,zi,Hn),Kn.name="DFG_LUT",Kn.minFilter=ze,Kn.magFilter=ze,Kn.wrapS=Yn,Kn.wrapT=Yn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Zo=class{constructor(t={}){let{canvas:e=_u(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=cn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let b=h,p=new Set([fo,uo,ho]),m=new Set([cn,Gn,Js,ls,oo,lo]),M=new Uint32Array(4),D=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},L=null,P=null,x=[],E=[],Z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,G=!1,j=null,I=null,U=null,at=null;this._outputColorSpace=Fe;let ut=0,nt=0,yt=null,st=-1,mt=null,xt=new Re,zt=new Re,Jt=null,lt=new ne(0),Ct=0,Ut=e.width,Vt=e.height,wt=1,Kt=null,Te=null,Wt=new Re(0,0,Ut,Vt),pe=new Re(0,0,Ut,Vt),ge=!1,se=new Li,Be=new ka,Le=!1,Je=!1,R=new fe,N=new W,F=new Re,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function tt(){return yt===null?wt:1}let S=i;function At(y,z){return e.getContext(y,z)}let gt,St,ft,Dt,Mt,Lt,w,v,X,dt,it,k,rt,q,B,ot,C,V,K,ct,pt,_t,kt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),S===null){let z="webgl2";if(S=At(z,y),S===null)throw At(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(y){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),$t("WebGLRenderer: "+y.message),y}function ee(){gt=new $m(S),gt.init(),pt=new Lx(S,gt),St=new zm(S,gt,t,pt),ft=new Px(S,gt),St.reversedDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),I=S.createFramebuffer(),U=S.createFramebuffer(),at=S.createFramebuffer(),Dt=new jm(S),Mt=new gx,Lt=new Ix(S,gt,ft,Mt,St,pt,Dt),w=new Jm(O),v=new ep(S),_t=new Om(S,v),X=new Km(S,v,Dt,_t),dt=new eg(S,X,v,_t,Dt),V=new tg(S,St,Lt),B=new km(Mt),it=new mx(O,w,gt,St,_t,B),k=new Fx(O,Mt),rt=new _x,q=new Tx(gt),C=new Fm(O,w,ft,dt,g,l),ot=new Cx(O,dt,St),kt=new Ox(S,Dt,St,ft),K=new Bm(S,gt,Dt),ct=new Qm(S,gt,Dt),Dt.programs=it.programs,O.capabilities=St,O.extensions=gt,O.properties=Mt,O.renderLists=rt,O.shadowMap=ot,O.state=ft,O.info=Dt}b!==cn&&(Z=new ig(b,e.width,e.height,o,s,r));let bt=new Lc(O,S);this.xr=bt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let y=gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(y){y!==void 0&&(wt=y,this.setSize(Ut,Vt,!1))},this.getSize=function(y){return y.set(Ut,Vt)},this.setSize=function(y,z,et=!0){if(bt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ut=y,Vt=z,e.width=Math.floor(y*wt),e.height=Math.floor(z*wt),et===!0&&(e.style.width=y+"px",e.style.height=z+"px"),Z!==null&&Z.setSize(e.width,e.height),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(Ut*wt,Vt*wt).floor()},this.setDrawingBufferSize=function(y,z,et){Ut=y,Vt=z,wt=et,e.width=Math.floor(y*et),e.height=Math.floor(z*et),this.setViewport(0,0,y,z)},this.setEffects=function(y){if(b===cn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let z=0;z<y.length;z++)if(y[z].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(xt)},this.getViewport=function(y){return y.copy(Wt)},this.setViewport=function(y,z,et,J){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,z,et,J),ft.viewport(xt.copy(Wt).multiplyScalar(tt()).round())},this.getScissor=function(y){return y.copy(pe)},this.setScissor=function(y,z,et,J){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,z,et,J),ft.scissor(zt.copy(pe).multiplyScalar(tt()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){ft.setScissorTest(ge=y)},this.setOpaqueSort=function(y){Kt=y},this.setTransparentSort=function(y){Te=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,z=!0,et=!0){let J=0;if(y){let Q=!1;if(yt!==null){let Et=yt.texture.format;Q=p.has(Et)}if(Q){let Et=yt.texture.type,Ft=m.has(Et),Tt=C.getClearColor(),Nt=C.getClearAlpha(),Gt=Tt.r,jt=Tt.g,le=Tt.b;Ft?(M[0]=Gt,M[1]=jt,M[2]=le,M[3]=Nt,S.clearBufferuiv(S.COLOR,0,M)):(D[0]=Gt,D[1]=jt,D[2]=le,D[3]=Nt,S.clearBufferiv(S.COLOR,0,D))}else J|=S.COLOR_BUFFER_BIT}z&&(J|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&S.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),j=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),C.dispose(),rt.dispose(),q.dispose(),Lt.dispose(),Mt.dispose(),w.dispose(),dt.dispose(),X.dispose(),_t.dispose(),kt.dispose(),it.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ih),bt.removeEventListener("sessionend",sh),Zi.stop()};function Ht(y){y.preventDefault(),dc("WebGLRenderer: Context Lost."),G=!0}function te(){dc("WebGLRenderer: Context Restored."),G=!1;let y=Dt.autoReset,z=ot.enabled,et=ot.autoUpdate,J=ot.needsUpdate,Q=ot.type;ee(),Dt.autoReset=y,ot.enabled=z,ot.autoUpdate=et,ot.needsUpdate=J,ot.type=Q}function Rt(y){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ye(y){let z=y.target;z.removeEventListener("dispose",ye),He(z)}function He(y){Mi(y),Mt.remove(y)}function Mi(y){let z=Mt.get(y).programs;z!==void 0&&(z.forEach(function(et){it.releaseProgram(et)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,et,J,Q,Et){z===null&&(z=H);let Ft=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Tt=uf(y,z,et,J,Q);ft.setMaterial(J,Ft);let Nt=et.index,Gt=1;if(J.wireframe===!0){if(Nt=X.getWireframeAttribute(et),Nt===void 0)return;Gt=2}let jt=et.drawRange,le=et.attributes.position,Ot=jt.start*Gt,ce=(jt.start+jt.count)*Gt;Et!==null&&(Ot=Math.max(Ot,Et.start*Gt),ce=Math.min(ce,(Et.start+Et.count)*Gt)),Nt!==null?(Ot=Math.max(Ot,0),ce=Math.min(ce,Nt.count)):le!=null&&(Ot=Math.max(Ot,0),ce=Math.min(ce,le.count));let Ne=ce-Ot;if(Ne<0||Ne===1/0)return;_t.setup(Q,J,Tt,et,Nt);let Se,Me=K;if(Nt!==null&&(Se=v.get(Nt),Me=ct,Me.setIndex(Se)),Q.isMesh)J.wireframe===!0?(ft.setLineWidth(J.wireframeLinewidth*tt()),Me.setMode(S.LINES)):Me.setMode(S.TRIANGLES);else if(Q.isLine){let $e=J.linewidth;$e===void 0&&($e=1),ft.setLineWidth($e*tt()),Q.isLineSegments?Me.setMode(S.LINES):Q.isLineLoop?Me.setMode(S.LINE_LOOP):Me.setMode(S.LINE_STRIP)}else Q.isPoints?Me.setMode(S.POINTS):Q.isSprite&&Me.setMode(S.TRIANGLES);if(Q.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Me.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let $e=Q._multiDrawStarts,Bt=Q._multiDrawCounts,rn=Q._multiDrawCount,_e=Nt?v.get(Nt).bytesPerElement:1,Ji=Mt.get(J).currentProgram.getUniforms();for(let Ke=0;Ke<rn;Ke++)Ji.setValue(S,"_gl_DrawID",Ke),Me.render($e[Ke]/_e,Bt[Ke])}else if(Q.isInstancedMesh)Me.renderInstances(Ot,Ne,Q.count);else if(et.isInstancedBufferGeometry){let $e=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Bt=Math.min(et.instanceCount,$e);Me.renderInstances(Ot,Ne,Bt)}else Me.render(Ot,Ne)};function nh(y,z,et,J){j!==null&&y.isNodeMaterial&&j.setObject(J,y),Le===!0&&B.setState(y,et,!1),y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=an,y.needsUpdate=!0,ar(y,z,J),y.side=Bi,y.needsUpdate=!0,ar(y,z,J),y.side=ln):ar(y,z,J)}this.compile=function(y,z,et=null){et===null&&(et=y),j!==null&&j.renderStart(y,z,et),P=q.get(et),P.init(z),E.push(P),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),y!==et&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),Je=this.localClippingEnabled,Le=B.init(this.clippingPlanes,Je),Le===!0&&B.setGlobalState(this.clippingPlanes,z),j!==null&&ot.render(P.state.shadowsArray,et,z);let J=new Set;return y.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ft=0;Ft<Et.length;Ft++){let Tt=Et[Ft];nh(Tt,et,z,Q),J.add(Tt)}else nh(Et,et,z,Q),J.add(Et)}),P=E.pop(),j!==null&&j.renderEnd(),J},this.compileAsync=function(y,z,et=null){let J=this.compile(y,z,et);return new Promise(Q=>{function Et(){if(J.forEach(function(Ft){let Nt=Mt.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&J.delete(Ft)}),J.size===0){Q(y);return}setTimeout(Et,10)}gt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ul=null;function cf(y){ul&&ul(y)}function ih(){Zi.stop()}function sh(){Zi.start()}let Zi=new Zu;Zi.setAnimationLoop(cf),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){ul=y,bt.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},bt.addEventListener("sessionstart",ih),bt.addEventListener("sessionend",sh),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(y,z);let et=bt.enabled===!0&&bt.isPresenting===!0,J=Z!==null&&(yt===null||et)&&Z.begin(O,yt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(z),z=bt.getCamera()),y.isScene===!0&&y.onBeforeRender(O,y,z,yt),P=q.get(y,E.length),P.init(z),P.state.textureUnits=Lt.getTextureUnits(),E.push(P),R.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Be.setFromArrayCamera(z):se.setFromProjectionMatrix(R,Tn,z.reversedDepth),Je=this.localClippingEnabled,Le=B.init(this.clippingPlanes,Je),L=rt.get(y,x.length),L.init(),x.push(L),this.info.render.frame++,bt.enabled===!0&&bt.isPresenting===!0){let Ft=O.xr.getDepthSensingMesh();Ft!==null&&dl(Ft,z,-1/0,O.sortObjects)}dl(y,z,0,O.sortObjects),L.finish(),j!==null&&j.updateLights(P.state.lightsArray),O.sortObjects===!0&&L.sort(Kt,Te),$=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,$&&C.addToRenderList(L,y),this.info.autoReset===!0&&this.info.reset(),Le===!0&&B.beginShadows();let Q=P.state.shadowsArray;if(ot.render(Q,y,z),Le===!0&&B.endShadows(),(J&&Z.hasRenderPass())===!1){let Ft=L.opaque,Tt=L.transmissive;if(P.setupLights(),z.isArrayCamera){let Nt=z.cameras;if(Tt.length>0)for(let Gt=0,jt=Nt.length;Gt<jt;Gt++){let le=Nt[Gt];ah(Ft,Tt,y,le)}$&&C.render(y);for(let Gt=0,jt=Nt.length;Gt<jt;Gt++){let le=Nt[Gt];rh(L,y,le,le.viewport)}}else Tt.length>0&&ah(Ft,Tt,y,z),$&&C.render(y),rh(L,y,z)}yt!==null&&nt===0&&(Lt.updateMultisampleRenderTarget(yt),Lt.updateRenderTargetMipmap(yt)),J&&Z.end(O),y.isScene===!0&&y.onAfterRender(O,y,z),_t.resetDefaultState(),st=-1,mt=null,E.pop(),E.length>0?(P=E[E.length-1],Lt.setTextureUnits(P.state.textureUnits),Le===!0&&B.setGlobalState(O.clippingPlanes,P.state.camera)):P=null,x.pop(),x.length>0?L=x[x.length-1]:L=null,j!==null&&j.renderEnd()};function dl(y,z,et,J){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)et=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){let Ft=z.isArrayCamera?Be:se;if(!y.frustumCulled||y.intersectsFrustum(Ft)){J&&F.setFromMatrixPosition(y.matrixWorld).applyMatrix4(R);let Tt=dt.update(y),Nt=y.material;Nt.visible&&L.push(y,Tt,Nt,et,F.z,null,z)}}else if(y.isMesh||y.isLine||y.isPoints){let Ft=z.isArrayCamera?Be:se;if(!y.frustumCulled||y.intersectsFrustum(Ft)){let Tt=dt.update(y),Nt=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),F.copy(y.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),F.copy(Tt.boundingSphere.center)),F.applyMatrix4(y.matrixWorld).applyMatrix4(R)),Array.isArray(Nt)){let Gt=Tt.groups;for(let jt=0,le=Gt.length;jt<le;jt++){let Ot=Gt[jt],ce=Nt[Ot.materialIndex];ce&&ce.visible&&L.push(y,Tt,ce,et,F.z,Ot,z)}}else Nt.visible&&L.push(y,Tt,Nt,et,F.z,null,z)}}}let Et=y.children;for(let Ft=0,Tt=Et.length;Ft<Tt;Ft++)dl(Et[Ft],z,et,J)}function rh(y,z,et,J){let{opaque:Q,transmissive:Et,transparent:Ft}=y;P.setupLightsView(et),Le===!0&&B.setGlobalState(O.clippingPlanes,et),J&&ft.viewport(xt.copy(J)),Q.length>0&&ea(Q,z,et),Et.length>0&&ea(Et,z,et),Ft.length>0&&ea(Ft,z,et),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ah(y,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){let Ot=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new xn(1,1,{generateMipmaps:!0,type:Ot?Hn:cn,minFilter:kn,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Et=P.state.transmissionRenderTarget[J.id],Ft=J.viewport||xt;Et.setSize(Ft.z*O.transmissionResolutionScale,Ft.w*O.transmissionResolutionScale);let Tt=O.getRenderTarget(),Nt=O.getActiveCubeFace(),Gt=O.getActiveMipmapLevel();O.setRenderTarget(Et),O.getClearColor(lt),Ct=O.getClearAlpha(),Ct<1&&O.setClearColor(16777215,.5),O.clear(),$&&C.render(et);let jt=O.toneMapping;O.toneMapping=$n;let le=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),Le===!0&&B.setGlobalState(O.clippingPlanes,J),ea(y,et,J),Lt.updateMultisampleRenderTarget(Et),Lt.updateRenderTargetMipmap(Et),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ce=0,Ne=z.length;ce<Ne;ce++){let Se=z[ce],{object:Me,geometry:$e,material:Bt,group:rn}=Se;if(Bt.side===ln&&Me.layers.test(J.layers)){let _e=Bt.side;Bt.side=an,Bt.needsUpdate=!0,oh(Me,et,J,$e,Bt,rn),Bt.side=_e,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&(Lt.updateMultisampleRenderTarget(Et),Lt.updateRenderTargetMipmap(Et))}O.setRenderTarget(Tt,Nt,Gt),O.setClearColor(lt,Ct),le!==void 0&&(J.viewport=le),O.toneMapping=jt}function ea(y,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,Et=y.length;Q<Et;Q++){let Ft=y[Q],{object:Tt,geometry:Nt,group:Gt}=Ft,jt=Ft.material;jt.allowOverride===!0&&J!==null&&(jt=J),Tt.layers.test(et.layers)&&oh(Tt,z,et,Nt,jt,Gt)}}function oh(y,z,et,J,Q,Et){j!==null&&Q.isNodeMaterial&&j.setObject(y,Q),y.onBeforeRender(O,z,et,J,Q,Et),y.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(O,z,et,J,y,Et),Q.transparent===!0&&Q.side===ln&&Q.forceSinglePass===!1?(Q.side=an,Q.needsUpdate=!0,O.renderBufferDirect(et,z,J,Q,y,Et),Q.side=Bi,Q.needsUpdate=!0,O.renderBufferDirect(et,z,J,Q,y,Et),Q.side=ln):O.renderBufferDirect(et,z,J,Q,y,Et),y.onAfterRender(O,z,et,J,Q,Et)}function lh(y){let z=0;for(let et of y)et.texture!==null&&z++;return z}function ar(y,z,et){z.isScene!==!0&&(z=H);let J=Mt.get(y),Q=P.state.lights,Et=P.state.shadowsArray,Ft=Q.state.version,Tt=it.getParameters(y,Q.state,Et,z,et,P.state.lightProbeGridArray),Nt=it.getProgramCacheKey(Tt),Gt=J.programs;J.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let jt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;J.envMap=w.get(y.envMap||J.environment,jt),J.envMapRotation=J.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",ye),Gt=new Map,J.programs=Gt,J.programVariants=new Map);let le=Gt.get(Nt);if(le!==void 0){if(J.currentProgram===le&&J.lightsStateVersion===Ft)return hh(y,Tt),le}else Tt.uniforms=it.getUniforms(y),j!==null&&y.isNodeMaterial&&j.build(y,et,Tt),y.onBeforeCompile(Tt,O),le=it.acquireProgram(Tt,Nt),Gt.set(Nt,le),J.uniforms=Tt.uniforms;let Ot=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ot.clippingPlanes=B.uniform),hh(y,Tt),J.needsLights=ff(y),J.lightsStateVersion=Ft,J.needsLights&&(Ot.ambientLightColor.value=Q.state.ambient,Ot.lightProbe.value=Q.state.probe,Ot.sunLights.value=Q.state.sun,Ot.sunLightShadows.value=Q.state.sunShadow,Ot.directionalLights.value=Q.state.directional,Ot.directionalLightShadows.value=Q.state.directionalShadow,Ot.spotLights.value=Q.state.spot,Ot.spotLightShadows.value=Q.state.spotShadow,Ot.rectAreaLights.value=Q.state.rectArea,Ot.ltc_1.value=Q.state.rectAreaLTC1,Ot.ltc_2.value=Q.state.rectAreaLTC2,Ot.pointLights.value=Q.state.point,Ot.pointLightShadows.value=Q.state.pointShadow,Ot.hemisphereLights.value=Q.state.hemi,Ot.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ot.sunShadowCascade.value=Q.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Q.state.spotLightMatrix,Ot.spotLightMap.value=Q.state.spotLightMap,Ot.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.numLightProbeGrids=lh(P.state.lightProbeGridArray),J.currentProgram=le,J.uniformsList=null,le}function hf(y,z,et,J,Q){let Et=Mt.get(y),Ft=Et.currentProgram.id+","+J+","+Q,Tt=Et.programVariants.get(Ft);return Tt===void 0?(Tt=ar(y,z,et),Et.programVariants.set(Ft,Tt)):(Et.currentProgram=Tt,Et.uniformsList=null,Et.outputColorSpace=J,Et.toneMapping=Q),Tt}function ch(y){if(y.uniformsList===null){let z=y.currentProgram.getUniforms();y.uniformsList=$s.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function hh(y,z){let et=Mt.get(y);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function uf(y,z,et,J,Q){z.isScene!==!0&&(z=H),Lt.resetTextureUnits();let Et=z.fog,Ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,Tt=yt===null?O.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:he.workingColorSpace,Nt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Gt=w.get(J.envMap||Ft,Nt),jt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,le=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!et.morphAttributes.position,ce=!!et.morphAttributes.normal,Ne=!!et.morphAttributes.color,Se=$n;J.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Se=O.toneMapping);let Me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,$e=Me!==void 0?Me.length:0,Bt=Mt.get(J),rn=P.state.lights;if(Le===!0&&(Je===!0||y!==mt)){let Ie=y===mt&&J.id===st;B.setState(J,y,Ie)}let _e=!1,Ji=!1;J.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==rn.state.version||Q.isBatchedMesh&&Bt.batching===!1||!Q.isBatchedMesh&&Bt.batching===!0||Q.isBatchedMesh&&Bt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Bt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Bt.instancing===!1||!Q.isInstancedMesh&&Bt.instancing===!0||Q.isSkinnedMesh&&Bt.skinning===!1||!Q.isSkinnedMesh&&Bt.skinning===!0||Q.isInstancedMesh&&Bt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Bt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Bt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Bt.instancingMorph===!1&&Q.morphTexture!==null||Bt.envMap!==Gt||J.fog===!0&&Bt.fog!==Et||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==B.numPlanes||Bt.numIntersection!==B.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==le||Bt.morphTargets!==Ot||Bt.morphNormals!==ce||Bt.morphColors!==Ne||Bt.morphTargetsCount!==$e||Bt.numLightProbeGrids!==lh(P.state.lightProbeGridArray)?_e=!0:(Bt.outputColorSpace!==Tt||Bt.toneMapping!==Se)&&(Ji=!0):(_e=!0,Bt.__version=J.version);let Ke=Bt.currentProgram;(_e===!0||Ji===!0)&&(Ke=Ji===!0?hf(J,z,Q,Tt,Se):ar(J,z,Q),j&&J.isNodeMaterial&&j.onUpdateProgram(J,Ke,Bt));let na=!1,Si=!1,$i=!1,me=Ke.getUniforms(),Xe=Bt.uniforms;if(ft.useProgram(Ke.program)&&(na=!0,Si=!0,$i=!0),J.id!==st&&(st=J.id,Si=!0),na||mt!==y){ft.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),me.setValue(S,"projectionMatrix",y.projectionMatrix),me.setValue(S,"viewMatrix",y.matrixWorldInverse);let Ve=me.map.cameraPosition;Ve!==void 0&&Ve.setValue(S,N.setFromMatrixPosition(y.matrixWorld)),St.logarithmicDepthBuffer&&me.setValue(S,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&me.setValue(S,"isOrthographic",y.isOrthographicCamera===!0),mt!==y&&(mt=y,Si=!0,$i=!0)}if(Bt.needsLights&&(rn.state.sunShadowMap.length>0&&me.setValue(S,"sunShadowMap",rn.state.sunShadowMap,Lt),rn.state.directionalShadowMap.length>0&&me.setValue(S,"directionalShadowMap",rn.state.directionalShadowMap,Lt),rn.state.spotShadowMap.length>0&&me.setValue(S,"spotShadowMap",rn.state.spotShadowMap,Lt),rn.state.pointShadowMap.length>0&&me.setValue(S,"pointShadowMap",rn.state.pointShadowMap,Lt)),Q.isSkinnedMesh){me.setOptional(S,Q,"bindMatrix"),me.setOptional(S,Q,"bindMatrixInverse");let Ie=Q.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),me.setValue(S,"boneTexture",Ie.boneTexture,Lt))}Q.isBatchedMesh&&(me.setOptional(S,Q,"batchingTexture"),me.setValue(S,"batchingTexture",Q._matricesTexture,Lt),me.setOptional(S,Q,"batchingIdTexture"),me.setValue(S,"batchingIdTexture",Q._indirectTexture,Lt),me.setOptional(S,Q,"batchingColorTexture"),Q._colorsTexture!==null&&me.setValue(S,"batchingColorTexture",Q._colorsTexture,Lt));let Nn=et.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&V.update(Q,et,Ke),(Si||Bt.receiveShadow!==Q.receiveShadow)&&(Bt.receiveShadow=Q.receiveShadow,me.setValue(S,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(Xe.envMapIntensity.value=z.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=zx()),Si){if(me.setValue(S,"toneMappingExposure",O.toneMappingExposure),Bt.needsLights&&df(Xe,$i),Et&&J.fog===!0&&k.refreshFogUniforms(Xe,Et),k.refreshMaterialUniforms(Xe,J,wt,Vt,P.state.transmissionRenderTarget[y.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let Ie=T,Ve=0;for(let ri of P.state.lightProbeGridArray)ri.texture!==null&&(Ie.textures[Ve]=ri.texture,Ie.min[Ve]=ri.boundingBox.min,Ie.max[Ve]=ri.boundingBox.max,Ie.resolution[Ve]=ri.resolution,Ve++);for(let ri in Ie)Ie[ri].length=Ve;Xe.probesSH.value=Ie.textures,Xe.probesMin.value=Ie.min,Xe.probesMax.value=Ie.max,Xe.probesResolution.value=Ie.resolution}$s.upload(S,ch(Bt),Xe,Lt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($s.upload(S,ch(Bt),Xe,Lt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&me.setValue(S,"center",Q.center),me.setValue(S,"modelViewMatrix",Q.modelViewMatrix),me.setValue(S,"normalMatrix",Q.normalMatrix),me.setValue(S,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let Ie=J.uniformsGroups;for(let Ve=0,ri=Ie.length;Ve<ri;Ve++){let dh=Ie[Ve];kt.update(dh,Ke),kt.bind(dh,Ke)}}return Ke}function df(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.sunLights.needsUpdate=z,y.sunLightShadows.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function ff(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(y,z,et){let J=Mt.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Mt.get(y.texture).__webglTexture=z,Mt.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,z){let et=Mt.get(y);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,et=0){yt=y,ut=z,nt=et;let J=null,Q=!1,Et=!1;if(y){let Tt=Mt.get(y);if(Tt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(S.FRAMEBUFFER,Tt.__webglFramebuffer),xt.copy(y.viewport),zt.copy(y.scissor),Jt=y.scissorTest,ft.viewport(xt),ft.scissor(zt),ft.setScissorTest(Jt),st=-1;return}else if(Tt.__webglFramebuffer===void 0)Lt.setupRenderTarget(y);else if(Tt.__hasExternalTextures)Lt.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let jt=y.depthTexture;if(Tt.__boundDepthTexture!==jt){if(jt!==null&&Mt.has(jt)&&(y.width!==jt.image.width||y.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(y)}}let Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Et=!0);let Gt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?J=Gt[z][et]:J=Gt[z],Q=!0):y.samples>0&&Lt.useMultisampledRTT(y)===!1?J=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Gt)?J=Gt[et]:J=Gt,xt.copy(y.viewport),zt.copy(y.scissor),Jt=y.scissorTest}else xt.copy(Wt).multiplyScalar(wt).floor(),zt.copy(pe).multiplyScalar(wt).floor(),Jt=ge;if(et!==0&&(J=I),ft.bindFramebuffer(S.FRAMEBUFFER,J)&&ft.drawBuffers(y,J),ft.viewport(xt),ft.scissor(zt),ft.setScissorTest(Jt),Q){let Tt=Mt.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+z,Tt.__webglTexture,et)}else if(Et){let Tt=z;for(let Nt=0;Nt<y.textures.length;Nt++){let Gt=Mt.get(y.textures[Nt]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Nt,Gt.__webglTexture,et,Tt)}}else if(y!==null&&et!==0){let Tt=Mt.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Tt.__webglTexture,et)}st=-1};function uh(y){let z=Mt.get(y);return(z.__readFormat!==y.format||z.__readType!==y.type)&&(z.__readFormat=y.format,z.__readType=y.type,z.__formatReadable=St.textureFormatReadable(y.format),z.__typeReadable=St.textureTypeReadable(y.type)),z}this.readRenderTargetPixels=function(y,z,et,J,Q,Et,Ft,Tt=0){if(!(y&&y.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){ft.bindFramebuffer(S.FRAMEBUFFER,Nt);try{let Gt=y.textures[Tt],jt=Gt.format,le=Gt.type;y.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt);let Ot=uh(Gt);if(Ot.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-J&&et>=0&&et<=y.height-Q&&S.readPixels(z,et,J,Q,pt.convert(jt),pt.convert(le),Et)}finally{let Gt=yt!==null?Mt.get(yt).__webglFramebuffer:null;ft.bindFramebuffer(S.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,z,et,J,Q,Et,Ft,Tt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(z>=0&&z<=y.width-J&&et>=0&&et<=y.height-Q){ft.bindFramebuffer(S.FRAMEBUFFER,Nt);let Gt=y.textures[Tt],jt=Gt.format,le=Gt.type;y.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt);let Ot=uh(Gt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ce),S.bufferData(S.PIXEL_PACK_BUFFER,Et.byteLength,S.STREAM_READ),S.readPixels(z,et,J,Q,pt.convert(jt),pt.convert(le),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let Ne=yt!==null?Mt.get(yt).__webglFramebuffer:null;ft.bindFramebuffer(S.FRAMEBUFFER,Ne);let Se=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await yu(S,Se,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ce),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Et),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(ce),S.deleteSync(Se),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,z=null,et=0){let J=Math.pow(2,-et),Q=Math.floor(y.image.width*J),Et=Math.floor(y.image.height*J),Ft=z!==null?z.x:0,Tt=z!==null?z.y:0;Lt.setTexture2D(y,0),S.copyTexSubImage2D(S.TEXTURE_2D,et,0,0,Ft,Tt,Q,Et),ft.unbindTexture()},this.copyTextureToTexture=function(y,z,et=null,J=null,Q=0,Et=0){let Ft,Tt,Nt,Gt,jt,le,Ot,ce,Ne,Se=y.isCompressedTexture?y.mipmaps[Et]:y.image;if(et!==null)Ft=et.max.x-et.min.x,Tt=et.max.y-et.min.y,Nt=et.isBox3?et.max.z-et.min.z:1,Gt=et.min.x,jt=et.min.y,le=et.isBox3?et.min.z:0;else{let me=Math.pow(2,-Q);Ft=Math.floor(Se.width*me),Tt=Math.floor(Se.height*me),y.isDataArrayTexture?Nt=Se.depth:y.isData3DTexture?Nt=Math.floor(Se.depth*me):Nt=1,Gt=0,jt=0,le=0}J!==null?(Ot=J.x,ce=J.y,Ne=J.z):(Ot=0,ce=0,Ne=0);let Me=pt.convert(z.format),$e=pt.convert(z.type),Bt;z.isData3DTexture?(Lt.setTexture3D(z,0),Bt=S.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Lt.setTexture2DArray(z,0),Bt=S.TEXTURE_2D_ARRAY):(Lt.setTexture2D(z,0),Bt=S.TEXTURE_2D),ft.activeTexture(S.TEXTURE0),ft.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,z.flipY),ft.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ft.pixelStorei(S.UNPACK_ALIGNMENT,z.unpackAlignment);let rn=ft.getParameter(S.UNPACK_ROW_LENGTH),_e=ft.getParameter(S.UNPACK_IMAGE_HEIGHT),Ji=ft.getParameter(S.UNPACK_SKIP_PIXELS),Ke=ft.getParameter(S.UNPACK_SKIP_ROWS),na=ft.getParameter(S.UNPACK_SKIP_IMAGES);ft.pixelStorei(S.UNPACK_ROW_LENGTH,Se.width),ft.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Se.height),ft.pixelStorei(S.UNPACK_SKIP_PIXELS,Gt),ft.pixelStorei(S.UNPACK_SKIP_ROWS,jt),ft.pixelStorei(S.UNPACK_SKIP_IMAGES,le);let Si=y.isDataArrayTexture||y.isData3DTexture,$i=z.isDataArrayTexture||z.isData3DTexture;if(y.isDepthTexture){let me=Mt.get(y),Xe=Mt.get(z),Nn=Mt.get(me.__renderTarget),Ie=Mt.get(Xe.__renderTarget);ft.bindFramebuffer(S.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ft.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ve=0;Ve<Nt;Ve++)Si&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,Q,le+Ve),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mt.get(z).__webglTexture,Et,Ne+Ve)),S.blitFramebuffer(Gt,jt,Gt+Ft,jt+Tt,Ot,ce,Ot+Ft,ce+Tt,S.DEPTH_BUFFER_BIT,S.NEAREST);ft.bindFramebuffer(S.READ_FRAMEBUFFER,null),ft.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(Q!==0||y.isRenderTargetTexture||Mt.has(y)){let me=Mt.get(y),Xe=Mt.get(z);ft.bindFramebuffer(S.READ_FRAMEBUFFER,U),ft.bindFramebuffer(S.DRAW_FRAMEBUFFER,at);for(let Nn=0;Nn<Nt;Nn++)Si?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.__webglTexture,Q,le+Nn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,me.__webglTexture,Q),$i?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Xe.__webglTexture,Et,Ne+Nn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Xe.__webglTexture,Et),Q!==0?S.blitFramebuffer(Gt,jt,Gt+Ft,jt+Tt,Ot,ce,Ot+Ft,ce+Tt,S.COLOR_BUFFER_BIT,S.NEAREST):$i?S.copyTexSubImage3D(Bt,Et,Ot,ce,Ne+Nn,Gt,jt,Ft,Tt):S.copyTexSubImage2D(Bt,Et,Ot,ce,Gt,jt,Ft,Tt);ft.bindFramebuffer(S.READ_FRAMEBUFFER,null),ft.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else $i?y.isDataTexture||y.isData3DTexture?S.texSubImage3D(Bt,Et,Ot,ce,Ne,Ft,Tt,Nt,Me,$e,Se.data):z.isCompressedArrayTexture?S.compressedTexSubImage3D(Bt,Et,Ot,ce,Ne,Ft,Tt,Nt,Me,Se.data):S.texSubImage3D(Bt,Et,Ot,ce,Ne,Ft,Tt,Nt,Me,$e,Se):y.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Et,Ot,ce,Ft,Tt,Me,$e,Se.data):y.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Et,Ot,ce,Se.width,Se.height,Me,Se.data):S.texSubImage2D(S.TEXTURE_2D,Et,Ot,ce,Ft,Tt,Me,$e,Se);ft.pixelStorei(S.UNPACK_ROW_LENGTH,rn),ft.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_e),ft.pixelStorei(S.UNPACK_SKIP_PIXELS,Ji),ft.pixelStorei(S.UNPACK_SKIP_ROWS,Ke),ft.pixelStorei(S.UNPACK_SKIP_IMAGES,na),Et===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&S.generateMipmap(Bt),ft.unbindTexture()},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&Lt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Lt.setTextureCube(y,0):y.isData3DTexture?Lt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Lt.setTexture2DArray(y,0):Lt.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){ut=0,nt=0,yt=null,ft.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var ki=38*Math.PI/180,Gi=17*Math.PI/180,Zr=32,vn=new W(-Math.sin(Gi)*Math.cos(ki),-Math.sin(ki),-Math.cos(Gi)*Math.cos(ki)).normalize(),yn=new W(Math.cos(Gi),0,-Math.sin(Gi)),xi=new W().crossVectors(yn,vn).normalize(),Cn=new W(-Math.sin(Gi),0,-Math.cos(Gi)),hs=new W(.42,-1,-.6).normalize(),Pn=1/Math.cos(ki);var Jr=88,kx=73,Dc=79,Gx=[2,1,0,7,6,5,4,3];function $r(n,t){let e=n*yn.x+t*yn.z,i=-(n*Cn.x+t*Cn.z),s=Math.round((Math.atan2(i,e)%(2*Math.PI)+2*Math.PI)/(Math.PI/4))%8;return Gx[s]}var Hx=new Pr;function Vx(n){return n.colorSpace=Fe,n.magFilter=Ae,n.minFilter=Ae,n.generateMipmaps=!1,n.needsUpdate=!0,n}async function Hi(n,t,e){let i={};return await Promise.all(t.map(async s=>{let r=await Hx.loadAsync(`art/${n}-${s}.png`),a=r;if(e){let l=document.createElement("canvas");l.width=r.width,l.height=r.height;let c=l.getContext("2d");c.drawImage(r,0,0);let d=c.getImageData(0,0,l.width,l.height);e(d.data,l.width,l.height,r.width/8),c.putImageData(d,0,0),a=l}let o=s==="rot"?1:8;i[s]={tex:Vx(new qe(a)),cols:Math.round(r.width/(r.height/o)),rows:o}})),i}function rd(n,t,e,i){let s=i/Jr;for(let r=0;r<e;r++){let a=r%i/s;if(!(a<26||a>53))for(let o=0;o<t;o++){let l=(r*t+o)*4;if(n[l+3]<100)continue;let c=n[l],d=n[l+1],u=n[l+2],f=Math.max(c,d,u),h=Math.min(c,d,u),g=(f+h)/510;if((f===h?0:(f-h)/(g>.5?510-f-h:f+h))<.3&&g>.5){let p=Math.min(1.08,g/.9);n[l]=Math.min(255,236*p),n[l+1]=Math.min(255,108*p*p),n[l+2]=Math.min(255,28*p*p)}}}}var jn=class{constructor(t,e=Jr/Zr){qt(this,"sheets",t);qt(this,"cellM",e);qt(this,"mesh");qt(this,"mat");qt(this,"x",0);qt(this,"z",0);qt(this,"y",0);qt(this,"dir",0);qt(this,"moving",!1);qt(this,"t",Math.random()*10);qt(this,"speed",0);qt(this,"uv");qt(this,"cur","");qt(this,"shadeK",0);qt(this,"shadeT",Math.random()*.2);qt(this,"shadeTarget",0);qt(this,"anim","rot");qt(this,"fps",8);qt(this,"ghost",null);let i=e,s=e*(Dc/Jr)*Pn,r=new En;r.setAttribute("position",new Oe([-i/2,0,0,i/2,0,0,i/2,s,0,-i/2,s,0],3)),this.uv=new Oe([0,0,1,0,1,1,0,1],2),r.setAttribute("uv",this.uv),r.setIndex([0,1,2,0,2,3]),this.mat=new An({map:t.rot.tex,alphaTest:.5,side:ln}),this.mesh=new De(r,this.mat),this.mesh.rotation.y=Gi,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1}seeThrough(){this.ghost=new An({map:this.mat.map,alphaTest:.5,color:12574975,transparent:!0,opacity:.42,depthFunc:Fs,depthWrite:!1,fog:!1});let t=new De(this.mesh.geometry,this.ghost);return t.frustumCulled=!1,t.renderOrder=3,this.mesh.add(t),this}place(t,e,i=this.dir){return this.x=t,this.z=e,this.dir=i,this}frame(t,e,i){let s=`${t}:${e}:${i}`;if(s===this.cur)return;this.cur=s;let r=this.sheets[t]??this.sheets.rot;this.mat.map!==r.tex&&(this.mat.map=r.tex,this.ghost&&(this.ghost.map=r.tex));let a=e/r.cols,o=(e+1)/r.cols,l=1-i/r.rows,c=1-(i+Dc/Jr)/r.rows;this.uv.setXY(0,a,c),this.uv.setXY(1,o,c),this.uv.setXY(2,o,l),this.uv.setXY(3,a,l),this.uv.needsUpdate=!0}update(t,e){this.t+=t;let i=this.sheets[this.anim]?this.anim:"rot";i==="rot"?this.frame("rot",this.dir,0):this.frame(i,Math.floor(this.t*this.fps)%this.sheets[i].cols,this.dir);let s=(Dc-kx)/Jr*this.cellM/Math.sin(ki);this.mesh.position.set(this.x-Cn.x*s,this.y,this.z-Cn.z*s),this.shadeT-=t,this.shadeT<=0&&(this.shadeT=.12,this.shadeTarget=Wx(this.x,this.y+1.2,this.z,e)?1:0),this.shadeK+=(this.shadeTarget-this.shadeK)*Math.min(1,t*8);let r=this.shadeK;this.mat.color.setRGB(.98-.3*r,.98-.27*r,.98-.2*r)}};function Wx(n,t,e,i){let s=-hs.x,r=-hs.y,a=-hs.z;for(let o of i){let l=0,c=60,d=(u,f,h,g)=>{if(Math.abs(f)<1e-6)return u>=h&&u<=g;let b=(h-u)/f,p=(g-u)/f;return b>p&&([b,p]=[p,b]),l=Math.max(l,b),c=Math.min(c,p),l<=c};if(d(n,s,o.x0,o.x1)&&d(t,r,0,o.h*Pn)&&d(e,a,o.z0,o.z1)&&c>.05)return!0}return!1}function Ko(n,t,e,i){for(let s=0;s<2;s++)for(let r of i){let a=Math.max(r.x0,Math.min(n,r.x1)),o=Math.max(r.z0,Math.min(t,r.z1)),l=n-a,c=t-o,d=l*l+c*c;if(!(d>=e*e))if(d>1e-8){let u=Math.sqrt(d);n=a+l/u*e,t=o+c/u*e}else{let u=n-r.x0,f=r.x1-n,h=t-r.z0,g=r.z1-t,b=Math.min(u,f,h,g);b===u?n=r.x0-e:b===f?n=r.x1+e:b===h?t=r.z0-e:t=r.z1+e,l=c=0}}return[n,t]}var us=.215,Nc=.29*Pn,Qo=class{constructor(t,e,i,s){qt(this,"colliders",s);qt(this,"mesh");qt(this,"list");qt(this,"m",new fe);qt(this,"q",new gn);qt(this,"q2",new gn);qt(this,"p",new W);qt(this,"one",new W(1,1,1));qt(this,"ax",new W);this.list=t.map((a,o)=>({x:a.x,y:a.y*Pn,z:a.z,loose:a.loose,on:a.on??[],mode:"still",dx:1,dz:0,v:0,vy:0,tip:0,roll:0,lying:!1,yaw:o*2.399%6.283,wait:0})),this.mesh=new ns(e,i,this.list.length),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.name="kegs";let r=new ne;this.list.forEach((a,o)=>{let l=.86+o*7919%13/90;this.mesh.setColorAt(o,r.setRGB(l,l,l*1.02)),this.write(o)}),this.mesh.instanceMatrix.setUsage(hc)}pick(t){let e=-1,i=1/0;return this.list.forEach((s,r)=>{let a=s.x-t.x,o=s.y+(s.lying?us:Nc)-t.y,l=s.z-t.z,c=a*vn.x+o*vn.y+l*vn.z,d=a-vn.x*c,u=o-vn.y*c,f=l-vn.z*c;Math.hypot(d,u,f)<.42&&c<i&&(i=c,e=r)}),e}knock(t,e,i){let s=this.list[t];if(!s||s.mode!=="still")return;if(!s.loose){s.mode="hop",s.vy=1.6,s.tip=0;return}let r=s.x-e,a=s.z-i,o=Math.hypot(r,a);if(o>7||o<.01){let l=.4+Math.random()*1.2;r=Math.cos(l),a=Math.sin(l)}else r/=o,a/=o;if(s.lying){let l=r*s.dx+a*s.dz>=0?1:-1;s.v=3*l,s.mode="roll"}else s.dx=r,s.dz=a,s.v=3.1,s.tip=0,s.mode="tip",s.vy=0;this.list.forEach((l,c)=>{if(l.on.includes(t)&&l.mode==="still"&&!l.lying&&l.y>.1){l.wait=.12;let d=Math.atan2(a,r)+1.9;l.dx=Math.cos(d),l.dz=Math.sin(d),l.v=2.2,l.tip=0,l.mode="tip",l.vy=0,l.on=[]}}),s.on=[]}blockers(t){for(let e of this.list)e.loose&&e.y<.3&&t.push({x0:e.x-.12,z0:e.z-.12,x1:e.x+.12,z1:e.z+.12,h:.5})}blocked(t,e){for(let i of this.colliders)if(t>i.x0-us&&t<i.x1+us&&e>i.z0-us&&e<i.z1+us)return!0;return!1}update(t){this.list.forEach((e,i)=>{if(e.mode==="still")return;if(e.wait>0){e.wait-=t;return}if(e.mode==="hop"){e.vy-=14*t,e.tip+=e.vy*t,e.tip<=0&&(e.tip=0,e.mode="still"),this.write(i);return}let s=r=>{let a=e.x+e.dx*r,o=e.z+e.dz*r;return this.blocked(a,o)?(e.v*=-.35,0):(e.x=a,e.z=o,r)};if(e.y>0&&(e.vy-=12*t,e.y=Math.max(0,e.y+e.vy*t)),e.mode==="tip")e.tip=Math.min(1,e.tip+t/.24),s(e.v*t*.6),e.tip>=1&&e.y<=0&&(e.mode="roll",e.lying=!0);else{let r=s(e.v*t);e.roll+=r/us;let a=Math.sign(e.v);e.v-=a*1.9*t,(Math.sign(e.v)!==a||Math.abs(e.v)<.05)&&(e.v=0,e.mode="still")}this.write(i)}),this.mesh.instanceMatrix.needsUpdate=!0}write(t){let e=this.list[t],i=e.lying?Math.PI/2:e.mode==="tip"?e.tip*e.tip*(3-2*e.tip)*Math.PI/2:0,s=Nc*Math.cos(i)+us*Math.sin(i)+(e.mode==="hop"?e.tip:0);this.q.setFromAxisAngle(this.ax.set(0,1,0),e.yaw),i>0?(this.q2.setFromAxisAngle(this.ax.set(e.dx,0,e.dz),i),this.q.premultiply(this.q2),this.q2.setFromAxisAngle(this.ax.set(-e.dz,0,e.dx),-e.roll),this.q.premultiply(this.q2)):e.mode==="hop"&&(this.q2.setFromAxisAngle(this.ax.set(1,0,0),e.tip*.5),this.q.premultiply(this.q2)),this.p.set(0,-Nc,0).applyQuaternion(this.q).add(this.ax.set(e.x,e.y+s,e.z)),this.m.compose(this.p,this.q,this.one),this.mesh.setMatrixAt(t,this.m)}};var It=n=>[n>>16&255,n>>8&255,n&255],ht=(n,t=1)=>t>=1?`rgb(${n[0]|0},${n[1]|0},${n[2]|0})`:`rgba(${n[0]|0},${n[1]|0},${n[2]|0},${t})`,Fc=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],vt=(n,t)=>t<=1?[n[0]*t,n[1]*t,n[2]*t]:Fc(n,[255,255,255],t-1),A=(n,t=1)=>ht(It(n),t);function ae(n){let t=n>>>0,e=(()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296});return e.int=i=>Math.floor(e()*i),e.pick=i=>i[Math.floor(e()*i.length)],e.range=(i,s)=>i+(s-i)*e(),e}function Vi(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,[e,i]}var _=(n,t,e,i,s,r)=>{n.fillStyle=r,n.fillRect(Math.round(t),Math.round(e),Math.round(i),Math.round(s))};function In(n,t,e,i,s,r,a=1.25,o=.7){_(n,t,e,i,s,ht(r)),_(n,t,e,i,1,ht(vt(r,a))),_(n,t,e,1,s,ht(vt(r,a))),_(n,t,e+s-1,i,1,ht(vt(r,o))),_(n,t+i-1,e,1,s,ht(vt(r,o)))}function hn(n,t,e,i,s,r,a=1){if(t=Math.round(t),e=Math.round(e),i=Math.round(i),s=Math.round(s),i<=0||s<=0)return;let o=n.getTransform(),l=n.getImageData(t+o.e,e+o.f,i,s),c=l.data,d=ae(a);for(let u=0;u<c.length;u+=4){if(c[u+3]===0)continue;let f=(d()-.5)*2*r;c[u]+=f,c[u+1]+=f,c[u+2]+=f}n.putImageData(l,t+o.e,e+o.f)}function ti(n,t,e,i,s,r,a=.28,o=.42,l=6){let c=n.createLinearGradient(0,e,0,e+Math.min(s,40));c.addColorStop(0,`rgba(18,16,20,${a})`),c.addColorStop(1,"rgba(18,16,20,0)"),n.fillStyle=c,n.fillRect(t,e,i,Math.min(s,40));let d=Math.min(s,26);c=n.createLinearGradient(0,e+s-d,0,e+s),c.addColorStop(0,"rgba(24,30,20,0)"),c.addColorStop(1,`rgba(24,30,20,${o})`),n.fillStyle=c,n.fillRect(t,e+s-d,i,d);for(let u=0;u<l;u++){let f=t+r.int(i),h=10+r.int(Math.max(4,s*.5)),g=e+r.int(Math.max(1,s*.3));for(let b=0;b<h;b++)_(n,f+(r()<.15?1:0),g+b,1+(b<3?1:0),1,`rgba(20,18,16,${.22*(1-b/h)})`)}}var _i={tones:[9719869,9062199,10312259,8142643,11035722,6960686,9393476].map(It),mortar:It(6705738)},ds={tones:[10783326,9994330,11441768,9139279,10123864,8021832,11770996].map(It),mortar:It(7300692)},fs={tones:[6113864,5521983,6705228,4930362,7232080,5916224].map(It),mortar:It(4012086)},ad={tones:[8802367,8013368,9394760,7225912,10118736,6044212,8410698].map(It),mortar:It(6049352)};function ei(n,t,e,i,s,r,a,o=8,l=4){n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip(),_(n,t,e,i,s,ht(r.mortar));for(let c=0;c*l<s;c++){let d=c&1?o/2:0;for(let u=-1;u*o<i+o;u++){let f=a.pick(r.tones);a()<.06?f=vt(f,.62):f=vt(f,.93+a()*.14);let h=t+u*o-d,g=e+c*l;_(n,h,g,o-1,l-1,ht(f)),a()<.35&&_(n,h,g,o-1-a.int(3),1,ht(vt(f,1.12)))}}n.restore()}function od(n,t,e,i,s,r,a=!0){let o=[5002852,4608096,5463404,4213079,5792369,4870236].map(It);n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip(),_(n,t,e,i,s,A(2896444));for(let l=0;l*5<s;l++){let c=(l&1?3:0)+(r()<.2?1:0);for(let d=-1;d*7<i+7;d++){let u=r.pick(o),f=r();f<.04?u=It(7174022):f<.07?u=It(3488839):f<.1&&(u=It(6116704));let h=t+d*7-c,g=e+l*5+(r()<.03?1:0);_(n,h,g,6,4,ht(u)),_(n,h,g,6,1,ht(vt(u,1.16))),r()<.3&&_(n,h+r.int(4),g+1,2,1,ht(vt(u,1.28)))}}if(a)for(let l=0;l<i*s/420;l++){let c=t+r.int(i),d=e+s-1-Math.floor(r()*r()*s*.8),u=r.pick([5925434,5069876,7043652]);_(n,c,d,1+r.int(3),1,A(u)),r()<.5&&_(n,c+1,d-1,1+r.int(2),1,A(u))}for(let l=0;l<i/14;l++){let c=t+r.int(i);n.fillStyle="rgba(20,24,30,0.16)",n.fillRect(c,e,1+r.int(2),s)}n.restore()}function Oc(n,t,e,i,s,r,a,o){n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip(),_(n,t,e,i,s,ht(a));let l=Math.floor(t/4)-1,c=Math.floor(e/4)-1,d=Math.ceil((t+i)/4)+1,u=Math.ceil((e+s)/4)+1;for(let f=c;f<u;f++)for(let h=l;h<d;h++){let g=((h-f)%4+4)%4;if(g!==0&&g!==3)continue;let b=o.pick(r);b=vt(b,.9+o()*.2);let p=g===0?8:4,m=g===0?4:8;_(n,h*4,f*4,p-1,m-1,ht(b)),o()<.25&&_(n,h*4,f*4,p-1,1,ht(vt(b,1.14)))}n.restore()}function tl(n,t,e,i,s,r,a=28,o=19){let l=[9078656,8552313,9538948,8091762,8946298].map(It);n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip(),_(n,t,e,i,s,A(5591887));for(let c=0;c*o<s;c++){let d=c&1?a/2:0;for(let u=-1;u*a<i+a;u++){let f=vt(r.pick(l),.94+r()*.1),h=t+u*a-d,g=e+c*o;if(_(n,h,g,a-1,o-1,ht(f)),_(n,h,g,a-1,1,ht(vt(f,1.1))),r()<.16){let b=h+3+r.int(a-8),p=g;for(let m=0;m<o-1;m++)_(n,b,p+m,1,1,A(5131337)),r()<.4&&(b+=r()<.5?1:-1)}}}for(let c=0;c<i*s/260;c++)_(n,t+r.int(i),e+r.int(s),1,1,r()<.6?A(12170925):A(4868165));n.restore()}function Bc(n,t,e,i,s,r,a=4014150){_(n,t,e,i,s,A(a));let o=It(a);n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip();for(let l=0;l<i*s/9e3;l++){let c=30+r.int(90),d=14+r.int(40),u=t+r.int(i),f=e+r.int(s),h=vt(o,r()<.5?.86:1.1);_(n,u,f,c,d,ht(h)),n.strokeStyle=ht(vt(o,.7)),n.lineWidth=1,n.strokeRect(u+.5,f+.5,c-1,d-1)}for(let l=0;l<i*s/60;l++)_(n,t+r.int(i),e+r.int(s),1,1,ht(vt(o,r()<.6?1.3:.7)));n.restore()}function Ln(n,t,e,i,s,r,a=It(8820646)){let o=[];for(let u=0;u<9;u++){let f=u/9*Math.PI*2,h=.65+r()*.5;o.push([t+Math.cos(f)*i*h,e+Math.sin(f)*s*h])}let c=()=>{n.beginPath(),o.forEach((h,g)=>{let b=o[(g+1)%9],p=(h[0]+b[0])/2,m=(h[1]+b[1])/2;g===0?n.moveTo(p,m):n.quadraticCurveTo(h[0],h[1],p,m)});let u=o[0],f=o[1];n.quadraticCurveTo(u[0],u[1],(u[0]+f[0])/2,(u[1]+f[1])/2),n.closePath()};n.save(),c(),n.fillStyle="rgba(16,18,22,0.55)",n.fill(),n.translate(0,-1),c(),n.clip();let d=n.createLinearGradient(0,e-s,0,e+s);d.addColorStop(0,ht(vt(a,1.12),.9)),d.addColorStop(1,ht(vt(a,.72),.9)),n.fillStyle=d,n.fillRect(t-i*1.3,e-s*1.3,i*2.6,s*2.6);for(let u=0;u<Math.max(1,i*s/60);u++){let f=t+(r()-.5)*i*1.4,h=e+(r()-.5)*s*1.2;_(n,f-1,h,3,1,ht(vt(a,1.35),.8)),_(n,f,h-1,1,1,ht(vt(a,1.35),.6))}n.restore()}var Xx='"Copperplate", "Baskerville", Georgia, "Bitstream Charter", "Times New Roman", serif',ld='"Avenir Next Condensed", "HelveticaNeue-CondensedBlack", "Arial Narrow", Inter, "Helvetica Neue", Arial, sans-serif',Wi={serif:Xx,block:ld},Uc=null;function nn(n,t,e,i,s,r,a={}){let o=a.font??ld,l=a.weight??900,c=4;Uc||(Uc=Vi(2048,256));let[d,u]=Uc,f=Math.round(s/.72*c);u.font=`${l} ${f}px ${o}`;let h=u.measureText(t).width/c*(a.squash??1),g=a.squash??1;a.maxW&&h>a.maxW&&(g*=a.maxW/h,h=a.maxW);let b=Math.ceil(h)+2,p=Math.ceil(s*1.6)+2;u.clearRect(0,0,d.width,d.height),u.save(),u.scale(g,1),u.fillStyle="#fff",u.textBaseline="alphabetic",u.fillText(t,c/g,Math.round(s*1.3)*c),u.restore();let m=u.getImageData(0,0,b*c,p*c).data,[M,D]=Vi(b,p),T=D.createImageData(b,p);for(let P=0;P<p;P++)for(let x=0;x<b;x++){let E=0;for(let Z=0;Z<c;Z++)for(let O=0;O<c;O++)E+=m[((P*c+Z)*b*c+x*c+O)*4+3];T.data[(P*b+x)*4+3]=E/(c*c)>110?255:0}let L=(P,x,E)=>{let Z=/rgba?\(([^)]+)\)/.exec(P),O=255,G=255,j=255;if(Z){let U=Z[1].split(",").map(Number);O=U[0],G=U[1],j=U[2]}else if(P[0]==="#"){let U=parseInt(P.slice(1),16);O=U>>16&255,G=U>>8&255,j=U&255}for(let U=0;U<T.data.length;U+=4)T.data[U]=O,T.data[U+1]=G,T.data[U+2]=j;D.putImageData(T,0,0);let I=a.align==="center"?-h/2:a.align==="right"?-h:0;n.drawImage(M,Math.round(e+I+x)-1,Math.round(i-s*1.3+E))};if(a.outline)for(let[P,x]of[[-1,0],[1,0],[0,-1],[0,1],[1,1],[-1,1]])L(a.outline,P,x);return a.shadow&&L(a.shadow,1,1),L(r,0,0),h}var qx={A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",J:"001001001101010",K:"101101110101101",L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"010101101101010",P:"110101110100100",Q:"010101101110011",R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",V:"101101101101010",W:"101101111111101",X:"101101010101101",Y:"101101010010010",Z:"111001010100111",0:"111101101101111",1:"010110010010111",2:"110001010100111",3:"110001010001110",4:"101101111001001",5:"111100110001110",6:"011100110101010",7:"111001010010010",8:"010101010101010",9:"010101011001110","\xA3":"011100110100111","+":"000010111010000","-":"000000111000000",".":"000000000000010","!":"010010010000010","&":"010101010101011","'":"010010000000000","/":"001001010100100",":":"000010000010000","%":"101001010100101"};function xe(n,t,e,i,s,r=1,a="left"){let o=t.length*4*r-r,l=a==="center"?Math.round(e-o/2):e;n.fillStyle=s;for(let c of t.toUpperCase()){let d=qx[c];if(d)for(let u=0;u<15;u++)d[u]==="1"&&n.fillRect(l+u%3*r,i+Math.floor(u/3)*r,r,r);l+=4*r}return o}var Ye=3,jo=class{constructor(t=2048){qt(this,"canvas");qt(this,"ctx");qt(this,"size");qt(this,"cx",Ye);qt(this,"cy",Ye);qt(this,"rowH",0);qt(this,"solids",new Map);this.size=t,[this.canvas,this.ctx]=Vi(t,t)}alloc(t,e){if(t=Math.max(1,Math.round(t)),e=Math.max(1,Math.round(e)),this.cx+t+Ye>this.size&&(this.cx=Ye,this.cy+=this.rowH+Ye*2,this.rowH=0),this.cy+e+Ye>this.size)throw new Error("atlas full");let i={x:this.cx,y:this.cy,w:t,h:e};return this.cx+=t+Ye*2,this.rowH=Math.max(this.rowH,e),i}paint(t,e,i,s=!0){let r=this.alloc(t,e),a=this.ctx;return a.save(),a.translate(r.x,r.y),a.beginPath(),a.rect(0,0,r.w,r.h),a.clip(),i(a,r.w,r.h),a.restore(),s&&this.extrude(r),r}paintM(t,e,i,s=1,r=!0){return this.paint(t*32*s,e*32*s,i,r)}extrude(t){let e=this.ctx,i=this.canvas;for(let s=1;s<=Ye;s++)e.drawImage(i,t.x,t.y,t.w,1,t.x,t.y-s,t.w,1),e.drawImage(i,t.x,t.y+t.h-1,t.w,1,t.x,t.y+t.h-1+s,t.w,1);for(let s=1;s<=Ye;s++)e.drawImage(i,t.x,t.y-Ye,1,t.h+Ye*2,t.x-s,t.y-Ye,1,t.h+Ye*2),e.drawImage(i,t.x+t.w-1,t.y-Ye,1,t.h+Ye*2,t.x+t.w-1+s,t.y-Ye,1,t.h+Ye*2)}solid(t){let e=String(t),i=this.solids.get(e);return i||(i=this.paint(8,8,s=>_(s,0,0,8,8,A(t))),this.solids.set(e,i)),i}usage(){return(this.cy+this.rowH)/this.size}};var vi=32,ud=2054717,el=1325609,ni=14857802,cd=14274744,tr=16762986;function Dn(n,t,e,i,s,r,a={}){let o=ae(r),l=a.cool?It(14674402):It(16767370),c=a.cool?It(10335408):It(15242298),d=n.createRadialGradient(t+i*.5,e+s*.45,1,t+i*.5,e+s*.5,Math.max(i,s)*.75);if(d.addColorStop(0,ht(l)),d.addColorStop(1,ht(c)),n.fillStyle=d,n.fillRect(t,e,i,s),a.bar)for(let u=0;u<2;u++){let f=e+4+u*7;_(n,t+2,f+5,i-4,1,A(8012576));for(let h=t+3;h<t+i-3;h+=2)o()<.7&&_(n,h,f+5-2-o.int(3),1,2+o.int(3),A(o.pick([4156218,9058850,3100538,6965788,14205040,8006186])))}if(a.telly){let u=t+i-13,f=e+3;_(n,u-1,f-1,12,8,A(1710622)),_(n,u,f,10,6,A(5216842)),_(n,u,f+2,10,1,A(7321706)),_(n,u+4,f,1,6,A(14675677)),_(n,u+6,f+3,1,1,A(16777215))}for(let u=0;u<(a.heads??0);u++){let f=t+3+o.int(Math.max(1,i-10)),h=e+s*(.42+o()*.12),g=o.pick([4860442,3810328,5911328]);_(n,f+1,h,3,3,A(g)),_(n,f,h+3,5,s,A(g)),o()<.6&&_(n,f+5,h+3,1,3,A(16246688))}if(a.frost){let u=e+s*(1-a.frost);_(n,t,u,i,s*a.frost+1,ht(a.cool?It(13622486):It(16177050),.72)),_(n,t,u,i,1,ht(It(16774088),.9));for(let f=t+2;f<t+i-2;f+=4)_(n,f,u+3,2,1,ht(It(13208122),.55))}}function Yx(n,t,e,i,s,r,a=!0){let o=ae(r);if(_(n,t,e,i,s,A(2568509)),n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip(),n.fillStyle="rgba(150,168,184,0.38)",n.beginPath(),n.moveTo(t-2,e+s*.55),n.lineTo(t+i*.7,e-2),n.lineTo(t+i+4,e-2),n.lineTo(t+i*.2,e+s+2),n.lineTo(t-2,e+s+2),n.closePath(),n.fill(),a){_(n,t,e+s*.5,i,s*.5,"rgba(196,200,196,0.55)");for(let l=t+1;l<t+i;l+=3)_(n,l,e+s*.5,1,s*.5,"rgba(120,126,128,0.35)");o()<.6&&_(n,t+2+o.int(Math.max(1,i-6)),e+s*.5-4,3,4,A(8010282))}n.restore()}function js(n,t,e,i,s,r,a=!1){_(n,t-2,e-5,i+4,5,A(13222054)),_(n,t-2,e-5,i+4,1,A(14998726)),_(n,t-2,e-1,i+4,1,A(9340530)),_(n,t-1,e,i+2,s+1,A(2761760)),_(n,t,e,i,s,A(15130572)),a?Dn(n,t+2,e+2,i-4,s-4,r,{heads:0}):Yx(n,t+2,e+2,i-4,s-4,r),a&&(_(n,t+2,e+2,5,s-4,ht(It(11027758),.85)),_(n,t+i-7,e+2,5,s-4,ht(It(11027758),.85))),_(n,t+2,e+Math.floor(s/2)-1,i-4,2,A(15130572)),_(n,t+Math.floor(i/2),e+2,1,s-4,A(13814454)),_(n,t-3,e+s+1,i+6,3,A(13616812)),_(n,t-3,e+s+4,i+6,1,A(4864564));for(let o=0;o<5;o++)_(n,t-2+o*2,e+s+5+o,1,6,"rgba(30,26,24,0.22)")}function dd(n,t,e){let i=ae(11),s=u=>Math.round(e-u*vi),r=u=>Math.round(u*vi);ei(n,0,0,t,s(3.3),_i,i),ti(n,0,0,t,s(3.3),i,.38,0,9),_(n,0,s(3.62),t,4,A(13287330)),_(n,0,s(3.62),t,1,A(15129796)),_(n,0,s(3.62)+4,t,1,A(5914680));for(let[u,f]of[1.25,3.5,5.75].entries())js(n,r(f-.5),s(5.55),r(1),s(4.05)-s(5.55),20+u,!1);let a=s(3.3),o=It(ud);_(n,0,a,t,e-a,ht(o)),_(n,0,a,t,2,A(ni)),_(n,0,a+2,t,2,ht(vt(o,.6))),_(n,0,s(2.5),t,2,ht(vt(o,.55)));let l=[[0,.3],[2.3,2.6],[3.7,4],[6.7,7]],c=(u,f)=>{for(let h=r(u)+2;h<r(f)-6;h+=22){let g=Math.min(20,r(f)-2-h);In(n,h,s(.68),g,s(.1)-s(.68),vt(o,.86),.62,1.22)}};c(.3,2.3),c(4,6.7),_(n,r(.3),s(2.45),r(2),s(.75)-s(2.45),A(2759696)),_(n,r(4),s(2.45),r(2.7),s(.75)-s(2.45),A(2759696)),_(n,r(2.6),s(2.45),r(1.1),s(0)-s(2.45),A(2759696)),_(n,r(.3)-1,s(.75),r(2)+2,2,A(cd)),_(n,r(4)-1,s(.75),r(2.7)+2,2,A(cd));for(let[u,f]of l){let h=r(u),g=r(f)-r(u);_(n,h,s(2.5),g,e-s(2.5),ht(vt(o,1.12))),_(n,h,s(2.5),1,e,ht(vt(o,1.4))),_(n,h+g-1,s(2.5),1,e,ht(vt(o,.6))),_(n,h+2,s(2.3),g-4,s(.9)-s(2.3),ht(vt(o,.88))),_(n,h-1,s(2.5),g+2,3,A(ni)),_(n,h-1,s(.18),g+2,s(0)-s(.18),ht(vt(o,.7)))}let d=n.createLinearGradient(0,e-22,0,e);d.addColorStop(0,"rgba(20,22,16,0)"),d.addColorStop(1,"rgba(20,22,16,0.55)"),n.fillStyle=d,n.fillRect(0,e-22,t,22),hn(n,0,0,t,e,5,3)}function nl(n,t,e,i){let s=It(ud);if(_(n,0,0,t,e,ht(vt(s,.8))),i===2){Dn(n,3,2,t-6,8,5),xe(n,"3",t/2-1,4,A(8014364)),_(n,2,12,t-4,e-12,ht(vt(s,.62))),In(n,4,14,t-8,e-16,vt(s,1),1.35,.6),Dn(n,7,17,t-14,28,6,{frost:.45,heads:1}),_(n,7,30,t-14,1,ht(vt(s,.8))),_(n,Math.floor(t/2),17,1,28,ht(vt(s,.8))),In(n,7,49,t-14,14,vt(s,.84),.6,1.2),_(n,6,e-9,t-12,6,A(12096058)),_(n,6,e-9,t-12,1,A(15323002)),_(n,t-9,46,2,5,A(15323002));return}let r=i===0?2:3,a=(t-2)/r;for(let o=0;o<r;o++){let l=Math.round(1+o*a)+1,c=Math.round(a)-2;Dn(n,l,2,c,11,30+i*7+o,{});for(let d=l+1;d<l+c-1;d+=3)_(n,d,2,1,11,ht(It(12085802),.45));Dn(n,l,15,c,e-17,40+i*7+o,{frost:.36,bar:o===0&&i===0,telly:i===1&&o===2,heads:1+(o+i)%2})}xe(n,i===0?"ALES":"WINES & SPIRITS",t/2,e-13,ht(It(10115618)),1,"center"),_(n,0,13,t,2,ht(vt(s,.8))),_(n,0,13,t,1,ht(vt(s,1.3)))}function fd(n,t,e){_(n,0,0,t,e,A(el));let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(255,255,255,0.10)"),i.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle=A(ni),n.lineWidth=1,n.strokeRect(3.5,3.5,t-7,e-7),nn(n,"THE THREE LIONS",t/2,e*.5+12,24,A(15780186),{font:Wi.serif,weight:700,align:"center",shadow:A(662546),maxW:t-70});for(let r of[20,t-20])_(n,r-4,e/2-1,9,3,A(ni)),_(n,r-1,e/2-4,3,9,A(ni)),_(n,r-2,e/2-2,5,5,A(16178314));let s=ae(77);for(let r=0;r<26;r++)_(n,s.int(t),4+s.int(e-8),1+s.int(2),1,"rgba(8,20,14,0.45)")}function pd(n,t,e){let i=ae(12),s=d=>Math.round(e-d*vi),r=d=>Math.round(d*vi);ei(n,0,0,t,e,_i,i);let a=r(.7),o=s(5.6),l=r(3.6),c=r(1.7);_(n,a,o,l,c,"rgba(214,204,176,0.55)"),n.strokeStyle="rgba(40,30,26,0.5)",n.strokeRect(a+1.5,o+1.5,l-3,c-3),nn(n,"FINE ALES",a+l/2,o+22,13,"rgba(46,34,30,0.75)",{font:Wi.serif,weight:700,align:"center",maxW:l-10}),nn(n,"& STOUT",a+l/2,o+44,13,"rgba(46,34,30,0.7)",{font:Wi.serif,weight:700,align:"center",maxW:l-10});for(let d=0;d<500;d++){let u=a+i.int(l),f=o+i.int(c);_(n,u,f,1+i.int(3),1,ht(i.pick(_i.tones),.9))}ti(n,0,0,t,e,i,.3,.5,12),_(n,r(3.1)-2,s(2.1)-4,r(1)+4,4,A(12169370)),_(n,r(3.1),s(2.1),r(1),s(0)-s(2.1),A(1842208)),In(n,r(3.1)+2,s(2.1)+2,r(1)-4,s(.1)-s(2.1)-2,It(2500654),1.3,.6),xe(n,"STAFF",r(3.6),s(1.5),A(13222570),1,"center"),_(n,r(3.95),s(1.05),2,3,A(12096058)),js(n,r(3.2),s(5.2),r(.8),r(1.1),31,!1),In(n,r(1.2),s(2.9),12,9,It(9409948));for(let d=0;d<3;d++)_(n,r(1.2)+2,s(2.9)+2+d*2,8,1,A(4869974));_(n,r(1.2)+5,s(2.9)+9,1,s(0)-s(2.9),"rgba(20,20,22,0.7)"),hn(n,0,0,t,e,5,4)}function zc(n,t,e,i=5){od(n,0,0,t,e,ae(i));let s=ae(i+100);for(let a=0;a<3;a++){let o=s.int(t-50),l=s.int(e-30),c=28+s.int(40),d=15+s.int(20);n.fillStyle=s()<.5?"rgba(120,136,156,0.22)":"rgba(20,22,30,0.2)",n.fillRect(o-o%7,l-l%5,c-c%7,d-d%5)}for(let a=0;a<10;a++)n.fillStyle="rgba(150,150,90,0.16)",n.beginPath(),n.ellipse(s.int(t),s.int(e),3+s.int(7),2+s.int(4),0,0,7),n.fill();_(n,0,e-2,t,2,"rgba(16,18,22,0.5)");let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(170,186,200,0.16)"),r.addColorStop(.5,"rgba(170,186,200,0)"),n.fillStyle=r,n.fillRect(0,0,t,e),hn(n,0,0,t,e,4,i)}function hd(n,t,e,i,s=1){let r=["..............##.",".#...........####","#...#########.##.","#..###########...",".#############...","..###.....###....","..#.#.....#.#....",".##.##...##.##..."];n.fillStyle=i,r.forEach((a,o)=>{for(let l=0;l<a.length;l++)a[l]==="#"&&n.fillRect(t+l*s,e+o*s,s,s)})}function md(n,t,e){_(n,0,0,t,e,A(1710620)),_(n,2,2,t-4,e-4,A(ni)),_(n,4,4,t-8,e-8,A(10691359));let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(255,255,255,0.12)"),i.addColorStop(1,"rgba(0,0,0,0.25)"),n.fillStyle=i,n.fillRect(4,4,t-8,e-8);for(let s=0;s<3;s++)hd(n,Math.round(t/2-17)+1,13+s*19+1,A(5902864),2),hd(n,Math.round(t/2-17),13+s*19,A(15912028),2);_(n,6,e-22,t-12,15,A(el)),xe(n,"THREE LIONS",t/2,e-19,A(15780186),1,"center"),xe(n,"FREE HOUSE",t/2,e-13,A(13216074),1,"center")}function gd(n,t,e){_(n,0,0,t,e,A(6965802)),_(n,3,3,t-6,e-6,A(1975330)),xe(n,"MATCH",t/2,7,A(15921382),2,"center"),xe(n,"DAY",t/2,19,A(15921382),2,"center"),_(n,6,31,t-12,1,A(15258186)),xe(n,"PIE+PINT",t/2,35,A(16230576),1,"center"),xe(n,"\xA36",t/2,43,A(15258186),2,"center");let i=ae(9);for(let s=0;s<40;s++)_(n,3+i.int(t-6),3+i.int(e-6),1,1,"rgba(230,230,220,0.18)")}function xd(n,t,e,i){let s=ae(i.seed),r=l=>Math.round(e-l*vi);if(ei(n,0,0,t,e,i.pal,s),ti(n,0,0,t,r(3),s,.3,0,5),_(n,0,0,t,3,A(11117200)),_(n,0,3,t,1,"rgba(20,18,16,0.5)"),i.kind==="house"){js(n,Math.round(t*.2),r(2.5),30,44,i.seed,!0),js(n,Math.round(t*.62),r(2.5),30,44,i.seed+1,!1),ti(n,0,0,t,e,s,.1,.5,8),hn(n,0,0,t,e,5,i.seed);return}let a=It(i.frame);if(_(n,0,r(3.1),t,r(2.38)-r(3.1),A(i.fascia)),_(n,0,r(3.1),t,1,ht(vt(It(i.fascia),1.3))),_(n,0,r(2.38)-1,t,2,"rgba(10,10,12,0.6)"),_(n,0,r(2.36),t,e-r(2.36),ht(vt(a,.9))),_(n,0,r(2.36),5,e,ht(vt(a,1.15))),_(n,t-5,r(2.36),5,e,ht(vt(a,.75))),i.kind==="shutter"){for(let l=r(2.3);l<e-2;l+=3)_(n,6,l,t-12,2,A(9080982)),_(n,6,l+2,t-12,1,A(5659746));_(n,6,r(2.3),t-12,4,A(4869973)),In(n,t/2-3,e-9,6,6,It(13214266)),n.strokeStyle="rgba(230,230,235,0.75)",n.lineWidth=2,n.beginPath(),n.moveTo(t*.3,e-20),n.bezierCurveTo(t*.36,e-52,t*.44,e-12,t*.5,e-40),n.bezierCurveTo(t*.56,e-58,t*.6,e-18,t*.7,e-34),n.stroke(),n.strokeStyle="rgba(214,60,90,0.75)",n.beginPath(),n.moveTo(t*.34,e-14),n.lineTo(t*.68,e-16),n.stroke()}else{_(n,6,r(2.3),t-12,r(.42)-r(2.3),A(1645086));for(let l=8;l<t-12;l+=14)In(n,l,r(.36),12,r(.06)-r(.36),vt(a,.8),.6,1.2)}let o=n.createLinearGradient(0,e-18,0,e);o.addColorStop(0,"rgba(20,22,16,0)"),o.addColorStop(1,"rgba(20,22,16,0.5)"),n.fillStyle=o,n.fillRect(0,e-18,t,18),hn(n,0,0,t,e,5,i.seed)}function er(n,t,e,i,s,r,a={}){if(_(n,0,0,t,e,A(s)),a.stripe!==void 0)for(let f=-e;f<t;f+=16)n.fillStyle=A(a.stripe),n.beginPath(),n.moveTo(f,e),n.lineTo(f+8,e),n.lineTo(f+8+6,e-6),n.lineTo(f+6,e-6),n.closePath(),n.fill();let o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(255,255,255,0.14)"),o.addColorStop(1,"rgba(0,0,0,0.14)"),n.fillStyle=o,n.fillRect(0,0,t,e),a.edge!==void 0&&(n.strokeStyle=A(a.edge),n.lineWidth=2,n.strokeRect(1,1,t-2,e-2));let l=Math.round(e*(a.sub?.5:.58)),c=Math.round(a.sub?e*.62:e*.5+l/2),d=nn(n,i,t/2+(a.crown?16:0),c,l,A(r),{font:a.font??Wi.block,align:"center",maxW:t-(a.crown?60:20),shadow:"rgba(0,0,0,0.35)"});if(a.crown){let f=Math.round(t/2-d/2-22),h=c-l;n.fillStyle=A(r),n.fillRect(f,h+l-8,26,8);for(let g=0;g<3;g++)n.beginPath(),n.moveTo(f+g*9,h+l-8),n.lineTo(f+g*9+4,h+2),n.lineTo(f+g*9+8,h+l-8),n.closePath(),n.fill(),n.fillRect(f+g*9+3,h,3,3);_(n,f+3,h+l-5,20,2,A(s))}a.sub&&nn(n,a.sub,t/2,e-6,Math.round(e*.16),A(r),{align:"center",weight:700,maxW:t-16});let u=ae(i.length*31);for(let f=0;f<t/6;f++)_(n,u.int(t),u.int(e),1,2+u.int(5),"rgba(20,16,10,0.16)")}function _d(n,t,e){let i=ae(404);Dn(n,0,0,t,e,9,{cool:!0}),_(n,0,e-16,t,16,A(2306908)),_(n,0,e-16,t,1,A(3821446)),_(n,0,Math.round(e*.45),t,2,A(10135208));for(let o=3;o<t-3;o+=3){let l=i();_(n,o,e-12+i.int(8),1+(l<.3?1:0),1,A(l<.5?15848036:l<.8?15331058:13781578))}let s=(o,l,c)=>{_(n,o+2,l,2,14,A(5913122)),_(n,o+1,l-2,4,3,A(2760728)),_(n,o,l+13,6,8,A(c)),_(n,o-1,l+15,8,5,A(c)),_(n,o+2,l+15,2,2,A(1709072))};s(8,5,13127722),s(20,4,2775706),s(t-18,5,14725184);let r=(o,l,c,d,u)=>{_(n,o,l,c,d,A(1447964)),_(n,o+1,l+1,c-2,d-3,A(u)),_(n,o+2,l+2,Math.max(1,c-6),1,"rgba(255,255,255,0.5)")};r(34,Math.round(e*.45)-15,20,15,4885200),r(58,Math.round(e*.45)-11,14,11,5941858),r(t-46,Math.round(e*.45)-13,18,13,12109016);for(let o=0;o<4;o++)_(n,76,Math.round(e*.45)-3-o*3,12-o,2,A(i.pick([2763828,14211292,3817290])));for(let o=30;o<t-24;o+=9+i.int(5)){let l=i.pick([14725152,13121578,3832394,14211288,2763312,3107504]),c=5+i.int(7);_(n,o,e-17-c,6+i.int(4),c,A(l)),_(n,o,e-17-c,6,1,"rgba(255,255,255,0.35)")}let a=(o,l,c,d,u,f)=>{_(n,o-1,l-1,30,15,A(1118481)),_(n,o,l,28,13,A(u)),xe(n,c,o+14,l+1,A(f),1,"center"),xe(n,d,o+14,l+7,A(f),1,"center")};a(3,Math.round(e*.52),"WE BUY","GOLD",15910942,1315860),a(t-33,Math.round(e*.52),"CASH 4","PHONES",14168618,16777215),_(n,Math.round(t/2)-16,3,33,9,A(1315860)),xe(n,"OPEN",Math.round(t/2),5,A(16734826),1,"center"),_(n,Math.round(t/2)-15,4,31,1,A(16734826)),_(n,Math.round(t/2)-15,10,31,1,A(16734826)),_(n,Math.round(t*.5),0,2,e,A(1381914)),n.fillStyle="rgba(190,205,215,0.16)",n.beginPath(),n.moveTo(0,e*.7),n.lineTo(t*.35,0),n.lineTo(t*.5,0),n.lineTo(0,e),n.closePath(),n.fill()}function il(n,t,e,i,s,r){let a=ae(i);Dn(n,0,0,t,e,i,{cool:s,heads:2,frost:0}),_(n,0,e-10,t,10,"rgba(40,34,30,0.55)");for(let o=4;o<t-4;o+=6+a.int(5))_(n,o,e-10-3-a.int(8),4+a.int(3),4+a.int(8),A(a.pick([14209728,12597547,3107504,14725152,3832394])));for(let o=6;o<t-22;o+=24+a.int(8)){let l=16+a.int(5),c=22+a.int(8),d=14+a.int(6),u=a.pick([16052448,15910942,14168618,3107504,16052448]),f=u===16052448||u===15910942?1710618:16777215;_(n,o,d,l,c,A(u)),_(n,o,d,l,1,"rgba(255,255,255,0.5)"),xe(n,a.pick(["2/1","WIN","\xA35","11/4","NOW","3FOR2"]),o+l/2,d+3,A(f),1,"center");for(let h=0;h<3;h++)_(n,o+2,d+11+h*3,l-4-a.int(5),1,ht(It(f),.6))}_(n,Math.round(t*.5),0,2,e,A(1711136)),_(n,4,4,r.length*4+3,9,A(16052448)),xe(n,r,6,6,A(12593182))}function vd(n,t,e,i,s,r=!0){let a=It(i);_(n,0,0,t,e,ht(vt(a,.7))),s?Dn(n,3,3,t-6,e-16,71,{cool:r}):_(n,3,3,t-6,e-16,A(1843238)),_(n,3,Math.round(e*.42),t-6,2,ht(vt(a,.9))),_(n,t-8,Math.round(e*.5),2,6,A(14211292)),In(n,3,e-12,t-6,10,vt(a,.85)),s&&(_(n,6,8,14,9,A(16052448)),xe(n,"PUSH",7,10,A(2106410)))}function yd(n,t,e){_(n,0,0,t,e,A(11843772)),_(n,0,0,t,1,A(14475234)),_(n,0,e-3,t,3,A(6975092));for(let s=3;s<e-4;s+=2)_(n,3,s,t-12,1,A(5922406));_(n,t-7,3,4,5,A(3816772)),_(n,t-6,10,2,2,A(5419114));let i=ae(17);for(let s=0;s<14;s++)_(n,i.int(t),2+i.int(e-3),1,2+i.int(4),"rgba(110,70,40,0.4)")}function bd(n,t,e){_(n,0,0,t,e,A(12830667)),n.strokeStyle=A(9080468),n.strokeRect(.5,.5,t-1,e-1),n.fillStyle=A(2895669),n.beginPath(),n.arc(t/2,e/2,e/2-3,0,7),n.fill(),n.strokeStyle=A(8159368);for(let i=0;i<6;i++){let s=i/6*Math.PI*2;n.beginPath(),n.moveTo(t/2,e/2),n.lineTo(t/2+Math.cos(s)*(e/2-4),e/2+Math.sin(s)*(e/2-4)),n.stroke()}_(n,t/2-1,e/2-1,3,3,A(10133670)),_(n,2,2,5,3,"rgba(240,240,236,0.8)")}function kc(n,t,e,i){let s=ae(i);_(n,0,0,t,e,A(5461596));for(let a=0;a<t;a+=30)_(n,a,0,1,e,A(4145735)),_(n,a+1,0,1,e,A(6448749));for(let a=0;a<4;a++){let o=s.int(t-30),l=s.int(e-20);_(n,o,l,16+s.int(24),10+s.int(16),ht(vt(It(5461596),s()<.5?.8:1.14)))}for(let a=0;a<3;a++){let o=10+s.int(Math.max(1,t-40)),l=8+s.int(Math.max(1,e-24)),c=14+s.int(26),d=6+s.int(10);n.fillStyle="rgba(130,148,164,0.55)",n.beginPath(),n.ellipse(o+c/2,l+d/2,c/2,d/2,0,0,7),n.fill(),_(n,o+c/2-2,l+d/2,4,1,"rgba(200,214,226,0.7)")}for(let a=0;a<t*e/9;a++)_(n,s.int(t),s.int(e),1,1,s()<.5?A(4540493):A(6448749));for(let a=0;a<40;a++){let o=s.int(t),l=s()<.5?e-6-s.int(8):s.int(e);_(n,o,l,1+s.int(3),1,A(s.pick([5925434,5069876])))}for(let a=0;a<7;a++){let o=s.int(t),l=s.int(e);_(n,o,l,2,2,A(15263454)),_(n,o+1,l+2,1,1,A(15263454))}for(let a=0;a<2;a++)n.strokeStyle="rgba(20,20,24,0.55)",n.beginPath(),n.moveTo(s.int(t),6),n.lineTo(s.int(t),e-6),n.stroke();n.strokeStyle=A(9407104),n.lineWidth=3,n.strokeRect(1.5,1.5,t-3,e-3),n.strokeStyle="rgba(20,20,24,0.5)",n.lineWidth=1,n.strokeRect(4.5,4.5,t-9,e-9);let r=n.createLinearGradient(0,0,0,12);r.addColorStop(0,"rgba(10,10,14,0.4)"),r.addColorStop(1,"rgba(10,10,14,0)"),n.fillStyle=r,n.fillRect(0,0,t,12)}function Md(n,t,e){let i=It(1855388);_(n,0,0,t,e,ht(i));let s=n.createLinearGradient(0,0,t,0);s.addColorStop(0,"rgba(255,255,255,0.10)"),s.addColorStop(1,"rgba(0,0,0,0.16)"),n.fillStyle=s,n.fillRect(0,0,t,e),_(n,0,0,t,30,A(1192810)),_(n,0,30,t,3,A(15921906)),n.fillStyle="#f2f2f2",n.beginPath(),n.arc(t/2,15,10,0,7),n.fill(),n.fillStyle=A(1192810),n.beginPath(),n.arc(t/2,15,7,0,7),n.fill(),_(n,t/2-2,13,4,4,"#f2f2f2");let r=(o,l,c)=>{let u=o+22;_(n,6,o+6,30,32,"#f2f2f2"),n.fillStyle=ht(i),n.beginPath(),l==="up"?(n.moveTo(21,u-13),n.lineTo(32,u-1),n.lineTo(25,u-1),n.lineTo(25,u+12),n.lineTo(17,u+12),n.lineTo(17,u-1),n.lineTo(10,u-1)):l==="left"?(n.moveTo(8,u),n.lineTo(20,u-11),n.lineTo(20,u-4),n.lineTo(33,u-4),n.lineTo(33,u+4),n.lineTo(20,u+4),n.lineTo(20,u+11)):(n.moveTo(34,u),n.lineTo(22,u-11),n.lineTo(22,u-4),n.lineTo(9,u-4),n.lineTo(9,u+4),n.lineTo(22,u+4),n.lineTo(22,u+11)),n.closePath(),n.fill(),nn(n,c,42,o+31,17,"#ffffff",{maxW:t-47,weight:800}),_(n,6,o+46,t-12,1,"rgba(255,255,255,0.45)")};r(40,"up","ENTRANCE"),r(92,"left","PUB"),r(144,"right","SHOPS"),xe(n,"MATCH DAY",t/2,202,"rgba(255,255,255,0.8)",1,"center"),xe(n,"NO BOTTLES",t/2,210,"rgba(255,255,255,0.6)",1,"center"),_(n,0,e-18,t,18,A(3816772)),_(n,0,e-18,t,1,A(6053992)),_(n,t-30,e-62,18,12,A(15910942)),xe(n,"UTD",t-27,e-59,A(1315860)),_(n,12,e-48,12,12,A(14168618));let a=n.createLinearGradient(0,e-60,0,e);a.addColorStop(0,"rgba(10,12,16,0)"),a.addColorStop(1,"rgba(10,12,16,0.4)"),n.fillStyle=a,n.fillRect(0,e-60,t,60)}function Sd(n,t,e){let i=ae(1966),s=It(11976386),r=It(10266541),a=p=>Math.round(e-p*vi),o=p=>Math.round(p*vi),l=n.createLinearGradient(0,a(8),0,a(3));l.addColorStop(0,ht(s)),l.addColorStop(1,ht(r)),n.fillStyle=l,n.fillRect(0,0,t,e);for(let p=0;p<30;p++){let m=i.int(t),M=a(4.5+i()*5),D=50+i.int(150);n.fillStyle=`rgba(${i()<.5?"206,212,214":"146,156,164"},0.2)`,n.beginPath(),n.ellipse(m,M,D,5+i.int(8),0,0,7),n.fill()}let c=(p,m)=>ht(Fc(It(p),r,m)),d=(p,m,M,D)=>{let T=a(m),L=e,P=c(3817544,D);n.strokeStyle=P,n.lineWidth=Math.max(1,2*M),n.beginPath(),n.moveTo(p-8*M,L),n.lineTo(p-3*M,T+8*M),n.moveTo(p+8*M,L),n.lineTo(p+3*M,T+8*M),n.stroke(),n.lineWidth=1;for(let G=T+10*M;G<L;G+=9*M)n.beginPath(),n.moveTo(p-4*M,G),n.lineTo(p+5*M,G+9*M),n.moveTo(p+4*M,G),n.lineTo(p-5*M,G+9*M),n.stroke();let x=Math.round(28*M),E=Math.round(18*M);_(n,p-x/2,T-E/2,x,E,c(2896184,D*.8));let Z=n.createRadialGradient(p,T,1,p,T,38*M);Z.addColorStop(0,"rgba(255,248,214,0.8)"),Z.addColorStop(1,"rgba(255,248,214,0)"),n.fillStyle=Z,n.fillRect(p-40*M,T-40*M,80*M,80*M);let O=Math.max(2,Math.round(4*M));for(let G=0;G*O<E-3;G++)for(let j=0;j*O<x-3;j++)_(n,p-x/2+2+j*O,T-E/2+2+G*O,O-1,O-1,A(16774866))};d(o(3),5.7,.6,.6),d(o(29.4),6,.7,.55);let u=o(5.5),f=o(27),h=a(5.75);_(n,u,h+8,f-u,e,c(6055020,.5));for(let p=u;p<f;p+=4)_(n,p,h+8,1,e,c(4936539,.5));_(n,u,a(5.22),f-u,12,c(1916794,.42)),_(n,u,a(5.22)-2,f-u,16,c(1916794,.42)),nn(n,"NORTH STAND",(u+f)/2-60,a(5.22)+11,10,c(15921906,.2),{align:"center",weight:700});for(let p=u+8;p<f-10;p+=20)_(n,p,a(4.6),11,6,c(2764856,.45)),_(n,p,a(4.6),11,1,c(15257744,.3));for(let p=u+6;p<f;p+=40)_(n,p,h+8,2,e,c(3752266,.5));_(n,u-14,h,f-u+28,8,c(3159613,.45)),_(n,u-14,h,f-u+28,2,c(15659250,.3));for(let p=u;p<f-20;p+=40)n.strokeStyle=c(3159613,.48),n.lineWidth=1.5,n.beginPath(),n.moveTo(p,h),n.lineTo(p+20,h-10),n.lineTo(p+40,h),n.stroke(),_(n,p+19,h-11,2,11,c(3159613,.48));_(n,u,h-12,f-u,2,c(3159613,.48)),d(o(18.6),6.72,1,.42);let g=a(4.02);for(let p=-10;p<t;p+=50)if(_(n,p,g+8,50,e,c(5917256,.3)),n.fillStyle=c(3752010,.3),n.beginPath(),n.moveTo(p-2,g+10),n.lineTo(p+25,g-4),n.lineTo(p+52,g+10),n.closePath(),n.fill(),_(n,p+34,g-12,8,14,c(8014398,.3)),_(n,p+35,g-15,2,3,c(10117700,.3)),_(n,p+39,g-15,2,3,c(10117700,.3)),p/50%3===0)for(let m=0;m<16;m++)_(n,p+37+Math.round(Math.sin(m*.7)*2)+m*.6,g-17-m*2,3+(m>>2),2,"rgba(214,218,220,0.22)");let b=n.createLinearGradient(0,a(4.6),0,a(3.2));b.addColorStop(0,ht(r,0)),b.addColorStop(1,ht(r,.55)),n.fillStyle=b,n.fillRect(0,a(4.6),t,e),hn(n,0,0,t,e,3,66)}function Gc(n,t,e,i){let s=ae(i);ei(n,0,0,t,e,ad,s),ti(n,0,0,t,e,s,.2,.6,7);for(let r=0;r<14;r++){let a=s.int(t),o=e-1-s.int(10);_(n,a,o,2+s.int(3),1,A(s.pick([5662778,4741167])))}i%2&&(xe(n,"NO BALL",30,e-33,"rgba(236,232,220,0.8)",2),xe(n,"GAMES",38,e-20,"rgba(236,232,220,0.8)",2)),hn(n,0,0,t,e,5,i)}function Td(n,t,e){let i=ae(808);ei(n,0,0,t,e,fs,i),_(n,0,0,t,7,A(8159108)),_(n,0,7,t,1,"rgba(10,10,12,0.5)");let s=[4876938,9058864,7309930],r=Math.floor((t-16)/3);for(let a=0;a<3;a++){let o=8+a*r+3,l=It(s[a]);_(n,o-1,13,r-4,e-13,A(1710620));for(let c=14;c<e-1;c+=4)_(n,o,c,r-6,3,ht(vt(l,.9+i()*.12))),_(n,o,c,r-6,1,ht(vt(l,1.2)));_(n,o+r/2-5,e-26,4,2,A(13684944));for(let c=0;c<30;c++)_(n,o+i.int(r-6),e-1-i.int(16),1+i.int(2),1+i.int(2),A(i.pick([8014378,5913122])));xe(n,String(a+1),o+r/2-2,19,"rgba(240,240,230,0.85)",2)}ti(n,0,0,t,e,i,.2,.5,6),hn(n,0,0,t,e,5,8)}function Ed(n,t,e,i){let s=ae(i),r=o=>Math.round(e-o*vi),a=o=>Math.round(o*vi);ei(n,0,0,t,e,i%2?ds:_i,s),ti(n,0,0,t,e,s,.34,.5,9),js(n,a(.9),r(4.7),a(1),a(1.3),i,i%2===0),js(n,a(3.8),r(4.7),a(1),a(1.3),i+3,!1),_(n,a(.7)-1,r(2.2)-1,a(1.6)+2,a(1.1)+2,A(15130572)),Dn(n,a(.7)+1,r(2.2)+1,a(1.6)-2,a(1.1)-2,i+9,{heads:1}),_(n,a(1.5),r(2.2),1,a(1.1),A(15130572)),_(n,a(.7)-2,r(2.2)+a(1.1)+1,a(1.6)+4,2,A(13616812)),_(n,a(3.6)-1,r(2.1)-1,a(.9)+2,r(0)-r(2.1)+1,A(15130572)),In(n,a(3.6),r(2.1),a(.9),r(0)-r(2.1),It(i%2?3100538:8007466)),_(n,a(3.6)+4,r(2.1)+4,a(.9)-8,14,A(2765888)),_(n,a(5.4),0,2,e,A(2434602)),_(n,a(5.4)-1,0,1,e,"rgba(0,0,0,0.25)"),_(n,a(2.7),r(3.9),8,8,A(13225168)),_(n,a(2.7)+2,r(3.9)+2,4,4,A(10133670)),hn(n,0,0,t,e,5,i)}var yi=14837276;function Ad(n,t,e){let i=It(yi);_(n,0,0,t,e,ht(i)),_(n,0,0,t,2,ht(vt(i,1.3))),n.strokeStyle=ht(vt(i,.62)),n.lineWidth=1,n.strokeRect(12.5,5.5,t-22,e-13),_(n,15,8,t-27,20,A(1448222)),_(n,16,9,t-29,18,A(3753555)),n.fillStyle="rgba(170,190,205,0.5)",n.beginPath(),n.moveTo(16,27),n.lineTo(32,9),n.lineTo(42,9),n.lineTo(26,27),n.closePath(),n.fill(),_(n,22,17,7,10,A(2106410)),_(n,0,31,t,4,A(15921126)),_(n,0,35,t,1,ht(vt(i,.7))),xe(n,"HOLT'S",16,39,A(15921126)),xe(n,"ALES",16,46,A(15921126)),_(n,t-14,30,4,2,A(2763308)),_(n,0,e-8,t,8,ht(vt(i,.72)));let s=n.createLinearGradient(0,e-26,0,e);s.addColorStop(0,"rgba(40,30,20,0)"),s.addColorStop(1,"rgba(40,30,20,0.5)"),n.fillStyle=s,n.fillRect(0,e-26,t,26);let r=ae(5);for(let a=0;a<60;a++)_(n,r.int(t),e-1-r.int(20),1,1,"rgba(60,44,30,0.5)")}function wd(n,t,e){let i=It(yi),s=Math.round(e*.55);_(n,0,0,t,e,ht(i)),_(n,3,4,t-6,s-7,A(1448222)),_(n,4,5,t-8,s-9,A(3885399)),n.fillStyle="rgba(175,195,210,0.5)",n.beginPath(),n.moveTo(4,s-4),n.lineTo(26,5),n.lineTo(40,5),n.lineTo(18,s-4),n.closePath(),n.fill(),_(n,t/2,5,1,s-9,A(1448222)),n.strokeStyle=A(1448222),n.beginPath(),n.moveTo(14,s-5),n.lineTo(30,s-14),n.moveTo(t-14,s-5),n.lineTo(t-30,s-14),n.stroke(),_(n,10,s+3,t-20,13,A(1842206));for(let r=s+4;r<s+15;r+=3)_(n,11,r,t-22,1,A(4869200));xe(n,"HOLT",t/2,s+6,A(14342874),1,"center");for(let r of[3,t-9])_(n,r,s+5,6,6,A(16183504)),_(n,r,s+12,6,3,A(15769632));_(n,0,e-9,t,9,A(2763566)),_(n,t/2-11,e-8,22,6,A(15913502)),xe(n,"D4 AYS",t/2,e-7,A(1315860),1,"center")}function Rd(n,t,e){let i=It(yi);_(n,0,0,t,e,ht(vt(i,.95)));for(let r=0;r<t;r+=86)_(n,r,0,3,e,ht(vt(i,.6))),_(n,r+3,0,1,e,ht(vt(i,1.25)));_(n,0,0,t,2,ht(vt(i,1.3))),_(n,0,e-2,t,2,ht(vt(i,.6))),nn(n,"HOLT & SON \xB7 FINE ALES",t/2,e/2+7,13,A(16446692),{font:Wi.serif,weight:700,align:"center",maxW:t-20,shadow:"rgba(90,30,0,0.8)"});let s=ae(3);for(let r=0;r<90;r++)_(n,s.int(t),e-1-s.int(8),2,1,"rgba(60,40,24,0.45)")}function Cd(n,t,e){n.clearRect(0,0,t,e);let i=t/2,s=e/2,r=t/2;for(let a=0;a<e;a++)for(let o=0;o<t;o++){let l=Math.hypot(o+.5-i,a+.5-s);l>r||_(n,o,a,1,1,l>r-1?A(1052690):l>r*.55?A(2303016):l>r*.45?A(9146518):l>r*.18?A(12172996):A(4869458))}_(n,i-r*.6,2,r*1.2,1,A(3816514))}function Pd(n,t,e){let i=ae(21);_(n,0,0,t,e,A(7035464));for(let s=0;s<e;s+=6)_(n,0,s,t,5,ht(vt(It(7692878),.9+i()*.2))),_(n,0,s+5,t,1,A(3813416));for(let s=0;s<60;s++)_(n,i.int(t),i.int(e),2+i.int(8),1,"rgba(30,24,20,0.35)");for(let s=0;s<5;s++)n.fillStyle="rgba(24,20,18,0.35)",n.beginPath(),n.ellipse(i.int(t),i.int(e),5+i.int(8),3+i.int(5),0,0,7),n.fill()}function Id(n,t,e){let i=It(yi),s=ae(31);_(n,0,0,t,e,ht(vt(i,1.04))),n.strokeStyle=ht(vt(i,.7)),n.strokeRect(2.5,2.5,t-5,e-5);for(let r=8;r<t-6;r+=9)_(n,r,5,1,e-10,ht(vt(i,.86)));for(let r=0;r<50;r++)_(n,s.int(t),s.int(e),1+s.int(2),1,"rgba(60,40,30,0.3)");_(n,6,6,9,5,"rgba(240,240,236,0.8)")}function Ld(n,t,e){for(let s=0;s<t;s++){let r=s/t,a=.78+.3*Math.max(0,Math.cos((r-.3)*Math.PI*2))**2-.12*Math.max(0,Math.cos((r-.8)*Math.PI*2));_(n,s,0,1,e,ht(vt(It(11120566),a)))}for(let s of[0,e-3])_(n,0,s,t,3,"rgba(40,44,50,0.55)"),_(n,0,s+(s?0:2),t,1,"rgba(230,236,242,0.6)");for(let s of[Math.round(e*.34),Math.round(e*.62)])_(n,0,s,t,1,"rgba(236,240,244,0.75)"),_(n,0,s+1,t,1,"rgba(50,54,60,0.6)");_(n,0,Math.round(e*.44),t,3,A(12728874));let i=ae(8);for(let s=0;s<30;s++)_(n,i.int(t),i.int(e),1,1+i.int(2),"rgba(60,64,70,0.4)")}function Dd(n,t,e){_(n,0,0,t,e,A(8159882)),n.fillStyle=A(13028562),n.beginPath(),n.arc(t/2,e/2,t/2,0,7),n.fill(),n.fillStyle=A(8883605),n.beginPath(),n.arc(t/2,e/2,t/2-2,0,7),n.fill(),n.fillStyle=A(10199465),n.beginPath(),n.arc(t/2-1,e/2-1,t/2-4,0,7),n.fill(),_(n,t/2-1,e/2-1,3,3,A(3816770)),_(n,t/2-1,e/2-1,1,1,A(14212320))}function Nd(n,t,e){let i=It(11871260);_(n,0,0,t,e,ht(i)),_(n,0,0,2,e,ht(vt(i,1.25))),_(n,t-2,0,2,e,ht(vt(i,.65))),_(n,3,3,t-6,8,A(16051928)),xe(n,"PHONE",t/2,5,A(1710618),1,"center");let s=3,r=7,a=5,o=14,l=t-10,c=e-14-14,d=l/s,u=c/r;_(n,a-1,o-1,l+2,c+2,ht(vt(i,.6)));for(let h=0;h<r;h++)for(let g=0;g<s;g++){let b=Math.round(a+g*d),p=Math.round(o+h*u),m=Math.round(a+(g+1)*d)-b-1,M=Math.round(o+(h+1)*u)-p-1;_(n,b,p,m,M,A(h<2?5661023:2896952)),(g+h)%3===0&&_(n,b,p,m,1,"rgba(190,206,214,0.5)")}_(n,a+Math.round(d)+1,o+Math.round(u*2),Math.round(d)-2,Math.round(u*2),A(1447962)),_(n,a+2,o+Math.round(u*3.2),7,9,A(15918830)),_(n,a+3,o+Math.round(u*3.2)+2,5,1,A(13781642)),_(n,0,e-12,t,12,ht(vt(i,.55))),_(n,0,e-12,t,1,ht(vt(i,1.2)));let f=n.createLinearGradient(0,e-30,0,e);f.addColorStop(0,"rgba(20,16,12,0)"),f.addColorStop(1,"rgba(20,16,12,0.45)"),n.fillStyle=f,n.fillRect(0,e-30,t,30)}function sl(n,t,e,i,s){let r=It(i);_(n,0,0,t,e,ht(r)),_(n,0,0,t,5,ht(vt(r,1.2))),_(n,0,5,t,1,ht(vt(r,.5)));for(let o=4;o<t-2;o+=5)_(n,o,9,1,e-16,ht(vt(r,.82)));_(n,0,0,1,e,ht(vt(r,1.3))),_(n,t-1,0,1,e,ht(vt(r,.6))),xe(n,s,t/2,14,"rgba(240,240,232,0.9)",1,"center");let a=n.createLinearGradient(0,e-14,0,e);a.addColorStop(0,"rgba(10,10,8,0)"),a.addColorStop(1,"rgba(10,10,8,0.5)"),n.fillStyle=a,n.fillRect(0,e-14,t,14)}function Hc(n,t,e,i){let s=It(i);_(n,0,0,t,e,ht(vt(s,.55))),In(n,0,0,t,4,s),In(n,0,e-4,t,4,vt(s,.9));for(let r=0;r<t;r+=4)_(n,r,4,2,e-8,ht(vt(s,.95)));_(n,3,1,t-6,2,ht(vt(s,.45)))}function Vc(n,t,e,i){_(n,0,0,t,e,ht(vt(It(i),.5))),n.strokeStyle=A(i),n.strokeRect(.5,.5,t-1,e-1);for(let s=2;s<e-2;s+=3)for(let r=2;r<t-2;r+=3)_(n,r,s,2,2,A(3811864)),_(n,r,s,1,1,A(14268490))}function Ud(n,t,e,i,s=9071176){let r=ae(i),a=It(s);for(let o=0;o<e;o+=5){let l=vt(a,.88+r()*.22);_(n,0,o,t,4,ht(l)),_(n,0,o+4,t,1,ht(vt(a,.5)));for(let c=0;c<t/10;c++)_(n,r.int(t),o+1+r.int(3),3+r.int(6),1,ht(vt(l,.82)))}for(let o=0;o<3;o++){let l=4+r.int(Math.max(1,t-8)),c=2+r.int(Math.max(1,e-5));n.strokeStyle="rgba(40,28,18,0.45)",n.beginPath(),n.arc(l,c,2.5,0,7),n.stroke()}}function Wc(n,t,e,i){let s=ae(i);n.clearRect(0,0,t,e);for(let r=0;r<150;r++){let a=s()*Math.PI*2,o=Math.sqrt(s()),l=t/2+Math.cos(a)*o*t*.46,c=e*.4+Math.sin(a)*o*e*.36+(s()<.3?s()*e*.3:0);_(n,l,c,2,2,A(s.pick([4155956,3103276,5208634,2574378])))}for(let r=0;r<26;r++){let a=s()*Math.PI*2,o=Math.sqrt(s()),l=t/2+Math.cos(a)*o*t*.42,c=e*.38+Math.sin(a)*o*e*.32,d=s.pick([14698618,15755930,14168618,15918830,9063112,15904798]);_(n,l,c,2,2,A(d)),_(n,l,c,1,1,ht(vt(It(d),1.3)))}}function Fd(n,t,e){n.clearRect(0,0,t,e),_(n,0,0,t,1,A(15262936));let i=4,s=t/i;for(let r=0;r<i;r++){let a=Math.round(r*s)+1,o=Math.round(s)-2;for(let l=0;l<e-1;l++){let c=Math.floor(l/(e-1)*(o/2)),d=o-c*2;if(d<=0)break;_(n,a+c,1+l,d,1,A(15921126)),r%2===0?(_(n,a+Math.floor(o/2)-1,1+l,Math.min(2,d),1,A(13117470)),(l===2||l===3)&&_(n,a+c,1+l,d,1,A(13117470))):_(n,a+c,1+l,d,1,A(13117470))}}}function Od(n,t,e){_(n,0,0,t,e,A(15526108)),_(n,0,Math.round(e/2)-3,t,6,A(12854814)),_(n,Math.round(t/2)-3,0,6,e,A(12854814));for(let s=6;s<t;s+=11)_(n,s,0,1,e,"rgba(60,56,50,0.14)");let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(40,36,30,0.22)"),n.fillStyle=i,n.fillRect(0,0,t,e)}function Bd(n,t,e,i){n.clearRect(0,0,t,e),_(n,4,0,t-8,e,A(15657696)),_(n,0,0,t,7,A(15657696)),_(n,0,6,4,1,A(12104874)),_(n,t-4,6,4,1,A(12104874)),_(n,t/2-3,0,6,2,A(2767482)),xe(n,i,t/2,6,A(12854814),2,"center"),_(n,4,e-1,t-8,1,A(12104874))}function Xc(n,t,e,i){n.clearRect(0,0,t,e);let s=A(11975874),r=A(7238778);_(n,0,2,t,2,s),_(n,0,4,t,1,r),_(n,0,e-9,t,2,s),_(n,0,e-7,t,1,r),_(n,0,2,2,e-2,s),_(n,t-2,2,2,e-2,s);for(let a=6;a<t-4;a+=5)_(n,a,4,1,e-13,s);if(_(n,2,e-2,9,2,r),_(n,t-11,e-2,9,2,r),i){let a=i.length*4+7;_(n,t/2-a/2-1,7,a+2,15,A(1057866)),_(n,t/2-a/2,8,a,13,A(2051744)),xe(n,i,t/2,10,"#ffffff",1,"center");for(let o=0;o<a;o+=4)_(n,t/2-a/2+o,17,2,3,o%8?A(15921906):A(2051744))}}function zd(n,t,e){_(n,0,0,t,e,A(12854814)),n.strokeStyle="#f4f0e6",n.lineWidth=2,n.strokeRect(2,2,t-4,e-4),nn(n,"ROAD",t/2,e*.46,11,"#f8f4ea",{align:"center",maxW:t-10}),nn(n,"CLOSED",t/2,e*.88,11,"#f8f4ea",{align:"center",maxW:t-10})}function kd(n,t,e){let i=It(14725660),s=ae(51);_(n,0,0,t,e,ht(i)),_(n,0,0,t,3,ht(vt(i,1.25))),_(n,0,3,t,1,ht(vt(i,.6)));for(let r of[Math.round(t*.25),Math.round(t*.75)])_(n,r,4,2,e,ht(vt(i,.7))),_(n,r+2,4,1,e,ht(vt(i,1.2)));nn(n,"DOYLE SKIPS",t/2,e*.62,9,A(1710618),{align:"center",maxW:t*.44});for(let r=0;r<120;r++)_(n,s.int(t),s.int(e),1+s.int(3),1+s.int(2),ht(s.pick([It(8014378),It(10119738),vt(i,.7)]),.7))}function Gd(n,t,e){let i=ae(61);_(n,0,0,t,e,A(4867648));for(let s=0;s<160;s++){let r=i.pick([9077880,9719869,7038558,12169890,5913130,8156264,9077880,7038558,8018496,i()<.2?2775706:9719869]),a=i.int(t),o=i.int(e),l=2+i.int(7),c=2+i.int(4);_(n,a,o,l,c,A(r)),_(n,a,o,l,1,ht(vt(It(r),1.25)))}_(n,12,6,30,3,A(13222570)),_(n,40,4,3,16,A(13222570))}function Hd(n,t,e){let i=ae(71);for(let s=0;s<t;s+=5)_(n,s,0,4,e,ht(vt(It(6969920),.85+i()*.25))),_(n,s+4,0,1,e,A(3090462));_(n,t*.3,e*.25,t*.4,e*.75,"rgba(30,24,18,0.35)"),n.strokeStyle=A(3090462),n.strokeRect(Math.round(t*.3)+.5,Math.round(e*.25)+.5,Math.round(t*.4),e),_(n,t*.66,e*.55,2,3,A(12096058))}function Vd(n,t,e){for(let s=0;s<t;s++){let r=s/t,a=.7+.45*Math.max(0,Math.cos((r-.3)*Math.PI*2))**2;_(n,s,0,1,e,ht(vt(It(11871260),a)))}_(n,0,0,t,2,"rgba(0,0,0,0.3)"),_(n,0,e-8,t,8,A(1842206));let i=Math.round(t*.3);_(n,i-6,6,12,2,A(1315860)),_(n,i-5,11,10,8,A(15788760));for(let s=0;s<3;s++)_(n,i-4,13+s*2,8,1,A(5263440));_(n,i-2,24,4,4,A(14857802))}var Wd=1,Xd=n=>{Wd=n},Jx=n=>!!n&&n.w!==void 0&&n.r===void 0&&n.c===void 0,rl=new ne,Xi=class{constructor(t,e,i){qt(this,"texW",t);qt(this,"texH",e);qt(this,"fallback",i);qt(this,"pos",[]);qt(this,"nor",[]);qt(this,"uv",[]);qt(this,"col",[]);qt(this,"idx",[]);qt(this,"m",null);qt(this,"nm",new Zt);qt(this,"v",new W)}at(t,e,i,s=0){return this.m=new fe().makeRotationY(s).setPosition(t,e,i),this.nm.getNormalMatrix(this.m),this}xf(t){return this.m=t.clone(),this.nm.getNormalMatrix(this.m),this}end(){return this.m=null,this}face(t){return t?Jx(t)?{r:t}:t:{r:this.fallback}}tp(t){return this.v.set(t[0],t[1],t[2]),this.m&&this.v.applyMatrix4(this.m),[this.v.x,this.v.y*Wd,this.v.z]}vert(t,e,i,s,r,a=1){this.pos.push(t[0],t[1],t[2]),this.nor.push(e.x,e.y,e.z),this.uv.push(i,s),rl.setHex(r),this.col.push(rl.r,rl.g,rl.b,a)}quad(t,e,i,s,r,a={}){let o=this.face(r),l=o.r??this.fallback,c=this.texW,d=this.texH,[u,f,h,g]=o.uv??[0,0,1,1],b=l.w<=8&&l.h<=8?2:0,p=(l.x+b+(l.w-b*2)*u)/c,m=(l.x+b+(l.w-b*2)*h)/c,M=1-(l.y+b+(l.h-b*2)*f)/d,D=1-(l.y+b+(l.h-b*2)*g)/d;o.flip&&([p,m]=[m,p]),t=this.tp(t),e=this.tp(e),i=this.tp(i),s=this.tp(s);let T=new W;a.normal?T.set(a.normal[0],a.normal[1],a.normal[2]):T.crossVectors(new W(e[0]-t[0],e[1]-t[1],e[2]-t[2]),new W(s[0]-t[0],s[1]-t[1],s[2]-t[2])),T.normalize();let L=o.c??16777215,P=o.c2??L,x=this.pos.length/3,E=a.alpha??1;return this.vert(t,T,p,D,L,E),this.vert(e,T,m,D,L,E),this.vert(i,T,m,M,P,E),this.vert(s,T,p,M,P,E),this.idx.push(x,x+1,x+2,x,x+2,x+3),a.double&&this.idx.push(x,x+2,x+1,x,x+3,x+2),this}tri(t,e,i,s,r){let a=this.face(s),o=a.r??this.fallback,l=this.texW,c=this.texH;t=this.tp(t),e=this.tp(e),i=this.tp(i);let d=new W().crossVectors(new W(e[0]-t[0],e[1]-t[1],e[2]-t[2]),new W(i[0]-t[0],i[1]-t[1],i[2]-t[2]));d.normalize();let u=this.pos.length/3,f=a.c??16777215;return[t,e,i].forEach((h,g)=>this.vert(h,d,(o.x+o.w*r[g][0])/l,1-(o.y+o.h*r[g][1])/c,f)),this.idx.push(u,u+1,u+2),this}box(t,e,i,s,r,a,o={}){let l=typeof o=="object"&&o!==null&&["all","s","e","n","w","top","bot","sides"].some(u=>u in o),c=typeof o=="number"?{all:{c:o}}:l?o:Object.keys(o).length?{all:o}:{},d=c.sides??c.all;return this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],c.s??d),this.quad([s,e,a],[s,e,i],[s,r,i],[s,r,a],c.e??d),this.quad([s,e,i],[t,e,i],[t,r,i],[s,r,i],c.n??d),this.quad([t,e,i],[t,e,a],[t,r,a],[t,r,i],c.w??d),this.quad([t,r,a],[s,r,a],[s,r,i],[t,r,i],c.top??c.all),c.bot&&this.quad([t,e,i],[s,e,i],[s,e,a],[t,e,a],c.bot),this}cyl(t,e,i,s,r,a,o,l,c=r){let d=this.face(o);for(let u=0;u<a;u++){let f=u/a*Math.PI*2,h=(u+1)/a*Math.PI*2,g=(D,T,L)=>[t+Math.sin(D)*T,L,s+Math.cos(D)*T],[b,p,m,M]=d.uv??[0,0,1,1];this.quad(g(f,r,e),g(h,r,e),g(h,c,i),g(f,c,i),{...d,uv:[b+(m-b)*u/a,p,b+(m-b)*(u+1)/a,M]})}if(l){let u=this.face(l),f=u.r??this.fallback;for(let h=0;h<a;h++){let g=h/a*Math.PI*2,b=(h+1)/a*Math.PI*2,p=m=>f.w<=8?[.5,.5]:[.5+Math.sin(m)*.5,.5+Math.cos(m)*.5];this.tri([t,i,s],[t+Math.sin(g)*c,i,s+Math.cos(g)*c],[t+Math.sin(b)*c,i,s+Math.cos(b)*c],u,[[.5,.5],p(g),p(b)])}}return this}bar(t,e,i,s){let r=new W(e[0]-t[0],e[1]-t[1],e[2]-t[2]),a=r.length(),o=new fe().lookAt(new W,r,Math.abs(r.y)>.95*a?new W(1,0,0):new W(0,1,0));o.setPosition((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2);let l=this.m,c=this.nm.clone();return this.m=l?l.clone().multiply(o):o,this.nm.getNormalMatrix(this.m),this.box(-i/2,-i/2,-a/2,i/2,i/2,a/2,{all:s,bot:s}),this.m=l,this.nm.copy(c),this}geometry(){let t=new En;return t.setAttribute("position",new Oe(this.pos,3)),t.setAttribute("normal",new Oe(this.nor,3)),t.setAttribute("uv",new Oe(this.uv,2)),t.setAttribute("color",new Oe(this.col,4)),t.setIndex(this.idx),t.computeBoundingSphere(),t.computeBoundingBox(),t}get tris(){return this.idx.length/3}};var al=Math.tan(30*Math.PI/180),be={x0:-8.5,x1:-1.5,z0:-5,z1:0,eaves:6.3,ridge:6.3+2.5*al},Qt={x0:-8.5,x1:5.5,z0:0,z1:13.5},Xt={zNear:-6.2,zFar:-10.8,zShops:-12.3,zBack:-17},on=.12,ie=-24,Ce=22,ps=-18,ii=29,Y=n=>Math.round(n*32);function qd(n){Xd(Pn);let t=ae(20261127),e=new jo(2048),i=e.solid(16777215),s=new Xi(e.size,e.size,i),r=new Xi(e.size,e.size,i),a=new Xi(64,64,{x:0,y:0,w:64,h:64}),o=[],l=[],c=[],d=(Ce-ie)*32,u=(ii-ps)*32,[f,h]=Vi(d,u);h.translate(-ie*32,-ps*32);let g=new Xi(d,u,{x:0,y:0,w:4,h:4}),b=(R,N,F,H)=>({x:Y(R-ie),y:Y(N-ps),w:Y(F-R),h:Y(H-N)}),p=Y(Ce-ie);Bc(h,Y(ie),Y(ps),d,u,t,3750720),Bc(h,Y(ie),Y(Xt.zFar),p,Y(Xt.zNear-Xt.zFar),t,4408909);{for(let R of[-7.4,-9.6]){let N=h.createLinearGradient(0,Y(R-.5),0,Y(R+.5));N.addColorStop(0,"rgba(20,22,26,0)"),N.addColorStop(.5,"rgba(20,22,26,0.22)"),N.addColorStop(1,"rgba(20,22,26,0)"),h.fillStyle=N,h.fillRect(Y(ie),Y(R-.5),p,Y(1))}for(let R of[Xt.zNear-.42,Xt.zNear-.24,Xt.zFar+.16,Xt.zFar+.34])for(let N=Y(ie);N<Y(Ce);N+=3)t()>.13&&_(h,N,Y(R),3,3,t()<.8?A(13083180):A(11110956));for(let R=ie+1;R<Ce;R+=5)for(let N=Y(R);N<Y(R+2);N+=2)t()>.2&&_(h,N,Y(-8.5),2,3,t()<.7?A(13619404):A(11119270))}tl(h,Y(ie),Y(Xt.zBack),p,Y(Xt.zFar-Xt.zBack),t),tl(h,Y(ie),Y(Xt.zNear),Y(be.x1-ie),Y(be.z0-Xt.zNear),t),tl(h,Y(Qt.x1),Y(Xt.zNear),Y(Ce-Qt.x1),Y(be.z0-Xt.zNear),t);let m=(R,N,F)=>{for(let H=Y(R);H<Y(N);H+=29){let $=vt(It(11118238),.92+t()*.14);_(h,H,Y(F),28,5,ht($)),_(h,H,Y(F),28,1,ht(vt($,1.14))),_(h,H+28,Y(F),1,5,A(5526094))}};m(ie,Ce,Xt.zFar-.15),m(ie,be.x1,Xt.zNear),m(Qt.x1,Ce,Xt.zNear);let M=[8807770,8018768,9531487,7098696,10123880,7694948,8413260].map(It);Oc(h,Y(Qt.x0),Y(Qt.z0),Y(Qt.x1-Qt.x0),Y(Qt.z1-Qt.z0),M,It(4996408),t),Oc(h,Y(be.x1),Y(Xt.zNear),Y(Qt.x1-be.x1),Y(-Xt.zNear),M,It(4996408),t);for(let R=Y(be.x1);R<Y(Qt.x1);R+=4)_(h,R,Y(Xt.zNear),3,7,ht(vt(It(6244416),.9+t()*.2))),_(h,R+3,Y(Xt.zNear),1,7,A(3812906));for(let R=Y(Qt.x0+.5);R<Y(Qt.x1-.4);R+=8)_(h,R,Y(1.25),7,4,ht(vt(It(6051154),.9+t()*.2))),_(h,R,Y(1.25)+1,7,1,"rgba(20,20,24,0.4)");h.save(),h.lineCap="round",h.strokeStyle="rgba(205,190,170,0.07)",h.lineWidth=60,h.beginPath(),h.moveTo(Y(2),Y(-6)),h.bezierCurveTo(Y(1.5),Y(0),Y(-2),Y(2.5),Y(-5.2),Y(1.2)),h.stroke(),h.lineWidth=34,h.stroke(),h.strokeStyle="rgba(18,16,16,0.12)",h.lineWidth=26,h.beginPath(),h.moveTo(Y(3.6),Y(-6)),h.bezierCurveTo(Y(3.6),Y(4),Y(3),Y(8.6),Y(-3),Y(8.8)),h.stroke(),h.restore();{let R=Y(ie),N=Y(-.3),F=Y(Qt.x0-.28-ie),H=Y(Qt.z1+.3+.3);_(h,R,N,F,H,A(5072187));for(let $=0;$<F*H/7;$++)_(h,R+t.int(F),N+t.int(H),1,1+t.int(2),A(t.pick([5928516,4348468,6586442,4874808,7039552])));for(let $=0;$<14;$++)h.fillStyle=`rgba(${t()<.5?"104,88,60":"60,84,48"},0.5)`,h.beginPath(),h.ellipse(R+t.int(F),N+t.int(H),10+t.int(30),6+t.int(14),0,0,7),h.fill();for(let $ of[-11.4,-17.4])for(let tt=.1;tt<12.5;tt+=.72){let S=vt(It(9276034),.9+t()*.16);_(h,Y($)+t.int(3)-1,Y(tt),20,20,ht(S)),_(h,Y($),Y(tt),20,1,ht(vt(S,1.12)))}_(h,Y(-14.6),N,4,H,A(3812900))}{let R=Y(Qt.x1+.28),N=Y(1.5),F=Y(Ce-Qt.x1),H=Y(Qt.z1+.3-1.5);_(h,R,N,F,H,A(8092018));for(let $=R;$<R+F;$+=96)_(h,$,N,1,H,A(4999750));for(let $=N;$<N+H;$+=96)_(h,R,$,F,1,A(4999750));for(let $=0;$<9;$++){let tt=R+t.int(F),S=N+t.int(H);for(let At=0;At<40+t.int(60);At++)_(h,tt,S,1,1,A(4539199)),tt+=t.int(3)-1,S+=t()<.7?1:0,t()<.08&&_(h,tt,S,2,2,A(t.pick([5928516,4874808])))}for(let $=0;$<8;$++)h.fillStyle="rgba(30,28,30,0.28)",h.beginPath(),h.ellipse(R+t.int(F),N+t.int(H),8+t.int(18),5+t.int(10),t(),0,7),h.fill()}{let R=Y(Qt.z1+.28),N=Y(3.6);_(h,Y(ie),R,p,N,A(3947322));let F=[7828332,7039074,8551796,6184024,7628894].map(It);for(let tt=0;tt*5<N;tt++)for(let S=Y(ie)-(tt&1?3:0);S<Y(Ce);S+=6){let At=vt(t.pick(F),.9+t()*.2);_(h,S,R+tt*5,5,4,ht(At)),t()<.3&&_(h,S,R+tt*5,3,1,ht(vt(At,1.2)))}let H=Y(Qt.z1+.28+3.6),$=Y(ii)-H;_(h,Y(ie),H,p,$,A(4933957));for(let tt=0;tt<p*$/14;tt++)_(h,Y(ie)+t.int(p),H+t.int($),1+t.int(2),1,A(t.pick([6052436,3947064,6973022,4539199])));for(let tt=ie+1.5;tt<Ce;tt+=2.6)for(let S=Y(19);S<Y(23.5);S+=2)t()>.25&&_(h,Y(tt),S,3,2,"rgba(206,206,198,0.75)");for(let tt=0;tt<14;tt++)Ln(h,Y(ie)+t.int(p),H+20+t.int($-40),14+t.int(34),6+t.int(12),t);_(h,Y(ie),H,p,3,A(9276034))}let D=(R,N,F,H,$=12,tt=.55)=>{h.save(),h.shadowColor=`rgba(10,10,16,${tt})`,h.shadowBlur=$,h.shadowOffsetX=5e3,h.shadowOffsetY=0,h.fillStyle="#000",h.fillRect(Y(R)-5e3,Y(N),Y(F)-Y(R),Y(H)-Y(N)),h.restore()},T=(R,N,F,H,$,tt)=>{let S=Y(H),At=It($);for(let gt=0;gt<S;gt++){let St=gt/S;if(t()<.18+St*.5)continue;let ft=Math.round(St*Y(F)*.25)+t.int(3);_(h,Y(R)+Math.round(gt*.305)+ft,Y(N)+gt,Math.max(1,Y(F)-ft*2-t.int(4)),1,ht(At,tt*(1-St)**1.4))}},L=(R,N,F,H,$,tt={})=>{o.push({x0:R,z0:N,x1:F,z1:H,h:$}),(tt.shade??$>1.6)&&l.push({x0:R,z0:N,x1:F,z1:H,h:$}),(tt.ao??!0)&&(D(R,N,F,H,Math.min(18,6+$*3),.5),D(R,N,F,H,4,.5))},P=(R,N,F,H,$=1)=>{let tt=N/2,S=yn,At=xi,gt=(St,ft)=>[R[0]+S.x*St*tt+At.x*ft*tt*$,R[1]+At.y*ft*tt*$/Pn,R[2]+S.z*St*tt+At.z*ft*tt*$];a.quad(gt(-1,-1),gt(1,-1),gt(1,1),gt(-1,1),{c:F},{alpha:H})},x=(R,N,F,H,$,tt,S=.03)=>a.quad([R-F,S,N+H],[R+F,S,N+H],[R+F,S,N-H],[R-F,S,N-H],{c:$},{alpha:tt}),E=e.paintM(2,2,(R,N,F)=>{ei(R,0,0,N,F,_i,ae(3)),ti(R,0,0,N,F,ae(4),.25,.1,3)}),Z=e.paintM(2,2,(R,N,F)=>{ei(R,0,0,N,F,fs,ae(5))}),O=e.paint(32,8,(R,N,F)=>{_(R,0,0,N,F,A(12170146)),hn(R,0,0,N,F,8,2),_(R,0,0,N,1,A(13946556)),_(R,0,F-1,N,1,A(8157034))}),G=e.paint(32,32,(R,N,F)=>{_(R,0,0,N,F,A(4869200)),hn(R,0,0,N,F,9,5)}),j=e.paint(58,24,(R,N,F)=>Ud(R,N,F,14)),I=(R,N)=>({c:R,c2:N});{let{x0:R,x1:N,z0:F,z1:H,eaves:$,ridge:tt}=be,S=(F+H)/2,At=e.paintM(7,$,dd),gt=e.paintM(5,tt,pd),St=e.paintM(7.6,3.6,(B,ot,C)=>zc(B,ot,C,5)),ft=1-$/tt;s.quad([R,0,H],[N,0,H],[N,$,H],[R,$,H],At),s.quad([N,0,H],[N,0,F],[N,$,F],[N,$,H],{r:gt,uv:[0,ft,1,1]}),s.tri([N,$,H],[N,$,F],[N,tt,S],gt,[[0,ft],[1,ft],[.5,0]]),s.quad([N,0,F],[R,0,F],[R,$,F],[N,$,F],{r:E,c:11579568}),s.quad([R,0,F],[R,0,H],[R,$,H],[R,$,F],{r:E,c:11579568}),s.tri([R,$,F],[R,$,H],[R,tt,S],{r:E},[[0,1],[1,1],[.5,0]]);let Dt=.35,Mt=$-Dt*al,Lt=.28;s.quad([R-Lt,Mt,H+Dt],[N+Lt,Mt,H+Dt],[N+Lt,tt,S],[R-Lt,tt,S],St),s.quad([N+Lt,Mt,F-Dt],[R-Lt,Mt,F-Dt],[R-Lt,tt,S],[N+Lt,tt,S],St),s.box(R-Lt,Mt-.16,H+Dt-.12,N+Lt,Mt+.03,H+Dt+.06,I(1776672)),s.bar([N+Lt,Mt-.02,H+Dt],[N+Lt,tt-.04,S],.14,I(13617330)),s.bar([N+Lt,tt-.04,S],[N+Lt,Mt-.02,F-Dt],.14,I(12433056)),s.bar([R-Lt,tt+.04,S],[N+Lt,tt+.04,S],.2,I(3422788));{let B=(V,K,ct=.05)=>[V,Mt+(tt-Mt)*K+ct,H+Dt+(S-H-Dt)*K+ct*.6],ot=e.paint(34,30,(V,K,ct)=>{_(V,0,0,K,ct,A(2303531)),Dn(V,3,3,K-6,ct-6,3),_(V,K/2-1,3,2,ct-6,A(2303531)),_(V,3,3,K-6,1,A(16773312))});r.quad(B(R+2.3,.3),B(R+3.4,.3),B(R+3.4,.62),B(R+2.3,.62),ot);let C=e.paint(9,7,V=>{V.clearRect(0,0,9,7),_(V,1,2,6,3,A(9080730)),_(V,5,0,3,3,A(7304320)),_(V,8,1,1,1,A(14721088)),_(V,0,3,2,1,A(5922408)),_(V,2,3,3,1,A(12173e3)),_(V,3,5,1,2,A(13134426)),_(V,5,5,1,2,A(13134426)),_(V,6,2,1,1,A(4885098))},!1);for(let[V,K]of[[R+2,!1],[R+2.5,!0],[R+4.6,!1]])s.quad([V,tt+.12,S+.05],[V+.3,tt+.12,S+.05],[V+.3,tt+.34,S+.05],[V,tt+.34,S+.05],{r:C,flip:K},{normal:[0,1,.3],double:!0})}for(let B of[N-1.3,R+.5]){s.box(B,tt-.9,S-.5,B+.8,tt+1,S+.5,{all:{r:E,uv:[0,0,.4,.95]},top:O}),s.box(B-.07,tt+1,S-.57,B+.87,tt+1.1,S+.57,O);for(let ot of[-.25,.25])s.cyl(B+.4,tt+1.1,tt+1.55,S+ot,.15,6,I(10114358,12085828),I(2759702),.12)}s.bar([N-.7,tt+1.1,S],[N-.7,tt+2.5,S],.05,I(3816770));for(let[B,ot]of[[2.4,.5],[2.15,.38],[1.9,.5]])s.bar([N-.7-ot,tt+B,S],[N-.7+ot,tt+B,S],.04,I(3816770));let w=e.paint(424,42,fd);s.box(R+.1,2.55,H,N-.1,3.25,H+.12,{all:I(el),s:w,top:I(2779722)}),s.box(R-.06,3.25,H,N+.06,3.43,H+.24,{all:I(1722931,2517066),top:I(3833952)}),s.box(R-.02,3.2,H,N+.02,3.26,H+.18,I(ni));for(let[B,ot]of[[0,.3],[2.3,2.6],[3.7,4],[6.7,7]])s.box(R+B,0,H,R+ot,2.55,H+.08,{all:I(1526322,2253380),e:I(1060895,1590575)});s.box(R+2.5,0,H,R+3.8,.1,H+.42,O);for(let B of[1.25,3.5,5.75])s.box(R+B-.62,3.97,H,R+B+.62,4.05,H+.12,O);let v=e.paintM(2,1.7,(B,ot,C)=>nl(B,ot,C,0)),X=e.paintM(2.7,1.7,(B,ot,C)=>nl(B,ot,C,1)),dt=e.paintM(1.1,2.45,(B,ot,C)=>nl(B,ot,C,2)),it=(B,ot,C,V,K)=>r.quad([R+B,C,H+.015],[R+ot,C,H+.015],[R+ot,V,H+.015],[R+B,V,H+.015],K);it(.3,2.3,.75,2.45,v),it(4,6.7,.75,2.45,X),it(2.6,3.7,.1,2.5,dt);let k=e.paint(32,48,(B,ot,C)=>{_(B,0,0,ot,C,A(15130572)),Dn(B,2,2,ot-4,C-4,4),_(B,2,2,6,C-4,A(10107434)),_(B,ot-8,2,6,C-4,A(10107434)),_(B,2,C/2-1,ot-4,2,A(15130572)),_(B,ot/2,2,1,C-4,A(13814454)),_(B,12,26,8,C,A(4860442)),_(B,13,21,6,6,A(4860442))});it(.75,1.75,4.05,5.55,k);for(let[B,ot]of[[1.3,2],[5.35,2.7],[3.15,1]])P([R+B,1.5,H+.3],ot*1.9,tr,.2),x(R+B+.25,H+1.3,ot*.75,1.5,tr,.2),T(R+B-ot/2+.1,H+.12,ot-.2,2.8,16764794,.46);P([R+1.25,4.8,H+.3],1.9,tr,.2);for(let B of[2.45,3.85])s.box(R+B-.09,2.08,H+.08,R+B+.09,2.14,H+.3,I(1381914)),s.box(R+B-.11,2.42,H+.08,R+B+.11,2.48,H+.32,I(1381914)),r.box(R+B-.07,2.14,H+.11,R+B+.07,2.42,H+.27,I(16769696)),P([R+B,2.28,H+.35],1.3,16760928,.5);let rt=[e.paint(22,20,(B,ot,C)=>Wc(B,ot,C,1),!1),e.paint(22,20,(B,ot,C)=>Wc(B,ot,C,2),!1)];[.15,2.45,3.85,6.85].forEach((B,ot)=>{let C=R+B,V=H+.62,K=rt[ot%2];s.bar([C,2.95,H+.12],[C,2.95,V+.05],.05,I(1381914)),s.bar([C,2.95,V],[C,2.62,V],.03,I(1381914)),s.cyl(C,2.3,2.56,V,.14,6,I(3811868,5914664),void 0,.26),s.quad([C-.36,2.2,V],[C+.36,2.2,V],[C+.36,2.88,V],[C-.36,2.88,V],K,{normal:[0,1,.3],double:!0}),s.quad([C,2.2,V+.36],[C,2.2,V-.36],[C,2.88,V-.36],[C,2.88,V+.36],K,{normal:[0,1,.3],double:!0}),s.quad([C-.3,2.6,V+.3],[C+.3,2.6,V+.3],[C+.3,2.6,V-.3],[C-.3,2.6,V-.3],{r:K,uv:[.1,.05,.9,.75]})});let q=e.paint(40,30,Od);s.quad([R+5.1,3.5,H+.26],[R+6.4,3.5,H+.26],[R+6.4,4.5,H+.13],[R+5.1,4.5,H+.13],q,{double:!0}),s.bar([N-.22,0,H+.07],[N-.22,Mt,H+.07],.1,I(1776672)),s.bar([N-.75,0,H+.14],[N-.75,1.05,H+.14],.07,I(9409948)),s.box(N-.83,.92,H+.1,N-.67,1.02,H+.3,I(13214266)),s.box(N-.78,1.02,H+.16,N-.72,1.1,H+.22,I(13117470));{let B=[];for(let ct=0;ct<=14;ct++){let pt=-Math.PI/2+ct/14*Math.PI*2.2,_t=.22;B.push([N-.75+Math.cos(pt)*_t,.04+(ct<3?(3-ct)*.28:0),H+.5+Math.sin(pt)*_t])}let ot=B[B.length-1][0],C=B[B.length-1][2];for(let ct=1;ct<=16;ct++){let pt=ct/16;B.push([ot+pt*2.4,.05,C+Math.sin(pt*5)*.28+pt*.9])}for(let ct=0;ct<B.length-1;ct++)s.bar(B[ct],B[ct+1],.07,I(ct%5===4?2783798:3510080));let V=Y(N+.55),K=Y(1.05);h.fillStyle="rgba(20,18,20,0.4)",h.beginPath(),h.ellipse(V+8,K+10,44,24,.2,0,7),h.fill(),_(h,V-1,K-1,18,18,A(1710620)),_(h,V,K,16,16,A(4869200));for(let ct=2;ct<15;ct+=3)_(h,V+2,K+ct,12,1,A(1184276));_(h,V,K,16,1,A(7632764)),Ln(h,Y(N+1.7),Y(1.9),22,9,t)}{let B=[N-.02,7.75,S],ot=[N+1.95,0,S];for(let C of[-.24,.24])s.bar([ot[0],0,ot[2]+C],[B[0],B[1],B[2]+C],.07,I(11120566,13686234));for(let C=1;C<26;C++){let V=C/26.5;s.bar([ot[0]+(B[0]-ot[0])*V,B[1]*V,S-.24],[ot[0]+(B[0]-ot[0])*V,B[1]*V,S+.24],.045,I(12831183))}o.push({x0:N+.9,z0:S-.3,x1:N+2.05,z1:S+.3,h:2}),D(N+1.8,S-.3,N+2.05,S+.3,5,.6)}L(R,F,N,H,$+1),D(R,H,N,H+.5,14,.4)}let U=[-3.75,4.55,14.55];{let[R,,N]=U;s.box(R-.08,0,N-.08,R+.08,4.55,N+.08,I(1184534,1842466)),s.box(R-.16,0,N-.16,R+.16,.35,N+.16,I(1710878)),s.cyl(R,4.55,4.75,N,.1,6,I(ni),I(ni),.02),s.bar([R,4.3,N],[R+1.35,4.3,N],.07,I(1184534)),s.bar([R,3.7,N],[R+.6,4.3,N],.05,I(1184534));let F=e.paint(70,90,md);s.box(R+.2,2.8,N-.04,R+1.3,4.2,N+.04,{all:I(1184534),s:F,n:F});for(let $ of[.35,1.15])s.bar([R+$,4.2,N],[R+$,4.3,N],.03,I(9409948));L(R-.16,N-.16,R+.16,N+.16,4.5,{shade:!1});let H=e.paint(38,60,gd);s.at(-3.9,0,1.25,-.25),s.quad([-.3,0,.26],[.3,0,.26],[.3,.94,.03],[-.3,.94,.03],H),s.quad([.3,0,-.26],[-.3,0,-.26],[-.3,.94,-.03],[.3,.94,-.03],I(4863008)),s.quad([.3,0,.26],[.3,0,-.26],[.3,.94,-.03],[.3,.94,.03],I(4863008)),s.quad([-.3,0,-.26],[-.3,0,.26],[-.3,.94,.03],[-.3,.94,-.03],I(4863008)),s.end(),L(-4.25,.95,-3.55,1.55,.9)}let at=e.paint(40,11,Fd,!1),ut=(R,N,F)=>{let H=Math.hypot(N[0]-R[0],N[1]-R[1],N[2]-R[2]),$=Math.max(2,Math.round(H/1.25)),tt=S=>[R[0]+(N[0]-R[0])*S,R[1]+(N[1]-R[1])*S-Math.sin(S*Math.PI)*F,R[2]+(N[2]-R[2])*S];for(let S=0;S<$;S++){let At=tt(S/$),gt=tt((S+1)/$);s.quad([At[0],At[1]-.34,At[2]],[gt[0],gt[1]-.34,gt[2]],gt,At,at,{normal:[0,1,.2],double:!0})}};{let R=[e.paintM(4,1.9,(tt,S,At)=>Gc(tt,S,At,2)),e.paintM(4,1.9,(tt,S,At)=>Gc(tt,S,At,3))],N={r:O},F=(tt,S,At,gt)=>{for(let St=S,ft=0;St<At-.01;St+=4,ft++){let Dt=Math.min(At,St+4),Mt={r:R[0],uv:[0,1-gt/1.9,(Dt-St)/4,1],flip:ft%2===1};s.box(tt,0,St,tt+.28,gt,Dt,{e:Mt,w:Mt,s:{r:E,uv:[0,0,.14,.9]},n:I(6965824),top:null})}s.box(tt-.04,gt,S,tt+.32,gt+.08,At,N),L(tt,S,tt+.28,At,gt)},H=(tt,S,At,gt,St=-1)=>{for(let ft=S,Dt=0;ft<At-.01;ft+=4,Dt++){let Mt=Math.min(At,ft+4),Lt={r:R[Dt===St?1:0],uv:[0,1-gt/1.9,(Mt-ft)/4,1],flip:Dt%2===1&&Dt!==St};s.box(ft,0,tt,Mt,gt,tt+.28,{s:Lt,n:Lt,e:{r:E,uv:[0,0,.14,.9]},w:I(6965824),top:null})}s.box(S,gt,tt-.04,At,gt+.08,tt+.32,N),L(S,tt,At,tt+.28,gt)};F(Qt.x1,be.z0,Qt.z1+.28,1.9),F(Qt.x0-.28,be.z1,Qt.z1+.28,1.9),H(Qt.z1,Qt.x0-.28,-2.6,1.15,0),H(Qt.z1,-1.2,Qt.x1+.28,1.15);for(let tt of[-2.75,-1.25])s.box(tt-.2,0,Qt.z1-.08,tt+.2,1.5,Qt.z1+.36,{all:{r:E,uv:[0,0,.2,.75]}}),s.box(tt-.25,1.5,Qt.z1-.13,tt+.25,1.6,Qt.z1+.41,O),s.cyl(tt,1.6,1.9,Qt.z1+.14,.16,6,I(11117458,13222834),I(13222834),.1),L(tt-.2,Qt.z1-.08,tt+.2,Qt.z1+.36,1.5,{shade:!1});let $=[Qt.x1+.14,4.3,6.4];s.bar([$[0],1.9,$[2]],$,.09,I(7304572,10133670)),s.box($[0]-.3,4.05,$[2]-.1,$[0]-.02,4.25,$[2]+.1,I(1710878)),r.quad([$[0]-.28,4.07,$[2]+.101],[$[0]-.04,4.07,$[2]+.101],[$[0]-.04,4.23,$[2]+.101],[$[0]-.28,4.23,$[2]+.101],I(16774358)),P([$[0]-.16,4.15,$[2]+.2],1.3,16773320,.35),ut([be.x1+.2,6,be.z1+.3],$,.75)}{let F=e.paintM(1.88,1.88,Ad),H=e.paintM(2.34,1.88,wd),$=e.paintM(4.35,2.4,Pd),tt=e.paint(280,28,Rd),S=e.paint(30,30,Cd,!1),At=e.paintM(1.88,2.34,Id);s.at(-2.6,0,8.8);for(let gt of[1,2,5.35])s.box(gt-.47,0,2.02,gt+.47,.94,2.38,{all:I(1579034),s:S,top:I(2303016)});for(let gt of[1,2,5.35])s.box(gt-.47,0,.02,gt+.47,.94,.38,I(1579034));s.box(.1,.46,.3,6.3,.8,2.1,I(1842464,2763568)),s.box(0,.8,0,4.35,.96,2.4,{all:I(9059602,12079642),top:$}),s.box(0,.96,2.33,4.35,1.4,2.4,{all:I(yi),s:tt,top:I(15764026)}),s.box(0,.96,0,4.35,1.4,.07,{all:I(yi),top:I(15764026)}),s.box(0,.96,.07,.07,1.4,2.33,{all:I(13130264),top:I(15764026)}),s.box(4.28,.96,.05,4.42,2.45,2.35,{all:I(2500395,3816514),top:I(yi)});for(let gt of[.4,1.2,2])s.box(4.24,1.5,gt-.03,4.29,2.4,gt+.03,I(4869202));s.box(4.5,.6,.03,6.38,2.48,2.37,{all:I(yi),s:F,e:H,top:At}),s.box(6.38,.42,.02,6.52,.74,2.38,I(1842464,3421756)),s.box(6.38,2.26,.08,6.62,2.34,2.32,I(1710620));for(let gt of[2.37,-.15])s.box(6.12,1.62,gt,6.26,2.2,gt+.18,I(1579034));s.bar([4.46,.9,.32],[4.46,2.85,.32],.11,I(7304572,12172996)),s.box(4.7,.3,2.2,5,.62,2.4,I(1842464)),r.at(-2.6,0,8.8).box(5.3,2.48,.95,5.5,2.6,1.45,I(16756768)).end(),s.end(),P([-2.6+5.4,2.6,8.8+1.2],1.1,16751136,.5);for(let gt of[.3,2.1])P([-2.6+6.5,1.35,8.8+gt],.9,16773312,.35);for(let gt=0;gt<9;gt++)for(let St=0;St<4;St++){let ft=-2.22+gt*.455,Dt=8.8+.5+St*.455;gt===0&&St>1||gt===1&&St===3||(c.push({x:ft+(t()-.5)*.03,y:.96,z:Dt+(t()-.5)*.03,loose:!1}),gt>=5&&(gt+St)%5!==0&&St<3&&c.push({x:ft+.2,y:1.54,z:Dt+.22,loose:!1}))}L(-2.6,8.8,-2.6+6.5,8.8+2.4,1.5,{shade:!0}),l.push({x0:-2.6+4.3,z0:8.8,x1:-2.6+6.4,z1:8.8+2.4,h:2.5}),h.fillStyle="rgba(14,12,14,0.45)",h.beginPath(),h.ellipse(Y(-2.6+5),Y(8.8+1.3),26,16,0,0,7),h.fill(),h.fillStyle="rgba(60,90,130,0.2)",h.beginPath(),h.ellipse(Y(-2.6+5.3),Y(8.8+1.5),14,7,.4,0,7),h.fill()}c.push({x:1.35-.25,y:0,z:.95-.12,loose:!0},{x:1.35+.24,y:0,z:.95-.16,loose:!0},{x:1.35+.02,y:0,z:.95+.28,loose:!0},{x:1.35,y:.585,z:.95-.02,loose:!0,on:[]}),c[c.length-1].on=[c.length-4,c.length-3,c.length-2],D(1.35-.45,.95-.4,1.35+.45,.95+.5,8,.6),h.fillStyle="rgba(40,26,14,0.3)",h.beginPath(),h.ellipse(Y(1.35+.5),Y(.95+.6),30,14,.5,0,7),h.fill();{let R=[e.paint(14,10,($,tt,S)=>Hc($,tt,S,2775706)),e.paint(14,10,($,tt,S)=>Hc($,tt,S,12071466))],N=[e.paint(14,10,($,tt,S)=>Vc($,tt,S,2775706)),e.paint(14,10,($,tt,S)=>Vc($,tt,S,12071466))],F=3,H=.1;s.at(F,0,H,.2).box(-.23,0,-.17,.23,.31,.17,{all:R[0],top:N[0]}).end(),s.at(F+.03,.31,H+.02,-.25).box(-.23,0,-.17,.23,.31,.17,{all:R[1],top:N[1]}).end(),s.at(F+.6,0,H+.3,1.3).box(-.23,0,-.17,.23,.31,.17,{all:R[1],top:N[1]}).end(),L(F-.28,H-.23,F+.3,H+.25,.6),L(F+.38,H+.05,F+.8,H+.56,.3)}let nt=(R,N,F,H)=>{let $=I(8019006,9728332),tt=I(6047022,7230264);s.at(R,0,N,F),s.box(-.92,.72,-.38,.92,.78,.38,{all:tt,top:j});for(let Dt of[-1,1])s.box(-.92,.42,Dt*.78-.14,.92,.47,Dt*.78+.14,{all:tt,top:{r:j,uv:[0,0,1,.42]}});for(let Dt of[-.68,.68])s.bar([Dt,0,-.82],[Dt,.72,-.26],.08,$),s.bar([Dt,0,.82],[Dt,.72,.26],.08,$),s.bar([Dt,.4,-.86],[Dt,.4,.86],.07,$);let S=ae(Math.round(R*31+N*7));for(let Dt=0;Dt<H;Dt++){let Mt=-.7+S()*1.4,Lt=-.25+S()*.5,w=S()<.6;s.box(Mt-.045,.78,Lt-.045,Mt+.045,.78+(w?.13:.05),Lt+.045,{all:I(13142058,15247418),top:I(16051412)}),w||s.box(Mt-.045,.83,Lt-.045,Mt+.045,.93,Lt+.045,{all:I(12174536,14213346),top:I(15265520)})}s.box(.3,.78,.12,.44,.81,.26,I(10133670,13685976)),s.end();let At=Math.abs(Math.cos(F)),gt=Math.abs(Math.sin(F)),St=.92*At+.92*gt,ft=.92*gt+.92*At;L(R-St,N-ft,R+St,N+ft,.75);for(let Dt=0;Dt<14;Dt++)_(h,Y(R-1.4+t()*2.8),Y(N-1.4+t()*2.8),1+t.int(2),1,t()<.6?A(15262416):A(14195274))};nt(-6.3,2.35,.04,3),nt(-5,5.6,-.22,2);{let F=e.paintM(.92,2.36,Nd),H=I(9050644,11871260);s.box(4.05-.46,0,4.7-.46,4.05+.46,2.36,4.7+.46,{all:F,top:H}),s.box(4.05-.5,2.36,4.7-.5,4.05+.5,2.44,4.7+.5,I(11871260)),s.box(4.05-.42,2.44,4.7-.42,4.05+.42,2.54,4.7+.42,I(11871260,13644840)),s.box(4.05-.28,2.54,4.7-.28,4.05+.28,2.6,4.7+.28,I(13644840)),s.box(4.05-.5,0,4.7-.5,4.05+.5,.06,4.7+.5,I(3807768)),L(4.05-.46,4.7-.46,4.05+.46,4.7+.46,2.5),P([4.05,2.2,4.7+.5],1.2,16773840,.3),T(4.05-.3,4.7+.5,.6,1.2,14699066,.22)}let yt=[e.paint(18,30,(R,N,F)=>sl(R,N,F,3103290,"3L")),e.paint(18,30,(R,N,F)=>sl(R,N,F,4869460,"PUB")),e.paint(18,30,(R,N,F)=>sl(R,N,F,2771578,"12"))],st=(R,N,F,H,$=!1)=>{let tt=[3500612,5659234,3167884][H],S=[3103290,4869460,2771578][H];s.at(R,0,N,F),s.box(-.28,.06,-.33,.28,1,.33,{all:yt[H],top:I(1710620)}),$?s.quad([-.3,1,-.36],[.3,1,-.36],[.3,1.62,-.5],[-.3,1.62,-.5],I(tt),{double:!0}):s.box(-.31,1,-.37,.31,1.07,.36,{all:I(tt),top:I(tt)}),$&&(s.box(-.22,.9,-.26,.22,1.08,.24,{all:I(1842206),top:I(2763824)}),s.box(-.15,1,-.1,.1,1.2,.16,I(15262936,16052454))),s.box(-.3,0,.2,-.22,.2,.4,I(1184276)),s.box(.22,0,.2,.3,.2,.4,I(1184276)),s.box(-.2,.9,.33,.2,.96,.39,I(S)),s.end(),L(R-.36,N-.4,R+.36,N+.4,1.05,{shade:!1})};st(-1.05,-4.25,Math.PI/2+.1,1,!0),st(-7.9,12.7,.15,0),st(4.95,2.2,-Math.PI/2,1);{let R=e.paintM(6.3,3.3,($,tt,S)=>zc($,tt,S,9));[-14.5,-20.5].forEach(($,tt)=>{let S=$,At=$+6,gt=be.z0,St=-.3,ft=5.4,Dt=(gt+St)/2,Mt=ft+(St-gt)/2*al,Lt=e.paintM(6,ft,(v,X,dt)=>Ed(v,X,dt,40+tt));s.quad([S,0,St],[At,0,St],[At,ft,St],[S,ft,St],Lt),s.quad([S,0,gt],[S,0,St],[S,ft,St],[S,ft,gt],{r:E}),s.quad([At,0,gt],[S,0,gt],[S,ft,gt],[At,ft,gt],{r:E});let w=ft-.3*al;s.quad([S,w,St+.3],[At,w,St+.3],[At,Mt,Dt],[S,Mt,Dt],R),s.quad([At,w,gt-.3],[S,w,gt-.3],[S,Mt,Dt],[At,Mt,Dt],R),s.box(S,w-.14,St+.2,At,w+.02,St+.36,I(1776672)),s.bar([S,Mt+.03,Dt],[At,Mt+.03,Dt],.18,I(3422788)),s.box(S+.3,Mt-.7,Dt-.45,S+1,Mt+.8,Dt+.45,{all:{r:E,uv:[0,0,.35,.75]},top:O});for(let v of[-.2,.2])s.cyl(S+.65,Mt+.8,Mt+1.2,Dt+v,.13,6,I(10114358,12085828),I(2759702),.1);P([S+1.5,1.6,St+.3],2.6,tr,.2),T(S+.8,St+.1,1.4,1.6,16764794,.2),D(S,St,At,St+.4,12,.45)}),o.push({x0:-40,z0:be.z0,x1:Qt.x0-.28,z1:40,h:6}),l.push({x0:-20.5,z0:be.z0,x1:be.x0,z1:-.3,h:6});let N=e.paint(64,44,($,tt,S)=>{let At=ae(90);for(let St=0;St<tt;St+=5)_($,St,0,4,S,ht(vt(It(7232068),.85+At()*.25))),_($,St+4,0,1,S,A(3089948));_($,0,8,tt,2,A(4864554)),_($,0,S-10,tt,2,A(4864554));let gt=$.createLinearGradient(0,S-14,0,S);gt.addColorStop(0,"rgba(20,30,16,0)"),gt.addColorStop(1,"rgba(20,30,16,0.5)"),$.fillStyle=gt,$.fillRect(0,S-14,tt,14)});for(let $=-.3;$<13.6;$+=2)s.box(-14.56,0,$,-14.48,1.4,Math.min(13.78,$+2),{all:N,top:I(4864554)});for(let $=ie;$<Qt.x0-.3;$+=2)s.box($,0,Qt.z1,Math.min(Qt.x0-.28,$+2),1.4,Qt.z1+.08,{all:N,top:I(4864554)});let F=["10","7","4"].map($=>e.paint(20,22,(tt,S,At)=>Bd(tt,S,At,$),!1));s.bar([-13.9,0,6.2],[-13.9,2.1,6.2],.08,I(9080726)),s.bar([-9.4,0,6],[-9.4,2.1,6],.08,I(9080726)),s.bar([-13.9,2.05,6.2],[-9.4,2.05,6],.025,I(14210248)),F.forEach(($,tt)=>{let S=-13+tt*1.15,At=6.16-tt*.05;s.quad([S,1.32,At+.06],[S+.64,1.32,At+.06],[S+.64,2.04,At],[S,2.04,At],$,{double:!0})});let H=e.paint(58,60,Hd);s.box(-13.6,0,10.6,-11.8,1.85,12.2,{all:H,top:null}),s.quad([-13.7,1.8,12.3],[-11.7,1.8,12.3],[-11.7,2.25,11.4],[-13.7,2.25,11.4],G),s.quad([-11.7,1.8,10.5],[-13.7,1.8,10.5],[-13.7,2.25,11.4],[-11.7,2.25,11.4],G),s.tri([-11.8,1.85,12.2],[-11.8,1.85,10.6],[-11.8,2.25,11.4],{r:H},[[0,.2],[1,.2],[.5,0]]),D(-13.6,10.6,-11.8,12.2,10,.5),st(-9.6,1,Math.PI/2,2),st(-9.6,1.85,Math.PI/2,0)}{let R=Qt.x1+.28,N=13.3,F=be.z0,H=1.5,$=2.6,tt=e.paintM(N-R,$,Td),S=e.paintM(N-R,H-F,(St,ft,Dt)=>kc(St,ft,Dt,12));s.box(R,0,F,N,$,H,{s:tt,top:S,all:{r:Z,uv:[0,0,1,1]}}),s.box(R-.05,$,H-.1,N+.05,$+.12,H+.14,I(7303800,9080210)),D(R,H,N,H+.4,12,.5),D(N,F,N+.4,H,12,.4);for(let St=N;St<Ce;St+=4)s.box(St,0,F,Math.min(Ce,St+4),2,F+.28,{all:{r:Z,uv:[0,0,1,1]},top:O});o.push({x0:Qt.x1,z0:be.z0,x1:40,z1:40,h:2.6}),l.push({x0:R,z0:F,x1:N,z1:H,h:$});let At=e.paintM(3,1.15,kd),gt=e.paintM(3,1.7,Gd);s.box(8.3,.12,5.2,11.3,1.15,6.9,{all:I(11569684,14725660),s:At,top:gt}),s.quad([11.3,.12,6.9],[11.75,1.15,6.9],[11.75,1.15,5.2],[11.3,.12,5.2],I(13147672)),s.tri([11.3,.12,6.9],[11.75,1.15,6.9],[11.3,1.15,6.9],I(13674010),[[.5,.5],[.5,.5],[.5,.5]]),D(8.3,5.2,11.6,6.9,12,.55)}{let R=Xt.zShops,N=Xt.zBack,F=on,H=3.9,$=[{x0:ie,x1:-16.5,cfg:{pal:ds,fascia:0,frame:0,kind:"house",seed:61},extra:.5},{x0:-16.5,x1:-10.5,cfg:{pal:ds,fascia:15525586,frame:2775690,kind:"glass",seed:62},sign:(k,rt,q)=>er(k,rt,q,"FRY DAYS",15525586,12593182,{sub:"FISH \xB7 CHIPS \xB7 KEBABS",edge:2775690}),window:(k,rt,q)=>il(k,rt,q,5,!1,"OPEN"),lit:!0,glow:16767392},{x0:-10.5,x1:-5.9,cfg:{pal:fs,fascia:6714218,frame:3817284,kind:"shutter",seed:63},sign:(k,rt,q)=>{er(k,rt,q,"VIDEO WORLD",6714218,9082508,{}),_(k,rt-96,4,84,q-8,A(15921382)),nn(k,"TO LET",rt-54,q-12,15,A(12593182),{align:"center"})},extra:-.25},{x0:-5.9,x1:.1,cfg:{pal:_i,fascia:1315860,frame:1513500,kind:"glass",seed:64},sign:(k,rt,q)=>er(k,rt,q,"CASH KINGS",15910942,1315860,{crown:!0,sub:"WE BUY GOLD \xB7 PAWNBROKER \xB7 CHEQUES CASHED",stripe:1315860,edge:1315860}),signH:1.15,window:_d,doorLeft:!0,lit:!0,cool:!0,extra:.35,glow:15918752},{x0:.1,x1:7,cfg:{pal:ds,fascia:1796668,frame:1788464,kind:"glass",seed:65},sign:(k,rt,q)=>er(k,rt,q,"BET-U-LIKE",1796668,16052448,{sub:"TODAY: ENGLAND TO WIN 11/4",edge:15910942}),window:(k,rt,q)=>il(k,rt,q,7,!0,"ODDS"),lit:!0,cool:!0,glow:14217440},{x0:7,x1:13,cfg:{pal:fs,fascia:12068894,frame:8002068,kind:"glass",seed:66},sign:(k,rt,q)=>er(k,rt,q,"BOOZE & NEWS",12068894,16315626,{sub:"OFF LICENCE \xB7 LOTTERY \xB7 VAPES"}),window:(k,rt,q)=>il(k,rt,q,8,!1,"BEER"),doorLeft:!0,lit:!0,extra:.2,glow:16767392},{x0:13,x1:Ce,cfg:{pal:_i,fascia:0,frame:0,kind:"house",seed:67},extra:.6}],tt=e.paint(32,19,yd),S=e.paint(32,26,bd);for(let k of $){let rt=k.x1-k.x0,q=F+H+Math.max(0,k.extra??0),B=F+H-.3,ot=e.paintM(rt,H,(ct,pt,_t)=>xd(ct,pt,_t,k.cfg)),C=e.paintM(rt,R-N,(ct,pt,_t)=>kc(ct,pt,_t,k.cfg.seed)),V=k.cfg.pal===ds?11836016:k.cfg.pal===fs?6968912:10114884;if(s.quad([k.x0,F,R],[k.x1,F,R],[k.x1,F+H,R],[k.x0,F+H,R],ot),q>F+H&&s.box(k.x0,F+H,R-.3,k.x1,q,R,{all:{r:ot,uv:[0,.03,1,.03+(q-F-H)/H]},top:O}),s.quad([k.x1,F,R],[k.x1,F,N],[k.x1,q,N],[k.x1,q,R],{r:E,c:V===10114884?16777215:11577504}),s.quad([k.x0,F,N],[k.x0,F,R],[k.x0,q,R],[k.x0,q,N],I(V)),s.quad([k.x0,B,R-.01],[k.x1,B,R-.01],[k.x1,B,N],[k.x0,B,N],C),L(k.x0,N,k.x1,R,4),D(k.x0,R,k.x1,R+.45,12,.45),k.cfg.kind==="house"){P([k.x0+rt*.2+.5,F+1.9,R+.3],2,tr,.2);continue}let K=ae(k.cfg.seed*3);{let ct=k.x0+1+K()*2,pt=N+1+K();s.box(ct,B,pt,ct+1,B+.6,pt+.8,{all:tt,e:{r:tt,uv:[.1,0,.9,1]},top:S}),s.box(ct+.1,B,pt+.8,ct+.2,B+.08,pt+2.2,I(2763824))}if(s.cyl(k.x1-1.2,B,B+.8,N+1.2+K()*2,.12,6,I(6053990,9080726),I(1710620)),k.sign){let ct=k.signH??.72,pt=F+2.38+(k.signH?-.02:0),_t=e.paint((rt-.3)*64,ct*64,k.sign);s.box(k.x0+.15,pt,R,k.x1-.15,pt+ct,R+(k.signH?.22:.1),{all:I(k.cfg.fascia||2236962),s:_t,top:I(9079430)}),k.signH&&(P([(k.x0+k.x1)/2,pt+ct/2,R+.4],4.6,16770688,.16,.4),T(k.x0+.6,R+.15,rt-1.2,4.2,15913024,.36))}if(k.cfg.kind==="glass"&&k.window){let pt=k.x0+.2+(k.doorLeft?1.1:0),_t=k.x1-.2-(k.doorLeft?0:1+.1),kt=k.doorLeft?k.x0+.2:k.x1-.2-1,ee=e.paintM(_t-pt,1.86,k.window),bt=e.paintM(1,2.2,(Ht,te,Rt)=>vd(Ht,te,Rt,k.cfg.frame,!!k.lit,!!k.cool));r.quad([pt,F+.44,R+.02],[_t,F+.44,R+.02],[_t,F+2.3,R+.02],[pt,F+2.3,R+.02],ee),r.quad([kt,F,R+.02],[kt+1,F,R+.02],[kt+1,F+2.2,R+.02],[kt,F+2.2,R+.02],bt),P([(pt+_t)/2,F+1.4,R+.4],(_t-pt)*1.5,k.glow??16777215,.16,.6),T(pt+.1,R+.1,_t-pt-.2,2.6,k.glow??16777215,k===$[3]?.3:.2)}}s.cyl(-3.2,F+H-.3,F+H+.3,N+1.7,.16,6,{c:14837276,c2:15764026},I(15764026),.04),s.cyl(-3.2,F+H-.05,F+H+.08,N+1.7,.1,6,I(15921126),void 0,.08),s.cyl(3.4,F+H-.3,F+H-.12,N+2.4,.11,6,I(14210248,16052454),I(16052454),.11),o.push({x0:-60,z0:-60,x1:60,z1:R,h:4});let At=1.3,gt=-11.5,St=e.paint(116,250,Md);s.box(At-.9,F,gt-.14,At+.9,F+3.9,gt+.14,{all:I(1458046,1855388),s:St,n:St,top:I(2777784)}),s.box(At-.98,F,gt-.22,At+.98,F+.1,gt+.22,I(4869460)),L(At-.9,gt-.14,At+.9,gt+.14,3.9);let ft=e.paint(44,44,Vd);s.cyl(-6.6,F,F+1.42,-11.45,.24,8,ft,I(9050644)),s.cyl(-6.6,F+1.42,F+1.56,-11.45,.27,8,I(10100248,12593696),I(12593696),.12),L(-6.85,-11.7,-6.35,-11.2,1.5,{shade:!1});let Dt=(k,rt)=>{s.cyl(k,F,F+.9,rt,.11,6,I(2764082,3817028)),s.bar([k,F+.9,rt],[k,F+5.6,rt],.1,I(3817028,5922662)),s.bar([k,F+5.55,rt],[k,F+5.75,rt+1.1],.08,I(5922662)),s.box(k-.13,F+5.66,rt+.85,k+.13,F+5.8,rt+1.4,I(4869974,6975350)),r.box(k-.1,F+5.6,rt+.9,k+.1,F+5.67,rt+1.36,{all:I(16756848),bot:I(16756848)}),P([k,F+5.6,rt+1.15],2.6,16751184,.42),x(k+.4,rt+1.4,2.4,1.7,16751184,.2),L(k-.12,rt-.12,k+.12,rt+.12,5,{shade:!1})};Dt(-8.2,-12),Dt(8.6,-12),s.box(4.2,F,-11.85,4.65,F+.95,-11.4,{all:I(1710878,2895411),top:I(1184276)}),s.box(4.17,F+.95,-11.88,4.68,F+1.02,-11.37,I(3421756)),L(4.2,-11.85,4.65,-11.4,1,{shade:!1});let Mt=[e.paint(70,36,(k,rt,q)=>Xc(k,rt,q,"POLICE"),!1),e.paint(70,36,(k,rt,q)=>Xc(k,rt,q,null),!1)],Lt=e.paint(64,44,zd);for(let k of[-10.4,10.9]){for(let rt=0;rt<2;rt++){let q=Xt.zFar+.25+rt*2.2;s.quad([k,0,q+2.15],[k+.5,0,q],[k+.5,1.12,q],[k,1.12,q+2.15],Mt[rt],{double:!0,normal:[.3,.9,.3]})}s.box(k+.5,0,-8.9,k+.6,1.5,-8.8,I(9409948)),s.at(k+.55,0,-8.85,.25).box(-.5,.75,.06,.5,1.45,.1,{all:I(9409948),s:Lt}).end();for(let[rt,q]of[[.9,-7],[1,-9.9],[-.5,-6.8]])s.cyl(k+rt,.04,.62,q,.15,6,{c:14837276,c2:15764026},I(15764026),.04),s.cyl(k+rt,.3,.42,q,.105,6,I(15921126),void 0,.085),s.box(k+rt-.2,0,q-.2,k+rt+.2,.04,q+.2,I(1842464));o.push({x0:k-.1,z0:Xt.zFar-.4,x1:k+.7,z1:Xt.zNear+.3,h:1.1})}o.push({x0:-60,z0:-20,x1:-10.3,z1:be.z0+.01,h:1},{x0:11.5,z0:-20,x1:60,z1:be.z0+.01,h:1});let w=32,v=11,X=e.paint(w*32,v*32,Sd),dt=N-.4,it=-20;r.quad([it,0,dt],[it+w,0,dt],[it+w,v,dt],[it,v,dt],X),r.quad([it-30,0,dt],[it,0,dt],[it,v,dt],[it-30,v,dt],{r:X,uv:[0,0,.002,1]}),r.quad([it+w,0,dt],[it+w+30,0,dt],[it+w+30,v,dt],[it+w,v,dt],{r:X,uv:[.998,0,1,1]}),r.quad([it-30,v,dt],[it+w+30,v,dt],[it+w+30,v+14,dt],[it-30,v+14,dt],{r:X,uv:[.001,0,.002,.004]}),P([it+18.6,6.72,dt+.3],3.4,16774352,.34),P([it+3,5.7,dt+.3],2,16774352,.25),P([it+29.4,6,dt+.3],2.2,16774352,.25)}{h.save(),h.translate(Y(2),Y(-4.2)),h.scale(1,1.55),h.globalAlpha=.62,nn(h,"KEEP",0,0,22,A(13609260),{align:"center"}),nn(h,"CLEAR",0,30,22,A(13609260),{align:"center"}),h.restore();for(let N=0;N<900;N++){let F=Y(-.5)+t.int(Y(5)),H=Y(-5.6)+t.int(Y(3.4));_(h,F,H,1+t.int(2),1,ht(t.pick(M),.9))}h.fillStyle=A(1842464),h.beginPath(),h.arc(Y(3.4),Y(-8.2),12,0,7),h.fill(),h.fillStyle=A(5593182),h.beginPath(),h.arc(Y(3.4),Y(-8.2),10,0,7),h.fill();for(let N=-8;N<9;N+=4)_(h,Y(3.4)-7,Y(-8.2)+N,14,1,A(2763824));for(let N of[-7,5.5,14]){_(h,Y(N),Y(Xt.zFar)+1,14,9,A(1315862));for(let F=1;F<13;F+=3)_(h,Y(N)+F,Y(Xt.zFar)+2,2,7,A(5922146))}for(let N=0;N<16;N++)Ln(h,Y(ie)+t.int(p),Y(Xt.zFar+.55)+t.int(8),20+t.int(46),5+t.int(5),t);for(let N=0;N<10;N++)Ln(h,Y(ie)+t.int(p),Y(Xt.zNear-.6)-t.int(8),16+t.int(36),4+t.int(5),t);Ln(h,Y(3.3),Y(4.2),30,12,t),Ln(h,Y(-6.6),Y(10.9),36,13,t),Ln(h,Y(3.7),Y(-2.6),26,10,t),Ln(h,Y(.4),Y(11.9),22,9,t),Ln(h,Y(-2.2),Y(5.2),16,7,t),Ln(h,Y(8.5),Y(9.5),40,14,t),Ln(h,Y(-3),Y(15.6),44,10,t),h.save(),h.globalCompositeOperation="lighter";for(let N=0;N<70;N++){let F=Y(ie)+t.int(p),H=Y(-11)+t.int(Y(30)),$=50+t.int(170),tt=8+t.int(30),S=h.createLinearGradient(F,H,F+$*.305,H+$);S.addColorStop(0,"rgba(120,140,160,0)"),S.addColorStop(.5,`rgba(120,140,160,${.05+t()*.06})`),S.addColorStop(1,"rgba(120,140,160,0)"),h.fillStyle=S,h.beginPath(),h.moveTo(F,H),h.lineTo(F+tt,H),h.lineTo(F+tt+$*.305,H+$),h.lineTo(F+$*.305,H+$),h.closePath(),h.fill()}h.restore();for(let N=0;N<160;N++){let F=-8+t()*13,H=-5+t()*18;_(h,Y(F),Y(H),1,1,t()<.5?A(15262416):A(2761760))}for(let[N,F,H]of[[-3.2,3.4,2775706],[1.2,6.6,13117470],[-7.6,6.8,15262416],[4.6,9.2,2775706],[.2,-3.4,14857802],[2.9,-9.1,15262416],[-4,-7.2,13117470]])_(h,Y(N),Y(F),3,2,A(H)),_(h,Y(N),Y(F),3,1,ht(vt(It(H),1.3))),_(h,Y(N),Y(F)+2,3,1,"rgba(0,0,0,0.4)");let R=h.createLinearGradient(0,Y(20),0,Y(ii));R.addColorStop(0,"rgba(14,15,20,0)"),R.addColorStop(1,"rgba(14,15,20,0.9)"),h.fillStyle=R,h.fillRect(Y(ie),Y(20),p,Y(ii-20)),h.setTransform(1,0,0,1,0,0),hn(h,0,0,d,u,5,99)}g.quad([ie,0,ii],[Ce,0,ii],[Ce,0,ps],[ie,0,ps],b(ie,ps,Ce,ii)),g.quad([ie,on,Xt.zFar],[Ce,on,Xt.zFar],[Ce,on,Xt.zBack],[ie,on,Xt.zBack],b(ie,Xt.zBack,Ce,Xt.zFar)),g.quad([ie,0,Xt.zFar],[Ce,0,Xt.zFar],[Ce,on,Xt.zFar],[ie,on,Xt.zFar],{r:b(ie,Xt.zFar-.14,Ce,Xt.zFar-.02),c:14211288});for(let[R,N]of[[ie,be.x1],[Qt.x1,Ce]])g.quad([R,on,be.z0],[N,on,be.z0],[N,on,Xt.zNear],[R,on,Xt.zNear],b(R,Xt.zNear,N,be.z0)),g.quad([N,0,be.z0],[N,0,Xt.zNear],[N,on,Xt.zNear],[N,on,be.z0],{r:b(N-.9,Xt.zNear+.02,N-.02,Xt.zNear+.14),c:11053224});for(let[R,N,F,H]of[[-80,-18,ie,60],[Ce,-18,80,60],[-80,ii,80,60]])g.quad([R,-.02,H],[F,-.02,H],[F,-.02,N],[R,-.02,N],{r:b(ie+.1,ii-.2,ie+.2,ii-.1),c:8421504});let mt=(R,N=!0)=>{let F=new Di(R);return F.colorSpace=Fe,F.magFilter=N?Ae:ze,F.minFilter=kn,F.anisotropy=Math.min(4,n),F.generateMipmaps=!0,F},xt=mt(e.canvas),zt=mt(f),Jt=new Ws({map:xt,vertexColors:!0,alphaTest:.5,shadowSide:ln}),lt=new Ws({map:zt,vertexColors:!0}),Ct=new An({map:xt,vertexColors:!0}),[Ut,Vt]=Vi(64,64);{let R=Vt.createRadialGradient(32,32,0,32,32,32);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(.35,"rgba(255,255,255,0.42)"),R.addColorStop(1,"rgba(255,255,255,0)"),Vt.fillStyle=R,Vt.fillRect(0,0,64,64)}let wt=new Di(Ut);wt.colorSpace=Fe;let Kt=new An({map:wt,vertexColors:!0,transparent:!0,blending:Ur,depthWrite:!1,fog:!1}),Te=new De(g.geometry(),lt);Te.receiveShadow=!0,Te.name="ground";let Wt=new De(s.geometry(),Jt);Wt.castShadow=!0,Wt.receiveShadow=!0,Wt.name="town";let pe=new De(r.geometry(),Ct);pe.name="glass";let ge=new De(a.geometry(),Kt);ge.renderOrder=5,ge.name="glow";for(let R of[Te,Wt,pe,ge])R.frustumCulled=!1,R.matrixAutoUpdate=!1;let se=new Xi(e.size,e.size,i),Be=e.paint(44,19,Ld),Le=e.paint(14,14,Dd);se.cyl(0,0,.58,0,.215,10,Be,Le);for(let R=0;R<10;R++){let N=R/10*Math.PI*2,F=(R+1)/10*Math.PI*2;se.tri([0,0,0],[Math.sin(F)*.215,0,Math.cos(F)*.215],[Math.sin(N)*.215,0,Math.cos(N)*.215],Le,[[.5,.5],[.5+Math.sin(F)*.5,.5+Math.cos(F)*.5],[.5+Math.sin(N)*.5,.5+Math.cos(N)*.5]])}xt.needsUpdate=!0;let Je=(R,N)=>(N<Xt.zFar||N<be.z0&&N>Xt.zNear&&(R<be.x1||R>Qt.x1)?on:0)*Pn;return{meshes:[Te,Wt,pe,ge],lit:Jt,colliders:o,shaders:l,kegs:c,kegGeometry:se.geometry(),groundY:Je,glowTex:wt,stats:{tris:g.tris+s.tris+r.tris+a.tris,atlas:e.usage()}}}var ir=document.getElementById("c"),hl=new URLSearchParams(location.search),$x=Number(hl.get("dpr"))||2,dn=new Zo({canvas:ir,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});dn.outputColorSpace=Fe;dn.shadowMap.enabled=!0;dn.shadowMap.type=ss;var jd=10134955;dn.setClearColor(jd);var si=new yr;si.fog=new vr(jd,173,250);var bn=new is(-6,6,10,-10,1,420);si.add(bn);si.add(new Lr(12899042,7234136,2.05));var Mn=new Nr(16773340,1.95);Mn.castShadow=!0;Mn.shadow.mapSize.set(1024,1024);Mn.shadow.bias=-6e-4;Mn.shadow.normalBias=.05;Mn.shadow.radius=2.2;si.add(Mn,Mn.target);var un=qd(dn.capabilities.getMaxAnisotropy());for(let n of un.meshes)si.add(n);var _s=new Qo(un.kegs,un.kegGeometry,un.lit,un.colliders);si.add(_s.mesh);var[Kx,Yd]=Vi(256,256);{let n=7,t=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<70;e++){let i=Math.floor(t()*256),s=Math.floor(t()*256),r=10+Math.floor(t()*26),a=.25+t()*.6;for(let o=0;o<r;o++)Yd.fillStyle=`rgba(255,255,255,${a*Math.sin(o/r*Math.PI)})`,Yd.fillRect(i,(s+o)%256,1,1)}}var sr=new Di(Kx);sr.wrapS=sr.wrapT=Os;sr.magFilter=Ae;sr.minFilter=ze;sr.generateMipmaps=!1;var $c=new wn({uniforms:{map:{value:sr},time:{value:0},scale:{value:512},strength:{value:.5}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D map; uniform float time; uniform float scale; uniform float strength;
    void main(){ vec2 p = gl_FragCoord.xy / scale; p.x += p.y * 0.16;
      float a = texture2D(map, vec2(p.x, p.y + time * 2.6)).a * 0.55 + texture2D(map, vec2(p.x * 0.6 + 0.37, p.y * 0.5 + time * 1.7)).a * 0.4;
      gl_FragColor = vec4(0.84, 0.89, 0.94, a * strength); }`,transparent:!0,depthTest:!1,depthWrite:!1}),Kc=new De(new Ni(2,2),$c);Kc.frustumCulled=!1;Kc.renderOrder=999;hl.get("rain")!=="0"&&si.add(Kc);var Qx=new An({map:un.glowTex,color:329226,transparent:!0,opacity:.55,depthWrite:!1}),jx=new Ni(1,1).rotateX(-Math.PI/2),Qc=document.getElementById("hud"),qi=document.getElementById("stick"),jc=document.getElementById("knob"),Kr=hl.get("hud")==="1";Qc.style.display=Kr?"block":"none";var xs=12,Yi=20,Qr=1,th=.06;function tf(){let n=window.innerWidth,t=window.innerHeight;Qr=Math.min(window.devicePixelRatio||1,$x),dn.setPixelRatio(Qr),dn.setSize(n,t,!1);let e=Math.max(1,Math.min(3,Math.round(Math.min(n,t)/420)));xs=n/(Zr*e),Yi=t/(Zr*e),bn.left=-xs/2,bn.right=xs/2,bn.top=Yi/2,bn.bottom=-Yi/2,bn.updateProjectionMatrix(),th=n>t?.08:.06,$c.uniforms.scale.value=256*Qr*e,t_()}var rr=new W,ta=new W,ef=hs.clone().negate();rr.crossVectors(Cn,ef).normalize();ta.crossVectors(ef,rr).normalize();var sn={minX:0,maxX:0,minY:0,maxY:0};function t_(){sn.minX=sn.minY=1/0,sn.maxX=sn.maxY=-1/0;let n=new W;for(let e of[-1,1])for(let i of[-1,1])for(let s of[0,10.5*Pn]){n.copy(yn).multiplyScalar(e*xs/2).addScaledVector(xi,i*Yi/2);let r=(n.y+1-s)/-vn.y;n.addScaledVector(vn,r),sn.minX=Math.min(sn.minX,n.dot(rr)),sn.maxX=Math.max(sn.maxX,n.dot(rr)),sn.minY=Math.min(sn.minY,n.dot(ta)),sn.maxY=Math.max(sn.maxY,n.dot(ta))}let t=Mn.shadow.camera;t.left=sn.minX-1,t.right=sn.maxX+1,t.bottom=sn.minY-1,t.top=sn.maxY+1,t.near=1,t.far=220,t.up.copy(Cn),t.updateProjectionMatrix()}var Xn=new W,qc=new W;function e_(){let n=Mn.shadow.camera,t=(n.right-n.left)/1024,e=(n.top-n.bottom)/1024,i=Xn.dot(rr),s=Xn.dot(ta);qc.copy(Xn).addScaledVector(rr,Math.round(i/t)*t-i).addScaledVector(ta,Math.round(s/e)*e-s),Mn.target.position.copy(qc),Mn.position.copy(qc).addScaledVector(hs,-110),Mn.target.updateMatrixWorld(),Mn.updateMatrixWorld()}var Wn=new Set;addEventListener("keydown",n=>{Wn.add(n.key.toLowerCase()),(n.key.startsWith("Arrow")||n.key===" ")&&n.preventDefault()});addEventListener("keyup",n=>Wn.delete(n.key.toLowerCase()));addEventListener("blur",()=>Wn.clear());var we={id:-1,ox:0,oy:0,x:0,y:0},cl=new Map,Zd=(n,t)=>t>innerHeight*.55&&n<innerWidth*(innerWidth>innerHeight?.45:.62);ir.addEventListener("pointerdown",n=>{ir.setPointerCapture?.(n.pointerId),cl.set(n.pointerId,{x:n.clientX,y:n.clientY,t:performance.now(),moved:!1}),(we.id<0&&n.pointerType!=="mouse"&&Zd(n.clientX,n.clientY)||we.id<0&&n.pointerType==="mouse"&&Zd(n.clientX,n.clientY))&&(we.id=n.pointerId,we.ox=n.clientX,we.oy=n.clientY,we.x=we.y=0,Jd())});ir.addEventListener("pointermove",n=>{let t=cl.get(n.pointerId);if(t&&Math.hypot(n.clientX-t.x,n.clientY-t.y)>9&&(t.moved=!0),n.pointerId!==we.id)return;let e=n.clientX-we.ox,i=n.clientY-we.oy,s=Math.hypot(e,i),r=46;s>r&&(e*=r/s,i*=r/s),we.x=s<7?0:e/r,we.y=s<7?0:i/r,jc.style.transform=`translate(${e}px,${i}px)`});var nf=n=>{let t=cl.get(n.pointerId);cl.delete(n.pointerId),n.pointerId===we.id&&(we.id=-1,we.x=we.y=0,sf()),t&&!t.moved&&performance.now()-t.t<350&&n_(n.clientX,n.clientY)};ir.addEventListener("pointerup",nf);ir.addEventListener("pointercancel",nf);function Jd(){qi.style.left=`${we.ox-56}px`,qi.style.top=`${we.oy-56}px`,qi.style.bottom="auto",qi.style.opacity="0.9",jc.style.transform="translate(0,0)"}function sf(){qi.style.left="26px",qi.style.top="auto",qi.style.bottom="34px",qi.style.opacity="0.4",jc.style.transform="translate(0,0)"}function n_(n,t){if(n>innerWidth-72&&t<72){Kr=!Kr,Qc.style.display=Kr?"block":"none",rf();return}let e=bn.position.clone().addScaledVector(yn,(n/innerWidth-.5)*xs).addScaledVector(xi,(.5-t/innerHeight)*Yi),i=_s.pick(e);i>=0&&_s.knock(i,oe.x,oe.z)}var oe,Pe,jr=[],bi=null,gs=null,nr={x:-2.2,z:2.9};async function i_(){let[n,t,e,i,s,r,a]=await Promise.all([Hi("grozzhd",["rot","walk","idle"]),Hi("ronson",["rot","walk","run"]),Hi("fan",["rot","idle"],rd),Hi("bigman",["rot","drink"]),Hi("lad",["rot","chat"]),Hi("woman",["rot","chat"]),Hi("oldboy",["rot","walk"])]);oe=new jn(n).place(nr.x,nr.z,0),oe.anim="idle",oe.fps=5,hl.get("xray")!=="0"&&oe.seeThrough(),Pe=new jn(t).place(nr.x+1.45,nr.z-.3,0);let o=new jn(e).place(2.3,1.35,6);o.anim="idle",o.fps=5;let l=new jn(i).place(-4.7,3.35,1);l.anim="drink",l.fps=4;let c=new jn(s).place(2.45,5,2);c.anim="chat",c.fps=6;let d=new jn(r).place(3.2,5.35,6);d.anim="chat",d.fps=5,bi=new jn(a).place(-3,-11.6,2),bi.anim="walk",bi.fps=7,jr.push(oe,Pe,o,l,c,d,bi);for(let u of jr)u.y=un.groundY(u.x,u.z),si.add(u.mesh);gs=new ns(jx,Qx,jr.length),gs.frustumCulled=!1,gs.renderOrder=2,si.add(gs)}var rf=()=>{Kr&&(Qc.textContent=`${eh.toFixed(0)} fps \xB7 ${dn.info.render.calls} calls \xB7 ${(dn.info.render.triangles/1e3).toFixed(1)}k tris`)},Yc=[],Ze=[],$d=performance.now(),Zc=performance.now(),Jc=0,eh=0,Kd=0,ol=1,Qd=new fe,ll=new W,af=0,of=1;function lf(n){let t=Math.min(.05,(n-$d)/1e3);$d=n,Kd+=t;let e=we.x,i=we.y;(Wn.has("a")||Wn.has("arrowleft"))&&(e-=1),(Wn.has("d")||Wn.has("arrowright"))&&(e+=1),(Wn.has("w")||Wn.has("arrowup"))&&(i-=1),(Wn.has("s")||Wn.has("arrowdown"))&&(i+=1);let s=Math.hypot(e,i);if(s>1&&(e/=s,i/=s),oe){let c=(yn.x*e-Cn.x*i)*5.2,d=(yn.z*e-Cn.z*i)*5.2;if(Yc.length=0,_s.blockers(Yc),s>.05){let[M,D]=Ko(oe.x+c*t,oe.z+d*t,.32,un.colliders);[M,D]=Ko(M,D,.32,Yc),oe.x=M,oe.z=D,oe.dir=$r(c,d),af=c/5.2,of=d/5.2,oe.anim="walk",oe.fps=6+9*Math.min(1,s)}else oe.anim="idle",oe.fps=5;oe.y+=(un.groundY(oe.x,oe.z)-oe.y)*Math.min(1,t*18);let u=Ze[Ze.length-1];(!u||Math.hypot(oe.x-u.x,oe.z-u.z)>.2)&&(Ze.push({x:oe.x,z:oe.z}),Ze.length>60&&Ze.shift());let f=Pe.x,h=Pe.z,g=0;for(let M=Ze.length-1;M>0;M--)if(g+=Math.hypot(Ze[M].x-Ze[M-1].x,Ze[M].z-Ze[M-1].z),g>=1.9){let D=Ze[M].x-Ze[M-1].x,T=Ze[M].z-Ze[M-1].z,L=Math.hypot(D,T)||1;f=Ze[M-1].x-T/L*.6,h=Ze[M-1].z+D/L*.6;break}let b=f-Pe.x,p=h-Pe.z,m=Math.hypot(b,p);if(m>.3){let M=Math.min(6.4,1.2+m*3.2),D=Math.min(m,M*t),[T,L]=Ko(Pe.x+b/m*D,Pe.z+p/m*D,.28,un.colliders);Pe.x=T,Pe.z=L,Pe.dir=$r(b,p),Pe.anim=M>3.4?"run":"walk",Pe.fps=M>3.4?14:9}else Pe.anim!=="rot"&&(Pe.anim="rot",Pe.dir=$r(oe.x-Pe.x,oe.z-Pe.z+.01));Pe.y=un.groundY(Pe.x,Pe.z),bi&&(bi.x+=ol*1.05*t,bi.x>.6&&(ol=-1),bi.x<-9.4&&(ol=1),bi.dir=$r(ol,0));for(let M of jr)M.update(t,un.shaders);gs&&(jr.forEach((M,D)=>{let T=M===Pe;Qd.makeScale(T?1.05:.95,1,T?.6:.5).setPosition(M.x+.03,M.y+.025,M.z+.02),gs.setMatrixAt(D,Qd)}),gs.instanceMatrix.needsUpdate=!0),ll.set(oe.x,oe.y+1.15,oe.z).addScaledVector(xi,th*Yi),Xn.lengthSq()===0?Xn.copy(ll):Xn.lerp(ll,Math.min(1,t*9))}_s.update(t);let r=xs/(innerWidth*Qr),a=Xn.dot(yn),o=Xn.dot(xi);bn.position.copy(Xn).addScaledVector(yn,Math.round(a/r)*r-a).addScaledVector(xi,Math.round(o/r)*r-o).addScaledVector(vn,-170),bn.lookAt(ll.copy(bn.position).add(vn)),bn.updateMatrixWorld(),e_(),$c.uniforms.time.value=Kd,dn.render(si,bn),Jc++,n-Zc>=500&&(eh=Jc*1e3/(n-Zc),Jc=0,Zc=n,rf()),requestAnimationFrame(lf)}addEventListener("resize",tf);tf();sf();Xn.set(nr.x,1.15,nr.z).addScaledVector(xi,th*Yi);i_().catch(n=>console.error("sprites failed to load",n)).finally(()=>{window.__vis.ready=!0});requestAnimationFrame(lf);window.__vis={ready:!1,info:()=>({calls:dn.info.render.calls,triangles:dn.info.render.triangles,geometries:dn.info.memory.geometries,textures:dn.info.memory.textures,fps:eh,staticTris:un.stats.tris,atlasUsed:un.stats.atlas,dpr:Qr,viewW:xs,viewH:Yi}),pos:()=>oe?{x:oe.x,z:oe.z}:null,teleport:(n,t,e=0)=>{oe.x=n,oe.z=t,oe.dir=e,af=0,of=1,Pe.x=n+1.1,Pe.z=t+.4,Ze.length=0,Xn.set(0,0,0)},knock:n=>_s.knock(n,oe.x,oe.z),kegs:()=>_s.list.map((n,t)=>({i:t,x:n.x,z:n.z,y:n.y,loose:n.loose,mode:n.mode})).filter(n=>n.loose),screenOf:(n,t,e)=>{let i=new W(n,t,e).project(bn);return{x:(i.x*.5+.5)*innerWidth,y:(-i.y*.5+.5)*innerHeight}},pitch:ki};})();
