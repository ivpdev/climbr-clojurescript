// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.game');
goog.require('cljs.core');
goog.require('climbr.figures.levels');
goog.require('climbr.app_state');
goog.require('climbr.figures.level_generator');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
/**
 * create matter.js engine
 */
climbr.game.setup_engine_BANG_ = (function climbr$game$setup_engine_BANG_(){
var engine = climbr.matter.matter.engine.create();
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine","engine",1459054265),engine);

return engine;
});
/**
 * create matter.js render
 */
climbr.game.setup_render_BANG_ = (function climbr$game$setup_render_BANG_(engine){
var body = document.body;
var render = climbr.matter.matter.render.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),body,new cljs.core.Keyword(null,"engine","engine",1459054265),engine,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wireframes","wireframes",-1841146676),false], null)], null)));
return render;
});
/**
 * setup world base components which are the same for all the levels
 */
climbr.game.setup_world_base_BANG_ = (function climbr$game$setup_world_base_BANG_(engine){
var world = engine.world;
var mouse_constraint = climbr.matter.matter.mouse_constraint.create(engine,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),document.body], null)));
return climbr.matter.matter.world.add(world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,mouse_constraint], null)));
});
/**
 * load level based on URL param and put it into the world
 */
climbr.game.setup_level_BANG_ = (function climbr$game$setup_level_BANG_(engine){
var level_23824 = climbr.figures.levels.get_current_level.call(null);
var level_composite_23825 = new cljs.core.Keyword(null,"composite","composite",-257118970).cljs$core$IFn$_invoke$arity$1(level_23824);
var world_23826 = engine.world;
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level_23824);

climbr.matter.matter.world.add(world_23826,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level_composite_23825], null)));

var level = climbr.figures.levels.get_current_level.call(null);
var level_composite = new cljs.core.Keyword(null,"composite","composite",-257118970).cljs$core$IFn$_invoke$arity$1(level);
var world = engine.world;
cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level);

return climbr.matter.matter.world.add(world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level_composite], null)));
});
/**
 * setup climber and put him into the world
 */
climbr.game.setup_climber_BANG_ = (function climbr$game$setup_climber_BANG_(engine){
var my_world = engine.world;
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
climbr.matter.matter.world.add(my_world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climber], null)));

climbr.behaviour.climber_moves.watch_hand_can_hook_boulder_BANG_.call(null);

climbr.behaviour.user_actions.setup_climber_hook_events_BANG_.call(null,engine);

climbr.behaviour.user_actions.setup_climber_release_events_BANG_.call(null,engine);

return climbr.behaviour.user_actions.setup_climber_moves_BANG_.call(null);
});
climbr.game.run_engine_BANG_ = (function climbr$game$run_engine_BANG_(engine){
var runner = climbr.matter.matter.engine.run(engine);
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine-runner","engine-runner",136861880),runner);
});
climbr.game.run_render_BANG_ = (function climbr$game$run_render_BANG_(render){
return climbr.matter.matter.render.run(render);
});
climbr.game.stop_engine_BANG_ = (function climbr$game$stop_engine_BANG_(){
var runner = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"engine-runner","engine-runner",136861880));
return climbr.matter.matter.runner.stop(runner);
});
climbr.game.start_timer_BANG_ = (function climbr$game$start_timer_BANG_(){
return cljs.core.println.call(null,"TIMER STARTED");
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
climbr.game.watch_reaching_top_BANG_ = (function climbr$game$watch_reaching_top_BANG_(){
return climbr.behaviour.climber_moves.watch_hand_reaches_top_BANG_.call(null,climbr.game.win_game_BANG_);
});
climbr.game.start_BANG_ = (function climbr$game$start_BANG_(){
var engine = climbr.game.setup_engine_BANG_.call(null);
var render = climbr.game.setup_render_BANG_.call(null,engine);
climbr.figures.level_generator.generate_boulder_candidate.call(null,(81));

climbr.game.setup_world_base_BANG_.call(null,engine);

climbr.game.setup_level_BANG_.call(null,engine);

climbr.game.setup_climber_BANG_.call(null,engine);

climbr.game.watch_reaching_top_BANG_.call(null);

climbr.game.run_engine_BANG_.call(null,engine);

climbr.game.run_render_BANG_.call(null,render);

return climbr.game.start_timer_BANG_.call(null);
});

//# sourceMappingURL=game.js.map?rel=1487058560223