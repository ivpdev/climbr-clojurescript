// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('climbr.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__53577__delegate = function (x){
if(cljs.core.truth_(climbr.core.on_js_reload)){
return cljs.core.apply.call(null,climbr.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'climbr.core/on-js-reload' is missing");
}
};
var G__53577 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__53578__i = 0, G__53578__a = new Array(arguments.length -  0);
while (G__53578__i < G__53578__a.length) {G__53578__a[G__53578__i] = arguments[G__53578__i + 0]; ++G__53578__i;}
  x = new cljs.core.IndexedSeq(G__53578__a,0);
} 
return G__53577__delegate.call(this,x);};
G__53577.cljs$lang$maxFixedArity = 0;
G__53577.cljs$lang$applyTo = (function (arglist__53579){
var x = cljs.core.seq(arglist__53579);
return G__53577__delegate(x);
});
G__53577.cljs$core$IFn$_invoke$arity$variadic = G__53577__delegate;
return G__53577;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1483135262450