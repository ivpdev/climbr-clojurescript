// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.behaviour.climber_moves');
goog.require('cljs.core');
goog.require('climbr.figures.levels');
goog.require('climbr.behaviour.position_watches');
goog.require('climbr.app_state');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('cljs.core.async');
goog.require('climbr.controls.keyboard');
climbr.behaviour.climber_moves.def_ = (function climbr$behaviour$climber_moves$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__19593__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19593__auto__);
})(),(function (){var x__19593__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19593__auto__);
})())));
});

climbr.behaviour.climber_moves.def_.cljs$lang$macro = true;
climbr.behaviour.climber_moves.update_hand_can_hook_BANG_ = (function climbr$behaviour$climber_moves$update_hand_can_hook_BANG_(can_hook_QMARK_,hand,boulder){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__27762 = hand_name;
switch (G__27762) {
case "h1":
return new cljs.core.Keyword(null,"h1","h1",-1896887462);

break;
case "h2":
return new cljs.core.Keyword(null,"h2","h2",-372662728);

break;
default:
return null;

}
})();
var update_func = (cljs.core.truth_(can_hook_QMARK_)?cljs.core.conj:cljs.core.disj);
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-hook","can-hook",301323690),hand_key], null),update_func,boulder);
});
/**
 * Watch when hands are getting close enough to boulders for being able to hook them.
 */
climbr.behaviour.climber_moves.watch_hand_can_hook_boulder_BANG_ = (function climbr$behaviour$climber_moves$watch_hand_can_hook_boulder_BANG_(){
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var level = climbr.figures.levels.get_current_level.call(null);
var boulders = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(level);
var hookable_boulders = cljs.core.filter.call(null,((function (climber,hand1,hand2,level,boulders){
return (function (p1__27764_SHARP_){
return climbr.matter.matter.hookable_QMARK_.call(null,p1__27764_SHARP_);
});})(climber,hand1,hand2,level,boulders))
,boulders);
return climbr.behaviour.position_watches.watch_approaching_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hand1,hand2], null),new cljs.core.Keyword(null,"approaching","approaching",-564158407),hookable_boulders,new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),(20)], null),new cljs.core.Keyword(null,"when-near","when-near",-35119232),cljs.core.partial.call(null,climbr.behaviour.climber_moves.update_hand_can_hook_BANG_,true),new cljs.core.Keyword(null,"when-far","when-far",2057815104),cljs.core.partial.call(null,climbr.behaviour.climber_moves.update_hand_can_hook_BANG_,false)], null));
});
/**
 * Watch when a hand is reaching top. When this happens the on-reach! function is called.
 */
climbr.behaviour.climber_moves.watch_hand_reaches_top_BANG_ = (function climbr$behaviour$climber_moves$watch_hand_reaches_top_BANG_(on_reach){
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var over_top_QMARK_ = ((function (climber,hand1,hand2){
return (function (x,y){
return (y < (0));
});})(climber,hand1,hand2))
;
return climbr.behaviour.position_watches.watch_position_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hand1,new cljs.core.Keyword(null,"or","or",235744169),hand2], null),new cljs.core.Keyword(null,"is","is",369128998),over_top_QMARK_,new cljs.core.Keyword(null,"when-true","when-true",-657079170),on_reach], null));
});

//# sourceMappingURL=climber_moves.js.map?rel=1484862758342