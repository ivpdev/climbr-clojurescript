// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.app_state');
goog.require('climbr.controls.keyboard');
goog.require('cljs.core.async');
climbr.behaviour.user_actions.def_ = (function climbr$behaviour$user_actions$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.user_actions.def_.cljs$lang$macro = true;
climbr.behaviour.user_actions.setup_user_controls_BANG_ = (function climbr$behaviour$user_actions$setup_user_controls_BANG_(){
return climbr.behaviour.user_actions.bind_keys.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"both-hands","both-hands",1160692521),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;

}
}
}
})], null));
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
return false;
});
climbr.behaviour.user_actions.holds_nothing_QMARK_ = (function climbr$behaviour$user_actions$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__16805__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_both_QMARK_ = (function climbr$behaviour$user_actions$holds_both_QMARK_(){
var and__16793__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
} else {
return and__16793__auto__;
}
});
climbr.behaviour.user_actions.h1_holds_QMARK_ = (function climbr$behaviour$user_actions$h1_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467)) == null));
});
climbr.behaviour.user_actions.h2_holds_QMARK_ = (function climbr$behaviour$user_actions$h2_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284)) == null));
});
climbr.behaviour.user_actions.holds_hand_QMARK_ = (function climbr$behaviour$user_actions$holds_hand_QMARK_(hand){
var boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand);
return !((boulder == null));
});
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.01,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.03], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.04,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.04], null)], null);
var objects = (function (){var G__27742 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__27742) {
case "left-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937))], null);

break;
case "right-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "both-hands":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937)),climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "free-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"free","free",801364328))], null);

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__27743 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__27743) {
case "left-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "right-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "both-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "body":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"body","body",-2049205669));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force = (function (){var G__27744 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__27744) {
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(- new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj))], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(where)].join('')));

}
})();
var seq__27745 = cljs.core.seq.call(null,objects);
var chunk__27746 = null;
var count__27747 = (0);
var i__27748 = (0);
while(true){
if((i__27748 < count__27747)){
var o = cljs.core._nth.call(null,chunk__27746,i__27748);
climbr.matter.matter.apply_force.call(null,o,force);

var G__27752 = seq__27745;
var G__27753 = chunk__27746;
var G__27754 = count__27747;
var G__27755 = (i__27748 + (1));
seq__27745 = G__27752;
chunk__27746 = G__27753;
count__27747 = G__27754;
i__27748 = G__27755;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27745);
if(temp__4425__auto__){
var seq__27745__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27745__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__27745__$1);
var G__27756 = cljs.core.chunk_rest.call(null,seq__27745__$1);
var G__27757 = c__17608__auto__;
var G__27758 = cljs.core.count.call(null,c__17608__auto__);
var G__27759 = (0);
seq__27745 = G__27756;
chunk__27746 = G__27757;
count__27747 = G__27758;
i__27748 = G__27759;
continue;
} else {
var o = cljs.core.first.call(null,seq__27745__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__27760 = cljs.core.next.call(null,seq__27745__$1);
var G__27761 = null;
var G__27762 = (0);
var G__27763 = (0);
seq__27745 = G__27760;
chunk__27746 = G__27761;
count__27747 = G__27762;
i__27748 = G__27763;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys = (function climbr$behaviour$user_actions$bind_keys(key_actions){
var keypressed = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed){
return (function (state_27821){
var state_val_27822 = (state_27821[(1)]);
if((state_val_27822 === (7))){
var inst_27807 = (state_27821[(7)]);
var inst_27806 = (state_27821[(2)]);
var inst_27807__$1 = cljs.core.get.call(null,key_actions,inst_27806);
var inst_27808 = (inst_27807__$1 == null);
var state_27821__$1 = (function (){var statearr_27823 = state_27821;
(statearr_27823[(7)] = inst_27807__$1);

return statearr_27823;
})();
if(cljs.core.truth_(inst_27808)){
var statearr_27824_27842 = state_27821__$1;
(statearr_27824_27842[(1)] = (8));

} else {
var statearr_27825_27843 = state_27821__$1;
(statearr_27825_27843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (1))){
var state_27821__$1 = state_27821;
var statearr_27826_27844 = state_27821__$1;
(statearr_27826_27844[(2)] = null);

(statearr_27826_27844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (4))){
var state_27821__$1 = state_27821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27821__$1,(7),keypressed);
} else {
if((state_val_27822 === (6))){
var inst_27817 = (state_27821[(2)]);
var state_27821__$1 = state_27821;
var statearr_27827_27845 = state_27821__$1;
(statearr_27827_27845[(2)] = inst_27817);

(statearr_27827_27845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (3))){
var inst_27819 = (state_27821[(2)]);
var state_27821__$1 = state_27821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27821__$1,inst_27819);
} else {
if((state_val_27822 === (2))){
var state_27821__$1 = state_27821;
var statearr_27828_27846 = state_27821__$1;
(statearr_27828_27846[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (9))){
var inst_27807 = (state_27821[(7)]);
var inst_27811 = inst_27807.call(null);
var state_27821__$1 = state_27821;
var statearr_27830_27847 = state_27821__$1;
(statearr_27830_27847[(2)] = inst_27811);

(statearr_27830_27847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (5))){
var state_27821__$1 = state_27821;
var statearr_27831_27848 = state_27821__$1;
(statearr_27831_27848[(2)] = null);

(statearr_27831_27848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (10))){
var inst_27813 = (state_27821[(2)]);
var state_27821__$1 = (function (){var statearr_27832 = state_27821;
(statearr_27832[(8)] = inst_27813);

return statearr_27832;
})();
var statearr_27833_27849 = state_27821__$1;
(statearr_27833_27849[(2)] = null);

(statearr_27833_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27822 === (8))){
var state_27821__$1 = state_27821;
var statearr_27834_27850 = state_27821__$1;
(statearr_27834_27850[(2)] = null);

(statearr_27834_27850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18830__auto__,keypressed))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed){
return (function() {
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0 = (function (){
var statearr_27838 = [null,null,null,null,null,null,null,null,null];
(statearr_27838[(0)] = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__);

(statearr_27838[(1)] = (1));

return statearr_27838;
});
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1 = (function (state_27821){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_27821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object)){
var ex__18813__auto__ = e27839;
var statearr_27840_27851 = state_27821;
(statearr_27840_27851[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27852 = state_27821;
state_27821 = G__27852;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__ = function(state_27821){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1.call(this,state_27821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_27841 = f__18831__auto__.call(null);
(statearr_27841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_27841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__27854 = hand_name;
switch (G__27854) {
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
return cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),boulder_key);
});
climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_ = (function climbr$behaviour$user_actions$remove_boulder_for_hand_BANG_(hand_name){
var key_boulder = (function (){var G__27857 = hand_name;
switch (G__27857) {
case "h1":
return new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand_name)].join('')));

}
})();
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.dissoc,key_boulder);
});
climbr.behaviour.user_actions.setup_boulder_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_boulder_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand_key){
var hand = climbr.behaviour.user_actions.fetch_hand.call(null,hand_key);
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand_name);
if(!((boulder == null))){
climbr.matter.matter.world.remove(engine.world,boulder);

return climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_.call(null,hand_name);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (state_27929){
var state_val_27930 = (state_27929[(1)]);
if((state_val_27930 === (7))){
var inst_27911 = (state_27929[(2)]);
var state_27929__$1 = state_27929;
var G__27931_27957 = (((inst_27911 instanceof cljs.core.Keyword))?inst_27911.fqn:null);
switch (G__27931_27957) {
case "release-left":
var statearr_27932_27959 = state_27929__$1;
(statearr_27932_27959[(1)] = (9));


break;
case "release-right":
var statearr_27933_27960 = state_27929__$1;
(statearr_27933_27960[(1)] = (10));


break;
default:
var statearr_27934_27961 = state_27929__$1;
(statearr_27934_27961[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (1))){
var state_27929__$1 = state_27929;
var statearr_27935_27962 = state_27929__$1;
(statearr_27935_27962[(2)] = null);

(statearr_27935_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (4))){
var state_27929__$1 = state_27929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27929__$1,(7),keypressed);
} else {
if((state_val_27930 === (13))){
var state_27929__$1 = state_27929;
var statearr_27936_27963 = state_27929__$1;
(statearr_27936_27963[(2)] = null);

(statearr_27936_27963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (6))){
var inst_27925 = (state_27929[(2)]);
var state_27929__$1 = state_27929;
var statearr_27937_27964 = state_27929__$1;
(statearr_27937_27964[(2)] = inst_27925);

(statearr_27937_27964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (3))){
var inst_27927 = (state_27929[(2)]);
var state_27929__$1 = state_27929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27929__$1,inst_27927);
} else {
if((state_val_27930 === (12))){
var inst_27916 = (state_27929[(7)]);
var inst_27918 = release_hand_BANG_.call(null,inst_27916);
var state_27929__$1 = state_27929;
var statearr_27938_27965 = state_27929__$1;
(statearr_27938_27965[(2)] = inst_27918);

(statearr_27938_27965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (2))){
var state_27929__$1 = state_27929;
var statearr_27939_27966 = state_27929__$1;
(statearr_27939_27966[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (11))){
var state_27929__$1 = state_27929;
var statearr_27941_27967 = state_27929__$1;
(statearr_27941_27967[(2)] = null);

(statearr_27941_27967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (9))){
var state_27929__$1 = state_27929;
var statearr_27942_27968 = state_27929__$1;
(statearr_27942_27968[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_27942_27968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (5))){
var state_27929__$1 = state_27929;
var statearr_27943_27969 = state_27929__$1;
(statearr_27943_27969[(2)] = null);

(statearr_27943_27969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (14))){
var inst_27921 = (state_27929[(2)]);
var state_27929__$1 = (function (){var statearr_27944 = state_27929;
(statearr_27944[(8)] = inst_27921);

return statearr_27944;
})();
var statearr_27945_27970 = state_27929__$1;
(statearr_27945_27970[(2)] = null);

(statearr_27945_27970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (10))){
var state_27929__$1 = state_27929;
var statearr_27946_27971 = state_27929__$1;
(statearr_27946_27971[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_27946_27971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27930 === (8))){
var inst_27916 = (state_27929[(7)]);
var inst_27916__$1 = (state_27929[(2)]);
var state_27929__$1 = (function (){var statearr_27947 = state_27929;
(statearr_27947[(7)] = inst_27916__$1);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27916__$1)){
var statearr_27948_27972 = state_27929__$1;
(statearr_27948_27972[(1)] = (12));

} else {
var statearr_27949_27973 = state_27929__$1;
(statearr_27949_27973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18830__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_27953 = [null,null,null,null,null,null,null,null,null];
(statearr_27953[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_27953[(1)] = (1));

return statearr_27953;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_27929){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_27929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e27954){if((e27954 instanceof Object)){
var ex__18813__auto__ = e27954;
var statearr_27955_27974 = state_27929;
(statearr_27955_27974[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27975 = state_27929;
state_27929 = G__27975;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_27929){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_27929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_27956 = f__18831__auto__.call(null);
(statearr_27956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.setup_boulder_grab_events_BANG_ = (function climbr$behaviour$user_actions$setup_boulder_grab_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var grab_hand_BANG_ = ((function (keypressed){
return (function (hand_key){
var hand = climbr.behaviour.user_actions.fetch_hand.call(null,hand_key);
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key__$1 = (function (){var G__28026 = hand_name;
switch (G__28026) {
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
var can_grab = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-grab","can-grab",-606284184),hand_key__$1], null)));
var boulder = cljs.core.nth.call(null,can_grab,(0));
var engine__$1 = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
if(!((boulder == null))){
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
return climbr.matter.matter.world.addConstraint(engine__$1.world,constraint);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed,grab_hand_BANG_){
return (function (state_28048){
var state_val_28049 = (state_28048[(1)]);
if((state_val_28049 === (7))){
var inst_28030 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var G__28050_28077 = (((inst_28030 instanceof cljs.core.Keyword))?inst_28030.fqn:null);
switch (G__28050_28077) {
case "grab-left":
var statearr_28051_28079 = state_28048__$1;
(statearr_28051_28079[(1)] = (9));


break;
case "grab-right":
var statearr_28052_28080 = state_28048__$1;
(statearr_28052_28080[(1)] = (10));


break;
default:
var statearr_28053_28081 = state_28048__$1;
(statearr_28053_28081[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (1))){
var state_28048__$1 = state_28048;
var statearr_28054_28082 = state_28048__$1;
(statearr_28054_28082[(2)] = null);

(statearr_28054_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (4))){
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28048__$1,(7),keypressed);
} else {
if((state_val_28049 === (13))){
var state_28048__$1 = state_28048;
var statearr_28055_28083 = state_28048__$1;
(statearr_28055_28083[(2)] = null);

(statearr_28055_28083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (6))){
var inst_28044 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28056_28084 = state_28048__$1;
(statearr_28056_28084[(2)] = inst_28044);

(statearr_28056_28084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (3))){
var inst_28046 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28048__$1,inst_28046);
} else {
if((state_val_28049 === (12))){
var inst_28035 = (state_28048[(7)]);
var inst_28037 = grab_hand_BANG_.call(null,inst_28035);
var state_28048__$1 = state_28048;
var statearr_28057_28085 = state_28048__$1;
(statearr_28057_28085[(2)] = inst_28037);

(statearr_28057_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (2))){
var state_28048__$1 = state_28048;
var statearr_28058_28086 = state_28048__$1;
(statearr_28058_28086[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (11))){
var state_28048__$1 = state_28048;
var statearr_28060_28087 = state_28048__$1;
(statearr_28060_28087[(2)] = null);

(statearr_28060_28087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (9))){
var state_28048__$1 = state_28048;
var statearr_28061_28088 = state_28048__$1;
(statearr_28061_28088[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_28061_28088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (5))){
var state_28048__$1 = state_28048;
var statearr_28062_28089 = state_28048__$1;
(statearr_28062_28089[(2)] = null);

(statearr_28062_28089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (14))){
var inst_28040 = (state_28048[(2)]);
var state_28048__$1 = (function (){var statearr_28063 = state_28048;
(statearr_28063[(8)] = inst_28040);

return statearr_28063;
})();
var statearr_28064_28090 = state_28048__$1;
(statearr_28064_28090[(2)] = null);

(statearr_28064_28090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (10))){
var state_28048__$1 = state_28048;
var statearr_28065_28091 = state_28048__$1;
(statearr_28065_28091[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_28065_28091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (8))){
var inst_28035 = (state_28048[(7)]);
var inst_28035__$1 = (state_28048[(2)]);
var state_28048__$1 = (function (){var statearr_28066 = state_28048;
(statearr_28066[(7)] = inst_28035__$1);

return statearr_28066;
})();
if(cljs.core.truth_(inst_28035__$1)){
var statearr_28067_28092 = state_28048__$1;
(statearr_28067_28092[(1)] = (12));

} else {
var statearr_28068_28093 = state_28048__$1;
(statearr_28068_28093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18830__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_28072 = [null,null,null,null,null,null,null,null,null];
(statearr_28072[(0)] = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_28072[(1)] = (1));

return statearr_28072;
});
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_28048){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_28048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e28073){if((e28073 instanceof Object)){
var ex__18813__auto__ = e28073;
var statearr_28074_28094 = state_28048;
(statearr_28074_28094[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28095 = state_28048;
state_28048 = G__28095;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = function(state_28048){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_28048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_28075 = f__18831__auto__.call(null);
(statearr_28075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,grab_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.fetch_hand = (function climbr$behaviour$user_actions$fetch_hand(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__28097 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__28097) {
case "left":
return left_hand;

break;
case "right":
return right_hand;

break;
case "free":
return climbr.behaviour.user_actions.fetch_free_hand.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand)].join('')));

}
});
climbr.behaviour.user_actions.fetch_climber_part = (function climbr$behaviour$user_actions$fetch_climber_part(part){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),part], null));
});
climbr.behaviour.user_actions.fetch_free_hand = (function climbr$behaviour$user_actions$fetch_free_hand(){
var h1_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467));
var h2_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284));
var both_hold = (!((h1_holds == null))) && (!((h2_holds == null)));
if(both_hold){
return null;
} else {
if(!((h1_holds == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
} else {
if(!((h2_holds == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
} else {
return null;

}
}
}
});

//# sourceMappingURL=user_actions.js.map?rel=1474478536490