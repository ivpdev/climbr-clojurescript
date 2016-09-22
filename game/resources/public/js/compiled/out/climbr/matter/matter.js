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
var map__39906 = force;
var map__39906__$1 = ((((!((map__39906 == null)))?((((map__39906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39906):map__39906);
var x = cljs.core.get.call(null,map__39906__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__39906__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Matter.Body.applyForce(body,body.position,{"x": x, "y": y});
});
climbr.matter.matter.y = (function climbr$matter$matter$y(body){
return cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,body.position),"y");
});

//# sourceMappingURL=matter.js.map?rel=1474574282568