// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__12065 = e.keyCode;
switch (G__12065) {
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
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,keypressed){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,keypressed){
return (function (state_12071){
var state_val_12072 = (state_12071[(1)]);
if((state_val_12072 === (1))){
var inst_12067 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12071__$1,(2),keypressed,inst_12067);
} else {
if((state_val_12072 === (2))){
var inst_12069 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12071__$1,inst_12069);
} else {
return null;
}
}
});})(c__9118__auto__,keypressed))
;
return ((function (switch__9103__auto__,c__9118__auto__,keypressed){
return (function() {
var climbr$controls$keyboard$state_machine__9104__auto__ = null;
var climbr$controls$keyboard$state_machine__9104__auto____0 = (function (){
var statearr_12076 = [null,null,null,null,null,null,null];
(statearr_12076[(0)] = climbr$controls$keyboard$state_machine__9104__auto__);

(statearr_12076[(1)] = (1));

return statearr_12076;
});
var climbr$controls$keyboard$state_machine__9104__auto____1 = (function (state_12071){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_12071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e12077){if((e12077 instanceof Object)){
var ex__9107__auto__ = e12077;
var statearr_12078_12080 = state_12071;
(statearr_12078_12080[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12081 = state_12071;
state_12071 = G__12081;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__9104__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__9104__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__9104__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__9104__auto____0;
climbr$controls$keyboard$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__9104__auto____1;
return climbr$controls$keyboard$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,keypressed))
})();
var state__9120__auto__ = (function (){var statearr_12079 = f__9119__auto__.call(null);
(statearr_12079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_12079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,keypressed))
);

return c__9118__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1478625872819