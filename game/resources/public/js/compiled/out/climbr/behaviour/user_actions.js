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
var objects = (function (){var G__21148 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__21148) {
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
var force_obj = (function (){var G__21149 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__21149) {
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
var force = (function (){var G__21150 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__21150) {
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
var seq__21151 = cljs.core.seq.call(null,objects);
var chunk__21152 = null;
var count__21153 = (0);
var i__21154 = (0);
while(true){
if((i__21154 < count__21153)){
var o = cljs.core._nth.call(null,chunk__21152,i__21154);
climbr.matter.matter.apply_force.call(null,o,force);

var G__21158 = seq__21151;
var G__21159 = chunk__21152;
var G__21160 = count__21153;
var G__21161 = (i__21154 + (1));
seq__21151 = G__21158;
chunk__21152 = G__21159;
count__21153 = G__21160;
i__21154 = G__21161;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21151);
if(temp__4425__auto__){
var seq__21151__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21151__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__21151__$1);
var G__21162 = cljs.core.chunk_rest.call(null,seq__21151__$1);
var G__21163 = c__17608__auto__;
var G__21164 = cljs.core.count.call(null,c__17608__auto__);
var G__21165 = (0);
seq__21151 = G__21162;
chunk__21152 = G__21163;
count__21153 = G__21164;
i__21154 = G__21165;
continue;
} else {
var o = cljs.core.first.call(null,seq__21151__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__21166 = cljs.core.next.call(null,seq__21151__$1);
var G__21167 = null;
var G__21168 = (0);
var G__21169 = (0);
seq__21151 = G__21166;
chunk__21152 = G__21167;
count__21153 = G__21168;
i__21154 = G__21169;
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
return (function (state_21227){
var state_val_21228 = (state_21227[(1)]);
if((state_val_21228 === (7))){
var inst_21213 = (state_21227[(7)]);
var inst_21212 = (state_21227[(2)]);
var inst_21213__$1 = cljs.core.get.call(null,key_actions,inst_21212);
var inst_21214 = (inst_21213__$1 == null);
var state_21227__$1 = (function (){var statearr_21229 = state_21227;
(statearr_21229[(7)] = inst_21213__$1);

return statearr_21229;
})();
if(cljs.core.truth_(inst_21214)){
var statearr_21230_21248 = state_21227__$1;
(statearr_21230_21248[(1)] = (8));

} else {
var statearr_21231_21249 = state_21227__$1;
(statearr_21231_21249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (1))){
var state_21227__$1 = state_21227;
var statearr_21232_21250 = state_21227__$1;
(statearr_21232_21250[(2)] = null);

(statearr_21232_21250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (4))){
var state_21227__$1 = state_21227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,(7),keypressed);
} else {
if((state_val_21228 === (6))){
var inst_21223 = (state_21227[(2)]);
var state_21227__$1 = state_21227;
var statearr_21233_21251 = state_21227__$1;
(statearr_21233_21251[(2)] = inst_21223);

(statearr_21233_21251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (3))){
var inst_21225 = (state_21227[(2)]);
var state_21227__$1 = state_21227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21227__$1,inst_21225);
} else {
if((state_val_21228 === (2))){
var state_21227__$1 = state_21227;
var statearr_21234_21252 = state_21227__$1;
(statearr_21234_21252[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (9))){
var inst_21213 = (state_21227[(7)]);
var inst_21217 = inst_21213.call(null);
var state_21227__$1 = state_21227;
var statearr_21236_21253 = state_21227__$1;
(statearr_21236_21253[(2)] = inst_21217);

(statearr_21236_21253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (5))){
var state_21227__$1 = state_21227;
var statearr_21237_21254 = state_21227__$1;
(statearr_21237_21254[(2)] = null);

(statearr_21237_21254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (10))){
var inst_21219 = (state_21227[(2)]);
var state_21227__$1 = (function (){var statearr_21238 = state_21227;
(statearr_21238[(8)] = inst_21219);

return statearr_21238;
})();
var statearr_21239_21255 = state_21227__$1;
(statearr_21239_21255[(2)] = null);

(statearr_21239_21255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21228 === (8))){
var state_21227__$1 = state_21227;
var statearr_21240_21256 = state_21227__$1;
(statearr_21240_21256[(2)] = null);

(statearr_21240_21256[(1)] = (10));


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
var statearr_21244 = [null,null,null,null,null,null,null,null,null];
(statearr_21244[(0)] = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__);

(statearr_21244[(1)] = (1));

return statearr_21244;
});
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1 = (function (state_21227){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21245){if((e21245 instanceof Object)){
var ex__18813__auto__ = e21245;
var statearr_21246_21257 = state_21227;
(statearr_21246_21257[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21258 = state_21227;
state_21227 = G__21258;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__ = function(state_21227){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1.call(this,state_21227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_21247 = f__18831__auto__.call(null);
(statearr_21247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__21260 = hand_name;
switch (G__21260) {
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
var key_boulder = (function (){var G__21263 = hand_name;
switch (G__21263) {
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
return (function (state_21335){
var state_val_21336 = (state_21335[(1)]);
if((state_val_21336 === (7))){
var inst_21317 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var G__21337_21363 = (((inst_21317 instanceof cljs.core.Keyword))?inst_21317.fqn:null);
switch (G__21337_21363) {
case "release-left":
var statearr_21338_21365 = state_21335__$1;
(statearr_21338_21365[(1)] = (9));


break;
case "release-right":
var statearr_21339_21366 = state_21335__$1;
(statearr_21339_21366[(1)] = (10));


break;
default:
var statearr_21340_21367 = state_21335__$1;
(statearr_21340_21367[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (1))){
var state_21335__$1 = state_21335;
var statearr_21341_21368 = state_21335__$1;
(statearr_21341_21368[(2)] = null);

(statearr_21341_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (4))){
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21335__$1,(7),keypressed);
} else {
if((state_val_21336 === (13))){
var state_21335__$1 = state_21335;
var statearr_21342_21369 = state_21335__$1;
(statearr_21342_21369[(2)] = null);

(statearr_21342_21369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (6))){
var inst_21331 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21343_21370 = state_21335__$1;
(statearr_21343_21370[(2)] = inst_21331);

(statearr_21343_21370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (3))){
var inst_21333 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21335__$1,inst_21333);
} else {
if((state_val_21336 === (12))){
var inst_21322 = (state_21335[(7)]);
var inst_21324 = release_hand_BANG_.call(null,inst_21322);
var state_21335__$1 = state_21335;
var statearr_21344_21371 = state_21335__$1;
(statearr_21344_21371[(2)] = inst_21324);

(statearr_21344_21371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (2))){
var state_21335__$1 = state_21335;
var statearr_21345_21372 = state_21335__$1;
(statearr_21345_21372[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (11))){
var state_21335__$1 = state_21335;
var statearr_21347_21373 = state_21335__$1;
(statearr_21347_21373[(2)] = null);

(statearr_21347_21373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (9))){
var state_21335__$1 = state_21335;
var statearr_21348_21374 = state_21335__$1;
(statearr_21348_21374[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_21348_21374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (5))){
var state_21335__$1 = state_21335;
var statearr_21349_21375 = state_21335__$1;
(statearr_21349_21375[(2)] = null);

(statearr_21349_21375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (14))){
var inst_21327 = (state_21335[(2)]);
var state_21335__$1 = (function (){var statearr_21350 = state_21335;
(statearr_21350[(8)] = inst_21327);

return statearr_21350;
})();
var statearr_21351_21376 = state_21335__$1;
(statearr_21351_21376[(2)] = null);

(statearr_21351_21376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (10))){
var state_21335__$1 = state_21335;
var statearr_21352_21377 = state_21335__$1;
(statearr_21352_21377[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_21352_21377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (8))){
var inst_21322 = (state_21335[(7)]);
var inst_21322__$1 = (state_21335[(2)]);
var state_21335__$1 = (function (){var statearr_21353 = state_21335;
(statearr_21353[(7)] = inst_21322__$1);

return statearr_21353;
})();
if(cljs.core.truth_(inst_21322__$1)){
var statearr_21354_21378 = state_21335__$1;
(statearr_21354_21378[(1)] = (12));

} else {
var statearr_21355_21379 = state_21335__$1;
(statearr_21355_21379[(1)] = (13));

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
var statearr_21359 = [null,null,null,null,null,null,null,null,null];
(statearr_21359[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_21359[(1)] = (1));

return statearr_21359;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_21335){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object)){
var ex__18813__auto__ = e21360;
var statearr_21361_21380 = state_21335;
(statearr_21361_21380[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21381 = state_21335;
state_21335 = G__21381;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_21335){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_21335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_21362 = f__18831__auto__.call(null);
(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
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
var G__21383 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__21383) {
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

//# sourceMappingURL=user_actions.js.map?rel=1471985497204