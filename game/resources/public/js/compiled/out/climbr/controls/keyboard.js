// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.controls.keyboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
climbr.controls.keyboard.listen_BANG_ = (function climbr$controls$keyboard$listen_BANG_(el,e,fn){
return el.addEventListener(e,fn);
});
climbr.controls.keyboard.event_to_direction = (function climbr$controls$keyboard$event_to_direction(e){
var G__22174 = e.keyCode;
switch (G__22174) {
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
return new cljs.core.Keyword(null,"d","d",1972142424);

break;
case (65):
return new cljs.core.Keyword(null,"a","a",-2123407586);

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
return (function (state_22180){
var state_val_22181 = (state_22180[(1)]);
if((state_val_22181 === (1))){
var inst_22176 = climbr.controls.keyboard.event_to_direction.call(null,e);
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22180__$1,(2),keypressed,inst_22176);
} else {
if((state_val_22181 === (2))){
var inst_22178 = (state_22180[(2)]);
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22180__$1,inst_22178);
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
var statearr_22185 = [null,null,null,null,null,null,null];
(statearr_22185[(0)] = climbr$controls$keyboard$state_machine__18810__auto__);

(statearr_22185[(1)] = (1));

return statearr_22185;
});
var climbr$controls$keyboard$state_machine__18810__auto____1 = (function (state_22180){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_22180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e22186){if((e22186 instanceof Object)){
var ex__18813__auto__ = e22186;
var statearr_22187_22189 = state_22180;
(statearr_22187_22189[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22190 = state_22180;
state_22180 = G__22190;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$controls$keyboard$state_machine__18810__auto__ = function(state_22180){
switch(arguments.length){
case 0:
return climbr$controls$keyboard$state_machine__18810__auto____0.call(this);
case 1:
return climbr$controls$keyboard$state_machine__18810__auto____1.call(this,state_22180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$controls$keyboard$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$controls$keyboard$state_machine__18810__auto____0;
climbr$controls$keyboard$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$controls$keyboard$state_machine__18810__auto____1;
return climbr$controls$keyboard$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_22188 = f__18831__auto__.call(null);
(statearr_22188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_22188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});})(keypressed))
);

return cljs.core.async.mult.call(null,keypressed);
})();

//# sourceMappingURL=keyboard.js.map?rel=1462827023516