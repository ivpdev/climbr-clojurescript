// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.climber');
goog.require('climbr.app_state');
goog.require('climbr.controls.keyboard');
goog.require('cljs.core.async');
climbr.behaviour.user_actions.def_ = (function climbr$behaviour$user_actions$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.user_actions.def_.cljs$lang$macro = true;
climbr.behaviour.user_actions.setup_user_controls_BANG_ = (function climbr$behaviour$user_actions$setup_user_controls_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
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
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
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
var objects = (function (){var G__33929 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__33929) {
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
var force_obj = (function (){var G__33930 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__33930) {
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
var force = (function (){var G__33931 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__33931) {
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
var seq__33932 = cljs.core.seq.call(null,objects);
var chunk__33933 = null;
var count__33934 = (0);
var i__33935 = (0);
while(true){
if((i__33935 < count__33934)){
var o = cljs.core._nth.call(null,chunk__33933,i__33935);
climbr.matter.matter.apply_force.call(null,o,force);

var G__33939 = seq__33932;
var G__33940 = chunk__33933;
var G__33941 = count__33934;
var G__33942 = (i__33935 + (1));
seq__33932 = G__33939;
chunk__33933 = G__33940;
count__33934 = G__33941;
i__33935 = G__33942;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33932);
if(temp__4425__auto__){
var seq__33932__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33932__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__33932__$1);
var G__33943 = cljs.core.chunk_rest.call(null,seq__33932__$1);
var G__33944 = c__17608__auto__;
var G__33945 = cljs.core.count.call(null,c__17608__auto__);
var G__33946 = (0);
seq__33932 = G__33943;
chunk__33933 = G__33944;
count__33934 = G__33945;
i__33935 = G__33946;
continue;
} else {
var o = cljs.core.first.call(null,seq__33932__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__33947 = cljs.core.next.call(null,seq__33932__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__33932 = G__33947;
chunk__33933 = G__33948;
count__33934 = G__33949;
i__33935 = G__33950;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(key_actions){
var keypressed = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed){
return (function (state_34008){
var state_val_34009 = (state_34008[(1)]);
if((state_val_34009 === (7))){
var inst_33994 = (state_34008[(7)]);
var inst_33993 = (state_34008[(2)]);
var inst_33994__$1 = cljs.core.get.call(null,key_actions,inst_33993);
var inst_33995 = (inst_33994__$1 == null);
var state_34008__$1 = (function (){var statearr_34010 = state_34008;
(statearr_34010[(7)] = inst_33994__$1);

return statearr_34010;
})();
if(cljs.core.truth_(inst_33995)){
var statearr_34011_34029 = state_34008__$1;
(statearr_34011_34029[(1)] = (8));

} else {
var statearr_34012_34030 = state_34008__$1;
(statearr_34012_34030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (1))){
var state_34008__$1 = state_34008;
var statearr_34013_34031 = state_34008__$1;
(statearr_34013_34031[(2)] = null);

(statearr_34013_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (4))){
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34008__$1,(7),keypressed);
} else {
if((state_val_34009 === (6))){
var inst_34004 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34014_34032 = state_34008__$1;
(statearr_34014_34032[(2)] = inst_34004);

(statearr_34014_34032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (3))){
var inst_34006 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34008__$1,inst_34006);
} else {
if((state_val_34009 === (2))){
var state_34008__$1 = state_34008;
var statearr_34015_34033 = state_34008__$1;
(statearr_34015_34033[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (9))){
var inst_33994 = (state_34008[(7)]);
var inst_33998 = inst_33994.call(null);
var state_34008__$1 = state_34008;
var statearr_34017_34034 = state_34008__$1;
(statearr_34017_34034[(2)] = inst_33998);

(statearr_34017_34034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (5))){
var state_34008__$1 = state_34008;
var statearr_34018_34035 = state_34008__$1;
(statearr_34018_34035[(2)] = null);

(statearr_34018_34035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (10))){
var inst_34000 = (state_34008[(2)]);
var state_34008__$1 = (function (){var statearr_34019 = state_34008;
(statearr_34019[(8)] = inst_34000);

return statearr_34019;
})();
var statearr_34020_34036 = state_34008__$1;
(statearr_34020_34036[(2)] = null);

(statearr_34020_34036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (8))){
var state_34008__$1 = state_34008;
var statearr_34021_34037 = state_34008__$1;
(statearr_34021_34037[(2)] = null);

(statearr_34021_34037[(1)] = (10));


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
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null,null,null];
(statearr_34025[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_34008){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34026){if((e34026 instanceof Object)){
var ex__18813__auto__ = e34026;
var statearr_34027_34038 = state_34008;
(statearr_34027_34038[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34039 = state_34008;
state_34008 = G__34039;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_34008){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_34008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_34028 = f__18831__auto__.call(null);
(statearr_34028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__34041 = hand_name;
switch (G__34041) {
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
var key_boulder = (function (){var G__34044 = hand_name;
switch (G__34044) {
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
return (function (state_34116){
var state_val_34117 = (state_34116[(1)]);
if((state_val_34117 === (7))){
var inst_34098 = (state_34116[(2)]);
var state_34116__$1 = state_34116;
var G__34118_34144 = (((inst_34098 instanceof cljs.core.Keyword))?inst_34098.fqn:null);
switch (G__34118_34144) {
case "release-left":
var statearr_34119_34146 = state_34116__$1;
(statearr_34119_34146[(1)] = (9));


break;
case "release-right":
var statearr_34120_34147 = state_34116__$1;
(statearr_34120_34147[(1)] = (10));


break;
default:
var statearr_34121_34148 = state_34116__$1;
(statearr_34121_34148[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (1))){
var state_34116__$1 = state_34116;
var statearr_34122_34149 = state_34116__$1;
(statearr_34122_34149[(2)] = null);

(statearr_34122_34149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (4))){
var state_34116__$1 = state_34116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34116__$1,(7),keypressed);
} else {
if((state_val_34117 === (13))){
var state_34116__$1 = state_34116;
var statearr_34123_34150 = state_34116__$1;
(statearr_34123_34150[(2)] = null);

(statearr_34123_34150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (6))){
var inst_34112 = (state_34116[(2)]);
var state_34116__$1 = state_34116;
var statearr_34124_34151 = state_34116__$1;
(statearr_34124_34151[(2)] = inst_34112);

(statearr_34124_34151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (3))){
var inst_34114 = (state_34116[(2)]);
var state_34116__$1 = state_34116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34116__$1,inst_34114);
} else {
if((state_val_34117 === (12))){
var inst_34103 = (state_34116[(7)]);
var inst_34105 = release_hand_BANG_.call(null,inst_34103);
var state_34116__$1 = state_34116;
var statearr_34125_34152 = state_34116__$1;
(statearr_34125_34152[(2)] = inst_34105);

(statearr_34125_34152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (2))){
var state_34116__$1 = state_34116;
var statearr_34126_34153 = state_34116__$1;
(statearr_34126_34153[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (11))){
var state_34116__$1 = state_34116;
var statearr_34128_34154 = state_34116__$1;
(statearr_34128_34154[(2)] = null);

(statearr_34128_34154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (9))){
var state_34116__$1 = state_34116;
var statearr_34129_34155 = state_34116__$1;
(statearr_34129_34155[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_34129_34155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (5))){
var state_34116__$1 = state_34116;
var statearr_34130_34156 = state_34116__$1;
(statearr_34130_34156[(2)] = null);

(statearr_34130_34156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (14))){
var inst_34108 = (state_34116[(2)]);
var state_34116__$1 = (function (){var statearr_34131 = state_34116;
(statearr_34131[(8)] = inst_34108);

return statearr_34131;
})();
var statearr_34132_34157 = state_34116__$1;
(statearr_34132_34157[(2)] = null);

(statearr_34132_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (10))){
var state_34116__$1 = state_34116;
var statearr_34133_34158 = state_34116__$1;
(statearr_34133_34158[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_34133_34158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34117 === (8))){
var inst_34103 = (state_34116[(7)]);
var inst_34103__$1 = (state_34116[(2)]);
var state_34116__$1 = (function (){var statearr_34134 = state_34116;
(statearr_34134[(7)] = inst_34103__$1);

return statearr_34134;
})();
if(cljs.core.truth_(inst_34103__$1)){
var statearr_34135_34159 = state_34116__$1;
(statearr_34135_34159[(1)] = (12));

} else {
var statearr_34136_34160 = state_34116__$1;
(statearr_34136_34160[(1)] = (13));

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
var statearr_34140 = [null,null,null,null,null,null,null,null,null];
(statearr_34140[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_34140[(1)] = (1));

return statearr_34140;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_34116){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34141){if((e34141 instanceof Object)){
var ex__18813__auto__ = e34141;
var statearr_34142_34161 = state_34116;
(statearr_34142_34161[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_34116;
state_34116 = G__34162;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_34116){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_34116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_34143 = f__18831__auto__.call(null);
(statearr_34143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
var key_holds = (function (){var G__34164 = hand_name;
switch (G__34164) {
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
climbr.matter.matter.world.addConstraint(engine.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_holds,constraint);
});
climbr.behaviour.user_actions.setup_boulder_grab_events_BANG_ = (function climbr$behaviour$user_actions$setup_boulder_grab_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var grab_hand_BANG_ = ((function (keypressed){
return (function (hand_key){
var hand = climbr.behaviour.user_actions.fetch_hand.call(null,hand_key);
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key__$1 = (function (){var G__34216 = hand_name;
switch (G__34216) {
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
var can_grab_boulders = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-grab","can-grab",-606284184),hand_key__$1], null)));
var boulder_to_grab = cljs.core.nth.call(null,can_grab_boulders,(0));
var have_something_to_grab_QMARK_ = !((boulder_to_grab == null));
var holds_boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand_name);
var already_holds_QMARK_ = !((holds_boulder == null));
var engine__$1 = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
if((have_something_to_grab_QMARK_) && (!(already_holds_QMARK_))){
return climbr.behaviour.user_actions.connect_hand_and_boulder.call(null,hand,boulder_to_grab,engine__$1);
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
return (function (state_34238){
var state_val_34239 = (state_34238[(1)]);
if((state_val_34239 === (7))){
var inst_34220 = (state_34238[(2)]);
var state_34238__$1 = state_34238;
var G__34240_34267 = (((inst_34220 instanceof cljs.core.Keyword))?inst_34220.fqn:null);
switch (G__34240_34267) {
case "grab-left":
var statearr_34241_34269 = state_34238__$1;
(statearr_34241_34269[(1)] = (9));


break;
case "grab-right":
var statearr_34242_34270 = state_34238__$1;
(statearr_34242_34270[(1)] = (10));


break;
default:
var statearr_34243_34271 = state_34238__$1;
(statearr_34243_34271[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (1))){
var state_34238__$1 = state_34238;
var statearr_34244_34272 = state_34238__$1;
(statearr_34244_34272[(2)] = null);

(statearr_34244_34272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (4))){
var state_34238__$1 = state_34238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34238__$1,(7),keypressed);
} else {
if((state_val_34239 === (13))){
var state_34238__$1 = state_34238;
var statearr_34245_34273 = state_34238__$1;
(statearr_34245_34273[(2)] = null);

(statearr_34245_34273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (6))){
var inst_34234 = (state_34238[(2)]);
var state_34238__$1 = state_34238;
var statearr_34246_34274 = state_34238__$1;
(statearr_34246_34274[(2)] = inst_34234);

(statearr_34246_34274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (3))){
var inst_34236 = (state_34238[(2)]);
var state_34238__$1 = state_34238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34238__$1,inst_34236);
} else {
if((state_val_34239 === (12))){
var inst_34225 = (state_34238[(7)]);
var inst_34227 = grab_hand_BANG_.call(null,inst_34225);
var state_34238__$1 = state_34238;
var statearr_34247_34275 = state_34238__$1;
(statearr_34247_34275[(2)] = inst_34227);

(statearr_34247_34275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (2))){
var state_34238__$1 = state_34238;
var statearr_34248_34276 = state_34238__$1;
(statearr_34248_34276[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (11))){
var state_34238__$1 = state_34238;
var statearr_34250_34277 = state_34238__$1;
(statearr_34250_34277[(2)] = null);

(statearr_34250_34277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (9))){
var state_34238__$1 = state_34238;
var statearr_34251_34278 = state_34238__$1;
(statearr_34251_34278[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_34251_34278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (5))){
var state_34238__$1 = state_34238;
var statearr_34252_34279 = state_34238__$1;
(statearr_34252_34279[(2)] = null);

(statearr_34252_34279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (14))){
var inst_34230 = (state_34238[(2)]);
var state_34238__$1 = (function (){var statearr_34253 = state_34238;
(statearr_34253[(8)] = inst_34230);

return statearr_34253;
})();
var statearr_34254_34280 = state_34238__$1;
(statearr_34254_34280[(2)] = null);

(statearr_34254_34280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (10))){
var state_34238__$1 = state_34238;
var statearr_34255_34281 = state_34238__$1;
(statearr_34255_34281[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_34255_34281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (8))){
var inst_34225 = (state_34238[(7)]);
var inst_34225__$1 = (state_34238[(2)]);
var state_34238__$1 = (function (){var statearr_34256 = state_34238;
(statearr_34256[(7)] = inst_34225__$1);

return statearr_34256;
})();
if(cljs.core.truth_(inst_34225__$1)){
var statearr_34257_34282 = state_34238__$1;
(statearr_34257_34282[(1)] = (12));

} else {
var statearr_34258_34283 = state_34238__$1;
(statearr_34258_34283[(1)] = (13));

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
var statearr_34262 = [null,null,null,null,null,null,null,null,null];
(statearr_34262[(0)] = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_34262[(1)] = (1));

return statearr_34262;
});
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_34238){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34263){if((e34263 instanceof Object)){
var ex__18813__auto__ = e34263;
var statearr_34264_34284 = state_34238;
(statearr_34264_34284[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34285 = state_34238;
state_34238 = G__34285;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = function(state_34238){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_34238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_34265 = f__18831__auto__.call(null);
(statearr_34265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34265;
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
var G__34287 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__34287) {
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

//# sourceMappingURL=user_actions.js.map?rel=1475767381476