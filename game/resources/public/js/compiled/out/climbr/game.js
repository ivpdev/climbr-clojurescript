// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.game');
goog.require('cljs.core');
goog.require('climbr.figures.levels');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
climbr.game.start_BANG_ = (function climbr$game$start_BANG_(){
var engine = climbr.game.setup_engine_BANG_.call(null);
climbr.game.setup_world_base_BANG_.call(null,engine);

climbr.game.setup_level_BANG_.call(null,engine);

climbr.game.setup_climber_BANG_.call(null,engine);

climbr.game.watch_reaching_top_BANG_.call(null,engine);

climbr.game.run_engine_BANG_.call(null,engine);

return climbr.game.start_timer_BANG_.call(null);
});
/**
 * setup world base components which are the same for all the levels
 */
climbr.game.setup_world_base_BANG_ = (function climbr$game$setup_world_base_BANG_(engine){
var world = engine.world;
var mouse_constraint = climbr.matter.matter.mouse_constraint.create(engine);
return climbr.matter.matter.world.add(world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,mouse_constraint], null)));
});
/**
 * load level based on URL param and put it into the world
 */
climbr.game.setup_level_BANG_ = (function climbr$game$setup_level_BANG_(engine){
var level_name = climbr.utils.utils.get_level_name.call(null);
var level = climbr.figures.levels.get.call(null,level_name);
var level_composite = new cljs.core.Keyword(null,"composite","composite",-257118970).cljs$core$IFn$_invoke$arity$1(level);
var world = engine.world;
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level);

return climbr.matter.matter.world.add(world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level_composite], null)));
});
/**
 * setup climber and put him into the world
 */
climbr.game.setup_climber_BANG_ = (function climbr$game$setup_climber_BANG_(engine,level){
var my_world = engine.world;
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(my_world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climber], null)));

climbr.behaviour.climber_moves.watch_hand_can_grab_boulder_BANG_.call(null);

climbr.behaviour.user_actions.setup_climber_grab_events_BANG_.call(null,engine,level);

climbr.behaviour.user_actions.setup_climber_release_events_BANG_.call(null,engine);

return climbr.behaviour.user_actions.setup_climber_moves_BANG_.call(null);
});
/**
 * create matter.js engine
 */
climbr.game.setup_engine_BANG_ = (function climbr$game$setup_engine_BANG_(){
var engine = climbr.matter.matter.engine.create(document.body);
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine","engine",1459054265),engine);

return engine;
});
climbr.game.run_engine_BANG_ = (function climbr$game$run_engine_BANG_(engine){
var runner = climbr.matter.matter.engine.run(engine);
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine-runner","engine-runner",136861880),runner);
});
climbr.game.stop_engine_BANG_ = (function climbr$game$stop_engine_BANG_(){
var runner = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"engine-runner","engine-runner",136861880));
return climbr.matter.matter.runner.stop(runner);
});
climbr.game.start_timer_BANG_ = (function climbr$game$start_timer_BANG_(){
return cljs.core.println.call(null,"TIMER STARTED");
});
climbr.game.watch_reaching_top_BANG_ = (function climbr$game$watch_reaching_top_BANG_(){
return climbr.behaviour.climber_moves.watch_hand_reaches_top_BANG_.call(null,climbr.game.win_game_BANG_);
});
climbr.game.game_is_over_QMARK_ = false;
climbr.game.win_game_BANG_ = (function climbr$game$win_game_BANG_(){
if(cljs.core.truth_(climbr.game.game_is_over_QMARK_)){
return null;
} else {
window.alert("You won!");

window.location = "index.html";

return climbr.game.game_is_over_QMARK_ = true;
}
});

//# sourceMappingURL=game.js.map?rel=1481836787971