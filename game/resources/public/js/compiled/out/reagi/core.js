// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagi.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
reagi.core.Signal = function(){};

/**
 * True if the signal's value will no longer change.
 */
reagi.core.complete_QMARK_ = (function reagi$core$complete_QMARK_(signal){
if((!((signal == null))) && (!((signal.reagi$core$Signal$complete_QMARK_$arity$1 == null)))){
return signal.reagi$core$Signal$complete_QMARK_$arity$1(signal);
} else {
var x__19419__auto__ = (((signal == null))?null:signal);
var m__19420__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,signal);
} else {
var m__19420__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,signal);
} else {
throw cljs.core.missing_protocol.call(null,"Signal.complete?",signal);
}
}
}
});

/**
 * True if the object is a behavior or event stream.
 */
reagi.core.signal_QMARK_ = (function reagi$core$signal_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagi$core$Signal$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
}
});

/**
 * @interface
 */
reagi.core.Boxed = function(){};

/**
 * Unbox a boxed value.
 */
reagi.core.unbox = (function reagi$core$unbox(x){
if((!((x == null))) && (!((x.reagi$core$Boxed$unbox$arity$1 == null)))){
return x.reagi$core$Boxed$unbox$arity$1(x);
} else {
var x__19419__auto__ = (((x == null))?null:x);
var m__19420__auto__ = (reagi.core.unbox[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,x);
} else {
var m__19420__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Boxed.unbox",x);
}
}
}
});


/**
* @constructor
 * @implements {reagi.core.Boxed}
*/
reagi.core.Completed = (function (x){
this.x = x;
})
reagi.core.Completed.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Completed.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.Completed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
});

reagi.core.Completed.cljs$lang$type = true;

reagi.core.Completed.cljs$lang$ctorStr = "reagi.core/Completed";

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/Completed");
});

reagi.core.__GT_Completed = (function reagi$core$__GT_Completed(x){
return (new reagi.core.Completed(x));
});

/**
 * Wraps x to guarantee that it will be the last value in a behavior or event
 *   stream. The value of x will be cached, and any values after x will be
 *   ignored.
 */
reagi.core.completed = (function reagi$core$completed(x){
return (new reagi.core.Completed(x));
});
/**
 * Box a value to ensure it can be sent through a channel.
 */
reagi.core.box = (function reagi$core$box(x){
if((x instanceof reagi.core.Completed)){
return x;
} else {
if(typeof reagi.core.t_reagi$core25529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25529 = (function (x,meta25530){
this.x = x;
this.meta25530 = meta25530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25531,meta25530__$1){
var self__ = this;
var _25531__$1 = this;
return (new reagi.core.t_reagi$core25529(self__.x,meta25530__$1));
});

reagi.core.t_reagi$core25529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25531){
var self__ = this;
var _25531__$1 = this;
return self__.meta25530;
});

reagi.core.t_reagi$core25529.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25529.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core25529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta25530","meta25530",-1096473380,null)], null);
});

reagi.core.t_reagi$core25529.cljs$lang$type = true;

reagi.core.t_reagi$core25529.cljs$lang$ctorStr = "reagi.core/t_reagi$core25529";

reagi.core.t_reagi$core25529.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/t_reagi$core25529");
});

reagi.core.__GT_t_reagi$core25529 = (function reagi$core$box_$___GT_t_reagi$core25529(x__$1,meta25530){
return (new reagi.core.t_reagi$core25529(x__$1,meta25530));
});

}

return (new reagi.core.t_reagi$core25529(x,cljs.core.PersistentArrayMap.EMPTY));
}
});
(reagi.core.Boxed["_"] = true);

(reagi.core.unbox["_"] = (function (x){
return x;
}));

/**
* @constructor
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
*/
reagi.core.Behavior = (function (func,cache){
this.func = func;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.Behavior.prototype.cljs$core$IDeref$_deref$arity$1 = (function (behavior){
var self__ = this;
var behavior__$1 = this;
return reagi.core.unbox.call(null,cljs.core.swap_BANG_.call(null,self__.cache,((function (behavior__$1){
return (function (p1__25532_SHARP_){
if((p1__25532_SHARP_ instanceof reagi.core.Completed)){
return p1__25532_SHARP_;
} else {
return self__.func.call(null);
}
});})(behavior__$1))
));
});

reagi.core.Behavior.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Behavior.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.call(null,self__.cache) instanceof reagi.core.Completed);
});

reagi.core.Behavior.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

reagi.core.Behavior.cljs$lang$type = true;

reagi.core.Behavior.cljs$lang$ctorStr = "reagi.core/Behavior";

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/Behavior");
});

reagi.core.__GT_Behavior = (function reagi$core$__GT_Behavior(func,cache){
return (new reagi.core.Behavior(func,cache));
});

/**
 * Takes a zero-argument function and yields a Behavior object that will
 *   evaluate the function each time it is dereferenced. See: behavior.
 */
reagi.core.behavior_call = (function reagi$core$behavior_call(func){
return (new reagi.core.Behavior(func,cljs.core.atom.call(null,null)));
});
/**
 * Return true if the object is a behavior.
 */
reagi.core.behavior_QMARK_ = (function reagi$core$behavior_QMARK_(x){
return (x instanceof reagi.core.Behavior);
});
/**
 * A behavior that tracks the current time in seconds.
 */
reagi.core.time = reagi.core.behavior_call.call(null,(function (){
return ((new Date()).getTime() / 1000.0);
}));
/**
 * Return a behavior that tracks the time in seconds from when it was created.
 */
reagi.core.delta = (function reagi$core$delta(){
var t = cljs.core.deref.call(null,reagi.core.time);
return reagi.core.behavior_call.call(null,((function (t){
return (function (){
return (cljs.core.deref.call(null,reagi.core.time) - t);
});})(t))
);
});

/**
 * @interface
 */
reagi.core.Observable = function(){};

/**
 * Return a write-only core.async channel. Any elements send to the port will
 *  be distributed to the listener channels in parallel. Each listener must
 *  accept before the next item is distributed.
 */
reagi.core.port = (function reagi$core$port(ob){
if((!((ob == null))) && (!((ob.reagi$core$Observable$port$arity$1 == null)))){
return ob.reagi$core$Observable$port$arity$1(ob);
} else {
var x__19419__auto__ = (((ob == null))?null:ob);
var m__19420__auto__ = (reagi.core.port[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,ob);
} else {
var m__19420__auto____$1 = (reagi.core.port["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,ob);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.port",ob);
}
}
}
});

/**
 * Add a listener channel to the observable. The channel will be closed
 *  when the port of the observable is closed. Returns the channel.
 * 
 *  Any events sent to the channel will be boxed to protect the channel from
 *  nils. To listen for unboxed events, use subscribe.
 */
reagi.core.listen = (function reagi$core$listen(ob,ch){
if((!((ob == null))) && (!((ob.reagi$core$Observable$listen$arity$2 == null)))){
return ob.reagi$core$Observable$listen$arity$2(ob,ch);
} else {
var x__19419__auto__ = (((ob == null))?null:ob);
var m__19420__auto__ = (reagi.core.listen[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,ob,ch);
} else {
var m__19420__auto____$1 = (reagi.core.listen["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,ob,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.listen",ob);
}
}
}
});

/**
 * A version of clojure.core.async/mult that fixes ASYNC-64.
 *   This can be removed once a fix is released for core.async.
 */
reagi.core.mult_STAR_ = (function reagi$core$mult_STAR_(ch){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.PersistentArrayMap.EMPTY], null));
var m = (function (){
if(typeof reagi.core.t_reagi$core25784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25784 = (function (ch,state,meta25785){
this.ch = ch;
this.state = state;
this.meta25785 = meta25785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_25786,meta25785__$1){
var self__ = this;
var _25786__$1 = this;
return (new reagi.core.t_reagi$core25784(self__.ch,self__.state,meta25785__$1));
});})(state))
;

reagi.core.t_reagi$core25784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_25786){
var self__ = this;
var _25786__$1 = this;
return self__.meta25785;
});})(state))
;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__25790){
var vec__25791 = p__25790;
var o_QMARK_ = cljs.core.nth.call(null,vec__25791,(0),null);
var cs = cljs.core.nth.call(null,vec__25791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__25787 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__25787,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25787,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25794){
var vec__25795 = p__25794;
var open_QMARK_ = cljs.core.nth.call(null,vec__25795,(0),null);
var cs = cljs.core.nth.call(null,vec__25795,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core25784.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25798){
var vec__25799 = p__25798;
var open_QMARK_ = cljs.core.nth.call(null,vec__25799,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25799,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core25784.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta25785","meta25785",891296367,null)], null);
});})(state))
;

reagi.core.t_reagi$core25784.cljs$lang$type = true;

reagi.core.t_reagi$core25784.cljs$lang$ctorStr = "reagi.core/t_reagi$core25784";

reagi.core.t_reagi$core25784.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/t_reagi$core25784");
});})(state))
;

reagi.core.__GT_t_reagi$core25784 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core25784(ch__$1,state__$1,meta25785){
return (new reagi.core.t_reagi$core25784(ch__$1,state__$1,meta25785));
});})(state))
;

}

