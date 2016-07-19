// Compiled by ClojureScript 1.7.170 {}
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
var x__17460__auto__ = (((signal == null))?null:signal);
var m__17461__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,signal);
} else {
var m__17461__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,signal);
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
if((false) || (x.reagi$core$Signal$)){
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
var x__17460__auto__ = (((x == null))?null:x);
var m__17461__auto__ = (reagi.core.unbox[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,x);
} else {
var m__17461__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,x);
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
reagi.core.Completed.prototype.reagi$core$Boxed$ = true;

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

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/Completed");
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
if(typeof reagi.core.t_reagi$core20276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core20276 = (function (box,x,meta20277){
this.box = box;
this.x = x;
this.meta20277 = meta20277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core20276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20278,meta20277__$1){
var self__ = this;
var _20278__$1 = this;
return (new reagi.core.t_reagi$core20276(self__.box,self__.x,meta20277__$1));
});

reagi.core.t_reagi$core20276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20278){
var self__ = this;
var _20278__$1 = this;
return self__.meta20277;
});

reagi.core.t_reagi$core20276.prototype.reagi$core$Boxed$ = true;

reagi.core.t_reagi$core20276.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core20276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Box a value to ensure it can be sent through a channel."], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta20277","meta20277",1046882461,null)], null);
});

reagi.core.t_reagi$core20276.cljs$lang$type = true;

reagi.core.t_reagi$core20276.cljs$lang$ctorStr = "reagi.core/t_reagi$core20276";

reagi.core.t_reagi$core20276.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/t_reagi$core20276");
});

reagi.core.__GT_t_reagi$core20276 = (function reagi$core$box_$___GT_t_reagi$core20276(box__$1,x__$1,meta20277){
return (new reagi.core.t_reagi$core20276(box__$1,x__$1,meta20277));
});

}

return (new reagi.core.t_reagi$core20276(reagi$core$box,x,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20279_SHARP_){
if((p1__20279_SHARP_ instanceof reagi.core.Completed)){
return p1__20279_SHARP_;
} else {
return self__.func.call(null);
}
});})(behavior__$1))
));
});

reagi.core.Behavior.prototype.reagi$core$Signal$ = true;

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

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/Behavior");
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
var x__17460__auto__ = (((ob == null))?null:ob);
var m__17461__auto__ = (reagi.core.port[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,ob);
} else {
var m__17461__auto____$1 = (reagi.core.port["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,ob);
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
var x__17460__auto__ = (((ob == null))?null:ob);
var m__17461__auto__ = (reagi.core.listen[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,ob,ch);
} else {
var m__17461__auto____$1 = (reagi.core.listen["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,ob,ch);
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
if(typeof reagi.core.t_reagi$core20515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core20515 = (function (mult_STAR_,ch,state,meta20516){
this.mult_STAR_ = mult_STAR_;
this.ch = ch;
this.state = state;
this.meta20516 = meta20516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core20515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_20517,meta20516__$1){
var self__ = this;
var _20517__$1 = this;
return (new reagi.core.t_reagi$core20515(self__.mult_STAR_,self__.ch,self__.state,meta20516__$1));
});})(state))
;

reagi.core.t_reagi$core20515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_20517){
var self__ = this;
var _20517__$1 = this;
return self__.meta20516;
});})(state))
;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mux$ = true;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mult$ = true;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__20519){
var vec__20520 = p__20519;
var o_QMARK_ = cljs.core.nth.call(null,vec__20520,(0),null);
var cs = cljs.core.nth.call(null,vec__20520,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__20518 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__20518,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__20518,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__20521){
var vec__20522 = p__20521;
var open_QMARK_ = cljs.core.nth.call(null,vec__20522,(0),null);
var cs = cljs.core.nth.call(null,vec__20522,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core20515.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__20523){
var vec__20524 = p__20523;
var open_QMARK_ = cljs.core.nth.call(null,vec__20524,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__20524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core20515.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult*","mult*",-731771795,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"A version of clojure.core.async/mult that fixes ASYNC-64.\n  This can be removed once a fix is released for core.async."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta20516","meta20516",-770947046,null)], null);
});})(state))
;

reagi.core.t_reagi$core20515.cljs$lang$type = true;

reagi.core.t_reagi$core20515.cljs$lang$ctorStr = "reagi.core/t_reagi$core20515";

reagi.core.t_reagi$core20515.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/t_reagi$core20515");
});})(state))
;

reagi.core.__GT_t_reagi$core20515 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core20515(mult_STAR___$1,ch__$1,state__$1,meta20516){
return (new reagi.core.t_reagi$core20515(mult_STAR___$1,ch__$1,state__$1,meta20516));
});})(state))
;

}

