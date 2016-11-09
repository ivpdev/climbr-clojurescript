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
var x__7206__auto__ = (((signal == null))?null:signal);
var m__7207__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,signal);
} else {
var m__7207__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,signal);
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
var x__7206__auto__ = (((x == null))?null:x);
var m__7207__auto__ = (reagi.core.unbox[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,x);
} else {
var m__7207__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,x);
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

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"reagi.core/Completed");
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
if(typeof reagi.core.t_reagi$core20197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core20197 = (function (x,meta20198){
this.x = x;
this.meta20198 = meta20198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core20197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20199,meta20198__$1){
var self__ = this;
var _20199__$1 = this;
return (new reagi.core.t_reagi$core20197(self__.x,meta20198__$1));
});

reagi.core.t_reagi$core20197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20199){
var self__ = this;
var _20199__$1 = this;
return self__.meta20198;
});

reagi.core.t_reagi$core20197.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core20197.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core20197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta20198","meta20198",1572621029,null)], null);
});

reagi.core.t_reagi$core20197.cljs$lang$type = true;

reagi.core.t_reagi$core20197.cljs$lang$ctorStr = "reagi.core/t_reagi$core20197";

reagi.core.t_reagi$core20197.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"reagi.core/t_reagi$core20197");
});

reagi.core.__GT_t_reagi$core20197 = (function reagi$core$box_$___GT_t_reagi$core20197(x__$1,meta20198){
return (new reagi.core.t_reagi$core20197(x__$1,meta20198));
});

}

return (new reagi.core.t_reagi$core20197(x,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20200_SHARP_){
if((p1__20200_SHARP_ instanceof reagi.core.Completed)){
return p1__20200_SHARP_;
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

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"reagi.core/Behavior");
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
var x__7206__auto__ = (((ob == null))?null:ob);
var m__7207__auto__ = (reagi.core.port[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,ob);
} else {
var m__7207__auto____$1 = (reagi.core.port["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,ob);
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
var x__7206__auto__ = (((ob == null))?null:ob);
var m__7207__auto__ = (reagi.core.listen[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,ob,ch);
} else {
var m__7207__auto____$1 = (reagi.core.listen["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,ob,ch);
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
if(typeof reagi.core.t_reagi$core20452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core20452 = (function (ch,state,meta20453){
this.ch = ch;
this.state = state;
this.meta20453 = meta20453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core20452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_20454,meta20453__$1){
var self__ = this;
var _20454__$1 = this;
return (new reagi.core.t_reagi$core20452(self__.ch,self__.state,meta20453__$1));
});})(state))
;

reagi.core.t_reagi$core20452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_20454){
var self__ = this;
var _20454__$1 = this;
return self__.meta20453;
});})(state))
;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__20458){
var vec__20459 = p__20458;
var o_QMARK_ = cljs.core.nth.call(null,vec__20459,(0),null);
var cs = cljs.core.nth.call(null,vec__20459,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__20455 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__20455,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__20455,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__20462){
var vec__20463 = p__20462;
var open_QMARK_ = cljs.core.nth.call(null,vec__20463,(0),null);
var cs = cljs.core.nth.call(null,vec__20463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core20452.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__20466){
var vec__20467 = p__20466;
var open_QMARK_ = cljs.core.nth.call(null,vec__20467,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__20467,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core20452.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta20453","meta20453",371141427,null)], null);
});})(state))
;

reagi.core.t_reagi$core20452.cljs$lang$type = true;

reagi.core.t_reagi$core20452.cljs$lang$ctorStr = "reagi.core/t_reagi$core20452";

reagi.core.t_reagi$core20452.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"reagi.core/t_reagi$core20452");
});})(state))
;

reagi.core.__GT_t_reagi$core20452 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core20452(ch__$1,state__$1,meta20453){
return (new reagi.core.t_reagi$core20452(ch__$1,state__$1,meta20453));
});})(state))
;

}

