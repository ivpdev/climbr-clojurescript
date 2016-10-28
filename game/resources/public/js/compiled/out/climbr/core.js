// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.core');
goog.require('cljs.core');
goog.require('climbr.figures.levels');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TODO","TODO",-523795145),climbr.core.rename,"boulders",climbr.core.to,"holds"], null);
cljs.core.println.call(null,"Hello Climber!");
climbr.core.set_level_BANG_ = (function climbr$core$set_level_BANG_(level_name,world){
var level = climbr.figures.levels.get.call(null,level_name);
var level_composite = new cljs.core.Keyword(null,"composite","composite",-257118970).cljs$core$IFn$_invoke$arity$1(level);
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level);

return climbr.matter.matter.world.add(world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level_composite], null)));
});
var engine_39071 = climbr.matter.matter.engine.create(document.body);
var mouse_constraint_39072 = climbr.matter.matter.mouse_constraint.create(engine_39071);
var climber_39073 = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var my_world_39074 = engine_39071.world;
var level_name_39075 = climbr.utils.utils.get_level_name.call(null);
climbr.matter.matter.world.add(my_world_39074,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,climber_39073,mouse_constraint_39072], null)));

climbr.core.set_level_BANG_.call(null,level_name_39075,my_world_39074);

cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine","engine",1459054265),engine_39071);

climbr.behaviour.climber_moves.init_approaching_watch_BANG_.call(null,engine_39071);

climbr.behaviour.user_actions.setup_climber_release_events_BANG_.call(null,engine_39071);

climbr.behaviour.user_actions.setup_climber_grab_events_BANG_.call(null,engine_39071);

climbr.behaviour.user_actions.setup_climber_moves_BANG_.call(null);

climbr.matter.matter.engine.run(engine_39071);
climbr.core.on_js_reload = (function climbr$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1477647000435