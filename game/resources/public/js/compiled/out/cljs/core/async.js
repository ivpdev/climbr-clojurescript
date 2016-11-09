// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9309 = [];
var len__7651__auto___9315 = arguments.length;
var i__7652__auto___9316 = (0);
while(true){
if((i__7652__auto___9316 < len__7651__auto___9315)){
args9309.push((arguments[i__7652__auto___9316]));

var G__9317 = (i__7652__auto___9316 + (1));
i__7652__auto___9316 = G__9317;
continue;
} else {
}
break;
}

var G__9311 = args9309.length;
switch (G__9311) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9309.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9312 = (function (f,blockable,meta9313){
this.f = f;
this.blockable = blockable;
this.meta9313 = meta9313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9314,meta9313__$1){
var self__ = this;
var _9314__$1 = this;
return (new cljs.core.async.t_cljs$core$async9312(self__.f,self__.blockable,meta9313__$1));
});

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9314){
var self__ = this;
var _9314__$1 = this;
return self__.meta9313;
});

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9313","meta9313",1127723478,null)], null);
});

cljs.core.async.t_cljs$core$async9312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9312";

cljs.core.async.t_cljs$core$async9312.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async9312");
});

cljs.core.async.__GT_t_cljs$core$async9312 = (function cljs$core$async$__GT_t_cljs$core$async9312(f__$1,blockable__$1,meta9313){
return (new cljs.core.async.t_cljs$core$async9312(f__$1,blockable__$1,meta9313));
});

}

return (new cljs.core.async.t_cljs$core$async9312(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9321 = [];
var len__7651__auto___9324 = arguments.length;
var i__7652__auto___9325 = (0);
while(true){
if((i__7652__auto___9325 < len__7651__auto___9324)){
args9321.push((arguments[i__7652__auto___9325]));

var G__9326 = (i__7652__auto___9325 + (1));
i__7652__auto___9325 = G__9326;
continue;
} else {
}
break;
}

var G__9323 = args9321.length;
switch (G__9323) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9321.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9328 = [];
var len__7651__auto___9331 = arguments.length;
var i__7652__auto___9332 = (0);
while(true){
if((i__7652__auto___9332 < len__7651__auto___9331)){
args9328.push((arguments[i__7652__auto___9332]));

var G__9333 = (i__7652__auto___9332 + (1));
i__7652__auto___9332 = G__9333;
continue;
} else {
}
break;
}

var G__9330 = args9328.length;
switch (G__9330) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9328.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9335 = [];
var len__7651__auto___9338 = arguments.length;
var i__7652__auto___9339 = (0);
while(true){
if((i__7652__auto___9339 < len__7651__auto___9338)){
args9335.push((arguments[i__7652__auto___9339]));

var G__9340 = (i__7652__auto___9339 + (1));
i__7652__auto___9339 = G__9340;
continue;
} else {
}
break;
}

var G__9337 = args9335.length;
switch (G__9337) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9335.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9342 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9342);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9342,ret){
return (function (){
return fn1.call(null,val_9342);
});})(val_9342,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9343 = [];
var len__7651__auto___9346 = arguments.length;
var i__7652__auto___9347 = (0);
while(true){
if((i__7652__auto___9347 < len__7651__auto___9346)){
args9343.push((arguments[i__7652__auto___9347]));

var G__9348 = (i__7652__auto___9347 + (1));
i__7652__auto___9347 = G__9348;
continue;
} else {
}
break;
}

var G__9345 = args9343.length;
switch (G__9345) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9343.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7461__auto___9350 = n;
var x_9351 = (0);
while(true){
if((x_9351 < n__7461__auto___9350)){
(a[x_9351] = (0));

var G__9352 = (x_9351 + (1));
x_9351 = G__9352;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9353 = (i + (1));
i = G__9353;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9357 = (function (flag,meta9358){
this.flag = flag;
this.meta9358 = meta9358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9359,meta9358__$1){
var self__ = this;
var _9359__$1 = this;
return (new cljs.core.async.t_cljs$core$async9357(self__.flag,meta9358__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9359){
var self__ = this;
var _9359__$1 = this;
return self__.meta9358;
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9358","meta9358",-865286234,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9357";

cljs.core.async.t_cljs$core$async9357.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async9357");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9357 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9357(flag__$1,meta9358){
return (new cljs.core.async.t_cljs$core$async9357(flag__$1,meta9358));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9357(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9363 = (function (flag,cb,meta9364){
this.flag = flag;
this.cb = cb;
this.meta9364 = meta9364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9365,meta9364__$1){
var self__ = this;
var _9365__$1 = this;
return (new cljs.core.async.t_cljs$core$async9363(self__.flag,self__.cb,meta9364__$1));
});

cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9365){
var self__ = this;
var _9365__$1 = this;
return self__.meta9364;
});

cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9364","meta9364",-1821437047,null)], null);
});

cljs.core.async.t_cljs$core$async9363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9363";

cljs.core.async.t_cljs$core$async9363.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async9363");
});

cljs.core.async.__GT_t_cljs$core$async9363 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9363(flag__$1,cb__$1,meta9364){
return (new cljs.core.async.t_cljs$core$async9363(flag__$1,cb__$1,meta9364));
});

}

