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
var or__18756__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18756__auto__){
return or__18756__auto__;
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
var or__18756__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28054_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28054_SHARP_));
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
var seq__28059 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28060 = null;
var count__28061 = (0);
var i__28062 = (0);
while(true){
if((i__28062 < count__28061)){
var n = cljs.core._nth.call(null,chunk__28060,i__28062);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28063 = seq__28059;
var G__28064 = chunk__28060;
var G__28065 = count__28061;
var G__28066 = (i__28062 + (1));
seq__28059 = G__28063;
chunk__28060 = G__28064;
count__28061 = G__28065;
i__28062 = G__28066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28059);
if(temp__4657__auto__){
var seq__28059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28059__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__28059__$1);
var G__28067 = cljs.core.chunk_rest.call(null,seq__28059__$1);
var G__28068 = c__19570__auto__;
var G__28069 = cljs.core.count.call(null,c__19570__auto__);
var G__28070 = (0);
seq__28059 = G__28067;
chunk__28060 = G__28068;
count__28061 = G__28069;
i__28062 = G__28070;
continue;
} else {
var n = cljs.core.first.call(null,seq__28059__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28071 = cljs.core.next.call(null,seq__28059__$1);
var G__28072 = null;
var G__28073 = (0);
var G__28074 = (0);
seq__28059 = G__28071;
chunk__28060 = G__28072;
count__28061 = G__28073;
i__28062 = G__28074;
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

var seq__28125_28136 = cljs.core.seq.call(null,deps);
var chunk__28126_28137 = null;
var count__28127_28138 = (0);
var i__28128_28139 = (0);
while(true){
if((i__28128_28139 < count__28127_28138)){
var dep_28140 = cljs.core._nth.call(null,chunk__28126_28137,i__28128_28139);
topo_sort_helper_STAR_.call(null,dep_28140,(depth + (1)),state);

var G__28141 = seq__28125_28136;
var G__28142 = chunk__28126_28137;
var G__28143 = count__28127_28138;
var G__28144 = (i__28128_28139 + (1));
seq__28125_28136 = G__28141;
chunk__28126_28137 = G__28142;
count__28127_28138 = G__28143;
i__28128_28139 = G__28144;
continue;
} else {
var temp__4657__auto___28145 = cljs.core.seq.call(null,seq__28125_28136);
if(temp__4657__auto___28145){
var seq__28125_28146__$1 = temp__4657__auto___28145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28125_28146__$1)){
var c__19570__auto___28147 = cljs.core.chunk_first.call(null,seq__28125_28146__$1);
var G__28148 = cljs.core.chunk_rest.call(null,seq__28125_28146__$1);
var G__28149 = c__19570__auto___28147;
var G__28150 = cljs.core.count.call(null,c__19570__auto___28147);
var G__28151 = (0);
seq__28125_28136 = G__28148;
chunk__28126_28137 = G__28149;
count__28127_28138 = G__28150;
i__28128_28139 = G__28151;
continue;
} else {
var dep_28152 = cljs.core.first.call(null,seq__28125_28146__$1);
topo_sort_helper_STAR_.call(null,dep_28152,(depth + (1)),state);

var G__28153 = cljs.core.next.call(null,seq__28125_28146__$1);
var G__28154 = null;
var G__28155 = (0);
var G__28156 = (0);
seq__28125_28136 = G__28153;
chunk__28126_28137 = G__28154;
count__28127_28138 = G__28155;
i__28128_28139 = G__28156;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28129){
var vec__28133 = p__28129;
var seq__28134 = cljs.core.seq.call(null,vec__28133);
var first__28135 = cljs.core.first.call(null,seq__28134);
var seq__28134__$1 = cljs.core.next.call(null,seq__28134);
var x = first__28135;
var xs = seq__28134__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28133,seq__28134,first__28135,seq__28134__$1,x,xs,get_deps__$1){
return (function (p1__28075_SHARP_){
return clojure.set.difference.call(null,p1__28075_SHARP_,x);
});})(vec__28133,seq__28134,first__28135,seq__28134__$1,x,xs,get_deps__$1))
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
var seq__28169 = cljs.core.seq.call(null,provides);
var chunk__28170 = null;
var count__28171 = (0);
var i__28172 = (0);
while(true){
if((i__28172 < count__28171)){
var prov = cljs.core._nth.call(null,chunk__28170,i__28172);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28173_28181 = cljs.core.seq.call(null,requires);
var chunk__28174_28182 = null;
var count__28175_28183 = (0);
var i__28176_28184 = (0);
while(true){
if((i__28176_28184 < count__28175_28183)){
var req_28185 = cljs.core._nth.call(null,chunk__28174_28182,i__28176_28184);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28185,prov);

var G__28186 = seq__28173_28181;
var G__28187 = chunk__28174_28182;
var G__28188 = count__28175_28183;
var G__28189 = (i__28176_28184 + (1));
seq__28173_28181 = G__28186;
chunk__28174_28182 = G__28187;
count__28175_28183 = G__28188;
i__28176_28184 = G__28189;
continue;
} else {
var temp__4657__auto___28190 = cljs.core.seq.call(null,seq__28173_28181);
if(temp__4657__auto___28190){
var seq__28173_28191__$1 = temp__4657__auto___28190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28173_28191__$1)){
var c__19570__auto___28192 = cljs.core.chunk_first.call(null,seq__28173_28191__$1);
var G__28193 = cljs.core.chunk_rest.call(null,seq__28173_28191__$1);
var G__28194 = c__19570__auto___28192;
var G__28195 = cljs.core.count.call(null,c__19570__auto___28192);
var G__28196 = (0);
seq__28173_28181 = G__28193;
chunk__28174_28182 = G__28194;
count__28175_28183 = G__28195;
i__28176_28184 = G__28196;
continue;
} else {
var req_28197 = cljs.core.first.call(null,seq__28173_28191__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28197,prov);

var G__28198 = cljs.core.next.call(null,seq__28173_28191__$1);
var G__28199 = null;
var G__28200 = (0);
var G__28201 = (0);
seq__28173_28181 = G__28198;
chunk__28174_28182 = G__28199;
count__28175_28183 = G__28200;
i__28176_28184 = G__28201;
continue;
}
} else {
}
}
break;
}

