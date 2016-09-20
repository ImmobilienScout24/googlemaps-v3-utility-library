/*

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.



 https://github.com/ImmobilienScout24/googlemaps-v3-utility-library
 @name ArcGIS Server Link for Google Maps JavaScript API V3
 @version 1.0.1
 @author: Nianwei Liu (nianwei at gmail dot com)
 */
(function(){function t(a,b,d){var c=""===b?0:a.indexOf(b);d=""===d?a.length:a.indexOf(d,c+b.length);return a.substring(c+b.length,d)}function J(a){return a&&"string"===typeof a}function u(a){return a&&a.splice}function k(a,b,d){if(a&&b)for(var c in a)!d&&c in b||(b[c]=a[c]);return b}function B(a,b,d){g.event.trigger.apply(this,arguments)}function y(a,b){a&&b&&b.error&&a(b.error)}function fa(a,b){var d="";a&&(d+=a.getTime()-6E4*a.getTimezoneOffset());b&&(d+=", "+(b.getTime()-6E4*b.getTimezoneOffset()));
  return d}function K(a,b){b=Math.min(Math.max(b,0),1);if(a){var d=a.style;"undefined"!==typeof d.opacity&&(d.opacity=b);"undefined"!==typeof d.filters&&(d.filters.alpha.opacity=Math.floor(100*b));"undefined"!==typeof d.filter&&(d.filter="alpha(opacity:"+Math.floor(100*b)+")")}}function W(a){var b="",d;for(d in a)a.hasOwnProperty(d)&&(0<b.length&&(b+=";"),b+=d+":"+a[d]);return b}function oa(){if("undefined"===typeof XMLHttpRequest){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}throw Error("This browser does not support XMLHttpRequest.");
}return new XMLHttpRequest}function U(a){var b=a;u(a)&&0<a.length&&(b=a[0]);return b instanceof g.LatLng||b instanceof g.Marker?u(a)&&1<a.length?v.MULTIPOINT:v.POINT:b instanceof g.Polyline?v.POLYLINE:b instanceof g.Polygon?v.POLYGON:b instanceof g.LatLngBounds?v.ENVELOPE:void 0!==b.x&&void 0!==b.y?v.POINT:b.points?v.MULTIPOINT:b.paths?v.POLYLINE:b.rings?v.POLYGON:null}function X(a){var b=a;u(a)&&0<a.length&&(b=a[0]);u(b)&&0<b.length&&(b=b[0]);return b instanceof g.LatLng||b instanceof g.Marker||
b instanceof g.Polyline||b instanceof g.Polygon||b instanceof g.LatLngBounds?!0:!1}function Q(a){return a?"number"===typeof a?a:a.wkid?a.wkid:a.toJSON():null}function ga(a,b){for(var d=[],c,e=0,f=a.getLength();e<f;e++)c=a.getAt(e),d.push("["+c.lng()+","+c.lat()+"]");b&&0<d.length&&d.push("["+a.getAt(0).lng()+","+a.getAt(0).lat()+"]");return d.join(",")}function L(a){var b,d,c,e="{";switch(U(a)){case v.POINT:b=u(a)?a[0]:a;b instanceof g.Marker&&(b=b.getPosition());e+="x:"+b.lng()+",y:"+b.lat();break;
  case v.MULTIPOINT:c=[];for(d=0;d<a.length;d++)b=a[d]instanceof g.Marker?a[d].getPosition():a[d],c.push("["+b.lng()+","+b.lat()+"]");e+="points: ["+c.join(",")+"]";break;case v.POLYLINE:c=[];a=u(a)?a:[a];for(d=0;d<a.length;d++)c.push("["+ga(a[d].getPath())+"]");e+="paths:["+c.join(",")+"]";break;case v.POLYGON:c=[];b=u(a)?a[0]:a;a=b.getPaths();for(d=0;d<a.getLength();d++)c.push("["+ga(a.getAt(d),!0)+"]");e+="rings:["+c.join(",")+"]";break;case v.ENVELOPE:b=u(a)?a[0]:a,e+="xmin:"+b.getSouthWest().lng()+
    ",ymin:"+b.getSouthWest().lat()+",xmax:"+b.getNorthEast().lng()+",ymax:"+b.getNorthEast().lat()}return e+", spatialReference:{wkid:4326}}"}function pa(a){function b(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push("["+a[c][0]+","+a[c][1]+"]");return"["+b.join(",")+"]"}function d(a){for(var c=[],d=0,n=a.length;d<n;d++)c.push(b(a[d]));return"["+c.join(",")+"]"}var c="{";a.x?c+="x:"+a.x+",y:"+a.y:a.xmin?c+="xmin:"+a.xmin+",ymin:"+a.ymin+",xmax:"+a.xmax+",ymax:"+a.ymax:a.points?c+="points:"+b(a.points):
  a.paths?c+="paths:"+d(a.paths):a.rings&&(c+="rings:"+d(a.rings));return c+"}"}function Y(a){var b=E[a.spatialReference.wkid||a.spatialReference.wkt],b=b||M,d=b.inverse([a.xmin,a.ymin]);a=b.inverse([a.xmax,a.ymax]);return new g.LatLngBounds(new g.LatLng(d[1],d[0]),new g.LatLng(a[1],a[0]))}function N(a,b){var d=null,c,e,f,h,n,F,l,m;b=b||{};if(a)if(d=[],a.x)c=new g.Marker(k(b.markerOptions||b,{position:new g.LatLng(a.y,a.x)})),d.push(c);else{n=a.points||a.paths||a.rings;if(!n)return d;var p=[];e=0;for(f=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            n.length;e<f;e++)if(F=n[e],a.points)c=new g.Marker(k(b.markerOptions||b,{position:new g.LatLng(F[1],F[0])})),d.push(c);else{m=[];c=0;for(h=F.length;c<h;c++)l=F[c],m.push(new g.LatLng(l[1],l[0]));a.paths?(c=new g.Polyline(k(b.polylineOptions||b,{path:m})),d.push(c)):a.rings&&p.push(m)}a.rings&&(c=new g.Polygon(k(b.polygonOptions||b,{paths:p})),d.push(c))}return d}function ha(a,b){if(a){var d,c,e;d=0;for(c=a.length;d<c;d++)e=a[d],e.geometry&&(e.geometry=N(e.geometry,b))}}function Z(a){var b;if("object"===
  typeof a){if(u(a)){b=[];for(var d=0,c=a.length;d<c;d++)b.push(Z(a[d]));return"["+b.join(",")+"]"}if(X(a))return L(a);if(a.toJSON)return a.toJSON();b="";for(d in a)a.hasOwnProperty(d)&&(0<b.length&&(b+=", "),b+=d+":"+Z(a[d]));return"{"+b+"}"}return a.toString()}function ia(a){var b,d,c,e=[];b=0;for(d=a.length;b<d;b++)c=a[b],c instanceof g.Marker&&(c=c.getPosition()),e.push({geometry:{x:c.lng(),y:c.lat(),spatialReference:{wkid:4326}}});return{type:'"features"',features:e,doNotLocateOnRestrictedElements:!1}}
  function ja(a){var b={};if(!a)return null;var d=[],c,e;if(a.geometries&&0<a.geometries.length){c=a.geometries[0];e=X(c);for(var f=0,h=a.geometries.length;f<h;f++)e?d.push(L(a.geometries[f])):d.push(pa(a.geometries[f]))}a.geometryType||(a.geometryType=U(c));e?b.inSR=M.wkid:a.inSpatialReference&&(b.inSR=Q(a.inSpatialReference));a.outSpatialReference&&(b.outSR=Q(a.outSpatialReference));b.geometries='{geometryType:"'+a.geometryType+'", geometries:['+d.join(",")+"]}";return b}function ka(a){var b="";if(a){a.f=
    a.f||"json";for(var d in a)if(a.hasOwnProperty(d)&&null!==a[d]&&void 0!==a[d])var c=Z(a[d]),b=b+((0<b.length?"&":"")+(d+"="+(escape?escape(c):encodeURIComponent(c))))}return b}function qa(a,b){for(var d=[],c=2,e=arguments.length;c<e;c++)d.push(arguments[c]);return function(){a.apply(b,d)}}function aa(a,b,d){b.hasLoaded()?a.push(b.copyrightText):g.event.addListenerOnce(b,"load",function(){O(d)})}function O(a){var b=null;if(a){var d=a.controls[g.ControlPosition.BOTTOM_RIGHT];if(d)for(var c=0,e=d.getLength();c<
  e;c++)if("agsCopyrights"===d.getAt(c).id){b=d.getAt(c);break}b||(b=document.createElement("div"),b.style.fontFamily="Arial,sans-serif",b.style.fontSize="10px",b.style.textAlign="right",b.id="agsCopyrights",a.controls[g.ControlPosition.BOTTOM_RIGHT].push(b),g.event.addListener(a,"maptypeid_changed",function(){O(a)}));var f=a.agsOverlays,d=[];if(f)for(c=0,e=f.getLength();c<e;c++)aa(d,f.getAt(c).mapService_,a);var h=a.overlayMapTypes;if(h)for(c=0,e=h.getLength();c<e;c++)if(f=h.getAt(c),f instanceof x)for(var n=
    0,F=f.tileLayers_.length;n<F;n++)aa(d,f.tileLayers_[n].mapService_,a);f=a.mapTypes.get(a.getMapTypeId());if(f instanceof x){c=0;for(e=f.tileLayers_.length;c<e;c++)aa(d,f.tileLayers_[c].mapService_,a);b.style.color=f.negative?"#ffffff":"#000000"}b.innerHTML=d.join("<br/>")}}function q(a,b,d,c){var e="ags_jsonp_"+ra++ +"_"+Math.floor(1E6*Math.random()),f=null;b=b||{};b[d||"callback"]="ags_jsonp."+e;b=ka(b);var h=document.getElementsByTagName("head")[0];if(!h)throw Error("document must have header tag");
    window.ags_jsonp[e]=function(){window.ags_jsonp[e]&&delete window.ags_jsonp[e];f&&h.removeChild(f);f=null;c.apply(null,arguments);B(C,"jsonpend",e)};if(2E3>(b+a).length&&!R.alwaysUseProxy)f=document.createElement("script"),f.src=a+(-1===a.indexOf("?")?"?":"&")+b,f.id=e,h.appendChild(f);else{d=window.location;d=d.protocol+"//"+d.hostname+(d.port&&80!==d.port?":"+d.port+"/":"");var n=!0;-1!==a.toLowerCase().indexOf(d.toLowerCase())&&(n=!1);R.alwaysUseProxy&&(n=!0);if(n&&!R.proxyUrl)throw Error("No proxyUrl property in Config is defined");
      var g=oa();g.onreadystatechange=function(){if(4===g.readyState)if(200===g.status)eval(g.responseText);else throw Error("Error code "+g.status);};g.open("POST",n?R.proxyUrl+"?"+a:a,!0);g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");g.send(b)}B(C,"jsonpstart",e);return e}function m(a){a=a||{};this.wkid=a.wkid;this.wkt=a.wkt}function V(a){a=a||{};m.call(this,a)}function z(a){a=a||{};m.call(this,a);var b=a.inverse_flattening,d=a.standard_parallel_1*l,c=a.standard_parallel_2*l,
    e=a.latitude_of_origin*l;this.a_=a.semi_major/a.unit;this.lamda0_=a.central_meridian*l;this.FE_=a.false_easting;this.FN_=a.false_northing;a=1/b;b=2*a-a*a;this.e_=Math.sqrt(b);a=this.calc_m_(d,b);b=this.calc_m_(c,b);e=this.calc_t_(e,this.e_);d=this.calc_t_(d,this.e_);c=this.calc_t_(c,this.e_);this.n_=Math.log(a/b)/Math.log(d/c);this.F_=a/(this.n_*Math.pow(d,this.n_));this.rho0_=this.calc_rho_(this.a_,this.F_,e,this.n_)}function G(a){a=a||{};m.call(this,a);this.a_=a.semi_major/a.unit;var b=a.inverse_flattening;
    this.k0_=a.scale_factor;var d=a.latitude_of_origin*l;this.lamda0_=a.central_meridian*l;this.FE_=a.false_easting;this.FN_=a.false_northing;a=1/b;this.es_=2*a-a*a;this.ep4_=this.es_*this.es_;this.ep6_=this.ep4_*this.es_;this.eas_=this.es_/(1-this.es_);this.M0_=this.calc_m_(d,this.a_,this.es_,this.ep4_,this.ep6_)}function H(a){a=a||{};m.call(this,a);this.a_=(a.semi_major||6378137)/(a.unit||1);this.lamda0_=(a.central_meridian||0)*l}function A(a){a=a||{};m.call(this,a);var b=a.inverse_flattening,d=a.standard_parallel_1*
    l,c=a.standard_parallel_2*l,e=a.latitude_of_origin*l;this.a_=a.semi_major/a.unit;this.lamda0_=a.central_meridian*l;this.FE_=a.false_easting;this.FN_=a.false_northing;a=1/b;b=2*a-a*a;this.e_=Math.sqrt(b);a=this.calc_m_(d,b);b=this.calc_m_(c,b);d=this.calc_q_(d,this.e_);c=this.calc_q_(c,this.e_);e=this.calc_q_(e,this.e_);this.n_=(a*a-b*b)/(c-d);this.C_=a*a+this.n_*d;this.rho0_=this.calc_rho_(this.a_,this.C_,this.n_,e)}function I(a,b){this.url=a;this.urlParams=b||{};this.definition=null}function p(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        b,d){this.url=a;this.urlParams=b||{};this.loaded_=!1;a=a.split("/");this.name=a[a.length-2].replace(/_/g," ");d=d||{};if(d.delayLoad){var c=this;window.setTimeout(function(){c.loadServiceInfo()},1E3*d.delayLoad)}else this.loadServiceInfo()}function S(a,b){this.url=a;this.urlParams=b||{};this.loaded_=!1;var d=this;q(a,this.urlParams,"",function(a){d.init_(a)})}function ba(a,b){this.url=a;this.urlParams=b||{};this.t="geocodeservice"}function la(a,b){this.url=a;this.urlParams=b||{};this.loaded_=!1;var d=
    this;q(a,this.urlParams,"",function(a){k(a,d);d.loaded_=!0;B(d,"load")})}function ma(a,b){this.url=a;this.urlParams=b||{}}function w(a){this.lods_=a?a.lods:null;this.spatialReference_=a?E[a.spatialReference.wkid||a.spatialReference.wkt]:T;if(!this.spatialReference_)throw Error("unsupported Spatial Reference");this.resolution0_=a?a.lods[0].resolution:156543.033928;this.minZoom=Math.floor(Math.log(this.spatialReference_.getCircum()/this.resolution0_/256)/Math.LN2+.5);this.maxZoom=a?this.minZoom+this.lods_.length-
  1:20;g.Size&&(this.tileSize_=a?new g.Size(a.cols,a.rows):new g.Size(256,256));this.scale_=Math.pow(2,this.minZoom)*this.resolution0_;this.originX_=a?a.origin.x:-2.0037508342787E7;this.originY_=a?a.origin.y:2.0037508342787E7;if(a)for(var b,d=0;d<a.lods.length-1;d++)if(b=a.lods[d].resolution/a.lods[d+1].resolution,2.001<b||1.999>b)throw Error("This type of map cache is not supported in V3. \nScale ratio between zoom levels must be 2");}function D(a,b){b=b||{};b.opacity&&(this.opacity_=b.opacity,delete b.opacity);
    k(b,this);this.mapService_=a instanceof p?a:new p(a);if(b.hosts){var d=t(this.mapService_.url,"","://"),c=t(this.mapService_.url,"://","/"),c=t(this.mapService_.url,d+"://"+c,"");this.urlTemplate_=d+"://"+b.hosts+c;this.numOfHosts_=parseInt(t(b.hosts,"[","]"),10)}this.name=b.name||this.mapService_.name;this.maxZoom=b.maxZoom||19;this.minZoom=b.minZoom||0;this.dynaZoom=b.dynaZoom||this.maxZoom;if(this.mapService_.loaded_)this.init_(b);else{var e=this;g.event.addListenerOnce(this.mapService_,"load",
      function(){e.init_(b)})}this.tiles_={};this.map_=b.map}function x(a,b){b=b||{};var d;b.opacity&&(this.opacity_=b.opacity,delete b.opacity);k(b,this);var c=a;if(J(a))c=[new D(a,b)];else if(a instanceof p)c=[new D(a,b)];else if(a instanceof D)c=[a];else if(0<a.length&&J(a[0]))for(c=[],d=0;d<a.length;d++)c[d]=new D(a[d],b);this.tileLayers_=c;this.tiles_={};if(void 0!==b.maxZoom)this.maxZoom=b.maxZoom;else{var e=0;for(d=0;d<c.length;d++)e=Math.max(e,c[d].maxZoom);this.maxZoom=e}c[0].projection_?(this.tileSize=
    c[0].projection_.tileSize_,this.projection=c[0].projection_):this.tileSize=new g.Size(256,256);this.name||(this.name=c[0].name)}function r(a,b){b=b||{};this.mapService_=a instanceof p?a:new p(a);this.minZoom=b.minZoom;this.maxZoom=b.maxZoom;this.opacity_=b.opacity||1;this.exportOptions_=b.exportOptions||{};this.needsNewRefresh_=this.drawing_=!1;this.div_=this.overlay_=null;b.map&&this.setMap(b.map);this.map_=null;this.listeners_=[]}function P(a,b,d,c){this.bounds_=a;this.url_=b;this.map_=d;this.div_=
    null;this.op_=c;this.setMap(d)}function na(a){this.map_=a;O(a)}var ca=ca||{},l=Math.PI/180,ra=0;window.ags_jsonp=window.ags_jsonp||{};var g=google.maps,M,da,T,ea,R={proxyUrl:null,alwaysUseProxy:!1},E={},C={},v={POINT:"esriGeometryPoint",MULTIPOINT:"esriGeometryMultipoint",POLYLINE:"esriGeometryPolyline",POLYGON:"esriGeometryPolygon",ENVELOPE:"esriGeometryEnvelope"};C.getJSON=function(a,b,d,c){q(a,b,d,c)};C.addToMap=function(a,b){if(u(b))for(var d,c=0,e=b.length;c<e;c++)d=b[c],u(d)?C.addToMap(a,d):
  X(d)&&d.setMap(a)};C.removeFromMap=function(a,b){C.addToMap(null,a);b&&(a.length=0)};m.prototype.forward=function(a){return a};m.prototype.inverse=function(a){return a};m.prototype.getCircum=function(){return 360};m.prototype.toJSON=function(){return"{"+(this.wkid?" wkid:"+this.wkid:"wkt: '"+this.wkt+"'")+"}"};V.prototype=new m;z.prototype=new m;z.prototype.calc_m_=function(a,b){var d=Math.sin(a);return Math.cos(a)/Math.sqrt(1-b*d*d)};z.prototype.calc_t_=function(a,b){var d=b*Math.sin(a);return Math.tan(Math.PI/
      4-a/2)/Math.pow((1-d)/(1+d),b/2)};z.prototype.calc_rho_=function(a,b,d,c){return a*b*Math.pow(d,c)};z.prototype.calc_phi_=function(a,b,d){d=b*Math.sin(d);return Math.PI/2-2*Math.atan(a*Math.pow((1-d)/(1+d),b/2))};z.prototype.solve_phi_=function(a,b,d){for(var c=0,e=this.calc_phi_(a,b,d);1E-9<Math.abs(e-d)&&10>c;)c++,d=e,e=this.calc_phi_(a,b,d);return e};z.prototype.forward=function(a){var b=a[0]*l;a=this.calc_t_(a[1]*l,this.e_);a=this.calc_rho_(this.a_,this.F_,a,this.n_);b=this.n_*(b-this.lamda0_);
    return[this.FE_+a*Math.sin(b),this.FN_+this.rho0_-a*Math.cos(b)]};z.prototype.inverse=function(a){var b=a[0]-this.FE_,d=a[1]-this.FN_;a=Math.atan(b/(this.rho0_-d));b=Math.pow((0<this.n_?1:-1)*Math.sqrt(b*b+(this.rho0_-d)*(this.rho0_-d))/(this.a_*this.F_),1/this.n_);b=this.solve_phi_(b,this.e_,Math.PI/2-2*Math.atan(b));return[(a/this.n_+this.lamda0_)/l,b/l]};z.prototype.getCircum=function(){return 2*Math.PI*this.a_};G.prototype=new m;G.prototype.calc_m_=function(a,b,d,c,e){return b*((1-d/4-3*c/64-
    5*e/256)*a-(3*d/8+3*c/32+45*e/1024)*Math.sin(2*a)+(15*c/256+45*e/1024)*Math.sin(4*a)-35*e/3072*Math.sin(6*a))};G.prototype.forward=function(a){var b=a[1]*l,d=this.a_/Math.sqrt(1-this.es_*Math.pow(Math.sin(b),2)),c=Math.pow(Math.tan(b),2),e=this.eas_*Math.pow(Math.cos(b),2);a=(a[0]*l-this.lamda0_)*Math.cos(b);var f=this.calc_m_(b,this.a_,this.es_,this.ep4_,this.ep6_);return[this.FE_+this.k0_*d*(a+(1-c+e)*Math.pow(a,3)/6+(5-18*c+c*c+72*e-58*this.eas_)*Math.pow(a,5)/120),this.FN_+this.k0_*(f-this.M0_)+
  d*Math.tan(b)*(a*a/2+(5-c+9*e+4*e*e)*Math.pow(a,4)/120+(61-58*c+c*c+600*e-330*this.eas_)*Math.pow(a,6)/720)]};G.prototype.inverse=function(a){var b=(1-Math.sqrt(1-this.es_))/(1+Math.sqrt(1-this.es_)),d=(this.M0_+(a[1]-this.FN_)/this.k0_)/(this.a_*(1-this.es_/4-3*this.ep4_/64-5*this.ep6_/256)),b=d+(3*b/2-27*Math.pow(b,3)/32)*Math.sin(2*d)+(21*b*b/16-55*Math.pow(b,4)/32)*Math.sin(4*d)+151*Math.pow(b,3)/6*Math.sin(6*d)+1097*Math.pow(b,4)/512*Math.sin(8*d),d=this.eas_*Math.pow(Math.cos(b),2),c=Math.pow(Math.tan(b),
    2),e=this.a_/Math.sqrt(1-this.es_*Math.pow(Math.sin(b),2));a=(a[0]-this.FE_)/(e*this.k0_);return[(this.lamda0_+(a-(1+2*c+d)*Math.pow(a,3)/6+(5-2*d+28*c-3*d*d+8*this.eas_+24*c*c)*Math.pow(a,5)/120)/Math.cos(b))/l,(b-e*Math.tan(b)/(this.a_*(1-this.es_)/Math.pow(1-this.es_*Math.pow(Math.sin(b),2),1.5))*(a*a/2-(5+3*c+10*d-4*d*d-9*this.eas_)*Math.pow(a,4)/24+(61+90*c+28*d+45*c*c-252*this.eas_-3*d*d)*Math.pow(a,6)/720))/l]};G.prototype.getCircum=function(){return 2*Math.PI*this.a_};H.prototype=new m;H.prototype.forward=
    function(a){var b=a[1]*l;return[this.a_*(a[0]*l-this.lamda0_),this.a_/2*Math.log((1+Math.sin(b))/(1-Math.sin(b)))]};H.prototype.inverse=function(a){return[(a[0]/this.a_+this.lamda0_)/l,(Math.PI/2-2*Math.atan(Math.exp(-a[1]/this.a_)))/l]};H.prototype.getCircum=function(){return 2*Math.PI*this.a_};A.prototype=new m;A.prototype.calc_m_=function(a,b){var d=Math.sin(a);return Math.cos(a)/Math.sqrt(1-b*d*d)};A.prototype.calc_q_=function(a,b){var d=b*Math.sin(a);return(1-b*b)*(Math.sin(a)/(1-d*d)-1/(2*b)*
    Math.log((1-d)/(1+d)))};A.prototype.calc_rho_=function(a,b,d,c){return a*Math.sqrt(b-d*c)/d};A.prototype.calc_phi_=function(a,b,d){var c=b*Math.sin(d);return d+(1-c*c)*(1-c*c)/(2*Math.cos(d))*(a/(1-b*b)-Math.sin(d)/(1-c*c)+Math.log((1-c)/(1+c))/(2*b))};A.prototype.solve_phi_=function(a,b,d){for(var c=0,e=this.calc_phi_(a,b,d);1E-8<Math.abs(e-d)&&10>c;)c++,d=e,e=this.calc_phi_(a,b,d);return e};A.prototype.forward=function(a){var b=a[0]*l;a=this.calc_q_(a[1]*l,this.e_);a=this.calc_rho_(this.a_,this.C_,
    this.n_,a);b=this.n_*(b-this.lamda0_);return[this.FE_+a*Math.sin(b),this.FN_+this.rho0_-a*Math.cos(b)]};A.prototype.inverse=function(a){var b=a[0]-this.FE_,d=a[1]-this.FN_;a=Math.sqrt(b*b+(this.rho0_-d)*(this.rho0_-d));var c=0<this.n_?1:-1,b=Math.atan(c*b/(c*this.rho0_-c*d));a=(this.C_-a*a*this.n_*this.n_/(this.a_*this.a_))/this.n_;a=this.solve_phi_(a,this.e_,Math.asin(a/2));return[(b/this.n_+this.lamda0_)/l,a/l]};A.prototype.getCircum=function(){return 2*Math.PI*this.a_};A.prototype.getCircum=function(){return 2*
    Math.PI*this.a_};M=new V({wkid:4326});da=new V({wkid:4269});T=new H({wkid:102113,semi_major:6378137,central_meridian:0,unit:1});ea=new H({wkid:102100,semi_major:6378137,central_meridian:0,unit:1});E={4326:M,4269:da,102113:T,102100:ea};m.WGS84=M;m.NAD83=da;m.WEB_MERCATOR=T;m.WEB_MERCATOR_AUX=ea;C.registerSR=function(a,b){var d=E[""+a];if(d)return d;if(b instanceof m)d=E[""+a]=b;else{var d=b||a,c={wkt:a};a===parseInt(a,10)&&(c={wkid:a});var e=t(d,'PROJECTION["','"]'),f=t(d,"SPHEROID[","]").split(",");
    ""!==e&&(c.unit=parseFloat(t(t(d,"PROJECTION",""),"UNIT[","]").split(",")[1]),c.semi_major=parseFloat(f[1]),c.inverse_flattening=parseFloat(f[2]),c.latitude_of_origin=parseFloat(t(d,'"Latitude_Of_Origin",',"]")),c.central_meridian=parseFloat(t(d,'"Central_Meridian",',"]")),c.false_easting=parseFloat(t(d,'"False_Easting",',"]")),c.false_northing=parseFloat(t(d,'"False_Northing",',"]")));switch(e){case "":d=new m(c);break;case "Lambert_Conformal_Conic":c.standard_parallel_1=parseFloat(t(d,'"Standard_Parallel_1",',
      "]"));c.standard_parallel_2=parseFloat(t(d,'"Standard_Parallel_2",',"]"));d=new z(c);break;case "Transverse_Mercator":c.scale_factor=parseFloat(t(d,'"Scale_Factor",',"]"));d=new G(c);break;case "Albers":c.standard_parallel_1=parseFloat(t(d,'"Standard_Parallel_1",',"]"));c.standard_parallel_2=parseFloat(t(d,'"Standard_Parallel_2",',"]"));d=new A(c);break;default:throw Error(e+"  not supported");}d&&(E[""+a]=d)}return d};I.prototype.load=function(){var a=this;this.loaded_||q(this.url,this.urlParams,
    "",function(b){k(b,a);a.loaded_=!0;B(a,"load")})};I.prototype.isInScale=function(a){return this.maxScale&&this.maxScale>a||this.minScale&&this.minScale<a?!1:!0};I.prototype.query=function(a,b,d){if(a){var c=k(a,{});a.geometry&&!J(a.geometry)&&(c.geometry=L(a.geometry),c.geometryType=U(a.geometry),c.inSR=4326);a.spatialRelationship&&(c.spatialRel=a.spatialRelationship,delete c.spatialRelationship);a.outFields&&u(a.outFields)&&(c.outFields=a.outFields.join(","));a.objectIds&&(c.objectIds=a.objectIds.join(","));
    a.time&&(c.time=fa(a.time,a.endTime));c.outSR=4326;c.returnGeometry=!1===a.returnGeometry?!1:!0;c.returnIdsOnly=!0===a.returnIdsOnly?!0:!1;delete c.overlayOptions;c=k(this.urlParams,c);q(this.url+"/query",c,"",function(c){ha(c.features,a.overlayOptions);b(c,c.error);y(d,c)})}};I.prototype.queryRelatedRecords=function(a,b,d){a&&(a=k(a,{}),a.f=a.f||"json",a.outFields&&!J(a.outFields)&&(a.outFields=a.outFields.join(",")),a.returnGeometry=!1===a.returnGeometry?!1:!0,a=k(this.urlParams,a),q(this.url+"/query",
    a,"",function(a){y(d,a);b(a)}))};p.prototype.loadServiceInfo=function(){var a=this;q(this.url,this.urlParams,"",function(b){a.init_(b)})};p.prototype.init_=function(a){var b=this;if(a.error)throw Error(a.error.message);k(a,this);this.spatialReference=a.spatialReference.wkt?C.registerSR(a.spatialReference.wkt):E[a.spatialReference.wkid];void 0!==a.tables?q(this.url+"/layers",this.urlParams,"",function(a){b.initLayers_(a);q(b.url+"/legend",b.urlParams,"",function(a){b.initLegend_(a);b.setLoaded_()})}):
    (b.initLayers_(a),b.setLoaded_())};p.prototype.setLoaded_=function(){this.loaded_=!0;B(this,"load")};p.prototype.initLayers_=function(a){var b=[],d=[];this.layers=b;a.tables&&(this.tables=d);var c,e,f,h;e=0;for(f=a.layers.length;e<f;e++)h=a.layers[e],c=new I(this.url+"/"+h.id),k(h,c),c.visible=c.defaultVisibility,b.push(c);if(a.tables)for(e=0,f=a.tables.length;e<f;e++)h=a.tables[e],c=new I(this.url+"/"+h.id),k(h,c),d.push(c);e=0;for(f=b.length;e<f;e++)if(c=b[e],c.subLayerIds)for(c.subLayers=[],a=
    0,d=c.subLayerIds.length;a<d;a++)h=this.getLayer(c.subLayerIds[a]),c.subLayers.push(h),h.parentLayer=c};p.prototype.initLegend_=function(a){var b=this.layers;if(a.layers){var d,c,e,f;c=0;for(e=a.layers.length;c<e;c++)f=a.layers[c],d=b[f.layerId],k(f,d)}};p.prototype.getLayer=function(a){var b=this.layers;if(b)for(var d=0,c=b.length;d<c;d++)if(a===b[d].id||J(a)&&b[d].name.toLowerCase()===a.toLowerCase())return b[d];return null};p.prototype.getLayerDefs_=function(){var a={};if(this.layers)for(var b=
    0,d=this.layers.length;b<d;b++){var c=this.layers[b];c.definition&&(a[String(c.id)]=c.definition)}return a};p.prototype.hasLoaded=function(){return this.loaded_};p.prototype.getVisibleLayerIds_=function(){var a=[];if(this.layers){var b,d,c;d=0;for(c=this.layers.length;d<c;d++)if(b=this.layers[d],b.subLayers)for(var e=0,f=b.subLayers.length;e<f;e++)if(!1===b.subLayers[e].visible){b.visible=!1;break}d=0;for(c=this.layers.length;d<c;d++)b=this.layers[d],b.subLayers&&0<b.subLayers.length||!0===b.visible&&
  a.push(b.id)}return a};p.prototype.getInitialBounds=function(){return this.initialExtent?this.initBounds_=this.initBounds_||Y(this.initialExtent):null};p.prototype.getFullBounds=function(){return this.fullExtent?this.fullBounds_=this.fullBounds_||Y(this.fullExtent):null};p.prototype.exportMap=function(a,b,d){if(a&&a.bounds){var c={};c.f=a.f;var e=a.bounds,f=e.getSouthWest().lng(),h=e.getNorthEast().lng();f>h&&(f-=180);c.bbox=""+f+","+e.getSouthWest().lat()+","+h+","+e.getNorthEast().lat();c.size=
    ""+a.width+","+a.height;c.dpi=a.dpi;a.imageSR&&(c.imageSR=a.imageSR.wkid?a.imageSR.wkid:"{wkt:"+a.imageSR.wkt+"}");c.bboxSR="4326";c.format=a.format;e=a.layerDefinitions;void 0===e&&(e=this.getLayerDefs_());c.layerDefs=W(e);e=a.layerIds;f=a.layerOption||"show";void 0===e&&(e=this.getVisibleLayerIds_());if(0<e.length)c.layers=f+":"+e.join(",");else if(this.loaded_&&b){b({href:null});return}c.transparent=!1===a.transparent?!1:!0;a.time&&(c.time=fa(a.time,a.endTime));c.layerTimeOptions=a.layerTimeOptions;
    c=k(this.urlParams,c);if("image"===c.f)return this.url+"/export?"+ka(c);q(this.url+"/export",c,"",function(a){a.extent?(a.bounds=Y(a.extent),delete a.extent,b(a)):y(d,a.error)})}};p.prototype.identify=function(a,b,d){if(a){var c={};c.geometry=L(a.geometry);c.geometryType=U(a.geometry);c.mapExtent=L(a.bounds);c.tolerance=a.tolerance||2;c.sr=4326;c.imageDisplay=""+a.width+","+a.height+","+(a.dpi||96);c.layers=a.layerOption||"all";a.layerIds&&(c.layers+=":"+a.layerIds.join(","));a.layerDefs&&(c.layerDefs=
    W(a.layerDefs));c.maxAllowableOffset=a.maxAllowableOffset;c.returnGeometry=!1===a.returnGeometry?!1:!0;c=k(this.urlParams,c);q(this.url+"/identify",c,"",function(c){var f,h,g;if(c.results)for(f=0;f<c.results.length;f++)h=c.results[f],g=N(h.geometry,a.overlayOptions),h.feature={geometry:g,attributes:h.attributes},delete h.attributes;b(c);y(d,c)})}};p.prototype.find=function(a,b,d){if(a){var c=k(a,{});a.layerIds&&(c.layers=a.layerIds.join(","),delete c.layerIds);a.searchFields&&(c.searchFields=a.searchFields.join(","));
    c.contains=!1===a.contains?!1:!0;a.layerDefinitions&&(c.layerDefs=W(a.layerDefinitions),delete c.layerDefinitions);c.sr=4326;c.returnGeometry=!1===a.returnGeometry?!1:!0;c=k(this.urlParams,c);q(this.url+"/find",c,"",function(c){var f,h,g;if(c.results)for(f=0;f<c.results.length;f++)h=c.results[f],g=N(h.geometry,a.overlayOptions),h.feature={geometry:g,attributes:h.attributes},delete h.attributes;b(c);y(d,c)})}};p.prototype.queryLayer=function(a,b,d,c){(a=this.getLayer(a))&&a.query(b,d,c)};S.prototype.init_=
    function(a){k(a,this);a.spatialReference&&(this.spatialReference=E[a.spatialReference.wkid||a.spatialReference.wkt]||M);this.loaded_=!0;B(this,"load")};S.prototype.findAddressCandidates=function(a,b,d){var c=k(a,{});c.inputs&&(k(c.inputs,c),delete c.inputs);u(c.outFields)&&(c.outFields=c.outFields.join(","));var c=k(this.urlParams,c),e=this;q(this.url+"/findAddressCandidates",c,"",function(c){if(c.candidates)for(var h,n,k=[],l=0;l<c.candidates.length;l++)if(h=c.candidates[l],n=h.location,!isNaN(n.x)&&
    !isNaN(n.y)){n=[n.x,n.y];var m=e.spatialReference;a.outSR&&(m=E[a.outSR]);m&&(n=m.inverse(n));h.location=new g.LatLng(n[1],n[0]);k[k.length]=h}b({candidates:k});y(d,c)})};S.prototype.geocode=function(a,b){this.findAddressCandidates(a,b)};S.prototype.reverseGeocode=function(a,b,d){J(a.location)||(a.location=L(a.location));a.outSR=4326;var c=this;q(this.url+"/reverseGeocode",a,"",function(a){if(a.location){var f=a.location;isNaN(f.x)||isNaN(f.y)||(f=[f.x,f.y],c.spatialReference&&(f=c.spatialReference.inverse(f)),
    a.location=new g.LatLng(f[1],f[0]))}b(a);y(d,a)})};ba.prototype.project=function(a,b,d){var c=ja(a),c=k(this.urlParams,c);q(this.url+"/project",c,"callback",function(c){var f=[];if(4326===a.outSpatialReference||4326===a.outSpatialReference.wkid){for(var h=0,g=c.geometries.length;h<g;h++)f.push(N(c.geometries[h]));c.geometries=f}b(c);y(d,c)})};ba.prototype.buffer=function(a,b,d){var c=ja(a);a.bufferSpatialReference&&(c.bufferSR=Q(a.bufferSpatialReference));c.outSR=4326;c.distances=a.distances.join(",");
    a.unit&&(c.unit=a.unit);c=k(this.urlParams,c);q(this.url+"/buffer",c,"callback",function(c){var f=[];if(c.geometries)for(var h=0,g=c.geometries.length;h<g;h++)f.push(N(c.geometries[h],a.overlayOptions));c.geometries=f;b(c);y(d,c)})};la.prototype.execute=function(a,b,d){var c={};a.parameters&&k(a.parameters,c);c["env:outSR"]=a.outSpatialReference?Q(a.outSpatialReference):4326;a.processSpatialReference&&(c["env:processSR"]=Q(a.processSpatialReference));c=k(this.urlParams,c);q(this.url+"/execute",c,
    "",function(c){if(c.results)for(var f,h,g=0;g<c.results.length;g++)if(f=c.results[g],"GPFeatureRecordSetLayer"===f.dataType)for(var k=0,l=f.value.features.length;k<l;k++)h=f.value.features[k],h.geometry&&(h.geometry=N(h.geometry,a.overlayOptions));b(c);y(d,c)})};ma.prototype.solve=function(a,b,d){if(a){var c=k(a,{});u(a.stops)&&(c.stops=ia(a.stops));u(a.barriers)&&(0<a.barriers.length?c.barriers=ia(a.barriers):delete c.barriers);c.returnRoutes=!1===a.returnRoutes?!1:!0;c.returnDirections=!0===a.returnDirections?
    !0:!1;c.returnBarriers=!0===a.returnBarriers?!0:!1;c.returnStops=!0===a.returnStops?!0:!1;c=k(this.urlParams,c);q(this.url+"/solve",c,"",function(c){c.routes&&ha(c.routes.features,a.overlayOptions);b(c);y(d,c)})}};w.prototype.fromLatLngToPoint=function(a,b){if(!a||isNaN(a.lat())||isNaN(a.lng()))return null;var d=this.spatialReference_.forward([a.lng(),a.lat()]),c=b||new g.Point(0,0);c.x=(d[0]-this.originX_)/this.scale_;c.y=(this.originY_-d[1])/this.scale_;return c};w.prototype.fromLatLngToPoint=w.prototype.fromLatLngToPoint;
  w.prototype.fromPointToLatLng=function(a,b){if(null===a)return null;var d=this.spatialReference_.inverse([a.x*this.scale_+this.originX_,this.originY_-a.y*this.scale_]);return new g.LatLng(d[1],d[0])};w.prototype.getScale=function(a){a-=this.minZoom;var b=0;this.lods_[a]&&(b=this.lods_[a].scale);return b};w.WEB_MECATOR=new w;D.prototype.init_=function(a){this.mapService_.tileInfo&&(this.projection_=new w(this.mapService_.tileInfo),this.minZoom=a.minZoom||this.projection_.minZoom,this.maxZoom=a.maxZoom||
    this.projection_.maxZoom);a.readyCallback&&a.readyCallback()};D.prototype.getTileUrl=function(a,b){var d=b-(this.projection_?this.projection_.minZoom:this.minZoom),c="";if(!isNaN(a.x)&&!isNaN(a.y)&&0<=d&&0<=a.x&&0<=a.y){var e=this.mapService_.url;this.urlTemplate_&&(e=this.urlTemplate_.replace("["+this.numOfHosts_+"]",""+(a.y+a.x)%this.numOfHosts_));c=this.projection_||(this.map_?this.map_.getProjection():w.WEB_MECATOR);c&&c instanceof w||(c=w.WEB_MECATOR);var f=c.tileSize_,h=1<<b,k=new g.Point(a.x*
    f.width/h,(a.y+1)*f.height/h),h=new g.Point((a.x+1)*f.width/h,a.y*f.height/h),k=new g.LatLngBounds(c.fromPointToLatLng(k),c.fromPointToLatLng(h)),h=this.mapService_.getFullBounds();!1===this.mapService_.singleFusedMapCache||b>this.dynaZoom?(d={f:"image"},d.bounds=k,d.format="png32",d.width=f.width,d.height=f.height,d.imageSR=c.spatialReference_,c=this.mapService_.exportMap(d)):c=h&&!h.intersects(k)?"":e+"/tile/"+d+"/"+a.y+"/"+a.x}return c};D.prototype.setOpacity=function(a){this.opacity_=a;var b=
    this.tiles_,d;for(d in b)b.hasOwnProperty(d)&&K(b[d],a)};D.prototype.getOpacity=function(){return this.opacity_};D.prototype.getMapService=function(){return this.mapService_};x.prototype.getTile=function(a,b,d){for(var c=d.createElement("div"),e="_"+a.x+"_"+a.y+"_"+b,f=0;f<this.tileLayers_.length;f++){var h=this.tileLayers_[f];if(b<=h.maxZoom&&b>=h.minZoom){var g=h.getTileUrl(a,b);if(g){var k=d.createElement(document.all?"img":"div");k.style.border="0px none";k.style.margin="0px";k.style.padding=
    "0px";k.style.overflow="hidden";k.style.position="absolute";k.style.top="0px";k.style.left="0px";k.style.width=""+this.tileSize.width+"px";k.style.height=""+this.tileSize.height+"px";document.all?k.src=g:k.style.backgroundImage="url("+g+")";c.appendChild(k);h.tiles_[e]=k;void 0!==h.opacity_?K(k,h.opacity_):void 0!==this.opacity_&&K(k,this.opacity_)}}}this.tiles_[e]=c;c.setAttribute("tid",e);return c};x.prototype.getTile=x.prototype.getTile;x.prototype.releaseTile=function(a){if(a.getAttribute("tid")){a=
    a.getAttribute("tid");this.tiles_[a]&&delete this.tiles_[a];for(var b=0;b<this.tileLayers_.length;b++){var d=this.tileLayers_[b];d.tiles_[a]&&delete d.tiles_[a]}}};x.prototype.releaseTile=x.prototype.releaseTile;x.prototype.setOpacity=function(a){this.opacity_=a;var b=this.tiles_,d;for(d in b)if(b.hasOwnProperty(d))for(var c=b[d].childNodes,e=0;e<c.length;e++)K(c[e],a)};x.prototype.getOpacity=function(){return this.opacity_};x.prototype.getTileLayers=function(){return this.tileLayers_};r.prototype=
    new g.OverlayView;r.prototype.onAdd=function(){var a=this;this.listeners_.push(g.event.addListener(this.getMap(),"bounds_changed",qa(this.refresh,this)));this.listeners_.push(g.event.addListener(this.getMap(),"dragstart",function(){a.dragging=!0}));this.listeners_.push(g.event.addListener(this.getMap(),"dragend",function(){a.dragging=!1}));var b=this.getMap();b.agsOverlays=b.agsOverlays||new g.MVCArray;b.agsOverlays.push(this);O(b);this.map_=b};r.prototype.onAdd=r.prototype.onAdd;r.prototype.onRemove=
    function(){for(var a=0,b=this.listeners_.length;a<b;a++)g.event.removeListener(this.listeners_[a]);this.overlay_&&this.overlay_.setMap(null);var b=this.map_,d=b.agsOverlays;if(d)for(var a=0,c=d.getLength();a<c;a++)if(d.getAt(a)==this){d.removeAt(a);break}O(b);this.map_=null};r.prototype.onRemove=r.prototype.onRemove;r.prototype.draw=function(){this.drawing_&&!0!==this.needsNewRefresh_||this.refresh()};r.prototype.draw=r.prototype.draw;r.prototype.getOpacity=function(){return this.opacity_};r.prototype.setOpacity=
    function(a){this.opacity_=a=Math.min(Math.max(a,0),1);this.overlay_&&K(this.overlay_.div_,a)};r.prototype.getMapService=function(){return this.mapService_};r.prototype.refresh=function(){if(!0===this.drawing_)this.needsNewRefresh_=!0;else{var a=this.getMap(),b=a?a.getBounds():null;if(b){var d=this.exportOptions_;d.bounds=b;var b=T,c=a.getDiv();d.width=c.offsetWidth;d.height=c.offsetHeight;if(0!=c.offsetWidth&&0!=c.offsetHeight){(a=a.getProjection())&&a instanceof w&&(b=a.spatialReference_);d.imageSR=
    b;B(this,"drawstart");var e=this;this.drawing_=!0;!this.dragging&&this.overlay_&&(this.overlay_.setMap(null),this.overlay_=null);this.mapService_.exportMap(d,function(a){e.drawing_=!1;!0===e.needsNewRefresh_?(e.needsNewRefresh_=!1,e.refresh()):(a.href?(e.overlay_&&(e.overlay_.setMap(null),e.overlay_=null),e.overlay_=new P(a.bounds,a.href,e.map_,e.opacity_)):a.imageData&&(e.overlay_&&(e.overlay_.setMap(null),e.overlay_=null),e.overlay_=new P(a.bounds,"data:image/gif;base64,"+a.imageData,e.map_,e.opacity_)),
    B(e,"drawend"))})}}}};r.prototype.isHidden=function(){return!(this.visible_&&this.isInZoomRange_())};r.prototype.isInZoomRange_=function(){var a=this.getMap().getZoom();return void 0!==this.minZoom&&a<this.minZoom||void 0!==this.maxZoom&&a>this.maxZoom?!1:!0};r.prototype.show=function(){this.visible_=!0;this.div_.style.visibility="visible";this.refresh()};r.prototype.hide=function(){this.visible_=!1;this.div_.style.visibility="hidden"};P.prototype=new g.OverlayView;P.prototype.onAdd=function(){var a=
    document.createElement("DIV");a.style.border="none";a.style.borderWidth="0px";a.style.position="absolute";var b=this.map_.getDiv();a.style.width=b.offsetWidth+"px";a.style.height=b.offsetHeight+"px";a.style.backgroundImage="url("+this.url_+")";this.div_=a;b=this.getPanes();K(a,this.op_);b.overlayLayer.appendChild(a)};P.prototype.draw=function(){var a=this.getProjection(),b=a.fromLatLngToDivPixel(this.bounds_.getSouthWest()),a=a.fromLatLngToDivPixel(this.bounds_.getNorthEast()),d=this.div_;d.style.left=
    b.x+"px";d.style.top=a.y+"px"};P.prototype.onRemove=function(){this.div_.parentNode.removeChild(this.div_);this.div_=null};na.prototype.refresh=function(){O(this.map_)};ca.ags={SpatialReference:m,Geographic:V,LambertConformalConic:z,SphereMercator:H,TransverseMercator:G,SpatialRelationship:{INTERSECTS:"esriSpatialRelIntersects",CONTAINS:"esriSpatialRelContains",CROSSES:"esriSpatialRelCrosses",ENVELOPE_INTERSECTS:"esriSpatialRelEnvelopeIntersects",INDEX_INTERSECTS:"esriSpatialRelIndexIntersects",OVERLAPS:"esriSpatialRelOverlaps",
    TOUCHES:"esriSpatialRelTouches",WITHIN:"esriSpatialRelWithin"},GeometryType:v,SRUnit:{METER:9001,FOOT:9002,SURVEY_FOOT:9003,SURVEY_MILE:9035,KILLOMETER:9036,RADIAN:9101,DEGREE:9102},Catalog:function(a,b){this.url=a;this.urlParams=b||{};var d=this;q(a,this.urlParams,"",function(a){k(a,d);B(d,"load")})},MapService:p,Layer:I,GeocodeService:S,GeometryService:ba,GPService:function(a,b){this.url=a;this.urlParams=b||{};this.loaded_=!1;var d=this;q(a,this.urlParams,"",function(a){k(a,d);d.loaded_=!0;B(d,
    "load")})},GPTask:la,RouteTask:ma,Util:C,Config:R,Projection:w,TileLayer:D,MapOverlay:r,MapType:x,CopyrightControl:na};window.gmaps=ca})();