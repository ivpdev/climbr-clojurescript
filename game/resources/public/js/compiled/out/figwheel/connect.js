// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('climbr.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31714__delegate = function (x){
if(cljs.core.truth_(climbr.core.on_js_reload)){
return cljs.core.apply.call(null,climbr.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'climbr.core/on-js-reload' is missing");
}
};
var G__31714 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31715__i = 0, G__31715__a = new Array(arguments.length -  0);
while (G__31715__i < G__31715__a.length) {G__31715__a[G__31715__i] = arguments[G__31715__i + 0]; ++G__31715__i;}
  x = new cljs.core.IndexedSeq(G__31715__a,0);
} 
return G__31714__delegate.call(this,x);};
G__31714.cljs$lang$maxFixedArity = 0;
G__31714.cljs$lang$applyTo = (function (arglist__31716){
var x = cljs.core.seq(arglist__31716);
return G__31714__delegate(x);
});
G__31714.cljs$core$IFn$_invoke$arity$variadic = G__31714__delegate;
return G__31714;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1484862761843