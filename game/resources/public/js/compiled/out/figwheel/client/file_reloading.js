// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18742__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18742__auto__){
return or__18742__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18742__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28107_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28107_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28112 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28113 = null;
var count__28114 = (0);
var i__28115 = (0);
while(true){
if((i__28115 < count__28114)){
var n = cljs.core._nth.call(null,chunk__28113,i__28115);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28116 = seq__28112;
var G__28117 = chunk__28113;
var G__28118 = count__28114;
var G__28119 = (i__28115 + (1));
seq__28112 = G__28116;
chunk__28113 = G__28117;
count__28114 = G__28118;
i__28115 = G__28119;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28112);
if(temp__4657__auto__){
var seq__28112__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28112__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__28112__$1);
var G__28120 = cljs.core.chunk_rest.call(null,seq__28112__$1);
var G__28121 = c__19556__auto__;
var G__28122 = cljs.core.count.call(null,c__19556__auto__);
var G__28123 = (0);
seq__28112 = G__28120;
chunk__28113 = G__28121;
count__28114 = G__28122;
i__28115 = G__28123;
continue;
} else {
var n = cljs.core.first.call(null,seq__28112__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28124 = cljs.core.next.call(null,seq__28112__$1);
var G__28125 = null;
var G__28126 = (0);
var G__28127 = (0);
seq__28112 = G__28124;
chunk__28113 = G__28125;
count__28114 = G__28126;
i__28115 = G__28127;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28178_28189 = cljs.core.seq.call(null,deps);
var chunk__28179_28190 = null;
var count__28180_28191 = (0);
var i__28181_28192 = (0);
while(true){
if((i__28181_28192 < count__28180_28191)){
var dep_28193 = cljs.core._nth.call(null,chunk__28179_28190,i__28181_28192);
topo_sort_helper_STAR_.call(null,dep_28193,(depth + (1)),state);

var G__28194 = seq__28178_28189;
var G__28195 = chunk__28179_28190;
var G__28196 = count__28180_28191;
var G__28197 = (i__28181_28192 + (1));
seq__28178_28189 = G__28194;
chunk__28179_28190 = G__28195;
count__28180_28191 = G__28196;
i__28181_28192 = G__28197;
continue;
} else {
var temp__4657__auto___28198 = cljs.core.seq.call(null,seq__28178_28189);
if(temp__4657__auto___28198){
var seq__28178_28199__$1 = temp__4657__auto___28198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28178_28199__$1)){
var c__19556__auto___28200 = cljs.core.chunk_first.call(null,seq__28178_28199__$1);
var G__28201 = cljs.core.chunk_rest.call(null,seq__28178_28199__$1);
var G__28202 = c__19556__auto___28200;
var G__28203 = cljs.core.count.call(null,c__19556__auto___28200);
var G__28204 = (0);
seq__28178_28189 = G__28201;
chunk__28179_28190 = G__28202;
count__28180_28191 = G__28203;
i__28181_28192 = G__28204;
continue;
} else {
var dep_28205 = cljs.core.first.call(null,seq__28178_28199__$1);
topo_sort_helper_STAR_.call(null,dep_28205,(depth + (1)),state);

var G__28206 = cljs.core.next.call(null,seq__28178_28199__$1);
var G__28207 = null;
var G__28208 = (0);
var G__28209 = (0);
seq__28178_28189 = G__28206;
chunk__28179_28190 = G__28207;
count__28180_28191 = G__28208;
i__28181_28192 = G__28209;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28182){
var vec__28186 = p__28182;
var seq__28187 = cljs.core.seq.call(null,vec__28186);
var first__28188 = cljs.core.first.call(null,seq__28187);
var seq__28187__$1 = cljs.core.next.call(null,seq__28187);
var x = first__28188;
var xs = seq__28187__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28186,seq__28187,first__28188,seq__28187__$1,x,xs,get_deps__$1){
return (function (p1__28128_SHARP_){
return clojure.set.difference.call(null,p1__28128_SHARP_,x);
});})(vec__28186,seq__28187,first__28188,seq__28187__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28222 = cljs.core.seq.call(null,provides);
var chunk__28223 = null;
var count__28224 = (0);
var i__28225 = (0);
while(true){
if((i__28225 < count__28224)){
var prov = cljs.core._nth.call(null,chunk__28223,i__28225);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28226_28234 = cljs.core.seq.call(null,requires);
var chunk__28227_28235 = null;
var count__28228_28236 = (0);
var i__28229_28237 = (0);
while(true){
if((i__28229_28237 < count__28228_28236)){
var req_28238 = cljs.core._nth.call(null,chunk__28227_28235,i__28229_28237);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28238,prov);

var G__28239 = seq__28226_28234;
var G__28240 = chunk__28227_28235;
var G__28241 = count__28228_28236;
var G__28242 = (i__28229_28237 + (1));
seq__28226_28234 = G__28239;
chunk__28227_28235 = G__28240;
count__28228_28236 = G__28241;
i__28229_28237 = G__28242;
continue;
} else {
var temp__4657__auto___28243 = cljs.core.seq.call(null,seq__28226_28234);
if(temp__4657__auto___28243){
var seq__28226_28244__$1 = temp__4657__auto___28243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28226_28244__$1)){
var c__19556__auto___28245 = cljs.core.chunk_first.call(null,seq__28226_28244__$1);
var G__28246 = cljs.core.chunk_rest.call(null,seq__28226_28244__$1);
var G__28247 = c__19556__auto___28245;
var G__28248 = cljs.core.count.call(null,c__19556__auto___28245);
var G__28249 = (0);
seq__28226_28234 = G__28246;
chunk__28227_28235 = G__28247;
count__28228_28236 = G__28248;
i__28229_28237 = G__28249;
continue;
} else {
var req_28250 = cljs.core.first.call(null,seq__28226_28244__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28250,prov);

var G__28251 = cljs.core.next.call(null,seq__28226_28244__$1);
var G__28252 = null;
var G__28253 = (0);
var G__28254 = (0);
seq__28226_28234 = G__28251;
chunk__28227_28235 = G__28252;
count__28228_28236 = G__28253;
i__28229_28237 = G__28254;
continue;
}
} else {
}
}
break;
}

var G__28255 = seq__28222;
var G__28256 = chunk__28223;
var G__28257 = count__28224;
var G__28258 = (i__28225 + (1));
seq__28222 = G__28255;
chunk__28223 = G__28256;
count__28224 = G__28257;
i__28225 = G__28258;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28222);
if(temp__4657__auto__){
var seq__28222__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28222__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__28222__$1);
var G__28259 = cljs.core.chunk_rest.call(null,seq__28222__$1);
var G__28260 = c__19556__auto__;
var G__28261 = cljs.core.count.call(null,c__19556__auto__);
var G__28262 = (0);
seq__28222 = G__28259;
chunk__28223 = G__28260;
count__28224 = G__28261;
i__28225 = G__28262;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28222__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28230_28263 = cljs.core.seq.call(null,requires);
var chunk__28231_28264 = null;
var count__28232_28265 = (0);
var i__28233_28266 = (0);
while(true){
if((i__28233_28266 < count__28232_28265)){
var req_28267 = cljs.core._nth.call(null,chunk__28231_28264,i__28233_28266);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28267,prov);

var G__28268 = seq__28230_28263;
var G__28269 = chunk__28231_28264;
var G__28270 = count__28232_28265;
var G__28271 = (i__28233_28266 + (1));
seq__28230_28263 = G__28268;
chunk__28231_28264 = G__28269;
count__28232_28265 = G__28270;
i__28233_28266 = G__28271;
continue;
} else {
var temp__4657__auto___28272__$1 = cljs.core.seq.call(null,seq__28230_28263);
if(temp__4657__auto___28272__$1){
var seq__28230_28273__$1 = temp__4657__auto___28272__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28230_28273__$1)){
var c__19556__auto___28274 = cljs.core.chunk_first.call(null,seq__28230_28273__$1);
var G__28275 = cljs.core.chunk_rest.call(null,seq__28230_28273__$1);
var G__28276 = c__19556__auto___28274;
var G__28277 = cljs.core.count.call(null,c__19556__auto___28274);
var G__28278 = (0);
seq__28230_28263 = G__28275;
chunk__28231_28264 = G__28276;
count__28232_28265 = G__28277;
i__28233_28266 = G__28278;
continue;
} else {
var req_28279 = cljs.core.first.call(null,seq__28230_28273__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28279,prov);

var G__28280 = cljs.core.next.call(null,seq__28230_28273__$1);
var G__28281 = null;
var G__28282 = (0);
var G__28283 = (0);
seq__28230_28263 = G__28280;
chunk__28231_28264 = G__28281;
count__28232_28265 = G__28282;
i__28233_28266 = G__28283;
continue;
}
} else {
}
}
break;
}

