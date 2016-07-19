// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.core');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.boulders');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.behaviour');
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TODO","TODO",-523795145),"new climber behaviour"], null);
cljs.core.println.call(null,"Hello Climber!");
var engine_19786 = climbr.matter.matter.engine.create(document.body);
var mouse_constraint_19787 = climbr.matter.matter.mouse_constraint.create(engine_19786);
var climber_19788 = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var left_hand_19789 = new cljs.core.Keyword(null,"left-hand","left-hand",-817701352).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var right_hand_19790 = new cljs.core.Keyword(null,"right-hand","right-hand",1578446749).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var body_19791 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(engine_19786.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,climbr.figures.boulders.boulders,climber_19788,mouse_constraint_19787], null)));

climbr.behaviour.behaviour.init_boulder_touch_events_BANG_.call(null,engine_19786);

climbr.behaviour.behaviour.init_boulder_release_events_BANG_.call(null,engine_19786);

climbr.behaviour.behaviour.init_climber_moves_BANG_.call(null);

climbr.matter.matter.engine.run(engine_19786);
climbr.core.on_js_reload = (function climbr$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1464635493244