return (new cljs.core.async.t_cljs$core$async9363(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9366_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9366_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9367_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9367_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6543__auto__ = wport;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9368 = (i + (1));
i = G__9368;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6543__auto__ = ret;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6531__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___9374 = arguments.length;
var i__7652__auto___9375 = (0);
while(true){
if((i__7652__auto___9375 < len__7651__auto___9374)){
args__7658__auto__.push((arguments[i__7652__auto___9375]));

var G__9376 = (i__7652__auto___9375 + (1));
i__7652__auto___9375 = G__9376;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9371){
var map__9372 = p__9371;
var map__9372__$1 = ((((!((map__9372 == null)))?((((map__9372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9372):map__9372);
var opts = map__9372__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9369){
var G__9370 = cljs.core.first.call(null,seq9369);
var seq9369__$1 = cljs.core.next.call(null,seq9369);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9370,seq9369__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9377 = [];
var len__7651__auto___9427 = arguments.length;
var i__7652__auto___9428 = (0);
while(true){
if((i__7652__auto___9428 < len__7651__auto___9427)){
args9377.push((arguments[i__7652__auto___9428]));

var G__9429 = (i__7652__auto___9428 + (1));
i__7652__auto___9428 = G__9429;
continue;
} else {
}
break;
}

var G__9379 = args9377.length;
switch (G__9379) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9377.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9118__auto___9431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___9431){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___9431){
return (function (state_9403){
var state_val_9404 = (state_9403[(1)]);
if((state_val_9404 === (7))){
var inst_9399 = (state_9403[(2)]);
var state_9403__$1 = state_9403;
var statearr_9405_9432 = state_9403__$1;
(statearr_9405_9432[(2)] = inst_9399);

(statearr_9405_9432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (1))){
var state_9403__$1 = state_9403;
var statearr_9406_9433 = state_9403__$1;
(statearr_9406_9433[(2)] = null);

(statearr_9406_9433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (4))){
var inst_9382 = (state_9403[(7)]);
var inst_9382__$1 = (state_9403[(2)]);
var inst_9383 = (inst_9382__$1 == null);
var state_9403__$1 = (function (){var statearr_9407 = state_9403;
(statearr_9407[(7)] = inst_9382__$1);

return statearr_9407;
})();
if(cljs.core.truth_(inst_9383)){
var statearr_9408_9434 = state_9403__$1;
(statearr_9408_9434[(1)] = (5));

} else {
var statearr_9409_9435 = state_9403__$1;
(statearr_9409_9435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (13))){
var state_9403__$1 = state_9403;
var statearr_9410_9436 = state_9403__$1;
(statearr_9410_9436[(2)] = null);

(statearr_9410_9436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (6))){
var inst_9382 = (state_9403[(7)]);
var state_9403__$1 = state_9403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9403__$1,(11),to,inst_9382);
} else {
if((state_val_9404 === (3))){
var inst_9401 = (state_9403[(2)]);
var state_9403__$1 = state_9403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9403__$1,inst_9401);
} else {
if((state_val_9404 === (12))){
var state_9403__$1 = state_9403;
var statearr_9411_9437 = state_9403__$1;
(statearr_9411_9437[(2)] = null);

(statearr_9411_9437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (2))){
var state_9403__$1 = state_9403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9403__$1,(4),from);
} else {
if((state_val_9404 === (11))){
var inst_9392 = (state_9403[(2)]);
var state_9403__$1 = state_9403;
if(cljs.core.truth_(inst_9392)){
var statearr_9412_9438 = state_9403__$1;
(statearr_9412_9438[(1)] = (12));

} else {
var statearr_9413_9439 = state_9403__$1;
(statearr_9413_9439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (9))){
var state_9403__$1 = state_9403;
var statearr_9414_9440 = state_9403__$1;
(statearr_9414_9440[(2)] = null);

(statearr_9414_9440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (5))){
var state_9403__$1 = state_9403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9415_9441 = state_9403__$1;
(statearr_9415_9441[(1)] = (8));

} else {
var statearr_9416_9442 = state_9403__$1;
(statearr_9416_9442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (14))){
var inst_9397 = (state_9403[(2)]);
var state_9403__$1 = state_9403;
var statearr_9417_9443 = state_9403__$1;
(statearr_9417_9443[(2)] = inst_9397);

(statearr_9417_9443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (10))){
var inst_9389 = (state_9403[(2)]);
var state_9403__$1 = state_9403;
var statearr_9418_9444 = state_9403__$1;
(statearr_9418_9444[(2)] = inst_9389);

(statearr_9418_9444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9404 === (8))){
var inst_9386 = cljs.core.async.close_BANG_.call(null,to);
var state_9403__$1 = state_9403;
var statearr_9419_9445 = state_9403__$1;
(statearr_9419_9445[(2)] = inst_9386);

(statearr_9419_9445[(1)] = (10));


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
});})(c__9118__auto___9431))
;
return ((function (switch__9103__auto__,c__9118__auto___9431){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_9423 = [null,null,null,null,null,null,null,null];
(statearr_9423[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_9423[(1)] = (1));

return statearr_9423;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_9403){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object)){
var ex__9107__auto__ = e9424;
var statearr_9425_9446 = state_9403;
(statearr_9425_9446[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9447 = state_9403;
state_9403 = G__9447;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_9403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_9403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___9431))
})();
var state__9120__auto__ = (function (){var statearr_9426 = f__9119__auto__.call(null);
(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9431);

return statearr_9426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___9431))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9635){
var vec__9636 = p__9635;
var v = cljs.core.nth.call(null,vec__9636,(0),null);
var p = cljs.core.nth.call(null,vec__9636,(1),null);
var job = vec__9636;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9118__auto___9822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results){
return (function (state_9643){
var state_val_9644 = (state_9643[(1)]);
if((state_val_9644 === (1))){
var state_9643__$1 = state_9643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9643__$1,(2),res,v);
} else {
if((state_val_9644 === (2))){
var inst_9640 = (state_9643[(2)]);
var inst_9641 = cljs.core.async.close_BANG_.call(null,res);
var state_9643__$1 = (function (){var statearr_9645 = state_9643;
(statearr_9645[(7)] = inst_9640);

return statearr_9645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9643__$1,inst_9641);
} else {
return null;
}
}
});})(c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results))
;
return ((function (switch__9103__auto__,c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_9649 = [null,null,null,null,null,null,null,null];
(statearr_9649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__);

(statearr_9649[(1)] = (1));

return statearr_9649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1 = (function (state_9643){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9650){if((e9650 instanceof Object)){
var ex__9107__auto__ = e9650;
var statearr_9651_9823 = state_9643;
(statearr_9651_9823[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9824 = state_9643;
state_9643 = G__9824;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = function(state_9643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1.call(this,state_9643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results))
})();
var state__9120__auto__ = (function (){var statearr_9652 = f__9119__auto__.call(null);
(statearr_9652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9822);

return statearr_9652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___9822,res,vec__9636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9653){
var vec__9654 = p__9653;
var v = cljs.core.nth.call(null,vec__9654,(0),null);
var p = cljs.core.nth.call(null,vec__9654,(1),null);
var job = vec__9654;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7461__auto___9825 = n;
var __9826 = (0);
while(true){
if((__9826 < n__7461__auto___9825)){
var G__9657_9827 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9657_9827) {
case "compute":
var c__9118__auto___9829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9826,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (__9826,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function (state_9670){
var state_val_9671 = (state_9670[(1)]);
if((state_val_9671 === (1))){
var state_9670__$1 = state_9670;
var statearr_9672_9830 = state_9670__$1;
(statearr_9672_9830[(2)] = null);

(statearr_9672_9830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9671 === (2))){
var state_9670__$1 = state_9670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9670__$1,(4),jobs);
} else {
if((state_val_9671 === (3))){
var inst_9668 = (state_9670[(2)]);
var state_9670__$1 = state_9670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9670__$1,inst_9668);
} else {
if((state_val_9671 === (4))){
var inst_9660 = (state_9670[(2)]);
var inst_9661 = process.call(null,inst_9660);
var state_9670__$1 = state_9670;
if(cljs.core.truth_(inst_9661)){
var statearr_9673_9831 = state_9670__$1;
(statearr_9673_9831[(1)] = (5));

} else {
var statearr_9674_9832 = state_9670__$1;
(statearr_9674_9832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9671 === (5))){
var state_9670__$1 = state_9670;
var statearr_9675_9833 = state_9670__$1;
(statearr_9675_9833[(2)] = null);

(statearr_9675_9833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9671 === (6))){
var state_9670__$1 = state_9670;
var statearr_9676_9834 = state_9670__$1;
(statearr_9676_9834[(2)] = null);

(statearr_9676_9834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9671 === (7))){
var inst_9666 = (state_9670[(2)]);
var state_9670__$1 = state_9670;
var statearr_9677_9835 = state_9670__$1;
(statearr_9677_9835[(2)] = inst_9666);

(statearr_9677_9835[(1)] = (3));


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
});})(__9826,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
;
return ((function (__9826,switch__9103__auto__,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_9681 = [null,null,null,null,null,null,null];
(statearr_9681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__);

(statearr_9681[(1)] = (1));

return statearr_9681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1 = (function (state_9670){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9682){if((e9682 instanceof Object)){
var ex__9107__auto__ = e9682;
var statearr_9683_9836 = state_9670;
(statearr_9683_9836[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9837 = state_9670;
state_9670 = G__9837;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = function(state_9670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1.call(this,state_9670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__;
})()
;})(__9826,switch__9103__auto__,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
})();
var state__9120__auto__ = (function (){var statearr_9684 = f__9119__auto__.call(null);
(statearr_9684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9829);

return statearr_9684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(__9826,c__9118__auto___9829,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
);


break;
case "async":
var c__9118__auto___9838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9826,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (__9826,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function (state_9697){
var state_val_9698 = (state_9697[(1)]);
if((state_val_9698 === (1))){
var state_9697__$1 = state_9697;
var statearr_9699_9839 = state_9697__$1;
(statearr_9699_9839[(2)] = null);

(statearr_9699_9839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9698 === (2))){
var state_9697__$1 = state_9697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9697__$1,(4),jobs);
} else {
if((state_val_9698 === (3))){
var inst_9695 = (state_9697[(2)]);
var state_9697__$1 = state_9697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9697__$1,inst_9695);
} else {
if((state_val_9698 === (4))){
var inst_9687 = (state_9697[(2)]);
var inst_9688 = async.call(null,inst_9687);
var state_9697__$1 = state_9697;
if(cljs.core.truth_(inst_9688)){
var statearr_9700_9840 = state_9697__$1;
(statearr_9700_9840[(1)] = (5));

} else {
var statearr_9701_9841 = state_9697__$1;
(statearr_9701_9841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9698 === (5))){
var state_9697__$1 = state_9697;
var statearr_9702_9842 = state_9697__$1;
(statearr_9702_9842[(2)] = null);

(statearr_9702_9842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9698 === (6))){
var state_9697__$1 = state_9697;
var statearr_9703_9843 = state_9697__$1;
(statearr_9703_9843[(2)] = null);

(statearr_9703_9843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9698 === (7))){
var inst_9693 = (state_9697[(2)]);
var state_9697__$1 = state_9697;
var statearr_9704_9844 = state_9697__$1;
(statearr_9704_9844[(2)] = inst_9693);

(statearr_9704_9844[(1)] = (3));


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
});})(__9826,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
;
return ((function (__9826,switch__9103__auto__,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_9708 = [null,null,null,null,null,null,null];
(statearr_9708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__);

(statearr_9708[(1)] = (1));

return statearr_9708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1 = (function (state_9697){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9709){if((e9709 instanceof Object)){
var ex__9107__auto__ = e9709;
var statearr_9710_9845 = state_9697;
(statearr_9710_9845[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9846 = state_9697;
state_9697 = G__9846;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = function(state_9697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1.call(this,state_9697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__;
})()
;})(__9826,switch__9103__auto__,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
})();
var state__9120__auto__ = (function (){var statearr_9711 = f__9119__auto__.call(null);
(statearr_9711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9838);

return statearr_9711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(__9826,c__9118__auto___9838,G__9657_9827,n__7461__auto___9825,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9847 = (__9826 + (1));
__9826 = G__9847;
continue;
} else {
}
break;
}

var c__9118__auto___9848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___9848,jobs,results,process,async){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___9848,jobs,results,process,async){
return (function (state_9733){
var state_val_9734 = (state_9733[(1)]);
if((state_val_9734 === (1))){
var state_9733__$1 = state_9733;
var statearr_9735_9849 = state_9733__$1;
(statearr_9735_9849[(2)] = null);

(statearr_9735_9849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9734 === (2))){
var state_9733__$1 = state_9733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9733__$1,(4),from);
} else {
if((state_val_9734 === (3))){
var inst_9731 = (state_9733[(2)]);
var state_9733__$1 = state_9733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9733__$1,inst_9731);
} else {
if((state_val_9734 === (4))){
var inst_9714 = (state_9733[(7)]);
var inst_9714__$1 = (state_9733[(2)]);
var inst_9715 = (inst_9714__$1 == null);
var state_9733__$1 = (function (){var statearr_9736 = state_9733;
(statearr_9736[(7)] = inst_9714__$1);

return statearr_9736;
})();
if(cljs.core.truth_(inst_9715)){
var statearr_9737_9850 = state_9733__$1;
(statearr_9737_9850[(1)] = (5));

} else {
var statearr_9738_9851 = state_9733__$1;
(statearr_9738_9851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9734 === (5))){
var inst_9717 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9733__$1 = state_9733;
var statearr_9739_9852 = state_9733__$1;
(statearr_9739_9852[(2)] = inst_9717);

(statearr_9739_9852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9734 === (6))){
var inst_9714 = (state_9733[(7)]);
var inst_9719 = (state_9733[(8)]);
var inst_9719__$1 = cljs.core.async.chan.call(null,(1));
var inst_9720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9721 = [inst_9714,inst_9719__$1];
var inst_9722 = (new cljs.core.PersistentVector(null,2,(5),inst_9720,inst_9721,null));
var state_9733__$1 = (function (){var statearr_9740 = state_9733;
(statearr_9740[(8)] = inst_9719__$1);

return statearr_9740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9733__$1,(8),jobs,inst_9722);
} else {
if((state_val_9734 === (7))){
var inst_9729 = (state_9733[(2)]);
var state_9733__$1 = state_9733;
var statearr_9741_9853 = state_9733__$1;
(statearr_9741_9853[(2)] = inst_9729);

(statearr_9741_9853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9734 === (8))){
var inst_9719 = (state_9733[(8)]);
var inst_9724 = (state_9733[(2)]);
var state_9733__$1 = (function (){var statearr_9742 = state_9733;
(statearr_9742[(9)] = inst_9724);

return statearr_9742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9733__$1,(9),results,inst_9719);
} else {
if((state_val_9734 === (9))){
var inst_9726 = (state_9733[(2)]);
var state_9733__$1 = (function (){var statearr_9743 = state_9733;
(statearr_9743[(10)] = inst_9726);

return statearr_9743;
})();
var statearr_9744_9854 = state_9733__$1;
(statearr_9744_9854[(2)] = null);

(statearr_9744_9854[(1)] = (2));


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
});})(c__9118__auto___9848,jobs,results,process,async))
;
return ((function (switch__9103__auto__,c__9118__auto___9848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_9748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__);

(statearr_9748[(1)] = (1));

return statearr_9748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1 = (function (state_9733){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9749){if((e9749 instanceof Object)){
var ex__9107__auto__ = e9749;
var statearr_9750_9855 = state_9733;
(statearr_9750_9855[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9856 = state_9733;
state_9733 = G__9856;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = function(state_9733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1.call(this,state_9733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___9848,jobs,results,process,async))
})();
var state__9120__auto__ = (function (){var statearr_9751 = f__9119__auto__.call(null);
(statearr_9751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9848);

return statearr_9751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___9848,jobs,results,process,async))
);


var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__,jobs,results,process,async){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__,jobs,results,process,async){
return (function (state_9789){
var state_val_9790 = (state_9789[(1)]);
if((state_val_9790 === (7))){
var inst_9785 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
var statearr_9791_9857 = state_9789__$1;
(statearr_9791_9857[(2)] = inst_9785);

(statearr_9791_9857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (20))){
var state_9789__$1 = state_9789;
var statearr_9792_9858 = state_9789__$1;
(statearr_9792_9858[(2)] = null);

(statearr_9792_9858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (1))){
var state_9789__$1 = state_9789;
var statearr_9793_9859 = state_9789__$1;
(statearr_9793_9859[(2)] = null);

(statearr_9793_9859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (4))){
var inst_9754 = (state_9789[(7)]);
var inst_9754__$1 = (state_9789[(2)]);
var inst_9755 = (inst_9754__$1 == null);
var state_9789__$1 = (function (){var statearr_9794 = state_9789;
(statearr_9794[(7)] = inst_9754__$1);

return statearr_9794;
})();
if(cljs.core.truth_(inst_9755)){
var statearr_9795_9860 = state_9789__$1;
(statearr_9795_9860[(1)] = (5));

} else {
var statearr_9796_9861 = state_9789__$1;
(statearr_9796_9861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (15))){
var inst_9767 = (state_9789[(8)]);
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9789__$1,(18),to,inst_9767);
} else {
if((state_val_9790 === (21))){
var inst_9780 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
var statearr_9797_9862 = state_9789__$1;
(statearr_9797_9862[(2)] = inst_9780);

(statearr_9797_9862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (13))){
var inst_9782 = (state_9789[(2)]);
var state_9789__$1 = (function (){var statearr_9798 = state_9789;
(statearr_9798[(9)] = inst_9782);

return statearr_9798;
})();
var statearr_9799_9863 = state_9789__$1;
(statearr_9799_9863[(2)] = null);

(statearr_9799_9863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (6))){
var inst_9754 = (state_9789[(7)]);
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9789__$1,(11),inst_9754);
} else {
if((state_val_9790 === (17))){
var inst_9775 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
if(cljs.core.truth_(inst_9775)){
var statearr_9800_9864 = state_9789__$1;
(statearr_9800_9864[(1)] = (19));

} else {
var statearr_9801_9865 = state_9789__$1;
(statearr_9801_9865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (3))){
var inst_9787 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9789__$1,inst_9787);
} else {
if((state_val_9790 === (12))){
var inst_9764 = (state_9789[(10)]);
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9789__$1,(14),inst_9764);
} else {
if((state_val_9790 === (2))){
var state_9789__$1 = state_9789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9789__$1,(4),results);
} else {
if((state_val_9790 === (19))){
var state_9789__$1 = state_9789;
var statearr_9802_9866 = state_9789__$1;
(statearr_9802_9866[(2)] = null);

(statearr_9802_9866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (11))){
var inst_9764 = (state_9789[(2)]);
var state_9789__$1 = (function (){var statearr_9803 = state_9789;
(statearr_9803[(10)] = inst_9764);

return statearr_9803;
})();
var statearr_9804_9867 = state_9789__$1;
(statearr_9804_9867[(2)] = null);

(statearr_9804_9867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (9))){
var state_9789__$1 = state_9789;
var statearr_9805_9868 = state_9789__$1;
(statearr_9805_9868[(2)] = null);

(statearr_9805_9868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (5))){
var state_9789__$1 = state_9789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9806_9869 = state_9789__$1;
(statearr_9806_9869[(1)] = (8));

} else {
var statearr_9807_9870 = state_9789__$1;
(statearr_9807_9870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (14))){
var inst_9767 = (state_9789[(8)]);
var inst_9769 = (state_9789[(11)]);
var inst_9767__$1 = (state_9789[(2)]);
var inst_9768 = (inst_9767__$1 == null);
var inst_9769__$1 = cljs.core.not.call(null,inst_9768);
var state_9789__$1 = (function (){var statearr_9808 = state_9789;
(statearr_9808[(8)] = inst_9767__$1);

(statearr_9808[(11)] = inst_9769__$1);

return statearr_9808;
})();
if(inst_9769__$1){
var statearr_9809_9871 = state_9789__$1;
(statearr_9809_9871[(1)] = (15));

} else {
var statearr_9810_9872 = state_9789__$1;
(statearr_9810_9872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (16))){
var inst_9769 = (state_9789[(11)]);
var state_9789__$1 = state_9789;
var statearr_9811_9873 = state_9789__$1;
(statearr_9811_9873[(2)] = inst_9769);

(statearr_9811_9873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (10))){
var inst_9761 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
var statearr_9812_9874 = state_9789__$1;
(statearr_9812_9874[(2)] = inst_9761);

(statearr_9812_9874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (18))){
var inst_9772 = (state_9789[(2)]);
var state_9789__$1 = state_9789;
var statearr_9813_9875 = state_9789__$1;
(statearr_9813_9875[(2)] = inst_9772);

(statearr_9813_9875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9790 === (8))){
var inst_9758 = cljs.core.async.close_BANG_.call(null,to);
var state_9789__$1 = state_9789;
var statearr_9814_9876 = state_9789__$1;
(statearr_9814_9876[(2)] = inst_9758);

(statearr_9814_9876[(1)] = (10));


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
});})(c__9118__auto__,jobs,results,process,async))
;
return ((function (switch__9103__auto__,c__9118__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_9818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__);

(statearr_9818[(1)] = (1));

return statearr_9818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1 = (function (state_9789){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9819){if((e9819 instanceof Object)){
var ex__9107__auto__ = e9819;
var statearr_9820_9877 = state_9789;
(statearr_9820_9877[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9878 = state_9789;
state_9789 = G__9878;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__ = function(state_9789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1.call(this,state_9789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__,jobs,results,process,async))
})();
var state__9120__auto__ = (function (){var statearr_9821 = f__9119__auto__.call(null);
(statearr_9821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_9821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__,jobs,results,process,async))
);

return c__9118__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9879 = [];
var len__7651__auto___9882 = arguments.length;
var i__7652__auto___9883 = (0);
while(true){
if((i__7652__auto___9883 < len__7651__auto___9882)){
args9879.push((arguments[i__7652__auto___9883]));

var G__9884 = (i__7652__auto___9883 + (1));
i__7652__auto___9883 = G__9884;
continue;
} else {
}
break;
}

var G__9881 = args9879.length;
switch (G__9881) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9879.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9886 = [];
var len__7651__auto___9889 = arguments.length;
var i__7652__auto___9890 = (0);
while(true){
if((i__7652__auto___9890 < len__7651__auto___9889)){
args9886.push((arguments[i__7652__auto___9890]));

var G__9891 = (i__7652__auto___9890 + (1));
i__7652__auto___9890 = G__9891;
continue;
} else {
}
break;
}

var G__9888 = args9886.length;
switch (G__9888) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9886.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9893 = [];
var len__7651__auto___9946 = arguments.length;
var i__7652__auto___9947 = (0);
while(true){
if((i__7652__auto___9947 < len__7651__auto___9946)){
args9893.push((arguments[i__7652__auto___9947]));

var G__9948 = (i__7652__auto___9947 + (1));
i__7652__auto___9947 = G__9948;
continue;
} else {
}
break;
}

var G__9895 = args9893.length;
switch (G__9895) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9893.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9118__auto___9950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___9950,tc,fc){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___9950,tc,fc){
return (function (state_9921){
var state_val_9922 = (state_9921[(1)]);
if((state_val_9922 === (7))){
var inst_9917 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9923_9951 = state_9921__$1;
(statearr_9923_9951[(2)] = inst_9917);

(statearr_9923_9951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (1))){
var state_9921__$1 = state_9921;
var statearr_9924_9952 = state_9921__$1;
(statearr_9924_9952[(2)] = null);

(statearr_9924_9952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (4))){
var inst_9898 = (state_9921[(7)]);
var inst_9898__$1 = (state_9921[(2)]);
var inst_9899 = (inst_9898__$1 == null);
var state_9921__$1 = (function (){var statearr_9925 = state_9921;
(statearr_9925[(7)] = inst_9898__$1);

return statearr_9925;
})();
if(cljs.core.truth_(inst_9899)){
var statearr_9926_9953 = state_9921__$1;
(statearr_9926_9953[(1)] = (5));

} else {
var statearr_9927_9954 = state_9921__$1;
(statearr_9927_9954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (13))){
var state_9921__$1 = state_9921;
var statearr_9928_9955 = state_9921__$1;
(statearr_9928_9955[(2)] = null);

(statearr_9928_9955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (6))){
var inst_9898 = (state_9921[(7)]);
var inst_9904 = p.call(null,inst_9898);
var state_9921__$1 = state_9921;
if(cljs.core.truth_(inst_9904)){
var statearr_9929_9956 = state_9921__$1;
(statearr_9929_9956[(1)] = (9));

} else {
var statearr_9930_9957 = state_9921__$1;
(statearr_9930_9957[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (3))){
var inst_9919 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9921__$1,inst_9919);
} else {
if((state_val_9922 === (12))){
var state_9921__$1 = state_9921;
var statearr_9931_9958 = state_9921__$1;
(statearr_9931_9958[(2)] = null);

(statearr_9931_9958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (2))){
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9921__$1,(4),ch);
} else {
if((state_val_9922 === (11))){
var inst_9898 = (state_9921[(7)]);
var inst_9908 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9921__$1,(8),inst_9908,inst_9898);
} else {
if((state_val_9922 === (9))){
var state_9921__$1 = state_9921;
var statearr_9932_9959 = state_9921__$1;
(statearr_9932_9959[(2)] = tc);

(statearr_9932_9959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (5))){
var inst_9901 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9902 = cljs.core.async.close_BANG_.call(null,fc);
var state_9921__$1 = (function (){var statearr_9933 = state_9921;
(statearr_9933[(8)] = inst_9901);

return statearr_9933;
})();
var statearr_9934_9960 = state_9921__$1;
(statearr_9934_9960[(2)] = inst_9902);

(statearr_9934_9960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (14))){
var inst_9915 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9935_9961 = state_9921__$1;
(statearr_9935_9961[(2)] = inst_9915);

(statearr_9935_9961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (10))){
var state_9921__$1 = state_9921;
var statearr_9936_9962 = state_9921__$1;
(statearr_9936_9962[(2)] = fc);

(statearr_9936_9962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (8))){
var inst_9910 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
if(cljs.core.truth_(inst_9910)){
var statearr_9937_9963 = state_9921__$1;
(statearr_9937_9963[(1)] = (12));

} else {
var statearr_9938_9964 = state_9921__$1;
(statearr_9938_9964[(1)] = (13));

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
});})(c__9118__auto___9950,tc,fc))
;
return ((function (switch__9103__auto__,c__9118__auto___9950,tc,fc){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_9942 = [null,null,null,null,null,null,null,null,null];
(statearr_9942[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_9942[(1)] = (1));

return statearr_9942;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_9921){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_9921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e9943){if((e9943 instanceof Object)){
var ex__9107__auto__ = e9943;
var statearr_9944_9965 = state_9921;
(statearr_9944_9965[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9966 = state_9921;
state_9921 = G__9966;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_9921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_9921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___9950,tc,fc))
})();
var state__9120__auto__ = (function (){var statearr_9945 = f__9119__auto__.call(null);
(statearr_9945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___9950);

return statearr_9945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___9950,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_10030){
var state_val_10031 = (state_10030[(1)]);
if((state_val_10031 === (7))){
var inst_10026 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10032_10053 = state_10030__$1;
(statearr_10032_10053[(2)] = inst_10026);

(statearr_10032_10053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (1))){
var inst_10010 = init;
var state_10030__$1 = (function (){var statearr_10033 = state_10030;
(statearr_10033[(7)] = inst_10010);

return statearr_10033;
})();
var statearr_10034_10054 = state_10030__$1;
(statearr_10034_10054[(2)] = null);

(statearr_10034_10054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (4))){
var inst_10013 = (state_10030[(8)]);
var inst_10013__$1 = (state_10030[(2)]);
var inst_10014 = (inst_10013__$1 == null);
var state_10030__$1 = (function (){var statearr_10035 = state_10030;
(statearr_10035[(8)] = inst_10013__$1);

return statearr_10035;
})();
if(cljs.core.truth_(inst_10014)){
var statearr_10036_10055 = state_10030__$1;
(statearr_10036_10055[(1)] = (5));

} else {
var statearr_10037_10056 = state_10030__$1;
(statearr_10037_10056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (6))){
var inst_10017 = (state_10030[(9)]);
var inst_10013 = (state_10030[(8)]);
var inst_10010 = (state_10030[(7)]);
var inst_10017__$1 = f.call(null,inst_10010,inst_10013);
var inst_10018 = cljs.core.reduced_QMARK_.call(null,inst_10017__$1);
var state_10030__$1 = (function (){var statearr_10038 = state_10030;
(statearr_10038[(9)] = inst_10017__$1);

return statearr_10038;
})();
if(inst_10018){
var statearr_10039_10057 = state_10030__$1;
(statearr_10039_10057[(1)] = (8));

} else {
var statearr_10040_10058 = state_10030__$1;
(statearr_10040_10058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (3))){
var inst_10028 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else {
if((state_val_10031 === (2))){
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),ch);
} else {
if((state_val_10031 === (9))){
var inst_10017 = (state_10030[(9)]);
var inst_10010 = inst_10017;
var state_10030__$1 = (function (){var statearr_10041 = state_10030;
(statearr_10041[(7)] = inst_10010);

return statearr_10041;
})();
var statearr_10042_10059 = state_10030__$1;
(statearr_10042_10059[(2)] = null);

(statearr_10042_10059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (5))){
var inst_10010 = (state_10030[(7)]);
var state_10030__$1 = state_10030;
var statearr_10043_10060 = state_10030__$1;
(statearr_10043_10060[(2)] = inst_10010);

(statearr_10043_10060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (10))){
var inst_10024 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10044_10061 = state_10030__$1;
(statearr_10044_10061[(2)] = inst_10024);

(statearr_10044_10061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (8))){
var inst_10017 = (state_10030[(9)]);
var inst_10020 = cljs.core.deref.call(null,inst_10017);
var state_10030__$1 = state_10030;
var statearr_10045_10062 = state_10030__$1;
(statearr_10045_10062[(2)] = inst_10020);

(statearr_10045_10062[(1)] = (10));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9104__auto____0 = (function (){
var statearr_10049 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10049[(0)] = cljs$core$async$reduce_$_state_machine__9104__auto__);

(statearr_10049[(1)] = (1));

return statearr_10049;
});
var cljs$core$async$reduce_$_state_machine__9104__auto____1 = (function (state_10030){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_10030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e10050){if((e10050 instanceof Object)){
var ex__9107__auto__ = e10050;
var statearr_10051_10063 = state_10030;
(statearr_10051_10063[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10064 = state_10030;
state_10030 = G__10064;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9104__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9104__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9104__auto____0;
cljs$core$async$reduce_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9104__auto____1;
return cljs$core$async$reduce_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_10052 = f__9119__auto__.call(null);
(statearr_10052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_10052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10065 = [];
var len__7651__auto___10117 = arguments.length;
var i__7652__auto___10118 = (0);
while(true){
if((i__7652__auto___10118 < len__7651__auto___10117)){
args10065.push((arguments[i__7652__auto___10118]));

var G__10119 = (i__7652__auto___10118 + (1));
i__7652__auto___10118 = G__10119;
continue;
} else {
}
break;
}

var G__10067 = args10065.length;
switch (G__10067) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10065.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_10092){
var state_val_10093 = (state_10092[(1)]);
if((state_val_10093 === (7))){
var inst_10074 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
var statearr_10094_10121 = state_10092__$1;
(statearr_10094_10121[(2)] = inst_10074);

(statearr_10094_10121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (1))){
var inst_10068 = cljs.core.seq.call(null,coll);
var inst_10069 = inst_10068;
var state_10092__$1 = (function (){var statearr_10095 = state_10092;
(statearr_10095[(7)] = inst_10069);

return statearr_10095;
})();
var statearr_10096_10122 = state_10092__$1;
(statearr_10096_10122[(2)] = null);

(statearr_10096_10122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (4))){
var inst_10069 = (state_10092[(7)]);
var inst_10072 = cljs.core.first.call(null,inst_10069);
var state_10092__$1 = state_10092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10092__$1,(7),ch,inst_10072);
} else {
if((state_val_10093 === (13))){
var inst_10086 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
var statearr_10097_10123 = state_10092__$1;
(statearr_10097_10123[(2)] = inst_10086);

(statearr_10097_10123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (6))){
var inst_10077 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
if(cljs.core.truth_(inst_10077)){
var statearr_10098_10124 = state_10092__$1;
(statearr_10098_10124[(1)] = (8));

} else {
var statearr_10099_10125 = state_10092__$1;
(statearr_10099_10125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (3))){
var inst_10090 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10092__$1,inst_10090);
} else {
if((state_val_10093 === (12))){
var state_10092__$1 = state_10092;
var statearr_10100_10126 = state_10092__$1;
(statearr_10100_10126[(2)] = null);

(statearr_10100_10126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (2))){
var inst_10069 = (state_10092[(7)]);
var state_10092__$1 = state_10092;
if(cljs.core.truth_(inst_10069)){
var statearr_10101_10127 = state_10092__$1;
(statearr_10101_10127[(1)] = (4));

} else {
var statearr_10102_10128 = state_10092__$1;
(statearr_10102_10128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (11))){
var inst_10083 = cljs.core.async.close_BANG_.call(null,ch);
var state_10092__$1 = state_10092;
var statearr_10103_10129 = state_10092__$1;
(statearr_10103_10129[(2)] = inst_10083);

(statearr_10103_10129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (9))){
var state_10092__$1 = state_10092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10104_10130 = state_10092__$1;
(statearr_10104_10130[(1)] = (11));

} else {
var statearr_10105_10131 = state_10092__$1;
(statearr_10105_10131[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (5))){
var inst_10069 = (state_10092[(7)]);
var state_10092__$1 = state_10092;
var statearr_10106_10132 = state_10092__$1;
(statearr_10106_10132[(2)] = inst_10069);

(statearr_10106_10132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (10))){
var inst_10088 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
var statearr_10107_10133 = state_10092__$1;
(statearr_10107_10133[(2)] = inst_10088);

(statearr_10107_10133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (8))){
var inst_10069 = (state_10092[(7)]);
var inst_10079 = cljs.core.next.call(null,inst_10069);
var inst_10069__$1 = inst_10079;
var state_10092__$1 = (function (){var statearr_10108 = state_10092;
(statearr_10108[(7)] = inst_10069__$1);

return statearr_10108;
})();
var statearr_10109_10134 = state_10092__$1;
(statearr_10109_10134[(2)] = null);

(statearr_10109_10134[(1)] = (2));


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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_10113 = [null,null,null,null,null,null,null,null];
(statearr_10113[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_10113[(1)] = (1));

return statearr_10113;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_10092){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_10092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e10114){if((e10114 instanceof Object)){
var ex__9107__auto__ = e10114;
var statearr_10115_10135 = state_10092;
(statearr_10115_10135[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10136 = state_10092;
state_10092 = G__10136;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_10092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_10092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_10116 = f__9119__auto__.call(null);
(statearr_10116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_10116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10362 = (function (ch,cs,meta10363){
this.ch = ch;
this.cs = cs;
this.meta10363 = meta10363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10364,meta10363__$1){
var self__ = this;
var _10364__$1 = this;
return (new cljs.core.async.t_cljs$core$async10362(self__.ch,self__.cs,meta10363__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10364){
var self__ = this;
var _10364__$1 = this;
return self__.meta10363;
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10363","meta10363",-1196868573,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10362";

cljs.core.async.t_cljs$core$async10362.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async10362");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10362 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10362(ch__$1,cs__$1,meta10363){
return (new cljs.core.async.t_cljs$core$async10362(ch__$1,cs__$1,meta10363));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10362(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9118__auto___10587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___10587,cs,m,dchan,dctr,done){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___10587,cs,m,dchan,dctr,done){
return (function (state_10499){
var state_val_10500 = (state_10499[(1)]);
if((state_val_10500 === (7))){
var inst_10495 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10501_10588 = state_10499__$1;
(statearr_10501_10588[(2)] = inst_10495);

(statearr_10501_10588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (20))){
var inst_10398 = (state_10499[(7)]);
var inst_10410 = cljs.core.first.call(null,inst_10398);
var inst_10411 = cljs.core.nth.call(null,inst_10410,(0),null);
var inst_10412 = cljs.core.nth.call(null,inst_10410,(1),null);
var state_10499__$1 = (function (){var statearr_10502 = state_10499;
(statearr_10502[(8)] = inst_10411);

return statearr_10502;
})();
if(cljs.core.truth_(inst_10412)){
var statearr_10503_10589 = state_10499__$1;
(statearr_10503_10589[(1)] = (22));

} else {
var statearr_10504_10590 = state_10499__$1;
(statearr_10504_10590[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (27))){
var inst_10367 = (state_10499[(9)]);
var inst_10447 = (state_10499[(10)]);
var inst_10440 = (state_10499[(11)]);
var inst_10442 = (state_10499[(12)]);
var inst_10447__$1 = cljs.core._nth.call(null,inst_10440,inst_10442);
var inst_10448 = cljs.core.async.put_BANG_.call(null,inst_10447__$1,inst_10367,done);
var state_10499__$1 = (function (){var statearr_10505 = state_10499;
(statearr_10505[(10)] = inst_10447__$1);

return statearr_10505;
})();
if(cljs.core.truth_(inst_10448)){
var statearr_10506_10591 = state_10499__$1;
(statearr_10506_10591[(1)] = (30));

} else {
var statearr_10507_10592 = state_10499__$1;
(statearr_10507_10592[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (1))){
var state_10499__$1 = state_10499;
var statearr_10508_10593 = state_10499__$1;
(statearr_10508_10593[(2)] = null);

(statearr_10508_10593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (24))){
var inst_10398 = (state_10499[(7)]);
var inst_10417 = (state_10499[(2)]);
var inst_10418 = cljs.core.next.call(null,inst_10398);
var inst_10376 = inst_10418;
var inst_10377 = null;
var inst_10378 = (0);
var inst_10379 = (0);
var state_10499__$1 = (function (){var statearr_10509 = state_10499;
(statearr_10509[(13)] = inst_10376);

(statearr_10509[(14)] = inst_10378);

(statearr_10509[(15)] = inst_10377);

(statearr_10509[(16)] = inst_10417);

(statearr_10509[(17)] = inst_10379);

return statearr_10509;
})();
var statearr_10510_10594 = state_10499__$1;
(statearr_10510_10594[(2)] = null);

(statearr_10510_10594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (39))){
var state_10499__$1 = state_10499;
var statearr_10514_10595 = state_10499__$1;
(statearr_10514_10595[(2)] = null);

(statearr_10514_10595[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (4))){
var inst_10367 = (state_10499[(9)]);
var inst_10367__$1 = (state_10499[(2)]);
var inst_10368 = (inst_10367__$1 == null);
var state_10499__$1 = (function (){var statearr_10515 = state_10499;
(statearr_10515[(9)] = inst_10367__$1);

return statearr_10515;
})();
if(cljs.core.truth_(inst_10368)){
var statearr_10516_10596 = state_10499__$1;
(statearr_10516_10596[(1)] = (5));

} else {
var statearr_10517_10597 = state_10499__$1;
(statearr_10517_10597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (15))){
var inst_10376 = (state_10499[(13)]);
var inst_10378 = (state_10499[(14)]);
var inst_10377 = (state_10499[(15)]);
var inst_10379 = (state_10499[(17)]);
var inst_10394 = (state_10499[(2)]);
var inst_10395 = (inst_10379 + (1));
var tmp10511 = inst_10376;
var tmp10512 = inst_10378;
var tmp10513 = inst_10377;
var inst_10376__$1 = tmp10511;
var inst_10377__$1 = tmp10513;
var inst_10378__$1 = tmp10512;
var inst_10379__$1 = inst_10395;
var state_10499__$1 = (function (){var statearr_10518 = state_10499;
(statearr_10518[(13)] = inst_10376__$1);

(statearr_10518[(14)] = inst_10378__$1);

(statearr_10518[(15)] = inst_10377__$1);

(statearr_10518[(18)] = inst_10394);

(statearr_10518[(17)] = inst_10379__$1);

return statearr_10518;
})();
var statearr_10519_10598 = state_10499__$1;
(statearr_10519_10598[(2)] = null);

(statearr_10519_10598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (21))){
var inst_10421 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10523_10599 = state_10499__$1;
(statearr_10523_10599[(2)] = inst_10421);

(statearr_10523_10599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (31))){
var inst_10447 = (state_10499[(10)]);
var inst_10451 = done.call(null,null);
var inst_10452 = cljs.core.async.untap_STAR_.call(null,m,inst_10447);
var state_10499__$1 = (function (){var statearr_10524 = state_10499;
(statearr_10524[(19)] = inst_10451);

return statearr_10524;
})();
var statearr_10525_10600 = state_10499__$1;
(statearr_10525_10600[(2)] = inst_10452);

(statearr_10525_10600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (32))){
var inst_10439 = (state_10499[(20)]);
var inst_10441 = (state_10499[(21)]);
var inst_10440 = (state_10499[(11)]);
var inst_10442 = (state_10499[(12)]);
var inst_10454 = (state_10499[(2)]);
var inst_10455 = (inst_10442 + (1));
var tmp10520 = inst_10439;
var tmp10521 = inst_10441;
var tmp10522 = inst_10440;
var inst_10439__$1 = tmp10520;
var inst_10440__$1 = tmp10522;
var inst_10441__$1 = tmp10521;
var inst_10442__$1 = inst_10455;
var state_10499__$1 = (function (){var statearr_10526 = state_10499;
(statearr_10526[(22)] = inst_10454);

(statearr_10526[(20)] = inst_10439__$1);

(statearr_10526[(21)] = inst_10441__$1);

(statearr_10526[(11)] = inst_10440__$1);

(statearr_10526[(12)] = inst_10442__$1);

return statearr_10526;
})();
var statearr_10527_10601 = state_10499__$1;
(statearr_10527_10601[(2)] = null);

(statearr_10527_10601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (40))){
var inst_10467 = (state_10499[(23)]);
var inst_10471 = done.call(null,null);
var inst_10472 = cljs.core.async.untap_STAR_.call(null,m,inst_10467);
var state_10499__$1 = (function (){var statearr_10528 = state_10499;
(statearr_10528[(24)] = inst_10471);

return statearr_10528;
})();
var statearr_10529_10602 = state_10499__$1;
(statearr_10529_10602[(2)] = inst_10472);

(statearr_10529_10602[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (33))){
var inst_10458 = (state_10499[(25)]);
var inst_10460 = cljs.core.chunked_seq_QMARK_.call(null,inst_10458);
var state_10499__$1 = state_10499;
if(inst_10460){
var statearr_10530_10603 = state_10499__$1;
(statearr_10530_10603[(1)] = (36));

} else {
var statearr_10531_10604 = state_10499__$1;
(statearr_10531_10604[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (13))){
var inst_10388 = (state_10499[(26)]);
var inst_10391 = cljs.core.async.close_BANG_.call(null,inst_10388);
var state_10499__$1 = state_10499;
var statearr_10532_10605 = state_10499__$1;
(statearr_10532_10605[(2)] = inst_10391);

(statearr_10532_10605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (22))){
var inst_10411 = (state_10499[(8)]);
var inst_10414 = cljs.core.async.close_BANG_.call(null,inst_10411);
var state_10499__$1 = state_10499;
var statearr_10533_10606 = state_10499__$1;
(statearr_10533_10606[(2)] = inst_10414);

(statearr_10533_10606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (36))){
var inst_10458 = (state_10499[(25)]);
var inst_10462 = cljs.core.chunk_first.call(null,inst_10458);
var inst_10463 = cljs.core.chunk_rest.call(null,inst_10458);
var inst_10464 = cljs.core.count.call(null,inst_10462);
var inst_10439 = inst_10463;
var inst_10440 = inst_10462;
var inst_10441 = inst_10464;
var inst_10442 = (0);
var state_10499__$1 = (function (){var statearr_10534 = state_10499;
(statearr_10534[(20)] = inst_10439);

(statearr_10534[(21)] = inst_10441);

(statearr_10534[(11)] = inst_10440);

(statearr_10534[(12)] = inst_10442);

return statearr_10534;
})();
var statearr_10535_10607 = state_10499__$1;
(statearr_10535_10607[(2)] = null);

(statearr_10535_10607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (41))){
var inst_10458 = (state_10499[(25)]);
var inst_10474 = (state_10499[(2)]);
var inst_10475 = cljs.core.next.call(null,inst_10458);
var inst_10439 = inst_10475;
var inst_10440 = null;
var inst_10441 = (0);
var inst_10442 = (0);
var state_10499__$1 = (function (){var statearr_10536 = state_10499;
(statearr_10536[(20)] = inst_10439);

(statearr_10536[(21)] = inst_10441);

(statearr_10536[(11)] = inst_10440);

(statearr_10536[(27)] = inst_10474);

(statearr_10536[(12)] = inst_10442);

return statearr_10536;
})();
var statearr_10537_10608 = state_10499__$1;
(statearr_10537_10608[(2)] = null);

(statearr_10537_10608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (43))){
var state_10499__$1 = state_10499;
var statearr_10538_10609 = state_10499__$1;
(statearr_10538_10609[(2)] = null);

(statearr_10538_10609[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (29))){
var inst_10483 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10539_10610 = state_10499__$1;
(statearr_10539_10610[(2)] = inst_10483);

(statearr_10539_10610[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (44))){
var inst_10492 = (state_10499[(2)]);
var state_10499__$1 = (function (){var statearr_10540 = state_10499;
(statearr_10540[(28)] = inst_10492);

return statearr_10540;
})();
var statearr_10541_10611 = state_10499__$1;
(statearr_10541_10611[(2)] = null);

(statearr_10541_10611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (6))){
var inst_10431 = (state_10499[(29)]);
var inst_10430 = cljs.core.deref.call(null,cs);
var inst_10431__$1 = cljs.core.keys.call(null,inst_10430);
var inst_10432 = cljs.core.count.call(null,inst_10431__$1);
var inst_10433 = cljs.core.reset_BANG_.call(null,dctr,inst_10432);
var inst_10438 = cljs.core.seq.call(null,inst_10431__$1);
var inst_10439 = inst_10438;
var inst_10440 = null;
var inst_10441 = (0);
var inst_10442 = (0);
var state_10499__$1 = (function (){var statearr_10542 = state_10499;
(statearr_10542[(30)] = inst_10433);

(statearr_10542[(20)] = inst_10439);

(statearr_10542[(29)] = inst_10431__$1);

(statearr_10542[(21)] = inst_10441);

(statearr_10542[(11)] = inst_10440);

(statearr_10542[(12)] = inst_10442);

return statearr_10542;
})();
var statearr_10543_10612 = state_10499__$1;
(statearr_10543_10612[(2)] = null);

(statearr_10543_10612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (28))){
var inst_10458 = (state_10499[(25)]);
var inst_10439 = (state_10499[(20)]);
var inst_10458__$1 = cljs.core.seq.call(null,inst_10439);
var state_10499__$1 = (function (){var statearr_10544 = state_10499;
(statearr_10544[(25)] = inst_10458__$1);

return statearr_10544;
})();
if(inst_10458__$1){
var statearr_10545_10613 = state_10499__$1;
(statearr_10545_10613[(1)] = (33));

} else {
var statearr_10546_10614 = state_10499__$1;
(statearr_10546_10614[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (25))){
var inst_10441 = (state_10499[(21)]);
var inst_10442 = (state_10499[(12)]);
var inst_10444 = (inst_10442 < inst_10441);
var inst_10445 = inst_10444;
var state_10499__$1 = state_10499;
if(cljs.core.truth_(inst_10445)){
var statearr_10547_10615 = state_10499__$1;
(statearr_10547_10615[(1)] = (27));

} else {
var statearr_10548_10616 = state_10499__$1;
(statearr_10548_10616[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (34))){
var state_10499__$1 = state_10499;
var statearr_10549_10617 = state_10499__$1;
(statearr_10549_10617[(2)] = null);

(statearr_10549_10617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (17))){
var state_10499__$1 = state_10499;
var statearr_10550_10618 = state_10499__$1;
(statearr_10550_10618[(2)] = null);

(statearr_10550_10618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (3))){
var inst_10497 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10499__$1,inst_10497);
} else {
if((state_val_10500 === (12))){
var inst_10426 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10551_10619 = state_10499__$1;
(statearr_10551_10619[(2)] = inst_10426);

(statearr_10551_10619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (2))){
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10499__$1,(4),ch);
} else {
if((state_val_10500 === (23))){
var state_10499__$1 = state_10499;
var statearr_10552_10620 = state_10499__$1;
(statearr_10552_10620[(2)] = null);

(statearr_10552_10620[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (35))){
var inst_10481 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10553_10621 = state_10499__$1;
(statearr_10553_10621[(2)] = inst_10481);

(statearr_10553_10621[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (19))){
var inst_10398 = (state_10499[(7)]);
var inst_10402 = cljs.core.chunk_first.call(null,inst_10398);
var inst_10403 = cljs.core.chunk_rest.call(null,inst_10398);
var inst_10404 = cljs.core.count.call(null,inst_10402);
var inst_10376 = inst_10403;
var inst_10377 = inst_10402;
var inst_10378 = inst_10404;
var inst_10379 = (0);
var state_10499__$1 = (function (){var statearr_10554 = state_10499;
(statearr_10554[(13)] = inst_10376);

(statearr_10554[(14)] = inst_10378);

(statearr_10554[(15)] = inst_10377);

(statearr_10554[(17)] = inst_10379);

return statearr_10554;
})();
var statearr_10555_10622 = state_10499__$1;
(statearr_10555_10622[(2)] = null);

(statearr_10555_10622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (11))){
var inst_10376 = (state_10499[(13)]);
var inst_10398 = (state_10499[(7)]);
var inst_10398__$1 = cljs.core.seq.call(null,inst_10376);
var state_10499__$1 = (function (){var statearr_10556 = state_10499;
(statearr_10556[(7)] = inst_10398__$1);

return statearr_10556;
})();
if(inst_10398__$1){
var statearr_10557_10623 = state_10499__$1;
(statearr_10557_10623[(1)] = (16));

} else {
var statearr_10558_10624 = state_10499__$1;
(statearr_10558_10624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (9))){
var inst_10428 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10559_10625 = state_10499__$1;
(statearr_10559_10625[(2)] = inst_10428);

(statearr_10559_10625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (5))){
var inst_10374 = cljs.core.deref.call(null,cs);
var inst_10375 = cljs.core.seq.call(null,inst_10374);
var inst_10376 = inst_10375;
var inst_10377 = null;
var inst_10378 = (0);
var inst_10379 = (0);
var state_10499__$1 = (function (){var statearr_10560 = state_10499;
(statearr_10560[(13)] = inst_10376);

(statearr_10560[(14)] = inst_10378);

(statearr_10560[(15)] = inst_10377);

(statearr_10560[(17)] = inst_10379);

return statearr_10560;
})();
var statearr_10561_10626 = state_10499__$1;
(statearr_10561_10626[(2)] = null);

(statearr_10561_10626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (14))){
var state_10499__$1 = state_10499;
var statearr_10562_10627 = state_10499__$1;
(statearr_10562_10627[(2)] = null);

(statearr_10562_10627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (45))){
var inst_10489 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10563_10628 = state_10499__$1;
(statearr_10563_10628[(2)] = inst_10489);

(statearr_10563_10628[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (26))){
var inst_10431 = (state_10499[(29)]);
var inst_10485 = (state_10499[(2)]);
var inst_10486 = cljs.core.seq.call(null,inst_10431);
var state_10499__$1 = (function (){var statearr_10564 = state_10499;
(statearr_10564[(31)] = inst_10485);

return statearr_10564;
})();
if(inst_10486){
var statearr_10565_10629 = state_10499__$1;
(statearr_10565_10629[(1)] = (42));

} else {
var statearr_10566_10630 = state_10499__$1;
(statearr_10566_10630[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (16))){
var inst_10398 = (state_10499[(7)]);
var inst_10400 = cljs.core.chunked_seq_QMARK_.call(null,inst_10398);
var state_10499__$1 = state_10499;
if(inst_10400){
var statearr_10567_10631 = state_10499__$1;
(statearr_10567_10631[(1)] = (19));

} else {
var statearr_10568_10632 = state_10499__$1;
(statearr_10568_10632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (38))){
var inst_10478 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10569_10633 = state_10499__$1;
(statearr_10569_10633[(2)] = inst_10478);

(statearr_10569_10633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (30))){
var state_10499__$1 = state_10499;
var statearr_10570_10634 = state_10499__$1;
(statearr_10570_10634[(2)] = null);

(statearr_10570_10634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (10))){
var inst_10377 = (state_10499[(15)]);
var inst_10379 = (state_10499[(17)]);
var inst_10387 = cljs.core._nth.call(null,inst_10377,inst_10379);
var inst_10388 = cljs.core.nth.call(null,inst_10387,(0),null);
var inst_10389 = cljs.core.nth.call(null,inst_10387,(1),null);
var state_10499__$1 = (function (){var statearr_10571 = state_10499;
(statearr_10571[(26)] = inst_10388);

return statearr_10571;
})();
if(cljs.core.truth_(inst_10389)){
var statearr_10572_10635 = state_10499__$1;
(statearr_10572_10635[(1)] = (13));

} else {
var statearr_10573_10636 = state_10499__$1;
(statearr_10573_10636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (18))){
var inst_10424 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10574_10637 = state_10499__$1;
(statearr_10574_10637[(2)] = inst_10424);

(statearr_10574_10637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (42))){
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10499__$1,(45),dchan);
} else {
if((state_val_10500 === (37))){
var inst_10458 = (state_10499[(25)]);
var inst_10367 = (state_10499[(9)]);
var inst_10467 = (state_10499[(23)]);
var inst_10467__$1 = cljs.core.first.call(null,inst_10458);
var inst_10468 = cljs.core.async.put_BANG_.call(null,inst_10467__$1,inst_10367,done);
var state_10499__$1 = (function (){var statearr_10575 = state_10499;
(statearr_10575[(23)] = inst_10467__$1);

return statearr_10575;
})();
if(cljs.core.truth_(inst_10468)){
var statearr_10576_10638 = state_10499__$1;
(statearr_10576_10638[(1)] = (39));

} else {
var statearr_10577_10639 = state_10499__$1;
(statearr_10577_10639[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (8))){
var inst_10378 = (state_10499[(14)]);
var inst_10379 = (state_10499[(17)]);
var inst_10381 = (inst_10379 < inst_10378);
var inst_10382 = inst_10381;
var state_10499__$1 = state_10499;
if(cljs.core.truth_(inst_10382)){
var statearr_10578_10640 = state_10499__$1;
(statearr_10578_10640[(1)] = (10));

} else {
var statearr_10579_10641 = state_10499__$1;
(statearr_10579_10641[(1)] = (11));

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
});})(c__9118__auto___10587,cs,m,dchan,dctr,done))
;
return ((function (switch__9103__auto__,c__9118__auto___10587,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9104__auto__ = null;
var cljs$core$async$mult_$_state_machine__9104__auto____0 = (function (){
var statearr_10583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10583[(0)] = cljs$core$async$mult_$_state_machine__9104__auto__);

(statearr_10583[(1)] = (1));

return statearr_10583;
});
var cljs$core$async$mult_$_state_machine__9104__auto____1 = (function (state_10499){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_10499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e10584){if((e10584 instanceof Object)){
var ex__9107__auto__ = e10584;
var statearr_10585_10642 = state_10499;
(statearr_10585_10642[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10643 = state_10499;
state_10499 = G__10643;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9104__auto__ = function(state_10499){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9104__auto____1.call(this,state_10499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9104__auto____0;
cljs$core$async$mult_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9104__auto____1;
return cljs$core$async$mult_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___10587,cs,m,dchan,dctr,done))
})();
var state__9120__auto__ = (function (){var statearr_10586 = f__9119__auto__.call(null);
(statearr_10586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___10587);

return statearr_10586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___10587,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10644 = [];
var len__7651__auto___10647 = arguments.length;
var i__7652__auto___10648 = (0);
while(true){
if((i__7652__auto___10648 < len__7651__auto___10647)){
args10644.push((arguments[i__7652__auto___10648]));

var G__10649 = (i__7652__auto___10648 + (1));
i__7652__auto___10648 = G__10649;
continue;
} else {
}
break;
}

var G__10646 = args10644.length;
switch (G__10646) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10644.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,state_map);
} else {
var m__7207__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,mode);
} else {
var m__7207__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___10661 = arguments.length;
var i__7652__auto___10662 = (0);
while(true){
if((i__7652__auto___10662 < len__7651__auto___10661)){
args__7658__auto__.push((arguments[i__7652__auto___10662]));

var G__10663 = (i__7652__auto___10662 + (1));
i__7652__auto___10662 = G__10663;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10655){
var map__10656 = p__10655;
var map__10656__$1 = ((((!((map__10656 == null)))?((((map__10656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10656):map__10656);
var opts = map__10656__$1;
var statearr_10658_10664 = state;
(statearr_10658_10664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10656,map__10656__$1,opts){
return (function (val){
var statearr_10659_10665 = state;
(statearr_10659_10665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10656,map__10656__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10660_10666 = state;
(statearr_10660_10666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10651){
var G__10652 = cljs.core.first.call(null,seq10651);
var seq10651__$1 = cljs.core.next.call(null,seq10651);
var G__10653 = cljs.core.first.call(null,seq10651__$1);
var seq10651__$2 = cljs.core.next.call(null,seq10651__$1);
var G__10654 = cljs.core.first.call(null,seq10651__$2);
var seq10651__$3 = cljs.core.next.call(null,seq10651__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10652,G__10653,G__10654,seq10651__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10834 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10835){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10835 = meta10835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10836,meta10835__$1){
var self__ = this;
var _10836__$1 = this;
return (new cljs.core.async.t_cljs$core$async10834(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10835__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10836){
var self__ = this;
var _10836__$1 = this;
return self__.meta10835;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta10835","meta10835",31245717,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10834";

cljs.core.async.t_cljs$core$async10834.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async10834");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10834 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10834(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10835){
return (new cljs.core.async.t_cljs$core$async10834(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10835));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10834(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9118__auto___11001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10938){
var state_val_10939 = (state_10938[(1)]);
if((state_val_10939 === (7))){
var inst_10853 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10940_11002 = state_10938__$1;
(statearr_10940_11002[(2)] = inst_10853);

(statearr_10940_11002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (20))){
var inst_10865 = (state_10938[(7)]);
var state_10938__$1 = state_10938;
var statearr_10941_11003 = state_10938__$1;
(statearr_10941_11003[(2)] = inst_10865);

(statearr_10941_11003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (27))){
var state_10938__$1 = state_10938;
var statearr_10942_11004 = state_10938__$1;
(statearr_10942_11004[(2)] = null);

(statearr_10942_11004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (1))){
var inst_10840 = (state_10938[(8)]);
var inst_10840__$1 = calc_state.call(null);
var inst_10842 = (inst_10840__$1 == null);
var inst_10843 = cljs.core.not.call(null,inst_10842);
var state_10938__$1 = (function (){var statearr_10943 = state_10938;
(statearr_10943[(8)] = inst_10840__$1);

return statearr_10943;
})();
if(inst_10843){
var statearr_10944_11005 = state_10938__$1;
(statearr_10944_11005[(1)] = (2));

} else {
var statearr_10945_11006 = state_10938__$1;
(statearr_10945_11006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (24))){
var inst_10898 = (state_10938[(9)]);
var inst_10889 = (state_10938[(10)]);
var inst_10912 = (state_10938[(11)]);
var inst_10912__$1 = inst_10889.call(null,inst_10898);
var state_10938__$1 = (function (){var statearr_10946 = state_10938;
(statearr_10946[(11)] = inst_10912__$1);

return statearr_10946;
})();
if(cljs.core.truth_(inst_10912__$1)){
var statearr_10947_11007 = state_10938__$1;
(statearr_10947_11007[(1)] = (29));

} else {
var statearr_10948_11008 = state_10938__$1;
(statearr_10948_11008[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (4))){
var inst_10856 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10856)){
var statearr_10949_11009 = state_10938__$1;
(statearr_10949_11009[(1)] = (8));

} else {
var statearr_10950_11010 = state_10938__$1;
(statearr_10950_11010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (15))){
var inst_10883 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10883)){
var statearr_10951_11011 = state_10938__$1;
(statearr_10951_11011[(1)] = (19));

} else {
var statearr_10952_11012 = state_10938__$1;
(statearr_10952_11012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (21))){
var inst_10888 = (state_10938[(12)]);
var inst_10888__$1 = (state_10938[(2)]);
var inst_10889 = cljs.core.get.call(null,inst_10888__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10890 = cljs.core.get.call(null,inst_10888__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10891 = cljs.core.get.call(null,inst_10888__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10938__$1 = (function (){var statearr_10953 = state_10938;
(statearr_10953[(13)] = inst_10890);

(statearr_10953[(12)] = inst_10888__$1);

(statearr_10953[(10)] = inst_10889);

return statearr_10953;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10938__$1,(22),inst_10891);
} else {
if((state_val_10939 === (31))){
var inst_10920 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10920)){
var statearr_10954_11013 = state_10938__$1;
(statearr_10954_11013[(1)] = (32));

} else {
var statearr_10955_11014 = state_10938__$1;
(statearr_10955_11014[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (32))){
var inst_10897 = (state_10938[(14)]);
var state_10938__$1 = state_10938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10938__$1,(35),out,inst_10897);
} else {
if((state_val_10939 === (33))){
var inst_10888 = (state_10938[(12)]);
var inst_10865 = inst_10888;
var state_10938__$1 = (function (){var statearr_10956 = state_10938;
(statearr_10956[(7)] = inst_10865);

return statearr_10956;
})();
var statearr_10957_11015 = state_10938__$1;
(statearr_10957_11015[(2)] = null);

(statearr_10957_11015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (13))){
var inst_10865 = (state_10938[(7)]);
var inst_10872 = inst_10865.cljs$lang$protocol_mask$partition0$;
var inst_10873 = (inst_10872 & (64));
var inst_10874 = inst_10865.cljs$core$ISeq$;
var inst_10875 = (cljs.core.PROTOCOL_SENTINEL === inst_10874);
var inst_10876 = (inst_10873) || (inst_10875);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10876)){
var statearr_10958_11016 = state_10938__$1;
(statearr_10958_11016[(1)] = (16));

} else {
var statearr_10959_11017 = state_10938__$1;
(statearr_10959_11017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (22))){
var inst_10897 = (state_10938[(14)]);
var inst_10898 = (state_10938[(9)]);
var inst_10896 = (state_10938[(2)]);
var inst_10897__$1 = cljs.core.nth.call(null,inst_10896,(0),null);
var inst_10898__$1 = cljs.core.nth.call(null,inst_10896,(1),null);
var inst_10899 = (inst_10897__$1 == null);
var inst_10900 = cljs.core._EQ_.call(null,inst_10898__$1,change);
var inst_10901 = (inst_10899) || (inst_10900);
var state_10938__$1 = (function (){var statearr_10960 = state_10938;
(statearr_10960[(14)] = inst_10897__$1);

(statearr_10960[(9)] = inst_10898__$1);

return statearr_10960;
})();
if(cljs.core.truth_(inst_10901)){
var statearr_10961_11018 = state_10938__$1;
(statearr_10961_11018[(1)] = (23));

} else {
var statearr_10962_11019 = state_10938__$1;
(statearr_10962_11019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (36))){
var inst_10888 = (state_10938[(12)]);
var inst_10865 = inst_10888;
var state_10938__$1 = (function (){var statearr_10963 = state_10938;
(statearr_10963[(7)] = inst_10865);

return statearr_10963;
})();
var statearr_10964_11020 = state_10938__$1;
(statearr_10964_11020[(2)] = null);

(statearr_10964_11020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (29))){
var inst_10912 = (state_10938[(11)]);
var state_10938__$1 = state_10938;
var statearr_10965_11021 = state_10938__$1;
(statearr_10965_11021[(2)] = inst_10912);

(statearr_10965_11021[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (6))){
var state_10938__$1 = state_10938;
var statearr_10966_11022 = state_10938__$1;
(statearr_10966_11022[(2)] = false);

(statearr_10966_11022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (28))){
var inst_10908 = (state_10938[(2)]);
var inst_10909 = calc_state.call(null);
var inst_10865 = inst_10909;
var state_10938__$1 = (function (){var statearr_10967 = state_10938;
(statearr_10967[(7)] = inst_10865);

(statearr_10967[(15)] = inst_10908);

return statearr_10967;
})();
var statearr_10968_11023 = state_10938__$1;
(statearr_10968_11023[(2)] = null);

(statearr_10968_11023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (25))){
var inst_10934 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10969_11024 = state_10938__$1;
(statearr_10969_11024[(2)] = inst_10934);

(statearr_10969_11024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (34))){
var inst_10932 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10970_11025 = state_10938__$1;
(statearr_10970_11025[(2)] = inst_10932);

(statearr_10970_11025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (17))){
var state_10938__$1 = state_10938;
var statearr_10971_11026 = state_10938__$1;
(statearr_10971_11026[(2)] = false);

(statearr_10971_11026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (3))){
var state_10938__$1 = state_10938;
var statearr_10972_11027 = state_10938__$1;
(statearr_10972_11027[(2)] = false);

(statearr_10972_11027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (12))){
var inst_10936 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10938__$1,inst_10936);
} else {
if((state_val_10939 === (2))){
var inst_10840 = (state_10938[(8)]);
var inst_10845 = inst_10840.cljs$lang$protocol_mask$partition0$;
var inst_10846 = (inst_10845 & (64));
var inst_10847 = inst_10840.cljs$core$ISeq$;
var inst_10848 = (cljs.core.PROTOCOL_SENTINEL === inst_10847);
var inst_10849 = (inst_10846) || (inst_10848);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10849)){
var statearr_10973_11028 = state_10938__$1;
(statearr_10973_11028[(1)] = (5));

} else {
var statearr_10974_11029 = state_10938__$1;
(statearr_10974_11029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (23))){
var inst_10897 = (state_10938[(14)]);
var inst_10903 = (inst_10897 == null);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10903)){
var statearr_10975_11030 = state_10938__$1;
(statearr_10975_11030[(1)] = (26));

} else {
var statearr_10976_11031 = state_10938__$1;
(statearr_10976_11031[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (35))){
var inst_10923 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10923)){
var statearr_10977_11032 = state_10938__$1;
(statearr_10977_11032[(1)] = (36));

} else {
var statearr_10978_11033 = state_10938__$1;
(statearr_10978_11033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (19))){
var inst_10865 = (state_10938[(7)]);
var inst_10885 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10865);
var state_10938__$1 = state_10938;
var statearr_10979_11034 = state_10938__$1;
(statearr_10979_11034[(2)] = inst_10885);

(statearr_10979_11034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (11))){
var inst_10865 = (state_10938[(7)]);
var inst_10869 = (inst_10865 == null);
var inst_10870 = cljs.core.not.call(null,inst_10869);
var state_10938__$1 = state_10938;
if(inst_10870){
var statearr_10980_11035 = state_10938__$1;
(statearr_10980_11035[(1)] = (13));

} else {
var statearr_10981_11036 = state_10938__$1;
(statearr_10981_11036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (9))){
var inst_10840 = (state_10938[(8)]);
var state_10938__$1 = state_10938;
var statearr_10982_11037 = state_10938__$1;
(statearr_10982_11037[(2)] = inst_10840);

(statearr_10982_11037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (5))){
var state_10938__$1 = state_10938;
var statearr_10983_11038 = state_10938__$1;
(statearr_10983_11038[(2)] = true);

(statearr_10983_11038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (14))){
var state_10938__$1 = state_10938;
var statearr_10984_11039 = state_10938__$1;
(statearr_10984_11039[(2)] = false);

(statearr_10984_11039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (26))){
var inst_10898 = (state_10938[(9)]);
var inst_10905 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10898);
var state_10938__$1 = state_10938;
var statearr_10985_11040 = state_10938__$1;
(statearr_10985_11040[(2)] = inst_10905);

(statearr_10985_11040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (16))){
var state_10938__$1 = state_10938;
var statearr_10986_11041 = state_10938__$1;
(statearr_10986_11041[(2)] = true);

(statearr_10986_11041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (38))){
var inst_10928 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10987_11042 = state_10938__$1;
(statearr_10987_11042[(2)] = inst_10928);

(statearr_10987_11042[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (30))){
var inst_10890 = (state_10938[(13)]);
var inst_10898 = (state_10938[(9)]);
var inst_10889 = (state_10938[(10)]);
var inst_10915 = cljs.core.empty_QMARK_.call(null,inst_10889);
var inst_10916 = inst_10890.call(null,inst_10898);
var inst_10917 = cljs.core.not.call(null,inst_10916);
var inst_10918 = (inst_10915) && (inst_10917);
var state_10938__$1 = state_10938;
var statearr_10988_11043 = state_10938__$1;
(statearr_10988_11043[(2)] = inst_10918);

(statearr_10988_11043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (10))){
var inst_10840 = (state_10938[(8)]);
var inst_10861 = (state_10938[(2)]);
var inst_10862 = cljs.core.get.call(null,inst_10861,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10863 = cljs.core.get.call(null,inst_10861,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10864 = cljs.core.get.call(null,inst_10861,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10865 = inst_10840;
var state_10938__$1 = (function (){var statearr_10989 = state_10938;
(statearr_10989[(16)] = inst_10862);

(statearr_10989[(17)] = inst_10863);

(statearr_10989[(7)] = inst_10865);

(statearr_10989[(18)] = inst_10864);

return statearr_10989;
})();
var statearr_10990_11044 = state_10938__$1;
(statearr_10990_11044[(2)] = null);

(statearr_10990_11044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (18))){
var inst_10880 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10991_11045 = state_10938__$1;
(statearr_10991_11045[(2)] = inst_10880);

(statearr_10991_11045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (37))){
var state_10938__$1 = state_10938;
var statearr_10992_11046 = state_10938__$1;
(statearr_10992_11046[(2)] = null);

(statearr_10992_11046[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (8))){
var inst_10840 = (state_10938[(8)]);
var inst_10858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10840);
var state_10938__$1 = state_10938;
var statearr_10993_11047 = state_10938__$1;
(statearr_10993_11047[(2)] = inst_10858);

(statearr_10993_11047[(1)] = (10));


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
});})(c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9103__auto__,c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9104__auto__ = null;
var cljs$core$async$mix_$_state_machine__9104__auto____0 = (function (){
var statearr_10997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10997[(0)] = cljs$core$async$mix_$_state_machine__9104__auto__);

(statearr_10997[(1)] = (1));

return statearr_10997;
});
var cljs$core$async$mix_$_state_machine__9104__auto____1 = (function (state_10938){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_10938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e10998){if((e10998 instanceof Object)){
var ex__9107__auto__ = e10998;
var statearr_10999_11048 = state_10938;
(statearr_10999_11048[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11049 = state_10938;
state_10938 = G__11049;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9104__auto__ = function(state_10938){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9104__auto____1.call(this,state_10938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9104__auto____0;
cljs$core$async$mix_$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9104__auto____1;
return cljs$core$async$mix_$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9120__auto__ = (function (){var statearr_11000 = f__9119__auto__.call(null);
(statearr_11000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11001);

return statearr_11000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11050 = [];
var len__7651__auto___11053 = arguments.length;
var i__7652__auto___11054 = (0);
while(true){
if((i__7652__auto___11054 < len__7651__auto___11053)){
args11050.push((arguments[i__7652__auto___11054]));

var G__11055 = (i__7652__auto___11054 + (1));
i__7652__auto___11054 = G__11055;
continue;
} else {
}
break;
}

var G__11052 = args11050.length;
switch (G__11052) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11050.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11058 = [];
var len__7651__auto___11183 = arguments.length;
var i__7652__auto___11184 = (0);
while(true){
if((i__7652__auto___11184 < len__7651__auto___11183)){
args11058.push((arguments[i__7652__auto___11184]));

var G__11185 = (i__7652__auto___11184 + (1));
i__7652__auto___11184 = G__11185;
continue;
} else {
}
break;
}

var G__11060 = args11058.length;
switch (G__11060) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11058.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6543__auto__,mults){
return (function (p1__11057_SHARP_){
if(cljs.core.truth_(p1__11057_SHARP_.call(null,topic))){
return p1__11057_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11057_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11062 = meta11062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11063,meta11062__$1){
var self__ = this;
var _11063__$1 = this;
return (new cljs.core.async.t_cljs$core$async11061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11062__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11063){
var self__ = this;
var _11063__$1 = this;
return self__.meta11062;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11062","meta11062",-764150062,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11061";

cljs.core.async.t_cljs$core$async11061.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11061");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11061 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11062){
return (new cljs.core.async.t_cljs$core$async11061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11062));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9118__auto___11187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11187,mults,ensure_mult,p){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11187,mults,ensure_mult,p){
return (function (state_11135){
var state_val_11136 = (state_11135[(1)]);
if((state_val_11136 === (7))){
var inst_11131 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11137_11188 = state_11135__$1;
(statearr_11137_11188[(2)] = inst_11131);

(statearr_11137_11188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (20))){
var state_11135__$1 = state_11135;
var statearr_11138_11189 = state_11135__$1;
(statearr_11138_11189[(2)] = null);

(statearr_11138_11189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (1))){
var state_11135__$1 = state_11135;
var statearr_11139_11190 = state_11135__$1;
(statearr_11139_11190[(2)] = null);

(statearr_11139_11190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (24))){
var inst_11114 = (state_11135[(7)]);
var inst_11123 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11114);
var state_11135__$1 = state_11135;
var statearr_11140_11191 = state_11135__$1;
(statearr_11140_11191[(2)] = inst_11123);

(statearr_11140_11191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (4))){
var inst_11066 = (state_11135[(8)]);
var inst_11066__$1 = (state_11135[(2)]);
var inst_11067 = (inst_11066__$1 == null);
var state_11135__$1 = (function (){var statearr_11141 = state_11135;
(statearr_11141[(8)] = inst_11066__$1);

return statearr_11141;
})();
if(cljs.core.truth_(inst_11067)){
var statearr_11142_11192 = state_11135__$1;
(statearr_11142_11192[(1)] = (5));

} else {
var statearr_11143_11193 = state_11135__$1;
(statearr_11143_11193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (15))){
var inst_11108 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11144_11194 = state_11135__$1;
(statearr_11144_11194[(2)] = inst_11108);

(statearr_11144_11194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (21))){
var inst_11128 = (state_11135[(2)]);
var state_11135__$1 = (function (){var statearr_11145 = state_11135;
(statearr_11145[(9)] = inst_11128);

return statearr_11145;
})();
var statearr_11146_11195 = state_11135__$1;
(statearr_11146_11195[(2)] = null);

(statearr_11146_11195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (13))){
var inst_11090 = (state_11135[(10)]);
var inst_11092 = cljs.core.chunked_seq_QMARK_.call(null,inst_11090);
var state_11135__$1 = state_11135;
if(inst_11092){
var statearr_11147_11196 = state_11135__$1;
(statearr_11147_11196[(1)] = (16));

} else {
var statearr_11148_11197 = state_11135__$1;
(statearr_11148_11197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (22))){
var inst_11120 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
if(cljs.core.truth_(inst_11120)){
var statearr_11149_11198 = state_11135__$1;
(statearr_11149_11198[(1)] = (23));

} else {
var statearr_11150_11199 = state_11135__$1;
(statearr_11150_11199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (6))){
var inst_11116 = (state_11135[(11)]);
var inst_11066 = (state_11135[(8)]);
var inst_11114 = (state_11135[(7)]);
var inst_11114__$1 = topic_fn.call(null,inst_11066);
var inst_11115 = cljs.core.deref.call(null,mults);
var inst_11116__$1 = cljs.core.get.call(null,inst_11115,inst_11114__$1);
var state_11135__$1 = (function (){var statearr_11151 = state_11135;
(statearr_11151[(11)] = inst_11116__$1);

(statearr_11151[(7)] = inst_11114__$1);

return statearr_11151;
})();
if(cljs.core.truth_(inst_11116__$1)){
var statearr_11152_11200 = state_11135__$1;
(statearr_11152_11200[(1)] = (19));

} else {
var statearr_11153_11201 = state_11135__$1;
(statearr_11153_11201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (25))){
var inst_11125 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11154_11202 = state_11135__$1;
(statearr_11154_11202[(2)] = inst_11125);

(statearr_11154_11202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (17))){
var inst_11090 = (state_11135[(10)]);
var inst_11099 = cljs.core.first.call(null,inst_11090);
var inst_11100 = cljs.core.async.muxch_STAR_.call(null,inst_11099);
var inst_11101 = cljs.core.async.close_BANG_.call(null,inst_11100);
var inst_11102 = cljs.core.next.call(null,inst_11090);
var inst_11076 = inst_11102;
var inst_11077 = null;
var inst_11078 = (0);
var inst_11079 = (0);
var state_11135__$1 = (function (){var statearr_11155 = state_11135;
(statearr_11155[(12)] = inst_11076);

(statearr_11155[(13)] = inst_11079);

(statearr_11155[(14)] = inst_11101);

(statearr_11155[(15)] = inst_11078);

(statearr_11155[(16)] = inst_11077);

return statearr_11155;
})();
var statearr_11156_11203 = state_11135__$1;
(statearr_11156_11203[(2)] = null);

(statearr_11156_11203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (3))){
var inst_11133 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11135__$1,inst_11133);
} else {
if((state_val_11136 === (12))){
var inst_11110 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11157_11204 = state_11135__$1;
(statearr_11157_11204[(2)] = inst_11110);

(statearr_11157_11204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (2))){
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11135__$1,(4),ch);
} else {
if((state_val_11136 === (23))){
var state_11135__$1 = state_11135;
var statearr_11158_11205 = state_11135__$1;
(statearr_11158_11205[(2)] = null);

(statearr_11158_11205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (19))){
var inst_11116 = (state_11135[(11)]);
var inst_11066 = (state_11135[(8)]);
var inst_11118 = cljs.core.async.muxch_STAR_.call(null,inst_11116);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11135__$1,(22),inst_11118,inst_11066);
} else {
if((state_val_11136 === (11))){
var inst_11076 = (state_11135[(12)]);
var inst_11090 = (state_11135[(10)]);
var inst_11090__$1 = cljs.core.seq.call(null,inst_11076);
var state_11135__$1 = (function (){var statearr_11159 = state_11135;
(statearr_11159[(10)] = inst_11090__$1);

return statearr_11159;
})();
if(inst_11090__$1){
var statearr_11160_11206 = state_11135__$1;
(statearr_11160_11206[(1)] = (13));

} else {
var statearr_11161_11207 = state_11135__$1;
(statearr_11161_11207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (9))){
var inst_11112 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11162_11208 = state_11135__$1;
(statearr_11162_11208[(2)] = inst_11112);

(statearr_11162_11208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (5))){
var inst_11073 = cljs.core.deref.call(null,mults);
var inst_11074 = cljs.core.vals.call(null,inst_11073);
var inst_11075 = cljs.core.seq.call(null,inst_11074);
var inst_11076 = inst_11075;
var inst_11077 = null;
var inst_11078 = (0);
var inst_11079 = (0);
var state_11135__$1 = (function (){var statearr_11163 = state_11135;
(statearr_11163[(12)] = inst_11076);

(statearr_11163[(13)] = inst_11079);

(statearr_11163[(15)] = inst_11078);

(statearr_11163[(16)] = inst_11077);

return statearr_11163;
})();
var statearr_11164_11209 = state_11135__$1;
(statearr_11164_11209[(2)] = null);

(statearr_11164_11209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (14))){
var state_11135__$1 = state_11135;
var statearr_11168_11210 = state_11135__$1;
(statearr_11168_11210[(2)] = null);

(statearr_11168_11210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (16))){
var inst_11090 = (state_11135[(10)]);
var inst_11094 = cljs.core.chunk_first.call(null,inst_11090);
var inst_11095 = cljs.core.chunk_rest.call(null,inst_11090);
var inst_11096 = cljs.core.count.call(null,inst_11094);
var inst_11076 = inst_11095;
var inst_11077 = inst_11094;
var inst_11078 = inst_11096;
var inst_11079 = (0);
var state_11135__$1 = (function (){var statearr_11169 = state_11135;
(statearr_11169[(12)] = inst_11076);

(statearr_11169[(13)] = inst_11079);

(statearr_11169[(15)] = inst_11078);

(statearr_11169[(16)] = inst_11077);

return statearr_11169;
})();
var statearr_11170_11211 = state_11135__$1;
(statearr_11170_11211[(2)] = null);

(statearr_11170_11211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (10))){
var inst_11076 = (state_11135[(12)]);
var inst_11079 = (state_11135[(13)]);
var inst_11078 = (state_11135[(15)]);
var inst_11077 = (state_11135[(16)]);
var inst_11084 = cljs.core._nth.call(null,inst_11077,inst_11079);
var inst_11085 = cljs.core.async.muxch_STAR_.call(null,inst_11084);
var inst_11086 = cljs.core.async.close_BANG_.call(null,inst_11085);
var inst_11087 = (inst_11079 + (1));
var tmp11165 = inst_11076;
var tmp11166 = inst_11078;
var tmp11167 = inst_11077;
var inst_11076__$1 = tmp11165;
var inst_11077__$1 = tmp11167;
var inst_11078__$1 = tmp11166;
var inst_11079__$1 = inst_11087;
var state_11135__$1 = (function (){var statearr_11171 = state_11135;
(statearr_11171[(17)] = inst_11086);

(statearr_11171[(12)] = inst_11076__$1);

(statearr_11171[(13)] = inst_11079__$1);

(statearr_11171[(15)] = inst_11078__$1);

(statearr_11171[(16)] = inst_11077__$1);

return statearr_11171;
})();
var statearr_11172_11212 = state_11135__$1;
(statearr_11172_11212[(2)] = null);

(statearr_11172_11212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (18))){
var inst_11105 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11173_11213 = state_11135__$1;
(statearr_11173_11213[(2)] = inst_11105);

(statearr_11173_11213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (8))){
var inst_11079 = (state_11135[(13)]);
var inst_11078 = (state_11135[(15)]);
var inst_11081 = (inst_11079 < inst_11078);
var inst_11082 = inst_11081;
var state_11135__$1 = state_11135;
if(cljs.core.truth_(inst_11082)){
var statearr_11174_11214 = state_11135__$1;
(statearr_11174_11214[(1)] = (10));

} else {
var statearr_11175_11215 = state_11135__$1;
(statearr_11175_11215[(1)] = (11));

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
});})(c__9118__auto___11187,mults,ensure_mult,p))
;
return ((function (switch__9103__auto__,c__9118__auto___11187,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11179[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11179[(1)] = (1));

return statearr_11179;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11135){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11180){if((e11180 instanceof Object)){
var ex__9107__auto__ = e11180;
var statearr_11181_11216 = state_11135;
(statearr_11181_11216[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11217 = state_11135;
state_11135 = G__11217;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11187,mults,ensure_mult,p))
})();
var state__9120__auto__ = (function (){var statearr_11182 = f__9119__auto__.call(null);
(statearr_11182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11187);

return statearr_11182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11187,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11218 = [];
var len__7651__auto___11221 = arguments.length;
var i__7652__auto___11222 = (0);
while(true){
if((i__7652__auto___11222 < len__7651__auto___11221)){
args11218.push((arguments[i__7652__auto___11222]));

var G__11223 = (i__7652__auto___11222 + (1));
i__7652__auto___11222 = G__11223;
continue;
} else {
}
break;
}

var G__11220 = args11218.length;
switch (G__11220) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11218.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11225 = [];
var len__7651__auto___11228 = arguments.length;
var i__7652__auto___11229 = (0);
while(true){
if((i__7652__auto___11229 < len__7651__auto___11228)){
args11225.push((arguments[i__7652__auto___11229]));

var G__11230 = (i__7652__auto___11229 + (1));
i__7652__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var G__11227 = args11225.length;
switch (G__11227) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11225.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11232 = [];
var len__7651__auto___11303 = arguments.length;
var i__7652__auto___11304 = (0);
while(true){
if((i__7652__auto___11304 < len__7651__auto___11303)){
args11232.push((arguments[i__7652__auto___11304]));

var G__11305 = (i__7652__auto___11304 + (1));
i__7652__auto___11304 = G__11305;
continue;
} else {
}
break;
}

var G__11234 = args11232.length;
switch (G__11234) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11232.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9118__auto___11307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11273){
var state_val_11274 = (state_11273[(1)]);
if((state_val_11274 === (7))){
var state_11273__$1 = state_11273;
var statearr_11275_11308 = state_11273__$1;
(statearr_11275_11308[(2)] = null);

(statearr_11275_11308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (1))){
var state_11273__$1 = state_11273;
var statearr_11276_11309 = state_11273__$1;
(statearr_11276_11309[(2)] = null);

(statearr_11276_11309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (4))){
var inst_11237 = (state_11273[(7)]);
var inst_11239 = (inst_11237 < cnt);
var state_11273__$1 = state_11273;
if(cljs.core.truth_(inst_11239)){
var statearr_11277_11310 = state_11273__$1;
(statearr_11277_11310[(1)] = (6));

} else {
var statearr_11278_11311 = state_11273__$1;
(statearr_11278_11311[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (15))){
var inst_11269 = (state_11273[(2)]);
var state_11273__$1 = state_11273;
var statearr_11279_11312 = state_11273__$1;
(statearr_11279_11312[(2)] = inst_11269);

(statearr_11279_11312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (13))){
var inst_11262 = cljs.core.async.close_BANG_.call(null,out);
var state_11273__$1 = state_11273;
var statearr_11280_11313 = state_11273__$1;
(statearr_11280_11313[(2)] = inst_11262);

(statearr_11280_11313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (6))){
var state_11273__$1 = state_11273;
var statearr_11281_11314 = state_11273__$1;
(statearr_11281_11314[(2)] = null);

(statearr_11281_11314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (3))){
var inst_11271 = (state_11273[(2)]);
var state_11273__$1 = state_11273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11273__$1,inst_11271);
} else {
if((state_val_11274 === (12))){
var inst_11259 = (state_11273[(8)]);
var inst_11259__$1 = (state_11273[(2)]);
var inst_11260 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11259__$1);
var state_11273__$1 = (function (){var statearr_11282 = state_11273;
(statearr_11282[(8)] = inst_11259__$1);

return statearr_11282;
})();
if(cljs.core.truth_(inst_11260)){
var statearr_11283_11315 = state_11273__$1;
(statearr_11283_11315[(1)] = (13));

} else {
var statearr_11284_11316 = state_11273__$1;
(statearr_11284_11316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (2))){
var inst_11236 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11237 = (0);
var state_11273__$1 = (function (){var statearr_11285 = state_11273;
(statearr_11285[(9)] = inst_11236);

(statearr_11285[(7)] = inst_11237);

return statearr_11285;
})();
var statearr_11286_11317 = state_11273__$1;
(statearr_11286_11317[(2)] = null);

(statearr_11286_11317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (11))){
var inst_11237 = (state_11273[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11273,(10),Object,null,(9));
var inst_11246 = chs__$1.call(null,inst_11237);
var inst_11247 = done.call(null,inst_11237);
var inst_11248 = cljs.core.async.take_BANG_.call(null,inst_11246,inst_11247);
var state_11273__$1 = state_11273;
var statearr_11287_11318 = state_11273__$1;
(statearr_11287_11318[(2)] = inst_11248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (9))){
var inst_11237 = (state_11273[(7)]);
var inst_11250 = (state_11273[(2)]);
var inst_11251 = (inst_11237 + (1));
var inst_11237__$1 = inst_11251;
var state_11273__$1 = (function (){var statearr_11288 = state_11273;
(statearr_11288[(10)] = inst_11250);

(statearr_11288[(7)] = inst_11237__$1);

return statearr_11288;
})();
var statearr_11289_11319 = state_11273__$1;
(statearr_11289_11319[(2)] = null);

(statearr_11289_11319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (5))){
var inst_11257 = (state_11273[(2)]);
var state_11273__$1 = (function (){var statearr_11290 = state_11273;
(statearr_11290[(11)] = inst_11257);

return statearr_11290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11273__$1,(12),dchan);
} else {
if((state_val_11274 === (14))){
var inst_11259 = (state_11273[(8)]);
var inst_11264 = cljs.core.apply.call(null,f,inst_11259);
var state_11273__$1 = state_11273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11273__$1,(16),out,inst_11264);
} else {
if((state_val_11274 === (16))){
var inst_11266 = (state_11273[(2)]);
var state_11273__$1 = (function (){var statearr_11291 = state_11273;
(statearr_11291[(12)] = inst_11266);

return statearr_11291;
})();
var statearr_11292_11320 = state_11273__$1;
(statearr_11292_11320[(2)] = null);

(statearr_11292_11320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (10))){
var inst_11241 = (state_11273[(2)]);
var inst_11242 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11273__$1 = (function (){var statearr_11293 = state_11273;
(statearr_11293[(13)] = inst_11241);

return statearr_11293;
})();
var statearr_11294_11321 = state_11273__$1;
(statearr_11294_11321[(2)] = inst_11242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11274 === (8))){
var inst_11255 = (state_11273[(2)]);
var state_11273__$1 = state_11273;
var statearr_11295_11322 = state_11273__$1;
(statearr_11295_11322[(2)] = inst_11255);

(statearr_11295_11322[(1)] = (5));


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
});})(c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9103__auto__,c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11299[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11299[(1)] = (1));

return statearr_11299;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11273){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object)){
var ex__9107__auto__ = e11300;
var statearr_11301_11323 = state_11273;
(statearr_11301_11323[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11324 = state_11273;
state_11273 = G__11324;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9120__auto__ = (function (){var statearr_11302 = f__9119__auto__.call(null);
(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11307);

return statearr_11302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11307,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11326 = [];
var len__7651__auto___11384 = arguments.length;
var i__7652__auto___11385 = (0);
while(true){
if((i__7652__auto___11385 < len__7651__auto___11384)){
args11326.push((arguments[i__7652__auto___11385]));

var G__11386 = (i__7652__auto___11385 + (1));
i__7652__auto___11385 = G__11386;
continue;
} else {
}
break;
}

var G__11328 = args11326.length;
switch (G__11328) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11326.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___11388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11388,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11388,out){
return (function (state_11360){
var state_val_11361 = (state_11360[(1)]);
if((state_val_11361 === (7))){
var inst_11340 = (state_11360[(7)]);
var inst_11339 = (state_11360[(8)]);
var inst_11339__$1 = (state_11360[(2)]);
var inst_11340__$1 = cljs.core.nth.call(null,inst_11339__$1,(0),null);
var inst_11341 = cljs.core.nth.call(null,inst_11339__$1,(1),null);
var inst_11342 = (inst_11340__$1 == null);
var state_11360__$1 = (function (){var statearr_11362 = state_11360;
(statearr_11362[(7)] = inst_11340__$1);

(statearr_11362[(8)] = inst_11339__$1);

(statearr_11362[(9)] = inst_11341);

return statearr_11362;
})();
if(cljs.core.truth_(inst_11342)){
var statearr_11363_11389 = state_11360__$1;
(statearr_11363_11389[(1)] = (8));

} else {
var statearr_11364_11390 = state_11360__$1;
(statearr_11364_11390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (1))){
var inst_11329 = cljs.core.vec.call(null,chs);
var inst_11330 = inst_11329;
var state_11360__$1 = (function (){var statearr_11365 = state_11360;
(statearr_11365[(10)] = inst_11330);

return statearr_11365;
})();
var statearr_11366_11391 = state_11360__$1;
(statearr_11366_11391[(2)] = null);

(statearr_11366_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (4))){
var inst_11330 = (state_11360[(10)]);
var state_11360__$1 = state_11360;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11360__$1,(7),inst_11330);
} else {
if((state_val_11361 === (6))){
var inst_11356 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
var statearr_11367_11392 = state_11360__$1;
(statearr_11367_11392[(2)] = inst_11356);

(statearr_11367_11392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (3))){
var inst_11358 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11360__$1,inst_11358);
} else {
if((state_val_11361 === (2))){
var inst_11330 = (state_11360[(10)]);
var inst_11332 = cljs.core.count.call(null,inst_11330);
var inst_11333 = (inst_11332 > (0));
var state_11360__$1 = state_11360;
if(cljs.core.truth_(inst_11333)){
var statearr_11369_11393 = state_11360__$1;
(statearr_11369_11393[(1)] = (4));

} else {
var statearr_11370_11394 = state_11360__$1;
(statearr_11370_11394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (11))){
var inst_11330 = (state_11360[(10)]);
var inst_11349 = (state_11360[(2)]);
var tmp11368 = inst_11330;
var inst_11330__$1 = tmp11368;
var state_11360__$1 = (function (){var statearr_11371 = state_11360;
(statearr_11371[(11)] = inst_11349);

(statearr_11371[(10)] = inst_11330__$1);

return statearr_11371;
})();
var statearr_11372_11395 = state_11360__$1;
(statearr_11372_11395[(2)] = null);

(statearr_11372_11395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (9))){
var inst_11340 = (state_11360[(7)]);
var state_11360__$1 = state_11360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11360__$1,(11),out,inst_11340);
} else {
if((state_val_11361 === (5))){
var inst_11354 = cljs.core.async.close_BANG_.call(null,out);
var state_11360__$1 = state_11360;
var statearr_11373_11396 = state_11360__$1;
(statearr_11373_11396[(2)] = inst_11354);

(statearr_11373_11396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (10))){
var inst_11352 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
var statearr_11374_11397 = state_11360__$1;
(statearr_11374_11397[(2)] = inst_11352);

(statearr_11374_11397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (8))){
var inst_11340 = (state_11360[(7)]);
var inst_11339 = (state_11360[(8)]);
var inst_11330 = (state_11360[(10)]);
var inst_11341 = (state_11360[(9)]);
var inst_11344 = (function (){var cs = inst_11330;
var vec__11335 = inst_11339;
var v = inst_11340;
var c = inst_11341;
return ((function (cs,vec__11335,v,c,inst_11340,inst_11339,inst_11330,inst_11341,state_val_11361,c__9118__auto___11388,out){
return (function (p1__11325_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11325_SHARP_);
});
;})(cs,vec__11335,v,c,inst_11340,inst_11339,inst_11330,inst_11341,state_val_11361,c__9118__auto___11388,out))
})();
var inst_11345 = cljs.core.filterv.call(null,inst_11344,inst_11330);
var inst_11330__$1 = inst_11345;
var state_11360__$1 = (function (){var statearr_11375 = state_11360;
(statearr_11375[(10)] = inst_11330__$1);

return statearr_11375;
})();
var statearr_11376_11398 = state_11360__$1;
(statearr_11376_11398[(2)] = null);

(statearr_11376_11398[(1)] = (2));


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
});})(c__9118__auto___11388,out))
;
return ((function (switch__9103__auto__,c__9118__auto___11388,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11380[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11380[(1)] = (1));

return statearr_11380;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11360){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11381){if((e11381 instanceof Object)){
var ex__9107__auto__ = e11381;
var statearr_11382_11399 = state_11360;
(statearr_11382_11399[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11400 = state_11360;
state_11360 = G__11400;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11388,out))
})();
var state__9120__auto__ = (function (){var statearr_11383 = f__9119__auto__.call(null);
(statearr_11383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11388);

return statearr_11383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11388,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11401 = [];
var len__7651__auto___11450 = arguments.length;
var i__7652__auto___11451 = (0);
while(true){
if((i__7652__auto___11451 < len__7651__auto___11450)){
args11401.push((arguments[i__7652__auto___11451]));

var G__11452 = (i__7652__auto___11451 + (1));
i__7652__auto___11451 = G__11452;
continue;
} else {
}
break;
}

var G__11403 = args11401.length;
switch (G__11403) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11401.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___11454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11454,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11454,out){
return (function (state_11427){
var state_val_11428 = (state_11427[(1)]);
if((state_val_11428 === (7))){
var inst_11409 = (state_11427[(7)]);
var inst_11409__$1 = (state_11427[(2)]);
var inst_11410 = (inst_11409__$1 == null);
var inst_11411 = cljs.core.not.call(null,inst_11410);
var state_11427__$1 = (function (){var statearr_11429 = state_11427;
(statearr_11429[(7)] = inst_11409__$1);

return statearr_11429;
})();
if(inst_11411){
var statearr_11430_11455 = state_11427__$1;
(statearr_11430_11455[(1)] = (8));

} else {
var statearr_11431_11456 = state_11427__$1;
(statearr_11431_11456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (1))){
var inst_11404 = (0);
var state_11427__$1 = (function (){var statearr_11432 = state_11427;
(statearr_11432[(8)] = inst_11404);

return statearr_11432;
})();
var statearr_11433_11457 = state_11427__$1;
(statearr_11433_11457[(2)] = null);

(statearr_11433_11457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (4))){
var state_11427__$1 = state_11427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11427__$1,(7),ch);
} else {
if((state_val_11428 === (6))){
var inst_11422 = (state_11427[(2)]);
var state_11427__$1 = state_11427;
var statearr_11434_11458 = state_11427__$1;
(statearr_11434_11458[(2)] = inst_11422);

(statearr_11434_11458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (3))){
var inst_11424 = (state_11427[(2)]);
var inst_11425 = cljs.core.async.close_BANG_.call(null,out);
var state_11427__$1 = (function (){var statearr_11435 = state_11427;
(statearr_11435[(9)] = inst_11424);

return statearr_11435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11427__$1,inst_11425);
} else {
if((state_val_11428 === (2))){
var inst_11404 = (state_11427[(8)]);
var inst_11406 = (inst_11404 < n);
var state_11427__$1 = state_11427;
if(cljs.core.truth_(inst_11406)){
var statearr_11436_11459 = state_11427__$1;
(statearr_11436_11459[(1)] = (4));

} else {
var statearr_11437_11460 = state_11427__$1;
(statearr_11437_11460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (11))){
var inst_11404 = (state_11427[(8)]);
var inst_11414 = (state_11427[(2)]);
var inst_11415 = (inst_11404 + (1));
var inst_11404__$1 = inst_11415;
var state_11427__$1 = (function (){var statearr_11438 = state_11427;
(statearr_11438[(10)] = inst_11414);

(statearr_11438[(8)] = inst_11404__$1);

return statearr_11438;
})();
var statearr_11439_11461 = state_11427__$1;
(statearr_11439_11461[(2)] = null);

(statearr_11439_11461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (9))){
var state_11427__$1 = state_11427;
var statearr_11440_11462 = state_11427__$1;
(statearr_11440_11462[(2)] = null);

(statearr_11440_11462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (5))){
var state_11427__$1 = state_11427;
var statearr_11441_11463 = state_11427__$1;
(statearr_11441_11463[(2)] = null);

(statearr_11441_11463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (10))){
var inst_11419 = (state_11427[(2)]);
var state_11427__$1 = state_11427;
var statearr_11442_11464 = state_11427__$1;
(statearr_11442_11464[(2)] = inst_11419);

(statearr_11442_11464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11428 === (8))){
var inst_11409 = (state_11427[(7)]);
var state_11427__$1 = state_11427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11427__$1,(11),out,inst_11409);
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
});})(c__9118__auto___11454,out))
;
return ((function (switch__9103__auto__,c__9118__auto___11454,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11446[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11446[(1)] = (1));

return statearr_11446;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11427){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11447){if((e11447 instanceof Object)){
var ex__9107__auto__ = e11447;
var statearr_11448_11465 = state_11427;
(statearr_11448_11465[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11466 = state_11427;
state_11427 = G__11466;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11454,out))
})();
var state__9120__auto__ = (function (){var statearr_11449 = f__9119__auto__.call(null);
(statearr_11449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11454);

return statearr_11449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11454,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11474 = (function (f,ch,meta11475){
this.f = f;
this.ch = ch;
this.meta11475 = meta11475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11476,meta11475__$1){
var self__ = this;
var _11476__$1 = this;
return (new cljs.core.async.t_cljs$core$async11474(self__.f,self__.ch,meta11475__$1));
});

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11476){
var self__ = this;
var _11476__$1 = this;
return self__.meta11475;
});

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11477 = (function (f,ch,meta11475,_,fn1,meta11478){
this.f = f;
this.ch = ch;
this.meta11475 = meta11475;
this._ = _;
this.fn1 = fn1;
this.meta11478 = meta11478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11479,meta11478__$1){
var self__ = this;
var _11479__$1 = this;
return (new cljs.core.async.t_cljs$core$async11477(self__.f,self__.ch,self__.meta11475,self__._,self__.fn1,meta11478__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11479){
var self__ = this;
var _11479__$1 = this;
return self__.meta11478;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11467_SHARP_){
return f1.call(null,(((p1__11467_SHARP_ == null))?null:self__.f.call(null,p1__11467_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11475","meta11475",100624535,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11474","cljs.core.async/t_cljs$core$async11474",-2099928789,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11478","meta11478",404865831,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11477";

cljs.core.async.t_cljs$core$async11477.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11477");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11477 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11477(f__$1,ch__$1,meta11475__$1,___$2,fn1__$1,meta11478){
return (new cljs.core.async.t_cljs$core$async11477(f__$1,ch__$1,meta11475__$1,___$2,fn1__$1,meta11478));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11477(self__.f,self__.ch,self__.meta11475,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6531__auto__ = ret;
if(cljs.core.truth_(and__6531__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6531__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11475","meta11475",100624535,null)], null);
});

cljs.core.async.t_cljs$core$async11474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11474";

cljs.core.async.t_cljs$core$async11474.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11474");
});

cljs.core.async.__GT_t_cljs$core$async11474 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11474(f__$1,ch__$1,meta11475){
return (new cljs.core.async.t_cljs$core$async11474(f__$1,ch__$1,meta11475));
});

}

return (new cljs.core.async.t_cljs$core$async11474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11483 = (function (f,ch,meta11484){
this.f = f;
this.ch = ch;
this.meta11484 = meta11484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11485,meta11484__$1){
var self__ = this;
var _11485__$1 = this;
return (new cljs.core.async.t_cljs$core$async11483(self__.f,self__.ch,meta11484__$1));
});

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11485){
var self__ = this;
var _11485__$1 = this;
return self__.meta11484;
});

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11484","meta11484",-991028123,null)], null);
});

cljs.core.async.t_cljs$core$async11483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11483";

cljs.core.async.t_cljs$core$async11483.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11483");
});

cljs.core.async.__GT_t_cljs$core$async11483 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11483(f__$1,ch__$1,meta11484){
return (new cljs.core.async.t_cljs$core$async11483(f__$1,ch__$1,meta11484));
});

}

return (new cljs.core.async.t_cljs$core$async11483(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11489 = (function (p,ch,meta11490){
this.p = p;
this.ch = ch;
this.meta11490 = meta11490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11491,meta11490__$1){
var self__ = this;
var _11491__$1 = this;
return (new cljs.core.async.t_cljs$core$async11489(self__.p,self__.ch,meta11490__$1));
});

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11491){
var self__ = this;
var _11491__$1 = this;
return self__.meta11490;
});

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11490","meta11490",1602611099,null)], null);
});

cljs.core.async.t_cljs$core$async11489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11489";

cljs.core.async.t_cljs$core$async11489.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11489");
});

cljs.core.async.__GT_t_cljs$core$async11489 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11489(p__$1,ch__$1,meta11490){
return (new cljs.core.async.t_cljs$core$async11489(p__$1,ch__$1,meta11490));
});

}

return (new cljs.core.async.t_cljs$core$async11489(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11492 = [];
var len__7651__auto___11536 = arguments.length;
var i__7652__auto___11537 = (0);
while(true){
if((i__7652__auto___11537 < len__7651__auto___11536)){
args11492.push((arguments[i__7652__auto___11537]));

var G__11538 = (i__7652__auto___11537 + (1));
i__7652__auto___11537 = G__11538;
continue;
} else {
}
break;
}

var G__11494 = args11492.length;
switch (G__11494) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11492.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___11540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11540,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11540,out){
return (function (state_11515){
var state_val_11516 = (state_11515[(1)]);
if((state_val_11516 === (7))){
var inst_11511 = (state_11515[(2)]);
var state_11515__$1 = state_11515;
var statearr_11517_11541 = state_11515__$1;
(statearr_11517_11541[(2)] = inst_11511);

(statearr_11517_11541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (1))){
var state_11515__$1 = state_11515;
var statearr_11518_11542 = state_11515__$1;
(statearr_11518_11542[(2)] = null);

(statearr_11518_11542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (4))){
var inst_11497 = (state_11515[(7)]);
var inst_11497__$1 = (state_11515[(2)]);
var inst_11498 = (inst_11497__$1 == null);
var state_11515__$1 = (function (){var statearr_11519 = state_11515;
(statearr_11519[(7)] = inst_11497__$1);

return statearr_11519;
})();
if(cljs.core.truth_(inst_11498)){
var statearr_11520_11543 = state_11515__$1;
(statearr_11520_11543[(1)] = (5));

} else {
var statearr_11521_11544 = state_11515__$1;
(statearr_11521_11544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (6))){
var inst_11497 = (state_11515[(7)]);
var inst_11502 = p.call(null,inst_11497);
var state_11515__$1 = state_11515;
if(cljs.core.truth_(inst_11502)){
var statearr_11522_11545 = state_11515__$1;
(statearr_11522_11545[(1)] = (8));

} else {
var statearr_11523_11546 = state_11515__$1;
(statearr_11523_11546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (3))){
var inst_11513 = (state_11515[(2)]);
var state_11515__$1 = state_11515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11515__$1,inst_11513);
} else {
if((state_val_11516 === (2))){
var state_11515__$1 = state_11515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11515__$1,(4),ch);
} else {
if((state_val_11516 === (11))){
var inst_11505 = (state_11515[(2)]);
var state_11515__$1 = state_11515;
var statearr_11524_11547 = state_11515__$1;
(statearr_11524_11547[(2)] = inst_11505);

(statearr_11524_11547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (9))){
var state_11515__$1 = state_11515;
var statearr_11525_11548 = state_11515__$1;
(statearr_11525_11548[(2)] = null);

(statearr_11525_11548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (5))){
var inst_11500 = cljs.core.async.close_BANG_.call(null,out);
var state_11515__$1 = state_11515;
var statearr_11526_11549 = state_11515__$1;
(statearr_11526_11549[(2)] = inst_11500);

(statearr_11526_11549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (10))){
var inst_11508 = (state_11515[(2)]);
var state_11515__$1 = (function (){var statearr_11527 = state_11515;
(statearr_11527[(8)] = inst_11508);

return statearr_11527;
})();
var statearr_11528_11550 = state_11515__$1;
(statearr_11528_11550[(2)] = null);

(statearr_11528_11550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11516 === (8))){
var inst_11497 = (state_11515[(7)]);
var state_11515__$1 = state_11515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11515__$1,(11),out,inst_11497);
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
});})(c__9118__auto___11540,out))
;
return ((function (switch__9103__auto__,c__9118__auto___11540,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11532 = [null,null,null,null,null,null,null,null,null];
(statearr_11532[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11532[(1)] = (1));

return statearr_11532;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11515){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11533){if((e11533 instanceof Object)){
var ex__9107__auto__ = e11533;
var statearr_11534_11551 = state_11515;
(statearr_11534_11551[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11552 = state_11515;
state_11515 = G__11552;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11540,out))
})();
var state__9120__auto__ = (function (){var statearr_11535 = f__9119__auto__.call(null);
(statearr_11535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11540);

return statearr_11535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11540,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11553 = [];
var len__7651__auto___11556 = arguments.length;
var i__7652__auto___11557 = (0);
while(true){
if((i__7652__auto___11557 < len__7651__auto___11556)){
args11553.push((arguments[i__7652__auto___11557]));

var G__11558 = (i__7652__auto___11557 + (1));
i__7652__auto___11557 = G__11558;
continue;
} else {
}
break;
}

var G__11555 = args11553.length;
switch (G__11555) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11553.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto__){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto__){
return (function (state_11725){
var state_val_11726 = (state_11725[(1)]);
if((state_val_11726 === (7))){
var inst_11721 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
var statearr_11727_11768 = state_11725__$1;
(statearr_11727_11768[(2)] = inst_11721);

(statearr_11727_11768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (20))){
var inst_11691 = (state_11725[(7)]);
var inst_11702 = (state_11725[(2)]);
var inst_11703 = cljs.core.next.call(null,inst_11691);
var inst_11677 = inst_11703;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11725__$1 = (function (){var statearr_11728 = state_11725;
(statearr_11728[(8)] = inst_11680);

(statearr_11728[(9)] = inst_11702);

(statearr_11728[(10)] = inst_11677);

(statearr_11728[(11)] = inst_11678);

(statearr_11728[(12)] = inst_11679);

return statearr_11728;
})();
var statearr_11729_11769 = state_11725__$1;
(statearr_11729_11769[(2)] = null);

(statearr_11729_11769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (1))){
var state_11725__$1 = state_11725;
var statearr_11730_11770 = state_11725__$1;
(statearr_11730_11770[(2)] = null);

(statearr_11730_11770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (4))){
var inst_11666 = (state_11725[(13)]);
var inst_11666__$1 = (state_11725[(2)]);
var inst_11667 = (inst_11666__$1 == null);
var state_11725__$1 = (function (){var statearr_11731 = state_11725;
(statearr_11731[(13)] = inst_11666__$1);

return statearr_11731;
})();
if(cljs.core.truth_(inst_11667)){
var statearr_11732_11771 = state_11725__$1;
(statearr_11732_11771[(1)] = (5));

} else {
var statearr_11733_11772 = state_11725__$1;
(statearr_11733_11772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (15))){
var state_11725__$1 = state_11725;
var statearr_11737_11773 = state_11725__$1;
(statearr_11737_11773[(2)] = null);

(statearr_11737_11773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (21))){
var state_11725__$1 = state_11725;
var statearr_11738_11774 = state_11725__$1;
(statearr_11738_11774[(2)] = null);

(statearr_11738_11774[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (13))){
var inst_11680 = (state_11725[(8)]);
var inst_11677 = (state_11725[(10)]);
var inst_11678 = (state_11725[(11)]);
var inst_11679 = (state_11725[(12)]);
var inst_11687 = (state_11725[(2)]);
var inst_11688 = (inst_11680 + (1));
var tmp11734 = inst_11677;
var tmp11735 = inst_11678;
var tmp11736 = inst_11679;
var inst_11677__$1 = tmp11734;
var inst_11678__$1 = tmp11735;
var inst_11679__$1 = tmp11736;
var inst_11680__$1 = inst_11688;
var state_11725__$1 = (function (){var statearr_11739 = state_11725;
(statearr_11739[(14)] = inst_11687);

(statearr_11739[(8)] = inst_11680__$1);

(statearr_11739[(10)] = inst_11677__$1);

(statearr_11739[(11)] = inst_11678__$1);

(statearr_11739[(12)] = inst_11679__$1);

return statearr_11739;
})();
var statearr_11740_11775 = state_11725__$1;
(statearr_11740_11775[(2)] = null);

(statearr_11740_11775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (22))){
var state_11725__$1 = state_11725;
var statearr_11741_11776 = state_11725__$1;
(statearr_11741_11776[(2)] = null);

(statearr_11741_11776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (6))){
var inst_11666 = (state_11725[(13)]);
var inst_11675 = f.call(null,inst_11666);
var inst_11676 = cljs.core.seq.call(null,inst_11675);
var inst_11677 = inst_11676;
var inst_11678 = null;
var inst_11679 = (0);
var inst_11680 = (0);
var state_11725__$1 = (function (){var statearr_11742 = state_11725;
(statearr_11742[(8)] = inst_11680);

(statearr_11742[(10)] = inst_11677);

(statearr_11742[(11)] = inst_11678);

(statearr_11742[(12)] = inst_11679);

return statearr_11742;
})();
var statearr_11743_11777 = state_11725__$1;
(statearr_11743_11777[(2)] = null);

(statearr_11743_11777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (17))){
var inst_11691 = (state_11725[(7)]);
var inst_11695 = cljs.core.chunk_first.call(null,inst_11691);
var inst_11696 = cljs.core.chunk_rest.call(null,inst_11691);
var inst_11697 = cljs.core.count.call(null,inst_11695);
var inst_11677 = inst_11696;
var inst_11678 = inst_11695;
var inst_11679 = inst_11697;
var inst_11680 = (0);
var state_11725__$1 = (function (){var statearr_11744 = state_11725;
(statearr_11744[(8)] = inst_11680);

(statearr_11744[(10)] = inst_11677);

(statearr_11744[(11)] = inst_11678);

(statearr_11744[(12)] = inst_11679);

return statearr_11744;
})();
var statearr_11745_11778 = state_11725__$1;
(statearr_11745_11778[(2)] = null);

(statearr_11745_11778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (3))){
var inst_11723 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11725__$1,inst_11723);
} else {
if((state_val_11726 === (12))){
var inst_11711 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
var statearr_11746_11779 = state_11725__$1;
(statearr_11746_11779[(2)] = inst_11711);

(statearr_11746_11779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (2))){
var state_11725__$1 = state_11725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11725__$1,(4),in$);
} else {
if((state_val_11726 === (23))){
var inst_11719 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
var statearr_11747_11780 = state_11725__$1;
(statearr_11747_11780[(2)] = inst_11719);

(statearr_11747_11780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (19))){
var inst_11706 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
var statearr_11748_11781 = state_11725__$1;
(statearr_11748_11781[(2)] = inst_11706);

(statearr_11748_11781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (11))){
var inst_11691 = (state_11725[(7)]);
var inst_11677 = (state_11725[(10)]);
var inst_11691__$1 = cljs.core.seq.call(null,inst_11677);
var state_11725__$1 = (function (){var statearr_11749 = state_11725;
(statearr_11749[(7)] = inst_11691__$1);

return statearr_11749;
})();
if(inst_11691__$1){
var statearr_11750_11782 = state_11725__$1;
(statearr_11750_11782[(1)] = (14));

} else {
var statearr_11751_11783 = state_11725__$1;
(statearr_11751_11783[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (9))){
var inst_11713 = (state_11725[(2)]);
var inst_11714 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11725__$1 = (function (){var statearr_11752 = state_11725;
(statearr_11752[(15)] = inst_11713);

return statearr_11752;
})();
if(cljs.core.truth_(inst_11714)){
var statearr_11753_11784 = state_11725__$1;
(statearr_11753_11784[(1)] = (21));

} else {
var statearr_11754_11785 = state_11725__$1;
(statearr_11754_11785[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (5))){
var inst_11669 = cljs.core.async.close_BANG_.call(null,out);
var state_11725__$1 = state_11725;
var statearr_11755_11786 = state_11725__$1;
(statearr_11755_11786[(2)] = inst_11669);

(statearr_11755_11786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (14))){
var inst_11691 = (state_11725[(7)]);
var inst_11693 = cljs.core.chunked_seq_QMARK_.call(null,inst_11691);
var state_11725__$1 = state_11725;
if(inst_11693){
var statearr_11756_11787 = state_11725__$1;
(statearr_11756_11787[(1)] = (17));

} else {
var statearr_11757_11788 = state_11725__$1;
(statearr_11757_11788[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (16))){
var inst_11709 = (state_11725[(2)]);
var state_11725__$1 = state_11725;
var statearr_11758_11789 = state_11725__$1;
(statearr_11758_11789[(2)] = inst_11709);

(statearr_11758_11789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11726 === (10))){
var inst_11680 = (state_11725[(8)]);
var inst_11678 = (state_11725[(11)]);
var inst_11685 = cljs.core._nth.call(null,inst_11678,inst_11680);
var state_11725__$1 = state_11725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11725__$1,(13),out,inst_11685);
} else {
if((state_val_11726 === (18))){
var inst_11691 = (state_11725[(7)]);
var inst_11700 = cljs.core.first.call(null,inst_11691);
var state_11725__$1 = state_11725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11725__$1,(20),out,inst_11700);
} else {
if((state_val_11726 === (8))){
var inst_11680 = (state_11725[(8)]);
var inst_11679 = (state_11725[(12)]);
var inst_11682 = (inst_11680 < inst_11679);
var inst_11683 = inst_11682;
var state_11725__$1 = state_11725;
if(cljs.core.truth_(inst_11683)){
var statearr_11759_11790 = state_11725__$1;
(statearr_11759_11790[(1)] = (10));

} else {
var statearr_11760_11791 = state_11725__$1;
(statearr_11760_11791[(1)] = (11));

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
});})(c__9118__auto__))
;
return ((function (switch__9103__auto__,c__9118__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____0 = (function (){
var statearr_11764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11764[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__);

(statearr_11764[(1)] = (1));

return statearr_11764;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____1 = (function (state_11725){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11765){if((e11765 instanceof Object)){
var ex__9107__auto__ = e11765;
var statearr_11766_11792 = state_11725;
(statearr_11766_11792[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11793 = state_11725;
state_11725 = G__11793;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__ = function(state_11725){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____1.call(this,state_11725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto__))
})();
var state__9120__auto__ = (function (){var statearr_11767 = f__9119__auto__.call(null);
(statearr_11767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto__);

return statearr_11767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto__))
);

return c__9118__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11794 = [];
var len__7651__auto___11797 = arguments.length;
var i__7652__auto___11798 = (0);
while(true){
if((i__7652__auto___11798 < len__7651__auto___11797)){
args11794.push((arguments[i__7652__auto___11798]));

var G__11799 = (i__7652__auto___11798 + (1));
i__7652__auto___11798 = G__11799;
continue;
} else {
}
break;
}

var G__11796 = args11794.length;
switch (G__11796) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11794.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11801 = [];
var len__7651__auto___11804 = arguments.length;
var i__7652__auto___11805 = (0);
while(true){
if((i__7652__auto___11805 < len__7651__auto___11804)){
args11801.push((arguments[i__7652__auto___11805]));

var G__11806 = (i__7652__auto___11805 + (1));
i__7652__auto___11805 = G__11806;
continue;
} else {
}
break;
}

var G__11803 = args11801.length;
switch (G__11803) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11801.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11808 = [];
var len__7651__auto___11859 = arguments.length;
var i__7652__auto___11860 = (0);
while(true){
if((i__7652__auto___11860 < len__7651__auto___11859)){
args11808.push((arguments[i__7652__auto___11860]));

var G__11861 = (i__7652__auto___11860 + (1));
i__7652__auto___11860 = G__11861;
continue;
} else {
}
break;
}

var G__11810 = args11808.length;
switch (G__11810) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11808.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___11863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11863,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11863,out){
return (function (state_11834){
var state_val_11835 = (state_11834[(1)]);
if((state_val_11835 === (7))){
var inst_11829 = (state_11834[(2)]);
var state_11834__$1 = state_11834;
var statearr_11836_11864 = state_11834__$1;
(statearr_11836_11864[(2)] = inst_11829);

(statearr_11836_11864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (1))){
var inst_11811 = null;
var state_11834__$1 = (function (){var statearr_11837 = state_11834;
(statearr_11837[(7)] = inst_11811);

return statearr_11837;
})();
var statearr_11838_11865 = state_11834__$1;
(statearr_11838_11865[(2)] = null);

(statearr_11838_11865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (4))){
var inst_11814 = (state_11834[(8)]);
var inst_11814__$1 = (state_11834[(2)]);
var inst_11815 = (inst_11814__$1 == null);
var inst_11816 = cljs.core.not.call(null,inst_11815);
var state_11834__$1 = (function (){var statearr_11839 = state_11834;
(statearr_11839[(8)] = inst_11814__$1);

return statearr_11839;
})();
if(inst_11816){
var statearr_11840_11866 = state_11834__$1;
(statearr_11840_11866[(1)] = (5));

} else {
var statearr_11841_11867 = state_11834__$1;
(statearr_11841_11867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (6))){
var state_11834__$1 = state_11834;
var statearr_11842_11868 = state_11834__$1;
(statearr_11842_11868[(2)] = null);

(statearr_11842_11868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (3))){
var inst_11831 = (state_11834[(2)]);
var inst_11832 = cljs.core.async.close_BANG_.call(null,out);
var state_11834__$1 = (function (){var statearr_11843 = state_11834;
(statearr_11843[(9)] = inst_11831);

return statearr_11843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11834__$1,inst_11832);
} else {
if((state_val_11835 === (2))){
var state_11834__$1 = state_11834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11834__$1,(4),ch);
} else {
if((state_val_11835 === (11))){
var inst_11814 = (state_11834[(8)]);
var inst_11823 = (state_11834[(2)]);
var inst_11811 = inst_11814;
var state_11834__$1 = (function (){var statearr_11844 = state_11834;
(statearr_11844[(10)] = inst_11823);

(statearr_11844[(7)] = inst_11811);

return statearr_11844;
})();
var statearr_11845_11869 = state_11834__$1;
(statearr_11845_11869[(2)] = null);

(statearr_11845_11869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (9))){
var inst_11814 = (state_11834[(8)]);
var state_11834__$1 = state_11834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11834__$1,(11),out,inst_11814);
} else {
if((state_val_11835 === (5))){
var inst_11814 = (state_11834[(8)]);
var inst_11811 = (state_11834[(7)]);
var inst_11818 = cljs.core._EQ_.call(null,inst_11814,inst_11811);
var state_11834__$1 = state_11834;
if(inst_11818){
var statearr_11847_11870 = state_11834__$1;
(statearr_11847_11870[(1)] = (8));

} else {
var statearr_11848_11871 = state_11834__$1;
(statearr_11848_11871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (10))){
var inst_11826 = (state_11834[(2)]);
var state_11834__$1 = state_11834;
var statearr_11849_11872 = state_11834__$1;
(statearr_11849_11872[(2)] = inst_11826);

(statearr_11849_11872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11835 === (8))){
var inst_11811 = (state_11834[(7)]);
var tmp11846 = inst_11811;
var inst_11811__$1 = tmp11846;
var state_11834__$1 = (function (){var statearr_11850 = state_11834;
(statearr_11850[(7)] = inst_11811__$1);

return statearr_11850;
})();
var statearr_11851_11873 = state_11834__$1;
(statearr_11851_11873[(2)] = null);

(statearr_11851_11873[(1)] = (2));


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
});})(c__9118__auto___11863,out))
;
return ((function (switch__9103__auto__,c__9118__auto___11863,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11855[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11855[(1)] = (1));

return statearr_11855;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11834){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11856){if((e11856 instanceof Object)){
var ex__9107__auto__ = e11856;
var statearr_11857_11874 = state_11834;
(statearr_11857_11874[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11875 = state_11834;
state_11834 = G__11875;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11863,out))
})();
var state__9120__auto__ = (function (){var statearr_11858 = f__9119__auto__.call(null);
(statearr_11858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11863);

return statearr_11858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11863,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11876 = [];
var len__7651__auto___11946 = arguments.length;
var i__7652__auto___11947 = (0);
while(true){
if((i__7652__auto___11947 < len__7651__auto___11946)){
args11876.push((arguments[i__7652__auto___11947]));

var G__11948 = (i__7652__auto___11947 + (1));
i__7652__auto___11947 = G__11948;
continue;
} else {
}
break;
}

var G__11878 = args11876.length;
switch (G__11878) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11876.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___11950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___11950,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___11950,out){
return (function (state_11916){
var state_val_11917 = (state_11916[(1)]);
if((state_val_11917 === (7))){
var inst_11912 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11918_11951 = state_11916__$1;
(statearr_11918_11951[(2)] = inst_11912);

(statearr_11918_11951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (1))){
var inst_11879 = (new Array(n));
var inst_11880 = inst_11879;
var inst_11881 = (0);
var state_11916__$1 = (function (){var statearr_11919 = state_11916;
(statearr_11919[(7)] = inst_11881);

(statearr_11919[(8)] = inst_11880);

return statearr_11919;
})();
var statearr_11920_11952 = state_11916__$1;
(statearr_11920_11952[(2)] = null);

(statearr_11920_11952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (4))){
var inst_11884 = (state_11916[(9)]);
var inst_11884__$1 = (state_11916[(2)]);
var inst_11885 = (inst_11884__$1 == null);
var inst_11886 = cljs.core.not.call(null,inst_11885);
var state_11916__$1 = (function (){var statearr_11921 = state_11916;
(statearr_11921[(9)] = inst_11884__$1);

return statearr_11921;
})();
if(inst_11886){
var statearr_11922_11953 = state_11916__$1;
(statearr_11922_11953[(1)] = (5));

} else {
var statearr_11923_11954 = state_11916__$1;
(statearr_11923_11954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (15))){
var inst_11906 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11924_11955 = state_11916__$1;
(statearr_11924_11955[(2)] = inst_11906);

(statearr_11924_11955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (13))){
var state_11916__$1 = state_11916;
var statearr_11925_11956 = state_11916__$1;
(statearr_11925_11956[(2)] = null);

(statearr_11925_11956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (6))){
var inst_11881 = (state_11916[(7)]);
var inst_11902 = (inst_11881 > (0));
var state_11916__$1 = state_11916;
if(cljs.core.truth_(inst_11902)){
var statearr_11926_11957 = state_11916__$1;
(statearr_11926_11957[(1)] = (12));

} else {
var statearr_11927_11958 = state_11916__$1;
(statearr_11927_11958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (3))){
var inst_11914 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11916__$1,inst_11914);
} else {
if((state_val_11917 === (12))){
var inst_11880 = (state_11916[(8)]);
var inst_11904 = cljs.core.vec.call(null,inst_11880);
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11916__$1,(15),out,inst_11904);
} else {
if((state_val_11917 === (2))){
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11916__$1,(4),ch);
} else {
if((state_val_11917 === (11))){
var inst_11896 = (state_11916[(2)]);
var inst_11897 = (new Array(n));
var inst_11880 = inst_11897;
var inst_11881 = (0);
var state_11916__$1 = (function (){var statearr_11928 = state_11916;
(statearr_11928[(10)] = inst_11896);

(statearr_11928[(7)] = inst_11881);

(statearr_11928[(8)] = inst_11880);

return statearr_11928;
})();
var statearr_11929_11959 = state_11916__$1;
(statearr_11929_11959[(2)] = null);

(statearr_11929_11959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (9))){
var inst_11880 = (state_11916[(8)]);
var inst_11894 = cljs.core.vec.call(null,inst_11880);
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11916__$1,(11),out,inst_11894);
} else {
if((state_val_11917 === (5))){
var inst_11884 = (state_11916[(9)]);
var inst_11889 = (state_11916[(11)]);
var inst_11881 = (state_11916[(7)]);
var inst_11880 = (state_11916[(8)]);
var inst_11888 = (inst_11880[inst_11881] = inst_11884);
var inst_11889__$1 = (inst_11881 + (1));
var inst_11890 = (inst_11889__$1 < n);
var state_11916__$1 = (function (){var statearr_11930 = state_11916;
(statearr_11930[(12)] = inst_11888);

(statearr_11930[(11)] = inst_11889__$1);

return statearr_11930;
})();
if(cljs.core.truth_(inst_11890)){
var statearr_11931_11960 = state_11916__$1;
(statearr_11931_11960[(1)] = (8));

} else {
var statearr_11932_11961 = state_11916__$1;
(statearr_11932_11961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (14))){
var inst_11909 = (state_11916[(2)]);
var inst_11910 = cljs.core.async.close_BANG_.call(null,out);
var state_11916__$1 = (function (){var statearr_11934 = state_11916;
(statearr_11934[(13)] = inst_11909);

return statearr_11934;
})();
var statearr_11935_11962 = state_11916__$1;
(statearr_11935_11962[(2)] = inst_11910);

(statearr_11935_11962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (10))){
var inst_11900 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11936_11963 = state_11916__$1;
(statearr_11936_11963[(2)] = inst_11900);

(statearr_11936_11963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (8))){
var inst_11889 = (state_11916[(11)]);
var inst_11880 = (state_11916[(8)]);
var tmp11933 = inst_11880;
var inst_11880__$1 = tmp11933;
var inst_11881 = inst_11889;
var state_11916__$1 = (function (){var statearr_11937 = state_11916;
(statearr_11937[(7)] = inst_11881);

(statearr_11937[(8)] = inst_11880__$1);

return statearr_11937;
})();
var statearr_11938_11964 = state_11916__$1;
(statearr_11938_11964[(2)] = null);

(statearr_11938_11964[(1)] = (2));


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
});})(c__9118__auto___11950,out))
;
return ((function (switch__9103__auto__,c__9118__auto___11950,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_11942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11942[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_11942[(1)] = (1));

return statearr_11942;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_11916){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_11916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e11943){if((e11943 instanceof Object)){
var ex__9107__auto__ = e11943;
var statearr_11944_11965 = state_11916;
(statearr_11944_11965[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11966 = state_11916;
state_11916 = G__11966;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_11916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_11916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___11950,out))
})();
var state__9120__auto__ = (function (){var statearr_11945 = f__9119__auto__.call(null);
(statearr_11945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___11950);

return statearr_11945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___11950,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11967 = [];
var len__7651__auto___12041 = arguments.length;
var i__7652__auto___12042 = (0);
while(true){
if((i__7652__auto___12042 < len__7651__auto___12041)){
args11967.push((arguments[i__7652__auto___12042]));

var G__12043 = (i__7652__auto___12042 + (1));
i__7652__auto___12042 = G__12043;
continue;
} else {
}
break;
}

var G__11969 = args11967.length;
switch (G__11969) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11967.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9118__auto___12045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9118__auto___12045,out){
return (function (){
var f__9119__auto__ = (function (){var switch__9103__auto__ = ((function (c__9118__auto___12045,out){
return (function (state_12011){
var state_val_12012 = (state_12011[(1)]);
if((state_val_12012 === (7))){
var inst_12007 = (state_12011[(2)]);
var state_12011__$1 = state_12011;
var statearr_12013_12046 = state_12011__$1;
(statearr_12013_12046[(2)] = inst_12007);

(statearr_12013_12046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (1))){
var inst_11970 = [];
var inst_11971 = inst_11970;
var inst_11972 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12011__$1 = (function (){var statearr_12014 = state_12011;
(statearr_12014[(7)] = inst_11972);

(statearr_12014[(8)] = inst_11971);

return statearr_12014;
})();
var statearr_12015_12047 = state_12011__$1;
(statearr_12015_12047[(2)] = null);

(statearr_12015_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (4))){
var inst_11975 = (state_12011[(9)]);
var inst_11975__$1 = (state_12011[(2)]);
var inst_11976 = (inst_11975__$1 == null);
var inst_11977 = cljs.core.not.call(null,inst_11976);
var state_12011__$1 = (function (){var statearr_12016 = state_12011;
(statearr_12016[(9)] = inst_11975__$1);

return statearr_12016;
})();
if(inst_11977){
var statearr_12017_12048 = state_12011__$1;
(statearr_12017_12048[(1)] = (5));

} else {
var statearr_12018_12049 = state_12011__$1;
(statearr_12018_12049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (15))){
var inst_12001 = (state_12011[(2)]);
var state_12011__$1 = state_12011;
var statearr_12019_12050 = state_12011__$1;
(statearr_12019_12050[(2)] = inst_12001);

(statearr_12019_12050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (13))){
var state_12011__$1 = state_12011;
var statearr_12020_12051 = state_12011__$1;
(statearr_12020_12051[(2)] = null);

(statearr_12020_12051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (6))){
var inst_11971 = (state_12011[(8)]);
var inst_11996 = inst_11971.length;
var inst_11997 = (inst_11996 > (0));
var state_12011__$1 = state_12011;
if(cljs.core.truth_(inst_11997)){
var statearr_12021_12052 = state_12011__$1;
(statearr_12021_12052[(1)] = (12));

} else {
var statearr_12022_12053 = state_12011__$1;
(statearr_12022_12053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (3))){
var inst_12009 = (state_12011[(2)]);
var state_12011__$1 = state_12011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12011__$1,inst_12009);
} else {
if((state_val_12012 === (12))){
var inst_11971 = (state_12011[(8)]);
var inst_11999 = cljs.core.vec.call(null,inst_11971);
var state_12011__$1 = state_12011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12011__$1,(15),out,inst_11999);
} else {
if((state_val_12012 === (2))){
var state_12011__$1 = state_12011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12011__$1,(4),ch);
} else {
if((state_val_12012 === (11))){
var inst_11979 = (state_12011[(10)]);
var inst_11975 = (state_12011[(9)]);
var inst_11989 = (state_12011[(2)]);
var inst_11990 = [];
var inst_11991 = inst_11990.push(inst_11975);
var inst_11971 = inst_11990;
var inst_11972 = inst_11979;
var state_12011__$1 = (function (){var statearr_12023 = state_12011;
(statearr_12023[(7)] = inst_11972);

(statearr_12023[(8)] = inst_11971);

(statearr_12023[(11)] = inst_11991);

(statearr_12023[(12)] = inst_11989);

return statearr_12023;
})();
var statearr_12024_12054 = state_12011__$1;
(statearr_12024_12054[(2)] = null);

(statearr_12024_12054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (9))){
var inst_11971 = (state_12011[(8)]);
var inst_11987 = cljs.core.vec.call(null,inst_11971);
var state_12011__$1 = state_12011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12011__$1,(11),out,inst_11987);
} else {
if((state_val_12012 === (5))){
var inst_11979 = (state_12011[(10)]);
var inst_11972 = (state_12011[(7)]);
var inst_11975 = (state_12011[(9)]);
var inst_11979__$1 = f.call(null,inst_11975);
var inst_11980 = cljs.core._EQ_.call(null,inst_11979__$1,inst_11972);
var inst_11981 = cljs.core.keyword_identical_QMARK_.call(null,inst_11972,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11982 = (inst_11980) || (inst_11981);
var state_12011__$1 = (function (){var statearr_12025 = state_12011;
(statearr_12025[(10)] = inst_11979__$1);

return statearr_12025;
})();
if(cljs.core.truth_(inst_11982)){
var statearr_12026_12055 = state_12011__$1;
(statearr_12026_12055[(1)] = (8));

} else {
var statearr_12027_12056 = state_12011__$1;
(statearr_12027_12056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (14))){
var inst_12004 = (state_12011[(2)]);
var inst_12005 = cljs.core.async.close_BANG_.call(null,out);
var state_12011__$1 = (function (){var statearr_12029 = state_12011;
(statearr_12029[(13)] = inst_12004);

return statearr_12029;
})();
var statearr_12030_12057 = state_12011__$1;
(statearr_12030_12057[(2)] = inst_12005);

(statearr_12030_12057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (10))){
var inst_11994 = (state_12011[(2)]);
var state_12011__$1 = state_12011;
var statearr_12031_12058 = state_12011__$1;
(statearr_12031_12058[(2)] = inst_11994);

(statearr_12031_12058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12012 === (8))){
var inst_11979 = (state_12011[(10)]);
var inst_11971 = (state_12011[(8)]);
var inst_11975 = (state_12011[(9)]);
var inst_11984 = inst_11971.push(inst_11975);
var tmp12028 = inst_11971;
var inst_11971__$1 = tmp12028;
var inst_11972 = inst_11979;
var state_12011__$1 = (function (){var statearr_12032 = state_12011;
(statearr_12032[(7)] = inst_11972);

(statearr_12032[(8)] = inst_11971__$1);

(statearr_12032[(14)] = inst_11984);

return statearr_12032;
})();
var statearr_12033_12059 = state_12011__$1;
(statearr_12033_12059[(2)] = null);

(statearr_12033_12059[(1)] = (2));


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
});})(c__9118__auto___12045,out))
;
return ((function (switch__9103__auto__,c__9118__auto___12045,out){
return (function() {
var cljs$core$async$state_machine__9104__auto__ = null;
var cljs$core$async$state_machine__9104__auto____0 = (function (){
var statearr_12037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12037[(0)] = cljs$core$async$state_machine__9104__auto__);

(statearr_12037[(1)] = (1));

return statearr_12037;
});
var cljs$core$async$state_machine__9104__auto____1 = (function (state_12011){
while(true){
var ret_value__9105__auto__ = (function (){try{while(true){
var result__9106__auto__ = switch__9103__auto__.call(null,state_12011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9106__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object)){
var ex__9107__auto__ = e12038;
var statearr_12039_12060 = state_12011;
(statearr_12039_12060[(5)] = ex__9107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12061 = state_12011;
state_12011 = G__12061;
continue;
} else {
return ret_value__9105__auto__;
}
break;
}
});
cljs$core$async$state_machine__9104__auto__ = function(state_12011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9104__auto____1.call(this,state_12011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9104__auto____0;
cljs$core$async$state_machine__9104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9104__auto____1;
return cljs$core$async$state_machine__9104__auto__;
})()
;})(switch__9103__auto__,c__9118__auto___12045,out))
})();
var state__9120__auto__ = (function (){var statearr_12040 = f__9119__auto__.call(null);
(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9118__auto___12045);

return statearr_12040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9120__auto__);
});})(c__9118__auto___12045,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478625872543