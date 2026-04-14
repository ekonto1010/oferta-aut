(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wu={exports:{}},Xi={},Uu={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.element"),ip=Symbol.for("react.portal"),ap=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),sp=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),dp=Symbol.for("react.memo"),cp=Symbol.for("react.lazy"),Mr=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Mr&&e[Mr]||e["@@iterator"],typeof e=="function"?e:null)}var Hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,Zu={};function at(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Hu}at.prototype.isReactComponent={};at.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};at.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qu(){}Qu.prototype=at.prototype;function Bo(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Hu}var xo=Bo.prototype=new Qu;xo.constructor=Bo;qu(xo,at.prototype);xo.isPureReactComponent=!0;var Nr=Array.isArray,Yu=Object.prototype.hasOwnProperty,Do={current:null},Gu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,n,t){var i,a={},o=null,r=null;if(n!=null)for(i in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(o=""+n.key),n)Yu.call(n,i)&&!Gu.hasOwnProperty(i)&&(a[i]=n[i]);var u=arguments.length-2;if(u===1)a.children=t;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(i in u=e.defaultProps,u)a[i]===void 0&&(a[i]=u[i]);return{$$typeof:Zt,type:e,key:o,ref:r,props:a,_owner:Do.current}}function zp(e,n){return{$$typeof:Zt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt}function _p(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ir=/\/+/g;function ga(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):n.toString(36)}function mi(e,n,t,i,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(o){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Zt:case ip:r=!0}}if(r)return r=e,a=a(r),e=i===""?"."+ga(r,0):i,Nr(a)?(t="",e!=null&&(t=e.replace(Ir,"$&/")+"/"),mi(a,n,t,"",function(p){return p})):a!=null&&(Vo(a)&&(a=zp(a,t+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(Ir,"$&/")+"/")+e)),n.push(a)),1;if(r=0,i=i===""?".":i+":",Nr(e))for(var u=0;u<e.length;u++){o=e[u];var s=i+ga(o,u);r+=mi(o,n,t,s,a)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=i+ga(o,u++),r+=mi(o,n,t,s,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function ei(e,n,t){if(e==null)return e;var i=[],a=0;return mi(e,i,"","",function(o){return n.call(t,o,a++)}),i}function yp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},gi={transition:null},mp={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Do};function $u(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ei,forEach:function(e,n,t){ei(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ei(e,function(){n++}),n},toArray:function(e){return ei(e,function(n){return n})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=at;K.Fragment=ap;K.Profiler=rp;K.PureComponent=Bo;K.StrictMode=op;K.Suspense=pp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;K.act=$u;K.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=qu({},e.props),a=e.key,o=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,r=Do.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Yu.call(n,s)&&!Gu.hasOwnProperty(s)&&(i[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:Zt,type:e.type,key:a,ref:o,props:i,_owner:r}};K.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:up,_context:e},e.Consumer=e};K.createElement=Ju;K.createFactory=function(e){var n=Ju.bind(null,e);return n.type=e,n};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:lp,render:e}};K.isValidElement=Vo;K.lazy=function(e){return{$$typeof:cp,_payload:{_status:-1,_result:e},_init:yp}};K.memo=function(e,n){return{$$typeof:dp,type:e,compare:n===void 0?null:n}};K.startTransition=function(e){var n=gi.transition;gi.transition={};try{e()}finally{gi.transition=n}};K.unstable_act=$u;K.useCallback=function(e,n){return ue.current.useCallback(e,n)};K.useContext=function(e){return ue.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};K.useEffect=function(e,n){return ue.current.useEffect(e,n)};K.useId=function(){return ue.current.useId()};K.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};K.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};K.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};K.useMemo=function(e,n){return ue.current.useMemo(e,n)};K.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};K.useRef=function(e){return ue.current.useRef(e)};K.useState=function(e){return ue.current.useState(e)};K.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};K.useTransition=function(){return ue.current.useTransition()};K.version="18.3.1";Uu.exports=K;var Fo=Uu.exports;const gp=tp(Fo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=Fo,fp=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),hp=Object.prototype.hasOwnProperty,Ap=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function Xu(e,n,t){var i,a={},o=null,r=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(r=n.ref);for(i in n)hp.call(n,i)&&!vp.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)a[i]===void 0&&(a[i]=n[i]);return{$$typeof:fp,type:e,key:o,ref:r,props:a,_owner:Ap.current}}Xi.Fragment=jp;Xi.jsx=Xu;Xi.jsxs=Xu;Wu.exports=Xi;var ae=Wu.exports,Ua={},es={exports:{}},ge={},ns={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,b){var C=A.length;A.push(b);e:for(;0<C;){var W=C-1>>>1,Q=A[W];if(0<a(Q,b))A[W]=b,A[C]=Q,C=W;else break e}}function t(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var b=A[0],C=A.pop();if(C!==b){A[0]=C;e:for(var W=0,Q=A.length,$t=Q>>>1;W<$t;){var yn=2*(W+1)-1,ma=A[yn],mn=yn+1,Xt=A[mn];if(0>a(ma,C))mn<Q&&0>a(Xt,ma)?(A[W]=Xt,A[mn]=C,W=mn):(A[W]=ma,A[yn]=C,W=yn);else if(mn<Q&&0>a(Xt,C))A[W]=Xt,A[mn]=C,W=mn;else break e}}return b}function a(A,b){var C=A.sortIndex-b.sortIndex;return C!==0?C:A.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var r=Date,u=r.now();e.unstable_now=function(){return r.now()-u}}var s=[],p=[],_=1,z=null,k=3,g=!1,w=!1,f=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(A){for(var b=t(p);b!==null;){if(b.callback===null)i(p);else if(b.startTime<=A)i(p),b.sortIndex=b.expirationTime,n(s,b);else break;b=t(p)}}function y(A){if(f=!1,c(A),!w)if(t(s)!==null)w=!0,_a(h);else{var b=t(p);b!==null&&ya(y,b.startTime-A)}}function h(A,b){w=!1,f&&(f=!1,d(P),P=-1),g=!0;var C=k;try{for(c(b),z=t(s);z!==null&&(!(z.expirationTime>b)||A&&!Pe());){var W=z.callback;if(typeof W=="function"){z.callback=null,k=z.priorityLevel;var Q=W(z.expirationTime<=b);b=e.unstable_now(),typeof Q=="function"?z.callback=Q:z===t(s)&&i(s),c(b)}else i(s);z=t(s)}if(z!==null)var $t=!0;else{var yn=t(p);yn!==null&&ya(y,yn.startTime-b),$t=!1}return $t}finally{z=null,k=C,g=!1}}var v=!1,S=null,P=-1,F=5,E=-1;function Pe(){return!(e.unstable_now()-E<F)}function ut(){if(S!==null){var A=e.unstable_now();E=A;var b=!0;try{b=S(!0,A)}finally{b?st():(v=!1,S=null)}}else v=!1}var st;if(typeof l=="function")st=function(){l(ut)};else if(typeof MessageChannel<"u"){var Rr=new MessageChannel,np=Rr.port2;Rr.port1.onmessage=ut,st=function(){np.postMessage(null)}}else st=function(){I(ut,0)};function _a(A){S=A,v||(v=!0,st())}function ya(A,b){P=I(function(){A(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,_a(h))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var C=k;k=b;try{return A()}finally{k=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,b){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var C=k;k=A;try{return b()}finally{k=C}},e.unstable_scheduleCallback=function(A,b,C){var W=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?W+C:W):C=W,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=C+Q,A={id:_++,callback:b,priorityLevel:A,startTime:C,expirationTime:Q,sortIndex:-1},C>W?(A.sortIndex=C,n(p,A),t(s)===null&&A===t(p)&&(f?(d(P),P=-1):f=!0,ya(y,C-W))):(A.sortIndex=Q,n(s,A),w||g||(w=!0,_a(h))),A},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(A){var b=k;return function(){var C=k;k=b;try{return A.apply(this,arguments)}finally{k=C}}}})(ts);ns.exports=ts;var Sp=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=Fo,me=Sp;function m(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,Et={};function En(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Et[e]=n,e=0;e<n.length;e++)is.add(n[e])}var Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lr={},Br={};function Cp(e){return Ha.call(Br,e)?!0:Ha.call(Lr,e)?!1:bp.test(e)?Br[e]=!0:(Lr[e]=!0,!1)}function Kp(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ep(e,n,t,i){if(n===null||typeof n>"u"||Kp(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,i,a,o,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=r}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];X[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){X[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){X[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){X[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){X[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wo=/[\-:]([a-z])/g;function Uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wo,Uo);X[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wo,Uo);X[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wo,Uo);X[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){X[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});X.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){X[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ho(e,n,t,i){var a=X.hasOwnProperty(n)?X[n]:null;(a!==null?a.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ep(n,t,a,i)&&(t=null),i||a===null?Cp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,i=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Qe=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),qo=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),as=Symbol.for("react.provider"),os=Symbol.for("react.context"),Zo=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),Qo=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),rs=Symbol.for("react.offscreen"),xr=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=xr&&e[xr]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,wa;function mt(e){if(wa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wa=n&&n[1]||""}return`
`+wa+e}var fa=!1;function ja(e,n){if(!e||fa)return"";fa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var i=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){i=p}e.call(n.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),o=i.stack.split(`
`),r=a.length-1,u=o.length-1;1<=r&&0<=u&&a[r]!==o[u];)u--;for(;1<=r&&0<=u;r--,u--)if(a[r]!==o[u]){if(r!==1||u!==1)do if(r--,u--,0>u||a[r]!==o[u]){var s=`
`+a[r].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=r&&0<=u);break}}}finally{fa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?mt(e):""}function Tp(e){switch(e.tag){case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return mt("Suspense");case 19:return mt("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Rn:return"Portal";case qa:return"Profiler";case qo:return"StrictMode";case Za:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case os:return(e.displayName||"Context")+".Consumer";case as:return(e._context.displayName||"Context")+".Provider";case Zo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qo:return n=e.displayName||null,n!==null?n:Ya(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Ya(e(n))}catch{}}return null}function Op(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(n);case 8:return n===qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rp(e){var n=us(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){i=""+r,o.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ti(e){e._valueTracker||(e._valueTracker=Rp(e))}function ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=us(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ga(e,n){var t=n.checked;return D({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Dr(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ls(e,n){n=n.checked,n!=null&&Ho(e,"checked",n,!1)}function Ja(e,n){ls(e,n);var t=dn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$a(e,n.type,t):n.hasOwnProperty("defaultValue")&&$a(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vr(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,n,t){(n!=="number"||Ki(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gt=Array.isArray;function Hn(e,n,t,i){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&i&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Xa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(m(91));return D({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(m(92));if(gt(t)){if(1<t.length)throw Error(m(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function ps(e,n){var t=dn(n.value),i=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Wr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,cs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mp=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){Mp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function ks(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function zs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,a=ks(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,a):e[t]=a}}var Np=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,n){if(n){if(Np[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(m(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(m(61))}if(n.style!=null&&typeof n.style!="object")throw Error(m(62))}}function to(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,qn=null,Zn=null;function Ur(e){if(e=Gt(e)){if(typeof ao!="function")throw Error(m(280));var n=e.stateNode;n&&(n=aa(n),ao(e.stateNode,e.type,n))}}function _s(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function ys(){if(qn){var e=qn,n=Zn;if(Zn=qn=null,Ur(e),n)for(e=0;e<n.length;e++)Ur(n[e])}}function ms(e,n){return e(n)}function gs(){}var ha=!1;function ws(e,n,t){if(ha)return e(n,t);ha=!0;try{return ms(e,n,t)}finally{ha=!1,(qn!==null||Zn!==null)&&(gs(),ys())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var i=aa(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,n,typeof t));return t}var oo=!1;if(Ue)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){oo=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{oo=!1}function Ip(e,n,t,i,a,o,r,u,s){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(_){this.onError(_)}}var ht=!1,Ei=null,Ti=!1,ro=null,Lp={onError:function(e){ht=!0,Ei=e}};function Bp(e,n,t,i,a,o,r,u,s){ht=!1,Ei=null,Ip.apply(Lp,arguments)}function xp(e,n,t,i,a,o,r,u,s){if(Bp.apply(this,arguments),ht){if(ht){var p=Ei;ht=!1,Ei=null}else throw Error(m(198));Ti||(Ti=!0,ro=p)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function fs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Hr(e){if(Tn(e)!==e)throw Error(m(188))}function Dp(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(m(188));return n!==e?null:e}for(var t=e,i=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return Hr(a),e;if(o===i)return Hr(a),n;o=o.sibling}throw Error(m(188))}if(t.return!==i.return)t=a,i=o;else{for(var r=!1,u=a.child;u;){if(u===t){r=!0,t=a,i=o;break}if(u===i){r=!0,i=a,t=o;break}u=u.sibling}if(!r){for(u=o.child;u;){if(u===t){r=!0,t=o,i=a;break}if(u===i){r=!0,i=o,t=a;break}u=u.sibling}if(!r)throw Error(m(189))}}if(t.alternate!==i)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:n}function js(e){return e=Dp(e),e!==null?hs(e):null}function hs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hs(e);if(n!==null)return n;e=e.sibling}return null}var As=me.unstable_scheduleCallback,qr=me.unstable_cancelCallback,Vp=me.unstable_shouldYield,Fp=me.unstable_requestPaint,U=me.unstable_now,Wp=me.unstable_getCurrentPriorityLevel,Go=me.unstable_ImmediatePriority,vs=me.unstable_UserBlockingPriority,Oi=me.unstable_NormalPriority,Up=me.unstable_LowPriority,Ss=me.unstable_IdlePriority,ea=null,Le=null;function Hp(e){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ea,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Qp,qp=Math.log,Zp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(qp(e)/Zp|0)|0}var ai=64,oi=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes,r=t&268435455;if(r!==0){var u=r&~a;u!==0?i=wt(u):(o&=r,o!==0&&(i=wt(o)))}else r=t&~a,r!==0?i=wt(r):o!==0&&(i=wt(o));if(i===0)return 0;if(n!==0&&n!==i&&!(n&a)&&(a=i&-i,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Te(n),a=1<<t,i|=e[t],n&=~a;return i}function Yp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var r=31-Te(o),u=1<<r,s=a[r];s===-1?(!(u&t)||u&i)&&(a[r]=Yp(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Aa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Jp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Te(t),o=1<<a;n[a]=0,i[a]=-1,e[a]=-1,t&=~o}}function Jo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Te(t),a=1<<i;a&n|e[i]&n&&(e[i]|=n),t&=~a}}var O=0;function bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cs,$o,Ks,Es,Ts,so=!1,ri=[],tn=null,an=null,on=null,Rt=new Map,Mt=new Map,$e=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Rt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(n.pointerId)}}function dt(e,n,t,i,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},n!==null&&(n=Gt(n),n!==null&&$o(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Xp(e,n,t,i,a){switch(n){case"focusin":return tn=dt(tn,e,n,t,i,a),!0;case"dragenter":return an=dt(an,e,n,t,i,a),!0;case"mouseover":return on=dt(on,e,n,t,i,a),!0;case"pointerover":var o=a.pointerId;return Rt.set(o,dt(Rt.get(o)||null,e,n,t,i,a)),!0;case"gotpointercapture":return o=a.pointerId,Mt.set(o,dt(Mt.get(o)||null,e,n,t,i,a)),!0}return!1}function Os(e){var n=fn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=fs(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){Ks(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=lo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);io=i,t.target.dispatchEvent(i),io=null}else return n=Gt(t),n!==null&&$o(n),e.blockedOn=t,!1;n.shift()}return!0}function Qr(e,n,t){wi(e)&&t.delete(n)}function ed(){so=!1,tn!==null&&wi(tn)&&(tn=null),an!==null&&wi(an)&&(an=null),on!==null&&wi(on)&&(on=null),Rt.forEach(Qr),Mt.forEach(Qr)}function ct(e,n){e.blockedOn===n&&(e.blockedOn=null,so||(so=!0,me.unstable_scheduleCallback(me.unstable_NormalPriority,ed)))}function Nt(e){function n(a){return ct(a,e)}if(0<ri.length){ct(ri[0],e);for(var t=1;t<ri.length;t++){var i=ri[t];i.blockedOn===e&&(i.blockedOn=null)}}for(tn!==null&&ct(tn,e),an!==null&&ct(an,e),on!==null&&ct(on,e),Rt.forEach(n),Mt.forEach(n),t=0;t<$e.length;t++)i=$e[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<$e.length&&(t=$e[0],t.blockedOn===null);)Os(t),t.blockedOn===null&&$e.shift()}var Qn=Qe.ReactCurrentBatchConfig,Mi=!0;function nd(e,n,t,i){var a=O,o=Qn.transition;Qn.transition=null;try{O=1,Xo(e,n,t,i)}finally{O=a,Qn.transition=o}}function td(e,n,t,i){var a=O,o=Qn.transition;Qn.transition=null;try{O=4,Xo(e,n,t,i)}finally{O=a,Qn.transition=o}}function Xo(e,n,t,i){if(Mi){var a=lo(e,n,t,i);if(a===null)Ra(e,n,i,Ni,t),Zr(e,i);else if(Xp(a,e,n,t,i))i.stopPropagation();else if(Zr(e,i),n&4&&-1<$p.indexOf(e)){for(;a!==null;){var o=Gt(a);if(o!==null&&Cs(o),o=lo(e,n,t,i),o===null&&Ra(e,n,i,Ni,t),o===a)break;a=o}a!==null&&i.stopPropagation()}else Ra(e,n,i,null,t)}}var Ni=null;function lo(e,n,t,i){if(Ni=null,e=Yo(i),e=fn(e),e!==null)if(n=Tn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=fs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ni=e,null}function Rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case Go:return 1;case vs:return 4;case Oi:case Up:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var en=null,er=null,fi=null;function Ms(){if(fi)return fi;var e,n=er,t=n.length,i,a="value"in en?en.value:en.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var r=t-e;for(i=1;i<=r&&n[t-i]===a[o-i];i++);return fi=a.slice(e,1<i?1-i:void 0)}function ji(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Yr(){return!1}function we(e){function n(t,i,a,o,r){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:Yr,this.isPropagationStopped=Yr,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=we(ot),Yt=D({},ot,{view:0,detail:0}),id=we(Yt),va,Sa,kt,na=D({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kt&&(kt&&e.type==="mousemove"?(va=e.screenX-kt.screenX,Sa=e.screenY-kt.screenY):Sa=va=0,kt=e),va)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),Gr=we(na),ad=D({},na,{dataTransfer:0}),od=we(ad),rd=D({},Yt,{relatedTarget:0}),Pa=we(rd),ud=D({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=we(ud),ld=D({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=we(ld),dd=D({},ot,{data:0}),Jr=we(dd),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zd[e])?!!n[e]:!1}function tr(){return _d}var yd=D({},Yt,{key:function(e){if(e.key){var n=cd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),md=we(yd),gd=D({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$r=we(gd),wd=D({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),fd=we(wd),jd=D({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),hd=we(jd),Ad=D({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vd=we(Ad),Sd=[9,13,27,32],ir=Ue&&"CompositionEvent"in window,At=null;Ue&&"documentMode"in document&&(At=document.documentMode);var Pd=Ue&&"TextEvent"in window&&!At,Ns=Ue&&(!ir||At&&8<At&&11>=At),Xr=String.fromCharCode(32),eu=!1;function Is(e,n){switch(e){case"keyup":return Sd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ls(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function bd(e,n){switch(e){case"compositionend":return Ls(n);case"keypress":return n.which!==32?null:(eu=!0,Xr);case"textInput":return e=n.data,e===Xr&&eu?null:e;default:return null}}function Cd(e,n){if(Nn)return e==="compositionend"||!ir&&Is(e,n)?(e=Ms(),fi=er=en=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ns&&n.locale!=="ko"?null:n.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kd[e.type]:n==="textarea"}function Bs(e,n,t,i){_s(i),n=Ii(n,"onChange"),0<n.length&&(t=new nr("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var vt=null,It=null;function Ed(e){Ys(e,0)}function ta(e){var n=Bn(e);if(ss(n))return e}function Td(e,n){if(e==="change")return n}var xs=!1;if(Ue){var ba;if(Ue){var Ca="oninput"in document;if(!Ca){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Ca=typeof tu.oninput=="function"}ba=Ca}else ba=!1;xs=ba&&(!document.documentMode||9<document.documentMode)}function iu(){vt&&(vt.detachEvent("onpropertychange",Ds),It=vt=null)}function Ds(e){if(e.propertyName==="value"&&ta(It)){var n=[];Bs(n,It,e,Yo(e)),ws(Ed,n)}}function Od(e,n,t){e==="focusin"?(iu(),vt=n,It=t,vt.attachEvent("onpropertychange",Ds)):e==="focusout"&&iu()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(It)}function Md(e,n){if(e==="click")return ta(n)}function Nd(e,n){if(e==="input"||e==="change")return ta(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:Id;function Lt(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!Ha.call(n,a)||!Re(e[a],n[a]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,n){var t=au(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=au(t)}}function Vs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fs(){for(var e=window,n=Ki();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ki(e.document)}return n}function ar(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ld(e){var n=Fs(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vs(t.ownerDocument.documentElement,t)){if(i!==null&&ar(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(i.start,a);i=i.end===void 0?o:Math.min(i.end,a),!e.extend&&o>i&&(a=i,i=o,o=a),a=ou(t,o);var r=ou(t,i);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Ue&&"documentMode"in document&&11>=document.documentMode,In=null,po=null,St=null,co=!1;function ru(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;co||In==null||In!==Ki(i)||(i=In,"selectionStart"in i&&ar(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),St&&Lt(St,i)||(St=i,i=Ii(po,"onSelect"),0<i.length&&(n=new nr("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=In)))}function si(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ln={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Ka={},Ws={};Ue&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function ia(e){if(Ka[e])return Ka[e];if(!Ln[e])return e;var n=Ln[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ws)return Ka[e]=n[t];return e}var Us=ia("animationend"),Hs=ia("animationiteration"),qs=ia("animationstart"),Zs=ia("transitionend"),Qs=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,n){Qs.set(e,n),En(n,[e])}for(var Ea=0;Ea<uu.length;Ea++){var Ta=uu[Ea],xd=Ta.toLowerCase(),Dd=Ta[0].toUpperCase()+Ta.slice(1);kn(xd,"on"+Dd)}kn(Us,"onAnimationEnd");kn(Hs,"onAnimationIteration");kn(qs,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Zs,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ft="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(ft));function su(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,xp(i,n,void 0,e),e.currentTarget=null}function Ys(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],a=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var r=i.length-1;0<=r;r--){var u=i[r],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==o&&a.isPropagationStopped())break e;su(a,u,p),o=s}else for(r=0;r<i.length;r++){if(u=i[r],s=u.instance,p=u.currentTarget,u=u.listener,s!==o&&a.isPropagationStopped())break e;su(a,u,p),o=s}}}if(Ti)throw e=ro,Ti=!1,ro=null,e}function M(e,n){var t=n[mo];t===void 0&&(t=n[mo]=new Set);var i=e+"__bubble";t.has(i)||(Gs(n,e,2,!1),t.add(i))}function Oa(e,n,t){var i=0;n&&(i|=4),Gs(t,e,i,n)}var li="_reactListening"+Math.random().toString(36).slice(2);function Bt(e){if(!e[li]){e[li]=!0,is.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Oa(t,!1,e),Oa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[li]||(n[li]=!0,Oa("selectionchange",!1,n))}}function Gs(e,n,t,i){switch(Rs(n)){case 1:var a=nd;break;case 4:a=td;break;default:a=Xo}t=a.bind(null,n,t,e),a=void 0,!oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ra(e,n,t,i,a){var o=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var u=i.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(r===4)for(r=i.return;r!==null;){var s=r.tag;if((s===3||s===4)&&(s=r.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;r=r.return}for(;u!==null;){if(r=fn(u),r===null)return;if(s=r.tag,s===5||s===6){i=o=r;continue e}u=u.parentNode}}i=i.return}ws(function(){var p=o,_=Yo(t),z=[];e:{var k=Qs.get(e);if(k!==void 0){var g=nr,w=e;switch(e){case"keypress":if(ji(t)===0)break e;case"keydown":case"keyup":g=md;break;case"focusin":w="focus",g=Pa;break;case"focusout":w="blur",g=Pa;break;case"beforeblur":case"afterblur":g=Pa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fd;break;case Us:case Hs:case qs:g=sd;break;case Zs:g=hd;break;case"scroll":g=id;break;case"wheel":g=vd;break;case"copy":case"cut":case"paste":g=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$r}var f=(n&4)!==0,I=!f&&e==="scroll",d=f?k!==null?k+"Capture":null:k;f=[];for(var l=p,c;l!==null;){c=l;var y=c.stateNode;if(c.tag===5&&y!==null&&(c=y,d!==null&&(y=Ot(l,d),y!=null&&f.push(xt(l,y,c)))),I)break;l=l.return}0<f.length&&(k=new g(k,w,null,t,_),z.push({event:k,listeners:f}))}}if(!(n&7)){e:{if(k=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",k&&t!==io&&(w=t.relatedTarget||t.fromElement)&&(fn(w)||w[He]))break e;if((g||k)&&(k=_.window===_?_:(k=_.ownerDocument)?k.defaultView||k.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=p,w=w?fn(w):null,w!==null&&(I=Tn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=p),g!==w)){if(f=Gr,y="onMouseLeave",d="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(f=$r,y="onPointerLeave",d="onPointerEnter",l="pointer"),I=g==null?k:Bn(g),c=w==null?k:Bn(w),k=new f(y,l+"leave",g,t,_),k.target=I,k.relatedTarget=c,y=null,fn(_)===p&&(f=new f(d,l+"enter",w,t,_),f.target=c,f.relatedTarget=I,y=f),I=y,g&&w)n:{for(f=g,d=w,l=0,c=f;c;c=On(c))l++;for(c=0,y=d;y;y=On(y))c++;for(;0<l-c;)f=On(f),l--;for(;0<c-l;)d=On(d),c--;for(;l--;){if(f===d||d!==null&&f===d.alternate)break n;f=On(f),d=On(d)}f=null}else f=null;g!==null&&lu(z,k,g,f,!1),w!==null&&I!==null&&lu(z,I,w,f,!0)}}e:{if(k=p?Bn(p):window,g=k.nodeName&&k.nodeName.toLowerCase(),g==="select"||g==="input"&&k.type==="file")var h=Td;else if(nu(k))if(xs)h=Nd;else{h=Rd;var v=Od}else(g=k.nodeName)&&g.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(h=Md);if(h&&(h=h(e,p))){Bs(z,h,t,_);break e}v&&v(e,k,p),e==="focusout"&&(v=k._wrapperState)&&v.controlled&&k.type==="number"&&$a(k,"number",k.value)}switch(v=p?Bn(p):window,e){case"focusin":(nu(v)||v.contentEditable==="true")&&(In=v,po=p,St=null);break;case"focusout":St=po=In=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,ru(z,t,_);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":ru(z,t,_)}var S;if(ir)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nn?Is(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ns&&t.locale!=="ko"&&(Nn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nn&&(S=Ms()):(en=_,er="value"in en?en.value:en.textContent,Nn=!0)),v=Ii(p,P),0<v.length&&(P=new Jr(P,e,null,t,_),z.push({event:P,listeners:v}),S?P.data=S:(S=Ls(t),S!==null&&(P.data=S)))),(S=Pd?bd(e,t):Cd(e,t))&&(p=Ii(p,"onBeforeInput"),0<p.length&&(_=new Jr("onBeforeInput","beforeinput",null,t,_),z.push({event:_,listeners:p}),_.data=S))}Ys(z,n)})}function xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ii(e,n){for(var t=n+"Capture",i=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ot(e,t),o!=null&&i.unshift(xt(e,o,a)),o=Ot(e,n),o!=null&&i.push(xt(e,o,a))),e=e.return}return i}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,n,t,i,a){for(var o=n._reactName,r=[];t!==null&&t!==i;){var u=t,s=u.alternate,p=u.stateNode;if(s!==null&&s===i)break;u.tag===5&&p!==null&&(u=p,a?(s=Ot(t,o),s!=null&&r.unshift(xt(t,s,u))):a||(s=Ot(t,o),s!=null&&r.push(xt(t,s,u)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var Fd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Fd,`
`).replace(Wd,"")}function pi(e,n,t){if(n=pu(n),pu(e)!==n&&t)throw Error(m(425))}function Li(){}var ko=null,zo=null;function _o(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Ud=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(qd)}:yo;function qd(e){setTimeout(function(){throw e})}function Ma(e,n){var t=n,i=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(i===0){e.removeChild(a),Nt(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=a}while(t);Nt(n)}function rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var rt=Math.random().toString(36).slice(2),Ie="__reactFiber$"+rt,Dt="__reactProps$"+rt,He="__reactContainer$"+rt,mo="__reactEvents$"+rt,Zd="__reactListeners$"+rt,Qd="__reactHandles$"+rt;function fn(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cu(e);e!==null;){if(t=e[Ie])return t;e=cu(e)}return n}e=t,t=e.parentNode}return null}function Gt(e){return e=e[Ie]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function aa(e){return e[Dt]||null}var go=[],xn=-1;function zn(e){return{current:e}}function N(e){0>xn||(e.current=go[xn],go[xn]=null,xn--)}function R(e,n){xn++,go[xn]=e.current,e.current=n}var cn={},ie=zn(cn),de=zn(!1),Sn=cn;function $n(e,n){var t=e.type.contextTypes;if(!t)return cn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function ce(e){return e=e.childContextTypes,e!=null}function Bi(){N(de),N(ie)}function ku(e,n,t){if(ie.current!==cn)throw Error(m(168));R(ie,n),R(de,t)}function Js(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var a in i)if(!(a in n))throw Error(m(108,Op(e)||"Unknown",a));return D({},t,i)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Sn=ie.current,R(ie,e),R(de,de.current),!0}function zu(e,n,t){var i=e.stateNode;if(!i)throw Error(m(169));t?(e=Js(e,n,Sn),i.__reactInternalMemoizedMergedChildContext=e,N(de),N(ie),R(ie,e)):N(de),R(de,t)}var De=null,oa=!1,Na=!1;function $s(e){De===null?De=[e]:De.push(e)}function Yd(e){oa=!0,$s(e)}function _n(){if(!Na&&De!==null){Na=!0;var e=0,n=O;try{var t=De;for(O=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}De=null,oa=!1}catch(a){throw De!==null&&(De=De.slice(e+1)),As(Go,_n),a}finally{O=n,Na=!1}}return null}var Dn=[],Vn=0,Di=null,Vi=0,fe=[],je=0,Pn=null,Ve=1,Fe="";function gn(e,n){Dn[Vn++]=Vi,Dn[Vn++]=Di,Di=e,Vi=n}function Xs(e,n,t){fe[je++]=Ve,fe[je++]=Fe,fe[je++]=Pn,Pn=e;var i=Ve;e=Fe;var a=32-Te(i)-1;i&=~(1<<a),t+=1;var o=32-Te(n)+a;if(30<o){var r=a-a%5;o=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Ve=1<<32-Te(n)+a|t<<a|i,Fe=o+e}else Ve=1<<o|t<<a|i,Fe=e}function or(e){e.return!==null&&(gn(e,1),Xs(e,1,0))}function rr(e){for(;e===Di;)Di=Dn[--Vn],Dn[Vn]=null,Vi=Dn[--Vn],Dn[Vn]=null;for(;e===Pn;)Pn=fe[--je],fe[je]=null,Fe=fe[--je],fe[je]=null,Ve=fe[--je],fe[je]=null}var ye=null,_e=null,L=!1,Ee=null;function el(e,n){var t=he(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _u(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,_e=rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pn!==null?{id:Ve,overflow:Fe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=he(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,_e=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fo(e){if(L){var n=_e;if(n){var t=n;if(!_u(e,n)){if(wo(e))throw Error(m(418));n=rn(t.nextSibling);var i=ye;n&&_u(e,n)?el(i,t):(e.flags=e.flags&-4097|2,L=!1,ye=e)}}else{if(wo(e))throw Error(m(418));e.flags=e.flags&-4097|2,L=!1,ye=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function di(e){if(e!==ye)return!1;if(!L)return yu(e),L=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_o(e.type,e.memoizedProps)),n&&(n=_e)){if(wo(e))throw nl(),Error(m(418));for(;n;)el(e,n),n=rn(n.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=rn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=ye?rn(e.stateNode.nextSibling):null;return!0}function nl(){for(var e=_e;e;)e=rn(e.nextSibling)}function Xn(){_e=ye=null,L=!1}function ur(e){Ee===null?Ee=[e]:Ee.push(e)}var Gd=Qe.ReactCurrentBatchConfig;function zt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(m(309));var i=t.stateNode}if(!i)throw Error(m(147,e));var a=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(r){var u=a.refs;r===null?delete u[o]:u[o]=r},n._stringRef=o,n)}if(typeof e!="string")throw Error(m(284));if(!t._owner)throw Error(m(290,e))}return e}function ci(e,n){throw e=Object.prototype.toString.call(n),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function mu(e){var n=e._init;return n(e._payload)}function tl(e){function n(d,l){if(e){var c=d.deletions;c===null?(d.deletions=[l],d.flags|=16):c.push(l)}}function t(d,l){if(!e)return null;for(;l!==null;)n(d,l),l=l.sibling;return null}function i(d,l){for(d=new Map;l!==null;)l.key!==null?d.set(l.key,l):d.set(l.index,l),l=l.sibling;return d}function a(d,l){return d=pn(d,l),d.index=0,d.sibling=null,d}function o(d,l,c){return d.index=c,e?(c=d.alternate,c!==null?(c=c.index,c<l?(d.flags|=2,l):c):(d.flags|=2,l)):(d.flags|=1048576,l)}function r(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,l,c,y){return l===null||l.tag!==6?(l=Fa(c,d.mode,y),l.return=d,l):(l=a(l,c),l.return=d,l)}function s(d,l,c,y){var h=c.type;return h===Mn?_(d,l,c.props.children,y,c.key):l!==null&&(l.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===Ge&&mu(h)===l.type)?(y=a(l,c.props),y.ref=zt(d,l,c),y.return=d,y):(y=Ci(c.type,c.key,c.props,null,d.mode,y),y.ref=zt(d,l,c),y.return=d,y)}function p(d,l,c,y){return l===null||l.tag!==4||l.stateNode.containerInfo!==c.containerInfo||l.stateNode.implementation!==c.implementation?(l=Wa(c,d.mode,y),l.return=d,l):(l=a(l,c.children||[]),l.return=d,l)}function _(d,l,c,y,h){return l===null||l.tag!==7?(l=vn(c,d.mode,y,h),l.return=d,l):(l=a(l,c),l.return=d,l)}function z(d,l,c){if(typeof l=="string"&&l!==""||typeof l=="number")return l=Fa(""+l,d.mode,c),l.return=d,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case ni:return c=Ci(l.type,l.key,l.props,null,d.mode,c),c.ref=zt(d,null,l),c.return=d,c;case Rn:return l=Wa(l,d.mode,c),l.return=d,l;case Ge:var y=l._init;return z(d,y(l._payload),c)}if(gt(l)||lt(l))return l=vn(l,d.mode,c,null),l.return=d,l;ci(d,l)}return null}function k(d,l,c,y){var h=l!==null?l.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return h!==null?null:u(d,l,""+c,y);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ni:return c.key===h?s(d,l,c,y):null;case Rn:return c.key===h?p(d,l,c,y):null;case Ge:return h=c._init,k(d,l,h(c._payload),y)}if(gt(c)||lt(c))return h!==null?null:_(d,l,c,y,null);ci(d,c)}return null}function g(d,l,c,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(c)||null,u(l,d,""+y,h);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ni:return d=d.get(y.key===null?c:y.key)||null,s(l,d,y,h);case Rn:return d=d.get(y.key===null?c:y.key)||null,p(l,d,y,h);case Ge:var v=y._init;return g(d,l,c,v(y._payload),h)}if(gt(y)||lt(y))return d=d.get(c)||null,_(l,d,y,h,null);ci(l,y)}return null}function w(d,l,c,y){for(var h=null,v=null,S=l,P=l=0,F=null;S!==null&&P<c.length;P++){S.index>P?(F=S,S=null):F=S.sibling;var E=k(d,S,c[P],y);if(E===null){S===null&&(S=F);break}e&&S&&E.alternate===null&&n(d,S),l=o(E,l,P),v===null?h=E:v.sibling=E,v=E,S=F}if(P===c.length)return t(d,S),L&&gn(d,P),h;if(S===null){for(;P<c.length;P++)S=z(d,c[P],y),S!==null&&(l=o(S,l,P),v===null?h=S:v.sibling=S,v=S);return L&&gn(d,P),h}for(S=i(d,S);P<c.length;P++)F=g(S,d,P,c[P],y),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?P:F.key),l=o(F,l,P),v===null?h=F:v.sibling=F,v=F);return e&&S.forEach(function(Pe){return n(d,Pe)}),L&&gn(d,P),h}function f(d,l,c,y){var h=lt(c);if(typeof h!="function")throw Error(m(150));if(c=h.call(c),c==null)throw Error(m(151));for(var v=h=null,S=l,P=l=0,F=null,E=c.next();S!==null&&!E.done;P++,E=c.next()){S.index>P?(F=S,S=null):F=S.sibling;var Pe=k(d,S,E.value,y);if(Pe===null){S===null&&(S=F);break}e&&S&&Pe.alternate===null&&n(d,S),l=o(Pe,l,P),v===null?h=Pe:v.sibling=Pe,v=Pe,S=F}if(E.done)return t(d,S),L&&gn(d,P),h;if(S===null){for(;!E.done;P++,E=c.next())E=z(d,E.value,y),E!==null&&(l=o(E,l,P),v===null?h=E:v.sibling=E,v=E);return L&&gn(d,P),h}for(S=i(d,S);!E.done;P++,E=c.next())E=g(S,d,P,E.value,y),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?P:E.key),l=o(E,l,P),v===null?h=E:v.sibling=E,v=E);return e&&S.forEach(function(ut){return n(d,ut)}),L&&gn(d,P),h}function I(d,l,c,y){if(typeof c=="object"&&c!==null&&c.type===Mn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ni:e:{for(var h=c.key,v=l;v!==null;){if(v.key===h){if(h=c.type,h===Mn){if(v.tag===7){t(d,v.sibling),l=a(v,c.props.children),l.return=d,d=l;break e}}else if(v.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===Ge&&mu(h)===v.type){t(d,v.sibling),l=a(v,c.props),l.ref=zt(d,v,c),l.return=d,d=l;break e}t(d,v);break}else n(d,v);v=v.sibling}c.type===Mn?(l=vn(c.props.children,d.mode,y,c.key),l.return=d,d=l):(y=Ci(c.type,c.key,c.props,null,d.mode,y),y.ref=zt(d,l,c),y.return=d,d=y)}return r(d);case Rn:e:{for(v=c.key;l!==null;){if(l.key===v)if(l.tag===4&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){t(d,l.sibling),l=a(l,c.children||[]),l.return=d,d=l;break e}else{t(d,l);break}else n(d,l);l=l.sibling}l=Wa(c,d.mode,y),l.return=d,d=l}return r(d);case Ge:return v=c._init,I(d,l,v(c._payload),y)}if(gt(c))return w(d,l,c,y);if(lt(c))return f(d,l,c,y);ci(d,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,l!==null&&l.tag===6?(t(d,l.sibling),l=a(l,c),l.return=d,d=l):(t(d,l),l=Fa(c,d.mode,y),l.return=d,d=l),r(d)):t(d,l)}return I}var et=tl(!0),il=tl(!1),Fi=zn(null),Wi=null,Fn=null,sr=null;function lr(){sr=Fn=Wi=null}function pr(e){var n=Fi.current;N(Fi),e._currentValue=n}function jo(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Wi=e,sr=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function ve(e){var n=e._currentValue;if(sr!==e)if(e={context:e,memoizedValue:n,next:null},Fn===null){if(Wi===null)throw Error(m(308));Fn=e,Wi.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return n}var jn=null;function dr(e){jn===null?jn=[e]:jn.push(e)}function al(e,n,t,i){var a=n.interleaved;return a===null?(t.next=t,dr(n)):(t.next=a.next,a.next=t),n.interleaved=t,qe(e,i)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ol(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,T&2){var a=i.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),i.pending=n,qe(e,t)}return a=i.interleaved,a===null?(n.next=n,dr(i)):(n.next=a.next,a.next=n),i.interleaved=n,qe(e,t)}function hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Jo(e,t)}}function gu(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=r:o=o.next=r,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ui(e,n,t,i){var a=e.updateQueue;Je=!1;var o=a.firstBaseUpdate,r=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var s=u,p=s.next;s.next=null,r===null?o=p:r.next=p,r=s;var _=e.alternate;_!==null&&(_=_.updateQueue,u=_.lastBaseUpdate,u!==r&&(u===null?_.firstBaseUpdate=p:u.next=p,_.lastBaseUpdate=s))}if(o!==null){var z=a.baseState;r=0,_=p=s=null,u=o;do{var k=u.lane,g=u.eventTime;if((i&k)===k){_!==null&&(_=_.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,f=u;switch(k=n,g=t,f.tag){case 1:if(w=f.payload,typeof w=="function"){z=w.call(g,z,k);break e}z=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=f.payload,k=typeof w=="function"?w.call(g,z,k):w,k==null)break e;z=D({},z,k);break e;case 2:Je=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[u]:k.push(u))}else g={eventTime:g,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},_===null?(p=_=g,s=z):_=_.next=g,r|=k;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;k=u,u=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(1);if(_===null&&(s=z),a.baseState=s,a.firstBaseUpdate=p,a.lastBaseUpdate=_,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);Cn|=r,e.lanes=r,e.memoizedState=z}}function wu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],a=i.callback;if(a!==null){if(i.callback=null,i=t,typeof a!="function")throw Error(m(191,a));a.call(i)}}}var Jt={},Be=zn(Jt),Vt=zn(Jt),Ft=zn(Jt);function hn(e){if(e===Jt)throw Error(m(174));return e}function kr(e,n){switch(R(Ft,n),R(Vt,e),R(Be,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:eo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=eo(n,e)}N(Be),R(Be,n)}function nt(){N(Be),N(Vt),N(Ft)}function rl(e){hn(Ft.current);var n=hn(Be.current),t=eo(n,e.type);n!==t&&(R(Vt,e),R(Be,t))}function zr(e){Vt.current===e&&(N(Be),N(Vt))}var B=zn(0);function Hi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ia=[];function _r(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var Ai=Qe.ReactCurrentDispatcher,La=Qe.ReactCurrentBatchConfig,bn=0,x=null,q=null,Y=null,qi=!1,Pt=!1,Wt=0,Jd=0;function ee(){throw Error(m(321))}function yr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Re(e[t],n[t]))return!1;return!0}function mr(e,n,t,i,a,o){if(bn=o,x=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ai.current=e===null||e.memoizedState===null?nc:tc,e=t(i,a),Pt){o=0;do{if(Pt=!1,Wt=0,25<=o)throw Error(m(301));o+=1,Y=q=null,n.updateQueue=null,Ai.current=ic,e=t(i,a)}while(Pt)}if(Ai.current=Zi,n=q!==null&&q.next!==null,bn=0,Y=q=x=null,qi=!1,n)throw Error(m(300));return e}function gr(){var e=Wt!==0;return Wt=0,e}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?x.memoizedState=Y=e:Y=Y.next=e,Y}function Se(){if(q===null){var e=x.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=Y===null?x.memoizedState:Y.next;if(n!==null)Y=n,q=e;else{if(e===null)throw Error(m(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Y===null?x.memoizedState=Y=e:Y=Y.next=e}return Y}function Ut(e,n){return typeof n=="function"?n(e):n}function Ba(e){var n=Se(),t=n.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var i=q,a=i.baseQueue,o=t.pending;if(o!==null){if(a!==null){var r=a.next;a.next=o.next,o.next=r}i.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,i=i.baseState;var u=r=null,s=null,p=o;do{var _=p.lane;if((bn&_)===_)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var z={lane:_,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(u=s=z,r=i):s=s.next=z,x.lanes|=_,Cn|=_}p=p.next}while(p!==null&&p!==o);s===null?r=i:s.next=u,Re(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseState=r,n.baseQueue=s,t.lastRenderedState=i}if(e=t.interleaved,e!==null){a=e;do o=a.lane,x.lanes|=o,Cn|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xa(e){var n=Se(),t=n.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var i=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var r=a=a.next;do o=e(o,r.action),r=r.next;while(r!==a);Re(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function ul(){}function sl(e,n){var t=x,i=Se(),a=n(),o=!Re(i.memoizedState,a);if(o&&(i.memoizedState=a,pe=!0),i=i.queue,wr(dl.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Ht(9,pl.bind(null,t,i,a,n),void 0,null),G===null)throw Error(m(349));bn&30||ll(t,n,a)}return a}function ll(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=x.updateQueue,n===null?(n={lastEffect:null,stores:null},x.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pl(e,n,t,i){n.value=t,n.getSnapshot=i,cl(n)&&kl(e)}function dl(e,n,t){return t(function(){cl(n)&&kl(e)})}function cl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Re(e,t)}catch{return!0}}function kl(e){var n=qe(e,1);n!==null&&Oe(n,e,1,-1)}function fu(e){var n=Ne();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},n.queue=e,e=e.dispatch=ec.bind(null,x,e),[n.memoizedState,e]}function Ht(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=x.updateQueue,n===null?(n={lastEffect:null,stores:null},x.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function zl(){return Se().memoizedState}function vi(e,n,t,i){var a=Ne();x.flags|=e,a.memoizedState=Ht(1|n,t,void 0,i===void 0?null:i)}function ra(e,n,t,i){var a=Se();i=i===void 0?null:i;var o=void 0;if(q!==null){var r=q.memoizedState;if(o=r.destroy,i!==null&&yr(i,r.deps)){a.memoizedState=Ht(n,t,o,i);return}}x.flags|=e,a.memoizedState=Ht(1|n,t,o,i)}function ju(e,n){return vi(8390656,8,e,n)}function wr(e,n){return ra(2048,8,e,n)}function _l(e,n){return ra(4,2,e,n)}function yl(e,n){return ra(4,4,e,n)}function ml(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gl(e,n,t){return t=t!=null?t.concat([e]):null,ra(4,4,ml.bind(null,n,e),t)}function fr(){}function wl(e,n){var t=Se();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&yr(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function fl(e,n){var t=Se();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&yr(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function jl(e,n,t){return bn&21?(Re(t,n)||(t=Ps(),x.lanes|=t,Cn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function $d(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var i=La.transition;La.transition={};try{e(!1),n()}finally{O=t,La.transition=i}}function hl(){return Se().memoizedState}function Xd(e,n,t){var i=ln(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Al(e))vl(n,t);else if(t=al(e,n,t,i),t!==null){var a=re();Oe(t,e,i,a),Sl(t,n,i)}}function ec(e,n,t){var i=ln(e),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Al(e))vl(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var r=n.lastRenderedState,u=o(r,t);if(a.hasEagerState=!0,a.eagerState=u,Re(u,r)){var s=n.interleaved;s===null?(a.next=a,dr(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=al(e,n,a,i),t!==null&&(a=re(),Oe(t,e,i,a),Sl(t,n,i))}}function Al(e){var n=e.alternate;return e===x||n!==null&&n===x}function vl(e,n){Pt=qi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Sl(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Jo(e,t)}}var Zi={readContext:ve,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},nc={readContext:ve,useCallback:function(e,n){return Ne().memoizedState=[e,n===void 0?null:n],e},useContext:ve,useEffect:ju,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,vi(4194308,4,ml.bind(null,n,e),t)},useLayoutEffect:function(e,n){return vi(4194308,4,e,n)},useInsertionEffect:function(e,n){return vi(4,2,e,n)},useMemo:function(e,n){var t=Ne();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Ne();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Xd.bind(null,x,e),[i.memoizedState,e]},useRef:function(e){var n=Ne();return e={current:e},n.memoizedState=e},useState:fu,useDebugValue:fr,useDeferredValue:function(e){return Ne().memoizedState=e},useTransition:function(){var e=fu(!1),n=e[0];return e=$d.bind(null,e[1]),Ne().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=x,a=Ne();if(L){if(t===void 0)throw Error(m(407));t=t()}else{if(t=n(),G===null)throw Error(m(349));bn&30||ll(i,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,ju(dl.bind(null,i,o,e),[e]),i.flags|=2048,Ht(9,pl.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=Ne(),n=G.identifierPrefix;if(L){var t=Fe,i=Ve;t=(i&~(1<<32-Te(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tc={readContext:ve,useCallback:wl,useContext:ve,useEffect:wr,useImperativeHandle:gl,useInsertionEffect:_l,useLayoutEffect:yl,useMemo:fl,useReducer:Ba,useRef:zl,useState:function(){return Ba(Ut)},useDebugValue:fr,useDeferredValue:function(e){var n=Se();return jl(n,q.memoizedState,e)},useTransition:function(){var e=Ba(Ut)[0],n=Se().memoizedState;return[e,n]},useMutableSource:ul,useSyncExternalStore:sl,useId:hl,unstable_isNewReconciler:!1},ic={readContext:ve,useCallback:wl,useContext:ve,useEffect:wr,useImperativeHandle:gl,useInsertionEffect:_l,useLayoutEffect:yl,useMemo:fl,useReducer:xa,useRef:zl,useState:function(){return xa(Ut)},useDebugValue:fr,useDeferredValue:function(e){var n=Se();return q===null?n.memoizedState=e:jl(n,q.memoizedState,e)},useTransition:function(){var e=xa(Ut)[0],n=Se().memoizedState;return[e,n]},useMutableSource:ul,useSyncExternalStore:sl,useId:hl,unstable_isNewReconciler:!1};function Ce(e,n){if(e&&e.defaultProps){n=D({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ho(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:D({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ua={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=re(),a=ln(e),o=We(i,a);o.payload=n,t!=null&&(o.callback=t),n=un(e,o,a),n!==null&&(Oe(n,e,a,i),hi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=re(),a=ln(e),o=We(i,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=un(e,o,a),n!==null&&(Oe(n,e,a,i),hi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=re(),i=ln(e),a=We(t,i);a.tag=2,n!=null&&(a.callback=n),n=un(e,a,i),n!==null&&(Oe(n,e,i,t),hi(n,e,i))}};function hu(e,n,t,i,a,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,r):n.prototype&&n.prototype.isPureReactComponent?!Lt(t,i)||!Lt(a,o):!0}function Pl(e,n,t){var i=!1,a=cn,o=n.contextType;return typeof o=="object"&&o!==null?o=ve(o):(a=ce(n)?Sn:ie.current,i=n.contextTypes,o=(i=i!=null)?$n(e,a):cn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ua,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Au(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&ua.enqueueReplaceState(n,n.state,null)}function Ao(e,n,t,i){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},cr(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=ve(o):(o=ce(n)?Sn:ie.current,a.context=$n(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ho(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ua.enqueueReplaceState(a,a.state,null),Ui(e,t,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function tt(e,n){try{var t="",i=n;do t+=Tp(i),i=i.return;while(i);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function Da(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function vo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ac=typeof WeakMap=="function"?WeakMap:Map;function bl(e,n,t){t=We(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){Yi||(Yi=!0,Mo=i),vo(e,n)},t}function Cl(e,n,t){t=We(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=n.value;t.payload=function(){return i(a)},t.callback=function(){vo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){vo(e,n),typeof i!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function vu(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new ac;var a=new Set;i.set(n,a)}else a=i.get(n),a===void 0&&(a=new Set,i.set(n,a));a.has(t)||(a.add(t),e=gc.bind(null,e,n,t),n.then(e,e))}function Su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pu(e,n,t,i,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=We(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var oc=Qe.ReactCurrentOwner,pe=!1;function oe(e,n,t,i){n.child=e===null?il(n,null,t,i):et(n,e.child,t,i)}function bu(e,n,t,i,a){t=t.render;var o=n.ref;return Yn(n,a),i=mr(e,n,t,i,o,a),t=gr(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ze(e,n,a)):(L&&t&&or(n),n.flags|=1,oe(e,n,i,a),n.child)}function Cu(e,n,t,i,a){if(e===null){var o=t.type;return typeof o=="function"&&!Cr(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Kl(e,n,o,i,a)):(e=Ci(t.type,null,i,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var r=o.memoizedProps;if(t=t.compare,t=t!==null?t:Lt,t(r,i)&&e.ref===n.ref)return Ze(e,n,a)}return n.flags|=1,e=pn(o,i),e.ref=n.ref,e.return=n,n.child=e}function Kl(e,n,t,i,a){if(e!==null){var o=e.memoizedProps;if(Lt(o,i)&&e.ref===n.ref)if(pe=!1,n.pendingProps=i=o,(e.lanes&a)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,a)}return So(e,n,t,i,a)}function El(e,n,t){var i=n.pendingProps,a=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Un,ze),ze|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(Un,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,R(Un,ze),ze|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,R(Un,ze),ze|=i;return oe(e,n,a,t),n.child}function Tl(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function So(e,n,t,i,a){var o=ce(t)?Sn:ie.current;return o=$n(n,o),Yn(n,a),t=mr(e,n,t,i,o,a),i=gr(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ze(e,n,a)):(L&&i&&or(n),n.flags|=1,oe(e,n,t,a),n.child)}function Ku(e,n,t,i,a){if(ce(t)){var o=!0;xi(n)}else o=!1;if(Yn(n,a),n.stateNode===null)Si(e,n),Pl(n,t,i),Ao(n,t,i,a),i=!0;else if(e===null){var r=n.stateNode,u=n.memoizedProps;r.props=u;var s=r.context,p=t.contextType;typeof p=="object"&&p!==null?p=ve(p):(p=ce(t)?Sn:ie.current,p=$n(n,p));var _=t.getDerivedStateFromProps,z=typeof _=="function"||typeof r.getSnapshotBeforeUpdate=="function";z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u!==i||s!==p)&&Au(n,r,i,p),Je=!1;var k=n.memoizedState;r.state=k,Ui(n,i,r,a),s=n.memoizedState,u!==i||k!==s||de.current||Je?(typeof _=="function"&&(ho(n,t,_,i),s=n.memoizedState),(u=Je||hu(n,t,u,i,k,s,p))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=s),r.props=i,r.state=s,r.context=p,i=u):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{r=n.stateNode,ol(e,n),u=n.memoizedProps,p=n.type===n.elementType?u:Ce(n.type,u),r.props=p,z=n.pendingProps,k=r.context,s=t.contextType,typeof s=="object"&&s!==null?s=ve(s):(s=ce(t)?Sn:ie.current,s=$n(n,s));var g=t.getDerivedStateFromProps;(_=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u!==z||k!==s)&&Au(n,r,i,s),Je=!1,k=n.memoizedState,r.state=k,Ui(n,i,r,a);var w=n.memoizedState;u!==z||k!==w||de.current||Je?(typeof g=="function"&&(ho(n,t,g,i),w=n.memoizedState),(p=Je||hu(n,t,p,i,k,w,s)||!1)?(_||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,w,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,w,s)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=w),r.props=i,r.state=w,r.context=s,i=p):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),i=!1)}return Po(e,n,t,i,o,a)}function Po(e,n,t,i,a,o){Tl(e,n);var r=(n.flags&128)!==0;if(!i&&!r)return a&&zu(n,t,!1),Ze(e,n,o);i=n.stateNode,oc.current=n;var u=r&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&r?(n.child=et(n,e.child,null,o),n.child=et(n,null,u,o)):oe(e,n,u,o),n.memoizedState=i.state,a&&zu(n,t,!0),n.child}function Ol(e){var n=e.stateNode;n.pendingContext?ku(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ku(e,n.context,!1),kr(e,n.containerInfo)}function Eu(e,n,t,i,a){return Xn(),ur(a),n.flags|=256,oe(e,n,t,i),n.child}var bo={dehydrated:null,treeContext:null,retryLane:0};function Co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rl(e,n,t){var i=n.pendingProps,a=B.current,o=!1,r=(n.flags&128)!==0,u;if((u=r)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),R(B,a&1),e===null)return fo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=i.children,e=i.fallback,o?(i=n.mode,o=n.child,r={mode:"hidden",children:r},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=r):o=pa(r,i,0,null),e=vn(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Co(t),n.memoizedState=bo,e):jr(n,r));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return rc(e,n,r,i,u,a,t);if(o){o=i.fallback,r=n.mode,a=e.child,u=a.sibling;var s={mode:"hidden",children:i.children};return!(r&1)&&n.child!==a?(i=n.child,i.childLanes=0,i.pendingProps=s,n.deletions=null):(i=pn(a,s),i.subtreeFlags=a.subtreeFlags&14680064),u!==null?o=pn(u,o):(o=vn(o,r,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,r=e.child.memoizedState,r=r===null?Co(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},o.memoizedState=r,o.childLanes=e.childLanes&~t,n.memoizedState=bo,i}return o=e.child,e=o.sibling,i=pn(o,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function jr(e,n){return n=pa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ki(e,n,t,i){return i!==null&&ur(i),et(n,e.child,null,t),e=jr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rc(e,n,t,i,a,o,r){if(t)return n.flags&256?(n.flags&=-257,i=Da(Error(m(422))),ki(e,n,r,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,a=n.mode,i=pa({mode:"visible",children:i.children},a,0,null),o=vn(o,a,r,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,n.mode&1&&et(n,e.child,null,r),n.child.memoizedState=Co(r),n.memoizedState=bo,o);if(!(n.mode&1))return ki(e,n,r,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(m(419)),i=Da(o,i,void 0),ki(e,n,r,i)}if(u=(r&e.childLanes)!==0,pe||u){if(i=G,i!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|r)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,qe(e,a),Oe(i,e,a,-1))}return br(),i=Da(Error(m(421))),ki(e,n,r,i)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=wc.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,_e=rn(a.nextSibling),ye=n,L=!0,Ee=null,e!==null&&(fe[je++]=Ve,fe[je++]=Fe,fe[je++]=Pn,Ve=e.id,Fe=e.overflow,Pn=n),n=jr(n,i.children),n.flags|=4096,n)}function Tu(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),jo(e.return,n,t)}function Va(e,n,t,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=a)}function Ml(e,n,t){var i=n.pendingProps,a=i.revealOrder,o=i.tail;if(oe(e,n,i.children,t),i=B.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,t,n);else if(e.tag===19)Tu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(R(B,i),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Hi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Va(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Hi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Va(n,!0,t,null,o);break;case"together":Va(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Si(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Cn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(m(153));if(n.child!==null){for(e=n.child,t=pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uc(e,n,t){switch(n.tag){case 3:Ol(n),Xn();break;case 5:rl(n);break;case 1:ce(n.type)&&xi(n);break;case 4:kr(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,a=n.memoizedProps.value;R(Fi,i._currentValue),i._currentValue=a;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(R(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Rl(e,n,t):(R(B,B.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);R(B,B.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Ml(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),R(B,B.current),i)break;return null;case 22:case 23:return n.lanes=0,El(e,n,t)}return Ze(e,n,t)}var Nl,Ko,Il,Ll;Nl=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ko=function(){};Il=function(e,n,t,i){var a=e.memoizedProps;if(a!==i){e=n.stateNode,hn(Be.current);var o=null;switch(t){case"input":a=Ga(e,a),i=Ga(e,i),o=[];break;case"select":a=D({},a,{value:void 0}),i=D({},i,{value:void 0}),o=[];break;case"textarea":a=Xa(e,a),i=Xa(e,i),o=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Li)}no(t,i);var r;t=null;for(p in a)if(!i.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var u=a[p];for(r in u)u.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Et.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in i){var s=i[p];if(u=a!=null?a[p]:void 0,i.hasOwnProperty(p)&&s!==u&&(s!=null||u!=null))if(p==="style")if(u){for(r in u)!u.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in s)s.hasOwnProperty(r)&&u[r]!==s[r]&&(t||(t={}),t[r]=s[r])}else t||(o||(o=[]),o.push(p,t)),t=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Et.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&M("scroll",e),o||u===s||(o=[])):(o=o||[]).push(p,s))}t&&(o=o||[]).push("style",t);var p=o;(n.updateQueue=p)&&(n.flags|=4)}};Ll=function(e,n,t,i){t!==i&&(n.flags|=4)};function _t(e,n){if(!L)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function sc(e,n,t){var i=n.pendingProps;switch(rr(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ce(n.type)&&Bi(),ne(n),null;case 3:return i=n.stateNode,nt(),N(de),N(ie),_r(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(di(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ee!==null&&(Lo(Ee),Ee=null))),Ko(e,n),ne(n),null;case 5:zr(n);var a=hn(Ft.current);if(t=n.type,e!==null&&n.stateNode!=null)Il(e,n,t,i,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(m(166));return ne(n),null}if(e=hn(Be.current),di(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[Ie]=n,i[Dt]=o,e=(n.mode&1)!==0,t){case"dialog":M("cancel",i),M("close",i);break;case"iframe":case"object":case"embed":M("load",i);break;case"video":case"audio":for(a=0;a<ft.length;a++)M(ft[a],i);break;case"source":M("error",i);break;case"img":case"image":case"link":M("error",i),M("load",i);break;case"details":M("toggle",i);break;case"input":Dr(i,o),M("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},M("invalid",i);break;case"textarea":Fr(i,o),M("invalid",i)}no(t,o),a=null;for(var r in o)if(o.hasOwnProperty(r)){var u=o[r];r==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&pi(i.textContent,u,e),a=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&pi(i.textContent,u,e),a=["children",""+u]):Et.hasOwnProperty(r)&&u!=null&&r==="onScroll"&&M("scroll",i)}switch(t){case"input":ti(i),Vr(i,o,!0);break;case"textarea":ti(i),Wr(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Li)}i=a,n.updateQueue=i,i!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=r.createElement(t,{is:i.is}):(e=r.createElement(t),t==="select"&&(r=e,i.multiple?r.multiple=!0:i.size&&(r.size=i.size))):e=r.createElementNS(e,t),e[Ie]=n,e[Dt]=i,Nl(e,n,!1,!1),n.stateNode=e;e:{switch(r=to(t,i),t){case"dialog":M("cancel",e),M("close",e),a=i;break;case"iframe":case"object":case"embed":M("load",e),a=i;break;case"video":case"audio":for(a=0;a<ft.length;a++)M(ft[a],e);a=i;break;case"source":M("error",e),a=i;break;case"img":case"image":case"link":M("error",e),M("load",e),a=i;break;case"details":M("toggle",e),a=i;break;case"input":Dr(e,i),a=Ga(e,i),M("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=D({},i,{value:void 0}),M("invalid",e);break;case"textarea":Fr(e,i),a=Xa(e,i),M("invalid",e);break;default:a=i}no(t,a),u=a;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?zs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cs(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Tt(e,s):typeof s=="number"&&Tt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Et.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&Ho(e,o,s,r))}switch(t){case"input":ti(e),Vr(e,i,!1);break;case"textarea":ti(e),Wr(e);break;case"option":i.value!=null&&e.setAttribute("value",""+dn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Hn(e,!!i.multiple,o,!1):i.defaultValue!=null&&Hn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Li)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Ll(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(m(166));if(t=hn(Ft.current),hn(Be.current),di(n)){if(i=n.stateNode,t=n.memoizedProps,i[Ie]=n,(o=i.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:pi(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ie]=n,n.stateNode=i}return ne(n),null;case 13:if(N(B),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(L&&_e!==null&&n.mode&1&&!(n.flags&128))nl(),Xn(),n.flags|=98560,o=!1;else if(o=di(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(m(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(m(317));o[Ie]=n}else Xn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),o=!1}else Ee!==null&&(Lo(Ee),Ee=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):br())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return nt(),Ko(e,n),e===null&&Bt(n.stateNode.containerInfo),ne(n),null;case 10:return pr(n.type._context),ne(n),null;case 17:return ce(n.type)&&Bi(),ne(n),null;case 19:if(N(B),o=n.memoizedState,o===null)return ne(n),null;if(i=(n.flags&128)!==0,r=o.rendering,r===null)if(i)_t(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=Hi(e),r!==null){for(n.flags|=128,_t(o,!1),i=r.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,r=o.alternate,r===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,o.type=r.type,e=r.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return R(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&U()>it&&(n.flags|=128,i=!0,_t(o,!1),n.lanes=4194304)}else{if(!i)if(e=Hi(r),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!L)return ne(n),null}else 2*U()-o.renderingStartTime>it&&t!==1073741824&&(n.flags|=128,i=!0,_t(o,!1),n.lanes=4194304);o.isBackwards?(r.sibling=n.child,n.child=r):(t=o.last,t!==null?t.sibling=r:n.child=r,o.last=r)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=U(),n.sibling=null,t=B.current,R(B,i?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return Pr(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?ze&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(m(156,n.tag))}function lc(e,n){switch(rr(n),n.tag){case 1:return ce(n.type)&&Bi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nt(),N(de),N(ie),_r(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zr(n),null;case 13:if(N(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(m(340));Xn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return N(B),null;case 4:return nt(),null;case 10:return pr(n.type._context),null;case 22:case 23:return Pr(),null;case 24:return null;default:return null}}var zi=!1,te=!1,pc=typeof WeakSet=="function"?WeakSet:Set,j=null;function Wn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){V(e,n,i)}else t.current=null}function Eo(e,n,t){try{t()}catch(i){V(e,n,i)}}var Ou=!1;function dc(e,n){if(ko=Mi,e=Fs(),ar(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var r=0,u=-1,s=-1,p=0,_=0,z=e,k=null;n:for(;;){for(var g;z!==t||a!==0&&z.nodeType!==3||(u=r+a),z!==o||i!==0&&z.nodeType!==3||(s=r+i),z.nodeType===3&&(r+=z.nodeValue.length),(g=z.firstChild)!==null;)k=z,z=g;for(;;){if(z===e)break n;if(k===t&&++p===a&&(u=r),k===o&&++_===i&&(s=r),(g=z.nextSibling)!==null)break;z=k,k=z.parentNode}z=g}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zo={focusedElem:e,selectionRange:t},Mi=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var f=w.memoizedProps,I=w.memoizedState,d=n.stateNode,l=d.getSnapshotBeforeUpdate(n.elementType===n.type?f:Ce(n.type,f),I);d.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var c=n.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(y){V(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return w=Ou,Ou=!1,w}function bt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Eo(n,t,o)}a=a.next}while(a!==i)}}function sa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function To(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bl(e){var n=e.alternate;n!==null&&(e.alternate=null,Bl(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ie],delete n[Dt],delete n[mo],delete n[Zd],delete n[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xl(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Li));else if(i!==4&&(e=e.child,e!==null))for(Oo(e,n,t),e=e.sibling;e!==null;)Oo(e,n,t),e=e.sibling}function Ro(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ro(e,n,t),e=e.sibling;e!==null;)Ro(e,n,t),e=e.sibling}var J=null,Ke=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Dl(e,n,t),t=t.sibling}function Dl(e,n,t){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ea,t)}catch{}switch(t.tag){case 5:te||Wn(t,n);case 6:var i=J,a=Ke;J=null,Ye(e,n,t),J=i,Ke=a,J!==null&&(Ke?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ke?(e=J,t=t.stateNode,e.nodeType===8?Ma(e.parentNode,t):e.nodeType===1&&Ma(e,t),Nt(e)):Ma(J,t.stateNode));break;case 4:i=J,a=Ke,J=t.stateNode.containerInfo,Ke=!0,Ye(e,n,t),J=i,Ke=a;break;case 0:case 11:case 14:case 15:if(!te&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var o=a,r=o.destroy;o=o.tag,r!==void 0&&(o&2||o&4)&&Eo(t,n,r),a=a.next}while(a!==i)}Ye(e,n,t);break;case 1:if(!te&&(Wn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){V(t,n,u)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(te=(i=te)||t.memoizedState!==null,Ye(e,n,t),te=i):Ye(e,n,t);break;default:Ye(e,n,t)}}function Mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pc),n.forEach(function(i){var a=fc.bind(null,e,i);t.has(i)||(t.add(i),i.then(a,a))})}}function be(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];try{var o=e,r=n,u=r;e:for(;u!==null;){switch(u.tag){case 5:J=u.stateNode,Ke=!1;break e;case 3:J=u.stateNode.containerInfo,Ke=!0;break e;case 4:J=u.stateNode.containerInfo,Ke=!0;break e}u=u.return}if(J===null)throw Error(m(160));Dl(o,r,a),J=null,Ke=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(p){V(a,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vl(n,e),n=n.sibling}function Vl(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(n,e),Me(e),i&4){try{bt(3,e,e.return),sa(3,e)}catch(f){V(e,e.return,f)}try{bt(5,e,e.return)}catch(f){V(e,e.return,f)}}break;case 1:be(n,e),Me(e),i&512&&t!==null&&Wn(t,t.return);break;case 5:if(be(n,e),Me(e),i&512&&t!==null&&Wn(t,t.return),e.flags&32){var a=e.stateNode;try{Tt(a,"")}catch(f){V(e,e.return,f)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,r=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ls(a,o),to(u,r);var p=to(u,o);for(r=0;r<s.length;r+=2){var _=s[r],z=s[r+1];_==="style"?zs(a,z):_==="dangerouslySetInnerHTML"?cs(a,z):_==="children"?Tt(a,z):Ho(a,_,z,p)}switch(u){case"input":Ja(a,o);break;case"textarea":ps(a,o);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Hn(a,!!o.multiple,g,!1):k!==!!o.multiple&&(o.defaultValue!=null?Hn(a,!!o.multiple,o.defaultValue,!0):Hn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Dt]=o}catch(f){V(e,e.return,f)}}break;case 6:if(be(n,e),Me(e),i&4){if(e.stateNode===null)throw Error(m(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(f){V(e,e.return,f)}}break;case 3:if(be(n,e),Me(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Nt(n.containerInfo)}catch(f){V(e,e.return,f)}break;case 4:be(n,e),Me(e);break;case 13:be(n,e),Me(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(vr=U())),i&4&&Mu(e);break;case 22:if(_=t!==null&&t.memoizedState!==null,e.mode&1?(te=(p=te)||_,be(n,e),te=p):be(n,e),Me(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!_&&e.mode&1)for(j=e,_=e.child;_!==null;){for(z=j=_;j!==null;){switch(k=j,g=k.child,k.tag){case 0:case 11:case 14:case 15:bt(4,k,k.return);break;case 1:Wn(k,k.return);var w=k.stateNode;if(typeof w.componentWillUnmount=="function"){i=k,t=k.return;try{n=i,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(f){V(i,t,f)}}break;case 5:Wn(k,k.return);break;case 22:if(k.memoizedState!==null){Iu(z);continue}}g!==null?(g.return=k,j=g):Iu(z)}_=_.sibling}e:for(_=null,z=e;;){if(z.tag===5){if(_===null){_=z;try{a=z.stateNode,p?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=z.stateNode,s=z.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ks("display",r))}catch(f){V(e,e.return,f)}}}else if(z.tag===6){if(_===null)try{z.stateNode.nodeValue=p?"":z.memoizedProps}catch(f){V(e,e.return,f)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;_===z&&(_=null),z=z.return}_===z&&(_=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:be(n,e),Me(e),i&4&&Mu(e);break;case 21:break;default:be(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(xl(t)){var i=t;break e}t=t.return}throw Error(m(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Tt(a,""),i.flags&=-33);var o=Ru(e);Ro(e,o,a);break;case 3:case 4:var r=i.stateNode.containerInfo,u=Ru(e);Oo(e,u,r);break;default:throw Error(m(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cc(e,n,t){j=e,Fl(e)}function Fl(e,n,t){for(var i=(e.mode&1)!==0;j!==null;){var a=j,o=a.child;if(a.tag===22&&i){var r=a.memoizedState!==null||zi;if(!r){var u=a.alternate,s=u!==null&&u.memoizedState!==null||te;u=zi;var p=te;if(zi=r,(te=s)&&!p)for(j=a;j!==null;)r=j,s=r.child,r.tag===22&&r.memoizedState!==null?Lu(a):s!==null?(s.return=r,j=s):Lu(a);for(;o!==null;)j=o,Fl(o),o=o.sibling;j=a,zi=u,te=p}Nu(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,j=o):Nu(e)}}function Nu(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||sa(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!te)if(t===null)i.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ce(n.type,t.memoizedProps);i.componentDidUpdate(a,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&wu(n,o,i);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wu(n,r,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var _=p.memoizedState;if(_!==null){var z=_.dehydrated;z!==null&&Nt(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}te||n.flags&512&&To(n)}catch(k){V(n,n.return,k)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Iu(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Lu(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sa(4,n)}catch(s){V(n,t,s)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var a=n.return;try{i.componentDidMount()}catch(s){V(n,a,s)}}var o=n.return;try{To(n)}catch(s){V(n,o,s)}break;case 5:var r=n.return;try{To(n)}catch(s){V(n,r,s)}}}catch(s){V(n,n.return,s)}if(n===e){j=null;break}var u=n.sibling;if(u!==null){u.return=n.return,j=u;break}j=n.return}}var kc=Math.ceil,Qi=Qe.ReactCurrentDispatcher,hr=Qe.ReactCurrentOwner,Ae=Qe.ReactCurrentBatchConfig,T=0,G=null,H=null,$=0,ze=0,Un=zn(0),Z=0,qt=null,Cn=0,la=0,Ar=0,Ct=null,le=null,vr=0,it=1/0,xe=null,Yi=!1,Mo=null,sn=null,_i=!1,nn=null,Gi=0,Kt=0,No=null,Pi=-1,bi=0;function re(){return T&6?U():Pi!==-1?Pi:Pi=U()}function ln(e){return e.mode&1?T&2&&$!==0?$&-$:Gd.transition!==null?(bi===0&&(bi=Ps()),bi):(e=O,e!==0||(e=window.event,e=e===void 0?16:Rs(e.type)),e):1}function Oe(e,n,t,i){if(50<Kt)throw Kt=0,No=null,Error(m(185));Qt(e,t,i),(!(T&2)||e!==G)&&(e===G&&(!(T&2)&&(la|=t),Z===4&&Xe(e,$)),ke(e,i),t===1&&T===0&&!(n.mode&1)&&(it=U()+500,oa&&_n()))}function ke(e,n){var t=e.callbackNode;Gp(e,n);var i=Ri(e,e===G?$:0);if(i===0)t!==null&&qr(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&qr(t),n===1)e.tag===0?Yd(Bu.bind(null,e)):$s(Bu.bind(null,e)),Hd(function(){!(T&6)&&_n()}),t=null;else{switch(bs(i)){case 1:t=Go;break;case 4:t=vs;break;case 16:t=Oi;break;case 536870912:t=Ss;break;default:t=Oi}t=Gl(t,Wl.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Wl(e,n){if(Pi=-1,bi=0,T&6)throw Error(m(327));var t=e.callbackNode;if(Gn()&&e.callbackNode!==t)return null;var i=Ri(e,e===G?$:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=Ji(e,i);else{n=i;var a=T;T|=2;var o=Hl();(G!==e||$!==n)&&(xe=null,it=U()+500,An(e,n));do try{yc();break}catch(u){Ul(e,u)}while(1);lr(),Qi.current=o,T=a,H!==null?n=0:(G=null,$=0,n=Z)}if(n!==0){if(n===2&&(a=uo(e),a!==0&&(i=a,n=Io(e,a))),n===1)throw t=qt,An(e,0),Xe(e,i),ke(e,U()),t;if(n===6)Xe(e,i);else{if(a=e.current.alternate,!(i&30)&&!zc(a)&&(n=Ji(e,i),n===2&&(o=uo(e),o!==0&&(i=o,n=Io(e,o))),n===1))throw t=qt,An(e,0),Xe(e,i),ke(e,U()),t;switch(e.finishedWork=a,e.finishedLanes=i,n){case 0:case 1:throw Error(m(345));case 2:wn(e,le,xe);break;case 3:if(Xe(e,i),(i&130023424)===i&&(n=vr+500-U(),10<n)){if(Ri(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){re(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=yo(wn.bind(null,e,le,xe),n);break}wn(e,le,xe);break;case 4:if(Xe(e,i),(i&4194240)===i)break;for(n=e.eventTimes,a=-1;0<i;){var r=31-Te(i);o=1<<r,r=n[r],r>a&&(a=r),i&=~o}if(i=a,i=U()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kc(i/1960))-i,10<i){e.timeoutHandle=yo(wn.bind(null,e,le,xe),i);break}wn(e,le,xe);break;case 5:wn(e,le,xe);break;default:throw Error(m(329))}}}return ke(e,U()),e.callbackNode===t?Wl.bind(null,e):null}function Io(e,n){var t=Ct;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=Ji(e,n),e!==2&&(n=le,le=t,n!==null&&Lo(n)),e}function Lo(e){le===null?le=e:le.push.apply(le,e)}function zc(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var a=t[i],o=a.getSnapshot;a=a.value;try{if(!Re(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xe(e,n){for(n&=~Ar,n&=~la,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),i=1<<t;e[t]=-1,n&=~i}}function Bu(e){if(T&6)throw Error(m(327));Gn();var n=Ri(e,0);if(!(n&1))return ke(e,U()),null;var t=Ji(e,n);if(e.tag!==0&&t===2){var i=uo(e);i!==0&&(n=i,t=Io(e,i))}if(t===1)throw t=qt,An(e,0),Xe(e,n),ke(e,U()),t;if(t===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,le,xe),ke(e,U()),null}function Sr(e,n){var t=T;T|=1;try{return e(n)}finally{T=t,T===0&&(it=U()+500,oa&&_n())}}function Kn(e){nn!==null&&nn.tag===0&&!(T&6)&&Gn();var n=T;T|=1;var t=Ae.transition,i=O;try{if(Ae.transition=null,O=1,e)return e()}finally{O=i,Ae.transition=t,T=n,!(T&6)&&_n()}}function Pr(){ze=Un.current,N(Un)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ud(t)),H!==null)for(t=H.return;t!==null;){var i=t;switch(rr(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bi();break;case 3:nt(),N(de),N(ie),_r();break;case 5:zr(i);break;case 4:nt();break;case 13:N(B);break;case 19:N(B);break;case 10:pr(i.type._context);break;case 22:case 23:Pr()}t=t.return}if(G=e,H=e=pn(e.current,null),$=ze=n,Z=0,qt=null,Ar=la=Cn=0,le=Ct=null,jn!==null){for(n=0;n<jn.length;n++)if(t=jn[n],i=t.interleaved,i!==null){t.interleaved=null;var a=i.next,o=t.pending;if(o!==null){var r=o.next;o.next=a,i.next=r}t.pending=i}jn=null}return e}function Ul(e,n){do{var t=H;try{if(lr(),Ai.current=Zi,qi){for(var i=x.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}qi=!1}if(bn=0,Y=q=x=null,Pt=!1,Wt=0,hr.current=null,t===null||t.return===null){Z=1,qt=n,H=null;break}e:{var o=e,r=t.return,u=t,s=n;if(n=$,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,_=u,z=_.tag;if(!(_.mode&1)&&(z===0||z===11||z===15)){var k=_.alternate;k?(_.updateQueue=k.updateQueue,_.memoizedState=k.memoizedState,_.lanes=k.lanes):(_.updateQueue=null,_.memoizedState=null)}var g=Su(r);if(g!==null){g.flags&=-257,Pu(g,r,u,o,n),g.mode&1&&vu(o,p,n),n=g,s=p;var w=n.updateQueue;if(w===null){var f=new Set;f.add(s),n.updateQueue=f}else w.add(s);break e}else{if(!(n&1)){vu(o,p,n),br();break e}s=Error(m(426))}}else if(L&&u.mode&1){var I=Su(r);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Pu(I,r,u,o,n),ur(tt(s,u));break e}}o=s=tt(s,u),Z!==4&&(Z=2),Ct===null?Ct=[o]:Ct.push(o),o=r;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=bl(o,s,n);gu(o,d);break e;case 1:u=s;var l=o.type,c=o.stateNode;if(!(o.flags&128)&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sn===null||!sn.has(c)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=Cl(o,u,n);gu(o,y);break e}}o=o.return}while(o!==null)}Zl(t)}catch(h){n=h,H===t&&t!==null&&(H=t=t.return);continue}break}while(1)}function Hl(){var e=Qi.current;return Qi.current=Zi,e===null?Zi:e}function br(){(Z===0||Z===3||Z===2)&&(Z=4),G===null||!(Cn&268435455)&&!(la&268435455)||Xe(G,$)}function Ji(e,n){var t=T;T|=2;var i=Hl();(G!==e||$!==n)&&(xe=null,An(e,n));do try{_c();break}catch(a){Ul(e,a)}while(1);if(lr(),T=t,Qi.current=i,H!==null)throw Error(m(261));return G=null,$=0,Z}function _c(){for(;H!==null;)ql(H)}function yc(){for(;H!==null&&!Vp();)ql(H)}function ql(e){var n=Yl(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Zl(e):H=n,hr.current=null}function Zl(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lc(t,n),t!==null){t.flags&=32767,H=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,H=null;return}}else if(t=sc(t,n,ze),t!==null){H=t;return}if(n=n.sibling,n!==null){H=n;return}H=n=e}while(n!==null);Z===0&&(Z=5)}function wn(e,n,t){var i=O,a=Ae.transition;try{Ae.transition=null,O=1,mc(e,n,t,i)}finally{Ae.transition=a,O=i}return null}function mc(e,n,t,i){do Gn();while(nn!==null);if(T&6)throw Error(m(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Jp(e,o),e===G&&(H=G=null,$=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_i||(_i=!0,Gl(Oi,function(){return Gn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var r=O;O=1;var u=T;T|=4,hr.current=null,dc(e,t),Vl(t,e),Ld(zo),Mi=!!ko,zo=ko=null,e.current=t,cc(t),Fp(),T=u,O=r,Ae.transition=o}else e.current=t;if(_i&&(_i=!1,nn=e,Gi=a),o=e.pendingLanes,o===0&&(sn=null),Hp(t.stateNode),ke(e,U()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],i(a.value,{componentStack:a.stack,digest:a.digest});if(Yi)throw Yi=!1,e=Mo,Mo=null,e;return Gi&1&&e.tag!==0&&Gn(),o=e.pendingLanes,o&1?e===No?Kt++:(Kt=0,No=e):Kt=0,_n(),null}function Gn(){if(nn!==null){var e=bs(Gi),n=Ae.transition,t=O;try{if(Ae.transition=null,O=16>e?16:e,nn===null)var i=!1;else{if(e=nn,nn=null,Gi=0,T&6)throw Error(m(331));var a=T;for(T|=4,j=e.current;j!==null;){var o=j,r=o.child;if(j.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var p=u[s];for(j=p;j!==null;){var _=j;switch(_.tag){case 0:case 11:case 15:bt(8,_,o)}var z=_.child;if(z!==null)z.return=_,j=z;else for(;j!==null;){_=j;var k=_.sibling,g=_.return;if(Bl(_),_===p){j=null;break}if(k!==null){k.return=g,j=k;break}j=g}}}var w=o.alternate;if(w!==null){var f=w.child;if(f!==null){w.child=null;do{var I=f.sibling;f.sibling=null,f=I}while(f!==null)}}j=o}}if(o.subtreeFlags&2064&&r!==null)r.return=o,j=r;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break e}j=o.return}}var l=e.current;for(j=l;j!==null;){r=j;var c=r.child;if(r.subtreeFlags&2064&&c!==null)c.return=r,j=c;else e:for(r=l;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:sa(9,u)}}catch(h){V(u,u.return,h)}if(u===r){j=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,j=y;break e}j=u.return}}if(T=a,_n(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ea,e)}catch{}i=!0}return i}finally{O=t,Ae.transition=n}}return!1}function xu(e,n,t){n=tt(t,n),n=bl(e,n,1),e=un(e,n,1),n=re(),e!==null&&(Qt(e,1,n),ke(e,n))}function V(e,n,t){if(e.tag===3)xu(e,e,t);else for(;n!==null;){if(n.tag===3){xu(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sn===null||!sn.has(i))){e=tt(t,e),e=Cl(n,e,1),n=un(n,e,1),e=re(),n!==null&&(Qt(n,1,e),ke(n,e));break}}n=n.return}}function gc(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=re(),e.pingedLanes|=e.suspendedLanes&t,G===e&&($&t)===t&&(Z===4||Z===3&&($&130023424)===$&&500>U()-vr?An(e,0):Ar|=t),ke(e,n)}function Ql(e,n){n===0&&(e.mode&1?(n=oi,oi<<=1,!(oi&130023424)&&(oi=4194304)):n=1);var t=re();e=qe(e,n),e!==null&&(Qt(e,n,t),ke(e,t))}function wc(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ql(e,t)}function fc(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(m(314))}i!==null&&i.delete(n),Ql(e,t)}var Yl;Yl=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,uc(e,n,t);pe=!!(e.flags&131072)}else pe=!1,L&&n.flags&1048576&&Xs(n,Vi,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Si(e,n),e=n.pendingProps;var a=$n(n,ie.current);Yn(n,t),a=mr(null,n,i,e,a,t);var o=gr();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ce(i)?(o=!0,xi(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,cr(n),a.updater=ua,n.stateNode=a,a._reactInternals=n,Ao(n,i,e,t),n=Po(null,n,i,!0,o,t)):(n.tag=0,L&&o&&or(n),oe(null,n,a,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Si(e,n),e=n.pendingProps,a=i._init,i=a(i._payload),n.type=i,a=n.tag=hc(i),e=Ce(i,e),a){case 0:n=So(null,n,i,e,t);break e;case 1:n=Ku(null,n,i,e,t);break e;case 11:n=bu(null,n,i,e,t);break e;case 14:n=Cu(null,n,i,Ce(i.type,e),t);break e}throw Error(m(306,i,""))}return n;case 0:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:Ce(i,a),So(e,n,i,a,t);case 1:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:Ce(i,a),Ku(e,n,i,a,t);case 3:e:{if(Ol(n),e===null)throw Error(m(387));i=n.pendingProps,o=n.memoizedState,a=o.element,ol(e,n),Ui(n,i,null,t);var r=n.memoizedState;if(i=r.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=tt(Error(m(423)),n),n=Eu(e,n,i,t,a);break e}else if(i!==a){a=tt(Error(m(424)),n),n=Eu(e,n,i,t,a);break e}else for(_e=rn(n.stateNode.containerInfo.firstChild),ye=n,L=!0,Ee=null,t=il(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xn(),i===a){n=Ze(e,n,t);break e}oe(e,n,i,t)}n=n.child}return n;case 5:return rl(n),e===null&&fo(n),i=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,r=a.children,_o(i,a)?r=null:o!==null&&_o(i,o)&&(n.flags|=32),Tl(e,n),oe(e,n,r,t),n.child;case 6:return e===null&&fo(n),null;case 13:return Rl(e,n,t);case 4:return kr(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=et(n,null,i,t):oe(e,n,i,t),n.child;case 11:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:Ce(i,a),bu(e,n,i,a,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,a=n.pendingProps,o=n.memoizedProps,r=a.value,R(Fi,i._currentValue),i._currentValue=r,o!==null)if(Re(o.value,r)){if(o.children===a.children&&!de.current){n=Ze(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){r=o.child;for(var s=u.firstContext;s!==null;){if(s.context===i){if(o.tag===1){s=We(-1,t&-t),s.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var _=p.pending;_===null?s.next=s:(s.next=_.next,_.next=s),p.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),jo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)r=o.type===n.type?null:o.child;else if(o.tag===18){if(r=o.return,r===null)throw Error(m(341));r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),jo(r,t,n),r=o.sibling}else r=o.child;if(r!==null)r.return=o;else for(r=o;r!==null;){if(r===n){r=null;break}if(o=r.sibling,o!==null){o.return=r.return,r=o;break}r=r.return}o=r}oe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,i=n.pendingProps.children,Yn(n,t),a=ve(a),i=i(a),n.flags|=1,oe(e,n,i,t),n.child;case 14:return i=n.type,a=Ce(i,n.pendingProps),a=Ce(i.type,a),Cu(e,n,i,a,t);case 15:return Kl(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:Ce(i,a),Si(e,n),n.tag=1,ce(i)?(e=!0,xi(n)):e=!1,Yn(n,t),Pl(n,i,a),Ao(n,i,a,t),Po(null,n,i,!0,e,t);case 19:return Ml(e,n,t);case 22:return El(e,n,t)}throw Error(m(156,n.tag))};function Gl(e,n){return As(e,n)}function jc(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(e,n,t,i){return new jc(e,n,t,i)}function Cr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hc(e){if(typeof e=="function")return Cr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zo)return 11;if(e===Qo)return 14}return 2}function pn(e,n){var t=e.alternate;return t===null?(t=he(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ci(e,n,t,i,a,o){var r=2;if(i=e,typeof e=="function")Cr(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Mn:return vn(t.children,a,o,n);case qo:r=8,a|=8;break;case qa:return e=he(12,t,n,a|2),e.elementType=qa,e.lanes=o,e;case Za:return e=he(13,t,n,a),e.elementType=Za,e.lanes=o,e;case Qa:return e=he(19,t,n,a),e.elementType=Qa,e.lanes=o,e;case rs:return pa(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case as:r=10;break e;case os:r=9;break e;case Zo:r=11;break e;case Qo:r=14;break e;case Ge:r=16,i=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return n=he(r,t,n,a),n.elementType=e,n.type=i,n.lanes=o,n}function vn(e,n,t,i){return e=he(7,e,i,n),e.lanes=t,e}function pa(e,n,t,i){return e=he(22,e,i,n),e.elementType=rs,e.lanes=t,e.stateNode={isHidden:!1},e}function Fa(e,n,t){return e=he(6,e,null,n),e.lanes=t,e}function Wa(e,n,t){return n=he(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ac(e,n,t,i,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kr(e,n,t,i,a,o,r,u,s){return e=new Ac(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=he(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cr(o),e}function vc(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Jl(e){if(!e)return cn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(m(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(m(171))}if(e.tag===1){var t=e.type;if(ce(t))return Js(e,t,n)}return n}function $l(e,n,t,i,a,o,r,u,s){return e=Kr(t,i,!0,e,a,o,r,u,s),e.context=Jl(null),t=e.current,i=re(),a=ln(t),o=We(i,a),o.callback=n??null,un(t,o,a),e.current.lanes=a,Qt(e,a,i),ke(e,i),e}function da(e,n,t,i){var a=n.current,o=re(),r=ln(a);return t=Jl(t),n.context===null?n.context=t:n.pendingContext=t,n=We(o,r),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=un(a,n,r),e!==null&&(Oe(e,a,r,o),hi(e,a,r)),r}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Er(e,n){Du(e,n),(e=e.alternate)&&Du(e,n)}function Sc(){return null}var Xl=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tr(e){this._internalRoot=e}ca.prototype.render=Tr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(m(409));da(e,n,null,null)};ca.prototype.unmount=Tr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){da(null,e,null,null)}),n[He]=null}};function ca(e){this._internalRoot=e}ca.prototype.unstable_scheduleHydration=function(e){if(e){var n=Es();e={blockedOn:null,target:e,priority:n};for(var t=0;t<$e.length&&n!==0&&n<$e[t].priority;t++);$e.splice(t,0,e),t===0&&Os(e)}};function Or(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Pc(e,n,t,i,a){if(a){if(typeof i=="function"){var o=i;i=function(){var p=$i(r);o.call(p)}}var r=$l(n,i,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=r,e[He]=r.current,Bt(e.nodeType===8?e.parentNode:e),Kn(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var u=i;i=function(){var p=$i(s);u.call(p)}}var s=Kr(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[He]=s.current,Bt(e.nodeType===8?e.parentNode:e),Kn(function(){da(n,s,t,i)}),s}function za(e,n,t,i,a){var o=t._reactRootContainer;if(o){var r=o;if(typeof a=="function"){var u=a;a=function(){var s=$i(r);u.call(s)}}da(n,r,e,a)}else r=Pc(t,n,e,a,i);return $i(r)}Cs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(Jo(n,t|1),ke(n,U()),!(T&6)&&(it=U()+500,_n()))}break;case 13:Kn(function(){var i=qe(e,1);if(i!==null){var a=re();Oe(i,e,1,a)}}),Er(e,1)}};$o=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=re();Oe(n,e,134217728,t)}Er(e,134217728)}};Ks=function(e){if(e.tag===13){var n=ln(e),t=qe(e,n);if(t!==null){var i=re();Oe(t,e,n,i)}Er(e,n)}};Es=function(){return O};Ts=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};ao=function(e,n,t){switch(n){case"input":if(Ja(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var a=aa(i);if(!a)throw Error(m(90));ss(i),Ja(i,a)}}}break;case"textarea":ps(e,t);break;case"select":n=t.value,n!=null&&Hn(e,!!t.multiple,n,!1)}};ms=Sr;gs=Kn;var bc={usingClientEntryPoint:!1,Events:[Gt,Bn,aa,_s,ys,Sr]},yt={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cc={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=js(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Sc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{ea=yi.inject(Cc),Le=yi}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Or(n))throw Error(m(200));return vc(e,n,null,t)};ge.createRoot=function(e,n){if(!Or(e))throw Error(m(299));var t=!1,i="",a=Xl;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Kr(e,1,!1,null,null,t,!1,i,a),e[He]=n.current,Bt(e.nodeType===8?e.parentNode:e),new Tr(n)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=js(n),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return Kn(e)};ge.hydrate=function(e,n,t){if(!ka(n))throw Error(m(200));return za(null,e,n,!0,t)};ge.hydrateRoot=function(e,n,t){if(!Or(e))throw Error(m(405));var i=t!=null&&t.hydratedSources||null,a=!1,o="",r=Xl;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=$l(n,null,e,1,t??null,a,!1,o,r),e[He]=n.current,Bt(e),i)for(e=0;e<i.length;e++)t=i[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ca(n)};ge.render=function(e,n,t){if(!ka(n))throw Error(m(200));return za(null,e,n,!1,t)};ge.unmountComponentAtNode=function(e){if(!ka(e))throw Error(m(40));return e._reactRootContainer?(Kn(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};ge.unstable_batchedUpdates=Sr;ge.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!ka(t))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return za(e,n,t,!1,i)};ge.version="18.3.1-next-f1338f8080-20240426";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),es.exports=ge;var Kc=es.exports,Fu=Kc;Ua.createRoot=Fu.createRoot,Ua.hydrateRoot=Fu.hydrateRoot;const Ec=[{rok:"2018",slogan1:"",moc:"110",slogan2:"",equip_systemy:`Tempomat
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Lane assist - kontrola zmiany pasa ruchu
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- System rozpoznawania znaków drogowych
- 
- Asystent świateł drogowych
- 
- Czujnik zmierzchu
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Lampy tylne w technologii LED
- 
- System Start/Stop
- 
- Elektryczny hamulec postojowy`,id_wc_2:"32944",id_wc_1:"35908",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/KADJAR%20(2).png?updatedAt=1769726356722",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 18
- 
- Opony wielosezonowe`,marka:"Renault",wyposazenie:`Audio i multimedia\r
\r
Apple CarPlay\r
\r
Android Auto\r
\r
Interfejs Bluetooth\r
\r
Radio\r
\r
Gniazdo USB\r
\r
System nawigacji satelitarnej\r
\r
Ekran dotykowy\r
\r
Komfort i dodatki\r
\r
Hak\r
\r
Klimatyzacja automatyczna, dwustrefowa\r
\r
Tapicerka materiałowa\r
\r
Podłokietniki - przód\r
\r
Podłokietniki - tył\r
\r
Kierownica skórzana\r
\r
Keyless Go\r
\r
Czujnik deszczu\r
\r
Elektryczne szyby przednie\r
\r
Elektryczne szyby tylne\r
\r
Przyciemniane tylne szyby\r
\r
Systemy wspomagania kierowcy\r
\r
Tempomat\r
\r
Kontrola odległości z przodu (przy parkowaniu)\r
\r
Kontrola odległości z tyłu (przy parkowaniu)\r
\r
Park Assistant - asystent parkowania\r
\r
Kamera panoramiczna 360\r
\r
Kamera parkowania tył\r
\r
Podgrzewane lusterka boczne\r
\r
Lusterka boczne składane elektrycznie\r
\r
Asystent (czujnik) martwego pola\r
\r
Lane assist - kontrola zmiany pasa ruchu\r
\r
Ogranicznik prędkości\r
\r
Wspomaganie ruszania pod górę- Hill Holder\r
\r
System rozpoznawania znaków drogowych\r
\r
Asystent świateł drogowych\r
\r
Czujnik zmierzchu\r
\r
Lampy doświetlające zakręt\r
\r
Światła do jazdy dziennej diodowe LED\r
\r
Lampy przeciwmgielne\r
\r
Elektroniczna kontrola ciśnienia w oponach\r
\r
Wspomaganie kierownicy\r
\r
Osiągi i tuning\r
\r
Felgi aluminiowe 17\r
\r
Opony wielosezonowe\r
\r
Bezpieczeństwo\r
\r
ABS\r
\r
ESP\r
\r
System wspomagania hamowania\r
\r
Poduszka powietrzna kierowcy\r
\r
Poduszka powietrzna pasażera\r
\r
Kurtyny powietrzne - przód\r
\r
Boczna poduszka powietrzna kierowcy\r
\r
Boczne poduszki powietrzne - przód\r
\r
Isofix (punkty mocowania fotelika dziecięcego)\r
\r`,wersja:"",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_00.jpg?updatedAt=1772109379560
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_01.jpg?updatedAt=1772109381416
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_02.jpg?updatedAt=1772109381386
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_03.jpg?updatedAt=1772109381591
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_04.jpg?updatedAt=1772109381442
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_05.jpg?updatedAt=1772109380931
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_06.jpg?updatedAt=1772109381001
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_07.jpg?updatedAt=1772109381338
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_08.jpg?updatedAt=1772109381392
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_09.jpg?updatedAt=1772109381580
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_10.jpg?updatedAt=1772109381512
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_11.jpg?updatedAt=1772109381544
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_13.jpg?updatedAt=1772109379895
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_14.jpg?updatedAt=1772109380794
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_15.jpg?updatedAt=1772109381168
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_16.jpg?updatedAt=1772109381316
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_17.jpg?updatedAt=1772109380863
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_18.jpg?updatedAt=1772109381026
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_19.jpg?updatedAt=1772109380838
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_20.jpg?updatedAt=1772109381290
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_21.jpg?updatedAt=1772109381021
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_22.jpg?updatedAt=1772109380910
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_23.jpg?updatedAt=1772109381048
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_24.jpg?updatedAt=1772109381061
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_25.jpg?updatedAt=1772109381314
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_26.jpg?updatedAt=1772109381234
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_27.jpg?updatedAt=1772109381323
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_28.jpg?updatedAt=1772109381555
https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_29.jpg?updatedAt=1772109380293`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Renault Kadjar – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 223767 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#RenaultKadjar`,equip_komfort:`Klimatyzacja automatyczna, dwustrefowa
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1461",cena:"4950000,00%",status:"✅ Wysłano",kolor:"Czarny",naped:"Przedni",paliwo:"Diesel",przebieg:"223767",html_code:"18404",uc_beztla:`Zapraszamy do zakupu RENAULT KADJAR Z 2018 roku


Auto  sprowadzone zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


    <li>Silnik 1.5 dCi 110 KM, automatyczna skrzynia biegów</li>
<li>    Przebieg: <b>223 767 km</b></li>
<li>    Dwustrefowa automatyczna klimatyzacja</li>
<li>    Nawigacja, Android Auto, Bluetooth</li>
<li>    Tempomat, asystent pasa ruchu, rozpoznawanie znaków</li>
<li>    Przednie i tylne czujniki parkowania, kamera cofania</li>
<li>    Podgrzewane i składane lusterka, elektryczne szyby przód/tył</li>
<li>    Światła LED, czujnik deszczu, automatyczne światła</li>
<li>    <b>Certyfikat legalności przebiegu</b></li>
<li>    <b>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</b></li>


--------


✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


 <li>   Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>


Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Renault Kadjar 1.5 dci Energy Intens EDC",link_glowne:"https://ik.imagekit.io/kduc81jzs/Renault%20Kadjar%201.5%20dci%20Energy%20Intens%20EDC/foto_00.jpg?updatedAt=1772109379560",faktura:"Faktura VAT Marża",status_sprzedany:"NIE",equip_audio:`Android Auto
- 
- Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Kadjar",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Renault Kadjar świetny stan i udokumentowana historia.
✅ Przebieg: 223767 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Renault Kadjar 1.5 dci Energy Intens EDC w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #RenaultKadjar`,"skrzynia-biegow":"Automatyczna"},{rok:"2011",slogan1:"Certfikat",moc:"117",slogan2:"Serwiaowany",equip_systemy:`Tempomat
- 
- Podgrzewane lusterka boczne
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne
- 
- Wspomaganie kierownicy`,id_wc_2:"33971",id_wc_1:"33971",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/nISSANqASHQAi6401.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 16
- 
- Opony wielosezonowe`,marka:"Nissan",wyposazenie:`Interfejs Bluetooth

Radio

Gniazdo USB

System nawigacji satelitarnej

Ekran dotykowy`,wersja:"1.6 I-Way | Certyfikat",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_00.jpg?updatedAt=1773845389008
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_01.jpg?updatedAt=1773845390173
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_02.jpg?updatedAt=1773845391351
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_03.jpg?updatedAt=1773845392551
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_04.jpg?updatedAt=1773845393743
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_05.jpg?updatedAt=1773845394944
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_06.jpg?updatedAt=1773845396124
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_07.jpg?updatedAt=1773845397283
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_08.jpg?updatedAt=1773845398467
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_09.jpg?updatedAt=1773845399635
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_10.jpg?updatedAt=1773845400813
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_11.jpg?updatedAt=1773845402097
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_12.jpg?updatedAt=1773845403356
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_13.jpg?updatedAt=1773845404576
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_14.jpg?updatedAt=1773845405758
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_15.jpg?updatedAt=1773845406942
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_16.jpg?updatedAt=1773845408147
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_17.jpg?updatedAt=1773845409365
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_18.jpg?updatedAt=1773845410715
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_19.jpg?updatedAt=1773845411964
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_20.jpg?updatedAt=1773845413126
https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_21.jpg?updatedAt=1773845414331`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Nissan Qashqai – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 242190 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#NissanQashqai`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Wycieraczki`,"pojemnosc-silnika":"1598",cena:"31500",status:"",kolor:"Czarny",naped:"Na przednie koła",paliwo:"Benzyna",przebieg:"242190",html_code:"18407",uc_beztla:`Zapraszamy do zakupu NISSAN QASHQAI Z 2011 roku

Auto świeżo sprowadzone z Holandii i zarejestrowane

Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.

<li>Klimatyzacja sprawna</li>
<li><b>Certyfikat legalności przebieg</b>u</li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>
<li>Vin dostępny na życzenie</li>

——–

✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.

<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"nissan_qashqai_1-6-czarny",link_glowne:"https://ik.imagekit.io/kduc81jzs/nissan_qashqai_1-6-czarny/Nissan_Qashqai_2011_p_00.jpg?updatedAt=1773845389008",faktura:"Faktura VAT Marża",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Qashqai",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Nissan Qashqai świetny stan i udokumentowana historia.
✅ Przebieg: 242190 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz nissan_qashqai_1-6-czarny w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #NissanQashqai`,"skrzynia-biegow":"Manualna"},{rok:"2017",slogan1:"171 tys. przebieg",moc:"150",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Lampy przednie w technologii LED
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lane assist - kontrola zmiany pasa ruchu
- 
- Kontrola odległości od poprzedzającego pojazdu
- 
- Ogranicznik prędkości
- 
- Asystent hamowania - Brake Assist
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- System rozpoznawania znaków drogowych
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Oświetlenie drogi do domu
- 
- Oświetlenie wnętrza LED
- 
- System Start/Stop
- 
- Elektryczny hamulec postojowy
- 
- Wspomaganie kierownicy`,id_wc_2:"20245",id_wc_1:"34197",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/Opel-Astra-1.4-Turbo-Business-komis-pulawy_002.png?updatedAt=1769726803186",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Asystent hamowania awaryjnego w mieście
- 
- System ostrzegający o możliwej kolizji
- 
- System powiadamiania o wypadku
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 16
- 
- Opony letnie`,marka:"Opel",wyposazenie:"",wersja:"K 1.4 Turbo Business",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_001.jpg?updatedAt=1763568555715
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_002.jpg?updatedAt=1763568555767
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_003.jpg?updatedAt=1763568555785
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_004.jpg?updatedAt=1763568555695
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_005.jpg?updatedAt=1763568555739
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_006.jpg?updatedAt=1763568555494
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_007.jpg?updatedAt=1763568553427
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_008.jpg?updatedAt=1763568553547
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_009.jpg?updatedAt=1763568554036
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_010.jpg?updatedAt=1763568555138
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_011.jpg?updatedAt=1763568553974
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_012.jpg?updatedAt=1763568555504
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_013.jpg?updatedAt=1763568555422
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_014.jpg?updatedAt=1763568555399
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_015.jpg?updatedAt=1763568555375
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_016.jpg?updatedAt=1763568555538
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_017.jpg?updatedAt=1763568555660
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_018.jpg?updatedAt=1763568555537
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_019.jpg?updatedAt=1763568555372
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_020.jpg?updatedAt=1763568555730
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_021.jpg?updatedAt=1763568555758
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_022.jpg?updatedAt=1763568555732
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_023.jpg?updatedAt=1763568555633
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_024.jpg?updatedAt=1763568555710
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_025.jpg?updatedAt=1763568555769
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_026.jpg?updatedAt=1763568555797
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_027.jpg?updatedAt=1763568555785
https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_028.jpg?updatedAt=1763568555707`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Opel Astra 1.4 Turbo Business K (2017) | 171k | Certyfikat – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 171206 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#OpelAstra1.4TurboBusinessK(2017)|171k|Certyfikat`,equip_komfort:`Klimatyzacja automatyczna, dwustrefowa
- 
- Tapicerka materiałowa
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica sportowa
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Kierownica ogrzewana
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"1399",cena:"39900",status:"",kolor:"Niebieski",naped:"Na przednie koła",paliwo:"Benzyna",przebieg:"171206",html_code:"18406",uc_beztla:`Zapraszamy do zakupu <b>Opla Astra z 2017 roku</b>


<li>Auto świeżo  z Holandii i zarejestrowane</li>

<li>Stan techniczny bardzo dobry, noszący normalne ślady użytkowania</li>

<li>Tapicerka i wnętrze czyste i zadbane.</li>


  <li>  Klimatyzacja sprawna</li>
<li>    <b>Certyfikat legalności przebiegu N.A.P.</b></li>
<li>    Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


--------

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


   <li> Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"Opel Astra 1.4 Turbo Business",link_glowne:"https://ik.imagekit.io/kduc81jzs/Opel%20Astra%201.4%20Turbo%20Business/Opel-Astra-1.4-Turbo-Business-komis-pulawy_001.jpg?updatedAt=1763568555715",faktura:"Vat marża",status_sprzedany:"TAK",equip_audio:`Apple CarPlay
- 
- Android Auto
- 
- Radio
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Astra 1.4 Turbo Business K (2017) | 171k | Certyfikat",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Opel Astra 1.4 Turbo Business K (2017) | 171k | Certyfikat świetny stan i udokumentowana historia.
✅ Przebieg: 171206 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Opel Astra 1.4 Turbo Business w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #OpelAstra1.4TurboBusinessK(2017)|171k|Certyfikat`,"skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"",moc:"109",slogan2:"",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne
- 
- Elektroniczna kontrola ciśnienia w oponach
- 
- Elektryczny hamulec postojowy`,id_wc_2:"20213",id_wc_1:"34420",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/download1.png?updatedAt=1769727012730",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- Aktywny asystent hamowania awaryjnego
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 17`,marka:"Peugeot",wyposazenie:"",wersja:"",typ_nadwozia:"Auta Minivan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_01.png?updatedAt=1767742880457
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_02.png?updatedAt=1767742880324
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_03.png?updatedAt=1767742880420
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_04.png?updatedAt=1767742880458
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_05.png?updatedAt=1767742880169
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_06.png?updatedAt=1767742880350
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_07.png?updatedAt=1767742880258
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_08.png?updatedAt=1767742880373
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_09.png?updatedAt=1767742880494
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_10.png?updatedAt=1767742880127
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_11.png?updatedAt=1767742880141
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_12.png?updatedAt=1767742880331
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_13.png?updatedAt=1767742880559
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_14.png?updatedAt=1767742880536
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_15.png?updatedAt=1767742880568
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_16.png?updatedAt=1767742880565
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_17.png?updatedAt=1767742880502
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_18.png?updatedAt=1767742879849
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_19.png?updatedAt=1767742880310
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_20.png?updatedAt=1767742879855
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_21.png?updatedAt=1767742880489
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_22.png?updatedAt=1767742880339
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_23.png?updatedAt=1767742880618
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_24.png?updatedAt=1767742880573
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_25.png?updatedAt=1767742880557
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_26.png?updatedAt=1767742880566
https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_27.png?updatedAt=1767742880629`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Peugeot 5008 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 275957 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#Peugeot5008`,equip_komfort:`Klimatyzacja automatyczna
- 
- Rolety na bocznych szybach opuszczane ręcznie
- 
- Dach panoramiczny
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1560",cena:"18900",status:"",kolor:"Szary",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"275957",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Peugeota 5008 z 2010</b> roku

Auto świeżo sprowadzone z Holandii i zarejestrowane

Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.

<li>Klimatyzacja sprawna</li>
<li><b>Certyfikat legalności przebiegu N.A.P.</b></li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>

——–

✅Auto nie zakupione na aukcji, przed zakupem zostało sprawdzone osobiście.

✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta

✅Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.

<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>
`,katalog:"peugeot 5008",link_glowne:"https://ik.imagekit.io/kduc81jzs/peugeot%205008/foto_01.png?updatedAt=1767742880457",faktura:"vat/marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- Wyświetlacz typu Head-Up`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"5008",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Peugeot 5008 świetny stan i udokumentowana historia.
✅ Przebieg: 275957 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz peugeot 5008 w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #Peugeot5008`,"skrzynia-biegow":"Manualna"},{rok:"2017",slogan1:"Certyfikat",moc:"120",slogan2:"",equip_systemy:`Tempomat
- 
- Lampy przednie w technologii LED
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Kamera parkowania tył
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy tylne w technologii LED
- 
- Oświetlenie wnętrza LED
- 
- System Start/Stop
- 
- Elektroniczna kontrola ciśnienia w oponach
- 
- Wspomaganie kierownicy`,id_wc_2:"19844",id_wc_1:"35901",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/peugeot%20308.png?updatedAt=1770058469914",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16
- 
- Opony letnie`,marka:"Peugeot",wyposazenie:"",wersja:"1.6 BlueHDi Business Line S&S",typ_nadwozia:"Kombi",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_00_ZLxL3nEUn.jpg?updatedAt=1772668875741
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_01_IsNXw4NF-.jpg?updatedAt=1772668876550
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_02_cmdwA7jWR.jpg?updatedAt=1772668877378
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_03_VC78OrwVE.jpg?updatedAt=1772668878204
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_04_ZdxLkTR0I.jpg?updatedAt=1772668879032
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_05_GOZERp6W-.jpg?updatedAt=1772668880318
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_06_GOCk4crzk.jpg?updatedAt=1772668881163
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_07_GIeemhF8b.jpg?updatedAt=1772668882010
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_08_kuZZ1pqJf.jpg?updatedAt=1772668882841
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_09_4kfLCEfXP.jpg?updatedAt=1772668883697
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_10_r3NKL5jTF.jpg?updatedAt=1772668884723
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_11_0wPm6p_7-.jpg?updatedAt=1772668885546
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_12_uea3DUgWA.jpg?updatedAt=1772668886391
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_13_RZCZkQf2u.jpg?updatedAt=1772668887222
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_14_JtQq9uyPg.jpg?updatedAt=1772668888204
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_15_YUTCAWlxr.jpg?updatedAt=1772668889048
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_16_D8GZKdoye.jpg?updatedAt=1772668889863
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_17_viyK_GGwE.jpg?updatedAt=1772668890695
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_18_PttJmmrtc.jpg?updatedAt=1772668891535
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_19_ovQumjxO1.jpg?updatedAt=1772668892453
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_20_JnUvQE7hg.jpg?updatedAt=1772668893395
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_21_KcDBlMUPZ.jpg?updatedAt=1772668894275
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_22_4DmB9_s0c.jpg?updatedAt=1772668895145
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_23_kYs5hgC0H.jpg?updatedAt=1772668895969
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_24_G40hHov9R.jpg?updatedAt=1772668896810
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_25_IMHKvp71w.jpg?updatedAt=1772668897655
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_26_ByTaMNrg4.jpg?updatedAt=1772668898456`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Peugeot 308 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 236194 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#Peugeot308`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna
- 
- Dach panoramiczny
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1560",cena:"33900",status:"",kolor:"Granatowy",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"236194",html_code:"",uc_beztla:`WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE

<li>-Auto sprowadzone i zarejestrowany</li>

<li>- Bogata wersja wyposażenia</li>

<li>-Stan techniczny i wizualny bardzo dobry</li>

<li>-Wnętrze czyste i zadbane</li>

<li>-Klimatyzacja sprawna</li>

<li>-<b>Certyfikat N.A.P</b></li>


<li>-<b>Rozrząd wymieniony przy 212 tys (12.2024)</b></li>


<li>-Kredytowanie na atrakcyjnych warunkach</li>

<li>-Możliwość pozostawienia samochodu w rozliczeniu</li>`,katalog:"Peugeot_308_2017_Kombi",link_glowne:"https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kombi/p_00_ZLxL3nEUn.jpg?updatedAt=1772668875741",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"308",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Peugeot 308 świetny stan i udokumentowana historia.
✅ Przebieg: 236194 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Peugeot_308_2017_Kombi w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #Peugeot308`,"skrzynia-biegow":"Manualna"},{rok:"2009",slogan1:"Certyfikat ",moc:"170",slogan2:"4x4 (stały)",equip_systemy:`Tempomat
- 
- Lampy bi-ksenonowe
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne
- 
- Lampy tylne w technologii LED`,id_wc_2:"32477",id_wc_1:"32477",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/download.png?updatedAt=1769727198112",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Boczne poduszki powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 19
- 
- Opony wielosezonowe`,marka:"Mercedes-benz",wyposazenie:"",wersja:"GLK 220 CDI - Certyfikat - Serwisowany -Super Stan",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_00_eiTOKxen1.jpg?updatedAt=1772474061379
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_01_KGkYcsC3w.jpg?updatedAt=1772474062202
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_02_B4xHWk8m6.jpg?updatedAt=1772474063015
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_03_1_f3pPBB8.jpg?updatedAt=1772474063817
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_04_NjAqlS5LQ.jpg?updatedAt=1772474064586
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_05_6ez1Nd_dJ.jpg?updatedAt=1772474065384
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_06_Bdp-GH9jO.jpg?updatedAt=1772474066142
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_07_s49Ynr73a.jpg?updatedAt=1772474066924
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_08_Eut1-35Pw.jpg?updatedAt=1772474067734
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_09_TJuR9jYBj.jpg?updatedAt=1772474068500
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_10_2mY6Nan9E.jpg?updatedAt=1772474069295
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_11_lBp_4oG5z.jpg?updatedAt=1772474070100
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_12_QXDrW4gkq.jpg?updatedAt=1772474070889
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_13_A1FJI2vLW.jpg?updatedAt=1772474071668
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_14_A7h0oe14q.jpg?updatedAt=1772474072431
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_15_yu1q39fTQ.jpg?updatedAt=1772474073239
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_16_sIK0Q0zO_.jpg?updatedAt=1772474074018
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_17_2P4laeJrS.jpg?updatedAt=1772474074781
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_18_JoH2DP2G6.jpg?updatedAt=1772474075560
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_19_UUetF7-ax.jpg?updatedAt=1772474076331
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_20_lqa_LpjyqU.jpg?updatedAt=1772474077089
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_21_MqIP9rxgo.jpg?updatedAt=1772474077878
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_22_k5RbV-HkOL.jpg?updatedAt=1772474078642
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_23_tn2Z3CBOJ.jpg?updatedAt=1772474079416
https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_25_-_eXxKetI.jpg?updatedAt=1772474080965`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Mercedes-benz Glk – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 304504 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#Mercedes-benzGlk`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna, dwustrefowa
- 
- Tapicerka częściowo skórzana
- 
- Elektrycznie ustawiany fotel kierowcy
- 
- Elektrycznie ustawiany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Cyfrowy kluczyk
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"2 143 cm3",cena:"38500",status:"",kolor:"Metalik",naped:"4x4 (stały)",paliwo:"Diesel",przebieg:"304504",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>MERCEDES 220 CDI 4-MATIC Z 2009 ROKU</b>

Auto świeżo sprowadzone z Holandii i zarejestrowane

Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

<li>Tapicerka i wnętrze czyste i zadbane.</li>
<li>Klimatyzacja sprawna</li>
<li>Certyfikat legalności przebiegu</li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


——–

<li>✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.</li>
<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"mercedes-benz_glk",link_glowne:"https://ik.imagekit.io/kduc81jzs/mercedes-benz_glk/p_00_eiTOKxen1.jpg?updatedAt=1772474061379",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- System nawigacji satelitarnej`,opis:`Zapraszamy do zakupu MERCEDES 220 CDI 4-MATIC Z 2009 ROKU

Auto świeżo sprowadzone z Holandii i zarejestrowane

Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.
Klimatyzacja sprawna
Certyfikat legalności przebiegu
Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej

——–

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.
Możliwość transportu auta w dowolne miejsce
Możliwość zostawienia swojego auta w rozliczeniu
WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ`," LINK_LINK-PUSTE-AUTO":"",model:"Glk",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Mercedes-benz Glk świetny stan i udokumentowana historia.
✅ Przebieg: 304504 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz mercedes-benz_glk w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #Mercedes-benzGlk`,"skrzynia-biegow":"Automatyczna"},{rok:"2015",slogan1:"187042 tys. przebieg",moc:"120",slogan2:"",equip_systemy:`Tempomat
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Kontrola trakcji
- 
- Światła do jazdy dziennej`,id_wc_2:"19677",id_wc_1:"35573",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/foto_02.png?updatedAt=1769727249299",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Poduszka powietrzna pasażera
- 
- Poduszka kolan kierowcy
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 16
- 
- Opony wielosezonowe`,marka:"Jeep",wyposazenie:"",wersja:"1.4 MultiAir Longitude",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_00_airz38Ir8.jpg?updatedAt=1772583217614
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_01_MUxFytD2F.jpg?updatedAt=1772583218376
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_02_naRcSyKKA.jpg?updatedAt=1772583219207
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_03_0h8tBoab0.jpg?updatedAt=1772583219992
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_04_yWIf74JTl.jpg?updatedAt=1772583220775
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_05_YLIdNTMxC0.jpg?updatedAt=1772583221557
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_06_0IKcUL8Os.jpg?updatedAt=1772583222363
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_07_CCN6y9qML.jpg?updatedAt=1772583223130
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_08_y3rBj1JCP.jpg?updatedAt=1772583223935
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_09_WlIvYOXKB.jpg?updatedAt=1772583224849
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_10_DVyeEQGcd.jpg?updatedAt=1772583225699
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_11_G0EAkuN5z.jpg?updatedAt=1772583226472
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_12_9QIJKiOeg.jpg?updatedAt=1772583227285
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_13_UrLedmNTt.jpg?updatedAt=1772583228091
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_14_8De1MfRAY.jpg?updatedAt=1772583228901
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_15_B12J3mxso.jpg?updatedAt=1772583229657
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_16_oJ8rAj5A-.jpg?updatedAt=1772583230463
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_17_BHhtVF6sh.jpg?updatedAt=1772583231224
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_18_SH9v2wEzT.jpg?updatedAt=1772583231998
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_19_EHxV2P9SP.jpg?updatedAt=1772583232747
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_20_OjXyoL9LVg.jpg?updatedAt=1772583233532
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_21_nwsFQhvxQ.jpg?updatedAt=1772583234306
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_22_cBDAZz_No.jpg?updatedAt=1772583235087
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_23_3bHI1ZM1u.jpg?updatedAt=1772583235906
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_24_1meIBl_kY.jpg?updatedAt=1772583236728
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_25_6ewVad7Mdg.jpg?updatedAt=1772583237559
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_26_W2DkvXqo5H.jpg?updatedAt=1772583238360
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_27_JHnH6TMk8.jpg?updatedAt=1772583239135
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_28_PLLHLj7E2.jpg?updatedAt=1772583239981
https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_29_2oK6hsGFo.jpg?updatedAt=1772583240770`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Jeep Renegade – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 187042 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#JeepRenegade`,equip_komfort:`Klimatyzacja manualna
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna`,"pojemnosc-silnika":"1368 cm3",cena:"43900",status:"",kolor:"Czarny",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"187042",html_code:"",uc_beztla:`Zapraszamy do zakupu JEEP RENEGADE z 2015 roku


Auto świeżo sprowadzone z Niemiec i zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


 <li>Klimatyzacja sprawna</li>
<li><b>Pisemne potwierdzenie przebiegu</b></li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


<b>Rozrząd wymieniony przy 130 tys (02.2022)</b>

--------


<li>✅Auto nie zakupione na aukcji, przed zakupem zostało sprawdzone osobiście.</li>
<li>✅Dzięki <b>certyfikatowi 100%-wa pewność przebiegu i oryginalności</b> auta</li>
<li>✅Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.</li>



    Możliwość transportu auta w dowolne miejsce
    Możliwość zostawienia swojego auta w rozliczeniu
    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ`,katalog:"jeep_renegade",link_glowne:"https://ik.imagekit.io/kduc81jzs/jeep_renegade/p_00_airz38Ir8.jpg?updatedAt=1772583217614",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Renegade",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Jeep Renegade świetny stan i udokumentowana historia.
✅ Przebieg: 187042 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz jeep_renegade w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #JeepRenegade`,"skrzynia-biegow":"Manualna"},{rok:"2015",slogan1:"CERTYFIKAT",moc:"120",slogan2:"",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Asystent hamowania - Brake Assist
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- System rozpoznawania znaków drogowych
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej
- 
- Światła do jazdy dziennej diodowe LED
- 
- Oświetlenie drogi do domu
- 
- System Start/Stop`,id_wc_2:"20185",id_wc_1:"35421",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/output_003.png?updatedAt=1769727289259",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Poduszka kolan pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)
- 
- System zabezpieczający podczas dachowania`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16
- 
- Opony zimowe
- 
- Zawieszenie komfortowe`,marka:"Volvo",wyposazenie:"",wersja:"Super Stan",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_00.jpg?updatedAt=1772017640063
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_01.jpg?updatedAt=1772017640100
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_02.jpg?updatedAt=1772017640714
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_03.jpg?updatedAt=1772017640890
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_04.jpg?updatedAt=1772017640897
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_05.jpg?updatedAt=1772017641050
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_06.jpg?updatedAt=1772017640930
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_07.jpg?updatedAt=1772017641001
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_08.jpg?updatedAt=1772017641128
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_09.jpg?updatedAt=1772017640989
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_10.jpg?updatedAt=1772017641024
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_11.jpg?updatedAt=1772017641126
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_12.jpg?updatedAt=1772017640887
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_13.jpg?updatedAt=1772017640875
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_14.jpg?updatedAt=1772017640996
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_15.jpg?updatedAt=1772017640906
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_16.jpg?updatedAt=1772017641027
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_17.jpg?updatedAt=1772017641139
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_18.jpg?updatedAt=1772017641119
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_19.jpg?updatedAt=1772017641142
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_20.jpg?updatedAt=1772017640873
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_21.jpg?updatedAt=1772017640904
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_22.jpg?updatedAt=1772017640880
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_23.jpg?updatedAt=1772017640144
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_24.jpg?updatedAt=1772017640138
https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_25.jpg?updatedAt=1772017640168`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Volvo V40 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 256714 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#VolvoV40`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna, dwustrefowa
- 
- Tapicerka częściowo skórzana
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Podgrzewana przednia szyba
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"2000",cena:"33900",status:"Opublikowany",kolor:"Granatowy",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"256714",html_code:"",uc_beztla:`
Zapraszamy do zakupu<b> VOLVO V40 z 2015</b> roku

Auto świeżo sprowadzone z Holandii i zarejestrowane

Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

<li>Tapicerka i wnętrze czyste i zadbane.</li>
<li><b>Rozrząd wymieniony przy 187 tys (02.2023)</b></li>
<li>Klimatyzacja sprawna</li>
<li><b>Certyfikat legalności przebiegu</b></li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>

——–

✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.

<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>
`,katalog:"Volvo_V40",link_glowne:"https://ik.imagekit.io/kduc81jzs/Volvo_V40/foto_00.jpg?updatedAt=1772017640063",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"V40",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Volvo V40 świetny stan i udokumentowana historia.
✅ Przebieg: 256714 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Volvo_V40 w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #VolvoV40`,"skrzynia-biegow":"Manualna"},{rok:"2016",slogan1:"154 tys. przebieg",moc:"117",slogan2:"Certryfikat",equip_systemy:`Tempomat
- 
- Lampy ksenonowe
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Światła do jazdy dziennej
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Oświetlenie drogi do domu
- 
- System Start/Stop
- 
- Wspomaganie kierownicy`,id_wc_2:"19872",id_wc_1:"35922",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/mits-tlo.png?updatedAt=1769872150084",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- System rekomendacji przerw podczas trasy
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Poduszka kolan pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 18
- 
- Opony zimowe`,marka:"Mitsubishi",wyposazenie:"",wersja:"1.6 2WD Intense",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(1).jpg?updatedAt=1773165260556
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(2).jpg?updatedAt=1773165260767
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(3).jpg?updatedAt=1773165260511
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(4).jpg?updatedAt=1773165260673
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(5).jpg?updatedAt=1773165259208
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(6).jpg?updatedAt=1773165260891
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(7).jpg?updatedAt=1773165260849
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(8).jpg?updatedAt=1773165260721
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(9).jpg?updatedAt=1773165260681
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(10).jpg?updatedAt=1773165259023
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(11).jpg?updatedAt=1773165259386
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(12).jpg?updatedAt=1773165259482
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(13).jpg?updatedAt=1773165259835
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(14).jpg?updatedAt=1773165260666
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(15).jpg?updatedAt=1773165260875
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(16).jpg?updatedAt=1773165260404
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(17).jpg?updatedAt=1773165259827
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(18).jpg?updatedAt=1773165260446
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(19).jpg?updatedAt=1773165260007
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(20).jpg?updatedAt=1773165259116
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(21).jpg?updatedAt=1773165260838
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(22).jpg?updatedAt=1773165260682
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(23).jpg?updatedAt=1773165260457
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(24).jpg?updatedAt=1773165260755
https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(25).jpg?updatedAt=1773165260747`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Mitsubishi ASX » 154 tys.przebieg » Certyfikat – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 154035 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#MitsubishiASX»154tys.przebieg»Certyfikat`,equip_komfort:`Klimatyzacja automatyczna
- 
- Dach panoramiczny
- 
- Tapicerka materiałowa
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1590",cena:"46900",status:"",kolor:"Biały",naped:"Na przednie koła",paliwo:"Benzyna",przebieg:"154035",html_code:"",uc_beztla:`Zapraszamy do zakupu<b> MITSUBISHI ASX Z 2016 </b>roku



Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


<li>Klimatyzacja automatyczna</li>
<li>Tempomat</li>
<li>Podgrzewane i składane lusterka</li>
<li>System Start-Stop</li>
<li>Czujniki parkowania</li>
<li>Światła ksenonowe, LED</li>
<li>Bluetooth, radio, USB</li>
<li>Wielofunkcyjna kierownica</li>
<li>Panorama dach</li>
<li>Certyfikat legalności przebiegu</li>
Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej


--------

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.



<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>


Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Mitsubishi ASX 1.6 2WD Intense",link_glowne:"https://ik.imagekit.io/kduc81jzs/Mitsubishi%20ASX%201.6%202WD%20Intense/mitsubishi%20asx-suv%20z%20certyfikatem-pulawy-lubelska-10%20(1).jpg?updatedAt=1773165260556",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"ASX » 154 tys.przebieg » Certyfikat",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Mitsubishi ASX » 154 tys.przebieg » Certyfikat świetny stan i udokumentowana historia.
✅ Przebieg: 154035 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Mitsubishi ASX 1.6 2WD Intense w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #MitsubishiASX»154tys.przebieg»Certyfikat`,"skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"Certyfikat",moc:"115",slogan2:"Serwisowany",equip_systemy:`Tempomat
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Podgrzewane lusterka boczne
- 
- Kontrola trakcji
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej
- 
- Wspomaganie kierownicy`,id_wc_2:"35926",id_wc_1:"35926",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/opel%20astra%20k?updatedAt=1769867280678",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- System powiadamiania o wypadku
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony wielosezonowe`,marka:"Opel",wyposazenie:"",wersja:"1.6 Edition",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_00_WESIgRsGM.jpg?updatedAt=1772470758003
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_01_aMBV5JoFo.jpg?updatedAt=1772470758826
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_02_7Bd5eQr82.jpg?updatedAt=1772470759619
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_03_AJxbRQ8e2.jpg?updatedAt=1772470760422
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_04_YvH87acMJ.jpg?updatedAt=1772470761217
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_05_4lfOUqPaE.jpg?updatedAt=1772470761997
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_06_cJwdTxWMl.jpg?updatedAt=1772470762812
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_07_lrBrrAfUfk.jpg?updatedAt=1772470763619
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_08_JpDJpKP_j.jpg?updatedAt=1772470764406
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_09_4uC0vAasM.jpg?updatedAt=1772470765188
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_10_w59de5wYx.jpg?updatedAt=1772470765991
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_11_j3cDgTcXE.jpg?updatedAt=1772470766787
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_12__Njjp6w3-I.jpg?updatedAt=1772470767587
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_13_5qdCZdE2rA.jpg?updatedAt=1772470768479
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_14_E2_p9ByVT.jpg?updatedAt=1772470769264
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_15_CDRz4glrW.jpg?updatedAt=1772470770035
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_16_-Od-bPfa6.jpg?updatedAt=1772470770818
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_17_kQ18W6KGb.jpg?updatedAt=1772470771598
https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_18_HUfjnBYPT.jpg?updatedAt=1772470772065`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Opel Astra – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 240601 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#OpelAstra`,equip_komfort:`Hak
- 
- Klimatyzacja manualna
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"1598",cena:"19900",status:"",kolor:"Metalik",naped:"NA PRZEDNIE KOŁA",paliwo:"Benzyna",przebieg:"240601",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Opla Astra z 2010</b> roku


Auto  sprowadzone z Holandii i zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania


Tapicerka i wnętrze czyste i zadbane.

<li>Klimatyzacja sprawna</li>
<li><b>Certyfikat legalności przebiegu N.A.P.</b></li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>



--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>
<li>-<b>Vin dostępny na życzenie</b></li>
<li>-W razie pytań dodatkowych, proszę dzwonić, chętnie udzielę wszystkich informacji.</li>`,katalog:"Opel_Astra_2010_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Opel_Astra_2010_Kompakt/p_00_WESIgRsGM.jpg?updatedAt=1772470758003",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Astra",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Opel Astra świetny stan i udokumentowana historia.
✅ Przebieg: 240601 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Opel_Astra_2010_Kompakt w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #OpelAstra`,"skrzynia-biegow":"Manualna"},{rok:"2013",slogan1:"Certyfikat",moc:"115",slogan2:"średnie spalanie 3,7 l/100km",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Kontrola trakcji
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej
- 
- System Start/Stop`,id_wc_2:"35927",id_wc_1:"35927",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/volvo-v4-biale.png?updatedAt=1769727499360",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16
- 
- Opony wielosezonowe`,marka:"Volvo",wyposazenie:"",wersja:"D2 Summum",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_00.jpg?updatedAt=1774190737817
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_01.jpg?updatedAt=1774190739021
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_02.jpg?updatedAt=1774190740232
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_03.jpg?updatedAt=1774190741419
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_04.jpg?updatedAt=1774190742591
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_05.jpg?updatedAt=1774190743792
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_06.jpg?updatedAt=1774190744956
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_07.jpg?updatedAt=1774190746123
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_08.jpg?updatedAt=1774190747295
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_09.jpg?updatedAt=1774190748462
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_10.jpg?updatedAt=1774190749696
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_11.jpg?updatedAt=1774190750894
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_12.jpg?updatedAt=1774190752038
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_13.jpg?updatedAt=1774190753190
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_14.jpg?updatedAt=1774190754390
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_15.jpg?updatedAt=1774190755538
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_16.jpg?updatedAt=1774190756704
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_17.jpg?updatedAt=1774190757922
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_18.jpg?updatedAt=1774190759113
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_19.jpg?updatedAt=1774190760305
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_20.jpg?updatedAt=1774190761459
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_21.jpg?updatedAt=1774190762634
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_22.jpg?updatedAt=1774190763805
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_23.jpg?updatedAt=1774190764959
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_24.jpg?updatedAt=1774190766144
https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_25.jpg?updatedAt=1774190767314`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Volvo V40 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 263542 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#VolvoV40`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna
- 
- Tapicerka skórzana
- 
- Elektrycznie ustawiany fotel kierowcy
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Podgrzewana przednia szyba
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"1560",cena:"29900",status:"",kolor:"Biały",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"263542",html_code:"",uc_beztla:`Zapraszamy do zakupu auta <b>Volvo V40 z 2013</b> roku

<li>Auto świeżo sprowadzone z krajów UE i zarejestrowane</li>
<li>Stan techniczny bardzo dobry, noszący normalne ślady użytkowania</li>
<li>Tapicerka skórzana i wnętrze czyste oraz zadbane</li>
<li>Bogata wersja wyposażenia<b> Summum D2</b></li>
<li>Ekonomiczny silnik diesla 1.6 o mocy 115 KM – średnie spalanie 3,7 l/100km</li>
<li>Przebieg: 263 542 km</li>

Klimatyzacja automatyczna sprawna

<b>Certyfikat legalności przebiegu</b>

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej

ABS, ESP, ASR
Tempomat
Skórzana tapicerka
Grzane fotele
Poduszki powietrzne przód/bok/kurtyny
System Start-Stop
Alufelgi 16″
Radio, sterowanie z kierownicy
Sensor deszczu
Elektryczne szyby i lusterka, składane lusterka
Isofix

——–

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.

<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>

Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Volvo_V40_D2_Summum_bialy",link_glowne:"https://ik.imagekit.io/kduc81jzs/Volvo_V40_D2_Summum_bialy/Volvo_V40_2013_p_00.jpg?updatedAt=1774190737817",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"V40",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Volvo V40 świetny stan i udokumentowana historia.
✅ Przebieg: 263542 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Volvo_V40_D2_Summum_bialy w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #VolvoV40`,"skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"188 tys. przebieg",moc:"115",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Podgrzewane lusterka boczne
- 
- Kontrola trakcji
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne
- 
- Wspomaganie kierownicy`,id_wc_2:"35928",id_wc_1:"35928",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/output_002.png?updatedAt=1769865253925",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- System powiadamiania o wypadku
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony wielosezonowe`,marka:"Opel",wyposazenie:"",wersja:"1.6 Edition",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_00.jpg?updatedAt=1773760580248
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_01.jpg?updatedAt=1773760581048
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_02.jpg?updatedAt=1773760581807
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_03.jpg?updatedAt=1773760582597
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_04.jpg?updatedAt=1773760583396
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_05.jpg?updatedAt=1773760584194
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_06.jpg?updatedAt=1773760584995
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_07.jpg?updatedAt=1773760585784
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_08.jpg?updatedAt=1773760586554
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_09.jpg?updatedAt=1773760587322
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_10.jpg?updatedAt=1773760588137
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_11.jpg?updatedAt=1773760588938
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_12.jpg?updatedAt=1773760589748
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_13.jpg?updatedAt=1773760590511
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_14.jpg?updatedAt=1773760591295
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_15.jpg?updatedAt=1773760592078
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_16.jpg?updatedAt=1773760592846
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_17.jpg?updatedAt=1773760593621
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_18.jpg?updatedAt=1773760594381
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_19.jpg?updatedAt=1773760595157
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_20.jpg?updatedAt=1773760595950
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_21.jpg?updatedAt=1773760596736
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_22.jpg?updatedAt=1773760597557
https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_23.jpg?updatedAt=1773760598338`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Opel Astra – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 188093 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#OpelAstra`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna, dwustrefowa
- 
- Tapicerka materiałowa
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie`,"pojemnosc-silnika":"1598",cena:"20900",status:"",kolor:"Czerwony",naped:"Na przednie koła",paliwo:"Benzyna",przebieg:"188093",html_code:"",uc_beztla:`WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE



Auto sprowadzone i zarejestrowane



- Bogata wersja wyposażenia



-Stan techniczny i wizualny bardzo dobry



-Wnętrze czyste i zadbane



-Klimatyzacja sprawna



-Książka serwisowa



-Certyfikat N.A.P



-Vin dostępny na życzenie



Rozrząd wymieniony przy 188 tys (09.2025)



-Kredytowanie na atrakcyjnych warunkach



-Możliwość pozostawienia samochodu w rozliczeniu



-W razie pytań dodatkowych, proszę dzwonić, chętnie udzielę wszystkich informacji.`,katalog:"opel_astra_czerwony",link_glowne:"https://ik.imagekit.io/kduc81jzs/opel_astra_czerwony/Opel_Astra_2010_p_00.jpg?updatedAt=1773760580248",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Astra",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Opel Astra świetny stan i udokumentowana historia.
✅ Przebieg: 188093 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz opel_astra_czerwony w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #OpelAstra`,"skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"Certyfikat",moc:"109",slogan2:"208k",equip_systemy:`Tempomat
- 
- Kontrola trakcji
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne`,id_wc_2:"20034",id_wc_1:"35930",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/volvoc30.png?updatedAt=1769869805190",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 18
- 
- Opony letnie`,marka:"Volvo",wyposazenie:"",wersja:"1.6D DRIVe Momentum",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(2).webp?updatedAt=1769869758204
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(3).webp?updatedAt=1769869757811
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(4).webp?updatedAt=1769869757836
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(5).webp?updatedAt=1769869758133
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(6).webp?updatedAt=1769869758171
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(7).webp?updatedAt=1769869758196
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(8).webp?updatedAt=1769869758223
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(9).webp?updatedAt=1769869758217
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(10).webp?updatedAt=1769869758166
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(11).webp?updatedAt=1769869758185
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(12).webp?updatedAt=1769869758149
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(13).webp?updatedAt=1769869758243
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(14).webp?updatedAt=1769869758236
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(15).webp?updatedAt=1769869758148
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(16).webp?updatedAt=1769869758194
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(17).webp?updatedAt=1769869757431
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(18).webp?updatedAt=1769869757624
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(19).webp?updatedAt=1769869757911
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(20).webp?updatedAt=1769869757806
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(21).webp?updatedAt=1769869757809
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(22).webp?updatedAt=1769869757760
https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(100).webp?updatedAt=1769869758187`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Volvo C30 » Certyfikat » 208k – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 208347 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#VolvoC30»Certyfikat»208k`,equip_komfort:`Klimatyzacja automatyczna
- 
- Szyberdach szklany - przesuwny i uchylny elektrycz
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie`,"pojemnosc-silnika":"1560",cena:"19900",status:"",kolor:"Czarny",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"208347",html_code:"",uc_beztla:`WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE



Auto sprowadzone i zarejestrowane



<li>- Bogata wersja wyposażenia</li>



<li>-Stan techniczny i wizualny bardzo dobry</li>



<li>-Wnętrze czyste i zadbane</li>



<li>-Klimatyzacja sprawna</li>



<li><b>-Książka serwisowa</b></li>



<li><b>-Certyfikat N.A.P</b></li>



<li>- Dwa kluczyki</li>



<li>-Kredytowanie na atrakcyjnych warunkach</li>



<li>-Możliwość pozostawienia samochodu w rozliczeniu</li>`,katalog:"volvoC30",link_glowne:"https://ik.imagekit.io/kduc81jzs/volvoC30/volvo%20%20c30%20diesel%20pewne%20auta%20pu%C5%82awy%20-%20lubelska%2010-603%20616%20448%20(2).webp?updatedAt=1769869758204",faktura:"Vat/Marża",status_sprzedany:"NIE",equip_audio:`Radio
- 
- Gniazdo USB`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"C30 » Certyfikat » 208k",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Volvo C30 » Certyfikat » 208k świetny stan i udokumentowana historia.
✅ Przebieg: 208347 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz volvoC30 w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #VolvoC30»Certyfikat»208k`,"skrzynia-biegow":"Manualna"},{rok:"2017",slogan1:"142k przebieg",moc:"180132",slogan2:"Certyfikat",equip_systemy:`Tempomat adaptacyjny ACC
- 
- Lampy przednie w technologii LED
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Park Assistant - asystent parkowania
- 
- Kamera panoramiczna 360
- 
- Kamera parkowania tył
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Kamera w lusterku bocznym
- 
- Asystent (czujnik) martwego pola
- 
- Lane assist - kontrola zmiany pasa ruchu
- 
- Asystent hamowania - Brake Assist
- 
- Kontrola trakcji
- 
- Automatyczna kontrola zjazdu ze stoku
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Aktywne rozpoznawanie znaków ograniczenia prędkości
- 
- System rozpoznawania znaków drogowych
- 
- Asystent świateł drogowych
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Światła do jazdy dziennej
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Lampy tylne w technologii LED
- 
- Oświetlenie wnętrza LED
- 
- Elektroniczna kontrola ciśnienia w oponach
- 
- Elektryczny hamulec postojowy
- 
- Blokada mechanizmu różnicowego`,id_wc_2:"20065",id_wc_1:"35931",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/landrover.png?updatedAt=1769873186236",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- Asystent hamowania awaryjnego w mieście
- 
- System chroniący przed kolizja, tylny
- 
- Alarm ruchu poprzecznego z tyłu pojazdu
- 
- System powiadamiania o wypadku
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 20
- 
- Opony wielosezonowe`,marka:"Land Rover",wyposazenie:"",wersja:" V 2.0 TD4 HSE Luxury",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(1).jpg?updatedAt=1769873223956
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(01).jpg?updatedAt=1769873419700
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(2).jpg?updatedAt=1769873223832
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(3).jpg?updatedAt=1769873223962
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(4).jpg?updatedAt=1769873224059
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(5).jpg?updatedAt=1769873224059
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(6).jpg?updatedAt=1769873223472
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(7).jpg?updatedAt=1769873223880
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(8).jpg?updatedAt=1769873224037
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(9).jpg?updatedAt=1769873224015
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(10).jpg?updatedAt=1769873223973
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(11).jpg?updatedAt=1769873223726
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(12).jpg?updatedAt=1769873223783
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(13).jpg?updatedAt=1769873223851
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(14).jpg?updatedAt=1769873223909
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(15).jpg?updatedAt=1769873224048
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(16).jpg?updatedAt=1769873224068
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(17).jpg?updatedAt=1769873223445
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(18).jpg?updatedAt=1769873224034
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(19).jpg?updatedAt=1769873224072
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(20).jpg?updatedAt=1769873224003
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(21).jpg?updatedAt=1769873224023
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(22).jpg?updatedAt=1769873224077
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(23).jpg?updatedAt=1769873224055
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(24).jpg?updatedAt=1769873224073
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(25).jpg?updatedAt=1769873223902
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(26).jpg?updatedAt=1769873223991
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(30).jpg?updatedAt=1769873223972
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(31).jpg?updatedAt=1769873223515
https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(280).jpg?updatedAt=1769873433135`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Land Rover Discovery V 2.0 D 180 KM | 142k | Certyfikat – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 142445 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#LandRoverDiscoveryV2.0D180KM|142k|Certyfikat`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna: 3 strefowa
- 
- Szyberdach szklany - przesuwny i uchylny elektrycz
- 
- Tapicerka skórzana
- 
- Klimatyzacja dla pasażerów z tyłu
- 
- Elektrycznie ustawiany fotel kierowcy
- 
- Elektrycznie ustawiany fotel pasażera
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Siedzenie z pamięcią ustawienia
- 
- Ogrzewane siedzenia tylne
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kolumna kierownicy regulowana elektrycznie
- 
- Kierownica wielofunkcyjna
- 
- Kierownica ogrzewana
- 
- Zmiana biegów w kierownicy
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Podgrzewana przednia szyba
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1999",cena:"129000",status:"",kolor:"Czarny",naped:"4x4",paliwo:"Diesel",przebieg:"142445",html_code:"",uc_beztla:`WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE



Auto sprowadzone i zarejestrowane



- Bogata wersja wyposażenia



-Stan techniczny i wizualny bardzo dobry



-Wnętrze czyste i zadbane



-Książka serwisowa



-Certyfikat N.A.P



- Dwa kluczyki



-Kredytowanie na atrakcyjnych warunkach



-Możliwość pozostawienia samochodu w rozliczeniu`,katalog:"landrover",link_glowne:"https://ik.imagekit.io/kduc81jzs/landrover/landrover-auto-handel-pulawy-lubelska-10%20(1).jpg?updatedAt=1769873223956",faktura:"",status_sprzedany:"NIE",equip_audio:`Apple CarPlay
- 
- Android Auto
- 
- Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- System nagłośnienia
- 
- Ekran dotykowy
- 
- Sterowanie funkcjami pojazdu za pomocą głosu
- 
- Dostęp do internetu`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Discovery V 2.0 D 180 KM | 142k | Certyfikat",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Land Rover Discovery V 2.0 D 180 KM | 142k | Certyfikat świetny stan i udokumentowana historia.
✅ Przebieg: 142445 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz landrover w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #LandRoverDiscoveryV2.0D180KM|142k|Certyfikat`,"skrzynia-biegow":"Automatyczna"},{rok:"2012",slogan1:"Nowy Rozrząd",moc:"110",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Wspomaganie kierownicy`,id_wc_2:"20097",id_wc_1:"35935",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/renault%20scenic%20-%20pewnw%20auta%20pulawy%20-%20lubelska%2010%20(20)_prev_ui.png?updatedAt=1769727076861",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony letnie`,marka:"Renault",wyposazenie:"",wersja:"1.5 dCi Expression",typ_nadwozia:"Auta Minivan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-2.JPG?updatedAt=1760568204069
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-3.JPG?updatedAt=1760568204094
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-4.JPG?updatedAt=1760568204091
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-5.JPG?updatedAt=1760568203980
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-6.JPG?updatedAt=1760568204104
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-7.JPG?updatedAt=1760568203713
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-8.JPG?updatedAt=1760568204101
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-9.JPG?updatedAt=1760568203846
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-10.JPG?updatedAt=1760568203820
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-11.JPG?updatedAt=1760568203922
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-12.JPG?updatedAt=1760568204097
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-13.JPG?updatedAt=1760568203995
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-14.JPG?updatedAt=1760568203825
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-15.JPG?updatedAt=1760568204135
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-16.JPG?updatedAt=1760568203173
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-17.JPG?updatedAt=1760568203871
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-18.JPG?updatedAt=1760568203818
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-19.JPG?updatedAt=1760568204076
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-20.JPG?updatedAt=1760568202992
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-21.JPG?updatedAt=1760568204100
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-22.JPG?updatedAt=1760568204148
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-23.JPG?updatedAt=1760568204110
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-24.JPG?updatedAt=1760568204043
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-25.JPG?updatedAt=1760568204118
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-26.JPG?updatedAt=1760568203569
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-27.JPG?updatedAt=1760568204171
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-28.JPG?updatedAt=1760568204090
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-29.JPG?updatedAt=1760568203917
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-30.JPG?updatedAt=1760568204156
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-32.JPG?updatedAt=1760568204183
https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy.JPG?updatedAt=1760568203986`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Renault Scenic | Nowy Rozrząd | Certyfikat – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 226484 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#RenaultScenic|NowyRozrząd|Certyfikat`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna, dwustrefowa
- 
- Rolety na bocznych szybach opuszczane ręcznie
- 
- Tapicerka częściowo skórzana
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica wielofunkcyjna
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1461",cena:"20900",status:"",kolor:"Beżowy",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"226484",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Renault Scenic z 2012</b> roku


Auto sprowadzone z Holandii i zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


  <li>  Bogata wersja wyposażenia</li>
<li>    Klimatyzacja sprawna</li>
<li>    Książka serwisowa</li>
<li>   <b> Certyfikat legalności przebiegu N.A.P</b>.</li>
<li>    Dwa kluczyki</li>
<li>    <b>Rozrząd wymieniony przy 226 tys (03.2025)</b></li>
<li>    Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


--------

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


  <li>  Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"renault scenik bezowy",link_glowne:"https://ik.imagekit.io/kduc81jzs/renault%20scenik%20bezowy/Renault%20Scenic%20Pewne%20auta%20z%20certyfikatem-auto%20handel%20pu%C5%82awy-2.JPG?updatedAt=1760568204069",faktura:"VAT/Marżą",status_sprzedany:"NIE",equip_audio:"Radio",opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Scenic | Nowy Rozrząd | Certyfikat",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Renault Scenic | Nowy Rozrząd | Certyfikat świetny stan i udokumentowana historia.
✅ Przebieg: 226484 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz renault scenik bezowy w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #RenaultScenic|NowyRozrząd|Certyfikat`,"skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"Certyfikat",moc:"141",slogan2:"Xenon",equip_systemy:`Tempomat
- 
- Lampy ksenonowe
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Kamera panoramiczna 360
- 
- Kamera parkowania tył
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Lampy przeciwmgielne`,id_wc_2:"35937",id_wc_1:"35937",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/nissan_qashqai.png?updatedAt=1770388658609",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"Felgi aluminiowe 18",marka:"Nissan",wyposazenie:"",wersja:"2.0 tekna | 2010 | 2.0 B. | Certyfikat ",typ_nadwozia:"SUV",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_01.jpg?updatedAt=1773861550514
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_03.jpg?updatedAt=1773861552827
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_04.jpg?updatedAt=1773861554048
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_07.jpg?updatedAt=1773861557509
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_08.jpg?updatedAt=1773861558685
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_18.jpg?updatedAt=1773861570320
https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_25.jpg?updatedAt=1773861578517`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Nissan Qashqai – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 246940 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#NissanQashqai`,equip_komfort:`Klimatyzacja automatyczna, dwustrefowa
- 
- Dach panoramiczny
- 
- Tapicerka skórzana
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1997",cena:"29900",status:"",kolor:"Czarny",naped:"Na przednie koła",paliwo:"Benzyna",przebieg:"246940",html_code:"",uc_beztla:`Zapraszamy do zakupu NISSAN QASHQAI Z 2010 roku


Auto świeżo sprowadzone z Holandii i zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


 <li>   Klimatyzacja sprawna</li>
<li>    <b>Certyfikat legalności przebiegu</b></li>
<li>    Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>

Vin dostępny na życzenie

--------


✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta

✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


<li>    Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"Nissan_Qashqai_2_0_tekna",link_glowne:"https://ik.imagekit.io/kduc81jzs/Nissan_Qashqai_2_0_tekna/Nissan_Qashqai_2010_p_01.jpg?updatedAt=1773861550514",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- System nagłośnienia
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Qashqai",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Nissan Qashqai świetny stan i udokumentowana historia.
✅ Przebieg: 246940 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Nissan_Qashqai_2_0_tekna w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #NissanQashqai`,"skrzynia-biegow":"Manualna"},{rok:"2015",slogan1:"Certyfikat",moc:"120",slogan2:"",equip_systemy:`Tempomat
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Kamera parkowania tył
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Lampy tylne w technologii LED
- 
- Oświetlenie drogi do domu
- 
- System Start/Stop`,id_wc_2:"35938",id_wc_1:"35938",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/peugeot307kombi.png?updatedAt=1770389245728",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- Aktywny asystent hamowania awaryjnego
- 
- System powiadamiania o wypadku
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16
- 
- Opony wielosezonowe`,marka:"Peugeot",wyposazenie:"",wersja:"BlueHDi FAP 120 Stop & Start Allure",typ_nadwozia:"Kombi",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_00.jpg?updatedAt=1772811333333
https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_01.jpg?updatedAt=1772811334111
https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_02.jpg?updatedAt=1772811334926
https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_03.jpg?updatedAt=1772811335722
https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_04.jpg?updatedAt=1772811336518
https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_05.jpg?updatedAt=1772811337002`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Peugeot 308 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 238859 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#Peugeot308`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna, dwustrefowa
- 
- Dach panoramiczny
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1560",cena:"27900",status:"",kolor:"Biały",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"238859",html_code:"",uc_beztla:`Zapraszamy do zakupu auta PEUGEOT 308 roku


Auto sprowadzone z Holandii i zarejestrowane


    Stan techniczny bardzo dobry, noszący normalne ślady użytkowania
    Tapicerka i wnętrze czyste i zadbane.
    Bogata wersja wyposażenia
    Stan techniczny i wizualny bardzo dobry


<li>Klimatyzacja sprawna</li>

<li><b>Certyfikat legalności przebiegu</b></li>

<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


    <li>Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"Peugeot_308_BlueHDi_bilay_kombi",link_glowne:"https://ik.imagekit.io/kduc81jzs/Peugeot_308_BlueHDi_bilay_kombi/p_00.jpg?updatedAt=1772811333333",faktura:"VAT/Marża",status_sprzedany:"NIE",equip_audio:`Audio i multimedia
- 
- Android Auto
- 
- Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- System nagłośnienia
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"308",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Peugeot 308 świetny stan i udokumentowana historia.
✅ Przebieg: 238859 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Peugeot_308_BlueHDi_bilay_kombi w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #Peugeot308`,"skrzynia-biegow":"Manualna"},{rok:"2017",slogan1:"181 tys przebieg",moc:"120",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Podgrzewane lusterka boczne
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy tylne w technologii LED
- 
- Oświetlenie drogi do domu
- 
- System Start/Stop`,id_wc_2:"20127",id_wc_1:"35944",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/peugeot307kombi.png?updatedAt=1770389245728",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- Aktywny asystent hamowania awaryjnego
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi stalowe
- 
- Opony wielosezonowe`,marka:"Peugeot",wyposazenie:"",wersja:"BlueHDi FAP 120 Stop & Start Active",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_01.webp?updatedAt=1770421037449
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_02.webp?updatedAt=1770421037451
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_03.webp?updatedAt=1770421037028
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_04.webp?updatedAt=1770421037053
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_05.webp?updatedAt=1770421037024
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_06.webp?updatedAt=1770421037115
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_07.webp?updatedAt=1770421036964
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_08.webp?updatedAt=1770421037225
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_09.webp?updatedAt=1770421036971
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_10.webp?updatedAt=1770421037460
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_11.webp?updatedAt=1770421036972
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_12.webp?updatedAt=1770421036943
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_13.webp?updatedAt=1770421036699
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_14.webp?updatedAt=1770421037485
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_15.webp?updatedAt=1770421037437
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_16.webp?updatedAt=1770421037515
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_17.webp?updatedAt=1770421037428
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_18.webp?updatedAt=1770421037322
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_19.webp?updatedAt=1770421037386
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_20.webp?updatedAt=1770421037382
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_21.webp?updatedAt=1770421037370
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_22.webp?updatedAt=1770421037467
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_23.webp?updatedAt=1770421036752
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_24.webp?updatedAt=1770421037144
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_25.webp?updatedAt=1770421037482
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_26.webp?updatedAt=1770421037497
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/p_0_AuLWPmLCP.jpg?updatedAt=1770420300674
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/p_0_FfBmftlKQ.jpg?updatedAt=1770419985954
https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/p_0_uSG-da6vZ.jpg?updatedAt=1770417540686`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Peugeot 308 – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 181422 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#Peugeot308`,equip_komfort:`Klimatyzacja manualna
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1560",cena:"32900",status:"",kolor:"Granatowy",naped:"Na przednie koła",paliwo:"Diesel",przebieg:"181422",html_code:"",uc_beztla:`Zapraszamy do zakupu auta<b> PEUGEOT 308</b> roku


Auto sprowadzone z Holandii i zarejestrowane


    Stan techniczny bardzo dobry, noszący normalne ślady użytkowania
    Tapicerka i wnętrze czyste i zadbane.
    Bogata wersja wyposażenia
    Stan techniczny i wizualny bardzo dobry


<li>Klimatyzacja sprawna</li>

<li><b>Certyfikat legalności przebiegu</b></li>

<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>


--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


<li>    Możliwość transportu auta w dowolne miejsce</li>
<li>    Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"Peugeot_308_2017_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Peugeot_308_2017_Kompakt/foto_01.webp?updatedAt=1770421037449",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- System nagłośnienia
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"308",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Peugeot 308 świetny stan i udokumentowana historia.
✅ Przebieg: 181422 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Peugeot_308_2017_Kompakt w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #Peugeot308`,"skrzynia-biegow":"Manualna"},{rok:"2014",slogan1:"Salon PL",moc:"313",slogan2:"",equip_systemy:`empomat adaptacyjny ACC
- Lampy przednie w technologii LED
- Kontrola odległości z przodu (przy parkowaniu)
- Kontrola odległości z tyłu (przy parkowaniu)
- Kamera panoramiczna 360
- Kamera parkowania tył
- Lusterka boczne ustawiane elektrycznie
- Podgrzewane lusterka boczne
- Lusterka boczne składane elektrycznie
- Asystent (czujnik) martwego pola
- Kontrola odległości od poprzedzającego pojazdu
- Ogranicznik prędkości
- Asystent hamowania – Brake Assist
- Asystent pokonywania zakrętów
- Kontrola trakcji
- Wspomaganie ruszania pod górę- Hill Holder
- System rozpoznawania znaków drogowych
- Asystent świateł drogowych
- Oświetlenie adaptacyjne
- Czujnik zmierzchu
- Spryskiwacze reflektorów
- Lampy doświetlające zakręt
- Światła do jazdy dziennej diodowe LED
- Lampy tylne w technologii LED
- Oświetlenie wnętrza LED
- Elektroniczna kontrola ciśnienia w oponach`,id_wc_2:"20158",id_wc_1:"35998",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/audia6.png?updatedAt=1770912475242",Podgląd:"",equip_bezpieczenstwo:"Zawieszenie pneumatyczne",equip_tuning:`Felgi aluminiowe 18
- Opony letnie`,marka:"Audi",wyposazenie:"",wersja:"3,0 BITDI  QUATTRO.",typ_nadwozia:"Sedan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_00_ceIrSNF9_.jpg?updatedAt=1771695355914
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_01_YcQkGZxIe.jpg?updatedAt=1771695356785
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_02_uFBidTmoG.jpg?updatedAt=1771695357545
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_03_oNt7V_q-y.jpg?updatedAt=1771695358329
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_04_7t-MuPAuJ.jpg?updatedAt=1771695359103
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_05_X2i-y9jCH.jpg?updatedAt=1771695359863
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_06_833Dg7jwH.jpg?updatedAt=1771695360676
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_07_0-tAqzryq.jpg?updatedAt=1771695361454
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_08_0eH5Yy5I_.jpg?updatedAt=1771695362219
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_09_ChJgiqzzh.jpg?updatedAt=1771695363005
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_10_g8N4Udilv.jpg?updatedAt=1771695363789
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_11_xRJ1GBHKi.jpg?updatedAt=1771695364583
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_12_Pqe6uEYOY.jpg?updatedAt=1771695365407
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_13_0moxel_t_.jpg?updatedAt=1771695366176
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_14_50T2C4MGF.jpg?updatedAt=1771695366952
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_15_3MTo3AqUS.jpg?updatedAt=1771695367712
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_16_ZU8VbFDHWh.jpg?updatedAt=1771695368487
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_17_HV0NuAzps.jpg?updatedAt=1771695369252
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_18_OkbGb-UMk.jpg?updatedAt=1771695370079
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_19_bdumB7vyi.jpg?updatedAt=1771695370873
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_20_Eqe9sMjmX8.jpg?updatedAt=1771695371640
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_21_6oOcFNxOJ.jpg?updatedAt=1771695372446
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_22_xVkW6n9wk.jpg?updatedAt=1771695373222
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_23__R6Rkj64X.jpg?updatedAt=1771695373972
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_24_n8hKhpwGf.jpg?updatedAt=1771695374729
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_25_EAWbO_KI4.jpg?updatedAt=1771695375512
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_26_zP-hZtxpvp.jpg?updatedAt=1771695376319
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_27_A8ks-ZLMc.jpg?updatedAt=1771695377144
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_28_DmapnpML-.jpg?updatedAt=1771695377955
https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_29_TEcOv3z6q.jpg?updatedAt=1771695378758`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Audi A6 limousine – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 318479 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#AudiA6limousine`,equip_komfort:`Sterowanie funkcjami pojazdu za pomocą głosu
- Klimatyzacja automatyczna: 4 lub wiêcej strefowa
- Rolety na bocznych szybach opuszczane ręcznie
- Tapicerka skórzana
- Elektrycznie ustawiany fotel kierowcy
- Elektrycznie ustawiany fotel pasażera
- Podgrzewany fotel kierowcy
- Podgrzewany fotel pasażera
- Regul. elektr. podparcia lędźwiowego – kierowca
- Regul. elektr. podparcia lędźwiowego – pasażer
- Fotele przednie wentylowane
- Fotele przednie z funkcje masażu
- Siedzenie z pamięcią ustawienia
- Podłokietniki – przód
- Podłokietniki – tył
- Kierownica skórzana
- Kierownica ze sterowaniem radia
- Kierownica ogrzewana
- Zmiana biegów w kierownicy
- Dźwignia zmiany biegów wykończona skórą
- Keyless Go
- Czujnik deszczu
- Podgrzewana przednia szyba
- Elektryczne szyby przednie
- Elektryczne szyby tylne
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"2967",cena:"65900",status:"",kolor:"Brązowy",naped:"KRAJ POCHODZENIA",paliwo:"Diesel",przebieg:"318479",html_code:"",uc_beztla:`Zapraszamy do zakupu Audi A6 z 2014 roku


    Auto kupione w polskim salonie
    Silnik 3,0 BITDI z automatyczną skrzynią biegów oraz napędem QUATTRO.
    Serwisowany na bieżąco, wszystko robione na czas.
    Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane


Aktywny tempomat, aktywny wydech, szyberdach, utrzymywanie pasa ruchu, podgrzewane, elektryczne fotele, Audi adaptive light, masaże, Head-Up, Navi, Matrix LED, PDC, Camera itd.




Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej


--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


    Możliwość zostawienia swojego auta w rozliczeniu
    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ`,katalog:"Audi_A6_limousine_2014_Sedan",link_glowne:"https://ik.imagekit.io/kduc81jzs/Audi_A6_limousine_2014_Sedan/p_00_ceIrSNF9_.jpg?updatedAt=1771695355914",faktura:"Faktura VAT Marża",status_sprzedany:"NIE",equip_audio:`Radio
- Gniazdo USB
- System nawigacji satelitarnej
- Wyświetlacz typu Head-Up`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"A6 limousine",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Audi A6 limousine świetny stan i udokumentowana historia.
✅ Przebieg: 318479 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Audi_A6_limousine_2014_Sedan w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #AudiA6limousine`,"skrzynia-biegow":"Automatyczna"},{rok:"2015",slogan1:"Certyfikat",moc:"90",slogan2:"",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Kamera parkowania tył
- 
- Podgrzewane lusterka boczne
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę- Hill Holder
- 
- Czujnik zmierzchu
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- System Start/Stop
- 
- Elektroniczna kontrola ciśnienia w oponach`,id_wc_2:"ID6HU2OF",id_wc_1:"35954",link_bez_tla:"https://drive.google.com/uc?id=10rJmHpZvS9lL1Y9cJ4iu_laG6pHwqCSH",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony letnie`,marka:"Renault",wyposazenie:"",wersja:"ENERGY dCi 90 Start&Stop Dynamique",typ_nadwozia:"Suv",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_0_Y3Qem-bQH.jpg?updatedAt=1771009742556
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_1_aPj1Kuwc4.jpg?updatedAt=1771009743807
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_2_mt7_-e9c4.jpg?updatedAt=1771009744567
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_3_lH3OPH6uN.jpg?updatedAt=1771009745366
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_4_VSCcwqncx.jpg?updatedAt=1771009746160
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_5_PhgA6Aj2e.jpg?updatedAt=1771009746941
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_6_QqZnhHcm-.jpg?updatedAt=1771009747704
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_7_OIfaNIHRQ.jpg?updatedAt=1771009748470
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_8_Ag7U412De.jpg?updatedAt=1771009749233
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_9_x2W0wsb1X.jpg?updatedAt=1771009750030
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_10__W04D3DHK.jpg?updatedAt=1771009750794
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_11_LqsWu-vST.jpg?updatedAt=1771009751577
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_12_3WATPDCbn.jpg?updatedAt=1771009752359
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_13_v95qWx1zG.jpg?updatedAt=1771009753149
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_14_z167DiV-O.jpg?updatedAt=1771009753912
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_15_AZ7sVRXCO.jpg?updatedAt=1771009754659
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_16_eeFLKBuJP.jpg?updatedAt=1771009755410
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_17_DUWAuIKY8.jpg?updatedAt=1771009756173
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_18_lYqjYIKtD.jpg?updatedAt=1771009757076
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_19_32rejk9Hf.jpg?updatedAt=1771009757828
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_20_5yflCeLd2.jpg?updatedAt=1771009758614
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_21_2r7HCaBuYu.jpg?updatedAt=1771009759414
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_22_Mz1dWo676.jpg?updatedAt=1771009760461
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_23_oR4Okw6XA.jpg?updatedAt=1771009761233
https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_24_Wgq0puBom.jpg?updatedAt=1771009763051`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Renault Captur – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 222611 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#RenaultCaptur`,equip_komfort:`Hak
- 
- Klimatyzacja automatyczna
- 
- Tapicerka materiałowa
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1461",cena:"33900",status:"",kolor:"Beżowy",naped:"NA PRZEDNIE KOŁA",paliwo:"Diesel",przebieg:"222611",html_code:"",uc_beztla:`Zapraszamy do zakupu auta Renault Captur z 2015 roku


Auto świeżo sprowadzone z Holandii i zarejestrowane


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania


Tapicerka i wnętrze czyste i zadbane.

<li>Klimatyzacja sprawna</li>
<li><b>Certyfikat legalności przebiegu N.A.P.</b></li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>



--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


   <li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>`,katalog:"Renault_Captur_2015_Suv",link_glowne:"https://ik.imagekit.io/kduc81jzs/Renault_Captur_2015_Suv/p_0_Y3Qem-bQH.jpg?updatedAt=1771009742556",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Captur",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Renault Captur świetny stan i udokumentowana historia.
✅ Przebieg: 222611 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Renault_Captur_2015_Suv w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #RenaultCaptur`,"skrzynia-biegow":"Manualna"},{rok:"2018",slogan1:"VAT",moc:"125",slogan2:"",equip_systemy:`ABS
- 
- Alarm
- 
- ASR (kontrola trakcji)
- 
- CD
- 
- Centralny zamek
- 
- Elektryczne szyby
- 
- Hak/Zaczep
- 
- Immobilizer
- 
- Klimatyzacja manualna
- 
- Komputer pokładowy
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Przesuwane drzwi
- 
- Radio fabryczne
- 
- Tempomat
- 
- Wspomaganie kierownicy
- 
- Bluetooth
- 
- ESP (stabilizacja toru jazdy)
- 
- Nawigacja GPS`,id_wc_2:"ID6HUsHn",id_wc_1:"35956",link_bez_tla:"Aktywny tempomat, aktywny wydech, szyberdach, utrzymywanie pasa ruchu, podgrzewane, elektryczne fotele, Audi adaptive light, masaże, Head-Up, Navi, Matrix LED, PDC, Camera itd.",Podgląd:"",equip_bezpieczenstwo:"",equip_tuning:"",marka:"Fiat",wyposazenie:"",wersja:"",typ_nadwozia:"Furgon (blaszak)",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_0_4nS2Ven6L.jpg?updatedAt=1771370833736
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_0_9RNIuOSRu.jpg?updatedAt=1771370909416
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_1_hPe_Ir3jR.jpg?updatedAt=1771370834499
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_1_tyHCT3xWB.jpg?updatedAt=1771370910176
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_2_8ITb-8y9i.jpg?updatedAt=1771370910968
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_2_zeGQF6Z2R.jpg?updatedAt=1771370835278
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_3_YRisZHZsN.jpg?updatedAt=1771370836035
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_3_pzaYMbahw.jpg?updatedAt=1771370911726
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_4_OV-XN_9bX.jpg?updatedAt=1771370836791
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_4_S9cp2MGvb.jpg?updatedAt=1771370912490
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_5_W3PJqiuGr.jpg?updatedAt=1771370837593
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_5_hC6oik0gh.jpg?updatedAt=1771370913256
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_6_bWhUaXUuB.jpg?updatedAt=1771370838363
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_6_wFr7mZUow.jpg?updatedAt=1771370914001
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_7_GWllIc2sj.jpg?updatedAt=1771370914756
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_7_IQ74dR9Mh.jpg?updatedAt=1771370839113
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_8_P90vtWQ0H.jpg?updatedAt=1771370915529
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_8_PA741QU-0.jpg?updatedAt=1771370839875
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_9_5vopwPnvZ.jpg?updatedAt=1771370916281
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_9_nuCRLfXBA.jpg?updatedAt=1771370840657
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_10_TRytdkgeN.jpg?updatedAt=1771370841414
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_10_lKf0qKQuc.jpg?updatedAt=1771370917089
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_11_CG2tQz9Ri.jpg?updatedAt=1771370842187
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_11_VzW-jQ0qZ.jpg?updatedAt=1771370917864
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_12_1WHDz29-rV.jpg?updatedAt=1771370918625
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_12_B3T4U5Z-t.jpg?updatedAt=1771370842952
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_13_AMSrVFVGh.jpg?updatedAt=1771370843731
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_13_seDyO-p5r.jpg?updatedAt=1771370919422
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_14_GS5K-I9FU.jpg?updatedAt=1771370920200
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_14_Se0CEf7kxj.jpg?updatedAt=1771370844510
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_15_TE61cExYu.jpg?updatedAt=1771370920941
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_15_WbMrRwDkl.jpg?updatedAt=1771370845244
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_16_4MKI86u0_.jpg?updatedAt=1771370921689
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_16_044AhIetq.jpg?updatedAt=1771370846038
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_17_hc76SzO2M.jpg?updatedAt=1771370846814
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_17_w7w3z18cf.jpg?updatedAt=1771370922464
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_18_Ahhm1NZRE.jpg?updatedAt=1771370847565
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_18_znKXhyxyb.jpg?updatedAt=1771370923194
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_19_xSNUx8r3x.jpg?updatedAt=1771370848325
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_20_Ez1-FA3Nu.jpg?updatedAt=1771370849099
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_21_I059tKdUB.jpg?updatedAt=1771370849869
https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_22_Jl66gH9tQ.jpg?updatedAt=1771370850579`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Fiat Talento – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 199898 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#FiatTalento`,equip_komfort:"","pojemnosc-silnika":"1598",cena:"44895",status:"",kolor:"Biały",naped:"Przedni",paliwo:"Diesel",przebieg:"199898",html_code:"",uc_beztla:`WYSTAWIAM <b>FAKTURĘ VAT</b>, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE


<li>Auto sprowadzone i zarejestrowane</li>
<li>- Bogata wersja wyposażenia</li>
<li>-Stan techniczny i wizualny bardzo dobry</li>



-Wnętrze czyste i zadbane


<li>-Klimatyzacja sprawna</li>
<li>-Książka serwisowa</li>
<li>-<b>Certyfikat N.A.P</b></li>
<li>-Kredytowanie na atrakcyjnych warunkach</li>
<li>-Możliwość pozostawienia samochodu w rozliczeniu</li>



-W razie pytań dodatkowych, proszę dzwonić, chętnie udzielę wszystkich informacji. Samochód można sprawdzić w dowolnym wybranym serwisie, stacji itp.`,katalog:"Fiat_Talento_2018_Furgon_blaszak",link_glowne:"https://ik.imagekit.io/kduc81jzs/Fiat_Talento_2018_Furgon_blaszak/p_0_4nS2Ven6L.jpg?updatedAt=1771370833736",faktura:"",status_sprzedany:"NIE",equip_audio:"",opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Talento",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Fiat Talento świetny stan i udokumentowana historia.
✅ Przebieg: 199898 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Fiat_Talento_2018_Furgon_blaszak w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #FiatTalento`,"skrzynia-biegow":"Manualna"},{rok:"2021",slogan1:"Przebieg: 83 585 km",moc:"122",slogan2:"Silnik 1.8 Hybrid 122KM, automat",equip_systemy:`Tempomat adaptacyjny ACC
- 
- Kamera parkowania tył
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Kontrola odległości od poprzedzającego pojazdu
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę (Hill Holder)
- 
- System rozpoznawania znaków drogowych
- 
- Asystent świateł drogowych
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Oświetlenie drogi do domu
- 
- Elektryczny hamulec postojowy`,id_wc_2:"20357",id_wc_1:"35962",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HUwwa_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- System hamowania awaryjnego dla ochrony pieszych
- 
- Aktywny asystent hamowania awaryjnego
- 
- System ostrzegający o możliwej kolizji
- 
- Asystent pasa ruchu
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Poduszka kolan pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony wielosezonowe`,marka:"Toyota",wyposazenie:"",wersja:"Style",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_00.jpg?updatedAt=1773133953924
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_01.jpg?updatedAt=1773133954677
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_02.jpg?updatedAt=1773133955430
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_03.jpg?updatedAt=1773133956187
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_04.jpg?updatedAt=1773133956946
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_05.jpg?updatedAt=1773133957693
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_06.jpg?updatedAt=1773133958498
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_07.jpg?updatedAt=1773133959296
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_08.jpg?updatedAt=1773133960056
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_09.jpg?updatedAt=1773133960839
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_10.jpg?updatedAt=1773133961588
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_11.jpg?updatedAt=1773133962376
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_12.jpg?updatedAt=1773133963116
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_13.jpg?updatedAt=1773133963857
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_14.jpg?updatedAt=1773133964608
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_15.jpg?updatedAt=1773133965361
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_16.jpg?updatedAt=1773133966113
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_17.jpg?updatedAt=1773133966858
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_18.jpg?updatedAt=1773133967621
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_19.jpg?updatedAt=1773133968380
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_20.jpg?updatedAt=1773133969331
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_21.jpg?updatedAt=1773133970083
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_22.jpg?updatedAt=1773133970848
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_23.jpg?updatedAt=1773133971640
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_24.jpg?updatedAt=1773133972438
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_25.jpg?updatedAt=1773133973218
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_26.jpg?updatedAt=1773133974054
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_27.jpg?updatedAt=1773133974792
https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_28.jpg?updatedAt=1773133975466`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Toyota C-hr – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 83585 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#ToyotaC-hr`,equip_komfort:`Klimatyzacja automatyczna: dwustrefowa
- 
- Tapicerka materiałowa
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Sportowe fotele - przód
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Uruchamianie silnika bez użycia kluczyków
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1798",cena:"78900",status:"",kolor:"Szary",naped:"NA PRZEDNIE KOŁA",paliwo:"Hybryda",przebieg:"83585",html_code:"18408",uc_beztla:`WYSTAWIAM FAKTURĘ VAT, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE


Oferuję do sprzedaży TOYOTA C-HR HYBRID 2021


Auto sprowadzone z UE i zarejestrowane w Polsce



<li>- Bogata wersja STYLE</li>
<li>- Stan techniczny i wizualny bardzo dobry</li>
<li>- Wnętrze czyste i zadbane</li>
<li>-<b> Przebieg: 83 585 km</b></li>
<li>- Klimatyzacja dwustrefowa automatyczna</li>
<li>- Książka serwisowa</li>
<li>- <b>Certyfikat legalności przebiegu</b></li>
<li>- Silnik 1.8 Hybrid 122KM, automat</li>
<li>- Zużycie paliwa: średnio 3,8 l/100km</li>
<li>- Data pierwszej rejestracji: 04.03.2021</li>



Wyposażenie m.in.:

<li>*) Adaptacyjny tempomat</li>
<li>*) Kamera cofania</li>
<li>*) Podgrzewane fotele</li>
<li>*) System utrzymania pasa ruchu</li>
<li>*) System rozpoznawania znaków</li>
<li>*) LED, czujnik deszczu, światła automatyczne</li>
<li>*) Alufelgi 17"</li>
<li>*) Keyless Go</li>
<li>*) Bluetooth, USB, radio, ekran dotykowy</li>
<li>*) 8x poduszka powietrzna, ABS, ESP, asystent hamowania</li>
<li>*) Przyciemniane szyby tylne</li>
<li>*) Elektryczne szyby i lusterka, składane lusterka</li>
<li>*) Isofix, tempomat, wspomaganie</li>


