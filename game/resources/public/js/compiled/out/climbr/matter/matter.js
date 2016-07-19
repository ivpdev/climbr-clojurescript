// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.matter.matter');
goog.require('cljs.core');
climbr.matter.matter.bodies = Matter.Bodies;
climbr.matter.matter.body = Matter.Body;
climbr.matter.matter.composite = Matter.Composite;
climbr.matter.matter.constraint = Matter.Constraint;
climbr.matter.matter.engine = Matter.Engine;
climbr.matter.matter.world = Matter.World;
climbr.matter.matter.mouse_constraint = Matter.MouseConstraint;
climbr.matter.matter.events = Matter.Events;
climbr.matter.matter.data_BANG_ = (function climbr$matter$matter$data_BANG_(key,value,object){

var data = object.climbr_data;
return object.climbr_data = cljs.core.assoc.call(null,data,key,value);
});
climbr.matter.matter.read_data = (function climbr$matter$matter$read_data(key,object){

var data = object.climbr_data;
return cljs.core.get.call(null,data,key);
});
climbr.matter.matter.apply_force = (function climbr$matter$matter$apply_force(body,force){
var map__19525 = force;
var map__19525__$1 = ((((!((map__19525 == null)))?((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);
var x = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Matter.Body.applyForce(body,body.position,{"x": x, "y": y});
});

//# sourceMappingURL=matter.js.map?rel=1457780986564