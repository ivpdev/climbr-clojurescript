// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.figures.figures');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('cljs.core.async');
goog.require('climbr.figures.climber');
goog.require('climbr.controls.keyboard');
goog.require('clojure.data');
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"both-hands","both-hands",1160692521),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"holding-hands","holding-hands",1686068849),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return null;

}
}
}
}
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hold#free-hand","hold#free-hand",113706379),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hold#free-hand","hold#free-hand",113706379),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
}
})], null));
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__53233 = hand_name;
switch (G__53233) {
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
var can_hook_boulders = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-hook","can-hook",301323690),hand_key], null)));
var boulder_to_hook = cljs.core.nth.call(null,can_hook_boulders,(0));
var have_something_to_hook_QMARK_ = !((boulder_to_hook == null));
var hooked_boulder = climbr.behaviour.user_actions.get_hooked_boulder_for_hand.call(null,hand_name);
var already_hooked_QMARK_ = !((hooked_boulder == null));
var engine__$1 = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
if((have_something_to_hook_QMARK_) && (!(already_hooked_QMARK_))){
return climbr.behaviour.user_actions.connect_hand_and_boulder.call(null,hand,boulder_to_hook,engine__$1);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,hook_hand_BANG_){
return (function (state_53259){
var state_val_53260 = (state_53259[(1)]);
if((state_val_53260 === (7))){
var inst_53237 = (state_53259[(2)]);
var state_53259__$1 = state_53259;
var G__53261_53290 = (((inst_53237 instanceof cljs.core.Keyword))?inst_53237.fqn:null);
switch (G__53261_53290) {
case "hook-left":
var statearr_53262_53292 = state_53259__$1;
(statearr_53262_53292[(1)] = (9));


break;
case "hook-right":
var statearr_53263_53293 = state_53259__$1;
(statearr_53263_53293[(1)] = (10));


break;
case "hook-both":
var statearr_53264_53294 = state_53259__$1;
(statearr_53264_53294[(1)] = (11));


break;
default:
var statearr_53265_53295 = state_53259__$1;
(statearr_53265_53295[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (1))){
var state_53259__$1 = state_53259;
var statearr_53266_53296 = state_53259__$1;
(statearr_53266_53296[(2)] = null);

(statearr_53266_53296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (4))){
var state_53259__$1 = state_53259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53259__$1,(7),keypressed);
} else {
if((state_val_53260 === (15))){
var inst_53249 = (state_53259[(2)]);
var inst_53250 = cljs.core.map.call(null,hook_hand_BANG_,inst_53249);
var inst_53251 = cljs.core.doall.call(null,inst_53250);
var state_53259__$1 = (function (){var statearr_53267 = state_53259;
(statearr_53267[(7)] = inst_53251);

return statearr_53267;
})();
var statearr_53268_53297 = state_53259__$1;
(statearr_53268_53297[(2)] = null);

(statearr_53268_53297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (13))){
var state_53259__$1 = state_53259;
var statearr_53269_53298 = state_53259__$1;
(statearr_53269_53298[(2)] = null);

(statearr_53269_53298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (6))){
var inst_53255 = (state_53259[(2)]);
var state_53259__$1 = state_53259;
var statearr_53270_53299 = state_53259__$1;
(statearr_53270_53299[(2)] = inst_53255);

(statearr_53270_53299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (3))){
var inst_53257 = (state_53259[(2)]);
var state_53259__$1 = state_53259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53259__$1,inst_53257);
} else {
if((state_val_53260 === (12))){
var state_53259__$1 = state_53259;
var statearr_53271_53300 = state_53259__$1;
(statearr_53271_53300[(2)] = null);

(statearr_53271_53300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (2))){
var state_53259__$1 = state_53259;
var statearr_53272_53301 = state_53259__$1;
(statearr_53272_53301[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (11))){
var state_53259__$1 = state_53259;
var statearr_53274_53302 = state_53259__$1;
(statearr_53274_53302[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_53274_53302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (9))){
var state_53259__$1 = state_53259;
var statearr_53275_53303 = state_53259__$1;
(statearr_53275_53303[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_53275_53303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (5))){
var state_53259__$1 = state_53259;
var statearr_53276_53304 = state_53259__$1;
(statearr_53276_53304[(2)] = null);

(statearr_53276_53304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (14))){
var inst_53243 = (state_53259[(8)]);
var inst_53247 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_53243);
var state_53259__$1 = state_53259;
var statearr_53277_53305 = state_53259__$1;
(statearr_53277_53305[(2)] = inst_53247);

(statearr_53277_53305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (10))){
var state_53259__$1 = state_53259;
var statearr_53278_53306 = state_53259__$1;
(statearr_53278_53306[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_53278_53306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53260 === (8))){
var inst_53243 = (state_53259[(8)]);
var inst_53243__$1 = (state_53259[(2)]);
var inst_53244 = (inst_53243__$1 == null);
var state_53259__$1 = (function (){var statearr_53279 = state_53259;
(statearr_53279[(8)] = inst_53243__$1);

return statearr_53279;
})();
if(cljs.core.truth_(inst_53244)){
var statearr_53280_53307 = state_53259__$1;
(statearr_53280_53307[(1)] = (13));

} else {
var statearr_53281_53308 = state_53259__$1;
(statearr_53281_53308[(1)] = (14));

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
});})(c__20805__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_53285 = [null,null,null,null,null,null,null,null,null];
(statearr_53285[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__);

(statearr_53285[(1)] = (1));

return statearr_53285;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1 = (function (state_53259){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_53259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e53286){if((e53286 instanceof Object)){
var ex__20788__auto__ = e53286;
var statearr_53287_53309 = state_53259;
(statearr_53287_53309[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53310 = state_53259;
state_53259 = G__53310;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__ = function(state_53259){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1.call(this,state_53259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,hook_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_53288 = f__20806__auto__.call(null);
(statearr_53288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_53288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed,hook_hand_BANG_))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.setup_climber_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var boulder = climbr.behaviour.user_actions.get_hooked_boulder_for_hand.call(null,hand_name);
if(!((boulder == null))){
climbr.matter.matter.world.remove(engine.world,boulder);

return climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_.call(null,hand_name);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (state_53389){
var state_val_53390 = (state_53389[(1)]);
if((state_val_53390 === (7))){
var inst_53368 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
var G__53391_53419 = (((inst_53368 instanceof cljs.core.Keyword))?inst_53368.fqn:null);
switch (G__53391_53419) {
case "release-left":
var statearr_53392_53421 = state_53389__$1;
(statearr_53392_53421[(1)] = (9));


break;
case "release-right":
var statearr_53393_53422 = state_53389__$1;
(statearr_53393_53422[(1)] = (10));


break;
case "release-both":
var statearr_53394_53423 = state_53389__$1;
(statearr_53394_53423[(1)] = (11));


break;
default:
var statearr_53395_53424 = state_53389__$1;
(statearr_53395_53424[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (1))){
var state_53389__$1 = state_53389;
var statearr_53396_53425 = state_53389__$1;
(statearr_53396_53425[(2)] = null);

(statearr_53396_53425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (4))){
var state_53389__$1 = state_53389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53389__$1,(7),keypressed);
} else {
if((state_val_53390 === (15))){
var inst_53381 = (state_53389[(2)]);
var state_53389__$1 = (function (){var statearr_53397 = state_53389;
(statearr_53397[(7)] = inst_53381);

return statearr_53397;
})();
var statearr_53398_53426 = state_53389__$1;
(statearr_53398_53426[(2)] = null);

(statearr_53398_53426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (13))){
var inst_53374 = (state_53389[(8)]);
var inst_53376 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_53374);
var inst_53377 = cljs.core.map.call(null,release_hand_BANG_,inst_53376);
var inst_53378 = cljs.core.doall.call(null,inst_53377);
var state_53389__$1 = state_53389;
var statearr_53399_53427 = state_53389__$1;
(statearr_53399_53427[(2)] = inst_53378);

(statearr_53399_53427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (6))){
var inst_53385 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
var statearr_53400_53428 = state_53389__$1;
(statearr_53400_53428[(2)] = inst_53385);

(statearr_53400_53428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (3))){
var inst_53387 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53389__$1,inst_53387);
} else {
if((state_val_53390 === (12))){
var state_53389__$1 = state_53389;
var statearr_53401_53429 = state_53389__$1;
(statearr_53401_53429[(2)] = null);

(statearr_53401_53429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (2))){
var state_53389__$1 = state_53389;
var statearr_53402_53430 = state_53389__$1;
(statearr_53402_53430[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (11))){
var state_53389__$1 = state_53389;
var statearr_53404_53431 = state_53389__$1;
(statearr_53404_53431[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_53404_53431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (9))){
var state_53389__$1 = state_53389;
var statearr_53405_53432 = state_53389__$1;
(statearr_53405_53432[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_53405_53432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (5))){
var state_53389__$1 = state_53389;
var statearr_53406_53433 = state_53389__$1;
(statearr_53406_53433[(2)] = null);

(statearr_53406_53433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (14))){
var state_53389__$1 = state_53389;
var statearr_53407_53434 = state_53389__$1;
(statearr_53407_53434[(2)] = null);

(statearr_53407_53434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (10))){
var state_53389__$1 = state_53389;
var statearr_53408_53435 = state_53389__$1;
(statearr_53408_53435[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_53408_53435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (8))){
var inst_53374 = (state_53389[(8)]);
var inst_53374__$1 = (state_53389[(2)]);
var state_53389__$1 = (function (){var statearr_53409 = state_53389;
(statearr_53409[(8)] = inst_53374__$1);

return statearr_53409;
})();
if(cljs.core.truth_(inst_53374__$1)){
var statearr_53410_53436 = state_53389__$1;
(statearr_53410_53436[(1)] = (13));

} else {
var statearr_53411_53437 = state_53389__$1;
(statearr_53411_53437[(1)] = (14));

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
});})(c__20805__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_53415 = [null,null,null,null,null,null,null,null,null];
(statearr_53415[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__);

(statearr_53415[(1)] = (1));

return statearr_53415;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1 = (function (state_53389){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_53389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e53416){if((e53416 instanceof Object)){
var ex__20788__auto__ = e53416;
var statearr_53417_53438 = state_53389;
(statearr_53417_53438[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53439 = state_53389;
state_53389 = G__53439;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = function(state_53389){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1.call(this,state_53389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_53418 = f__20806__auto__.call(null);
(statearr_53418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_53418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed,release_hand_BANG_))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
});
climbr.behaviour.user_actions.is_standing_QMARK_ = (function climbr$behaviour$user_actions$is_standing_QMARK_(){
var climber_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var standables = climbr.figures.figures.get_all_standables.call(null);
var climber_above_QMARK_ = ((function (climber_body,standables){
return (function (p1__53440_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__53440_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__53441_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__53441_SHARP_));
});})(hands,body))
;
return cljs.core.some.call(null,above_body_QMARK_,hands);
});
climbr.behaviour.user_actions.hooked_nothing_QMARK_ = (function climbr$behaviour$user_actions$hooked_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__18742__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return climbr.behaviour.user_actions.h2_hooked_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.hooked_one_QMARK_ = (function climbr$behaviour$user_actions$hooked_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.hooked_both_QMARK_ = (function climbr$behaviour$user_actions$hooked_both_QMARK_(){
var and__18730__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.h2_hooked_QMARK_.call(null);
} else {
return and__18730__auto__;
}
});
climbr.behaviour.user_actions.h1_hooked_QMARK_ = (function climbr$behaviour$user_actions$h1_hooked_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165)) == null));
});
climbr.behaviour.user_actions.h2_hooked_QMARK_ = (function climbr$behaviour$user_actions$h2_hooked_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382)) == null));
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.count.call(null,climbr.behaviour.user_actions.fetch_holding_hands.call(null)) > (0));
});
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where,___$1,opts){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__53448 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__53448) {
case "left-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "right-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "both-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));

break;
case "hook#free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"hook#free","hook#free",-504039825));

break;
case "hold#free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"hold#free","hold#free",-93454629));

break;
case "holding-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"holding","holding",1269510599));

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__53449 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__53449) {
case "left-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "right-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "both-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "hold#free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "holding-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "hook#free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "body":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"body","body",-2049205669));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var factor = (function (){var or__18742__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var directions = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__18730__auto__ = climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__18730__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__18730__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var seq__53450 = cljs.core.seq.call(null,bodies);
var chunk__53451 = null;
var count__53452 = (0);
var i__53453 = (0);
while(true){
if((i__53453 < count__53452)){
var b = cljs.core._nth.call(null,chunk__53451,i__53453);
climbr.matter.matter.apply_force.call(null,b,force);

var G__53456 = seq__53450;
var G__53457 = chunk__53451;
var G__53458 = count__53452;
var G__53459 = (i__53453 + (1));
seq__53450 = G__53456;
chunk__53451 = G__53457;
count__53452 = G__53458;
i__53453 = G__53459;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53450);
if(temp__4657__auto__){
var seq__53450__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53450__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__53450__$1);
var G__53460 = cljs.core.chunk_rest.call(null,seq__53450__$1);
var G__53461 = c__19556__auto__;
var G__53462 = cljs.core.count.call(null,c__19556__auto__);
var G__53463 = (0);
seq__53450 = G__53460;
chunk__53451 = G__53461;
count__53452 = G__53462;
i__53453 = G__53463;
continue;
} else {
var b = cljs.core.first.call(null,seq__53450__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__53464 = cljs.core.next.call(null,seq__53450__$1);
var G__53465 = null;
var G__53466 = (0);
var G__53467 = (0);
seq__53450 = G__53464;
chunk__53451 = G__53465;
count__53452 = G__53466;
i__53453 = G__53467;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed_chan){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed_chan){
return (function (state_53525){
var state_val_53526 = (state_53525[(1)]);
if((state_val_53526 === (7))){
var inst_53511 = (state_53525[(7)]);
var inst_53510 = (state_53525[(2)]);
var inst_53511__$1 = cljs.core.get.call(null,key_actions,inst_53510);
var inst_53512 = (inst_53511__$1 == null);
var state_53525__$1 = (function (){var statearr_53527 = state_53525;
(statearr_53527[(7)] = inst_53511__$1);

return statearr_53527;
})();
if(cljs.core.truth_(inst_53512)){
var statearr_53528_53546 = state_53525__$1;
(statearr_53528_53546[(1)] = (8));

} else {
var statearr_53529_53547 = state_53525__$1;
(statearr_53529_53547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (1))){
var state_53525__$1 = state_53525;
var statearr_53530_53548 = state_53525__$1;
(statearr_53530_53548[(2)] = null);

(statearr_53530_53548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (4))){
var state_53525__$1 = state_53525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53525__$1,(7),keypressed_chan);
} else {
if((state_val_53526 === (6))){
var inst_53521 = (state_53525[(2)]);
var state_53525__$1 = state_53525;
var statearr_53531_53549 = state_53525__$1;
(statearr_53531_53549[(2)] = inst_53521);

(statearr_53531_53549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (3))){
var inst_53523 = (state_53525[(2)]);
var state_53525__$1 = state_53525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53525__$1,inst_53523);
} else {
if((state_val_53526 === (2))){
var state_53525__$1 = state_53525;
var statearr_53532_53550 = state_53525__$1;
(statearr_53532_53550[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (9))){
var inst_53511 = (state_53525[(7)]);
var inst_53515 = inst_53511.call(null);
var state_53525__$1 = state_53525;
var statearr_53534_53551 = state_53525__$1;
(statearr_53534_53551[(2)] = inst_53515);

(statearr_53534_53551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (5))){
var state_53525__$1 = state_53525;
var statearr_53535_53552 = state_53525__$1;
(statearr_53535_53552[(2)] = null);

(statearr_53535_53552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (10))){
var inst_53517 = (state_53525[(2)]);
var state_53525__$1 = (function (){var statearr_53536 = state_53525;
(statearr_53536[(8)] = inst_53517);

return statearr_53536;
})();
var statearr_53537_53553 = state_53525__$1;
(statearr_53537_53553[(2)] = null);

(statearr_53537_53553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53526 === (8))){
var state_53525__$1 = state_53525;
var statearr_53538_53554 = state_53525__$1;
(statearr_53538_53554[(2)] = null);

(statearr_53538_53554[(1)] = (10));


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
});})(c__20805__auto__,keypressed_chan))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_53542 = [null,null,null,null,null,null,null,null,null];
(statearr_53542[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__);

(statearr_53542[(1)] = (1));

return statearr_53542;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1 = (function (state_53525){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_53525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e53543){if((e53543 instanceof Object)){
var ex__20788__auto__ = e53543;
var statearr_53544_53555 = state_53525;
(statearr_53544_53555[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53556 = state_53525;
state_53525 = G__53556;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = function(state_53525){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1.call(this,state_53525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed_chan))
})();
var state__20807__auto__ = (function (){var statearr_53545 = f__20806__auto__.call(null);
(statearr_53545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_53545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed_chan))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__53558 = hand_name;
switch (G__53558) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
return null;

}
})();
return cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),boulder_key);
});
climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_ = (function climbr$behaviour$user_actions$remove_boulder_for_hand_BANG_(hand_name){
var key_boulder = (function (){var G__53561 = hand_name;
switch (G__53561) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand_name)].join('')));

}
})();
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.dissoc,key_boulder);
});
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create(({"bodyA": hand, "bodyB": boulder}));
var key_hooked = (function (){var G__53564 = hand_name;
switch (G__53564) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
return null;

}
})();
climbr.matter.matter.world.addConstraint(engine.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_hooked,constraint);
});
climbr.behaviour.user_actions.fetch_hands = (function climbr$behaviour$user_actions$fetch_hands(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__53567 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__53567) {
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_hand], null);

break;
case "hook#free":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hook_SHARP_free_hand.call(null)], null);

break;
case "hold#free":
return climbr.behaviour.user_actions.fetch_hold_SHARP_free_hand.call(null);

break;
case "holding":
return climbr.behaviour.user_actions.fetch_holding_hands.call(null);

break;
case "both":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand,right_hand], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand)].join('')));

}
});
climbr.behaviour.user_actions.fetch_holding_hands = (function climbr$behaviour$user_actions$fetch_holding_hands(){
var h1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var h2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1,h2], null);
var standables = climbr.figures.figures.get_all_standables.call(null);
var hand_standable_combinations = climbr.utils.utils.cartesian_prod.call(null,hands,standables);
var hand_above_QMARK_ = ((function (h1,h2,hands,standables,hand_standable_combinations){
return (function (pair){
var hand = cljs.core.nth.call(null,pair,(0));
var standable = cljs.core.nth.call(null,pair,(1));
return climbr.matter.matter.is_above_QMARK_.call(null,hand,standable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(h1,h2,hands,standables,hand_standable_combinations))
;
return cljs.core.map.call(null,((function (h1,h2,hands,standables,hand_standable_combinations,hand_above_QMARK_){
return (function (p1__53569_SHARP_){
return cljs.core.nth.call(null,p1__53569_SHARP_,(0));
});})(h1,h2,hands,standables,hand_standable_combinations,hand_above_QMARK_))
,cljs.core.filter.call(null,hand_above_QMARK_,hand_standable_combinations));
});
climbr.behaviour.user_actions.fetch_hold_SHARP_free_hand = (function climbr$behaviour$user_actions$fetch_hold_SHARP_free_hand(){
var holding_hands = climbr.behaviour.user_actions.fetch_holding_hands.call(null);
var h1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var h2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1,h2], null);
var is_holding_hand_QMARK_ = ((function (holding_hands,h1,h2,hands){
return (function (hand){
return cljs.core.some.call(null,((function (holding_hands,h1,h2,hands){
return (function (p1__53570_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__53570_SHARP_,hand);
});})(holding_hands,h1,h2,hands))
,holding_hands);
});})(holding_hands,h1,h2,hands))
;
return cljs.core.filter.call(null,((function (holding_hands,h1,h2,hands,is_holding_hand_QMARK_){
return (function (hand){
return cljs.core.not.call(null,is_holding_hand_QMARK_.call(null,hand));
});})(holding_hands,h1,h2,hands,is_holding_hand_QMARK_))
,hands);
});
climbr.behaviour.user_actions.fetch_climber_part = (function climbr$behaviour$user_actions$fetch_climber_part(part){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),part], null));
});
climbr.behaviour.user_actions.fetch_hook_SHARP_free_hand = (function climbr$behaviour$user_actions$fetch_hook_SHARP_free_hand(){
var h1_hooked = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165));
var h2_hooked = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382));
var both_hooked = (function (){var and__18730__auto__ = climbr.utils.utils.not_nil_QMARK_.call(null,h1_hooked);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.utils.utils.not_nil_QMARK_.call(null,h2_hooked);
} else {
return and__18730__auto__;
}
})();
if(cljs.core.truth_(both_hooked)){
return null;
} else {
if(!((h1_hooked == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
} else {
if(!((h2_hooked == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
} else {
return null;

}
}
}
});

//# sourceMappingURL=user_actions.js.map?rel=1483135262139