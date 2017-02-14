// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30953 = cljs.core._EQ_;
var expr__30954 = (function (){var or__18756__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e30957){if((e30957 instanceof Error)){
var e = e30957;
return false;
} else {
throw e30957;

}
}})();
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30953.call(null,"true",expr__30954))){
return true;
} else {
if(cljs.core.truth_(pred__30953.call(null,"false",expr__30954))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30954)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30959){if((e30959 instanceof Error)){
var e = e30959;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30959;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19871__auto__ = [];
var len__19864__auto___30961 = arguments.length;
var i__19865__auto___30962 = (0);
while(true){
if((i__19865__auto___30962 < len__19864__auto___30961)){
args__19871__auto__.push((arguments[i__19865__auto___30962]));

var G__30963 = (i__19865__auto___30962 + (1));
i__19865__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30960){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30960));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30964){
var map__30967 = p__30964;
var map__30967__$1 = ((((!((map__30967 == null)))?((((map__30967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30967):map__30967);
var message = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18756__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18744__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18744__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18744__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21118__auto___31129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___31129,ch){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___31129,ch){
return (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (7))){
var inst_31094 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31100_31130 = state_31098__$1;
(statearr_31100_31130[(2)] = inst_31094);

(statearr_31100_31130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (1))){
var state_31098__$1 = state_31098;
var statearr_31101_31131 = state_31098__$1;
(statearr_31101_31131[(2)] = null);

(statearr_31101_31131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (4))){
var inst_31051 = (state_31098[(7)]);
var inst_31051__$1 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31102 = state_31098;
(statearr_31102[(7)] = inst_31051__$1);

return statearr_31102;
})();
if(cljs.core.truth_(inst_31051__$1)){
var statearr_31103_31132 = state_31098__$1;
(statearr_31103_31132[(1)] = (5));

} else {
var statearr_31104_31133 = state_31098__$1;
(statearr_31104_31133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (15))){
var inst_31058 = (state_31098[(8)]);
var inst_31073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31058);
var inst_31074 = cljs.core.first.call(null,inst_31073);
var inst_31075 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31074);
var inst_31076 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31075)].join('');
var inst_31077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31076);
var state_31098__$1 = state_31098;
var statearr_31105_31134 = state_31098__$1;
(statearr_31105_31134[(2)] = inst_31077);

(statearr_31105_31134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (13))){
var inst_31082 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31106_31135 = state_31098__$1;
(statearr_31106_31135[(2)] = inst_31082);

(statearr_31106_31135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (6))){
var state_31098__$1 = state_31098;
var statearr_31107_31136 = state_31098__$1;
(statearr_31107_31136[(2)] = null);

(statearr_31107_31136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (17))){
var inst_31080 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31108_31137 = state_31098__$1;
(statearr_31108_31137[(2)] = inst_31080);

(statearr_31108_31137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (3))){
var inst_31096 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31098__$1,inst_31096);
} else {
if((state_val_31099 === (12))){
var inst_31057 = (state_31098[(9)]);
var inst_31071 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31057,opts);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31071)){
var statearr_31109_31138 = state_31098__$1;
(statearr_31109_31138[(1)] = (15));

} else {
var statearr_31110_31139 = state_31098__$1;
(statearr_31110_31139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (2))){
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(4),ch);
} else {
if((state_val_31099 === (11))){
var inst_31058 = (state_31098[(8)]);
var inst_31063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31064 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31058);
var inst_31065 = cljs.core.async.timeout.call(null,(1000));
var inst_31066 = [inst_31064,inst_31065];
var inst_31067 = (new cljs.core.PersistentVector(null,2,(5),inst_31063,inst_31066,null));
var state_31098__$1 = state_31098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31098__$1,(14),inst_31067);
} else {
if((state_val_31099 === (9))){
var inst_31058 = (state_31098[(8)]);
var inst_31084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31058);
var inst_31086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31085);
var inst_31087 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31086)].join('');
var inst_31088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31087);
var state_31098__$1 = (function (){var statearr_31111 = state_31098;
(statearr_31111[(10)] = inst_31084);

return statearr_31111;
})();
var statearr_31112_31140 = state_31098__$1;
(statearr_31112_31140[(2)] = inst_31088);

