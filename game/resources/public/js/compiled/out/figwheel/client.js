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
var pred__23358 = cljs.core._EQ_;
var expr__23359 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23362){if((e23362 instanceof Error)){
var e = e23362;
return false;
} else {
throw e23362;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23358.call(null,"true",expr__23359))){
return true;
} else {
if(cljs.core.truth_(pred__23358.call(null,"false",expr__23359))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23359)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23364){if((e23364 instanceof Error)){
var e = e23364;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23364;

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
var len__17863__auto___23366 = arguments.length;
var i__17864__auto___23367 = (0);
while(true){
if((i__17864__auto___23367 < len__17863__auto___23366)){
args__17870__auto__.push((arguments[i__17864__auto___23367]));

var G__23368 = (i__17864__auto___23367 + (1));
i__17864__auto___23367 = G__23368;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23365){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23365));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23369){
var map__23372 = p__23369;
var map__23372__$1 = ((((!((map__23372 == null)))?((((map__23372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23372):map__23372);
var message = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18972__auto___23534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___23534,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___23534,ch){
return (function (state_23503){
var state_val_23504 = (state_23503[(1)]);
if((state_val_23504 === (7))){
var inst_23499 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
var statearr_23505_23535 = state_23503__$1;
(statearr_23505_23535[(2)] = inst_23499);

(statearr_23505_23535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (1))){
var state_23503__$1 = state_23503;
var statearr_23506_23536 = state_23503__$1;
(statearr_23506_23536[(2)] = null);

(statearr_23506_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (4))){
var inst_23456 = (state_23503[(7)]);
var inst_23456__$1 = (state_23503[(2)]);
var state_23503__$1 = (function (){var statearr_23507 = state_23503;
(statearr_23507[(7)] = inst_23456__$1);

return statearr_23507;
})();
if(cljs.core.truth_(inst_23456__$1)){
var statearr_23508_23537 = state_23503__$1;
(statearr_23508_23537[(1)] = (5));

} else {
var statearr_23509_23538 = state_23503__$1;
(statearr_23509_23538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (15))){
var inst_23463 = (state_23503[(8)]);
var inst_23478 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23463);
var inst_23479 = cljs.core.first.call(null,inst_23478);
var inst_23480 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23479);
var inst_23481 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23480)].join('');
var inst_23482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23481);
var state_23503__$1 = state_23503;
var statearr_23510_23539 = state_23503__$1;
(statearr_23510_23539[(2)] = inst_23482);

(statearr_23510_23539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (13))){
var inst_23487 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
var statearr_23511_23540 = state_23503__$1;
(statearr_23511_23540[(2)] = inst_23487);

(statearr_23511_23540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (6))){
var state_23503__$1 = state_23503;
var statearr_23512_23541 = state_23503__$1;
(statearr_23512_23541[(2)] = null);

(statearr_23512_23541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (17))){
var inst_23485 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
var statearr_23513_23542 = state_23503__$1;
(statearr_23513_23542[(2)] = inst_23485);

(statearr_23513_23542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (3))){
var inst_23501 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23503__$1,inst_23501);
} else {
if((state_val_23504 === (12))){
var inst_23462 = (state_23503[(9)]);
var inst_23476 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23462,opts);
var state_23503__$1 = state_23503;
if(cljs.core.truth_(inst_23476)){
var statearr_23514_23543 = state_23503__$1;
(statearr_23514_23543[(1)] = (15));

} else {
var statearr_23515_23544 = state_23503__$1;
(statearr_23515_23544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (2))){
var state_23503__$1 = state_23503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23503__$1,(4),ch);
} else {
if((state_val_23504 === (11))){
var inst_23463 = (state_23503[(8)]);
var inst_23468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23469 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23463);
var inst_23470 = cljs.core.async.timeout.call(null,(1000));
var inst_23471 = [inst_23469,inst_23470];
var inst_23472 = (new cljs.core.PersistentVector(null,2,(5),inst_23468,inst_23471,null));
var state_23503__$1 = state_23503;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23503__$1,(14),inst_23472);
} else {
if((state_val_23504 === (9))){
var inst_23463 = (state_23503[(8)]);
var inst_23489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23490 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23463);
var inst_23491 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23490);
var inst_23492 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23491)].join('');
var inst_23493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23492);
var state_23503__$1 = (function (){var statearr_23516 = state_23503;
(statearr_23516[(10)] = inst_23489);

return statearr_23516;
})();
var statearr_23517_23545 = state_23503__$1;
(statearr_23517_23545[(2)] = inst_23493);

