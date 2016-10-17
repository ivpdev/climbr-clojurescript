// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.figures.climber');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.app_state');
climbr.figures.climber.climber = (function (){var climber = climbr.matter.matter.composite.create();
var body = climbr.matter.matter.bodies.circle((400),(400),(10));
var left_hand = climbr.matter.matter.bodies.circle((350),(400),(5));
var right_hand = climbr.matter.matter.bodies.circle((450),(400),(5));
var left_arm = climbr.matter.matter.constraint.create({"bodyA": left_hand, "bodyB": body, "stiffness": 0.3});
var right_arm = climbr.matter.matter.constraint.create({"bodyA": right_hand, "bodyB": body, "stiffness": 0.3});
climbr.matter.matter.data_BANG_.call(null,"class","hand",left_hand);

climbr.matter.matter.data_BANG_.call(null,"name","h1",left_hand);

climbr.matter.matter.data_BANG_.call(null,"class","hand",right_hand);

climbr.matter.matter.data_BANG_.call(null,"name","h2",right_hand);

cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),new cljs.core.Keyword(null,"body","body",-2049205669)], null),body);

cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),new cljs.core.Keyword(null,"h1","h1",-1896887462)], null),left_hand);

cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),new cljs.core.Keyword(null,"h2","h2",-372662728)], null),right_hand);

climbr.matter.matter.composite.add(climber,left_hand);

climbr.matter.matter.composite.add(climber,right_hand);

climbr.matter.matter.composite.add(climber,body);

climbr.matter.matter.composite.add(climber,left_arm);

climbr.matter.matter.composite.add(climber,right_arm);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"climber","climber",1752810721),climber,new cljs.core.Keyword(null,"h1","h1",-1896887462),left_hand,new cljs.core.Keyword(null,"h2","h2",-372662728),right_hand,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
})();

//# sourceMappingURL=climber.js.map?rel=1476479779510