- Możliwość pozostawienia auta w rozliczeniu
- Atrakcyjne finansowanie
- Zapraszam do kontaktu i na oględziny


Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Toyota_Chr_2021_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Toyota_Chr_2021_Kompakt/Toyota_C-hr_2021_p_00.jpg?updatedAt=1773133953924",faktura:"",status_sprzedany:"TAK",equip_audio:`Android Auto
- 
- Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"C-hr",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Toyota C-hr świetny stan i udokumentowana historia.
✅ Przebieg: 83585 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Toyota_Chr_2021_Kompakt w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #ToyotaC-hr`,"skrzynia-biegow":"Automatyczna"},{rok:"2017",slogan1:"161 tys. przebieg",moc:"120",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę (Hill Holder)
- 
- Czujnik zmierzchu
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- System Start/Stop
- 
- Elektryczny hamulec postojowy
- 
- Wspomaganie kierownicy`,id_wc_2:"20302",id_wc_1:"36004",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/c4-bialy.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- System rekomendacji przerw podczas trasy
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi stalowe
- 
- Opony letnie`,marka:"Citroën",wyposazenie:"",wersja:"BlueHDi 120 FEEL",typ_nadwozia:"Minivan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_00_T3poKr-V7.jpg?updatedAt=1772282887884
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_01_yl6WMllYK.jpg?updatedAt=1772282888671
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_02_iZDHpB-RD.jpg?updatedAt=1772282889645
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_03_16n2L5e2L.jpg?updatedAt=1772282890571
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_04_SYlAC0ccl.jpg?updatedAt=1772282891855
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_05_fj52xNeXn.jpg?updatedAt=1772282892728
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_06_O71oYzV6ux.jpg?updatedAt=1772282893609
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_07_oqmG-Oues.jpg?updatedAt=1772282894418
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_08_wXTZodbjn.jpg?updatedAt=1772282895217
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_09_xVzyF0utF.jpg?updatedAt=1772282896029
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_10_ze6j92w-a.jpg?updatedAt=1772282896845
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_11_Qjb0JHWzR.jpg?updatedAt=1772282897653
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_12_8MYmfzTh7i.jpg?updatedAt=1772282898467
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_13_fES2-D-9X.jpg?updatedAt=1772282899256
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_14_5vBImwBeh.jpg?updatedAt=1772282900045
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_15_LwB7sfl69.jpg?updatedAt=1772282900830
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_16_C4gfoy90o.jpg?updatedAt=1772282901669
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_17_VbKH1xGs9.jpg?updatedAt=1772282902420
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_18_pmQ2sBTYE.jpg?updatedAt=1772282903208
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_19_TwkP_qsRP.jpg?updatedAt=1772282904034
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_20_xRmcoDJM2.jpg?updatedAt=1772282904846
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_21_jSnyNbEXT.jpg?updatedAt=1772282905645
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_22_VaS5GbEjV.jpg?updatedAt=1772282906420
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_23_5fzZuSK_O.jpg?updatedAt=1772282907254
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_24_vUNALmk3w.jpg?updatedAt=1772282908046
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_25_GvrOcKK7n.jpg?updatedAt=1772282908788
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_26_0cbzU0kQ9.jpg?updatedAt=1772282909552
https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_27_3B3mr7i3S.jpg?updatedAt=1772282910308`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Citroën C4 picasso – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 161676 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#CitroënC4picasso`,equip_komfort:`Klimatyzacja automatyczna: dwustrefowa
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Uruchamianie silnika bez użycia kluczyków
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"1560",cena:"33900",status:"",kolor:"Biały",naped:"KRAJ POCHODZENIA",paliwo:"Diesel",przebieg:"161676",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>CITROENA C4 PICASSO z 2017 roku</b>


Auto świeżo sprowadzone, zarejestrowane w Polsce


Stan techniczny bardzo dobry, noszący normalne ślady użytkowania

Tapicerka i wnętrze czyste i zadbane.


<li>Silnik 1.6 diesel 120 KM, manualna skrzynia biegów</li>
<li><b>Przebieg: 161 676 km</b></li>
<li>Dwustrefowa automatyczna klimatyzacja</li>
<li>Bluetooth, radio, USB, ekran dotykowy</li>
<li>Tempomat, ogranicznik prędkości</li>
<li>System Start-Stop, czujnik deszczu, automatyczne światła</li>
<li>Podgrzewane lusterka, elektryczne szyby przód/tył</li>
<li>ABS, ESP, kontrola trakcji, poduszki powietrzne przód/bok/kurtyny</li>
<li>ISOFIX, system rekomendacji przerwy</li>
<li>Felgi stalowe</li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>



--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


    Możliwość transportu auta w dowolne miejsce
    Możliwość zostawienia swojego auta w rozliczeniu
    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ


Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Citron_C4_picasso_2017_Minivan",link_glowne:"https://ik.imagekit.io/kduc81jzs/Citron_C4_picasso_2017_Minivan/p_00_T3poKr-V7.jpg?updatedAt=1772282887884",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"C4 picasso",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Citroën C4 picasso świetny stan i udokumentowana historia.
✅ Przebieg: 161676 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Citron_C4_picasso_2017_Minivan w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #CitroënC4picasso`,"skrzynia-biegow":"Manualna"},{rok:"2013",slogan1:"199 372 km",moc:"115",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Kamera parkowania tył
- 
- Podgrzewane lusterka boczne
- 
- Asystent (czujnik) martwego pola
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę (Hill Holder)
- 
- Czujnik zmierzchu
- 
- Lampy przeciwmgielne
- 
- Oświetlenie wnętrza LED
- 
- System Start/Stop
- 
- Wspomaganie kierownicy`,id_wc_2:"19494",id_wc_1:"36005",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ford-c-max-grand.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16`,marka:"Ford",wyposazenie:"",wersja:"1.6 TDCi Start-Stop-System Titanium",typ_nadwozia:"Minivan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_00_lPB5DrHAb.jpg?updatedAt=1772481404914
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_01_KOc7qLDbs.jpg?updatedAt=1772481405697
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_02_MUpZF6zEE.jpg?updatedAt=1772481406491
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_03_zB6vBU4rW.jpg?updatedAt=1772481407278
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_04_WbLZ7P5DTa.jpg?updatedAt=1772481408056
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_05_cXmZ_QVOj.jpg?updatedAt=1772481408838
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_06_dtOPYMks4y.jpg?updatedAt=1772481409625
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_07_5FVwVEVCP.jpg?updatedAt=1772481410402
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_08_ITpBY1LOEV.jpg?updatedAt=1772481411180
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_09_RPNaFcsxk.jpg?updatedAt=1772481411932
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_10_7DzgALQP_.jpg?updatedAt=1772481412677
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_11_XKfMNQX4Vi.jpg?updatedAt=1772481413433
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_12_PGeud4hBB.jpg?updatedAt=1772481414192
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_13_R84WEQBFk.jpg?updatedAt=1772481414971
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_14_uWVr4YIo9.jpg?updatedAt=1772481415750
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_15_MYGQMSride.jpg?updatedAt=1772481416549
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_16_fqB72QO9C.jpg?updatedAt=1772481417298
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_17_1Nr_qm62U.jpg?updatedAt=1772481418070
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_18_iZNmiblJp5.jpg?updatedAt=1772481418827
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_19_1_DnIwzWw.jpg?updatedAt=1772481419583
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_20_9Eutsmvg9.jpg?updatedAt=1772481420392
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_21_KqZtQNaf-.jpg?updatedAt=1772481421222
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_22_kKk3_bGZe.jpg?updatedAt=1772481422026
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_23_JWJ2hWlsH.jpg?updatedAt=1772481422775
https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_24_466H9bE0G.jpg?updatedAt=1772481423543`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Ford Grand c-max – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 199372 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#FordGrandc-max`,equip_komfort:`Klimatyzacja automatyczna: dwustrefowa
- 
- Rolety na bocznych szybach opuszczane ręcznie
- 
- Tapicerka materiałowa
- 
- Elektrycznie ustawiany fotel kierowcy
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Uruchamianie silnika bez użycia kluczyków
- 
- Czujnik deszczu
- 
- Podgrzewana przednia szyba
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"1560",cena:"25900",status:"",kolor:"Srebrny",naped:"NA PRZEDNIE KOŁA",paliwo:"Diesel",przebieg:"199372",html_code:"",uc_beztla:`Zapraszamy do zakupu FORD GRAND C-MAX 1.6 TDCI 115KM z 2013 roku


Auto sprowadzone z Holandii, zarejestrowane w Polsce


Stan techniczny bardzo dobry, normalne ślady użytkowania.
Tapicerka i wnętrze czyste oraz zadbane.


    Dwustrefowa automatyczna klimatyzacja
    Nawigacja, kamera cofania, czujniki parkowania przód/tył
    Tempomat, ogranicznik prędkości
    Podgrzewane fotele, podgrzewana przednia szyba
    Bluetooth, USB, radio, sterowanie z kierownicy
    Światła przeciwmgielne, czujnik deszczu i zmierzchu
    Alufelgi 16", przyciemniane szyby
    Komplet poduszek powietrznych, ABS, ESP, kontrola trakcji
    Certyfikat legalności przebiegu N.A.P.
    Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej


--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


    Możliwość transportu auta w dowolne miejsce
    Możliwość zostawienia swojego auta w rozliczeniu
    WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ


Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Ford_Grand_cmax_2013_Minivan",link_glowne:"https://ik.imagekit.io/kduc81jzs/Ford_Grand_cmax_2013_Minivan/p_00_lPB5DrHAb.jpg?updatedAt=1772481404914",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Grand c-max",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Ford Grand c-max świetny stan i udokumentowana historia.
✅ Przebieg: 199372 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Ford_Grand_cmax_2013_Minivan w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #FordGrandc-max`,"skrzynia-biegow":"Manualna"},{rok:"2011",slogan1:"",moc:"240",slogan2:"",equip_systemy:`Tempomat

Lampy bi-ksenonowe

Kontrola odległości z przodu (przy parkowaniu)

Kontrola odległości z tyłu (przy parkowaniu)

Podgrzewane lusterka boczne

Kontrola trakcji

Wspomaganie ruszania pod górę (Hill Holder)

System rozpoznawania znaków drogowych

Czujnik zmierzchu

Spryskiwacze reflektorów

Lampy doświetlające zakręt

Światła do jazdy dziennej

Światła do jazdy dziennej diodowe LED

Lampy przeciwmgielne

Lampy tylne w technologii LED

Oświetlenie drogi do domu

Elektroniczna kontrola ciśnienia w oponach

Elektryczny hamulec postojowy`,id_wc_2:"19966",id_wc_1:"36007",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HUQne_nobg_08Upw3-E0.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Poduszka kolan kierowcy

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych

Felgi aluminiowe 19

Opony letnie`,marka:"Audi",wyposazenie:"",wersja:"",typ_nadwozia:"Kabriolet",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_00_0VdSdG76e.jpg?updatedAt=1772698418446
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_01_VFUxAF9Ya.jpg?updatedAt=1772698419230
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_02_TBiCE8ePnt.jpg?updatedAt=1772698420473
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_03_7orlyoHyC.jpg?updatedAt=1772698421236
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_04_FpeXJ3U51B.jpg?updatedAt=1772698422016
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_05_wpwfXSPN3.jpg?updatedAt=1772698422873
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_06_A05TVn4lR.jpg?updatedAt=1772698423664
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_07_p4Jt5PaUr.jpg?updatedAt=1772698424417
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_08_LdOY-EX1v.jpg?updatedAt=1772698425213
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_09_1kscJknNg.jpg?updatedAt=1772698426233
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_10_XFLnTwpV3.jpg?updatedAt=1772698427010
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_11_1Fq448UQ_.jpg?updatedAt=1772698427774
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_12_N1QAq9O0R0.jpg?updatedAt=1772698428525
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_13_wvRjVxKu4.jpg?updatedAt=1772698429269
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_14_cpuf5FJec.jpg?updatedAt=1772698430063
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_15_DMI1Gfo5W.jpg?updatedAt=1772698430829
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_16_Ky0qyFgjs.jpg?updatedAt=1772698431588
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_17_W0AC51Iua3.jpg?updatedAt=1772698432354
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_18_4vO6Q-M_i.jpg?updatedAt=1772698433111
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_19_pu-5PeRrI.jpg?updatedAt=1772698433900
https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_20_pNTrGwADK.jpg?updatedAt=1772698434681`,opis_ig:`Kolejna nowość w Auto Handel Puławy! Audi A5 cabrio – Super stan, sprowadzony z Holandii i zarejestrowany.
✅ Przebieg: 193815 km udokumentowany i potwierdzony (Certyfikat NAP)
 ✅ 29 lat na rynku – działamy nieprzerwanie od 1997 roku. ✅ 4200+ sprzedanych aut – zaufaj doświadczeniu.
👇 PEŁNA OFERTA, CENA I ZDJĘCIA W LINKU W BIO PROFILU! 👇 @autohandulpulawy
#AudiA5cabrio`,equip_komfort:`Hak

Klimatyzacja automatyczna

Dach materiałowy

Tapicerka skórzana

Elektrycznie ustawiany fotel kierowcy

Elektrycznie ustawiany fotel pasażera

Podgrzewany fotel kierowcy

Podgrzewany fotel pasażera

Regul. elektr. podparcia lędźwiowego - kierowca

Regul. elektr. podparcia lędźwiowego - pasażer

Siedzenie z pamięcią ustawienia

Sportowe fotele - przód

Podłokietniki - przód

Kierownica skórzana

Kierownica sportowa

Kierownica ze sterowaniem radia

Kierownica wielofunkcyjna

Zmiana biegów w kierownicy

Dźwignia zmiany biegów wykończona skórą

Uruchamianie silnika bez użycia kluczyków

Automatyczna kontrola ogrzewania

Czujnik deszczu

Elektryczne szyby przednie

Elektryczne szyby tylne

Dach otwierany elektrycznie

Dach otwierany elektrycznie pilotem`,"pojemnosc-silnika":"2967",cena:"55555",status:"",kolor:"Czarny",naped:"4X4 (STAŁY)",paliwo:"Diesel",przebieg:"193815",html_code:"",uc_beztla:`WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ, MOŻLIWOŚĆ SPRAWDZENIA W SERWISIE


Auto sprowadzone i zarejestrowane


- Bogata wersja wyposażenia


-Stan techniczny i wizualny bardzo dobry


-Wnętrze czyste i zadbane


-Klimatyzacja sprawna


-Książka serwisowa


-Certyfikat N.A.P


- Dwa kluczyki


-Kredytowanie na atrakcyjnych warunkach


-Możliwość pozostawienia samochodu w rozliczeniu


-W razie pytań dodatkowych, proszę dzwonić, chętnie udzielę wszystkich informacji. Samochód można sprawdzić w dowolnym wybranym serwisie, stacji itp.`,katalog:"Audi_A5_cabrio_2011_Kabriolet",link_glowne:"https://ik.imagekit.io/kduc81jzs/Audi_A5_cabrio_2011_Kabriolet/p_00_0VdSdG76e.jpg?updatedAt=1772698418446",faktura:"",status_sprzedany:"NIE",equip_audio:`Radio

Gniazdo USB

System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"A5 cabrio",opis_fb:`Auto Handel Puławy – Pewne Auta od 29 lat! 🚗 🤝 Ponad 4200 sprzedanych egzemplarzy to nasza najlepsza rekomendacja.
Dziś: Audi A5 cabrio świetny stan i udokumentowana historia.
✅ Przebieg: 193815 km w pełni potwierdzony certyfikatem NAP! ✅ Bezpieczeństwo: Pełna transparentność pochodzenia i pewny stan prawny transakcji. ✅ Formalności: Wystawiamy Fakturę VAT-Marża – jako kupujący jesteś zwolniony z opłaty skarbowej 2% (PCC).
Chcesz poznać cenę i zobaczyć galerię ponad 40 szczegółowych zdjęć?
👇 TO PROSTE! 👇 Napisz Audi_A5_cabrio_2011_Kabriolet w komentarzu, a wyślę Ci wszystkie szczegóły oraz bezpośredni link do oferty w wiadomości prywatnej! 📩
#pewneauto #autazcertyfikatem #pewneauta #AudiA5cabrio`,"skrzynia-biegow":"Automatyczna"},{rok:"2017",slogan1:"Certyfikat",moc:"110",slogan2:"Super stan",equip_systemy:`Tempomat

Kontrola odległości z tyłu (przy parkowaniu)

Podgrzewane lusterka boczne

Lusterka boczne składane elektrycznie

Ogranicznik prędkości

Kontrola trakcji

Wspomaganie ruszania pod górę (Hill Holder)

System rozpoznawania znaków drogowych

Asystent świateł drogowych

Czujnik zmierzchu

Światła do jazdy dziennej diodowe LED

Lampy przeciwmgielne

Lampy tylne w technologii LED

Oświetlenie wnętrza LED

System Start/Stop

Wspomaganie kierownicy`,id_wc_2:"36008",id_wc_1:"36008",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/Renault_Megane_2017_foto_00-removebg-preview.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

System wspomagania hamowania

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"Filtr cząstek stałych",marka:"Renault",wyposazenie:"",wersja:"ENERGY dCi 110 INTENS",typ_nadwozia:"Kombi",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_00.jpg?updatedAt=1772816567565
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_01.jpg?updatedAt=1772816568329
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_02.jpg?updatedAt=1772816569095
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_03.jpg?updatedAt=1772816569896
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_04.jpg?updatedAt=1772816570669
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_05.jpg?updatedAt=1772816571427
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_06.jpg?updatedAt=1772816572197
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_07.jpg?updatedAt=1772816572958
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_08.jpg?updatedAt=1772816573741
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_09.jpg?updatedAt=1772816574549
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_10.jpg?updatedAt=1772816575313
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_11.jpg?updatedAt=1772816576058
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_12.jpg?updatedAt=1772816576805
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_13.jpg?updatedAt=1772816577620
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_14.jpg?updatedAt=1772816578380
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_15.jpg?updatedAt=1772816579138
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_16.jpg?updatedAt=1772816579976
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_17.jpg?updatedAt=1772816580746
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_18.jpg?updatedAt=1772816581493
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_19.jpg?updatedAt=1772816582255
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_20.jpg?updatedAt=1772816583011
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_21.jpg?updatedAt=1772816583765
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_22.jpg?updatedAt=1772816584527`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna: dwustrefowa

Tapicerka materiałowa

Podłokietniki - przód

Kierownica skórzana

Dźwignia zmiany biegów wykończona skórą

Czujnik deszczu

Elektryczne szyby przednie

Elektryczne szyby tylne

Przyciemniane tylne szyby`,"pojemnosc-silnika":"1461",cena:"33900",status:"",kolor:"Granatowy",naped:"NA PRZEDNIE KOŁA",paliwo:"Diesel",przebieg:"234063",html_code:"",uc_beztla:`Zapraszamy do zakupu Renault Megane 1.5 dCi z 2017 roku


Auto świeżo sprowadzone z krajów Holandii, zarejestrowane w Polsce


<li>Stan techniczny bardzo dobry, normalne ślady użytkowania</li>
<li>Wnętrze czyste oraz zadbane, tapicerka materiałowa</li>
<li>Ekonomiczny silnik diesla 1.5 o mocy 110 KM</li>
<li>Przebieg: 234 063 km</li>



Klimatyzacja sprawna

<b>Certyfikat legalności przebiegu</b>

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej


    ABS, ESP, kontrola trakcji
    Tempomat
    Poduszki powietrzne przód/bok/kurtyny
    Bluetooth, USB, radio, sterowanie z kierownicy
    Światła LED do jazdy dziennej, światła przeciwmgielne
    Elektryczne szyby przód/tył, elektrycznie składane i podgrzewane lusterka
    Isofix
    Centralny zamek, wspomaganie kierownicy
    Czujniki parkowania


--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


    <li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Renault_Megane_2017_Kombi",link_glowne:"https://ik.imagekit.io/kduc81jzs/Renault_Megane_2017_Kombi/Renault_Megane_2017_p_00.jpg?updatedAt=1772816567565",faktura:"",status_sprzedany:"NIE",equip_audio:`Apple CarPlay

Android Auto

Interfejs Bluetooth

Radio

Zestaw głośnomówiący

Gniazdo USB

System nawigacji satelitarnej

System nagłośnienia

Ekran dotykowy

Dostęp do internetu`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Megane",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2009",slogan1:"przebieg 220215",moc:"170",slogan2:"Certyfikat",equip_systemy:`Tempomat
- 
- Lampy ksenonowe
- 
- Kontrola odległości z przodu (przy parkowaniu)
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Automatyczna kontrola zjazdu ze stoku
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Światła do jazdy dziennej
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy przeciwmgielne
- 
- Lampy tylne w technologii LED
- 
- System Start/Stop
- 
- Elektroniczna kontrola ciśnienia w oponach`,id_wc_2:"36010",id_wc_1:"36010",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HViOh_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"",marka:"Audi",wyposazenie:"",wersja:"2.0 TDI Quattro S tronic Prime Line",typ_nadwozia:"Suv",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_00.jpg?updatedAt=1774506265030
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_01.jpg?updatedAt=1774506266167
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_02.jpg?updatedAt=1774506267347
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_03.jpg?updatedAt=1774506268524
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_04.jpg?updatedAt=1774506269664
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_05.jpg?updatedAt=1774506270808
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_06.jpg?updatedAt=1774506271970
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_07.jpg?updatedAt=1774506273118
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_08.jpg?updatedAt=1774506274256
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_09.jpg?updatedAt=1774506275455
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_10.jpg?updatedAt=1774506276669
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_11.jpg?updatedAt=1774506277852
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_12.jpg?updatedAt=1774506278986
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_13.jpg?updatedAt=1774506280136
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_14.jpg?updatedAt=1774506281282
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_15.jpg?updatedAt=1774506282430
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_16.jpg?updatedAt=1774506283553
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_17.jpg?updatedAt=1774506284733
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_18.jpg?updatedAt=1774506286100
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_19.jpg?updatedAt=1774506287298
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_20.jpg?updatedAt=1774506288457
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_21.jpg?updatedAt=1774506289597
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_22.jpg?updatedAt=1774506290731
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_23.jpg?updatedAt=1774506291867
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_24.jpg?updatedAt=1774506293014
https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_25.jpg?updatedAt=1774506294372`,opis_ig:"",equip_komfort:`Klimatyzacja automatyczna
- 
- Drugi szyberdach szklany - przesuwny i uchylny el.
- 
- Tapicerka materiałowa
- 
- Podgrzewany fotel kierowcy
- 
- Podgrzewany fotel pasażera
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Sportowe fotele - przód
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica sportowa
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne`,"pojemnosc-silnika":"1968",cena:"47900",status:"",kolor:"Szary",naped:"4X4 (STAŁY)",paliwo:"Diesel",przebieg:"220215",html_code:"",uc_beztla:`Zapraszamy do zakupu A<b>udi Q5 2.0 TDI 170KM z 2009</b> roku


Auto świeżo sprowadzone z krajów UE, zarejestrowane w Polsce


    <li>Stan techniczny bardzo dobry, normalne ślady użytkowania</li>
<li>Wnętrze czyste oraz zadbane, tapicerka materiałowa</li>
<li>Napęd 4x4 Quattro, automatyczna skrzynia biegów</li>
<li>Silnik diesla 2.0 o mocy 170 KM</li>
<li>Przebieg: <b>220 215</b> km</li>


Klimatyzacja automatyczna sprawna

<b>Certyfikat legalności przebiegu</b>

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej


    <li>ABS, ESP, kontrola trakcji</li>
<li>Tempomat, ogranicznik prędkości</li>
<li>Poduszki powietrzne przód/bok/kurtyny</li>
<li>Bluetooth, radio, nawigacja, sterowanie z kierownicy</li>
<li>Światła LED do jazdy dziennej, xenon, spryskiwacze reflektorów, światła przeciwmgielne</li>
<li>Elektryczne szyby przód/tył, elektrycznie regulowane i podgrzewane lusterka</li>
<li>Isofix</li>
<li>Czujniki parkowania przód/tył</li>
<li>Podgrzewane fotele, sportowe siedzenia, panoramiczny dach szklany</li>



--------


✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Audi_Q5_2009_Suv",link_glowne:"https://ik.imagekit.io/kduc81jzs/Audi_Q5_2009_Suv/Audi_Q5_2009_p_00.jpg?updatedAt=1774506265030",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Q5",opis_fb:"","skrzynia-biegow":"Automatyczna"},{rok:"2016",slogan1:"Przebieg 188 tys",moc:"110",slogan2:"Cerytfikat",equip_systemy:`Tempomat
- 
- Lampy bi-ksenonowe
- 
- Kontrola trakcji
- 
- Czujnik zmierzchu
- 
- Spryskiwacze reflektorów
- 
- Lampy doświetlające zakręt
- 
- Światła do jazdy dziennej diodowe LED
- 
- Lampy tylne w technologii LED
- 
- Oświetlenie drogi do domu
- 
- Oświetlenie wnętrza LED
- 
- System Start/Stop
- 
- Elektroniczna kontrola ciśnienia w oponach`,id_wc_2:"19944",id_wc_1:"36012",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/6146360576_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Poduszka kolan kierowcy
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Filtr cząstek stałych
- 
- Felgi aluminiowe 16
- 
- Opony wielosezonowe`,marka:"Audi",wyposazenie:"",wersja:"1.6 TDI (clean diesel) S line Sportpaket",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_00.jpg?updatedAt=1773845183984
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_01.jpg?updatedAt=1773845185160
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_02.jpg?updatedAt=1773845186307
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_03.jpg?updatedAt=1773845187463
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_04.jpg?updatedAt=1773845188702
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_05.jpg?updatedAt=1773845189853
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_06.jpg?updatedAt=1773845191000
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_07.jpg?updatedAt=1773845192181
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_08.jpg?updatedAt=1773845193340
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_09.jpg?updatedAt=1773845194515
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_10.jpg?updatedAt=1773845195676
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_11.jpg?updatedAt=1773845196824
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_12.jpg?updatedAt=1773845198000
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_13.jpg?updatedAt=1773845199281
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_14.jpg?updatedAt=1773845200426
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_15.jpg?updatedAt=1773845201584
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_16.jpg?updatedAt=1773845202717
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_17.jpg?updatedAt=1773845203899
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_18.jpg?updatedAt=1773845205068
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_19.jpg?updatedAt=1773845206217
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_20.jpg?updatedAt=1773845207404
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_21.jpg?updatedAt=1773845208568
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_22.jpg?updatedAt=1773845209712
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_23.jpg?updatedAt=1773845210858
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_24.jpg?updatedAt=1773845212022
https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_25.jpg?updatedAt=1773845212867`,opis_ig:"",equip_komfort:`Klimatyzacja automatyczna: dwustrefowa
- 
- Tapicerka materiałowa
- 
- Regul. elektr. podparcia lędźwiowego - kierowca
- 
- Regul. elektr. podparcia lędźwiowego - pasażer
- 
- Podłokietniki - przód
- 
- Podłokietniki - tył
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"15983",cena:"45900",status:"",kolor:"Czarny",naped:"NA PRZEDNIE KOŁA",paliwo:"Diesel",przebieg:"188788",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Audi A3 Sportback 1.6 TDI 110KM S-line z 2016 </b>roku



Auto sprowadzone z Holandii, zarejestrowane w Polsce



Stan techniczny i wizualny bardzo dobry
Wnętrze czyste oraz zadbane, tapicerka materiałowa
Ekonomiczny silnik diesla 1.6 o mocy 110 KM
Przebieg: <b>188 788</b> km


Klimatyzacja dwustrefowa automatyczna sprawna

<b>Certyfikat N.A.P</b>

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej



<li>ABS, ESP, kontrola trakcji</li>
<li>Tempomat</li>
<li>Poduszki powietrzne przód/bok/kurtyny, poduszka kolanowa kierowcy</li>
<li>Bluetooth, USB, radio, nawigacja, sterowanie z kierownicy</li>
<li>Światła Bi-Xenon, LED do jazdy dziennej, czujnik zmierzchu i deszczu</li>
<li>Elektryczne szyby przód/tył</li>
<li>Isofix, mocowania fotelika dziecięcego</li>
<li>Alufelgi 16"</li>
<li>Przyciemniane szyby tylne</li>


--------



✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.



<li>Możliwość transportu auta</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Audi_A3_sportback_2016_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Audi_A3_sportback_2016_Kompakt/Audi_A3_sportback_2016_p_00.jpg?updatedAt=1773845183984",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"A3 sportback",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"Certyfikat - 234 tys. przebieg",moc:"180",slogan2:"",equip_systemy:`Tempomat

Lampy ksenonowe

Kontrola odległości z przodu (przy parkowaniu)

Kontrola odległości z tyłu (przy parkowaniu)

Podgrzewane lusterka boczne

Lusterka boczne składane elektrycznie

Ogranicznik prędkości

Kontrola trakcji

Czujnik zmierzchu

Spryskiwacze reflektorów

Światła do jazdy dziennej diodowe LED

Lampy przeciwmgielne

Oświetlenie drogi do domu`,id_wc_2:"36014",id_wc_1:"36014",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/6146456679_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

System wspomagania hamowania

Aktywny asystent hamowania awaryjnego

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Poduszka kolan kierowcy

Poduszka kolan pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17

Zawieszenie sportowe`,marka:"Renault",wyposazenie:"",wersja:"TCe 180 GT ",typ_nadwozia:"Coupe",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_00.jpg?updatedAt=1774273349242
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_01.jpg?updatedAt=1774273350407
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_02.jpg?updatedAt=1774273351555
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_03.jpg?updatedAt=1774273352744
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_04.jpg?updatedAt=1774273353885
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_05.jpg?updatedAt=1774273355022
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_06.jpg?updatedAt=1774273356160
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_07.jpg?updatedAt=1774273357345
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_08.jpg?updatedAt=1774273358509
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_09.jpg?updatedAt=1774273359771
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_10.jpg?updatedAt=1774273360933
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_11.jpg?updatedAt=1774273362293
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_12.jpg?updatedAt=1774273363566
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_13.jpg?updatedAt=1774273364732
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_14.jpg?updatedAt=1774273365891
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_15.jpg?updatedAt=1774273367058
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_16.jpg?updatedAt=1774273368155
https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_17.jpg?updatedAt=1774273369312`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna: dwustrefowa

Dach panoramiczny

Tapicerka skórzana

Elektrycznie ustawiany fotel kierowcy

Podgrzewany fotel kierowcy

Podgrzewany fotel pasażera

Regul. elektr. podparcia lędźwiowego - kierowca

Regul. elektr. podparcia lędźwiowego - pasażer

Sportowe fotele - przód

Podłokietniki - przód

Kierownica skórzana

Keyless Go

Czujnik deszczu

Elektryczne szyby przednie

Przyciemniane tylne szyby`,"pojemnosc-silnika":"19983",cena:"21900",status:"",kolor:"Czarny",naped:"NA PRZEDNIE KOŁA",paliwo:"Benzyna",przebieg:"234579",html_code:"",uc_beztla:`Zapraszamy do zakupu Renault Megane Coupe <b>2.0 TCe 180KM z 2010 </b>roku



Auto świeżo sprowadzone z Holandii, zarejestrowane w Polsce



Stan techniczny bardzo dobry, normalne ślady użytkowania
Wnętrze czyste i zadbane – skórzana tapicerka, sportowe fotele



<li>Klimatyzacja dwustrefowa automatyczna</li>
<li><b>Certyfikat legalności przebiegu – 234 579</b> km</li>
<li>Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej</li>



<li>ABS, ESP, kontrola trakcji, asystent hamowania awaryjnego</li>
<li>Poduszki powietrzne przód/bok/kurtyny, poduszki kolanowe</li>
<li>Tempomat, ogranicznik prędkości</li>
<li>Bluetooth, USB, radio, nawigacja, sterowanie z kierownicy</li>
<li>Czujniki parkowania przód/tył, światła Xenon, LED, spryskiwacze reflektorów</li>
<li>Elektryczne szyby, podgrzewane fotele, elektryczne lędźwie</li>
<li>Alufelgi 17", przyciemniane szyby tylne, hak, szklany dach panoramiczny</li>



--------



✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.


<li>Możliwość transportu auta</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Renault_Megane_2010_Coupe",link_glowne:"https://ik.imagekit.io/kduc81jzs/Renault_Megane_2010_Coupe/Renault_Megane_2010_p_00.jpg?updatedAt=1774273349242",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth

Radio

Zestaw głośnomówiący

Gniazdo USB

System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Megane",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2015",slogan1:"Ekonomiczny napęd hybrydowy plug-in + gaz",moc:"121",slogan2:"188 ty. przebieg",equip_systemy:`Tempomat adaptacyjny ACC

Lampy przednie w technologii LED

Kamera parkowania tył

Podgrzewane lusterka boczne

Lusterka boczne składane elektrycznie

Asystent (czujnik) martwego pola

Kontrola zmiany pasa ruchu (Lane assist)

Kontrola odległości od poprzedzającego pojazdu

Ogranicznik prędkości

Kontrola trakcji

Wspomaganie ruszania pod górę (Hill Holder)

Czujnik zmierzchu

Spryskiwacze reflektorów

Światła do jazdy dziennej diodowe LED

Lampy przeciwmgielne

Lampy przeciwmgielne w technologii LED

Lampy tylne w technologii LED

Oświetlenie drogi do domu

Elektryczny hamulec postojowy

Wspomaganie kierownicy`,id_wc_2:"36019",id_wc_1:"36019",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HXTwN_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

System wspomagania hamowania

Alarm ruchu poprzecznego z tyłu pojazdu

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Poduszka kolan pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"Felgi aluminiowe 18",marka:"Mitsubishi",wyposazenie:"",wersja:"2.0 4WD Top",typ_nadwozia:"Suv",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_00.jpg?updatedAt=1774037768418
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_01.jpg?updatedAt=1774037769609
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_02.jpg?updatedAt=1774037770843
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_03.jpg?updatedAt=1774037771986
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_04.jpg?updatedAt=1774037773138
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_05.jpg?updatedAt=1774037774290
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_06.jpg?updatedAt=1774037775449
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_07.jpg?updatedAt=1774037776610
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_08.jpg?updatedAt=1774037777788
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_09.jpg?updatedAt=1774037778942
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_10.jpg?updatedAt=1774037780099
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_11.jpg?updatedAt=1774037781233
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_12.jpg?updatedAt=1774037782391
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_13.jpg?updatedAt=1774037783523
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_14.jpg?updatedAt=1774037784659
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_15.jpg?updatedAt=1774037785810
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_16.jpg?updatedAt=1774037787014
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_17.jpg?updatedAt=1774037788169
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_18.jpg?updatedAt=1774037789306
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_19.jpg?updatedAt=1774037790686
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_20.jpg?updatedAt=1774037792058
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_21.jpg?updatedAt=1774037793241
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_22.jpg?updatedAt=1774037794389`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna: dwustrefowa

Tapicerka Alcantara

Elektrycznie ustawiany fotel kierowcy

Podgrzewany fotel kierowcy

Podgrzewany fotel pasażera

Podłokietniki - przód

Podłokietniki - tył

Kierownica skórzana

Kierownica ze sterowaniem radia

Kierownica wielofunkcyjna

Kierownica ogrzewana

Zmiana biegów w kierownicy

Keyless Go

Czujnik deszczu

Elektryczne szyby przednie

Elektryczne szyby tylne

Przyciemniane tylne szyby`,"pojemnosc-silnika":"19983",cena:"58900",status:"",kolor:"Biały",naped:"4X4 (STAŁY)",paliwo:"Hybryda plug-in",przebieg:"188388",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Mitsubishi Outlander 2.0 PHEV 4x4</b> z 2015 roku



<li>Stan techniczny i wizualny bardzo dobry</li>
<li>Wnętrze czyste, zadbane – tapicerka Alcantara</li>
<li><b>Ekonomiczny napęd hybrydowy plug-in + ga</b>z</li>
<li><b>Przebieg: 188 388 km</b></li>
<li>Łączna moc 200KM</li>


Klimatyzacja dwustrefowa automatyczna sprawna

Certyfikat legalności przebiegu

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej



ABS, ESP, kontrola trakcji, asystent pasa ruchu, asystent ruszania pod górę
Poduszki powietrzne przód/bok/kurtyny, poduszka kolanowa pasażera
Tempomat adaptacyjny, ogranicznik prędkości, system rozpoznawania martwego pola
Bluetooth, USB, radio, nawigacja, sterowanie z kierownicy, system głośnomówiący
Kamera cofania, czujniki martwego pola, asystent ruchu poprzecznego
Światła Full LED, czujnik zmierzchu i deszczu, spryskiwacze reflektorów
Elektryczne szyby przód/tył, podgrzewane fotele, podgrzewana kierownica, elektrycznie składane lusterka
Alufelgi 18", przyciemniane szyby tylne, hak


--------



✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.



Możliwość transportu auta
Możliwość zostawienia swojego auta w rozliczeniu
WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ




Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Mitsubishi_Outlander_2015_Suv",link_glowne:"https://ik.imagekit.io/kduc81jzs/Mitsubishi_Outlander_2015_Suv/Mitsubishi_Outlander_2015_p_00.jpg?updatedAt=1774037768418",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth

Radio

Zestaw głośnomówiący

Gniazdo USB

System nawigacji satelitarnej

System nagłośnienia

Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Outlander",opis_fb:"","skrzynia-biegow":"Automatyczna"},{rok:"2012",slogan1:"Certyfikat legalności przebiegu",moc:"115",slogan2:"Panoramiczny dach szklany",equip_systemy:`Tempomat

Kontrola odległości z tyłu (przy parkowaniu)

Kamera parkowania tył

Lusterka boczne ustawiane elektrycznie

Lusterka boczne składane elektrycznie

Kontrola trakcji

Czujnik zmierzchu

Lampy doświetlające zakręt

Światła do jazdy dziennej

System Start/Stop`,id_wc_2:"20011",id_wc_1:"36020",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HXqlX_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

System wspomagania hamowania

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"Felgi aluminiowe 16",marka:"Volvo",wyposazenie:"",wersja:"D2 Kinetic",typ_nadwozia:"Kompakt",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_00.jpg?updatedAt=1774191597501
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_01.jpg?updatedAt=1774191598667
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_02.jpg?updatedAt=1774191599868
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_03.jpg?updatedAt=1774191601114
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_04.jpg?updatedAt=1774191602312
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_05.jpg?updatedAt=1774191603491
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_06.jpg?updatedAt=1774191604667
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_07.jpg?updatedAt=1774191605840
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_08.jpg?updatedAt=1774191607039
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_09.jpg?updatedAt=1774191608215
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_10.jpg?updatedAt=1774191609396
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_11.jpg?updatedAt=1774191610582
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_12.jpg?updatedAt=1774191611758
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_13.jpg?updatedAt=1774191612949
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_14.jpg?updatedAt=1774191614138
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_15.jpg?updatedAt=1774191615242
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_16.jpg?updatedAt=1774191616419
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_17.jpg?updatedAt=1774191617592
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_18.jpg?updatedAt=1774191618785
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_19.jpg?updatedAt=1774191619921
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_20.jpg?updatedAt=1774191621101
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_21.jpg?updatedAt=1774191622303
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_22.jpg?updatedAt=1774191623474
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_23.jpg?updatedAt=1774191624642
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_24.jpg?updatedAt=1774191625825
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_25.jpg?updatedAt=1774191627036
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_26.jpg?updatedAt=1774191628257
https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_27.jpg?updatedAt=1774191629477`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna: dwustrefowa

Dach panoramiczny

Tapicerka materiałowa

Podłokietniki - przód

Kierownica skórzana

Kierownica ze sterowaniem radia

Dźwignia zmiany biegów wykończona skórą

Keyless Go

Czujnik deszczu

Elektryczne szyby przednie

Elektryczne szyby tylne

Przyciemniane tylne szyby`,"pojemnosc-silnika":"15603",cena:"29900",status:"",kolor:"Czarny",naped:"KRAJ POCHODZENIA",paliwo:"Diesel",przebieg:"225724",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>Volvo V40 1.6 D2 115KM Kinetic z 2012 </b>roku



Auto świeżo sprowadzone z Holandii, zarejestrowane w Polsce



<li>Stan techniczny bardzo dobry, normalne ślady użytkowania</li>
<li>Wnętrze czyste oraz zadbane, tapicerka materiałowa</li>
<li>Ekonomiczny silnik diesla 1.6 o mocy 115 KM</li>
<li>Przebieg: 225 724 km</li>



Klimatyzacja dwustrefowa automatyczna sprawna

<b>Certyfikat legalności przebiegu</b>

Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej



ABS, ESP, kontrola trakcji
<li>Tempomat</li>
<li>Poduszki powietrzne przód/bok/kurtyny</li>
<li>Bluetooth, USB, radio, nawigacja, sterowanie z kierownicy</li>
<li>Światła do jazdy dziennej, czujnik zmierzchu i deszczu</li>
<li>Elektryczne szyby przód/tył, elektrycznie regulowane i składane lusterka</li>
<li>Isofix, mocowania fotelika dziecięcego</li>
<li>Czujniki parkowania tył, kamera cofania</li>
<li>Panoramiczny dach szklany</li>
<li>Alufelgi 16"</li>
<li>Hak holowniczy</li>



--------



✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.



<li>Możliwość transportu auta w dowolne miejsce</li>
<li>Możliwość zostawienia swojego auta w rozliczeniu</li>
<li>WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ</li>



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Volvo_V40_2012_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Volvo_V40_2012_Kompakt/Volvo_V40_2012_p_00.jpg?updatedAt=1774191597501",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth

Radio

Gniazdo USB

System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"V40",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2012",slogan1:"Auto po dużym serwisie",moc:"116",slogan2:"Certyfikat",equip_systemy:`Tempomat

Podgrzewane lusterka boczne

Kontrola trakcji

Automatyczna kontrola zjazdu ze stoku

Wspomaganie ruszania pod górę (Hill Holder)

Lampy przeciwmgielne

Wspomaganie kierownicy`,id_wc_2:"19982",id_wc_1:"36053",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/6146621282_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

System wspomagania hamowania

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:"Felgi aluminiowe 17",marka:"Hyundai",wyposazenie:"",wersja:"1.7 CRDi 2WD Style",typ_nadwozia:"Suv",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_00.jpg?updatedAt=1774642842691
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_01.jpg?updatedAt=1774642843871
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_02.jpg?updatedAt=1774642845036
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_03.jpg?updatedAt=1774642846190
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_04.jpg?updatedAt=1774642847364
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_05.jpg?updatedAt=1774642848556
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_06.jpg?updatedAt=1774642849986
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_07.jpg?updatedAt=1774642851140
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_08.jpg?updatedAt=1774642852306
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_09.jpg?updatedAt=1774642853487
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_10.jpg?updatedAt=1774642854658
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_11.jpg?updatedAt=1774642855829
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_12.jpg?updatedAt=1774642856991
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_13.jpg?updatedAt=1774642858153
https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_14.jpg?updatedAt=1774642859326`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna: dwustrefowa

Tapicerka częściowo skórzana

Podłokietniki - przód

Podłokietniki - tył

Kierownica skórzana

Kierownica ze sterowaniem radia

Dźwignia zmiany biegów wykończona skórą

Elektryczne szyby przednie

Elektryczne szyby tylne`,"pojemnosc-silnika":"16853",cena:"29900",status:"",kolor:"Szary",naped:"NA PRZEDNIE KOŁA",paliwo:"Diesel",przebieg:"261508",html_code:"",uc_beztla:`Zapraszamy do zakupu HYUNDAI IX35 Z 2012 roku



<li>Auto świeżo sprowadzone z Holandii i zarejestrowane</li>
<li>Stan techniczny bardzo dobry, noszący normalne ślady użytkowania</li>
<li>Tapicerka i wnętrze czyste i zadbane.</li>



Opony z 2024r
Klimatyzacja sprawna
<b>Certyfikat legalności przebiegu</b>
Kupujący może sprawdzić auto w dowolnej stacji diagnostycznej
   <b> Auto po dużym serwisie</b>

--------



<li>✅Dzięki certyfikatowi 100%-wa pewność przebiegu i oryginalności auta</li>
<li>✅ Bezpieczeństwo i przejrzystość transakcji – kupuj bez ryzyka.</li>

Możliwość transportu auta w dowolne miejsce
Możliwość zostawienia swojego auta w rozliczeniu
WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ


Możliwość transportu auta w dowolne miejsce
Możliwość zostawienia swojego auta w rozliczeniu
WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ`,katalog:"Hyundai_Ix35_2012_Suv",link_glowne:"https://ik.imagekit.io/kduc81jzs/Hyundai_Ix35_2012_Suv/Hyundai_Ix35_2012_p_00.jpg?updatedAt=1774642842691",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth

Radio

Zestaw głośnomówiący

Gniazdo USB`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Ix35",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2010",slogan1:"Potwierdzony przebieg: 241578 km, certyfikat N.A.P",moc:"110",slogan2:"",equip_systemy:`Tempomat
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Lusterka boczne składane elektrycznie
- 
- Ogranicznik prędkości
- 
- Kontrola trakcji
- 
- Wspomaganie ruszania pod górę (Hill Holder)
- 
- Czujnik zmierzchu
- 
- Lampy przeciwmgielne
- 
- Oświetlenie drogi do domu
- 
- Elektryczny hamulec postojowy`,id_wc_2:"20377",id_wc_1:"36054",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/ID6HZgSh_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Elektroniczny system rozdziału siły hamowania
- 
- System wspomagania hamowania
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczne poduszki powietrzne - przód
- 
- Kurtyny powietrzne - tył
- 
- Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17
- 
- Opony letnie`,marka:"Renault",wyposazenie:"",wersja:"1.6 16V 110 Dynamique",typ_nadwozia:"Minivan",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_00.jpg?updatedAt=1775137228106
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_01.jpg?updatedAt=1775137229326
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_02.jpg?updatedAt=1775137230671
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_03.jpg?updatedAt=1775137231876
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_04.jpg?updatedAt=1775137233057
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_05.jpg?updatedAt=1775137234283
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_06.jpg?updatedAt=1775137235530
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_07.jpg?updatedAt=1775137236772
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_08.jpg?updatedAt=1775137238745
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_09.jpg?updatedAt=1775137239917
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_10.jpg?updatedAt=1775137241074
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_11.jpg?updatedAt=1775137242272
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_12.jpg?updatedAt=1775137243561
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_13.jpg?updatedAt=1775137244722
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_14.jpg?updatedAt=1775137245908
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_15.jpg?updatedAt=1775137247115
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_16.jpg?updatedAt=1775137248340
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_17.jpg?updatedAt=1775137249512
https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_18.jpg?updatedAt=1775137250717`,opis_ig:"",equip_komfort:`Hak
- 
- Klimatyzacja automatyczna: dwustrefowa
- 
- Rolety na bocznych szybach opuszczane ręcznie
- 
- Tapicerka materiałowa
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica ze sterowaniem radia
- 
- Dźwignia zmiany biegów wykończona skórą
- 
- Keyless Go
- 
- Uruchamianie silnika bez użycia kluczyków
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie
- 
- Elektryczne szyby tylne
- 
- Przyciemniane tylne szyby`,"pojemnosc-silnika":"15983",cena:"18900",status:"",kolor:"Szary",naped:"NA PRZEDNIE KOŁA",paliwo:"Benzyna",przebieg:"241578",html_code:"",uc_beztla:`Zapraszamy do zakupu<b> RENAULT SCENIC 1.6 Benzyna 110KM z 2010 rok</b>u



Auto sprowadzone z Holandii, zarejestrowane w Polsce


<li>Stan techniczny bardzo dobry, wnętrze czyste i zadbane</li>
<li>Bogata wersja wyposażenia Dynamique</li>
<li><b>Potwierdzony </b>przebieg:<b> 241578</b> km, <b>certyfikat N.A</b>.P</li>
<li>Książka serwisowa</li>



Alufelgi 17"
Nawigacja, klimatyzacja automatyczna dwustrefowa
Tempomat, czujnik deszczu, automatyczne światła
Bluetooth, USB, radio
Systemy bezpieczeństwa: ABS, ESP, poduszki powietrzne, isofix, kontrola trakcji, asystent ruszania pod górę
Keyless, elektryczne szyby przód/tył, elektrycznie składane i podgrzewane lusterka
Hak, rolety boczne, przyciemniane szyby tylne


--------



✅ Możliwość sprawdzenia auta w dowolnym serwisie
✅ Możliwość transportu auta
✅ Możliwość pozostawienia auta w rozliczeniu
✅ WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Renault_Scenic_2010_Minivan",link_glowne:"https://ik.imagekit.io/kduc81jzs/Renault_Scenic_2010_Minivan/Renault_Scenic_2010_p_00.jpg?updatedAt=1775137228106",faktura:"",status_sprzedany:"TAK",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Zestaw głośnomówiący
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Scenic",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2011",slogan1:"Potwierdzony przebieg: 207892 km, certyfikat N.A.P",moc:"117",slogan2:"",equip_systemy:`Tempomat

Lampy ksenonowe

Kontrola odległości z tyłu (przy parkowaniu)

Podgrzewane lusterka boczne

Lusterka boczne składane elektrycznie

Kontrola trakcji

Wspomaganie ruszania pod górę (Hill Holder)

Czujnik zmierzchu

Spryskiwacze reflektorów

Światła do jazdy dziennej

Lampy przeciwmgielne

Lampy tylne w technologii LED

Oświetlenie drogi do domu

System Start/Stop

Wspomaganie kierownicy`,id_wc_2:"20404",id_wc_1:"36055",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/6146789346_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS

ESP

Elektroniczny system rozdziału siły hamowania

System wspomagania hamowania

System rekomendacji przerw podczas trasy

Poduszka powietrzna kierowcy

Poduszka powietrzna pasażera

Poduszka kolan pasażera

Kurtyny powietrzne - przód

Boczne poduszki powietrzne - przód

Kurtyny powietrzne - tył

Isofix (punkty mocowania fotelika dziecięcego)`,equip_tuning:`Felgi aluminiowe 17

Opony letnie`,marka:"Mitsubishi",wyposazenie:"",wersja:"1.6 2WD Intense",typ_nadwozia:"Suv",uc_glowne:`https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_00.jpg?updatedAt=1775205496087
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_01.jpg?updatedAt=1775205497254
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_02.jpg?updatedAt=1775205498444
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_03.jpg?updatedAt=1775205499618
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_04.jpg?updatedAt=1775205500801
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_05.jpg?updatedAt=1775205501955
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_06.jpg?updatedAt=1775205503149
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_07.jpg?updatedAt=1775205504420
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_08.jpg?updatedAt=1775205505601
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_09.jpg?updatedAt=1775205506770
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_10.jpg?updatedAt=1775205507946
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_11.jpg?updatedAt=1775205509153
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_12.jpg?updatedAt=1775205510366
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_13.jpg?updatedAt=1775205511685
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_14.jpg?updatedAt=1775205512939
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_15.jpg?updatedAt=1775205514144
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_16.jpg?updatedAt=1775205515359
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_17.jpg?updatedAt=1775205516557
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_18.jpg?updatedAt=1775205517754
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_19.jpg?updatedAt=1775205518937
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_20.jpg?updatedAt=1775205520523
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_21.jpg?updatedAt=1775205521689
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_22.jpg?updatedAt=1775205522878
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_23.jpg?updatedAt=1775205524103
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_24.jpg?updatedAt=1775205525271
https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_25.jpg?updatedAt=1775205526100`,opis_ig:"",equip_komfort:`Hak

Klimatyzacja automatyczna

Dach panoramiczny

Tapicerka materiałowa

Podłokietniki - przód

Podłokietniki - tył

Kierownica skórzana

Kierownica ze sterowaniem radia

Kierownica wielofunkcyjna

Dźwignia zmiany biegów wykończona skórą

Keyless Go

Czujnik deszczu

Elektryczne szyby przednie

Elektryczne szyby tylne

Przyciemniane tylne szyby`,"pojemnosc-silnika":"15903",cena:"29900",status:"",kolor:"Bordowy",naped:"NA PRZEDNIE KOŁA",paliwo:"Benzyna",przebieg:"207892",html_code:"",uc_beztla:`Zapraszamy do zakupu MITSUBISHI ASX 1.6 Benzyna 117KM z 2011 roku



Auto sprowadzone z Holandii, zarejestrowane w Polsce



Stan techniczny bardzo dobry, wnętrze czyste i zadbane
Bogata wersja wyposażenia Intense
Potwierdzony przebieg: 207892 km, certyfikat N.A.P
Książka serwisowa


Alufelgi 17"
Panoramiczny dach szklany
Xenon, LED tylne, światła do jazdy dziennej
Automatyczna klimatyzacja
Tempomat, czujnik deszczu, automatyczne światła
Bluetooth, USB, radio, ekran dotykowy
Systemy bezpieczeństwa: ABS, ESP, poduszki powietrzne, isofix, kontrola trakcji, asystent ruszania pod górę
Keyless, elektryczne szyby przód/tył, elektrycznie składane i podgrzewane lusterka
Hak, przyciemniane szyby tylne
Czujniki parkowania tył


--------



✅ Możliwość sprawdzenia auta w dowolnym serwisie
✅ Możliwość transportu auta
✅ Możliwość pozostawienia auta w rozliczeniu
✅ WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Mitsubishi_Asx_2011_Suv",link_glowne:"https://ik.imagekit.io/kduc81jzs/Mitsubishi_Asx_2011_Suv/Mitsubishi_Asx_2011_p_00.jpg?updatedAt=1775205496087",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth

Radio

Zestaw głośnomówiący

Gniazdo USB

Ekran dotykowy`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Asx",opis_fb:"","skrzynia-biegow":"Manualna"},{rok:"2013",slogan1:"Potwierdzony przebieg: 182842 km, certyfikat N.A.P",moc:"100",slogan2:"Bogata wersja wyposażenia COSMO",equip_systemy:`Tempomat
- 
- Kontrola odległości z tyłu (przy parkowaniu)
- 
- Lusterka boczne ustawiane elektrycznie
- 
- Podgrzewane lusterka boczne
- 
- Kontrola trakcji
- 
- Światła do jazdy dziennej
- 
- Lampy przeciwmgielne
- 
- Wspomaganie kierownicy`,id_wc_2:"",id_wc_1:"36056",link_bez_tla:"https://ik.imagekit.io/kduc81jzs/bez_tla/6146839976_nobg.png",Podgląd:"",equip_bezpieczenstwo:`ABS
- 
- ESP
- 
- Poduszka powietrzna kierowcy
- 
- Poduszka powietrzna pasażera
- 
- Kurtyny powietrzne - przód
- 
- Boczna poduszka powietrzna kierowcy
- 
- Boczne poduszki powietrzne - przód`,equip_tuning:`Felgi aluminiowe 16
- 
- Opony letnie`,marka:"Opel",wyposazenie:"",wersja:"1.4 16V Cosmo",typ_nadwozia:"Kompakt",uc_glowne:"https://ik.imagekit.io/kduc81jzs/Opel_Corsa_2013_Kompakt/Opel_Corsa_2013_p_00.jpg",opis_ig:"",equip_komfort:`Hak
- 
- Klimatyzacja automatyczna
- 
- Tapicerka częściowo skórzana
- 
- Podłokietniki - przód
- 
- Kierownica skórzana
- 
- Kierownica sportowa
- 
- Kierownica ze sterowaniem radia
- 
- Kierownica wielofunkcyjna
- 
- Czujnik deszczu
- 
- Elektryczne szyby przednie`,"pojemnosc-silnika":"1398",cena:"20900",status:"",kolor:"Szary",naped:"NA PRZEDNIE KOŁA",paliwo:"Benzyna+lpg",przebieg:"182842",html_code:"",uc_beztla:`Zapraszamy do zakupu <b>OPEL CORSA 1.4 Benzyna + LPG 100KM z 2013 roku</b>


Auto sprowadzone z Holandii, zarejestrowane w Polsce


<li>Stan techniczny bardzo dobry, wnętrze czyste i zadbane</li>
<li>Bogata wersja wyposażenia COSMO</li>
<li>Potwierdzony przebieg: 182842 km, certyfikat N.A.P</li>
<li>Książka serwisowa</li>


Alufelgi 16"
Nawigacja, klimatyzacja automatyczna
Tempomat, czujnik deszczu, światła do jazdy dziennej, światła przeciwmgielne
Bluetooth, USB, radio, wielofunkcyjna kierownica, skórzane wstawki
Systemy bezpieczeństwa: ABS, ESP, poduszki powietrzne przód/boczne/kurtyny, kontrola trakcji
Elektryczne szyby przód, elektrycznie regulowane i podgrzewane lusterka
Hak, czujniki parkowania tył


--------



✅ Możliwość sprawdzenia auta w dowolnym serwisie
✅ Możliwość transportu auta
✅ Możliwość pozostawienia auta w rozliczeniu
✅ WYSTAWIAM FAKTURĘ VAT-MARŻA, KUPUJĄCY ZWOLNIONY Z OPŁATY SKARBOWEJ



Wszystkie informacje zawarte w tym ogłoszeniu należy potwierdzić u sprzedawcy.`,katalog:"Opel_Corsa_2013_Kompakt",link_glowne:"https://ik.imagekit.io/kduc81jzs/Opel_Corsa_2013_Kompakt/Opel_Corsa_2013_p_00.jpg",faktura:"",status_sprzedany:"NIE",equip_audio:`Interfejs Bluetooth
- 
- Radio
- 
- Gniazdo USB
- 
- System nawigacji satelitarnej`,opis:""," LINK_LINK-PUSTE-AUTO":"",model:"Corsa",opis_fb:"","skrzynia-biegow":"Manualna"}];function Tc(){return ae.jsxs("div",{className:"container",children:[ae.jsx("header",{className:"main-header",children:ae.jsx("h1",{children:"Auto-Handel Puławy - Oferta"})}),ae.jsx("div",{className:"auto-grid",children:Ec.map((e,n)=>{const t=Object.values(e).find(u=>typeof u=="string"&&u.includes("http")),i=t?t.split(",")[0].trim():"https://via.placeholder.com/400x250",a=e.Marka||e.Rok||"Pojazd",o=e.Model||"",r=isNaN(parseInt(e.Napęd))?"Cena tel.":parseInt(e.Napęd).toLocaleString();return ae.jsxs("div",{className:"auto-card",children:[ae.jsxs("div",{className:"card-image",children:[ae.jsx("img",{src:i,alt:"Samochód",onError:u=>u.target.src="https://via.placeholder.com/400x250"}),ae.jsx("span",{className:"status-badge",children:"Dostępny"})]}),ae.jsxs("div",{className:"card-content",children:[ae.jsxs("h3",{children:[a," ",o]}),ae.jsxs("p",{className:"price",children:[r," PLN"]}),ae.jsx("p",{className:"vin-description",children:e.VIN}),ae.jsx("button",{className:"details-btn",children:"Szczegóły"})]})]},n)})})]})}Ua.createRoot(document.getElementById("root")).render(ae.jsx(gp.StrictMode,{children:ae.jsx(Tc,{})}));
