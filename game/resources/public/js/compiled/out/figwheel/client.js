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
var pred__31006 = cljs.core._EQ_;
var expr__31007 = (function (){var or__18742__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e31010){if((e31010 instanceof Error)){
var e = e31010;
return false;
} else {
throw e31010;

}
}})();
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31006.call(null,"true",expr__31007))){
return true;
} else {
if(cljs.core.truth_(pred__31006.call(null,"false",expr__31007))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31007)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31012){if((e31012 instanceof Error)){
var e = e31012;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31012;

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
var len__19850__auto___31014 = arguments.length;
var i__19851__auto___31015 = (0);
while(true){
if((i__19851__auto___31015 < len__19850__auto___31014)){
args__19857__auto__.push((arguments[i__19851__auto___31015]));

var G__31016 = (i__19851__auto___31015 + (1));
i__19851__auto___31015 = G__31016;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31013){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31013));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31017){
var map__31020 = p__31017;
var map__31020__$1 = ((((!((map__31020 == null)))?((((map__31020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);
var message = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21107__auto___31182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___31182,ch){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___31182,ch){
return (function (state_31151){
var state_val_31152 = (state_31151[(1)]);
if((state_val_31152 === (7))){
var inst_31147 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
var statearr_31153_31183 = state_31151__$1;
(statearr_31153_31183[(2)] = inst_31147);

(statearr_31153_31183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (1))){
var state_31151__$1 = state_31151;
var statearr_31154_31184 = state_31151__$1;
(statearr_31154_31184[(2)] = null);

(statearr_31154_31184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (4))){
var inst_31104 = (state_31151[(7)]);
var inst_31104__$1 = (state_31151[(2)]);
var state_31151__$1 = (function (){var statearr_31155 = state_31151;
(statearr_31155[(7)] = inst_31104__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31104__$1)){
var statearr_31156_31185 = state_31151__$1;
(statearr_31156_31185[(1)] = (5));

} else {
var statearr_31157_31186 = state_31151__$1;
(statearr_31157_31186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (15))){
var inst_31111 = (state_31151[(8)]);
var inst_31126 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31111);
var inst_31127 = cljs.core.first.call(null,inst_31126);
var inst_31128 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31127);
var inst_31129 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31128)].join('');
var inst_31130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31129);
var state_31151__$1 = state_31151;
var statearr_31158_31187 = state_31151__$1;
(statearr_31158_31187[(2)] = inst_31130);

(statearr_31158_31187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (13))){
var inst_31135 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
var statearr_31159_31188 = state_31151__$1;
(statearr_31159_31188[(2)] = inst_31135);

(statearr_31159_31188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (6))){
var state_31151__$1 = state_31151;
var statearr_31160_31189 = state_31151__$1;
(statearr_31160_31189[(2)] = null);

(statearr_31160_31189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (17))){
var inst_31133 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
var statearr_31161_31190 = state_31151__$1;
(statearr_31161_31190[(2)] = inst_31133);

(statearr_31161_31190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (3))){
var inst_31149 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31151__$1,inst_31149);
} else {
if((state_val_31152 === (12))){
var inst_31110 = (state_31151[(9)]);
var inst_31124 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31110,opts);
var state_31151__$1 = state_31151;
if(cljs.core.truth_(inst_31124)){
var statearr_31162_31191 = state_31151__$1;
(statearr_31162_31191[(1)] = (15));

} else {
var statearr_31163_31192 = state_31151__$1;
(statearr_31163_31192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (2))){
var state_31151__$1 = state_31151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31151__$1,(4),ch);
} else {
if((state_val_31152 === (11))){
var inst_31111 = (state_31151[(8)]);
var inst_31116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31117 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31111);
var inst_31118 = cljs.core.async.timeout.call(null,(1000));
var inst_31119 = [inst_31117,inst_31118];
var inst_31120 = (new cljs.core.PersistentVector(null,2,(5),inst_31116,inst_31119,null));
var state_31151__$1 = state_31151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31151__$1,(14),inst_31120);
} else {
if((state_val_31152 === (9))){
var inst_31111 = (state_31151[(8)]);
var inst_31137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31138 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31111);
var inst_31139 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31138);
var inst_31140 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31139)].join('');
var inst_31141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31140);
var state_31151__$1 = (function (){var statearr_31164 = state_31151;
(statearr_31164[(10)] = inst_31137);

return statearr_31164;
})();
var statearr_31165_31193 = state_31151__$1;
(statearr_31165_31193[(2)] = inst_31141);

(statearr_31165_31193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (5))){
var inst_31104 = (state_31151[(7)]);
var inst_31106 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31107 = (new cljs.core.PersistentArrayMap(null,2,inst_31106,null));
var inst_31108 = (new cljs.core.PersistentHashSet(null,inst_31107,null));
var inst_31109 = figwheel.client.focus_msgs.call(null,inst_31108,inst_31104);
var inst_31110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31109);
var inst_31111 = cljs.core.first.call(null,inst_31109);
var inst_31112 = figwheel.client.autoload_QMARK_.call(null);
var state_31151__$1 = (function (){var statearr_31166 = state_31151;
(statearr_31166[(8)] = inst_31111);

(statearr_31166[(9)] = inst_31110);

return statearr_31166;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31167_31194 = state_31151__$1;
(statearr_31167_31194[(1)] = (8));

} else {
var statearr_31168_31195 = state_31151__$1;
(statearr_31168_31195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (14))){
var inst_31122 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
var statearr_31169_31196 = state_31151__$1;
(statearr_31169_31196[(2)] = inst_31122);

(statearr_31169_31196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (16))){
var state_31151__$1 = state_31151;
var statearr_31170_31197 = state_31151__$1;
(statearr_31170_31197[(2)] = null);

(statearr_31170_31197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (10))){
var inst_31143 = (state_31151[(2)]);
var state_31151__$1 = (function (){var statearr_31171 = state_31151;
(statearr_31171[(11)] = inst_31143);

return statearr_31171;
})();
var statearr_31172_31198 = state_31151__$1;
(statearr_31172_31198[(2)] = null);

(statearr_31172_31198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (8))){
var inst_31110 = (state_31151[(9)]);
var inst_31114 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31110,opts);
var state_31151__$1 = state_31151;
if(cljs.core.truth_(inst_31114)){
var statearr_31173_31199 = state_31151__$1;
(statearr_31173_31199[(1)] = (11));

} else {
var statearr_31174_31200 = state_31151__$1;
(statearr_31174_31200[(1)] = (12));

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
});})(c__21107__auto___31182,ch))
;
return ((function (switch__21092__auto__,c__21107__auto___31182,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____0 = (function (){
var statearr_31178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31178[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__);

(statearr_31178[(1)] = (1));

return statearr_31178;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____1 = (function (state_31151){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_31151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e31179){if((e31179 instanceof Object)){
var ex__21096__auto__ = e31179;
var statearr_31180_31201 = state_31151;
(statearr_31180_31201[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31202 = state_31151;
state_31151 = G__31202;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__ = function(state_31151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____1.call(this,state_31151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21093__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___31182,ch))
})();
var state__21109__auto__ = (function (){var statearr_31181 = f__21108__auto__.call(null);
(statearr_31181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___31182);

return statearr_31181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___31182,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31203_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31203_SHARP_));
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
var base_path_31210 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31210){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31209 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31209;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31208;
}}catch (e31207){if((e31207 instanceof Error)){
var e = e31207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31210], null));
} else {
var e = e31207;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31210))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31211){
var map__31220 = p__31211;
var map__31220__$1 = ((((!((map__31220 == null)))?((((map__31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);
var opts = map__31220__$1;
var build_id = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31220,map__31220__$1,opts,build_id){
return (function (p__31222){
var vec__31223 = p__31222;
var seq__31224 = cljs.core.seq.call(null,vec__31223);
var first__31225 = cljs.core.first.call(null,seq__31224);
var seq__31224__$1 = cljs.core.next.call(null,seq__31224);
var map__31226 = first__31225;
var map__31226__$1 = ((((!((map__31226 == null)))?((((map__31226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var msg = map__31226__$1;
var msg_name = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31224__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31223,seq__31224,first__31225,seq__31224__$1,map__31226,map__31226__$1,msg,msg_name,_,map__31220,map__31220__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31223,seq__31224,first__31225,seq__31224__$1,map__31226,map__31226__$1,msg,msg_name,_,map__31220,map__31220__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31220,map__31220__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31234){
var vec__31235 = p__31234;
var seq__31236 = cljs.core.seq.call(null,vec__31235);
var first__31237 = cljs.core.first.call(null,seq__31236);
var seq__31236__$1 = cljs.core.next.call(null,seq__31236);
var map__31238 = first__31237;
var map__31238__$1 = ((((!((map__31238 == null)))?((((map__31238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31238):map__31238);
var msg = map__31238__$1;
var msg_name = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31236__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31240){
var map__31252 = p__31240;
var map__31252__$1 = ((((!((map__31252 == null)))?((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var on_compile_warning = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31252,map__31252__$1,on_compile_warning,on_compile_fail){
return (function (p__31254){
var vec__31255 = p__31254;
var seq__31256 = cljs.core.seq.call(null,vec__31255);
var first__31257 = cljs.core.first.call(null,seq__31256);
var seq__31256__$1 = cljs.core.next.call(null,seq__31256);
var map__31258 = first__31257;
var map__31258__$1 = ((((!((map__31258 == null)))?((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);
var msg = map__31258__$1;
var msg_name = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31256__$1;
var pred__31260 = cljs.core._EQ_;
var expr__31261 = msg_name;
if(cljs.core.truth_(pred__31260.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31261))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31260.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31261))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31252,map__31252__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,msg_hist,msg_names,msg){
return (function (state_31477){
var state_val_31478 = (state_31477[(1)]);
if((state_val_31478 === (7))){
var inst_31401 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31401)){
var statearr_31479_31525 = state_31477__$1;
(statearr_31479_31525[(1)] = (8));

} else {
var statearr_31480_31526 = state_31477__$1;
(statearr_31480_31526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (20))){
var inst_31471 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31481_31527 = state_31477__$1;
(statearr_31481_31527[(2)] = inst_31471);

(statearr_31481_31527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (27))){
var inst_31467 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31482_31528 = state_31477__$1;
(statearr_31482_31528[(2)] = inst_31467);

(statearr_31482_31528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (1))){
var inst_31394 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31394)){
var statearr_31483_31529 = state_31477__$1;
(statearr_31483_31529[(1)] = (2));

} else {
var statearr_31484_31530 = state_31477__$1;
(statearr_31484_31530[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (24))){
var inst_31469 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31485_31531 = state_31477__$1;
(statearr_31485_31531[(2)] = inst_31469);

(statearr_31485_31531[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (4))){
var inst_31475 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31477__$1,inst_31475);
} else {
if((state_val_31478 === (15))){
var inst_31473 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31486_31532 = state_31477__$1;
(statearr_31486_31532[(2)] = inst_31473);

(statearr_31486_31532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (21))){
var inst_31432 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31487_31533 = state_31477__$1;
(statearr_31487_31533[(2)] = inst_31432);

(statearr_31487_31533[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (31))){
var inst_31456 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31456)){
var statearr_31488_31534 = state_31477__$1;
(statearr_31488_31534[(1)] = (34));

} else {
var statearr_31489_31535 = state_31477__$1;
(statearr_31489_31535[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (32))){
var inst_31465 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31490_31536 = state_31477__$1;
(statearr_31490_31536[(2)] = inst_31465);

(statearr_31490_31536[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (33))){
var inst_31454 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31491_31537 = state_31477__$1;
(statearr_31491_31537[(2)] = inst_31454);

(statearr_31491_31537[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (13))){
var inst_31415 = figwheel.client.heads_up.clear.call(null);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(16),inst_31415);
} else {
if((state_val_31478 === (22))){
var inst_31436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31437 = figwheel.client.heads_up.append_message.call(null,inst_31436);
var state_31477__$1 = state_31477;
var statearr_31492_31538 = state_31477__$1;
(statearr_31492_31538[(2)] = inst_31437);

(statearr_31492_31538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (36))){
var inst_31463 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31493_31539 = state_31477__$1;
(statearr_31493_31539[(2)] = inst_31463);

(statearr_31493_31539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (29))){
var inst_31447 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31494_31540 = state_31477__$1;
(statearr_31494_31540[(2)] = inst_31447);

(statearr_31494_31540[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (6))){
var inst_31396 = (state_31477[(7)]);
var state_31477__$1 = state_31477;
var statearr_31495_31541 = state_31477__$1;
(statearr_31495_31541[(2)] = inst_31396);

(statearr_31495_31541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (28))){
var inst_31443 = (state_31477[(2)]);
var inst_31444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31445 = figwheel.client.heads_up.display_warning.call(null,inst_31444);
var state_31477__$1 = (function (){var statearr_31496 = state_31477;
(statearr_31496[(8)] = inst_31443);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(29),inst_31445);
} else {
if((state_val_31478 === (25))){
var inst_31441 = figwheel.client.heads_up.clear.call(null);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(28),inst_31441);
} else {
if((state_val_31478 === (34))){
var inst_31458 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(37),inst_31458);
} else {
if((state_val_31478 === (17))){
var inst_31423 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31497_31542 = state_31477__$1;
(statearr_31497_31542[(2)] = inst_31423);

(statearr_31497_31542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (3))){
var inst_31413 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31413)){
var statearr_31498_31543 = state_31477__$1;
(statearr_31498_31543[(1)] = (13));

} else {
var statearr_31499_31544 = state_31477__$1;
(statearr_31499_31544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (12))){
var inst_31409 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31500_31545 = state_31477__$1;
(statearr_31500_31545[(2)] = inst_31409);

(statearr_31500_31545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (2))){
var inst_31396 = (state_31477[(7)]);
var inst_31396__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31477__$1 = (function (){var statearr_31501 = state_31477;
(statearr_31501[(7)] = inst_31396__$1);

return statearr_31501;
})();
if(cljs.core.truth_(inst_31396__$1)){
var statearr_31502_31546 = state_31477__$1;
(statearr_31502_31546[(1)] = (5));

} else {
var statearr_31503_31547 = state_31477__$1;
(statearr_31503_31547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (23))){
var inst_31439 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31439)){
var statearr_31504_31548 = state_31477__$1;
(statearr_31504_31548[(1)] = (25));

} else {
var statearr_31505_31549 = state_31477__$1;
(statearr_31505_31549[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (35))){
var state_31477__$1 = state_31477;
var statearr_31506_31550 = state_31477__$1;
(statearr_31506_31550[(2)] = null);

(statearr_31506_31550[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (19))){
var inst_31434 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31434)){
var statearr_31507_31551 = state_31477__$1;
(statearr_31507_31551[(1)] = (22));

} else {
var statearr_31508_31552 = state_31477__$1;
(statearr_31508_31552[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (11))){
var inst_31405 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31509_31553 = state_31477__$1;
(statearr_31509_31553[(2)] = inst_31405);

(statearr_31509_31553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (9))){
var inst_31407 = figwheel.client.heads_up.clear.call(null);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(12),inst_31407);
} else {
if((state_val_31478 === (5))){
var inst_31398 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31477__$1 = state_31477;
var statearr_31510_31554 = state_31477__$1;
(statearr_31510_31554[(2)] = inst_31398);

(statearr_31510_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (14))){
var inst_31425 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31425)){
var statearr_31511_31555 = state_31477__$1;
(statearr_31511_31555[(1)] = (18));

} else {
var statearr_31512_31556 = state_31477__$1;
(statearr_31512_31556[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (26))){
var inst_31449 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31449)){
var statearr_31513_31557 = state_31477__$1;
(statearr_31513_31557[(1)] = (30));

} else {
var statearr_31514_31558 = state_31477__$1;
(statearr_31514_31558[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (16))){
var inst_31417 = (state_31477[(2)]);
var inst_31418 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31419 = figwheel.client.format_messages.call(null,inst_31418);
var inst_31420 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31421 = figwheel.client.heads_up.display_error.call(null,inst_31419,inst_31420);
var state_31477__$1 = (function (){var statearr_31515 = state_31477;
(statearr_31515[(9)] = inst_31417);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(17),inst_31421);
} else {
if((state_val_31478 === (30))){
var inst_31451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31452 = figwheel.client.heads_up.display_warning.call(null,inst_31451);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(33),inst_31452);
} else {
if((state_val_31478 === (10))){
var inst_31411 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31516_31559 = state_31477__$1;
(statearr_31516_31559[(2)] = inst_31411);

(statearr_31516_31559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (18))){
var inst_31427 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31428 = figwheel.client.format_messages.call(null,inst_31427);
var inst_31429 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31430 = figwheel.client.heads_up.display_error.call(null,inst_31428,inst_31429);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(21),inst_31430);
} else {
if((state_val_31478 === (37))){
var inst_31460 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31517_31560 = state_31477__$1;
(statearr_31517_31560[(2)] = inst_31460);

(statearr_31517_31560[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31478 === (8))){
var inst_31403 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31477__$1,(11),inst_31403);
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
});})(c__21107__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21092__auto__,c__21107__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____1 = (function (state_31477){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_31477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object)){
var ex__21096__auto__ = e31522;
var statearr_31523_31561 = state_31477;
(statearr_31523_31561[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31562 = state_31477;
state_31477 = G__31562;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__ = function(state_31477){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____1.call(this,state_31477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,msg_hist,msg_names,msg))
})();
var state__21109__auto__ = (function (){var statearr_31524 = f__21108__auto__.call(null);
(statearr_31524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_31524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,msg_hist,msg_names,msg))
);

return c__21107__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21107__auto___31625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___31625,ch){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___31625,ch){
return (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (1))){
var state_31608__$1 = state_31608;
var statearr_31610_31626 = state_31608__$1;
(statearr_31610_31626[(2)] = null);

(statearr_31610_31626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (2))){
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,(4),ch);
} else {
if((state_val_31609 === (3))){
var inst_31606 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31608__$1,inst_31606);
} else {
if((state_val_31609 === (4))){
var inst_31596 = (state_31608[(7)]);
var inst_31596__$1 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31611 = state_31608;
(statearr_31611[(7)] = inst_31596__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31596__$1)){
var statearr_31612_31627 = state_31608__$1;
(statearr_31612_31627[(1)] = (5));

} else {
var statearr_31613_31628 = state_31608__$1;
(statearr_31613_31628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (5))){
var inst_31596 = (state_31608[(7)]);
var inst_31598 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31596);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,(8),inst_31598);
} else {
if((state_val_31609 === (6))){
var state_31608__$1 = state_31608;
var statearr_31614_31629 = state_31608__$1;
(statearr_31614_31629[(2)] = null);

(statearr_31614_31629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (7))){
var inst_31604 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31615_31630 = state_31608__$1;
(statearr_31615_31630[(2)] = inst_31604);

(statearr_31615_31630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (8))){
var inst_31600 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31616 = state_31608;
(statearr_31616[(8)] = inst_31600);

return statearr_31616;
})();
var statearr_31617_31631 = state_31608__$1;
(statearr_31617_31631[(2)] = null);

(statearr_31617_31631[(1)] = (2));


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
});})(c__21107__auto___31625,ch))
;
return ((function (switch__21092__auto__,c__21107__auto___31625,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21093__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21093__auto____0 = (function (){
var statearr_31621 = [null,null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21093__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var figwheel$client$heads_up_plugin_$_state_machine__21093__auto____1 = (function (state_31608){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_31608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object)){
var ex__21096__auto__ = e31622;
var statearr_31623_31632 = state_31608;
(statearr_31623_31632[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31633 = state_31608;
state_31608 = G__31633;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21093__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21093__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21093__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21093__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___31625,ch))
})();
var state__21109__auto__ = (function (){var statearr_31624 = f__21108__auto__.call(null);
(statearr_31624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___31625);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___31625,ch))
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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (1))){
var inst_31649 = cljs.core.async.timeout.call(null,(3000));
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(2),inst_31649);
} else {
if((state_val_31655 === (2))){
var inst_31651 = (state_31654[(2)]);
var inst_31652 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31654__$1 = (function (){var statearr_31656 = state_31654;
(statearr_31656[(7)] = inst_31651);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
return null;
}
}
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____0 = (function (){
var statearr_31660 = [null,null,null,null,null,null,null,null];
(statearr_31660[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__);

(statearr_31660[(1)] = (1));

return statearr_31660;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____1 = (function (state_31654){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e31661){if((e31661 instanceof Object)){
var ex__21096__auto__ = e31661;
var statearr_31662_31664 = state_31654;
(statearr_31662_31664[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31665 = state_31654;
state_31654 = G__31665;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21093__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_31663 = f__21108__auto__.call(null);
(statearr_31663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31666){
var map__31673 = p__31666;
var map__31673__$1 = ((((!((map__31673 == null)))?((((map__31673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31673):map__31673);
var ed = map__31673__$1;
var formatted_exception = cljs.core.get.call(null,map__31673__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31673__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31673__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31675_31679 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31676_31680 = null;
var count__31677_31681 = (0);
var i__31678_31682 = (0);
while(true){
if((i__31678_31682 < count__31677_31681)){
var msg_31683 = cljs.core._nth.call(null,chunk__31676_31680,i__31678_31682);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31683);

var G__31684 = seq__31675_31679;
var G__31685 = chunk__31676_31680;
var G__31686 = count__31677_31681;
var G__31687 = (i__31678_31682 + (1));
seq__31675_31679 = G__31684;
chunk__31676_31680 = G__31685;
count__31677_31681 = G__31686;
i__31678_31682 = G__31687;
continue;
} else {
var temp__4657__auto___31688 = cljs.core.seq.call(null,seq__31675_31679);
if(temp__4657__auto___31688){
var seq__31675_31689__$1 = temp__4657__auto___31688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31675_31689__$1)){
var c__19556__auto___31690 = cljs.core.chunk_first.call(null,seq__31675_31689__$1);
var G__31691 = cljs.core.chunk_rest.call(null,seq__31675_31689__$1);
var G__31692 = c__19556__auto___31690;
var G__31693 = cljs.core.count.call(null,c__19556__auto___31690);
var G__31694 = (0);
seq__31675_31679 = G__31691;
chunk__31676_31680 = G__31692;
count__31677_31681 = G__31693;
i__31678_31682 = G__31694;
continue;
} else {
var msg_31695 = cljs.core.first.call(null,seq__31675_31689__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31695);

var G__31696 = cljs.core.next.call(null,seq__31675_31689__$1);
var G__31697 = null;
var G__31698 = (0);
var G__31699 = (0);
seq__31675_31679 = G__31696;
chunk__31676_31680 = G__31697;
count__31677_31681 = G__31698;
i__31678_31682 = G__31699;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31700){
var map__31703 = p__31700;
var map__31703__$1 = ((((!((map__31703 == null)))?((((map__31703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31703):map__31703);
var w = map__31703__$1;
var message = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31715 = cljs.core.seq.call(null,plugins);
var chunk__31716 = null;
var count__31717 = (0);
var i__31718 = (0);
while(true){
if((i__31718 < count__31717)){
var vec__31719 = cljs.core._nth.call(null,chunk__31716,i__31718);
var k = cljs.core.nth.call(null,vec__31719,(0),null);
var plugin = cljs.core.nth.call(null,vec__31719,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31715,chunk__31716,count__31717,i__31718,pl_31725,vec__31719,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31725.call(null,msg_hist);
});})(seq__31715,chunk__31716,count__31717,i__31718,pl_31725,vec__31719,k,plugin))
);
} else {
}

var G__31726 = seq__31715;
var G__31727 = chunk__31716;
var G__31728 = count__31717;
var G__31729 = (i__31718 + (1));
seq__31715 = G__31726;
chunk__31716 = G__31727;
count__31717 = G__31728;
i__31718 = G__31729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31715);
if(temp__4657__auto__){
var seq__31715__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31715__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__31715__$1);
var G__31730 = cljs.core.chunk_rest.call(null,seq__31715__$1);
var G__31731 = c__19556__auto__;
var G__31732 = cljs.core.count.call(null,c__19556__auto__);
var G__31733 = (0);
seq__31715 = G__31730;
chunk__31716 = G__31731;
count__31717 = G__31732;
i__31718 = G__31733;
continue;
} else {
var vec__31722 = cljs.core.first.call(null,seq__31715__$1);
var k = cljs.core.nth.call(null,vec__31722,(0),null);
var plugin = cljs.core.nth.call(null,vec__31722,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31715,chunk__31716,count__31717,i__31718,pl_31734,vec__31722,k,plugin,seq__31715__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31734.call(null,msg_hist);
});})(seq__31715,chunk__31716,count__31717,i__31718,pl_31734,vec__31722,k,plugin,seq__31715__$1,temp__4657__auto__))
);
} else {
}

var G__31735 = cljs.core.next.call(null,seq__31715__$1);
var G__31736 = null;
var G__31737 = (0);
var G__31738 = (0);
seq__31715 = G__31735;
chunk__31716 = G__31736;
count__31717 = G__31737;
i__31718 = G__31738;
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
var args31739 = [];
var len__19850__auto___31742 = arguments.length;
var i__19851__auto___31743 = (0);
while(true){
if((i__19851__auto___31743 < len__19850__auto___31742)){
args31739.push((arguments[i__19851__auto___31743]));

var G__31744 = (i__19851__auto___31743 + (1));
i__19851__auto___31743 = G__31744;
continue;
} else {
}
break;
}

var G__31741 = args31739.length;
switch (G__31741) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31739.length)].join('')));

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
var len__19850__auto___31750 = arguments.length;
var i__19851__auto___31751 = (0);
while(true){
if((i__19851__auto___31751 < len__19850__auto___31750)){
args__19857__auto__.push((arguments[i__19851__auto___31751]));

var G__31752 = (i__19851__auto___31751 + (1));
i__19851__auto___31751 = G__31752;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31747){
var map__31748 = p__31747;
var map__31748__$1 = ((((!((map__31748 == null)))?((((map__31748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31748):map__31748);
var opts = map__31748__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31746){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31746));
});


//# sourceMappingURL=client.js.map?rel=1492189023750