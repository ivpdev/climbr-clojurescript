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
if(typeof reagi.core.t_reagi$core25253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25253 = (function (x,meta25254){
this.x = x;
this.meta25254 = meta25254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25255,meta25254__$1){
var self__ = this;
var _25255__$1 = this;
return (new reagi.core.t_reagi$core25253(self__.x,meta25254__$1));
});

reagi.core.t_reagi$core25253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25255){
var self__ = this;
var _25255__$1 = this;
return self__.meta25254;
});

reagi.core.t_reagi$core25253.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25253.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core25253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta25254","meta25254",1265987028,null)], null);
});

reagi.core.t_reagi$core25253.cljs$lang$type = true;

reagi.core.t_reagi$core25253.cljs$lang$ctorStr = "reagi.core/t_reagi$core25253";

reagi.core.t_reagi$core25253.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/t_reagi$core25253");
});

reagi.core.__GT_t_reagi$core25253 = (function reagi$core$box_$___GT_t_reagi$core25253(x__$1,meta25254){
return (new reagi.core.t_reagi$core25253(x__$1,meta25254));
});

}

return (new reagi.core.t_reagi$core25253(x,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25256_SHARP_){
if((p1__25256_SHARP_ instanceof reagi.core.Completed)){
return p1__25256_SHARP_;
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
if(typeof reagi.core.t_reagi$core25508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25508 = (function (ch,state,meta25509){
this.ch = ch;
this.state = state;
this.meta25509 = meta25509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_25510,meta25509__$1){
var self__ = this;
var _25510__$1 = this;
return (new reagi.core.t_reagi$core25508(self__.ch,self__.state,meta25509__$1));
});})(state))
;

reagi.core.t_reagi$core25508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_25510){
var self__ = this;
var _25510__$1 = this;
return self__.meta25509;
});})(state))
;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__25514){
var vec__25515 = p__25514;
var o_QMARK_ = cljs.core.nth.call(null,vec__25515,(0),null);
var cs = cljs.core.nth.call(null,vec__25515,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__25511 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__25511,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25511,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25518){
var vec__25519 = p__25518;
var open_QMARK_ = cljs.core.nth.call(null,vec__25519,(0),null);
var cs = cljs.core.nth.call(null,vec__25519,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core25508.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25522){
var vec__25523 = p__25522;
var open_QMARK_ = cljs.core.nth.call(null,vec__25523,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core25508.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta25509","meta25509",-2089799041,null)], null);
});})(state))
;

reagi.core.t_reagi$core25508.cljs$lang$type = true;

reagi.core.t_reagi$core25508.cljs$lang$ctorStr = "reagi.core/t_reagi$core25508";

reagi.core.t_reagi$core25508.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"reagi.core/t_reagi$core25508");
});})(state))
;

reagi.core.__GT_t_reagi$core25508 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core25508(ch__$1,state__$1,meta25509){
return (new reagi.core.t_reagi$core25508(ch__$1,state__$1,meta25509));
});})(state))
;

}

