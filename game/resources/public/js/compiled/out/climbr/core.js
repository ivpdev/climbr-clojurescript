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
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TODO","TODO",-523795145),climbr.core.rename,"boulders",climbr.core.to,"holds"], null);
cljs.core.println.call(null,"Hello Climber!");
var engine_20987 = climbr.matter.matter.engine.create(document.body);
var mouse_constraint_20988 = climbr.matter.matter.mouse_constraint.create(engine_20987);
var climber_20989 = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(engine_20987.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,new cljs.core.Keyword(null,"whole","whole",-1395468966).cljs$core$IFn$_invoke$arity$1(climbr.figures.boulders.boulders),climber_20989,mouse_constraint_20988], null)));

climbr.behaviour.climber_moves.init_boulder_touch_events_BANG_.call(null,engine_20987);

climbr.behaviour.climber_moves.init_approaching_watch_BANG_.call(null,engine_20987);

climbr.behaviour.user_actions.setup_boulder_release_events_BANG_.call(null,engine_20987);

climbr.behaviour.user_actions.setup_user_controls_BANG_.call(null);

climbr.matter.matter.engine.run(engine_20987);
climbr.core.on_js_reload = (function climbr$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1473978122038