(statearr_31112_31140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (5))){
var inst_31051 = (state_31098[(7)]);
var inst_31053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31054 = (new cljs.core.PersistentArrayMap(null,2,inst_31053,null));
var inst_31055 = (new cljs.core.PersistentHashSet(null,inst_31054,null));
var inst_31056 = figwheel.client.focus_msgs.call(null,inst_31055,inst_31051);
var inst_31057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31056);
var inst_31058 = cljs.core.first.call(null,inst_31056);
var inst_31059 = figwheel.client.autoload_QMARK_.call(null);
var state_31098__$1 = (function (){var statearr_31113 = state_31098;
(statearr_31113[(8)] = inst_31058);

(statearr_31113[(9)] = inst_31057);

return statearr_31113;
})();
if(cljs.core.truth_(inst_31059)){
var statearr_31114_31141 = state_31098__$1;
(statearr_31114_31141[(1)] = (8));

} else {
var statearr_31115_31142 = state_31098__$1;
(statearr_31115_31142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (14))){
var inst_31069 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31116_31143 = state_31098__$1;
(statearr_31116_31143[(2)] = inst_31069);

(statearr_31116_31143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (16))){
var state_31098__$1 = state_31098;
var statearr_31117_31144 = state_31098__$1;
(statearr_31117_31144[(2)] = null);

(statearr_31117_31144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (10))){
var inst_31090 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31118 = state_31098;
(statearr_31118[(11)] = inst_31090);

return statearr_31118;
})();
var statearr_31119_31145 = state_31098__$1;
(statearr_31119_31145[(2)] = null);

