// Compiled by ClojureScript 1.9.293 {}
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
if(cljs.core.truth_((function (){var and__6531__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__6531__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__6531__auto__;
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
if(cljs.core.truth_((function (){var and__6531__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__6531__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__6531__auto__;
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
if(cljs.core.truth_((function (){var and__6531__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__6531__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__6531__auto__;
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
var hand_key = (function (){var G__12175 = hand_name;
switch (G__12175) {
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

var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,keypressed,grab_hand_BANG_){
return (function (state_12201){
var state_val_12202 = (state_12201[(1)]);
if((state_val_12202 === (7))){
var inst_12179 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var G__12203_12232 = (((inst_12179 instanceof cljs.core.Keyword))?inst_12179.fqn:null);
switch (G__12203_12232) {
case "grab-left":
var statearr_12204_12234 = state_12201__$1;
(statearr_12204_12234[(1)] = (9));


break;
case "grab-right":
var statearr_12205_12235 = state_12201__$1;
(statearr_12205_12235[(1)] = (10));


break;
case "grab-both":
var statearr_12206_12236 = state_12201__$1;
(statearr_12206_12236[(1)] = (11));


break;
default:
var statearr_12207_12237 = state_12201__$1;
(statearr_12207_12237[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (1))){
var state_12201__$1 = state_12201;
var statearr_12208_12238 = state_12201__$1;
(statearr_12208_12238[(2)] = null);

(statearr_12208_12238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (4))){
var state_12201__$1 = state_12201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12201__$1,(7),keypressed);
} else {
if((state_val_12202 === (15))){
var inst_12191 = (state_12201[(2)]);
var inst_12192 = cljs.core.map.call(null,grab_hand_BANG_,inst_12191);
var inst_12193 = cljs.core.doall.call(null,inst_12192);
var state_12201__$1 = (function (){var statearr_12209 = state_12201;
(statearr_12209[(7)] = inst_12193);

return statearr_12209;
})();
var statearr_12210_12239 = state_12201__$1;
(statearr_12210_12239[(2)] = null);

(statearr_12210_12239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (13))){
var state_12201__$1 = state_12201;
var statearr_12211_12240 = state_12201__$1;
(statearr_12211_12240[(2)] = null);

(statearr_12211_12240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (6))){
var inst_12197 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
var statearr_12212_12241 = state_12201__$1;
(statearr_12212_12241[(2)] = inst_12197);

(statearr_12212_12241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (3))){
var inst_12199 = (state_12201[(2)]);
var state_12201__$1 = state_12201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12201__$1,inst_12199);
} else {
if((state_val_12202 === (12))){
var state_12201__$1 = state_12201;
var statearr_12213_12242 = state_12201__$1;
(statearr_12213_12242[(2)] = null);

(statearr_12213_12242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (2))){
var state_12201__$1 = state_12201;
var statearr_12214_12243 = state_12201__$1;
(statearr_12214_12243[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (11))){
var state_12201__$1 = state_12201;
var statearr_12216_12244 = state_12201__$1;
(statearr_12216_12244[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_12216_12244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (9))){
var state_12201__$1 = state_12201;
var statearr_12217_12245 = state_12201__$1;
(statearr_12217_12245[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_12217_12245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (5))){
var state_12201__$1 = state_12201;
var statearr_12218_12246 = state_12201__$1;
(statearr_12218_12246[(2)] = null);

(statearr_12218_12246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (14))){
var inst_12185 = (state_12201[(8)]);
var inst_12189 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_12185);
var state_12201__$1 = state_12201;
var statearr_12219_12247 = state_12201__$1;
(statearr_12219_12247[(2)] = inst_12189);

(statearr_12219_12247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (10))){
var state_12201__$1 = state_12201;
var statearr_12220_12248 = state_12201__$1;
(statearr_12220_12248[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_12220_12248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12202 === (8))){
var inst_12185 = (state_12201[(8)]);
var inst_12185__$1 = (state_12201[(2)]);
var inst_12186 = (inst_12185__$1 == null);
var state_12201__$1 = (function (){var statearr_12221 = state_12201;
(statearr_12221[(8)] = inst_12185__$1);

return statearr_12221;
})();
if(cljs.core.truth_(inst_12186)){
var statearr_12222_12249 = state_12201__$1;
(statearr_12222_12249[(1)] = (13));

} else {
var statearr_12223_12250 = state_12201__$1;
(statearr_12223_12250[(1)] = (14));

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
});})(c__9118__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__9103__auto__,c__9118__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____0 = (function (){
var statearr_12227 = [null,null,null,null,null,null,null,null,null];
(statearr_12227[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__);

(statearr_12227[(1)] = (1));

return statearr_12227;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____1 = (function (state_12201){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_12201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e12228){if((e12228 instanceof Object)){
var ex__9107__auto__ = e12228;
var statearr_12229_12251 = state_12201;
(statearr_12229_12251[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12252 = state_12201;
state_12201 = G__12252;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__ = function(state_12201){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____1.call(this,state_12201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,keypressed,grab_hand_BANG_))
})();
var state__9120__auto__ = (function (){var statearr_12230 = f__9119__auto__.call(null);
(statearr_12230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_12230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,keypressed,grab_hand_BANG_))
);

return c__9118__auto__;
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

var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,keypressed,release_hand_BANG_){
return (function (state_12331){
var state_val_12332 = (state_12331[(1)]);
if((state_val_12332 === (7))){
var inst_12310 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var G__12333_12361 = (((inst_12310 instanceof cljs.core.Keyword))?inst_12310.fqn:null);
switch (G__12333_12361) {
case "release-left":
var statearr_12334_12363 = state_12331__$1;
(statearr_12334_12363[(1)] = (9));


break;
case "release-right":
var statearr_12335_12364 = state_12331__$1;
(statearr_12335_12364[(1)] = (10));


break;
case "release-both":
var statearr_12336_12365 = state_12331__$1;
(statearr_12336_12365[(1)] = (11));


break;
default:
var statearr_12337_12366 = state_12331__$1;
(statearr_12337_12366[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (1))){
var state_12331__$1 = state_12331;
var statearr_12338_12367 = state_12331__$1;
(statearr_12338_12367[(2)] = null);

(statearr_12338_12367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (4))){
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12331__$1,(7),keypressed);
} else {
if((state_val_12332 === (15))){
var inst_12323 = (state_12331[(2)]);
var state_12331__$1 = (function (){var statearr_12339 = state_12331;
(statearr_12339[(7)] = inst_12323);

return statearr_12339;
})();
var statearr_12340_12368 = state_12331__$1;
(statearr_12340_12368[(2)] = null);

(statearr_12340_12368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (13))){
var inst_12316 = (state_12331[(8)]);
var inst_12318 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_12316);
var inst_12319 = cljs.core.map.call(null,release_hand_BANG_,inst_12318);
var inst_12320 = cljs.core.doall.call(null,inst_12319);
var state_12331__$1 = state_12331;
var statearr_12341_12369 = state_12331__$1;
(statearr_12341_12369[(2)] = inst_12320);

(statearr_12341_12369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (6))){
var inst_12327 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12342_12370 = state_12331__$1;
(statearr_12342_12370[(2)] = inst_12327);

(statearr_12342_12370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (3))){
var inst_12329 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12331__$1,inst_12329);
} else {
if((state_val_12332 === (12))){
var state_12331__$1 = state_12331;
var statearr_12343_12371 = state_12331__$1;
(statearr_12343_12371[(2)] = null);

(statearr_12343_12371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (2))){
var state_12331__$1 = state_12331;
var statearr_12344_12372 = state_12331__$1;
(statearr_12344_12372[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (11))){
var state_12331__$1 = state_12331;
var statearr_12346_12373 = state_12331__$1;
(statearr_12346_12373[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_12346_12373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (9))){
var state_12331__$1 = state_12331;
var statearr_12347_12374 = state_12331__$1;
(statearr_12347_12374[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_12347_12374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (5))){
var state_12331__$1 = state_12331;
var statearr_12348_12375 = state_12331__$1;
(statearr_12348_12375[(2)] = null);

(statearr_12348_12375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (14))){
var state_12331__$1 = state_12331;
var statearr_12349_12376 = state_12331__$1;
(statearr_12349_12376[(2)] = null);

(statearr_12349_12376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (10))){
var state_12331__$1 = state_12331;
var statearr_12350_12377 = state_12331__$1;
(statearr_12350_12377[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_12350_12377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (8))){
var inst_12316 = (state_12331[(8)]);
var inst_12316__$1 = (state_12331[(2)]);
var state_12331__$1 = (function (){var statearr_12351 = state_12331;
(statearr_12351[(8)] = inst_12316__$1);

return statearr_12351;
})();
if(cljs.core.truth_(inst_12316__$1)){
var statearr_12352_12378 = state_12331__$1;
(statearr_12352_12378[(1)] = (13));

} else {
var statearr_12353_12379 = state_12331__$1;
(statearr_12353_12379[(1)] = (14));

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
});})(c__9118__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__9103__auto__,c__9118__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____0 = (function (){
var statearr_12357 = [null,null,null,null,null,null,null,null,null];
(statearr_12357[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__);

(statearr_12357[(1)] = (1));

return statearr_12357;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____1 = (function (state_12331){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_12331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e12358){if((e12358 instanceof Object)){
var ex__9107__auto__ = e12358;
var statearr_12359_12380 = state_12331;
(statearr_12359_12380[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12381 = state_12331;
state_12331 = G__12381;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__ = function(state_12331){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____1.call(this,state_12331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,keypressed,release_hand_BANG_))
})();
var state__9120__auto__ = (function (){var statearr_12360 = f__9119__auto__.call(null);
(statearr_12360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_12360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,keypressed,release_hand_BANG_))
);

return c__9118__auto__;
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
});
climbr.behaviour.user_actions.holds_nothing_QMARK_ = (function climbr$behaviour$user_actions$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__6543__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_both_QMARK_ = (function climbr$behaviour$user_actions$holds_both_QMARK_(){
var and__6531__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__6531__auto__)){
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
} else {
return and__6531__auto__;
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
var bodies = (function (){var G__12388 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__12388) {
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
var force_obj = (function (){var G__12389 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__12389) {
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
var factor = (function (){var or__6543__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var directions = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__6531__auto__ = climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__6531__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__6531__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var seq__12390 = cljs.core.seq.call(null,bodies);
var chunk__12391 = null;
var count__12392 = (0);
var i__12393 = (0);
while(true){
if((i__12393 < count__12392)){
var b = cljs.core._nth.call(null,chunk__12391,i__12393);
climbr.matter.matter.apply_force.call(null,b,force);

var G__12396 = seq__12390;
var G__12397 = chunk__12391;
var G__12398 = count__12392;
var G__12399 = (i__12393 + (1));
seq__12390 = G__12396;
chunk__12391 = G__12397;
count__12392 = G__12398;
i__12393 = G__12399;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12390);
if(temp__4657__auto__){
var seq__12390__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12390__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__12390__$1);
var G__12400 = cljs.core.chunk_rest.call(null,seq__12390__$1);
var G__12401 = c__7357__auto__;
var G__12402 = cljs.core.count.call(null,c__7357__auto__);
var G__12403 = (0);
seq__12390 = G__12400;
chunk__12391 = G__12401;
count__12392 = G__12402;
i__12393 = G__12403;
continue;
} else {
var b = cljs.core.first.call(null,seq__12390__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__12404 = cljs.core.next.call(null,seq__12390__$1);
var G__12405 = null;
var G__12406 = (0);
var G__12407 = (0);
seq__12390 = G__12404;
chunk__12391 = G__12405;
count__12392 = G__12406;
i__12393 = G__12407;
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

var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,keypressed_chan){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,keypressed_chan){
return (function (state_12465){
var state_val_12466 = (state_12465[(1)]);
if((state_val_12466 === (7))){
var inst_12451 = (state_12465[(7)]);
var inst_12450 = (state_12465[(2)]);
var inst_12451__$1 = cljs.core.get.call(null,key_actions,inst_12450);
var inst_12452 = (inst_12451__$1 == null);
var state_12465__$1 = (function (){var statearr_12467 = state_12465;
(statearr_12467[(7)] = inst_12451__$1);

return statearr_12467;
})();
if(cljs.core.truth_(inst_12452)){
var statearr_12468_12486 = state_12465__$1;
(statearr_12468_12486[(1)] = (8));

} else {
var statearr_12469_12487 = state_12465__$1;
(statearr_12469_12487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (1))){
var state_12465__$1 = state_12465;
var statearr_12470_12488 = state_12465__$1;
(statearr_12470_12488[(2)] = null);

(statearr_12470_12488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (4))){
var state_12465__$1 = state_12465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12465__$1,(7),keypressed_chan);
} else {
if((state_val_12466 === (6))){
var inst_12461 = (state_12465[(2)]);
var state_12465__$1 = state_12465;
var statearr_12471_12489 = state_12465__$1;
(statearr_12471_12489[(2)] = inst_12461);

(statearr_12471_12489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (3))){
var inst_12463 = (state_12465[(2)]);
var state_12465__$1 = state_12465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12465__$1,inst_12463);
} else {
if((state_val_12466 === (2))){
var state_12465__$1 = state_12465;
var statearr_12472_12490 = state_12465__$1;
(statearr_12472_12490[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (9))){
var inst_12451 = (state_12465[(7)]);
var inst_12455 = inst_12451.call(null);
var state_12465__$1 = state_12465;
var statearr_12474_12491 = state_12465__$1;
(statearr_12474_12491[(2)] = inst_12455);

(statearr_12474_12491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (5))){
var state_12465__$1 = state_12465;
var statearr_12475_12492 = state_12465__$1;
(statearr_12475_12492[(2)] = null);

(statearr_12475_12492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (10))){
var inst_12457 = (state_12465[(2)]);
var state_12465__$1 = (function (){var statearr_12476 = state_12465;
(statearr_12476[(8)] = inst_12457);

return statearr_12476;
})();
var statearr_12477_12493 = state_12465__$1;
(statearr_12477_12493[(2)] = null);

(statearr_12477_12493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (8))){
var state_12465__$1 = state_12465;
var statearr_12478_12494 = state_12465__$1;
(statearr_12478_12494[(2)] = null);

(statearr_12478_12494[(1)] = (10));


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
});})(c__9118__auto__,keypressed_chan))
;
return ((function (switch__9103__auto__,c__9118__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____0 = (function (){
var statearr_12482 = [null,null,null,null,null,null,null,null,null];
(statearr_12482[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__);

(statearr_12482[(1)] = (1));

return statearr_12482;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____1 = (function (state_12465){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_12465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e12483){if((e12483 instanceof Object)){
var ex__9107__auto__ = e12483;
var statearr_12484_12495 = state_12465;
(statearr_12484_12495[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12496 = state_12465;
state_12465 = G__12496;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__ = function(state_12465){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____1.call(this,state_12465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,keypressed_chan))
})();
var state__9120__auto__ = (function (){var statearr_12485 = f__9119__auto__.call(null);
(statearr_12485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_12485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,keypressed_chan))
);

return c__9118__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__12498 = hand_name;
switch (G__12498) {
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
var key_boulder = (function (){var G__12501 = hand_name;
switch (G__12501) {
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
var key_holds = (function (){var G__12504 = hand_name;
switch (G__12504) {
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
var G__12507 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__12507) {
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

//# sourceMappingURL=user_actions.js.map?rel=1478625873117