return (new reagi.core.t_reagi$core25784(ch,state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (state,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(state,m,dchan,dctr))
;
var c__21296__auto___26035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___26035,state,m,dchan,dctr,done){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___26035,state,m,dchan,dctr,done){
return (function (state_25944){
var state_val_25945 = (state_25944[(1)]);
if((state_val_25945 === (7))){
var inst_25940 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25946_26036 = state_25944__$1;
(statearr_25946_26036[(2)] = inst_25940);

(statearr_25946_26036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (20))){
var inst_25842 = (state_25944[(7)]);
var inst_25854 = cljs.core.first.call(null,inst_25842);
var inst_25855 = cljs.core.nth.call(null,inst_25854,(0),null);
var inst_25856 = cljs.core.nth.call(null,inst_25854,(1),null);
var state_25944__$1 = (function (){var statearr_25947 = state_25944;
(statearr_25947[(8)] = inst_25855);

return statearr_25947;
})();
if(cljs.core.truth_(inst_25856)){
var statearr_25948_26037 = state_25944__$1;
(statearr_25948_26037[(1)] = (22));

} else {
var statearr_25949_26038 = state_25944__$1;
(statearr_25949_26038[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (27))){
var inst_25887 = (state_25944[(9)]);
var inst_25885 = (state_25944[(10)]);
var inst_25892 = (state_25944[(11)]);
var inst_25804 = (state_25944[(12)]);
var inst_25892__$1 = cljs.core._nth.call(null,inst_25885,inst_25887);
var inst_25893 = cljs.core.async.put_BANG_.call(null,inst_25892__$1,inst_25804,done);
var state_25944__$1 = (function (){var statearr_25950 = state_25944;
(statearr_25950[(11)] = inst_25892__$1);

return statearr_25950;
})();
if(cljs.core.truth_(inst_25893)){
var statearr_25951_26039 = state_25944__$1;
(statearr_25951_26039[(1)] = (30));

} else {
var statearr_25952_26040 = state_25944__$1;
(statearr_25952_26040[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (1))){
var state_25944__$1 = state_25944;
var statearr_25953_26041 = state_25944__$1;
(statearr_25953_26041[(2)] = null);

(statearr_25953_26041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (24))){
var inst_25842 = (state_25944[(7)]);
var inst_25861 = (state_25944[(2)]);
var inst_25862 = cljs.core.next.call(null,inst_25842);
var inst_25820 = inst_25862;
var inst_25821 = null;
var inst_25822 = (0);
var inst_25823 = (0);
var state_25944__$1 = (function (){var statearr_25954 = state_25944;
(statearr_25954[(13)] = inst_25821);

(statearr_25954[(14)] = inst_25823);

(statearr_25954[(15)] = inst_25822);

(statearr_25954[(16)] = inst_25861);

(statearr_25954[(17)] = inst_25820);

return statearr_25954;
})();
var statearr_25955_26042 = state_25944__$1;
(statearr_25955_26042[(2)] = null);

(statearr_25955_26042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (39))){
var state_25944__$1 = state_25944;
var statearr_25959_26043 = state_25944__$1;
(statearr_25959_26043[(2)] = null);

(statearr_25959_26043[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (4))){
var inst_25804 = (state_25944[(12)]);
var inst_25804__$1 = (state_25944[(2)]);
var inst_25805 = (inst_25804__$1 == null);
var state_25944__$1 = (function (){var statearr_25960 = state_25944;
(statearr_25960[(12)] = inst_25804__$1);

return statearr_25960;
})();
if(cljs.core.truth_(inst_25805)){
var statearr_25961_26044 = state_25944__$1;
(statearr_25961_26044[(1)] = (5));

} else {
var statearr_25962_26045 = state_25944__$1;
(statearr_25962_26045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (15))){
var inst_25821 = (state_25944[(13)]);
var inst_25823 = (state_25944[(14)]);
var inst_25822 = (state_25944[(15)]);
var inst_25820 = (state_25944[(17)]);
var inst_25838 = (state_25944[(2)]);
var inst_25839 = (inst_25823 + (1));
var tmp25956 = inst_25821;
var tmp25957 = inst_25822;
var tmp25958 = inst_25820;
var inst_25820__$1 = tmp25958;
var inst_25821__$1 = tmp25956;
var inst_25822__$1 = tmp25957;
var inst_25823__$1 = inst_25839;
var state_25944__$1 = (function (){var statearr_25963 = state_25944;
(statearr_25963[(13)] = inst_25821__$1);

(statearr_25963[(18)] = inst_25838);

(statearr_25963[(14)] = inst_25823__$1);

(statearr_25963[(15)] = inst_25822__$1);

(statearr_25963[(17)] = inst_25820__$1);

return statearr_25963;
})();
var statearr_25964_26046 = state_25944__$1;
(statearr_25964_26046[(2)] = null);

(statearr_25964_26046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (21))){
var inst_25865 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25968_26047 = state_25944__$1;
(statearr_25968_26047[(2)] = inst_25865);

(statearr_25968_26047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (31))){
var inst_25892 = (state_25944[(11)]);
var inst_25896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25897 = cljs.core.async.untap_STAR_.call(null,m,inst_25892);
var state_25944__$1 = (function (){var statearr_25969 = state_25944;
(statearr_25969[(19)] = inst_25896);

return statearr_25969;
})();
var statearr_25970_26048 = state_25944__$1;
(statearr_25970_26048[(2)] = inst_25897);

(statearr_25970_26048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (32))){
var inst_25887 = (state_25944[(9)]);
var inst_25886 = (state_25944[(20)]);
var inst_25885 = (state_25944[(10)]);
var inst_25884 = (state_25944[(21)]);
var inst_25899 = (state_25944[(2)]);
var inst_25900 = (inst_25887 + (1));
var tmp25965 = inst_25886;
var tmp25966 = inst_25885;
var tmp25967 = inst_25884;
var inst_25884__$1 = tmp25967;
var inst_25885__$1 = tmp25966;
var inst_25886__$1 = tmp25965;
var inst_25887__$1 = inst_25900;
var state_25944__$1 = (function (){var statearr_25971 = state_25944;
(statearr_25971[(9)] = inst_25887__$1);

(statearr_25971[(20)] = inst_25886__$1);

(statearr_25971[(10)] = inst_25885__$1);

(statearr_25971[(22)] = inst_25899);

(statearr_25971[(21)] = inst_25884__$1);

return statearr_25971;
})();
var statearr_25972_26049 = state_25944__$1;
(statearr_25972_26049[(2)] = null);

(statearr_25972_26049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (40))){
var inst_25912 = (state_25944[(23)]);
var inst_25916 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25917 = cljs.core.async.untap_STAR_.call(null,m,inst_25912);
var state_25944__$1 = (function (){var statearr_25973 = state_25944;
(statearr_25973[(24)] = inst_25916);

return statearr_25973;
})();
var statearr_25974_26050 = state_25944__$1;
(statearr_25974_26050[(2)] = inst_25917);

(statearr_25974_26050[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (33))){
var inst_25903 = (state_25944[(25)]);
var inst_25905 = cljs.core.chunked_seq_QMARK_.call(null,inst_25903);
var state_25944__$1 = state_25944;
if(inst_25905){
var statearr_25975_26051 = state_25944__$1;
(statearr_25975_26051[(1)] = (36));

} else {
var statearr_25976_26052 = state_25944__$1;
(statearr_25976_26052[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (13))){
var inst_25832 = (state_25944[(26)]);
var inst_25835 = cljs.core.async.close_BANG_.call(null,inst_25832);
var state_25944__$1 = state_25944;
var statearr_25977_26053 = state_25944__$1;
(statearr_25977_26053[(2)] = inst_25835);

(statearr_25977_26053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (22))){
var inst_25855 = (state_25944[(8)]);
var inst_25858 = cljs.core.async.close_BANG_.call(null,inst_25855);
var state_25944__$1 = state_25944;
var statearr_25978_26054 = state_25944__$1;
(statearr_25978_26054[(2)] = inst_25858);

(statearr_25978_26054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (36))){
var inst_25903 = (state_25944[(25)]);
var inst_25907 = cljs.core.chunk_first.call(null,inst_25903);
var inst_25908 = cljs.core.chunk_rest.call(null,inst_25903);
var inst_25909 = cljs.core.count.call(null,inst_25907);
var inst_25884 = inst_25908;
var inst_25885 = inst_25907;
var inst_25886 = inst_25909;
var inst_25887 = (0);
var state_25944__$1 = (function (){var statearr_25979 = state_25944;
(statearr_25979[(9)] = inst_25887);

(statearr_25979[(20)] = inst_25886);

(statearr_25979[(10)] = inst_25885);

(statearr_25979[(21)] = inst_25884);

return statearr_25979;
})();
var statearr_25980_26055 = state_25944__$1;
(statearr_25980_26055[(2)] = null);

(statearr_25980_26055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (41))){
var inst_25903 = (state_25944[(25)]);
var inst_25919 = (state_25944[(2)]);
var inst_25920 = cljs.core.next.call(null,inst_25903);
var inst_25884 = inst_25920;
var inst_25885 = null;
var inst_25886 = (0);
var inst_25887 = (0);
var state_25944__$1 = (function (){var statearr_25981 = state_25944;
(statearr_25981[(9)] = inst_25887);

(statearr_25981[(20)] = inst_25886);

(statearr_25981[(10)] = inst_25885);

(statearr_25981[(27)] = inst_25919);

(statearr_25981[(21)] = inst_25884);

return statearr_25981;
})();
var statearr_25982_26056 = state_25944__$1;
(statearr_25982_26056[(2)] = null);

(statearr_25982_26056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (43))){
var state_25944__$1 = state_25944;
var statearr_25983_26057 = state_25944__$1;
(statearr_25983_26057[(2)] = null);

(statearr_25983_26057[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (29))){
var inst_25928 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25984_26058 = state_25944__$1;
(statearr_25984_26058[(2)] = inst_25928);

(statearr_25984_26058[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (44))){
var inst_25937 = (state_25944[(2)]);
var state_25944__$1 = (function (){var statearr_25985 = state_25944;
(statearr_25985[(28)] = inst_25937);

return statearr_25985;
})();
var statearr_25986_26059 = state_25944__$1;
(statearr_25986_26059[(2)] = null);

(statearr_25986_26059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (6))){
var inst_25876 = (state_25944[(29)]);
var inst_25874 = cljs.core.deref.call(null,state);
var inst_25875 = cljs.core.second.call(null,inst_25874);
var inst_25876__$1 = cljs.core.keys.call(null,inst_25875);
var inst_25877 = cljs.core.count.call(null,inst_25876__$1);
var inst_25878 = cljs.core.reset_BANG_.call(null,dctr,inst_25877);
var inst_25883 = cljs.core.seq.call(null,inst_25876__$1);
var inst_25884 = inst_25883;
var inst_25885 = null;
var inst_25886 = (0);
var inst_25887 = (0);
var state_25944__$1 = (function (){var statearr_25987 = state_25944;
(statearr_25987[(9)] = inst_25887);

(statearr_25987[(20)] = inst_25886);

(statearr_25987[(10)] = inst_25885);

(statearr_25987[(21)] = inst_25884);

(statearr_25987[(30)] = inst_25878);

(statearr_25987[(29)] = inst_25876__$1);

return statearr_25987;
})();
var statearr_25988_26060 = state_25944__$1;
(statearr_25988_26060[(2)] = null);

(statearr_25988_26060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (28))){
var inst_25884 = (state_25944[(21)]);
var inst_25903 = (state_25944[(25)]);
var inst_25903__$1 = cljs.core.seq.call(null,inst_25884);
var state_25944__$1 = (function (){var statearr_25989 = state_25944;
(statearr_25989[(25)] = inst_25903__$1);

return statearr_25989;
})();
if(inst_25903__$1){
var statearr_25990_26061 = state_25944__$1;
(statearr_25990_26061[(1)] = (33));

} else {
var statearr_25991_26062 = state_25944__$1;
(statearr_25991_26062[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (25))){
var inst_25887 = (state_25944[(9)]);
var inst_25886 = (state_25944[(20)]);
var inst_25889 = (inst_25887 < inst_25886);
var inst_25890 = inst_25889;
var state_25944__$1 = state_25944;
if(cljs.core.truth_(inst_25890)){
var statearr_25992_26063 = state_25944__$1;
(statearr_25992_26063[(1)] = (27));

} else {
var statearr_25993_26064 = state_25944__$1;
(statearr_25993_26064[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (34))){
var state_25944__$1 = state_25944;
var statearr_25994_26065 = state_25944__$1;
(statearr_25994_26065[(2)] = null);

(statearr_25994_26065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (17))){
var state_25944__$1 = state_25944;
var statearr_25995_26066 = state_25944__$1;
(statearr_25995_26066[(2)] = null);

(statearr_25995_26066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (3))){
var inst_25942 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25944__$1,inst_25942);
} else {
if((state_val_25945 === (12))){
var inst_25870 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25996_26067 = state_25944__$1;
(statearr_25996_26067[(2)] = inst_25870);

(statearr_25996_26067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (2))){
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25944__$1,(4),ch);
} else {
if((state_val_25945 === (23))){
var state_25944__$1 = state_25944;
var statearr_25997_26068 = state_25944__$1;
(statearr_25997_26068[(2)] = null);

(statearr_25997_26068[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (35))){
var inst_25926 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_25998_26069 = state_25944__$1;
(statearr_25998_26069[(2)] = inst_25926);

(statearr_25998_26069[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (19))){
var inst_25842 = (state_25944[(7)]);
var inst_25846 = cljs.core.chunk_first.call(null,inst_25842);
var inst_25847 = cljs.core.chunk_rest.call(null,inst_25842);
var inst_25848 = cljs.core.count.call(null,inst_25846);
var inst_25820 = inst_25847;
var inst_25821 = inst_25846;
var inst_25822 = inst_25848;
var inst_25823 = (0);
var state_25944__$1 = (function (){var statearr_25999 = state_25944;
(statearr_25999[(13)] = inst_25821);

(statearr_25999[(14)] = inst_25823);

(statearr_25999[(15)] = inst_25822);

(statearr_25999[(17)] = inst_25820);

return statearr_25999;
})();
var statearr_26000_26070 = state_25944__$1;
(statearr_26000_26070[(2)] = null);

(statearr_26000_26070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (11))){
var inst_25842 = (state_25944[(7)]);
var inst_25820 = (state_25944[(17)]);
var inst_25842__$1 = cljs.core.seq.call(null,inst_25820);
var state_25944__$1 = (function (){var statearr_26001 = state_25944;
(statearr_26001[(7)] = inst_25842__$1);

return statearr_26001;
})();
if(inst_25842__$1){
var statearr_26002_26071 = state_25944__$1;
(statearr_26002_26071[(1)] = (16));

} else {
var statearr_26003_26072 = state_25944__$1;
(statearr_26003_26072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (9))){
var inst_25872 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_26004_26073 = state_25944__$1;
(statearr_26004_26073[(2)] = inst_25872);

(statearr_26004_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (5))){
var inst_25804 = (state_25944[(12)]);
var inst_25811 = (function (){var val = inst_25804;
return ((function (val,inst_25804,state_val_25945,c__21296__auto___26035,state,m,dchan,dctr,done){
return (function (p__25810){
var vec__26005 = p__25810;
var _ = cljs.core.nth.call(null,vec__26005,(0),null);
var cs = cljs.core.nth.call(null,vec__26005,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_25804,state_val_25945,c__21296__auto___26035,state,m,dchan,dctr,done))
})();
var inst_25812 = cljs.core.swap_BANG_.call(null,state,inst_25811);
var inst_25813 = cljs.core.nth.call(null,inst_25812,(0),null);
var inst_25814 = cljs.core.nth.call(null,inst_25812,(1),null);
var inst_25819 = cljs.core.seq.call(null,inst_25814);
var inst_25820 = inst_25819;
var inst_25821 = null;
var inst_25822 = (0);
var inst_25823 = (0);
var state_25944__$1 = (function (){var statearr_26008 = state_25944;
(statearr_26008[(13)] = inst_25821);

(statearr_26008[(14)] = inst_25823);

(statearr_26008[(15)] = inst_25822);

(statearr_26008[(31)] = inst_25813);

(statearr_26008[(17)] = inst_25820);

return statearr_26008;
})();
var statearr_26009_26074 = state_25944__$1;
(statearr_26009_26074[(2)] = null);

(statearr_26009_26074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (14))){
var state_25944__$1 = state_25944;
var statearr_26010_26075 = state_25944__$1;
(statearr_26010_26075[(2)] = null);

(statearr_26010_26075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (45))){
var inst_25934 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_26011_26076 = state_25944__$1;
(statearr_26011_26076[(2)] = inst_25934);

(statearr_26011_26076[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (26))){
var inst_25876 = (state_25944[(29)]);
var inst_25930 = (state_25944[(2)]);
var inst_25931 = cljs.core.seq.call(null,inst_25876);
var state_25944__$1 = (function (){var statearr_26012 = state_25944;
(statearr_26012[(32)] = inst_25930);

return statearr_26012;
})();
if(inst_25931){
var statearr_26013_26077 = state_25944__$1;
(statearr_26013_26077[(1)] = (42));

} else {
var statearr_26014_26078 = state_25944__$1;
(statearr_26014_26078[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (16))){
var inst_25842 = (state_25944[(7)]);
var inst_25844 = cljs.core.chunked_seq_QMARK_.call(null,inst_25842);
var state_25944__$1 = state_25944;
if(inst_25844){
var statearr_26015_26079 = state_25944__$1;
(statearr_26015_26079[(1)] = (19));

} else {
var statearr_26016_26080 = state_25944__$1;
(statearr_26016_26080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (38))){
var inst_25923 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_26017_26081 = state_25944__$1;
(statearr_26017_26081[(2)] = inst_25923);

(statearr_26017_26081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (30))){
var state_25944__$1 = state_25944;
var statearr_26018_26082 = state_25944__$1;
(statearr_26018_26082[(2)] = null);

(statearr_26018_26082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (10))){
var inst_25821 = (state_25944[(13)]);
var inst_25823 = (state_25944[(14)]);
var inst_25831 = cljs.core._nth.call(null,inst_25821,inst_25823);
var inst_25832 = cljs.core.nth.call(null,inst_25831,(0),null);
var inst_25833 = cljs.core.nth.call(null,inst_25831,(1),null);
var state_25944__$1 = (function (){var statearr_26019 = state_25944;
(statearr_26019[(26)] = inst_25832);

return statearr_26019;
})();
if(cljs.core.truth_(inst_25833)){
var statearr_26020_26083 = state_25944__$1;
(statearr_26020_26083[(1)] = (13));

} else {
var statearr_26021_26084 = state_25944__$1;
(statearr_26021_26084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (18))){
var inst_25868 = (state_25944[(2)]);
var state_25944__$1 = state_25944;
var statearr_26022_26085 = state_25944__$1;
(statearr_26022_26085[(2)] = inst_25868);

(statearr_26022_26085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (42))){
var state_25944__$1 = state_25944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25944__$1,(45),dchan);
} else {
if((state_val_25945 === (37))){
var inst_25912 = (state_25944[(23)]);
var inst_25804 = (state_25944[(12)]);
var inst_25903 = (state_25944[(25)]);
var inst_25912__$1 = cljs.core.first.call(null,inst_25903);
var inst_25913 = cljs.core.async.put_BANG_.call(null,inst_25912__$1,inst_25804,done);
var state_25944__$1 = (function (){var statearr_26023 = state_25944;
(statearr_26023[(23)] = inst_25912__$1);

return statearr_26023;
})();
if(cljs.core.truth_(inst_25913)){
var statearr_26024_26086 = state_25944__$1;
(statearr_26024_26086[(1)] = (39));

} else {
var statearr_26025_26087 = state_25944__$1;
(statearr_26025_26087[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25945 === (8))){
var inst_25823 = (state_25944[(14)]);
var inst_25822 = (state_25944[(15)]);
var inst_25825 = (inst_25823 < inst_25822);
var inst_25826 = inst_25825;
var state_25944__$1 = state_25944;
if(cljs.core.truth_(inst_25826)){
var statearr_26026_26088 = state_25944__$1;
(statearr_26026_26088[(1)] = (10));

} else {
var statearr_26027_26089 = state_25944__$1;
(statearr_26027_26089[(1)] = (11));

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
});})(c__21296__auto___26035,state,m,dchan,dctr,done))
;
return ((function (switch__21281__auto__,c__21296__auto___26035,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__21282__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_26031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26031[(0)] = reagi$core$mult_STAR__$_state_machine__21282__auto__);

(statearr_26031[(1)] = (1));

return statearr_26031;
});
var reagi$core$mult_STAR__$_state_machine__21282__auto____1 = (function (state_25944){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_25944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26032){if((e26032 instanceof Object)){
var ex__21285__auto__ = e26032;
var statearr_26033_26090 = state_25944;
(statearr_26033_26090[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26091 = state_25944;
state_25944 = G__26091;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__21282__auto__ = function(state_25944){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__21282__auto____1.call(this,state_25944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__21282__auto____0;
reagi$core$mult_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__21282__auto____1;
return reagi$core$mult_STAR__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___26035,state,m,dchan,dctr,done))
})();
var state__21298__auto__ = (function (){var statearr_26034 = f__21297__auto__.call(null);
(statearr_26034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___26035);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___26035,state,m,dchan,dctr,done))
);


return m;
});
/**
 * Protect a collection of child objects from being GCed before the parent.
 */
reagi.core.depend_on = (function reagi$core$depend_on(parent,children){
return null;
});
reagi.core.deref_events = (function reagi$core$deref_events(head){
var temp__4655__auto__ = cljs.core.deref.call(null,head);
if(cljs.core.truth_(temp__4655__auto__)){
var hd = temp__4655__auto__;
return reagi.core.unbox.call(null,hd);
} else {
return undefined;
}
});

/**
 * @interface
 */
reagi.core.Disposable = function(){};

/**
 * Clean up any resources an object has before it goes out of scope. In
 *  Clojure this is called automatically when the object is finalized. In
 *  ClojureScript this must be called manually.
 */
reagi.core.dispose = (function reagi$core$dispose(x){
if((!((x == null))) && (!((x.reagi$core$Disposable$dispose$arity$1 == null)))){
return x.reagi$core$Disposable$dispose$arity$1(x);
} else {
var x__19419__auto__ = (((x == null))?null:x);
var m__19420__auto__ = (reagi.core.dispose[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,x);
} else {
var m__19420__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.dispose",x);
}
}
}
});

/**
 * Add a function to be called when the object is disposed.
 */
reagi.core.on_dispose = (function reagi$core$on_dispose(x,f){
if((!((x == null))) && (!((x.reagi$core$Disposable$on_dispose$arity$2 == null)))){
return x.reagi$core$Disposable$on_dispose$arity$2(x,f);
} else {
var x__19419__auto__ = (((x == null))?null:x);
var m__19420__auto__ = (reagi.core.on_dispose[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,x,f);
} else {
var m__19420__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,x,f);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.on-dispose",x);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
 * @implements {reagi.core.Disposable}
 * @implements {reagi.core.Observable}
*/
reagi.core.Events = (function (ch,mult,head,closed,disposers){
this.ch = ch;
this.mult = mult;
this.head = head;
this.closed = closed;
this.disposers = disposers;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32769;
})
reagi.core.Events.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return !((cljs.core.deref.call(null,self__.head) == null));
});

reagi.core.Events.prototype.cljs$core$IDeref$_deref$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return reagi.core.deref_events.call(null,self__.head);
});

reagi.core.Events.prototype.call = (function (self__,msg){
var self__ = this;
var self____$1 = this;
var stream = self____$1;
var c__21296__auto___26147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___26147,stream,self____$1){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___26147,stream,self____$1){
return (function (state_26097){
var state_val_26098 = (state_26097[(1)]);
if((state_val_26098 === (1))){
var inst_26093 = reagi.core.box.call(null,msg);
var state_26097__$1 = state_26097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26097__$1,(2),self__.ch,inst_26093);
} else {
if((state_val_26098 === (2))){
var inst_26095 = (state_26097[(2)]);
var state_26097__$1 = state_26097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26097__$1,inst_26095);
} else {
return null;
}
}
});})(c__21296__auto___26147,stream,self____$1))
;
return ((function (switch__21281__auto__,c__21296__auto___26147,stream,self____$1){
return (function() {
var reagi$core$state_machine__21282__auto__ = null;
var reagi$core$state_machine__21282__auto____0 = (function (){
var statearr_26102 = [null,null,null,null,null,null,null];
(statearr_26102[(0)] = reagi$core$state_machine__21282__auto__);

(statearr_26102[(1)] = (1));

return statearr_26102;
});
var reagi$core$state_machine__21282__auto____1 = (function (state_26097){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object)){
var ex__21285__auto__ = e26103;
var statearr_26104_26148 = state_26097;
(statearr_26104_26148[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26149 = state_26097;
state_26097 = G__26149;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$state_machine__21282__auto__ = function(state_26097){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$state_machine__21282__auto____1.call(this,state_26097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21282__auto____0;
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21282__auto____1;
return reagi$core$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___26147,stream,self____$1))
})();
var state__21298__auto__ = (function (){var statearr_26105 = f__21297__auto__.call(null);
(statearr_26105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___26147);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___26147,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args26092){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26092)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__21296__auto___26150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___26150,stream){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___26150,stream){
return (function (state_26110){
var state_val_26111 = (state_26110[(1)]);
if((state_val_26111 === (1))){
var inst_26106 = reagi.core.box.call(null,msg);
var state_26110__$1 = state_26110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26110__$1,(2),self__.ch,inst_26106);
} else {
if((state_val_26111 === (2))){
var inst_26108 = (state_26110[(2)]);
var state_26110__$1 = state_26110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26110__$1,inst_26108);
} else {
return null;
}
}
});})(c__21296__auto___26150,stream))
;
return ((function (switch__21281__auto__,c__21296__auto___26150,stream){
return (function() {
var reagi$core$state_machine__21282__auto__ = null;
var reagi$core$state_machine__21282__auto____0 = (function (){
var statearr_26115 = [null,null,null,null,null,null,null];
(statearr_26115[(0)] = reagi$core$state_machine__21282__auto__);

(statearr_26115[(1)] = (1));

return statearr_26115;
});
var reagi$core$state_machine__21282__auto____1 = (function (state_26110){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26116){if((e26116 instanceof Object)){
var ex__21285__auto__ = e26116;
var statearr_26117_26151 = state_26110;
(statearr_26117_26151[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26152 = state_26110;
state_26110 = G__26152;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$state_machine__21282__auto__ = function(state_26110){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$state_machine__21282__auto____1.call(this,state_26110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21282__auto____0;
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21282__auto____1;
return reagi$core$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___26150,stream))
})();
var state__21298__auto__ = (function (){var statearr_26118 = f__21297__auto__.call(null);
(statearr_26118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___26150);

return statearr_26118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___26150,stream))
);


return stream;
});

reagi.core.Events.prototype.reagi$core$Observable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Observable$port$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});

reagi.core.Events.prototype.reagi$core$Observable$listen$arity$2 = (function (_,channel){
var self__ = this;
var ___$1 = this;
var c__21296__auto___26153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___26153,___$1){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___26153,___$1){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (1))){
var inst_26119 = (state_26128[(7)]);
var inst_26119__$1 = cljs.core.deref.call(null,self__.head);
var state_26128__$1 = (function (){var statearr_26130 = state_26128;
(statearr_26130[(7)] = inst_26119__$1);

return statearr_26130;
})();
if(cljs.core.truth_(inst_26119__$1)){
var statearr_26131_26154 = state_26128__$1;
(statearr_26131_26154[(1)] = (2));

} else {
var statearr_26132_26155 = state_26128__$1;
(statearr_26132_26155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (2))){
var inst_26119 = (state_26128[(7)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(5),channel,inst_26119);
} else {
if((state_val_26129 === (3))){
var state_26128__$1 = state_26128;
var statearr_26133_26156 = state_26128__$1;
(statearr_26133_26156[(2)] = null);

(statearr_26133_26156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (4))){
var inst_26125 = (state_26128[(2)]);
var inst_26126 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_26128__$1 = (function (){var statearr_26134 = state_26128;
(statearr_26134[(8)] = inst_26125);

return statearr_26134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (5))){
var inst_26122 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26135_26157 = state_26128__$1;
(statearr_26135_26157[(2)] = inst_26122);

(statearr_26135_26157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21296__auto___26153,___$1))
;
return ((function (switch__21281__auto__,c__21296__auto___26153,___$1){
return (function() {
var reagi$core$state_machine__21282__auto__ = null;
var reagi$core$state_machine__21282__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null,null,null];
(statearr_26139[(0)] = reagi$core$state_machine__21282__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var reagi$core$state_machine__21282__auto____1 = (function (state_26128){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__21285__auto__ = e26140;
var statearr_26141_26158 = state_26128;
(statearr_26141_26158[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26159 = state_26128;
state_26128 = G__26159;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$state_machine__21282__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$state_machine__21282__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21282__auto____0;
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21282__auto____1;
return reagi$core$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___26153,___$1))
})();
var state__21298__auto__ = (function (){var statearr_26142 = f__21297__auto__.call(null);
(statearr_26142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___26153);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___26153,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__18756__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__26143_26160 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__26144_26161 = null;
var count__26145_26162 = (0);
var i__26146_26163 = (0);
while(true){
if((i__26146_26163 < count__26145_26162)){
var d_26164 = cljs.core._nth.call(null,chunk__26144_26161,i__26146_26163);
d_26164.call(null);

var G__26165 = seq__26143_26160;
var G__26166 = chunk__26144_26161;
var G__26167 = count__26145_26162;
var G__26168 = (i__26146_26163 + (1));
seq__26143_26160 = G__26165;
chunk__26144_26161 = G__26166;
count__26145_26162 = G__26167;
i__26146_26163 = G__26168;
continue;
} else {
var temp__4657__auto___26169 = cljs.core.seq.call(null,seq__26143_26160);
if(temp__4657__auto___26169){
var seq__26143_26170__$1 = temp__4657__auto___26169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26143_26170__$1)){
var c__19570__auto___26171 = cljs.core.chunk_first.call(null,seq__26143_26170__$1);
var G__26172 = cljs.core.chunk_rest.call(null,seq__26143_26170__$1);
var G__26173 = c__19570__auto___26171;
var G__26174 = cljs.core.count.call(null,c__19570__auto___26171);
var G__26175 = (0);
seq__26143_26160 = G__26172;
chunk__26144_26161 = G__26173;
count__26145_26162 = G__26174;
i__26146_26163 = G__26175;
continue;
} else {
var d_26176 = cljs.core.first.call(null,seq__26143_26170__$1);
d_26176.call(null);

var G__26177 = cljs.core.next.call(null,seq__26143_26170__$1);
var G__26178 = null;
var G__26179 = (0);
var G__26180 = (0);
seq__26143_26160 = G__26177;
chunk__26144_26161 = G__26178;
count__26145_26162 = G__26179;
i__26146_26163 = G__26180;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.close_BANG_.call(null,self__.ch);
});

reagi.core.Events.prototype.reagi$core$Disposable$on_dispose$arity$2 = (function (_,d){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.disposers,cljs.core.conj,d);
});

reagi.core.Events.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.Symbol(null,"disposers","disposers",-1899395189,null)], null);
});

reagi.core.Events.cljs$lang$type = true;

reagi.core.Events.cljs$lang$ctorStr = "reagi.core/Events";

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/Events");
});

reagi.core.__GT_Events = (function reagi$core$__GT_Events(ch,mult,head,closed,disposers){
return (new reagi.core.Events(ch,mult,head,closed,disposers));
});

reagi.core.no_op = (function reagi$core$no_op(){
return null;
});
reagi.core.no_value = (new Object());
reagi.core.no_value_QMARK_ = (function reagi$core$no_value_QMARK_(x){
return (x === reagi.core.no_value);
});
/**
 * Create a referential stream of events. An initial value may optionally be
 *   supplied, otherwise the stream will be unrealized until the first value is
 *   pushed to it. Event streams will deref to the latest value pushed to the
 *   stream.
 */
reagi.core.events = (function reagi$core$events(var_args){
var args26181 = [];
var len__19864__auto___26231 = arguments.length;
var i__19865__auto___26232 = (0);
while(true){
if((i__19865__auto___26232 < len__19864__auto___26231)){
args26181.push((arguments[i__19865__auto___26232]));

var G__26233 = (i__19865__auto___26232 + (1));
i__19865__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var G__26183 = args26181.length;
switch (G__26183) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26181.length)].join('')));

}
});

reagi.core.events.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagi.core.events.call(null,reagi.core.no_value);
});

reagi.core.events.cljs$core$IFn$_invoke$arity$1 = (function (init){
var in$ = cljs.core.async.chan.call(null);
var closed = cljs.core.atom.call(null,false);
var head = cljs.core.atom.call(null,(cljs.core.truth_(reagi.core.no_value_QMARK_.call(null,init))?null:reagi.core.box.call(null,init)));
var out = cljs.core.async.chan.call(null);
var mult = reagi.core.mult_STAR_.call(null,out);
var c__21296__auto___26235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___26235,in$,closed,head,out,mult){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___26235,in$,closed,head,out,mult){
return (function (state_26207){
var state_val_26208 = (state_26207[(1)]);
if((state_val_26208 === (7))){
var inst_26193 = (state_26207[(7)]);
var inst_26193__$1 = (state_26207[(2)]);
var state_26207__$1 = (function (){var statearr_26209 = state_26207;
(statearr_26209[(7)] = inst_26193__$1);

return statearr_26209;
})();
if(cljs.core.truth_(inst_26193__$1)){
var statearr_26210_26236 = state_26207__$1;
(statearr_26210_26236[(1)] = (8));

} else {
var statearr_26211_26237 = state_26207__$1;
(statearr_26211_26237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (1))){
var inst_26184 = init;
var state_26207__$1 = (function (){var statearr_26212 = state_26207;
(statearr_26212[(8)] = inst_26184);

return statearr_26212;
})();
var statearr_26213_26238 = state_26207__$1;
(statearr_26213_26238[(2)] = null);

(statearr_26213_26238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (4))){
var inst_26188 = cljs.core.async.close_BANG_.call(null,in$);
var state_26207__$1 = state_26207;
var statearr_26214_26239 = state_26207__$1;
(statearr_26214_26239[(2)] = inst_26188);

(statearr_26214_26239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (6))){
var inst_26191 = (state_26207[(2)]);
var state_26207__$1 = (function (){var statearr_26215 = state_26207;
(statearr_26215[(9)] = inst_26191);

return statearr_26215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26207__$1,(7),in$);
} else {
if((state_val_26208 === (3))){
var inst_26203 = (state_26207[(2)]);
var inst_26204 = cljs.core.async.close_BANG_.call(null,out);
var inst_26205 = cljs.core.reset_BANG_.call(null,closed,true);
var state_26207__$1 = (function (){var statearr_26216 = state_26207;
(statearr_26216[(10)] = inst_26204);

(statearr_26216[(11)] = inst_26203);

return statearr_26216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26207__$1,inst_26205);
} else {
if((state_val_26208 === (2))){
var inst_26184 = (state_26207[(8)]);
var inst_26186 = (inst_26184 instanceof reagi.core.Completed);
var state_26207__$1 = state_26207;
if(cljs.core.truth_(inst_26186)){
var statearr_26217_26240 = state_26207__$1;
(statearr_26217_26240[(1)] = (4));

} else {
var statearr_26218_26241 = state_26207__$1;
(statearr_26218_26241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (11))){
var inst_26193 = (state_26207[(7)]);
var inst_26196 = (state_26207[(2)]);
var inst_26197 = cljs.core.reset_BANG_.call(null,head,inst_26193);
var inst_26184 = inst_26193;
var state_26207__$1 = (function (){var statearr_26219 = state_26207;
(statearr_26219[(8)] = inst_26184);

(statearr_26219[(12)] = inst_26197);

(statearr_26219[(13)] = inst_26196);

return statearr_26219;
})();
var statearr_26220_26242 = state_26207__$1;
(statearr_26220_26242[(2)] = null);

(statearr_26220_26242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (9))){
var state_26207__$1 = state_26207;
var statearr_26221_26243 = state_26207__$1;
(statearr_26221_26243[(2)] = null);

(statearr_26221_26243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (5))){
var state_26207__$1 = state_26207;
var statearr_26222_26244 = state_26207__$1;
(statearr_26222_26244[(2)] = null);

(statearr_26222_26244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (10))){
var inst_26201 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
var statearr_26223_26245 = state_26207__$1;
(statearr_26223_26245[(2)] = inst_26201);

(statearr_26223_26245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (8))){
var inst_26193 = (state_26207[(7)]);
var state_26207__$1 = state_26207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26207__$1,(11),out,inst_26193);
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
});})(c__21296__auto___26235,in$,closed,head,out,mult))
;
return ((function (switch__21281__auto__,c__21296__auto___26235,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__21282__auto__ = null;
var reagi$core$state_machine__21282__auto____0 = (function (){
var statearr_26227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26227[(0)] = reagi$core$state_machine__21282__auto__);

(statearr_26227[(1)] = (1));

return statearr_26227;
});
var reagi$core$state_machine__21282__auto____1 = (function (state_26207){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object)){
var ex__21285__auto__ = e26228;
var statearr_26229_26246 = state_26207;
(statearr_26229_26246[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26247 = state_26207;
state_26207 = G__26247;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$state_machine__21282__auto__ = function(state_26207){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$state_machine__21282__auto____1.call(this,state_26207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21282__auto____0;
reagi$core$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21282__auto____1;
return reagi$core$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___26235,in$,closed,head,out,mult))
})();
var state__21298__auto__ = (function (){var statearr_26230 = f__21297__auto__.call(null);
(statearr_26230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___26235);

return statearr_26230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___26235,in$,closed,head,out,mult))
);


return (new reagi.core.Events(in$,mult,head,closed,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});

reagi.core.events.cljs$lang$maxFixedArity = 1;

/**
 * Return true if the object is a stream of events.
 */
reagi.core.events_QMARK_ = (function reagi$core$events_QMARK_(x){
return (x instanceof reagi.core.Events);
});
/**
 * Create a completed event stream for a single value.
 */
reagi.core.once = (function reagi$core$once(value){
return reagi.core.events.call(null,reagi.core.completed.call(null,value));
});
/**
 * Deliver one or more messages to an event stream.
 */
reagi.core.deliver = (function reagi$core$deliver(var_args){
var args26248 = [];
var len__19864__auto___26258 = arguments.length;
var i__19865__auto___26259 = (0);
while(true){
if((i__19865__auto___26259 < len__19864__auto___26258)){
args26248.push((arguments[i__19865__auto___26259]));

var G__26260 = (i__19865__auto___26259 + (1));
i__19865__auto___26259 = G__26260;
continue;
} else {
}
break;
}

var G__26253 = args26248.length;
switch (G__26253) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19883__auto__ = (new cljs.core.IndexedSeq(args26248.slice((2)),(0),null));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19883__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__26254 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__26255 = null;
var count__26256 = (0);
var i__26257 = (0);
while(true){
if((i__26257 < count__26256)){
var m = cljs.core._nth.call(null,chunk__26255,i__26257);
stream.call(null,m);

var G__26262 = seq__26254;
var G__26263 = chunk__26255;
var G__26264 = count__26256;
var G__26265 = (i__26257 + (1));
seq__26254 = G__26262;
chunk__26255 = G__26263;
count__26256 = G__26264;
i__26257 = G__26265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26254);
if(temp__4657__auto__){
var seq__26254__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26254__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__26254__$1);
var G__26266 = cljs.core.chunk_rest.call(null,seq__26254__$1);
var G__26267 = c__19570__auto__;
var G__26268 = cljs.core.count.call(null,c__19570__auto__);
var G__26269 = (0);
seq__26254 = G__26266;
chunk__26255 = G__26267;
count__26256 = G__26268;
i__26257 = G__26269;
continue;
} else {
var m = cljs.core.first.call(null,seq__26254__$1);
stream.call(null,m);

var G__26270 = cljs.core.next.call(null,seq__26254__$1);
var G__26271 = null;
var G__26272 = (0);
var G__26273 = (0);
seq__26254 = G__26270;
chunk__26255 = G__26271;
count__26256 = G__26272;
i__26257 = G__26273;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq26249){
var G__26250 = cljs.core.first.call(null,seq26249);
var seq26249__$1 = cljs.core.next.call(null,seq26249);
var G__26251 = cljs.core.first.call(null,seq26249__$1);
var seq26249__$2 = cljs.core.next.call(null,seq26249__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__26250,G__26251,seq26249__$2);
});

reagi.core.deliver.cljs$lang$maxFixedArity = (2);

/**
 * Deliver events on an event stream to a core.async channel. Returns the
 *   channel.
 * 
 *   The events from the stream cannot include nil. The channel will be closed when
 *   the event stream is complete.
 */
reagi.core.subscribe = (function reagi$core$subscribe(stream,channel){
reagi.core.listen.call(null,stream,cljs.core.async.map_GT_.call(null,reagi.core.unbox,channel));

reagi.core.depend_on.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return channel;
});
reagi.core.close_all_BANG_ = (function reagi$core$close_all_BANG_(chs){
var seq__26278 = cljs.core.seq.call(null,chs);
var chunk__26279 = null;
var count__26280 = (0);
var i__26281 = (0);
while(true){
if((i__26281 < count__26280)){
var ch = cljs.core._nth.call(null,chunk__26279,i__26281);
cljs.core.async.close_BANG_.call(null,ch);

var G__26282 = seq__26278;
var G__26283 = chunk__26279;
var G__26284 = count__26280;
var G__26285 = (i__26281 + (1));
seq__26278 = G__26282;
chunk__26279 = G__26283;
count__26280 = G__26284;
i__26281 = G__26285;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26278);
if(temp__4657__auto__){
var seq__26278__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__26278__$1);
var G__26286 = cljs.core.chunk_rest.call(null,seq__26278__$1);
var G__26287 = c__19570__auto__;
var G__26288 = cljs.core.count.call(null,c__19570__auto__);
var G__26289 = (0);
seq__26278 = G__26286;
chunk__26279 = G__26287;
count__26280 = G__26288;
i__26281 = G__26289;
continue;
} else {
var ch = cljs.core.first.call(null,seq__26278__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__26290 = cljs.core.next.call(null,seq__26278__$1);
var G__26291 = null;
var G__26292 = (0);
var G__26293 = (0);
seq__26278 = G__26290;
chunk__26279 = G__26291;
count__26280 = G__26292;
i__26281 = G__26293;
continue;
}
} else {
return null;
}
}
break;
}
});
reagi.core.listen_all = (function reagi$core$listen_all(streams){
return cljs.core.mapv.call(null,(function (p1__26294_SHARP_){
return reagi.core.listen.call(null,p1__26294_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26298 = arguments.length;
var i__19865__auto___26299 = (0);
while(true){
if((i__19865__auto___26299 < len__19864__auto___26298)){
args__19871__auto__.push((arguments[i__19865__auto___26299]));

var G__26300 = (i__19865__auto___26299 + (1));
i__19865__auto___26299 = G__26300;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((2) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((2)),(0),null)):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19872__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

reagi.core.connect_port.cljs$lang$applyTo = (function (seq26295){
var G__26296 = cljs.core.first.call(null,seq26295);
var seq26295__$1 = cljs.core.next.call(null,seq26295);
var G__26297 = cljs.core.first.call(null,seq26295__$1);
var seq26295__$2 = cljs.core.next.call(null,seq26295__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__26296,G__26297,seq26295__$2);
});

/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26303 = arguments.length;
var i__19865__auto___26304 = (0);
while(true){
if((i__19865__auto___26304 < len__19864__auto___26303)){
args__19871__auto__.push((arguments[i__19865__auto___26304]));

var G__26305 = (i__19865__auto___26304 + (1));
i__19865__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__26302 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26302,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__26302,((function (G__26302,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26302,chs))
);

reagi.core.depend_on.call(null,G__26302,streams);

return G__26302;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq26301){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26301));
});

reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,index){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,index){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (7))){
var inst_26391 = (state_26418[(7)]);
var inst_26390 = (state_26418[(2)]);
var inst_26391__$1 = cljs.core.nth.call(null,inst_26390,(0),null);
var inst_26392 = cljs.core.nth.call(null,inst_26390,(1),null);
var state_26418__$1 = (function (){var statearr_26421 = state_26418;
(statearr_26421[(7)] = inst_26391__$1);

(statearr_26421[(8)] = inst_26392);

return statearr_26421;
})();
if(cljs.core.truth_(inst_26391__$1)){
var statearr_26422_26448 = state_26418__$1;
(statearr_26422_26448[(1)] = (8));

} else {
var statearr_26423_26449 = state_26418__$1;
(statearr_26423_26449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (1))){
var inst_26377 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_26378 = cljs.core.mapv.call(null,inst_26377,ins);
var inst_26379 = cljs.core.set.call(null,ins);
var inst_26380 = inst_26378;
var inst_26381 = inst_26379;
var state_26418__$1 = (function (){var statearr_26424 = state_26418;
(statearr_26424[(9)] = inst_26381);

(statearr_26424[(10)] = inst_26380);

return statearr_26424;
})();
var statearr_26425_26450 = state_26418__$1;
(statearr_26425_26450[(2)] = null);

(statearr_26425_26450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (4))){
var inst_26381 = (state_26418[(9)]);
var inst_26388 = cljs.core.vec.call(null,inst_26381);
var state_26418__$1 = state_26418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26418__$1,(7),inst_26388);
} else {
if((state_val_26419 === (13))){
var inst_26396 = (state_26418[(11)]);
var inst_26381 = (state_26418[(9)]);
var inst_26404 = (state_26418[(2)]);
var tmp26420 = inst_26381;
var inst_26380 = inst_26396;
var inst_26381__$1 = tmp26420;
var state_26418__$1 = (function (){var statearr_26426 = state_26418;
(statearr_26426[(9)] = inst_26381__$1);

(statearr_26426[(12)] = inst_26404);

(statearr_26426[(10)] = inst_26380);

return statearr_26426;
})();
var statearr_26427_26451 = state_26418__$1;
(statearr_26427_26451[(2)] = null);

(statearr_26427_26451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (6))){
var inst_26414 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26428_26452 = state_26418__$1;
(statearr_26428_26452[(2)] = inst_26414);

(statearr_26428_26452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (3))){
var inst_26416 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
if((state_val_26419 === (12))){
var inst_26396 = (state_26418[(11)]);
var inst_26400 = reagi.core.box.call(null,inst_26396);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(14),out,inst_26400);
} else {
if((state_val_26419 === (2))){
var inst_26381 = (state_26418[(9)]);
var inst_26383 = cljs.core.seq.call(null,inst_26381);
var state_26418__$1 = state_26418;
if(inst_26383){
var statearr_26430_26453 = state_26418__$1;
(statearr_26430_26453[(1)] = (4));

} else {
var statearr_26431_26454 = state_26418__$1;
(statearr_26431_26454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (11))){
var state_26418__$1 = state_26418;
var statearr_26432_26455 = state_26418__$1;
(statearr_26432_26455[(2)] = null);

(statearr_26432_26455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (9))){
var inst_26381 = (state_26418[(9)]);
var inst_26380 = (state_26418[(10)]);
var inst_26392 = (state_26418[(8)]);
var inst_26407 = cljs.core.disj.call(null,inst_26381,inst_26392);
var tmp26429 = inst_26380;
var inst_26380__$1 = tmp26429;
var inst_26381__$1 = inst_26407;
var state_26418__$1 = (function (){var statearr_26433 = state_26418;
(statearr_26433[(9)] = inst_26381__$1);

(statearr_26433[(10)] = inst_26380__$1);

return statearr_26433;
})();
var statearr_26434_26456 = state_26418__$1;
(statearr_26434_26456[(2)] = null);

(statearr_26434_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (5))){
var inst_26412 = cljs.core.async.close_BANG_.call(null,out);
var state_26418__$1 = state_26418;
var statearr_26435_26457 = state_26418__$1;
(statearr_26435_26457[(2)] = inst_26412);

(statearr_26435_26457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (14))){
var inst_26402 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26436_26458 = state_26418__$1;
(statearr_26436_26458[(2)] = inst_26402);

(statearr_26436_26458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (10))){
var inst_26410 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26437_26459 = state_26418__$1;
(statearr_26437_26459[(2)] = inst_26410);

(statearr_26437_26459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (8))){
var inst_26391 = (state_26418[(7)]);
var inst_26396 = (state_26418[(11)]);
var inst_26380 = (state_26418[(10)]);
var inst_26392 = (state_26418[(8)]);
var inst_26394 = index.call(null,inst_26392);
var inst_26395 = reagi.core.unbox.call(null,inst_26391);
var inst_26396__$1 = cljs.core.assoc.call(null,inst_26380,inst_26394,inst_26395);
var inst_26397 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_26396__$1);
var state_26418__$1 = (function (){var statearr_26438 = state_26418;
(statearr_26438[(11)] = inst_26396__$1);

return statearr_26438;
})();
if(cljs.core.truth_(inst_26397)){
var statearr_26439_26460 = state_26418__$1;
(statearr_26439_26460[(1)] = (11));

} else {
var statearr_26440_26461 = state_26418__$1;
(statearr_26440_26461[(1)] = (12));

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
});})(c__21296__auto__,index))
;
return ((function (switch__21281__auto__,c__21296__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__21282__auto__ = null;
var reagi$core$zip_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_26444 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26444[(0)] = reagi$core$zip_ch_$_state_machine__21282__auto__);

(statearr_26444[(1)] = (1));

return statearr_26444;
});
var reagi$core$zip_ch_$_state_machine__21282__auto____1 = (function (state_26418){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26445){if((e26445 instanceof Object)){
var ex__21285__auto__ = e26445;
var statearr_26446_26462 = state_26418;
(statearr_26446_26462[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26463 = state_26418;
state_26418 = G__26463;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__21282__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__21282__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__21282__auto____0;
reagi$core$zip_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__21282__auto____1;
return reagi$core$zip_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,index))
})();
var state__21298__auto__ = (function (){var statearr_26447 = f__21297__auto__.call(null);
(statearr_26447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_26447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,index))
);

return c__21296__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26466 = arguments.length;
var i__19865__auto___26467 = (0);
while(true){
if((i__19865__auto___26467 < len__19864__auto___26466)){
args__19871__auto__.push((arguments[i__19865__auto___26467]));

var G__26468 = (i__19865__auto___26467 + (1));
i__19865__auto___26467 = G__26468;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__26465 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26465,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__26465,((function (G__26465,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26465,chs))
);

reagi.core.depend_on.call(null,G__26465,streams);

return G__26465;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq26464){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26464));
});

reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_26624){
var state_val_26625 = (state_26624[(1)]);
if((state_val_26625 === (7))){
var inst_26620 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26626_26663 = state_26624__$1;
(statearr_26626_26663[(2)] = inst_26620);

(statearr_26626_26663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (20))){
var inst_26592 = (state_26624[(7)]);
var inst_26604 = (state_26624[(2)]);
var inst_26605 = cljs.core.next.call(null,inst_26592);
var inst_26577 = inst_26605;
var inst_26578 = null;
var inst_26579 = (0);
var inst_26580 = (0);
var state_26624__$1 = (function (){var statearr_26627 = state_26624;
(statearr_26627[(8)] = inst_26580);

(statearr_26627[(9)] = inst_26604);

(statearr_26627[(10)] = inst_26577);

(statearr_26627[(11)] = inst_26579);

(statearr_26627[(12)] = inst_26578);

return statearr_26627;
})();
var statearr_26628_26664 = state_26624__$1;
(statearr_26628_26664[(2)] = null);

(statearr_26628_26664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (1))){
var state_26624__$1 = state_26624;
var statearr_26629_26665 = state_26624__$1;
(statearr_26629_26665[(2)] = null);

(statearr_26629_26665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (4))){
var inst_26568 = (state_26624[(13)]);
var inst_26568__$1 = (state_26624[(2)]);
var state_26624__$1 = (function (){var statearr_26633 = state_26624;
(statearr_26633[(13)] = inst_26568__$1);

return statearr_26633;
})();
if(cljs.core.truth_(inst_26568__$1)){
var statearr_26634_26666 = state_26624__$1;
(statearr_26634_26666[(1)] = (5));

} else {
var statearr_26635_26667 = state_26624__$1;
(statearr_26635_26667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (15))){
var state_26624__$1 = state_26624;
var statearr_26636_26668 = state_26624__$1;
(statearr_26636_26668[(2)] = null);

(statearr_26636_26668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (13))){
var inst_26580 = (state_26624[(8)]);
var inst_26577 = (state_26624[(10)]);
var inst_26579 = (state_26624[(11)]);
var inst_26578 = (state_26624[(12)]);
var inst_26588 = (state_26624[(2)]);
var inst_26589 = (inst_26580 + (1));
var tmp26630 = inst_26577;
var tmp26631 = inst_26579;
var tmp26632 = inst_26578;
var inst_26577__$1 = tmp26630;
var inst_26578__$1 = tmp26632;
var inst_26579__$1 = tmp26631;
var inst_26580__$1 = inst_26589;
var state_26624__$1 = (function (){var statearr_26637 = state_26624;
(statearr_26637[(14)] = inst_26588);

(statearr_26637[(8)] = inst_26580__$1);

(statearr_26637[(10)] = inst_26577__$1);

(statearr_26637[(11)] = inst_26579__$1);

(statearr_26637[(12)] = inst_26578__$1);

return statearr_26637;
})();
var statearr_26638_26669 = state_26624__$1;
(statearr_26638_26669[(2)] = null);

(statearr_26638_26669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (6))){
var inst_26618 = cljs.core.async.close_BANG_.call(null,out);
var state_26624__$1 = state_26624;
var statearr_26639_26670 = state_26624__$1;
(statearr_26639_26670[(2)] = inst_26618);

(statearr_26639_26670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (17))){
var inst_26592 = (state_26624[(7)]);
var inst_26596 = cljs.core.chunk_first.call(null,inst_26592);
var inst_26597 = cljs.core.chunk_rest.call(null,inst_26592);
var inst_26598 = cljs.core.count.call(null,inst_26596);
var inst_26577 = inst_26597;
var inst_26578 = inst_26596;
var inst_26579 = inst_26598;
var inst_26580 = (0);
var state_26624__$1 = (function (){var statearr_26640 = state_26624;
(statearr_26640[(8)] = inst_26580);

(statearr_26640[(10)] = inst_26577);

(statearr_26640[(11)] = inst_26579);

(statearr_26640[(12)] = inst_26578);

return statearr_26640;
})();
var statearr_26641_26671 = state_26624__$1;
(statearr_26641_26671[(2)] = null);

(statearr_26641_26671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (3))){
var inst_26622 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26624__$1,inst_26622);
} else {
if((state_val_26625 === (12))){
var inst_26613 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26642_26672 = state_26624__$1;
(statearr_26642_26672[(2)] = inst_26613);

(statearr_26642_26672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (2))){
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26624__$1,(4),in$);
} else {
if((state_val_26625 === (19))){
var inst_26608 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26643_26673 = state_26624__$1;
(statearr_26643_26673[(2)] = inst_26608);

(statearr_26643_26673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (11))){
var inst_26592 = (state_26624[(7)]);
var inst_26577 = (state_26624[(10)]);
var inst_26592__$1 = cljs.core.seq.call(null,inst_26577);
var state_26624__$1 = (function (){var statearr_26644 = state_26624;
(statearr_26644[(7)] = inst_26592__$1);

return statearr_26644;
})();
if(inst_26592__$1){
var statearr_26645_26674 = state_26624__$1;
(statearr_26645_26674[(1)] = (14));

} else {
var statearr_26646_26675 = state_26624__$1;
(statearr_26646_26675[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (9))){
var inst_26615 = (state_26624[(2)]);
var state_26624__$1 = (function (){var statearr_26647 = state_26624;
(statearr_26647[(15)] = inst_26615);

return statearr_26647;
})();
var statearr_26648_26676 = state_26624__$1;
(statearr_26648_26676[(2)] = null);

(statearr_26648_26676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (5))){
var inst_26568 = (state_26624[(13)]);
var inst_26570 = reagi.core.unbox.call(null,inst_26568);
var inst_26571 = f.call(null,inst_26570);
var inst_26576 = cljs.core.seq.call(null,inst_26571);
var inst_26577 = inst_26576;
var inst_26578 = null;
var inst_26579 = (0);
var inst_26580 = (0);
var state_26624__$1 = (function (){var statearr_26649 = state_26624;
(statearr_26649[(8)] = inst_26580);

(statearr_26649[(10)] = inst_26577);

(statearr_26649[(11)] = inst_26579);

(statearr_26649[(12)] = inst_26578);

return statearr_26649;
})();
var statearr_26650_26677 = state_26624__$1;
(statearr_26650_26677[(2)] = null);

(statearr_26650_26677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (14))){
var inst_26592 = (state_26624[(7)]);
var inst_26594 = cljs.core.chunked_seq_QMARK_.call(null,inst_26592);
var state_26624__$1 = state_26624;
if(inst_26594){
var statearr_26651_26678 = state_26624__$1;
(statearr_26651_26678[(1)] = (17));

} else {
var statearr_26652_26679 = state_26624__$1;
(statearr_26652_26679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (16))){
var inst_26611 = (state_26624[(2)]);
var state_26624__$1 = state_26624;
var statearr_26653_26680 = state_26624__$1;
(statearr_26653_26680[(2)] = inst_26611);

(statearr_26653_26680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26625 === (10))){
var inst_26580 = (state_26624[(8)]);
var inst_26578 = (state_26624[(12)]);
var inst_26585 = cljs.core._nth.call(null,inst_26578,inst_26580);
var inst_26586 = reagi.core.box.call(null,inst_26585);
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26624__$1,(13),out,inst_26586);
} else {
if((state_val_26625 === (18))){
var inst_26592 = (state_26624[(7)]);
var inst_26601 = cljs.core.first.call(null,inst_26592);
var inst_26602 = reagi.core.box.call(null,inst_26601);
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26624__$1,(20),out,inst_26602);
} else {
if((state_val_26625 === (8))){
var inst_26580 = (state_26624[(8)]);
var inst_26579 = (state_26624[(11)]);
var inst_26582 = (inst_26580 < inst_26579);
var inst_26583 = inst_26582;
var state_26624__$1 = state_26624;
if(cljs.core.truth_(inst_26583)){
var statearr_26654_26681 = state_26624__$1;
(statearr_26654_26681[(1)] = (10));

} else {
var statearr_26655_26682 = state_26624__$1;
(statearr_26655_26682[(1)] = (11));

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
}
}
}
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__21282__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_26659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26659[(0)] = reagi$core$mapcat_ch_$_state_machine__21282__auto__);

(statearr_26659[(1)] = (1));

return statearr_26659;
});
var reagi$core$mapcat_ch_$_state_machine__21282__auto____1 = (function (state_26624){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26660){if((e26660 instanceof Object)){
var ex__21285__auto__ = e26660;
var statearr_26661_26683 = state_26624;
(statearr_26661_26683[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26684 = state_26624;
state_26624 = G__26684;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__21282__auto__ = function(state_26624){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__21282__auto____1.call(this,state_26624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__21282__auto____0;
reagi$core$mapcat_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__21282__auto____1;
return reagi$core$mapcat_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_26662 = f__21297__auto__.call(null);
(statearr_26662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_26662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args26685 = [];
var len__19864__auto___26692 = arguments.length;
var i__19865__auto___26693 = (0);
while(true){
if((i__19865__auto___26693 < len__19864__auto___26692)){
args26685.push((arguments[i__19865__auto___26693]));

var G__26694 = (i__19865__auto___26693 + (1));
i__19865__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var G__26690 = args26685.length;
switch (G__26690) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19883__auto__ = (new cljs.core.IndexedSeq(args26685.slice((2)),(0),null));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19883__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26691 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26691,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__26691,((function (G__26691,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26691,ch))
);

reagi.core.depend_on.call(null,G__26691,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26691;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq26686){
var G__26687 = cljs.core.first.call(null,seq26686);
var seq26686__$1 = cljs.core.next.call(null,seq26686);
var G__26688 = cljs.core.first.call(null,seq26686__$1);
var seq26686__$2 = cljs.core.next.call(null,seq26686__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__26687,G__26688,seq26686__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26698 = arguments.length;
var i__19865__auto___26699 = (0);
while(true){
if((i__19865__auto___26699 < len__19864__auto___26698)){
args__19871__auto__.push((arguments[i__19865__auto___26699]));

var G__26700 = (i__19865__auto___26699 + (1));
i__19865__auto___26699 = G__26700;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((1) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((1)),(0),null)):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19872__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

reagi.core.map.cljs$lang$applyTo = (function (seq26696){
var G__26697 = cljs.core.first.call(null,seq26696);
var seq26696__$1 = cljs.core.next.call(null,seq26696);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__26697,seq26696__$1);
});

/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__26701_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__26701_SHARP_))){
var x__19593__auto__ = p1__26701_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19593__auto__);
} else {
return null;
}
}),stream);
});
/**
 * Remove all items in a stream the predicate matches.
 */
reagi.core.remove = (function reagi$core$remove(pred,stream){
return reagi.core.filter.call(null,cljs.core.complement.call(null,pred),stream);
});
/**
 * Constantly map the same value over an event stream.
 */
reagi.core.constantly = (function reagi$core$constantly(value,stream){
return reagi.core.map.call(null,cljs.core.constantly.call(null,value),stream);
});
reagi.core.reduce_ch = (function reagi$core$reduce_ch(f,init,in$,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (7))){
var inst_26769 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26775_26796 = state_26773__$1;
(statearr_26775_26796[(2)] = inst_26769);

(statearr_26775_26796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (1))){
var inst_26749 = init;
var state_26773__$1 = (function (){var statearr_26776 = state_26773;
(statearr_26776[(7)] = inst_26749);

return statearr_26776;
})();
var statearr_26777_26797 = state_26773__$1;
(statearr_26777_26797[(2)] = null);

(statearr_26777_26797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (4))){
var inst_26752 = (state_26773[(8)]);
var inst_26752__$1 = (state_26773[(2)]);
var state_26773__$1 = (function (){var statearr_26778 = state_26773;
(statearr_26778[(8)] = inst_26752__$1);

return statearr_26778;
})();
if(cljs.core.truth_(inst_26752__$1)){
var statearr_26779_26798 = state_26773__$1;
(statearr_26779_26798[(1)] = (5));

} else {
var statearr_26780_26799 = state_26773__$1;
(statearr_26780_26799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (6))){
var inst_26767 = cljs.core.async.close_BANG_.call(null,out);
var state_26773__$1 = state_26773;
var statearr_26781_26800 = state_26773__$1;
(statearr_26781_26800[(2)] = inst_26767);

(statearr_26781_26800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (3))){
var inst_26771 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (2))){
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(4),in$);
} else {
if((state_val_26774 === (11))){
var inst_26761 = (state_26773[(9)]);
var inst_26764 = (state_26773[(2)]);
var inst_26749 = inst_26761;
var state_26773__$1 = (function (){var statearr_26782 = state_26773;
(statearr_26782[(10)] = inst_26764);

(statearr_26782[(7)] = inst_26749);

return statearr_26782;
})();
var statearr_26783_26801 = state_26773__$1;
(statearr_26783_26801[(2)] = null);

(statearr_26783_26801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (9))){
var inst_26752 = (state_26773[(8)]);
var inst_26749 = (state_26773[(7)]);
var inst_26758 = reagi.core.unbox.call(null,inst_26752);
var inst_26759 = f.call(null,inst_26749,inst_26758);
var state_26773__$1 = state_26773;
var statearr_26784_26802 = state_26773__$1;
(statearr_26784_26802[(2)] = inst_26759);

(statearr_26784_26802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (5))){
var inst_26749 = (state_26773[(7)]);
var inst_26754 = reagi.core.no_value_QMARK_.call(null,inst_26749);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26754)){
var statearr_26785_26803 = state_26773__$1;
(statearr_26785_26803[(1)] = (8));

} else {
var statearr_26786_26804 = state_26773__$1;
(statearr_26786_26804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (10))){
var inst_26761 = (state_26773[(9)]);
var inst_26761__$1 = (state_26773[(2)]);
var inst_26762 = reagi.core.box.call(null,inst_26761__$1);
var state_26773__$1 = (function (){var statearr_26787 = state_26773;
(statearr_26787[(9)] = inst_26761__$1);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(11),out,inst_26762);
} else {
if((state_val_26774 === (8))){
var inst_26752 = (state_26773[(8)]);
var inst_26756 = reagi.core.unbox.call(null,inst_26752);
var state_26773__$1 = state_26773;
var statearr_26788_26805 = state_26773__$1;
(statearr_26788_26805[(2)] = inst_26756);

(statearr_26788_26805[(1)] = (10));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__21282__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_26792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26792[(0)] = reagi$core$reduce_ch_$_state_machine__21282__auto__);

(statearr_26792[(1)] = (1));

return statearr_26792;
});
var reagi$core$reduce_ch_$_state_machine__21282__auto____1 = (function (state_26773){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26793){if((e26793 instanceof Object)){
var ex__21285__auto__ = e26793;
var statearr_26794_26806 = state_26773;
(statearr_26794_26806[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26807 = state_26773;
state_26773 = G__26807;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__21282__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__21282__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__21282__auto____0;
reagi$core$reduce_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__21282__auto____1;
return reagi$core$reduce_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_26795 = f__21297__auto__.call(null);
(statearr_26795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_26795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args26808 = [];
var len__19864__auto___26812 = arguments.length;
var i__19865__auto___26813 = (0);
while(true){
if((i__19865__auto___26813 < len__19864__auto___26812)){
args26808.push((arguments[i__19865__auto___26813]));

var G__26814 = (i__19865__auto___26813 + (1));
i__19865__auto___26813 = G__26814;
continue;
} else {
}
break;
}

var G__26810 = args26808.length;
switch (G__26810) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26808.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26811 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__26811,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__26811,((function (G__26811,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26811,ch))
);

reagi.core.depend_on.call(null,G__26811,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26811;
});

reagi.core.reduce.cljs$lang$maxFixedArity = 3;

/**
 * Return an accumulating count of the items in a stream.
 */
reagi.core.count = (function reagi$core$count(stream){
return reagi.core.reduce.call(null,(function (x,_){
return (x + (1));
}),(0),stream);
});
/**
 * Change an initial value based on an event stream of functions.
 */
reagi.core.accum = (function reagi$core$accum(init,stream){
return reagi.core.reduce.call(null,(function (p1__26817_SHARP_,p2__26816_SHARP_){
return p2__26816_SHARP_.call(null,p1__26817_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args26818 = [];
var len__19864__auto___26821 = arguments.length;
var i__19865__auto___26822 = (0);
while(true){
if((i__19865__auto___26822 < len__19864__auto___26821)){
args26818.push((arguments[i__19865__auto___26822]));

var G__26823 = (i__19865__auto___26822 + (1));
i__19865__auto___26822 = G__26823;
continue;
} else {
}
break;
}

var G__26820 = args26818.length;
switch (G__26820) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26818.length)].join('')));

}
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return reagi.core.reduce.call(null,cljs.core.conj,reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$2 = (function (n,stream){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

return reagi.core.reduce.call(null,(function (q,x){
return cljs.core.conj.call(null,(((cljs.core.count.call(null,q) >= n))?cljs.core.pop.call(null,q):q),x);
}),reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$lang$maxFixedArity = 2;

reagi.core.uniq_ch = (function reagi$core$uniq_ch(in$,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_26906){
var state_val_26907 = (state_26906[(1)]);
if((state_val_26907 === (7))){
var inst_26902 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
var statearr_26908_26933 = state_26906__$1;
(statearr_26908_26933[(2)] = inst_26902);

(statearr_26908_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (1))){
var inst_26879 = reagi.core.no_value;
var state_26906__$1 = (function (){var statearr_26909 = state_26906;
(statearr_26909[(7)] = inst_26879);

return statearr_26909;
})();
var statearr_26910_26934 = state_26906__$1;
(statearr_26910_26934[(2)] = null);

(statearr_26910_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (4))){
var inst_26882 = (state_26906[(8)]);
var inst_26882__$1 = (state_26906[(2)]);
var state_26906__$1 = (function (){var statearr_26911 = state_26906;
(statearr_26911[(8)] = inst_26882__$1);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26882__$1)){
var statearr_26912_26935 = state_26906__$1;
(statearr_26912_26935[(1)] = (5));

} else {
var statearr_26913_26936 = state_26906__$1;
(statearr_26913_26936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (13))){
var inst_26884 = (state_26906[(9)]);
var inst_26897 = (state_26906[(2)]);
var inst_26879 = inst_26884;
var state_26906__$1 = (function (){var statearr_26914 = state_26906;
(statearr_26914[(10)] = inst_26897);

(statearr_26914[(7)] = inst_26879);

return statearr_26914;
})();
var statearr_26915_26937 = state_26906__$1;
(statearr_26915_26937[(2)] = null);

(statearr_26915_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (6))){
var inst_26900 = cljs.core.async.close_BANG_.call(null,out);
var state_26906__$1 = state_26906;
var statearr_26916_26938 = state_26906__$1;
(statearr_26916_26938[(2)] = inst_26900);

(statearr_26916_26938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (3))){
var inst_26904 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26906__$1,inst_26904);
} else {
if((state_val_26907 === (12))){
var state_26906__$1 = state_26906;
var statearr_26917_26939 = state_26906__$1;
(statearr_26917_26939[(2)] = null);

(statearr_26917_26939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (2))){
var state_26906__$1 = state_26906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26906__$1,(4),in$);
} else {
if((state_val_26907 === (11))){
var inst_26884 = (state_26906[(9)]);
var inst_26892 = reagi.core.box.call(null,inst_26884);
var state_26906__$1 = state_26906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26906__$1,(14),out,inst_26892);
} else {
if((state_val_26907 === (9))){
var inst_26879 = (state_26906[(7)]);
var inst_26884 = (state_26906[(9)]);
var inst_26888 = cljs.core.not_EQ_.call(null,inst_26884,inst_26879);
var state_26906__$1 = state_26906;
var statearr_26918_26940 = state_26906__$1;
(statearr_26918_26940[(2)] = inst_26888);

(statearr_26918_26940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (5))){
var inst_26885 = (state_26906[(11)]);
var inst_26879 = (state_26906[(7)]);
var inst_26882 = (state_26906[(8)]);
var inst_26884 = reagi.core.unbox.call(null,inst_26882);
var inst_26885__$1 = reagi.core.no_value_QMARK_.call(null,inst_26879);
var state_26906__$1 = (function (){var statearr_26919 = state_26906;
(statearr_26919[(11)] = inst_26885__$1);

(statearr_26919[(9)] = inst_26884);

return statearr_26919;
})();
if(cljs.core.truth_(inst_26885__$1)){
var statearr_26920_26941 = state_26906__$1;
(statearr_26920_26941[(1)] = (8));

} else {
var statearr_26921_26942 = state_26906__$1;
(statearr_26921_26942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (14))){
var inst_26894 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
var statearr_26922_26943 = state_26906__$1;
(statearr_26922_26943[(2)] = inst_26894);

(statearr_26922_26943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (10))){
var inst_26890 = (state_26906[(2)]);
var state_26906__$1 = state_26906;
if(cljs.core.truth_(inst_26890)){
var statearr_26923_26944 = state_26906__$1;
(statearr_26923_26944[(1)] = (11));

} else {
var statearr_26924_26945 = state_26906__$1;
(statearr_26924_26945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26907 === (8))){
var inst_26885 = (state_26906[(11)]);
var state_26906__$1 = state_26906;
var statearr_26925_26946 = state_26906__$1;
(statearr_26925_26946[(2)] = inst_26885);

(statearr_26925_26946[(1)] = (10));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__21282__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_26929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26929[(0)] = reagi$core$uniq_ch_$_state_machine__21282__auto__);

(statearr_26929[(1)] = (1));

return statearr_26929;
});
var reagi$core$uniq_ch_$_state_machine__21282__auto____1 = (function (state_26906){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_26906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e26930){if((e26930 instanceof Object)){
var ex__21285__auto__ = e26930;
var statearr_26931_26947 = state_26906;
(statearr_26931_26947[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_26906;
state_26906 = G__26948;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__21282__auto__ = function(state_26906){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__21282__auto____1.call(this,state_26906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__21282__auto____0;
reagi$core$uniq_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__21282__auto____1;
return reagi$core$uniq_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_26932 = f__21297__auto__.call(null);
(statearr_26932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26950 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26950,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__26950,((function (G__26950,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26950,ch))
);

reagi.core.depend_on.call(null,G__26950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26950;
});
/**
 * Incoming events cycle a sequence of values. Useful for switching between
 *   states.
 */
reagi.core.cycle = (function reagi$core$cycle(values,stream){
return reagi.core.map.call(null,cljs.core.first,reagi.core.reduce.call(null,(function (xs,_){
return cljs.core.next.call(null,xs);
}),cljs.core.cycle.call(null,values),stream));
});
reagi.core.time_ms = (function reagi$core$time_ms(){
return (new Date()).getTime();
});
reagi.core.throttle_ch = (function reagi$core$throttle_ch(timeout_ms,in$,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (7))){
var inst_27014 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27020_27041 = state_27018__$1;
(statearr_27020_27041[(2)] = inst_27014);

(statearr_27020_27041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (1))){
var inst_26996 = (0);
var state_27018__$1 = (function (){var statearr_27021 = state_27018;
(statearr_27021[(7)] = inst_26996);

return statearr_27021;
})();
var statearr_27022_27042 = state_27018__$1;
(statearr_27022_27042[(2)] = null);

(statearr_27022_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (4))){
var inst_26999 = (state_27018[(8)]);
var inst_26999__$1 = (state_27018[(2)]);
var state_27018__$1 = (function (){var statearr_27023 = state_27018;
(statearr_27023[(8)] = inst_26999__$1);

return statearr_27023;
})();
if(cljs.core.truth_(inst_26999__$1)){
var statearr_27024_27043 = state_27018__$1;
(statearr_27024_27043[(1)] = (5));

} else {
var statearr_27025_27044 = state_27018__$1;
(statearr_27025_27044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (6))){
var inst_27012 = cljs.core.async.close_BANG_.call(null,out);
var state_27018__$1 = state_27018;
var statearr_27026_27045 = state_27018__$1;
(statearr_27026_27045[(2)] = inst_27012);

(statearr_27026_27045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (3))){
var inst_27016 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
if((state_val_27019 === (2))){
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27018__$1,(4),in$);
} else {
if((state_val_27019 === (11))){
var inst_27006 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27027_27046 = state_27018__$1;
(statearr_27027_27046[(2)] = inst_27006);

(statearr_27027_27046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (9))){
var state_27018__$1 = state_27018;
var statearr_27028_27047 = state_27018__$1;
(statearr_27028_27047[(2)] = null);

(statearr_27028_27047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (5))){
var inst_26996 = (state_27018[(7)]);
var inst_27001 = (state_27018[(9)]);
var inst_27001__$1 = reagi.core.time_ms.call(null);
var inst_27002 = (inst_27001__$1 - inst_26996);
var inst_27003 = (inst_27002 >= timeout_ms);
var state_27018__$1 = (function (){var statearr_27029 = state_27018;
(statearr_27029[(9)] = inst_27001__$1);

return statearr_27029;
})();
if(cljs.core.truth_(inst_27003)){
var statearr_27030_27048 = state_27018__$1;
(statearr_27030_27048[(1)] = (8));

} else {
var statearr_27031_27049 = state_27018__$1;
(statearr_27031_27049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (10))){
var inst_27001 = (state_27018[(9)]);
var inst_27009 = (state_27018[(2)]);
var inst_26996 = inst_27001;
var state_27018__$1 = (function (){var statearr_27032 = state_27018;
(statearr_27032[(7)] = inst_26996);

(statearr_27032[(10)] = inst_27009);

return statearr_27032;
})();
var statearr_27033_27050 = state_27018__$1;
(statearr_27033_27050[(2)] = null);

(statearr_27033_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (8))){
var inst_26999 = (state_27018[(8)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(11),out,inst_26999);
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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__21282__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_27037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27037[(0)] = reagi$core$throttle_ch_$_state_machine__21282__auto__);

(statearr_27037[(1)] = (1));

return statearr_27037;
});
var reagi$core$throttle_ch_$_state_machine__21282__auto____1 = (function (state_27018){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27038){if((e27038 instanceof Object)){
var ex__21285__auto__ = e27038;
var statearr_27039_27051 = state_27018;
(statearr_27039_27051[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27018;
state_27018 = G__27052;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__21282__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__21282__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__21282__auto____0;
reagi$core$throttle_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__21282__auto____1;
return reagi$core$throttle_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_27040 = f__21297__auto__.call(null);
(statearr_27040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_27040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__27054 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27054,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__27054,((function (G__27054,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__27054,ch))
);

reagi.core.depend_on.call(null,G__27054,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__27054;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_27168){
var state_val_27169 = (state_27168[(1)]);
if((state_val_27169 === (7))){
var inst_27163 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27170_27199 = state_27168__$1;
(statearr_27170_27199[(2)] = inst_27163);

(statearr_27170_27199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (1))){
var state_27168__$1 = state_27168;
var statearr_27171_27200 = state_27168__$1;
(statearr_27171_27200[(2)] = null);

(statearr_27171_27200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (4))){
var inst_27136 = (state_27168[(2)]);
var inst_27137 = cljs.core.nth.call(null,inst_27136,(0),null);
var inst_27138 = cljs.core.nth.call(null,inst_27136,(1),null);
var inst_27139 = cljs.core.not_EQ_.call(null,inst_27138,stop);
var state_27168__$1 = (function (){var statearr_27172 = state_27168;
(statearr_27172[(7)] = inst_27137);

return statearr_27172;
})();
if(inst_27139){
var statearr_27173_27201 = state_27168__$1;
(statearr_27173_27201[(1)] = (5));

} else {
var statearr_27174_27202 = state_27168__$1;
(statearr_27174_27202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (15))){
var state_27168__$1 = state_27168;
var statearr_27175_27203 = state_27168__$1;
(statearr_27175_27203[(2)] = null);

(statearr_27175_27203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (13))){
var inst_27150 = (state_27168[(8)]);
var state_27168__$1 = state_27168;
var statearr_27176_27204 = state_27168__$1;
(statearr_27176_27204[(2)] = inst_27150);

(statearr_27176_27204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (6))){
var state_27168__$1 = state_27168;
var statearr_27177_27205 = state_27168__$1;
(statearr_27177_27205[(2)] = null);

(statearr_27177_27205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (17))){
var inst_27160 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27178_27206 = state_27168__$1;
(statearr_27178_27206[(2)] = inst_27160);

(statearr_27178_27206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (3))){
var inst_27165 = (state_27168[(2)]);
var inst_27166 = cljs.core.async.close_BANG_.call(null,out);
var state_27168__$1 = (function (){var statearr_27179 = state_27168;
(statearr_27179[(9)] = inst_27165);

return statearr_27179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27168__$1,inst_27166);
} else {
if((state_val_27169 === (12))){
var inst_27152 = reagi.core.complete_QMARK_.call(null,ref);
var state_27168__$1 = state_27168;
var statearr_27180_27207 = state_27168__$1;
(statearr_27180_27207[(2)] = inst_27152);

(statearr_27180_27207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (2))){
var inst_27131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27132 = cljs.core.async.timeout.call(null,interval);
var inst_27133 = [stop,inst_27132];
var inst_27134 = (new cljs.core.PersistentVector(null,2,(5),inst_27131,inst_27133,null));
var state_27168__$1 = state_27168;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27168__$1,(4),inst_27134);
} else {
if((state_val_27169 === (11))){
var inst_27147 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27181_27208 = state_27168__$1;
(statearr_27181_27208[(2)] = inst_27147);

(statearr_27181_27208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (9))){
var inst_27141 = (state_27168[(10)]);
var inst_27145 = reagi.core.box.call(null,inst_27141);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27168__$1,(11),out,inst_27145);
} else {
if((state_val_27169 === (5))){
var inst_27141 = (state_27168[(10)]);
var inst_27141__$1 = cljs.core.deref.call(null,ref);
var inst_27142 = (void 0 === inst_27141__$1);
var state_27168__$1 = (function (){var statearr_27182 = state_27168;
(statearr_27182[(10)] = inst_27141__$1);

return statearr_27182;
})();
if(cljs.core.truth_(inst_27142)){
var statearr_27183_27209 = state_27168__$1;
(statearr_27183_27209[(1)] = (8));

} else {
var statearr_27184_27210 = state_27168__$1;
(statearr_27184_27210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (14))){
var inst_27155 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27155)){
var statearr_27185_27211 = state_27168__$1;
(statearr_27185_27211[(1)] = (15));

} else {
var statearr_27186_27212 = state_27168__$1;
(statearr_27186_27212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (16))){
var state_27168__$1 = state_27168;
var statearr_27187_27213 = state_27168__$1;
(statearr_27187_27213[(2)] = null);

(statearr_27187_27213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (10))){
var inst_27150 = (state_27168[(8)]);
var inst_27149 = (state_27168[(2)]);
var inst_27150__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_27168__$1 = (function (){var statearr_27188 = state_27168;
(statearr_27188[(11)] = inst_27149);

(statearr_27188[(8)] = inst_27150__$1);

return statearr_27188;
})();
if(cljs.core.truth_(inst_27150__$1)){
var statearr_27189_27214 = state_27168__$1;
(statearr_27189_27214[(1)] = (12));

} else {
var statearr_27190_27215 = state_27168__$1;
(statearr_27190_27215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (8))){
var state_27168__$1 = state_27168;
var statearr_27191_27216 = state_27168__$1;
(statearr_27191_27216[(2)] = null);

(statearr_27191_27216[(1)] = (10));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__21282__auto__ = null;
var reagi$core$run_sampler_$_state_machine__21282__auto____0 = (function (){
var statearr_27195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27195[(0)] = reagi$core$run_sampler_$_state_machine__21282__auto__);

(statearr_27195[(1)] = (1));

return statearr_27195;
});
var reagi$core$run_sampler_$_state_machine__21282__auto____1 = (function (state_27168){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27196){if((e27196 instanceof Object)){
var ex__21285__auto__ = e27196;
var statearr_27197_27217 = state_27168;
(statearr_27197_27217[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27218 = state_27168;
state_27168 = G__27218;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__21282__auto__ = function(state_27168){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__21282__auto____1.call(this,state_27168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__21282__auto____0;
reagi$core$run_sampler_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__21282__auto____1;
return reagi$core$run_sampler_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_27198 = f__21297__auto__.call(null);
(statearr_27198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_27198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__27220 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27220,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__27220,((function (G__27220,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__27220,stop))
);

return G__27220;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__21296__auto___27253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___27253,stream){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___27253,stream){
return (function (state_27243){
var state_val_27244 = (state_27243[(1)]);
if((state_val_27244 === (1))){
var inst_27237 = cljs.core.async.timeout.call(null,time_ms);
var state_27243__$1 = state_27243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27243__$1,(2),inst_27237);
} else {
if((state_val_27244 === (2))){
var inst_27239 = (state_27243[(2)]);
var inst_27240 = reagi.core.port.call(null,stream);
var inst_27241 = cljs.core.async.close_BANG_.call(null,inst_27240);
var state_27243__$1 = (function (){var statearr_27245 = state_27243;
(statearr_27245[(7)] = inst_27239);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27243__$1,inst_27241);
} else {
return null;
}
}
});})(c__21296__auto___27253,stream))
;
return ((function (switch__21281__auto__,c__21296__auto___27253,stream){
return (function() {
var reagi$core$wait_$_state_machine__21282__auto__ = null;
var reagi$core$wait_$_state_machine__21282__auto____0 = (function (){
var statearr_27249 = [null,null,null,null,null,null,null,null];
(statearr_27249[(0)] = reagi$core$wait_$_state_machine__21282__auto__);

(statearr_27249[(1)] = (1));

return statearr_27249;
});
var reagi$core$wait_$_state_machine__21282__auto____1 = (function (state_27243){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27250){if((e27250 instanceof Object)){
var ex__21285__auto__ = e27250;
var statearr_27251_27254 = state_27243;
(statearr_27251_27254[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27255 = state_27243;
state_27243 = G__27255;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__21282__auto__ = function(state_27243){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__21282__auto____1.call(this,state_27243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__21282__auto____0;
reagi$core$wait_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__21282__auto____1;
return reagi$core$wait_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___27253,stream))
})();
var state__21298__auto__ = (function (){var statearr_27252 = f__21297__auto__.call(null);
(statearr_27252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___27253);

return statearr_27252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___27253,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (7))){
var inst_27387 = (state_27442[(7)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(9),inst_27387);
} else {
if((state_val_27443 === (20))){
var inst_27414 = (state_27442[(8)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(22),inst_27414);
} else {
if((state_val_27443 === (1))){
var inst_27378 = cljs.core.seq.call(null,chs);
var inst_27379 = inst_27378;
var inst_27380 = null;
var inst_27381 = (0);
var inst_27382 = (0);
var state_27442__$1 = (function (){var statearr_27444 = state_27442;
(statearr_27444[(9)] = inst_27381);

(statearr_27444[(10)] = inst_27379);

(statearr_27444[(11)] = inst_27380);

(statearr_27444[(12)] = inst_27382);

return statearr_27444;
})();
var statearr_27445_27492 = state_27442__$1;
(statearr_27445_27492[(2)] = null);

(statearr_27445_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (24))){
var state_27442__$1 = state_27442;
var statearr_27446_27493 = state_27442__$1;
(statearr_27446_27493[(2)] = null);

(statearr_27446_27493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (4))){
var inst_27380 = (state_27442[(11)]);
var inst_27382 = (state_27442[(12)]);
var inst_27387 = cljs.core._nth.call(null,inst_27380,inst_27382);
var state_27442__$1 = (function (){var statearr_27447 = state_27442;
(statearr_27447[(7)] = inst_27387);

return statearr_27447;
})();
var statearr_27448_27494 = state_27442__$1;
(statearr_27448_27494[(2)] = null);

(statearr_27448_27494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (15))){
var state_27442__$1 = state_27442;
var statearr_27449_27495 = state_27442__$1;
(statearr_27449_27495[(2)] = null);

(statearr_27449_27495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (21))){
var inst_27405 = (state_27442[(13)]);
var inst_27428 = (state_27442[(2)]);
var inst_27429 = cljs.core.next.call(null,inst_27405);
var inst_27379 = inst_27429;
var inst_27380 = null;
var inst_27381 = (0);
var inst_27382 = (0);
var state_27442__$1 = (function (){var statearr_27450 = state_27442;
(statearr_27450[(14)] = inst_27428);

(statearr_27450[(9)] = inst_27381);

(statearr_27450[(10)] = inst_27379);

(statearr_27450[(11)] = inst_27380);

(statearr_27450[(12)] = inst_27382);

return statearr_27450;
})();
var statearr_27451_27496 = state_27442__$1;
(statearr_27451_27496[(2)] = null);

(statearr_27451_27496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (13))){
var inst_27395 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27452 = state_27442;
(statearr_27452[(15)] = inst_27395);

return statearr_27452;
})();
var statearr_27453_27497 = state_27442__$1;
(statearr_27453_27497[(2)] = null);

(statearr_27453_27497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (22))){
var inst_27417 = (state_27442[(16)]);
var inst_27417__$1 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27454 = state_27442;
(statearr_27454[(16)] = inst_27417__$1);

return statearr_27454;
})();
if(cljs.core.truth_(inst_27417__$1)){
var statearr_27455_27498 = state_27442__$1;
(statearr_27455_27498[(1)] = (23));

} else {
var statearr_27456_27499 = state_27442__$1;
(statearr_27456_27499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (6))){
var inst_27437 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27457_27500 = state_27442__$1;
(statearr_27457_27500[(2)] = inst_27437);

(statearr_27457_27500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (25))){
var inst_27426 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27458_27501 = state_27442__$1;
(statearr_27458_27501[(2)] = inst_27426);

(statearr_27458_27501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (17))){
var inst_27405 = (state_27442[(13)]);
var inst_27409 = cljs.core.chunk_first.call(null,inst_27405);
var inst_27410 = cljs.core.chunk_rest.call(null,inst_27405);
var inst_27411 = cljs.core.count.call(null,inst_27409);
var inst_27379 = inst_27410;
var inst_27380 = inst_27409;
var inst_27381 = inst_27411;
var inst_27382 = (0);
var state_27442__$1 = (function (){var statearr_27459 = state_27442;
(statearr_27459[(9)] = inst_27381);

(statearr_27459[(10)] = inst_27379);

(statearr_27459[(11)] = inst_27380);

(statearr_27459[(12)] = inst_27382);

return statearr_27459;
})();
var statearr_27460_27502 = state_27442__$1;
(statearr_27460_27502[(2)] = null);

(statearr_27460_27502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (3))){
var inst_27439 = (state_27442[(2)]);
var inst_27440 = cljs.core.async.close_BANG_.call(null,out);
var state_27442__$1 = (function (){var statearr_27461 = state_27442;
(statearr_27461[(17)] = inst_27439);

return statearr_27461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
if((state_val_27443 === (12))){
var inst_27399 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27462_27503 = state_27442__$1;
(statearr_27462_27503[(2)] = inst_27399);

(statearr_27462_27503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (2))){
var inst_27381 = (state_27442[(9)]);
var inst_27382 = (state_27442[(12)]);
var inst_27384 = (inst_27382 < inst_27381);
var inst_27385 = inst_27384;
var state_27442__$1 = state_27442;
if(cljs.core.truth_(inst_27385)){
var statearr_27463_27504 = state_27442__$1;
(statearr_27463_27504[(1)] = (4));

} else {
var statearr_27464_27505 = state_27442__$1;
(statearr_27464_27505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (23))){
var inst_27417 = (state_27442[(16)]);
var inst_27419 = reagi.core.unbox.call(null,inst_27417);
var inst_27420 = reagi.core.box.call(null,inst_27419);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(26),out,inst_27420);
} else {
if((state_val_27443 === (19))){
var inst_27432 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27465_27506 = state_27442__$1;
(statearr_27465_27506[(2)] = inst_27432);

(statearr_27465_27506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (11))){
var state_27442__$1 = state_27442;
var statearr_27466_27507 = state_27442__$1;
(statearr_27466_27507[(2)] = null);

(statearr_27466_27507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (9))){
var inst_27390 = (state_27442[(18)]);
var inst_27390__$1 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27467 = state_27442;
(statearr_27467[(18)] = inst_27390__$1);

return statearr_27467;
})();
if(cljs.core.truth_(inst_27390__$1)){
var statearr_27468_27508 = state_27442__$1;
(statearr_27468_27508[(1)] = (10));

} else {
var statearr_27469_27509 = state_27442__$1;
(statearr_27469_27509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (5))){
var inst_27379 = (state_27442[(10)]);
var inst_27405 = (state_27442[(13)]);
var inst_27405__$1 = cljs.core.seq.call(null,inst_27379);
var state_27442__$1 = (function (){var statearr_27470 = state_27442;
(statearr_27470[(13)] = inst_27405__$1);

return statearr_27470;
})();
if(inst_27405__$1){
var statearr_27471_27510 = state_27442__$1;
(statearr_27471_27510[(1)] = (14));

} else {
var statearr_27472_27511 = state_27442__$1;
(statearr_27472_27511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (14))){
var inst_27405 = (state_27442[(13)]);
var inst_27407 = cljs.core.chunked_seq_QMARK_.call(null,inst_27405);
var state_27442__$1 = state_27442;
if(inst_27407){
var statearr_27473_27512 = state_27442__$1;
(statearr_27473_27512[(1)] = (17));

} else {
var statearr_27474_27513 = state_27442__$1;
(statearr_27474_27513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (26))){
var inst_27422 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27475 = state_27442;
(statearr_27475[(19)] = inst_27422);

return statearr_27475;
})();
var statearr_27476_27514 = state_27442__$1;
(statearr_27476_27514[(2)] = null);

(statearr_27476_27514[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (16))){
var inst_27435 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27477_27515 = state_27442__$1;
(statearr_27477_27515[(2)] = inst_27435);

(statearr_27477_27515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (10))){
var inst_27390 = (state_27442[(18)]);
var inst_27392 = reagi.core.unbox.call(null,inst_27390);
var inst_27393 = reagi.core.box.call(null,inst_27392);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(13),out,inst_27393);
} else {
if((state_val_27443 === (18))){
var inst_27405 = (state_27442[(13)]);
var inst_27414 = cljs.core.first.call(null,inst_27405);
var state_27442__$1 = (function (){var statearr_27481 = state_27442;
(statearr_27481[(8)] = inst_27414);

return statearr_27481;
})();
var statearr_27482_27516 = state_27442__$1;
(statearr_27482_27516[(2)] = null);

(statearr_27482_27516[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (8))){
var inst_27381 = (state_27442[(9)]);
var inst_27379 = (state_27442[(10)]);
var inst_27380 = (state_27442[(11)]);
var inst_27382 = (state_27442[(12)]);
var inst_27401 = (state_27442[(2)]);
var inst_27402 = (inst_27382 + (1));
var tmp27478 = inst_27381;
var tmp27479 = inst_27379;
var tmp27480 = inst_27380;
var inst_27379__$1 = tmp27479;
var inst_27380__$1 = tmp27480;
var inst_27381__$1 = tmp27478;
var inst_27382__$1 = inst_27402;
var state_27442__$1 = (function (){var statearr_27483 = state_27442;
(statearr_27483[(9)] = inst_27381__$1);

(statearr_27483[(10)] = inst_27379__$1);

(statearr_27483[(11)] = inst_27380__$1);

(statearr_27483[(12)] = inst_27382__$1);

(statearr_27483[(20)] = inst_27401);

return statearr_27483;
})();
var statearr_27484_27517 = state_27442__$1;
(statearr_27484_27517[(2)] = null);

(statearr_27484_27517[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__21282__auto__ = null;
var reagi$core$join_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_27488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27488[(0)] = reagi$core$join_ch_$_state_machine__21282__auto__);

(statearr_27488[(1)] = (1));

return statearr_27488;
});
var reagi$core$join_ch_$_state_machine__21282__auto____1 = (function (state_27442){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27489){if((e27489 instanceof Object)){
var ex__21285__auto__ = e27489;
var statearr_27490_27518 = state_27442;
(statearr_27490_27518[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27519 = state_27442;
state_27442 = G__27519;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__21282__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__21282__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__21282__auto____0;
reagi$core$join_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__21282__auto____1;
return reagi$core$join_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_27491 = f__21297__auto__.call(null);
(statearr_27491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_27491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__19871__auto__ = [];
var len__19864__auto___27522 = arguments.length;
var i__19865__auto___27523 = (0);
while(true){
if((i__19865__auto___27523 < len__19864__auto___27522)){
args__19871__auto__.push((arguments[i__19865__auto___27523]));

var G__27524 = (i__19865__auto___27523 + (1));
i__19865__auto___27523 = G__27524;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__27521 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27521,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__27521,((function (G__27521,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__27521,chs))
);

reagi.core.depend_on.call(null,G__27521,streams);

return G__27521;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq27520){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27520));
});

reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_27665){
var state_val_27666 = (state_27665[(1)]);
if((state_val_27666 === (7))){
var inst_27629 = (state_27665[(7)]);
var inst_27627 = (state_27665[(2)]);
var inst_27628 = cljs.core.nth.call(null,inst_27627,(0),null);
var inst_27629__$1 = cljs.core.nth.call(null,inst_27627,(1),null);
var inst_27630 = (inst_27629__$1 === valve);
var state_27665__$1 = (function (){var statearr_27667 = state_27665;
(statearr_27667[(8)] = inst_27628);

(statearr_27667[(7)] = inst_27629__$1);

return statearr_27667;
})();
if(cljs.core.truth_(inst_27630)){
var statearr_27668_27699 = state_27665__$1;
(statearr_27668_27699[(1)] = (8));

} else {
var statearr_27669_27700 = state_27665__$1;
(statearr_27669_27700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (1))){
var inst_27612 = [in$];
var inst_27613 = [null];
var inst_27614 = cljs.core.PersistentHashMap.fromArrays(inst_27612,inst_27613);
var inst_27615 = inst_27614;
var state_27665__$1 = (function (){var statearr_27670 = state_27665;
(statearr_27670[(9)] = inst_27615);

return statearr_27670;
})();
var statearr_27671_27701 = state_27665__$1;
(statearr_27671_27701[(2)] = null);

(statearr_27671_27701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (4))){
var inst_27615 = (state_27665[(9)]);
var inst_27623 = cljs.core.keys.call(null,inst_27615);
var inst_27624 = cljs.core.vec.call(null,inst_27623);
var inst_27625 = cljs.core.conj.call(null,inst_27624,valve);
var state_27665__$1 = state_27665;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27665__$1,(7),inst_27625);
} else {
if((state_val_27666 === (15))){
var inst_27628 = (state_27665[(8)]);
var inst_27644 = reagi.core.unbox.call(null,inst_27628);
var inst_27645 = reagi.core.box.call(null,inst_27644);
var state_27665__$1 = state_27665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27665__$1,(17),out,inst_27645);
} else {
if((state_val_27666 === (13))){
var inst_27655 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27673_27702 = state_27665__$1;
(statearr_27673_27702[(2)] = inst_27655);

(statearr_27673_27702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (6))){
var inst_27660 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27674_27703 = state_27665__$1;
(statearr_27674_27703[(2)] = inst_27660);

(statearr_27674_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (17))){
var inst_27615 = (state_27665[(9)]);
var inst_27647 = (state_27665[(2)]);
var tmp27672 = inst_27615;
var inst_27615__$1 = tmp27672;
var state_27665__$1 = (function (){var statearr_27675 = state_27665;
(statearr_27675[(9)] = inst_27615__$1);

(statearr_27675[(10)] = inst_27647);

return statearr_27675;
})();
var statearr_27676_27704 = state_27665__$1;
(statearr_27676_27704[(2)] = null);

(statearr_27676_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (3))){
var inst_27662 = (state_27665[(2)]);
var inst_27663 = cljs.core.async.close_BANG_.call(null,out);
var state_27665__$1 = (function (){var statearr_27677 = state_27665;
(statearr_27677[(11)] = inst_27662);

return statearr_27677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27665__$1,inst_27663);
} else {
if((state_val_27666 === (12))){
var inst_27615 = (state_27665[(9)]);
var inst_27629 = (state_27665[(7)]);
var inst_27652 = cljs.core.dissoc.call(null,inst_27615,inst_27629);
var inst_27615__$1 = inst_27652;
var state_27665__$1 = (function (){var statearr_27678 = state_27665;
(statearr_27678[(9)] = inst_27615__$1);

return statearr_27678;
})();
var statearr_27679_27705 = state_27665__$1;
(statearr_27679_27705[(2)] = null);

(statearr_27679_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (2))){
var inst_27615 = (state_27665[(9)]);
var inst_27617 = cljs.core.empty_QMARK_.call(null,inst_27615);
var inst_27618 = !(inst_27617);
var state_27665__$1 = state_27665;
if(inst_27618){
var statearr_27680_27706 = state_27665__$1;
(statearr_27680_27706[(1)] = (4));

} else {
var statearr_27681_27707 = state_27665__$1;
(statearr_27681_27707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (11))){
var inst_27629 = (state_27665[(7)]);
var inst_27636 = (inst_27629 === in$);
var state_27665__$1 = state_27665;
if(cljs.core.truth_(inst_27636)){
var statearr_27682_27708 = state_27665__$1;
(statearr_27682_27708[(1)] = (14));

} else {
var statearr_27683_27709 = state_27665__$1;
(statearr_27683_27709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (9))){
var inst_27628 = (state_27665[(8)]);
var state_27665__$1 = state_27665;
if(cljs.core.truth_(inst_27628)){
var statearr_27684_27710 = state_27665__$1;
(statearr_27684_27710[(1)] = (11));

} else {
var statearr_27685_27711 = state_27665__$1;
(statearr_27685_27711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (5))){
var state_27665__$1 = state_27665;
var statearr_27686_27712 = state_27665__$1;
(statearr_27686_27712[(2)] = null);

(statearr_27686_27712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (14))){
var inst_27628 = (state_27665[(8)]);
var inst_27615 = (state_27665[(9)]);
var inst_27638 = reagi.core.unbox.call(null,inst_27628);
var inst_27639 = cljs.core.async.chan.call(null);
var inst_27640 = reagi.core.listen.call(null,inst_27638,inst_27639);
var inst_27641 = cljs.core.assoc.call(null,inst_27615,inst_27640,inst_27638);
var inst_27615__$1 = inst_27641;
var state_27665__$1 = (function (){var statearr_27687 = state_27665;
(statearr_27687[(9)] = inst_27615__$1);

return statearr_27687;
})();
var statearr_27688_27713 = state_27665__$1;
(statearr_27688_27713[(2)] = null);

(statearr_27688_27713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (16))){
var inst_27650 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27689_27714 = state_27665__$1;
(statearr_27689_27714[(2)] = inst_27650);

(statearr_27689_27714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (10))){
var inst_27657 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27690_27715 = state_27665__$1;
(statearr_27690_27715[(2)] = inst_27657);

(statearr_27690_27715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (8))){
var inst_27615 = (state_27665[(9)]);
var inst_27632 = cljs.core.keys.call(null,inst_27615);
var inst_27633 = reagi.core.close_all_BANG_.call(null,inst_27632);
var state_27665__$1 = state_27665;
var statearr_27691_27716 = state_27665__$1;
(statearr_27691_27716[(2)] = inst_27633);

(statearr_27691_27716[(1)] = (10));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__21282__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__21282__auto____0 = (function (){
var statearr_27695 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27695[(0)] = reagi$core$flatten_ch_$_state_machine__21282__auto__);

(statearr_27695[(1)] = (1));

return statearr_27695;
});
var reagi$core$flatten_ch_$_state_machine__21282__auto____1 = (function (state_27665){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27696){if((e27696 instanceof Object)){
var ex__21285__auto__ = e27696;
var statearr_27697_27717 = state_27665;
(statearr_27697_27717[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27718 = state_27665;
state_27665 = G__27718;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__21282__auto__ = function(state_27665){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__21282__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__21282__auto____1.call(this,state_27665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__21282__auto____0;
reagi$core$flatten_ch_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__21282__auto____1;
return reagi$core$flatten_ch_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_27698 = f__21297__auto__.call(null);
(statearr_27698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_27698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__27720 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27720,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__27720,((function (G__27720,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__27720,ch,valve))
);

reagi.core.depend_on.call(null,G__27720,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__27720;
});

//# sourceMappingURL=core.js.map?rel=1484862758183