(statearr_23517_23545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (5))){
var inst_23456 = (state_23503[(7)]);
var inst_23458 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23459 = (new cljs.core.PersistentArrayMap(null,2,inst_23458,null));
var inst_23460 = (new cljs.core.PersistentHashSet(null,inst_23459,null));
var inst_23461 = figwheel.client.focus_msgs.call(null,inst_23460,inst_23456);
var inst_23462 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23461);
var inst_23463 = cljs.core.first.call(null,inst_23461);
var inst_23464 = figwheel.client.autoload_QMARK_.call(null);
var state_23503__$1 = (function (){var statearr_23518 = state_23503;
(statearr_23518[(9)] = inst_23462);

(statearr_23518[(8)] = inst_23463);

return statearr_23518;
})();
if(cljs.core.truth_(inst_23464)){
var statearr_23519_23546 = state_23503__$1;
(statearr_23519_23546[(1)] = (8));

} else {
var statearr_23520_23547 = state_23503__$1;
(statearr_23520_23547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (14))){
var inst_23474 = (state_23503[(2)]);
var state_23503__$1 = state_23503;
var statearr_23521_23548 = state_23503__$1;
(statearr_23521_23548[(2)] = inst_23474);

(statearr_23521_23548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (16))){
var state_23503__$1 = state_23503;
var statearr_23522_23549 = state_23503__$1;
(statearr_23522_23549[(2)] = null);

(statearr_23522_23549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (10))){
var inst_23495 = (state_23503[(2)]);
var state_23503__$1 = (function (){var statearr_23523 = state_23503;
(statearr_23523[(11)] = inst_23495);

return statearr_23523;
})();
var statearr_23524_23550 = state_23503__$1;
(statearr_23524_23550[(2)] = null);

(statearr_23524_23550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23504 === (8))){
var inst_23462 = (state_23503[(9)]);
var inst_23466 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23462,opts);
var state_23503__$1 = state_23503;
if(cljs.core.truth_(inst_23466)){
var statearr_23525_23551 = state_23503__$1;
(statearr_23525_23551[(1)] = (11));

} else {
var statearr_23526_23552 = state_23503__$1;
(statearr_23526_23552[(1)] = (12));

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
});})(c__18972__auto___23534,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___23534,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_23530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23530[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__);

(statearr_23530[(1)] = (1));

return statearr_23530;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1 = (function (state_23503){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23531){if((e23531 instanceof Object)){
var ex__18864__auto__ = e23531;
var statearr_23532_23553 = state_23503;
(statearr_23532_23553[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23503;
state_23503 = G__23554;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = function(state_23503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1.call(this,state_23503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___23534,ch))
})();
var state__18974__auto__ = (function (){var statearr_23533 = f__18973__auto__.call(null);
(statearr_23533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___23534);

return statearr_23533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___23534,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23555_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23555_SHARP_));
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
var base_path_23562 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23562){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23561 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23561;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23560;
}}catch (e23559){if((e23559 instanceof Error)){
var e = e23559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23562], null));
} else {
var e = e23559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23562))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23563){
var map__23570 = p__23563;
var map__23570__$1 = ((((!((map__23570 == null)))?((((map__23570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);
var opts = map__23570__$1;
var build_id = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23570,map__23570__$1,opts,build_id){
return (function (p__23572){
var vec__23573 = p__23572;
var map__23574 = cljs.core.nth.call(null,vec__23573,(0),null);
var map__23574__$1 = ((((!((map__23574 == null)))?((((map__23574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23574):map__23574);
var msg = map__23574__$1;
var msg_name = cljs.core.get.call(null,map__23574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23573,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23573,map__23574,map__23574__$1,msg,msg_name,_,map__23570,map__23570__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23573,map__23574,map__23574__$1,msg,msg_name,_,map__23570,map__23570__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23570,map__23570__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23580){
var vec__23581 = p__23580;
var map__23582 = cljs.core.nth.call(null,vec__23581,(0),null);
var map__23582__$1 = ((((!((map__23582 == null)))?((((map__23582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23582):map__23582);
var msg = map__23582__$1;
var msg_name = cljs.core.get.call(null,map__23582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23581,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23584){
var map__23594 = p__23584;
var map__23594__$1 = ((((!((map__23594 == null)))?((((map__23594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23594):map__23594);
var on_compile_warning = cljs.core.get.call(null,map__23594__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23594__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23594,map__23594__$1,on_compile_warning,on_compile_fail){
return (function (p__23596){
var vec__23597 = p__23596;
var map__23598 = cljs.core.nth.call(null,vec__23597,(0),null);
var map__23598__$1 = ((((!((map__23598 == null)))?((((map__23598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23598):map__23598);
var msg = map__23598__$1;
var msg_name = cljs.core.get.call(null,map__23598__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23597,(1));
var pred__23600 = cljs.core._EQ_;
var expr__23601 = msg_name;
if(cljs.core.truth_(pred__23600.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23601))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23600.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23601))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23594,map__23594__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (state_23817){
var state_val_23818 = (state_23817[(1)]);
if((state_val_23818 === (7))){
var inst_23741 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23741)){
var statearr_23819_23865 = state_23817__$1;
(statearr_23819_23865[(1)] = (8));

} else {
var statearr_23820_23866 = state_23817__$1;
(statearr_23820_23866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (20))){
var inst_23811 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23821_23867 = state_23817__$1;
(statearr_23821_23867[(2)] = inst_23811);

(statearr_23821_23867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (27))){
var inst_23807 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23822_23868 = state_23817__$1;
(statearr_23822_23868[(2)] = inst_23807);

(statearr_23822_23868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (1))){
var inst_23734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23734)){
var statearr_23823_23869 = state_23817__$1;
(statearr_23823_23869[(1)] = (2));

} else {
var statearr_23824_23870 = state_23817__$1;
(statearr_23824_23870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (24))){
var inst_23809 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23825_23871 = state_23817__$1;
(statearr_23825_23871[(2)] = inst_23809);

(statearr_23825_23871[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (4))){
var inst_23815 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23817__$1,inst_23815);
} else {
if((state_val_23818 === (15))){
var inst_23813 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23826_23872 = state_23817__$1;
(statearr_23826_23872[(2)] = inst_23813);

(statearr_23826_23872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (21))){
var inst_23772 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23827_23873 = state_23817__$1;
(statearr_23827_23873[(2)] = inst_23772);

(statearr_23827_23873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (31))){
var inst_23796 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23796)){
var statearr_23828_23874 = state_23817__$1;
(statearr_23828_23874[(1)] = (34));

} else {
var statearr_23829_23875 = state_23817__$1;
(statearr_23829_23875[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (32))){
var inst_23805 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23830_23876 = state_23817__$1;
(statearr_23830_23876[(2)] = inst_23805);

(statearr_23830_23876[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (33))){
var inst_23794 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23831_23877 = state_23817__$1;
(statearr_23831_23877[(2)] = inst_23794);

(statearr_23831_23877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (13))){
var inst_23755 = figwheel.client.heads_up.clear.call(null);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(16),inst_23755);
} else {
if((state_val_23818 === (22))){
var inst_23776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23777 = figwheel.client.heads_up.append_message.call(null,inst_23776);
var state_23817__$1 = state_23817;
var statearr_23832_23878 = state_23817__$1;
(statearr_23832_23878[(2)] = inst_23777);

(statearr_23832_23878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (36))){
var inst_23803 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23833_23879 = state_23817__$1;
(statearr_23833_23879[(2)] = inst_23803);

(statearr_23833_23879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (29))){
var inst_23787 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23834_23880 = state_23817__$1;
(statearr_23834_23880[(2)] = inst_23787);

(statearr_23834_23880[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (6))){
var inst_23736 = (state_23817[(7)]);
var state_23817__$1 = state_23817;
var statearr_23835_23881 = state_23817__$1;
(statearr_23835_23881[(2)] = inst_23736);

(statearr_23835_23881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (28))){
var inst_23783 = (state_23817[(2)]);
var inst_23784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23785 = figwheel.client.heads_up.display_warning.call(null,inst_23784);
var state_23817__$1 = (function (){var statearr_23836 = state_23817;
(statearr_23836[(8)] = inst_23783);

return statearr_23836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(29),inst_23785);
} else {
if((state_val_23818 === (25))){
var inst_23781 = figwheel.client.heads_up.clear.call(null);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(28),inst_23781);
} else {
if((state_val_23818 === (34))){
var inst_23798 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(37),inst_23798);
} else {
if((state_val_23818 === (17))){
var inst_23763 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23837_23882 = state_23817__$1;
(statearr_23837_23882[(2)] = inst_23763);

(statearr_23837_23882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (3))){
var inst_23753 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23753)){
var statearr_23838_23883 = state_23817__$1;
(statearr_23838_23883[(1)] = (13));

} else {
var statearr_23839_23884 = state_23817__$1;
(statearr_23839_23884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (12))){
var inst_23749 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23840_23885 = state_23817__$1;
(statearr_23840_23885[(2)] = inst_23749);

(statearr_23840_23885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (2))){
var inst_23736 = (state_23817[(7)]);
var inst_23736__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23817__$1 = (function (){var statearr_23841 = state_23817;
(statearr_23841[(7)] = inst_23736__$1);

return statearr_23841;
})();
if(cljs.core.truth_(inst_23736__$1)){
var statearr_23842_23886 = state_23817__$1;
(statearr_23842_23886[(1)] = (5));

} else {
var statearr_23843_23887 = state_23817__$1;
(statearr_23843_23887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (23))){
var inst_23779 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23779)){
var statearr_23844_23888 = state_23817__$1;
(statearr_23844_23888[(1)] = (25));

} else {
var statearr_23845_23889 = state_23817__$1;
(statearr_23845_23889[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (35))){
var state_23817__$1 = state_23817;
var statearr_23846_23890 = state_23817__$1;
(statearr_23846_23890[(2)] = null);

(statearr_23846_23890[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (19))){
var inst_23774 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23774)){
var statearr_23847_23891 = state_23817__$1;
(statearr_23847_23891[(1)] = (22));

} else {
var statearr_23848_23892 = state_23817__$1;
(statearr_23848_23892[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (11))){
var inst_23745 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23849_23893 = state_23817__$1;
(statearr_23849_23893[(2)] = inst_23745);

(statearr_23849_23893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (9))){
var inst_23747 = figwheel.client.heads_up.clear.call(null);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(12),inst_23747);
} else {
if((state_val_23818 === (5))){
var inst_23738 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23817__$1 = state_23817;
var statearr_23850_23894 = state_23817__$1;
(statearr_23850_23894[(2)] = inst_23738);

(statearr_23850_23894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (14))){
var inst_23765 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23765)){
var statearr_23851_23895 = state_23817__$1;
(statearr_23851_23895[(1)] = (18));

} else {
var statearr_23852_23896 = state_23817__$1;
(statearr_23852_23896[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (26))){
var inst_23789 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23789)){
var statearr_23853_23897 = state_23817__$1;
(statearr_23853_23897[(1)] = (30));

} else {
var statearr_23854_23898 = state_23817__$1;
(statearr_23854_23898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (16))){
var inst_23757 = (state_23817[(2)]);
var inst_23758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23759 = figwheel.client.format_messages.call(null,inst_23758);
var inst_23760 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23761 = figwheel.client.heads_up.display_error.call(null,inst_23759,inst_23760);
var state_23817__$1 = (function (){var statearr_23855 = state_23817;
(statearr_23855[(9)] = inst_23757);

return statearr_23855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(17),inst_23761);
} else {
if((state_val_23818 === (30))){
var inst_23791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23792 = figwheel.client.heads_up.display_warning.call(null,inst_23791);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(33),inst_23792);
} else {
if((state_val_23818 === (10))){
var inst_23751 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23856_23899 = state_23817__$1;
(statearr_23856_23899[(2)] = inst_23751);

(statearr_23856_23899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (18))){
var inst_23767 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23768 = figwheel.client.format_messages.call(null,inst_23767);
var inst_23769 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23770 = figwheel.client.heads_up.display_error.call(null,inst_23768,inst_23769);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(21),inst_23770);
} else {
if((state_val_23818 === (37))){
var inst_23800 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23857_23900 = state_23817__$1;
(statearr_23857_23900[(2)] = inst_23800);

(statearr_23857_23900[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (8))){
var inst_23743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(11),inst_23743);
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
});})(c__18972__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0 = (function (){
var statearr_23861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23861[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__);

(statearr_23861[(1)] = (1));

return statearr_23861;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1 = (function (state_23817){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object)){
var ex__18864__auto__ = e23862;
var statearr_23863_23901 = state_23817;
(statearr_23863_23901[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23902 = state_23817;
state_23817 = G__23902;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg))
})();
var state__18974__auto__ = (function (){var statearr_23864 = f__18973__auto__.call(null);
(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_23864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,msg_hist,msg_names,msg))
);

return c__18972__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18972__auto___23965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___23965,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___23965,ch){
return (function (state_23948){
var state_val_23949 = (state_23948[(1)]);
if((state_val_23949 === (1))){
var state_23948__$1 = state_23948;
var statearr_23950_23966 = state_23948__$1;
(statearr_23950_23966[(2)] = null);

(statearr_23950_23966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (2))){
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,(4),ch);
} else {
if((state_val_23949 === (3))){
var inst_23946 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23948__$1,inst_23946);
} else {
if((state_val_23949 === (4))){
var inst_23936 = (state_23948[(7)]);
var inst_23936__$1 = (state_23948[(2)]);
var state_23948__$1 = (function (){var statearr_23951 = state_23948;
(statearr_23951[(7)] = inst_23936__$1);

return statearr_23951;
})();
if(cljs.core.truth_(inst_23936__$1)){
var statearr_23952_23967 = state_23948__$1;
(statearr_23952_23967[(1)] = (5));

} else {
var statearr_23953_23968 = state_23948__$1;
(statearr_23953_23968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (5))){
var inst_23936 = (state_23948[(7)]);
var inst_23938 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23936);
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,(8),inst_23938);
} else {
if((state_val_23949 === (6))){
var state_23948__$1 = state_23948;
var statearr_23954_23969 = state_23948__$1;
(statearr_23954_23969[(2)] = null);

(statearr_23954_23969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (7))){
var inst_23944 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
var statearr_23955_23970 = state_23948__$1;
(statearr_23955_23970[(2)] = inst_23944);

(statearr_23955_23970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (8))){
var inst_23940 = (state_23948[(2)]);
var state_23948__$1 = (function (){var statearr_23956 = state_23948;
(statearr_23956[(8)] = inst_23940);

return statearr_23956;
})();
var statearr_23957_23971 = state_23948__$1;
(statearr_23957_23971[(2)] = null);

(statearr_23957_23971[(1)] = (2));


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
});})(c__18972__auto___23965,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___23965,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_23961 = [null,null,null,null,null,null,null,null,null];
(statearr_23961[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18861__auto__);

(statearr_23961[(1)] = (1));

return statearr_23961;
});
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1 = (function (state_23948){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23962){if((e23962 instanceof Object)){
var ex__18864__auto__ = e23962;
var statearr_23963_23972 = state_23948;
(statearr_23963_23972[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23973 = state_23948;
state_23948 = G__23973;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = function(state_23948){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1.call(this,state_23948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___23965,ch))
})();
var state__18974__auto__ = (function (){var statearr_23964 = f__18973__auto__.call(null);
(statearr_23964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___23965);

return statearr_23964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___23965,ch))
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
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_23994){
var state_val_23995 = (state_23994[(1)]);
if((state_val_23995 === (1))){
var inst_23989 = cljs.core.async.timeout.call(null,(3000));
var state_23994__$1 = state_23994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23994__$1,(2),inst_23989);
} else {
if((state_val_23995 === (2))){
var inst_23991 = (state_23994[(2)]);
var inst_23992 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23994__$1 = (function (){var statearr_23996 = state_23994;
(statearr_23996[(7)] = inst_23991);

return statearr_23996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23994__$1,inst_23992);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_24000 = [null,null,null,null,null,null,null,null];
(statearr_24000[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__);

(statearr_24000[(1)] = (1));

return statearr_24000;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1 = (function (state_23994){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e24001){if((e24001 instanceof Object)){
var ex__18864__auto__ = e24001;
var statearr_24002_24004 = state_23994;
(statearr_24002_24004[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24005 = state_23994;
state_23994 = G__24005;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = function(state_23994){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1.call(this,state_23994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_24003 = f__18973__auto__.call(null);
(statearr_24003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24006){
var map__24013 = p__24006;
var map__24013__$1 = ((((!((map__24013 == null)))?((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24013):map__24013);
var ed = map__24013__$1;
var formatted_exception = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24015_24019 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24016_24020 = null;
var count__24017_24021 = (0);
var i__24018_24022 = (0);
while(true){
if((i__24018_24022 < count__24017_24021)){
var msg_24023 = cljs.core._nth.call(null,chunk__24016_24020,i__24018_24022);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24023);

var G__24024 = seq__24015_24019;
var G__24025 = chunk__24016_24020;
var G__24026 = count__24017_24021;
var G__24027 = (i__24018_24022 + (1));
seq__24015_24019 = G__24024;
chunk__24016_24020 = G__24025;
count__24017_24021 = G__24026;
i__24018_24022 = G__24027;
continue;
} else {
var temp__4425__auto___24028 = cljs.core.seq.call(null,seq__24015_24019);
if(temp__4425__auto___24028){
var seq__24015_24029__$1 = temp__4425__auto___24028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24015_24029__$1)){
var c__17608__auto___24030 = cljs.core.chunk_first.call(null,seq__24015_24029__$1);
var G__24031 = cljs.core.chunk_rest.call(null,seq__24015_24029__$1);
var G__24032 = c__17608__auto___24030;
var G__24033 = cljs.core.count.call(null,c__17608__auto___24030);
var G__24034 = (0);
seq__24015_24019 = G__24031;
chunk__24016_24020 = G__24032;
count__24017_24021 = G__24033;
i__24018_24022 = G__24034;
continue;
} else {
var msg_24035 = cljs.core.first.call(null,seq__24015_24029__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24035);

var G__24036 = cljs.core.next.call(null,seq__24015_24029__$1);
var G__24037 = null;
var G__24038 = (0);
var G__24039 = (0);
seq__24015_24019 = G__24036;
chunk__24016_24020 = G__24037;
count__24017_24021 = G__24038;
i__24018_24022 = G__24039;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24040){
var map__24043 = p__24040;
var map__24043__$1 = ((((!((map__24043 == null)))?((((map__24043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);
var w = map__24043__$1;
var message = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24051 = cljs.core.seq.call(null,plugins);
var chunk__24052 = null;
var count__24053 = (0);
var i__24054 = (0);
while(true){
if((i__24054 < count__24053)){
var vec__24055 = cljs.core._nth.call(null,chunk__24052,i__24054);
var k = cljs.core.nth.call(null,vec__24055,(0),null);
var plugin = cljs.core.nth.call(null,vec__24055,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24057 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24051,chunk__24052,count__24053,i__24054,pl_24057,vec__24055,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24057.call(null,msg_hist);
});})(seq__24051,chunk__24052,count__24053,i__24054,pl_24057,vec__24055,k,plugin))
);
} else {
}

var G__24058 = seq__24051;
var G__24059 = chunk__24052;
var G__24060 = count__24053;
var G__24061 = (i__24054 + (1));
seq__24051 = G__24058;
chunk__24052 = G__24059;
count__24053 = G__24060;
i__24054 = G__24061;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24051);
if(temp__4425__auto__){
var seq__24051__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24051__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24051__$1);
var G__24062 = cljs.core.chunk_rest.call(null,seq__24051__$1);
var G__24063 = c__17608__auto__;
var G__24064 = cljs.core.count.call(null,c__17608__auto__);
var G__24065 = (0);
seq__24051 = G__24062;
chunk__24052 = G__24063;
count__24053 = G__24064;
i__24054 = G__24065;
continue;
} else {
var vec__24056 = cljs.core.first.call(null,seq__24051__$1);
var k = cljs.core.nth.call(null,vec__24056,(0),null);
var plugin = cljs.core.nth.call(null,vec__24056,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24066 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24051,chunk__24052,count__24053,i__24054,pl_24066,vec__24056,k,plugin,seq__24051__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24066.call(null,msg_hist);
});})(seq__24051,chunk__24052,count__24053,i__24054,pl_24066,vec__24056,k,plugin,seq__24051__$1,temp__4425__auto__))
);
} else {
}

var G__24067 = cljs.core.next.call(null,seq__24051__$1);
var G__24068 = null;
var G__24069 = (0);
var G__24070 = (0);
seq__24051 = G__24067;
chunk__24052 = G__24068;
count__24053 = G__24069;
i__24054 = G__24070;
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
var args24071 = [];
var len__17863__auto___24074 = arguments.length;
var i__17864__auto___24075 = (0);
while(true){
if((i__17864__auto___24075 < len__17863__auto___24074)){
args24071.push((arguments[i__17864__auto___24075]));

var G__24076 = (i__17864__auto___24075 + (1));
i__17864__auto___24075 = G__24076;
continue;
} else {
}
break;
}

var G__24073 = args24071.length;
switch (G__24073) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24071.length)].join('')));

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
var len__17863__auto___24082 = arguments.length;
var i__17864__auto___24083 = (0);
while(true){
if((i__17864__auto___24083 < len__17863__auto___24082)){
args__17870__auto__.push((arguments[i__17864__auto___24083]));

var G__24084 = (i__17864__auto___24083 + (1));
i__17864__auto___24083 = G__24084;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24079){
var map__24080 = p__24079;
var map__24080__$1 = ((((!((map__24080 == null)))?((((map__24080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24080):map__24080);
var opts = map__24080__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24078){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24078));
});

//# sourceMappingURL=client.js.map?rel=1456351337863