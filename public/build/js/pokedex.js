(function(){var n=this,e=n._,t=Array.prototype,r=Object.prototype,o=Function.prototype,i=t.push,u=t.slice,a=t.concat,l=r.toString,c=r.hasOwnProperty,s=Array.isArray,f=Object.keys,p=o.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var m=function(n,e,t){if(void 0===e)return n;switch(null==t?3:t){case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)};case 4:return function(t,r,o,i){return n.call(e,t,r,o,i)}}return function(){return n.apply(e,arguments)}};h.iteratee=function(n,e,t){return null==n?h.identity:h.isFunction(n)?m(n,e,t):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,e,t){if(null==n)return n;e=m(e,t);var r,o=n.length;if(o===+o)for(r=0;o>r;r++)e(n[r],r,n);else{var i=h.keys(n);for(r=0,o=i.length;o>r;r++)e(n[i[r]],i[r],n)}return n},h.map=h.collect=function(n,e,t){if(null==n)return[];e=h.iteratee(e,t);for(var r,o=n.length!==+n.length&&h.keys(n),i=(o||n).length,u=Array(i),a=0;i>a;a++)r=o?o[a]:a,u[a]=e(n[r],r,n);return u};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,e,t,r){null==n&&(n=[]),e=m(e,r,4);var o,i=n.length!==+n.length&&h.keys(n),u=(i||n).length,a=0;if(arguments.length<3){if(!u)throw new TypeError(v);t=n[i?i[a++]:a++]}for(;u>a;a++)o=i?i[a]:a,t=e(t,n[o],o,n);return t},h.reduceRight=h.foldr=function(n,e,t,r){null==n&&(n=[]),e=m(e,r,4);var o,i=n.length!==+n.length&&h.keys(n),u=(i||n).length;if(arguments.length<3){if(!u)throw new TypeError(v);t=n[i?i[--u]:--u]}for(;u--;)o=i?i[u]:u,t=e(t,n[o],o,n);return t},h.find=h.detect=function(n,e,t){var r;return e=h.iteratee(e,t),h.some(n,function(n,t,o){return e(n,t,o)?(r=n,!0):void 0}),r},h.filter=h.select=function(n,e,t){var r=[];return null==n?r:(e=h.iteratee(e,t),h.each(n,function(n,t,o){e(n,t,o)&&r.push(n)}),r)},h.reject=function(n,e,t){return h.filter(n,h.negate(h.iteratee(e)),t)},h.every=h.all=function(n,e,t){if(null==n)return!0;e=h.iteratee(e,t);var r,o,i=n.length!==+n.length&&h.keys(n),u=(i||n).length;for(r=0;u>r;r++)if(o=i?i[r]:r,!e(n[o],o,n))return!1;return!0},h.some=h.any=function(n,e,t){if(null==n)return!1;e=h.iteratee(e,t);var r,o,i=n.length!==+n.length&&h.keys(n),u=(i||n).length;for(r=0;u>r;r++)if(o=i?i[r]:r,e(n[o],o,n))return!0;return!1},h.contains=h.include=function(n,e){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,e)>=0)},h.invoke=function(n,e){var t=u.call(arguments,2),r=h.isFunction(e);return h.map(n,function(n){return(r?e:n[e]).apply(n,t)})},h.pluck=function(n,e){return h.map(n,h.property(e))},h.where=function(n,e){return h.filter(n,h.matches(e))},h.findWhere=function(n,e){return h.find(n,h.matches(e))},h.max=function(n,e,t){var r,o,i=-1/0,u=-1/0;if(null==e&&null!=n){n=n.length===+n.length?n:h.values(n);for(var a=0,l=n.length;l>a;a++)r=n[a],r>i&&(i=r)}else e=h.iteratee(e,t),h.each(n,function(n,t,r){o=e(n,t,r),(o>u||o===-1/0&&i===-1/0)&&(i=n,u=o)});return i},h.min=function(n,e,t){var r,o,i=1/0,u=1/0;if(null==e&&null!=n){n=n.length===+n.length?n:h.values(n);for(var a=0,l=n.length;l>a;a++)r=n[a],i>r&&(i=r)}else e=h.iteratee(e,t),h.each(n,function(n,t,r){o=e(n,t,r),(u>o||1/0===o&&1/0===i)&&(i=n,u=o)});return i},h.shuffle=function(n){for(var e,t=n&&n.length===+n.length?n:h.values(n),r=t.length,o=Array(r),i=0;r>i;i++)e=h.random(0,i),e!==i&&(o[i]=o[e]),o[e]=t[i];return o},h.sample=function(n,e,t){return null==e||t?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,e))},h.sortBy=function(n,e,t){return e=h.iteratee(e,t),h.pluck(h.map(n,function(n,t,r){return{value:n,index:t,criteria:e(n,t,r)}}).sort(function(n,e){var t=n.criteria,r=e.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(r>t||void 0===r)return-1}return n.index-e.index}),"value")};var g=function(n){return function(e,t,r){var o={};return t=h.iteratee(t,r),h.each(e,function(r,i){var u=t(r,i,e);n(o,r,u)}),o}};h.groupBy=g(function(n,e,t){h.has(n,t)?n[t].push(e):n[t]=[e]}),h.indexBy=g(function(n,e,t){n[t]=e}),h.countBy=g(function(n,e,t){h.has(n,t)?n[t]++:n[t]=1}),h.sortedIndex=function(n,e,t,r){t=h.iteratee(t,r,1);for(var o=t(e),i=0,u=n.length;u>i;){var a=i+u>>>1;t(n[a])<o?i=a+1:u=a}return i},h.toArray=function(n){return n?h.isArray(n)?u.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,e,t){e=h.iteratee(e,t);var r=[],o=[];return h.each(n,function(n,t,i){(e(n,t,i)?r:o).push(n)}),[r,o]},h.first=h.head=h.take=function(n,e,t){return null==n?void 0:null==e||t?n[0]:0>e?[]:u.call(n,0,e)},h.initial=function(n,e,t){return u.call(n,0,Math.max(0,n.length-(null==e||t?1:e)))},h.last=function(n,e,t){return null==n?void 0:null==e||t?n[n.length-1]:u.call(n,Math.max(n.length-e,0))},h.rest=h.tail=h.drop=function(n,e,t){return u.call(n,null==e||t?1:e)},h.compact=function(n){return h.filter(n,h.identity)};var d=function(n,e,t,r){if(e&&h.every(n,h.isArray))return a.apply(r,n);for(var o=0,u=n.length;u>o;o++){var l=n[o];h.isArray(l)||h.isArguments(l)?e?i.apply(r,l):d(l,e,t,r):t||r.push(l)}return r};h.flatten=function(n,e){return d(n,e,!1,[])},h.without=function(n){return h.difference(n,u.call(arguments,1))},h.uniq=h.unique=function(n,e,t,r){if(null==n)return[];h.isBoolean(e)||(r=t,t=e,e=!1),null!=t&&(t=h.iteratee(t,r));for(var o=[],i=[],u=0,a=n.length;a>u;u++){var l=n[u];if(e)u&&i===l||o.push(l),i=l;else if(t){var c=t(l,u,n);h.indexOf(i,c)<0&&(i.push(c),o.push(l))}else h.indexOf(o,l)<0&&o.push(l)}return o},h.union=function(){return h.uniq(d(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var e=[],t=arguments.length,r=0,o=n.length;o>r;r++){var i=n[r];if(!h.contains(e,i)){for(var u=1;t>u&&h.contains(arguments[u],i);u++);u===t&&e.push(i)}}return e},h.difference=function(n){var e=d(u.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(e,n)})},h.zip=function(n){if(null==n)return[];for(var e=h.max(arguments,"length").length,t=Array(e),r=0;e>r;r++)t[r]=h.pluck(arguments,r);return t},h.object=function(n,e){if(null==n)return{};for(var t={},r=0,o=n.length;o>r;r++)e?t[n[r]]=e[r]:t[n[r][0]]=n[r][1];return t},h.indexOf=function(n,e,t){if(null==n)return-1;var r=0,o=n.length;if(t){if("number"!=typeof t)return r=h.sortedIndex(n,e),n[r]===e?r:-1;r=0>t?Math.max(0,o+t):t}for(;o>r;r++)if(n[r]===e)return r;return-1},h.lastIndexOf=function(n,e,t){if(null==n)return-1;var r=n.length;for("number"==typeof t&&(r=0>t?r+t+1:Math.min(r,t+1));--r>=0;)if(n[r]===e)return r;return-1},h.range=function(n,e,t){arguments.length<=1&&(e=n||0,n=0),t=t||1;for(var r=Math.max(Math.ceil((e-n)/t),0),o=Array(r),i=0;r>i;i++,n+=t)o[i]=n;return o};var y=function(){};h.bind=function(n,e){var t,r;if(p&&n.bind===p)return p.apply(n,u.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return t=u.call(arguments,2),r=function(){if(!(this instanceof r))return n.apply(e,t.concat(u.call(arguments)));y.prototype=n.prototype;var o=new y;y.prototype=null;var i=n.apply(o,t.concat(u.call(arguments)));return h.isObject(i)?i:o}},h.partial=function(n){var e=u.call(arguments,1);return function(){for(var t=0,r=e.slice(),o=0,i=r.length;i>o;o++)r[o]===h&&(r[o]=arguments[t++]);for(;t<arguments.length;)r.push(arguments[t++]);return n.apply(this,r)}},h.bindAll=function(n){var e,t,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(e=1;r>e;e++)t=arguments[e],n[t]=h.bind(n[t],n);return n},h.memoize=function(n,e){var t=function(r){var o=t.cache,i=e?e.apply(this,arguments):r;return h.has(o,i)||(o[i]=n.apply(this,arguments)),o[i]};return t.cache={},t},h.delay=function(n,e){var t=u.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},e)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(u.call(arguments,1)))},h.throttle=function(n,e,t){var r,o,i,u=null,a=0;t||(t={});var l=function(){a=t.leading===!1?0:h.now(),u=null,i=n.apply(r,o),u||(r=o=null)};return function(){var c=h.now();a||t.leading!==!1||(a=c);var s=e-(c-a);return r=this,o=arguments,0>=s||s>e?(clearTimeout(u),u=null,a=c,i=n.apply(r,o),u||(r=o=null)):u||t.trailing===!1||(u=setTimeout(l,s)),i}},h.debounce=function(n,e,t){var r,o,i,u,a,l=function(){var c=h.now()-u;e>c&&c>0?r=setTimeout(l,e-c):(r=null,t||(a=n.apply(i,o),r||(i=o=null)))};return function(){i=this,o=arguments,u=h.now();var c=t&&!r;return r||(r=setTimeout(l,e)),c&&(a=n.apply(i,o),i=o=null),a}},h.wrap=function(n,e){return h.partial(e,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,e=n.length-1;return function(){for(var t=e,r=n[e].apply(this,arguments);t--;)r=n[t].call(this,r);return r}},h.after=function(n,e){return function(){return--n<1?e.apply(this,arguments):void 0}},h.before=function(n,e){var t;return function(){return--n>0?t=e.apply(this,arguments):e=null,t}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(f)return f(n);var e=[];for(var t in n)h.has(n,t)&&e.push(t);return e},h.values=function(n){for(var e=h.keys(n),t=e.length,r=Array(t),o=0;t>o;o++)r[o]=n[e[o]];return r},h.pairs=function(n){for(var e=h.keys(n),t=e.length,r=Array(t),o=0;t>o;o++)r[o]=[e[o],n[e[o]]];return r},h.invert=function(n){for(var e={},t=h.keys(n),r=0,o=t.length;o>r;r++)e[n[t[r]]]=t[r];return e},h.functions=h.methods=function(n){var e=[];for(var t in n)h.isFunction(n[t])&&e.push(t);return e.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var e,t,r=1,o=arguments.length;o>r;r++){e=arguments[r];for(t in e)c.call(e,t)&&(n[t]=e[t])}return n},h.pick=function(n,e,t){var r,o={};if(null==n)return o;if(h.isFunction(e)){e=m(e,t);for(r in n){var i=n[r];e(i,r,n)&&(o[r]=i)}}else{var l=a.apply([],u.call(arguments,1));n=new Object(n);for(var c=0,s=l.length;s>c;c++)r=l[c],r in n&&(o[r]=n[r])}return o},h.omit=function(n,e,t){if(h.isFunction(e))e=h.negate(e);else{var r=h.map(a.apply([],u.call(arguments,1)),String);e=function(n,e){return!h.contains(r,e)}}return h.pick(n,e,t)},h.defaults=function(n){if(!h.isObject(n))return n;for(var e=1,t=arguments.length;t>e;e++){var r=arguments[e];for(var o in r)void 0===n[o]&&(n[o]=r[o])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,e){return e(n),n};var $=function(n,e,t,r){if(n===e)return 0!==n||1/n===1/e;if(null==n||null==e)return n===e;n instanceof h&&(n=n._wrapped),e instanceof h&&(e=e._wrapped);var o=l.call(n);if(o!==l.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+n==""+e;case"[object Number]":return+n!==+n?+e!==+e:0===+n?1/+n===1/e:+n===+e;case"[object Date]":case"[object Boolean]":return+n===+e}if("object"!=typeof n||"object"!=typeof e)return!1;for(var i=t.length;i--;)if(t[i]===n)return r[i]===e;var u=n.constructor,a=e.constructor;if(u!==a&&"constructor"in n&&"constructor"in e&&!(h.isFunction(u)&&u instanceof u&&h.isFunction(a)&&a instanceof a))return!1;t.push(n),r.push(e);var c,s;if("[object Array]"===o){if(c=n.length,s=c===e.length)for(;c--&&(s=$(n[c],e[c],t,r)););}else{var f,p=h.keys(n);if(c=p.length,s=h.keys(e).length===c)for(;c--&&(f=p[c],s=h.has(e,f)&&$(n[f],e[f],t,r)););}return t.pop(),r.pop(),s};h.isEqual=function(n,e){return $(n,e,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var e in n)if(h.has(n,e))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=s||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var e=typeof n;return"function"===e||"object"===e&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(e){return l.call(e)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,e){return null!=n&&c.call(n,e)},h.noConflict=function(){return n._=e,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(e){return e[n]}},h.matches=function(n){var e=h.pairs(n),t=e.length;return function(n){if(null==n)return!t;n=new Object(n);for(var r=0;t>r;r++){var o=e[r],i=o[0];if(o[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,e,t){var r=Array(Math.max(0,n));e=m(e,t,1);for(var o=0;n>o;o++)r[o]=e(o);return r},h.random=function(n,e){return null==e&&(e=n,n=0),n+Math.floor(Math.random()*(e-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(k),b=function(n){var e=function(e){return n[e]},t="(?:"+h.keys(n).join("|")+")",r=RegExp(t),o=RegExp(t,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(o,e):n}};h.escape=b(k),h.unescape=b(w),h.result=function(n,e){if(null==n)return void 0;var t=n[e];return h.isFunction(t)?n[e]():t};var x=0;h.uniqueId=function(n){var e=++x+"";return n?n+e:e},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var j=/(.)^/,_={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},A=/\\|'|\r|\n|\u2028|\u2029/g,E=function(n){return"\\"+_[n]};h.template=function(n,e,t){!e&&t&&(e=t),e=h.defaults({},e,h.templateSettings);var r=RegExp([(e.escape||j).source,(e.interpolate||j).source,(e.evaluate||j).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(r,function(e,t,r,u,a){return i+=n.slice(o,a).replace(A,E),o=a+e.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),e}),i+="';\n",e.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var u=new Function(e.variable||"obj","_",i)}catch(a){throw a.source=i,a}var l=function(n){return u.call(this,n,h)},c=e.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var e=h(n);return e._chain=!0,e};var S=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(e){var t=h[e]=n[e];h.prototype[e]=function(){var n=[this._wrapped];return i.apply(n,arguments),S.call(this,t.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var e=t[n];h.prototype[n]=function(){var t=this._wrapped;return e.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],S.call(this,t)}}),h.each(["concat","join","slice"],function(n){var e=t[n];h.prototype[n]=function(){return S.call(this,e.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this),function(n,e){"use strict";function t(n,t,r){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(o,i,u,a,l){function c(){h&&(r.cancel(h),h=null),f&&(f.$destroy(),f=null),p&&(h=r.leave(p),h.then(function(){h=null}),p=null)}function s(){var u=n.current&&n.current.locals;if(e.isDefined(u&&u.$template)){var u=o.$new(),a=n.current;p=l(u,function(n){r.enter(n,null,p||i).then(function(){!e.isDefined(m)||m&&!o.$eval(m)||t()}),c()}),f=a.scope=u,f.$emit("$viewContentLoaded"),f.$eval(v)}else c()}var f,p,h,m=u.autoscroll,v=u.onload||"";o.$on("$routeChangeSuccess",s),s()}}}function r(n,e,t){return{restrict:"ECA",priority:-400,link:function(r,o){var i=t.current,u=i.locals;o.html(u.$template);var a=n(o.contents());i.controller&&(u.$scope=r,u=e(i.controller,u),i.controllerAs&&(r[i.controllerAs]=u),o.data("$ngControllerController",u),o.children().data("$ngControllerController",u)),a(r)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function n(n,t){return e.extend(Object.create(n),t)}function t(n,e){var t=e.caseInsensitiveMatch,r={originalPath:n,regexp:n},o=r.keys=[];return n=n.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(n,e,t,r){return n="?"===r?r:null,r="*"===r?r:null,o.push({name:t,optional:!!n}),e=e||"",""+(n?"":e)+"(?:"+(n?e:"")+(r&&"(.+?)"||"([^/]+)")+(n||"")+")"+(n||"")}).replace(/([\/$\*])/g,"\\$1"),r.regexp=new RegExp("^"+n+"$",t?"i":""),r}var r={};this.when=function(n,o){var i=e.copy(o);if(e.isUndefined(i.reloadOnSearch)&&(i.reloadOnSearch=!0),e.isUndefined(i.caseInsensitiveMatch)&&(i.caseInsensitiveMatch=this.caseInsensitiveMatch),r[n]=e.extend(i,n&&t(n,i)),n){var u="/"==n[n.length-1]?n.substr(0,n.length-1):n+"/";r[u]=e.extend({redirectTo:n},t(u,i))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(n){return"string"==typeof n&&(n={redirectTo:n}),this.when(null,n),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(t,i,u,a,l,c,s){function f(n){var r=y.current;(g=(v=h())&&r&&v.$$route===r.$$route&&e.equals(v.pathParams,r.pathParams)&&!v.reloadOnSearch&&!d)||!r&&!v||t.$broadcast("$routeChangeStart",v,r).defaultPrevented&&n&&n.preventDefault()}function p(){var n=y.current,r=v;g?(n.params=r.params,e.copy(n.params,u),t.$broadcast("$routeUpdate",n)):(r||n)&&(d=!1,(y.current=r)&&r.redirectTo&&(e.isString(r.redirectTo)?i.path(m(r.redirectTo,r.params)).search(r.params).replace():i.url(r.redirectTo(r.pathParams,i.path(),i.search())).replace()),a.when(r).then(function(){if(r){var n,t,o=e.extend({},r.resolve);return e.forEach(o,function(n,t){o[t]=e.isString(n)?l.get(n):l.invoke(n,null,null,t)}),e.isDefined(n=r.template)?e.isFunction(n)&&(n=n(r.params)):e.isDefined(t=r.templateUrl)&&(e.isFunction(t)&&(t=t(r.params)),t=s.getTrustedResourceUrl(t),e.isDefined(t)&&(r.loadedTemplateUrl=t,n=c(t))),e.isDefined(n)&&(o.$template=n),a.all(o)}}).then(function(o){r==y.current&&(r&&(r.locals=o,e.copy(r.params,u)),t.$broadcast("$routeChangeSuccess",r,n))},function(e){r==y.current&&t.$broadcast("$routeChangeError",r,n,e)}))}function h(){var t,o;return e.forEach(r,function(r){var u;if(u=!o){var a=i.path();u=r.keys;var l={};if(r.regexp)if(a=r.regexp.exec(a)){for(var c=1,s=a.length;s>c;++c){var f=u[c-1],p=a[c];f&&p&&(l[f.name]=p)}u=l}else u=null;else u=null;u=t=u}u&&(o=n(r,{params:e.extend({},i.search(),t),pathParams:t}),o.$$route=r)}),o||r[null]&&n(r[null],{params:{},pathParams:{}})}function m(n,t){var r=[];return e.forEach((n||"").split(":"),function(n,e){if(0===e)r.push(n);else{var o=n.match(/(\w+)(?:[?*])?(.*)/),i=o[1];r.push(t[i]),r.push(o[2]||""),delete t[i]}}),r.join("")}var v,g,d=!1,y={routes:r,reload:function(){d=!0,t.$evalAsync(function(){f(),p()})},updateParams:function(n){if(!this.current||!this.current.$$route)throw o("norout");var t={},r=this;e.forEach(Object.keys(n),function(e){r.current.pathParams[e]||(t[e]=n[e])}),n=e.extend({},this.current.params,n),i.path(m(this.current.$$route.originalPath,n)),i.search(e.extend({},i.search(),t))}};return t.$on("$locationChangeStart",f),t.$on("$locationChangeSuccess",p),y}]});var o=e.$$minErr("ngRoute");n.provider("$routeParams",function(){this.$get=function(){return{}}}),n.directive("ngView",t),n.directive("ngView",r),t.$inject=["$route","$anchorScroll","$animate"],r.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){var n=angular.module("pokedex",["ngRoute","pokedex.controllers","pokemon.directives","pokemon.filters","pokedex.services"]);n.config(["$routeProvider",function(n){n.when("/",{templateUrl:"views/pokedex.html",controller:"PokedexController"}).when("/:type",{templateUrl:"views/pokedex.html",controller:"PokedexController"}).when("/pokemon/:name",{templateUrl:"views/pokemon.html",controller:"PokemonController"}).otherwise({redirectTo:"/"})}])}(),function(n){angular.module("pokedex.controllers",[]).controller("PokedexController",["$scope","$routeParams","pokemonService",function(e,t,r){function o(e,t){return n.chain(e).groupBy(function(n,e){return Math.floor(e/t)}).toArray().value()}var i=t.type;i?r.byType(i).then(function(n){e.pokemons=n,e.type=i,e.groupped=o(n,4)}):r.all().then(function(n){e.pokemons=n,e.groupped=o(n,4)})}]).controller("PokemonController",["$scope","$routeParams","pokemonService",function(n,e,t){n.pokemon={};var r=e.name;t.byName(r).then(function(e){n.pokemon=e})}]).controller("TabsController",function(){this.tab=1,this.selectTab=function(n){this.tab=n}})}(_),function(){angular.module("pokemon.directives",[]).directive("pokemonName",function(){return{restrict:"E",templateUrl:"partials/pokemon-name.html"}}).directive("pokemonImage",function(){return{restrict:"E",templateUrl:"partials/pokemon-image.html"}}).directive("pokemonData",function(){return{restrict:"E",templateUrl:"partials/pokemon-data.html"}}).directive("pokemonStats",function(){return{restrict:"E",templateUrl:"/partials/pokemon-stats.html"}}).directive("pokemonEvolution",function(){return{restrict:"E",templateUrl:"/partials/pokemon-evolution.html"}}).directive("pokemonType",function(){return{restrict:"E",templateUrl:"/partials/pokemon-type.html"}}).directive("pokemonComments",function(){return{restrict:"E",templateUrl:"/partials/pokemon-comments.html",controller:function(){this.comment={},this.comments=[],this.show=!1,this.toggle=function(){this.show=!this.show},this.anonymousChanged=function(){this.comment.anonymous===!0&&(this.comment.email="")},this.addComment=function(){this.comment.date=Date.now(),this.comments.push(this.comment),this.comment={}}},controllerAs:"cmtsCtlr"}})}(),function(){angular.module("pokemon.filters",[]).filter("normalize",function(){return function(n){return n?(n=n.replace("♀","f").replace("♂","m").replace(/\W+/g,""),n.toLowerCase()):""}}).filter("imageify",["$filter",function(n){return function(e){var t="build/img/pokemons/"+n("normalize")(e)+".jpg";return t}}])}(),function(){angular.module("pokedex.services",[]).factory("pokemonService",["$http","$q","$filter",function(n,e,t){function r(){var t=e.defer();return n.get("/pokemons.json",{cache:!0}).success(function(n){t.resolve(n)}),t.promise}function o(n){n=u(n);var t=e.defer();return r().then(function(e){var r=e.filter(function(e){return u(e.name)===n});r.length>0?t.resolve(r[0]):t.reject()}),t.promise}function i(n){var n=u(n),t=e.defer();return r().then(function(e){var r=e.filter(function(e){return e.type.some(function(e){return u(e)===n})});t.resolve(r)}),t.promise}var u=t("normalize");return{all:r,byName:o,byType:i}}])}();