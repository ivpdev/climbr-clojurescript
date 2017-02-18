// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.figures');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.utils.utils');
climbr.figures.figures.get_boulder_color = (function climbr$figures$figures$get_boulder_color(standable_QMARK_,hookable_QMARK_){
if(cljs.core.truth_((function (){var and__18744__auto__ = standable_QMARK_;
if(cljs.core.truth_(and__18744__auto__)){
return hookable_QMARK_;
} else {
return and__18744__auto__;
}
})())){
return "#57846d";
} else {
if(cljs.core.truth_(standable_QMARK_)){
return "#1abc68";
} else {
if(cljs.core.truth_(hookable_QMARK_)){
return "#bcbcbc";
} else {
return "#e2e2e2";

}
}
}
});
climbr.figures.figures.get_all_standables = (function climbr$figures$figures$get_all_standables(){
return climbr.matter.matter.find_world_bodies.call(null,(function (p1__37908_SHARP_){
return climbr.matter.matter.read_data.call(null,"standable",p1__37908_SHARP_) === true;
}));
});
climbr.figures.figures.create_boulder = (function climbr$figures$figures$create_boulder(opts){
var map__37911 = opts;
var map__37911__$1 = ((((!((map__37911 == null)))?((((map__37911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37911):map__37911);
var x = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var standable_QMARK_ = climbr.utils.utils.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"standable","standable",492063634).cljs$core$IFn$_invoke$arity$1(opts));
var hookable_QMARK_ = climbr.utils.utils.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"hookable","hookable",2044539136).cljs$core$IFn$_invoke$arity$1(opts));
var color = climbr.figures.figures.get_boulder_color.call(null,standable_QMARK_,hookable_QMARK_);
var base_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fillStyle","fillStyle",1168675854),color], null)], null);
var params = (cljs.core.truth_(standable_QMARK_)?base_params:cljs.core.assoc.call(null,base_params,new cljs.core.Keyword(null,"collisionFilter","collisionFilter",-161885110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),"red"], null)));
var boulder = climbr.matter.matter.bodies.rectangle(x,y,width,height,cljs.core.clj__GT_js.call(null,params));
if(cljs.core.truth_(standable_QMARK_)){
climbr.matter.matter.data_BANG_.call(null,"standable",true,boulder);
} else {
}

if(cljs.core.truth_(hookable_QMARK_)){
climbr.matter.matter.data_BANG_.call(null,"hookable",true,boulder);
} else {
}

return boulder;
});

//# sourceMappingURL=figures.js.map?rel=1487434215033