var G__28202 = seq__28169;
var G__28203 = chunk__28170;
var G__28204 = count__28171;
var G__28205 = (i__28172 + (1));
seq__28169 = G__28202;
chunk__28170 = G__28203;
count__28171 = G__28204;
i__28172 = G__28205;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28169);
if(temp__4657__auto__){
var seq__28169__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28169__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__28169__$1);
var G__28206 = cljs.core.chunk_rest.call(null,seq__28169__$1);
var G__28207 = c__19570__auto__;
var G__28208 = cljs.core.count.call(null,c__19570__auto__);
var G__28209 = (0);
seq__28169 = G__28206;
chunk__28170 = G__28207;
count__28171 = G__28208;
i__28172 = G__28209;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28169__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28177_28210 = cljs.core.seq.call(null,requires);
var chunk__28178_28211 = null;
var count__28179_28212 = (0);
var i__28180_28213 = (0);
while(true){
if((i__28180_28213 < count__28179_28212)){
var req_28214 = cljs.core._nth.call(null,chunk__28178_28211,i__28180_28213);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28214,prov);

var G__28215 = seq__28177_28210;
var G__28216 = chunk__28178_28211;
var G__28217 = count__28179_28212;
var G__28218 = (i__28180_28213 + (1));
seq__28177_28210 = G__28215;
chunk__28178_28211 = G__28216;
count__28179_28212 = G__28217;
i__28180_28213 = G__28218;
continue;
} else {
var temp__4657__auto___28219__$1 = cljs.core.seq.call(null,seq__28177_28210);
if(temp__4657__auto___28219__$1){
var seq__28177_28220__$1 = temp__4657__auto___28219__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28177_28220__$1)){
var c__19570__auto___28221 = cljs.core.chunk_first.call(null,seq__28177_28220__$1);
var G__28222 = cljs.core.chunk_rest.call(null,seq__28177_28220__$1);
var G__28223 = c__19570__auto___28221;
var G__28224 = cljs.core.count.call(null,c__19570__auto___28221);
var G__28225 = (0);
seq__28177_28210 = G__28222;
chunk__28178_28211 = G__28223;
count__28179_28212 = G__28224;
i__28180_28213 = G__28225;
continue;
} else {
var req_28226 = cljs.core.first.call(null,seq__28177_28220__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28226,prov);

var G__28227 = cljs.core.next.call(null,seq__28177_28220__$1);
var G__28228 = null;
var G__28229 = (0);
var G__28230 = (0);
seq__28177_28210 = G__28227;
chunk__28178_28211 = G__28228;
count__28179_28212 = G__28229;
i__28180_28213 = G__28230;
continue;
}
} else {
}
}
break;
}

