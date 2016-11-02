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
var hand_key = (function (){var G__24045 = hand_name;
switch (G__24045) {
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
return (function (state_24071){
var state_val_24072 = (state_24071[(1)]);
if((state_val_24072 === (7))){
var inst_24049 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var G__24073_24102 = (((inst_24049 instanceof cljs.core.Keyword))?inst_24049.fqn:null);
switch (G__24073_24102) {
case "grab-left":
var statearr_24074_24104 = state_24071__$1;
(statearr_24074_24104[(1)] = (9));


break;
case "grab-right":
var statearr_24075_24105 = state_24071__$1;
(statearr_24075_24105[(1)] = (10));


break;
case "grab-both":
var statearr_24076_24106 = state_24071__$1;
(statearr_24076_24106[(1)] = (11));


break;
default:
var statearr_24077_24107 = state_24071__$1;
(statearr_24077_24107[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (1))){
var state_24071__$1 = state_24071;
var statearr_24078_24108 = state_24071__$1;
(statearr_24078_24108[(2)] = null);

(statearr_24078_24108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (4))){
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24071__$1,(7),keypressed);
} else {
if((state_val_24072 === (15))){
var inst_24061 = (state_24071[(2)]);
var inst_24062 = cljs.core.map.call(null,grab_hand_BANG_,inst_24061);
var inst_24063 = cljs.core.doall.call(null,inst_24062);
var state_24071__$1 = (function (){var statearr_24079 = state_24071;
(statearr_24079[(7)] = inst_24063);

return statearr_24079;
})();
var statearr_24080_24109 = state_24071__$1;
(statearr_24080_24109[(2)] = null);

(statearr_24080_24109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (13))){
var state_24071__$1 = state_24071;
var statearr_24081_24110 = state_24071__$1;
(statearr_24081_24110[(2)] = null);

(statearr_24081_24110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (6))){
var inst_24067 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24082_24111 = state_24071__$1;
(statearr_24082_24111[(2)] = inst_24067);

(statearr_24082_24111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (3))){
var inst_24069 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24071__$1,inst_24069);
} else {
if((state_val_24072 === (12))){
var state_24071__$1 = state_24071;
var statearr_24083_24112 = state_24071__$1;
(statearr_24083_24112[(2)] = null);

(statearr_24083_24112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (2))){
var state_24071__$1 = state_24071;
var statearr_24084_24113 = state_24071__$1;
(statearr_24084_24113[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (11))){
var state_24071__$1 = state_24071;
var statearr_24086_24114 = state_24071__$1;
(statearr_24086_24114[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_24086_24114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (9))){
var state_24071__$1 = state_24071;
var statearr_24087_24115 = state_24071__$1;
(statearr_24087_24115[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_24087_24115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (5))){
var state_24071__$1 = state_24071;
var statearr_24088_24116 = state_24071__$1;
(statearr_24088_24116[(2)] = null);

(statearr_24088_24116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (14))){
var inst_24055 = (state_24071[(8)]);
var inst_24059 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_24055);
var state_24071__$1 = state_24071;
var statearr_24089_24117 = state_24071__$1;
(statearr_24089_24117[(2)] = inst_24059);

(statearr_24089_24117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (10))){
var state_24071__$1 = state_24071;
var statearr_24090_24118 = state_24071__$1;
(statearr_24090_24118[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_24090_24118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24072 === (8))){
var inst_24055 = (state_24071[(8)]);
var inst_24055__$1 = (state_24071[(2)]);
var inst_24056 = (inst_24055__$1 == null);
var state_24071__$1 = (function (){var statearr_24091 = state_24071;
(statearr_24091[(8)] = inst_24055__$1);

return statearr_24091;
})();
if(cljs.core.truth_(inst_24056)){
var statearr_24092_24119 = state_24071__$1;
(statearr_24092_24119[(1)] = (13));

} else {
var statearr_24093_24120 = state_24071__$1;
(statearr_24093_24120[(1)] = (14));

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
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_24097 = [null,null,null,null,null,null,null,null,null];
(statearr_24097[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_24097[(1)] = (1));

return statearr_24097;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_24071){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_24071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e24098){if((e24098 instanceof Object)){
var ex__18813__auto__ = e24098;
var statearr_24099_24121 = state_24071;
(statearr_24099_24121[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24122 = state_24071;
state_24071 = G__24122;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = function(state_24071){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_24071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_24100 = f__18831__auto__.call(null);
(statearr_24100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_24100;
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
return (function (state_24201){
var state_val_24202 = (state_24201[(1)]);
if((state_val_24202 === (7))){
var inst_24180 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
var G__24203_24231 = (((inst_24180 instanceof cljs.core.Keyword))?inst_24180.fqn:null);
switch (G__24203_24231) {
case "release-left":
var statearr_24204_24233 = state_24201__$1;
(statearr_24204_24233[(1)] = (9));


break;
case "release-right":
var statearr_24205_24234 = state_24201__$1;
(statearr_24205_24234[(1)] = (10));


break;
case "release-both":
var statearr_24206_24235 = state_24201__$1;
(statearr_24206_24235[(1)] = (11));


break;
default:
var statearr_24207_24236 = state_24201__$1;
(statearr_24207_24236[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (1))){
var state_24201__$1 = state_24201;
var statearr_24208_24237 = state_24201__$1;
(statearr_24208_24237[(2)] = null);

(statearr_24208_24237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (4))){
var state_24201__$1 = state_24201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24201__$1,(7),keypressed);
} else {
if((state_val_24202 === (15))){
var inst_24193 = (state_24201[(2)]);
var state_24201__$1 = (function (){var statearr_24209 = state_24201;
(statearr_24209[(7)] = inst_24193);

return statearr_24209;
})();
var statearr_24210_24238 = state_24201__$1;
(statearr_24210_24238[(2)] = null);

(statearr_24210_24238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (13))){
var inst_24186 = (state_24201[(8)]);
var inst_24188 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_24186);
var inst_24189 = cljs.core.map.call(null,release_hand_BANG_,inst_24188);
var inst_24190 = cljs.core.doall.call(null,inst_24189);
var state_24201__$1 = state_24201;
var statearr_24211_24239 = state_24201__$1;
(statearr_24211_24239[(2)] = inst_24190);

(statearr_24211_24239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (6))){
var inst_24197 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
var statearr_24212_24240 = state_24201__$1;
(statearr_24212_24240[(2)] = inst_24197);

(statearr_24212_24240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (3))){
var inst_24199 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24201__$1,inst_24199);
} else {
if((state_val_24202 === (12))){
var state_24201__$1 = state_24201;
var statearr_24213_24241 = state_24201__$1;
(statearr_24213_24241[(2)] = null);

(statearr_24213_24241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (2))){
var state_24201__$1 = state_24201;
var statearr_24214_24242 = state_24201__$1;
(statearr_24214_24242[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (11))){
var state_24201__$1 = state_24201;
var statearr_24216_24243 = state_24201__$1;
(statearr_24216_24243[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_24216_24243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (9))){
var state_24201__$1 = state_24201;
var statearr_24217_24244 = state_24201__$1;
(statearr_24217_24244[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_24217_24244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (5))){
var state_24201__$1 = state_24201;
var statearr_24218_24245 = state_24201__$1;
(statearr_24218_24245[(2)] = null);

(statearr_24218_24245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (14))){
var state_24201__$1 = state_24201;
var statearr_24219_24246 = state_24201__$1;
(statearr_24219_24246[(2)] = null);

(statearr_24219_24246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (10))){
var state_24201__$1 = state_24201;
var statearr_24220_24247 = state_24201__$1;
(statearr_24220_24247[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_24220_24247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (8))){
var inst_24186 = (state_24201[(8)]);
var inst_24186__$1 = (state_24201[(2)]);
var state_24201__$1 = (function (){var statearr_24221 = state_24201;
(statearr_24221[(8)] = inst_24186__$1);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24186__$1)){
var statearr_24222_24248 = state_24201__$1;
(statearr_24222_24248[(1)] = (13));

} else {
var statearr_24223_24249 = state_24201__$1;
(statearr_24223_24249[(1)] = (14));

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
var statearr_24227 = [null,null,null,null,null,null,null,null,null];
(statearr_24227[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__);

(statearr_24227[(1)] = (1));

return statearr_24227;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_24201){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_24201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e24228){if((e24228 instanceof Object)){
var ex__18813__auto__ = e24228;
var statearr_24229_24250 = state_24201;
(statearr_24229_24250[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24251 = state_24201;
state_24201 = G__24251;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = function(state_24201){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_24201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_24230 = f__18831__auto__.call(null);
(statearr_24230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_24230;
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
var bodies = (function (){var G__24258 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__24258) {
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
var force_obj = (function (){var G__24259 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__24259) {
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
var seq__24260 = cljs.core.seq.call(null,bodies);
var chunk__24261 = null;
var count__24262 = (0);
var i__24263 = (0);
while(true){
if((i__24263 < count__24262)){
var b = cljs.core._nth.call(null,chunk__24261,i__24263);
climbr.matter.matter.apply_force.call(null,b,force);

var G__24266 = seq__24260;
var G__24267 = chunk__24261;
var G__24268 = count__24262;
var G__24269 = (i__24263 + (1));
seq__24260 = G__24266;
chunk__24261 = G__24267;
count__24262 = G__24268;
i__24263 = G__24269;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24260);
if(temp__4425__auto__){
var seq__24260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24260__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24260__$1);
var G__24270 = cljs.core.chunk_rest.call(null,seq__24260__$1);
var G__24271 = c__17608__auto__;
var G__24272 = cljs.core.count.call(null,c__17608__auto__);
var G__24273 = (0);
seq__24260 = G__24270;
chunk__24261 = G__24271;
count__24262 = G__24272;
i__24263 = G__24273;
continue;
} else {
var b = cljs.core.first.call(null,seq__24260__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__24274 = cljs.core.next.call(null,seq__24260__$1);
var G__24275 = null;
var G__24276 = (0);
var G__24277 = (0);
seq__24260 = G__24274;
chunk__24261 = G__24275;
count__24262 = G__24276;
i__24263 = G__24277;
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
return (function (state_24335){
var state_val_24336 = (state_24335[(1)]);
if((state_val_24336 === (7))){
var inst_24321 = (state_24335[(7)]);
var inst_24320 = (state_24335[(2)]);
var inst_24321__$1 = cljs.core.get.call(null,key_actions,inst_24320);
var inst_24322 = (inst_24321__$1 == null);
var state_24335__$1 = (function (){var statearr_24337 = state_24335;
(statearr_24337[(7)] = inst_24321__$1);

return statearr_24337;
})();
if(cljs.core.truth_(inst_24322)){
var statearr_24338_24356 = state_24335__$1;
(statearr_24338_24356[(1)] = (8));

} else {
var statearr_24339_24357 = state_24335__$1;
(statearr_24339_24357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (1))){
var state_24335__$1 = state_24335;
var statearr_24340_24358 = state_24335__$1;
(statearr_24340_24358[(2)] = null);

(statearr_24340_24358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (4))){
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24335__$1,(7),keypressed_chan);
} else {
if((state_val_24336 === (6))){
var inst_24331 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
var statearr_24341_24359 = state_24335__$1;
(statearr_24341_24359[(2)] = inst_24331);

(statearr_24341_24359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (3))){
var inst_24333 = (state_24335[(2)]);
var state_24335__$1 = state_24335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24335__$1,inst_24333);
} else {
if((state_val_24336 === (2))){
var state_24335__$1 = state_24335;
var statearr_24342_24360 = state_24335__$1;
(statearr_24342_24360[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (9))){
var inst_24321 = (state_24335[(7)]);
var inst_24325 = inst_24321.call(null);
var state_24335__$1 = state_24335;
var statearr_24344_24361 = state_24335__$1;
(statearr_24344_24361[(2)] = inst_24325);

(statearr_24344_24361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (5))){
var state_24335__$1 = state_24335;
var statearr_24345_24362 = state_24335__$1;
(statearr_24345_24362[(2)] = null);

(statearr_24345_24362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (10))){
var inst_24327 = (state_24335[(2)]);
var state_24335__$1 = (function (){var statearr_24346 = state_24335;
(statearr_24346[(8)] = inst_24327);

return statearr_24346;
})();
var statearr_24347_24363 = state_24335__$1;
(statearr_24347_24363[(2)] = null);

(statearr_24347_24363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24336 === (8))){
var state_24335__$1 = state_24335;
var statearr_24348_24364 = state_24335__$1;
(statearr_24348_24364[(2)] = null);

(statearr_24348_24364[(1)] = (10));


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
var statearr_24352 = [null,null,null,null,null,null,null,null,null];
(statearr_24352[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_24352[(1)] = (1));

return statearr_24352;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_24335){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_24335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e24353){if((e24353 instanceof Object)){
var ex__18813__auto__ = e24353;
var statearr_24354_24365 = state_24335;
(statearr_24354_24365[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24366 = state_24335;
state_24335 = G__24366;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_24335){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_24335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed_chan))
})();
var state__18832__auto__ = (function (){var statearr_24355 = f__18831__auto__.call(null);
(statearr_24355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_24355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed_chan))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__24368 = hand_name;
switch (G__24368) {
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
var key_boulder = (function (){var G__24371 = hand_name;
switch (G__24371) {
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
var key_holds = (function (){var G__24374 = hand_name;
switch (G__24374) {
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
var G__24377 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__24377) {
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

//# sourceMappingURL=user_actions.js.map?rel=1478008462856