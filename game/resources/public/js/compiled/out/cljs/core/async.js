// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30534 = [];
var len__17863__auto___30540 = arguments.length;
var i__17864__auto___30541 = (0);
while(true){
if((i__17864__auto___30541 < len__17863__auto___30540)){
args30534.push((arguments[i__17864__auto___30541]));

var G__30542 = (i__17864__auto___30541 + (1));
i__17864__auto___30541 = G__30542;
continue;
} else {
}
break;
}

var G__30536 = args30534.length;
switch (G__30536) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30534.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30537 = (function (f,blockable,meta30538){
this.f = f;
this.blockable = blockable;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30539,meta30538__$1){
var self__ = this;
var _30539__$1 = this;
return (new cljs.core.async.t_cljs$core$async30537(self__.f,self__.blockable,meta30538__$1));
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30539){
var self__ = this;
var _30539__$1 = this;
return self__.meta30538;
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30538","meta30538",1476811510,null)], null);
});

cljs.core.async.t_cljs$core$async30537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30537";

cljs.core.async.t_cljs$core$async30537.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30537");
});

cljs.core.async.__GT_t_cljs$core$async30537 = (function cljs$core$async$__GT_t_cljs$core$async30537(f__$1,blockable__$1,meta30538){
return (new cljs.core.async.t_cljs$core$async30537(f__$1,blockable__$1,meta30538));
});

}

return (new cljs.core.async.t_cljs$core$async30537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args30546 = [];
var len__17863__auto___30549 = arguments.length;
var i__17864__auto___30550 = (0);
while(true){
if((i__17864__auto___30550 < len__17863__auto___30549)){
args30546.push((arguments[i__17864__auto___30550]));

var G__30551 = (i__17864__auto___30550 + (1));
i__17864__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var G__30548 = args30546.length;
switch (G__30548) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30546.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args30553 = [];
var len__17863__auto___30556 = arguments.length;
var i__17864__auto___30557 = (0);
while(true){
if((i__17864__auto___30557 < len__17863__auto___30556)){
args30553.push((arguments[i__17864__auto___30557]));

var G__30558 = (i__17864__auto___30557 + (1));
i__17864__auto___30557 = G__30558;
continue;
} else {
}
break;
}

var G__30555 = args30553.length;
switch (G__30555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30553.length)].join('')));

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
var args30560 = [];
var len__17863__auto___30563 = arguments.length;
var i__17864__auto___30564 = (0);
while(true){
if((i__17864__auto___30564 < len__17863__auto___30563)){
args30560.push((arguments[i__17864__auto___30564]));

var G__30565 = (i__17864__auto___30564 + (1));
i__17864__auto___30564 = G__30565;
continue;
} else {
}
break;
}

var G__30562 = args30560.length;
switch (G__30562) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30560.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30567,ret){
return (function (){
return fn1.call(null,val_30567);
});})(val_30567,ret))
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
var args30568 = [];
var len__17863__auto___30571 = arguments.length;
var i__17864__auto___30572 = (0);
while(true){
if((i__17864__auto___30572 < len__17863__auto___30571)){
args30568.push((arguments[i__17864__auto___30572]));

var G__30573 = (i__17864__auto___30572 + (1));
i__17864__auto___30572 = G__30573;
continue;
} else {
}
break;
}

