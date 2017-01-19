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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28330_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28330_SHARP_));
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
var seq__28335 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28336 = null;
var count__28337 = (0);
var i__28338 = (0);
while(true){
if((i__28338 < count__28337)){
var n = cljs.core._nth.call(null,chunk__28336,i__28338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28339 = seq__28335;
var G__28340 = chunk__28336;
var G__28341 = count__28337;
var G__28342 = (i__28338 + (1));
seq__28335 = G__28339;
chunk__28336 = G__28340;
count__28337 = G__28341;
i__28338 = G__28342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28335);
if(temp__4657__auto__){
var seq__28335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28335__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__28335__$1);
var G__28343 = cljs.core.chunk_rest.call(null,seq__28335__$1);
var G__28344 = c__19570__auto__;
var G__28345 = cljs.core.count.call(null,c__19570__auto__);
var G__28346 = (0);
seq__28335 = G__28343;
chunk__28336 = G__28344;
count__28337 = G__28345;
i__28338 = G__28346;
continue;
} else {
var n = cljs.core.first.call(null,seq__28335__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28347 = cljs.core.next.call(null,seq__28335__$1);
var G__28348 = null;
var G__28349 = (0);
var G__28350 = (0);
seq__28335 = G__28347;
chunk__28336 = G__28348;
count__28337 = G__28349;
i__28338 = G__28350;
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

var seq__28401_28412 = cljs.core.seq.call(null,deps);
var chunk__28402_28413 = null;
var count__28403_28414 = (0);
var i__28404_28415 = (0);
while(true){
if((i__28404_28415 < count__28403_28414)){
var dep_28416 = cljs.core._nth.call(null,chunk__28402_28413,i__28404_28415);
topo_sort_helper_STAR_.call(null,dep_28416,(depth + (1)),state);

var G__28417 = seq__28401_28412;
var G__28418 = chunk__28402_28413;
var G__28419 = count__28403_28414;
var G__28420 = (i__28404_28415 + (1));
seq__28401_28412 = G__28417;
chunk__28402_28413 = G__28418;
count__28403_28414 = G__28419;
i__28404_28415 = G__28420;
continue;
} else {
var temp__4657__auto___28421 = cljs.core.seq.call(null,seq__28401_28412);
if(temp__4657__auto___28421){
var seq__28401_28422__$1 = temp__4657__auto___28421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28401_28422__$1)){
var c__19570__auto___28423 = cljs.core.chunk_first.call(null,seq__28401_28422__$1);
var G__28424 = cljs.core.chunk_rest.call(null,seq__28401_28422__$1);
var G__28425 = c__19570__auto___28423;
var G__28426 = cljs.core.count.call(null,c__19570__auto___28423);
var G__28427 = (0);
seq__28401_28412 = G__28424;
chunk__28402_28413 = G__28425;
count__28403_28414 = G__28426;
i__28404_28415 = G__28427;
continue;
} else {
var dep_28428 = cljs.core.first.call(null,seq__28401_28422__$1);
topo_sort_helper_STAR_.call(null,dep_28428,(depth + (1)),state);

var G__28429 = cljs.core.next.call(null,seq__28401_28422__$1);
var G__28430 = null;
var G__28431 = (0);
var G__28432 = (0);
seq__28401_28412 = G__28429;
chunk__28402_28413 = G__28430;
count__28403_28414 = G__28431;
i__28404_28415 = G__28432;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28405){
var vec__28409 = p__28405;
var seq__28410 = cljs.core.seq.call(null,vec__28409);
var first__28411 = cljs.core.first.call(null,seq__28410);
var seq__28410__$1 = cljs.core.next.call(null,seq__28410);
var x = first__28411;
var xs = seq__28410__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28409,seq__28410,first__28411,seq__28410__$1,x,xs,get_deps__$1){
return (function (p1__28351_SHARP_){
return clojure.set.difference.call(null,p1__28351_SHARP_,x);
});})(vec__28409,seq__28410,first__28411,seq__28410__$1,x,xs,get_deps__$1))
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
var seq__28445 = cljs.core.seq.call(null,provides);
var chunk__28446 = null;
var count__28447 = (0);
var i__28448 = (0);
while(true){
if((i__28448 < count__28447)){
var prov = cljs.core._nth.call(null,chunk__28446,i__28448);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28449_28457 = cljs.core.seq.call(null,requires);
var chunk__28450_28458 = null;
var count__28451_28459 = (0);
var i__28452_28460 = (0);
while(true){
if((i__28452_28460 < count__28451_28459)){
var req_28461 = cljs.core._nth.call(null,chunk__28450_28458,i__28452_28460);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28461,prov);

var G__28462 = seq__28449_28457;
var G__28463 = chunk__28450_28458;
var G__28464 = count__28451_28459;
var G__28465 = (i__28452_28460 + (1));
seq__28449_28457 = G__28462;
chunk__28450_28458 = G__28463;
count__28451_28459 = G__28464;
i__28452_28460 = G__28465;
continue;
} else {
var temp__4657__auto___28466 = cljs.core.seq.call(null,seq__28449_28457);
if(temp__4657__auto___28466){
var seq__28449_28467__$1 = temp__4657__auto___28466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28449_28467__$1)){
var c__19570__auto___28468 = cljs.core.chunk_first.call(null,seq__28449_28467__$1);
var G__28469 = cljs.core.chunk_rest.call(null,seq__28449_28467__$1);
var G__28470 = c__19570__auto___28468;
var G__28471 = cljs.core.count.call(null,c__19570__auto___28468);
var G__28472 = (0);
seq__28449_28457 = G__28469;
chunk__28450_28458 = G__28470;
count__28451_28459 = G__28471;
i__28452_28460 = G__28472;
continue;
} else {
var req_28473 = cljs.core.first.call(null,seq__28449_28467__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28473,prov);

var G__28474 = cljs.core.next.call(null,seq__28449_28467__$1);
var G__28475 = null;
var G__28476 = (0);
var G__28477 = (0);
seq__28449_28457 = G__28474;
chunk__28450_28458 = G__28475;
count__28451_28459 = G__28476;
i__28452_28460 = G__28477;
continue;
}
} else {
}
}
break;
}

var G__28478 = seq__28445;
var G__28479 = chunk__28446;
var G__28480 = count__28447;
var G__28481 = (i__28448 + (1));
seq__28445 = G__28478;
chunk__28446 = G__28479;
count__28447 = G__28480;
i__28448 = G__28481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28445);
if(temp__4657__auto__){
var seq__28445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28445__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__28445__$1);
var G__28482 = cljs.core.chunk_rest.call(null,seq__28445__$1);
var G__28483 = c__19570__auto__;
var G__28484 = cljs.core.count.call(null,c__19570__auto__);
var G__28485 = (0);
seq__28445 = G__28482;
chunk__28446 = G__28483;
count__28447 = G__28484;
i__28448 = G__28485;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28445__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28453_28486 = cljs.core.seq.call(null,requires);
var chunk__28454_28487 = null;
var count__28455_28488 = (0);
var i__28456_28489 = (0);
while(true){
if((i__28456_28489 < count__28455_28488)){
var req_28490 = cljs.core._nth.call(null,chunk__28454_28487,i__28456_28489);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28490,prov);

var G__28491 = seq__28453_28486;
var G__28492 = chunk__28454_28487;
var G__28493 = count__28455_28488;
var G__28494 = (i__28456_28489 + (1));
seq__28453_28486 = G__28491;
chunk__28454_28487 = G__28492;
count__28455_28488 = G__28493;
i__28456_28489 = G__28494;
continue;
} else {
var temp__4657__auto___28495__$1 = cljs.core.seq.call(null,seq__28453_28486);
if(temp__4657__auto___28495__$1){
var seq__28453_28496__$1 = temp__4657__auto___28495__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28453_28496__$1)){
var c__19570__auto___28497 = cljs.core.chunk_first.call(null,seq__28453_28496__$1);
var G__28498 = cljs.core.chunk_rest.call(null,seq__28453_28496__$1);
var G__28499 = c__19570__auto___28497;
var G__28500 = cljs.core.count.call(null,c__19570__auto___28497);
var G__28501 = (0);
seq__28453_28486 = G__28498;
chunk__28454_28487 = G__28499;
count__28455_28488 = G__28500;
i__28456_28489 = G__28501;
continue;
} else {
var req_28502 = cljs.core.first.call(null,seq__28453_28496__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28502,prov);

var G__28503 = cljs.core.next.call(null,seq__28453_28496__$1);
var G__28504 = null;
var G__28505 = (0);
var G__28506 = (0);
seq__28453_28486 = G__28503;
chunk__28454_28487 = G__28504;
count__28455_28488 = G__28505;
i__28456_28489 = G__28506;
continue;
}
} else {
}
}
break;
}

