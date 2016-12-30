// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__34636 = e.keyCode;
switch (G__34636) {
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
return new cljs.core.Keyword(null,"hook-right","hook-right",1519416887);

break;
case (65):
return new cljs.core.Keyword(null,"hook-left","hook-left",1880579235);

break;
case (87):
return new cljs.core.Keyword(null,"release-both","release-both",-777210574);

break;
case (83):
return new cljs.core.Keyword(null,"hook-both","hook-both",1015605689);

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
var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed){
return (function (state_34642){
var state_val_34643 = (state_34642[(1)]);
if((state_val_34643 === (1))){
var inst_34638 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_34642__$1 = state_34642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34642__$1,(2),keypressed,inst_34638);
} else {
if((state_val_34643 === (2))){
var inst_34640 = (state_34642[(2)]);
var state_34642__$1 = state_34642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34642__$1,inst_34640);
} else {
return null;
}
}
});})(c__20805__auto__,keypressed))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed){
return (function() {
var climbr$controls$keyboard$state_machine__20785__auto__ = null;
var climbr$controls$keyboard$state_machine__20785__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null];
(statearr_34647[(0)] = climbr$controls$keyboard$state_machine__20785__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var climbr$controls$keyboard$state_machine__20785__auto____1 = (function (state_34642){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_34642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e34648){if((e34648 instanceof Object)){
var ex__20788__auto__ = e34648;
var statearr_34649_34651 = state_34642;
(statearr_34649_34651[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34652 = state_34642;
state_34642 = G__34652;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__20785__auto__ = function(state_34642){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__20785__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__20785__auto____1.call(this,state_34642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__20785__auto____0;
climbr$controls$keyboard$state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__20785__auto____1;
return climbr$controls$keyboard$state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed))
})();
var state__20807__auto__ = (function (){var statearr_34650 = f__20806__auto__.call(null);
(statearr_34650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed))
);

return c__20805__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1482999980328