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
climbr.behaviour.user_actions.setup_climber_grab_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_grab_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var grab_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__79074 = hand_name;
switch (G__79074) {
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
return (function (state_79099){
var state_val_79100 = (state_79099[(1)]);
if((state_val_79100 === (7))){
var inst_79078 = (state_79099[(2)]);
var state_79099__$1 = state_79099;
var G__79101_79130 = (((inst_79078 instanceof cljs.core.Keyword))?inst_79078.fqn:null);
switch (G__79101_79130) {
case "grab-left":
var statearr_79102_79132 = state_79099__$1;
(statearr_79102_79132[(1)] = (9));


break;
case "grab-right":
var statearr_79103_79133 = state_79099__$1;
(statearr_79103_79133[(1)] = (10));


break;
case "grab-both":
var statearr_79104_79134 = state_79099__$1;
(statearr_79104_79134[(1)] = (11));


break;
default:
var statearr_79105_79135 = state_79099__$1;
(statearr_79105_79135[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (1))){
var state_79099__$1 = state_79099;
var statearr_79106_79136 = state_79099__$1;
(statearr_79106_79136[(2)] = null);

(statearr_79106_79136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (4))){
var state_79099__$1 = state_79099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79099__$1,(7),keypressed);
} else {
if((state_val_79100 === (15))){
var inst_79091 = (state_79099[(2)]);
var state_79099__$1 = (function (){var statearr_79107 = state_79099;
(statearr_79107[(7)] = inst_79091);

return statearr_79107;
})();
var statearr_79108_79137 = state_79099__$1;
(statearr_79108_79137[(2)] = null);

(statearr_79108_79137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (13))){
var inst_79084 = (state_79099[(8)]);
var inst_79086 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_79084);
var inst_79087 = cljs.core.map.call(null,grab_hand_BANG_,inst_79086);
var inst_79088 = cljs.core.doall.call(null,inst_79087);
var state_79099__$1 = state_79099;
var statearr_79109_79138 = state_79099__$1;
(statearr_79109_79138[(2)] = inst_79088);

(statearr_79109_79138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (6))){
var inst_79095 = (state_79099[(2)]);
var state_79099__$1 = state_79099;
var statearr_79110_79139 = state_79099__$1;
(statearr_79110_79139[(2)] = inst_79095);

(statearr_79110_79139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (3))){
var inst_79097 = (state_79099[(2)]);
var state_79099__$1 = state_79099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79099__$1,inst_79097);
} else {
if((state_val_79100 === (12))){
var state_79099__$1 = state_79099;
var statearr_79111_79140 = state_79099__$1;
(statearr_79111_79140[(2)] = null);

(statearr_79111_79140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (2))){
var state_79099__$1 = state_79099;
var statearr_79112_79141 = state_79099__$1;
(statearr_79112_79141[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (11))){
var state_79099__$1 = state_79099;
var statearr_79114_79142 = state_79099__$1;
(statearr_79114_79142[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_79114_79142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (9))){
var state_79099__$1 = state_79099;
var statearr_79115_79143 = state_79099__$1;
(statearr_79115_79143[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_79115_79143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (5))){
var state_79099__$1 = state_79099;
var statearr_79116_79144 = state_79099__$1;
(statearr_79116_79144[(2)] = null);

(statearr_79116_79144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (14))){
var state_79099__$1 = state_79099;
var statearr_79117_79145 = state_79099__$1;
(statearr_79117_79145[(2)] = null);

(statearr_79117_79145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (10))){
var state_79099__$1 = state_79099;
var statearr_79118_79146 = state_79099__$1;
(statearr_79118_79146[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_79118_79146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79100 === (8))){
var inst_79084 = (state_79099[(8)]);
var inst_79084__$1 = (state_79099[(2)]);
var state_79099__$1 = (function (){var statearr_79119 = state_79099;
(statearr_79119[(8)] = inst_79084__$1);

return statearr_79119;
})();
if(cljs.core.truth_(inst_79084__$1)){
var statearr_79120_79147 = state_79099__$1;
(statearr_79120_79147[(1)] = (13));

} else {
var statearr_79121_79148 = state_79099__$1;
(statearr_79121_79148[(1)] = (14));

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
var statearr_79125 = [null,null,null,null,null,null,null,null,null];
(statearr_79125[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_79125[(1)] = (1));

return statearr_79125;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_79099){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_79099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e79126){if((e79126 instanceof Object)){
var ex__18813__auto__ = e79126;
var statearr_79127_79149 = state_79099;
(statearr_79127_79149[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79150 = state_79099;
state_79099 = G__79150;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = function(state_79099){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_79099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_79128 = f__18831__auto__.call(null);
(statearr_79128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_79128;
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
return (function (state_79229){
var state_val_79230 = (state_79229[(1)]);
if((state_val_79230 === (7))){
var inst_79208 = (state_79229[(2)]);
var state_79229__$1 = state_79229;
var G__79231_79259 = (((inst_79208 instanceof cljs.core.Keyword))?inst_79208.fqn:null);
switch (G__79231_79259) {
case "release-left":
var statearr_79232_79261 = state_79229__$1;
(statearr_79232_79261[(1)] = (9));


break;
case "release-right":
var statearr_79233_79262 = state_79229__$1;
(statearr_79233_79262[(1)] = (10));


break;
case "release-both":
var statearr_79234_79263 = state_79229__$1;
(statearr_79234_79263[(1)] = (11));


break;
default:
var statearr_79235_79264 = state_79229__$1;
(statearr_79235_79264[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (1))){
var state_79229__$1 = state_79229;
var statearr_79236_79265 = state_79229__$1;
(statearr_79236_79265[(2)] = null);

(statearr_79236_79265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (4))){
var state_79229__$1 = state_79229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79229__$1,(7),keypressed);
} else {
if((state_val_79230 === (15))){
var inst_79221 = (state_79229[(2)]);
var state_79229__$1 = (function (){var statearr_79237 = state_79229;
(statearr_79237[(7)] = inst_79221);

return statearr_79237;
})();
var statearr_79238_79266 = state_79229__$1;
(statearr_79238_79266[(2)] = null);

(statearr_79238_79266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (13))){
var inst_79214 = (state_79229[(8)]);
var inst_79216 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_79214);
var inst_79217 = cljs.core.map.call(null,release_hand_BANG_,inst_79216);
var inst_79218 = cljs.core.doall.call(null,inst_79217);
var state_79229__$1 = state_79229;
var statearr_79239_79267 = state_79229__$1;
(statearr_79239_79267[(2)] = inst_79218);

(statearr_79239_79267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (6))){
var inst_79225 = (state_79229[(2)]);
var state_79229__$1 = state_79229;
var statearr_79240_79268 = state_79229__$1;
(statearr_79240_79268[(2)] = inst_79225);

(statearr_79240_79268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (3))){
var inst_79227 = (state_79229[(2)]);
var state_79229__$1 = state_79229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79229__$1,inst_79227);
} else {
if((state_val_79230 === (12))){
var state_79229__$1 = state_79229;
var statearr_79241_79269 = state_79229__$1;
(statearr_79241_79269[(2)] = null);

(statearr_79241_79269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (2))){
var state_79229__$1 = state_79229;
var statearr_79242_79270 = state_79229__$1;
(statearr_79242_79270[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (11))){
var state_79229__$1 = state_79229;
var statearr_79244_79271 = state_79229__$1;
(statearr_79244_79271[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_79244_79271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (9))){
var state_79229__$1 = state_79229;
var statearr_79245_79272 = state_79229__$1;
(statearr_79245_79272[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_79245_79272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (5))){
var state_79229__$1 = state_79229;
var statearr_79246_79273 = state_79229__$1;
(statearr_79246_79273[(2)] = null);

(statearr_79246_79273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (14))){
var state_79229__$1 = state_79229;
var statearr_79247_79274 = state_79229__$1;
(statearr_79247_79274[(2)] = null);

(statearr_79247_79274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (10))){
var state_79229__$1 = state_79229;
var statearr_79248_79275 = state_79229__$1;
(statearr_79248_79275[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_79248_79275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79230 === (8))){
var inst_79214 = (state_79229[(8)]);
var inst_79214__$1 = (state_79229[(2)]);
var state_79229__$1 = (function (){var statearr_79249 = state_79229;
(statearr_79249[(8)] = inst_79214__$1);

return statearr_79249;
})();
if(cljs.core.truth_(inst_79214__$1)){
var statearr_79250_79276 = state_79229__$1;
(statearr_79250_79276[(1)] = (13));

} else {
var statearr_79251_79277 = state_79229__$1;
(statearr_79251_79277[(1)] = (14));

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
var statearr_79255 = [null,null,null,null,null,null,null,null,null];
(statearr_79255[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__);

(statearr_79255[(1)] = (1));

return statearr_79255;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_79229){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_79229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e79256){if((e79256 instanceof Object)){
var ex__18813__auto__ = e79256;
var statearr_79257_79278 = state_79229;
(statearr_79257_79278[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79279 = state_79229;
state_79229 = G__79279;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = function(state_79229){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_79229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_79258 = f__18831__auto__.call(null);
(statearr_79258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_79258;
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
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var objects = (function (){var G__79287 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__79287) {
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
var force_obj = (function (){var G__79288 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__79288) {
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
var force = (function (){var G__79289 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__79289) {
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
var seq__79290 = cljs.core.seq.call(null,objects);
var chunk__79291 = null;
var count__79292 = (0);
var i__79293 = (0);
while(true){
if((i__79293 < count__79292)){
var o = cljs.core._nth.call(null,chunk__79291,i__79293);
climbr.matter.matter.apply_force.call(null,o,force);

var G__79297 = seq__79290;
var G__79298 = chunk__79291;
var G__79299 = count__79292;
var G__79300 = (i__79293 + (1));
seq__79290 = G__79297;
chunk__79291 = G__79298;
count__79292 = G__79299;
i__79293 = G__79300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__79290);
if(temp__4425__auto__){
var seq__79290__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79290__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__79290__$1);
var G__79301 = cljs.core.chunk_rest.call(null,seq__79290__$1);
var G__79302 = c__17608__auto__;
var G__79303 = cljs.core.count.call(null,c__17608__auto__);
var G__79304 = (0);
seq__79290 = G__79301;
chunk__79291 = G__79302;
count__79292 = G__79303;
i__79293 = G__79304;
continue;
} else {
var o = cljs.core.first.call(null,seq__79290__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__79305 = cljs.core.next.call(null,seq__79290__$1);
var G__79306 = null;
var G__79307 = (0);
var G__79308 = (0);
seq__79290 = G__79305;
chunk__79291 = G__79306;
count__79292 = G__79307;
i__79293 = G__79308;
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
return (function (state_79366){
var state_val_79367 = (state_79366[(1)]);
if((state_val_79367 === (7))){
var inst_79352 = (state_79366[(7)]);
var inst_79351 = (state_79366[(2)]);
var inst_79352__$1 = cljs.core.get.call(null,key_actions,inst_79351);
var inst_79353 = (inst_79352__$1 == null);
var state_79366__$1 = (function (){var statearr_79368 = state_79366;
(statearr_79368[(7)] = inst_79352__$1);

return statearr_79368;
})();
if(cljs.core.truth_(inst_79353)){
var statearr_79369_79387 = state_79366__$1;
(statearr_79369_79387[(1)] = (8));

} else {
var statearr_79370_79388 = state_79366__$1;
(statearr_79370_79388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (1))){
var state_79366__$1 = state_79366;
var statearr_79371_79389 = state_79366__$1;
(statearr_79371_79389[(2)] = null);

(statearr_79371_79389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (4))){
var state_79366__$1 = state_79366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79366__$1,(7),keypressed);
} else {
if((state_val_79367 === (6))){
var inst_79362 = (state_79366[(2)]);
var state_79366__$1 = state_79366;
var statearr_79372_79390 = state_79366__$1;
(statearr_79372_79390[(2)] = inst_79362);

(statearr_79372_79390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (3))){
var inst_79364 = (state_79366[(2)]);
var state_79366__$1 = state_79366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79366__$1,inst_79364);
} else {
if((state_val_79367 === (2))){
var state_79366__$1 = state_79366;
var statearr_79373_79391 = state_79366__$1;
(statearr_79373_79391[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (9))){
var inst_79352 = (state_79366[(7)]);
var inst_79356 = inst_79352.call(null);
var state_79366__$1 = state_79366;
var statearr_79375_79392 = state_79366__$1;
(statearr_79375_79392[(2)] = inst_79356);

(statearr_79375_79392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (5))){
var state_79366__$1 = state_79366;
var statearr_79376_79393 = state_79366__$1;
(statearr_79376_79393[(2)] = null);

(statearr_79376_79393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (10))){
var inst_79358 = (state_79366[(2)]);
var state_79366__$1 = (function (){var statearr_79377 = state_79366;
(statearr_79377[(8)] = inst_79358);

return statearr_79377;
})();
var statearr_79378_79394 = state_79366__$1;
(statearr_79378_79394[(2)] = null);

(statearr_79378_79394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79367 === (8))){
var state_79366__$1 = state_79366;
var statearr_79379_79395 = state_79366__$1;
(statearr_79379_79395[(2)] = null);

(statearr_79379_79395[(1)] = (10));


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
var statearr_79383 = [null,null,null,null,null,null,null,null,null];
(statearr_79383[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_79383[(1)] = (1));

return statearr_79383;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_79366){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_79366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e79384){if((e79384 instanceof Object)){
var ex__18813__auto__ = e79384;
var statearr_79385_79396 = state_79366;
(statearr_79385_79396[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79397 = state_79366;
state_79366 = G__79397;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_79366){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_79366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_79386 = f__18831__auto__.call(null);
(statearr_79386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_79386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__79399 = hand_name;
switch (G__79399) {
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
var key_boulder = (function (){var G__79402 = hand_name;
switch (G__79402) {
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
var key_holds = (function (){var G__79405 = hand_name;
switch (G__79405) {
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
var G__79408 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__79408) {
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

//# sourceMappingURL=user_actions.js.map?rel=1476047228844