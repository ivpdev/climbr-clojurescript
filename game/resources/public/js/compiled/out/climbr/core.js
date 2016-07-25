// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.core');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.boulders');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TODO","TODO",-523795145),"new climber behaviour"], null);
cljs.core.println.call(null,"Hello Climber!");
var engine_19130 = climbr.matter.matter.engine.create(document.body);
var mouse_constraint_19131 = climbr.matter.matter.mouse_constraint.create(engine_19130);
var climber_19132 = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var left_hand_19133 = new cljs.core.Keyword(null,"left-hand","left-hand",-817701352).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var right_hand_19134 = new cljs.core.Keyword(null,"right-hand","right-hand",1578446749).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var body_19135 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(engine_19130.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,climbr.figures.boulders.boulders,climber_19132,mouse_constraint_19131], null)));

climbr.behaviour.climber_moves.init_boulder_touch_events_BANG_.call(null,engine_19130);

climbr.behaviour.user_actions.setup_boulder_release_events_BANG_.call(null,engine_19130);

climbr.behaviour.user_actions.setup_user_controls_BANG_.call(null);

climbr.matter.matter.engine.run(engine_19130);
climbr.core.on_js_reload = (function climbr$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1469475539034