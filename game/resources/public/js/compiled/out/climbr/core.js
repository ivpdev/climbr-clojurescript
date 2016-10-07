// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.core');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.boulders');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TODO","TODO",-523795145),climbr.core.rename,"boulders",climbr.core.to,"holds"], null);
cljs.core.println.call(null,"Hello Climber!");
var engine_36642 = climbr.matter.matter.engine.create(document.body);
var mouse_constraint_36643 = climbr.matter.matter.mouse_constraint.create(engine_36642);
var climber_36644 = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(engine_36642.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,new cljs.core.Keyword(null,"whole","whole",-1395468966).cljs$core$IFn$_invoke$arity$1(climbr.figures.boulders.boulders),climber_36644,mouse_constraint_36643], null)),cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine","engine",1459054265),engine_36642));

climbr.behaviour.climber_moves.init_approaching_watch_BANG_.call(null,engine_36642);

climbr.behaviour.user_actions.setup_boulder_release_events_BANG_.call(null,engine_36642);

climbr.behaviour.user_actions.setup_boulder_grab_events_BANG_.call(null,engine_36642);

climbr.behaviour.user_actions.setup_user_controls_BANG_.call(null);

climbr.matter.matter.engine.run(engine_36642);
climbr.core.on_js_reload = (function climbr$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1475791930236