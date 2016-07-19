// Compiled by ClojureScript 1.7.170 {}
goog.provide('jamesmacaulay.async_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
jamesmacaulay.async_tools.core.concat = (function jamesmacaulay$async_tools$core$concat(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19011 = arguments.length;
var i__17864__auto___19012 = (0);
while(true){
if((i__17864__auto___19012 < len__17863__auto___19011)){
args__17870__auto__.push((arguments[i__17864__auto___19012]));

var G__19013 = (i__17864__auto___19012 + (1));
i__17864__auto___19012 = G__19013;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic = (function (chs){
var out = cljs.core.async.chan.call(null);
var c__18916__auto___19014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18916__auto___19014,out){
return (function (){
var f__18917__auto__ = (function (){var switch__18895__auto__ = ((function (c__18916__auto___19014,out){
return (function (state_18986){
var state_val_18987 = (state_18986[(1)]);
if((state_val_18987 === (7))){
var inst_18970 = (state_18986[(7)]);
var inst_18970__$1 = (state_18986[(2)]);
var inst_18971 = (inst_18970__$1 == null);
var state_18986__$1 = (function (){var statearr_18988 = state_18986;
(statearr_18988[(7)] = inst_18970__$1);

return statearr_18988;
})();
if(cljs.core.truth_(inst_18971)){
var statearr_18989_19015 = state_18986__$1;
(statearr_18989_19015[(1)] = (8));

} else {
var statearr_18990_19016 = state_18986__$1;
(statearr_18990_19016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (1))){
var inst_18962 = chs;
var state_18986__$1 = (function (){var statearr_18991 = state_18986;
(statearr_18991[(8)] = inst_18962);

return statearr_18991;
})();
var statearr_18992_19017 = state_18986__$1;
(statearr_18992_19017[(2)] = null);

(statearr_18992_19017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (4))){
var inst_18967 = cljs.core.async.close_BANG_.call(null,out);
var state_18986__$1 = state_18986;
var statearr_18993_19018 = state_18986__$1;
(statearr_18993_19018[(2)] = inst_18967);

(statearr_18993_19018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (6))){
var inst_18982 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_18994_19019 = state_18986__$1;
(statearr_18994_19019[(2)] = inst_18982);

(statearr_18994_19019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (3))){
var inst_18984 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18986__$1,inst_18984);
} else {
if((state_val_18987 === (2))){
var inst_18964 = (state_18986[(9)]);
var inst_18962 = (state_18986[(8)]);
var inst_18964__$1 = cljs.core.first.call(null,inst_18962);
var inst_18965 = (inst_18964__$1 == null);
var state_18986__$1 = (function (){var statearr_18996 = state_18986;
(statearr_18996[(9)] = inst_18964__$1);

return statearr_18996;
})();
if(cljs.core.truth_(inst_18965)){
var statearr_18997_19020 = state_18986__$1;
(statearr_18997_19020[(1)] = (4));

} else {
var statearr_18998_19021 = state_18986__$1;
(statearr_18998_19021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (11))){
var inst_18962 = (state_18986[(8)]);
var inst_18977 = (state_18986[(2)]);
var tmp18995 = inst_18962;
var inst_18962__$1 = tmp18995;
var state_18986__$1 = (function (){var statearr_18999 = state_18986;
(statearr_18999[(10)] = inst_18977);

(statearr_18999[(8)] = inst_18962__$1);

return statearr_18999;
})();
var statearr_19000_19022 = state_18986__$1;
(statearr_19000_19022[(2)] = null);

(statearr_19000_19022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (9))){
var inst_18970 = (state_18986[(7)]);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18986__$1,(11),out,inst_18970);
} else {
if((state_val_18987 === (5))){
var inst_18964 = (state_18986[(9)]);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18986__$1,(7),inst_18964);
} else {
if((state_val_18987 === (10))){
var inst_18980 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_19001_19023 = state_18986__$1;
(statearr_19001_19023[(2)] = inst_18980);

(statearr_19001_19023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (8))){
var inst_18962 = (state_18986[(8)]);
var inst_18973 = cljs.core.next.call(null,inst_18962);
var inst_18962__$1 = inst_18973;
var state_18986__$1 = (function (){var statearr_19002 = state_18986;
(statearr_19002[(8)] = inst_18962__$1);

return statearr_19002;
})();
var statearr_19003_19024 = state_18986__$1;
(statearr_19003_19024[(2)] = null);

(statearr_19003_19024[(1)] = (2));


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
});})(c__18916__auto___19014,out))
;
return ((function (switch__18895__auto__,c__18916__auto___19014,out){
return (function() {
var jamesmacaulay$async_tools$core$state_machine__18896__auto__ = null;
var jamesmacaulay$async_tools$core$state_machine__18896__auto____0 = (function (){
var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19007[(0)] = jamesmacaulay$async_tools$core$state_machine__18896__auto__);

(statearr_19007[(1)] = (1));

return statearr_19007;
});
var jamesmacaulay$async_tools$core$state_machine__18896__auto____1 = (function (state_18986){
while(true){
var ret_value__18897__auto__ = (function (){try{while(true){
var result__18898__auto__ = switch__18895__auto__.call(null,state_18986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18898__auto__;
}
break;
}
}catch (e19008){if((e19008 instanceof Object)){
var ex__18899__auto__ = e19008;
var statearr_19009_19025 = state_18986;
(statearr_19009_19025[(5)] = ex__18899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19026 = state_18986;
state_18986 = G__19026;
continue;
} else {
return ret_value__18897__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$state_machine__18896__auto__ = function(state_18986){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$state_machine__18896__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$state_machine__18896__auto____1.call(this,state_18986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$state_machine__18896__auto____0;
jamesmacaulay$async_tools$core$state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$state_machine__18896__auto____1;
return jamesmacaulay$async_tools$core$state_machine__18896__auto__;
})()
;})(switch__18895__auto__,c__18916__auto___19014,out))
})();
var state__18918__auto__ = (function (){var statearr_19010 = f__18917__auto__.call(null);
(statearr_19010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18916__auto___19014);

return statearr_19010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18918__auto__);
});})(c__18916__auto___19014,out))
);


return out;
});

jamesmacaulay.async_tools.core.concat.cljs$lang$maxFixedArity = (0);

jamesmacaulay.async_tools.core.concat.cljs$lang$applyTo = (function (seq18961){
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18961));
});
jamesmacaulay.async_tools.core.do_effects = (function jamesmacaulay$async_tools$core$do_effects(f_BANG_,ch){
var c__18916__auto___19087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18916__auto___19087){
return (function (){
var f__18917__auto__ = (function (){var switch__18895__auto__ = ((function (c__18916__auto___19087){
return (function (state_19070){
var state_val_19071 = (state_19070[(1)]);
if((state_val_19071 === (1))){
var state_19070__$1 = state_19070;
var statearr_19072_19088 = state_19070__$1;
(statearr_19072_19088[(2)] = null);

(statearr_19072_19088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (2))){
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19070__$1,(4),ch);
} else {
if((state_val_19071 === (3))){
var inst_19068 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19070__$1,inst_19068);
} else {
if((state_val_19071 === (4))){
var inst_19059 = (state_19070[(7)]);
var inst_19059__$1 = (state_19070[(2)]);
var inst_19060 = (inst_19059__$1 == null);
var state_19070__$1 = (function (){var statearr_19073 = state_19070;
(statearr_19073[(7)] = inst_19059__$1);

return statearr_19073;
})();
if(cljs.core.truth_(inst_19060)){
var statearr_19074_19089 = state_19070__$1;
(statearr_19074_19089[(1)] = (5));

} else {
var statearr_19075_19090 = state_19070__$1;
(statearr_19075_19090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (5))){
var state_19070__$1 = state_19070;
var statearr_19076_19091 = state_19070__$1;
(statearr_19076_19091[(2)] = null);

(statearr_19076_19091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (6))){
var inst_19059 = (state_19070[(7)]);
var inst_19063 = f_BANG_.call(null,inst_19059);
var state_19070__$1 = (function (){var statearr_19077 = state_19070;
(statearr_19077[(8)] = inst_19063);

return statearr_19077;
})();
var statearr_19078_19092 = state_19070__$1;
(statearr_19078_19092[(2)] = null);

(statearr_19078_19092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (7))){
var inst_19066 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
var statearr_19079_19093 = state_19070__$1;
(statearr_19079_19093[(2)] = inst_19066);

(statearr_19079_19093[(1)] = (3));


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
});})(c__18916__auto___19087))
;
return ((function (switch__18895__auto__,c__18916__auto___19087){
return (function() {
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__ = null;
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____0 = (function (){
var statearr_19083 = [null,null,null,null,null,null,null,null,null];
(statearr_19083[(0)] = jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__);

(statearr_19083[(1)] = (1));

return statearr_19083;
});
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____1 = (function (state_19070){
while(true){
var ret_value__18897__auto__ = (function (){try{while(true){
var result__18898__auto__ = switch__18895__auto__.call(null,state_19070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18898__auto__;
}
break;
}
}catch (e19084){if((e19084 instanceof Object)){
var ex__18899__auto__ = e19084;
var statearr_19085_19094 = state_19070;
(statearr_19085_19094[(5)] = ex__18899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19095 = state_19070;
state_19070 = G__19095;
continue;
} else {
return ret_value__18897__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__ = function(state_19070){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____1.call(this,state_19070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____0;
jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto____1;
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__18896__auto__;
})()
;})(switch__18895__auto__,c__18916__auto___19087))
})();
var state__18918__auto__ = (function (){var statearr_19086 = f__18917__auto__.call(null);
(statearr_19086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18916__auto___19087);

return statearr_19086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18918__auto__);
});})(c__18916__auto___19087))
);


return ch;
});
jamesmacaulay.async_tools.core.log_mult = (function jamesmacaulay$async_tools$core$log_mult(mult){
return jamesmacaulay.async_tools.core.do_effects.call(null,cljs.core.println,cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null)));
});
jamesmacaulay.async_tools.core.log_channel = (function jamesmacaulay$async_tools$core$log_channel(ch){
return cljs.core.async.map.call(null,(function (x){
cljs.core.println.call(null,x);

return x;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
jamesmacaulay.async_tools.core.ConstantReadPort = (function (boxed_value){
this.boxed_value = boxed_value;
})
jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.boxed_value;
});

jamesmacaulay.async_tools.core.ConstantReadPort.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"boxed-value","boxed-value",551476930,null)], null);
});

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$type = true;

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorStr = "jamesmacaulay.async-tools.core/ConstantReadPort";

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"jamesmacaulay.async-tools.core/ConstantReadPort");
});

jamesmacaulay.async_tools.core.__GT_ConstantReadPort = (function jamesmacaulay$async_tools$core$__GT_ConstantReadPort(boxed_value){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(boxed_value));
});

jamesmacaulay.async_tools.core.constant = (function jamesmacaulay$async_tools$core$constant(x){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(cljs.core.async.impl.channels.box.call(null,x)));
});
jamesmacaulay.async_tools.core.readport_QMARK_ = (function jamesmacaulay$async_tools$core$readport_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs$core$async$impl$protocols$ReadPort$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
}
});
jamesmacaulay.async_tools.core.cast_as_readport = (function jamesmacaulay$async_tools$core$cast_as_readport(x){
if(cljs.core.truth_(jamesmacaulay.async_tools.core.readport_QMARK_.call(null,x))){
return x;
} else {
return jamesmacaulay.async_tools.core.constant.call(null,x);
}
});

//# sourceMappingURL=core.js.map?rel=1457129830952