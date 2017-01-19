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
var args21487 = [];
var len__19864__auto___21493 = arguments.length;
var i__19865__auto___21494 = (0);
while(true){
if((i__19865__auto___21494 < len__19864__auto___21493)){
args21487.push((arguments[i__19865__auto___21494]));

var G__21495 = (i__19865__auto___21494 + (1));
i__19865__auto___21494 = G__21495;
continue;
} else {
}
break;
}

var G__21489 = args21487.length;
switch (G__21489) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21487.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21490 = (function (f,blockable,meta21491){
this.f = f;
this.blockable = blockable;
this.meta21491 = meta21491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21492,meta21491__$1){
var self__ = this;
var _21492__$1 = this;
return (new cljs.core.async.t_cljs$core$async21490(self__.f,self__.blockable,meta21491__$1));
});

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21492){
var self__ = this;
var _21492__$1 = this;
return self__.meta21491;
});

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21491","meta21491",-1313682488,null)], null);
});

cljs.core.async.t_cljs$core$async21490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21490";

cljs.core.async.t_cljs$core$async21490.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21490");
});

cljs.core.async.__GT_t_cljs$core$async21490 = (function cljs$core$async$__GT_t_cljs$core$async21490(f__$1,blockable__$1,meta21491){
return (new cljs.core.async.t_cljs$core$async21490(f__$1,blockable__$1,meta21491));
});

}

return (new cljs.core.async.t_cljs$core$async21490(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21499 = [];
var len__19864__auto___21502 = arguments.length;
var i__19865__auto___21503 = (0);
while(true){
if((i__19865__auto___21503 < len__19864__auto___21502)){
args21499.push((arguments[i__19865__auto___21503]));

var G__21504 = (i__19865__auto___21503 + (1));
i__19865__auto___21503 = G__21504;
continue;
} else {
}
break;
}

var G__21501 = args21499.length;
switch (G__21501) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21499.length)].join('')));

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
var args21506 = [];
var len__19864__auto___21509 = arguments.length;
var i__19865__auto___21510 = (0);
while(true){
if((i__19865__auto___21510 < len__19864__auto___21509)){
args21506.push((arguments[i__19865__auto___21510]));

var G__21511 = (i__19865__auto___21510 + (1));
i__19865__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var G__21508 = args21506.length;
switch (G__21508) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21506.length)].join('')));

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
var args21513 = [];
var len__19864__auto___21516 = arguments.length;
var i__19865__auto___21517 = (0);
while(true){
if((i__19865__auto___21517 < len__19864__auto___21516)){
args21513.push((arguments[i__19865__auto___21517]));

var G__21518 = (i__19865__auto___21517 + (1));
i__19865__auto___21517 = G__21518;
continue;
} else {
}
break;
}

var G__21515 = args21513.length;
switch (G__21515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21513.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21520 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21520);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21520,ret){
return (function (){
return fn1.call(null,val_21520);
});})(val_21520,ret))
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
var args21521 = [];
var len__19864__auto___21524 = arguments.length;
var i__19865__auto___21525 = (0);
while(true){
if((i__19865__auto___21525 < len__19864__auto___21524)){
args21521.push((arguments[i__19865__auto___21525]));

var G__21526 = (i__19865__auto___21525 + (1));
i__19865__auto___21525 = G__21526;
continue;
} else {
}
break;
}

var G__21523 = args21521.length;
switch (G__21523) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21521.length)].join('')));

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
var n__19674__auto___21528 = n;
var x_21529 = (0);
while(true){
if((x_21529 < n__19674__auto___21528)){
(a[x_21529] = (0));

var G__21530 = (x_21529 + (1));
x_21529 = G__21530;
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

var G__21531 = (i + (1));
i = G__21531;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21535 = (function (flag,meta21536){
this.flag = flag;
this.meta21536 = meta21536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21537,meta21536__$1){
var self__ = this;
var _21537__$1 = this;
return (new cljs.core.async.t_cljs$core$async21535(self__.flag,meta21536__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21537){
var self__ = this;
var _21537__$1 = this;
return self__.meta21536;
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21536","meta21536",1895449955,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21535";

cljs.core.async.t_cljs$core$async21535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21535");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21535 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21535(flag__$1,meta21536){
return (new cljs.core.async.t_cljs$core$async21535(flag__$1,meta21536));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21541 = (function (flag,cb,meta21542){
this.flag = flag;
this.cb = cb;
this.meta21542 = meta21542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21543,meta21542__$1){
var self__ = this;
var _21543__$1 = this;
return (new cljs.core.async.t_cljs$core$async21541(self__.flag,self__.cb,meta21542__$1));
});

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21543){
var self__ = this;
var _21543__$1 = this;
return self__.meta21542;
});

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21542","meta21542",1690469979,null)], null);
});

cljs.core.async.t_cljs$core$async21541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21541";

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21541");
});

cljs.core.async.__GT_t_cljs$core$async21541 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21541(flag__$1,cb__$1,meta21542){
return (new cljs.core.async.t_cljs$core$async21541(flag__$1,cb__$1,meta21542));
});

}

