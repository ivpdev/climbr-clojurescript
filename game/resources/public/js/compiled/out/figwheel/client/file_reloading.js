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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20982_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20982_SHARP_));
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
var seq__20987 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20988 = null;
var count__20989 = (0);
var i__20990 = (0);
while(true){
if((i__20990 < count__20989)){
var n = cljs.core._nth.call(null,chunk__20988,i__20990);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20991 = seq__20987;
var G__20992 = chunk__20988;
var G__20993 = count__20989;
var G__20994 = (i__20990 + (1));
seq__20987 = G__20991;
chunk__20988 = G__20992;
count__20989 = G__20993;
i__20990 = G__20994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20987);
if(temp__4657__auto__){
var seq__20987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20987__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__20987__$1);
var G__20995 = cljs.core.chunk_rest.call(null,seq__20987__$1);
var G__20996 = c__19556__auto__;
var G__20997 = cljs.core.count.call(null,c__19556__auto__);
var G__20998 = (0);
seq__20987 = G__20995;
chunk__20988 = G__20996;
count__20989 = G__20997;
i__20990 = G__20998;
continue;
} else {
var n = cljs.core.first.call(null,seq__20987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20999 = cljs.core.next.call(null,seq__20987__$1);
var G__21000 = null;
var G__21001 = (0);
var G__21002 = (0);
seq__20987 = G__20999;
chunk__20988 = G__21000;
count__20989 = G__21001;
i__20990 = G__21002;
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

var seq__21053_21064 = cljs.core.seq.call(null,deps);
var chunk__21054_21065 = null;
var count__21055_21066 = (0);
var i__21056_21067 = (0);
while(true){
if((i__21056_21067 < count__21055_21066)){
var dep_21068 = cljs.core._nth.call(null,chunk__21054_21065,i__21056_21067);
topo_sort_helper_STAR_.call(null,dep_21068,(depth + (1)),state);

var G__21069 = seq__21053_21064;
var G__21070 = chunk__21054_21065;
var G__21071 = count__21055_21066;
var G__21072 = (i__21056_21067 + (1));
seq__21053_21064 = G__21069;
chunk__21054_21065 = G__21070;
count__21055_21066 = G__21071;
i__21056_21067 = G__21072;
continue;
} else {
var temp__4657__auto___21073 = cljs.core.seq.call(null,seq__21053_21064);
if(temp__4657__auto___21073){
var seq__21053_21074__$1 = temp__4657__auto___21073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21053_21074__$1)){
var c__19556__auto___21075 = cljs.core.chunk_first.call(null,seq__21053_21074__$1);
var G__21076 = cljs.core.chunk_rest.call(null,seq__21053_21074__$1);
var G__21077 = c__19556__auto___21075;
var G__21078 = cljs.core.count.call(null,c__19556__auto___21075);
var G__21079 = (0);
seq__21053_21064 = G__21076;
chunk__21054_21065 = G__21077;
count__21055_21066 = G__21078;
i__21056_21067 = G__21079;
continue;
} else {
var dep_21080 = cljs.core.first.call(null,seq__21053_21074__$1);
topo_sort_helper_STAR_.call(null,dep_21080,(depth + (1)),state);

var G__21081 = cljs.core.next.call(null,seq__21053_21074__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__21053_21064 = G__21081;
chunk__21054_21065 = G__21082;
count__21055_21066 = G__21083;
i__21056_21067 = G__21084;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21057){
var vec__21061 = p__21057;
var seq__21062 = cljs.core.seq.call(null,vec__21061);
var first__21063 = cljs.core.first.call(null,seq__21062);
var seq__21062__$1 = cljs.core.next.call(null,seq__21062);
var x = first__21063;
var xs = seq__21062__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21061,seq__21062,first__21063,seq__21062__$1,x,xs,get_deps__$1){
return (function (p1__21003_SHARP_){
return clojure.set.difference.call(null,p1__21003_SHARP_,x);
});})(vec__21061,seq__21062,first__21063,seq__21062__$1,x,xs,get_deps__$1))
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
var seq__21097 = cljs.core.seq.call(null,provides);
var chunk__21098 = null;
var count__21099 = (0);
var i__21100 = (0);
while(true){
if((i__21100 < count__21099)){
var prov = cljs.core._nth.call(null,chunk__21098,i__21100);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21101_21109 = cljs.core.seq.call(null,requires);
var chunk__21102_21110 = null;
var count__21103_21111 = (0);
var i__21104_21112 = (0);
while(true){
if((i__21104_21112 < count__21103_21111)){
var req_21113 = cljs.core._nth.call(null,chunk__21102_21110,i__21104_21112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21113,prov);

var G__21114 = seq__21101_21109;
var G__21115 = chunk__21102_21110;
var G__21116 = count__21103_21111;
var G__21117 = (i__21104_21112 + (1));
seq__21101_21109 = G__21114;
chunk__21102_21110 = G__21115;
count__21103_21111 = G__21116;
i__21104_21112 = G__21117;
continue;
} else {
var temp__4657__auto___21118 = cljs.core.seq.call(null,seq__21101_21109);
if(temp__4657__auto___21118){
var seq__21101_21119__$1 = temp__4657__auto___21118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21101_21119__$1)){
var c__19556__auto___21120 = cljs.core.chunk_first.call(null,seq__21101_21119__$1);
var G__21121 = cljs.core.chunk_rest.call(null,seq__21101_21119__$1);
var G__21122 = c__19556__auto___21120;
var G__21123 = cljs.core.count.call(null,c__19556__auto___21120);
var G__21124 = (0);
seq__21101_21109 = G__21121;
chunk__21102_21110 = G__21122;
count__21103_21111 = G__21123;
i__21104_21112 = G__21124;
continue;
} else {
var req_21125 = cljs.core.first.call(null,seq__21101_21119__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21125,prov);

var G__21126 = cljs.core.next.call(null,seq__21101_21119__$1);
var G__21127 = null;
var G__21128 = (0);
var G__21129 = (0);
seq__21101_21109 = G__21126;
chunk__21102_21110 = G__21127;
count__21103_21111 = G__21128;
i__21104_21112 = G__21129;
continue;
}
} else {
}
}
break;
}

var G__21130 = seq__21097;
var G__21131 = chunk__21098;
var G__21132 = count__21099;
var G__21133 = (i__21100 + (1));
seq__21097 = G__21130;
chunk__21098 = G__21131;
count__21099 = G__21132;
i__21100 = G__21133;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21097);
if(temp__4657__auto__){
var seq__21097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21097__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__21097__$1);
var G__21134 = cljs.core.chunk_rest.call(null,seq__21097__$1);
var G__21135 = c__19556__auto__;
var G__21136 = cljs.core.count.call(null,c__19556__auto__);
var G__21137 = (0);
seq__21097 = G__21134;
chunk__21098 = G__21135;
count__21099 = G__21136;
i__21100 = G__21137;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21097__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21105_21138 = cljs.core.seq.call(null,requires);
var chunk__21106_21139 = null;
var count__21107_21140 = (0);
var i__21108_21141 = (0);
while(true){
if((i__21108_21141 < count__21107_21140)){
var req_21142 = cljs.core._nth.call(null,chunk__21106_21139,i__21108_21141);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21142,prov);

var G__21143 = seq__21105_21138;
var G__21144 = chunk__21106_21139;
var G__21145 = count__21107_21140;
var G__21146 = (i__21108_21141 + (1));
seq__21105_21138 = G__21143;
chunk__21106_21139 = G__21144;
count__21107_21140 = G__21145;
i__21108_21141 = G__21146;
continue;
} else {
var temp__4657__auto___21147__$1 = cljs.core.seq.call(null,seq__21105_21138);
if(temp__4657__auto___21147__$1){
var seq__21105_21148__$1 = temp__4657__auto___21147__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21105_21148__$1)){
var c__19556__auto___21149 = cljs.core.chunk_first.call(null,seq__21105_21148__$1);
var G__21150 = cljs.core.chunk_rest.call(null,seq__21105_21148__$1);
var G__21151 = c__19556__auto___21149;
var G__21152 = cljs.core.count.call(null,c__19556__auto___21149);
var G__21153 = (0);
seq__21105_21138 = G__21150;
chunk__21106_21139 = G__21151;
count__21107_21140 = G__21152;
i__21108_21141 = G__21153;
continue;
} else {
var req_21154 = cljs.core.first.call(null,seq__21105_21148__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21154,prov);

var G__21155 = cljs.core.next.call(null,seq__21105_21148__$1);
var G__21156 = null;
var G__21157 = (0);
var G__21158 = (0);
seq__21105_21138 = G__21155;
chunk__21106_21139 = G__21156;
count__21107_21140 = G__21157;
i__21108_21141 = G__21158;
continue;
}
} else {
}
}
break;
}

