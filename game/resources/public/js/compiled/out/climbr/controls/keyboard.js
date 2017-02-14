// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__23967 = e.keyCode;
switch (G__23967) {
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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__,keypressed){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__,keypressed){
return (function (state_23973){
var state_val_23974 = (state_23973[(1)]);
if((state_val_23974 === (1))){
var inst_23969 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23973__$1,(2),keypressed,inst_23969);
} else {
if((state_val_23974 === (2))){
var inst_23971 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23973__$1,inst_23971);
} else {
return null;
}
}
});})(c__21118__auto__,keypressed))
;
return ((function (switch__21103__auto__,c__21118__auto__,keypressed){
return (function() {
var climbr$controls$keyboard$state_machine__21104__auto__ = null;
var climbr$controls$keyboard$state_machine__21104__auto____0 = (function (){
var statearr_23978 = [null,null,null,null,null,null,null];
(statearr_23978[(0)] = climbr$controls$keyboard$state_machine__21104__auto__);

(statearr_23978[(1)] = (1));

return statearr_23978;
});
var climbr$controls$keyboard$state_machine__21104__auto____1 = (function (state_23973){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23979){if((e23979 instanceof Object)){
var ex__21107__auto__ = e23979;
var statearr_23980_23982 = state_23973;
(statearr_23980_23982[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23983 = state_23973;
state_23973 = G__23983;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__21104__auto__ = function(state_23973){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__21104__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__21104__auto____1.call(this,state_23973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__21104__auto____0;
climbr$controls$keyboard$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__21104__auto____1;
return climbr$controls$keyboard$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__,keypressed))
})();
var state__21120__auto__ = (function (){var statearr_23981 = f__21119__auto__.call(null);
(statearr_23981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_23981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__,keypressed))
);

return c__21118__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1485901321968