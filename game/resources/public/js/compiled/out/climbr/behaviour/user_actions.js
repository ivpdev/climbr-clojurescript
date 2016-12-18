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
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.is_standing_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
})], null));
});
climbr.behaviour.user_actions.setup_climber_grab_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_grab_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var grab_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__29921 = hand_name;
switch (G__29921) {
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
var can_grab_boulders = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-grab","can-grab",-606284184),hand_key], null)));
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

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,grab_hand_BANG_){
return (function (state_29947){
var state_val_29948 = (state_29947[(1)]);
if((state_val_29948 === (7))){
var inst_29925 = (state_29947[(2)]);
var state_29947__$1 = state_29947;
var G__29949_29978 = (((inst_29925 instanceof cljs.core.Keyword))?inst_29925.fqn:null);
switch (G__29949_29978) {
case "grab-left":
var statearr_29950_29980 = state_29947__$1;
(statearr_29950_29980[(1)] = (9));


break;
case "grab-right":
var statearr_29951_29981 = state_29947__$1;
(statearr_29951_29981[(1)] = (10));


break;
case "grab-both":
var statearr_29952_29982 = state_29947__$1;
(statearr_29952_29982[(1)] = (11));


break;
default:
var statearr_29953_29983 = state_29947__$1;
(statearr_29953_29983[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (1))){
var state_29947__$1 = state_29947;
var statearr_29954_29984 = state_29947__$1;
(statearr_29954_29984[(2)] = null);

(statearr_29954_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (4))){
var state_29947__$1 = state_29947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29947__$1,(7),keypressed);
} else {
if((state_val_29948 === (15))){
var inst_29937 = (state_29947[(2)]);
var inst_29938 = cljs.core.map.call(null,grab_hand_BANG_,inst_29937);
var inst_29939 = cljs.core.doall.call(null,inst_29938);
var state_29947__$1 = (function (){var statearr_29955 = state_29947;
(statearr_29955[(7)] = inst_29939);

return statearr_29955;
})();
var statearr_29956_29985 = state_29947__$1;
(statearr_29956_29985[(2)] = null);

(statearr_29956_29985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (13))){
var state_29947__$1 = state_29947;
var statearr_29957_29986 = state_29947__$1;
(statearr_29957_29986[(2)] = null);

(statearr_29957_29986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (6))){
var inst_29943 = (state_29947[(2)]);
var state_29947__$1 = state_29947;
var statearr_29958_29987 = state_29947__$1;
(statearr_29958_29987[(2)] = inst_29943);

(statearr_29958_29987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (3))){
var inst_29945 = (state_29947[(2)]);
var state_29947__$1 = state_29947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29947__$1,inst_29945);
} else {
if((state_val_29948 === (12))){
var state_29947__$1 = state_29947;
var statearr_29959_29988 = state_29947__$1;
(statearr_29959_29988[(2)] = null);

(statearr_29959_29988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (2))){
var state_29947__$1 = state_29947;
var statearr_29960_29989 = state_29947__$1;
(statearr_29960_29989[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (11))){
var state_29947__$1 = state_29947;
var statearr_29962_29990 = state_29947__$1;
(statearr_29962_29990[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_29962_29990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (9))){
var state_29947__$1 = state_29947;
var statearr_29963_29991 = state_29947__$1;
(statearr_29963_29991[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_29963_29991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (5))){
var state_29947__$1 = state_29947;
var statearr_29964_29992 = state_29947__$1;
(statearr_29964_29992[(2)] = null);

(statearr_29964_29992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (14))){
var inst_29931 = (state_29947[(8)]);
var inst_29935 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_29931);
var state_29947__$1 = state_29947;
var statearr_29965_29993 = state_29947__$1;
(statearr_29965_29993[(2)] = inst_29935);

(statearr_29965_29993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (10))){
var state_29947__$1 = state_29947;
var statearr_29966_29994 = state_29947__$1;
(statearr_29966_29994[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_29966_29994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29948 === (8))){
var inst_29931 = (state_29947[(8)]);
var inst_29931__$1 = (state_29947[(2)]);
var inst_29932 = (inst_29931__$1 == null);
var state_29947__$1 = (function (){var statearr_29967 = state_29947;
(statearr_29967[(8)] = inst_29931__$1);

return statearr_29967;
})();
if(cljs.core.truth_(inst_29932)){
var statearr_29968_29995 = state_29947__$1;
(statearr_29968_29995[(1)] = (13));

} else {
var statearr_29969_29996 = state_29947__$1;
(statearr_29969_29996[(1)] = (14));

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
});})(c__20805__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_29973 = [null,null,null,null,null,null,null,null,null];
(statearr_29973[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__);

(statearr_29973[(1)] = (1));

return statearr_29973;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1 = (function (state_29947){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_29947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e29974){if((e29974 instanceof Object)){
var ex__20788__auto__ = e29974;
var statearr_29975_29997 = state_29947;
(statearr_29975_29997[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29947;
state_29947 = G__29998;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__ = function(state_29947){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1.call(this,state_29947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,grab_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_29976 = f__20806__auto__.call(null);
(statearr_29976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed,grab_hand_BANG_))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.setup_climber_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand){
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

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (7))){
var inst_30056 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var G__30079_30107 = (((inst_30056 instanceof cljs.core.Keyword))?inst_30056.fqn:null);
switch (G__30079_30107) {
case "release-left":
var statearr_30080_30109 = state_30077__$1;
(statearr_30080_30109[(1)] = (9));


break;
case "release-right":
var statearr_30081_30110 = state_30077__$1;
(statearr_30081_30110[(1)] = (10));


break;
case "release-both":
var statearr_30082_30111 = state_30077__$1;
(statearr_30082_30111[(1)] = (11));


break;
default:
var statearr_30083_30112 = state_30077__$1;
(statearr_30083_30112[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (1))){
var state_30077__$1 = state_30077;
var statearr_30084_30113 = state_30077__$1;
(statearr_30084_30113[(2)] = null);

(statearr_30084_30113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (4))){
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30077__$1,(7),keypressed);
} else {
if((state_val_30078 === (15))){
var inst_30069 = (state_30077[(2)]);
var state_30077__$1 = (function (){var statearr_30085 = state_30077;
(statearr_30085[(7)] = inst_30069);

return statearr_30085;
})();
var statearr_30086_30114 = state_30077__$1;
(statearr_30086_30114[(2)] = null);

(statearr_30086_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (13))){
var inst_30062 = (state_30077[(8)]);
var inst_30064 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_30062);
var inst_30065 = cljs.core.map.call(null,release_hand_BANG_,inst_30064);
var inst_30066 = cljs.core.doall.call(null,inst_30065);
var state_30077__$1 = state_30077;
var statearr_30087_30115 = state_30077__$1;
(statearr_30087_30115[(2)] = inst_30066);

(statearr_30087_30115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (6))){
var inst_30073 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30088_30116 = state_30077__$1;
(statearr_30088_30116[(2)] = inst_30073);

(statearr_30088_30116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (3))){
var inst_30075 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30077__$1,inst_30075);
} else {
if((state_val_30078 === (12))){
var state_30077__$1 = state_30077;
var statearr_30089_30117 = state_30077__$1;
(statearr_30089_30117[(2)] = null);

(statearr_30089_30117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (2))){
var state_30077__$1 = state_30077;
var statearr_30090_30118 = state_30077__$1;
(statearr_30090_30118[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (11))){
var state_30077__$1 = state_30077;
var statearr_30092_30119 = state_30077__$1;
(statearr_30092_30119[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_30092_30119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (9))){
var state_30077__$1 = state_30077;
var statearr_30093_30120 = state_30077__$1;
(statearr_30093_30120[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_30093_30120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (5))){
var state_30077__$1 = state_30077;
var statearr_30094_30121 = state_30077__$1;
(statearr_30094_30121[(2)] = null);

(statearr_30094_30121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (14))){
var state_30077__$1 = state_30077;
var statearr_30095_30122 = state_30077__$1;
(statearr_30095_30122[(2)] = null);

(statearr_30095_30122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (10))){
var state_30077__$1 = state_30077;
var statearr_30096_30123 = state_30077__$1;
(statearr_30096_30123[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_30096_30123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (8))){
var inst_30062 = (state_30077[(8)]);
var inst_30062__$1 = (state_30077[(2)]);
var state_30077__$1 = (function (){var statearr_30097 = state_30077;
(statearr_30097[(8)] = inst_30062__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30062__$1)){
var statearr_30098_30124 = state_30077__$1;
(statearr_30098_30124[(1)] = (13));

} else {
var statearr_30099_30125 = state_30077__$1;
(statearr_30099_30125[(1)] = (14));

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
var statearr_30103 = [null,null,null,null,null,null,null,null,null];
(statearr_30103[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__);

(statearr_30103[(1)] = (1));

return statearr_30103;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1 = (function (state_30077){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_30077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e30104){if((e30104 instanceof Object)){
var ex__20788__auto__ = e30104;
var statearr_30105_30126 = state_30077;
(statearr_30105_30126[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30127 = state_30077;
state_30077 = G__30127;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_30106 = f__20806__auto__.call(null);
(statearr_30106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_30106;
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
var climber = climbr.figures.climber.get.call(null);
var climber_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var climber_x = climbr.matter.matter.x.call(null,climber);
var climber_y = climbr.matter.matter.y.call(null,climber);
var standables = climbr.figures.figures.get_all_standables.call(null);
var climber_above_QMARK_ = ((function (climber,climber_body,climber_x,climber_y,standables){
return (function (p1__30128_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__30128_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber,climber_body,climber_x,climber_y,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.holds_nothing_QMARK_ = (function climbr$behaviour$user_actions$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__18742__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_both_QMARK_ = (function climbr$behaviour$user_actions$holds_both_QMARK_(){
var and__18730__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
} else {
return and__18730__auto__;
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
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where,___$1,opts){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__30135 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__30135) {
case "left-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "right-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "both-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));

break;
case "free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"free","free",801364328));

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__30136 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__30136) {
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
var seq__30137 = cljs.core.seq.call(null,bodies);
var chunk__30138 = null;
var count__30139 = (0);
var i__30140 = (0);
while(true){
if((i__30140 < count__30139)){
var b = cljs.core._nth.call(null,chunk__30138,i__30140);
climbr.matter.matter.apply_force.call(null,b,force);

var G__30143 = seq__30137;
var G__30144 = chunk__30138;
var G__30145 = count__30139;
var G__30146 = (i__30140 + (1));
seq__30137 = G__30143;
chunk__30138 = G__30144;
count__30139 = G__30145;
i__30140 = G__30146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30137);
if(temp__4657__auto__){
var seq__30137__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30137__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__30137__$1);
var G__30147 = cljs.core.chunk_rest.call(null,seq__30137__$1);
var G__30148 = c__19556__auto__;
var G__30149 = cljs.core.count.call(null,c__19556__auto__);
var G__30150 = (0);
seq__30137 = G__30147;
chunk__30138 = G__30148;
count__30139 = G__30149;
i__30140 = G__30150;
continue;
} else {
var b = cljs.core.first.call(null,seq__30137__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__30151 = cljs.core.next.call(null,seq__30137__$1);
var G__30152 = null;
var G__30153 = (0);
var G__30154 = (0);
seq__30137 = G__30151;
chunk__30138 = G__30152;
count__30139 = G__30153;
i__30140 = G__30154;
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
return (function (state_30212){
var state_val_30213 = (state_30212[(1)]);
if((state_val_30213 === (7))){
var inst_30198 = (state_30212[(7)]);
var inst_30197 = (state_30212[(2)]);
var inst_30198__$1 = cljs.core.get.call(null,key_actions,inst_30197);
var inst_30199 = (inst_30198__$1 == null);
var state_30212__$1 = (function (){var statearr_30214 = state_30212;
(statearr_30214[(7)] = inst_30198__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30199)){
var statearr_30215_30233 = state_30212__$1;
(statearr_30215_30233[(1)] = (8));

} else {
var statearr_30216_30234 = state_30212__$1;
(statearr_30216_30234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (1))){
var state_30212__$1 = state_30212;
var statearr_30217_30235 = state_30212__$1;
(statearr_30217_30235[(2)] = null);

(statearr_30217_30235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (4))){
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(7),keypressed_chan);
} else {
if((state_val_30213 === (6))){
var inst_30208 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30218_30236 = state_30212__$1;
(statearr_30218_30236[(2)] = inst_30208);

(statearr_30218_30236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (3))){
var inst_30210 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30212__$1,inst_30210);
} else {
if((state_val_30213 === (2))){
var state_30212__$1 = state_30212;
var statearr_30219_30237 = state_30212__$1;
(statearr_30219_30237[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (9))){
var inst_30198 = (state_30212[(7)]);
var inst_30202 = inst_30198.call(null);
var state_30212__$1 = state_30212;
var statearr_30221_30238 = state_30212__$1;
(statearr_30221_30238[(2)] = inst_30202);

(statearr_30221_30238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (5))){
var state_30212__$1 = state_30212;
var statearr_30222_30239 = state_30212__$1;
(statearr_30222_30239[(2)] = null);

(statearr_30222_30239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (10))){
var inst_30204 = (state_30212[(2)]);
var state_30212__$1 = (function (){var statearr_30223 = state_30212;
(statearr_30223[(8)] = inst_30204);

return statearr_30223;
})();
var statearr_30224_30240 = state_30212__$1;
(statearr_30224_30240[(2)] = null);

(statearr_30224_30240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (8))){
var state_30212__$1 = state_30212;
var statearr_30225_30241 = state_30212__$1;
(statearr_30225_30241[(2)] = null);

(statearr_30225_30241[(1)] = (10));


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
var statearr_30229 = [null,null,null,null,null,null,null,null,null];
(statearr_30229[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__);

(statearr_30229[(1)] = (1));

return statearr_30229;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1 = (function (state_30212){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_30212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e30230){if((e30230 instanceof Object)){
var ex__20788__auto__ = e30230;
var statearr_30231_30242 = state_30212;
(statearr_30231_30242[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30243 = state_30212;
state_30212 = G__30243;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = function(state_30212){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1.call(this,state_30212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed_chan))
})();
var state__20807__auto__ = (function (){var statearr_30232 = f__20806__auto__.call(null);
(statearr_30232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_30232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed_chan))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__30245 = hand_name;
switch (G__30245) {
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
var key_boulder = (function (){var G__30248 = hand_name;
switch (G__30248) {
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
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create(({"bodyA": hand, "bodyB": boulder}));
var key_holds = (function (){var G__30251 = hand_name;
switch (G__30251) {
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
climbr.behaviour.user_actions.fetch_hands = (function climbr$behaviour$user_actions$fetch_hands(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__30254 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__30254) {
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_hand], null);

break;
case "free":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_free_hand.call(null)], null);

break;
case "both":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand,right_hand], null);

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

//# sourceMappingURL=user_actions.js.map?rel=1482099881337