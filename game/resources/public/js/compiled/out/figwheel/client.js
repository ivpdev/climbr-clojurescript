// Compiled by ClojureScript 1.7.170 {}
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
var pred__36795 = cljs.core._EQ_;
var expr__36796 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e36799){if((e36799 instanceof Error)){
var e = e36799;
return false;
} else {
throw e36799;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36795.call(null,"true",expr__36796))){
return true;
} else {
if(cljs.core.truth_(pred__36795.call(null,"false",expr__36796))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36796)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36801){if((e36801 instanceof Error)){
var e = e36801;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36801;

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
var args__17870__auto__ = [];
var len__17863__auto___36803 = arguments.length;
var i__17864__auto___36804 = (0);
while(true){
if((i__17864__auto___36804 < len__17863__auto___36803)){
args__17870__auto__.push((arguments[i__17864__auto___36804]));

var G__36805 = (i__17864__auto___36804 + (1));
i__17864__auto___36804 = G__36805;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq36802){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36802));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36806){
var map__36809 = p__36806;
var map__36809__$1 = ((((!((map__36809 == null)))?((((map__36809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36809):map__36809);
var message = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
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
var c__18830__auto___36971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___36971,ch){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___36971,ch){
return (function (state_36940){
var state_val_36941 = (state_36940[(1)]);
if((state_val_36941 === (7))){
var inst_36936 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36942_36972 = state_36940__$1;
(statearr_36942_36972[(2)] = inst_36936);

(statearr_36942_36972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (1))){
var state_36940__$1 = state_36940;
var statearr_36943_36973 = state_36940__$1;
(statearr_36943_36973[(2)] = null);

(statearr_36943_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (4))){
var inst_36893 = (state_36940[(7)]);
var inst_36893__$1 = (state_36940[(2)]);
var state_36940__$1 = (function (){var statearr_36944 = state_36940;
(statearr_36944[(7)] = inst_36893__$1);

return statearr_36944;
})();
if(cljs.core.truth_(inst_36893__$1)){
var statearr_36945_36974 = state_36940__$1;
(statearr_36945_36974[(1)] = (5));

} else {
var statearr_36946_36975 = state_36940__$1;
(statearr_36946_36975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (15))){
var inst_36900 = (state_36940[(8)]);
var inst_36915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36900);
var inst_36916 = cljs.core.first.call(null,inst_36915);
var inst_36917 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36916);
var inst_36918 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36917)].join('');
var inst_36919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36918);
var state_36940__$1 = state_36940;
var statearr_36947_36976 = state_36940__$1;
(statearr_36947_36976[(2)] = inst_36919);

(statearr_36947_36976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (13))){
var inst_36924 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36948_36977 = state_36940__$1;
(statearr_36948_36977[(2)] = inst_36924);

(statearr_36948_36977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (6))){
var state_36940__$1 = state_36940;
var statearr_36949_36978 = state_36940__$1;
(statearr_36949_36978[(2)] = null);

(statearr_36949_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (17))){
var inst_36922 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36950_36979 = state_36940__$1;
(statearr_36950_36979[(2)] = inst_36922);

(statearr_36950_36979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (3))){
var inst_36938 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36940__$1,inst_36938);
} else {
if((state_val_36941 === (12))){
var inst_36899 = (state_36940[(9)]);
var inst_36913 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36899,opts);
var state_36940__$1 = state_36940;
if(cljs.core.truth_(inst_36913)){
var statearr_36951_36980 = state_36940__$1;
(statearr_36951_36980[(1)] = (15));

} else {
var statearr_36952_36981 = state_36940__$1;
(statearr_36952_36981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (2))){
var state_36940__$1 = state_36940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36940__$1,(4),ch);
} else {
if((state_val_36941 === (11))){
var inst_36900 = (state_36940[(8)]);
var inst_36905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36906 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36900);
var inst_36907 = cljs.core.async.timeout.call(null,(1000));
var inst_36908 = [inst_36906,inst_36907];
var inst_36909 = (new cljs.core.PersistentVector(null,2,(5),inst_36905,inst_36908,null));
var state_36940__$1 = state_36940;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36940__$1,(14),inst_36909);
} else {
if((state_val_36941 === (9))){
var inst_36900 = (state_36940[(8)]);
var inst_36926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36927 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36900);
var inst_36928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36927);
var inst_36929 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36928)].join('');
var inst_36930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36929);
var state_36940__$1 = (function (){var statearr_36953 = state_36940;
(statearr_36953[(10)] = inst_36926);

return statearr_36953;
})();
var statearr_36954_36982 = state_36940__$1;
(statearr_36954_36982[(2)] = inst_36930);

