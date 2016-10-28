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
var hand_key = (function (){var G__38735 = hand_name;
switch (G__38735) {
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
return (function (state_38761){
var state_val_38762 = (state_38761[(1)]);
if((state_val_38762 === (7))){
var inst_38739 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
var G__38763_38792 = (((inst_38739 instanceof cljs.core.Keyword))?inst_38739.fqn:null);
switch (G__38763_38792) {
case "grab-left":
var statearr_38764_38794 = state_38761__$1;
(statearr_38764_38794[(1)] = (9));


break;
case "grab-right":
var statearr_38765_38795 = state_38761__$1;
(statearr_38765_38795[(1)] = (10));


break;
case "grab-both":
var statearr_38766_38796 = state_38761__$1;
(statearr_38766_38796[(1)] = (11));


break;
default:
var statearr_38767_38797 = state_38761__$1;
(statearr_38767_38797[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (1))){
var state_38761__$1 = state_38761;
var statearr_38768_38798 = state_38761__$1;
(statearr_38768_38798[(2)] = null);

(statearr_38768_38798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (4))){
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38761__$1,(7),keypressed);
} else {
if((state_val_38762 === (15))){
var inst_38751 = (state_38761[(2)]);
var inst_38752 = cljs.core.map.call(null,grab_hand_BANG_,inst_38751);
var inst_38753 = cljs.core.doall.call(null,inst_38752);
var state_38761__$1 = (function (){var statearr_38769 = state_38761;
(statearr_38769[(7)] = inst_38753);

return statearr_38769;
})();
var statearr_38770_38799 = state_38761__$1;
(statearr_38770_38799[(2)] = null);

(statearr_38770_38799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (13))){
var state_38761__$1 = state_38761;
var statearr_38771_38800 = state_38761__$1;
(statearr_38771_38800[(2)] = null);

(statearr_38771_38800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (6))){
var inst_38757 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
var statearr_38772_38801 = state_38761__$1;
(statearr_38772_38801[(2)] = inst_38757);

(statearr_38772_38801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (3))){
var inst_38759 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38761__$1,inst_38759);
} else {
if((state_val_38762 === (12))){
var state_38761__$1 = state_38761;
var statearr_38773_38802 = state_38761__$1;
(statearr_38773_38802[(2)] = null);

(statearr_38773_38802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (2))){
var state_38761__$1 = state_38761;
var statearr_38774_38803 = state_38761__$1;
(statearr_38774_38803[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (11))){
var state_38761__$1 = state_38761;
var statearr_38776_38804 = state_38761__$1;
(statearr_38776_38804[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_38776_38804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (9))){
var state_38761__$1 = state_38761;
var statearr_38777_38805 = state_38761__$1;
(statearr_38777_38805[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_38777_38805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (5))){
var state_38761__$1 = state_38761;
var statearr_38778_38806 = state_38761__$1;
(statearr_38778_38806[(2)] = null);

(statearr_38778_38806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (14))){
var inst_38745 = (state_38761[(8)]);
var inst_38749 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_38745);
var state_38761__$1 = state_38761;
var statearr_38779_38807 = state_38761__$1;
(statearr_38779_38807[(2)] = inst_38749);

(statearr_38779_38807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (10))){
var state_38761__$1 = state_38761;
var statearr_38780_38808 = state_38761__$1;
(statearr_38780_38808[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_38780_38808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (8))){
var inst_38745 = (state_38761[(8)]);
var inst_38745__$1 = (state_38761[(2)]);
var inst_38746 = (inst_38745__$1 == null);
var state_38761__$1 = (function (){var statearr_38781 = state_38761;
(statearr_38781[(8)] = inst_38745__$1);

return statearr_38781;
})();
if(cljs.core.truth_(inst_38746)){
var statearr_38782_38809 = state_38761__$1;
(statearr_38782_38809[(1)] = (13));

} else {
var statearr_38783_38810 = state_38761__$1;
(statearr_38783_38810[(1)] = (14));

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
var statearr_38787 = [null,null,null,null,null,null,null,null,null];
(statearr_38787[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__);

(statearr_38787[(1)] = (1));

return statearr_38787;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1 = (function (state_38761){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_38761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e38788){if((e38788 instanceof Object)){
var ex__18813__auto__ = e38788;
var statearr_38789_38811 = state_38761;
(statearr_38789_38811[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38812 = state_38761;
state_38761 = G__38812;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__ = function(state_38761){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1.call(this,state_38761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,grab_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_38790 = f__18831__auto__.call(null);
(statearr_38790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_38790;
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
return (function (state_38891){
var state_val_38892 = (state_38891[(1)]);
if((state_val_38892 === (7))){
var inst_38870 = (state_38891[(2)]);
var state_38891__$1 = state_38891;
var G__38893_38921 = (((inst_38870 instanceof cljs.core.Keyword))?inst_38870.fqn:null);
switch (G__38893_38921) {
case "release-left":
var statearr_38894_38923 = state_38891__$1;
(statearr_38894_38923[(1)] = (9));


break;
case "release-right":
var statearr_38895_38924 = state_38891__$1;
(statearr_38895_38924[(1)] = (10));


break;
case "release-both":
var statearr_38896_38925 = state_38891__$1;
(statearr_38896_38925[(1)] = (11));


break;
default:
var statearr_38897_38926 = state_38891__$1;
(statearr_38897_38926[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (1))){
var state_38891__$1 = state_38891;
var statearr_38898_38927 = state_38891__$1;
(statearr_38898_38927[(2)] = null);

(statearr_38898_38927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (4))){
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38891__$1,(7),keypressed);
} else {
if((state_val_38892 === (15))){
var inst_38883 = (state_38891[(2)]);
var state_38891__$1 = (function (){var statearr_38899 = state_38891;
(statearr_38899[(7)] = inst_38883);

return statearr_38899;
})();
var statearr_38900_38928 = state_38891__$1;
(statearr_38900_38928[(2)] = null);

(statearr_38900_38928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (13))){
var inst_38876 = (state_38891[(8)]);
var inst_38878 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_38876);
var inst_38879 = cljs.core.map.call(null,release_hand_BANG_,inst_38878);
var inst_38880 = cljs.core.doall.call(null,inst_38879);
var state_38891__$1 = state_38891;
var statearr_38901_38929 = state_38891__$1;
(statearr_38901_38929[(2)] = inst_38880);

(statearr_38901_38929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (6))){
var inst_38887 = (state_38891[(2)]);
var state_38891__$1 = state_38891;
var statearr_38902_38930 = state_38891__$1;
(statearr_38902_38930[(2)] = inst_38887);

(statearr_38902_38930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (3))){
var inst_38889 = (state_38891[(2)]);
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38891__$1,inst_38889);
} else {
if((state_val_38892 === (12))){
var state_38891__$1 = state_38891;
var statearr_38903_38931 = state_38891__$1;
(statearr_38903_38931[(2)] = null);

(statearr_38903_38931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (2))){
var state_38891__$1 = state_38891;
var statearr_38904_38932 = state_38891__$1;
(statearr_38904_38932[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (11))){
var state_38891__$1 = state_38891;
var statearr_38906_38933 = state_38891__$1;
(statearr_38906_38933[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_38906_38933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (9))){
var state_38891__$1 = state_38891;
var statearr_38907_38934 = state_38891__$1;
(statearr_38907_38934[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_38907_38934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (5))){
var state_38891__$1 = state_38891;
var statearr_38908_38935 = state_38891__$1;
(statearr_38908_38935[(2)] = null);

(statearr_38908_38935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (14))){
var state_38891__$1 = state_38891;
var statearr_38909_38936 = state_38891__$1;
(statearr_38909_38936[(2)] = null);

(statearr_38909_38936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (10))){
var state_38891__$1 = state_38891;
var statearr_38910_38937 = state_38891__$1;
(statearr_38910_38937[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_38910_38937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (8))){
var inst_38876 = (state_38891[(8)]);
var inst_38876__$1 = (state_38891[(2)]);
var state_38891__$1 = (function (){var statearr_38911 = state_38891;
(statearr_38911[(8)] = inst_38876__$1);

return statearr_38911;
})();
if(cljs.core.truth_(inst_38876__$1)){
var statearr_38912_38938 = state_38891__$1;
(statearr_38912_38938[(1)] = (13));

} else {
var statearr_38913_38939 = state_38891__$1;
(statearr_38913_38939[(1)] = (14));

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
var statearr_38917 = [null,null,null,null,null,null,null,null,null];
(statearr_38917[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__);

(statearr_38917[(1)] = (1));

return statearr_38917;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_38891){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_38891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e38918){if((e38918 instanceof Object)){
var ex__18813__auto__ = e38918;
var statearr_38919_38940 = state_38891;
(statearr_38919_38940[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38941 = state_38891;
state_38891 = G__38941;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__ = function(state_38891){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_38891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_38920 = f__18831__auto__.call(null);
(statearr_38920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_38920;
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
var bodies = (function (){var G__38948 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__38948) {
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
var force_obj = (function (){var G__38949 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__38949) {
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
var seq__38950 = cljs.core.seq.call(null,bodies);
var chunk__38951 = null;
var count__38952 = (0);
var i__38953 = (0);
while(true){
if((i__38953 < count__38952)){
var b = cljs.core._nth.call(null,chunk__38951,i__38953);
climbr.matter.matter.apply_force.call(null,b,force);

var G__38956 = seq__38950;
var G__38957 = chunk__38951;
var G__38958 = count__38952;
var G__38959 = (i__38953 + (1));
seq__38950 = G__38956;
chunk__38951 = G__38957;
count__38952 = G__38958;
i__38953 = G__38959;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38950);
if(temp__4425__auto__){
var seq__38950__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38950__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__38950__$1);
var G__38960 = cljs.core.chunk_rest.call(null,seq__38950__$1);
var G__38961 = c__17608__auto__;
var G__38962 = cljs.core.count.call(null,c__17608__auto__);
var G__38963 = (0);
seq__38950 = G__38960;
chunk__38951 = G__38961;
count__38952 = G__38962;
i__38953 = G__38963;
continue;
} else {
var b = cljs.core.first.call(null,seq__38950__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__38964 = cljs.core.next.call(null,seq__38950__$1);
var G__38965 = null;
var G__38966 = (0);
var G__38967 = (0);
seq__38950 = G__38964;
chunk__38951 = G__38965;
count__38952 = G__38966;
i__38953 = G__38967;
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
return (function (state_39025){
var state_val_39026 = (state_39025[(1)]);
if((state_val_39026 === (7))){
var inst_39011 = (state_39025[(7)]);
var inst_39010 = (state_39025[(2)]);
var inst_39011__$1 = cljs.core.get.call(null,key_actions,inst_39010);
var inst_39012 = (inst_39011__$1 == null);
var state_39025__$1 = (function (){var statearr_39027 = state_39025;
(statearr_39027[(7)] = inst_39011__$1);

return statearr_39027;
})();
if(cljs.core.truth_(inst_39012)){
var statearr_39028_39046 = state_39025__$1;
(statearr_39028_39046[(1)] = (8));

} else {
var statearr_39029_39047 = state_39025__$1;
(statearr_39029_39047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (1))){
var state_39025__$1 = state_39025;
var statearr_39030_39048 = state_39025__$1;
(statearr_39030_39048[(2)] = null);

(statearr_39030_39048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (4))){
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39025__$1,(7),keypressed_chan);
} else {
if((state_val_39026 === (6))){
var inst_39021 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39031_39049 = state_39025__$1;
(statearr_39031_39049[(2)] = inst_39021);

(statearr_39031_39049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (3))){
var inst_39023 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39025__$1,inst_39023);
} else {
if((state_val_39026 === (2))){
var state_39025__$1 = state_39025;
var statearr_39032_39050 = state_39025__$1;
(statearr_39032_39050[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (9))){
var inst_39011 = (state_39025[(7)]);
var inst_39015 = inst_39011.call(null);
var state_39025__$1 = state_39025;
var statearr_39034_39051 = state_39025__$1;
(statearr_39034_39051[(2)] = inst_39015);

(statearr_39034_39051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (5))){
var state_39025__$1 = state_39025;
var statearr_39035_39052 = state_39025__$1;
(statearr_39035_39052[(2)] = null);

(statearr_39035_39052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (10))){
var inst_39017 = (state_39025[(2)]);
var state_39025__$1 = (function (){var statearr_39036 = state_39025;
(statearr_39036[(8)] = inst_39017);

return statearr_39036;
})();
var statearr_39037_39053 = state_39025__$1;
(statearr_39037_39053[(2)] = null);

(statearr_39037_39053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (8))){
var state_39025__$1 = state_39025;
var statearr_39038_39054 = state_39025__$1;
(statearr_39038_39054[(2)] = null);

(statearr_39038_39054[(1)] = (10));


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
var statearr_39042 = [null,null,null,null,null,null,null,null,null];
(statearr_39042[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__);

(statearr_39042[(1)] = (1));

return statearr_39042;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1 = (function (state_39025){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_39025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e39043){if((e39043 instanceof Object)){
var ex__18813__auto__ = e39043;
var statearr_39044_39055 = state_39025;
(statearr_39044_39055[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39056 = state_39025;
state_39025 = G__39056;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__ = function(state_39025){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1.call(this,state_39025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed_chan))
})();
var state__18832__auto__ = (function (){var statearr_39045 = f__18831__auto__.call(null);
(statearr_39045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_39045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed_chan))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__39058 = hand_name;
switch (G__39058) {
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
var key_boulder = (function (){var G__39061 = hand_name;
switch (G__39061) {
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
var key_holds = (function (){var G__39064 = hand_name;
switch (G__39064) {
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
var G__39067 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__39067) {
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

//# sourceMappingURL=user_actions.js.map?rel=1477647000276