return (new reagi.core.t_reagi$core20515(reagi$core$mult_STAR_,ch,state,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18830__auto___20750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___20750,state,m,dchan,dctr,done){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___20750,state,m,dchan,dctr,done){
return (function (state_20661){
var state_val_20662 = (state_20661[(1)]);
if((state_val_20662 === (7))){
var inst_20657 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20663_20751 = state_20661__$1;
(statearr_20663_20751[(2)] = inst_20657);

(statearr_20663_20751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (20))){
var inst_20561 = (state_20661[(7)]);
var inst_20571 = cljs.core.first.call(null,inst_20561);
var inst_20572 = cljs.core.nth.call(null,inst_20571,(0),null);
var inst_20573 = cljs.core.nth.call(null,inst_20571,(1),null);
var state_20661__$1 = (function (){var statearr_20664 = state_20661;
(statearr_20664[(8)] = inst_20572);

return statearr_20664;
})();
if(cljs.core.truth_(inst_20573)){
var statearr_20665_20752 = state_20661__$1;
(statearr_20665_20752[(1)] = (22));

} else {
var statearr_20666_20753 = state_20661__$1;
(statearr_20666_20753[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (27))){
var inst_20604 = (state_20661[(9)]);
var inst_20609 = (state_20661[(10)]);
var inst_20527 = (state_20661[(11)]);
var inst_20602 = (state_20661[(12)]);
var inst_20609__$1 = cljs.core._nth.call(null,inst_20602,inst_20604);
var inst_20610 = cljs.core.async.put_BANG_.call(null,inst_20609__$1,inst_20527,done);
var state_20661__$1 = (function (){var statearr_20667 = state_20661;
(statearr_20667[(10)] = inst_20609__$1);

return statearr_20667;
})();
if(cljs.core.truth_(inst_20610)){
var statearr_20668_20754 = state_20661__$1;
(statearr_20668_20754[(1)] = (30));

} else {
var statearr_20669_20755 = state_20661__$1;
(statearr_20669_20755[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (1))){
var state_20661__$1 = state_20661;
var statearr_20670_20756 = state_20661__$1;
(statearr_20670_20756[(2)] = null);

(statearr_20670_20756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (24))){
var inst_20561 = (state_20661[(7)]);
var inst_20578 = (state_20661[(2)]);
var inst_20579 = cljs.core.next.call(null,inst_20561);
var inst_20541 = inst_20579;
var inst_20542 = null;
var inst_20543 = (0);
var inst_20544 = (0);
var state_20661__$1 = (function (){var statearr_20671 = state_20661;
(statearr_20671[(13)] = inst_20542);

(statearr_20671[(14)] = inst_20543);

(statearr_20671[(15)] = inst_20578);

(statearr_20671[(16)] = inst_20541);

(statearr_20671[(17)] = inst_20544);

return statearr_20671;
})();
var statearr_20672_20757 = state_20661__$1;
(statearr_20672_20757[(2)] = null);

(statearr_20672_20757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (39))){
var state_20661__$1 = state_20661;
var statearr_20676_20758 = state_20661__$1;
(statearr_20676_20758[(2)] = null);

(statearr_20676_20758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (4))){
var inst_20527 = (state_20661[(11)]);
var inst_20527__$1 = (state_20661[(2)]);
var inst_20528 = (inst_20527__$1 == null);
var state_20661__$1 = (function (){var statearr_20677 = state_20661;
(statearr_20677[(11)] = inst_20527__$1);

return statearr_20677;
})();
if(cljs.core.truth_(inst_20528)){
var statearr_20678_20759 = state_20661__$1;
(statearr_20678_20759[(1)] = (5));

} else {
var statearr_20679_20760 = state_20661__$1;
(statearr_20679_20760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (15))){
var inst_20542 = (state_20661[(13)]);
var inst_20543 = (state_20661[(14)]);
var inst_20541 = (state_20661[(16)]);
var inst_20544 = (state_20661[(17)]);
var inst_20557 = (state_20661[(2)]);
var inst_20558 = (inst_20544 + (1));
var tmp20673 = inst_20542;
var tmp20674 = inst_20543;
var tmp20675 = inst_20541;
var inst_20541__$1 = tmp20675;
var inst_20542__$1 = tmp20673;
var inst_20543__$1 = tmp20674;
var inst_20544__$1 = inst_20558;
var state_20661__$1 = (function (){var statearr_20680 = state_20661;
(statearr_20680[(13)] = inst_20542__$1);

(statearr_20680[(14)] = inst_20543__$1);

(statearr_20680[(18)] = inst_20557);

(statearr_20680[(16)] = inst_20541__$1);

(statearr_20680[(17)] = inst_20544__$1);

return statearr_20680;
})();
var statearr_20681_20761 = state_20661__$1;
(statearr_20681_20761[(2)] = null);

(statearr_20681_20761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (21))){
var inst_20582 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20685_20762 = state_20661__$1;
(statearr_20685_20762[(2)] = inst_20582);

(statearr_20685_20762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (31))){
var inst_20609 = (state_20661[(10)]);
var inst_20613 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20614 = cljs.core.async.untap_STAR_.call(null,m,inst_20609);
var state_20661__$1 = (function (){var statearr_20686 = state_20661;
(statearr_20686[(19)] = inst_20613);

return statearr_20686;
})();
var statearr_20687_20763 = state_20661__$1;
(statearr_20687_20763[(2)] = inst_20614);

(statearr_20687_20763[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (32))){
var inst_20603 = (state_20661[(20)]);
var inst_20604 = (state_20661[(9)]);
var inst_20601 = (state_20661[(21)]);
var inst_20602 = (state_20661[(12)]);
var inst_20616 = (state_20661[(2)]);
var inst_20617 = (inst_20604 + (1));
var tmp20682 = inst_20603;
var tmp20683 = inst_20601;
var tmp20684 = inst_20602;
var inst_20601__$1 = tmp20683;
var inst_20602__$1 = tmp20684;
var inst_20603__$1 = tmp20682;
var inst_20604__$1 = inst_20617;
var state_20661__$1 = (function (){var statearr_20688 = state_20661;
(statearr_20688[(20)] = inst_20603__$1);

(statearr_20688[(9)] = inst_20604__$1);

(statearr_20688[(22)] = inst_20616);

(statearr_20688[(21)] = inst_20601__$1);

(statearr_20688[(12)] = inst_20602__$1);

return statearr_20688;
})();
var statearr_20689_20764 = state_20661__$1;
(statearr_20689_20764[(2)] = null);

(statearr_20689_20764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (40))){
var inst_20629 = (state_20661[(23)]);
var inst_20633 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20634 = cljs.core.async.untap_STAR_.call(null,m,inst_20629);
var state_20661__$1 = (function (){var statearr_20690 = state_20661;
(statearr_20690[(24)] = inst_20633);

return statearr_20690;
})();
var statearr_20691_20765 = state_20661__$1;
(statearr_20691_20765[(2)] = inst_20634);

(statearr_20691_20765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (33))){
var inst_20620 = (state_20661[(25)]);
var inst_20622 = cljs.core.chunked_seq_QMARK_.call(null,inst_20620);
var state_20661__$1 = state_20661;
if(inst_20622){
var statearr_20692_20766 = state_20661__$1;
(statearr_20692_20766[(1)] = (36));

} else {
var statearr_20693_20767 = state_20661__$1;
(statearr_20693_20767[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (13))){
var inst_20551 = (state_20661[(26)]);
var inst_20554 = cljs.core.async.close_BANG_.call(null,inst_20551);
var state_20661__$1 = state_20661;
var statearr_20694_20768 = state_20661__$1;
(statearr_20694_20768[(2)] = inst_20554);

(statearr_20694_20768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (22))){
var inst_20572 = (state_20661[(8)]);
var inst_20575 = cljs.core.async.close_BANG_.call(null,inst_20572);
var state_20661__$1 = state_20661;
var statearr_20695_20769 = state_20661__$1;
(statearr_20695_20769[(2)] = inst_20575);

(statearr_20695_20769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (36))){
var inst_20620 = (state_20661[(25)]);
var inst_20624 = cljs.core.chunk_first.call(null,inst_20620);
var inst_20625 = cljs.core.chunk_rest.call(null,inst_20620);
var inst_20626 = cljs.core.count.call(null,inst_20624);
var inst_20601 = inst_20625;
var inst_20602 = inst_20624;
var inst_20603 = inst_20626;
var inst_20604 = (0);
var state_20661__$1 = (function (){var statearr_20696 = state_20661;
(statearr_20696[(20)] = inst_20603);

(statearr_20696[(9)] = inst_20604);

(statearr_20696[(21)] = inst_20601);

(statearr_20696[(12)] = inst_20602);

return statearr_20696;
})();
var statearr_20697_20770 = state_20661__$1;
(statearr_20697_20770[(2)] = null);

(statearr_20697_20770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (41))){
var inst_20620 = (state_20661[(25)]);
var inst_20636 = (state_20661[(2)]);
var inst_20637 = cljs.core.next.call(null,inst_20620);
var inst_20601 = inst_20637;
var inst_20602 = null;
var inst_20603 = (0);
var inst_20604 = (0);
var state_20661__$1 = (function (){var statearr_20698 = state_20661;
(statearr_20698[(20)] = inst_20603);

(statearr_20698[(9)] = inst_20604);

(statearr_20698[(27)] = inst_20636);

(statearr_20698[(21)] = inst_20601);

(statearr_20698[(12)] = inst_20602);

return statearr_20698;
})();
var statearr_20699_20771 = state_20661__$1;
(statearr_20699_20771[(2)] = null);

(statearr_20699_20771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (43))){
var state_20661__$1 = state_20661;
var statearr_20700_20772 = state_20661__$1;
(statearr_20700_20772[(2)] = null);

(statearr_20700_20772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (29))){
var inst_20645 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20701_20773 = state_20661__$1;
(statearr_20701_20773[(2)] = inst_20645);

(statearr_20701_20773[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (44))){
var inst_20654 = (state_20661[(2)]);
var state_20661__$1 = (function (){var statearr_20702 = state_20661;
(statearr_20702[(28)] = inst_20654);

return statearr_20702;
})();
var statearr_20703_20774 = state_20661__$1;
(statearr_20703_20774[(2)] = null);

(statearr_20703_20774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (6))){
var inst_20593 = (state_20661[(29)]);
var inst_20591 = cljs.core.deref.call(null,state);
var inst_20592 = cljs.core.second.call(null,inst_20591);
var inst_20593__$1 = cljs.core.keys.call(null,inst_20592);
var inst_20594 = cljs.core.count.call(null,inst_20593__$1);
var inst_20595 = cljs.core.reset_BANG_.call(null,dctr,inst_20594);
var inst_20600 = cljs.core.seq.call(null,inst_20593__$1);
var inst_20601 = inst_20600;
var inst_20602 = null;
var inst_20603 = (0);
var inst_20604 = (0);
var state_20661__$1 = (function (){var statearr_20704 = state_20661;
(statearr_20704[(29)] = inst_20593__$1);

(statearr_20704[(30)] = inst_20595);

(statearr_20704[(20)] = inst_20603);

(statearr_20704[(9)] = inst_20604);

(statearr_20704[(21)] = inst_20601);

(statearr_20704[(12)] = inst_20602);

return statearr_20704;
})();
var statearr_20705_20775 = state_20661__$1;
(statearr_20705_20775[(2)] = null);

(statearr_20705_20775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (28))){
var inst_20620 = (state_20661[(25)]);
var inst_20601 = (state_20661[(21)]);
var inst_20620__$1 = cljs.core.seq.call(null,inst_20601);
var state_20661__$1 = (function (){var statearr_20706 = state_20661;
(statearr_20706[(25)] = inst_20620__$1);

return statearr_20706;
})();
if(inst_20620__$1){
var statearr_20707_20776 = state_20661__$1;
(statearr_20707_20776[(1)] = (33));

} else {
var statearr_20708_20777 = state_20661__$1;
(statearr_20708_20777[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (25))){
var inst_20603 = (state_20661[(20)]);
var inst_20604 = (state_20661[(9)]);
var inst_20606 = (inst_20604 < inst_20603);
var inst_20607 = inst_20606;
var state_20661__$1 = state_20661;
if(cljs.core.truth_(inst_20607)){
var statearr_20709_20778 = state_20661__$1;
(statearr_20709_20778[(1)] = (27));

} else {
var statearr_20710_20779 = state_20661__$1;
(statearr_20710_20779[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (34))){
var state_20661__$1 = state_20661;
var statearr_20711_20780 = state_20661__$1;
(statearr_20711_20780[(2)] = null);

(statearr_20711_20780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (17))){
var state_20661__$1 = state_20661;
var statearr_20712_20781 = state_20661__$1;
(statearr_20712_20781[(2)] = null);

(statearr_20712_20781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (3))){
var inst_20659 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20661__$1,inst_20659);
} else {
if((state_val_20662 === (12))){
var inst_20587 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20713_20782 = state_20661__$1;
(statearr_20713_20782[(2)] = inst_20587);

(statearr_20713_20782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (2))){
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(4),ch);
} else {
if((state_val_20662 === (23))){
var state_20661__$1 = state_20661;
var statearr_20714_20783 = state_20661__$1;
(statearr_20714_20783[(2)] = null);

(statearr_20714_20783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (35))){
var inst_20643 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20715_20784 = state_20661__$1;
(statearr_20715_20784[(2)] = inst_20643);

(statearr_20715_20784[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (19))){
var inst_20561 = (state_20661[(7)]);
var inst_20565 = cljs.core.chunk_first.call(null,inst_20561);
var inst_20566 = cljs.core.chunk_rest.call(null,inst_20561);
var inst_20567 = cljs.core.count.call(null,inst_20565);
var inst_20541 = inst_20566;
var inst_20542 = inst_20565;
var inst_20543 = inst_20567;
var inst_20544 = (0);
var state_20661__$1 = (function (){var statearr_20716 = state_20661;
(statearr_20716[(13)] = inst_20542);

(statearr_20716[(14)] = inst_20543);

(statearr_20716[(16)] = inst_20541);

(statearr_20716[(17)] = inst_20544);

return statearr_20716;
})();
var statearr_20717_20785 = state_20661__$1;
(statearr_20717_20785[(2)] = null);

(statearr_20717_20785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (11))){
var inst_20561 = (state_20661[(7)]);
var inst_20541 = (state_20661[(16)]);
var inst_20561__$1 = cljs.core.seq.call(null,inst_20541);
var state_20661__$1 = (function (){var statearr_20718 = state_20661;
(statearr_20718[(7)] = inst_20561__$1);

return statearr_20718;
})();
if(inst_20561__$1){
var statearr_20719_20786 = state_20661__$1;
(statearr_20719_20786[(1)] = (16));

} else {
var statearr_20720_20787 = state_20661__$1;
(statearr_20720_20787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (9))){
var inst_20589 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20721_20788 = state_20661__$1;
(statearr_20721_20788[(2)] = inst_20589);

(statearr_20721_20788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (5))){
var inst_20527 = (state_20661[(11)]);
var inst_20532 = (function (){var val = inst_20527;
return ((function (val,inst_20527,state_val_20662,c__18830__auto___20750,state,m,dchan,dctr,done){
return (function (p__20531){
var vec__20722 = p__20531;
var _ = cljs.core.nth.call(null,vec__20722,(0),null);
var cs = cljs.core.nth.call(null,vec__20722,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_20527,state_val_20662,c__18830__auto___20750,state,m,dchan,dctr,done))
})();
var inst_20533 = cljs.core.swap_BANG_.call(null,state,inst_20532);
var inst_20534 = cljs.core.nth.call(null,inst_20533,(0),null);
var inst_20535 = cljs.core.nth.call(null,inst_20533,(1),null);
var inst_20540 = cljs.core.seq.call(null,inst_20535);
var inst_20541 = inst_20540;
var inst_20542 = null;
var inst_20543 = (0);
var inst_20544 = (0);
var state_20661__$1 = (function (){var statearr_20723 = state_20661;
(statearr_20723[(31)] = inst_20534);

(statearr_20723[(13)] = inst_20542);

(statearr_20723[(14)] = inst_20543);

(statearr_20723[(16)] = inst_20541);

(statearr_20723[(17)] = inst_20544);

return statearr_20723;
})();
var statearr_20724_20789 = state_20661__$1;
(statearr_20724_20789[(2)] = null);

(statearr_20724_20789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (14))){
var state_20661__$1 = state_20661;
var statearr_20725_20790 = state_20661__$1;
(statearr_20725_20790[(2)] = null);

(statearr_20725_20790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (45))){
var inst_20651 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20726_20791 = state_20661__$1;
(statearr_20726_20791[(2)] = inst_20651);

(statearr_20726_20791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (26))){
var inst_20593 = (state_20661[(29)]);
var inst_20647 = (state_20661[(2)]);
var inst_20648 = cljs.core.seq.call(null,inst_20593);
var state_20661__$1 = (function (){var statearr_20727 = state_20661;
(statearr_20727[(32)] = inst_20647);

return statearr_20727;
})();
if(inst_20648){
var statearr_20728_20792 = state_20661__$1;
(statearr_20728_20792[(1)] = (42));

} else {
var statearr_20729_20793 = state_20661__$1;
(statearr_20729_20793[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (16))){
var inst_20561 = (state_20661[(7)]);
var inst_20563 = cljs.core.chunked_seq_QMARK_.call(null,inst_20561);
var state_20661__$1 = state_20661;
if(inst_20563){
var statearr_20730_20794 = state_20661__$1;
(statearr_20730_20794[(1)] = (19));

} else {
var statearr_20731_20795 = state_20661__$1;
(statearr_20731_20795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (38))){
var inst_20640 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20732_20796 = state_20661__$1;
(statearr_20732_20796[(2)] = inst_20640);

(statearr_20732_20796[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (30))){
var state_20661__$1 = state_20661;
var statearr_20733_20797 = state_20661__$1;
(statearr_20733_20797[(2)] = null);

(statearr_20733_20797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (10))){
var inst_20542 = (state_20661[(13)]);
var inst_20544 = (state_20661[(17)]);
var inst_20550 = cljs.core._nth.call(null,inst_20542,inst_20544);
var inst_20551 = cljs.core.nth.call(null,inst_20550,(0),null);
var inst_20552 = cljs.core.nth.call(null,inst_20550,(1),null);
var state_20661__$1 = (function (){var statearr_20734 = state_20661;
(statearr_20734[(26)] = inst_20551);

return statearr_20734;
})();
if(cljs.core.truth_(inst_20552)){
var statearr_20735_20798 = state_20661__$1;
(statearr_20735_20798[(1)] = (13));

} else {
var statearr_20736_20799 = state_20661__$1;
(statearr_20736_20799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (18))){
var inst_20585 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20737_20800 = state_20661__$1;
(statearr_20737_20800[(2)] = inst_20585);

(statearr_20737_20800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (42))){
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(45),dchan);
} else {
if((state_val_20662 === (37))){
var inst_20629 = (state_20661[(23)]);
var inst_20620 = (state_20661[(25)]);
var inst_20527 = (state_20661[(11)]);
var inst_20629__$1 = cljs.core.first.call(null,inst_20620);
var inst_20630 = cljs.core.async.put_BANG_.call(null,inst_20629__$1,inst_20527,done);
var state_20661__$1 = (function (){var statearr_20738 = state_20661;
(statearr_20738[(23)] = inst_20629__$1);

return statearr_20738;
})();
if(cljs.core.truth_(inst_20630)){
var statearr_20739_20801 = state_20661__$1;
(statearr_20739_20801[(1)] = (39));

} else {
var statearr_20740_20802 = state_20661__$1;
(statearr_20740_20802[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (8))){
var inst_20543 = (state_20661[(14)]);
var inst_20544 = (state_20661[(17)]);
var inst_20546 = (inst_20544 < inst_20543);
var inst_20547 = inst_20546;
var state_20661__$1 = state_20661;
if(cljs.core.truth_(inst_20547)){
var statearr_20741_20803 = state_20661__$1;
(statearr_20741_20803[(1)] = (10));

} else {
var statearr_20742_20804 = state_20661__$1;
(statearr_20742_20804[(1)] = (11));

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
});})(c__18830__auto___20750,state,m,dchan,dctr,done))
;
return ((function (switch__18809__auto__,c__18830__auto___20750,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__18810__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_20746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20746[(0)] = reagi$core$mult_STAR__$_state_machine__18810__auto__);

(statearr_20746[(1)] = (1));

return statearr_20746;
});
var reagi$core$mult_STAR__$_state_machine__18810__auto____1 = (function (state_20661){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_20661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e20747){if((e20747 instanceof Object)){
var ex__18813__auto__ = e20747;
var statearr_20748_20805 = state_20661;
(statearr_20748_20805[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_20661;
state_20661 = G__20806;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__18810__auto__ = function(state_20661){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__18810__auto____1.call(this,state_20661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__18810__auto____0;
reagi$core$mult_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__18810__auto____1;
return reagi$core$mult_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___20750,state,m,dchan,dctr,done))
})();
var state__18832__auto__ = (function (){var statearr_20749 = f__18831__auto__.call(null);
(statearr_20749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___20750);

return statearr_20749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___20750,state,m,dchan,dctr,done))
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
var temp__4423__auto__ = cljs.core.deref.call(null,head);
if(cljs.core.truth_(temp__4423__auto__)){
var hd = temp__4423__auto__;
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
var x__17460__auto__ = (((x == null))?null:x);
var m__17461__auto__ = (reagi.core.dispose[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,x);
} else {
var m__17461__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,x);
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
var x__17460__auto__ = (((x == null))?null:x);
var m__17461__auto__ = (reagi.core.on_dispose[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,x,f);
} else {
var m__17461__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,x,f);
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
var c__18830__auto___20862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___20862,stream,self____$1){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___20862,stream,self____$1){
return (function (state_20812){
var state_val_20813 = (state_20812[(1)]);
if((state_val_20813 === (1))){
var inst_20808 = reagi.core.box.call(null,msg);
var state_20812__$1 = state_20812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20812__$1,(2),self__.ch,inst_20808);
} else {
if((state_val_20813 === (2))){
var inst_20810 = (state_20812[(2)]);
var state_20812__$1 = state_20812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20812__$1,inst_20810);
} else {
return null;
}
}
});})(c__18830__auto___20862,stream,self____$1))
;
return ((function (switch__18809__auto__,c__18830__auto___20862,stream,self____$1){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_20817 = [null,null,null,null,null,null,null];
(statearr_20817[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_20817[(1)] = (1));

return statearr_20817;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_20812){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_20812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e20818){if((e20818 instanceof Object)){
var ex__18813__auto__ = e20818;
var statearr_20819_20863 = state_20812;
(statearr_20819_20863[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20864 = state_20812;
state_20812 = G__20864;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_20812){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_20812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___20862,stream,self____$1))
})();
var state__18832__auto__ = (function (){var statearr_20820 = f__18831__auto__.call(null);
(statearr_20820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___20862);

return statearr_20820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___20862,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args20807){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20807)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__18830__auto___20865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___20865,stream){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___20865,stream){
return (function (state_20825){
var state_val_20826 = (state_20825[(1)]);
if((state_val_20826 === (1))){
var inst_20821 = reagi.core.box.call(null,msg);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20825__$1,(2),self__.ch,inst_20821);
} else {
if((state_val_20826 === (2))){
var inst_20823 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20825__$1,inst_20823);
} else {
return null;
}
}
});})(c__18830__auto___20865,stream))
;
return ((function (switch__18809__auto__,c__18830__auto___20865,stream){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_20830 = [null,null,null,null,null,null,null];
(statearr_20830[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_20830[(1)] = (1));

return statearr_20830;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_20825){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_20825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e20831){if((e20831 instanceof Object)){
var ex__18813__auto__ = e20831;
var statearr_20832_20866 = state_20825;
(statearr_20832_20866[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20867 = state_20825;
state_20825 = G__20867;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_20825){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_20825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___20865,stream))
})();
var state__18832__auto__ = (function (){var statearr_20833 = f__18831__auto__.call(null);
(statearr_20833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___20865);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___20865,stream))
);


return stream;
});

reagi.core.Events.prototype.reagi$core$Observable$ = true;

reagi.core.Events.prototype.reagi$core$Observable$port$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});

reagi.core.Events.prototype.reagi$core$Observable$listen$arity$2 = (function (_,channel){
var self__ = this;
var ___$1 = this;
var c__18830__auto___20868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___20868,___$1){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___20868,___$1){
return (function (state_20843){
var state_val_20844 = (state_20843[(1)]);
if((state_val_20844 === (1))){
var inst_20834 = (state_20843[(7)]);
var inst_20834__$1 = cljs.core.deref.call(null,self__.head);
var state_20843__$1 = (function (){var statearr_20845 = state_20843;
(statearr_20845[(7)] = inst_20834__$1);

return statearr_20845;
})();
if(cljs.core.truth_(inst_20834__$1)){
var statearr_20846_20869 = state_20843__$1;
(statearr_20846_20869[(1)] = (2));

} else {
var statearr_20847_20870 = state_20843__$1;
(statearr_20847_20870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (2))){
var inst_20834 = (state_20843[(7)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20843__$1,(5),channel,inst_20834);
} else {
if((state_val_20844 === (3))){
var state_20843__$1 = state_20843;
var statearr_20848_20871 = state_20843__$1;
(statearr_20848_20871[(2)] = null);

(statearr_20848_20871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (4))){
var inst_20840 = (state_20843[(2)]);
var inst_20841 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_20843__$1 = (function (){var statearr_20849 = state_20843;
(statearr_20849[(8)] = inst_20840);

return statearr_20849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20843__$1,inst_20841);
} else {
if((state_val_20844 === (5))){
var inst_20837 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20850_20872 = state_20843__$1;
(statearr_20850_20872[(2)] = inst_20837);

(statearr_20850_20872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__18830__auto___20868,___$1))
;
return ((function (switch__18809__auto__,c__18830__auto___20868,___$1){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_20854 = [null,null,null,null,null,null,null,null,null];
(statearr_20854[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_20854[(1)] = (1));

return statearr_20854;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_20843){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_20843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e20855){if((e20855 instanceof Object)){
var ex__18813__auto__ = e20855;
var statearr_20856_20873 = state_20843;
(statearr_20856_20873[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20874 = state_20843;
state_20843 = G__20874;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_20843){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_20843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___20868,___$1))
})();
var state__18832__auto__ = (function (){var statearr_20857 = f__18831__auto__.call(null);
(statearr_20857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___20868);

return statearr_20857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___20868,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = true;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__16805__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = true;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__20858_20875 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__20859_20876 = null;
var count__20860_20877 = (0);
var i__20861_20878 = (0);
while(true){
if((i__20861_20878 < count__20860_20877)){
var d_20879 = cljs.core._nth.call(null,chunk__20859_20876,i__20861_20878);
d_20879.call(null);

var G__20880 = seq__20858_20875;
var G__20881 = chunk__20859_20876;
var G__20882 = count__20860_20877;
var G__20883 = (i__20861_20878 + (1));
seq__20858_20875 = G__20880;
chunk__20859_20876 = G__20881;
count__20860_20877 = G__20882;
i__20861_20878 = G__20883;
continue;
} else {
var temp__4425__auto___20884 = cljs.core.seq.call(null,seq__20858_20875);
if(temp__4425__auto___20884){
var seq__20858_20885__$1 = temp__4425__auto___20884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20858_20885__$1)){
var c__17608__auto___20886 = cljs.core.chunk_first.call(null,seq__20858_20885__$1);
var G__20887 = cljs.core.chunk_rest.call(null,seq__20858_20885__$1);
var G__20888 = c__17608__auto___20886;
var G__20889 = cljs.core.count.call(null,c__17608__auto___20886);
var G__20890 = (0);
seq__20858_20875 = G__20887;
chunk__20859_20876 = G__20888;
count__20860_20877 = G__20889;
i__20861_20878 = G__20890;
continue;
} else {
var d_20891 = cljs.core.first.call(null,seq__20858_20885__$1);
d_20891.call(null);

var G__20892 = cljs.core.next.call(null,seq__20858_20885__$1);
var G__20893 = null;
var G__20894 = (0);
var G__20895 = (0);
seq__20858_20875 = G__20892;
chunk__20859_20876 = G__20893;
count__20860_20877 = G__20894;
i__20861_20878 = G__20895;
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

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/Events");
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
var args20896 = [];
var len__17863__auto___20946 = arguments.length;
var i__17864__auto___20947 = (0);
while(true){
if((i__17864__auto___20947 < len__17863__auto___20946)){
args20896.push((arguments[i__17864__auto___20947]));

var G__20948 = (i__17864__auto___20947 + (1));
i__17864__auto___20947 = G__20948;
continue;
} else {
}
break;
}

var G__20898 = args20896.length;
switch (G__20898) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20896.length)].join('')));

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
var c__18830__auto___20950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___20950,in$,closed,head,out,mult){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___20950,in$,closed,head,out,mult){
return (function (state_20922){
var state_val_20923 = (state_20922[(1)]);
if((state_val_20923 === (7))){
var inst_20908 = (state_20922[(7)]);
var inst_20908__$1 = (state_20922[(2)]);
var state_20922__$1 = (function (){var statearr_20924 = state_20922;
(statearr_20924[(7)] = inst_20908__$1);

return statearr_20924;
})();
if(cljs.core.truth_(inst_20908__$1)){
var statearr_20925_20951 = state_20922__$1;
(statearr_20925_20951[(1)] = (8));

} else {
var statearr_20926_20952 = state_20922__$1;
(statearr_20926_20952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (1))){
var inst_20899 = init;
var state_20922__$1 = (function (){var statearr_20927 = state_20922;
(statearr_20927[(8)] = inst_20899);

return statearr_20927;
})();
var statearr_20928_20953 = state_20922__$1;
(statearr_20928_20953[(2)] = null);

(statearr_20928_20953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (4))){
var inst_20903 = cljs.core.async.close_BANG_.call(null,in$);
var state_20922__$1 = state_20922;
var statearr_20929_20954 = state_20922__$1;
(statearr_20929_20954[(2)] = inst_20903);

(statearr_20929_20954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (6))){
var inst_20906 = (state_20922[(2)]);
var state_20922__$1 = (function (){var statearr_20930 = state_20922;
(statearr_20930[(9)] = inst_20906);

return statearr_20930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20922__$1,(7),in$);
} else {
if((state_val_20923 === (3))){
var inst_20918 = (state_20922[(2)]);
var inst_20919 = cljs.core.async.close_BANG_.call(null,out);
var inst_20920 = cljs.core.reset_BANG_.call(null,closed,true);
var state_20922__$1 = (function (){var statearr_20931 = state_20922;
(statearr_20931[(10)] = inst_20918);

(statearr_20931[(11)] = inst_20919);

return statearr_20931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20922__$1,inst_20920);
} else {
if((state_val_20923 === (2))){
var inst_20899 = (state_20922[(8)]);
var inst_20901 = (inst_20899 instanceof reagi.core.Completed);
var state_20922__$1 = state_20922;
if(cljs.core.truth_(inst_20901)){
var statearr_20932_20955 = state_20922__$1;
(statearr_20932_20955[(1)] = (4));

} else {
var statearr_20933_20956 = state_20922__$1;
(statearr_20933_20956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (11))){
var inst_20908 = (state_20922[(7)]);
var inst_20911 = (state_20922[(2)]);
var inst_20912 = cljs.core.reset_BANG_.call(null,head,inst_20908);
var inst_20899 = inst_20908;
var state_20922__$1 = (function (){var statearr_20934 = state_20922;
(statearr_20934[(12)] = inst_20911);

(statearr_20934[(8)] = inst_20899);

(statearr_20934[(13)] = inst_20912);

return statearr_20934;
})();
var statearr_20935_20957 = state_20922__$1;
(statearr_20935_20957[(2)] = null);

(statearr_20935_20957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (9))){
var state_20922__$1 = state_20922;
var statearr_20936_20958 = state_20922__$1;
(statearr_20936_20958[(2)] = null);

(statearr_20936_20958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (5))){
var state_20922__$1 = state_20922;
var statearr_20937_20959 = state_20922__$1;
(statearr_20937_20959[(2)] = null);

(statearr_20937_20959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (10))){
var inst_20916 = (state_20922[(2)]);
var state_20922__$1 = state_20922;
var statearr_20938_20960 = state_20922__$1;
(statearr_20938_20960[(2)] = inst_20916);

(statearr_20938_20960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20923 === (8))){
var inst_20908 = (state_20922[(7)]);
var state_20922__$1 = state_20922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20922__$1,(11),out,inst_20908);
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
});})(c__18830__auto___20950,in$,closed,head,out,mult))
;
return ((function (switch__18809__auto__,c__18830__auto___20950,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_20942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20942[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_20942[(1)] = (1));

return statearr_20942;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_20922){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_20922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e20943){if((e20943 instanceof Object)){
var ex__18813__auto__ = e20943;
var statearr_20944_20961 = state_20922;
(statearr_20944_20961[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20962 = state_20922;
state_20922 = G__20962;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_20922){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_20922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___20950,in$,closed,head,out,mult))
})();
var state__18832__auto__ = (function (){var statearr_20945 = f__18831__auto__.call(null);
(statearr_20945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___20950);

return statearr_20945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___20950,in$,closed,head,out,mult))
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
var args20963 = [];
var len__17863__auto___20973 = arguments.length;
var i__17864__auto___20974 = (0);
while(true){
if((i__17864__auto___20974 < len__17863__auto___20973)){
args20963.push((arguments[i__17864__auto___20974]));

var G__20975 = (i__17864__auto___20974 + (1));
i__17864__auto___20974 = G__20975;
continue;
} else {
}
break;
}

var G__20968 = args20963.length;
switch (G__20968) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args20963.slice((2)),(0)));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17882__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__20969 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__20970 = null;
var count__20971 = (0);
var i__20972 = (0);
while(true){
if((i__20972 < count__20971)){
var m = cljs.core._nth.call(null,chunk__20970,i__20972);
stream.call(null,m);

var G__20977 = seq__20969;
var G__20978 = chunk__20970;
var G__20979 = count__20971;
var G__20980 = (i__20972 + (1));
seq__20969 = G__20977;
chunk__20970 = G__20978;
count__20971 = G__20979;
i__20972 = G__20980;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20969);
if(temp__4425__auto__){
var seq__20969__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20969__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__20969__$1);
var G__20981 = cljs.core.chunk_rest.call(null,seq__20969__$1);
var G__20982 = c__17608__auto__;
var G__20983 = cljs.core.count.call(null,c__17608__auto__);
var G__20984 = (0);
seq__20969 = G__20981;
chunk__20970 = G__20982;
count__20971 = G__20983;
i__20972 = G__20984;
continue;
} else {
var m = cljs.core.first.call(null,seq__20969__$1);
stream.call(null,m);

var G__20985 = cljs.core.next.call(null,seq__20969__$1);
var G__20986 = null;
var G__20987 = (0);
var G__20988 = (0);
seq__20969 = G__20985;
chunk__20970 = G__20986;
count__20971 = G__20987;
i__20972 = G__20988;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq20964){
var G__20965 = cljs.core.first.call(null,seq20964);
var seq20964__$1 = cljs.core.next.call(null,seq20964);
var G__20966 = cljs.core.first.call(null,seq20964__$1);
var seq20964__$2 = cljs.core.next.call(null,seq20964__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__20965,G__20966,seq20964__$2);
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
var seq__20993 = cljs.core.seq.call(null,chs);
var chunk__20994 = null;
var count__20995 = (0);
var i__20996 = (0);
while(true){
if((i__20996 < count__20995)){
var ch = cljs.core._nth.call(null,chunk__20994,i__20996);
cljs.core.async.close_BANG_.call(null,ch);

var G__20997 = seq__20993;
var G__20998 = chunk__20994;
var G__20999 = count__20995;
var G__21000 = (i__20996 + (1));
seq__20993 = G__20997;
chunk__20994 = G__20998;
count__20995 = G__20999;
i__20996 = G__21000;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20993);
if(temp__4425__auto__){
var seq__20993__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20993__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__20993__$1);
var G__21001 = cljs.core.chunk_rest.call(null,seq__20993__$1);
var G__21002 = c__17608__auto__;
var G__21003 = cljs.core.count.call(null,c__17608__auto__);
var G__21004 = (0);
seq__20993 = G__21001;
chunk__20994 = G__21002;
count__20995 = G__21003;
i__20996 = G__21004;
continue;
} else {
var ch = cljs.core.first.call(null,seq__20993__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__21005 = cljs.core.next.call(null,seq__20993__$1);
var G__21006 = null;
var G__21007 = (0);
var G__21008 = (0);
seq__20993 = G__21005;
chunk__20994 = G__21006;
count__20995 = G__21007;
i__20996 = G__21008;
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
return cljs.core.mapv.call(null,(function (p1__21009_SHARP_){
return reagi.core.listen.call(null,p1__21009_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21013 = arguments.length;
var i__17864__auto___21014 = (0);
while(true){
if((i__17864__auto___21014 < len__17863__auto___21013)){
args__17870__auto__.push((arguments[i__17864__auto___21014]));

var G__21015 = (i__17864__auto___21014 + (1));
i__17864__auto___21014 = G__21015;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

reagi.core.connect_port.cljs$lang$applyTo = (function (seq21010){
var G__21011 = cljs.core.first.call(null,seq21010);
var seq21010__$1 = cljs.core.next.call(null,seq21010);
var G__21012 = cljs.core.first.call(null,seq21010__$1);
var seq21010__$2 = cljs.core.next.call(null,seq21010__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__21011,G__21012,seq21010__$2);
});
/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21018 = arguments.length;
var i__17864__auto___21019 = (0);
while(true){
if((i__17864__auto___21019 < len__17863__auto___21018)){
args__17870__auto__.push((arguments[i__17864__auto___21019]));

var G__21020 = (i__17864__auto___21019 + (1));
i__17864__auto___21019 = G__21020;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__21017 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21017,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__21017,((function (G__21017,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__21017,chs))
);

reagi.core.depend_on.call(null,G__21017,streams);

return G__21017;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq21016){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21016));
});
reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,index){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,index){
return (function (state_21129){
var state_val_21130 = (state_21129[(1)]);
if((state_val_21130 === (7))){
var inst_21102 = (state_21129[(7)]);
var inst_21101 = (state_21129[(2)]);
var inst_21102__$1 = cljs.core.nth.call(null,inst_21101,(0),null);
var inst_21103 = cljs.core.nth.call(null,inst_21101,(1),null);
var state_21129__$1 = (function (){var statearr_21132 = state_21129;
(statearr_21132[(8)] = inst_21103);

(statearr_21132[(7)] = inst_21102__$1);

return statearr_21132;
})();
if(cljs.core.truth_(inst_21102__$1)){
var statearr_21133_21159 = state_21129__$1;
(statearr_21133_21159[(1)] = (8));

} else {
var statearr_21134_21160 = state_21129__$1;
(statearr_21134_21160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (1))){
var inst_21090 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_21091 = cljs.core.mapv.call(null,inst_21090,ins);
var inst_21092 = cljs.core.set.call(null,ins);
var inst_21093 = inst_21091;
var inst_21094 = inst_21092;
var state_21129__$1 = (function (){var statearr_21135 = state_21129;
(statearr_21135[(9)] = inst_21094);

(statearr_21135[(10)] = inst_21093);

return statearr_21135;
})();
var statearr_21136_21161 = state_21129__$1;
(statearr_21136_21161[(2)] = null);

(statearr_21136_21161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (4))){
var inst_21094 = (state_21129[(9)]);
var inst_21099 = cljs.core.vec.call(null,inst_21094);
var state_21129__$1 = state_21129;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21129__$1,(7),inst_21099);
} else {
if((state_val_21130 === (13))){
var inst_21094 = (state_21129[(9)]);
var inst_21107 = (state_21129[(11)]);
var inst_21115 = (state_21129[(2)]);
var tmp21131 = inst_21094;
var inst_21093 = inst_21107;
var inst_21094__$1 = tmp21131;
var state_21129__$1 = (function (){var statearr_21137 = state_21129;
(statearr_21137[(9)] = inst_21094__$1);

(statearr_21137[(12)] = inst_21115);

(statearr_21137[(10)] = inst_21093);

return statearr_21137;
})();
var statearr_21138_21162 = state_21129__$1;
(statearr_21138_21162[(2)] = null);

(statearr_21138_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (6))){
var inst_21125 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
var statearr_21139_21163 = state_21129__$1;
(statearr_21139_21163[(2)] = inst_21125);

(statearr_21139_21163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (3))){
var inst_21127 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21129__$1,inst_21127);
} else {
if((state_val_21130 === (12))){
var inst_21107 = (state_21129[(11)]);
var inst_21111 = reagi.core.box.call(null,inst_21107);
var state_21129__$1 = state_21129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21129__$1,(14),out,inst_21111);
} else {
if((state_val_21130 === (2))){
var inst_21094 = (state_21129[(9)]);
var inst_21096 = cljs.core.seq.call(null,inst_21094);
var state_21129__$1 = state_21129;
if(inst_21096){
var statearr_21141_21164 = state_21129__$1;
(statearr_21141_21164[(1)] = (4));

} else {
var statearr_21142_21165 = state_21129__$1;
(statearr_21142_21165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (11))){
var state_21129__$1 = state_21129;
var statearr_21143_21166 = state_21129__$1;
(statearr_21143_21166[(2)] = null);

(statearr_21143_21166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (9))){
var inst_21103 = (state_21129[(8)]);
var inst_21094 = (state_21129[(9)]);
var inst_21093 = (state_21129[(10)]);
var inst_21118 = cljs.core.disj.call(null,inst_21094,inst_21103);
var tmp21140 = inst_21093;
var inst_21093__$1 = tmp21140;
var inst_21094__$1 = inst_21118;
var state_21129__$1 = (function (){var statearr_21144 = state_21129;
(statearr_21144[(9)] = inst_21094__$1);

(statearr_21144[(10)] = inst_21093__$1);

return statearr_21144;
})();
var statearr_21145_21167 = state_21129__$1;
(statearr_21145_21167[(2)] = null);

(statearr_21145_21167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (5))){
var inst_21123 = cljs.core.async.close_BANG_.call(null,out);
var state_21129__$1 = state_21129;
var statearr_21146_21168 = state_21129__$1;
(statearr_21146_21168[(2)] = inst_21123);

(statearr_21146_21168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (14))){
var inst_21113 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
var statearr_21147_21169 = state_21129__$1;
(statearr_21147_21169[(2)] = inst_21113);

(statearr_21147_21169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (10))){
var inst_21121 = (state_21129[(2)]);
var state_21129__$1 = state_21129;
var statearr_21148_21170 = state_21129__$1;
(statearr_21148_21170[(2)] = inst_21121);

(statearr_21148_21170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21130 === (8))){
var inst_21103 = (state_21129[(8)]);
var inst_21102 = (state_21129[(7)]);
var inst_21107 = (state_21129[(11)]);
var inst_21093 = (state_21129[(10)]);
var inst_21105 = index.call(null,inst_21103);
var inst_21106 = reagi.core.unbox.call(null,inst_21102);
var inst_21107__$1 = cljs.core.assoc.call(null,inst_21093,inst_21105,inst_21106);
var inst_21108 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_21107__$1);
var state_21129__$1 = (function (){var statearr_21149 = state_21129;
(statearr_21149[(11)] = inst_21107__$1);

return statearr_21149;
})();
if(cljs.core.truth_(inst_21108)){
var statearr_21150_21171 = state_21129__$1;
(statearr_21150_21171[(1)] = (11));

} else {
var statearr_21151_21172 = state_21129__$1;
(statearr_21151_21172[(1)] = (12));

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
});})(c__18830__auto__,index))
;
return ((function (switch__18809__auto__,c__18830__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__18810__auto__ = null;
var reagi$core$zip_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_21155 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21155[(0)] = reagi$core$zip_ch_$_state_machine__18810__auto__);

(statearr_21155[(1)] = (1));

return statearr_21155;
});
var reagi$core$zip_ch_$_state_machine__18810__auto____1 = (function (state_21129){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21156){if((e21156 instanceof Object)){
var ex__18813__auto__ = e21156;
var statearr_21157_21173 = state_21129;
(statearr_21157_21173[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21174 = state_21129;
state_21129 = G__21174;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__18810__auto__ = function(state_21129){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__18810__auto____1.call(this,state_21129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__18810__auto____0;
reagi$core$zip_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__18810__auto____1;
return reagi$core$zip_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,index))
})();
var state__18832__auto__ = (function (){var statearr_21158 = f__18831__auto__.call(null);
(statearr_21158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,index))
);

return c__18830__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21177 = arguments.length;
var i__17864__auto___21178 = (0);
while(true){
if((i__17864__auto___21178 < len__17863__auto___21177)){
args__17870__auto__.push((arguments[i__17864__auto___21178]));

var G__21179 = (i__17864__auto___21178 + (1));
i__17864__auto___21178 = G__21179;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__21176 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21176,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__21176,((function (G__21176,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__21176,chs))
);

reagi.core.depend_on.call(null,G__21176,streams);

return G__21176;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq21175){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21175));
});
reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_21335){
var state_val_21336 = (state_21335[(1)]);
if((state_val_21336 === (7))){
var inst_21331 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21337_21374 = state_21335__$1;
(statearr_21337_21374[(2)] = inst_21331);

(statearr_21337_21374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (20))){
var inst_21303 = (state_21335[(7)]);
var inst_21315 = (state_21335[(2)]);
var inst_21316 = cljs.core.next.call(null,inst_21303);
var inst_21288 = inst_21316;
var inst_21289 = null;
var inst_21290 = (0);
var inst_21291 = (0);
var state_21335__$1 = (function (){var statearr_21338 = state_21335;
(statearr_21338[(8)] = inst_21315);

(statearr_21338[(9)] = inst_21289);

(statearr_21338[(10)] = inst_21288);

(statearr_21338[(11)] = inst_21290);

(statearr_21338[(12)] = inst_21291);

return statearr_21338;
})();
var statearr_21339_21375 = state_21335__$1;
(statearr_21339_21375[(2)] = null);

(statearr_21339_21375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (1))){
var state_21335__$1 = state_21335;
var statearr_21340_21376 = state_21335__$1;
(statearr_21340_21376[(2)] = null);

(statearr_21340_21376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (4))){
var inst_21279 = (state_21335[(13)]);
var inst_21279__$1 = (state_21335[(2)]);
var state_21335__$1 = (function (){var statearr_21344 = state_21335;
(statearr_21344[(13)] = inst_21279__$1);

return statearr_21344;
})();
if(cljs.core.truth_(inst_21279__$1)){
var statearr_21345_21377 = state_21335__$1;
(statearr_21345_21377[(1)] = (5));

} else {
var statearr_21346_21378 = state_21335__$1;
(statearr_21346_21378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (15))){
var state_21335__$1 = state_21335;
var statearr_21347_21379 = state_21335__$1;
(statearr_21347_21379[(2)] = null);

(statearr_21347_21379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (13))){
var inst_21289 = (state_21335[(9)]);
var inst_21288 = (state_21335[(10)]);
var inst_21290 = (state_21335[(11)]);
var inst_21291 = (state_21335[(12)]);
var inst_21299 = (state_21335[(2)]);
var inst_21300 = (inst_21291 + (1));
var tmp21341 = inst_21289;
var tmp21342 = inst_21288;
var tmp21343 = inst_21290;
var inst_21288__$1 = tmp21342;
var inst_21289__$1 = tmp21341;
var inst_21290__$1 = tmp21343;
var inst_21291__$1 = inst_21300;
var state_21335__$1 = (function (){var statearr_21348 = state_21335;
(statearr_21348[(9)] = inst_21289__$1);

(statearr_21348[(10)] = inst_21288__$1);

(statearr_21348[(11)] = inst_21290__$1);

(statearr_21348[(12)] = inst_21291__$1);

(statearr_21348[(14)] = inst_21299);

return statearr_21348;
})();
var statearr_21349_21380 = state_21335__$1;
(statearr_21349_21380[(2)] = null);

(statearr_21349_21380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (6))){
var inst_21329 = cljs.core.async.close_BANG_.call(null,out);
var state_21335__$1 = state_21335;
var statearr_21350_21381 = state_21335__$1;
(statearr_21350_21381[(2)] = inst_21329);

(statearr_21350_21381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (17))){
var inst_21303 = (state_21335[(7)]);
var inst_21307 = cljs.core.chunk_first.call(null,inst_21303);
var inst_21308 = cljs.core.chunk_rest.call(null,inst_21303);
var inst_21309 = cljs.core.count.call(null,inst_21307);
var inst_21288 = inst_21308;
var inst_21289 = inst_21307;
var inst_21290 = inst_21309;
var inst_21291 = (0);
var state_21335__$1 = (function (){var statearr_21351 = state_21335;
(statearr_21351[(9)] = inst_21289);

(statearr_21351[(10)] = inst_21288);

(statearr_21351[(11)] = inst_21290);

(statearr_21351[(12)] = inst_21291);

return statearr_21351;
})();
var statearr_21352_21382 = state_21335__$1;
(statearr_21352_21382[(2)] = null);

(statearr_21352_21382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (3))){
var inst_21333 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21335__$1,inst_21333);
} else {
if((state_val_21336 === (12))){
var inst_21324 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21353_21383 = state_21335__$1;
(statearr_21353_21383[(2)] = inst_21324);

(statearr_21353_21383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (2))){
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21335__$1,(4),in$);
} else {
if((state_val_21336 === (19))){
var inst_21319 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21354_21384 = state_21335__$1;
(statearr_21354_21384[(2)] = inst_21319);

(statearr_21354_21384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (11))){
var inst_21288 = (state_21335[(10)]);
var inst_21303 = (state_21335[(7)]);
var inst_21303__$1 = cljs.core.seq.call(null,inst_21288);
var state_21335__$1 = (function (){var statearr_21355 = state_21335;
(statearr_21355[(7)] = inst_21303__$1);

return statearr_21355;
})();
if(inst_21303__$1){
var statearr_21356_21385 = state_21335__$1;
(statearr_21356_21385[(1)] = (14));

} else {
var statearr_21357_21386 = state_21335__$1;
(statearr_21357_21386[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (9))){
var inst_21326 = (state_21335[(2)]);
var state_21335__$1 = (function (){var statearr_21358 = state_21335;
(statearr_21358[(15)] = inst_21326);

return statearr_21358;
})();
var statearr_21359_21387 = state_21335__$1;
(statearr_21359_21387[(2)] = null);

(statearr_21359_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (5))){
var inst_21279 = (state_21335[(13)]);
var inst_21281 = reagi.core.unbox.call(null,inst_21279);
var inst_21282 = f.call(null,inst_21281);
var inst_21287 = cljs.core.seq.call(null,inst_21282);
var inst_21288 = inst_21287;
var inst_21289 = null;
var inst_21290 = (0);
var inst_21291 = (0);
var state_21335__$1 = (function (){var statearr_21360 = state_21335;
(statearr_21360[(9)] = inst_21289);

(statearr_21360[(10)] = inst_21288);

(statearr_21360[(11)] = inst_21290);

(statearr_21360[(12)] = inst_21291);

return statearr_21360;
})();
var statearr_21361_21388 = state_21335__$1;
(statearr_21361_21388[(2)] = null);

(statearr_21361_21388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (14))){
var inst_21303 = (state_21335[(7)]);
var inst_21305 = cljs.core.chunked_seq_QMARK_.call(null,inst_21303);
var state_21335__$1 = state_21335;
if(inst_21305){
var statearr_21362_21389 = state_21335__$1;
(statearr_21362_21389[(1)] = (17));

} else {
var statearr_21363_21390 = state_21335__$1;
(statearr_21363_21390[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (16))){
var inst_21322 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21364_21391 = state_21335__$1;
(statearr_21364_21391[(2)] = inst_21322);

(statearr_21364_21391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (10))){
var inst_21289 = (state_21335[(9)]);
var inst_21291 = (state_21335[(12)]);
var inst_21296 = cljs.core._nth.call(null,inst_21289,inst_21291);
var inst_21297 = reagi.core.box.call(null,inst_21296);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21335__$1,(13),out,inst_21297);
} else {
if((state_val_21336 === (18))){
var inst_21303 = (state_21335[(7)]);
var inst_21312 = cljs.core.first.call(null,inst_21303);
var inst_21313 = reagi.core.box.call(null,inst_21312);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21335__$1,(20),out,inst_21313);
} else {
if((state_val_21336 === (8))){
var inst_21290 = (state_21335[(11)]);
var inst_21291 = (state_21335[(12)]);
var inst_21293 = (inst_21291 < inst_21290);
var inst_21294 = inst_21293;
var state_21335__$1 = state_21335;
if(cljs.core.truth_(inst_21294)){
var statearr_21365_21392 = state_21335__$1;
(statearr_21365_21392[(1)] = (10));

} else {
var statearr_21366_21393 = state_21335__$1;
(statearr_21366_21393[(1)] = (11));

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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__18810__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_21370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21370[(0)] = reagi$core$mapcat_ch_$_state_machine__18810__auto__);

(statearr_21370[(1)] = (1));

return statearr_21370;
});
var reagi$core$mapcat_ch_$_state_machine__18810__auto____1 = (function (state_21335){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21371){if((e21371 instanceof Object)){
var ex__18813__auto__ = e21371;
var statearr_21372_21394 = state_21335;
(statearr_21372_21394[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21395 = state_21335;
state_21335 = G__21395;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__18810__auto__ = function(state_21335){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__18810__auto____1.call(this,state_21335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__18810__auto____0;
reagi$core$mapcat_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__18810__auto____1;
return reagi$core$mapcat_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_21373 = f__18831__auto__.call(null);
(statearr_21373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args21396 = [];
var len__17863__auto___21403 = arguments.length;
var i__17864__auto___21404 = (0);
while(true){
if((i__17864__auto___21404 < len__17863__auto___21403)){
args21396.push((arguments[i__17864__auto___21404]));

var G__21405 = (i__17864__auto___21404 + (1));
i__17864__auto___21404 = G__21405;
continue;
} else {
}
break;
}

var G__21401 = args21396.length;
switch (G__21401) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args21396.slice((2)),(0)));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17882__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21402 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21402,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__21402,((function (G__21402,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21402,ch))
);

reagi.core.depend_on.call(null,G__21402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21402;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq21397){
var G__21398 = cljs.core.first.call(null,seq21397);
var seq21397__$1 = cljs.core.next.call(null,seq21397);
var G__21399 = cljs.core.first.call(null,seq21397__$1);
var seq21397__$2 = cljs.core.next.call(null,seq21397__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__21398,G__21399,seq21397__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);
/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21409 = arguments.length;
var i__17864__auto___21410 = (0);
while(true){
if((i__17864__auto___21410 < len__17863__auto___21409)){
args__17870__auto__.push((arguments[i__17864__auto___21410]));

var G__21411 = (i__17864__auto___21410 + (1));
i__17864__auto___21410 = G__21411;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

reagi.core.map.cljs$lang$applyTo = (function (seq21407){
var G__21408 = cljs.core.first.call(null,seq21407);
var seq21407__$1 = cljs.core.next.call(null,seq21407);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__21408,seq21407__$1);
});
/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__21412_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__21412_SHARP_))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__21412_SHARP_);
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
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_21484){
var state_val_21485 = (state_21484[(1)]);
if((state_val_21485 === (7))){
var inst_21480 = (state_21484[(2)]);
var state_21484__$1 = state_21484;
var statearr_21486_21507 = state_21484__$1;
(statearr_21486_21507[(2)] = inst_21480);

(statearr_21486_21507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (1))){
var inst_21460 = init;
var state_21484__$1 = (function (){var statearr_21487 = state_21484;
(statearr_21487[(7)] = inst_21460);

return statearr_21487;
})();
var statearr_21488_21508 = state_21484__$1;
(statearr_21488_21508[(2)] = null);

(statearr_21488_21508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (4))){
var inst_21463 = (state_21484[(8)]);
var inst_21463__$1 = (state_21484[(2)]);
var state_21484__$1 = (function (){var statearr_21489 = state_21484;
(statearr_21489[(8)] = inst_21463__$1);

return statearr_21489;
})();
if(cljs.core.truth_(inst_21463__$1)){
var statearr_21490_21509 = state_21484__$1;
(statearr_21490_21509[(1)] = (5));

} else {
var statearr_21491_21510 = state_21484__$1;
(statearr_21491_21510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (6))){
var inst_21478 = cljs.core.async.close_BANG_.call(null,out);
var state_21484__$1 = state_21484;
var statearr_21492_21511 = state_21484__$1;
(statearr_21492_21511[(2)] = inst_21478);

(statearr_21492_21511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (3))){
var inst_21482 = (state_21484[(2)]);
var state_21484__$1 = state_21484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21484__$1,inst_21482);
} else {
if((state_val_21485 === (2))){
var state_21484__$1 = state_21484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21484__$1,(4),in$);
} else {
if((state_val_21485 === (11))){
var inst_21472 = (state_21484[(9)]);
var inst_21475 = (state_21484[(2)]);
var inst_21460 = inst_21472;
var state_21484__$1 = (function (){var statearr_21493 = state_21484;
(statearr_21493[(10)] = inst_21475);

(statearr_21493[(7)] = inst_21460);

return statearr_21493;
})();
var statearr_21494_21512 = state_21484__$1;
(statearr_21494_21512[(2)] = null);

(statearr_21494_21512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (9))){
var inst_21460 = (state_21484[(7)]);
var inst_21463 = (state_21484[(8)]);
var inst_21469 = reagi.core.unbox.call(null,inst_21463);
var inst_21470 = f.call(null,inst_21460,inst_21469);
var state_21484__$1 = state_21484;
var statearr_21495_21513 = state_21484__$1;
(statearr_21495_21513[(2)] = inst_21470);

(statearr_21495_21513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (5))){
var inst_21460 = (state_21484[(7)]);
var inst_21465 = reagi.core.no_value_QMARK_.call(null,inst_21460);
var state_21484__$1 = state_21484;
if(cljs.core.truth_(inst_21465)){
var statearr_21496_21514 = state_21484__$1;
(statearr_21496_21514[(1)] = (8));

} else {
var statearr_21497_21515 = state_21484__$1;
(statearr_21497_21515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21485 === (10))){
var inst_21472 = (state_21484[(9)]);
var inst_21472__$1 = (state_21484[(2)]);
var inst_21473 = reagi.core.box.call(null,inst_21472__$1);
var state_21484__$1 = (function (){var statearr_21498 = state_21484;
(statearr_21498[(9)] = inst_21472__$1);

return statearr_21498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21484__$1,(11),out,inst_21473);
} else {
if((state_val_21485 === (8))){
var inst_21463 = (state_21484[(8)]);
var inst_21467 = reagi.core.unbox.call(null,inst_21463);
var state_21484__$1 = state_21484;
var statearr_21499_21516 = state_21484__$1;
(statearr_21499_21516[(2)] = inst_21467);

(statearr_21499_21516[(1)] = (10));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__18810__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_21503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21503[(0)] = reagi$core$reduce_ch_$_state_machine__18810__auto__);

(statearr_21503[(1)] = (1));

return statearr_21503;
});
var reagi$core$reduce_ch_$_state_machine__18810__auto____1 = (function (state_21484){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21504){if((e21504 instanceof Object)){
var ex__18813__auto__ = e21504;
var statearr_21505_21517 = state_21484;
(statearr_21505_21517[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21518 = state_21484;
state_21484 = G__21518;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__18810__auto__ = function(state_21484){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__18810__auto____1.call(this,state_21484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__18810__auto____0;
reagi$core$reduce_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__18810__auto____1;
return reagi$core$reduce_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_21506 = f__18831__auto__.call(null);
(statearr_21506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args21519 = [];
var len__17863__auto___21523 = arguments.length;
var i__17864__auto___21524 = (0);
while(true){
if((i__17864__auto___21524 < len__17863__auto___21523)){
args21519.push((arguments[i__17864__auto___21524]));

var G__21525 = (i__17864__auto___21524 + (1));
i__17864__auto___21524 = G__21525;
continue;
} else {
}
break;
}

var G__21521 = args21519.length;
switch (G__21521) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21519.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21522 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__21522,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__21522,((function (G__21522,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21522,ch))
);

reagi.core.depend_on.call(null,G__21522,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21522;
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
return reagi.core.reduce.call(null,(function (p1__21528_SHARP_,p2__21527_SHARP_){
return p2__21527_SHARP_.call(null,p1__21528_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args21529 = [];
var len__17863__auto___21532 = arguments.length;
var i__17864__auto___21533 = (0);
while(true){
if((i__17864__auto___21533 < len__17863__auto___21532)){
args21529.push((arguments[i__17864__auto___21533]));

var G__21534 = (i__17864__auto___21533 + (1));
i__17864__auto___21533 = G__21534;
continue;
} else {
}
break;
}

var G__21531 = args21529.length;
switch (G__21531) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21529.length)].join('')));

}
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return reagi.core.reduce.call(null,cljs.core.conj,reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$2 = (function (n,stream){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

return reagi.core.reduce.call(null,(function (q,x){
return cljs.core.conj.call(null,(((cljs.core.count.call(null,q) >= n))?cljs.core.pop.call(null,q):q),x);
}),reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$lang$maxFixedArity = 2;
reagi.core.uniq_ch = (function reagi$core$uniq_ch(in$,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_21617){
var state_val_21618 = (state_21617[(1)]);
if((state_val_21618 === (7))){
var inst_21613 = (state_21617[(2)]);
var state_21617__$1 = state_21617;
var statearr_21619_21644 = state_21617__$1;
(statearr_21619_21644[(2)] = inst_21613);

(statearr_21619_21644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (1))){
var inst_21590 = reagi.core.no_value;
var state_21617__$1 = (function (){var statearr_21620 = state_21617;
(statearr_21620[(7)] = inst_21590);

return statearr_21620;
})();
var statearr_21621_21645 = state_21617__$1;
(statearr_21621_21645[(2)] = null);

(statearr_21621_21645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (4))){
var inst_21593 = (state_21617[(8)]);
var inst_21593__$1 = (state_21617[(2)]);
var state_21617__$1 = (function (){var statearr_21622 = state_21617;
(statearr_21622[(8)] = inst_21593__$1);

return statearr_21622;
})();
if(cljs.core.truth_(inst_21593__$1)){
var statearr_21623_21646 = state_21617__$1;
(statearr_21623_21646[(1)] = (5));

} else {
var statearr_21624_21647 = state_21617__$1;
(statearr_21624_21647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (13))){
var inst_21595 = (state_21617[(9)]);
var inst_21608 = (state_21617[(2)]);
var inst_21590 = inst_21595;
var state_21617__$1 = (function (){var statearr_21625 = state_21617;
(statearr_21625[(7)] = inst_21590);

(statearr_21625[(10)] = inst_21608);

return statearr_21625;
})();
var statearr_21626_21648 = state_21617__$1;
(statearr_21626_21648[(2)] = null);

(statearr_21626_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (6))){
var inst_21611 = cljs.core.async.close_BANG_.call(null,out);
var state_21617__$1 = state_21617;
var statearr_21627_21649 = state_21617__$1;
(statearr_21627_21649[(2)] = inst_21611);

(statearr_21627_21649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (3))){
var inst_21615 = (state_21617[(2)]);
var state_21617__$1 = state_21617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21617__$1,inst_21615);
} else {
if((state_val_21618 === (12))){
var state_21617__$1 = state_21617;
var statearr_21628_21650 = state_21617__$1;
(statearr_21628_21650[(2)] = null);

(statearr_21628_21650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (2))){
var state_21617__$1 = state_21617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21617__$1,(4),in$);
} else {
if((state_val_21618 === (11))){
var inst_21595 = (state_21617[(9)]);
var inst_21603 = reagi.core.box.call(null,inst_21595);
var state_21617__$1 = state_21617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21617__$1,(14),out,inst_21603);
} else {
if((state_val_21618 === (9))){
var inst_21590 = (state_21617[(7)]);
var inst_21595 = (state_21617[(9)]);
var inst_21599 = cljs.core.not_EQ_.call(null,inst_21595,inst_21590);
var state_21617__$1 = state_21617;
var statearr_21629_21651 = state_21617__$1;
(statearr_21629_21651[(2)] = inst_21599);

(statearr_21629_21651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (5))){
var inst_21590 = (state_21617[(7)]);
var inst_21596 = (state_21617[(11)]);
var inst_21593 = (state_21617[(8)]);
var inst_21595 = reagi.core.unbox.call(null,inst_21593);
var inst_21596__$1 = reagi.core.no_value_QMARK_.call(null,inst_21590);
var state_21617__$1 = (function (){var statearr_21630 = state_21617;
(statearr_21630[(11)] = inst_21596__$1);

(statearr_21630[(9)] = inst_21595);

return statearr_21630;
})();
if(cljs.core.truth_(inst_21596__$1)){
var statearr_21631_21652 = state_21617__$1;
(statearr_21631_21652[(1)] = (8));

} else {
var statearr_21632_21653 = state_21617__$1;
(statearr_21632_21653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (14))){
var inst_21605 = (state_21617[(2)]);
var state_21617__$1 = state_21617;
var statearr_21633_21654 = state_21617__$1;
(statearr_21633_21654[(2)] = inst_21605);

(statearr_21633_21654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (10))){
var inst_21601 = (state_21617[(2)]);
var state_21617__$1 = state_21617;
if(cljs.core.truth_(inst_21601)){
var statearr_21634_21655 = state_21617__$1;
(statearr_21634_21655[(1)] = (11));

} else {
var statearr_21635_21656 = state_21617__$1;
(statearr_21635_21656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21618 === (8))){
var inst_21596 = (state_21617[(11)]);
var state_21617__$1 = state_21617;
var statearr_21636_21657 = state_21617__$1;
(statearr_21636_21657[(2)] = inst_21596);

(statearr_21636_21657[(1)] = (10));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__18810__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_21640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21640[(0)] = reagi$core$uniq_ch_$_state_machine__18810__auto__);

(statearr_21640[(1)] = (1));

return statearr_21640;
});
var reagi$core$uniq_ch_$_state_machine__18810__auto____1 = (function (state_21617){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21641){if((e21641 instanceof Object)){
var ex__18813__auto__ = e21641;
var statearr_21642_21658 = state_21617;
(statearr_21642_21658[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21659 = state_21617;
state_21617 = G__21659;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__18810__auto__ = function(state_21617){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__18810__auto____1.call(this,state_21617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__18810__auto____0;
reagi$core$uniq_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__18810__auto____1;
return reagi$core$uniq_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_21643 = f__18831__auto__.call(null);
(statearr_21643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21661 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21661,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__21661,((function (G__21661,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21661,ch))
);

reagi.core.depend_on.call(null,G__21661,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21661;
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
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21731_21752 = state_21729__$1;
(statearr_21731_21752[(2)] = inst_21725);

(statearr_21731_21752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (1))){
var inst_21707 = (0);
var state_21729__$1 = (function (){var statearr_21732 = state_21729;
(statearr_21732[(7)] = inst_21707);

return statearr_21732;
})();
var statearr_21733_21753 = state_21729__$1;
(statearr_21733_21753[(2)] = null);

(statearr_21733_21753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21710 = (state_21729[(8)]);
var inst_21710__$1 = (state_21729[(2)]);
var state_21729__$1 = (function (){var statearr_21734 = state_21729;
(statearr_21734[(8)] = inst_21710__$1);

return statearr_21734;
})();
if(cljs.core.truth_(inst_21710__$1)){
var statearr_21735_21754 = state_21729__$1;
(statearr_21735_21754[(1)] = (5));

} else {
var statearr_21736_21755 = state_21729__$1;
(statearr_21736_21755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var inst_21723 = cljs.core.async.close_BANG_.call(null,out);
var state_21729__$1 = state_21729;
var statearr_21737_21756 = state_21729__$1;
(statearr_21737_21756[(2)] = inst_21723);

(statearr_21737_21756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (2))){
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(4),in$);
} else {
if((state_val_21730 === (11))){
var inst_21717 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21738_21757 = state_21729__$1;
(statearr_21738_21757[(2)] = inst_21717);

(statearr_21738_21757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (9))){
var state_21729__$1 = state_21729;
var statearr_21739_21758 = state_21729__$1;
(statearr_21739_21758[(2)] = null);

(statearr_21739_21758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var inst_21712 = (state_21729[(9)]);
var inst_21707 = (state_21729[(7)]);
var inst_21712__$1 = reagi.core.time_ms.call(null);
var inst_21713 = (inst_21712__$1 - inst_21707);
var inst_21714 = (inst_21713 >= timeout_ms);
var state_21729__$1 = (function (){var statearr_21740 = state_21729;
(statearr_21740[(9)] = inst_21712__$1);

return statearr_21740;
})();
if(cljs.core.truth_(inst_21714)){
var statearr_21741_21759 = state_21729__$1;
(statearr_21741_21759[(1)] = (8));

} else {
var statearr_21742_21760 = state_21729__$1;
(statearr_21742_21760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21712 = (state_21729[(9)]);
var inst_21720 = (state_21729[(2)]);
var inst_21707 = inst_21712;
var state_21729__$1 = (function (){var statearr_21743 = state_21729;
(statearr_21743[(10)] = inst_21720);

(statearr_21743[(7)] = inst_21707);

return statearr_21743;
})();
var statearr_21744_21761 = state_21729__$1;
(statearr_21744_21761[(2)] = null);

(statearr_21744_21761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var inst_21710 = (state_21729[(8)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21729__$1,(11),out,inst_21710);
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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__18810__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_21748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21748[(0)] = reagi$core$throttle_ch_$_state_machine__18810__auto__);

(statearr_21748[(1)] = (1));

return statearr_21748;
});
var reagi$core$throttle_ch_$_state_machine__18810__auto____1 = (function (state_21729){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21749){if((e21749 instanceof Object)){
var ex__18813__auto__ = e21749;
var statearr_21750_21762 = state_21729;
(statearr_21750_21762[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21763 = state_21729;
state_21729 = G__21763;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__18810__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__18810__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__18810__auto____0;
reagi$core$throttle_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__18810__auto____1;
return reagi$core$throttle_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_21751 = f__18831__auto__.call(null);
(statearr_21751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21765 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21765,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__21765,((function (G__21765,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21765,ch))
);

reagi.core.depend_on.call(null,G__21765,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21765;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_21875){
var state_val_21876 = (state_21875[(1)]);
if((state_val_21876 === (7))){
var inst_21870 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21877_21906 = state_21875__$1;
(statearr_21877_21906[(2)] = inst_21870);

(statearr_21877_21906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (1))){
var state_21875__$1 = state_21875;
var statearr_21878_21907 = state_21875__$1;
(statearr_21878_21907[(2)] = null);

(statearr_21878_21907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (4))){
var inst_21843 = (state_21875[(2)]);
var inst_21844 = cljs.core.nth.call(null,inst_21843,(0),null);
var inst_21845 = cljs.core.nth.call(null,inst_21843,(1),null);
var inst_21846 = cljs.core.not_EQ_.call(null,inst_21845,stop);
var state_21875__$1 = (function (){var statearr_21879 = state_21875;
(statearr_21879[(7)] = inst_21844);

return statearr_21879;
})();
if(inst_21846){
var statearr_21880_21908 = state_21875__$1;
(statearr_21880_21908[(1)] = (5));

} else {
var statearr_21881_21909 = state_21875__$1;
(statearr_21881_21909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (15))){
var state_21875__$1 = state_21875;
var statearr_21882_21910 = state_21875__$1;
(statearr_21882_21910[(2)] = null);

(statearr_21882_21910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (13))){
var inst_21857 = (state_21875[(8)]);
var state_21875__$1 = state_21875;
var statearr_21883_21911 = state_21875__$1;
(statearr_21883_21911[(2)] = inst_21857);

(statearr_21883_21911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (6))){
var state_21875__$1 = state_21875;
var statearr_21884_21912 = state_21875__$1;
(statearr_21884_21912[(2)] = null);

(statearr_21884_21912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (17))){
var inst_21867 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21885_21913 = state_21875__$1;
(statearr_21885_21913[(2)] = inst_21867);

(statearr_21885_21913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (3))){
var inst_21872 = (state_21875[(2)]);
var inst_21873 = cljs.core.async.close_BANG_.call(null,out);
var state_21875__$1 = (function (){var statearr_21886 = state_21875;
(statearr_21886[(9)] = inst_21872);

return statearr_21886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21875__$1,inst_21873);
} else {
if((state_val_21876 === (12))){
var inst_21859 = reagi.core.complete_QMARK_.call(null,ref);
var state_21875__$1 = state_21875;
var statearr_21887_21914 = state_21875__$1;
(statearr_21887_21914[(2)] = inst_21859);

(statearr_21887_21914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (2))){
var inst_21838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21839 = cljs.core.async.timeout.call(null,interval);
var inst_21840 = [stop,inst_21839];
var inst_21841 = (new cljs.core.PersistentVector(null,2,(5),inst_21838,inst_21840,null));
var state_21875__$1 = state_21875;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21875__$1,(4),inst_21841);
} else {
if((state_val_21876 === (11))){
var inst_21854 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21888_21915 = state_21875__$1;
(statearr_21888_21915[(2)] = inst_21854);

(statearr_21888_21915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (9))){
var inst_21848 = (state_21875[(10)]);
var inst_21852 = reagi.core.box.call(null,inst_21848);
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21875__$1,(11),out,inst_21852);
} else {
if((state_val_21876 === (5))){
var inst_21848 = (state_21875[(10)]);
var inst_21848__$1 = cljs.core.deref.call(null,ref);
var inst_21849 = (void 0 === inst_21848__$1);
var state_21875__$1 = (function (){var statearr_21889 = state_21875;
(statearr_21889[(10)] = inst_21848__$1);

return statearr_21889;
})();
if(cljs.core.truth_(inst_21849)){
var statearr_21890_21916 = state_21875__$1;
(statearr_21890_21916[(1)] = (8));

} else {
var statearr_21891_21917 = state_21875__$1;
(statearr_21891_21917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (14))){
var inst_21862 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
if(cljs.core.truth_(inst_21862)){
var statearr_21892_21918 = state_21875__$1;
(statearr_21892_21918[(1)] = (15));

} else {
var statearr_21893_21919 = state_21875__$1;
(statearr_21893_21919[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (16))){
var state_21875__$1 = state_21875;
var statearr_21894_21920 = state_21875__$1;
(statearr_21894_21920[(2)] = null);

(statearr_21894_21920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (10))){
var inst_21857 = (state_21875[(8)]);
var inst_21856 = (state_21875[(2)]);
var inst_21857__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_21875__$1 = (function (){var statearr_21895 = state_21875;
(statearr_21895[(11)] = inst_21856);

(statearr_21895[(8)] = inst_21857__$1);

return statearr_21895;
})();
if(cljs.core.truth_(inst_21857__$1)){
var statearr_21896_21921 = state_21875__$1;
(statearr_21896_21921[(1)] = (12));

} else {
var statearr_21897_21922 = state_21875__$1;
(statearr_21897_21922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (8))){
var state_21875__$1 = state_21875;
var statearr_21898_21923 = state_21875__$1;
(statearr_21898_21923[(2)] = null);

(statearr_21898_21923[(1)] = (10));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__18810__auto__ = null;
var reagi$core$run_sampler_$_state_machine__18810__auto____0 = (function (){
var statearr_21902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21902[(0)] = reagi$core$run_sampler_$_state_machine__18810__auto__);

(statearr_21902[(1)] = (1));

return statearr_21902;
});
var reagi$core$run_sampler_$_state_machine__18810__auto____1 = (function (state_21875){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21903){if((e21903 instanceof Object)){
var ex__18813__auto__ = e21903;
var statearr_21904_21924 = state_21875;
(statearr_21904_21924[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21925 = state_21875;
state_21875 = G__21925;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__18810__auto__ = function(state_21875){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__18810__auto____1.call(this,state_21875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__18810__auto____0;
reagi$core$run_sampler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__18810__auto____1;
return reagi$core$run_sampler_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_21905 = f__18831__auto__.call(null);
(statearr_21905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__21927 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21927,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__21927,((function (G__21927,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__21927,stop))
);

return G__21927;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__18830__auto___21960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___21960,stream){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___21960,stream){
return (function (state_21950){
var state_val_21951 = (state_21950[(1)]);
if((state_val_21951 === (1))){
var inst_21944 = cljs.core.async.timeout.call(null,time_ms);
var state_21950__$1 = state_21950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21950__$1,(2),inst_21944);
} else {
if((state_val_21951 === (2))){
var inst_21946 = (state_21950[(2)]);
var inst_21947 = reagi.core.port.call(null,stream);
var inst_21948 = cljs.core.async.close_BANG_.call(null,inst_21947);
var state_21950__$1 = (function (){var statearr_21952 = state_21950;
(statearr_21952[(7)] = inst_21946);

return statearr_21952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21950__$1,inst_21948);
} else {
return null;
}
}
});})(c__18830__auto___21960,stream))
;
return ((function (switch__18809__auto__,c__18830__auto___21960,stream){
return (function() {
var reagi$core$wait_$_state_machine__18810__auto__ = null;
var reagi$core$wait_$_state_machine__18810__auto____0 = (function (){
var statearr_21956 = [null,null,null,null,null,null,null,null];
(statearr_21956[(0)] = reagi$core$wait_$_state_machine__18810__auto__);

(statearr_21956[(1)] = (1));

return statearr_21956;
});
var reagi$core$wait_$_state_machine__18810__auto____1 = (function (state_21950){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21957){if((e21957 instanceof Object)){
var ex__18813__auto__ = e21957;
var statearr_21958_21961 = state_21950;
(statearr_21958_21961[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21962 = state_21950;
state_21950 = G__21962;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__18810__auto__ = function(state_21950){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__18810__auto____1.call(this,state_21950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__18810__auto____0;
reagi$core$wait_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__18810__auto____1;
return reagi$core$wait_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___21960,stream))
})();
var state__18832__auto__ = (function (){var statearr_21959 = f__18831__auto__.call(null);
(statearr_21959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___21960);

return statearr_21959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___21960,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_22149){
var state_val_22150 = (state_22149[(1)]);
if((state_val_22150 === (7))){
var inst_22094 = (state_22149[(7)]);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22149__$1,(9),inst_22094);
} else {
if((state_val_22150 === (20))){
var inst_22121 = (state_22149[(8)]);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22149__$1,(22),inst_22121);
} else {
if((state_val_22150 === (1))){
var inst_22085 = cljs.core.seq.call(null,chs);
var inst_22086 = inst_22085;
var inst_22087 = null;
var inst_22088 = (0);
var inst_22089 = (0);
var state_22149__$1 = (function (){var statearr_22151 = state_22149;
(statearr_22151[(9)] = inst_22089);

(statearr_22151[(10)] = inst_22086);

(statearr_22151[(11)] = inst_22088);

(statearr_22151[(12)] = inst_22087);

return statearr_22151;
})();
var statearr_22152_22199 = state_22149__$1;
(statearr_22152_22199[(2)] = null);

(statearr_22152_22199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (24))){
var state_22149__$1 = state_22149;
var statearr_22153_22200 = state_22149__$1;
(statearr_22153_22200[(2)] = null);

(statearr_22153_22200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (4))){
var inst_22089 = (state_22149[(9)]);
var inst_22087 = (state_22149[(12)]);
var inst_22094 = cljs.core._nth.call(null,inst_22087,inst_22089);
var state_22149__$1 = (function (){var statearr_22154 = state_22149;
(statearr_22154[(7)] = inst_22094);

return statearr_22154;
})();
var statearr_22155_22201 = state_22149__$1;
(statearr_22155_22201[(2)] = null);

(statearr_22155_22201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (15))){
var state_22149__$1 = state_22149;
var statearr_22156_22202 = state_22149__$1;
(statearr_22156_22202[(2)] = null);

(statearr_22156_22202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (21))){
var inst_22112 = (state_22149[(13)]);
var inst_22135 = (state_22149[(2)]);
var inst_22136 = cljs.core.next.call(null,inst_22112);
var inst_22086 = inst_22136;
var inst_22087 = null;
var inst_22088 = (0);
var inst_22089 = (0);
var state_22149__$1 = (function (){var statearr_22157 = state_22149;
(statearr_22157[(14)] = inst_22135);

(statearr_22157[(9)] = inst_22089);

(statearr_22157[(10)] = inst_22086);

(statearr_22157[(11)] = inst_22088);

(statearr_22157[(12)] = inst_22087);

return statearr_22157;
})();
var statearr_22158_22203 = state_22149__$1;
(statearr_22158_22203[(2)] = null);

(statearr_22158_22203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (13))){
var inst_22102 = (state_22149[(2)]);
var state_22149__$1 = (function (){var statearr_22159 = state_22149;
(statearr_22159[(15)] = inst_22102);

return statearr_22159;
})();
var statearr_22160_22204 = state_22149__$1;
(statearr_22160_22204[(2)] = null);

(statearr_22160_22204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (22))){
var inst_22124 = (state_22149[(16)]);
var inst_22124__$1 = (state_22149[(2)]);
var state_22149__$1 = (function (){var statearr_22161 = state_22149;
(statearr_22161[(16)] = inst_22124__$1);

return statearr_22161;
})();
if(cljs.core.truth_(inst_22124__$1)){
var statearr_22162_22205 = state_22149__$1;
(statearr_22162_22205[(1)] = (23));

} else {
var statearr_22163_22206 = state_22149__$1;
(statearr_22163_22206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (6))){
var inst_22144 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22164_22207 = state_22149__$1;
(statearr_22164_22207[(2)] = inst_22144);

(statearr_22164_22207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (25))){
var inst_22133 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22165_22208 = state_22149__$1;
(statearr_22165_22208[(2)] = inst_22133);

(statearr_22165_22208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (17))){
var inst_22112 = (state_22149[(13)]);
var inst_22116 = cljs.core.chunk_first.call(null,inst_22112);
var inst_22117 = cljs.core.chunk_rest.call(null,inst_22112);
var inst_22118 = cljs.core.count.call(null,inst_22116);
var inst_22086 = inst_22117;
var inst_22087 = inst_22116;
var inst_22088 = inst_22118;
var inst_22089 = (0);
var state_22149__$1 = (function (){var statearr_22166 = state_22149;
(statearr_22166[(9)] = inst_22089);

(statearr_22166[(10)] = inst_22086);

(statearr_22166[(11)] = inst_22088);

(statearr_22166[(12)] = inst_22087);

return statearr_22166;
})();
var statearr_22167_22209 = state_22149__$1;
(statearr_22167_22209[(2)] = null);

(statearr_22167_22209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (3))){
var inst_22146 = (state_22149[(2)]);
var inst_22147 = cljs.core.async.close_BANG_.call(null,out);
var state_22149__$1 = (function (){var statearr_22168 = state_22149;
(statearr_22168[(17)] = inst_22146);

return statearr_22168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22149__$1,inst_22147);
} else {
if((state_val_22150 === (12))){
var inst_22106 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22169_22210 = state_22149__$1;
(statearr_22169_22210[(2)] = inst_22106);

(statearr_22169_22210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (2))){
var inst_22089 = (state_22149[(9)]);
var inst_22088 = (state_22149[(11)]);
var inst_22091 = (inst_22089 < inst_22088);
var inst_22092 = inst_22091;
var state_22149__$1 = state_22149;
if(cljs.core.truth_(inst_22092)){
var statearr_22170_22211 = state_22149__$1;
(statearr_22170_22211[(1)] = (4));

} else {
var statearr_22171_22212 = state_22149__$1;
(statearr_22171_22212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (23))){
var inst_22124 = (state_22149[(16)]);
var inst_22126 = reagi.core.unbox.call(null,inst_22124);
var inst_22127 = reagi.core.box.call(null,inst_22126);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22149__$1,(26),out,inst_22127);
} else {
if((state_val_22150 === (19))){
var inst_22139 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22172_22213 = state_22149__$1;
(statearr_22172_22213[(2)] = inst_22139);

(statearr_22172_22213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (11))){
var state_22149__$1 = state_22149;
var statearr_22173_22214 = state_22149__$1;
(statearr_22173_22214[(2)] = null);

(statearr_22173_22214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (9))){
var inst_22097 = (state_22149[(18)]);
var inst_22097__$1 = (state_22149[(2)]);
var state_22149__$1 = (function (){var statearr_22174 = state_22149;
(statearr_22174[(18)] = inst_22097__$1);

return statearr_22174;
})();
if(cljs.core.truth_(inst_22097__$1)){
var statearr_22175_22215 = state_22149__$1;
(statearr_22175_22215[(1)] = (10));

} else {
var statearr_22176_22216 = state_22149__$1;
(statearr_22176_22216[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (5))){
var inst_22112 = (state_22149[(13)]);
var inst_22086 = (state_22149[(10)]);
var inst_22112__$1 = cljs.core.seq.call(null,inst_22086);
var state_22149__$1 = (function (){var statearr_22177 = state_22149;
(statearr_22177[(13)] = inst_22112__$1);

return statearr_22177;
})();
if(inst_22112__$1){
var statearr_22178_22217 = state_22149__$1;
(statearr_22178_22217[(1)] = (14));

} else {
var statearr_22179_22218 = state_22149__$1;
(statearr_22179_22218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (14))){
var inst_22112 = (state_22149[(13)]);
var inst_22114 = cljs.core.chunked_seq_QMARK_.call(null,inst_22112);
var state_22149__$1 = state_22149;
if(inst_22114){
var statearr_22180_22219 = state_22149__$1;
(statearr_22180_22219[(1)] = (17));

} else {
var statearr_22181_22220 = state_22149__$1;
(statearr_22181_22220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (26))){
var inst_22129 = (state_22149[(2)]);
var state_22149__$1 = (function (){var statearr_22182 = state_22149;
(statearr_22182[(19)] = inst_22129);

return statearr_22182;
})();
var statearr_22183_22221 = state_22149__$1;
(statearr_22183_22221[(2)] = null);

(statearr_22183_22221[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (16))){
var inst_22142 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22184_22222 = state_22149__$1;
(statearr_22184_22222[(2)] = inst_22142);

(statearr_22184_22222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (10))){
var inst_22097 = (state_22149[(18)]);
var inst_22099 = reagi.core.unbox.call(null,inst_22097);
var inst_22100 = reagi.core.box.call(null,inst_22099);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22149__$1,(13),out,inst_22100);
} else {
if((state_val_22150 === (18))){
var inst_22112 = (state_22149[(13)]);
var inst_22121 = cljs.core.first.call(null,inst_22112);
var state_22149__$1 = (function (){var statearr_22188 = state_22149;
(statearr_22188[(8)] = inst_22121);

return statearr_22188;
})();
var statearr_22189_22223 = state_22149__$1;
(statearr_22189_22223[(2)] = null);

(statearr_22189_22223[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (8))){
var inst_22089 = (state_22149[(9)]);
var inst_22086 = (state_22149[(10)]);
var inst_22088 = (state_22149[(11)]);
var inst_22087 = (state_22149[(12)]);
var inst_22108 = (state_22149[(2)]);
var inst_22109 = (inst_22089 + (1));
var tmp22185 = inst_22086;
var tmp22186 = inst_22088;
var tmp22187 = inst_22087;
var inst_22086__$1 = tmp22185;
var inst_22087__$1 = tmp22187;
var inst_22088__$1 = tmp22186;
var inst_22089__$1 = inst_22109;
var state_22149__$1 = (function (){var statearr_22190 = state_22149;
(statearr_22190[(9)] = inst_22089__$1);

(statearr_22190[(20)] = inst_22108);

(statearr_22190[(10)] = inst_22086__$1);

(statearr_22190[(11)] = inst_22088__$1);

(statearr_22190[(12)] = inst_22087__$1);

return statearr_22190;
})();
var statearr_22191_22224 = state_22149__$1;
(statearr_22191_22224[(2)] = null);

(statearr_22191_22224[(1)] = (2));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__18810__auto__ = null;
var reagi$core$join_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_22195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22195[(0)] = reagi$core$join_ch_$_state_machine__18810__auto__);

(statearr_22195[(1)] = (1));

return statearr_22195;
});
var reagi$core$join_ch_$_state_machine__18810__auto____1 = (function (state_22149){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_22149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e22196){if((e22196 instanceof Object)){
var ex__18813__auto__ = e22196;
var statearr_22197_22225 = state_22149;
(statearr_22197_22225[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22226 = state_22149;
state_22149 = G__22226;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__18810__auto__ = function(state_22149){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__18810__auto____1.call(this,state_22149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__18810__auto____0;
reagi$core$join_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__18810__auto____1;
return reagi$core$join_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_22198 = f__18831__auto__.call(null);
(statearr_22198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_22198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__17870__auto__ = [];
var len__17863__auto___22229 = arguments.length;
var i__17864__auto___22230 = (0);
while(true){
if((i__17864__auto___22230 < len__17863__auto___22229)){
args__17870__auto__.push((arguments[i__17864__auto___22230]));

var G__22231 = (i__17864__auto___22230 + (1));
i__17864__auto___22230 = G__22231;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__22228 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__22228,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__22228,((function (G__22228,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__22228,chs))
);

reagi.core.depend_on.call(null,G__22228,streams);

return G__22228;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq22227){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22227));
});
reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_22368){
var state_val_22369 = (state_22368[(1)]);
if((state_val_22369 === (7))){
var inst_22332 = (state_22368[(7)]);
var inst_22330 = (state_22368[(2)]);
var inst_22331 = cljs.core.nth.call(null,inst_22330,(0),null);
var inst_22332__$1 = cljs.core.nth.call(null,inst_22330,(1),null);
var inst_22333 = (inst_22332__$1 === valve);
var state_22368__$1 = (function (){var statearr_22370 = state_22368;
(statearr_22370[(8)] = inst_22331);

(statearr_22370[(7)] = inst_22332__$1);

return statearr_22370;
})();
if(cljs.core.truth_(inst_22333)){
var statearr_22371_22402 = state_22368__$1;
(statearr_22371_22402[(1)] = (8));

} else {
var statearr_22372_22403 = state_22368__$1;
(statearr_22372_22403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (1))){
var inst_22317 = [in$];
var inst_22318 = [null];
var inst_22319 = cljs.core.PersistentHashMap.fromArrays(inst_22317,inst_22318);
var inst_22320 = inst_22319;
var state_22368__$1 = (function (){var statearr_22373 = state_22368;
(statearr_22373[(9)] = inst_22320);

return statearr_22373;
})();
var statearr_22374_22404 = state_22368__$1;
(statearr_22374_22404[(2)] = null);

(statearr_22374_22404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (4))){
var inst_22320 = (state_22368[(9)]);
var inst_22326 = cljs.core.keys.call(null,inst_22320);
var inst_22327 = cljs.core.vec.call(null,inst_22326);
var inst_22328 = cljs.core.conj.call(null,inst_22327,valve);
var state_22368__$1 = state_22368;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22368__$1,(7),inst_22328);
} else {
if((state_val_22369 === (15))){
var inst_22331 = (state_22368[(8)]);
var inst_22347 = reagi.core.unbox.call(null,inst_22331);
var inst_22348 = reagi.core.box.call(null,inst_22347);
var state_22368__$1 = state_22368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22368__$1,(17),out,inst_22348);
} else {
if((state_val_22369 === (13))){
var inst_22358 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22376_22405 = state_22368__$1;
(statearr_22376_22405[(2)] = inst_22358);

(statearr_22376_22405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (6))){
var inst_22363 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22377_22406 = state_22368__$1;
(statearr_22377_22406[(2)] = inst_22363);

(statearr_22377_22406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (17))){
var inst_22320 = (state_22368[(9)]);
var inst_22350 = (state_22368[(2)]);
var tmp22375 = inst_22320;
var inst_22320__$1 = tmp22375;
var state_22368__$1 = (function (){var statearr_22378 = state_22368;
(statearr_22378[(9)] = inst_22320__$1);

(statearr_22378[(10)] = inst_22350);

return statearr_22378;
})();
var statearr_22379_22407 = state_22368__$1;
(statearr_22379_22407[(2)] = null);

(statearr_22379_22407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (3))){
var inst_22365 = (state_22368[(2)]);
var inst_22366 = cljs.core.async.close_BANG_.call(null,out);
var state_22368__$1 = (function (){var statearr_22380 = state_22368;
(statearr_22380[(11)] = inst_22365);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22368__$1,inst_22366);
} else {
if((state_val_22369 === (12))){
var inst_22320 = (state_22368[(9)]);
var inst_22332 = (state_22368[(7)]);
var inst_22355 = cljs.core.dissoc.call(null,inst_22320,inst_22332);
var inst_22320__$1 = inst_22355;
var state_22368__$1 = (function (){var statearr_22381 = state_22368;
(statearr_22381[(9)] = inst_22320__$1);

return statearr_22381;
})();
var statearr_22382_22408 = state_22368__$1;
(statearr_22382_22408[(2)] = null);

(statearr_22382_22408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (2))){
var inst_22320 = (state_22368[(9)]);
var inst_22322 = cljs.core.empty_QMARK_.call(null,inst_22320);
var inst_22323 = !(inst_22322);
var state_22368__$1 = state_22368;
if(inst_22323){
var statearr_22383_22409 = state_22368__$1;
(statearr_22383_22409[(1)] = (4));

} else {
var statearr_22384_22410 = state_22368__$1;
(statearr_22384_22410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (11))){
var inst_22332 = (state_22368[(7)]);
var inst_22339 = (inst_22332 === in$);
var state_22368__$1 = state_22368;
if(cljs.core.truth_(inst_22339)){
var statearr_22385_22411 = state_22368__$1;
(statearr_22385_22411[(1)] = (14));

} else {
var statearr_22386_22412 = state_22368__$1;
(statearr_22386_22412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (9))){
var inst_22331 = (state_22368[(8)]);
var state_22368__$1 = state_22368;
if(cljs.core.truth_(inst_22331)){
var statearr_22387_22413 = state_22368__$1;
(statearr_22387_22413[(1)] = (11));

} else {
var statearr_22388_22414 = state_22368__$1;
(statearr_22388_22414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (5))){
var state_22368__$1 = state_22368;
var statearr_22389_22415 = state_22368__$1;
(statearr_22389_22415[(2)] = null);

(statearr_22389_22415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (14))){
var inst_22320 = (state_22368[(9)]);
var inst_22331 = (state_22368[(8)]);
var inst_22341 = reagi.core.unbox.call(null,inst_22331);
var inst_22342 = cljs.core.async.chan.call(null);
var inst_22343 = reagi.core.listen.call(null,inst_22341,inst_22342);
var inst_22344 = cljs.core.assoc.call(null,inst_22320,inst_22343,inst_22341);
var inst_22320__$1 = inst_22344;
var state_22368__$1 = (function (){var statearr_22390 = state_22368;
(statearr_22390[(9)] = inst_22320__$1);

return statearr_22390;
})();
var statearr_22391_22416 = state_22368__$1;
(statearr_22391_22416[(2)] = null);

(statearr_22391_22416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (16))){
var inst_22353 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22392_22417 = state_22368__$1;
(statearr_22392_22417[(2)] = inst_22353);

(statearr_22392_22417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (10))){
var inst_22360 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22393_22418 = state_22368__$1;
(statearr_22393_22418[(2)] = inst_22360);

(statearr_22393_22418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (8))){
var inst_22320 = (state_22368[(9)]);
var inst_22335 = cljs.core.keys.call(null,inst_22320);
var inst_22336 = reagi.core.close_all_BANG_.call(null,inst_22335);
var state_22368__$1 = state_22368;
var statearr_22394_22419 = state_22368__$1;
(statearr_22394_22419[(2)] = inst_22336);

(statearr_22394_22419[(1)] = (10));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__18810__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__18810__auto____0 = (function (){
var statearr_22398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22398[(0)] = reagi$core$flatten_ch_$_state_machine__18810__auto__);

(statearr_22398[(1)] = (1));

return statearr_22398;
});
var reagi$core$flatten_ch_$_state_machine__18810__auto____1 = (function (state_22368){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_22368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e22399){if((e22399 instanceof Object)){
var ex__18813__auto__ = e22399;
var statearr_22400_22420 = state_22368;
(statearr_22400_22420[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22421 = state_22368;
state_22368 = G__22421;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__18810__auto__ = function(state_22368){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__18810__auto____1.call(this,state_22368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__18810__auto____0;
reagi$core$flatten_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__18810__auto____1;
return reagi$core$flatten_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_22401 = f__18831__auto__.call(null);
(statearr_22401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_22401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__22423 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__22423,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__22423,((function (G__22423,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__22423,ch,valve))
);

reagi.core.depend_on.call(null,G__22423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__22423;
});

//# sourceMappingURL=core.js.map?rel=1456865902622