return (new cljs.core.async.t_cljs$core$async21541(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21545_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18756__auto__ = wport;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21546 = (i + (1));
i = G__21546;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18756__auto__ = ret;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18744__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18744__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18744__auto__;
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
var args__19871__auto__ = [];
var len__19864__auto___21552 = arguments.length;
var i__19865__auto___21553 = (0);
while(true){
if((i__19865__auto___21553 < len__19864__auto___21552)){
args__19871__auto__.push((arguments[i__19865__auto___21553]));

var G__21554 = (i__19865__auto___21553 + (1));
i__19865__auto___21553 = G__21554;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((1) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19872__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21549){
var map__21550 = p__21549;
var map__21550__$1 = ((((!((map__21550 == null)))?((((map__21550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21550):map__21550);
var opts = map__21550__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21547){
var G__21548 = cljs.core.first.call(null,seq21547);
var seq21547__$1 = cljs.core.next.call(null,seq21547);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21548,seq21547__$1);
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
var args21555 = [];
var len__19864__auto___21605 = arguments.length;
var i__19865__auto___21606 = (0);
while(true){
if((i__19865__auto___21606 < len__19864__auto___21605)){
args21555.push((arguments[i__19865__auto___21606]));

var G__21607 = (i__19865__auto___21606 + (1));
i__19865__auto___21606 = G__21607;
continue;
} else {
}
break;
}

var G__21557 = args21555.length;
switch (G__21557) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21555.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21296__auto___21609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___21609){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___21609){
return (function (state_21581){
var state_val_21582 = (state_21581[(1)]);
if((state_val_21582 === (7))){
var inst_21577 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
var statearr_21583_21610 = state_21581__$1;
(statearr_21583_21610[(2)] = inst_21577);

(statearr_21583_21610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (1))){
var state_21581__$1 = state_21581;
var statearr_21584_21611 = state_21581__$1;
(statearr_21584_21611[(2)] = null);

(statearr_21584_21611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (4))){
var inst_21560 = (state_21581[(7)]);
var inst_21560__$1 = (state_21581[(2)]);
var inst_21561 = (inst_21560__$1 == null);
var state_21581__$1 = (function (){var statearr_21585 = state_21581;
(statearr_21585[(7)] = inst_21560__$1);

return statearr_21585;
})();
if(cljs.core.truth_(inst_21561)){
var statearr_21586_21612 = state_21581__$1;
(statearr_21586_21612[(1)] = (5));

} else {
var statearr_21587_21613 = state_21581__$1;
(statearr_21587_21613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (13))){
var state_21581__$1 = state_21581;
var statearr_21588_21614 = state_21581__$1;
(statearr_21588_21614[(2)] = null);

(statearr_21588_21614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (6))){
var inst_21560 = (state_21581[(7)]);
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21581__$1,(11),to,inst_21560);
} else {
if((state_val_21582 === (3))){
var inst_21579 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21581__$1,inst_21579);
} else {
if((state_val_21582 === (12))){
var state_21581__$1 = state_21581;
var statearr_21589_21615 = state_21581__$1;
(statearr_21589_21615[(2)] = null);

(statearr_21589_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (2))){
var state_21581__$1 = state_21581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21581__$1,(4),from);
} else {
if((state_val_21582 === (11))){
var inst_21570 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
if(cljs.core.truth_(inst_21570)){
var statearr_21590_21616 = state_21581__$1;
(statearr_21590_21616[(1)] = (12));

} else {
var statearr_21591_21617 = state_21581__$1;
(statearr_21591_21617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (9))){
var state_21581__$1 = state_21581;
var statearr_21592_21618 = state_21581__$1;
(statearr_21592_21618[(2)] = null);

(statearr_21592_21618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (5))){
var state_21581__$1 = state_21581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21593_21619 = state_21581__$1;
(statearr_21593_21619[(1)] = (8));

} else {
var statearr_21594_21620 = state_21581__$1;
(statearr_21594_21620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (14))){
var inst_21575 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
var statearr_21595_21621 = state_21581__$1;
(statearr_21595_21621[(2)] = inst_21575);

(statearr_21595_21621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (10))){
var inst_21567 = (state_21581[(2)]);
var state_21581__$1 = state_21581;
var statearr_21596_21622 = state_21581__$1;
(statearr_21596_21622[(2)] = inst_21567);

(statearr_21596_21622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21582 === (8))){
var inst_21564 = cljs.core.async.close_BANG_.call(null,to);
var state_21581__$1 = state_21581;
var statearr_21597_21623 = state_21581__$1;
(statearr_21597_21623[(2)] = inst_21564);

(statearr_21597_21623[(1)] = (10));


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
});})(c__21296__auto___21609))
;
return ((function (switch__21281__auto__,c__21296__auto___21609){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_21601 = [null,null,null,null,null,null,null,null];
(statearr_21601[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_21601[(1)] = (1));

return statearr_21601;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_21581){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21602){if((e21602 instanceof Object)){
var ex__21285__auto__ = e21602;
var statearr_21603_21624 = state_21581;
(statearr_21603_21624[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21625 = state_21581;
state_21581 = G__21625;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_21581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_21581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___21609))
})();
var state__21298__auto__ = (function (){var statearr_21604 = f__21297__auto__.call(null);
(statearr_21604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___21609);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___21609))
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
return (function (p__21813){
var vec__21814 = p__21813;
var v = cljs.core.nth.call(null,vec__21814,(0),null);
var p = cljs.core.nth.call(null,vec__21814,(1),null);
var job = vec__21814;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21296__auto___22000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results){
return (function (state_21821){
var state_val_21822 = (state_21821[(1)]);
if((state_val_21822 === (1))){
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21821__$1,(2),res,v);
} else {
if((state_val_21822 === (2))){
var inst_21818 = (state_21821[(2)]);
var inst_21819 = cljs.core.async.close_BANG_.call(null,res);
var state_21821__$1 = (function (){var statearr_21823 = state_21821;
(statearr_21823[(7)] = inst_21818);

return statearr_21823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21821__$1,inst_21819);
} else {
return null;
}
}
});})(c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results))
;
return ((function (switch__21281__auto__,c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_21827 = [null,null,null,null,null,null,null,null];
(statearr_21827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__);

(statearr_21827[(1)] = (1));

return statearr_21827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1 = (function (state_21821){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21828){if((e21828 instanceof Object)){
var ex__21285__auto__ = e21828;
var statearr_21829_22001 = state_21821;
(statearr_21829_22001[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22002 = state_21821;
state_21821 = G__22002;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = function(state_21821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1.call(this,state_21821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results))
})();
var state__21298__auto__ = (function (){var statearr_21830 = f__21297__auto__.call(null);
(statearr_21830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22000);

return statearr_21830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___22000,res,vec__21814,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21831){
var vec__21832 = p__21831;
var v = cljs.core.nth.call(null,vec__21832,(0),null);
var p = cljs.core.nth.call(null,vec__21832,(1),null);
var job = vec__21832;
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
var n__19674__auto___22003 = n;
var __22004 = (0);
while(true){
if((__22004 < n__19674__auto___22003)){
var G__21835_22005 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21835_22005) {
case "compute":
var c__21296__auto___22007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22004,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (__22004,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function (state_21848){
var state_val_21849 = (state_21848[(1)]);
if((state_val_21849 === (1))){
var state_21848__$1 = state_21848;
var statearr_21850_22008 = state_21848__$1;
(statearr_21850_22008[(2)] = null);

(statearr_21850_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21849 === (2))){
var state_21848__$1 = state_21848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21848__$1,(4),jobs);
} else {
if((state_val_21849 === (3))){
var inst_21846 = (state_21848[(2)]);
var state_21848__$1 = state_21848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21848__$1,inst_21846);
} else {
if((state_val_21849 === (4))){
var inst_21838 = (state_21848[(2)]);
var inst_21839 = process.call(null,inst_21838);
var state_21848__$1 = state_21848;
if(cljs.core.truth_(inst_21839)){
var statearr_21851_22009 = state_21848__$1;
(statearr_21851_22009[(1)] = (5));

} else {
var statearr_21852_22010 = state_21848__$1;
(statearr_21852_22010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21849 === (5))){
var state_21848__$1 = state_21848;
var statearr_21853_22011 = state_21848__$1;
(statearr_21853_22011[(2)] = null);

(statearr_21853_22011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21849 === (6))){
var state_21848__$1 = state_21848;
var statearr_21854_22012 = state_21848__$1;
(statearr_21854_22012[(2)] = null);

(statearr_21854_22012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21849 === (7))){
var inst_21844 = (state_21848[(2)]);
var state_21848__$1 = state_21848;
var statearr_21855_22013 = state_21848__$1;
(statearr_21855_22013[(2)] = inst_21844);

(statearr_21855_22013[(1)] = (3));


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
});})(__22004,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
;
return ((function (__22004,switch__21281__auto__,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_21859 = [null,null,null,null,null,null,null];
(statearr_21859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__);

(statearr_21859[(1)] = (1));

return statearr_21859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1 = (function (state_21848){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21860){if((e21860 instanceof Object)){
var ex__21285__auto__ = e21860;
var statearr_21861_22014 = state_21848;
(statearr_21861_22014[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22015 = state_21848;
state_21848 = G__22015;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = function(state_21848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1.call(this,state_21848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__;
})()
;})(__22004,switch__21281__auto__,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
})();
var state__21298__auto__ = (function (){var statearr_21862 = f__21297__auto__.call(null);
(statearr_21862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22007);

return statearr_21862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(__22004,c__21296__auto___22007,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
);


break;
case "async":
var c__21296__auto___22016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22004,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (__22004,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function (state_21875){
var state_val_21876 = (state_21875[(1)]);
if((state_val_21876 === (1))){
var state_21875__$1 = state_21875;
var statearr_21877_22017 = state_21875__$1;
(statearr_21877_22017[(2)] = null);

(statearr_21877_22017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (2))){
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21875__$1,(4),jobs);
} else {
if((state_val_21876 === (3))){
var inst_21873 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21875__$1,inst_21873);
} else {
if((state_val_21876 === (4))){
var inst_21865 = (state_21875[(2)]);
var inst_21866 = async.call(null,inst_21865);
var state_21875__$1 = state_21875;
if(cljs.core.truth_(inst_21866)){
var statearr_21878_22018 = state_21875__$1;
(statearr_21878_22018[(1)] = (5));

} else {
var statearr_21879_22019 = state_21875__$1;
(statearr_21879_22019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (5))){
var state_21875__$1 = state_21875;
var statearr_21880_22020 = state_21875__$1;
(statearr_21880_22020[(2)] = null);

(statearr_21880_22020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (6))){
var state_21875__$1 = state_21875;
var statearr_21881_22021 = state_21875__$1;
(statearr_21881_22021[(2)] = null);

(statearr_21881_22021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21876 === (7))){
var inst_21871 = (state_21875[(2)]);
var state_21875__$1 = state_21875;
var statearr_21882_22022 = state_21875__$1;
(statearr_21882_22022[(2)] = inst_21871);

(statearr_21882_22022[(1)] = (3));


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
});})(__22004,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
;
return ((function (__22004,switch__21281__auto__,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_21886 = [null,null,null,null,null,null,null];
(statearr_21886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__);

(statearr_21886[(1)] = (1));

return statearr_21886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1 = (function (state_21875){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21887){if((e21887 instanceof Object)){
var ex__21285__auto__ = e21887;
var statearr_21888_22023 = state_21875;
(statearr_21888_22023[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22024 = state_21875;
state_21875 = G__22024;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = function(state_21875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1.call(this,state_21875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__;
})()
;})(__22004,switch__21281__auto__,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
})();
var state__21298__auto__ = (function (){var statearr_21889 = f__21297__auto__.call(null);
(statearr_21889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22016);

return statearr_21889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(__22004,c__21296__auto___22016,G__21835_22005,n__19674__auto___22003,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22025 = (__22004 + (1));
__22004 = G__22025;
continue;
} else {
}
break;
}

var c__21296__auto___22026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___22026,jobs,results,process,async){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___22026,jobs,results,process,async){
return (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (1))){
var state_21911__$1 = state_21911;
var statearr_21913_22027 = state_21911__$1;
(statearr_21913_22027[(2)] = null);

(statearr_21913_22027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (2))){
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21911__$1,(4),from);
} else {
if((state_val_21912 === (3))){
var inst_21909 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else {
if((state_val_21912 === (4))){
var inst_21892 = (state_21911[(7)]);
var inst_21892__$1 = (state_21911[(2)]);
var inst_21893 = (inst_21892__$1 == null);
var state_21911__$1 = (function (){var statearr_21914 = state_21911;
(statearr_21914[(7)] = inst_21892__$1);

return statearr_21914;
})();
if(cljs.core.truth_(inst_21893)){
var statearr_21915_22028 = state_21911__$1;
(statearr_21915_22028[(1)] = (5));

} else {
var statearr_21916_22029 = state_21911__$1;
(statearr_21916_22029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (5))){
var inst_21895 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21911__$1 = state_21911;
var statearr_21917_22030 = state_21911__$1;
(statearr_21917_22030[(2)] = inst_21895);

(statearr_21917_22030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (6))){
var inst_21897 = (state_21911[(8)]);
var inst_21892 = (state_21911[(7)]);
var inst_21897__$1 = cljs.core.async.chan.call(null,(1));
var inst_21898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21899 = [inst_21892,inst_21897__$1];
var inst_21900 = (new cljs.core.PersistentVector(null,2,(5),inst_21898,inst_21899,null));
var state_21911__$1 = (function (){var statearr_21918 = state_21911;
(statearr_21918[(8)] = inst_21897__$1);

return statearr_21918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(8),jobs,inst_21900);
} else {
if((state_val_21912 === (7))){
var inst_21907 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21919_22031 = state_21911__$1;
(statearr_21919_22031[(2)] = inst_21907);

(statearr_21919_22031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (8))){
var inst_21897 = (state_21911[(8)]);
var inst_21902 = (state_21911[(2)]);
var state_21911__$1 = (function (){var statearr_21920 = state_21911;
(statearr_21920[(9)] = inst_21902);

return statearr_21920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(9),results,inst_21897);
} else {
if((state_val_21912 === (9))){
var inst_21904 = (state_21911[(2)]);
var state_21911__$1 = (function (){var statearr_21921 = state_21911;
(statearr_21921[(10)] = inst_21904);

return statearr_21921;
})();
var statearr_21922_22032 = state_21911__$1;
(statearr_21922_22032[(2)] = null);

(statearr_21922_22032[(1)] = (2));


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
});})(c__21296__auto___22026,jobs,results,process,async))
;
return ((function (switch__21281__auto__,c__21296__auto___22026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_21926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__);

(statearr_21926[(1)] = (1));

return statearr_21926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1 = (function (state_21911){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21927){if((e21927 instanceof Object)){
var ex__21285__auto__ = e21927;
var statearr_21928_22033 = state_21911;
(statearr_21928_22033[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22034 = state_21911;
state_21911 = G__22034;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___22026,jobs,results,process,async))
})();
var state__21298__auto__ = (function (){var statearr_21929 = f__21297__auto__.call(null);
(statearr_21929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22026);

return statearr_21929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___22026,jobs,results,process,async))
);


var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,jobs,results,process,async){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,jobs,results,process,async){
return (function (state_21967){
var state_val_21968 = (state_21967[(1)]);
if((state_val_21968 === (7))){
var inst_21963 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
var statearr_21969_22035 = state_21967__$1;
(statearr_21969_22035[(2)] = inst_21963);

(statearr_21969_22035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (20))){
var state_21967__$1 = state_21967;
var statearr_21970_22036 = state_21967__$1;
(statearr_21970_22036[(2)] = null);

(statearr_21970_22036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (1))){
var state_21967__$1 = state_21967;
var statearr_21971_22037 = state_21967__$1;
(statearr_21971_22037[(2)] = null);

(statearr_21971_22037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (4))){
var inst_21932 = (state_21967[(7)]);
var inst_21932__$1 = (state_21967[(2)]);
var inst_21933 = (inst_21932__$1 == null);
var state_21967__$1 = (function (){var statearr_21972 = state_21967;
(statearr_21972[(7)] = inst_21932__$1);

return statearr_21972;
})();
if(cljs.core.truth_(inst_21933)){
var statearr_21973_22038 = state_21967__$1;
(statearr_21973_22038[(1)] = (5));

} else {
var statearr_21974_22039 = state_21967__$1;
(statearr_21974_22039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (15))){
var inst_21945 = (state_21967[(8)]);
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21967__$1,(18),to,inst_21945);
} else {
if((state_val_21968 === (21))){
var inst_21958 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
var statearr_21975_22040 = state_21967__$1;
(statearr_21975_22040[(2)] = inst_21958);

(statearr_21975_22040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (13))){
var inst_21960 = (state_21967[(2)]);
var state_21967__$1 = (function (){var statearr_21976 = state_21967;
(statearr_21976[(9)] = inst_21960);

return statearr_21976;
})();
var statearr_21977_22041 = state_21967__$1;
(statearr_21977_22041[(2)] = null);

(statearr_21977_22041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (6))){
var inst_21932 = (state_21967[(7)]);
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21967__$1,(11),inst_21932);
} else {
if((state_val_21968 === (17))){
var inst_21953 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
if(cljs.core.truth_(inst_21953)){
var statearr_21978_22042 = state_21967__$1;
(statearr_21978_22042[(1)] = (19));

} else {
var statearr_21979_22043 = state_21967__$1;
(statearr_21979_22043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (3))){
var inst_21965 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21967__$1,inst_21965);
} else {
if((state_val_21968 === (12))){
var inst_21942 = (state_21967[(10)]);
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21967__$1,(14),inst_21942);
} else {
if((state_val_21968 === (2))){
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21967__$1,(4),results);
} else {
if((state_val_21968 === (19))){
var state_21967__$1 = state_21967;
var statearr_21980_22044 = state_21967__$1;
(statearr_21980_22044[(2)] = null);

(statearr_21980_22044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (11))){
var inst_21942 = (state_21967[(2)]);
var state_21967__$1 = (function (){var statearr_21981 = state_21967;
(statearr_21981[(10)] = inst_21942);

return statearr_21981;
})();
var statearr_21982_22045 = state_21967__$1;
(statearr_21982_22045[(2)] = null);

(statearr_21982_22045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (9))){
var state_21967__$1 = state_21967;
var statearr_21983_22046 = state_21967__$1;
(statearr_21983_22046[(2)] = null);

(statearr_21983_22046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (5))){
var state_21967__$1 = state_21967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21984_22047 = state_21967__$1;
(statearr_21984_22047[(1)] = (8));

} else {
var statearr_21985_22048 = state_21967__$1;
(statearr_21985_22048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (14))){
var inst_21945 = (state_21967[(8)]);
var inst_21947 = (state_21967[(11)]);
var inst_21945__$1 = (state_21967[(2)]);
var inst_21946 = (inst_21945__$1 == null);
var inst_21947__$1 = cljs.core.not.call(null,inst_21946);
var state_21967__$1 = (function (){var statearr_21986 = state_21967;
(statearr_21986[(8)] = inst_21945__$1);

(statearr_21986[(11)] = inst_21947__$1);

return statearr_21986;
})();
if(inst_21947__$1){
var statearr_21987_22049 = state_21967__$1;
(statearr_21987_22049[(1)] = (15));

} else {
var statearr_21988_22050 = state_21967__$1;
(statearr_21988_22050[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (16))){
var inst_21947 = (state_21967[(11)]);
var state_21967__$1 = state_21967;
var statearr_21989_22051 = state_21967__$1;
(statearr_21989_22051[(2)] = inst_21947);

(statearr_21989_22051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (10))){
var inst_21939 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
var statearr_21990_22052 = state_21967__$1;
(statearr_21990_22052[(2)] = inst_21939);

(statearr_21990_22052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (18))){
var inst_21950 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
var statearr_21991_22053 = state_21967__$1;
(statearr_21991_22053[(2)] = inst_21950);

(statearr_21991_22053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (8))){
var inst_21936 = cljs.core.async.close_BANG_.call(null,to);
var state_21967__$1 = state_21967;
var statearr_21992_22054 = state_21967__$1;
(statearr_21992_22054[(2)] = inst_21936);

(statearr_21992_22054[(1)] = (10));


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
});})(c__21296__auto__,jobs,results,process,async))
;
return ((function (switch__21281__auto__,c__21296__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_21996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__);

(statearr_21996[(1)] = (1));

return statearr_21996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1 = (function (state_21967){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_21967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e21997){if((e21997 instanceof Object)){
var ex__21285__auto__ = e21997;
var statearr_21998_22055 = state_21967;
(statearr_21998_22055[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22056 = state_21967;
state_21967 = G__22056;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__ = function(state_21967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1.call(this,state_21967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,jobs,results,process,async))
})();
var state__21298__auto__ = (function (){var statearr_21999 = f__21297__auto__.call(null);
(statearr_21999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_21999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,jobs,results,process,async))
);

return c__21296__auto__;
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
var args22057 = [];
var len__19864__auto___22060 = arguments.length;
var i__19865__auto___22061 = (0);
while(true){
if((i__19865__auto___22061 < len__19864__auto___22060)){
args22057.push((arguments[i__19865__auto___22061]));

var G__22062 = (i__19865__auto___22061 + (1));
i__19865__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var G__22059 = args22057.length;
switch (G__22059) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22057.length)].join('')));

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
var args22064 = [];
var len__19864__auto___22067 = arguments.length;
var i__19865__auto___22068 = (0);
while(true){
if((i__19865__auto___22068 < len__19864__auto___22067)){
args22064.push((arguments[i__19865__auto___22068]));

var G__22069 = (i__19865__auto___22068 + (1));
i__19865__auto___22068 = G__22069;
continue;
} else {
}
break;
}

var G__22066 = args22064.length;
switch (G__22066) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22064.length)].join('')));

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
var args22071 = [];
var len__19864__auto___22124 = arguments.length;
var i__19865__auto___22125 = (0);
while(true){
if((i__19865__auto___22125 < len__19864__auto___22124)){
args22071.push((arguments[i__19865__auto___22125]));

var G__22126 = (i__19865__auto___22125 + (1));
i__19865__auto___22125 = G__22126;
continue;
} else {
}
break;
}

var G__22073 = args22071.length;
switch (G__22073) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22071.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21296__auto___22128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___22128,tc,fc){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___22128,tc,fc){
return (function (state_22099){
var state_val_22100 = (state_22099[(1)]);
if((state_val_22100 === (7))){
var inst_22095 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22101_22129 = state_22099__$1;
(statearr_22101_22129[(2)] = inst_22095);

(statearr_22101_22129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (1))){
var state_22099__$1 = state_22099;
var statearr_22102_22130 = state_22099__$1;
(statearr_22102_22130[(2)] = null);

(statearr_22102_22130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (4))){
var inst_22076 = (state_22099[(7)]);
var inst_22076__$1 = (state_22099[(2)]);
var inst_22077 = (inst_22076__$1 == null);
var state_22099__$1 = (function (){var statearr_22103 = state_22099;
(statearr_22103[(7)] = inst_22076__$1);

return statearr_22103;
})();
if(cljs.core.truth_(inst_22077)){
var statearr_22104_22131 = state_22099__$1;
(statearr_22104_22131[(1)] = (5));

} else {
var statearr_22105_22132 = state_22099__$1;
(statearr_22105_22132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (13))){
var state_22099__$1 = state_22099;
var statearr_22106_22133 = state_22099__$1;
(statearr_22106_22133[(2)] = null);

(statearr_22106_22133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (6))){
var inst_22076 = (state_22099[(7)]);
var inst_22082 = p.call(null,inst_22076);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22082)){
var statearr_22107_22134 = state_22099__$1;
(statearr_22107_22134[(1)] = (9));

} else {
var statearr_22108_22135 = state_22099__$1;
(statearr_22108_22135[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (3))){
var inst_22097 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22099__$1,inst_22097);
} else {
if((state_val_22100 === (12))){
var state_22099__$1 = state_22099;
var statearr_22109_22136 = state_22099__$1;
(statearr_22109_22136[(2)] = null);

(statearr_22109_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (2))){
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22099__$1,(4),ch);
} else {
if((state_val_22100 === (11))){
var inst_22076 = (state_22099[(7)]);
var inst_22086 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22099__$1,(8),inst_22086,inst_22076);
} else {
if((state_val_22100 === (9))){
var state_22099__$1 = state_22099;
var statearr_22110_22137 = state_22099__$1;
(statearr_22110_22137[(2)] = tc);

(statearr_22110_22137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (5))){
var inst_22079 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22080 = cljs.core.async.close_BANG_.call(null,fc);
var state_22099__$1 = (function (){var statearr_22111 = state_22099;
(statearr_22111[(8)] = inst_22079);

return statearr_22111;
})();
var statearr_22112_22138 = state_22099__$1;
(statearr_22112_22138[(2)] = inst_22080);

(statearr_22112_22138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (14))){
var inst_22093 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22113_22139 = state_22099__$1;
(statearr_22113_22139[(2)] = inst_22093);

(statearr_22113_22139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (10))){
var state_22099__$1 = state_22099;
var statearr_22114_22140 = state_22099__$1;
(statearr_22114_22140[(2)] = fc);

(statearr_22114_22140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (8))){
var inst_22088 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22088)){
var statearr_22115_22141 = state_22099__$1;
(statearr_22115_22141[(1)] = (12));

} else {
var statearr_22116_22142 = state_22099__$1;
(statearr_22116_22142[(1)] = (13));

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
});})(c__21296__auto___22128,tc,fc))
;
return ((function (switch__21281__auto__,c__21296__auto___22128,tc,fc){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_22120 = [null,null,null,null,null,null,null,null,null];
(statearr_22120[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_22120[(1)] = (1));

return statearr_22120;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_22099){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_22099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e22121){if((e22121 instanceof Object)){
var ex__21285__auto__ = e22121;
var statearr_22122_22143 = state_22099;
(statearr_22122_22143[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22144 = state_22099;
state_22099 = G__22144;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_22099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_22099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___22128,tc,fc))
})();
var state__21298__auto__ = (function (){var statearr_22123 = f__21297__auto__.call(null);
(statearr_22123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22128);

return statearr_22123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___22128,tc,fc))
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
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_22208){
var state_val_22209 = (state_22208[(1)]);
if((state_val_22209 === (7))){
var inst_22204 = (state_22208[(2)]);
var state_22208__$1 = state_22208;
var statearr_22210_22231 = state_22208__$1;
(statearr_22210_22231[(2)] = inst_22204);

(statearr_22210_22231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (1))){
var inst_22188 = init;
var state_22208__$1 = (function (){var statearr_22211 = state_22208;
(statearr_22211[(7)] = inst_22188);

return statearr_22211;
})();
var statearr_22212_22232 = state_22208__$1;
(statearr_22212_22232[(2)] = null);

(statearr_22212_22232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (4))){
var inst_22191 = (state_22208[(8)]);
var inst_22191__$1 = (state_22208[(2)]);
var inst_22192 = (inst_22191__$1 == null);
var state_22208__$1 = (function (){var statearr_22213 = state_22208;
(statearr_22213[(8)] = inst_22191__$1);

return statearr_22213;
})();
if(cljs.core.truth_(inst_22192)){
var statearr_22214_22233 = state_22208__$1;
(statearr_22214_22233[(1)] = (5));

} else {
var statearr_22215_22234 = state_22208__$1;
(statearr_22215_22234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (6))){
var inst_22191 = (state_22208[(8)]);
var inst_22188 = (state_22208[(7)]);
var inst_22195 = (state_22208[(9)]);
var inst_22195__$1 = f.call(null,inst_22188,inst_22191);
var inst_22196 = cljs.core.reduced_QMARK_.call(null,inst_22195__$1);
var state_22208__$1 = (function (){var statearr_22216 = state_22208;
(statearr_22216[(9)] = inst_22195__$1);

return statearr_22216;
})();
if(inst_22196){
var statearr_22217_22235 = state_22208__$1;
(statearr_22217_22235[(1)] = (8));

} else {
var statearr_22218_22236 = state_22208__$1;
(statearr_22218_22236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (3))){
var inst_22206 = (state_22208[(2)]);
var state_22208__$1 = state_22208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22208__$1,inst_22206);
} else {
if((state_val_22209 === (2))){
var state_22208__$1 = state_22208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22208__$1,(4),ch);
} else {
if((state_val_22209 === (9))){
var inst_22195 = (state_22208[(9)]);
var inst_22188 = inst_22195;
var state_22208__$1 = (function (){var statearr_22219 = state_22208;
(statearr_22219[(7)] = inst_22188);

return statearr_22219;
})();
var statearr_22220_22237 = state_22208__$1;
(statearr_22220_22237[(2)] = null);

(statearr_22220_22237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (5))){
var inst_22188 = (state_22208[(7)]);
var state_22208__$1 = state_22208;
var statearr_22221_22238 = state_22208__$1;
(statearr_22221_22238[(2)] = inst_22188);

(statearr_22221_22238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (10))){
var inst_22202 = (state_22208[(2)]);
var state_22208__$1 = state_22208;
var statearr_22222_22239 = state_22208__$1;
(statearr_22222_22239[(2)] = inst_22202);

(statearr_22222_22239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22209 === (8))){
var inst_22195 = (state_22208[(9)]);
var inst_22198 = cljs.core.deref.call(null,inst_22195);
var state_22208__$1 = state_22208;
var statearr_22223_22240 = state_22208__$1;
(statearr_22223_22240[(2)] = inst_22198);

(statearr_22223_22240[(1)] = (10));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21282__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21282__auto____0 = (function (){
var statearr_22227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22227[(0)] = cljs$core$async$reduce_$_state_machine__21282__auto__);

(statearr_22227[(1)] = (1));

return statearr_22227;
});
var cljs$core$async$reduce_$_state_machine__21282__auto____1 = (function (state_22208){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_22208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e22228){if((e22228 instanceof Object)){
var ex__21285__auto__ = e22228;
var statearr_22229_22241 = state_22208;
(statearr_22229_22241[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22242 = state_22208;
state_22208 = G__22242;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21282__auto__ = function(state_22208){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21282__auto____1.call(this,state_22208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21282__auto____0;
cljs$core$async$reduce_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21282__auto____1;
return cljs$core$async$reduce_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_22230 = f__21297__auto__.call(null);
(statearr_22230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_22230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
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
var args22243 = [];
var len__19864__auto___22295 = arguments.length;
var i__19865__auto___22296 = (0);
while(true){
if((i__19865__auto___22296 < len__19864__auto___22295)){
args22243.push((arguments[i__19865__auto___22296]));

var G__22297 = (i__19865__auto___22296 + (1));
i__19865__auto___22296 = G__22297;
continue;
} else {
}
break;
}

var G__22245 = args22243.length;
switch (G__22245) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22243.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_22270){
var state_val_22271 = (state_22270[(1)]);
if((state_val_22271 === (7))){
var inst_22252 = (state_22270[(2)]);
var state_22270__$1 = state_22270;
var statearr_22272_22299 = state_22270__$1;
(statearr_22272_22299[(2)] = inst_22252);

(statearr_22272_22299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (1))){
var inst_22246 = cljs.core.seq.call(null,coll);
var inst_22247 = inst_22246;
var state_22270__$1 = (function (){var statearr_22273 = state_22270;
(statearr_22273[(7)] = inst_22247);

return statearr_22273;
})();
var statearr_22274_22300 = state_22270__$1;
(statearr_22274_22300[(2)] = null);

(statearr_22274_22300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (4))){
var inst_22247 = (state_22270[(7)]);
var inst_22250 = cljs.core.first.call(null,inst_22247);
var state_22270__$1 = state_22270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22270__$1,(7),ch,inst_22250);
} else {
if((state_val_22271 === (13))){
var inst_22264 = (state_22270[(2)]);
var state_22270__$1 = state_22270;
var statearr_22275_22301 = state_22270__$1;
(statearr_22275_22301[(2)] = inst_22264);

(statearr_22275_22301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (6))){
var inst_22255 = (state_22270[(2)]);
var state_22270__$1 = state_22270;
if(cljs.core.truth_(inst_22255)){
var statearr_22276_22302 = state_22270__$1;
(statearr_22276_22302[(1)] = (8));

} else {
var statearr_22277_22303 = state_22270__$1;
(statearr_22277_22303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (3))){
var inst_22268 = (state_22270[(2)]);
var state_22270__$1 = state_22270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22270__$1,inst_22268);
} else {
if((state_val_22271 === (12))){
var state_22270__$1 = state_22270;
var statearr_22278_22304 = state_22270__$1;
(statearr_22278_22304[(2)] = null);

(statearr_22278_22304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (2))){
var inst_22247 = (state_22270[(7)]);
var state_22270__$1 = state_22270;
if(cljs.core.truth_(inst_22247)){
var statearr_22279_22305 = state_22270__$1;
(statearr_22279_22305[(1)] = (4));

} else {
var statearr_22280_22306 = state_22270__$1;
(statearr_22280_22306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (11))){
var inst_22261 = cljs.core.async.close_BANG_.call(null,ch);
var state_22270__$1 = state_22270;
var statearr_22281_22307 = state_22270__$1;
(statearr_22281_22307[(2)] = inst_22261);

(statearr_22281_22307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (9))){
var state_22270__$1 = state_22270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22282_22308 = state_22270__$1;
(statearr_22282_22308[(1)] = (11));

} else {
var statearr_22283_22309 = state_22270__$1;
(statearr_22283_22309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (5))){
var inst_22247 = (state_22270[(7)]);
var state_22270__$1 = state_22270;
var statearr_22284_22310 = state_22270__$1;
(statearr_22284_22310[(2)] = inst_22247);

(statearr_22284_22310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (10))){
var inst_22266 = (state_22270[(2)]);
var state_22270__$1 = state_22270;
var statearr_22285_22311 = state_22270__$1;
(statearr_22285_22311[(2)] = inst_22266);

(statearr_22285_22311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22271 === (8))){
var inst_22247 = (state_22270[(7)]);
var inst_22257 = cljs.core.next.call(null,inst_22247);
var inst_22247__$1 = inst_22257;
var state_22270__$1 = (function (){var statearr_22286 = state_22270;
(statearr_22286[(7)] = inst_22247__$1);

return statearr_22286;
})();
var statearr_22287_22312 = state_22270__$1;
(statearr_22287_22312[(2)] = null);

(statearr_22287_22312[(1)] = (2));


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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_22291 = [null,null,null,null,null,null,null,null];
(statearr_22291[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_22291[(1)] = (1));

return statearr_22291;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_22270){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_22270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e22292){if((e22292 instanceof Object)){
var ex__21285__auto__ = e22292;
var statearr_22293_22313 = state_22270;
(statearr_22293_22313[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22314 = state_22270;
state_22270 = G__22314;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_22270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_22270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_22294 = f__21297__auto__.call(null);
(statearr_22294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_22294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
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
var x__19419__auto__ = (((_ == null))?null:_);
var m__19420__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,_);
} else {
var m__19420__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,_);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19420__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,ch);
} else {
var m__19420__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,ch);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m);
} else {
var m__19420__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22540 = (function (ch,cs,meta22541){
this.ch = ch;
this.cs = cs;
this.meta22541 = meta22541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22542,meta22541__$1){
var self__ = this;
var _22542__$1 = this;
return (new cljs.core.async.t_cljs$core$async22540(self__.ch,self__.cs,meta22541__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22542){
var self__ = this;
var _22542__$1 = this;
return self__.meta22541;
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22541","meta22541",-1886601516,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22540";

cljs.core.async.t_cljs$core$async22540.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async22540");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22540 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22540(ch__$1,cs__$1,meta22541){
return (new cljs.core.async.t_cljs$core$async22540(ch__$1,cs__$1,meta22541));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22540(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21296__auto___22765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___22765,cs,m,dchan,dctr,done){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___22765,cs,m,dchan,dctr,done){
return (function (state_22677){
var state_val_22678 = (state_22677[(1)]);
if((state_val_22678 === (7))){
var inst_22673 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22679_22766 = state_22677__$1;
(statearr_22679_22766[(2)] = inst_22673);

(statearr_22679_22766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (20))){
var inst_22576 = (state_22677[(7)]);
var inst_22588 = cljs.core.first.call(null,inst_22576);
var inst_22589 = cljs.core.nth.call(null,inst_22588,(0),null);
var inst_22590 = cljs.core.nth.call(null,inst_22588,(1),null);
var state_22677__$1 = (function (){var statearr_22680 = state_22677;
(statearr_22680[(8)] = inst_22589);

return statearr_22680;
})();
if(cljs.core.truth_(inst_22590)){
var statearr_22681_22767 = state_22677__$1;
(statearr_22681_22767[(1)] = (22));

} else {
var statearr_22682_22768 = state_22677__$1;
(statearr_22682_22768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (27))){
var inst_22618 = (state_22677[(9)]);
var inst_22545 = (state_22677[(10)]);
var inst_22625 = (state_22677[(11)]);
var inst_22620 = (state_22677[(12)]);
var inst_22625__$1 = cljs.core._nth.call(null,inst_22618,inst_22620);
var inst_22626 = cljs.core.async.put_BANG_.call(null,inst_22625__$1,inst_22545,done);
var state_22677__$1 = (function (){var statearr_22683 = state_22677;
(statearr_22683[(11)] = inst_22625__$1);

return statearr_22683;
})();
if(cljs.core.truth_(inst_22626)){
var statearr_22684_22769 = state_22677__$1;
(statearr_22684_22769[(1)] = (30));

} else {
var statearr_22685_22770 = state_22677__$1;
(statearr_22685_22770[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (1))){
var state_22677__$1 = state_22677;
var statearr_22686_22771 = state_22677__$1;
(statearr_22686_22771[(2)] = null);

(statearr_22686_22771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (24))){
var inst_22576 = (state_22677[(7)]);
var inst_22595 = (state_22677[(2)]);
var inst_22596 = cljs.core.next.call(null,inst_22576);
var inst_22554 = inst_22596;
var inst_22555 = null;
var inst_22556 = (0);
var inst_22557 = (0);
var state_22677__$1 = (function (){var statearr_22687 = state_22677;
(statearr_22687[(13)] = inst_22556);

(statearr_22687[(14)] = inst_22595);

(statearr_22687[(15)] = inst_22555);

(statearr_22687[(16)] = inst_22557);

(statearr_22687[(17)] = inst_22554);

return statearr_22687;
})();
var statearr_22688_22772 = state_22677__$1;
(statearr_22688_22772[(2)] = null);

(statearr_22688_22772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (39))){
var state_22677__$1 = state_22677;
var statearr_22692_22773 = state_22677__$1;
(statearr_22692_22773[(2)] = null);

(statearr_22692_22773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (4))){
var inst_22545 = (state_22677[(10)]);
var inst_22545__$1 = (state_22677[(2)]);
var inst_22546 = (inst_22545__$1 == null);
var state_22677__$1 = (function (){var statearr_22693 = state_22677;
(statearr_22693[(10)] = inst_22545__$1);

return statearr_22693;
})();
if(cljs.core.truth_(inst_22546)){
var statearr_22694_22774 = state_22677__$1;
(statearr_22694_22774[(1)] = (5));

} else {
var statearr_22695_22775 = state_22677__$1;
(statearr_22695_22775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (15))){
var inst_22556 = (state_22677[(13)]);
var inst_22555 = (state_22677[(15)]);
var inst_22557 = (state_22677[(16)]);
var inst_22554 = (state_22677[(17)]);
var inst_22572 = (state_22677[(2)]);
var inst_22573 = (inst_22557 + (1));
var tmp22689 = inst_22556;
var tmp22690 = inst_22555;
var tmp22691 = inst_22554;
var inst_22554__$1 = tmp22691;
var inst_22555__$1 = tmp22690;
var inst_22556__$1 = tmp22689;
var inst_22557__$1 = inst_22573;
var state_22677__$1 = (function (){var statearr_22696 = state_22677;
(statearr_22696[(13)] = inst_22556__$1);

(statearr_22696[(18)] = inst_22572);

(statearr_22696[(15)] = inst_22555__$1);

(statearr_22696[(16)] = inst_22557__$1);

(statearr_22696[(17)] = inst_22554__$1);

return statearr_22696;
})();
var statearr_22697_22776 = state_22677__$1;
(statearr_22697_22776[(2)] = null);

(statearr_22697_22776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (21))){
var inst_22599 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22701_22777 = state_22677__$1;
(statearr_22701_22777[(2)] = inst_22599);

(statearr_22701_22777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (31))){
var inst_22625 = (state_22677[(11)]);
var inst_22629 = done.call(null,null);
var inst_22630 = cljs.core.async.untap_STAR_.call(null,m,inst_22625);
var state_22677__$1 = (function (){var statearr_22702 = state_22677;
(statearr_22702[(19)] = inst_22629);

return statearr_22702;
})();
var statearr_22703_22778 = state_22677__$1;
(statearr_22703_22778[(2)] = inst_22630);

(statearr_22703_22778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (32))){
var inst_22617 = (state_22677[(20)]);
var inst_22618 = (state_22677[(9)]);
var inst_22619 = (state_22677[(21)]);
var inst_22620 = (state_22677[(12)]);
var inst_22632 = (state_22677[(2)]);
var inst_22633 = (inst_22620 + (1));
var tmp22698 = inst_22617;
var tmp22699 = inst_22618;
var tmp22700 = inst_22619;
var inst_22617__$1 = tmp22698;
var inst_22618__$1 = tmp22699;
var inst_22619__$1 = tmp22700;
var inst_22620__$1 = inst_22633;
var state_22677__$1 = (function (){var statearr_22704 = state_22677;
(statearr_22704[(20)] = inst_22617__$1);

(statearr_22704[(9)] = inst_22618__$1);

(statearr_22704[(22)] = inst_22632);

(statearr_22704[(21)] = inst_22619__$1);

(statearr_22704[(12)] = inst_22620__$1);

return statearr_22704;
})();
var statearr_22705_22779 = state_22677__$1;
(statearr_22705_22779[(2)] = null);

(statearr_22705_22779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (40))){
var inst_22645 = (state_22677[(23)]);
var inst_22649 = done.call(null,null);
var inst_22650 = cljs.core.async.untap_STAR_.call(null,m,inst_22645);
var state_22677__$1 = (function (){var statearr_22706 = state_22677;
(statearr_22706[(24)] = inst_22649);

return statearr_22706;
})();
var statearr_22707_22780 = state_22677__$1;
(statearr_22707_22780[(2)] = inst_22650);

(statearr_22707_22780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (33))){
var inst_22636 = (state_22677[(25)]);
var inst_22638 = cljs.core.chunked_seq_QMARK_.call(null,inst_22636);
var state_22677__$1 = state_22677;
if(inst_22638){
var statearr_22708_22781 = state_22677__$1;
(statearr_22708_22781[(1)] = (36));

} else {
var statearr_22709_22782 = state_22677__$1;
(statearr_22709_22782[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (13))){
var inst_22566 = (state_22677[(26)]);
var inst_22569 = cljs.core.async.close_BANG_.call(null,inst_22566);
var state_22677__$1 = state_22677;
var statearr_22710_22783 = state_22677__$1;
(statearr_22710_22783[(2)] = inst_22569);

(statearr_22710_22783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (22))){
var inst_22589 = (state_22677[(8)]);
var inst_22592 = cljs.core.async.close_BANG_.call(null,inst_22589);
var state_22677__$1 = state_22677;
var statearr_22711_22784 = state_22677__$1;
(statearr_22711_22784[(2)] = inst_22592);

(statearr_22711_22784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (36))){
var inst_22636 = (state_22677[(25)]);
var inst_22640 = cljs.core.chunk_first.call(null,inst_22636);
var inst_22641 = cljs.core.chunk_rest.call(null,inst_22636);
var inst_22642 = cljs.core.count.call(null,inst_22640);
var inst_22617 = inst_22641;
var inst_22618 = inst_22640;
var inst_22619 = inst_22642;
var inst_22620 = (0);
var state_22677__$1 = (function (){var statearr_22712 = state_22677;
(statearr_22712[(20)] = inst_22617);

(statearr_22712[(9)] = inst_22618);

(statearr_22712[(21)] = inst_22619);

(statearr_22712[(12)] = inst_22620);

return statearr_22712;
})();
var statearr_22713_22785 = state_22677__$1;
(statearr_22713_22785[(2)] = null);

(statearr_22713_22785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (41))){
var inst_22636 = (state_22677[(25)]);
var inst_22652 = (state_22677[(2)]);
var inst_22653 = cljs.core.next.call(null,inst_22636);
var inst_22617 = inst_22653;
var inst_22618 = null;
var inst_22619 = (0);
var inst_22620 = (0);
var state_22677__$1 = (function (){var statearr_22714 = state_22677;
(statearr_22714[(20)] = inst_22617);

(statearr_22714[(9)] = inst_22618);

(statearr_22714[(27)] = inst_22652);

(statearr_22714[(21)] = inst_22619);

(statearr_22714[(12)] = inst_22620);

return statearr_22714;
})();
var statearr_22715_22786 = state_22677__$1;
(statearr_22715_22786[(2)] = null);

(statearr_22715_22786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (43))){
var state_22677__$1 = state_22677;
var statearr_22716_22787 = state_22677__$1;
(statearr_22716_22787[(2)] = null);

(statearr_22716_22787[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (29))){
var inst_22661 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22717_22788 = state_22677__$1;
(statearr_22717_22788[(2)] = inst_22661);

(statearr_22717_22788[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (44))){
var inst_22670 = (state_22677[(2)]);
var state_22677__$1 = (function (){var statearr_22718 = state_22677;
(statearr_22718[(28)] = inst_22670);

return statearr_22718;
})();
var statearr_22719_22789 = state_22677__$1;
(statearr_22719_22789[(2)] = null);

(statearr_22719_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (6))){
var inst_22609 = (state_22677[(29)]);
var inst_22608 = cljs.core.deref.call(null,cs);
var inst_22609__$1 = cljs.core.keys.call(null,inst_22608);
var inst_22610 = cljs.core.count.call(null,inst_22609__$1);
var inst_22611 = cljs.core.reset_BANG_.call(null,dctr,inst_22610);
var inst_22616 = cljs.core.seq.call(null,inst_22609__$1);
var inst_22617 = inst_22616;
var inst_22618 = null;
var inst_22619 = (0);
var inst_22620 = (0);
var state_22677__$1 = (function (){var statearr_22720 = state_22677;
(statearr_22720[(30)] = inst_22611);

(statearr_22720[(20)] = inst_22617);

(statearr_22720[(9)] = inst_22618);

(statearr_22720[(29)] = inst_22609__$1);

(statearr_22720[(21)] = inst_22619);

(statearr_22720[(12)] = inst_22620);

return statearr_22720;
})();
var statearr_22721_22790 = state_22677__$1;
(statearr_22721_22790[(2)] = null);

(statearr_22721_22790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (28))){
var inst_22617 = (state_22677[(20)]);
var inst_22636 = (state_22677[(25)]);
var inst_22636__$1 = cljs.core.seq.call(null,inst_22617);
var state_22677__$1 = (function (){var statearr_22722 = state_22677;
(statearr_22722[(25)] = inst_22636__$1);

return statearr_22722;
})();
if(inst_22636__$1){
var statearr_22723_22791 = state_22677__$1;
(statearr_22723_22791[(1)] = (33));

} else {
var statearr_22724_22792 = state_22677__$1;
(statearr_22724_22792[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (25))){
var inst_22619 = (state_22677[(21)]);
var inst_22620 = (state_22677[(12)]);
var inst_22622 = (inst_22620 < inst_22619);
var inst_22623 = inst_22622;
var state_22677__$1 = state_22677;
if(cljs.core.truth_(inst_22623)){
var statearr_22725_22793 = state_22677__$1;
(statearr_22725_22793[(1)] = (27));

} else {
var statearr_22726_22794 = state_22677__$1;
(statearr_22726_22794[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (34))){
var state_22677__$1 = state_22677;
var statearr_22727_22795 = state_22677__$1;
(statearr_22727_22795[(2)] = null);

(statearr_22727_22795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (17))){
var state_22677__$1 = state_22677;
var statearr_22728_22796 = state_22677__$1;
(statearr_22728_22796[(2)] = null);

(statearr_22728_22796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (3))){
var inst_22675 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22677__$1,inst_22675);
} else {
if((state_val_22678 === (12))){
var inst_22604 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22729_22797 = state_22677__$1;
(statearr_22729_22797[(2)] = inst_22604);

(statearr_22729_22797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (2))){
var state_22677__$1 = state_22677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22677__$1,(4),ch);
} else {
if((state_val_22678 === (23))){
var state_22677__$1 = state_22677;
var statearr_22730_22798 = state_22677__$1;
(statearr_22730_22798[(2)] = null);

(statearr_22730_22798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (35))){
var inst_22659 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22731_22799 = state_22677__$1;
(statearr_22731_22799[(2)] = inst_22659);

(statearr_22731_22799[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (19))){
var inst_22576 = (state_22677[(7)]);
var inst_22580 = cljs.core.chunk_first.call(null,inst_22576);
var inst_22581 = cljs.core.chunk_rest.call(null,inst_22576);
var inst_22582 = cljs.core.count.call(null,inst_22580);
var inst_22554 = inst_22581;
var inst_22555 = inst_22580;
var inst_22556 = inst_22582;
var inst_22557 = (0);
var state_22677__$1 = (function (){var statearr_22732 = state_22677;
(statearr_22732[(13)] = inst_22556);

(statearr_22732[(15)] = inst_22555);

(statearr_22732[(16)] = inst_22557);

(statearr_22732[(17)] = inst_22554);

return statearr_22732;
})();
var statearr_22733_22800 = state_22677__$1;
(statearr_22733_22800[(2)] = null);

(statearr_22733_22800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (11))){
var inst_22576 = (state_22677[(7)]);
var inst_22554 = (state_22677[(17)]);
var inst_22576__$1 = cljs.core.seq.call(null,inst_22554);
var state_22677__$1 = (function (){var statearr_22734 = state_22677;
(statearr_22734[(7)] = inst_22576__$1);

return statearr_22734;
})();
if(inst_22576__$1){
var statearr_22735_22801 = state_22677__$1;
(statearr_22735_22801[(1)] = (16));

} else {
var statearr_22736_22802 = state_22677__$1;
(statearr_22736_22802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (9))){
var inst_22606 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22737_22803 = state_22677__$1;
(statearr_22737_22803[(2)] = inst_22606);

(statearr_22737_22803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (5))){
var inst_22552 = cljs.core.deref.call(null,cs);
var inst_22553 = cljs.core.seq.call(null,inst_22552);
var inst_22554 = inst_22553;
var inst_22555 = null;
var inst_22556 = (0);
var inst_22557 = (0);
var state_22677__$1 = (function (){var statearr_22738 = state_22677;
(statearr_22738[(13)] = inst_22556);

(statearr_22738[(15)] = inst_22555);

(statearr_22738[(16)] = inst_22557);

(statearr_22738[(17)] = inst_22554);

return statearr_22738;
})();
var statearr_22739_22804 = state_22677__$1;
(statearr_22739_22804[(2)] = null);

(statearr_22739_22804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (14))){
var state_22677__$1 = state_22677;
var statearr_22740_22805 = state_22677__$1;
(statearr_22740_22805[(2)] = null);

(statearr_22740_22805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (45))){
var inst_22667 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22741_22806 = state_22677__$1;
(statearr_22741_22806[(2)] = inst_22667);

(statearr_22741_22806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (26))){
var inst_22609 = (state_22677[(29)]);
var inst_22663 = (state_22677[(2)]);
var inst_22664 = cljs.core.seq.call(null,inst_22609);
var state_22677__$1 = (function (){var statearr_22742 = state_22677;
(statearr_22742[(31)] = inst_22663);

return statearr_22742;
})();
if(inst_22664){
var statearr_22743_22807 = state_22677__$1;
(statearr_22743_22807[(1)] = (42));

} else {
var statearr_22744_22808 = state_22677__$1;
(statearr_22744_22808[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (16))){
var inst_22576 = (state_22677[(7)]);
var inst_22578 = cljs.core.chunked_seq_QMARK_.call(null,inst_22576);
var state_22677__$1 = state_22677;
if(inst_22578){
var statearr_22745_22809 = state_22677__$1;
(statearr_22745_22809[(1)] = (19));

} else {
var statearr_22746_22810 = state_22677__$1;
(statearr_22746_22810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (38))){
var inst_22656 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22747_22811 = state_22677__$1;
(statearr_22747_22811[(2)] = inst_22656);

(statearr_22747_22811[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (30))){
var state_22677__$1 = state_22677;
var statearr_22748_22812 = state_22677__$1;
(statearr_22748_22812[(2)] = null);

(statearr_22748_22812[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (10))){
var inst_22555 = (state_22677[(15)]);
var inst_22557 = (state_22677[(16)]);
var inst_22565 = cljs.core._nth.call(null,inst_22555,inst_22557);
var inst_22566 = cljs.core.nth.call(null,inst_22565,(0),null);
var inst_22567 = cljs.core.nth.call(null,inst_22565,(1),null);
var state_22677__$1 = (function (){var statearr_22749 = state_22677;
(statearr_22749[(26)] = inst_22566);

return statearr_22749;
})();
if(cljs.core.truth_(inst_22567)){
var statearr_22750_22813 = state_22677__$1;
(statearr_22750_22813[(1)] = (13));

} else {
var statearr_22751_22814 = state_22677__$1;
(statearr_22751_22814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (18))){
var inst_22602 = (state_22677[(2)]);
var state_22677__$1 = state_22677;
var statearr_22752_22815 = state_22677__$1;
(statearr_22752_22815[(2)] = inst_22602);

(statearr_22752_22815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (42))){
var state_22677__$1 = state_22677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22677__$1,(45),dchan);
} else {
if((state_val_22678 === (37))){
var inst_22545 = (state_22677[(10)]);
var inst_22645 = (state_22677[(23)]);
var inst_22636 = (state_22677[(25)]);
var inst_22645__$1 = cljs.core.first.call(null,inst_22636);
var inst_22646 = cljs.core.async.put_BANG_.call(null,inst_22645__$1,inst_22545,done);
var state_22677__$1 = (function (){var statearr_22753 = state_22677;
(statearr_22753[(23)] = inst_22645__$1);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22646)){
var statearr_22754_22816 = state_22677__$1;
(statearr_22754_22816[(1)] = (39));

} else {
var statearr_22755_22817 = state_22677__$1;
(statearr_22755_22817[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22678 === (8))){
var inst_22556 = (state_22677[(13)]);
var inst_22557 = (state_22677[(16)]);
var inst_22559 = (inst_22557 < inst_22556);
var inst_22560 = inst_22559;
var state_22677__$1 = state_22677;
if(cljs.core.truth_(inst_22560)){
var statearr_22756_22818 = state_22677__$1;
(statearr_22756_22818[(1)] = (10));

} else {
var statearr_22757_22819 = state_22677__$1;
(statearr_22757_22819[(1)] = (11));

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
});})(c__21296__auto___22765,cs,m,dchan,dctr,done))
;
return ((function (switch__21281__auto__,c__21296__auto___22765,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21282__auto__ = null;
var cljs$core$async$mult_$_state_machine__21282__auto____0 = (function (){
var statearr_22761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22761[(0)] = cljs$core$async$mult_$_state_machine__21282__auto__);

(statearr_22761[(1)] = (1));

return statearr_22761;
});
var cljs$core$async$mult_$_state_machine__21282__auto____1 = (function (state_22677){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_22677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e22762){if((e22762 instanceof Object)){
var ex__21285__auto__ = e22762;
var statearr_22763_22820 = state_22677;
(statearr_22763_22820[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22821 = state_22677;
state_22677 = G__22821;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21282__auto__ = function(state_22677){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21282__auto____1.call(this,state_22677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21282__auto____0;
cljs$core$async$mult_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21282__auto____1;
return cljs$core$async$mult_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___22765,cs,m,dchan,dctr,done))
})();
var state__21298__auto__ = (function (){var statearr_22764 = f__21297__auto__.call(null);
(statearr_22764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___22765);

return statearr_22764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___22765,cs,m,dchan,dctr,done))
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
var args22822 = [];
var len__19864__auto___22825 = arguments.length;
var i__19865__auto___22826 = (0);
while(true){
if((i__19865__auto___22826 < len__19864__auto___22825)){
args22822.push((arguments[i__19865__auto___22826]));

var G__22827 = (i__19865__auto___22826 + (1));
i__19865__auto___22826 = G__22827;
continue;
} else {
}
break;
}

var G__22824 = args22822.length;
switch (G__22824) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22822.length)].join('')));

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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,ch);
} else {
var m__19420__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,ch);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,ch);
} else {
var m__19420__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,ch);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m);
} else {
var m__19420__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,state_map);
} else {
var m__19420__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,state_map);
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
var x__19419__auto__ = (((m == null))?null:m);
var m__19420__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,m,mode);
} else {
var m__19420__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___22839 = arguments.length;
var i__19865__auto___22840 = (0);
while(true){
if((i__19865__auto___22840 < len__19864__auto___22839)){
args__19871__auto__.push((arguments[i__19865__auto___22840]));

var G__22841 = (i__19865__auto___22840 + (1));
i__19865__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22833){
var map__22834 = p__22833;
var map__22834__$1 = ((((!((map__22834 == null)))?((((map__22834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22834):map__22834);
var opts = map__22834__$1;
var statearr_22836_22842 = state;
(statearr_22836_22842[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22834,map__22834__$1,opts){
return (function (val){
var statearr_22837_22843 = state;
(statearr_22837_22843[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22834,map__22834__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22838_22844 = state;
(statearr_22838_22844[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22829){
var G__22830 = cljs.core.first.call(null,seq22829);
var seq22829__$1 = cljs.core.next.call(null,seq22829);
var G__22831 = cljs.core.first.call(null,seq22829__$1);
var seq22829__$2 = cljs.core.next.call(null,seq22829__$1);
var G__22832 = cljs.core.first.call(null,seq22829__$2);
var seq22829__$3 = cljs.core.next.call(null,seq22829__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22830,G__22831,G__22832,seq22829__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23012 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23013){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23013 = meta23013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23014,meta23013__$1){
var self__ = this;
var _23014__$1 = this;
return (new cljs.core.async.t_cljs$core$async23012(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23014){
var self__ = this;
var _23014__$1 = this;
return self__.meta23013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23012.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23013","meta23013",-386016568,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23012";

cljs.core.async.t_cljs$core$async23012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23012(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23013){
return (new cljs.core.async.t_cljs$core$async23012(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23012(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21296__auto___23179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23031 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23180 = state_23116__$1;
(statearr_23118_23180[(2)] = inst_23031);

(statearr_23118_23180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (20))){
var inst_23043 = (state_23116[(7)]);
var state_23116__$1 = state_23116;
var statearr_23119_23181 = state_23116__$1;
(statearr_23119_23181[(2)] = inst_23043);

(statearr_23119_23181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (27))){
var state_23116__$1 = state_23116;
var statearr_23120_23182 = state_23116__$1;
(statearr_23120_23182[(2)] = null);

(statearr_23120_23182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var inst_23018 = (state_23116[(8)]);
var inst_23018__$1 = calc_state.call(null);
var inst_23020 = (inst_23018__$1 == null);
var inst_23021 = cljs.core.not.call(null,inst_23020);
var state_23116__$1 = (function (){var statearr_23121 = state_23116;
(statearr_23121[(8)] = inst_23018__$1);

return statearr_23121;
})();
if(inst_23021){
var statearr_23122_23183 = state_23116__$1;
(statearr_23122_23183[(1)] = (2));

} else {
var statearr_23123_23184 = state_23116__$1;
(statearr_23123_23184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (24))){
var inst_23067 = (state_23116[(9)]);
var inst_23076 = (state_23116[(10)]);
var inst_23090 = (state_23116[(11)]);
var inst_23090__$1 = inst_23067.call(null,inst_23076);
var state_23116__$1 = (function (){var statearr_23124 = state_23116;
(statearr_23124[(11)] = inst_23090__$1);

return statearr_23124;
})();
if(cljs.core.truth_(inst_23090__$1)){
var statearr_23125_23185 = state_23116__$1;
(statearr_23125_23185[(1)] = (29));

} else {
var statearr_23126_23186 = state_23116__$1;
(statearr_23126_23186[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_23034 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23034)){
var statearr_23127_23187 = state_23116__$1;
(statearr_23127_23187[(1)] = (8));

} else {
var statearr_23128_23188 = state_23116__$1;
(statearr_23128_23188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (15))){
var inst_23061 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23061)){
var statearr_23129_23189 = state_23116__$1;
(statearr_23129_23189[(1)] = (19));

} else {
var statearr_23130_23190 = state_23116__$1;
(statearr_23130_23190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (21))){
var inst_23066 = (state_23116[(12)]);
var inst_23066__$1 = (state_23116[(2)]);
var inst_23067 = cljs.core.get.call(null,inst_23066__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23068 = cljs.core.get.call(null,inst_23066__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23069 = cljs.core.get.call(null,inst_23066__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23116__$1 = (function (){var statearr_23131 = state_23116;
(statearr_23131[(12)] = inst_23066__$1);

(statearr_23131[(13)] = inst_23068);

(statearr_23131[(9)] = inst_23067);

return statearr_23131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23116__$1,(22),inst_23069);
} else {
if((state_val_23117 === (31))){
var inst_23098 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23098)){
var statearr_23132_23191 = state_23116__$1;
(statearr_23132_23191[(1)] = (32));

} else {
var statearr_23133_23192 = state_23116__$1;
(statearr_23133_23192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (32))){
var inst_23075 = (state_23116[(14)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(35),out,inst_23075);
} else {
if((state_val_23117 === (33))){
var inst_23066 = (state_23116[(12)]);
var inst_23043 = inst_23066;
var state_23116__$1 = (function (){var statearr_23134 = state_23116;
(statearr_23134[(7)] = inst_23043);

return statearr_23134;
})();
var statearr_23135_23193 = state_23116__$1;
(statearr_23135_23193[(2)] = null);

(statearr_23135_23193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (13))){
var inst_23043 = (state_23116[(7)]);
var inst_23050 = inst_23043.cljs$lang$protocol_mask$partition0$;
var inst_23051 = (inst_23050 & (64));
var inst_23052 = inst_23043.cljs$core$ISeq$;
var inst_23053 = (cljs.core.PROTOCOL_SENTINEL === inst_23052);
var inst_23054 = (inst_23051) || (inst_23053);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23054)){
var statearr_23136_23194 = state_23116__$1;
(statearr_23136_23194[(1)] = (16));

} else {
var statearr_23137_23195 = state_23116__$1;
(statearr_23137_23195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (22))){
var inst_23075 = (state_23116[(14)]);
var inst_23076 = (state_23116[(10)]);
var inst_23074 = (state_23116[(2)]);
var inst_23075__$1 = cljs.core.nth.call(null,inst_23074,(0),null);
var inst_23076__$1 = cljs.core.nth.call(null,inst_23074,(1),null);
var inst_23077 = (inst_23075__$1 == null);
var inst_23078 = cljs.core._EQ_.call(null,inst_23076__$1,change);
var inst_23079 = (inst_23077) || (inst_23078);
var state_23116__$1 = (function (){var statearr_23138 = state_23116;
(statearr_23138[(14)] = inst_23075__$1);

(statearr_23138[(10)] = inst_23076__$1);

return statearr_23138;
})();
if(cljs.core.truth_(inst_23079)){
var statearr_23139_23196 = state_23116__$1;
(statearr_23139_23196[(1)] = (23));

} else {
var statearr_23140_23197 = state_23116__$1;
(statearr_23140_23197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (36))){
var inst_23066 = (state_23116[(12)]);
var inst_23043 = inst_23066;
var state_23116__$1 = (function (){var statearr_23141 = state_23116;
(statearr_23141[(7)] = inst_23043);

return statearr_23141;
})();
var statearr_23142_23198 = state_23116__$1;
(statearr_23142_23198[(2)] = null);

(statearr_23142_23198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (29))){
var inst_23090 = (state_23116[(11)]);
var state_23116__$1 = state_23116;
var statearr_23143_23199 = state_23116__$1;
(statearr_23143_23199[(2)] = inst_23090);

(statearr_23143_23199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var state_23116__$1 = state_23116;
var statearr_23144_23200 = state_23116__$1;
(statearr_23144_23200[(2)] = false);

(statearr_23144_23200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (28))){
var inst_23086 = (state_23116[(2)]);
var inst_23087 = calc_state.call(null);
var inst_23043 = inst_23087;
var state_23116__$1 = (function (){var statearr_23145 = state_23116;
(statearr_23145[(15)] = inst_23086);

(statearr_23145[(7)] = inst_23043);

return statearr_23145;
})();
var statearr_23146_23201 = state_23116__$1;
(statearr_23146_23201[(2)] = null);

(statearr_23146_23201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (25))){
var inst_23112 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23147_23202 = state_23116__$1;
(statearr_23147_23202[(2)] = inst_23112);

(statearr_23147_23202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (34))){
var inst_23110 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23148_23203 = state_23116__$1;
(statearr_23148_23203[(2)] = inst_23110);

(statearr_23148_23203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (17))){
var state_23116__$1 = state_23116;
var statearr_23149_23204 = state_23116__$1;
(statearr_23149_23204[(2)] = false);

(statearr_23149_23204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (3))){
var state_23116__$1 = state_23116;
var statearr_23150_23205 = state_23116__$1;
(statearr_23150_23205[(2)] = false);

(statearr_23150_23205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (12))){
var inst_23114 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (2))){
var inst_23018 = (state_23116[(8)]);
var inst_23023 = inst_23018.cljs$lang$protocol_mask$partition0$;
var inst_23024 = (inst_23023 & (64));
var inst_23025 = inst_23018.cljs$core$ISeq$;
var inst_23026 = (cljs.core.PROTOCOL_SENTINEL === inst_23025);
var inst_23027 = (inst_23024) || (inst_23026);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23027)){
var statearr_23151_23206 = state_23116__$1;
(statearr_23151_23206[(1)] = (5));

} else {
var statearr_23152_23207 = state_23116__$1;
(statearr_23152_23207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (23))){
var inst_23075 = (state_23116[(14)]);
var inst_23081 = (inst_23075 == null);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23081)){
var statearr_23153_23208 = state_23116__$1;
(statearr_23153_23208[(1)] = (26));

} else {
var statearr_23154_23209 = state_23116__$1;
(statearr_23154_23209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (35))){
var inst_23101 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23101)){
var statearr_23155_23210 = state_23116__$1;
(statearr_23155_23210[(1)] = (36));

} else {
var statearr_23156_23211 = state_23116__$1;
(statearr_23156_23211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (19))){
var inst_23043 = (state_23116[(7)]);
var inst_23063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23043);
var state_23116__$1 = state_23116;
var statearr_23157_23212 = state_23116__$1;
(statearr_23157_23212[(2)] = inst_23063);

(statearr_23157_23212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (11))){
var inst_23043 = (state_23116[(7)]);
var inst_23047 = (inst_23043 == null);
var inst_23048 = cljs.core.not.call(null,inst_23047);
var state_23116__$1 = state_23116;
if(inst_23048){
var statearr_23158_23213 = state_23116__$1;
(statearr_23158_23213[(1)] = (13));

} else {
var statearr_23159_23214 = state_23116__$1;
(statearr_23159_23214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var inst_23018 = (state_23116[(8)]);
var state_23116__$1 = state_23116;
var statearr_23160_23215 = state_23116__$1;
(statearr_23160_23215[(2)] = inst_23018);

(statearr_23160_23215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (5))){
var state_23116__$1 = state_23116;
var statearr_23161_23216 = state_23116__$1;
(statearr_23161_23216[(2)] = true);

(statearr_23161_23216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (14))){
var state_23116__$1 = state_23116;
var statearr_23162_23217 = state_23116__$1;
(statearr_23162_23217[(2)] = false);

(statearr_23162_23217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (26))){
var inst_23076 = (state_23116[(10)]);
var inst_23083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23076);
var state_23116__$1 = state_23116;
var statearr_23163_23218 = state_23116__$1;
(statearr_23163_23218[(2)] = inst_23083);

(statearr_23163_23218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (16))){
var state_23116__$1 = state_23116;
var statearr_23164_23219 = state_23116__$1;
(statearr_23164_23219[(2)] = true);

(statearr_23164_23219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (38))){
var inst_23106 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23165_23220 = state_23116__$1;
(statearr_23165_23220[(2)] = inst_23106);

(statearr_23165_23220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (30))){
var inst_23068 = (state_23116[(13)]);
var inst_23067 = (state_23116[(9)]);
var inst_23076 = (state_23116[(10)]);
var inst_23093 = cljs.core.empty_QMARK_.call(null,inst_23067);
var inst_23094 = inst_23068.call(null,inst_23076);
var inst_23095 = cljs.core.not.call(null,inst_23094);
var inst_23096 = (inst_23093) && (inst_23095);
var state_23116__$1 = state_23116;
var statearr_23166_23221 = state_23116__$1;
(statearr_23166_23221[(2)] = inst_23096);

(statearr_23166_23221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23018 = (state_23116[(8)]);
var inst_23039 = (state_23116[(2)]);
var inst_23040 = cljs.core.get.call(null,inst_23039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23041 = cljs.core.get.call(null,inst_23039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23042 = cljs.core.get.call(null,inst_23039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23043 = inst_23018;
var state_23116__$1 = (function (){var statearr_23167 = state_23116;
(statearr_23167[(16)] = inst_23040);

(statearr_23167[(17)] = inst_23041);

(statearr_23167[(18)] = inst_23042);

(statearr_23167[(7)] = inst_23043);

return statearr_23167;
})();
var statearr_23168_23222 = state_23116__$1;
(statearr_23168_23222[(2)] = null);

(statearr_23168_23222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (18))){
var inst_23058 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23169_23223 = state_23116__$1;
(statearr_23169_23223[(2)] = inst_23058);

(statearr_23169_23223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (37))){
var state_23116__$1 = state_23116;
var statearr_23170_23224 = state_23116__$1;
(statearr_23170_23224[(2)] = null);

(statearr_23170_23224[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (8))){
var inst_23018 = (state_23116[(8)]);
var inst_23036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23018);
var state_23116__$1 = state_23116;
var statearr_23171_23225 = state_23116__$1;
(statearr_23171_23225[(2)] = inst_23036);

(statearr_23171_23225[(1)] = (10));


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
});})(c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21281__auto__,c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21282__auto__ = null;
var cljs$core$async$mix_$_state_machine__21282__auto____0 = (function (){
var statearr_23175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23175[(0)] = cljs$core$async$mix_$_state_machine__21282__auto__);

(statearr_23175[(1)] = (1));

return statearr_23175;
});
var cljs$core$async$mix_$_state_machine__21282__auto____1 = (function (state_23116){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23176){if((e23176 instanceof Object)){
var ex__21285__auto__ = e23176;
var statearr_23177_23226 = state_23116;
(statearr_23177_23226[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23227 = state_23116;
state_23116 = G__23227;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21282__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21282__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21282__auto____0;
cljs$core$async$mix_$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21282__auto____1;
return cljs$core$async$mix_$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21298__auto__ = (function (){var statearr_23178 = f__21297__auto__.call(null);
(statearr_23178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23179);

return statearr_23178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19419__auto__ = (((p == null))?null:p);
var m__19420__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19420__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19419__auto__ = (((p == null))?null:p);
var m__19420__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,p,v,ch);
} else {
var m__19420__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23228 = [];
var len__19864__auto___23231 = arguments.length;
var i__19865__auto___23232 = (0);
while(true){
if((i__19865__auto___23232 < len__19864__auto___23231)){
args23228.push((arguments[i__19865__auto___23232]));

var G__23233 = (i__19865__auto___23232 + (1));
i__19865__auto___23232 = G__23233;
continue;
} else {
}
break;
}

var G__23230 = args23228.length;
switch (G__23230) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23228.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19419__auto__ = (((p == null))?null:p);
var m__19420__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,p);
} else {
var m__19420__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,p);
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
var x__19419__auto__ = (((p == null))?null:p);
var m__19420__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19419__auto__)]);
if(!((m__19420__auto__ == null))){
return m__19420__auto__.call(null,p,v);
} else {
var m__19420__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19420__auto____$1 == null))){
return m__19420__auto____$1.call(null,p,v);
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
var args23236 = [];
var len__19864__auto___23361 = arguments.length;
var i__19865__auto___23362 = (0);
while(true){
if((i__19865__auto___23362 < len__19864__auto___23361)){
args23236.push((arguments[i__19865__auto___23362]));

var G__23363 = (i__19865__auto___23362 + (1));
i__19865__auto___23362 = G__23363;
continue;
} else {
}
break;
}

var G__23238 = args23236.length;
switch (G__23238) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23236.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18756__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18756__auto__,mults){
return (function (p1__23235_SHARP_){
if(cljs.core.truth_(p1__23235_SHARP_.call(null,topic))){
return p1__23235_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18756__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23239 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23240){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23240 = meta23240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23241,meta23240__$1){
var self__ = this;
var _23241__$1 = this;
return (new cljs.core.async.t_cljs$core$async23239(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23240__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23241){
var self__ = this;
var _23241__$1 = this;
return self__.meta23240;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23240","meta23240",-615542413,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23239";

cljs.core.async.t_cljs$core$async23239.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23239");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23239 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23240){
return (new cljs.core.async.t_cljs$core$async23239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23240));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23239(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21296__auto___23365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23365,mults,ensure_mult,p){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23365,mults,ensure_mult,p){
return (function (state_23313){
var state_val_23314 = (state_23313[(1)]);
if((state_val_23314 === (7))){
var inst_23309 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23315_23366 = state_23313__$1;
(statearr_23315_23366[(2)] = inst_23309);

(statearr_23315_23366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (20))){
var state_23313__$1 = state_23313;
var statearr_23316_23367 = state_23313__$1;
(statearr_23316_23367[(2)] = null);

(statearr_23316_23367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (1))){
var state_23313__$1 = state_23313;
var statearr_23317_23368 = state_23313__$1;
(statearr_23317_23368[(2)] = null);

(statearr_23317_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (24))){
var inst_23292 = (state_23313[(7)]);
var inst_23301 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23292);
var state_23313__$1 = state_23313;
var statearr_23318_23369 = state_23313__$1;
(statearr_23318_23369[(2)] = inst_23301);

(statearr_23318_23369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (4))){
var inst_23244 = (state_23313[(8)]);
var inst_23244__$1 = (state_23313[(2)]);
var inst_23245 = (inst_23244__$1 == null);
var state_23313__$1 = (function (){var statearr_23319 = state_23313;
(statearr_23319[(8)] = inst_23244__$1);

return statearr_23319;
})();
if(cljs.core.truth_(inst_23245)){
var statearr_23320_23370 = state_23313__$1;
(statearr_23320_23370[(1)] = (5));

} else {
var statearr_23321_23371 = state_23313__$1;
(statearr_23321_23371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (15))){
var inst_23286 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23322_23372 = state_23313__$1;
(statearr_23322_23372[(2)] = inst_23286);

(statearr_23322_23372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (21))){
var inst_23306 = (state_23313[(2)]);
var state_23313__$1 = (function (){var statearr_23323 = state_23313;
(statearr_23323[(9)] = inst_23306);

return statearr_23323;
})();
var statearr_23324_23373 = state_23313__$1;
(statearr_23324_23373[(2)] = null);

(statearr_23324_23373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (13))){
var inst_23268 = (state_23313[(10)]);
var inst_23270 = cljs.core.chunked_seq_QMARK_.call(null,inst_23268);
var state_23313__$1 = state_23313;
if(inst_23270){
var statearr_23325_23374 = state_23313__$1;
(statearr_23325_23374[(1)] = (16));

} else {
var statearr_23326_23375 = state_23313__$1;
(statearr_23326_23375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (22))){
var inst_23298 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
if(cljs.core.truth_(inst_23298)){
var statearr_23327_23376 = state_23313__$1;
(statearr_23327_23376[(1)] = (23));

} else {
var statearr_23328_23377 = state_23313__$1;
(statearr_23328_23377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (6))){
var inst_23292 = (state_23313[(7)]);
var inst_23294 = (state_23313[(11)]);
var inst_23244 = (state_23313[(8)]);
var inst_23292__$1 = topic_fn.call(null,inst_23244);
var inst_23293 = cljs.core.deref.call(null,mults);
var inst_23294__$1 = cljs.core.get.call(null,inst_23293,inst_23292__$1);
var state_23313__$1 = (function (){var statearr_23329 = state_23313;
(statearr_23329[(7)] = inst_23292__$1);

(statearr_23329[(11)] = inst_23294__$1);

return statearr_23329;
})();
if(cljs.core.truth_(inst_23294__$1)){
var statearr_23330_23378 = state_23313__$1;
(statearr_23330_23378[(1)] = (19));

} else {
var statearr_23331_23379 = state_23313__$1;
(statearr_23331_23379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (25))){
var inst_23303 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23332_23380 = state_23313__$1;
(statearr_23332_23380[(2)] = inst_23303);

(statearr_23332_23380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (17))){
var inst_23268 = (state_23313[(10)]);
var inst_23277 = cljs.core.first.call(null,inst_23268);
var inst_23278 = cljs.core.async.muxch_STAR_.call(null,inst_23277);
var inst_23279 = cljs.core.async.close_BANG_.call(null,inst_23278);
var inst_23280 = cljs.core.next.call(null,inst_23268);
var inst_23254 = inst_23280;
var inst_23255 = null;
var inst_23256 = (0);
var inst_23257 = (0);
var state_23313__$1 = (function (){var statearr_23333 = state_23313;
(statearr_23333[(12)] = inst_23255);

(statearr_23333[(13)] = inst_23257);

(statearr_23333[(14)] = inst_23256);

(statearr_23333[(15)] = inst_23254);

(statearr_23333[(16)] = inst_23279);

return statearr_23333;
})();
var statearr_23334_23381 = state_23313__$1;
(statearr_23334_23381[(2)] = null);

(statearr_23334_23381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (3))){
var inst_23311 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23313__$1,inst_23311);
} else {
if((state_val_23314 === (12))){
var inst_23288 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23335_23382 = state_23313__$1;
(statearr_23335_23382[(2)] = inst_23288);

(statearr_23335_23382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (2))){
var state_23313__$1 = state_23313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23313__$1,(4),ch);
} else {
if((state_val_23314 === (23))){
var state_23313__$1 = state_23313;
var statearr_23336_23383 = state_23313__$1;
(statearr_23336_23383[(2)] = null);

(statearr_23336_23383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (19))){
var inst_23294 = (state_23313[(11)]);
var inst_23244 = (state_23313[(8)]);
var inst_23296 = cljs.core.async.muxch_STAR_.call(null,inst_23294);
var state_23313__$1 = state_23313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23313__$1,(22),inst_23296,inst_23244);
} else {
if((state_val_23314 === (11))){
var inst_23268 = (state_23313[(10)]);
var inst_23254 = (state_23313[(15)]);
var inst_23268__$1 = cljs.core.seq.call(null,inst_23254);
var state_23313__$1 = (function (){var statearr_23337 = state_23313;
(statearr_23337[(10)] = inst_23268__$1);

return statearr_23337;
})();
if(inst_23268__$1){
var statearr_23338_23384 = state_23313__$1;
(statearr_23338_23384[(1)] = (13));

} else {
var statearr_23339_23385 = state_23313__$1;
(statearr_23339_23385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (9))){
var inst_23290 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23340_23386 = state_23313__$1;
(statearr_23340_23386[(2)] = inst_23290);

(statearr_23340_23386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (5))){
var inst_23251 = cljs.core.deref.call(null,mults);
var inst_23252 = cljs.core.vals.call(null,inst_23251);
var inst_23253 = cljs.core.seq.call(null,inst_23252);
var inst_23254 = inst_23253;
var inst_23255 = null;
var inst_23256 = (0);
var inst_23257 = (0);
var state_23313__$1 = (function (){var statearr_23341 = state_23313;
(statearr_23341[(12)] = inst_23255);

(statearr_23341[(13)] = inst_23257);

(statearr_23341[(14)] = inst_23256);

(statearr_23341[(15)] = inst_23254);

return statearr_23341;
})();
var statearr_23342_23387 = state_23313__$1;
(statearr_23342_23387[(2)] = null);

(statearr_23342_23387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (14))){
var state_23313__$1 = state_23313;
var statearr_23346_23388 = state_23313__$1;
(statearr_23346_23388[(2)] = null);

(statearr_23346_23388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (16))){
var inst_23268 = (state_23313[(10)]);
var inst_23272 = cljs.core.chunk_first.call(null,inst_23268);
var inst_23273 = cljs.core.chunk_rest.call(null,inst_23268);
var inst_23274 = cljs.core.count.call(null,inst_23272);
var inst_23254 = inst_23273;
var inst_23255 = inst_23272;
var inst_23256 = inst_23274;
var inst_23257 = (0);
var state_23313__$1 = (function (){var statearr_23347 = state_23313;
(statearr_23347[(12)] = inst_23255);

(statearr_23347[(13)] = inst_23257);

(statearr_23347[(14)] = inst_23256);

(statearr_23347[(15)] = inst_23254);

return statearr_23347;
})();
var statearr_23348_23389 = state_23313__$1;
(statearr_23348_23389[(2)] = null);

(statearr_23348_23389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (10))){
var inst_23255 = (state_23313[(12)]);
var inst_23257 = (state_23313[(13)]);
var inst_23256 = (state_23313[(14)]);
var inst_23254 = (state_23313[(15)]);
var inst_23262 = cljs.core._nth.call(null,inst_23255,inst_23257);
var inst_23263 = cljs.core.async.muxch_STAR_.call(null,inst_23262);
var inst_23264 = cljs.core.async.close_BANG_.call(null,inst_23263);
var inst_23265 = (inst_23257 + (1));
var tmp23343 = inst_23255;
var tmp23344 = inst_23256;
var tmp23345 = inst_23254;
var inst_23254__$1 = tmp23345;
var inst_23255__$1 = tmp23343;
var inst_23256__$1 = tmp23344;
var inst_23257__$1 = inst_23265;
var state_23313__$1 = (function (){var statearr_23349 = state_23313;
(statearr_23349[(12)] = inst_23255__$1);

(statearr_23349[(13)] = inst_23257__$1);

(statearr_23349[(14)] = inst_23256__$1);

(statearr_23349[(15)] = inst_23254__$1);

(statearr_23349[(17)] = inst_23264);

return statearr_23349;
})();
var statearr_23350_23390 = state_23313__$1;
(statearr_23350_23390[(2)] = null);

(statearr_23350_23390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (18))){
var inst_23283 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23351_23391 = state_23313__$1;
(statearr_23351_23391[(2)] = inst_23283);

(statearr_23351_23391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (8))){
var inst_23257 = (state_23313[(13)]);
var inst_23256 = (state_23313[(14)]);
var inst_23259 = (inst_23257 < inst_23256);
var inst_23260 = inst_23259;
var state_23313__$1 = state_23313;
if(cljs.core.truth_(inst_23260)){
var statearr_23352_23392 = state_23313__$1;
(statearr_23352_23392[(1)] = (10));

} else {
var statearr_23353_23393 = state_23313__$1;
(statearr_23353_23393[(1)] = (11));

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
});})(c__21296__auto___23365,mults,ensure_mult,p))
;
return ((function (switch__21281__auto__,c__21296__auto___23365,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_23357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23357[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_23357[(1)] = (1));

return statearr_23357;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_23313){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23358){if((e23358 instanceof Object)){
var ex__21285__auto__ = e23358;
var statearr_23359_23394 = state_23313;
(statearr_23359_23394[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23395 = state_23313;
state_23313 = G__23395;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_23313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_23313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23365,mults,ensure_mult,p))
})();
var state__21298__auto__ = (function (){var statearr_23360 = f__21297__auto__.call(null);
(statearr_23360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23365);

return statearr_23360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23365,mults,ensure_mult,p))
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
var args23396 = [];
var len__19864__auto___23399 = arguments.length;
var i__19865__auto___23400 = (0);
while(true){
if((i__19865__auto___23400 < len__19864__auto___23399)){
args23396.push((arguments[i__19865__auto___23400]));

var G__23401 = (i__19865__auto___23400 + (1));
i__19865__auto___23400 = G__23401;
continue;
} else {
}
break;
}

var G__23398 = args23396.length;
switch (G__23398) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23396.length)].join('')));

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
var args23403 = [];
var len__19864__auto___23406 = arguments.length;
var i__19865__auto___23407 = (0);
while(true){
if((i__19865__auto___23407 < len__19864__auto___23406)){
args23403.push((arguments[i__19865__auto___23407]));

var G__23408 = (i__19865__auto___23407 + (1));
i__19865__auto___23407 = G__23408;
continue;
} else {
}
break;
}

var G__23405 = args23403.length;
switch (G__23405) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23403.length)].join('')));

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
var args23410 = [];
var len__19864__auto___23481 = arguments.length;
var i__19865__auto___23482 = (0);
while(true){
if((i__19865__auto___23482 < len__19864__auto___23481)){
args23410.push((arguments[i__19865__auto___23482]));

var G__23483 = (i__19865__auto___23482 + (1));
i__19865__auto___23482 = G__23483;
continue;
} else {
}
break;
}

var G__23412 = args23410.length;
switch (G__23412) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23410.length)].join('')));

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
var c__21296__auto___23485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23451){
var state_val_23452 = (state_23451[(1)]);
if((state_val_23452 === (7))){
var state_23451__$1 = state_23451;
var statearr_23453_23486 = state_23451__$1;
(statearr_23453_23486[(2)] = null);

(statearr_23453_23486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (1))){
var state_23451__$1 = state_23451;
var statearr_23454_23487 = state_23451__$1;
(statearr_23454_23487[(2)] = null);

(statearr_23454_23487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (4))){
var inst_23415 = (state_23451[(7)]);
var inst_23417 = (inst_23415 < cnt);
var state_23451__$1 = state_23451;
if(cljs.core.truth_(inst_23417)){
var statearr_23455_23488 = state_23451__$1;
(statearr_23455_23488[(1)] = (6));

} else {
var statearr_23456_23489 = state_23451__$1;
(statearr_23456_23489[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (15))){
var inst_23447 = (state_23451[(2)]);
var state_23451__$1 = state_23451;
var statearr_23457_23490 = state_23451__$1;
(statearr_23457_23490[(2)] = inst_23447);

(statearr_23457_23490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (13))){
var inst_23440 = cljs.core.async.close_BANG_.call(null,out);
var state_23451__$1 = state_23451;
var statearr_23458_23491 = state_23451__$1;
(statearr_23458_23491[(2)] = inst_23440);

(statearr_23458_23491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (6))){
var state_23451__$1 = state_23451;
var statearr_23459_23492 = state_23451__$1;
(statearr_23459_23492[(2)] = null);

(statearr_23459_23492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (3))){
var inst_23449 = (state_23451[(2)]);
var state_23451__$1 = state_23451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23451__$1,inst_23449);
} else {
if((state_val_23452 === (12))){
var inst_23437 = (state_23451[(8)]);
var inst_23437__$1 = (state_23451[(2)]);
var inst_23438 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23437__$1);
var state_23451__$1 = (function (){var statearr_23460 = state_23451;
(statearr_23460[(8)] = inst_23437__$1);

return statearr_23460;
})();
if(cljs.core.truth_(inst_23438)){
var statearr_23461_23493 = state_23451__$1;
(statearr_23461_23493[(1)] = (13));

} else {
var statearr_23462_23494 = state_23451__$1;
(statearr_23462_23494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (2))){
var inst_23414 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23415 = (0);
var state_23451__$1 = (function (){var statearr_23463 = state_23451;
(statearr_23463[(7)] = inst_23415);

(statearr_23463[(9)] = inst_23414);

return statearr_23463;
})();
var statearr_23464_23495 = state_23451__$1;
(statearr_23464_23495[(2)] = null);

(statearr_23464_23495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (11))){
var inst_23415 = (state_23451[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23451,(10),Object,null,(9));
var inst_23424 = chs__$1.call(null,inst_23415);
var inst_23425 = done.call(null,inst_23415);
var inst_23426 = cljs.core.async.take_BANG_.call(null,inst_23424,inst_23425);
var state_23451__$1 = state_23451;
var statearr_23465_23496 = state_23451__$1;
(statearr_23465_23496[(2)] = inst_23426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23451__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (9))){
var inst_23415 = (state_23451[(7)]);
var inst_23428 = (state_23451[(2)]);
var inst_23429 = (inst_23415 + (1));
var inst_23415__$1 = inst_23429;
var state_23451__$1 = (function (){var statearr_23466 = state_23451;
(statearr_23466[(7)] = inst_23415__$1);

(statearr_23466[(10)] = inst_23428);

return statearr_23466;
})();
var statearr_23467_23497 = state_23451__$1;
(statearr_23467_23497[(2)] = null);

(statearr_23467_23497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (5))){
var inst_23435 = (state_23451[(2)]);
var state_23451__$1 = (function (){var statearr_23468 = state_23451;
(statearr_23468[(11)] = inst_23435);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23451__$1,(12),dchan);
} else {
if((state_val_23452 === (14))){
var inst_23437 = (state_23451[(8)]);
var inst_23442 = cljs.core.apply.call(null,f,inst_23437);
var state_23451__$1 = state_23451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23451__$1,(16),out,inst_23442);
} else {
if((state_val_23452 === (16))){
var inst_23444 = (state_23451[(2)]);
var state_23451__$1 = (function (){var statearr_23469 = state_23451;
(statearr_23469[(12)] = inst_23444);

return statearr_23469;
})();
var statearr_23470_23498 = state_23451__$1;
(statearr_23470_23498[(2)] = null);

(statearr_23470_23498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (10))){
var inst_23419 = (state_23451[(2)]);
var inst_23420 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23451__$1 = (function (){var statearr_23471 = state_23451;
(statearr_23471[(13)] = inst_23419);

return statearr_23471;
})();
var statearr_23472_23499 = state_23451__$1;
(statearr_23472_23499[(2)] = inst_23420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23451__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23452 === (8))){
var inst_23433 = (state_23451[(2)]);
var state_23451__$1 = state_23451;
var statearr_23473_23500 = state_23451__$1;
(statearr_23473_23500[(2)] = inst_23433);

(statearr_23473_23500[(1)] = (5));


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
});})(c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21281__auto__,c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_23477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23477[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_23477[(1)] = (1));

return statearr_23477;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_23451){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23478){if((e23478 instanceof Object)){
var ex__21285__auto__ = e23478;
var statearr_23479_23501 = state_23451;
(statearr_23479_23501[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23502 = state_23451;
state_23451 = G__23502;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_23451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_23451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21298__auto__ = (function (){var statearr_23480 = f__21297__auto__.call(null);
(statearr_23480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23485);

return statearr_23480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23485,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23504 = [];
var len__19864__auto___23562 = arguments.length;
var i__19865__auto___23563 = (0);
while(true){
if((i__19865__auto___23563 < len__19864__auto___23562)){
args23504.push((arguments[i__19865__auto___23563]));

var G__23564 = (i__19865__auto___23563 + (1));
i__19865__auto___23563 = G__23564;
continue;
} else {
}
break;
}

var G__23506 = args23504.length;
switch (G__23506) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23504.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___23566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23566,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23566,out){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (7))){
var inst_23518 = (state_23538[(7)]);
var inst_23517 = (state_23538[(8)]);
var inst_23517__$1 = (state_23538[(2)]);
var inst_23518__$1 = cljs.core.nth.call(null,inst_23517__$1,(0),null);
var inst_23519 = cljs.core.nth.call(null,inst_23517__$1,(1),null);
var inst_23520 = (inst_23518__$1 == null);
var state_23538__$1 = (function (){var statearr_23540 = state_23538;
(statearr_23540[(7)] = inst_23518__$1);

(statearr_23540[(9)] = inst_23519);

(statearr_23540[(8)] = inst_23517__$1);

return statearr_23540;
})();
if(cljs.core.truth_(inst_23520)){
var statearr_23541_23567 = state_23538__$1;
(statearr_23541_23567[(1)] = (8));

} else {
var statearr_23542_23568 = state_23538__$1;
(statearr_23542_23568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (1))){
var inst_23507 = cljs.core.vec.call(null,chs);
var inst_23508 = inst_23507;
var state_23538__$1 = (function (){var statearr_23543 = state_23538;
(statearr_23543[(10)] = inst_23508);

return statearr_23543;
})();
var statearr_23544_23569 = state_23538__$1;
(statearr_23544_23569[(2)] = null);

(statearr_23544_23569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (4))){
var inst_23508 = (state_23538[(10)]);
var state_23538__$1 = state_23538;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23538__$1,(7),inst_23508);
} else {
if((state_val_23539 === (6))){
var inst_23534 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
var statearr_23545_23570 = state_23538__$1;
(statearr_23545_23570[(2)] = inst_23534);

(statearr_23545_23570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (3))){
var inst_23536 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
if((state_val_23539 === (2))){
var inst_23508 = (state_23538[(10)]);
var inst_23510 = cljs.core.count.call(null,inst_23508);
var inst_23511 = (inst_23510 > (0));
var state_23538__$1 = state_23538;
if(cljs.core.truth_(inst_23511)){
var statearr_23547_23571 = state_23538__$1;
(statearr_23547_23571[(1)] = (4));

} else {
var statearr_23548_23572 = state_23538__$1;
(statearr_23548_23572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (11))){
var inst_23508 = (state_23538[(10)]);
var inst_23527 = (state_23538[(2)]);
var tmp23546 = inst_23508;
var inst_23508__$1 = tmp23546;
var state_23538__$1 = (function (){var statearr_23549 = state_23538;
(statearr_23549[(11)] = inst_23527);

(statearr_23549[(10)] = inst_23508__$1);

return statearr_23549;
})();
var statearr_23550_23573 = state_23538__$1;
(statearr_23550_23573[(2)] = null);

(statearr_23550_23573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (9))){
var inst_23518 = (state_23538[(7)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23538__$1,(11),out,inst_23518);
} else {
if((state_val_23539 === (5))){
var inst_23532 = cljs.core.async.close_BANG_.call(null,out);
var state_23538__$1 = state_23538;
var statearr_23551_23574 = state_23538__$1;
(statearr_23551_23574[(2)] = inst_23532);

(statearr_23551_23574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (10))){
var inst_23530 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
var statearr_23552_23575 = state_23538__$1;
(statearr_23552_23575[(2)] = inst_23530);

(statearr_23552_23575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (8))){
var inst_23518 = (state_23538[(7)]);
var inst_23519 = (state_23538[(9)]);
var inst_23508 = (state_23538[(10)]);
var inst_23517 = (state_23538[(8)]);
var inst_23522 = (function (){var cs = inst_23508;
var vec__23513 = inst_23517;
var v = inst_23518;
var c = inst_23519;
return ((function (cs,vec__23513,v,c,inst_23518,inst_23519,inst_23508,inst_23517,state_val_23539,c__21296__auto___23566,out){
return (function (p1__23503_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23503_SHARP_);
});
;})(cs,vec__23513,v,c,inst_23518,inst_23519,inst_23508,inst_23517,state_val_23539,c__21296__auto___23566,out))
})();
var inst_23523 = cljs.core.filterv.call(null,inst_23522,inst_23508);
var inst_23508__$1 = inst_23523;
var state_23538__$1 = (function (){var statearr_23553 = state_23538;
(statearr_23553[(10)] = inst_23508__$1);

return statearr_23553;
})();
var statearr_23554_23576 = state_23538__$1;
(statearr_23554_23576[(2)] = null);

(statearr_23554_23576[(1)] = (2));


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
});})(c__21296__auto___23566,out))
;
return ((function (switch__21281__auto__,c__21296__auto___23566,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_23558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23558[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_23558[(1)] = (1));

return statearr_23558;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_23538){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23559){if((e23559 instanceof Object)){
var ex__21285__auto__ = e23559;
var statearr_23560_23577 = state_23538;
(statearr_23560_23577[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23578 = state_23538;
state_23538 = G__23578;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23566,out))
})();
var state__21298__auto__ = (function (){var statearr_23561 = f__21297__auto__.call(null);
(statearr_23561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23566);

return statearr_23561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23566,out))
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
var args23579 = [];
var len__19864__auto___23628 = arguments.length;
var i__19865__auto___23629 = (0);
while(true){
if((i__19865__auto___23629 < len__19864__auto___23628)){
args23579.push((arguments[i__19865__auto___23629]));

var G__23630 = (i__19865__auto___23629 + (1));
i__19865__auto___23629 = G__23630;
continue;
} else {
}
break;
}

var G__23581 = args23579.length;
switch (G__23581) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23579.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___23632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23632,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23632,out){
return (function (state_23605){
var state_val_23606 = (state_23605[(1)]);
if((state_val_23606 === (7))){
var inst_23587 = (state_23605[(7)]);
var inst_23587__$1 = (state_23605[(2)]);
var inst_23588 = (inst_23587__$1 == null);
var inst_23589 = cljs.core.not.call(null,inst_23588);
var state_23605__$1 = (function (){var statearr_23607 = state_23605;
(statearr_23607[(7)] = inst_23587__$1);

return statearr_23607;
})();
if(inst_23589){
var statearr_23608_23633 = state_23605__$1;
(statearr_23608_23633[(1)] = (8));

} else {
var statearr_23609_23634 = state_23605__$1;
(statearr_23609_23634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (1))){
var inst_23582 = (0);
var state_23605__$1 = (function (){var statearr_23610 = state_23605;
(statearr_23610[(8)] = inst_23582);

return statearr_23610;
})();
var statearr_23611_23635 = state_23605__$1;
(statearr_23611_23635[(2)] = null);

(statearr_23611_23635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (4))){
var state_23605__$1 = state_23605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23605__$1,(7),ch);
} else {
if((state_val_23606 === (6))){
var inst_23600 = (state_23605[(2)]);
var state_23605__$1 = state_23605;
var statearr_23612_23636 = state_23605__$1;
(statearr_23612_23636[(2)] = inst_23600);

(statearr_23612_23636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (3))){
var inst_23602 = (state_23605[(2)]);
var inst_23603 = cljs.core.async.close_BANG_.call(null,out);
var state_23605__$1 = (function (){var statearr_23613 = state_23605;
(statearr_23613[(9)] = inst_23602);

return statearr_23613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23605__$1,inst_23603);
} else {
if((state_val_23606 === (2))){
var inst_23582 = (state_23605[(8)]);
var inst_23584 = (inst_23582 < n);
var state_23605__$1 = state_23605;
if(cljs.core.truth_(inst_23584)){
var statearr_23614_23637 = state_23605__$1;
(statearr_23614_23637[(1)] = (4));

} else {
var statearr_23615_23638 = state_23605__$1;
(statearr_23615_23638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (11))){
var inst_23582 = (state_23605[(8)]);
var inst_23592 = (state_23605[(2)]);
var inst_23593 = (inst_23582 + (1));
var inst_23582__$1 = inst_23593;
var state_23605__$1 = (function (){var statearr_23616 = state_23605;
(statearr_23616[(8)] = inst_23582__$1);

(statearr_23616[(10)] = inst_23592);

return statearr_23616;
})();
var statearr_23617_23639 = state_23605__$1;
(statearr_23617_23639[(2)] = null);

(statearr_23617_23639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (9))){
var state_23605__$1 = state_23605;
var statearr_23618_23640 = state_23605__$1;
(statearr_23618_23640[(2)] = null);

(statearr_23618_23640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (5))){
var state_23605__$1 = state_23605;
var statearr_23619_23641 = state_23605__$1;
(statearr_23619_23641[(2)] = null);

(statearr_23619_23641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (10))){
var inst_23597 = (state_23605[(2)]);
var state_23605__$1 = state_23605;
var statearr_23620_23642 = state_23605__$1;
(statearr_23620_23642[(2)] = inst_23597);

(statearr_23620_23642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23606 === (8))){
var inst_23587 = (state_23605[(7)]);
var state_23605__$1 = state_23605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23605__$1,(11),out,inst_23587);
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
});})(c__21296__auto___23632,out))
;
return ((function (switch__21281__auto__,c__21296__auto___23632,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_23624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23624[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_23624[(1)] = (1));

return statearr_23624;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_23605){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object)){
var ex__21285__auto__ = e23625;
var statearr_23626_23643 = state_23605;
(statearr_23626_23643[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23644 = state_23605;
state_23605 = G__23644;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_23605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_23605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23632,out))
})();
var state__21298__auto__ = (function (){var statearr_23627 = f__21297__auto__.call(null);
(statearr_23627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23632);

return statearr_23627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23632,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23652 = (function (f,ch,meta23653){
this.f = f;
this.ch = ch;
this.meta23653 = meta23653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23654,meta23653__$1){
var self__ = this;
var _23654__$1 = this;
return (new cljs.core.async.t_cljs$core$async23652(self__.f,self__.ch,meta23653__$1));
});

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23654){
var self__ = this;
var _23654__$1 = this;
return self__.meta23653;
});

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23655 = (function (f,ch,meta23653,_,fn1,meta23656){
this.f = f;
this.ch = ch;
this.meta23653 = meta23653;
this._ = _;
this.fn1 = fn1;
this.meta23656 = meta23656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23657,meta23656__$1){
var self__ = this;
var _23657__$1 = this;
return (new cljs.core.async.t_cljs$core$async23655(self__.f,self__.ch,self__.meta23653,self__._,self__.fn1,meta23656__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23657){
var self__ = this;
var _23657__$1 = this;
return self__.meta23656;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23645_SHARP_){
return f1.call(null,(((p1__23645_SHARP_ == null))?null:self__.f.call(null,p1__23645_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23653","meta23653",-1780449435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23652","cljs.core.async/t_cljs$core$async23652",1759729180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23656","meta23656",-1793916832,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23655";

cljs.core.async.t_cljs$core$async23655.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23655");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23655 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23655(f__$1,ch__$1,meta23653__$1,___$2,fn1__$1,meta23656){
return (new cljs.core.async.t_cljs$core$async23655(f__$1,ch__$1,meta23653__$1,___$2,fn1__$1,meta23656));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23655(self__.f,self__.ch,self__.meta23653,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18744__auto__ = ret;
if(cljs.core.truth_(and__18744__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18744__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23653","meta23653",-1780449435,null)], null);
});

cljs.core.async.t_cljs$core$async23652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23652";

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23652");
});

cljs.core.async.__GT_t_cljs$core$async23652 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23652(f__$1,ch__$1,meta23653){
return (new cljs.core.async.t_cljs$core$async23652(f__$1,ch__$1,meta23653));
});

}

return (new cljs.core.async.t_cljs$core$async23652(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23661 = (function (f,ch,meta23662){
this.f = f;
this.ch = ch;
this.meta23662 = meta23662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23663,meta23662__$1){
var self__ = this;
var _23663__$1 = this;
return (new cljs.core.async.t_cljs$core$async23661(self__.f,self__.ch,meta23662__$1));
});

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23663){
var self__ = this;
var _23663__$1 = this;
return self__.meta23662;
});

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23662","meta23662",-778779029,null)], null);
});

cljs.core.async.t_cljs$core$async23661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23661";

cljs.core.async.t_cljs$core$async23661.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23661");
});

cljs.core.async.__GT_t_cljs$core$async23661 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23661(f__$1,ch__$1,meta23662){
return (new cljs.core.async.t_cljs$core$async23661(f__$1,ch__$1,meta23662));
});

}

return (new cljs.core.async.t_cljs$core$async23661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23667 = (function (p,ch,meta23668){
this.p = p;
this.ch = ch;
this.meta23668 = meta23668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23669,meta23668__$1){
var self__ = this;
var _23669__$1 = this;
return (new cljs.core.async.t_cljs$core$async23667(self__.p,self__.ch,meta23668__$1));
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23669){
var self__ = this;
var _23669__$1 = this;
return self__.meta23668;
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23668","meta23668",-875167484,null)], null);
});

cljs.core.async.t_cljs$core$async23667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23667";

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23667");
});

cljs.core.async.__GT_t_cljs$core$async23667 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23667(p__$1,ch__$1,meta23668){
return (new cljs.core.async.t_cljs$core$async23667(p__$1,ch__$1,meta23668));
});

}

return (new cljs.core.async.t_cljs$core$async23667(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23670 = [];
var len__19864__auto___23714 = arguments.length;
var i__19865__auto___23715 = (0);
while(true){
if((i__19865__auto___23715 < len__19864__auto___23714)){
args23670.push((arguments[i__19865__auto___23715]));

var G__23716 = (i__19865__auto___23715 + (1));
i__19865__auto___23715 = G__23716;
continue;
} else {
}
break;
}

var G__23672 = args23670.length;
switch (G__23672) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23670.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___23718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___23718,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___23718,out){
return (function (state_23693){
var state_val_23694 = (state_23693[(1)]);
if((state_val_23694 === (7))){
var inst_23689 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23695_23719 = state_23693__$1;
(statearr_23695_23719[(2)] = inst_23689);

(statearr_23695_23719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (1))){
var state_23693__$1 = state_23693;
var statearr_23696_23720 = state_23693__$1;
(statearr_23696_23720[(2)] = null);

(statearr_23696_23720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (4))){
var inst_23675 = (state_23693[(7)]);
var inst_23675__$1 = (state_23693[(2)]);
var inst_23676 = (inst_23675__$1 == null);
var state_23693__$1 = (function (){var statearr_23697 = state_23693;
(statearr_23697[(7)] = inst_23675__$1);

return statearr_23697;
})();
if(cljs.core.truth_(inst_23676)){
var statearr_23698_23721 = state_23693__$1;
(statearr_23698_23721[(1)] = (5));

} else {
var statearr_23699_23722 = state_23693__$1;
(statearr_23699_23722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (6))){
var inst_23675 = (state_23693[(7)]);
var inst_23680 = p.call(null,inst_23675);
var state_23693__$1 = state_23693;
if(cljs.core.truth_(inst_23680)){
var statearr_23700_23723 = state_23693__$1;
(statearr_23700_23723[(1)] = (8));

} else {
var statearr_23701_23724 = state_23693__$1;
(statearr_23701_23724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (3))){
var inst_23691 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23693__$1,inst_23691);
} else {
if((state_val_23694 === (2))){
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23693__$1,(4),ch);
} else {
if((state_val_23694 === (11))){
var inst_23683 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23702_23725 = state_23693__$1;
(statearr_23702_23725[(2)] = inst_23683);

(statearr_23702_23725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (9))){
var state_23693__$1 = state_23693;
var statearr_23703_23726 = state_23693__$1;
(statearr_23703_23726[(2)] = null);

(statearr_23703_23726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (5))){
var inst_23678 = cljs.core.async.close_BANG_.call(null,out);
var state_23693__$1 = state_23693;
var statearr_23704_23727 = state_23693__$1;
(statearr_23704_23727[(2)] = inst_23678);

(statearr_23704_23727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (10))){
var inst_23686 = (state_23693[(2)]);
var state_23693__$1 = (function (){var statearr_23705 = state_23693;
(statearr_23705[(8)] = inst_23686);

return statearr_23705;
})();
var statearr_23706_23728 = state_23693__$1;
(statearr_23706_23728[(2)] = null);

(statearr_23706_23728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (8))){
var inst_23675 = (state_23693[(7)]);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23693__$1,(11),out,inst_23675);
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
});})(c__21296__auto___23718,out))
;
return ((function (switch__21281__auto__,c__21296__auto___23718,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_23710 = [null,null,null,null,null,null,null,null,null];
(statearr_23710[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_23710[(1)] = (1));

return statearr_23710;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_23693){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23711){if((e23711 instanceof Object)){
var ex__21285__auto__ = e23711;
var statearr_23712_23729 = state_23693;
(statearr_23712_23729[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23730 = state_23693;
state_23693 = G__23730;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_23693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_23693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___23718,out))
})();
var state__21298__auto__ = (function (){var statearr_23713 = f__21297__auto__.call(null);
(statearr_23713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___23718);

return statearr_23713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___23718,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23731 = [];
var len__19864__auto___23734 = arguments.length;
var i__19865__auto___23735 = (0);
while(true){
if((i__19865__auto___23735 < len__19864__auto___23734)){
args23731.push((arguments[i__19865__auto___23735]));

var G__23736 = (i__19865__auto___23735 + (1));
i__19865__auto___23735 = G__23736;
continue;
} else {
}
break;
}

var G__23733 = args23731.length;
switch (G__23733) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23731.length)].join('')));

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
var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__){
return (function (state_23903){
var state_val_23904 = (state_23903[(1)]);
if((state_val_23904 === (7))){
var inst_23899 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23905_23946 = state_23903__$1;
(statearr_23905_23946[(2)] = inst_23899);

(statearr_23905_23946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (20))){
var inst_23869 = (state_23903[(7)]);
var inst_23880 = (state_23903[(2)]);
var inst_23881 = cljs.core.next.call(null,inst_23869);
var inst_23855 = inst_23881;
var inst_23856 = null;
var inst_23857 = (0);
var inst_23858 = (0);
var state_23903__$1 = (function (){var statearr_23906 = state_23903;
(statearr_23906[(8)] = inst_23858);

(statearr_23906[(9)] = inst_23880);

(statearr_23906[(10)] = inst_23856);

(statearr_23906[(11)] = inst_23857);

(statearr_23906[(12)] = inst_23855);

return statearr_23906;
})();
var statearr_23907_23947 = state_23903__$1;
(statearr_23907_23947[(2)] = null);

(statearr_23907_23947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (1))){
var state_23903__$1 = state_23903;
var statearr_23908_23948 = state_23903__$1;
(statearr_23908_23948[(2)] = null);

(statearr_23908_23948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (4))){
var inst_23844 = (state_23903[(13)]);
var inst_23844__$1 = (state_23903[(2)]);
var inst_23845 = (inst_23844__$1 == null);
var state_23903__$1 = (function (){var statearr_23909 = state_23903;
(statearr_23909[(13)] = inst_23844__$1);

return statearr_23909;
})();
if(cljs.core.truth_(inst_23845)){
var statearr_23910_23949 = state_23903__$1;
(statearr_23910_23949[(1)] = (5));

} else {
var statearr_23911_23950 = state_23903__$1;
(statearr_23911_23950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (15))){
var state_23903__$1 = state_23903;
var statearr_23915_23951 = state_23903__$1;
(statearr_23915_23951[(2)] = null);

(statearr_23915_23951[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (21))){
var state_23903__$1 = state_23903;
var statearr_23916_23952 = state_23903__$1;
(statearr_23916_23952[(2)] = null);

(statearr_23916_23952[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (13))){
var inst_23858 = (state_23903[(8)]);
var inst_23856 = (state_23903[(10)]);
var inst_23857 = (state_23903[(11)]);
var inst_23855 = (state_23903[(12)]);
var inst_23865 = (state_23903[(2)]);
var inst_23866 = (inst_23858 + (1));
var tmp23912 = inst_23856;
var tmp23913 = inst_23857;
var tmp23914 = inst_23855;
var inst_23855__$1 = tmp23914;
var inst_23856__$1 = tmp23912;
var inst_23857__$1 = tmp23913;
var inst_23858__$1 = inst_23866;
var state_23903__$1 = (function (){var statearr_23917 = state_23903;
(statearr_23917[(8)] = inst_23858__$1);

(statearr_23917[(14)] = inst_23865);

(statearr_23917[(10)] = inst_23856__$1);

(statearr_23917[(11)] = inst_23857__$1);

(statearr_23917[(12)] = inst_23855__$1);

return statearr_23917;
})();
var statearr_23918_23953 = state_23903__$1;
(statearr_23918_23953[(2)] = null);

(statearr_23918_23953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (22))){
var state_23903__$1 = state_23903;
var statearr_23919_23954 = state_23903__$1;
(statearr_23919_23954[(2)] = null);

(statearr_23919_23954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (6))){
var inst_23844 = (state_23903[(13)]);
var inst_23853 = f.call(null,inst_23844);
var inst_23854 = cljs.core.seq.call(null,inst_23853);
var inst_23855 = inst_23854;
var inst_23856 = null;
var inst_23857 = (0);
var inst_23858 = (0);
var state_23903__$1 = (function (){var statearr_23920 = state_23903;
(statearr_23920[(8)] = inst_23858);

(statearr_23920[(10)] = inst_23856);

(statearr_23920[(11)] = inst_23857);

(statearr_23920[(12)] = inst_23855);

return statearr_23920;
})();
var statearr_23921_23955 = state_23903__$1;
(statearr_23921_23955[(2)] = null);

(statearr_23921_23955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (17))){
var inst_23869 = (state_23903[(7)]);
var inst_23873 = cljs.core.chunk_first.call(null,inst_23869);
var inst_23874 = cljs.core.chunk_rest.call(null,inst_23869);
var inst_23875 = cljs.core.count.call(null,inst_23873);
var inst_23855 = inst_23874;
var inst_23856 = inst_23873;
var inst_23857 = inst_23875;
var inst_23858 = (0);
var state_23903__$1 = (function (){var statearr_23922 = state_23903;
(statearr_23922[(8)] = inst_23858);

(statearr_23922[(10)] = inst_23856);

(statearr_23922[(11)] = inst_23857);

(statearr_23922[(12)] = inst_23855);

return statearr_23922;
})();
var statearr_23923_23956 = state_23903__$1;
(statearr_23923_23956[(2)] = null);

(statearr_23923_23956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (3))){
var inst_23901 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23903__$1,inst_23901);
} else {
if((state_val_23904 === (12))){
var inst_23889 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23924_23957 = state_23903__$1;
(statearr_23924_23957[(2)] = inst_23889);

(statearr_23924_23957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (2))){
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23903__$1,(4),in$);
} else {
if((state_val_23904 === (23))){
var inst_23897 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23925_23958 = state_23903__$1;
(statearr_23925_23958[(2)] = inst_23897);

(statearr_23925_23958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (19))){
var inst_23884 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23926_23959 = state_23903__$1;
(statearr_23926_23959[(2)] = inst_23884);

(statearr_23926_23959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (11))){
var inst_23869 = (state_23903[(7)]);
var inst_23855 = (state_23903[(12)]);
var inst_23869__$1 = cljs.core.seq.call(null,inst_23855);
var state_23903__$1 = (function (){var statearr_23927 = state_23903;
(statearr_23927[(7)] = inst_23869__$1);

return statearr_23927;
})();
if(inst_23869__$1){
var statearr_23928_23960 = state_23903__$1;
(statearr_23928_23960[(1)] = (14));

} else {
var statearr_23929_23961 = state_23903__$1;
(statearr_23929_23961[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (9))){
var inst_23891 = (state_23903[(2)]);
var inst_23892 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23903__$1 = (function (){var statearr_23930 = state_23903;
(statearr_23930[(15)] = inst_23891);

return statearr_23930;
})();
if(cljs.core.truth_(inst_23892)){
var statearr_23931_23962 = state_23903__$1;
(statearr_23931_23962[(1)] = (21));

} else {
var statearr_23932_23963 = state_23903__$1;
(statearr_23932_23963[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (5))){
var inst_23847 = cljs.core.async.close_BANG_.call(null,out);
var state_23903__$1 = state_23903;
var statearr_23933_23964 = state_23903__$1;
(statearr_23933_23964[(2)] = inst_23847);

(statearr_23933_23964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (14))){
var inst_23869 = (state_23903[(7)]);
var inst_23871 = cljs.core.chunked_seq_QMARK_.call(null,inst_23869);
var state_23903__$1 = state_23903;
if(inst_23871){
var statearr_23934_23965 = state_23903__$1;
(statearr_23934_23965[(1)] = (17));

} else {
var statearr_23935_23966 = state_23903__$1;
(statearr_23935_23966[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (16))){
var inst_23887 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23936_23967 = state_23903__$1;
(statearr_23936_23967[(2)] = inst_23887);

(statearr_23936_23967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (10))){
var inst_23858 = (state_23903[(8)]);
var inst_23856 = (state_23903[(10)]);
var inst_23863 = cljs.core._nth.call(null,inst_23856,inst_23858);
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23903__$1,(13),out,inst_23863);
} else {
if((state_val_23904 === (18))){
var inst_23869 = (state_23903[(7)]);
var inst_23878 = cljs.core.first.call(null,inst_23869);
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23903__$1,(20),out,inst_23878);
} else {
if((state_val_23904 === (8))){
var inst_23858 = (state_23903[(8)]);
var inst_23857 = (state_23903[(11)]);
var inst_23860 = (inst_23858 < inst_23857);
var inst_23861 = inst_23860;
var state_23903__$1 = state_23903;
if(cljs.core.truth_(inst_23861)){
var statearr_23937_23968 = state_23903__$1;
(statearr_23937_23968[(1)] = (10));

} else {
var statearr_23938_23969 = state_23903__$1;
(statearr_23938_23969[(1)] = (11));

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
});})(c__21296__auto__))
;
return ((function (switch__21281__auto__,c__21296__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____0 = (function (){
var statearr_23942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23942[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__);

(statearr_23942[(1)] = (1));

return statearr_23942;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____1 = (function (state_23903){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_23903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e23943){if((e23943 instanceof Object)){
var ex__21285__auto__ = e23943;
var statearr_23944_23970 = state_23903;
(statearr_23944_23970[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23971 = state_23903;
state_23903 = G__23971;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__ = function(state_23903){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____1.call(this,state_23903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21282__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__))
})();
var state__21298__auto__ = (function (){var statearr_23945 = f__21297__auto__.call(null);
(statearr_23945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_23945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__))
);

return c__21296__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23972 = [];
var len__19864__auto___23975 = arguments.length;
var i__19865__auto___23976 = (0);
while(true){
if((i__19865__auto___23976 < len__19864__auto___23975)){
args23972.push((arguments[i__19865__auto___23976]));

var G__23977 = (i__19865__auto___23976 + (1));
i__19865__auto___23976 = G__23977;
continue;
} else {
}
break;
}

var G__23974 = args23972.length;
switch (G__23974) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23972.length)].join('')));

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
var args23979 = [];
var len__19864__auto___23982 = arguments.length;
var i__19865__auto___23983 = (0);
while(true){
if((i__19865__auto___23983 < len__19864__auto___23982)){
args23979.push((arguments[i__19865__auto___23983]));

var G__23984 = (i__19865__auto___23983 + (1));
i__19865__auto___23983 = G__23984;
continue;
} else {
}
break;
}

var G__23981 = args23979.length;
switch (G__23981) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23979.length)].join('')));

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
var args23986 = [];
var len__19864__auto___24037 = arguments.length;
var i__19865__auto___24038 = (0);
while(true){
if((i__19865__auto___24038 < len__19864__auto___24037)){
args23986.push((arguments[i__19865__auto___24038]));

var G__24039 = (i__19865__auto___24038 + (1));
i__19865__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var G__23988 = args23986.length;
switch (G__23988) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23986.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___24041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___24041,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___24041,out){
return (function (state_24012){
var state_val_24013 = (state_24012[(1)]);
if((state_val_24013 === (7))){
var inst_24007 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24014_24042 = state_24012__$1;
(statearr_24014_24042[(2)] = inst_24007);

(statearr_24014_24042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (1))){
var inst_23989 = null;
var state_24012__$1 = (function (){var statearr_24015 = state_24012;
(statearr_24015[(7)] = inst_23989);

return statearr_24015;
})();
var statearr_24016_24043 = state_24012__$1;
(statearr_24016_24043[(2)] = null);

(statearr_24016_24043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (4))){
var inst_23992 = (state_24012[(8)]);
var inst_23992__$1 = (state_24012[(2)]);
var inst_23993 = (inst_23992__$1 == null);
var inst_23994 = cljs.core.not.call(null,inst_23993);
var state_24012__$1 = (function (){var statearr_24017 = state_24012;
(statearr_24017[(8)] = inst_23992__$1);

return statearr_24017;
})();
if(inst_23994){
var statearr_24018_24044 = state_24012__$1;
(statearr_24018_24044[(1)] = (5));

} else {
var statearr_24019_24045 = state_24012__$1;
(statearr_24019_24045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (6))){
var state_24012__$1 = state_24012;
var statearr_24020_24046 = state_24012__$1;
(statearr_24020_24046[(2)] = null);

(statearr_24020_24046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (3))){
var inst_24009 = (state_24012[(2)]);
var inst_24010 = cljs.core.async.close_BANG_.call(null,out);
var state_24012__$1 = (function (){var statearr_24021 = state_24012;
(statearr_24021[(9)] = inst_24009);

return statearr_24021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24012__$1,inst_24010);
} else {
if((state_val_24013 === (2))){
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24012__$1,(4),ch);
} else {
if((state_val_24013 === (11))){
var inst_23992 = (state_24012[(8)]);
var inst_24001 = (state_24012[(2)]);
var inst_23989 = inst_23992;
var state_24012__$1 = (function (){var statearr_24022 = state_24012;
(statearr_24022[(10)] = inst_24001);

(statearr_24022[(7)] = inst_23989);

return statearr_24022;
})();
var statearr_24023_24047 = state_24012__$1;
(statearr_24023_24047[(2)] = null);

(statearr_24023_24047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (9))){
var inst_23992 = (state_24012[(8)]);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24012__$1,(11),out,inst_23992);
} else {
if((state_val_24013 === (5))){
var inst_23992 = (state_24012[(8)]);
var inst_23989 = (state_24012[(7)]);
var inst_23996 = cljs.core._EQ_.call(null,inst_23992,inst_23989);
var state_24012__$1 = state_24012;
if(inst_23996){
var statearr_24025_24048 = state_24012__$1;
(statearr_24025_24048[(1)] = (8));

} else {
var statearr_24026_24049 = state_24012__$1;
(statearr_24026_24049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (10))){
var inst_24004 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24027_24050 = state_24012__$1;
(statearr_24027_24050[(2)] = inst_24004);

(statearr_24027_24050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (8))){
var inst_23989 = (state_24012[(7)]);
var tmp24024 = inst_23989;
var inst_23989__$1 = tmp24024;
var state_24012__$1 = (function (){var statearr_24028 = state_24012;
(statearr_24028[(7)] = inst_23989__$1);

return statearr_24028;
})();
var statearr_24029_24051 = state_24012__$1;
(statearr_24029_24051[(2)] = null);

(statearr_24029_24051[(1)] = (2));


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
});})(c__21296__auto___24041,out))
;
return ((function (switch__21281__auto__,c__21296__auto___24041,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_24033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24033[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_24033[(1)] = (1));

return statearr_24033;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_24012){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_24012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e24034){if((e24034 instanceof Object)){
var ex__21285__auto__ = e24034;
var statearr_24035_24052 = state_24012;
(statearr_24035_24052[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24053 = state_24012;
state_24012 = G__24053;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_24012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_24012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___24041,out))
})();
var state__21298__auto__ = (function (){var statearr_24036 = f__21297__auto__.call(null);
(statearr_24036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___24041);

return statearr_24036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___24041,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24054 = [];
var len__19864__auto___24124 = arguments.length;
var i__19865__auto___24125 = (0);
while(true){
if((i__19865__auto___24125 < len__19864__auto___24124)){
args24054.push((arguments[i__19865__auto___24125]));

var G__24126 = (i__19865__auto___24125 + (1));
i__19865__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var G__24056 = args24054.length;
switch (G__24056) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24054.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___24128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___24128,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___24128,out){
return (function (state_24094){
var state_val_24095 = (state_24094[(1)]);
if((state_val_24095 === (7))){
var inst_24090 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24096_24129 = state_24094__$1;
(statearr_24096_24129[(2)] = inst_24090);

(statearr_24096_24129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (1))){
var inst_24057 = (new Array(n));
var inst_24058 = inst_24057;
var inst_24059 = (0);
var state_24094__$1 = (function (){var statearr_24097 = state_24094;
(statearr_24097[(7)] = inst_24058);

(statearr_24097[(8)] = inst_24059);

return statearr_24097;
})();
var statearr_24098_24130 = state_24094__$1;
(statearr_24098_24130[(2)] = null);

(statearr_24098_24130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (4))){
var inst_24062 = (state_24094[(9)]);
var inst_24062__$1 = (state_24094[(2)]);
var inst_24063 = (inst_24062__$1 == null);
var inst_24064 = cljs.core.not.call(null,inst_24063);
var state_24094__$1 = (function (){var statearr_24099 = state_24094;
(statearr_24099[(9)] = inst_24062__$1);

return statearr_24099;
})();
if(inst_24064){
var statearr_24100_24131 = state_24094__$1;
(statearr_24100_24131[(1)] = (5));

} else {
var statearr_24101_24132 = state_24094__$1;
(statearr_24101_24132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (15))){
var inst_24084 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24102_24133 = state_24094__$1;
(statearr_24102_24133[(2)] = inst_24084);

(statearr_24102_24133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (13))){
var state_24094__$1 = state_24094;
var statearr_24103_24134 = state_24094__$1;
(statearr_24103_24134[(2)] = null);

(statearr_24103_24134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (6))){
var inst_24059 = (state_24094[(8)]);
var inst_24080 = (inst_24059 > (0));
var state_24094__$1 = state_24094;
if(cljs.core.truth_(inst_24080)){
var statearr_24104_24135 = state_24094__$1;
(statearr_24104_24135[(1)] = (12));

} else {
var statearr_24105_24136 = state_24094__$1;
(statearr_24105_24136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (3))){
var inst_24092 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24094__$1,inst_24092);
} else {
if((state_val_24095 === (12))){
var inst_24058 = (state_24094[(7)]);
var inst_24082 = cljs.core.vec.call(null,inst_24058);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24094__$1,(15),out,inst_24082);
} else {
if((state_val_24095 === (2))){
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24094__$1,(4),ch);
} else {
if((state_val_24095 === (11))){
var inst_24074 = (state_24094[(2)]);
var inst_24075 = (new Array(n));
var inst_24058 = inst_24075;
var inst_24059 = (0);
var state_24094__$1 = (function (){var statearr_24106 = state_24094;
(statearr_24106[(7)] = inst_24058);

(statearr_24106[(10)] = inst_24074);

(statearr_24106[(8)] = inst_24059);

return statearr_24106;
})();
var statearr_24107_24137 = state_24094__$1;
(statearr_24107_24137[(2)] = null);

(statearr_24107_24137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (9))){
var inst_24058 = (state_24094[(7)]);
var inst_24072 = cljs.core.vec.call(null,inst_24058);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24094__$1,(11),out,inst_24072);
} else {
if((state_val_24095 === (5))){
var inst_24058 = (state_24094[(7)]);
var inst_24059 = (state_24094[(8)]);
var inst_24062 = (state_24094[(9)]);
var inst_24067 = (state_24094[(11)]);
var inst_24066 = (inst_24058[inst_24059] = inst_24062);
var inst_24067__$1 = (inst_24059 + (1));
var inst_24068 = (inst_24067__$1 < n);
var state_24094__$1 = (function (){var statearr_24108 = state_24094;
(statearr_24108[(12)] = inst_24066);

(statearr_24108[(11)] = inst_24067__$1);

return statearr_24108;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24109_24138 = state_24094__$1;
(statearr_24109_24138[(1)] = (8));

} else {
var statearr_24110_24139 = state_24094__$1;
(statearr_24110_24139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (14))){
var inst_24087 = (state_24094[(2)]);
var inst_24088 = cljs.core.async.close_BANG_.call(null,out);
var state_24094__$1 = (function (){var statearr_24112 = state_24094;
(statearr_24112[(13)] = inst_24087);

return statearr_24112;
})();
var statearr_24113_24140 = state_24094__$1;
(statearr_24113_24140[(2)] = inst_24088);

(statearr_24113_24140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (10))){
var inst_24078 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24114_24141 = state_24094__$1;
(statearr_24114_24141[(2)] = inst_24078);

(statearr_24114_24141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24095 === (8))){
var inst_24058 = (state_24094[(7)]);
var inst_24067 = (state_24094[(11)]);
var tmp24111 = inst_24058;
var inst_24058__$1 = tmp24111;
var inst_24059 = inst_24067;
var state_24094__$1 = (function (){var statearr_24115 = state_24094;
(statearr_24115[(7)] = inst_24058__$1);

(statearr_24115[(8)] = inst_24059);

return statearr_24115;
})();
var statearr_24116_24142 = state_24094__$1;
(statearr_24116_24142[(2)] = null);

(statearr_24116_24142[(1)] = (2));


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
});})(c__21296__auto___24128,out))
;
return ((function (switch__21281__auto__,c__21296__auto___24128,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_24120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24120[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_24120[(1)] = (1));

return statearr_24120;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_24094){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_24094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e24121){if((e24121 instanceof Object)){
var ex__21285__auto__ = e24121;
var statearr_24122_24143 = state_24094;
(statearr_24122_24143[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24144 = state_24094;
state_24094 = G__24144;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_24094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_24094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___24128,out))
})();
var state__21298__auto__ = (function (){var statearr_24123 = f__21297__auto__.call(null);
(statearr_24123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___24128);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___24128,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24145 = [];
var len__19864__auto___24219 = arguments.length;
var i__19865__auto___24220 = (0);
while(true){
if((i__19865__auto___24220 < len__19864__auto___24219)){
args24145.push((arguments[i__19865__auto___24220]));

var G__24221 = (i__19865__auto___24220 + (1));
i__19865__auto___24220 = G__24221;
continue;
} else {
}
break;
}

var G__24147 = args24145.length;
switch (G__24147) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24145.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21296__auto___24223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto___24223,out){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto___24223,out){
return (function (state_24189){
var state_val_24190 = (state_24189[(1)]);
if((state_val_24190 === (7))){
var inst_24185 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24191_24224 = state_24189__$1;
(statearr_24191_24224[(2)] = inst_24185);

(statearr_24191_24224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (1))){
var inst_24148 = [];
var inst_24149 = inst_24148;
var inst_24150 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24189__$1 = (function (){var statearr_24192 = state_24189;
(statearr_24192[(7)] = inst_24150);

(statearr_24192[(8)] = inst_24149);

return statearr_24192;
})();
var statearr_24193_24225 = state_24189__$1;
(statearr_24193_24225[(2)] = null);

(statearr_24193_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (4))){
var inst_24153 = (state_24189[(9)]);
var inst_24153__$1 = (state_24189[(2)]);
var inst_24154 = (inst_24153__$1 == null);
var inst_24155 = cljs.core.not.call(null,inst_24154);
var state_24189__$1 = (function (){var statearr_24194 = state_24189;
(statearr_24194[(9)] = inst_24153__$1);

return statearr_24194;
})();
if(inst_24155){
var statearr_24195_24226 = state_24189__$1;
(statearr_24195_24226[(1)] = (5));

} else {
var statearr_24196_24227 = state_24189__$1;
(statearr_24196_24227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (15))){
var inst_24179 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24197_24228 = state_24189__$1;
(statearr_24197_24228[(2)] = inst_24179);

(statearr_24197_24228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (13))){
var state_24189__$1 = state_24189;
var statearr_24198_24229 = state_24189__$1;
(statearr_24198_24229[(2)] = null);

(statearr_24198_24229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (6))){
var inst_24149 = (state_24189[(8)]);
var inst_24174 = inst_24149.length;
var inst_24175 = (inst_24174 > (0));
var state_24189__$1 = state_24189;
if(cljs.core.truth_(inst_24175)){
var statearr_24199_24230 = state_24189__$1;
(statearr_24199_24230[(1)] = (12));

} else {
var statearr_24200_24231 = state_24189__$1;
(statearr_24200_24231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (3))){
var inst_24187 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24189__$1,inst_24187);
} else {
if((state_val_24190 === (12))){
var inst_24149 = (state_24189[(8)]);
var inst_24177 = cljs.core.vec.call(null,inst_24149);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24189__$1,(15),out,inst_24177);
} else {
if((state_val_24190 === (2))){
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24189__$1,(4),ch);
} else {
if((state_val_24190 === (11))){
var inst_24153 = (state_24189[(9)]);
var inst_24157 = (state_24189[(10)]);
var inst_24167 = (state_24189[(2)]);
var inst_24168 = [];
var inst_24169 = inst_24168.push(inst_24153);
var inst_24149 = inst_24168;
var inst_24150 = inst_24157;
var state_24189__$1 = (function (){var statearr_24201 = state_24189;
(statearr_24201[(7)] = inst_24150);

(statearr_24201[(11)] = inst_24167);

(statearr_24201[(12)] = inst_24169);

(statearr_24201[(8)] = inst_24149);

return statearr_24201;
})();
var statearr_24202_24232 = state_24189__$1;
(statearr_24202_24232[(2)] = null);

(statearr_24202_24232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (9))){
var inst_24149 = (state_24189[(8)]);
var inst_24165 = cljs.core.vec.call(null,inst_24149);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24189__$1,(11),out,inst_24165);
} else {
if((state_val_24190 === (5))){
var inst_24150 = (state_24189[(7)]);
var inst_24153 = (state_24189[(9)]);
var inst_24157 = (state_24189[(10)]);
var inst_24157__$1 = f.call(null,inst_24153);
var inst_24158 = cljs.core._EQ_.call(null,inst_24157__$1,inst_24150);
var inst_24159 = cljs.core.keyword_identical_QMARK_.call(null,inst_24150,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24160 = (inst_24158) || (inst_24159);
var state_24189__$1 = (function (){var statearr_24203 = state_24189;
(statearr_24203[(10)] = inst_24157__$1);

return statearr_24203;
})();
if(cljs.core.truth_(inst_24160)){
var statearr_24204_24233 = state_24189__$1;
(statearr_24204_24233[(1)] = (8));

} else {
var statearr_24205_24234 = state_24189__$1;
(statearr_24205_24234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (14))){
var inst_24182 = (state_24189[(2)]);
var inst_24183 = cljs.core.async.close_BANG_.call(null,out);
var state_24189__$1 = (function (){var statearr_24207 = state_24189;
(statearr_24207[(13)] = inst_24182);

return statearr_24207;
})();
var statearr_24208_24235 = state_24189__$1;
(statearr_24208_24235[(2)] = inst_24183);

(statearr_24208_24235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (10))){
var inst_24172 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24209_24236 = state_24189__$1;
(statearr_24209_24236[(2)] = inst_24172);

(statearr_24209_24236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (8))){
var inst_24153 = (state_24189[(9)]);
var inst_24157 = (state_24189[(10)]);
var inst_24149 = (state_24189[(8)]);
var inst_24162 = inst_24149.push(inst_24153);
var tmp24206 = inst_24149;
var inst_24149__$1 = tmp24206;
var inst_24150 = inst_24157;
var state_24189__$1 = (function (){var statearr_24210 = state_24189;
(statearr_24210[(7)] = inst_24150);

(statearr_24210[(14)] = inst_24162);

(statearr_24210[(8)] = inst_24149__$1);

return statearr_24210;
})();
var statearr_24211_24237 = state_24189__$1;
(statearr_24211_24237[(2)] = null);

(statearr_24211_24237[(1)] = (2));


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
});})(c__21296__auto___24223,out))
;
return ((function (switch__21281__auto__,c__21296__auto___24223,out){
return (function() {
var cljs$core$async$state_machine__21282__auto__ = null;
var cljs$core$async$state_machine__21282__auto____0 = (function (){
var statearr_24215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24215[(0)] = cljs$core$async$state_machine__21282__auto__);

(statearr_24215[(1)] = (1));

return statearr_24215;
});
var cljs$core$async$state_machine__21282__auto____1 = (function (state_24189){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_24189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e24216){if((e24216 instanceof Object)){
var ex__21285__auto__ = e24216;
var statearr_24217_24238 = state_24189;
(statearr_24217_24238[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24239 = state_24189;
state_24189 = G__24239;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
cljs$core$async$state_machine__21282__auto__ = function(state_24189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21282__auto____1.call(this,state_24189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21282__auto____0;
cljs$core$async$state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21282__auto____1;
return cljs$core$async$state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto___24223,out))
})();
var state__21298__auto__ = (function (){var statearr_24218 = f__21297__auto__.call(null);
(statearr_24218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto___24223);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto___24223,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484862756793