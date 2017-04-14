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
var x__19405__auto__ = (((signal == null))?null:signal);
var m__19406__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,signal);
} else {
var m__19406__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,signal);
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
var x__19405__auto__ = (((x == null))?null:x);
var m__19406__auto__ = (reagi.core.unbox[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,x);
} else {
var m__19406__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,x);
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

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"reagi.core/Completed");
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
if(typeof reagi.core.t_reagi$core25341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25341 = (function (x,meta25342){
this.x = x;
this.meta25342 = meta25342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25343,meta25342__$1){
var self__ = this;
var _25343__$1 = this;
return (new reagi.core.t_reagi$core25341(self__.x,meta25342__$1));
});

reagi.core.t_reagi$core25341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25343){
var self__ = this;
var _25343__$1 = this;
return self__.meta25342;
});

reagi.core.t_reagi$core25341.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25341.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core25341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta25342","meta25342",2095768921,null)], null);
});

reagi.core.t_reagi$core25341.cljs$lang$type = true;

reagi.core.t_reagi$core25341.cljs$lang$ctorStr = "reagi.core/t_reagi$core25341";

reagi.core.t_reagi$core25341.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"reagi.core/t_reagi$core25341");
});

reagi.core.__GT_t_reagi$core25341 = (function reagi$core$box_$___GT_t_reagi$core25341(x__$1,meta25342){
return (new reagi.core.t_reagi$core25341(x__$1,meta25342));
});

}

return (new reagi.core.t_reagi$core25341(x,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25344_SHARP_){
if((p1__25344_SHARP_ instanceof reagi.core.Completed)){
return p1__25344_SHARP_;
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

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"reagi.core/Behavior");
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
var x__19405__auto__ = (((ob == null))?null:ob);
var m__19406__auto__ = (reagi.core.port[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,ob);
} else {
var m__19406__auto____$1 = (reagi.core.port["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,ob);
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
var x__19405__auto__ = (((ob == null))?null:ob);
var m__19406__auto__ = (reagi.core.listen[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,ob,ch);
} else {
var m__19406__auto____$1 = (reagi.core.listen["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,ob,ch);
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
if(typeof reagi.core.t_reagi$core25596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core25596 = (function (ch,state,meta25597){
this.ch = ch;
this.state = state;
this.meta25597 = meta25597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core25596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_25598,meta25597__$1){
var self__ = this;
var _25598__$1 = this;
return (new reagi.core.t_reagi$core25596(self__.ch,self__.state,meta25597__$1));
});})(state))
;

reagi.core.t_reagi$core25596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_25598){
var self__ = this;
var _25598__$1 = this;
return self__.meta25597;
});})(state))
;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__25602){
var vec__25603 = p__25602;
var o_QMARK_ = cljs.core.nth.call(null,vec__25603,(0),null);
var cs = cljs.core.nth.call(null,vec__25603,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__25599 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__25599,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25599,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25606){
var vec__25607 = p__25606;
var open_QMARK_ = cljs.core.nth.call(null,vec__25607,(0),null);
var cs = cljs.core.nth.call(null,vec__25607,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core25596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__25610){
var vec__25611 = p__25610;
var open_QMARK_ = cljs.core.nth.call(null,vec__25611,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__25611,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core25596.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta25597","meta25597",976837496,null)], null);
});})(state))
;

reagi.core.t_reagi$core25596.cljs$lang$type = true;

reagi.core.t_reagi$core25596.cljs$lang$ctorStr = "reagi.core/t_reagi$core25596";

reagi.core.t_reagi$core25596.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"reagi.core/t_reagi$core25596");
});})(state))
;

reagi.core.__GT_t_reagi$core25596 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core25596(ch__$1,state__$1,meta25597){
return (new reagi.core.t_reagi$core25596(ch__$1,state__$1,meta25597));
});})(state))
;

}

