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
var pred__30963 = cljs.core._EQ_;
var expr__30964 = (function (){var or__18756__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e30967){if((e30967 instanceof Error)){
var e = e30967;
return false;
} else {
throw e30967;

}
}})();
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30963.call(null,"true",expr__30964))){
return true;
} else {
if(cljs.core.truth_(pred__30963.call(null,"false",expr__30964))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30964)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30969){if((e30969 instanceof Error)){
var e = e30969;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30969;

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
var len__19864__auto___30971 = arguments.length;
var i__19865__auto___30972 = (0);
while(true){
if((i__19865__auto___30972 < len__19864__auto___30971)){
args__19871__auto__.push((arguments[i__19865__auto___30972]));

var G__30973 = (i__19865__auto___30972 + (1));
i__19865__auto___30972 = G__30973;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30970){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30970));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30974){
var map__30977 = p__30974;
var map__30977__$1 = ((((!((map__30977 == null)))?((((map__30977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);
var message = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21296__auto___31139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___31139,ch){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___31139,ch){
return (function (state_31108){
var state_val_31109 = (state_31108[(1)]);
if((state_val_31109 === (7))){
var inst_31104 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
var statearr_31110_31140 = state_31108__$1;
(statearr_31110_31140[(2)] = inst_31104);

(statearr_31110_31140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (1))){
var state_31108__$1 = state_31108;
var statearr_31111_31141 = state_31108__$1;
(statearr_31111_31141[(2)] = null);

(statearr_31111_31141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (4))){
var inst_31061 = (state_31108[(7)]);
var inst_31061__$1 = (state_31108[(2)]);
var state_31108__$1 = (function (){var statearr_31112 = state_31108;
(statearr_31112[(7)] = inst_31061__$1);

return statearr_31112;
})();
if(cljs.core.truth_(inst_31061__$1)){
var statearr_31113_31142 = state_31108__$1;
(statearr_31113_31142[(1)] = (5));

} else {
var statearr_31114_31143 = state_31108__$1;
(statearr_31114_31143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (15))){
var inst_31068 = (state_31108[(8)]);
var inst_31083 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31068);
var inst_31084 = cljs.core.first.call(null,inst_31083);
var inst_31085 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31084);
var inst_31086 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31085)].join('');
var inst_31087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31086);
var state_31108__$1 = state_31108;
var statearr_31115_31144 = state_31108__$1;
(statearr_31115_31144[(2)] = inst_31087);

(statearr_31115_31144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (13))){
var inst_31092 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
var statearr_31116_31145 = state_31108__$1;
(statearr_31116_31145[(2)] = inst_31092);

(statearr_31116_31145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (6))){
var state_31108__$1 = state_31108;
var statearr_31117_31146 = state_31108__$1;
(statearr_31117_31146[(2)] = null);

(statearr_31117_31146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (17))){
var inst_31090 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
var statearr_31118_31147 = state_31108__$1;
(statearr_31118_31147[(2)] = inst_31090);

(statearr_31118_31147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (3))){
var inst_31106 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31108__$1,inst_31106);
} else {
if((state_val_31109 === (12))){
var inst_31067 = (state_31108[(9)]);
var inst_31081 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31067,opts);
var state_31108__$1 = state_31108;
if(cljs.core.truth_(inst_31081)){
var statearr_31119_31148 = state_31108__$1;
(statearr_31119_31148[(1)] = (15));

} else {
var statearr_31120_31149 = state_31108__$1;
(statearr_31120_31149[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (2))){
var state_31108__$1 = state_31108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31108__$1,(4),ch);
} else {
if((state_val_31109 === (11))){
var inst_31068 = (state_31108[(8)]);
var inst_31073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31074 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31068);
var inst_31075 = cljs.core.async.timeout.call(null,(1000));
var inst_31076 = [inst_31074,inst_31075];
var inst_31077 = (new cljs.core.PersistentVector(null,2,(5),inst_31073,inst_31076,null));
var state_31108__$1 = state_31108;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31108__$1,(14),inst_31077);
} else {
if((state_val_31109 === (9))){
var inst_31068 = (state_31108[(8)]);
var inst_31094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31095 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31068);
var inst_31096 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31095);
var inst_31097 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31096)].join('');
var inst_31098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31097);
var state_31108__$1 = (function (){var statearr_31121 = state_31108;
(statearr_31121[(10)] = inst_31094);

return statearr_31121;
})();
var statearr_31122_31150 = state_31108__$1;
(statearr_31122_31150[(2)] = inst_31098);

(statearr_31122_31150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (5))){
var inst_31061 = (state_31108[(7)]);
var inst_31063 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31064 = (new cljs.core.PersistentArrayMap(null,2,inst_31063,null));
var inst_31065 = (new cljs.core.PersistentHashSet(null,inst_31064,null));
var inst_31066 = figwheel.client.focus_msgs.call(null,inst_31065,inst_31061);
var inst_31067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31066);
var inst_31068 = cljs.core.first.call(null,inst_31066);
var inst_31069 = figwheel.client.autoload_QMARK_.call(null);
var state_31108__$1 = (function (){var statearr_31123 = state_31108;
(statearr_31123[(8)] = inst_31068);

(statearr_31123[(9)] = inst_31067);

return statearr_31123;
})();
if(cljs.core.truth_(inst_31069)){
var statearr_31124_31151 = state_31108__$1;
(statearr_31124_31151[(1)] = (8));

} else {
var statearr_31125_31152 = state_31108__$1;
(statearr_31125_31152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (14))){
var inst_31079 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
var statearr_31126_31153 = state_31108__$1;
(statearr_31126_31153[(2)] = inst_31079);

(statearr_31126_31153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (16))){
var state_31108__$1 = state_31108;
var statearr_31127_31154 = state_31108__$1;
(statearr_31127_31154[(2)] = null);

(statearr_31127_31154[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (10))){
var inst_31100 = (state_31108[(2)]);
var state_31108__$1 = (function (){var statearr_31128 = state_31108;
(statearr_31128[(11)] = inst_31100);

return statearr_31128;
})();
var statearr_31129_31155 = state_31108__$1;
(statearr_31129_31155[(2)] = null);

(statearr_31129_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (8))){
var inst_31067 = (state_31108[(9)]);
var inst_31071 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31067,opts);
var state_31108__$1 = state_31108;
if(cljs.core.truth_(inst_31071)){
var statearr_31130_31156 = state_31108__$1;
(statearr_31130_31156[(1)] = (11));

} else {
var statearr_31131_31157 = state_31108__$1;
(statearr_31131_31157[(1)] = (12));

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
});})(c__21296__auto___31139,ch))
;
return ((function (switch__21281__auto__,c__21296__auto___31139,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31135[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____1 = (function (state_31108){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_31108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e31136){if((e31136 instanceof Object)){
var ex__21285__auto__ = e31136;
var statearr_31137_31158 = state_31108;
(statearr_31137_31158[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31159 = state_31108;
state_31108 = G__31159;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__ = function(state_31108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____1.call(this,state_31108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21282__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___31139,ch))
})();
var state__21298__auto__ = (function (){var statearr_31138 = f__21297__auto__.call(null);
(statearr_31138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___31139);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___31139,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31160_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31160_SHARP_));
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
var base_path_31167 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31167){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31165 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31166 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31166;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31165;
}}catch (e31164){if((e31164 instanceof Error)){
var e = e31164;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31167], null));
} else {
var e = e31164;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31167))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31168){
var map__31177 = p__31168;
var map__31177__$1 = ((((!((map__31177 == null)))?((((map__31177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);
var opts = map__31177__$1;
var build_id = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31177,map__31177__$1,opts,build_id){
return (function (p__31179){
var vec__31180 = p__31179;
var seq__31181 = cljs.core.seq.call(null,vec__31180);
var first__31182 = cljs.core.first.call(null,seq__31181);
var seq__31181__$1 = cljs.core.next.call(null,seq__31181);
var map__31183 = first__31182;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var msg = map__31183__$1;
var msg_name = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31181__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31180,seq__31181,first__31182,seq__31181__$1,map__31183,map__31183__$1,msg,msg_name,_,map__31177,map__31177__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31180,seq__31181,first__31182,seq__31181__$1,map__31183,map__31183__$1,msg,msg_name,_,map__31177,map__31177__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31177,map__31177__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31191){
var vec__31192 = p__31191;
var seq__31193 = cljs.core.seq.call(null,vec__31192);
var first__31194 = cljs.core.first.call(null,seq__31193);
var seq__31193__$1 = cljs.core.next.call(null,seq__31193);
var map__31195 = first__31194;
var map__31195__$1 = ((((!((map__31195 == null)))?((((map__31195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31195):map__31195);
var msg = map__31195__$1;
var msg_name = cljs.core.get.call(null,map__31195__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31193__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31197){
var map__31209 = p__31197;
var map__31209__$1 = ((((!((map__31209 == null)))?((((map__31209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31209):map__31209);
var on_compile_warning = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31209,map__31209__$1,on_compile_warning,on_compile_fail){
return (function (p__31211){
var vec__31212 = p__31211;
var seq__31213 = cljs.core.seq.call(null,vec__31212);
var first__31214 = cljs.core.first.call(null,seq__31213);
var seq__31213__$1 = cljs.core.next.call(null,seq__31213);
var map__31215 = first__31214;
var map__31215__$1 = ((((!((map__31215 == null)))?((((map__31215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31215):map__31215);
var msg = map__31215__$1;
var msg_name = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31213__$1;
var pred__31217 = cljs.core._EQ_;
var expr__31218 = msg_name;
if(cljs.core.truth_(pred__31217.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31218))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31217.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31218))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31209,map__31209__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,msg_hist,msg_names,msg){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31358 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31358)){
var statearr_31436_31482 = state_31434__$1;
(statearr_31436_31482[(1)] = (8));

} else {
var statearr_31437_31483 = state_31434__$1;
(statearr_31437_31483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (20))){
var inst_31428 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31438_31484 = state_31434__$1;
(statearr_31438_31484[(2)] = inst_31428);

(statearr_31438_31484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (27))){
var inst_31424 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31439_31485 = state_31434__$1;
(statearr_31439_31485[(2)] = inst_31424);

(statearr_31439_31485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var inst_31351 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31351)){
var statearr_31440_31486 = state_31434__$1;
(statearr_31440_31486[(1)] = (2));

} else {
var statearr_31441_31487 = state_31434__$1;
(statearr_31441_31487[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (24))){
var inst_31426 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31442_31488 = state_31434__$1;
(statearr_31442_31488[(2)] = inst_31426);

(statearr_31442_31488[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (15))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31443_31489 = state_31434__$1;
(statearr_31443_31489[(2)] = inst_31430);

(statearr_31443_31489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (21))){
var inst_31389 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31444_31490 = state_31434__$1;
(statearr_31444_31490[(2)] = inst_31389);

(statearr_31444_31490[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (31))){
var inst_31413 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31413)){
var statearr_31445_31491 = state_31434__$1;
(statearr_31445_31491[(1)] = (34));

} else {
var statearr_31446_31492 = state_31434__$1;
(statearr_31446_31492[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (32))){
var inst_31422 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31447_31493 = state_31434__$1;
(statearr_31447_31493[(2)] = inst_31422);

(statearr_31447_31493[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (33))){
var inst_31411 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31448_31494 = state_31434__$1;
(statearr_31448_31494[(2)] = inst_31411);

(statearr_31448_31494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var inst_31372 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(16),inst_31372);
} else {
if((state_val_31435 === (22))){
var inst_31393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31394 = figwheel.client.heads_up.append_message.call(null,inst_31393);
var state_31434__$1 = state_31434;
var statearr_31449_31495 = state_31434__$1;
(statearr_31449_31495[(2)] = inst_31394);

(statearr_31449_31495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (36))){
var inst_31420 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31450_31496 = state_31434__$1;
(statearr_31450_31496[(2)] = inst_31420);

(statearr_31450_31496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (29))){
var inst_31404 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31451_31497 = state_31434__$1;
(statearr_31451_31497[(2)] = inst_31404);

(statearr_31451_31497[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31353 = (state_31434[(7)]);
var state_31434__$1 = state_31434;
var statearr_31452_31498 = state_31434__$1;
(statearr_31452_31498[(2)] = inst_31353);

(statearr_31452_31498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (28))){
var inst_31400 = (state_31434[(2)]);
var inst_31401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31402 = figwheel.client.heads_up.display_warning.call(null,inst_31401);
var state_31434__$1 = (function (){var statearr_31453 = state_31434;
(statearr_31453[(8)] = inst_31400);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(29),inst_31402);
} else {
if((state_val_31435 === (25))){
var inst_31398 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(28),inst_31398);
} else {
if((state_val_31435 === (34))){
var inst_31415 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(37),inst_31415);
} else {
if((state_val_31435 === (17))){
var inst_31380 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31454_31499 = state_31434__$1;
(statearr_31454_31499[(2)] = inst_31380);

(statearr_31454_31499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31370 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31370)){
var statearr_31455_31500 = state_31434__$1;
(statearr_31455_31500[(1)] = (13));

} else {
var statearr_31456_31501 = state_31434__$1;
(statearr_31456_31501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (12))){
var inst_31366 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31457_31502 = state_31434__$1;
(statearr_31457_31502[(2)] = inst_31366);

(statearr_31457_31502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (2))){
var inst_31353 = (state_31434[(7)]);
var inst_31353__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31434__$1 = (function (){var statearr_31458 = state_31434;
(statearr_31458[(7)] = inst_31353__$1);

return statearr_31458;
})();
if(cljs.core.truth_(inst_31353__$1)){
var statearr_31459_31503 = state_31434__$1;
(statearr_31459_31503[(1)] = (5));

} else {
var statearr_31460_31504 = state_31434__$1;
(statearr_31460_31504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (23))){
var inst_31396 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31396)){
var statearr_31461_31505 = state_31434__$1;
(statearr_31461_31505[(1)] = (25));

} else {
var statearr_31462_31506 = state_31434__$1;
(statearr_31462_31506[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (35))){
var state_31434__$1 = state_31434;
var statearr_31463_31507 = state_31434__$1;
(statearr_31463_31507[(2)] = null);

(statearr_31463_31507[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (19))){
var inst_31391 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31391)){
var statearr_31464_31508 = state_31434__$1;
(statearr_31464_31508[(1)] = (22));

} else {
var statearr_31465_31509 = state_31434__$1;
(statearr_31465_31509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (11))){
var inst_31362 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31466_31510 = state_31434__$1;
(statearr_31466_31510[(2)] = inst_31362);

(statearr_31466_31510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31364 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(12),inst_31364);
} else {
if((state_val_31435 === (5))){
var inst_31355 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31434__$1 = state_31434;
var statearr_31467_31511 = state_31434__$1;
(statearr_31467_31511[(2)] = inst_31355);

(statearr_31467_31511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31382 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31382)){
var statearr_31468_31512 = state_31434__$1;
(statearr_31468_31512[(1)] = (18));

} else {
var statearr_31469_31513 = state_31434__$1;
(statearr_31469_31513[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (26))){
var inst_31406 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31406)){
var statearr_31470_31514 = state_31434__$1;
(statearr_31470_31514[(1)] = (30));

} else {
var statearr_31471_31515 = state_31434__$1;
(statearr_31471_31515[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (16))){
var inst_31374 = (state_31434[(2)]);
var inst_31375 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31376 = figwheel.client.format_messages.call(null,inst_31375);
var inst_31377 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31378 = figwheel.client.heads_up.display_error.call(null,inst_31376,inst_31377);
var state_31434__$1 = (function (){var statearr_31472 = state_31434;
(statearr_31472[(9)] = inst_31374);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(17),inst_31378);
} else {
if((state_val_31435 === (30))){
var inst_31408 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31409 = figwheel.client.heads_up.display_warning.call(null,inst_31408);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(33),inst_31409);
} else {
if((state_val_31435 === (10))){
var inst_31368 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31473_31516 = state_31434__$1;
(statearr_31473_31516[(2)] = inst_31368);

(statearr_31473_31516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (18))){
var inst_31384 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31385 = figwheel.client.format_messages.call(null,inst_31384);
var inst_31386 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31387 = figwheel.client.heads_up.display_error.call(null,inst_31385,inst_31386);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(21),inst_31387);
} else {
if((state_val_31435 === (37))){
var inst_31417 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31474_31517 = state_31434__$1;
(statearr_31474_31517[(2)] = inst_31417);

(statearr_31474_31517[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31360 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(11),inst_31360);
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
});})(c__21296__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21281__auto__,c__21296__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____1 = (function (state_31434){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e31479){if((e31479 instanceof Object)){
var ex__21285__auto__ = e31479;
var statearr_31480_31518 = state_31434;
(statearr_31480_31518[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31519 = state_31434;
state_31434 = G__31519;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,msg_hist,msg_names,msg))
})();
var state__21298__auto__ = (function (){var statearr_31481 = f__21297__auto__.call(null);
(statearr_31481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,msg_hist,msg_names,msg))
);

return c__21296__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21296__auto___31582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___31582,ch){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___31582,ch){
return (function (state_31565){
var state_val_31566 = (state_31565[(1)]);
if((state_val_31566 === (1))){
var state_31565__$1 = state_31565;
var statearr_31567_31583 = state_31565__$1;
(statearr_31567_31583[(2)] = null);

(statearr_31567_31583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (2))){
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31565__$1,(4),ch);
} else {
if((state_val_31566 === (3))){
var inst_31563 = (state_31565[(2)]);
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31565__$1,inst_31563);
} else {
if((state_val_31566 === (4))){
var inst_31553 = (state_31565[(7)]);
var inst_31553__$1 = (state_31565[(2)]);
var state_31565__$1 = (function (){var statearr_31568 = state_31565;
(statearr_31568[(7)] = inst_31553__$1);

return statearr_31568;
})();
if(cljs.core.truth_(inst_31553__$1)){
var statearr_31569_31584 = state_31565__$1;
(statearr_31569_31584[(1)] = (5));

} else {
var statearr_31570_31585 = state_31565__$1;
(statearr_31570_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (5))){
var inst_31553 = (state_31565[(7)]);
var inst_31555 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31553);
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31565__$1,(8),inst_31555);
} else {
if((state_val_31566 === (6))){
var state_31565__$1 = state_31565;
var statearr_31571_31586 = state_31565__$1;
(statearr_31571_31586[(2)] = null);

(statearr_31571_31586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (7))){
var inst_31561 = (state_31565[(2)]);
var state_31565__$1 = state_31565;
var statearr_31572_31587 = state_31565__$1;
(statearr_31572_31587[(2)] = inst_31561);

(statearr_31572_31587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (8))){
var inst_31557 = (state_31565[(2)]);
var state_31565__$1 = (function (){var statearr_31573 = state_31565;
(statearr_31573[(8)] = inst_31557);

return statearr_31573;
})();
var statearr_31574_31588 = state_31565__$1;
(statearr_31574_31588[(2)] = null);

(statearr_31574_31588[(1)] = (2));


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
});})(c__21296__auto___31582,ch))
;
return ((function (switch__21281__auto__,c__21296__auto___31582,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21282__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21282__auto____0 = (function (){
var statearr_31578 = [null,null,null,null,null,null,null,null,null];
(statearr_31578[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21282__auto__);

(statearr_31578[(1)] = (1));

return statearr_31578;
});
var figwheel$client$heads_up_plugin_$_state_machine__21282__auto____1 = (function (state_31565){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_31565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e31579){if((e31579 instanceof Object)){
var ex__21285__auto__ = e31579;
var statearr_31580_31589 = state_31565;
(statearr_31580_31589[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_31565;
state_31565 = G__31590;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21282__auto__ = function(state_31565){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21282__auto____1.call(this,state_31565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21282__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21282__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___31582,ch))
})();
var state__21298__auto__ = (function (){var statearr_31581 = f__21297__auto__.call(null);
(statearr_31581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___31582);

return statearr_31581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___31582,ch))
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
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_31611){
var state_val_31612 = (state_31611[(1)]);
if((state_val_31612 === (1))){
var inst_31606 = cljs.core.async.timeout.call(null,(3000));
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,(2),inst_31606);
} else {
if((state_val_31612 === (2))){
var inst_31608 = (state_31611[(2)]);
var inst_31609 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31611__$1 = (function (){var statearr_31613 = state_31611;
(statearr_31613[(7)] = inst_31608);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31611__$1,inst_31609);
} else {
return null;
}
}
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____0 = (function (){
var statearr_31617 = [null,null,null,null,null,null,null,null];
(statearr_31617[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__);

(statearr_31617[(1)] = (1));

return statearr_31617;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____1 = (function (state_31611){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_31611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e31618){if((e31618 instanceof Object)){
var ex__21285__auto__ = e31618;
var statearr_31619_31621 = state_31611;
(statearr_31619_31621[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31622 = state_31611;
state_31611 = G__31622;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21282__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_31620 = f__21297__auto__.call(null);
(statearr_31620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_31620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31623){
var map__31630 = p__31623;
var map__31630__$1 = ((((!((map__31630 == null)))?((((map__31630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);
var ed = map__31630__$1;
var formatted_exception = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31632_31636 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31633_31637 = null;
var count__31634_31638 = (0);
var i__31635_31639 = (0);
while(true){
if((i__31635_31639 < count__31634_31638)){
var msg_31640 = cljs.core._nth.call(null,chunk__31633_31637,i__31635_31639);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31640);

var G__31641 = seq__31632_31636;
var G__31642 = chunk__31633_31637;
var G__31643 = count__31634_31638;
var G__31644 = (i__31635_31639 + (1));
seq__31632_31636 = G__31641;
chunk__31633_31637 = G__31642;
count__31634_31638 = G__31643;
i__31635_31639 = G__31644;
continue;
} else {
var temp__4657__auto___31645 = cljs.core.seq.call(null,seq__31632_31636);
if(temp__4657__auto___31645){
var seq__31632_31646__$1 = temp__4657__auto___31645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31632_31646__$1)){
var c__19570__auto___31647 = cljs.core.chunk_first.call(null,seq__31632_31646__$1);
var G__31648 = cljs.core.chunk_rest.call(null,seq__31632_31646__$1);
var G__31649 = c__19570__auto___31647;
var G__31650 = cljs.core.count.call(null,c__19570__auto___31647);
var G__31651 = (0);
seq__31632_31636 = G__31648;
chunk__31633_31637 = G__31649;
count__31634_31638 = G__31650;
i__31635_31639 = G__31651;
continue;
} else {
var msg_31652 = cljs.core.first.call(null,seq__31632_31646__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31652);

var G__31653 = cljs.core.next.call(null,seq__31632_31646__$1);
var G__31654 = null;
var G__31655 = (0);
var G__31656 = (0);
seq__31632_31636 = G__31653;
chunk__31633_31637 = G__31654;
count__31634_31638 = G__31655;
i__31635_31639 = G__31656;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31657){
var map__31660 = p__31657;
var map__31660__$1 = ((((!((map__31660 == null)))?((((map__31660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31660):map__31660);
var w = map__31660__$1;
var message = cljs.core.get.call(null,map__31660__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31672 = cljs.core.seq.call(null,plugins);
var chunk__31673 = null;
var count__31674 = (0);
var i__31675 = (0);
while(true){
if((i__31675 < count__31674)){
var vec__31676 = cljs.core._nth.call(null,chunk__31673,i__31675);
var k = cljs.core.nth.call(null,vec__31676,(0),null);
var plugin = cljs.core.nth.call(null,vec__31676,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31682 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31672,chunk__31673,count__31674,i__31675,pl_31682,vec__31676,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31682.call(null,msg_hist);
});})(seq__31672,chunk__31673,count__31674,i__31675,pl_31682,vec__31676,k,plugin))
);
} else {
}

var G__31683 = seq__31672;
var G__31684 = chunk__31673;
var G__31685 = count__31674;
var G__31686 = (i__31675 + (1));
seq__31672 = G__31683;
chunk__31673 = G__31684;
count__31674 = G__31685;
i__31675 = G__31686;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31672);
if(temp__4657__auto__){
var seq__31672__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31672__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__31672__$1);
var G__31687 = cljs.core.chunk_rest.call(null,seq__31672__$1);
var G__31688 = c__19570__auto__;
var G__31689 = cljs.core.count.call(null,c__19570__auto__);
var G__31690 = (0);
seq__31672 = G__31687;
chunk__31673 = G__31688;
count__31674 = G__31689;
i__31675 = G__31690;
continue;
} else {
var vec__31679 = cljs.core.first.call(null,seq__31672__$1);
var k = cljs.core.nth.call(null,vec__31679,(0),null);
var plugin = cljs.core.nth.call(null,vec__31679,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31691 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31672,chunk__31673,count__31674,i__31675,pl_31691,vec__31679,k,plugin,seq__31672__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31691.call(null,msg_hist);
});})(seq__31672,chunk__31673,count__31674,i__31675,pl_31691,vec__31679,k,plugin,seq__31672__$1,temp__4657__auto__))
);
} else {
}

var G__31692 = cljs.core.next.call(null,seq__31672__$1);
var G__31693 = null;
var G__31694 = (0);
var G__31695 = (0);
seq__31672 = G__31692;
chunk__31673 = G__31693;
count__31674 = G__31694;
i__31675 = G__31695;
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
var args31696 = [];
var len__19864__auto___31699 = arguments.length;
var i__19865__auto___31700 = (0);
while(true){
if((i__19865__auto___31700 < len__19864__auto___31699)){
args31696.push((arguments[i__19865__auto___31700]));

var G__31701 = (i__19865__auto___31700 + (1));
i__19865__auto___31700 = G__31701;
continue;
} else {
}
break;
}

var G__31698 = args31696.length;
switch (G__31698) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31696.length)].join('')));

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
var len__19864__auto___31707 = arguments.length;
var i__19865__auto___31708 = (0);
while(true){
if((i__19865__auto___31708 < len__19864__auto___31707)){
args__19871__auto__.push((arguments[i__19865__auto___31708]));

var G__31709 = (i__19865__auto___31708 + (1));
i__19865__auto___31708 = G__31709;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31704){
var map__31705 = p__31704;
var map__31705__$1 = ((((!((map__31705 == null)))?((((map__31705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31705):map__31705);
var opts = map__31705__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31703){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31703));
});


//# sourceMappingURL=client.js.map?rel=1484862761802