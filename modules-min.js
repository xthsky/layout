KISSY.add("modules/boot",function(e,t){function r(){for(var e=0;e<n.length;e++)n[e]()}var n=[];return n.push(function(){location.hash&&e.mix(App,JSON.parse(decodeURIComponent(location.hash.slice(1))))}),n.push(function(){App.msg=new t}),n.push(function(){App.msg.on("afterPageWidthChange",function(e){var t=e.newVal;document.getElementById("r-content").className="w"+t}),App.msg.set("pageWidth",App.resolution.base)}),n.push(function(){App.tmpl={};var t=document.querySelectorAll('[id^="r-tmpl-"]');for(var n=0;n<t.length;n++)App.tmpl[t[n].id.slice(7)]=t[n].innerHTML}),r},{requires:["base"]}),KISSY.add("modules/config",function(e,t){return function(){}},{requires:["event"]}),KISSY.add("modules/content-anim",function(e,t,n,r){function i(e){var t=[],n;for(var r=0;r<e.length;r++)n=e[r],t.push([n.offsetLeft,n.offsetTop,n.offsetWidth,n.offsetHeight]);return t}function s(t,n,r){var i;for(var s=0;s<n.length;s++){i=!1;for(var o=1;o<n[s].length;o++)if(n[s][o]!==r[s][o]){i=!0;break}if(!i)continue;n[s][2]===0?e.one(t[s]).css("background-color","#ff8400"):r[s][2]===0?e.one(t[s]).parent(".r-section").append('<div class="r-fake-div" style="background-color: #488fcd;left: '+n[s][0]+"px;"+"top: "+n[s][1]+"px;"+"width: "+n[s][2]+"px;"+"height: "+n[s][3]+'px"></div>'):e.one(t[s]).css("background-color","#fb6477")}e.later(function(){e.all(".r-fake-div").css("opacity",0)}),e.later(function(){e.all(".r-div").css("background-color","transparent")},1e3)}return{init:function(){var t,n,r;App.msg.on("beforePageWidthChange",function(r){e.all(".r-fake-div").remove(),t=document.querySelectorAll(".r-div"),n=i(t)}),App.msg.on("afterPageWidthChange",function(e){r=i(t),s(t,n,r)})}}},{requires:["dom","event","node"]}),KISSY.add("modules/content-operate",function(e,t,n){return{init:function(){e.one("#r-content").delegate("click","#r-add-section",function(t){var n=Math.floor(1920/(App.grid.c+App.grid.g)),r="";for(var i=0;i<n;i++)r+='<div class="span1"></div>';e.one(t.currentTarget).before(e.substitute(App.tmpl.section,{bgs:r,divs:""}))}).delegate("click",".r-add-div",function(t){var r=Math.ceil((180+App.grid.g)/(App.grid.c+App.grid.g));e.one(t.currentTarget).parent(".r-section").one(".r-section-bd").append(e.substitute(App.tmpl.div,{id:n.idGen(),cls:"r-div span"+r}))}).delegate("click",".r-clear-section",function(t){e.one(t.currentTarget).parent(".r-section").one(".r-section-bd").empty()}).delegate("click",".r-remove-section",function(t){e.one(t.currentTarget).parent(".r-section").remove()}).delegate("change",".r-resize-div",function(t){var r=e.one(t.currentTarget),i=r.val(),s=i.match(/(\d+)x(\d+)/);if(!s)return;var o=s[1],u=s[2],a=App.msg.get("pageWidth");r=r.parent(".r-div"),r.height(u);var f=r.attr("class"),l=a===App.resolution.base?"":"_"+a,c=new RegExp("^span\\d+"+l+"$");f=n.clsReplace(f,c,"span"+Math.ceil(o/(App.grid.c+App.grid.g))+l),r.attr("class",f)}).delegate("click",".r-remove-div",function(t){e.one(t.currentTarget).parent(".r-div").remove()})}}},{requires:["node","modules/utils"]}),KISSY.add("modules/content",function(e,t,n,r,i){function s(){var t="",n=App.struct,r,i,s,o,u=Math.floor(1920/(App.grid.c+App.grid.g)),a="";for(s=0;s<u;s++)a+='<div class="span1"></div>';for(s=0;s<n.length;s++){r=n[s],i="";for(o=0;o<r.length;o++)i+=e.substitute(App.tmpl.div,{id:r[o++],cls:"r-div"+r[o].replace(/^|\s/g," span")});t+=e.substitute(App.tmpl.section,{bgs:a,divs:i})}e.one("#r-add-section").before(t)}return function(){e.DOM.addStyleSheet(n.cssGen()),s(),r.init(),i.init()}},{requires:["node","modules/utils","modules/content-operate","modules/content-anim"]}),KISSY.add("modules/output",function(e){var t="body{cursor: pointer}";return function(){e.one("#r-output").on("click",function(e){this.download="a.html",this.href="data:text/html;charset=utf-8,"+encodeURIComponent(t)})}}),KISSY.add("modules/pagelet",function(e,t){function r(){n=document.querySelectorAll("[bx]")}function i(){var t;for(var r=0;r<n.length;r++)t=n[r].id.slice(2),e.use("modules/"+t,function(e,t){t()})}var n;return{init:function(){r(),i()}}}),KISSY.add("modules/preview",function(e,t){function n(){var n=new Blob(["<!doctype html>\n",'<meta charset="utf-8">\n',"<title>page title</title>\n",'<link rel="stylesheet" href="http://xthsky.github.com/layout/style-min.css">\n',"<style>.r-section{background: #fff}</style>\n","<style>#r-add-section,.r-div:hover .r-div-panel,.r-section-panel{display: none}</style>\n","<style>"+t.cssGen(!0)+"</style>\n",e.one("#r-content").html()+"\n"+""],{type:"text/html"});return n}return function(){e.one("#r-preview").on("click",function(e){this.href=webkitURL.createObjectURL(n())})}},{requires:["modules/utils"]}),KISSY.add("modules/resolution",function(e,t,n,r){return function(){var t='<div class="list">',n=App.resolution.all;for(var r=0;r<n.length;r++){if(r%2){t+='<span class="split">'+n[r]+"px</span>";continue}n[r]===App.resolution.base?t+='<a class="tab active base">'+n[r]+"px</a>":t+='<a class="tab">'+n[r]+"px</a>"}t+="</div>",e.one("#r-resolution").append(t),e.one("#r-resolution").delegate("click","li",function(t){var n=e.one(t.currentTarget);if(n.hasClass("active"))return;n.addClass("active"),n.siblings(".active").removeClass("active"),App.msg.set("pageWidth",parseInt(n.html(),10))})}},{requires:["dom","event","node"]}),KISSY.add("modules/save",function(e,t){function n(){var t={struct:[],grid:App.grid,resolution:{base:960,others:[720,1200,1440,1680]},appVer:App.appVer};return e.all(".r-section").each(function(e){var n=[];e.all(".r-div").each(function(e){var t=e.attr("class").split(/\s+/);for(var r=0;r<t.length;)/^span[0-9_]+$/.test(t[r])?(t[r]=t[r].slice(4),++r):t.splice(r,1);n.push(e.one(".r-div-name").html()),n.push(t.join(" "))}),t.struct.push(n)}),t}return function(){t.delegate(document,"click","#r-save",function(e){e.currentTarget.href="#"+JSON.stringify(n())})}},{requires:["event"]}),KISSY.add("modules/utils",function(e){function n(){var e=t.join(""),n=t[0],r=t[1];return r===9?(n=String.fromCharCode(n.charCodeAt(0)+1),r=0):++r,t=[n,r],e}function r(e,t){var n=prefix=suffix="",r=e===App.resolution.base;r?n=".row{margin-left: -"+App.grid.g+"px}":suffix="_"+e;var i=undefined!==t;if(i){n+="@media (";switch(t){case-1:n+="max-width: "+e;break;case 0:n+="min-width: "+e;break;default:n+="min-width: "+e+"px) and (max-width: "+t}n+="px) {"}else n+=".w"+e+"{width: "+e+"px}",r||(prefix=".w"+e+" ");n+=prefix+".span0"+suffix+"{display: none}";var s=Math.ceil((r?1920:e)/(App.grid.c+App.grid.g));for(var o=0;o++<s;)n+=prefix+".span"+o+suffix+"{width: "+((App.grid.c+App.grid.g)*o-App.grid.g)+"px;"+"margin-left: "+App.grid.g+"px}";return i&&(n+="}"),n}function i(e){var t=App.resolution.base,n=App.resolution.others,i=r(t);if(!e){for(var s=0;s<n.length;s++)i+=r(n[s]);return i}var o;for(var s=0;s<n.length;s++)n[s]<t?o=n[s+1]<t?n[s+1]:t:o=n[s+1]||0,i+=r(n[s],o);return i}function s(e,t,n){e=e.split(/\s+/);for(var r=0;r<e.length;)e[r].match(t)?e.splice(r,1):++r;return e.push(n),e.join(" ")}var t=["A",0];return{idGen:n,cssGen:i,clsReplace:s}});