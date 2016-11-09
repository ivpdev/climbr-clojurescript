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
var pred__23881 = cljs.core._EQ_;
var expr__23882 = (function (){var or__18742__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23885){if((e23885 instanceof Error)){
var e = e23885;
return false;
} else {
throw e23885;

}
}})();
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23881.call(null,"true",expr__23882))){
return true;
} else {
if(cljs.core.truth_(pred__23881.call(null,"false",expr__23882))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23882)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23887){if((e23887 instanceof Error)){
var e = e23887;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23887;

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
var args__19857__auto__ = [];
var len__19850__auto___23889 = arguments.length;
var i__19851__auto___23890 = (0);
while(true){
if((i__19851__auto___23890 < len__19850__auto___23889)){
args__19857__auto__.push((arguments[i__19851__auto___23890]));

var G__23891 = (i__19851__auto___23890 + (1));
i__19851__auto___23890 = G__23891;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23888){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23888));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23892){
var map__23895 = p__23892;
var map__23895__$1 = ((((!((map__23895 == null)))?((((map__23895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23895):map__23895);
var message = cljs.core.get.call(null,map__23895__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23895__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18742__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18730__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18730__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18730__auto__;
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
var c__20903__auto___24057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto___24057,ch){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto___24057,ch){
return (function (state_24026){
var state_val_24027 = (state_24026[(1)]);
if((state_val_24027 === (7))){
var inst_24022 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
var statearr_24028_24058 = state_24026__$1;
(statearr_24028_24058[(2)] = inst_24022);

(statearr_24028_24058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (1))){
var state_24026__$1 = state_24026;
var statearr_24029_24059 = state_24026__$1;
(statearr_24029_24059[(2)] = null);

(statearr_24029_24059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (4))){
var inst_23979 = (state_24026[(7)]);
var inst_23979__$1 = (state_24026[(2)]);
var state_24026__$1 = (function (){var statearr_24030 = state_24026;
(statearr_24030[(7)] = inst_23979__$1);

return statearr_24030;
})();
if(cljs.core.truth_(inst_23979__$1)){
var statearr_24031_24060 = state_24026__$1;
(statearr_24031_24060[(1)] = (5));

} else {
var statearr_24032_24061 = state_24026__$1;
(statearr_24032_24061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (15))){
var inst_23986 = (state_24026[(8)]);
var inst_24001 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23986);
var inst_24002 = cljs.core.first.call(null,inst_24001);
var inst_24003 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24002);
var inst_24004 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24003)].join('');
var inst_24005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24004);
var state_24026__$1 = state_24026;
var statearr_24033_24062 = state_24026__$1;
(statearr_24033_24062[(2)] = inst_24005);

(statearr_24033_24062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (13))){
var inst_24010 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
var statearr_24034_24063 = state_24026__$1;
(statearr_24034_24063[(2)] = inst_24010);

(statearr_24034_24063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (6))){
var state_24026__$1 = state_24026;
var statearr_24035_24064 = state_24026__$1;
(statearr_24035_24064[(2)] = null);

(statearr_24035_24064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (17))){
var inst_24008 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
var statearr_24036_24065 = state_24026__$1;
(statearr_24036_24065[(2)] = inst_24008);

(statearr_24036_24065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (3))){
var inst_24024 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24026__$1,inst_24024);
} else {
if((state_val_24027 === (12))){
var inst_23985 = (state_24026[(9)]);
var inst_23999 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23985,opts);
var state_24026__$1 = state_24026;
if(cljs.core.truth_(inst_23999)){
var statearr_24037_24066 = state_24026__$1;
(statearr_24037_24066[(1)] = (15));

} else {
var statearr_24038_24067 = state_24026__$1;
(statearr_24038_24067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (2))){
var state_24026__$1 = state_24026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24026__$1,(4),ch);
} else {
if((state_val_24027 === (11))){
var inst_23986 = (state_24026[(8)]);
var inst_23991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23992 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23986);
var inst_23993 = cljs.core.async.timeout.call(null,(1000));
var inst_23994 = [inst_23992,inst_23993];
var inst_23995 = (new cljs.core.PersistentVector(null,2,(5),inst_23991,inst_23994,null));
var state_24026__$1 = state_24026;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24026__$1,(14),inst_23995);
} else {
if((state_val_24027 === (9))){
var inst_23986 = (state_24026[(8)]);
var inst_24012 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24013 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23986);
var inst_24014 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24013);
var inst_24015 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24014)].join('');
var inst_24016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24015);
var state_24026__$1 = (function (){var statearr_24039 = state_24026;
(statearr_24039[(10)] = inst_24012);

return statearr_24039;
})();
var statearr_24040_24068 = state_24026__$1;
(statearr_24040_24068[(2)] = inst_24016);

(statearr_24040_24068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (5))){
var inst_23979 = (state_24026[(7)]);
var inst_23981 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23982 = (new cljs.core.PersistentArrayMap(null,2,inst_23981,null));
var inst_23983 = (new cljs.core.PersistentHashSet(null,inst_23982,null));
var inst_23984 = figwheel.client.focus_msgs.call(null,inst_23983,inst_23979);
var inst_23985 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23984);
var inst_23986 = cljs.core.first.call(null,inst_23984);
var inst_23987 = figwheel.client.autoload_QMARK_.call(null);
var state_24026__$1 = (function (){var statearr_24041 = state_24026;
(statearr_24041[(8)] = inst_23986);

(statearr_24041[(9)] = inst_23985);

return statearr_24041;
})();
if(cljs.core.truth_(inst_23987)){
var statearr_24042_24069 = state_24026__$1;
(statearr_24042_24069[(1)] = (8));

} else {
var statearr_24043_24070 = state_24026__$1;
(statearr_24043_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (14))){
var inst_23997 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
var statearr_24044_24071 = state_24026__$1;
(statearr_24044_24071[(2)] = inst_23997);

(statearr_24044_24071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (16))){
var state_24026__$1 = state_24026;
var statearr_24045_24072 = state_24026__$1;
(statearr_24045_24072[(2)] = null);

(statearr_24045_24072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (10))){
var inst_24018 = (state_24026[(2)]);
var state_24026__$1 = (function (){var statearr_24046 = state_24026;
(statearr_24046[(11)] = inst_24018);

return statearr_24046;
})();
var statearr_24047_24073 = state_24026__$1;
(statearr_24047_24073[(2)] = null);

(statearr_24047_24073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (8))){
var inst_23985 = (state_24026[(9)]);
var inst_23989 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23985,opts);
var state_24026__$1 = state_24026;
if(cljs.core.truth_(inst_23989)){
var statearr_24048_24074 = state_24026__$1;
(statearr_24048_24074[(1)] = (11));

} else {
var statearr_24049_24075 = state_24026__$1;
(statearr_24049_24075[(1)] = (12));

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
});})(c__20903__auto___24057,ch))
;
return ((function (switch__20882__auto__,c__20903__auto___24057,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_24053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24053[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__);

(statearr_24053[(1)] = (1));

return statearr_24053;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1 = (function (state_24026){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_24026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e24054){if((e24054 instanceof Object)){
var ex__20886__auto__ = e24054;
var statearr_24055_24076 = state_24026;
(statearr_24055_24076[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24077 = state_24026;
state_24026 = G__24077;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__ = function(state_24026){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1.call(this,state_24026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto___24057,ch))
})();
var state__20905__auto__ = (function (){var statearr_24056 = f__20904__auto__.call(null);
(statearr_24056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto___24057);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto___24057,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24078_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24078_SHARP_));
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
var base_path_24085 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24085){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24084 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24084;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24083;
}}catch (e24082){if((e24082 instanceof Error)){
var e = e24082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24085], null));
} else {
var e = e24082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24085))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24086){
var map__24095 = p__24086;
var map__24095__$1 = ((((!((map__24095 == null)))?((((map__24095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24095):map__24095);
var opts = map__24095__$1;
var build_id = cljs.core.get.call(null,map__24095__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24095,map__24095__$1,opts,build_id){
return (function (p__24097){
var vec__24098 = p__24097;
var seq__24099 = cljs.core.seq.call(null,vec__24098);
var first__24100 = cljs.core.first.call(null,seq__24099);
var seq__24099__$1 = cljs.core.next.call(null,seq__24099);
var map__24101 = first__24100;
var map__24101__$1 = ((((!((map__24101 == null)))?((((map__24101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24101):map__24101);
var msg = map__24101__$1;
var msg_name = cljs.core.get.call(null,map__24101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24099__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24098,seq__24099,first__24100,seq__24099__$1,map__24101,map__24101__$1,msg,msg_name,_,map__24095,map__24095__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24098,seq__24099,first__24100,seq__24099__$1,map__24101,map__24101__$1,msg,msg_name,_,map__24095,map__24095__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24095,map__24095__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24109){
var vec__24110 = p__24109;
var seq__24111 = cljs.core.seq.call(null,vec__24110);
var first__24112 = cljs.core.first.call(null,seq__24111);
var seq__24111__$1 = cljs.core.next.call(null,seq__24111);
var map__24113 = first__24112;
var map__24113__$1 = ((((!((map__24113 == null)))?((((map__24113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24113):map__24113);
var msg = map__24113__$1;
var msg_name = cljs.core.get.call(null,map__24113__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24111__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24115){
var map__24127 = p__24115;
var map__24127__$1 = ((((!((map__24127 == null)))?((((map__24127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24127):map__24127);
var on_compile_warning = cljs.core.get.call(null,map__24127__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24127__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24127,map__24127__$1,on_compile_warning,on_compile_fail){
return (function (p__24129){
var vec__24130 = p__24129;
var seq__24131 = cljs.core.seq.call(null,vec__24130);
var first__24132 = cljs.core.first.call(null,seq__24131);
var seq__24131__$1 = cljs.core.next.call(null,seq__24131);
var map__24133 = first__24132;
var map__24133__$1 = ((((!((map__24133 == null)))?((((map__24133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24133):map__24133);
var msg = map__24133__$1;
var msg_name = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24131__$1;
var pred__24135 = cljs.core._EQ_;
var expr__24136 = msg_name;
if(cljs.core.truth_(pred__24135.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24136))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24135.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24136))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24127,map__24127__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__,msg_hist,msg_names,msg){
return (function (state_24352){
var state_val_24353 = (state_24352[(1)]);
if((state_val_24353 === (7))){
var inst_24276 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24276)){
var statearr_24354_24400 = state_24352__$1;
(statearr_24354_24400[(1)] = (8));

} else {
var statearr_24355_24401 = state_24352__$1;
(statearr_24355_24401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (20))){
var inst_24346 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24356_24402 = state_24352__$1;
(statearr_24356_24402[(2)] = inst_24346);

(statearr_24356_24402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (27))){
var inst_24342 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24357_24403 = state_24352__$1;
(statearr_24357_24403[(2)] = inst_24342);

(statearr_24357_24403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (1))){
var inst_24269 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24269)){
var statearr_24358_24404 = state_24352__$1;
(statearr_24358_24404[(1)] = (2));

} else {
var statearr_24359_24405 = state_24352__$1;
(statearr_24359_24405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (24))){
var inst_24344 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24360_24406 = state_24352__$1;
(statearr_24360_24406[(2)] = inst_24344);

(statearr_24360_24406[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (4))){
var inst_24350 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24352__$1,inst_24350);
} else {
if((state_val_24353 === (15))){
var inst_24348 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24361_24407 = state_24352__$1;
(statearr_24361_24407[(2)] = inst_24348);

(statearr_24361_24407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (21))){
var inst_24307 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24362_24408 = state_24352__$1;
(statearr_24362_24408[(2)] = inst_24307);

(statearr_24362_24408[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (31))){
var inst_24331 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24331)){
var statearr_24363_24409 = state_24352__$1;
(statearr_24363_24409[(1)] = (34));

} else {
var statearr_24364_24410 = state_24352__$1;
(statearr_24364_24410[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (32))){
var inst_24340 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24365_24411 = state_24352__$1;
(statearr_24365_24411[(2)] = inst_24340);

(statearr_24365_24411[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (33))){
var inst_24329 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24366_24412 = state_24352__$1;
(statearr_24366_24412[(2)] = inst_24329);

(statearr_24366_24412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (13))){
var inst_24290 = figwheel.client.heads_up.clear.call(null);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(16),inst_24290);
} else {
if((state_val_24353 === (22))){
var inst_24311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24312 = figwheel.client.heads_up.append_message.call(null,inst_24311);
var state_24352__$1 = state_24352;
var statearr_24367_24413 = state_24352__$1;
(statearr_24367_24413[(2)] = inst_24312);

(statearr_24367_24413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (36))){
var inst_24338 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24368_24414 = state_24352__$1;
(statearr_24368_24414[(2)] = inst_24338);

(statearr_24368_24414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (29))){
var inst_24322 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24369_24415 = state_24352__$1;
(statearr_24369_24415[(2)] = inst_24322);

(statearr_24369_24415[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (6))){
var inst_24271 = (state_24352[(7)]);
var state_24352__$1 = state_24352;
var statearr_24370_24416 = state_24352__$1;
(statearr_24370_24416[(2)] = inst_24271);

(statearr_24370_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (28))){
var inst_24318 = (state_24352[(2)]);
var inst_24319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24320 = figwheel.client.heads_up.display_warning.call(null,inst_24319);
var state_24352__$1 = (function (){var statearr_24371 = state_24352;
(statearr_24371[(8)] = inst_24318);

return statearr_24371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(29),inst_24320);
} else {
if((state_val_24353 === (25))){
var inst_24316 = figwheel.client.heads_up.clear.call(null);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(28),inst_24316);
} else {
if((state_val_24353 === (34))){
var inst_24333 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(37),inst_24333);
} else {
if((state_val_24353 === (17))){
var inst_24298 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24372_24417 = state_24352__$1;
(statearr_24372_24417[(2)] = inst_24298);

(statearr_24372_24417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (3))){
var inst_24288 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24288)){
var statearr_24373_24418 = state_24352__$1;
(statearr_24373_24418[(1)] = (13));

} else {
var statearr_24374_24419 = state_24352__$1;
(statearr_24374_24419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (12))){
var inst_24284 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24375_24420 = state_24352__$1;
(statearr_24375_24420[(2)] = inst_24284);

(statearr_24375_24420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (2))){
var inst_24271 = (state_24352[(7)]);
var inst_24271__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24352__$1 = (function (){var statearr_24376 = state_24352;
(statearr_24376[(7)] = inst_24271__$1);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24271__$1)){
var statearr_24377_24421 = state_24352__$1;
(statearr_24377_24421[(1)] = (5));

} else {
var statearr_24378_24422 = state_24352__$1;
(statearr_24378_24422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (23))){
var inst_24314 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24314)){
var statearr_24379_24423 = state_24352__$1;
(statearr_24379_24423[(1)] = (25));

} else {
var statearr_24380_24424 = state_24352__$1;
(statearr_24380_24424[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (35))){
var state_24352__$1 = state_24352;
var statearr_24381_24425 = state_24352__$1;
(statearr_24381_24425[(2)] = null);

(statearr_24381_24425[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (19))){
var inst_24309 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24309)){
var statearr_24382_24426 = state_24352__$1;
(statearr_24382_24426[(1)] = (22));

} else {
var statearr_24383_24427 = state_24352__$1;
(statearr_24383_24427[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (11))){
var inst_24280 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24384_24428 = state_24352__$1;
(statearr_24384_24428[(2)] = inst_24280);

(statearr_24384_24428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (9))){
var inst_24282 = figwheel.client.heads_up.clear.call(null);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(12),inst_24282);
} else {
if((state_val_24353 === (5))){
var inst_24273 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24352__$1 = state_24352;
var statearr_24385_24429 = state_24352__$1;
(statearr_24385_24429[(2)] = inst_24273);

(statearr_24385_24429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (14))){
var inst_24300 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24300)){
var statearr_24386_24430 = state_24352__$1;
(statearr_24386_24430[(1)] = (18));

} else {
var statearr_24387_24431 = state_24352__$1;
(statearr_24387_24431[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (26))){
var inst_24324 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24324)){
var statearr_24388_24432 = state_24352__$1;
(statearr_24388_24432[(1)] = (30));

} else {
var statearr_24389_24433 = state_24352__$1;
(statearr_24389_24433[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (16))){
var inst_24292 = (state_24352[(2)]);
var inst_24293 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24294 = figwheel.client.format_messages.call(null,inst_24293);
var inst_24295 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24296 = figwheel.client.heads_up.display_error.call(null,inst_24294,inst_24295);
var state_24352__$1 = (function (){var statearr_24390 = state_24352;
(statearr_24390[(9)] = inst_24292);

return statearr_24390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(17),inst_24296);
} else {
if((state_val_24353 === (30))){
var inst_24326 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24327 = figwheel.client.heads_up.display_warning.call(null,inst_24326);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(33),inst_24327);
} else {
if((state_val_24353 === (10))){
var inst_24286 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24391_24434 = state_24352__$1;
(statearr_24391_24434[(2)] = inst_24286);

(statearr_24391_24434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (18))){
var inst_24302 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24303 = figwheel.client.format_messages.call(null,inst_24302);
var inst_24304 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24305 = figwheel.client.heads_up.display_error.call(null,inst_24303,inst_24304);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(21),inst_24305);
} else {
if((state_val_24353 === (37))){
var inst_24335 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24392_24435 = state_24352__$1;
(statearr_24392_24435[(2)] = inst_24335);

(statearr_24392_24435[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (8))){
var inst_24278 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(11),inst_24278);
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
});})(c__20903__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20882__auto__,c__20903__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1 = (function (state_24352){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_24352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object)){
var ex__20886__auto__ = e24397;
var statearr_24398_24436 = state_24352;
(statearr_24398_24436[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24437 = state_24352;
state_24352 = G__24437;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__ = function(state_24352){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1.call(this,state_24352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__,msg_hist,msg_names,msg))
})();
var state__20905__auto__ = (function (){var statearr_24399 = f__20904__auto__.call(null);
(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_24399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__,msg_hist,msg_names,msg))
);

return c__20903__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20903__auto___24500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto___24500,ch){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto___24500,ch){
return (function (state_24483){
var state_val_24484 = (state_24483[(1)]);
if((state_val_24484 === (1))){
var state_24483__$1 = state_24483;
var statearr_24485_24501 = state_24483__$1;
(statearr_24485_24501[(2)] = null);

(statearr_24485_24501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (2))){
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(4),ch);
} else {
if((state_val_24484 === (3))){
var inst_24481 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24483__$1,inst_24481);
} else {
if((state_val_24484 === (4))){
var inst_24471 = (state_24483[(7)]);
var inst_24471__$1 = (state_24483[(2)]);
var state_24483__$1 = (function (){var statearr_24486 = state_24483;
(statearr_24486[(7)] = inst_24471__$1);

return statearr_24486;
})();
if(cljs.core.truth_(inst_24471__$1)){
var statearr_24487_24502 = state_24483__$1;
(statearr_24487_24502[(1)] = (5));

} else {
var statearr_24488_24503 = state_24483__$1;
(statearr_24488_24503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (5))){
var inst_24471 = (state_24483[(7)]);
var inst_24473 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24471);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(8),inst_24473);
} else {
if((state_val_24484 === (6))){
var state_24483__$1 = state_24483;
var statearr_24489_24504 = state_24483__$1;
(statearr_24489_24504[(2)] = null);

(statearr_24489_24504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (7))){
var inst_24479 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24490_24505 = state_24483__$1;
(statearr_24490_24505[(2)] = inst_24479);

(statearr_24490_24505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (8))){
var inst_24475 = (state_24483[(2)]);
var state_24483__$1 = (function (){var statearr_24491 = state_24483;
(statearr_24491[(8)] = inst_24475);

return statearr_24491;
})();
var statearr_24492_24506 = state_24483__$1;
(statearr_24492_24506[(2)] = null);

(statearr_24492_24506[(1)] = (2));


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
});})(c__20903__auto___24500,ch))
;
return ((function (switch__20882__auto__,c__20903__auto___24500,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_24496 = [null,null,null,null,null,null,null,null,null];
(statearr_24496[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20883__auto__);

(statearr_24496[(1)] = (1));

return statearr_24496;
});
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1 = (function (state_24483){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_24483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e24497){if((e24497 instanceof Object)){
var ex__20886__auto__ = e24497;
var statearr_24498_24507 = state_24483;
(statearr_24498_24507[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24483;
state_24483 = G__24508;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__ = function(state_24483){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1.call(this,state_24483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto___24500,ch))
})();
var state__20905__auto__ = (function (){var statearr_24499 = f__20904__auto__.call(null);
(statearr_24499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto___24500);

return statearr_24499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto___24500,ch))
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
var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__){
return (function (state_24529){
var state_val_24530 = (state_24529[(1)]);
if((state_val_24530 === (1))){
var inst_24524 = cljs.core.async.timeout.call(null,(3000));
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24529__$1,(2),inst_24524);
} else {
if((state_val_24530 === (2))){
var inst_24526 = (state_24529[(2)]);
var inst_24527 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24529__$1 = (function (){var statearr_24531 = state_24529;
(statearr_24531[(7)] = inst_24526);

return statearr_24531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24529__$1,inst_24527);
} else {
return null;
}
}
});})(c__20903__auto__))
;
return ((function (switch__20882__auto__,c__20903__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_24535 = [null,null,null,null,null,null,null,null];
(statearr_24535[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__);

(statearr_24535[(1)] = (1));

return statearr_24535;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1 = (function (state_24529){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_24529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e24536){if((e24536 instanceof Object)){
var ex__20886__auto__ = e24536;
var statearr_24537_24539 = state_24529;
(statearr_24537_24539[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24540 = state_24529;
state_24529 = G__24540;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__ = function(state_24529){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1.call(this,state_24529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__))
})();
var state__20905__auto__ = (function (){var statearr_24538 = f__20904__auto__.call(null);
(statearr_24538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_24538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__))
);

return c__20903__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24541){
var map__24548 = p__24541;
var map__24548__$1 = ((((!((map__24548 == null)))?((((map__24548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24548):map__24548);
var ed = map__24548__$1;
var formatted_exception = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24550_24554 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24551_24555 = null;
var count__24552_24556 = (0);
var i__24553_24557 = (0);
while(true){
if((i__24553_24557 < count__24552_24556)){
var msg_24558 = cljs.core._nth.call(null,chunk__24551_24555,i__24553_24557);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24558);

var G__24559 = seq__24550_24554;
var G__24560 = chunk__24551_24555;
var G__24561 = count__24552_24556;
var G__24562 = (i__24553_24557 + (1));
seq__24550_24554 = G__24559;
chunk__24551_24555 = G__24560;
count__24552_24556 = G__24561;
i__24553_24557 = G__24562;
continue;
} else {
var temp__4657__auto___24563 = cljs.core.seq.call(null,seq__24550_24554);
if(temp__4657__auto___24563){
var seq__24550_24564__$1 = temp__4657__auto___24563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24550_24564__$1)){
var c__19556__auto___24565 = cljs.core.chunk_first.call(null,seq__24550_24564__$1);
var G__24566 = cljs.core.chunk_rest.call(null,seq__24550_24564__$1);
var G__24567 = c__19556__auto___24565;
var G__24568 = cljs.core.count.call(null,c__19556__auto___24565);
var G__24569 = (0);
seq__24550_24554 = G__24566;
chunk__24551_24555 = G__24567;
count__24552_24556 = G__24568;
i__24553_24557 = G__24569;
continue;
} else {
var msg_24570 = cljs.core.first.call(null,seq__24550_24564__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24570);

var G__24571 = cljs.core.next.call(null,seq__24550_24564__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24550_24554 = G__24571;
chunk__24551_24555 = G__24572;
count__24552_24556 = G__24573;
i__24553_24557 = G__24574;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24575){
var map__24578 = p__24575;
var map__24578__$1 = ((((!((map__24578 == null)))?((((map__24578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24578):map__24578);
var w = map__24578__$1;
var message = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18730__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18730__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18730__auto__;
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
var seq__24590 = cljs.core.seq.call(null,plugins);
var chunk__24591 = null;
var count__24592 = (0);
var i__24593 = (0);
while(true){
if((i__24593 < count__24592)){
var vec__24594 = cljs.core._nth.call(null,chunk__24591,i__24593);
var k = cljs.core.nth.call(null,vec__24594,(0),null);
var plugin = cljs.core.nth.call(null,vec__24594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24600 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24590,chunk__24591,count__24592,i__24593,pl_24600,vec__24594,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24600.call(null,msg_hist);
});})(seq__24590,chunk__24591,count__24592,i__24593,pl_24600,vec__24594,k,plugin))
);
} else {
}

var G__24601 = seq__24590;
var G__24602 = chunk__24591;
var G__24603 = count__24592;
var G__24604 = (i__24593 + (1));
seq__24590 = G__24601;
chunk__24591 = G__24602;
count__24592 = G__24603;
i__24593 = G__24604;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24590);
if(temp__4657__auto__){
var seq__24590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24590__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__24590__$1);
var G__24605 = cljs.core.chunk_rest.call(null,seq__24590__$1);
var G__24606 = c__19556__auto__;
var G__24607 = cljs.core.count.call(null,c__19556__auto__);
var G__24608 = (0);
seq__24590 = G__24605;
chunk__24591 = G__24606;
count__24592 = G__24607;
i__24593 = G__24608;
continue;
} else {
var vec__24597 = cljs.core.first.call(null,seq__24590__$1);
var k = cljs.core.nth.call(null,vec__24597,(0),null);
var plugin = cljs.core.nth.call(null,vec__24597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24609 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24590,chunk__24591,count__24592,i__24593,pl_24609,vec__24597,k,plugin,seq__24590__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24609.call(null,msg_hist);
});})(seq__24590,chunk__24591,count__24592,i__24593,pl_24609,vec__24597,k,plugin,seq__24590__$1,temp__4657__auto__))
);
} else {
}

var G__24610 = cljs.core.next.call(null,seq__24590__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24590 = G__24610;
chunk__24591 = G__24611;
count__24592 = G__24612;
i__24593 = G__24613;
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
var args24614 = [];
var len__19850__auto___24617 = arguments.length;
var i__19851__auto___24618 = (0);
while(true){
if((i__19851__auto___24618 < len__19850__auto___24617)){
args24614.push((arguments[i__19851__auto___24618]));

var G__24619 = (i__19851__auto___24618 + (1));
i__19851__auto___24618 = G__24619;
continue;
} else {
}
break;
}

var G__24616 = args24614.length;
switch (G__24616) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24614.length)].join('')));

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
var args__19857__auto__ = [];
var len__19850__auto___24625 = arguments.length;
var i__19851__auto___24626 = (0);
while(true){
if((i__19851__auto___24626 < len__19850__auto___24625)){
args__19857__auto__.push((arguments[i__19851__auto___24626]));

var G__24627 = (i__19851__auto___24626 + (1));
i__19851__auto___24626 = G__24627;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24622){
var map__24623 = p__24622;
var map__24623__$1 = ((((!((map__24623 == null)))?((((map__24623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24623):map__24623);
var opts = map__24623__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24621){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24621));
});


//# sourceMappingURL=client.js.map?rel=1478625923500