var G__28507 = cljs.core.next.call(null,seq__28445__$1);
var G__28508 = null;
var G__28509 = (0);
var G__28510 = (0);
seq__28445 = G__28507;
chunk__28446 = G__28508;
count__28447 = G__28509;
i__28448 = G__28510;
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
var seq__28515_28519 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28516_28520 = null;
var count__28517_28521 = (0);
var i__28518_28522 = (0);
while(true){
if((i__28518_28522 < count__28517_28521)){
var ns_28523 = cljs.core._nth.call(null,chunk__28516_28520,i__28518_28522);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28523);

var G__28524 = seq__28515_28519;
var G__28525 = chunk__28516_28520;
var G__28526 = count__28517_28521;
var G__28527 = (i__28518_28522 + (1));
seq__28515_28519 = G__28524;
chunk__28516_28520 = G__28525;
count__28517_28521 = G__28526;
i__28518_28522 = G__28527;
continue;
} else {
var temp__4657__auto___28528 = cljs.core.seq.call(null,seq__28515_28519);
if(temp__4657__auto___28528){
var seq__28515_28529__$1 = temp__4657__auto___28528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28515_28529__$1)){
var c__19570__auto___28530 = cljs.core.chunk_first.call(null,seq__28515_28529__$1);
var G__28531 = cljs.core.chunk_rest.call(null,seq__28515_28529__$1);
var G__28532 = c__19570__auto___28530;
var G__28533 = cljs.core.count.call(null,c__19570__auto___28530);
var G__28534 = (0);
seq__28515_28519 = G__28531;
chunk__28516_28520 = G__28532;
count__28517_28521 = G__28533;
i__28518_28522 = G__28534;
continue;
} else {
var ns_28535 = cljs.core.first.call(null,seq__28515_28529__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28535);

var G__28536 = cljs.core.next.call(null,seq__28515_28529__$1);
var G__28537 = null;
var G__28538 = (0);
var G__28539 = (0);
seq__28515_28519 = G__28536;
chunk__28516_28520 = G__28537;
count__28517_28521 = G__28538;
i__28518_28522 = G__28539;
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
var G__28540__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28541__i = 0, G__28541__a = new Array(arguments.length -  0);
while (G__28541__i < G__28541__a.length) {G__28541__a[G__28541__i] = arguments[G__28541__i + 0]; ++G__28541__i;}
  args = new cljs.core.IndexedSeq(G__28541__a,0);
} 
return G__28540__delegate.call(this,args);};
G__28540.cljs$lang$maxFixedArity = 0;
G__28540.cljs$lang$applyTo = (function (arglist__28542){
var args = cljs.core.seq(arglist__28542);
return G__28540__delegate(args);
});
G__28540.cljs$core$IFn$_invoke$arity$variadic = G__28540__delegate;
return G__28540;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28544 = cljs.core._EQ_;
var expr__28545 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28544.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28545))){
var path_parts = ((function (pred__28544,expr__28545){
return (function (p1__28543_SHARP_){
return clojure.string.split.call(null,p1__28543_SHARP_,/[\/\\]/);
});})(pred__28544,expr__28545))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28544,expr__28545){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28547){if((e28547 instanceof Error)){
var e = e28547;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28547;

}
}})());
});
;})(path_parts,sep,root,pred__28544,expr__28545))
} else {
if(cljs.core.truth_(pred__28544.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28545))){
return ((function (pred__28544,expr__28545){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28544,expr__28545){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28544,expr__28545))
);

return deferred.addErrback(((function (deferred,pred__28544,expr__28545){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28544,expr__28545))
);
});
;})(pred__28544,expr__28545))
} else {
return ((function (pred__28544,expr__28545){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28544,expr__28545))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28548,callback){
var map__28551 = p__28548;
var map__28551__$1 = ((((!((map__28551 == null)))?((((map__28551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);
var file_msg = map__28551__$1;
var request_url = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28551,map__28551__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28551,map__28551__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_28575){
var state_val_28576 = (state_28575[(1)]);
if((state_val_28576 === (7))){
var inst_28571 = (state_28575[(2)]);
var state_28575__$1 = state_28575;
var statearr_28577_28597 = state_28575__$1;
(statearr_28577_28597[(2)] = inst_28571);

(statearr_28577_28597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (1))){
var state_28575__$1 = state_28575;
var statearr_28578_28598 = state_28575__$1;
(statearr_28578_28598[(2)] = null);

(statearr_28578_28598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (4))){
var inst_28555 = (state_28575[(7)]);
var inst_28555__$1 = (state_28575[(2)]);
var state_28575__$1 = (function (){var statearr_28579 = state_28575;
(statearr_28579[(7)] = inst_28555__$1);

return statearr_28579;
})();
if(cljs.core.truth_(inst_28555__$1)){
var statearr_28580_28599 = state_28575__$1;
(statearr_28580_28599[(1)] = (5));

} else {
var statearr_28581_28600 = state_28575__$1;
(statearr_28581_28600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (6))){
var state_28575__$1 = state_28575;
var statearr_28582_28601 = state_28575__$1;
(statearr_28582_28601[(2)] = null);

(statearr_28582_28601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (3))){
var inst_28573 = (state_28575[(2)]);
var state_28575__$1 = state_28575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28575__$1,inst_28573);
} else {
if((state_val_28576 === (2))){
var state_28575__$1 = state_28575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28575__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28576 === (11))){
var inst_28567 = (state_28575[(2)]);
var state_28575__$1 = (function (){var statearr_28583 = state_28575;
(statearr_28583[(8)] = inst_28567);

return statearr_28583;
})();
var statearr_28584_28602 = state_28575__$1;
(statearr_28584_28602[(2)] = null);

(statearr_28584_28602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (9))){
var inst_28559 = (state_28575[(9)]);
var inst_28561 = (state_28575[(10)]);
var inst_28563 = inst_28561.call(null,inst_28559);
var state_28575__$1 = state_28575;
var statearr_28585_28603 = state_28575__$1;
(statearr_28585_28603[(2)] = inst_28563);

(statearr_28585_28603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (5))){
var inst_28555 = (state_28575[(7)]);
var inst_28557 = figwheel.client.file_reloading.blocking_load.call(null,inst_28555);
var state_28575__$1 = state_28575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28575__$1,(8),inst_28557);
} else {
if((state_val_28576 === (10))){
var inst_28559 = (state_28575[(9)]);
var inst_28565 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28559);
var state_28575__$1 = state_28575;
var statearr_28586_28604 = state_28575__$1;
(statearr_28586_28604[(2)] = inst_28565);

(statearr_28586_28604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28576 === (8))){
var inst_28555 = (state_28575[(7)]);
var inst_28561 = (state_28575[(10)]);
var inst_28559 = (state_28575[(2)]);
var inst_28560 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28561__$1 = cljs.core.get.call(null,inst_28560,inst_28555);
var state_28575__$1 = (function (){var statearr_28587 = state_28575;
(statearr_28587[(9)] = inst_28559);

(statearr_28587[(10)] = inst_28561__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28561__$1)){
var statearr_28588_28605 = state_28575__$1;
(statearr_28588_28605[(1)] = (9));

} else {
var statearr_28589_28606 = state_28575__$1;
(statearr_28589_28606[(1)] = (10));

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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21282__auto__ = null;
var figwheel$client$file_reloading$state_machine__21282__auto____0 = (function (){
var statearr_28593 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28593[(0)] = figwheel$client$file_reloading$state_machine__21282__auto__);

(statearr_28593[(1)] = (1));

return statearr_28593;
});
var figwheel$client$file_reloading$state_machine__21282__auto____1 = (function (state_28575){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_28575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e28594){if((e28594 instanceof Object)){
var ex__21285__auto__ = e28594;
var statearr_28595_28607 = state_28575;
(statearr_28595_28607[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28608 = state_28575;
state_28575 = G__28608;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21282__auto__ = function(state_28575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21282__auto____1.call(this,state_28575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21282__auto____0;
figwheel$client$file_reloading$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21282__auto____1;
return figwheel$client$file_reloading$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_28596 = f__21297__auto__.call(null);
(statearr_28596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_28596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28609,callback){
var map__28612 = p__28609;
var map__28612__$1 = ((((!((map__28612 == null)))?((((map__28612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);
var file_msg = map__28612__$1;
var namespace = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28612,map__28612__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28612,map__28612__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28614){
var map__28617 = p__28614;
var map__28617__$1 = ((((!((map__28617 == null)))?((((map__28617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28617):map__28617);
var file_msg = map__28617__$1;
var namespace = cljs.core.get.call(null,map__28617__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28619,callback){
var map__28622 = p__28619;
var map__28622__$1 = ((((!((map__28622 == null)))?((((map__28622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28622):map__28622);
var file_msg = map__28622__$1;
var request_url = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21296__auto___28726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___28726,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___28726,out){
return (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (1))){
var inst_28682 = cljs.core.seq.call(null,files);
var inst_28683 = cljs.core.first.call(null,inst_28682);
var inst_28684 = cljs.core.next.call(null,inst_28682);
var inst_28685 = files;
var state_28708__$1 = (function (){var statearr_28710 = state_28708;
(statearr_28710[(7)] = inst_28685);

(statearr_28710[(8)] = inst_28684);

(statearr_28710[(9)] = inst_28683);

return statearr_28710;
})();
var statearr_28711_28727 = state_28708__$1;
(statearr_28711_28727[(2)] = null);

(statearr_28711_28727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (2))){
var inst_28691 = (state_28708[(10)]);
var inst_28685 = (state_28708[(7)]);
var inst_28690 = cljs.core.seq.call(null,inst_28685);
var inst_28691__$1 = cljs.core.first.call(null,inst_28690);
var inst_28692 = cljs.core.next.call(null,inst_28690);
var inst_28693 = (inst_28691__$1 == null);
var inst_28694 = cljs.core.not.call(null,inst_28693);
var state_28708__$1 = (function (){var statearr_28712 = state_28708;
(statearr_28712[(10)] = inst_28691__$1);

(statearr_28712[(11)] = inst_28692);

return statearr_28712;
})();
if(inst_28694){
var statearr_28713_28728 = state_28708__$1;
(statearr_28713_28728[(1)] = (4));

} else {
var statearr_28714_28729 = state_28708__$1;
(statearr_28714_28729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (4))){
var inst_28691 = (state_28708[(10)]);
var inst_28696 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28691);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(7),inst_28696);
} else {
if((state_val_28709 === (5))){
var inst_28702 = cljs.core.async.close_BANG_.call(null,out);
var state_28708__$1 = state_28708;
var statearr_28715_28730 = state_28708__$1;
(statearr_28715_28730[(2)] = inst_28702);

(statearr_28715_28730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (6))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28716_28731 = state_28708__$1;
(statearr_28716_28731[(2)] = inst_28704);

(statearr_28716_28731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (7))){
var inst_28692 = (state_28708[(11)]);
var inst_28698 = (state_28708[(2)]);
var inst_28699 = cljs.core.async.put_BANG_.call(null,out,inst_28698);
var inst_28685 = inst_28692;
var state_28708__$1 = (function (){var statearr_28717 = state_28708;
(statearr_28717[(12)] = inst_28699);

(statearr_28717[(7)] = inst_28685);

return statearr_28717;
})();
var statearr_28718_28732 = state_28708__$1;
(statearr_28718_28732[(2)] = null);

(statearr_28718_28732[(1)] = (2));


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
});})(c__21296__auto___28726,out))
;
return ((function (switch__21281__auto__,c__21296__auto___28726,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____0 = (function (){
var statearr_28722 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28722[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__);

(statearr_28722[(1)] = (1));

return statearr_28722;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____1 = (function (state_28708){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_28708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e28723){if((e28723 instanceof Object)){
var ex__21285__auto__ = e28723;
var statearr_28724_28733 = state_28708;
(statearr_28724_28733[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28734 = state_28708;
state_28708 = G__28734;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___28726,out))
})();
var state__21298__auto__ = (function (){var statearr_28725 = f__21297__auto__.call(null);
(statearr_28725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___28726);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___28726,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28735,opts){
var map__28739 = p__28735;
var map__28739__$1 = ((((!((map__28739 == null)))?((((map__28739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28739):map__28739);
var eval_body = cljs.core.get.call(null,map__28739__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28741){var e = e28741;
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
return (function (p1__28742_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28742_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28751){
var vec__28752 = p__28751;
var k = cljs.core.nth.call(null,vec__28752,(0),null);
var v = cljs.core.nth.call(null,vec__28752,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28755){
var vec__28756 = p__28755;
var k = cljs.core.nth.call(null,vec__28756,(0),null);
var v = cljs.core.nth.call(null,vec__28756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28762,p__28763){
var map__29011 = p__28762;
var map__29011__$1 = ((((!((map__29011 == null)))?((((map__29011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29011):map__29011);
var opts = map__29011__$1;
var before_jsload = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29011__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29012 = p__28763;
var map__29012__$1 = ((((!((map__29012 == null)))?((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var msg = map__29012__$1;
var files = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (7))){
var inst_29029 = (state_29166[(7)]);
var inst_29027 = (state_29166[(8)]);
var inst_29026 = (state_29166[(9)]);
var inst_29028 = (state_29166[(10)]);
var inst_29034 = cljs.core._nth.call(null,inst_29027,inst_29029);
var inst_29035 = figwheel.client.file_reloading.eval_body.call(null,inst_29034,opts);
var inst_29036 = (inst_29029 + (1));
var tmp29168 = inst_29027;
var tmp29169 = inst_29026;
var tmp29170 = inst_29028;
var inst_29026__$1 = tmp29169;
var inst_29027__$1 = tmp29168;
var inst_29028__$1 = tmp29170;
var inst_29029__$1 = inst_29036;
var state_29166__$1 = (function (){var statearr_29171 = state_29166;
(statearr_29171[(7)] = inst_29029__$1);

(statearr_29171[(11)] = inst_29035);

(statearr_29171[(8)] = inst_29027__$1);

(statearr_29171[(9)] = inst_29026__$1);

(statearr_29171[(10)] = inst_29028__$1);

return statearr_29171;
})();
var statearr_29172_29258 = state_29166__$1;
(statearr_29172_29258[(2)] = null);

(statearr_29172_29258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (20))){
var inst_29069 = (state_29166[(12)]);
var inst_29077 = figwheel.client.file_reloading.sort_files.call(null,inst_29069);
var state_29166__$1 = state_29166;
var statearr_29173_29259 = state_29166__$1;
(statearr_29173_29259[(2)] = inst_29077);

(statearr_29173_29259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (27))){
var state_29166__$1 = state_29166;
var statearr_29174_29260 = state_29166__$1;
(statearr_29174_29260[(2)] = null);

(statearr_29174_29260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (1))){
var inst_29018 = (state_29166[(13)]);
var inst_29015 = before_jsload.call(null,files);
var inst_29016 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29017 = (function (){return ((function (inst_29018,inst_29015,inst_29016,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28759_SHARP_);
});
;})(inst_29018,inst_29015,inst_29016,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29018__$1 = cljs.core.filter.call(null,inst_29017,files);
var inst_29019 = cljs.core.not_empty.call(null,inst_29018__$1);
var state_29166__$1 = (function (){var statearr_29175 = state_29166;
(statearr_29175[(13)] = inst_29018__$1);

(statearr_29175[(14)] = inst_29015);

(statearr_29175[(15)] = inst_29016);

return statearr_29175;
})();
if(cljs.core.truth_(inst_29019)){
var statearr_29176_29261 = state_29166__$1;
(statearr_29176_29261[(1)] = (2));

} else {
var statearr_29177_29262 = state_29166__$1;
(statearr_29177_29262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (24))){
var state_29166__$1 = state_29166;
var statearr_29178_29263 = state_29166__$1;
(statearr_29178_29263[(2)] = null);

(statearr_29178_29263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (39))){
var inst_29119 = (state_29166[(16)]);
var state_29166__$1 = state_29166;
var statearr_29179_29264 = state_29166__$1;
(statearr_29179_29264[(2)] = inst_29119);

(statearr_29179_29264[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (46))){
var inst_29161 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29180_29265 = state_29166__$1;
(statearr_29180_29265[(2)] = inst_29161);

(statearr_29180_29265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (4))){
var inst_29063 = (state_29166[(2)]);
var inst_29064 = cljs.core.List.EMPTY;
var inst_29065 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29064);
var inst_29066 = (function (){return ((function (inst_29063,inst_29064,inst_29065,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28760_SHARP_){
var and__18744__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28760_SHARP_);
if(cljs.core.truth_(and__18744__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28760_SHARP_));
} else {
return and__18744__auto__;
}
});
;})(inst_29063,inst_29064,inst_29065,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29067 = cljs.core.filter.call(null,inst_29066,files);
var inst_29068 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29069 = cljs.core.concat.call(null,inst_29067,inst_29068);
var state_29166__$1 = (function (){var statearr_29181 = state_29166;
(statearr_29181[(17)] = inst_29065);

(statearr_29181[(12)] = inst_29069);

(statearr_29181[(18)] = inst_29063);

return statearr_29181;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29182_29266 = state_29166__$1;
(statearr_29182_29266[(1)] = (16));

} else {
var statearr_29183_29267 = state_29166__$1;
(statearr_29183_29267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (15))){
var inst_29053 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29184_29268 = state_29166__$1;
(statearr_29184_29268[(2)] = inst_29053);

(statearr_29184_29268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (21))){
var inst_29079 = (state_29166[(19)]);
var inst_29079__$1 = (state_29166[(2)]);
var inst_29080 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29079__$1);
var state_29166__$1 = (function (){var statearr_29185 = state_29166;
(statearr_29185[(19)] = inst_29079__$1);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,(22),inst_29080);
} else {
if((state_val_29167 === (31))){
var inst_29164 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else {
if((state_val_29167 === (32))){
var inst_29119 = (state_29166[(16)]);
var inst_29124 = inst_29119.cljs$lang$protocol_mask$partition0$;
var inst_29125 = (inst_29124 & (64));
var inst_29126 = inst_29119.cljs$core$ISeq$;
var inst_29127 = (cljs.core.PROTOCOL_SENTINEL === inst_29126);
var inst_29128 = (inst_29125) || (inst_29127);
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29128)){
var statearr_29186_29269 = state_29166__$1;
(statearr_29186_29269[(1)] = (35));

} else {
var statearr_29187_29270 = state_29166__$1;
(statearr_29187_29270[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (40))){
var inst_29141 = (state_29166[(20)]);
var inst_29140 = (state_29166[(2)]);
var inst_29141__$1 = cljs.core.get.call(null,inst_29140,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29142 = cljs.core.get.call(null,inst_29140,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29143 = cljs.core.not_empty.call(null,inst_29141__$1);
var state_29166__$1 = (function (){var statearr_29188 = state_29166;
(statearr_29188[(20)] = inst_29141__$1);

(statearr_29188[(21)] = inst_29142);

return statearr_29188;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29189_29271 = state_29166__$1;
(statearr_29189_29271[(1)] = (41));

} else {
var statearr_29190_29272 = state_29166__$1;
(statearr_29190_29272[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (33))){
var state_29166__$1 = state_29166;
var statearr_29191_29273 = state_29166__$1;
(statearr_29191_29273[(2)] = false);

(statearr_29191_29273[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (13))){
var inst_29039 = (state_29166[(22)]);
var inst_29043 = cljs.core.chunk_first.call(null,inst_29039);
var inst_29044 = cljs.core.chunk_rest.call(null,inst_29039);
var inst_29045 = cljs.core.count.call(null,inst_29043);
var inst_29026 = inst_29044;
var inst_29027 = inst_29043;
var inst_29028 = inst_29045;
var inst_29029 = (0);
var state_29166__$1 = (function (){var statearr_29192 = state_29166;
(statearr_29192[(7)] = inst_29029);

(statearr_29192[(8)] = inst_29027);

(statearr_29192[(9)] = inst_29026);

(statearr_29192[(10)] = inst_29028);

return statearr_29192;
})();
var statearr_29193_29274 = state_29166__$1;
(statearr_29193_29274[(2)] = null);

(statearr_29193_29274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (22))){
var inst_29083 = (state_29166[(23)]);
var inst_29082 = (state_29166[(24)]);
var inst_29087 = (state_29166[(25)]);
var inst_29079 = (state_29166[(19)]);
var inst_29082__$1 = (state_29166[(2)]);
var inst_29083__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29082__$1);
var inst_29084 = (function (){var all_files = inst_29079;
var res_SINGLEQUOTE_ = inst_29082__$1;
var res = inst_29083__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29083,inst_29082,inst_29087,inst_29079,inst_29082__$1,inst_29083__$1,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29083,inst_29082,inst_29087,inst_29079,inst_29082__$1,inst_29083__$1,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29085 = cljs.core.filter.call(null,inst_29084,inst_29082__$1);
var inst_29086 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29087__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29086);
var inst_29088 = cljs.core.not_empty.call(null,inst_29087__$1);
var state_29166__$1 = (function (){var statearr_29194 = state_29166;
(statearr_29194[(23)] = inst_29083__$1);

(statearr_29194[(24)] = inst_29082__$1);

(statearr_29194[(26)] = inst_29085);

(statearr_29194[(25)] = inst_29087__$1);

return statearr_29194;
})();
if(cljs.core.truth_(inst_29088)){
var statearr_29195_29275 = state_29166__$1;
(statearr_29195_29275[(1)] = (23));

} else {
var statearr_29196_29276 = state_29166__$1;
(statearr_29196_29276[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (36))){
var state_29166__$1 = state_29166;
var statearr_29197_29277 = state_29166__$1;
(statearr_29197_29277[(2)] = false);

(statearr_29197_29277[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (41))){
var inst_29141 = (state_29166[(20)]);
var inst_29145 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29146 = cljs.core.map.call(null,inst_29145,inst_29141);
var inst_29147 = cljs.core.pr_str.call(null,inst_29146);
var inst_29148 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29147)].join('');
var inst_29149 = figwheel.client.utils.log.call(null,inst_29148);
var state_29166__$1 = state_29166;
var statearr_29198_29278 = state_29166__$1;
(statearr_29198_29278[(2)] = inst_29149);

(statearr_29198_29278[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (43))){
var inst_29142 = (state_29166[(21)]);
var inst_29152 = (state_29166[(2)]);
var inst_29153 = cljs.core.not_empty.call(null,inst_29142);
var state_29166__$1 = (function (){var statearr_29199 = state_29166;
(statearr_29199[(27)] = inst_29152);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29153)){
var statearr_29200_29279 = state_29166__$1;
(statearr_29200_29279[(1)] = (44));

} else {
var statearr_29201_29280 = state_29166__$1;
(statearr_29201_29280[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (29))){
var inst_29083 = (state_29166[(23)]);
var inst_29119 = (state_29166[(16)]);
var inst_29082 = (state_29166[(24)]);
var inst_29085 = (state_29166[(26)]);
var inst_29087 = (state_29166[(25)]);
var inst_29079 = (state_29166[(19)]);
var inst_29115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29118 = (function (){var all_files = inst_29079;
var res_SINGLEQUOTE_ = inst_29082;
var res = inst_29083;
var files_not_loaded = inst_29085;
var dependencies_that_loaded = inst_29087;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29119,inst_29082,inst_29085,inst_29087,inst_29079,inst_29115,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29117){
var map__29202 = p__29117;
var map__29202__$1 = ((((!((map__29202 == null)))?((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var namespace = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29119,inst_29082,inst_29085,inst_29087,inst_29079,inst_29115,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29119__$1 = cljs.core.group_by.call(null,inst_29118,inst_29085);
var inst_29121 = (inst_29119__$1 == null);
var inst_29122 = cljs.core.not.call(null,inst_29121);
var state_29166__$1 = (function (){var statearr_29204 = state_29166;
(statearr_29204[(16)] = inst_29119__$1);

(statearr_29204[(28)] = inst_29115);

return statearr_29204;
})();
if(inst_29122){
var statearr_29205_29281 = state_29166__$1;
(statearr_29205_29281[(1)] = (32));

} else {
var statearr_29206_29282 = state_29166__$1;
(statearr_29206_29282[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (44))){
var inst_29142 = (state_29166[(21)]);
var inst_29155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29142);
var inst_29156 = cljs.core.pr_str.call(null,inst_29155);
var inst_29157 = [cljs.core.str("not required: "),cljs.core.str(inst_29156)].join('');
var inst_29158 = figwheel.client.utils.log.call(null,inst_29157);
var state_29166__$1 = state_29166;
var statearr_29207_29283 = state_29166__$1;
(statearr_29207_29283[(2)] = inst_29158);

(statearr_29207_29283[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (6))){
var inst_29060 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29208_29284 = state_29166__$1;
(statearr_29208_29284[(2)] = inst_29060);

(statearr_29208_29284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (28))){
var inst_29085 = (state_29166[(26)]);
var inst_29112 = (state_29166[(2)]);
var inst_29113 = cljs.core.not_empty.call(null,inst_29085);
var state_29166__$1 = (function (){var statearr_29209 = state_29166;
(statearr_29209[(29)] = inst_29112);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29113)){
var statearr_29210_29285 = state_29166__$1;
(statearr_29210_29285[(1)] = (29));

} else {
var statearr_29211_29286 = state_29166__$1;
(statearr_29211_29286[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (25))){
var inst_29083 = (state_29166[(23)]);
var inst_29099 = (state_29166[(2)]);
var inst_29100 = cljs.core.not_empty.call(null,inst_29083);
var state_29166__$1 = (function (){var statearr_29212 = state_29166;
(statearr_29212[(30)] = inst_29099);

return statearr_29212;
})();
if(cljs.core.truth_(inst_29100)){
var statearr_29213_29287 = state_29166__$1;
(statearr_29213_29287[(1)] = (26));

} else {
var statearr_29214_29288 = state_29166__$1;
(statearr_29214_29288[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (34))){
var inst_29135 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29135)){
var statearr_29215_29289 = state_29166__$1;
(statearr_29215_29289[(1)] = (38));

} else {
var statearr_29216_29290 = state_29166__$1;
(statearr_29216_29290[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (17))){
var state_29166__$1 = state_29166;
var statearr_29217_29291 = state_29166__$1;
(statearr_29217_29291[(2)] = recompile_dependents);

(statearr_29217_29291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (3))){
var state_29166__$1 = state_29166;
var statearr_29218_29292 = state_29166__$1;
(statearr_29218_29292[(2)] = null);

(statearr_29218_29292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (12))){
var inst_29056 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29219_29293 = state_29166__$1;
(statearr_29219_29293[(2)] = inst_29056);

(statearr_29219_29293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (2))){
var inst_29018 = (state_29166[(13)]);
var inst_29025 = cljs.core.seq.call(null,inst_29018);
var inst_29026 = inst_29025;
var inst_29027 = null;
var inst_29028 = (0);
var inst_29029 = (0);
var state_29166__$1 = (function (){var statearr_29220 = state_29166;
(statearr_29220[(7)] = inst_29029);

(statearr_29220[(8)] = inst_29027);

(statearr_29220[(9)] = inst_29026);

(statearr_29220[(10)] = inst_29028);

return statearr_29220;
})();
var statearr_29221_29294 = state_29166__$1;
(statearr_29221_29294[(2)] = null);

(statearr_29221_29294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (23))){
var inst_29083 = (state_29166[(23)]);
var inst_29082 = (state_29166[(24)]);
var inst_29085 = (state_29166[(26)]);
var inst_29087 = (state_29166[(25)]);
var inst_29079 = (state_29166[(19)]);
var inst_29090 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29092 = (function (){var all_files = inst_29079;
var res_SINGLEQUOTE_ = inst_29082;
var res = inst_29083;
var files_not_loaded = inst_29085;
var dependencies_that_loaded = inst_29087;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29090,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29091){
var map__29222 = p__29091;
var map__29222__$1 = ((((!((map__29222 == null)))?((((map__29222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29222):map__29222);
var request_url = cljs.core.get.call(null,map__29222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29090,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29093 = cljs.core.reverse.call(null,inst_29087);
var inst_29094 = cljs.core.map.call(null,inst_29092,inst_29093);
var inst_29095 = cljs.core.pr_str.call(null,inst_29094);
var inst_29096 = figwheel.client.utils.log.call(null,inst_29095);
var state_29166__$1 = (function (){var statearr_29224 = state_29166;
(statearr_29224[(31)] = inst_29090);

return statearr_29224;
})();
var statearr_29225_29295 = state_29166__$1;
(statearr_29225_29295[(2)] = inst_29096);

(statearr_29225_29295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (35))){
var state_29166__$1 = state_29166;
var statearr_29226_29296 = state_29166__$1;
(statearr_29226_29296[(2)] = true);

(statearr_29226_29296[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (19))){
var inst_29069 = (state_29166[(12)]);
var inst_29075 = figwheel.client.file_reloading.expand_files.call(null,inst_29069);
var state_29166__$1 = state_29166;
var statearr_29227_29297 = state_29166__$1;
(statearr_29227_29297[(2)] = inst_29075);

(statearr_29227_29297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (11))){
var state_29166__$1 = state_29166;
var statearr_29228_29298 = state_29166__$1;
(statearr_29228_29298[(2)] = null);

(statearr_29228_29298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (9))){
var inst_29058 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29229_29299 = state_29166__$1;
(statearr_29229_29299[(2)] = inst_29058);

(statearr_29229_29299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (5))){
var inst_29029 = (state_29166[(7)]);
var inst_29028 = (state_29166[(10)]);
var inst_29031 = (inst_29029 < inst_29028);
var inst_29032 = inst_29031;
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29032)){
var statearr_29230_29300 = state_29166__$1;
(statearr_29230_29300[(1)] = (7));

} else {
var statearr_29231_29301 = state_29166__$1;
(statearr_29231_29301[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (14))){
var inst_29039 = (state_29166[(22)]);
var inst_29048 = cljs.core.first.call(null,inst_29039);
var inst_29049 = figwheel.client.file_reloading.eval_body.call(null,inst_29048,opts);
var inst_29050 = cljs.core.next.call(null,inst_29039);
var inst_29026 = inst_29050;
var inst_29027 = null;
var inst_29028 = (0);
var inst_29029 = (0);
var state_29166__$1 = (function (){var statearr_29232 = state_29166;
(statearr_29232[(7)] = inst_29029);

(statearr_29232[(32)] = inst_29049);

(statearr_29232[(8)] = inst_29027);

(statearr_29232[(9)] = inst_29026);

(statearr_29232[(10)] = inst_29028);

return statearr_29232;
})();
var statearr_29233_29302 = state_29166__$1;
(statearr_29233_29302[(2)] = null);

(statearr_29233_29302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (45))){
var state_29166__$1 = state_29166;
var statearr_29234_29303 = state_29166__$1;
(statearr_29234_29303[(2)] = null);

(statearr_29234_29303[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (26))){
var inst_29083 = (state_29166[(23)]);
var inst_29082 = (state_29166[(24)]);
var inst_29085 = (state_29166[(26)]);
var inst_29087 = (state_29166[(25)]);
var inst_29079 = (state_29166[(19)]);
var inst_29102 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29104 = (function (){var all_files = inst_29079;
var res_SINGLEQUOTE_ = inst_29082;
var res = inst_29083;
var files_not_loaded = inst_29085;
var dependencies_that_loaded = inst_29087;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29102,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29103){
var map__29235 = p__29103;
var map__29235__$1 = ((((!((map__29235 == null)))?((((map__29235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29235):map__29235);
var namespace = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29102,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29105 = cljs.core.map.call(null,inst_29104,inst_29083);
var inst_29106 = cljs.core.pr_str.call(null,inst_29105);
var inst_29107 = figwheel.client.utils.log.call(null,inst_29106);
var inst_29108 = (function (){var all_files = inst_29079;
var res_SINGLEQUOTE_ = inst_29082;
var res = inst_29083;
var files_not_loaded = inst_29085;
var dependencies_that_loaded = inst_29087;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29102,inst_29104,inst_29105,inst_29106,inst_29107,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29083,inst_29082,inst_29085,inst_29087,inst_29079,inst_29102,inst_29104,inst_29105,inst_29106,inst_29107,state_val_29167,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29109 = setTimeout(inst_29108,(10));
var state_29166__$1 = (function (){var statearr_29237 = state_29166;
(statearr_29237[(33)] = inst_29107);

(statearr_29237[(34)] = inst_29102);

return statearr_29237;
})();
var statearr_29238_29304 = state_29166__$1;
(statearr_29238_29304[(2)] = inst_29109);

(statearr_29238_29304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (16))){
var state_29166__$1 = state_29166;
var statearr_29239_29305 = state_29166__$1;
(statearr_29239_29305[(2)] = reload_dependents);

(statearr_29239_29305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (38))){
var inst_29119 = (state_29166[(16)]);
var inst_29137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29119);
var state_29166__$1 = state_29166;
var statearr_29240_29306 = state_29166__$1;
(statearr_29240_29306[(2)] = inst_29137);

(statearr_29240_29306[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (30))){
var state_29166__$1 = state_29166;
var statearr_29241_29307 = state_29166__$1;
(statearr_29241_29307[(2)] = null);

(statearr_29241_29307[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (10))){
var inst_29039 = (state_29166[(22)]);
var inst_29041 = cljs.core.chunked_seq_QMARK_.call(null,inst_29039);
var state_29166__$1 = state_29166;
if(inst_29041){
var statearr_29242_29308 = state_29166__$1;
(statearr_29242_29308[(1)] = (13));

} else {
var statearr_29243_29309 = state_29166__$1;
(statearr_29243_29309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (18))){
var inst_29073 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29073)){
var statearr_29244_29310 = state_29166__$1;
(statearr_29244_29310[(1)] = (19));

} else {
var statearr_29245_29311 = state_29166__$1;
(statearr_29245_29311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (42))){
var state_29166__$1 = state_29166;
var statearr_29246_29312 = state_29166__$1;
(statearr_29246_29312[(2)] = null);

(statearr_29246_29312[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (37))){
var inst_29132 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29247_29313 = state_29166__$1;
(statearr_29247_29313[(2)] = inst_29132);

(statearr_29247_29313[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (8))){
var inst_29039 = (state_29166[(22)]);
var inst_29026 = (state_29166[(9)]);
var inst_29039__$1 = cljs.core.seq.call(null,inst_29026);
var state_29166__$1 = (function (){var statearr_29248 = state_29166;
(statearr_29248[(22)] = inst_29039__$1);

return statearr_29248;
})();
if(inst_29039__$1){
var statearr_29249_29314 = state_29166__$1;
(statearr_29249_29314[(1)] = (10));

} else {
var statearr_29250_29315 = state_29166__$1;
(statearr_29250_29315[(1)] = (11));

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
});})(c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21281__auto__,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____0 = (function (){
var statearr_29254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29254[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__);

(statearr_29254[(1)] = (1));

return statearr_29254;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____1 = (function (state_29166){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_29166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e29255){if((e29255 instanceof Object)){
var ex__21285__auto__ = e29255;
var statearr_29256_29316 = state_29166;
(statearr_29256_29316[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_29166;
state_29166 = G__29317;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21298__auto__ = (function (){var statearr_29257 = f__21297__auto__.call(null);
(statearr_29257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_29257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,map__29011,map__29011__$1,opts,before_jsload,on_jsload,reload_dependents,map__29012,map__29012__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21296__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29320,link){
var map__29323 = p__29320;
var map__29323__$1 = ((((!((map__29323 == null)))?((((map__29323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323):map__29323);
var file = cljs.core.get.call(null,map__29323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29323,map__29323__$1,file){
return (function (p1__29318_SHARP_,p2__29319_SHARP_){
if(cljs.core._EQ_.call(null,p1__29318_SHARP_,p2__29319_SHARP_)){
return p1__29318_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29323,map__29323__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29329){
var map__29330 = p__29329;
var map__29330__$1 = ((((!((map__29330 == null)))?((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29330):map__29330);
var match_length = cljs.core.get.call(null,map__29330__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29330__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29325_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29325_SHARP_);
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
var args29332 = [];
var len__19864__auto___29335 = arguments.length;
var i__19865__auto___29336 = (0);
while(true){
if((i__19865__auto___29336 < len__19864__auto___29335)){
args29332.push((arguments[i__19865__auto___29336]));

var G__29337 = (i__19865__auto___29336 + (1));
i__19865__auto___29336 = G__29337;
continue;
} else {
}
break;
}

var G__29334 = args29332.length;
switch (G__29334) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29332.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29339_SHARP_,p2__29340_SHARP_){
return cljs.core.assoc.call(null,p1__29339_SHARP_,cljs.core.get.call(null,p2__29340_SHARP_,key),p2__29340_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29341){
var map__29344 = p__29341;
var map__29344__$1 = ((((!((map__29344 == null)))?((((map__29344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29344):map__29344);
var f_data = map__29344__$1;
var file = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29346,files_msg){
var map__29353 = p__29346;
var map__29353__$1 = ((((!((map__29353 == null)))?((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29353):map__29353);
var opts = map__29353__$1;
var on_cssload = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29355_29359 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29356_29360 = null;
var count__29357_29361 = (0);
var i__29358_29362 = (0);
while(true){
if((i__29358_29362 < count__29357_29361)){
var f_29363 = cljs.core._nth.call(null,chunk__29356_29360,i__29358_29362);
figwheel.client.file_reloading.reload_css_file.call(null,f_29363);

var G__29364 = seq__29355_29359;
var G__29365 = chunk__29356_29360;
var G__29366 = count__29357_29361;
var G__29367 = (i__29358_29362 + (1));
seq__29355_29359 = G__29364;
chunk__29356_29360 = G__29365;
count__29357_29361 = G__29366;
i__29358_29362 = G__29367;
continue;
} else {
var temp__4657__auto___29368 = cljs.core.seq.call(null,seq__29355_29359);
if(temp__4657__auto___29368){
var seq__29355_29369__$1 = temp__4657__auto___29368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29355_29369__$1)){
var c__19570__auto___29370 = cljs.core.chunk_first.call(null,seq__29355_29369__$1);
var G__29371 = cljs.core.chunk_rest.call(null,seq__29355_29369__$1);
var G__29372 = c__19570__auto___29370;
var G__29373 = cljs.core.count.call(null,c__19570__auto___29370);
var G__29374 = (0);
seq__29355_29359 = G__29371;
chunk__29356_29360 = G__29372;
count__29357_29361 = G__29373;
i__29358_29362 = G__29374;
continue;
} else {
var f_29375 = cljs.core.first.call(null,seq__29355_29369__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29375);

var G__29376 = cljs.core.next.call(null,seq__29355_29369__$1);
var G__29377 = null;
var G__29378 = (0);
var G__29379 = (0);
seq__29355_29359 = G__29376;
chunk__29356_29360 = G__29377;
count__29357_29361 = G__29378;
i__29358_29362 = G__29379;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29353,map__29353__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29353,map__29353__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484862759424