var G__21159 = cljs.core.next.call(null,seq__21097__$1);
var G__21160 = null;
var G__21161 = (0);
var G__21162 = (0);
seq__21097 = G__21159;
chunk__21098 = G__21160;
count__21099 = G__21161;
i__21100 = G__21162;
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
var seq__21167_21171 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21168_21172 = null;
var count__21169_21173 = (0);
var i__21170_21174 = (0);
while(true){
if((i__21170_21174 < count__21169_21173)){
var ns_21175 = cljs.core._nth.call(null,chunk__21168_21172,i__21170_21174);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21175);

var G__21176 = seq__21167_21171;
var G__21177 = chunk__21168_21172;
var G__21178 = count__21169_21173;
var G__21179 = (i__21170_21174 + (1));
seq__21167_21171 = G__21176;
chunk__21168_21172 = G__21177;
count__21169_21173 = G__21178;
i__21170_21174 = G__21179;
continue;
} else {
var temp__4657__auto___21180 = cljs.core.seq.call(null,seq__21167_21171);
if(temp__4657__auto___21180){
var seq__21167_21181__$1 = temp__4657__auto___21180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21167_21181__$1)){
var c__19556__auto___21182 = cljs.core.chunk_first.call(null,seq__21167_21181__$1);
var G__21183 = cljs.core.chunk_rest.call(null,seq__21167_21181__$1);
var G__21184 = c__19556__auto___21182;
var G__21185 = cljs.core.count.call(null,c__19556__auto___21182);
var G__21186 = (0);
seq__21167_21171 = G__21183;
chunk__21168_21172 = G__21184;
count__21169_21173 = G__21185;
i__21170_21174 = G__21186;
continue;
} else {
var ns_21187 = cljs.core.first.call(null,seq__21167_21181__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21187);

var G__21188 = cljs.core.next.call(null,seq__21167_21181__$1);
var G__21189 = null;
var G__21190 = (0);
var G__21191 = (0);
seq__21167_21171 = G__21188;
chunk__21168_21172 = G__21189;
count__21169_21173 = G__21190;
i__21170_21174 = G__21191;
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
var G__21192__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21193__i = 0, G__21193__a = new Array(arguments.length -  0);
while (G__21193__i < G__21193__a.length) {G__21193__a[G__21193__i] = arguments[G__21193__i + 0]; ++G__21193__i;}
  args = new cljs.core.IndexedSeq(G__21193__a,0);
} 
return G__21192__delegate.call(this,args);};
G__21192.cljs$lang$maxFixedArity = 0;
G__21192.cljs$lang$applyTo = (function (arglist__21194){
var args = cljs.core.seq(arglist__21194);
return G__21192__delegate(args);
});
G__21192.cljs$core$IFn$_invoke$arity$variadic = G__21192__delegate;
return G__21192;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21196 = cljs.core._EQ_;
var expr__21197 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21196.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21197))){
var path_parts = ((function (pred__21196,expr__21197){
return (function (p1__21195_SHARP_){
return clojure.string.split.call(null,p1__21195_SHARP_,/[\/\\]/);
});})(pred__21196,expr__21197))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__21196,expr__21197){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21199){if((e21199 instanceof Error)){
var e = e21199;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21199;

}
}})());
});
;})(path_parts,sep,root,pred__21196,expr__21197))
} else {
if(cljs.core.truth_(pred__21196.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21197))){
return ((function (pred__21196,expr__21197){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__21196,expr__21197){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21196,expr__21197))
);

return deferred.addErrback(((function (deferred,pred__21196,expr__21197){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21196,expr__21197))
);
});
;})(pred__21196,expr__21197))
} else {
return ((function (pred__21196,expr__21197){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21196,expr__21197))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21200,callback){
var map__21203 = p__21200;
var map__21203__$1 = ((((!((map__21203 == null)))?((((map__21203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21203):map__21203);
var file_msg = map__21203__$1;
var request_url = cljs.core.get.call(null,map__21203__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21203,map__21203__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21203,map__21203__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__){
return (function (state_21227){
var state_val_21228 = (state_21227[(1)]);
if((state_val_21228 === (7))){
var inst_21223 = (state_21227[(2)]);
var state_21227__$1 = state_21227;
var statearr_21229_21249 = state_21227__$1;
(statearr_21229_21249[(2)] = inst_21223);

(statearr_21229_21249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (1))){
var state_21227__$1 = state_21227;
var statearr_21230_21250 = state_21227__$1;
(statearr_21230_21250[(2)] = null);

(statearr_21230_21250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (4))){
var inst_21207 = (state_21227[(7)]);
var inst_21207__$1 = (state_21227[(2)]);
var state_21227__$1 = (function (){var statearr_21231 = state_21227;
(statearr_21231[(7)] = inst_21207__$1);

return statearr_21231;
})();
if(cljs.core.truth_(inst_21207__$1)){
var statearr_21232_21251 = state_21227__$1;
(statearr_21232_21251[(1)] = (5));

} else {
var statearr_21233_21252 = state_21227__$1;
(statearr_21233_21252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (6))){
var state_21227__$1 = state_21227;
var statearr_21234_21253 = state_21227__$1;
(statearr_21234_21253[(2)] = null);

(statearr_21234_21253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (3))){
var inst_21225 = (state_21227[(2)]);
var state_21227__$1 = state_21227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21227__$1,inst_21225);
} else {
if((state_val_21228 === (2))){
var state_21227__$1 = state_21227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21228 === (11))){
var inst_21219 = (state_21227[(2)]);
var state_21227__$1 = (function (){var statearr_21235 = state_21227;
(statearr_21235[(8)] = inst_21219);

return statearr_21235;
})();
var statearr_21236_21254 = state_21227__$1;
(statearr_21236_21254[(2)] = null);

(statearr_21236_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (9))){
var inst_21213 = (state_21227[(9)]);
var inst_21211 = (state_21227[(10)]);
var inst_21215 = inst_21213.call(null,inst_21211);
var state_21227__$1 = state_21227;
var statearr_21237_21255 = state_21227__$1;
(statearr_21237_21255[(2)] = inst_21215);

(statearr_21237_21255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (5))){
var inst_21207 = (state_21227[(7)]);
var inst_21209 = figwheel.client.file_reloading.blocking_load.call(null,inst_21207);
var state_21227__$1 = state_21227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,(8),inst_21209);
} else {
if((state_val_21228 === (10))){
var inst_21211 = (state_21227[(10)]);
var inst_21217 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21211);
var state_21227__$1 = state_21227;
var statearr_21238_21256 = state_21227__$1;
(statearr_21238_21256[(2)] = inst_21217);

(statearr_21238_21256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (8))){
var inst_21213 = (state_21227[(9)]);
var inst_21207 = (state_21227[(7)]);
var inst_21211 = (state_21227[(2)]);
var inst_21212 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21213__$1 = cljs.core.get.call(null,inst_21212,inst_21207);
var state_21227__$1 = (function (){var statearr_21239 = state_21227;
(statearr_21239[(9)] = inst_21213__$1);

(statearr_21239[(10)] = inst_21211);

return statearr_21239;
})();
if(cljs.core.truth_(inst_21213__$1)){
var statearr_21240_21257 = state_21227__$1;
(statearr_21240_21257[(1)] = (9));

} else {
var statearr_21241_21258 = state_21227__$1;
(statearr_21241_21258[(1)] = (10));

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
});})(c__20903__auto__))
;
return ((function (switch__20882__auto__,c__20903__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$state_machine__20883__auto____0 = (function (){
var statearr_21245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21245[(0)] = figwheel$client$file_reloading$state_machine__20883__auto__);

(statearr_21245[(1)] = (1));

return statearr_21245;
});
var figwheel$client$file_reloading$state_machine__20883__auto____1 = (function (state_21227){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21246){if((e21246 instanceof Object)){
var ex__20886__auto__ = e21246;
var statearr_21247_21259 = state_21227;
(statearr_21247_21259[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21260 = state_21227;
state_21227 = G__21260;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20883__auto__ = function(state_21227){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20883__auto____1.call(this,state_21227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20883__auto____0;
figwheel$client$file_reloading$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20883__auto____1;
return figwheel$client$file_reloading$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__))
})();
var state__20905__auto__ = (function (){var statearr_21248 = f__20904__auto__.call(null);
(statearr_21248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_21248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__))
);

return c__20903__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21261,callback){
var map__21264 = p__21261;
var map__21264__$1 = ((((!((map__21264 == null)))?((((map__21264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21264):map__21264);
var file_msg = map__21264__$1;
var namespace = cljs.core.get.call(null,map__21264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21264,map__21264__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21264,map__21264__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21266){
var map__21269 = p__21266;
var map__21269__$1 = ((((!((map__21269 == null)))?((((map__21269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21269):map__21269);
var file_msg = map__21269__$1;
var namespace = cljs.core.get.call(null,map__21269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21271,callback){
var map__21274 = p__21271;
var map__21274__$1 = ((((!((map__21274 == null)))?((((map__21274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21274):map__21274);
var file_msg = map__21274__$1;
var request_url = cljs.core.get.call(null,map__21274__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20903__auto___21378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto___21378,out){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto___21378,out){
return (function (state_21360){
var state_val_21361 = (state_21360[(1)]);
if((state_val_21361 === (1))){
var inst_21334 = cljs.core.seq.call(null,files);
var inst_21335 = cljs.core.first.call(null,inst_21334);
var inst_21336 = cljs.core.next.call(null,inst_21334);
var inst_21337 = files;
var state_21360__$1 = (function (){var statearr_21362 = state_21360;
(statearr_21362[(7)] = inst_21336);

(statearr_21362[(8)] = inst_21337);

(statearr_21362[(9)] = inst_21335);

return statearr_21362;
})();
var statearr_21363_21379 = state_21360__$1;
(statearr_21363_21379[(2)] = null);

(statearr_21363_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (2))){
var inst_21343 = (state_21360[(10)]);
var inst_21337 = (state_21360[(8)]);
var inst_21342 = cljs.core.seq.call(null,inst_21337);
var inst_21343__$1 = cljs.core.first.call(null,inst_21342);
var inst_21344 = cljs.core.next.call(null,inst_21342);
var inst_21345 = (inst_21343__$1 == null);
var inst_21346 = cljs.core.not.call(null,inst_21345);
var state_21360__$1 = (function (){var statearr_21364 = state_21360;
(statearr_21364[(10)] = inst_21343__$1);

(statearr_21364[(11)] = inst_21344);

return statearr_21364;
})();
if(inst_21346){
var statearr_21365_21380 = state_21360__$1;
(statearr_21365_21380[(1)] = (4));

} else {
var statearr_21366_21381 = state_21360__$1;
(statearr_21366_21381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (3))){
var inst_21358 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21360__$1,inst_21358);
} else {
if((state_val_21361 === (4))){
var inst_21343 = (state_21360[(10)]);
var inst_21348 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21343);
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21360__$1,(7),inst_21348);
} else {
if((state_val_21361 === (5))){
var inst_21354 = cljs.core.async.close_BANG_.call(null,out);
var state_21360__$1 = state_21360;
var statearr_21367_21382 = state_21360__$1;
(statearr_21367_21382[(2)] = inst_21354);

(statearr_21367_21382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (6))){
var inst_21356 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
var statearr_21368_21383 = state_21360__$1;
(statearr_21368_21383[(2)] = inst_21356);

(statearr_21368_21383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21361 === (7))){
var inst_21344 = (state_21360[(11)]);
var inst_21350 = (state_21360[(2)]);
var inst_21351 = cljs.core.async.put_BANG_.call(null,out,inst_21350);
var inst_21337 = inst_21344;
var state_21360__$1 = (function (){var statearr_21369 = state_21360;
(statearr_21369[(12)] = inst_21351);

(statearr_21369[(8)] = inst_21337);

return statearr_21369;
})();
var statearr_21370_21384 = state_21360__$1;
(statearr_21370_21384[(2)] = null);

(statearr_21370_21384[(1)] = (2));


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
});})(c__20903__auto___21378,out))
;
return ((function (switch__20882__auto__,c__20903__auto___21378,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0 = (function (){
var statearr_21374 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21374[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__);

(statearr_21374[(1)] = (1));

return statearr_21374;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1 = (function (state_21360){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21375){if((e21375 instanceof Object)){
var ex__20886__auto__ = e21375;
var statearr_21376_21385 = state_21360;
(statearr_21376_21385[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21386 = state_21360;
state_21360 = G__21386;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__ = function(state_21360){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1.call(this,state_21360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto___21378,out))
})();
var state__20905__auto__ = (function (){var statearr_21377 = f__20904__auto__.call(null);
(statearr_21377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto___21378);

return statearr_21377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto___21378,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21387,opts){
var map__21391 = p__21387;
var map__21391__$1 = ((((!((map__21391 == null)))?((((map__21391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21391):map__21391);
var eval_body = cljs.core.get.call(null,map__21391__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21393){var e = e21393;
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
return (function (p1__21394_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21394_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21403){
var vec__21404 = p__21403;
var k = cljs.core.nth.call(null,vec__21404,(0),null);
var v = cljs.core.nth.call(null,vec__21404,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21407){
var vec__21408 = p__21407;
var k = cljs.core.nth.call(null,vec__21408,(0),null);
var v = cljs.core.nth.call(null,vec__21408,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21414,p__21415){
var map__21663 = p__21414;
var map__21663__$1 = ((((!((map__21663 == null)))?((((map__21663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21663):map__21663);
var opts = map__21663__$1;
var before_jsload = cljs.core.get.call(null,map__21663__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21663__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21664 = p__21415;
var map__21664__$1 = ((((!((map__21664 == null)))?((((map__21664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21664):map__21664);
var msg = map__21664__$1;
var files = cljs.core.get.call(null,map__21664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21664__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21664__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21818){
var state_val_21819 = (state_21818[(1)]);
if((state_val_21819 === (7))){
var inst_21678 = (state_21818[(7)]);
var inst_21679 = (state_21818[(8)]);
var inst_21681 = (state_21818[(9)]);
var inst_21680 = (state_21818[(10)]);
var inst_21686 = cljs.core._nth.call(null,inst_21679,inst_21681);
var inst_21687 = figwheel.client.file_reloading.eval_body.call(null,inst_21686,opts);
var inst_21688 = (inst_21681 + (1));
var tmp21820 = inst_21678;
var tmp21821 = inst_21679;
var tmp21822 = inst_21680;
var inst_21678__$1 = tmp21820;
var inst_21679__$1 = tmp21821;
var inst_21680__$1 = tmp21822;
var inst_21681__$1 = inst_21688;
var state_21818__$1 = (function (){var statearr_21823 = state_21818;
(statearr_21823[(7)] = inst_21678__$1);

(statearr_21823[(11)] = inst_21687);

(statearr_21823[(8)] = inst_21679__$1);

(statearr_21823[(9)] = inst_21681__$1);

(statearr_21823[(10)] = inst_21680__$1);

return statearr_21823;
})();
var statearr_21824_21910 = state_21818__$1;
(statearr_21824_21910[(2)] = null);

(statearr_21824_21910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (20))){
var inst_21721 = (state_21818[(12)]);
var inst_21729 = figwheel.client.file_reloading.sort_files.call(null,inst_21721);
var state_21818__$1 = state_21818;
var statearr_21825_21911 = state_21818__$1;
(statearr_21825_21911[(2)] = inst_21729);

(statearr_21825_21911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (27))){
var state_21818__$1 = state_21818;
var statearr_21826_21912 = state_21818__$1;
(statearr_21826_21912[(2)] = null);

(statearr_21826_21912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (1))){
var inst_21670 = (state_21818[(13)]);
var inst_21667 = before_jsload.call(null,files);
var inst_21668 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21669 = (function (){return ((function (inst_21670,inst_21667,inst_21668,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21411_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21411_SHARP_);
});
;})(inst_21670,inst_21667,inst_21668,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21670__$1 = cljs.core.filter.call(null,inst_21669,files);
var inst_21671 = cljs.core.not_empty.call(null,inst_21670__$1);
var state_21818__$1 = (function (){var statearr_21827 = state_21818;
(statearr_21827[(13)] = inst_21670__$1);

(statearr_21827[(14)] = inst_21668);

(statearr_21827[(15)] = inst_21667);

return statearr_21827;
})();
if(cljs.core.truth_(inst_21671)){
var statearr_21828_21913 = state_21818__$1;
(statearr_21828_21913[(1)] = (2));

} else {
var statearr_21829_21914 = state_21818__$1;
(statearr_21829_21914[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (24))){
var state_21818__$1 = state_21818;
var statearr_21830_21915 = state_21818__$1;
(statearr_21830_21915[(2)] = null);

(statearr_21830_21915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (39))){
var inst_21771 = (state_21818[(16)]);
var state_21818__$1 = state_21818;
var statearr_21831_21916 = state_21818__$1;
(statearr_21831_21916[(2)] = inst_21771);

(statearr_21831_21916[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (46))){
var inst_21813 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21832_21917 = state_21818__$1;
(statearr_21832_21917[(2)] = inst_21813);

(statearr_21832_21917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (4))){
var inst_21715 = (state_21818[(2)]);
var inst_21716 = cljs.core.List.EMPTY;
var inst_21717 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21716);
var inst_21718 = (function (){return ((function (inst_21715,inst_21716,inst_21717,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21412_SHARP_){
var and__18730__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21412_SHARP_);
if(cljs.core.truth_(and__18730__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21412_SHARP_));
} else {
return and__18730__auto__;
}
});
;})(inst_21715,inst_21716,inst_21717,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21719 = cljs.core.filter.call(null,inst_21718,files);
var inst_21720 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21721 = cljs.core.concat.call(null,inst_21719,inst_21720);
var state_21818__$1 = (function (){var statearr_21833 = state_21818;
(statearr_21833[(17)] = inst_21717);

(statearr_21833[(18)] = inst_21715);

(statearr_21833[(12)] = inst_21721);

return statearr_21833;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21834_21918 = state_21818__$1;
(statearr_21834_21918[(1)] = (16));

} else {
var statearr_21835_21919 = state_21818__$1;
(statearr_21835_21919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (15))){
var inst_21705 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21836_21920 = state_21818__$1;
(statearr_21836_21920[(2)] = inst_21705);

(statearr_21836_21920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (21))){
var inst_21731 = (state_21818[(19)]);
var inst_21731__$1 = (state_21818[(2)]);
var inst_21732 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21731__$1);
var state_21818__$1 = (function (){var statearr_21837 = state_21818;
(statearr_21837[(19)] = inst_21731__$1);

return statearr_21837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21818__$1,(22),inst_21732);
} else {
if((state_val_21819 === (31))){
var inst_21816 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21818__$1,inst_21816);
} else {
if((state_val_21819 === (32))){
var inst_21771 = (state_21818[(16)]);
var inst_21776 = inst_21771.cljs$lang$protocol_mask$partition0$;
var inst_21777 = (inst_21776 & (64));
var inst_21778 = inst_21771.cljs$core$ISeq$;
var inst_21779 = (cljs.core.PROTOCOL_SENTINEL === inst_21778);
var inst_21780 = (inst_21777) || (inst_21779);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21780)){
var statearr_21838_21921 = state_21818__$1;
(statearr_21838_21921[(1)] = (35));

} else {
var statearr_21839_21922 = state_21818__$1;
(statearr_21839_21922[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (40))){
var inst_21793 = (state_21818[(20)]);
var inst_21792 = (state_21818[(2)]);
var inst_21793__$1 = cljs.core.get.call(null,inst_21792,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21794 = cljs.core.get.call(null,inst_21792,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21795 = cljs.core.not_empty.call(null,inst_21793__$1);
var state_21818__$1 = (function (){var statearr_21840 = state_21818;
(statearr_21840[(21)] = inst_21794);

(statearr_21840[(20)] = inst_21793__$1);

return statearr_21840;
})();
if(cljs.core.truth_(inst_21795)){
var statearr_21841_21923 = state_21818__$1;
(statearr_21841_21923[(1)] = (41));

} else {
var statearr_21842_21924 = state_21818__$1;
(statearr_21842_21924[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (33))){
var state_21818__$1 = state_21818;
var statearr_21843_21925 = state_21818__$1;
(statearr_21843_21925[(2)] = false);

(statearr_21843_21925[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (13))){
var inst_21691 = (state_21818[(22)]);
var inst_21695 = cljs.core.chunk_first.call(null,inst_21691);
var inst_21696 = cljs.core.chunk_rest.call(null,inst_21691);
var inst_21697 = cljs.core.count.call(null,inst_21695);
var inst_21678 = inst_21696;
var inst_21679 = inst_21695;
var inst_21680 = inst_21697;
var inst_21681 = (0);
var state_21818__$1 = (function (){var statearr_21844 = state_21818;
(statearr_21844[(7)] = inst_21678);

(statearr_21844[(8)] = inst_21679);

(statearr_21844[(9)] = inst_21681);

(statearr_21844[(10)] = inst_21680);

return statearr_21844;
})();
var statearr_21845_21926 = state_21818__$1;
(statearr_21845_21926[(2)] = null);

(statearr_21845_21926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (22))){
var inst_21739 = (state_21818[(23)]);
var inst_21731 = (state_21818[(19)]);
var inst_21735 = (state_21818[(24)]);
var inst_21734 = (state_21818[(25)]);
var inst_21734__$1 = (state_21818[(2)]);
var inst_21735__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21734__$1);
var inst_21736 = (function (){var all_files = inst_21731;
var res_SINGLEQUOTE_ = inst_21734__$1;
var res = inst_21735__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21739,inst_21731,inst_21735,inst_21734,inst_21734__$1,inst_21735__$1,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21413_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21413_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21739,inst_21731,inst_21735,inst_21734,inst_21734__$1,inst_21735__$1,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21737 = cljs.core.filter.call(null,inst_21736,inst_21734__$1);
var inst_21738 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21739__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21738);
var inst_21740 = cljs.core.not_empty.call(null,inst_21739__$1);
var state_21818__$1 = (function (){var statearr_21846 = state_21818;
(statearr_21846[(23)] = inst_21739__$1);

(statearr_21846[(24)] = inst_21735__$1);

(statearr_21846[(25)] = inst_21734__$1);

(statearr_21846[(26)] = inst_21737);

return statearr_21846;
})();
if(cljs.core.truth_(inst_21740)){
var statearr_21847_21927 = state_21818__$1;
(statearr_21847_21927[(1)] = (23));

} else {
var statearr_21848_21928 = state_21818__$1;
(statearr_21848_21928[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (36))){
var state_21818__$1 = state_21818;
var statearr_21849_21929 = state_21818__$1;
(statearr_21849_21929[(2)] = false);

(statearr_21849_21929[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (41))){
var inst_21793 = (state_21818[(20)]);
var inst_21797 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21798 = cljs.core.map.call(null,inst_21797,inst_21793);
var inst_21799 = cljs.core.pr_str.call(null,inst_21798);
var inst_21800 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21799)].join('');
var inst_21801 = figwheel.client.utils.log.call(null,inst_21800);
var state_21818__$1 = state_21818;
var statearr_21850_21930 = state_21818__$1;
(statearr_21850_21930[(2)] = inst_21801);

(statearr_21850_21930[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (43))){
var inst_21794 = (state_21818[(21)]);
var inst_21804 = (state_21818[(2)]);
var inst_21805 = cljs.core.not_empty.call(null,inst_21794);
var state_21818__$1 = (function (){var statearr_21851 = state_21818;
(statearr_21851[(27)] = inst_21804);

return statearr_21851;
})();
if(cljs.core.truth_(inst_21805)){
var statearr_21852_21931 = state_21818__$1;
(statearr_21852_21931[(1)] = (44));

} else {
var statearr_21853_21932 = state_21818__$1;
(statearr_21853_21932[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (29))){
var inst_21739 = (state_21818[(23)]);
var inst_21771 = (state_21818[(16)]);
var inst_21731 = (state_21818[(19)]);
var inst_21735 = (state_21818[(24)]);
var inst_21734 = (state_21818[(25)]);
var inst_21737 = (state_21818[(26)]);
var inst_21767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21770 = (function (){var all_files = inst_21731;
var res_SINGLEQUOTE_ = inst_21734;
var res = inst_21735;
var files_not_loaded = inst_21737;
var dependencies_that_loaded = inst_21739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21771,inst_21731,inst_21735,inst_21734,inst_21737,inst_21767,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21769){
var map__21854 = p__21769;
var map__21854__$1 = ((((!((map__21854 == null)))?((((map__21854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21854):map__21854);
var namespace = cljs.core.get.call(null,map__21854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21771,inst_21731,inst_21735,inst_21734,inst_21737,inst_21767,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21771__$1 = cljs.core.group_by.call(null,inst_21770,inst_21737);
var inst_21773 = (inst_21771__$1 == null);
var inst_21774 = cljs.core.not.call(null,inst_21773);
var state_21818__$1 = (function (){var statearr_21856 = state_21818;
(statearr_21856[(28)] = inst_21767);

(statearr_21856[(16)] = inst_21771__$1);

return statearr_21856;
})();
if(inst_21774){
var statearr_21857_21933 = state_21818__$1;
(statearr_21857_21933[(1)] = (32));

} else {
var statearr_21858_21934 = state_21818__$1;
(statearr_21858_21934[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (44))){
var inst_21794 = (state_21818[(21)]);
var inst_21807 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21794);
var inst_21808 = cljs.core.pr_str.call(null,inst_21807);
var inst_21809 = [cljs.core.str("not required: "),cljs.core.str(inst_21808)].join('');
var inst_21810 = figwheel.client.utils.log.call(null,inst_21809);
var state_21818__$1 = state_21818;
var statearr_21859_21935 = state_21818__$1;
(statearr_21859_21935[(2)] = inst_21810);

(statearr_21859_21935[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (6))){
var inst_21712 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21860_21936 = state_21818__$1;
(statearr_21860_21936[(2)] = inst_21712);

(statearr_21860_21936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (28))){
var inst_21737 = (state_21818[(26)]);
var inst_21764 = (state_21818[(2)]);
var inst_21765 = cljs.core.not_empty.call(null,inst_21737);
var state_21818__$1 = (function (){var statearr_21861 = state_21818;
(statearr_21861[(29)] = inst_21764);

return statearr_21861;
})();
if(cljs.core.truth_(inst_21765)){
var statearr_21862_21937 = state_21818__$1;
(statearr_21862_21937[(1)] = (29));

} else {
var statearr_21863_21938 = state_21818__$1;
(statearr_21863_21938[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (25))){
var inst_21735 = (state_21818[(24)]);
var inst_21751 = (state_21818[(2)]);
var inst_21752 = cljs.core.not_empty.call(null,inst_21735);
var state_21818__$1 = (function (){var statearr_21864 = state_21818;
(statearr_21864[(30)] = inst_21751);

return statearr_21864;
})();
if(cljs.core.truth_(inst_21752)){
var statearr_21865_21939 = state_21818__$1;
(statearr_21865_21939[(1)] = (26));

} else {
var statearr_21866_21940 = state_21818__$1;
(statearr_21866_21940[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (34))){
var inst_21787 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21787)){
var statearr_21867_21941 = state_21818__$1;
(statearr_21867_21941[(1)] = (38));

} else {
var statearr_21868_21942 = state_21818__$1;
(statearr_21868_21942[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (17))){
var state_21818__$1 = state_21818;
var statearr_21869_21943 = state_21818__$1;
(statearr_21869_21943[(2)] = recompile_dependents);

(statearr_21869_21943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (3))){
var state_21818__$1 = state_21818;
var statearr_21870_21944 = state_21818__$1;
(statearr_21870_21944[(2)] = null);

(statearr_21870_21944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (12))){
var inst_21708 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21871_21945 = state_21818__$1;
(statearr_21871_21945[(2)] = inst_21708);

(statearr_21871_21945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (2))){
var inst_21670 = (state_21818[(13)]);
var inst_21677 = cljs.core.seq.call(null,inst_21670);
var inst_21678 = inst_21677;
var inst_21679 = null;
var inst_21680 = (0);
var inst_21681 = (0);
var state_21818__$1 = (function (){var statearr_21872 = state_21818;
(statearr_21872[(7)] = inst_21678);

(statearr_21872[(8)] = inst_21679);

(statearr_21872[(9)] = inst_21681);

(statearr_21872[(10)] = inst_21680);

return statearr_21872;
})();
var statearr_21873_21946 = state_21818__$1;
(statearr_21873_21946[(2)] = null);

(statearr_21873_21946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (23))){
var inst_21739 = (state_21818[(23)]);
var inst_21731 = (state_21818[(19)]);
var inst_21735 = (state_21818[(24)]);
var inst_21734 = (state_21818[(25)]);
var inst_21737 = (state_21818[(26)]);
var inst_21742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21744 = (function (){var all_files = inst_21731;
var res_SINGLEQUOTE_ = inst_21734;
var res = inst_21735;
var files_not_loaded = inst_21737;
var dependencies_that_loaded = inst_21739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21742,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21743){
var map__21874 = p__21743;
var map__21874__$1 = ((((!((map__21874 == null)))?((((map__21874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21874):map__21874);
var request_url = cljs.core.get.call(null,map__21874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21742,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21745 = cljs.core.reverse.call(null,inst_21739);
var inst_21746 = cljs.core.map.call(null,inst_21744,inst_21745);
var inst_21747 = cljs.core.pr_str.call(null,inst_21746);
var inst_21748 = figwheel.client.utils.log.call(null,inst_21747);
var state_21818__$1 = (function (){var statearr_21876 = state_21818;
(statearr_21876[(31)] = inst_21742);

return statearr_21876;
})();
var statearr_21877_21947 = state_21818__$1;
(statearr_21877_21947[(2)] = inst_21748);

(statearr_21877_21947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (35))){
var state_21818__$1 = state_21818;
var statearr_21878_21948 = state_21818__$1;
(statearr_21878_21948[(2)] = true);

(statearr_21878_21948[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (19))){
var inst_21721 = (state_21818[(12)]);
var inst_21727 = figwheel.client.file_reloading.expand_files.call(null,inst_21721);
var state_21818__$1 = state_21818;
var statearr_21879_21949 = state_21818__$1;
(statearr_21879_21949[(2)] = inst_21727);

(statearr_21879_21949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (11))){
var state_21818__$1 = state_21818;
var statearr_21880_21950 = state_21818__$1;
(statearr_21880_21950[(2)] = null);

(statearr_21880_21950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (9))){
var inst_21710 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21881_21951 = state_21818__$1;
(statearr_21881_21951[(2)] = inst_21710);

(statearr_21881_21951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (5))){
var inst_21681 = (state_21818[(9)]);
var inst_21680 = (state_21818[(10)]);
var inst_21683 = (inst_21681 < inst_21680);
var inst_21684 = inst_21683;
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21684)){
var statearr_21882_21952 = state_21818__$1;
(statearr_21882_21952[(1)] = (7));

} else {
var statearr_21883_21953 = state_21818__$1;
(statearr_21883_21953[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (14))){
var inst_21691 = (state_21818[(22)]);
var inst_21700 = cljs.core.first.call(null,inst_21691);
var inst_21701 = figwheel.client.file_reloading.eval_body.call(null,inst_21700,opts);
var inst_21702 = cljs.core.next.call(null,inst_21691);
var inst_21678 = inst_21702;
var inst_21679 = null;
var inst_21680 = (0);
var inst_21681 = (0);
var state_21818__$1 = (function (){var statearr_21884 = state_21818;
(statearr_21884[(7)] = inst_21678);

(statearr_21884[(8)] = inst_21679);

(statearr_21884[(32)] = inst_21701);

(statearr_21884[(9)] = inst_21681);

(statearr_21884[(10)] = inst_21680);

return statearr_21884;
})();
var statearr_21885_21954 = state_21818__$1;
(statearr_21885_21954[(2)] = null);

(statearr_21885_21954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (45))){
var state_21818__$1 = state_21818;
var statearr_21886_21955 = state_21818__$1;
(statearr_21886_21955[(2)] = null);

(statearr_21886_21955[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (26))){
var inst_21739 = (state_21818[(23)]);
var inst_21731 = (state_21818[(19)]);
var inst_21735 = (state_21818[(24)]);
var inst_21734 = (state_21818[(25)]);
var inst_21737 = (state_21818[(26)]);
var inst_21754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21756 = (function (){var all_files = inst_21731;
var res_SINGLEQUOTE_ = inst_21734;
var res = inst_21735;
var files_not_loaded = inst_21737;
var dependencies_that_loaded = inst_21739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21754,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21755){
var map__21887 = p__21755;
var map__21887__$1 = ((((!((map__21887 == null)))?((((map__21887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);
var namespace = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21754,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21757 = cljs.core.map.call(null,inst_21756,inst_21735);
var inst_21758 = cljs.core.pr_str.call(null,inst_21757);
var inst_21759 = figwheel.client.utils.log.call(null,inst_21758);
var inst_21760 = (function (){var all_files = inst_21731;
var res_SINGLEQUOTE_ = inst_21734;
var res = inst_21735;
var files_not_loaded = inst_21737;
var dependencies_that_loaded = inst_21739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21754,inst_21756,inst_21757,inst_21758,inst_21759,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21739,inst_21731,inst_21735,inst_21734,inst_21737,inst_21754,inst_21756,inst_21757,inst_21758,inst_21759,state_val_21819,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21761 = setTimeout(inst_21760,(10));
var state_21818__$1 = (function (){var statearr_21889 = state_21818;
(statearr_21889[(33)] = inst_21759);

(statearr_21889[(34)] = inst_21754);

return statearr_21889;
})();
var statearr_21890_21956 = state_21818__$1;
(statearr_21890_21956[(2)] = inst_21761);

(statearr_21890_21956[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (16))){
var state_21818__$1 = state_21818;
var statearr_21891_21957 = state_21818__$1;
(statearr_21891_21957[(2)] = reload_dependents);

(statearr_21891_21957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (38))){
var inst_21771 = (state_21818[(16)]);
var inst_21789 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21771);
var state_21818__$1 = state_21818;
var statearr_21892_21958 = state_21818__$1;
(statearr_21892_21958[(2)] = inst_21789);

(statearr_21892_21958[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (30))){
var state_21818__$1 = state_21818;
var statearr_21893_21959 = state_21818__$1;
(statearr_21893_21959[(2)] = null);

(statearr_21893_21959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (10))){
var inst_21691 = (state_21818[(22)]);
var inst_21693 = cljs.core.chunked_seq_QMARK_.call(null,inst_21691);
var state_21818__$1 = state_21818;
if(inst_21693){
var statearr_21894_21960 = state_21818__$1;
(statearr_21894_21960[(1)] = (13));

} else {
var statearr_21895_21961 = state_21818__$1;
(statearr_21895_21961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (18))){
var inst_21725 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21725)){
var statearr_21896_21962 = state_21818__$1;
(statearr_21896_21962[(1)] = (19));

} else {
var statearr_21897_21963 = state_21818__$1;
(statearr_21897_21963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (42))){
var state_21818__$1 = state_21818;
var statearr_21898_21964 = state_21818__$1;
(statearr_21898_21964[(2)] = null);

(statearr_21898_21964[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (37))){
var inst_21784 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21899_21965 = state_21818__$1;
(statearr_21899_21965[(2)] = inst_21784);

(statearr_21899_21965[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (8))){
var inst_21678 = (state_21818[(7)]);
var inst_21691 = (state_21818[(22)]);
var inst_21691__$1 = cljs.core.seq.call(null,inst_21678);
var state_21818__$1 = (function (){var statearr_21900 = state_21818;
(statearr_21900[(22)] = inst_21691__$1);

return statearr_21900;
})();
if(inst_21691__$1){
var statearr_21901_21966 = state_21818__$1;
(statearr_21901_21966[(1)] = (10));

} else {
var statearr_21902_21967 = state_21818__$1;
(statearr_21902_21967[(1)] = (11));

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
});})(c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20882__auto__,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0 = (function (){
var statearr_21906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21906[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__);

(statearr_21906[(1)] = (1));

return statearr_21906;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1 = (function (state_21818){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21907){if((e21907 instanceof Object)){
var ex__20886__auto__ = e21907;
var statearr_21908_21968 = state_21818;
(statearr_21908_21968[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21969 = state_21818;
state_21818 = G__21969;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20905__auto__ = (function (){var statearr_21909 = f__20904__auto__.call(null);
(statearr_21909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__,map__21663,map__21663__$1,opts,before_jsload,on_jsload,reload_dependents,map__21664,map__21664__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20903__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21972,link){
var map__21975 = p__21972;
var map__21975__$1 = ((((!((map__21975 == null)))?((((map__21975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21975):map__21975);
var file = cljs.core.get.call(null,map__21975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__21975,map__21975__$1,file){
return (function (p1__21970_SHARP_,p2__21971_SHARP_){
if(cljs.core._EQ_.call(null,p1__21970_SHARP_,p2__21971_SHARP_)){
return p1__21970_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__21975,map__21975__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21981){
var map__21982 = p__21981;
var map__21982__$1 = ((((!((map__21982 == null)))?((((map__21982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21982):map__21982);
var match_length = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21977_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21977_SHARP_);
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
var args21984 = [];
var len__19850__auto___21987 = arguments.length;
var i__19851__auto___21988 = (0);
while(true){
if((i__19851__auto___21988 < len__19850__auto___21987)){
args21984.push((arguments[i__19851__auto___21988]));

var G__21989 = (i__19851__auto___21988 + (1));
i__19851__auto___21988 = G__21989;
continue;
} else {
}
break;
}

var G__21986 = args21984.length;
switch (G__21986) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21984.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21991_SHARP_,p2__21992_SHARP_){
return cljs.core.assoc.call(null,p1__21991_SHARP_,cljs.core.get.call(null,p2__21992_SHARP_,key),p2__21992_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21993){
var map__21996 = p__21993;
var map__21996__$1 = ((((!((map__21996 == null)))?((((map__21996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21996):map__21996);
var f_data = map__21996__$1;
var file = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21998,files_msg){
var map__22005 = p__21998;
var map__22005__$1 = ((((!((map__22005 == null)))?((((map__22005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22005):map__22005);
var opts = map__22005__$1;
var on_cssload = cljs.core.get.call(null,map__22005__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22007_22011 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22008_22012 = null;
var count__22009_22013 = (0);
var i__22010_22014 = (0);
while(true){
if((i__22010_22014 < count__22009_22013)){
var f_22015 = cljs.core._nth.call(null,chunk__22008_22012,i__22010_22014);
figwheel.client.file_reloading.reload_css_file.call(null,f_22015);

var G__22016 = seq__22007_22011;
var G__22017 = chunk__22008_22012;
var G__22018 = count__22009_22013;
var G__22019 = (i__22010_22014 + (1));
seq__22007_22011 = G__22016;
chunk__22008_22012 = G__22017;
count__22009_22013 = G__22018;
i__22010_22014 = G__22019;
continue;
} else {
var temp__4657__auto___22020 = cljs.core.seq.call(null,seq__22007_22011);
if(temp__4657__auto___22020){
var seq__22007_22021__$1 = temp__4657__auto___22020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22007_22021__$1)){
var c__19556__auto___22022 = cljs.core.chunk_first.call(null,seq__22007_22021__$1);
var G__22023 = cljs.core.chunk_rest.call(null,seq__22007_22021__$1);
var G__22024 = c__19556__auto___22022;
var G__22025 = cljs.core.count.call(null,c__19556__auto___22022);
var G__22026 = (0);
seq__22007_22011 = G__22023;
chunk__22008_22012 = G__22024;
count__22009_22013 = G__22025;
i__22010_22014 = G__22026;
continue;
} else {
var f_22027 = cljs.core.first.call(null,seq__22007_22021__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22027);

var G__22028 = cljs.core.next.call(null,seq__22007_22021__$1);
var G__22029 = null;
var G__22030 = (0);
var G__22031 = (0);
seq__22007_22011 = G__22028;
chunk__22008_22012 = G__22029;
count__22009_22013 = G__22030;
i__22010_22014 = G__22031;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22005,map__22005__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22005,map__22005__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478625919860