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
if(typeof reagi.core.t_reagi$core33288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core33288 = (function (box,x,meta33289){
this.box = box;
this.x = x;
this.meta33289 = meta33289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core33288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33290,meta33289__$1){
var self__ = this;
var _33290__$1 = this;
return (new reagi.core.t_reagi$core33288(self__.box,self__.x,meta33289__$1));
});

reagi.core.t_reagi$core33288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33290){
var self__ = this;
var _33290__$1 = this;
return self__.meta33289;
});

reagi.core.t_reagi$core33288.prototype.reagi$core$Boxed$ = true;

reagi.core.t_reagi$core33288.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core33288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Box a value to ensure it can be sent through a channel."], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta33289","meta33289",212226923,null)], null);
});

reagi.core.t_reagi$core33288.cljs$lang$type = true;

reagi.core.t_reagi$core33288.cljs$lang$ctorStr = "reagi.core/t_reagi$core33288";

reagi.core.t_reagi$core33288.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/t_reagi$core33288");
});

reagi.core.__GT_t_reagi$core33288 = (function reagi$core$box_$___GT_t_reagi$core33288(box__$1,x__$1,meta33289){
return (new reagi.core.t_reagi$core33288(box__$1,x__$1,meta33289));
});

}

return (new reagi.core.t_reagi$core33288(reagi$core$box,x,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33291_SHARP_){
if((p1__33291_SHARP_ instanceof reagi.core.Completed)){
return p1__33291_SHARP_;
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
if(typeof reagi.core.t_reagi$core33527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core33527 = (function (mult_STAR_,ch,state,meta33528){
this.mult_STAR_ = mult_STAR_;
this.ch = ch;
this.state = state;
this.meta33528 = meta33528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core33527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_33529,meta33528__$1){
var self__ = this;
var _33529__$1 = this;
return (new reagi.core.t_reagi$core33527(self__.mult_STAR_,self__.ch,self__.state,meta33528__$1));
});})(state))
;

reagi.core.t_reagi$core33527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_33529){
var self__ = this;
var _33529__$1 = this;
return self__.meta33528;
});})(state))
;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mux$ = true;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mult$ = true;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__33531){
var vec__33532 = p__33531;
var o_QMARK_ = cljs.core.nth.call(null,vec__33532,(0),null);
var cs = cljs.core.nth.call(null,vec__33532,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__33530 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__33530,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__33530,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__33533){
var vec__33534 = p__33533;
var open_QMARK_ = cljs.core.nth.call(null,vec__33534,(0),null);
var cs = cljs.core.nth.call(null,vec__33534,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core33527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__33535){
var vec__33536 = p__33535;
var open_QMARK_ = cljs.core.nth.call(null,vec__33536,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__33536,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core33527.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult*","mult*",-731771795,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"A version of clojure.core.async/mult that fixes ASYNC-64.\n  This can be removed once a fix is released for core.async."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta33528","meta33528",-252017492,null)], null);
});})(state))
;

reagi.core.t_reagi$core33527.cljs$lang$type = true;

reagi.core.t_reagi$core33527.cljs$lang$ctorStr = "reagi.core/t_reagi$core33527";

reagi.core.t_reagi$core33527.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"reagi.core/t_reagi$core33527");
});})(state))
;

reagi.core.__GT_t_reagi$core33527 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core33527(mult_STAR___$1,ch__$1,state__$1,meta33528){
return (new reagi.core.t_reagi$core33527(mult_STAR___$1,ch__$1,state__$1,meta33528));
});})(state))
;

}

