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
var hand_key = (function (){var G__22922 = hand_name;
switch (G__22922) {
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
return (function (state_22948){
var state_val_22949 = (state_22948[(1)]);
if((state_val_22949 === (7))){
var inst_22926 = (state_22948[(2)]);
var state_22948__$1 = state_22948;
var G__22950_22979 = (((inst_22926 instanceof cljs.core.Keyword))?inst_22926.fqn:null);
switch (G__22950_22979) {
case "grab-left":
var statearr_22951_22981 = state_22948__$1;
(statearr_22951_22981[(1)] = (9));


break;
case "grab-right":
var statearr_22952_22982 = state_22948__$1;
(statearr_22952_22982[(1)] = (10));


break;
case "grab-both":
var statearr_22953_22983 = state_22948__$1;
(statearr_22953_22983[(1)] = (11));


break;
default:
var statearr_22954_22984 = state_22948__$1;
(statearr_22954_22984[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (1))){
var state_22948__$1 = state_22948;
var statearr_22955_22985 = state_22948__$1;
(statearr_22955_22985[(2)] = null);

(statearr_22955_22985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (4))){
var state_22948__$1 = state_22948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22948__$1,(7),keypressed);
} else {
if((state_val_22949 === (15))){
var inst_22938 = (state_22948[(2)]);
var inst_22939 = cljs.core.map.call(null,grab_hand_BANG_,inst_22938);
var inst_22940 = cljs.core.doall.call(null,inst_22939);
var state_22948__$1 = (function (){var statearr_22956 = state_22948;
(statearr_22956[(7)] = inst_22940);

return statearr_22956;
})();
var statearr_22957_22986 = state_22948__$1;
(statearr_22957_22986[(2)] = null);

(statearr_22957_22986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (13))){
var state_22948__$1 = state_22948;
var statearr_22958_22987 = state_22948__$1;
(statearr_22958_22987[(2)] = null);

(statearr_22958_22987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (6))){
var inst_22944 = (state_22948[(2)]);
var state_22948__$1 = state_22948;
var statearr_22959_22988 = state_22948__$1;
(statearr_22959_22988[(2)] = inst_22944);

(statearr_22959_22988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (3))){
var inst_22946 = (state_22948[(2)]);
var state_22948__$1 = state_22948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22948__$1,inst_22946);
} else {
if((state_val_22949 === (12))){
var state_22948__$1 = state_22948;
var statearr_22960_22989 = state_22948__$1;
(statearr_22960_22989[(2)] = null);

(statearr_22960_22989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (2))){
var state_22948__$1 = state_22948;
var statearr_22961_22990 = state_22948__$1;
(statearr_22961_22990[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (11))){
var state_22948__$1 = state_22948;
var statearr_22963_22991 = state_22948__$1;
(statearr_22963_22991[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_22963_22991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (9))){
var state_22948__$1 = state_22948;
var statearr_22964_22992 = state_22948__$1;
(statearr_22964_22992[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_22964_22992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (5))){
var state_22948__$1 = state_22948;
var statearr_22965_22993 = state_22948__$1;
(statearr_22965_22993[(2)] = null);

(statearr_22965_22993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (14))){
var inst_22932 = (state_22948[(8)]);
var inst_22936 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_22932);
var state_22948__$1 = state_22948;
var statearr_22966_22994 = state_22948__$1;
(statearr_22966_22994[(2)] = inst_22936);

(statearr_22966_22994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (10))){
var state_22948__$1 = state_22948;
var statearr_22967_22995 = state_22948__$1;
(statearr_22967_22995[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_22967_22995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (8))){
var inst_22932 = (state_22948[(8)]);
var inst_22932__$1 = (state_22948[(2)]);
var inst_22933 = (inst_22932__$1 == null);
var state_22948__$1 = (function (){var statearr_22968 = state_22948;
(statearr_22968[(8)] = inst_22932__$1);

return statearr_22968;
})();
if(cljs.core.truth_(inst_22933)){
var statearr_22969_22996 = state_22948__$1;
(statearr_22969_22996[(1)] = (13));

} else {
var statearr_22970_22997 = state_22948__$1;
(statearr_22970_22997[(1)] = (14));

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
var statearr_22974 = [null,null,null,null,null,null,null,null,null];
(statearr_22974[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__);

(statearr_22974[(1)] = (1));

return statearr_22974;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1 = (function (state_22948){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_22948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e22975){if((e22975 instanceof Object)){
var ex__20788__auto__ = e22975;
var statearr_22976_22998 = state_22948;
(statearr_22976_22998[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22999 = state_22948;
state_22948 = G__22999;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__ = function(state_22948){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1.call(this,state_22948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,grab_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_22977 = f__20806__auto__.call(null);
(statearr_22977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_22977;
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
return (function (state_23078){
var state_val_23079 = (state_23078[(1)]);
if((state_val_23079 === (7))){
var inst_23057 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var G__23080_23108 = (((inst_23057 instanceof cljs.core.Keyword))?inst_23057.fqn:null);
switch (G__23080_23108) {
case "release-left":
var statearr_23081_23110 = state_23078__$1;
(statearr_23081_23110[(1)] = (9));


break;
case "release-right":
var statearr_23082_23111 = state_23078__$1;
(statearr_23082_23111[(1)] = (10));


break;
case "release-both":
var statearr_23083_23112 = state_23078__$1;
(statearr_23083_23112[(1)] = (11));


break;
default:
var statearr_23084_23113 = state_23078__$1;
(statearr_23084_23113[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (1))){
var state_23078__$1 = state_23078;
var statearr_23085_23114 = state_23078__$1;
(statearr_23085_23114[(2)] = null);

(statearr_23085_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (4))){
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23078__$1,(7),keypressed);
} else {
if((state_val_23079 === (15))){
var inst_23070 = (state_23078[(2)]);
var state_23078__$1 = (function (){var statearr_23086 = state_23078;
(statearr_23086[(7)] = inst_23070);

return statearr_23086;
})();
var statearr_23087_23115 = state_23078__$1;
(statearr_23087_23115[(2)] = null);

(statearr_23087_23115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (13))){
var inst_23063 = (state_23078[(8)]);
var inst_23065 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_23063);
var inst_23066 = cljs.core.map.call(null,release_hand_BANG_,inst_23065);
var inst_23067 = cljs.core.doall.call(null,inst_23066);
var state_23078__$1 = state_23078;
var statearr_23088_23116 = state_23078__$1;
(statearr_23088_23116[(2)] = inst_23067);

(statearr_23088_23116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (6))){
var inst_23074 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var statearr_23089_23117 = state_23078__$1;
(statearr_23089_23117[(2)] = inst_23074);

(statearr_23089_23117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (3))){
var inst_23076 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23078__$1,inst_23076);
} else {
if((state_val_23079 === (12))){
var state_23078__$1 = state_23078;
var statearr_23090_23118 = state_23078__$1;
(statearr_23090_23118[(2)] = null);

(statearr_23090_23118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (2))){
var state_23078__$1 = state_23078;
var statearr_23091_23119 = state_23078__$1;
(statearr_23091_23119[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (11))){
var state_23078__$1 = state_23078;
var statearr_23093_23120 = state_23078__$1;
(statearr_23093_23120[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_23093_23120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (9))){
var state_23078__$1 = state_23078;
var statearr_23094_23121 = state_23078__$1;
(statearr_23094_23121[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_23094_23121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (5))){
var state_23078__$1 = state_23078;
var statearr_23095_23122 = state_23078__$1;
(statearr_23095_23122[(2)] = null);

(statearr_23095_23122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (14))){
var state_23078__$1 = state_23078;
var statearr_23096_23123 = state_23078__$1;
(statearr_23096_23123[(2)] = null);

(statearr_23096_23123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (10))){
var state_23078__$1 = state_23078;
var statearr_23097_23124 = state_23078__$1;
(statearr_23097_23124[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_23097_23124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (8))){
var inst_23063 = (state_23078[(8)]);
var inst_23063__$1 = (state_23078[(2)]);
var state_23078__$1 = (function (){var statearr_23098 = state_23078;
(statearr_23098[(8)] = inst_23063__$1);

return statearr_23098;
})();
if(cljs.core.truth_(inst_23063__$1)){
var statearr_23099_23125 = state_23078__$1;
(statearr_23099_23125[(1)] = (13));

} else {
var statearr_23100_23126 = state_23078__$1;
(statearr_23100_23126[(1)] = (14));

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
var statearr_23104 = [null,null,null,null,null,null,null,null,null];
(statearr_23104[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__);

(statearr_23104[(1)] = (1));

return statearr_23104;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1 = (function (state_23078){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_23078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e23105){if((e23105 instanceof Object)){
var ex__20788__auto__ = e23105;
var statearr_23106_23127 = state_23078;
(statearr_23106_23127[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23128 = state_23078;
state_23078 = G__23128;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = function(state_23078){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1.call(this,state_23078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_23107 = f__20806__auto__.call(null);
(statearr_23107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_23107;
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
return (function (p1__23129_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__23129_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(30)], null));
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
var bodies = (function (){var G__23136 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__23136) {
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
var force_obj = (function (){var G__23137 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__23137) {
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
var seq__23138 = cljs.core.seq.call(null,bodies);
var chunk__23139 = null;
var count__23140 = (0);
var i__23141 = (0);
while(true){
if((i__23141 < count__23140)){
var b = cljs.core._nth.call(null,chunk__23139,i__23141);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23144 = seq__23138;
var G__23145 = chunk__23139;
var G__23146 = count__23140;
var G__23147 = (i__23141 + (1));
seq__23138 = G__23144;
chunk__23139 = G__23145;
count__23140 = G__23146;
i__23141 = G__23147;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23138);
if(temp__4657__auto__){
var seq__23138__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23138__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__23138__$1);
var G__23148 = cljs.core.chunk_rest.call(null,seq__23138__$1);
var G__23149 = c__19556__auto__;
var G__23150 = cljs.core.count.call(null,c__19556__auto__);
var G__23151 = (0);
seq__23138 = G__23148;
chunk__23139 = G__23149;
count__23140 = G__23150;
i__23141 = G__23151;
continue;
} else {
var b = cljs.core.first.call(null,seq__23138__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23152 = cljs.core.next.call(null,seq__23138__$1);
var G__23153 = null;
var G__23154 = (0);
var G__23155 = (0);
seq__23138 = G__23152;
chunk__23139 = G__23153;
count__23140 = G__23154;
i__23141 = G__23155;
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
return (function (state_23213){
var state_val_23214 = (state_23213[(1)]);
if((state_val_23214 === (7))){
var inst_23199 = (state_23213[(7)]);
var inst_23198 = (state_23213[(2)]);
var inst_23199__$1 = cljs.core.get.call(null,key_actions,inst_23198);
var inst_23200 = (inst_23199__$1 == null);
var state_23213__$1 = (function (){var statearr_23215 = state_23213;
(statearr_23215[(7)] = inst_23199__$1);

return statearr_23215;
})();
if(cljs.core.truth_(inst_23200)){
var statearr_23216_23234 = state_23213__$1;
(statearr_23216_23234[(1)] = (8));

} else {
var statearr_23217_23235 = state_23213__$1;
(statearr_23217_23235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (1))){
var state_23213__$1 = state_23213;
var statearr_23218_23236 = state_23213__$1;
(statearr_23218_23236[(2)] = null);

(statearr_23218_23236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (4))){
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23213__$1,(7),keypressed_chan);
} else {
if((state_val_23214 === (6))){
var inst_23209 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23219_23237 = state_23213__$1;
(statearr_23219_23237[(2)] = inst_23209);

(statearr_23219_23237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (3))){
var inst_23211 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23213__$1,inst_23211);
} else {
if((state_val_23214 === (2))){
var state_23213__$1 = state_23213;
var statearr_23220_23238 = state_23213__$1;
(statearr_23220_23238[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (9))){
var inst_23199 = (state_23213[(7)]);
var inst_23203 = inst_23199.call(null);
var state_23213__$1 = state_23213;
var statearr_23222_23239 = state_23213__$1;
(statearr_23222_23239[(2)] = inst_23203);

(statearr_23222_23239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (5))){
var state_23213__$1 = state_23213;
var statearr_23223_23240 = state_23213__$1;
(statearr_23223_23240[(2)] = null);

(statearr_23223_23240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (10))){
var inst_23205 = (state_23213[(2)]);
var state_23213__$1 = (function (){var statearr_23224 = state_23213;
(statearr_23224[(8)] = inst_23205);

return statearr_23224;
})();
var statearr_23225_23241 = state_23213__$1;
(statearr_23225_23241[(2)] = null);

(statearr_23225_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (8))){
var state_23213__$1 = state_23213;
var statearr_23226_23242 = state_23213__$1;
(statearr_23226_23242[(2)] = null);

(statearr_23226_23242[(1)] = (10));


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
var statearr_23230 = [null,null,null,null,null,null,null,null,null];
(statearr_23230[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__);

(statearr_23230[(1)] = (1));

return statearr_23230;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1 = (function (state_23213){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_23213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e23231){if((e23231 instanceof Object)){
var ex__20788__auto__ = e23231;
var statearr_23232_23243 = state_23213;
(statearr_23232_23243[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23244 = state_23213;
state_23213 = G__23244;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = function(state_23213){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1.call(this,state_23213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed_chan))
})();
var state__20807__auto__ = (function (){var statearr_23233 = f__20806__auto__.call(null);
(statearr_23233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_23233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed_chan))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__23246 = hand_name;
switch (G__23246) {
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
var key_boulder = (function (){var G__23249 = hand_name;
switch (G__23249) {
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
var key_holds = (function (){var G__23252 = hand_name;
switch (G__23252) {
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
var G__23255 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__23255) {
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

//# sourceMappingURL=user_actions.js.map?rel=1481836787712