return (new reagi.core.t_reagi$core25508(ch,state,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21118__auto___25759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___25759,state,m,dchan,dctr,done){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___25759,state,m,dchan,dctr,done){
return (function (state_25668){
var state_val_25669 = (state_25668[(1)]);
if((state_val_25669 === (7))){
var inst_25664 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25670_25760 = state_25668__$1;
(statearr_25670_25760[(2)] = inst_25664);

(statearr_25670_25760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (20))){
var inst_25566 = (state_25668[(7)]);
var inst_25578 = cljs.core.first.call(null,inst_25566);
var inst_25579 = cljs.core.nth.call(null,inst_25578,(0),null);
var inst_25580 = cljs.core.nth.call(null,inst_25578,(1),null);
var state_25668__$1 = (function (){var statearr_25671 = state_25668;
(statearr_25671[(8)] = inst_25579);

return statearr_25671;
})();
if(cljs.core.truth_(inst_25580)){
var statearr_25672_25761 = state_25668__$1;
(statearr_25672_25761[(1)] = (22));

} else {
var statearr_25673_25762 = state_25668__$1;
(statearr_25673_25762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (27))){
var inst_25609 = (state_25668[(9)]);
var inst_25616 = (state_25668[(10)]);
var inst_25611 = (state_25668[(11)]);
var inst_25528 = (state_25668[(12)]);
var inst_25616__$1 = cljs.core._nth.call(null,inst_25609,inst_25611);
var inst_25617 = cljs.core.async.put_BANG_.call(null,inst_25616__$1,inst_25528,done);
var state_25668__$1 = (function (){var statearr_25674 = state_25668;
(statearr_25674[(10)] = inst_25616__$1);

return statearr_25674;
})();
if(cljs.core.truth_(inst_25617)){
var statearr_25675_25763 = state_25668__$1;
(statearr_25675_25763[(1)] = (30));

} else {
var statearr_25676_25764 = state_25668__$1;
(statearr_25676_25764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (1))){
var state_25668__$1 = state_25668;
var statearr_25677_25765 = state_25668__$1;
(statearr_25677_25765[(2)] = null);

(statearr_25677_25765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (24))){
var inst_25566 = (state_25668[(7)]);
var inst_25585 = (state_25668[(2)]);
var inst_25586 = cljs.core.next.call(null,inst_25566);
var inst_25544 = inst_25586;
var inst_25545 = null;
var inst_25546 = (0);
var inst_25547 = (0);
var state_25668__$1 = (function (){var statearr_25678 = state_25668;
(statearr_25678[(13)] = inst_25544);

(statearr_25678[(14)] = inst_25546);

(statearr_25678[(15)] = inst_25545);

(statearr_25678[(16)] = inst_25547);

(statearr_25678[(17)] = inst_25585);

return statearr_25678;
})();
var statearr_25679_25766 = state_25668__$1;
(statearr_25679_25766[(2)] = null);

(statearr_25679_25766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (39))){
var state_25668__$1 = state_25668;
var statearr_25683_25767 = state_25668__$1;
(statearr_25683_25767[(2)] = null);

(statearr_25683_25767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (4))){
var inst_25528 = (state_25668[(12)]);
var inst_25528__$1 = (state_25668[(2)]);
var inst_25529 = (inst_25528__$1 == null);
var state_25668__$1 = (function (){var statearr_25684 = state_25668;
(statearr_25684[(12)] = inst_25528__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25529)){
var statearr_25685_25768 = state_25668__$1;
(statearr_25685_25768[(1)] = (5));

} else {
var statearr_25686_25769 = state_25668__$1;
(statearr_25686_25769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (15))){
var inst_25544 = (state_25668[(13)]);
var inst_25546 = (state_25668[(14)]);
var inst_25545 = (state_25668[(15)]);
var inst_25547 = (state_25668[(16)]);
var inst_25562 = (state_25668[(2)]);
var inst_25563 = (inst_25547 + (1));
var tmp25680 = inst_25544;
var tmp25681 = inst_25546;
var tmp25682 = inst_25545;
var inst_25544__$1 = tmp25680;
var inst_25545__$1 = tmp25682;
var inst_25546__$1 = tmp25681;
var inst_25547__$1 = inst_25563;
var state_25668__$1 = (function (){var statearr_25687 = state_25668;
(statearr_25687[(13)] = inst_25544__$1);

(statearr_25687[(14)] = inst_25546__$1);

(statearr_25687[(15)] = inst_25545__$1);

(statearr_25687[(18)] = inst_25562);

(statearr_25687[(16)] = inst_25547__$1);

return statearr_25687;
})();
var statearr_25688_25770 = state_25668__$1;
(statearr_25688_25770[(2)] = null);

(statearr_25688_25770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (21))){
var inst_25589 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25692_25771 = state_25668__$1;
(statearr_25692_25771[(2)] = inst_25589);

(statearr_25692_25771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (31))){
var inst_25616 = (state_25668[(10)]);
var inst_25620 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25621 = cljs.core.async.untap_STAR_.call(null,m,inst_25616);
var state_25668__$1 = (function (){var statearr_25693 = state_25668;
(statearr_25693[(19)] = inst_25620);

return statearr_25693;
})();
var statearr_25694_25772 = state_25668__$1;
(statearr_25694_25772[(2)] = inst_25621);

(statearr_25694_25772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (32))){
var inst_25609 = (state_25668[(9)]);
var inst_25608 = (state_25668[(20)]);
var inst_25611 = (state_25668[(11)]);
var inst_25610 = (state_25668[(21)]);
var inst_25623 = (state_25668[(2)]);
var inst_25624 = (inst_25611 + (1));
var tmp25689 = inst_25609;
var tmp25690 = inst_25608;
var tmp25691 = inst_25610;
var inst_25608__$1 = tmp25690;
var inst_25609__$1 = tmp25689;
var inst_25610__$1 = tmp25691;
var inst_25611__$1 = inst_25624;
var state_25668__$1 = (function (){var statearr_25695 = state_25668;
(statearr_25695[(9)] = inst_25609__$1);

(statearr_25695[(20)] = inst_25608__$1);

(statearr_25695[(11)] = inst_25611__$1);

(statearr_25695[(21)] = inst_25610__$1);

(statearr_25695[(22)] = inst_25623);

return statearr_25695;
})();
var statearr_25696_25773 = state_25668__$1;
(statearr_25696_25773[(2)] = null);

(statearr_25696_25773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (40))){
var inst_25636 = (state_25668[(23)]);
var inst_25640 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25641 = cljs.core.async.untap_STAR_.call(null,m,inst_25636);
var state_25668__$1 = (function (){var statearr_25697 = state_25668;
(statearr_25697[(24)] = inst_25640);

return statearr_25697;
})();
var statearr_25698_25774 = state_25668__$1;
(statearr_25698_25774[(2)] = inst_25641);

(statearr_25698_25774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (33))){
var inst_25627 = (state_25668[(25)]);
var inst_25629 = cljs.core.chunked_seq_QMARK_.call(null,inst_25627);
var state_25668__$1 = state_25668;
if(inst_25629){
var statearr_25699_25775 = state_25668__$1;
(statearr_25699_25775[(1)] = (36));

} else {
var statearr_25700_25776 = state_25668__$1;
(statearr_25700_25776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (13))){
var inst_25556 = (state_25668[(26)]);
var inst_25559 = cljs.core.async.close_BANG_.call(null,inst_25556);
var state_25668__$1 = state_25668;
var statearr_25701_25777 = state_25668__$1;
(statearr_25701_25777[(2)] = inst_25559);

(statearr_25701_25777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (22))){
var inst_25579 = (state_25668[(8)]);
var inst_25582 = cljs.core.async.close_BANG_.call(null,inst_25579);
var state_25668__$1 = state_25668;
var statearr_25702_25778 = state_25668__$1;
(statearr_25702_25778[(2)] = inst_25582);

(statearr_25702_25778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (36))){
var inst_25627 = (state_25668[(25)]);
var inst_25631 = cljs.core.chunk_first.call(null,inst_25627);
var inst_25632 = cljs.core.chunk_rest.call(null,inst_25627);
var inst_25633 = cljs.core.count.call(null,inst_25631);
var inst_25608 = inst_25632;
var inst_25609 = inst_25631;
var inst_25610 = inst_25633;
var inst_25611 = (0);
var state_25668__$1 = (function (){var statearr_25703 = state_25668;
(statearr_25703[(9)] = inst_25609);

(statearr_25703[(20)] = inst_25608);

(statearr_25703[(11)] = inst_25611);

(statearr_25703[(21)] = inst_25610);

return statearr_25703;
})();
var statearr_25704_25779 = state_25668__$1;
(statearr_25704_25779[(2)] = null);

(statearr_25704_25779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (41))){
var inst_25627 = (state_25668[(25)]);
var inst_25643 = (state_25668[(2)]);
var inst_25644 = cljs.core.next.call(null,inst_25627);
var inst_25608 = inst_25644;
var inst_25609 = null;
var inst_25610 = (0);
var inst_25611 = (0);
var state_25668__$1 = (function (){var statearr_25705 = state_25668;
(statearr_25705[(9)] = inst_25609);

(statearr_25705[(27)] = inst_25643);

(statearr_25705[(20)] = inst_25608);

(statearr_25705[(11)] = inst_25611);

(statearr_25705[(21)] = inst_25610);

return statearr_25705;
})();
var statearr_25706_25780 = state_25668__$1;
(statearr_25706_25780[(2)] = null);

(statearr_25706_25780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (43))){
var state_25668__$1 = state_25668;
var statearr_25707_25781 = state_25668__$1;
(statearr_25707_25781[(2)] = null);

(statearr_25707_25781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (29))){
var inst_25652 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25708_25782 = state_25668__$1;
(statearr_25708_25782[(2)] = inst_25652);

(statearr_25708_25782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (44))){
var inst_25661 = (state_25668[(2)]);
var state_25668__$1 = (function (){var statearr_25709 = state_25668;
(statearr_25709[(28)] = inst_25661);

return statearr_25709;
})();
var statearr_25710_25783 = state_25668__$1;
(statearr_25710_25783[(2)] = null);

(statearr_25710_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (6))){
var inst_25600 = (state_25668[(29)]);
var inst_25598 = cljs.core.deref.call(null,state);
var inst_25599 = cljs.core.second.call(null,inst_25598);
var inst_25600__$1 = cljs.core.keys.call(null,inst_25599);
var inst_25601 = cljs.core.count.call(null,inst_25600__$1);
var inst_25602 = cljs.core.reset_BANG_.call(null,dctr,inst_25601);
var inst_25607 = cljs.core.seq.call(null,inst_25600__$1);
var inst_25608 = inst_25607;
var inst_25609 = null;
var inst_25610 = (0);
var inst_25611 = (0);
var state_25668__$1 = (function (){var statearr_25711 = state_25668;
(statearr_25711[(30)] = inst_25602);

(statearr_25711[(9)] = inst_25609);

(statearr_25711[(29)] = inst_25600__$1);

(statearr_25711[(20)] = inst_25608);

(statearr_25711[(11)] = inst_25611);

(statearr_25711[(21)] = inst_25610);

return statearr_25711;
})();
var statearr_25712_25784 = state_25668__$1;
(statearr_25712_25784[(2)] = null);

(statearr_25712_25784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (28))){
var inst_25608 = (state_25668[(20)]);
var inst_25627 = (state_25668[(25)]);
var inst_25627__$1 = cljs.core.seq.call(null,inst_25608);
var state_25668__$1 = (function (){var statearr_25713 = state_25668;
(statearr_25713[(25)] = inst_25627__$1);

return statearr_25713;
})();
if(inst_25627__$1){
var statearr_25714_25785 = state_25668__$1;
(statearr_25714_25785[(1)] = (33));

} else {
var statearr_25715_25786 = state_25668__$1;
(statearr_25715_25786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (25))){
var inst_25611 = (state_25668[(11)]);
var inst_25610 = (state_25668[(21)]);
var inst_25613 = (inst_25611 < inst_25610);
var inst_25614 = inst_25613;
var state_25668__$1 = state_25668;
if(cljs.core.truth_(inst_25614)){
var statearr_25716_25787 = state_25668__$1;
(statearr_25716_25787[(1)] = (27));

} else {
var statearr_25717_25788 = state_25668__$1;
(statearr_25717_25788[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (34))){
var state_25668__$1 = state_25668;
var statearr_25718_25789 = state_25668__$1;
(statearr_25718_25789[(2)] = null);

(statearr_25718_25789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (17))){
var state_25668__$1 = state_25668;
var statearr_25719_25790 = state_25668__$1;
(statearr_25719_25790[(2)] = null);

(statearr_25719_25790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (3))){
var inst_25666 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25668__$1,inst_25666);
} else {
if((state_val_25669 === (12))){
var inst_25594 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25720_25791 = state_25668__$1;
(statearr_25720_25791[(2)] = inst_25594);

(statearr_25720_25791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (2))){
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25668__$1,(4),ch);
} else {
if((state_val_25669 === (23))){
var state_25668__$1 = state_25668;
var statearr_25721_25792 = state_25668__$1;
(statearr_25721_25792[(2)] = null);

(statearr_25721_25792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (35))){
var inst_25650 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25722_25793 = state_25668__$1;
(statearr_25722_25793[(2)] = inst_25650);

(statearr_25722_25793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (19))){
var inst_25566 = (state_25668[(7)]);
var inst_25570 = cljs.core.chunk_first.call(null,inst_25566);
var inst_25571 = cljs.core.chunk_rest.call(null,inst_25566);
var inst_25572 = cljs.core.count.call(null,inst_25570);
var inst_25544 = inst_25571;
var inst_25545 = inst_25570;
var inst_25546 = inst_25572;
var inst_25547 = (0);
var state_25668__$1 = (function (){var statearr_25723 = state_25668;
(statearr_25723[(13)] = inst_25544);

(statearr_25723[(14)] = inst_25546);

(statearr_25723[(15)] = inst_25545);

(statearr_25723[(16)] = inst_25547);

return statearr_25723;
})();
var statearr_25724_25794 = state_25668__$1;
(statearr_25724_25794[(2)] = null);

(statearr_25724_25794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (11))){
var inst_25544 = (state_25668[(13)]);
var inst_25566 = (state_25668[(7)]);
var inst_25566__$1 = cljs.core.seq.call(null,inst_25544);
var state_25668__$1 = (function (){var statearr_25725 = state_25668;
(statearr_25725[(7)] = inst_25566__$1);

return statearr_25725;
})();
if(inst_25566__$1){
var statearr_25726_25795 = state_25668__$1;
(statearr_25726_25795[(1)] = (16));

} else {
var statearr_25727_25796 = state_25668__$1;
(statearr_25727_25796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (9))){
var inst_25596 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25728_25797 = state_25668__$1;
(statearr_25728_25797[(2)] = inst_25596);

(statearr_25728_25797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (5))){
var inst_25528 = (state_25668[(12)]);
var inst_25535 = (function (){var val = inst_25528;
return ((function (val,inst_25528,state_val_25669,c__21118__auto___25759,state,m,dchan,dctr,done){
return (function (p__25534){
var vec__25729 = p__25534;
var _ = cljs.core.nth.call(null,vec__25729,(0),null);
var cs = cljs.core.nth.call(null,vec__25729,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_25528,state_val_25669,c__21118__auto___25759,state,m,dchan,dctr,done))
})();
var inst_25536 = cljs.core.swap_BANG_.call(null,state,inst_25535);
var inst_25537 = cljs.core.nth.call(null,inst_25536,(0),null);
var inst_25538 = cljs.core.nth.call(null,inst_25536,(1),null);
var inst_25543 = cljs.core.seq.call(null,inst_25538);
var inst_25544 = inst_25543;
var inst_25545 = null;
var inst_25546 = (0);
var inst_25547 = (0);
var state_25668__$1 = (function (){var statearr_25732 = state_25668;
(statearr_25732[(13)] = inst_25544);

(statearr_25732[(31)] = inst_25537);

(statearr_25732[(14)] = inst_25546);

(statearr_25732[(15)] = inst_25545);

(statearr_25732[(16)] = inst_25547);

return statearr_25732;
})();
var statearr_25733_25798 = state_25668__$1;
(statearr_25733_25798[(2)] = null);

(statearr_25733_25798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (14))){
var state_25668__$1 = state_25668;
var statearr_25734_25799 = state_25668__$1;
(statearr_25734_25799[(2)] = null);

(statearr_25734_25799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (45))){
var inst_25658 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25735_25800 = state_25668__$1;
(statearr_25735_25800[(2)] = inst_25658);

(statearr_25735_25800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (26))){
var inst_25600 = (state_25668[(29)]);
var inst_25654 = (state_25668[(2)]);
var inst_25655 = cljs.core.seq.call(null,inst_25600);
var state_25668__$1 = (function (){var statearr_25736 = state_25668;
(statearr_25736[(32)] = inst_25654);

return statearr_25736;
})();
if(inst_25655){
var statearr_25737_25801 = state_25668__$1;
(statearr_25737_25801[(1)] = (42));

} else {
var statearr_25738_25802 = state_25668__$1;
(statearr_25738_25802[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (16))){
var inst_25566 = (state_25668[(7)]);
var inst_25568 = cljs.core.chunked_seq_QMARK_.call(null,inst_25566);
var state_25668__$1 = state_25668;
if(inst_25568){
var statearr_25739_25803 = state_25668__$1;
(statearr_25739_25803[(1)] = (19));

} else {
var statearr_25740_25804 = state_25668__$1;
(statearr_25740_25804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (38))){
var inst_25647 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25741_25805 = state_25668__$1;
(statearr_25741_25805[(2)] = inst_25647);

(statearr_25741_25805[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (30))){
var state_25668__$1 = state_25668;
var statearr_25742_25806 = state_25668__$1;
(statearr_25742_25806[(2)] = null);

(statearr_25742_25806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (10))){
var inst_25545 = (state_25668[(15)]);
var inst_25547 = (state_25668[(16)]);
var inst_25555 = cljs.core._nth.call(null,inst_25545,inst_25547);
var inst_25556 = cljs.core.nth.call(null,inst_25555,(0),null);
var inst_25557 = cljs.core.nth.call(null,inst_25555,(1),null);
var state_25668__$1 = (function (){var statearr_25743 = state_25668;
(statearr_25743[(26)] = inst_25556);

return statearr_25743;
})();
if(cljs.core.truth_(inst_25557)){
var statearr_25744_25807 = state_25668__$1;
(statearr_25744_25807[(1)] = (13));

} else {
var statearr_25745_25808 = state_25668__$1;
(statearr_25745_25808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (18))){
var inst_25592 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25746_25809 = state_25668__$1;
(statearr_25746_25809[(2)] = inst_25592);

(statearr_25746_25809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (42))){
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25668__$1,(45),dchan);
} else {
if((state_val_25669 === (37))){
var inst_25627 = (state_25668[(25)]);
var inst_25528 = (state_25668[(12)]);
var inst_25636 = (state_25668[(23)]);
var inst_25636__$1 = cljs.core.first.call(null,inst_25627);
var inst_25637 = cljs.core.async.put_BANG_.call(null,inst_25636__$1,inst_25528,done);
var state_25668__$1 = (function (){var statearr_25747 = state_25668;
(statearr_25747[(23)] = inst_25636__$1);

return statearr_25747;
})();
if(cljs.core.truth_(inst_25637)){
var statearr_25748_25810 = state_25668__$1;
(statearr_25748_25810[(1)] = (39));

} else {
var statearr_25749_25811 = state_25668__$1;
(statearr_25749_25811[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (8))){
var inst_25546 = (state_25668[(14)]);
var inst_25547 = (state_25668[(16)]);
var inst_25549 = (inst_25547 < inst_25546);
var inst_25550 = inst_25549;
var state_25668__$1 = state_25668;
if(cljs.core.truth_(inst_25550)){
var statearr_25750_25812 = state_25668__$1;
(statearr_25750_25812[(1)] = (10));

} else {
var statearr_25751_25813 = state_25668__$1;
(statearr_25751_25813[(1)] = (11));

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
});})(c__21118__auto___25759,state,m,dchan,dctr,done))
;
return ((function (switch__21103__auto__,c__21118__auto___25759,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__21104__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_25755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25755[(0)] = reagi$core$mult_STAR__$_state_machine__21104__auto__);

(statearr_25755[(1)] = (1));

return statearr_25755;
});
var reagi$core$mult_STAR__$_state_machine__21104__auto____1 = (function (state_25668){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_25668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e25756){if((e25756 instanceof Object)){
var ex__21107__auto__ = e25756;
var statearr_25757_25814 = state_25668;
(statearr_25757_25814[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25815 = state_25668;
state_25668 = G__25815;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__21104__auto__ = function(state_25668){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__21104__auto____1.call(this,state_25668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__21104__auto____0;
reagi$core$mult_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__21104__auto____1;
return reagi$core$mult_STAR__$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___25759,state,m,dchan,dctr,done))
})();
var state__21120__auto__ = (function (){var statearr_25758 = f__21119__auto__.call(null);
(statearr_25758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___25759);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___25759,state,m,dchan,dctr,done))
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
var c__21118__auto___25871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___25871,stream,self____$1){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___25871,stream,self____$1){
return (function (state_25821){
var state_val_25822 = (state_25821[(1)]);
if((state_val_25822 === (1))){
var inst_25817 = reagi.core.box.call(null,msg);
var state_25821__$1 = state_25821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25821__$1,(2),self__.ch,inst_25817);
} else {
if((state_val_25822 === (2))){
var inst_25819 = (state_25821[(2)]);
var state_25821__$1 = state_25821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25821__$1,inst_25819);
} else {
return null;
}
}
});})(c__21118__auto___25871,stream,self____$1))
;
return ((function (switch__21103__auto__,c__21118__auto___25871,stream,self____$1){
return (function() {
var reagi$core$state_machine__21104__auto__ = null;
var reagi$core$state_machine__21104__auto____0 = (function (){
var statearr_25826 = [null,null,null,null,null,null,null];
(statearr_25826[(0)] = reagi$core$state_machine__21104__auto__);

(statearr_25826[(1)] = (1));

return statearr_25826;
});
var reagi$core$state_machine__21104__auto____1 = (function (state_25821){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_25821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e25827){if((e25827 instanceof Object)){
var ex__21107__auto__ = e25827;
var statearr_25828_25872 = state_25821;
(statearr_25828_25872[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25873 = state_25821;
state_25821 = G__25873;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$state_machine__21104__auto__ = function(state_25821){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$state_machine__21104__auto____1.call(this,state_25821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21104__auto____0;
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21104__auto____1;
return reagi$core$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___25871,stream,self____$1))
})();
var state__21120__auto__ = (function (){var statearr_25829 = f__21119__auto__.call(null);
(statearr_25829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___25871);

return statearr_25829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___25871,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args25816){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25816)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__21118__auto___25874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___25874,stream){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___25874,stream){
return (function (state_25834){
var state_val_25835 = (state_25834[(1)]);
if((state_val_25835 === (1))){
var inst_25830 = reagi.core.box.call(null,msg);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25834__$1,(2),self__.ch,inst_25830);
} else {
if((state_val_25835 === (2))){
var inst_25832 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25834__$1,inst_25832);
} else {
return null;
}
}
});})(c__21118__auto___25874,stream))
;
return ((function (switch__21103__auto__,c__21118__auto___25874,stream){
return (function() {
var reagi$core$state_machine__21104__auto__ = null;
var reagi$core$state_machine__21104__auto____0 = (function (){
var statearr_25839 = [null,null,null,null,null,null,null];
(statearr_25839[(0)] = reagi$core$state_machine__21104__auto__);

(statearr_25839[(1)] = (1));

return statearr_25839;
});
var reagi$core$state_machine__21104__auto____1 = (function (state_25834){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_25834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e25840){if((e25840 instanceof Object)){
var ex__21107__auto__ = e25840;
var statearr_25841_25875 = state_25834;
(statearr_25841_25875[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25876 = state_25834;
state_25834 = G__25876;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$state_machine__21104__auto__ = function(state_25834){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$state_machine__21104__auto____1.call(this,state_25834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21104__auto____0;
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21104__auto____1;
return reagi$core$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___25874,stream))
})();
var state__21120__auto__ = (function (){var statearr_25842 = f__21119__auto__.call(null);
(statearr_25842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___25874);

return statearr_25842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___25874,stream))
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
var c__21118__auto___25877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___25877,___$1){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___25877,___$1){
return (function (state_25852){
var state_val_25853 = (state_25852[(1)]);
if((state_val_25853 === (1))){
var inst_25843 = (state_25852[(7)]);
var inst_25843__$1 = cljs.core.deref.call(null,self__.head);
var state_25852__$1 = (function (){var statearr_25854 = state_25852;
(statearr_25854[(7)] = inst_25843__$1);

return statearr_25854;
})();
if(cljs.core.truth_(inst_25843__$1)){
var statearr_25855_25878 = state_25852__$1;
(statearr_25855_25878[(1)] = (2));

} else {
var statearr_25856_25879 = state_25852__$1;
(statearr_25856_25879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (2))){
var inst_25843 = (state_25852[(7)]);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25852__$1,(5),channel,inst_25843);
} else {
if((state_val_25853 === (3))){
var state_25852__$1 = state_25852;
var statearr_25857_25880 = state_25852__$1;
(statearr_25857_25880[(2)] = null);

(statearr_25857_25880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (4))){
var inst_25849 = (state_25852[(2)]);
var inst_25850 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_25852__$1 = (function (){var statearr_25858 = state_25852;
(statearr_25858[(8)] = inst_25849);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25852__$1,inst_25850);
} else {
if((state_val_25853 === (5))){
var inst_25846 = (state_25852[(2)]);
var state_25852__$1 = state_25852;
var statearr_25859_25881 = state_25852__$1;
(statearr_25859_25881[(2)] = inst_25846);

(statearr_25859_25881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21118__auto___25877,___$1))
;
return ((function (switch__21103__auto__,c__21118__auto___25877,___$1){
return (function() {
var reagi$core$state_machine__21104__auto__ = null;
var reagi$core$state_machine__21104__auto____0 = (function (){
var statearr_25863 = [null,null,null,null,null,null,null,null,null];
(statearr_25863[(0)] = reagi$core$state_machine__21104__auto__);

(statearr_25863[(1)] = (1));

return statearr_25863;
});
var reagi$core$state_machine__21104__auto____1 = (function (state_25852){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_25852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e25864){if((e25864 instanceof Object)){
var ex__21107__auto__ = e25864;
var statearr_25865_25882 = state_25852;
(statearr_25865_25882[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25883 = state_25852;
state_25852 = G__25883;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$state_machine__21104__auto__ = function(state_25852){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$state_machine__21104__auto____1.call(this,state_25852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21104__auto____0;
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21104__auto____1;
return reagi$core$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___25877,___$1))
})();
var state__21120__auto__ = (function (){var statearr_25866 = f__21119__auto__.call(null);
(statearr_25866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___25877);

return statearr_25866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___25877,___$1))
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
var seq__25867_25884 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__25868_25885 = null;
var count__25869_25886 = (0);
var i__25870_25887 = (0);
while(true){
if((i__25870_25887 < count__25869_25886)){
var d_25888 = cljs.core._nth.call(null,chunk__25868_25885,i__25870_25887);
d_25888.call(null);

var G__25889 = seq__25867_25884;
var G__25890 = chunk__25868_25885;
var G__25891 = count__25869_25886;
var G__25892 = (i__25870_25887 + (1));
seq__25867_25884 = G__25889;
chunk__25868_25885 = G__25890;
count__25869_25886 = G__25891;
i__25870_25887 = G__25892;
continue;
} else {
var temp__4657__auto___25893 = cljs.core.seq.call(null,seq__25867_25884);
if(temp__4657__auto___25893){
var seq__25867_25894__$1 = temp__4657__auto___25893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25867_25894__$1)){
var c__19570__auto___25895 = cljs.core.chunk_first.call(null,seq__25867_25894__$1);
var G__25896 = cljs.core.chunk_rest.call(null,seq__25867_25894__$1);
var G__25897 = c__19570__auto___25895;
var G__25898 = cljs.core.count.call(null,c__19570__auto___25895);
var G__25899 = (0);
seq__25867_25884 = G__25896;
chunk__25868_25885 = G__25897;
count__25869_25886 = G__25898;
i__25870_25887 = G__25899;
continue;
} else {
var d_25900 = cljs.core.first.call(null,seq__25867_25894__$1);
d_25900.call(null);

var G__25901 = cljs.core.next.call(null,seq__25867_25894__$1);
var G__25902 = null;
var G__25903 = (0);
var G__25904 = (0);
seq__25867_25884 = G__25901;
chunk__25868_25885 = G__25902;
count__25869_25886 = G__25903;
i__25870_25887 = G__25904;
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
var args25905 = [];
var len__19864__auto___25955 = arguments.length;
var i__19865__auto___25956 = (0);
while(true){
if((i__19865__auto___25956 < len__19864__auto___25955)){
args25905.push((arguments[i__19865__auto___25956]));

var G__25957 = (i__19865__auto___25956 + (1));
i__19865__auto___25956 = G__25957;
continue;
} else {
}
break;
}

var G__25907 = args25905.length;
switch (G__25907) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25905.length)].join('')));

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
var c__21118__auto___25959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___25959,in$,closed,head,out,mult){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___25959,in$,closed,head,out,mult){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25917 = (state_25931[(7)]);
var inst_25917__$1 = (state_25931[(2)]);
var state_25931__$1 = (function (){var statearr_25933 = state_25931;
(statearr_25933[(7)] = inst_25917__$1);

return statearr_25933;
})();
if(cljs.core.truth_(inst_25917__$1)){
var statearr_25934_25960 = state_25931__$1;
(statearr_25934_25960[(1)] = (8));

} else {
var statearr_25935_25961 = state_25931__$1;
(statearr_25935_25961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var inst_25908 = init;
var state_25931__$1 = (function (){var statearr_25936 = state_25931;
(statearr_25936[(8)] = inst_25908);

return statearr_25936;
})();
var statearr_25937_25962 = state_25931__$1;
(statearr_25937_25962[(2)] = null);

(statearr_25937_25962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var inst_25912 = cljs.core.async.close_BANG_.call(null,in$);
var state_25931__$1 = state_25931;
var statearr_25938_25963 = state_25931__$1;
(statearr_25938_25963[(2)] = inst_25912);

(statearr_25938_25963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (6))){
var inst_25915 = (state_25931[(2)]);
var state_25931__$1 = (function (){var statearr_25939 = state_25931;
(statearr_25939[(9)] = inst_25915);

return statearr_25939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25931__$1,(7),in$);
} else {
if((state_val_25932 === (3))){
var inst_25927 = (state_25931[(2)]);
var inst_25928 = cljs.core.async.close_BANG_.call(null,out);
var inst_25929 = cljs.core.reset_BANG_.call(null,closed,true);
var state_25931__$1 = (function (){var statearr_25940 = state_25931;
(statearr_25940[(10)] = inst_25928);

(statearr_25940[(11)] = inst_25927);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (2))){
var inst_25908 = (state_25931[(8)]);
var inst_25910 = (inst_25908 instanceof reagi.core.Completed);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25910)){
var statearr_25941_25964 = state_25931__$1;
(statearr_25941_25964[(1)] = (4));

} else {
var statearr_25942_25965 = state_25931__$1;
(statearr_25942_25965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (11))){
var inst_25917 = (state_25931[(7)]);
var inst_25920 = (state_25931[(2)]);
var inst_25921 = cljs.core.reset_BANG_.call(null,head,inst_25917);
var inst_25908 = inst_25917;
var state_25931__$1 = (function (){var statearr_25943 = state_25931;
(statearr_25943[(12)] = inst_25920);

(statearr_25943[(8)] = inst_25908);

(statearr_25943[(13)] = inst_25921);

return statearr_25943;
})();
var statearr_25944_25966 = state_25931__$1;
(statearr_25944_25966[(2)] = null);

(statearr_25944_25966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var state_25931__$1 = state_25931;
var statearr_25945_25967 = state_25931__$1;
(statearr_25945_25967[(2)] = null);

(statearr_25945_25967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var state_25931__$1 = state_25931;
var statearr_25946_25968 = state_25931__$1;
(statearr_25946_25968[(2)] = null);

(statearr_25946_25968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25925 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25947_25969 = state_25931__$1;
(statearr_25947_25969[(2)] = inst_25925);

(statearr_25947_25969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (8))){
var inst_25917 = (state_25931[(7)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(11),out,inst_25917);
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
});})(c__21118__auto___25959,in$,closed,head,out,mult))
;
return ((function (switch__21103__auto__,c__21118__auto___25959,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__21104__auto__ = null;
var reagi$core$state_machine__21104__auto____0 = (function (){
var statearr_25951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = reagi$core$state_machine__21104__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var reagi$core$state_machine__21104__auto____1 = (function (state_25931){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object)){
var ex__21107__auto__ = e25952;
var statearr_25953_25970 = state_25931;
(statearr_25953_25970[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25971 = state_25931;
state_25931 = G__25971;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$state_machine__21104__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$state_machine__21104__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21104__auto____0;
reagi$core$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21104__auto____1;
return reagi$core$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___25959,in$,closed,head,out,mult))
})();
var state__21120__auto__ = (function (){var statearr_25954 = f__21119__auto__.call(null);
(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___25959);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___25959,in$,closed,head,out,mult))
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
var args25972 = [];
var len__19864__auto___25982 = arguments.length;
var i__19865__auto___25983 = (0);
while(true){
if((i__19865__auto___25983 < len__19864__auto___25982)){
args25972.push((arguments[i__19865__auto___25983]));

var G__25984 = (i__19865__auto___25983 + (1));
i__19865__auto___25983 = G__25984;
continue;
} else {
}
break;
}

var G__25977 = args25972.length;
switch (G__25977) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19883__auto__ = (new cljs.core.IndexedSeq(args25972.slice((2)),(0),null));
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
var seq__25978 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__25979 = null;
var count__25980 = (0);
var i__25981 = (0);
while(true){
if((i__25981 < count__25980)){
var m = cljs.core._nth.call(null,chunk__25979,i__25981);
stream.call(null,m);

var G__25986 = seq__25978;
var G__25987 = chunk__25979;
var G__25988 = count__25980;
var G__25989 = (i__25981 + (1));
seq__25978 = G__25986;
chunk__25979 = G__25987;
count__25980 = G__25988;
i__25981 = G__25989;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25978);
if(temp__4657__auto__){
var seq__25978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25978__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__25978__$1);
var G__25990 = cljs.core.chunk_rest.call(null,seq__25978__$1);
var G__25991 = c__19570__auto__;
var G__25992 = cljs.core.count.call(null,c__19570__auto__);
var G__25993 = (0);
seq__25978 = G__25990;
chunk__25979 = G__25991;
count__25980 = G__25992;
i__25981 = G__25993;
continue;
} else {
var m = cljs.core.first.call(null,seq__25978__$1);
stream.call(null,m);

var G__25994 = cljs.core.next.call(null,seq__25978__$1);
var G__25995 = null;
var G__25996 = (0);
var G__25997 = (0);
seq__25978 = G__25994;
chunk__25979 = G__25995;
count__25980 = G__25996;
i__25981 = G__25997;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq25973){
var G__25974 = cljs.core.first.call(null,seq25973);
var seq25973__$1 = cljs.core.next.call(null,seq25973);
var G__25975 = cljs.core.first.call(null,seq25973__$1);
var seq25973__$2 = cljs.core.next.call(null,seq25973__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__25974,G__25975,seq25973__$2);
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
var seq__26002 = cljs.core.seq.call(null,chs);
var chunk__26003 = null;
var count__26004 = (0);
var i__26005 = (0);
while(true){
if((i__26005 < count__26004)){
var ch = cljs.core._nth.call(null,chunk__26003,i__26005);
cljs.core.async.close_BANG_.call(null,ch);

var G__26006 = seq__26002;
var G__26007 = chunk__26003;
var G__26008 = count__26004;
var G__26009 = (i__26005 + (1));
seq__26002 = G__26006;
chunk__26003 = G__26007;
count__26004 = G__26008;
i__26005 = G__26009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26002);
if(temp__4657__auto__){
var seq__26002__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26002__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__26002__$1);
var G__26010 = cljs.core.chunk_rest.call(null,seq__26002__$1);
var G__26011 = c__19570__auto__;
var G__26012 = cljs.core.count.call(null,c__19570__auto__);
var G__26013 = (0);
seq__26002 = G__26010;
chunk__26003 = G__26011;
count__26004 = G__26012;
i__26005 = G__26013;
continue;
} else {
var ch = cljs.core.first.call(null,seq__26002__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__26014 = cljs.core.next.call(null,seq__26002__$1);
var G__26015 = null;
var G__26016 = (0);
var G__26017 = (0);
seq__26002 = G__26014;
chunk__26003 = G__26015;
count__26004 = G__26016;
i__26005 = G__26017;
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
return cljs.core.mapv.call(null,(function (p1__26018_SHARP_){
return reagi.core.listen.call(null,p1__26018_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26022 = arguments.length;
var i__19865__auto___26023 = (0);
while(true){
if((i__19865__auto___26023 < len__19864__auto___26022)){
args__19871__auto__.push((arguments[i__19865__auto___26023]));

var G__26024 = (i__19865__auto___26023 + (1));
i__19865__auto___26023 = G__26024;
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

reagi.core.connect_port.cljs$lang$applyTo = (function (seq26019){
var G__26020 = cljs.core.first.call(null,seq26019);
var seq26019__$1 = cljs.core.next.call(null,seq26019);
var G__26021 = cljs.core.first.call(null,seq26019__$1);
var seq26019__$2 = cljs.core.next.call(null,seq26019__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__26020,G__26021,seq26019__$2);
});

/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26027 = arguments.length;
var i__19865__auto___26028 = (0);
while(true){
if((i__19865__auto___26028 < len__19864__auto___26027)){
args__19871__auto__.push((arguments[i__19865__auto___26028]));

var G__26029 = (i__19865__auto___26028 + (1));
i__19865__auto___26028 = G__26029;
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
var G__26026 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26026,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__26026,((function (G__26026,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26026,chs))
);

reagi.core.depend_on.call(null,G__26026,streams);

return G__26026;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq26025){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26025));
});

reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__,index){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__,index){
return (function (state_26142){
var state_val_26143 = (state_26142[(1)]);
if((state_val_26143 === (7))){
var inst_26115 = (state_26142[(7)]);
var inst_26114 = (state_26142[(2)]);
var inst_26115__$1 = cljs.core.nth.call(null,inst_26114,(0),null);
var inst_26116 = cljs.core.nth.call(null,inst_26114,(1),null);
var state_26142__$1 = (function (){var statearr_26145 = state_26142;
(statearr_26145[(7)] = inst_26115__$1);

(statearr_26145[(8)] = inst_26116);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26115__$1)){
var statearr_26146_26172 = state_26142__$1;
(statearr_26146_26172[(1)] = (8));

} else {
var statearr_26147_26173 = state_26142__$1;
(statearr_26147_26173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (1))){
var inst_26101 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_26102 = cljs.core.mapv.call(null,inst_26101,ins);
var inst_26103 = cljs.core.set.call(null,ins);
var inst_26104 = inst_26102;
var inst_26105 = inst_26103;
var state_26142__$1 = (function (){var statearr_26148 = state_26142;
(statearr_26148[(9)] = inst_26105);

(statearr_26148[(10)] = inst_26104);

return statearr_26148;
})();
var statearr_26149_26174 = state_26142__$1;
(statearr_26149_26174[(2)] = null);

(statearr_26149_26174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (4))){
var inst_26105 = (state_26142[(9)]);
var inst_26112 = cljs.core.vec.call(null,inst_26105);
var state_26142__$1 = state_26142;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26142__$1,(7),inst_26112);
} else {
if((state_val_26143 === (13))){
var inst_26120 = (state_26142[(11)]);
var inst_26105 = (state_26142[(9)]);
var inst_26128 = (state_26142[(2)]);
var tmp26144 = inst_26105;
var inst_26104 = inst_26120;
var inst_26105__$1 = tmp26144;
var state_26142__$1 = (function (){var statearr_26150 = state_26142;
(statearr_26150[(9)] = inst_26105__$1);

(statearr_26150[(10)] = inst_26104);

(statearr_26150[(12)] = inst_26128);

return statearr_26150;
})();
var statearr_26151_26175 = state_26142__$1;
(statearr_26151_26175[(2)] = null);

(statearr_26151_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (6))){
var inst_26138 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26152_26176 = state_26142__$1;
(statearr_26152_26176[(2)] = inst_26138);

(statearr_26152_26176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (3))){
var inst_26140 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26142__$1,inst_26140);
} else {
if((state_val_26143 === (12))){
var inst_26120 = (state_26142[(11)]);
var inst_26124 = reagi.core.box.call(null,inst_26120);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26142__$1,(14),out,inst_26124);
} else {
if((state_val_26143 === (2))){
var inst_26105 = (state_26142[(9)]);
var inst_26107 = cljs.core.seq.call(null,inst_26105);
var state_26142__$1 = state_26142;
if(inst_26107){
var statearr_26154_26177 = state_26142__$1;
(statearr_26154_26177[(1)] = (4));

} else {
var statearr_26155_26178 = state_26142__$1;
(statearr_26155_26178[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (11))){
var state_26142__$1 = state_26142;
var statearr_26156_26179 = state_26142__$1;
(statearr_26156_26179[(2)] = null);

(statearr_26156_26179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (9))){
var inst_26116 = (state_26142[(8)]);
var inst_26105 = (state_26142[(9)]);
var inst_26104 = (state_26142[(10)]);
var inst_26131 = cljs.core.disj.call(null,inst_26105,inst_26116);
var tmp26153 = inst_26104;
var inst_26104__$1 = tmp26153;
var inst_26105__$1 = inst_26131;
var state_26142__$1 = (function (){var statearr_26157 = state_26142;
(statearr_26157[(9)] = inst_26105__$1);

(statearr_26157[(10)] = inst_26104__$1);

return statearr_26157;
})();
var statearr_26158_26180 = state_26142__$1;
(statearr_26158_26180[(2)] = null);

(statearr_26158_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (5))){
var inst_26136 = cljs.core.async.close_BANG_.call(null,out);
var state_26142__$1 = state_26142;
var statearr_26159_26181 = state_26142__$1;
(statearr_26159_26181[(2)] = inst_26136);

(statearr_26159_26181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (14))){
var inst_26126 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26160_26182 = state_26142__$1;
(statearr_26160_26182[(2)] = inst_26126);

(statearr_26160_26182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (10))){
var inst_26134 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26161_26183 = state_26142__$1;
(statearr_26161_26183[(2)] = inst_26134);

(statearr_26161_26183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (8))){
var inst_26115 = (state_26142[(7)]);
var inst_26120 = (state_26142[(11)]);
var inst_26116 = (state_26142[(8)]);
var inst_26104 = (state_26142[(10)]);
var inst_26118 = index.call(null,inst_26116);
var inst_26119 = reagi.core.unbox.call(null,inst_26115);
var inst_26120__$1 = cljs.core.assoc.call(null,inst_26104,inst_26118,inst_26119);
var inst_26121 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_26120__$1);
var state_26142__$1 = (function (){var statearr_26162 = state_26142;
(statearr_26162[(11)] = inst_26120__$1);

return statearr_26162;
})();
if(cljs.core.truth_(inst_26121)){
var statearr_26163_26184 = state_26142__$1;
(statearr_26163_26184[(1)] = (11));

} else {
var statearr_26164_26185 = state_26142__$1;
(statearr_26164_26185[(1)] = (12));

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
});})(c__21118__auto__,index))
;
return ((function (switch__21103__auto__,c__21118__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__21104__auto__ = null;
var reagi$core$zip_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_26168 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26168[(0)] = reagi$core$zip_ch_$_state_machine__21104__auto__);

(statearr_26168[(1)] = (1));

return statearr_26168;
});
var reagi$core$zip_ch_$_state_machine__21104__auto____1 = (function (state_26142){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26169){if((e26169 instanceof Object)){
var ex__21107__auto__ = e26169;
var statearr_26170_26186 = state_26142;
(statearr_26170_26186[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26142;
state_26142 = G__26187;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__21104__auto__ = function(state_26142){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__21104__auto____1.call(this,state_26142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__21104__auto____0;
reagi$core$zip_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__21104__auto____1;
return reagi$core$zip_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__,index))
})();
var state__21120__auto__ = (function (){var statearr_26171 = f__21119__auto__.call(null);
(statearr_26171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__,index))
);

return c__21118__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26190 = arguments.length;
var i__19865__auto___26191 = (0);
while(true){
if((i__19865__auto___26191 < len__19864__auto___26190)){
args__19871__auto__.push((arguments[i__19865__auto___26191]));

var G__26192 = (i__19865__auto___26191 + (1));
i__19865__auto___26191 = G__26192;
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
var G__26189 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26189,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__26189,((function (G__26189,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26189,chs))
);

reagi.core.depend_on.call(null,G__26189,streams);

return G__26189;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq26188){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26188));
});

reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_26348){
var state_val_26349 = (state_26348[(1)]);
if((state_val_26349 === (7))){
var inst_26344 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26350_26387 = state_26348__$1;
(statearr_26350_26387[(2)] = inst_26344);

(statearr_26350_26387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (20))){
var inst_26316 = (state_26348[(7)]);
var inst_26328 = (state_26348[(2)]);
var inst_26329 = cljs.core.next.call(null,inst_26316);
var inst_26301 = inst_26329;
var inst_26302 = null;
var inst_26303 = (0);
var inst_26304 = (0);
var state_26348__$1 = (function (){var statearr_26351 = state_26348;
(statearr_26351[(8)] = inst_26301);

(statearr_26351[(9)] = inst_26328);

(statearr_26351[(10)] = inst_26304);

(statearr_26351[(11)] = inst_26303);

(statearr_26351[(12)] = inst_26302);

return statearr_26351;
})();
var statearr_26352_26388 = state_26348__$1;
(statearr_26352_26388[(2)] = null);

(statearr_26352_26388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (1))){
var state_26348__$1 = state_26348;
var statearr_26353_26389 = state_26348__$1;
(statearr_26353_26389[(2)] = null);

(statearr_26353_26389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (4))){
var inst_26292 = (state_26348[(13)]);
var inst_26292__$1 = (state_26348[(2)]);
var state_26348__$1 = (function (){var statearr_26357 = state_26348;
(statearr_26357[(13)] = inst_26292__$1);

return statearr_26357;
})();
if(cljs.core.truth_(inst_26292__$1)){
var statearr_26358_26390 = state_26348__$1;
(statearr_26358_26390[(1)] = (5));

} else {
var statearr_26359_26391 = state_26348__$1;
(statearr_26359_26391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (15))){
var state_26348__$1 = state_26348;
var statearr_26360_26392 = state_26348__$1;
(statearr_26360_26392[(2)] = null);

(statearr_26360_26392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (13))){
var inst_26301 = (state_26348[(8)]);
var inst_26304 = (state_26348[(10)]);
var inst_26303 = (state_26348[(11)]);
var inst_26302 = (state_26348[(12)]);
var inst_26312 = (state_26348[(2)]);
var inst_26313 = (inst_26304 + (1));
var tmp26354 = inst_26301;
var tmp26355 = inst_26303;
var tmp26356 = inst_26302;
var inst_26301__$1 = tmp26354;
var inst_26302__$1 = tmp26356;
var inst_26303__$1 = tmp26355;
var inst_26304__$1 = inst_26313;
var state_26348__$1 = (function (){var statearr_26361 = state_26348;
(statearr_26361[(8)] = inst_26301__$1);

(statearr_26361[(10)] = inst_26304__$1);

(statearr_26361[(11)] = inst_26303__$1);

(statearr_26361[(14)] = inst_26312);

(statearr_26361[(12)] = inst_26302__$1);

return statearr_26361;
})();
var statearr_26362_26393 = state_26348__$1;
(statearr_26362_26393[(2)] = null);

(statearr_26362_26393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (6))){
var inst_26342 = cljs.core.async.close_BANG_.call(null,out);
var state_26348__$1 = state_26348;
var statearr_26363_26394 = state_26348__$1;
(statearr_26363_26394[(2)] = inst_26342);

(statearr_26363_26394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (17))){
var inst_26316 = (state_26348[(7)]);
var inst_26320 = cljs.core.chunk_first.call(null,inst_26316);
var inst_26321 = cljs.core.chunk_rest.call(null,inst_26316);
var inst_26322 = cljs.core.count.call(null,inst_26320);
var inst_26301 = inst_26321;
var inst_26302 = inst_26320;
var inst_26303 = inst_26322;
var inst_26304 = (0);
var state_26348__$1 = (function (){var statearr_26364 = state_26348;
(statearr_26364[(8)] = inst_26301);

(statearr_26364[(10)] = inst_26304);

(statearr_26364[(11)] = inst_26303);

(statearr_26364[(12)] = inst_26302);

return statearr_26364;
})();
var statearr_26365_26395 = state_26348__$1;
(statearr_26365_26395[(2)] = null);

(statearr_26365_26395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (3))){
var inst_26346 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26348__$1,inst_26346);
} else {
if((state_val_26349 === (12))){
var inst_26337 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26366_26396 = state_26348__$1;
(statearr_26366_26396[(2)] = inst_26337);

(statearr_26366_26396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (2))){
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26348__$1,(4),in$);
} else {
if((state_val_26349 === (19))){
var inst_26332 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26367_26397 = state_26348__$1;
(statearr_26367_26397[(2)] = inst_26332);

(statearr_26367_26397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (11))){
var inst_26301 = (state_26348[(8)]);
var inst_26316 = (state_26348[(7)]);
var inst_26316__$1 = cljs.core.seq.call(null,inst_26301);
var state_26348__$1 = (function (){var statearr_26368 = state_26348;
(statearr_26368[(7)] = inst_26316__$1);

return statearr_26368;
})();
if(inst_26316__$1){
var statearr_26369_26398 = state_26348__$1;
(statearr_26369_26398[(1)] = (14));

} else {
var statearr_26370_26399 = state_26348__$1;
(statearr_26370_26399[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (9))){
var inst_26339 = (state_26348[(2)]);
var state_26348__$1 = (function (){var statearr_26371 = state_26348;
(statearr_26371[(15)] = inst_26339);

return statearr_26371;
})();
var statearr_26372_26400 = state_26348__$1;
(statearr_26372_26400[(2)] = null);

(statearr_26372_26400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (5))){
var inst_26292 = (state_26348[(13)]);
var inst_26294 = reagi.core.unbox.call(null,inst_26292);
var inst_26295 = f.call(null,inst_26294);
var inst_26300 = cljs.core.seq.call(null,inst_26295);
var inst_26301 = inst_26300;
var inst_26302 = null;
var inst_26303 = (0);
var inst_26304 = (0);
var state_26348__$1 = (function (){var statearr_26373 = state_26348;
(statearr_26373[(8)] = inst_26301);

(statearr_26373[(10)] = inst_26304);

(statearr_26373[(11)] = inst_26303);

(statearr_26373[(12)] = inst_26302);

return statearr_26373;
})();
var statearr_26374_26401 = state_26348__$1;
(statearr_26374_26401[(2)] = null);

(statearr_26374_26401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (14))){
var inst_26316 = (state_26348[(7)]);
var inst_26318 = cljs.core.chunked_seq_QMARK_.call(null,inst_26316);
var state_26348__$1 = state_26348;
if(inst_26318){
var statearr_26375_26402 = state_26348__$1;
(statearr_26375_26402[(1)] = (17));

} else {
var statearr_26376_26403 = state_26348__$1;
(statearr_26376_26403[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (16))){
var inst_26335 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26377_26404 = state_26348__$1;
(statearr_26377_26404[(2)] = inst_26335);

(statearr_26377_26404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (10))){
var inst_26304 = (state_26348[(10)]);
var inst_26302 = (state_26348[(12)]);
var inst_26309 = cljs.core._nth.call(null,inst_26302,inst_26304);
var inst_26310 = reagi.core.box.call(null,inst_26309);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26348__$1,(13),out,inst_26310);
} else {
if((state_val_26349 === (18))){
var inst_26316 = (state_26348[(7)]);
var inst_26325 = cljs.core.first.call(null,inst_26316);
var inst_26326 = reagi.core.box.call(null,inst_26325);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26348__$1,(20),out,inst_26326);
} else {
if((state_val_26349 === (8))){
var inst_26304 = (state_26348[(10)]);
var inst_26303 = (state_26348[(11)]);
var inst_26306 = (inst_26304 < inst_26303);
var inst_26307 = inst_26306;
var state_26348__$1 = state_26348;
if(cljs.core.truth_(inst_26307)){
var statearr_26378_26405 = state_26348__$1;
(statearr_26378_26405[(1)] = (10));

} else {
var statearr_26379_26406 = state_26348__$1;
(statearr_26379_26406[(1)] = (11));

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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__21104__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_26383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26383[(0)] = reagi$core$mapcat_ch_$_state_machine__21104__auto__);

(statearr_26383[(1)] = (1));

return statearr_26383;
});
var reagi$core$mapcat_ch_$_state_machine__21104__auto____1 = (function (state_26348){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26384){if((e26384 instanceof Object)){
var ex__21107__auto__ = e26384;
var statearr_26385_26407 = state_26348;
(statearr_26385_26407[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26408 = state_26348;
state_26348 = G__26408;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__21104__auto__ = function(state_26348){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__21104__auto____1.call(this,state_26348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__21104__auto____0;
reagi$core$mapcat_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__21104__auto____1;
return reagi$core$mapcat_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_26386 = f__21119__auto__.call(null);
(statearr_26386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args26409 = [];
var len__19864__auto___26416 = arguments.length;
var i__19865__auto___26417 = (0);
while(true){
if((i__19865__auto___26417 < len__19864__auto___26416)){
args26409.push((arguments[i__19865__auto___26417]));

var G__26418 = (i__19865__auto___26417 + (1));
i__19865__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var G__26414 = args26409.length;
switch (G__26414) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19883__auto__ = (new cljs.core.IndexedSeq(args26409.slice((2)),(0),null));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19883__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26415 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26415,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__26415,((function (G__26415,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26415,ch))
);

reagi.core.depend_on.call(null,G__26415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26415;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq26410){
var G__26411 = cljs.core.first.call(null,seq26410);
var seq26410__$1 = cljs.core.next.call(null,seq26410);
var G__26412 = cljs.core.first.call(null,seq26410__$1);
var seq26410__$2 = cljs.core.next.call(null,seq26410__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__26411,G__26412,seq26410__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___26422 = arguments.length;
var i__19865__auto___26423 = (0);
while(true){
if((i__19865__auto___26423 < len__19864__auto___26422)){
args__19871__auto__.push((arguments[i__19865__auto___26423]));

var G__26424 = (i__19865__auto___26423 + (1));
i__19865__auto___26423 = G__26424;
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

reagi.core.map.cljs$lang$applyTo = (function (seq26420){
var G__26421 = cljs.core.first.call(null,seq26420);
var seq26420__$1 = cljs.core.next.call(null,seq26420);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__26421,seq26420__$1);
});

/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__26425_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__26425_SHARP_))){
var x__19593__auto__ = p1__26425_SHARP_;
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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_26497){
var state_val_26498 = (state_26497[(1)]);
if((state_val_26498 === (7))){
var inst_26493 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26499_26520 = state_26497__$1;
(statearr_26499_26520[(2)] = inst_26493);

(statearr_26499_26520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (1))){
var inst_26473 = init;
var state_26497__$1 = (function (){var statearr_26500 = state_26497;
(statearr_26500[(7)] = inst_26473);

return statearr_26500;
})();
var statearr_26501_26521 = state_26497__$1;
(statearr_26501_26521[(2)] = null);

(statearr_26501_26521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (4))){
var inst_26476 = (state_26497[(8)]);
var inst_26476__$1 = (state_26497[(2)]);
var state_26497__$1 = (function (){var statearr_26502 = state_26497;
(statearr_26502[(8)] = inst_26476__$1);

return statearr_26502;
})();
if(cljs.core.truth_(inst_26476__$1)){
var statearr_26503_26522 = state_26497__$1;
(statearr_26503_26522[(1)] = (5));

} else {
var statearr_26504_26523 = state_26497__$1;
(statearr_26504_26523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (6))){
var inst_26491 = cljs.core.async.close_BANG_.call(null,out);
var state_26497__$1 = state_26497;
var statearr_26505_26524 = state_26497__$1;
(statearr_26505_26524[(2)] = inst_26491);

(statearr_26505_26524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (3))){
var inst_26495 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26497__$1,inst_26495);
} else {
if((state_val_26498 === (2))){
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26497__$1,(4),in$);
} else {
if((state_val_26498 === (11))){
var inst_26485 = (state_26497[(9)]);
var inst_26488 = (state_26497[(2)]);
var inst_26473 = inst_26485;
var state_26497__$1 = (function (){var statearr_26506 = state_26497;
(statearr_26506[(7)] = inst_26473);

(statearr_26506[(10)] = inst_26488);

return statearr_26506;
})();
var statearr_26507_26525 = state_26497__$1;
(statearr_26507_26525[(2)] = null);

(statearr_26507_26525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (9))){
var inst_26473 = (state_26497[(7)]);
var inst_26476 = (state_26497[(8)]);
var inst_26482 = reagi.core.unbox.call(null,inst_26476);
var inst_26483 = f.call(null,inst_26473,inst_26482);
var state_26497__$1 = state_26497;
var statearr_26508_26526 = state_26497__$1;
(statearr_26508_26526[(2)] = inst_26483);

(statearr_26508_26526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (5))){
var inst_26473 = (state_26497[(7)]);
var inst_26478 = reagi.core.no_value_QMARK_.call(null,inst_26473);
var state_26497__$1 = state_26497;
if(cljs.core.truth_(inst_26478)){
var statearr_26509_26527 = state_26497__$1;
(statearr_26509_26527[(1)] = (8));

} else {
var statearr_26510_26528 = state_26497__$1;
(statearr_26510_26528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (10))){
var inst_26485 = (state_26497[(9)]);
var inst_26485__$1 = (state_26497[(2)]);
var inst_26486 = reagi.core.box.call(null,inst_26485__$1);
var state_26497__$1 = (function (){var statearr_26511 = state_26497;
(statearr_26511[(9)] = inst_26485__$1);

return statearr_26511;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26497__$1,(11),out,inst_26486);
} else {
if((state_val_26498 === (8))){
var inst_26476 = (state_26497[(8)]);
var inst_26480 = reagi.core.unbox.call(null,inst_26476);
var state_26497__$1 = state_26497;
var statearr_26512_26529 = state_26497__$1;
(statearr_26512_26529[(2)] = inst_26480);

(statearr_26512_26529[(1)] = (10));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__21104__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_26516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26516[(0)] = reagi$core$reduce_ch_$_state_machine__21104__auto__);

(statearr_26516[(1)] = (1));

return statearr_26516;
});
var reagi$core$reduce_ch_$_state_machine__21104__auto____1 = (function (state_26497){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26517){if((e26517 instanceof Object)){
var ex__21107__auto__ = e26517;
var statearr_26518_26530 = state_26497;
(statearr_26518_26530[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26531 = state_26497;
state_26497 = G__26531;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__21104__auto__ = function(state_26497){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__21104__auto____1.call(this,state_26497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__21104__auto____0;
reagi$core$reduce_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__21104__auto____1;
return reagi$core$reduce_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_26519 = f__21119__auto__.call(null);
(statearr_26519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args26532 = [];
var len__19864__auto___26536 = arguments.length;
var i__19865__auto___26537 = (0);
while(true){
if((i__19865__auto___26537 < len__19864__auto___26536)){
args26532.push((arguments[i__19865__auto___26537]));

var G__26538 = (i__19865__auto___26537 + (1));
i__19865__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var G__26534 = args26532.length;
switch (G__26534) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26532.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26535 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__26535,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__26535,((function (G__26535,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26535,ch))
);

reagi.core.depend_on.call(null,G__26535,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26535;
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
return reagi.core.reduce.call(null,(function (p1__26541_SHARP_,p2__26540_SHARP_){
return p2__26540_SHARP_.call(null,p1__26541_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args26542 = [];
var len__19864__auto___26545 = arguments.length;
var i__19865__auto___26546 = (0);
while(true){
if((i__19865__auto___26546 < len__19864__auto___26545)){
args26542.push((arguments[i__19865__auto___26546]));

var G__26547 = (i__19865__auto___26546 + (1));
i__19865__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var G__26544 = args26542.length;
switch (G__26544) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26542.length)].join('')));

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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_26630){
var state_val_26631 = (state_26630[(1)]);
if((state_val_26631 === (7))){
var inst_26626 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26632_26657 = state_26630__$1;
(statearr_26632_26657[(2)] = inst_26626);

(statearr_26632_26657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (1))){
var inst_26603 = reagi.core.no_value;
var state_26630__$1 = (function (){var statearr_26633 = state_26630;
(statearr_26633[(7)] = inst_26603);

return statearr_26633;
})();
var statearr_26634_26658 = state_26630__$1;
(statearr_26634_26658[(2)] = null);

(statearr_26634_26658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (4))){
var inst_26606 = (state_26630[(8)]);
var inst_26606__$1 = (state_26630[(2)]);
var state_26630__$1 = (function (){var statearr_26635 = state_26630;
(statearr_26635[(8)] = inst_26606__$1);

return statearr_26635;
})();
if(cljs.core.truth_(inst_26606__$1)){
var statearr_26636_26659 = state_26630__$1;
(statearr_26636_26659[(1)] = (5));

} else {
var statearr_26637_26660 = state_26630__$1;
(statearr_26637_26660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (13))){
var inst_26608 = (state_26630[(9)]);
var inst_26621 = (state_26630[(2)]);
var inst_26603 = inst_26608;
var state_26630__$1 = (function (){var statearr_26638 = state_26630;
(statearr_26638[(7)] = inst_26603);

(statearr_26638[(10)] = inst_26621);

return statearr_26638;
})();
var statearr_26639_26661 = state_26630__$1;
(statearr_26639_26661[(2)] = null);

(statearr_26639_26661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (6))){
var inst_26624 = cljs.core.async.close_BANG_.call(null,out);
var state_26630__$1 = state_26630;
var statearr_26640_26662 = state_26630__$1;
(statearr_26640_26662[(2)] = inst_26624);

(statearr_26640_26662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (3))){
var inst_26628 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26630__$1,inst_26628);
} else {
if((state_val_26631 === (12))){
var state_26630__$1 = state_26630;
var statearr_26641_26663 = state_26630__$1;
(statearr_26641_26663[(2)] = null);

(statearr_26641_26663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (2))){
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26630__$1,(4),in$);
} else {
if((state_val_26631 === (11))){
var inst_26608 = (state_26630[(9)]);
var inst_26616 = reagi.core.box.call(null,inst_26608);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26630__$1,(14),out,inst_26616);
} else {
if((state_val_26631 === (9))){
var inst_26603 = (state_26630[(7)]);
var inst_26608 = (state_26630[(9)]);
var inst_26612 = cljs.core.not_EQ_.call(null,inst_26608,inst_26603);
var state_26630__$1 = state_26630;
var statearr_26642_26664 = state_26630__$1;
(statearr_26642_26664[(2)] = inst_26612);

(statearr_26642_26664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (5))){
var inst_26606 = (state_26630[(8)]);
var inst_26603 = (state_26630[(7)]);
var inst_26609 = (state_26630[(11)]);
var inst_26608 = reagi.core.unbox.call(null,inst_26606);
var inst_26609__$1 = reagi.core.no_value_QMARK_.call(null,inst_26603);
var state_26630__$1 = (function (){var statearr_26643 = state_26630;
(statearr_26643[(11)] = inst_26609__$1);

(statearr_26643[(9)] = inst_26608);

return statearr_26643;
})();
if(cljs.core.truth_(inst_26609__$1)){
var statearr_26644_26665 = state_26630__$1;
(statearr_26644_26665[(1)] = (8));

} else {
var statearr_26645_26666 = state_26630__$1;
(statearr_26645_26666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (14))){
var inst_26618 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26646_26667 = state_26630__$1;
(statearr_26646_26667[(2)] = inst_26618);

(statearr_26646_26667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (10))){
var inst_26614 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
if(cljs.core.truth_(inst_26614)){
var statearr_26647_26668 = state_26630__$1;
(statearr_26647_26668[(1)] = (11));

} else {
var statearr_26648_26669 = state_26630__$1;
(statearr_26648_26669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (8))){
var inst_26609 = (state_26630[(11)]);
var state_26630__$1 = state_26630;
var statearr_26649_26670 = state_26630__$1;
(statearr_26649_26670[(2)] = inst_26609);

(statearr_26649_26670[(1)] = (10));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__21104__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_26653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26653[(0)] = reagi$core$uniq_ch_$_state_machine__21104__auto__);

(statearr_26653[(1)] = (1));

return statearr_26653;
});
var reagi$core$uniq_ch_$_state_machine__21104__auto____1 = (function (state_26630){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26654){if((e26654 instanceof Object)){
var ex__21107__auto__ = e26654;
var statearr_26655_26671 = state_26630;
(statearr_26655_26671[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26672 = state_26630;
state_26630 = G__26672;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__21104__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__21104__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__21104__auto____0;
reagi$core$uniq_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__21104__auto____1;
return reagi$core$uniq_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_26656 = f__21119__auto__.call(null);
(statearr_26656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26674 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26674,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__26674,((function (G__26674,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26674,ch))
);

reagi.core.depend_on.call(null,G__26674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26674;
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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_26742){
var state_val_26743 = (state_26742[(1)]);
if((state_val_26743 === (7))){
var inst_26738 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
var statearr_26744_26765 = state_26742__$1;
(statearr_26744_26765[(2)] = inst_26738);

(statearr_26744_26765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (1))){
var inst_26720 = (0);
var state_26742__$1 = (function (){var statearr_26745 = state_26742;
(statearr_26745[(7)] = inst_26720);

return statearr_26745;
})();
var statearr_26746_26766 = state_26742__$1;
(statearr_26746_26766[(2)] = null);

(statearr_26746_26766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (4))){
var inst_26723 = (state_26742[(8)]);
var inst_26723__$1 = (state_26742[(2)]);
var state_26742__$1 = (function (){var statearr_26747 = state_26742;
(statearr_26747[(8)] = inst_26723__$1);

return statearr_26747;
})();
if(cljs.core.truth_(inst_26723__$1)){
var statearr_26748_26767 = state_26742__$1;
(statearr_26748_26767[(1)] = (5));

} else {
var statearr_26749_26768 = state_26742__$1;
(statearr_26749_26768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (6))){
var inst_26736 = cljs.core.async.close_BANG_.call(null,out);
var state_26742__$1 = state_26742;
var statearr_26750_26769 = state_26742__$1;
(statearr_26750_26769[(2)] = inst_26736);

(statearr_26750_26769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (3))){
var inst_26740 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26742__$1,inst_26740);
} else {
if((state_val_26743 === (2))){
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26742__$1,(4),in$);
} else {
if((state_val_26743 === (11))){
var inst_26730 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
var statearr_26751_26770 = state_26742__$1;
(statearr_26751_26770[(2)] = inst_26730);

(statearr_26751_26770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (9))){
var state_26742__$1 = state_26742;
var statearr_26752_26771 = state_26742__$1;
(statearr_26752_26771[(2)] = null);

(statearr_26752_26771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (5))){
var inst_26725 = (state_26742[(9)]);
var inst_26720 = (state_26742[(7)]);
var inst_26725__$1 = reagi.core.time_ms.call(null);
var inst_26726 = (inst_26725__$1 - inst_26720);
var inst_26727 = (inst_26726 >= timeout_ms);
var state_26742__$1 = (function (){var statearr_26753 = state_26742;
(statearr_26753[(9)] = inst_26725__$1);

return statearr_26753;
})();
if(cljs.core.truth_(inst_26727)){
var statearr_26754_26772 = state_26742__$1;
(statearr_26754_26772[(1)] = (8));

} else {
var statearr_26755_26773 = state_26742__$1;
(statearr_26755_26773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (10))){
var inst_26725 = (state_26742[(9)]);
var inst_26733 = (state_26742[(2)]);
var inst_26720 = inst_26725;
var state_26742__$1 = (function (){var statearr_26756 = state_26742;
(statearr_26756[(10)] = inst_26733);

(statearr_26756[(7)] = inst_26720);

return statearr_26756;
})();
var statearr_26757_26774 = state_26742__$1;
(statearr_26757_26774[(2)] = null);

(statearr_26757_26774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (8))){
var inst_26723 = (state_26742[(8)]);
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26742__$1,(11),out,inst_26723);
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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__21104__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26761[(0)] = reagi$core$throttle_ch_$_state_machine__21104__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var reagi$core$throttle_ch_$_state_machine__21104__auto____1 = (function (state_26742){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__21107__auto__ = e26762;
var statearr_26763_26775 = state_26742;
(statearr_26763_26775[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26776 = state_26742;
state_26742 = G__26776;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__21104__auto__ = function(state_26742){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__21104__auto____1.call(this,state_26742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__21104__auto____0;
reagi$core$throttle_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__21104__auto____1;
return reagi$core$throttle_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_26764 = f__21119__auto__.call(null);
(statearr_26764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26778 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26778,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__26778,((function (G__26778,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26778,ch))
);

reagi.core.depend_on.call(null,G__26778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26778;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_26892){
var state_val_26893 = (state_26892[(1)]);
if((state_val_26893 === (7))){
var inst_26887 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
var statearr_26894_26923 = state_26892__$1;
(statearr_26894_26923[(2)] = inst_26887);

(statearr_26894_26923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (1))){
var state_26892__$1 = state_26892;
var statearr_26895_26924 = state_26892__$1;
(statearr_26895_26924[(2)] = null);

(statearr_26895_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (4))){
var inst_26860 = (state_26892[(2)]);
var inst_26861 = cljs.core.nth.call(null,inst_26860,(0),null);
var inst_26862 = cljs.core.nth.call(null,inst_26860,(1),null);
var inst_26863 = cljs.core.not_EQ_.call(null,inst_26862,stop);
var state_26892__$1 = (function (){var statearr_26896 = state_26892;
(statearr_26896[(7)] = inst_26861);

return statearr_26896;
})();
if(inst_26863){
var statearr_26897_26925 = state_26892__$1;
(statearr_26897_26925[(1)] = (5));

} else {
var statearr_26898_26926 = state_26892__$1;
(statearr_26898_26926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (15))){
var state_26892__$1 = state_26892;
var statearr_26899_26927 = state_26892__$1;
(statearr_26899_26927[(2)] = null);

(statearr_26899_26927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (13))){
var inst_26874 = (state_26892[(8)]);
var state_26892__$1 = state_26892;
var statearr_26900_26928 = state_26892__$1;
(statearr_26900_26928[(2)] = inst_26874);

(statearr_26900_26928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (6))){
var state_26892__$1 = state_26892;
var statearr_26901_26929 = state_26892__$1;
(statearr_26901_26929[(2)] = null);

(statearr_26901_26929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (17))){
var inst_26884 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
var statearr_26902_26930 = state_26892__$1;
(statearr_26902_26930[(2)] = inst_26884);

(statearr_26902_26930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (3))){
var inst_26889 = (state_26892[(2)]);
var inst_26890 = cljs.core.async.close_BANG_.call(null,out);
var state_26892__$1 = (function (){var statearr_26903 = state_26892;
(statearr_26903[(9)] = inst_26889);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26892__$1,inst_26890);
} else {
if((state_val_26893 === (12))){
var inst_26876 = reagi.core.complete_QMARK_.call(null,ref);
var state_26892__$1 = state_26892;
var statearr_26904_26931 = state_26892__$1;
(statearr_26904_26931[(2)] = inst_26876);

(statearr_26904_26931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (2))){
var inst_26855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26856 = cljs.core.async.timeout.call(null,interval);
var inst_26857 = [stop,inst_26856];
var inst_26858 = (new cljs.core.PersistentVector(null,2,(5),inst_26855,inst_26857,null));
var state_26892__$1 = state_26892;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26892__$1,(4),inst_26858);
} else {
if((state_val_26893 === (11))){
var inst_26871 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
var statearr_26905_26932 = state_26892__$1;
(statearr_26905_26932[(2)] = inst_26871);

(statearr_26905_26932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (9))){
var inst_26865 = (state_26892[(10)]);
var inst_26869 = reagi.core.box.call(null,inst_26865);
var state_26892__$1 = state_26892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26892__$1,(11),out,inst_26869);
} else {
if((state_val_26893 === (5))){
var inst_26865 = (state_26892[(10)]);
var inst_26865__$1 = cljs.core.deref.call(null,ref);
var inst_26866 = (void 0 === inst_26865__$1);
var state_26892__$1 = (function (){var statearr_26906 = state_26892;
(statearr_26906[(10)] = inst_26865__$1);

return statearr_26906;
})();
if(cljs.core.truth_(inst_26866)){
var statearr_26907_26933 = state_26892__$1;
(statearr_26907_26933[(1)] = (8));

} else {
var statearr_26908_26934 = state_26892__$1;
(statearr_26908_26934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (14))){
var inst_26879 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
if(cljs.core.truth_(inst_26879)){
var statearr_26909_26935 = state_26892__$1;
(statearr_26909_26935[(1)] = (15));

} else {
var statearr_26910_26936 = state_26892__$1;
(statearr_26910_26936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (16))){
var state_26892__$1 = state_26892;
var statearr_26911_26937 = state_26892__$1;
(statearr_26911_26937[(2)] = null);

(statearr_26911_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (10))){
var inst_26874 = (state_26892[(8)]);
var inst_26873 = (state_26892[(2)]);
var inst_26874__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_26892__$1 = (function (){var statearr_26912 = state_26892;
(statearr_26912[(11)] = inst_26873);

(statearr_26912[(8)] = inst_26874__$1);

return statearr_26912;
})();
if(cljs.core.truth_(inst_26874__$1)){
var statearr_26913_26938 = state_26892__$1;
(statearr_26913_26938[(1)] = (12));

} else {
var statearr_26914_26939 = state_26892__$1;
(statearr_26914_26939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (8))){
var state_26892__$1 = state_26892;
var statearr_26915_26940 = state_26892__$1;
(statearr_26915_26940[(2)] = null);

(statearr_26915_26940[(1)] = (10));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__21104__auto__ = null;
var reagi$core$run_sampler_$_state_machine__21104__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = reagi$core$run_sampler_$_state_machine__21104__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var reagi$core$run_sampler_$_state_machine__21104__auto____1 = (function (state_26892){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__21107__auto__ = e26920;
var statearr_26921_26941 = state_26892;
(statearr_26921_26941[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26892;
state_26892 = G__26942;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__21104__auto__ = function(state_26892){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__21104__auto____1.call(this,state_26892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__21104__auto____0;
reagi$core$run_sampler_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__21104__auto____1;
return reagi$core$run_sampler_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_26922 = f__21119__auto__.call(null);
(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__26944 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26944,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__26944,((function (G__26944,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__26944,stop))
);

return G__26944;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__21118__auto___26977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___26977,stream){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___26977,stream){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (1))){
var inst_26961 = cljs.core.async.timeout.call(null,time_ms);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(2),inst_26961);
} else {
if((state_val_26968 === (2))){
var inst_26963 = (state_26967[(2)]);
var inst_26964 = reagi.core.port.call(null,stream);
var inst_26965 = cljs.core.async.close_BANG_.call(null,inst_26964);
var state_26967__$1 = (function (){var statearr_26969 = state_26967;
(statearr_26969[(7)] = inst_26963);

return statearr_26969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
return null;
}
}
});})(c__21118__auto___26977,stream))
;
return ((function (switch__21103__auto__,c__21118__auto___26977,stream){
return (function() {
var reagi$core$wait_$_state_machine__21104__auto__ = null;
var reagi$core$wait_$_state_machine__21104__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null,null];
(statearr_26973[(0)] = reagi$core$wait_$_state_machine__21104__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var reagi$core$wait_$_state_machine__21104__auto____1 = (function (state_26967){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__21107__auto__ = e26974;
var statearr_26975_26978 = state_26967;
(statearr_26975_26978[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26979 = state_26967;
state_26967 = G__26979;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__21104__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__21104__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__21104__auto____0;
reagi$core$wait_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__21104__auto____1;
return reagi$core$wait_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___26977,stream))
})();
var state__21120__auto__ = (function (){var statearr_26976 = f__21119__auto__.call(null);
(statearr_26976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___26977);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___26977,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_27166){
var state_val_27167 = (state_27166[(1)]);
if((state_val_27167 === (7))){
var inst_27111 = (state_27166[(7)]);
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27166__$1,(9),inst_27111);
} else {
if((state_val_27167 === (20))){
var inst_27138 = (state_27166[(8)]);
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27166__$1,(22),inst_27138);
} else {
if((state_val_27167 === (1))){
var inst_27102 = cljs.core.seq.call(null,chs);
var inst_27103 = inst_27102;
var inst_27104 = null;
var inst_27105 = (0);
var inst_27106 = (0);
var state_27166__$1 = (function (){var statearr_27168 = state_27166;
(statearr_27168[(9)] = inst_27105);

(statearr_27168[(10)] = inst_27104);

(statearr_27168[(11)] = inst_27103);

(statearr_27168[(12)] = inst_27106);

return statearr_27168;
})();
var statearr_27169_27216 = state_27166__$1;
(statearr_27169_27216[(2)] = null);

(statearr_27169_27216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (24))){
var state_27166__$1 = state_27166;
var statearr_27170_27217 = state_27166__$1;
(statearr_27170_27217[(2)] = null);

(statearr_27170_27217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (4))){
var inst_27104 = (state_27166[(10)]);
var inst_27106 = (state_27166[(12)]);
var inst_27111 = cljs.core._nth.call(null,inst_27104,inst_27106);
var state_27166__$1 = (function (){var statearr_27171 = state_27166;
(statearr_27171[(7)] = inst_27111);

return statearr_27171;
})();
var statearr_27172_27218 = state_27166__$1;
(statearr_27172_27218[(2)] = null);

(statearr_27172_27218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (15))){
var state_27166__$1 = state_27166;
var statearr_27173_27219 = state_27166__$1;
(statearr_27173_27219[(2)] = null);

(statearr_27173_27219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (21))){
var inst_27129 = (state_27166[(13)]);
var inst_27152 = (state_27166[(2)]);
var inst_27153 = cljs.core.next.call(null,inst_27129);
var inst_27103 = inst_27153;
var inst_27104 = null;
var inst_27105 = (0);
var inst_27106 = (0);
var state_27166__$1 = (function (){var statearr_27174 = state_27166;
(statearr_27174[(9)] = inst_27105);

(statearr_27174[(10)] = inst_27104);

(statearr_27174[(11)] = inst_27103);

(statearr_27174[(12)] = inst_27106);

(statearr_27174[(14)] = inst_27152);

return statearr_27174;
})();
var statearr_27175_27220 = state_27166__$1;
(statearr_27175_27220[(2)] = null);

(statearr_27175_27220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (13))){
var inst_27119 = (state_27166[(2)]);
var state_27166__$1 = (function (){var statearr_27176 = state_27166;
(statearr_27176[(15)] = inst_27119);

return statearr_27176;
})();
var statearr_27177_27221 = state_27166__$1;
(statearr_27177_27221[(2)] = null);

(statearr_27177_27221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (22))){
var inst_27141 = (state_27166[(16)]);
var inst_27141__$1 = (state_27166[(2)]);
var state_27166__$1 = (function (){var statearr_27178 = state_27166;
(statearr_27178[(16)] = inst_27141__$1);

return statearr_27178;
})();
if(cljs.core.truth_(inst_27141__$1)){
var statearr_27179_27222 = state_27166__$1;
(statearr_27179_27222[(1)] = (23));

} else {
var statearr_27180_27223 = state_27166__$1;
(statearr_27180_27223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (6))){
var inst_27161 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27181_27224 = state_27166__$1;
(statearr_27181_27224[(2)] = inst_27161);

(statearr_27181_27224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (25))){
var inst_27150 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27182_27225 = state_27166__$1;
(statearr_27182_27225[(2)] = inst_27150);

(statearr_27182_27225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (17))){
var inst_27129 = (state_27166[(13)]);
var inst_27133 = cljs.core.chunk_first.call(null,inst_27129);
var inst_27134 = cljs.core.chunk_rest.call(null,inst_27129);
var inst_27135 = cljs.core.count.call(null,inst_27133);
var inst_27103 = inst_27134;
var inst_27104 = inst_27133;
var inst_27105 = inst_27135;
var inst_27106 = (0);
var state_27166__$1 = (function (){var statearr_27183 = state_27166;
(statearr_27183[(9)] = inst_27105);

(statearr_27183[(10)] = inst_27104);

(statearr_27183[(11)] = inst_27103);

(statearr_27183[(12)] = inst_27106);

return statearr_27183;
})();
var statearr_27184_27226 = state_27166__$1;
(statearr_27184_27226[(2)] = null);

(statearr_27184_27226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (3))){
var inst_27163 = (state_27166[(2)]);
var inst_27164 = cljs.core.async.close_BANG_.call(null,out);
var state_27166__$1 = (function (){var statearr_27185 = state_27166;
(statearr_27185[(17)] = inst_27163);

return statearr_27185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27166__$1,inst_27164);
} else {
if((state_val_27167 === (12))){
var inst_27123 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27186_27227 = state_27166__$1;
(statearr_27186_27227[(2)] = inst_27123);

(statearr_27186_27227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (2))){
var inst_27105 = (state_27166[(9)]);
var inst_27106 = (state_27166[(12)]);
var inst_27108 = (inst_27106 < inst_27105);
var inst_27109 = inst_27108;
var state_27166__$1 = state_27166;
if(cljs.core.truth_(inst_27109)){
var statearr_27187_27228 = state_27166__$1;
(statearr_27187_27228[(1)] = (4));

} else {
var statearr_27188_27229 = state_27166__$1;
(statearr_27188_27229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (23))){
var inst_27141 = (state_27166[(16)]);
var inst_27143 = reagi.core.unbox.call(null,inst_27141);
var inst_27144 = reagi.core.box.call(null,inst_27143);
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27166__$1,(26),out,inst_27144);
} else {
if((state_val_27167 === (19))){
var inst_27156 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27189_27230 = state_27166__$1;
(statearr_27189_27230[(2)] = inst_27156);

(statearr_27189_27230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (11))){
var state_27166__$1 = state_27166;
var statearr_27190_27231 = state_27166__$1;
(statearr_27190_27231[(2)] = null);

(statearr_27190_27231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (9))){
var inst_27114 = (state_27166[(18)]);
var inst_27114__$1 = (state_27166[(2)]);
var state_27166__$1 = (function (){var statearr_27191 = state_27166;
(statearr_27191[(18)] = inst_27114__$1);

return statearr_27191;
})();
if(cljs.core.truth_(inst_27114__$1)){
var statearr_27192_27232 = state_27166__$1;
(statearr_27192_27232[(1)] = (10));

} else {
var statearr_27193_27233 = state_27166__$1;
(statearr_27193_27233[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (5))){
var inst_27129 = (state_27166[(13)]);
var inst_27103 = (state_27166[(11)]);
var inst_27129__$1 = cljs.core.seq.call(null,inst_27103);
var state_27166__$1 = (function (){var statearr_27194 = state_27166;
(statearr_27194[(13)] = inst_27129__$1);

return statearr_27194;
})();
if(inst_27129__$1){
var statearr_27195_27234 = state_27166__$1;
(statearr_27195_27234[(1)] = (14));

} else {
var statearr_27196_27235 = state_27166__$1;
(statearr_27196_27235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (14))){
var inst_27129 = (state_27166[(13)]);
var inst_27131 = cljs.core.chunked_seq_QMARK_.call(null,inst_27129);
var state_27166__$1 = state_27166;
if(inst_27131){
var statearr_27197_27236 = state_27166__$1;
(statearr_27197_27236[(1)] = (17));

} else {
var statearr_27198_27237 = state_27166__$1;
(statearr_27198_27237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (26))){
var inst_27146 = (state_27166[(2)]);
var state_27166__$1 = (function (){var statearr_27199 = state_27166;
(statearr_27199[(19)] = inst_27146);

return statearr_27199;
})();
var statearr_27200_27238 = state_27166__$1;
(statearr_27200_27238[(2)] = null);

(statearr_27200_27238[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (16))){
var inst_27159 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27201_27239 = state_27166__$1;
(statearr_27201_27239[(2)] = inst_27159);

(statearr_27201_27239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (10))){
var inst_27114 = (state_27166[(18)]);
var inst_27116 = reagi.core.unbox.call(null,inst_27114);
var inst_27117 = reagi.core.box.call(null,inst_27116);
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27166__$1,(13),out,inst_27117);
} else {
if((state_val_27167 === (18))){
var inst_27129 = (state_27166[(13)]);
var inst_27138 = cljs.core.first.call(null,inst_27129);
var state_27166__$1 = (function (){var statearr_27205 = state_27166;
(statearr_27205[(8)] = inst_27138);

return statearr_27205;
})();
var statearr_27206_27240 = state_27166__$1;
(statearr_27206_27240[(2)] = null);

(statearr_27206_27240[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27167 === (8))){
var inst_27105 = (state_27166[(9)]);
var inst_27104 = (state_27166[(10)]);
var inst_27103 = (state_27166[(11)]);
var inst_27106 = (state_27166[(12)]);
var inst_27125 = (state_27166[(2)]);
var inst_27126 = (inst_27106 + (1));
var tmp27202 = inst_27105;
var tmp27203 = inst_27104;
var tmp27204 = inst_27103;
var inst_27103__$1 = tmp27204;
var inst_27104__$1 = tmp27203;
var inst_27105__$1 = tmp27202;
var inst_27106__$1 = inst_27126;
var state_27166__$1 = (function (){var statearr_27207 = state_27166;
(statearr_27207[(9)] = inst_27105__$1);

(statearr_27207[(10)] = inst_27104__$1);

(statearr_27207[(20)] = inst_27125);

(statearr_27207[(11)] = inst_27103__$1);

(statearr_27207[(12)] = inst_27106__$1);

return statearr_27207;
})();
var statearr_27208_27241 = state_27166__$1;
(statearr_27208_27241[(2)] = null);

(statearr_27208_27241[(1)] = (2));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__21104__auto__ = null;
var reagi$core$join_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_27212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27212[(0)] = reagi$core$join_ch_$_state_machine__21104__auto__);

(statearr_27212[(1)] = (1));

return statearr_27212;
});
var reagi$core$join_ch_$_state_machine__21104__auto____1 = (function (state_27166){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_27166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e27213){if((e27213 instanceof Object)){
var ex__21107__auto__ = e27213;
var statearr_27214_27242 = state_27166;
(statearr_27214_27242[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27166;
state_27166 = G__27243;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__21104__auto__ = function(state_27166){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__21104__auto____1.call(this,state_27166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__21104__auto____0;
reagi$core$join_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__21104__auto____1;
return reagi$core$join_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_27215 = f__21119__auto__.call(null);
(statearr_27215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_27215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__19871__auto__ = [];
var len__19864__auto___27246 = arguments.length;
var i__19865__auto___27247 = (0);
while(true){
if((i__19865__auto___27247 < len__19864__auto___27246)){
args__19871__auto__.push((arguments[i__19865__auto___27247]));

var G__27248 = (i__19865__auto___27247 + (1));
i__19865__auto___27247 = G__27248;
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
var G__27245 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27245,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__27245,((function (G__27245,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__27245,chs))
);

reagi.core.depend_on.call(null,G__27245,streams);

return G__27245;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq27244){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27244));
});

reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_27389){
var state_val_27390 = (state_27389[(1)]);
if((state_val_27390 === (7))){
var inst_27353 = (state_27389[(7)]);
var inst_27351 = (state_27389[(2)]);
var inst_27352 = cljs.core.nth.call(null,inst_27351,(0),null);
var inst_27353__$1 = cljs.core.nth.call(null,inst_27351,(1),null);
var inst_27354 = (inst_27353__$1 === valve);
var state_27389__$1 = (function (){var statearr_27391 = state_27389;
(statearr_27391[(8)] = inst_27352);

(statearr_27391[(7)] = inst_27353__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27354)){
var statearr_27392_27423 = state_27389__$1;
(statearr_27392_27423[(1)] = (8));

} else {
var statearr_27393_27424 = state_27389__$1;
(statearr_27393_27424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (1))){
var inst_27336 = [in$];
var inst_27337 = [null];
var inst_27338 = cljs.core.PersistentHashMap.fromArrays(inst_27336,inst_27337);
var inst_27339 = inst_27338;
var state_27389__$1 = (function (){var statearr_27394 = state_27389;
(statearr_27394[(9)] = inst_27339);

return statearr_27394;
})();
var statearr_27395_27425 = state_27389__$1;
(statearr_27395_27425[(2)] = null);

(statearr_27395_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (4))){
var inst_27339 = (state_27389[(9)]);
var inst_27347 = cljs.core.keys.call(null,inst_27339);
var inst_27348 = cljs.core.vec.call(null,inst_27347);
var inst_27349 = cljs.core.conj.call(null,inst_27348,valve);
var state_27389__$1 = state_27389;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27389__$1,(7),inst_27349);
} else {
if((state_val_27390 === (15))){
var inst_27352 = (state_27389[(8)]);
var inst_27368 = reagi.core.unbox.call(null,inst_27352);
var inst_27369 = reagi.core.box.call(null,inst_27368);
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27389__$1,(17),out,inst_27369);
} else {
if((state_val_27390 === (13))){
var inst_27379 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27397_27426 = state_27389__$1;
(statearr_27397_27426[(2)] = inst_27379);

(statearr_27397_27426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (6))){
var inst_27384 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27398_27427 = state_27389__$1;
(statearr_27398_27427[(2)] = inst_27384);

(statearr_27398_27427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (17))){
var inst_27339 = (state_27389[(9)]);
var inst_27371 = (state_27389[(2)]);
var tmp27396 = inst_27339;
var inst_27339__$1 = tmp27396;
var state_27389__$1 = (function (){var statearr_27399 = state_27389;
(statearr_27399[(10)] = inst_27371);

(statearr_27399[(9)] = inst_27339__$1);

return statearr_27399;
})();
var statearr_27400_27428 = state_27389__$1;
(statearr_27400_27428[(2)] = null);

(statearr_27400_27428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (3))){
var inst_27386 = (state_27389[(2)]);
var inst_27387 = cljs.core.async.close_BANG_.call(null,out);
var state_27389__$1 = (function (){var statearr_27401 = state_27389;
(statearr_27401[(11)] = inst_27386);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27389__$1,inst_27387);
} else {
if((state_val_27390 === (12))){
var inst_27353 = (state_27389[(7)]);
var inst_27339 = (state_27389[(9)]);
var inst_27376 = cljs.core.dissoc.call(null,inst_27339,inst_27353);
var inst_27339__$1 = inst_27376;
var state_27389__$1 = (function (){var statearr_27402 = state_27389;
(statearr_27402[(9)] = inst_27339__$1);

return statearr_27402;
})();
var statearr_27403_27429 = state_27389__$1;
(statearr_27403_27429[(2)] = null);

(statearr_27403_27429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (2))){
var inst_27339 = (state_27389[(9)]);
var inst_27341 = cljs.core.empty_QMARK_.call(null,inst_27339);
var inst_27342 = !(inst_27341);
var state_27389__$1 = state_27389;
if(inst_27342){
var statearr_27404_27430 = state_27389__$1;
(statearr_27404_27430[(1)] = (4));

} else {
var statearr_27405_27431 = state_27389__$1;
(statearr_27405_27431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (11))){
var inst_27353 = (state_27389[(7)]);
var inst_27360 = (inst_27353 === in$);
var state_27389__$1 = state_27389;
if(cljs.core.truth_(inst_27360)){
var statearr_27406_27432 = state_27389__$1;
(statearr_27406_27432[(1)] = (14));

} else {
var statearr_27407_27433 = state_27389__$1;
(statearr_27407_27433[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (9))){
var inst_27352 = (state_27389[(8)]);
var state_27389__$1 = state_27389;
if(cljs.core.truth_(inst_27352)){
var statearr_27408_27434 = state_27389__$1;
(statearr_27408_27434[(1)] = (11));

} else {
var statearr_27409_27435 = state_27389__$1;
(statearr_27409_27435[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (5))){
var state_27389__$1 = state_27389;
var statearr_27410_27436 = state_27389__$1;
(statearr_27410_27436[(2)] = null);

(statearr_27410_27436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (14))){
var inst_27352 = (state_27389[(8)]);
var inst_27339 = (state_27389[(9)]);
var inst_27362 = reagi.core.unbox.call(null,inst_27352);
var inst_27363 = cljs.core.async.chan.call(null);
var inst_27364 = reagi.core.listen.call(null,inst_27362,inst_27363);
var inst_27365 = cljs.core.assoc.call(null,inst_27339,inst_27364,inst_27362);
var inst_27339__$1 = inst_27365;
var state_27389__$1 = (function (){var statearr_27411 = state_27389;
(statearr_27411[(9)] = inst_27339__$1);

return statearr_27411;
})();
var statearr_27412_27437 = state_27389__$1;
(statearr_27412_27437[(2)] = null);

(statearr_27412_27437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (16))){
var inst_27374 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27413_27438 = state_27389__$1;
(statearr_27413_27438[(2)] = inst_27374);

(statearr_27413_27438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (10))){
var inst_27381 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27414_27439 = state_27389__$1;
(statearr_27414_27439[(2)] = inst_27381);

(statearr_27414_27439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (8))){
var inst_27339 = (state_27389[(9)]);
var inst_27356 = cljs.core.keys.call(null,inst_27339);
var inst_27357 = reagi.core.close_all_BANG_.call(null,inst_27356);
var state_27389__$1 = state_27389;
var statearr_27415_27440 = state_27389__$1;
(statearr_27415_27440[(2)] = inst_27357);

(statearr_27415_27440[(1)] = (10));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__21104__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__21104__auto____0 = (function (){
var statearr_27419 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27419[(0)] = reagi$core$flatten_ch_$_state_machine__21104__auto__);

(statearr_27419[(1)] = (1));

return statearr_27419;
});
var reagi$core$flatten_ch_$_state_machine__21104__auto____1 = (function (state_27389){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_27389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e27420){if((e27420 instanceof Object)){
var ex__21107__auto__ = e27420;
var statearr_27421_27441 = state_27389;
(statearr_27421_27441[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27442 = state_27389;
state_27389 = G__27442;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__21104__auto__ = function(state_27389){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__21104__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__21104__auto____1.call(this,state_27389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__21104__auto____0;
reagi$core$flatten_ch_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__21104__auto____1;
return reagi$core$flatten_ch_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_27422 = f__21119__auto__.call(null);
(statearr_27422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_27422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__27444 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27444,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__27444,((function (G__27444,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__27444,ch,valve))
);

reagi.core.depend_on.call(null,G__27444,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__27444;
});

//# sourceMappingURL=core.js.map?rel=1485901323245