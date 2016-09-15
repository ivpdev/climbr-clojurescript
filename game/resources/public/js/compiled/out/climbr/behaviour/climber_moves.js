// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.climber_moves');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.figures.boulders');
goog.require('cljs.core.async');
goog.require('climbr.controls.keyboard');
climbr.behaviour.climber_moves.def_ = (function climbr$behaviour$climber_moves$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.climber_moves.def_.cljs$lang$macro = true;
climbr.behaviour.climber_moves.init_boulder_touch_events_BANG_ = (function climbr$behaviour$climber_moves$init_boulder_touch_events_BANG_(engine){
return climbr.matter.matter.events.on(engine,"collisionStart",(function (e){
var pairs = e.pairs;
var pair = (cljs.core.truth_(pairs.length)?(pairs[(0)]):null);
var body_a = (cljs.core.truth_(pair)?pair.bodyA:null);
var body_b = (cljs.core.truth_(pair)?pair.bodyB:null);
var class_a = climbr.matter.matter.read_data.call(null,"class",body_a);
var class_b = climbr.matter.matter.read_data.call(null,"class",body_b);
var touched_a_QMARK_ = (cljs.core._EQ_.call(null,"boulder",class_a)) && (cljs.core._EQ_.call(null,"hand",class_b));
var touched_b_QMARK_ = (cljs.core._EQ_.call(null,"boulder",class_b)) && (cljs.core._EQ_.call(null,"hand",class_a));
var hand = ((touched_a_QMARK_)?body_b:((touched_b_QMARK_)?body_a:null
));
var touched_boulder = ((touched_a_QMARK_)?body_a:((touched_b_QMARK_)?body_b:null
));
var touched_boulder_QMARK_ = cljs.core.not_EQ_.call(null,touched_boulder,null);
var hand_name = ((touched_boulder_QMARK_)?climbr.matter.matter.read_data.call(null,"name",hand):null);
var key_boulder = (function (){var G__23765 = hand_name;
switch (G__23765) {
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
var existing_boulder = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),key_boulder);
if((touched_boulder_QMARK_) && ((existing_boulder == null))){
var boulder = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": touched_boulder});
climbr.matter.matter.world.addConstraint(engine.world,boulder);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_boulder,boulder);
} else {
return null;
}
}));
});
climbr.behaviour.climber_moves.init_approaching_watch_BANG_ = (function climbr$behaviour$climber_moves$init_approaching_watch_BANG_(){
var climber = new cljs.core.Keyword(null,"climber","climber",1752810721).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hand2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var boulders = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(climbr.figures.boulders.boulders);
return climbr.utils.utils.watch_approaching_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hand1,new cljs.core.Keyword(null,"or","or",235744169),hand2], null),new cljs.core.Keyword(null,"approaches","approaches",24194266),boulders,new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),(50)], null),new cljs.core.Keyword(null,"do","do",46310725),((function (climber,hand1,hand2,boulders){
return (function (hand,boulder){
var hand_key = null;
return cljs.core.println.call(null,"approached!");
});})(climber,hand1,hand2,boulders))
], null));
});
climbr.behaviour.climber_moves.def_.call(null,climbr.behaviour.climber_moves.not_nil_QMARK_,cljs.core.complement.call(null,cljs.core.nil_QMARK_));

//# sourceMappingURL=climber_moves.js.map?rel=1473917912057