var G__28231 = cljs.core.next.call(null,seq__28169__$1);
var G__28232 = null;
var G__28233 = (0);
var G__28234 = (0);
seq__28169 = G__28231;
chunk__28170 = G__28232;
count__28171 = G__28233;
i__28172 = G__28234;
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
var seq__28239_28243 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28240_28244 = null;
var count__28241_28245 = (0);
var i__28242_28246 = (0);
while(true){
if((i__28242_28246 < count__28241_28245)){
var ns_28247 = cljs.core._nth.call(null,chunk__28240_28244,i__28242_28246);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28247);

var G__28248 = seq__28239_28243;
var G__28249 = chunk__28240_28244;
var G__28250 = count__28241_28245;
var G__28251 = (i__28242_28246 + (1));
seq__28239_28243 = G__28248;
chunk__28240_28244 = G__28249;
count__28241_28245 = G__28250;
i__28242_28246 = G__28251;
continue;
} else {
var temp__4657__auto___28252 = cljs.core.seq.call(null,seq__28239_28243);
if(temp__4657__auto___28252){
var seq__28239_28253__$1 = temp__4657__auto___28252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28239_28253__$1)){
var c__19570__auto___28254 = cljs.core.chunk_first.call(null,seq__28239_28253__$1);
var G__28255 = cljs.core.chunk_rest.call(null,seq__28239_28253__$1);
var G__28256 = c__19570__auto___28254;
var G__28257 = cljs.core.count.call(null,c__19570__auto___28254);
var G__28258 = (0);
seq__28239_28243 = G__28255;
chunk__28240_28244 = G__28256;
count__28241_28245 = G__28257;
i__28242_28246 = G__28258;
continue;
} else {
var ns_28259 = cljs.core.first.call(null,seq__28239_28253__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28259);

var G__28260 = cljs.core.next.call(null,seq__28239_28253__$1);
var G__28261 = null;
var G__28262 = (0);
var G__28263 = (0);
seq__28239_28243 = G__28260;
chunk__28240_28244 = G__28261;
count__28241_28245 = G__28262;
i__28242_28246 = G__28263;
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
goog.require_figwheel_backup_ = (function (){var or__18756__auto__ = goog.require__;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
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
var G__28264__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28265__i = 0, G__28265__a = new Array(arguments.length -  0);
while (G__28265__i < G__28265__a.length) {G__28265__a[G__28265__i] = arguments[G__28265__i + 0]; ++G__28265__i;}
  args = new cljs.core.IndexedSeq(G__28265__a,0);
} 
return G__28264__delegate.call(this,args);};
G__28264.cljs$lang$maxFixedArity = 0;
G__28264.cljs$lang$applyTo = (function (arglist__28266){
var args = cljs.core.seq(arglist__28266);
return G__28264__delegate(args);
});
G__28264.cljs$core$IFn$_invoke$arity$variadic = G__28264__delegate;
return G__28264;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28268 = cljs.core._EQ_;
var expr__28269 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28268.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28269))){
var path_parts = ((function (pred__28268,expr__28269){
return (function (p1__28267_SHARP_){
return clojure.string.split.call(null,p1__28267_SHARP_,/[\/\\]/);
});})(pred__28268,expr__28269))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28268,expr__28269){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28271){if((e28271 instanceof Error)){
var e = e28271;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28271;

}
}})());
});
;})(path_parts,sep,root,pred__28268,expr__28269))
} else {
if(cljs.core.truth_(pred__28268.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28269))){
return ((function (pred__28268,expr__28269){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28268,expr__28269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28268,expr__28269))
);

return deferred.addErrback(((function (deferred,pred__28268,expr__28269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28268,expr__28269))
);
});
;})(pred__28268,expr__28269))
} else {
return ((function (pred__28268,expr__28269){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28268,expr__28269))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28272,callback){
var map__28275 = p__28272;
var map__28275__$1 = ((((!((map__28275 == null)))?((((map__28275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28275):map__28275);
var file_msg = map__28275__$1;
var request_url = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28275,map__28275__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28275,map__28275__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_28299){
var state_val_28300 = (state_28299[(1)]);
if((state_val_28300 === (7))){
var inst_28295 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28301_28321 = state_28299__$1;
(statearr_28301_28321[(2)] = inst_28295);

(statearr_28301_28321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (1))){
var state_28299__$1 = state_28299;
var statearr_28302_28322 = state_28299__$1;
(statearr_28302_28322[(2)] = null);

(statearr_28302_28322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (4))){
var inst_28279 = (state_28299[(7)]);
var inst_28279__$1 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28303 = state_28299;
(statearr_28303[(7)] = inst_28279__$1);

return statearr_28303;
})();
if(cljs.core.truth_(inst_28279__$1)){
var statearr_28304_28323 = state_28299__$1;
(statearr_28304_28323[(1)] = (5));

} else {
var statearr_28305_28324 = state_28299__$1;
(statearr_28305_28324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (6))){
var state_28299__$1 = state_28299;
var statearr_28306_28325 = state_28299__$1;
(statearr_28306_28325[(2)] = null);

(statearr_28306_28325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (3))){
var inst_28297 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28299__$1,inst_28297);
} else {
if((state_val_28300 === (2))){
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28299__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28300 === (11))){
var inst_28291 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28307 = state_28299;
(statearr_28307[(8)] = inst_28291);

return statearr_28307;
})();
var statearr_28308_28326 = state_28299__$1;
(statearr_28308_28326[(2)] = null);

(statearr_28308_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (9))){
var inst_28285 = (state_28299[(9)]);
var inst_28283 = (state_28299[(10)]);
var inst_28287 = inst_28285.call(null,inst_28283);
var state_28299__$1 = state_28299;
var statearr_28309_28327 = state_28299__$1;
(statearr_28309_28327[(2)] = inst_28287);

(statearr_28309_28327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (5))){
var inst_28279 = (state_28299[(7)]);
var inst_28281 = figwheel.client.file_reloading.blocking_load.call(null,inst_28279);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28299__$1,(8),inst_28281);
} else {
if((state_val_28300 === (10))){
var inst_28283 = (state_28299[(10)]);
var inst_28289 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28283);
var state_28299__$1 = state_28299;
var statearr_28310_28328 = state_28299__$1;
(statearr_28310_28328[(2)] = inst_28289);

(statearr_28310_28328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (8))){
var inst_28285 = (state_28299[(9)]);
var inst_28279 = (state_28299[(7)]);
var inst_28283 = (state_28299[(2)]);
var inst_28284 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28285__$1 = cljs.core.get.call(null,inst_28284,inst_28279);
var state_28299__$1 = (function (){var statearr_28311 = state_28299;
(statearr_28311[(9)] = inst_28285__$1);

(statearr_28311[(10)] = inst_28283);

return statearr_28311;
})();
if(cljs.core.truth_(inst_28285__$1)){
var statearr_28312_28329 = state_28299__$1;
(statearr_28312_28329[(1)] = (9));

} else {
var statearr_28313_28330 = state_28299__$1;
(statearr_28313_28330[(1)] = (10));

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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21104__auto__ = null;
var figwheel$client$file_reloading$state_machine__21104__auto____0 = (function (){
var statearr_28317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28317[(0)] = figwheel$client$file_reloading$state_machine__21104__auto__);

(statearr_28317[(1)] = (1));

return statearr_28317;
});
var figwheel$client$file_reloading$state_machine__21104__auto____1 = (function (state_28299){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_28299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e28318){if((e28318 instanceof Object)){
var ex__21107__auto__ = e28318;
var statearr_28319_28331 = state_28299;
(statearr_28319_28331[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28332 = state_28299;
state_28299 = G__28332;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21104__auto__ = function(state_28299){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21104__auto____1.call(this,state_28299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21104__auto____0;
figwheel$client$file_reloading$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21104__auto____1;
return figwheel$client$file_reloading$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_28320 = f__21119__auto__.call(null);
(statearr_28320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_28320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28333,callback){
var map__28336 = p__28333;
var map__28336__$1 = ((((!((map__28336 == null)))?((((map__28336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
var file_msg = map__28336__$1;
var namespace = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28336,map__28336__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28336,map__28336__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28338){
var map__28341 = p__28338;
var map__28341__$1 = ((((!((map__28341 == null)))?((((map__28341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28341):map__28341);
var file_msg = map__28341__$1;
var namespace = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18744__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18744__auto__){
var or__18756__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
var or__18756__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18756__auto____$1)){
return or__18756__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18744__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28343,callback){
var map__28346 = p__28343;
var map__28346__$1 = ((((!((map__28346 == null)))?((((map__28346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28346):map__28346);
var file_msg = map__28346__$1;
var request_url = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21118__auto___28450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___28450,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___28450,out){
return (function (state_28432){
var state_val_28433 = (state_28432[(1)]);
if((state_val_28433 === (1))){
var inst_28406 = cljs.core.seq.call(null,files);
var inst_28407 = cljs.core.first.call(null,inst_28406);
var inst_28408 = cljs.core.next.call(null,inst_28406);
var inst_28409 = files;
var state_28432__$1 = (function (){var statearr_28434 = state_28432;
(statearr_28434[(7)] = inst_28409);

(statearr_28434[(8)] = inst_28407);

(statearr_28434[(9)] = inst_28408);

return statearr_28434;
})();
var statearr_28435_28451 = state_28432__$1;
(statearr_28435_28451[(2)] = null);

(statearr_28435_28451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (2))){
var inst_28409 = (state_28432[(7)]);
var inst_28415 = (state_28432[(10)]);
var inst_28414 = cljs.core.seq.call(null,inst_28409);
var inst_28415__$1 = cljs.core.first.call(null,inst_28414);
var inst_28416 = cljs.core.next.call(null,inst_28414);
var inst_28417 = (inst_28415__$1 == null);
var inst_28418 = cljs.core.not.call(null,inst_28417);
var state_28432__$1 = (function (){var statearr_28436 = state_28432;
(statearr_28436[(11)] = inst_28416);

(statearr_28436[(10)] = inst_28415__$1);

return statearr_28436;
})();
if(inst_28418){
var statearr_28437_28452 = state_28432__$1;
(statearr_28437_28452[(1)] = (4));

} else {
var statearr_28438_28453 = state_28432__$1;
(statearr_28438_28453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (3))){
var inst_28430 = (state_28432[(2)]);
var state_28432__$1 = state_28432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28432__$1,inst_28430);
} else {
if((state_val_28433 === (4))){
var inst_28415 = (state_28432[(10)]);
var inst_28420 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28415);
var state_28432__$1 = state_28432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28432__$1,(7),inst_28420);
} else {
if((state_val_28433 === (5))){
var inst_28426 = cljs.core.async.close_BANG_.call(null,out);
var state_28432__$1 = state_28432;
var statearr_28439_28454 = state_28432__$1;
(statearr_28439_28454[(2)] = inst_28426);

(statearr_28439_28454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (6))){
var inst_28428 = (state_28432[(2)]);
var state_28432__$1 = state_28432;
var statearr_28440_28455 = state_28432__$1;
(statearr_28440_28455[(2)] = inst_28428);

(statearr_28440_28455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (7))){
var inst_28416 = (state_28432[(11)]);
var inst_28422 = (state_28432[(2)]);
var inst_28423 = cljs.core.async.put_BANG_.call(null,out,inst_28422);
var inst_28409 = inst_28416;
var state_28432__$1 = (function (){var statearr_28441 = state_28432;
(statearr_28441[(7)] = inst_28409);

(statearr_28441[(12)] = inst_28423);

return statearr_28441;
})();
var statearr_28442_28456 = state_28432__$1;
(statearr_28442_28456[(2)] = null);

(statearr_28442_28456[(1)] = (2));


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
});})(c__21118__auto___28450,out))
;
return ((function (switch__21103__auto__,c__21118__auto___28450,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____1 = (function (state_28432){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_28432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object)){
var ex__21107__auto__ = e28447;
var statearr_28448_28457 = state_28432;
(statearr_28448_28457[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28458 = state_28432;
state_28432 = G__28458;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__ = function(state_28432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____1.call(this,state_28432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___28450,out))
})();
var state__21120__auto__ = (function (){var statearr_28449 = f__21119__auto__.call(null);
(statearr_28449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___28450);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___28450,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28459,opts){
var map__28463 = p__28459;
var map__28463__$1 = ((((!((map__28463 == null)))?((((map__28463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28463):map__28463);
var eval_body = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18744__auto__ = eval_body;
if(cljs.core.truth_(and__18744__auto__)){
return typeof eval_body === 'string';
} else {
return and__18744__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28465){var e = e28465;
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
return (function (p1__28466_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28466_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28475){
var vec__28476 = p__28475;
var k = cljs.core.nth.call(null,vec__28476,(0),null);
var v = cljs.core.nth.call(null,vec__28476,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28479){
var vec__28480 = p__28479;
var k = cljs.core.nth.call(null,vec__28480,(0),null);
var v = cljs.core.nth.call(null,vec__28480,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28486,p__28487){
var map__28735 = p__28486;
var map__28735__$1 = ((((!((map__28735 == null)))?((((map__28735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28735):map__28735);
var opts = map__28735__$1;
var before_jsload = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28736 = p__28487;
var map__28736__$1 = ((((!((map__28736 == null)))?((((map__28736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28736):map__28736);
var msg = map__28736__$1;
var files = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28890){
var state_val_28891 = (state_28890[(1)]);
if((state_val_28891 === (7))){
var inst_28751 = (state_28890[(7)]);
var inst_28750 = (state_28890[(8)]);
var inst_28753 = (state_28890[(9)]);
var inst_28752 = (state_28890[(10)]);
var inst_28758 = cljs.core._nth.call(null,inst_28751,inst_28753);
var inst_28759 = figwheel.client.file_reloading.eval_body.call(null,inst_28758,opts);
var inst_28760 = (inst_28753 + (1));
var tmp28892 = inst_28751;
var tmp28893 = inst_28750;
var tmp28894 = inst_28752;
var inst_28750__$1 = tmp28893;
var inst_28751__$1 = tmp28892;
var inst_28752__$1 = tmp28894;
var inst_28753__$1 = inst_28760;
var state_28890__$1 = (function (){var statearr_28895 = state_28890;
(statearr_28895[(11)] = inst_28759);

(statearr_28895[(7)] = inst_28751__$1);

(statearr_28895[(8)] = inst_28750__$1);

(statearr_28895[(9)] = inst_28753__$1);

(statearr_28895[(10)] = inst_28752__$1);

return statearr_28895;
})();
var statearr_28896_28982 = state_28890__$1;
(statearr_28896_28982[(2)] = null);

(statearr_28896_28982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (20))){
var inst_28793 = (state_28890[(12)]);
var inst_28801 = figwheel.client.file_reloading.sort_files.call(null,inst_28793);
var state_28890__$1 = state_28890;
var statearr_28897_28983 = state_28890__$1;
(statearr_28897_28983[(2)] = inst_28801);

(statearr_28897_28983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (27))){
var state_28890__$1 = state_28890;
var statearr_28898_28984 = state_28890__$1;
(statearr_28898_28984[(2)] = null);

(statearr_28898_28984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (1))){
var inst_28742 = (state_28890[(13)]);
var inst_28739 = before_jsload.call(null,files);
var inst_28740 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28741 = (function (){return ((function (inst_28742,inst_28739,inst_28740,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28483_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28483_SHARP_);
});
;})(inst_28742,inst_28739,inst_28740,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28742__$1 = cljs.core.filter.call(null,inst_28741,files);
var inst_28743 = cljs.core.not_empty.call(null,inst_28742__$1);
var state_28890__$1 = (function (){var statearr_28899 = state_28890;
(statearr_28899[(14)] = inst_28739);

(statearr_28899[(15)] = inst_28740);

(statearr_28899[(13)] = inst_28742__$1);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28743)){
var statearr_28900_28985 = state_28890__$1;
(statearr_28900_28985[(1)] = (2));

} else {
var statearr_28901_28986 = state_28890__$1;
(statearr_28901_28986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (24))){
var state_28890__$1 = state_28890;
var statearr_28902_28987 = state_28890__$1;
(statearr_28902_28987[(2)] = null);

(statearr_28902_28987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (39))){
var inst_28843 = (state_28890[(16)]);
var state_28890__$1 = state_28890;
var statearr_28903_28988 = state_28890__$1;
(statearr_28903_28988[(2)] = inst_28843);

(statearr_28903_28988[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (46))){
var inst_28885 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28904_28989 = state_28890__$1;
(statearr_28904_28989[(2)] = inst_28885);

(statearr_28904_28989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (4))){
var inst_28787 = (state_28890[(2)]);
var inst_28788 = cljs.core.List.EMPTY;
var inst_28789 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28788);
var inst_28790 = (function (){return ((function (inst_28787,inst_28788,inst_28789,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28484_SHARP_){
var and__18744__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28484_SHARP_);
if(cljs.core.truth_(and__18744__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28484_SHARP_));
} else {
return and__18744__auto__;
}
});
;})(inst_28787,inst_28788,inst_28789,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28791 = cljs.core.filter.call(null,inst_28790,files);
var inst_28792 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28793 = cljs.core.concat.call(null,inst_28791,inst_28792);
var state_28890__$1 = (function (){var statearr_28905 = state_28890;
(statearr_28905[(12)] = inst_28793);

(statearr_28905[(17)] = inst_28787);

(statearr_28905[(18)] = inst_28789);

return statearr_28905;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28906_28990 = state_28890__$1;
(statearr_28906_28990[(1)] = (16));

} else {
var statearr_28907_28991 = state_28890__$1;
(statearr_28907_28991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (15))){
var inst_28777 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28908_28992 = state_28890__$1;
(statearr_28908_28992[(2)] = inst_28777);

(statearr_28908_28992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (21))){
var inst_28803 = (state_28890[(19)]);
var inst_28803__$1 = (state_28890[(2)]);
var inst_28804 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28803__$1);
var state_28890__$1 = (function (){var statearr_28909 = state_28890;
(statearr_28909[(19)] = inst_28803__$1);

return statearr_28909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28890__$1,(22),inst_28804);
} else {
if((state_val_28891 === (31))){
var inst_28888 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28890__$1,inst_28888);
} else {
if((state_val_28891 === (32))){
var inst_28843 = (state_28890[(16)]);
var inst_28848 = inst_28843.cljs$lang$protocol_mask$partition0$;
var inst_28849 = (inst_28848 & (64));
var inst_28850 = inst_28843.cljs$core$ISeq$;
var inst_28851 = (cljs.core.PROTOCOL_SENTINEL === inst_28850);
var inst_28852 = (inst_28849) || (inst_28851);
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28852)){
var statearr_28910_28993 = state_28890__$1;
(statearr_28910_28993[(1)] = (35));

} else {
var statearr_28911_28994 = state_28890__$1;
(statearr_28911_28994[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (40))){
var inst_28865 = (state_28890[(20)]);
var inst_28864 = (state_28890[(2)]);
var inst_28865__$1 = cljs.core.get.call(null,inst_28864,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28866 = cljs.core.get.call(null,inst_28864,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28867 = cljs.core.not_empty.call(null,inst_28865__$1);
var state_28890__$1 = (function (){var statearr_28912 = state_28890;
(statearr_28912[(21)] = inst_28866);

(statearr_28912[(20)] = inst_28865__$1);

return statearr_28912;
})();
if(cljs.core.truth_(inst_28867)){
var statearr_28913_28995 = state_28890__$1;
(statearr_28913_28995[(1)] = (41));

} else {
var statearr_28914_28996 = state_28890__$1;
(statearr_28914_28996[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (33))){
var state_28890__$1 = state_28890;
var statearr_28915_28997 = state_28890__$1;
(statearr_28915_28997[(2)] = false);

(statearr_28915_28997[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (13))){
var inst_28763 = (state_28890[(22)]);
var inst_28767 = cljs.core.chunk_first.call(null,inst_28763);
var inst_28768 = cljs.core.chunk_rest.call(null,inst_28763);
var inst_28769 = cljs.core.count.call(null,inst_28767);
var inst_28750 = inst_28768;
var inst_28751 = inst_28767;
var inst_28752 = inst_28769;
var inst_28753 = (0);
var state_28890__$1 = (function (){var statearr_28916 = state_28890;
(statearr_28916[(7)] = inst_28751);

(statearr_28916[(8)] = inst_28750);

(statearr_28916[(9)] = inst_28753);

(statearr_28916[(10)] = inst_28752);

return statearr_28916;
})();
var statearr_28917_28998 = state_28890__$1;
(statearr_28917_28998[(2)] = null);

(statearr_28917_28998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (22))){
var inst_28811 = (state_28890[(23)]);
var inst_28803 = (state_28890[(19)]);
var inst_28807 = (state_28890[(24)]);
var inst_28806 = (state_28890[(25)]);
var inst_28806__$1 = (state_28890[(2)]);
var inst_28807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28806__$1);
var inst_28808 = (function (){var all_files = inst_28803;
var res_SINGLEQUOTE_ = inst_28806__$1;
var res = inst_28807__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28811,inst_28803,inst_28807,inst_28806,inst_28806__$1,inst_28807__$1,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28485_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28485_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28811,inst_28803,inst_28807,inst_28806,inst_28806__$1,inst_28807__$1,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28809 = cljs.core.filter.call(null,inst_28808,inst_28806__$1);
var inst_28810 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28811__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28810);
var inst_28812 = cljs.core.not_empty.call(null,inst_28811__$1);
var state_28890__$1 = (function (){var statearr_28918 = state_28890;
(statearr_28918[(26)] = inst_28809);

(statearr_28918[(23)] = inst_28811__$1);

(statearr_28918[(24)] = inst_28807__$1);

(statearr_28918[(25)] = inst_28806__$1);

return statearr_28918;
})();
if(cljs.core.truth_(inst_28812)){
var statearr_28919_28999 = state_28890__$1;
(statearr_28919_28999[(1)] = (23));

} else {
var statearr_28920_29000 = state_28890__$1;
(statearr_28920_29000[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (36))){
var state_28890__$1 = state_28890;
var statearr_28921_29001 = state_28890__$1;
(statearr_28921_29001[(2)] = false);

(statearr_28921_29001[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (41))){
var inst_28865 = (state_28890[(20)]);
var inst_28869 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28870 = cljs.core.map.call(null,inst_28869,inst_28865);
var inst_28871 = cljs.core.pr_str.call(null,inst_28870);
var inst_28872 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28871)].join('');
var inst_28873 = figwheel.client.utils.log.call(null,inst_28872);
var state_28890__$1 = state_28890;
var statearr_28922_29002 = state_28890__$1;
(statearr_28922_29002[(2)] = inst_28873);

(statearr_28922_29002[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (43))){
var inst_28866 = (state_28890[(21)]);
var inst_28876 = (state_28890[(2)]);
var inst_28877 = cljs.core.not_empty.call(null,inst_28866);
var state_28890__$1 = (function (){var statearr_28923 = state_28890;
(statearr_28923[(27)] = inst_28876);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28924_29003 = state_28890__$1;
(statearr_28924_29003[(1)] = (44));

} else {
var statearr_28925_29004 = state_28890__$1;
(statearr_28925_29004[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (29))){
var inst_28809 = (state_28890[(26)]);
var inst_28811 = (state_28890[(23)]);
var inst_28803 = (state_28890[(19)]);
var inst_28807 = (state_28890[(24)]);
var inst_28806 = (state_28890[(25)]);
var inst_28843 = (state_28890[(16)]);
var inst_28839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28842 = (function (){var all_files = inst_28803;
var res_SINGLEQUOTE_ = inst_28806;
var res = inst_28807;
var files_not_loaded = inst_28809;
var dependencies_that_loaded = inst_28811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28843,inst_28839,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28841){
var map__28926 = p__28841;
var map__28926__$1 = ((((!((map__28926 == null)))?((((map__28926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);
var namespace = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28843,inst_28839,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28843__$1 = cljs.core.group_by.call(null,inst_28842,inst_28809);
var inst_28845 = (inst_28843__$1 == null);
var inst_28846 = cljs.core.not.call(null,inst_28845);
var state_28890__$1 = (function (){var statearr_28928 = state_28890;
(statearr_28928[(28)] = inst_28839);

(statearr_28928[(16)] = inst_28843__$1);

return statearr_28928;
})();
if(inst_28846){
var statearr_28929_29005 = state_28890__$1;
(statearr_28929_29005[(1)] = (32));

} else {
var statearr_28930_29006 = state_28890__$1;
(statearr_28930_29006[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (44))){
var inst_28866 = (state_28890[(21)]);
var inst_28879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28866);
var inst_28880 = cljs.core.pr_str.call(null,inst_28879);
var inst_28881 = [cljs.core.str("not required: "),cljs.core.str(inst_28880)].join('');
var inst_28882 = figwheel.client.utils.log.call(null,inst_28881);
var state_28890__$1 = state_28890;
var statearr_28931_29007 = state_28890__$1;
(statearr_28931_29007[(2)] = inst_28882);

(statearr_28931_29007[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (6))){
var inst_28784 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28932_29008 = state_28890__$1;
(statearr_28932_29008[(2)] = inst_28784);

(statearr_28932_29008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (28))){
var inst_28809 = (state_28890[(26)]);
var inst_28836 = (state_28890[(2)]);
var inst_28837 = cljs.core.not_empty.call(null,inst_28809);
var state_28890__$1 = (function (){var statearr_28933 = state_28890;
(statearr_28933[(29)] = inst_28836);

return statearr_28933;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28934_29009 = state_28890__$1;
(statearr_28934_29009[(1)] = (29));

} else {
var statearr_28935_29010 = state_28890__$1;
(statearr_28935_29010[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (25))){
var inst_28807 = (state_28890[(24)]);
var inst_28823 = (state_28890[(2)]);
var inst_28824 = cljs.core.not_empty.call(null,inst_28807);
var state_28890__$1 = (function (){var statearr_28936 = state_28890;
(statearr_28936[(30)] = inst_28823);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28824)){
var statearr_28937_29011 = state_28890__$1;
(statearr_28937_29011[(1)] = (26));

} else {
var statearr_28938_29012 = state_28890__$1;
(statearr_28938_29012[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (34))){
var inst_28859 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28859)){
var statearr_28939_29013 = state_28890__$1;
(statearr_28939_29013[(1)] = (38));

} else {
var statearr_28940_29014 = state_28890__$1;
(statearr_28940_29014[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (17))){
var state_28890__$1 = state_28890;
var statearr_28941_29015 = state_28890__$1;
(statearr_28941_29015[(2)] = recompile_dependents);

(statearr_28941_29015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (3))){
var state_28890__$1 = state_28890;
var statearr_28942_29016 = state_28890__$1;
(statearr_28942_29016[(2)] = null);

(statearr_28942_29016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (12))){
var inst_28780 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28943_29017 = state_28890__$1;
(statearr_28943_29017[(2)] = inst_28780);

(statearr_28943_29017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (2))){
var inst_28742 = (state_28890[(13)]);
var inst_28749 = cljs.core.seq.call(null,inst_28742);
var inst_28750 = inst_28749;
var inst_28751 = null;
var inst_28752 = (0);
var inst_28753 = (0);
var state_28890__$1 = (function (){var statearr_28944 = state_28890;
(statearr_28944[(7)] = inst_28751);

(statearr_28944[(8)] = inst_28750);

(statearr_28944[(9)] = inst_28753);

(statearr_28944[(10)] = inst_28752);

return statearr_28944;
})();
var statearr_28945_29018 = state_28890__$1;
(statearr_28945_29018[(2)] = null);

(statearr_28945_29018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (23))){
var inst_28809 = (state_28890[(26)]);
var inst_28811 = (state_28890[(23)]);
var inst_28803 = (state_28890[(19)]);
var inst_28807 = (state_28890[(24)]);
var inst_28806 = (state_28890[(25)]);
var inst_28814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28816 = (function (){var all_files = inst_28803;
var res_SINGLEQUOTE_ = inst_28806;
var res = inst_28807;
var files_not_loaded = inst_28809;
var dependencies_that_loaded = inst_28811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28814,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28815){
var map__28946 = p__28815;
var map__28946__$1 = ((((!((map__28946 == null)))?((((map__28946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28946):map__28946);
var request_url = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28814,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28817 = cljs.core.reverse.call(null,inst_28811);
var inst_28818 = cljs.core.map.call(null,inst_28816,inst_28817);
var inst_28819 = cljs.core.pr_str.call(null,inst_28818);
var inst_28820 = figwheel.client.utils.log.call(null,inst_28819);
var state_28890__$1 = (function (){var statearr_28948 = state_28890;
(statearr_28948[(31)] = inst_28814);

return statearr_28948;
})();
var statearr_28949_29019 = state_28890__$1;
(statearr_28949_29019[(2)] = inst_28820);

(statearr_28949_29019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (35))){
var state_28890__$1 = state_28890;
var statearr_28950_29020 = state_28890__$1;
(statearr_28950_29020[(2)] = true);

(statearr_28950_29020[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (19))){
var inst_28793 = (state_28890[(12)]);
var inst_28799 = figwheel.client.file_reloading.expand_files.call(null,inst_28793);
var state_28890__$1 = state_28890;
var statearr_28951_29021 = state_28890__$1;
(statearr_28951_29021[(2)] = inst_28799);

(statearr_28951_29021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (11))){
var state_28890__$1 = state_28890;
var statearr_28952_29022 = state_28890__$1;
(statearr_28952_29022[(2)] = null);

(statearr_28952_29022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (9))){
var inst_28782 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28953_29023 = state_28890__$1;
(statearr_28953_29023[(2)] = inst_28782);

(statearr_28953_29023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (5))){
var inst_28753 = (state_28890[(9)]);
var inst_28752 = (state_28890[(10)]);
var inst_28755 = (inst_28753 < inst_28752);
var inst_28756 = inst_28755;
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28756)){
var statearr_28954_29024 = state_28890__$1;
(statearr_28954_29024[(1)] = (7));

} else {
var statearr_28955_29025 = state_28890__$1;
(statearr_28955_29025[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (14))){
var inst_28763 = (state_28890[(22)]);
var inst_28772 = cljs.core.first.call(null,inst_28763);
var inst_28773 = figwheel.client.file_reloading.eval_body.call(null,inst_28772,opts);
var inst_28774 = cljs.core.next.call(null,inst_28763);
var inst_28750 = inst_28774;
var inst_28751 = null;
var inst_28752 = (0);
var inst_28753 = (0);
var state_28890__$1 = (function (){var statearr_28956 = state_28890;
(statearr_28956[(32)] = inst_28773);

(statearr_28956[(7)] = inst_28751);

(statearr_28956[(8)] = inst_28750);

(statearr_28956[(9)] = inst_28753);

(statearr_28956[(10)] = inst_28752);

return statearr_28956;
})();
var statearr_28957_29026 = state_28890__$1;
(statearr_28957_29026[(2)] = null);

(statearr_28957_29026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (45))){
var state_28890__$1 = state_28890;
var statearr_28958_29027 = state_28890__$1;
(statearr_28958_29027[(2)] = null);

(statearr_28958_29027[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (26))){
var inst_28809 = (state_28890[(26)]);
var inst_28811 = (state_28890[(23)]);
var inst_28803 = (state_28890[(19)]);
var inst_28807 = (state_28890[(24)]);
var inst_28806 = (state_28890[(25)]);
var inst_28826 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28828 = (function (){var all_files = inst_28803;
var res_SINGLEQUOTE_ = inst_28806;
var res = inst_28807;
var files_not_loaded = inst_28809;
var dependencies_that_loaded = inst_28811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28826,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28827){
var map__28959 = p__28827;
var map__28959__$1 = ((((!((map__28959 == null)))?((((map__28959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28959):map__28959);
var namespace = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28826,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28829 = cljs.core.map.call(null,inst_28828,inst_28807);
var inst_28830 = cljs.core.pr_str.call(null,inst_28829);
var inst_28831 = figwheel.client.utils.log.call(null,inst_28830);
var inst_28832 = (function (){var all_files = inst_28803;
var res_SINGLEQUOTE_ = inst_28806;
var res = inst_28807;
var files_not_loaded = inst_28809;
var dependencies_that_loaded = inst_28811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28826,inst_28828,inst_28829,inst_28830,inst_28831,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28809,inst_28811,inst_28803,inst_28807,inst_28806,inst_28826,inst_28828,inst_28829,inst_28830,inst_28831,state_val_28891,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28833 = setTimeout(inst_28832,(10));
var state_28890__$1 = (function (){var statearr_28961 = state_28890;
(statearr_28961[(33)] = inst_28831);

(statearr_28961[(34)] = inst_28826);

return statearr_28961;
})();
var statearr_28962_29028 = state_28890__$1;
(statearr_28962_29028[(2)] = inst_28833);

(statearr_28962_29028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (16))){
var state_28890__$1 = state_28890;
var statearr_28963_29029 = state_28890__$1;
(statearr_28963_29029[(2)] = reload_dependents);

(statearr_28963_29029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (38))){
var inst_28843 = (state_28890[(16)]);
var inst_28861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28843);
var state_28890__$1 = state_28890;
var statearr_28964_29030 = state_28890__$1;
(statearr_28964_29030[(2)] = inst_28861);

(statearr_28964_29030[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (30))){
var state_28890__$1 = state_28890;
var statearr_28965_29031 = state_28890__$1;
(statearr_28965_29031[(2)] = null);

(statearr_28965_29031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (10))){
var inst_28763 = (state_28890[(22)]);
var inst_28765 = cljs.core.chunked_seq_QMARK_.call(null,inst_28763);
var state_28890__$1 = state_28890;
if(inst_28765){
var statearr_28966_29032 = state_28890__$1;
(statearr_28966_29032[(1)] = (13));

} else {
var statearr_28967_29033 = state_28890__$1;
(statearr_28967_29033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (18))){
var inst_28797 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28797)){
var statearr_28968_29034 = state_28890__$1;
(statearr_28968_29034[(1)] = (19));

} else {
var statearr_28969_29035 = state_28890__$1;
(statearr_28969_29035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (42))){
var state_28890__$1 = state_28890;
var statearr_28970_29036 = state_28890__$1;
(statearr_28970_29036[(2)] = null);

(statearr_28970_29036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (37))){
var inst_28856 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28971_29037 = state_28890__$1;
(statearr_28971_29037[(2)] = inst_28856);

(statearr_28971_29037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (8))){
var inst_28750 = (state_28890[(8)]);
var inst_28763 = (state_28890[(22)]);
var inst_28763__$1 = cljs.core.seq.call(null,inst_28750);
var state_28890__$1 = (function (){var statearr_28972 = state_28890;
(statearr_28972[(22)] = inst_28763__$1);

return statearr_28972;
})();
if(inst_28763__$1){
var statearr_28973_29038 = state_28890__$1;
(statearr_28973_29038[(1)] = (10));

} else {
var statearr_28974_29039 = state_28890__$1;
(statearr_28974_29039[(1)] = (11));

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
});})(c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21103__auto__,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____0 = (function (){
var statearr_28978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28978[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__);

(statearr_28978[(1)] = (1));

return statearr_28978;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____1 = (function (state_28890){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_28890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e28979){if((e28979 instanceof Object)){
var ex__21107__auto__ = e28979;
var statearr_28980_29040 = state_28890;
(statearr_28980_29040[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29041 = state_28890;
state_28890 = G__29041;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__ = function(state_28890){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____1.call(this,state_28890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21120__auto__ = (function (){var statearr_28981 = f__21119__auto__.call(null);
(statearr_28981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_28981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__,map__28735,map__28735__$1,opts,before_jsload,on_jsload,reload_dependents,map__28736,map__28736__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21118__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29044,link){
var map__29047 = p__29044;
var map__29047__$1 = ((((!((map__29047 == null)))?((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var file = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29047,map__29047__$1,file){
return (function (p1__29042_SHARP_,p2__29043_SHARP_){
if(cljs.core._EQ_.call(null,p1__29042_SHARP_,p2__29043_SHARP_)){
return p1__29042_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29047,map__29047__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29053){
var map__29054 = p__29053;
var map__29054__$1 = ((((!((map__29054 == null)))?((((map__29054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var match_length = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29049_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29049_SHARP_);
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
var args29056 = [];
var len__19864__auto___29059 = arguments.length;
var i__19865__auto___29060 = (0);
while(true){
if((i__19865__auto___29060 < len__19864__auto___29059)){
args29056.push((arguments[i__19865__auto___29060]));

var G__29061 = (i__19865__auto___29060 + (1));
i__19865__auto___29060 = G__29061;
continue;
} else {
}
break;
}

var G__29058 = args29056.length;
switch (G__29058) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29056.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29063_SHARP_,p2__29064_SHARP_){
return cljs.core.assoc.call(null,p1__29063_SHARP_,cljs.core.get.call(null,p2__29064_SHARP_,key),p2__29064_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29065){
var map__29068 = p__29065;
var map__29068__$1 = ((((!((map__29068 == null)))?((((map__29068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29068):map__29068);
var f_data = map__29068__$1;
var file = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29070,files_msg){
var map__29077 = p__29070;
var map__29077__$1 = ((((!((map__29077 == null)))?((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var opts = map__29077__$1;
var on_cssload = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29079_29083 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29080_29084 = null;
var count__29081_29085 = (0);
var i__29082_29086 = (0);
while(true){
if((i__29082_29086 < count__29081_29085)){
var f_29087 = cljs.core._nth.call(null,chunk__29080_29084,i__29082_29086);
figwheel.client.file_reloading.reload_css_file.call(null,f_29087);

var G__29088 = seq__29079_29083;
var G__29089 = chunk__29080_29084;
var G__29090 = count__29081_29085;
var G__29091 = (i__29082_29086 + (1));
seq__29079_29083 = G__29088;
chunk__29080_29084 = G__29089;
count__29081_29085 = G__29090;
i__29082_29086 = G__29091;
continue;
} else {
var temp__4657__auto___29092 = cljs.core.seq.call(null,seq__29079_29083);
if(temp__4657__auto___29092){
var seq__29079_29093__$1 = temp__4657__auto___29092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29079_29093__$1)){
var c__19570__auto___29094 = cljs.core.chunk_first.call(null,seq__29079_29093__$1);
var G__29095 = cljs.core.chunk_rest.call(null,seq__29079_29093__$1);
var G__29096 = c__19570__auto___29094;
var G__29097 = cljs.core.count.call(null,c__19570__auto___29094);
var G__29098 = (0);
seq__29079_29083 = G__29095;
chunk__29080_29084 = G__29096;
count__29081_29085 = G__29097;
i__29082_29086 = G__29098;
continue;
} else {
var f_29099 = cljs.core.first.call(null,seq__29079_29093__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29099);

var G__29100 = cljs.core.next.call(null,seq__29079_29093__$1);
var G__29101 = null;
var G__29102 = (0);
var G__29103 = (0);
seq__29079_29083 = G__29100;
chunk__29080_29084 = G__29101;
count__29081_29085 = G__29102;
i__29082_29086 = G__29103;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29077,map__29077__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29077,map__29077__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485901324472