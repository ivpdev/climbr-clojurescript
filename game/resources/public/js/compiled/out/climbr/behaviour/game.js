// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.game');
goog.require('cljs.core');
goog.require('climbr.figures.levels');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.ground');
goog.require('climbr.behaviour.climber_moves');
goog.require('climbr.behaviour.user_actions');
climbr.behaviour.game.start_game = (function climbr$behaviour$game$start_game(){
var engine = climbr.behaviour.game.setup_engine_BANG_.call(null);
climbr.behaviour.game.setup_world_base_BANG_.call(null,engine);

climbr.behaviour.game.setup_level_BANG_.call(null,engine);

climbr.behaviour.game.setup_climber_BANG_.call(null,engine);

climbr.behaviour.game.watch_reaching_top_BANG_.call(null,engine);

climbr.behaviour.game.run_engine_BANG_.call(null);

return climbr.behaviour.game.start_timer_BANG_.call(null);
});
/**
 * setup world base components which are the same for all the levels
 */
climbr.behaviour.game.setup_world_base_BANG_ = (function climbr$behaviour$game$setup_world_base_BANG_(engine){
var my_world = engine.world;
var mouse_constraint = climbr.matter.matter.mouse_constraint.create(engine);
return climbr.matter.matter.world.add(my_world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.figures.ground.ground,mouse_constraint], null)));
});
/**
 * load level based on URL param and put it into the world
 */
climbr.behaviour.game.setup_level_BANG_ = (function climbr$behaviour$game$setup_level_BANG_(engine){
return climbr.behaviour.game.do_let.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.game.level_name,climbr.utils.utils.get_level_name.call(null),climbr.behaviour.game.level,climbr.figures.levels.get.call(null,climbr.behaviour.game.level_name),climbr.behaviour.game.level_composite,new cljs.core.Keyword(null,"composite","composite",-257118970).cljs$core$IFn$_invoke$arity$1(climbr.behaviour.game.level)], null),cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),climbr.behaviour.game.level),climbr.matter.matter.world.add(climbr.behaviour.game.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.game.level_composite], null))));
});
/**
 * setup climber and put him into the world
 */
climbr.behaviour.game.setup_climber_BANG_ = (function climbr$behaviour$game$setup_climber_BANG_(engine,level){
return climbr.behaviour.game.do_let.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.game.my_world,engine.world,climbr.behaviour.game.climber,new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber)], null),climbr.matter.matter.world.add(climbr.behaviour.game.my_world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.game.climber], null))),climbr.behaviour.climber_moves.watch_hand_can_grab_boulder_BANG_.call(null,engine,level),climbr.behaviour.user_actions.setup_climber_grab_events_BANG_.call(null,engine,level),climbr.behaviour.user_actions.setup_climber_release_events_BANG_.call(null,engine),climbr.behaviour.user_actions.setup_climber_moves_BANG_.call(null));
});
/**
 * create matter.js engine
 */
climbr.behaviour.game.setup_engine_BANG_ = (function climbr$behaviour$game$setup_engine_BANG_(){
return climbr.behaviour.game.do_let.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.game.engine,climbr.matter.matter.engine.create(document.body)], null),cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"engine","engine",1459054265),climbr.behaviour.game.engine),climbr.behaviour.game.engine);
});
climbr.behaviour.game.run_engine_BANG_ = (function climbr$behaviour$game$run_engine_BANG_(engine){
return climbr.matter.matter.engine.run(engine);
});
climbr.behaviour.game.start_timer = (function climbr$behaviour$game$start_timer(){
return cljs.core.println.call(null,"TIMER STARTED");
});

//# sourceMappingURL=game.js.map?rel=1478002230771