return (new reagi.core.t_reagi$core33527(reagi$core$mult_STAR_,ch,state,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18830__auto___33762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33762,state,m,dchan,dctr,done){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33762,state,m,dchan,dctr,done){
return (function (state_33673){
var state_val_33674 = (state_33673[(1)]);
if((state_val_33674 === (7))){
var inst_33669 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33675_33763 = state_33673__$1;
(statearr_33675_33763[(2)] = inst_33669);

(statearr_33675_33763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (20))){
var inst_33573 = (state_33673[(7)]);
var inst_33583 = cljs.core.first.call(null,inst_33573);
var inst_33584 = cljs.core.nth.call(null,inst_33583,(0),null);
var inst_33585 = cljs.core.nth.call(null,inst_33583,(1),null);
var state_33673__$1 = (function (){var statearr_33676 = state_33673;
(statearr_33676[(8)] = inst_33584);

return statearr_33676;
})();
if(cljs.core.truth_(inst_33585)){
var statearr_33677_33764 = state_33673__$1;
(statearr_33677_33764[(1)] = (22));

} else {
var statearr_33678_33765 = state_33673__$1;
(statearr_33678_33765[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (27))){
var inst_33539 = (state_33673[(9)]);
var inst_33614 = (state_33673[(10)]);
var inst_33616 = (state_33673[(11)]);
var inst_33621 = (state_33673[(12)]);
var inst_33621__$1 = cljs.core._nth.call(null,inst_33614,inst_33616);
var inst_33622 = cljs.core.async.put_BANG_.call(null,inst_33621__$1,inst_33539,done);
var state_33673__$1 = (function (){var statearr_33679 = state_33673;
(statearr_33679[(12)] = inst_33621__$1);

return statearr_33679;
})();
if(cljs.core.truth_(inst_33622)){
var statearr_33680_33766 = state_33673__$1;
(statearr_33680_33766[(1)] = (30));

} else {
var statearr_33681_33767 = state_33673__$1;
(statearr_33681_33767[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (1))){
var state_33673__$1 = state_33673;
var statearr_33682_33768 = state_33673__$1;
(statearr_33682_33768[(2)] = null);

(statearr_33682_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (24))){
var inst_33573 = (state_33673[(7)]);
var inst_33590 = (state_33673[(2)]);
var inst_33591 = cljs.core.next.call(null,inst_33573);
var inst_33553 = inst_33591;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33673__$1 = (function (){var statearr_33683 = state_33673;
(statearr_33683[(13)] = inst_33554);

(statearr_33683[(14)] = inst_33553);

(statearr_33683[(15)] = inst_33590);

(statearr_33683[(16)] = inst_33555);

(statearr_33683[(17)] = inst_33556);

return statearr_33683;
})();
var statearr_33684_33769 = state_33673__$1;
(statearr_33684_33769[(2)] = null);

(statearr_33684_33769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (39))){
var state_33673__$1 = state_33673;
var statearr_33688_33770 = state_33673__$1;
(statearr_33688_33770[(2)] = null);

(statearr_33688_33770[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (4))){
var inst_33539 = (state_33673[(9)]);
var inst_33539__$1 = (state_33673[(2)]);
var inst_33540 = (inst_33539__$1 == null);
var state_33673__$1 = (function (){var statearr_33689 = state_33673;
(statearr_33689[(9)] = inst_33539__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33540)){
var statearr_33690_33771 = state_33673__$1;
(statearr_33690_33771[(1)] = (5));

} else {
var statearr_33691_33772 = state_33673__$1;
(statearr_33691_33772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (15))){
var inst_33554 = (state_33673[(13)]);
var inst_33553 = (state_33673[(14)]);
var inst_33555 = (state_33673[(16)]);
var inst_33556 = (state_33673[(17)]);
var inst_33569 = (state_33673[(2)]);
var inst_33570 = (inst_33556 + (1));
var tmp33685 = inst_33554;
var tmp33686 = inst_33553;
var tmp33687 = inst_33555;
var inst_33553__$1 = tmp33686;
var inst_33554__$1 = tmp33685;
var inst_33555__$1 = tmp33687;
var inst_33556__$1 = inst_33570;
var state_33673__$1 = (function (){var statearr_33692 = state_33673;
(statearr_33692[(18)] = inst_33569);

(statearr_33692[(13)] = inst_33554__$1);

(statearr_33692[(14)] = inst_33553__$1);

(statearr_33692[(16)] = inst_33555__$1);

(statearr_33692[(17)] = inst_33556__$1);

return statearr_33692;
})();
var statearr_33693_33773 = state_33673__$1;
(statearr_33693_33773[(2)] = null);

(statearr_33693_33773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (21))){
var inst_33594 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33697_33774 = state_33673__$1;
(statearr_33697_33774[(2)] = inst_33594);

(statearr_33697_33774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (31))){
var inst_33621 = (state_33673[(12)]);
var inst_33625 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_33626 = cljs.core.async.untap_STAR_.call(null,m,inst_33621);
var state_33673__$1 = (function (){var statearr_33698 = state_33673;
(statearr_33698[(19)] = inst_33625);

return statearr_33698;
})();
var statearr_33699_33775 = state_33673__$1;
(statearr_33699_33775[(2)] = inst_33626);

(statearr_33699_33775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (32))){
var inst_33614 = (state_33673[(10)]);
var inst_33615 = (state_33673[(20)]);
var inst_33616 = (state_33673[(11)]);
var inst_33613 = (state_33673[(21)]);
var inst_33628 = (state_33673[(2)]);
var inst_33629 = (inst_33616 + (1));
var tmp33694 = inst_33614;
var tmp33695 = inst_33615;
var tmp33696 = inst_33613;
var inst_33613__$1 = tmp33696;
var inst_33614__$1 = tmp33694;
var inst_33615__$1 = tmp33695;
var inst_33616__$1 = inst_33629;
var state_33673__$1 = (function (){var statearr_33700 = state_33673;
(statearr_33700[(10)] = inst_33614__$1);

(statearr_33700[(20)] = inst_33615__$1);

(statearr_33700[(22)] = inst_33628);

(statearr_33700[(11)] = inst_33616__$1);

(statearr_33700[(21)] = inst_33613__$1);

return statearr_33700;
})();
var statearr_33701_33776 = state_33673__$1;
(statearr_33701_33776[(2)] = null);

(statearr_33701_33776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (40))){
var inst_33641 = (state_33673[(23)]);
var inst_33645 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_33646 = cljs.core.async.untap_STAR_.call(null,m,inst_33641);
var state_33673__$1 = (function (){var statearr_33702 = state_33673;
(statearr_33702[(24)] = inst_33645);

return statearr_33702;
})();
var statearr_33703_33777 = state_33673__$1;
(statearr_33703_33777[(2)] = inst_33646);

(statearr_33703_33777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (33))){
var inst_33632 = (state_33673[(25)]);
var inst_33634 = cljs.core.chunked_seq_QMARK_.call(null,inst_33632);
var state_33673__$1 = state_33673;
if(inst_33634){
var statearr_33704_33778 = state_33673__$1;
(statearr_33704_33778[(1)] = (36));

} else {
var statearr_33705_33779 = state_33673__$1;
(statearr_33705_33779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (13))){
var inst_33563 = (state_33673[(26)]);
var inst_33566 = cljs.core.async.close_BANG_.call(null,inst_33563);
var state_33673__$1 = state_33673;
var statearr_33706_33780 = state_33673__$1;
(statearr_33706_33780[(2)] = inst_33566);

(statearr_33706_33780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (22))){
var inst_33584 = (state_33673[(8)]);
var inst_33587 = cljs.core.async.close_BANG_.call(null,inst_33584);
var state_33673__$1 = state_33673;
var statearr_33707_33781 = state_33673__$1;
(statearr_33707_33781[(2)] = inst_33587);

(statearr_33707_33781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (36))){
var inst_33632 = (state_33673[(25)]);
var inst_33636 = cljs.core.chunk_first.call(null,inst_33632);
var inst_33637 = cljs.core.chunk_rest.call(null,inst_33632);
var inst_33638 = cljs.core.count.call(null,inst_33636);
var inst_33613 = inst_33637;
var inst_33614 = inst_33636;
var inst_33615 = inst_33638;
var inst_33616 = (0);
var state_33673__$1 = (function (){var statearr_33708 = state_33673;
(statearr_33708[(10)] = inst_33614);

(statearr_33708[(20)] = inst_33615);

(statearr_33708[(11)] = inst_33616);

(statearr_33708[(21)] = inst_33613);

return statearr_33708;
})();
var statearr_33709_33782 = state_33673__$1;
(statearr_33709_33782[(2)] = null);

(statearr_33709_33782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (41))){
var inst_33632 = (state_33673[(25)]);
var inst_33648 = (state_33673[(2)]);
var inst_33649 = cljs.core.next.call(null,inst_33632);
var inst_33613 = inst_33649;
var inst_33614 = null;
var inst_33615 = (0);
var inst_33616 = (0);
var state_33673__$1 = (function (){var statearr_33710 = state_33673;
(statearr_33710[(10)] = inst_33614);

(statearr_33710[(20)] = inst_33615);

(statearr_33710[(11)] = inst_33616);

(statearr_33710[(27)] = inst_33648);

(statearr_33710[(21)] = inst_33613);

return statearr_33710;
})();
var statearr_33711_33783 = state_33673__$1;
(statearr_33711_33783[(2)] = null);

(statearr_33711_33783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (43))){
var state_33673__$1 = state_33673;
var statearr_33712_33784 = state_33673__$1;
(statearr_33712_33784[(2)] = null);

(statearr_33712_33784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (29))){
var inst_33657 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33713_33785 = state_33673__$1;
(statearr_33713_33785[(2)] = inst_33657);

(statearr_33713_33785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (44))){
var inst_33666 = (state_33673[(2)]);
var state_33673__$1 = (function (){var statearr_33714 = state_33673;
(statearr_33714[(28)] = inst_33666);

return statearr_33714;
})();
var statearr_33715_33786 = state_33673__$1;
(statearr_33715_33786[(2)] = null);

(statearr_33715_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (6))){
var inst_33605 = (state_33673[(29)]);
var inst_33603 = cljs.core.deref.call(null,state);
var inst_33604 = cljs.core.second.call(null,inst_33603);
var inst_33605__$1 = cljs.core.keys.call(null,inst_33604);
var inst_33606 = cljs.core.count.call(null,inst_33605__$1);
var inst_33607 = cljs.core.reset_BANG_.call(null,dctr,inst_33606);
var inst_33612 = cljs.core.seq.call(null,inst_33605__$1);
var inst_33613 = inst_33612;
var inst_33614 = null;
var inst_33615 = (0);
var inst_33616 = (0);
var state_33673__$1 = (function (){var statearr_33716 = state_33673;
(statearr_33716[(29)] = inst_33605__$1);

(statearr_33716[(10)] = inst_33614);

(statearr_33716[(20)] = inst_33615);

(statearr_33716[(11)] = inst_33616);

(statearr_33716[(21)] = inst_33613);

(statearr_33716[(30)] = inst_33607);

return statearr_33716;
})();
var statearr_33717_33787 = state_33673__$1;
(statearr_33717_33787[(2)] = null);

(statearr_33717_33787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (28))){
var inst_33632 = (state_33673[(25)]);
var inst_33613 = (state_33673[(21)]);
var inst_33632__$1 = cljs.core.seq.call(null,inst_33613);
var state_33673__$1 = (function (){var statearr_33718 = state_33673;
(statearr_33718[(25)] = inst_33632__$1);

return statearr_33718;
})();
if(inst_33632__$1){
var statearr_33719_33788 = state_33673__$1;
(statearr_33719_33788[(1)] = (33));

} else {
var statearr_33720_33789 = state_33673__$1;
(statearr_33720_33789[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (25))){
var inst_33615 = (state_33673[(20)]);
var inst_33616 = (state_33673[(11)]);
var inst_33618 = (inst_33616 < inst_33615);
var inst_33619 = inst_33618;
var state_33673__$1 = state_33673;
if(cljs.core.truth_(inst_33619)){
var statearr_33721_33790 = state_33673__$1;
(statearr_33721_33790[(1)] = (27));

} else {
var statearr_33722_33791 = state_33673__$1;
(statearr_33722_33791[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (34))){
var state_33673__$1 = state_33673;
var statearr_33723_33792 = state_33673__$1;
(statearr_33723_33792[(2)] = null);

(statearr_33723_33792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (17))){
var state_33673__$1 = state_33673;
var statearr_33724_33793 = state_33673__$1;
(statearr_33724_33793[(2)] = null);

(statearr_33724_33793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (3))){
var inst_33671 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33673__$1,inst_33671);
} else {
if((state_val_33674 === (12))){
var inst_33599 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33725_33794 = state_33673__$1;
(statearr_33725_33794[(2)] = inst_33599);

(statearr_33725_33794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (2))){
var state_33673__$1 = state_33673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33673__$1,(4),ch);
} else {
if((state_val_33674 === (23))){
var state_33673__$1 = state_33673;
var statearr_33726_33795 = state_33673__$1;
(statearr_33726_33795[(2)] = null);

(statearr_33726_33795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (35))){
var inst_33655 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33727_33796 = state_33673__$1;
(statearr_33727_33796[(2)] = inst_33655);

(statearr_33727_33796[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (19))){
var inst_33573 = (state_33673[(7)]);
var inst_33577 = cljs.core.chunk_first.call(null,inst_33573);
var inst_33578 = cljs.core.chunk_rest.call(null,inst_33573);
var inst_33579 = cljs.core.count.call(null,inst_33577);
var inst_33553 = inst_33578;
var inst_33554 = inst_33577;
var inst_33555 = inst_33579;
var inst_33556 = (0);
var state_33673__$1 = (function (){var statearr_33728 = state_33673;
(statearr_33728[(13)] = inst_33554);

(statearr_33728[(14)] = inst_33553);

(statearr_33728[(16)] = inst_33555);

(statearr_33728[(17)] = inst_33556);

return statearr_33728;
})();
var statearr_33729_33797 = state_33673__$1;
(statearr_33729_33797[(2)] = null);

(statearr_33729_33797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (11))){
var inst_33573 = (state_33673[(7)]);
var inst_33553 = (state_33673[(14)]);
var inst_33573__$1 = cljs.core.seq.call(null,inst_33553);
var state_33673__$1 = (function (){var statearr_33730 = state_33673;
(statearr_33730[(7)] = inst_33573__$1);

return statearr_33730;
})();
if(inst_33573__$1){
var statearr_33731_33798 = state_33673__$1;
(statearr_33731_33798[(1)] = (16));

} else {
var statearr_33732_33799 = state_33673__$1;
(statearr_33732_33799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (9))){
var inst_33601 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33733_33800 = state_33673__$1;
(statearr_33733_33800[(2)] = inst_33601);

(statearr_33733_33800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (5))){
var inst_33539 = (state_33673[(9)]);
var inst_33544 = (function (){var val = inst_33539;
return ((function (val,inst_33539,state_val_33674,c__18830__auto___33762,state,m,dchan,dctr,done){
return (function (p__33543){
var vec__33734 = p__33543;
var _ = cljs.core.nth.call(null,vec__33734,(0),null);
var cs = cljs.core.nth.call(null,vec__33734,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_33539,state_val_33674,c__18830__auto___33762,state,m,dchan,dctr,done))
})();
var inst_33545 = cljs.core.swap_BANG_.call(null,state,inst_33544);
var inst_33546 = cljs.core.nth.call(null,inst_33545,(0),null);
var inst_33547 = cljs.core.nth.call(null,inst_33545,(1),null);
var inst_33552 = cljs.core.seq.call(null,inst_33547);
var inst_33553 = inst_33552;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33673__$1 = (function (){var statearr_33735 = state_33673;
(statearr_33735[(13)] = inst_33554);

(statearr_33735[(14)] = inst_33553);

(statearr_33735[(31)] = inst_33546);

(statearr_33735[(16)] = inst_33555);

(statearr_33735[(17)] = inst_33556);

return statearr_33735;
})();
var statearr_33736_33801 = state_33673__$1;
(statearr_33736_33801[(2)] = null);

(statearr_33736_33801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (14))){
var state_33673__$1 = state_33673;
var statearr_33737_33802 = state_33673__$1;
(statearr_33737_33802[(2)] = null);

(statearr_33737_33802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (45))){
var inst_33663 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33738_33803 = state_33673__$1;
(statearr_33738_33803[(2)] = inst_33663);

(statearr_33738_33803[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (26))){
var inst_33605 = (state_33673[(29)]);
var inst_33659 = (state_33673[(2)]);
var inst_33660 = cljs.core.seq.call(null,inst_33605);
var state_33673__$1 = (function (){var statearr_33739 = state_33673;
(statearr_33739[(32)] = inst_33659);

return statearr_33739;
})();
if(inst_33660){
var statearr_33740_33804 = state_33673__$1;
(statearr_33740_33804[(1)] = (42));

} else {
var statearr_33741_33805 = state_33673__$1;
(statearr_33741_33805[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (16))){
var inst_33573 = (state_33673[(7)]);
var inst_33575 = cljs.core.chunked_seq_QMARK_.call(null,inst_33573);
var state_33673__$1 = state_33673;
if(inst_33575){
var statearr_33742_33806 = state_33673__$1;
(statearr_33742_33806[(1)] = (19));

} else {
var statearr_33743_33807 = state_33673__$1;
(statearr_33743_33807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (38))){
var inst_33652 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33744_33808 = state_33673__$1;
(statearr_33744_33808[(2)] = inst_33652);

(statearr_33744_33808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (30))){
var state_33673__$1 = state_33673;
var statearr_33745_33809 = state_33673__$1;
(statearr_33745_33809[(2)] = null);

(statearr_33745_33809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (10))){
var inst_33554 = (state_33673[(13)]);
var inst_33556 = (state_33673[(17)]);
var inst_33562 = cljs.core._nth.call(null,inst_33554,inst_33556);
var inst_33563 = cljs.core.nth.call(null,inst_33562,(0),null);
var inst_33564 = cljs.core.nth.call(null,inst_33562,(1),null);
var state_33673__$1 = (function (){var statearr_33746 = state_33673;
(statearr_33746[(26)] = inst_33563);

return statearr_33746;
})();
if(cljs.core.truth_(inst_33564)){
var statearr_33747_33810 = state_33673__$1;
(statearr_33747_33810[(1)] = (13));

} else {
var statearr_33748_33811 = state_33673__$1;
(statearr_33748_33811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (18))){
var inst_33597 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33749_33812 = state_33673__$1;
(statearr_33749_33812[(2)] = inst_33597);

(statearr_33749_33812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (42))){
var state_33673__$1 = state_33673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33673__$1,(45),dchan);
} else {
if((state_val_33674 === (37))){
var inst_33539 = (state_33673[(9)]);
var inst_33632 = (state_33673[(25)]);
var inst_33641 = (state_33673[(23)]);
var inst_33641__$1 = cljs.core.first.call(null,inst_33632);
var inst_33642 = cljs.core.async.put_BANG_.call(null,inst_33641__$1,inst_33539,done);
var state_33673__$1 = (function (){var statearr_33750 = state_33673;
(statearr_33750[(23)] = inst_33641__$1);

return statearr_33750;
})();
if(cljs.core.truth_(inst_33642)){
var statearr_33751_33813 = state_33673__$1;
(statearr_33751_33813[(1)] = (39));

} else {
var statearr_33752_33814 = state_33673__$1;
(statearr_33752_33814[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (8))){
var inst_33555 = (state_33673[(16)]);
var inst_33556 = (state_33673[(17)]);
var inst_33558 = (inst_33556 < inst_33555);
var inst_33559 = inst_33558;
var state_33673__$1 = state_33673;
if(cljs.core.truth_(inst_33559)){
var statearr_33753_33815 = state_33673__$1;
(statearr_33753_33815[(1)] = (10));

} else {
var statearr_33754_33816 = state_33673__$1;
(statearr_33754_33816[(1)] = (11));

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
});})(c__18830__auto___33762,state,m,dchan,dctr,done))
;
return ((function (switch__18809__auto__,c__18830__auto___33762,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__18810__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_33758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33758[(0)] = reagi$core$mult_STAR__$_state_machine__18810__auto__);

(statearr_33758[(1)] = (1));

return statearr_33758;
});
var reagi$core$mult_STAR__$_state_machine__18810__auto____1 = (function (state_33673){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33759){if((e33759 instanceof Object)){
var ex__18813__auto__ = e33759;
var statearr_33760_33817 = state_33673;
(statearr_33760_33817[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33818 = state_33673;
state_33673 = G__33818;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__18810__auto__ = function(state_33673){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__18810__auto____1.call(this,state_33673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__18810__auto____0;
reagi$core$mult_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__18810__auto____1;
return reagi$core$mult_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33762,state,m,dchan,dctr,done))
})();
var state__18832__auto__ = (function (){var statearr_33761 = f__18831__auto__.call(null);
(statearr_33761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33762);

return statearr_33761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33762,state,m,dchan,dctr,done))
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
var c__18830__auto___33874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33874,stream,self____$1){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33874,stream,self____$1){
return (function (state_33824){
var state_val_33825 = (state_33824[(1)]);
if((state_val_33825 === (1))){
var inst_33820 = reagi.core.box.call(null,msg);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33824__$1,(2),self__.ch,inst_33820);
} else {
if((state_val_33825 === (2))){
var inst_33822 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33824__$1,inst_33822);
} else {
return null;
}
}
});})(c__18830__auto___33874,stream,self____$1))
;
return ((function (switch__18809__auto__,c__18830__auto___33874,stream,self____$1){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_33829 = [null,null,null,null,null,null,null];
(statearr_33829[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_33829[(1)] = (1));

return statearr_33829;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_33824){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33830){if((e33830 instanceof Object)){
var ex__18813__auto__ = e33830;
var statearr_33831_33875 = state_33824;
(statearr_33831_33875[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33876 = state_33824;
state_33824 = G__33876;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_33824){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_33824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33874,stream,self____$1))
})();
var state__18832__auto__ = (function (){var statearr_33832 = f__18831__auto__.call(null);
(statearr_33832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33874);

return statearr_33832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33874,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args33819){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33819)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__18830__auto___33877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33877,stream){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33877,stream){
return (function (state_33837){
var state_val_33838 = (state_33837[(1)]);
if((state_val_33838 === (1))){
var inst_33833 = reagi.core.box.call(null,msg);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33837__$1,(2),self__.ch,inst_33833);
} else {
if((state_val_33838 === (2))){
var inst_33835 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33837__$1,inst_33835);
} else {
return null;
}
}
});})(c__18830__auto___33877,stream))
;
return ((function (switch__18809__auto__,c__18830__auto___33877,stream){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_33842 = [null,null,null,null,null,null,null];
(statearr_33842[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_33842[(1)] = (1));

return statearr_33842;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_33837){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33843){if((e33843 instanceof Object)){
var ex__18813__auto__ = e33843;
var statearr_33844_33878 = state_33837;
(statearr_33844_33878[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33879 = state_33837;
state_33837 = G__33879;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_33837){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_33837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33877,stream))
})();
var state__18832__auto__ = (function (){var statearr_33845 = f__18831__auto__.call(null);
(statearr_33845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33877);

return statearr_33845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33877,stream))
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
var c__18830__auto___33880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33880,___$1){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33880,___$1){
return (function (state_33855){
var state_val_33856 = (state_33855[(1)]);
if((state_val_33856 === (1))){
var inst_33846 = (state_33855[(7)]);
var inst_33846__$1 = cljs.core.deref.call(null,self__.head);
var state_33855__$1 = (function (){var statearr_33857 = state_33855;
(statearr_33857[(7)] = inst_33846__$1);

return statearr_33857;
})();
if(cljs.core.truth_(inst_33846__$1)){
var statearr_33858_33881 = state_33855__$1;
(statearr_33858_33881[(1)] = (2));

} else {
var statearr_33859_33882 = state_33855__$1;
(statearr_33859_33882[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (2))){
var inst_33846 = (state_33855[(7)]);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33855__$1,(5),channel,inst_33846);
} else {
if((state_val_33856 === (3))){
var state_33855__$1 = state_33855;
var statearr_33860_33883 = state_33855__$1;
(statearr_33860_33883[(2)] = null);

(statearr_33860_33883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (4))){
var inst_33852 = (state_33855[(2)]);
var inst_33853 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_33855__$1 = (function (){var statearr_33861 = state_33855;
(statearr_33861[(8)] = inst_33852);

return statearr_33861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33855__$1,inst_33853);
} else {
if((state_val_33856 === (5))){
var inst_33849 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33862_33884 = state_33855__$1;
(statearr_33862_33884[(2)] = inst_33849);

(statearr_33862_33884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__18830__auto___33880,___$1))
;
return ((function (switch__18809__auto__,c__18830__auto___33880,___$1){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_33866 = [null,null,null,null,null,null,null,null,null];
(statearr_33866[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_33866[(1)] = (1));

return statearr_33866;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_33855){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33867){if((e33867 instanceof Object)){
var ex__18813__auto__ = e33867;
var statearr_33868_33885 = state_33855;
(statearr_33868_33885[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_33855;
state_33855 = G__33886;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_33855){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_33855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33880,___$1))
})();
var state__18832__auto__ = (function (){var statearr_33869 = f__18831__auto__.call(null);
(statearr_33869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33880);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33880,___$1))
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
var seq__33870_33887 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__33871_33888 = null;
var count__33872_33889 = (0);
var i__33873_33890 = (0);
while(true){
if((i__33873_33890 < count__33872_33889)){
var d_33891 = cljs.core._nth.call(null,chunk__33871_33888,i__33873_33890);
d_33891.call(null);

var G__33892 = seq__33870_33887;
var G__33893 = chunk__33871_33888;
var G__33894 = count__33872_33889;
var G__33895 = (i__33873_33890 + (1));
seq__33870_33887 = G__33892;
chunk__33871_33888 = G__33893;
count__33872_33889 = G__33894;
i__33873_33890 = G__33895;
continue;
} else {
var temp__4425__auto___33896 = cljs.core.seq.call(null,seq__33870_33887);
if(temp__4425__auto___33896){
var seq__33870_33897__$1 = temp__4425__auto___33896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33870_33897__$1)){
var c__17608__auto___33898 = cljs.core.chunk_first.call(null,seq__33870_33897__$1);
var G__33899 = cljs.core.chunk_rest.call(null,seq__33870_33897__$1);
var G__33900 = c__17608__auto___33898;
var G__33901 = cljs.core.count.call(null,c__17608__auto___33898);
var G__33902 = (0);
seq__33870_33887 = G__33899;
chunk__33871_33888 = G__33900;
count__33872_33889 = G__33901;
i__33873_33890 = G__33902;
continue;
} else {
var d_33903 = cljs.core.first.call(null,seq__33870_33897__$1);
d_33903.call(null);

var G__33904 = cljs.core.next.call(null,seq__33870_33897__$1);
var G__33905 = null;
var G__33906 = (0);
var G__33907 = (0);
seq__33870_33887 = G__33904;
chunk__33871_33888 = G__33905;
count__33872_33889 = G__33906;
i__33873_33890 = G__33907;
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
var args33908 = [];
var len__17863__auto___33958 = arguments.length;
var i__17864__auto___33959 = (0);
while(true){
if((i__17864__auto___33959 < len__17863__auto___33958)){
args33908.push((arguments[i__17864__auto___33959]));

var G__33960 = (i__17864__auto___33959 + (1));
i__17864__auto___33959 = G__33960;
continue;
} else {
}
break;
}

var G__33910 = args33908.length;
switch (G__33910) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33908.length)].join('')));

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
var c__18830__auto___33962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33962,in$,closed,head,out,mult){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33962,in$,closed,head,out,mult){
return (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (7))){
var inst_33920 = (state_33934[(7)]);
var inst_33920__$1 = (state_33934[(2)]);
var state_33934__$1 = (function (){var statearr_33936 = state_33934;
(statearr_33936[(7)] = inst_33920__$1);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33920__$1)){
var statearr_33937_33963 = state_33934__$1;
(statearr_33937_33963[(1)] = (8));

} else {
var statearr_33938_33964 = state_33934__$1;
(statearr_33938_33964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (1))){
var inst_33911 = init;
var state_33934__$1 = (function (){var statearr_33939 = state_33934;
(statearr_33939[(8)] = inst_33911);

return statearr_33939;
})();
var statearr_33940_33965 = state_33934__$1;
(statearr_33940_33965[(2)] = null);

(statearr_33940_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (4))){
var inst_33915 = cljs.core.async.close_BANG_.call(null,in$);
var state_33934__$1 = state_33934;
var statearr_33941_33966 = state_33934__$1;
(statearr_33941_33966[(2)] = inst_33915);

(statearr_33941_33966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (6))){
var inst_33918 = (state_33934[(2)]);
var state_33934__$1 = (function (){var statearr_33942 = state_33934;
(statearr_33942[(9)] = inst_33918);

return statearr_33942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33934__$1,(7),in$);
} else {
if((state_val_33935 === (3))){
var inst_33930 = (state_33934[(2)]);
var inst_33931 = cljs.core.async.close_BANG_.call(null,out);
var inst_33932 = cljs.core.reset_BANG_.call(null,closed,true);
var state_33934__$1 = (function (){var statearr_33943 = state_33934;
(statearr_33943[(10)] = inst_33931);

(statearr_33943[(11)] = inst_33930);

return statearr_33943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33934__$1,inst_33932);
} else {
if((state_val_33935 === (2))){
var inst_33911 = (state_33934[(8)]);
var inst_33913 = (inst_33911 instanceof reagi.core.Completed);
var state_33934__$1 = state_33934;
if(cljs.core.truth_(inst_33913)){
var statearr_33944_33967 = state_33934__$1;
(statearr_33944_33967[(1)] = (4));

} else {
var statearr_33945_33968 = state_33934__$1;
(statearr_33945_33968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (11))){
var inst_33920 = (state_33934[(7)]);
var inst_33923 = (state_33934[(2)]);
var inst_33924 = cljs.core.reset_BANG_.call(null,head,inst_33920);
var inst_33911 = inst_33920;
var state_33934__$1 = (function (){var statearr_33946 = state_33934;
(statearr_33946[(12)] = inst_33924);

(statearr_33946[(13)] = inst_33923);

(statearr_33946[(8)] = inst_33911);

return statearr_33946;
})();
var statearr_33947_33969 = state_33934__$1;
(statearr_33947_33969[(2)] = null);

(statearr_33947_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (9))){
var state_33934__$1 = state_33934;
var statearr_33948_33970 = state_33934__$1;
(statearr_33948_33970[(2)] = null);

(statearr_33948_33970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (5))){
var state_33934__$1 = state_33934;
var statearr_33949_33971 = state_33934__$1;
(statearr_33949_33971[(2)] = null);

(statearr_33949_33971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (10))){
var inst_33928 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
var statearr_33950_33972 = state_33934__$1;
(statearr_33950_33972[(2)] = inst_33928);

(statearr_33950_33972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (8))){
var inst_33920 = (state_33934[(7)]);
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33934__$1,(11),out,inst_33920);
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
});})(c__18830__auto___33962,in$,closed,head,out,mult))
;
return ((function (switch__18809__auto__,c__18830__auto___33962,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__18810__auto__ = null;
var reagi$core$state_machine__18810__auto____0 = (function (){
var statearr_33954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33954[(0)] = reagi$core$state_machine__18810__auto__);

(statearr_33954[(1)] = (1));

return statearr_33954;
});
var reagi$core$state_machine__18810__auto____1 = (function (state_33934){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33955){if((e33955 instanceof Object)){
var ex__18813__auto__ = e33955;
var statearr_33956_33973 = state_33934;
(statearr_33956_33973[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33974 = state_33934;
state_33934 = G__33974;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$state_machine__18810__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return reagi$core$state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$state_machine__18810__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__18810__auto____0;
reagi$core$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__18810__auto____1;
return reagi$core$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33962,in$,closed,head,out,mult))
})();
var state__18832__auto__ = (function (){var statearr_33957 = f__18831__auto__.call(null);
(statearr_33957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33962);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33962,in$,closed,head,out,mult))
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
var args33975 = [];
var len__17863__auto___33985 = arguments.length;
var i__17864__auto___33986 = (0);
while(true){
if((i__17864__auto___33986 < len__17863__auto___33985)){
args33975.push((arguments[i__17864__auto___33986]));

var G__33987 = (i__17864__auto___33986 + (1));
i__17864__auto___33986 = G__33987;
continue;
} else {
}
break;
}

var G__33980 = args33975.length;
switch (G__33980) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args33975.slice((2)),(0)));
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
var seq__33981 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__33982 = null;
var count__33983 = (0);
var i__33984 = (0);
while(true){
if((i__33984 < count__33983)){
var m = cljs.core._nth.call(null,chunk__33982,i__33984);
stream.call(null,m);

var G__33989 = seq__33981;
var G__33990 = chunk__33982;
var G__33991 = count__33983;
var G__33992 = (i__33984 + (1));
seq__33981 = G__33989;
chunk__33982 = G__33990;
count__33983 = G__33991;
i__33984 = G__33992;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33981);
if(temp__4425__auto__){
var seq__33981__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33981__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__33981__$1);
var G__33993 = cljs.core.chunk_rest.call(null,seq__33981__$1);
var G__33994 = c__17608__auto__;
var G__33995 = cljs.core.count.call(null,c__17608__auto__);
var G__33996 = (0);
seq__33981 = G__33993;
chunk__33982 = G__33994;
count__33983 = G__33995;
i__33984 = G__33996;
continue;
} else {
var m = cljs.core.first.call(null,seq__33981__$1);
stream.call(null,m);

var G__33997 = cljs.core.next.call(null,seq__33981__$1);
var G__33998 = null;
var G__33999 = (0);
var G__34000 = (0);
seq__33981 = G__33997;
chunk__33982 = G__33998;
count__33983 = G__33999;
i__33984 = G__34000;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq33976){
var G__33977 = cljs.core.first.call(null,seq33976);
var seq33976__$1 = cljs.core.next.call(null,seq33976);
var G__33978 = cljs.core.first.call(null,seq33976__$1);
var seq33976__$2 = cljs.core.next.call(null,seq33976__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__33977,G__33978,seq33976__$2);
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
var seq__34005 = cljs.core.seq.call(null,chs);
var chunk__34006 = null;
var count__34007 = (0);
var i__34008 = (0);
while(true){
if((i__34008 < count__34007)){
var ch = cljs.core._nth.call(null,chunk__34006,i__34008);
cljs.core.async.close_BANG_.call(null,ch);

var G__34009 = seq__34005;
var G__34010 = chunk__34006;
var G__34011 = count__34007;
var G__34012 = (i__34008 + (1));
seq__34005 = G__34009;
chunk__34006 = G__34010;
count__34007 = G__34011;
i__34008 = G__34012;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34005);
if(temp__4425__auto__){
var seq__34005__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34005__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__34005__$1);
var G__34013 = cljs.core.chunk_rest.call(null,seq__34005__$1);
var G__34014 = c__17608__auto__;
var G__34015 = cljs.core.count.call(null,c__17608__auto__);
var G__34016 = (0);
seq__34005 = G__34013;
chunk__34006 = G__34014;
count__34007 = G__34015;
i__34008 = G__34016;
continue;
} else {
var ch = cljs.core.first.call(null,seq__34005__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__34017 = cljs.core.next.call(null,seq__34005__$1);
var G__34018 = null;
var G__34019 = (0);
var G__34020 = (0);
seq__34005 = G__34017;
chunk__34006 = G__34018;
count__34007 = G__34019;
i__34008 = G__34020;
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
return cljs.core.mapv.call(null,(function (p1__34021_SHARP_){
return reagi.core.listen.call(null,p1__34021_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__17870__auto__ = [];
var len__17863__auto___34025 = arguments.length;
var i__17864__auto___34026 = (0);
while(true){
if((i__17864__auto___34026 < len__17863__auto___34025)){
args__17870__auto__.push((arguments[i__17864__auto___34026]));

var G__34027 = (i__17864__auto___34026 + (1));
i__17864__auto___34026 = G__34027;
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

reagi.core.connect_port.cljs$lang$applyTo = (function (seq34022){
var G__34023 = cljs.core.first.call(null,seq34022);
var seq34022__$1 = cljs.core.next.call(null,seq34022);
var G__34024 = cljs.core.first.call(null,seq34022__$1);
var seq34022__$2 = cljs.core.next.call(null,seq34022__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__34023,G__34024,seq34022__$2);
});
/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__17870__auto__ = [];
var len__17863__auto___34030 = arguments.length;
var i__17864__auto___34031 = (0);
while(true){
if((i__17864__auto___34031 < len__17863__auto___34030)){
args__17870__auto__.push((arguments[i__17864__auto___34031]));

var G__34032 = (i__17864__auto___34031 + (1));
i__17864__auto___34031 = G__34032;
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
var G__34029 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34029,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__34029,((function (G__34029,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__34029,chs))
);

reagi.core.depend_on.call(null,G__34029,streams);

return G__34029;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq34028){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34028));
});
reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,index){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,index){
return (function (state_34141){
var state_val_34142 = (state_34141[(1)]);
if((state_val_34142 === (7))){
var inst_34114 = (state_34141[(7)]);
var inst_34113 = (state_34141[(2)]);
var inst_34114__$1 = cljs.core.nth.call(null,inst_34113,(0),null);
var inst_34115 = cljs.core.nth.call(null,inst_34113,(1),null);
var state_34141__$1 = (function (){var statearr_34144 = state_34141;
(statearr_34144[(8)] = inst_34115);

(statearr_34144[(7)] = inst_34114__$1);

return statearr_34144;
})();
if(cljs.core.truth_(inst_34114__$1)){
var statearr_34145_34171 = state_34141__$1;
(statearr_34145_34171[(1)] = (8));

} else {
var statearr_34146_34172 = state_34141__$1;
(statearr_34146_34172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (1))){
var inst_34102 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_34103 = cljs.core.mapv.call(null,inst_34102,ins);
var inst_34104 = cljs.core.set.call(null,ins);
var inst_34105 = inst_34103;
var inst_34106 = inst_34104;
var state_34141__$1 = (function (){var statearr_34147 = state_34141;
(statearr_34147[(9)] = inst_34106);

(statearr_34147[(10)] = inst_34105);

return statearr_34147;
})();
var statearr_34148_34173 = state_34141__$1;
(statearr_34148_34173[(2)] = null);

(statearr_34148_34173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (4))){
var inst_34106 = (state_34141[(9)]);
var inst_34111 = cljs.core.vec.call(null,inst_34106);
var state_34141__$1 = state_34141;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34141__$1,(7),inst_34111);
} else {
if((state_val_34142 === (13))){
var inst_34106 = (state_34141[(9)]);
var inst_34119 = (state_34141[(11)]);
var inst_34127 = (state_34141[(2)]);
var tmp34143 = inst_34106;
var inst_34105 = inst_34119;
var inst_34106__$1 = tmp34143;
var state_34141__$1 = (function (){var statearr_34149 = state_34141;
(statearr_34149[(9)] = inst_34106__$1);

(statearr_34149[(12)] = inst_34127);

(statearr_34149[(10)] = inst_34105);

return statearr_34149;
})();
var statearr_34150_34174 = state_34141__$1;
(statearr_34150_34174[(2)] = null);

(statearr_34150_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (6))){
var inst_34137 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34151_34175 = state_34141__$1;
(statearr_34151_34175[(2)] = inst_34137);

(statearr_34151_34175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (3))){
var inst_34139 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34141__$1,inst_34139);
} else {
if((state_val_34142 === (12))){
var inst_34119 = (state_34141[(11)]);
var inst_34123 = reagi.core.box.call(null,inst_34119);
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34141__$1,(14),out,inst_34123);
} else {
if((state_val_34142 === (2))){
var inst_34106 = (state_34141[(9)]);
var inst_34108 = cljs.core.seq.call(null,inst_34106);
var state_34141__$1 = state_34141;
if(inst_34108){
var statearr_34153_34176 = state_34141__$1;
(statearr_34153_34176[(1)] = (4));

} else {
var statearr_34154_34177 = state_34141__$1;
(statearr_34154_34177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (11))){
var state_34141__$1 = state_34141;
var statearr_34155_34178 = state_34141__$1;
(statearr_34155_34178[(2)] = null);

(statearr_34155_34178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (9))){
var inst_34115 = (state_34141[(8)]);
var inst_34106 = (state_34141[(9)]);
var inst_34105 = (state_34141[(10)]);
var inst_34130 = cljs.core.disj.call(null,inst_34106,inst_34115);
var tmp34152 = inst_34105;
var inst_34105__$1 = tmp34152;
var inst_34106__$1 = inst_34130;
var state_34141__$1 = (function (){var statearr_34156 = state_34141;
(statearr_34156[(9)] = inst_34106__$1);

(statearr_34156[(10)] = inst_34105__$1);

return statearr_34156;
})();
var statearr_34157_34179 = state_34141__$1;
(statearr_34157_34179[(2)] = null);

(statearr_34157_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (5))){
var inst_34135 = cljs.core.async.close_BANG_.call(null,out);
var state_34141__$1 = state_34141;
var statearr_34158_34180 = state_34141__$1;
(statearr_34158_34180[(2)] = inst_34135);

(statearr_34158_34180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (14))){
var inst_34125 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34159_34181 = state_34141__$1;
(statearr_34159_34181[(2)] = inst_34125);

(statearr_34159_34181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (10))){
var inst_34133 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34160_34182 = state_34141__$1;
(statearr_34160_34182[(2)] = inst_34133);

(statearr_34160_34182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (8))){
var inst_34115 = (state_34141[(8)]);
var inst_34105 = (state_34141[(10)]);
var inst_34119 = (state_34141[(11)]);
var inst_34114 = (state_34141[(7)]);
var inst_34117 = index.call(null,inst_34115);
var inst_34118 = reagi.core.unbox.call(null,inst_34114);
var inst_34119__$1 = cljs.core.assoc.call(null,inst_34105,inst_34117,inst_34118);
var inst_34120 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_34119__$1);
var state_34141__$1 = (function (){var statearr_34161 = state_34141;
(statearr_34161[(11)] = inst_34119__$1);

return statearr_34161;
})();
if(cljs.core.truth_(inst_34120)){
var statearr_34162_34183 = state_34141__$1;
(statearr_34162_34183[(1)] = (11));

} else {
var statearr_34163_34184 = state_34141__$1;
(statearr_34163_34184[(1)] = (12));

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
var statearr_34167 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34167[(0)] = reagi$core$zip_ch_$_state_machine__18810__auto__);

(statearr_34167[(1)] = (1));

return statearr_34167;
});
var reagi$core$zip_ch_$_state_machine__18810__auto____1 = (function (state_34141){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34168){if((e34168 instanceof Object)){
var ex__18813__auto__ = e34168;
var statearr_34169_34185 = state_34141;
(statearr_34169_34185[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34186 = state_34141;
state_34141 = G__34186;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__18810__auto__ = function(state_34141){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__18810__auto____1.call(this,state_34141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__18810__auto____0;
reagi$core$zip_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__18810__auto____1;
return reagi$core$zip_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,index))
})();
var state__18832__auto__ = (function (){var statearr_34170 = f__18831__auto__.call(null);
(statearr_34170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34170;
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
var len__17863__auto___34189 = arguments.length;
var i__17864__auto___34190 = (0);
while(true){
if((i__17864__auto___34190 < len__17863__auto___34189)){
args__17870__auto__.push((arguments[i__17864__auto___34190]));

var G__34191 = (i__17864__auto___34190 + (1));
i__17864__auto___34190 = G__34191;
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
var G__34188 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34188,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__34188,((function (G__34188,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__34188,chs))
);

reagi.core.depend_on.call(null,G__34188,streams);

return G__34188;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq34187){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34187));
});
reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_34347){
var state_val_34348 = (state_34347[(1)]);
if((state_val_34348 === (7))){
var inst_34343 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34349_34386 = state_34347__$1;
(statearr_34349_34386[(2)] = inst_34343);

(statearr_34349_34386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (20))){
var inst_34315 = (state_34347[(7)]);
var inst_34327 = (state_34347[(2)]);
var inst_34328 = cljs.core.next.call(null,inst_34315);
var inst_34300 = inst_34328;
var inst_34301 = null;
var inst_34302 = (0);
var inst_34303 = (0);
var state_34347__$1 = (function (){var statearr_34350 = state_34347;
(statearr_34350[(8)] = inst_34301);

(statearr_34350[(9)] = inst_34302);

(statearr_34350[(10)] = inst_34327);

(statearr_34350[(11)] = inst_34303);

(statearr_34350[(12)] = inst_34300);

return statearr_34350;
})();
var statearr_34351_34387 = state_34347__$1;
(statearr_34351_34387[(2)] = null);

(statearr_34351_34387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (1))){
var state_34347__$1 = state_34347;
var statearr_34352_34388 = state_34347__$1;
(statearr_34352_34388[(2)] = null);

(statearr_34352_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (4))){
var inst_34291 = (state_34347[(13)]);
var inst_34291__$1 = (state_34347[(2)]);
var state_34347__$1 = (function (){var statearr_34356 = state_34347;
(statearr_34356[(13)] = inst_34291__$1);

return statearr_34356;
})();
if(cljs.core.truth_(inst_34291__$1)){
var statearr_34357_34389 = state_34347__$1;
(statearr_34357_34389[(1)] = (5));

} else {
var statearr_34358_34390 = state_34347__$1;
(statearr_34358_34390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (15))){
var state_34347__$1 = state_34347;
var statearr_34359_34391 = state_34347__$1;
(statearr_34359_34391[(2)] = null);

(statearr_34359_34391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (13))){
var inst_34301 = (state_34347[(8)]);
var inst_34302 = (state_34347[(9)]);
var inst_34303 = (state_34347[(11)]);
var inst_34300 = (state_34347[(12)]);
var inst_34311 = (state_34347[(2)]);
var inst_34312 = (inst_34303 + (1));
var tmp34353 = inst_34301;
var tmp34354 = inst_34302;
var tmp34355 = inst_34300;
var inst_34300__$1 = tmp34355;
var inst_34301__$1 = tmp34353;
var inst_34302__$1 = tmp34354;
var inst_34303__$1 = inst_34312;
var state_34347__$1 = (function (){var statearr_34360 = state_34347;
(statearr_34360[(8)] = inst_34301__$1);

(statearr_34360[(9)] = inst_34302__$1);

(statearr_34360[(14)] = inst_34311);

(statearr_34360[(11)] = inst_34303__$1);

(statearr_34360[(12)] = inst_34300__$1);

return statearr_34360;
})();
var statearr_34361_34392 = state_34347__$1;
(statearr_34361_34392[(2)] = null);

(statearr_34361_34392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (6))){
var inst_34341 = cljs.core.async.close_BANG_.call(null,out);
var state_34347__$1 = state_34347;
var statearr_34362_34393 = state_34347__$1;
(statearr_34362_34393[(2)] = inst_34341);

(statearr_34362_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (17))){
var inst_34315 = (state_34347[(7)]);
var inst_34319 = cljs.core.chunk_first.call(null,inst_34315);
var inst_34320 = cljs.core.chunk_rest.call(null,inst_34315);
var inst_34321 = cljs.core.count.call(null,inst_34319);
var inst_34300 = inst_34320;
var inst_34301 = inst_34319;
var inst_34302 = inst_34321;
var inst_34303 = (0);
var state_34347__$1 = (function (){var statearr_34363 = state_34347;
(statearr_34363[(8)] = inst_34301);

(statearr_34363[(9)] = inst_34302);

(statearr_34363[(11)] = inst_34303);

(statearr_34363[(12)] = inst_34300);

return statearr_34363;
})();
var statearr_34364_34394 = state_34347__$1;
(statearr_34364_34394[(2)] = null);

(statearr_34364_34394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (3))){
var inst_34345 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34347__$1,inst_34345);
} else {
if((state_val_34348 === (12))){
var inst_34336 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34365_34395 = state_34347__$1;
(statearr_34365_34395[(2)] = inst_34336);

(statearr_34365_34395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (2))){
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34347__$1,(4),in$);
} else {
if((state_val_34348 === (19))){
var inst_34331 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34366_34396 = state_34347__$1;
(statearr_34366_34396[(2)] = inst_34331);

(statearr_34366_34396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (11))){
var inst_34315 = (state_34347[(7)]);
var inst_34300 = (state_34347[(12)]);
var inst_34315__$1 = cljs.core.seq.call(null,inst_34300);
var state_34347__$1 = (function (){var statearr_34367 = state_34347;
(statearr_34367[(7)] = inst_34315__$1);

return statearr_34367;
})();
if(inst_34315__$1){
var statearr_34368_34397 = state_34347__$1;
(statearr_34368_34397[(1)] = (14));

} else {
var statearr_34369_34398 = state_34347__$1;
(statearr_34369_34398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (9))){
var inst_34338 = (state_34347[(2)]);
var state_34347__$1 = (function (){var statearr_34370 = state_34347;
(statearr_34370[(15)] = inst_34338);

return statearr_34370;
})();
var statearr_34371_34399 = state_34347__$1;
(statearr_34371_34399[(2)] = null);

(statearr_34371_34399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (5))){
var inst_34291 = (state_34347[(13)]);
var inst_34293 = reagi.core.unbox.call(null,inst_34291);
var inst_34294 = f.call(null,inst_34293);
var inst_34299 = cljs.core.seq.call(null,inst_34294);
var inst_34300 = inst_34299;
var inst_34301 = null;
var inst_34302 = (0);
var inst_34303 = (0);
var state_34347__$1 = (function (){var statearr_34372 = state_34347;
(statearr_34372[(8)] = inst_34301);

(statearr_34372[(9)] = inst_34302);

(statearr_34372[(11)] = inst_34303);

(statearr_34372[(12)] = inst_34300);

return statearr_34372;
})();
var statearr_34373_34400 = state_34347__$1;
(statearr_34373_34400[(2)] = null);

(statearr_34373_34400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (14))){
var inst_34315 = (state_34347[(7)]);
var inst_34317 = cljs.core.chunked_seq_QMARK_.call(null,inst_34315);
var state_34347__$1 = state_34347;
if(inst_34317){
var statearr_34374_34401 = state_34347__$1;
(statearr_34374_34401[(1)] = (17));

} else {
var statearr_34375_34402 = state_34347__$1;
(statearr_34375_34402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (16))){
var inst_34334 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34376_34403 = state_34347__$1;
(statearr_34376_34403[(2)] = inst_34334);

(statearr_34376_34403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34348 === (10))){
var inst_34301 = (state_34347[(8)]);
var inst_34303 = (state_34347[(11)]);
var inst_34308 = cljs.core._nth.call(null,inst_34301,inst_34303);
var inst_34309 = reagi.core.box.call(null,inst_34308);
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34347__$1,(13),out,inst_34309);
} else {
if((state_val_34348 === (18))){
var inst_34315 = (state_34347[(7)]);
var inst_34324 = cljs.core.first.call(null,inst_34315);
var inst_34325 = reagi.core.box.call(null,inst_34324);
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34347__$1,(20),out,inst_34325);
} else {
if((state_val_34348 === (8))){
var inst_34302 = (state_34347[(9)]);
var inst_34303 = (state_34347[(11)]);
var inst_34305 = (inst_34303 < inst_34302);
var inst_34306 = inst_34305;
var state_34347__$1 = state_34347;
if(cljs.core.truth_(inst_34306)){
var statearr_34377_34404 = state_34347__$1;
(statearr_34377_34404[(1)] = (10));

} else {
var statearr_34378_34405 = state_34347__$1;
(statearr_34378_34405[(1)] = (11));

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
var statearr_34382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34382[(0)] = reagi$core$mapcat_ch_$_state_machine__18810__auto__);

(statearr_34382[(1)] = (1));

return statearr_34382;
});
var reagi$core$mapcat_ch_$_state_machine__18810__auto____1 = (function (state_34347){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34383){if((e34383 instanceof Object)){
var ex__18813__auto__ = e34383;
var statearr_34384_34406 = state_34347;
(statearr_34384_34406[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34407 = state_34347;
state_34347 = G__34407;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__18810__auto__ = function(state_34347){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__18810__auto____1.call(this,state_34347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__18810__auto____0;
reagi$core$mapcat_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__18810__auto____1;
return reagi$core$mapcat_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_34385 = f__18831__auto__.call(null);
(statearr_34385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34385;
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
var args34408 = [];
var len__17863__auto___34415 = arguments.length;
var i__17864__auto___34416 = (0);
while(true){
if((i__17864__auto___34416 < len__17863__auto___34415)){
args34408.push((arguments[i__17864__auto___34416]));

var G__34417 = (i__17864__auto___34416 + (1));
i__17864__auto___34416 = G__34417;
continue;
} else {
}
break;
}

var G__34413 = args34408.length;
switch (G__34413) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args34408.slice((2)),(0)));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17882__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__34414 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34414,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__34414,((function (G__34414,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__34414,ch))
);

reagi.core.depend_on.call(null,G__34414,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__34414;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq34409){
var G__34410 = cljs.core.first.call(null,seq34409);
var seq34409__$1 = cljs.core.next.call(null,seq34409);
var G__34411 = cljs.core.first.call(null,seq34409__$1);
var seq34409__$2 = cljs.core.next.call(null,seq34409__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__34410,G__34411,seq34409__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);
/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__17870__auto__ = [];
var len__17863__auto___34421 = arguments.length;
var i__17864__auto___34422 = (0);
while(true){
if((i__17864__auto___34422 < len__17863__auto___34421)){
args__17870__auto__.push((arguments[i__17864__auto___34422]));

var G__34423 = (i__17864__auto___34422 + (1));
i__17864__auto___34422 = G__34423;
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

reagi.core.map.cljs$lang$applyTo = (function (seq34419){
var G__34420 = cljs.core.first.call(null,seq34419);
var seq34419__$1 = cljs.core.next.call(null,seq34419);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__34420,seq34419__$1);
});
/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__34424_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__34424_SHARP_))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__34424_SHARP_);
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
return (function (state_34496){
var state_val_34497 = (state_34496[(1)]);
if((state_val_34497 === (7))){
var inst_34492 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34498_34519 = state_34496__$1;
(statearr_34498_34519[(2)] = inst_34492);

(statearr_34498_34519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (1))){
var inst_34472 = init;
var state_34496__$1 = (function (){var statearr_34499 = state_34496;
(statearr_34499[(7)] = inst_34472);

return statearr_34499;
})();
var statearr_34500_34520 = state_34496__$1;
(statearr_34500_34520[(2)] = null);

(statearr_34500_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (4))){
var inst_34475 = (state_34496[(8)]);
var inst_34475__$1 = (state_34496[(2)]);
var state_34496__$1 = (function (){var statearr_34501 = state_34496;
(statearr_34501[(8)] = inst_34475__$1);

return statearr_34501;
})();
if(cljs.core.truth_(inst_34475__$1)){
var statearr_34502_34521 = state_34496__$1;
(statearr_34502_34521[(1)] = (5));

} else {
var statearr_34503_34522 = state_34496__$1;
(statearr_34503_34522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (6))){
var inst_34490 = cljs.core.async.close_BANG_.call(null,out);
var state_34496__$1 = state_34496;
var statearr_34504_34523 = state_34496__$1;
(statearr_34504_34523[(2)] = inst_34490);

(statearr_34504_34523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (3))){
var inst_34494 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34496__$1,inst_34494);
} else {
if((state_val_34497 === (2))){
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34496__$1,(4),in$);
} else {
if((state_val_34497 === (11))){
var inst_34484 = (state_34496[(9)]);
var inst_34487 = (state_34496[(2)]);
var inst_34472 = inst_34484;
var state_34496__$1 = (function (){var statearr_34505 = state_34496;
(statearr_34505[(7)] = inst_34472);

(statearr_34505[(10)] = inst_34487);

return statearr_34505;
})();
var statearr_34506_34524 = state_34496__$1;
(statearr_34506_34524[(2)] = null);

(statearr_34506_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (9))){
var inst_34475 = (state_34496[(8)]);
var inst_34472 = (state_34496[(7)]);
var inst_34481 = reagi.core.unbox.call(null,inst_34475);
var inst_34482 = f.call(null,inst_34472,inst_34481);
var state_34496__$1 = state_34496;
var statearr_34507_34525 = state_34496__$1;
(statearr_34507_34525[(2)] = inst_34482);

(statearr_34507_34525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (5))){
var inst_34472 = (state_34496[(7)]);
var inst_34477 = reagi.core.no_value_QMARK_.call(null,inst_34472);
var state_34496__$1 = state_34496;
if(cljs.core.truth_(inst_34477)){
var statearr_34508_34526 = state_34496__$1;
(statearr_34508_34526[(1)] = (8));

} else {
var statearr_34509_34527 = state_34496__$1;
(statearr_34509_34527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (10))){
var inst_34484 = (state_34496[(9)]);
var inst_34484__$1 = (state_34496[(2)]);
var inst_34485 = reagi.core.box.call(null,inst_34484__$1);
var state_34496__$1 = (function (){var statearr_34510 = state_34496;
(statearr_34510[(9)] = inst_34484__$1);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34496__$1,(11),out,inst_34485);
} else {
if((state_val_34497 === (8))){
var inst_34475 = (state_34496[(8)]);
var inst_34479 = reagi.core.unbox.call(null,inst_34475);
var state_34496__$1 = state_34496;
var statearr_34511_34528 = state_34496__$1;
(statearr_34511_34528[(2)] = inst_34479);

(statearr_34511_34528[(1)] = (10));


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
var statearr_34515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34515[(0)] = reagi$core$reduce_ch_$_state_machine__18810__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var reagi$core$reduce_ch_$_state_machine__18810__auto____1 = (function (state_34496){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34516){if((e34516 instanceof Object)){
var ex__18813__auto__ = e34516;
var statearr_34517_34529 = state_34496;
(statearr_34517_34529[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_34496;
state_34496 = G__34530;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__18810__auto__ = function(state_34496){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__18810__auto____1.call(this,state_34496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__18810__auto____0;
reagi$core$reduce_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__18810__auto____1;
return reagi$core$reduce_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_34518 = f__18831__auto__.call(null);
(statearr_34518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34518;
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
var args34531 = [];
var len__17863__auto___34535 = arguments.length;
var i__17864__auto___34536 = (0);
while(true){
if((i__17864__auto___34536 < len__17863__auto___34535)){
args34531.push((arguments[i__17864__auto___34536]));

var G__34537 = (i__17864__auto___34536 + (1));
i__17864__auto___34536 = G__34537;
continue;
} else {
}
break;
}

var G__34533 = args34531.length;
switch (G__34533) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34531.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__34534 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__34534,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__34534,((function (G__34534,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__34534,ch))
);

reagi.core.depend_on.call(null,G__34534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__34534;
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
return reagi.core.reduce.call(null,(function (p1__34540_SHARP_,p2__34539_SHARP_){
return p2__34539_SHARP_.call(null,p1__34540_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args34541 = [];
var len__17863__auto___34544 = arguments.length;
var i__17864__auto___34545 = (0);
while(true){
if((i__17864__auto___34545 < len__17863__auto___34544)){
args34541.push((arguments[i__17864__auto___34545]));

var G__34546 = (i__17864__auto___34545 + (1));
i__17864__auto___34545 = G__34546;
continue;
} else {
}
break;
}

var G__34543 = args34541.length;
switch (G__34543) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34541.length)].join('')));

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
return (function (state_34629){
var state_val_34630 = (state_34629[(1)]);
if((state_val_34630 === (7))){
var inst_34625 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34631_34656 = state_34629__$1;
(statearr_34631_34656[(2)] = inst_34625);

(statearr_34631_34656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (1))){
var inst_34602 = reagi.core.no_value;
var state_34629__$1 = (function (){var statearr_34632 = state_34629;
(statearr_34632[(7)] = inst_34602);

return statearr_34632;
})();
var statearr_34633_34657 = state_34629__$1;
(statearr_34633_34657[(2)] = null);

(statearr_34633_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (4))){
var inst_34605 = (state_34629[(8)]);
var inst_34605__$1 = (state_34629[(2)]);
var state_34629__$1 = (function (){var statearr_34634 = state_34629;
(statearr_34634[(8)] = inst_34605__$1);

return statearr_34634;
})();
if(cljs.core.truth_(inst_34605__$1)){
var statearr_34635_34658 = state_34629__$1;
(statearr_34635_34658[(1)] = (5));

} else {
var statearr_34636_34659 = state_34629__$1;
(statearr_34636_34659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (13))){
var inst_34607 = (state_34629[(9)]);
var inst_34620 = (state_34629[(2)]);
var inst_34602 = inst_34607;
var state_34629__$1 = (function (){var statearr_34637 = state_34629;
(statearr_34637[(7)] = inst_34602);

(statearr_34637[(10)] = inst_34620);

return statearr_34637;
})();
var statearr_34638_34660 = state_34629__$1;
(statearr_34638_34660[(2)] = null);

(statearr_34638_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (6))){
var inst_34623 = cljs.core.async.close_BANG_.call(null,out);
var state_34629__$1 = state_34629;
var statearr_34639_34661 = state_34629__$1;
(statearr_34639_34661[(2)] = inst_34623);

(statearr_34639_34661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (3))){
var inst_34627 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34629__$1,inst_34627);
} else {
if((state_val_34630 === (12))){
var state_34629__$1 = state_34629;
var statearr_34640_34662 = state_34629__$1;
(statearr_34640_34662[(2)] = null);

(statearr_34640_34662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (2))){
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34629__$1,(4),in$);
} else {
if((state_val_34630 === (11))){
var inst_34607 = (state_34629[(9)]);
var inst_34615 = reagi.core.box.call(null,inst_34607);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34629__$1,(14),out,inst_34615);
} else {
if((state_val_34630 === (9))){
var inst_34607 = (state_34629[(9)]);
var inst_34602 = (state_34629[(7)]);
var inst_34611 = cljs.core.not_EQ_.call(null,inst_34607,inst_34602);
var state_34629__$1 = state_34629;
var statearr_34641_34663 = state_34629__$1;
(statearr_34641_34663[(2)] = inst_34611);

(statearr_34641_34663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (5))){
var inst_34605 = (state_34629[(8)]);
var inst_34602 = (state_34629[(7)]);
var inst_34608 = (state_34629[(11)]);
var inst_34607 = reagi.core.unbox.call(null,inst_34605);
var inst_34608__$1 = reagi.core.no_value_QMARK_.call(null,inst_34602);
var state_34629__$1 = (function (){var statearr_34642 = state_34629;
(statearr_34642[(9)] = inst_34607);

(statearr_34642[(11)] = inst_34608__$1);

return statearr_34642;
})();
if(cljs.core.truth_(inst_34608__$1)){
var statearr_34643_34664 = state_34629__$1;
(statearr_34643_34664[(1)] = (8));

} else {
var statearr_34644_34665 = state_34629__$1;
(statearr_34644_34665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (14))){
var inst_34617 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34645_34666 = state_34629__$1;
(statearr_34645_34666[(2)] = inst_34617);

(statearr_34645_34666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (10))){
var inst_34613 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34613)){
var statearr_34646_34667 = state_34629__$1;
(statearr_34646_34667[(1)] = (11));

} else {
var statearr_34647_34668 = state_34629__$1;
(statearr_34647_34668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (8))){
var inst_34608 = (state_34629[(11)]);
var state_34629__$1 = state_34629;
var statearr_34648_34669 = state_34629__$1;
(statearr_34648_34669[(2)] = inst_34608);

(statearr_34648_34669[(1)] = (10));


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
var statearr_34652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34652[(0)] = reagi$core$uniq_ch_$_state_machine__18810__auto__);

(statearr_34652[(1)] = (1));

return statearr_34652;
});
var reagi$core$uniq_ch_$_state_machine__18810__auto____1 = (function (state_34629){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34653){if((e34653 instanceof Object)){
var ex__18813__auto__ = e34653;
var statearr_34654_34670 = state_34629;
(statearr_34654_34670[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34671 = state_34629;
state_34629 = G__34671;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__18810__auto__ = function(state_34629){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__18810__auto____1.call(this,state_34629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__18810__auto____0;
reagi$core$uniq_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__18810__auto____1;
return reagi$core$uniq_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_34655 = f__18831__auto__.call(null);
(statearr_34655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34655;
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
var G__34673 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34673,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__34673,((function (G__34673,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__34673,ch))
);

reagi.core.depend_on.call(null,G__34673,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__34673;
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
return (function (state_34741){
var state_val_34742 = (state_34741[(1)]);
if((state_val_34742 === (7))){
var inst_34737 = (state_34741[(2)]);
var state_34741__$1 = state_34741;
var statearr_34743_34764 = state_34741__$1;
(statearr_34743_34764[(2)] = inst_34737);

(statearr_34743_34764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (1))){
var inst_34719 = (0);
var state_34741__$1 = (function (){var statearr_34744 = state_34741;
(statearr_34744[(7)] = inst_34719);

return statearr_34744;
})();
var statearr_34745_34765 = state_34741__$1;
(statearr_34745_34765[(2)] = null);

(statearr_34745_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (4))){
var inst_34722 = (state_34741[(8)]);
var inst_34722__$1 = (state_34741[(2)]);
var state_34741__$1 = (function (){var statearr_34746 = state_34741;
(statearr_34746[(8)] = inst_34722__$1);

return statearr_34746;
})();
if(cljs.core.truth_(inst_34722__$1)){
var statearr_34747_34766 = state_34741__$1;
(statearr_34747_34766[(1)] = (5));

} else {
var statearr_34748_34767 = state_34741__$1;
(statearr_34748_34767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (6))){
var inst_34735 = cljs.core.async.close_BANG_.call(null,out);
var state_34741__$1 = state_34741;
var statearr_34749_34768 = state_34741__$1;
(statearr_34749_34768[(2)] = inst_34735);

(statearr_34749_34768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (3))){
var inst_34739 = (state_34741[(2)]);
var state_34741__$1 = state_34741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34741__$1,inst_34739);
} else {
if((state_val_34742 === (2))){
var state_34741__$1 = state_34741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34741__$1,(4),in$);
} else {
if((state_val_34742 === (11))){
var inst_34729 = (state_34741[(2)]);
var state_34741__$1 = state_34741;
var statearr_34750_34769 = state_34741__$1;
(statearr_34750_34769[(2)] = inst_34729);

(statearr_34750_34769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (9))){
var state_34741__$1 = state_34741;
var statearr_34751_34770 = state_34741__$1;
(statearr_34751_34770[(2)] = null);

(statearr_34751_34770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (5))){
var inst_34724 = (state_34741[(9)]);
var inst_34719 = (state_34741[(7)]);
var inst_34724__$1 = reagi.core.time_ms.call(null);
var inst_34725 = (inst_34724__$1 - inst_34719);
var inst_34726 = (inst_34725 >= timeout_ms);
var state_34741__$1 = (function (){var statearr_34752 = state_34741;
(statearr_34752[(9)] = inst_34724__$1);

return statearr_34752;
})();
if(cljs.core.truth_(inst_34726)){
var statearr_34753_34771 = state_34741__$1;
(statearr_34753_34771[(1)] = (8));

} else {
var statearr_34754_34772 = state_34741__$1;
(statearr_34754_34772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (10))){
var inst_34724 = (state_34741[(9)]);
var inst_34732 = (state_34741[(2)]);
var inst_34719 = inst_34724;
var state_34741__$1 = (function (){var statearr_34755 = state_34741;
(statearr_34755[(7)] = inst_34719);

(statearr_34755[(10)] = inst_34732);

return statearr_34755;
})();
var statearr_34756_34773 = state_34741__$1;
(statearr_34756_34773[(2)] = null);

(statearr_34756_34773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34742 === (8))){
var inst_34722 = (state_34741[(8)]);
var state_34741__$1 = state_34741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34741__$1,(11),out,inst_34722);
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
var statearr_34760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34760[(0)] = reagi$core$throttle_ch_$_state_machine__18810__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var reagi$core$throttle_ch_$_state_machine__18810__auto____1 = (function (state_34741){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__18813__auto__ = e34761;
var statearr_34762_34774 = state_34741;
(statearr_34762_34774[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34775 = state_34741;
state_34741 = G__34775;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__18810__auto__ = function(state_34741){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__18810__auto____1.call(this,state_34741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__18810__auto____0;
reagi$core$throttle_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__18810__auto____1;
return reagi$core$throttle_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_34763 = f__18831__auto__.call(null);
(statearr_34763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34763;
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
var G__34777 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34777,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__34777,((function (G__34777,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__34777,ch))
);

reagi.core.depend_on.call(null,G__34777,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__34777;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_34887){
var state_val_34888 = (state_34887[(1)]);
if((state_val_34888 === (7))){
var inst_34882 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
var statearr_34889_34919 = state_34887__$1;
(statearr_34889_34919[(2)] = inst_34882);

(statearr_34889_34919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (1))){
var state_34887__$1 = state_34887;
var statearr_34890_34920 = state_34887__$1;
(statearr_34890_34920[(2)] = null);

(statearr_34890_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (4))){
var inst_34855 = (state_34887[(2)]);
var inst_34856 = cljs.core.nth.call(null,inst_34855,(0),null);
var inst_34857 = cljs.core.nth.call(null,inst_34855,(1),null);
var inst_34858 = cljs.core.not_EQ_.call(null,inst_34857,stop);
var state_34887__$1 = (function (){var statearr_34891 = state_34887;
(statearr_34891[(7)] = inst_34856);

return statearr_34891;
})();
if(inst_34858){
var statearr_34892_34921 = state_34887__$1;
(statearr_34892_34921[(1)] = (5));

} else {
var statearr_34893_34922 = state_34887__$1;
(statearr_34893_34922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (15))){
var state_34887__$1 = state_34887;
var statearr_34894_34923 = state_34887__$1;
(statearr_34894_34923[(2)] = null);

(statearr_34894_34923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (13))){
var inst_34869 = (state_34887[(8)]);
var state_34887__$1 = state_34887;
var statearr_34895_34924 = state_34887__$1;
(statearr_34895_34924[(2)] = inst_34869);

(statearr_34895_34924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (6))){
var state_34887__$1 = state_34887;
var statearr_34897_34925 = state_34887__$1;
(statearr_34897_34925[(2)] = null);

(statearr_34897_34925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (17))){
var inst_34879 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
var statearr_34898_34926 = state_34887__$1;
(statearr_34898_34926[(2)] = inst_34879);

(statearr_34898_34926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (3))){
var inst_34884 = (state_34887[(2)]);
var inst_34885 = cljs.core.async.close_BANG_.call(null,out);
var state_34887__$1 = (function (){var statearr_34899 = state_34887;
(statearr_34899[(9)] = inst_34884);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34887__$1,inst_34885);
} else {
if((state_val_34888 === (12))){
var inst_34871 = reagi.core.complete_QMARK_.call(null,ref);
var state_34887__$1 = state_34887;
var statearr_34900_34927 = state_34887__$1;
(statearr_34900_34927[(2)] = inst_34871);

(statearr_34900_34927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (2))){
var inst_34850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34851 = cljs.core.async.timeout.call(null,interval);
var inst_34852 = [stop,inst_34851];
var inst_34853 = (new cljs.core.PersistentVector(null,2,(5),inst_34850,inst_34852,null));
var state_34887__$1 = state_34887;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34887__$1,(4),inst_34853);
} else {
if((state_val_34888 === (11))){
var inst_34866 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
var statearr_34901_34928 = state_34887__$1;
(statearr_34901_34928[(2)] = inst_34866);

(statearr_34901_34928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (9))){
var inst_34860 = (state_34887[(10)]);
var inst_34864 = reagi.core.box.call(null,inst_34860);
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34887__$1,(11),out,inst_34864);
} else {
if((state_val_34888 === (5))){
var inst_34860 = (state_34887[(10)]);
var inst_34860__$1 = cljs.core.deref.call(null,ref);
var inst_34861 = (void 0 === inst_34860__$1);
var state_34887__$1 = (function (){var statearr_34902 = state_34887;
(statearr_34902[(10)] = inst_34860__$1);

return statearr_34902;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_34903_34929 = state_34887__$1;
(statearr_34903_34929[(1)] = (8));

} else {
var statearr_34904_34930 = state_34887__$1;
(statearr_34904_34930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (14))){
var inst_34874 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
if(cljs.core.truth_(inst_34874)){
var statearr_34905_34931 = state_34887__$1;
(statearr_34905_34931[(1)] = (15));

} else {
var statearr_34906_34932 = state_34887__$1;
(statearr_34906_34932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (16))){
var state_34887__$1 = state_34887;
var statearr_34907_34933 = state_34887__$1;
(statearr_34907_34933[(2)] = null);

(statearr_34907_34933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (10))){
var inst_34869 = (state_34887[(8)]);
var inst_34868 = (state_34887[(2)]);
var inst_34869__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_34887__$1 = (function (){var statearr_34908 = state_34887;
(statearr_34908[(8)] = inst_34869__$1);

(statearr_34908[(11)] = inst_34868);

return statearr_34908;
})();
if(cljs.core.truth_(inst_34869__$1)){
var statearr_34909_34934 = state_34887__$1;
(statearr_34909_34934[(1)] = (12));

} else {
var statearr_34910_34935 = state_34887__$1;
(statearr_34910_34935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (8))){
var state_34887__$1 = state_34887;
var statearr_34911_34936 = state_34887__$1;
(statearr_34911_34936[(2)] = null);

(statearr_34911_34936[(1)] = (10));


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
var statearr_34915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34915[(0)] = reagi$core$run_sampler_$_state_machine__18810__auto__);

(statearr_34915[(1)] = (1));

return statearr_34915;
});
var reagi$core$run_sampler_$_state_machine__18810__auto____1 = (function (state_34887){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34916){if((e34916 instanceof Object)){
var ex__18813__auto__ = e34916;
var statearr_34917_34937 = state_34887;
(statearr_34917_34937[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_34887;
state_34887 = G__34938;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__18810__auto__ = function(state_34887){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__18810__auto____1.call(this,state_34887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__18810__auto____0;
reagi$core$run_sampler_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__18810__auto____1;
return reagi$core$run_sampler_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_34918 = f__18831__auto__.call(null);
(statearr_34918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_34918;
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
var G__34940 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__34940,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__34940,((function (G__34940,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__34940,stop))
);

return G__34940;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__18830__auto___34973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___34973,stream){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___34973,stream){
return (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (1))){
var inst_34957 = cljs.core.async.timeout.call(null,time_ms);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34963__$1,(2),inst_34957);
} else {
if((state_val_34964 === (2))){
var inst_34959 = (state_34963[(2)]);
var inst_34960 = reagi.core.port.call(null,stream);
var inst_34961 = cljs.core.async.close_BANG_.call(null,inst_34960);
var state_34963__$1 = (function (){var statearr_34965 = state_34963;
(statearr_34965[(7)] = inst_34959);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34963__$1,inst_34961);
} else {
return null;
}
}
});})(c__18830__auto___34973,stream))
;
return ((function (switch__18809__auto__,c__18830__auto___34973,stream){
return (function() {
var reagi$core$wait_$_state_machine__18810__auto__ = null;
var reagi$core$wait_$_state_machine__18810__auto____0 = (function (){
var statearr_34969 = [null,null,null,null,null,null,null,null];
(statearr_34969[(0)] = reagi$core$wait_$_state_machine__18810__auto__);

(statearr_34969[(1)] = (1));

return statearr_34969;
});
var reagi$core$wait_$_state_machine__18810__auto____1 = (function (state_34963){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_34963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object)){
var ex__18813__auto__ = e34970;
var statearr_34971_34974 = state_34963;
(statearr_34971_34974[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_34963;
state_34963 = G__34975;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__18810__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__18810__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__18810__auto____0;
reagi$core$wait_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__18810__auto____1;
return reagi$core$wait_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___34973,stream))
})();
var state__18832__auto__ = (function (){var statearr_34972 = f__18831__auto__.call(null);
(statearr_34972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___34973);

return statearr_34972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___34973,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_35162){
var state_val_35163 = (state_35162[(1)]);
if((state_val_35163 === (7))){
var inst_35107 = (state_35162[(7)]);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35162__$1,(9),inst_35107);
} else {
if((state_val_35163 === (20))){
var inst_35134 = (state_35162[(8)]);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35162__$1,(22),inst_35134);
} else {
if((state_val_35163 === (1))){
var inst_35098 = cljs.core.seq.call(null,chs);
var inst_35099 = inst_35098;
var inst_35100 = null;
var inst_35101 = (0);
var inst_35102 = (0);
var state_35162__$1 = (function (){var statearr_35164 = state_35162;
(statearr_35164[(9)] = inst_35102);

(statearr_35164[(10)] = inst_35101);

(statearr_35164[(11)] = inst_35099);

(statearr_35164[(12)] = inst_35100);

return statearr_35164;
})();
var statearr_35165_35212 = state_35162__$1;
(statearr_35165_35212[(2)] = null);

(statearr_35165_35212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (24))){
var state_35162__$1 = state_35162;
var statearr_35166_35213 = state_35162__$1;
(statearr_35166_35213[(2)] = null);

(statearr_35166_35213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (4))){
var inst_35102 = (state_35162[(9)]);
var inst_35100 = (state_35162[(12)]);
var inst_35107 = cljs.core._nth.call(null,inst_35100,inst_35102);
var state_35162__$1 = (function (){var statearr_35167 = state_35162;
(statearr_35167[(7)] = inst_35107);

return statearr_35167;
})();
var statearr_35168_35214 = state_35162__$1;
(statearr_35168_35214[(2)] = null);

(statearr_35168_35214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (15))){
var state_35162__$1 = state_35162;
var statearr_35169_35215 = state_35162__$1;
(statearr_35169_35215[(2)] = null);

(statearr_35169_35215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (21))){
var inst_35125 = (state_35162[(13)]);
var inst_35148 = (state_35162[(2)]);
var inst_35149 = cljs.core.next.call(null,inst_35125);
var inst_35099 = inst_35149;
var inst_35100 = null;
var inst_35101 = (0);
var inst_35102 = (0);
var state_35162__$1 = (function (){var statearr_35170 = state_35162;
(statearr_35170[(9)] = inst_35102);

(statearr_35170[(14)] = inst_35148);

(statearr_35170[(10)] = inst_35101);

(statearr_35170[(11)] = inst_35099);

(statearr_35170[(12)] = inst_35100);

return statearr_35170;
})();
var statearr_35171_35216 = state_35162__$1;
(statearr_35171_35216[(2)] = null);

(statearr_35171_35216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (13))){
var inst_35115 = (state_35162[(2)]);
var state_35162__$1 = (function (){var statearr_35172 = state_35162;
(statearr_35172[(15)] = inst_35115);

return statearr_35172;
})();
var statearr_35173_35217 = state_35162__$1;
(statearr_35173_35217[(2)] = null);

(statearr_35173_35217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (22))){
var inst_35137 = (state_35162[(16)]);
var inst_35137__$1 = (state_35162[(2)]);
var state_35162__$1 = (function (){var statearr_35174 = state_35162;
(statearr_35174[(16)] = inst_35137__$1);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35137__$1)){
var statearr_35175_35218 = state_35162__$1;
(statearr_35175_35218[(1)] = (23));

} else {
var statearr_35176_35219 = state_35162__$1;
(statearr_35176_35219[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (6))){
var inst_35157 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35177_35220 = state_35162__$1;
(statearr_35177_35220[(2)] = inst_35157);

(statearr_35177_35220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (25))){
var inst_35146 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35178_35221 = state_35162__$1;
(statearr_35178_35221[(2)] = inst_35146);

(statearr_35178_35221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (17))){
var inst_35125 = (state_35162[(13)]);
var inst_35129 = cljs.core.chunk_first.call(null,inst_35125);
var inst_35130 = cljs.core.chunk_rest.call(null,inst_35125);
var inst_35131 = cljs.core.count.call(null,inst_35129);
var inst_35099 = inst_35130;
var inst_35100 = inst_35129;
var inst_35101 = inst_35131;
var inst_35102 = (0);
var state_35162__$1 = (function (){var statearr_35179 = state_35162;
(statearr_35179[(9)] = inst_35102);

(statearr_35179[(10)] = inst_35101);

(statearr_35179[(11)] = inst_35099);

(statearr_35179[(12)] = inst_35100);

return statearr_35179;
})();
var statearr_35180_35222 = state_35162__$1;
(statearr_35180_35222[(2)] = null);

(statearr_35180_35222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (3))){
var inst_35159 = (state_35162[(2)]);
var inst_35160 = cljs.core.async.close_BANG_.call(null,out);
var state_35162__$1 = (function (){var statearr_35181 = state_35162;
(statearr_35181[(17)] = inst_35159);

return statearr_35181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35162__$1,inst_35160);
} else {
if((state_val_35163 === (12))){
var inst_35119 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35182_35223 = state_35162__$1;
(statearr_35182_35223[(2)] = inst_35119);

(statearr_35182_35223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (2))){
var inst_35102 = (state_35162[(9)]);
var inst_35101 = (state_35162[(10)]);
var inst_35104 = (inst_35102 < inst_35101);
var inst_35105 = inst_35104;
var state_35162__$1 = state_35162;
if(cljs.core.truth_(inst_35105)){
var statearr_35183_35224 = state_35162__$1;
(statearr_35183_35224[(1)] = (4));

} else {
var statearr_35184_35225 = state_35162__$1;
(statearr_35184_35225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (23))){
var inst_35137 = (state_35162[(16)]);
var inst_35139 = reagi.core.unbox.call(null,inst_35137);
var inst_35140 = reagi.core.box.call(null,inst_35139);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35162__$1,(26),out,inst_35140);
} else {
if((state_val_35163 === (19))){
var inst_35152 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35185_35226 = state_35162__$1;
(statearr_35185_35226[(2)] = inst_35152);

(statearr_35185_35226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (11))){
var state_35162__$1 = state_35162;
var statearr_35186_35227 = state_35162__$1;
(statearr_35186_35227[(2)] = null);

(statearr_35186_35227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (9))){
var inst_35110 = (state_35162[(18)]);
var inst_35110__$1 = (state_35162[(2)]);
var state_35162__$1 = (function (){var statearr_35187 = state_35162;
(statearr_35187[(18)] = inst_35110__$1);

return statearr_35187;
})();
if(cljs.core.truth_(inst_35110__$1)){
var statearr_35188_35228 = state_35162__$1;
(statearr_35188_35228[(1)] = (10));

} else {
var statearr_35189_35229 = state_35162__$1;
(statearr_35189_35229[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (5))){
var inst_35099 = (state_35162[(11)]);
var inst_35125 = (state_35162[(13)]);
var inst_35125__$1 = cljs.core.seq.call(null,inst_35099);
var state_35162__$1 = (function (){var statearr_35190 = state_35162;
(statearr_35190[(13)] = inst_35125__$1);

return statearr_35190;
})();
if(inst_35125__$1){
var statearr_35191_35230 = state_35162__$1;
(statearr_35191_35230[(1)] = (14));

} else {
var statearr_35192_35231 = state_35162__$1;
(statearr_35192_35231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (14))){
var inst_35125 = (state_35162[(13)]);
var inst_35127 = cljs.core.chunked_seq_QMARK_.call(null,inst_35125);
var state_35162__$1 = state_35162;
if(inst_35127){
var statearr_35193_35232 = state_35162__$1;
(statearr_35193_35232[(1)] = (17));

} else {
var statearr_35194_35233 = state_35162__$1;
(statearr_35194_35233[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (26))){
var inst_35142 = (state_35162[(2)]);
var state_35162__$1 = (function (){var statearr_35195 = state_35162;
(statearr_35195[(19)] = inst_35142);

return statearr_35195;
})();
var statearr_35196_35234 = state_35162__$1;
(statearr_35196_35234[(2)] = null);

(statearr_35196_35234[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (16))){
var inst_35155 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35197_35235 = state_35162__$1;
(statearr_35197_35235[(2)] = inst_35155);

(statearr_35197_35235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (10))){
var inst_35110 = (state_35162[(18)]);
var inst_35112 = reagi.core.unbox.call(null,inst_35110);
var inst_35113 = reagi.core.box.call(null,inst_35112);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35162__$1,(13),out,inst_35113);
} else {
if((state_val_35163 === (18))){
var inst_35125 = (state_35162[(13)]);
var inst_35134 = cljs.core.first.call(null,inst_35125);
var state_35162__$1 = (function (){var statearr_35201 = state_35162;
(statearr_35201[(8)] = inst_35134);

return statearr_35201;
})();
var statearr_35202_35236 = state_35162__$1;
(statearr_35202_35236[(2)] = null);

(statearr_35202_35236[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (8))){
var inst_35102 = (state_35162[(9)]);
var inst_35101 = (state_35162[(10)]);
var inst_35099 = (state_35162[(11)]);
var inst_35100 = (state_35162[(12)]);
var inst_35121 = (state_35162[(2)]);
var inst_35122 = (inst_35102 + (1));
var tmp35198 = inst_35101;
var tmp35199 = inst_35099;
var tmp35200 = inst_35100;
var inst_35099__$1 = tmp35199;
var inst_35100__$1 = tmp35200;
var inst_35101__$1 = tmp35198;
var inst_35102__$1 = inst_35122;
var state_35162__$1 = (function (){var statearr_35203 = state_35162;
(statearr_35203[(20)] = inst_35121);

(statearr_35203[(9)] = inst_35102__$1);

(statearr_35203[(10)] = inst_35101__$1);

(statearr_35203[(11)] = inst_35099__$1);

(statearr_35203[(12)] = inst_35100__$1);

return statearr_35203;
})();
var statearr_35204_35237 = state_35162__$1;
(statearr_35204_35237[(2)] = null);

(statearr_35204_35237[(1)] = (2));


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
var statearr_35208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35208[(0)] = reagi$core$join_ch_$_state_machine__18810__auto__);

(statearr_35208[(1)] = (1));

return statearr_35208;
});
var reagi$core$join_ch_$_state_machine__18810__auto____1 = (function (state_35162){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_35162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e35209){if((e35209 instanceof Object)){
var ex__18813__auto__ = e35209;
var statearr_35210_35238 = state_35162;
(statearr_35210_35238[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35239 = state_35162;
state_35162 = G__35239;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__18810__auto__ = function(state_35162){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__18810__auto____1.call(this,state_35162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__18810__auto____0;
reagi$core$join_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__18810__auto____1;
return reagi$core$join_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_35211 = f__18831__auto__.call(null);
(statearr_35211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_35211;
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
var len__17863__auto___35242 = arguments.length;
var i__17864__auto___35243 = (0);
while(true){
if((i__17864__auto___35243 < len__17863__auto___35242)){
args__17870__auto__.push((arguments[i__17864__auto___35243]));

var G__35244 = (i__17864__auto___35243 + (1));
i__17864__auto___35243 = G__35244;
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
var G__35241 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__35241,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__35241,((function (G__35241,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__35241,chs))
);

reagi.core.depend_on.call(null,G__35241,streams);

return G__35241;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq35240){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35240));
});
reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_35381){
var state_val_35382 = (state_35381[(1)]);
if((state_val_35382 === (7))){
var inst_35345 = (state_35381[(7)]);
var inst_35343 = (state_35381[(2)]);
var inst_35344 = cljs.core.nth.call(null,inst_35343,(0),null);
var inst_35345__$1 = cljs.core.nth.call(null,inst_35343,(1),null);
var inst_35346 = (inst_35345__$1 === valve);
var state_35381__$1 = (function (){var statearr_35383 = state_35381;
(statearr_35383[(8)] = inst_35344);

(statearr_35383[(7)] = inst_35345__$1);

return statearr_35383;
})();
if(cljs.core.truth_(inst_35346)){
var statearr_35384_35415 = state_35381__$1;
(statearr_35384_35415[(1)] = (8));

} else {
var statearr_35385_35416 = state_35381__$1;
(statearr_35385_35416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (1))){
var inst_35330 = [in$];
var inst_35331 = [null];
var inst_35332 = cljs.core.PersistentHashMap.fromArrays(inst_35330,inst_35331);
var inst_35333 = inst_35332;
var state_35381__$1 = (function (){var statearr_35386 = state_35381;
(statearr_35386[(9)] = inst_35333);

return statearr_35386;
})();
var statearr_35387_35417 = state_35381__$1;
(statearr_35387_35417[(2)] = null);

(statearr_35387_35417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (4))){
var inst_35333 = (state_35381[(9)]);
var inst_35339 = cljs.core.keys.call(null,inst_35333);
var inst_35340 = cljs.core.vec.call(null,inst_35339);
var inst_35341 = cljs.core.conj.call(null,inst_35340,valve);
var state_35381__$1 = state_35381;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35381__$1,(7),inst_35341);
} else {
if((state_val_35382 === (15))){
var inst_35344 = (state_35381[(8)]);
var inst_35360 = reagi.core.unbox.call(null,inst_35344);
var inst_35361 = reagi.core.box.call(null,inst_35360);
var state_35381__$1 = state_35381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35381__$1,(17),out,inst_35361);
} else {
if((state_val_35382 === (13))){
var inst_35371 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35389_35418 = state_35381__$1;
(statearr_35389_35418[(2)] = inst_35371);

(statearr_35389_35418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (6))){
var inst_35376 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35390_35419 = state_35381__$1;
(statearr_35390_35419[(2)] = inst_35376);

(statearr_35390_35419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (17))){
var inst_35333 = (state_35381[(9)]);
var inst_35363 = (state_35381[(2)]);
var tmp35388 = inst_35333;
var inst_35333__$1 = tmp35388;
var state_35381__$1 = (function (){var statearr_35391 = state_35381;
(statearr_35391[(9)] = inst_35333__$1);

(statearr_35391[(10)] = inst_35363);

return statearr_35391;
})();
var statearr_35392_35420 = state_35381__$1;
(statearr_35392_35420[(2)] = null);

(statearr_35392_35420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (3))){
var inst_35378 = (state_35381[(2)]);
var inst_35379 = cljs.core.async.close_BANG_.call(null,out);
var state_35381__$1 = (function (){var statearr_35393 = state_35381;
(statearr_35393[(11)] = inst_35378);

return statearr_35393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35381__$1,inst_35379);
} else {
if((state_val_35382 === (12))){
var inst_35333 = (state_35381[(9)]);
var inst_35345 = (state_35381[(7)]);
var inst_35368 = cljs.core.dissoc.call(null,inst_35333,inst_35345);
var inst_35333__$1 = inst_35368;
var state_35381__$1 = (function (){var statearr_35394 = state_35381;
(statearr_35394[(9)] = inst_35333__$1);

return statearr_35394;
})();
var statearr_35395_35421 = state_35381__$1;
(statearr_35395_35421[(2)] = null);

(statearr_35395_35421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (2))){
var inst_35333 = (state_35381[(9)]);
var inst_35335 = cljs.core.empty_QMARK_.call(null,inst_35333);
var inst_35336 = !(inst_35335);
var state_35381__$1 = state_35381;
if(inst_35336){
var statearr_35396_35422 = state_35381__$1;
(statearr_35396_35422[(1)] = (4));

} else {
var statearr_35397_35423 = state_35381__$1;
(statearr_35397_35423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (11))){
var inst_35345 = (state_35381[(7)]);
var inst_35352 = (inst_35345 === in$);
var state_35381__$1 = state_35381;
if(cljs.core.truth_(inst_35352)){
var statearr_35398_35424 = state_35381__$1;
(statearr_35398_35424[(1)] = (14));

} else {
var statearr_35399_35425 = state_35381__$1;
(statearr_35399_35425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (9))){
var inst_35344 = (state_35381[(8)]);
var state_35381__$1 = state_35381;
if(cljs.core.truth_(inst_35344)){
var statearr_35400_35426 = state_35381__$1;
(statearr_35400_35426[(1)] = (11));

} else {
var statearr_35401_35427 = state_35381__$1;
(statearr_35401_35427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (5))){
var state_35381__$1 = state_35381;
var statearr_35402_35428 = state_35381__$1;
(statearr_35402_35428[(2)] = null);

(statearr_35402_35428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (14))){
var inst_35344 = (state_35381[(8)]);
var inst_35333 = (state_35381[(9)]);
var inst_35354 = reagi.core.unbox.call(null,inst_35344);
var inst_35355 = cljs.core.async.chan.call(null);
var inst_35356 = reagi.core.listen.call(null,inst_35354,inst_35355);
var inst_35357 = cljs.core.assoc.call(null,inst_35333,inst_35356,inst_35354);
var inst_35333__$1 = inst_35357;
var state_35381__$1 = (function (){var statearr_35403 = state_35381;
(statearr_35403[(9)] = inst_35333__$1);

return statearr_35403;
})();
var statearr_35404_35429 = state_35381__$1;
(statearr_35404_35429[(2)] = null);

(statearr_35404_35429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (16))){
var inst_35366 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35405_35430 = state_35381__$1;
(statearr_35405_35430[(2)] = inst_35366);

(statearr_35405_35430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (10))){
var inst_35373 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35406_35431 = state_35381__$1;
(statearr_35406_35431[(2)] = inst_35373);

(statearr_35406_35431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (8))){
var inst_35333 = (state_35381[(9)]);
var inst_35348 = cljs.core.keys.call(null,inst_35333);
var inst_35349 = reagi.core.close_all_BANG_.call(null,inst_35348);
var state_35381__$1 = state_35381;
var statearr_35407_35432 = state_35381__$1;
(statearr_35407_35432[(2)] = inst_35349);

(statearr_35407_35432[(1)] = (10));


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
var statearr_35411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35411[(0)] = reagi$core$flatten_ch_$_state_machine__18810__auto__);

(statearr_35411[(1)] = (1));

return statearr_35411;
});
var reagi$core$flatten_ch_$_state_machine__18810__auto____1 = (function (state_35381){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_35381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e35412){if((e35412 instanceof Object)){
var ex__18813__auto__ = e35412;
var statearr_35413_35433 = state_35381;
(statearr_35413_35433[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_35381;
state_35381 = G__35434;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__18810__auto__ = function(state_35381){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__18810__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__18810__auto____1.call(this,state_35381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__18810__auto____0;
reagi$core$flatten_ch_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__18810__auto____1;
return reagi$core$flatten_ch_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_35414 = f__18831__auto__.call(null);
(statearr_35414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_35414;
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
var G__35436 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__35436,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__35436,((function (G__35436,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__35436,ch,valve))
);

reagi.core.depend_on.call(null,G__35436,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__35436;
});

//# sourceMappingURL=core.js.map?rel=1477646667747