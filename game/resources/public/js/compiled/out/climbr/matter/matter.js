// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.matter.matter');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
climbr.matter.matter.bodies = Matter.Bodies;
climbr.matter.matter.body = Matter.Body;
climbr.matter.matter.composite = Matter.Composite;
climbr.matter.matter.constraint = Matter.Constraint;
climbr.matter.matter.engine = Matter.Engine;
climbr.matter.matter.render = Matter.Render;
climbr.matter.matter.runner = Matter.Runner;
climbr.matter.matter.world = Matter.World;
climbr.matter.matter.mouse_constraint = Matter.MouseConstraint;
climbr.matter.matter.events = Matter.Events;
climbr.matter.matter.bounds_contain_QMARK_ = (function climbr$matter$matter$bounds_contain_QMARK_(bounds,point){
return Matter.Bounds.contains(bounds,point);
});
climbr.matter.matter.data_BANG_ = (function climbr$matter$matter$data_BANG_(key,value,object){

if(cljs.core.truth_(object)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("object should be not null"),cljs.core.str("\n"),cljs.core.str("object")].join('')));
}

var data = object.climbr_data;
return object.climbr_data = cljs.core.assoc.call(null,data,key,value);
});
climbr.matter.matter.read_data = (function climbr$matter$matter$read_data(key,object){

var data = object.climbr_data;
return cljs.core.get.call(null,data,key);
});
climbr.matter.matter.apply_force = (function climbr$matter$matter$apply_force(body,force){
var map__25454 = force;
var map__25454__$1 = ((((!((map__25454 == null)))?((((map__25454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var x = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Matter.Body.applyForce(body,body.position,({"x": x, "y": y}));
});
climbr.matter.matter.y = (function climbr$matter$matter$y(body){
return cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,body.position),"y");
});
climbr.matter.matter.x = (function climbr$matter$matter$x(body){
return cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,body.position),"x");
});
climbr.matter.matter.set_density = (function climbr$matter$matter$set_density(target,density){
return climbr.matter.matter.body.setDensity(target,density);
});
climbr.matter.matter.get_all_world_bodies = (function climbr$matter$matter$get_all_world_bodies(){
var engine = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
var my_world = engine.world;
return climbr.matter.matter.composite.allBodies(my_world);
});
climbr.matter.matter.find_world_bodies = (function climbr$matter$matter$find_world_bodies(predicate){
var world_bodies = climbr.matter.matter.get_all_world_bodies.call(null);
return cljs.core.filter.call(null,predicate,world_bodies);
});
climbr.matter.matter.is_above_QMARK_ = (function climbr$matter$matter$is_above_QMARK_(testee,target,opts){
var testee_center_x = climbr.matter.matter.x.call(null,testee);
var testee_cetner_y = climbr.matter.matter.y.call(null,testee);
var target_bounds = target.bounds;
var margin = new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(opts);
var y_border = (testee_cetner_y + margin);
var result = climbr.matter.matter.bounds_contain_QMARK_.call(null,target_bounds,({"x": testee_center_x, "y": y_border}));
return climbr.matter.matter.bounds_contain_QMARK_.call(null,target_bounds,({"x": testee_center_x, "y": y_border}));
});

//# sourceMappingURL=matter.js.map?rel=1482013017263