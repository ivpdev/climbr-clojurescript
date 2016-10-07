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

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.02,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.03], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.04,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.04], null)], null);
var objects = (function (){var G__36264 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__36264) {
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
var force_obj = (function (){var G__36265 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__36265) {
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
var force = (function (){var G__36266 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__36266) {
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
var seq__36267 = cljs.core.seq.call(null,objects);
var chunk__36268 = null;
var count__36269 = (0);
var i__36270 = (0);
while(true){
if((i__36270 < count__36269)){
var o = cljs.core._nth.call(null,chunk__36268,i__36270);
climbr.matter.matter.apply_force.call(null,o,force);

var G__36274 = seq__36267;
var G__36275 = chunk__36268;
var G__36276 = count__36269;
var G__36277 = (i__36270 + (1));
seq__36267 = G__36274;
chunk__36268 = G__36275;
count__36269 = G__36276;
i__36270 = G__36277;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36267);
if(temp__4425__auto__){
var seq__36267__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36267__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__36267__$1);
var G__36278 = cljs.core.chunk_rest.call(null,seq__36267__$1);
var G__36279 = c__17608__auto__;
var G__36280 = cljs.core.count.call(null,c__17608__auto__);
var G__36281 = (0);
seq__36267 = G__36278;
chunk__36268 = G__36279;
count__36269 = G__36280;
i__36270 = G__36281;
continue;
} else {
var o = cljs.core.first.call(null,seq__36267__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__36282 = cljs.core.next.call(null,seq__36267__$1);
var G__36283 = null;
var G__36284 = (0);
var G__36285 = (0);
seq__36267 = G__36282;
chunk__36268 = G__36283;
count__36269 = G__36284;
i__36270 = G__36285;
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
return (function (state_36343){
var state_val_36344 = (state_36343[(1)]);
if((state_val_36344 === (7))){
var inst_36329 = (state_36343[(7)]);
var inst_36328 = (state_36343[(2)]);
var inst_36329__$1 = cljs.core.get.call(null,key_actions,inst_36328);
var inst_36330 = (inst_36329__$1 == null);
var state_36343__$1 = (function (){var statearr_36345 = state_36343;
(statearr_36345[(7)] = inst_36329__$1);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36330)){
var statearr_36346_36364 = state_36343__$1;
(statearr_36346_36364[(1)] = (8));

} else {
var statearr_36347_36365 = state_36343__$1;
(statearr_36347_36365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (1))){
var state_36343__$1 = state_36343;
var statearr_36348_36366 = state_36343__$1;
(statearr_36348_36366[(2)] = null);

(statearr_36348_36366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (4))){
var state_36343__$1 = state_36343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36343__$1,(7),keypressed);
} else {
if((state_val_36344 === (6))){
var inst_36339 = (state_36343[(2)]);
var state_36343__$1 = state_36343;
var statearr_36349_36367 = state_36343__$1;
(statearr_36349_36367[(2)] = inst_36339);

(statearr_36349_36367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (3))){
var inst_36341 = (state_36343[(2)]);
var state_36343__$1 = state_36343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36343__$1,inst_36341);
} else {
if((state_val_36344 === (2))){
var state_36343__$1 = state_36343;
var statearr_36350_36368 = state_36343__$1;
(statearr_36350_36368[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (9))){
var inst_36329 = (state_36343[(7)]);
var inst_36333 = inst_36329.call(null);
var state_36343__$1 = state_36343;
var statearr_36352_36369 = state_36343__$1;
(statearr_36352_36369[(2)] = inst_36333);

(statearr_36352_36369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (5))){
var state_36343__$1 = state_36343;
var statearr_36353_36370 = state_36343__$1;
(statearr_36353_36370[(2)] = null);

(statearr_36353_36370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (10))){
var inst_36335 = (state_36343[(2)]);
var state_36343__$1 = (function (){var statearr_36354 = state_36343;
(statearr_36354[(8)] = inst_36335);

return statearr_36354;
})();
var statearr_36355_36371 = state_36343__$1;
(statearr_36355_36371[(2)] = null);

(statearr_36355_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (8))){
var state_36343__$1 = state_36343;
var statearr_36356_36372 = state_36343__$1;
(statearr_36356_36372[(2)] = null);

(statearr_36356_36372[(1)] = (10));


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
var statearr_36360 = [null,null,null,null,null,null,null,null,null];
(statearr_36360[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_36343){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_36343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e36361){if((e36361 instanceof Object)){
var ex__18813__auto__ = e36361;
var statearr_36362_36373 = state_36343;
(statearr_36362_36373[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_36343;
state_36343 = G__36374;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_36343){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_36343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_36363 = f__18831__auto__.call(null);
(statearr_36363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_36363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__36376 = hand_name;
switch (G__36376) {
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
var key_boulder = (function (){var G__36379 = hand_name;
switch (G__36379) {
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
return (function (state_36455){
var state_val_36456 = (state_36455[(1)]);
if((state_val_36456 === (7))){
var inst_36436 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var G__36457_36485 = (((inst_36436 instanceof cljs.core.Keyword))?inst_36436.fqn:null);
switch (G__36457_36485) {
case "release-left":
var statearr_36458_36487 = state_36455__$1;
(statearr_36458_36487[(1)] = (9));


break;
case "release-right":
var statearr_36459_36488 = state_36455__$1;
(statearr_36459_36488[(1)] = (10));


break;
case "release-both":
var statearr_36460_36489 = state_36455__$1;
(statearr_36460_36489[(1)] = (11));


break;
default:
var statearr_36461_36490 = state_36455__$1;
(statearr_36461_36490[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (1))){
var state_36455__$1 = state_36455;
var statearr_36462_36491 = state_36455__$1;
(statearr_36462_36491[(2)] = null);

(statearr_36462_36491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (4))){
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36455__$1,(7),keypressed);
} else {
if((state_val_36456 === (15))){
var inst_36447 = (state_36455[(2)]);
var state_36455__$1 = (function (){var statearr_36463 = state_36455;
(statearr_36463[(7)] = inst_36447);

return statearr_36463;
})();
var statearr_36464_36492 = state_36455__$1;
(statearr_36464_36492[(2)] = null);

(statearr_36464_36492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (13))){
var inst_36442 = (state_36455[(8)]);
var inst_36444 = release_hand_BANG_.call(null,inst_36442);
var state_36455__$1 = state_36455;
var statearr_36465_36493 = state_36455__$1;
(statearr_36465_36493[(2)] = inst_36444);

(statearr_36465_36493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (6))){
var inst_36451 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36466_36494 = state_36455__$1;
(statearr_36466_36494[(2)] = inst_36451);

(statearr_36466_36494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (3))){
var inst_36453 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36455__$1,inst_36453);
} else {
if((state_val_36456 === (12))){
var state_36455__$1 = state_36455;
var statearr_36467_36495 = state_36455__$1;
(statearr_36467_36495[(2)] = null);

(statearr_36467_36495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (2))){
var state_36455__$1 = state_36455;
var statearr_36468_36496 = state_36455__$1;
(statearr_36468_36496[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (11))){
var state_36455__$1 = state_36455;
var statearr_36470_36497 = state_36455__$1;
(statearr_36470_36497[(2)] = new cljs.core.Keyword(null,"TODO","TODO",-523795145));

(statearr_36470_36497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (9))){
var state_36455__$1 = state_36455;
var statearr_36471_36498 = state_36455__$1;
(statearr_36471_36498[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_36471_36498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (5))){
var state_36455__$1 = state_36455;
var statearr_36472_36499 = state_36455__$1;
(statearr_36472_36499[(2)] = null);

(statearr_36472_36499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (14))){
var state_36455__$1 = state_36455;
var statearr_36473_36500 = state_36455__$1;
(statearr_36473_36500[(2)] = null);

(statearr_36473_36500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (10))){
var state_36455__$1 = state_36455;
var statearr_36474_36501 = state_36455__$1;
(statearr_36474_36501[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_36474_36501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (8))){
var inst_36442 = (state_36455[(8)]);
var inst_36442__$1 = (state_36455[(2)]);
var state_36455__$1 = (function (){var statearr_36475 = state_36455;
(statearr_36475[(8)] = inst_36442__$1);

return statearr_36475;
})();
if(cljs.core.truth_(inst_36442__$1)){
var statearr_36476_36502 = state_36455__$1;
(statearr_36476_36502[(1)] = (13));

} else {
var statearr_36477_36503 = state_36455__$1;
(statearr_36477_36503[(1)] = (14));

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
}
});})(c__18830__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_36481 = [null,null,null,null,null,null,null,null,null];
(statearr_36481[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_36481[(1)] = (1));

return statearr_36481;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_36455){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_36455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e36482){if((e36482 instanceof Object)){
var ex__18813__auto__ = e36482;
var statearr_36483_36504 = state_36455;
(statearr_36483_36504[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36505 = state_36455;
state_36455 = G__36505;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_36455){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_36455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_36484 = f__18831__auto__.call(null);
(statearr_36484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_36484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
var key_holds = (function (){var G__36507 = hand_name;
switch (G__36507) {
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
var hand_key__$1 = (function (){var G__36562 = hand_name;
switch (G__36562) {
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
return (function (state_36585){
var state_val_36586 = (state_36585[(1)]);
if((state_val_36586 === (7))){
var inst_36566 = (state_36585[(2)]);
var state_36585__$1 = state_36585;
var G__36587_36616 = (((inst_36566 instanceof cljs.core.Keyword))?inst_36566.fqn:null);
switch (G__36587_36616) {
case "grab-left":
var statearr_36588_36618 = state_36585__$1;
(statearr_36588_36618[(1)] = (9));


break;
case "grab-right":
var statearr_36589_36619 = state_36585__$1;
(statearr_36589_36619[(1)] = (10));


break;
case "grab-both":
var statearr_36590_36620 = state_36585__$1;
(statearr_36590_36620[(1)] = (11));


break;
default:
var statearr_36591_36621 = state_36585__$1;
(statearr_36591_36621[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (1))){
var state_36585__$1 = state_36585;
var statearr_36592_36622 = state_36585__$1;
(statearr_36592_36622[(2)] = null);

(statearr_36592_36622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (4))){
var state_36585__$1 = state_36585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36585__$1,(7),keypressed);
} else {
if((state_val_36586 === (15))){
var inst_36577 = (state_36585[(2)]);
var state_36585__$1 = (function (){var statearr_36593 = state_36585;
(statearr_36593[(7)] = inst_36577);

return statearr_36593;
})();
var statearr_36594_36623 = state_36585__$1;
(statearr_36594_36623[(2)] = null);

(statearr_36594_36623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (13))){
var inst_36572 = (state_36585[(8)]);
var inst_36574 = grab_hand_BANG_.call(null,inst_36572);
var state_36585__$1 = state_36585;
var statearr_36595_36624 = state_36585__$1;
(statearr_36595_36624[(2)] = inst_36574);

(statearr_36595_36624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (6))){
var inst_36581 = (state_36585[(2)]);
var state_36585__$1 = state_36585;
var statearr_36596_36625 = state_36585__$1;
(statearr_36596_36625[(2)] = inst_36581);

(statearr_36596_36625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (3))){
var inst_36583 = (state_36585[(2)]);
var state_36585__$1 = state_36585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36585__$1,inst_36583);
} else {
if((state_val_36586 === (12))){
var state_36585__$1 = state_36585;
var statearr_36597_36626 = state_36585__$1;
(statearr_36597_36626[(2)] = null);

(statearr_36597_36626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (2))){
var state_36585__$1 = state_36585;
var statearr_36598_36627 = state_36585__$1;
(statearr_36598_36627[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (11))){
var state_36585__$1 = state_36585;
var statearr_36600_36628 = state_36585__$1;
(statearr_36600_36628[(2)] = new cljs.core.Keyword(null,"TODO","TODO",-523795145));

(statearr_36600_36628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (9))){
var state_36585__$1 = state_36585;
var statearr_36601_36629 = state_36585__$1;
(statearr_36601_36629[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_36601_36629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (5))){
var state_36585__$1 = state_36585;
var statearr_36602_36630 = state_36585__$1;
(statearr_36602_36630[(2)] = null);

(statearr_36602_36630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (14))){
var state_36585__$1 = state_36585;
var statearr_36603_36631 = state_36585__$1;
(statearr_36603_36631[(2)] = null);

(statearr_36603_36631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (10))){
var state_36585__$1 = state_36585;
var statearr_36604_36632 = state_36585__$1;
(statearr_36604_36632[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_36604_36632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (8))){
var inst_36572 = (state_36585[(8)]);
var inst_36572__$1 = (state_36585[(2)]);
var state_36585__$1 = (function (){var statearr_36605 = state_36585;
(statearr_36605[(8)] = inst_36572__$1);

return statearr_36605;
})();
if(cljs.core.truth_(inst_36572__$1)){
var statearr_36606_36633 = state_36585__$1;
(statearr_36606_36633[(1)] = (13));

} else {
var statearr_36607_36634 = state_36585__$1;
(statearr_36607_36634[(1)] = (14));

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
}
});})(c__18830__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_36611 = [null,null,null,null,null,null,null,null,null];
(statearr_36611[(0)] = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_36611[(1)] = (1));

return statearr_36611;
});
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_36585){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_36585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e36612){if((e36612 instanceof Object)){
var ex__18813__auto__ = e36612;
var statearr_36613_36635 = state_36585;
(statearr_36613_36635[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36636 = state_36585;
state_36585 = G__36636;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = function(state_36585){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_36585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_36614 = f__18831__auto__.call(null);
(statearr_36614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_36614;
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
var G__36638 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__36638) {
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

//# sourceMappingURL=user_actions.js.map?rel=1475791930084