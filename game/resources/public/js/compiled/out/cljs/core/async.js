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
var args21299 = [];
var len__19850__auto___21305 = arguments.length;
var i__19851__auto___21306 = (0);
while(true){
if((i__19851__auto___21306 < len__19850__auto___21305)){
args21299.push((arguments[i__19851__auto___21306]));

var G__21307 = (i__19851__auto___21306 + (1));
i__19851__auto___21306 = G__21307;
continue;
} else {
}
break;
}

var G__21301 = args21299.length;
switch (G__21301) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21299.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21302 = (function (f,blockable,meta21303){
this.f = f;
this.blockable = blockable;
this.meta21303 = meta21303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21304,meta21303__$1){
var self__ = this;
var _21304__$1 = this;
return (new cljs.core.async.t_cljs$core$async21302(self__.f,self__.blockable,meta21303__$1));
});

cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21304){
var self__ = this;
var _21304__$1 = this;
return self__.meta21303;
});

cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21303","meta21303",-945344295,null)], null);
});

cljs.core.async.t_cljs$core$async21302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21302";

cljs.core.async.t_cljs$core$async21302.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async21302");
});

cljs.core.async.__GT_t_cljs$core$async21302 = (function cljs$core$async$__GT_t_cljs$core$async21302(f__$1,blockable__$1,meta21303){
return (new cljs.core.async.t_cljs$core$async21302(f__$1,blockable__$1,meta21303));
});

}

return (new cljs.core.async.t_cljs$core$async21302(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21311 = [];
var len__19850__auto___21314 = arguments.length;
var i__19851__auto___21315 = (0);
while(true){
if((i__19851__auto___21315 < len__19850__auto___21314)){
args21311.push((arguments[i__19851__auto___21315]));

var G__21316 = (i__19851__auto___21315 + (1));
i__19851__auto___21315 = G__21316;
continue;
} else {
}
break;
}

var G__21313 = args21311.length;
switch (G__21313) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21311.length)].join('')));

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
var args21318 = [];
var len__19850__auto___21321 = arguments.length;
var i__19851__auto___21322 = (0);
while(true){
if((i__19851__auto___21322 < len__19850__auto___21321)){
args21318.push((arguments[i__19851__auto___21322]));

var G__21323 = (i__19851__auto___21322 + (1));
i__19851__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var G__21320 = args21318.length;
switch (G__21320) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21318.length)].join('')));

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
var args21325 = [];
var len__19850__auto___21328 = arguments.length;
var i__19851__auto___21329 = (0);
while(true){
if((i__19851__auto___21329 < len__19850__auto___21328)){
args21325.push((arguments[i__19851__auto___21329]));

var G__21330 = (i__19851__auto___21329 + (1));
i__19851__auto___21329 = G__21330;
continue;
} else {
}
break;
}

var G__21327 = args21325.length;
switch (G__21327) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21325.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21332 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21332);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21332,ret){
return (function (){
return fn1.call(null,val_21332);
});})(val_21332,ret))
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
var args21333 = [];
var len__19850__auto___21336 = arguments.length;
var i__19851__auto___21337 = (0);
while(true){
if((i__19851__auto___21337 < len__19850__auto___21336)){
args21333.push((arguments[i__19851__auto___21337]));

var G__21338 = (i__19851__auto___21337 + (1));
i__19851__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var G__21335 = args21333.length;
switch (G__21335) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21333.length)].join('')));

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
var n__19660__auto___21340 = n;
var x_21341 = (0);
while(true){
if((x_21341 < n__19660__auto___21340)){
(a[x_21341] = (0));

var G__21342 = (x_21341 + (1));
x_21341 = G__21342;
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

var G__21343 = (i + (1));
i = G__21343;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21347 = (function (flag,meta21348){
this.flag = flag;
this.meta21348 = meta21348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21349,meta21348__$1){
var self__ = this;
var _21349__$1 = this;
return (new cljs.core.async.t_cljs$core$async21347(self__.flag,meta21348__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21349){
var self__ = this;
var _21349__$1 = this;
return self__.meta21348;
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21348","meta21348",-1332912185,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21347";

cljs.core.async.t_cljs$core$async21347.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async21347");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21347 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21347(flag__$1,meta21348){
return (new cljs.core.async.t_cljs$core$async21347(flag__$1,meta21348));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21347(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21353 = (function (flag,cb,meta21354){
this.flag = flag;
this.cb = cb;
this.meta21354 = meta21354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21355,meta21354__$1){
var self__ = this;
var _21355__$1 = this;
return (new cljs.core.async.t_cljs$core$async21353(self__.flag,self__.cb,meta21354__$1));
});

cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21355){
var self__ = this;
var _21355__$1 = this;
return self__.meta21354;
});

cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21354","meta21354",-1743447214,null)], null);
});

cljs.core.async.t_cljs$core$async21353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21353";

cljs.core.async.t_cljs$core$async21353.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async21353");
});

cljs.core.async.__GT_t_cljs$core$async21353 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21353(flag__$1,cb__$1,meta21354){
return (new cljs.core.async.t_cljs$core$async21353(flag__$1,cb__$1,meta21354));
});

}

