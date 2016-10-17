// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('cljs.core.async');
goog.require('climbr.figures.climber');
goog.require('climbr.controls.keyboard');
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
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
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

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
var hand_key = (function (){var G__27944 = hand_name;
switch (G__27944) {
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

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed,grab_hand_BANG_){
return (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (7))){
var inst_27948 = (state_27977[(7)]);
var inst_27948__$1 = (state_27977[(2)]);
var state_27977__$1 = (function (){var statearr_27979 = state_27977;
(statearr_27979[(7)] = inst_27948__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27948__$1)){
var statearr_27980_28018 = state_27977__$1;
(statearr_27980_28018[(1)] = (8));

} else {
var statearr_27981_28019 = state_27977__$1;
(statearr_27981_28019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (20))){
var state_27977__$1 = state_27977;
var statearr_27982_28020 = state_27977__$1;
(statearr_27982_28020[(2)] = null);

(statearr_27982_28020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (1))){
var state_27977__$1 = state_27977;
var statearr_27983_28021 = state_27977__$1;
(statearr_27983_28021[(2)] = null);

(statearr_27983_28021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (4))){
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27977__$1,(7),keypressed);
} else {
if((state_val_27978 === (15))){
var state_27977__$1 = state_27977;
var statearr_27984_28022 = state_27977__$1;
(statearr_27984_28022[(2)] = null);

(statearr_27984_28022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (21))){
var inst_27963 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27985_28023 = state_27977__$1;
(statearr_27985_28023[(2)] = inst_27963);

(statearr_27985_28023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (13))){
var state_27977__$1 = state_27977;
var statearr_27986_28024 = state_27977__$1;
(statearr_27986_28024[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_27986_28024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (6))){
var inst_27973 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27987_28025 = state_27977__$1;
(statearr_27987_28025[(2)] = inst_27973);

(statearr_27987_28025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (17))){
var state_27977__$1 = state_27977;
var statearr_27988_28026 = state_27977__$1;
(statearr_27988_28026[(2)] = null);

(statearr_27988_28026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (3))){
var inst_27975 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
if((state_val_27978 === (12))){
var state_27977__$1 = state_27977;
var statearr_27989_28027 = state_27977__$1;
(statearr_27989_28027[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_27989_28027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (2))){
var state_27977__$1 = state_27977;
var statearr_27990_28028 = state_27977__$1;
(statearr_27990_28028[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (19))){
var inst_27957 = (state_27977[(8)]);
var inst_27959 = cljs.core.map.call(null,grab_hand_BANG_,inst_27957);
var inst_27960 = cljs.core.doall.call(null,inst_27959);
var state_27977__$1 = state_27977;
var statearr_27992_28029 = state_27977__$1;
(statearr_27992_28029[(2)] = inst_27960);

(statearr_27992_28029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (11))){
var inst_27955 = (state_27977[(9)]);
var inst_27955__$1 = (state_27977[(2)]);
var state_27977__$1 = (function (){var statearr_27993 = state_27977;
(statearr_27993[(9)] = inst_27955__$1);

return statearr_27993;
})();
if(cljs.core.truth_(inst_27955__$1)){
var statearr_27994_28030 = state_27977__$1;
(statearr_27994_28030[(1)] = (16));

} else {
var statearr_27995_28031 = state_27977__$1;
(statearr_27995_28031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (9))){
var state_27977__$1 = state_27977;
var statearr_27996_28032 = state_27977__$1;
(statearr_27996_28032[(2)] = null);

(statearr_27996_28032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (5))){
var state_27977__$1 = state_27977;
var statearr_27997_28033 = state_27977__$1;
(statearr_27997_28033[(2)] = null);

(statearr_27997_28033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (14))){
var state_27977__$1 = state_27977;
var statearr_27998_28034 = state_27977__$1;
(statearr_27998_28034[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_27998_28034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (16))){
var inst_27955 = (state_27977[(9)]);
var inst_27957 = (state_27977[(8)]);
var inst_27957__$1 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_27955);
var state_27977__$1 = (function (){var statearr_27999 = state_27977;
(statearr_27999[(8)] = inst_27957__$1);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27957__$1)){
var statearr_28000_28035 = state_27977__$1;
(statearr_28000_28035[(1)] = (19));

} else {
var statearr_28001_28036 = state_27977__$1;
(statearr_28001_28036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (10))){
var inst_27969 = (state_27977[(2)]);
var state_27977__$1 = (function (){var statearr_28002 = state_27977;
(statearr_28002[(10)] = inst_27969);

return statearr_28002;
})();
var statearr_28003_28037 = state_27977__$1;
(statearr_28003_28037[(2)] = null);

(statearr_28003_28037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (18))){
var inst_27966 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_28004_28038 = state_27977__$1;
(statearr_28004_28038[(2)] = inst_27966);

(statearr_28004_28038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (8))){
var inst_27948 = (state_27977[(7)]);
var state_27977__$1 = state_27977;
var G__28005_28039 = (((inst_27948 instanceof cljs.core.Keyword))?inst_27948.fqn:null);
switch (G__28005_28039) {
case "grab-left":
var statearr_28006_28041 = state_27977__$1;
(statearr_28006_28041[(1)] = (12));


break;
case "grab-right":
var statearr_28007_28042 = state_27977__$1;
(statearr_28007_28042[(1)] = (13));


break;
case "grab-both":
var statearr_28008_28043 = state_27977__$1;
(statearr_28008_28043[(1)] = (14));


break;
default:
var statearr_28009_28044 = state_27977__$1;
(statearr_28009_28044[(1)] = (15));



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
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_28013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28013[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_28013[(1)] = (1));

return statearr_28013;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_27977){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e28014){if((e28014 instanceof Object)){
var ex__18813__auto__ = e28014;
var statearr_28015_28045 = state_27977;
(statearr_28015_28045[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28046 = state_27977;
state_27977 = G__28046;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_28016 = f__18831__auto__.call(null);
(statearr_28016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_28016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,grab_hand_BANG_))
);

return c__18830__auto__;
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

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (7))){
var inst_28104 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var G__28127_28155 = (((inst_28104 instanceof cljs.core.Keyword))?inst_28104.fqn:null);
switch (G__28127_28155) {
case "release-left":
var statearr_28128_28157 = state_28125__$1;
(statearr_28128_28157[(1)] = (9));


break;
case "release-right":
var statearr_28129_28158 = state_28125__$1;
(statearr_28129_28158[(1)] = (10));


break;
case "release-both":
var statearr_28130_28159 = state_28125__$1;
(statearr_28130_28159[(1)] = (11));


break;
default:
var statearr_28131_28160 = state_28125__$1;
(statearr_28131_28160[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28132_28161 = state_28125__$1;
(statearr_28132_28161[(2)] = null);

(statearr_28132_28161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (4))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(7),keypressed);
} else {
if((state_val_28126 === (15))){
var inst_28117 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28133 = state_28125;
(statearr_28133[(7)] = inst_28117);

return statearr_28133;
})();
var statearr_28134_28162 = state_28125__$1;
(statearr_28134_28162[(2)] = null);

(statearr_28134_28162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (13))){
var inst_28110 = (state_28125[(8)]);
var inst_28112 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_28110);
var inst_28113 = cljs.core.map.call(null,release_hand_BANG_,inst_28112);
var inst_28114 = cljs.core.doall.call(null,inst_28113);
var state_28125__$1 = state_28125;
var statearr_28135_28163 = state_28125__$1;
(statearr_28135_28163[(2)] = inst_28114);

(statearr_28135_28163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28136_28164 = state_28125__$1;
(statearr_28136_28164[(2)] = inst_28121);

(statearr_28136_28164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (12))){
var state_28125__$1 = state_28125;
var statearr_28137_28165 = state_28125__$1;
(statearr_28137_28165[(2)] = null);

(statearr_28137_28165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
var statearr_28138_28166 = state_28125__$1;
(statearr_28138_28166[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (11))){
var state_28125__$1 = state_28125;
var statearr_28140_28167 = state_28125__$1;
(statearr_28140_28167[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_28140_28167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (9))){
var state_28125__$1 = state_28125;
var statearr_28141_28168 = state_28125__$1;
(statearr_28141_28168[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_28141_28168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var state_28125__$1 = state_28125;
var statearr_28142_28169 = state_28125__$1;
(statearr_28142_28169[(2)] = null);

(statearr_28142_28169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (14))){
var state_28125__$1 = state_28125;
var statearr_28143_28170 = state_28125__$1;
(statearr_28143_28170[(2)] = null);

(statearr_28143_28170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (10))){
var state_28125__$1 = state_28125;
var statearr_28144_28171 = state_28125__$1;
(statearr_28144_28171[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_28144_28171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (8))){
var inst_28110 = (state_28125[(8)]);
var inst_28110__$1 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28145 = state_28125;
(statearr_28145[(8)] = inst_28110__$1);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28110__$1)){
var statearr_28146_28172 = state_28125__$1;
(statearr_28146_28172[(1)] = (13));

} else {
var statearr_28147_28173 = state_28125__$1;
(statearr_28147_28173[(1)] = (14));

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
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_28151 = [null,null,null,null,null,null,null,null,null];
(statearr_28151[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__);

(statearr_28151[(1)] = (1));

return statearr_28151;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_28125){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e28152){if((e28152 instanceof Object)){
var ex__18813__auto__ = e28152;
var statearr_28153_28174 = state_28125;
(statearr_28153_28174[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28175 = state_28125;
state_28125 = G__28175;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_28154 = f__18831__auto__.call(null);
(statearr_28154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_28154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
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
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where,___$1,opts){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__28182 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__28182) {
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
var force_obj = (function (){var G__28183 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__28183) {
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
var factor = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var directions = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__16793__auto__ = climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__16793__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__16793__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var seq__28184 = cljs.core.seq.call(null,bodies);
var chunk__28185 = null;
var count__28186 = (0);
var i__28187 = (0);
while(true){
if((i__28187 < count__28186)){
var b = cljs.core._nth.call(null,chunk__28185,i__28187);
climbr.matter.matter.apply_force.call(null,b,force);

var G__28190 = seq__28184;
var G__28191 = chunk__28185;
var G__28192 = count__28186;
var G__28193 = (i__28187 + (1));
seq__28184 = G__28190;
chunk__28185 = G__28191;
count__28186 = G__28192;
i__28187 = G__28193;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28184);
if(temp__4425__auto__){
var seq__28184__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28184__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__28184__$1);
var G__28194 = cljs.core.chunk_rest.call(null,seq__28184__$1);
var G__28195 = c__17608__auto__;
var G__28196 = cljs.core.count.call(null,c__17608__auto__);
var G__28197 = (0);
seq__28184 = G__28194;
chunk__28185 = G__28195;
count__28186 = G__28196;
i__28187 = G__28197;
continue;
} else {
var b = cljs.core.first.call(null,seq__28184__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__28198 = cljs.core.next.call(null,seq__28184__$1);
var G__28199 = null;
var G__28200 = (0);
var G__28201 = (0);
seq__28184 = G__28198;
chunk__28185 = G__28199;
count__28186 = G__28200;
i__28187 = G__28201;
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

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed_chan){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed_chan){
return (function (state_28259){
var state_val_28260 = (state_28259[(1)]);
if((state_val_28260 === (7))){
var inst_28245 = (state_28259[(7)]);
var inst_28244 = (state_28259[(2)]);
var inst_28245__$1 = cljs.core.get.call(null,key_actions,inst_28244);
var inst_28246 = (inst_28245__$1 == null);
var state_28259__$1 = (function (){var statearr_28261 = state_28259;
(statearr_28261[(7)] = inst_28245__$1);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28246)){
var statearr_28262_28280 = state_28259__$1;
(statearr_28262_28280[(1)] = (8));

} else {
var statearr_28263_28281 = state_28259__$1;
(statearr_28263_28281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (1))){
var state_28259__$1 = state_28259;
var statearr_28264_28282 = state_28259__$1;
(statearr_28264_28282[(2)] = null);

(statearr_28264_28282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (4))){
var state_28259__$1 = state_28259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28259__$1,(7),keypressed_chan);
} else {
if((state_val_28260 === (6))){
var inst_28255 = (state_28259[(2)]);
var state_28259__$1 = state_28259;
var statearr_28265_28283 = state_28259__$1;
(statearr_28265_28283[(2)] = inst_28255);

(statearr_28265_28283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (3))){
var inst_28257 = (state_28259[(2)]);
var state_28259__$1 = state_28259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28259__$1,inst_28257);
} else {
if((state_val_28260 === (2))){
var state_28259__$1 = state_28259;
var statearr_28266_28284 = state_28259__$1;
(statearr_28266_28284[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (9))){
var inst_28245 = (state_28259[(7)]);
var inst_28249 = inst_28245.call(null);
var state_28259__$1 = state_28259;
var statearr_28268_28285 = state_28259__$1;
(statearr_28268_28285[(2)] = inst_28249);

(statearr_28268_28285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (5))){
var state_28259__$1 = state_28259;
var statearr_28269_28286 = state_28259__$1;
(statearr_28269_28286[(2)] = null);

(statearr_28269_28286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (10))){
var inst_28251 = (state_28259[(2)]);
var state_28259__$1 = (function (){var statearr_28270 = state_28259;
(statearr_28270[(8)] = inst_28251);

return statearr_28270;
})();
var statearr_28271_28287 = state_28259__$1;
(statearr_28271_28287[(2)] = null);

(statearr_28271_28287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (8))){
var state_28259__$1 = state_28259;
var statearr_28272_28288 = state_28259__$1;
(statearr_28272_28288[(2)] = null);

(statearr_28272_28288[(1)] = (10));


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
});})(c__18830__auto__,keypressed_chan))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_28276 = [null,null,null,null,null,null,null,null,null];
(statearr_28276[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_28276[(1)] = (1));

return statearr_28276;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_28259){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_28259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e28277){if((e28277 instanceof Object)){
var ex__18813__auto__ = e28277;
var statearr_28278_28289 = state_28259;
(statearr_28278_28289[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28290 = state_28259;
state_28259 = G__28290;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_28259){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_28259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed_chan))
})();
var state__18832__auto__ = (function (){var statearr_28279 = f__18831__auto__.call(null);
(statearr_28279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_28279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed_chan))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__28292 = hand_name;
switch (G__28292) {
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
var key_boulder = (function (){var G__28295 = hand_name;
switch (G__28295) {
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
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
var key_holds = (function (){var G__28298 = hand_name;
switch (G__28298) {
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
var G__28301 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__28301) {
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

//# sourceMappingURL=user_actions.js.map?rel=1476565663390