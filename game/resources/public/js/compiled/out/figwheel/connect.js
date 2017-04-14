// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('climbr.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40040__delegate = function (x){
if(cljs.core.truth_(climbr.core.on_js_reload)){
return cljs.core.apply.call(null,climbr.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'climbr.core/on-js-reload' is missing");
}
};
var G__40040 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40041__i = 0, G__40041__a = new Array(arguments.length -  0);
while (G__40041__i < G__40041__a.length) {G__40041__a[G__40041__i] = arguments[G__40041__i + 0]; ++G__40041__i;}
  x = new cljs.core.IndexedSeq(G__40041__a,0);
} 
return G__40040__delegate.call(this,x);};
G__40040.cljs$lang$maxFixedArity = 0;
G__40040.cljs$lang$applyTo = (function (arglist__40042){
var x = cljs.core.seq(arglist__40042);
return G__40040__delegate(x);
});
G__40040.cljs$core$IFn$_invoke$arity$variadic = G__40040__delegate;
return G__40040;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1492194219910