var G__28284 = cljs.core.next.call(null,seq__28222__$1);
var G__28285 = null;
var G__28286 = (0);
var G__28287 = (0);
seq__28222 = G__28284;
chunk__28223 = G__28285;
count__28224 = G__28286;
i__28225 = G__28287;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28292_28296 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28293_28297 = null;
var count__28294_28298 = (0);
var i__28295_28299 = (0);
while(true){
if((i__28295_28299 < count__28294_28298)){
var ns_28300 = cljs.core._nth.call(null,chunk__28293_28297,i__28295_28299);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28300);

var G__28301 = seq__28292_28296;
var G__28302 = chunk__28293_28297;
var G__28303 = count__28294_28298;
var G__28304 = (i__28295_28299 + (1));
seq__28292_28296 = G__28301;
chunk__28293_28297 = G__28302;
count__28294_28298 = G__28303;
i__28295_28299 = G__28304;
continue;
} else {
var temp__4657__auto___28305 = cljs.core.seq.call(null,seq__28292_28296);
if(temp__4657__auto___28305){
var seq__28292_28306__$1 = temp__4657__auto___28305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28292_28306__$1)){
var c__19556__auto___28307 = cljs.core.chunk_first.call(null,seq__28292_28306__$1);
var G__28308 = cljs.core.chunk_rest.call(null,seq__28292_28306__$1);
var G__28309 = c__19556__auto___28307;
var G__28310 = cljs.core.count.call(null,c__19556__auto___28307);
var G__28311 = (0);
seq__28292_28296 = G__28308;
chunk__28293_28297 = G__28309;
count__28294_28298 = G__28310;
i__28295_28299 = G__28311;
continue;
} else {
var ns_28312 = cljs.core.first.call(null,seq__28292_28306__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28312);

var G__28313 = cljs.core.next.call(null,seq__28292_28306__$1);
var G__28314 = null;
var G__28315 = (0);
var G__28316 = (0);
seq__28292_28296 = G__28313;
chunk__28293_28297 = G__28314;
count__28294_28298 = G__28315;
i__28295_28299 = G__28316;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18742__auto__ = goog.require__;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28317__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28318__i = 0, G__28318__a = new Array(arguments.length -  0);
while (G__28318__i < G__28318__a.length) {G__28318__a[G__28318__i] = arguments[G__28318__i + 0]; ++G__28318__i;}
  args = new cljs.core.IndexedSeq(G__28318__a,0);
} 
return G__28317__delegate.call(this,args);};
G__28317.cljs$lang$maxFixedArity = 0;
G__28317.cljs$lang$applyTo = (function (arglist__28319){
var args = cljs.core.seq(arglist__28319);
return G__28317__delegate(args);
});
G__28317.cljs$core$IFn$_invoke$arity$variadic = G__28317__delegate;
return G__28317;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28321 = cljs.core._EQ_;
var expr__28322 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28321.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28322))){
var path_parts = ((function (pred__28321,expr__28322){
return (function (p1__28320_SHARP_){
return clojure.string.split.call(null,p1__28320_SHARP_,/[\/\\]/);
});})(pred__28321,expr__28322))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28321,expr__28322){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28324){if((e28324 instanceof Error)){
var e = e28324;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28324;

}
}})());
});
;})(path_parts,sep,root,pred__28321,expr__28322))
} else {
if(cljs.core.truth_(pred__28321.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28322))){
return ((function (pred__28321,expr__28322){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28321,expr__28322){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28321,expr__28322))
);

return deferred.addErrback(((function (deferred,pred__28321,expr__28322){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28321,expr__28322))
);
});
;})(pred__28321,expr__28322))
} else {
return ((function (pred__28321,expr__28322){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28321,expr__28322))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28325,callback){
var map__28328 = p__28325;
var map__28328__$1 = ((((!((map__28328 == null)))?((((map__28328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28328):map__28328);
var file_msg = map__28328__$1;
var request_url = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28328,map__28328__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28328,map__28328__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_28352){
var state_val_28353 = (state_28352[(1)]);
if((state_val_28353 === (7))){
var inst_28348 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28354_28374 = state_28352__$1;
(statearr_28354_28374[(2)] = inst_28348);

(statearr_28354_28374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (1))){
var state_28352__$1 = state_28352;
var statearr_28355_28375 = state_28352__$1;
(statearr_28355_28375[(2)] = null);

(statearr_28355_28375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (4))){
var inst_28332 = (state_28352[(7)]);
var inst_28332__$1 = (state_28352[(2)]);
var state_28352__$1 = (function (){var statearr_28356 = state_28352;
(statearr_28356[(7)] = inst_28332__$1);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28332__$1)){
var statearr_28357_28376 = state_28352__$1;
(statearr_28357_28376[(1)] = (5));

} else {
var statearr_28358_28377 = state_28352__$1;
(statearr_28358_28377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (6))){
var state_28352__$1 = state_28352;
var statearr_28359_28378 = state_28352__$1;
(statearr_28359_28378[(2)] = null);

(statearr_28359_28378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (3))){
var inst_28350 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28352__$1,inst_28350);
} else {
if((state_val_28353 === (2))){
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28352__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28353 === (11))){
var inst_28344 = (state_28352[(2)]);
var state_28352__$1 = (function (){var statearr_28360 = state_28352;
(statearr_28360[(8)] = inst_28344);

return statearr_28360;
})();
var statearr_28361_28379 = state_28352__$1;
(statearr_28361_28379[(2)] = null);

(statearr_28361_28379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (9))){
var inst_28336 = (state_28352[(9)]);
var inst_28338 = (state_28352[(10)]);
var inst_28340 = inst_28338.call(null,inst_28336);
var state_28352__$1 = state_28352;
var statearr_28362_28380 = state_28352__$1;
(statearr_28362_28380[(2)] = inst_28340);

(statearr_28362_28380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (5))){
var inst_28332 = (state_28352[(7)]);
var inst_28334 = figwheel.client.file_reloading.blocking_load.call(null,inst_28332);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28352__$1,(8),inst_28334);
} else {
if((state_val_28353 === (10))){
var inst_28336 = (state_28352[(9)]);
var inst_28342 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28336);
var state_28352__$1 = state_28352;
var statearr_28363_28381 = state_28352__$1;
(statearr_28363_28381[(2)] = inst_28342);

(statearr_28363_28381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (8))){
var inst_28338 = (state_28352[(10)]);
var inst_28332 = (state_28352[(7)]);
var inst_28336 = (state_28352[(2)]);
var inst_28337 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28338__$1 = cljs.core.get.call(null,inst_28337,inst_28332);
var state_28352__$1 = (function (){var statearr_28364 = state_28352;
(statearr_28364[(9)] = inst_28336);

(statearr_28364[(10)] = inst_28338__$1);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28338__$1)){
var statearr_28365_28382 = state_28352__$1;
(statearr_28365_28382[(1)] = (9));

} else {
var statearr_28366_28383 = state_28352__$1;
(statearr_28366_28383[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21093__auto__ = null;
var figwheel$client$file_reloading$state_machine__21093__auto____0 = (function (){
var statearr_28370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28370[(0)] = figwheel$client$file_reloading$state_machine__21093__auto__);

(statearr_28370[(1)] = (1));

return statearr_28370;
});
var figwheel$client$file_reloading$state_machine__21093__auto____1 = (function (state_28352){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_28352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e28371){if((e28371 instanceof Object)){
var ex__21096__auto__ = e28371;
var statearr_28372_28384 = state_28352;
(statearr_28372_28384[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28385 = state_28352;
state_28352 = G__28385;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21093__auto__ = function(state_28352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21093__auto____1.call(this,state_28352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21093__auto____0;
figwheel$client$file_reloading$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21093__auto____1;
return figwheel$client$file_reloading$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_28373 = f__21108__auto__.call(null);
(statearr_28373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_28373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28386,callback){
var map__28389 = p__28386;
var map__28389__$1 = ((((!((map__28389 == null)))?((((map__28389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28389):map__28389);
var file_msg = map__28389__$1;
var namespace = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28389,map__28389__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28389,map__28389__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28391){
var map__28394 = p__28391;
var map__28394__$1 = ((((!((map__28394 == null)))?((((map__28394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28394):map__28394);
var file_msg = map__28394__$1;
var namespace = cljs.core.get.call(null,map__28394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18730__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18730__auto__){
var or__18742__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
var or__18742__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18742__auto____$1)){
return or__18742__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18730__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28396,callback){
var map__28399 = p__28396;
var map__28399__$1 = ((((!((map__28399 == null)))?((((map__28399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28399):map__28399);
var file_msg = map__28399__$1;
var request_url = cljs.core.get.call(null,map__28399__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21107__auto___28503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___28503,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___28503,out){
return (function (state_28485){
var state_val_28486 = (state_28485[(1)]);
if((state_val_28486 === (1))){
var inst_28459 = cljs.core.seq.call(null,files);
var inst_28460 = cljs.core.first.call(null,inst_28459);
var inst_28461 = cljs.core.next.call(null,inst_28459);
var inst_28462 = files;
var state_28485__$1 = (function (){var statearr_28487 = state_28485;
(statearr_28487[(7)] = inst_28460);

(statearr_28487[(8)] = inst_28462);

(statearr_28487[(9)] = inst_28461);

return statearr_28487;
})();
var statearr_28488_28504 = state_28485__$1;
(statearr_28488_28504[(2)] = null);

(statearr_28488_28504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28486 === (2))){
var inst_28462 = (state_28485[(8)]);
var inst_28468 = (state_28485[(10)]);
var inst_28467 = cljs.core.seq.call(null,inst_28462);
var inst_28468__$1 = cljs.core.first.call(null,inst_28467);
var inst_28469 = cljs.core.next.call(null,inst_28467);
var inst_28470 = (inst_28468__$1 == null);
var inst_28471 = cljs.core.not.call(null,inst_28470);
var state_28485__$1 = (function (){var statearr_28489 = state_28485;
(statearr_28489[(11)] = inst_28469);

(statearr_28489[(10)] = inst_28468__$1);

return statearr_28489;
})();
if(inst_28471){
var statearr_28490_28505 = state_28485__$1;
(statearr_28490_28505[(1)] = (4));

} else {
var statearr_28491_28506 = state_28485__$1;
(statearr_28491_28506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28486 === (3))){
var inst_28483 = (state_28485[(2)]);
var state_28485__$1 = state_28485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28485__$1,inst_28483);
} else {
if((state_val_28486 === (4))){
var inst_28468 = (state_28485[(10)]);
var inst_28473 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28468);
var state_28485__$1 = state_28485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28485__$1,(7),inst_28473);
} else {
if((state_val_28486 === (5))){
var inst_28479 = cljs.core.async.close_BANG_.call(null,out);
var state_28485__$1 = state_28485;
var statearr_28492_28507 = state_28485__$1;
(statearr_28492_28507[(2)] = inst_28479);

(statearr_28492_28507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28486 === (6))){
var inst_28481 = (state_28485[(2)]);
var state_28485__$1 = state_28485;
var statearr_28493_28508 = state_28485__$1;
(statearr_28493_28508[(2)] = inst_28481);

(statearr_28493_28508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28486 === (7))){
var inst_28469 = (state_28485[(11)]);
var inst_28475 = (state_28485[(2)]);
var inst_28476 = cljs.core.async.put_BANG_.call(null,out,inst_28475);
var inst_28462 = inst_28469;
var state_28485__$1 = (function (){var statearr_28494 = state_28485;
(statearr_28494[(8)] = inst_28462);

(statearr_28494[(12)] = inst_28476);

return statearr_28494;
})();
var statearr_28495_28509 = state_28485__$1;
(statearr_28495_28509[(2)] = null);

(statearr_28495_28509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21107__auto___28503,out))
;
return ((function (switch__21092__auto__,c__21107__auto___28503,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____0 = (function (){
var statearr_28499 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28499[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__);

(statearr_28499[(1)] = (1));

return statearr_28499;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____1 = (function (state_28485){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_28485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e28500){if((e28500 instanceof Object)){
var ex__21096__auto__ = e28500;
var statearr_28501_28510 = state_28485;
(statearr_28501_28510[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28511 = state_28485;
state_28485 = G__28511;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__ = function(state_28485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____1.call(this,state_28485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___28503,out))
})();
var state__21109__auto__ = (function (){var statearr_28502 = f__21108__auto__.call(null);
(statearr_28502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___28503);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___28503,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28512,opts){
var map__28516 = p__28512;
var map__28516__$1 = ((((!((map__28516 == null)))?((((map__28516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28516):map__28516);
var eval_body = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18730__auto__ = eval_body;
if(cljs.core.truth_(and__18730__auto__)){
return typeof eval_body === 'string';
} else {
return and__18730__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28518){var e = e28518;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28519_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28519_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28528){
var vec__28529 = p__28528;
var k = cljs.core.nth.call(null,vec__28529,(0),null);
var v = cljs.core.nth.call(null,vec__28529,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28532){
var vec__28533 = p__28532;
var k = cljs.core.nth.call(null,vec__28533,(0),null);
var v = cljs.core.nth.call(null,vec__28533,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28539,p__28540){
var map__28788 = p__28539;
var map__28788__$1 = ((((!((map__28788 == null)))?((((map__28788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28788):map__28788);
var opts = map__28788__$1;
var before_jsload = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28788__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28789 = p__28540;
var map__28789__$1 = ((((!((map__28789 == null)))?((((map__28789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);
var msg = map__28789__$1;
var files = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28804 = (state_28943[(7)]);
var inst_28805 = (state_28943[(8)]);
var inst_28803 = (state_28943[(9)]);
var inst_28806 = (state_28943[(10)]);
var inst_28811 = cljs.core._nth.call(null,inst_28804,inst_28806);
var inst_28812 = figwheel.client.file_reloading.eval_body.call(null,inst_28811,opts);
var inst_28813 = (inst_28806 + (1));
var tmp28945 = inst_28804;
var tmp28946 = inst_28805;
var tmp28947 = inst_28803;
var inst_28803__$1 = tmp28947;
var inst_28804__$1 = tmp28945;
var inst_28805__$1 = tmp28946;
var inst_28806__$1 = inst_28813;
var state_28943__$1 = (function (){var statearr_28948 = state_28943;
(statearr_28948[(11)] = inst_28812);

(statearr_28948[(7)] = inst_28804__$1);

(statearr_28948[(8)] = inst_28805__$1);

(statearr_28948[(9)] = inst_28803__$1);

(statearr_28948[(10)] = inst_28806__$1);

return statearr_28948;
})();
var statearr_28949_29035 = state_28943__$1;
(statearr_28949_29035[(2)] = null);

(statearr_28949_29035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (20))){
var inst_28846 = (state_28943[(12)]);
var inst_28854 = figwheel.client.file_reloading.sort_files.call(null,inst_28846);
var state_28943__$1 = state_28943;
var statearr_28950_29036 = state_28943__$1;
(statearr_28950_29036[(2)] = inst_28854);

(statearr_28950_29036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (27))){
var state_28943__$1 = state_28943;
var statearr_28951_29037 = state_28943__$1;
(statearr_28951_29037[(2)] = null);

(statearr_28951_29037[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (1))){
var inst_28795 = (state_28943[(13)]);
var inst_28792 = before_jsload.call(null,files);
var inst_28793 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28794 = (function (){return ((function (inst_28795,inst_28792,inst_28793,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28536_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28536_SHARP_);
});
;})(inst_28795,inst_28792,inst_28793,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28795__$1 = cljs.core.filter.call(null,inst_28794,files);
var inst_28796 = cljs.core.not_empty.call(null,inst_28795__$1);
var state_28943__$1 = (function (){var statearr_28952 = state_28943;
(statearr_28952[(14)] = inst_28793);

(statearr_28952[(13)] = inst_28795__$1);

(statearr_28952[(15)] = inst_28792);

return statearr_28952;
})();
if(cljs.core.truth_(inst_28796)){
var statearr_28953_29038 = state_28943__$1;
(statearr_28953_29038[(1)] = (2));

} else {
var statearr_28954_29039 = state_28943__$1;
(statearr_28954_29039[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (24))){
var state_28943__$1 = state_28943;
var statearr_28955_29040 = state_28943__$1;
(statearr_28955_29040[(2)] = null);

(statearr_28955_29040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (39))){
var inst_28896 = (state_28943[(16)]);
var state_28943__$1 = state_28943;
var statearr_28956_29041 = state_28943__$1;
(statearr_28956_29041[(2)] = inst_28896);

(statearr_28956_29041[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (46))){
var inst_28938 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28957_29042 = state_28943__$1;
(statearr_28957_29042[(2)] = inst_28938);

(statearr_28957_29042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var inst_28840 = (state_28943[(2)]);
var inst_28841 = cljs.core.List.EMPTY;
var inst_28842 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28841);
var inst_28843 = (function (){return ((function (inst_28840,inst_28841,inst_28842,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28537_SHARP_){
var and__18730__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28537_SHARP_);
if(cljs.core.truth_(and__18730__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28537_SHARP_));
} else {
return and__18730__auto__;
}
});
;})(inst_28840,inst_28841,inst_28842,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28844 = cljs.core.filter.call(null,inst_28843,files);
var inst_28845 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28846 = cljs.core.concat.call(null,inst_28844,inst_28845);
var state_28943__$1 = (function (){var statearr_28958 = state_28943;
(statearr_28958[(17)] = inst_28842);

(statearr_28958[(18)] = inst_28840);

(statearr_28958[(12)] = inst_28846);

return statearr_28958;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28959_29043 = state_28943__$1;
(statearr_28959_29043[(1)] = (16));

} else {
var statearr_28960_29044 = state_28943__$1;
(statearr_28960_29044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (15))){
var inst_28830 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28961_29045 = state_28943__$1;
(statearr_28961_29045[(2)] = inst_28830);

(statearr_28961_29045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (21))){
var inst_28856 = (state_28943[(19)]);
var inst_28856__$1 = (state_28943[(2)]);
var inst_28857 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28856__$1);
var state_28943__$1 = (function (){var statearr_28962 = state_28943;
(statearr_28962[(19)] = inst_28856__$1);

return statearr_28962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(22),inst_28857);
} else {
if((state_val_28944 === (31))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (32))){
var inst_28896 = (state_28943[(16)]);
var inst_28901 = inst_28896.cljs$lang$protocol_mask$partition0$;
var inst_28902 = (inst_28901 & (64));
var inst_28903 = inst_28896.cljs$core$ISeq$;
var inst_28904 = (cljs.core.PROTOCOL_SENTINEL === inst_28903);
var inst_28905 = (inst_28902) || (inst_28904);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28905)){
var statearr_28963_29046 = state_28943__$1;
(statearr_28963_29046[(1)] = (35));

} else {
var statearr_28964_29047 = state_28943__$1;
(statearr_28964_29047[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (40))){
var inst_28918 = (state_28943[(20)]);
var inst_28917 = (state_28943[(2)]);
var inst_28918__$1 = cljs.core.get.call(null,inst_28917,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28919 = cljs.core.get.call(null,inst_28917,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28920 = cljs.core.not_empty.call(null,inst_28918__$1);
var state_28943__$1 = (function (){var statearr_28965 = state_28943;
(statearr_28965[(21)] = inst_28919);

(statearr_28965[(20)] = inst_28918__$1);

return statearr_28965;
})();
if(cljs.core.truth_(inst_28920)){
var statearr_28966_29048 = state_28943__$1;
(statearr_28966_29048[(1)] = (41));

} else {
var statearr_28967_29049 = state_28943__$1;
(statearr_28967_29049[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (33))){
var state_28943__$1 = state_28943;
var statearr_28968_29050 = state_28943__$1;
(statearr_28968_29050[(2)] = false);

(statearr_28968_29050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (13))){
var inst_28816 = (state_28943[(22)]);
var inst_28820 = cljs.core.chunk_first.call(null,inst_28816);
var inst_28821 = cljs.core.chunk_rest.call(null,inst_28816);
var inst_28822 = cljs.core.count.call(null,inst_28820);
var inst_28803 = inst_28821;
var inst_28804 = inst_28820;
var inst_28805 = inst_28822;
var inst_28806 = (0);
var state_28943__$1 = (function (){var statearr_28969 = state_28943;
(statearr_28969[(7)] = inst_28804);

(statearr_28969[(8)] = inst_28805);

(statearr_28969[(9)] = inst_28803);

(statearr_28969[(10)] = inst_28806);

return statearr_28969;
})();
var statearr_28970_29051 = state_28943__$1;
(statearr_28970_29051[(2)] = null);

(statearr_28970_29051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (22))){
var inst_28864 = (state_28943[(23)]);
var inst_28859 = (state_28943[(24)]);
var inst_28856 = (state_28943[(19)]);
var inst_28860 = (state_28943[(25)]);
var inst_28859__$1 = (state_28943[(2)]);
var inst_28860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28859__$1);
var inst_28861 = (function (){var all_files = inst_28856;
var res_SINGLEQUOTE_ = inst_28859__$1;
var res = inst_28860__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28864,inst_28859,inst_28856,inst_28860,inst_28859__$1,inst_28860__$1,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28538_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28538_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28864,inst_28859,inst_28856,inst_28860,inst_28859__$1,inst_28860__$1,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28862 = cljs.core.filter.call(null,inst_28861,inst_28859__$1);
var inst_28863 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28864__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28863);
var inst_28865 = cljs.core.not_empty.call(null,inst_28864__$1);
var state_28943__$1 = (function (){var statearr_28971 = state_28943;
(statearr_28971[(23)] = inst_28864__$1);

(statearr_28971[(26)] = inst_28862);

(statearr_28971[(24)] = inst_28859__$1);

(statearr_28971[(25)] = inst_28860__$1);

return statearr_28971;
})();
if(cljs.core.truth_(inst_28865)){
var statearr_28972_29052 = state_28943__$1;
(statearr_28972_29052[(1)] = (23));

} else {
var statearr_28973_29053 = state_28943__$1;
(statearr_28973_29053[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (36))){
var state_28943__$1 = state_28943;
var statearr_28974_29054 = state_28943__$1;
(statearr_28974_29054[(2)] = false);

(statearr_28974_29054[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (41))){
var inst_28918 = (state_28943[(20)]);
var inst_28922 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28923 = cljs.core.map.call(null,inst_28922,inst_28918);
var inst_28924 = cljs.core.pr_str.call(null,inst_28923);
var inst_28925 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28924)].join('');
var inst_28926 = figwheel.client.utils.log.call(null,inst_28925);
var state_28943__$1 = state_28943;
var statearr_28975_29055 = state_28943__$1;
(statearr_28975_29055[(2)] = inst_28926);

(statearr_28975_29055[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (43))){
var inst_28919 = (state_28943[(21)]);
var inst_28929 = (state_28943[(2)]);
var inst_28930 = cljs.core.not_empty.call(null,inst_28919);
var state_28943__$1 = (function (){var statearr_28976 = state_28943;
(statearr_28976[(27)] = inst_28929);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28930)){
var statearr_28977_29056 = state_28943__$1;
(statearr_28977_29056[(1)] = (44));

} else {
var statearr_28978_29057 = state_28943__$1;
(statearr_28978_29057[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (29))){
var inst_28864 = (state_28943[(23)]);
var inst_28862 = (state_28943[(26)]);
var inst_28896 = (state_28943[(16)]);
var inst_28859 = (state_28943[(24)]);
var inst_28856 = (state_28943[(19)]);
var inst_28860 = (state_28943[(25)]);
var inst_28892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28895 = (function (){var all_files = inst_28856;
var res_SINGLEQUOTE_ = inst_28859;
var res = inst_28860;
var files_not_loaded = inst_28862;
var dependencies_that_loaded = inst_28864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28896,inst_28859,inst_28856,inst_28860,inst_28892,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28894){
var map__28979 = p__28894;
var map__28979__$1 = ((((!((map__28979 == null)))?((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var namespace = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28896,inst_28859,inst_28856,inst_28860,inst_28892,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28896__$1 = cljs.core.group_by.call(null,inst_28895,inst_28862);
var inst_28898 = (inst_28896__$1 == null);
var inst_28899 = cljs.core.not.call(null,inst_28898);
var state_28943__$1 = (function (){var statearr_28981 = state_28943;
(statearr_28981[(16)] = inst_28896__$1);

(statearr_28981[(28)] = inst_28892);

return statearr_28981;
})();
if(inst_28899){
var statearr_28982_29058 = state_28943__$1;
(statearr_28982_29058[(1)] = (32));

} else {
var statearr_28983_29059 = state_28943__$1;
(statearr_28983_29059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (44))){
var inst_28919 = (state_28943[(21)]);
var inst_28932 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28919);
var inst_28933 = cljs.core.pr_str.call(null,inst_28932);
var inst_28934 = [cljs.core.str("not required: "),cljs.core.str(inst_28933)].join('');
var inst_28935 = figwheel.client.utils.log.call(null,inst_28934);
var state_28943__$1 = state_28943;
var statearr_28984_29060 = state_28943__$1;
(statearr_28984_29060[(2)] = inst_28935);

(statearr_28984_29060[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (6))){
var inst_28837 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28985_29061 = state_28943__$1;
(statearr_28985_29061[(2)] = inst_28837);

(statearr_28985_29061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (28))){
var inst_28862 = (state_28943[(26)]);
var inst_28889 = (state_28943[(2)]);
var inst_28890 = cljs.core.not_empty.call(null,inst_28862);
var state_28943__$1 = (function (){var statearr_28986 = state_28943;
(statearr_28986[(29)] = inst_28889);

return statearr_28986;
})();
if(cljs.core.truth_(inst_28890)){
var statearr_28987_29062 = state_28943__$1;
(statearr_28987_29062[(1)] = (29));

} else {
var statearr_28988_29063 = state_28943__$1;
(statearr_28988_29063[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (25))){
var inst_28860 = (state_28943[(25)]);
var inst_28876 = (state_28943[(2)]);
var inst_28877 = cljs.core.not_empty.call(null,inst_28860);
var state_28943__$1 = (function (){var statearr_28989 = state_28943;
(statearr_28989[(30)] = inst_28876);

return statearr_28989;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28990_29064 = state_28943__$1;
(statearr_28990_29064[(1)] = (26));

} else {
var statearr_28991_29065 = state_28943__$1;
(statearr_28991_29065[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (34))){
var inst_28912 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28912)){
var statearr_28992_29066 = state_28943__$1;
(statearr_28992_29066[(1)] = (38));

} else {
var statearr_28993_29067 = state_28943__$1;
(statearr_28993_29067[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (17))){
var state_28943__$1 = state_28943;
var statearr_28994_29068 = state_28943__$1;
(statearr_28994_29068[(2)] = recompile_dependents);

(statearr_28994_29068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (3))){
var state_28943__$1 = state_28943;
var statearr_28995_29069 = state_28943__$1;
(statearr_28995_29069[(2)] = null);

(statearr_28995_29069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (12))){
var inst_28833 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28996_29070 = state_28943__$1;
(statearr_28996_29070[(2)] = inst_28833);

(statearr_28996_29070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (2))){
var inst_28795 = (state_28943[(13)]);
var inst_28802 = cljs.core.seq.call(null,inst_28795);
var inst_28803 = inst_28802;
var inst_28804 = null;
var inst_28805 = (0);
var inst_28806 = (0);
var state_28943__$1 = (function (){var statearr_28997 = state_28943;
(statearr_28997[(7)] = inst_28804);

(statearr_28997[(8)] = inst_28805);

(statearr_28997[(9)] = inst_28803);

(statearr_28997[(10)] = inst_28806);

return statearr_28997;
})();
var statearr_28998_29071 = state_28943__$1;
(statearr_28998_29071[(2)] = null);

(statearr_28998_29071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (23))){
var inst_28864 = (state_28943[(23)]);
var inst_28862 = (state_28943[(26)]);
var inst_28859 = (state_28943[(24)]);
var inst_28856 = (state_28943[(19)]);
var inst_28860 = (state_28943[(25)]);
var inst_28867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28869 = (function (){var all_files = inst_28856;
var res_SINGLEQUOTE_ = inst_28859;
var res = inst_28860;
var files_not_loaded = inst_28862;
var dependencies_that_loaded = inst_28864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28867,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28868){
var map__28999 = p__28868;
var map__28999__$1 = ((((!((map__28999 == null)))?((((map__28999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28999):map__28999);
var request_url = cljs.core.get.call(null,map__28999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28867,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28870 = cljs.core.reverse.call(null,inst_28864);
var inst_28871 = cljs.core.map.call(null,inst_28869,inst_28870);
var inst_28872 = cljs.core.pr_str.call(null,inst_28871);
var inst_28873 = figwheel.client.utils.log.call(null,inst_28872);
var state_28943__$1 = (function (){var statearr_29001 = state_28943;
(statearr_29001[(31)] = inst_28867);

return statearr_29001;
})();
var statearr_29002_29072 = state_28943__$1;
(statearr_29002_29072[(2)] = inst_28873);

(statearr_29002_29072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (35))){
var state_28943__$1 = state_28943;
var statearr_29003_29073 = state_28943__$1;
(statearr_29003_29073[(2)] = true);

(statearr_29003_29073[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (19))){
var inst_28846 = (state_28943[(12)]);
var inst_28852 = figwheel.client.file_reloading.expand_files.call(null,inst_28846);
var state_28943__$1 = state_28943;
var statearr_29004_29074 = state_28943__$1;
(statearr_29004_29074[(2)] = inst_28852);

(statearr_29004_29074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (11))){
var state_28943__$1 = state_28943;
var statearr_29005_29075 = state_28943__$1;
(statearr_29005_29075[(2)] = null);

(statearr_29005_29075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (9))){
var inst_28835 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_29006_29076 = state_28943__$1;
(statearr_29006_29076[(2)] = inst_28835);

(statearr_29006_29076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var inst_28805 = (state_28943[(8)]);
var inst_28806 = (state_28943[(10)]);
var inst_28808 = (inst_28806 < inst_28805);
var inst_28809 = inst_28808;
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28809)){
var statearr_29007_29077 = state_28943__$1;
(statearr_29007_29077[(1)] = (7));

} else {
var statearr_29008_29078 = state_28943__$1;
(statearr_29008_29078[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (14))){
var inst_28816 = (state_28943[(22)]);
var inst_28825 = cljs.core.first.call(null,inst_28816);
var inst_28826 = figwheel.client.file_reloading.eval_body.call(null,inst_28825,opts);
var inst_28827 = cljs.core.next.call(null,inst_28816);
var inst_28803 = inst_28827;
var inst_28804 = null;
var inst_28805 = (0);
var inst_28806 = (0);
var state_28943__$1 = (function (){var statearr_29009 = state_28943;
(statearr_29009[(32)] = inst_28826);

(statearr_29009[(7)] = inst_28804);

(statearr_29009[(8)] = inst_28805);

(statearr_29009[(9)] = inst_28803);

(statearr_29009[(10)] = inst_28806);

return statearr_29009;
})();
var statearr_29010_29079 = state_28943__$1;
(statearr_29010_29079[(2)] = null);

(statearr_29010_29079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (45))){
var state_28943__$1 = state_28943;
var statearr_29011_29080 = state_28943__$1;
(statearr_29011_29080[(2)] = null);

(statearr_29011_29080[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (26))){
var inst_28864 = (state_28943[(23)]);
var inst_28862 = (state_28943[(26)]);
var inst_28859 = (state_28943[(24)]);
var inst_28856 = (state_28943[(19)]);
var inst_28860 = (state_28943[(25)]);
var inst_28879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28881 = (function (){var all_files = inst_28856;
var res_SINGLEQUOTE_ = inst_28859;
var res = inst_28860;
var files_not_loaded = inst_28862;
var dependencies_that_loaded = inst_28864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28879,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28880){
var map__29012 = p__28880;
var map__29012__$1 = ((((!((map__29012 == null)))?((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var namespace = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28879,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28882 = cljs.core.map.call(null,inst_28881,inst_28860);
var inst_28883 = cljs.core.pr_str.call(null,inst_28882);
var inst_28884 = figwheel.client.utils.log.call(null,inst_28883);
var inst_28885 = (function (){var all_files = inst_28856;
var res_SINGLEQUOTE_ = inst_28859;
var res = inst_28860;
var files_not_loaded = inst_28862;
var dependencies_that_loaded = inst_28864;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28879,inst_28881,inst_28882,inst_28883,inst_28884,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28864,inst_28862,inst_28859,inst_28856,inst_28860,inst_28879,inst_28881,inst_28882,inst_28883,inst_28884,state_val_28944,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28886 = setTimeout(inst_28885,(10));
var state_28943__$1 = (function (){var statearr_29014 = state_28943;
(statearr_29014[(33)] = inst_28884);

(statearr_29014[(34)] = inst_28879);

return statearr_29014;
})();
var statearr_29015_29081 = state_28943__$1;
(statearr_29015_29081[(2)] = inst_28886);

(statearr_29015_29081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (16))){
var state_28943__$1 = state_28943;
var statearr_29016_29082 = state_28943__$1;
(statearr_29016_29082[(2)] = reload_dependents);

(statearr_29016_29082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (38))){
var inst_28896 = (state_28943[(16)]);
var inst_28914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28896);
var state_28943__$1 = state_28943;
var statearr_29017_29083 = state_28943__$1;
(statearr_29017_29083[(2)] = inst_28914);

(statearr_29017_29083[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (30))){
var state_28943__$1 = state_28943;
var statearr_29018_29084 = state_28943__$1;
(statearr_29018_29084[(2)] = null);

(statearr_29018_29084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (10))){
var inst_28816 = (state_28943[(22)]);
var inst_28818 = cljs.core.chunked_seq_QMARK_.call(null,inst_28816);
var state_28943__$1 = state_28943;
if(inst_28818){
var statearr_29019_29085 = state_28943__$1;
(statearr_29019_29085[(1)] = (13));

} else {
var statearr_29020_29086 = state_28943__$1;
(statearr_29020_29086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (18))){
var inst_28850 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28850)){
var statearr_29021_29087 = state_28943__$1;
(statearr_29021_29087[(1)] = (19));

} else {
var statearr_29022_29088 = state_28943__$1;
(statearr_29022_29088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (42))){
var state_28943__$1 = state_28943;
var statearr_29023_29089 = state_28943__$1;
(statearr_29023_29089[(2)] = null);

(statearr_29023_29089[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (37))){
var inst_28909 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_29024_29090 = state_28943__$1;
(statearr_29024_29090[(2)] = inst_28909);

(statearr_29024_29090[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (8))){
var inst_28816 = (state_28943[(22)]);
var inst_28803 = (state_28943[(9)]);
var inst_28816__$1 = cljs.core.seq.call(null,inst_28803);
var state_28943__$1 = (function (){var statearr_29025 = state_28943;
(statearr_29025[(22)] = inst_28816__$1);

return statearr_29025;
})();
if(inst_28816__$1){
var statearr_29026_29091 = state_28943__$1;
(statearr_29026_29091[(1)] = (10));

} else {
var statearr_29027_29092 = state_28943__$1;
(statearr_29027_29092[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21092__auto__,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____0 = (function (){
var statearr_29031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29031[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__);

(statearr_29031[(1)] = (1));

return statearr_29031;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____1 = (function (state_28943){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e29032){if((e29032 instanceof Object)){
var ex__21096__auto__ = e29032;
var statearr_29033_29093 = state_28943;
(statearr_29033_29093[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29094 = state_28943;
state_28943 = G__29094;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21109__auto__ = (function (){var statearr_29034 = f__21108__auto__.call(null);
(statearr_29034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,map__28788,map__28788__$1,opts,before_jsload,on_jsload,reload_dependents,map__28789,map__28789__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21107__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29097,link){
var map__29100 = p__29097;
var map__29100__$1 = ((((!((map__29100 == null)))?((((map__29100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var file = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29100,map__29100__$1,file){
return (function (p1__29095_SHARP_,p2__29096_SHARP_){
if(cljs.core._EQ_.call(null,p1__29095_SHARP_,p2__29096_SHARP_)){
return p1__29095_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29100,map__29100__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29106){
var map__29107 = p__29106;
var map__29107__$1 = ((((!((map__29107 == null)))?((((map__29107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29107):map__29107);
var match_length = cljs.core.get.call(null,map__29107__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29107__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29102_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29102_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29109 = [];
var len__19850__auto___29112 = arguments.length;
var i__19851__auto___29113 = (0);
while(true){
if((i__19851__auto___29113 < len__19850__auto___29112)){
args29109.push((arguments[i__19851__auto___29113]));

var G__29114 = (i__19851__auto___29113 + (1));
i__19851__auto___29113 = G__29114;
continue;
} else {
}
break;
}

var G__29111 = args29109.length;
switch (G__29111) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29109.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29116_SHARP_,p2__29117_SHARP_){
return cljs.core.assoc.call(null,p1__29116_SHARP_,cljs.core.get.call(null,p2__29117_SHARP_,key),p2__29117_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29118){
var map__29121 = p__29118;
var map__29121__$1 = ((((!((map__29121 == null)))?((((map__29121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);
var f_data = map__29121__$1;
var file = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29123,files_msg){
var map__29130 = p__29123;
var map__29130__$1 = ((((!((map__29130 == null)))?((((map__29130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29130):map__29130);
var opts = map__29130__$1;
var on_cssload = cljs.core.get.call(null,map__29130__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29132_29136 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29133_29137 = null;
var count__29134_29138 = (0);
var i__29135_29139 = (0);
while(true){
if((i__29135_29139 < count__29134_29138)){
var f_29140 = cljs.core._nth.call(null,chunk__29133_29137,i__29135_29139);
figwheel.client.file_reloading.reload_css_file.call(null,f_29140);

var G__29141 = seq__29132_29136;
var G__29142 = chunk__29133_29137;
var G__29143 = count__29134_29138;
var G__29144 = (i__29135_29139 + (1));
seq__29132_29136 = G__29141;
chunk__29133_29137 = G__29142;
count__29134_29138 = G__29143;
i__29135_29139 = G__29144;
continue;
} else {
var temp__4657__auto___29145 = cljs.core.seq.call(null,seq__29132_29136);
if(temp__4657__auto___29145){
var seq__29132_29146__$1 = temp__4657__auto___29145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29132_29146__$1)){
var c__19556__auto___29147 = cljs.core.chunk_first.call(null,seq__29132_29146__$1);
var G__29148 = cljs.core.chunk_rest.call(null,seq__29132_29146__$1);
var G__29149 = c__19556__auto___29147;
var G__29150 = cljs.core.count.call(null,c__19556__auto___29147);
var G__29151 = (0);
seq__29132_29136 = G__29148;
chunk__29133_29137 = G__29149;
count__29134_29138 = G__29150;
i__29135_29139 = G__29151;
continue;
} else {
var f_29152 = cljs.core.first.call(null,seq__29132_29146__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29152);

var G__29153 = cljs.core.next.call(null,seq__29132_29146__$1);
var G__29154 = null;
var G__29155 = (0);
var G__29156 = (0);
seq__29132_29136 = G__29153;
chunk__29133_29137 = G__29154;
count__29134_29138 = G__29155;
i__29135_29139 = G__29156;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29130,map__29130__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29130,map__29130__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1492189017979