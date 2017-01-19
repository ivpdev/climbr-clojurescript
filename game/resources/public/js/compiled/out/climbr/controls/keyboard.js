// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__24243 = e.keyCode;
switch (G__24243) {
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
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,keypressed){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,keypressed){
return (function (state_24249){
var state_val_24250 = (state_24249[(1)]);
if((state_val_24250 === (1))){
var inst_24245 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_24249__$1 = state_24249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24249__$1,(2),keypressed,inst_24245);
} else {
if((state_val_24250 === (2))){
var inst_24247 = (state_24249[(2)]);
var state_24249__$1 = state_24249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24249__$1,inst_24247);
} else {
return null;
}
}
});})(c__21296__auto__,keypressed))
;
return ((function (switch__21281__auto__,c__21296__auto__,keypressed){
return (function() {
var climbr$controls$keyboard$state_machine__21282__auto__ = null;
var climbr$controls$keyboard$state_machine__21282__auto____0 = (function (){
var statearr_24254 = [null,null,null,null,null,null,null];
(statearr_24254[(0)] = climbr$controls$keyboard$state_machine__21282__auto__);

(statearr_24254[(1)] = (1));

return statearr_24254;
});
var climbr$controls$keyboard$state_machine__21282__auto____1 = (function (state_24249){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_24249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e24255){if((e24255 instanceof Object)){
var ex__21285__auto__ = e24255;
var statearr_24256_24258 = state_24249;
(statearr_24256_24258[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24259 = state_24249;
state_24249 = G__24259;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__21282__auto__ = function(state_24249){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__21282__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__21282__auto____1.call(this,state_24249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__21282__auto____0;
climbr$controls$keyboard$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__21282__auto____1;
return climbr$controls$keyboard$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed))
})();
var state__21298__auto__ = (function (){var statearr_24257 = f__21297__auto__.call(null);
(statearr_24257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_24257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,keypressed))
);

return c__21296__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1484862756942