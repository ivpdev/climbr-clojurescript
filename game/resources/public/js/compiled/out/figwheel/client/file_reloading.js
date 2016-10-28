// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
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
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35476_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35476_SHARP_));
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
var seq__35481 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35482 = null;
var count__35483 = (0);
var i__35484 = (0);
while(true){
if((i__35484 < count__35483)){
var n = cljs.core._nth.call(null,chunk__35482,i__35484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35485 = seq__35481;
var G__35486 = chunk__35482;
var G__35487 = count__35483;
var G__35488 = (i__35484 + (1));
seq__35481 = G__35485;
chunk__35482 = G__35486;
count__35483 = G__35487;
i__35484 = G__35488;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35481);
if(temp__4425__auto__){
var seq__35481__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35481__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__35481__$1);
var G__35489 = cljs.core.chunk_rest.call(null,seq__35481__$1);
var G__35490 = c__17608__auto__;
var G__35491 = cljs.core.count.call(null,c__17608__auto__);
var G__35492 = (0);
seq__35481 = G__35489;
chunk__35482 = G__35490;
count__35483 = G__35491;
i__35484 = G__35492;
continue;
} else {
var n = cljs.core.first.call(null,seq__35481__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35493 = cljs.core.next.call(null,seq__35481__$1);
var G__35494 = null;
var G__35495 = (0);
var G__35496 = (0);
seq__35481 = G__35493;
chunk__35482 = G__35494;
count__35483 = G__35495;
i__35484 = G__35496;
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

var seq__35535_35542 = cljs.core.seq.call(null,deps);
var chunk__35536_35543 = null;
var count__35537_35544 = (0);
var i__35538_35545 = (0);
while(true){
if((i__35538_35545 < count__35537_35544)){
var dep_35546 = cljs.core._nth.call(null,chunk__35536_35543,i__35538_35545);
topo_sort_helper_STAR_.call(null,dep_35546,(depth + (1)),state);

var G__35547 = seq__35535_35542;
var G__35548 = chunk__35536_35543;
var G__35549 = count__35537_35544;
var G__35550 = (i__35538_35545 + (1));
seq__35535_35542 = G__35547;
chunk__35536_35543 = G__35548;
count__35537_35544 = G__35549;
i__35538_35545 = G__35550;
continue;
} else {
var temp__4425__auto___35551 = cljs.core.seq.call(null,seq__35535_35542);
if(temp__4425__auto___35551){
var seq__35535_35552__$1 = temp__4425__auto___35551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35535_35552__$1)){
var c__17608__auto___35553 = cljs.core.chunk_first.call(null,seq__35535_35552__$1);
var G__35554 = cljs.core.chunk_rest.call(null,seq__35535_35552__$1);
var G__35555 = c__17608__auto___35553;
var G__35556 = cljs.core.count.call(null,c__17608__auto___35553);
var G__35557 = (0);
seq__35535_35542 = G__35554;
chunk__35536_35543 = G__35555;
count__35537_35544 = G__35556;
i__35538_35545 = G__35557;
continue;
} else {
var dep_35558 = cljs.core.first.call(null,seq__35535_35552__$1);
topo_sort_helper_STAR_.call(null,dep_35558,(depth + (1)),state);

var G__35559 = cljs.core.next.call(null,seq__35535_35552__$1);
var G__35560 = null;
var G__35561 = (0);
var G__35562 = (0);
seq__35535_35542 = G__35559;
chunk__35536_35543 = G__35560;
count__35537_35544 = G__35561;
i__35538_35545 = G__35562;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35539){
var vec__35541 = p__35539;
var x = cljs.core.nth.call(null,vec__35541,(0),null);
var xs = cljs.core.nthnext.call(null,vec__35541,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35541,x,xs,get_deps__$1){
return (function (p1__35497_SHARP_){
return clojure.set.difference.call(null,p1__35497_SHARP_,x);
});})(vec__35541,x,xs,get_deps__$1))
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
var seq__35575 = cljs.core.seq.call(null,provides);
var chunk__35576 = null;
var count__35577 = (0);
var i__35578 = (0);
while(true){
if((i__35578 < count__35577)){
var prov = cljs.core._nth.call(null,chunk__35576,i__35578);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35579_35587 = cljs.core.seq.call(null,requires);
var chunk__35580_35588 = null;
var count__35581_35589 = (0);
var i__35582_35590 = (0);
while(true){
if((i__35582_35590 < count__35581_35589)){
var req_35591 = cljs.core._nth.call(null,chunk__35580_35588,i__35582_35590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35591,prov);

var G__35592 = seq__35579_35587;
var G__35593 = chunk__35580_35588;
var G__35594 = count__35581_35589;
var G__35595 = (i__35582_35590 + (1));
seq__35579_35587 = G__35592;
chunk__35580_35588 = G__35593;
count__35581_35589 = G__35594;
i__35582_35590 = G__35595;
continue;
} else {
var temp__4425__auto___35596 = cljs.core.seq.call(null,seq__35579_35587);
if(temp__4425__auto___35596){
var seq__35579_35597__$1 = temp__4425__auto___35596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35579_35597__$1)){
var c__17608__auto___35598 = cljs.core.chunk_first.call(null,seq__35579_35597__$1);
var G__35599 = cljs.core.chunk_rest.call(null,seq__35579_35597__$1);
var G__35600 = c__17608__auto___35598;
var G__35601 = cljs.core.count.call(null,c__17608__auto___35598);
var G__35602 = (0);
seq__35579_35587 = G__35599;
chunk__35580_35588 = G__35600;
count__35581_35589 = G__35601;
i__35582_35590 = G__35602;
continue;
} else {
var req_35603 = cljs.core.first.call(null,seq__35579_35597__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35603,prov);

var G__35604 = cljs.core.next.call(null,seq__35579_35597__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35579_35587 = G__35604;
chunk__35580_35588 = G__35605;
count__35581_35589 = G__35606;
i__35582_35590 = G__35607;
continue;
}
} else {
}
}
break;
}

var G__35608 = seq__35575;
var G__35609 = chunk__35576;
var G__35610 = count__35577;
var G__35611 = (i__35578 + (1));
seq__35575 = G__35608;
chunk__35576 = G__35609;
count__35577 = G__35610;
i__35578 = G__35611;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35575);
if(temp__4425__auto__){
var seq__35575__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35575__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__35575__$1);
var G__35612 = cljs.core.chunk_rest.call(null,seq__35575__$1);
var G__35613 = c__17608__auto__;
var G__35614 = cljs.core.count.call(null,c__17608__auto__);
var G__35615 = (0);
seq__35575 = G__35612;
chunk__35576 = G__35613;
count__35577 = G__35614;
i__35578 = G__35615;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35575__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35583_35616 = cljs.core.seq.call(null,requires);
var chunk__35584_35617 = null;
var count__35585_35618 = (0);
var i__35586_35619 = (0);
while(true){
if((i__35586_35619 < count__35585_35618)){
var req_35620 = cljs.core._nth.call(null,chunk__35584_35617,i__35586_35619);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35620,prov);

var G__35621 = seq__35583_35616;
var G__35622 = chunk__35584_35617;
var G__35623 = count__35585_35618;
var G__35624 = (i__35586_35619 + (1));
seq__35583_35616 = G__35621;
chunk__35584_35617 = G__35622;
count__35585_35618 = G__35623;
i__35586_35619 = G__35624;
continue;
} else {
var temp__4425__auto___35625__$1 = cljs.core.seq.call(null,seq__35583_35616);
if(temp__4425__auto___35625__$1){
var seq__35583_35626__$1 = temp__4425__auto___35625__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35583_35626__$1)){
var c__17608__auto___35627 = cljs.core.chunk_first.call(null,seq__35583_35626__$1);
var G__35628 = cljs.core.chunk_rest.call(null,seq__35583_35626__$1);
var G__35629 = c__17608__auto___35627;
var G__35630 = cljs.core.count.call(null,c__17608__auto___35627);
var G__35631 = (0);
seq__35583_35616 = G__35628;
chunk__35584_35617 = G__35629;
count__35585_35618 = G__35630;
i__35586_35619 = G__35631;
continue;
} else {
var req_35632 = cljs.core.first.call(null,seq__35583_35626__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35632,prov);

var G__35633 = cljs.core.next.call(null,seq__35583_35626__$1);
var G__35634 = null;
var G__35635 = (0);
var G__35636 = (0);
seq__35583_35616 = G__35633;
chunk__35584_35617 = G__35634;
count__35585_35618 = G__35635;
i__35586_35619 = G__35636;
continue;
}
} else {
}
}
break;
}

