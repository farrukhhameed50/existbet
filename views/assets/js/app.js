/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";function e(e,t){var a=[],i=0;if(e&&!t&&e instanceof r)return e;if(e)if("string"==typeof e){var s,n,o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),(n=document.createElement(l)).innerHTML=o,i=0;i<n.childNodes.length;i+=1)a.push(n.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===window||e===document)a.push(e);else if(e.length>0&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new r(a)}function t(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function a(){var e="onwheel"in d;if(!e){var t=d.createElement("div");t.setAttribute("onwheel","return;"),e="function"==typeof t.onwheel}return!e&&d.implementation&&d.implementation.hasFeature&&!0!==d.implementation.hasFeature("","")&&(e=d.implementation.hasFeature("Events.wheel","3.0")),e}var i,s=i="undefined"==typeof window?{navigator:{userAgent:""},location:{},history:{},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{}},Image:function(){},Date:function(){},screen:{}}:window,r=function(e){for(var t=this,a=0;a<e.length;a+=1)t[a]=e[a];return t.length=e.length,this};e.fn=r.prototype,e.Class=r,e.Dom7=r;"resize scroll".split(" ");var n={addClass:function(e){var t=this;if(void 0===e)return this;for(var a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.add(a[i]);return this},removeClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.remove(a[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.toggle(a[i]);return this},attr:function(e,t){var a=arguments,i=this;if(1!==arguments.length||"string"!=typeof e){for(var s=0;s<this.length;s+=1)if(2===a.length)i[s].setAttribute(e,t);else for(var r in e)i[s][r]=e[r],i[s].setAttribute(r,e[r]);return this}if(this[0])return this[0].getAttribute(e)},removeAttr:function(e){for(var t=this,a=0;a<this.length;a+=1)t[a].removeAttribute(e);return this},data:function(e,t){var a,i=this;if(void 0!==t){for(var s=0;s<this.length;s+=1)(a=i[s]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var r=a.getAttribute("data-"+e);if(r)return r}},transform:function(e){for(var t=this,a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){var t=this;"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){function t(t){var a=t.target;if(a){var i=t.target.dom7EventData||[];if(i.unshift(t),e(a).is(o))l.apply(a,i);else for(var s=e(a).parents(),r=0;r<s.length;r+=1)e(s[r]).is(o)&&l.apply(s[r],i)}}function a(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.unshift(e),l.apply(this,t)}for(var i=this,s=[],r=arguments.length;r--;)s[r]=arguments[r];var n=s[0],o=s[1],l=s[2],d=s[3];if("function"==typeof s[1]){var p;n=(p=s)[0],l=p[1],d=p[2],o=void 0}d||(d=!1);for(var c,u=n.split(" "),h=0;h<this.length;h+=1){var v=i[h];if(o)for(c=0;c<u.length;c+=1)v.dom7LiveListeners||(v.dom7LiveListeners=[]),v.dom7LiveListeners.push({type:n,listener:l,proxyListener:t}),v.addEventListener(u[c],t,d);else for(c=0;c<u.length;c+=1)v.dom7Listeners||(v.dom7Listeners=[]),v.dom7Listeners.push({type:n,listener:l,proxyListener:a}),v.addEventListener(u[c],a,d)}return this},off:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];if("function"==typeof t[1]){var o;i=(o=t)[0],r=o[1],n=o[2],s=void 0}n||(n=!1);for(var l=i.split(" "),d=0;d<l.length;d+=1)for(var p=0;p<this.length;p+=1){var c=e[p];if(s){if(c.dom7LiveListeners)for(var u=0;u<c.dom7LiveListeners.length;u+=1)r?c.dom7LiveListeners[u].listener===r&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n):c.dom7LiveListeners[u].type===l[d]&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n)}else if(c.dom7Listeners)for(var h=0;h<c.dom7Listeners.length;h+=1)r?c.dom7Listeners[h].listener===r&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n):c.dom7Listeners[h].type===l[d]&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n)}return this},trigger:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=t[0].split(" "),s=t[1],r=0;r<i.length;r+=1)for(var n=0;n<this.length;n+=1){var o=void 0;try{o=new window.CustomEvent(i[r],{detail:s,bubbles:!0,cancelable:!0})}catch(e){(o=document.createEvent("Event")).initEvent(i[r],!0,!0),o.detail=s}e[n].dom7EventData=t.filter(function(e,t){return t>0}),e[n].dispatchEvent(o),e[n].dom7EventData=[],delete e[n].dom7EventData}return this},transitionEnd:function(e){function t(r){if(r.target===this)for(e.call(this,r),a=0;a<i.length;a+=1)s.off(i[a],t)}var a,i=["webkitTransitionEnd","transitionend"],s=this;if(e)for(a=0;a<i.length;a+=1)s.on(i[a],t);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===window?window.scrollY:e.scrollTop,n=e===window?window.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a,i=this;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)i[a].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)i[a].style[e]=t;return this}return this},each:function(e){var t=this;if(!e)return this;for(var a=0;a<this.length;a+=1)if(!1===e.call(t[a],a,t[a]))return t;return this},html:function(e){var t=this;if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a+=1)t[a].innerHTML=e;return this},text:function(e){var t=this;if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a+=1)t[a].textContent=e;return this},is:function(t){var a,i,s=this[0];if(!s||void 0===t)return!1;if("string"==typeof t){if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(a=e(t),i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}if(t===document)return s===document;if(t===window)return s===window;if(t.nodeType||t instanceof r){for(a=t.nodeType?[t]:t,i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return e>a-1?new r([]):e<0?(t=a+e,new r(t<0?[]:[this[t]])):new r([this[e]])},append:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i,s=0;s<t.length;s+=1){i=t[s];for(var n=0;n<this.length;n+=1)if("string"==typeof i){var o=document.createElement("div");for(o.innerHTML=i;o.firstChild;)e[n].appendChild(o.firstChild)}else if(i instanceof r)for(var l=0;l<i.length;l+=1)e[n].appendChild(i[l]);else e[n].appendChild(i)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=document.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof r)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(t){return new r(this.length>0?t?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},prev:function(t){if(this.length>0){var a=this[0];return new r(t?a.previousElementSibling&&e(a.previousElementSibling).is(t)?[a.previousElementSibling]:[]:a.previousElementSibling?[a.previousElementSibling]:[])}return new r([])},prevAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},parent:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)null!==i[r].parentNode&&(a?e(i[r].parentNode).is(a)&&s.push(i[r].parentNode):s.push(i[r].parentNode));return e(t(s))},parents:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)for(var n=i[r].parentNode;n;)a?e(n).is(a)&&s.push(n):s.push(n),n=n.parentNode;return e(t(s))},closest:function(e){var t=this;return void 0===e?new r([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=this,a=[],i=0;i<this.length;i+=1)for(var s=t[i].querySelectorAll(e),n=0;n<s.length;n+=1)a.push(s[n]);return new r(a)},children:function(a){for(var i=this,s=[],n=0;n<this.length;n+=1)for(var o=i[n].childNodes,l=0;l<o.length;l+=1)a?1===o[l].nodeType&&e(o[l]).is(a)&&s.push(o[l]):1===o[l].nodeType&&s.push(o[l]);return new r(t(s))},remove:function(){for(var e=this,t=0;t<this.length;t+=1)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);return this},add:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];var i,s,r=this;for(i=0;i<t.length;i+=1){var n=e(t[i]);for(s=0;s<n.length;s+=1)r[r.length]=n[s],r.length+=1}return r},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}}};Object.keys(n).forEach(function(t){e.fn[t]=n[t]});var o,l={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){void 0===t&&(t="x");var a,i,r,n=s.getComputedStyle(e,null);return s.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new s.WebKitCSSMatrix("none"===i?"":i)):a=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=s.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,r,n={},o=e||s.location.href;if("string"==typeof o&&o.length)for(r=(a=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<r;t+=1)i=a[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(void 0!==s&&null!==s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var d=r[n],p=Object.getOwnPropertyDescriptor(s,d);void 0!==p&&p.enumerable&&(l.isObject(a[d])&&l.isObject(s[d])?l.extend(a[d],s[d]):!l.isObject(a[d])&&l.isObject(s[d])?(a[d]={},l.extend(a[d],s[d])):a[d]=s[d])}}return a}},d=o="undefined"==typeof document?{addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return{}},querySelectorAll:function(){return[]},createElement:function(){return{style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,p={touch:s.Modernizr&&!0===s.Modernizr.touch||!!("ontouchstart"in s||s.DocumentTouch&&d instanceof s.DocumentTouch),transforms3d:s.Modernizr&&!0===s.Modernizr.csstransforms3d||function(){var e=d.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=d.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in s||"WebkitMutationObserver"in s,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});s.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in s},c=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},u={components:{}};c.prototype.on=function(e,t){var a=this;return"function"!=typeof t?a:(e.split(" ").forEach(function(e){a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e].push(t)}),a)},c.prototype.once=function(e,t){function a(){for(var s=[],r=arguments.length;r--;)s[r]=arguments[r];t.apply(i,s),i.off(e,a)}var i=this;return"function"!=typeof t?i:i.on(e,a)},c.prototype.off=function(e,t){var a=this;return e.split(" ").forEach(function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e].forEach(function(i,s){i===t&&a.eventsListeners[e].splice(s,1)})}),a},c.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(!a.eventsListeners)return a;var i,s,r;return"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),r=a):(i=e[0].events,s=e[0].data,r=e[0].context||a),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(a.eventsListeners[e]){var t=[];a.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(r,s)})}}),a},c.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a];i.params&&l.extend(e,i.params)})},c.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a],s=e[a]||{};i.instance&&Object.keys(i.instance).forEach(function(e){var a=i.instance[e];t[e]="function"==typeof a?a.bind(t):a}),i.on&&t.on&&Object.keys(i.on).forEach(function(e){t.on(e,i.on[e])}),i.create&&i.create.bind(t)(s)})},u.components.set=function(e){var t=this;t.use&&t.use(e)},c.installModule=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=e.name||Object.keys(i.prototype.modules).length+"_"+l.now();return i.prototype.modules[s]=e,e.proto&&Object.keys(e.proto).forEach(function(t){i.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){i[t]=e.static[t]}),e.install&&e.install.apply(i,t),i},c.use=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(c,u);var h={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),l.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtl,r=e.wrongRTL,n=a.children("."+e.params.slideClass),o=e.virtual&&t.virtual.enabled?e.virtual.slides.length:n.length,d=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=o,m=e.snapGrid.length,g=e.snapGrid.length,b=t.spaceBetween,w=-h,y=0,x=0;if(void 0!==i){"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*i),e.virtualSize=-b,s?n.css({marginLeft:"",marginTop:""}):n.css({marginRight:"",marginBottom:""});var T;t.slidesPerColumn>1&&(T=Math.floor(o/t.slidesPerColumn)===o/e.params.slidesPerColumn?o:Math.ceil(o/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=T/S,M=C-(t.slidesPerColumn*C-o),z=0;z<o;z+=1){E=0;var P=n.eq(z);if(t.slidesPerColumn>1){var k=void 0,$=void 0,I=void 0;"column"===t.slidesPerColumnFill?(I=z-($=Math.floor(z/S))*S,($>M||$===M&&I===S-1)&&(I+=1)>=S&&(I=0,$+=1),k=$+I*T/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(I=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}"none"!==P.css("display")&&("auto"===t.slidesPerView?(E=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0),t.roundLengths&&(E=Math.floor(E))):(E=(i-(t.slidesPerView-1)*b)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),n[z]&&(e.isHorizontal()?n[z].style.width=E+"px":n[z].style.height=E+"px")),n[z]&&(n[z].swiperSlideSize=E),u.push(E),t.centeredSlides?(w=w+E/2+y/2+b,0===y&&0!==z&&(w=w-i/2-b),0===z&&(w=w-i/2-b),Math.abs(w)<.001&&(w=0),x%t.slidesPerGroup==0&&d.push(w),c.push(w)):(x%t.slidesPerGroup==0&&d.push(w),c.push(w),w=w+E+b),e.virtualSize+=E+b,y=E,x+=1)}e.virtualSize=Math.max(e.virtualSize,i)+v;var L;if(s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),p.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(e.virtualSize=(E+t.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){L=[];for(var D=0;D<d.length;D+=1)d[D]<e.virtualSize+d[0]&&L.push(d[D]);d=L}if(!t.centeredSlides){L=[];for(var O=0;O<d.length;O+=1)d[O]<=e.virtualSize-i&&L.push(d[O]);d=L,Math.floor(e.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-i)}0===d.length&&(d=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?n.css({marginLeft:b+"px"}):n.css({marginRight:b+"px"}):n.css({marginBottom:b+"px"})),l.extend(e,{slides:n,snapGrid:d,slidesGrid:c,slidesSizesGrid:u}),o!==f&&e.emit("slidesLengthChange"),d.length!==m&&e.emit("snapGridLengthChange"),c.length!==g&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=this,a=[],i=0;if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)for(e=0;e<Math.ceil(t.params.slidesPerView);e+=1){var s=t.activeIndex+e;if(s>t.slides.length)break;a.push(t.slides.eq(s)[0])}else a.push(t.slides.eq(t.activeIndex)[0]);for(e=0;e<a.length;e+=1)if(void 0!==a[e]){var r=a[e].offsetHeight;i=r>i?r:i}i&&t.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1)t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size||p>0&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,d=n;0===i?(s=0,r=!0,n=!0):(r=(s=(e-t.minTranslate())/i)<=0,n=s>=1),l.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e=this,t=e.slides,a=e.params,i=e.$wrapperEl,s=e.activeIndex,r=e.realIndex,n=e.virtual&&a.virtual.enabled;t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);var o;(o=n?e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+s+'"]'):t.eq(s)).addClass(a.slideActiveClass),a.loop&&(o.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass));var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);a.loop&&0===l.length&&(l=t.eq(0)).addClass(a.slideNextClass);var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);a.loop&&0===d.length&&(d=t.eq(-1)).addClass(a.slidePrevClass),a.loop&&(l.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass),d.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtl?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,d=a.realIndex,p=a.snapIndex,c=e;if(void 0===c){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?c=u:i>=s[u]&&i<s[u+1]&&(c=u+1):i>=s[u]&&(c=u);n.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if((t=r.indexOf(i)>=0?r.indexOf(i):Math.floor(c/n.slidesPerGroup))>=r.length&&(t=r.length-1),c!==o){var h=parseInt(a.slides.eq(c).attr("data-swiper-slide-index")||c,10);l.extend(a,{snapIndex:t,realIndex:h,previousIndex:o,activeIndex:c}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),d!==h&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==p&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(t){var a=this,i=a.params,s=e(t.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)a.slides[n]===s&&(r=!0);if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(e(s).attr("data-swiper-slide-index"),10):a.clickedIndex=e(s).index(),i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtl,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;var n=l.getTranslate(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtl,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(p.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},f={setTransition:function(e,t){var a=this;a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.params,s=t.previousIndex;i.autoHeight&&t.updateAutoHeight(),t.emit("transitionStart"),e&&a!==s&&(t.emit("slideChangeTransitionStart"),a>s?t.emit("slideNextTransitionStart"):t.emit("slidePrevTransitionStart"))},transitionEnd:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.previousIndex;t.animating=!1,t.setTransition(0),t.emit("transitionEnd"),e&&a!==i&&(t.emit("slideChangeTransitionEnd"),a>i?t.emit("slideNextTransitionEnd"):t.emit("slidePrevTransitionEnd"))}},m=function(){return{isSafari:function(){var e=s.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),ie:s.navigator.pointerEnabled||s.navigator.msPointerEnabled,ieTouch:s.navigator.msPointerEnabled&&s.navigator.msMaxTouchPoints>1||s.navigator.pointerEnabled&&s.navigator.maxTouchPoints>1,lteIE9:function(){var e=d.createElement("div");return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}()}}(),g={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtl,u=s.$wrapperEl,h=Math.floor(r/n.slidesPerGroup);h>=o.length&&(h=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var v=-o[h];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);return!(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r||(c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),1):(0===t||m.lteIE9?(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.transitionEnd(a)):(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.animating||(s.animating=!0,u.transitionEnd(function(){s&&!s.destroyed&&s.transitionEnd(a)}))),0)))},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex-1,e,t,a)):i.slideTo(i.activeIndex-1,e,t,a)},slideReset:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this;return i.slideTo(i.activeIndex,e,t,a)},slideToClickedSlide:function(){var t,a=this,i=a.params,s=a.$wrapperEl,r="auto"===i.slidesPerView?a.slidesPerViewDynamic():i.slidesPerView,n=a.clickedIndex;if(i.loop){if(a.animating)return;t=parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<a.loopedSlides-r/2||n>a.slides.length-a.loopedSlides+r/2?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n):n>a.slides.length-r?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n)}else a.slideTo(n)}},b={loopCreate:function(){var t=this,a=t.params,i=t.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var r=a.slidesPerGroup-s.length%a.slidesPerGroup;if(r!==a.slidesPerGroup){for(var n=0;n<r;n+=1){var o=e(d.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),t.loopedSlides=parseInt(a.loopedSlides||a.slidesPerView,10),t.loopedSlides+=a.loopAdditionalSlides,t.loopedSlides>s.length&&(t.loopedSlides=s.length);var l=[],p=[];s.each(function(a,i){var r=e(i);a<t.loopedSlides&&p.push(i),a<s.length&&a>=s.length-t.loopedSlides&&l.push(i),r.attr("data-swiper-slide-index",a)});for(var c=0;c<p.length;c+=1)i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext;t.allowSlidePrev=!0,t.allowSlideNext=!0,i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)):("auto"===a.slidesPerView&&i>=2*r||i>s.length-2*a.slidesPerView)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)),t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}},w={setGrabCursor:function(e){var t=this;if(!p.touch&&t.params.simulateTouch){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;p.touch||(e.el.style.cursor="")}},y={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&p.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),t.slideTo(r,0,!1)},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=this,t=[],a=0;a<e.slides.length;a+=1)t.push(a);e.removeSlide(t)}},x=function(){var e=s.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:s.cordova||s.phonegap,phonegap:s.cordova||s.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),r=e.match(/(iPad).*OS\s([\d_]+)/),n=e.match(/(iPod)(.*OS\s([\d_]+))?/),o=!r&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(r||o||n)&&(t.os="ios",t.ios=!0),o&&!n&&(t.osVersion=o[2].replace(/_/g,"."),t.iphone=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.ipad=!0),n&&(t.osVersion=n[3]?n[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(o||r||n)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var l=t.osVersion.split("."),p=d.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(n||o)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&p&&p.getAttribute("content").indexOf("minimal-ui")>=0}return t.pixelRatio=s.devicePixelRatio||1,t}(),T=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=t;if(n.originalEvent&&(n=n.originalEvent),i.isTouchEvent="touchstart"===n.type,(i.isTouchEvent||!("which"in n)||3!==n.which)&&(!i.isTouched||!i.isMoved))if(s.noSwiping&&e(n.target).closest("."+s.noSwipingClass)[0])a.allowClick=!0;else if(!s.swipeHandler||e(n).closest(s.swipeHandler)[0]){r.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,r.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;var o=r.currentX,p=r.currentY;if(!(x.ios&&!x.cordova&&s.iOSEdgeSwipeDetection&&o<=s.iOSEdgeSwipeThreshold&&o>=window.screen.width-s.iOSEdgeSwipeThreshold)){if(l.extend(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=o,r.startY=p,i.touchStartTime=l.now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==n.type){var c=!0;e(n.target).is(i.formElements)&&(c=!1),d.activeElement&&e(d.activeElement).is(i.formElements)&&d.activeElement.blur(),c&&a.allowTouchMove&&n.preventDefault()}a.emit("touchStart",n)}}},E=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=a.rtl,o=t;if(o.originalEvent&&(o=o.originalEvent),!i.isTouchEvent||"mousemove"!==o.type){var p="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,c="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=p,void(r.startY=c);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(l.extend(r,{startX:p,startY:c,currentX:p,currentY:c}),i.touchStartTime=l.now()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(c<r.startY&&a.translate<=a.maxTranslate()||c>r.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<r.startX&&a.translate<=a.maxTranslate()||p>r.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&d.activeElement&&o.target===d.activeElement&&e(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=p,r.currentY=c;var u=r.currentX-r.startX,h=r.currentY-r.startY;if(void 0===i.isScrolling){var v;a.isHorizontal()&&r.currentY===r.startY||a.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:u*u+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isTouched)if(i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?u:h;r.diff=f,f*=s.touchRatio,n&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>a.minTranslate()?(m=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<a.maxTranslate()&&(m=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,g))),m&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[a.isHorizontal()?"currentX":"currentY"],time:l.now()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}},S=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,p=e;if(p.originalEvent&&(p=p.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",p),a.allowTouchCallbacks=!1,a.isTouched){i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var c=l.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(p),t.emit("tap",p),u<300&&c-a.lastClickTime>300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=l.nextTick(function(){t&&!t.destroyed&&t.emit("click",p)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",p))),a.lastClickTime=l.now(),l.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var h;if(h=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var v=a.velocities.pop(),f=a.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(g>150||l.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var b=1e3*i.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-E&&(y=t.maxTranslate()-E),x=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.maxTranslate();else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>E&&(y=t.minTranslate()+E),x=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.minTranslate();else if(i.freeModeSticky){for(var S,C=0;C<d.length;C+=1)if(d[C]>-y){S=C;break}y=-(y=Math.abs(d[S]-y)<Math.abs(d[S-1]-y)||"next"===t.swipeDirection?d[S]:d[S-1])}if(0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideReset();i.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?h>=o[P]&&h<o[P+i.slidesPerGroup]&&(M=P,z=o[P+i.slidesPerGroup]-o[P]):h>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(h-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}},C=function(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i}},M=function(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},z={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},P={update:h,translate:v,transition:f,slide:g,loop:b,grabCursor:w,manipulation:y,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=T.bind(e),e.onTouchMove=E.bind(e),e.onTouchEnd=S.bind(e),e.onClick=M.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.addEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).addEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).addEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("touchstart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,p.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),d.addEventListener("mousemove",e.onTouchMove,n),d.addEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on("resize observerUpdate",C)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.removeEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).removeEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).removeEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("onTouchStart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),d.removeEventListener("mousemove",e.onTouchMove,n),d.removeEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off("resize observerUpdate",C)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.loopedSlides;void 0===a&&(a=0);var i=e.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var n=r in s?s[r]:e.originalParams,o=i.loop&&n.slidesPerView!==i.slidesPerView;l.extend(e.params,n),l.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,o&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var r=a[i];r>=s.innerWidth&&!t&&(t=r)}return t||"max"}}},classes:{addClasses:function(){var e=this,t=e.classNames,a=e.params,i=e.rtl,r=e.$el,n=[];n.push(a.direction),a.freeMode&&n.push("free-mode"),p.flexbox||n.push("no-flexbox"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&n.push("multirow"),x.android&&n.push("android"),x.ios&&n.push("ios"),(s.navigator.pointerEnabled||s.navigator.msPointerEnabled)&&n.push("wp8-"+a.direction),n.forEach(function(e){t.push(a.containerModifierClass+e)}),r.addClass(t.join(" "))},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" "))}},images:{loadImage:function(e,t,a,i,r,n){function o(){n&&n()}var l;e.complete&&r?o():t?((l=new s.Image).onload=o,l.onerror=o,i&&(l.sizes=i),a&&(l.srcset=a),t&&(l.src=t)):o()},preloadImages:function(){var e=this;e.imagesToLoad=e.$el.find("img");for(var t=0;t<e.imagesToLoad.length;t+=1){var a=e.imagesToLoad[t];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,function(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))})}}}},k={},$=function(t){function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var n,o;if(1===i.length&&i[0].constructor&&i[0].constructor===Object)o=i[0];else{var d;n=(d=i)[0],o=d[1]}o||(o={}),o=l.extend({},o),n&&!o.el&&(o.el=n),t.call(this,o),Object.keys(P).forEach(function(e){Object.keys(P[e]).forEach(function(t){a.prototype[t]||(a.prototype[t]=P[e][t])})});var c=this;void 0===c.modules&&(c.modules={}),Object.keys(c.modules).forEach(function(e){var t=c.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in o&&"enabled"in i))return;!0===o[a]&&(o[a]={enabled:!0}),"object"!=typeof o[a]||"enabled"in o[a]||(o[a].enabled=!0),o[a]||(o[a]={enabled:!1})}});var u=l.extend({},z);c.useModulesParams(u),c.params=l.extend({},u,k,o),c.originalParams=l.extend({},c.params),c.passedParams=l.extend({},o);var h=e(c.params.el);if(n=h[0]){if(h.length>1){var v=[];return h.each(function(e,t){var i=l.extend({},o,{el:t});v.push(new a(i))}),v}n.swiper=c,h.data("swiper",c);var f=h.children("."+c.params.wrapperClass);return l.extend(c,{$el:h,el:n,$wrapperEl:f,wrapperEl:f[0],classNames:[],slides:e(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===c.params.direction},isVertical:function(){return"vertical"===c.params.direction},rtl:"horizontal"===c.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===h.css("direction")),wrongRTL:"-webkit-box"===f.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEvents:function(){var e=["touchstart","touchmove","touchend"],t=["mousedown","mousemove","mouseup"];return s.navigator.pointerEnabled?t=["pointerdown","pointermove","pointerup"]:s.navigator.msPointerEnabled&&(t=["MSPointerDown","MsPointerMove","MsPointerUp"]),{start:p.touch||!c.params.simulateTouch?e[0]:t[0],move:p.touch||!c.params.simulateTouch?e[1]:t[1],end:p.touch||!c.params.simulateTouch?e[2]:t[2]}}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:l.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.useModules(),c.params.init&&c.init(),c}}t&&(a.__proto__=t),a.prototype=Object.create(t&&t.prototype),a.prototype.constructor=a;var i={extendedDefaults:{},defaults:{},Class:{},$:{}};return a.prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,(l+=a[d].swiperSlideSize)>s&&(o=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!o&&(n+=1,(l+=a[p].swiperSlideSize)>s&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},a.prototype.update=function(){function e(){a=Math.min(Math.max(t.translate,t.maxTranslate()),t.minTranslate()),t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}var t=this;if(t&&!t.destroyed){t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();var a;t.params.freeMode?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),t.emit("update")}},a.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},a.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),l.deleteProps(a)),a.destroyed=!0},a.extendDefaults=function(e){l.extend(k,e)},i.extendedDefaults.get=function(){return k},i.defaults.get=function(){return z},i.Class.get=function(){return t},i.$.get=function(){return e},Object.defineProperties(a,i),a}(c),I={name:"device",proto:{device:x},static:{device:x}},L={name:"support",proto:{support:p},static:{support:p}},D={name:"browser",proto:{browser:m},static:{browser:m}},O={name:"resize",create:function(){var e=this;l.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){var e=this;s.addEventListener("resize",e.resize.resizeHandler),s.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(){var e=this;s.removeEventListener("resize",e.resize.resizeHandler),s.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},A={func:s.MutationObserver||s.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new(0,A.func)(function(e){e.forEach(function(e){a.emit("observerUpdate",e)})});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(p.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){var e=this;e.observer.observers.forEach(function(e){e.disconnect()}),e.observer.observers=[]}},H={name:"observer",params:{observer:!1,observeParents:!1},create:function(){var e=this;l.extend(e,{observer:{init:A.init.bind(e),attach:A.attach.bind(e),destroy:A.destroy.bind(e),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},N={update:function(e){function t(){a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.lazy&&a.params.lazy.enabled&&a.lazy.load()}var a=this,i=a.params,s=i.slidesPerView,r=i.slidesPerGroup,n=i.centeredSlides,o=a.virtual,d=o.from,p=o.to,c=o.slides,u=o.slidesGrid,h=o.renderSlide,v=o.offset;a.updateActiveIndex();var f,m=a.activeIndex||0;f=a.rtl&&a.isHorizontal()?"right":a.isHorizontal()?"left":"top";var g,b;n?(g=Math.floor(s/2)+r,b=Math.floor(s/2)+r):(g=s+(r-1),b=r);var w=Math.max((m||0)-b,0),y=Math.min((m||0)+g,c.length-1),x=(a.slidesGrid[w]||0)-(a.slidesGrid[0]||0);if(l.extend(a.virtual,{from:w,to:y,offset:x,slidesGrid:a.slidesGrid}),d===w&&p===y&&!e)return a.slidesGrid!==u&&x!==v&&a.slides.css(f,x+"px"),void a.updateProgress();if(a.params.virtual.renderExternal)return a.params.virtual.renderExternal.call(a,{offset:x,from:w,to:y,slides:function(){for(var e=[],t=w;t<=y;t+=1)e.push(c[t]);return e}()}),void t();var T=[],E=[];if(e)a.$wrapperEl.find("."+a.params.slideClass).remove();else for(var S=d;S<=p;S+=1)(S<w||S>y)&&a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<c.length;C+=1)C>=w&&C<=y&&(void 0===p||e?E.push(C):(C>p&&E.push(C),C<d&&T.push(C)));E.forEach(function(e){a.$wrapperEl.append(h(c[e],e))}),T.sort(function(e,t){return e<t}).forEach(function(e){a.$wrapperEl.prepend(h(c[e],e))}),a.$wrapperEl.children(".swiper-slide").css(f,x+"px"),t()},renderSlide:function(t,a){var i=this,s=i.params.virtual;if(s.cache&&i.virtual.cache[a])return i.virtual.cache[a];var r=e(s.renderSlide?s.renderSlide.call(i,t,a):'<div class="'+i.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");return r.attr("data-swiper-slide-index")||r.attr("data-swiper-slide-index",a),s.cache&&(i.virtual.cache[a]=r),r},appendSlide:function(e){var t=this;t.virtual.slides.push(e),t.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},X={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;l.extend(e,{virtual:{update:N.update.bind(e),appendSlide:N.appendSlide.bind(e),prependSlide:N.prependSlide.bind(e),renderSlide:N.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};l.extend(e.params,t),l.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){var e=this;e.params.virtual.enabled&&e.virtual.update()}}},Y={handle:function(e){var t=this,a=e;a.originalEvent&&(a=a.originalEvent);var i=a.keyCode||a.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===i||t.isVertical()&&40===i))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===i||t.isVertical()&&38===i))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||d.activeElement&&d.activeElement.nodeName&&("input"===d.activeElement.nodeName.toLowerCase()||"textarea"===d.activeElement.nodeName.toLowerCase()))){if(37===i||39===i||38===i||40===i){var r=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n={left:s.pageXOffset,top:s.pageYOffset},o=s.innerWidth,l=s.innerHeight,p=t.$el.offset();t.rtl&&(p.left-=t.$el[0].scrollLeft);for(var c=[[p.left,p.top],[p.left+t.width,p.top],[p.left,p.top+t.height],[p.left+t.width,p.top+t.height]],u=0;u<c.length;u+=1){var h=c[u];h[0]>=n.left&&h[0]<=n.left+o&&h[1]>=n.top&&h[1]<=n.top+l&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==i&&39!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===i&&!t.rtl||37===i&&t.rtl)&&t.slideNext(),(37===i&&!t.rtl||39===i&&t.rtl)&&t.slidePrev()):(38!==i&&40!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===i&&t.slideNext(),38===i&&t.slidePrev()),t.emit("keyPress",i)}},enable:function(){var t=this;t.keyboard.enabled||(e(d).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)},disable:function(){var t=this;t.keyboard.enabled&&(e(d).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)}},G={name:"keyboard",params:{keyboard:{enabled:!1}},create:function(){var e=this;l.extend(e,{keyboard:{enabled:!1,enable:Y.enable.bind(e),disable:Y.disable.bind(e),handle:Y.handle.bind(e)}})},on:{init:function(){var e=this;e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(){var e=this;e.keyboard.enabled&&e.keyboard.disable()}}},B={lastScrollTime:l.now(),event:s.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":a()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handle:function(e){var t=e,a=this,i=a.params.mousewheel;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtl?-1:1,o=B.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(i.invert&&(r=-r),a.params.freeMode){var d=a.getTranslate()+r*i.sensitivity,p=a.isBeginning,c=a.isEnd;if(d>=a.minTranslate()&&(d=a.minTranslate()),d<=a.maxTranslate()&&(d=a.maxTranslate()),a.setTransition(0),a.setTranslate(d),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!p&&a.isBeginning||!c&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=l.nextTick(function(){a.slideReset()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.stopAutoplay(),0===d||d===a.maxTranslate())return!0}else{if(l.now()-a.mousewheel.lastScrollTime>60)if(r<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new s.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var t=this;if(!B.event)return!1;if(t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.on(B.event,t.mousewheel.handle),t.mousewheel.enabled=!0,!0},disable:function(){var t=this;if(!B.event)return!1;if(!t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.off(B.event,t.mousewheel.handle),t.mousewheel.enabled=!1,!0}},V={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;l.extend(e,{mousewheel:{enabled:!1,enable:B.enable.bind(e),disable:B.disable.bind(e),handle:B.handle.bind(e),lastScrollTime:l.now()}})},on:{init:function(){var e=this;e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(){var e=this;e.mousewheel.enabled&&e.mousewheel.disable()}}},R={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&s.length>0&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass))}},init:function(){var t=this,a=t.params.navigation;if(a.nextEl||a.prevEl){var i,s;a.nextEl&&(i=e(a.nextEl),t.params.uniqueNavElements&&"string"==typeof a.nextEl&&i.length>1&&1===t.$el.find(a.nextEl).length&&(i=t.$el.find(a.nextEl))),a.prevEl&&(s=e(a.prevEl),t.params.uniqueNavElements&&"string"==typeof a.prevEl&&s.length>1&&1===t.$el.find(a.prevEl).length&&(s=t.$el.find(a.prevEl))),i&&i.length>0&&i.on("click",function(e){e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()}),s&&s.length>0&&s.on("click",function(e){e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()}),l.extend(t.navigation,{$nextEl:i,nextEl:i&&i[0],$prevEl:s,prevEl:s&&s[0]})}},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click"),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(e.params.navigation.disabledClass))}},W={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden"}},create:function(){var e=this;l.extend(e,{navigation:{init:R.init.bind(e),update:R.update.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){var e=this;e.navigation.init(),e.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(t){var a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||e(t.target).is(r)||e(t.target).is(s)||(s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},F={update:function(){var t=this,a=t.rtl,i=t.params.pagination;if(i.el&&t.pagination.el&&t.pagination.$el&&0!==t.pagination.$el.length){var s,r=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,n=t.pagination.$el,o=t.params.loop?Math.ceil((r-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?((s=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup))>r-1-2*t.loopedSlides&&(s-=r-2*t.loopedSlides),s>o-1&&(s-=o),s<0&&"bullets"!==t.params.paginationType&&(s=o+s)):s=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===i.type&&t.pagination.bullets&&t.pagination.bullets.length>0){var l=t.pagination.bullets;if(i.dynamicBullets&&(t.pagination.bulletSize=l.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),n.css(t.isHorizontal()?"width":"height",5*t.pagination.bulletSize+"px")),l.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev"),n.length>1)l.each(function(t,a){var r=e(a);r.index()===s&&(r.addClass(i.bulletActiveClass),i.dynamicBullets&&(r.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),r.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")))});else{var d=l.eq(s);d.addClass(i.bulletActiveClass),i.dynamicBullets&&(d.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),d.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))}if(i.dynamicBullets){var p=Math.min(l.length,5),c=(t.pagination.bulletSize*p-t.pagination.bulletSize)/2-s*t.pagination.bulletSize,u=a?"right":"left";l.css(t.isHorizontal()?u:"top",c+"px")}}if("fraction"===i.type&&(n.find("."+i.currentClass).text(s+1),n.find("."+i.totalClass).text(o)),"progressbar"===i.type){var h=(s+1)/o,v=h,f=1;t.isHorizontal()||(f=h,v=1),n.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+v+") scaleY("+f+")").transition(t.params.speed)}"custom"===i.type&&i.renderCustom?(n.html(i.renderCustom(t,s+1,o)),t.emit("paginationRender",t,n[0])):t.emit("paginationUpdate",t,n[0])}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var t=this,a=t.params.pagination;if(a.el){var i=e(a.el);0!==i.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===t.$el.find(a.el).length&&(i=t.$el.find(a.el)),"bullets"===a.type&&a.clickable&&i.addClass(a.clickableClass),i.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&i.addClass(""+a.modifierClass+a.type+"-dynamic"),a.clickable&&i.on("click","."+a.bulletClass,function(a){a.preventDefault();var i=e(this).index()*t.params.slidesPerGroup;t.params.loop&&(i+=t.loopedSlides),t.slideTo(i)}),l.extend(t.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},j={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable"}},create:function(){var e=this;l.extend(e,{pagination:{init:F.init.bind(e),render:F.render.bind(e),update:F.update.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){var e=this;e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(){var e=this;e.params.loop?e.pagination.update():void 0===e.snapIndex&&e.pagination.update()},snapIndexChange:function(){var e=this;e.params.loop||e.pagination.update()},slidesLengthChange:function(){var e=this;e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(){var e=this;e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(t){var a=this;a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!e(t.target).hasClass(a.params.pagination.bulletClass)&&a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)}}},q={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtl,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,c=(r-s)*i;a&&e.isHorizontal()?(c=-c)>0?(d=s-c,c=0):-c+s>r&&(d=r+c):c<0?(d=s+c,c=0):c+s>r&&(d=r-c),e.isHorizontal()?(p.transforms3d?n.transform("translate3d("+c+"px, 0, 0)"):n.transform("translateX("+c+"px)"),n[0].style.width=d+"px"):(p.transforms3d?n.transform("translate3d(0px, "+c+"px, 0)"):n.transform("translateY("+c+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),l.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s})}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=i.$el,r=i.dragSize,n=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[a.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),a.rtl&&(t=1-t);var o=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(o),a.setTranslate(o),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=l.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideReset())},enableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.on(t.scrollbar.dragEvents.start,t.scrollbar.onDragStart),e(i).on(t.scrollbar.dragEvents.move,t.scrollbar.onDragMove),e(i).on(t.scrollbar.dragEvents.end,t.scrollbar.onDragEnd)}},disableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.off(t.scrollbar.dragEvents.start),e(i).off(t.scrollbar.dragEvents.move),e(i).off(t.scrollbar.dragEvents.end)}},init:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar,i=t.$el,s=t.touchEvents,r=t.params.scrollbar,n=e(r.el);t.params.uniqueNavElements&&"string"==typeof r.el&&n.length>1&&1===i.find(r.el).length&&(n=i.find(r.el));var o=n.find(".swiper-scrollbar-drag");0===o.length&&(o=e('<div class="swiper-scrollbar-drag"></div>'),n.append(o)),t.scrollbar.dragEvents=!1!==t.params.simulateTouch||p.touch?s:{start:"mousedown",move:"mousemove",end:"mouseup"},l.extend(a,{$el:n,el:n[0],$dragEl:o,dragEl:o[0]}),r.draggable&&a.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},K={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0}},create:function(){var e=this;l.extend(e,{scrollbar:{init:q.init.bind(e),destroy:q.destroy.bind(e),updateSize:q.updateSize.bind(e),setTranslate:q.setTranslate.bind(e),setTransition:q.setTransition.bind(e),enableDraggable:q.enableDraggable.bind(e),disableDraggable:q.disableDraggable.bind(e),setDragPosition:q.setDragPosition.bind(e),onDragStart:q.onDragStart.bind(e),onDragMove:q.onDragMove.bind(e),onDragEnd:q.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){var e=this;e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},U={setTransform:function(t,a){var i=this,s=i.rtl,r=e(t),n=s?-1:1,o=r.attr("data-swiper-parallax")||"0",l=r.attr("data-swiper-parallax-x"),d=r.attr("data-swiper-parallax-y"),p=r.attr("data-swiper-parallax-scale"),c=r.attr("data-swiper-parallax-opacity");if(l||d?(l=l||"0",d=d||"0"):i.isHorizontal()?(l=o,d="0"):(d=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*a*n+"%":l*a*n+"px",d=d.indexOf("%")>=0?parseInt(d,10)*a+"%":d*a+"px",void 0!==c&&null!==c){var u=c-(c-1)*(1-Math.abs(a));r[0].style.opacity=u}if(void 0===p||null===p)r.transform("translate3d("+l+", "+d+", 0px)");else{var h=p-(p-1)*(1-Math.abs(a));r.transform("translate3d("+l+", "+d+", 0px) scale("+h+")")}},setTranslate:function(){var t=this,a=t.$el,i=t.slides,s=t.progress,r=t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,s)}),i.each(function(a,i){var n=i.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(a/2)-s*(r.length-1)),n=Math.min(Math.max(n,-1),1),e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,n)})})},setTransition:function(t){void 0===t&&(t=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a,i){var s=e(i),r=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(r=0),s.transition(r)})}},_={name:"parallax",params:{parallax:{enabled:!1}},create:function(){var e=this;l.extend(e,{parallax:{setTransform:U.setTransform.bind(e),setTranslate:U.setTranslate.bind(e),setTransition:U.setTransition.bind(e)}})},on:{beforeInit:function(){this.params.watchSlidesProgress=!0},init:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTranslate:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTransition:function(e){var t=this;t.params.parallax&&t.parallax.setTransition(e)}}},Z={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(t){var a=this,i=a.params.zoom,s=a.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!p.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=Z.getDistanceBetweenTouches(t)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=e(this),0===r.$slideEl.length&&(r.$slideEl=a.slides.eq(a.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl.transition(0),a.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=Z.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(p.gestures?t.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<a.minRatio&&(i.scale=a.minRatio+1-Math.pow(a.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!x.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),a.minRatio),s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(x.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=l.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=l.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX),t.rtl&&(s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl.transform("translate3d(0,0,0)"),a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0,t.scale=1,t.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(t){var a=this,i=a.zoom,s=a.params.zoom,r=i.gesture,n=i.image;if(r.$slideEl||(r.$slideEl=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+s.containerClass)),r.$imageEl&&0!==r.$imageEl.length){r.$slideEl.addClass(""+s.zoomedSlideClass);var o,l,d,p,c,u,h,v,f,m,g,b,w,y,x,T;void 0===n.touchesStart.x&&t?(o="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,l="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(o=n.touchesStart.x,l=n.touchesStart.y),i.scale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,i.currentScale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,t?(x=r.$slideEl[0].offsetWidth,T=r.$slideEl[0].offsetHeight,d=r.$slideEl.offset().left+x/2-o,p=r.$slideEl.offset().top+T/2-l,h=r.$imageEl[0].offsetWidth,v=r.$imageEl[0].offsetHeight,f=h*i.scale,m=v*i.scale,w=-(g=Math.min(x/2-f/2,0)),y=-(b=Math.min(T/2-m/2,0)),c=d*i.scale,u=p*i.scale,c<g&&(c=g),c>w&&(c=w),u<b&&(u=b),u>y&&(u=y)):(c=0,u=0),r.$imageWrapEl.transition(300).transform("translate3d("+c+"px, "+u+"px,0)"),r.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")}},out:function(){var t=this,a=t.zoom,i=t.params.zoom,s=a.gesture;s.$slideEl||(s.$slideEl=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+i.containerClass)),s.$imageEl&&0!==s.$imageEl.length&&(a.scale=1,a.currentScale=1,s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),s.$slideEl.removeClass(""+i.zoomedSlideClass),s.$slideEl=void 0)},enable:function(){var t=this,a=t.zoom;if(!a.enabled){a.enabled=!0;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.on("gesturestart",a.onGestureStart,s),i.on("gesturechange",a.onGestureChange,s),i.on("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.on(t.touchEvents.start,a.onGestureStart,s),i.on(t.touchEvents.move,a.onGestureChange,s),i.on(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.on(t.touchEvents.move,a.onTouchMove)})}},disable:function(){var t=this,a=t.zoom;if(a.enabled){t.zoom.enabled=!1;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.off("gesturestart",a.onGestureStart,s),i.off("gesturechange",a.onGestureChange,s),i.off("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.off(t.touchEvents.start,a.onGestureStart,s),i.off(t.touchEvents.move,a.onGestureChange,s),i.off(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.off(t.touchEvents.move,a.onTouchMove)})}}},Q={name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a){t[a]=Z[a].bind(e)}),l.extend(e,{zoom:t})},on:{init:function(){var e=this;e.params.zoom.enabled&&e.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchStart(e)},touchEnd:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchEnd(e)},doubleTap:function(e){var t=this;t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)},transitionEnd:function(){var e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()}}},J={loadInSlide:function(t,a){void 0===a&&(a=!0);var i=this,s=i.params.lazy;if(void 0!==t&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):i.slides.eq(t),n=r.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!r.hasClass(s.elementClass)||r.hasClass(s.loadedClass)||r.hasClass(s.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(t,n){var o=e(n);o.addClass(s.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),p=o.attr("data-srcset"),c=o.attr("data-sizes");i.loadImage(o[0],d||l,p,c,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(p&&(o.attr("srcset",p),o.removeAttr("data-srcset")),c&&(o.attr("sizes",c),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(s.loadedClass).removeClass(s.loadingClass),r.find("."+s.preloaderClass).remove(),i.params.loop&&a){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var t=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(t.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){function t(e){if(l){if(s.children("."+r.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(n[e])return!0;return!1}function a(t){return l?e(t).attr("data-swiper-slide-index"):e(t).index()}var i=this,s=i.$wrapperEl,r=i.params,n=i.slides,o=i.activeIndex,l=i.virtual&&r.virtual.enabled,d=r.lazy,p=r.slidesPerView;if("auto"===p&&(p=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)s.children("."+r.slideVisibleClass).each(function(t,a){var s=l?e(a).attr("data-swiper-slide-index"):e(a).index();i.lazy.loadInSlide(s)});else if(p>1)for(var c=o;c<o+p;c+=1)t(c)&&i.lazy.loadInSlide(c);else i.lazy.loadInSlide(o);if(d.loadPrevNext)if(p>1||d.loadPrevNextAmount&&d.loadPrevNextAmount>1){for(var u=d.loadPrevNextAmount,h=p,v=Math.min(o+h+Math.max(u,h),n.length),f=Math.max(o-Math.max(h,u),0),m=o+p;m<v;m+=1)t(m)&&i.lazy.loadInSlide(m);for(var g=f;g<o;g+=1)t(g)&&i.lazy.loadInSlide(g)}else{var b=s.children("."+r.slideNextClass);b.length>0&&i.lazy.loadInSlide(a(b));var w=s.children("."+r.slidePrevClass);w.length>0&&i.lazy.loadInSlide(a(w))}}},ee={name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){var e=this;l.extend(e,{lazy:{initialImageLoaded:!1,load:J.load.bind(e),loadInSlide:J.loadInSlide.bind(e)}})},on:{beforeInit:function(){var e=this;e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(){var e=this;e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(){var e=this;e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){var e=this;e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()}}},te={LinearSpline:function(e,t){var a=function(){var e,t,a;return function(i,s){for(t=-1,e=i.length;e-t>1;)i[a=e+t>>1]<=s?t=a:e=a;return e}}();this.x=e,this.y=t,this.lastIndex=e.length-1;var i,s;return this.interpolate=function(e){return e?(s=a(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new te.LinearSpline(t.slidesGrid,e.slidesGrid):new te.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){function a(e){var t=e.rtl&&"horizontal"===e.params.direction?-r.translate:r.translate;"slide"===r.params.controller.by&&(r.controller.getInterpolateFunction(e),s=-r.controller.spline.interpolate(-t)),s&&"container"!==r.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(r.maxTranslate()-r.minTranslate()),s=(t-r.minTranslate())*i+e.minTranslate()),r.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,r),e.updateActiveIndex(),e.updateSlidesClasses()}var i,s,r=this,n=r.controller.control;if(Array.isArray(n))for(var o=0;o<n.length;o+=1)n[o]!==t&&n[o]instanceof $&&a(n[o]);else n instanceof $&&t!==n&&a(n)},setTransition:function(e,t){function a(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}var i,s=this,r=s.controller.control;if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof $&&a(r[i]);else r instanceof $&&t!==r&&a(r)}},ae={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;l.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:te.getInterpolateFunction.bind(e),setTranslate:te.setTranslate.bind(e),setTransition:te.setTransition.bind(e)}})},on:{update:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t){var a=this;a.controller.control&&a.controller.setTranslate(e,t)},setTransition:function(e,t){var a=this;a.controller.control&&a.controller.setTransition(e,t)}}},ie={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(t){var a=this,i=a.params.a11y;if(13===t.keyCode){var s=e(t.target);a.navigation&&a.navigation.$nextEl&&s.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?a.a11y.notify(i.lastSlideMessage):a.a11y.notify(i.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&s.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?a.a11y.notify(i.firstSlideMessage):a.a11y.notify(i.prevSlideMessage)),a.pagination&&s.is("."+a.params.pagination.bulletClass)&&s[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&a.length>0&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var t=this,a=t.params.a11y;t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length&&t.pagination.bullets.each(function(i,s){var r=e(s);t.a11y.makeElFocusable(r),t.a11y.addElRole(r,"button"),t.a11y.addElLabel(r,a.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e=this;e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();var t,a;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&t.off("keydown",e.a11y.onEnterKey),a&&a.off("keydown",e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)}},se={name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;l.extend(t,{a11y:{liveRegion:e('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ie).forEach(function(e){t.a11y[e]=ie[e].bind(t)})},on:{init:function(){var e=this;e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(){var e=this;e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(){var e=this;e.params.a11y.enabled&&e.a11y.destroy()}}},re={init:function(){var e=this;if(e.params.history){if(!s.history||!s.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=re.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||s.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=this;e.params.history.replaceState||s.removeEventListener("popstate",e.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=re.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(){var e=s.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){var a=this;if(a.history.initialized&&a.params.history.enabled){var i=a.slides.eq(t),r=re.slugify(i.attr("data-history"));s.location.pathname.includes(e)||(r=e+"/"+r);var n=s.history.state;n&&n.value===r||(a.params.history.replaceState?s.history.replaceState({value:r},null,r):s.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(re.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ne={name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;l.extend(e,{history:{init:re.init.bind(e),setHistory:re.setHistory.bind(e),setHistoryPopState:re.setHistoryPopState.bind(e),scrollToSlide:re.scrollToSlide.bind(e),destroy:re.destroy.bind(e)}})},on:{init:function(){var e=this;e.params.history.enabled&&e.history.init()},destroy:function(){var e=this;e.params.history.enabled&&e.history.destroy()},transitionEnd:function(){var e=this;e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},oe={onHashCange:function(){var e=this,t=d.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&s.history&&s.history.replaceState)s.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");d.location.hash=a||""}},init:function(){var t=this;if(!(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)){t.hashNavigation.initialized=!0;var a=d.location.hash.replace("#","");if(a)for(var i=0,r=t.slides.length;i<r;i+=1){var n=t.slides.eq(i);if((n.attr("data-hash")||n.attr("data-history"))===a&&!n.hasClass(t.params.slideDuplicateClass)){var o=n.index();t.slideTo(o,0,t.params.runCallbacksOnInit,!0)}}t.params.hashNavigation.watchState&&e(s).on("hashchange",t.hashNavigation.onHashCange)}},destroy:function(){var t=this;t.params.hashNavigation.watchState&&e(s).off("hashchange",t.hashNavigation.onHashCange)}},le={name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;l.extend(e,{hashNavigation:{initialized:!1,init:oe.init.bind(e),destroy:oe.destroy.bind(e),setHash:oe.setHash.bind(e),onHashCange:oe.onHashCange.bind(e)}})},on:{init:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(){var e=this;e.hashNavigation.initialized&&e.hashNavigation.setHash()}}},de={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=l.nextTick(function(){e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0===e?(t.autoplay.paused=!1,t.autoplay.run()):t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())})))}},pe={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,disableOnInteraction:!0,stopOnLastSlide:!1}},create:function(){var e=this;l.extend(e,{autoplay:{running:!1,paused:!1,run:de.run.bind(e),start:de.start.bind(e),stop:de.stop.bind(e),pause:de.pause.bind(e)}})},on:{init:function(){var e=this;e.params.autoplay.enabled&&e.autoplay.start()},beforeTransitionStart:function(e,t){var a=this;a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())},sliderFirstMove:function(){var e=this;e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},destroy:function(){var e=this;e.autoplay.running&&e.autoplay.stop()}}},ce={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd(function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}})}}},ue={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){var e=this;l.extend(e,{fadeEffect:{setTranslate:ce.setTranslate.bind(e),setTransition:ce.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e){var t=this;"fade"===t.params.effect&&t.fadeEffect.setTransition(e)}}},he={setTranslate:function(){var t,a=this,i=a.$el,s=a.$wrapperEl,r=a.slides,n=a.width,o=a.height,l=a.rtl,d=a.size,p=a.params.cubeEffect,c=a.isHorizontal(),u=a.virtual&&a.params.virtual.enabled,h=0;p.shadow&&(c?(0===(t=s.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),s.append(t)),t.css({height:n+"px"})):0===(t=i.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),i.append(t)));for(var v=0;v<r.length;v+=1){var f=r.eq(v),g=v;u&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);l&&(b=-b,w=Math.floor(-b/360));var y=Math.max(Math.min(f[0].progress,1),-1),x=0,T=0,E=0;g%4==0?(x=4*-w*d,E=0):(g-1)%4==0?(x=0,E=4*-w*d):(g-2)%4==0?(x=d+4*w*d,E=d):(g-3)%4==0&&(x=-d,E=3*d+4*d*w),l&&(x=-x),c||(T=x,x=0);var S="rotateX("+(c?0:-b)+"deg) rotateY("+(c?b:0)+"deg) translate3d("+x+"px, "+T+"px, "+E+"px)";if(y<=1&&y>-1&&(h=90*g+90*y,l&&(h=90*-g-90*y)),f.transform(S),p.slideShadows){var C=c?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=c?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=Math.max(-y,0)),M.length&&(M[0].style.opacity=Math.max(y,0))}}if(s.css({"-webkit-transform-origin":"50% 50% -"+d/2+"px","-moz-transform-origin":"50% 50% -"+d/2+"px","-ms-transform-origin":"50% 50% -"+d/2+"px","transform-origin":"50% 50% -"+d/2+"px"}),p.shadow)if(c)t.transform("translate3d(0px, "+(n/2+p.shadowOffset)+"px, "+-n/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,I=p.shadowOffset;t.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(o/2+I)+"px, "+-o/2/$+"px) rotateX(-90deg)")}var L=m.isSafari||m.isUiWebView?-d/2:0;s.transform("translate3d(0px,0,"+L+"px) rotateX("+(a.isHorizontal()?0:h)+"deg) rotateY("+(a.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ve={name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){var e=this;l.extend(e,{cubeEffect:{setTranslate:he.setTranslate.bind(e),setTransition:he.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e){var t=this;"cube"===t.params.effect&&t.cubeEffect.setTransition(e)}}},fe={setTranslate:function(){for(var t=this,a=t.slides,i=0;i<a.length;i+=1){var s=a.eq(i),r=s[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(t.isHorizontal()?t.rtl&&(n=-n):(d=l,l=0,o=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+a.length,t.params.flipEffect.slideShadows){var p=t.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=t.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}})}}},me={name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){var e=this;l.extend(e,{flipEffect:{setTranslate:fe.setTranslate.bind(e),setTransition:fe.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e){var t=this;"flip"===t.params.effect&&t.flipEffect.setTransition(e)}}},ge={setTranslate:function(){for(var t=this,a=t.width,i=t.height,s=t.slides,r=t.$wrapperEl,n=t.slidesSizesGrid,o=t.params.coverflowEffect,l=t.isHorizontal(),d=t.translate,p=l?a/2-d:i/2-d,c=l?o.rotate:-o.rotate,u=o.depth,h=0,v=s.length;h<v;h+=1){var f=s.eq(h),g=n[h],b=(p-f[0].swiperSlideOffset-g/2)/g*o.modifier,w=l?c*b:0,y=l?0:c*b,x=-u*Math.abs(b),T=l?0:o.stretch*b,E=l?o.stretch*b:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(x)<.001&&(x=0),Math.abs(w)<.001&&(w=0),Math.abs(y)<.001&&(y=0);var S="translate3d("+E+"px,"+T+"px,"+x+"px)  rotateX("+y+"deg) rotateY("+w+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(b)),o.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=b>0?b:0),M.length&&(M[0].style.opacity=-b>0?-b:0)}}m.ie&&(r[0].style.perspectiveOrigin=p+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){var e=this;l.extend(e,{coverflowEffect:{setTranslate:ge.setTranslate.bind(e),setTransition:ge.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){var e=this;"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e){var t=this;"coverflow"===t.params.effect&&t.coverflowEffect.setTransition(e)}}};return $.use([I,L,D,O,H,X,G,V,W,j,K,_,Q,ee,ae,se,ne,le,pe,ue,ve,me,be]),$});
//# sourceMappingURL=swiper.min.js.map
(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,g=b.theme;d.isString(g)&&(g=d.themes[g],b.theme=g);var f;switch(e){case"serial":f=new d.AmSerialChart(g);break;case"xy":f=new d.AmXYChart(g);break;case"pie":f=new d.AmPieChart(g);break;case"radar":f=new d.AmRadarChart(g);break;case"gauge":f=new d.AmAngularGauge(g);break;case"funnel":f=new d.AmFunnelChart(g);break;case"map":f=new d.AmMap(g);break;case"stock":f=new d.AmStockChart(g);break;case"gantt":f=new d.AmGanttChart(g)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var g,f,h,k;a+="";if(1>b)return a;g=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++g<a;k[g]+=h){h=k[g];for(k[g]="";h.length>b;k[g]+=d.trim(h.slice(0,f))+((h=h.slice(f)).length?c:""))f=2==e||(f=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,g,f,h,k){var l=d.text(a,b,c,e,g,f,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,g,f,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var h=e[f];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,g,f){var h=d.intervals,k=f.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,b,c,e,g,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,f.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[g].count>h[b].count)for(a=h[b].count;a<h[g].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,g){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=b.thousandsSeparator;void 0==f&&(f=",");void 0==b&&(b=" ");var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===g&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,g=a.x,f=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(g,h,b));e||(e=l(g,k,b));e||(e=l(f,h,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,g,f,h,k){if(b){void 0===g&&(g="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+g+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,g){var f=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),!g||l==c)){f=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=h+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var g in a.listeners)b=a.listeners[g],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);h<Math.abs(e)?(h=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var g=0;g<a[c].length;g++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][g],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.titleWidth=0;this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,g={};0<e.length()?g=e.getBBox():(g.x=0,g.y=0,g.width=this.width,g.height=this.height,d.VML&&(g.y+=this.y,g.x+=this.x));e.push(a);var e=g.x,f=g.y;d.VML&&(f-=this.y,e-=this.x);var h=g.width,g=g.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;switch(this.position){case"top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case"bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+g+10+n;break;case"left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;this.titleWidth=n+10;break;case"right":b=e+h+10+n,q&&(b+=7),c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,this.titleWidth=n+10,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())c.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).touchend(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,g=0;g<b.length;g++)b[g]==a&&(c=!0,e=g);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b);this.fire({type:"rollOverGuide",guide:a,chart:this.chart})},handleGuideOut:function(a){this.chart.hideBalloon();this.fire({type:"rollOutGuide",guide:a,chart:this.chart})},handleGuideClick:function(a){this.chart.hideBalloon();this.fire({type:"clickGuide",guide:a,chart:this.chart})},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseup(function(){c.handleGuideClick(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,g,f="",h=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(h.period,h.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,z=this.gridAlpha,x,u=this.choosePeriod(0),A=u.period,u=u.count,y=d.getPeriodDuration(A,u);y<k&&(A=h.period,u=h.count,y=k);h=A;"WW"==h&&(h="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/y)+5,D=l=d.resetDateToMin(new Date(this.startTime-y),A,u,t).getTime();if(h==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=y*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/y);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=y);q=this.firstTime;var C=0,I=0;a&&1<u&&(w=this.chooseMinorFrequency(u),x=d.getPeriodDuration(A,w),"DD"==A&&(x+=d.getPeriodDuration("hh")),"fff"==A&&(x=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){p=q+y*(a+Math.floor((D-q)/y))-C;"DD"==A&&(p+=36E5);p=d.resetDateToMin(new Date(p),A,u,t).getTime();"MM"==A&&(g=(p-l)/y,1.5<=(p-l)/y&&(p=p-(g-1)*y+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),A,1).getTime(),C+=y));g=(p-this.startTime)*this.stepWidth;if("radar"==b.type){if(g=this.axisWidth-
g,0>g||g>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(I=-y*this.stepWidth/2):"date"==this.type&&(g=this.axisWidth-g);f=!1;this.nextPeriod[h]&&(f=this.checkPeriodChange(this.nextPeriod[h],1,p,l,h));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[h]],this.twoLineMode&&(f=this.dateFormatsObject[h]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[h];r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,g,f,!1,n,I,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(w))for(g=1;g<u;g+=w)this.gridAlpha=this.minorGridAlpha,f=p+x*g,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);this.gridAlpha=z}},choosePeriod:function(a){var b=d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,e,g){c=new Date(c);var f=new Date(e),h=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,h).getTime();b=d.resetDateToMin(f,a,b,h).getTime();return"DD"==a&&"hh"!=g&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case"bottom":b=this.height+d;break;case"top":b=-d;break;case"left":a=-d;break;case"right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;if(isNaN(a)){this.hideBalloon();return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e)}},adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,h=this.inside,k=this.width,l=this.height;switch(this.position){case"bottom":c=0;e=k;h?(d=0,f=l):(d=l,f=l+1E3);break;case"top":c=0;e=k;h?(d=0,f=l):(d=-1E3,f=0);break;case"left":d=0;f=l;h?(c=0,e=k):(c=-1E3,e=0);break;case"right":d=0,f=l,h?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};this.scrollbar=!1;this.baseValue=0;this.radarCategoriesEnabled=!0;this.axisFrequency=1;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();if(this.synchronizationMultiplier&&this.synchronizeWith)d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0);else if(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&isNaN(this.maxZoom)||isNaN(this.fullMin)&&isNaN(this.fullMax))this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&this.strictMinMax&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR),this.strictMinMax&&(this.minimumDate&&(this.fullMin=this.minimumDate.getTime()),this.maximumDate&&(this.fullMax=this.maximumDate.getTime())))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;d.setCN(a,this.set,"value-axis value-axis-"+this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,g=this.getExtremes(0,this.data.length-1).min;!isNaN(this.minimum)&&this.minimum<g&&(g=this.minimum);this.logMin=g;this.minReal<g&&(this.minReal=g);isNaN(this.minReal)&&(this.minReal=g);0<e&&0===g&&(this.minReal=g=e);if(0>=g||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,h,k=a.dx,l=a.dy,e=!1,g=this.logarithmic;if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration());var m=this.labelFrequency,n=this.showFirstLabel,q=this.showLastLabel,p=1,t=0;this.minCalc=this.min;this.maxCalc=this.max;if(this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),this.min==this.max))return;isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){h=this.fullMin;var r=this.fullMax;isNaN(this.minimum)||(h=this.minimum);isNaN(this.maximum)||(r=this.maximum);var r=Math.log(r)*Math.LOG10E-Math.log(h)*Math.LOG10E,w=Math.log(this.max)/Math.LN10-Math.log(h)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(this.minReal)/Math.LN10-Math.log(h)*Math.LOG10E)/r,5);this.relativeEnd=d.roundTo(w/r,5)}else this.relativeStart=d.roundTo(d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),
0,1),5),this.relativeEnd=d.roundTo(d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1),5);var r=Math.round((this.maxCalc-this.minCalc)/this.step)+1,z;!0===g?(z=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/z,z>this.logGridLimit&&(r=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,t=Math.round(Math.log(this.minReal)*Math.LOG10E),r>this.gridCountR&&(p=Math.ceil(r/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var x=
0;1>this.step&&-1<this.step&&(x=d.getDecimals(this.step));this.integersOnly&&(x=0);x>this.maxDecCount&&(x=this.maxDecCount);w=this.precision;isNaN(w)||(x=w);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));h={};h.precision=x;h.decimalSeparator=a.nf.decimalSeparator;h.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=h;var u;this.exponential=!1;for(h=t;h<r;h+=p){var A=d.roundTo(this.step*h+this.min,x);-1!=String(A).indexOf("e")&&(this.exponential=!0)}this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var x=this.step,y,A=this.minorGridAlpha;this.minorGridEnabled&&(y=this.getMinorGridStep(x,this.stepWidth*x));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(r>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),c=this.minCalc,g&&(r++,c=this.maxCalc-r*x),this.gridCountReal=r,h=this.startCount=t;h<r;h+=p)if(t=x*h+c,t=d.roundTo(t,this.maxDecCount+1),!this.integersOnly||Math.round(t)==t)if(isNaN(w)||Number(d.toFixed(t,w))==t){if(!0===g)if(z>this.logGridLimit){if(t=Math.pow(10,h),t>this.max)continue}else if(0>=t&&(t=c+x*h+x/2,0>=t))continue;u=this.formatValue(t,!1,h);Math.round(h/m)!=h/m&&(u=void 0);if(0===h&&!n||h==r-1&&!q)u=" ";f=this.getCoordinate(t);var B;this.rotate&&this.autoWrap&&(B=this.stepWidth*x-10);u=new this.axisItemRenderer(this,f,u,void 0,B,void 0,void 0,this.boldLabels);this.pushAxisItem(u);if(t==this.baseValue&&"radar"!=a.type){var D,C,I=this.width,H=this.height;"H"==this.orientation?0<=f&&f<=I+1&&(D=[f,f,f+k],C=[H,0,l]):0<=f&&f<=H+1&&(D=[0,I,I+k],C=[f,f,f+l]);D&&(f=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(f=this.zeroGridAlpha),f=d.line(a.container,D,C,this.gridColor,f,1,this.dashLength),f.translate(this.x,this.y),this.grid0=f,a.axesSet.push(f),f.toBack(),d.setCN(a,f,this.bcn+"zero-grid-"+this.id),d.setCN(a,f,this.bcn+"zero-grid"))}if(!isNaN(y)&&0<A&&h<r-1){f=x/y;g&&(y=x*(h+p)+this.minCalc,y=d.roundTo(y,this.maxDecCount+1),z>this.logGridLimit&&(y=Math.pow(10,h+p)),f=9,y=(y-t)/f);I=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(H=1;H<f;H++){var Q=this.getCoordinate(t+y*H),Q=new this.axisItemRenderer(this,Q,"",!1,0,0,!1,!1,0,!0);this.pushAxisItem(Q)}this.gridAlpha=I}}z=this.guides;B=z.length;if(0<B){D=this.fillAlpha;for(h=this.fillAlpha=
0;h<B;h++)C=z[h],k=NaN,y=C.above,isNaN(C.toValue)||(k=this.getCoordinate(C.toValue),u=new this.axisItemRenderer(this,k,"",!0,NaN,NaN,C),this.pushAxisItem(u,y)),l=NaN,isNaN(C.value)||(l=this.getCoordinate(C.value),u=new this.axisItemRenderer(this,l,C.label,!0,NaN,(k-l)/2,C),this.pushAxisItem(u,y)),isNaN(k)&&(l-=3,k=l+3),u&&(m=u.label)&&this.addEventListeners(m,C),isNaN(k-l)||0>l&&0>k||(k=new this.guideFillRenderer(this,l,k,C),this.pushAxisItem(k,y),y=k.graphics(),C.graphics=y,this.addEventListeners(y,
C));this.fillAlpha=D}u=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(u=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(u=this.max);g&&u<this.minReal&&(u=this.minReal);this.baseCoord=this.getCoordinate(u,!0);u={type:"axisChanged",target:this,chart:a};u.min=g?this.minReal:this.min;u.max=this.max;this.fire(u);this.axisCreated=!0}g=this.axisLine.set;u=this.labelsSet;b.translate(this.x,this.y);u.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&g.toFront();!this.visible||e?(b.hide(),g.hide(),u.hide()):(b.show(),g.show(),u.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,c){var e=this.exponential,g=this.logarithmic,f=this.numberFormatter,h=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),b||isNaN(this.precision)||(c=d.roundTo(c,this.precision)),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(g&&(e=String(a).split("."),e[1]?(f.precision=e[1].length,0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0),b||isNaN(this.precision)||(f.precision=this.precision)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,h.prefixesOfBigNumbers,h.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,h)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],h=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-h)))if(1>a){if(h=Math.pow(10,-h)*f,h==Math.round(h))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],g=[],f=[],h,k=this.chart.graphs,l,m,n,q,p,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)n=k[q],n.stackGraph=null,n.hidden||(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(l&&(n.stackGraph=l),l=n));n=this.start-10;l=this.end+10;q=this.data.length-1;n=d.fitToBounds(n,0,q);l=d.fitToBounds(l,0,q);for(p=n;p<=l;p++){var w=0;for(q=0;q<k.length;q++)if(n=k[q],n.hidden)n.newStack&&(g[p]=NaN,e[p]=NaN);else if(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable)if(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h))n.newStack&&(g[p]=NaN,e[p]=NaN);else{var z=d.getDecimals(h);w<z&&(w=z);isNaN(f[p])?f[p]=Math.abs(h):f[p]+=Math.abs(h);f[p]=d.roundTo(f[p],w);z=n.fillToGraph;r&&z&&(z=this.data[p].axes[this.id].graphs[z.id])&&(m.values.open=z.values.value);"regular"==b&&(r&&(isNaN(c[p])?(c[p]=h,m.values.close=h,m.values.open=this.baseValue):(isNaN(h)?m.values.close=c[p]:m.values.close=h+c[p],m.values.open=c[p],c[p]=m.values.close)),"column"==a&&(n.newStack&&(g[p]=NaN,e[p]=NaN),m.values.close=h,0>h?(m.values.close=h,isNaN(e[p])?m.values.open=t:(m.values.close+=e[p],m.values.open=e[p]),e[p]=m.values.close):(m.values.close=h,isNaN(g[p])?m.values.open=t:(m.values.close+=g[p],m.values.open=g[p]),g[p]=m.values.close)))}}for(p=this.start;p<=this.end;p++)for(q=0;q<k.length;q++)(n=k[q],n.hidden)?n.newStack&&(g[p]=NaN,e[p]=NaN):(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h)||(c=h/f[p]*100,m.values.percents=c,m.values.total=f[p],n.newStack&&(g[p]=NaN,e[p]=NaN),"100%"==b&&(isNaN(e[p])&&(e[p]=0),isNaN(g[p])&&(g[p]=0),0>c?(m.values.close=d.fitToBounds(c+e[p],-100,100),m.values.open=e[p],e[p]=m.values.close):(m.values.close=d.fitToBounds(c+g[p],-100,100),m.values.open=g[p],g[p]=m.values.close)))))},recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var g="value";if("candlestick"==e.type||"ohlc"==e.type)g="open";var f,h,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;h=this.start;e.compareFromStart&&(h=0);if(!isNaN(a.startTime)&&(m=a.categoryAxis)){var n=m.minDuration(),n=new Date(a.startTime+n/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(n),m.minPeriod).getTime()>q&&h++}if(m=a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),h=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=h;m<=k&&(h=this.data[m].axes[this.id].graphs[e.id],f=h.values[g],e.recalculateValue&&(f=h.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);this.recBaseValue=f;for(g=l;g<=k;g++){h=this.data[g].axes[this.id].graphs[e.id];h.percents={};var l=h.values,p;for(p in l)h.percents[p]="percents"!=p?l[p]/f*100-100:l[p]}}}},getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var g=c[e].type;("line"==g||"step"==g||"smoothedLine"==g)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=this.min;this.maxRR=this.max;a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minZoom)||(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/
e)*e+e);isNaN(this.minimum)&&(this.min=Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/
(c*e))*c*e;isNaN(this.setStep)||(this.step=this.setStep);1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.maxReal=this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,
Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,h;for(h in f)if(f.hasOwnProperty(h)){var k=this.chart.graphsById[h];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[h].values;this.recalculateToPercents&&(k=f[h].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&
(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&"percents"!=m&&"total"!=m&&"error"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(a){this.maxZoom=this.minZoom=NaN;this.zoomToRelativeValues(0,1,a)},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,h=e+(d-e)*b;0<=this.minimum&&0>f&&(f=0);this.logarithmic&&(isNaN(this.minimum)||(e=this.minimum),isNaN(this.maximum)||(d=this.maximum),d=Math.log(d)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,d*a+Math.log(e)*Math.LOG10E),h=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,h,c)},zoomToValues:function(a,b,c){if(b<a){var e=b;b=a;a=e}var g=this.fullMax,e=this.fullMin;this.relativeStart=d.roundTo((a-e)/(g-e),9);this.relativeEnd=d.roundTo((b-e)/(g-e),9);if(this.logarithmic){isNaN(this.minimum)||(e=this.minimum);isNaN(this.maximum)||(g=this.maximum);var g=Math.log(g)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-
Math.log(e)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(a)/Math.LN10-Math.log(e)*Math.LOG10E)/g,9);this.relativeEnd=d.roundTo(f/g,9)}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=a,this.maxZoom=b,e={type:"axisZoomed"},e.chart=this.chart,e.valueAxis=this,e.startValue=a,e.endValue=b,e.relativeStart=this.relativeStart,e.relativeEnd=this.relativeEnd,this.prevStartValue==a&&this.prevEndValue==b||this.fire(e),this.prevStartValue=a,this.prevEndValue=b,c||(a={},d.copyProperties(e,a),a.type=
"axisIntZoomed",this.fire(a)),0===this.relativeStart&&1==this.relativeEnd&&(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,h=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/c:a/c:!0===e?a/c:(b-a)/c)+Math.log(h)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,
f=this.stepWidth,h=this.min,k=this.minReal;!0===this.logarithmic?(0===a&&(a=this.treatZeroAs),h=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*h:f*h:!0===e?f*h:d-f*h):c=!0===e?c?d-f*(a-h):f*(a-h):c?f*(a-h):d-f*(a-h);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,g=a.axisAlpha,f=a.offset,h=a.dx,k=a.dy,l=a.x,m=a.y,n=a.height,q=a.width,p=b.container;"H"==a.orientation?(e=d.line(p,[0,q],[0,0],e,g,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+n+m-1,c=l):(k=-c/2-f+m+k,c=h+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(p,[0,0,-h],[0,n,n-k],e,g,c),k=m+k,c=c/2+f+h+q+l-1):(e=d.line(p,[0,0],[0,n],e,g,c),k=m,c=-c/2-f+l));e.translate(c,k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n,q){b=Math.round(b);var p=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=p.fontFamily,r=a.fontSize;void 0==r&&(r=p.fontSize);var w=a.color;void 0==w&&(w=p.color);void 0!==n&&(w=n);var z=a.chart.container,x=z.set();this.set=x;var u=a.axisThickness,A=a.axisColor,y=a.axisAlpha,B=a.tickLength,D=a.gridAlpha,C=a.gridThickness,I=a.gridColor,H=a.dashLength,Q=a.fillColor,M=a.fillAlpha,P=a.labelsEnabled;n=a.labelRotationR;var ia=a.counter,J=a.inside,aa=a.labelOffset,ma=a.dx,na=a.dy,Pa=a.orientation,Z=a.position,da=a.previousCoord,X=a.height,xa=a.width,ea=a.offset,fa,Ba;h?(void 0!==h.id&&(q=p.classNamePrefix+"-guide-"+h.id),P=!0,isNaN(h.tickLength)||(B=h.tickLength),void 0!=h.lineColor&&(I=h.lineColor),void 0!=h.color&&(w=h.color),isNaN(h.lineAlpha)||(D=h.lineAlpha),isNaN(h.dashLength)||(H=h.dashLength),isNaN(h.lineThickness)||(C=h.lineThickness),!0===h.inside&&(J=!0,0<ea&&(ea=0)),isNaN(h.labelRotation)||(n=h.labelRotation),isNaN(h.fontSize)||(r=h.fontSize),h.position&&(Z=h.position),void 0!==h.boldLabel&&(k=h.boldLabel),isNaN(h.labelOffset)||(aa=h.labelOffset)):""===c&&(B=0);m&&!isNaN(a.minorTickLength)&&(B=a.minorTickLength);var ga="start";0<g&&(ga="middle");a.centerLabels&&(ga="middle");var V=n*Math.PI/180,Y,Da,G=0,v=0,oa=0,ha=Y=0,Qa=0;"V"==Pa&&(n=0);var ca;P&&""!==c&&(ca=a.autoWrap&&0===n?d.wrappedText(z,c,w,t,r,ga,k,Math.abs(g),0):d.text(z,c,w,t,r,ga,k),ga=ca.getBBox(),ha=ga.width,Qa=ga.height);if("H"==Pa){if(0<=b&&b<=xa+1&&(0<B&&0<y&&b+l<=xa+1&&(fa=d.line(z,[b+l,b+l],[0,B],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[b,b+ma,b+ma],[X,X+na,na],I,D,C,H),x.push(Ba))),v=0,G=b,h&&90==n&&J&&(G-=r),!1===e?(ga="start",v="bottom"==Z?J?v+B:v-B:J?v-B:v+B,G+=3,0<g&&(G+=g/2-3,ga="middle"),0<n&&(ga="middle")):ga="middle",1==ia&&0<M&&!h&&!m&&da<xa&&(e=d.fitToBounds(b,0,xa),da=d.fitToBounds(da,0,xa),Y=e-da,0<Y&&(Da=d.rect(z,Y,a.height,Q,M),Da.translate(e-Y+ma,na),x.push(Da))),"bottom"==Z?(v+=X+r/2+ea,J?(0<n?(v=X-ha/2*Math.sin(V)-B-3,a.centerRotatedLabels||(G+=ha/2*Math.cos(V)-4+2)):0>n?(v=X+ha*Math.sin(V)-B-3+2,G+=-ha*Math.cos(V)-Qa*Math.sin(V)-4):v-=B+r+3+3,v-=aa):(0<n?(v=X+ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):0>n?(v=X+B+3-ha/2*Math.sin(V)+2,G+=ha/2*Math.cos(V)):v+=B+u+3+3,v+=aa)):(v+=na+r/2-ea,G+=ma,J?(0<n?(v=ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):v+=B+3,v+=aa):(0<n?(v=-(ha/2)*Math.sin(V)-B-6,a.centerRotatedLabels||(G+=ha/2*Math.cos(V))):v-=B+
r+3+u+3,v-=aa)),"bottom"==Z?Y=(J?X-B-1:X+u-1)+ea:(oa=ma,Y=(J?na:na-B-u+1)-ea),f&&(G+=f),r=G,0<n&&(r+=ha/2*Math.cos(V)),ca&&(f=0,J&&(f=ha/2*Math.cos(V)),r+f>xa+2||0>r))ca.remove(),ca=null}else{0<=b&&b<=X+1&&(0<B&&0<y&&b+l<=X+1&&(fa=d.line(z,[0,B+1],[b+l,b+l],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[0,ma,xa+ma],[b,b+na,b+na],I,D,C,H),x.push(Ba)));ga="end";if(!0===J&&"left"==Z||!1===J&&"right"==Z)ga="start";v=b-Qa/2+2;1==ia&&0<M&&!h&&!m&&(e=d.fitToBounds(b,0,X),da=d.fitToBounds(da,0,X),V=e-da,Da=d.polygon(z,[0,a.width,a.width,0],[0,0,V,V],Q,M),Da.translate(ma,e-V+na),x.push(Da));v+=r/2;"right"==Z?(G+=ma+xa+ea,v+=na,J?(f||(v-=r/2+3),G=G-(B+4)-aa):(G+=B+4+u,v-=2,G+=aa)):J?(G+=B+4-ea,f||(v-=r/2+3),h&&(G+=ma,v+=na),G+=aa):(G+=-B-u-4-2-ea,v-=2,G-=aa);fa&&("right"==Z?(oa+=ma+ea+xa-1,Y+=na,oa=J?oa-u:oa+u):(oa-=ea,J||(oa-=B+u)));f&&(v+=f);J=-3;"right"==Z&&(J+=na);ca&&(v>X+1||v<J-r/10)&&(ca.remove(),ca=null)}fa&&(fa.translate(oa,Y),d.setCN(p,fa,a.bcn+"tick"),d.setCN(p,fa,q,!0),h&&d.setCN(p,fa,"guide"));!1===a.visible&&(fa&&fa.remove(),ca&&(ca.remove(),ca=null));ca&&(ca.attr({"text-anchor":ga}),ca.translate(G,v,NaN,!0),0!==n&&ca.rotate(-n,a.chart.backgroundColor),a.allLabels.push(ca),this.label=ca,d.setCN(p,ca,a.bcn+"label"),d.setCN(p,ca,q,!0),h&&d.setCN(p,ca,"guide"));Ba&&(d.setCN(p,Ba,a.bcn+"grid"),d.setCN(p,Ba,q,!0),h&&d.setCN(p,Ba,"guide"));Da&&(d.setCN(p,Da,a.bcn+"fill"),d.setCN(p,Da,q,!0));m?Ba&&d.setCN(p,Ba,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var g=a.dx,f=a.dy,h=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,n=e.fillColor;"V"==h?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof n&&(n=n.join(",").split(",").reverse());"V"==h?(h=d.rect(l,a.width,c,n,m),h.translate(g,b-k+f)):(h=d.rect(l,c,a.height,n,m),h.translate(b-k+g,f));d.setCN(a.chart,h,"guide-fill");e.id&&d.setCN(a.chart,h,"guide-fill-"+e.id);this.set=l.set([h])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.12";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==c||(c=.001);var g=this.updateWidth();this.realWidth=g;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,g-1,g-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,g,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var g=b[e],g=d.processObject(g,d.Title,this.theme);if(!1!==g.enabled){var f=g.color;void 0===f&&(f=this.color);var h=g.size;isNaN(h)&&(h=this.fontSize+2);isNaN(g.alpha);var k=this.marginLeft,l=!0;void 0!==g.bold&&(l=g.bold);f=d.wrappedText(this.container,g.text,f,this.fontFamily,h,"middle",l,this.realWidth-35-this.marginRight-k);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";g.sprite=f;void 0!==g.tabIndex&&f.setAttr("tabindex",g.tabIndex);d.setCN(this,f,"title");g.id&&d.setCN(this,f,"title-"+g.id);f.attr({opacity:g.alpha});c+=f.getBBox().height+
5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,g=c.style,f=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var h,k=document.createElement("div");h=k.style;h.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(g.left=null,g.top=null,g.right=null,f.left=null,f.right=null,f.top=null,g.position="relative",f.position="relative",h.width="100%",h.height="100%",e.position){case"bottom":k.appendChild(a);k.appendChild(c);break;case"top":k.appendChild(c);k.appendChild(a);break;case"absolute":g.position="absolute";f.position="absolute";void 0!==e.left&&(g.left=e.left+"px");void 0!==e.right&&(g.right=e.right+"px");void 0!==e.top&&(g.top=e.top+"px");void 0!==e.bottom&&(g.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case"right":g.position="relative";f.position="absolute";k.appendChild(a);k.appendChild(c);break;case"left":g.position="absolute";f.position="relative";k.appendChild(a);k.appendChild(c);break;case"outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,g=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,g&&g.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,g=a.align,f=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(f)&&(f=b.fontSize);g||(g="start");"left"==g&&(g="start");"right"==g&&(g="end");"center"==g&&(g="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,e,h,b.fontFamily,f,g,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:h,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();a.positionCred();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,g,f,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:g,effect:f,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,g=b.obj,f=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),g.node.style[f]=Number(b.to)+b.suffix):g.node.style[f]=c+b.suffix}else g.node.style[f]=Number(b.to)+b.suffix,g.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);if(c!=a||!0===this.inIframe()){c=a="http://www."+a;var b="JavaScript charts",e="JS chart by amCharts";"ammap"==this.product&&(c=a+"/javascript-maps/",b="Interactive JavaScript maps",e="JS map by amCharts");a=document.createElement("a");e=document.createTextNode(e);a.setAttribute("href",c);a.setAttribute("title",b);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(e);this.chartDiv.appendChild(a);this.amLink=a;a=a.style;a.position="absolute";a.textDecoration="none";a.color=this.color;a.fontFamily=this.fontFamily;a.fontSize="11px";a.opacity=.7;a.display="block";this.positionCred()}}},positionCred:function(){var a=this.amLink;if(a){var b=this.creditsPosition,c=a.style,e=a.offsetWidth,a=a.offsetHeight,d=0,f=0,h=this.realWidth,k=this.realHeight,l=this.type;if("serial"==l||"xy"==l||"gantt"==l)d=this.marginLeftReal,f=this.marginTopReal,h=d+this.plotAreaWidth,k=f+this.plotAreaHeight;var l=5+d,m=f+5;"bottom-left"==b&&(l=5+d,m=k-a-3);"bottom-right"==b&&(l=h-e-5,m=k-a-3);"top-right"==b&&(l=h-e-5,m=f+5);c.left=l+"px";c.top=m+"px"}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.accessibleLabel="[[title]] [[category]] [[value]]";this.accessibleSkipText="Press enter to skip [[title]]";this.y=this.x=0;this.switchable=!0;this.minDistance=.8;this.tcc=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart;a.isRolledOverBullet=!1;var b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var g=c.set();this.bulletSet=g;g.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(g)):(a.graphsSet.push(e),a.bulletSet.push(g));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));c=c.set();d.remove(this.columnsSet);this.columnsSet=c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,g,"graph-"+this.type);d.setCN(a,g,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];g=this.labelPosition;g||(f=this.valueAxis.stackType,g="top","column"==this.type&&(a.rotate&&(g="right"),"100%"==f||"regular"==f)&&(g="middle"),this.labelPosition=g);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(c){case"serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case"radar":a.createRadarGraph();break;case"xy":a.createXYGraph()}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,e=this.yAxis;this.pmh=e.height;this.pmw=c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],h=f.values,k=h.x,l=h.y,h=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(h),b.push(m),f.x=h,f.y=m,k=this.createBullet(f,h,m,d),l=this.labelText)){var l=this.createLabel(f,l),n=0;k&&(n=k.size);this.positionLabel(f,h,m,l,n)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=this.valueAxis.stackType,b=[],c=[],e=[],d=[],f,h,k,l,m;for(m=this.start;m<=this.end;m++){var n=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,p;"none"==a||"3d"==a?q=n.values.value:(q=n.values.close,p=n.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+1));q=t*Math.sin(r/180*Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(p)){var w=this.valueAxis.getCoordinate(p,this.noRounding)-this.height,w=w*this.valueAxis.rMultiplier,z=w*Math.sin(r/180*Math.PI),r=w*Math.cos(r/180*Math.PI);e.push(z);d.push(r);isNaN(k)&&(k=z);isNaN(l)&&(l=r)}r=this.createBullet(n,q,t,m);n.x=q;n.y=t;if(z=this.labelText)z=this.createLabel(n,z),w=0,r&&(w=r.size),this.positionLabel(n,q,t,z,w);isNaN(f)&&(f=q);isNaN(h)&&(h=t)}}b.push(f);c.push(h);isNaN(k)||(e.push(k),d.push(l));this.drawLineGraph(b,c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,h=this.valueAxis,k="middle",l=!1,m=this.labelPosition,n=e.getBBox(),q=this.chart.rotate,p=a.isNegative,t=this.fontSize;void 0===t&&(t=this.chart.fontSize);c-=n.height/2-t/2-1;void 0!==a.labelIsNegative&&(p=a.labelIsNegative);switch(m){case"right":m=q?p?"left":"right":"right";break;case"top":m=q?"top":p?"bottom":"top";break;case"bottom":m=q?"bottom":p?"top":"bottom";break;case"left":m=q?p?"right":"left":"left"}var t=a.columnGraphics,r=0,w=0;t&&(r=t.x,w=t.y);var z=this.labelOffset;switch(m){case"right":k="start";b+=d/2+z;break;case"top":c=h.reversed?c+(d/2+n.height/2+z):c-(d/2+n.height/2+z);break;case"bottom":c=h.reversed?c-(d/2+n.height/2+z):c+(d/2+n.height/2+z);break;case"left":k="end";b-=d/2+z;break;case"inside":"column"==this.type&&(l=!0,q?p?(k="end",b=r-3-
z):(k="start",b=r+3+z):c=p?w+7+z:w-10-z);break;case"middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+z-3:c-=(c-w)/2+z-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(n=e.getBBox(),n.height>a.columnHeight||n.width>a.columnWidth)&&(e.remove(),e=null);if(e&&"radar"!=f.type)if(q){if(0>c||c>this.height)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>b||b>this.width)&&(e.remove(),
e=null)}else{if(0>b||b>this.width)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>c||c>this.height)&&(e.remove(),e=null)}e&&this.allBullets.push(e);return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,g=this.chart.container,f=this.valueAxis,h=this.type,k=this.columnWidthReal,l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,n=this.width,q=this.height,p=this.y,t=this.rotate,r=this.columnCount,w=d.toCoordinate(this.cornerRadiusTop,k/2),z=this.connect,x=[],u=[],A,y,B,D,C=this.chart.graphs.length,I,H=this.dx/this.tcc,Q=this.dy/this.tcc,M=f.stackType,P=this.start,ia=this.end,J=this.scrollbar,aa="graph-column-";J&&(aa="scrollbar-graph-column-");var ma=this.categoryAxis,na=this.baseCoord,Pa=this.negativeBase,Z=this.columnIndex,da=this.lineThickness,X=this.lineAlpha,xa=this.lineColorR,ea=this.dashLength,fa=this.set,Ba,ga=this.getGradRotation(),V=this.chart.columnSpacing,Y=ma.cellWidth,Da=(Y*k-r)/r;V>Da&&(V=Da);var G,v,oa,ha=q,Qa=n,ca=0,tb=0,ub=0,vb=0,lb=0,mb=0,wb=this.fillColorsR,Ra=this.negativeFillColors,Ja=this.negativeLineColor,bb=this.fillAlphas,cb=this.negativeFillAlphas;"object"==typeof bb&&(bb=bb[0]);"object"==typeof cb&&(cb=cb[0]);var xb=this.noRounding;"step"==h&&(xb=!1);var nb=f.getCoordinate(f.min);
f.logarithmic&&(nb=f.getCoordinate(f.minReal));this.minCoord=nb;this.resetBullet&&(this.bullet="none");if(!(J||"line"!=h&&"smoothedLine"!=h&&"step"!=h||(1==e.length&&"step"!=h&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Ra&&void 0==Ja||m))){var Ua=Pa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua)+.5,Mb=f.getCoordinate(f.max);t?(ha=q,Qa=Math.abs(Mb-Ka),ub=q,vb=Math.abs(nb-Ka),mb=tb=0,f.reversed?(ca=0,lb=Ka):(ca=Ka,lb=0)):(Qa=n,ha=Math.abs(Mb-Ka),vb=n,ub=Math.abs(nb-Ka),lb=ca=0,f.reversed?(mb=p,tb=Ka):mb=Ka)}var La=Math.round;this.pmx=La(ca);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Qa);this.nmx=La(lb);this.nmy=La(mb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==h?(Y*k-V*(r-1))/r:Y*k;1>k&&(k=1);var Nb=this.fixedColumnWidth;isNaN(Nb)||(k=Nb);var L;if("line"==h||"step"==h||"smoothedLine"==h){if(0<P){for(L=P-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],
oa=v.values.value,!isNaN(oa)){P=L;break}if(this.lineColorField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.lineColorSwitched=v.lineColor;void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched);break}if(this.fillColorsField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){ia=L;break}}ia<e.length-1&&ia++;var T=[],U=[],Ma=!1;if("line"==h||"step"==h||"smoothedLine"==h)if(this.stackable&&"regular"==M||"100%"==M||this.fillToGraph)Ma=!0;var Ob=this.noStepRisers,db=-1E3,eb=-1E3,ob=this.minDistance,Sa=!0,Va=!1;for(L=P;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var fb,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||!(fb=e[L+1].axes[f.id].graphs[b])||!fb.values||(Ta=fb.values.value,isNaN(Ta)));yb++);var S,R,K,ba,ja=NaN,E=NaN,F=NaN,O=NaN,N=NaN,qa=NaN,ra=NaN,sa=NaN,ta=NaN,ya=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ua=NaN,va=void 0,Na=wb,Wa=bb,Ha=xa,Ca,za,Bb=this.proCandlesticks,pb=this.topRadius,Fa=q-1,pa=n-1,gb=this.pattern;void 0!=v.pattern&&(gb=v.pattern);isNaN(v.alpha)||(Wa=v.alpha);isNaN(v.dashLength)||(ea=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);"none"==M&&(Z=isNaN(v.columnIndex)?this.columnIndex:v.columnIndex);if(Ia){W=this.stackable&&"none"!=M&&"3d"!=M?Ia.close:Ia.value;if("candlestick"==h||"ohlc"==h)W=Ia.close,Ab=Ia.low,ra=f.getCoordinate(Ab),zb=Ia.high,ta=f.getCoordinate(zb);ua=Ia.open;F=f.getCoordinate(W,xb);isNaN(ua)||(N=f.getCoordinate(ua,xb),m&&"regular"!=M&&"100%"!=M&&(Ta=ua,ua=N=NaN));m&&(void 0==this.openField?fb&&(fb.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!J)switch(this.showBalloonAt){case"close":v.y=F;break;case"open":v.y=N;break;case"high":v.y=ta;break;case"low":v.y=ra}var ja=G.x[ma.id],Xa=this.periodSpan-1;"step"!=h||isNaN(G.cellWidth)||(Y=G.cellWidth);var wa=Math.floor(Y/2)+Math.floor(Xa*Y/2),Ga=wa,qb=0;"left"==this.stepDirection&&(qb=(2*Y+Xa*Y)/2,ja-=qb);"center"==this.stepDirection&&(qb=Y/2,ja-=qb);"start"==this.pointPosition&&(ja-=Y/2+Math.floor(Xa*Y/2),wa=0,Ga=Math.floor(Y)+Math.floor(Xa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Xa*Y/2),wa=Math.floor(Y)+Math.floor(Xa*Y),Ga=0);if(Ob){var Cb=this.columnWidth;
isNaN(Cb)||(wa*=Cb,Ga*=Cb)}J||(v.x=ja);-1E5>ja&&(ja=-1E5);ja>n+1E5&&(ja=n+1E5);t?(E=F,O=N,N=F=ja,isNaN(ua)&&!this.fillToGraph&&(O=na),qa=ra,sa=ta):(O=E=ja,isNaN(ua)&&!this.fillToGraph&&(N=na));if(!Bb&&W<ua||Bb&&W<Ba)v.isNegative=!0,Ra&&(Na=Ra),cb&&(Wa=cb),void 0!=Ja&&(Ha=Ja);Va=!1;isNaN(W)||(m?W>Ta?(Sa&&(Va=!0),Sa=!1):(Sa||(Va=!0),Sa=!0):v.isNegative=W<Pa?!0:!1,Ba=W);var Pb=!1;J&&a.chartScrollbar.ignoreCustomColors&&(Pb=!0);Pb||(void 0!=v.color&&(Na=v.color),v.fillColors&&(Na=v.fillColors));F=d.fitToBounds(F,-3E4,3E4);switch(h){case"line":if(isNaN(W))z||(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),m?(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra),void 0===this.bulletColor&&(this.bulletColorSwitched=xa)):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[],eb=db=-1E3)}break;case"smoothedLine":if(isNaN(W))z||(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-
db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawSmoothedGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[])}break;case"step":if(!isNaN(W)){t?(isNaN(A)||(x.push(A),u.push(F-wa)),u.push(F-wa),x.push(E),u.push(F+Ga),x.push(E),!Ma||isNaN(N)||isNaN(O)||(isNaN(B)||(T.push(B),U.push(N-wa)),T.push(O),U.push(N-wa),T.push(O),U.push(N+Ga))):(isNaN(y)||(u.push(y),x.push(E-wa)),x.push(E-wa),u.push(F),x.push(E+Ga),u.push(F),!Ma||isNaN(N)||isNaN(O)||(isNaN(D)||(T.push(O-wa),U.push(D)),T.push(O-wa),U.push(N),T.push(O+Ga),U.push(N)));A=E;y=F;B=O;D=N;ya=E;Ea=F;ka=E;la=F;if(Va||void 0!=v.lineColor||void 0!=v.fillColors||!isNaN(v.dashLength)){var Db=x[x.length-2],dc=u[u.length-2];x.pop();u.pop();T.pop();U.pop();this.drawLineGraph(x,u,T,U);x=[Db];u=[dc];T=[];U=[];Ma&&(T=[Db,Db+wa+Ga],U=[D,D]);t?(u.push(F+Ga),x.push(E)):(x.push(E+Ga),u.push(F));this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra))}if(Ob||v.gap)A=y=NaN,this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]}else if(!z){if(1>=this.periodSpan||1<this.periodSpan&&E-A>wa+Ga)A=y=NaN;this.drawLineGraph(x,u,T,U);x=[];u=[];T=[];U=[]}break;case"column":Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Pa?!0:!1);v.isNegative&&(Ra&&(Na=Ra),void 0!=Ja&&(Ca=Ja));var Qb=f.min,Rb=f.max,rb=ua;isNaN(rb)&&(rb=Pa);if(!(W<Qb&&rb<Qb||W>Rb&&rb>Rb)){var Aa;if(t){"3d"==M?(R=F-(r/2-this.depthCount+1)*(k+V)+V/2+Q*Z,S=O+H*Z,Aa=Z):(R=Math.floor(F-(r/2-Z)*(k+V)+V/2),S=O,Aa=0);K=k;ya=E;Ea=R+k/2;ka=E;la=R+k/2;R+K>q+Aa*Q&&(K=q-R+Aa*Q);R<Aa*Q&&(K+=R,R=Aa*Q);ba=E-O;var ec=S;S=d.fitToBounds(S,0,n);ba+=ec-S;ba=d.fitToBounds(ba,-S,n-S+H*Z);v.labelIsNegative=0>ba?!0:!1;0===ba&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,R=ja-K/2,Ea=R+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);R<q&&0<K&&(va=new d.Cuboid(g,ba,K,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),v.columnWidth=Math.abs(ba),v.columnHeight=Math.abs(K))}else{"3d"==M?(S=E-(r/2-this.depthCount+1)*(k+V)+V/2+H*Z,R=N+Q*Z,Aa=Z):(S=E-(r/2-Z)*(k+V)+V/2,R=N,Aa=0);K=k;ya=S+k/2;Ea=F;ka=S+k/2;la=F;S+K>n+Aa*H&&(K=n-S+Aa*H);S<Aa*H&&(K+=S-Aa*H,S=Aa*H);ba=F-N;v.labelIsNegative=0<ba?!0:!1;0===ba&&1/W!==1/Math.abs(W)&&(v.labelIsNegative=!0);var fc=R;R=d.fitToBounds(R,this.dy,q);ba+=fc-R;ba=d.fitToBounds(ba,-R+Q*Aa,q-R);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=ja-K/2,ya=S+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);S<n+Z*H&&0<K&&(this.showOnAxis&&(R-=Q/2),va=new d.Cuboid(g,K,ba,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,this.lineAlpha,ga,w,t,ea,gb,pb,aa),v.columnHeight=Math.abs(ba),v.columnWidth=Math.abs(K))}}if(va){za=va.set;d.setCN(a,va.set,"graph-"+this.type);d.setCN(a,va.set,"graph-"+this.id);v.className&&d.setCN(a,va.set,v.className,!0);v.columnGraphics=za;S=d.roundTo(S,2);R=d.roundTo(R,2);za.translate(S,R);(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer");if(!J){"none"==M&&(I=t?(this.end+1-L)*C-c:C*L+c);"3d"==M&&(t?(I=(this.end+1-L)*C-c-1E3*this.depthCount,ya+=H*Z,ka+=H*Z,v.y+=H*Z):(I=(C-c)*(L+1)+1E3*this.depthCount,Ea+=Q*Z,la+=Q*Z,v.y+=Q*Z));if("regular"==M||"100%"==M)I=t?0<Ia.value?(this.end+1-L)*C+c:(this.end+1-L)*C-c:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:va,depth:I});v.x=t?R+K/2:S+K/2;this.ownColumns.push(va);this.animateColumns(va,L,E,O,F,N);this.addListeners(za,v);void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(za)}}break;case"candlestick":if(!isNaN(ua)&&!isNaN(W)){var Ya,hb;Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);ya=E;la=Ea=F;ka=E;if(t){"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);E=d.fitToBounds(E,0,pa);O=d.fitToBounds(O,0,pa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;R=F-k/2;S=O;K=k;R+K>q&&(K=q-R);0>R&&(K+=R,R=0);if(R<q&&0<K){var Eb,Fb;W>ua?(Eb=[E,sa],Fb=[O,qa]):(Eb=[O,sa],Fb=[E,qa]);!isNaN(sa)&&!isNaN(qa)&&F<q&&0<F&&(Ya=d.line(g,Eb,[F,F],Ca,X,da),hb=d.line(g,Fb,[F,F],Ca,X,da));ba=E-O;va=new d.Cuboid(g,ba,K,H,Q,Na,bb,da,Ca,X,ga,w,t,ea,gb,pb,aa)}}else{"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);ra=d.fitToBounds(ra,0,Fa);ta=d.fitToBounds(ta,0,Fa);if(0===F&&0===N&&0===ra&&0===ta)continue;if(F==Fa&&N==Fa&&ra==Fa&&ta==Fa)continue;S=E-k/2;R=N+da/2;K=k;S+K>n&&(K=n-S);0>S&&(K+=S,S=0);ba=F-N;if(S<n&&0<K){Bb&&W>=ua&&(Wa=0);var va=new d.Cuboid(g,K,ba,H,Q,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),Gb,Hb;W>ua?(Gb=[F,ta],Hb=[N,ra]):(Gb=[N,ta],Hb=[F,ra]);!isNaN(ta)&&!isNaN(ra)&&E<n&&0<E&&(Ya=d.line(g,[E,E],Gb,Ca,X,da),hb=d.line(g,[E,E],Hb,Ca,X,da),d.setCN(a,Ya,this.bcn+"line-high"),v.className&&d.setCN(a,Ya,v.className,!0),d.setCN(a,hb,this.bcn+"line-low"),v.className&&d.setCN(a,hb,v.className,!0))}}va&&(za=va.set,v.columnGraphics=za,fa.push(za),za.translate(S,R-da/2),(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer"),Ya&&(fa.push(Ya),fa.push(hb)),J||(v.x=t?R+K/2:S+K/2,this.animateColumns(va,L,E,O,F,N),this.addListeners(za,v),void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)))}break;case"ohlc":if(!(isNaN(ua)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Sb=g.set();fa.push(Sb);W<ua&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));void 0!=v.lineColor&&(Ha=v.lineColor);var Za,$a,ab;if(t){la=F;ka=E;"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;var Ib=F-k/2,Ib=d.fitToBounds(Ib,0,q),Tb=d.fitToBounds(F,0,q),Jb=F+k/2,Jb=d.fitToBounds(Jb,0,q);0<=O&&O<=pa&&($a=d.line(g,[O,O],[Ib,Tb],Ha,X,da,ea));0<F&&F<q&&(Za=d.line(g,[qa,sa],[F,F],Ha,X,da,ea));0<=E&&E<=pa&&(ab=d.line(g,[E,E],[Tb,Jb],Ha,X,da,ea))}else{la=F;"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);var ka=E,ra=d.fitToBounds(ra,0,Fa),ta=d.fitToBounds(ta,0,Fa),Kb=E-k/2,Kb=d.fitToBounds(Kb,0,n),Ub=d.fitToBounds(E,0,n),Lb=E+k/2,Lb=d.fitToBounds(Lb,0,n);0<=N&&N<=Fa&&($a=d.line(g,[Kb,Ub],[N,N],Ha,X,da,ea));0<E&&E<n&&(Za=d.line(g,[E,E],[ra,ta],Ha,X,da,ea));0<=F&&F<=Fa&&(ab=d.line(g,[Ub,Lb],[F,F],Ha,X,da,ea))}fa.push($a);fa.push(Za);fa.push(ab);d.setCN(a,$a,this.bcn+"stroke-open");d.setCN(a,ab,this.bcn+"stroke-close");d.setCN(a,Za,this.bcn+"stroke");v.className&&d.setCN(a,Sb,v.className,!0);Za&&this.addListeners(Za,v);ab&&this.addListeners(ab,v);$a&&this.addListeners($a,v);ya=E;Ea=F}}if(!J&&!isNaN(W)){var Vb=this.hideBulletsCount;if(this.end-this.start<=Vb||0===Vb){var Wb=this.createBullet(v,ka,la,L),Xb=this.labelText;if(Xb&&!isNaN(ya)&&!isNaN(ya)){var gc=this.createLabel(v,Xb),Yb=0;Wb&&(Yb=Wb.size);this.positionLabel(v,ya,Ea,gc,Yb)}if("regular"==M||"100%"==M){var Zb=f.totalText;if(Zb){var Oa=this.createLabel(v,Zb,f.totalTextColor);d.setCN(a,Oa,this.bcn+"label-total");this.allBullets.push(Oa);if(Oa){var $b=Oa.getBBox(),ac=$b.width,bc=$b.height,ib,jb,sb=f.totalTextOffset,cc=f.totals[L];cc&&cc.remove();var kb=0;"column"!=h&&(kb=this.bulletSize);t?(jb=Ea,ib=0>W?E-ac/2-2-kb-sb:E+ac/2+3+kb+sb):(ib=ya,jb=0>W?F+bc/2+
kb+sb:F-bc/2-3-kb-sb);Oa.translate(ib,jb);f.totals[L]=Oa;t?(0>jb||jb>q)&&Oa.remove():(0>ib||ib>n)&&Oa.remove()}}}}}}}this.lastDataItem=v;if("line"==h||"step"==h||"smoothedLine"==h)"smoothedLine"==h?this.drawSmoothedGraph(x,u,T,U):this.drawLineGraph(x,u,T,U),J||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,g=a.labelColor;g||(g=this.color);g||(g=e.color);c&&(g=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,g,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var g=this;if(1<a.length){var f=g.noRounding,h=g.set,k=g.chart,l=g.container,m=l.set(),n=l.set();h.push(n);h.push(m);var q=g.lineAlpha,p=g.lineThickness,h=g.fillAlphas,t=g.lineColorR,r=g.negativeLineAlpha;isNaN(r)&&(r=q);var w=g.lineColorSwitched;w&&(t=w);var w=g.fillColorsR,z=g.fillColorsSwitched;z&&(w=z);var x=g.dashLength;(z=g.dashLengthSwitched)&&(x=z);var z=g.negativeLineColor,u=g.negativeFillColors,A=g.negativeFillAlphas,y=g.baseCoord;0!==g.negativeBase&&(y=g.valueAxis.getCoordinate(g.negativeBase,f),y>g.height&&(y=g.height),0>y&&(y=0));q=d.line(l,a,b,t,q,p,x,!1,!1,f);q.node.setAttribute("stroke-linejoin","round");d.setCN(k,q,g.bcn+"stroke");m.push(q);m.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});void 0===z||g.useNegativeColorIfDown||(p=d.line(l,a,b,z,r,p,x,!1,!1,f),p.node.setAttribute("stroke-linejoin","round"),d.setCN(k,p,g.bcn+"stroke"),d.setCN(k,p,g.bcn+"stroke-negative"),n.push(p));if(0<h||0<A)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):g.rotate?(r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=g.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(y="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):(y="left"==b.position?0:b.width,r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0]))),a=g.gradientRotation,0<h&&(b=d.polygon(l,p,r,w,h,1,"#000",0,a,f),b.pattern(g.pattern,NaN,k.path),d.setCN(k,b,g.bcn+"fill"),m.push(b)),u||void 0!==z)isNaN(A)&&(A=h),u||(u=z),f=d.polygon(l,p,r,u,A,1,"#000",0,a,f),d.setCN(k,f,g.bcn+"fill"),d.setCN(k,f,g.bcn+"fill-negative"),f.pattern(g.pattern,NaN,k.path),n.push(f),n.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});g.applyMask(n,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var g=this.set,f=this.chart,h=this.container,k=h.set(),l=h.set();g.push(l);g.push(k);var m=this.lineAlpha,n=this.lineThickness,g=this.dashLength,q=this.fillAlphas,p=this.lineColorR,t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,z=this.negativeFillAlphas,x=this.baseCoord,u=this.lineColorSwitched;u&&(p=u);(u=this.fillColorsSwitched)&&(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(h,a,b,p,m,n,t,0,g,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(h,a,b,r,A,n,t,0,g,void 0,u),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(n=a.join(";").split(";"),m=b.join(";").split(";"),p="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),n=a.concat(c),m=b.concat(e)):(this.rotate?(p+=" L"+x+","+b[b.length-1],p+=" L"+x+","+b[0]):(p+=" L"+a[a.length-1]+","+x,p+=" L"+a[0]+","+x),p+=" L"+a[0]+","+b[0]),a=new d.Bezier(h,n,m,NaN,0,0,t,q,g,p,u),d.setCN(f,a,this.bcn+"fill"),a.path.pattern(this.pattern,NaN,f.path),k.push(a.path),w||void 0!==r)&&(z||(z=q),w||(w=r),h=new d.Bezier(h,n,m,NaN,0,0,w,z,g,p,u),h.path.pattern(this.pattern,NaN,f.path),d.setCN(f,h,this.bcn+"fill"),d.setCN(f,h,this.bcn+"fill-negative"),l.push(h.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,h=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,h),c.animate({opacity:1,translate:e+","+d},f,h),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,g=this.container,f=this.bulletOffset,h=this.bulletSize;isNaN(a.bulletSize)||(h=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(h=(k-m)/(l-m)*(n-q)+q),m==l&&(h=n));l=h;this.bulletAxis&&(h=a.values.error,isNaN(h)||(k=h),h=this.bulletAxis.stepWidth*k);h<this.minBulletSize&&(h=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);
var p;"xy"==e.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(g,f,h,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(p&&p.remove(),"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(g),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=g.set(),l=g.image(l,0,0,h,h),p.push(l),this.centerCustomBullets&&l.translate(-h/2,-h/2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-h/2||c>this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");a.className&&d.setCN(e,p,a.className,!0)}if(p){p.size=h||0;if(e=this.bulletHitAreaSize)g=d.circle(g,e,"#FFFFFF",.001,0),g.translate(b,c),a.hitBullet=g,this.bulletSet.push(g),this.addListeners(g,a);a.bulletGraphics=p;void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex)}else p={size:0};p.graphDataItem=a;return p}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)});var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,b){var c=this.chart;if(a){var e={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;if(b&&!b.doNotScale){b.translate(a.bx,a.by,1);var c=this.bulletAlpha;isNaN(a.alpha)||(c=a.alpha);b.setAttr("fill-opacity",c);b.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,g){if(a){var f=this.chart,h=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(h=f.balloon,k=this.x,l=this.y,n=!1):(h=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);if(f.chartCursor&&(this.currentDataItem=a,"serial"==f.type&&f.isRolledOverBullet&&f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,g);if(h&&h.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),h.drop||(h.pointerOrientation=b),b=a.x,g=a.y,f.rotate&&(b=a.y,g=a.x),b+=k,g+=l,isNaN(b)||isNaN(g)?this.hideBalloonReal():(a=this.width,q=this.height,n&&h.setBounds(k,l,a+k,q+l),h.changeColor(e),h.setPosition(b,g),h.fixPrevious(),h.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k-.5||b>a+k||g<l-.5||g>q+l)?(h.showBalloon(m),h.hide(0)):(h.followCursor(c),h.showBalloon(m)))):(this.hideBalloonReal(),h.hide(),this.resizeBullet(a,e,g))}else this.hideBalloonReal()}},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,g=a.width,f=a.height,h,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(h=m,k=l):(k=m,h=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),h=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,h,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,g,g+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(-1,-1,g+2,f+2);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,g,f)},handleKeys:function(a){var b=this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");if(this.drawingNow&&(d.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var a=this.chart,b=a.marginTop,a=a.marginLeft;this.drawingLine=d.line(this.container,[this.drawStartX+a,this.mouseX+a],[this.drawStartY+b,this.mouseY+b],this.cursorColor,1,1)}},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2-1,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,g=this.width,f=this.height,a=d.fitToBounds(a,0,g),b=d.fitToBounds(b,0,f),h;a<c&&(h=a,a=c,c=h);b<e&&(h=b,b=e,e=h);this.hZoomEnabled?g=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(g)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,g,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=g,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,g=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:g,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,h=this.chart,k=h.chartData,l=h.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?h.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-
this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&(d=a);isNaN(f)&&(f=b);var h=!1;this.zooming&&this.pan&&(h=!0);h={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:h,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(h.position=b,h.finalPosition=f):(h.position=a,h.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(h):(this.fire(h),"changed"==c&&this.chart.fire(h))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),g=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(g=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)g=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(g=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(g=!1);g&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,
deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a),a)},setPosition:function(a,b){var c=this.chart,e=c.categoryAxis;if(e){var d,f;void 0===b&&(b=e.coordinateToValue(a));e.showBalloonAt(b,a);this.forceShow=!0;e.stickBalloonToCategory?c.rotate?this.fixHLine(a,0):this.fixVLine(a,0):(this.showCursor(),c.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));c.rotate?d=a:f=a;c.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(f,d,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";this.dragCursorHover="cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;";this.dragCursorDown="cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;";this.vResizeCursor="ns-resize";this.hResizeCursor="ew-resize";this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},getPercents:function(){var a=this.getDBox(),b=a.x,c=a.y,e=a.width,a=a.height;this.rotate?(b=1-c/this.height,c=1-(c+a)/this.height):(c=b/this.width,
b=(b+e)/this.width);this.percentStart=c;this.percentEnd=b},draw:function(){var a=this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var g=b.set();a.set=g;c?d.setCN(e,g,"scrollbar-vertical"):d.setCN(e,g,"scrollbar-horizontal");e.scrollbarsSet.push(g);var f,h;c?(f=a.scrollbarHeight,h=e.plotAreaHeight):(h=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=h)&&f){var k=d.rect(b,f,h,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);
d.setCN(e,k,"scrollbar-bg");a.bg=k;g.push(k);k=d.rect(b,f,h,"#000",.005);g.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});k=d.rect(b,f,h,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;g.push(k);f=d.rect(b,f,h,"#000",.005);a.dragger=f;g.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});h=e.pathToImages;var l,k=a.dragIcon.replace(/\.[a-z]*$/i,"");d.isAbsolute(k)&&(h="");c?(l=h+k+"H"+e.extension,h=a.dragIconWidth,c=a.dragIconHeight):(l=h+k+e.extension,c=a.dragIconWidth,h=a.dragIconHeight);k=b.image(l,0,0,c,h);d.setCN(e,k,"scrollbar-grip-left");l=b.image(l,0,0,c,h);d.setCN(e,l,"scrollbar-grip-right");var m=10,n=20;e.panEventsEnabled&&(m=25,n=a.scrollbarHeight);var q=d.rect(b,m,n,"#000",.005),p=d.rect(b,m,n,"#000",.005);p.translate(-(m-c)/2,-(n-h)/2);q.translate(-(m-c)/2,-(n-h)/2);
c=b.set([k,p]);b=b.set([l,q]);a.iconLeft=c;g.push(a.iconLeft);a.iconRight=b;g.push(b);a.updateGripCursor(!1);e.makeAccessible(c,a.accessibleLabel);e.makeAccessible(b,a.accessibleLabel);e.makeAccessible(f,a.accessibleLabel);c.setAttr("role","menuitem");b.setAttr("role","menuitem");f.setAttr("role","menuitem");void 0!==a.tabIndex&&(c.setAttr("tabindex",a.tabIndex),c.keyup(function(b){a.handleKeys(b,1,0)}));void 0!==a.tabIndex&&(f.setAttr("tabindex",a.tabIndex),f.keyup(function(b){a.handleKeys(b,1,1)}));void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b,0,1)}));c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});d.ifArray(e.chartData)?g.show():g.hide();a.hideDragIcons();a.clipDragger(!1)}g.translate(a.x,a.y);g.node.style.msTouchAction="none";g.node.style.touchAction="none"}},handleKeys:function(a,b,c){this.getPercents();var e=this.percentStart,d=this.percentEnd;if(this.rotate)var f=d,d=e,e=f;if(37==a.keyCode||40==a.keyCode)e-=.02*b,d-=.02*c;if(39==a.keyCode||38==a.keyCode)e+=.02*b,d+=.02*c;this.rotate&&(a=d,d=e,e=a);isNaN(d)||isNaN(e)||this.percentZoom(e,d,!0)},updateScrollbarSize:function(a,b){if(!isNaN(a)&&!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,h,k;this.rotate?(e=0,d=a,f=this.width+1,h=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,h=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,h)}},update:function(){var a,b=!1,c,e,d=this.x,f=this.y,h=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,n=this.chart,q=this.width,p=this.height,t=n.mouseX,n=n.mouseY;a=this.initialMouse;this.forceClip&&this.clipDragger(!0);if(this.dragging){var r=this.initialCoord;if(m)a=r+(n-a),0>a&&(a=0),r=p-k,a>r&&(a=r),h.setAttr("y",a);else{a=r+(t-a);0>a&&(a=0);r=q-l;if(a>r||isNaN(a))a=r;h.setAttr("x",a)}this.clipDragger(!0)}if(this.resizingRight){if(m)if(a=n-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight),a+e>p+f&&(a=p-e+f),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("height",a)}else if(a=t-c,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth),a+c>q+d&&(a=q-c+d),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("width",a)}this.clipDragger(!0)}if(this.resizingLeft){if(m)if(c=e,e=n,e<f&&(e=f),isNaN(e)&&(e=f),e>p+f&&(e=p+f),a=!0===b?c-e:k+c-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("y",c+k-f);else{if(0===a||isNaN(a))a=.1;h.setAttr("y",e-f);h.setAttr("height",a)}else if(e=t,e<d&&(e=d),isNaN(e)&&(e=d),e>q+d&&(e=q+d),a=!0===b?c-e:l+c-e,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("x",c+l-d);else{if(0===a||isNaN(a))a=.1;h.setAttr("x",e-d);h.setAttr("width",a)}this.clipDragger(!0)}}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,e=b.y,d=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,d=this.width+1,this.clipY!=e||this.clipH!=b)f=!0}else if(e=0,b=this.height+1,this.clipX!=c||this.clipW!=d)f=!0;f&&this.clipAndUpdate(c,e,d,b);a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent())}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,e){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=e;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",e);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,e)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),c=b.x,e=b.y,d=b.width,b=b.height;this.getPercents();this.rotate?(c=e,d=this.height/b):d=this.width/d;a={type:"zoomed",position:c,chart:a,target:this,multiplier:d,relativeStart:this.percentStart,relativeEnd:this.percentEnd};if(this.percentStart!=this.prevPercentStart||this.percentEnd!=this.prevPercentEnd||this.prevMultiplier!=d)this.fire(a),this.prevPercentStart=this.percentStart,this.prevPercentEnd=this.percentEnd,this.prevMultiplier=d}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,c=a.y,d=this.iconLeft,g=this.iconRight,f,h,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,h=this.dragIconHeight,d.translate((k-h)/2,c-f/2),g.translate((k-h)/2,c+a.height-f/2)):(f=this.dragIconHeight,h=this.dragIconWidth,d.translate(b-h/2,(k-f)/2),g.translate(b-h/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),
this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},percentZoom:function(a,b,c){a=d.fitToBounds(a,0,b);b=d.fitToBounds(b,a,1);if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var e,g;this.rotate?(e=this.height,b=e-e*b,g=e-e*a):(e=this.width,g=e*b,b=e*a);this.updateScrollbarSize(b,g);this.clipDragger(!1);this.getPercents();c&&this.dispatchScrollbarEvent()}},destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;this.dragger.stop();this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorDown);this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover);this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0;this.updateGripCursor(!0)},updateGripCursor:function(a){d.isModern&&(a=this.rotate?a?this.vResizeCursorDown:this.vResizeCursorHover:a?this.hResizeCursorDown:this.hResizeCursorHover)&&(this.iconRight&&(this.iconRight.node.style.cssText=a),this.iconLeft&&(this.iconLeft.node.style.cssText=a))},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingRight=!0;this.updateGripCursor(!0)},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.vResizeCursor&&this.chart.setMouseCursor(this.vResizeCursor):this.hResizeCursor&&this.chart.setMouseCursor(this.hResizeCursor);this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=!0;var b,c,e=a.scrollDuration,g=a.dragger;b=a.getDBox();var f=b.height,h=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-h/2-l,c=d.fitToBounds(c,0,a.width-h));a.updateOnReleaseOnly?(a.skipEvent=!1,g.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?g.animate({y:c},e,">"):g.animate({x:c},e,">"),a.forceClip=!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons();this.removeCursors()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;this.accessibleLabel="Zoom chart using cursor arrows";d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod,a.minMaxField=c.minMaxField),this.categoryAxis=a);a.chart=b;var e=b.categoryAxis;e&&(a.firstDayOfWeek=e.firstDayOfWeek);a.dateFormats=c.dateFormats;a.markPeriodChange=c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&(c=this.valueAxis,c||(this.valueAxis=c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,g=a.rotate,f=a.x,h=a.y,k=a.width,l=a.height,m=a.gridAxis,n=a.set;e.setOrientation(!g);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!g);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,p=m.valueAxis;q.id=p.id;q.rotate=g;q.setOrientation(g);q.width=k;q.height=l;q.dataProvider=c;q.reversed=p.reversed;q.logarithmic=p.logarithmic;q.gridAlpha=0;q.axisAlpha=0;n.push(q.set);g?(q.y=h,q.x=0):(q.x=f,q.y=0);var f=Infinity,h=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[p.id].graphs[m.id].values,w;for(w in r)if(r.hasOwnProperty(w)&&"percents"!=w&&"total"!=w){var z=r[w];z<f&&(f=z);z>h&&(h=z)}}Infinity!=f&&(q.minimum=f);-Infinity!=h&&(q.maximum=h+.1*(h-f));f==h&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);w=a.unselectedGraph;w.id=m.id;w.bcn="scrollbar-graph-";w.rotate=g;w.chart=b;w.data=c;w.valueAxis=q;w.chart=m.chart;w.categoryAxis=a.categoryAxis;w.periodSpan=m.periodSpan;w.valueField=m.valueField;w.openField=m.openField;w.closeField=m.closeField;w.highField=m.highField;w.lowField=m.lowField;w.lineAlpha=a.graphLineAlpha;w.lineColorR=a.graphLineColor;w.fillAlphas=a.graphFillAlpha;w.fillColorsR=a.graphFillColor;w.connect=m.connect;w.hidden=m.hidden;w.width=k;w.height=l;w.pointPosition=m.pointPosition;w.stepDirection=m.stepDirection;w.periodSpan=m.periodSpan;p=a.selectedGraph;p.id=m.id;p.bcn=w.bcn+"selected-";p.rotate=g;p.chart=b;p.data=c;p.valueAxis=q;p.chart=m.chart;p.categoryAxis=e;p.periodSpan=m.periodSpan;p.valueField=m.valueField;p.openField=m.openField;p.closeField=m.closeField;p.highField=m.highField;p.lowField=m.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=m.connect;p.hidden=m.hidden;p.width=k;p.height=l;p.pointPosition=m.pointPosition;p.stepDirection=m.stepDirection;p.periodSpan=m.periodSpan;b=a.graphType;b||(b=m.type);w.type=b;p.type=b;c=c.length-1;w.zoom(0,c);p.zoom(0,c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});w.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});n.push(w.set);n.push(p.set)}n.push(e.set);n.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,e=this.dragger.getBBox();b=e.x;var g=e.y,f=e.width,e=e.height,h=this.chart;this.rotate?(b=g,c=e):c=f;f={type:"zoomed",target:this};f.chart=h;var k=this.categoryAxis,l=this.stepWidth,g=h.minSelectedTime,e=h.maxSelectedTime,m=!1;if(k.parseDates&&!k.equalSpacing){if(a=h.lastTime,h=h.firstTime,k=Math.round(b/l)+h,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+h,k>b&&(k=b),0<g&&b-k<g&&(b=Math.round(k+(b-k)/2),m=Math.round(g/2),k=b-m,b+=m,m=!0),0<e&&b-k>e&&(b=Math.round(k+(b-k)/2),m=Math.round(e/2),k=b-m,b+=m,m=!0),b>a&&(b=
a),b-g<k&&(k=b-g),k<h&&(k=h),k+g>b&&(b=k+g),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else{k.startOnAxis||(b+=l/2);c-=this.stepWidth/2;g=k.xToIndex(b);b=k.getCoordinate(g)-this.stepWidth/2;b=k.xToIndex(b+c);if(g!=this.start||this.end!=b)k.startOnAxis&&(this.resizingRight&&g==b&&b++,this.resizingLeft&&g==b&&(0<g?g--:b=1)),this.start=g,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);this.percentStart=g;this.percentEnd=b}m&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b,c,d=this.chart;a=d.chartData;var g=this.categoryAxis;g.parseDates&&!g.equalSpacing?(a=g.stepWidth,c=d.firstTime,b=a*(this.startTime-c),c=a*(this.endTime-
c)):(a[this.start]&&(b=a[this.start].x[g.id]),a[this.end]&&(c=a[this.end].x[g.id]),a=g.stepWidth,g.startOnAxis||(d=a/2,b-=d,c+=d));this.stepWidth=a;isNaN(b)||isNaN(c)||this.updateScrollbarSize(b,c)}},maskGraphs:function(a,b,c,d){var g=this.selectedGraph;g&&g.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor="#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=this.follow,g=c.container,f=this.set;d.remove(f);this.removeDiv();f=g.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var h=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,q=this.fillColor,p=this.borderColor,t=q;void 0!=n&&(this.adjustBorderColor?t=p=n:q=n);var r=this.horizontalPadding,w=this.verticalPadding,z=this.pointerWidth,x=this.pointerOrientation,u=this.cornerRadius,A=c.fontFamily,y=this.fontSize;void 0==y&&(y=c.fontSize);var n=document.createElement("div"),B=c.classNamePrefix;n.className=B+"-balloon-div";this.className&&(n.className=n.className+" "+B+"-balloon-div-"+this.className);B=n.style;this.disableMouseEvents&&(B.pointerEvents="none");B.position="absolute";var D=this.minWidth,C=document.createElement("div");n.appendChild(C);var I=C.style;isNaN(D)||(I.minWidth=D-2*r+"px");I.textAlign=this.textAlign;I.maxWidth=this.maxWidth+"px";I.fontSize=y+"px";I.color=this.color;I.fontFamily=A;C.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var I=n.offsetWidth,H=n.offsetHeight;n.clientHeight&&(I=n.clientWidth,H=n.clientHeight);A=H+2*w;C=I+2*r;!isNaN(D)&&C<D&&(C=D);window.opera&&(A+=2);var Q=!1,y=this.offsetY;c.handDrawn&&(y+=c.handDrawScatter+2);"H"!=x?(D=a-C/2,b<k+A+10&&"down"!=x?(Q=!0,e&&(b+=y),y=b+z,this.deltaSignY=-1):(e&&(b-=y),y=b-A-z,this.deltaSignY=1)):(2*z>A&&(z=A/2),y=b-A/2,a<h+(l-h)/2?(D=a+z,this.deltaSignX=-1):(D=a-C-z,this.deltaSignX=
1));y+A>=m&&(y=m-A);y<k&&(y=k);D<h&&(D=h);D+C>l&&(D=l-C);var k=y+w,m=D+r,M=this.shadowAlpha,P=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,J,w=this.fillAlpha,aa=this.borderAlpha;this.showBullet&&(J=d.circle(g,ia,t,w),f.push(J));this.drop?(h=C/1.6,l=0,"V"==x&&(x="down"),"H"==x&&(x="left"),"down"==x&&(D=a+1,y=b-h-h/3),"up"==x&&(l=180,D=a+1,y=b+h+h/3),"left"==x&&(l=270,D=a+h+h/3+2,y=b),"right"==x&&(l=90,D=a-h-h/3+2,y=b),k=y-H/2+1,m=D-I/2-1,q=d.drop(g,h,l,q,w,r,p,aa)):0<u||0===z?(0<M&&(a=d.rect(g,C,A,q,0,r+1,P,M,u),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(g,C,A,q,w,r,p,aa,u)):(t=[],u=[],"H"!=x?(h=a-D,h>C-z&&(h=C-z),h<z&&(h=z),t=[0,h-z,a-D,h+z,C,C,0,0],u=Q?[0,0,b-y,0,0,A,A,0]:[A,A,b-y,A,A,0,0,A]):(x=b-y,x>A-z&&(x=A-z),x<z&&(x=z),u=[0,x-z,b-y,x+z,A,A,0,0],t=a<h+(l-h)/2?[0,0,D<a?0:a-D,0,0,C,C,0]:[C,C,D+C>a?C:a-D,C,C,0,0,C]),0<M&&(a=d.polygon(g,t,u,q,0,r,P,M),a.translate(1,1),f.push(a)),q=d.polygon(g,t,u,q,w,r,p,aa));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,
"balloon-bg");this.className&&d.setCN(c,q,"balloon-bg-"+this.className);g=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;B.left=m+"px";B.top=k+"px";f.translate(D-g,y,1,!0);q=q.getBBox();this.bottom=y+A+1;this.yPos=q.y+y;J&&J.translate(this.pointToX-D+g,b-y);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:D-g+","+y},b,"easeOutSine"),n&&(B.left=this.prevTX+"px",B.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=D-g;this.prevY=y;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,g=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);g<this.t&&(g=b+10);c.translate(a,g);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=g+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,d){this.l=a;this.t=b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&(this.gridSet.toFront(),this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1);var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var g=this.graphs,f={},h=this.seriesIdField;h||(h=this.categoryField);var k=!1,l,m=this.categoryAxis,n,q,p;m&&(k=m.parseDates,n=m.forceShowField,p=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,w={},z;k&&(t=d.extractPeriod(m.minPeriod),r=t.period,t=t.count,z=d.getPeriodDuration(r,t));var x={};this.lookupTable=x;var u,A=this.dataDateFormat,y={};for(u=b;u<c;u++){var B={},D=a[u];b=D[this.categoryField];B.dataContext=D;B.category=l?l(b,D,m):String(b);n&&(B.forceShow=D[n]);p&&(B.className=D[p]);q&&(B.labelColor=D[q]);x[D[h]]=B;if(k&&(m.categoryFunction?b=m.categoryFunction(b,D,m):(!A||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,A,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),B.category=b,B.time=b.getTime(),isNaN(B.time)))continue;var C=this.valueAxes;B.axes={};B.x={};var I;for(I=0;I<C.length;I++){var H=C[I].id;B.axes[H]={};B.axes[H].graphs={};var Q;for(Q=0;Q<g.length;Q++){b=g[Q];var M=b.id,P=1.1;isNaN(b.gapPeriod)||(P=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){B.axes[H].graphs[M]={};var J={};J.index=u;var aa=D;b.dataProvider&&(aa=f);J.values=this.processValues(aa,b,ia);if(!b.connect||b.forceGap&&!isNaN(b.gapPeriod))if(y&&y[M]&&0<P&&B.time-w[M]>=z*P&&(y[M].gap=!0),b.forceGap){var P=0,ma;for(ma in J.values)P++;0<P&&(w[M]=B.time,y[M]=J)}else w[M]=B.time,y[M]=J;this.processFields(b,J,aa);J.category=B.category;J.serialDataItem=B;J.graph=b;B.axes[H].graphs[M]=J}}}this.chartData[u]=B}if(this.parseCount==e){for(a=0;a<g.length;a++)b=g[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},g,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var h="value error open close low high".split(" "),k=0;k<h.length;k++){var l=h[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(g=Number(m),isNaN(g)||(e[l]=g),"date"==b.valueAxis.type&&void 0!==m&&(g=d.getDate(m,b.chart.dataDateFormat),e[l]=g.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var g=b[d],f=this.lookupTable[String(g[c])],h=a.valueAxis.id;f&&(h=f.axes[h].graphs[a.id],h.serialDataItem=f,h.values=this.processValues(g,a,a.periodValue),this.processFields(a,h,g))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisIntZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var g=e.valueAxis;g?(d.isString(g)&&(g=this.getValueAxisById(g)),g?g.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,g=e.valueAxis;g.duration&&b.values.value&&(g=d.formatDuration(b.values.value,g.duration,"",g.durationUnits,g.maxInterval,g.numberFormatter),a=a.split("[[value]]").join(g));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,g=a.balloonColor;c&&(g=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===g&&(g=e);return g},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,g=b.index;b.color=g<e.length?e[g]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" ");for(g=0;g<e.length;g++){var f=e[g],h=a[f+"Field"];h&&(h=c[h],d.isDefined(h)&&(b[f]=h))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var c=a.hidden,d=a.showBalloon;switch(b){case"clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case"clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case"rollOverItem":c||this.highlightGraph(a);break;case"rollOutItem":c||this.unhighlightGraph();break;case"hideItem":this.hideGraph(a);break;case"showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=this.graphs;if(b){var c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var g=b[c];g!=a&&g.changeOpacity(d)}}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){this.animatable=[];var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click","rollOver","rollOut");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,g,f,h,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,z=a.initialValue,x=a.finalValue,u=p.recalculateToPercents,A=b.dataDateFormat;k&&(l&&(l=d.getDate(l,A,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),n&&(n=d.getDate(n,A,"fff"),a.finalDate=n,g=k.dateToCoordinate(n)),q&&(g=k.categoryToCoordinate(q)));t&&!u&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(w)||(g=t.getCoordinate(w)));p&&!u&&(isNaN(z)||(f=p.getCoordinate(z)),isNaN(x)||(h=p.getCoordinate(x)));if(!(isNaN(e)||isNaN(g)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,h],h=[e,g]):(k=[e,g],h=[f,h]);f=d.line(c,k,h,a.lineColor,a.lineAlpha,a.lineThickness,a.dashLength);e=k;g=h;n=k[1]-k[0];q=h[1]-h[0];0===n&&(n=.01);0===q&&(q=.01);l=n/Math.abs(n);m=q/Math.abs(q);q=90*Math.PI/180-Math.asin(n/(n*q/Math.abs(n*q)*Math.sqrt(Math.pow(n,2)+Math.pow(q,2))));n=Math.abs(5*Math.cos(q));q=Math.abs(5*Math.sin(q));e.push(k[1]-l*q,k[0]-l*q);g.push(h[1]+m*n,h[0]+m*n);h=d.polygon(c,e,g,"#ffffff",.005,0);c=c.set([h,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,f,"trend-line");d.setCN(b,f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,g[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,g[1]+f.offsetY),c.push(f.set);c.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});c.touchend&&c.touchend(function(){a.handleLineClick()});c.clipRect(0,0,b.plotAreaWidth,b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2));this.fire({type:"rollOver",trendLine:this,chart:this.chart})},handleLineOut:function(){this.line.attr({stroke:this.lineColor});this.balloonText&&this.chart.hideBalloon();this.fire({type:"rollOut",trendLine:this,chart:this.chart})},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,g,f,h,k,l){0>=b&&(b=.001);if(void 0==g||0===g)g=.01;void 0===f&&(f="#000000");void 0===h&&(h=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":g,"stroke-opacity":h};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,g,f,h,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":g+"px",opacity:k};!0===h&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,g,f,h,k,l,m,n){isNaN(f)&&(f=.01);isNaN(k)&&(k=g);var q=e,p=!1;"object"==typeof q&&1<q.length&&(p=!0,q=q[0]);void 0===h&&(h=q);g={fill:q,stroke:h,"fill-opacity":g,"stroke-width":f,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,c,a.handDrawScatter),b=c[0],c=c[1]);h=Math.round;m&&(h=Number);k="M"+(h(b[0])+n)+","+(h(c[0])+f);for(q=1;q<b.length;q++)m&&(b[q]=d.roundTo(b[q],5),c[q]=d.roundTo(c[q],5)),k+=" L"+(h(b[q])+n)+","+(h(c[q])+f);a=a.path(k+" Z").attr(g);p&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,g,f,h,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(g)&&(g=0);var q=e,p=!1;"object"==typeof q&&(q=q[0],p=!0);void 0===h&&(h=q);void 0===k&&(k=g);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;g={fill:q,stroke:h,"fill-opacity":g,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);a=a.rect(t,r,b,c,l,f).attr(g);p&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,g,f,h,k,l,m,n,q,p){var t;"circle"==b&&(b="round");switch(b){case"round":t=d.circle(a,c/2,e,g,f,h,k);break;case"square":t=d.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,g,f,h,k,m-180,void 0,p);break;case"rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,g,f,h,k,m-180,void 0,p);break;case"diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,g,f,h,k);break;case"triangleUp":t=d.triangle(a,c,0,e,g,f,h,k);break;case"triangleDown":t=d.triangle(a,c,180,e,g,f,h,k);break;case"triangleLeft":t=d.triangle(a,c,270,e,g,f,h,k);break;case"triangleRight":t=d.triangle(a,c,90,e,g,f,h,k);break;case"bubble":t=d.circle(a,c/2,e,g,f,h,k,!0);break;case"line":t=d.line(a,[-c/
2,c/2],[0,0],e,g,f,h,k);break;case"yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,g,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,g,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,g,f));break;case"xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,g,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,g,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,g,f))}t&&t.pattern(n,NaN,q);return t};d.triangle=function(a,b,c,d,g,f,h,k){if(void 0===f||0===f)f=1;void 0===h&&(h="#000");void 0===k&&(k=0);d={fill:d,stroke:h,"fill-opacity":g,"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,g,f,h,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,g,f,h,k,l,m,n);f={fill:"none","stroke-width":f};void 0!==h&&0<h&&(f["stroke-dasharray"]=h);isNaN(g)||(f["stroke-opacity"]=g);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;g=d.dy;h="M"+(e(b[0])+m)+","+(e(c[0])+g);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),h+=" L"+(e(b[k])+m)+","+(e(c[k])+g);if(d.VML)return a.path(h,void 0,!0).attr(f);l&&(h+=" M0,0 L0,0");return a.path(h).attr(f)};d.makeHD=function(a,b,c){for(var d=[],g=[],f=1;f<a.length;f++)for(var h=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),n=Math.round(Math.sqrt(Math.pow(l-
h,2)+Math.pow(m-k,2))/50)+1,l=(l-h)/n,m=(m-k)/n,q=0;q<=n;q++){var p=k+q*m+Math.random()*c;d.push(h+q*l+Math.random()*c);g.push(p)}return[d,g]};d.handDrawnLine=function(a,b,c,e,g,f,h,k,l,m){var n,q=a.set();for(n=1;n<b.length;n++)for(var p=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(p,t,a.handDrawScatter),p=t[0],t=t[1],r=1;r<p.length;r++)q.push(d.line(a,[p[r-1],p[r]],[t[r-1],t[r]],e,g,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,h,k,l,m,!0));return q};d.doNothing=function(a){return a};d.drop=
function(a,b,c,d,g,f,h,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,q=Math.cos(m*l)*b,p=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,w=-b/3,z=b/3;0===c&&(w=-w,z=0);180==c&&(z=0);90==c&&(w=0);270==c&&(w=0,z=-z);c={fill:d,stroke:h,"stroke-width":f,"stroke-opacity":k,"fill-opacity":g};b="M"+n+","+q+" A"+b+","+b+",0,1,1,"+p+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+z)+","+(Math.cos((m+20)*l)*b+w));b+=" A"+r+","+r+",0,0,0,"+n+","+q;return a.path(b,void 0,void 0,"1000,1000").attr(c)};d.wedge=function(a,b,c,e,g,f,h,k,l,m,n,q,p,t){var r=Math.round;f=r(f);h=r(h);k=r(k);var w=r(h/f*k),z=d.VML,x=359.5+f/100;359.94<x&&(x=359.94);g>=x&&(g=x);var u=1/180*Math.PI,x=b+Math.sin(e*u)*k,A=c-Math.cos(e*u)*w,y=b+Math.sin(e*u)*f,B=c-Math.cos(e*u)*h,D=b+Math.sin((e+g)*u)*f,C=c-Math.cos((e+g)*u)*h,I=b+Math.sin((e+g)*u)*k,u=c-Math.cos((e+g)*u)*w,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},Q=0;180<Math.abs(g)&&(Q=1);e=a.set();var M;z&&(x=r(10*x),y=r(10*y),D=r(10*D),I=r(10*I),A=r(10*A),B=r(10*B),C=r(10*C),u=r(10*u),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,h*=10,k*=10,w*=10,1>Math.abs(g)&&1>=Math.abs(D-y)&&1>=Math.abs(C-B)&&(M=!0));g="";var P;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){P=" M"+x+","+(A+l)+" L"+y+","+(B+l);z?(M||(P+=" A"+(b-f)+","+(l+c-h)+","+(b+f)+","+(l+c+h)+","+y+","+(B+l)+","+D+","+(C+l)),P+=" L"+I+","+(u+l),0<k&&(M||(P+=" B"+(b-k)+","+(l+c-w)+","+(b+k)+","+(l+c+w)+","+I+","+(l+u)+","+x+","+(l+A)))):(P+=" A"+f+","+h+",0,"+Q+",1,"+D+","+(C+l)+" L"+I+","+(u+l),0<k&&(P+=" A"+k+","+w+",0,"+Q+",0,"+x+","+(A+l)));P+=" Z";var ia=l;z&&(ia/=10);for(var J=0;J<ia;J+=10){var aa=a.path(P,void 0,void 0,"1000,1000").attr(H);e.push(aa);aa.translate(0,-J)}P=a.path(" M"+x+","+A+" L"+x+","+(A+l)+" L"+y+","+(B+l)+" L"+y+","+B+" L"+x+","+A+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+D+","+C+" L"+D+","+(C+l)+" L"+I+","+(u+l)+" L"+I+","+u+" L"+D+","+C+" Z",void 0,void 0,"1000,1000").attr(H);e.push(P);e.push(l)}z?(M||(g=" A"+r(b-f)+","+r(c-h)+","+r(b+f)+","+r(c+h)+","+r(y)+","+r(B)+","+r(D)+","+r(C)),h=" M"+r(x)+","+r(A)+" L"+r(y)+","+r(B)+g+" L"+r(I)+","+r(u)):h=" M"+x+","+A+" L"+y+","+B+(" A"+f+","+h+",0,"+Q+",1,"+D+","+C)+" L"+I+","+u;0<k&&(z?M||(h+=" B"+(b-k)+","+(c-w)+","+(b+k)+","+(c+w)+","+I+","+u+","+x+","+A):h+=" A"+k+","+w+",0,"+Q+",0,"+x+","+A);a.handDrawn&&(k=d.line(a,[x,y],[A,B],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(h+" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(w=0;w<n.length;w++)k.push(d.adjustLuminosity(m.fill,n[w]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(q,NaN,p);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,g;for(g=0;3>g;g++)e=parseInt(a.substr(2*g,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n){var q=a.chart,p=d.bezierX,t=d.bezierY;isNaN(q.bezierX)||(p=q.bezierX);isNaN(q.bezierY)||(t=q.bezierY);isNaN(p)&&(q.rotate?(p=20,t=4):(t=20,p=4));var r,w;"object"==typeof h&&1<h.length&&(w=!0,r=h,h=h[0]);"object"==typeof k&&(k=k[0]);0===k&&(h="none");f={fill:h,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(g)||(f["stroke-opacity"]=g);e&&(f.stroke=e);e="M"+Math.round(b[0])+","+Math.round(c[0])+" ";g=[];for(l=0;l<b.length;l++)isNaN(b[l])||isNaN(c[l])?(e+=this.drawSegment(g,p,t),l<b.length-1&&(e+="L"+b[l+1]+","+c[l+1]+" "),g=[]):g.push({x:Number(b[l]),y:Number(c[l])});e+=this.drawSegment(g,p,t);m&&(e+=m);this.path=a.path(e).attr(f);this.node=this.path.node;w&&this.path.gradient("linearGradient",r,n)},drawSegment:function(a,b,c){var d="";if(2<a.length)for(var g=0;g<a.length-1;g++){var f=[],h=a[g-1],k=a[g],l=a[g+1],m=a[g+2];0===g?(f.push({x:k.x,y:k.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y})):g>=a.length-2?(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:l.x,y:l.y})):(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y}));h=[];k=Math.round;h.push({x:k(f[1].x),y:k(f[1].y)});h.push({x:k((-f[0].x+b*f[1].x+f[2].x)/b),y:k((-f[0].y+c*f[1].y+f[2].y)/c)});h.push({x:k((f[1].x+b*f[2].x-f[3].x)/b),y:k((f[1].y+c*f[2].y-f[3].y)/c)});h.push({x:k(f[2].x),y:k(f[2].y)});d+="C"+h[1].x+","+h[1].y+","+
h[2].x+","+h[2].y+","+h[3].x+","+h[3].y+" "}else 1<a.length&&(d+="L"+a[1].x+","+a[1].y);return d}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,a)},circle:function(a,b,c,e){var g=new d.AmDObject("circle",this);g.attr({r:c,cx:a,cy:b});this.addToContainer(g.node,e);return g},ellipse:function(a,b,c,e,g){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,g);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,g,f,h){var k=new d.AmDObject("rect",this);d.VML&&(g=Math.round(100*g/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:g,ry:g,"stroke-width":f});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,g,f){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:g});this.R.path(h,a);this.addToContainer(h.node,f);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var g=new d.AmDObject("path",this);e||(e="100,100");g.attr({cs:e});c?g.attr({dd:a}):g.attr({d:a});this.addToContainer(g.node,b);return g},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),g=c.top-Math.round(c.top);d&&(b.left=d+"px");g&&(b.top=g+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),a.accessibleDescription&&(b.innerHTML="",b.appendChild(document.createTextNode(a.accessibleDescription))),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var g=e,f=a[e];c=d.getEffect(c);this.R.animate(this,g,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var g=document.createElement("amvml:fill");c.appendChild(g);a.fill=g;g.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&(e=!0);var g=a.node,f=a.type,h=g.style;"r"==b&&(h.width=2*c,h.height=2*c);"oval"==a.shapeType&&("rx"==b&&(h.width=2*c),"ry"==b&&(h.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(h.cursor=c);"cx"==b&&(h.left=c-d.removePx(h.width)/2);"cy"==b&&(h.top=c-d.removePx(h.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(h[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=g.clientWidth,"end"==c&&(h.marginLeft=-k+"px"),"middle"==c&&(h.marginLeft=-(k/2)+
"px",h.textAlign="center"),"start"==c&&(h.marginLeft="0px")),"fill"==b&&(h.color=c),"font-weight"==b&&(h.fontWeight=c));if(h=a.children)for(k=0;k<h.length;k++)h[k].setAttr(b,c);if("shape"==f){"cs"==b&&(g.style.width="100px",g.style.height="100px",g.setAttribute("coordsize",c));"d"==b&&g.setAttribute("path",this.svgPathToVml(c));"dd"==b&&g.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(h="solid",0<c&&3>c&&(h="dot"),3<=c&&6>=c&&(h="dash"),6<c&&(h="longdash"),e?f.dashstyle=h:f.setAttribute("dashstyle",h));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?g.arcSize=c+"%":g.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},text:function(a,b,c){var e=new d.AmDObject("text",this.D),g=e.node;g.style.whiteSpace="pre";g.innerHTML=a;this.D.addToContainer(g,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,g=a.offsetHeight,f;if(a.hasChildNodes()){var h,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(h)?h=m:m<h&&(h=m));var n=f.y;isNaN(n)||(isNaN(k)?k=n:n<k&&(k=n));m=f.width+m;isNaN(m)||(d=Math.max(d,m));f=f.height+n;isNaN(f)||(g=Math.max(g,f))}0>h&&(b+=h);0>k&&(c+=k)}return{x:b,y:c,width:d,height:g}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,g=e.style;"text"==a.type&&(c-=d.removePx(g.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(g.width)/2,c-=d.removePx(g.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,g;for(g=0;g<b.length;g++){var f=b[g],h=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==h&&(a+=" m "+l);"L"==h&&(a+=" l "+l);"Z"==h&&(a+=" x e");if("Q"==h){var m=c.length,n=c[m-1],q=k[0],p=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);n=d(n/3+2/3*p);q=d(2/3*q+l/3);p=d(2/3*p+t/3);a+=" c "+c+","+n+","+q+","+p+","+l+","+t}"C"==h&&(a+=" c "+k[0]+","+k[1]+","+k[2]+","+k[3]+","+k[4]+","+k[5]);"A"==h&&(a+=" wa "+
f);"B"==h&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,g){var f=a.node,h=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;h.animate(a,"left",f.offsetLeft,b[0],d,g,"px");h.animate(a,"top",k,c,d,g,"px")}},clipRect:function(a,b,c,d,g){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=g+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+g)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=1;c=b*Math.PI/180;var g=Math.cos(c),f=Math.sin(c),h=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=h+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+g+"', M12='"+-f+"', M21='"+f+"', M22='"+g+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var g="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)g+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(g+=",");a=a.fill;90==d?d=0:270==d?d=180:180==d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),a.setAttribute("angle",d));g&&(a.colors.value=g)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){a.onselectstart=function(){return!1};a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var g="none";b.color&&(g=b.color);c.fillColor=g;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type","tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,g){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:g};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,g=c.frame+1,f=c.obj,h=c.attribute,k,l,m;if(g<=e){c.frame++;if("translate"==h){k=c.from.split(",");h=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);m=0===m-h?m:Math.round(d[c.effect](0,g,h,m-h,e));c=0===l-k?l:Math.round(d[c.effect](0,g,k,l-k,e));h="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,g,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(f,h,c)}else"translate"==h?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,h,k)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,g){var f=a.node,h=a.clipPath;h&&this.D.remove(h);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),h=d.getUniqueId(),f.setAttribute("id",h),this.D.rect(b,c,e,g,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var g=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[f]));h.setAttribute("y",(g+2)*f+Math.round(g/2));h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",Math.round(g/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},move:function(a,b,c,d){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var g=a.node,f=a.grad;f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var h=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?h=100:0===e&&(k=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)h=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),h.setAttribute("offset",k+"%"),h.setAttribute("stop-color",c[e]),b.appendChild(h);g.parentNode.appendChild(b);c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);g.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var g=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),h=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",h);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(k,0,0,e,l,f).translate(c,m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);g.setAttribute("fill","url("+k+h+")");a.patternNode=f;g.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,g=a.divRealHeight,f=this.div,h=this.legendData;this.data&&(h=this.combineLegend?this.legendData.concat(this.data):this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==b?(c=f.offsetWidth,g=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,g=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=g,b.setSize(c,g),b.addDefs(a)):b=new d.AmDraw(f,c,g,a);this.container=b;this.lx=0;this.ly=8;g=this.markerSize;g>this.fontSize&&(this.ly=g/2-1);0<g&&(this.lx+=g+this.markerLabelGap);this.titleWidth=0;if(g=this.title)g=d.text(this.container,g,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,g,"legend-title"),g.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=g.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,g=this.marginBottom,f=this.horizontalGap,h=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,q=k-c-b,p=0,t=0,r=this.container;this.set&&this.set.remove();var w=r.set();this.set=w;var z=r.set();w.push(z);var x=this.entries,u,A;for(A=0;A<x.length;A++){u=x[A].getBBox();var y=u.width;y>p&&(p=y);u=u.height;u>t&&(t=u)}var y=t=0,B=f,D=0,C=0;for(A=0;A<x.length;A++){var I=x[A];this.reversedOrder&&(I=x[x.length-A-1]);u=I.getBBox();var H;this.equalWidths?H=y*(p+n+this.markerLabelGap):(H=B,B=B+u.width+f+n);H+u.width>q&&0<A&&0!==y&&(t++,H=y=0,B=H+u.width+f+n,D=D+C+m,C=0);u.height>C&&(C=u.height);I.translate(H,D);y++;!isNaN(l)&&y>=l&&(y=0,t++,D=D+C+m,B=f,C=0);z.push(I)}u=z.getBBox();l=u.height+2*m-1;"left"==a||"right"==a?(n=u.width+2*f,k=n+b+c,h.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,c,"legend-bg");w.push(c);w.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(n-u.width)/2:"right"==this.align&&(b=f+n-u.width);z.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+g+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(h.style.top="0px");h.style.height=Math.round(e)+"px";r.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
g=a.markerType;g&&(e=!1);a.legendEntryWidth=b.markerSize;g||(g=b.markerType);var f=a.color,h=a.alpha;a.legendKeyColor&&(f=a.legendKeyColor());a.legendKeyAlpha&&(h=a.legendKeyAlpha());var k;!0===a.hidden&&(k=f=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var q=b.container,p=b.markerSize,t=0,r=0,w=p/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=q.set(),a.hidden||(f=a.lineColorR,k=a.bulletBorderColorR),t=d.line(q,[0,2*p],[p/2,p/2],f,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(f=a.bulletColorR),t=d.bullet(q,a.bullet,a.bulletSize,f,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(p+1,p/2),m.push(t)),w=0,t=p,r=p/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=f);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,f,a.lineAlpha,m,l,a.dashLength))w=p,m.translate(w,p/2);t=p}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=q.image(n,0,0,p,p);else{var z;isNaN(b.gradientRotation)||(z=180+b.gradientRotation);(m=b.createMarker(g,f,h,void 0,void 0,void 0,z,l))&&m.translate(p/2,p/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);q=q.set([m]);b.switchable&&a.switchable&&q.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,q,"legend-item-"+a.id);d.setCN(c,q,a.className,!0);k=b.switchType;var x;k&&"none"!=k&&0<p&&("x"==k?(x=b.createX(),x.translate(p/2,p/2)):x=b.createV(),x.dItem=a,!0!==a.hidden?"x"==k?x.hide():x.show():"x"!=k&&x.hide(),b.switchable||x.hide(),b.addListeners(x,a),a.legendSwitch=x,q.push(x),d.setCN(c,x,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=f);!0===a.hidden&&(k=b.markerDisabledColor);f=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(q.setAttr("tabindex",b.tabIndex),q.setAttr("role","menuitem"),q.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(q,l));l=b.fontSize;m&&(p<=l&&(p=p/2+b.ly-l/2+(l+2-p)/2-r,m.translate(w,p),x&&x.translate(x.x,p)),a.legendEntryWidth=m.getBBox().width);var u;f&&(f=d.fixBrakes(f),a.legendTextReal=f,u=b.labelWidth,u=isNaN(u)?d.text(b.container,f,k,c.fontFamily,l,"start"):d.wrappedText(b.container,f,k,c.fontFamily,l,"start",!1,u,0),d.setCN(c,u,"legend-label"),
u.translate(b.lx+t,b.ly),q.push(u),b.labelDx=t,c=u.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=q;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=u;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var g=b.maxLabelWidth;b.forceWidth&&(g=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(g=a.legendLabel.getBBox().width);var f=g;if(b.valueText&&0<b.valueWidth){var h=b.color;b.useMarkerColorForValues&&(h=a.color,a.legendKeyColor&&(h=a.legendKeyColor()));!0===a.hidden&&(h=b.markerDisabledColor);var k=b.valueText,g=g+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(g-=b.valueWidth,l="start");h=d.text(b.container,k,h,b.chart.fontFamily,c,l);d.setCN(e,h,"legend-value");h.translate(g,b.ly);b.entries[b.index].push(h);f+=b.valueWidth+2*b.markerLabelGap;h.dItem=a;b.valueLabels.push(h)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,g,f,h,k,l){var m=this.markerSize,n=this.container;g||(g=this.markerBorderColor);g||
(g=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,g,f,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var g=a[c],f=g.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var h=" ";if(e)f.value?g.text(f.value):g.text("");else{var k=null;if(void 0!==f.type){var k=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);k?(h=this.valueText,f.legendValueText&&(h=f.legendValueText),f.legendValueTextR&&(h=f.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),h=b.formatPeriodString(l,f))}else h=b.formatString(this.valueText,f);l=f;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?n=b.getBalloonColor(f,k):f.legendKeyColor&&(n=f.legendKeyColor());f.legendColorFunction&&(n=f.legendColorFunction(l,h,f.periodDataItem,f.periodPercentDataItem));g.text(h);if(!f.pattern&&(this.useMarkerColorForValues&&g.setAttr("fill",n),this.useMarkerColorForLabels)){if(g=f.legendMarker)g.setAttr("fill",n),g.setAttr("stroke",n);(g=f.legendLabel)&&(f.hidden?g.setAttr("fill",this.markerDisabledColor):g.setAttr("fill",n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var g,f,h,k,l,m,n;d.useUTC?(g=a.getUTCFullYear(),f=a.getUTCMonth(),h=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds(),a=a.getUTCDay()):(g=a.getFullYear(),f=a.getMonth(),h=a.getDate(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds(),a=a.getDay());switch(b){case"YYYY":g=Math.floor(g/c)*c;f=0;h=1;n=m=l=k=0;break;case"MM":f=Math.floor(f/c)*c;h=1;n=m=l=k=0;break;case"WW":h=a>=e?h-a+e:h-(7+a)+e;n=m=l=k=0;break;case"DD":n=m=l=k=0;break;case"hh":k=Math.floor(k/c)*c;n=m=l=0;break;case"mm":l=Math.floor(l/c)*c;n=m=0;break;case"ss":m=Math.floor(m/c)*c;n=0;break;case"fff":n=Math.floor(n/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(g,f,h),a.setUTCHours(k,l,m,n)):a=new Date(g,f,h,k,l,m,n);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case"YYYY":c=316224E5;break;case"MM":c=26784E5;break;case"WW":c=6048E5;break;case"DD":c=864E5;break;case"hh":c=36E5;break;case"mm":c=6E4;break;case"ss":c=1E3;break;case"fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],g=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(g=!1));var f=b,h,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=1);for(l=0;l<e.length;l++)if(h=e[l].pattern,k=e[l].period,-1!=b.indexOf(h)){var m=d.getFromDateString(h,a,f);b=b.replace(h,"");if("KK"==h||"K"==h||"LL"==h||"L"==h)g||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,g,f,h,k,l,m,n,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),g=a.getUTCMonth(),f=a.getUTCDate(),h=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds()):(e=a.getFullYear(),g=a.getMonth(),f=a.getDate(),h=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds());var p=String(e).substr(2,2),t="0"+h;b=b.replace(/W/g,q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),g=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=g+1;9>g&&(a="0"+a);q=f;10>f&&(q="0"+f);var w=r;10>w&&(w="0"+w);b=b.replace(/HH/g,w);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/KK/g,w);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/LL/g,w);b=b.replace(/L/g,r);r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=n;10>m?m="00"+m:100>m&&(m="0"+m);l=n;10>l&&(l="00"+l);b=b.replace(/A/g,"@A@");b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,n);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,p);b=b.replace(/@XXXX@/g,c.monthNames[g]);b=b.replace(/@XXX@/g,c.shortMonthNames[g]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,g+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[h]);b=b.replace(/@PPP@/g,c.shortDayNames[h]);b=b.replace(/@PP@/g,t);b=b.replace(/@P@/g,h);return b=12>k?b.replace(/@A@/g,c.amString):b.replace(/@A@/g,c.pmString)};d.changeDate=function(a,b,c,e,g){if(d.useUTC)return d.changeUTCDate(a,b,c,e,g);var f=-1;void 0===e&&(e=!0);void 0===g&&(g=!1);!0===e&&(f=1);switch(b){case"YYYY":a.setFullYear(a.getFullYear()+c*f);e||g||a.setDate(a.getDate()+1);break;case"MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||g||a.setDate(a.getDate()+1);break;case"DD":a.setDate(a.getDate()+c*f);break;case"WW":a.setDate(a.getDate()+c*f*7);break;case"hh":a.setHours(a.getHours()+c*f);break;case"mm":a.setMinutes(a.getMinutes()+
c*f);break;case"ss":a.setSeconds(a.getSeconds()+c*f);break;case"fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,g){var f=-1;void 0===d&&(d=!0);void 0===g&&(g=!1);!0===d&&(f=1);switch(b){case"YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||g||a.setUTCDate(a.getUTCDate()+1);break;case"MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||g||a.setUTCDate(a.getUTCDate()+1);break;case"DD":a.setUTCDate(a.getUTCDate()+
c*f);break;case"WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case"hh":a.setUTCHours(a.getUTCHours()+c*f);break;case"mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case"ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case"fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();(function(){var k=window.AmCharts;k.AmSlicedChart=k.Class({inherits:k.AmChart,construct:function(a){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice");k.AmSlicedChart.base.construct.call(this,a);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.alpha=1;this.groupPercent=0;this.groupedTitle="Other";this.groupedPulled=!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.hoverAlpha=1;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startAlpha=0;this.startDuration=1;this.startEffect="bounce";this.sequencedAnimation=!0;this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelTickColor="#000000";this.labelTickAlpha=.2;this.hideLabelsPercent=0;this.urlTarget="_self";this.autoMarginOffset=10;this.gradientRatio=[];this.maxLabelWidth=200;this.accessibleLabel="[[title]]: [[percents]]% [[value]] [[description]]";k.applyTheme(this,a,"AmSlicedChart")},initChart:function(){k.AmSlicedChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type,c=a.dataItem,d=this.legend;if(c.wedge&&c){var g=c.hidden;a=a.event;switch(b){case"clickMarker":g||d.switchable||this.clickSlice(c,a);break;case"clickLabel":g||this.clickSlice(c,a,!1);break;case"rollOverItem":g||this.rollOverSlice(c,!1,a);break;case"rollOutItem":g||this.rollOutSlice(c,a);break;case"hideItem":this.hideSlice(c,a);break;case"showItem":this.showSlice(c,a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();var a=this.legend;a&&a.invalidateSize()},addEventListeners:function(a,b){var c=this;a.mouseover(function(a){c.rollOverSlice(b,!0,a)}).mouseout(function(a){c.rollOutSlice(b,a)}).touchend(function(a){c.rollOverSlice(b,a)}).mouseup(function(a){c.clickSlice(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)}).focus(function(a){c.rollOverSlice(b,a)}).blur(function(a){c.rollOutSlice(b,a)})},formatString:function(a,b,c){a=k.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);var d=this.pf.precision;isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec);a=k.formatValue(a,b,["percents"],this.pf);a=k.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description});this.pf.precision=d;-1!=a.indexOf("[[")&&(a=k.formatDataContextValue(a,b.dataContext));a=c?k.fixNewLines(a):k.fixBrakes(a);return a=k.cleanFromEmpty(a)},startSlices:function(){var a;for(a=0;a<this.chartData.length;a++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(a):this.startSlice(this.chartData[a])},setStartTO:function(a){var b=this;a=setTimeout(function(){b.startSequenced.call(b)},b.startDuration/
b.chartData.length*500*a);b.timeOuts.push(a)},pullSlices:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++){var d=b[c];d.pulled&&this.pullSlice(d,1,a)}},startSequenced:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,c=this.startDuration,d=a.labelSet;b&&0<c&&(0<a.alpha&&b.show(),b.translate(a.startX,a.startY),this.animatable.push(b),b.animate({opacity:1,translate:"0,0"},c,this.startEffect));d&&0<c&&(0<a.alpha&&d.show(),d.translate(a.startX,a.startY),d.animate({opacity:1,translate:"0,0"},c,this.startEffect))},showLabels:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(0<c.alpha){var d=c.label;d&&d.show();(c=c.tick)&&c.show()}}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.invalidateVisibility()},hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);if(!a.hidden){this.pullOnHover&&this.pullSlice(a,1);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var d=a.balloonX,g=a.balloonY;a.pulled&&(d+=a.pullX,g+=a.pullY);var f=this.formatString(this.balloonText,a,!0),h=this.balloonFunction;h&&(f=h(a,f));h=k.adjustLuminosity(a.color,-.15);f?this.showBalloon(f,h,b,d,g):this.hideBalloon();0===a.value&&this.hideBalloon();this.fire({type:"rollOverSlice",dataItem:a,chart:this,event:c})}},rollOutSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:1});this.hideBalloon();this.fire({type:"rollOutSlice",dataItem:a,chart:this,event:b})},clickSlice:function(a,b,c){this.checkTouchDuration(b)&&(isNaN(a)||(a=this.chartData[a]),a.pulled?this.pullSlice(a,0):this.pullSlice(a,1),k.getURL(a.url,this.urlTarget),c||this.fire({type:"clickSlice",dataItem:a,chart:this,event:b}))},handleRightClick:function(a,b){isNaN(a)||(a=this.chartData[a]);this.fire({type:"rightClickSlice",dataItem:a,chart:this,event:b})},drawTicks:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(c.label&&!c.skipTick){var d=c.ty,d=k.line(this.container,[c.tx0,c.tx,c.tx2],[c.ty0,d,d],this.labelTickColor,this.labelTickAlpha);k.setCN(this,d,this.type+"-tick");k.setCN(this,d,c.className,!0);c.tick=d;c.wedge.push(d);"AmFunnelChart"==this.cname&&d.toBack()}}},initialStart:function(){var a=this,b=a.startDuration,c=setTimeout(function(){a.showLabels.call(a)},1E3*b);a.timeOuts.push(c);a.chartCreated?a.pullSlices(!0):(a.startSlices(),0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices(!0))},pullSlice:function(a,b,c){var d=this.pullOutDuration;!0===c&&(d=0);if(c=a.wedge)0<d?(c.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect),a.labelSet&&a.labelSet.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect)):(a.labelSet&&a.labelSet.translate(b*a.pullX,b*a.pullY),c.translate(b*a.pullX,b*a.pullY));1==b?(a.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",dataItem:a,chart:this});this.fire(a)},pullInAll:function(a){var b=this.chartData,c;for(c=0;c<this.chartData.length;c++)c!=a&&b[c].pulled&&this.pullSlice(b[c],0)},pullOutAll:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha);if(void 0!==b){var c=b.length,d=0,g,f,h;for(g=0;g<c;g++){f={};var e=b[g];f.dataContext=e;null!==e[this.valueField]&&(f.value=Number(e[this.valueField]));(h=e[this.titleField])||(h="");f.title=h;f.pulled=k.toBoolean(e[this.pulledField],!1);(h=e[this.descriptionField])||(h="");f.description=h;f.labelRadius=Number(e[this.labelRadiusField]);f.switchable=!0;f.className=e[this.classNameField];f.url=e[this.urlField];h=e[this.patternField];!h&&this.patterns&&(h=this.patterns[g]);f.pattern=h;f.visibleInLegend=k.toBoolean(e[this.visibleInLegendField],!0);h=e[this.alphaField];f.alpha=void 0!==h?Number(h):this.alpha;h=e[this.colorField];void 0!==h&&(f.color=h);f.labelColor=k.toColor(e[this.labelColorField]);d+=f.value;f.hidden=!1;a[g]=f}for(g=b=0;g<c;g++)f=a[g],f.percents=f.value/d*100,f.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/d*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}}));c=this.baseColor;c||(c=this.pieBaseColor);d=this.brightnessStep;d||(d=this.pieBrightnessStep);for(g=0;g<a.length;g++)c?h=k.adjustLuminosity(c,g*d/100):(h=this.colors[g],void 0===h&&(h=k.randomColor())),void 0===a[g].color&&(a[g].color=h);this.recalculatePercents()}},recalculatePercents:function(){var a=this.chartData,b=0,c,d;for(c=0;c<a.length;c++)d=a[c],!d.hidden&&0<d.value&&(b+=d.value);for(c=0;c<a.length;c++)d=this.chartData[c],d.percents=!d.hidden&&0<d.value?100*d.value/b:0},removeSmallSlices:function(){var a=this.chartData,b;for(b=a.length-1;0<=b;b--)a[b].percents<this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();for(var b=0;b<a.chartData.length;b++){var c=a.chartData[b];c.started=!1;var d=c.wedge;d&&(d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY));if(d=c.labelSet)d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY)}b=a.startDuration;0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices()},measureMaxLabel:function(){var a=this.chartData,b=0,c;for(c=0;c<a.length;c++){var d=a[c],g=this.formatString(this.labelText,d),f=this.labelFunction;f&&(g=f(d,g));d=k.text(this.container,g,this.color,this.fontFamily,this.fontSize);g=d.getBBox().width;g>b&&(b=g);d.remove()}return b}})})();(function(){var k=window.AmCharts;k.AmPieChart=k.Class({inherits:k.AmSlicedChart,construct:function(a){this.type="pie";k.AmPieChart.base.construct.call(this,a);this.cname="AmPieChart";this.pieBrightnessStep=30;this.minRadius=10;this.depth3D=0;this.startAngle=90;this.angle=this.innerRadius=0;this.startRadius="500%";this.pullOutRadius="20%";this.labelRadius=20;this.labelText="[[title]]: [[percents]]%";this.balloonText="[[title]]: [[percents]]% ([[value]])\n[[description]]";this.previousScale=1;this.adjustPrecision=!1;this.gradientType="radial";k.applyTheme(this,a,this.cname)},drawChart:function(){k.AmPieChart.base.drawChart.call(this);var a=this.chartData;if(k.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){k.VML&&(this.startAlpha=1);var b=this.startDuration,c=this.container,d=this.updateWidth();this.realWidth=d;var g=this.updateHeight();this.realHeight=g;var f=k.toCoordinate,h=f(this.marginLeft,d),e=f(this.marginRight,d),z=f(this.marginTop,g)+this.getTitleHeight(),n=f(this.marginBottom,g)+this.depth3D,A,B,m,w=k.toNumber(this.labelRadius),q=this.measureMaxLabel();q>this.maxLabelWidth&&(q=this.maxLabelWidth);this.labelText&&this.labelsEnabled||(w=q=0);A=void 0===this.pieX?(d-h-e)/2+h:f(this.pieX,this.realWidth);B=void 0===this.pieY?(g-z-n)/2+z:f(this.pieY,g);m=f(this.radius,d,g);m||(d=0<=w?d-h-e-2*q:d-h-e,g=g-z-n,m=Math.min(d,g),g<d&&(m/=1-this.angle/90,m>d&&(m=d)),g=k.toCoordinate(this.pullOutRadius,m),m=(0<=w?m-1.8*(w+g):m-1.8*g)/2);m<this.minRadius&&(m=this.minRadius);g=f(this.pullOutRadius,m);
z=k.toCoordinate(this.startRadius,m);f=f(this.innerRadius,m);f>=m&&(f=m-1);n=k.fitToBounds(this.startAngle,0,360);0<this.depth3D&&(n=270<=n?270:90);n-=90;360<n&&(n-=360);d=m-m*this.angle/90;for(h=q=0;h<a.length;h++)e=a[h],!0!==e.hidden&&(q+=k.roundTo(e.percents,this.pf.precision));q=k.roundTo(q,this.pf.precision);this.tempPrec=NaN;this.adjustPrecision&&100!=q&&(this.tempPrec=this.pf.precision+1);for(var E,h=0;h<a.length;h++)if(e=a[h],!0!==e.hidden&&(this.showZeroSlices||0!==e.percents)){var r=360*e.percents/100,q=Math.sin((n+r/2)/180*Math.PI),C=d/m*-Math.cos((n+r/2)/180*Math.PI),p=this.outlineColor;p||(p=e.color);var u=this.alpha;isNaN(e.alpha)||(u=e.alpha);p={fill:e.color,stroke:p,"stroke-width":this.outlineThickness,"stroke-opacity":this.outlineAlpha,"fill-opacity":u};e.url&&(p.cursor="pointer");p=k.wedge(c,A,B,n,r,m,d,f,this.depth3D,p,this.gradientRatio,e.pattern,this.path,this.gradientType);k.setCN(this,p,"pie-item");k.setCN(this,p.wedge,"pie-slice");k.setCN(this,p,e.className,!0);this.addEventListeners(p,
e);e.startAngle=n;a[h].wedge=p;0<b&&(this.chartCreated||p.setAttr("opacity",this.startAlpha));e.ix=q;e.iy=C;e.wedge=p;e.index=h;e.label=null;u=c.set();if(this.labelsEnabled&&this.labelText&&e.percents>=this.hideLabelsPercent){var l=n+r/2;0>l&&(l+=360);360<l&&(l-=360);var t=w;isNaN(e.labelRadius)||(t=e.labelRadius,0>t&&(e.skipTick=!0));var r=A+q*(m+t),D=B+C*(m+t),x,v=0;isNaN(E)&&350<l&&1<a.length-h&&(E=h-1+Math.floor((a.length-h)/2));if(0<=t){var y;90>=l&&0<=l?(y=0,x="start",v=8):90<=l&&180>l?(y=1,
x="start",v=8):180<=l&&270>l?(y=2,x="end",v=-8):270<=l&&354>=l?(y=3,x="end",v=-8):354<=l&&(h>E?(y=0,x="start",v=8):(y=3,x="end",v=-8));e.labelQuarter=y}else x="middle";l=this.formatString(this.labelText,e);(t=this.labelFunction)&&(l=t(e,l));t=e.labelColor;t||(t=this.color);""!==l&&(l=k.wrappedText(c,l,t,this.fontFamily,this.fontSize,x,!1,this.maxLabelWidth),k.setCN(this,l,"pie-label"),k.setCN(this,l,e.className,!0),l.translate(r+1.5*v,D),0>w&&(l.node.style.pointerEvents="none"),l.node.style.cursor="default",e.ty=D,e.textX=r+1.5*v,u.push(l),this.axesSet.push(u),e.labelSet=u,e.label=l,this.addEventListeners(u,e));e.tx=r;e.tx2=r+v;e.tx0=A+q*m;e.ty0=B+C*m}r=f+(m-f)/2;e.pulled&&(r+=g);this.accessible&&this.accessibleLabel&&(D=this.formatString(this.accessibleLabel,e),this.makeAccessible(p,D));void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex);e.balloonX=q*r+A;e.balloonY=C*r+B;e.startX=Math.round(q*z);e.startY=Math.round(C*z);e.pullX=Math.round(q*g);e.pullY=Math.round(C*g);this.graphsSet.push(p);
if(0===e.alpha||0<b&&!this.chartCreated)p.hide(),u&&u.hide();n+=360*e.percents/100;360<n&&(n-=360)}0<w&&this.arrangeLabels();this.pieXReal=A;this.pieYReal=B;this.radiusReal=m;this.innerRadiusReal=f;0<w&&this.drawTicks();this.initialStart();this.setDepths()}(a=this.legend)&&a.invalidateSize()}else this.cleanChart();this.dispDUpd()},setDepths:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b],d=c.wedge,c=c.startAngle;0<=c&&180>c?d.toFront():180<=c&&d.toBack()}},arrangeLabels:function(){var a=this.chartData,b=a.length,c,d;for(d=b-1;0<=d;d--)c=a[d],0!==c.labelQuarter||c.hidden||this.checkOverlapping(d,c,0,!0,0);for(d=0;d<b;d++)c=a[d],1!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,1,!1,0);for(d=b-1;0<=d;d--)c=a[d],2!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,2,!0,0);for(d=0;d<b;d++)c=a[d],3!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,3,!1,0)},checkOverlapping:function(a,b,c,d,g){var f,h,e=this.chartData,k=e.length,n=b.label;if(n){if(!0===d)for(h=a+1;h<k;h++)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=k);else for(h=a-1;0<=h;h--)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=0);!0===f&&200>g&&isNaN(b.labelRadius)&&(f=b.ty+3*b.iy,b.ty=f,n.translate(b.textX,f),this.checkOverlapping(a,b,c,d,g+1))}},checkOverlappingReal:function(a,b,c){var d=!1,g=a.label,f=b.label;a.labelQuarter!=c||a.hidden||b.hidden||!f||(g=g.getBBox(),c={},c.width=g.width,c.height=g.height,c.y=a.ty,c.x=a.tx,a=f.getBBox(),f={},f.width=a.width,f.height=a.height,f.y=b.ty,f.x=b.tx,k.hitTest(c,f)&&(d=!0));return d}})})();AmCharts.themes.light={themeName:"light",AmChart:{color:"#000000",backgroundColor:"#FFFFFF"},AmCoordinateChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"]},AmStockChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"]},AmSlicedChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"],outlineAlpha:1,outlineThickness:2,labelTickColor:"#000000",labelTickAlpha:0.3},AmRectangularChart:{zoomOutButtonColor:'#000000',zoomOutButtonRollOverAlpha:0.15,zoomOutButtonImage:"lens"},AxisBase:{axisColor:"#000000",axisAlpha:0.3,gridAlpha:0.1,gridColor:"#000000"},ChartScrollbar:{backgroundColor:"#000000",backgroundAlpha:0.12,graphFillAlpha:0.5,graphLineAlpha:0,selectedBackgroundColor:"#FFFFFF",selectedBackgroundAlpha:0.4,gridAlpha:0.15},ChartCursor:{cursorColor:"#000000",color:"#FFFFFF",cursorAlpha:0.5},AmLegend:{color:"#000000"},AmGraph:{lineAlpha:0.9},GaugeArrow:{color:"#000000",alpha:0.8,nailAlpha:0,innerRadius:"40%",nailRadius:15,startWidth:15,borderAlpha:0.8,nailBorderAlpha:0},GaugeAxis:{tickColor:"#000000",tickAlpha:1,tickLength:15,minorTickLength:8,axisThickness:3,axisColor:'#000000',axisAlpha:1,bandAlpha:0.8},TrendLine:{lineColor:"#c03246",lineAlpha:0.8},AreasSettings:{alpha:0.8,color:"#67b7dc",colorSolid:"#003767",unlistedAreasAlpha:0.4,unlistedAreasColor:"#000000",outlineColor:"#FFFFFF",outlineAlpha:0.5,outlineThickness:0.5,rollOverColor:"#3c5bdc",rollOverOutlineColor:"#FFFFFF",selectedOutlineColor:"#FFFFFF",selectedColor:"#f15135",unlistedAreasOutlineColor:"#FFFFFF",unlistedAreasOutlineAlpha:0.5},LinesSettings:{color:"#000000",alpha:0.8},ImagesSettings:{alpha:0.8,labelColor:"#000000",color:"#000000",labelRollOverColor:"#3c5bdc"},ZoomControl:{buttonFillAlpha:0.7,buttonIconColor:"#a7a7a7"},SmallMap:{mapColor:"#000000",rectangleColor:"#f15135",backgroundColor:"#FFFFFF",backgroundAlpha:0.7,borderThickness:1,borderAlpha:0.8},PeriodSelector:{color:"#000000"},PeriodButton:{color:"#000000",background:"transparent",opacity:0.7,border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",boxSizing:"border-box"},PeriodButtonSelected:{color:"#000000",backgroundColor:"#b9cdf5",border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",opacity:1,boxSizing:"border-box"},PeriodInputField:{color:"#000000",background:"transparent",border:"1px solid rgba(0, 0, 0, .3)",outline:"none"},DataSetSelector:{color:"#000000",selectedBackgroundColor:"#b9cdf5",rollOverBackgroundColor:"#a8b0e4"},DataSetCompareList:{color:"#000000",lineHeight:"100%",boxSizing:"initial",webkitBoxSizing:"initial",border:"1px solid rgba(0, 0, 0, .3)"},DataSetSelect:{border:"1px solid rgba(0, 0, 0, .3)",outline:"none"}};!function(){"use strict"
function t(t,n,i){return t*(i-n)+n}function n(t){var n=1-t
return n*=n*n*n,1-n}function i(t,n,i,e){this._object=t,this._key=n,this._from=i,this._to=e}function e(t,i,e,r,a){this._finished=!1,this._startTime=null,this._duration=t,this._easing=null==i?n:i,this._onComplete=e,this._tweens=r,this._chart=a}function r(){this._animating=!1,this._animations=[],this._onBeforeFrames=[],this._onAfterFrames=[]
var t=this
this._raf=function(n){t._onFrame(n)}}function a(t){return t!==t}function o(t,n){for(var i=0;i<t.length;++i)n(t[i])}function u(t,n){for(var i=0;i<t.length;++i)if(t[i]===n)return
t.push(n)}function l(t,n,i){n[i]||(n[i]=!0,t.push(i))}function s(t,n,i,e){o(e,function(e){var r=i[e]
null!=r&&l(t,n,r)})}function h(t,n,i){s(n,i,t,["alphaField","valueField"])}function f(t,n,i){h(t,n,i)}function m(t,n,i){h(t,n,i),s(n,i,t,["labelRadiusField"])}function c(t,n,i){s(n,i,t,["alphaField","bulletSizeField","closeField","dashLengthField","errorField","highField","lowField","openField","valueField"])}function p(t,n,i){c(t,n,i),s(n,i,t,["xField","yField"])}function _(t,n,i,e){o(t,function(t){e(t,n,i)})}function d(t,n,i){s(n,i,t,["widthField"])}function v(t){var n=[],i={}
return"funnel"===t.type?f(t,n,i):"pie"===t.type?m(t,n,i):"serial"===t.type?(d(t.categoryAxis,n,i),_(t.graphs,n,i,c)):"radar"===t.type?_(t.graphs,n,i,c):"xy"===t.type&&_(t.graphs,n,i,p),n}function y(t){var n={}
return("serial"===t.type||"radar"===t.type||"xy"===t.type)&&o(t.valueAxes,function(t){if(null==n[t.id]){n[t.id]={minimum:t.minimum,maximum:t.maximum}
var i,e=t.minRR,r=t.maxRR,a=r-e
i=0===a?Math.pow(10,Math.floor(Math.log(Math.abs(r))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,null==t.minimum&&(t.minimum=Math.floor(e/i)*i-i),null==t.maximum&&(t.maximum=Math.ceil(r/i)*i+i)}}),n}function F(t,n){("serial"===t.type||"radar"===t.type||"xy"===t.type)&&o(t.valueAxes,function(t){var i=n[t.id]
null!=i&&(null==i.minimum&&delete t.minimum,null==i.maximum&&delete t.maximum)})}function g(t){return"funnel"===t.type||"pie"===t.type?t.titleField:"serial"===t.type||"radar"===t.type?t.categoryField:void 0}function x(t,n){var i=t[n]
return null==i?null:(i=+i,a(i)?null:i)}function M(t,n){var i=t[n]
return null==i?null:""+i}function w(t,n){var i={}
return o(t,function(t){var e=M(t,n)
null!=e&&(i[e]=t)}),i}function A(t,n,e,r){var a=[]
return o(t,function(t){var u=M(t,n)
if(null!=u&&u in e){var l=e[u]
o(r,function(n){var e=x(l,n),r=x(t,n)
null!=e&&null!=r&&a.push(new i(t,n,e,r))})}}),a}function T(t,n,e){for(var r=[],a=Math.min(t.length,n.length),u=0;a>u;++u){var l=t[u],s=n[u]
o(e,function(t){var n=x(l,t),e=x(s,t)
null!=n&&null!=e&&r.push(new i(s,t,n,e))})}return r}function b(t,n){if("xy"===t.type){var i=v(t)
return T(t.dataProvider,n,i)}var e=g(t),i=v(t),r=w(t.dataProvider,e)
return A(n,e,r,i)}function k(t,n){function i(){n.fixedMinMax&&F(r,o),null!=n.complete&&n.complete()}var r=this,a=b(r,t)
if(n.fixedMinMax)var o=y(r)
r.dataProvider=t
var u=new e(n.duration,n.easing,i,a,r)
return C.animate(u),u}if("undefined"==typeof requestAnimationFrame)var R=1e3/60,B=function(t){setTimeout(function(){t((new Date).getTime())},R)}
else var B=requestAnimationFrame
i.prototype.interpolate=function(n){this._object[this._key]=t(n,this._from,this._to)},e.prototype.cancel=function(){this._finished=!0,this._startTime=null,this._duration=null,this._easing=null,this._onComplete=null,this._tweens=null,this._chart=null},e.prototype._onFrame=function(t){if(this._finished)return!0
if(null===this._startTime)return this._startTime=t,!1
var n=t-this._startTime
return n<this._duration?(this._tick(n/this._duration),!1):(this._end(1),this.cancel(),!0)},e.prototype._tick=function(t){t=this._easing(t)
for(var n=this._tweens,i=0;i<n.length;++i)n[i].interpolate(t)
u(D,this._chart)},e.prototype._end=function(t){this._tick(t),this._onComplete()},r.prototype.animate=function(t){this._animations.push(t),this._animating||(this._animating=!0,B(this._raf))},r.prototype.onBeforeFrame=function(t){this._onBeforeFrames.push(t)},r.prototype.onAfterFrame=function(t){this._onAfterFrames.push(t)},r.prototype._onFrame=function(t){for(var n=this._onBeforeFrames,i=0;i<n.length;++i)n[i](t)
for(var e=this._animations,i=0;i<e.length;++i){var r=e[i]
r._onFrame(t)&&(e.splice(i,1),--i)}for(var a=this._onAfterFrames,i=0;i<a.length;++i)a[i](t)
0===e.length?this._animating=!1:B(this._raf)}
var C=new r,D=[]
C.onAfterFrame(function(){for(var t=0;t<D.length;++t)D[t].validateData()
D.length=0}),AmCharts.addInitHandler(function(t){t.animateData=k},["funnel","pie","serial","radar","xy"])}()
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});function escapeHtml(text) {
    'use strict';
    return text.replace(/[\"&<>]/g, function (a) {
        return { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' }[a];
    });
}
/* perfect-scrollbar v0.6.15 */ ! function t(e, n, r) {
    function o(i, s) {
        if (!n[i]) {
            if (!e[i]) {
                var a = "function" == typeof require && require;
                if (!s && a) return a(i, !0);
                if (l) return l(i, !0);
                var c = new Error("Cannot find module '" + i + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                var n = e[i][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[i].exports
    }
    for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";

        function r(t) {
            t.fn.perfectScrollbar = function(t) {
                return this.each(function() {
                    if ("object" == typeof t || "undefined" == typeof t) {
                        var e = t;
                        l.get(this) || o.initialize(this, e)
                    } else {
                        var n = t;
                        "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
                    }
                })
            }
        }
        var o = t("../main"),
            l = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r);
        else {
            var i = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof i && r(i)
        }
        e.exports = r
    }, {
        "../main": 7,
        "../plugin/instances": 18
    }],
    2: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "),
                r = n.indexOf(e);
            r >= 0 && n.splice(r, 1), t.className = n.join(" ")
        }
        n.add = function(t, e) {
            t.classList ? t.classList.add(e) : r(t, e)
        }, n.remove = function(t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function(t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }, {}],
    3: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function l(t, e) {
            for (var n in e) {
                var r = e[n];
                "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
            }
            return t
        }
        var i = {};
        i.e = function(t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, i.appendTo = function(t, e) {
            return e.appendChild(t), t
        }, i.css = function(t, e, n) {
            return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
        }, i.matches = function(t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, i.remove = function(t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, i.queryChildren = function(t, e) {
            return Array.prototype.filter.call(t.childNodes, function(t) {
                return i.matches(t, e)
            })
        }, e.exports = i
    }, {}],
    4: [function(t, e, n) {
        "use strict";
        var r = function(t) {
            this.element = t, this.events = {}
        };
        r.prototype.bind = function(t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, r.prototype.unbind = function(t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function(r) {
                return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
            }, this)
        }, r.prototype.unbindAll = function() {
            for (var t in this.events) this.unbind(t)
        };
        var o = function() {
            this.eventElements = []
        };
        o.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function(t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function(t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function() {
            for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
        }, o.prototype.once = function(t, e, n) {
            var r = this.eventElement(t),
                o = function(t) {
                    r.unbind(e, o), n(t)
                };
            r.bind(e, o)
        }, e.exports = o
    }, {}],
    5: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function(t, e, n) {
        "use strict";
        var r = t("./class"),
            o = t("./dom"),
            l = n.toInt = function(t) {
                return parseInt(t, 10) || 0
            },
            i = n.clone = function(t) {
                if (t) {
                    if (t.constructor === Array) return t.map(i);
                    if ("object" == typeof t) {
                        var e = {};
                        for (var n in t) e[n] = i(t[n]);
                        return e
                    }
                    return t
                }
                return null
            };
        n.extend = function(t, e) {
            var n = i(t);
            for (var r in e) n[r] = i(e[r]);
            return n
        }, n.isEditable = function(t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function(t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && r.remove(t, o)
            }
        }, n.outerWidth = function(t) {
            return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function(t, e) {
            r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
        }, n.stopScrolling = function(t, e) {
            r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            l = t("./plugin/update");
        e.exports = {
            initialize: o,
            update: l,
            destroy: r
        }
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(t, e, n) {
        "use strict";
        e.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }
            var r = function(t) {
                t.stopPropagation()
            };
            e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) {
                var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                    s = o > e.scrollbarYTop ? 1 : -1;
                i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
            }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) {
                var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                    s = o > e.scrollbarXLeft ? 1 : -1;
                i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n) {
                var o = r + n * e.railXRatio,
                    i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
                var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarX, "mousedown", function(n) {
                o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = r + n * e.railYRatio,
                    i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
                var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarY, "mousedown", function(n) {
                o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }
        var l = t("../../lib/helper"),
            i = t("../../lib/dom"),
            s = t("../instances"),
            a = t("../update-geometry"),
            c = t("../update-scroll");
        e.exports = function(t) {
            var e = s.get(t);
            r(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }
            var r = !1;
            e.event.bind(t, "mouseenter", function() {
                r = !0
            }), e.event.bind(t, "mouseleave", function() {
                r = !1
            });
            var i = !1;
            e.event.bind(e.ownerDocument, "keydown", function(c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
                    if (r || u) {
                        var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (d) {
                            if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                            else
                                for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                            if (o.isEditable(d)) return
                        }
                        var p = 0,
                            f = 0;
                        switch (c.which) {
                            case 37:
                                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                                break;
                            case 33:
                                f = 90;
                                break;
                            case 32:
                                f = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                f = -90;
                                break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                break;
                            default:
                                return
                        }
                        a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
                    }
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../../lib/dom"),
            i = t("../instances"),
            s = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }

            function r(t) {
                var e = t.deltaX,
                    n = -1 * t.deltaY;
                return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
            }

            function o(e, n) {
                var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (r) {
                    if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;
                    var o = r.scrollHeight - r.clientHeight;
                    if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;
                    var l = r.scrollLeft - r.clientWidth;
                    if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0
                }
                return !1
            }

            function s(s) {
                var c = r(s),
                    u = c[0],
                    d = c[1];
                o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
            }
            var a = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            e.event.bind(t, "scroll", function() {
                l(t)
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function r() {
                c || (c = setInterval(function() {
                    return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
                }, 50))
            }

            function a() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }
            var c = null,
                u = {
                    top: 0,
                    left: 0
                },
                d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() {
                t.contains(n()) ? d = !0 : (d = !1, a())
            }), e.event.bind(window, "mouseup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "keyup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "mousemove", function(e) {
                if (d) {
                    var n = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        l = {
                            left: t.offsetLeft,
                            right: t.offsetLeft + t.offsetWidth,
                            top: t.offsetTop,
                            bottom: t.offsetTop + t.offsetHeight
                        };
                    n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            r(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            function o(n, r) {
                var o = t.scrollTop,
                    l = t.scrollLeft,
                    i = Math.abs(n),
                    s = Math.abs(r);
                if (s > i) {
                    if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
                } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
                return !0
            }

            function a(e, n) {
                s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
            }

            function c() {
                w = !0
            }

            function u() {
                w = !1
            }

            function d(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function p(t) {
                return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
            }

            function f(t) {
                if (p(t)) {
                    Y = !0;
                    var e = d(t);
                    g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
                }
            }

            function h(t) {
                if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
                    var n = d(t),
                        r = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        },
                        l = r.pageX - g.pageX,
                        i = r.pageY - g.pageY;
                    a(l, i), g = r;
                    var s = (new Date).getTime(),
                        c = s - v;
                    c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function b() {
                !w && Y && (Y = !1, clearInterval(y), y = setInterval(function() {
                    return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
                }, 10))
            }
            var g = {},
                v = 0,
                m = {},
                y = null,
                w = !1,
                Y = !1;
            n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                var e = l.get(t);
                r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/class"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = {
                "click-rail": t("./handler/click-rail"),
                "drag-scrollbar": t("./handler/drag-scrollbar"),
                keyboard: t("./handler/keyboard"),
                wheel: t("./handler/mouse-wheel"),
                touch: t("./handler/touch"),
                selection: t("./handler/selection")
            },
            a = t("./handler/native-scroll");
        e.exports = function(t, e) {
            e = "object" == typeof e ? e : {}, o.add(t, "ps-container");
            var n = l.add(t);
            n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(e) {
                s[e](t)
            }), a(t), i(t)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(t, e, n) {
        "use strict";

        function r(t) {
            function e() {
                a.add(t, "ps-focus")
            }

            function n() {
                a.remove(t, "ps-focus")
            }
            var r = this;
            r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function() {
                var e = t.scrollLeft,
                    n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
        }

        function o(t) {
            return t.getAttribute("data-ps-id")
        }

        function l(t, e) {
            t.setAttribute("data-ps-id", e)
        }

        function i(t) {
            t.removeAttribute("data-ps-id")
        }
        var s = t("../lib/helper"),
            a = t("../lib/class"),
            c = t("./default-setting"),
            u = t("../lib/dom"),
            d = t("../lib/event-manager"),
            p = t("../lib/guid"),
            f = {};
        n.add = function(t) {
            var e = p();
            return l(t, e), f[e] = new r(t), f[e]
        }, n.remove = function(t) {
            delete f[o(t)], i(t)
        }, n.get = function(t) {
            return f[o(t)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {
                width: e.railXWidth
            };
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
            var r = {
                top: t.scrollTop,
                height: e.railYHeight
            };
            e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), s.css(e.scrollbarY, {
                top: e.scrollbarYTop,
                height: e.scrollbarYHeight - e.railBorderYWidth
            })
        }
        var l = t("../lib/helper"),
            i = t("../lib/class"),
            s = t("../lib/dom"),
            a = t("./instances"),
            c = t("./update-scroll");
        e.exports = function(t) {
            var e = a.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(t, e, n) {
        "use strict";
        var r, o, l = t("./instances"),
            i = function(t) {
                var e = document.createEvent("Event");
                return e.initEvent(t, !0, !0), e
            };
        e.exports = function(t, e, n) {
            if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));
            var s = l.get(t);
            "top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")))
        }
    }, {
        "./instances": 18
    }],
    21: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = t("./update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]);

/**** WEBSOCKETS *************/
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.io = f()
    }
})(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(_dereq_, module, exports) {
            module.exports = _dereq_("./lib/")
        }, {
            "./lib/": 2
        }],
        2: [function(_dereq_, module, exports) {
            module.exports = _dereq_("./socket");
            module.exports.parser = _dereq_("engine.io-parser")
        }, {
            "./socket": 3,
            "engine.io-parser": 19
        }],
        3: [function(_dereq_, module, exports) {
            (function(global) {
                var transports = _dereq_("./transports");
                var Emitter = _dereq_("component-emitter");
                var debug = _dereq_("debug")("engine.io-client:socket");
                var index = _dereq_("indexof");
                var parser = _dereq_("engine.io-parser");
                var parseuri = _dereq_("parseuri");
                var parsejson = _dereq_("parsejson");
                var parseqs = _dereq_("parseqs");
                module.exports = Socket;

                function noop() {}

                function Socket(uri, opts) {
                    if (!(this instanceof Socket)) return new Socket(uri, opts);
                    opts = opts || {};
                    if (uri && "object" == typeof uri) {
                        opts = uri;
                        uri = null
                    }
                    if (uri) {
                        uri = parseuri(uri);
                        opts.hostname = uri.host;
                        opts.secure = uri.protocol == "https" || uri.protocol == "wss";
                        opts.port = uri.port;
                        if (uri.query) opts.query = uri.query
                    } else if (opts.host) {
                        opts.hostname = parseuri(opts.host).host
                    }
                    this.secure = null != opts.secure ? opts.secure : global.location && "https:" == location.protocol;
                    if (opts.hostname && !opts.port) {
                        opts.port = this.secure ? "443" : "80"
                    }
                    this.agent = opts.agent || false;
                    this.hostname = opts.hostname || (global.location ? location.hostname : "localhost");
                    this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
                    this.query = opts.query || {};
                    if ("string" == typeof this.query) this.query = parseqs.decode(this.query);
                    this.upgrade = false !== opts.upgrade;
                    this.path = (opts.path || "/engine.io").replace(/\/$/, "") + "/";
                    this.forceJSONP = !!opts.forceJSONP;
                    this.jsonp = false !== opts.jsonp;
                    this.forceBase64 = !!opts.forceBase64;
                    this.enablesXDR = !!opts.enablesXDR;
                    this.timestampParam = opts.timestampParam || "t";
                    this.timestampRequests = opts.timestampRequests;
                    this.transports = opts.transports || ["polling", "websocket"];
                    this.readyState = "";
                    this.writeBuffer = [];
                    this.policyPort = opts.policyPort || 843;
                    this.rememberUpgrade = opts.rememberUpgrade || false;
                    this.binaryType = null;
                    this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
                    this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
                    if (true === this.perMessageDeflate) this.perMessageDeflate = {};
                    if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
                        this.perMessageDeflate.threshold = 1024
                    }
                    this.pfx = opts.pfx || null;
                    this.key = opts.key || null;
                    this.passphrase = opts.passphrase || null;
                    this.cert = opts.cert || null;
                    this.ca = opts.ca || null;
                    this.ciphers = opts.ciphers || null;
                    this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
                    var freeGlobal = typeof global == "object" && global;
                    if (freeGlobal.global === freeGlobal) {
                        if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
                            this.extraHeaders = opts.extraHeaders
                        }
                    }
                    this.open()
                }
                Socket.priorWebsocketSuccess = false;
                Emitter(Socket.prototype);
                Socket.protocol = parser.protocol;
                Socket.Socket = Socket;
                Socket.Transport = _dereq_("./transport");
                Socket.transports = _dereq_("./transports");
                Socket.parser = _dereq_("engine.io-parser");
                Socket.prototype.createTransport = function(name) {
                    debug('creating transport "%s"', name);
                    var query = clone(this.query);
                    query.EIO = parser.protocol;
                    query.transport = name;
                    if (this.id) query.sid = this.id;
                    var transport = new transports[name]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: query,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized,
                        perMessageDeflate: this.perMessageDeflate,
                        extraHeaders: this.extraHeaders
                    });
                    return transport
                };

                function clone(obj) {
                    var o = {};
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            o[i] = obj[i]
                        }
                    }
                    return o
                }
                Socket.prototype.open = function() {
                    var transport;
                    if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) {
                        transport = "websocket"
                    } else if (0 === this.transports.length) {
                        var self = this;
                        setTimeout(function() {
                            self.emit("error", "No transports available")
                        }, 0);
                        return
                    } else {
                        transport = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        transport = this.createTransport(transport)
                    } catch (e) {
                        this.transports.shift();
                        this.open();
                        return
                    }
                    transport.open();
                    this.setTransport(transport)
                };
                Socket.prototype.setTransport = function(transport) {
                    debug("setting transport %s", transport.name);
                    var self = this;
                    if (this.transport) {
                        debug("clearing existing transport %s", this.transport.name);
                        this.transport.removeAllListeners()
                    }
                    this.transport = transport;
                    transport.on("drain", function() {
                        self.onDrain()
                    }).on("packet", function(packet) {
                        self.onPacket(packet)
                    }).on("error", function(e) {
                        self.onError(e)
                    }).on("close", function() {
                        self.onClose("transport close")
                    })
                };
                Socket.prototype.probe = function(name) {
                    debug('probing transport "%s"', name);
                    var transport = this.createTransport(name, {
                            probe: 1
                        }),
                        failed = false,
                        self = this;
                    Socket.priorWebsocketSuccess = false;

                    function onTransportOpen() {
                        if (self.onlyBinaryUpgrades) {
                            var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                            failed = failed || upgradeLosesBinary
                        }
                        if (failed) return;
                        debug('probe transport "%s" opened', name);
                        transport.send([{
                            type: "ping",
                            data: "probe"
                        }]);
                        transport.once("packet", function(msg) {
                            if (failed) return;
                            if ("pong" == msg.type && "probe" == msg.data) {
                                debug('probe transport "%s" pong', name);
                                self.upgrading = true;
                                self.emit("upgrading", transport);
                                if (!transport) return;
                                Socket.priorWebsocketSuccess = "websocket" == transport.name;
                                debug('pausing current transport "%s"', self.transport.name);
                                self.transport.pause(function() {
                                    if (failed) return;
                                    if ("closed" == self.readyState) return;
                                    debug("changing transport and sending upgrade packet");
                                    cleanup();
                                    self.setTransport(transport);
                                    transport.send([{
                                        type: "upgrade"
                                    }]);
                                    self.emit("upgrade", transport);
                                    transport = null;
                                    self.upgrading = false;
                                    self.flush()
                                })
                            } else {
                                debug('probe transport "%s" failed', name);
                                var err = new Error("probe error");
                                err.transport = transport.name;
                                self.emit("upgradeError", err)
                            }
                        })
                    }

                    function freezeTransport() {
                        if (failed) return;
                        failed = true;
                        cleanup();
                        transport.close();
                        transport = null
                    }

                    function onerror(err) {
                        var error = new Error("probe error: " + err);
                        error.transport = transport.name;
                        freezeTransport();
                        debug('probe transport "%s" failed because of error: %s', name, err);
                        self.emit("upgradeError", error)
                    }

                    function onTransportClose() {
                        onerror("transport closed")
                    }

                    function onclose() {
                        onerror("socket closed")
                    }

                    function onupgrade(to) {
                        if (transport && to.name != transport.name) {
                            debug('"%s" works - aborting "%s"', to.name, transport.name);
                            freezeTransport()
                        }
                    }

                    function cleanup() {
                        transport.removeListener("open", onTransportOpen);
                        transport.removeListener("error", onerror);
                        transport.removeListener("close", onTransportClose);
                        self.removeListener("close", onclose);
                        self.removeListener("upgrading", onupgrade)
                    }
                    transport.once("open", onTransportOpen);
                    transport.once("error", onerror);
                    transport.once("close", onTransportClose);
                    this.once("close", onclose);
                    this.once("upgrading", onupgrade);
                    transport.open()
                };
                Socket.prototype.onOpen = function() {
                    debug("socket open");
                    this.readyState = "open";
                    Socket.priorWebsocketSuccess = "websocket" == this.transport.name;
                    this.emit("open");
                    this.flush();
                    if ("open" == this.readyState && this.upgrade && this.transport.pause) {
                        debug("starting upgrade probes");
                        for (var i = 0, l = this.upgrades.length; i < l; i++) {
                            this.probe(this.upgrades[i])
                        }
                    }
                };
                Socket.prototype.onPacket = function(packet) {
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
                        this.emit("packet", packet);
                        this.emit("heartbeat");
                        switch (packet.type) {
                            case "open":
                                this.onHandshake(parsejson(packet.data));
                                break;
                            case "pong":
                                this.setPing();
                                this.emit("pong");
                                break;
                            case "error":
                                var err = new Error("server error");
                                err.code = packet.data;
                                this.onError(err);
                                break;
                            case "message":
                                this.emit("data", packet.data);
                                this.emit("message", packet.data);
                                break
                        }
                    } else {
                        debug('packet received with socket readyState "%s"', this.readyState)
                    }
                };
                Socket.prototype.onHandshake = function(data) {
                    this.emit("handshake", data);
                    this.id = data.sid;
                    this.transport.query.sid = data.sid;
                    this.upgrades = this.filterUpgrades(data.upgrades);
                    this.pingInterval = data.pingInterval;
                    this.pingTimeout = data.pingTimeout;
                    this.onOpen();
                    if ("closed" == this.readyState) return;
                    this.setPing();
                    this.removeListener("heartbeat", this.onHeartbeat);
                    this.on("heartbeat", this.onHeartbeat)
                };
                Socket.prototype.onHeartbeat = function(timeout) {
                    clearTimeout(this.pingTimeoutTimer);
                    var self = this;
                    self.pingTimeoutTimer = setTimeout(function() {
                        if ("closed" == self.readyState) return;
                        self.onClose("ping timeout")
                    }, timeout || self.pingInterval + self.pingTimeout)
                };
                Socket.prototype.setPing = function() {
                    var self = this;
                    clearTimeout(self.pingIntervalTimer);
                    self.pingIntervalTimer = setTimeout(function() {
                        debug("writing ping packet - expecting pong within %sms", self.pingTimeout);
                        self.ping();
                        self.onHeartbeat(self.pingTimeout)
                    }, self.pingInterval)
                };
                Socket.prototype.ping = function() {
                    var self = this;
                    this.sendPacket("ping", function() {
                        self.emit("ping")
                    })
                };
                Socket.prototype.onDrain = function() {
                    this.writeBuffer.splice(0, this.prevBufferLen);
                    this.prevBufferLen = 0;
                    if (0 === this.writeBuffer.length) {
                        this.emit("drain")
                    } else {
                        this.flush()
                    }
                };
                Socket.prototype.flush = function() {
                    if ("closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        debug("flushing %d packets in socket", this.writeBuffer.length);
                        this.transport.send(this.writeBuffer);
                        this.prevBufferLen = this.writeBuffer.length;
                        this.emit("flush")
                    }
                };
                Socket.prototype.write = Socket.prototype.send = function(msg, options, fn) {
                    this.sendPacket("message", msg, options, fn);
                    return this
                };
                Socket.prototype.sendPacket = function(type, data, options, fn) {
                    if ("function" == typeof data) {
                        fn = data;
                        data = undefined
                    }
                    if ("function" == typeof options) {
                        fn = options;
                        options = null
                    }
                    if ("closing" == this.readyState || "closed" == this.readyState) {
                        return
                    }
                    options = options || {};
                    options.compress = false !== options.compress;
                    var packet = {
                        type: type,
                        data: data,
                        options: options
                    };
                    this.emit("packetCreate", packet);
                    this.writeBuffer.push(packet);
                    if (fn) this.once("flush", fn);
                    this.flush()
                };
                Socket.prototype.close = function() {
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.readyState = "closing";
                        var self = this;
                        if (this.writeBuffer.length) {
                            this.once("drain", function() {
                                if (this.upgrading) {
                                    waitForUpgrade()
                                } else {
                                    close()
                                }
                            })
                        } else if (this.upgrading) {
                            waitForUpgrade()
                        } else {
                            close()
                        }
                    }

                    function close() {
                        self.onClose("forced close");
                        debug("socket closing - telling transport to close");
                        self.transport.close()
                    }

                    function cleanupAndClose() {
                        self.removeListener("upgrade", cleanupAndClose);
                        self.removeListener("upgradeError", cleanupAndClose);
                        close()
                    }

                    function waitForUpgrade() {
                        self.once("upgrade", cleanupAndClose);
                        self.once("upgradeError", cleanupAndClose)
                    }
                    return this
                };
                Socket.prototype.onError = function(err) {
                    debug("socket error %j", err);
                    Socket.priorWebsocketSuccess = false;
                    this.emit("error", err);
                    this.onClose("transport error", err)
                };
                Socket.prototype.onClose = function(reason, desc) {
                    if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                        debug('socket close with reason: "%s"', reason);
                        var self = this;
                        clearTimeout(this.pingIntervalTimer);
                        clearTimeout(this.pingTimeoutTimer);
                        this.transport.removeAllListeners("close");
                        this.transport.close();
                        this.transport.removeAllListeners();
                        this.readyState = "closed";
                        this.id = null;
                        this.emit("close", reason, desc);
                        self.writeBuffer = [];
                        self.prevBufferLen = 0
                    }
                };
                Socket.prototype.filterUpgrades = function(upgrades) {
                    var filteredUpgrades = [];
                    for (var i = 0, j = upgrades.length; i < j; i++) {
                        if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i])
                    }
                    return filteredUpgrades
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./transport": 4,
            "./transports": 5,
            "component-emitter": 15,
            debug: 17,
            "engine.io-parser": 19,
            indexof: 23,
            parsejson: 26,
            parseqs: 27,
            parseuri: 28
        }],
        4: [function(_dereq_, module, exports) {
            var parser = _dereq_("engine.io-parser");
            var Emitter = _dereq_("component-emitter");
            module.exports = Transport;

            function Transport(opts) {
                this.path = opts.path;
                this.hostname = opts.hostname;
                this.port = opts.port;
                this.secure = opts.secure;
                this.query = opts.query;
                this.timestampParam = opts.timestampParam;
                this.timestampRequests = opts.timestampRequests;
                this.readyState = "";
                this.agent = opts.agent || false;
                this.socket = opts.socket;
                this.enablesXDR = opts.enablesXDR;
                this.pfx = opts.pfx;
                this.key = opts.key;
                this.passphrase = opts.passphrase;
                this.cert = opts.cert;
                this.ca = opts.ca;
                this.ciphers = opts.ciphers;
                this.rejectUnauthorized = opts.rejectUnauthorized;
                this.extraHeaders = opts.extraHeaders
            }
            Emitter(Transport.prototype);
            Transport.prototype.onError = function(msg, desc) {
                var err = new Error(msg);
                err.type = "TransportError";
                err.description = desc;
                this.emit("error", err);
                return this
            };
            Transport.prototype.open = function() {
                if ("closed" == this.readyState || "" == this.readyState) {
                    this.readyState = "opening";
                    this.doOpen()
                }
                return this
            };
            Transport.prototype.close = function() {
                if ("opening" == this.readyState || "open" == this.readyState) {
                    this.doClose();
                    this.onClose()
                }
                return this
            };
            Transport.prototype.send = function(packets) {
                if ("open" == this.readyState) {
                    this.write(packets)
                } else {
                    throw new Error("Transport not open")
                }
            };
            Transport.prototype.onOpen = function() {
                this.readyState = "open";
                this.writable = true;
                this.emit("open")
            };
            Transport.prototype.onData = function(data) {
                var packet = parser.decodePacket(data, this.socket.binaryType);
                this.onPacket(packet)
            };
            Transport.prototype.onPacket = function(packet) {
                this.emit("packet", packet)
            };
            Transport.prototype.onClose = function() {
                this.readyState = "closed";
                this.emit("close")
            }
        }, {
            "component-emitter": 15,
            "engine.io-parser": 19
        }],
        5: [function(_dereq_, module, exports) {
            (function(global) {
                var XMLHttpRequest = _dereq_("xmlhttprequest-ssl");
                var XHR = _dereq_("./polling-xhr");
                var JSONP = _dereq_("./polling-jsonp");
                var websocket = _dereq_("./websocket");
                exports.polling = polling;
                exports.websocket = websocket;

                function polling(opts) {
                    var xhr;
                    var xd = false;
                    var xs = false;
                    var jsonp = false !== opts.jsonp;
                    if (global.location) {
                        var isSSL = "https:" == location.protocol;
                        var port = location.port;
                        if (!port) {
                            port = isSSL ? 443 : 80
                        }
                        xd = opts.hostname != location.hostname || port != opts.port;
                        xs = opts.secure != isSSL
                    }
                    opts.xdomain = xd;
                    opts.xscheme = xs;
                    xhr = new XMLHttpRequest(opts);
                    if ("open" in xhr && !opts.forceJSONP) {
                        return new XHR(opts)
                    } else {
                        if (!jsonp) throw new Error("JSONP disabled");
                        return new JSONP(opts)
                    }
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./polling-jsonp": 6,
            "./polling-xhr": 7,
            "./websocket": 9,
            "xmlhttprequest-ssl": 10
        }],
        6: [function(_dereq_, module, exports) {
            (function(global) {
                var Polling = _dereq_("./polling");
                var inherit = _dereq_("component-inherit");
                module.exports = JSONPPolling;
                var rNewline = /\n/g;
                var rEscapedNewline = /\\n/g;
                var callbacks;
                var index = 0;

                function empty() {}

                function JSONPPolling(opts) {
                    Polling.call(this, opts);
                    this.query = this.query || {};
                    if (!callbacks) {
                        if (!global.___eio) global.___eio = [];
                        callbacks = global.___eio
                    }
                    this.index = callbacks.length;
                    var self = this;
                    callbacks.push(function(msg) {
                        self.onData(msg)
                    });
                    this.query.j = this.index;
                    if (global.document && global.addEventListener) {
                        global.addEventListener("beforeunload", function() {
                            if (self.script) self.script.onerror = empty
                        }, false)
                    }
                }
                inherit(JSONPPolling, Polling);
                JSONPPolling.prototype.supportsBinary = false;
                JSONPPolling.prototype.doClose = function() {
                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null
                    }
                    if (this.form) {
                        this.form.parentNode.removeChild(this.form);
                        this.form = null;
                        this.iframe = null
                    }
                    Polling.prototype.doClose.call(this)
                };
                JSONPPolling.prototype.doPoll = function() {
                    var self = this;
                    var script = document.createElement("script");
                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null
                    }
                    script.async = true;
                    script.src = this.uri();
                    script.onerror = function(e) {
                        self.onError("jsonp poll error", e)
                    };
                    var insertAt = document.getElementsByTagName("script")[0];
                    if (insertAt) {
                        insertAt.parentNode.insertBefore(script, insertAt)
                    } else {
                        (document.head || document.body).appendChild(script)
                    }
                    this.script = script;
                    var isUAgecko = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    if (isUAgecko) {
                        setTimeout(function() {
                            var iframe = document.createElement("iframe");
                            document.body.appendChild(iframe);
                            document.body.removeChild(iframe)
                        }, 100)
                    }
                };
                JSONPPolling.prototype.doWrite = function(data, fn) {
                    var self = this;
                    if (!this.form) {
                        var form = document.createElement("form");
                        var area = document.createElement("textarea");
                        var id = this.iframeId = "eio_iframe_" + this.index;
                        var iframe;
                        form.className = "socketio";
                        form.style.position = "absolute";
                        form.style.top = "-1000px";
                        form.style.left = "-1000px";
                        form.target = id;
                        form.method = "POST";
                        form.setAttribute("accept-charset", "utf-8");
                        area.name = "d";
                        form.appendChild(area);
                        document.body.appendChild(form);
                        this.form = form;
                        this.area = area
                    }
                    this.form.action = this.uri();

                    function complete() {
                        initIframe();
                        fn()
                    }

                    function initIframe() {
                        if (self.iframe) {
                            try {
                                self.form.removeChild(self.iframe)
                            } catch (e) {
                                self.onError("jsonp polling iframe removal error", e)
                            }
                        }
                        try {
                            var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                            iframe = document.createElement(html)
                        } catch (e) {
                            iframe = document.createElement("iframe");
                            iframe.name = self.iframeId;
                            iframe.src = "javascript:0"
                        }
                        iframe.id = self.iframeId;
                        self.form.appendChild(iframe);
                        self.iframe = iframe
                    }
                    initIframe();
                    data = data.replace(rEscapedNewline, "\\\n");
                    this.area.value = data.replace(rNewline, "\\n");
                    try {
                        this.form.submit()
                    } catch (e) {}
                    if (this.iframe.attachEvent) {
                        this.iframe.onreadystatechange = function() {
                            if (self.iframe.readyState == "complete") {
                                complete()
                            }
                        }
                    } else {
                        this.iframe.onload = complete
                    }
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./polling": 8,
            "component-inherit": 16
        }],
        7: [function(_dereq_, module, exports) {
            (function(global) {
                var XMLHttpRequest = _dereq_("xmlhttprequest-ssl");
                var Polling = _dereq_("./polling");
                var Emitter = _dereq_("component-emitter");
                var inherit = _dereq_("component-inherit");
                var debug = _dereq_("debug")("engine.io-client:polling-xhr");
                module.exports = XHR;
                module.exports.Request = Request;

                function empty() {}

                function XHR(opts) {
                    Polling.call(this, opts);
                    if (global.location) {
                        var isSSL = "https:" == location.protocol;
                        var port = location.port;
                        if (!port) {
                            port = isSSL ? 443 : 80
                        }
                        this.xd = opts.hostname != global.location.hostname || port != opts.port;
                        this.xs = opts.secure != isSSL
                    } else {
                        this.extraHeaders = opts.extraHeaders
                    }
                }
                inherit(XHR, Polling);
                XHR.prototype.supportsBinary = true;
                XHR.prototype.request = function(opts) {
                    opts = opts || {};
                    opts.uri = this.uri();
                    opts.xd = this.xd;
                    opts.xs = this.xs;
                    opts.agent = this.agent || false;
                    opts.supportsBinary = this.supportsBinary;
                    opts.enablesXDR = this.enablesXDR;
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    opts.extraHeaders = this.extraHeaders;
                    return new Request(opts)
                };
                XHR.prototype.doWrite = function(data, fn) {
                    var isBinary = typeof data !== "string" && data !== undefined;
                    var req = this.request({
                        method: "POST",
                        data: data,
                        isBinary: isBinary
                    });
                    var self = this;
                    req.on("success", fn);
                    req.on("error", function(err) {
                        self.onError("xhr post error", err)
                    });
                    this.sendXhr = req
                };
                XHR.prototype.doPoll = function() {
                    debug("xhr poll");
                    var req = this.request();
                    var self = this;
                    req.on("data", function(data) {
                        self.onData(data)
                    });
                    req.on("error", function(err) {
                        self.onError("xhr poll error", err)
                    });
                    this.pollXhr = req
                };

                function Request(opts) {
                    this.method = opts.method || "GET";
                    this.uri = opts.uri;
                    this.xd = !!opts.xd;
                    this.xs = !!opts.xs;
                    this.async = false !== opts.async;
                    this.data = undefined != opts.data ? opts.data : null;
                    this.agent = opts.agent;
                    this.isBinary = opts.isBinary;
                    this.supportsBinary = opts.supportsBinary;
                    this.enablesXDR = opts.enablesXDR;
                    this.pfx = opts.pfx;
                    this.key = opts.key;
                    this.passphrase = opts.passphrase;
                    this.cert = opts.cert;
                    this.ca = opts.ca;
                    this.ciphers = opts.ciphers;
                    this.rejectUnauthorized = opts.rejectUnauthorized;
                    this.extraHeaders = opts.extraHeaders;
                    this.create()
                }
                Emitter(Request.prototype);
                Request.prototype.create = function() {
                    var opts = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    var xhr = this.xhr = new XMLHttpRequest(opts);
                    var self = this;
                    try {
                        debug("xhr open %s: %s", this.method, this.uri);
                        xhr.open(this.method, this.uri, this.async);
                        try {
                            if (this.extraHeaders) {
                                xhr.setDisableHeaderCheck(true);
                                for (var i in this.extraHeaders) {
                                    if (this.extraHeaders.hasOwnProperty(i)) {
                                        xhr.setRequestHeader(i, this.extraHeaders[i])
                                    }
                                }
                            }
                        } catch (e) {}
                        if (this.supportsBinary) {
                            xhr.responseType = "arraybuffer"
                        }
                        if ("POST" == this.method) {
                            try {
                                if (this.isBinary) {
                                    xhr.setRequestHeader("Content-type", "application/octet-stream")
                                } else {
                                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                }
                            } catch (e) {}
                        }
                        if ("withCredentials" in xhr) {
                            xhr.withCredentials = true
                        }
                        if (this.hasXDR()) {
                            xhr.onload = function() {
                                self.onLoad()
                            };
                            xhr.onerror = function() {
                                self.onError(xhr.responseText)
                            }
                        } else {
                            xhr.onreadystatechange = function() {
                                if (4 != xhr.readyState) return;
                                if (200 == xhr.status || 1223 == xhr.status) {
                                    self.onLoad()
                                } else {
                                    setTimeout(function() {
                                        self.onError(xhr.status)
                                    }, 0)
                                }
                            }
                        }
                        debug("xhr data %s", this.data);
                        xhr.send(this.data)
                    } catch (e) {
                        setTimeout(function() {
                            self.onError(e)
                        }, 0);
                        return
                    }
                    if (global.document) {
                        this.index = Request.requestsCount++;
                        Request.requests[this.index] = this
                    }
                };
                Request.prototype.onSuccess = function() {
                    this.emit("success");
                    this.cleanup()
                };
                Request.prototype.onData = function(data) {
                    this.emit("data", data);
                    this.onSuccess()
                };
                Request.prototype.onError = function(err) {
                    this.emit("error", err);
                    this.cleanup(true)
                };
                Request.prototype.cleanup = function(fromError) {
                    if ("undefined" == typeof this.xhr || null === this.xhr) {
                        return
                    }
                    if (this.hasXDR()) {
                        this.xhr.onload = this.xhr.onerror = empty
                    } else {
                        this.xhr.onreadystatechange = empty
                    }
                    if (fromError) {
                        try {
                            this.xhr.abort()
                        } catch (e) {}
                    }
                    if (global.document) {
                        delete Request.requests[this.index]
                    }
                    this.xhr = null
                };
                Request.prototype.onLoad = function() {
                    var data;
                    try {
                        var contentType;
                        try {
                            contentType = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                        } catch (e) {}
                        if (contentType === "application/octet-stream") {
                            data = this.xhr.response
                        } else {
                            if (!this.supportsBinary) {
                                data = this.xhr.responseText
                            } else {
                                try {
                                    data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                } catch (e) {
                                    var ui8Arr = new Uint8Array(this.xhr.response);
                                    var dataArray = [];
                                    for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
                                        dataArray.push(ui8Arr[idx])
                                    }
                                    data = String.fromCharCode.apply(null, dataArray)
                                }
                            }
                        }
                    } catch (e) {
                        this.onError(e)
                    }
                    if (null != data) {
                        this.onData(data)
                    }
                };
                Request.prototype.hasXDR = function() {
                    return "undefined" !== typeof global.XDomainRequest && !this.xs && this.enablesXDR
                };
                Request.prototype.abort = function() {
                    this.cleanup()
                };
                if (global.document) {
                    Request.requestsCount = 0;
                    Request.requests = {};
                    if (global.attachEvent) {
                        global.attachEvent("onunload", unloadHandler)
                    } else if (global.addEventListener) {
                        global.addEventListener("beforeunload", unloadHandler, false)
                    }
                }

                function unloadHandler() {
                    for (var i in Request.requests) {
                        if (Request.requests.hasOwnProperty(i)) {
                            Request.requests[i].abort()
                        }
                    }
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./polling": 8,
            "component-emitter": 15,
            "component-inherit": 16,
            debug: 17,
            "xmlhttprequest-ssl": 10
        }],
        8: [function(_dereq_, module, exports) {
            var Transport = _dereq_("../transport");
            var parseqs = _dereq_("parseqs");
            var parser = _dereq_("engine.io-parser");
            var inherit = _dereq_("component-inherit");
            var yeast = _dereq_("yeast");
            var debug = _dereq_("debug")("engine.io-client:polling");
            module.exports = Polling;
            var hasXHR2 = function() {
                var XMLHttpRequest = _dereq_("xmlhttprequest-ssl");
                var xhr = new XMLHttpRequest({
                    xdomain: false
                });
                return null != xhr.responseType
            }();

            function Polling(opts) {
                var forceBase64 = opts && opts.forceBase64;
                if (!hasXHR2 || forceBase64) {
                    this.supportsBinary = false
                }
                Transport.call(this, opts)
            }
            inherit(Polling, Transport);
            Polling.prototype.name = "polling";
            Polling.prototype.doOpen = function() {
                this.poll()
            };
            Polling.prototype.pause = function(onPause) {
                var pending = 0;
                var self = this;
                this.readyState = "pausing";

                function pause() {
                    debug("paused");
                    self.readyState = "paused";
                    onPause()
                }
                if (this.polling || !this.writable) {
                    var total = 0;
                    if (this.polling) {
                        debug("we are currently polling - waiting to pause");
                        total++;
                        this.once("pollComplete", function() {
                            debug("pre-pause polling complete");
                            --total || pause()
                        })
                    }
                    if (!this.writable) {
                        debug("we are currently writing - waiting to pause");
                        total++;
                        this.once("drain", function() {
                            debug("pre-pause writing complete");
                            --total || pause()
                        })
                    }
                } else {
                    pause()
                }
            };
            Polling.prototype.poll = function() {
                debug("polling");
                this.polling = true;
                this.doPoll();
                this.emit("poll")
            };
            Polling.prototype.onData = function(data) {
                var self = this;
                debug("polling got data %s", data);
                var callback = function(packet, index, total) {
                    if ("opening" == self.readyState) {
                        self.onOpen()
                    }
                    if ("close" == packet.type) {
                        self.onClose();
                        return false
                    }
                    self.onPacket(packet)
                };
                parser.decodePayload(data, this.socket.binaryType, callback);
                if ("closed" != this.readyState) {
                    this.polling = false;
                    this.emit("pollComplete");
                    if ("open" == this.readyState) {
                        this.poll()
                    } else {
                        debug('ignoring poll - transport state "%s"', this.readyState)
                    }
                }
            };
            Polling.prototype.doClose = function() {
                var self = this;

                function close() {
                    debug("writing close packet");
                    self.write([{
                        type: "close"
                    }])
                }
                if ("open" == this.readyState) {
                    debug("transport open - closing");
                    close()
                } else {
                    debug("transport not open - deferring close");
                    this.once("open", close)
                }
            };
            Polling.prototype.write = function(packets) {
                var self = this;
                this.writable = false;
                var callbackfn = function() {
                    self.writable = true;
                    self.emit("drain")
                };
                var self = this;
                parser.encodePayload(packets, this.supportsBinary, function(data) {
                    self.doWrite(data, callbackfn)
                })
            };
            Polling.prototype.uri = function() {
                var query = this.query || {};
                var schema = this.secure ? "https" : "http";
                var port = "";
                if (false !== this.timestampRequests) {
                    query[this.timestampParam] = yeast()
                }
                if (!this.supportsBinary && !query.sid) {
                    query.b64 = 1
                }
                query = parseqs.encode(query);
                if (this.port && ("https" == schema && this.port != 443 || "http" == schema && this.port != 80)) {
                    port = ":" + this.port
                }
                if (query.length) {
                    query = "?" + query
                }
                var ipv6 = this.hostname.indexOf(":") !== -1;
                return schema + "://" + (ipv6 ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query
            }
        }, {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            "xmlhttprequest-ssl": 10,
            yeast: 30
        }],
        9: [function(_dereq_, module, exports) {
            (function(global) {
                var Transport = _dereq_("../transport");
                var parser = _dereq_("engine.io-parser");
                var parseqs = _dereq_("parseqs");
                var inherit = _dereq_("component-inherit");
                var yeast = _dereq_("yeast");
                var debug = _dereq_("debug")("engine.io-client:websocket");
                var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
                var WebSocket = BrowserWebSocket;
                if (!WebSocket && typeof window === "undefined") {
                    try {
                        WebSocket = _dereq_("ws")
                    } catch (e) {}
                }
                module.exports = WS;

                function WS(opts) {
                    var forceBase64 = opts && opts.forceBase64;
                    if (forceBase64) {
                        this.supportsBinary = false
                    }
                    this.perMessageDeflate = opts.perMessageDeflate;
                    Transport.call(this, opts)
                }
                inherit(WS, Transport);
                WS.prototype.name = "websocket";
                WS.prototype.supportsBinary = true;
                WS.prototype.doOpen = function() {
                    if (!this.check()) {
                        return
                    }
                    var self = this;
                    var uri = this.uri();
                    var protocols = void 0;
                    var opts = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    if (this.extraHeaders) {
                        opts.headers = this.extraHeaders
                    }
                    this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
                    if (this.ws.binaryType === undefined) {
                        this.supportsBinary = false
                    }
                    if (this.ws.supports && this.ws.supports.binary) {
                        this.supportsBinary = true;
                        this.ws.binaryType = "buffer"
                    } else {
                        this.ws.binaryType = "arraybuffer"
                    }
                    this.addEventListeners()
                };
                WS.prototype.addEventListeners = function() {
                    var self = this;
                    this.ws.onopen = function() {
                        self.onOpen()
                    };
                    this.ws.onclose = function() {
                        self.onClose()
                    };
                    this.ws.onmessage = function(ev) {
                        self.onData(ev.data)
                    };
                    this.ws.onerror = function(e) {
                        self.onError("websocket error", e)
                    }
                };
                if ("undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
                    WS.prototype.onData = function(data) {
                        var self = this;
                        setTimeout(function() {
                            Transport.prototype.onData.call(self, data)
                        }, 0)
                    }
                }
                WS.prototype.write = function(packets) {
                    var self = this;
                    this.writable = false;
                    var total = packets.length;
                    for (var i = 0, l = total; i < l; i++) {
                        (function(packet) {
                            parser.encodePacket(packet, self.supportsBinary, function(data) {
                                if (!BrowserWebSocket) {
                                    var opts = {};
                                    if (packet.options) {
                                        opts.compress = packet.options.compress
                                    }
                                    if (self.perMessageDeflate) {
                                        var len = "string" == typeof data ? global.Buffer.byteLength(data) : data.length;
                                        if (len < self.perMessageDeflate.threshold) {
                                            opts.compress = false
                                        }
                                    }
                                }
                                try {
                                    if (BrowserWebSocket) {
                                        self.ws.send(data)
                                    } else {
                                        self.ws.send(data, opts)
                                    }
                                } catch (e) {
                                    debug("websocket closed before onclose event")
                                }--total || done()
                            })
                        })(packets[i])
                    }

                    function done() {
                        self.emit("flush");
                        setTimeout(function() {
                            self.writable = true;
                            self.emit("drain")
                        }, 0)
                    }
                };
                WS.prototype.onClose = function() {
                    Transport.prototype.onClose.call(this)
                };
                WS.prototype.doClose = function() {
                    if (typeof this.ws !== "undefined") {
                        this.ws.close()
                    }
                };
                WS.prototype.uri = function() {
                    var query = this.query || {};
                    var schema = this.secure ? "wss" : "ws";
                    var port = "";
                    if (this.port && ("wss" == schema && this.port != 443 || "ws" == schema && this.port != 80)) {
                        port = ":" + this.port
                    }
                    if (this.timestampRequests) {
                        query[this.timestampParam] = yeast()
                    }
                    if (!this.supportsBinary) {
                        query.b64 = 1
                    }
                    query = parseqs.encode(query);
                    if (query.length) {
                        query = "?" + query
                    }
                    var ipv6 = this.hostname.indexOf(":") !== -1;
                    return schema + "://" + (ipv6 ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query
                };
                WS.prototype.check = function() {
                    return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name)
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            ws: undefined,
            yeast: 30
        }],
        10: [function(_dereq_, module, exports) {
            var hasCORS = _dereq_("has-cors");
            module.exports = function(opts) {
                var xdomain = opts.xdomain;
                var xscheme = opts.xscheme;
                var enablesXDR = opts.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
                        return new XMLHttpRequest
                    }
                } catch (e) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !xscheme && enablesXDR) {
                        return new XDomainRequest
                    }
                } catch (e) {}
                if (!xdomain) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                }
            }
        }, {
            "has-cors": 22
        }],
        11: [function(_dereq_, module, exports) {
            module.exports = after;

            function after(count, callback, err_cb) {
                var bail = false;
                err_cb = err_cb || noop;
                proxy.count = count;
                return count === 0 ? callback() : proxy;

                function proxy(err, result) {
                    if (proxy.count <= 0) {
                        throw new Error("after called too many times")
                    }--proxy.count;
                    if (err) {
                        bail = true;
                        callback(err);
                        callback = err_cb
                    } else if (proxy.count === 0 && !bail) {
                        callback(null, result)
                    }
                }
            }

            function noop() {}
        }, {}],
        12: [function(_dereq_, module, exports) {
            module.exports = function(arraybuffer, start, end) {
                var bytes = arraybuffer.byteLength;
                start = start || 0;
                end = end || bytes;
                if (arraybuffer.slice) {
                    return arraybuffer.slice(start, end)
                }
                if (start < 0) {
                    start += bytes
                }
                if (end < 0) {
                    end += bytes
                }
                if (end > bytes) {
                    end = bytes
                }
                if (start >= bytes || start >= end || bytes === 0) {
                    return new ArrayBuffer(0)
                }
                var abv = new Uint8Array(arraybuffer);
                var result = new Uint8Array(end - start);
                for (var i = start, ii = 0; i < end; i++, ii++) {
                    result[ii] = abv[i]
                }
                return result.buffer
            }
        }, {}],
        13: [function(_dereq_, module, exports) {
            (function(chars) {
                "use strict";
                exports.encode = function(arraybuffer) {
                    var bytes = new Uint8Array(arraybuffer),
                        i, len = bytes.length,
                        base64 = "";
                    for (i = 0; i < len; i += 3) {
                        base64 += chars[bytes[i] >> 2];
                        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                        base64 += chars[bytes[i + 2] & 63]
                    }
                    if (len % 3 === 2) {
                        base64 = base64.substring(0, base64.length - 1) + "="
                    } else if (len % 3 === 1) {
                        base64 = base64.substring(0, base64.length - 2) + "=="
                    }
                    return base64
                };
                exports.decode = function(base64) {
                    var bufferLength = base64.length * .75,
                        len = base64.length,
                        i, p = 0,
                        encoded1, encoded2, encoded3, encoded4;
                    if (base64[base64.length - 1] === "=") {
                        bufferLength--;
                        if (base64[base64.length - 2] === "=") {
                            bufferLength--
                        }
                    }
                    var arraybuffer = new ArrayBuffer(bufferLength),
                        bytes = new Uint8Array(arraybuffer);
                    for (i = 0; i < len; i += 4) {
                        encoded1 = chars.indexOf(base64[i]);
                        encoded2 = chars.indexOf(base64[i + 1]);
                        encoded3 = chars.indexOf(base64[i + 2]);
                        encoded4 = chars.indexOf(base64[i + 3]);
                        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63
                    }
                    return arraybuffer
                }
            })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }, {}],
        14: [function(_dereq_, module, exports) {
            (function(global) {
                var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
                var blobSupported = function() {
                    try {
                        var a = new Blob(["hi"]);
                        return a.size === 2
                    } catch (e) {
                        return false
                    }
                }();
                var blobSupportsArrayBufferView = blobSupported && function() {
                    try {
                        var b = new Blob([new Uint8Array([1, 2])]);
                        return b.size === 2
                    } catch (e) {
                        return false
                    }
                }();
                var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

                function mapArrayBufferViews(ary) {
                    for (var i = 0; i < ary.length; i++) {
                        var chunk = ary[i];
                        if (chunk.buffer instanceof ArrayBuffer) {
                            var buf = chunk.buffer;
                            if (chunk.byteLength !== buf.byteLength) {
                                var copy = new Uint8Array(chunk.byteLength);
                                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                                buf = copy.buffer
                            }
                            ary[i] = buf
                        }
                    }
                }

                function BlobBuilderConstructor(ary, options) {
                    options = options || {};
                    var bb = new BlobBuilder;
                    mapArrayBufferViews(ary);
                    for (var i = 0; i < ary.length; i++) {
                        bb.append(ary[i])
                    }
                    return options.type ? bb.getBlob(options.type) : bb.getBlob()
                }

                function BlobConstructor(ary, options) {
                    mapArrayBufferViews(ary);
                    return new Blob(ary, options || {})
                }
                module.exports = function() {
                    if (blobSupported) {
                        return blobSupportsArrayBufferView ? global.Blob : BlobConstructor
                    } else if (blobBuilderSupported) {
                        return BlobBuilderConstructor
                    } else {
                        return undefined
                    }
                }()
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {}],
        15: [function(_dereq_, module, exports) {
            module.exports = Emitter;

            function Emitter(obj) {
                if (obj) return mixin(obj)
            }

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key]
                }
                return obj
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || []).push(fn);
                return this
            };
            Emitter.prototype.once = function(event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments)
                }
                on.fn = fn;
                this.on(event, on);
                return this
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this
                }
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break
                    }
                }
                return this
            };
            Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1),
                    callbacks = this._callbacks[event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args)
                    }
                }
                return this
            };
            Emitter.prototype.listeners = function(event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || []
            };
            Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length
            }
        }, {}],
        16: [function(_dereq_, module, exports) {
            module.exports = function(a, b) {
                var fn = function() {};
                fn.prototype = b.prototype;
                a.prototype = new fn;
                a.prototype.constructor = a
            }
        }, {}],
        17: [function(_dereq_, module, exports) {
            exports = module.exports = _dereq_("./debug");
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
            exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];

            function useColors() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            exports.formatters.j = function(v) {
                return JSON.stringify(v)
            };

            function formatArgs() {
                var args = arguments;
                var useColors = this.useColors;
                args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                if (!useColors) return args;
                var c = "color: " + this.color;
                args = [args[0], c, "color: inherit"].concat(Array.prototype.slice.call(args, 1));
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-z%]/g, function(match) {
                    if ("%%" === match) return;
                    index++;
                    if ("%c" === match) {
                        lastC = index
                    }
                });
                args.splice(lastC, 0, c);
                return args
            }

            function log() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        exports.storage.removeItem("debug")
                    } else {
                        exports.storage.debug = namespaces
                    }
                } catch (e) {}
            }

            function load() {
                var r;
                try {
                    r = exports.storage.debug
                } catch (e) {}
                return r
            }
            exports.enable(load());

            function localstorage() {
                try {
                    return window.localStorage
                } catch (e) {}
            }
        }, {
            "./debug": 18
        }],
        18: [function(_dereq_, module, exports) {
            exports = module.exports = debug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = _dereq_("ms");
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevColor = 0;
            var prevTime;

            function selectColor() {
                return exports.colors[prevColor++ % exports.colors.length]
            }

            function debug(namespace) {
                function disabled() {}
                disabled.enabled = false;

                function enabled() {
                    var self = enabled;
                    var curr = +new Date;
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    if (null == self.useColors) self.useColors = exports.useColors();
                    if (null == self.color && self.useColors) self.color = selectColor();
                    var args = Array.prototype.slice.call(arguments);
                    args[0] = exports.coerce(args[0]);
                    if ("string" !== typeof args[0]) {
                        args = ["%o"].concat(args)
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
                        if (match === "%%") return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ("function" === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--
                        }
                        return match
                    });
                    if ("function" === typeof exports.formatArgs) {
                        args = exports.formatArgs.apply(self, args)
                    }
                    var logFn = enabled.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args)
                }
                enabled.enabled = true;
                var fn = exports.enabled(namespace) ? enabled : disabled;
                fn.namespace = namespace;
                return fn
            }

            function enable(namespaces) {
                exports.save(namespaces);
                var split = (namespaces || "").split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i]) continue;
                    namespaces = split[i].replace(/\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"))
                    } else {
                        exports.names.push(new RegExp("^" + namespaces + "$"))
                    }
                }
            }

            function disable() {
                exports.enable("")
            }

            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true
                    }
                }
                return false
            }

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val
            }
        }, {
            ms: 25
        }],
        19: [function(_dereq_, module, exports) {
            (function(global) {
                var keys = _dereq_("./keys");
                var hasBinary = _dereq_("has-binary");
                var sliceBuffer = _dereq_("arraybuffer.slice");
                var base64encoder = _dereq_("base64-arraybuffer");
                var after = _dereq_("after");
                var utf8 = _dereq_("utf8");
                var isAndroid = navigator.userAgent.match(/Android/i);
                var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
                var dontSendBlobs = isAndroid || isPhantomJS;
                exports.protocol = 3;
                var packets = exports.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                };
                var packetslist = keys(packets);
                var err = {
                    type: "error",
                    data: "parser error"
                };
                var Blob = _dereq_("blob");
                exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
                    if ("function" == typeof supportsBinary) {
                        callback = supportsBinary;
                        supportsBinary = false
                    }
                    if ("function" == typeof utf8encode) {
                        callback = utf8encode;
                        utf8encode = null
                    }
                    var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;
                    if (global.ArrayBuffer && data instanceof ArrayBuffer) {
                        return encodeArrayBuffer(packet, supportsBinary, callback)
                    } else if (Blob && data instanceof global.Blob) {
                        return encodeBlob(packet, supportsBinary, callback)
                    }
                    if (data && data.base64) {
                        return encodeBase64Object(packet, callback)
                    }
                    var encoded = packets[packet.type];
                    if (undefined !== packet.data) {
                        encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data)
                    }
                    return callback("" + encoded)
                };

                function encodeBase64Object(packet, callback) {
                    var message = "b" + exports.packets[packet.type] + packet.data.data;
                    return callback(message)
                }

                function encodeArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback)
                    }
                    var data = packet.data;
                    var contentArray = new Uint8Array(data);
                    var resultBuffer = new Uint8Array(1 + data.byteLength);
                    resultBuffer[0] = packets[packet.type];
                    for (var i = 0; i < contentArray.length; i++) {
                        resultBuffer[i + 1] = contentArray[i]
                    }
                    return callback(resultBuffer.buffer)
                }

                function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback)
                    }
                    var fr = new FileReader;
                    fr.onload = function() {
                        packet.data = fr.result;
                        exports.encodePacket(packet, supportsBinary, true, callback)
                    };
                    return fr.readAsArrayBuffer(packet.data)
                }

                function encodeBlob(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback)
                    }
                    if (dontSendBlobs) {
                        return encodeBlobAsArrayBuffer(packet, supportsBinary, callback)
                    }
                    var length = new Uint8Array(1);
                    length[0] = packets[packet.type];
                    var blob = new Blob([length.buffer, packet.data]);
                    return callback(blob)
                }
                exports.encodeBase64Packet = function(packet, callback) {
                    var message = "b" + exports.packets[packet.type];
                    if (Blob && packet.data instanceof global.Blob) {
                        var fr = new FileReader;
                        fr.onload = function() {
                            var b64 = fr.result.split(",")[1];
                            callback(message + b64)
                        };
                        return fr.readAsDataURL(packet.data)
                    }
                    var b64data;
                    try {
                        b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data))
                    } catch (e) {
                        var typed = new Uint8Array(packet.data);
                        var basic = new Array(typed.length);
                        for (var i = 0; i < typed.length; i++) {
                            basic[i] = typed[i]
                        }
                        b64data = String.fromCharCode.apply(null, basic)
                    }
                    message += global.btoa(b64data);
                    return callback(message)
                };
                exports.decodePacket = function(data, binaryType, utf8decode) {
                    if (typeof data == "string" || data === undefined) {
                        if (data.charAt(0) == "b") {
                            return exports.decodeBase64Packet(data.substr(1), binaryType)
                        }
                        if (utf8decode) {
                            try {
                                data = utf8.decode(data)
                            } catch (e) {
                                return err
                            }
                        }
                        var type = data.charAt(0);
                        if (Number(type) != type || !packetslist[type]) {
                            return err
                        }
                        if (data.length > 1) {
                            return {
                                type: packetslist[type],
                                data: data.substring(1)
                            }
                        } else {
                            return {
                                type: packetslist[type]
                            }
                        }
                    }
                    var asArray = new Uint8Array(data);
                    var type = asArray[0];
                    var rest = sliceBuffer(data, 1);
                    if (Blob && binaryType === "blob") {
                        rest = new Blob([rest])
                    }
                    return {
                        type: packetslist[type],
                        data: rest
                    }
                };
                exports.decodeBase64Packet = function(msg, binaryType) {
                    var type = packetslist[msg.charAt(0)];
                    if (!global.ArrayBuffer) {
                        return {
                            type: type,
                            data: {
                                base64: true,
                                data: msg.substr(1)
                            }
                        }
                    }
                    var data = base64encoder.decode(msg.substr(1));
                    if (binaryType === "blob" && Blob) {
                        data = new Blob([data])
                    }
                    return {
                        type: type,
                        data: data
                    }
                };
                exports.encodePayload = function(packets, supportsBinary, callback) {
                    if (typeof supportsBinary == "function") {
                        callback = supportsBinary;
                        supportsBinary = null
                    }
                    var isBinary = hasBinary(packets);
                    if (supportsBinary && isBinary) {
                        if (Blob && !dontSendBlobs) {
                            return exports.encodePayloadAsBlob(packets, callback)
                        }
                        return exports.encodePayloadAsArrayBuffer(packets, callback)
                    }
                    if (!packets.length) {
                        return callback("0:")
                    }

                    function setLengthHeader(message) {
                        return message.length + ":" + message
                    }

                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
                            doneCallback(null, setLengthHeader(message))
                        })
                    }
                    map(packets, encodeOne, function(err, results) {
                        return callback(results.join(""))
                    })
                };

                function map(ary, each, done) {
                    var result = new Array(ary.length);
                    var next = after(ary.length, done);
                    var eachWithIndex = function(i, el, cb) {
                        each(el, function(error, msg) {
                            result[i] = msg;
                            cb(error, result)
                        })
                    };
                    for (var i = 0; i < ary.length; i++) {
                        eachWithIndex(i, ary[i], next)
                    }
                }
                exports.decodePayload = function(data, binaryType, callback) {
                    if (typeof data != "string") {
                        return exports.decodePayloadAsBinary(data, binaryType, callback)
                    }
                    if (typeof binaryType === "function") {
                        callback = binaryType;
                        binaryType = null
                    }
                    var packet;
                    if (data == "") {
                        return callback(err, 0, 1)
                    }
                    var length = "",
                        n, msg;
                    for (var i = 0, l = data.length; i < l; i++) {
                        var chr = data.charAt(i);
                        if (":" != chr) {
                            length += chr
                        } else {
                            if ("" == length || length != (n = Number(length))) {
                                return callback(err, 0, 1)
                            }
                            msg = data.substr(i + 1, n);
                            if (length != msg.length) {
                                return callback(err, 0, 1)
                            }
                            if (msg.length) {
                                packet = exports.decodePacket(msg, binaryType, true);
                                if (err.type == packet.type && err.data == packet.data) {
                                    return callback(err, 0, 1)
                                }
                                var ret = callback(packet, i + n, l);
                                if (false === ret) return
                            }
                            i += n;
                            length = ""
                        }
                    }
                    if (length != "") {
                        return callback(err, 0, 1)
                    }
                };
                exports.encodePayloadAsArrayBuffer = function(packets, callback) {
                    if (!packets.length) {
                        return callback(new ArrayBuffer(0))
                    }

                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function(data) {
                            return doneCallback(null, data)
                        })
                    }
                    map(packets, encodeOne, function(err, encodedPackets) {
                        var totalLength = encodedPackets.reduce(function(acc, p) {
                            var len;
                            if (typeof p === "string") {
                                len = p.length
                            } else {
                                len = p.byteLength
                            }
                            return acc + len.toString().length + len + 2
                        }, 0);
                        var resultArray = new Uint8Array(totalLength);
                        var bufferIndex = 0;
                        encodedPackets.forEach(function(p) {
                            var isString = typeof p === "string";
                            var ab = p;
                            if (isString) {
                                var view = new Uint8Array(p.length);
                                for (var i = 0; i < p.length; i++) {
                                    view[i] = p.charCodeAt(i)
                                }
                                ab = view.buffer
                            }
                            if (isString) {
                                resultArray[bufferIndex++] = 0
                            } else {
                                resultArray[bufferIndex++] = 1
                            }
                            var lenStr = ab.byteLength.toString();
                            for (var i = 0; i < lenStr.length; i++) {
                                resultArray[bufferIndex++] = parseInt(lenStr[i])
                            }
                            resultArray[bufferIndex++] = 255;
                            var view = new Uint8Array(ab);
                            for (var i = 0; i < view.length; i++) {
                                resultArray[bufferIndex++] = view[i]
                            }
                        });
                        return callback(resultArray.buffer)
                    })
                };
                exports.encodePayloadAsBlob = function(packets, callback) {
                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function(encoded) {
                            var binaryIdentifier = new Uint8Array(1);
                            binaryIdentifier[0] = 1;
                            if (typeof encoded === "string") {
                                var view = new Uint8Array(encoded.length);
                                for (var i = 0; i < encoded.length; i++) {
                                    view[i] = encoded.charCodeAt(i)
                                }
                                encoded = view.buffer;
                                binaryIdentifier[0] = 0
                            }
                            var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
                            var lenStr = len.toString();
                            var lengthAry = new Uint8Array(lenStr.length + 1);
                            for (var i = 0; i < lenStr.length; i++) {
                                lengthAry[i] = parseInt(lenStr[i])
                            }
                            lengthAry[lenStr.length] = 255;
                            if (Blob) {
                                var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                                doneCallback(null, blob)
                            }
                        })
                    }
                    map(packets, encodeOne, function(err, results) {
                        return callback(new Blob(results))
                    })
                };
                exports.decodePayloadAsBinary = function(data, binaryType, callback) {
                    if (typeof binaryType === "function") {
                        callback = binaryType;
                        binaryType = null
                    }
                    var bufferTail = data;
                    var buffers = [];
                    var numberTooLong = false;
                    while (bufferTail.byteLength > 0) {
                        var tailArray = new Uint8Array(bufferTail);
                        var isString = tailArray[0] === 0;
                        var msgLength = "";
                        for (var i = 1;; i++) {
                            if (tailArray[i] == 255) break;
                            if (msgLength.length > 310) {
                                numberTooLong = true;
                                break
                            }
                            msgLength += tailArray[i]
                        }
                        if (numberTooLong) return callback(err, 0, 1);
                        bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
                        msgLength = parseInt(msgLength);
                        var msg = sliceBuffer(bufferTail, 0, msgLength);
                        if (isString) {
                            try {
                                msg = String.fromCharCode.apply(null, new Uint8Array(msg))
                            } catch (e) {
                                var typed = new Uint8Array(msg);
                                msg = "";
                                for (var i = 0; i < typed.length; i++) {
                                    msg += String.fromCharCode(typed[i])
                                }
                            }
                        }
                        buffers.push(msg);
                        bufferTail = sliceBuffer(bufferTail, msgLength)
                    }
                    var total = buffers.length;
                    buffers.forEach(function(buffer, i) {
                        callback(exports.decodePacket(buffer, binaryType, true), i, total)
                    })
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./keys": 20,
            after: 11,
            "arraybuffer.slice": 12,
            "base64-arraybuffer": 13,
            blob: 14,
            "has-binary": 21,
            utf8: 29
        }],
        20: [function(_dereq_, module, exports) {
            module.exports = Object.keys || function keys(obj) {
                var arr = [];
                var has = Object.prototype.hasOwnProperty;
                for (var i in obj) {
                    if (has.call(obj, i)) {
                        arr.push(i)
                    }
                }
                return arr
            }
        }, {}],
        21: [function(_dereq_, module, exports) {
            (function(global) {
                var isArray = _dereq_("isarray");
                module.exports = hasBinary;

                function hasBinary(data) {
                    function _hasBinary(obj) {
                        if (!obj) return false;
                        if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                            return true
                        }
                        if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (_hasBinary(obj[i])) {
                                    return true
                                }
                            }
                        } else if (obj && "object" == typeof obj) {
                            if (obj.toJSON) {
                                obj = obj.toJSON()
                            }
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                                    return true
                                }
                            }
                        }
                        return false
                    }
                    return _hasBinary(data)
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            isarray: 24
        }],
        22: [function(_dereq_, module, exports) {
            try {
                module.exports = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest
            } catch (err) {
                module.exports = false
            }
        }, {}],
        23: [function(_dereq_, module, exports) {
            var indexOf = [].indexOf;
            module.exports = function(arr, obj) {
                if (indexOf) return arr.indexOf(obj);
                for (var i = 0; i < arr.length; ++i) {
                    if (arr[i] === obj) return i
                }
                return -1
            }
        }, {}],
        24: [function(_dereq_, module, exports) {
            module.exports = Array.isArray || function(arr) {
                return Object.prototype.toString.call(arr) == "[object Array]"
            }
        }, {}],
        25: [function(_dereq_, module, exports) {
            var s = 1e3;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function(val, options) {
                options = options || {};
                if ("string" == typeof val) return parse(val);
                return options.long ? long(val) : short(val)
            };

            function parse(str) {
                str = "" + str;
                if (str.length > 1e4) return;
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match) return;
                var n = parseFloat(match[1]);
                var type = (match[2] || "ms").toLowerCase();
                switch (type) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * y;
                    case "days":
                    case "day":
                    case "d":
                        return n * d;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * h;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * m;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n
                }
            }

            function short(ms) {
                if (ms >= d) return Math.round(ms / d) + "d";
                if (ms >= h) return Math.round(ms / h) + "h";
                if (ms >= m) return Math.round(ms / m) + "m";
                if (ms >= s) return Math.round(ms / s) + "s";
                return ms + "ms"
            }

            function long(ms) {
                return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms"
            }

            function plural(ms, n, name) {
                if (ms < n) return;
                if (ms < n * 1.5) return Math.floor(ms / n) + " " + name;
                return Math.ceil(ms / n) + " " + name + "s"
            }
        }, {}],
        26: [function(_dereq_, module, exports) {
            (function(global) {
                var rvalidchars = /^[\],:{}\s]*$/;
                var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
                var rtrimLeft = /^\s+/;
                var rtrimRight = /\s+$/;
                module.exports = function parsejson(data) {
                    if ("string" != typeof data || !data) {
                        return null
                    }
                    data = data.replace(rtrimLeft, "").replace(rtrimRight, "");
                    if (global.JSON && JSON.parse) {
                        return JSON.parse(data)
                    }
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)()
                    }
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {}],
        27: [function(_dereq_, module, exports) {
            exports.encode = function(obj) {
                var str = "";
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        if (str.length) str += "&";
                        str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i])
                    }
                }
                return str
            };
            exports.decode = function(qs) {
                var qry = {};
                var pairs = qs.split("&");
                for (var i = 0, l = pairs.length; i < l; i++) {
                    var pair = pairs[i].split("=");
                    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
                }
                return qry
            }
        }, {}],
        28: [function(_dereq_, module, exports) {
            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
            var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            module.exports = function parseuri(str) {
                var src = str,
                    b = str.indexOf("["),
                    e = str.indexOf("]");
                if (b != -1 && e != -1) {
                    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length)
                }
                var m = re.exec(str || ""),
                    uri = {},
                    i = 14;
                while (i--) {
                    uri[parts[i]] = m[i] || ""
                }
                if (b != -1 && e != -1) {
                    uri.source = src;
                    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
                    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                    uri.ipv6uri = true
                }
                return uri
            }
        }, {}],
        29: [function(_dereq_, module, exports) {
            (function(global) {
                (function(root) {
                    var freeExports = typeof exports == "object" && exports;
                    var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
                    var freeGlobal = typeof global == "object" && global;
                    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                        root = freeGlobal
                    }
                    var stringFromCharCode = String.fromCharCode;

                    function ucs2decode(string) {
                        var output = [];
                        var counter = 0;
                        var length = string.length;
                        var value;
                        var extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (value >= 55296 && value <= 56319 && counter < length) {
                                extra = string.charCodeAt(counter++);
                                if ((extra & 64512) == 56320) {
                                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536)
                                } else {
                                    output.push(value);
                                    counter--
                                }
                            } else {
                                output.push(value)
                            }
                        }
                        return output
                    }

                    function ucs2encode(array) {
                        var length = array.length;
                        var index = -1;
                        var value;
                        var output = "";
                        while (++index < length) {
                            value = array[index];
                            if (value > 65535) {
                                value -= 65536;
                                output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                                value = 56320 | value & 1023
                            }
                            output += stringFromCharCode(value)
                        }
                        return output
                    }

                    function checkScalarValue(codePoint) {
                        if (codePoint >= 55296 && codePoint <= 57343) {
                            throw Error("Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value")
                        }
                    }

                    function createByte(codePoint, shift) {
                        return stringFromCharCode(codePoint >> shift & 63 | 128)
                    }

                    function encodeCodePoint(codePoint) {
                        if ((codePoint & 4294967168) == 0) {
                            return stringFromCharCode(codePoint)
                        }
                        var symbol = "";
                        if ((codePoint & 4294965248) == 0) {
                            symbol = stringFromCharCode(codePoint >> 6 & 31 | 192)
                        } else if ((codePoint & 4294901760) == 0) {
                            checkScalarValue(codePoint);
                            symbol = stringFromCharCode(codePoint >> 12 & 15 | 224);
                            symbol += createByte(codePoint, 6)
                        } else if ((codePoint & 4292870144) == 0) {
                            symbol = stringFromCharCode(codePoint >> 18 & 7 | 240);
                            symbol += createByte(codePoint, 12);
                            symbol += createByte(codePoint, 6)
                        }
                        symbol += stringFromCharCode(codePoint & 63 | 128);
                        return symbol
                    }

                    function utf8encode(string) {
                        var codePoints = ucs2decode(string);
                        var length = codePoints.length;
                        var index = -1;
                        var codePoint;
                        var byteString = "";
                        while (++index < length) {
                            codePoint = codePoints[index];
                            byteString += encodeCodePoint(codePoint)
                        }
                        return byteString
                    }

                    function readContinuationByte() {
                        if (byteIndex >= byteCount) {
                            throw Error("Invalid byte index")
                        }
                        var continuationByte = byteArray[byteIndex] & 255;
                        byteIndex++;
                        if ((continuationByte & 192) == 128) {
                            return continuationByte & 63
                        }
                        throw Error("Invalid continuation byte")
                    }

                    function decodeSymbol() {
                        var byte1;
                        var byte2;
                        var byte3;
                        var byte4;
                        var codePoint;
                        if (byteIndex > byteCount) {
                            throw Error("Invalid byte index")
                        }
                        if (byteIndex == byteCount) {
                            return false
                        }
                        byte1 = byteArray[byteIndex] & 255;
                        byteIndex++;
                        if ((byte1 & 128) == 0) {
                            return byte1
                        }
                        if ((byte1 & 224) == 192) {
                            var byte2 = readContinuationByte();
                            codePoint = (byte1 & 31) << 6 | byte2;
                            if (codePoint >= 128) {
                                return codePoint
                            } else {
                                throw Error("Invalid continuation byte")
                            }
                        }
                        if ((byte1 & 240) == 224) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            codePoint = (byte1 & 15) << 12 | byte2 << 6 | byte3;
                            if (codePoint >= 2048) {
                                checkScalarValue(codePoint);
                                return codePoint
                            } else {
                                throw Error("Invalid continuation byte")
                            }
                        }
                        if ((byte1 & 248) == 240) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            byte4 = readContinuationByte();
                            codePoint = (byte1 & 15) << 18 | byte2 << 12 | byte3 << 6 | byte4;
                            if (codePoint >= 65536 && codePoint <= 1114111) {
                                return codePoint
                            }
                        }
                        throw Error("Invalid UTF-8 detected")
                    }
                    var byteArray;
                    var byteCount;
                    var byteIndex;

                    function utf8decode(byteString) {
                        byteArray = ucs2decode(byteString);
                        byteCount = byteArray.length;
                        byteIndex = 0;
                        var codePoints = [];
                        var tmp;
                        while ((tmp = decodeSymbol()) !== false) {
                            codePoints.push(tmp)
                        }
                        return ucs2encode(codePoints)
                    }
                    var utf8 = {
                        version: "2.0.0",
                        encode: utf8encode,
                        decode: utf8decode
                    };
                    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
                        define(function() {
                            return utf8
                        })
                    } else if (freeExports && !freeExports.nodeType) {
                        if (freeModule) {
                            freeModule.exports = utf8
                        } else {
                            var object = {};
                            var hasOwnProperty = object.hasOwnProperty;
                            for (var key in utf8) {
                                hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key])
                            }
                        }
                    } else {
                        root.utf8 = utf8
                    }
                })(this)
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {}],
        30: [function(_dereq_, module, exports) {
            "use strict";
            var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                length = 64,
                map = {},
                seed = 0,
                i = 0,
                prev;

            function encode(num) {
                var encoded = "";
                do {
                    encoded = alphabet[num % length] + encoded;
                    num = Math.floor(num / length)
                } while (num > 0);
                return encoded
            }

            function decode(str) {
                var decoded = 0;
                for (i = 0; i < str.length; i++) {
                    decoded = decoded * length + map[str.charAt(i)]
                }
                return decoded
            }

            function yeast() {
                var now = encode(+new Date);
                if (now !== prev) return seed = 0, prev = now;
                return now + "." + encode(seed++)
            }
            for (; i < length; i++) map[alphabet[i]] = i;
            yeast.encode = encode;
            yeast.decode = decode;
            module.exports = yeast
        }, {}],
        31: [function(_dereq_, module, exports) {
            var url = _dereq_("./url");
            var parser = _dereq_("socket.io-parser");
            var Manager = _dereq_("./manager");
            var debug = _dereq_("debug")("socket.io-client");
            module.exports = exports = lookup;
            var cache = exports.managers = {};

            function lookup(uri, opts) {
                if (typeof uri == "object") {
                    opts = uri;
                    uri = undefined
                }
                opts = opts || {};
                var parsed = url(uri);
                var source = parsed.source;
                var id = parsed.id;
                var path = parsed.path;
                var sameNamespace = cache[id] && path in cache[id].nsps;
                var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
                var io;
                if (newConnection) {
                    debug("ignoring socket cache for %s", source);
                    io = Manager(source, opts)
                } else {
                    if (!cache[id]) {
                        debug("new io instance for %s", source);
                        cache[id] = Manager(source, opts)
                    }
                    io = cache[id]
                }
                return io.socket(parsed.path)
            }
            exports.protocol = parser.protocol;
            exports.connect = lookup;
            exports.Manager = _dereq_("./manager");
            exports.Socket = _dereq_("./socket")
        }, {
            "./manager": 32,
            "./socket": 34,
            "./url": 35,
            debug: 39,
            "socket.io-parser": 47
        }],
        32: [function(_dereq_, module, exports) {
            var eio = _dereq_("engine.io-client");
            var Socket = _dereq_("./socket");
            var Emitter = _dereq_("component-emitter");
            var parser = _dereq_("socket.io-parser");
            var on = _dereq_("./on");
            var bind = _dereq_("component-bind");
            var debug = _dereq_("debug")("socket.io-client:manager");
            var indexOf = _dereq_("indexof");
            var Backoff = _dereq_("backo2");
            var has = Object.prototype.hasOwnProperty;
            module.exports = Manager;

            function Manager(uri, opts) {
                if (!(this instanceof Manager)) return new Manager(uri, opts);
                if (uri && "object" == typeof uri) {
                    opts = uri;
                    uri = undefined
                }
                opts = opts || {};
                opts.path = opts.path || "/socket.io";
                this.nsps = {};
                this.subs = [];
                this.opts = opts;
                this.reconnection(opts.reconnection !== false);
                this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
                this.reconnectionDelay(opts.reconnectionDelay || 1e3);
                this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
                this.randomizationFactor(opts.randomizationFactor || .5);
                this.backoff = new Backoff({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                });
                this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
                this.readyState = "closed";
                this.uri = uri;
                this.connecting = [];
                this.lastPing = null;
                this.encoding = false;
                this.packetBuffer = [];
                this.encoder = new parser.Encoder;
                this.decoder = new parser.Decoder;
                this.autoConnect = opts.autoConnect !== false;
                if (this.autoConnect) this.open()
            }
            Manager.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var nsp in this.nsps) {
                    if (has.call(this.nsps, nsp)) {
                        this.nsps[nsp].emit.apply(this.nsps[nsp], arguments)
                    }
                }
            };
            Manager.prototype.updateSocketIds = function() {
                for (var nsp in this.nsps) {
                    if (has.call(this.nsps, nsp)) {
                        this.nsps[nsp].id = this.engine.id
                    }
                }
            };
            Emitter(Manager.prototype);
            Manager.prototype.reconnection = function(v) {
                if (!arguments.length) return this._reconnection;
                this._reconnection = !!v;
                return this
            };
            Manager.prototype.reconnectionAttempts = function(v) {
                if (!arguments.length) return this._reconnectionAttempts;
                this._reconnectionAttempts = v;
                return this
            };
            Manager.prototype.reconnectionDelay = function(v) {
                if (!arguments.length) return this._reconnectionDelay;
                this._reconnectionDelay = v;
                this.backoff && this.backoff.setMin(v);
                return this
            };
            Manager.prototype.randomizationFactor = function(v) {
                if (!arguments.length) return this._randomizationFactor;
                this._randomizationFactor = v;
                this.backoff && this.backoff.setJitter(v);
                return this
            };
            Manager.prototype.reconnectionDelayMax = function(v) {
                if (!arguments.length) return this._reconnectionDelayMax;
                this._reconnectionDelayMax = v;
                this.backoff && this.backoff.setMax(v);
                return this
            };
            Manager.prototype.timeout = function(v) {
                if (!arguments.length) return this._timeout;
                this._timeout = v;
                return this
            };
            Manager.prototype.maybeReconnectOnOpen = function() {
                if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
                    this.reconnect()
                }
            };
            Manager.prototype.open = Manager.prototype.connect = function(fn) {
                debug("readyState %s", this.readyState);
                if (~this.readyState.indexOf("open")) return this;
                debug("opening %s", this.uri);
                this.engine = eio(this.uri, this.opts);
                var socket = this.engine;
                var self = this;
                this.readyState = "opening";
                this.skipReconnect = false;
                var openSub = on(socket, "open", function() {
                    self.onopen();
                    fn && fn()
                });
                var errorSub = on(socket, "error", function(data) {
                    debug("connect_error");
                    self.cleanup();
                    self.readyState = "closed";
                    self.emitAll("connect_error", data);
                    if (fn) {
                        var err = new Error("Connection error");
                        err.data = data;
                        fn(err)
                    } else {
                        self.maybeReconnectOnOpen()
                    }
                });
                if (false !== this._timeout) {
                    var timeout = this._timeout;
                    debug("connect attempt will timeout after %d", timeout);
                    var timer = setTimeout(function() {
                        debug("connect attempt timed out after %d", timeout);
                        openSub.destroy();
                        socket.close();
                        socket.emit("error", "timeout");
                        self.emitAll("connect_timeout", timeout)
                    }, timeout);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer)
                        }
                    })
                }
                this.subs.push(openSub);
                this.subs.push(errorSub);
                return this
            };
            Manager.prototype.onopen = function() {
                debug("open");
                this.cleanup();
                this.readyState = "open";
                this.emit("open");
                var socket = this.engine;
                this.subs.push(on(socket, "data", bind(this, "ondata")));
                this.subs.push(on(socket, "ping", bind(this, "onping")));
                this.subs.push(on(socket, "pong", bind(this, "onpong")));
                this.subs.push(on(socket, "error", bind(this, "onerror")));
                this.subs.push(on(socket, "close", bind(this, "onclose")));
                this.subs.push(on(this.decoder, "decoded", bind(this, "ondecoded")))
            };
            Manager.prototype.onping = function() {
                this.lastPing = new Date;
                this.emitAll("ping")
            };
            Manager.prototype.onpong = function() {
                this.emitAll("pong", new Date - this.lastPing)
            };
            Manager.prototype.ondata = function(data) {
                this.decoder.add(data)
            };
            Manager.prototype.ondecoded = function(packet) {
                this.emit("packet", packet)
            };
            Manager.prototype.onerror = function(err) {
                debug("error", err);
                this.emitAll("error", err)
            };
            Manager.prototype.socket = function(nsp) {
                var socket = this.nsps[nsp];
                if (!socket) {
                    socket = new Socket(this, nsp);
                    this.nsps[nsp] = socket;
                    var self = this;
                    socket.on("connecting", onConnecting);
                    socket.on("connect", function() {
                        socket.id = self.engine.id
                    });
                    if (this.autoConnect) {
                        onConnecting()
                    }
                }

                function onConnecting() {
                    if (!~indexOf(self.connecting, socket)) {
                        self.connecting.push(socket)
                    }
                }
                return socket
            };
            Manager.prototype.destroy = function(socket) {
                var index = indexOf(this.connecting, socket);
                if (~index) this.connecting.splice(index, 1);
                if (this.connecting.length) return;
                this.close()
            };
            Manager.prototype.packet = function(packet) {
                debug("writing packet %j", packet);
                var self = this;
                if (!self.encoding) {
                    self.encoding = true;
                    this.encoder.encode(packet, function(encodedPackets) {
                        for (var i = 0; i < encodedPackets.length; i++) {
                            self.engine.write(encodedPackets[i], packet.options)
                        }
                        self.encoding = false;
                        self.processPacketQueue()
                    })
                } else {
                    self.packetBuffer.push(packet)
                }
            };
            Manager.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var pack = this.packetBuffer.shift();
                    this.packet(pack)
                }
            };
            Manager.prototype.cleanup = function() {
                debug("cleanup");
                var sub;
                while (sub = this.subs.shift()) sub.destroy();
                this.packetBuffer = [];
                this.encoding = false;
                this.lastPing = null;
                this.decoder.destroy()
            };
            Manager.prototype.close = Manager.prototype.disconnect = function() {
                debug("disconnect");
                this.skipReconnect = true;
                this.reconnecting = false;
                if ("opening" == this.readyState) {
                    this.cleanup()
                }
                this.backoff.reset();
                this.readyState = "closed";
                if (this.engine) this.engine.close()
            };
            Manager.prototype.onclose = function(reason) {
                debug("onclose");
                this.cleanup();
                this.backoff.reset();
                this.readyState = "closed";
                this.emit("close", reason);
                if (this._reconnection && !this.skipReconnect) {
                    this.reconnect()
                }
            };
            Manager.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect) return this;
                var self = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) {
                    debug("reconnect failed");
                    this.backoff.reset();
                    this.emitAll("reconnect_failed");
                    this.reconnecting = false
                } else {
                    var delay = this.backoff.duration();
                    debug("will wait %dms before reconnect attempt", delay);
                    this.reconnecting = true;
                    var timer = setTimeout(function() {
                        if (self.skipReconnect) return;
                        debug("attempting reconnect");
                        self.emitAll("reconnect_attempt", self.backoff.attempts);
                        self.emitAll("reconnecting", self.backoff.attempts);
                        if (self.skipReconnect) return;
                        self.open(function(err) {
                            if (err) {
                                debug("reconnect attempt error");
                                self.reconnecting = false;
                                self.reconnect();
                                self.emitAll("reconnect_error", err.data)
                            } else {
                                debug("reconnect success");
                                self.onreconnect()
                            }
                        })
                    }, delay);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer)
                        }
                    })
                }
            };
            Manager.prototype.onreconnect = function() {
                var attempt = this.backoff.attempts;
                this.reconnecting = false;
                this.backoff.reset();
                this.updateSocketIds();
                this.emitAll("reconnect", attempt)
            }
        }, {
            "./on": 33,
            "./socket": 34,
            backo2: 36,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "engine.io-client": 1,
            indexof: 42,
            "socket.io-parser": 47
        }],
        33: [function(_dereq_, module, exports) {
            module.exports = on;

            function on(obj, ev, fn) {
                obj.on(ev, fn);
                return {
                    destroy: function() {
                        obj.removeListener(ev, fn)
                    }
                }
            }
        }, {}],
        34: [function(_dereq_, module, exports) {
            var parser = _dereq_("socket.io-parser");
            var Emitter = _dereq_("component-emitter");
            var toArray = _dereq_("to-array");
            var on = _dereq_("./on");
            var bind = _dereq_("component-bind");
            var debug = _dereq_("debug")("socket.io-client:socket");
            var hasBin = _dereq_("has-binary");
            module.exports = exports = Socket;
            var events = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            };
            var emit = Emitter.prototype.emit;

            function Socket(io, nsp) {
                this.io = io;
                this.nsp = nsp;
                this.json = this;
                this.ids = 0;
                this.acks = {};
                this.receiveBuffer = [];
                this.sendBuffer = [];
                this.connected = false;
                this.disconnected = true;
                if (this.io.autoConnect) this.open()
            }
            Emitter(Socket.prototype);
            Socket.prototype.subEvents = function() {
                if (this.subs) return;
                var io = this.io;
                this.subs = [on(io, "open", bind(this, "onopen")), on(io, "packet", bind(this, "onpacket")), on(io, "close", bind(this, "onclose"))]
            };
            Socket.prototype.open = Socket.prototype.connect = function() {
                if (this.connected) return this;
                this.subEvents();
                this.io.open();
                if ("open" == this.io.readyState) this.onopen();
                this.emit("connecting");
                return this
            };
            Socket.prototype.send = function() {
                var args = toArray(arguments);
                args.unshift("message");
                this.emit.apply(this, args);
                return this
            };
            Socket.prototype.emit = function(ev) {
                if (events.hasOwnProperty(ev)) {
                    emit.apply(this, arguments);
                    return this
                }
                var args = toArray(arguments);
                var parserType = parser.EVENT;
                if (hasBin(args)) {
                    parserType = parser.BINARY_EVENT
                }
                var packet = {
                    type: parserType,
                    data: args
                };
                packet.options = {};
                packet.options.compress = !this.flags || false !== this.flags.compress;
                if ("function" == typeof args[args.length - 1]) {
                    debug("emitting packet with ack id %d", this.ids);
                    this.acks[this.ids] = args.pop();
                    packet.id = this.ids++
                }
                if (this.connected) {
                    this.packet(packet)
                } else {
                    this.sendBuffer.push(packet)
                }
                delete this.flags;
                return this
            };
            Socket.prototype.packet = function(packet) {
                packet.nsp = this.nsp;
                this.io.packet(packet)
            };
            Socket.prototype.onopen = function() {
                debug("transport is open - connecting");
                if ("/" != this.nsp) {
                    this.packet({
                        type: parser.CONNECT
                    })
                }
            };
            Socket.prototype.onclose = function(reason) {
                debug("close (%s)", reason);
                this.connected = false;
                this.disconnected = true;
                delete this.id;
                this.emit("disconnect", reason)
            };
            Socket.prototype.onpacket = function(packet) {
                if (packet.nsp != this.nsp) return;
                switch (packet.type) {
                    case parser.CONNECT:
                        this.onconnect();
                        break;
                    case parser.EVENT:
                        this.onevent(packet);
                        break;
                    case parser.BINARY_EVENT:
                        this.onevent(packet);
                        break;
                    case parser.ACK:
                        this.onack(packet);
                        break;
                    case parser.BINARY_ACK:
                        this.onack(packet);
                        break;
                    case parser.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case parser.ERROR:
                        this.emit("error", packet.data);
                        break
                }
            };
            Socket.prototype.onevent = function(packet) {
                var args = packet.data || [];
                debug("emitting event %j", args);
                if (null != packet.id) {
                    debug("attaching ack callback to event");
                    args.push(this.ack(packet.id))
                }
                if (this.connected) {
                    emit.apply(this, args)
                } else {
                    this.receiveBuffer.push(args)
                }
            };
            Socket.prototype.ack = function(id) {
                var self = this;
                var sent = false;
                return function() {
                    if (sent) return;
                    sent = true;
                    var args = toArray(arguments);
                    debug("sending ack %j", args);
                    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
                    self.packet({
                        type: type,
                        id: id,
                        data: args
                    })
                }
            };
            Socket.prototype.onack = function(packet) {
                var ack = this.acks[packet.id];
                if ("function" == typeof ack) {
                    debug("calling ack %s with %j", packet.id, packet.data);
                    ack.apply(this, packet.data);
                    delete this.acks[packet.id]
                } else {
                    debug("bad ack %s", packet.id)
                }
            };
            Socket.prototype.onconnect = function() {
                this.connected = true;
                this.disconnected = false;
                this.emit("connect");
                this.emitBuffered()
            };
            Socket.prototype.emitBuffered = function() {
                var i;
                for (i = 0; i < this.receiveBuffer.length; i++) {
                    emit.apply(this, this.receiveBuffer[i])
                }
                this.receiveBuffer = [];
                for (i = 0; i < this.sendBuffer.length; i++) {
                    this.packet(this.sendBuffer[i])
                }
                this.sendBuffer = []
            };
            Socket.prototype.ondisconnect = function() {
                debug("server disconnect (%s)", this.nsp);
                this.destroy();
                this.onclose("io server disconnect")
            };
            Socket.prototype.destroy = function() {
                if (this.subs) {
                    for (var i = 0; i < this.subs.length; i++) {
                        this.subs[i].destroy()
                    }
                    this.subs = null
                }
                this.io.destroy(this)
            };
            Socket.prototype.close = Socket.prototype.disconnect = function() {
                if (this.connected) {
                    debug("performing disconnect (%s)", this.nsp);
                    this.packet({
                        type: parser.DISCONNECT
                    })
                }
                this.destroy();
                if (this.connected) {
                    this.onclose("io client disconnect")
                }
                return this
            };
            Socket.prototype.compress = function(compress) {
                this.flags = this.flags || {};
                this.flags.compress = compress;
                return this
            }
        }, {
            "./on": 33,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "has-binary": 41,
            "socket.io-parser": 47,
            "to-array": 51
        }],
        35: [function(_dereq_, module, exports) {
            (function(global) {
                var parseuri = _dereq_("parseuri");
                var debug = _dereq_("debug")("socket.io-client:url");
                module.exports = url;

                function url(uri, loc) {
                    var obj = uri;
                    var loc = loc || global.location;
                    if (null == uri) uri = loc.protocol + "//" + loc.host;
                    if ("string" == typeof uri) {
                        if ("/" == uri.charAt(0)) {
                            if ("/" == uri.charAt(1)) {
                                uri = loc.protocol + uri
                            } else {
                                uri = loc.host + uri
                            }
                        }
                        if (!/^(https?|wss?):\/\//.test(uri)) {
                            debug("protocol-less url %s", uri);
                            if ("undefined" != typeof loc) {
                                uri = loc.protocol + "//" + uri
                            } else {
                                uri = "https://" + uri
                            }
                        }
                        debug("parse %s", uri);
                        obj = parseuri(uri)
                    }
                    if (!obj.port) {
                        if (/^(http|ws)$/.test(obj.protocol)) {
                            obj.port = "80"
                        } else if (/^(http|ws)s$/.test(obj.protocol)) {
                            obj.port = "443"
                        }
                    }
                    obj.path = obj.path || "/";
                    var ipv6 = obj.host.indexOf(":") !== -1;
                    var host = ipv6 ? "[" + obj.host + "]" : obj.host;
                    obj.id = obj.protocol + "://" + host + ":" + obj.port;
                    obj.href = obj.protocol + "://" + host + (loc && loc.port == obj.port ? "" : ":" + obj.port);
                    return obj
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            debug: 39,
            parseuri: 45
        }],
        36: [function(_dereq_, module, exports) {
            module.exports = Backoff;

            function Backoff(opts) {
                opts = opts || {};
                this.ms = opts.min || 100;
                this.max = opts.max || 1e4;
                this.factor = opts.factor || 2;
                this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
                this.attempts = 0
            }
            Backoff.prototype.duration = function() {
                var ms = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var rand = Math.random();
                    var deviation = Math.floor(rand * this.jitter * ms);
                    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation
                }
                return Math.min(ms, this.max) | 0
            };
            Backoff.prototype.reset = function() {
                this.attempts = 0
            };
            Backoff.prototype.setMin = function(min) {
                this.ms = min
            };
            Backoff.prototype.setMax = function(max) {
                this.max = max
            };
            Backoff.prototype.setJitter = function(jitter) {
                this.jitter = jitter
            }
        }, {}],
        37: [function(_dereq_, module, exports) {
            var slice = [].slice;
            module.exports = function(obj, fn) {
                if ("string" == typeof fn) fn = obj[fn];
                if ("function" != typeof fn) throw new Error("bind() requires a function");
                var args = slice.call(arguments, 2);
                return function() {
                    return fn.apply(obj, args.concat(slice.call(arguments)))
                }
            }
        }, {}],
        38: [function(_dereq_, module, exports) {
            module.exports = Emitter;

            function Emitter(obj) {
                if (obj) return mixin(obj)
            }

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key]
                }
                return obj
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
                return this
            };
            Emitter.prototype.once = function(event, fn) {
                function on() {
                    this.off(event, on);
                    fn.apply(this, arguments)
                }
                on.fn = fn;
                this.on(event, on);
                return this
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this
                }
                var callbacks = this._callbacks["$" + event];
                if (!callbacks) return this;
                if (1 == arguments.length) {
                    delete this._callbacks["$" + event];
                    return this
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break
                    }
                }
                return this
            };
            Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1),
                    callbacks = this._callbacks["$" + event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args)
                    }
                }
                return this
            };
            Emitter.prototype.listeners = function(event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks["$" + event] || []
            };
            Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length
            }
        }, {}],
        39: [function(_dereq_, module, exports) {
            arguments[4][17][0].apply(exports, arguments)
        }, {
            "./debug": 40,
            dup: 17
        }],
        40: [function(_dereq_, module, exports) {
            arguments[4][18][0].apply(exports, arguments)
        }, {
            dup: 18,
            ms: 44
        }],
        41: [function(_dereq_, module, exports) {
            (function(global) {
                var isArray = _dereq_("isarray");
                module.exports = hasBinary;

                function hasBinary(data) {
                    function _hasBinary(obj) {
                        if (!obj) return false;
                        if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                            return true
                        }
                        if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (_hasBinary(obj[i])) {
                                    return true
                                }
                            }
                        } else if (obj && "object" == typeof obj) {
                            if (obj.toJSON && "function" == typeof obj.toJSON) {
                                obj = obj.toJSON()
                            }
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                                    return true
                                }
                            }
                        }
                        return false
                    }
                    return _hasBinary(data)
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            isarray: 43
        }],
        42: [function(_dereq_, module, exports) {
            arguments[4][23][0].apply(exports, arguments)
        }, {
            dup: 23
        }],
        43: [function(_dereq_, module, exports) {
            arguments[4][24][0].apply(exports, arguments)
        }, {
            dup: 24
        }],
        44: [function(_dereq_, module, exports) {
            arguments[4][25][0].apply(exports, arguments)
        }, {
            dup: 25
        }],
        45: [function(_dereq_, module, exports) {
            arguments[4][28][0].apply(exports, arguments)
        }, {
            dup: 28
        }],
        46: [function(_dereq_, module, exports) {
            (function(global) {
                var isArray = _dereq_("isarray");
                var isBuf = _dereq_("./is-buffer");
                exports.deconstructPacket = function(packet) {
                    var buffers = [];
                    var packetData = packet.data;

                    function _deconstructPacket(data) {
                        if (!data) return data;
                        if (isBuf(data)) {
                            var placeholder = {
                                _placeholder: true,
                                num: buffers.length
                            };
                            buffers.push(data);
                            return placeholder
                        } else if (isArray(data)) {
                            var newData = new Array(data.length);
                            for (var i = 0; i < data.length; i++) {
                                newData[i] = _deconstructPacket(data[i])
                            }
                            return newData
                        } else if ("object" == typeof data && !(data instanceof Date)) {
                            var newData = {};
                            for (var key in data) {
                                newData[key] = _deconstructPacket(data[key])
                            }
                            return newData
                        }
                        return data
                    }
                    var pack = packet;
                    pack.data = _deconstructPacket(packetData);
                    pack.attachments = buffers.length;
                    return {
                        packet: pack,
                        buffers: buffers
                    }
                };
                exports.reconstructPacket = function(packet, buffers) {
                    var curPlaceHolder = 0;

                    function _reconstructPacket(data) {
                        if (data && data._placeholder) {
                            var buf = buffers[data.num];
                            return buf
                        } else if (isArray(data)) {
                            for (var i = 0; i < data.length; i++) {
                                data[i] = _reconstructPacket(data[i])
                            }
                            return data
                        } else if (data && "object" == typeof data) {
                            for (var key in data) {
                                data[key] = _reconstructPacket(data[key])
                            }
                            return data
                        }
                        return data
                    }
                    packet.data = _reconstructPacket(packet.data);
                    packet.attachments = undefined;
                    return packet
                };
                exports.removeBlobs = function(data, callback) {
                    function _removeBlobs(obj, curKey, containingObject) {
                        if (!obj) return obj;
                        if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                            pendingBlobs++;
                            var fileReader = new FileReader;
                            fileReader.onload = function() {
                                if (containingObject) {
                                    containingObject[curKey] = this.result
                                } else {
                                    bloblessData = this.result
                                }
                                if (!--pendingBlobs) {
                                    callback(bloblessData)
                                }
                            };
                            fileReader.readAsArrayBuffer(obj)
                        } else if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                _removeBlobs(obj[i], i, obj)
                            }
                        } else if (obj && "object" == typeof obj && !isBuf(obj)) {
                            for (var key in obj) {
                                _removeBlobs(obj[key], key, obj)
                            }
                        }
                    }
                    var pendingBlobs = 0;
                    var bloblessData = data;
                    _removeBlobs(bloblessData);
                    if (!pendingBlobs) {
                        callback(bloblessData)
                    }
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {
            "./is-buffer": 48,
            isarray: 43
        }],
        47: [function(_dereq_, module, exports) {
            var debug = _dereq_("debug")("socket.io-parser");
            var json = _dereq_("json3");
            var isArray = _dereq_("isarray");
            var Emitter = _dereq_("component-emitter");
            var binary = _dereq_("./binary");
            var isBuf = _dereq_("./is-buffer");
            exports.protocol = 4;
            exports.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"];
            exports.CONNECT = 0;
            exports.DISCONNECT = 1;
            exports.EVENT = 2;
            exports.ACK = 3;
            exports.ERROR = 4;
            exports.BINARY_EVENT = 5;
            exports.BINARY_ACK = 6;
            exports.Encoder = Encoder;
            exports.Decoder = Decoder;

            function Encoder() {}
            Encoder.prototype.encode = function(obj, callback) {
                debug("encoding packet %j", obj);
                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    encodeAsBinary(obj, callback)
                } else {
                    var encoding = encodeAsString(obj);
                    callback([encoding])
                }
            };

            function encodeAsString(obj) {
                var str = "";
                var nsp = false;
                str += obj.type;
                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    str += obj.attachments;
                    str += "-"
                }
                if (obj.nsp && "/" != obj.nsp) {
                    nsp = true;
                    str += obj.nsp
                }
                if (null != obj.id) {
                    if (nsp) {
                        str += ",";
                        nsp = false
                    }
                    str += obj.id
                }
                if (null != obj.data) {
                    if (nsp) str += ",";
                    str += json.stringify(obj.data)
                }
                debug("encoded %j as %s", obj, str);
                return str
            }

            function encodeAsBinary(obj, callback) {
                function writeEncoding(bloblessData) {
                    var deconstruction = binary.deconstructPacket(bloblessData);
                    var pack = encodeAsString(deconstruction.packet);
                    var buffers = deconstruction.buffers;
                    buffers.unshift(pack);
                    callback(buffers)
                }
                binary.removeBlobs(obj, writeEncoding)
            }

            function Decoder() {
                this.reconstructor = null
            }
            Emitter(Decoder.prototype);
            Decoder.prototype.add = function(obj) {
                var packet;
                if ("string" == typeof obj) {
                    packet = decodeString(obj);
                    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
                        this.reconstructor = new BinaryReconstructor(packet);
                        if (this.reconstructor.reconPack.attachments === 0) {
                            this.emit("decoded", packet)
                        }
                    } else {
                        this.emit("decoded", packet)
                    }
                } else if (isBuf(obj) || obj.base64) {
                    if (!this.reconstructor) {
                        throw new Error("got binary data when not reconstructing a packet")
                    } else {
                        packet = this.reconstructor.takeBinaryData(obj);
                        if (packet) {
                            this.reconstructor = null;
                            this.emit("decoded", packet)
                        }
                    }
                } else {
                    throw new Error("Unknown type: " + obj)
                }
            };

            function decodeString(str) {
                var p = {};
                var i = 0;
                p.type = Number(str.charAt(0));
                if (null == exports.types[p.type]) return error();
                if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
                    var buf = "";
                    while (str.charAt(++i) != "-") {
                        buf += str.charAt(i);
                        if (i == str.length) break
                    }
                    if (buf != Number(buf) || str.charAt(i) != "-") {
                        throw new Error("Illegal attachments")
                    }
                    p.attachments = Number(buf)
                }
                if ("/" == str.charAt(i + 1)) {
                    p.nsp = "";
                    while (++i) {
                        var c = str.charAt(i);
                        if ("," == c) break;
                        p.nsp += c;
                        if (i == str.length) break
                    }
                } else {
                    p.nsp = "/"
                }
                var next = str.charAt(i + 1);
                if ("" !== next && Number(next) == next) {
                    p.id = "";
                    while (++i) {
                        var c = str.charAt(i);
                        if (null == c || Number(c) != c) {
                            --i;
                            break
                        }
                        p.id += str.charAt(i);
                        if (i == str.length) break
                    }
                    p.id = Number(p.id)
                }
                if (str.charAt(++i)) {
                    try {
                        p.data = json.parse(str.substr(i))
                    } catch (e) {
                        return error()
                    }
                }
                debug("decoded %s as %j", str, p);
                return p
            }
            Decoder.prototype.destroy = function() {
                if (this.reconstructor) {
                    this.reconstructor.finishedReconstruction()
                }
            };

            function BinaryReconstructor(packet) {
                this.reconPack = packet;
                this.buffers = []
            }
            BinaryReconstructor.prototype.takeBinaryData = function(binData) {
                this.buffers.push(binData);
                if (this.buffers.length == this.reconPack.attachments) {
                    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                    this.finishedReconstruction();
                    return packet
                }
                return null
            };
            BinaryReconstructor.prototype.finishedReconstruction = function() {
                this.reconPack = null;
                this.buffers = []
            };

            function error(data) {
                return {
                    type: exports.ERROR,
                    data: "parser error"
                }
            }
        }, {
            "./binary": 46,
            "./is-buffer": 48,
            "component-emitter": 49,
            debug: 39,
            isarray: 43,
            json3: 50
        }],
        48: [function(_dereq_, module, exports) {
            (function(global) {
                module.exports = isBuf;

                function isBuf(obj) {
                    return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer
                }
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {}],
        49: [function(_dereq_, module, exports) {
            arguments[4][15][0].apply(exports, arguments)
        }, {
            dup: 15
        }],
        50: [function(_dereq_, module, exports) {
            (function(global) {
                (function() {
                    var isLoader = typeof define === "function" && define.amd;
                    var objectTypes = {
                        "function": true,
                        object: true
                    };
                    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
                    var root = objectTypes[typeof window] && window || this,
                        freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
                    if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
                        root = freeGlobal
                    }

                    function runInContext(context, exports) {
                        context || (context = root["Object"]());
                        exports || (exports = root["Object"]());
                        var Number = context["Number"] || root["Number"],
                            String = context["String"] || root["String"],
                            Object = context["Object"] || root["Object"],
                            Date = context["Date"] || root["Date"],
                            SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                            TypeError = context["TypeError"] || root["TypeError"],
                            Math = context["Math"] || root["Math"],
                            nativeJSON = context["JSON"] || root["JSON"];
                        if (typeof nativeJSON == "object" && nativeJSON) {
                            exports.stringify = nativeJSON.stringify;
                            exports.parse = nativeJSON.parse
                        }
                        var objectProto = Object.prototype,
                            getClass = objectProto.toString,
                            isProperty, forEach, undef;
                        var isExtended = new Date(-0xc782b5b800cec);
                        try {
                            isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708
                        } catch (exception) {}

                        function has(name) {
                            if (has[name] !== undef) {
                                return has[name]
                            }
                            var isSupported;
                            if (name == "bug-string-char-index") {
                                isSupported = "a" [0] != "a"
                            } else if (name == "json") {
                                isSupported = has("json-stringify") && has("json-parse")
                            } else {
                                var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if (name == "json-stringify") {
                                    var stringify = exports.stringify,
                                        stringifySupported = typeof stringify == "function" && isExtended;
                                    if (stringifySupported) {
                                        (value = function() {
                                            return 1
                                        }).toJSON = value;
                                        try {
                                            stringifySupported = stringify(0) === "0" && stringify(new Number) === "0" && stringify(new String) == '""' && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && stringify(value) === "1" && stringify([value]) == "[1]" && stringify([undef]) == "[null]" && stringify(null) == "null" && stringify([undef, getClass, null]) == "[null,null,null]" && stringify({
                                                a: [value, true, false, null, "\x00\b\n\f\r"]
                                            }) == serialized && stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && stringify(new Date(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(864e13)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                                        } catch (exception) {
                                            stringifySupported = false
                                        }
                                    }
                                    isSupported = stringifySupported
                                }
                                if (name == "json-parse") {
                                    var parse = exports.parse;
                                    if (typeof parse == "function") {
                                        try {
                                            if (parse("0") === 0 && !parse(false)) {
                                                value = parse(serialized);
                                                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                                                if (parseSupported) {
                                                    try {
                                                        parseSupported = !parse('""')
                                                    } catch (exception) {}
                                                    if (parseSupported) {
                                                        try {
                                                            parseSupported = parse("01") !== 1
                                                        } catch (exception) {}
                                                    }
                                                    if (parseSupported) {
                                                        try {
                                                            parseSupported = parse("1.") !== 1
                                                        } catch (exception) {}
                                                    }
                                                }
                                            }
                                        } catch (exception) {
                                            parseSupported = false
                                        }
                                    }
                                    isSupported = parseSupported
                                }
                            }
                            return has[name] = !!isSupported
                        }
                        if (!has("json")) {
                            var functionClass = "[object Function]",
                                dateClass = "[object Date]",
                                numberClass = "[object Number]",
                                stringClass = "[object String]",
                                arrayClass = "[object Array]",
                                booleanClass = "[object Boolean]";
                            var charIndexBuggy = has("bug-string-char-index");
                            if (!isExtended) {
                                var floor = Math.floor;
                                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                                var getDay = function(year, month) {
                                    return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400)
                                }
                            }
                            if (!(isProperty = objectProto.hasOwnProperty)) {
                                isProperty = function(property) {
                                    var members = {},
                                        constructor;
                                    if ((members.__proto__ = null, members.__proto__ = {
                                            toString: 1
                                        }, members).toString != getClass) {
                                        isProperty = function(property) {
                                            var original = this.__proto__,
                                                result = property in (this.__proto__ = null, this);
                                            this.__proto__ = original;
                                            return result
                                        }
                                    } else {
                                        constructor = members.constructor;
                                        isProperty = function(property) {
                                            var parent = (this.constructor || constructor).prototype;
                                            return property in this && !(property in parent && this[property] === parent[property])
                                        }
                                    }
                                    members = null;
                                    return isProperty.call(this, property)
                                }
                            }
                            forEach = function(object, callback) {
                                var size = 0,
                                    Properties, members, property;
                                (Properties = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0;
                                members = new Properties;
                                for (property in members) {
                                    if (isProperty.call(members, property)) {
                                        size++
                                    }
                                }
                                Properties = members = null;
                                if (!size) {
                                    members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                    forEach = function(object, callback) {
                                        var isFunction = getClass.call(object) == functionClass,
                                            property, length;
                                        var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                                        for (property in object) {
                                            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                                                callback(property)
                                            }
                                        }
                                        for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                                    }
                                } else if (size == 2) {
                                    forEach = function(object, callback) {
                                        var members = {},
                                            isFunction = getClass.call(object) == functionClass,
                                            property;
                                        for (property in object) {
                                            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                                                callback(property)
                                            }
                                        }
                                    }
                                } else {
                                    forEach = function(object, callback) {
                                        var isFunction = getClass.call(object) == functionClass,
                                            property, isConstructor;
                                        for (property in object) {
                                            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                                                callback(property)
                                            }
                                        }
                                        if (isConstructor || isProperty.call(object, property = "constructor")) {
                                            callback(property)
                                        }
                                    }
                                }
                                return forEach(object, callback)
                            };
                            if (!has("json-stringify")) {
                                var Escapes = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                };
                                var leadingZeroes = "000000";
                                var toPaddedString = function(width, value) {
                                    return (leadingZeroes + (value || 0)).slice(-width)
                                };
                                var unicodePrefix = "\\u00";
                                var quote = function(value) {
                                    var result = '"',
                                        index = 0,
                                        length = value.length,
                                        useCharIndex = !charIndexBuggy || length > 10;
                                    var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                                    for (; index < length; index++) {
                                        var charCode = value.charCodeAt(index);
                                        switch (charCode) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                result += Escapes[charCode];
                                                break;
                                            default:
                                                if (charCode < 32) {
                                                    result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                                                    break
                                                }
                                                result += useCharIndex ? symbols[index] : value.charAt(index)
                                        }
                                    }
                                    return result + '"'
                                };
                                var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                                    var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                                    try {
                                        value = object[property]
                                    } catch (exception) {}
                                    if (typeof value == "object" && value) {
                                        className = getClass.call(value);
                                        if (className == dateClass && !isProperty.call(value, "toJSON")) {
                                            if (value > -1 / 0 && value < 1 / 0) {
                                                if (getDay) {
                                                    date = floor(value / 864e5);
                                                    for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                                    date = 1 + date - getDay(year, month);
                                                    time = (value % 864e5 + 864e5) % 864e5;
                                                    hours = floor(time / 36e5) % 24;
                                                    minutes = floor(time / 6e4) % 60;
                                                    seconds = floor(time / 1e3) % 60;
                                                    milliseconds = time % 1e3
                                                } else {
                                                    year = value.getUTCFullYear();
                                                    month = value.getUTCMonth();
                                                    date = value.getUTCDate();
                                                    hours = value.getUTCHours();
                                                    minutes = value.getUTCMinutes();
                                                    seconds = value.getUTCSeconds();
                                                    milliseconds = value.getUTCMilliseconds()
                                                }
                                                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z"
                                            } else {
                                                value = null
                                            }
                                        } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
                                            value = value.toJSON(property)
                                        }
                                    }
                                    if (callback) {
                                        value = callback.call(object, property, value)
                                    }
                                    if (value === null) {
                                        return "null"
                                    }
                                    className = getClass.call(value);
                                    if (className == booleanClass) {
                                        return "" + value
                                    } else if (className == numberClass) {
                                        return value > -1 / 0 && value < 1 / 0 ? "" + value : "null"
                                    } else if (className == stringClass) {
                                        return quote("" + value)
                                    }
                                    if (typeof value == "object") {
                                        for (length = stack.length; length--;) {
                                            if (stack[length] === value) {
                                                throw TypeError()
                                            }
                                        }
                                        stack.push(value);
                                        results = [];
                                        prefix = indentation;
                                        indentation += whitespace;
                                        if (className == arrayClass) {
                                            for (index = 0, length = value.length; index < length; index++) {
                                                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                                                results.push(element === undef ? "null" : element)
                                            }
                                            result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]"
                                        } else {
                                            forEach(properties || value, function(property) {
                                                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                                if (element !== undef) {
                                                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element)
                                                }
                                            });
                                            result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}"
                                        }
                                        stack.pop();
                                        return result
                                    }
                                };
                                exports.stringify = function(source, filter, width) {
                                    var whitespace, callback, properties, className;
                                    if (objectTypes[typeof filter] && filter) {
                                        if ((className = getClass.call(filter)) == functionClass) {
                                            callback = filter
                                        } else if (className == arrayClass) {
                                            properties = {};
                                            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
                                        }
                                    }
                                    if (width) {
                                        if ((className = getClass.call(width)) == numberClass) {
                                            if ((width -= width % 1) > 0) {
                                                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                                            }
                                        } else if (className == stringClass) {
                                            whitespace = width.length <= 10 ? width : width.slice(0, 10)
                                        }
                                    }
                                    return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", [])
                                }
                            }
                            if (!has("json-parse")) {
                                var fromCharCode = String.fromCharCode;
                                var Unescapes = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                };
                                var Index, Source;
                                var abort = function() {
                                    Index = Source = null;
                                    throw SyntaxError()
                                };
                                var lex = function() {
                                    var source = Source,
                                        length = source.length,
                                        value, begin, position, isSigned, charCode;
                                    while (Index < length) {
                                        charCode = source.charCodeAt(Index);
                                        switch (charCode) {
                                            case 9:
                                            case 10:
                                            case 13:
                                            case 32:
                                                Index++;
                                                break;
                                            case 123:
                                            case 125:
                                            case 91:
                                            case 93:
                                            case 58:
                                            case 44:
                                                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                                                Index++;
                                                return value;
                                            case 34:
                                                for (value = "@", Index++; Index < length;) {
                                                    charCode = source.charCodeAt(Index);
                                                    if (charCode < 32) {
                                                        abort()
                                                    } else if (charCode == 92) {
                                                        charCode = source.charCodeAt(++Index);
                                                        switch (charCode) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                value += Unescapes[charCode];
                                                                Index++;
                                                                break;
                                                            case 117:
                                                                begin = ++Index;
                                                                for (position = Index + 4; Index < position; Index++) {
                                                                    charCode = source.charCodeAt(Index);
                                                                    if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                                                        abort()
                                                                    }
                                                                }
                                                                value += fromCharCode("0x" + source.slice(begin, Index));
                                                                break;
                                                            default:
                                                                abort()
                                                        }
                                                    } else {
                                                        if (charCode == 34) {
                                                            break
                                                        }
                                                        charCode = source.charCodeAt(Index);
                                                        begin = Index;
                                                        while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                                            charCode = source.charCodeAt(++Index)
                                                        }
                                                        value += source.slice(begin, Index)
                                                    }
                                                }
                                                if (source.charCodeAt(Index) == 34) {
                                                    Index++;
                                                    return value
                                                }
                                                abort();
                                            default:
                                                begin = Index;
                                                if (charCode == 45) {
                                                    isSigned = true;
                                                    charCode = source.charCodeAt(++Index)
                                                }
                                                if (charCode >= 48 && charCode <= 57) {
                                                    if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                                                        abort()
                                                    }
                                                    isSigned = false;
                                                    for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                                                    if (source.charCodeAt(Index) == 46) {
                                                        position = ++Index;
                                                        for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                                                        if (position == Index) {
                                                            abort()
                                                        }
                                                        Index = position
                                                    }
                                                    charCode = source.charCodeAt(Index);
                                                    if (charCode == 101 || charCode == 69) {
                                                        charCode = source.charCodeAt(++Index);
                                                        if (charCode == 43 || charCode == 45) {
                                                            Index++
                                                        }
                                                        for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                                                        if (position == Index) {
                                                            abort()
                                                        }
                                                        Index = position
                                                    }
                                                    return +source.slice(begin, Index)
                                                }
                                                if (isSigned) {
                                                    abort()
                                                }
                                                if (source.slice(Index, Index + 4) == "true") {
                                                    Index += 4;
                                                    return true
                                                } else if (source.slice(Index, Index + 5) == "false") {
                                                    Index += 5;
                                                    return false
                                                } else if (source.slice(Index, Index + 4) == "null") {
                                                    Index += 4;
                                                    return null
                                                }
                                                abort()
                                        }
                                    }
                                    return "$"
                                };
                                var get = function(value) {
                                    var results, hasMembers;
                                    if (value == "$") {
                                        abort()
                                    }
                                    if (typeof value == "string") {
                                        if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                                            return value.slice(1)
                                        }
                                        if (value == "[") {
                                            results = [];
                                            for (;; hasMembers || (hasMembers = true)) {
                                                value = lex();
                                                if (value == "]") {
                                                    break
                                                }
                                                if (hasMembers) {
                                                    if (value == ",") {
                                                        value = lex();
                                                        if (value == "]") {
                                                            abort()
                                                        }
                                                    } else {
                                                        abort()
                                                    }
                                                }
                                                if (value == ",") {
                                                    abort()
                                                }
                                                results.push(get(value))
                                            }
                                            return results
                                        } else if (value == "{") {
                                            results = {};
                                            for (;; hasMembers || (hasMembers = true)) {
                                                value = lex();
                                                if (value == "}") {
                                                    break
                                                }
                                                if (hasMembers) {
                                                    if (value == ",") {
                                                        value = lex();
                                                        if (value == "}") {
                                                            abort()
                                                        }
                                                    } else {
                                                        abort()
                                                    }
                                                }
                                                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                                                    abort()
                                                }
                                                results[value.slice(1)] = get(lex())
                                            }
                                            return results
                                        }
                                        abort()
                                    }
                                    return value
                                };
                                var update = function(source, property, callback) {
                                    var element = walk(source, property, callback);
                                    if (element === undef) {
                                        delete source[property]
                                    } else {
                                        source[property] = element
                                    }
                                };
                                var walk = function(source, property, callback) {
                                    var value = source[property],
                                        length;
                                    if (typeof value == "object" && value) {
                                        if (getClass.call(value) == arrayClass) {
                                            for (length = value.length; length--;) {
                                                update(value, length, callback)
                                            }
                                        } else {
                                            forEach(value, function(property) {
                                                update(value, property, callback)
                                            })
                                        }
                                    }
                                    return callback.call(source, property, value)
                                };
                                exports.parse = function(source, callback) {
                                    var result, value;
                                    Index = 0;
                                    Source = "" + source;
                                    result = get(lex());
                                    if (lex() != "$") {
                                        abort()
                                    }
                                    Index = Source = null;
                                    return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result
                                }
                            }
                        }
                        exports["runInContext"] = runInContext;
                        return exports
                    }
                    if (freeExports && !isLoader) {
                        runInContext(root, freeExports)
                    } else {
                        var nativeJSON = root.JSON,
                            previousJSON = root["JSON3"],
                            isRestored = false;
                        var JSON3 = runInContext(root, root["JSON3"] = {
                            noConflict: function() {
                                if (!isRestored) {
                                    isRestored = true;
                                    root.JSON = nativeJSON;
                                    root["JSON3"] = previousJSON;
                                    nativeJSON = previousJSON = null
                                }
                                return JSON3
                            }
                        });
                        root.JSON = {
                            parse: JSON3.parse,
                            stringify: JSON3.stringify
                        }
                    }
                    if (isLoader) {
                        define(function() {
                            return JSON3
                        })
                    }
                }).call(this)
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
        }, {}],
        51: [function(_dereq_, module, exports) {
            module.exports = toArray;

            function toArray(list, index) {
                var array = [];
                index = index || 0;
                for (var i = index || 0; i < list.length; i++) {
                    array[i - index] = list[i]
                }
                return array
            }
        }, {}]
    }, {}, [31])(31)
});

/*
 *   jQuery Numerator Plugin 0.2.1
 *   https://github.com/garethdn/jquery-numerator
 *
 *   Copyright 2015, Gareth Nolan
 *   http://ie.linkedin.com/in/garethnolan/
 *   Based on jQuery Boilerplate by Zeno Rocha with the help of Addy Osmani
 *   http://jqueryboilerplate.com
 *
 *   Licensed under the MIT license:
 *   http://www.opensource.org/licenses/MIT
 */

;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'jquery-numerator requires jQuery to be loaded first';
        }
        factory(jQuery);
    }
}(function($) {

    var pluginName = "numerator",
        defaults = {
            easing: 'swing',
            duration: 500,
            delimiter: undefined,
            rounding: 0,
            toValue: undefined,
            fromValue: undefined,
            queue: false,
            onStart: function() {},
            onStep: function() {},
            onProgress: function() {},
            onComplete: function() {}
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            this.parseElement();
            this.setValue();
        },

        parseElement: function() {
            var elText = $.trim($(this.element).text());

            this.settings.fromValue = this.settings.fromValue || this.format(elText);
        },

        setValue: function() {
            var self = this;

            $({
                value: self.settings.fromValue
            }).animate({
                value: self.settings.toValue
            }, {

                duration: parseInt(self.settings.duration, 10),

                easing: self.settings.easing,

                start: self.settings.onStart,

                step: function(now, fx) {
                    $(self.element).text(self.format(now));
                    // accepts two params - (now, fx)
                    self.settings.onStep(now, fx);
                },

                // accepts three params - (animation object, progress ratio, time remaining(ms))
                progress: self.settings.onProgress,

                complete: self.settings.onComplete
            });
        },

        format: function(value) {
            var self = this;

            if (parseInt(this.settings.rounding) < 1) {
                value = parseInt(value, 10);
            } else {
                value = parseFloat(value).toFixed(parseInt(this.settings.rounding));
            }

            if (self.settings.delimiter) {
                return this.delimit(value)
            } else {
                return value;
            }
        },

        // TODO: Add comments to this function
        delimit: function(value) {
            var self = this;

            value = value.toString();

            if (self.settings.rounding && parseInt(self.settings.rounding, 10) > 0) {
                var decimals = value.substring((value.length - (self.settings.rounding + 1)), value.length),
                    wholeValue = value.substring(0, (value.length - (self.settings.rounding + 1)));

                return self.addDelimiter(wholeValue) + decimals;
            } else {
                return self.addDelimiter(value);
            }
        },

        addDelimiter: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter);
        }
    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if ($.data(this, "plugin_" + pluginName)) {
                $.data(this, 'plugin_' + pluginName, null);
            }
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        });
    };

}));

/*****************************/
/*        SWEETALERT         */
/*****************************/
;(function(window, document, undefined) {
"use strict";

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonClass: 'btn-primary',
  cancelButtonText: 'Cancel',
  cancelButtonClass: 'btn-default',
  containerClass: '',
  titleClass: '',
  textClass: '',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false,
  onLoad: function() {}
};

exports.default = defaultParams;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCancel = exports.handleConfirm = exports.handleButton = undefined;

var _handleSwalDom = require('./handle-swal-dom');

var _handleDom = require('./handle-dom');

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = (0, _handleDom.hasClass)(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = colorLuminance(normalColor, -0.04);
    activeColor = colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = (0, _handleDom.isDescendant)(modal, target);

            if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if ((0, _handleDom.isDescendant)(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if ((0, _handleDom.hasClass)(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
    if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports.handleButton = handleButton;
exports.handleConfirm = handleConfirm;
exports.handleCancel = handleCancel;

},{"./handle-dom":3,"./handle-swal-dom":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== "undefined") {
        padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = function tick() {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    };
    tick();
  }
  elem.style.display = 'block'; };

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = function tick() {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  };
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
        var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
        var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleDom = require('./handle-dom');

var _handleSwalDom = require('./handle-swal-dom');

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
        if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
            if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    (0, _handleDom.stopEventPropagation)(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      (0, _handleSwalDom.setFocusStyle)($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      (0, _handleDom.fireClick)($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports.default = handleKeyDown;

},{"./handle-dom":3,"./handle-swal-dom":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixVerticalPosition = exports.resetInputError = exports.resetInput = exports.openModal = exports.getInput = exports.getOverlay = exports.getModal = exports.sweetAlertInitialize = undefined;

var _handleDom = require('./handle-dom');

var _defaultParams = require('./default-params');

var _defaultParams2 = _interopRequireDefault(_defaultParams);

var _injectedHtml = require('./injected-html');

var _injectedHtml2 = _interopRequireDefault(_injectedHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

/*
 * Add modal + overlay to DOM
 */


var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHtml2.default;

    while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = function getModal() {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
};

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  (0, _handleDom.fadeIn)(getOverlay(), 10);
  (0, _handleDom.show)($modal);
  (0, _handleDom.addClass)($modal, 'showSweetAlert');
  (0, _handleDom.removeClass)($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    (0, _handleDom.addClass)($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  (0, _handleDom.removeClass)($modal, 'show-input');
  $input.value = _defaultParams2.default.inputValue;
  $input.setAttribute('type', _defaultParams2.default.inputType);
  $input.setAttribute('placeholder', _defaultParams2.default.inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  (0, _handleDom.removeClass)($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.form-group');
  (0, _handleDom.removeClass)($errorContainer, 'has-error');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = (0, _handleDom.getTopMargin)(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

},{"./default-params":1,"./handle-dom":3,"./injected-html":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

"<div class=\"sweet-alert modal-content\" tabIndex=\"-1\">" +

"<div class=\"modal-header\"><h4 class=\"modal-title\">Title</h4></div><div class=\"modal-body\">" +

"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

"<div class=\"sa-icon sa-info\"></div>" +

"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<p class=\"text-muted\">Text</p>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" tabIndex=\"3\" />\n      <span class=\"sa-input-error help-block\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\"></span> <span class=\"sa-help-text\">Not valid</span>\n      </span>\n    </div>" +

"</div><div class=\"sa-button-container modal-footer\">\n      <button class=\"cancel btn btn-lg\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm btn btn-lg\" tabIndex=\"1\">OK</button>" +

"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

"</div>";

exports.default = injectedHTML;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _utils = require('./utils');

var _handleSwalDom = require('./handle-swal-dom');

var _handleDom = require('./handle-dom');

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = (0, _handleSwalDom.getModal)();

  var $title = modal.querySelector('h4');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : (0, _handleDom.escapeHtml)(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : (0, _handleDom.escapeHtml)(params.text || '').split('\n').join('<br>');
  if (params.text) (0, _handleDom.show)($text);


params.onLoad();

  /*
   * Custom class
   */
  if (params.customClass) {
    (0, _handleDom.addClass)(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
        var customClass = modal.getAttribute('data-custom-class');
    (0, _handleDom.removeClass)(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  (0, _handleDom.hide)(modal.querySelectorAll('.sa-icon'));

  if (params.type && !(0, _utils.isIE8)()) {
    var _ret = function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = void 0;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        (0, _handleDom.show)($icon);
      }

      var $input = (0, _handleSwalDom.getInput)();

            switch (params.type) {

        case 'success':
          (0, _handleDom.addClass)($icon, 'animate');
          (0, _handleDom.addClass)($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          (0, _handleDom.addClass)($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          (0, _handleDom.addClass)($icon, 'animateErrorIcon');
          (0, _handleDom.addClass)($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          (0, _handleDom.addClass)($icon, 'pulseWarning');
          (0, _handleDom.addClass)($icon.querySelector('.sa-body'), 'pulseWarningIns');
          (0, _handleDom.addClass)($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          (0, _handleDom.addClass)(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    (0, _handleDom.show)($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    (0, _handleDom.hide)($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    (0, _handleDom.hide)($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = (0, _handleDom.escapeHtml)(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = (0, _handleDom.escapeHtml)(params.confirmButtonText);
  }

  /*
   * Reset confirm buttons to default class (Ugly fix)
   */
  $confirmBtn.className = 'confirm btn btn-lg';

  /*
   * Attach selected class to the sweet alert modal
   */
  (0, _handleDom.addClass)(modal, params.containerClass);

  /*
   * Set confirm button to selected class
   */
  (0, _handleDom.addClass)($confirmBtn, params.confirmButtonClass);

  /*
   * Set cancel button to selected class
   */
  (0, _handleDom.addClass)($cancelBtn, params.cancelButtonClass);

  /*
   * Set title to selected class
   */
  (0, _handleDom.addClass)($title, params.titleClass);

  /*
   * Set text to selected class
   */
  (0, _handleDom.addClass)($text, params.textClass);

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation);   } else {
      modal.setAttribute('data-animation', 'pop');
    }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports.default = setParameters;

},{"./handle-dom":3,"./handle-swal-dom":5,"./utils":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

exports.extend = extend;
exports.isIE8 = isIE8;
exports.logStr = logStr;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */


/*
 * Handy utilities
 */


/*
 *  Handle sweetAlert's DOM elements
 */






var _handleDom = require('./modules/handle-dom');

var _utils = require('./modules/utils');

var _handleSwalDom = require('./modules/handle-swal-dom');

var _handleClick = require('./modules/handle-click');

var _handleKey = require('./modules/handle-key');

var _handleKey2 = _interopRequireDefault(_handleKey);

var _defaultParams = require('./modules/default-params');

var _defaultParams2 = _interopRequireDefault(_defaultParams);

var _setParams = require('./modules/set-params');

var _setParams2 = _interopRequireDefault(_setParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, _swal;

exports.default = sweetAlert = _swal = function swal() {
  var customizations = arguments[0];

  (0, _handleDom.addClass)(document.body, 'stop-scrolling');
  (0, _handleSwalDom.resetInput)();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2.default[key] : args[key];
  }

  if (customizations === undefined) {
    (0, _utils.logStr)('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = (0, _utils.extend)({}, _defaultParams2.default);

  switch (typeof customizations === 'undefined' ? 'undefined' : _typeof(customizations)) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        (0, _utils.logStr)('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2.default) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2.default.confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      (0, _utils.logStr)('Unexpected type of argument! Expected "string" or "object", got ' + (typeof customizations === 'undefined' ? 'undefined' : _typeof(customizations)));
      return false;

  }

  (0, _setParams2.default)(params);
  (0, _handleSwalDom.fixVerticalPosition)();
  (0, _handleSwalDom.openModal)(arguments[1]);

    var modal = (0, _handleSwalDom.getModal)();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick'];
  var onButtonEvent = function onButtonEvent(e) {
    return (0, _handleClick.handleButton)(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  (0, _handleSwalDom.getOverlay)().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return (0, _handleKey2.default)(e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

    _swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */


sweetAlert.setDefaults = _swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if ((typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    throw new Error('userParams has to be a object');
  }

  (0, _utils.extend)(_defaultParams2.default, userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = _swal.close = function () {
  var modal = (0, _handleSwalDom.getModal)();

  (0, _handleDom.fadeOut)((0, _handleSwalDom.getOverlay)(), 5);
  (0, _handleDom.fadeOut)(modal, 5);
  (0, _handleDom.removeClass)(modal, 'showSweetAlert');
  (0, _handleDom.addClass)(modal, 'hideSweetAlert');
  (0, _handleDom.removeClass)(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  (0, _handleDom.removeClass)($successIcon, 'animate');
  (0, _handleDom.removeClass)($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  (0, _handleDom.removeClass)($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  (0, _handleDom.removeClass)($errorIcon, 'animateErrorIcon');
  (0, _handleDom.removeClass)($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  (0, _handleDom.removeClass)($warningIcon, 'pulseWarning');
  (0, _handleDom.removeClass)($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  (0, _handleDom.removeClass)($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    (0, _handleDom.removeClass)(modal, customClass);
  }, 300);

    (0, _handleDom.removeClass)(document.body, 'stop-scrolling');

    window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = _swal.showInputError = function (errorMessage) {
  var modal = (0, _handleSwalDom.getModal)();

  var $errorIcon = modal.querySelector('.sa-input-error');
  (0, _handleDom.addClass)($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.form-group');
  (0, _handleDom.addClass)($errorContainer, 'has-error');

  $errorContainer.querySelector('.sa-help-text').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = _swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = (0, _handleSwalDom.getModal)();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  (0, _handleDom.removeClass)($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.form-group');
  (0, _handleDom.removeClass)($errorContainer, 'has-error');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = _swal.disableButtons = function (event) {
  var modal = (0, _handleSwalDom.getModal)();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = _swal.enableButtons = function (event) {
  var modal = (0, _handleSwalDom.getModal)();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  (0, _utils.logStr)('SweetAlert is a frontend module!');
}

},{"./modules/default-params":1,"./modules/handle-click":2,"./modules/handle-dom":3,"./modules/handle-key":4,"./modules/handle-swal-dom":5,"./modules/set-params":7,"./modules/utils":8}]},{},[9]);

/*
 * Use SweetAlert with RequireJS
 */

if (typeof define === 'function' && define.amd) {
  define(function () {
    return sweetAlert;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = sweetAlert;
}

})(window, document);


/* CIRCLE.JS */
// ProgressBar.js 0.8.1
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT
!
function(a) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.ProgressBar = a()
  }
}(function() {
  var a;
  return function b(a, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!a[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw j.code = "MODULE_NOT_FOUND", j
        }
        var k = c[g] = {
          exports: {}
        };
        a[g][0].call(k.exports, function(b) {
          var c = a[g][1][b];
          return e(c ? c : b)
        }, k, k.exports, b, a, c, d)
      }
      return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
  }({
    1: [function(b, c, d) {
      !
      function(b) {
        "undefined" == typeof SHIFTY_DEBUG_NOW && (SHIFTY_DEBUG_NOW = function() {
          return +new Date
        });
        var e = function() {
          "use strict";

          function e() {}
          function f(a, b) {
            var c;
            for (c in a) Object.hasOwnProperty.call(a, c) && b(c)
          }
          function g(a, b) {
            return f(b, function(c) {
              a[c] = b[c]
            }), a
          }
          function h(a, b) {
            f(b, function(c) {
              "undefined" == typeof a[c] && (a[c] = b[c])
            })
          }
          function i(a, b, c, d, e, f, g) {
            var h, i = (a - f) / e;
            for (h in b) b.hasOwnProperty(h) && (b[h] = j(c[h], d[h], o[g[h]], i));
            return b
          }
          function j(a, b, c, d) {
            return a + (b - a) * c(d)
          }
          function k(a, b) {
            var c = n.prototype.filter,
                d = a._filterArgs;
            f(c, function(e) {
              "undefined" != typeof c[e][b] && c[e][b].apply(a, d)
            })
          }
          function l(a, b, c, d, e, f, g, h, j) {
            v = b + c, w = Math.min(u(), v), x = w >= v, a.isPlaying() && !x ? (j(a._timeoutHandler, s), k(a, "beforeTween"), i(w, d, e, f, c, b, g), k(a, "afterTween"), h(d)) : x && (h(f), a.stop(!0))
          }
          function m(a, b) {
            var c = {};
            return "string" == typeof b ? f(a, function(a) {
              c[a] = b
            }) : f(a, function(a) {
              c[a] || (c[a] = b[a] || q)
            }), c
          }
          function n(a, b) {
            this._currentState = a || {}, this._configured = !1, this._scheduleFunction = p, "undefined" != typeof b && this.setConfig(b)
          }
          var o, p, q = "linear",
              r = 500,
              s = 1e3 / 60,
              t = Date.now ? Date.now : function() {
              return +new Date
              },
              u = SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
          p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
          var v, w, x;
          return n.prototype.tween = function(a) {
            return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._start(this.get()), this.resume())
          }, n.prototype.setConfig = function(a) {
            a = a || {}, this._configured = !0, this._pausedAtTime = null, this._start = a.start || e, this._step = a.step || e, this._finish = a.finish || e, this._duration = a.duration || r, this._currentState = a.from || this.get(), this._originalState = this.get(), this._targetState = a.to || this.get(), this._timestamp = u();
            var b = this._currentState,
                c = this._targetState;
            return h(c, b), this._easing = m(b, a.easing || q), this._filterArgs = [b, this._originalState, c, this._easing], k(this, "tweenCreated"), this
          }, n.prototype.get = function() {
            return g({}, this._currentState)
          }, n.prototype.set = function(a) {
            this._currentState = a
          }, n.prototype.pause = function() {
            return this._pausedAtTime = u(), this._isPaused = !0, this
          }, n.prototype.resume = function() {
            this._isPaused && (this._timestamp += u() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0;
            var a = this;
            return this._timeoutHandler = function() {
              l(a, a._timestamp, a._duration, a._currentState, a._originalState, a._targetState, a._easing, a._step, a._scheduleFunction)
            }, this._timeoutHandler(), this
          }, n.prototype.stop = function(a) {
            return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = e, a && (g(this._currentState, this._targetState), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState)), this
          }, n.prototype.isPlaying = function() {
            return this._isTweening && !this._isPaused
          }, n.prototype.setScheduleFunction = function(a) {
            this._scheduleFunction = a
          }, n.prototype.dispose = function() {
            var a;
            for (a in this) this.hasOwnProperty(a) && delete this[a]
          }, n.prototype.filter = {}, n.prototype.formula = {
            linear: function(a) {
              return a
            }
          }, o = n.prototype.formula, g(n, {
            now: u,
            each: f,
            tweenProps: i,
            tweenProp: j,
            applyFilter: k,
            shallowCopy: g,
            defaults: h,
            composeEasingObject: m
          }), "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l), "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function() {
            return n
          }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n), n
        }();
        !
        function() {
          e.shallowCopy(e.prototype.formula, {
            easeInQuad: function(a) {
              return Math.pow(a, 2)
            },
            easeOutQuad: function(a) {
              return -(Math.pow(a - 1, 2) - 1)
            },
            easeInOutQuad: function(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
            },
            easeInCubic: function(a) {
              return Math.pow(a, 3)
            },
            easeOutCubic: function(a) {
              return Math.pow(a - 1, 3) + 1
            },
            easeInOutCubic: function(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
            },
            easeInQuart: function(a) {
              return Math.pow(a, 4)
            },
            easeOutQuart: function(a) {
              return -(Math.pow(a - 1, 4) - 1)
            },
            easeInOutQuart: function(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
            },
            easeInQuint: function(a) {
              return Math.pow(a, 5)
            },
            easeOutQuint: function(a) {
              return Math.pow(a - 1, 5) + 1
            },
            easeInOutQuint: function(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
            },
            easeInSine: function(a) {
              return -Math.cos(a * (Math.PI / 2)) + 1
            },
            easeOutSine: function(a) {
              return Math.sin(a * (Math.PI / 2))
            },
            easeInOutSine: function(a) {
              return -.5 * (Math.cos(Math.PI * a) - 1)
            },
            easeInExpo: function(a) {
              return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
            },
            easeOutExpo: function(a) {
              return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
            },
            easeInOutExpo: function(a) {
              return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
            },
            easeInCirc: function(a) {
              return -(Math.sqrt(1 - a * a) - 1)
            },
            easeOutCirc: function(a) {
              return Math.sqrt(1 - Math.pow(a - 1, 2))
            },
            easeInOutCirc: function(a) {
              return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            },
            easeOutBounce: function(a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            easeInBack: function(a) {
              var b = 1.70158;
              return a * a * ((b + 1) * a - b)
            },
            easeOutBack: function(a) {
              var b = 1.70158;
              return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            easeInOutBack: function(a) {
              var b = 1.70158;
              return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            elastic: function(a) {
              return -1 * Math.pow(4, -8 * a) * Math.sin(2 * (6 * a - 1) * Math.PI / 2) + 1
            },
            swingFromTo: function(a) {
              var b = 1.70158;
              return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            swingFrom: function(a) {
              var b = 1.70158;
              return a * a * ((b + 1) * a - b)
            },
            swingTo: function(a) {
              var b = 1.70158;
              return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            bounce: function(a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            bouncePast: function(a) {
              return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            },
            easeFromTo: function(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
            },
            easeFrom: function(a) {
              return Math.pow(a, 4)
            },
            easeTo: function(a) {
              return Math.pow(a, .25)
            }
          })
        }(), function() {
          function a(a, b, c, d, e, f) {
            function g(a) {
              return ((n * a + o) * a + p) * a
            }
            function h(a) {
              return ((q * a + r) * a + s) * a
            }
            function i(a) {
              return (3 * n * a + 2 * o) * a + p
            }
            function j(a) {
              return 1 / (200 * a)
            }
            function k(a, b) {
              return h(m(a, b))
            }
            function l(a) {
              return a >= 0 ? a : 0 - a
            }
            function m(a, b) {
              var c, d, e, f, h, j;
              for (e = a, j = 0; 8 > j; j++) {
                if (f = g(e) - a, l(f) < b) return e;
                if (h = i(e), l(h) < 1e-6) break;
                e -= f / h
              }
              if (c = 0, d = 1, e = a, c > e) return c;
              if (e > d) return d;
              for (; d > c;) {
                if (f = g(e), l(f - a) < b) return e;
                a > f ? c = e : d = e, e = .5 * (d - c) + c
              }
              return e
            }
            var n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0;
            return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f))
          }
          function b(b, c, d, e) {
            return function(f) {
              return a(f, b, c, d, e, 1)
            }
          }
          e.setBezierFunction = function(a, c, d, f, g) {
            var h = b(c, d, f, g);
            return h.x1 = c, h.y1 = d, h.x2 = f, h.y2 = g, e.prototype.formula[a] = h
          }, e.unsetBezierFunction = function(a) {
            delete e.prototype.formula[a]
          }
        }(), function() {
          function a(a, b, c, d, f) {
            return e.tweenProps(d, b, a, c, 1, 0, f)
          }
          var b = new e;
          b._filterArgs = [], e.interpolate = function(c, d, f, g) {
            var h = e.shallowCopy({}, c),
                i = e.composeEasingObject(c, g || "linear");
            b.set({});
            var j = b._filterArgs;
            j.length = 0, j[0] = h, j[1] = c, j[2] = d, j[3] = i, e.applyFilter(b, "tweenCreated"), e.applyFilter(b, "beforeTween");
            var k = a(c, h, d, f, i);
            return e.applyFilter(b, "afterTween"), k
          }
        }(), function(a) {
          function b(a, b) {
            B.length = 0;
            var c, d = a.length;
            for (c = 0; d > c; c++) B.push("_" + b + "_" + c);
            return B
          }
          function c(a) {
            var b = a.match(v);
            return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A)
          }
          function d(b) {
            a.each(b, function(a) {
              var c = b[a];
              "string" == typeof c && c.match(z) && (b[a] = e(c))
            })
          }
          function e(a) {
            return i(z, a, f)
          }
          function f(a) {
            var b = g(a);
            return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
          }
          function g(a) {
            return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), C[0] = h(a.substr(0, 2)), C[1] = h(a.substr(2, 2)), C[2] = h(a.substr(4, 2)), C
          }
          function h(a) {
            return parseInt(a, 16)
          }
          function i(a, b, c) {
            var d = b.match(a),
                e = b.replace(a, A);
            if (d) for (var f, g = d.length, h = 0; g > h; h++) f = d.shift(), e = e.replace(A, c(f));
            return e
          }
          function j(a) {
            return i(x, a, k)
          }
          function k(a) {
            for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++) d += parseInt(b[e], 10) + ",";
            return d = d.slice(0, -1) + ")"
          }
          function l(d) {
            var e = {};
            return a.each(d, function(a) {
              var f = d[a];
              if ("string" == typeof f) {
                var g = r(f);
                e[a] = {
                  formatString: c(f),
                  chunkNames: b(g, a)
                }
              }
            }), e
          }
          function m(b, c) {
            a.each(c, function(a) {
              for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++) b[c[a].chunkNames[g]] = +e[g];
              delete b[a]
            })
          }
          function n(b, c) {
            a.each(c, function(a) {
              var d = b[a],
                  e = o(b, c[a].chunkNames),
                  f = p(e, c[a].chunkNames);
              d = q(c[a].formatString, f), b[a] = j(d)
            })
          }
          function o(a, b) {
            for (var c, d = {}, e = b.length, f = 0; e > f; f++) c = b[f], d[c] = a[c], delete a[c];
            return d
          }
          function p(a, b) {
            D.length = 0;
            for (var c = b.length, d = 0; c > d; d++) D.push(a[b[d]]);
            return D
          }
          function q(a, b) {
            for (var c = a, d = b.length, e = 0; d > e; e++) c = c.replace(A, +b[e].toFixed(4));
            return c
          }
          function r(a) {
            return a.match(w)
          }
          function s(b, c) {
            a.each(c, function(a) {
              for (var d = c[a], e = d.chunkNames, f = e.length, g = b[a].split(" "), h = g[g.length - 1], i = 0; f > i; i++) b[e[i]] = g[i] || h;
              delete b[a]
            })
          }
          function t(b, c) {
            a.each(c, function(a) {
              for (var d = c[a], e = d.chunkNames, f = e.length, g = "", h = 0; f > h; h++) g += " " + b[e[h]], delete b[e[h]];
              b[a] = g.substr(1)
            })
          }
          var u = /(\d|\-|\.)/,
              v = /([^\-0-9\.]+)/g,
              w = /[0-9.\-]+/g,
              x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
              y = /^.*\(/,
              z = /#([0-9]|[a-f]){3,6}/gi,
              A = "VAL",
              B = [],
              C = [],
              D = [];
          a.prototype.filter.token = {
            tweenCreated: function(a, b, c) {
              d(a), d(b), d(c), this._tokenData = l(a)
            },
            beforeTween: function(a, b, c, d) {
              s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData)
            },
            afterTween: function(a, b, c, d) {
              n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData)
            }
          }
        }(e)
      }(this)
    }, {}],
    2: [function(a, b) {
      var c = a("./shape"),
          d = a("./utils"),
          e = function() {
          this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", c.apply(this, arguments)
          };
      e.prototype = new c, e.prototype.constructor = e, e.prototype._pathString = function(a) {
        var b = a.strokeWidth;
        a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
        var c = 50 - b / 2;
        return d.render(this._pathTemplate, {
          radius: c,
          "2radius": 2 * c
        })
      }, e.prototype._trailString = function(a) {
        return this._pathString(a)
      }, b.exports = e
    }, {
      "./shape": 6,
      "./utils": 8
    }],
    3: [function(a, b) {
      var c = a("./shape"),
          d = a("./utils"),
          e = function() {
          this._pathTemplate = "M 0,{center} L 100,{center}", c.apply(this, arguments)
          };
      e.prototype = new c, e.prototype.constructor = e, e.prototype._initializeSvg = function(a, b) {
        a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth), a.setAttribute("preserveAspectRatio", "none")
      }, e.prototype._pathString = function(a) {
        return d.render(this._pathTemplate, {
          center: a.strokeWidth / 2
        })
      }, e.prototype._trailString = function(a) {
        return this._pathString(a)
      }, b.exports = e
    }, {
      "./shape": 6,
      "./utils": 8
    }],
    4: [function(a, b) {
      var c = a("./line"),
          d = a("./circle"),
          e = a("./square"),
          f = a("./path");
      b.exports = {
        Line: c,
        Circle: d,
        Square: e,
        Path: f
      }
    }, {
      "./circle": 2,
      "./line": 3,
      "./path": 5,
      "./square": 7
    }],
    5: [function(a, b) {
      var c = a("shifty"),
          d = a("./utils"),
          e = {
          easeIn: "easeInCubic",
          easeOut: "easeOutCubic",
          easeInOut: "easeInOutCubic"
          },
          f = function(a, b) {
          b = d.extend({
            duration: 800,
            easing: "linear",
            from: {},
            to: {},
            step: function() {}
          }, b);
          var c;
          c = d.isString(a) ? document.querySelector(a) : a, this.path = c, this._opts = b, this._tweenable = null;
          var e = this.path.getTotalLength();
          this.path.style.strokeDasharray = e + " " + e, this.set(0)
          };
      f.prototype.value = function() {
        var a = this._getComputedDashOffset(),
            b = this.path.getTotalLength(),
            c = 1 - a / b;
        return parseFloat(c.toFixed(6), 10)
      }, f.prototype.set = function(a) {
        this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(a);
        var b = this._opts.step;
        if (d.isFunction(b)) {
          var c = this._easing(this._opts.easing),
              e = this._calculateTo(a, c);
          b(e, this._opts.shape || this, this._opts.attachment)
        }
      }, f.prototype.stop = function() {
        this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
      }, f.prototype.animate = function(a, b, e) {
        b = b || {}, d.isFunction(b) && (e = b, b = {});
        var f = d.extend({}, b),
            g = d.extend({}, this._opts);
        b = d.extend(g, b);
        var h = this._easing(b.easing),
            i = this._resolveFromAndTo(a, h, f);
        this.stop(), this.path.getBoundingClientRect();
        var j = this._getComputedDashOffset(),
            k = this._progressToOffset(a),
            l = this;
        this._tweenable = new c, this._tweenable.tween({
          from: d.extend({
            offset: j
          }, i.from),
          to: d.extend({
            offset: k
          }, i.to),
          duration: b.duration,
          easing: h,
          step: function(a) {
            l.path.style.strokeDashoffset = a.offset, b.step(a, b.shape || l, b.attachment)
          },
          finish: function() {
            d.isFunction(e) && e()
          }
        })
      }, f.prototype._getComputedDashOffset = function() {
        var a = window.getComputedStyle(this.path, null);
        return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10)
      }, f.prototype._progressToOffset = function(a) {
        var b = this.path.getTotalLength();
        return b - a * b
      }, f.prototype._resolveFromAndTo = function(a, b, c) {
        return c.from && c.to ? {
          from: c.from,
          to: c.to
        } : {
          from: this._calculateFrom(b),
          to: this._calculateTo(a, b)
        }
      }, f.prototype._calculateFrom = function(a) {
        return c.interpolate(this._opts.from, this._opts.to, this.value(), a)
      }, f.prototype._calculateTo = function(a, b) {
        return c.interpolate(this._opts.from, this._opts.to, a, b)
      }, f.prototype._stopTween = function() {
        null !== this._tweenable && (this._tweenable.stop(), this._tweenable.dispose(), this._tweenable = null)
      }, f.prototype._easing = function(a) {
        return e.hasOwnProperty(a) ? e[a] : a
      }, b.exports = f
    }, {
      "./utils": 8,
      shifty: 1
    }],
    6: [function(a, b) {
      var c = a("./path"),
          d = a("./utils"),
          e = "Object is destroyed",
          f = function g(a, b) {
          if (!(this instanceof g)) throw new Error("Constructor was called without new keyword");
          if (0 !== arguments.length) {
            this._opts = d.extend({
              color: "#555",
              strokeWidth: 1,
              trailColor: null,
              trailWidth: null,
              fill: null,
              text: {
                autoStyle: !0,
                color: null,
                value: "",
                className: "progressbar-text"
              }
            }, b, !0);
            var e, f = this._createSvgView(this._opts);
            if (e = d.isString(a) ? document.querySelector(a) : a, !e) throw new Error("Container does not exist: " + a);
            this._container = e, this._container.appendChild(f.svg), this.text = null, this._opts.text.value && (this.text = this._createTextElement(this._opts, this._container), this._container.appendChild(this.text)), this.svg = f.svg, this.path = f.path, this.trail = f.trail;
            var h = d.extend({
              attachment: void 0,
              shape: this
            }, this._opts);
            this._progressPath = new c(f.path, h)
          }
          };
      f.prototype.animate = function(a, b, c) {
        if (null === this._progressPath) throw new Error(e);
        this._progressPath.animate(a, b, c)
      }, f.prototype.stop = function() {
        if (null === this._progressPath) throw new Error(e);
        void 0 !== this._progressPath && this._progressPath.stop()
      }, f.prototype.destroy = function() {
        if (null === this._progressPath) throw new Error(e);
        this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
      }, f.prototype.set = function(a) {
        if (null === this._progressPath) throw new Error(e);
        this._progressPath.set(a)
      }, f.prototype.value = function() {
        if (null === this._progressPath) throw new Error(e);
        return void 0 === this._progressPath ? 0 : this._progressPath.value()
      }, f.prototype.setText = function(a) {
        if (null === this._progressPath) throw new Error(e);
        null === this.text && (this.text = this._createTextElement(this._opts, this._container), this._container.appendChild(this.text)), this.text.removeChild(this.text.firstChild), this.text.appendChild(document.createTextNode(a))
      }, f.prototype._createSvgView = function(a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this._initializeSvg(b, a);
        var c = null;
        (a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c));
        var d = this._createPath(a);
        return b.appendChild(d), {
          svg: b,
          path: d,
          trail: c
        }
      }, f.prototype._initializeSvg = function(a) {
        a.setAttribute("viewBox", "0 0 100 100")
      }, f.prototype._createPath = function(a) {
        var b = this._pathString(a);
        return this._createPathElement(b, a)
      }, f.prototype._createTrail = function(a) {
        var b = this._trailString(a),
            c = d.extend({}, a);
        return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), c.color = c.trailColor, c.strokeWidth = c.trailWidth, c.fill = null, this._createPathElement(b, c)
      }, f.prototype._createPathElement = function(a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c
      }, f.prototype._createTextElement = function(a, b) {
        var c = document.createElement("p");
        return c.appendChild(document.createTextNode(a.text.value)), a.text.autoStyle && (b.style.position = "relative", c.style.position = "absolute", c.style.top = "50%", c.style.left = "50%", c.style.padding = 0, c.style.margin = 0, d.setStyle(c, "transform", "translate(-50%, -50%)"), c.style.color = a.text.color ? a.text.color : a.color), c.className = a.text.className, c
      }, f.prototype._pathString = function() {
        throw new Error("Override this function for each progress bar")
      }, f.prototype._trailString = function() {
        throw new Error("Override this function for each progress bar")
      }, b.exports = f
    }, {
      "./path": 5,
      "./utils": 8
    }],
    7: [function(a, b) {
      var c = a("./shape"),
          d = a("./utils"),
          e = function() {
          this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", c.apply(this, arguments)
          };
      e.prototype = new c, e.prototype.constructor = e, e.prototype._pathString = function(a) {
        var b = 100 - a.strokeWidth / 2;
        return d.render(this._pathTemplate, {
          width: b,
          strokeWidth: a.strokeWidth,
          halfOfStrokeWidth: a.strokeWidth / 2
        })
      }, e.prototype._trailString = function(a) {
        var b = 100 - a.strokeWidth / 2;
        return d.render(this._trailTemplate, {
          width: b,
          strokeWidth: a.strokeWidth,
          halfOfStrokeWidth: a.strokeWidth / 2,
          startMargin: a.strokeWidth / 2 - a.trailWidth / 2
        })
      }, b.exports = e
    }, {
      "./shape": 6,
      "./utils": 8
    }],
    8: [function(a, b) {
      function c(a, b, d) {
        a = a || {}, b = b || {}, d = d || !1;
        for (var e in b) if (b.hasOwnProperty(e)) {
          var f = a[e],
              g = b[e];
          a[e] = d && j(f) && j(g) ? c(f, g, d) : g
        }
        return a
      }
      function d(a, b) {
        var c = a;
        for (var d in b) if (b.hasOwnProperty(d)) {
          var e = b[d],
              f = "\\{" + d + "\\}",
              g = new RegExp(f, "g");
          c = c.replace(g, e)
        }
        return c
      }
      function e(a, b, c) {
        for (var d = 0; d < k.length; ++d) {
          var e = k[d];
          a.style[e + f(b)] = c
        }
        a.style[b] = c
      }
      function f(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
      }
      function g(a) {
        return "string" == typeof a || a instanceof String
      }
      function h(a) {
        return "function" == typeof a
      }
      function i(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
      }
      function j(a) {
        if (i(a)) return !1;
        var b = typeof a;
        return "object" === b && !! a
      }
      var k = "Webkit Moz O ms".split(" ");
      b.exports = {
        extend: c,
        render: d,
        setStyle: e,
        capitalize: f,
        isString: g,
        isFunction: h,
        isObject: j
      }
    }, {}]
  }, {}, [4])(4)
});
//# sourceMappingURL=progressbar.min.js.map

(function() {
  "use strict";
  var $, Animation, Growl,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  Animation = (function() {
    function Animation() {}

    Animation.transitions = {
      "webkitTransition": "webkitTransitionEnd",
      "mozTransition": "mozTransitionEnd",
      "oTransition": "oTransitionEnd",
      "transition": "transitionend"
    };

    Animation.transition = function($el) {
      var el, ref, result, type;
      el = $el[0];
      ref = this.transitions;
      for (type in ref) {
        result = ref[type];
        if (el.style[type] != null) {
          return result;
        }
      }
    };

    return Animation;

  })();

  Growl = (function() {
    Growl.settings = {
      namespace: 'growl',
      duration: 3200,
      close: "&#215;",
      location: "default",
      style: "default",
      size: "medium",
      delayOnHover: true
    };

    Growl.growl = function(settings) {
      if (settings == null) {
        settings = {};
      }
      this.initialize();
      return new Growl(settings);
    };

    Growl.initialize = function() {
      return $("body:not(:has(#growls))").append('<div id="growls" />');
    };

    function Growl(settings) {
      if (settings == null) {
        settings = {};
      }
      this.container = bind(this.container, this);
      this.content = bind(this.content, this);
      this.html = bind(this.html, this);
      this.$growl = bind(this.$growl, this);
      this.$growls = bind(this.$growls, this);
      this.animate = bind(this.animate, this);
      this.remove = bind(this.remove, this);
      this.dismiss = bind(this.dismiss, this);
      this.present = bind(this.present, this);
      this.waitAndDismiss = bind(this.waitAndDismiss, this);
      this.cycle = bind(this.cycle, this);
      this.close = bind(this.close, this);
      this.click = bind(this.click, this);
      this.mouseLeave = bind(this.mouseLeave, this);
      this.mouseEnter = bind(this.mouseEnter, this);
      this.unbind = bind(this.unbind, this);
      this.bind = bind(this.bind, this);
      this.render = bind(this.render, this);
      this.settings = $.extend({}, Growl.settings, settings);
      this.$growls().attr('class', this.settings.location);
      this.render();
    }

    Growl.prototype.render = function() {
      var $growl;
      $growl = this.$growl();
      this.$growls().append($growl);
      if (this.settings.fixed) {
        this.present();
      } else {
        this.cycle();
      }
    };

    Growl.prototype.bind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      $growl.on("click", this.click);
      if (this.settings.delayOnHover) {
        $growl.on("mouseenter", this.mouseEnter);
        $growl.on("mouseleave", this.mouseLeave);
      }
      return $growl.on("contextmenu", this.close).find("." + this.settings.namespace + "-close").on("click", this.close);
    };

    Growl.prototype.unbind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      $growl.off("click", this.click);
      if (this.settings.delayOnHover) {
        $growl.off("mouseenter", this.mouseEnter);
        $growl.off("mouseleave", this.mouseLeave);
      }
      return $growl.off("contextmenu", this.close).find("." + this.settings.namespace + "-close").off("click", this.close);
    };

    Growl.prototype.mouseEnter = function(event) {
      var $growl;
      $growl = this.$growl();
      return $growl.stop(true, true);
    };

    Growl.prototype.mouseLeave = function(event) {
      return this.waitAndDismiss();
    };

    Growl.prototype.click = function(event) {
      if (this.settings.url != null) {
        event.preventDefault();
        event.stopPropagation();
        return window.open(this.settings.url);
      }
    };

    Growl.prototype.close = function(event) {
      var $growl;
      event.preventDefault();
      event.stopPropagation();
      $growl = this.$growl();
      return $growl.stop().queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.cycle = function() {
      var $growl;
      $growl = this.$growl();
      return $growl.queue(this.present).queue(this.waitAndDismiss());
    };

    Growl.prototype.waitAndDismiss = function() {
      var $growl;
      $growl = this.$growl();
      return $growl.delay(this.settings.duration).queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.present = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.bind($growl);
      return this.animate($growl, this.settings.namespace + "-incoming", 'out', callback);
    };

    Growl.prototype.dismiss = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.unbind($growl);
      return this.animate($growl, this.settings.namespace + "-outgoing", 'in', callback);
    };

    Growl.prototype.remove = function(callback) {
      this.$growl().remove();
      return typeof callback === "function" ? callback() : void 0;
    };

    Growl.prototype.animate = function($element, name, direction, callback) {
      var transition;
      if (direction == null) {
        direction = 'in';
      }
      transition = Animation.transition($element);
      $element[direction === 'in' ? 'removeClass' : 'addClass'](name);
      $element.offset().position;
      $element[direction === 'in' ? 'addClass' : 'removeClass'](name);
      if (callback == null) {
        return;
      }
      if (transition != null) {
        $element.one(transition, callback);
      } else {
        callback();
      }
    };

    Growl.prototype.$growls = function() {
      return this.$_growls != null ? this.$_growls : this.$_growls = $('#growls');
    };

    Growl.prototype.$growl = function() {
      return this.$_growl != null ? this.$_growl : this.$_growl = $(this.html());
    };

    Growl.prototype.html = function() {
      return this.container(this.content());
    };

    Growl.prototype.content = function() {
      return "<div class='" + this.settings.namespace + "-close'>" + this.settings.close + "</div>\n<div class='" + this.settings.namespace + "-title'>" + this.settings.title + "</div>\n<div class='" + this.settings.namespace + "-message'>" + this.settings.message + "</div>";
    };

    Growl.prototype.container = function(content) {
      return "<div class='" + this.settings.namespace + " " + this.settings.namespace + "-" + this.settings.style + " " + this.settings.namespace + "-" + this.settings.size + "'>\n  " + content + "\n</div>";
    };

    return Growl;

  })();

  this.Growl = Growl;

  $.growl = function(options) {
    if (options == null) {
      options = {};
    }
    return Growl.growl(options);
  };

  $.growl.error = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Error!",
      style: "error"
    };
    return $.growl($.extend(settings, options));
  };

  $.growl.notice = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Notice!",
      style: "notice"
    };
    return $.growl($.extend(settings, options));
  };

  $.growl.warning = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Warning!",
      style: "warning"
    };
    return $.growl($.extend(settings, options));
  };

}).call(this);

/* JQUERY DIV SORT PLUGIN BY ARMIN */
jQuery.fn.sortDivs = function sortDivs(attr) {
var $container = $(this[0]),
$element = $container.children('div');
$element.sort(function(a,b){
var an = parseFloat(a.getAttribute(attr)),bn = parseFloat(b.getAttribute(attr));
if(an > bn) return -1;
if(an < bn) return 1;
return 0;
});
$element.detach().appendTo($container);
}
/*jQuery.fn.vertScroll = function vertScroll() {
var $container = $(this[0]);
var $width = 0;$container.children('div').each(function(i, item) {$width+=$(item).outerWidth(true);});
var $single = $container.children('div').outerWidth(true);
var html = '<div class="horizontal-scroll-left"><span class="glyphicon glyphicon-chevron-left"></span></div><div class="horizontal-scroll-right"><span class="glyphicon glyphicon-chevron-right"></span></div><div class="horizontal-scroll-content"><div style="width:'+$width+'px" class="horizontal-scroll-content_inner">'+$container.html()+'</div></div>';
$container.html(html);
$container.on('click', '.horizontal-scroll-left', function(e) {
var $margin_left = parseFloat($container.find('.horizontal-scroll-content_inner').css('margin-left'));
var $wrapWidth = parseFloat($container.find('.horizontal-scroll-content').outerWidth());
if($margin_left<0) $container.find('.horizontal-scroll-content_inner').stop(true,true).animate({
'margin-left':'+='+$single
}, 500, function() {
$margin_left = parseFloat($container.find('.horizontal-scroll-content_inner').css('margin-left'));
if($margin_left>0) $container.find('.horizontal-scroll-content_inner').stop(true,true).animate({'margin-left':'0'});
});
});
$container.on('click', '.horizontal-scroll-right', function(e) {
var $wrapWidth = parseFloat($container.find('.horizontal-scroll-content').outerWidth());
var $margin_left = parseFloat($container.find('.horizontal-scroll-content_inner').css('margin-left'));
if($margin_left>-($width-$wrapWidth-$single)) $container.find('.horizontal-scroll-content_inner').stop(true,true).animate({
'margin-left':'-='+$single
}, 500, function() {
$wrapWidth = parseFloat($container.find('.horizontal-scroll-content').outerWidth());
$margin_left = parseFloat($container.find('.horizontal-scroll-content_inner').css('margin-left'));
if($margin_left>=-($width-$wrapWidth-$single)) $container.find('.horizontal-scroll-content_inner').stop(true,true).animate({'margin-left':-($width-$wrapWidth-$single)});
});
});
}*/function armin_modal(params) {
    var p = {
        id: 'main',                         title: 'Untitled',                  body: '',                           customClass: '',                    customAttributes: {},       // object {'key': 'value'}
        width: 0,                           oncreate: function() {}         };
    for(var i in params) p[i] = params[i];

    var modalBlock = template('#template_modal', ['modalWnd_'+p.id, p.title, p.body, p.customClass]);
    if($('#modalWnd_'+p.id).length==0) {
        $('body').append(modalBlock);
        $('.blur-content').addClass('blur');
    }
    else $('#modalWnd_'+p.id).replaceWith(modalBlock);
        for(var i in p.customAttributes) $('#modalWnd_'+p.id).attr(i, p.customAttributes[i]);
        if(p.width > 0 && !isNaN(p.width)) $('#modalWnd_'+p.id+' .modal').outerWidth(p.width);

    $('#modalWnd_'+p.id).fadeIn(300);
    $('#modalWnd_'+p.id+' [rel="modal:close"]').click(function(e) {
        e.preventDefault();
        $('.blur-content').removeClass('blur');
        $('#modalWnd_'+p.id).fadeOut(300);
        setTimeout(function() {$('#modalWnd_'+p.id).remove();}, 300);
    });
    if(typeof p.oncreate === 'function') setTimeout(p.oncreate, 300);
}
function modalAlert(text) {
  armin_modal({
    title: '&nbsp;',
    body: text+'<br/>'+
    '<div class="form-btn-center"><button type="submit" href="javascript://" onclick="$(\'.close-modal\').click();return false;" class="form-btn form-btn-login gradient-purple"><span>OK</span></button></div>',
    width:450
  });
}
function apireq(method,params,callback) {
    var data = [];
    if(typeof params === 'object') {for(let param in params) data.push(param+'='+encodeURIComponent(params[param]));data=data.join('&');}
    else data = params;
    $.post('/'+method, data, function(d) {
        if(typeof d !== 'object') return modalAlert('Internal server error');
        if(typeof callback === 'function') return callback(d); else return true;
    });
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
  options = options || {};
 
  var expires = options.expires;
 
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires*1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
 
  value = encodeURIComponent(value);
 
  var updatedCookie = name + "=" + value;
 
  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];   
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
     }
  }
 
  document.cookie = updatedCookie;
}
function deleteCookie(name) {
  setCookie(name, "", { expires: -1 })
}
function template(selector, vars) {
var html = $(selector).html();for(i=0;i<vars.length;i++) html = html.split('$VAR_'+(i+1)+'$').join(vars[i]);return html;
}
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function armin_countdown(target, sec_num) {
  var sec_num = parseInt(sec_num, 10);
  if(sec_num < 0) sec_num = 0;
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  $(target).html(hours+':'+minutes+':'+seconds);
  if(sec_num>0) setTimeout(function(){armin_countdown(target, --sec_num);},1000);
}/* WEBSOCKETS */
function ws_reconnect() {
  if($('#reconnect').html()=='') $('#reconnect').html('ÐŸÐµÑ€ÐµÐ¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ...');
  //else if($('#reconnect').html()!='') $('#reconnect .try').html(parseInt($('#reconnect .try').html())+1);
  if(!WS) {
    ws_connect();
  }
  else 
    $('#reconnect').html('');
}

function ws_connect() {
  return;
  if (!WS) {
    var data = USER_ID + ":" + TOKEN + ":" + ROOM;
    if (window.location.protocol != "https:") {ws_proto='ws';} else {ws_proto='wss';}
    WS = new WebSocket(ws_proto+"://"+window.location.hostname+"/socket.io/" + data);
    WS.onopen = function() {
      WS_IS_CONNECTED = true;
        console.log("Connection!");
            $('#chat_form_enabled').show();
            $('#chat_form_disabled').hide();
    };
    WS.onerror = function(event) {
      WS_IS_CONNECTED = false;
        console.log("Connection error.");
            $('#chat_form_enabled').hide();
            $('#chat_form_disabled').show();
    };
    WS.onclose = function(event) {
      WS_IS_CONNECTED = false;
        console.log("Connection close.");
            $('#chat_form_enabled').hide();
            $('#chat_form_disabled').show();
      WS = false;
      ws_reconnect();
    };
    WS.onmessage = onMessage;
  }
  else {
        console.log("Error: Existing connection found");
    }
}
function send(msg) {
    if (typeof msg != "string") {
        msg = JSON.stringify(msg);
    }
    if (WS && WS.readyState == 1) {
        WS.send(msg);
    }
}

function onMessage(msg) {
  try {
    var m = JSON.parse(msg.data);
        console.log(m);
    if (m.type == "message") swal('', m.message, m.m_type);
        else if (m.type == "chatMsg" && m.message != '***DELETED***') {
            ws_chatmessage(m.from.userid, m.from.avatar, m.from.displayName, m.message, m.admin, m.datetime, m.id);
        }
        else if (m.type == 'chatDelete') $('#chat [data-id="'+m.mid+'"]').remove();
        else if (m.type == "chatConnect") {
            for (var k in m.items) {
                var evv = m.items[k];
                if(evv.message != '***DELETED***') ws_chatmessage(evv.from.userid, evv.from.avatar, evv.from.displayName, evv.message, evv.admin, evv.datetime, evv.id);
            }
        }
        else if (m.type == 'userCount') $('#online_count').numerator({
            toValue: m.count,
            duration: 300,
            rounding: 0
        });
    else if (m.type == "growl") {
      if(m.m_type == 'error') swal(m.title, m.message, 'error');
      else if(m.m_type == 'notice') swal(m.title, m.message, 'info');
      else if(m.m_type == 'warning')  swal(m.title, m.message, 'warning');
      else swal(m.title, m.message);
      if(m.hasOwnProperty('sound') && m.sound.length > 0) {
        if(getCookie('disable_sound')!='1') {
          var audio = new Audio(m.sound);
          audio.play();
        }
      }
    }
        else if (m.type == "closeSwal") swal.close();
    else if (m.type == "redirect_message") swal({
      title: m.title,
      text: m.text,
      type: m.m_type,
      showCancelButton: true,
      confirmButtonText: "ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸",
      cancelButtonText: "ÐžÑ‚Ð¼ÐµÐ½Ð°",
      closeOnConfirm: false,
      closeOnCancel: true,
      html: true
    },
    function(isConfirm){
      if (isConfirm) {
        top.location.href = m.url;
      }
    });
    else if (m.type == "balance") {
        wallet = m.value.toFixed(2);
        $('#wallet').numerator({
            toValue: wallet,
            rounding: 2,
            duration: 1000
        });
    }
    else if (m.type == "support_ticket") {
      if(ROOM=='support' && $('#support_show_ticket_panel').is(':visible')) getSupportTicket(m.ticketid);
      else swal({
        title: 'New message in support',
        text: 'Would you like to read it now?',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: "Read",
        cancelButtonText: "Later",
        closeOnConfirm: true,
        closeOnCancel: true,
        html: true
      },
      function(isConfirm){
        if (isConfirm) {
          if(ROOM=='support') getSupportTicket(m.ticketid);
          else top.location.href = '/support';
        }
      });
    }
    else if(m.type=='sellOffer') {
      swal({
        title: 'Your offer is ready',
        text: 'Accept it through browser?',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: "Accept",
        cancelButtonText: "Close",
        closeOnConfirm: true,
        closeOnCancel: true,
        html: true
      },
      function(isConfirm){
        if (isConfirm) {
          openOffer(m.offerid, 'browser');
        }
      });
    }
    /* JACKPOT EVENTS */
    else if(m.type=='jackpotCountdown') {
      var mins = (Math.floor(m.countdown/60)).toString();if(mins<10) mins='0'+mins;
      var secs = (m.countdown%60).toString();if(secs<10) secs='0'+secs;
      $('#jackpot_timer').html('<span>'+mins[0]+'</span><span>'+mins[1]+'</span>:<span>'+secs[0]+'</span><span>'+secs[1]+'</span>');
      try {
                $('#jackpotCircle').circleProgress('value', 1-(m.countdown-1)/m.total);
      } catch(e) {}
    }
    else if(m.type=='jackpotNextGame') {
      var mins = (Math.floor(m.countdown/60)).toString();if(mins<10) mins='0'+mins;
      var secs = (m.countdown%60).toString();if(secs<10) secs='0'+secs;
      $('#jackpot_timer').html('<span>'+mins[0]+'</span><span>'+mins[1]+'</span>:<span>'+secs[0]+'</span><span>'+secs[1]+'</span>');
      try {
        $('#jackpotCircle').circleProgress('value', 1-(m.countdown-1)/m.total);
      } catch(e) {}
      if (m.countdown <= 0) {
        $("#jackpot_bets").html('');
                /* ENABLE NO PLAYERS */
                $('#jackpot_no_players').show();
                $('#jackpot_has_players').hide();

                $('#jackpot_itemlist').html('');$.event.trigger({type: "updateSwiper"});
                $('#chart').html('<div class="chartEmpty"></div>');
                jackpotChart = false;
        $("#jackpot_bank").numerator({
          toValue: 0,
          duration: 300,
          rounding: 2
        });
        $("#jackpot_items_count").numerator({
          toValue: 0,
          duration: 300
        });
        $('#jackpot_game_end').html('');
        $('#jackpot_carousel').hide();
        $('#jackpot_chances').show();
      }
    }
    else if(m.type=='jackpotHash') {
      $('#jackpot_gameid').html(m.gameid);
      $('#jackpot_hash').html(m.hash);
    }
    else if(m.type=='jackpotBetList') {
                        if(m.items.length > 0) {
                $('#jackpot_no_players').hide();
                $('#jackpot_has_players').show();
            }
            else {
                $('#jackpot_no_players').show();
                $('#jackpot_has_players').hide();
            }
                  $('#jackpot_hash').html(m.hash);
      for(i in m.items) jackpotBet(m.items[i], false);
    }
    else if(m.type=='jackpotBet') {
            /* HIDE NO PLAYERS */
            $('#jackpot_no_players').hide();
            $('#jackpot_has_players').show();
      jackpotBet(m, true);
    }
    else if(m.type=='jackpotEnd') {
      jackpotEnd(m);
    }
    else if(m.type=='jackpotLastWinner') {
      $('#jackpot_last_winner').html(template('#template_jackpot_last_winner',[
        m.user.userid,
        m.user.username,
        m.user.avatar,
        m.user.sum,
        m.user.chance 
      ]));
    }
    else if(m.type == 'jackpotHistory') {
      m.history = m.history.reverse();
      for (var index = 0, len = m.history.length; index < len; ++index) jackpotNewHistory(m.history[index], false);
    }
    else if(m.type == 'jackpotNewHistory') jackpotNewHistory(m.history, true);
    /* COINFLIP EVENTS */
        else if(m.type == 'coinflipHistory') {
            m.history = m.history.reverse();
            for (var index = 0, len = m.history.length; index < len; ++index) coinflipNewHistory(m.history[index], false);
        }
        else if(m.type == 'coinflipNewHistory') coinflipNewHistory(m.history, true);
    else if(m.type=='coinflipBetList') {
            $('#coinflipGames').html('');
      for(var gameid in m.bets) {
        if(m.bets[gameid].userid_player.userid == '') newFlip(m.bets[gameid]);
        else updateFlip(m.bets[gameid],true);
      }
    }
    else if(m.type=='newFlip') {
      newFlip(m);
    }
    else if(m.type=='updateFlip') {
      updateFlip(m, false);
    }
    else if(m.type=='timerFlip') {
      try {
        //coinflip_timers[m.gameid].animate(m.passed/m.total);
        //$('.coinflipBlock[data-gameid="'+m.gameid+'"] .timeleft').html(m.passed);
                $('#coinflipGames [data-gameid="'+m.gameid+'"] .coin-percent-num').html(m.passed);
                $('#coinflipGames [data-gameid="'+m.gameid+'"] .coin-percent-circle').circleProgress('value', m.passed/m.total);
      } catch(e) {}
    }
    else if(m.type=='resultFlip') {
            if(m.winner == USER_ID) {
                swal({title: 'We have good news, you won!', text:'<div style="font-size:14px;line-height:22px;font-family:GothamPro-Bold;text-transform:uppercase">Total amount of win = <span class="text-purple">'+m.prize+'$</span><br/>Withdraw your winnings in <a href="/profile" class="text-purple">your profile</a>!</div><div style="margin-top:20px;">For support, inqueries, refer to <a href="/tos" class="text-purple">FAQ</a> before contacting our support</div><div style="color:#e55039">Do not trust anyone who NOT in our STAFF group</div>',html:true});
                getBalance();
            }
            $('#coinflipGames > [data-gameid="'+m.gameid+'"]:eq(0) .coin-winner-ico').fadeIn(100);
            $('#coinflipGames > [data-gameid="'+m.gameid+'"]:eq(0) .coin-winner-ico > img').addClass('animated flipInX');
            $('#coinflipGames > [data-gameid="'+m.gameid+'"]:eq(0) .coin-winner-ico > img').attr('src', '/style/img/icons/'+m.winner_color+'.png');
            $('#coinflipGames > [data-gameid="'+m.gameid+'"]:eq(0) .coin-winner-ava > img').addClass('animated flipInX');
            $('#coinflipGames > [data-gameid="'+m.gameid+'"]:eq(0) .coin-winner-ava > img').attr('src', m.winner_avatar);

      //$('#coinflipGames > [data-gameid="'+m.gameid+'"] .winner').show().addClass('animated flipInY').css('background-image', 'url(\''+m.winner_avatar+'\')');
      setTimeout(function() {
        //$('#coinflipGames > [data-gameid="'+m.gameid+'"]').removeClass('animated').addClass('animated lightSpeedOut');
        $('#coinflipGames > [data-gameid="'+m.gameid+'"]').slideUp(800);
                setTimeout(function() {
          $('#coinflipGames > [data-gameid="'+m.gameid+'"]').remove();
        },1000);
      }, 15000);
    }
        else if(m.type=='coinflipView') coinflipView(m.data, m.gameid);
    /* DEBUG */
    else debug_event(m);
  }
  catch (e) {
          //console.error("Error: " + msg.data + " " + e);
    }
}function debug_event(m) {
  }
function hashManual() {
    swal({
        title: 'What is HASH and ROUND NUMBER?', 
        text:'The hash is a md5 encryption of the round secret and winning percentage in the following format percentage:secret When the round is over, both the secret and the winning percentage are revealed.', 
        type:'info', html:true
    });
}
function ws_chatmessage(userid, avatar, nickname, text, is_admin, datetime, id) {
    datetime = typeof datetime !== 'undefined' ? datetime : '';
    realtext = escapeHtml(text).split("\n");text = [];
    for(var i in realtext) {realtext[i] = realtext[i].trim();if(realtext[i].length > 0) text.push(realtext[i]);}
    text = text.join('<br/>').trim();
    if(text.length > 0) {
        $('#chat > .chat-list').append(template('#template_chatmessage', [
            userid, 
            escapeHtml(nickname), 
            avatar, 
            text, 
            is_admin,
            datetime,
            id
        ]));
        var wtf    = $('#chat > .chat-list');
        var height = wtf[0].scrollHeight;
        wtf.scrollTop(height);
    }
}
function getSupportTickets() {
  $('#support_tickets_panel').html('<div class="alert alert-info"><i class="fa fa-circle-o-notch fa-spin"></i> Loading tickets</div>');
  apireq('supportTickets', [], function(d) {
    if(d.success == true) {
      if(d.data.length>0) {
        var html = '';
        for(id in d.data) {
            var date = d.data[id].date.split(' ');
            html+='<a href="javascript://" data-id="'+d.data[id].id+'" class="tiket-item wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"><div class="tiket-item-num"><span>Ticket #'+d.data[id].id+': </span></div><div class="tiket-item-name">'+d.data[id].subject+'</div><div class="tiket-item-right"><span class="tiket-item-status text-'+(d.data[id].open=='0'?'red">closed':'green">open')+'</span><span class="tiket-item-date">'+date[0]+' <span class="text-color-white">'+date[1]+'</span></span></div></a>';
        }
        $('#support_tickets_panel').html(html);
      }
      else $('#support_tickets_panel').html('<div class="alert alert-info">You have no tickets</div>');
    }
    else swal('Error', 'Server internal error', 'error');
  });
}
function getSupportTicket(id) {
    console.log('Get support ticket #'+id);
  $('#support_tickets_panel').hide();
  $('#support_create_panel').hide();
  $('#support_show_ticket_panel').show();
  $('#support_title').html(' - loading...');
  $('#support_show_ticket_messages').html('<div class="alert alert-info"><i class="fa fa-circle-o-notch fa-spin"></i> Loading ticket</div>');
  apireq('supportTicket', 'id='+encodeURIComponent(id), function(d) {
    if(d.success == true) {
        $('#support_show_ticket_panel input[name="ticketid"]').val(id);
        $('#support_show_ticket_messages').html('');
        $('#support_title').html(' - #'+id+' ('+d.data.subject+')');
        for(id in d.data.messages) {
            var date = (d.data.messages[id].hasOwnProperty('date')?d.data.messages[id].date.split(' '):['','']);
            $('#support_show_ticket_messages').append(template('#template_support_ticketview_message', [
                d.data.messages[id].userid,
                d.data.messages[id].avatar,
                d.data.messages[id].message,
                d.data.messages[id].username,
                date[0],
                date[1]
            ]));
        }
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    }
    else swal('Error', 'Server internal error', 'error');
  });
}
WS = false;
var jackpotChart = false;
var currency = {};


function openBetPanel(mode, gameid) {
    gameid = typeof gameid !== 'undefined' ? gameid : '';
    var form_html = '';
    var title = 'Make deposit';
    if(mode == 'coinflip' && gameid != '') title = 'Join game';
    else if(mode == 'coinflip' && gameid == '') title = 'Create game';
    var button_caption = 'Deposit';
    if(gameid != '') button_caption = 'Join';
    
    form_html += (mode=='coinflip' && gameid == ''?'<div><div class="select-btn-wr" style="margin-left: -20px;margin-right: -20px;"><img src="/style/img/arrows.png" alt=""><a href="javascript://" id="makeBetCtSide" class="select-btn left active" style="height:auto;width:auto;"><img style="width:32px;" src="/style/img/6.png" alt=""></a>&nbsp;<span style="text-transform:uppercase;">Choose your side</span>&nbsp;<a href="javascript://" id="makeBetTSide" class="select-btn right" style="height:auto;width:auto;"><img style="width:32px;" src="/style/img/5.png" alt=""></a><img src="/style/img/arrows_l.png" alt=""></div></div>':'');
    form_html += (gameid == ''?'<div class="textInputLabel">USD value to bet:</div><div class="textInput"><input autocomplete="off" id="betPanelSum" type="text" name="sum" value="1" placeholder="Input USD value"></div>':'')+
  '<div class="form-btn-center">'+
            '<a href="javascript://" id="makeBet" data-side="ct" data-mode="'+mode+'" data-gameid="'+gameid+'" class="form-btn form-btn-login gradient-purple"><span>'+button_caption.toUpperCase()+'</span></a>'+
  '</div>';
    armin_modal({
        customClass: 'deposit_items_panel_swal',
        title: title,
        body: form_html,
        width: 450
    });
    $('#makeBetCtSide').click(function(e) {e.preventDefault();$(this).addClass('active');$('#makeBetTSide').removeClass('active');$('#makeBet').attr('data-side', 'ct');});
    $('#makeBetTSide').click(function(e) {e.preventDefault();$(this).addClass('active');$('#makeBetCtSide').removeClass('active');$('#makeBet').attr('data-side', 'terrorist');});
    $('#makeBet').click(function(e) {
        e.preventDefault();
        var assets = [];
        var mode = $(this).attr('data-mode');
        var gameid = $(this).attr('data-gameid');
        var side = $(this).attr('data-side');
        var sum = parseFloat($('#betPanelSum').val(),10);
        if(isNaN(sum) && gameid == '') {
          $('*[rel="modal:close"]').click();
                swal("Error", "Value must be a number!");
        }
                if(mode=='jackpot') {
            $('*[rel="modal:close"]').click();
            send({
                type: 'jackpotBet',
                sum: sum
            });
            setTimeout(getBalance, 1000);
        }
                else if(mode=='coinflip' && gameid == '') {
            $('*[rel="modal:close"]').click();
            send({
                type: 'coinflipBet',
                sum: sum,
                side: side
            });
            setTimeout(getBalance, 1000);
        }
                else if(mode=='coinflip' && gameid != '') {
            $('*[rel="modal:close"]').click();
            send({
                type: 'coinflipBet',
                gameid: gameid.toString()
            });
            setTimeout(getBalance, 1000);
        }
        else {
            $('*[rel="modal:close"]').click();
            swal("Error", "Unknown mode!");
        }
  });
}


function getBalance() {
    apireq('getBalance', [], function(d) {
        var oldvalue = parseFloat($('#balance').html(),10);
        var newvalue = parseFloat(d.data.balance,10);
        if(oldvalue!=newvalue) {
            getTransactions();
            drawSuccessful();
            $('#balance').numerator({
                toValue: newvalue,
                rounding: 2,
                duration: 3000,
                easing: 'linear',
                onComplete: function() {getCurrency();}
            });
        }
    });
}
function getTransactions() {
    apireq('getTransactions', [], function(d) {
        var html = '';
        if(d.data.length > 0) {
            for(var i in d.data) html +=
                '<li class="usrdepos-item">'+
                    '<span class="usrdepos-num">#'+(parseInt(i,10)+1)+'</span>'+
                    '<span class="usrdepos-amout">+'+parseFloat(d.data[i].amount_usd,10)+' USD (+'+parseFloat(d.data[i].amount,10)+' '+d.data[i].system.toUpperCase()+', TXID: '+d.data[i].transactionid.toUpperCase()+')</span>'+
                    '<span class="usrdepos-date">'+d.data[i].date+'</span>'+
                '</li>';

            $('ul.usrdepos-wrap[data-value="transactions"]').html(html);
        }
        else $('ul.usrdepos-wrap[data-value="transactions"]').html('<li class="usrdepos-item">No transactions found.</li>');
        $('ul.usrdepos-wrap[data-value="withdraw"]').html('<li class="usrdepos-item">No transactions found.</li>');
    });
}
function getCases() {
    apireq('getCases', [], function(d) {
        var html = '';
        if(d.data.length > 0) {
            for(var i in d.data) html +=
                '<li class="usrdepos-item">'+
                    '<span class="usrdepos-num">#'+(parseInt(i,10)+1)+'</span>'+
                    '<span class="usrdepos-amout">'+parseFloat(d.data[i].sum,10)+' USD x'+d.data[i].ratio+', result: '+Math.round(parseFloat(d.data[i].sum,10)*parseInt(d.data[i].ratio,10))+' USD, expires in: '+d.data[i].expire+'</span>'+
                    '<span class="usrdepos-date">'+d.data[i].date+'</span>'+
                '</li>';

            $('ul.usrdepos-wrap[data-value="packets"]').html(html);
        }
        else $('ul.usrdepos-wrap[data-value="packets"]').html('<li class="usrdepos-item">No cases found.</li>');
    });
}
function getCurrency(callback) {
    apireq('getCurrency', [], function(d) {currency = d.data;if(typeof callback === 'function') callback();});
}
function getUSD(value,cur) {
    var v = value*parseFloat(currency[cur],10);
    return Math.round(currency[cur]*value*100)/100;
} // <-- GET USD FROM VALUE
function getCUR(usd,cur) {
    var v = usd/parseFloat(currency[cur],10);
    /*if(v>10) return Math.round(v);
    if(v>1) return Math.round(v*10)/10;
    if(v>0.1) return Math.round(v*100)/100;
    if(v>0.01) return Math.round(v*1000)/1000;
    if(v>0.001) return Math.round(v*10000)/10000;
    if(v>0.0001) return Math.round(v*100000)/100000;
    if(v>0.00001) return Math.round(v*1000000)/1000000;
    if(v>0.000001) return Math.round(v*10000000)/10000000;
    if(v>0.0000001) return Math.round(v*100000000)/100000000;*/
    return Math.round(v*1000000)/1000000;
    return 0;
} // <-- GET CUR FROM USD
function depositForm_recalculate() {
    var value = parseFloat($('#depositForm [name="value"]').val(),10);
    var curr = $('#depositForm [data-currency].active').attr('data-currency');
    var currency_map = {btc: 'BTC', eth: 'ETH', btc_cash: 'BCH', litecoin: 'LTC', dash: 'DASH'};
    $('#depositForm_selected_currency').html(currency_map[curr]);
    if(!isNaN(value) && value > 0) {
        var need_to_send = getCUR(value, curr);
        $('#depositForm_need_to_send').html(need_to_send).attr('data-value', need_to_send);
    }
    else $('#depositForm_need_to_send').html('0').attr('data-value', 0);
}
function withdrawForm_recalculate() {
    var value = parseFloat($('#withdrawForm [name="value"]').val(),10);
    var curr = $('#withdrawForm [data-currency].active').attr('data-currency');
    var currency_map = {btc: 'BTC', eth: 'ETH', btc_cash: 'BCH', litecoin: 'LTC', dash: 'DASH'};
    $('#withdrawForm_selected_currency').html(currency_map[curr]);
    if(!isNaN(value) && value > 0) {
        var need_to_send = getCUR(value, curr);
        
        $('#withdrawForm_need_to_send').html(need_to_send).attr('data-value', need_to_send);
    }
    else $('#withdrawForm_need_to_send').html('0').attr('data-value', 0);
}
function depositForm() {
    getCurrency(function() { // <-- GET CURRENCY
        armin_modal({
            title: 'Deposit',
            body: 
                '<form method="post" id="depositForm"><div class="form-label">Select system:</div>'+
                '<div class="usr-wals">'+
                    '<a data-currency="btc" class="depositCurrency active" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');depositForm_recalculate()"><img src="/style/img/btc.png"></a>'+
                    '<a data-currency="eth" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');depositForm_recalculate()"><img src="/style/img/eth.png"></a>'+
                    '<a data-currency="btc_cash" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');depositForm_recalculate()"><img src="/style/img/btc_cash.png"></a>'+
                    '<a data-currency="dash" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');depositForm_recalculate()"><img src="/style/img/dash.png"></a>'+
                    '<a data-currency="litecoin" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');depositForm_recalculate()"><img src="/style/img/litecoin.png"></a>'+
                '</div>'+
                '<div class="mhr"></div>'+
                '<div class="form-group">'+
                    '<div class="form-label">Value in <span id="depositForm_selected_currency">---</span>: <span class="text-green" data-value="0" id="depositForm_need_to_send">~0$</span></div>'+
                    '<input type="text" value="1" name="value" required class="form-control form-control-orange text-center">'+
                '</div>'+
                '<div style="margin-top:30px;" class="form-btn-center"><button type="submit" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>NEXT &gt;&gt;</span></button></div></form>'
            ,
            width:450,
            oncreate: function() {
                depositForm_recalculate();
                $('#depositForm [name="value"]').keyup(function(e) {depositForm_recalculate();});
                $('#depositForm').submit(function(e) {
                    e.preventDefault();
                    var value = parseFloat($(this).find('[name="value"]').val(),10);
                    if(isNaN(value) || value === 0) swal('Error', 'Please input a correct number.', 'warning');
                    else {
                        
                        apireq('registerTransaction', {'token':TOKEN, 'system':$('#depositForm [data-currency].active').attr('data-currency'), 'wallet':$('#depositForm_need_to_send').attr('data-value')}, function(d) {
                            if(d.success==true && !d.data.hasOwnProperty('error')) paymentForm({value: value, currency: $('#depositForm [data-currency].active').attr('data-currency'), need_to_send: $('#depositForm_need_to_send').attr('data-value'), wallet: d.data});
                            else if(d.data.hasOwnProperty('error')) modalAlert(d.data.error+'<br/><br/>');
                            else modalAlert('Error: invalid wallet');
                        });
                        
                    }
                });
            }
        });
    });
}

function withdrawForm() {
    getCurrency(function() { // <-- GET CURRENCY
        armin_modal({
            title: 'Withdraw',
            body: 
                '<form method="post" id="withdrawForm"><div class="form-label">Select system:</div>'+
                '<div class="usr-wals">'+
                    '<a data-currency="btc" class="depositCurrency active" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');withdrawForm_recalculate()"><img src="/style/img/btc.png"></a>'+
                    '<a data-currency="eth" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');withdrawForm_recalculate()"><img src="/style/img/eth.png"></a>'+
                    '<a data-currency="btc_cash" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');withdrawForm_recalculate()"><img src="/style/img/btc_cash.png"></a>'+
                    '<a data-currency="dash" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');withdrawForm_recalculate()"><img src="/style/img/dash.png"></a>'+
                    '<a data-currency="litecoin" class="depositCurrency" href="javascript://" onclick="$(this).parent().find(\'a\').removeClass(\'active\');$(this).addClass(\'active\');withdrawForm_recalculate()"><img src="/style/img/litecoin.png"></a>'+
                '</div>'+
                '<div class="mhr"></div>'+
                '<div class="form-group">'+
                    '<div class="form-label">Value in <span id="withdrawForm_selected_currency">---</span>: <span class="text-green" data-value="0" id="withdrawForm_need_to_send">~0$</span></div>'+
                    '<input type="text" value="1" name="value" required class="form-control form-control-orange text-center">'+
                '</div>'+
                '<div class="form-group">'+
                    '<div class="form-label">Your wallet</div>'+
                    '<input type="text" value="" name="wallet" required class="form-control form-control-orange text-center">'+
                '</div>'+
                '<div style="margin-top:30px;" class="form-btn-center"><button type="submit" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>NEXT &gt;&gt;</span></button></div></form>'
            ,
            width:450,
            oncreate: function() {
                withdrawForm_recalculate();
                $('#withdrawForm [name="value"]').keyup(function(e) {withdrawForm_recalculate();});
                $('#withdrawForm').submit(function(e) {
                    e.preventDefault();
                    var value = parseFloat($(this).find('[name="value"]').val(),10);
                    if(isNaN(value) || value === 0) swal('Error', 'Please input a correct number.', 'warning');
                    else {
                        
                        apireq('makeWithdraw', {'token':TOKEN, 'system':$('#withdrawForm [data-currency].active').attr('data-currency'), 'value':$('#withdrawForm_need_to_send').attr('data-value'), 'wallet':$('#withdrawForm [name="wallet"]').val()}, function(d) {
                            if(d.success==true) swal(d.data.title, d.data.text, d.data.type);
                        });
                        
                    }
                });
            }
        });
    });
}

function paymentForm(d) {
    var currency_map = {btc: 'BTC', eth: 'ETH', btc_cash: 'BCH', litecoin: 'LTC', dash: 'DASH'};
    armin_modal({
        title: 'Deposit ('+currency_map[d.currency].toUpperCase()+'), '+d.value+'$',
        body: '<div class="form-label">Make a payment to the specified address:</div>'+
        '<div id="paymentQR" style="margin:auto;margin-bottom:10px;width:192px;"></div>'+
        '<input type="text" value="'+d.wallet+'" readonly name="value" class="form-control form-control-orange text-center">'+
        '<div class="form-label">You must send <b>'+d.need_to_send+'</b> '+currency_map[d.currency].toUpperCase()+'</div>'+
        '<img id="paymentStatus" style="margin:auto;display:block;height:48px;" src="/style/img/loading.gif" />',
        width:600,
        oncreate: function() {
            var qrcode = new QRCode("paymentQR", {
                text: d.wallet,
                width: 192,
                height: 192,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }
    });
}
function drawSuccessful() {
    $('#paymentStatus').attr('src', '/style/img/transaction_ok.png');
}
function buyCase(price, ratio) {
    armin_modal({
        title: 'Buy case x'+ratio+' for '+price+'$',
        body: 
        '<form method="post" id="buyCaseForm">'+
        'Would you like to buy this case? You will gain '+Math.round(parseFloat(price,10)*parseFloat(ratio,10))+' after 1 month.'+
        '<div style="margin-top:30px;" class="form-btn-center"><button type="submit" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>BUY FROM BALANCE</span></button></div><input type="hidden" name="ratio" value="'+ratio+'"/><input type="hidden" name="token" value="'+TOKEN+'"/></form>',
        width:600,
        oncreate: function() {
            $('#buyCaseForm').off().submit(function(e) {
                e.preventDefault();
                apireq('buyCase', $(this).serialize(), function(d) {
                    swal(d.data.title, d.data.text, d.data.type);
                });
            });
        }
    });
}
/* JACKPOT FUNCTIONS */
function update_jackpotChart(data) {
    if(jackpotChart===false || !jackpotChart.hasOwnProperty('dataProvider') || typeof jackpotChart.animateData !== 'function' || $('#chart > .amcharts-main-div').length == 0) {
        /* CREATE NEW IF NOT EXISTS */
        jackpotChart = AmCharts.makeChart("chart",{
            "type":"pie",
            "labelRadius":-55,
            "startDuration": 0,
            "balloonText": "[[title]]<br>([[percents]]%)</span>",
            "labelText":"[[percents]]%",
            "theme":"light",
            "outlineColor":"#1f1d2f",
            "segmentShowStroke":true,
            "dataProvider":data,
            "valueField":"litres",
            "titleField":"country",
            "colorField":"color",
            "labelsEnabled": false,
            "radius": "48%",
            "innerRadius": "65%",
            "balloon": {"fixedPosition": true},
            "listeners": [{"event": "clickSlice","method": function(e) {
                e.chart.validateData();
            }}]
        });
    }
    else {
        /* UPDATE DATA */
       jackpotChart.animateData(data, { duration: 1000});
    }
}
function jackpotBet(bet, animated) {
  $('#jackpot_bank').numerator({
    toValue: bet.total,
    duration: 300,
    rounding: 2
  });
    let userColor = 0;
    for(let color in bet.chance) if(bet.chance[color].userid == bet.bet.userid) {userColor=parseInt(color,10)+1;break;}
    $('#jackpot_bets').prepend(template('#template_jackpot_betview', [
    bet.bet.userid,
    bet.bet.name,
    bet.bet.avatar,
    bet.bet.deposit,
    (animated?' animated fadeInDown':''),
        0,
        userColor
  ]));

  // UPDATE CHANCES //
    chancesList = [];
    for(let chanceid in bet.chance) {
    let borderColor = $('#jackpot_bets > div[data-userid="'+bet.chance[chanceid].userid+'"]').css('border-left-color').toString();
    let chanceData = {country:bet.chance[chanceid].name, litres:bet.chance[chanceid].chance, color: borderColor};
        chancesList.push(chanceData);
        $('#jackpot_bets > div[data-userid="'+bet.chance[chanceid].userid.toString()+'"] .chance').html(bet.chance[chanceid].chance);
    if(bet.chance[chanceid].userid==USER_ID) $('#jackpot_user_chance').numerator({
            toValue: bet.chance[chanceid].chance,
            duration: 300,
            rounding: 2
        });
    }
  update_jackpotChart(chancesList);
    /* ===== */
}
function jackpotEnd(event) {
    var jackpot_items_selector = '#jackpot_carousel .jackpot_carousel_items';
  $(jackpot_items_selector).css('margin-left', '0px');
  var users = [];
    var total = event.winner.deposit;
    
  for(var i in event.players) {
    var chance = Math.round(event.players[i].deposit/total*100);
    var count = Math.round(chance);
    var avatar = event.players[i].avatar
    for(var i=0;i<count;i++) users.push({avatar: avatar, chance: chance});
  };
    shuffle(users);
  $(jackpot_items_selector).html('');
  for(var id in users) $(jackpot_items_selector).append(template('#template_jackpot_carousel_user', [users[id].avatar, users[id].chance]));

  $(jackpot_items_selector+' > *:nth-child(90)').replaceWith(template('#template_jackpot_carousel_user', [event.winner.avatar, event.winner.chance]));

  $('#jackpot_carousel').slideDown(300);


    var scroll = 
      ($('#jackpot_carousel').width() / 2) 
      - $(jackpot_items_selector+' > *:nth-child(90)').position().left 
      - randomInteger(
        $(jackpot_items_selector+' > *:nth-child(90)').width() * 0.2, $(jackpot_items_selector+' > *:nth-child(90)').width() * 0.8
      );

  $(jackpot_items_selector).animate({
        'margin-left': scroll + 'px'
    }, 9000, function() {
    /*$('#jackpot_game_end').html(template('#template_jackpot_winner_block', [
      event.winner.userid,
      event.winner.name,
      event.winner.avatar,
      event.winner.chance,
      event.winner.deposit,
      event.number
    ]));*/
        if(event.winner.userid == USER_ID) {
          swal({title: 'We have good news, you won!', text:'<div style="font-size:14px;line-height:22px;font-family:GothamPro-Bold;text-transform:uppercase">Total amount of win = <span class="text-purple">'+event.winner.deposit+'$</span><br/>Withdraw your winnings in <a href="/profile" class="text-purple">your profile</a>!</div><div style="margin-top:20px;">For support, inqueries, refer to <a href="/tos" class="text-purple">FAQ</a> before contacting our support</div><div style="color:#e55039">Do not trust anyone who NOT in our STAFF group</div>',html:true});
        }
  });
}
function jackpotNewHistory(m, animated) {
    var history_len = 20;
  var items = '', items_array = [];
  for(var betid in m.bets) for(var itemid in m.bets[betid].bet.items) items_array.push(m.bets[betid].bet.items[itemid]);
  items_array.sort(function(a, b) {return b.price - a.price;});
  items_array = items_array.slice(0,22);
  for(var id in items_array) items+=template('#template_coinflip_game_item', [
    items_array[id].market_hash_name, items_array[id].icon_url, items_array[id].price, rarity_color(getRarity(items_array[id].type))
  ]);
    var html = $($(template('#template_jackpot_history', [
        m.gameid, m.winner.username, m.winner.avatar, m.winner.sum, m.winner.chance, items, (animated?'animated bounce':''), m.hash, m.number, items_array.length, items_array.length-5, m.winner.userid
    ])));
    if(items_array.length-5>0) html.find('.coin-weapons-total').attr('style','display:block;');
    html = html.prop('outerHTML');

    jackpot_history.unshift(html);
    jackpot_history.slice(0, history_len-1);
  $('#jackpot_history').prepend(html);
    if($('#jackpot_history > *').length > history_len) $('#jackpot_history > *:gt(-'+($('#jackpot_history > *').length-history_len)+')').remove();
}/* COINFLIP FUNCTIONS */
function coinflipNewHistory(m, animated) {
    var history_len = 20;
    var winner_color = '', winner_side = '', winner_userid = '', winner_avatar = '', winner_username = '', winner_bank = 0;
    if(m.winner == m.host.userid) {winner_color = m.color;winner_side = 'host';}
    else if(m.winner == m.guest.userid && m.color=='ct') {winner_color = 'terrorist';winner_side = 'guest';}
    else if(m.winner == m.guest.userid && m.color=='terrorist') {winner_color = 'ct';winner_side = 'guest';}

    winner_avatar = m[winner_side].avatar;
    winner_username = m[winner_side].nickname;
    winner_userid = m[winner_side].userid;
    winner_bank = m.bank;

    var items = '', items_array = [];
    for(var itemid in m.host.items) items_array.push(m.host.items[itemid]);
    for(var itemid in m.guest.items) items_array.push(m.guest.items[itemid]);
    items_array.sort(function(a, b) {return b.price - a.price;});
    items_array = items_array.slice(0,22);

    for(var id in items_array) items+=template('#template_coinflip_game_item', [
        items_array[id].market_hash_name,
        items_array[id].icon_url,
        items_array[id].price,
        rarity_color(getRarity(items_array[id].type))
    ]);
    var html = $($(template('#template_coinflip_history', [
        winner_color, winner_userid, winner_avatar, winner_username, winner_bank, (animated?'animated bounce':''), items, m.hash, m.number, items_array.length, m.host.avatar, m.guest.avatar, items_array.length-5, m.host.userid, m.guest.userid
    ])));
    if(items_array.length-5>0) html.find('.coin-weapons-total').attr('style','display:block;');
    html = $(html).prop('outerHTML');

    coinflip_history.unshift(html);
    coinflip_history.slice(0, history_len-1);

    $('#coinflip_history').prepend(html);
    if($('#coinflip_history > *').length > history_len) $('#coinflip_history > *:gt(-'+($('#coinflip_history > *').length-history_len)+')').remove();
}
function newFlip(m) {
    var gameBlock = template('#template_coinflip_game', [
        m.userid_host.userid,
        m.userid_host.nickname,
        m.userid_host.avatar,
        '',
        m.total,
        m.color,
        0,
        0,
        m.gamehash
    ]);
    $('#coinflipGames').prepend(gameBlock);
    $('#coinflipGames [data-gameid="'+m.userid_host.userid+'"] .coin-percent-circle').circleProgress({
        value: 1,
        size: 42,
        thickness: 5,
        startAngle: -Math.PI/2,
        emptyFill: "#252337",
        fill: {
            gradient: $(this).hasClass('green') ?  ["#16fb53", "#1890ee"] :  ["#f9189d", "#6046dc"]
        }
    });
    $('#coinflipGames [data-gameid="'+m.userid_host.userid+'"]').hide().slideDown(800);
    $('#coinflipGames > div').sortDivs('data-price');
    coinflipRefreshStats();
}
function updateFlip(m, isNew) {
    isNew = isNew || false;
    var gameBlock = template('#template_coinflip_game_full', [
        m.userid_host.userid,
        m.userid_host.nickname,
        m.userid_host.avatar,
        '',
        m.userid_player.userid,
        m.userid_player.nickname,
        m.userid_player.avatar,
        '',
        m.total,
        m.color,
        (m.color=='ct'?'terrorist':'ct'),
        0,
        0,
        m.gamehash
    ]);
    if(isNew) $('#coinflipGames').prepend(gameBlock);
    else $('#coinflipGames > div[data-gameid="'+m.userid_host.userid+'"]').replaceWith(gameBlock);
    $('#coinflipGames [data-gameid="'+m.userid_host.userid+'"] .coin-percent-circle').circleProgress({
        value: 1,
        size: 42,
        thickness: 5,
        startAngle: -Math.PI/2,
        emptyFill: "#252337",
        fill: {
            gradient: ["#16fb53", "#1890ee"]
        }
    });
    $('#coinflipGames').sortDivs('data-price');
    coinflipRefreshStats();
}
function coinflipRefreshStats() {
    var games = 0;
    var value = 0;
    var my_games = 0;
    var my_value = 0;
    $('#coinflipGames > div').each(function(index, item) {
        if($(item).attr('data-gameid')==USER_ID) {
            my_games++;
            my_value+=parseFloat($(item).attr('data-price'), 10);
        }
        if($(item).attr('data-joinable')=='1') games++;
        value+=parseFloat($(item).attr('data-price'), 10);
    });
    value = Math.round(value*100) / 100;
    $('#coinflip_total_games').html(games.toString());
    $('#coinflip_total_value').html(value.toString());
    $('#coinflip_my_games').html(my_games.toString());
    $('#coinflip_my_value').html(my_value.toString());
}/* GLOBALS */
var jackpot_history = [];
var coinflip_history = [];

/* INIT */
$(document).ready(function(){

    var isPageSpeed = /Google Page Speed Insights/.test(navigator.userAgent);
    if (isPageSpeed) {
        return;
    }
    /* INIT */
    $(window).trigger('resize');
    $('#menu-toggle').on('click', function() {
        var data = $(this).data();

        $(this).toggleClass(data.toggle).toggleClass('is-active');
        $(data.target).toggleClass(data.toggle)
    });
    if ($(window).width() <= 768) {
        $('.wow').attr('data-wow-duration', '0.5s');
    }
    new WOW().init();
    if ($(window).width() <= 996) {
        $('.menu-weapons > li > a').on('click', function(e) {
            e.preventDefault();

            $('.menu-weapons > li').removeClass('active open');

            $(this).parent().addClass('active open');
        });
    }
    var w = $(window).width(),
      i = 10;

    if (w >= 200) i = 2;
    if (w >= 400) i = 3;
    if (w >= 768) i = 4;
    if (w >= 1100) i = 5;
    if (w >= 1400) i = 6;
    if (w >= 1600) i = 7;

    $('.weap_slide-content').each(function() {
        var swip = $(this);

        var swiper = new Swiper($('.swiper-container', swip), {
            slidesPerView: i,
            spaceBetween: 7,
            navigation: {
            nextEl: $('.weap_slide-arrow-right', swip),
            prevEl: $('.weap_slide-arrow-left', swip),
        },
        loop: true
        });
        $(document).on('updateSwiper', function() {
            swiper.update();
        });
    })
    $('.lang-box').on('click', function() {
        $(this).toggleClass('open')

        $('.lang-drop-menu').slideToggle();
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest($('.lang-box')).length) {
            $('.lang-box').removeClass('open')
            $('.lang-drop-menu').slideUp();
        }

        if (!$(event.target).closest($('.user-box-selector')).length) {
            $('.ser-box-selector').removeClass('open')
            $('.user-box-drop').slideUp();
        }
    })

    $('.user-box-selector').on('click', function() {
        $(this).toggleClass('open');
        $('.user-box-drop').slideToggle();
    })

    $('.participants-swip').each(function() {
        var swip = $(this);

        $('.participants-item', swip).on('click', function() {
            $(this).toggleClass('open')

            $('.participants-drop', swip).toggleClass('open')
        })
    })

    $('.chat-open-close').on('click', function() {
        $('.x-col-chat').toggleClass('close')
        $('.chat-over-btn').toggleClass('open')
    })
    /* INIT END */


    /* REMOVE CHAT */
    if(ROOM!='jackpot' && ROOM!='coinflip') $('.x-col-chat').hide();

ws_connect();
    $('#chat > .chat-write textarea').keypress(function(e) {
        if(e.which == 13 && !e.ctrlKey) {
            e.preventDefault();
            var value = $(this).val();$(this).val('');
            send({
                'type': 'sendMessage',
                'message': value
            });
        }
        else if((e.which == 13 && e.ctrlKey) || e.which == 10) {
            $(this).val(function(i,val){
                return val + "\n";
            });
        }
    });
    $('#chat > .chat-write .chat-write-btn').click(function(e) {
        e.preventDefault();
        var value = $('#chat_form_enabled textarea').val();$('#chat_form_enabled textarea').val('');
        send({
            'type': 'sendMessage',
            'message': value
        });
    });
if(ROOM=='jackpot') {
$('#jackpot_deposit').click(function(e) {
e.preventDefault();
openBetPanel('jackpot');
});
$('#jackpot_show_history').click(function(e) {
            e.preventDefault();
            var html = '';for(var i in jackpot_history) html+=jackpot_history[i];

            armin_modal({
                title: 'Jackpot History (LAST 20 GAMES)',
                body: '<div id="jackpot_history">'+html+'</div>'
            });
        });
}
else if(ROOM=='coinflip') {
$('#coinflip_side > a[data-coinflip-side]').click(function(e) {
e.preventDefault();
$('#coinflip_side > a[data-coinflip-side]').removeClass('active');
$(this).addClass('active');
});
        $('#coinflip_show_history').click(function(e) {
            e.preventDefault();
            var html = '';for(var i in coinflip_history) html+=coinflip_history[i];

            armin_modal({
                title: 'Coinflip History (LAST 20 GAMES)',
                body: '<div id="coinflip_history">'+html+'</div>'
            });
        });
        $(document).on('click', '.coinflip_view', function(e) {
            e.preventDefault();
            coinflipGetView($(this).attr('data-id'));
        });
}
else if(ROOM=='profile') {
        getCurrency();getTransactions();getCases();
/* EDIT USERNAME */
$('#profileEditUsername').click(function(e) {
e.preventDefault();
armin_modal({
                title: 'Edit username',
                body: '<form action="" method="post" id="profileEditUsernameForm">'+
'<div class="textInputLabel">Your username:</div>'+
'<div class="textInput"><input autocomplete="off" type="text" name="username" value="'+$('#profileCurrentUsername').text()+'" placeholder="Leave blank to use your ID"></div>'+
'<div class="textInputLabel">(!) Your username must cointain only english letters / numbers</div>'+
'<br/>'+
'<div class="form-btn-center"><button type="submit" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>SAVE</span></button></div>'+
'<input type="hidden" name="token" value="'+TOKEN+'" />'+
'</form>',
width:450
            });
});
$(document).on('submit', '#profileEditUsernameForm', function(e) {
e.preventDefault();
apireq('setUsername', $(this).serialize(), function(d) {
if(d.success == true) {$('.close-modal').click();swal('Success', 'Username set!', 'success');}
else swal('Error', d.error, 'error');
});
});
/* EDIT AVATAR */
$('#profileEditAvatar').click(function(e) {
e.preventDefault();
armin_modal({
                title: 'Edit avatar',
                body: '<form action="" method="post" id="profileEditAvatarForm">'+
'<div class="textInputLabel">Your avatar:</div>'+
'<div class="textInput"><input autocomplete="off" id="profileEditAvatarFormAvatar" type="file" name="avatar"></div>'+
'<div class="textInputLabel">(!) Your avatar must be &lt;20M and be in PNG/GIF/JPG format.</div>'+
'<br/>'+
'<div class="form-uploading" style="display:none;"><button type="button" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>Uploading in progress...</span></button></div>'+
'<div class="form-btn-center"><button type="submit" href="javascript://" class="form-btn form-btn-login gradient-purple"><span>UPLOAD</span></button></div>'+
'<input type="hidden" name="token" value="'+TOKEN+'" />'+
'</form>',
width:450
            });
});
$(document).on('submit', '#profileEditAvatarForm', function(e) {
e.preventDefault();
$('#profileEditAvatarForm .form-btn-center').hide();
$('#profileEditAvatarForm .form-uploading').show();
var form_data = new FormData();
form_data.append('avatar', $('#profileEditAvatarFormAvatar').prop('files')[0]);
    form_data.append('token', TOKEN);               
    $.ajax({
url: '/api/setAvatar',
dataType: 'json',
cache: false,
contentType: false,
processData: false,
data: form_data,                         
type: 'post',
success: function(d){
$('#profileEditAvatarForm .form-btn-center').show();
$('#profileEditAvatarForm .form-uploading').hide();
if(d.success==true) top.location.reload();
else swal('','Error occured while uploading avatar.');
}
});
});
/* DEPOSIT FORM */
$('#profileDepositBtn').click(function(e) {depositForm();});
/* WITHDRAW FORM */
$('#profileWithdrawBtn').click(function(e) {withdrawForm();});
}
else if(ROOM=='support') {
getSupportTickets();
$('#support_title').html(' - Tickets');
$('#support_tickets').click(function(e) {
$('#support_tickets_panel').show();
$('#support_create_panel').hide();
$('#support_show_ticket_panel').hide();
$('#support_title').html(' - Tickets');
getSupportTickets();
});
$('#support_create').click(function(e) {
$('#support_tickets_panel').hide();
$('#support_create_panel').show();
$('#support_show_ticket_panel').hide();
$('#support_title').html(' - New ticket');
});
$('#support_create_panel form').submit(function(e) {
e.preventDefault();
apireq('supportCreateTicket', $(this).serialize(), function(d) {
if(d.success == true) {
if(d.data.type=='success') {
$('#support_tickets').click();
}
swal({
title: d.data.title,
text: d.data.text,
type: d.data.type,
html:true
});
$(this).find("input[type=text], textarea").val("");
}
else swal('Error', 'Server internal error', 'error');
});
});
$('#support_show_ticket_panel form').submit(function(e) {
e.preventDefault();
apireq('supportReplyTicket', $(this).serialize(), function(d) {
if(d.success == true) {
$('#support_show_ticket_panel input[name="message"]').val('');
if(d.data.type=='success') {
getSupportTicket($('#support_show_ticket_panel input[name="ticketid"]').val());
}
swal({
title: d.data.title,
text: d.data.text,
type: d.data.type,
html:true
});
}
else swal('Error', 'Server internal error', 'error');
});
});
$('#support_tickets_panel').on('click', '> a[data-id]', function(e) {
e.preventDefault();
getSupportTicket($(this).attr('data-id'));
});
}
$('body').on('click', '#deposit_items_panel > div:not(.locked)', function(e) {
$(this).find(' > div').toggleClass('active');
var sum = 0; $('#deposit_items_panel > div').each(function(i, item) {
            if($(item).find('> div').hasClass('active'))
sum+=parseFloat($(item).attr('data-price'));
});
$('#bet_panel_sum').html((Math.round(sum*100)/100));
});
    $('body').on('click', '#chat .chat-list-delete', function(e) {
        e.preventDefault();
        var id = $(this).closest('[data-id]').attr('data-id');
        send({type: 'chatDelete', id: id});
    });
$('.scrollable').perfectScrollbar();

    /* TAB CONTROL */
    $(document).on('click', '.tab-control > a', function(e) {
e.preventDefault();
        var id = $(this).attr('data-id');
        $(this).parent().find('> a').removeClass('active');
        $(this).addClass('active');
        $('#'+id).parent().find('.tab').hide();
        $('#'+id).show();
    });
$(document).on('click', '.tabs-nav > li', function(e) {
e.preventDefault();
var selector = $(this).attr('rel');
$(this).parent().find('> li').removeClass('active');
$(this).addClass('active');
$(selector).parent().find('.tabs-content').removeClass('active');
        $(selector).addClass('active');
});

    $(document).on('click', '[data-action="login"]', function(e) {
        e.preventDefault();
        armin_modal({
            title: '<div class="tab-control"><a class="active" data-id="tab_login" href="javascript://">LOGIN</a><a data-id="tab_register" href="javascript://">REGISTER</a></div>',
            body: 
                '<form method="post" class="tab" id="tab_login" style="display:block;">'+
                    '<div class="textInput"><input autocomplete="off" type="email" name="username" id="username" placeholder="Your Username"/></div>'+
                    '<div class="textInput"><input autocomplete="off" type="password" name="password" id="password" placeholder="Your password"/></div>'+
                    '<div class="textInputError"></div>'+
                    '<button type="submit" class="form-btn form-btn-login gradient-purple" id="dologin" click="doLogin()"><span>LOGIN</span></button>'+
                    '<input type="hidden" name="token" value="'+TOKEN+'"/>'+
                '</form>'+
                '<form method="post" class="tab" id="tab_register">'+
                    '<div class="textInput"><input autocomplete="off" required type="email" name="user_email" id="user_email" placeholder="Your e-mail"/></div>'+
                    '<div class="textInput"><input autocomplete="off" required type="password" name="password" id="password" placeholder="Your password"/></div>'+
                    '<div class="textInput"><input autocomplete="off" required type="text" name="full_name" id="full_name" placeholder="Desired nickname"/></div>'+
                    '<div class="textInputError"></div>'+
                    '<button type="submit" class="form-btn form-btn-login gradient-purple" id="doregistration"><span>REGISTER</span></button>'+
                    '<input type="hidden" name="token" value="'+TOKEN+'"/><input type="hidden" name="user_id" value="'+uniqueID()+'"/>'+
                    '<input type="hidden" name="user_contact" value=""/><input type="hidden" name="user_status" value="Active"/>'+
                '</form>',
            width: 480,
            customClass: 'tabs-heading login-form'
        });
    });

    /* LOGIN/REGISTER FORM HANDLERS */
    $(document).on('submit', '#tab_login', function(e) {
        e.preventDefault();$('#tab_login .textInputError').html('');
        apireq('userLogin', $(this).serialize(), function(d) {
            if(d.success==false) $('#tab_login .textInputError').html('Invalid email or password.');
            else if(d.success==true) {top.location.href='/';}
        });
    });
    $(document).on('submit', '#tab_register', function(e) {
        e.preventDefault();$('#tab_register .textInputError').html('');
        apireq('userRegister', $(this).serialize(), function(d) {
            if(d.success==true) {top.location.href='/';}
            else $('#tab_register .textInputError').html(d.error);
        });
    });

    //setInterval(getBalance, 10000);
}); 