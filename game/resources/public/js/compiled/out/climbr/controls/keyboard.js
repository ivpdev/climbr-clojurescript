// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__33264 = e.keyCode;
switch (G__33264) {
case (37):
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case (38):
return new cljs.core.Keyword(null,"up","up",-269712113);

break;
case (39):
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case (40):
return new cljs.core.Keyword(null,"down","down",1565245570);

break;
case (68):
return new cljs.core.Keyword(null,"grab-right","grab-right",-1036761739);

break;
case (65):
return new cljs.core.Keyword(null,"grab-left","grab-left",-542953750);

break;
case (87):
return new cljs.core.Keyword(null,"release-both","release-both",-777210574);

break;
case (83):
return new cljs.core.Keyword(null,"grab-both","grab-both",1087228512);

break;
case (69):
return new cljs.core.Keyword(null,"release-right","release-right",-102010432);

break;
case (81):
return new cljs.core.Keyword(null,"release-left","release-left",-965415076);

break;
default:
return null;

}
});
climbr.controls.keyboard.keypressed = (function (){var keypressed = cljs.core.async.chan.call(null);
climbr.controls.keyboard.listen_BANG_.call(null,document,"keydown",((function (keypressed){
return (function (e){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed){
return (function (state_33270){
var state_val_33271 = (state_33270[(1)]);
if((state_val_33271 === (1))){
var inst_33266 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33270__$1,(2),keypressed,inst_33266);
} else {
if((state_val_33271 === (2))){
var inst_33268 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33270__$1,inst_33268);
} else {
return null;
}
}
});})(c__18830__auto__,keypressed))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed){
return (function() {
var climbr$controls$keyboard$state_machine__18810__auto__ = null;
var climbr$controls$keyboard$state_machine__18810__auto____0 = (function (){
var statearr_33275 = [null,null,null,null,null,null,null];
(statearr_33275[(0)] = climbr$controls$keyboard$state_machine__18810__auto__);

(statearr_33275[(1)] = (1));

return statearr_33275;
});
var climbr$controls$keyboard$state_machine__18810__auto____1 = (function (state_33270){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33276){if((e33276 instanceof Object)){
var ex__18813__auto__ = e33276;
var statearr_33277_33279 = state_33270;
(statearr_33277_33279[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_33270;
state_33270 = G__33280;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__18810__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__18810__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__18810__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__18810__auto____0;
climbr$controls$keyboard$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__18810__auto____1;
return climbr$controls$keyboard$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_33278 = f__18831__auto__.call(null);
(statearr_33278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_33278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1477646665031