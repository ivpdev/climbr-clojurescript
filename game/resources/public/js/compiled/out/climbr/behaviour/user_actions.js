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
var hand_key = (function (){var G__74789 = hand_name;
switch (G__74789) {
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
return (function (state_74814){
var state_val_74815 = (state_74814[(1)]);
if((state_val_74815 === (7))){
var inst_74793 = (state_74814[(2)]);
var state_74814__$1 = state_74814;
var G__74816_74845 = (((inst_74793 instanceof cljs.core.Keyword))?inst_74793.fqn:null);
switch (G__74816_74845) {
case "grab-left":
var statearr_74817_74847 = state_74814__$1;
(statearr_74817_74847[(1)] = (9));


break;
case "grab-right":
var statearr_74818_74848 = state_74814__$1;
(statearr_74818_74848[(1)] = (10));


break;
case "grab-both":
var statearr_74819_74849 = state_74814__$1;
(statearr_74819_74849[(1)] = (11));


break;
default:
var statearr_74820_74850 = state_74814__$1;
(statearr_74820_74850[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (1))){
var state_74814__$1 = state_74814;
var statearr_74821_74851 = state_74814__$1;
(statearr_74821_74851[(2)] = null);

(statearr_74821_74851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (4))){
var state_74814__$1 = state_74814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74814__$1,(7),keypressed);
} else {
if((state_val_74815 === (15))){
var inst_74806 = (state_74814[(2)]);
var state_74814__$1 = (function (){var statearr_74822 = state_74814;
(statearr_74822[(7)] = inst_74806);

return statearr_74822;
})();
var statearr_74823_74852 = state_74814__$1;
(statearr_74823_74852[(2)] = null);

(statearr_74823_74852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (13))){
var inst_74799 = (state_74814[(8)]);
var inst_74801 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_74799);
var inst_74802 = cljs.core.map.call(null,grab_hand_BANG_,inst_74801);
var inst_74803 = cljs.core.doall.call(null,inst_74802);
var state_74814__$1 = state_74814;
var statearr_74824_74853 = state_74814__$1;
(statearr_74824_74853[(2)] = inst_74803);

(statearr_74824_74853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (6))){
var inst_74810 = (state_74814[(2)]);
var state_74814__$1 = state_74814;
var statearr_74825_74854 = state_74814__$1;
(statearr_74825_74854[(2)] = inst_74810);

(statearr_74825_74854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (3))){
var inst_74812 = (state_74814[(2)]);
var state_74814__$1 = state_74814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74814__$1,inst_74812);
} else {
if((state_val_74815 === (12))){
var state_74814__$1 = state_74814;
var statearr_74826_74855 = state_74814__$1;
(statearr_74826_74855[(2)] = null);

(statearr_74826_74855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (2))){
var state_74814__$1 = state_74814;
var statearr_74827_74856 = state_74814__$1;
(statearr_74827_74856[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (11))){
var state_74814__$1 = state_74814;
var statearr_74829_74857 = state_74814__$1;
(statearr_74829_74857[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_74829_74857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (9))){
var state_74814__$1 = state_74814;
var statearr_74830_74858 = state_74814__$1;
(statearr_74830_74858[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_74830_74858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (5))){
var state_74814__$1 = state_74814;
var statearr_74831_74859 = state_74814__$1;
(statearr_74831_74859[(2)] = null);

(statearr_74831_74859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (14))){
var state_74814__$1 = state_74814;
var statearr_74832_74860 = state_74814__$1;
(statearr_74832_74860[(2)] = null);

(statearr_74832_74860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (10))){
var state_74814__$1 = state_74814;
var statearr_74833_74861 = state_74814__$1;
(statearr_74833_74861[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_74833_74861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74815 === (8))){
var inst_74799 = (state_74814[(8)]);
var inst_74799__$1 = (state_74814[(2)]);
var state_74814__$1 = (function (){var statearr_74834 = state_74814;
(statearr_74834[(8)] = inst_74799__$1);

return statearr_74834;
})();
if(cljs.core.truth_(inst_74799__$1)){
var statearr_74835_74862 = state_74814__$1;
(statearr_74835_74862[(1)] = (13));

} else {
var statearr_74836_74863 = state_74814__$1;
(statearr_74836_74863[(1)] = (14));

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
var statearr_74840 = [null,null,null,null,null,null,null,null,null];
(statearr_74840[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_74840[(1)] = (1));

return statearr_74840;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_74814){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_74814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e74841){if((e74841 instanceof Object)){
var ex__18813__auto__ = e74841;
var statearr_74842_74864 = state_74814;
(statearr_74842_74864[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74865 = state_74814;
state_74814 = G__74865;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = function(state_74814){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_74814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_74843 = f__18831__auto__.call(null);
(statearr_74843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_74843;
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
return (function (state_74944){
var state_val_74945 = (state_74944[(1)]);
if((state_val_74945 === (7))){
var inst_74923 = (state_74944[(2)]);
var state_74944__$1 = state_74944;
var G__74946_74974 = (((inst_74923 instanceof cljs.core.Keyword))?inst_74923.fqn:null);
switch (G__74946_74974) {
case "release-left":
var statearr_74947_74976 = state_74944__$1;
(statearr_74947_74976[(1)] = (9));


break;
case "release-right":
var statearr_74948_74977 = state_74944__$1;
(statearr_74948_74977[(1)] = (10));


break;
case "release-both":
var statearr_74949_74978 = state_74944__$1;
(statearr_74949_74978[(1)] = (11));


break;
default:
var statearr_74950_74979 = state_74944__$1;
(statearr_74950_74979[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (1))){
var state_74944__$1 = state_74944;
var statearr_74951_74980 = state_74944__$1;
(statearr_74951_74980[(2)] = null);

(statearr_74951_74980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (4))){
var state_74944__$1 = state_74944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74944__$1,(7),keypressed);
} else {
if((state_val_74945 === (15))){
var inst_74936 = (state_74944[(2)]);
var state_74944__$1 = (function (){var statearr_74952 = state_74944;
(statearr_74952[(7)] = inst_74936);

return statearr_74952;
})();
var statearr_74953_74981 = state_74944__$1;
(statearr_74953_74981[(2)] = null);

(statearr_74953_74981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (13))){
var inst_74929 = (state_74944[(8)]);
var inst_74931 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_74929);
var inst_74932 = cljs.core.map.call(null,release_hand_BANG_,inst_74931);
var inst_74933 = cljs.core.doall.call(null,inst_74932);
var state_74944__$1 = state_74944;
var statearr_74954_74982 = state_74944__$1;
(statearr_74954_74982[(2)] = inst_74933);

(statearr_74954_74982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (6))){
var inst_74940 = (state_74944[(2)]);
var state_74944__$1 = state_74944;
var statearr_74955_74983 = state_74944__$1;
(statearr_74955_74983[(2)] = inst_74940);

(statearr_74955_74983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (3))){
var inst_74942 = (state_74944[(2)]);
var state_74944__$1 = state_74944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74944__$1,inst_74942);
} else {
if((state_val_74945 === (12))){
var state_74944__$1 = state_74944;
var statearr_74956_74984 = state_74944__$1;
(statearr_74956_74984[(2)] = null);

(statearr_74956_74984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (2))){
var state_74944__$1 = state_74944;
var statearr_74957_74985 = state_74944__$1;
(statearr_74957_74985[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (11))){
var state_74944__$1 = state_74944;
var statearr_74959_74986 = state_74944__$1;
(statearr_74959_74986[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_74959_74986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (9))){
var state_74944__$1 = state_74944;
var statearr_74960_74987 = state_74944__$1;
(statearr_74960_74987[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_74960_74987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (5))){
var state_74944__$1 = state_74944;
var statearr_74961_74988 = state_74944__$1;
(statearr_74961_74988[(2)] = null);

(statearr_74961_74988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (14))){
var state_74944__$1 = state_74944;
var statearr_74962_74989 = state_74944__$1;
(statearr_74962_74989[(2)] = null);

(statearr_74962_74989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (10))){
var state_74944__$1 = state_74944;
var statearr_74963_74990 = state_74944__$1;
(statearr_74963_74990[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_74963_74990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74945 === (8))){
var inst_74929 = (state_74944[(8)]);
var inst_74929__$1 = (state_74944[(2)]);
var state_74944__$1 = (function (){var statearr_74964 = state_74944;
(statearr_74964[(8)] = inst_74929__$1);

return statearr_74964;
})();
if(cljs.core.truth_(inst_74929__$1)){
var statearr_74965_74991 = state_74944__$1;
(statearr_74965_74991[(1)] = (13));

} else {
var statearr_74966_74992 = state_74944__$1;
(statearr_74966_74992[(1)] = (14));

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
var statearr_74970 = [null,null,null,null,null,null,null,null,null];
(statearr_74970[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__);

(statearr_74970[(1)] = (1));

return statearr_74970;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_74944){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_74944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e74971){if((e74971 instanceof Object)){
var ex__18813__auto__ = e74971;
var statearr_74972_74993 = state_74944;
(statearr_74972_74993[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74994 = state_74944;
state_74944 = G__74994;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = function(state_74944){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_74944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_74973 = f__18831__auto__.call(null);
(statearr_74973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_74973;
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
var objects = (function (){var G__75002 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__75002) {
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
var force_obj = (function (){var G__75003 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__75003) {
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
var force = (function (){var G__75004 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__75004) {
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
var seq__75005 = cljs.core.seq.call(null,objects);
var chunk__75006 = null;
var count__75007 = (0);
var i__75008 = (0);
while(true){
if((i__75008 < count__75007)){
var o = cljs.core._nth.call(null,chunk__75006,i__75008);
climbr.matter.matter.apply_force.call(null,o,force);

var G__75012 = seq__75005;
var G__75013 = chunk__75006;
var G__75014 = count__75007;
var G__75015 = (i__75008 + (1));
seq__75005 = G__75012;
chunk__75006 = G__75013;
count__75007 = G__75014;
i__75008 = G__75015;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__75005);
if(temp__4425__auto__){
var seq__75005__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75005__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__75005__$1);
var G__75016 = cljs.core.chunk_rest.call(null,seq__75005__$1);
var G__75017 = c__17608__auto__;
var G__75018 = cljs.core.count.call(null,c__17608__auto__);
var G__75019 = (0);
seq__75005 = G__75016;
chunk__75006 = G__75017;
count__75007 = G__75018;
i__75008 = G__75019;
continue;
} else {
var o = cljs.core.first.call(null,seq__75005__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__75020 = cljs.core.next.call(null,seq__75005__$1);
var G__75021 = null;
var G__75022 = (0);
var G__75023 = (0);
seq__75005 = G__75020;
chunk__75006 = G__75021;
count__75007 = G__75022;
i__75008 = G__75023;
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
return (function (state_75081){
var state_val_75082 = (state_75081[(1)]);
if((state_val_75082 === (7))){
var inst_75067 = (state_75081[(7)]);
var inst_75066 = (state_75081[(2)]);
var inst_75067__$1 = cljs.core.get.call(null,key_actions,inst_75066);
var inst_75068 = (inst_75067__$1 == null);
var state_75081__$1 = (function (){var statearr_75083 = state_75081;
(statearr_75083[(7)] = inst_75067__$1);

return statearr_75083;
})();
if(cljs.core.truth_(inst_75068)){
var statearr_75084_75102 = state_75081__$1;
(statearr_75084_75102[(1)] = (8));

} else {
var statearr_75085_75103 = state_75081__$1;
(statearr_75085_75103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (1))){
var state_75081__$1 = state_75081;
var statearr_75086_75104 = state_75081__$1;
(statearr_75086_75104[(2)] = null);

(statearr_75086_75104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (4))){
var state_75081__$1 = state_75081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75081__$1,(7),keypressed);
} else {
if((state_val_75082 === (6))){
var inst_75077 = (state_75081[(2)]);
var state_75081__$1 = state_75081;
var statearr_75087_75105 = state_75081__$1;
(statearr_75087_75105[(2)] = inst_75077);

(statearr_75087_75105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (3))){
var inst_75079 = (state_75081[(2)]);
var state_75081__$1 = state_75081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75081__$1,inst_75079);
} else {
if((state_val_75082 === (2))){
var state_75081__$1 = state_75081;
var statearr_75088_75106 = state_75081__$1;
(statearr_75088_75106[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (9))){
var inst_75067 = (state_75081[(7)]);
var inst_75071 = inst_75067.call(null);
var state_75081__$1 = state_75081;
var statearr_75090_75107 = state_75081__$1;
(statearr_75090_75107[(2)] = inst_75071);

(statearr_75090_75107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (5))){
var state_75081__$1 = state_75081;
var statearr_75091_75108 = state_75081__$1;
(statearr_75091_75108[(2)] = null);

(statearr_75091_75108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (10))){
var inst_75073 = (state_75081[(2)]);
var state_75081__$1 = (function (){var statearr_75092 = state_75081;
(statearr_75092[(8)] = inst_75073);

return statearr_75092;
})();
var statearr_75093_75109 = state_75081__$1;
(statearr_75093_75109[(2)] = null);

(statearr_75093_75109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75082 === (8))){
var state_75081__$1 = state_75081;
var statearr_75094_75110 = state_75081__$1;
(statearr_75094_75110[(2)] = null);

(statearr_75094_75110[(1)] = (10));


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
var statearr_75098 = [null,null,null,null,null,null,null,null,null];
(statearr_75098[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_75098[(1)] = (1));

return statearr_75098;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_75081){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_75081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e75099){if((e75099 instanceof Object)){
var ex__18813__auto__ = e75099;
var statearr_75100_75111 = state_75081;
(statearr_75100_75111[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75112 = state_75081;
state_75081 = G__75112;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_75081){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_75081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_75101 = f__18831__auto__.call(null);
(statearr_75101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_75101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__75114 = hand_name;
switch (G__75114) {
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
var key_boulder = (function (){var G__75117 = hand_name;
switch (G__75117) {
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
var key_holds = (function (){var G__75120 = hand_name;
switch (G__75120) {
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
var G__75123 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__75123) {
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

//# sourceMappingURL=user_actions.js.map?rel=1476043684345