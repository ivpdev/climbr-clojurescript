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
var objects = (function (){var G__30125 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__30125) {
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
var force_obj = (function (){var G__30126 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__30126) {
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
var force = (function (){var G__30127 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__30127) {
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
var seq__30128 = cljs.core.seq.call(null,objects);
var chunk__30129 = null;
var count__30130 = (0);
var i__30131 = (0);
while(true){
if((i__30131 < count__30130)){
var o = cljs.core._nth.call(null,chunk__30129,i__30131);
climbr.matter.matter.apply_force.call(null,o,force);

var G__30135 = seq__30128;
var G__30136 = chunk__30129;
var G__30137 = count__30130;
var G__30138 = (i__30131 + (1));
seq__30128 = G__30135;
chunk__30129 = G__30136;
count__30130 = G__30137;
i__30131 = G__30138;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30128);
if(temp__4425__auto__){
var seq__30128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30128__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__30128__$1);
var G__30139 = cljs.core.chunk_rest.call(null,seq__30128__$1);
var G__30140 = c__17608__auto__;
var G__30141 = cljs.core.count.call(null,c__17608__auto__);
var G__30142 = (0);
seq__30128 = G__30139;
chunk__30129 = G__30140;
count__30130 = G__30141;
i__30131 = G__30142;
continue;
} else {
var o = cljs.core.first.call(null,seq__30128__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__30143 = cljs.core.next.call(null,seq__30128__$1);
var G__30144 = null;
var G__30145 = (0);
var G__30146 = (0);
seq__30128 = G__30143;
chunk__30129 = G__30144;
count__30130 = G__30145;
i__30131 = G__30146;
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
return (function (state_30204){
var state_val_30205 = (state_30204[(1)]);
if((state_val_30205 === (7))){
var inst_30190 = (state_30204[(7)]);
var inst_30189 = (state_30204[(2)]);
var inst_30190__$1 = cljs.core.get.call(null,key_actions,inst_30189);
var inst_30191 = (inst_30190__$1 == null);
var state_30204__$1 = (function (){var statearr_30206 = state_30204;
(statearr_30206[(7)] = inst_30190__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30191)){
var statearr_30207_30225 = state_30204__$1;
(statearr_30207_30225[(1)] = (8));

} else {
var statearr_30208_30226 = state_30204__$1;
(statearr_30208_30226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (1))){
var state_30204__$1 = state_30204;
var statearr_30209_30227 = state_30204__$1;
(statearr_30209_30227[(2)] = null);

(statearr_30209_30227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (4))){
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30204__$1,(7),keypressed);
} else {
if((state_val_30205 === (6))){
var inst_30200 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30210_30228 = state_30204__$1;
(statearr_30210_30228[(2)] = inst_30200);

(statearr_30210_30228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (3))){
var inst_30202 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30204__$1,inst_30202);
} else {
if((state_val_30205 === (2))){
var state_30204__$1 = state_30204;
var statearr_30211_30229 = state_30204__$1;
(statearr_30211_30229[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (9))){
var inst_30190 = (state_30204[(7)]);
var inst_30194 = inst_30190.call(null);
var state_30204__$1 = state_30204;
var statearr_30213_30230 = state_30204__$1;
(statearr_30213_30230[(2)] = inst_30194);

(statearr_30213_30230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (5))){
var state_30204__$1 = state_30204;
var statearr_30214_30231 = state_30204__$1;
(statearr_30214_30231[(2)] = null);

(statearr_30214_30231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (10))){
var inst_30196 = (state_30204[(2)]);
var state_30204__$1 = (function (){var statearr_30215 = state_30204;
(statearr_30215[(8)] = inst_30196);

return statearr_30215;
})();
var statearr_30216_30232 = state_30204__$1;
(statearr_30216_30232[(2)] = null);

(statearr_30216_30232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (8))){
var state_30204__$1 = state_30204;
var statearr_30217_30233 = state_30204__$1;
(statearr_30217_30233[(2)] = null);

(statearr_30217_30233[(1)] = (10));


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
var statearr_30221 = [null,null,null,null,null,null,null,null,null];
(statearr_30221[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_30221[(1)] = (1));

return statearr_30221;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_30204){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30222){if((e30222 instanceof Object)){
var ex__18813__auto__ = e30222;
var statearr_30223_30234 = state_30204;
(statearr_30223_30234[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30235 = state_30204;
state_30204 = G__30235;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_30204){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_30204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_30224 = f__18831__auto__.call(null);
(statearr_30224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__30237 = hand_name;
switch (G__30237) {
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
var key_boulder = (function (){var G__30240 = hand_name;
switch (G__30240) {
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
return (function (state_30312){
var state_val_30313 = (state_30312[(1)]);
if((state_val_30313 === (7))){
var inst_30294 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var G__30314_30340 = (((inst_30294 instanceof cljs.core.Keyword))?inst_30294.fqn:null);
switch (G__30314_30340) {
case "release-left":
var statearr_30315_30342 = state_30312__$1;
(statearr_30315_30342[(1)] = (9));


break;
case "release-right":
var statearr_30316_30343 = state_30312__$1;
(statearr_30316_30343[(1)] = (10));


break;
default:
var statearr_30317_30344 = state_30312__$1;
(statearr_30317_30344[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (1))){
var state_30312__$1 = state_30312;
var statearr_30318_30345 = state_30312__$1;
(statearr_30318_30345[(2)] = null);

(statearr_30318_30345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (4))){
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(7),keypressed);
} else {
if((state_val_30313 === (13))){
var state_30312__$1 = state_30312;
var statearr_30319_30346 = state_30312__$1;
(statearr_30319_30346[(2)] = null);

(statearr_30319_30346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (6))){
var inst_30308 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var statearr_30320_30347 = state_30312__$1;
(statearr_30320_30347[(2)] = inst_30308);

(statearr_30320_30347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (3))){
var inst_30310 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else {
if((state_val_30313 === (12))){
var inst_30299 = (state_30312[(7)]);
var inst_30301 = release_hand_BANG_.call(null,inst_30299);
var state_30312__$1 = state_30312;
var statearr_30321_30348 = state_30312__$1;
(statearr_30321_30348[(2)] = inst_30301);

(statearr_30321_30348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (2))){
var state_30312__$1 = state_30312;
var statearr_30322_30349 = state_30312__$1;
(statearr_30322_30349[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (11))){
var state_30312__$1 = state_30312;
var statearr_30324_30350 = state_30312__$1;
(statearr_30324_30350[(2)] = null);

(statearr_30324_30350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (9))){
var state_30312__$1 = state_30312;
var statearr_30325_30351 = state_30312__$1;
(statearr_30325_30351[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_30325_30351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (5))){
var state_30312__$1 = state_30312;
var statearr_30326_30352 = state_30312__$1;
(statearr_30326_30352[(2)] = null);

(statearr_30326_30352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (14))){
var inst_30304 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30327 = state_30312;
(statearr_30327[(8)] = inst_30304);

return statearr_30327;
})();
var statearr_30328_30353 = state_30312__$1;
(statearr_30328_30353[(2)] = null);

(statearr_30328_30353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (10))){
var state_30312__$1 = state_30312;
var statearr_30329_30354 = state_30312__$1;
(statearr_30329_30354[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_30329_30354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (8))){
var inst_30299 = (state_30312[(7)]);
var inst_30299__$1 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30330 = state_30312;
(statearr_30330[(7)] = inst_30299__$1);

return statearr_30330;
})();
if(cljs.core.truth_(inst_30299__$1)){
var statearr_30331_30355 = state_30312__$1;
(statearr_30331_30355[(1)] = (12));

} else {
var statearr_30332_30356 = state_30312__$1;
(statearr_30332_30356[(1)] = (13));

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
var statearr_30336 = [null,null,null,null,null,null,null,null,null];
(statearr_30336[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_30336[(1)] = (1));

return statearr_30336;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_30312){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30337){if((e30337 instanceof Object)){
var ex__18813__auto__ = e30337;
var statearr_30338_30357 = state_30312;
(statearr_30338_30357[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30312;
state_30312 = G__30358;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_30339 = f__18831__auto__.call(null);
(statearr_30339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_30339;
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
var hand_key__$1 = (function (){var G__30410 = hand_name;
switch (G__30410) {
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
var key_holds = (function (){var G__30411 = hand_name;
switch (G__30411) {
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
return (function (state_30433){
var state_val_30434 = (state_30433[(1)]);
if((state_val_30434 === (7))){
var inst_30415 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var G__30435_30463 = (((inst_30415 instanceof cljs.core.Keyword))?inst_30415.fqn:null);
switch (G__30435_30463) {
case "grab-left":
var statearr_30436_30465 = state_30433__$1;
(statearr_30436_30465[(1)] = (9));


break;
case "grab-right":
var statearr_30437_30466 = state_30433__$1;
(statearr_30437_30466[(1)] = (10));


break;
default:
var statearr_30438_30467 = state_30433__$1;
(statearr_30438_30467[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (1))){
var state_30433__$1 = state_30433;
var statearr_30439_30468 = state_30433__$1;
(statearr_30439_30468[(2)] = null);

(statearr_30439_30468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (4))){
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30433__$1,(7),keypressed);
} else {
if((state_val_30434 === (13))){
var state_30433__$1 = state_30433;
var statearr_30440_30469 = state_30433__$1;
(statearr_30440_30469[(2)] = null);

(statearr_30440_30469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (6))){
var inst_30429 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30441_30470 = state_30433__$1;
(statearr_30441_30470[(2)] = inst_30429);

(statearr_30441_30470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (3))){
var inst_30431 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30433__$1,inst_30431);
} else {
if((state_val_30434 === (12))){
var inst_30420 = (state_30433[(7)]);
var inst_30422 = grab_hand_BANG_.call(null,inst_30420);
var state_30433__$1 = state_30433;
var statearr_30442_30471 = state_30433__$1;
(statearr_30442_30471[(2)] = inst_30422);

(statearr_30442_30471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (2))){
var state_30433__$1 = state_30433;
var statearr_30443_30472 = state_30433__$1;
(statearr_30443_30472[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (11))){
var state_30433__$1 = state_30433;
var statearr_30445_30473 = state_30433__$1;
(statearr_30445_30473[(2)] = null);

(statearr_30445_30473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (9))){
var state_30433__$1 = state_30433;
var statearr_30446_30474 = state_30433__$1;
(statearr_30446_30474[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_30446_30474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (5))){
var state_30433__$1 = state_30433;
var statearr_30447_30475 = state_30433__$1;
(statearr_30447_30475[(2)] = null);

(statearr_30447_30475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (14))){
var inst_30425 = (state_30433[(2)]);
var state_30433__$1 = (function (){var statearr_30448 = state_30433;
(statearr_30448[(8)] = inst_30425);

return statearr_30448;
})();
var statearr_30449_30476 = state_30433__$1;
(statearr_30449_30476[(2)] = null);

(statearr_30449_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (10))){
var state_30433__$1 = state_30433;
var statearr_30450_30477 = state_30433__$1;
(statearr_30450_30477[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_30450_30477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (8))){
var inst_30420 = (state_30433[(7)]);
var inst_30420__$1 = (state_30433[(2)]);
var state_30433__$1 = (function (){var statearr_30451 = state_30433;
(statearr_30451[(7)] = inst_30420__$1);

return statearr_30451;
})();
if(cljs.core.truth_(inst_30420__$1)){
var statearr_30452_30478 = state_30433__$1;
(statearr_30452_30478[(1)] = (12));

} else {
var statearr_30453_30479 = state_30433__$1;
(statearr_30453_30479[(1)] = (13));

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
var statearr_30457 = [null,null,null,null,null,null,null,null,null];
(statearr_30457[(0)] = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_30457[(1)] = (1));

return statearr_30457;
});
var climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_30433){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object)){
var ex__18813__auto__ = e30458;
var statearr_30459_30480 = state_30433;
(statearr_30459_30480[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30481 = state_30433;
state_30433 = G__30481;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__ = function(state_30433){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_30433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_30460 = f__18831__auto__.call(null);
(statearr_30460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_30460;
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
var G__30483 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__30483) {
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

//# sourceMappingURL=user_actions.js.map?rel=1474570900816