var G__35637 = cljs.core.next.call(null,seq__35575__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__35575 = G__35637;
chunk__35576 = G__35638;
count__35577 = G__35639;
i__35578 = G__35640;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35645_35649 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35646_35650 = null;
var count__35647_35651 = (0);
var i__35648_35652 = (0);
while(true){
if((i__35648_35652 < count__35647_35651)){
var ns_35653 = cljs.core._nth.call(null,chunk__35646_35650,i__35648_35652);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35653);

var G__35654 = seq__35645_35649;
var G__35655 = chunk__35646_35650;
var G__35656 = count__35647_35651;
var G__35657 = (i__35648_35652 + (1));
seq__35645_35649 = G__35654;
chunk__35646_35650 = G__35655;
count__35647_35651 = G__35656;
i__35648_35652 = G__35657;
continue;
} else {
var temp__4425__auto___35658 = cljs.core.seq.call(null,seq__35645_35649);
if(temp__4425__auto___35658){
var seq__35645_35659__$1 = temp__4425__auto___35658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35645_35659__$1)){
var c__17608__auto___35660 = cljs.core.chunk_first.call(null,seq__35645_35659__$1);
var G__35661 = cljs.core.chunk_rest.call(null,seq__35645_35659__$1);
var G__35662 = c__17608__auto___35660;
var G__35663 = cljs.core.count.call(null,c__17608__auto___35660);
var G__35664 = (0);
seq__35645_35649 = G__35661;
chunk__35646_35650 = G__35662;
count__35647_35651 = G__35663;
i__35648_35652 = G__35664;
continue;
} else {
var ns_35665 = cljs.core.first.call(null,seq__35645_35659__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35665);

var G__35666 = cljs.core.next.call(null,seq__35645_35659__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35645_35649 = G__35666;
chunk__35646_35650 = G__35667;
count__35647_35651 = G__35668;
i__35648_35652 = G__35669;
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
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
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
var G__35670__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35671__i = 0, G__35671__a = new Array(arguments.length -  0);
while (G__35671__i < G__35671__a.length) {G__35671__a[G__35671__i] = arguments[G__35671__i + 0]; ++G__35671__i;}
  args = new cljs.core.IndexedSeq(G__35671__a,0);
} 
return G__35670__delegate.call(this,args);};
G__35670.cljs$lang$maxFixedArity = 0;
G__35670.cljs$lang$applyTo = (function (arglist__35672){
var args = cljs.core.seq(arglist__35672);
return G__35670__delegate(args);
});
G__35670.cljs$core$IFn$_invoke$arity$variadic = G__35670__delegate;
return G__35670;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35674 = cljs.core._EQ_;
var expr__35675 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35674.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35675))){
var path_parts = ((function (pred__35674,expr__35675){
return (function (p1__35673_SHARP_){
return clojure.string.split.call(null,p1__35673_SHARP_,/[\/\\]/);
});})(pred__35674,expr__35675))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35674,expr__35675){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35677){if((e35677 instanceof Error)){
var e = e35677;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35677;

}
}})());
});
;})(path_parts,sep,root,pred__35674,expr__35675))
} else {
if(cljs.core.truth_(pred__35674.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35675))){
return ((function (pred__35674,expr__35675){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35674,expr__35675){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35674,expr__35675))
);

return deferred.addErrback(((function (deferred,pred__35674,expr__35675){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35674,expr__35675))
);
});
;})(pred__35674,expr__35675))
} else {
return ((function (pred__35674,expr__35675){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35674,expr__35675))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35678,callback){
var map__35681 = p__35678;
var map__35681__$1 = ((((!((map__35681 == null)))?((((map__35681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35681):map__35681);
var file_msg = map__35681__$1;
var request_url = cljs.core.get.call(null,map__35681__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35681,map__35681__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35681,map__35681__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_35705){
var state_val_35706 = (state_35705[(1)]);
if((state_val_35706 === (7))){
var inst_35701 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
var statearr_35707_35727 = state_35705__$1;
(statearr_35707_35727[(2)] = inst_35701);

(statearr_35707_35727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (1))){
var state_35705__$1 = state_35705;
var statearr_35708_35728 = state_35705__$1;
(statearr_35708_35728[(2)] = null);

(statearr_35708_35728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (4))){
var inst_35685 = (state_35705[(7)]);
var inst_35685__$1 = (state_35705[(2)]);
var state_35705__$1 = (function (){var statearr_35709 = state_35705;
(statearr_35709[(7)] = inst_35685__$1);

return statearr_35709;
})();
if(cljs.core.truth_(inst_35685__$1)){
var statearr_35710_35729 = state_35705__$1;
(statearr_35710_35729[(1)] = (5));

} else {
var statearr_35711_35730 = state_35705__$1;
(statearr_35711_35730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (6))){
var state_35705__$1 = state_35705;
var statearr_35712_35731 = state_35705__$1;
(statearr_35712_35731[(2)] = null);

(statearr_35712_35731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (3))){
var inst_35703 = (state_35705[(2)]);
var state_35705__$1 = state_35705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35705__$1,inst_35703);
} else {
if((state_val_35706 === (2))){
var state_35705__$1 = state_35705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35705__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35706 === (11))){
var inst_35697 = (state_35705[(2)]);
var state_35705__$1 = (function (){var statearr_35713 = state_35705;
(statearr_35713[(8)] = inst_35697);

return statearr_35713;
})();
var statearr_35714_35732 = state_35705__$1;
(statearr_35714_35732[(2)] = null);

(statearr_35714_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (9))){
var inst_35689 = (state_35705[(9)]);
var inst_35691 = (state_35705[(10)]);
var inst_35693 = inst_35691.call(null,inst_35689);
var state_35705__$1 = state_35705;
var statearr_35715_35733 = state_35705__$1;
(statearr_35715_35733[(2)] = inst_35693);

(statearr_35715_35733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (5))){
var inst_35685 = (state_35705[(7)]);
var inst_35687 = figwheel.client.file_reloading.blocking_load.call(null,inst_35685);
var state_35705__$1 = state_35705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35705__$1,(8),inst_35687);
} else {
if((state_val_35706 === (10))){
var inst_35689 = (state_35705[(9)]);
var inst_35695 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35689);
var state_35705__$1 = state_35705;
var statearr_35716_35734 = state_35705__$1;
(statearr_35716_35734[(2)] = inst_35695);

(statearr_35716_35734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35706 === (8))){
var inst_35685 = (state_35705[(7)]);
var inst_35691 = (state_35705[(10)]);
var inst_35689 = (state_35705[(2)]);
var inst_35690 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35691__$1 = cljs.core.get.call(null,inst_35690,inst_35685);
var state_35705__$1 = (function (){var statearr_35717 = state_35705;
(statearr_35717[(9)] = inst_35689);

(statearr_35717[(10)] = inst_35691__$1);

return statearr_35717;
})();
if(cljs.core.truth_(inst_35691__$1)){
var statearr_35718_35735 = state_35705__$1;
(statearr_35718_35735[(1)] = (9));

} else {
var statearr_35719_35736 = state_35705__$1;
(statearr_35719_35736[(1)] = (10));

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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18810__auto__ = null;
var figwheel$client$file_reloading$state_machine__18810__auto____0 = (function (){
var statearr_35723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35723[(0)] = figwheel$client$file_reloading$state_machine__18810__auto__);

(statearr_35723[(1)] = (1));

return statearr_35723;
});
var figwheel$client$file_reloading$state_machine__18810__auto____1 = (function (state_35705){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_35705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e35724){if((e35724 instanceof Object)){
var ex__18813__auto__ = e35724;
var statearr_35725_35737 = state_35705;
(statearr_35725_35737[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35738 = state_35705;
state_35705 = G__35738;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18810__auto__ = function(state_35705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18810__auto____1.call(this,state_35705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18810__auto____0;
figwheel$client$file_reloading$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18810__auto____1;
return figwheel$client$file_reloading$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_35726 = f__18831__auto__.call(null);
(statearr_35726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_35726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35739,callback){
var map__35742 = p__35739;
var map__35742__$1 = ((((!((map__35742 == null)))?((((map__35742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35742):map__35742);
var file_msg = map__35742__$1;
var namespace = cljs.core.get.call(null,map__35742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35742,map__35742__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35742,map__35742__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35744){
var map__35747 = p__35744;
var map__35747__$1 = ((((!((map__35747 == null)))?((((map__35747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35747):map__35747);
var file_msg = map__35747__$1;
var namespace = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35749,callback){
var map__35752 = p__35749;
var map__35752__$1 = ((((!((map__35752 == null)))?((((map__35752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35752):map__35752);
var file_msg = map__35752__$1;
var request_url = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18830__auto___35840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___35840,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___35840,out){
return (function (state_35822){
var state_val_35823 = (state_35822[(1)]);
if((state_val_35823 === (1))){
var inst_35800 = cljs.core.nth.call(null,files,(0),null);
var inst_35801 = cljs.core.nthnext.call(null,files,(1));
var inst_35802 = files;
var state_35822__$1 = (function (){var statearr_35824 = state_35822;
(statearr_35824[(7)] = inst_35802);

(statearr_35824[(8)] = inst_35801);

(statearr_35824[(9)] = inst_35800);

return statearr_35824;
})();
var statearr_35825_35841 = state_35822__$1;
(statearr_35825_35841[(2)] = null);

(statearr_35825_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (2))){
var inst_35802 = (state_35822[(7)]);
var inst_35805 = (state_35822[(10)]);
var inst_35805__$1 = cljs.core.nth.call(null,inst_35802,(0),null);
var inst_35806 = cljs.core.nthnext.call(null,inst_35802,(1));
var inst_35807 = (inst_35805__$1 == null);
var inst_35808 = cljs.core.not.call(null,inst_35807);
var state_35822__$1 = (function (){var statearr_35826 = state_35822;
(statearr_35826[(10)] = inst_35805__$1);

(statearr_35826[(11)] = inst_35806);

return statearr_35826;
})();
if(inst_35808){
var statearr_35827_35842 = state_35822__$1;
(statearr_35827_35842[(1)] = (4));

} else {
var statearr_35828_35843 = state_35822__$1;
(statearr_35828_35843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (3))){
var inst_35820 = (state_35822[(2)]);
var state_35822__$1 = state_35822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35822__$1,inst_35820);
} else {
if((state_val_35823 === (4))){
var inst_35805 = (state_35822[(10)]);
var inst_35810 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35805);
var state_35822__$1 = state_35822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35822__$1,(7),inst_35810);
} else {
if((state_val_35823 === (5))){
var inst_35816 = cljs.core.async.close_BANG_.call(null,out);
var state_35822__$1 = state_35822;
var statearr_35829_35844 = state_35822__$1;
(statearr_35829_35844[(2)] = inst_35816);

(statearr_35829_35844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (6))){
var inst_35818 = (state_35822[(2)]);
var state_35822__$1 = state_35822;
var statearr_35830_35845 = state_35822__$1;
(statearr_35830_35845[(2)] = inst_35818);

(statearr_35830_35845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (7))){
var inst_35806 = (state_35822[(11)]);
var inst_35812 = (state_35822[(2)]);
var inst_35813 = cljs.core.async.put_BANG_.call(null,out,inst_35812);
var inst_35802 = inst_35806;
var state_35822__$1 = (function (){var statearr_35831 = state_35822;
(statearr_35831[(7)] = inst_35802);

(statearr_35831[(12)] = inst_35813);

return statearr_35831;
})();
var statearr_35832_35846 = state_35822__$1;
(statearr_35832_35846[(2)] = null);

(statearr_35832_35846[(1)] = (2));


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
});})(c__18830__auto___35840,out))
;
return ((function (switch__18809__auto__,c__18830__auto___35840,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____0 = (function (){
var statearr_35836 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35836[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__);

(statearr_35836[(1)] = (1));

return statearr_35836;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____1 = (function (state_35822){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_35822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e35837){if((e35837 instanceof Object)){
var ex__18813__auto__ = e35837;
var statearr_35838_35847 = state_35822;
(statearr_35838_35847[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35848 = state_35822;
state_35822 = G__35848;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__ = function(state_35822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____1.call(this,state_35822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___35840,out))
})();
var state__18832__auto__ = (function (){var statearr_35839 = f__18831__auto__.call(null);
(statearr_35839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___35840);

return statearr_35839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___35840,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35849,opts){
var map__35853 = p__35849;
var map__35853__$1 = ((((!((map__35853 == null)))?((((map__35853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35853):map__35853);
var eval_body__$1 = cljs.core.get.call(null,map__35853__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35855){var e = e35855;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35856_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35856_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__35861){
var vec__35862 = p__35861;
var k = cljs.core.nth.call(null,vec__35862,(0),null);
var v = cljs.core.nth.call(null,vec__35862,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35863){
var vec__35864 = p__35863;
var k = cljs.core.nth.call(null,vec__35864,(0),null);
var v = cljs.core.nth.call(null,vec__35864,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35868,p__35869){
var map__36116 = p__35868;
var map__36116__$1 = ((((!((map__36116 == null)))?((((map__36116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36116):map__36116);
var opts = map__36116__$1;
var before_jsload = cljs.core.get.call(null,map__36116__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36116__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36116__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36117 = p__35869;
var map__36117__$1 = ((((!((map__36117 == null)))?((((map__36117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36117):map__36117);
var msg = map__36117__$1;
var files = cljs.core.get.call(null,map__36117__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36117__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36117__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36270){
var state_val_36271 = (state_36270[(1)]);
if((state_val_36271 === (7))){
var inst_36132 = (state_36270[(7)]);
var inst_36133 = (state_36270[(8)]);
var inst_36131 = (state_36270[(9)]);
var inst_36134 = (state_36270[(10)]);
var inst_36139 = cljs.core._nth.call(null,inst_36132,inst_36134);
var inst_36140 = figwheel.client.file_reloading.eval_body.call(null,inst_36139,opts);
var inst_36141 = (inst_36134 + (1));
var tmp36272 = inst_36132;
var tmp36273 = inst_36133;
var tmp36274 = inst_36131;
var inst_36131__$1 = tmp36274;
var inst_36132__$1 = tmp36272;
var inst_36133__$1 = tmp36273;
var inst_36134__$1 = inst_36141;
var state_36270__$1 = (function (){var statearr_36275 = state_36270;
(statearr_36275[(7)] = inst_36132__$1);

(statearr_36275[(11)] = inst_36140);

(statearr_36275[(8)] = inst_36133__$1);

(statearr_36275[(9)] = inst_36131__$1);

(statearr_36275[(10)] = inst_36134__$1);

return statearr_36275;
})();
var statearr_36276_36362 = state_36270__$1;
(statearr_36276_36362[(2)] = null);

(statearr_36276_36362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (20))){
var inst_36174 = (state_36270[(12)]);
var inst_36182 = figwheel.client.file_reloading.sort_files.call(null,inst_36174);
var state_36270__$1 = state_36270;
var statearr_36277_36363 = state_36270__$1;
(statearr_36277_36363[(2)] = inst_36182);

(statearr_36277_36363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (27))){
var state_36270__$1 = state_36270;
var statearr_36278_36364 = state_36270__$1;
(statearr_36278_36364[(2)] = null);

(statearr_36278_36364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (1))){
var inst_36123 = (state_36270[(13)]);
var inst_36120 = before_jsload.call(null,files);
var inst_36121 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36122 = (function (){return ((function (inst_36123,inst_36120,inst_36121,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35865_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35865_SHARP_);
});
;})(inst_36123,inst_36120,inst_36121,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36123__$1 = cljs.core.filter.call(null,inst_36122,files);
var inst_36124 = cljs.core.not_empty.call(null,inst_36123__$1);
var state_36270__$1 = (function (){var statearr_36279 = state_36270;
(statearr_36279[(14)] = inst_36120);

(statearr_36279[(15)] = inst_36121);

(statearr_36279[(13)] = inst_36123__$1);

return statearr_36279;
})();
if(cljs.core.truth_(inst_36124)){
var statearr_36280_36365 = state_36270__$1;
(statearr_36280_36365[(1)] = (2));

} else {
var statearr_36281_36366 = state_36270__$1;
(statearr_36281_36366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (24))){
var state_36270__$1 = state_36270;
var statearr_36282_36367 = state_36270__$1;
(statearr_36282_36367[(2)] = null);

(statearr_36282_36367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (39))){
var inst_36224 = (state_36270[(16)]);
var state_36270__$1 = state_36270;
var statearr_36283_36368 = state_36270__$1;
(statearr_36283_36368[(2)] = inst_36224);

(statearr_36283_36368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (46))){
var inst_36265 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36284_36369 = state_36270__$1;
(statearr_36284_36369[(2)] = inst_36265);

(statearr_36284_36369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (4))){
var inst_36168 = (state_36270[(2)]);
var inst_36169 = cljs.core.List.EMPTY;
var inst_36170 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36169);
var inst_36171 = (function (){return ((function (inst_36168,inst_36169,inst_36170,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35866_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35866_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35866_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_36168,inst_36169,inst_36170,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36172 = cljs.core.filter.call(null,inst_36171,files);
var inst_36173 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36174 = cljs.core.concat.call(null,inst_36172,inst_36173);
var state_36270__$1 = (function (){var statearr_36285 = state_36270;
(statearr_36285[(12)] = inst_36174);

(statearr_36285[(17)] = inst_36168);

(statearr_36285[(18)] = inst_36170);

return statearr_36285;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36286_36370 = state_36270__$1;
(statearr_36286_36370[(1)] = (16));

} else {
var statearr_36287_36371 = state_36270__$1;
(statearr_36287_36371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (15))){
var inst_36158 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36288_36372 = state_36270__$1;
(statearr_36288_36372[(2)] = inst_36158);

(statearr_36288_36372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (21))){
var inst_36184 = (state_36270[(19)]);
var inst_36184__$1 = (state_36270[(2)]);
var inst_36185 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36184__$1);
var state_36270__$1 = (function (){var statearr_36289 = state_36270;
(statearr_36289[(19)] = inst_36184__$1);

return statearr_36289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36270__$1,(22),inst_36185);
} else {
if((state_val_36271 === (31))){
var inst_36268 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36270__$1,inst_36268);
} else {
if((state_val_36271 === (32))){
var inst_36224 = (state_36270[(16)]);
var inst_36229 = inst_36224.cljs$lang$protocol_mask$partition0$;
var inst_36230 = (inst_36229 & (64));
var inst_36231 = inst_36224.cljs$core$ISeq$;
var inst_36232 = (inst_36230) || (inst_36231);
var state_36270__$1 = state_36270;
if(cljs.core.truth_(inst_36232)){
var statearr_36290_36373 = state_36270__$1;
(statearr_36290_36373[(1)] = (35));

} else {
var statearr_36291_36374 = state_36270__$1;
(statearr_36291_36374[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (40))){
var inst_36245 = (state_36270[(20)]);
var inst_36244 = (state_36270[(2)]);
var inst_36245__$1 = cljs.core.get.call(null,inst_36244,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36246 = cljs.core.get.call(null,inst_36244,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36247 = cljs.core.not_empty.call(null,inst_36245__$1);
var state_36270__$1 = (function (){var statearr_36292 = state_36270;
(statearr_36292[(20)] = inst_36245__$1);

(statearr_36292[(21)] = inst_36246);

return statearr_36292;
})();
if(cljs.core.truth_(inst_36247)){
var statearr_36293_36375 = state_36270__$1;
(statearr_36293_36375[(1)] = (41));

} else {
var statearr_36294_36376 = state_36270__$1;
(statearr_36294_36376[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (33))){
var state_36270__$1 = state_36270;
var statearr_36295_36377 = state_36270__$1;
(statearr_36295_36377[(2)] = false);

(statearr_36295_36377[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (13))){
var inst_36144 = (state_36270[(22)]);
var inst_36148 = cljs.core.chunk_first.call(null,inst_36144);
var inst_36149 = cljs.core.chunk_rest.call(null,inst_36144);
var inst_36150 = cljs.core.count.call(null,inst_36148);
var inst_36131 = inst_36149;
var inst_36132 = inst_36148;
var inst_36133 = inst_36150;
var inst_36134 = (0);
var state_36270__$1 = (function (){var statearr_36296 = state_36270;
(statearr_36296[(7)] = inst_36132);

(statearr_36296[(8)] = inst_36133);

(statearr_36296[(9)] = inst_36131);

(statearr_36296[(10)] = inst_36134);

return statearr_36296;
})();
var statearr_36297_36378 = state_36270__$1;
(statearr_36297_36378[(2)] = null);

(statearr_36297_36378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (22))){
var inst_36188 = (state_36270[(23)]);
var inst_36184 = (state_36270[(19)]);
var inst_36187 = (state_36270[(24)]);
var inst_36192 = (state_36270[(25)]);
var inst_36187__$1 = (state_36270[(2)]);
var inst_36188__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36187__$1);
var inst_36189 = (function (){var all_files = inst_36184;
var res_SINGLEQUOTE_ = inst_36187__$1;
var res = inst_36188__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36188,inst_36184,inst_36187,inst_36192,inst_36187__$1,inst_36188__$1,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35867_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35867_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36188,inst_36184,inst_36187,inst_36192,inst_36187__$1,inst_36188__$1,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36190 = cljs.core.filter.call(null,inst_36189,inst_36187__$1);
var inst_36191 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36192__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36191);
var inst_36193 = cljs.core.not_empty.call(null,inst_36192__$1);
var state_36270__$1 = (function (){var statearr_36298 = state_36270;
(statearr_36298[(23)] = inst_36188__$1);

(statearr_36298[(26)] = inst_36190);

(statearr_36298[(24)] = inst_36187__$1);

(statearr_36298[(25)] = inst_36192__$1);

return statearr_36298;
})();
if(cljs.core.truth_(inst_36193)){
var statearr_36299_36379 = state_36270__$1;
(statearr_36299_36379[(1)] = (23));

} else {
var statearr_36300_36380 = state_36270__$1;
(statearr_36300_36380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (36))){
var state_36270__$1 = state_36270;
var statearr_36301_36381 = state_36270__$1;
(statearr_36301_36381[(2)] = false);

(statearr_36301_36381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (41))){
var inst_36245 = (state_36270[(20)]);
var inst_36249 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36250 = cljs.core.map.call(null,inst_36249,inst_36245);
var inst_36251 = cljs.core.pr_str.call(null,inst_36250);
var inst_36252 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36251)].join('');
var inst_36253 = figwheel.client.utils.log.call(null,inst_36252);
var state_36270__$1 = state_36270;
var statearr_36302_36382 = state_36270__$1;
(statearr_36302_36382[(2)] = inst_36253);

(statearr_36302_36382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (43))){
var inst_36246 = (state_36270[(21)]);
var inst_36256 = (state_36270[(2)]);
var inst_36257 = cljs.core.not_empty.call(null,inst_36246);
var state_36270__$1 = (function (){var statearr_36303 = state_36270;
(statearr_36303[(27)] = inst_36256);

return statearr_36303;
})();
if(cljs.core.truth_(inst_36257)){
var statearr_36304_36383 = state_36270__$1;
(statearr_36304_36383[(1)] = (44));

} else {
var statearr_36305_36384 = state_36270__$1;
(statearr_36305_36384[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (29))){
var inst_36224 = (state_36270[(16)]);
var inst_36188 = (state_36270[(23)]);
var inst_36190 = (state_36270[(26)]);
var inst_36184 = (state_36270[(19)]);
var inst_36187 = (state_36270[(24)]);
var inst_36192 = (state_36270[(25)]);
var inst_36220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36223 = (function (){var all_files = inst_36184;
var res_SINGLEQUOTE_ = inst_36187;
var res = inst_36188;
var files_not_loaded = inst_36190;
var dependencies_that_loaded = inst_36192;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36224,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36220,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36222){
var map__36306 = p__36222;
var map__36306__$1 = ((((!((map__36306 == null)))?((((map__36306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36306):map__36306);
var namespace = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36224,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36220,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36224__$1 = cljs.core.group_by.call(null,inst_36223,inst_36190);
var inst_36226 = (inst_36224__$1 == null);
var inst_36227 = cljs.core.not.call(null,inst_36226);
var state_36270__$1 = (function (){var statearr_36308 = state_36270;
(statearr_36308[(16)] = inst_36224__$1);

(statearr_36308[(28)] = inst_36220);

return statearr_36308;
})();
if(inst_36227){
var statearr_36309_36385 = state_36270__$1;
(statearr_36309_36385[(1)] = (32));

} else {
var statearr_36310_36386 = state_36270__$1;
(statearr_36310_36386[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (44))){
var inst_36246 = (state_36270[(21)]);
var inst_36259 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36246);
var inst_36260 = cljs.core.pr_str.call(null,inst_36259);
var inst_36261 = [cljs.core.str("not required: "),cljs.core.str(inst_36260)].join('');
var inst_36262 = figwheel.client.utils.log.call(null,inst_36261);
var state_36270__$1 = state_36270;
var statearr_36311_36387 = state_36270__$1;
(statearr_36311_36387[(2)] = inst_36262);

(statearr_36311_36387[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (6))){
var inst_36165 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36312_36388 = state_36270__$1;
(statearr_36312_36388[(2)] = inst_36165);

(statearr_36312_36388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (28))){
var inst_36190 = (state_36270[(26)]);
var inst_36217 = (state_36270[(2)]);
var inst_36218 = cljs.core.not_empty.call(null,inst_36190);
var state_36270__$1 = (function (){var statearr_36313 = state_36270;
(statearr_36313[(29)] = inst_36217);

return statearr_36313;
})();
if(cljs.core.truth_(inst_36218)){
var statearr_36314_36389 = state_36270__$1;
(statearr_36314_36389[(1)] = (29));

} else {
var statearr_36315_36390 = state_36270__$1;
(statearr_36315_36390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (25))){
var inst_36188 = (state_36270[(23)]);
var inst_36204 = (state_36270[(2)]);
var inst_36205 = cljs.core.not_empty.call(null,inst_36188);
var state_36270__$1 = (function (){var statearr_36316 = state_36270;
(statearr_36316[(30)] = inst_36204);

return statearr_36316;
})();
if(cljs.core.truth_(inst_36205)){
var statearr_36317_36391 = state_36270__$1;
(statearr_36317_36391[(1)] = (26));

} else {
var statearr_36318_36392 = state_36270__$1;
(statearr_36318_36392[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (34))){
var inst_36239 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
if(cljs.core.truth_(inst_36239)){
var statearr_36319_36393 = state_36270__$1;
(statearr_36319_36393[(1)] = (38));

} else {
var statearr_36320_36394 = state_36270__$1;
(statearr_36320_36394[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (17))){
var state_36270__$1 = state_36270;
var statearr_36321_36395 = state_36270__$1;
(statearr_36321_36395[(2)] = recompile_dependents);

(statearr_36321_36395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (3))){
var state_36270__$1 = state_36270;
var statearr_36322_36396 = state_36270__$1;
(statearr_36322_36396[(2)] = null);

(statearr_36322_36396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (12))){
var inst_36161 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36323_36397 = state_36270__$1;
(statearr_36323_36397[(2)] = inst_36161);

(statearr_36323_36397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (2))){
var inst_36123 = (state_36270[(13)]);
var inst_36130 = cljs.core.seq.call(null,inst_36123);
var inst_36131 = inst_36130;
var inst_36132 = null;
var inst_36133 = (0);
var inst_36134 = (0);
var state_36270__$1 = (function (){var statearr_36324 = state_36270;
(statearr_36324[(7)] = inst_36132);

(statearr_36324[(8)] = inst_36133);

(statearr_36324[(9)] = inst_36131);

(statearr_36324[(10)] = inst_36134);

return statearr_36324;
})();
var statearr_36325_36398 = state_36270__$1;
(statearr_36325_36398[(2)] = null);

(statearr_36325_36398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (23))){
var inst_36188 = (state_36270[(23)]);
var inst_36190 = (state_36270[(26)]);
var inst_36184 = (state_36270[(19)]);
var inst_36187 = (state_36270[(24)]);
var inst_36192 = (state_36270[(25)]);
var inst_36195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36197 = (function (){var all_files = inst_36184;
var res_SINGLEQUOTE_ = inst_36187;
var res = inst_36188;
var files_not_loaded = inst_36190;
var dependencies_that_loaded = inst_36192;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36195,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36196){
var map__36326 = p__36196;
var map__36326__$1 = ((((!((map__36326 == null)))?((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36326):map__36326);
var request_url = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36195,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36198 = cljs.core.reverse.call(null,inst_36192);
var inst_36199 = cljs.core.map.call(null,inst_36197,inst_36198);
var inst_36200 = cljs.core.pr_str.call(null,inst_36199);
var inst_36201 = figwheel.client.utils.log.call(null,inst_36200);
var state_36270__$1 = (function (){var statearr_36328 = state_36270;
(statearr_36328[(31)] = inst_36195);

return statearr_36328;
})();
var statearr_36329_36399 = state_36270__$1;
(statearr_36329_36399[(2)] = inst_36201);

(statearr_36329_36399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (35))){
var state_36270__$1 = state_36270;
var statearr_36330_36400 = state_36270__$1;
(statearr_36330_36400[(2)] = true);

(statearr_36330_36400[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (19))){
var inst_36174 = (state_36270[(12)]);
var inst_36180 = figwheel.client.file_reloading.expand_files.call(null,inst_36174);
var state_36270__$1 = state_36270;
var statearr_36331_36401 = state_36270__$1;
(statearr_36331_36401[(2)] = inst_36180);

(statearr_36331_36401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (11))){
var state_36270__$1 = state_36270;
var statearr_36332_36402 = state_36270__$1;
(statearr_36332_36402[(2)] = null);

(statearr_36332_36402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (9))){
var inst_36163 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36333_36403 = state_36270__$1;
(statearr_36333_36403[(2)] = inst_36163);

(statearr_36333_36403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (5))){
var inst_36133 = (state_36270[(8)]);
var inst_36134 = (state_36270[(10)]);
var inst_36136 = (inst_36134 < inst_36133);
var inst_36137 = inst_36136;
var state_36270__$1 = state_36270;
if(cljs.core.truth_(inst_36137)){
var statearr_36334_36404 = state_36270__$1;
(statearr_36334_36404[(1)] = (7));

} else {
var statearr_36335_36405 = state_36270__$1;
(statearr_36335_36405[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (14))){
var inst_36144 = (state_36270[(22)]);
var inst_36153 = cljs.core.first.call(null,inst_36144);
var inst_36154 = figwheel.client.file_reloading.eval_body.call(null,inst_36153,opts);
var inst_36155 = cljs.core.next.call(null,inst_36144);
var inst_36131 = inst_36155;
var inst_36132 = null;
var inst_36133 = (0);
var inst_36134 = (0);
var state_36270__$1 = (function (){var statearr_36336 = state_36270;
(statearr_36336[(7)] = inst_36132);

(statearr_36336[(8)] = inst_36133);

(statearr_36336[(9)] = inst_36131);

(statearr_36336[(10)] = inst_36134);

(statearr_36336[(32)] = inst_36154);

return statearr_36336;
})();
var statearr_36337_36406 = state_36270__$1;
(statearr_36337_36406[(2)] = null);

(statearr_36337_36406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (45))){
var state_36270__$1 = state_36270;
var statearr_36338_36407 = state_36270__$1;
(statearr_36338_36407[(2)] = null);

(statearr_36338_36407[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (26))){
var inst_36188 = (state_36270[(23)]);
var inst_36190 = (state_36270[(26)]);
var inst_36184 = (state_36270[(19)]);
var inst_36187 = (state_36270[(24)]);
var inst_36192 = (state_36270[(25)]);
var inst_36207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36209 = (function (){var all_files = inst_36184;
var res_SINGLEQUOTE_ = inst_36187;
var res = inst_36188;
var files_not_loaded = inst_36190;
var dependencies_that_loaded = inst_36192;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36207,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36208){
var map__36339 = p__36208;
var map__36339__$1 = ((((!((map__36339 == null)))?((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36339):map__36339);
var namespace = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36207,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36210 = cljs.core.map.call(null,inst_36209,inst_36188);
var inst_36211 = cljs.core.pr_str.call(null,inst_36210);
var inst_36212 = figwheel.client.utils.log.call(null,inst_36211);
var inst_36213 = (function (){var all_files = inst_36184;
var res_SINGLEQUOTE_ = inst_36187;
var res = inst_36188;
var files_not_loaded = inst_36190;
var dependencies_that_loaded = inst_36192;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36207,inst_36209,inst_36210,inst_36211,inst_36212,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36188,inst_36190,inst_36184,inst_36187,inst_36192,inst_36207,inst_36209,inst_36210,inst_36211,inst_36212,state_val_36271,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36214 = setTimeout(inst_36213,(10));
var state_36270__$1 = (function (){var statearr_36341 = state_36270;
(statearr_36341[(33)] = inst_36212);

(statearr_36341[(34)] = inst_36207);

return statearr_36341;
})();
var statearr_36342_36408 = state_36270__$1;
(statearr_36342_36408[(2)] = inst_36214);

(statearr_36342_36408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (16))){
var state_36270__$1 = state_36270;
var statearr_36343_36409 = state_36270__$1;
(statearr_36343_36409[(2)] = reload_dependents);

(statearr_36343_36409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (38))){
var inst_36224 = (state_36270[(16)]);
var inst_36241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36224);
var state_36270__$1 = state_36270;
var statearr_36344_36410 = state_36270__$1;
(statearr_36344_36410[(2)] = inst_36241);

(statearr_36344_36410[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (30))){
var state_36270__$1 = state_36270;
var statearr_36345_36411 = state_36270__$1;
(statearr_36345_36411[(2)] = null);

(statearr_36345_36411[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (10))){
var inst_36144 = (state_36270[(22)]);
var inst_36146 = cljs.core.chunked_seq_QMARK_.call(null,inst_36144);
var state_36270__$1 = state_36270;
if(inst_36146){
var statearr_36346_36412 = state_36270__$1;
(statearr_36346_36412[(1)] = (13));

} else {
var statearr_36347_36413 = state_36270__$1;
(statearr_36347_36413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (18))){
var inst_36178 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
if(cljs.core.truth_(inst_36178)){
var statearr_36348_36414 = state_36270__$1;
(statearr_36348_36414[(1)] = (19));

} else {
var statearr_36349_36415 = state_36270__$1;
(statearr_36349_36415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (42))){
var state_36270__$1 = state_36270;
var statearr_36350_36416 = state_36270__$1;
(statearr_36350_36416[(2)] = null);

(statearr_36350_36416[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (37))){
var inst_36236 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36351_36417 = state_36270__$1;
(statearr_36351_36417[(2)] = inst_36236);

(statearr_36351_36417[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (8))){
var inst_36144 = (state_36270[(22)]);
var inst_36131 = (state_36270[(9)]);
var inst_36144__$1 = cljs.core.seq.call(null,inst_36131);
var state_36270__$1 = (function (){var statearr_36352 = state_36270;
(statearr_36352[(22)] = inst_36144__$1);

return statearr_36352;
})();
if(inst_36144__$1){
var statearr_36353_36418 = state_36270__$1;
(statearr_36353_36418[(1)] = (10));

} else {
var statearr_36354_36419 = state_36270__$1;
(statearr_36354_36419[(1)] = (11));

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
});})(c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18809__auto__,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____0 = (function (){
var statearr_36358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36358[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__);

(statearr_36358[(1)] = (1));

return statearr_36358;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____1 = (function (state_36270){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_36270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object)){
var ex__18813__auto__ = e36359;
var statearr_36360_36420 = state_36270;
(statearr_36360_36420[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36421 = state_36270;
state_36270 = G__36421;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__ = function(state_36270){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____1.call(this,state_36270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18832__auto__ = (function (){var statearr_36361 = f__18831__auto__.call(null);
(statearr_36361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,map__36116,map__36116__$1,opts,before_jsload,on_jsload,reload_dependents,map__36117,map__36117__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18830__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36424,link){
var map__36427 = p__36424;
var map__36427__$1 = ((((!((map__36427 == null)))?((((map__36427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36427):map__36427);
var file = cljs.core.get.call(null,map__36427__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__36427,map__36427__$1,file){
return (function (p1__36422_SHARP_,p2__36423_SHARP_){
if(cljs.core._EQ_.call(null,p1__36422_SHARP_,p2__36423_SHARP_)){
return p1__36422_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__36427,map__36427__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36433){
var map__36434 = p__36433;
var map__36434__$1 = ((((!((map__36434 == null)))?((((map__36434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36434):map__36434);
var match_length = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36429_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36429_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
var args36436 = [];
var len__17863__auto___36439 = arguments.length;
var i__17864__auto___36440 = (0);
while(true){
if((i__17864__auto___36440 < len__17863__auto___36439)){
args36436.push((arguments[i__17864__auto___36440]));

var G__36441 = (i__17864__auto___36440 + (1));
i__17864__auto___36440 = G__36441;
continue;
} else {
}
break;
}

var G__36438 = args36436.length;
switch (G__36438) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36436.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36443_SHARP_,p2__36444_SHARP_){
return cljs.core.assoc.call(null,p1__36443_SHARP_,cljs.core.get.call(null,p2__36444_SHARP_,key),p2__36444_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36445){
var map__36448 = p__36445;
var map__36448__$1 = ((((!((map__36448 == null)))?((((map__36448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36448):map__36448);
var f_data = map__36448__$1;
var file = cljs.core.get.call(null,map__36448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36450,files_msg){
var map__36457 = p__36450;
var map__36457__$1 = ((((!((map__36457 == null)))?((((map__36457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36457):map__36457);
var opts = map__36457__$1;
var on_cssload = cljs.core.get.call(null,map__36457__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36459_36463 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36460_36464 = null;
var count__36461_36465 = (0);
var i__36462_36466 = (0);
while(true){
if((i__36462_36466 < count__36461_36465)){
var f_36467 = cljs.core._nth.call(null,chunk__36460_36464,i__36462_36466);
figwheel.client.file_reloading.reload_css_file.call(null,f_36467);

var G__36468 = seq__36459_36463;
var G__36469 = chunk__36460_36464;
var G__36470 = count__36461_36465;
var G__36471 = (i__36462_36466 + (1));
seq__36459_36463 = G__36468;
chunk__36460_36464 = G__36469;
count__36461_36465 = G__36470;
i__36462_36466 = G__36471;
continue;
} else {
var temp__4425__auto___36472 = cljs.core.seq.call(null,seq__36459_36463);
if(temp__4425__auto___36472){
var seq__36459_36473__$1 = temp__4425__auto___36472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36459_36473__$1)){
var c__17608__auto___36474 = cljs.core.chunk_first.call(null,seq__36459_36473__$1);
var G__36475 = cljs.core.chunk_rest.call(null,seq__36459_36473__$1);
var G__36476 = c__17608__auto___36474;
var G__36477 = cljs.core.count.call(null,c__17608__auto___36474);
var G__36478 = (0);
seq__36459_36463 = G__36475;
chunk__36460_36464 = G__36476;
count__36461_36465 = G__36477;
i__36462_36466 = G__36478;
continue;
} else {
var f_36479 = cljs.core.first.call(null,seq__36459_36473__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36479);

var G__36480 = cljs.core.next.call(null,seq__36459_36473__$1);
var G__36481 = null;
var G__36482 = (0);
var G__36483 = (0);
seq__36459_36463 = G__36480;
chunk__36460_36464 = G__36481;
count__36461_36465 = G__36482;
i__36462_36466 = G__36483;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36457,map__36457__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36457,map__36457__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1477646669738