return (new cljs.core.async.t_cljs$core$async21353(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21356_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21356_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21357_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21357_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18742__auto__ = wport;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21358 = (i + (1));
i = G__21358;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18742__auto__ = ret;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18730__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18730__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18730__auto__;
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
var args__19857__auto__ = [];
var len__19850__auto___21364 = arguments.length;
var i__19851__auto___21365 = (0);
while(true){
if((i__19851__auto___21365 < len__19850__auto___21364)){
args__19857__auto__.push((arguments[i__19851__auto___21365]));

var G__21366 = (i__19851__auto___21365 + (1));
i__19851__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((1) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19858__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21361){
var map__21362 = p__21361;
var map__21362__$1 = ((((!((map__21362 == null)))?((((map__21362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21362):map__21362);
var opts = map__21362__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21359){
var G__21360 = cljs.core.first.call(null,seq21359);
var seq21359__$1 = cljs.core.next.call(null,seq21359);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21360,seq21359__$1);
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
var args21367 = [];
var len__19850__auto___21417 = arguments.length;
var i__19851__auto___21418 = (0);
while(true){
if((i__19851__auto___21418 < len__19850__auto___21417)){
args21367.push((arguments[i__19851__auto___21418]));

var G__21419 = (i__19851__auto___21418 + (1));
i__19851__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var G__21369 = args21367.length;
switch (G__21369) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21367.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21107__auto___21421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___21421){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___21421){
return (function (state_21393){
var state_val_21394 = (state_21393[(1)]);
if((state_val_21394 === (7))){
var inst_21389 = (state_21393[(2)]);
var state_21393__$1 = state_21393;
var statearr_21395_21422 = state_21393__$1;
(statearr_21395_21422[(2)] = inst_21389);

(statearr_21395_21422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (1))){
var state_21393__$1 = state_21393;
var statearr_21396_21423 = state_21393__$1;
(statearr_21396_21423[(2)] = null);

(statearr_21396_21423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (4))){
var inst_21372 = (state_21393[(7)]);
var inst_21372__$1 = (state_21393[(2)]);
var inst_21373 = (inst_21372__$1 == null);
var state_21393__$1 = (function (){var statearr_21397 = state_21393;
(statearr_21397[(7)] = inst_21372__$1);

return statearr_21397;
})();
if(cljs.core.truth_(inst_21373)){
var statearr_21398_21424 = state_21393__$1;
(statearr_21398_21424[(1)] = (5));

} else {
var statearr_21399_21425 = state_21393__$1;
(statearr_21399_21425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (13))){
var state_21393__$1 = state_21393;
var statearr_21400_21426 = state_21393__$1;
(statearr_21400_21426[(2)] = null);

(statearr_21400_21426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (6))){
var inst_21372 = (state_21393[(7)]);
var state_21393__$1 = state_21393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21393__$1,(11),to,inst_21372);
} else {
if((state_val_21394 === (3))){
var inst_21391 = (state_21393[(2)]);
var state_21393__$1 = state_21393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21393__$1,inst_21391);
} else {
if((state_val_21394 === (12))){
var state_21393__$1 = state_21393;
var statearr_21401_21427 = state_21393__$1;
(statearr_21401_21427[(2)] = null);

(statearr_21401_21427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (2))){
var state_21393__$1 = state_21393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21393__$1,(4),from);
} else {
if((state_val_21394 === (11))){
var inst_21382 = (state_21393[(2)]);
var state_21393__$1 = state_21393;
if(cljs.core.truth_(inst_21382)){
var statearr_21402_21428 = state_21393__$1;
(statearr_21402_21428[(1)] = (12));

} else {
var statearr_21403_21429 = state_21393__$1;
(statearr_21403_21429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (9))){
var state_21393__$1 = state_21393;
var statearr_21404_21430 = state_21393__$1;
(statearr_21404_21430[(2)] = null);

(statearr_21404_21430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (5))){
var state_21393__$1 = state_21393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21405_21431 = state_21393__$1;
(statearr_21405_21431[(1)] = (8));

} else {
var statearr_21406_21432 = state_21393__$1;
(statearr_21406_21432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (14))){
var inst_21387 = (state_21393[(2)]);
var state_21393__$1 = state_21393;
var statearr_21407_21433 = state_21393__$1;
(statearr_21407_21433[(2)] = inst_21387);

(statearr_21407_21433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (10))){
var inst_21379 = (state_21393[(2)]);
var state_21393__$1 = state_21393;
var statearr_21408_21434 = state_21393__$1;
(statearr_21408_21434[(2)] = inst_21379);

(statearr_21408_21434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21394 === (8))){
var inst_21376 = cljs.core.async.close_BANG_.call(null,to);
var state_21393__$1 = state_21393;
var statearr_21409_21435 = state_21393__$1;
(statearr_21409_21435[(2)] = inst_21376);

(statearr_21409_21435[(1)] = (10));


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
});})(c__21107__auto___21421))
;
return ((function (switch__21092__auto__,c__21107__auto___21421){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_21413 = [null,null,null,null,null,null,null,null];
(statearr_21413[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_21413[(1)] = (1));

return statearr_21413;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_21393){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21414){if((e21414 instanceof Object)){
var ex__21096__auto__ = e21414;
var statearr_21415_21436 = state_21393;
(statearr_21415_21436[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21437 = state_21393;
state_21393 = G__21437;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_21393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_21393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___21421))
})();
var state__21109__auto__ = (function (){var statearr_21416 = f__21108__auto__.call(null);
(statearr_21416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21421);

return statearr_21416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___21421))
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
return (function (p__21625){
var vec__21626 = p__21625;
var v = cljs.core.nth.call(null,vec__21626,(0),null);
var p = cljs.core.nth.call(null,vec__21626,(1),null);
var job = vec__21626;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21107__auto___21812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results){
return (function (state_21633){
var state_val_21634 = (state_21633[(1)]);
if((state_val_21634 === (1))){
var state_21633__$1 = state_21633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21633__$1,(2),res,v);
} else {
if((state_val_21634 === (2))){
var inst_21630 = (state_21633[(2)]);
var inst_21631 = cljs.core.async.close_BANG_.call(null,res);
var state_21633__$1 = (function (){var statearr_21635 = state_21633;
(statearr_21635[(7)] = inst_21630);

return statearr_21635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21633__$1,inst_21631);
} else {
return null;
}
}
});})(c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results))
;
return ((function (switch__21092__auto__,c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_21639 = [null,null,null,null,null,null,null,null];
(statearr_21639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__);

(statearr_21639[(1)] = (1));

return statearr_21639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1 = (function (state_21633){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21640){if((e21640 instanceof Object)){
var ex__21096__auto__ = e21640;
var statearr_21641_21813 = state_21633;
(statearr_21641_21813[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21814 = state_21633;
state_21633 = G__21814;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = function(state_21633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1.call(this,state_21633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results))
})();
var state__21109__auto__ = (function (){var statearr_21642 = f__21108__auto__.call(null);
(statearr_21642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21812);

return statearr_21642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___21812,res,vec__21626,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21643){
var vec__21644 = p__21643;
var v = cljs.core.nth.call(null,vec__21644,(0),null);
var p = cljs.core.nth.call(null,vec__21644,(1),null);
var job = vec__21644;
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
var n__19660__auto___21815 = n;
var __21816 = (0);
while(true){
if((__21816 < n__19660__auto___21815)){
var G__21647_21817 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21647_21817) {
case "compute":
var c__21107__auto___21819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21816,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (__21816,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function (state_21660){
var state_val_21661 = (state_21660[(1)]);
if((state_val_21661 === (1))){
var state_21660__$1 = state_21660;
var statearr_21662_21820 = state_21660__$1;
(statearr_21662_21820[(2)] = null);

(statearr_21662_21820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (2))){
var state_21660__$1 = state_21660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21660__$1,(4),jobs);
} else {
if((state_val_21661 === (3))){
var inst_21658 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21660__$1,inst_21658);
} else {
if((state_val_21661 === (4))){
var inst_21650 = (state_21660[(2)]);
var inst_21651 = process.call(null,inst_21650);
var state_21660__$1 = state_21660;
if(cljs.core.truth_(inst_21651)){
var statearr_21663_21821 = state_21660__$1;
(statearr_21663_21821[(1)] = (5));

} else {
var statearr_21664_21822 = state_21660__$1;
(statearr_21664_21822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (5))){
var state_21660__$1 = state_21660;
var statearr_21665_21823 = state_21660__$1;
(statearr_21665_21823[(2)] = null);

(statearr_21665_21823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (6))){
var state_21660__$1 = state_21660;
var statearr_21666_21824 = state_21660__$1;
(statearr_21666_21824[(2)] = null);

(statearr_21666_21824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (7))){
var inst_21656 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
var statearr_21667_21825 = state_21660__$1;
(statearr_21667_21825[(2)] = inst_21656);

(statearr_21667_21825[(1)] = (3));


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
});})(__21816,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
;
return ((function (__21816,switch__21092__auto__,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_21671 = [null,null,null,null,null,null,null];
(statearr_21671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__);

(statearr_21671[(1)] = (1));

return statearr_21671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1 = (function (state_21660){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21672){if((e21672 instanceof Object)){
var ex__21096__auto__ = e21672;
var statearr_21673_21826 = state_21660;
(statearr_21673_21826[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21827 = state_21660;
state_21660 = G__21827;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = function(state_21660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1.call(this,state_21660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__;
})()
;})(__21816,switch__21092__auto__,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
})();
var state__21109__auto__ = (function (){var statearr_21674 = f__21108__auto__.call(null);
(statearr_21674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21819);

return statearr_21674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(__21816,c__21107__auto___21819,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
);


break;
case "async":
var c__21107__auto___21828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21816,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (__21816,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (1))){
var state_21687__$1 = state_21687;
var statearr_21689_21829 = state_21687__$1;
(statearr_21689_21829[(2)] = null);

(statearr_21689_21829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (2))){
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21687__$1,(4),jobs);
} else {
if((state_val_21688 === (3))){
var inst_21685 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (4))){
var inst_21677 = (state_21687[(2)]);
var inst_21678 = async.call(null,inst_21677);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21678)){
var statearr_21690_21830 = state_21687__$1;
(statearr_21690_21830[(1)] = (5));

} else {
var statearr_21691_21831 = state_21687__$1;
(statearr_21691_21831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (5))){
var state_21687__$1 = state_21687;
var statearr_21692_21832 = state_21687__$1;
(statearr_21692_21832[(2)] = null);

(statearr_21692_21832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var state_21687__$1 = state_21687;
var statearr_21693_21833 = state_21687__$1;
(statearr_21693_21833[(2)] = null);

(statearr_21693_21833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (7))){
var inst_21683 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21694_21834 = state_21687__$1;
(statearr_21694_21834[(2)] = inst_21683);

(statearr_21694_21834[(1)] = (3));


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
});})(__21816,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
;
return ((function (__21816,switch__21092__auto__,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_21698 = [null,null,null,null,null,null,null];
(statearr_21698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__);

(statearr_21698[(1)] = (1));

return statearr_21698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1 = (function (state_21687){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21699){if((e21699 instanceof Object)){
var ex__21096__auto__ = e21699;
var statearr_21700_21835 = state_21687;
(statearr_21700_21835[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21836 = state_21687;
state_21687 = G__21836;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__;
})()
;})(__21816,switch__21092__auto__,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
})();
var state__21109__auto__ = (function (){var statearr_21701 = f__21108__auto__.call(null);
(statearr_21701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21828);

return statearr_21701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(__21816,c__21107__auto___21828,G__21647_21817,n__19660__auto___21815,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21837 = (__21816 + (1));
__21816 = G__21837;
continue;
} else {
}
break;
}

var c__21107__auto___21838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___21838,jobs,results,process,async){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___21838,jobs,results,process,async){
return (function (state_21723){
var state_val_21724 = (state_21723[(1)]);
if((state_val_21724 === (1))){
var state_21723__$1 = state_21723;
var statearr_21725_21839 = state_21723__$1;
(statearr_21725_21839[(2)] = null);

(statearr_21725_21839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21724 === (2))){
var state_21723__$1 = state_21723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21723__$1,(4),from);
} else {
if((state_val_21724 === (3))){
var inst_21721 = (state_21723[(2)]);
var state_21723__$1 = state_21723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21723__$1,inst_21721);
} else {
if((state_val_21724 === (4))){
var inst_21704 = (state_21723[(7)]);
var inst_21704__$1 = (state_21723[(2)]);
var inst_21705 = (inst_21704__$1 == null);
var state_21723__$1 = (function (){var statearr_21726 = state_21723;
(statearr_21726[(7)] = inst_21704__$1);

return statearr_21726;
})();
if(cljs.core.truth_(inst_21705)){
var statearr_21727_21840 = state_21723__$1;
(statearr_21727_21840[(1)] = (5));

} else {
var statearr_21728_21841 = state_21723__$1;
(statearr_21728_21841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21724 === (5))){
var inst_21707 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21723__$1 = state_21723;
var statearr_21729_21842 = state_21723__$1;
(statearr_21729_21842[(2)] = inst_21707);

(statearr_21729_21842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21724 === (6))){
var inst_21704 = (state_21723[(7)]);
var inst_21709 = (state_21723[(8)]);
var inst_21709__$1 = cljs.core.async.chan.call(null,(1));
var inst_21710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21711 = [inst_21704,inst_21709__$1];
var inst_21712 = (new cljs.core.PersistentVector(null,2,(5),inst_21710,inst_21711,null));
var state_21723__$1 = (function (){var statearr_21730 = state_21723;
(statearr_21730[(8)] = inst_21709__$1);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21723__$1,(8),jobs,inst_21712);
} else {
if((state_val_21724 === (7))){
var inst_21719 = (state_21723[(2)]);
var state_21723__$1 = state_21723;
var statearr_21731_21843 = state_21723__$1;
(statearr_21731_21843[(2)] = inst_21719);

(statearr_21731_21843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21724 === (8))){
var inst_21709 = (state_21723[(8)]);
var inst_21714 = (state_21723[(2)]);
var state_21723__$1 = (function (){var statearr_21732 = state_21723;
(statearr_21732[(9)] = inst_21714);

return statearr_21732;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21723__$1,(9),results,inst_21709);
} else {
if((state_val_21724 === (9))){
var inst_21716 = (state_21723[(2)]);
var state_21723__$1 = (function (){var statearr_21733 = state_21723;
(statearr_21733[(10)] = inst_21716);

return statearr_21733;
})();
var statearr_21734_21844 = state_21723__$1;
(statearr_21734_21844[(2)] = null);

(statearr_21734_21844[(1)] = (2));


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
});})(c__21107__auto___21838,jobs,results,process,async))
;
return ((function (switch__21092__auto__,c__21107__auto___21838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_21738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__);

(statearr_21738[(1)] = (1));

return statearr_21738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1 = (function (state_21723){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21739){if((e21739 instanceof Object)){
var ex__21096__auto__ = e21739;
var statearr_21740_21845 = state_21723;
(statearr_21740_21845[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21846 = state_21723;
state_21723 = G__21846;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = function(state_21723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1.call(this,state_21723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___21838,jobs,results,process,async))
})();
var state__21109__auto__ = (function (){var statearr_21741 = f__21108__auto__.call(null);
(statearr_21741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21838);

return statearr_21741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___21838,jobs,results,process,async))
);


var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,jobs,results,process,async){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,jobs,results,process,async){
return (function (state_21779){
var state_val_21780 = (state_21779[(1)]);
if((state_val_21780 === (7))){
var inst_21775 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21781_21847 = state_21779__$1;
(statearr_21781_21847[(2)] = inst_21775);

(statearr_21781_21847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (20))){
var state_21779__$1 = state_21779;
var statearr_21782_21848 = state_21779__$1;
(statearr_21782_21848[(2)] = null);

(statearr_21782_21848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (1))){
var state_21779__$1 = state_21779;
var statearr_21783_21849 = state_21779__$1;
(statearr_21783_21849[(2)] = null);

(statearr_21783_21849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (4))){
var inst_21744 = (state_21779[(7)]);
var inst_21744__$1 = (state_21779[(2)]);
var inst_21745 = (inst_21744__$1 == null);
var state_21779__$1 = (function (){var statearr_21784 = state_21779;
(statearr_21784[(7)] = inst_21744__$1);

return statearr_21784;
})();
if(cljs.core.truth_(inst_21745)){
var statearr_21785_21850 = state_21779__$1;
(statearr_21785_21850[(1)] = (5));

} else {
var statearr_21786_21851 = state_21779__$1;
(statearr_21786_21851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (15))){
var inst_21757 = (state_21779[(8)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21779__$1,(18),to,inst_21757);
} else {
if((state_val_21780 === (21))){
var inst_21770 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21787_21852 = state_21779__$1;
(statearr_21787_21852[(2)] = inst_21770);

(statearr_21787_21852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (13))){
var inst_21772 = (state_21779[(2)]);
var state_21779__$1 = (function (){var statearr_21788 = state_21779;
(statearr_21788[(9)] = inst_21772);

return statearr_21788;
})();
var statearr_21789_21853 = state_21779__$1;
(statearr_21789_21853[(2)] = null);

(statearr_21789_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (6))){
var inst_21744 = (state_21779[(7)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21779__$1,(11),inst_21744);
} else {
if((state_val_21780 === (17))){
var inst_21765 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
if(cljs.core.truth_(inst_21765)){
var statearr_21790_21854 = state_21779__$1;
(statearr_21790_21854[(1)] = (19));

} else {
var statearr_21791_21855 = state_21779__$1;
(statearr_21791_21855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (3))){
var inst_21777 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21779__$1,inst_21777);
} else {
if((state_val_21780 === (12))){
var inst_21754 = (state_21779[(10)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21779__$1,(14),inst_21754);
} else {
if((state_val_21780 === (2))){
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21779__$1,(4),results);
} else {
if((state_val_21780 === (19))){
var state_21779__$1 = state_21779;
var statearr_21792_21856 = state_21779__$1;
(statearr_21792_21856[(2)] = null);

(statearr_21792_21856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (11))){
var inst_21754 = (state_21779[(2)]);
var state_21779__$1 = (function (){var statearr_21793 = state_21779;
(statearr_21793[(10)] = inst_21754);

return statearr_21793;
})();
var statearr_21794_21857 = state_21779__$1;
(statearr_21794_21857[(2)] = null);

(statearr_21794_21857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (9))){
var state_21779__$1 = state_21779;
var statearr_21795_21858 = state_21779__$1;
(statearr_21795_21858[(2)] = null);

(statearr_21795_21858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (5))){
var state_21779__$1 = state_21779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21796_21859 = state_21779__$1;
(statearr_21796_21859[(1)] = (8));

} else {
var statearr_21797_21860 = state_21779__$1;
(statearr_21797_21860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (14))){
var inst_21757 = (state_21779[(8)]);
var inst_21759 = (state_21779[(11)]);
var inst_21757__$1 = (state_21779[(2)]);
var inst_21758 = (inst_21757__$1 == null);
var inst_21759__$1 = cljs.core.not.call(null,inst_21758);
var state_21779__$1 = (function (){var statearr_21798 = state_21779;
(statearr_21798[(8)] = inst_21757__$1);

(statearr_21798[(11)] = inst_21759__$1);

return statearr_21798;
})();
if(inst_21759__$1){
var statearr_21799_21861 = state_21779__$1;
(statearr_21799_21861[(1)] = (15));

} else {
var statearr_21800_21862 = state_21779__$1;
(statearr_21800_21862[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (16))){
var inst_21759 = (state_21779[(11)]);
var state_21779__$1 = state_21779;
var statearr_21801_21863 = state_21779__$1;
(statearr_21801_21863[(2)] = inst_21759);

(statearr_21801_21863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (10))){
var inst_21751 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21802_21864 = state_21779__$1;
(statearr_21802_21864[(2)] = inst_21751);

(statearr_21802_21864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (18))){
var inst_21762 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21803_21865 = state_21779__$1;
(statearr_21803_21865[(2)] = inst_21762);

(statearr_21803_21865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21780 === (8))){
var inst_21748 = cljs.core.async.close_BANG_.call(null,to);
var state_21779__$1 = state_21779;
var statearr_21804_21866 = state_21779__$1;
(statearr_21804_21866[(2)] = inst_21748);

(statearr_21804_21866[(1)] = (10));


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
});})(c__21107__auto__,jobs,results,process,async))
;
return ((function (switch__21092__auto__,c__21107__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_21808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__);

(statearr_21808[(1)] = (1));

return statearr_21808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1 = (function (state_21779){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21809){if((e21809 instanceof Object)){
var ex__21096__auto__ = e21809;
var statearr_21810_21867 = state_21779;
(statearr_21810_21867[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21868 = state_21779;
state_21779 = G__21868;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__ = function(state_21779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1.call(this,state_21779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,jobs,results,process,async))
})();
var state__21109__auto__ = (function (){var statearr_21811 = f__21108__auto__.call(null);
(statearr_21811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,jobs,results,process,async))
);

return c__21107__auto__;
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
var args21869 = [];
var len__19850__auto___21872 = arguments.length;
var i__19851__auto___21873 = (0);
while(true){
if((i__19851__auto___21873 < len__19850__auto___21872)){
args21869.push((arguments[i__19851__auto___21873]));

var G__21874 = (i__19851__auto___21873 + (1));
i__19851__auto___21873 = G__21874;
continue;
} else {
}
break;
}

var G__21871 = args21869.length;
switch (G__21871) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21869.length)].join('')));

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
var args21876 = [];
var len__19850__auto___21879 = arguments.length;
var i__19851__auto___21880 = (0);
while(true){
if((i__19851__auto___21880 < len__19850__auto___21879)){
args21876.push((arguments[i__19851__auto___21880]));

var G__21881 = (i__19851__auto___21880 + (1));
i__19851__auto___21880 = G__21881;
continue;
} else {
}
break;
}

var G__21878 = args21876.length;
switch (G__21878) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21876.length)].join('')));

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
var args21883 = [];
var len__19850__auto___21936 = arguments.length;
var i__19851__auto___21937 = (0);
while(true){
if((i__19851__auto___21937 < len__19850__auto___21936)){
args21883.push((arguments[i__19851__auto___21937]));

var G__21938 = (i__19851__auto___21937 + (1));
i__19851__auto___21937 = G__21938;
continue;
} else {
}
break;
}

var G__21885 = args21883.length;
switch (G__21885) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21883.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21107__auto___21940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___21940,tc,fc){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___21940,tc,fc){
return (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (7))){
var inst_21907 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21913_21941 = state_21911__$1;
(statearr_21913_21941[(2)] = inst_21907);

(statearr_21913_21941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (1))){
var state_21911__$1 = state_21911;
var statearr_21914_21942 = state_21911__$1;
(statearr_21914_21942[(2)] = null);

(statearr_21914_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (4))){
var inst_21888 = (state_21911[(7)]);
var inst_21888__$1 = (state_21911[(2)]);
var inst_21889 = (inst_21888__$1 == null);
var state_21911__$1 = (function (){var statearr_21915 = state_21911;
(statearr_21915[(7)] = inst_21888__$1);

return statearr_21915;
})();
if(cljs.core.truth_(inst_21889)){
var statearr_21916_21943 = state_21911__$1;
(statearr_21916_21943[(1)] = (5));

} else {
var statearr_21917_21944 = state_21911__$1;
(statearr_21917_21944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (13))){
var state_21911__$1 = state_21911;
var statearr_21918_21945 = state_21911__$1;
(statearr_21918_21945[(2)] = null);

(statearr_21918_21945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (6))){
var inst_21888 = (state_21911[(7)]);
var inst_21894 = p.call(null,inst_21888);
var state_21911__$1 = state_21911;
if(cljs.core.truth_(inst_21894)){
var statearr_21919_21946 = state_21911__$1;
(statearr_21919_21946[(1)] = (9));

} else {
var statearr_21920_21947 = state_21911__$1;
(statearr_21920_21947[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (3))){
var inst_21909 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else {
if((state_val_21912 === (12))){
var state_21911__$1 = state_21911;
var statearr_21921_21948 = state_21911__$1;
(statearr_21921_21948[(2)] = null);

(statearr_21921_21948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (2))){
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21911__$1,(4),ch);
} else {
if((state_val_21912 === (11))){
var inst_21888 = (state_21911[(7)]);
var inst_21898 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(8),inst_21898,inst_21888);
} else {
if((state_val_21912 === (9))){
var state_21911__$1 = state_21911;
var statearr_21922_21949 = state_21911__$1;
(statearr_21922_21949[(2)] = tc);

(statearr_21922_21949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (5))){
var inst_21891 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21892 = cljs.core.async.close_BANG_.call(null,fc);
var state_21911__$1 = (function (){var statearr_21923 = state_21911;
(statearr_21923[(8)] = inst_21891);

return statearr_21923;
})();
var statearr_21924_21950 = state_21911__$1;
(statearr_21924_21950[(2)] = inst_21892);

(statearr_21924_21950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (14))){
var inst_21905 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21925_21951 = state_21911__$1;
(statearr_21925_21951[(2)] = inst_21905);

(statearr_21925_21951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (10))){
var state_21911__$1 = state_21911;
var statearr_21926_21952 = state_21911__$1;
(statearr_21926_21952[(2)] = fc);

(statearr_21926_21952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (8))){
var inst_21900 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
if(cljs.core.truth_(inst_21900)){
var statearr_21927_21953 = state_21911__$1;
(statearr_21927_21953[(1)] = (12));

} else {
var statearr_21928_21954 = state_21911__$1;
(statearr_21928_21954[(1)] = (13));

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
});})(c__21107__auto___21940,tc,fc))
;
return ((function (switch__21092__auto__,c__21107__auto___21940,tc,fc){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_21932 = [null,null,null,null,null,null,null,null,null];
(statearr_21932[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_21932[(1)] = (1));

return statearr_21932;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_21911){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_21911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e21933){if((e21933 instanceof Object)){
var ex__21096__auto__ = e21933;
var statearr_21934_21955 = state_21911;
(statearr_21934_21955[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21956 = state_21911;
state_21911 = G__21956;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___21940,tc,fc))
})();
var state__21109__auto__ = (function (){var statearr_21935 = f__21108__auto__.call(null);
(statearr_21935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___21940);

return statearr_21935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___21940,tc,fc))
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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_22020){
var state_val_22021 = (state_22020[(1)]);
if((state_val_22021 === (7))){
var inst_22016 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
var statearr_22022_22043 = state_22020__$1;
(statearr_22022_22043[(2)] = inst_22016);

(statearr_22022_22043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (1))){
var inst_22000 = init;
var state_22020__$1 = (function (){var statearr_22023 = state_22020;
(statearr_22023[(7)] = inst_22000);

return statearr_22023;
})();
var statearr_22024_22044 = state_22020__$1;
(statearr_22024_22044[(2)] = null);

(statearr_22024_22044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (4))){
var inst_22003 = (state_22020[(8)]);
var inst_22003__$1 = (state_22020[(2)]);
var inst_22004 = (inst_22003__$1 == null);
var state_22020__$1 = (function (){var statearr_22025 = state_22020;
(statearr_22025[(8)] = inst_22003__$1);

return statearr_22025;
})();
if(cljs.core.truth_(inst_22004)){
var statearr_22026_22045 = state_22020__$1;
(statearr_22026_22045[(1)] = (5));

} else {
var statearr_22027_22046 = state_22020__$1;
(statearr_22027_22046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (6))){
var inst_22000 = (state_22020[(7)]);
var inst_22007 = (state_22020[(9)]);
var inst_22003 = (state_22020[(8)]);
var inst_22007__$1 = f.call(null,inst_22000,inst_22003);
var inst_22008 = cljs.core.reduced_QMARK_.call(null,inst_22007__$1);
var state_22020__$1 = (function (){var statearr_22028 = state_22020;
(statearr_22028[(9)] = inst_22007__$1);

return statearr_22028;
})();
if(inst_22008){
var statearr_22029_22047 = state_22020__$1;
(statearr_22029_22047[(1)] = (8));

} else {
var statearr_22030_22048 = state_22020__$1;
(statearr_22030_22048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (3))){
var inst_22018 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22020__$1,inst_22018);
} else {
if((state_val_22021 === (2))){
var state_22020__$1 = state_22020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22020__$1,(4),ch);
} else {
if((state_val_22021 === (9))){
var inst_22007 = (state_22020[(9)]);
var inst_22000 = inst_22007;
var state_22020__$1 = (function (){var statearr_22031 = state_22020;
(statearr_22031[(7)] = inst_22000);

return statearr_22031;
})();
var statearr_22032_22049 = state_22020__$1;
(statearr_22032_22049[(2)] = null);

(statearr_22032_22049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (5))){
var inst_22000 = (state_22020[(7)]);
var state_22020__$1 = state_22020;
var statearr_22033_22050 = state_22020__$1;
(statearr_22033_22050[(2)] = inst_22000);

(statearr_22033_22050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (10))){
var inst_22014 = (state_22020[(2)]);
var state_22020__$1 = state_22020;
var statearr_22034_22051 = state_22020__$1;
(statearr_22034_22051[(2)] = inst_22014);

(statearr_22034_22051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22021 === (8))){
var inst_22007 = (state_22020[(9)]);
var inst_22010 = cljs.core.deref.call(null,inst_22007);
var state_22020__$1 = state_22020;
var statearr_22035_22052 = state_22020__$1;
(statearr_22035_22052[(2)] = inst_22010);

(statearr_22035_22052[(1)] = (10));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21093__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21093__auto____0 = (function (){
var statearr_22039 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22039[(0)] = cljs$core$async$reduce_$_state_machine__21093__auto__);

(statearr_22039[(1)] = (1));

return statearr_22039;
});
var cljs$core$async$reduce_$_state_machine__21093__auto____1 = (function (state_22020){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_22020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e22040){if((e22040 instanceof Object)){
var ex__21096__auto__ = e22040;
var statearr_22041_22053 = state_22020;
(statearr_22041_22053[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22054 = state_22020;
state_22020 = G__22054;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21093__auto__ = function(state_22020){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21093__auto____1.call(this,state_22020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21093__auto____0;
cljs$core$async$reduce_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21093__auto____1;
return cljs$core$async$reduce_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_22042 = f__21108__auto__.call(null);
(statearr_22042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_22042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
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
var args22055 = [];
var len__19850__auto___22107 = arguments.length;
var i__19851__auto___22108 = (0);
while(true){
if((i__19851__auto___22108 < len__19850__auto___22107)){
args22055.push((arguments[i__19851__auto___22108]));

var G__22109 = (i__19851__auto___22108 + (1));
i__19851__auto___22108 = G__22109;
continue;
} else {
}
break;
}

var G__22057 = args22055.length;
switch (G__22057) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22055.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_22082){
var state_val_22083 = (state_22082[(1)]);
if((state_val_22083 === (7))){
var inst_22064 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
var statearr_22084_22111 = state_22082__$1;
(statearr_22084_22111[(2)] = inst_22064);

(statearr_22084_22111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (1))){
var inst_22058 = cljs.core.seq.call(null,coll);
var inst_22059 = inst_22058;
var state_22082__$1 = (function (){var statearr_22085 = state_22082;
(statearr_22085[(7)] = inst_22059);

return statearr_22085;
})();
var statearr_22086_22112 = state_22082__$1;
(statearr_22086_22112[(2)] = null);

(statearr_22086_22112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (4))){
var inst_22059 = (state_22082[(7)]);
var inst_22062 = cljs.core.first.call(null,inst_22059);
var state_22082__$1 = state_22082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22082__$1,(7),ch,inst_22062);
} else {
if((state_val_22083 === (13))){
var inst_22076 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
var statearr_22087_22113 = state_22082__$1;
(statearr_22087_22113[(2)] = inst_22076);

(statearr_22087_22113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (6))){
var inst_22067 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
if(cljs.core.truth_(inst_22067)){
var statearr_22088_22114 = state_22082__$1;
(statearr_22088_22114[(1)] = (8));

} else {
var statearr_22089_22115 = state_22082__$1;
(statearr_22089_22115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (3))){
var inst_22080 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22082__$1,inst_22080);
} else {
if((state_val_22083 === (12))){
var state_22082__$1 = state_22082;
var statearr_22090_22116 = state_22082__$1;
(statearr_22090_22116[(2)] = null);

(statearr_22090_22116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (2))){
var inst_22059 = (state_22082[(7)]);
var state_22082__$1 = state_22082;
if(cljs.core.truth_(inst_22059)){
var statearr_22091_22117 = state_22082__$1;
(statearr_22091_22117[(1)] = (4));

} else {
var statearr_22092_22118 = state_22082__$1;
(statearr_22092_22118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (11))){
var inst_22073 = cljs.core.async.close_BANG_.call(null,ch);
var state_22082__$1 = state_22082;
var statearr_22093_22119 = state_22082__$1;
(statearr_22093_22119[(2)] = inst_22073);

(statearr_22093_22119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (9))){
var state_22082__$1 = state_22082;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22094_22120 = state_22082__$1;
(statearr_22094_22120[(1)] = (11));

} else {
var statearr_22095_22121 = state_22082__$1;
(statearr_22095_22121[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (5))){
var inst_22059 = (state_22082[(7)]);
var state_22082__$1 = state_22082;
var statearr_22096_22122 = state_22082__$1;
(statearr_22096_22122[(2)] = inst_22059);

(statearr_22096_22122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (10))){
var inst_22078 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
var statearr_22097_22123 = state_22082__$1;
(statearr_22097_22123[(2)] = inst_22078);

(statearr_22097_22123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (8))){
var inst_22059 = (state_22082[(7)]);
var inst_22069 = cljs.core.next.call(null,inst_22059);
var inst_22059__$1 = inst_22069;
var state_22082__$1 = (function (){var statearr_22098 = state_22082;
(statearr_22098[(7)] = inst_22059__$1);

return statearr_22098;
})();
var statearr_22099_22124 = state_22082__$1;
(statearr_22099_22124[(2)] = null);

(statearr_22099_22124[(1)] = (2));


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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_22103 = [null,null,null,null,null,null,null,null];
(statearr_22103[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_22103[(1)] = (1));

return statearr_22103;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_22082){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_22082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e22104){if((e22104 instanceof Object)){
var ex__21096__auto__ = e22104;
var statearr_22105_22125 = state_22082;
(statearr_22105_22125[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22126 = state_22082;
state_22082 = G__22126;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_22082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_22082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_22106 = f__21108__auto__.call(null);
(statearr_22106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_22106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
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
var x__19405__auto__ = (((_ == null))?null:_);
var m__19406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,_);
} else {
var m__19406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,_);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,ch);
} else {
var m__19406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,ch);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m);
} else {
var m__19406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22352 = (function (ch,cs,meta22353){
this.ch = ch;
this.cs = cs;
this.meta22353 = meta22353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22354,meta22353__$1){
var self__ = this;
var _22354__$1 = this;
return (new cljs.core.async.t_cljs$core$async22352(self__.ch,self__.cs,meta22353__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22354){
var self__ = this;
var _22354__$1 = this;
return self__.meta22353;
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22353","meta22353",1587281312,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22352";

cljs.core.async.t_cljs$core$async22352.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async22352");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22352 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22352(ch__$1,cs__$1,meta22353){
return (new cljs.core.async.t_cljs$core$async22352(ch__$1,cs__$1,meta22353));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22352(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21107__auto___22577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___22577,cs,m,dchan,dctr,done){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___22577,cs,m,dchan,dctr,done){
return (function (state_22489){
var state_val_22490 = (state_22489[(1)]);
if((state_val_22490 === (7))){
var inst_22485 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22491_22578 = state_22489__$1;
(statearr_22491_22578[(2)] = inst_22485);

(statearr_22491_22578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (20))){
var inst_22388 = (state_22489[(7)]);
var inst_22400 = cljs.core.first.call(null,inst_22388);
var inst_22401 = cljs.core.nth.call(null,inst_22400,(0),null);
var inst_22402 = cljs.core.nth.call(null,inst_22400,(1),null);
var state_22489__$1 = (function (){var statearr_22492 = state_22489;
(statearr_22492[(8)] = inst_22401);

return statearr_22492;
})();
if(cljs.core.truth_(inst_22402)){
var statearr_22493_22579 = state_22489__$1;
(statearr_22493_22579[(1)] = (22));

} else {
var statearr_22494_22580 = state_22489__$1;
(statearr_22494_22580[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (27))){
var inst_22357 = (state_22489[(9)]);
var inst_22430 = (state_22489[(10)]);
var inst_22437 = (state_22489[(11)]);
var inst_22432 = (state_22489[(12)]);
var inst_22437__$1 = cljs.core._nth.call(null,inst_22430,inst_22432);
var inst_22438 = cljs.core.async.put_BANG_.call(null,inst_22437__$1,inst_22357,done);
var state_22489__$1 = (function (){var statearr_22495 = state_22489;
(statearr_22495[(11)] = inst_22437__$1);

return statearr_22495;
})();
if(cljs.core.truth_(inst_22438)){
var statearr_22496_22581 = state_22489__$1;
(statearr_22496_22581[(1)] = (30));

} else {
var statearr_22497_22582 = state_22489__$1;
(statearr_22497_22582[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (1))){
var state_22489__$1 = state_22489;
var statearr_22498_22583 = state_22489__$1;
(statearr_22498_22583[(2)] = null);

(statearr_22498_22583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (24))){
var inst_22388 = (state_22489[(7)]);
var inst_22407 = (state_22489[(2)]);
var inst_22408 = cljs.core.next.call(null,inst_22388);
var inst_22366 = inst_22408;
var inst_22367 = null;
var inst_22368 = (0);
var inst_22369 = (0);
var state_22489__$1 = (function (){var statearr_22499 = state_22489;
(statearr_22499[(13)] = inst_22368);

(statearr_22499[(14)] = inst_22367);

(statearr_22499[(15)] = inst_22407);

(statearr_22499[(16)] = inst_22366);

(statearr_22499[(17)] = inst_22369);

return statearr_22499;
})();
var statearr_22500_22584 = state_22489__$1;
(statearr_22500_22584[(2)] = null);

(statearr_22500_22584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (39))){
var state_22489__$1 = state_22489;
var statearr_22504_22585 = state_22489__$1;
(statearr_22504_22585[(2)] = null);

(statearr_22504_22585[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (4))){
var inst_22357 = (state_22489[(9)]);
var inst_22357__$1 = (state_22489[(2)]);
var inst_22358 = (inst_22357__$1 == null);
var state_22489__$1 = (function (){var statearr_22505 = state_22489;
(statearr_22505[(9)] = inst_22357__$1);

return statearr_22505;
})();
if(cljs.core.truth_(inst_22358)){
var statearr_22506_22586 = state_22489__$1;
(statearr_22506_22586[(1)] = (5));

} else {
var statearr_22507_22587 = state_22489__$1;
(statearr_22507_22587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (15))){
var inst_22368 = (state_22489[(13)]);
var inst_22367 = (state_22489[(14)]);
var inst_22366 = (state_22489[(16)]);
var inst_22369 = (state_22489[(17)]);
var inst_22384 = (state_22489[(2)]);
var inst_22385 = (inst_22369 + (1));
var tmp22501 = inst_22368;
var tmp22502 = inst_22367;
var tmp22503 = inst_22366;
var inst_22366__$1 = tmp22503;
var inst_22367__$1 = tmp22502;
var inst_22368__$1 = tmp22501;
var inst_22369__$1 = inst_22385;
var state_22489__$1 = (function (){var statearr_22508 = state_22489;
(statearr_22508[(13)] = inst_22368__$1);

(statearr_22508[(14)] = inst_22367__$1);

(statearr_22508[(18)] = inst_22384);

(statearr_22508[(16)] = inst_22366__$1);

(statearr_22508[(17)] = inst_22369__$1);

return statearr_22508;
})();
var statearr_22509_22588 = state_22489__$1;
(statearr_22509_22588[(2)] = null);

(statearr_22509_22588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (21))){
var inst_22411 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22513_22589 = state_22489__$1;
(statearr_22513_22589[(2)] = inst_22411);

(statearr_22513_22589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (31))){
var inst_22437 = (state_22489[(11)]);
var inst_22441 = done.call(null,null);
var inst_22442 = cljs.core.async.untap_STAR_.call(null,m,inst_22437);
var state_22489__$1 = (function (){var statearr_22514 = state_22489;
(statearr_22514[(19)] = inst_22441);

return statearr_22514;
})();
var statearr_22515_22590 = state_22489__$1;
(statearr_22515_22590[(2)] = inst_22442);

(statearr_22515_22590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (32))){
var inst_22430 = (state_22489[(10)]);
var inst_22429 = (state_22489[(20)]);
var inst_22431 = (state_22489[(21)]);
var inst_22432 = (state_22489[(12)]);
var inst_22444 = (state_22489[(2)]);
var inst_22445 = (inst_22432 + (1));
var tmp22510 = inst_22430;
var tmp22511 = inst_22429;
var tmp22512 = inst_22431;
var inst_22429__$1 = tmp22511;
var inst_22430__$1 = tmp22510;
var inst_22431__$1 = tmp22512;
var inst_22432__$1 = inst_22445;
var state_22489__$1 = (function (){var statearr_22516 = state_22489;
(statearr_22516[(22)] = inst_22444);

(statearr_22516[(10)] = inst_22430__$1);

(statearr_22516[(20)] = inst_22429__$1);

(statearr_22516[(21)] = inst_22431__$1);

(statearr_22516[(12)] = inst_22432__$1);

return statearr_22516;
})();
var statearr_22517_22591 = state_22489__$1;
(statearr_22517_22591[(2)] = null);

(statearr_22517_22591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (40))){
var inst_22457 = (state_22489[(23)]);
var inst_22461 = done.call(null,null);
var inst_22462 = cljs.core.async.untap_STAR_.call(null,m,inst_22457);
var state_22489__$1 = (function (){var statearr_22518 = state_22489;
(statearr_22518[(24)] = inst_22461);

return statearr_22518;
})();
var statearr_22519_22592 = state_22489__$1;
(statearr_22519_22592[(2)] = inst_22462);

(statearr_22519_22592[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (33))){
var inst_22448 = (state_22489[(25)]);
var inst_22450 = cljs.core.chunked_seq_QMARK_.call(null,inst_22448);
var state_22489__$1 = state_22489;
if(inst_22450){
var statearr_22520_22593 = state_22489__$1;
(statearr_22520_22593[(1)] = (36));

} else {
var statearr_22521_22594 = state_22489__$1;
(statearr_22521_22594[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (13))){
var inst_22378 = (state_22489[(26)]);
var inst_22381 = cljs.core.async.close_BANG_.call(null,inst_22378);
var state_22489__$1 = state_22489;
var statearr_22522_22595 = state_22489__$1;
(statearr_22522_22595[(2)] = inst_22381);

(statearr_22522_22595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (22))){
var inst_22401 = (state_22489[(8)]);
var inst_22404 = cljs.core.async.close_BANG_.call(null,inst_22401);
var state_22489__$1 = state_22489;
var statearr_22523_22596 = state_22489__$1;
(statearr_22523_22596[(2)] = inst_22404);

(statearr_22523_22596[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (36))){
var inst_22448 = (state_22489[(25)]);
var inst_22452 = cljs.core.chunk_first.call(null,inst_22448);
var inst_22453 = cljs.core.chunk_rest.call(null,inst_22448);
var inst_22454 = cljs.core.count.call(null,inst_22452);
var inst_22429 = inst_22453;
var inst_22430 = inst_22452;
var inst_22431 = inst_22454;
var inst_22432 = (0);
var state_22489__$1 = (function (){var statearr_22524 = state_22489;
(statearr_22524[(10)] = inst_22430);

(statearr_22524[(20)] = inst_22429);

(statearr_22524[(21)] = inst_22431);

(statearr_22524[(12)] = inst_22432);

return statearr_22524;
})();
var statearr_22525_22597 = state_22489__$1;
(statearr_22525_22597[(2)] = null);

(statearr_22525_22597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (41))){
var inst_22448 = (state_22489[(25)]);
var inst_22464 = (state_22489[(2)]);
var inst_22465 = cljs.core.next.call(null,inst_22448);
var inst_22429 = inst_22465;
var inst_22430 = null;
var inst_22431 = (0);
var inst_22432 = (0);
var state_22489__$1 = (function (){var statearr_22526 = state_22489;
(statearr_22526[(10)] = inst_22430);

(statearr_22526[(20)] = inst_22429);

(statearr_22526[(21)] = inst_22431);

(statearr_22526[(27)] = inst_22464);

(statearr_22526[(12)] = inst_22432);

return statearr_22526;
})();
var statearr_22527_22598 = state_22489__$1;
(statearr_22527_22598[(2)] = null);

(statearr_22527_22598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (43))){
var state_22489__$1 = state_22489;
var statearr_22528_22599 = state_22489__$1;
(statearr_22528_22599[(2)] = null);

(statearr_22528_22599[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (29))){
var inst_22473 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22529_22600 = state_22489__$1;
(statearr_22529_22600[(2)] = inst_22473);

(statearr_22529_22600[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (44))){
var inst_22482 = (state_22489[(2)]);
var state_22489__$1 = (function (){var statearr_22530 = state_22489;
(statearr_22530[(28)] = inst_22482);

return statearr_22530;
})();
var statearr_22531_22601 = state_22489__$1;
(statearr_22531_22601[(2)] = null);

(statearr_22531_22601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (6))){
var inst_22421 = (state_22489[(29)]);
var inst_22420 = cljs.core.deref.call(null,cs);
var inst_22421__$1 = cljs.core.keys.call(null,inst_22420);
var inst_22422 = cljs.core.count.call(null,inst_22421__$1);
var inst_22423 = cljs.core.reset_BANG_.call(null,dctr,inst_22422);
var inst_22428 = cljs.core.seq.call(null,inst_22421__$1);
var inst_22429 = inst_22428;
var inst_22430 = null;
var inst_22431 = (0);
var inst_22432 = (0);
var state_22489__$1 = (function (){var statearr_22532 = state_22489;
(statearr_22532[(30)] = inst_22423);

(statearr_22532[(29)] = inst_22421__$1);

(statearr_22532[(10)] = inst_22430);

(statearr_22532[(20)] = inst_22429);

(statearr_22532[(21)] = inst_22431);

(statearr_22532[(12)] = inst_22432);

return statearr_22532;
})();
var statearr_22533_22602 = state_22489__$1;
(statearr_22533_22602[(2)] = null);

(statearr_22533_22602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (28))){
var inst_22448 = (state_22489[(25)]);
var inst_22429 = (state_22489[(20)]);
var inst_22448__$1 = cljs.core.seq.call(null,inst_22429);
var state_22489__$1 = (function (){var statearr_22534 = state_22489;
(statearr_22534[(25)] = inst_22448__$1);

return statearr_22534;
})();
if(inst_22448__$1){
var statearr_22535_22603 = state_22489__$1;
(statearr_22535_22603[(1)] = (33));

} else {
var statearr_22536_22604 = state_22489__$1;
(statearr_22536_22604[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (25))){
var inst_22431 = (state_22489[(21)]);
var inst_22432 = (state_22489[(12)]);
var inst_22434 = (inst_22432 < inst_22431);
var inst_22435 = inst_22434;
var state_22489__$1 = state_22489;
if(cljs.core.truth_(inst_22435)){
var statearr_22537_22605 = state_22489__$1;
(statearr_22537_22605[(1)] = (27));

} else {
var statearr_22538_22606 = state_22489__$1;
(statearr_22538_22606[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (34))){
var state_22489__$1 = state_22489;
var statearr_22539_22607 = state_22489__$1;
(statearr_22539_22607[(2)] = null);

(statearr_22539_22607[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (17))){
var state_22489__$1 = state_22489;
var statearr_22540_22608 = state_22489__$1;
(statearr_22540_22608[(2)] = null);

(statearr_22540_22608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (3))){
var inst_22487 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22489__$1,inst_22487);
} else {
if((state_val_22490 === (12))){
var inst_22416 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22541_22609 = state_22489__$1;
(statearr_22541_22609[(2)] = inst_22416);

(statearr_22541_22609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (2))){
var state_22489__$1 = state_22489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22489__$1,(4),ch);
} else {
if((state_val_22490 === (23))){
var state_22489__$1 = state_22489;
var statearr_22542_22610 = state_22489__$1;
(statearr_22542_22610[(2)] = null);

(statearr_22542_22610[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (35))){
var inst_22471 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22543_22611 = state_22489__$1;
(statearr_22543_22611[(2)] = inst_22471);

(statearr_22543_22611[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (19))){
var inst_22388 = (state_22489[(7)]);
var inst_22392 = cljs.core.chunk_first.call(null,inst_22388);
var inst_22393 = cljs.core.chunk_rest.call(null,inst_22388);
var inst_22394 = cljs.core.count.call(null,inst_22392);
var inst_22366 = inst_22393;
var inst_22367 = inst_22392;
var inst_22368 = inst_22394;
var inst_22369 = (0);
var state_22489__$1 = (function (){var statearr_22544 = state_22489;
(statearr_22544[(13)] = inst_22368);

(statearr_22544[(14)] = inst_22367);

(statearr_22544[(16)] = inst_22366);

(statearr_22544[(17)] = inst_22369);

return statearr_22544;
})();
var statearr_22545_22612 = state_22489__$1;
(statearr_22545_22612[(2)] = null);

(statearr_22545_22612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (11))){
var inst_22388 = (state_22489[(7)]);
var inst_22366 = (state_22489[(16)]);
var inst_22388__$1 = cljs.core.seq.call(null,inst_22366);
var state_22489__$1 = (function (){var statearr_22546 = state_22489;
(statearr_22546[(7)] = inst_22388__$1);

return statearr_22546;
})();
if(inst_22388__$1){
var statearr_22547_22613 = state_22489__$1;
(statearr_22547_22613[(1)] = (16));

} else {
var statearr_22548_22614 = state_22489__$1;
(statearr_22548_22614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (9))){
var inst_22418 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22549_22615 = state_22489__$1;
(statearr_22549_22615[(2)] = inst_22418);

(statearr_22549_22615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (5))){
var inst_22364 = cljs.core.deref.call(null,cs);
var inst_22365 = cljs.core.seq.call(null,inst_22364);
var inst_22366 = inst_22365;
var inst_22367 = null;
var inst_22368 = (0);
var inst_22369 = (0);
var state_22489__$1 = (function (){var statearr_22550 = state_22489;
(statearr_22550[(13)] = inst_22368);

(statearr_22550[(14)] = inst_22367);

(statearr_22550[(16)] = inst_22366);

(statearr_22550[(17)] = inst_22369);

return statearr_22550;
})();
var statearr_22551_22616 = state_22489__$1;
(statearr_22551_22616[(2)] = null);

(statearr_22551_22616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (14))){
var state_22489__$1 = state_22489;
var statearr_22552_22617 = state_22489__$1;
(statearr_22552_22617[(2)] = null);

(statearr_22552_22617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (45))){
var inst_22479 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22553_22618 = state_22489__$1;
(statearr_22553_22618[(2)] = inst_22479);

(statearr_22553_22618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (26))){
var inst_22421 = (state_22489[(29)]);
var inst_22475 = (state_22489[(2)]);
var inst_22476 = cljs.core.seq.call(null,inst_22421);
var state_22489__$1 = (function (){var statearr_22554 = state_22489;
(statearr_22554[(31)] = inst_22475);

return statearr_22554;
})();
if(inst_22476){
var statearr_22555_22619 = state_22489__$1;
(statearr_22555_22619[(1)] = (42));

} else {
var statearr_22556_22620 = state_22489__$1;
(statearr_22556_22620[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (16))){
var inst_22388 = (state_22489[(7)]);
var inst_22390 = cljs.core.chunked_seq_QMARK_.call(null,inst_22388);
var state_22489__$1 = state_22489;
if(inst_22390){
var statearr_22557_22621 = state_22489__$1;
(statearr_22557_22621[(1)] = (19));

} else {
var statearr_22558_22622 = state_22489__$1;
(statearr_22558_22622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (38))){
var inst_22468 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22559_22623 = state_22489__$1;
(statearr_22559_22623[(2)] = inst_22468);

(statearr_22559_22623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (30))){
var state_22489__$1 = state_22489;
var statearr_22560_22624 = state_22489__$1;
(statearr_22560_22624[(2)] = null);

(statearr_22560_22624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (10))){
var inst_22367 = (state_22489[(14)]);
var inst_22369 = (state_22489[(17)]);
var inst_22377 = cljs.core._nth.call(null,inst_22367,inst_22369);
var inst_22378 = cljs.core.nth.call(null,inst_22377,(0),null);
var inst_22379 = cljs.core.nth.call(null,inst_22377,(1),null);
var state_22489__$1 = (function (){var statearr_22561 = state_22489;
(statearr_22561[(26)] = inst_22378);

return statearr_22561;
})();
if(cljs.core.truth_(inst_22379)){
var statearr_22562_22625 = state_22489__$1;
(statearr_22562_22625[(1)] = (13));

} else {
var statearr_22563_22626 = state_22489__$1;
(statearr_22563_22626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (18))){
var inst_22414 = (state_22489[(2)]);
var state_22489__$1 = state_22489;
var statearr_22564_22627 = state_22489__$1;
(statearr_22564_22627[(2)] = inst_22414);

(statearr_22564_22627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (42))){
var state_22489__$1 = state_22489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22489__$1,(45),dchan);
} else {
if((state_val_22490 === (37))){
var inst_22448 = (state_22489[(25)]);
var inst_22357 = (state_22489[(9)]);
var inst_22457 = (state_22489[(23)]);
var inst_22457__$1 = cljs.core.first.call(null,inst_22448);
var inst_22458 = cljs.core.async.put_BANG_.call(null,inst_22457__$1,inst_22357,done);
var state_22489__$1 = (function (){var statearr_22565 = state_22489;
(statearr_22565[(23)] = inst_22457__$1);

return statearr_22565;
})();
if(cljs.core.truth_(inst_22458)){
var statearr_22566_22628 = state_22489__$1;
(statearr_22566_22628[(1)] = (39));

} else {
var statearr_22567_22629 = state_22489__$1;
(statearr_22567_22629[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22490 === (8))){
var inst_22368 = (state_22489[(13)]);
var inst_22369 = (state_22489[(17)]);
var inst_22371 = (inst_22369 < inst_22368);
var inst_22372 = inst_22371;
var state_22489__$1 = state_22489;
if(cljs.core.truth_(inst_22372)){
var statearr_22568_22630 = state_22489__$1;
(statearr_22568_22630[(1)] = (10));

} else {
var statearr_22569_22631 = state_22489__$1;
(statearr_22569_22631[(1)] = (11));

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
});})(c__21107__auto___22577,cs,m,dchan,dctr,done))
;
return ((function (switch__21092__auto__,c__21107__auto___22577,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21093__auto__ = null;
var cljs$core$async$mult_$_state_machine__21093__auto____0 = (function (){
var statearr_22573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22573[(0)] = cljs$core$async$mult_$_state_machine__21093__auto__);

(statearr_22573[(1)] = (1));

return statearr_22573;
});
var cljs$core$async$mult_$_state_machine__21093__auto____1 = (function (state_22489){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_22489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e22574){if((e22574 instanceof Object)){
var ex__21096__auto__ = e22574;
var statearr_22575_22632 = state_22489;
(statearr_22575_22632[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22633 = state_22489;
state_22489 = G__22633;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21093__auto__ = function(state_22489){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21093__auto____1.call(this,state_22489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21093__auto____0;
cljs$core$async$mult_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21093__auto____1;
return cljs$core$async$mult_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___22577,cs,m,dchan,dctr,done))
})();
var state__21109__auto__ = (function (){var statearr_22576 = f__21108__auto__.call(null);
(statearr_22576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___22577);

return statearr_22576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___22577,cs,m,dchan,dctr,done))
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
var args22634 = [];
var len__19850__auto___22637 = arguments.length;
var i__19851__auto___22638 = (0);
while(true){
if((i__19851__auto___22638 < len__19850__auto___22637)){
args22634.push((arguments[i__19851__auto___22638]));

var G__22639 = (i__19851__auto___22638 + (1));
i__19851__auto___22638 = G__22639;
continue;
} else {
}
break;
}

var G__22636 = args22634.length;
switch (G__22636) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22634.length)].join('')));

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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,ch);
} else {
var m__19406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,ch);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,ch);
} else {
var m__19406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,ch);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m);
} else {
var m__19406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,state_map);
} else {
var m__19406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,state_map);
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
var x__19405__auto__ = (((m == null))?null:m);
var m__19406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,m,mode);
} else {
var m__19406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19857__auto__ = [];
var len__19850__auto___22651 = arguments.length;
var i__19851__auto___22652 = (0);
while(true){
if((i__19851__auto___22652 < len__19850__auto___22651)){
args__19857__auto__.push((arguments[i__19851__auto___22652]));

var G__22653 = (i__19851__auto___22652 + (1));
i__19851__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((3) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19858__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22645){
var map__22646 = p__22645;
var map__22646__$1 = ((((!((map__22646 == null)))?((((map__22646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22646):map__22646);
var opts = map__22646__$1;
var statearr_22648_22654 = state;
(statearr_22648_22654[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22646,map__22646__$1,opts){
return (function (val){
var statearr_22649_22655 = state;
(statearr_22649_22655[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22646,map__22646__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22650_22656 = state;
(statearr_22650_22656[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22641){
var G__22642 = cljs.core.first.call(null,seq22641);
var seq22641__$1 = cljs.core.next.call(null,seq22641);
var G__22643 = cljs.core.first.call(null,seq22641__$1);
var seq22641__$2 = cljs.core.next.call(null,seq22641__$1);
var G__22644 = cljs.core.first.call(null,seq22641__$2);
var seq22641__$3 = cljs.core.next.call(null,seq22641__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22642,G__22643,G__22644,seq22641__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22824 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22825){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22825 = meta22825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22826,meta22825__$1){
var self__ = this;
var _22826__$1 = this;
return (new cljs.core.async.t_cljs$core$async22824(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22826){
var self__ = this;
var _22826__$1 = this;
return self__.meta22825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22824.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22825","meta22825",950995877,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22824";

cljs.core.async.t_cljs$core$async22824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async22824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22824(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22825){
return (new cljs.core.async.t_cljs$core$async22824(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22824(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21107__auto___22991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22928){
var state_val_22929 = (state_22928[(1)]);
if((state_val_22929 === (7))){
var inst_22843 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
var statearr_22930_22992 = state_22928__$1;
(statearr_22930_22992[(2)] = inst_22843);

(statearr_22930_22992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (20))){
var inst_22855 = (state_22928[(7)]);
var state_22928__$1 = state_22928;
var statearr_22931_22993 = state_22928__$1;
(statearr_22931_22993[(2)] = inst_22855);

(statearr_22931_22993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (27))){
var state_22928__$1 = state_22928;
var statearr_22932_22994 = state_22928__$1;
(statearr_22932_22994[(2)] = null);

(statearr_22932_22994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (1))){
var inst_22830 = (state_22928[(8)]);
var inst_22830__$1 = calc_state.call(null);
var inst_22832 = (inst_22830__$1 == null);
var inst_22833 = cljs.core.not.call(null,inst_22832);
var state_22928__$1 = (function (){var statearr_22933 = state_22928;
(statearr_22933[(8)] = inst_22830__$1);

return statearr_22933;
})();
if(inst_22833){
var statearr_22934_22995 = state_22928__$1;
(statearr_22934_22995[(1)] = (2));

} else {
var statearr_22935_22996 = state_22928__$1;
(statearr_22935_22996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (24))){
var inst_22902 = (state_22928[(9)]);
var inst_22879 = (state_22928[(10)]);
var inst_22888 = (state_22928[(11)]);
var inst_22902__$1 = inst_22879.call(null,inst_22888);
var state_22928__$1 = (function (){var statearr_22936 = state_22928;
(statearr_22936[(9)] = inst_22902__$1);

return statearr_22936;
})();
if(cljs.core.truth_(inst_22902__$1)){
var statearr_22937_22997 = state_22928__$1;
(statearr_22937_22997[(1)] = (29));

} else {
var statearr_22938_22998 = state_22928__$1;
(statearr_22938_22998[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (4))){
var inst_22846 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22846)){
var statearr_22939_22999 = state_22928__$1;
(statearr_22939_22999[(1)] = (8));

} else {
var statearr_22940_23000 = state_22928__$1;
(statearr_22940_23000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (15))){
var inst_22873 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22873)){
var statearr_22941_23001 = state_22928__$1;
(statearr_22941_23001[(1)] = (19));

} else {
var statearr_22942_23002 = state_22928__$1;
(statearr_22942_23002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (21))){
var inst_22878 = (state_22928[(12)]);
var inst_22878__$1 = (state_22928[(2)]);
var inst_22879 = cljs.core.get.call(null,inst_22878__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22880 = cljs.core.get.call(null,inst_22878__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22881 = cljs.core.get.call(null,inst_22878__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22928__$1 = (function (){var statearr_22943 = state_22928;
(statearr_22943[(12)] = inst_22878__$1);

(statearr_22943[(13)] = inst_22880);

(statearr_22943[(10)] = inst_22879);

return statearr_22943;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22928__$1,(22),inst_22881);
} else {
if((state_val_22929 === (31))){
var inst_22910 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22910)){
var statearr_22944_23003 = state_22928__$1;
(statearr_22944_23003[(1)] = (32));

} else {
var statearr_22945_23004 = state_22928__$1;
(statearr_22945_23004[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (32))){
var inst_22887 = (state_22928[(14)]);
var state_22928__$1 = state_22928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22928__$1,(35),out,inst_22887);
} else {
if((state_val_22929 === (33))){
var inst_22878 = (state_22928[(12)]);
var inst_22855 = inst_22878;
var state_22928__$1 = (function (){var statearr_22946 = state_22928;
(statearr_22946[(7)] = inst_22855);

return statearr_22946;
})();
var statearr_22947_23005 = state_22928__$1;
(statearr_22947_23005[(2)] = null);

(statearr_22947_23005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (13))){
var inst_22855 = (state_22928[(7)]);
var inst_22862 = inst_22855.cljs$lang$protocol_mask$partition0$;
var inst_22863 = (inst_22862 & (64));
var inst_22864 = inst_22855.cljs$core$ISeq$;
var inst_22865 = (cljs.core.PROTOCOL_SENTINEL === inst_22864);
var inst_22866 = (inst_22863) || (inst_22865);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22866)){
var statearr_22948_23006 = state_22928__$1;
(statearr_22948_23006[(1)] = (16));

} else {
var statearr_22949_23007 = state_22928__$1;
(statearr_22949_23007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (22))){
var inst_22887 = (state_22928[(14)]);
var inst_22888 = (state_22928[(11)]);
var inst_22886 = (state_22928[(2)]);
var inst_22887__$1 = cljs.core.nth.call(null,inst_22886,(0),null);
var inst_22888__$1 = cljs.core.nth.call(null,inst_22886,(1),null);
var inst_22889 = (inst_22887__$1 == null);
var inst_22890 = cljs.core._EQ_.call(null,inst_22888__$1,change);
var inst_22891 = (inst_22889) || (inst_22890);
var state_22928__$1 = (function (){var statearr_22950 = state_22928;
(statearr_22950[(14)] = inst_22887__$1);

(statearr_22950[(11)] = inst_22888__$1);

return statearr_22950;
})();
if(cljs.core.truth_(inst_22891)){
var statearr_22951_23008 = state_22928__$1;
(statearr_22951_23008[(1)] = (23));

} else {
var statearr_22952_23009 = state_22928__$1;
(statearr_22952_23009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (36))){
var inst_22878 = (state_22928[(12)]);
var inst_22855 = inst_22878;
var state_22928__$1 = (function (){var statearr_22953 = state_22928;
(statearr_22953[(7)] = inst_22855);

return statearr_22953;
})();
var statearr_22954_23010 = state_22928__$1;
(statearr_22954_23010[(2)] = null);

(statearr_22954_23010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (29))){
var inst_22902 = (state_22928[(9)]);
var state_22928__$1 = state_22928;
var statearr_22955_23011 = state_22928__$1;
(statearr_22955_23011[(2)] = inst_22902);

(statearr_22955_23011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (6))){
var state_22928__$1 = state_22928;
var statearr_22956_23012 = state_22928__$1;
(statearr_22956_23012[(2)] = false);

(statearr_22956_23012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (28))){
var inst_22898 = (state_22928[(2)]);
var inst_22899 = calc_state.call(null);
var inst_22855 = inst_22899;
var state_22928__$1 = (function (){var statearr_22957 = state_22928;
(statearr_22957[(15)] = inst_22898);

(statearr_22957[(7)] = inst_22855);

return statearr_22957;
})();
var statearr_22958_23013 = state_22928__$1;
(statearr_22958_23013[(2)] = null);

(statearr_22958_23013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (25))){
var inst_22924 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
var statearr_22959_23014 = state_22928__$1;
(statearr_22959_23014[(2)] = inst_22924);

(statearr_22959_23014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (34))){
var inst_22922 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
var statearr_22960_23015 = state_22928__$1;
(statearr_22960_23015[(2)] = inst_22922);

(statearr_22960_23015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (17))){
var state_22928__$1 = state_22928;
var statearr_22961_23016 = state_22928__$1;
(statearr_22961_23016[(2)] = false);

(statearr_22961_23016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (3))){
var state_22928__$1 = state_22928;
var statearr_22962_23017 = state_22928__$1;
(statearr_22962_23017[(2)] = false);

(statearr_22962_23017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (12))){
var inst_22926 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22928__$1,inst_22926);
} else {
if((state_val_22929 === (2))){
var inst_22830 = (state_22928[(8)]);
var inst_22835 = inst_22830.cljs$lang$protocol_mask$partition0$;
var inst_22836 = (inst_22835 & (64));
var inst_22837 = inst_22830.cljs$core$ISeq$;
var inst_22838 = (cljs.core.PROTOCOL_SENTINEL === inst_22837);
var inst_22839 = (inst_22836) || (inst_22838);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22839)){
var statearr_22963_23018 = state_22928__$1;
(statearr_22963_23018[(1)] = (5));

} else {
var statearr_22964_23019 = state_22928__$1;
(statearr_22964_23019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (23))){
var inst_22887 = (state_22928[(14)]);
var inst_22893 = (inst_22887 == null);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22893)){
var statearr_22965_23020 = state_22928__$1;
(statearr_22965_23020[(1)] = (26));

} else {
var statearr_22966_23021 = state_22928__$1;
(statearr_22966_23021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (35))){
var inst_22913 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
if(cljs.core.truth_(inst_22913)){
var statearr_22967_23022 = state_22928__$1;
(statearr_22967_23022[(1)] = (36));

} else {
var statearr_22968_23023 = state_22928__$1;
(statearr_22968_23023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (19))){
var inst_22855 = (state_22928[(7)]);
var inst_22875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22855);
var state_22928__$1 = state_22928;
var statearr_22969_23024 = state_22928__$1;
(statearr_22969_23024[(2)] = inst_22875);

(statearr_22969_23024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (11))){
var inst_22855 = (state_22928[(7)]);
var inst_22859 = (inst_22855 == null);
var inst_22860 = cljs.core.not.call(null,inst_22859);
var state_22928__$1 = state_22928;
if(inst_22860){
var statearr_22970_23025 = state_22928__$1;
(statearr_22970_23025[(1)] = (13));

} else {
var statearr_22971_23026 = state_22928__$1;
(statearr_22971_23026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (9))){
var inst_22830 = (state_22928[(8)]);
var state_22928__$1 = state_22928;
var statearr_22972_23027 = state_22928__$1;
(statearr_22972_23027[(2)] = inst_22830);

(statearr_22972_23027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (5))){
var state_22928__$1 = state_22928;
var statearr_22973_23028 = state_22928__$1;
(statearr_22973_23028[(2)] = true);

(statearr_22973_23028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (14))){
var state_22928__$1 = state_22928;
var statearr_22974_23029 = state_22928__$1;
(statearr_22974_23029[(2)] = false);

(statearr_22974_23029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (26))){
var inst_22888 = (state_22928[(11)]);
var inst_22895 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22888);
var state_22928__$1 = state_22928;
var statearr_22975_23030 = state_22928__$1;
(statearr_22975_23030[(2)] = inst_22895);

(statearr_22975_23030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (16))){
var state_22928__$1 = state_22928;
var statearr_22976_23031 = state_22928__$1;
(statearr_22976_23031[(2)] = true);

(statearr_22976_23031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (38))){
var inst_22918 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
var statearr_22977_23032 = state_22928__$1;
(statearr_22977_23032[(2)] = inst_22918);

(statearr_22977_23032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (30))){
var inst_22880 = (state_22928[(13)]);
var inst_22879 = (state_22928[(10)]);
var inst_22888 = (state_22928[(11)]);
var inst_22905 = cljs.core.empty_QMARK_.call(null,inst_22879);
var inst_22906 = inst_22880.call(null,inst_22888);
var inst_22907 = cljs.core.not.call(null,inst_22906);
var inst_22908 = (inst_22905) && (inst_22907);
var state_22928__$1 = state_22928;
var statearr_22978_23033 = state_22928__$1;
(statearr_22978_23033[(2)] = inst_22908);

(statearr_22978_23033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (10))){
var inst_22830 = (state_22928[(8)]);
var inst_22851 = (state_22928[(2)]);
var inst_22852 = cljs.core.get.call(null,inst_22851,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22853 = cljs.core.get.call(null,inst_22851,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22854 = cljs.core.get.call(null,inst_22851,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22855 = inst_22830;
var state_22928__$1 = (function (){var statearr_22979 = state_22928;
(statearr_22979[(16)] = inst_22853);

(statearr_22979[(17)] = inst_22852);

(statearr_22979[(7)] = inst_22855);

(statearr_22979[(18)] = inst_22854);

return statearr_22979;
})();
var statearr_22980_23034 = state_22928__$1;
(statearr_22980_23034[(2)] = null);

(statearr_22980_23034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (18))){
var inst_22870 = (state_22928[(2)]);
var state_22928__$1 = state_22928;
var statearr_22981_23035 = state_22928__$1;
(statearr_22981_23035[(2)] = inst_22870);

(statearr_22981_23035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (37))){
var state_22928__$1 = state_22928;
var statearr_22982_23036 = state_22928__$1;
(statearr_22982_23036[(2)] = null);

(statearr_22982_23036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22929 === (8))){
var inst_22830 = (state_22928[(8)]);
var inst_22848 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22830);
var state_22928__$1 = state_22928;
var statearr_22983_23037 = state_22928__$1;
(statearr_22983_23037[(2)] = inst_22848);

(statearr_22983_23037[(1)] = (10));


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
});})(c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21092__auto__,c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21093__auto__ = null;
var cljs$core$async$mix_$_state_machine__21093__auto____0 = (function (){
var statearr_22987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22987[(0)] = cljs$core$async$mix_$_state_machine__21093__auto__);

(statearr_22987[(1)] = (1));

return statearr_22987;
});
var cljs$core$async$mix_$_state_machine__21093__auto____1 = (function (state_22928){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_22928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e22988){if((e22988 instanceof Object)){
var ex__21096__auto__ = e22988;
var statearr_22989_23038 = state_22928;
(statearr_22989_23038[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23039 = state_22928;
state_22928 = G__23039;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21093__auto__ = function(state_22928){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21093__auto____1.call(this,state_22928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21093__auto____0;
cljs$core$async$mix_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21093__auto____1;
return cljs$core$async$mix_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21109__auto__ = (function (){var statearr_22990 = f__21108__auto__.call(null);
(statearr_22990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___22991);

return statearr_22990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___22991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19405__auto__ = (((p == null))?null:p);
var m__19406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19405__auto__ = (((p == null))?null:p);
var m__19406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,p,v,ch);
} else {
var m__19406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23040 = [];
var len__19850__auto___23043 = arguments.length;
var i__19851__auto___23044 = (0);
while(true){
if((i__19851__auto___23044 < len__19850__auto___23043)){
args23040.push((arguments[i__19851__auto___23044]));

var G__23045 = (i__19851__auto___23044 + (1));
i__19851__auto___23044 = G__23045;
continue;
} else {
}
break;
}

var G__23042 = args23040.length;
switch (G__23042) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23040.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19405__auto__ = (((p == null))?null:p);
var m__19406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,p);
} else {
var m__19406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,p);
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
var x__19405__auto__ = (((p == null))?null:p);
var m__19406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19405__auto__)]);
if(!((m__19406__auto__ == null))){
return m__19406__auto__.call(null,p,v);
} else {
var m__19406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19406__auto____$1 == null))){
return m__19406__auto____$1.call(null,p,v);
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
var args23048 = [];
var len__19850__auto___23173 = arguments.length;
var i__19851__auto___23174 = (0);
while(true){
if((i__19851__auto___23174 < len__19850__auto___23173)){
args23048.push((arguments[i__19851__auto___23174]));

var G__23175 = (i__19851__auto___23174 + (1));
i__19851__auto___23174 = G__23175;
continue;
} else {
}
break;
}

var G__23050 = args23048.length;
switch (G__23050) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23048.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18742__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18742__auto__,mults){
return (function (p1__23047_SHARP_){
if(cljs.core.truth_(p1__23047_SHARP_.call(null,topic))){
return p1__23047_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18742__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23051 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23052){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23052 = meta23052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23053,meta23052__$1){
var self__ = this;
var _23053__$1 = this;
return (new cljs.core.async.t_cljs$core$async23051(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23052__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23053){
var self__ = this;
var _23053__$1 = this;
return self__.meta23052;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23052","meta23052",-285683964,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23051";

cljs.core.async.t_cljs$core$async23051.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async23051");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23051 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23052){
return (new cljs.core.async.t_cljs$core$async23051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23052));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23051(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21107__auto___23177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23177,mults,ensure_mult,p){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23177,mults,ensure_mult,p){
return (function (state_23125){
var state_val_23126 = (state_23125[(1)]);
if((state_val_23126 === (7))){
var inst_23121 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23127_23178 = state_23125__$1;
(statearr_23127_23178[(2)] = inst_23121);

(statearr_23127_23178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (20))){
var state_23125__$1 = state_23125;
var statearr_23128_23179 = state_23125__$1;
(statearr_23128_23179[(2)] = null);

(statearr_23128_23179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (1))){
var state_23125__$1 = state_23125;
var statearr_23129_23180 = state_23125__$1;
(statearr_23129_23180[(2)] = null);

(statearr_23129_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (24))){
var inst_23104 = (state_23125[(7)]);
var inst_23113 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23104);
var state_23125__$1 = state_23125;
var statearr_23130_23181 = state_23125__$1;
(statearr_23130_23181[(2)] = inst_23113);

(statearr_23130_23181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (4))){
var inst_23056 = (state_23125[(8)]);
var inst_23056__$1 = (state_23125[(2)]);
var inst_23057 = (inst_23056__$1 == null);
var state_23125__$1 = (function (){var statearr_23131 = state_23125;
(statearr_23131[(8)] = inst_23056__$1);

return statearr_23131;
})();
if(cljs.core.truth_(inst_23057)){
var statearr_23132_23182 = state_23125__$1;
(statearr_23132_23182[(1)] = (5));

} else {
var statearr_23133_23183 = state_23125__$1;
(statearr_23133_23183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (15))){
var inst_23098 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23134_23184 = state_23125__$1;
(statearr_23134_23184[(2)] = inst_23098);

(statearr_23134_23184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (21))){
var inst_23118 = (state_23125[(2)]);
var state_23125__$1 = (function (){var statearr_23135 = state_23125;
(statearr_23135[(9)] = inst_23118);

return statearr_23135;
})();
var statearr_23136_23185 = state_23125__$1;
(statearr_23136_23185[(2)] = null);

(statearr_23136_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (13))){
var inst_23080 = (state_23125[(10)]);
var inst_23082 = cljs.core.chunked_seq_QMARK_.call(null,inst_23080);
var state_23125__$1 = state_23125;
if(inst_23082){
var statearr_23137_23186 = state_23125__$1;
(statearr_23137_23186[(1)] = (16));

} else {
var statearr_23138_23187 = state_23125__$1;
(statearr_23138_23187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (22))){
var inst_23110 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
if(cljs.core.truth_(inst_23110)){
var statearr_23139_23188 = state_23125__$1;
(statearr_23139_23188[(1)] = (23));

} else {
var statearr_23140_23189 = state_23125__$1;
(statearr_23140_23189[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (6))){
var inst_23104 = (state_23125[(7)]);
var inst_23056 = (state_23125[(8)]);
var inst_23106 = (state_23125[(11)]);
var inst_23104__$1 = topic_fn.call(null,inst_23056);
var inst_23105 = cljs.core.deref.call(null,mults);
var inst_23106__$1 = cljs.core.get.call(null,inst_23105,inst_23104__$1);
var state_23125__$1 = (function (){var statearr_23141 = state_23125;
(statearr_23141[(7)] = inst_23104__$1);

(statearr_23141[(11)] = inst_23106__$1);

return statearr_23141;
})();
if(cljs.core.truth_(inst_23106__$1)){
var statearr_23142_23190 = state_23125__$1;
(statearr_23142_23190[(1)] = (19));

} else {
var statearr_23143_23191 = state_23125__$1;
(statearr_23143_23191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (25))){
var inst_23115 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23144_23192 = state_23125__$1;
(statearr_23144_23192[(2)] = inst_23115);

(statearr_23144_23192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (17))){
var inst_23080 = (state_23125[(10)]);
var inst_23089 = cljs.core.first.call(null,inst_23080);
var inst_23090 = cljs.core.async.muxch_STAR_.call(null,inst_23089);
var inst_23091 = cljs.core.async.close_BANG_.call(null,inst_23090);
var inst_23092 = cljs.core.next.call(null,inst_23080);
var inst_23066 = inst_23092;
var inst_23067 = null;
var inst_23068 = (0);
var inst_23069 = (0);
var state_23125__$1 = (function (){var statearr_23145 = state_23125;
(statearr_23145[(12)] = inst_23069);

(statearr_23145[(13)] = inst_23066);

(statearr_23145[(14)] = inst_23068);

(statearr_23145[(15)] = inst_23091);

(statearr_23145[(16)] = inst_23067);

return statearr_23145;
})();
var statearr_23146_23193 = state_23125__$1;
(statearr_23146_23193[(2)] = null);

(statearr_23146_23193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (3))){
var inst_23123 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23125__$1,inst_23123);
} else {
if((state_val_23126 === (12))){
var inst_23100 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23147_23194 = state_23125__$1;
(statearr_23147_23194[(2)] = inst_23100);

(statearr_23147_23194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (2))){
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23125__$1,(4),ch);
} else {
if((state_val_23126 === (23))){
var state_23125__$1 = state_23125;
var statearr_23148_23195 = state_23125__$1;
(statearr_23148_23195[(2)] = null);

(statearr_23148_23195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (19))){
var inst_23056 = (state_23125[(8)]);
var inst_23106 = (state_23125[(11)]);
var inst_23108 = cljs.core.async.muxch_STAR_.call(null,inst_23106);
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23125__$1,(22),inst_23108,inst_23056);
} else {
if((state_val_23126 === (11))){
var inst_23066 = (state_23125[(13)]);
var inst_23080 = (state_23125[(10)]);
var inst_23080__$1 = cljs.core.seq.call(null,inst_23066);
var state_23125__$1 = (function (){var statearr_23149 = state_23125;
(statearr_23149[(10)] = inst_23080__$1);

return statearr_23149;
})();
if(inst_23080__$1){
var statearr_23150_23196 = state_23125__$1;
(statearr_23150_23196[(1)] = (13));

} else {
var statearr_23151_23197 = state_23125__$1;
(statearr_23151_23197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (9))){
var inst_23102 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23152_23198 = state_23125__$1;
(statearr_23152_23198[(2)] = inst_23102);

(statearr_23152_23198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (5))){
var inst_23063 = cljs.core.deref.call(null,mults);
var inst_23064 = cljs.core.vals.call(null,inst_23063);
var inst_23065 = cljs.core.seq.call(null,inst_23064);
var inst_23066 = inst_23065;
var inst_23067 = null;
var inst_23068 = (0);
var inst_23069 = (0);
var state_23125__$1 = (function (){var statearr_23153 = state_23125;
(statearr_23153[(12)] = inst_23069);

(statearr_23153[(13)] = inst_23066);

(statearr_23153[(14)] = inst_23068);

(statearr_23153[(16)] = inst_23067);

return statearr_23153;
})();
var statearr_23154_23199 = state_23125__$1;
(statearr_23154_23199[(2)] = null);

(statearr_23154_23199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (14))){
var state_23125__$1 = state_23125;
var statearr_23158_23200 = state_23125__$1;
(statearr_23158_23200[(2)] = null);

(statearr_23158_23200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (16))){
var inst_23080 = (state_23125[(10)]);
var inst_23084 = cljs.core.chunk_first.call(null,inst_23080);
var inst_23085 = cljs.core.chunk_rest.call(null,inst_23080);
var inst_23086 = cljs.core.count.call(null,inst_23084);
var inst_23066 = inst_23085;
var inst_23067 = inst_23084;
var inst_23068 = inst_23086;
var inst_23069 = (0);
var state_23125__$1 = (function (){var statearr_23159 = state_23125;
(statearr_23159[(12)] = inst_23069);

(statearr_23159[(13)] = inst_23066);

(statearr_23159[(14)] = inst_23068);

(statearr_23159[(16)] = inst_23067);

return statearr_23159;
})();
var statearr_23160_23201 = state_23125__$1;
(statearr_23160_23201[(2)] = null);

(statearr_23160_23201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (10))){
var inst_23069 = (state_23125[(12)]);
var inst_23066 = (state_23125[(13)]);
var inst_23068 = (state_23125[(14)]);
var inst_23067 = (state_23125[(16)]);
var inst_23074 = cljs.core._nth.call(null,inst_23067,inst_23069);
var inst_23075 = cljs.core.async.muxch_STAR_.call(null,inst_23074);
var inst_23076 = cljs.core.async.close_BANG_.call(null,inst_23075);
var inst_23077 = (inst_23069 + (1));
var tmp23155 = inst_23066;
var tmp23156 = inst_23068;
var tmp23157 = inst_23067;
var inst_23066__$1 = tmp23155;
var inst_23067__$1 = tmp23157;
var inst_23068__$1 = tmp23156;
var inst_23069__$1 = inst_23077;
var state_23125__$1 = (function (){var statearr_23161 = state_23125;
(statearr_23161[(12)] = inst_23069__$1);

(statearr_23161[(13)] = inst_23066__$1);

(statearr_23161[(14)] = inst_23068__$1);

(statearr_23161[(16)] = inst_23067__$1);

(statearr_23161[(17)] = inst_23076);

return statearr_23161;
})();
var statearr_23162_23202 = state_23125__$1;
(statearr_23162_23202[(2)] = null);

(statearr_23162_23202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (18))){
var inst_23095 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23163_23203 = state_23125__$1;
(statearr_23163_23203[(2)] = inst_23095);

(statearr_23163_23203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (8))){
var inst_23069 = (state_23125[(12)]);
var inst_23068 = (state_23125[(14)]);
var inst_23071 = (inst_23069 < inst_23068);
var inst_23072 = inst_23071;
var state_23125__$1 = state_23125;
if(cljs.core.truth_(inst_23072)){
var statearr_23164_23204 = state_23125__$1;
(statearr_23164_23204[(1)] = (10));

} else {
var statearr_23165_23205 = state_23125__$1;
(statearr_23165_23205[(1)] = (11));

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
});})(c__21107__auto___23177,mults,ensure_mult,p))
;
return ((function (switch__21092__auto__,c__21107__auto___23177,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23169[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23169[(1)] = (1));

return statearr_23169;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23125){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23170){if((e23170 instanceof Object)){
var ex__21096__auto__ = e23170;
var statearr_23171_23206 = state_23125;
(statearr_23171_23206[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23207 = state_23125;
state_23125 = G__23207;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23177,mults,ensure_mult,p))
})();
var state__21109__auto__ = (function (){var statearr_23172 = f__21108__auto__.call(null);
(statearr_23172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23177);

return statearr_23172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23177,mults,ensure_mult,p))
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
var args23208 = [];
var len__19850__auto___23211 = arguments.length;
var i__19851__auto___23212 = (0);
while(true){
if((i__19851__auto___23212 < len__19850__auto___23211)){
args23208.push((arguments[i__19851__auto___23212]));

var G__23213 = (i__19851__auto___23212 + (1));
i__19851__auto___23212 = G__23213;
continue;
} else {
}
break;
}

var G__23210 = args23208.length;
switch (G__23210) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23208.length)].join('')));

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
var args23215 = [];
var len__19850__auto___23218 = arguments.length;
var i__19851__auto___23219 = (0);
while(true){
if((i__19851__auto___23219 < len__19850__auto___23218)){
args23215.push((arguments[i__19851__auto___23219]));

var G__23220 = (i__19851__auto___23219 + (1));
i__19851__auto___23219 = G__23220;
continue;
} else {
}
break;
}

var G__23217 = args23215.length;
switch (G__23217) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23215.length)].join('')));

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
var args23222 = [];
var len__19850__auto___23293 = arguments.length;
var i__19851__auto___23294 = (0);
while(true){
if((i__19851__auto___23294 < len__19850__auto___23293)){
args23222.push((arguments[i__19851__auto___23294]));

var G__23295 = (i__19851__auto___23294 + (1));
i__19851__auto___23294 = G__23295;
continue;
} else {
}
break;
}

var G__23224 = args23222.length;
switch (G__23224) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23222.length)].join('')));

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
var c__21107__auto___23297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23263){
var state_val_23264 = (state_23263[(1)]);
if((state_val_23264 === (7))){
var state_23263__$1 = state_23263;
var statearr_23265_23298 = state_23263__$1;
(statearr_23265_23298[(2)] = null);

(statearr_23265_23298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (1))){
var state_23263__$1 = state_23263;
var statearr_23266_23299 = state_23263__$1;
(statearr_23266_23299[(2)] = null);

(statearr_23266_23299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (4))){
var inst_23227 = (state_23263[(7)]);
var inst_23229 = (inst_23227 < cnt);
var state_23263__$1 = state_23263;
if(cljs.core.truth_(inst_23229)){
var statearr_23267_23300 = state_23263__$1;
(statearr_23267_23300[(1)] = (6));

} else {
var statearr_23268_23301 = state_23263__$1;
(statearr_23268_23301[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (15))){
var inst_23259 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23269_23302 = state_23263__$1;
(statearr_23269_23302[(2)] = inst_23259);

(statearr_23269_23302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (13))){
var inst_23252 = cljs.core.async.close_BANG_.call(null,out);
var state_23263__$1 = state_23263;
var statearr_23270_23303 = state_23263__$1;
(statearr_23270_23303[(2)] = inst_23252);

(statearr_23270_23303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (6))){
var state_23263__$1 = state_23263;
var statearr_23271_23304 = state_23263__$1;
(statearr_23271_23304[(2)] = null);

(statearr_23271_23304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (3))){
var inst_23261 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23263__$1,inst_23261);
} else {
if((state_val_23264 === (12))){
var inst_23249 = (state_23263[(8)]);
var inst_23249__$1 = (state_23263[(2)]);
var inst_23250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23249__$1);
var state_23263__$1 = (function (){var statearr_23272 = state_23263;
(statearr_23272[(8)] = inst_23249__$1);

return statearr_23272;
})();
if(cljs.core.truth_(inst_23250)){
var statearr_23273_23305 = state_23263__$1;
(statearr_23273_23305[(1)] = (13));

} else {
var statearr_23274_23306 = state_23263__$1;
(statearr_23274_23306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (2))){
var inst_23226 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23227 = (0);
var state_23263__$1 = (function (){var statearr_23275 = state_23263;
(statearr_23275[(9)] = inst_23226);

(statearr_23275[(7)] = inst_23227);

return statearr_23275;
})();
var statearr_23276_23307 = state_23263__$1;
(statearr_23276_23307[(2)] = null);

(statearr_23276_23307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (11))){
var inst_23227 = (state_23263[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23263,(10),Object,null,(9));
var inst_23236 = chs__$1.call(null,inst_23227);
var inst_23237 = done.call(null,inst_23227);
var inst_23238 = cljs.core.async.take_BANG_.call(null,inst_23236,inst_23237);
var state_23263__$1 = state_23263;
var statearr_23277_23308 = state_23263__$1;
(statearr_23277_23308[(2)] = inst_23238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (9))){
var inst_23227 = (state_23263[(7)]);
var inst_23240 = (state_23263[(2)]);
var inst_23241 = (inst_23227 + (1));
var inst_23227__$1 = inst_23241;
var state_23263__$1 = (function (){var statearr_23278 = state_23263;
(statearr_23278[(7)] = inst_23227__$1);

(statearr_23278[(10)] = inst_23240);

return statearr_23278;
})();
var statearr_23279_23309 = state_23263__$1;
(statearr_23279_23309[(2)] = null);

(statearr_23279_23309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (5))){
var inst_23247 = (state_23263[(2)]);
var state_23263__$1 = (function (){var statearr_23280 = state_23263;
(statearr_23280[(11)] = inst_23247);

return statearr_23280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23263__$1,(12),dchan);
} else {
if((state_val_23264 === (14))){
var inst_23249 = (state_23263[(8)]);
var inst_23254 = cljs.core.apply.call(null,f,inst_23249);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23263__$1,(16),out,inst_23254);
} else {
if((state_val_23264 === (16))){
var inst_23256 = (state_23263[(2)]);
var state_23263__$1 = (function (){var statearr_23281 = state_23263;
(statearr_23281[(12)] = inst_23256);

return statearr_23281;
})();
var statearr_23282_23310 = state_23263__$1;
(statearr_23282_23310[(2)] = null);

(statearr_23282_23310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (10))){
var inst_23231 = (state_23263[(2)]);
var inst_23232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23263__$1 = (function (){var statearr_23283 = state_23263;
(statearr_23283[(13)] = inst_23231);

return statearr_23283;
})();
var statearr_23284_23311 = state_23263__$1;
(statearr_23284_23311[(2)] = inst_23232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (8))){
var inst_23245 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23285_23312 = state_23263__$1;
(statearr_23285_23312[(2)] = inst_23245);

(statearr_23285_23312[(1)] = (5));


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
});})(c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21092__auto__,c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23289[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23289[(1)] = (1));

return statearr_23289;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23263){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23290){if((e23290 instanceof Object)){
var ex__21096__auto__ = e23290;
var statearr_23291_23313 = state_23263;
(statearr_23291_23313[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23314 = state_23263;
state_23263 = G__23314;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21109__auto__ = (function (){var statearr_23292 = f__21108__auto__.call(null);
(statearr_23292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23297);

return statearr_23292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23297,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23316 = [];
var len__19850__auto___23374 = arguments.length;
var i__19851__auto___23375 = (0);
while(true){
if((i__19851__auto___23375 < len__19850__auto___23374)){
args23316.push((arguments[i__19851__auto___23375]));

var G__23376 = (i__19851__auto___23375 + (1));
i__19851__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var G__23318 = args23316.length;
switch (G__23318) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23316.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___23378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23378,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23378,out){
return (function (state_23350){
var state_val_23351 = (state_23350[(1)]);
if((state_val_23351 === (7))){
var inst_23330 = (state_23350[(7)]);
var inst_23329 = (state_23350[(8)]);
var inst_23329__$1 = (state_23350[(2)]);
var inst_23330__$1 = cljs.core.nth.call(null,inst_23329__$1,(0),null);
var inst_23331 = cljs.core.nth.call(null,inst_23329__$1,(1),null);
var inst_23332 = (inst_23330__$1 == null);
var state_23350__$1 = (function (){var statearr_23352 = state_23350;
(statearr_23352[(7)] = inst_23330__$1);

(statearr_23352[(8)] = inst_23329__$1);

(statearr_23352[(9)] = inst_23331);

return statearr_23352;
})();
if(cljs.core.truth_(inst_23332)){
var statearr_23353_23379 = state_23350__$1;
(statearr_23353_23379[(1)] = (8));

} else {
var statearr_23354_23380 = state_23350__$1;
(statearr_23354_23380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (1))){
var inst_23319 = cljs.core.vec.call(null,chs);
var inst_23320 = inst_23319;
var state_23350__$1 = (function (){var statearr_23355 = state_23350;
(statearr_23355[(10)] = inst_23320);

return statearr_23355;
})();
var statearr_23356_23381 = state_23350__$1;
(statearr_23356_23381[(2)] = null);

(statearr_23356_23381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (4))){
var inst_23320 = (state_23350[(10)]);
var state_23350__$1 = state_23350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23350__$1,(7),inst_23320);
} else {
if((state_val_23351 === (6))){
var inst_23346 = (state_23350[(2)]);
var state_23350__$1 = state_23350;
var statearr_23357_23382 = state_23350__$1;
(statearr_23357_23382[(2)] = inst_23346);

(statearr_23357_23382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (3))){
var inst_23348 = (state_23350[(2)]);
var state_23350__$1 = state_23350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23350__$1,inst_23348);
} else {
if((state_val_23351 === (2))){
var inst_23320 = (state_23350[(10)]);
var inst_23322 = cljs.core.count.call(null,inst_23320);
var inst_23323 = (inst_23322 > (0));
var state_23350__$1 = state_23350;
if(cljs.core.truth_(inst_23323)){
var statearr_23359_23383 = state_23350__$1;
(statearr_23359_23383[(1)] = (4));

} else {
var statearr_23360_23384 = state_23350__$1;
(statearr_23360_23384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (11))){
var inst_23320 = (state_23350[(10)]);
var inst_23339 = (state_23350[(2)]);
var tmp23358 = inst_23320;
var inst_23320__$1 = tmp23358;
var state_23350__$1 = (function (){var statearr_23361 = state_23350;
(statearr_23361[(11)] = inst_23339);

(statearr_23361[(10)] = inst_23320__$1);

return statearr_23361;
})();
var statearr_23362_23385 = state_23350__$1;
(statearr_23362_23385[(2)] = null);

(statearr_23362_23385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (9))){
var inst_23330 = (state_23350[(7)]);
var state_23350__$1 = state_23350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23350__$1,(11),out,inst_23330);
} else {
if((state_val_23351 === (5))){
var inst_23344 = cljs.core.async.close_BANG_.call(null,out);
var state_23350__$1 = state_23350;
var statearr_23363_23386 = state_23350__$1;
(statearr_23363_23386[(2)] = inst_23344);

(statearr_23363_23386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (10))){
var inst_23342 = (state_23350[(2)]);
var state_23350__$1 = state_23350;
var statearr_23364_23387 = state_23350__$1;
(statearr_23364_23387[(2)] = inst_23342);

(statearr_23364_23387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23351 === (8))){
var inst_23320 = (state_23350[(10)]);
var inst_23330 = (state_23350[(7)]);
var inst_23329 = (state_23350[(8)]);
var inst_23331 = (state_23350[(9)]);
var inst_23334 = (function (){var cs = inst_23320;
var vec__23325 = inst_23329;
var v = inst_23330;
var c = inst_23331;
return ((function (cs,vec__23325,v,c,inst_23320,inst_23330,inst_23329,inst_23331,state_val_23351,c__21107__auto___23378,out){
return (function (p1__23315_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23315_SHARP_);
});
;})(cs,vec__23325,v,c,inst_23320,inst_23330,inst_23329,inst_23331,state_val_23351,c__21107__auto___23378,out))
})();
var inst_23335 = cljs.core.filterv.call(null,inst_23334,inst_23320);
var inst_23320__$1 = inst_23335;
var state_23350__$1 = (function (){var statearr_23365 = state_23350;
(statearr_23365[(10)] = inst_23320__$1);

return statearr_23365;
})();
var statearr_23366_23388 = state_23350__$1;
(statearr_23366_23388[(2)] = null);

(statearr_23366_23388[(1)] = (2));


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
});})(c__21107__auto___23378,out))
;
return ((function (switch__21092__auto__,c__21107__auto___23378,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23370[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23370[(1)] = (1));

return statearr_23370;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23350){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23371){if((e23371 instanceof Object)){
var ex__21096__auto__ = e23371;
var statearr_23372_23389 = state_23350;
(statearr_23372_23389[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23390 = state_23350;
state_23350 = G__23390;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23378,out))
})();
var state__21109__auto__ = (function (){var statearr_23373 = f__21108__auto__.call(null);
(statearr_23373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23378);

return statearr_23373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23378,out))
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
var args23391 = [];
var len__19850__auto___23440 = arguments.length;
var i__19851__auto___23441 = (0);
while(true){
if((i__19851__auto___23441 < len__19850__auto___23440)){
args23391.push((arguments[i__19851__auto___23441]));

var G__23442 = (i__19851__auto___23441 + (1));
i__19851__auto___23441 = G__23442;
continue;
} else {
}
break;
}

var G__23393 = args23391.length;
switch (G__23393) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23391.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___23444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23444,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23444,out){
return (function (state_23417){
var state_val_23418 = (state_23417[(1)]);
if((state_val_23418 === (7))){
var inst_23399 = (state_23417[(7)]);
var inst_23399__$1 = (state_23417[(2)]);
var inst_23400 = (inst_23399__$1 == null);
var inst_23401 = cljs.core.not.call(null,inst_23400);
var state_23417__$1 = (function (){var statearr_23419 = state_23417;
(statearr_23419[(7)] = inst_23399__$1);

return statearr_23419;
})();
if(inst_23401){
var statearr_23420_23445 = state_23417__$1;
(statearr_23420_23445[(1)] = (8));

} else {
var statearr_23421_23446 = state_23417__$1;
(statearr_23421_23446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (1))){
var inst_23394 = (0);
var state_23417__$1 = (function (){var statearr_23422 = state_23417;
(statearr_23422[(8)] = inst_23394);

return statearr_23422;
})();
var statearr_23423_23447 = state_23417__$1;
(statearr_23423_23447[(2)] = null);

(statearr_23423_23447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (4))){
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23417__$1,(7),ch);
} else {
if((state_val_23418 === (6))){
var inst_23412 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23424_23448 = state_23417__$1;
(statearr_23424_23448[(2)] = inst_23412);

(statearr_23424_23448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (3))){
var inst_23414 = (state_23417[(2)]);
var inst_23415 = cljs.core.async.close_BANG_.call(null,out);
var state_23417__$1 = (function (){var statearr_23425 = state_23417;
(statearr_23425[(9)] = inst_23414);

return statearr_23425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23417__$1,inst_23415);
} else {
if((state_val_23418 === (2))){
var inst_23394 = (state_23417[(8)]);
var inst_23396 = (inst_23394 < n);
var state_23417__$1 = state_23417;
if(cljs.core.truth_(inst_23396)){
var statearr_23426_23449 = state_23417__$1;
(statearr_23426_23449[(1)] = (4));

} else {
var statearr_23427_23450 = state_23417__$1;
(statearr_23427_23450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (11))){
var inst_23394 = (state_23417[(8)]);
var inst_23404 = (state_23417[(2)]);
var inst_23405 = (inst_23394 + (1));
var inst_23394__$1 = inst_23405;
var state_23417__$1 = (function (){var statearr_23428 = state_23417;
(statearr_23428[(8)] = inst_23394__$1);

(statearr_23428[(10)] = inst_23404);

return statearr_23428;
})();
var statearr_23429_23451 = state_23417__$1;
(statearr_23429_23451[(2)] = null);

(statearr_23429_23451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (9))){
var state_23417__$1 = state_23417;
var statearr_23430_23452 = state_23417__$1;
(statearr_23430_23452[(2)] = null);

(statearr_23430_23452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (5))){
var state_23417__$1 = state_23417;
var statearr_23431_23453 = state_23417__$1;
(statearr_23431_23453[(2)] = null);

(statearr_23431_23453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (10))){
var inst_23409 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23432_23454 = state_23417__$1;
(statearr_23432_23454[(2)] = inst_23409);

(statearr_23432_23454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (8))){
var inst_23399 = (state_23417[(7)]);
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23417__$1,(11),out,inst_23399);
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
});})(c__21107__auto___23444,out))
;
return ((function (switch__21092__auto__,c__21107__auto___23444,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23436[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23436[(1)] = (1));

return statearr_23436;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23417){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23437){if((e23437 instanceof Object)){
var ex__21096__auto__ = e23437;
var statearr_23438_23455 = state_23417;
(statearr_23438_23455[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23456 = state_23417;
state_23417 = G__23456;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23444,out))
})();
var state__21109__auto__ = (function (){var statearr_23439 = f__21108__auto__.call(null);
(statearr_23439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23444);

return statearr_23439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23444,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23464 = (function (f,ch,meta23465){
this.f = f;
this.ch = ch;
this.meta23465 = meta23465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23466,meta23465__$1){
var self__ = this;
var _23466__$1 = this;
return (new cljs.core.async.t_cljs$core$async23464(self__.f,self__.ch,meta23465__$1));
});

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23466){
var self__ = this;
var _23466__$1 = this;
return self__.meta23465;
});

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23467 = (function (f,ch,meta23465,_,fn1,meta23468){
this.f = f;
this.ch = ch;
this.meta23465 = meta23465;
this._ = _;
this.fn1 = fn1;
this.meta23468 = meta23468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23469,meta23468__$1){
var self__ = this;
var _23469__$1 = this;
return (new cljs.core.async.t_cljs$core$async23467(self__.f,self__.ch,self__.meta23465,self__._,self__.fn1,meta23468__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23469){
var self__ = this;
var _23469__$1 = this;
return self__.meta23468;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23457_SHARP_){
return f1.call(null,(((p1__23457_SHARP_ == null))?null:self__.f.call(null,p1__23457_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23465","meta23465",1449816816,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23464","cljs.core.async/t_cljs$core$async23464",-1425477270,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23468","meta23468",-730830101,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23467";

cljs.core.async.t_cljs$core$async23467.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async23467");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23467 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23467(f__$1,ch__$1,meta23465__$1,___$2,fn1__$1,meta23468){
return (new cljs.core.async.t_cljs$core$async23467(f__$1,ch__$1,meta23465__$1,___$2,fn1__$1,meta23468));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23467(self__.f,self__.ch,self__.meta23465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18730__auto__ = ret;
if(cljs.core.truth_(and__18730__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18730__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23465","meta23465",1449816816,null)], null);
});

cljs.core.async.t_cljs$core$async23464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23464";

cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async23464");
});

cljs.core.async.__GT_t_cljs$core$async23464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23464(f__$1,ch__$1,meta23465){
return (new cljs.core.async.t_cljs$core$async23464(f__$1,ch__$1,meta23465));
});

}

return (new cljs.core.async.t_cljs$core$async23464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23473 = (function (f,ch,meta23474){
this.f = f;
this.ch = ch;
this.meta23474 = meta23474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23475,meta23474__$1){
var self__ = this;
var _23475__$1 = this;
return (new cljs.core.async.t_cljs$core$async23473(self__.f,self__.ch,meta23474__$1));
});

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23475){
var self__ = this;
var _23475__$1 = this;
return self__.meta23474;
});

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23474","meta23474",-1081969269,null)], null);
});

cljs.core.async.t_cljs$core$async23473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23473";

cljs.core.async.t_cljs$core$async23473.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async23473");
});

cljs.core.async.__GT_t_cljs$core$async23473 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23473(f__$1,ch__$1,meta23474){
return (new cljs.core.async.t_cljs$core$async23473(f__$1,ch__$1,meta23474));
});

}

return (new cljs.core.async.t_cljs$core$async23473(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23479 = (function (p,ch,meta23480){
this.p = p;
this.ch = ch;
this.meta23480 = meta23480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23481,meta23480__$1){
var self__ = this;
var _23481__$1 = this;
return (new cljs.core.async.t_cljs$core$async23479(self__.p,self__.ch,meta23480__$1));
});

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23481){
var self__ = this;
var _23481__$1 = this;
return self__.meta23480;
});

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23480","meta23480",57667266,null)], null);
});

cljs.core.async.t_cljs$core$async23479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23479";

cljs.core.async.t_cljs$core$async23479.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.core.async/t_cljs$core$async23479");
});

cljs.core.async.__GT_t_cljs$core$async23479 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23479(p__$1,ch__$1,meta23480){
return (new cljs.core.async.t_cljs$core$async23479(p__$1,ch__$1,meta23480));
});

}

return (new cljs.core.async.t_cljs$core$async23479(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23482 = [];
var len__19850__auto___23526 = arguments.length;
var i__19851__auto___23527 = (0);
while(true){
if((i__19851__auto___23527 < len__19850__auto___23526)){
args23482.push((arguments[i__19851__auto___23527]));

var G__23528 = (i__19851__auto___23527 + (1));
i__19851__auto___23527 = G__23528;
continue;
} else {
}
break;
}

var G__23484 = args23482.length;
switch (G__23484) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23482.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___23530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23530,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23530,out){
return (function (state_23505){
var state_val_23506 = (state_23505[(1)]);
if((state_val_23506 === (7))){
var inst_23501 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23507_23531 = state_23505__$1;
(statearr_23507_23531[(2)] = inst_23501);

(statearr_23507_23531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (1))){
var state_23505__$1 = state_23505;
var statearr_23508_23532 = state_23505__$1;
(statearr_23508_23532[(2)] = null);

(statearr_23508_23532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (4))){
var inst_23487 = (state_23505[(7)]);
var inst_23487__$1 = (state_23505[(2)]);
var inst_23488 = (inst_23487__$1 == null);
var state_23505__$1 = (function (){var statearr_23509 = state_23505;
(statearr_23509[(7)] = inst_23487__$1);

return statearr_23509;
})();
if(cljs.core.truth_(inst_23488)){
var statearr_23510_23533 = state_23505__$1;
(statearr_23510_23533[(1)] = (5));

} else {
var statearr_23511_23534 = state_23505__$1;
(statearr_23511_23534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (6))){
var inst_23487 = (state_23505[(7)]);
var inst_23492 = p.call(null,inst_23487);
var state_23505__$1 = state_23505;
if(cljs.core.truth_(inst_23492)){
var statearr_23512_23535 = state_23505__$1;
(statearr_23512_23535[(1)] = (8));

} else {
var statearr_23513_23536 = state_23505__$1;
(statearr_23513_23536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (3))){
var inst_23503 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23505__$1,inst_23503);
} else {
if((state_val_23506 === (2))){
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23505__$1,(4),ch);
} else {
if((state_val_23506 === (11))){
var inst_23495 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23514_23537 = state_23505__$1;
(statearr_23514_23537[(2)] = inst_23495);

(statearr_23514_23537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (9))){
var state_23505__$1 = state_23505;
var statearr_23515_23538 = state_23505__$1;
(statearr_23515_23538[(2)] = null);

(statearr_23515_23538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (5))){
var inst_23490 = cljs.core.async.close_BANG_.call(null,out);
var state_23505__$1 = state_23505;
var statearr_23516_23539 = state_23505__$1;
(statearr_23516_23539[(2)] = inst_23490);

(statearr_23516_23539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (10))){
var inst_23498 = (state_23505[(2)]);
var state_23505__$1 = (function (){var statearr_23517 = state_23505;
(statearr_23517[(8)] = inst_23498);

return statearr_23517;
})();
var statearr_23518_23540 = state_23505__$1;
(statearr_23518_23540[(2)] = null);

(statearr_23518_23540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (8))){
var inst_23487 = (state_23505[(7)]);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,(11),out,inst_23487);
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
});})(c__21107__auto___23530,out))
;
return ((function (switch__21092__auto__,c__21107__auto___23530,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23522 = [null,null,null,null,null,null,null,null,null];
(statearr_23522[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23522[(1)] = (1));

return statearr_23522;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23505){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23523){if((e23523 instanceof Object)){
var ex__21096__auto__ = e23523;
var statearr_23524_23541 = state_23505;
(statearr_23524_23541[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23542 = state_23505;
state_23505 = G__23542;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23530,out))
})();
var state__21109__auto__ = (function (){var statearr_23525 = f__21108__auto__.call(null);
(statearr_23525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23530);

return statearr_23525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23530,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23543 = [];
var len__19850__auto___23546 = arguments.length;
var i__19851__auto___23547 = (0);
while(true){
if((i__19851__auto___23547 < len__19850__auto___23546)){
args23543.push((arguments[i__19851__auto___23547]));

var G__23548 = (i__19851__auto___23547 + (1));
i__19851__auto___23547 = G__23548;
continue;
} else {
}
break;
}

var G__23545 = args23543.length;
switch (G__23545) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23543.length)].join('')));

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
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (7))){
var inst_23711 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23717_23758 = state_23715__$1;
(statearr_23717_23758[(2)] = inst_23711);

(statearr_23717_23758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (20))){
var inst_23681 = (state_23715[(7)]);
var inst_23692 = (state_23715[(2)]);
var inst_23693 = cljs.core.next.call(null,inst_23681);
var inst_23667 = inst_23693;
var inst_23668 = null;
var inst_23669 = (0);
var inst_23670 = (0);
var state_23715__$1 = (function (){var statearr_23718 = state_23715;
(statearr_23718[(8)] = inst_23669);

(statearr_23718[(9)] = inst_23670);

(statearr_23718[(10)] = inst_23668);

(statearr_23718[(11)] = inst_23692);

(statearr_23718[(12)] = inst_23667);

return statearr_23718;
})();
var statearr_23719_23759 = state_23715__$1;
(statearr_23719_23759[(2)] = null);

(statearr_23719_23759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (1))){
var state_23715__$1 = state_23715;
var statearr_23720_23760 = state_23715__$1;
(statearr_23720_23760[(2)] = null);

(statearr_23720_23760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (4))){
var inst_23656 = (state_23715[(13)]);
var inst_23656__$1 = (state_23715[(2)]);
var inst_23657 = (inst_23656__$1 == null);
var state_23715__$1 = (function (){var statearr_23721 = state_23715;
(statearr_23721[(13)] = inst_23656__$1);

return statearr_23721;
})();
if(cljs.core.truth_(inst_23657)){
var statearr_23722_23761 = state_23715__$1;
(statearr_23722_23761[(1)] = (5));

} else {
var statearr_23723_23762 = state_23715__$1;
(statearr_23723_23762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (15))){
var state_23715__$1 = state_23715;
var statearr_23727_23763 = state_23715__$1;
(statearr_23727_23763[(2)] = null);

(statearr_23727_23763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (21))){
var state_23715__$1 = state_23715;
var statearr_23728_23764 = state_23715__$1;
(statearr_23728_23764[(2)] = null);

(statearr_23728_23764[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (13))){
var inst_23669 = (state_23715[(8)]);
var inst_23670 = (state_23715[(9)]);
var inst_23668 = (state_23715[(10)]);
var inst_23667 = (state_23715[(12)]);
var inst_23677 = (state_23715[(2)]);
var inst_23678 = (inst_23670 + (1));
var tmp23724 = inst_23669;
var tmp23725 = inst_23668;
var tmp23726 = inst_23667;
var inst_23667__$1 = tmp23726;
var inst_23668__$1 = tmp23725;
var inst_23669__$1 = tmp23724;
var inst_23670__$1 = inst_23678;
var state_23715__$1 = (function (){var statearr_23729 = state_23715;
(statearr_23729[(8)] = inst_23669__$1);

(statearr_23729[(9)] = inst_23670__$1);

(statearr_23729[(10)] = inst_23668__$1);

(statearr_23729[(12)] = inst_23667__$1);

(statearr_23729[(14)] = inst_23677);

return statearr_23729;
})();
var statearr_23730_23765 = state_23715__$1;
(statearr_23730_23765[(2)] = null);

(statearr_23730_23765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (22))){
var state_23715__$1 = state_23715;
var statearr_23731_23766 = state_23715__$1;
(statearr_23731_23766[(2)] = null);

(statearr_23731_23766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (6))){
var inst_23656 = (state_23715[(13)]);
var inst_23665 = f.call(null,inst_23656);
var inst_23666 = cljs.core.seq.call(null,inst_23665);
var inst_23667 = inst_23666;
var inst_23668 = null;
var inst_23669 = (0);
var inst_23670 = (0);
var state_23715__$1 = (function (){var statearr_23732 = state_23715;
(statearr_23732[(8)] = inst_23669);

(statearr_23732[(9)] = inst_23670);

(statearr_23732[(10)] = inst_23668);

(statearr_23732[(12)] = inst_23667);

return statearr_23732;
})();
var statearr_23733_23767 = state_23715__$1;
(statearr_23733_23767[(2)] = null);

(statearr_23733_23767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (17))){
var inst_23681 = (state_23715[(7)]);
var inst_23685 = cljs.core.chunk_first.call(null,inst_23681);
var inst_23686 = cljs.core.chunk_rest.call(null,inst_23681);
var inst_23687 = cljs.core.count.call(null,inst_23685);
var inst_23667 = inst_23686;
var inst_23668 = inst_23685;
var inst_23669 = inst_23687;
var inst_23670 = (0);
var state_23715__$1 = (function (){var statearr_23734 = state_23715;
(statearr_23734[(8)] = inst_23669);

(statearr_23734[(9)] = inst_23670);

(statearr_23734[(10)] = inst_23668);

(statearr_23734[(12)] = inst_23667);

return statearr_23734;
})();
var statearr_23735_23768 = state_23715__$1;
(statearr_23735_23768[(2)] = null);

(statearr_23735_23768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (3))){
var inst_23713 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
if((state_val_23716 === (12))){
var inst_23701 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23736_23769 = state_23715__$1;
(statearr_23736_23769[(2)] = inst_23701);

(statearr_23736_23769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (2))){
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23715__$1,(4),in$);
} else {
if((state_val_23716 === (23))){
var inst_23709 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23737_23770 = state_23715__$1;
(statearr_23737_23770[(2)] = inst_23709);

(statearr_23737_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (19))){
var inst_23696 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23738_23771 = state_23715__$1;
(statearr_23738_23771[(2)] = inst_23696);

(statearr_23738_23771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (11))){
var inst_23681 = (state_23715[(7)]);
var inst_23667 = (state_23715[(12)]);
var inst_23681__$1 = cljs.core.seq.call(null,inst_23667);
var state_23715__$1 = (function (){var statearr_23739 = state_23715;
(statearr_23739[(7)] = inst_23681__$1);

return statearr_23739;
})();
if(inst_23681__$1){
var statearr_23740_23772 = state_23715__$1;
(statearr_23740_23772[(1)] = (14));

} else {
var statearr_23741_23773 = state_23715__$1;
(statearr_23741_23773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (9))){
var inst_23703 = (state_23715[(2)]);
var inst_23704 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23715__$1 = (function (){var statearr_23742 = state_23715;
(statearr_23742[(15)] = inst_23703);

return statearr_23742;
})();
if(cljs.core.truth_(inst_23704)){
var statearr_23743_23774 = state_23715__$1;
(statearr_23743_23774[(1)] = (21));

} else {
var statearr_23744_23775 = state_23715__$1;
(statearr_23744_23775[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (5))){
var inst_23659 = cljs.core.async.close_BANG_.call(null,out);
var state_23715__$1 = state_23715;
var statearr_23745_23776 = state_23715__$1;
(statearr_23745_23776[(2)] = inst_23659);

(statearr_23745_23776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (14))){
var inst_23681 = (state_23715[(7)]);
var inst_23683 = cljs.core.chunked_seq_QMARK_.call(null,inst_23681);
var state_23715__$1 = state_23715;
if(inst_23683){
var statearr_23746_23777 = state_23715__$1;
(statearr_23746_23777[(1)] = (17));

} else {
var statearr_23747_23778 = state_23715__$1;
(statearr_23747_23778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (16))){
var inst_23699 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23748_23779 = state_23715__$1;
(statearr_23748_23779[(2)] = inst_23699);

(statearr_23748_23779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (10))){
var inst_23670 = (state_23715[(9)]);
var inst_23668 = (state_23715[(10)]);
var inst_23675 = cljs.core._nth.call(null,inst_23668,inst_23670);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(13),out,inst_23675);
} else {
if((state_val_23716 === (18))){
var inst_23681 = (state_23715[(7)]);
var inst_23690 = cljs.core.first.call(null,inst_23681);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(20),out,inst_23690);
} else {
if((state_val_23716 === (8))){
var inst_23669 = (state_23715[(8)]);
var inst_23670 = (state_23715[(9)]);
var inst_23672 = (inst_23670 < inst_23669);
var inst_23673 = inst_23672;
var state_23715__$1 = state_23715;
if(cljs.core.truth_(inst_23673)){
var statearr_23749_23780 = state_23715__$1;
(statearr_23749_23780[(1)] = (10));

} else {
var statearr_23750_23781 = state_23715__$1;
(statearr_23750_23781[(1)] = (11));

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
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____0 = (function (){
var statearr_23754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__);

(statearr_23754[(1)] = (1));

return statearr_23754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____1 = (function (state_23715){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23755){if((e23755 instanceof Object)){
var ex__21096__auto__ = e23755;
var statearr_23756_23782 = state_23715;
(statearr_23756_23782[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23783 = state_23715;
state_23715 = G__23783;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21093__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_23757 = f__21108__auto__.call(null);
(statearr_23757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_23757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23784 = [];
var len__19850__auto___23787 = arguments.length;
var i__19851__auto___23788 = (0);
while(true){
if((i__19851__auto___23788 < len__19850__auto___23787)){
args23784.push((arguments[i__19851__auto___23788]));

var G__23789 = (i__19851__auto___23788 + (1));
i__19851__auto___23788 = G__23789;
continue;
} else {
}
break;
}

var G__23786 = args23784.length;
switch (G__23786) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23784.length)].join('')));

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
var args23791 = [];
var len__19850__auto___23794 = arguments.length;
var i__19851__auto___23795 = (0);
while(true){
if((i__19851__auto___23795 < len__19850__auto___23794)){
args23791.push((arguments[i__19851__auto___23795]));

var G__23796 = (i__19851__auto___23795 + (1));
i__19851__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var G__23793 = args23791.length;
switch (G__23793) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23791.length)].join('')));

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
var args23798 = [];
var len__19850__auto___23849 = arguments.length;
var i__19851__auto___23850 = (0);
while(true){
if((i__19851__auto___23850 < len__19850__auto___23849)){
args23798.push((arguments[i__19851__auto___23850]));

var G__23851 = (i__19851__auto___23850 + (1));
i__19851__auto___23850 = G__23851;
continue;
} else {
}
break;
}

var G__23800 = args23798.length;
switch (G__23800) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23798.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___23853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23853,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23853,out){
return (function (state_23824){
var state_val_23825 = (state_23824[(1)]);
if((state_val_23825 === (7))){
var inst_23819 = (state_23824[(2)]);
var state_23824__$1 = state_23824;
var statearr_23826_23854 = state_23824__$1;
(statearr_23826_23854[(2)] = inst_23819);

(statearr_23826_23854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (1))){
var inst_23801 = null;
var state_23824__$1 = (function (){var statearr_23827 = state_23824;
(statearr_23827[(7)] = inst_23801);

return statearr_23827;
})();
var statearr_23828_23855 = state_23824__$1;
(statearr_23828_23855[(2)] = null);

(statearr_23828_23855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (4))){
var inst_23804 = (state_23824[(8)]);
var inst_23804__$1 = (state_23824[(2)]);
var inst_23805 = (inst_23804__$1 == null);
var inst_23806 = cljs.core.not.call(null,inst_23805);
var state_23824__$1 = (function (){var statearr_23829 = state_23824;
(statearr_23829[(8)] = inst_23804__$1);

return statearr_23829;
})();
if(inst_23806){
var statearr_23830_23856 = state_23824__$1;
(statearr_23830_23856[(1)] = (5));

} else {
var statearr_23831_23857 = state_23824__$1;
(statearr_23831_23857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (6))){
var state_23824__$1 = state_23824;
var statearr_23832_23858 = state_23824__$1;
(statearr_23832_23858[(2)] = null);

(statearr_23832_23858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (3))){
var inst_23821 = (state_23824[(2)]);
var inst_23822 = cljs.core.async.close_BANG_.call(null,out);
var state_23824__$1 = (function (){var statearr_23833 = state_23824;
(statearr_23833[(9)] = inst_23821);

return statearr_23833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23824__$1,inst_23822);
} else {
if((state_val_23825 === (2))){
var state_23824__$1 = state_23824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23824__$1,(4),ch);
} else {
if((state_val_23825 === (11))){
var inst_23804 = (state_23824[(8)]);
var inst_23813 = (state_23824[(2)]);
var inst_23801 = inst_23804;
var state_23824__$1 = (function (){var statearr_23834 = state_23824;
(statearr_23834[(7)] = inst_23801);

(statearr_23834[(10)] = inst_23813);

return statearr_23834;
})();
var statearr_23835_23859 = state_23824__$1;
(statearr_23835_23859[(2)] = null);

(statearr_23835_23859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (9))){
var inst_23804 = (state_23824[(8)]);
var state_23824__$1 = state_23824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23824__$1,(11),out,inst_23804);
} else {
if((state_val_23825 === (5))){
var inst_23801 = (state_23824[(7)]);
var inst_23804 = (state_23824[(8)]);
var inst_23808 = cljs.core._EQ_.call(null,inst_23804,inst_23801);
var state_23824__$1 = state_23824;
if(inst_23808){
var statearr_23837_23860 = state_23824__$1;
(statearr_23837_23860[(1)] = (8));

} else {
var statearr_23838_23861 = state_23824__$1;
(statearr_23838_23861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (10))){
var inst_23816 = (state_23824[(2)]);
var state_23824__$1 = state_23824;
var statearr_23839_23862 = state_23824__$1;
(statearr_23839_23862[(2)] = inst_23816);

(statearr_23839_23862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23825 === (8))){
var inst_23801 = (state_23824[(7)]);
var tmp23836 = inst_23801;
var inst_23801__$1 = tmp23836;
var state_23824__$1 = (function (){var statearr_23840 = state_23824;
(statearr_23840[(7)] = inst_23801__$1);

return statearr_23840;
})();
var statearr_23841_23863 = state_23824__$1;
(statearr_23841_23863[(2)] = null);

(statearr_23841_23863[(1)] = (2));


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
});})(c__21107__auto___23853,out))
;
return ((function (switch__21092__auto__,c__21107__auto___23853,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23845[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23845[(1)] = (1));

return statearr_23845;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23824){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23846){if((e23846 instanceof Object)){
var ex__21096__auto__ = e23846;
var statearr_23847_23864 = state_23824;
(statearr_23847_23864[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23865 = state_23824;
state_23824 = G__23865;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23853,out))
})();
var state__21109__auto__ = (function (){var statearr_23848 = f__21108__auto__.call(null);
(statearr_23848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23853);

return statearr_23848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23853,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23866 = [];
var len__19850__auto___23936 = arguments.length;
var i__19851__auto___23937 = (0);
while(true){
if((i__19851__auto___23937 < len__19850__auto___23936)){
args23866.push((arguments[i__19851__auto___23937]));

var G__23938 = (i__19851__auto___23937 + (1));
i__19851__auto___23937 = G__23938;
continue;
} else {
}
break;
}

var G__23868 = args23866.length;
switch (G__23868) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23866.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___23940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___23940,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___23940,out){
return (function (state_23906){
var state_val_23907 = (state_23906[(1)]);
if((state_val_23907 === (7))){
var inst_23902 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23908_23941 = state_23906__$1;
(statearr_23908_23941[(2)] = inst_23902);

(statearr_23908_23941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (1))){
var inst_23869 = (new Array(n));
var inst_23870 = inst_23869;
var inst_23871 = (0);
var state_23906__$1 = (function (){var statearr_23909 = state_23906;
(statearr_23909[(7)] = inst_23871);

(statearr_23909[(8)] = inst_23870);

return statearr_23909;
})();
var statearr_23910_23942 = state_23906__$1;
(statearr_23910_23942[(2)] = null);

(statearr_23910_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (4))){
var inst_23874 = (state_23906[(9)]);
var inst_23874__$1 = (state_23906[(2)]);
var inst_23875 = (inst_23874__$1 == null);
var inst_23876 = cljs.core.not.call(null,inst_23875);
var state_23906__$1 = (function (){var statearr_23911 = state_23906;
(statearr_23911[(9)] = inst_23874__$1);

return statearr_23911;
})();
if(inst_23876){
var statearr_23912_23943 = state_23906__$1;
(statearr_23912_23943[(1)] = (5));

} else {
var statearr_23913_23944 = state_23906__$1;
(statearr_23913_23944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (15))){
var inst_23896 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23914_23945 = state_23906__$1;
(statearr_23914_23945[(2)] = inst_23896);

(statearr_23914_23945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (13))){
var state_23906__$1 = state_23906;
var statearr_23915_23946 = state_23906__$1;
(statearr_23915_23946[(2)] = null);

(statearr_23915_23946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (6))){
var inst_23871 = (state_23906[(7)]);
var inst_23892 = (inst_23871 > (0));
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23892)){
var statearr_23916_23947 = state_23906__$1;
(statearr_23916_23947[(1)] = (12));

} else {
var statearr_23917_23948 = state_23906__$1;
(statearr_23917_23948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (3))){
var inst_23904 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23906__$1,inst_23904);
} else {
if((state_val_23907 === (12))){
var inst_23870 = (state_23906[(8)]);
var inst_23894 = cljs.core.vec.call(null,inst_23870);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23906__$1,(15),out,inst_23894);
} else {
if((state_val_23907 === (2))){
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(4),ch);
} else {
if((state_val_23907 === (11))){
var inst_23886 = (state_23906[(2)]);
var inst_23887 = (new Array(n));
var inst_23870 = inst_23887;
var inst_23871 = (0);
var state_23906__$1 = (function (){var statearr_23918 = state_23906;
(statearr_23918[(7)] = inst_23871);

(statearr_23918[(10)] = inst_23886);

(statearr_23918[(8)] = inst_23870);

return statearr_23918;
})();
var statearr_23919_23949 = state_23906__$1;
(statearr_23919_23949[(2)] = null);

(statearr_23919_23949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (9))){
var inst_23870 = (state_23906[(8)]);
var inst_23884 = cljs.core.vec.call(null,inst_23870);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23906__$1,(11),out,inst_23884);
} else {
if((state_val_23907 === (5))){
var inst_23871 = (state_23906[(7)]);
var inst_23879 = (state_23906[(11)]);
var inst_23870 = (state_23906[(8)]);
var inst_23874 = (state_23906[(9)]);
var inst_23878 = (inst_23870[inst_23871] = inst_23874);
var inst_23879__$1 = (inst_23871 + (1));
var inst_23880 = (inst_23879__$1 < n);
var state_23906__$1 = (function (){var statearr_23920 = state_23906;
(statearr_23920[(11)] = inst_23879__$1);

(statearr_23920[(12)] = inst_23878);

return statearr_23920;
})();
if(cljs.core.truth_(inst_23880)){
var statearr_23921_23950 = state_23906__$1;
(statearr_23921_23950[(1)] = (8));

} else {
var statearr_23922_23951 = state_23906__$1;
(statearr_23922_23951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (14))){
var inst_23899 = (state_23906[(2)]);
var inst_23900 = cljs.core.async.close_BANG_.call(null,out);
var state_23906__$1 = (function (){var statearr_23924 = state_23906;
(statearr_23924[(13)] = inst_23899);

return statearr_23924;
})();
var statearr_23925_23952 = state_23906__$1;
(statearr_23925_23952[(2)] = inst_23900);

(statearr_23925_23952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (10))){
var inst_23890 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23926_23953 = state_23906__$1;
(statearr_23926_23953[(2)] = inst_23890);

(statearr_23926_23953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (8))){
var inst_23879 = (state_23906[(11)]);
var inst_23870 = (state_23906[(8)]);
var tmp23923 = inst_23870;
var inst_23870__$1 = tmp23923;
var inst_23871 = inst_23879;
var state_23906__$1 = (function (){var statearr_23927 = state_23906;
(statearr_23927[(7)] = inst_23871);

(statearr_23927[(8)] = inst_23870__$1);

return statearr_23927;
})();
var statearr_23928_23954 = state_23906__$1;
(statearr_23928_23954[(2)] = null);

(statearr_23928_23954[(1)] = (2));


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
});})(c__21107__auto___23940,out))
;
return ((function (switch__21092__auto__,c__21107__auto___23940,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_23932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23932[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_23932[(1)] = (1));

return statearr_23932;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_23906){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_23906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e23933){if((e23933 instanceof Object)){
var ex__21096__auto__ = e23933;
var statearr_23934_23955 = state_23906;
(statearr_23934_23955[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23956 = state_23906;
state_23906 = G__23956;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_23906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_23906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___23940,out))
})();
var state__21109__auto__ = (function (){var statearr_23935 = f__21108__auto__.call(null);
(statearr_23935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___23940);

return statearr_23935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___23940,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23957 = [];
var len__19850__auto___24031 = arguments.length;
var i__19851__auto___24032 = (0);
while(true){
if((i__19851__auto___24032 < len__19850__auto___24031)){
args23957.push((arguments[i__19851__auto___24032]));

var G__24033 = (i__19851__auto___24032 + (1));
i__19851__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var G__23959 = args23957.length;
switch (G__23959) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23957.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21107__auto___24035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto___24035,out){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto___24035,out){
return (function (state_24001){
var state_val_24002 = (state_24001[(1)]);
if((state_val_24002 === (7))){
var inst_23997 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24003_24036 = state_24001__$1;
(statearr_24003_24036[(2)] = inst_23997);

(statearr_24003_24036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (1))){
var inst_23960 = [];
var inst_23961 = inst_23960;
var inst_23962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24001__$1 = (function (){var statearr_24004 = state_24001;
(statearr_24004[(7)] = inst_23961);

(statearr_24004[(8)] = inst_23962);

return statearr_24004;
})();
var statearr_24005_24037 = state_24001__$1;
(statearr_24005_24037[(2)] = null);

(statearr_24005_24037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (4))){
var inst_23965 = (state_24001[(9)]);
var inst_23965__$1 = (state_24001[(2)]);
var inst_23966 = (inst_23965__$1 == null);
var inst_23967 = cljs.core.not.call(null,inst_23966);
var state_24001__$1 = (function (){var statearr_24006 = state_24001;
(statearr_24006[(9)] = inst_23965__$1);

return statearr_24006;
})();
if(inst_23967){
var statearr_24007_24038 = state_24001__$1;
(statearr_24007_24038[(1)] = (5));

} else {
var statearr_24008_24039 = state_24001__$1;
(statearr_24008_24039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (15))){
var inst_23991 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24009_24040 = state_24001__$1;
(statearr_24009_24040[(2)] = inst_23991);

(statearr_24009_24040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (13))){
var state_24001__$1 = state_24001;
var statearr_24010_24041 = state_24001__$1;
(statearr_24010_24041[(2)] = null);

(statearr_24010_24041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (6))){
var inst_23961 = (state_24001[(7)]);
var inst_23986 = inst_23961.length;
var inst_23987 = (inst_23986 > (0));
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23987)){
var statearr_24011_24042 = state_24001__$1;
(statearr_24011_24042[(1)] = (12));

} else {
var statearr_24012_24043 = state_24001__$1;
(statearr_24012_24043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (3))){
var inst_23999 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24001__$1,inst_23999);
} else {
if((state_val_24002 === (12))){
var inst_23961 = (state_24001[(7)]);
var inst_23989 = cljs.core.vec.call(null,inst_23961);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(15),out,inst_23989);
} else {
if((state_val_24002 === (2))){
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24001__$1,(4),ch);
} else {
if((state_val_24002 === (11))){
var inst_23965 = (state_24001[(9)]);
var inst_23969 = (state_24001[(10)]);
var inst_23979 = (state_24001[(2)]);
var inst_23980 = [];
var inst_23981 = inst_23980.push(inst_23965);
var inst_23961 = inst_23980;
var inst_23962 = inst_23969;
var state_24001__$1 = (function (){var statearr_24013 = state_24001;
(statearr_24013[(11)] = inst_23979);

(statearr_24013[(7)] = inst_23961);

(statearr_24013[(12)] = inst_23981);

(statearr_24013[(8)] = inst_23962);

return statearr_24013;
})();
var statearr_24014_24044 = state_24001__$1;
(statearr_24014_24044[(2)] = null);

(statearr_24014_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (9))){
var inst_23961 = (state_24001[(7)]);
var inst_23977 = cljs.core.vec.call(null,inst_23961);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(11),out,inst_23977);
} else {
if((state_val_24002 === (5))){
var inst_23965 = (state_24001[(9)]);
var inst_23969 = (state_24001[(10)]);
var inst_23962 = (state_24001[(8)]);
var inst_23969__$1 = f.call(null,inst_23965);
var inst_23970 = cljs.core._EQ_.call(null,inst_23969__$1,inst_23962);
var inst_23971 = cljs.core.keyword_identical_QMARK_.call(null,inst_23962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23972 = (inst_23970) || (inst_23971);
var state_24001__$1 = (function (){var statearr_24015 = state_24001;
(statearr_24015[(10)] = inst_23969__$1);

return statearr_24015;
})();
if(cljs.core.truth_(inst_23972)){
var statearr_24016_24045 = state_24001__$1;
(statearr_24016_24045[(1)] = (8));

} else {
var statearr_24017_24046 = state_24001__$1;
(statearr_24017_24046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (14))){
var inst_23994 = (state_24001[(2)]);
var inst_23995 = cljs.core.async.close_BANG_.call(null,out);
var state_24001__$1 = (function (){var statearr_24019 = state_24001;
(statearr_24019[(13)] = inst_23994);

return statearr_24019;
})();
var statearr_24020_24047 = state_24001__$1;
(statearr_24020_24047[(2)] = inst_23995);

(statearr_24020_24047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (10))){
var inst_23984 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24021_24048 = state_24001__$1;
(statearr_24021_24048[(2)] = inst_23984);

(statearr_24021_24048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (8))){
var inst_23965 = (state_24001[(9)]);
var inst_23961 = (state_24001[(7)]);
var inst_23969 = (state_24001[(10)]);
var inst_23974 = inst_23961.push(inst_23965);
var tmp24018 = inst_23961;
var inst_23961__$1 = tmp24018;
var inst_23962 = inst_23969;
var state_24001__$1 = (function (){var statearr_24022 = state_24001;
(statearr_24022[(14)] = inst_23974);

(statearr_24022[(7)] = inst_23961__$1);

(statearr_24022[(8)] = inst_23962);

return statearr_24022;
})();
var statearr_24023_24049 = state_24001__$1;
(statearr_24023_24049[(2)] = null);

(statearr_24023_24049[(1)] = (2));


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
});})(c__21107__auto___24035,out))
;
return ((function (switch__21092__auto__,c__21107__auto___24035,out){
return (function() {
var cljs$core$async$state_machine__21093__auto__ = null;
var cljs$core$async$state_machine__21093__auto____0 = (function (){
var statearr_24027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24027[(0)] = cljs$core$async$state_machine__21093__auto__);

(statearr_24027[(1)] = (1));

return statearr_24027;
});
var cljs$core$async$state_machine__21093__auto____1 = (function (state_24001){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_24001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e24028){if((e24028 instanceof Object)){
var ex__21096__auto__ = e24028;
var statearr_24029_24050 = state_24001;
(statearr_24029_24050[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24051 = state_24001;
state_24001 = G__24051;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
cljs$core$async$state_machine__21093__auto__ = function(state_24001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21093__auto____1.call(this,state_24001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21093__auto____0;
cljs$core$async$state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21093__auto____1;
return cljs$core$async$state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto___24035,out))
})();
var state__21109__auto__ = (function (){var statearr_24030 = f__21108__auto__.call(null);
(statearr_24030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto___24035);

return statearr_24030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto___24035,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1492189013335