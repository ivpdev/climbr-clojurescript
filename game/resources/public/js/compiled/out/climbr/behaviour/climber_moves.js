// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.climber_moves');
goog.require('cljs.core');
goog.require('climbr.behaviour.position_watches');
goog.require('climbr.app_state');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.boulders');
goog.require('cljs.core.async');
goog.require('climbr.controls.keyboard');
climbr.behaviour.climber_moves.def_ = (function climbr$behaviour$climber_moves$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.climber_moves.def_.cljs$lang$macro = true;
climbr.behaviour.climber_moves.init_approaching_watch_BANG_ = (function climbr$behaviour$climber_moves$init_approaching_watch_BANG_(engine){
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var boulders = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(climbr.figures.boulders.boulders);
return climbr.behaviour.position_watches.watch_approaching_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hand1,new cljs.core.Keyword(null,"or","or",235744169),hand2], null),new cljs.core.Keyword(null,"approaching","approaching",-564158407),boulders,new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),(20)], null),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.partial.call(null,climbr.behaviour.climber_moves.update_hand_can_hold_BANG_,new cljs.core.Keyword(null,"add","add",235287739)),new cljs.core.Keyword(null,"off","off",606440789),cljs.core.partial.call(null,climbr.behaviour.climber_moves.update_hand_can_hold_BANG_,new cljs.core.Keyword(null,"remove","remove",-131428414))], null));
});
climbr.behaviour.climber_moves.set_hand_holds_BANG_ = (function climbr$behaviour$climber_moves$set_hand_holds_BANG_(engine,hand,boulder){
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var key_holds = (function (){var G__35457 = hand_name;
switch (G__35457) {
case "h1":
return new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284);

break;
default:
return null;

}
})();
var existing_boulder = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),climbr.behaviour.climber_moves.key_boulder);
if((existing_boulder == null)){
climbr.matter.matter.world.addConstraint(engine.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_holds,constraint);
} else {
return null;
}
});
climbr.behaviour.climber_moves.update_hand_can_hold_BANG_ = (function climbr$behaviour$climber_moves$update_hand_can_hold_BANG_(action,hand,boulder){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__35461 = hand_name;
switch (G__35461) {
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
var update_func = (function (){var G__35462 = (((action instanceof cljs.core.Keyword))?action.fqn:null);
switch (G__35462) {
case "add":
return cljs.core.conj;

break;
case "remove":
return cljs.core.disj;

break;
default:
return null;

}
})();
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-grab","can-grab",-606284184),hand_key], null),update_func,boulder);
});
climbr.behaviour.climber_moves.release_hand_holds_BANG_ = (function climbr$behaviour$climber_moves$release_hand_holds_BANG_(hand,bolder){
return cljs.core.println.call(null,"away!");
});
climbr.behaviour.climber_moves.def_.call(null,climbr.behaviour.climber_moves.not_nil_QMARK_,cljs.core.complement.call(null,cljs.core.nil_QMARK_));

//# sourceMappingURL=climber_moves.js.map?rel=1477646668357