return (new reagi.core.t_reagi$core20452(ch,state,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9118__auto___20703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___20703,state,m,dchan,dctr,done){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___20703,state,m,dchan,dctr,done){
return (function (state_20612){
var state_val_20613 = (state_20612[(1)]);
if((state_val_20613 === (7))){
var inst_20608 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20614_20704 = state_20612__$1;
(statearr_20614_20704[(2)] = inst_20608);

(statearr_20614_20704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (20))){
var inst_20510 = (state_20612[(7)]);
var inst_20522 = cljs.core.first.call(null,inst_20510);
var inst_20523 = cljs.core.nth.call(null,inst_20522,(0),null);
var inst_20524 = cljs.core.nth.call(null,inst_20522,(1),null);
var state_20612__$1 = (function (){var statearr_20615 = state_20612;
(statearr_20615[(8)] = inst_20523);

return statearr_20615;
})();
if(cljs.core.truth_(inst_20524)){
var statearr_20616_20705 = state_20612__$1;
(statearr_20616_20705[(1)] = (22));

} else {
var statearr_20617_20706 = state_20612__$1;
(statearr_20617_20706[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (27))){
var inst_20560 = (state_20612[(9)]);
var inst_20553 = (state_20612[(10)]);
var inst_20472 = (state_20612[(11)]);
var inst_20555 = (state_20612[(12)]);
var inst_20560__$1 = cljs.core._nth.call(null,inst_20553,inst_20555);
var inst_20561 = cljs.core.async.put_BANG_.call(null,inst_20560__$1,inst_20472,done);
var state_20612__$1 = (function (){var statearr_20618 = state_20612;
(statearr_20618[(9)] = inst_20560__$1);

return statearr_20618;
})();
if(cljs.core.truth_(inst_20561)){
var statearr_20619_20707 = state_20612__$1;
(statearr_20619_20707[(1)] = (30));

} else {
var statearr_20620_20708 = state_20612__$1;
(statearr_20620_20708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (1))){
var state_20612__$1 = state_20612;
var statearr_20621_20709 = state_20612__$1;
(statearr_20621_20709[(2)] = null);

(statearr_20621_20709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (24))){
var inst_20510 = (state_20612[(7)]);
var inst_20529 = (state_20612[(2)]);
var inst_20530 = cljs.core.next.call(null,inst_20510);
var inst_20488 = inst_20530;
var inst_20489 = null;
var inst_20490 = (0);
var inst_20491 = (0);
var state_20612__$1 = (function (){var statearr_20622 = state_20612;
(statearr_20622[(13)] = inst_20529);

(statearr_20622[(14)] = inst_20491);

(statearr_20622[(15)] = inst_20488);

(statearr_20622[(16)] = inst_20490);

(statearr_20622[(17)] = inst_20489);

return statearr_20622;
})();
var statearr_20623_20710 = state_20612__$1;
(statearr_20623_20710[(2)] = null);

(statearr_20623_20710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (39))){
var state_20612__$1 = state_20612;
var statearr_20627_20711 = state_20612__$1;
(statearr_20627_20711[(2)] = null);

(statearr_20627_20711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (4))){
var inst_20472 = (state_20612[(11)]);
var inst_20472__$1 = (state_20612[(2)]);
var inst_20473 = (inst_20472__$1 == null);
var state_20612__$1 = (function (){var statearr_20628 = state_20612;
(statearr_20628[(11)] = inst_20472__$1);

return statearr_20628;
})();
if(cljs.core.truth_(inst_20473)){
var statearr_20629_20712 = state_20612__$1;
(statearr_20629_20712[(1)] = (5));

} else {
var statearr_20630_20713 = state_20612__$1;
(statearr_20630_20713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (15))){
var inst_20491 = (state_20612[(14)]);
var inst_20488 = (state_20612[(15)]);
var inst_20490 = (state_20612[(16)]);
var inst_20489 = (state_20612[(17)]);
var inst_20506 = (state_20612[(2)]);
var inst_20507 = (inst_20491 + (1));
var tmp20624 = inst_20488;
var tmp20625 = inst_20490;
var tmp20626 = inst_20489;
var inst_20488__$1 = tmp20624;
var inst_20489__$1 = tmp20626;
var inst_20490__$1 = tmp20625;
var inst_20491__$1 = inst_20507;
var state_20612__$1 = (function (){var statearr_20631 = state_20612;
(statearr_20631[(14)] = inst_20491__$1);

(statearr_20631[(18)] = inst_20506);

(statearr_20631[(15)] = inst_20488__$1);

(statearr_20631[(16)] = inst_20490__$1);

(statearr_20631[(17)] = inst_20489__$1);

return statearr_20631;
})();
var statearr_20632_20714 = state_20612__$1;
(statearr_20632_20714[(2)] = null);

(statearr_20632_20714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (21))){
var inst_20533 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20636_20715 = state_20612__$1;
(statearr_20636_20715[(2)] = inst_20533);

(statearr_20636_20715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (31))){
var inst_20560 = (state_20612[(9)]);
var inst_20564 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20565 = cljs.core.async.untap_STAR_.call(null,m,inst_20560);
var state_20612__$1 = (function (){var statearr_20637 = state_20612;
(statearr_20637[(19)] = inst_20564);

return statearr_20637;
})();
var statearr_20638_20716 = state_20612__$1;
(statearr_20638_20716[(2)] = inst_20565);

(statearr_20638_20716[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (32))){
var inst_20553 = (state_20612[(10)]);
var inst_20552 = (state_20612[(20)]);
var inst_20554 = (state_20612[(21)]);
var inst_20555 = (state_20612[(12)]);
var inst_20567 = (state_20612[(2)]);
var inst_20568 = (inst_20555 + (1));
var tmp20633 = inst_20553;
var tmp20634 = inst_20552;
var tmp20635 = inst_20554;
var inst_20552__$1 = tmp20634;
var inst_20553__$1 = tmp20633;
var inst_20554__$1 = tmp20635;
var inst_20555__$1 = inst_20568;
var state_20612__$1 = (function (){var statearr_20639 = state_20612;
(statearr_20639[(22)] = inst_20567);

(statearr_20639[(10)] = inst_20553__$1);

(statearr_20639[(20)] = inst_20552__$1);

(statearr_20639[(21)] = inst_20554__$1);

(statearr_20639[(12)] = inst_20555__$1);

return statearr_20639;
})();
var statearr_20640_20717 = state_20612__$1;
(statearr_20640_20717[(2)] = null);

(statearr_20640_20717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (40))){
var inst_20580 = (state_20612[(23)]);
var inst_20584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_20585 = cljs.core.async.untap_STAR_.call(null,m,inst_20580);
var state_20612__$1 = (function (){var statearr_20641 = state_20612;
(statearr_20641[(24)] = inst_20584);

return statearr_20641;
})();
var statearr_20642_20718 = state_20612__$1;
(statearr_20642_20718[(2)] = inst_20585);

(statearr_20642_20718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (33))){
var inst_20571 = (state_20612[(25)]);
var inst_20573 = cljs.core.chunked_seq_QMARK_.call(null,inst_20571);
var state_20612__$1 = state_20612;
if(inst_20573){
var statearr_20643_20719 = state_20612__$1;
(statearr_20643_20719[(1)] = (36));

} else {
var statearr_20644_20720 = state_20612__$1;
(statearr_20644_20720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (13))){
var inst_20500 = (state_20612[(26)]);
var inst_20503 = cljs.core.async.close_BANG_.call(null,inst_20500);
var state_20612__$1 = state_20612;
var statearr_20645_20721 = state_20612__$1;
(statearr_20645_20721[(2)] = inst_20503);

(statearr_20645_20721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (22))){
var inst_20523 = (state_20612[(8)]);
var inst_20526 = cljs.core.async.close_BANG_.call(null,inst_20523);
var state_20612__$1 = state_20612;
var statearr_20646_20722 = state_20612__$1;
(statearr_20646_20722[(2)] = inst_20526);

(statearr_20646_20722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (36))){
var inst_20571 = (state_20612[(25)]);
var inst_20575 = cljs.core.chunk_first.call(null,inst_20571);
var inst_20576 = cljs.core.chunk_rest.call(null,inst_20571);
var inst_20577 = cljs.core.count.call(null,inst_20575);
var inst_20552 = inst_20576;
var inst_20553 = inst_20575;
var inst_20554 = inst_20577;
var inst_20555 = (0);
var state_20612__$1 = (function (){var statearr_20647 = state_20612;
(statearr_20647[(10)] = inst_20553);

(statearr_20647[(20)] = inst_20552);

(statearr_20647[(21)] = inst_20554);

(statearr_20647[(12)] = inst_20555);

return statearr_20647;
})();
var statearr_20648_20723 = state_20612__$1;
(statearr_20648_20723[(2)] = null);

(statearr_20648_20723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (41))){
var inst_20571 = (state_20612[(25)]);
var inst_20587 = (state_20612[(2)]);
var inst_20588 = cljs.core.next.call(null,inst_20571);
var inst_20552 = inst_20588;
var inst_20553 = null;
var inst_20554 = (0);
var inst_20555 = (0);
var state_20612__$1 = (function (){var statearr_20649 = state_20612;
(statearr_20649[(10)] = inst_20553);

(statearr_20649[(20)] = inst_20552);

(statearr_20649[(27)] = inst_20587);

(statearr_20649[(21)] = inst_20554);

(statearr_20649[(12)] = inst_20555);

return statearr_20649;
})();
var statearr_20650_20724 = state_20612__$1;
(statearr_20650_20724[(2)] = null);

(statearr_20650_20724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (43))){
var state_20612__$1 = state_20612;
var statearr_20651_20725 = state_20612__$1;
(statearr_20651_20725[(2)] = null);

(statearr_20651_20725[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (29))){
var inst_20596 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20652_20726 = state_20612__$1;
(statearr_20652_20726[(2)] = inst_20596);

(statearr_20652_20726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (44))){
var inst_20605 = (state_20612[(2)]);
var state_20612__$1 = (function (){var statearr_20653 = state_20612;
(statearr_20653[(28)] = inst_20605);

return statearr_20653;
})();
var statearr_20654_20727 = state_20612__$1;
(statearr_20654_20727[(2)] = null);

(statearr_20654_20727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (6))){
var inst_20544 = (state_20612[(29)]);
var inst_20542 = cljs.core.deref.call(null,state);
var inst_20543 = cljs.core.second.call(null,inst_20542);
var inst_20544__$1 = cljs.core.keys.call(null,inst_20543);
var inst_20545 = cljs.core.count.call(null,inst_20544__$1);
var inst_20546 = cljs.core.reset_BANG_.call(null,dctr,inst_20545);
var inst_20551 = cljs.core.seq.call(null,inst_20544__$1);
var inst_20552 = inst_20551;
var inst_20553 = null;
var inst_20554 = (0);
var inst_20555 = (0);
var state_20612__$1 = (function (){var statearr_20655 = state_20612;
(statearr_20655[(30)] = inst_20546);

(statearr_20655[(10)] = inst_20553);

(statearr_20655[(20)] = inst_20552);

(statearr_20655[(21)] = inst_20554);

(statearr_20655[(29)] = inst_20544__$1);

(statearr_20655[(12)] = inst_20555);

return statearr_20655;
})();
var statearr_20656_20728 = state_20612__$1;
(statearr_20656_20728[(2)] = null);

(statearr_20656_20728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (28))){
var inst_20552 = (state_20612[(20)]);
var inst_20571 = (state_20612[(25)]);
var inst_20571__$1 = cljs.core.seq.call(null,inst_20552);
var state_20612__$1 = (function (){var statearr_20657 = state_20612;
(statearr_20657[(25)] = inst_20571__$1);

return statearr_20657;
})();
if(inst_20571__$1){
var statearr_20658_20729 = state_20612__$1;
(statearr_20658_20729[(1)] = (33));

} else {
var statearr_20659_20730 = state_20612__$1;
(statearr_20659_20730[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (25))){
var inst_20554 = (state_20612[(21)]);
var inst_20555 = (state_20612[(12)]);
var inst_20557 = (inst_20555 < inst_20554);
var inst_20558 = inst_20557;
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20558)){
var statearr_20660_20731 = state_20612__$1;
(statearr_20660_20731[(1)] = (27));

} else {
var statearr_20661_20732 = state_20612__$1;
(statearr_20661_20732[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (34))){
var state_20612__$1 = state_20612;
var statearr_20662_20733 = state_20612__$1;
(statearr_20662_20733[(2)] = null);

(statearr_20662_20733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (17))){
var state_20612__$1 = state_20612;
var statearr_20663_20734 = state_20612__$1;
(statearr_20663_20734[(2)] = null);

(statearr_20663_20734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (3))){
var inst_20610 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20612__$1,inst_20610);
} else {
if((state_val_20613 === (12))){
var inst_20538 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20664_20735 = state_20612__$1;
(statearr_20664_20735[(2)] = inst_20538);

(statearr_20664_20735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (2))){
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20612__$1,(4),ch);
} else {
if((state_val_20613 === (23))){
var state_20612__$1 = state_20612;
var statearr_20665_20736 = state_20612__$1;
(statearr_20665_20736[(2)] = null);

(statearr_20665_20736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (35))){
var inst_20594 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20666_20737 = state_20612__$1;
(statearr_20666_20737[(2)] = inst_20594);

(statearr_20666_20737[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (19))){
var inst_20510 = (state_20612[(7)]);
var inst_20514 = cljs.core.chunk_first.call(null,inst_20510);
var inst_20515 = cljs.core.chunk_rest.call(null,inst_20510);
var inst_20516 = cljs.core.count.call(null,inst_20514);
var inst_20488 = inst_20515;
var inst_20489 = inst_20514;
var inst_20490 = inst_20516;
var inst_20491 = (0);
var state_20612__$1 = (function (){var statearr_20667 = state_20612;
(statearr_20667[(14)] = inst_20491);

(statearr_20667[(15)] = inst_20488);

(statearr_20667[(16)] = inst_20490);

(statearr_20667[(17)] = inst_20489);

return statearr_20667;
})();
var statearr_20668_20738 = state_20612__$1;
(statearr_20668_20738[(2)] = null);

(statearr_20668_20738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (11))){
var inst_20510 = (state_20612[(7)]);
var inst_20488 = (state_20612[(15)]);
var inst_20510__$1 = cljs.core.seq.call(null,inst_20488);
var state_20612__$1 = (function (){var statearr_20669 = state_20612;
(statearr_20669[(7)] = inst_20510__$1);

return statearr_20669;
})();
if(inst_20510__$1){
var statearr_20670_20739 = state_20612__$1;
(statearr_20670_20739[(1)] = (16));

} else {
var statearr_20671_20740 = state_20612__$1;
(statearr_20671_20740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (9))){
var inst_20540 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20672_20741 = state_20612__$1;
(statearr_20672_20741[(2)] = inst_20540);

(statearr_20672_20741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (5))){
var inst_20472 = (state_20612[(11)]);
var inst_20479 = (function (){var val = inst_20472;
return ((function (val,inst_20472,state_val_20613,c__9118__auto___20703,state,m,dchan,dctr,done){
return (function (p__20478){
var vec__20673 = p__20478;
var _ = cljs.core.nth.call(null,vec__20673,(0),null);
var cs = cljs.core.nth.call(null,vec__20673,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_20472,state_val_20613,c__9118__auto___20703,state,m,dchan,dctr,done))
})();
var inst_20480 = cljs.core.swap_BANG_.call(null,state,inst_20479);
var inst_20481 = cljs.core.nth.call(null,inst_20480,(0),null);
var inst_20482 = cljs.core.nth.call(null,inst_20480,(1),null);
var inst_20487 = cljs.core.seq.call(null,inst_20482);
var inst_20488 = inst_20487;
var inst_20489 = null;
var inst_20490 = (0);
var inst_20491 = (0);
var state_20612__$1 = (function (){var statearr_20676 = state_20612;
(statearr_20676[(14)] = inst_20491);

(statearr_20676[(31)] = inst_20481);

(statearr_20676[(15)] = inst_20488);

(statearr_20676[(16)] = inst_20490);

(statearr_20676[(17)] = inst_20489);

return statearr_20676;
})();
var statearr_20677_20742 = state_20612__$1;
(statearr_20677_20742[(2)] = null);

(statearr_20677_20742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (14))){
var state_20612__$1 = state_20612;
var statearr_20678_20743 = state_20612__$1;
(statearr_20678_20743[(2)] = null);

(statearr_20678_20743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (45))){
var inst_20602 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20679_20744 = state_20612__$1;
(statearr_20679_20744[(2)] = inst_20602);

(statearr_20679_20744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (26))){
var inst_20544 = (state_20612[(29)]);
var inst_20598 = (state_20612[(2)]);
var inst_20599 = cljs.core.seq.call(null,inst_20544);
var state_20612__$1 = (function (){var statearr_20680 = state_20612;
(statearr_20680[(32)] = inst_20598);

return statearr_20680;
})();
if(inst_20599){
var statearr_20681_20745 = state_20612__$1;
(statearr_20681_20745[(1)] = (42));

} else {
var statearr_20682_20746 = state_20612__$1;
(statearr_20682_20746[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (16))){
var inst_20510 = (state_20612[(7)]);
var inst_20512 = cljs.core.chunked_seq_QMARK_.call(null,inst_20510);
var state_20612__$1 = state_20612;
if(inst_20512){
var statearr_20683_20747 = state_20612__$1;
(statearr_20683_20747[(1)] = (19));

} else {
var statearr_20684_20748 = state_20612__$1;
(statearr_20684_20748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (38))){
var inst_20591 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20685_20749 = state_20612__$1;
(statearr_20685_20749[(2)] = inst_20591);

(statearr_20685_20749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (30))){
var state_20612__$1 = state_20612;
var statearr_20686_20750 = state_20612__$1;
(statearr_20686_20750[(2)] = null);

(statearr_20686_20750[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (10))){
var inst_20491 = (state_20612[(14)]);
var inst_20489 = (state_20612[(17)]);
var inst_20499 = cljs.core._nth.call(null,inst_20489,inst_20491);
var inst_20500 = cljs.core.nth.call(null,inst_20499,(0),null);
var inst_20501 = cljs.core.nth.call(null,inst_20499,(1),null);
var state_20612__$1 = (function (){var statearr_20687 = state_20612;
(statearr_20687[(26)] = inst_20500);

return statearr_20687;
})();
if(cljs.core.truth_(inst_20501)){
var statearr_20688_20751 = state_20612__$1;
(statearr_20688_20751[(1)] = (13));

} else {
var statearr_20689_20752 = state_20612__$1;
(statearr_20689_20752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (18))){
var inst_20536 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20690_20753 = state_20612__$1;
(statearr_20690_20753[(2)] = inst_20536);

(statearr_20690_20753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (42))){
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20612__$1,(45),dchan);
} else {
if((state_val_20613 === (37))){
var inst_20580 = (state_20612[(23)]);
var inst_20472 = (state_20612[(11)]);
var inst_20571 = (state_20612[(25)]);
var inst_20580__$1 = cljs.core.first.call(null,inst_20571);
var inst_20581 = cljs.core.async.put_BANG_.call(null,inst_20580__$1,inst_20472,done);
var state_20612__$1 = (function (){var statearr_20691 = state_20612;
(statearr_20691[(23)] = inst_20580__$1);

return statearr_20691;
})();
if(cljs.core.truth_(inst_20581)){
var statearr_20692_20754 = state_20612__$1;
(statearr_20692_20754[(1)] = (39));

} else {
var statearr_20693_20755 = state_20612__$1;
(statearr_20693_20755[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (8))){
var inst_20491 = (state_20612[(14)]);
var inst_20490 = (state_20612[(16)]);
var inst_20493 = (inst_20491 < inst_20490);
var inst_20494 = inst_20493;
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20494)){
var statearr_20694_20756 = state_20612__$1;
(statearr_20694_20756[(1)] = (10));

} else {
var statearr_20695_20757 = state_20612__$1;
(statearr_20695_20757[(1)] = (11));

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
});})(c__9118__auto___20703,state,m,dchan,dctr,done))
;
return ((function (switch__9103__auto__,c__9118__auto___20703,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__9104__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_20699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20699[(0)] = reagi$core$mult_STAR__$_state_machine__9104__auto__);

(statearr_20699[(1)] = (1));

return statearr_20699;
});
var reagi$core$mult_STAR__$_state_machine__9104__auto____1 = (function (state_20612){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_20612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e20700){if((e20700 instanceof Object)){
var ex__9107__auto__ = e20700;
var statearr_20701_20758 = state_20612;
(statearr_20701_20758[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20759 = state_20612;
state_20612 = G__20759;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__9104__auto__ = function(state_20612){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__9104__auto____1.call(this,state_20612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__9104__auto____0;
reagi$core$mult_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__9104__auto____1;
return reagi$core$mult_STAR__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___20703,state,m,dchan,dctr,done))
})();
var state__9120__auto__ = (function (){var statearr_20702 = f__9119__auto__.call(null);
(statearr_20702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___20703);

return statearr_20702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___20703,state,m,dchan,dctr,done))
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
var x__7206__auto__ = (((x == null))?null:x);
var m__7207__auto__ = (reagi.core.dispose[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,x);
} else {
var m__7207__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,x);
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
var x__7206__auto__ = (((x == null))?null:x);
var m__7207__auto__ = (reagi.core.on_dispose[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,x,f);
} else {
var m__7207__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,x,f);
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
var c__9118__auto___20815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___20815,stream,self____$1){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___20815,stream,self____$1){
return (function (state_20765){
var state_val_20766 = (state_20765[(1)]);
if((state_val_20766 === (1))){
var inst_20761 = reagi.core.box.call(null,msg);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20765__$1,(2),self__.ch,inst_20761);
} else {
if((state_val_20766 === (2))){
var inst_20763 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20765__$1,inst_20763);
} else {
return null;
}
}
});})(c__9118__auto___20815,stream,self____$1))
;
return ((function (switch__9103__auto__,c__9118__auto___20815,stream,self____$1){
return (function() {
var reagi$core$state_machine__9104__auto__ = null;
var reagi$core$state_machine__9104__auto____0 = (function (){
var statearr_20770 = [null,null,null,null,null,null,null];
(statearr_20770[(0)] = reagi$core$state_machine__9104__auto__);

(statearr_20770[(1)] = (1));

return statearr_20770;
});
var reagi$core$state_machine__9104__auto____1 = (function (state_20765){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_20765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e20771){if((e20771 instanceof Object)){
var ex__9107__auto__ = e20771;
var statearr_20772_20816 = state_20765;
(statearr_20772_20816[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20817 = state_20765;
state_20765 = G__20817;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$state_machine__9104__auto__ = function(state_20765){
switch(arguments.length){
case 0:
return reagi$core$state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$state_machine__9104__auto____1.call(this,state_20765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__9104__auto____0;
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__9104__auto____1;
return reagi$core$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___20815,stream,self____$1))
})();
var state__9120__auto__ = (function (){var statearr_20773 = f__9119__auto__.call(null);
(statearr_20773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___20815);

return statearr_20773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___20815,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args20760){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20760)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__9118__auto___20818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___20818,stream){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___20818,stream){
return (function (state_20778){
var state_val_20779 = (state_20778[(1)]);
if((state_val_20779 === (1))){
var inst_20774 = reagi.core.box.call(null,msg);
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20778__$1,(2),self__.ch,inst_20774);
} else {
if((state_val_20779 === (2))){
var inst_20776 = (state_20778[(2)]);
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20778__$1,inst_20776);
} else {
return null;
}
}
});})(c__9118__auto___20818,stream))
;
return ((function (switch__9103__auto__,c__9118__auto___20818,stream){
return (function() {
var reagi$core$state_machine__9104__auto__ = null;
var reagi$core$state_machine__9104__auto____0 = (function (){
var statearr_20783 = [null,null,null,null,null,null,null];
(statearr_20783[(0)] = reagi$core$state_machine__9104__auto__);

(statearr_20783[(1)] = (1));

return statearr_20783;
});
var reagi$core$state_machine__9104__auto____1 = (function (state_20778){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_20778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e20784){if((e20784 instanceof Object)){
var ex__9107__auto__ = e20784;
var statearr_20785_20819 = state_20778;
(statearr_20785_20819[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20820 = state_20778;
state_20778 = G__20820;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$state_machine__9104__auto__ = function(state_20778){
switch(arguments.length){
case 0:
return reagi$core$state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$state_machine__9104__auto____1.call(this,state_20778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__9104__auto____0;
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__9104__auto____1;
return reagi$core$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___20818,stream))
})();
var state__9120__auto__ = (function (){var statearr_20786 = f__9119__auto__.call(null);
(statearr_20786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___20818);

return statearr_20786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___20818,stream))
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
var c__9118__auto___20821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___20821,___$1){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___20821,___$1){
return (function (state_20796){
var state_val_20797 = (state_20796[(1)]);
if((state_val_20797 === (1))){
var inst_20787 = (state_20796[(7)]);
var inst_20787__$1 = cljs.core.deref.call(null,self__.head);
var state_20796__$1 = (function (){var statearr_20798 = state_20796;
(statearr_20798[(7)] = inst_20787__$1);

return statearr_20798;
})();
if(cljs.core.truth_(inst_20787__$1)){
var statearr_20799_20822 = state_20796__$1;
(statearr_20799_20822[(1)] = (2));

} else {
var statearr_20800_20823 = state_20796__$1;
(statearr_20800_20823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20797 === (2))){
var inst_20787 = (state_20796[(7)]);
var state_20796__$1 = state_20796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20796__$1,(5),channel,inst_20787);
} else {
if((state_val_20797 === (3))){
var state_20796__$1 = state_20796;
var statearr_20801_20824 = state_20796__$1;
(statearr_20801_20824[(2)] = null);

(statearr_20801_20824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20797 === (4))){
var inst_20793 = (state_20796[(2)]);
var inst_20794 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_20796__$1 = (function (){var statearr_20802 = state_20796;
(statearr_20802[(8)] = inst_20793);

return statearr_20802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20796__$1,inst_20794);
} else {
if((state_val_20797 === (5))){
var inst_20790 = (state_20796[(2)]);
var state_20796__$1 = state_20796;
var statearr_20803_20825 = state_20796__$1;
(statearr_20803_20825[(2)] = inst_20790);

(statearr_20803_20825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__9118__auto___20821,___$1))
;
return ((function (switch__9103__auto__,c__9118__auto___20821,___$1){
return (function() {
var reagi$core$state_machine__9104__auto__ = null;
var reagi$core$state_machine__9104__auto____0 = (function (){
var statearr_20807 = [null,null,null,null,null,null,null,null,null];
(statearr_20807[(0)] = reagi$core$state_machine__9104__auto__);

(statearr_20807[(1)] = (1));

return statearr_20807;
});
var reagi$core$state_machine__9104__auto____1 = (function (state_20796){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_20796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e20808){if((e20808 instanceof Object)){
var ex__9107__auto__ = e20808;
var statearr_20809_20826 = state_20796;
(statearr_20809_20826[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20796;
state_20796 = G__20827;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$state_machine__9104__auto__ = function(state_20796){
switch(arguments.length){
case 0:
return reagi$core$state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$state_machine__9104__auto____1.call(this,state_20796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__9104__auto____0;
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__9104__auto____1;
return reagi$core$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___20821,___$1))
})();
var state__9120__auto__ = (function (){var statearr_20810 = f__9119__auto__.call(null);
(statearr_20810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___20821);

return statearr_20810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___20821,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__6543__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__20811_20828 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__20812_20829 = null;
var count__20813_20830 = (0);
var i__20814_20831 = (0);
while(true){
if((i__20814_20831 < count__20813_20830)){
var d_20832 = cljs.core._nth.call(null,chunk__20812_20829,i__20814_20831);
d_20832.call(null);

var G__20833 = seq__20811_20828;
var G__20834 = chunk__20812_20829;
var G__20835 = count__20813_20830;
var G__20836 = (i__20814_20831 + (1));
seq__20811_20828 = G__20833;
chunk__20812_20829 = G__20834;
count__20813_20830 = G__20835;
i__20814_20831 = G__20836;
continue;
} else {
var temp__4657__auto___20837 = cljs.core.seq.call(null,seq__20811_20828);
if(temp__4657__auto___20837){
var seq__20811_20838__$1 = temp__4657__auto___20837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20811_20838__$1)){
var c__7357__auto___20839 = cljs.core.chunk_first.call(null,seq__20811_20838__$1);
var G__20840 = cljs.core.chunk_rest.call(null,seq__20811_20838__$1);
var G__20841 = c__7357__auto___20839;
var G__20842 = cljs.core.count.call(null,c__7357__auto___20839);
var G__20843 = (0);
seq__20811_20828 = G__20840;
chunk__20812_20829 = G__20841;
count__20813_20830 = G__20842;
i__20814_20831 = G__20843;
continue;
} else {
var d_20844 = cljs.core.first.call(null,seq__20811_20838__$1);
d_20844.call(null);

var G__20845 = cljs.core.next.call(null,seq__20811_20838__$1);
var G__20846 = null;
var G__20847 = (0);
var G__20848 = (0);
seq__20811_20828 = G__20845;
chunk__20812_20829 = G__20846;
count__20813_20830 = G__20847;
i__20814_20831 = G__20848;
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

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"reagi.core/Events");
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
var args20849 = [];
var len__7651__auto___20899 = arguments.length;
var i__7652__auto___20900 = (0);
while(true){
if((i__7652__auto___20900 < len__7651__auto___20899)){
args20849.push((arguments[i__7652__auto___20900]));

var G__20901 = (i__7652__auto___20900 + (1));
i__7652__auto___20900 = G__20901;
continue;
} else {
}
break;
}

var G__20851 = args20849.length;
switch (G__20851) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20849.length)].join('')));

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
var c__9118__auto___20903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___20903,in$,closed,head,out,mult){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___20903,in$,closed,head,out,mult){
return (function (state_20875){
var state_val_20876 = (state_20875[(1)]);
if((state_val_20876 === (7))){
var inst_20861 = (state_20875[(7)]);
var inst_20861__$1 = (state_20875[(2)]);
var state_20875__$1 = (function (){var statearr_20877 = state_20875;
(statearr_20877[(7)] = inst_20861__$1);

return statearr_20877;
})();
if(cljs.core.truth_(inst_20861__$1)){
var statearr_20878_20904 = state_20875__$1;
(statearr_20878_20904[(1)] = (8));

} else {
var statearr_20879_20905 = state_20875__$1;
(statearr_20879_20905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (1))){
var inst_20852 = init;
var state_20875__$1 = (function (){var statearr_20880 = state_20875;
(statearr_20880[(8)] = inst_20852);

return statearr_20880;
})();
var statearr_20881_20906 = state_20875__$1;
(statearr_20881_20906[(2)] = null);

(statearr_20881_20906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (4))){
var inst_20856 = cljs.core.async.close_BANG_.call(null,in$);
var state_20875__$1 = state_20875;
var statearr_20882_20907 = state_20875__$1;
(statearr_20882_20907[(2)] = inst_20856);

(statearr_20882_20907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (6))){
var inst_20859 = (state_20875[(2)]);
var state_20875__$1 = (function (){var statearr_20883 = state_20875;
(statearr_20883[(9)] = inst_20859);

return statearr_20883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20875__$1,(7),in$);
} else {
if((state_val_20876 === (3))){
var inst_20871 = (state_20875[(2)]);
var inst_20872 = cljs.core.async.close_BANG_.call(null,out);
var inst_20873 = cljs.core.reset_BANG_.call(null,closed,true);
var state_20875__$1 = (function (){var statearr_20884 = state_20875;
(statearr_20884[(10)] = inst_20871);

(statearr_20884[(11)] = inst_20872);

return statearr_20884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20875__$1,inst_20873);
} else {
if((state_val_20876 === (2))){
var inst_20852 = (state_20875[(8)]);
var inst_20854 = (inst_20852 instanceof reagi.core.Completed);
var state_20875__$1 = state_20875;
if(cljs.core.truth_(inst_20854)){
var statearr_20885_20908 = state_20875__$1;
(statearr_20885_20908[(1)] = (4));

} else {
var statearr_20886_20909 = state_20875__$1;
(statearr_20886_20909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (11))){
var inst_20861 = (state_20875[(7)]);
var inst_20864 = (state_20875[(2)]);
var inst_20865 = cljs.core.reset_BANG_.call(null,head,inst_20861);
var inst_20852 = inst_20861;
var state_20875__$1 = (function (){var statearr_20887 = state_20875;
(statearr_20887[(12)] = inst_20864);

(statearr_20887[(8)] = inst_20852);

(statearr_20887[(13)] = inst_20865);

return statearr_20887;
})();
var statearr_20888_20910 = state_20875__$1;
(statearr_20888_20910[(2)] = null);

(statearr_20888_20910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (9))){
var state_20875__$1 = state_20875;
var statearr_20889_20911 = state_20875__$1;
(statearr_20889_20911[(2)] = null);

(statearr_20889_20911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (5))){
var state_20875__$1 = state_20875;
var statearr_20890_20912 = state_20875__$1;
(statearr_20890_20912[(2)] = null);

(statearr_20890_20912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (10))){
var inst_20869 = (state_20875[(2)]);
var state_20875__$1 = state_20875;
var statearr_20891_20913 = state_20875__$1;
(statearr_20891_20913[(2)] = inst_20869);

(statearr_20891_20913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20876 === (8))){
var inst_20861 = (state_20875[(7)]);
var state_20875__$1 = state_20875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20875__$1,(11),out,inst_20861);
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
});})(c__9118__auto___20903,in$,closed,head,out,mult))
;
return ((function (switch__9103__auto__,c__9118__auto___20903,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__9104__auto__ = null;
var reagi$core$state_machine__9104__auto____0 = (function (){
var statearr_20895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20895[(0)] = reagi$core$state_machine__9104__auto__);

(statearr_20895[(1)] = (1));

return statearr_20895;
});
var reagi$core$state_machine__9104__auto____1 = (function (state_20875){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_20875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e20896){if((e20896 instanceof Object)){
var ex__9107__auto__ = e20896;
var statearr_20897_20914 = state_20875;
(statearr_20897_20914[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20915 = state_20875;
state_20875 = G__20915;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$state_machine__9104__auto__ = function(state_20875){
switch(arguments.length){
case 0:
return reagi$core$state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$state_machine__9104__auto____1.call(this,state_20875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__9104__auto____0;
reagi$core$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__9104__auto____1;
return reagi$core$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___20903,in$,closed,head,out,mult))
})();
var state__9120__auto__ = (function (){var statearr_20898 = f__9119__auto__.call(null);
(statearr_20898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___20903);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___20903,in$,closed,head,out,mult))
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
var args20916 = [];
var len__7651__auto___20926 = arguments.length;
var i__7652__auto___20927 = (0);
while(true){
if((i__7652__auto___20927 < len__7651__auto___20926)){
args20916.push((arguments[i__7652__auto___20927]));

var G__20928 = (i__7652__auto___20927 + (1));
i__7652__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var G__20921 = args20916.length;
switch (G__20921) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args20916.slice((2)),(0),null));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__20922 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__20923 = null;
var count__20924 = (0);
var i__20925 = (0);
while(true){
if((i__20925 < count__20924)){
var m = cljs.core._nth.call(null,chunk__20923,i__20925);
stream.call(null,m);

var G__20930 = seq__20922;
var G__20931 = chunk__20923;
var G__20932 = count__20924;
var G__20933 = (i__20925 + (1));
seq__20922 = G__20930;
chunk__20923 = G__20931;
count__20924 = G__20932;
i__20925 = G__20933;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20922);
if(temp__4657__auto__){
var seq__20922__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20922__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__20922__$1);
var G__20934 = cljs.core.chunk_rest.call(null,seq__20922__$1);
var G__20935 = c__7357__auto__;
var G__20936 = cljs.core.count.call(null,c__7357__auto__);
var G__20937 = (0);
seq__20922 = G__20934;
chunk__20923 = G__20935;
count__20924 = G__20936;
i__20925 = G__20937;
continue;
} else {
var m = cljs.core.first.call(null,seq__20922__$1);
stream.call(null,m);

var G__20938 = cljs.core.next.call(null,seq__20922__$1);
var G__20939 = null;
var G__20940 = (0);
var G__20941 = (0);
seq__20922 = G__20938;
chunk__20923 = G__20939;
count__20924 = G__20940;
i__20925 = G__20941;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq20917){
var G__20918 = cljs.core.first.call(null,seq20917);
var seq20917__$1 = cljs.core.next.call(null,seq20917);
var G__20919 = cljs.core.first.call(null,seq20917__$1);
var seq20917__$2 = cljs.core.next.call(null,seq20917__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__20918,G__20919,seq20917__$2);
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
var seq__20946 = cljs.core.seq.call(null,chs);
var chunk__20947 = null;
var count__20948 = (0);
var i__20949 = (0);
while(true){
if((i__20949 < count__20948)){
var ch = cljs.core._nth.call(null,chunk__20947,i__20949);
cljs.core.async.close_BANG_.call(null,ch);

var G__20950 = seq__20946;
var G__20951 = chunk__20947;
var G__20952 = count__20948;
var G__20953 = (i__20949 + (1));
seq__20946 = G__20950;
chunk__20947 = G__20951;
count__20948 = G__20952;
i__20949 = G__20953;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20946);
if(temp__4657__auto__){
var seq__20946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20946__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__20946__$1);
var G__20954 = cljs.core.chunk_rest.call(null,seq__20946__$1);
var G__20955 = c__7357__auto__;
var G__20956 = cljs.core.count.call(null,c__7357__auto__);
var G__20957 = (0);
seq__20946 = G__20954;
chunk__20947 = G__20955;
count__20948 = G__20956;
i__20949 = G__20957;
continue;
} else {
var ch = cljs.core.first.call(null,seq__20946__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__20958 = cljs.core.next.call(null,seq__20946__$1);
var G__20959 = null;
var G__20960 = (0);
var G__20961 = (0);
seq__20946 = G__20958;
chunk__20947 = G__20959;
count__20948 = G__20960;
i__20949 = G__20961;
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
return cljs.core.mapv.call(null,(function (p1__20962_SHARP_){
return reagi.core.listen.call(null,p1__20962_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__7658__auto__ = [];
var len__7651__auto___20966 = arguments.length;
var i__7652__auto___20967 = (0);
while(true){
if((i__7652__auto___20967 < len__7651__auto___20966)){
args__7658__auto__.push((arguments[i__7652__auto___20967]));

var G__20968 = (i__7652__auto___20967 + (1));
i__7652__auto___20967 = G__20968;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

reagi.core.connect_port.cljs$lang$applyTo = (function (seq20963){
var G__20964 = cljs.core.first.call(null,seq20963);
var seq20963__$1 = cljs.core.next.call(null,seq20963);
var G__20965 = cljs.core.first.call(null,seq20963__$1);
var seq20963__$2 = cljs.core.next.call(null,seq20963__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__20964,G__20965,seq20963__$2);
});

/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__7658__auto__ = [];
var len__7651__auto___20971 = arguments.length;
var i__7652__auto___20972 = (0);
while(true){
if((i__7652__auto___20972 < len__7651__auto___20971)){
args__7658__auto__.push((arguments[i__7652__auto___20972]));

var G__20973 = (i__7652__auto___20972 + (1));
i__7652__auto___20972 = G__20973;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__20970 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__20970,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__20970,((function (G__20970,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__20970,chs))
);

reagi.core.depend_on.call(null,G__20970,streams);

return G__20970;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq20969){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20969));
});

reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,index){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,index){
return (function (state_21086){
var state_val_21087 = (state_21086[(1)]);
if((state_val_21087 === (7))){
var inst_21059 = (state_21086[(7)]);
var inst_21058 = (state_21086[(2)]);
var inst_21059__$1 = cljs.core.nth.call(null,inst_21058,(0),null);
var inst_21060 = cljs.core.nth.call(null,inst_21058,(1),null);
var state_21086__$1 = (function (){var statearr_21089 = state_21086;
(statearr_21089[(7)] = inst_21059__$1);

(statearr_21089[(8)] = inst_21060);

return statearr_21089;
})();
if(cljs.core.truth_(inst_21059__$1)){
var statearr_21090_21116 = state_21086__$1;
(statearr_21090_21116[(1)] = (8));

} else {
var statearr_21091_21117 = state_21086__$1;
(statearr_21091_21117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (1))){
var inst_21045 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_21046 = cljs.core.mapv.call(null,inst_21045,ins);
var inst_21047 = cljs.core.set.call(null,ins);
var inst_21048 = inst_21046;
var inst_21049 = inst_21047;
var state_21086__$1 = (function (){var statearr_21092 = state_21086;
(statearr_21092[(9)] = inst_21049);

(statearr_21092[(10)] = inst_21048);

return statearr_21092;
})();
var statearr_21093_21118 = state_21086__$1;
(statearr_21093_21118[(2)] = null);

(statearr_21093_21118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (4))){
var inst_21049 = (state_21086[(9)]);
var inst_21056 = cljs.core.vec.call(null,inst_21049);
var state_21086__$1 = state_21086;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21086__$1,(7),inst_21056);
} else {
if((state_val_21087 === (13))){
var inst_21064 = (state_21086[(11)]);
var inst_21049 = (state_21086[(9)]);
var inst_21072 = (state_21086[(2)]);
var tmp21088 = inst_21049;
var inst_21048 = inst_21064;
var inst_21049__$1 = tmp21088;
var state_21086__$1 = (function (){var statearr_21094 = state_21086;
(statearr_21094[(9)] = inst_21049__$1);

(statearr_21094[(12)] = inst_21072);

(statearr_21094[(10)] = inst_21048);

return statearr_21094;
})();
var statearr_21095_21119 = state_21086__$1;
(statearr_21095_21119[(2)] = null);

(statearr_21095_21119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (6))){
var inst_21082 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21096_21120 = state_21086__$1;
(statearr_21096_21120[(2)] = inst_21082);

(statearr_21096_21120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (3))){
var inst_21084 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21086__$1,inst_21084);
} else {
if((state_val_21087 === (12))){
var inst_21064 = (state_21086[(11)]);
var inst_21068 = reagi.core.box.call(null,inst_21064);
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21086__$1,(14),out,inst_21068);
} else {
if((state_val_21087 === (2))){
var inst_21049 = (state_21086[(9)]);
var inst_21051 = cljs.core.seq.call(null,inst_21049);
var state_21086__$1 = state_21086;
if(inst_21051){
var statearr_21098_21121 = state_21086__$1;
(statearr_21098_21121[(1)] = (4));

} else {
var statearr_21099_21122 = state_21086__$1;
(statearr_21099_21122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (11))){
var state_21086__$1 = state_21086;
var statearr_21100_21123 = state_21086__$1;
(statearr_21100_21123[(2)] = null);

(statearr_21100_21123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (9))){
var inst_21049 = (state_21086[(9)]);
var inst_21060 = (state_21086[(8)]);
var inst_21048 = (state_21086[(10)]);
var inst_21075 = cljs.core.disj.call(null,inst_21049,inst_21060);
var tmp21097 = inst_21048;
var inst_21048__$1 = tmp21097;
var inst_21049__$1 = inst_21075;
var state_21086__$1 = (function (){var statearr_21101 = state_21086;
(statearr_21101[(9)] = inst_21049__$1);

(statearr_21101[(10)] = inst_21048__$1);

return statearr_21101;
})();
var statearr_21102_21124 = state_21086__$1;
(statearr_21102_21124[(2)] = null);

(statearr_21102_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (5))){
var inst_21080 = cljs.core.async.close_BANG_.call(null,out);
var state_21086__$1 = state_21086;
var statearr_21103_21125 = state_21086__$1;
(statearr_21103_21125[(2)] = inst_21080);

(statearr_21103_21125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (14))){
var inst_21070 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21104_21126 = state_21086__$1;
(statearr_21104_21126[(2)] = inst_21070);

(statearr_21104_21126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (10))){
var inst_21078 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21105_21127 = state_21086__$1;
(statearr_21105_21127[(2)] = inst_21078);

(statearr_21105_21127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (8))){
var inst_21064 = (state_21086[(11)]);
var inst_21059 = (state_21086[(7)]);
var inst_21060 = (state_21086[(8)]);
var inst_21048 = (state_21086[(10)]);
var inst_21062 = index.call(null,inst_21060);
var inst_21063 = reagi.core.unbox.call(null,inst_21059);
var inst_21064__$1 = cljs.core.assoc.call(null,inst_21048,inst_21062,inst_21063);
var inst_21065 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_21064__$1);
var state_21086__$1 = (function (){var statearr_21106 = state_21086;
(statearr_21106[(11)] = inst_21064__$1);

return statearr_21106;
})();
if(cljs.core.truth_(inst_21065)){
var statearr_21107_21128 = state_21086__$1;
(statearr_21107_21128[(1)] = (11));

} else {
var statearr_21108_21129 = state_21086__$1;
(statearr_21108_21129[(1)] = (12));

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
});})(c__9118__auto__,index))
;
return ((function (switch__9103__auto__,c__9118__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__9104__auto__ = null;
var reagi$core$zip_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_21112 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21112[(0)] = reagi$core$zip_ch_$_state_machine__9104__auto__);

(statearr_21112[(1)] = (1));

return statearr_21112;
});
var reagi$core$zip_ch_$_state_machine__9104__auto____1 = (function (state_21086){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21113){if((e21113 instanceof Object)){
var ex__9107__auto__ = e21113;
var statearr_21114_21130 = state_21086;
(statearr_21114_21130[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21131 = state_21086;
state_21086 = G__21131;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__9104__auto__ = function(state_21086){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__9104__auto____1.call(this,state_21086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__9104__auto____0;
reagi$core$zip_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__9104__auto____1;
return reagi$core$zip_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,index))
})();
var state__9120__auto__ = (function (){var statearr_21115 = f__9119__auto__.call(null);
(statearr_21115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,index))
);

return c__9118__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__7658__auto__ = [];
var len__7651__auto___21134 = arguments.length;
var i__7652__auto___21135 = (0);
while(true){
if((i__7652__auto___21135 < len__7651__auto___21134)){
args__7658__auto__.push((arguments[i__7652__auto___21135]));

var G__21136 = (i__7652__auto___21135 + (1));
i__7652__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__21133 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21133,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__21133,((function (G__21133,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__21133,chs))
);

reagi.core.depend_on.call(null,G__21133,streams);

return G__21133;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq21132){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21132));
});

reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_21292){
var state_val_21293 = (state_21292[(1)]);
if((state_val_21293 === (7))){
var inst_21288 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
var statearr_21294_21331 = state_21292__$1;
(statearr_21294_21331[(2)] = inst_21288);

(statearr_21294_21331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (20))){
var inst_21260 = (state_21292[(7)]);
var inst_21272 = (state_21292[(2)]);
var inst_21273 = cljs.core.next.call(null,inst_21260);
var inst_21245 = inst_21273;
var inst_21246 = null;
var inst_21247 = (0);
var inst_21248 = (0);
var state_21292__$1 = (function (){var statearr_21295 = state_21292;
(statearr_21295[(8)] = inst_21248);

(statearr_21295[(9)] = inst_21247);

(statearr_21295[(10)] = inst_21246);

(statearr_21295[(11)] = inst_21245);

(statearr_21295[(12)] = inst_21272);

return statearr_21295;
})();
var statearr_21296_21332 = state_21292__$1;
(statearr_21296_21332[(2)] = null);

(statearr_21296_21332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (1))){
var state_21292__$1 = state_21292;
var statearr_21297_21333 = state_21292__$1;
(statearr_21297_21333[(2)] = null);

(statearr_21297_21333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (4))){
var inst_21236 = (state_21292[(13)]);
var inst_21236__$1 = (state_21292[(2)]);
var state_21292__$1 = (function (){var statearr_21301 = state_21292;
(statearr_21301[(13)] = inst_21236__$1);

return statearr_21301;
})();
if(cljs.core.truth_(inst_21236__$1)){
var statearr_21302_21334 = state_21292__$1;
(statearr_21302_21334[(1)] = (5));

} else {
var statearr_21303_21335 = state_21292__$1;
(statearr_21303_21335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (15))){
var state_21292__$1 = state_21292;
var statearr_21304_21336 = state_21292__$1;
(statearr_21304_21336[(2)] = null);

(statearr_21304_21336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (13))){
var inst_21248 = (state_21292[(8)]);
var inst_21247 = (state_21292[(9)]);
var inst_21246 = (state_21292[(10)]);
var inst_21245 = (state_21292[(11)]);
var inst_21256 = (state_21292[(2)]);
var inst_21257 = (inst_21248 + (1));
var tmp21298 = inst_21247;
var tmp21299 = inst_21246;
var tmp21300 = inst_21245;
var inst_21245__$1 = tmp21300;
var inst_21246__$1 = tmp21299;
var inst_21247__$1 = tmp21298;
var inst_21248__$1 = inst_21257;
var state_21292__$1 = (function (){var statearr_21305 = state_21292;
(statearr_21305[(8)] = inst_21248__$1);

(statearr_21305[(9)] = inst_21247__$1);

(statearr_21305[(10)] = inst_21246__$1);

(statearr_21305[(11)] = inst_21245__$1);

(statearr_21305[(14)] = inst_21256);

return statearr_21305;
})();
var statearr_21306_21337 = state_21292__$1;
(statearr_21306_21337[(2)] = null);

(statearr_21306_21337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (6))){
var inst_21286 = cljs.core.async.close_BANG_.call(null,out);
var state_21292__$1 = state_21292;
var statearr_21307_21338 = state_21292__$1;
(statearr_21307_21338[(2)] = inst_21286);

(statearr_21307_21338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (17))){
var inst_21260 = (state_21292[(7)]);
var inst_21264 = cljs.core.chunk_first.call(null,inst_21260);
var inst_21265 = cljs.core.chunk_rest.call(null,inst_21260);
var inst_21266 = cljs.core.count.call(null,inst_21264);
var inst_21245 = inst_21265;
var inst_21246 = inst_21264;
var inst_21247 = inst_21266;
var inst_21248 = (0);
var state_21292__$1 = (function (){var statearr_21308 = state_21292;
(statearr_21308[(8)] = inst_21248);

(statearr_21308[(9)] = inst_21247);

(statearr_21308[(10)] = inst_21246);

(statearr_21308[(11)] = inst_21245);

return statearr_21308;
})();
var statearr_21309_21339 = state_21292__$1;
(statearr_21309_21339[(2)] = null);

(statearr_21309_21339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (3))){
var inst_21290 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21292__$1,inst_21290);
} else {
if((state_val_21293 === (12))){
var inst_21281 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
var statearr_21310_21340 = state_21292__$1;
(statearr_21310_21340[(2)] = inst_21281);

(statearr_21310_21340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (2))){
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21292__$1,(4),in$);
} else {
if((state_val_21293 === (19))){
var inst_21276 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
var statearr_21311_21341 = state_21292__$1;
(statearr_21311_21341[(2)] = inst_21276);

(statearr_21311_21341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (11))){
var inst_21245 = (state_21292[(11)]);
var inst_21260 = (state_21292[(7)]);
var inst_21260__$1 = cljs.core.seq.call(null,inst_21245);
var state_21292__$1 = (function (){var statearr_21312 = state_21292;
(statearr_21312[(7)] = inst_21260__$1);

return statearr_21312;
})();
if(inst_21260__$1){
var statearr_21313_21342 = state_21292__$1;
(statearr_21313_21342[(1)] = (14));

} else {
var statearr_21314_21343 = state_21292__$1;
(statearr_21314_21343[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (9))){
var inst_21283 = (state_21292[(2)]);
var state_21292__$1 = (function (){var statearr_21315 = state_21292;
(statearr_21315[(15)] = inst_21283);

return statearr_21315;
})();
var statearr_21316_21344 = state_21292__$1;
(statearr_21316_21344[(2)] = null);

(statearr_21316_21344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (5))){
var inst_21236 = (state_21292[(13)]);
var inst_21238 = reagi.core.unbox.call(null,inst_21236);
var inst_21239 = f.call(null,inst_21238);
var inst_21244 = cljs.core.seq.call(null,inst_21239);
var inst_21245 = inst_21244;
var inst_21246 = null;
var inst_21247 = (0);
var inst_21248 = (0);
var state_21292__$1 = (function (){var statearr_21317 = state_21292;
(statearr_21317[(8)] = inst_21248);

(statearr_21317[(9)] = inst_21247);

(statearr_21317[(10)] = inst_21246);

(statearr_21317[(11)] = inst_21245);

return statearr_21317;
})();
var statearr_21318_21345 = state_21292__$1;
(statearr_21318_21345[(2)] = null);

(statearr_21318_21345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (14))){
var inst_21260 = (state_21292[(7)]);
var inst_21262 = cljs.core.chunked_seq_QMARK_.call(null,inst_21260);
var state_21292__$1 = state_21292;
if(inst_21262){
var statearr_21319_21346 = state_21292__$1;
(statearr_21319_21346[(1)] = (17));

} else {
var statearr_21320_21347 = state_21292__$1;
(statearr_21320_21347[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (16))){
var inst_21279 = (state_21292[(2)]);
var state_21292__$1 = state_21292;
var statearr_21321_21348 = state_21292__$1;
(statearr_21321_21348[(2)] = inst_21279);

(statearr_21321_21348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21293 === (10))){
var inst_21248 = (state_21292[(8)]);
var inst_21246 = (state_21292[(10)]);
var inst_21253 = cljs.core._nth.call(null,inst_21246,inst_21248);
var inst_21254 = reagi.core.box.call(null,inst_21253);
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21292__$1,(13),out,inst_21254);
} else {
if((state_val_21293 === (18))){
var inst_21260 = (state_21292[(7)]);
var inst_21269 = cljs.core.first.call(null,inst_21260);
var inst_21270 = reagi.core.box.call(null,inst_21269);
var state_21292__$1 = state_21292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21292__$1,(20),out,inst_21270);
} else {
if((state_val_21293 === (8))){
var inst_21248 = (state_21292[(8)]);
var inst_21247 = (state_21292[(9)]);
var inst_21250 = (inst_21248 < inst_21247);
var inst_21251 = inst_21250;
var state_21292__$1 = state_21292;
if(cljs.core.truth_(inst_21251)){
var statearr_21322_21349 = state_21292__$1;
(statearr_21322_21349[(1)] = (10));

} else {
var statearr_21323_21350 = state_21292__$1;
(statearr_21323_21350[(1)] = (11));

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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__9104__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_21327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21327[(0)] = reagi$core$mapcat_ch_$_state_machine__9104__auto__);

(statearr_21327[(1)] = (1));

return statearr_21327;
});
var reagi$core$mapcat_ch_$_state_machine__9104__auto____1 = (function (state_21292){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21328){if((e21328 instanceof Object)){
var ex__9107__auto__ = e21328;
var statearr_21329_21351 = state_21292;
(statearr_21329_21351[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21352 = state_21292;
state_21292 = G__21352;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__9104__auto__ = function(state_21292){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__9104__auto____1.call(this,state_21292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__9104__auto____0;
reagi$core$mapcat_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__9104__auto____1;
return reagi$core$mapcat_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_21330 = f__9119__auto__.call(null);
(statearr_21330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args21353 = [];
var len__7651__auto___21360 = arguments.length;
var i__7652__auto___21361 = (0);
while(true){
if((i__7652__auto___21361 < len__7651__auto___21360)){
args21353.push((arguments[i__7652__auto___21361]));

var G__21362 = (i__7652__auto___21361 + (1));
i__7652__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__21358 = args21353.length;
switch (G__21358) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args21353.slice((2)),(0),null));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21359 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21359,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__21359,((function (G__21359,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21359,ch))
);

reagi.core.depend_on.call(null,G__21359,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21359;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq21354){
var G__21355 = cljs.core.first.call(null,seq21354);
var seq21354__$1 = cljs.core.next.call(null,seq21354);
var G__21356 = cljs.core.first.call(null,seq21354__$1);
var seq21354__$2 = cljs.core.next.call(null,seq21354__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__21355,G__21356,seq21354__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__7658__auto__ = [];
var len__7651__auto___21366 = arguments.length;
var i__7652__auto___21367 = (0);
while(true){
if((i__7652__auto___21367 < len__7651__auto___21366)){
args__7658__auto__.push((arguments[i__7652__auto___21367]));

var G__21368 = (i__7652__auto___21367 + (1));
i__7652__auto___21367 = G__21368;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

reagi.core.map.cljs$lang$applyTo = (function (seq21364){
var G__21365 = cljs.core.first.call(null,seq21364);
var seq21364__$1 = cljs.core.next.call(null,seq21364);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__21365,seq21364__$1);
});

/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__21369_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__21369_SHARP_))){
var x__7380__auto__ = p1__21369_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_21441){
var state_val_21442 = (state_21441[(1)]);
if((state_val_21442 === (7))){
var inst_21437 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
var statearr_21443_21464 = state_21441__$1;
(statearr_21443_21464[(2)] = inst_21437);

(statearr_21443_21464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (1))){
var inst_21417 = init;
var state_21441__$1 = (function (){var statearr_21444 = state_21441;
(statearr_21444[(7)] = inst_21417);

return statearr_21444;
})();
var statearr_21445_21465 = state_21441__$1;
(statearr_21445_21465[(2)] = null);

(statearr_21445_21465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (4))){
var inst_21420 = (state_21441[(8)]);
var inst_21420__$1 = (state_21441[(2)]);
var state_21441__$1 = (function (){var statearr_21446 = state_21441;
(statearr_21446[(8)] = inst_21420__$1);

return statearr_21446;
})();
if(cljs.core.truth_(inst_21420__$1)){
var statearr_21447_21466 = state_21441__$1;
(statearr_21447_21466[(1)] = (5));

} else {
var statearr_21448_21467 = state_21441__$1;
(statearr_21448_21467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (6))){
var inst_21435 = cljs.core.async.close_BANG_.call(null,out);
var state_21441__$1 = state_21441;
var statearr_21449_21468 = state_21441__$1;
(statearr_21449_21468[(2)] = inst_21435);

(statearr_21449_21468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (3))){
var inst_21439 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21441__$1,inst_21439);
} else {
if((state_val_21442 === (2))){
var state_21441__$1 = state_21441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21441__$1,(4),in$);
} else {
if((state_val_21442 === (11))){
var inst_21429 = (state_21441[(9)]);
var inst_21432 = (state_21441[(2)]);
var inst_21417 = inst_21429;
var state_21441__$1 = (function (){var statearr_21450 = state_21441;
(statearr_21450[(7)] = inst_21417);

(statearr_21450[(10)] = inst_21432);

return statearr_21450;
})();
var statearr_21451_21469 = state_21441__$1;
(statearr_21451_21469[(2)] = null);

(statearr_21451_21469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (9))){
var inst_21420 = (state_21441[(8)]);
var inst_21417 = (state_21441[(7)]);
var inst_21426 = reagi.core.unbox.call(null,inst_21420);
var inst_21427 = f.call(null,inst_21417,inst_21426);
var state_21441__$1 = state_21441;
var statearr_21452_21470 = state_21441__$1;
(statearr_21452_21470[(2)] = inst_21427);

(statearr_21452_21470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (5))){
var inst_21417 = (state_21441[(7)]);
var inst_21422 = reagi.core.no_value_QMARK_.call(null,inst_21417);
var state_21441__$1 = state_21441;
if(cljs.core.truth_(inst_21422)){
var statearr_21453_21471 = state_21441__$1;
(statearr_21453_21471[(1)] = (8));

} else {
var statearr_21454_21472 = state_21441__$1;
(statearr_21454_21472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (10))){
var inst_21429 = (state_21441[(9)]);
var inst_21429__$1 = (state_21441[(2)]);
var inst_21430 = reagi.core.box.call(null,inst_21429__$1);
var state_21441__$1 = (function (){var statearr_21455 = state_21441;
(statearr_21455[(9)] = inst_21429__$1);

return statearr_21455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21441__$1,(11),out,inst_21430);
} else {
if((state_val_21442 === (8))){
var inst_21420 = (state_21441[(8)]);
var inst_21424 = reagi.core.unbox.call(null,inst_21420);
var state_21441__$1 = state_21441;
var statearr_21456_21473 = state_21441__$1;
(statearr_21456_21473[(2)] = inst_21424);

(statearr_21456_21473[(1)] = (10));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__9104__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21460[(0)] = reagi$core$reduce_ch_$_state_machine__9104__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var reagi$core$reduce_ch_$_state_machine__9104__auto____1 = (function (state_21441){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__9107__auto__ = e21461;
var statearr_21462_21474 = state_21441;
(statearr_21462_21474[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21475 = state_21441;
state_21441 = G__21475;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__9104__auto__ = function(state_21441){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__9104__auto____1.call(this,state_21441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__9104__auto____0;
reagi$core$reduce_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__9104__auto____1;
return reagi$core$reduce_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_21463 = f__9119__auto__.call(null);
(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args21476 = [];
var len__7651__auto___21480 = arguments.length;
var i__7652__auto___21481 = (0);
while(true){
if((i__7652__auto___21481 < len__7651__auto___21480)){
args21476.push((arguments[i__7652__auto___21481]));

var G__21482 = (i__7652__auto___21481 + (1));
i__7652__auto___21481 = G__21482;
continue;
} else {
}
break;
}

var G__21478 = args21476.length;
switch (G__21478) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21476.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21479 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__21479,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__21479,((function (G__21479,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21479,ch))
);

reagi.core.depend_on.call(null,G__21479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21479;
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
return reagi.core.reduce.call(null,(function (p1__21485_SHARP_,p2__21484_SHARP_){
return p2__21484_SHARP_.call(null,p1__21485_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args21486 = [];
var len__7651__auto___21489 = arguments.length;
var i__7652__auto___21490 = (0);
while(true){
if((i__7652__auto___21490 < len__7651__auto___21489)){
args21486.push((arguments[i__7652__auto___21490]));

var G__21491 = (i__7652__auto___21490 + (1));
i__7652__auto___21490 = G__21491;
continue;
} else {
}
break;
}

var G__21488 = args21486.length;
switch (G__21488) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21486.length)].join('')));

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
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_21574){
var state_val_21575 = (state_21574[(1)]);
if((state_val_21575 === (7))){
var inst_21570 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
var statearr_21576_21601 = state_21574__$1;
(statearr_21576_21601[(2)] = inst_21570);

(statearr_21576_21601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (1))){
var inst_21547 = reagi.core.no_value;
var state_21574__$1 = (function (){var statearr_21577 = state_21574;
(statearr_21577[(7)] = inst_21547);

return statearr_21577;
})();
var statearr_21578_21602 = state_21574__$1;
(statearr_21578_21602[(2)] = null);

(statearr_21578_21602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (4))){
var inst_21550 = (state_21574[(8)]);
var inst_21550__$1 = (state_21574[(2)]);
var state_21574__$1 = (function (){var statearr_21579 = state_21574;
(statearr_21579[(8)] = inst_21550__$1);

return statearr_21579;
})();
if(cljs.core.truth_(inst_21550__$1)){
var statearr_21580_21603 = state_21574__$1;
(statearr_21580_21603[(1)] = (5));

} else {
var statearr_21581_21604 = state_21574__$1;
(statearr_21581_21604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (13))){
var inst_21552 = (state_21574[(9)]);
var inst_21565 = (state_21574[(2)]);
var inst_21547 = inst_21552;
var state_21574__$1 = (function (){var statearr_21582 = state_21574;
(statearr_21582[(10)] = inst_21565);

(statearr_21582[(7)] = inst_21547);

return statearr_21582;
})();
var statearr_21583_21605 = state_21574__$1;
(statearr_21583_21605[(2)] = null);

(statearr_21583_21605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (6))){
var inst_21568 = cljs.core.async.close_BANG_.call(null,out);
var state_21574__$1 = state_21574;
var statearr_21584_21606 = state_21574__$1;
(statearr_21584_21606[(2)] = inst_21568);

(statearr_21584_21606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (3))){
var inst_21572 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21574__$1,inst_21572);
} else {
if((state_val_21575 === (12))){
var state_21574__$1 = state_21574;
var statearr_21585_21607 = state_21574__$1;
(statearr_21585_21607[(2)] = null);

(statearr_21585_21607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (2))){
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21574__$1,(4),in$);
} else {
if((state_val_21575 === (11))){
var inst_21552 = (state_21574[(9)]);
var inst_21560 = reagi.core.box.call(null,inst_21552);
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21574__$1,(14),out,inst_21560);
} else {
if((state_val_21575 === (9))){
var inst_21552 = (state_21574[(9)]);
var inst_21547 = (state_21574[(7)]);
var inst_21556 = cljs.core.not_EQ_.call(null,inst_21552,inst_21547);
var state_21574__$1 = state_21574;
var statearr_21586_21608 = state_21574__$1;
(statearr_21586_21608[(2)] = inst_21556);

(statearr_21586_21608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (5))){
var inst_21550 = (state_21574[(8)]);
var inst_21553 = (state_21574[(11)]);
var inst_21547 = (state_21574[(7)]);
var inst_21552 = reagi.core.unbox.call(null,inst_21550);
var inst_21553__$1 = reagi.core.no_value_QMARK_.call(null,inst_21547);
var state_21574__$1 = (function (){var statearr_21587 = state_21574;
(statearr_21587[(9)] = inst_21552);

(statearr_21587[(11)] = inst_21553__$1);

return statearr_21587;
})();
if(cljs.core.truth_(inst_21553__$1)){
var statearr_21588_21609 = state_21574__$1;
(statearr_21588_21609[(1)] = (8));

} else {
var statearr_21589_21610 = state_21574__$1;
(statearr_21589_21610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (14))){
var inst_21562 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
var statearr_21590_21611 = state_21574__$1;
(statearr_21590_21611[(2)] = inst_21562);

(statearr_21590_21611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (10))){
var inst_21558 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
if(cljs.core.truth_(inst_21558)){
var statearr_21591_21612 = state_21574__$1;
(statearr_21591_21612[(1)] = (11));

} else {
var statearr_21592_21613 = state_21574__$1;
(statearr_21592_21613[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (8))){
var inst_21553 = (state_21574[(11)]);
var state_21574__$1 = state_21574;
var statearr_21593_21614 = state_21574__$1;
(statearr_21593_21614[(2)] = inst_21553);

(statearr_21593_21614[(1)] = (10));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__9104__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_21597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21597[(0)] = reagi$core$uniq_ch_$_state_machine__9104__auto__);

(statearr_21597[(1)] = (1));

return statearr_21597;
});
var reagi$core$uniq_ch_$_state_machine__9104__auto____1 = (function (state_21574){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21598){if((e21598 instanceof Object)){
var ex__9107__auto__ = e21598;
var statearr_21599_21615 = state_21574;
(statearr_21599_21615[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21616 = state_21574;
state_21574 = G__21616;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__9104__auto__ = function(state_21574){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__9104__auto____1.call(this,state_21574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__9104__auto____0;
reagi$core$uniq_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__9104__auto____1;
return reagi$core$uniq_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_21600 = f__9119__auto__.call(null);
(statearr_21600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21618 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21618,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__21618,((function (G__21618,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21618,ch))
);

reagi.core.depend_on.call(null,G__21618,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21618;
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
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_21686){
var state_val_21687 = (state_21686[(1)]);
if((state_val_21687 === (7))){
var inst_21682 = (state_21686[(2)]);
var state_21686__$1 = state_21686;
var statearr_21688_21709 = state_21686__$1;
(statearr_21688_21709[(2)] = inst_21682);

(statearr_21688_21709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (1))){
var inst_21664 = (0);
var state_21686__$1 = (function (){var statearr_21689 = state_21686;
(statearr_21689[(7)] = inst_21664);

return statearr_21689;
})();
var statearr_21690_21710 = state_21686__$1;
(statearr_21690_21710[(2)] = null);

(statearr_21690_21710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (4))){
var inst_21667 = (state_21686[(8)]);
var inst_21667__$1 = (state_21686[(2)]);
var state_21686__$1 = (function (){var statearr_21691 = state_21686;
(statearr_21691[(8)] = inst_21667__$1);

return statearr_21691;
})();
if(cljs.core.truth_(inst_21667__$1)){
var statearr_21692_21711 = state_21686__$1;
(statearr_21692_21711[(1)] = (5));

} else {
var statearr_21693_21712 = state_21686__$1;
(statearr_21693_21712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (6))){
var inst_21680 = cljs.core.async.close_BANG_.call(null,out);
var state_21686__$1 = state_21686;
var statearr_21694_21713 = state_21686__$1;
(statearr_21694_21713[(2)] = inst_21680);

(statearr_21694_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (3))){
var inst_21684 = (state_21686[(2)]);
var state_21686__$1 = state_21686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21686__$1,inst_21684);
} else {
if((state_val_21687 === (2))){
var state_21686__$1 = state_21686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21686__$1,(4),in$);
} else {
if((state_val_21687 === (11))){
var inst_21674 = (state_21686[(2)]);
var state_21686__$1 = state_21686;
var statearr_21695_21714 = state_21686__$1;
(statearr_21695_21714[(2)] = inst_21674);

(statearr_21695_21714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (9))){
var state_21686__$1 = state_21686;
var statearr_21696_21715 = state_21686__$1;
(statearr_21696_21715[(2)] = null);

(statearr_21696_21715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (5))){
var inst_21664 = (state_21686[(7)]);
var inst_21669 = (state_21686[(9)]);
var inst_21669__$1 = reagi.core.time_ms.call(null);
var inst_21670 = (inst_21669__$1 - inst_21664);
var inst_21671 = (inst_21670 >= timeout_ms);
var state_21686__$1 = (function (){var statearr_21697 = state_21686;
(statearr_21697[(9)] = inst_21669__$1);

return statearr_21697;
})();
if(cljs.core.truth_(inst_21671)){
var statearr_21698_21716 = state_21686__$1;
(statearr_21698_21716[(1)] = (8));

} else {
var statearr_21699_21717 = state_21686__$1;
(statearr_21699_21717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (10))){
var inst_21669 = (state_21686[(9)]);
var inst_21677 = (state_21686[(2)]);
var inst_21664 = inst_21669;
var state_21686__$1 = (function (){var statearr_21700 = state_21686;
(statearr_21700[(7)] = inst_21664);

(statearr_21700[(10)] = inst_21677);

return statearr_21700;
})();
var statearr_21701_21718 = state_21686__$1;
(statearr_21701_21718[(2)] = null);

(statearr_21701_21718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21687 === (8))){
var inst_21667 = (state_21686[(8)]);
var state_21686__$1 = state_21686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21686__$1,(11),out,inst_21667);
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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__9104__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_21705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21705[(0)] = reagi$core$throttle_ch_$_state_machine__9104__auto__);

(statearr_21705[(1)] = (1));

return statearr_21705;
});
var reagi$core$throttle_ch_$_state_machine__9104__auto____1 = (function (state_21686){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21706){if((e21706 instanceof Object)){
var ex__9107__auto__ = e21706;
var statearr_21707_21719 = state_21686;
(statearr_21707_21719[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21720 = state_21686;
state_21686 = G__21720;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__9104__auto__ = function(state_21686){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__9104__auto____1.call(this,state_21686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__9104__auto____0;
reagi$core$throttle_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__9104__auto____1;
return reagi$core$throttle_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_21708 = f__9119__auto__.call(null);
(statearr_21708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__21722 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21722,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__21722,((function (G__21722,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__21722,ch))
);

reagi.core.depend_on.call(null,G__21722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__21722;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_21836){
var state_val_21837 = (state_21836[(1)]);
if((state_val_21837 === (7))){
var inst_21831 = (state_21836[(2)]);
var state_21836__$1 = state_21836;
var statearr_21838_21867 = state_21836__$1;
(statearr_21838_21867[(2)] = inst_21831);

(statearr_21838_21867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (1))){
var state_21836__$1 = state_21836;
var statearr_21839_21868 = state_21836__$1;
(statearr_21839_21868[(2)] = null);

(statearr_21839_21868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (4))){
var inst_21804 = (state_21836[(2)]);
var inst_21805 = cljs.core.nth.call(null,inst_21804,(0),null);
var inst_21806 = cljs.core.nth.call(null,inst_21804,(1),null);
var inst_21807 = cljs.core.not_EQ_.call(null,inst_21806,stop);
var state_21836__$1 = (function (){var statearr_21840 = state_21836;
(statearr_21840[(7)] = inst_21805);

return statearr_21840;
})();
if(inst_21807){
var statearr_21841_21869 = state_21836__$1;
(statearr_21841_21869[(1)] = (5));

} else {
var statearr_21842_21870 = state_21836__$1;
(statearr_21842_21870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (15))){
var state_21836__$1 = state_21836;
var statearr_21843_21871 = state_21836__$1;
(statearr_21843_21871[(2)] = null);

(statearr_21843_21871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (13))){
var inst_21818 = (state_21836[(8)]);
var state_21836__$1 = state_21836;
var statearr_21844_21872 = state_21836__$1;
(statearr_21844_21872[(2)] = inst_21818);

(statearr_21844_21872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (6))){
var state_21836__$1 = state_21836;
var statearr_21845_21873 = state_21836__$1;
(statearr_21845_21873[(2)] = null);

(statearr_21845_21873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (17))){
var inst_21828 = (state_21836[(2)]);
var state_21836__$1 = state_21836;
var statearr_21846_21874 = state_21836__$1;
(statearr_21846_21874[(2)] = inst_21828);

(statearr_21846_21874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (3))){
var inst_21833 = (state_21836[(2)]);
var inst_21834 = cljs.core.async.close_BANG_.call(null,out);
var state_21836__$1 = (function (){var statearr_21847 = state_21836;
(statearr_21847[(9)] = inst_21833);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21836__$1,inst_21834);
} else {
if((state_val_21837 === (12))){
var inst_21820 = reagi.core.complete_QMARK_.call(null,ref);
var state_21836__$1 = state_21836;
var statearr_21848_21875 = state_21836__$1;
(statearr_21848_21875[(2)] = inst_21820);

(statearr_21848_21875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (2))){
var inst_21799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21800 = cljs.core.async.timeout.call(null,interval);
var inst_21801 = [stop,inst_21800];
var inst_21802 = (new cljs.core.PersistentVector(null,2,(5),inst_21799,inst_21801,null));
var state_21836__$1 = state_21836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21836__$1,(4),inst_21802);
} else {
if((state_val_21837 === (11))){
var inst_21815 = (state_21836[(2)]);
var state_21836__$1 = state_21836;
var statearr_21849_21876 = state_21836__$1;
(statearr_21849_21876[(2)] = inst_21815);

(statearr_21849_21876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (9))){
var inst_21809 = (state_21836[(10)]);
var inst_21813 = reagi.core.box.call(null,inst_21809);
var state_21836__$1 = state_21836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21836__$1,(11),out,inst_21813);
} else {
if((state_val_21837 === (5))){
var inst_21809 = (state_21836[(10)]);
var inst_21809__$1 = cljs.core.deref.call(null,ref);
var inst_21810 = (void 0 === inst_21809__$1);
var state_21836__$1 = (function (){var statearr_21850 = state_21836;
(statearr_21850[(10)] = inst_21809__$1);

return statearr_21850;
})();
if(cljs.core.truth_(inst_21810)){
var statearr_21851_21877 = state_21836__$1;
(statearr_21851_21877[(1)] = (8));

} else {
var statearr_21852_21878 = state_21836__$1;
(statearr_21852_21878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (14))){
var inst_21823 = (state_21836[(2)]);
var state_21836__$1 = state_21836;
if(cljs.core.truth_(inst_21823)){
var statearr_21853_21879 = state_21836__$1;
(statearr_21853_21879[(1)] = (15));

} else {
var statearr_21854_21880 = state_21836__$1;
(statearr_21854_21880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (16))){
var state_21836__$1 = state_21836;
var statearr_21855_21881 = state_21836__$1;
(statearr_21855_21881[(2)] = null);

(statearr_21855_21881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (10))){
var inst_21818 = (state_21836[(8)]);
var inst_21817 = (state_21836[(2)]);
var inst_21818__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_21836__$1 = (function (){var statearr_21856 = state_21836;
(statearr_21856[(8)] = inst_21818__$1);

(statearr_21856[(11)] = inst_21817);

return statearr_21856;
})();
if(cljs.core.truth_(inst_21818__$1)){
var statearr_21857_21882 = state_21836__$1;
(statearr_21857_21882[(1)] = (12));

} else {
var statearr_21858_21883 = state_21836__$1;
(statearr_21858_21883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21837 === (8))){
var state_21836__$1 = state_21836;
var statearr_21859_21884 = state_21836__$1;
(statearr_21859_21884[(2)] = null);

(statearr_21859_21884[(1)] = (10));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__9104__auto__ = null;
var reagi$core$run_sampler_$_state_machine__9104__auto____0 = (function (){
var statearr_21863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21863[(0)] = reagi$core$run_sampler_$_state_machine__9104__auto__);

(statearr_21863[(1)] = (1));

return statearr_21863;
});
var reagi$core$run_sampler_$_state_machine__9104__auto____1 = (function (state_21836){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21864){if((e21864 instanceof Object)){
var ex__9107__auto__ = e21864;
var statearr_21865_21885 = state_21836;
(statearr_21865_21885[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21886 = state_21836;
state_21836 = G__21886;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__9104__auto__ = function(state_21836){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__9104__auto____1.call(this,state_21836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__9104__auto____0;
reagi$core$run_sampler_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__9104__auto____1;
return reagi$core$run_sampler_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_21866 = f__9119__auto__.call(null);
(statearr_21866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_21866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__21888 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__21888,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__21888,((function (G__21888,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__21888,stop))
);

return G__21888;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__9118__auto___21921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___21921,stream){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___21921,stream){
return (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (1))){
var inst_21905 = cljs.core.async.timeout.call(null,time_ms);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21911__$1,(2),inst_21905);
} else {
if((state_val_21912 === (2))){
var inst_21907 = (state_21911[(2)]);
var inst_21908 = reagi.core.port.call(null,stream);
var inst_21909 = cljs.core.async.close_BANG_.call(null,inst_21908);
var state_21911__$1 = (function (){var statearr_21913 = state_21911;
(statearr_21913[(7)] = inst_21907);

return statearr_21913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else {
return null;
}
}
});})(c__9118__auto___21921,stream))
;
return ((function (switch__9103__auto__,c__9118__auto___21921,stream){
return (function() {
var reagi$core$wait_$_state_machine__9104__auto__ = null;
var reagi$core$wait_$_state_machine__9104__auto____0 = (function (){
var statearr_21917 = [null,null,null,null,null,null,null,null];
(statearr_21917[(0)] = reagi$core$wait_$_state_machine__9104__auto__);

(statearr_21917[(1)] = (1));

return statearr_21917;
});
var reagi$core$wait_$_state_machine__9104__auto____1 = (function (state_21911){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_21911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e21918){if((e21918 instanceof Object)){
var ex__9107__auto__ = e21918;
var statearr_21919_21922 = state_21911;
(statearr_21919_21922[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21923 = state_21911;
state_21911 = G__21923;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__9104__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__9104__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__9104__auto____0;
reagi$core$wait_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__9104__auto____1;
return reagi$core$wait_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___21921,stream))
})();
var state__9120__auto__ = (function (){var statearr_21920 = f__9119__auto__.call(null);
(statearr_21920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___21921);

return statearr_21920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___21921,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_22110){
var state_val_22111 = (state_22110[(1)]);
if((state_val_22111 === (7))){
var inst_22055 = (state_22110[(7)]);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22110__$1,(9),inst_22055);
} else {
if((state_val_22111 === (20))){
var inst_22082 = (state_22110[(8)]);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22110__$1,(22),inst_22082);
} else {
if((state_val_22111 === (1))){
var inst_22046 = cljs.core.seq.call(null,chs);
var inst_22047 = inst_22046;
var inst_22048 = null;
var inst_22049 = (0);
var inst_22050 = (0);
var state_22110__$1 = (function (){var statearr_22112 = state_22110;
(statearr_22112[(9)] = inst_22050);

(statearr_22112[(10)] = inst_22047);

(statearr_22112[(11)] = inst_22049);

(statearr_22112[(12)] = inst_22048);

return statearr_22112;
})();
var statearr_22113_22160 = state_22110__$1;
(statearr_22113_22160[(2)] = null);

(statearr_22113_22160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (24))){
var state_22110__$1 = state_22110;
var statearr_22114_22161 = state_22110__$1;
(statearr_22114_22161[(2)] = null);

(statearr_22114_22161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (4))){
var inst_22050 = (state_22110[(9)]);
var inst_22048 = (state_22110[(12)]);
var inst_22055 = cljs.core._nth.call(null,inst_22048,inst_22050);
var state_22110__$1 = (function (){var statearr_22115 = state_22110;
(statearr_22115[(7)] = inst_22055);

return statearr_22115;
})();
var statearr_22116_22162 = state_22110__$1;
(statearr_22116_22162[(2)] = null);

(statearr_22116_22162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (15))){
var state_22110__$1 = state_22110;
var statearr_22117_22163 = state_22110__$1;
(statearr_22117_22163[(2)] = null);

(statearr_22117_22163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (21))){
var inst_22073 = (state_22110[(13)]);
var inst_22096 = (state_22110[(2)]);
var inst_22097 = cljs.core.next.call(null,inst_22073);
var inst_22047 = inst_22097;
var inst_22048 = null;
var inst_22049 = (0);
var inst_22050 = (0);
var state_22110__$1 = (function (){var statearr_22118 = state_22110;
(statearr_22118[(14)] = inst_22096);

(statearr_22118[(9)] = inst_22050);

(statearr_22118[(10)] = inst_22047);

(statearr_22118[(11)] = inst_22049);

(statearr_22118[(12)] = inst_22048);

return statearr_22118;
})();
var statearr_22119_22164 = state_22110__$1;
(statearr_22119_22164[(2)] = null);

(statearr_22119_22164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (13))){
var inst_22063 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22120 = state_22110;
(statearr_22120[(15)] = inst_22063);

return statearr_22120;
})();
var statearr_22121_22165 = state_22110__$1;
(statearr_22121_22165[(2)] = null);

(statearr_22121_22165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (22))){
var inst_22085 = (state_22110[(16)]);
var inst_22085__$1 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22122 = state_22110;
(statearr_22122[(16)] = inst_22085__$1);

return statearr_22122;
})();
if(cljs.core.truth_(inst_22085__$1)){
var statearr_22123_22166 = state_22110__$1;
(statearr_22123_22166[(1)] = (23));

} else {
var statearr_22124_22167 = state_22110__$1;
(statearr_22124_22167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (6))){
var inst_22105 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22125_22168 = state_22110__$1;
(statearr_22125_22168[(2)] = inst_22105);

(statearr_22125_22168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (25))){
var inst_22094 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22126_22169 = state_22110__$1;
(statearr_22126_22169[(2)] = inst_22094);

(statearr_22126_22169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (17))){
var inst_22073 = (state_22110[(13)]);
var inst_22077 = cljs.core.chunk_first.call(null,inst_22073);
var inst_22078 = cljs.core.chunk_rest.call(null,inst_22073);
var inst_22079 = cljs.core.count.call(null,inst_22077);
var inst_22047 = inst_22078;
var inst_22048 = inst_22077;
var inst_22049 = inst_22079;
var inst_22050 = (0);
var state_22110__$1 = (function (){var statearr_22127 = state_22110;
(statearr_22127[(9)] = inst_22050);

(statearr_22127[(10)] = inst_22047);

(statearr_22127[(11)] = inst_22049);

(statearr_22127[(12)] = inst_22048);

return statearr_22127;
})();
var statearr_22128_22170 = state_22110__$1;
(statearr_22128_22170[(2)] = null);

(statearr_22128_22170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (3))){
var inst_22107 = (state_22110[(2)]);
var inst_22108 = cljs.core.async.close_BANG_.call(null,out);
var state_22110__$1 = (function (){var statearr_22129 = state_22110;
(statearr_22129[(17)] = inst_22107);

return statearr_22129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22110__$1,inst_22108);
} else {
if((state_val_22111 === (12))){
var inst_22067 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22130_22171 = state_22110__$1;
(statearr_22130_22171[(2)] = inst_22067);

(statearr_22130_22171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (2))){
var inst_22050 = (state_22110[(9)]);
var inst_22049 = (state_22110[(11)]);
var inst_22052 = (inst_22050 < inst_22049);
var inst_22053 = inst_22052;
var state_22110__$1 = state_22110;
if(cljs.core.truth_(inst_22053)){
var statearr_22131_22172 = state_22110__$1;
(statearr_22131_22172[(1)] = (4));

} else {
var statearr_22132_22173 = state_22110__$1;
(statearr_22132_22173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (23))){
var inst_22085 = (state_22110[(16)]);
var inst_22087 = reagi.core.unbox.call(null,inst_22085);
var inst_22088 = reagi.core.box.call(null,inst_22087);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22110__$1,(26),out,inst_22088);
} else {
if((state_val_22111 === (19))){
var inst_22100 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22133_22174 = state_22110__$1;
(statearr_22133_22174[(2)] = inst_22100);

(statearr_22133_22174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (11))){
var state_22110__$1 = state_22110;
var statearr_22134_22175 = state_22110__$1;
(statearr_22134_22175[(2)] = null);

(statearr_22134_22175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (9))){
var inst_22058 = (state_22110[(18)]);
var inst_22058__$1 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22135 = state_22110;
(statearr_22135[(18)] = inst_22058__$1);

return statearr_22135;
})();
if(cljs.core.truth_(inst_22058__$1)){
var statearr_22136_22176 = state_22110__$1;
(statearr_22136_22176[(1)] = (10));

} else {
var statearr_22137_22177 = state_22110__$1;
(statearr_22137_22177[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (5))){
var inst_22073 = (state_22110[(13)]);
var inst_22047 = (state_22110[(10)]);
var inst_22073__$1 = cljs.core.seq.call(null,inst_22047);
var state_22110__$1 = (function (){var statearr_22138 = state_22110;
(statearr_22138[(13)] = inst_22073__$1);

return statearr_22138;
})();
if(inst_22073__$1){
var statearr_22139_22178 = state_22110__$1;
(statearr_22139_22178[(1)] = (14));

} else {
var statearr_22140_22179 = state_22110__$1;
(statearr_22140_22179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (14))){
var inst_22073 = (state_22110[(13)]);
var inst_22075 = cljs.core.chunked_seq_QMARK_.call(null,inst_22073);
var state_22110__$1 = state_22110;
if(inst_22075){
var statearr_22141_22180 = state_22110__$1;
(statearr_22141_22180[(1)] = (17));

} else {
var statearr_22142_22181 = state_22110__$1;
(statearr_22142_22181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (26))){
var inst_22090 = (state_22110[(2)]);
var state_22110__$1 = (function (){var statearr_22143 = state_22110;
(statearr_22143[(19)] = inst_22090);

return statearr_22143;
})();
var statearr_22144_22182 = state_22110__$1;
(statearr_22144_22182[(2)] = null);

(statearr_22144_22182[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (16))){
var inst_22103 = (state_22110[(2)]);
var state_22110__$1 = state_22110;
var statearr_22145_22183 = state_22110__$1;
(statearr_22145_22183[(2)] = inst_22103);

(statearr_22145_22183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (10))){
var inst_22058 = (state_22110[(18)]);
var inst_22060 = reagi.core.unbox.call(null,inst_22058);
var inst_22061 = reagi.core.box.call(null,inst_22060);
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22110__$1,(13),out,inst_22061);
} else {
if((state_val_22111 === (18))){
var inst_22073 = (state_22110[(13)]);
var inst_22082 = cljs.core.first.call(null,inst_22073);
var state_22110__$1 = (function (){var statearr_22149 = state_22110;
(statearr_22149[(8)] = inst_22082);

return statearr_22149;
})();
var statearr_22150_22184 = state_22110__$1;
(statearr_22150_22184[(2)] = null);

(statearr_22150_22184[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22111 === (8))){
var inst_22050 = (state_22110[(9)]);
var inst_22047 = (state_22110[(10)]);
var inst_22049 = (state_22110[(11)]);
var inst_22048 = (state_22110[(12)]);
var inst_22069 = (state_22110[(2)]);
var inst_22070 = (inst_22050 + (1));
var tmp22146 = inst_22047;
var tmp22147 = inst_22049;
var tmp22148 = inst_22048;
var inst_22047__$1 = tmp22146;
var inst_22048__$1 = tmp22148;
var inst_22049__$1 = tmp22147;
var inst_22050__$1 = inst_22070;
var state_22110__$1 = (function (){var statearr_22151 = state_22110;
(statearr_22151[(9)] = inst_22050__$1);

(statearr_22151[(10)] = inst_22047__$1);

(statearr_22151[(11)] = inst_22049__$1);

(statearr_22151[(20)] = inst_22069);

(statearr_22151[(12)] = inst_22048__$1);

return statearr_22151;
})();
var statearr_22152_22185 = state_22110__$1;
(statearr_22152_22185[(2)] = null);

(statearr_22152_22185[(1)] = (2));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__9104__auto__ = null;
var reagi$core$join_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_22156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22156[(0)] = reagi$core$join_ch_$_state_machine__9104__auto__);

(statearr_22156[(1)] = (1));

return statearr_22156;
});
var reagi$core$join_ch_$_state_machine__9104__auto____1 = (function (state_22110){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_22110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e22157){if((e22157 instanceof Object)){
var ex__9107__auto__ = e22157;
var statearr_22158_22186 = state_22110;
(statearr_22158_22186[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22187 = state_22110;
state_22110 = G__22187;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__9104__auto__ = function(state_22110){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__9104__auto____1.call(this,state_22110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__9104__auto____0;
reagi$core$join_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__9104__auto____1;
return reagi$core$join_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_22159 = f__9119__auto__.call(null);
(statearr_22159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_22159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__7658__auto__ = [];
var len__7651__auto___22190 = arguments.length;
var i__7652__auto___22191 = (0);
while(true){
if((i__7652__auto___22191 < len__7651__auto___22190)){
args__7658__auto__.push((arguments[i__7652__auto___22191]));

var G__22192 = (i__7652__auto___22191 + (1));
i__7652__auto___22191 = G__22192;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__22189 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__22189,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__22189,((function (G__22189,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__22189,chs))
);

reagi.core.depend_on.call(null,G__22189,streams);

return G__22189;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq22188){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22188));
});

reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_22333){
var state_val_22334 = (state_22333[(1)]);
if((state_val_22334 === (7))){
var inst_22297 = (state_22333[(7)]);
var inst_22295 = (state_22333[(2)]);
var inst_22296 = cljs.core.nth.call(null,inst_22295,(0),null);
var inst_22297__$1 = cljs.core.nth.call(null,inst_22295,(1),null);
var inst_22298 = (inst_22297__$1 === valve);
var state_22333__$1 = (function (){var statearr_22335 = state_22333;
(statearr_22335[(7)] = inst_22297__$1);

(statearr_22335[(8)] = inst_22296);

return statearr_22335;
})();
if(cljs.core.truth_(inst_22298)){
var statearr_22336_22367 = state_22333__$1;
(statearr_22336_22367[(1)] = (8));

} else {
var statearr_22337_22368 = state_22333__$1;
(statearr_22337_22368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (1))){
var inst_22280 = [in$];
var inst_22281 = [null];
var inst_22282 = cljs.core.PersistentHashMap.fromArrays(inst_22280,inst_22281);
var inst_22283 = inst_22282;
var state_22333__$1 = (function (){var statearr_22338 = state_22333;
(statearr_22338[(9)] = inst_22283);

return statearr_22338;
})();
var statearr_22339_22369 = state_22333__$1;
(statearr_22339_22369[(2)] = null);

(statearr_22339_22369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (4))){
var inst_22283 = (state_22333[(9)]);
var inst_22291 = cljs.core.keys.call(null,inst_22283);
var inst_22292 = cljs.core.vec.call(null,inst_22291);
var inst_22293 = cljs.core.conj.call(null,inst_22292,valve);
var state_22333__$1 = state_22333;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22333__$1,(7),inst_22293);
} else {
if((state_val_22334 === (15))){
var inst_22296 = (state_22333[(8)]);
var inst_22312 = reagi.core.unbox.call(null,inst_22296);
var inst_22313 = reagi.core.box.call(null,inst_22312);
var state_22333__$1 = state_22333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22333__$1,(17),out,inst_22313);
} else {
if((state_val_22334 === (13))){
var inst_22323 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
var statearr_22341_22370 = state_22333__$1;
(statearr_22341_22370[(2)] = inst_22323);

(statearr_22341_22370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (6))){
var inst_22328 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
var statearr_22342_22371 = state_22333__$1;
(statearr_22342_22371[(2)] = inst_22328);

(statearr_22342_22371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (17))){
var inst_22283 = (state_22333[(9)]);
var inst_22315 = (state_22333[(2)]);
var tmp22340 = inst_22283;
var inst_22283__$1 = tmp22340;
var state_22333__$1 = (function (){var statearr_22343 = state_22333;
(statearr_22343[(9)] = inst_22283__$1);

(statearr_22343[(10)] = inst_22315);

return statearr_22343;
})();
var statearr_22344_22372 = state_22333__$1;
(statearr_22344_22372[(2)] = null);

(statearr_22344_22372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (3))){
var inst_22330 = (state_22333[(2)]);
var inst_22331 = cljs.core.async.close_BANG_.call(null,out);
var state_22333__$1 = (function (){var statearr_22345 = state_22333;
(statearr_22345[(11)] = inst_22330);

return statearr_22345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22333__$1,inst_22331);
} else {
if((state_val_22334 === (12))){
var inst_22283 = (state_22333[(9)]);
var inst_22297 = (state_22333[(7)]);
var inst_22320 = cljs.core.dissoc.call(null,inst_22283,inst_22297);
var inst_22283__$1 = inst_22320;
var state_22333__$1 = (function (){var statearr_22346 = state_22333;
(statearr_22346[(9)] = inst_22283__$1);

return statearr_22346;
})();
var statearr_22347_22373 = state_22333__$1;
(statearr_22347_22373[(2)] = null);

(statearr_22347_22373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (2))){
var inst_22283 = (state_22333[(9)]);
var inst_22285 = cljs.core.empty_QMARK_.call(null,inst_22283);
var inst_22286 = !(inst_22285);
var state_22333__$1 = state_22333;
if(inst_22286){
var statearr_22348_22374 = state_22333__$1;
(statearr_22348_22374[(1)] = (4));

} else {
var statearr_22349_22375 = state_22333__$1;
(statearr_22349_22375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (11))){
var inst_22297 = (state_22333[(7)]);
var inst_22304 = (inst_22297 === in$);
var state_22333__$1 = state_22333;
if(cljs.core.truth_(inst_22304)){
var statearr_22350_22376 = state_22333__$1;
(statearr_22350_22376[(1)] = (14));

} else {
var statearr_22351_22377 = state_22333__$1;
(statearr_22351_22377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (9))){
var inst_22296 = (state_22333[(8)]);
var state_22333__$1 = state_22333;
if(cljs.core.truth_(inst_22296)){
var statearr_22352_22378 = state_22333__$1;
(statearr_22352_22378[(1)] = (11));

} else {
var statearr_22353_22379 = state_22333__$1;
(statearr_22353_22379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (5))){
var state_22333__$1 = state_22333;
var statearr_22354_22380 = state_22333__$1;
(statearr_22354_22380[(2)] = null);

(statearr_22354_22380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (14))){
var inst_22283 = (state_22333[(9)]);
var inst_22296 = (state_22333[(8)]);
var inst_22306 = reagi.core.unbox.call(null,inst_22296);
var inst_22307 = cljs.core.async.chan.call(null);
var inst_22308 = reagi.core.listen.call(null,inst_22306,inst_22307);
var inst_22309 = cljs.core.assoc.call(null,inst_22283,inst_22308,inst_22306);
var inst_22283__$1 = inst_22309;
var state_22333__$1 = (function (){var statearr_22355 = state_22333;
(statearr_22355[(9)] = inst_22283__$1);

return statearr_22355;
})();
var statearr_22356_22381 = state_22333__$1;
(statearr_22356_22381[(2)] = null);

(statearr_22356_22381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (16))){
var inst_22318 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
var statearr_22357_22382 = state_22333__$1;
(statearr_22357_22382[(2)] = inst_22318);

(statearr_22357_22382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (10))){
var inst_22325 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
var statearr_22358_22383 = state_22333__$1;
(statearr_22358_22383[(2)] = inst_22325);

(statearr_22358_22383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (8))){
var inst_22283 = (state_22333[(9)]);
var inst_22300 = cljs.core.keys.call(null,inst_22283);
var inst_22301 = reagi.core.close_all_BANG_.call(null,inst_22300);
var state_22333__$1 = state_22333;
var statearr_22359_22384 = state_22333__$1;
(statearr_22359_22384[(2)] = inst_22301);

(statearr_22359_22384[(1)] = (10));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__9104__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__9104__auto____0 = (function (){
var statearr_22363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22363[(0)] = reagi$core$flatten_ch_$_state_machine__9104__auto__);

(statearr_22363[(1)] = (1));

return statearr_22363;
});
var reagi$core$flatten_ch_$_state_machine__9104__auto____1 = (function (state_22333){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_22333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e22364){if((e22364 instanceof Object)){
var ex__9107__auto__ = e22364;
var statearr_22365_22385 = state_22333;
(statearr_22365_22385[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22386 = state_22333;
state_22333 = G__22386;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__9104__auto__ = function(state_22333){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__9104__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__9104__auto____1.call(this,state_22333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__9104__auto____0;
reagi$core$flatten_ch_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__9104__auto____1;
return reagi$core$flatten_ch_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_22366 = f__9119__auto__.call(null);
(statearr_22366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_22366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__22388 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__22388,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__22388,((function (G__22388,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__22388,ch,valve))
);

reagi.core.depend_on.call(null,G__22388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__22388;
});

//# sourceMappingURL=core.js.map?rel=1478625878351