(statearr_31119_31145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (8))){
var inst_31057 = (state_31098[(9)]);
var inst_31061 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31057,opts);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31061)){
var statearr_31120_31146 = state_31098__$1;
(statearr_31120_31146[(1)] = (11));

} else {
var statearr_31121_31147 = state_31098__$1;
(statearr_31121_31147[(1)] = (12));

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
}
}
});})(c__21118__auto___31129,ch))
;
return ((function (switch__21103__auto__,c__21118__auto___31129,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____0 = (function (){
var statearr_31125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31125[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__);

(statearr_31125[(1)] = (1));

return statearr_31125;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____1 = (function (state_31098){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_31098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e31126){if((e31126 instanceof Object)){
var ex__21107__auto__ = e31126;
var statearr_31127_31148 = state_31098;
(statearr_31127_31148[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31149 = state_31098;
state_31098 = G__31149;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21104__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___31129,ch))
})();
var state__21120__auto__ = (function (){var statearr_31128 = f__21119__auto__.call(null);
(statearr_31128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___31129);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___31129,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31150_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31150_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31157 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31157){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31156 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31156;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31155;
}}catch (e31154){if((e31154 instanceof Error)){
var e = e31154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31157], null));
} else {
var e = e31154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31157))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31158){
var map__31167 = p__31158;
var map__31167__$1 = ((((!((map__31167 == null)))?((((map__31167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);
var opts = map__31167__$1;
var build_id = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31167,map__31167__$1,opts,build_id){
return (function (p__31169){
var vec__31170 = p__31169;
var seq__31171 = cljs.core.seq.call(null,vec__31170);
var first__31172 = cljs.core.first.call(null,seq__31171);
var seq__31171__$1 = cljs.core.next.call(null,seq__31171);
var map__31173 = first__31172;
var map__31173__$1 = ((((!((map__31173 == null)))?((((map__31173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31173):map__31173);
var msg = map__31173__$1;
var msg_name = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31171__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31170,seq__31171,first__31172,seq__31171__$1,map__31173,map__31173__$1,msg,msg_name,_,map__31167,map__31167__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31170,seq__31171,first__31172,seq__31171__$1,map__31173,map__31173__$1,msg,msg_name,_,map__31167,map__31167__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31167,map__31167__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31181){
var vec__31182 = p__31181;
var seq__31183 = cljs.core.seq.call(null,vec__31182);
var first__31184 = cljs.core.first.call(null,seq__31183);
var seq__31183__$1 = cljs.core.next.call(null,seq__31183);
var map__31185 = first__31184;
var map__31185__$1 = ((((!((map__31185 == null)))?((((map__31185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);
var msg = map__31185__$1;
var msg_name = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31183__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31187){
var map__31199 = p__31187;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var on_compile_warning = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31199,map__31199__$1,on_compile_warning,on_compile_fail){
return (function (p__31201){
var vec__31202 = p__31201;
var seq__31203 = cljs.core.seq.call(null,vec__31202);
var first__31204 = cljs.core.first.call(null,seq__31203);
var seq__31203__$1 = cljs.core.next.call(null,seq__31203);
var map__31205 = first__31204;
var map__31205__$1 = ((((!((map__31205 == null)))?((((map__31205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var msg = map__31205__$1;
var msg_name = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31203__$1;
var pred__31207 = cljs.core._EQ_;
var expr__31208 = msg_name;
if(cljs.core.truth_(pred__31207.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31208))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31207.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31208))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31199,map__31199__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__,msg_hist,msg_names,msg){
return (function (state_31424){
var state_val_31425 = (state_31424[(1)]);
if((state_val_31425 === (7))){
var inst_31348 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31348)){
var statearr_31426_31472 = state_31424__$1;
(statearr_31426_31472[(1)] = (8));

} else {
var statearr_31427_31473 = state_31424__$1;
(statearr_31427_31473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (20))){
var inst_31418 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31428_31474 = state_31424__$1;
(statearr_31428_31474[(2)] = inst_31418);

(statearr_31428_31474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (27))){
var inst_31414 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31429_31475 = state_31424__$1;
(statearr_31429_31475[(2)] = inst_31414);

(statearr_31429_31475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (1))){
var inst_31341 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31341)){
var statearr_31430_31476 = state_31424__$1;
(statearr_31430_31476[(1)] = (2));

} else {
var statearr_31431_31477 = state_31424__$1;
(statearr_31431_31477[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (24))){
var inst_31416 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31432_31478 = state_31424__$1;
(statearr_31432_31478[(2)] = inst_31416);

(statearr_31432_31478[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (4))){
var inst_31422 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31424__$1,inst_31422);
} else {
if((state_val_31425 === (15))){
var inst_31420 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31433_31479 = state_31424__$1;
(statearr_31433_31479[(2)] = inst_31420);

(statearr_31433_31479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (21))){
var inst_31379 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31434_31480 = state_31424__$1;
(statearr_31434_31480[(2)] = inst_31379);

(statearr_31434_31480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (31))){
var inst_31403 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31403)){
var statearr_31435_31481 = state_31424__$1;
(statearr_31435_31481[(1)] = (34));

} else {
var statearr_31436_31482 = state_31424__$1;
(statearr_31436_31482[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (32))){
var inst_31412 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31437_31483 = state_31424__$1;
(statearr_31437_31483[(2)] = inst_31412);

(statearr_31437_31483[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (33))){
var inst_31401 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31438_31484 = state_31424__$1;
(statearr_31438_31484[(2)] = inst_31401);

(statearr_31438_31484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (13))){
var inst_31362 = figwheel.client.heads_up.clear.call(null);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(16),inst_31362);
} else {
if((state_val_31425 === (22))){
var inst_31383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31384 = figwheel.client.heads_up.append_message.call(null,inst_31383);
var state_31424__$1 = state_31424;
var statearr_31439_31485 = state_31424__$1;
(statearr_31439_31485[(2)] = inst_31384);

(statearr_31439_31485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (36))){
var inst_31410 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31440_31486 = state_31424__$1;
(statearr_31440_31486[(2)] = inst_31410);

(statearr_31440_31486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (29))){
var inst_31394 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31441_31487 = state_31424__$1;
(statearr_31441_31487[(2)] = inst_31394);

(statearr_31441_31487[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (6))){
var inst_31343 = (state_31424[(7)]);
var state_31424__$1 = state_31424;
var statearr_31442_31488 = state_31424__$1;
(statearr_31442_31488[(2)] = inst_31343);

(statearr_31442_31488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (28))){
var inst_31390 = (state_31424[(2)]);
var inst_31391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31392 = figwheel.client.heads_up.display_warning.call(null,inst_31391);
var state_31424__$1 = (function (){var statearr_31443 = state_31424;
(statearr_31443[(8)] = inst_31390);

return statearr_31443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(29),inst_31392);
} else {
if((state_val_31425 === (25))){
var inst_31388 = figwheel.client.heads_up.clear.call(null);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(28),inst_31388);
} else {
if((state_val_31425 === (34))){
var inst_31405 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(37),inst_31405);
} else {
if((state_val_31425 === (17))){
var inst_31370 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31444_31489 = state_31424__$1;
(statearr_31444_31489[(2)] = inst_31370);

(statearr_31444_31489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (3))){
var inst_31360 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31360)){
var statearr_31445_31490 = state_31424__$1;
(statearr_31445_31490[(1)] = (13));

} else {
var statearr_31446_31491 = state_31424__$1;
(statearr_31446_31491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (12))){
var inst_31356 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31447_31492 = state_31424__$1;
(statearr_31447_31492[(2)] = inst_31356);

(statearr_31447_31492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (2))){
var inst_31343 = (state_31424[(7)]);
var inst_31343__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31424__$1 = (function (){var statearr_31448 = state_31424;
(statearr_31448[(7)] = inst_31343__$1);

return statearr_31448;
})();
if(cljs.core.truth_(inst_31343__$1)){
var statearr_31449_31493 = state_31424__$1;
(statearr_31449_31493[(1)] = (5));

} else {
var statearr_31450_31494 = state_31424__$1;
(statearr_31450_31494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (23))){
var inst_31386 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31386)){
var statearr_31451_31495 = state_31424__$1;
(statearr_31451_31495[(1)] = (25));

} else {
var statearr_31452_31496 = state_31424__$1;
(statearr_31452_31496[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (35))){
var state_31424__$1 = state_31424;
var statearr_31453_31497 = state_31424__$1;
(statearr_31453_31497[(2)] = null);

(statearr_31453_31497[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (19))){
var inst_31381 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31381)){
var statearr_31454_31498 = state_31424__$1;
(statearr_31454_31498[(1)] = (22));

} else {
var statearr_31455_31499 = state_31424__$1;
(statearr_31455_31499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (11))){
var inst_31352 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31456_31500 = state_31424__$1;
(statearr_31456_31500[(2)] = inst_31352);

(statearr_31456_31500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (9))){
var inst_31354 = figwheel.client.heads_up.clear.call(null);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(12),inst_31354);
} else {
if((state_val_31425 === (5))){
var inst_31345 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31424__$1 = state_31424;
var statearr_31457_31501 = state_31424__$1;
(statearr_31457_31501[(2)] = inst_31345);

(statearr_31457_31501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (14))){
var inst_31372 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31372)){
var statearr_31458_31502 = state_31424__$1;
(statearr_31458_31502[(1)] = (18));

} else {
var statearr_31459_31503 = state_31424__$1;
(statearr_31459_31503[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (26))){
var inst_31396 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31396)){
var statearr_31460_31504 = state_31424__$1;
(statearr_31460_31504[(1)] = (30));

} else {
var statearr_31461_31505 = state_31424__$1;
(statearr_31461_31505[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (16))){
var inst_31364 = (state_31424[(2)]);
var inst_31365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31366 = figwheel.client.format_messages.call(null,inst_31365);
var inst_31367 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31368 = figwheel.client.heads_up.display_error.call(null,inst_31366,inst_31367);
var state_31424__$1 = (function (){var statearr_31462 = state_31424;
(statearr_31462[(9)] = inst_31364);

return statearr_31462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(17),inst_31368);
} else {
if((state_val_31425 === (30))){
var inst_31398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31399 = figwheel.client.heads_up.display_warning.call(null,inst_31398);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(33),inst_31399);
} else {
if((state_val_31425 === (10))){
var inst_31358 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31463_31506 = state_31424__$1;
(statearr_31463_31506[(2)] = inst_31358);

(statearr_31463_31506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (18))){
var inst_31374 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31375 = figwheel.client.format_messages.call(null,inst_31374);
var inst_31376 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31377 = figwheel.client.heads_up.display_error.call(null,inst_31375,inst_31376);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(21),inst_31377);
} else {
if((state_val_31425 === (37))){
var inst_31407 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31464_31507 = state_31424__$1;
(statearr_31464_31507[(2)] = inst_31407);

(statearr_31464_31507[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (8))){
var inst_31350 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(11),inst_31350);
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
}
}
}
}
}
}
}
});})(c__21118__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21103__auto__,c__21118__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____1 = (function (state_31424){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_31424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e31469){if((e31469 instanceof Object)){
var ex__21107__auto__ = e31469;
var statearr_31470_31508 = state_31424;
(statearr_31470_31508[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31509 = state_31424;
state_31424 = G__31509;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__ = function(state_31424){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____1.call(this,state_31424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__,msg_hist,msg_names,msg))
})();
var state__21120__auto__ = (function (){var statearr_31471 = f__21119__auto__.call(null);
(statearr_31471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_31471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__,msg_hist,msg_names,msg))
);

return c__21118__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21118__auto___31572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___31572,ch){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___31572,ch){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (1))){
var state_31555__$1 = state_31555;
var statearr_31557_31573 = state_31555__$1;
(statearr_31557_31573[(2)] = null);

(statearr_31557_31573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(4),ch);
} else {
if((state_val_31556 === (3))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (4))){
var inst_31543 = (state_31555[(7)]);
var inst_31543__$1 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31558 = state_31555;
(statearr_31558[(7)] = inst_31543__$1);

return statearr_31558;
})();
if(cljs.core.truth_(inst_31543__$1)){
var statearr_31559_31574 = state_31555__$1;
(statearr_31559_31574[(1)] = (5));

} else {
var statearr_31560_31575 = state_31555__$1;
(statearr_31560_31575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (5))){
var inst_31543 = (state_31555[(7)]);
var inst_31545 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31543);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(8),inst_31545);
} else {
if((state_val_31556 === (6))){
var state_31555__$1 = state_31555;
var statearr_31561_31576 = state_31555__$1;
(statearr_31561_31576[(2)] = null);

(statearr_31561_31576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (7))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31562_31577 = state_31555__$1;
(statearr_31562_31577[(2)] = inst_31551);

(statearr_31562_31577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31547 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31563 = state_31555;
(statearr_31563[(8)] = inst_31547);

return statearr_31563;
})();
var statearr_31564_31578 = state_31555__$1;
(statearr_31564_31578[(2)] = null);

(statearr_31564_31578[(1)] = (2));


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
});})(c__21118__auto___31572,ch))
;
return ((function (switch__21103__auto__,c__21118__auto___31572,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21104__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21104__auto____0 = (function (){
var statearr_31568 = [null,null,null,null,null,null,null,null,null];
(statearr_31568[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21104__auto__);

(statearr_31568[(1)] = (1));

return statearr_31568;
});
var figwheel$client$heads_up_plugin_$_state_machine__21104__auto____1 = (function (state_31555){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_31555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e31569){if((e31569 instanceof Object)){
var ex__21107__auto__ = e31569;
var statearr_31570_31579 = state_31555;
(statearr_31570_31579[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31580 = state_31555;
state_31555 = G__31580;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21104__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21104__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21104__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21104__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___31572,ch))
})();
var state__21120__auto__ = (function (){var statearr_31571 = f__21119__auto__.call(null);
(statearr_31571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___31572);

return statearr_31571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___31572,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_31601){
var state_val_31602 = (state_31601[(1)]);
if((state_val_31602 === (1))){
var inst_31596 = cljs.core.async.timeout.call(null,(3000));
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31601__$1,(2),inst_31596);
} else {
if((state_val_31602 === (2))){
var inst_31598 = (state_31601[(2)]);
var inst_31599 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31601__$1 = (function (){var statearr_31603 = state_31601;
(statearr_31603[(7)] = inst_31598);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31601__$1,inst_31599);
} else {
return null;
}
}
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____1 = (function (state_31601){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_31601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__21107__auto__ = e31608;
var statearr_31609_31611 = state_31601;
(statearr_31609_31611[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31612 = state_31601;
state_31601 = G__31612;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__ = function(state_31601){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____1.call(this,state_31601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21104__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_31610 = f__21119__auto__.call(null);
(statearr_31610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31613){
var map__31620 = p__31613;
var map__31620__$1 = ((((!((map__31620 == null)))?((((map__31620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);
var ed = map__31620__$1;
var formatted_exception = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31622_31626 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31623_31627 = null;
var count__31624_31628 = (0);
var i__31625_31629 = (0);
while(true){
if((i__31625_31629 < count__31624_31628)){
var msg_31630 = cljs.core._nth.call(null,chunk__31623_31627,i__31625_31629);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31630);

var G__31631 = seq__31622_31626;
var G__31632 = chunk__31623_31627;
var G__31633 = count__31624_31628;
var G__31634 = (i__31625_31629 + (1));
seq__31622_31626 = G__31631;
chunk__31623_31627 = G__31632;
count__31624_31628 = G__31633;
i__31625_31629 = G__31634;
continue;
} else {
var temp__4657__auto___31635 = cljs.core.seq.call(null,seq__31622_31626);
if(temp__4657__auto___31635){
var seq__31622_31636__$1 = temp__4657__auto___31635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31622_31636__$1)){
var c__19570__auto___31637 = cljs.core.chunk_first.call(null,seq__31622_31636__$1);
var G__31638 = cljs.core.chunk_rest.call(null,seq__31622_31636__$1);
var G__31639 = c__19570__auto___31637;
var G__31640 = cljs.core.count.call(null,c__19570__auto___31637);
var G__31641 = (0);
seq__31622_31626 = G__31638;
chunk__31623_31627 = G__31639;
count__31624_31628 = G__31640;
i__31625_31629 = G__31641;
continue;
} else {
var msg_31642 = cljs.core.first.call(null,seq__31622_31636__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31642);

var G__31643 = cljs.core.next.call(null,seq__31622_31636__$1);
var G__31644 = null;
var G__31645 = (0);
var G__31646 = (0);
seq__31622_31626 = G__31643;
chunk__31623_31627 = G__31644;
count__31624_31628 = G__31645;
i__31625_31629 = G__31646;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31647){
var map__31650 = p__31647;
var map__31650__$1 = ((((!((map__31650 == null)))?((((map__31650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31650):map__31650);
var w = map__31650__$1;
var message = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18744__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18744__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18744__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31662 = cljs.core.seq.call(null,plugins);
var chunk__31663 = null;
var count__31664 = (0);
var i__31665 = (0);
while(true){
if((i__31665 < count__31664)){
var vec__31666 = cljs.core._nth.call(null,chunk__31663,i__31665);
var k = cljs.core.nth.call(null,vec__31666,(0),null);
var plugin = cljs.core.nth.call(null,vec__31666,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31662,chunk__31663,count__31664,i__31665,pl_31672,vec__31666,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31672.call(null,msg_hist);
});})(seq__31662,chunk__31663,count__31664,i__31665,pl_31672,vec__31666,k,plugin))
);
} else {
}

var G__31673 = seq__31662;
var G__31674 = chunk__31663;
var G__31675 = count__31664;
var G__31676 = (i__31665 + (1));
seq__31662 = G__31673;
chunk__31663 = G__31674;
count__31664 = G__31675;
i__31665 = G__31676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31662);
if(temp__4657__auto__){
var seq__31662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31662__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__31662__$1);
var G__31677 = cljs.core.chunk_rest.call(null,seq__31662__$1);
var G__31678 = c__19570__auto__;
var G__31679 = cljs.core.count.call(null,c__19570__auto__);
var G__31680 = (0);
seq__31662 = G__31677;
chunk__31663 = G__31678;
count__31664 = G__31679;
i__31665 = G__31680;
continue;
} else {
var vec__31669 = cljs.core.first.call(null,seq__31662__$1);
var k = cljs.core.nth.call(null,vec__31669,(0),null);
var plugin = cljs.core.nth.call(null,vec__31669,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31681 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31662,chunk__31663,count__31664,i__31665,pl_31681,vec__31669,k,plugin,seq__31662__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31681.call(null,msg_hist);
});})(seq__31662,chunk__31663,count__31664,i__31665,pl_31681,vec__31669,k,plugin,seq__31662__$1,temp__4657__auto__))
);
} else {
}

var G__31682 = cljs.core.next.call(null,seq__31662__$1);
var G__31683 = null;
var G__31684 = (0);
var G__31685 = (0);
seq__31662 = G__31682;
chunk__31663 = G__31683;
count__31664 = G__31684;
i__31665 = G__31685;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31686 = [];
var len__19864__auto___31689 = arguments.length;
var i__19865__auto___31690 = (0);
while(true){
if((i__19865__auto___31690 < len__19864__auto___31689)){
args31686.push((arguments[i__19865__auto___31690]));

var G__31691 = (i__19865__auto___31690 + (1));
i__19865__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var G__31688 = args31686.length;
switch (G__31688) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31686.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19871__auto__ = [];
var len__19864__auto___31697 = arguments.length;
var i__19865__auto___31698 = (0);
while(true){
if((i__19865__auto___31698 < len__19864__auto___31697)){
args__19871__auto__.push((arguments[i__19865__auto___31698]));

var G__31699 = (i__19865__auto___31698 + (1));
i__19865__auto___31698 = G__31699;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31694){
var map__31695 = p__31694;
var map__31695__$1 = ((((!((map__31695 == null)))?((((map__31695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31695):map__31695);
var opts = map__31695__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31693){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31693));
});


//# sourceMappingURL=client.js.map?rel=1485901327359