(statearr_36954_36982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (5))){
var inst_36893 = (state_36940[(7)]);
var inst_36895 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36896 = (new cljs.core.PersistentArrayMap(null,2,inst_36895,null));
var inst_36897 = (new cljs.core.PersistentHashSet(null,inst_36896,null));
var inst_36898 = figwheel.client.focus_msgs.call(null,inst_36897,inst_36893);
var inst_36899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36898);
var inst_36900 = cljs.core.first.call(null,inst_36898);
var inst_36901 = figwheel.client.autoload_QMARK_.call(null);
var state_36940__$1 = (function (){var statearr_36955 = state_36940;
(statearr_36955[(8)] = inst_36900);

(statearr_36955[(9)] = inst_36899);

return statearr_36955;
})();
if(cljs.core.truth_(inst_36901)){
var statearr_36956_36983 = state_36940__$1;
(statearr_36956_36983[(1)] = (8));

} else {
var statearr_36957_36984 = state_36940__$1;
(statearr_36957_36984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (14))){
var inst_36911 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36958_36985 = state_36940__$1;
(statearr_36958_36985[(2)] = inst_36911);

(statearr_36958_36985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (16))){
var state_36940__$1 = state_36940;
var statearr_36959_36986 = state_36940__$1;
(statearr_36959_36986[(2)] = null);

(statearr_36959_36986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (10))){
var inst_36932 = (state_36940[(2)]);
var state_36940__$1 = (function (){var statearr_36960 = state_36940;
(statearr_36960[(11)] = inst_36932);

return statearr_36960;
})();
var statearr_36961_36987 = state_36940__$1;
(statearr_36961_36987[(2)] = null);

(statearr_36961_36987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (8))){
var inst_36899 = (state_36940[(9)]);
var inst_36903 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36899,opts);
var state_36940__$1 = state_36940;
if(cljs.core.truth_(inst_36903)){
var statearr_36962_36988 = state_36940__$1;
(statearr_36962_36988[(1)] = (11));

} else {
var statearr_36963_36989 = state_36940__$1;
(statearr_36963_36989[(1)] = (12));

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
});})(c__18830__auto___36971,ch))
;
return ((function (switch__18809__auto__,c__18830__auto___36971,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____0 = (function (){
var statearr_36967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36967[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__);

(statearr_36967[(1)] = (1));

return statearr_36967;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____1 = (function (state_36940){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_36940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e36968){if((e36968 instanceof Object)){
var ex__18813__auto__ = e36968;
var statearr_36969_36990 = state_36940;
(statearr_36969_36990[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36991 = state_36940;
state_36940 = G__36991;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__ = function(state_36940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____1.call(this,state_36940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18810__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___36971,ch))
})();
var state__18832__auto__ = (function (){var statearr_36970 = f__18831__auto__.call(null);
(statearr_36970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___36971);

return statearr_36970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___36971,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36992_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36992_SHARP_));
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
var base_path_36999 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36999){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_36997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36998 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36998;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36997;
}}catch (e36996){if((e36996 instanceof Error)){
var e = e36996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36999], null));
} else {
var e = e36996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36999))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37000){
var map__37007 = p__37000;
var map__37007__$1 = ((((!((map__37007 == null)))?((((map__37007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37007):map__37007);
var opts = map__37007__$1;
var build_id = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37007,map__37007__$1,opts,build_id){
return (function (p__37009){
var vec__37010 = p__37009;
var map__37011 = cljs.core.nth.call(null,vec__37010,(0),null);
var map__37011__$1 = ((((!((map__37011 == null)))?((((map__37011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37011):map__37011);
var msg = map__37011__$1;
var msg_name = cljs.core.get.call(null,map__37011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37010,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37010,map__37011,map__37011__$1,msg,msg_name,_,map__37007,map__37007__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37010,map__37011,map__37011__$1,msg,msg_name,_,map__37007,map__37007__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37007,map__37007__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37017){
var vec__37018 = p__37017;
var map__37019 = cljs.core.nth.call(null,vec__37018,(0),null);
var map__37019__$1 = ((((!((map__37019 == null)))?((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37019):map__37019);
var msg = map__37019__$1;
var msg_name = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37018,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37021){
var map__37031 = p__37021;
var map__37031__$1 = ((((!((map__37031 == null)))?((((map__37031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37031):map__37031);
var on_compile_warning = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37031,map__37031__$1,on_compile_warning,on_compile_fail){
return (function (p__37033){
var vec__37034 = p__37033;
var map__37035 = cljs.core.nth.call(null,vec__37034,(0),null);
var map__37035__$1 = ((((!((map__37035 == null)))?((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37035):map__37035);
var msg = map__37035__$1;
var msg_name = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37034,(1));
var pred__37037 = cljs.core._EQ_;
var expr__37038 = msg_name;
if(cljs.core.truth_(pred__37037.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37038))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37037.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37038))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37031,map__37031__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,msg_hist,msg_names,msg){
return (function (state_37254){
var state_val_37255 = (state_37254[(1)]);
if((state_val_37255 === (7))){
var inst_37178 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37178)){
var statearr_37256_37302 = state_37254__$1;
(statearr_37256_37302[(1)] = (8));

} else {
var statearr_37257_37303 = state_37254__$1;
(statearr_37257_37303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (20))){
var inst_37248 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37258_37304 = state_37254__$1;
(statearr_37258_37304[(2)] = inst_37248);

(statearr_37258_37304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (27))){
var inst_37244 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37259_37305 = state_37254__$1;
(statearr_37259_37305[(2)] = inst_37244);

(statearr_37259_37305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (1))){
var inst_37171 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37171)){
var statearr_37260_37306 = state_37254__$1;
(statearr_37260_37306[(1)] = (2));

} else {
var statearr_37261_37307 = state_37254__$1;
(statearr_37261_37307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (24))){
var inst_37246 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37262_37308 = state_37254__$1;
(statearr_37262_37308[(2)] = inst_37246);

(statearr_37262_37308[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (4))){
var inst_37252 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37254__$1,inst_37252);
} else {
if((state_val_37255 === (15))){
var inst_37250 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37263_37309 = state_37254__$1;
(statearr_37263_37309[(2)] = inst_37250);

(statearr_37263_37309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (21))){
var inst_37209 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37264_37310 = state_37254__$1;
(statearr_37264_37310[(2)] = inst_37209);

(statearr_37264_37310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (31))){
var inst_37233 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37233)){
var statearr_37265_37311 = state_37254__$1;
(statearr_37265_37311[(1)] = (34));

} else {
var statearr_37266_37312 = state_37254__$1;
(statearr_37266_37312[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (32))){
var inst_37242 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37267_37313 = state_37254__$1;
(statearr_37267_37313[(2)] = inst_37242);

(statearr_37267_37313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (33))){
var inst_37231 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37268_37314 = state_37254__$1;
(statearr_37268_37314[(2)] = inst_37231);

(statearr_37268_37314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (13))){
var inst_37192 = figwheel.client.heads_up.clear.call(null);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(16),inst_37192);
} else {
if((state_val_37255 === (22))){
var inst_37213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37214 = figwheel.client.heads_up.append_message.call(null,inst_37213);
var state_37254__$1 = state_37254;
var statearr_37269_37315 = state_37254__$1;
(statearr_37269_37315[(2)] = inst_37214);

(statearr_37269_37315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (36))){
var inst_37240 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37270_37316 = state_37254__$1;
(statearr_37270_37316[(2)] = inst_37240);

(statearr_37270_37316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (29))){
var inst_37224 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37271_37317 = state_37254__$1;
(statearr_37271_37317[(2)] = inst_37224);

(statearr_37271_37317[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (6))){
var inst_37173 = (state_37254[(7)]);
var state_37254__$1 = state_37254;
var statearr_37272_37318 = state_37254__$1;
(statearr_37272_37318[(2)] = inst_37173);

(statearr_37272_37318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (28))){
var inst_37220 = (state_37254[(2)]);
var inst_37221 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37222 = figwheel.client.heads_up.display_warning.call(null,inst_37221);
var state_37254__$1 = (function (){var statearr_37273 = state_37254;
(statearr_37273[(8)] = inst_37220);

return statearr_37273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(29),inst_37222);
} else {
if((state_val_37255 === (25))){
var inst_37218 = figwheel.client.heads_up.clear.call(null);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(28),inst_37218);
} else {
if((state_val_37255 === (34))){
var inst_37235 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(37),inst_37235);
} else {
if((state_val_37255 === (17))){
var inst_37200 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37274_37319 = state_37254__$1;
(statearr_37274_37319[(2)] = inst_37200);

(statearr_37274_37319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (3))){
var inst_37190 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37190)){
var statearr_37275_37320 = state_37254__$1;
(statearr_37275_37320[(1)] = (13));

} else {
var statearr_37276_37321 = state_37254__$1;
(statearr_37276_37321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (12))){
var inst_37186 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37277_37322 = state_37254__$1;
(statearr_37277_37322[(2)] = inst_37186);

(statearr_37277_37322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (2))){
var inst_37173 = (state_37254[(7)]);
var inst_37173__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37254__$1 = (function (){var statearr_37278 = state_37254;
(statearr_37278[(7)] = inst_37173__$1);

return statearr_37278;
})();
if(cljs.core.truth_(inst_37173__$1)){
var statearr_37279_37323 = state_37254__$1;
(statearr_37279_37323[(1)] = (5));

} else {
var statearr_37280_37324 = state_37254__$1;
(statearr_37280_37324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (23))){
var inst_37216 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37216)){
var statearr_37281_37325 = state_37254__$1;
(statearr_37281_37325[(1)] = (25));

} else {
var statearr_37282_37326 = state_37254__$1;
(statearr_37282_37326[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (35))){
var state_37254__$1 = state_37254;
var statearr_37283_37327 = state_37254__$1;
(statearr_37283_37327[(2)] = null);

(statearr_37283_37327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (19))){
var inst_37211 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37211)){
var statearr_37284_37328 = state_37254__$1;
(statearr_37284_37328[(1)] = (22));

} else {
var statearr_37285_37329 = state_37254__$1;
(statearr_37285_37329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (11))){
var inst_37182 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37286_37330 = state_37254__$1;
(statearr_37286_37330[(2)] = inst_37182);

(statearr_37286_37330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (9))){
var inst_37184 = figwheel.client.heads_up.clear.call(null);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(12),inst_37184);
} else {
if((state_val_37255 === (5))){
var inst_37175 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37254__$1 = state_37254;
var statearr_37287_37331 = state_37254__$1;
(statearr_37287_37331[(2)] = inst_37175);

(statearr_37287_37331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (14))){
var inst_37202 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37202)){
var statearr_37288_37332 = state_37254__$1;
(statearr_37288_37332[(1)] = (18));

} else {
var statearr_37289_37333 = state_37254__$1;
(statearr_37289_37333[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (26))){
var inst_37226 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37226)){
var statearr_37290_37334 = state_37254__$1;
(statearr_37290_37334[(1)] = (30));

} else {
var statearr_37291_37335 = state_37254__$1;
(statearr_37291_37335[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (16))){
var inst_37194 = (state_37254[(2)]);
var inst_37195 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37196 = figwheel.client.format_messages.call(null,inst_37195);
var inst_37197 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37198 = figwheel.client.heads_up.display_error.call(null,inst_37196,inst_37197);
var state_37254__$1 = (function (){var statearr_37292 = state_37254;
(statearr_37292[(9)] = inst_37194);

return statearr_37292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(17),inst_37198);
} else {
if((state_val_37255 === (30))){
var inst_37228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37229 = figwheel.client.heads_up.display_warning.call(null,inst_37228);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(33),inst_37229);
} else {
if((state_val_37255 === (10))){
var inst_37188 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37293_37336 = state_37254__$1;
(statearr_37293_37336[(2)] = inst_37188);

(statearr_37293_37336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (18))){
var inst_37204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37205 = figwheel.client.format_messages.call(null,inst_37204);
var inst_37206 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37207 = figwheel.client.heads_up.display_error.call(null,inst_37205,inst_37206);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(21),inst_37207);
} else {
if((state_val_37255 === (37))){
var inst_37237 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37294_37337 = state_37254__$1;
(statearr_37294_37337[(2)] = inst_37237);

(statearr_37294_37337[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (8))){
var inst_37180 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(11),inst_37180);
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
});})(c__18830__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18809__auto__,c__18830__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____0 = (function (){
var statearr_37298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37298[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__);

(statearr_37298[(1)] = (1));

return statearr_37298;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____1 = (function (state_37254){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_37254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e37299){if((e37299 instanceof Object)){
var ex__18813__auto__ = e37299;
var statearr_37300_37338 = state_37254;
(statearr_37300_37338[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37339 = state_37254;
state_37254 = G__37339;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__ = function(state_37254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____1.call(this,state_37254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,msg_hist,msg_names,msg))
})();
var state__18832__auto__ = (function (){var statearr_37301 = f__18831__auto__.call(null);
(statearr_37301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,msg_hist,msg_names,msg))
);

return c__18830__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18830__auto___37402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___37402,ch){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___37402,ch){
return (function (state_37385){
var state_val_37386 = (state_37385[(1)]);
if((state_val_37386 === (1))){
var state_37385__$1 = state_37385;
var statearr_37387_37403 = state_37385__$1;
(statearr_37387_37403[(2)] = null);

(statearr_37387_37403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (2))){
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37385__$1,(4),ch);
} else {
if((state_val_37386 === (3))){
var inst_37383 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37385__$1,inst_37383);
} else {
if((state_val_37386 === (4))){
var inst_37373 = (state_37385[(7)]);
var inst_37373__$1 = (state_37385[(2)]);
var state_37385__$1 = (function (){var statearr_37388 = state_37385;
(statearr_37388[(7)] = inst_37373__$1);

return statearr_37388;
})();
if(cljs.core.truth_(inst_37373__$1)){
var statearr_37389_37404 = state_37385__$1;
(statearr_37389_37404[(1)] = (5));

} else {
var statearr_37390_37405 = state_37385__$1;
(statearr_37390_37405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (5))){
var inst_37373 = (state_37385[(7)]);
var inst_37375 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37373);
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37385__$1,(8),inst_37375);
} else {
if((state_val_37386 === (6))){
var state_37385__$1 = state_37385;
var statearr_37391_37406 = state_37385__$1;
(statearr_37391_37406[(2)] = null);

(statearr_37391_37406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (7))){
var inst_37381 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
var statearr_37392_37407 = state_37385__$1;
(statearr_37392_37407[(2)] = inst_37381);

(statearr_37392_37407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (8))){
var inst_37377 = (state_37385[(2)]);
var state_37385__$1 = (function (){var statearr_37393 = state_37385;
(statearr_37393[(8)] = inst_37377);

return statearr_37393;
})();
var statearr_37394_37408 = state_37385__$1;
(statearr_37394_37408[(2)] = null);

(statearr_37394_37408[(1)] = (2));


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
});})(c__18830__auto___37402,ch))
;
return ((function (switch__18809__auto__,c__18830__auto___37402,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18810__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18810__auto____0 = (function (){
var statearr_37398 = [null,null,null,null,null,null,null,null,null];
(statearr_37398[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18810__auto__);

(statearr_37398[(1)] = (1));

return statearr_37398;
});
var figwheel$client$heads_up_plugin_$_state_machine__18810__auto____1 = (function (state_37385){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_37385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e37399){if((e37399 instanceof Object)){
var ex__18813__auto__ = e37399;
var statearr_37400_37409 = state_37385;
(statearr_37400_37409[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37410 = state_37385;
state_37385 = G__37410;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18810__auto__ = function(state_37385){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18810__auto____1.call(this,state_37385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18810__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18810__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___37402,ch))
})();
var state__18832__auto__ = (function (){var statearr_37401 = f__18831__auto__.call(null);
(statearr_37401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___37402);

return statearr_37401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___37402,ch))
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
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_37431){
var state_val_37432 = (state_37431[(1)]);
if((state_val_37432 === (1))){
var inst_37426 = cljs.core.async.timeout.call(null,(3000));
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37431__$1,(2),inst_37426);
} else {
if((state_val_37432 === (2))){
var inst_37428 = (state_37431[(2)]);
var inst_37429 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37431__$1 = (function (){var statearr_37433 = state_37431;
(statearr_37433[(7)] = inst_37428);

return statearr_37433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37431__$1,inst_37429);
} else {
return null;
}
}
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____0 = (function (){
var statearr_37437 = [null,null,null,null,null,null,null,null];
(statearr_37437[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__);

(statearr_37437[(1)] = (1));

return statearr_37437;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____1 = (function (state_37431){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_37431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e37438){if((e37438 instanceof Object)){
var ex__18813__auto__ = e37438;
var statearr_37439_37441 = state_37431;
(statearr_37439_37441[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37442 = state_37431;
state_37431 = G__37442;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__ = function(state_37431){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____1.call(this,state_37431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18810__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_37440 = f__18831__auto__.call(null);
(statearr_37440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_37440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37443){
var map__37450 = p__37443;
var map__37450__$1 = ((((!((map__37450 == null)))?((((map__37450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37450):map__37450);
var ed = map__37450__$1;
var formatted_exception = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37452_37456 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37453_37457 = null;
var count__37454_37458 = (0);
var i__37455_37459 = (0);
while(true){
if((i__37455_37459 < count__37454_37458)){
var msg_37460 = cljs.core._nth.call(null,chunk__37453_37457,i__37455_37459);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37460);

var G__37461 = seq__37452_37456;
var G__37462 = chunk__37453_37457;
var G__37463 = count__37454_37458;
var G__37464 = (i__37455_37459 + (1));
seq__37452_37456 = G__37461;
chunk__37453_37457 = G__37462;
count__37454_37458 = G__37463;
i__37455_37459 = G__37464;
continue;
} else {
var temp__4425__auto___37465 = cljs.core.seq.call(null,seq__37452_37456);
if(temp__4425__auto___37465){
var seq__37452_37466__$1 = temp__4425__auto___37465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37452_37466__$1)){
var c__17608__auto___37467 = cljs.core.chunk_first.call(null,seq__37452_37466__$1);
var G__37468 = cljs.core.chunk_rest.call(null,seq__37452_37466__$1);
var G__37469 = c__17608__auto___37467;
var G__37470 = cljs.core.count.call(null,c__17608__auto___37467);
var G__37471 = (0);
seq__37452_37456 = G__37468;
chunk__37453_37457 = G__37469;
count__37454_37458 = G__37470;
i__37455_37459 = G__37471;
continue;
} else {
var msg_37472 = cljs.core.first.call(null,seq__37452_37466__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37472);

var G__37473 = cljs.core.next.call(null,seq__37452_37466__$1);
var G__37474 = null;
var G__37475 = (0);
var G__37476 = (0);
seq__37452_37456 = G__37473;
chunk__37453_37457 = G__37474;
count__37454_37458 = G__37475;
i__37455_37459 = G__37476;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37477){
var map__37480 = p__37477;
var map__37480__$1 = ((((!((map__37480 == null)))?((((map__37480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37480):map__37480);
var w = map__37480__$1;
var message = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
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
var seq__37488 = cljs.core.seq.call(null,plugins);
var chunk__37489 = null;
var count__37490 = (0);
var i__37491 = (0);
while(true){
if((i__37491 < count__37490)){
var vec__37492 = cljs.core._nth.call(null,chunk__37489,i__37491);
var k = cljs.core.nth.call(null,vec__37492,(0),null);
var plugin = cljs.core.nth.call(null,vec__37492,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37494 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37488,chunk__37489,count__37490,i__37491,pl_37494,vec__37492,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37494.call(null,msg_hist);
});})(seq__37488,chunk__37489,count__37490,i__37491,pl_37494,vec__37492,k,plugin))
);
} else {
}

var G__37495 = seq__37488;
var G__37496 = chunk__37489;
var G__37497 = count__37490;
var G__37498 = (i__37491 + (1));
seq__37488 = G__37495;
chunk__37489 = G__37496;
count__37490 = G__37497;
i__37491 = G__37498;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37488);
if(temp__4425__auto__){
var seq__37488__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37488__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__37488__$1);
var G__37499 = cljs.core.chunk_rest.call(null,seq__37488__$1);
var G__37500 = c__17608__auto__;
var G__37501 = cljs.core.count.call(null,c__17608__auto__);
var G__37502 = (0);
seq__37488 = G__37499;
chunk__37489 = G__37500;
count__37490 = G__37501;
i__37491 = G__37502;
continue;
} else {
var vec__37493 = cljs.core.first.call(null,seq__37488__$1);
var k = cljs.core.nth.call(null,vec__37493,(0),null);
var plugin = cljs.core.nth.call(null,vec__37493,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37503 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37488,chunk__37489,count__37490,i__37491,pl_37503,vec__37493,k,plugin,seq__37488__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37503.call(null,msg_hist);
});})(seq__37488,chunk__37489,count__37490,i__37491,pl_37503,vec__37493,k,plugin,seq__37488__$1,temp__4425__auto__))
);
} else {
}

var G__37504 = cljs.core.next.call(null,seq__37488__$1);
var G__37505 = null;
var G__37506 = (0);
var G__37507 = (0);
seq__37488 = G__37504;
chunk__37489 = G__37505;
count__37490 = G__37506;
i__37491 = G__37507;
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
var args37508 = [];
var len__17863__auto___37511 = arguments.length;
var i__17864__auto___37512 = (0);
while(true){
if((i__17864__auto___37512 < len__17863__auto___37511)){
args37508.push((arguments[i__17864__auto___37512]));

var G__37513 = (i__17864__auto___37512 + (1));
i__17864__auto___37512 = G__37513;
continue;
} else {
}
break;
}

var G__37510 = args37508.length;
switch (G__37510) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37508.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___37519 = arguments.length;
var i__17864__auto___37520 = (0);
while(true){
if((i__17864__auto___37520 < len__17863__auto___37519)){
args__17870__auto__.push((arguments[i__17864__auto___37520]));

var G__37521 = (i__17864__auto___37520 + (1));
i__17864__auto___37520 = G__37521;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37516){
var map__37517 = p__37516;
var map__37517__$1 = ((((!((map__37517 == null)))?((((map__37517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37517):map__37517);
var opts = map__37517__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37515){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37515));
});

//# sourceMappingURL=client.js.map?rel=1477646671814