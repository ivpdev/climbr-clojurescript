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
var objects = (function (){var G__18891 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__18891) {
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
var force_obj = (function (){var G__18892 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__18892) {
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
var force = (function (){var G__18893 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__18893) {
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
var seq__18894 = cljs.core.seq.call(null,objects);
var chunk__18895 = null;
var count__18896 = (0);
var i__18897 = (0);
while(true){
if((i__18897 < count__18896)){
var o = cljs.core._nth.call(null,chunk__18895,i__18897);
climbr.matter.matter.apply_force.call(null,o,force);

var G__18901 = seq__18894;
var G__18902 = chunk__18895;
var G__18903 = count__18896;
var G__18904 = (i__18897 + (1));
seq__18894 = G__18901;
chunk__18895 = G__18902;
count__18896 = G__18903;
i__18897 = G__18904;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18894);
if(temp__4425__auto__){
var seq__18894__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18894__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__18894__$1);
var G__18905 = cljs.core.chunk_rest.call(null,seq__18894__$1);
var G__18906 = c__17608__auto__;
var G__18907 = cljs.core.count.call(null,c__17608__auto__);
var G__18908 = (0);
seq__18894 = G__18905;
chunk__18895 = G__18906;
count__18896 = G__18907;
i__18897 = G__18908;
continue;
} else {
var o = cljs.core.first.call(null,seq__18894__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__18909 = cljs.core.next.call(null,seq__18894__$1);
var G__18910 = null;
var G__18911 = (0);
var G__18912 = (0);
seq__18894 = G__18909;
chunk__18895 = G__18910;
count__18896 = G__18911;
i__18897 = G__18912;
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

var c__18834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18834__auto__,keypressed){
return (function (){
var f__18835__auto__ = (function (){var switch__18813__auto__ = ((function (c__18834__auto__,keypressed){
return (function (state_18970){
var state_val_18971 = (state_18970[(1)]);
if((state_val_18971 === (7))){
var inst_18956 = (state_18970[(7)]);
var inst_18955 = (state_18970[(2)]);
var inst_18956__$1 = cljs.core.get.call(null,key_actions,inst_18955);
var inst_18957 = (inst_18956__$1 == null);
var state_18970__$1 = (function (){var statearr_18972 = state_18970;
(statearr_18972[(7)] = inst_18956__$1);

return statearr_18972;
})();
if(cljs.core.truth_(inst_18957)){
var statearr_18973_18991 = state_18970__$1;
(statearr_18973_18991[(1)] = (8));

} else {
var statearr_18974_18992 = state_18970__$1;
(statearr_18974_18992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (1))){
var state_18970__$1 = state_18970;
var statearr_18975_18993 = state_18970__$1;
(statearr_18975_18993[(2)] = null);

(statearr_18975_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (4))){
var state_18970__$1 = state_18970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18970__$1,(7),keypressed);
} else {
if((state_val_18971 === (6))){
var inst_18966 = (state_18970[(2)]);
var state_18970__$1 = state_18970;
var statearr_18976_18994 = state_18970__$1;
(statearr_18976_18994[(2)] = inst_18966);

(statearr_18976_18994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (3))){
var inst_18968 = (state_18970[(2)]);
var state_18970__$1 = state_18970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18970__$1,inst_18968);
} else {
if((state_val_18971 === (2))){
var state_18970__$1 = state_18970;
var statearr_18977_18995 = state_18970__$1;
(statearr_18977_18995[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (9))){
var inst_18956 = (state_18970[(7)]);
var inst_18960 = inst_18956.call(null);
var state_18970__$1 = state_18970;
var statearr_18979_18996 = state_18970__$1;
(statearr_18979_18996[(2)] = inst_18960);

(statearr_18979_18996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (5))){
var state_18970__$1 = state_18970;
var statearr_18980_18997 = state_18970__$1;
(statearr_18980_18997[(2)] = null);

(statearr_18980_18997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (10))){
var inst_18962 = (state_18970[(2)]);
var state_18970__$1 = (function (){var statearr_18981 = state_18970;
(statearr_18981[(8)] = inst_18962);

return statearr_18981;
})();
var statearr_18982_18998 = state_18970__$1;
(statearr_18982_18998[(2)] = null);

(statearr_18982_18998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18971 === (8))){
var state_18970__$1 = state_18970;
var statearr_18983_18999 = state_18970__$1;
(statearr_18983_18999[(2)] = null);

(statearr_18983_18999[(1)] = (10));


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
});})(c__18834__auto__,keypressed))
;
return ((function (switch__18813__auto__,c__18834__auto__,keypressed){
return (function() {
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____0 = (function (){
var statearr_18987 = [null,null,null,null,null,null,null,null,null];
(statearr_18987[(0)] = climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__);

(statearr_18987[(1)] = (1));

return statearr_18987;
});
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____1 = (function (state_18970){
while(true){
var ret_value__18815__auto__ = (function (){try{while(true){
var result__18816__auto__ = switch__18813__auto__.call(null,state_18970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18816__auto__;
}
break;
}
}catch (e18988){if((e18988 instanceof Object)){
var ex__18817__auto__ = e18988;
var statearr_18989_19000 = state_18970;
(statearr_18989_19000[(5)] = ex__18817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19001 = state_18970;
state_18970 = G__19001;
continue;
} else {
return ret_value__18815__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__ = function(state_18970){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____1.call(this,state_18970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____0;
climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto____1;
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18814__auto__;
})()
;})(switch__18813__auto__,c__18834__auto__,keypressed))
})();
var state__18836__auto__ = (function (){var statearr_18990 = f__18835__auto__.call(null);
(statearr_18990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18834__auto__);

return statearr_18990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18836__auto__);
});})(c__18834__auto__,keypressed))
);

return c__18834__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__19003 = hand_name;
switch (G__19003) {
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
var key_boulder = (function (){var G__19006 = hand_name;
switch (G__19006) {
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

var c__18834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18834__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__18835__auto__ = (function (){var switch__18813__auto__ = ((function (c__18834__auto__,keypressed,release_hand_BANG_){
return (function (state_19078){
var state_val_19079 = (state_19078[(1)]);
if((state_val_19079 === (7))){
var inst_19060 = (state_19078[(2)]);
var state_19078__$1 = state_19078;
var G__19080_19106 = (((inst_19060 instanceof cljs.core.Keyword))?inst_19060.fqn:null);
switch (G__19080_19106) {
case "release-left":
var statearr_19081_19108 = state_19078__$1;
(statearr_19081_19108[(1)] = (9));


break;
case "release-right":
var statearr_19082_19109 = state_19078__$1;
(statearr_19082_19109[(1)] = (10));


break;
default:
var statearr_19083_19110 = state_19078__$1;
(statearr_19083_19110[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (1))){
var state_19078__$1 = state_19078;
var statearr_19084_19111 = state_19078__$1;
(statearr_19084_19111[(2)] = null);

(statearr_19084_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (4))){
var state_19078__$1 = state_19078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19078__$1,(7),keypressed);
} else {
if((state_val_19079 === (13))){
var state_19078__$1 = state_19078;
var statearr_19085_19112 = state_19078__$1;
(statearr_19085_19112[(2)] = null);

(statearr_19085_19112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (6))){
var inst_19074 = (state_19078[(2)]);
var state_19078__$1 = state_19078;
var statearr_19086_19113 = state_19078__$1;
(statearr_19086_19113[(2)] = inst_19074);

(statearr_19086_19113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (3))){
var inst_19076 = (state_19078[(2)]);
var state_19078__$1 = state_19078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19078__$1,inst_19076);
} else {
if((state_val_19079 === (12))){
var inst_19065 = (state_19078[(7)]);
var inst_19067 = release_hand_BANG_.call(null,inst_19065);
var state_19078__$1 = state_19078;
var statearr_19087_19114 = state_19078__$1;
(statearr_19087_19114[(2)] = inst_19067);

(statearr_19087_19114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (2))){
var state_19078__$1 = state_19078;
var statearr_19088_19115 = state_19078__$1;
(statearr_19088_19115[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (11))){
var state_19078__$1 = state_19078;
var statearr_19090_19116 = state_19078__$1;
(statearr_19090_19116[(2)] = null);

(statearr_19090_19116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (9))){
var state_19078__$1 = state_19078;
var statearr_19091_19117 = state_19078__$1;
(statearr_19091_19117[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_19091_19117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (5))){
var state_19078__$1 = state_19078;
var statearr_19092_19118 = state_19078__$1;
(statearr_19092_19118[(2)] = null);

(statearr_19092_19118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (14))){
var inst_19070 = (state_19078[(2)]);
var state_19078__$1 = (function (){var statearr_19093 = state_19078;
(statearr_19093[(8)] = inst_19070);

return statearr_19093;
})();
var statearr_19094_19119 = state_19078__$1;
(statearr_19094_19119[(2)] = null);

(statearr_19094_19119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (10))){
var state_19078__$1 = state_19078;
var statearr_19095_19120 = state_19078__$1;
(statearr_19095_19120[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_19095_19120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (8))){
var inst_19065 = (state_19078[(7)]);
var inst_19065__$1 = (state_19078[(2)]);
var state_19078__$1 = (function (){var statearr_19096 = state_19078;
(statearr_19096[(7)] = inst_19065__$1);

return statearr_19096;
})();
if(cljs.core.truth_(inst_19065__$1)){
var statearr_19097_19121 = state_19078__$1;
(statearr_19097_19121[(1)] = (12));

} else {
var statearr_19098_19122 = state_19078__$1;
(statearr_19098_19122[(1)] = (13));

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
});})(c__18834__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__18813__auto__,c__18834__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____0 = (function (){
var statearr_19102 = [null,null,null,null,null,null,null,null,null];
(statearr_19102[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__);

(statearr_19102[(1)] = (1));

return statearr_19102;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____1 = (function (state_19078){
while(true){
var ret_value__18815__auto__ = (function (){try{while(true){
var result__18816__auto__ = switch__18813__auto__.call(null,state_19078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18816__auto__;
}
break;
}
}catch (e19103){if((e19103 instanceof Object)){
var ex__18817__auto__ = e19103;
var statearr_19104_19123 = state_19078;
(statearr_19104_19123[(5)] = ex__18817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_19078;
state_19078 = G__19124;
continue;
} else {
return ret_value__18815__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__ = function(state_19078){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____1.call(this,state_19078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18814__auto__;
})()
;})(switch__18813__auto__,c__18834__auto__,keypressed,release_hand_BANG_))
})();
var state__18836__auto__ = (function (){var statearr_19105 = f__18835__auto__.call(null);
(statearr_19105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18834__auto__);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18836__auto__);
});})(c__18834__auto__,keypressed,release_hand_BANG_))
);

return c__18834__auto__;
});
climbr.behaviour.user_actions.fetch_hand = (function climbr$behaviour$user_actions$fetch_hand(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__19126 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__19126) {
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

//# sourceMappingURL=user_actions.js.map?rel=1469475538952