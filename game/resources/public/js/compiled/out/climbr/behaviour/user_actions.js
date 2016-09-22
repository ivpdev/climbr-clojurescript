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
var objects = (function (){var G__40316 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__40316) {
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
var force_obj = (function (){var G__40317 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__40317) {
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
var force = (function (){var G__40318 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__40318) {
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
var seq__40319 = cljs.core.seq.call(null,objects);
var chunk__40320 = null;
var count__40321 = (0);
var i__40322 = (0);
while(true){
if((i__40322 < count__40321)){
var o = cljs.core._nth.call(null,chunk__40320,i__40322);
climbr.matter.matter.apply_force.call(null,o,force);

var G__40326 = seq__40319;
var G__40327 = chunk__40320;
var G__40328 = count__40321;
var G__40329 = (i__40322 + (1));
seq__40319 = G__40326;
chunk__40320 = G__40327;
count__40321 = G__40328;
i__40322 = G__40329;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40319);
if(temp__4425__auto__){
var seq__40319__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40319__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__40319__$1);
var G__40330 = cljs.core.chunk_rest.call(null,seq__40319__$1);
var G__40331 = c__17608__auto__;
var G__40332 = cljs.core.count.call(null,c__17608__auto__);
var G__40333 = (0);
seq__40319 = G__40330;
chunk__40320 = G__40331;
count__40321 = G__40332;
i__40322 = G__40333;
continue;
} else {
var o = cljs.core.first.call(null,seq__40319__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__40334 = cljs.core.next.call(null,seq__40319__$1);
var G__40335 = null;
var G__40336 = (0);
var G__40337 = (0);
seq__40319 = G__40334;
chunk__40320 = G__40335;
count__40321 = G__40336;
i__40322 = G__40337;
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
return (function (state_40395){
var state_val_40396 = (state_40395[(1)]);
if((state_val_40396 === (7))){
var inst_40381 = (state_40395[(7)]);
var inst_40380 = (state_40395[(2)]);
var inst_40381__$1 = cljs.core.get.call(null,key_actions,inst_40380);
var inst_40382 = (inst_40381__$1 == null);
var state_40395__$1 = (function (){var statearr_40397 = state_40395;
(statearr_40397[(7)] = inst_40381__$1);

return statearr_40397;
})();
if(cljs.core.truth_(inst_40382)){
var statearr_40398_40416 = state_40395__$1;
(statearr_40398_40416[(1)] = (8));

} else {
var statearr_40399_40417 = state_40395__$1;
(statearr_40399_40417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (1))){
var state_40395__$1 = state_40395;
var statearr_40400_40418 = state_40395__$1;
(statearr_40400_40418[(2)] = null);

(statearr_40400_40418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (4))){
var state_40395__$1 = state_40395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40395__$1,(7),keypressed);
} else {
if((state_val_40396 === (6))){
var inst_40391 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
var statearr_40401_40419 = state_40395__$1;
(statearr_40401_40419[(2)] = inst_40391);

(statearr_40401_40419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (3))){
var inst_40393 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40395__$1,inst_40393);
} else {
if((state_val_40396 === (2))){
var state_40395__$1 = state_40395;
var statearr_40402_40420 = state_40395__$1;
(statearr_40402_40420[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (9))){
var inst_40381 = (state_40395[(7)]);
var inst_40385 = inst_40381.call(null);
var state_40395__$1 = state_40395;
var statearr_40404_40421 = state_40395__$1;
(statearr_40404_40421[(2)] = inst_40385);

(statearr_40404_40421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (5))){
var state_40395__$1 = state_40395;
var statearr_40405_40422 = state_40395__$1;
(statearr_40405_40422[(2)] = null);

(statearr_40405_40422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (10))){
var inst_40387 = (state_40395[(2)]);
var state_40395__$1 = (function (){var statearr_40406 = state_40395;
(statearr_40406[(8)] = inst_40387);

return statearr_40406;
})();
var statearr_40407_40423 = state_40395__$1;
(statearr_40407_40423[(2)] = null);

(statearr_40407_40423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (8))){
var state_40395__$1 = state_40395;
var statearr_40408_40424 = state_40395__$1;
(statearr_40408_40424[(2)] = null);

(statearr_40408_40424[(1)] = (10));


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
var statearr_40412 = [null,null,null,null,null,null,null,null,null];
(statearr_40412[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_40412[(1)] = (1));

return statearr_40412;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_40395){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_40395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e40413){if((e40413 instanceof Object)){
var ex__18813__auto__ = e40413;
var statearr_40414_40425 = state_40395;
(statearr_40414_40425[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40426 = state_40395;
state_40395 = G__40426;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_40395){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_40395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_40415 = f__18831__auto__.call(null);
(statearr_40415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_40415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__40428 = hand_name;
switch (G__40428) {
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
var key_boulder = (function (){var G__40431 = hand_name;
switch (G__40431) {
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
return (function (state_40503){
var state_val_40504 = (state_40503[(1)]);
if((state_val_40504 === (7))){
var inst_40485 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var G__40505_40531 = (((inst_40485 instanceof cljs.core.Keyword))?inst_40485.fqn:null);
switch (G__40505_40531) {
case "release-left":
var statearr_40506_40533 = state_40503__$1;
(statearr_40506_40533[(1)] = (9));


break;
case "release-right":
var statearr_40507_40534 = state_40503__$1;
(statearr_40507_40534[(1)] = (10));


break;
default:
var statearr_40508_40535 = state_40503__$1;
(statearr_40508_40535[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (1))){
var state_40503__$1 = state_40503;
var statearr_40509_40536 = state_40503__$1;
(statearr_40509_40536[(2)] = null);

(statearr_40509_40536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (4))){
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40503__$1,(7),keypressed);
} else {
if((state_val_40504 === (13))){
var state_40503__$1 = state_40503;
var statearr_40510_40537 = state_40503__$1;
(statearr_40510_40537[(2)] = null);

(statearr_40510_40537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (6))){
var inst_40499 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40511_40538 = state_40503__$1;
(statearr_40511_40538[(2)] = inst_40499);

(statearr_40511_40538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (3))){
var inst_40501 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40503__$1,inst_40501);
} else {
if((state_val_40504 === (12))){
var inst_40490 = (state_40503[(7)]);
var inst_40492 = release_hand_BANG_.call(null,inst_40490);
var state_40503__$1 = state_40503;
var statearr_40512_40539 = state_40503__$1;
(statearr_40512_40539[(2)] = inst_40492);

(statearr_40512_40539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (2))){
var state_40503__$1 = state_40503;
var statearr_40513_40540 = state_40503__$1;
(statearr_40513_40540[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (11))){
var state_40503__$1 = state_40503;
var statearr_40515_40541 = state_40503__$1;
(statearr_40515_40541[(2)] = null);

(statearr_40515_40541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (9))){
var state_40503__$1 = state_40503;
var statearr_40516_40542 = state_40503__$1;
(statearr_40516_40542[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_40516_40542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (5))){
var state_40503__$1 = state_40503;
var statearr_40517_40543 = state_40503__$1;
(statearr_40517_40543[(2)] = null);

(statearr_40517_40543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (14))){
var inst_40495 = (state_40503[(2)]);
var state_40503__$1 = (function (){var statearr_40518 = state_40503;
(statearr_40518[(8)] = inst_40495);

return statearr_40518;
})();
var statearr_40519_40544 = state_40503__$1;
(statearr_40519_40544[(2)] = null);

(statearr_40519_40544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (10))){
var state_40503__$1 = state_40503;
var statearr_40520_40545 = state_40503__$1;
(statearr_40520_40545[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_40520_40545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (8))){
var inst_40490 = (state_40503[(7)]);
var inst_40490__$1 = (state_40503[(2)]);
var state_40503__$1 = (function (){var statearr_40521 = state_40503;
(statearr_40521[(7)] = inst_40490__$1);

return statearr_40521;
})();
if(cljs.core.truth_(inst_40490__$1)){
var statearr_40522_40546 = state_40503__$1;
(statearr_40522_40546[(1)] = (12));

} else {
var statearr_40523_40547 = state_40503__$1;
(statearr_40523_40547[(1)] = (13));

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
var statearr_40527 = [null,null,null,null,null,null,null,null,null];
(statearr_40527[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_40527[(1)] = (1));

return statearr_40527;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_40503){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_40503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e40528){if((e40528 instanceof Object)){
var ex__18813__auto__ = e40528;
var statearr_40529_40548 = state_40503;
(statearr_40529_40548[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40549 = state_40503;
state_40503 = G__40549;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_40503){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_40503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_40530 = f__18831__auto__.call(null);
(statearr_40530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_40530;
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
var hand_key__$1 = (function (){var G__40601 = hand_name;
switch (G__40601) {
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
var key_holds = (function (){var G__40602 = hand_name;
switch (G__40602) {
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
climbr.matter.matter.world.addConstraint(engine__$1.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_holds,constraint);
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
return (function (state_40624){
var state_val_40625 = (state_40624[(1)]);
if((state_val_40625 === (7))){
var inst_40606 = (state_40624[(2)]);
var state_40624__$1 = state_40624;
var G__40626_40654 = (((inst_40606 instanceof cljs.core.Keyword))?inst_40606.fqn:null);
switch (G__40626_40654) {
case "grab-left":
var statearr_40627_40656 = state_40624__$1;
(statearr_40627_40656[(1)] = (9));


break;
case "grab-right":
var statearr_40628_40657 = state_40624__$1;
(statearr_40628_40657[(1)] = (10));


break;
default:
var statearr_40629_40658 = state_40624__$1;
(statearr_40629_40658[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (1))){
var state_40624__$1 = state_40624;
var statearr_40630_40659 = state_40624__$1;
(statearr_40630_40659[(2)] = null);

(statearr_40630_40659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (4))){
var state_40624__$1 = state_40624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40624__$1,(7),keypressed);
} else {
if((state_val_40625 === (13))){
var state_40624__$1 = state_40624;
var statearr_40631_40660 = state_40624__$1;
(statearr_40631_40660[(2)] = null);

(statearr_40631_40660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (6))){
var inst_40620 = (state_40624[(2)]);
var state_40624__$1 = state_40624;
var statearr_40632_40661 = state_40624__$1;
(statearr_40632_40661[(2)] = inst_40620);

(statearr_40632_40661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (3))){
var inst_40622 = (state_40624[(2)]);
var state_40624__$1 = state_40624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40624__$1,inst_40622);
} else {
if((state_val_40625 === (12))){
var inst_40611 = (state_40624[(7)]);
var inst_40613 = grab_hand_BANG_.call(null,inst_40611);
var state_40624__$1 = state_40624;
var statearr_40633_40662 = state_40624__$1;
(statearr_40633_40662[(2)] = inst_40613);

(statearr_40633_40662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (2))){
var state_40624__$1 = state_40624;
var statearr_40634_40663 = state_40624__$1;
(statearr_40634_40663[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (11))){
var state_40624__$1 = state_40624;
var statearr_40636_40664 = state_40624__$1;
(statearr_40636_40664[(2)] = null);

(statearr_40636_40664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (9))){
var state_40624__$1 = state_40624;
var statearr_40637_40665 = state_40624__$1;
(statearr_40637_40665[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_40637_40665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (5))){
var state_40624__$1 = state_40624;
var statearr_40638_40666 = state_40624__$1;
(statearr_40638_40666[(2)] = null);

(statearr_40638_40666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (14))){
var inst_40616 = (state_40624[(2)]);
var state_40624__$1 = (function (){var statearr_40639 = state_40624;
(statearr_40639[(8)] = inst_40616);

return statearr_40639;
})();
var statearr_40640_40667 = state_40624__$1;
(statearr_40640_40667[(2)] = null);

(statearr_40640_40667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (10))){
var state_40624__$1 = state_40624;
var statearr_40641_40668 = state_40624__$1;
(statearr_40641_40668[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_40641_40668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40625 === (8))){
var inst_40611 = (state_40624[(7)]);
var inst_40611__$1 = (state_40624[(2)]);
var state_40624__$1 = (function (){var statearr_40642 = state_40624;
(statearr_40642[(7)] = inst_40611__$1);

return statearr_40642;
})();
if(cljs.core.truth_(inst_40611__$1)){
var statearr_40643_40669 = state_40624__$1;
(statearr_40643_40669[(1)] = (12));

} else {
var statearr_40644_40670 = state_40624__$1;
(statearr_40644_40670[(1)] = (13));

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
var statearr_40648 = [null,null,null,null,null,null,null,null,null];
(statearr_40648[(0)] = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_40648[(1)] = (1));

return statearr_40648;
});
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_40624){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_40624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e40649){if((e40649 instanceof Object)){
var ex__18813__auto__ = e40649;
var statearr_40650_40671 = state_40624;
(statearr_40650_40671[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40672 = state_40624;
state_40624 = G__40672;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = function(state_40624){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_40624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_40651 = f__18831__auto__.call(null);
(statearr_40651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_40651;
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
var G__40674 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__40674) {
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

//# sourceMappingURL=user_actions.js.map?rel=1474574311452