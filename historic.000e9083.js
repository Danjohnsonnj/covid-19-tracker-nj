parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FeUn":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("StateSelect"),t=document.getElementById("Chart"),a=t.querySelectorAll(".day"),n=t.querySelectorAll(".pos"),s=t.querySelectorAll(".deaths"),o=t.querySelectorAll(".date");async function c(t=(e?e.value:"nj")){const c=function(e){const t=["lastUpdateEt","deathIncrease","positiveIncrease"];return e.slice(0,7).map(e=>{const a={};return t.forEach(t=>{a[t]=e[t]}),a})}(await async function(e=t){const a=`https://api.covidtracking.com/v1/states/${e}/daily.json`,n=await fetch(a);if(200===n.status)return await n.json();console.log("Looks like there was a problem. Status Code: "+n.status)}(t));console.log(c);const r=c.reduce((e,t)=>e=t.positiveIncrease>e?t.positiveIncrease:e,0),l=c.reduce((e,t)=>e=t.deathIncrease>e?t.deathIncrease:e,0);a.forEach((e,t)=>{n[t].style.height=`${c[t].positiveIncrease/r*100}%`,n[t].dataset.total=`${c[t].positiveIncrease}`,s[t].style.height=l>0?`${c[t].deathIncrease/l*100}%`:0,s[t].dataset.total=`${c[t].deathIncrease}`,o[t].innerText=new Date(c[t].lastUpdateEt).toLocaleDateString()})}e.addEventListener("change",e=>{console.log(e.currentTarget.value),c(e.currentTarget.value)}),c()});
},{}]},{},["FeUn"], null)
//# sourceMappingURL=/historic.000e9083.js.map