return (new reagi.core.t_reagi$core25596(ch,state,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21107__auto___25847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___25847,state,m,dchan,dctr,done){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___25847,state,m,dchan,dctr,done){
return (function (state_25756){
var state_val_25757 = (state_25756[(1)]);
if((state_val_25757 === (7))){
var inst_25752 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25758_25848 = state_25756__$1;
(statearr_25758_25848[(2)] = inst_25752);

(statearr_25758_25848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (20))){
var inst_25654 = (state_25756[(7)]);
var inst_25666 = cljs.core.first.call(null,inst_25654);
var inst_25667 = cljs.core.nth.call(null,inst_25666,(0),null);
var inst_25668 = cljs.core.nth.call(null,inst_25666,(1),null);
var state_25756__$1 = (function (){var statearr_25759 = state_25756;
(statearr_25759[(8)] = inst_25667);

return statearr_25759;
})();
if(cljs.core.truth_(inst_25668)){
var statearr_25760_25849 = state_25756__$1;
(statearr_25760_25849[(1)] = (22));

} else {
var statearr_25761_25850 = state_25756__$1;
(statearr_25761_25850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (27))){
var inst_25616 = (state_25756[(9)]);
var inst_25704 = (state_25756[(10)]);
var inst_25697 = (state_25756[(11)]);
var inst_25699 = (state_25756[(12)]);
var inst_25704__$1 = cljs.core._nth.call(null,inst_25697,inst_25699);
var inst_25705 = cljs.core.async.put_BANG_.call(null,inst_25704__$1,inst_25616,done);
var state_25756__$1 = (function (){var statearr_25762 = state_25756;
(statearr_25762[(10)] = inst_25704__$1);

return statearr_25762;
})();
if(cljs.core.truth_(inst_25705)){
var statearr_25763_25851 = state_25756__$1;
(statearr_25763_25851[(1)] = (30));

} else {
var statearr_25764_25852 = state_25756__$1;
(statearr_25764_25852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (1))){
var state_25756__$1 = state_25756;
var statearr_25765_25853 = state_25756__$1;
(statearr_25765_25853[(2)] = null);

(statearr_25765_25853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (24))){
var inst_25654 = (state_25756[(7)]);
var inst_25673 = (state_25756[(2)]);
var inst_25674 = cljs.core.next.call(null,inst_25654);
var inst_25632 = inst_25674;
var inst_25633 = null;
var inst_25634 = (0);
var inst_25635 = (0);
var state_25756__$1 = (function (){var statearr_25766 = state_25756;
(statearr_25766[(13)] = inst_25634);

(statearr_25766[(14)] = inst_25673);

(statearr_25766[(15)] = inst_25633);

(statearr_25766[(16)] = inst_25632);

(statearr_25766[(17)] = inst_25635);

return statearr_25766;
})();
var statearr_25767_25854 = state_25756__$1;
(statearr_25767_25854[(2)] = null);

(statearr_25767_25854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (39))){
var state_25756__$1 = state_25756;
var statearr_25771_25855 = state_25756__$1;
(statearr_25771_25855[(2)] = null);

(statearr_25771_25855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (4))){
var inst_25616 = (state_25756[(9)]);
var inst_25616__$1 = (state_25756[(2)]);
var inst_25617 = (inst_25616__$1 == null);
var state_25756__$1 = (function (){var statearr_25772 = state_25756;
(statearr_25772[(9)] = inst_25616__$1);

return statearr_25772;
})();
if(cljs.core.truth_(inst_25617)){
var statearr_25773_25856 = state_25756__$1;
(statearr_25773_25856[(1)] = (5));

} else {
var statearr_25774_25857 = state_25756__$1;
(statearr_25774_25857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (15))){
var inst_25634 = (state_25756[(13)]);
var inst_25633 = (state_25756[(15)]);
var inst_25632 = (state_25756[(16)]);
var inst_25635 = (state_25756[(17)]);
var inst_25650 = (state_25756[(2)]);
var inst_25651 = (inst_25635 + (1));
var tmp25768 = inst_25634;
var tmp25769 = inst_25633;
var tmp25770 = inst_25632;
var inst_25632__$1 = tmp25770;
var inst_25633__$1 = tmp25769;
var inst_25634__$1 = tmp25768;
var inst_25635__$1 = inst_25651;
var state_25756__$1 = (function (){var statearr_25775 = state_25756;
(statearr_25775[(18)] = inst_25650);

(statearr_25775[(13)] = inst_25634__$1);

(statearr_25775[(15)] = inst_25633__$1);

(statearr_25775[(16)] = inst_25632__$1);

(statearr_25775[(17)] = inst_25635__$1);

return statearr_25775;
})();
var statearr_25776_25858 = state_25756__$1;
(statearr_25776_25858[(2)] = null);

(statearr_25776_25858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (21))){
var inst_25677 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25780_25859 = state_25756__$1;
(statearr_25780_25859[(2)] = inst_25677);

(statearr_25780_25859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (31))){
var inst_25704 = (state_25756[(10)]);
var inst_25708 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25709 = cljs.core.async.untap_STAR_.call(null,m,inst_25704);
var state_25756__$1 = (function (){var statearr_25781 = state_25756;
(statearr_25781[(19)] = inst_25708);

return statearr_25781;
})();
var statearr_25782_25860 = state_25756__$1;
(statearr_25782_25860[(2)] = inst_25709);

(statearr_25782_25860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (32))){
var inst_25697 = (state_25756[(11)]);
var inst_25698 = (state_25756[(20)]);
var inst_25699 = (state_25756[(12)]);
var inst_25696 = (state_25756[(21)]);
var inst_25711 = (state_25756[(2)]);
var inst_25712 = (inst_25699 + (1));
var tmp25777 = inst_25697;
var tmp25778 = inst_25698;
var tmp25779 = inst_25696;
var inst_25696__$1 = tmp25779;
var inst_25697__$1 = tmp25777;
var inst_25698__$1 = tmp25778;
var inst_25699__$1 = inst_25712;
var state_25756__$1 = (function (){var statearr_25783 = state_25756;
(statearr_25783[(22)] = inst_25711);

(statearr_25783[(11)] = inst_25697__$1);

(statearr_25783[(20)] = inst_25698__$1);

(statearr_25783[(12)] = inst_25699__$1);

(statearr_25783[(21)] = inst_25696__$1);

return statearr_25783;
})();
var statearr_25784_25861 = state_25756__$1;
(statearr_25784_25861[(2)] = null);

(statearr_25784_25861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (40))){
var inst_25724 = (state_25756[(23)]);
var inst_25728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_25729 = cljs.core.async.untap_STAR_.call(null,m,inst_25724);
var state_25756__$1 = (function (){var statearr_25785 = state_25756;
(statearr_25785[(24)] = inst_25728);

return statearr_25785;
})();
var statearr_25786_25862 = state_25756__$1;
(statearr_25786_25862[(2)] = inst_25729);

(statearr_25786_25862[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (33))){
var inst_25715 = (state_25756[(25)]);
var inst_25717 = cljs.core.chunked_seq_QMARK_.call(null,inst_25715);
var state_25756__$1 = state_25756;
if(inst_25717){
var statearr_25787_25863 = state_25756__$1;
(statearr_25787_25863[(1)] = (36));

} else {
var statearr_25788_25864 = state_25756__$1;
(statearr_25788_25864[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (13))){
var inst_25644 = (state_25756[(26)]);
var inst_25647 = cljs.core.async.close_BANG_.call(null,inst_25644);
var state_25756__$1 = state_25756;
var statearr_25789_25865 = state_25756__$1;
(statearr_25789_25865[(2)] = inst_25647);

(statearr_25789_25865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (22))){
var inst_25667 = (state_25756[(8)]);
var inst_25670 = cljs.core.async.close_BANG_.call(null,inst_25667);
var state_25756__$1 = state_25756;
var statearr_25790_25866 = state_25756__$1;
(statearr_25790_25866[(2)] = inst_25670);

(statearr_25790_25866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (36))){
var inst_25715 = (state_25756[(25)]);
var inst_25719 = cljs.core.chunk_first.call(null,inst_25715);
var inst_25720 = cljs.core.chunk_rest.call(null,inst_25715);
var inst_25721 = cljs.core.count.call(null,inst_25719);
var inst_25696 = inst_25720;
var inst_25697 = inst_25719;
var inst_25698 = inst_25721;
var inst_25699 = (0);
var state_25756__$1 = (function (){var statearr_25791 = state_25756;
(statearr_25791[(11)] = inst_25697);

(statearr_25791[(20)] = inst_25698);

(statearr_25791[(12)] = inst_25699);

(statearr_25791[(21)] = inst_25696);

return statearr_25791;
})();
var statearr_25792_25867 = state_25756__$1;
(statearr_25792_25867[(2)] = null);

(statearr_25792_25867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (41))){
var inst_25715 = (state_25756[(25)]);
var inst_25731 = (state_25756[(2)]);
var inst_25732 = cljs.core.next.call(null,inst_25715);
var inst_25696 = inst_25732;
var inst_25697 = null;
var inst_25698 = (0);
var inst_25699 = (0);
var state_25756__$1 = (function (){var statearr_25793 = state_25756;
(statearr_25793[(27)] = inst_25731);

(statearr_25793[(11)] = inst_25697);

(statearr_25793[(20)] = inst_25698);

(statearr_25793[(12)] = inst_25699);

(statearr_25793[(21)] = inst_25696);

return statearr_25793;
})();
var statearr_25794_25868 = state_25756__$1;
(statearr_25794_25868[(2)] = null);

(statearr_25794_25868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (43))){
var state_25756__$1 = state_25756;
var statearr_25795_25869 = state_25756__$1;
(statearr_25795_25869[(2)] = null);

(statearr_25795_25869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (29))){
var inst_25740 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25796_25870 = state_25756__$1;
(statearr_25796_25870[(2)] = inst_25740);

(statearr_25796_25870[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (44))){
var inst_25749 = (state_25756[(2)]);
var state_25756__$1 = (function (){var statearr_25797 = state_25756;
(statearr_25797[(28)] = inst_25749);

return statearr_25797;
})();
var statearr_25798_25871 = state_25756__$1;
(statearr_25798_25871[(2)] = null);

(statearr_25798_25871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (6))){
var inst_25688 = (state_25756[(29)]);
var inst_25686 = cljs.core.deref.call(null,state);
var inst_25687 = cljs.core.second.call(null,inst_25686);
var inst_25688__$1 = cljs.core.keys.call(null,inst_25687);
var inst_25689 = cljs.core.count.call(null,inst_25688__$1);
var inst_25690 = cljs.core.reset_BANG_.call(null,dctr,inst_25689);
var inst_25695 = cljs.core.seq.call(null,inst_25688__$1);
var inst_25696 = inst_25695;
var inst_25697 = null;
var inst_25698 = (0);
var inst_25699 = (0);
var state_25756__$1 = (function (){var statearr_25799 = state_25756;
(statearr_25799[(11)] = inst_25697);

(statearr_25799[(30)] = inst_25690);

(statearr_25799[(20)] = inst_25698);

(statearr_25799[(12)] = inst_25699);

(statearr_25799[(29)] = inst_25688__$1);

(statearr_25799[(21)] = inst_25696);

return statearr_25799;
})();
var statearr_25800_25872 = state_25756__$1;
(statearr_25800_25872[(2)] = null);

(statearr_25800_25872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (28))){
var inst_25715 = (state_25756[(25)]);
var inst_25696 = (state_25756[(21)]);
var inst_25715__$1 = cljs.core.seq.call(null,inst_25696);
var state_25756__$1 = (function (){var statearr_25801 = state_25756;
(statearr_25801[(25)] = inst_25715__$1);

return statearr_25801;
})();
if(inst_25715__$1){
var statearr_25802_25873 = state_25756__$1;
(statearr_25802_25873[(1)] = (33));

} else {
var statearr_25803_25874 = state_25756__$1;
(statearr_25803_25874[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (25))){
var inst_25698 = (state_25756[(20)]);
var inst_25699 = (state_25756[(12)]);
var inst_25701 = (inst_25699 < inst_25698);
var inst_25702 = inst_25701;
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25702)){
var statearr_25804_25875 = state_25756__$1;
(statearr_25804_25875[(1)] = (27));

} else {
var statearr_25805_25876 = state_25756__$1;
(statearr_25805_25876[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (34))){
var state_25756__$1 = state_25756;
var statearr_25806_25877 = state_25756__$1;
(statearr_25806_25877[(2)] = null);

(statearr_25806_25877[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (17))){
var state_25756__$1 = state_25756;
var statearr_25807_25878 = state_25756__$1;
(statearr_25807_25878[(2)] = null);

(statearr_25807_25878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (3))){
var inst_25754 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25756__$1,inst_25754);
} else {
if((state_val_25757 === (12))){
var inst_25682 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25808_25879 = state_25756__$1;
(statearr_25808_25879[(2)] = inst_25682);

(statearr_25808_25879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (2))){
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25756__$1,(4),ch);
} else {
if((state_val_25757 === (23))){
var state_25756__$1 = state_25756;
var statearr_25809_25880 = state_25756__$1;
(statearr_25809_25880[(2)] = null);

(statearr_25809_25880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (35))){
var inst_25738 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25810_25881 = state_25756__$1;
(statearr_25810_25881[(2)] = inst_25738);

(statearr_25810_25881[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (19))){
var inst_25654 = (state_25756[(7)]);
var inst_25658 = cljs.core.chunk_first.call(null,inst_25654);
var inst_25659 = cljs.core.chunk_rest.call(null,inst_25654);
var inst_25660 = cljs.core.count.call(null,inst_25658);
var inst_25632 = inst_25659;
var inst_25633 = inst_25658;
var inst_25634 = inst_25660;
var inst_25635 = (0);
var state_25756__$1 = (function (){var statearr_25811 = state_25756;
(statearr_25811[(13)] = inst_25634);

(statearr_25811[(15)] = inst_25633);

(statearr_25811[(16)] = inst_25632);

(statearr_25811[(17)] = inst_25635);

return statearr_25811;
})();
var statearr_25812_25882 = state_25756__$1;
(statearr_25812_25882[(2)] = null);

(statearr_25812_25882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (11))){
var inst_25632 = (state_25756[(16)]);
var inst_25654 = (state_25756[(7)]);
var inst_25654__$1 = cljs.core.seq.call(null,inst_25632);
var state_25756__$1 = (function (){var statearr_25813 = state_25756;
(statearr_25813[(7)] = inst_25654__$1);

return statearr_25813;
})();
if(inst_25654__$1){
var statearr_25814_25883 = state_25756__$1;
(statearr_25814_25883[(1)] = (16));

} else {
var statearr_25815_25884 = state_25756__$1;
(statearr_25815_25884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (9))){
var inst_25684 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25816_25885 = state_25756__$1;
(statearr_25816_25885[(2)] = inst_25684);

(statearr_25816_25885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (5))){
var inst_25616 = (state_25756[(9)]);
var inst_25623 = (function (){var val = inst_25616;
return ((function (val,inst_25616,state_val_25757,c__21107__auto___25847,state,m,dchan,dctr,done){
return (function (p__25622){
var vec__25817 = p__25622;
var _ = cljs.core.nth.call(null,vec__25817,(0),null);
var cs = cljs.core.nth.call(null,vec__25817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_25616,state_val_25757,c__21107__auto___25847,state,m,dchan,dctr,done))
})();
var inst_25624 = cljs.core.swap_BANG_.call(null,state,inst_25623);
var inst_25625 = cljs.core.nth.call(null,inst_25624,(0),null);
var inst_25626 = cljs.core.nth.call(null,inst_25624,(1),null);
var inst_25631 = cljs.core.seq.call(null,inst_25626);
var inst_25632 = inst_25631;
var inst_25633 = null;
var inst_25634 = (0);
var inst_25635 = (0);
var state_25756__$1 = (function (){var statearr_25820 = state_25756;
(statearr_25820[(13)] = inst_25634);

(statearr_25820[(15)] = inst_25633);

(statearr_25820[(16)] = inst_25632);

(statearr_25820[(17)] = inst_25635);

(statearr_25820[(31)] = inst_25625);

return statearr_25820;
})();
var statearr_25821_25886 = state_25756__$1;
(statearr_25821_25886[(2)] = null);

(statearr_25821_25886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (14))){
var state_25756__$1 = state_25756;
var statearr_25822_25887 = state_25756__$1;
(statearr_25822_25887[(2)] = null);

(statearr_25822_25887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (45))){
var inst_25746 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25823_25888 = state_25756__$1;
(statearr_25823_25888[(2)] = inst_25746);

(statearr_25823_25888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (26))){
var inst_25688 = (state_25756[(29)]);
var inst_25742 = (state_25756[(2)]);
var inst_25743 = cljs.core.seq.call(null,inst_25688);
var state_25756__$1 = (function (){var statearr_25824 = state_25756;
(statearr_25824[(32)] = inst_25742);

return statearr_25824;
})();
if(inst_25743){
var statearr_25825_25889 = state_25756__$1;
(statearr_25825_25889[(1)] = (42));

} else {
var statearr_25826_25890 = state_25756__$1;
(statearr_25826_25890[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (16))){
var inst_25654 = (state_25756[(7)]);
var inst_25656 = cljs.core.chunked_seq_QMARK_.call(null,inst_25654);
var state_25756__$1 = state_25756;
if(inst_25656){
var statearr_25827_25891 = state_25756__$1;
(statearr_25827_25891[(1)] = (19));

} else {
var statearr_25828_25892 = state_25756__$1;
(statearr_25828_25892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (38))){
var inst_25735 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25829_25893 = state_25756__$1;
(statearr_25829_25893[(2)] = inst_25735);

(statearr_25829_25893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (30))){
var state_25756__$1 = state_25756;
var statearr_25830_25894 = state_25756__$1;
(statearr_25830_25894[(2)] = null);

(statearr_25830_25894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (10))){
var inst_25633 = (state_25756[(15)]);
var inst_25635 = (state_25756[(17)]);
var inst_25643 = cljs.core._nth.call(null,inst_25633,inst_25635);
var inst_25644 = cljs.core.nth.call(null,inst_25643,(0),null);
var inst_25645 = cljs.core.nth.call(null,inst_25643,(1),null);
var state_25756__$1 = (function (){var statearr_25831 = state_25756;
(statearr_25831[(26)] = inst_25644);

return statearr_25831;
})();
if(cljs.core.truth_(inst_25645)){
var statearr_25832_25895 = state_25756__$1;
(statearr_25832_25895[(1)] = (13));

} else {
var statearr_25833_25896 = state_25756__$1;
(statearr_25833_25896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (18))){
var inst_25680 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25834_25897 = state_25756__$1;
(statearr_25834_25897[(2)] = inst_25680);

(statearr_25834_25897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (42))){
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25756__$1,(45),dchan);
} else {
if((state_val_25757 === (37))){
var inst_25616 = (state_25756[(9)]);
var inst_25724 = (state_25756[(23)]);
var inst_25715 = (state_25756[(25)]);
var inst_25724__$1 = cljs.core.first.call(null,inst_25715);
var inst_25725 = cljs.core.async.put_BANG_.call(null,inst_25724__$1,inst_25616,done);
var state_25756__$1 = (function (){var statearr_25835 = state_25756;
(statearr_25835[(23)] = inst_25724__$1);

return statearr_25835;
})();
if(cljs.core.truth_(inst_25725)){
var statearr_25836_25898 = state_25756__$1;
(statearr_25836_25898[(1)] = (39));

} else {
var statearr_25837_25899 = state_25756__$1;
(statearr_25837_25899[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25757 === (8))){
var inst_25634 = (state_25756[(13)]);
var inst_25635 = (state_25756[(17)]);
var inst_25637 = (inst_25635 < inst_25634);
var inst_25638 = inst_25637;
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25638)){
var statearr_25838_25900 = state_25756__$1;
(statearr_25838_25900[(1)] = (10));

} else {
var statearr_25839_25901 = state_25756__$1;
(statearr_25839_25901[(1)] = (11));

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
});})(c__21107__auto___25847,state,m,dchan,dctr,done))
;
return ((function (switch__21092__auto__,c__21107__auto___25847,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__21093__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_25843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25843[(0)] = reagi$core$mult_STAR__$_state_machine__21093__auto__);

(statearr_25843[(1)] = (1));

return statearr_25843;
});
var reagi$core$mult_STAR__$_state_machine__21093__auto____1 = (function (state_25756){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_25756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e25844){if((e25844 instanceof Object)){
var ex__21096__auto__ = e25844;
var statearr_25845_25902 = state_25756;
(statearr_25845_25902[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25903 = state_25756;
state_25756 = G__25903;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__21093__auto__ = function(state_25756){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__21093__auto____1.call(this,state_25756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__21093__auto____0;
reagi$core$mult_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__21093__auto____1;
return reagi$core$mult_STAR__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___25847,state,m,dchan,dctr,done))
})();
var state__21109__auto__ = (function (){var statearr_25846 = f__21108__auto__.call(null);
(statearr_25846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___25847);

return statearr_25846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___25847,state,m,dchan,dctr,done))
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
var x__19405__auto__ = (((x == null))?null:x);
var m__19406__auto__ = (reagi.core.dispose[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,x);
} else {
var m__19406__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,x);
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
var x__19405__auto__ = (((x == null))?null:x);
var m__19406__auto__ = (reagi.core.on_dispose[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,x,f);
} else {
var m__19406__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,x,f);
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
var c__21107__auto___25959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___25959,stream,self____$1){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___25959,stream,self____$1){
return (function (state_25909){
var state_val_25910 = (state_25909[(1)]);
if((state_val_25910 === (1))){
var inst_25905 = reagi.core.box.call(null,msg);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25909__$1,(2),self__.ch,inst_25905);
} else {
if((state_val_25910 === (2))){
var inst_25907 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25909__$1,inst_25907);
} else {
return null;
}
}
});})(c__21107__auto___25959,stream,self____$1))
;
return ((function (switch__21092__auto__,c__21107__auto___25959,stream,self____$1){
return (function() {
var reagi$core$state_machine__21093__auto__ = null;
var reagi$core$state_machine__21093__auto____0 = (function (){
var statearr_25914 = [null,null,null,null,null,null,null];
(statearr_25914[(0)] = reagi$core$state_machine__21093__auto__);

(statearr_25914[(1)] = (1));

return statearr_25914;
});
var reagi$core$state_machine__21093__auto____1 = (function (state_25909){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_25909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e25915){if((e25915 instanceof Object)){
var ex__21096__auto__ = e25915;
var statearr_25916_25960 = state_25909;
(statearr_25916_25960[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25961 = state_25909;
state_25909 = G__25961;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$state_machine__21093__auto__ = function(state_25909){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$state_machine__21093__auto____1.call(this,state_25909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21093__auto____0;
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21093__auto____1;
return reagi$core$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___25959,stream,self____$1))
})();
var state__21109__auto__ = (function (){var statearr_25917 = f__21108__auto__.call(null);
(statearr_25917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___25959);

return statearr_25917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___25959,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args25904){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25904)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__21107__auto___25962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___25962,stream){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___25962,stream){
return (function (state_25922){
var state_val_25923 = (state_25922[(1)]);
if((state_val_25923 === (1))){
var inst_25918 = reagi.core.box.call(null,msg);
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25922__$1,(2),self__.ch,inst_25918);
} else {
if((state_val_25923 === (2))){
var inst_25920 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25922__$1,inst_25920);
} else {
return null;
}
}
});})(c__21107__auto___25962,stream))
;
return ((function (switch__21092__auto__,c__21107__auto___25962,stream){
return (function() {
var reagi$core$state_machine__21093__auto__ = null;
var reagi$core$state_machine__21093__auto____0 = (function (){
var statearr_25927 = [null,null,null,null,null,null,null];
(statearr_25927[(0)] = reagi$core$state_machine__21093__auto__);

(statearr_25927[(1)] = (1));

return statearr_25927;
});
var reagi$core$state_machine__21093__auto____1 = (function (state_25922){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_25922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e25928){if((e25928 instanceof Object)){
var ex__21096__auto__ = e25928;
var statearr_25929_25963 = state_25922;
(statearr_25929_25963[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25964 = state_25922;
state_25922 = G__25964;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$state_machine__21093__auto__ = function(state_25922){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$state_machine__21093__auto____1.call(this,state_25922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21093__auto____0;
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21093__auto____1;
return reagi$core$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___25962,stream))
})();
var state__21109__auto__ = (function (){var statearr_25930 = f__21108__auto__.call(null);
(statearr_25930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___25962);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___25962,stream))
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
var c__21107__auto___25965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___25965,___$1){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___25965,___$1){
return (function (state_25940){
var state_val_25941 = (state_25940[(1)]);
if((state_val_25941 === (1))){
var inst_25931 = (state_25940[(7)]);
var inst_25931__$1 = cljs.core.deref.call(null,self__.head);
var state_25940__$1 = (function (){var statearr_25942 = state_25940;
(statearr_25942[(7)] = inst_25931__$1);

return statearr_25942;
})();
if(cljs.core.truth_(inst_25931__$1)){
var statearr_25943_25966 = state_25940__$1;
(statearr_25943_25966[(1)] = (2));

} else {
var statearr_25944_25967 = state_25940__$1;
(statearr_25944_25967[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (2))){
var inst_25931 = (state_25940[(7)]);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25940__$1,(5),channel,inst_25931);
} else {
if((state_val_25941 === (3))){
var state_25940__$1 = state_25940;
var statearr_25945_25968 = state_25940__$1;
(statearr_25945_25968[(2)] = null);

(statearr_25945_25968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (4))){
var inst_25937 = (state_25940[(2)]);
var inst_25938 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_25940__$1 = (function (){var statearr_25946 = state_25940;
(statearr_25946[(8)] = inst_25937);

return statearr_25946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25940__$1,inst_25938);
} else {
if((state_val_25941 === (5))){
var inst_25934 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25947_25969 = state_25940__$1;
(statearr_25947_25969[(2)] = inst_25934);

(statearr_25947_25969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21107__auto___25965,___$1))
;
return ((function (switch__21092__auto__,c__21107__auto___25965,___$1){
return (function() {
var reagi$core$state_machine__21093__auto__ = null;
var reagi$core$state_machine__21093__auto____0 = (function (){
var statearr_25951 = [null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = reagi$core$state_machine__21093__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var reagi$core$state_machine__21093__auto____1 = (function (state_25940){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_25940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object)){
var ex__21096__auto__ = e25952;
var statearr_25953_25970 = state_25940;
(statearr_25953_25970[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25971 = state_25940;
state_25940 = G__25971;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$state_machine__21093__auto__ = function(state_25940){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$state_machine__21093__auto____1.call(this,state_25940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21093__auto____0;
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21093__auto____1;
return reagi$core$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___25965,___$1))
})();
var state__21109__auto__ = (function (){var statearr_25954 = f__21108__auto__.call(null);
(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___25965);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___25965,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__18742__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__25955_25972 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__25956_25973 = null;
var count__25957_25974 = (0);
var i__25958_25975 = (0);
while(true){
if((i__25958_25975 < count__25957_25974)){
var d_25976 = cljs.core._nth.call(null,chunk__25956_25973,i__25958_25975);
d_25976.call(null);

var G__25977 = seq__25955_25972;
var G__25978 = chunk__25956_25973;
var G__25979 = count__25957_25974;
var G__25980 = (i__25958_25975 + (1));
seq__25955_25972 = G__25977;
chunk__25956_25973 = G__25978;
count__25957_25974 = G__25979;
i__25958_25975 = G__25980;
continue;
} else {
var temp__4657__auto___25981 = cljs.core.seq.call(null,seq__25955_25972);
if(temp__4657__auto___25981){
var seq__25955_25982__$1 = temp__4657__auto___25981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25955_25982__$1)){
var c__19556__auto___25983 = cljs.core.chunk_first.call(null,seq__25955_25982__$1);
var G__25984 = cljs.core.chunk_rest.call(null,seq__25955_25982__$1);
var G__25985 = c__19556__auto___25983;
var G__25986 = cljs.core.count.call(null,c__19556__auto___25983);
var G__25987 = (0);
seq__25955_25972 = G__25984;
chunk__25956_25973 = G__25985;
count__25957_25974 = G__25986;
i__25958_25975 = G__25987;
continue;
} else {
var d_25988 = cljs.core.first.call(null,seq__25955_25982__$1);
d_25988.call(null);

var G__25989 = cljs.core.next.call(null,seq__25955_25982__$1);
var G__25990 = null;
var G__25991 = (0);
var G__25992 = (0);
seq__25955_25972 = G__25989;
chunk__25956_25973 = G__25990;
count__25957_25974 = G__25991;
i__25958_25975 = G__25992;
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

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"reagi.core/Events");
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
var args25993 = [];
var len__19850__auto___26043 = arguments.length;
var i__19851__auto___26044 = (0);
while(true){
if((i__19851__auto___26044 < len__19850__auto___26043)){
args25993.push((arguments[i__19851__auto___26044]));

var G__26045 = (i__19851__auto___26044 + (1));
i__19851__auto___26044 = G__26045;
continue;
} else {
}
break;
}

var G__25995 = args25993.length;
switch (G__25995) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25993.length)].join('')));

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
var c__21107__auto___26047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___26047,in$,closed,head,out,mult){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___26047,in$,closed,head,out,mult){
return (function (state_26019){
var state_val_26020 = (state_26019[(1)]);
if((state_val_26020 === (7))){
var inst_26005 = (state_26019[(7)]);
var inst_26005__$1 = (state_26019[(2)]);
var state_26019__$1 = (function (){var statearr_26021 = state_26019;
(statearr_26021[(7)] = inst_26005__$1);

return statearr_26021;
})();
if(cljs.core.truth_(inst_26005__$1)){
var statearr_26022_26048 = state_26019__$1;
(statearr_26022_26048[(1)] = (8));

} else {
var statearr_26023_26049 = state_26019__$1;
(statearr_26023_26049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (1))){
var inst_25996 = init;
var state_26019__$1 = (function (){var statearr_26024 = state_26019;
(statearr_26024[(8)] = inst_25996);

return statearr_26024;
})();
var statearr_26025_26050 = state_26019__$1;
(statearr_26025_26050[(2)] = null);

(statearr_26025_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (4))){
var inst_26000 = cljs.core.async.close_BANG_.call(null,in$);
var state_26019__$1 = state_26019;
var statearr_26026_26051 = state_26019__$1;
(statearr_26026_26051[(2)] = inst_26000);

(statearr_26026_26051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (6))){
var inst_26003 = (state_26019[(2)]);
var state_26019__$1 = (function (){var statearr_26027 = state_26019;
(statearr_26027[(9)] = inst_26003);

return statearr_26027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26019__$1,(7),in$);
} else {
if((state_val_26020 === (3))){
var inst_26015 = (state_26019[(2)]);
var inst_26016 = cljs.core.async.close_BANG_.call(null,out);
var inst_26017 = cljs.core.reset_BANG_.call(null,closed,true);
var state_26019__$1 = (function (){var statearr_26028 = state_26019;
(statearr_26028[(10)] = inst_26015);

(statearr_26028[(11)] = inst_26016);

return statearr_26028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26019__$1,inst_26017);
} else {
if((state_val_26020 === (2))){
var inst_25996 = (state_26019[(8)]);
var inst_25998 = (inst_25996 instanceof reagi.core.Completed);
var state_26019__$1 = state_26019;
if(cljs.core.truth_(inst_25998)){
var statearr_26029_26052 = state_26019__$1;
(statearr_26029_26052[(1)] = (4));

} else {
var statearr_26030_26053 = state_26019__$1;
(statearr_26030_26053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (11))){
var inst_26005 = (state_26019[(7)]);
var inst_26008 = (state_26019[(2)]);
var inst_26009 = cljs.core.reset_BANG_.call(null,head,inst_26005);
var inst_25996 = inst_26005;
var state_26019__$1 = (function (){var statearr_26031 = state_26019;
(statearr_26031[(8)] = inst_25996);

(statearr_26031[(12)] = inst_26009);

(statearr_26031[(13)] = inst_26008);

return statearr_26031;
})();
var statearr_26032_26054 = state_26019__$1;
(statearr_26032_26054[(2)] = null);

(statearr_26032_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (9))){
var state_26019__$1 = state_26019;
var statearr_26033_26055 = state_26019__$1;
(statearr_26033_26055[(2)] = null);

(statearr_26033_26055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (5))){
var state_26019__$1 = state_26019;
var statearr_26034_26056 = state_26019__$1;
(statearr_26034_26056[(2)] = null);

(statearr_26034_26056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (10))){
var inst_26013 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26035_26057 = state_26019__$1;
(statearr_26035_26057[(2)] = inst_26013);

(statearr_26035_26057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (8))){
var inst_26005 = (state_26019[(7)]);
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26019__$1,(11),out,inst_26005);
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
});})(c__21107__auto___26047,in$,closed,head,out,mult))
;
return ((function (switch__21092__auto__,c__21107__auto___26047,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__21093__auto__ = null;
var reagi$core$state_machine__21093__auto____0 = (function (){
var statearr_26039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26039[(0)] = reagi$core$state_machine__21093__auto__);

(statearr_26039[(1)] = (1));

return statearr_26039;
});
var reagi$core$state_machine__21093__auto____1 = (function (state_26019){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26040){if((e26040 instanceof Object)){
var ex__21096__auto__ = e26040;
var statearr_26041_26058 = state_26019;
(statearr_26041_26058[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26019;
state_26019 = G__26059;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$state_machine__21093__auto__ = function(state_26019){
switch(arguments.length){
case 0:
return reagi$core$state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$state_machine__21093__auto____1.call(this,state_26019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__21093__auto____0;
reagi$core$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__21093__auto____1;
return reagi$core$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___26047,in$,closed,head,out,mult))
})();
var state__21109__auto__ = (function (){var statearr_26042 = f__21108__auto__.call(null);
(statearr_26042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___26047);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___26047,in$,closed,head,out,mult))
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
var args26060 = [];
var len__19850__auto___26070 = arguments.length;
var i__19851__auto___26071 = (0);
while(true){
if((i__19851__auto___26071 < len__19850__auto___26070)){
args26060.push((arguments[i__19851__auto___26071]));

var G__26072 = (i__19851__auto___26071 + (1));
i__19851__auto___26071 = G__26072;
continue;
} else {
}
break;
}

var G__26065 = args26060.length;
switch (G__26065) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19869__auto__ = (new cljs.core.IndexedSeq(args26060.slice((2)),(0),null));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19869__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__26066 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__26067 = null;
var count__26068 = (0);
var i__26069 = (0);
while(true){
if((i__26069 < count__26068)){
var m = cljs.core._nth.call(null,chunk__26067,i__26069);
stream.call(null,m);

var G__26074 = seq__26066;
var G__26075 = chunk__26067;
var G__26076 = count__26068;
var G__26077 = (i__26069 + (1));
seq__26066 = G__26074;
chunk__26067 = G__26075;
count__26068 = G__26076;
i__26069 = G__26077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26066);
if(temp__4657__auto__){
var seq__26066__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26066__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__26066__$1);
var G__26078 = cljs.core.chunk_rest.call(null,seq__26066__$1);
var G__26079 = c__19556__auto__;
var G__26080 = cljs.core.count.call(null,c__19556__auto__);
var G__26081 = (0);
seq__26066 = G__26078;
chunk__26067 = G__26079;
count__26068 = G__26080;
i__26069 = G__26081;
continue;
} else {
var m = cljs.core.first.call(null,seq__26066__$1);
stream.call(null,m);

var G__26082 = cljs.core.next.call(null,seq__26066__$1);
var G__26083 = null;
var G__26084 = (0);
var G__26085 = (0);
seq__26066 = G__26082;
chunk__26067 = G__26083;
count__26068 = G__26084;
i__26069 = G__26085;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq26061){
var G__26062 = cljs.core.first.call(null,seq26061);
var seq26061__$1 = cljs.core.next.call(null,seq26061);
var G__26063 = cljs.core.first.call(null,seq26061__$1);
var seq26061__$2 = cljs.core.next.call(null,seq26061__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__26062,G__26063,seq26061__$2);
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
var seq__26090 = cljs.core.seq.call(null,chs);
var chunk__26091 = null;
var count__26092 = (0);
var i__26093 = (0);
while(true){
if((i__26093 < count__26092)){
var ch = cljs.core._nth.call(null,chunk__26091,i__26093);
cljs.core.async.close_BANG_.call(null,ch);

var G__26094 = seq__26090;
var G__26095 = chunk__26091;
var G__26096 = count__26092;
var G__26097 = (i__26093 + (1));
seq__26090 = G__26094;
chunk__26091 = G__26095;
count__26092 = G__26096;
i__26093 = G__26097;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26090);
if(temp__4657__auto__){
var seq__26090__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26090__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__26090__$1);
var G__26098 = cljs.core.chunk_rest.call(null,seq__26090__$1);
var G__26099 = c__19556__auto__;
var G__26100 = cljs.core.count.call(null,c__19556__auto__);
var G__26101 = (0);
seq__26090 = G__26098;
chunk__26091 = G__26099;
count__26092 = G__26100;
i__26093 = G__26101;
continue;
} else {
var ch = cljs.core.first.call(null,seq__26090__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__26102 = cljs.core.next.call(null,seq__26090__$1);
var G__26103 = null;
var G__26104 = (0);
var G__26105 = (0);
seq__26090 = G__26102;
chunk__26091 = G__26103;
count__26092 = G__26104;
i__26093 = G__26105;
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
return cljs.core.mapv.call(null,(function (p1__26106_SHARP_){
return reagi.core.listen.call(null,p1__26106_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__19857__auto__ = [];
var len__19850__auto___26110 = arguments.length;
var i__19851__auto___26111 = (0);
while(true){
if((i__19851__auto___26111 < len__19850__auto___26110)){
args__19857__auto__.push((arguments[i__19851__auto___26111]));

var G__26112 = (i__19851__auto___26111 + (1));
i__19851__auto___26111 = G__26112;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((2) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((2)),(0),null)):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19858__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

reagi.core.connect_port.cljs$lang$applyTo = (function (seq26107){
var G__26108 = cljs.core.first.call(null,seq26107);
var seq26107__$1 = cljs.core.next.call(null,seq26107);
var G__26109 = cljs.core.first.call(null,seq26107__$1);
var seq26107__$2 = cljs.core.next.call(null,seq26107__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__26108,G__26109,seq26107__$2);
});

/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__19857__auto__ = [];
var len__19850__auto___26115 = arguments.length;
var i__19851__auto___26116 = (0);
while(true){
if((i__19851__auto___26116 < len__19850__auto___26115)){
args__19857__auto__.push((arguments[i__19851__auto___26116]));

var G__26117 = (i__19851__auto___26116 + (1));
i__19851__auto___26116 = G__26117;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__26114 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26114,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__26114,((function (G__26114,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26114,chs))
);

reagi.core.depend_on.call(null,G__26114,streams);

return G__26114;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq26113){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26113));
});

reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,index){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,index){
return (function (state_26230){
var state_val_26231 = (state_26230[(1)]);
if((state_val_26231 === (7))){
var inst_26203 = (state_26230[(7)]);
var inst_26202 = (state_26230[(2)]);
var inst_26203__$1 = cljs.core.nth.call(null,inst_26202,(0),null);
var inst_26204 = cljs.core.nth.call(null,inst_26202,(1),null);
var state_26230__$1 = (function (){var statearr_26233 = state_26230;
(statearr_26233[(8)] = inst_26204);

(statearr_26233[(7)] = inst_26203__$1);

return statearr_26233;
})();
if(cljs.core.truth_(inst_26203__$1)){
var statearr_26234_26260 = state_26230__$1;
(statearr_26234_26260[(1)] = (8));

} else {
var statearr_26235_26261 = state_26230__$1;
(statearr_26235_26261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (1))){
var inst_26189 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_26190 = cljs.core.mapv.call(null,inst_26189,ins);
var inst_26191 = cljs.core.set.call(null,ins);
var inst_26192 = inst_26190;
var inst_26193 = inst_26191;
var state_26230__$1 = (function (){var statearr_26236 = state_26230;
(statearr_26236[(9)] = inst_26193);

(statearr_26236[(10)] = inst_26192);

return statearr_26236;
})();
var statearr_26237_26262 = state_26230__$1;
(statearr_26237_26262[(2)] = null);

(statearr_26237_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (4))){
var inst_26193 = (state_26230[(9)]);
var inst_26200 = cljs.core.vec.call(null,inst_26193);
var state_26230__$1 = state_26230;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26230__$1,(7),inst_26200);
} else {
if((state_val_26231 === (13))){
var inst_26193 = (state_26230[(9)]);
var inst_26208 = (state_26230[(11)]);
var inst_26216 = (state_26230[(2)]);
var tmp26232 = inst_26193;
var inst_26192 = inst_26208;
var inst_26193__$1 = tmp26232;
var state_26230__$1 = (function (){var statearr_26238 = state_26230;
(statearr_26238[(12)] = inst_26216);

(statearr_26238[(9)] = inst_26193__$1);

(statearr_26238[(10)] = inst_26192);

return statearr_26238;
})();
var statearr_26239_26263 = state_26230__$1;
(statearr_26239_26263[(2)] = null);

(statearr_26239_26263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (6))){
var inst_26226 = (state_26230[(2)]);
var state_26230__$1 = state_26230;
var statearr_26240_26264 = state_26230__$1;
(statearr_26240_26264[(2)] = inst_26226);

(statearr_26240_26264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (3))){
var inst_26228 = (state_26230[(2)]);
var state_26230__$1 = state_26230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26230__$1,inst_26228);
} else {
if((state_val_26231 === (12))){
var inst_26208 = (state_26230[(11)]);
var inst_26212 = reagi.core.box.call(null,inst_26208);
var state_26230__$1 = state_26230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26230__$1,(14),out,inst_26212);
} else {
if((state_val_26231 === (2))){
var inst_26193 = (state_26230[(9)]);
var inst_26195 = cljs.core.seq.call(null,inst_26193);
var state_26230__$1 = state_26230;
if(inst_26195){
var statearr_26242_26265 = state_26230__$1;
(statearr_26242_26265[(1)] = (4));

} else {
var statearr_26243_26266 = state_26230__$1;
(statearr_26243_26266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (11))){
var state_26230__$1 = state_26230;
var statearr_26244_26267 = state_26230__$1;
(statearr_26244_26267[(2)] = null);

(statearr_26244_26267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (9))){
var inst_26204 = (state_26230[(8)]);
var inst_26193 = (state_26230[(9)]);
var inst_26192 = (state_26230[(10)]);
var inst_26219 = cljs.core.disj.call(null,inst_26193,inst_26204);
var tmp26241 = inst_26192;
var inst_26192__$1 = tmp26241;
var inst_26193__$1 = inst_26219;
var state_26230__$1 = (function (){var statearr_26245 = state_26230;
(statearr_26245[(9)] = inst_26193__$1);

(statearr_26245[(10)] = inst_26192__$1);

return statearr_26245;
})();
var statearr_26246_26268 = state_26230__$1;
(statearr_26246_26268[(2)] = null);

(statearr_26246_26268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (5))){
var inst_26224 = cljs.core.async.close_BANG_.call(null,out);
var state_26230__$1 = state_26230;
var statearr_26247_26269 = state_26230__$1;
(statearr_26247_26269[(2)] = inst_26224);

(statearr_26247_26269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (14))){
var inst_26214 = (state_26230[(2)]);
var state_26230__$1 = state_26230;
var statearr_26248_26270 = state_26230__$1;
(statearr_26248_26270[(2)] = inst_26214);

(statearr_26248_26270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (10))){
var inst_26222 = (state_26230[(2)]);
var state_26230__$1 = state_26230;
var statearr_26249_26271 = state_26230__$1;
(statearr_26249_26271[(2)] = inst_26222);

(statearr_26249_26271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26231 === (8))){
var inst_26204 = (state_26230[(8)]);
var inst_26208 = (state_26230[(11)]);
var inst_26192 = (state_26230[(10)]);
var inst_26203 = (state_26230[(7)]);
var inst_26206 = index.call(null,inst_26204);
var inst_26207 = reagi.core.unbox.call(null,inst_26203);
var inst_26208__$1 = cljs.core.assoc.call(null,inst_26192,inst_26206,inst_26207);
var inst_26209 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_26208__$1);
var state_26230__$1 = (function (){var statearr_26250 = state_26230;
(statearr_26250[(11)] = inst_26208__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26209)){
var statearr_26251_26272 = state_26230__$1;
(statearr_26251_26272[(1)] = (11));

} else {
var statearr_26252_26273 = state_26230__$1;
(statearr_26252_26273[(1)] = (12));

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
});})(c__21107__auto__,index))
;
return ((function (switch__21092__auto__,c__21107__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__21093__auto__ = null;
var reagi$core$zip_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_26256 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26256[(0)] = reagi$core$zip_ch_$_state_machine__21093__auto__);

(statearr_26256[(1)] = (1));

return statearr_26256;
});
var reagi$core$zip_ch_$_state_machine__21093__auto____1 = (function (state_26230){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object)){
var ex__21096__auto__ = e26257;
var statearr_26258_26274 = state_26230;
(statearr_26258_26274[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26275 = state_26230;
state_26230 = G__26275;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__21093__auto__ = function(state_26230){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__21093__auto____1.call(this,state_26230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__21093__auto____0;
reagi$core$zip_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__21093__auto____1;
return reagi$core$zip_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,index))
})();
var state__21109__auto__ = (function (){var statearr_26259 = f__21108__auto__.call(null);
(statearr_26259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,index))
);

return c__21107__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__19857__auto__ = [];
var len__19850__auto___26278 = arguments.length;
var i__19851__auto___26279 = (0);
while(true){
if((i__19851__auto___26279 < len__19850__auto___26278)){
args__19857__auto__.push((arguments[i__19851__auto___26279]));

var G__26280 = (i__19851__auto___26279 + (1));
i__19851__auto___26279 = G__26280;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__26277 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26277,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__26277,((function (G__26277,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__26277,chs))
);

reagi.core.depend_on.call(null,G__26277,streams);

return G__26277;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq26276){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26276));
});

reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_26436){
var state_val_26437 = (state_26436[(1)]);
if((state_val_26437 === (7))){
var inst_26432 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26438_26475 = state_26436__$1;
(statearr_26438_26475[(2)] = inst_26432);

(statearr_26438_26475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (20))){
var inst_26404 = (state_26436[(7)]);
var inst_26416 = (state_26436[(2)]);
var inst_26417 = cljs.core.next.call(null,inst_26404);
var inst_26389 = inst_26417;
var inst_26390 = null;
var inst_26391 = (0);
var inst_26392 = (0);
var state_26436__$1 = (function (){var statearr_26439 = state_26436;
(statearr_26439[(8)] = inst_26390);

(statearr_26439[(9)] = inst_26391);

(statearr_26439[(10)] = inst_26416);

(statearr_26439[(11)] = inst_26392);

(statearr_26439[(12)] = inst_26389);

return statearr_26439;
})();
var statearr_26440_26476 = state_26436__$1;
(statearr_26440_26476[(2)] = null);

(statearr_26440_26476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (1))){
var state_26436__$1 = state_26436;
var statearr_26441_26477 = state_26436__$1;
(statearr_26441_26477[(2)] = null);

(statearr_26441_26477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (4))){
var inst_26380 = (state_26436[(13)]);
var inst_26380__$1 = (state_26436[(2)]);
var state_26436__$1 = (function (){var statearr_26445 = state_26436;
(statearr_26445[(13)] = inst_26380__$1);

return statearr_26445;
})();
if(cljs.core.truth_(inst_26380__$1)){
var statearr_26446_26478 = state_26436__$1;
(statearr_26446_26478[(1)] = (5));

} else {
var statearr_26447_26479 = state_26436__$1;
(statearr_26447_26479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (15))){
var state_26436__$1 = state_26436;
var statearr_26448_26480 = state_26436__$1;
(statearr_26448_26480[(2)] = null);

(statearr_26448_26480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (13))){
var inst_26390 = (state_26436[(8)]);
var inst_26391 = (state_26436[(9)]);
var inst_26392 = (state_26436[(11)]);
var inst_26389 = (state_26436[(12)]);
var inst_26400 = (state_26436[(2)]);
var inst_26401 = (inst_26392 + (1));
var tmp26442 = inst_26390;
var tmp26443 = inst_26391;
var tmp26444 = inst_26389;
var inst_26389__$1 = tmp26444;
var inst_26390__$1 = tmp26442;
var inst_26391__$1 = tmp26443;
var inst_26392__$1 = inst_26401;
var state_26436__$1 = (function (){var statearr_26449 = state_26436;
(statearr_26449[(8)] = inst_26390__$1);

(statearr_26449[(9)] = inst_26391__$1);

(statearr_26449[(14)] = inst_26400);

(statearr_26449[(11)] = inst_26392__$1);

(statearr_26449[(12)] = inst_26389__$1);

return statearr_26449;
})();
var statearr_26450_26481 = state_26436__$1;
(statearr_26450_26481[(2)] = null);

(statearr_26450_26481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (6))){
var inst_26430 = cljs.core.async.close_BANG_.call(null,out);
var state_26436__$1 = state_26436;
var statearr_26451_26482 = state_26436__$1;
(statearr_26451_26482[(2)] = inst_26430);

(statearr_26451_26482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (17))){
var inst_26404 = (state_26436[(7)]);
var inst_26408 = cljs.core.chunk_first.call(null,inst_26404);
var inst_26409 = cljs.core.chunk_rest.call(null,inst_26404);
var inst_26410 = cljs.core.count.call(null,inst_26408);
var inst_26389 = inst_26409;
var inst_26390 = inst_26408;
var inst_26391 = inst_26410;
var inst_26392 = (0);
var state_26436__$1 = (function (){var statearr_26452 = state_26436;
(statearr_26452[(8)] = inst_26390);

(statearr_26452[(9)] = inst_26391);

(statearr_26452[(11)] = inst_26392);

(statearr_26452[(12)] = inst_26389);

return statearr_26452;
})();
var statearr_26453_26483 = state_26436__$1;
(statearr_26453_26483[(2)] = null);

(statearr_26453_26483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (3))){
var inst_26434 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26436__$1,inst_26434);
} else {
if((state_val_26437 === (12))){
var inst_26425 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26454_26484 = state_26436__$1;
(statearr_26454_26484[(2)] = inst_26425);

(statearr_26454_26484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (2))){
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26436__$1,(4),in$);
} else {
if((state_val_26437 === (19))){
var inst_26420 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26455_26485 = state_26436__$1;
(statearr_26455_26485[(2)] = inst_26420);

(statearr_26455_26485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (11))){
var inst_26404 = (state_26436[(7)]);
var inst_26389 = (state_26436[(12)]);
var inst_26404__$1 = cljs.core.seq.call(null,inst_26389);
var state_26436__$1 = (function (){var statearr_26456 = state_26436;
(statearr_26456[(7)] = inst_26404__$1);

return statearr_26456;
})();
if(inst_26404__$1){
var statearr_26457_26486 = state_26436__$1;
(statearr_26457_26486[(1)] = (14));

} else {
var statearr_26458_26487 = state_26436__$1;
(statearr_26458_26487[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (9))){
var inst_26427 = (state_26436[(2)]);
var state_26436__$1 = (function (){var statearr_26459 = state_26436;
(statearr_26459[(15)] = inst_26427);

return statearr_26459;
})();
var statearr_26460_26488 = state_26436__$1;
(statearr_26460_26488[(2)] = null);

(statearr_26460_26488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (5))){
var inst_26380 = (state_26436[(13)]);
var inst_26382 = reagi.core.unbox.call(null,inst_26380);
var inst_26383 = f.call(null,inst_26382);
var inst_26388 = cljs.core.seq.call(null,inst_26383);
var inst_26389 = inst_26388;
var inst_26390 = null;
var inst_26391 = (0);
var inst_26392 = (0);
var state_26436__$1 = (function (){var statearr_26461 = state_26436;
(statearr_26461[(8)] = inst_26390);

(statearr_26461[(9)] = inst_26391);

(statearr_26461[(11)] = inst_26392);

(statearr_26461[(12)] = inst_26389);

return statearr_26461;
})();
var statearr_26462_26489 = state_26436__$1;
(statearr_26462_26489[(2)] = null);

(statearr_26462_26489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (14))){
var inst_26404 = (state_26436[(7)]);
var inst_26406 = cljs.core.chunked_seq_QMARK_.call(null,inst_26404);
var state_26436__$1 = state_26436;
if(inst_26406){
var statearr_26463_26490 = state_26436__$1;
(statearr_26463_26490[(1)] = (17));

} else {
var statearr_26464_26491 = state_26436__$1;
(statearr_26464_26491[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (16))){
var inst_26423 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26465_26492 = state_26436__$1;
(statearr_26465_26492[(2)] = inst_26423);

(statearr_26465_26492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (10))){
var inst_26390 = (state_26436[(8)]);
var inst_26392 = (state_26436[(11)]);
var inst_26397 = cljs.core._nth.call(null,inst_26390,inst_26392);
var inst_26398 = reagi.core.box.call(null,inst_26397);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26436__$1,(13),out,inst_26398);
} else {
if((state_val_26437 === (18))){
var inst_26404 = (state_26436[(7)]);
var inst_26413 = cljs.core.first.call(null,inst_26404);
var inst_26414 = reagi.core.box.call(null,inst_26413);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26436__$1,(20),out,inst_26414);
} else {
if((state_val_26437 === (8))){
var inst_26391 = (state_26436[(9)]);
var inst_26392 = (state_26436[(11)]);
var inst_26394 = (inst_26392 < inst_26391);
var inst_26395 = inst_26394;
var state_26436__$1 = state_26436;
if(cljs.core.truth_(inst_26395)){
var statearr_26466_26493 = state_26436__$1;
(statearr_26466_26493[(1)] = (10));

} else {
var statearr_26467_26494 = state_26436__$1;
(statearr_26467_26494[(1)] = (11));

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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__21093__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_26471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26471[(0)] = reagi$core$mapcat_ch_$_state_machine__21093__auto__);

(statearr_26471[(1)] = (1));

return statearr_26471;
});
var reagi$core$mapcat_ch_$_state_machine__21093__auto____1 = (function (state_26436){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26472){if((e26472 instanceof Object)){
var ex__21096__auto__ = e26472;
var statearr_26473_26495 = state_26436;
(statearr_26473_26495[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26496 = state_26436;
state_26436 = G__26496;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__21093__auto__ = function(state_26436){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__21093__auto____1.call(this,state_26436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__21093__auto____0;
reagi$core$mapcat_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__21093__auto____1;
return reagi$core$mapcat_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_26474 = f__21108__auto__.call(null);
(statearr_26474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args26497 = [];
var len__19850__auto___26504 = arguments.length;
var i__19851__auto___26505 = (0);
while(true){
if((i__19851__auto___26505 < len__19850__auto___26504)){
args26497.push((arguments[i__19851__auto___26505]));

var G__26506 = (i__19851__auto___26505 + (1));
i__19851__auto___26505 = G__26506;
continue;
} else {
}
break;
}

var G__26502 = args26497.length;
switch (G__26502) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19869__auto__ = (new cljs.core.IndexedSeq(args26497.slice((2)),(0),null));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19869__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26503 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26503,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__26503,((function (G__26503,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26503,ch))
);

reagi.core.depend_on.call(null,G__26503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26503;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq26498){
var G__26499 = cljs.core.first.call(null,seq26498);
var seq26498__$1 = cljs.core.next.call(null,seq26498);
var G__26500 = cljs.core.first.call(null,seq26498__$1);
var seq26498__$2 = cljs.core.next.call(null,seq26498__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__26499,G__26500,seq26498__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__19857__auto__ = [];
var len__19850__auto___26510 = arguments.length;
var i__19851__auto___26511 = (0);
while(true){
if((i__19851__auto___26511 < len__19850__auto___26510)){
args__19857__auto__.push((arguments[i__19851__auto___26511]));

var G__26512 = (i__19851__auto___26511 + (1));
i__19851__auto___26511 = G__26512;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((1) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((1)),(0),null)):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19858__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

reagi.core.map.cljs$lang$applyTo = (function (seq26508){
var G__26509 = cljs.core.first.call(null,seq26508);
var seq26508__$1 = cljs.core.next.call(null,seq26508);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__26509,seq26508__$1);
});

/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__26513_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__26513_SHARP_))){
var x__19579__auto__ = p1__26513_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19579__auto__);
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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_26585){
var state_val_26586 = (state_26585[(1)]);
if((state_val_26586 === (7))){
var inst_26581 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26587_26608 = state_26585__$1;
(statearr_26587_26608[(2)] = inst_26581);

(statearr_26587_26608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (1))){
var inst_26561 = init;
var state_26585__$1 = (function (){var statearr_26588 = state_26585;
(statearr_26588[(7)] = inst_26561);

return statearr_26588;
})();
var statearr_26589_26609 = state_26585__$1;
(statearr_26589_26609[(2)] = null);

(statearr_26589_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (4))){
var inst_26564 = (state_26585[(8)]);
var inst_26564__$1 = (state_26585[(2)]);
var state_26585__$1 = (function (){var statearr_26590 = state_26585;
(statearr_26590[(8)] = inst_26564__$1);

return statearr_26590;
})();
if(cljs.core.truth_(inst_26564__$1)){
var statearr_26591_26610 = state_26585__$1;
(statearr_26591_26610[(1)] = (5));

} else {
var statearr_26592_26611 = state_26585__$1;
(statearr_26592_26611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (6))){
var inst_26579 = cljs.core.async.close_BANG_.call(null,out);
var state_26585__$1 = state_26585;
var statearr_26593_26612 = state_26585__$1;
(statearr_26593_26612[(2)] = inst_26579);

(statearr_26593_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (3))){
var inst_26583 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26585__$1,inst_26583);
} else {
if((state_val_26586 === (2))){
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26585__$1,(4),in$);
} else {
if((state_val_26586 === (11))){
var inst_26573 = (state_26585[(9)]);
var inst_26576 = (state_26585[(2)]);
var inst_26561 = inst_26573;
var state_26585__$1 = (function (){var statearr_26594 = state_26585;
(statearr_26594[(7)] = inst_26561);

(statearr_26594[(10)] = inst_26576);

return statearr_26594;
})();
var statearr_26595_26613 = state_26585__$1;
(statearr_26595_26613[(2)] = null);

(statearr_26595_26613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (9))){
var inst_26561 = (state_26585[(7)]);
var inst_26564 = (state_26585[(8)]);
var inst_26570 = reagi.core.unbox.call(null,inst_26564);
var inst_26571 = f.call(null,inst_26561,inst_26570);
var state_26585__$1 = state_26585;
var statearr_26596_26614 = state_26585__$1;
(statearr_26596_26614[(2)] = inst_26571);

(statearr_26596_26614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (5))){
var inst_26561 = (state_26585[(7)]);
var inst_26566 = reagi.core.no_value_QMARK_.call(null,inst_26561);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26566)){
var statearr_26597_26615 = state_26585__$1;
(statearr_26597_26615[(1)] = (8));

} else {
var statearr_26598_26616 = state_26585__$1;
(statearr_26598_26616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (10))){
var inst_26573 = (state_26585[(9)]);
var inst_26573__$1 = (state_26585[(2)]);
var inst_26574 = reagi.core.box.call(null,inst_26573__$1);
var state_26585__$1 = (function (){var statearr_26599 = state_26585;
(statearr_26599[(9)] = inst_26573__$1);

return statearr_26599;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26585__$1,(11),out,inst_26574);
} else {
if((state_val_26586 === (8))){
var inst_26564 = (state_26585[(8)]);
var inst_26568 = reagi.core.unbox.call(null,inst_26564);
var state_26585__$1 = state_26585;
var statearr_26600_26617 = state_26585__$1;
(statearr_26600_26617[(2)] = inst_26568);

(statearr_26600_26617[(1)] = (10));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__21093__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_26604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26604[(0)] = reagi$core$reduce_ch_$_state_machine__21093__auto__);

(statearr_26604[(1)] = (1));

return statearr_26604;
});
var reagi$core$reduce_ch_$_state_machine__21093__auto____1 = (function (state_26585){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26605){if((e26605 instanceof Object)){
var ex__21096__auto__ = e26605;
var statearr_26606_26618 = state_26585;
(statearr_26606_26618[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26619 = state_26585;
state_26585 = G__26619;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__21093__auto__ = function(state_26585){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__21093__auto____1.call(this,state_26585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__21093__auto____0;
reagi$core$reduce_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__21093__auto____1;
return reagi$core$reduce_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_26607 = f__21108__auto__.call(null);
(statearr_26607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_26607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args26620 = [];
var len__19850__auto___26624 = arguments.length;
var i__19851__auto___26625 = (0);
while(true){
if((i__19851__auto___26625 < len__19850__auto___26624)){
args26620.push((arguments[i__19851__auto___26625]));

var G__26626 = (i__19851__auto___26625 + (1));
i__19851__auto___26625 = G__26626;
continue;
} else {
}
break;
}

var G__26622 = args26620.length;
switch (G__26622) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26620.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26623 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__26623,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__26623,((function (G__26623,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26623,ch))
);

reagi.core.depend_on.call(null,G__26623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26623;
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
return reagi.core.reduce.call(null,(function (p1__26629_SHARP_,p2__26628_SHARP_){
return p2__26628_SHARP_.call(null,p1__26629_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args26630 = [];
var len__19850__auto___26633 = arguments.length;
var i__19851__auto___26634 = (0);
while(true){
if((i__19851__auto___26634 < len__19850__auto___26633)){
args26630.push((arguments[i__19851__auto___26634]));

var G__26635 = (i__19851__auto___26634 + (1));
i__19851__auto___26634 = G__26635;
continue;
} else {
}
break;
}

var G__26632 = args26630.length;
switch (G__26632) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26630.length)].join('')));

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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_26718){
var state_val_26719 = (state_26718[(1)]);
if((state_val_26719 === (7))){
var inst_26714 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26720_26745 = state_26718__$1;
(statearr_26720_26745[(2)] = inst_26714);

(statearr_26720_26745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (1))){
var inst_26691 = reagi.core.no_value;
var state_26718__$1 = (function (){var statearr_26721 = state_26718;
(statearr_26721[(7)] = inst_26691);

return statearr_26721;
})();
var statearr_26722_26746 = state_26718__$1;
(statearr_26722_26746[(2)] = null);

(statearr_26722_26746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (4))){
var inst_26694 = (state_26718[(8)]);
var inst_26694__$1 = (state_26718[(2)]);
var state_26718__$1 = (function (){var statearr_26723 = state_26718;
(statearr_26723[(8)] = inst_26694__$1);

return statearr_26723;
})();
if(cljs.core.truth_(inst_26694__$1)){
var statearr_26724_26747 = state_26718__$1;
(statearr_26724_26747[(1)] = (5));

} else {
var statearr_26725_26748 = state_26718__$1;
(statearr_26725_26748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (13))){
var inst_26696 = (state_26718[(9)]);
var inst_26709 = (state_26718[(2)]);
var inst_26691 = inst_26696;
var state_26718__$1 = (function (){var statearr_26726 = state_26718;
(statearr_26726[(7)] = inst_26691);

(statearr_26726[(10)] = inst_26709);

return statearr_26726;
})();
var statearr_26727_26749 = state_26718__$1;
(statearr_26727_26749[(2)] = null);

(statearr_26727_26749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (6))){
var inst_26712 = cljs.core.async.close_BANG_.call(null,out);
var state_26718__$1 = state_26718;
var statearr_26728_26750 = state_26718__$1;
(statearr_26728_26750[(2)] = inst_26712);

(statearr_26728_26750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (3))){
var inst_26716 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26718__$1,inst_26716);
} else {
if((state_val_26719 === (12))){
var state_26718__$1 = state_26718;
var statearr_26729_26751 = state_26718__$1;
(statearr_26729_26751[(2)] = null);

(statearr_26729_26751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (2))){
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26718__$1,(4),in$);
} else {
if((state_val_26719 === (11))){
var inst_26696 = (state_26718[(9)]);
var inst_26704 = reagi.core.box.call(null,inst_26696);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26718__$1,(14),out,inst_26704);
} else {
if((state_val_26719 === (9))){
var inst_26691 = (state_26718[(7)]);
var inst_26696 = (state_26718[(9)]);
var inst_26700 = cljs.core.not_EQ_.call(null,inst_26696,inst_26691);
var state_26718__$1 = state_26718;
var statearr_26730_26752 = state_26718__$1;
(statearr_26730_26752[(2)] = inst_26700);

(statearr_26730_26752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (5))){
var inst_26691 = (state_26718[(7)]);
var inst_26694 = (state_26718[(8)]);
var inst_26697 = (state_26718[(11)]);
var inst_26696 = reagi.core.unbox.call(null,inst_26694);
var inst_26697__$1 = reagi.core.no_value_QMARK_.call(null,inst_26691);
var state_26718__$1 = (function (){var statearr_26731 = state_26718;
(statearr_26731[(9)] = inst_26696);

(statearr_26731[(11)] = inst_26697__$1);

return statearr_26731;
})();
if(cljs.core.truth_(inst_26697__$1)){
var statearr_26732_26753 = state_26718__$1;
(statearr_26732_26753[(1)] = (8));

} else {
var statearr_26733_26754 = state_26718__$1;
(statearr_26733_26754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (14))){
var inst_26706 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26734_26755 = state_26718__$1;
(statearr_26734_26755[(2)] = inst_26706);

(statearr_26734_26755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (10))){
var inst_26702 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
if(cljs.core.truth_(inst_26702)){
var statearr_26735_26756 = state_26718__$1;
(statearr_26735_26756[(1)] = (11));

} else {
var statearr_26736_26757 = state_26718__$1;
(statearr_26736_26757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (8))){
var inst_26697 = (state_26718[(11)]);
var state_26718__$1 = state_26718;
var statearr_26737_26758 = state_26718__$1;
(statearr_26737_26758[(2)] = inst_26697);

(statearr_26737_26758[(1)] = (10));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__21093__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_26741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26741[(0)] = reagi$core$uniq_ch_$_state_machine__21093__auto__);

(statearr_26741[(1)] = (1));

return statearr_26741;
});
var reagi$core$uniq_ch_$_state_machine__21093__auto____1 = (function (state_26718){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26742){if((e26742 instanceof Object)){
var ex__21096__auto__ = e26742;
var statearr_26743_26759 = state_26718;
(statearr_26743_26759[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26760 = state_26718;
state_26718 = G__26760;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__21093__auto__ = function(state_26718){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__21093__auto____1.call(this,state_26718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__21093__auto____0;
reagi$core$uniq_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__21093__auto____1;
return reagi$core$uniq_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_26744 = f__21108__auto__.call(null);
(statearr_26744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_26744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26762 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26762,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__26762,((function (G__26762,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26762,ch))
);

reagi.core.depend_on.call(null,G__26762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26762;
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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_26830){
var state_val_26831 = (state_26830[(1)]);
if((state_val_26831 === (7))){
var inst_26826 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26832_26853 = state_26830__$1;
(statearr_26832_26853[(2)] = inst_26826);

(statearr_26832_26853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (1))){
var inst_26808 = (0);
var state_26830__$1 = (function (){var statearr_26833 = state_26830;
(statearr_26833[(7)] = inst_26808);

return statearr_26833;
})();
var statearr_26834_26854 = state_26830__$1;
(statearr_26834_26854[(2)] = null);

(statearr_26834_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (4))){
var inst_26811 = (state_26830[(8)]);
var inst_26811__$1 = (state_26830[(2)]);
var state_26830__$1 = (function (){var statearr_26835 = state_26830;
(statearr_26835[(8)] = inst_26811__$1);

return statearr_26835;
})();
if(cljs.core.truth_(inst_26811__$1)){
var statearr_26836_26855 = state_26830__$1;
(statearr_26836_26855[(1)] = (5));

} else {
var statearr_26837_26856 = state_26830__$1;
(statearr_26837_26856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (6))){
var inst_26824 = cljs.core.async.close_BANG_.call(null,out);
var state_26830__$1 = state_26830;
var statearr_26838_26857 = state_26830__$1;
(statearr_26838_26857[(2)] = inst_26824);

(statearr_26838_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (3))){
var inst_26828 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26830__$1,inst_26828);
} else {
if((state_val_26831 === (2))){
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26830__$1,(4),in$);
} else {
if((state_val_26831 === (11))){
var inst_26818 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26839_26858 = state_26830__$1;
(statearr_26839_26858[(2)] = inst_26818);

(statearr_26839_26858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (9))){
var state_26830__$1 = state_26830;
var statearr_26840_26859 = state_26830__$1;
(statearr_26840_26859[(2)] = null);

(statearr_26840_26859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (5))){
var inst_26813 = (state_26830[(9)]);
var inst_26808 = (state_26830[(7)]);
var inst_26813__$1 = reagi.core.time_ms.call(null);
var inst_26814 = (inst_26813__$1 - inst_26808);
var inst_26815 = (inst_26814 >= timeout_ms);
var state_26830__$1 = (function (){var statearr_26841 = state_26830;
(statearr_26841[(9)] = inst_26813__$1);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26815)){
var statearr_26842_26860 = state_26830__$1;
(statearr_26842_26860[(1)] = (8));

} else {
var statearr_26843_26861 = state_26830__$1;
(statearr_26843_26861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (10))){
var inst_26813 = (state_26830[(9)]);
var inst_26821 = (state_26830[(2)]);
var inst_26808 = inst_26813;
var state_26830__$1 = (function (){var statearr_26844 = state_26830;
(statearr_26844[(10)] = inst_26821);

(statearr_26844[(7)] = inst_26808);

return statearr_26844;
})();
var statearr_26845_26862 = state_26830__$1;
(statearr_26845_26862[(2)] = null);

(statearr_26845_26862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (8))){
var inst_26811 = (state_26830[(8)]);
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26830__$1,(11),out,inst_26811);
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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__21093__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_26849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26849[(0)] = reagi$core$throttle_ch_$_state_machine__21093__auto__);

(statearr_26849[(1)] = (1));

return statearr_26849;
});
var reagi$core$throttle_ch_$_state_machine__21093__auto____1 = (function (state_26830){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e26850){if((e26850 instanceof Object)){
var ex__21096__auto__ = e26850;
var statearr_26851_26863 = state_26830;
(statearr_26851_26863[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26864 = state_26830;
state_26830 = G__26864;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__21093__auto__ = function(state_26830){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__21093__auto____1.call(this,state_26830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__21093__auto____0;
reagi$core$throttle_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__21093__auto____1;
return reagi$core$throttle_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_26852 = f__21108__auto__.call(null);
(statearr_26852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_26852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__26866 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26866,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__26866,((function (G__26866,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__26866,ch))
);

reagi.core.depend_on.call(null,G__26866,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26866;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_26980){
var state_val_26981 = (state_26980[(1)]);
if((state_val_26981 === (7))){
var inst_26975 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26982_27011 = state_26980__$1;
(statearr_26982_27011[(2)] = inst_26975);

(statearr_26982_27011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (1))){
var state_26980__$1 = state_26980;
var statearr_26983_27012 = state_26980__$1;
(statearr_26983_27012[(2)] = null);

(statearr_26983_27012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (4))){
var inst_26948 = (state_26980[(2)]);
var inst_26949 = cljs.core.nth.call(null,inst_26948,(0),null);
var inst_26950 = cljs.core.nth.call(null,inst_26948,(1),null);
var inst_26951 = cljs.core.not_EQ_.call(null,inst_26950,stop);
var state_26980__$1 = (function (){var statearr_26984 = state_26980;
(statearr_26984[(7)] = inst_26949);

return statearr_26984;
})();
if(inst_26951){
var statearr_26985_27013 = state_26980__$1;
(statearr_26985_27013[(1)] = (5));

} else {
var statearr_26986_27014 = state_26980__$1;
(statearr_26986_27014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (15))){
var state_26980__$1 = state_26980;
var statearr_26987_27015 = state_26980__$1;
(statearr_26987_27015[(2)] = null);

(statearr_26987_27015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (13))){
var inst_26962 = (state_26980[(8)]);
var state_26980__$1 = state_26980;
var statearr_26988_27016 = state_26980__$1;
(statearr_26988_27016[(2)] = inst_26962);

(statearr_26988_27016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (6))){
var state_26980__$1 = state_26980;
var statearr_26989_27017 = state_26980__$1;
(statearr_26989_27017[(2)] = null);

(statearr_26989_27017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (17))){
var inst_26972 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26990_27018 = state_26980__$1;
(statearr_26990_27018[(2)] = inst_26972);

(statearr_26990_27018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (3))){
var inst_26977 = (state_26980[(2)]);
var inst_26978 = cljs.core.async.close_BANG_.call(null,out);
var state_26980__$1 = (function (){var statearr_26991 = state_26980;
(statearr_26991[(9)] = inst_26977);

return statearr_26991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26980__$1,inst_26978);
} else {
if((state_val_26981 === (12))){
var inst_26964 = reagi.core.complete_QMARK_.call(null,ref);
var state_26980__$1 = state_26980;
var statearr_26992_27019 = state_26980__$1;
(statearr_26992_27019[(2)] = inst_26964);

(statearr_26992_27019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (2))){
var inst_26943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26944 = cljs.core.async.timeout.call(null,interval);
var inst_26945 = [stop,inst_26944];
var inst_26946 = (new cljs.core.PersistentVector(null,2,(5),inst_26943,inst_26945,null));
var state_26980__$1 = state_26980;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26980__$1,(4),inst_26946);
} else {
if((state_val_26981 === (11))){
var inst_26959 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26993_27020 = state_26980__$1;
(statearr_26993_27020[(2)] = inst_26959);

(statearr_26993_27020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (9))){
var inst_26953 = (state_26980[(10)]);
var inst_26957 = reagi.core.box.call(null,inst_26953);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26980__$1,(11),out,inst_26957);
} else {
if((state_val_26981 === (5))){
var inst_26953 = (state_26980[(10)]);
var inst_26953__$1 = cljs.core.deref.call(null,ref);
var inst_26954 = (void 0 === inst_26953__$1);
var state_26980__$1 = (function (){var statearr_26994 = state_26980;
(statearr_26994[(10)] = inst_26953__$1);

return statearr_26994;
})();
if(cljs.core.truth_(inst_26954)){
var statearr_26995_27021 = state_26980__$1;
(statearr_26995_27021[(1)] = (8));

} else {
var statearr_26996_27022 = state_26980__$1;
(statearr_26996_27022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (14))){
var inst_26967 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
if(cljs.core.truth_(inst_26967)){
var statearr_26997_27023 = state_26980__$1;
(statearr_26997_27023[(1)] = (15));

} else {
var statearr_26998_27024 = state_26980__$1;
(statearr_26998_27024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (16))){
var state_26980__$1 = state_26980;
var statearr_26999_27025 = state_26980__$1;
(statearr_26999_27025[(2)] = null);

(statearr_26999_27025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (10))){
var inst_26962 = (state_26980[(8)]);
var inst_26961 = (state_26980[(2)]);
var inst_26962__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_26980__$1 = (function (){var statearr_27000 = state_26980;
(statearr_27000[(8)] = inst_26962__$1);

(statearr_27000[(11)] = inst_26961);

return statearr_27000;
})();
if(cljs.core.truth_(inst_26962__$1)){
var statearr_27001_27026 = state_26980__$1;
(statearr_27001_27026[(1)] = (12));

} else {
var statearr_27002_27027 = state_26980__$1;
(statearr_27002_27027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (8))){
var state_26980__$1 = state_26980;
var statearr_27003_27028 = state_26980__$1;
(statearr_27003_27028[(2)] = null);

(statearr_27003_27028[(1)] = (10));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__21093__auto__ = null;
var reagi$core$run_sampler_$_state_machine__21093__auto____0 = (function (){
var statearr_27007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27007[(0)] = reagi$core$run_sampler_$_state_machine__21093__auto__);

(statearr_27007[(1)] = (1));

return statearr_27007;
});
var reagi$core$run_sampler_$_state_machine__21093__auto____1 = (function (state_26980){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_26980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e27008){if((e27008 instanceof Object)){
var ex__21096__auto__ = e27008;
var statearr_27009_27029 = state_26980;
(statearr_27009_27029[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27030 = state_26980;
state_26980 = G__27030;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__21093__auto__ = function(state_26980){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__21093__auto____1.call(this,state_26980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__21093__auto____0;
reagi$core$run_sampler_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__21093__auto____1;
return reagi$core$run_sampler_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_27010 = f__21108__auto__.call(null);
(statearr_27010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_27010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__27032 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27032,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__27032,((function (G__27032,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__27032,stop))
);

return G__27032;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__21107__auto___27065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___27065,stream){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___27065,stream){
return (function (state_27055){
var state_val_27056 = (state_27055[(1)]);
if((state_val_27056 === (1))){
var inst_27049 = cljs.core.async.timeout.call(null,time_ms);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27055__$1,(2),inst_27049);
} else {
if((state_val_27056 === (2))){
var inst_27051 = (state_27055[(2)]);
var inst_27052 = reagi.core.port.call(null,stream);
var inst_27053 = cljs.core.async.close_BANG_.call(null,inst_27052);
var state_27055__$1 = (function (){var statearr_27057 = state_27055;
(statearr_27057[(7)] = inst_27051);

return statearr_27057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27055__$1,inst_27053);
} else {
return null;
}
}
});})(c__21107__auto___27065,stream))
;
return ((function (switch__21092__auto__,c__21107__auto___27065,stream){
return (function() {
var reagi$core$wait_$_state_machine__21093__auto__ = null;
var reagi$core$wait_$_state_machine__21093__auto____0 = (function (){
var statearr_27061 = [null,null,null,null,null,null,null,null];
(statearr_27061[(0)] = reagi$core$wait_$_state_machine__21093__auto__);

(statearr_27061[(1)] = (1));

return statearr_27061;
});
var reagi$core$wait_$_state_machine__21093__auto____1 = (function (state_27055){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_27055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object)){
var ex__21096__auto__ = e27062;
var statearr_27063_27066 = state_27055;
(statearr_27063_27066[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27067 = state_27055;
state_27055 = G__27067;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__21093__auto__ = function(state_27055){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__21093__auto____1.call(this,state_27055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__21093__auto____0;
reagi$core$wait_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__21093__auto____1;
return reagi$core$wait_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___27065,stream))
})();
var state__21109__auto__ = (function (){var statearr_27064 = f__21108__auto__.call(null);
(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___27065);

return statearr_27064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___27065,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_27254){
var state_val_27255 = (state_27254[(1)]);
if((state_val_27255 === (7))){
var inst_27199 = (state_27254[(7)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27254__$1,(9),inst_27199);
} else {
if((state_val_27255 === (20))){
var inst_27226 = (state_27254[(8)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27254__$1,(22),inst_27226);
} else {
if((state_val_27255 === (1))){
var inst_27190 = cljs.core.seq.call(null,chs);
var inst_27191 = inst_27190;
var inst_27192 = null;
var inst_27193 = (0);
var inst_27194 = (0);
var state_27254__$1 = (function (){var statearr_27256 = state_27254;
(statearr_27256[(9)] = inst_27192);

(statearr_27256[(10)] = inst_27193);

(statearr_27256[(11)] = inst_27191);

(statearr_27256[(12)] = inst_27194);

return statearr_27256;
})();
var statearr_27257_27304 = state_27254__$1;
(statearr_27257_27304[(2)] = null);

(statearr_27257_27304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (24))){
var state_27254__$1 = state_27254;
var statearr_27258_27305 = state_27254__$1;
(statearr_27258_27305[(2)] = null);

(statearr_27258_27305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (4))){
var inst_27192 = (state_27254[(9)]);
var inst_27194 = (state_27254[(12)]);
var inst_27199 = cljs.core._nth.call(null,inst_27192,inst_27194);
var state_27254__$1 = (function (){var statearr_27259 = state_27254;
(statearr_27259[(7)] = inst_27199);

return statearr_27259;
})();
var statearr_27260_27306 = state_27254__$1;
(statearr_27260_27306[(2)] = null);

(statearr_27260_27306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (15))){
var state_27254__$1 = state_27254;
var statearr_27261_27307 = state_27254__$1;
(statearr_27261_27307[(2)] = null);

(statearr_27261_27307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (21))){
var inst_27217 = (state_27254[(13)]);
var inst_27240 = (state_27254[(2)]);
var inst_27241 = cljs.core.next.call(null,inst_27217);
var inst_27191 = inst_27241;
var inst_27192 = null;
var inst_27193 = (0);
var inst_27194 = (0);
var state_27254__$1 = (function (){var statearr_27262 = state_27254;
(statearr_27262[(9)] = inst_27192);

(statearr_27262[(10)] = inst_27193);

(statearr_27262[(11)] = inst_27191);

(statearr_27262[(12)] = inst_27194);

(statearr_27262[(14)] = inst_27240);

return statearr_27262;
})();
var statearr_27263_27308 = state_27254__$1;
(statearr_27263_27308[(2)] = null);

(statearr_27263_27308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (13))){
var inst_27207 = (state_27254[(2)]);
var state_27254__$1 = (function (){var statearr_27264 = state_27254;
(statearr_27264[(15)] = inst_27207);

return statearr_27264;
})();
var statearr_27265_27309 = state_27254__$1;
(statearr_27265_27309[(2)] = null);

(statearr_27265_27309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (22))){
var inst_27229 = (state_27254[(16)]);
var inst_27229__$1 = (state_27254[(2)]);
var state_27254__$1 = (function (){var statearr_27266 = state_27254;
(statearr_27266[(16)] = inst_27229__$1);

return statearr_27266;
})();
if(cljs.core.truth_(inst_27229__$1)){
var statearr_27267_27310 = state_27254__$1;
(statearr_27267_27310[(1)] = (23));

} else {
var statearr_27268_27311 = state_27254__$1;
(statearr_27268_27311[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (6))){
var inst_27249 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27269_27312 = state_27254__$1;
(statearr_27269_27312[(2)] = inst_27249);

(statearr_27269_27312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (25))){
var inst_27238 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27270_27313 = state_27254__$1;
(statearr_27270_27313[(2)] = inst_27238);

(statearr_27270_27313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (17))){
var inst_27217 = (state_27254[(13)]);
var inst_27221 = cljs.core.chunk_first.call(null,inst_27217);
var inst_27222 = cljs.core.chunk_rest.call(null,inst_27217);
var inst_27223 = cljs.core.count.call(null,inst_27221);
var inst_27191 = inst_27222;
var inst_27192 = inst_27221;
var inst_27193 = inst_27223;
var inst_27194 = (0);
var state_27254__$1 = (function (){var statearr_27271 = state_27254;
(statearr_27271[(9)] = inst_27192);

(statearr_27271[(10)] = inst_27193);

(statearr_27271[(11)] = inst_27191);

(statearr_27271[(12)] = inst_27194);

return statearr_27271;
})();
var statearr_27272_27314 = state_27254__$1;
(statearr_27272_27314[(2)] = null);

(statearr_27272_27314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (3))){
var inst_27251 = (state_27254[(2)]);
var inst_27252 = cljs.core.async.close_BANG_.call(null,out);
var state_27254__$1 = (function (){var statearr_27273 = state_27254;
(statearr_27273[(17)] = inst_27251);

return statearr_27273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27254__$1,inst_27252);
} else {
if((state_val_27255 === (12))){
var inst_27211 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27274_27315 = state_27254__$1;
(statearr_27274_27315[(2)] = inst_27211);

(statearr_27274_27315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (2))){
var inst_27193 = (state_27254[(10)]);
var inst_27194 = (state_27254[(12)]);
var inst_27196 = (inst_27194 < inst_27193);
var inst_27197 = inst_27196;
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27197)){
var statearr_27275_27316 = state_27254__$1;
(statearr_27275_27316[(1)] = (4));

} else {
var statearr_27276_27317 = state_27254__$1;
(statearr_27276_27317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (23))){
var inst_27229 = (state_27254[(16)]);
var inst_27231 = reagi.core.unbox.call(null,inst_27229);
var inst_27232 = reagi.core.box.call(null,inst_27231);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27254__$1,(26),out,inst_27232);
} else {
if((state_val_27255 === (19))){
var inst_27244 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27277_27318 = state_27254__$1;
(statearr_27277_27318[(2)] = inst_27244);

(statearr_27277_27318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (11))){
var state_27254__$1 = state_27254;
var statearr_27278_27319 = state_27254__$1;
(statearr_27278_27319[(2)] = null);

(statearr_27278_27319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (9))){
var inst_27202 = (state_27254[(18)]);
var inst_27202__$1 = (state_27254[(2)]);
var state_27254__$1 = (function (){var statearr_27279 = state_27254;
(statearr_27279[(18)] = inst_27202__$1);

return statearr_27279;
})();
if(cljs.core.truth_(inst_27202__$1)){
var statearr_27280_27320 = state_27254__$1;
(statearr_27280_27320[(1)] = (10));

} else {
var statearr_27281_27321 = state_27254__$1;
(statearr_27281_27321[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (5))){
var inst_27217 = (state_27254[(13)]);
var inst_27191 = (state_27254[(11)]);
var inst_27217__$1 = cljs.core.seq.call(null,inst_27191);
var state_27254__$1 = (function (){var statearr_27282 = state_27254;
(statearr_27282[(13)] = inst_27217__$1);

return statearr_27282;
})();
if(inst_27217__$1){
var statearr_27283_27322 = state_27254__$1;
(statearr_27283_27322[(1)] = (14));

} else {
var statearr_27284_27323 = state_27254__$1;
(statearr_27284_27323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (14))){
var inst_27217 = (state_27254[(13)]);
var inst_27219 = cljs.core.chunked_seq_QMARK_.call(null,inst_27217);
var state_27254__$1 = state_27254;
if(inst_27219){
var statearr_27285_27324 = state_27254__$1;
(statearr_27285_27324[(1)] = (17));

} else {
var statearr_27286_27325 = state_27254__$1;
(statearr_27286_27325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (26))){
var inst_27234 = (state_27254[(2)]);
var state_27254__$1 = (function (){var statearr_27287 = state_27254;
(statearr_27287[(19)] = inst_27234);

return statearr_27287;
})();
var statearr_27288_27326 = state_27254__$1;
(statearr_27288_27326[(2)] = null);

(statearr_27288_27326[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (16))){
var inst_27247 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27289_27327 = state_27254__$1;
(statearr_27289_27327[(2)] = inst_27247);

(statearr_27289_27327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (10))){
var inst_27202 = (state_27254[(18)]);
var inst_27204 = reagi.core.unbox.call(null,inst_27202);
var inst_27205 = reagi.core.box.call(null,inst_27204);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27254__$1,(13),out,inst_27205);
} else {
if((state_val_27255 === (18))){
var inst_27217 = (state_27254[(13)]);
var inst_27226 = cljs.core.first.call(null,inst_27217);
var state_27254__$1 = (function (){var statearr_27293 = state_27254;
(statearr_27293[(8)] = inst_27226);

return statearr_27293;
})();
var statearr_27294_27328 = state_27254__$1;
(statearr_27294_27328[(2)] = null);

(statearr_27294_27328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (8))){
var inst_27192 = (state_27254[(9)]);
var inst_27193 = (state_27254[(10)]);
var inst_27191 = (state_27254[(11)]);
var inst_27194 = (state_27254[(12)]);
var inst_27213 = (state_27254[(2)]);
var inst_27214 = (inst_27194 + (1));
var tmp27290 = inst_27192;
var tmp27291 = inst_27193;
var tmp27292 = inst_27191;
var inst_27191__$1 = tmp27292;
var inst_27192__$1 = tmp27290;
var inst_27193__$1 = tmp27291;
var inst_27194__$1 = inst_27214;
var state_27254__$1 = (function (){var statearr_27295 = state_27254;
(statearr_27295[(9)] = inst_27192__$1);

(statearr_27295[(20)] = inst_27213);

(statearr_27295[(10)] = inst_27193__$1);

(statearr_27295[(11)] = inst_27191__$1);

(statearr_27295[(12)] = inst_27194__$1);

return statearr_27295;
})();
var statearr_27296_27329 = state_27254__$1;
(statearr_27296_27329[(2)] = null);

(statearr_27296_27329[(1)] = (2));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__21093__auto__ = null;
var reagi$core$join_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = reagi$core$join_ch_$_state_machine__21093__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var reagi$core$join_ch_$_state_machine__21093__auto____1 = (function (state_27254){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_27254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e27301){if((e27301 instanceof Object)){
var ex__21096__auto__ = e27301;
var statearr_27302_27330 = state_27254;
(statearr_27302_27330[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27254;
state_27254 = G__27331;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__21093__auto__ = function(state_27254){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__21093__auto____1.call(this,state_27254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__21093__auto____0;
reagi$core$join_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__21093__auto____1;
return reagi$core$join_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_27303 = f__21108__auto__.call(null);
(statearr_27303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__19857__auto__ = [];
var len__19850__auto___27334 = arguments.length;
var i__19851__auto___27335 = (0);
while(true){
if((i__19851__auto___27335 < len__19850__auto___27334)){
args__19857__auto__.push((arguments[i__19851__auto___27335]));

var G__27336 = (i__19851__auto___27335 + (1));
i__19851__auto___27335 = G__27336;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__27333 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27333,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__27333,((function (G__27333,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__27333,chs))
);

reagi.core.depend_on.call(null,G__27333,streams);

return G__27333;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq27332){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27332));
});

reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_27477){
var state_val_27478 = (state_27477[(1)]);
if((state_val_27478 === (7))){
var inst_27441 = (state_27477[(7)]);
var inst_27439 = (state_27477[(2)]);
var inst_27440 = cljs.core.nth.call(null,inst_27439,(0),null);
var inst_27441__$1 = cljs.core.nth.call(null,inst_27439,(1),null);
var inst_27442 = (inst_27441__$1 === valve);
var state_27477__$1 = (function (){var statearr_27479 = state_27477;
(statearr_27479[(8)] = inst_27440);

(statearr_27479[(7)] = inst_27441__$1);

return statearr_27479;
})();
if(cljs.core.truth_(inst_27442)){
var statearr_27480_27511 = state_27477__$1;
(statearr_27480_27511[(1)] = (8));

} else {
var statearr_27481_27512 = state_27477__$1;
(statearr_27481_27512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (1))){
var inst_27424 = [in$];
var inst_27425 = [null];
var inst_27426 = cljs.core.PersistentHashMap.fromArrays(inst_27424,inst_27425);
var inst_27427 = inst_27426;
var state_27477__$1 = (function (){var statearr_27482 = state_27477;
(statearr_27482[(9)] = inst_27427);

return statearr_27482;
})();
var statearr_27483_27513 = state_27477__$1;
(statearr_27483_27513[(2)] = null);

(statearr_27483_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (4))){
var inst_27427 = (state_27477[(9)]);
var inst_27435 = cljs.core.keys.call(null,inst_27427);
var inst_27436 = cljs.core.vec.call(null,inst_27435);
var inst_27437 = cljs.core.conj.call(null,inst_27436,valve);
var state_27477__$1 = state_27477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27477__$1,(7),inst_27437);
} else {
if((state_val_27478 === (15))){
var inst_27440 = (state_27477[(8)]);
var inst_27456 = reagi.core.unbox.call(null,inst_27440);
var inst_27457 = reagi.core.box.call(null,inst_27456);
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27477__$1,(17),out,inst_27457);
} else {
if((state_val_27478 === (13))){
var inst_27467 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27485_27514 = state_27477__$1;
(statearr_27485_27514[(2)] = inst_27467);

(statearr_27485_27514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (6))){
var inst_27472 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27486_27515 = state_27477__$1;
(statearr_27486_27515[(2)] = inst_27472);

(statearr_27486_27515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (17))){
var inst_27427 = (state_27477[(9)]);
var inst_27459 = (state_27477[(2)]);
var tmp27484 = inst_27427;
var inst_27427__$1 = tmp27484;
var state_27477__$1 = (function (){var statearr_27487 = state_27477;
(statearr_27487[(9)] = inst_27427__$1);

(statearr_27487[(10)] = inst_27459);

return statearr_27487;
})();
var statearr_27488_27516 = state_27477__$1;
(statearr_27488_27516[(2)] = null);

(statearr_27488_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (3))){
var inst_27474 = (state_27477[(2)]);
var inst_27475 = cljs.core.async.close_BANG_.call(null,out);
var state_27477__$1 = (function (){var statearr_27489 = state_27477;
(statearr_27489[(11)] = inst_27474);

return statearr_27489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27477__$1,inst_27475);
} else {
if((state_val_27478 === (12))){
var inst_27427 = (state_27477[(9)]);
var inst_27441 = (state_27477[(7)]);
var inst_27464 = cljs.core.dissoc.call(null,inst_27427,inst_27441);
var inst_27427__$1 = inst_27464;
var state_27477__$1 = (function (){var statearr_27490 = state_27477;
(statearr_27490[(9)] = inst_27427__$1);

return statearr_27490;
})();
var statearr_27491_27517 = state_27477__$1;
(statearr_27491_27517[(2)] = null);

(statearr_27491_27517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (2))){
var inst_27427 = (state_27477[(9)]);
var inst_27429 = cljs.core.empty_QMARK_.call(null,inst_27427);
var inst_27430 = !(inst_27429);
var state_27477__$1 = state_27477;
if(inst_27430){
var statearr_27492_27518 = state_27477__$1;
(statearr_27492_27518[(1)] = (4));

} else {
var statearr_27493_27519 = state_27477__$1;
(statearr_27493_27519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (11))){
var inst_27441 = (state_27477[(7)]);
var inst_27448 = (inst_27441 === in$);
var state_27477__$1 = state_27477;
if(cljs.core.truth_(inst_27448)){
var statearr_27494_27520 = state_27477__$1;
(statearr_27494_27520[(1)] = (14));

} else {
var statearr_27495_27521 = state_27477__$1;
(statearr_27495_27521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (9))){
var inst_27440 = (state_27477[(8)]);
var state_27477__$1 = state_27477;
if(cljs.core.truth_(inst_27440)){
var statearr_27496_27522 = state_27477__$1;
(statearr_27496_27522[(1)] = (11));

} else {
var statearr_27497_27523 = state_27477__$1;
(statearr_27497_27523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (5))){
var state_27477__$1 = state_27477;
var statearr_27498_27524 = state_27477__$1;
(statearr_27498_27524[(2)] = null);

(statearr_27498_27524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (14))){
var inst_27427 = (state_27477[(9)]);
var inst_27440 = (state_27477[(8)]);
var inst_27450 = reagi.core.unbox.call(null,inst_27440);
var inst_27451 = cljs.core.async.chan.call(null);
var inst_27452 = reagi.core.listen.call(null,inst_27450,inst_27451);
var inst_27453 = cljs.core.assoc.call(null,inst_27427,inst_27452,inst_27450);
var inst_27427__$1 = inst_27453;
var state_27477__$1 = (function (){var statearr_27499 = state_27477;
(statearr_27499[(9)] = inst_27427__$1);

return statearr_27499;
})();
var statearr_27500_27525 = state_27477__$1;
(statearr_27500_27525[(2)] = null);

(statearr_27500_27525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (16))){
var inst_27462 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27501_27526 = state_27477__$1;
(statearr_27501_27526[(2)] = inst_27462);

(statearr_27501_27526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (10))){
var inst_27469 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27502_27527 = state_27477__$1;
(statearr_27502_27527[(2)] = inst_27469);

(statearr_27502_27527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (8))){
var inst_27427 = (state_27477[(9)]);
var inst_27444 = cljs.core.keys.call(null,inst_27427);
var inst_27445 = reagi.core.close_all_BANG_.call(null,inst_27444);
var state_27477__$1 = state_27477;
var statearr_27503_27528 = state_27477__$1;
(statearr_27503_27528[(2)] = inst_27445);

(statearr_27503_27528[(1)] = (10));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__21093__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__21093__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27507[(0)] = reagi$core$flatten_ch_$_state_machine__21093__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var reagi$core$flatten_ch_$_state_machine__21093__auto____1 = (function (state_27477){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_27477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__21096__auto__ = e27508;
var statearr_27509_27529 = state_27477;
(statearr_27509_27529[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27530 = state_27477;
state_27477 = G__27530;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__21093__auto__ = function(state_27477){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__21093__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__21093__auto____1.call(this,state_27477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__21093__auto____0;
reagi$core$flatten_ch_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__21093__auto____1;
return reagi$core$flatten_ch_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_27510 = f__21108__auto__.call(null);
(statearr_27510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__27532 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__27532,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__27532,((function (G__27532,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__27532,ch,valve))
);

reagi.core.depend_on.call(null,G__27532,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__27532;
});

//# sourceMappingURL=core.js.map?rel=1492189015811