var G__30570 = args30568.length;
switch (G__30570) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30568.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17708__auto___30575 = n;
var x_30576 = (0);
while(true){
if((x_30576 < n__17708__auto___30575)){
(a[x_30576] = (0));

var G__30577 = (x_30576 + (1));
x_30576 = G__30577;
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

var G__30578 = (i + (1));
i = G__30578;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30582 = (function (alt_flag,flag,meta30583){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30583 = meta30583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30584,meta30583__$1){
var self__ = this;
var _30584__$1 = this;
return (new cljs.core.async.t_cljs$core$async30582(self__.alt_flag,self__.flag,meta30583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30584){
var self__ = this;
var _30584__$1 = this;
return self__.meta30583;
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30583","meta30583",-889671235,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30582";

cljs.core.async.t_cljs$core$async30582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30582(alt_flag__$1,flag__$1,meta30583){
return (new cljs.core.async.t_cljs$core$async30582(alt_flag__$1,flag__$1,meta30583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30582(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30588 = (function (alt_handler,flag,cb,meta30589){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30589 = meta30589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30590,meta30589__$1){
var self__ = this;
var _30590__$1 = this;
return (new cljs.core.async.t_cljs$core$async30588(self__.alt_handler,self__.flag,self__.cb,meta30589__$1));
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30590){
var self__ = this;
var _30590__$1 = this;
return self__.meta30589;
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30589","meta30589",648919454,null)], null);
});

cljs.core.async.t_cljs$core$async30588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30588";

cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30588");
});

cljs.core.async.__GT_t_cljs$core$async30588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30588(alt_handler__$1,flag__$1,cb__$1,meta30589){
return (new cljs.core.async.t_cljs$core$async30588(alt_handler__$1,flag__$1,cb__$1,meta30589));
});

}

return (new cljs.core.async.t_cljs$core$async30588(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30592_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30593 = (i + (1));
i = G__30593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17870__auto__ = [];
var len__17863__auto___30599 = arguments.length;
var i__17864__auto___30600 = (0);
while(true){
if((i__17864__auto___30600 < len__17863__auto___30599)){
args__17870__auto__.push((arguments[i__17864__auto___30600]));

var G__30601 = (i__17864__auto___30600 + (1));
i__17864__auto___30600 = G__30601;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30596){
var map__30597 = p__30596;
var map__30597__$1 = ((((!((map__30597 == null)))?((((map__30597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);
var opts = map__30597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30594){
var G__30595 = cljs.core.first.call(null,seq30594);
var seq30594__$1 = cljs.core.next.call(null,seq30594);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30595,seq30594__$1);
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
var args30602 = [];
var len__17863__auto___30652 = arguments.length;
var i__17864__auto___30653 = (0);
while(true){
if((i__17864__auto___30653 < len__17863__auto___30652)){
args30602.push((arguments[i__17864__auto___30653]));

var G__30654 = (i__17864__auto___30653 + (1));
i__17864__auto___30653 = G__30654;
continue;
} else {
}
break;
}

var G__30604 = args30602.length;
switch (G__30604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30602.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18830__auto___30656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___30656){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___30656){
return (function (state_30628){
var state_val_30629 = (state_30628[(1)]);
if((state_val_30629 === (7))){
var inst_30624 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
var statearr_30630_30657 = state_30628__$1;
(statearr_30630_30657[(2)] = inst_30624);

(statearr_30630_30657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (1))){
var state_30628__$1 = state_30628;
var statearr_30631_30658 = state_30628__$1;
(statearr_30631_30658[(2)] = null);

(statearr_30631_30658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (4))){
var inst_30607 = (state_30628[(7)]);
var inst_30607__$1 = (state_30628[(2)]);
var inst_30608 = (inst_30607__$1 == null);
var state_30628__$1 = (function (){var statearr_30632 = state_30628;
(statearr_30632[(7)] = inst_30607__$1);

return statearr_30632;
})();
if(cljs.core.truth_(inst_30608)){
var statearr_30633_30659 = state_30628__$1;
(statearr_30633_30659[(1)] = (5));

} else {
var statearr_30634_30660 = state_30628__$1;
(statearr_30634_30660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (13))){
var state_30628__$1 = state_30628;
var statearr_30635_30661 = state_30628__$1;
(statearr_30635_30661[(2)] = null);

(statearr_30635_30661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (6))){
var inst_30607 = (state_30628[(7)]);
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30628__$1,(11),to,inst_30607);
} else {
if((state_val_30629 === (3))){
var inst_30626 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30628__$1,inst_30626);
} else {
if((state_val_30629 === (12))){
var state_30628__$1 = state_30628;
var statearr_30636_30662 = state_30628__$1;
(statearr_30636_30662[(2)] = null);

(statearr_30636_30662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (2))){
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30628__$1,(4),from);
} else {
if((state_val_30629 === (11))){
var inst_30617 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
if(cljs.core.truth_(inst_30617)){
var statearr_30637_30663 = state_30628__$1;
(statearr_30637_30663[(1)] = (12));

} else {
var statearr_30638_30664 = state_30628__$1;
(statearr_30638_30664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (9))){
var state_30628__$1 = state_30628;
var statearr_30639_30665 = state_30628__$1;
(statearr_30639_30665[(2)] = null);

(statearr_30639_30665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (5))){
var state_30628__$1 = state_30628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30640_30666 = state_30628__$1;
(statearr_30640_30666[(1)] = (8));

} else {
var statearr_30641_30667 = state_30628__$1;
(statearr_30641_30667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (14))){
var inst_30622 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
var statearr_30642_30668 = state_30628__$1;
(statearr_30642_30668[(2)] = inst_30622);

(statearr_30642_30668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (10))){
var inst_30614 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
var statearr_30643_30669 = state_30628__$1;
(statearr_30643_30669[(2)] = inst_30614);

(statearr_30643_30669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (8))){
var inst_30611 = cljs.core.async.close_BANG_.call(null,to);
var state_30628__$1 = state_30628;
var statearr_30644_30670 = state_30628__$1;
(statearr_30644_30670[(2)] = inst_30611);

(statearr_30644_30670[(1)] = (10));


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
});})(c__18830__auto___30656))
;
return ((function (switch__18809__auto__,c__18830__auto___30656){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_30648 = [null,null,null,null,null,null,null,null];
(statearr_30648[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_30648[(1)] = (1));

return statearr_30648;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_30628){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30649){if((e30649 instanceof Object)){
var ex__18813__auto__ = e30649;
var statearr_30650_30671 = state_30628;
(statearr_30650_30671[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30672 = state_30628;
state_30628 = G__30672;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_30628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_30628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___30656))
})();
var state__18832__auto__ = (function (){var statearr_30651 = f__18831__auto__.call(null);
(statearr_30651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___30656);

return statearr_30651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___30656))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30856){
var vec__30857 = p__30856;
var v = cljs.core.nth.call(null,vec__30857,(0),null);
var p = cljs.core.nth.call(null,vec__30857,(1),null);
var job = vec__30857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18830__auto___31039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results){
return (function (state_30862){
var state_val_30863 = (state_30862[(1)]);
if((state_val_30863 === (1))){
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30862__$1,(2),res,v);
} else {
if((state_val_30863 === (2))){
var inst_30859 = (state_30862[(2)]);
var inst_30860 = cljs.core.async.close_BANG_.call(null,res);
var state_30862__$1 = (function (){var statearr_30864 = state_30862;
(statearr_30864[(7)] = inst_30859);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30862__$1,inst_30860);
} else {
return null;
}
}
});})(c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results))
;
return ((function (switch__18809__auto__,c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_30868 = [null,null,null,null,null,null,null,null];
(statearr_30868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__);

(statearr_30868[(1)] = (1));

return statearr_30868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1 = (function (state_30862){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30869){if((e30869 instanceof Object)){
var ex__18813__auto__ = e30869;
var statearr_30870_31040 = state_30862;
(statearr_30870_31040[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31041 = state_30862;
state_30862 = G__31041;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results))
})();
var state__18832__auto__ = (function (){var statearr_30871 = f__18831__auto__.call(null);
(statearr_30871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31039);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___31039,res,vec__30857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30872){
var vec__30873 = p__30872;
var v = cljs.core.nth.call(null,vec__30873,(0),null);
var p = cljs.core.nth.call(null,vec__30873,(1),null);
var job = vec__30873;
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
var n__17708__auto___31042 = n;
var __31043 = (0);
while(true){
if((__31043 < n__17708__auto___31042)){
var G__30874_31044 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30874_31044) {
case "compute":
var c__18830__auto___31046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31043,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (__31043,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function (state_30887){
var state_val_30888 = (state_30887[(1)]);
if((state_val_30888 === (1))){
var state_30887__$1 = state_30887;
var statearr_30889_31047 = state_30887__$1;
(statearr_30889_31047[(2)] = null);

(statearr_30889_31047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (2))){
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30887__$1,(4),jobs);
} else {
if((state_val_30888 === (3))){
var inst_30885 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30887__$1,inst_30885);
} else {
if((state_val_30888 === (4))){
var inst_30877 = (state_30887[(2)]);
var inst_30878 = process.call(null,inst_30877);
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30878)){
var statearr_30890_31048 = state_30887__$1;
(statearr_30890_31048[(1)] = (5));

} else {
var statearr_30891_31049 = state_30887__$1;
(statearr_30891_31049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (5))){
var state_30887__$1 = state_30887;
var statearr_30892_31050 = state_30887__$1;
(statearr_30892_31050[(2)] = null);

(statearr_30892_31050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (6))){
var state_30887__$1 = state_30887;
var statearr_30893_31051 = state_30887__$1;
(statearr_30893_31051[(2)] = null);

(statearr_30893_31051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (7))){
var inst_30883 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30894_31052 = state_30887__$1;
(statearr_30894_31052[(2)] = inst_30883);

(statearr_30894_31052[(1)] = (3));


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
});})(__31043,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
;
return ((function (__31043,switch__18809__auto__,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_30898 = [null,null,null,null,null,null,null];
(statearr_30898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__);

(statearr_30898[(1)] = (1));

return statearr_30898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1 = (function (state_30887){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30899){if((e30899 instanceof Object)){
var ex__18813__auto__ = e30899;
var statearr_30900_31053 = state_30887;
(statearr_30900_31053[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31054 = state_30887;
state_30887 = G__31054;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__;
})()
;})(__31043,switch__18809__auto__,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
})();
var state__18832__auto__ = (function (){var statearr_30901 = f__18831__auto__.call(null);
(statearr_30901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31046);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(__31043,c__18830__auto___31046,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
);


break;
case "async":
var c__18830__auto___31055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31043,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (__31043,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function (state_30914){
var state_val_30915 = (state_30914[(1)]);
if((state_val_30915 === (1))){
var state_30914__$1 = state_30914;
var statearr_30916_31056 = state_30914__$1;
(statearr_30916_31056[(2)] = null);

(statearr_30916_31056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (2))){
var state_30914__$1 = state_30914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30914__$1,(4),jobs);
} else {
if((state_val_30915 === (3))){
var inst_30912 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30914__$1,inst_30912);
} else {
if((state_val_30915 === (4))){
var inst_30904 = (state_30914[(2)]);
var inst_30905 = async.call(null,inst_30904);
var state_30914__$1 = state_30914;
if(cljs.core.truth_(inst_30905)){
var statearr_30917_31057 = state_30914__$1;
(statearr_30917_31057[(1)] = (5));

} else {
var statearr_30918_31058 = state_30914__$1;
(statearr_30918_31058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (5))){
var state_30914__$1 = state_30914;
var statearr_30919_31059 = state_30914__$1;
(statearr_30919_31059[(2)] = null);

(statearr_30919_31059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (6))){
var state_30914__$1 = state_30914;
var statearr_30920_31060 = state_30914__$1;
(statearr_30920_31060[(2)] = null);

(statearr_30920_31060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30915 === (7))){
var inst_30910 = (state_30914[(2)]);
var state_30914__$1 = state_30914;
var statearr_30921_31061 = state_30914__$1;
(statearr_30921_31061[(2)] = inst_30910);

(statearr_30921_31061[(1)] = (3));


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
});})(__31043,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
;
return ((function (__31043,switch__18809__auto__,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_30925 = [null,null,null,null,null,null,null];
(statearr_30925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__);

(statearr_30925[(1)] = (1));

return statearr_30925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1 = (function (state_30914){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30926){if((e30926 instanceof Object)){
var ex__18813__auto__ = e30926;
var statearr_30927_31062 = state_30914;
(statearr_30927_31062[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31063 = state_30914;
state_30914 = G__31063;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = function(state_30914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1.call(this,state_30914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__;
})()
;})(__31043,switch__18809__auto__,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
})();
var state__18832__auto__ = (function (){var statearr_30928 = f__18831__auto__.call(null);
(statearr_30928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31055);

return statearr_30928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(__31043,c__18830__auto___31055,G__30874_31044,n__17708__auto___31042,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31064 = (__31043 + (1));
__31043 = G__31064;
continue;
} else {
}
break;
}

var c__18830__auto___31065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___31065,jobs,results,process,async){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___31065,jobs,results,process,async){
return (function (state_30950){
var state_val_30951 = (state_30950[(1)]);
if((state_val_30951 === (1))){
var state_30950__$1 = state_30950;
var statearr_30952_31066 = state_30950__$1;
(statearr_30952_31066[(2)] = null);

(statearr_30952_31066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30951 === (2))){
var state_30950__$1 = state_30950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30950__$1,(4),from);
} else {
if((state_val_30951 === (3))){
var inst_30948 = (state_30950[(2)]);
var state_30950__$1 = state_30950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30950__$1,inst_30948);
} else {
if((state_val_30951 === (4))){
var inst_30931 = (state_30950[(7)]);
var inst_30931__$1 = (state_30950[(2)]);
var inst_30932 = (inst_30931__$1 == null);
var state_30950__$1 = (function (){var statearr_30953 = state_30950;
(statearr_30953[(7)] = inst_30931__$1);

return statearr_30953;
})();
if(cljs.core.truth_(inst_30932)){
var statearr_30954_31067 = state_30950__$1;
(statearr_30954_31067[(1)] = (5));

} else {
var statearr_30955_31068 = state_30950__$1;
(statearr_30955_31068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30951 === (5))){
var inst_30934 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30950__$1 = state_30950;
var statearr_30956_31069 = state_30950__$1;
(statearr_30956_31069[(2)] = inst_30934);

(statearr_30956_31069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30951 === (6))){
var inst_30931 = (state_30950[(7)]);
var inst_30936 = (state_30950[(8)]);
var inst_30936__$1 = cljs.core.async.chan.call(null,(1));
var inst_30937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30938 = [inst_30931,inst_30936__$1];
var inst_30939 = (new cljs.core.PersistentVector(null,2,(5),inst_30937,inst_30938,null));
var state_30950__$1 = (function (){var statearr_30957 = state_30950;
(statearr_30957[(8)] = inst_30936__$1);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30950__$1,(8),jobs,inst_30939);
} else {
if((state_val_30951 === (7))){
var inst_30946 = (state_30950[(2)]);
var state_30950__$1 = state_30950;
var statearr_30958_31070 = state_30950__$1;
(statearr_30958_31070[(2)] = inst_30946);

(statearr_30958_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30951 === (8))){
var inst_30936 = (state_30950[(8)]);
var inst_30941 = (state_30950[(2)]);
var state_30950__$1 = (function (){var statearr_30959 = state_30950;
(statearr_30959[(9)] = inst_30941);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30950__$1,(9),results,inst_30936);
} else {
if((state_val_30951 === (9))){
var inst_30943 = (state_30950[(2)]);
var state_30950__$1 = (function (){var statearr_30960 = state_30950;
(statearr_30960[(10)] = inst_30943);

return statearr_30960;
})();
var statearr_30961_31071 = state_30950__$1;
(statearr_30961_31071[(2)] = null);

(statearr_30961_31071[(1)] = (2));


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
});})(c__18830__auto___31065,jobs,results,process,async))
;
return ((function (switch__18809__auto__,c__18830__auto___31065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1 = (function (state_30950){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_30950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__18813__auto__ = e30966;
var statearr_30967_31072 = state_30950;
(statearr_30967_31072[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31073 = state_30950;
state_30950 = G__31073;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = function(state_30950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1.call(this,state_30950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___31065,jobs,results,process,async))
})();
var state__18832__auto__ = (function (){var statearr_30968 = f__18831__auto__.call(null);
(statearr_30968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31065);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___31065,jobs,results,process,async))
);


var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,jobs,results,process,async){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,jobs,results,process,async){
return (function (state_31006){
var state_val_31007 = (state_31006[(1)]);
if((state_val_31007 === (7))){
var inst_31002 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31008_31074 = state_31006__$1;
(statearr_31008_31074[(2)] = inst_31002);

(statearr_31008_31074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (20))){
var state_31006__$1 = state_31006;
var statearr_31009_31075 = state_31006__$1;
(statearr_31009_31075[(2)] = null);

(statearr_31009_31075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (1))){
var state_31006__$1 = state_31006;
var statearr_31010_31076 = state_31006__$1;
(statearr_31010_31076[(2)] = null);

(statearr_31010_31076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (4))){
var inst_30971 = (state_31006[(7)]);
var inst_30971__$1 = (state_31006[(2)]);
var inst_30972 = (inst_30971__$1 == null);
var state_31006__$1 = (function (){var statearr_31011 = state_31006;
(statearr_31011[(7)] = inst_30971__$1);

return statearr_31011;
})();
if(cljs.core.truth_(inst_30972)){
var statearr_31012_31077 = state_31006__$1;
(statearr_31012_31077[(1)] = (5));

} else {
var statearr_31013_31078 = state_31006__$1;
(statearr_31013_31078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (15))){
var inst_30984 = (state_31006[(8)]);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31006__$1,(18),to,inst_30984);
} else {
if((state_val_31007 === (21))){
var inst_30997 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31014_31079 = state_31006__$1;
(statearr_31014_31079[(2)] = inst_30997);

(statearr_31014_31079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (13))){
var inst_30999 = (state_31006[(2)]);
var state_31006__$1 = (function (){var statearr_31015 = state_31006;
(statearr_31015[(9)] = inst_30999);

return statearr_31015;
})();
var statearr_31016_31080 = state_31006__$1;
(statearr_31016_31080[(2)] = null);

(statearr_31016_31080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (6))){
var inst_30971 = (state_31006[(7)]);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(11),inst_30971);
} else {
if((state_val_31007 === (17))){
var inst_30992 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30992)){
var statearr_31017_31081 = state_31006__$1;
(statearr_31017_31081[(1)] = (19));

} else {
var statearr_31018_31082 = state_31006__$1;
(statearr_31018_31082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (3))){
var inst_31004 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31006__$1,inst_31004);
} else {
if((state_val_31007 === (12))){
var inst_30981 = (state_31006[(10)]);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(14),inst_30981);
} else {
if((state_val_31007 === (2))){
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(4),results);
} else {
if((state_val_31007 === (19))){
var state_31006__$1 = state_31006;
var statearr_31019_31083 = state_31006__$1;
(statearr_31019_31083[(2)] = null);

(statearr_31019_31083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (11))){
var inst_30981 = (state_31006[(2)]);
var state_31006__$1 = (function (){var statearr_31020 = state_31006;
(statearr_31020[(10)] = inst_30981);

return statearr_31020;
})();
var statearr_31021_31084 = state_31006__$1;
(statearr_31021_31084[(2)] = null);

(statearr_31021_31084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (9))){
var state_31006__$1 = state_31006;
var statearr_31022_31085 = state_31006__$1;
(statearr_31022_31085[(2)] = null);

(statearr_31022_31085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (5))){
var state_31006__$1 = state_31006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31023_31086 = state_31006__$1;
(statearr_31023_31086[(1)] = (8));

} else {
var statearr_31024_31087 = state_31006__$1;
(statearr_31024_31087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (14))){
var inst_30986 = (state_31006[(11)]);
var inst_30984 = (state_31006[(8)]);
var inst_30984__$1 = (state_31006[(2)]);
var inst_30985 = (inst_30984__$1 == null);
var inst_30986__$1 = cljs.core.not.call(null,inst_30985);
var state_31006__$1 = (function (){var statearr_31025 = state_31006;
(statearr_31025[(11)] = inst_30986__$1);

(statearr_31025[(8)] = inst_30984__$1);

return statearr_31025;
})();
if(inst_30986__$1){
var statearr_31026_31088 = state_31006__$1;
(statearr_31026_31088[(1)] = (15));

} else {
var statearr_31027_31089 = state_31006__$1;
(statearr_31027_31089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (16))){
var inst_30986 = (state_31006[(11)]);
var state_31006__$1 = state_31006;
var statearr_31028_31090 = state_31006__$1;
(statearr_31028_31090[(2)] = inst_30986);

(statearr_31028_31090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (10))){
var inst_30978 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31029_31091 = state_31006__$1;
(statearr_31029_31091[(2)] = inst_30978);

(statearr_31029_31091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (18))){
var inst_30989 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31030_31092 = state_31006__$1;
(statearr_31030_31092[(2)] = inst_30989);

(statearr_31030_31092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (8))){
var inst_30975 = cljs.core.async.close_BANG_.call(null,to);
var state_31006__$1 = state_31006;
var statearr_31031_31093 = state_31006__$1;
(statearr_31031_31093[(2)] = inst_30975);

(statearr_31031_31093[(1)] = (10));


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
});})(c__18830__auto__,jobs,results,process,async))
;
return ((function (switch__18809__auto__,c__18830__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_31035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__);

(statearr_31035[(1)] = (1));

return statearr_31035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1 = (function (state_31006){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_31006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e31036){if((e31036 instanceof Object)){
var ex__18813__auto__ = e31036;
var statearr_31037_31094 = state_31006;
(statearr_31037_31094[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31095 = state_31006;
state_31006 = G__31095;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__ = function(state_31006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1.call(this,state_31006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,jobs,results,process,async))
})();
var state__18832__auto__ = (function (){var statearr_31038 = f__18831__auto__.call(null);
(statearr_31038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_31038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,jobs,results,process,async))
);

return c__18830__auto__;
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
var args31096 = [];
var len__17863__auto___31099 = arguments.length;
var i__17864__auto___31100 = (0);
while(true){
if((i__17864__auto___31100 < len__17863__auto___31099)){
args31096.push((arguments[i__17864__auto___31100]));

var G__31101 = (i__17864__auto___31100 + (1));
i__17864__auto___31100 = G__31101;
continue;
} else {
}
break;
}

var G__31098 = args31096.length;
switch (G__31098) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31096.length)].join('')));

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
var args31103 = [];
var len__17863__auto___31106 = arguments.length;
var i__17864__auto___31107 = (0);
while(true){
if((i__17864__auto___31107 < len__17863__auto___31106)){
args31103.push((arguments[i__17864__auto___31107]));

var G__31108 = (i__17864__auto___31107 + (1));
i__17864__auto___31107 = G__31108;
continue;
} else {
}
break;
}

var G__31105 = args31103.length;
switch (G__31105) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31103.length)].join('')));

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
var args31110 = [];
var len__17863__auto___31163 = arguments.length;
var i__17864__auto___31164 = (0);
while(true){
if((i__17864__auto___31164 < len__17863__auto___31163)){
args31110.push((arguments[i__17864__auto___31164]));

var G__31165 = (i__17864__auto___31164 + (1));
i__17864__auto___31164 = G__31165;
continue;
} else {
}
break;
}

var G__31112 = args31110.length;
switch (G__31112) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31110.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18830__auto___31167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___31167,tc,fc){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___31167,tc,fc){
return (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31140_31168 = state_31138__$1;
(statearr_31140_31168[(2)] = inst_31134);

(statearr_31140_31168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31141_31169 = state_31138__$1;
(statearr_31141_31169[(2)] = null);

(statearr_31141_31169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31115 = (state_31138[(7)]);
var inst_31115__$1 = (state_31138[(2)]);
var inst_31116 = (inst_31115__$1 == null);
var state_31138__$1 = (function (){var statearr_31142 = state_31138;
(statearr_31142[(7)] = inst_31115__$1);

return statearr_31142;
})();
if(cljs.core.truth_(inst_31116)){
var statearr_31143_31170 = state_31138__$1;
(statearr_31143_31170[(1)] = (5));

} else {
var statearr_31144_31171 = state_31138__$1;
(statearr_31144_31171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (13))){
var state_31138__$1 = state_31138;
var statearr_31145_31172 = state_31138__$1;
(statearr_31145_31172[(2)] = null);

(statearr_31145_31172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31115 = (state_31138[(7)]);
var inst_31121 = p.call(null,inst_31115);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31121)){
var statearr_31146_31173 = state_31138__$1;
(statearr_31146_31173[(1)] = (9));

} else {
var statearr_31147_31174 = state_31138__$1;
(statearr_31147_31174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (3))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (12))){
var state_31138__$1 = state_31138;
var statearr_31148_31175 = state_31138__$1;
(statearr_31148_31175[(2)] = null);

(statearr_31148_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (2))){
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31138__$1,(4),ch);
} else {
if((state_val_31139 === (11))){
var inst_31115 = (state_31138[(7)]);
var inst_31125 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31138__$1,(8),inst_31125,inst_31115);
} else {
if((state_val_31139 === (9))){
var state_31138__$1 = state_31138;
var statearr_31149_31176 = state_31138__$1;
(statearr_31149_31176[(2)] = tc);

(statearr_31149_31176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var inst_31118 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31119 = cljs.core.async.close_BANG_.call(null,fc);
var state_31138__$1 = (function (){var statearr_31150 = state_31138;
(statearr_31150[(8)] = inst_31118);

return statearr_31150;
})();
var statearr_31151_31177 = state_31138__$1;
(statearr_31151_31177[(2)] = inst_31119);

(statearr_31151_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (14))){
var inst_31132 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31152_31178 = state_31138__$1;
(statearr_31152_31178[(2)] = inst_31132);

(statearr_31152_31178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (10))){
var state_31138__$1 = state_31138;
var statearr_31153_31179 = state_31138__$1;
(statearr_31153_31179[(2)] = fc);

(statearr_31153_31179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31127 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31127)){
var statearr_31154_31180 = state_31138__$1;
(statearr_31154_31180[(1)] = (12));

} else {
var statearr_31155_31181 = state_31138__$1;
(statearr_31155_31181[(1)] = (13));

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
});})(c__18830__auto___31167,tc,fc))
;
return ((function (switch__18809__auto__,c__18830__auto___31167,tc,fc){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_31138){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_31138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__18813__auto__ = e31160;
var statearr_31161_31182 = state_31138;
(statearr_31161_31182[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31183 = state_31138;
state_31138 = G__31183;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___31167,tc,fc))
})();
var state__18832__auto__ = (function (){var statearr_31162 = f__18831__auto__.call(null);
(statearr_31162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31167);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___31167,tc,fc))
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
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_31247){
var state_val_31248 = (state_31247[(1)]);
if((state_val_31248 === (7))){
var inst_31243 = (state_31247[(2)]);
var state_31247__$1 = state_31247;
var statearr_31249_31270 = state_31247__$1;
(statearr_31249_31270[(2)] = inst_31243);

(statearr_31249_31270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (1))){
var inst_31227 = init;
var state_31247__$1 = (function (){var statearr_31250 = state_31247;
(statearr_31250[(7)] = inst_31227);

return statearr_31250;
})();
var statearr_31251_31271 = state_31247__$1;
(statearr_31251_31271[(2)] = null);

(statearr_31251_31271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (4))){
var inst_31230 = (state_31247[(8)]);
var inst_31230__$1 = (state_31247[(2)]);
var inst_31231 = (inst_31230__$1 == null);
var state_31247__$1 = (function (){var statearr_31252 = state_31247;
(statearr_31252[(8)] = inst_31230__$1);

return statearr_31252;
})();
if(cljs.core.truth_(inst_31231)){
var statearr_31253_31272 = state_31247__$1;
(statearr_31253_31272[(1)] = (5));

} else {
var statearr_31254_31273 = state_31247__$1;
(statearr_31254_31273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (6))){
var inst_31230 = (state_31247[(8)]);
var inst_31234 = (state_31247[(9)]);
var inst_31227 = (state_31247[(7)]);
var inst_31234__$1 = f.call(null,inst_31227,inst_31230);
var inst_31235 = cljs.core.reduced_QMARK_.call(null,inst_31234__$1);
var state_31247__$1 = (function (){var statearr_31255 = state_31247;
(statearr_31255[(9)] = inst_31234__$1);

return statearr_31255;
})();
if(inst_31235){
var statearr_31256_31274 = state_31247__$1;
(statearr_31256_31274[(1)] = (8));

} else {
var statearr_31257_31275 = state_31247__$1;
(statearr_31257_31275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (3))){
var inst_31245 = (state_31247[(2)]);
var state_31247__$1 = state_31247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31247__$1,inst_31245);
} else {
if((state_val_31248 === (2))){
var state_31247__$1 = state_31247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31247__$1,(4),ch);
} else {
if((state_val_31248 === (9))){
var inst_31234 = (state_31247[(9)]);
var inst_31227 = inst_31234;
var state_31247__$1 = (function (){var statearr_31258 = state_31247;
(statearr_31258[(7)] = inst_31227);

return statearr_31258;
})();
var statearr_31259_31276 = state_31247__$1;
(statearr_31259_31276[(2)] = null);

(statearr_31259_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (5))){
var inst_31227 = (state_31247[(7)]);
var state_31247__$1 = state_31247;
var statearr_31260_31277 = state_31247__$1;
(statearr_31260_31277[(2)] = inst_31227);

(statearr_31260_31277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (10))){
var inst_31241 = (state_31247[(2)]);
var state_31247__$1 = state_31247;
var statearr_31261_31278 = state_31247__$1;
(statearr_31261_31278[(2)] = inst_31241);

(statearr_31261_31278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (8))){
var inst_31234 = (state_31247[(9)]);
var inst_31237 = cljs.core.deref.call(null,inst_31234);
var state_31247__$1 = state_31247;
var statearr_31262_31279 = state_31247__$1;
(statearr_31262_31279[(2)] = inst_31237);

(statearr_31262_31279[(1)] = (10));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18810__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$reduce_$_state_machine__18810__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$reduce_$_state_machine__18810__auto____1 = (function (state_31247){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_31247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__18813__auto__ = e31267;
var statearr_31268_31280 = state_31247;
(statearr_31268_31280[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31281 = state_31247;
state_31247 = G__31281;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18810__auto__ = function(state_31247){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18810__auto____1.call(this,state_31247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18810__auto____0;
cljs$core$async$reduce_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18810__auto____1;
return cljs$core$async$reduce_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_31269 = f__18831__auto__.call(null);
(statearr_31269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
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
var args31282 = [];
var len__17863__auto___31334 = arguments.length;
var i__17864__auto___31335 = (0);
while(true){
if((i__17864__auto___31335 < len__17863__auto___31334)){
args31282.push((arguments[i__17864__auto___31335]));

var G__31336 = (i__17864__auto___31335 + (1));
i__17864__auto___31335 = G__31336;
continue;
} else {
}
break;
}

var G__31284 = args31282.length;
switch (G__31284) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31282.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (7))){
var inst_31291 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31311_31338 = state_31309__$1;
(statearr_31311_31338[(2)] = inst_31291);

(statearr_31311_31338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (1))){
var inst_31285 = cljs.core.seq.call(null,coll);
var inst_31286 = inst_31285;
var state_31309__$1 = (function (){var statearr_31312 = state_31309;
(statearr_31312[(7)] = inst_31286);

return statearr_31312;
})();
var statearr_31313_31339 = state_31309__$1;
(statearr_31313_31339[(2)] = null);

(statearr_31313_31339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (4))){
var inst_31286 = (state_31309[(7)]);
var inst_31289 = cljs.core.first.call(null,inst_31286);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31309__$1,(7),ch,inst_31289);
} else {
if((state_val_31310 === (13))){
var inst_31303 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31314_31340 = state_31309__$1;
(statearr_31314_31340[(2)] = inst_31303);

(statearr_31314_31340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (6))){
var inst_31294 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31294)){
var statearr_31315_31341 = state_31309__$1;
(statearr_31315_31341[(1)] = (8));

} else {
var statearr_31316_31342 = state_31309__$1;
(statearr_31316_31342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (3))){
var inst_31307 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31309__$1,inst_31307);
} else {
if((state_val_31310 === (12))){
var state_31309__$1 = state_31309;
var statearr_31317_31343 = state_31309__$1;
(statearr_31317_31343[(2)] = null);

(statearr_31317_31343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (2))){
var inst_31286 = (state_31309[(7)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31286)){
var statearr_31318_31344 = state_31309__$1;
(statearr_31318_31344[(1)] = (4));

} else {
var statearr_31319_31345 = state_31309__$1;
(statearr_31319_31345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (11))){
var inst_31300 = cljs.core.async.close_BANG_.call(null,ch);
var state_31309__$1 = state_31309;
var statearr_31320_31346 = state_31309__$1;
(statearr_31320_31346[(2)] = inst_31300);

(statearr_31320_31346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (9))){
var state_31309__$1 = state_31309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31321_31347 = state_31309__$1;
(statearr_31321_31347[(1)] = (11));

} else {
var statearr_31322_31348 = state_31309__$1;
(statearr_31322_31348[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (5))){
var inst_31286 = (state_31309[(7)]);
var state_31309__$1 = state_31309;
var statearr_31323_31349 = state_31309__$1;
(statearr_31323_31349[(2)] = inst_31286);

(statearr_31323_31349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (10))){
var inst_31305 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31324_31350 = state_31309__$1;
(statearr_31324_31350[(2)] = inst_31305);

(statearr_31324_31350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (8))){
var inst_31286 = (state_31309[(7)]);
var inst_31296 = cljs.core.next.call(null,inst_31286);
var inst_31286__$1 = inst_31296;
var state_31309__$1 = (function (){var statearr_31325 = state_31309;
(statearr_31325[(7)] = inst_31286__$1);

return statearr_31325;
})();
var statearr_31326_31351 = state_31309__$1;
(statearr_31326_31351[(2)] = null);

(statearr_31326_31351[(1)] = (2));


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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_31330 = [null,null,null,null,null,null,null,null];
(statearr_31330[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_31330[(1)] = (1));

return statearr_31330;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_31309){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_31309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e31331){if((e31331 instanceof Object)){
var ex__18813__auto__ = e31331;
var statearr_31332_31352 = state_31309;
(statearr_31332_31352[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31353 = state_31309;
state_31309 = G__31353;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_31333 = f__18831__auto__.call(null);
(statearr_31333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_31333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
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
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31575 = (function (mult,ch,cs,meta31576){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31576 = meta31576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31577,meta31576__$1){
var self__ = this;
var _31577__$1 = this;
return (new cljs.core.async.t_cljs$core$async31575(self__.mult,self__.ch,self__.cs,meta31576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31577){
var self__ = this;
var _31577__$1 = this;
return self__.meta31576;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31576","meta31576",-1608800587,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31575";

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async31575");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31575(mult__$1,ch__$1,cs__$1,meta31576){
return (new cljs.core.async.t_cljs$core$async31575(mult__$1,ch__$1,cs__$1,meta31576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31575(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18830__auto___31796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___31796,cs,m,dchan,dctr,done){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___31796,cs,m,dchan,dctr,done){
return (function (state_31708){
var state_val_31709 = (state_31708[(1)]);
if((state_val_31709 === (7))){
var inst_31704 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31710_31797 = state_31708__$1;
(statearr_31710_31797[(2)] = inst_31704);

(statearr_31710_31797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (20))){
var inst_31609 = (state_31708[(7)]);
var inst_31619 = cljs.core.first.call(null,inst_31609);
var inst_31620 = cljs.core.nth.call(null,inst_31619,(0),null);
var inst_31621 = cljs.core.nth.call(null,inst_31619,(1),null);
var state_31708__$1 = (function (){var statearr_31711 = state_31708;
(statearr_31711[(8)] = inst_31620);

return statearr_31711;
})();
if(cljs.core.truth_(inst_31621)){
var statearr_31712_31798 = state_31708__$1;
(statearr_31712_31798[(1)] = (22));

} else {
var statearr_31713_31799 = state_31708__$1;
(statearr_31713_31799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (27))){
var inst_31649 = (state_31708[(9)]);
var inst_31656 = (state_31708[(10)]);
var inst_31580 = (state_31708[(11)]);
var inst_31651 = (state_31708[(12)]);
var inst_31656__$1 = cljs.core._nth.call(null,inst_31649,inst_31651);
var inst_31657 = cljs.core.async.put_BANG_.call(null,inst_31656__$1,inst_31580,done);
var state_31708__$1 = (function (){var statearr_31714 = state_31708;
(statearr_31714[(10)] = inst_31656__$1);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31657)){
var statearr_31715_31800 = state_31708__$1;
(statearr_31715_31800[(1)] = (30));

} else {
var statearr_31716_31801 = state_31708__$1;
(statearr_31716_31801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (1))){
var state_31708__$1 = state_31708;
var statearr_31717_31802 = state_31708__$1;
(statearr_31717_31802[(2)] = null);

(statearr_31717_31802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (24))){
var inst_31609 = (state_31708[(7)]);
var inst_31626 = (state_31708[(2)]);
var inst_31627 = cljs.core.next.call(null,inst_31609);
var inst_31589 = inst_31627;
var inst_31590 = null;
var inst_31591 = (0);
var inst_31592 = (0);
var state_31708__$1 = (function (){var statearr_31718 = state_31708;
(statearr_31718[(13)] = inst_31590);

(statearr_31718[(14)] = inst_31591);

(statearr_31718[(15)] = inst_31626);

(statearr_31718[(16)] = inst_31589);

(statearr_31718[(17)] = inst_31592);

return statearr_31718;
})();
var statearr_31719_31803 = state_31708__$1;
(statearr_31719_31803[(2)] = null);

(statearr_31719_31803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (39))){
var state_31708__$1 = state_31708;
var statearr_31723_31804 = state_31708__$1;
(statearr_31723_31804[(2)] = null);

(statearr_31723_31804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (4))){
var inst_31580 = (state_31708[(11)]);
var inst_31580__$1 = (state_31708[(2)]);
var inst_31581 = (inst_31580__$1 == null);
var state_31708__$1 = (function (){var statearr_31724 = state_31708;
(statearr_31724[(11)] = inst_31580__$1);

return statearr_31724;
})();
if(cljs.core.truth_(inst_31581)){
var statearr_31725_31805 = state_31708__$1;
(statearr_31725_31805[(1)] = (5));

} else {
var statearr_31726_31806 = state_31708__$1;
(statearr_31726_31806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (15))){
var inst_31590 = (state_31708[(13)]);
var inst_31591 = (state_31708[(14)]);
var inst_31589 = (state_31708[(16)]);
var inst_31592 = (state_31708[(17)]);
var inst_31605 = (state_31708[(2)]);
var inst_31606 = (inst_31592 + (1));
var tmp31720 = inst_31590;
var tmp31721 = inst_31591;
var tmp31722 = inst_31589;
var inst_31589__$1 = tmp31722;
var inst_31590__$1 = tmp31720;
var inst_31591__$1 = tmp31721;
var inst_31592__$1 = inst_31606;
var state_31708__$1 = (function (){var statearr_31727 = state_31708;
(statearr_31727[(13)] = inst_31590__$1);

(statearr_31727[(18)] = inst_31605);

(statearr_31727[(14)] = inst_31591__$1);

(statearr_31727[(16)] = inst_31589__$1);

(statearr_31727[(17)] = inst_31592__$1);

return statearr_31727;
})();
var statearr_31728_31807 = state_31708__$1;
(statearr_31728_31807[(2)] = null);

(statearr_31728_31807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (21))){
var inst_31630 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31732_31808 = state_31708__$1;
(statearr_31732_31808[(2)] = inst_31630);

(statearr_31732_31808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (31))){
var inst_31656 = (state_31708[(10)]);
var inst_31660 = done.call(null,null);
var inst_31661 = cljs.core.async.untap_STAR_.call(null,m,inst_31656);
var state_31708__$1 = (function (){var statearr_31733 = state_31708;
(statearr_31733[(19)] = inst_31660);

return statearr_31733;
})();
var statearr_31734_31809 = state_31708__$1;
(statearr_31734_31809[(2)] = inst_31661);

(statearr_31734_31809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (32))){
var inst_31649 = (state_31708[(9)]);
var inst_31650 = (state_31708[(20)]);
var inst_31648 = (state_31708[(21)]);
var inst_31651 = (state_31708[(12)]);
var inst_31663 = (state_31708[(2)]);
var inst_31664 = (inst_31651 + (1));
var tmp31729 = inst_31649;
var tmp31730 = inst_31650;
var tmp31731 = inst_31648;
var inst_31648__$1 = tmp31731;
var inst_31649__$1 = tmp31729;
var inst_31650__$1 = tmp31730;
var inst_31651__$1 = inst_31664;
var state_31708__$1 = (function (){var statearr_31735 = state_31708;
(statearr_31735[(9)] = inst_31649__$1);

(statearr_31735[(20)] = inst_31650__$1);

(statearr_31735[(22)] = inst_31663);

(statearr_31735[(21)] = inst_31648__$1);

(statearr_31735[(12)] = inst_31651__$1);

return statearr_31735;
})();
var statearr_31736_31810 = state_31708__$1;
(statearr_31736_31810[(2)] = null);

(statearr_31736_31810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (40))){
var inst_31676 = (state_31708[(23)]);
var inst_31680 = done.call(null,null);
var inst_31681 = cljs.core.async.untap_STAR_.call(null,m,inst_31676);
var state_31708__$1 = (function (){var statearr_31737 = state_31708;
(statearr_31737[(24)] = inst_31680);

return statearr_31737;
})();
var statearr_31738_31811 = state_31708__$1;
(statearr_31738_31811[(2)] = inst_31681);

(statearr_31738_31811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (33))){
var inst_31667 = (state_31708[(25)]);
var inst_31669 = cljs.core.chunked_seq_QMARK_.call(null,inst_31667);
var state_31708__$1 = state_31708;
if(inst_31669){
var statearr_31739_31812 = state_31708__$1;
(statearr_31739_31812[(1)] = (36));

} else {
var statearr_31740_31813 = state_31708__$1;
(statearr_31740_31813[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (13))){
var inst_31599 = (state_31708[(26)]);
var inst_31602 = cljs.core.async.close_BANG_.call(null,inst_31599);
var state_31708__$1 = state_31708;
var statearr_31741_31814 = state_31708__$1;
(statearr_31741_31814[(2)] = inst_31602);

(statearr_31741_31814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (22))){
var inst_31620 = (state_31708[(8)]);
var inst_31623 = cljs.core.async.close_BANG_.call(null,inst_31620);
var state_31708__$1 = state_31708;
var statearr_31742_31815 = state_31708__$1;
(statearr_31742_31815[(2)] = inst_31623);

(statearr_31742_31815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (36))){
var inst_31667 = (state_31708[(25)]);
var inst_31671 = cljs.core.chunk_first.call(null,inst_31667);
var inst_31672 = cljs.core.chunk_rest.call(null,inst_31667);
var inst_31673 = cljs.core.count.call(null,inst_31671);
var inst_31648 = inst_31672;
var inst_31649 = inst_31671;
var inst_31650 = inst_31673;
var inst_31651 = (0);
var state_31708__$1 = (function (){var statearr_31743 = state_31708;
(statearr_31743[(9)] = inst_31649);

(statearr_31743[(20)] = inst_31650);

(statearr_31743[(21)] = inst_31648);

(statearr_31743[(12)] = inst_31651);

return statearr_31743;
})();
var statearr_31744_31816 = state_31708__$1;
(statearr_31744_31816[(2)] = null);

(statearr_31744_31816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (41))){
var inst_31667 = (state_31708[(25)]);
var inst_31683 = (state_31708[(2)]);
var inst_31684 = cljs.core.next.call(null,inst_31667);
var inst_31648 = inst_31684;
var inst_31649 = null;
var inst_31650 = (0);
var inst_31651 = (0);
var state_31708__$1 = (function (){var statearr_31745 = state_31708;
(statearr_31745[(9)] = inst_31649);

(statearr_31745[(20)] = inst_31650);

(statearr_31745[(21)] = inst_31648);

(statearr_31745[(12)] = inst_31651);

(statearr_31745[(27)] = inst_31683);

return statearr_31745;
})();
var statearr_31746_31817 = state_31708__$1;
(statearr_31746_31817[(2)] = null);

(statearr_31746_31817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (43))){
var state_31708__$1 = state_31708;
var statearr_31747_31818 = state_31708__$1;
(statearr_31747_31818[(2)] = null);

(statearr_31747_31818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (29))){
var inst_31692 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31748_31819 = state_31708__$1;
(statearr_31748_31819[(2)] = inst_31692);

(statearr_31748_31819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (44))){
var inst_31701 = (state_31708[(2)]);
var state_31708__$1 = (function (){var statearr_31749 = state_31708;
(statearr_31749[(28)] = inst_31701);

return statearr_31749;
})();
var statearr_31750_31820 = state_31708__$1;
(statearr_31750_31820[(2)] = null);

(statearr_31750_31820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (6))){
var inst_31640 = (state_31708[(29)]);
var inst_31639 = cljs.core.deref.call(null,cs);
var inst_31640__$1 = cljs.core.keys.call(null,inst_31639);
var inst_31641 = cljs.core.count.call(null,inst_31640__$1);
var inst_31642 = cljs.core.reset_BANG_.call(null,dctr,inst_31641);
var inst_31647 = cljs.core.seq.call(null,inst_31640__$1);
var inst_31648 = inst_31647;
var inst_31649 = null;
var inst_31650 = (0);
var inst_31651 = (0);
var state_31708__$1 = (function (){var statearr_31751 = state_31708;
(statearr_31751[(9)] = inst_31649);

(statearr_31751[(20)] = inst_31650);

(statearr_31751[(21)] = inst_31648);

(statearr_31751[(30)] = inst_31642);

(statearr_31751[(29)] = inst_31640__$1);

(statearr_31751[(12)] = inst_31651);

return statearr_31751;
})();
var statearr_31752_31821 = state_31708__$1;
(statearr_31752_31821[(2)] = null);

(statearr_31752_31821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (28))){
var inst_31667 = (state_31708[(25)]);
var inst_31648 = (state_31708[(21)]);
var inst_31667__$1 = cljs.core.seq.call(null,inst_31648);
var state_31708__$1 = (function (){var statearr_31753 = state_31708;
(statearr_31753[(25)] = inst_31667__$1);

return statearr_31753;
})();
if(inst_31667__$1){
var statearr_31754_31822 = state_31708__$1;
(statearr_31754_31822[(1)] = (33));

} else {
var statearr_31755_31823 = state_31708__$1;
(statearr_31755_31823[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (25))){
var inst_31650 = (state_31708[(20)]);
var inst_31651 = (state_31708[(12)]);
var inst_31653 = (inst_31651 < inst_31650);
var inst_31654 = inst_31653;
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31654)){
var statearr_31756_31824 = state_31708__$1;
(statearr_31756_31824[(1)] = (27));

} else {
var statearr_31757_31825 = state_31708__$1;
(statearr_31757_31825[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (34))){
var state_31708__$1 = state_31708;
var statearr_31758_31826 = state_31708__$1;
(statearr_31758_31826[(2)] = null);

(statearr_31758_31826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (17))){
var state_31708__$1 = state_31708;
var statearr_31759_31827 = state_31708__$1;
(statearr_31759_31827[(2)] = null);

(statearr_31759_31827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (3))){
var inst_31706 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31708__$1,inst_31706);
} else {
if((state_val_31709 === (12))){
var inst_31635 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31760_31828 = state_31708__$1;
(statearr_31760_31828[(2)] = inst_31635);

(statearr_31760_31828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (2))){
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(4),ch);
} else {
if((state_val_31709 === (23))){
var state_31708__$1 = state_31708;
var statearr_31761_31829 = state_31708__$1;
(statearr_31761_31829[(2)] = null);

(statearr_31761_31829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (35))){
var inst_31690 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31762_31830 = state_31708__$1;
(statearr_31762_31830[(2)] = inst_31690);

(statearr_31762_31830[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (19))){
var inst_31609 = (state_31708[(7)]);
var inst_31613 = cljs.core.chunk_first.call(null,inst_31609);
var inst_31614 = cljs.core.chunk_rest.call(null,inst_31609);
var inst_31615 = cljs.core.count.call(null,inst_31613);
var inst_31589 = inst_31614;
var inst_31590 = inst_31613;
var inst_31591 = inst_31615;
var inst_31592 = (0);
var state_31708__$1 = (function (){var statearr_31763 = state_31708;
(statearr_31763[(13)] = inst_31590);

(statearr_31763[(14)] = inst_31591);

(statearr_31763[(16)] = inst_31589);

(statearr_31763[(17)] = inst_31592);

return statearr_31763;
})();
var statearr_31764_31831 = state_31708__$1;
(statearr_31764_31831[(2)] = null);

(statearr_31764_31831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (11))){
var inst_31609 = (state_31708[(7)]);
var inst_31589 = (state_31708[(16)]);
var inst_31609__$1 = cljs.core.seq.call(null,inst_31589);
var state_31708__$1 = (function (){var statearr_31765 = state_31708;
(statearr_31765[(7)] = inst_31609__$1);

return statearr_31765;
})();
if(inst_31609__$1){
var statearr_31766_31832 = state_31708__$1;
(statearr_31766_31832[(1)] = (16));

} else {
var statearr_31767_31833 = state_31708__$1;
(statearr_31767_31833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (9))){
var inst_31637 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31768_31834 = state_31708__$1;
(statearr_31768_31834[(2)] = inst_31637);

(statearr_31768_31834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (5))){
var inst_31587 = cljs.core.deref.call(null,cs);
var inst_31588 = cljs.core.seq.call(null,inst_31587);
var inst_31589 = inst_31588;
var inst_31590 = null;
var inst_31591 = (0);
var inst_31592 = (0);
var state_31708__$1 = (function (){var statearr_31769 = state_31708;
(statearr_31769[(13)] = inst_31590);

(statearr_31769[(14)] = inst_31591);

(statearr_31769[(16)] = inst_31589);

(statearr_31769[(17)] = inst_31592);

return statearr_31769;
})();
var statearr_31770_31835 = state_31708__$1;
(statearr_31770_31835[(2)] = null);

(statearr_31770_31835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (14))){
var state_31708__$1 = state_31708;
var statearr_31771_31836 = state_31708__$1;
(statearr_31771_31836[(2)] = null);

(statearr_31771_31836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (45))){
var inst_31698 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31772_31837 = state_31708__$1;
(statearr_31772_31837[(2)] = inst_31698);

(statearr_31772_31837[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (26))){
var inst_31640 = (state_31708[(29)]);
var inst_31694 = (state_31708[(2)]);
var inst_31695 = cljs.core.seq.call(null,inst_31640);
var state_31708__$1 = (function (){var statearr_31773 = state_31708;
(statearr_31773[(31)] = inst_31694);

return statearr_31773;
})();
if(inst_31695){
var statearr_31774_31838 = state_31708__$1;
(statearr_31774_31838[(1)] = (42));

} else {
var statearr_31775_31839 = state_31708__$1;
(statearr_31775_31839[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (16))){
var inst_31609 = (state_31708[(7)]);
var inst_31611 = cljs.core.chunked_seq_QMARK_.call(null,inst_31609);
var state_31708__$1 = state_31708;
if(inst_31611){
var statearr_31776_31840 = state_31708__$1;
(statearr_31776_31840[(1)] = (19));

} else {
var statearr_31777_31841 = state_31708__$1;
(statearr_31777_31841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (38))){
var inst_31687 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31778_31842 = state_31708__$1;
(statearr_31778_31842[(2)] = inst_31687);

(statearr_31778_31842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (30))){
var state_31708__$1 = state_31708;
var statearr_31779_31843 = state_31708__$1;
(statearr_31779_31843[(2)] = null);

(statearr_31779_31843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (10))){
var inst_31590 = (state_31708[(13)]);
var inst_31592 = (state_31708[(17)]);
var inst_31598 = cljs.core._nth.call(null,inst_31590,inst_31592);
var inst_31599 = cljs.core.nth.call(null,inst_31598,(0),null);
var inst_31600 = cljs.core.nth.call(null,inst_31598,(1),null);
var state_31708__$1 = (function (){var statearr_31780 = state_31708;
(statearr_31780[(26)] = inst_31599);

return statearr_31780;
})();
if(cljs.core.truth_(inst_31600)){
var statearr_31781_31844 = state_31708__$1;
(statearr_31781_31844[(1)] = (13));

} else {
var statearr_31782_31845 = state_31708__$1;
(statearr_31782_31845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (18))){
var inst_31633 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31783_31846 = state_31708__$1;
(statearr_31783_31846[(2)] = inst_31633);

(statearr_31783_31846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (42))){
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(45),dchan);
} else {
if((state_val_31709 === (37))){
var inst_31667 = (state_31708[(25)]);
var inst_31580 = (state_31708[(11)]);
var inst_31676 = (state_31708[(23)]);
var inst_31676__$1 = cljs.core.first.call(null,inst_31667);
var inst_31677 = cljs.core.async.put_BANG_.call(null,inst_31676__$1,inst_31580,done);
var state_31708__$1 = (function (){var statearr_31784 = state_31708;
(statearr_31784[(23)] = inst_31676__$1);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31677)){
var statearr_31785_31847 = state_31708__$1;
(statearr_31785_31847[(1)] = (39));

} else {
var statearr_31786_31848 = state_31708__$1;
(statearr_31786_31848[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (8))){
var inst_31591 = (state_31708[(14)]);
var inst_31592 = (state_31708[(17)]);
var inst_31594 = (inst_31592 < inst_31591);
var inst_31595 = inst_31594;
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31595)){
var statearr_31787_31849 = state_31708__$1;
(statearr_31787_31849[(1)] = (10));

} else {
var statearr_31788_31850 = state_31708__$1;
(statearr_31788_31850[(1)] = (11));

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
});})(c__18830__auto___31796,cs,m,dchan,dctr,done))
;
return ((function (switch__18809__auto__,c__18830__auto___31796,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18810__auto__ = null;
var cljs$core$async$mult_$_state_machine__18810__auto____0 = (function (){
var statearr_31792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31792[(0)] = cljs$core$async$mult_$_state_machine__18810__auto__);

(statearr_31792[(1)] = (1));

return statearr_31792;
});
var cljs$core$async$mult_$_state_machine__18810__auto____1 = (function (state_31708){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_31708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e31793){if((e31793 instanceof Object)){
var ex__18813__auto__ = e31793;
var statearr_31794_31851 = state_31708;
(statearr_31794_31851[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31852 = state_31708;
state_31708 = G__31852;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18810__auto__ = function(state_31708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18810__auto____1.call(this,state_31708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18810__auto____0;
cljs$core$async$mult_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18810__auto____1;
return cljs$core$async$mult_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___31796,cs,m,dchan,dctr,done))
})();
var state__18832__auto__ = (function (){var statearr_31795 = f__18831__auto__.call(null);
(statearr_31795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___31796);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___31796,cs,m,dchan,dctr,done))
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
var args31853 = [];
var len__17863__auto___31856 = arguments.length;
var i__17864__auto___31857 = (0);
while(true){
if((i__17864__auto___31857 < len__17863__auto___31856)){
args31853.push((arguments[i__17864__auto___31857]));

var G__31858 = (i__17864__auto___31857 + (1));
i__17864__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var G__31855 = args31853.length;
switch (G__31855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31853.length)].join('')));

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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___31870 = arguments.length;
var i__17864__auto___31871 = (0);
while(true){
if((i__17864__auto___31871 < len__17863__auto___31870)){
args__17870__auto__.push((arguments[i__17864__auto___31871]));

var G__31872 = (i__17864__auto___31871 + (1));
i__17864__auto___31871 = G__31872;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31864){
var map__31865 = p__31864;
var map__31865__$1 = ((((!((map__31865 == null)))?((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var opts = map__31865__$1;
var statearr_31867_31873 = state;
(statearr_31867_31873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31865,map__31865__$1,opts){
return (function (val){
var statearr_31868_31874 = state;
(statearr_31868_31874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31865,map__31865__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31869_31875 = state;
(statearr_31869_31875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31860){
var G__31861 = cljs.core.first.call(null,seq31860);
var seq31860__$1 = cljs.core.next.call(null,seq31860);
var G__31862 = cljs.core.first.call(null,seq31860__$1);
var seq31860__$2 = cljs.core.next.call(null,seq31860__$1);
var G__31863 = cljs.core.first.call(null,seq31860__$2);
var seq31860__$3 = cljs.core.next.call(null,seq31860__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31861,G__31862,G__31863,seq31860__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32039 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32040){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32040 = meta32040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32041,meta32040__$1){
var self__ = this;
var _32041__$1 = this;
return (new cljs.core.async.t_cljs$core$async32039(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32041){
var self__ = this;
var _32041__$1 = this;
return self__.meta32040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32040","meta32040",721592877,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32039";

cljs.core.async.t_cljs$core$async32039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32040){
return (new cljs.core.async.t_cljs$core$async32039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32039(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18830__auto___32202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32139){
var state_val_32140 = (state_32139[(1)]);
if((state_val_32140 === (7))){
var inst_32057 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32141_32203 = state_32139__$1;
(statearr_32141_32203[(2)] = inst_32057);

(statearr_32141_32203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (20))){
var inst_32069 = (state_32139[(7)]);
var state_32139__$1 = state_32139;
var statearr_32142_32204 = state_32139__$1;
(statearr_32142_32204[(2)] = inst_32069);

(statearr_32142_32204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (27))){
var state_32139__$1 = state_32139;
var statearr_32143_32205 = state_32139__$1;
(statearr_32143_32205[(2)] = null);

(statearr_32143_32205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (1))){
var inst_32045 = (state_32139[(8)]);
var inst_32045__$1 = calc_state.call(null);
var inst_32047 = (inst_32045__$1 == null);
var inst_32048 = cljs.core.not.call(null,inst_32047);
var state_32139__$1 = (function (){var statearr_32144 = state_32139;
(statearr_32144[(8)] = inst_32045__$1);

return statearr_32144;
})();
if(inst_32048){
var statearr_32145_32206 = state_32139__$1;
(statearr_32145_32206[(1)] = (2));

} else {
var statearr_32146_32207 = state_32139__$1;
(statearr_32146_32207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (24))){
var inst_32099 = (state_32139[(9)]);
var inst_32113 = (state_32139[(10)]);
var inst_32092 = (state_32139[(11)]);
var inst_32113__$1 = inst_32092.call(null,inst_32099);
var state_32139__$1 = (function (){var statearr_32147 = state_32139;
(statearr_32147[(10)] = inst_32113__$1);

return statearr_32147;
})();
if(cljs.core.truth_(inst_32113__$1)){
var statearr_32148_32208 = state_32139__$1;
(statearr_32148_32208[(1)] = (29));

} else {
var statearr_32149_32209 = state_32139__$1;
(statearr_32149_32209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (4))){
var inst_32060 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32060)){
var statearr_32150_32210 = state_32139__$1;
(statearr_32150_32210[(1)] = (8));

} else {
var statearr_32151_32211 = state_32139__$1;
(statearr_32151_32211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (15))){
var inst_32086 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32086)){
var statearr_32152_32212 = state_32139__$1;
(statearr_32152_32212[(1)] = (19));

} else {
var statearr_32153_32213 = state_32139__$1;
(statearr_32153_32213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (21))){
var inst_32091 = (state_32139[(12)]);
var inst_32091__$1 = (state_32139[(2)]);
var inst_32092 = cljs.core.get.call(null,inst_32091__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32093 = cljs.core.get.call(null,inst_32091__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32094 = cljs.core.get.call(null,inst_32091__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32139__$1 = (function (){var statearr_32154 = state_32139;
(statearr_32154[(12)] = inst_32091__$1);

(statearr_32154[(13)] = inst_32093);

(statearr_32154[(11)] = inst_32092);

return statearr_32154;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32139__$1,(22),inst_32094);
} else {
if((state_val_32140 === (31))){
var inst_32121 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32121)){
var statearr_32155_32214 = state_32139__$1;
(statearr_32155_32214[(1)] = (32));

} else {
var statearr_32156_32215 = state_32139__$1;
(statearr_32156_32215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (32))){
var inst_32098 = (state_32139[(14)]);
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32139__$1,(35),out,inst_32098);
} else {
if((state_val_32140 === (33))){
var inst_32091 = (state_32139[(12)]);
var inst_32069 = inst_32091;
var state_32139__$1 = (function (){var statearr_32157 = state_32139;
(statearr_32157[(7)] = inst_32069);

return statearr_32157;
})();
var statearr_32158_32216 = state_32139__$1;
(statearr_32158_32216[(2)] = null);

(statearr_32158_32216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (13))){
var inst_32069 = (state_32139[(7)]);
var inst_32076 = inst_32069.cljs$lang$protocol_mask$partition0$;
var inst_32077 = (inst_32076 & (64));
var inst_32078 = inst_32069.cljs$core$ISeq$;
var inst_32079 = (inst_32077) || (inst_32078);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32079)){
var statearr_32159_32217 = state_32139__$1;
(statearr_32159_32217[(1)] = (16));

} else {
var statearr_32160_32218 = state_32139__$1;
(statearr_32160_32218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (22))){
var inst_32098 = (state_32139[(14)]);
var inst_32099 = (state_32139[(9)]);
var inst_32097 = (state_32139[(2)]);
var inst_32098__$1 = cljs.core.nth.call(null,inst_32097,(0),null);
var inst_32099__$1 = cljs.core.nth.call(null,inst_32097,(1),null);
var inst_32100 = (inst_32098__$1 == null);
var inst_32101 = cljs.core._EQ_.call(null,inst_32099__$1,change);
var inst_32102 = (inst_32100) || (inst_32101);
var state_32139__$1 = (function (){var statearr_32161 = state_32139;
(statearr_32161[(14)] = inst_32098__$1);

(statearr_32161[(9)] = inst_32099__$1);

return statearr_32161;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32162_32219 = state_32139__$1;
(statearr_32162_32219[(1)] = (23));

} else {
var statearr_32163_32220 = state_32139__$1;
(statearr_32163_32220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (36))){
var inst_32091 = (state_32139[(12)]);
var inst_32069 = inst_32091;
var state_32139__$1 = (function (){var statearr_32164 = state_32139;
(statearr_32164[(7)] = inst_32069);

return statearr_32164;
})();
var statearr_32165_32221 = state_32139__$1;
(statearr_32165_32221[(2)] = null);

(statearr_32165_32221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (29))){
var inst_32113 = (state_32139[(10)]);
var state_32139__$1 = state_32139;
var statearr_32166_32222 = state_32139__$1;
(statearr_32166_32222[(2)] = inst_32113);

(statearr_32166_32222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (6))){
var state_32139__$1 = state_32139;
var statearr_32167_32223 = state_32139__$1;
(statearr_32167_32223[(2)] = false);

(statearr_32167_32223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (28))){
var inst_32109 = (state_32139[(2)]);
var inst_32110 = calc_state.call(null);
var inst_32069 = inst_32110;
var state_32139__$1 = (function (){var statearr_32168 = state_32139;
(statearr_32168[(7)] = inst_32069);

(statearr_32168[(15)] = inst_32109);

return statearr_32168;
})();
var statearr_32169_32224 = state_32139__$1;
(statearr_32169_32224[(2)] = null);

(statearr_32169_32224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (25))){
var inst_32135 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32170_32225 = state_32139__$1;
(statearr_32170_32225[(2)] = inst_32135);

(statearr_32170_32225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (34))){
var inst_32133 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32171_32226 = state_32139__$1;
(statearr_32171_32226[(2)] = inst_32133);

(statearr_32171_32226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (17))){
var state_32139__$1 = state_32139;
var statearr_32172_32227 = state_32139__$1;
(statearr_32172_32227[(2)] = false);

(statearr_32172_32227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (3))){
var state_32139__$1 = state_32139;
var statearr_32173_32228 = state_32139__$1;
(statearr_32173_32228[(2)] = false);

(statearr_32173_32228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (12))){
var inst_32137 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32139__$1,inst_32137);
} else {
if((state_val_32140 === (2))){
var inst_32045 = (state_32139[(8)]);
var inst_32050 = inst_32045.cljs$lang$protocol_mask$partition0$;
var inst_32051 = (inst_32050 & (64));
var inst_32052 = inst_32045.cljs$core$ISeq$;
var inst_32053 = (inst_32051) || (inst_32052);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32053)){
var statearr_32174_32229 = state_32139__$1;
(statearr_32174_32229[(1)] = (5));

} else {
var statearr_32175_32230 = state_32139__$1;
(statearr_32175_32230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (23))){
var inst_32098 = (state_32139[(14)]);
var inst_32104 = (inst_32098 == null);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32104)){
var statearr_32176_32231 = state_32139__$1;
(statearr_32176_32231[(1)] = (26));

} else {
var statearr_32177_32232 = state_32139__$1;
(statearr_32177_32232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (35))){
var inst_32124 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32124)){
var statearr_32178_32233 = state_32139__$1;
(statearr_32178_32233[(1)] = (36));

} else {
var statearr_32179_32234 = state_32139__$1;
(statearr_32179_32234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (19))){
var inst_32069 = (state_32139[(7)]);
var inst_32088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32069);
var state_32139__$1 = state_32139;
var statearr_32180_32235 = state_32139__$1;
(statearr_32180_32235[(2)] = inst_32088);

(statearr_32180_32235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (11))){
var inst_32069 = (state_32139[(7)]);
var inst_32073 = (inst_32069 == null);
var inst_32074 = cljs.core.not.call(null,inst_32073);
var state_32139__$1 = state_32139;
if(inst_32074){
var statearr_32181_32236 = state_32139__$1;
(statearr_32181_32236[(1)] = (13));

} else {
var statearr_32182_32237 = state_32139__$1;
(statearr_32182_32237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (9))){
var inst_32045 = (state_32139[(8)]);
var state_32139__$1 = state_32139;
var statearr_32183_32238 = state_32139__$1;
(statearr_32183_32238[(2)] = inst_32045);

(statearr_32183_32238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (5))){
var state_32139__$1 = state_32139;
var statearr_32184_32239 = state_32139__$1;
(statearr_32184_32239[(2)] = true);

(statearr_32184_32239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (14))){
var state_32139__$1 = state_32139;
var statearr_32185_32240 = state_32139__$1;
(statearr_32185_32240[(2)] = false);

(statearr_32185_32240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (26))){
var inst_32099 = (state_32139[(9)]);
var inst_32106 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32099);
var state_32139__$1 = state_32139;
var statearr_32186_32241 = state_32139__$1;
(statearr_32186_32241[(2)] = inst_32106);

(statearr_32186_32241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (16))){
var state_32139__$1 = state_32139;
var statearr_32187_32242 = state_32139__$1;
(statearr_32187_32242[(2)] = true);

(statearr_32187_32242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (38))){
var inst_32129 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32188_32243 = state_32139__$1;
(statearr_32188_32243[(2)] = inst_32129);

(statearr_32188_32243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (30))){
var inst_32099 = (state_32139[(9)]);
var inst_32093 = (state_32139[(13)]);
var inst_32092 = (state_32139[(11)]);
var inst_32116 = cljs.core.empty_QMARK_.call(null,inst_32092);
var inst_32117 = inst_32093.call(null,inst_32099);
var inst_32118 = cljs.core.not.call(null,inst_32117);
var inst_32119 = (inst_32116) && (inst_32118);
var state_32139__$1 = state_32139;
var statearr_32189_32244 = state_32139__$1;
(statearr_32189_32244[(2)] = inst_32119);

(statearr_32189_32244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (10))){
var inst_32045 = (state_32139[(8)]);
var inst_32065 = (state_32139[(2)]);
var inst_32066 = cljs.core.get.call(null,inst_32065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32067 = cljs.core.get.call(null,inst_32065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32068 = cljs.core.get.call(null,inst_32065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32069 = inst_32045;
var state_32139__$1 = (function (){var statearr_32190 = state_32139;
(statearr_32190[(7)] = inst_32069);

(statearr_32190[(16)] = inst_32068);

(statearr_32190[(17)] = inst_32067);

(statearr_32190[(18)] = inst_32066);

return statearr_32190;
})();
var statearr_32191_32245 = state_32139__$1;
(statearr_32191_32245[(2)] = null);

(statearr_32191_32245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (18))){
var inst_32083 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32192_32246 = state_32139__$1;
(statearr_32192_32246[(2)] = inst_32083);

(statearr_32192_32246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (37))){
var state_32139__$1 = state_32139;
var statearr_32193_32247 = state_32139__$1;
(statearr_32193_32247[(2)] = null);

(statearr_32193_32247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (8))){
var inst_32045 = (state_32139[(8)]);
var inst_32062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32045);
var state_32139__$1 = state_32139;
var statearr_32194_32248 = state_32139__$1;
(statearr_32194_32248[(2)] = inst_32062);

(statearr_32194_32248[(1)] = (10));


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
});})(c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18809__auto__,c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18810__auto__ = null;
var cljs$core$async$mix_$_state_machine__18810__auto____0 = (function (){
var statearr_32198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32198[(0)] = cljs$core$async$mix_$_state_machine__18810__auto__);

(statearr_32198[(1)] = (1));

return statearr_32198;
});
var cljs$core$async$mix_$_state_machine__18810__auto____1 = (function (state_32139){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32199){if((e32199 instanceof Object)){
var ex__18813__auto__ = e32199;
var statearr_32200_32249 = state_32139;
(statearr_32200_32249[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32250 = state_32139;
state_32139 = G__32250;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18810__auto__ = function(state_32139){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18810__auto____1.call(this,state_32139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18810__auto____0;
cljs$core$async$mix_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18810__auto____1;
return cljs$core$async$mix_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18832__auto__ = (function (){var statearr_32201 = f__18831__auto__.call(null);
(statearr_32201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32202);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32251 = [];
var len__17863__auto___32254 = arguments.length;
var i__17864__auto___32255 = (0);
while(true){
if((i__17864__auto___32255 < len__17863__auto___32254)){
args32251.push((arguments[i__17864__auto___32255]));

var G__32256 = (i__17864__auto___32255 + (1));
i__17864__auto___32255 = G__32256;
continue;
} else {
}
break;
}

var G__32253 = args32251.length;
switch (G__32253) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32251.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
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
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
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
var args32259 = [];
var len__17863__auto___32384 = arguments.length;
var i__17864__auto___32385 = (0);
while(true){
if((i__17864__auto___32385 < len__17863__auto___32384)){
args32259.push((arguments[i__17864__auto___32385]));

var G__32386 = (i__17864__auto___32385 + (1));
i__17864__auto___32385 = G__32386;
continue;
} else {
}
break;
}

var G__32261 = args32259.length;
switch (G__32261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32259.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__32258_SHARP_){
if(cljs.core.truth_(p1__32258_SHARP_.call(null,topic))){
return p1__32258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32263 = meta32263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32264,meta32263__$1){
var self__ = this;
var _32264__$1 = this;
return (new cljs.core.async.t_cljs$core$async32262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32263__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32264){
var self__ = this;
var _32264__$1 = this;
return self__.meta32263;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32263","meta32263",-2093388085,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32262";

cljs.core.async.t_cljs$core$async32262.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32262");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32262 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32263){
return (new cljs.core.async.t_cljs$core$async32262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32263));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18830__auto___32388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32388,mults,ensure_mult,p){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32388,mults,ensure_mult,p){
return (function (state_32336){
var state_val_32337 = (state_32336[(1)]);
if((state_val_32337 === (7))){
var inst_32332 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32338_32389 = state_32336__$1;
(statearr_32338_32389[(2)] = inst_32332);

(statearr_32338_32389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (20))){
var state_32336__$1 = state_32336;
var statearr_32339_32390 = state_32336__$1;
(statearr_32339_32390[(2)] = null);

(statearr_32339_32390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (1))){
var state_32336__$1 = state_32336;
var statearr_32340_32391 = state_32336__$1;
(statearr_32340_32391[(2)] = null);

(statearr_32340_32391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (24))){
var inst_32315 = (state_32336[(7)]);
var inst_32324 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32315);
var state_32336__$1 = state_32336;
var statearr_32341_32392 = state_32336__$1;
(statearr_32341_32392[(2)] = inst_32324);

(statearr_32341_32392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (4))){
var inst_32267 = (state_32336[(8)]);
var inst_32267__$1 = (state_32336[(2)]);
var inst_32268 = (inst_32267__$1 == null);
var state_32336__$1 = (function (){var statearr_32342 = state_32336;
(statearr_32342[(8)] = inst_32267__$1);

return statearr_32342;
})();
if(cljs.core.truth_(inst_32268)){
var statearr_32343_32393 = state_32336__$1;
(statearr_32343_32393[(1)] = (5));

} else {
var statearr_32344_32394 = state_32336__$1;
(statearr_32344_32394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (15))){
var inst_32309 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32345_32395 = state_32336__$1;
(statearr_32345_32395[(2)] = inst_32309);

(statearr_32345_32395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (21))){
var inst_32329 = (state_32336[(2)]);
var state_32336__$1 = (function (){var statearr_32346 = state_32336;
(statearr_32346[(9)] = inst_32329);

return statearr_32346;
})();
var statearr_32347_32396 = state_32336__$1;
(statearr_32347_32396[(2)] = null);

(statearr_32347_32396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (13))){
var inst_32291 = (state_32336[(10)]);
var inst_32293 = cljs.core.chunked_seq_QMARK_.call(null,inst_32291);
var state_32336__$1 = state_32336;
if(inst_32293){
var statearr_32348_32397 = state_32336__$1;
(statearr_32348_32397[(1)] = (16));

} else {
var statearr_32349_32398 = state_32336__$1;
(statearr_32349_32398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (22))){
var inst_32321 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
if(cljs.core.truth_(inst_32321)){
var statearr_32350_32399 = state_32336__$1;
(statearr_32350_32399[(1)] = (23));

} else {
var statearr_32351_32400 = state_32336__$1;
(statearr_32351_32400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (6))){
var inst_32317 = (state_32336[(11)]);
var inst_32267 = (state_32336[(8)]);
var inst_32315 = (state_32336[(7)]);
var inst_32315__$1 = topic_fn.call(null,inst_32267);
var inst_32316 = cljs.core.deref.call(null,mults);
var inst_32317__$1 = cljs.core.get.call(null,inst_32316,inst_32315__$1);
var state_32336__$1 = (function (){var statearr_32352 = state_32336;
(statearr_32352[(11)] = inst_32317__$1);

(statearr_32352[(7)] = inst_32315__$1);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32317__$1)){
var statearr_32353_32401 = state_32336__$1;
(statearr_32353_32401[(1)] = (19));

} else {
var statearr_32354_32402 = state_32336__$1;
(statearr_32354_32402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (25))){
var inst_32326 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32355_32403 = state_32336__$1;
(statearr_32355_32403[(2)] = inst_32326);

(statearr_32355_32403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (17))){
var inst_32291 = (state_32336[(10)]);
var inst_32300 = cljs.core.first.call(null,inst_32291);
var inst_32301 = cljs.core.async.muxch_STAR_.call(null,inst_32300);
var inst_32302 = cljs.core.async.close_BANG_.call(null,inst_32301);
var inst_32303 = cljs.core.next.call(null,inst_32291);
var inst_32277 = inst_32303;
var inst_32278 = null;
var inst_32279 = (0);
var inst_32280 = (0);
var state_32336__$1 = (function (){var statearr_32356 = state_32336;
(statearr_32356[(12)] = inst_32277);

(statearr_32356[(13)] = inst_32280);

(statearr_32356[(14)] = inst_32302);

(statearr_32356[(15)] = inst_32278);

(statearr_32356[(16)] = inst_32279);

return statearr_32356;
})();
var statearr_32357_32404 = state_32336__$1;
(statearr_32357_32404[(2)] = null);

(statearr_32357_32404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (3))){
var inst_32334 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32336__$1,inst_32334);
} else {
if((state_val_32337 === (12))){
var inst_32311 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32358_32405 = state_32336__$1;
(statearr_32358_32405[(2)] = inst_32311);

(statearr_32358_32405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (2))){
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32336__$1,(4),ch);
} else {
if((state_val_32337 === (23))){
var state_32336__$1 = state_32336;
var statearr_32359_32406 = state_32336__$1;
(statearr_32359_32406[(2)] = null);

(statearr_32359_32406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (19))){
var inst_32317 = (state_32336[(11)]);
var inst_32267 = (state_32336[(8)]);
var inst_32319 = cljs.core.async.muxch_STAR_.call(null,inst_32317);
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32336__$1,(22),inst_32319,inst_32267);
} else {
if((state_val_32337 === (11))){
var inst_32277 = (state_32336[(12)]);
var inst_32291 = (state_32336[(10)]);
var inst_32291__$1 = cljs.core.seq.call(null,inst_32277);
var state_32336__$1 = (function (){var statearr_32360 = state_32336;
(statearr_32360[(10)] = inst_32291__$1);

return statearr_32360;
})();
if(inst_32291__$1){
var statearr_32361_32407 = state_32336__$1;
(statearr_32361_32407[(1)] = (13));

} else {
var statearr_32362_32408 = state_32336__$1;
(statearr_32362_32408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (9))){
var inst_32313 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32363_32409 = state_32336__$1;
(statearr_32363_32409[(2)] = inst_32313);

(statearr_32363_32409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (5))){
var inst_32274 = cljs.core.deref.call(null,mults);
var inst_32275 = cljs.core.vals.call(null,inst_32274);
var inst_32276 = cljs.core.seq.call(null,inst_32275);
var inst_32277 = inst_32276;
var inst_32278 = null;
var inst_32279 = (0);
var inst_32280 = (0);
var state_32336__$1 = (function (){var statearr_32364 = state_32336;
(statearr_32364[(12)] = inst_32277);

(statearr_32364[(13)] = inst_32280);

(statearr_32364[(15)] = inst_32278);

(statearr_32364[(16)] = inst_32279);

return statearr_32364;
})();
var statearr_32365_32410 = state_32336__$1;
(statearr_32365_32410[(2)] = null);

(statearr_32365_32410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (14))){
var state_32336__$1 = state_32336;
var statearr_32369_32411 = state_32336__$1;
(statearr_32369_32411[(2)] = null);

(statearr_32369_32411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (16))){
var inst_32291 = (state_32336[(10)]);
var inst_32295 = cljs.core.chunk_first.call(null,inst_32291);
var inst_32296 = cljs.core.chunk_rest.call(null,inst_32291);
var inst_32297 = cljs.core.count.call(null,inst_32295);
var inst_32277 = inst_32296;
var inst_32278 = inst_32295;
var inst_32279 = inst_32297;
var inst_32280 = (0);
var state_32336__$1 = (function (){var statearr_32370 = state_32336;
(statearr_32370[(12)] = inst_32277);

(statearr_32370[(13)] = inst_32280);

(statearr_32370[(15)] = inst_32278);

(statearr_32370[(16)] = inst_32279);

return statearr_32370;
})();
var statearr_32371_32412 = state_32336__$1;
(statearr_32371_32412[(2)] = null);

(statearr_32371_32412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (10))){
var inst_32277 = (state_32336[(12)]);
var inst_32280 = (state_32336[(13)]);
var inst_32278 = (state_32336[(15)]);
var inst_32279 = (state_32336[(16)]);
var inst_32285 = cljs.core._nth.call(null,inst_32278,inst_32280);
var inst_32286 = cljs.core.async.muxch_STAR_.call(null,inst_32285);
var inst_32287 = cljs.core.async.close_BANG_.call(null,inst_32286);
var inst_32288 = (inst_32280 + (1));
var tmp32366 = inst_32277;
var tmp32367 = inst_32278;
var tmp32368 = inst_32279;
var inst_32277__$1 = tmp32366;
var inst_32278__$1 = tmp32367;
var inst_32279__$1 = tmp32368;
var inst_32280__$1 = inst_32288;
var state_32336__$1 = (function (){var statearr_32372 = state_32336;
(statearr_32372[(12)] = inst_32277__$1);

(statearr_32372[(13)] = inst_32280__$1);

(statearr_32372[(17)] = inst_32287);

(statearr_32372[(15)] = inst_32278__$1);

(statearr_32372[(16)] = inst_32279__$1);

return statearr_32372;
})();
var statearr_32373_32413 = state_32336__$1;
(statearr_32373_32413[(2)] = null);

(statearr_32373_32413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (18))){
var inst_32306 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32374_32414 = state_32336__$1;
(statearr_32374_32414[(2)] = inst_32306);

(statearr_32374_32414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (8))){
var inst_32280 = (state_32336[(13)]);
var inst_32279 = (state_32336[(16)]);
var inst_32282 = (inst_32280 < inst_32279);
var inst_32283 = inst_32282;
var state_32336__$1 = state_32336;
if(cljs.core.truth_(inst_32283)){
var statearr_32375_32415 = state_32336__$1;
(statearr_32375_32415[(1)] = (10));

} else {
var statearr_32376_32416 = state_32336__$1;
(statearr_32376_32416[(1)] = (11));

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
});})(c__18830__auto___32388,mults,ensure_mult,p))
;
return ((function (switch__18809__auto__,c__18830__auto___32388,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_32336){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__18813__auto__ = e32381;
var statearr_32382_32417 = state_32336;
(statearr_32382_32417[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32418 = state_32336;
state_32336 = G__32418;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_32336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_32336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32388,mults,ensure_mult,p))
})();
var state__18832__auto__ = (function (){var statearr_32383 = f__18831__auto__.call(null);
(statearr_32383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32388);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32388,mults,ensure_mult,p))
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
var args32419 = [];
var len__17863__auto___32422 = arguments.length;
var i__17864__auto___32423 = (0);
while(true){
if((i__17864__auto___32423 < len__17863__auto___32422)){
args32419.push((arguments[i__17864__auto___32423]));

var G__32424 = (i__17864__auto___32423 + (1));
i__17864__auto___32423 = G__32424;
continue;
} else {
}
break;
}

var G__32421 = args32419.length;
switch (G__32421) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32419.length)].join('')));

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
var args32426 = [];
var len__17863__auto___32429 = arguments.length;
var i__17864__auto___32430 = (0);
while(true){
if((i__17864__auto___32430 < len__17863__auto___32429)){
args32426.push((arguments[i__17864__auto___32430]));

var G__32431 = (i__17864__auto___32430 + (1));
i__17864__auto___32430 = G__32431;
continue;
} else {
}
break;
}

var G__32428 = args32426.length;
switch (G__32428) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32426.length)].join('')));

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
var args32433 = [];
var len__17863__auto___32504 = arguments.length;
var i__17864__auto___32505 = (0);
while(true){
if((i__17864__auto___32505 < len__17863__auto___32504)){
args32433.push((arguments[i__17864__auto___32505]));

var G__32506 = (i__17864__auto___32505 + (1));
i__17864__auto___32505 = G__32506;
continue;
} else {
}
break;
}

var G__32435 = args32433.length;
switch (G__32435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32433.length)].join('')));

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
var c__18830__auto___32508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (7))){
var state_32474__$1 = state_32474;
var statearr_32476_32509 = state_32474__$1;
(statearr_32476_32509[(2)] = null);

(statearr_32476_32509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (1))){
var state_32474__$1 = state_32474;
var statearr_32477_32510 = state_32474__$1;
(statearr_32477_32510[(2)] = null);

(statearr_32477_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (4))){
var inst_32438 = (state_32474[(7)]);
var inst_32440 = (inst_32438 < cnt);
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32440)){
var statearr_32478_32511 = state_32474__$1;
(statearr_32478_32511[(1)] = (6));

} else {
var statearr_32479_32512 = state_32474__$1;
(statearr_32479_32512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (15))){
var inst_32470 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32480_32513 = state_32474__$1;
(statearr_32480_32513[(2)] = inst_32470);

(statearr_32480_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (13))){
var inst_32463 = cljs.core.async.close_BANG_.call(null,out);
var state_32474__$1 = state_32474;
var statearr_32481_32514 = state_32474__$1;
(statearr_32481_32514[(2)] = inst_32463);

(statearr_32481_32514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (6))){
var state_32474__$1 = state_32474;
var statearr_32482_32515 = state_32474__$1;
(statearr_32482_32515[(2)] = null);

(statearr_32482_32515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (3))){
var inst_32472 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32474__$1,inst_32472);
} else {
if((state_val_32475 === (12))){
var inst_32460 = (state_32474[(8)]);
var inst_32460__$1 = (state_32474[(2)]);
var inst_32461 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32460__$1);
var state_32474__$1 = (function (){var statearr_32483 = state_32474;
(statearr_32483[(8)] = inst_32460__$1);

return statearr_32483;
})();
if(cljs.core.truth_(inst_32461)){
var statearr_32484_32516 = state_32474__$1;
(statearr_32484_32516[(1)] = (13));

} else {
var statearr_32485_32517 = state_32474__$1;
(statearr_32485_32517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (2))){
var inst_32437 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32438 = (0);
var state_32474__$1 = (function (){var statearr_32486 = state_32474;
(statearr_32486[(9)] = inst_32437);

(statearr_32486[(7)] = inst_32438);

return statearr_32486;
})();
var statearr_32487_32518 = state_32474__$1;
(statearr_32487_32518[(2)] = null);

(statearr_32487_32518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (11))){
var inst_32438 = (state_32474[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32474,(10),Object,null,(9));
var inst_32447 = chs__$1.call(null,inst_32438);
var inst_32448 = done.call(null,inst_32438);
var inst_32449 = cljs.core.async.take_BANG_.call(null,inst_32447,inst_32448);
var state_32474__$1 = state_32474;
var statearr_32488_32519 = state_32474__$1;
(statearr_32488_32519[(2)] = inst_32449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (9))){
var inst_32438 = (state_32474[(7)]);
var inst_32451 = (state_32474[(2)]);
var inst_32452 = (inst_32438 + (1));
var inst_32438__$1 = inst_32452;
var state_32474__$1 = (function (){var statearr_32489 = state_32474;
(statearr_32489[(10)] = inst_32451);

(statearr_32489[(7)] = inst_32438__$1);

return statearr_32489;
})();
var statearr_32490_32520 = state_32474__$1;
(statearr_32490_32520[(2)] = null);

(statearr_32490_32520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (5))){
var inst_32458 = (state_32474[(2)]);
var state_32474__$1 = (function (){var statearr_32491 = state_32474;
(statearr_32491[(11)] = inst_32458);

return statearr_32491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32474__$1,(12),dchan);
} else {
if((state_val_32475 === (14))){
var inst_32460 = (state_32474[(8)]);
var inst_32465 = cljs.core.apply.call(null,f,inst_32460);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32474__$1,(16),out,inst_32465);
} else {
if((state_val_32475 === (16))){
var inst_32467 = (state_32474[(2)]);
var state_32474__$1 = (function (){var statearr_32492 = state_32474;
(statearr_32492[(12)] = inst_32467);

return statearr_32492;
})();
var statearr_32493_32521 = state_32474__$1;
(statearr_32493_32521[(2)] = null);

(statearr_32493_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (10))){
var inst_32442 = (state_32474[(2)]);
var inst_32443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32474__$1 = (function (){var statearr_32494 = state_32474;
(statearr_32494[(13)] = inst_32442);

return statearr_32494;
})();
var statearr_32495_32522 = state_32474__$1;
(statearr_32495_32522[(2)] = inst_32443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (8))){
var inst_32456 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32496_32523 = state_32474__$1;
(statearr_32496_32523[(2)] = inst_32456);

(statearr_32496_32523[(1)] = (5));


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
});})(c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18809__auto__,c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_32500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32500[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_32500[(1)] = (1));

return statearr_32500;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_32474){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object)){
var ex__18813__auto__ = e32501;
var statearr_32502_32524 = state_32474;
(statearr_32502_32524[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32525 = state_32474;
state_32474 = G__32525;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18832__auto__ = (function (){var statearr_32503 = f__18831__auto__.call(null);
(statearr_32503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32508);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32508,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32527 = [];
var len__17863__auto___32583 = arguments.length;
var i__17864__auto___32584 = (0);
while(true){
if((i__17864__auto___32584 < len__17863__auto___32583)){
args32527.push((arguments[i__17864__auto___32584]));

var G__32585 = (i__17864__auto___32584 + (1));
i__17864__auto___32584 = G__32585;
continue;
} else {
}
break;
}

var G__32529 = args32527.length;
switch (G__32529) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32527.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___32587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32587,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32587,out){
return (function (state_32559){
var state_val_32560 = (state_32559[(1)]);
if((state_val_32560 === (7))){
var inst_32539 = (state_32559[(7)]);
var inst_32538 = (state_32559[(8)]);
var inst_32538__$1 = (state_32559[(2)]);
var inst_32539__$1 = cljs.core.nth.call(null,inst_32538__$1,(0),null);
var inst_32540 = cljs.core.nth.call(null,inst_32538__$1,(1),null);
var inst_32541 = (inst_32539__$1 == null);
var state_32559__$1 = (function (){var statearr_32561 = state_32559;
(statearr_32561[(9)] = inst_32540);

(statearr_32561[(7)] = inst_32539__$1);

(statearr_32561[(8)] = inst_32538__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32541)){
var statearr_32562_32588 = state_32559__$1;
(statearr_32562_32588[(1)] = (8));

} else {
var statearr_32563_32589 = state_32559__$1;
(statearr_32563_32589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (1))){
var inst_32530 = cljs.core.vec.call(null,chs);
var inst_32531 = inst_32530;
var state_32559__$1 = (function (){var statearr_32564 = state_32559;
(statearr_32564[(10)] = inst_32531);

return statearr_32564;
})();
var statearr_32565_32590 = state_32559__$1;
(statearr_32565_32590[(2)] = null);

(statearr_32565_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (4))){
var inst_32531 = (state_32559[(10)]);
var state_32559__$1 = state_32559;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32559__$1,(7),inst_32531);
} else {
if((state_val_32560 === (6))){
var inst_32555 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32566_32591 = state_32559__$1;
(statearr_32566_32591[(2)] = inst_32555);

(statearr_32566_32591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (3))){
var inst_32557 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32559__$1,inst_32557);
} else {
if((state_val_32560 === (2))){
var inst_32531 = (state_32559[(10)]);
var inst_32533 = cljs.core.count.call(null,inst_32531);
var inst_32534 = (inst_32533 > (0));
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32534)){
var statearr_32568_32592 = state_32559__$1;
(statearr_32568_32592[(1)] = (4));

} else {
var statearr_32569_32593 = state_32559__$1;
(statearr_32569_32593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (11))){
var inst_32531 = (state_32559[(10)]);
var inst_32548 = (state_32559[(2)]);
var tmp32567 = inst_32531;
var inst_32531__$1 = tmp32567;
var state_32559__$1 = (function (){var statearr_32570 = state_32559;
(statearr_32570[(10)] = inst_32531__$1);

(statearr_32570[(11)] = inst_32548);

return statearr_32570;
})();
var statearr_32571_32594 = state_32559__$1;
(statearr_32571_32594[(2)] = null);

(statearr_32571_32594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (9))){
var inst_32539 = (state_32559[(7)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32559__$1,(11),out,inst_32539);
} else {
if((state_val_32560 === (5))){
var inst_32553 = cljs.core.async.close_BANG_.call(null,out);
var state_32559__$1 = state_32559;
var statearr_32572_32595 = state_32559__$1;
(statearr_32572_32595[(2)] = inst_32553);

(statearr_32572_32595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (10))){
var inst_32551 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32573_32596 = state_32559__$1;
(statearr_32573_32596[(2)] = inst_32551);

(statearr_32573_32596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (8))){
var inst_32540 = (state_32559[(9)]);
var inst_32539 = (state_32559[(7)]);
var inst_32531 = (state_32559[(10)]);
var inst_32538 = (state_32559[(8)]);
var inst_32543 = (function (){var cs = inst_32531;
var vec__32536 = inst_32538;
var v = inst_32539;
var c = inst_32540;
return ((function (cs,vec__32536,v,c,inst_32540,inst_32539,inst_32531,inst_32538,state_val_32560,c__18830__auto___32587,out){
return (function (p1__32526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32526_SHARP_);
});
;})(cs,vec__32536,v,c,inst_32540,inst_32539,inst_32531,inst_32538,state_val_32560,c__18830__auto___32587,out))
})();
var inst_32544 = cljs.core.filterv.call(null,inst_32543,inst_32531);
var inst_32531__$1 = inst_32544;
var state_32559__$1 = (function (){var statearr_32574 = state_32559;
(statearr_32574[(10)] = inst_32531__$1);

return statearr_32574;
})();
var statearr_32575_32597 = state_32559__$1;
(statearr_32575_32597[(2)] = null);

(statearr_32575_32597[(1)] = (2));


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
});})(c__18830__auto___32587,out))
;
return ((function (switch__18809__auto__,c__18830__auto___32587,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_32579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32579[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_32579[(1)] = (1));

return statearr_32579;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_32559){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32580){if((e32580 instanceof Object)){
var ex__18813__auto__ = e32580;
var statearr_32581_32598 = state_32559;
(statearr_32581_32598[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_32559;
state_32559 = G__32599;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_32559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_32559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32587,out))
})();
var state__18832__auto__ = (function (){var statearr_32582 = f__18831__auto__.call(null);
(statearr_32582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32587);

return statearr_32582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32587,out))
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
var args32600 = [];
var len__17863__auto___32649 = arguments.length;
var i__17864__auto___32650 = (0);
while(true){
if((i__17864__auto___32650 < len__17863__auto___32649)){
args32600.push((arguments[i__17864__auto___32650]));

var G__32651 = (i__17864__auto___32650 + (1));
i__17864__auto___32650 = G__32651;
continue;
} else {
}
break;
}

var G__32602 = args32600.length;
switch (G__32602) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32600.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___32653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32653,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32653,out){
return (function (state_32626){
var state_val_32627 = (state_32626[(1)]);
if((state_val_32627 === (7))){
var inst_32608 = (state_32626[(7)]);
var inst_32608__$1 = (state_32626[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var inst_32610 = cljs.core.not.call(null,inst_32609);
var state_32626__$1 = (function (){var statearr_32628 = state_32626;
(statearr_32628[(7)] = inst_32608__$1);

return statearr_32628;
})();
if(inst_32610){
var statearr_32629_32654 = state_32626__$1;
(statearr_32629_32654[(1)] = (8));

} else {
var statearr_32630_32655 = state_32626__$1;
(statearr_32630_32655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (1))){
var inst_32603 = (0);
var state_32626__$1 = (function (){var statearr_32631 = state_32626;
(statearr_32631[(8)] = inst_32603);

return statearr_32631;
})();
var statearr_32632_32656 = state_32626__$1;
(statearr_32632_32656[(2)] = null);

(statearr_32632_32656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (4))){
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32626__$1,(7),ch);
} else {
if((state_val_32627 === (6))){
var inst_32621 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32633_32657 = state_32626__$1;
(statearr_32633_32657[(2)] = inst_32621);

(statearr_32633_32657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (3))){
var inst_32623 = (state_32626[(2)]);
var inst_32624 = cljs.core.async.close_BANG_.call(null,out);
var state_32626__$1 = (function (){var statearr_32634 = state_32626;
(statearr_32634[(9)] = inst_32623);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32626__$1,inst_32624);
} else {
if((state_val_32627 === (2))){
var inst_32603 = (state_32626[(8)]);
var inst_32605 = (inst_32603 < n);
var state_32626__$1 = state_32626;
if(cljs.core.truth_(inst_32605)){
var statearr_32635_32658 = state_32626__$1;
(statearr_32635_32658[(1)] = (4));

} else {
var statearr_32636_32659 = state_32626__$1;
(statearr_32636_32659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (11))){
var inst_32603 = (state_32626[(8)]);
var inst_32613 = (state_32626[(2)]);
var inst_32614 = (inst_32603 + (1));
var inst_32603__$1 = inst_32614;
var state_32626__$1 = (function (){var statearr_32637 = state_32626;
(statearr_32637[(10)] = inst_32613);

(statearr_32637[(8)] = inst_32603__$1);

return statearr_32637;
})();
var statearr_32638_32660 = state_32626__$1;
(statearr_32638_32660[(2)] = null);

(statearr_32638_32660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (9))){
var state_32626__$1 = state_32626;
var statearr_32639_32661 = state_32626__$1;
(statearr_32639_32661[(2)] = null);

(statearr_32639_32661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (5))){
var state_32626__$1 = state_32626;
var statearr_32640_32662 = state_32626__$1;
(statearr_32640_32662[(2)] = null);

(statearr_32640_32662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (10))){
var inst_32618 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32641_32663 = state_32626__$1;
(statearr_32641_32663[(2)] = inst_32618);

(statearr_32641_32663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (8))){
var inst_32608 = (state_32626[(7)]);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32626__$1,(11),out,inst_32608);
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
});})(c__18830__auto___32653,out))
;
return ((function (switch__18809__auto__,c__18830__auto___32653,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_32645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32645[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_32645[(1)] = (1));

return statearr_32645;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_32626){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32646){if((e32646 instanceof Object)){
var ex__18813__auto__ = e32646;
var statearr_32647_32664 = state_32626;
(statearr_32647_32664[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32665 = state_32626;
state_32626 = G__32665;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_32626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_32626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32653,out))
})();
var state__18832__auto__ = (function (){var statearr_32648 = f__18831__auto__.call(null);
(statearr_32648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32653);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32653,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32673 = (function (map_LT_,f,ch,meta32674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32674 = meta32674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32675,meta32674__$1){
var self__ = this;
var _32675__$1 = this;
return (new cljs.core.async.t_cljs$core$async32673(self__.map_LT_,self__.f,self__.ch,meta32674__$1));
});

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32675){
var self__ = this;
var _32675__$1 = this;
return self__.meta32674;
});

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32676 = (function (map_LT_,f,ch,meta32674,_,fn1,meta32677){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32674 = meta32674;
this._ = _;
this.fn1 = fn1;
this.meta32677 = meta32677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32678,meta32677__$1){
var self__ = this;
var _32678__$1 = this;
return (new cljs.core.async.t_cljs$core$async32676(self__.map_LT_,self__.f,self__.ch,self__.meta32674,self__._,self__.fn1,meta32677__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32678){
var self__ = this;
var _32678__$1 = this;
return self__.meta32677;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32666_SHARP_){
return f1.call(null,(((p1__32666_SHARP_ == null))?null:self__.f.call(null,p1__32666_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32674","meta32674",-575873001,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32673","cljs.core.async/t_cljs$core$async32673",-2239304,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32677","meta32677",-1187042355,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32676";

cljs.core.async.t_cljs$core$async32676.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32676");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32676 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32676(map_LT___$1,f__$1,ch__$1,meta32674__$1,___$2,fn1__$1,meta32677){
return (new cljs.core.async.t_cljs$core$async32676(map_LT___$1,f__$1,ch__$1,meta32674__$1,___$2,fn1__$1,meta32677));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32676(self__.map_LT_,self__.f,self__.ch,self__.meta32674,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32674","meta32674",-575873001,null)], null);
});

cljs.core.async.t_cljs$core$async32673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32673";

cljs.core.async.t_cljs$core$async32673.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32673");
});

cljs.core.async.__GT_t_cljs$core$async32673 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32673(map_LT___$1,f__$1,ch__$1,meta32674){
return (new cljs.core.async.t_cljs$core$async32673(map_LT___$1,f__$1,ch__$1,meta32674));
});

}

return (new cljs.core.async.t_cljs$core$async32673(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32682 = (function (map_GT_,f,ch,meta32683){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32683 = meta32683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32684,meta32683__$1){
var self__ = this;
var _32684__$1 = this;
return (new cljs.core.async.t_cljs$core$async32682(self__.map_GT_,self__.f,self__.ch,meta32683__$1));
});

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32684){
var self__ = this;
var _32684__$1 = this;
return self__.meta32683;
});

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32683","meta32683",753219947,null)], null);
});

cljs.core.async.t_cljs$core$async32682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32682";

cljs.core.async.t_cljs$core$async32682.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32682");
});

cljs.core.async.__GT_t_cljs$core$async32682 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32682(map_GT___$1,f__$1,ch__$1,meta32683){
return (new cljs.core.async.t_cljs$core$async32682(map_GT___$1,f__$1,ch__$1,meta32683));
});

}

return (new cljs.core.async.t_cljs$core$async32682(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32688 = (function (filter_GT_,p,ch,meta32689){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32689 = meta32689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32690,meta32689__$1){
var self__ = this;
var _32690__$1 = this;
return (new cljs.core.async.t_cljs$core$async32688(self__.filter_GT_,self__.p,self__.ch,meta32689__$1));
});

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32690){
var self__ = this;
var _32690__$1 = this;
return self__.meta32689;
});

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32689","meta32689",1402506225,null)], null);
});

cljs.core.async.t_cljs$core$async32688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32688";

cljs.core.async.t_cljs$core$async32688.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32688");
});

cljs.core.async.__GT_t_cljs$core$async32688 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32688(filter_GT___$1,p__$1,ch__$1,meta32689){
return (new cljs.core.async.t_cljs$core$async32688(filter_GT___$1,p__$1,ch__$1,meta32689));
});

}

return (new cljs.core.async.t_cljs$core$async32688(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32691 = [];
var len__17863__auto___32735 = arguments.length;
var i__17864__auto___32736 = (0);
while(true){
if((i__17864__auto___32736 < len__17863__auto___32735)){
args32691.push((arguments[i__17864__auto___32736]));

var G__32737 = (i__17864__auto___32736 + (1));
i__17864__auto___32736 = G__32737;
continue;
} else {
}
break;
}

var G__32693 = args32691.length;
switch (G__32693) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32691.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___32739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___32739,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___32739,out){
return (function (state_32714){
var state_val_32715 = (state_32714[(1)]);
if((state_val_32715 === (7))){
var inst_32710 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32716_32740 = state_32714__$1;
(statearr_32716_32740[(2)] = inst_32710);

(statearr_32716_32740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (1))){
var state_32714__$1 = state_32714;
var statearr_32717_32741 = state_32714__$1;
(statearr_32717_32741[(2)] = null);

(statearr_32717_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (4))){
var inst_32696 = (state_32714[(7)]);
var inst_32696__$1 = (state_32714[(2)]);
var inst_32697 = (inst_32696__$1 == null);
var state_32714__$1 = (function (){var statearr_32718 = state_32714;
(statearr_32718[(7)] = inst_32696__$1);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32697)){
var statearr_32719_32742 = state_32714__$1;
(statearr_32719_32742[(1)] = (5));

} else {
var statearr_32720_32743 = state_32714__$1;
(statearr_32720_32743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (6))){
var inst_32696 = (state_32714[(7)]);
var inst_32701 = p.call(null,inst_32696);
var state_32714__$1 = state_32714;
if(cljs.core.truth_(inst_32701)){
var statearr_32721_32744 = state_32714__$1;
(statearr_32721_32744[(1)] = (8));

} else {
var statearr_32722_32745 = state_32714__$1;
(statearr_32722_32745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (3))){
var inst_32712 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32714__$1,inst_32712);
} else {
if((state_val_32715 === (2))){
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32714__$1,(4),ch);
} else {
if((state_val_32715 === (11))){
var inst_32704 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32723_32746 = state_32714__$1;
(statearr_32723_32746[(2)] = inst_32704);

(statearr_32723_32746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (9))){
var state_32714__$1 = state_32714;
var statearr_32724_32747 = state_32714__$1;
(statearr_32724_32747[(2)] = null);

(statearr_32724_32747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (5))){
var inst_32699 = cljs.core.async.close_BANG_.call(null,out);
var state_32714__$1 = state_32714;
var statearr_32725_32748 = state_32714__$1;
(statearr_32725_32748[(2)] = inst_32699);

(statearr_32725_32748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (10))){
var inst_32707 = (state_32714[(2)]);
var state_32714__$1 = (function (){var statearr_32726 = state_32714;
(statearr_32726[(8)] = inst_32707);

return statearr_32726;
})();
var statearr_32727_32749 = state_32714__$1;
(statearr_32727_32749[(2)] = null);

(statearr_32727_32749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (8))){
var inst_32696 = (state_32714[(7)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32714__$1,(11),out,inst_32696);
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
});})(c__18830__auto___32739,out))
;
return ((function (switch__18809__auto__,c__18830__auto___32739,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null,null,null];
(statearr_32731[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_32714){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32732){if((e32732 instanceof Object)){
var ex__18813__auto__ = e32732;
var statearr_32733_32750 = state_32714;
(statearr_32733_32750[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32751 = state_32714;
state_32714 = G__32751;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_32714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_32714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___32739,out))
})();
var state__18832__auto__ = (function (){var statearr_32734 = f__18831__auto__.call(null);
(statearr_32734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___32739);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___32739,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32752 = [];
var len__17863__auto___32755 = arguments.length;
var i__17864__auto___32756 = (0);
while(true){
if((i__17864__auto___32756 < len__17863__auto___32755)){
args32752.push((arguments[i__17864__auto___32756]));

var G__32757 = (i__17864__auto___32756 + (1));
i__17864__auto___32756 = G__32757;
continue;
} else {
}
break;
}

var G__32754 = args32752.length;
switch (G__32754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32752.length)].join('')));

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
var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__){
return (function (state_32924){
var state_val_32925 = (state_32924[(1)]);
if((state_val_32925 === (7))){
var inst_32920 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32926_32967 = state_32924__$1;
(statearr_32926_32967[(2)] = inst_32920);

(statearr_32926_32967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (20))){
var inst_32890 = (state_32924[(7)]);
var inst_32901 = (state_32924[(2)]);
var inst_32902 = cljs.core.next.call(null,inst_32890);
var inst_32876 = inst_32902;
var inst_32877 = null;
var inst_32878 = (0);
var inst_32879 = (0);
var state_32924__$1 = (function (){var statearr_32927 = state_32924;
(statearr_32927[(8)] = inst_32879);

(statearr_32927[(9)] = inst_32878);

(statearr_32927[(10)] = inst_32877);

(statearr_32927[(11)] = inst_32876);

(statearr_32927[(12)] = inst_32901);

return statearr_32927;
})();
var statearr_32928_32968 = state_32924__$1;
(statearr_32928_32968[(2)] = null);

(statearr_32928_32968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (1))){
var state_32924__$1 = state_32924;
var statearr_32929_32969 = state_32924__$1;
(statearr_32929_32969[(2)] = null);

(statearr_32929_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (4))){
var inst_32865 = (state_32924[(13)]);
var inst_32865__$1 = (state_32924[(2)]);
var inst_32866 = (inst_32865__$1 == null);
var state_32924__$1 = (function (){var statearr_32930 = state_32924;
(statearr_32930[(13)] = inst_32865__$1);

return statearr_32930;
})();
if(cljs.core.truth_(inst_32866)){
var statearr_32931_32970 = state_32924__$1;
(statearr_32931_32970[(1)] = (5));

} else {
var statearr_32932_32971 = state_32924__$1;
(statearr_32932_32971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (15))){
var state_32924__$1 = state_32924;
var statearr_32936_32972 = state_32924__$1;
(statearr_32936_32972[(2)] = null);

(statearr_32936_32972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (21))){
var state_32924__$1 = state_32924;
var statearr_32937_32973 = state_32924__$1;
(statearr_32937_32973[(2)] = null);

(statearr_32937_32973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (13))){
var inst_32879 = (state_32924[(8)]);
var inst_32878 = (state_32924[(9)]);
var inst_32877 = (state_32924[(10)]);
var inst_32876 = (state_32924[(11)]);
var inst_32886 = (state_32924[(2)]);
var inst_32887 = (inst_32879 + (1));
var tmp32933 = inst_32878;
var tmp32934 = inst_32877;
var tmp32935 = inst_32876;
var inst_32876__$1 = tmp32935;
var inst_32877__$1 = tmp32934;
var inst_32878__$1 = tmp32933;
var inst_32879__$1 = inst_32887;
var state_32924__$1 = (function (){var statearr_32938 = state_32924;
(statearr_32938[(8)] = inst_32879__$1);

(statearr_32938[(9)] = inst_32878__$1);

(statearr_32938[(10)] = inst_32877__$1);

(statearr_32938[(11)] = inst_32876__$1);

(statearr_32938[(14)] = inst_32886);

return statearr_32938;
})();
var statearr_32939_32974 = state_32924__$1;
(statearr_32939_32974[(2)] = null);

(statearr_32939_32974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (22))){
var state_32924__$1 = state_32924;
var statearr_32940_32975 = state_32924__$1;
(statearr_32940_32975[(2)] = null);

(statearr_32940_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (6))){
var inst_32865 = (state_32924[(13)]);
var inst_32874 = f.call(null,inst_32865);
var inst_32875 = cljs.core.seq.call(null,inst_32874);
var inst_32876 = inst_32875;
var inst_32877 = null;
var inst_32878 = (0);
var inst_32879 = (0);
var state_32924__$1 = (function (){var statearr_32941 = state_32924;
(statearr_32941[(8)] = inst_32879);

(statearr_32941[(9)] = inst_32878);

(statearr_32941[(10)] = inst_32877);

(statearr_32941[(11)] = inst_32876);

return statearr_32941;
})();
var statearr_32942_32976 = state_32924__$1;
(statearr_32942_32976[(2)] = null);

(statearr_32942_32976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (17))){
var inst_32890 = (state_32924[(7)]);
var inst_32894 = cljs.core.chunk_first.call(null,inst_32890);
var inst_32895 = cljs.core.chunk_rest.call(null,inst_32890);
var inst_32896 = cljs.core.count.call(null,inst_32894);
var inst_32876 = inst_32895;
var inst_32877 = inst_32894;
var inst_32878 = inst_32896;
var inst_32879 = (0);
var state_32924__$1 = (function (){var statearr_32943 = state_32924;
(statearr_32943[(8)] = inst_32879);

(statearr_32943[(9)] = inst_32878);

(statearr_32943[(10)] = inst_32877);

(statearr_32943[(11)] = inst_32876);

return statearr_32943;
})();
var statearr_32944_32977 = state_32924__$1;
(statearr_32944_32977[(2)] = null);

(statearr_32944_32977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (3))){
var inst_32922 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32924__$1,inst_32922);
} else {
if((state_val_32925 === (12))){
var inst_32910 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32945_32978 = state_32924__$1;
(statearr_32945_32978[(2)] = inst_32910);

(statearr_32945_32978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (2))){
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32924__$1,(4),in$);
} else {
if((state_val_32925 === (23))){
var inst_32918 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32946_32979 = state_32924__$1;
(statearr_32946_32979[(2)] = inst_32918);

(statearr_32946_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (19))){
var inst_32905 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32947_32980 = state_32924__$1;
(statearr_32947_32980[(2)] = inst_32905);

(statearr_32947_32980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (11))){
var inst_32890 = (state_32924[(7)]);
var inst_32876 = (state_32924[(11)]);
var inst_32890__$1 = cljs.core.seq.call(null,inst_32876);
var state_32924__$1 = (function (){var statearr_32948 = state_32924;
(statearr_32948[(7)] = inst_32890__$1);

return statearr_32948;
})();
if(inst_32890__$1){
var statearr_32949_32981 = state_32924__$1;
(statearr_32949_32981[(1)] = (14));

} else {
var statearr_32950_32982 = state_32924__$1;
(statearr_32950_32982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (9))){
var inst_32912 = (state_32924[(2)]);
var inst_32913 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32924__$1 = (function (){var statearr_32951 = state_32924;
(statearr_32951[(15)] = inst_32912);

return statearr_32951;
})();
if(cljs.core.truth_(inst_32913)){
var statearr_32952_32983 = state_32924__$1;
(statearr_32952_32983[(1)] = (21));

} else {
var statearr_32953_32984 = state_32924__$1;
(statearr_32953_32984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (5))){
var inst_32868 = cljs.core.async.close_BANG_.call(null,out);
var state_32924__$1 = state_32924;
var statearr_32954_32985 = state_32924__$1;
(statearr_32954_32985[(2)] = inst_32868);

(statearr_32954_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (14))){
var inst_32890 = (state_32924[(7)]);
var inst_32892 = cljs.core.chunked_seq_QMARK_.call(null,inst_32890);
var state_32924__$1 = state_32924;
if(inst_32892){
var statearr_32955_32986 = state_32924__$1;
(statearr_32955_32986[(1)] = (17));

} else {
var statearr_32956_32987 = state_32924__$1;
(statearr_32956_32987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (16))){
var inst_32908 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32957_32988 = state_32924__$1;
(statearr_32957_32988[(2)] = inst_32908);

(statearr_32957_32988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (10))){
var inst_32879 = (state_32924[(8)]);
var inst_32877 = (state_32924[(10)]);
var inst_32884 = cljs.core._nth.call(null,inst_32877,inst_32879);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32924__$1,(13),out,inst_32884);
} else {
if((state_val_32925 === (18))){
var inst_32890 = (state_32924[(7)]);
var inst_32899 = cljs.core.first.call(null,inst_32890);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32924__$1,(20),out,inst_32899);
} else {
if((state_val_32925 === (8))){
var inst_32879 = (state_32924[(8)]);
var inst_32878 = (state_32924[(9)]);
var inst_32881 = (inst_32879 < inst_32878);
var inst_32882 = inst_32881;
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32882)){
var statearr_32958_32989 = state_32924__$1;
(statearr_32958_32989[(1)] = (10));

} else {
var statearr_32959_32990 = state_32924__$1;
(statearr_32959_32990[(1)] = (11));

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
});})(c__18830__auto__))
;
return ((function (switch__18809__auto__,c__18830__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____1 = (function (state_32924){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_32924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e32964){if((e32964 instanceof Object)){
var ex__18813__auto__ = e32964;
var statearr_32965_32991 = state_32924;
(statearr_32965_32991[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32992 = state_32924;
state_32924 = G__32992;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__ = function(state_32924){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____1.call(this,state_32924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__))
})();
var state__18832__auto__ = (function (){var statearr_32966 = f__18831__auto__.call(null);
(statearr_32966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__))
);

return c__18830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32993 = [];
var len__17863__auto___32996 = arguments.length;
var i__17864__auto___32997 = (0);
while(true){
if((i__17864__auto___32997 < len__17863__auto___32996)){
args32993.push((arguments[i__17864__auto___32997]));

var G__32998 = (i__17864__auto___32997 + (1));
i__17864__auto___32997 = G__32998;
continue;
} else {
}
break;
}

var G__32995 = args32993.length;
switch (G__32995) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32993.length)].join('')));

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
var args33000 = [];
var len__17863__auto___33003 = arguments.length;
var i__17864__auto___33004 = (0);
while(true){
if((i__17864__auto___33004 < len__17863__auto___33003)){
args33000.push((arguments[i__17864__auto___33004]));

var G__33005 = (i__17864__auto___33004 + (1));
i__17864__auto___33004 = G__33005;
continue;
} else {
}
break;
}

var G__33002 = args33000.length;
switch (G__33002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33000.length)].join('')));

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
var args33007 = [];
var len__17863__auto___33058 = arguments.length;
var i__17864__auto___33059 = (0);
while(true){
if((i__17864__auto___33059 < len__17863__auto___33058)){
args33007.push((arguments[i__17864__auto___33059]));

var G__33060 = (i__17864__auto___33059 + (1));
i__17864__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var G__33009 = args33007.length;
switch (G__33009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33007.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___33062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33062,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33062,out){
return (function (state_33033){
var state_val_33034 = (state_33033[(1)]);
if((state_val_33034 === (7))){
var inst_33028 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33035_33063 = state_33033__$1;
(statearr_33035_33063[(2)] = inst_33028);

(statearr_33035_33063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (1))){
var inst_33010 = null;
var state_33033__$1 = (function (){var statearr_33036 = state_33033;
(statearr_33036[(7)] = inst_33010);

return statearr_33036;
})();
var statearr_33037_33064 = state_33033__$1;
(statearr_33037_33064[(2)] = null);

(statearr_33037_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (4))){
var inst_33013 = (state_33033[(8)]);
var inst_33013__$1 = (state_33033[(2)]);
var inst_33014 = (inst_33013__$1 == null);
var inst_33015 = cljs.core.not.call(null,inst_33014);
var state_33033__$1 = (function (){var statearr_33038 = state_33033;
(statearr_33038[(8)] = inst_33013__$1);

return statearr_33038;
})();
if(inst_33015){
var statearr_33039_33065 = state_33033__$1;
(statearr_33039_33065[(1)] = (5));

} else {
var statearr_33040_33066 = state_33033__$1;
(statearr_33040_33066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (6))){
var state_33033__$1 = state_33033;
var statearr_33041_33067 = state_33033__$1;
(statearr_33041_33067[(2)] = null);

(statearr_33041_33067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (3))){
var inst_33030 = (state_33033[(2)]);
var inst_33031 = cljs.core.async.close_BANG_.call(null,out);
var state_33033__$1 = (function (){var statearr_33042 = state_33033;
(statearr_33042[(9)] = inst_33030);

return statearr_33042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33033__$1,inst_33031);
} else {
if((state_val_33034 === (2))){
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33033__$1,(4),ch);
} else {
if((state_val_33034 === (11))){
var inst_33013 = (state_33033[(8)]);
var inst_33022 = (state_33033[(2)]);
var inst_33010 = inst_33013;
var state_33033__$1 = (function (){var statearr_33043 = state_33033;
(statearr_33043[(7)] = inst_33010);

(statearr_33043[(10)] = inst_33022);

return statearr_33043;
})();
var statearr_33044_33068 = state_33033__$1;
(statearr_33044_33068[(2)] = null);

(statearr_33044_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (9))){
var inst_33013 = (state_33033[(8)]);
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33033__$1,(11),out,inst_33013);
} else {
if((state_val_33034 === (5))){
var inst_33013 = (state_33033[(8)]);
var inst_33010 = (state_33033[(7)]);
var inst_33017 = cljs.core._EQ_.call(null,inst_33013,inst_33010);
var state_33033__$1 = state_33033;
if(inst_33017){
var statearr_33046_33069 = state_33033__$1;
(statearr_33046_33069[(1)] = (8));

} else {
var statearr_33047_33070 = state_33033__$1;
(statearr_33047_33070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (10))){
var inst_33025 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33048_33071 = state_33033__$1;
(statearr_33048_33071[(2)] = inst_33025);

(statearr_33048_33071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (8))){
var inst_33010 = (state_33033[(7)]);
var tmp33045 = inst_33010;
var inst_33010__$1 = tmp33045;
var state_33033__$1 = (function (){var statearr_33049 = state_33033;
(statearr_33049[(7)] = inst_33010__$1);

return statearr_33049;
})();
var statearr_33050_33072 = state_33033__$1;
(statearr_33050_33072[(2)] = null);

(statearr_33050_33072[(1)] = (2));


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
});})(c__18830__auto___33062,out))
;
return ((function (switch__18809__auto__,c__18830__auto___33062,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_33054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33054[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_33054[(1)] = (1));

return statearr_33054;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_33033){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33055){if((e33055 instanceof Object)){
var ex__18813__auto__ = e33055;
var statearr_33056_33073 = state_33033;
(statearr_33056_33073[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33074 = state_33033;
state_33033 = G__33074;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_33033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_33033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33062,out))
})();
var state__18832__auto__ = (function (){var statearr_33057 = f__18831__auto__.call(null);
(statearr_33057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33062);

return statearr_33057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33075 = [];
var len__17863__auto___33145 = arguments.length;
var i__17864__auto___33146 = (0);
while(true){
if((i__17864__auto___33146 < len__17863__auto___33145)){
args33075.push((arguments[i__17864__auto___33146]));

var G__33147 = (i__17864__auto___33146 + (1));
i__17864__auto___33146 = G__33147;
continue;
} else {
}
break;
}

var G__33077 = args33075.length;
switch (G__33077) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33075.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___33149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33149,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33149,out){
return (function (state_33115){
var state_val_33116 = (state_33115[(1)]);
if((state_val_33116 === (7))){
var inst_33111 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
var statearr_33117_33150 = state_33115__$1;
(statearr_33117_33150[(2)] = inst_33111);

(statearr_33117_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (1))){
var inst_33078 = (new Array(n));
var inst_33079 = inst_33078;
var inst_33080 = (0);
var state_33115__$1 = (function (){var statearr_33118 = state_33115;
(statearr_33118[(7)] = inst_33080);

(statearr_33118[(8)] = inst_33079);

return statearr_33118;
})();
var statearr_33119_33151 = state_33115__$1;
(statearr_33119_33151[(2)] = null);

(statearr_33119_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (4))){
var inst_33083 = (state_33115[(9)]);
var inst_33083__$1 = (state_33115[(2)]);
var inst_33084 = (inst_33083__$1 == null);
var inst_33085 = cljs.core.not.call(null,inst_33084);
var state_33115__$1 = (function (){var statearr_33120 = state_33115;
(statearr_33120[(9)] = inst_33083__$1);

return statearr_33120;
})();
if(inst_33085){
var statearr_33121_33152 = state_33115__$1;
(statearr_33121_33152[(1)] = (5));

} else {
var statearr_33122_33153 = state_33115__$1;
(statearr_33122_33153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (15))){
var inst_33105 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
var statearr_33123_33154 = state_33115__$1;
(statearr_33123_33154[(2)] = inst_33105);

(statearr_33123_33154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (13))){
var state_33115__$1 = state_33115;
var statearr_33124_33155 = state_33115__$1;
(statearr_33124_33155[(2)] = null);

(statearr_33124_33155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (6))){
var inst_33080 = (state_33115[(7)]);
var inst_33101 = (inst_33080 > (0));
var state_33115__$1 = state_33115;
if(cljs.core.truth_(inst_33101)){
var statearr_33125_33156 = state_33115__$1;
(statearr_33125_33156[(1)] = (12));

} else {
var statearr_33126_33157 = state_33115__$1;
(statearr_33126_33157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (3))){
var inst_33113 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33115__$1,inst_33113);
} else {
if((state_val_33116 === (12))){
var inst_33079 = (state_33115[(8)]);
var inst_33103 = cljs.core.vec.call(null,inst_33079);
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33115__$1,(15),out,inst_33103);
} else {
if((state_val_33116 === (2))){
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33115__$1,(4),ch);
} else {
if((state_val_33116 === (11))){
var inst_33095 = (state_33115[(2)]);
var inst_33096 = (new Array(n));
var inst_33079 = inst_33096;
var inst_33080 = (0);
var state_33115__$1 = (function (){var statearr_33127 = state_33115;
(statearr_33127[(10)] = inst_33095);

(statearr_33127[(7)] = inst_33080);

(statearr_33127[(8)] = inst_33079);

return statearr_33127;
})();
var statearr_33128_33158 = state_33115__$1;
(statearr_33128_33158[(2)] = null);

(statearr_33128_33158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (9))){
var inst_33079 = (state_33115[(8)]);
var inst_33093 = cljs.core.vec.call(null,inst_33079);
var state_33115__$1 = state_33115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33115__$1,(11),out,inst_33093);
} else {
if((state_val_33116 === (5))){
var inst_33083 = (state_33115[(9)]);
var inst_33088 = (state_33115[(11)]);
var inst_33080 = (state_33115[(7)]);
var inst_33079 = (state_33115[(8)]);
var inst_33087 = (inst_33079[inst_33080] = inst_33083);
var inst_33088__$1 = (inst_33080 + (1));
var inst_33089 = (inst_33088__$1 < n);
var state_33115__$1 = (function (){var statearr_33129 = state_33115;
(statearr_33129[(11)] = inst_33088__$1);

(statearr_33129[(12)] = inst_33087);

return statearr_33129;
})();
if(cljs.core.truth_(inst_33089)){
var statearr_33130_33159 = state_33115__$1;
(statearr_33130_33159[(1)] = (8));

} else {
var statearr_33131_33160 = state_33115__$1;
(statearr_33131_33160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (14))){
var inst_33108 = (state_33115[(2)]);
var inst_33109 = cljs.core.async.close_BANG_.call(null,out);
var state_33115__$1 = (function (){var statearr_33133 = state_33115;
(statearr_33133[(13)] = inst_33108);

return statearr_33133;
})();
var statearr_33134_33161 = state_33115__$1;
(statearr_33134_33161[(2)] = inst_33109);

(statearr_33134_33161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (10))){
var inst_33099 = (state_33115[(2)]);
var state_33115__$1 = state_33115;
var statearr_33135_33162 = state_33115__$1;
(statearr_33135_33162[(2)] = inst_33099);

(statearr_33135_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33116 === (8))){
var inst_33088 = (state_33115[(11)]);
var inst_33079 = (state_33115[(8)]);
var tmp33132 = inst_33079;
var inst_33079__$1 = tmp33132;
var inst_33080 = inst_33088;
var state_33115__$1 = (function (){var statearr_33136 = state_33115;
(statearr_33136[(7)] = inst_33080);

(statearr_33136[(8)] = inst_33079__$1);

return statearr_33136;
})();
var statearr_33137_33163 = state_33115__$1;
(statearr_33137_33163[(2)] = null);

(statearr_33137_33163[(1)] = (2));


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
});})(c__18830__auto___33149,out))
;
return ((function (switch__18809__auto__,c__18830__auto___33149,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_33115){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object)){
var ex__18813__auto__ = e33142;
var statearr_33143_33164 = state_33115;
(statearr_33143_33164[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_33115;
state_33115 = G__33165;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_33115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_33115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33149,out))
})();
var state__18832__auto__ = (function (){var statearr_33144 = f__18831__auto__.call(null);
(statearr_33144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33149);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33149,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33166 = [];
var len__17863__auto___33240 = arguments.length;
var i__17864__auto___33241 = (0);
while(true){
if((i__17864__auto___33241 < len__17863__auto___33240)){
args33166.push((arguments[i__17864__auto___33241]));

var G__33242 = (i__17864__auto___33241 + (1));
i__17864__auto___33241 = G__33242;
continue;
} else {
}
break;
}

var G__33168 = args33166.length;
switch (G__33168) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33166.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18830__auto___33244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto___33244,out){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto___33244,out){
return (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (7))){
var inst_33206 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33212_33245 = state_33210__$1;
(statearr_33212_33245[(2)] = inst_33206);

(statearr_33212_33245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (1))){
var inst_33169 = [];
var inst_33170 = inst_33169;
var inst_33171 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33210__$1 = (function (){var statearr_33213 = state_33210;
(statearr_33213[(7)] = inst_33171);

(statearr_33213[(8)] = inst_33170);

return statearr_33213;
})();
var statearr_33214_33246 = state_33210__$1;
(statearr_33214_33246[(2)] = null);

(statearr_33214_33246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (4))){
var inst_33174 = (state_33210[(9)]);
var inst_33174__$1 = (state_33210[(2)]);
var inst_33175 = (inst_33174__$1 == null);
var inst_33176 = cljs.core.not.call(null,inst_33175);
var state_33210__$1 = (function (){var statearr_33215 = state_33210;
(statearr_33215[(9)] = inst_33174__$1);

return statearr_33215;
})();
if(inst_33176){
var statearr_33216_33247 = state_33210__$1;
(statearr_33216_33247[(1)] = (5));

} else {
var statearr_33217_33248 = state_33210__$1;
(statearr_33217_33248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (15))){
var inst_33200 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33218_33249 = state_33210__$1;
(statearr_33218_33249[(2)] = inst_33200);

(statearr_33218_33249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (13))){
var state_33210__$1 = state_33210;
var statearr_33219_33250 = state_33210__$1;
(statearr_33219_33250[(2)] = null);

(statearr_33219_33250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (6))){
var inst_33170 = (state_33210[(8)]);
var inst_33195 = inst_33170.length;
var inst_33196 = (inst_33195 > (0));
var state_33210__$1 = state_33210;
if(cljs.core.truth_(inst_33196)){
var statearr_33220_33251 = state_33210__$1;
(statearr_33220_33251[(1)] = (12));

} else {
var statearr_33221_33252 = state_33210__$1;
(statearr_33221_33252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (3))){
var inst_33208 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33210__$1,inst_33208);
} else {
if((state_val_33211 === (12))){
var inst_33170 = (state_33210[(8)]);
var inst_33198 = cljs.core.vec.call(null,inst_33170);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33210__$1,(15),out,inst_33198);
} else {
if((state_val_33211 === (2))){
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33210__$1,(4),ch);
} else {
if((state_val_33211 === (11))){
var inst_33178 = (state_33210[(10)]);
var inst_33174 = (state_33210[(9)]);
var inst_33188 = (state_33210[(2)]);
var inst_33189 = [];
var inst_33190 = inst_33189.push(inst_33174);
var inst_33170 = inst_33189;
var inst_33171 = inst_33178;
var state_33210__$1 = (function (){var statearr_33222 = state_33210;
(statearr_33222[(7)] = inst_33171);

(statearr_33222[(8)] = inst_33170);

(statearr_33222[(11)] = inst_33188);

(statearr_33222[(12)] = inst_33190);

return statearr_33222;
})();
var statearr_33223_33253 = state_33210__$1;
(statearr_33223_33253[(2)] = null);

(statearr_33223_33253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (9))){
var inst_33170 = (state_33210[(8)]);
var inst_33186 = cljs.core.vec.call(null,inst_33170);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33210__$1,(11),out,inst_33186);
} else {
if((state_val_33211 === (5))){
var inst_33178 = (state_33210[(10)]);
var inst_33171 = (state_33210[(7)]);
var inst_33174 = (state_33210[(9)]);
var inst_33178__$1 = f.call(null,inst_33174);
var inst_33179 = cljs.core._EQ_.call(null,inst_33178__$1,inst_33171);
var inst_33180 = cljs.core.keyword_identical_QMARK_.call(null,inst_33171,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33181 = (inst_33179) || (inst_33180);
var state_33210__$1 = (function (){var statearr_33224 = state_33210;
(statearr_33224[(10)] = inst_33178__$1);

return statearr_33224;
})();
if(cljs.core.truth_(inst_33181)){
var statearr_33225_33254 = state_33210__$1;
(statearr_33225_33254[(1)] = (8));

} else {
var statearr_33226_33255 = state_33210__$1;
(statearr_33226_33255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (14))){
var inst_33203 = (state_33210[(2)]);
var inst_33204 = cljs.core.async.close_BANG_.call(null,out);
var state_33210__$1 = (function (){var statearr_33228 = state_33210;
(statearr_33228[(13)] = inst_33203);

return statearr_33228;
})();
var statearr_33229_33256 = state_33210__$1;
(statearr_33229_33256[(2)] = inst_33204);

(statearr_33229_33256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (10))){
var inst_33193 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33230_33257 = state_33210__$1;
(statearr_33230_33257[(2)] = inst_33193);

(statearr_33230_33257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (8))){
var inst_33178 = (state_33210[(10)]);
var inst_33170 = (state_33210[(8)]);
var inst_33174 = (state_33210[(9)]);
var inst_33183 = inst_33170.push(inst_33174);
var tmp33227 = inst_33170;
var inst_33170__$1 = tmp33227;
var inst_33171 = inst_33178;
var state_33210__$1 = (function (){var statearr_33231 = state_33210;
(statearr_33231[(14)] = inst_33183);

(statearr_33231[(7)] = inst_33171);

(statearr_33231[(8)] = inst_33170__$1);

return statearr_33231;
})();
var statearr_33232_33258 = state_33210__$1;
(statearr_33232_33258[(2)] = null);

(statearr_33232_33258[(1)] = (2));


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
});})(c__18830__auto___33244,out))
;
return ((function (switch__18809__auto__,c__18830__auto___33244,out){
return (function() {
var cljs$core$async$state_machine__18810__auto__ = null;
var cljs$core$async$state_machine__18810__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__18810__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__18810__auto____1 = (function (state_33210){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_33210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e33237){if((e33237 instanceof Object)){
var ex__18813__auto__ = e33237;
var statearr_33238_33259 = state_33210;
(statearr_33238_33259[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33260 = state_33210;
state_33210 = G__33260;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
cljs$core$async$state_machine__18810__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18810__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18810__auto____0;
cljs$core$async$state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18810__auto____1;
return cljs$core$async$state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto___33244,out))
})();
var state__18832__auto__ = (function (){var statearr_33239 = f__18831__auto__.call(null);
(statearr_33239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto___33244);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto___33244,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1477646664757