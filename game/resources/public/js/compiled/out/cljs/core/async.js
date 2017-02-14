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
var args21211 = [];
var len__19864__auto___21217 = arguments.length;
var i__19865__auto___21218 = (0);
while(true){
if((i__19865__auto___21218 < len__19864__auto___21217)){
args21211.push((arguments[i__19865__auto___21218]));

var G__21219 = (i__19865__auto___21218 + (1));
i__19865__auto___21218 = G__21219;
continue;
} else {
}
break;
}

var G__21213 = args21211.length;
switch (G__21213) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21211.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21214 = (function (f,blockable,meta21215){
this.f = f;
this.blockable = blockable;
this.meta21215 = meta21215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21216,meta21215__$1){
var self__ = this;
var _21216__$1 = this;
return (new cljs.core.async.t_cljs$core$async21214(self__.f,self__.blockable,meta21215__$1));
});

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21216){
var self__ = this;
var _21216__$1 = this;
return self__.meta21215;
});

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21215","meta21215",-610078896,null)], null);
});

cljs.core.async.t_cljs$core$async21214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21214";

cljs.core.async.t_cljs$core$async21214.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21214");
});

cljs.core.async.__GT_t_cljs$core$async21214 = (function cljs$core$async$__GT_t_cljs$core$async21214(f__$1,blockable__$1,meta21215){
return (new cljs.core.async.t_cljs$core$async21214(f__$1,blockable__$1,meta21215));
});

}

return (new cljs.core.async.t_cljs$core$async21214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21223 = [];
var len__19864__auto___21226 = arguments.length;
var i__19865__auto___21227 = (0);
while(true){
if((i__19865__auto___21227 < len__19864__auto___21226)){
args21223.push((arguments[i__19865__auto___21227]));

var G__21228 = (i__19865__auto___21227 + (1));
i__19865__auto___21227 = G__21228;
continue;
} else {
}
break;
}

var G__21225 = args21223.length;
switch (G__21225) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21223.length)].join('')));

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
var args21230 = [];
var len__19864__auto___21233 = arguments.length;
var i__19865__auto___21234 = (0);
while(true){
if((i__19865__auto___21234 < len__19864__auto___21233)){
args21230.push((arguments[i__19865__auto___21234]));

var G__21235 = (i__19865__auto___21234 + (1));
i__19865__auto___21234 = G__21235;
continue;
} else {
}
break;
}

var G__21232 = args21230.length;
switch (G__21232) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21230.length)].join('')));

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
var args21237 = [];
var len__19864__auto___21240 = arguments.length;
var i__19865__auto___21241 = (0);
while(true){
if((i__19865__auto___21241 < len__19864__auto___21240)){
args21237.push((arguments[i__19865__auto___21241]));

var G__21242 = (i__19865__auto___21241 + (1));
i__19865__auto___21241 = G__21242;
continue;
} else {
}
break;
}

var G__21239 = args21237.length;
switch (G__21239) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21237.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21244 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21244);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21244,ret){
return (function (){
return fn1.call(null,val_21244);
});})(val_21244,ret))
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
var args21245 = [];
var len__19864__auto___21248 = arguments.length;
var i__19865__auto___21249 = (0);
while(true){
if((i__19865__auto___21249 < len__19864__auto___21248)){
args21245.push((arguments[i__19865__auto___21249]));

var G__21250 = (i__19865__auto___21249 + (1));
i__19865__auto___21249 = G__21250;
continue;
} else {
}
break;
}

var G__21247 = args21245.length;
switch (G__21247) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21245.length)].join('')));

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
var n__19674__auto___21252 = n;
var x_21253 = (0);
while(true){
if((x_21253 < n__19674__auto___21252)){
(a[x_21253] = (0));

var G__21254 = (x_21253 + (1));
x_21253 = G__21254;
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

var G__21255 = (i + (1));
i = G__21255;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21259 = (function (flag,meta21260){
this.flag = flag;
this.meta21260 = meta21260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21261,meta21260__$1){
var self__ = this;
var _21261__$1 = this;
return (new cljs.core.async.t_cljs$core$async21259(self__.flag,meta21260__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21261){
var self__ = this;
var _21261__$1 = this;
return self__.meta21260;
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21260","meta21260",-618791143,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21259";

cljs.core.async.t_cljs$core$async21259.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21259");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21259 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21259(flag__$1,meta21260){
return (new cljs.core.async.t_cljs$core$async21259(flag__$1,meta21260));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21259(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21265 = (function (flag,cb,meta21266){
this.flag = flag;
this.cb = cb;
this.meta21266 = meta21266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21267,meta21266__$1){
var self__ = this;
var _21267__$1 = this;
return (new cljs.core.async.t_cljs$core$async21265(self__.flag,self__.cb,meta21266__$1));
});

cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21267){
var self__ = this;
var _21267__$1 = this;
return self__.meta21266;
});

cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21266","meta21266",-1875060691,null)], null);
});

cljs.core.async.t_cljs$core$async21265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21265";

cljs.core.async.t_cljs$core$async21265.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async21265");
});

cljs.core.async.__GT_t_cljs$core$async21265 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21265(flag__$1,cb__$1,meta21266){
return (new cljs.core.async.t_cljs$core$async21265(flag__$1,cb__$1,meta21266));
});

}

return (new cljs.core.async.t_cljs$core$async21265(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21268_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21269_SHARP_,port], null));
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
var G__21270 = (i + (1));
i = G__21270;
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
var len__19864__auto___21276 = arguments.length;
var i__19865__auto___21277 = (0);
while(true){
if((i__19865__auto___21277 < len__19864__auto___21276)){
args__19871__auto__.push((arguments[i__19865__auto___21277]));

var G__21278 = (i__19865__auto___21277 + (1));
i__19865__auto___21277 = G__21278;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((1) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19872__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21273){
var map__21274 = p__21273;
var map__21274__$1 = ((((!((map__21274 == null)))?((((map__21274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21274):map__21274);
var opts = map__21274__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21271){
var G__21272 = cljs.core.first.call(null,seq21271);
var seq21271__$1 = cljs.core.next.call(null,seq21271);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21272,seq21271__$1);
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
var args21279 = [];
var len__19864__auto___21329 = arguments.length;
var i__19865__auto___21330 = (0);
while(true){
if((i__19865__auto___21330 < len__19864__auto___21329)){
args21279.push((arguments[i__19865__auto___21330]));

var G__21331 = (i__19865__auto___21330 + (1));
i__19865__auto___21330 = G__21331;
continue;
} else {
}
break;
}

var G__21281 = args21279.length;
switch (G__21281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21279.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21118__auto___21333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___21333){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___21333){
return (function (state_21305){
var state_val_21306 = (state_21305[(1)]);
if((state_val_21306 === (7))){
var inst_21301 = (state_21305[(2)]);
var state_21305__$1 = state_21305;
var statearr_21307_21334 = state_21305__$1;
(statearr_21307_21334[(2)] = inst_21301);

(statearr_21307_21334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (1))){
var state_21305__$1 = state_21305;
var statearr_21308_21335 = state_21305__$1;
(statearr_21308_21335[(2)] = null);

(statearr_21308_21335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (4))){
var inst_21284 = (state_21305[(7)]);
var inst_21284__$1 = (state_21305[(2)]);
var inst_21285 = (inst_21284__$1 == null);
var state_21305__$1 = (function (){var statearr_21309 = state_21305;
(statearr_21309[(7)] = inst_21284__$1);

return statearr_21309;
})();
if(cljs.core.truth_(inst_21285)){
var statearr_21310_21336 = state_21305__$1;
(statearr_21310_21336[(1)] = (5));

} else {
var statearr_21311_21337 = state_21305__$1;
(statearr_21311_21337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (13))){
var state_21305__$1 = state_21305;
var statearr_21312_21338 = state_21305__$1;
(statearr_21312_21338[(2)] = null);

(statearr_21312_21338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (6))){
var inst_21284 = (state_21305[(7)]);
var state_21305__$1 = state_21305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21305__$1,(11),to,inst_21284);
} else {
if((state_val_21306 === (3))){
var inst_21303 = (state_21305[(2)]);
var state_21305__$1 = state_21305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21305__$1,inst_21303);
} else {
if((state_val_21306 === (12))){
var state_21305__$1 = state_21305;
var statearr_21313_21339 = state_21305__$1;
(statearr_21313_21339[(2)] = null);

(statearr_21313_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (2))){
var state_21305__$1 = state_21305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21305__$1,(4),from);
} else {
if((state_val_21306 === (11))){
var inst_21294 = (state_21305[(2)]);
var state_21305__$1 = state_21305;
if(cljs.core.truth_(inst_21294)){
var statearr_21314_21340 = state_21305__$1;
(statearr_21314_21340[(1)] = (12));

} else {
var statearr_21315_21341 = state_21305__$1;
(statearr_21315_21341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (9))){
var state_21305__$1 = state_21305;
var statearr_21316_21342 = state_21305__$1;
(statearr_21316_21342[(2)] = null);

(statearr_21316_21342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (5))){
var state_21305__$1 = state_21305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21317_21343 = state_21305__$1;
(statearr_21317_21343[(1)] = (8));

} else {
var statearr_21318_21344 = state_21305__$1;
(statearr_21318_21344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (14))){
var inst_21299 = (state_21305[(2)]);
var state_21305__$1 = state_21305;
var statearr_21319_21345 = state_21305__$1;
(statearr_21319_21345[(2)] = inst_21299);

(statearr_21319_21345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (10))){
var inst_21291 = (state_21305[(2)]);
var state_21305__$1 = state_21305;
var statearr_21320_21346 = state_21305__$1;
(statearr_21320_21346[(2)] = inst_21291);

(statearr_21320_21346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21306 === (8))){
var inst_21288 = cljs.core.async.close_BANG_.call(null,to);
var state_21305__$1 = state_21305;
var statearr_21321_21347 = state_21305__$1;
(statearr_21321_21347[(2)] = inst_21288);

(statearr_21321_21347[(1)] = (10));


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
});})(c__21118__auto___21333))
;
return ((function (switch__21103__auto__,c__21118__auto___21333){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_21325 = [null,null,null,null,null,null,null,null];
(statearr_21325[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_21325[(1)] = (1));

return statearr_21325;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_21305){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21326){if((e21326 instanceof Object)){
var ex__21107__auto__ = e21326;
var statearr_21327_21348 = state_21305;
(statearr_21327_21348[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21349 = state_21305;
state_21305 = G__21349;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_21305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_21305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___21333))
})();
var state__21120__auto__ = (function (){var statearr_21328 = f__21119__auto__.call(null);
(statearr_21328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21333);

return statearr_21328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___21333))
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
return (function (p__21537){
var vec__21538 = p__21537;
var v = cljs.core.nth.call(null,vec__21538,(0),null);
var p = cljs.core.nth.call(null,vec__21538,(1),null);
var job = vec__21538;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21118__auto___21724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results){
return (function (state_21545){
var state_val_21546 = (state_21545[(1)]);
if((state_val_21546 === (1))){
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21545__$1,(2),res,v);
} else {
if((state_val_21546 === (2))){
var inst_21542 = (state_21545[(2)]);
var inst_21543 = cljs.core.async.close_BANG_.call(null,res);
var state_21545__$1 = (function (){var statearr_21547 = state_21545;
(statearr_21547[(7)] = inst_21542);

return statearr_21547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21545__$1,inst_21543);
} else {
return null;
}
}
});})(c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results))
;
return ((function (switch__21103__auto__,c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_21551 = [null,null,null,null,null,null,null,null];
(statearr_21551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__);

(statearr_21551[(1)] = (1));

return statearr_21551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1 = (function (state_21545){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21552){if((e21552 instanceof Object)){
var ex__21107__auto__ = e21552;
var statearr_21553_21725 = state_21545;
(statearr_21553_21725[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21726 = state_21545;
state_21545 = G__21726;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = function(state_21545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1.call(this,state_21545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results))
})();
var state__21120__auto__ = (function (){var statearr_21554 = f__21119__auto__.call(null);
(statearr_21554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21724);

return statearr_21554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___21724,res,vec__21538,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21555){
var vec__21556 = p__21555;
var v = cljs.core.nth.call(null,vec__21556,(0),null);
var p = cljs.core.nth.call(null,vec__21556,(1),null);
var job = vec__21556;
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
var n__19674__auto___21727 = n;
var __21728 = (0);
while(true){
if((__21728 < n__19674__auto___21727)){
var G__21559_21729 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21559_21729) {
case "compute":
var c__21118__auto___21731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21728,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (__21728,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function (state_21572){
var state_val_21573 = (state_21572[(1)]);
if((state_val_21573 === (1))){
var state_21572__$1 = state_21572;
var statearr_21574_21732 = state_21572__$1;
(statearr_21574_21732[(2)] = null);

(statearr_21574_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (2))){
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21572__$1,(4),jobs);
} else {
if((state_val_21573 === (3))){
var inst_21570 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21572__$1,inst_21570);
} else {
if((state_val_21573 === (4))){
var inst_21562 = (state_21572[(2)]);
var inst_21563 = process.call(null,inst_21562);
var state_21572__$1 = state_21572;
if(cljs.core.truth_(inst_21563)){
var statearr_21575_21733 = state_21572__$1;
(statearr_21575_21733[(1)] = (5));

} else {
var statearr_21576_21734 = state_21572__$1;
(statearr_21576_21734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (5))){
var state_21572__$1 = state_21572;
var statearr_21577_21735 = state_21572__$1;
(statearr_21577_21735[(2)] = null);

(statearr_21577_21735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (6))){
var state_21572__$1 = state_21572;
var statearr_21578_21736 = state_21572__$1;
(statearr_21578_21736[(2)] = null);

(statearr_21578_21736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (7))){
var inst_21568 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21579_21737 = state_21572__$1;
(statearr_21579_21737[(2)] = inst_21568);

(statearr_21579_21737[(1)] = (3));


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
});})(__21728,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
;
return ((function (__21728,switch__21103__auto__,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_21583 = [null,null,null,null,null,null,null];
(statearr_21583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__);

(statearr_21583[(1)] = (1));

return statearr_21583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1 = (function (state_21572){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21584){if((e21584 instanceof Object)){
var ex__21107__auto__ = e21584;
var statearr_21585_21738 = state_21572;
(statearr_21585_21738[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21739 = state_21572;
state_21572 = G__21739;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = function(state_21572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1.call(this,state_21572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__;
})()
;})(__21728,switch__21103__auto__,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
})();
var state__21120__auto__ = (function (){var statearr_21586 = f__21119__auto__.call(null);
(statearr_21586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21731);

return statearr_21586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(__21728,c__21118__auto___21731,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
);


break;
case "async":
var c__21118__auto___21740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21728,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (__21728,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function (state_21599){
var state_val_21600 = (state_21599[(1)]);
if((state_val_21600 === (1))){
var state_21599__$1 = state_21599;
var statearr_21601_21741 = state_21599__$1;
(statearr_21601_21741[(2)] = null);

(statearr_21601_21741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (2))){
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21599__$1,(4),jobs);
} else {
if((state_val_21600 === (3))){
var inst_21597 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21599__$1,inst_21597);
} else {
if((state_val_21600 === (4))){
var inst_21589 = (state_21599[(2)]);
var inst_21590 = async.call(null,inst_21589);
var state_21599__$1 = state_21599;
if(cljs.core.truth_(inst_21590)){
var statearr_21602_21742 = state_21599__$1;
(statearr_21602_21742[(1)] = (5));

} else {
var statearr_21603_21743 = state_21599__$1;
(statearr_21603_21743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (5))){
var state_21599__$1 = state_21599;
var statearr_21604_21744 = state_21599__$1;
(statearr_21604_21744[(2)] = null);

(statearr_21604_21744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (6))){
var state_21599__$1 = state_21599;
var statearr_21605_21745 = state_21599__$1;
(statearr_21605_21745[(2)] = null);

(statearr_21605_21745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (7))){
var inst_21595 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21606_21746 = state_21599__$1;
(statearr_21606_21746[(2)] = inst_21595);

(statearr_21606_21746[(1)] = (3));


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
});})(__21728,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
;
return ((function (__21728,switch__21103__auto__,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_21610 = [null,null,null,null,null,null,null];
(statearr_21610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__);

(statearr_21610[(1)] = (1));

return statearr_21610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1 = (function (state_21599){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object)){
var ex__21107__auto__ = e21611;
var statearr_21612_21747 = state_21599;
(statearr_21612_21747[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21748 = state_21599;
state_21599 = G__21748;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = function(state_21599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1.call(this,state_21599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__;
})()
;})(__21728,switch__21103__auto__,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
})();
var state__21120__auto__ = (function (){var statearr_21613 = f__21119__auto__.call(null);
(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21740);

return statearr_21613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(__21728,c__21118__auto___21740,G__21559_21729,n__19674__auto___21727,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21749 = (__21728 + (1));
__21728 = G__21749;
continue;
} else {
}
break;
}

var c__21118__auto___21750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___21750,jobs,results,process,async){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___21750,jobs,results,process,async){
return (function (state_21635){
var state_val_21636 = (state_21635[(1)]);
if((state_val_21636 === (1))){
var state_21635__$1 = state_21635;
var statearr_21637_21751 = state_21635__$1;
(statearr_21637_21751[(2)] = null);

(statearr_21637_21751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (2))){
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21635__$1,(4),from);
} else {
if((state_val_21636 === (3))){
var inst_21633 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21635__$1,inst_21633);
} else {
if((state_val_21636 === (4))){
var inst_21616 = (state_21635[(7)]);
var inst_21616__$1 = (state_21635[(2)]);
var inst_21617 = (inst_21616__$1 == null);
var state_21635__$1 = (function (){var statearr_21638 = state_21635;
(statearr_21638[(7)] = inst_21616__$1);

return statearr_21638;
})();
if(cljs.core.truth_(inst_21617)){
var statearr_21639_21752 = state_21635__$1;
(statearr_21639_21752[(1)] = (5));

} else {
var statearr_21640_21753 = state_21635__$1;
(statearr_21640_21753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (5))){
var inst_21619 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21635__$1 = state_21635;
var statearr_21641_21754 = state_21635__$1;
(statearr_21641_21754[(2)] = inst_21619);

(statearr_21641_21754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (6))){
var inst_21621 = (state_21635[(8)]);
var inst_21616 = (state_21635[(7)]);
var inst_21621__$1 = cljs.core.async.chan.call(null,(1));
var inst_21622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21623 = [inst_21616,inst_21621__$1];
var inst_21624 = (new cljs.core.PersistentVector(null,2,(5),inst_21622,inst_21623,null));
var state_21635__$1 = (function (){var statearr_21642 = state_21635;
(statearr_21642[(8)] = inst_21621__$1);

return statearr_21642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21635__$1,(8),jobs,inst_21624);
} else {
if((state_val_21636 === (7))){
var inst_21631 = (state_21635[(2)]);
var state_21635__$1 = state_21635;
var statearr_21643_21755 = state_21635__$1;
(statearr_21643_21755[(2)] = inst_21631);

(statearr_21643_21755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21636 === (8))){
var inst_21621 = (state_21635[(8)]);
var inst_21626 = (state_21635[(2)]);
var state_21635__$1 = (function (){var statearr_21644 = state_21635;
(statearr_21644[(9)] = inst_21626);

return statearr_21644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21635__$1,(9),results,inst_21621);
} else {
if((state_val_21636 === (9))){
var inst_21628 = (state_21635[(2)]);
var state_21635__$1 = (function (){var statearr_21645 = state_21635;
(statearr_21645[(10)] = inst_21628);

return statearr_21645;
})();
var statearr_21646_21756 = state_21635__$1;
(statearr_21646_21756[(2)] = null);

(statearr_21646_21756[(1)] = (2));


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
});})(c__21118__auto___21750,jobs,results,process,async))
;
return ((function (switch__21103__auto__,c__21118__auto___21750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_21650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__);

(statearr_21650[(1)] = (1));

return statearr_21650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1 = (function (state_21635){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21651){if((e21651 instanceof Object)){
var ex__21107__auto__ = e21651;
var statearr_21652_21757 = state_21635;
(statearr_21652_21757[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21758 = state_21635;
state_21635 = G__21758;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = function(state_21635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1.call(this,state_21635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___21750,jobs,results,process,async))
})();
var state__21120__auto__ = (function (){var statearr_21653 = f__21119__auto__.call(null);
(statearr_21653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21750);

return statearr_21653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___21750,jobs,results,process,async))
);


var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__,jobs,results,process,async){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__,jobs,results,process,async){
return (function (state_21691){
var state_val_21692 = (state_21691[(1)]);
if((state_val_21692 === (7))){
var inst_21687 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
var statearr_21693_21759 = state_21691__$1;
(statearr_21693_21759[(2)] = inst_21687);

(statearr_21693_21759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (20))){
var state_21691__$1 = state_21691;
var statearr_21694_21760 = state_21691__$1;
(statearr_21694_21760[(2)] = null);

(statearr_21694_21760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (1))){
var state_21691__$1 = state_21691;
var statearr_21695_21761 = state_21691__$1;
(statearr_21695_21761[(2)] = null);

(statearr_21695_21761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (4))){
var inst_21656 = (state_21691[(7)]);
var inst_21656__$1 = (state_21691[(2)]);
var inst_21657 = (inst_21656__$1 == null);
var state_21691__$1 = (function (){var statearr_21696 = state_21691;
(statearr_21696[(7)] = inst_21656__$1);

return statearr_21696;
})();
if(cljs.core.truth_(inst_21657)){
var statearr_21697_21762 = state_21691__$1;
(statearr_21697_21762[(1)] = (5));

} else {
var statearr_21698_21763 = state_21691__$1;
(statearr_21698_21763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (15))){
var inst_21669 = (state_21691[(8)]);
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21691__$1,(18),to,inst_21669);
} else {
if((state_val_21692 === (21))){
var inst_21682 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
var statearr_21699_21764 = state_21691__$1;
(statearr_21699_21764[(2)] = inst_21682);

(statearr_21699_21764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (13))){
var inst_21684 = (state_21691[(2)]);
var state_21691__$1 = (function (){var statearr_21700 = state_21691;
(statearr_21700[(9)] = inst_21684);

return statearr_21700;
})();
var statearr_21701_21765 = state_21691__$1;
(statearr_21701_21765[(2)] = null);

(statearr_21701_21765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (6))){
var inst_21656 = (state_21691[(7)]);
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21691__$1,(11),inst_21656);
} else {
if((state_val_21692 === (17))){
var inst_21677 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
if(cljs.core.truth_(inst_21677)){
var statearr_21702_21766 = state_21691__$1;
(statearr_21702_21766[(1)] = (19));

} else {
var statearr_21703_21767 = state_21691__$1;
(statearr_21703_21767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (3))){
var inst_21689 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21691__$1,inst_21689);
} else {
if((state_val_21692 === (12))){
var inst_21666 = (state_21691[(10)]);
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21691__$1,(14),inst_21666);
} else {
if((state_val_21692 === (2))){
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21691__$1,(4),results);
} else {
if((state_val_21692 === (19))){
var state_21691__$1 = state_21691;
var statearr_21704_21768 = state_21691__$1;
(statearr_21704_21768[(2)] = null);

(statearr_21704_21768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (11))){
var inst_21666 = (state_21691[(2)]);
var state_21691__$1 = (function (){var statearr_21705 = state_21691;
(statearr_21705[(10)] = inst_21666);

return statearr_21705;
})();
var statearr_21706_21769 = state_21691__$1;
(statearr_21706_21769[(2)] = null);

(statearr_21706_21769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (9))){
var state_21691__$1 = state_21691;
var statearr_21707_21770 = state_21691__$1;
(statearr_21707_21770[(2)] = null);

(statearr_21707_21770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (5))){
var state_21691__$1 = state_21691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21708_21771 = state_21691__$1;
(statearr_21708_21771[(1)] = (8));

} else {
var statearr_21709_21772 = state_21691__$1;
(statearr_21709_21772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (14))){
var inst_21669 = (state_21691[(8)]);
var inst_21671 = (state_21691[(11)]);
var inst_21669__$1 = (state_21691[(2)]);
var inst_21670 = (inst_21669__$1 == null);
var inst_21671__$1 = cljs.core.not.call(null,inst_21670);
var state_21691__$1 = (function (){var statearr_21710 = state_21691;
(statearr_21710[(8)] = inst_21669__$1);

(statearr_21710[(11)] = inst_21671__$1);

return statearr_21710;
})();
if(inst_21671__$1){
var statearr_21711_21773 = state_21691__$1;
(statearr_21711_21773[(1)] = (15));

} else {
var statearr_21712_21774 = state_21691__$1;
(statearr_21712_21774[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (16))){
var inst_21671 = (state_21691[(11)]);
var state_21691__$1 = state_21691;
var statearr_21713_21775 = state_21691__$1;
(statearr_21713_21775[(2)] = inst_21671);

(statearr_21713_21775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (10))){
var inst_21663 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
var statearr_21714_21776 = state_21691__$1;
(statearr_21714_21776[(2)] = inst_21663);

(statearr_21714_21776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (18))){
var inst_21674 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
var statearr_21715_21777 = state_21691__$1;
(statearr_21715_21777[(2)] = inst_21674);

(statearr_21715_21777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (8))){
var inst_21660 = cljs.core.async.close_BANG_.call(null,to);
var state_21691__$1 = state_21691;
var statearr_21716_21778 = state_21691__$1;
(statearr_21716_21778[(2)] = inst_21660);

(statearr_21716_21778[(1)] = (10));


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
});})(c__21118__auto__,jobs,results,process,async))
;
return ((function (switch__21103__auto__,c__21118__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_21720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__);

(statearr_21720[(1)] = (1));

return statearr_21720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1 = (function (state_21691){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21721){if((e21721 instanceof Object)){
var ex__21107__auto__ = e21721;
var statearr_21722_21779 = state_21691;
(statearr_21722_21779[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21780 = state_21691;
state_21691 = G__21780;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__ = function(state_21691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1.call(this,state_21691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__,jobs,results,process,async))
})();
var state__21120__auto__ = (function (){var statearr_21723 = f__21119__auto__.call(null);
(statearr_21723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_21723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__,jobs,results,process,async))
);

return c__21118__auto__;
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
var args21781 = [];
var len__19864__auto___21784 = arguments.length;
var i__19865__auto___21785 = (0);
while(true){
if((i__19865__auto___21785 < len__19864__auto___21784)){
args21781.push((arguments[i__19865__auto___21785]));

var G__21786 = (i__19865__auto___21785 + (1));
i__19865__auto___21785 = G__21786;
continue;
} else {
}
break;
}

var G__21783 = args21781.length;
switch (G__21783) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21781.length)].join('')));

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
var args21788 = [];
var len__19864__auto___21791 = arguments.length;
var i__19865__auto___21792 = (0);
while(true){
if((i__19865__auto___21792 < len__19864__auto___21791)){
args21788.push((arguments[i__19865__auto___21792]));

var G__21793 = (i__19865__auto___21792 + (1));
i__19865__auto___21792 = G__21793;
continue;
} else {
}
break;
}

var G__21790 = args21788.length;
switch (G__21790) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21788.length)].join('')));

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
var args21795 = [];
var len__19864__auto___21848 = arguments.length;
var i__19865__auto___21849 = (0);
while(true){
if((i__19865__auto___21849 < len__19864__auto___21848)){
args21795.push((arguments[i__19865__auto___21849]));

var G__21850 = (i__19865__auto___21849 + (1));
i__19865__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var G__21797 = args21795.length;
switch (G__21797) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21795.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21118__auto___21852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___21852,tc,fc){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___21852,tc,fc){
return (function (state_21823){
var state_val_21824 = (state_21823[(1)]);
if((state_val_21824 === (7))){
var inst_21819 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21825_21853 = state_21823__$1;
(statearr_21825_21853[(2)] = inst_21819);

(statearr_21825_21853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (1))){
var state_21823__$1 = state_21823;
var statearr_21826_21854 = state_21823__$1;
(statearr_21826_21854[(2)] = null);

(statearr_21826_21854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (4))){
var inst_21800 = (state_21823[(7)]);
var inst_21800__$1 = (state_21823[(2)]);
var inst_21801 = (inst_21800__$1 == null);
var state_21823__$1 = (function (){var statearr_21827 = state_21823;
(statearr_21827[(7)] = inst_21800__$1);

return statearr_21827;
})();
if(cljs.core.truth_(inst_21801)){
var statearr_21828_21855 = state_21823__$1;
(statearr_21828_21855[(1)] = (5));

} else {
var statearr_21829_21856 = state_21823__$1;
(statearr_21829_21856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (13))){
var state_21823__$1 = state_21823;
var statearr_21830_21857 = state_21823__$1;
(statearr_21830_21857[(2)] = null);

(statearr_21830_21857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (6))){
var inst_21800 = (state_21823[(7)]);
var inst_21806 = p.call(null,inst_21800);
var state_21823__$1 = state_21823;
if(cljs.core.truth_(inst_21806)){
var statearr_21831_21858 = state_21823__$1;
(statearr_21831_21858[(1)] = (9));

} else {
var statearr_21832_21859 = state_21823__$1;
(statearr_21832_21859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (3))){
var inst_21821 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21823__$1,inst_21821);
} else {
if((state_val_21824 === (12))){
var state_21823__$1 = state_21823;
var statearr_21833_21860 = state_21823__$1;
(statearr_21833_21860[(2)] = null);

(statearr_21833_21860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (2))){
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21823__$1,(4),ch);
} else {
if((state_val_21824 === (11))){
var inst_21800 = (state_21823[(7)]);
var inst_21810 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21823__$1,(8),inst_21810,inst_21800);
} else {
if((state_val_21824 === (9))){
var state_21823__$1 = state_21823;
var statearr_21834_21861 = state_21823__$1;
(statearr_21834_21861[(2)] = tc);

(statearr_21834_21861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (5))){
var inst_21803 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21804 = cljs.core.async.close_BANG_.call(null,fc);
var state_21823__$1 = (function (){var statearr_21835 = state_21823;
(statearr_21835[(8)] = inst_21803);

return statearr_21835;
})();
var statearr_21836_21862 = state_21823__$1;
(statearr_21836_21862[(2)] = inst_21804);

(statearr_21836_21862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (14))){
var inst_21817 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21837_21863 = state_21823__$1;
(statearr_21837_21863[(2)] = inst_21817);

(statearr_21837_21863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (10))){
var state_21823__$1 = state_21823;
var statearr_21838_21864 = state_21823__$1;
(statearr_21838_21864[(2)] = fc);

(statearr_21838_21864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (8))){
var inst_21812 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
if(cljs.core.truth_(inst_21812)){
var statearr_21839_21865 = state_21823__$1;
(statearr_21839_21865[(1)] = (12));

} else {
var statearr_21840_21866 = state_21823__$1;
(statearr_21840_21866[(1)] = (13));

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
});})(c__21118__auto___21852,tc,fc))
;
return ((function (switch__21103__auto__,c__21118__auto___21852,tc,fc){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_21844 = [null,null,null,null,null,null,null,null,null];
(statearr_21844[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_21844[(1)] = (1));

return statearr_21844;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_21823){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21845){if((e21845 instanceof Object)){
var ex__21107__auto__ = e21845;
var statearr_21846_21867 = state_21823;
(statearr_21846_21867[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21868 = state_21823;
state_21823 = G__21868;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_21823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_21823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___21852,tc,fc))
})();
var state__21120__auto__ = (function (){var statearr_21847 = f__21119__auto__.call(null);
(statearr_21847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___21852);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___21852,tc,fc))
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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_21932){
var state_val_21933 = (state_21932[(1)]);
if((state_val_21933 === (7))){
var inst_21928 = (state_21932[(2)]);
var state_21932__$1 = state_21932;
var statearr_21934_21955 = state_21932__$1;
(statearr_21934_21955[(2)] = inst_21928);

(statearr_21934_21955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (1))){
var inst_21912 = init;
var state_21932__$1 = (function (){var statearr_21935 = state_21932;
(statearr_21935[(7)] = inst_21912);

return statearr_21935;
})();
var statearr_21936_21956 = state_21932__$1;
(statearr_21936_21956[(2)] = null);

(statearr_21936_21956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (4))){
var inst_21915 = (state_21932[(8)]);
var inst_21915__$1 = (state_21932[(2)]);
var inst_21916 = (inst_21915__$1 == null);
var state_21932__$1 = (function (){var statearr_21937 = state_21932;
(statearr_21937[(8)] = inst_21915__$1);

return statearr_21937;
})();
if(cljs.core.truth_(inst_21916)){
var statearr_21938_21957 = state_21932__$1;
(statearr_21938_21957[(1)] = (5));

} else {
var statearr_21939_21958 = state_21932__$1;
(statearr_21939_21958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (6))){
var inst_21912 = (state_21932[(7)]);
var inst_21915 = (state_21932[(8)]);
var inst_21919 = (state_21932[(9)]);
var inst_21919__$1 = f.call(null,inst_21912,inst_21915);
var inst_21920 = cljs.core.reduced_QMARK_.call(null,inst_21919__$1);
var state_21932__$1 = (function (){var statearr_21940 = state_21932;
(statearr_21940[(9)] = inst_21919__$1);

return statearr_21940;
})();
if(inst_21920){
var statearr_21941_21959 = state_21932__$1;
(statearr_21941_21959[(1)] = (8));

} else {
var statearr_21942_21960 = state_21932__$1;
(statearr_21942_21960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (3))){
var inst_21930 = (state_21932[(2)]);
var state_21932__$1 = state_21932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21932__$1,inst_21930);
} else {
if((state_val_21933 === (2))){
var state_21932__$1 = state_21932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21932__$1,(4),ch);
} else {
if((state_val_21933 === (9))){
var inst_21919 = (state_21932[(9)]);
var inst_21912 = inst_21919;
var state_21932__$1 = (function (){var statearr_21943 = state_21932;
(statearr_21943[(7)] = inst_21912);

return statearr_21943;
})();
var statearr_21944_21961 = state_21932__$1;
(statearr_21944_21961[(2)] = null);

(statearr_21944_21961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (5))){
var inst_21912 = (state_21932[(7)]);
var state_21932__$1 = state_21932;
var statearr_21945_21962 = state_21932__$1;
(statearr_21945_21962[(2)] = inst_21912);

(statearr_21945_21962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (10))){
var inst_21926 = (state_21932[(2)]);
var state_21932__$1 = state_21932;
var statearr_21946_21963 = state_21932__$1;
(statearr_21946_21963[(2)] = inst_21926);

(statearr_21946_21963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21933 === (8))){
var inst_21919 = (state_21932[(9)]);
var inst_21922 = cljs.core.deref.call(null,inst_21919);
var state_21932__$1 = state_21932;
var statearr_21947_21964 = state_21932__$1;
(statearr_21947_21964[(2)] = inst_21922);

(statearr_21947_21964[(1)] = (10));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21104__auto____0 = (function (){
var statearr_21951 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21951[(0)] = cljs$core$async$reduce_$_state_machine__21104__auto__);

(statearr_21951[(1)] = (1));

return statearr_21951;
});
var cljs$core$async$reduce_$_state_machine__21104__auto____1 = (function (state_21932){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e21952){if((e21952 instanceof Object)){
var ex__21107__auto__ = e21952;
var statearr_21953_21965 = state_21932;
(statearr_21953_21965[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21966 = state_21932;
state_21932 = G__21966;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21104__auto__ = function(state_21932){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21104__auto____1.call(this,state_21932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21104__auto____0;
cljs$core$async$reduce_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21104__auto____1;
return cljs$core$async$reduce_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_21954 = f__21119__auto__.call(null);
(statearr_21954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_21954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
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
var args21967 = [];
var len__19864__auto___22019 = arguments.length;
var i__19865__auto___22020 = (0);
while(true){
if((i__19865__auto___22020 < len__19864__auto___22019)){
args21967.push((arguments[i__19865__auto___22020]));

var G__22021 = (i__19865__auto___22020 + (1));
i__19865__auto___22020 = G__22021;
continue;
} else {
}
break;
}

var G__21969 = args21967.length;
switch (G__21969) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21967.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_21994){
var state_val_21995 = (state_21994[(1)]);
if((state_val_21995 === (7))){
var inst_21976 = (state_21994[(2)]);
var state_21994__$1 = state_21994;
var statearr_21996_22023 = state_21994__$1;
(statearr_21996_22023[(2)] = inst_21976);

(statearr_21996_22023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (1))){
var inst_21970 = cljs.core.seq.call(null,coll);
var inst_21971 = inst_21970;
var state_21994__$1 = (function (){var statearr_21997 = state_21994;
(statearr_21997[(7)] = inst_21971);

return statearr_21997;
})();
var statearr_21998_22024 = state_21994__$1;
(statearr_21998_22024[(2)] = null);

(statearr_21998_22024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (4))){
var inst_21971 = (state_21994[(7)]);
var inst_21974 = cljs.core.first.call(null,inst_21971);
var state_21994__$1 = state_21994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21994__$1,(7),ch,inst_21974);
} else {
if((state_val_21995 === (13))){
var inst_21988 = (state_21994[(2)]);
var state_21994__$1 = state_21994;
var statearr_21999_22025 = state_21994__$1;
(statearr_21999_22025[(2)] = inst_21988);

(statearr_21999_22025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (6))){
var inst_21979 = (state_21994[(2)]);
var state_21994__$1 = state_21994;
if(cljs.core.truth_(inst_21979)){
var statearr_22000_22026 = state_21994__$1;
(statearr_22000_22026[(1)] = (8));

} else {
var statearr_22001_22027 = state_21994__$1;
(statearr_22001_22027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (3))){
var inst_21992 = (state_21994[(2)]);
var state_21994__$1 = state_21994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21994__$1,inst_21992);
} else {
if((state_val_21995 === (12))){
var state_21994__$1 = state_21994;
var statearr_22002_22028 = state_21994__$1;
(statearr_22002_22028[(2)] = null);

(statearr_22002_22028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (2))){
var inst_21971 = (state_21994[(7)]);
var state_21994__$1 = state_21994;
if(cljs.core.truth_(inst_21971)){
var statearr_22003_22029 = state_21994__$1;
(statearr_22003_22029[(1)] = (4));

} else {
var statearr_22004_22030 = state_21994__$1;
(statearr_22004_22030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (11))){
var inst_21985 = cljs.core.async.close_BANG_.call(null,ch);
var state_21994__$1 = state_21994;
var statearr_22005_22031 = state_21994__$1;
(statearr_22005_22031[(2)] = inst_21985);

(statearr_22005_22031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (9))){
var state_21994__$1 = state_21994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22006_22032 = state_21994__$1;
(statearr_22006_22032[(1)] = (11));

} else {
var statearr_22007_22033 = state_21994__$1;
(statearr_22007_22033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (5))){
var inst_21971 = (state_21994[(7)]);
var state_21994__$1 = state_21994;
var statearr_22008_22034 = state_21994__$1;
(statearr_22008_22034[(2)] = inst_21971);

(statearr_22008_22034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (10))){
var inst_21990 = (state_21994[(2)]);
var state_21994__$1 = state_21994;
var statearr_22009_22035 = state_21994__$1;
(statearr_22009_22035[(2)] = inst_21990);

(statearr_22009_22035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21995 === (8))){
var inst_21971 = (state_21994[(7)]);
var inst_21981 = cljs.core.next.call(null,inst_21971);
var inst_21971__$1 = inst_21981;
var state_21994__$1 = (function (){var statearr_22010 = state_21994;
(statearr_22010[(7)] = inst_21971__$1);

return statearr_22010;
})();
var statearr_22011_22036 = state_21994__$1;
(statearr_22011_22036[(2)] = null);

(statearr_22011_22036[(1)] = (2));


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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_22015 = [null,null,null,null,null,null,null,null];
(statearr_22015[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_22015[(1)] = (1));

return statearr_22015;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_21994){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_21994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e22016){if((e22016 instanceof Object)){
var ex__21107__auto__ = e22016;
var statearr_22017_22037 = state_21994;
(statearr_22017_22037[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22038 = state_21994;
state_21994 = G__22038;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_21994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_21994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_22018 = f__21119__auto__.call(null);
(statearr_22018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22264 = (function (ch,cs,meta22265){
this.ch = ch;
this.cs = cs;
this.meta22265 = meta22265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22266,meta22265__$1){
var self__ = this;
var _22266__$1 = this;
return (new cljs.core.async.t_cljs$core$async22264(self__.ch,self__.cs,meta22265__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22266){
var self__ = this;
var _22266__$1 = this;
return self__.meta22265;
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22265","meta22265",-1926621776,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22264";

cljs.core.async.t_cljs$core$async22264.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async22264");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22264 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22264(ch__$1,cs__$1,meta22265){
return (new cljs.core.async.t_cljs$core$async22264(ch__$1,cs__$1,meta22265));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22264(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21118__auto___22489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___22489,cs,m,dchan,dctr,done){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___22489,cs,m,dchan,dctr,done){
return (function (state_22401){
var state_val_22402 = (state_22401[(1)]);
if((state_val_22402 === (7))){
var inst_22397 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22403_22490 = state_22401__$1;
(statearr_22403_22490[(2)] = inst_22397);

(statearr_22403_22490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (20))){
var inst_22300 = (state_22401[(7)]);
var inst_22312 = cljs.core.first.call(null,inst_22300);
var inst_22313 = cljs.core.nth.call(null,inst_22312,(0),null);
var inst_22314 = cljs.core.nth.call(null,inst_22312,(1),null);
var state_22401__$1 = (function (){var statearr_22404 = state_22401;
(statearr_22404[(8)] = inst_22313);

return statearr_22404;
})();
if(cljs.core.truth_(inst_22314)){
var statearr_22405_22491 = state_22401__$1;
(statearr_22405_22491[(1)] = (22));

} else {
var statearr_22406_22492 = state_22401__$1;
(statearr_22406_22492[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (27))){
var inst_22344 = (state_22401[(9)]);
var inst_22269 = (state_22401[(10)]);
var inst_22349 = (state_22401[(11)]);
var inst_22342 = (state_22401[(12)]);
var inst_22349__$1 = cljs.core._nth.call(null,inst_22342,inst_22344);
var inst_22350 = cljs.core.async.put_BANG_.call(null,inst_22349__$1,inst_22269,done);
var state_22401__$1 = (function (){var statearr_22407 = state_22401;
(statearr_22407[(11)] = inst_22349__$1);

return statearr_22407;
})();
if(cljs.core.truth_(inst_22350)){
var statearr_22408_22493 = state_22401__$1;
(statearr_22408_22493[(1)] = (30));

} else {
var statearr_22409_22494 = state_22401__$1;
(statearr_22409_22494[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (1))){
var state_22401__$1 = state_22401;
var statearr_22410_22495 = state_22401__$1;
(statearr_22410_22495[(2)] = null);

(statearr_22410_22495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (24))){
var inst_22300 = (state_22401[(7)]);
var inst_22319 = (state_22401[(2)]);
var inst_22320 = cljs.core.next.call(null,inst_22300);
var inst_22278 = inst_22320;
var inst_22279 = null;
var inst_22280 = (0);
var inst_22281 = (0);
var state_22401__$1 = (function (){var statearr_22411 = state_22401;
(statearr_22411[(13)] = inst_22279);

(statearr_22411[(14)] = inst_22319);

(statearr_22411[(15)] = inst_22278);

(statearr_22411[(16)] = inst_22281);

(statearr_22411[(17)] = inst_22280);

return statearr_22411;
})();
var statearr_22412_22496 = state_22401__$1;
(statearr_22412_22496[(2)] = null);

(statearr_22412_22496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (39))){
var state_22401__$1 = state_22401;
var statearr_22416_22497 = state_22401__$1;
(statearr_22416_22497[(2)] = null);

(statearr_22416_22497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (4))){
var inst_22269 = (state_22401[(10)]);
var inst_22269__$1 = (state_22401[(2)]);
var inst_22270 = (inst_22269__$1 == null);
var state_22401__$1 = (function (){var statearr_22417 = state_22401;
(statearr_22417[(10)] = inst_22269__$1);

return statearr_22417;
})();
if(cljs.core.truth_(inst_22270)){
var statearr_22418_22498 = state_22401__$1;
(statearr_22418_22498[(1)] = (5));

} else {
var statearr_22419_22499 = state_22401__$1;
(statearr_22419_22499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (15))){
var inst_22279 = (state_22401[(13)]);
var inst_22278 = (state_22401[(15)]);
var inst_22281 = (state_22401[(16)]);
var inst_22280 = (state_22401[(17)]);
var inst_22296 = (state_22401[(2)]);
var inst_22297 = (inst_22281 + (1));
var tmp22413 = inst_22279;
var tmp22414 = inst_22278;
var tmp22415 = inst_22280;
var inst_22278__$1 = tmp22414;
var inst_22279__$1 = tmp22413;
var inst_22280__$1 = tmp22415;
var inst_22281__$1 = inst_22297;
var state_22401__$1 = (function (){var statearr_22420 = state_22401;
(statearr_22420[(13)] = inst_22279__$1);

(statearr_22420[(18)] = inst_22296);

(statearr_22420[(15)] = inst_22278__$1);

(statearr_22420[(16)] = inst_22281__$1);

(statearr_22420[(17)] = inst_22280__$1);

return statearr_22420;
})();
var statearr_22421_22500 = state_22401__$1;
(statearr_22421_22500[(2)] = null);

(statearr_22421_22500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (21))){
var inst_22323 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22425_22501 = state_22401__$1;
(statearr_22425_22501[(2)] = inst_22323);

(statearr_22425_22501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (31))){
var inst_22349 = (state_22401[(11)]);
var inst_22353 = done.call(null,null);
var inst_22354 = cljs.core.async.untap_STAR_.call(null,m,inst_22349);
var state_22401__$1 = (function (){var statearr_22426 = state_22401;
(statearr_22426[(19)] = inst_22353);

return statearr_22426;
})();
var statearr_22427_22502 = state_22401__$1;
(statearr_22427_22502[(2)] = inst_22354);

(statearr_22427_22502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (32))){
var inst_22344 = (state_22401[(9)]);
var inst_22343 = (state_22401[(20)]);
var inst_22341 = (state_22401[(21)]);
var inst_22342 = (state_22401[(12)]);
var inst_22356 = (state_22401[(2)]);
var inst_22357 = (inst_22344 + (1));
var tmp22422 = inst_22343;
var tmp22423 = inst_22341;
var tmp22424 = inst_22342;
var inst_22341__$1 = tmp22423;
var inst_22342__$1 = tmp22424;
var inst_22343__$1 = tmp22422;
var inst_22344__$1 = inst_22357;
var state_22401__$1 = (function (){var statearr_22428 = state_22401;
(statearr_22428[(9)] = inst_22344__$1);

(statearr_22428[(22)] = inst_22356);

(statearr_22428[(20)] = inst_22343__$1);

(statearr_22428[(21)] = inst_22341__$1);

(statearr_22428[(12)] = inst_22342__$1);

return statearr_22428;
})();
var statearr_22429_22503 = state_22401__$1;
(statearr_22429_22503[(2)] = null);

(statearr_22429_22503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (40))){
var inst_22369 = (state_22401[(23)]);
var inst_22373 = done.call(null,null);
var inst_22374 = cljs.core.async.untap_STAR_.call(null,m,inst_22369);
var state_22401__$1 = (function (){var statearr_22430 = state_22401;
(statearr_22430[(24)] = inst_22373);

return statearr_22430;
})();
var statearr_22431_22504 = state_22401__$1;
(statearr_22431_22504[(2)] = inst_22374);

(statearr_22431_22504[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (33))){
var inst_22360 = (state_22401[(25)]);
var inst_22362 = cljs.core.chunked_seq_QMARK_.call(null,inst_22360);
var state_22401__$1 = state_22401;
if(inst_22362){
var statearr_22432_22505 = state_22401__$1;
(statearr_22432_22505[(1)] = (36));

} else {
var statearr_22433_22506 = state_22401__$1;
(statearr_22433_22506[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (13))){
var inst_22290 = (state_22401[(26)]);
var inst_22293 = cljs.core.async.close_BANG_.call(null,inst_22290);
var state_22401__$1 = state_22401;
var statearr_22434_22507 = state_22401__$1;
(statearr_22434_22507[(2)] = inst_22293);

(statearr_22434_22507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (22))){
var inst_22313 = (state_22401[(8)]);
var inst_22316 = cljs.core.async.close_BANG_.call(null,inst_22313);
var state_22401__$1 = state_22401;
var statearr_22435_22508 = state_22401__$1;
(statearr_22435_22508[(2)] = inst_22316);

(statearr_22435_22508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (36))){
var inst_22360 = (state_22401[(25)]);
var inst_22364 = cljs.core.chunk_first.call(null,inst_22360);
var inst_22365 = cljs.core.chunk_rest.call(null,inst_22360);
var inst_22366 = cljs.core.count.call(null,inst_22364);
var inst_22341 = inst_22365;
var inst_22342 = inst_22364;
var inst_22343 = inst_22366;
var inst_22344 = (0);
var state_22401__$1 = (function (){var statearr_22436 = state_22401;
(statearr_22436[(9)] = inst_22344);

(statearr_22436[(20)] = inst_22343);

(statearr_22436[(21)] = inst_22341);

(statearr_22436[(12)] = inst_22342);

return statearr_22436;
})();
var statearr_22437_22509 = state_22401__$1;
(statearr_22437_22509[(2)] = null);

(statearr_22437_22509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (41))){
var inst_22360 = (state_22401[(25)]);
var inst_22376 = (state_22401[(2)]);
var inst_22377 = cljs.core.next.call(null,inst_22360);
var inst_22341 = inst_22377;
var inst_22342 = null;
var inst_22343 = (0);
var inst_22344 = (0);
var state_22401__$1 = (function (){var statearr_22438 = state_22401;
(statearr_22438[(9)] = inst_22344);

(statearr_22438[(27)] = inst_22376);

(statearr_22438[(20)] = inst_22343);

(statearr_22438[(21)] = inst_22341);

(statearr_22438[(12)] = inst_22342);

return statearr_22438;
})();
var statearr_22439_22510 = state_22401__$1;
(statearr_22439_22510[(2)] = null);

(statearr_22439_22510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (43))){
var state_22401__$1 = state_22401;
var statearr_22440_22511 = state_22401__$1;
(statearr_22440_22511[(2)] = null);

(statearr_22440_22511[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (29))){
var inst_22385 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22441_22512 = state_22401__$1;
(statearr_22441_22512[(2)] = inst_22385);

(statearr_22441_22512[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (44))){
var inst_22394 = (state_22401[(2)]);
var state_22401__$1 = (function (){var statearr_22442 = state_22401;
(statearr_22442[(28)] = inst_22394);

return statearr_22442;
})();
var statearr_22443_22513 = state_22401__$1;
(statearr_22443_22513[(2)] = null);

(statearr_22443_22513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (6))){
var inst_22333 = (state_22401[(29)]);
var inst_22332 = cljs.core.deref.call(null,cs);
var inst_22333__$1 = cljs.core.keys.call(null,inst_22332);
var inst_22334 = cljs.core.count.call(null,inst_22333__$1);
var inst_22335 = cljs.core.reset_BANG_.call(null,dctr,inst_22334);
var inst_22340 = cljs.core.seq.call(null,inst_22333__$1);
var inst_22341 = inst_22340;
var inst_22342 = null;
var inst_22343 = (0);
var inst_22344 = (0);
var state_22401__$1 = (function (){var statearr_22444 = state_22401;
(statearr_22444[(30)] = inst_22335);

(statearr_22444[(9)] = inst_22344);

(statearr_22444[(20)] = inst_22343);

(statearr_22444[(29)] = inst_22333__$1);

(statearr_22444[(21)] = inst_22341);

(statearr_22444[(12)] = inst_22342);

return statearr_22444;
})();
var statearr_22445_22514 = state_22401__$1;
(statearr_22445_22514[(2)] = null);

(statearr_22445_22514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (28))){
var inst_22360 = (state_22401[(25)]);
var inst_22341 = (state_22401[(21)]);
var inst_22360__$1 = cljs.core.seq.call(null,inst_22341);
var state_22401__$1 = (function (){var statearr_22446 = state_22401;
(statearr_22446[(25)] = inst_22360__$1);

return statearr_22446;
})();
if(inst_22360__$1){
var statearr_22447_22515 = state_22401__$1;
(statearr_22447_22515[(1)] = (33));

} else {
var statearr_22448_22516 = state_22401__$1;
(statearr_22448_22516[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (25))){
var inst_22344 = (state_22401[(9)]);
var inst_22343 = (state_22401[(20)]);
var inst_22346 = (inst_22344 < inst_22343);
var inst_22347 = inst_22346;
var state_22401__$1 = state_22401;
if(cljs.core.truth_(inst_22347)){
var statearr_22449_22517 = state_22401__$1;
(statearr_22449_22517[(1)] = (27));

} else {
var statearr_22450_22518 = state_22401__$1;
(statearr_22450_22518[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (34))){
var state_22401__$1 = state_22401;
var statearr_22451_22519 = state_22401__$1;
(statearr_22451_22519[(2)] = null);

(statearr_22451_22519[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (17))){
var state_22401__$1 = state_22401;
var statearr_22452_22520 = state_22401__$1;
(statearr_22452_22520[(2)] = null);

(statearr_22452_22520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (3))){
var inst_22399 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22401__$1,inst_22399);
} else {
if((state_val_22402 === (12))){
var inst_22328 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22453_22521 = state_22401__$1;
(statearr_22453_22521[(2)] = inst_22328);

(statearr_22453_22521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (2))){
var state_22401__$1 = state_22401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22401__$1,(4),ch);
} else {
if((state_val_22402 === (23))){
var state_22401__$1 = state_22401;
var statearr_22454_22522 = state_22401__$1;
(statearr_22454_22522[(2)] = null);

(statearr_22454_22522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (35))){
var inst_22383 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22455_22523 = state_22401__$1;
(statearr_22455_22523[(2)] = inst_22383);

(statearr_22455_22523[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (19))){
var inst_22300 = (state_22401[(7)]);
var inst_22304 = cljs.core.chunk_first.call(null,inst_22300);
var inst_22305 = cljs.core.chunk_rest.call(null,inst_22300);
var inst_22306 = cljs.core.count.call(null,inst_22304);
var inst_22278 = inst_22305;
var inst_22279 = inst_22304;
var inst_22280 = inst_22306;
var inst_22281 = (0);
var state_22401__$1 = (function (){var statearr_22456 = state_22401;
(statearr_22456[(13)] = inst_22279);

(statearr_22456[(15)] = inst_22278);

(statearr_22456[(16)] = inst_22281);

(statearr_22456[(17)] = inst_22280);

return statearr_22456;
})();
var statearr_22457_22524 = state_22401__$1;
(statearr_22457_22524[(2)] = null);

(statearr_22457_22524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (11))){
var inst_22300 = (state_22401[(7)]);
var inst_22278 = (state_22401[(15)]);
var inst_22300__$1 = cljs.core.seq.call(null,inst_22278);
var state_22401__$1 = (function (){var statearr_22458 = state_22401;
(statearr_22458[(7)] = inst_22300__$1);

return statearr_22458;
})();
if(inst_22300__$1){
var statearr_22459_22525 = state_22401__$1;
(statearr_22459_22525[(1)] = (16));

} else {
var statearr_22460_22526 = state_22401__$1;
(statearr_22460_22526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (9))){
var inst_22330 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22461_22527 = state_22401__$1;
(statearr_22461_22527[(2)] = inst_22330);

(statearr_22461_22527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (5))){
var inst_22276 = cljs.core.deref.call(null,cs);
var inst_22277 = cljs.core.seq.call(null,inst_22276);
var inst_22278 = inst_22277;
var inst_22279 = null;
var inst_22280 = (0);
var inst_22281 = (0);
var state_22401__$1 = (function (){var statearr_22462 = state_22401;
(statearr_22462[(13)] = inst_22279);

(statearr_22462[(15)] = inst_22278);

(statearr_22462[(16)] = inst_22281);

(statearr_22462[(17)] = inst_22280);

return statearr_22462;
})();
var statearr_22463_22528 = state_22401__$1;
(statearr_22463_22528[(2)] = null);

(statearr_22463_22528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (14))){
var state_22401__$1 = state_22401;
var statearr_22464_22529 = state_22401__$1;
(statearr_22464_22529[(2)] = null);

(statearr_22464_22529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (45))){
var inst_22391 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22465_22530 = state_22401__$1;
(statearr_22465_22530[(2)] = inst_22391);

(statearr_22465_22530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (26))){
var inst_22333 = (state_22401[(29)]);
var inst_22387 = (state_22401[(2)]);
var inst_22388 = cljs.core.seq.call(null,inst_22333);
var state_22401__$1 = (function (){var statearr_22466 = state_22401;
(statearr_22466[(31)] = inst_22387);

return statearr_22466;
})();
if(inst_22388){
var statearr_22467_22531 = state_22401__$1;
(statearr_22467_22531[(1)] = (42));

} else {
var statearr_22468_22532 = state_22401__$1;
(statearr_22468_22532[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (16))){
var inst_22300 = (state_22401[(7)]);
var inst_22302 = cljs.core.chunked_seq_QMARK_.call(null,inst_22300);
var state_22401__$1 = state_22401;
if(inst_22302){
var statearr_22469_22533 = state_22401__$1;
(statearr_22469_22533[(1)] = (19));

} else {
var statearr_22470_22534 = state_22401__$1;
(statearr_22470_22534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (38))){
var inst_22380 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22471_22535 = state_22401__$1;
(statearr_22471_22535[(2)] = inst_22380);

(statearr_22471_22535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (30))){
var state_22401__$1 = state_22401;
var statearr_22472_22536 = state_22401__$1;
(statearr_22472_22536[(2)] = null);

(statearr_22472_22536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (10))){
var inst_22279 = (state_22401[(13)]);
var inst_22281 = (state_22401[(16)]);
var inst_22289 = cljs.core._nth.call(null,inst_22279,inst_22281);
var inst_22290 = cljs.core.nth.call(null,inst_22289,(0),null);
var inst_22291 = cljs.core.nth.call(null,inst_22289,(1),null);
var state_22401__$1 = (function (){var statearr_22473 = state_22401;
(statearr_22473[(26)] = inst_22290);

return statearr_22473;
})();
if(cljs.core.truth_(inst_22291)){
var statearr_22474_22537 = state_22401__$1;
(statearr_22474_22537[(1)] = (13));

} else {
var statearr_22475_22538 = state_22401__$1;
(statearr_22475_22538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (18))){
var inst_22326 = (state_22401[(2)]);
var state_22401__$1 = state_22401;
var statearr_22476_22539 = state_22401__$1;
(statearr_22476_22539[(2)] = inst_22326);

(statearr_22476_22539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (42))){
var state_22401__$1 = state_22401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22401__$1,(45),dchan);
} else {
if((state_val_22402 === (37))){
var inst_22269 = (state_22401[(10)]);
var inst_22360 = (state_22401[(25)]);
var inst_22369 = (state_22401[(23)]);
var inst_22369__$1 = cljs.core.first.call(null,inst_22360);
var inst_22370 = cljs.core.async.put_BANG_.call(null,inst_22369__$1,inst_22269,done);
var state_22401__$1 = (function (){var statearr_22477 = state_22401;
(statearr_22477[(23)] = inst_22369__$1);

return statearr_22477;
})();
if(cljs.core.truth_(inst_22370)){
var statearr_22478_22540 = state_22401__$1;
(statearr_22478_22540[(1)] = (39));

} else {
var statearr_22479_22541 = state_22401__$1;
(statearr_22479_22541[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22402 === (8))){
var inst_22281 = (state_22401[(16)]);
var inst_22280 = (state_22401[(17)]);
var inst_22283 = (inst_22281 < inst_22280);
var inst_22284 = inst_22283;
var state_22401__$1 = state_22401;
if(cljs.core.truth_(inst_22284)){
var statearr_22480_22542 = state_22401__$1;
(statearr_22480_22542[(1)] = (10));

} else {
var statearr_22481_22543 = state_22401__$1;
(statearr_22481_22543[(1)] = (11));

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
});})(c__21118__auto___22489,cs,m,dchan,dctr,done))
;
return ((function (switch__21103__auto__,c__21118__auto___22489,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21104__auto__ = null;
var cljs$core$async$mult_$_state_machine__21104__auto____0 = (function (){
var statearr_22485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22485[(0)] = cljs$core$async$mult_$_state_machine__21104__auto__);

(statearr_22485[(1)] = (1));

return statearr_22485;
});
var cljs$core$async$mult_$_state_machine__21104__auto____1 = (function (state_22401){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_22401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e22486){if((e22486 instanceof Object)){
var ex__21107__auto__ = e22486;
var statearr_22487_22544 = state_22401;
(statearr_22487_22544[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22545 = state_22401;
state_22401 = G__22545;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21104__auto__ = function(state_22401){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21104__auto____1.call(this,state_22401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21104__auto____0;
cljs$core$async$mult_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21104__auto____1;
return cljs$core$async$mult_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___22489,cs,m,dchan,dctr,done))
})();
var state__21120__auto__ = (function (){var statearr_22488 = f__21119__auto__.call(null);
(statearr_22488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___22489);

return statearr_22488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___22489,cs,m,dchan,dctr,done))
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
var args22546 = [];
var len__19864__auto___22549 = arguments.length;
var i__19865__auto___22550 = (0);
while(true){
if((i__19865__auto___22550 < len__19864__auto___22549)){
args22546.push((arguments[i__19865__auto___22550]));

var G__22551 = (i__19865__auto___22550 + (1));
i__19865__auto___22550 = G__22551;
continue;
} else {
}
break;
}

var G__22548 = args22546.length;
switch (G__22548) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22546.length)].join('')));

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
var len__19864__auto___22563 = arguments.length;
var i__19865__auto___22564 = (0);
while(true){
if((i__19865__auto___22564 < len__19864__auto___22563)){
args__19871__auto__.push((arguments[i__19865__auto___22564]));

var G__22565 = (i__19865__auto___22564 + (1));
i__19865__auto___22564 = G__22565;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22557){
var map__22558 = p__22557;
var map__22558__$1 = ((((!((map__22558 == null)))?((((map__22558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22558):map__22558);
var opts = map__22558__$1;
var statearr_22560_22566 = state;
(statearr_22560_22566[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22558,map__22558__$1,opts){
return (function (val){
var statearr_22561_22567 = state;
(statearr_22561_22567[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22558,map__22558__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22562_22568 = state;
(statearr_22562_22568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22553){
var G__22554 = cljs.core.first.call(null,seq22553);
var seq22553__$1 = cljs.core.next.call(null,seq22553);
var G__22555 = cljs.core.first.call(null,seq22553__$1);
var seq22553__$2 = cljs.core.next.call(null,seq22553__$1);
var G__22556 = cljs.core.first.call(null,seq22553__$2);
var seq22553__$3 = cljs.core.next.call(null,seq22553__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22554,G__22555,G__22556,seq22553__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22736 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22737){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22738,meta22737__$1){
var self__ = this;
var _22738__$1 = this;
return (new cljs.core.async.t_cljs$core$async22736(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22737__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22738){
var self__ = this;
var _22738__$1 = this;
return self__.meta22737;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22736.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22737","meta22737",-1929417123,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22736";

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async22736");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22736 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22736(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22737){
return (new cljs.core.async.t_cljs$core$async22736(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22737));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22736(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21118__auto___22903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22840){
var state_val_22841 = (state_22840[(1)]);
if((state_val_22841 === (7))){
var inst_22755 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
var statearr_22842_22904 = state_22840__$1;
(statearr_22842_22904[(2)] = inst_22755);

(statearr_22842_22904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (20))){
var inst_22767 = (state_22840[(7)]);
var state_22840__$1 = state_22840;
var statearr_22843_22905 = state_22840__$1;
(statearr_22843_22905[(2)] = inst_22767);

(statearr_22843_22905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (27))){
var state_22840__$1 = state_22840;
var statearr_22844_22906 = state_22840__$1;
(statearr_22844_22906[(2)] = null);

(statearr_22844_22906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (1))){
var inst_22742 = (state_22840[(8)]);
var inst_22742__$1 = calc_state.call(null);
var inst_22744 = (inst_22742__$1 == null);
var inst_22745 = cljs.core.not.call(null,inst_22744);
var state_22840__$1 = (function (){var statearr_22845 = state_22840;
(statearr_22845[(8)] = inst_22742__$1);

return statearr_22845;
})();
if(inst_22745){
var statearr_22846_22907 = state_22840__$1;
(statearr_22846_22907[(1)] = (2));

} else {
var statearr_22847_22908 = state_22840__$1;
(statearr_22847_22908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (24))){
var inst_22791 = (state_22840[(9)]);
var inst_22814 = (state_22840[(10)]);
var inst_22800 = (state_22840[(11)]);
var inst_22814__$1 = inst_22791.call(null,inst_22800);
var state_22840__$1 = (function (){var statearr_22848 = state_22840;
(statearr_22848[(10)] = inst_22814__$1);

return statearr_22848;
})();
if(cljs.core.truth_(inst_22814__$1)){
var statearr_22849_22909 = state_22840__$1;
(statearr_22849_22909[(1)] = (29));

} else {
var statearr_22850_22910 = state_22840__$1;
(statearr_22850_22910[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (4))){
var inst_22758 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22758)){
var statearr_22851_22911 = state_22840__$1;
(statearr_22851_22911[(1)] = (8));

} else {
var statearr_22852_22912 = state_22840__$1;
(statearr_22852_22912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (15))){
var inst_22785 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22785)){
var statearr_22853_22913 = state_22840__$1;
(statearr_22853_22913[(1)] = (19));

} else {
var statearr_22854_22914 = state_22840__$1;
(statearr_22854_22914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (21))){
var inst_22790 = (state_22840[(12)]);
var inst_22790__$1 = (state_22840[(2)]);
var inst_22791 = cljs.core.get.call(null,inst_22790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22792 = cljs.core.get.call(null,inst_22790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22793 = cljs.core.get.call(null,inst_22790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22840__$1 = (function (){var statearr_22855 = state_22840;
(statearr_22855[(13)] = inst_22792);

(statearr_22855[(9)] = inst_22791);

(statearr_22855[(12)] = inst_22790__$1);

return statearr_22855;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22840__$1,(22),inst_22793);
} else {
if((state_val_22841 === (31))){
var inst_22822 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22822)){
var statearr_22856_22915 = state_22840__$1;
(statearr_22856_22915[(1)] = (32));

} else {
var statearr_22857_22916 = state_22840__$1;
(statearr_22857_22916[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (32))){
var inst_22799 = (state_22840[(14)]);
var state_22840__$1 = state_22840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22840__$1,(35),out,inst_22799);
} else {
if((state_val_22841 === (33))){
var inst_22790 = (state_22840[(12)]);
var inst_22767 = inst_22790;
var state_22840__$1 = (function (){var statearr_22858 = state_22840;
(statearr_22858[(7)] = inst_22767);

return statearr_22858;
})();
var statearr_22859_22917 = state_22840__$1;
(statearr_22859_22917[(2)] = null);

(statearr_22859_22917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (13))){
var inst_22767 = (state_22840[(7)]);
var inst_22774 = inst_22767.cljs$lang$protocol_mask$partition0$;
var inst_22775 = (inst_22774 & (64));
var inst_22776 = inst_22767.cljs$core$ISeq$;
var inst_22777 = (cljs.core.PROTOCOL_SENTINEL === inst_22776);
var inst_22778 = (inst_22775) || (inst_22777);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22778)){
var statearr_22860_22918 = state_22840__$1;
(statearr_22860_22918[(1)] = (16));

} else {
var statearr_22861_22919 = state_22840__$1;
(statearr_22861_22919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (22))){
var inst_22799 = (state_22840[(14)]);
var inst_22800 = (state_22840[(11)]);
var inst_22798 = (state_22840[(2)]);
var inst_22799__$1 = cljs.core.nth.call(null,inst_22798,(0),null);
var inst_22800__$1 = cljs.core.nth.call(null,inst_22798,(1),null);
var inst_22801 = (inst_22799__$1 == null);
var inst_22802 = cljs.core._EQ_.call(null,inst_22800__$1,change);
var inst_22803 = (inst_22801) || (inst_22802);
var state_22840__$1 = (function (){var statearr_22862 = state_22840;
(statearr_22862[(14)] = inst_22799__$1);

(statearr_22862[(11)] = inst_22800__$1);

return statearr_22862;
})();
if(cljs.core.truth_(inst_22803)){
var statearr_22863_22920 = state_22840__$1;
(statearr_22863_22920[(1)] = (23));

} else {
var statearr_22864_22921 = state_22840__$1;
(statearr_22864_22921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (36))){
var inst_22790 = (state_22840[(12)]);
var inst_22767 = inst_22790;
var state_22840__$1 = (function (){var statearr_22865 = state_22840;
(statearr_22865[(7)] = inst_22767);

return statearr_22865;
})();
var statearr_22866_22922 = state_22840__$1;
(statearr_22866_22922[(2)] = null);

(statearr_22866_22922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (29))){
var inst_22814 = (state_22840[(10)]);
var state_22840__$1 = state_22840;
var statearr_22867_22923 = state_22840__$1;
(statearr_22867_22923[(2)] = inst_22814);

(statearr_22867_22923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (6))){
var state_22840__$1 = state_22840;
var statearr_22868_22924 = state_22840__$1;
(statearr_22868_22924[(2)] = false);

(statearr_22868_22924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (28))){
var inst_22810 = (state_22840[(2)]);
var inst_22811 = calc_state.call(null);
var inst_22767 = inst_22811;
var state_22840__$1 = (function (){var statearr_22869 = state_22840;
(statearr_22869[(7)] = inst_22767);

(statearr_22869[(15)] = inst_22810);

return statearr_22869;
})();
var statearr_22870_22925 = state_22840__$1;
(statearr_22870_22925[(2)] = null);

(statearr_22870_22925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (25))){
var inst_22836 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
var statearr_22871_22926 = state_22840__$1;
(statearr_22871_22926[(2)] = inst_22836);

(statearr_22871_22926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (34))){
var inst_22834 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
var statearr_22872_22927 = state_22840__$1;
(statearr_22872_22927[(2)] = inst_22834);

(statearr_22872_22927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (17))){
var state_22840__$1 = state_22840;
var statearr_22873_22928 = state_22840__$1;
(statearr_22873_22928[(2)] = false);

(statearr_22873_22928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (3))){
var state_22840__$1 = state_22840;
var statearr_22874_22929 = state_22840__$1;
(statearr_22874_22929[(2)] = false);

(statearr_22874_22929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (12))){
var inst_22838 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22840__$1,inst_22838);
} else {
if((state_val_22841 === (2))){
var inst_22742 = (state_22840[(8)]);
var inst_22747 = inst_22742.cljs$lang$protocol_mask$partition0$;
var inst_22748 = (inst_22747 & (64));
var inst_22749 = inst_22742.cljs$core$ISeq$;
var inst_22750 = (cljs.core.PROTOCOL_SENTINEL === inst_22749);
var inst_22751 = (inst_22748) || (inst_22750);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22751)){
var statearr_22875_22930 = state_22840__$1;
(statearr_22875_22930[(1)] = (5));

} else {
var statearr_22876_22931 = state_22840__$1;
(statearr_22876_22931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (23))){
var inst_22799 = (state_22840[(14)]);
var inst_22805 = (inst_22799 == null);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22805)){
var statearr_22877_22932 = state_22840__$1;
(statearr_22877_22932[(1)] = (26));

} else {
var statearr_22878_22933 = state_22840__$1;
(statearr_22878_22933[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (35))){
var inst_22825 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
if(cljs.core.truth_(inst_22825)){
var statearr_22879_22934 = state_22840__$1;
(statearr_22879_22934[(1)] = (36));

} else {
var statearr_22880_22935 = state_22840__$1;
(statearr_22880_22935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (19))){
var inst_22767 = (state_22840[(7)]);
var inst_22787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22767);
var state_22840__$1 = state_22840;
var statearr_22881_22936 = state_22840__$1;
(statearr_22881_22936[(2)] = inst_22787);

(statearr_22881_22936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (11))){
var inst_22767 = (state_22840[(7)]);
var inst_22771 = (inst_22767 == null);
var inst_22772 = cljs.core.not.call(null,inst_22771);
var state_22840__$1 = state_22840;
if(inst_22772){
var statearr_22882_22937 = state_22840__$1;
(statearr_22882_22937[(1)] = (13));

} else {
var statearr_22883_22938 = state_22840__$1;
(statearr_22883_22938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (9))){
var inst_22742 = (state_22840[(8)]);
var state_22840__$1 = state_22840;
var statearr_22884_22939 = state_22840__$1;
(statearr_22884_22939[(2)] = inst_22742);

(statearr_22884_22939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (5))){
var state_22840__$1 = state_22840;
var statearr_22885_22940 = state_22840__$1;
(statearr_22885_22940[(2)] = true);

(statearr_22885_22940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (14))){
var state_22840__$1 = state_22840;
var statearr_22886_22941 = state_22840__$1;
(statearr_22886_22941[(2)] = false);

(statearr_22886_22941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (26))){
var inst_22800 = (state_22840[(11)]);
var inst_22807 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22800);
var state_22840__$1 = state_22840;
var statearr_22887_22942 = state_22840__$1;
(statearr_22887_22942[(2)] = inst_22807);

(statearr_22887_22942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (16))){
var state_22840__$1 = state_22840;
var statearr_22888_22943 = state_22840__$1;
(statearr_22888_22943[(2)] = true);

(statearr_22888_22943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (38))){
var inst_22830 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
var statearr_22889_22944 = state_22840__$1;
(statearr_22889_22944[(2)] = inst_22830);

(statearr_22889_22944[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (30))){
var inst_22792 = (state_22840[(13)]);
var inst_22791 = (state_22840[(9)]);
var inst_22800 = (state_22840[(11)]);
var inst_22817 = cljs.core.empty_QMARK_.call(null,inst_22791);
var inst_22818 = inst_22792.call(null,inst_22800);
var inst_22819 = cljs.core.not.call(null,inst_22818);
var inst_22820 = (inst_22817) && (inst_22819);
var state_22840__$1 = state_22840;
var statearr_22890_22945 = state_22840__$1;
(statearr_22890_22945[(2)] = inst_22820);

(statearr_22890_22945[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (10))){
var inst_22742 = (state_22840[(8)]);
var inst_22763 = (state_22840[(2)]);
var inst_22764 = cljs.core.get.call(null,inst_22763,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22765 = cljs.core.get.call(null,inst_22763,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22766 = cljs.core.get.call(null,inst_22763,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22767 = inst_22742;
var state_22840__$1 = (function (){var statearr_22891 = state_22840;
(statearr_22891[(16)] = inst_22766);

(statearr_22891[(17)] = inst_22764);

(statearr_22891[(18)] = inst_22765);

(statearr_22891[(7)] = inst_22767);

return statearr_22891;
})();
var statearr_22892_22946 = state_22840__$1;
(statearr_22892_22946[(2)] = null);

(statearr_22892_22946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (18))){
var inst_22782 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
var statearr_22893_22947 = state_22840__$1;
(statearr_22893_22947[(2)] = inst_22782);

(statearr_22893_22947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (37))){
var state_22840__$1 = state_22840;
var statearr_22894_22948 = state_22840__$1;
(statearr_22894_22948[(2)] = null);

(statearr_22894_22948[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (8))){
var inst_22742 = (state_22840[(8)]);
var inst_22760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22742);
var state_22840__$1 = state_22840;
var statearr_22895_22949 = state_22840__$1;
(statearr_22895_22949[(2)] = inst_22760);

(statearr_22895_22949[(1)] = (10));


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
});})(c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21103__auto__,c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21104__auto__ = null;
var cljs$core$async$mix_$_state_machine__21104__auto____0 = (function (){
var statearr_22899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22899[(0)] = cljs$core$async$mix_$_state_machine__21104__auto__);

(statearr_22899[(1)] = (1));

return statearr_22899;
});
var cljs$core$async$mix_$_state_machine__21104__auto____1 = (function (state_22840){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_22840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e22900){if((e22900 instanceof Object)){
var ex__21107__auto__ = e22900;
var statearr_22901_22950 = state_22840;
(statearr_22901_22950[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22951 = state_22840;
state_22840 = G__22951;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21104__auto__ = function(state_22840){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21104__auto____1.call(this,state_22840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21104__auto____0;
cljs$core$async$mix_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21104__auto____1;
return cljs$core$async$mix_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21120__auto__ = (function (){var statearr_22902 = f__21119__auto__.call(null);
(statearr_22902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___22903);

return statearr_22902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___22903,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22952 = [];
var len__19864__auto___22955 = arguments.length;
var i__19865__auto___22956 = (0);
while(true){
if((i__19865__auto___22956 < len__19864__auto___22955)){
args22952.push((arguments[i__19865__auto___22956]));

var G__22957 = (i__19865__auto___22956 + (1));
i__19865__auto___22956 = G__22957;
continue;
} else {
}
break;
}

var G__22954 = args22952.length;
switch (G__22954) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22952.length)].join('')));

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
var args22960 = [];
var len__19864__auto___23085 = arguments.length;
var i__19865__auto___23086 = (0);
while(true){
if((i__19865__auto___23086 < len__19864__auto___23085)){
args22960.push((arguments[i__19865__auto___23086]));

var G__23087 = (i__19865__auto___23086 + (1));
i__19865__auto___23086 = G__23087;
continue;
} else {
}
break;
}

var G__22962 = args22960.length;
switch (G__22962) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22960.length)].join('')));

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
return (function (p1__22959_SHARP_){
if(cljs.core.truth_(p1__22959_SHARP_.call(null,topic))){
return p1__22959_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22959_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18756__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22963 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22964){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22964 = meta22964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22965,meta22964__$1){
var self__ = this;
var _22965__$1 = this;
return (new cljs.core.async.t_cljs$core$async22963(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22964__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22965){
var self__ = this;
var _22965__$1 = this;
return self__.meta22964;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22964","meta22964",223379283,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22963";

cljs.core.async.t_cljs$core$async22963.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async22963");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22963 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22964){
return (new cljs.core.async.t_cljs$core$async22963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22964));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22963(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21118__auto___23089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23089,mults,ensure_mult,p){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23089,mults,ensure_mult,p){
return (function (state_23037){
var state_val_23038 = (state_23037[(1)]);
if((state_val_23038 === (7))){
var inst_23033 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23039_23090 = state_23037__$1;
(statearr_23039_23090[(2)] = inst_23033);

(statearr_23039_23090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (20))){
var state_23037__$1 = state_23037;
var statearr_23040_23091 = state_23037__$1;
(statearr_23040_23091[(2)] = null);

(statearr_23040_23091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (1))){
var state_23037__$1 = state_23037;
var statearr_23041_23092 = state_23037__$1;
(statearr_23041_23092[(2)] = null);

(statearr_23041_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (24))){
var inst_23016 = (state_23037[(7)]);
var inst_23025 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23016);
var state_23037__$1 = state_23037;
var statearr_23042_23093 = state_23037__$1;
(statearr_23042_23093[(2)] = inst_23025);

(statearr_23042_23093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (4))){
var inst_22968 = (state_23037[(8)]);
var inst_22968__$1 = (state_23037[(2)]);
var inst_22969 = (inst_22968__$1 == null);
var state_23037__$1 = (function (){var statearr_23043 = state_23037;
(statearr_23043[(8)] = inst_22968__$1);

return statearr_23043;
})();
if(cljs.core.truth_(inst_22969)){
var statearr_23044_23094 = state_23037__$1;
(statearr_23044_23094[(1)] = (5));

} else {
var statearr_23045_23095 = state_23037__$1;
(statearr_23045_23095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (15))){
var inst_23010 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23046_23096 = state_23037__$1;
(statearr_23046_23096[(2)] = inst_23010);

(statearr_23046_23096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (21))){
var inst_23030 = (state_23037[(2)]);
var state_23037__$1 = (function (){var statearr_23047 = state_23037;
(statearr_23047[(9)] = inst_23030);

return statearr_23047;
})();
var statearr_23048_23097 = state_23037__$1;
(statearr_23048_23097[(2)] = null);

(statearr_23048_23097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (13))){
var inst_22992 = (state_23037[(10)]);
var inst_22994 = cljs.core.chunked_seq_QMARK_.call(null,inst_22992);
var state_23037__$1 = state_23037;
if(inst_22994){
var statearr_23049_23098 = state_23037__$1;
(statearr_23049_23098[(1)] = (16));

} else {
var statearr_23050_23099 = state_23037__$1;
(statearr_23050_23099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (22))){
var inst_23022 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
if(cljs.core.truth_(inst_23022)){
var statearr_23051_23100 = state_23037__$1;
(statearr_23051_23100[(1)] = (23));

} else {
var statearr_23052_23101 = state_23037__$1;
(statearr_23052_23101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (6))){
var inst_23016 = (state_23037[(7)]);
var inst_23018 = (state_23037[(11)]);
var inst_22968 = (state_23037[(8)]);
var inst_23016__$1 = topic_fn.call(null,inst_22968);
var inst_23017 = cljs.core.deref.call(null,mults);
var inst_23018__$1 = cljs.core.get.call(null,inst_23017,inst_23016__$1);
var state_23037__$1 = (function (){var statearr_23053 = state_23037;
(statearr_23053[(7)] = inst_23016__$1);

(statearr_23053[(11)] = inst_23018__$1);

return statearr_23053;
})();
if(cljs.core.truth_(inst_23018__$1)){
var statearr_23054_23102 = state_23037__$1;
(statearr_23054_23102[(1)] = (19));

} else {
var statearr_23055_23103 = state_23037__$1;
(statearr_23055_23103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (25))){
var inst_23027 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23056_23104 = state_23037__$1;
(statearr_23056_23104[(2)] = inst_23027);

(statearr_23056_23104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (17))){
var inst_22992 = (state_23037[(10)]);
var inst_23001 = cljs.core.first.call(null,inst_22992);
var inst_23002 = cljs.core.async.muxch_STAR_.call(null,inst_23001);
var inst_23003 = cljs.core.async.close_BANG_.call(null,inst_23002);
var inst_23004 = cljs.core.next.call(null,inst_22992);
var inst_22978 = inst_23004;
var inst_22979 = null;
var inst_22980 = (0);
var inst_22981 = (0);
var state_23037__$1 = (function (){var statearr_23057 = state_23037;
(statearr_23057[(12)] = inst_22981);

(statearr_23057[(13)] = inst_22980);

(statearr_23057[(14)] = inst_22978);

(statearr_23057[(15)] = inst_22979);

(statearr_23057[(16)] = inst_23003);

return statearr_23057;
})();
var statearr_23058_23105 = state_23037__$1;
(statearr_23058_23105[(2)] = null);

(statearr_23058_23105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (3))){
var inst_23035 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23037__$1,inst_23035);
} else {
if((state_val_23038 === (12))){
var inst_23012 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23059_23106 = state_23037__$1;
(statearr_23059_23106[(2)] = inst_23012);

(statearr_23059_23106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (2))){
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23037__$1,(4),ch);
} else {
if((state_val_23038 === (23))){
var state_23037__$1 = state_23037;
var statearr_23060_23107 = state_23037__$1;
(statearr_23060_23107[(2)] = null);

(statearr_23060_23107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (19))){
var inst_23018 = (state_23037[(11)]);
var inst_22968 = (state_23037[(8)]);
var inst_23020 = cljs.core.async.muxch_STAR_.call(null,inst_23018);
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23037__$1,(22),inst_23020,inst_22968);
} else {
if((state_val_23038 === (11))){
var inst_22992 = (state_23037[(10)]);
var inst_22978 = (state_23037[(14)]);
var inst_22992__$1 = cljs.core.seq.call(null,inst_22978);
var state_23037__$1 = (function (){var statearr_23061 = state_23037;
(statearr_23061[(10)] = inst_22992__$1);

return statearr_23061;
})();
if(inst_22992__$1){
var statearr_23062_23108 = state_23037__$1;
(statearr_23062_23108[(1)] = (13));

} else {
var statearr_23063_23109 = state_23037__$1;
(statearr_23063_23109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (9))){
var inst_23014 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23064_23110 = state_23037__$1;
(statearr_23064_23110[(2)] = inst_23014);

(statearr_23064_23110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (5))){
var inst_22975 = cljs.core.deref.call(null,mults);
var inst_22976 = cljs.core.vals.call(null,inst_22975);
var inst_22977 = cljs.core.seq.call(null,inst_22976);
var inst_22978 = inst_22977;
var inst_22979 = null;
var inst_22980 = (0);
var inst_22981 = (0);
var state_23037__$1 = (function (){var statearr_23065 = state_23037;
(statearr_23065[(12)] = inst_22981);

(statearr_23065[(13)] = inst_22980);

(statearr_23065[(14)] = inst_22978);

(statearr_23065[(15)] = inst_22979);

return statearr_23065;
})();
var statearr_23066_23111 = state_23037__$1;
(statearr_23066_23111[(2)] = null);

(statearr_23066_23111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (14))){
var state_23037__$1 = state_23037;
var statearr_23070_23112 = state_23037__$1;
(statearr_23070_23112[(2)] = null);

(statearr_23070_23112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (16))){
var inst_22992 = (state_23037[(10)]);
var inst_22996 = cljs.core.chunk_first.call(null,inst_22992);
var inst_22997 = cljs.core.chunk_rest.call(null,inst_22992);
var inst_22998 = cljs.core.count.call(null,inst_22996);
var inst_22978 = inst_22997;
var inst_22979 = inst_22996;
var inst_22980 = inst_22998;
var inst_22981 = (0);
var state_23037__$1 = (function (){var statearr_23071 = state_23037;
(statearr_23071[(12)] = inst_22981);

(statearr_23071[(13)] = inst_22980);

(statearr_23071[(14)] = inst_22978);

(statearr_23071[(15)] = inst_22979);

return statearr_23071;
})();
var statearr_23072_23113 = state_23037__$1;
(statearr_23072_23113[(2)] = null);

(statearr_23072_23113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (10))){
var inst_22981 = (state_23037[(12)]);
var inst_22980 = (state_23037[(13)]);
var inst_22978 = (state_23037[(14)]);
var inst_22979 = (state_23037[(15)]);
var inst_22986 = cljs.core._nth.call(null,inst_22979,inst_22981);
var inst_22987 = cljs.core.async.muxch_STAR_.call(null,inst_22986);
var inst_22988 = cljs.core.async.close_BANG_.call(null,inst_22987);
var inst_22989 = (inst_22981 + (1));
var tmp23067 = inst_22980;
var tmp23068 = inst_22978;
var tmp23069 = inst_22979;
var inst_22978__$1 = tmp23068;
var inst_22979__$1 = tmp23069;
var inst_22980__$1 = tmp23067;
var inst_22981__$1 = inst_22989;
var state_23037__$1 = (function (){var statearr_23073 = state_23037;
(statearr_23073[(12)] = inst_22981__$1);

(statearr_23073[(13)] = inst_22980__$1);

(statearr_23073[(17)] = inst_22988);

(statearr_23073[(14)] = inst_22978__$1);

(statearr_23073[(15)] = inst_22979__$1);

return statearr_23073;
})();
var statearr_23074_23114 = state_23037__$1;
(statearr_23074_23114[(2)] = null);

(statearr_23074_23114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (18))){
var inst_23007 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23075_23115 = state_23037__$1;
(statearr_23075_23115[(2)] = inst_23007);

(statearr_23075_23115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (8))){
var inst_22981 = (state_23037[(12)]);
var inst_22980 = (state_23037[(13)]);
var inst_22983 = (inst_22981 < inst_22980);
var inst_22984 = inst_22983;
var state_23037__$1 = state_23037;
if(cljs.core.truth_(inst_22984)){
var statearr_23076_23116 = state_23037__$1;
(statearr_23076_23116[(1)] = (10));

} else {
var statearr_23077_23117 = state_23037__$1;
(statearr_23077_23117[(1)] = (11));

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
});})(c__21118__auto___23089,mults,ensure_mult,p))
;
return ((function (switch__21103__auto__,c__21118__auto___23089,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23081[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23081[(1)] = (1));

return statearr_23081;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23037){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23082){if((e23082 instanceof Object)){
var ex__21107__auto__ = e23082;
var statearr_23083_23118 = state_23037;
(statearr_23083_23118[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23119 = state_23037;
state_23037 = G__23119;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23089,mults,ensure_mult,p))
})();
var state__21120__auto__ = (function (){var statearr_23084 = f__21119__auto__.call(null);
(statearr_23084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23089);

return statearr_23084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23089,mults,ensure_mult,p))
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
var args23120 = [];
var len__19864__auto___23123 = arguments.length;
var i__19865__auto___23124 = (0);
while(true){
if((i__19865__auto___23124 < len__19864__auto___23123)){
args23120.push((arguments[i__19865__auto___23124]));

var G__23125 = (i__19865__auto___23124 + (1));
i__19865__auto___23124 = G__23125;
continue;
} else {
}
break;
}

var G__23122 = args23120.length;
switch (G__23122) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23120.length)].join('')));

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
var args23127 = [];
var len__19864__auto___23130 = arguments.length;
var i__19865__auto___23131 = (0);
while(true){
if((i__19865__auto___23131 < len__19864__auto___23130)){
args23127.push((arguments[i__19865__auto___23131]));

var G__23132 = (i__19865__auto___23131 + (1));
i__19865__auto___23131 = G__23132;
continue;
} else {
}
break;
}

var G__23129 = args23127.length;
switch (G__23129) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23127.length)].join('')));

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
var args23134 = [];
var len__19864__auto___23205 = arguments.length;
var i__19865__auto___23206 = (0);
while(true){
if((i__19865__auto___23206 < len__19864__auto___23205)){
args23134.push((arguments[i__19865__auto___23206]));

var G__23207 = (i__19865__auto___23206 + (1));
i__19865__auto___23206 = G__23207;
continue;
} else {
}
break;
}

var G__23136 = args23134.length;
switch (G__23136) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23134.length)].join('')));

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
var c__21118__auto___23209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23175){
var state_val_23176 = (state_23175[(1)]);
if((state_val_23176 === (7))){
var state_23175__$1 = state_23175;
var statearr_23177_23210 = state_23175__$1;
(statearr_23177_23210[(2)] = null);

(statearr_23177_23210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (1))){
var state_23175__$1 = state_23175;
var statearr_23178_23211 = state_23175__$1;
(statearr_23178_23211[(2)] = null);

(statearr_23178_23211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (4))){
var inst_23139 = (state_23175[(7)]);
var inst_23141 = (inst_23139 < cnt);
var state_23175__$1 = state_23175;
if(cljs.core.truth_(inst_23141)){
var statearr_23179_23212 = state_23175__$1;
(statearr_23179_23212[(1)] = (6));

} else {
var statearr_23180_23213 = state_23175__$1;
(statearr_23180_23213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (15))){
var inst_23171 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23181_23214 = state_23175__$1;
(statearr_23181_23214[(2)] = inst_23171);

(statearr_23181_23214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (13))){
var inst_23164 = cljs.core.async.close_BANG_.call(null,out);
var state_23175__$1 = state_23175;
var statearr_23182_23215 = state_23175__$1;
(statearr_23182_23215[(2)] = inst_23164);

(statearr_23182_23215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (6))){
var state_23175__$1 = state_23175;
var statearr_23183_23216 = state_23175__$1;
(statearr_23183_23216[(2)] = null);

(statearr_23183_23216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (3))){
var inst_23173 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23175__$1,inst_23173);
} else {
if((state_val_23176 === (12))){
var inst_23161 = (state_23175[(8)]);
var inst_23161__$1 = (state_23175[(2)]);
var inst_23162 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23161__$1);
var state_23175__$1 = (function (){var statearr_23184 = state_23175;
(statearr_23184[(8)] = inst_23161__$1);

return statearr_23184;
})();
if(cljs.core.truth_(inst_23162)){
var statearr_23185_23217 = state_23175__$1;
(statearr_23185_23217[(1)] = (13));

} else {
var statearr_23186_23218 = state_23175__$1;
(statearr_23186_23218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (2))){
var inst_23138 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23139 = (0);
var state_23175__$1 = (function (){var statearr_23187 = state_23175;
(statearr_23187[(7)] = inst_23139);

(statearr_23187[(9)] = inst_23138);

return statearr_23187;
})();
var statearr_23188_23219 = state_23175__$1;
(statearr_23188_23219[(2)] = null);

(statearr_23188_23219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (11))){
var inst_23139 = (state_23175[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23175,(10),Object,null,(9));
var inst_23148 = chs__$1.call(null,inst_23139);
var inst_23149 = done.call(null,inst_23139);
var inst_23150 = cljs.core.async.take_BANG_.call(null,inst_23148,inst_23149);
var state_23175__$1 = state_23175;
var statearr_23189_23220 = state_23175__$1;
(statearr_23189_23220[(2)] = inst_23150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (9))){
var inst_23139 = (state_23175[(7)]);
var inst_23152 = (state_23175[(2)]);
var inst_23153 = (inst_23139 + (1));
var inst_23139__$1 = inst_23153;
var state_23175__$1 = (function (){var statearr_23190 = state_23175;
(statearr_23190[(7)] = inst_23139__$1);

(statearr_23190[(10)] = inst_23152);

return statearr_23190;
})();
var statearr_23191_23221 = state_23175__$1;
(statearr_23191_23221[(2)] = null);

(statearr_23191_23221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (5))){
var inst_23159 = (state_23175[(2)]);
var state_23175__$1 = (function (){var statearr_23192 = state_23175;
(statearr_23192[(11)] = inst_23159);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23175__$1,(12),dchan);
} else {
if((state_val_23176 === (14))){
var inst_23161 = (state_23175[(8)]);
var inst_23166 = cljs.core.apply.call(null,f,inst_23161);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23175__$1,(16),out,inst_23166);
} else {
if((state_val_23176 === (16))){
var inst_23168 = (state_23175[(2)]);
var state_23175__$1 = (function (){var statearr_23193 = state_23175;
(statearr_23193[(12)] = inst_23168);

return statearr_23193;
})();
var statearr_23194_23222 = state_23175__$1;
(statearr_23194_23222[(2)] = null);

(statearr_23194_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (10))){
var inst_23143 = (state_23175[(2)]);
var inst_23144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23175__$1 = (function (){var statearr_23195 = state_23175;
(statearr_23195[(13)] = inst_23143);

return statearr_23195;
})();
var statearr_23196_23223 = state_23175__$1;
(statearr_23196_23223[(2)] = inst_23144);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (8))){
var inst_23157 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23197_23224 = state_23175__$1;
(statearr_23197_23224[(2)] = inst_23157);

(statearr_23197_23224[(1)] = (5));


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
});})(c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21103__auto__,c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23201[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23201[(1)] = (1));

return statearr_23201;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23175){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23202){if((e23202 instanceof Object)){
var ex__21107__auto__ = e23202;
var statearr_23203_23225 = state_23175;
(statearr_23203_23225[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23226 = state_23175;
state_23175 = G__23226;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21120__auto__ = (function (){var statearr_23204 = f__21119__auto__.call(null);
(statearr_23204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23209);

return statearr_23204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23209,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23228 = [];
var len__19864__auto___23286 = arguments.length;
var i__19865__auto___23287 = (0);
while(true){
if((i__19865__auto___23287 < len__19864__auto___23286)){
args23228.push((arguments[i__19865__auto___23287]));

var G__23288 = (i__19865__auto___23287 + (1));
i__19865__auto___23287 = G__23288;
continue;
} else {
}
break;
}

var G__23230 = args23228.length;
switch (G__23230) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23228.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23290,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23290,out){
return (function (state_23262){
var state_val_23263 = (state_23262[(1)]);
if((state_val_23263 === (7))){
var inst_23241 = (state_23262[(7)]);
var inst_23242 = (state_23262[(8)]);
var inst_23241__$1 = (state_23262[(2)]);
var inst_23242__$1 = cljs.core.nth.call(null,inst_23241__$1,(0),null);
var inst_23243 = cljs.core.nth.call(null,inst_23241__$1,(1),null);
var inst_23244 = (inst_23242__$1 == null);
var state_23262__$1 = (function (){var statearr_23264 = state_23262;
(statearr_23264[(7)] = inst_23241__$1);

(statearr_23264[(9)] = inst_23243);

(statearr_23264[(8)] = inst_23242__$1);

return statearr_23264;
})();
if(cljs.core.truth_(inst_23244)){
var statearr_23265_23291 = state_23262__$1;
(statearr_23265_23291[(1)] = (8));

} else {
var statearr_23266_23292 = state_23262__$1;
(statearr_23266_23292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (1))){
var inst_23231 = cljs.core.vec.call(null,chs);
var inst_23232 = inst_23231;
var state_23262__$1 = (function (){var statearr_23267 = state_23262;
(statearr_23267[(10)] = inst_23232);

return statearr_23267;
})();
var statearr_23268_23293 = state_23262__$1;
(statearr_23268_23293[(2)] = null);

(statearr_23268_23293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (4))){
var inst_23232 = (state_23262[(10)]);
var state_23262__$1 = state_23262;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23262__$1,(7),inst_23232);
} else {
if((state_val_23263 === (6))){
var inst_23258 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23269_23294 = state_23262__$1;
(statearr_23269_23294[(2)] = inst_23258);

(statearr_23269_23294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (3))){
var inst_23260 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23262__$1,inst_23260);
} else {
if((state_val_23263 === (2))){
var inst_23232 = (state_23262[(10)]);
var inst_23234 = cljs.core.count.call(null,inst_23232);
var inst_23235 = (inst_23234 > (0));
var state_23262__$1 = state_23262;
if(cljs.core.truth_(inst_23235)){
var statearr_23271_23295 = state_23262__$1;
(statearr_23271_23295[(1)] = (4));

} else {
var statearr_23272_23296 = state_23262__$1;
(statearr_23272_23296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (11))){
var inst_23232 = (state_23262[(10)]);
var inst_23251 = (state_23262[(2)]);
var tmp23270 = inst_23232;
var inst_23232__$1 = tmp23270;
var state_23262__$1 = (function (){var statearr_23273 = state_23262;
(statearr_23273[(10)] = inst_23232__$1);

(statearr_23273[(11)] = inst_23251);

return statearr_23273;
})();
var statearr_23274_23297 = state_23262__$1;
(statearr_23274_23297[(2)] = null);

(statearr_23274_23297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (9))){
var inst_23242 = (state_23262[(8)]);
var state_23262__$1 = state_23262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23262__$1,(11),out,inst_23242);
} else {
if((state_val_23263 === (5))){
var inst_23256 = cljs.core.async.close_BANG_.call(null,out);
var state_23262__$1 = state_23262;
var statearr_23275_23298 = state_23262__$1;
(statearr_23275_23298[(2)] = inst_23256);

(statearr_23275_23298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (10))){
var inst_23254 = (state_23262[(2)]);
var state_23262__$1 = state_23262;
var statearr_23276_23299 = state_23262__$1;
(statearr_23276_23299[(2)] = inst_23254);

(statearr_23276_23299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23263 === (8))){
var inst_23232 = (state_23262[(10)]);
var inst_23241 = (state_23262[(7)]);
var inst_23243 = (state_23262[(9)]);
var inst_23242 = (state_23262[(8)]);
var inst_23246 = (function (){var cs = inst_23232;
var vec__23237 = inst_23241;
var v = inst_23242;
var c = inst_23243;
return ((function (cs,vec__23237,v,c,inst_23232,inst_23241,inst_23243,inst_23242,state_val_23263,c__21118__auto___23290,out){
return (function (p1__23227_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23227_SHARP_);
});
;})(cs,vec__23237,v,c,inst_23232,inst_23241,inst_23243,inst_23242,state_val_23263,c__21118__auto___23290,out))
})();
var inst_23247 = cljs.core.filterv.call(null,inst_23246,inst_23232);
var inst_23232__$1 = inst_23247;
var state_23262__$1 = (function (){var statearr_23277 = state_23262;
(statearr_23277[(10)] = inst_23232__$1);

return statearr_23277;
})();
var statearr_23278_23300 = state_23262__$1;
(statearr_23278_23300[(2)] = null);

(statearr_23278_23300[(1)] = (2));


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
});})(c__21118__auto___23290,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23290,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23282[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23282[(1)] = (1));

return statearr_23282;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23262){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23283){if((e23283 instanceof Object)){
var ex__21107__auto__ = e23283;
var statearr_23284_23301 = state_23262;
(statearr_23284_23301[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23302 = state_23262;
state_23262 = G__23302;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23290,out))
})();
var state__21120__auto__ = (function (){var statearr_23285 = f__21119__auto__.call(null);
(statearr_23285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23290);

return statearr_23285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23290,out))
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
var args23303 = [];
var len__19864__auto___23352 = arguments.length;
var i__19865__auto___23353 = (0);
while(true){
if((i__19865__auto___23353 < len__19864__auto___23352)){
args23303.push((arguments[i__19865__auto___23353]));

var G__23354 = (i__19865__auto___23353 + (1));
i__19865__auto___23353 = G__23354;
continue;
} else {
}
break;
}

var G__23305 = args23303.length;
switch (G__23305) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23303.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23356,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23356,out){
return (function (state_23329){
var state_val_23330 = (state_23329[(1)]);
if((state_val_23330 === (7))){
var inst_23311 = (state_23329[(7)]);
var inst_23311__$1 = (state_23329[(2)]);
var inst_23312 = (inst_23311__$1 == null);
var inst_23313 = cljs.core.not.call(null,inst_23312);
var state_23329__$1 = (function (){var statearr_23331 = state_23329;
(statearr_23331[(7)] = inst_23311__$1);

return statearr_23331;
})();
if(inst_23313){
var statearr_23332_23357 = state_23329__$1;
(statearr_23332_23357[(1)] = (8));

} else {
var statearr_23333_23358 = state_23329__$1;
(statearr_23333_23358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (1))){
var inst_23306 = (0);
var state_23329__$1 = (function (){var statearr_23334 = state_23329;
(statearr_23334[(8)] = inst_23306);

return statearr_23334;
})();
var statearr_23335_23359 = state_23329__$1;
(statearr_23335_23359[(2)] = null);

(statearr_23335_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (4))){
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23329__$1,(7),ch);
} else {
if((state_val_23330 === (6))){
var inst_23324 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
var statearr_23336_23360 = state_23329__$1;
(statearr_23336_23360[(2)] = inst_23324);

(statearr_23336_23360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (3))){
var inst_23326 = (state_23329[(2)]);
var inst_23327 = cljs.core.async.close_BANG_.call(null,out);
var state_23329__$1 = (function (){var statearr_23337 = state_23329;
(statearr_23337[(9)] = inst_23326);

return statearr_23337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23329__$1,inst_23327);
} else {
if((state_val_23330 === (2))){
var inst_23306 = (state_23329[(8)]);
var inst_23308 = (inst_23306 < n);
var state_23329__$1 = state_23329;
if(cljs.core.truth_(inst_23308)){
var statearr_23338_23361 = state_23329__$1;
(statearr_23338_23361[(1)] = (4));

} else {
var statearr_23339_23362 = state_23329__$1;
(statearr_23339_23362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (11))){
var inst_23306 = (state_23329[(8)]);
var inst_23316 = (state_23329[(2)]);
var inst_23317 = (inst_23306 + (1));
var inst_23306__$1 = inst_23317;
var state_23329__$1 = (function (){var statearr_23340 = state_23329;
(statearr_23340[(10)] = inst_23316);

(statearr_23340[(8)] = inst_23306__$1);

return statearr_23340;
})();
var statearr_23341_23363 = state_23329__$1;
(statearr_23341_23363[(2)] = null);

(statearr_23341_23363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (9))){
var state_23329__$1 = state_23329;
var statearr_23342_23364 = state_23329__$1;
(statearr_23342_23364[(2)] = null);

(statearr_23342_23364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (5))){
var state_23329__$1 = state_23329;
var statearr_23343_23365 = state_23329__$1;
(statearr_23343_23365[(2)] = null);

(statearr_23343_23365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (10))){
var inst_23321 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
var statearr_23344_23366 = state_23329__$1;
(statearr_23344_23366[(2)] = inst_23321);

(statearr_23344_23366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (8))){
var inst_23311 = (state_23329[(7)]);
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23329__$1,(11),out,inst_23311);
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
});})(c__21118__auto___23356,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23356,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23348[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23348[(1)] = (1));

return statearr_23348;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23329){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23349){if((e23349 instanceof Object)){
var ex__21107__auto__ = e23349;
var statearr_23350_23367 = state_23329;
(statearr_23350_23367[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23368 = state_23329;
state_23329 = G__23368;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23356,out))
})();
var state__21120__auto__ = (function (){var statearr_23351 = f__21119__auto__.call(null);
(statearr_23351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23356);

return statearr_23351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23356,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23376 = (function (f,ch,meta23377){
this.f = f;
this.ch = ch;
this.meta23377 = meta23377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23378,meta23377__$1){
var self__ = this;
var _23378__$1 = this;
return (new cljs.core.async.t_cljs$core$async23376(self__.f,self__.ch,meta23377__$1));
});

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23378){
var self__ = this;
var _23378__$1 = this;
return self__.meta23377;
});

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23379 = (function (f,ch,meta23377,_,fn1,meta23380){
this.f = f;
this.ch = ch;
this.meta23377 = meta23377;
this._ = _;
this.fn1 = fn1;
this.meta23380 = meta23380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23381,meta23380__$1){
var self__ = this;
var _23381__$1 = this;
return (new cljs.core.async.t_cljs$core$async23379(self__.f,self__.ch,self__.meta23377,self__._,self__.fn1,meta23380__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23381){
var self__ = this;
var _23381__$1 = this;
return self__.meta23380;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23369_SHARP_){
return f1.call(null,(((p1__23369_SHARP_ == null))?null:self__.f.call(null,p1__23369_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23377","meta23377",321820843,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23376","cljs.core.async/t_cljs$core$async23376",-1288863136,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23380","meta23380",-163536762,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23379";

cljs.core.async.t_cljs$core$async23379.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23379");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23379 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23379(f__$1,ch__$1,meta23377__$1,___$2,fn1__$1,meta23380){
return (new cljs.core.async.t_cljs$core$async23379(f__$1,ch__$1,meta23377__$1,___$2,fn1__$1,meta23380));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23379(self__.f,self__.ch,self__.meta23377,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23377","meta23377",321820843,null)], null);
});

cljs.core.async.t_cljs$core$async23376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23376";

cljs.core.async.t_cljs$core$async23376.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23376");
});

cljs.core.async.__GT_t_cljs$core$async23376 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23376(f__$1,ch__$1,meta23377){
return (new cljs.core.async.t_cljs$core$async23376(f__$1,ch__$1,meta23377));
});

}

return (new cljs.core.async.t_cljs$core$async23376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23385 = (function (f,ch,meta23386){
this.f = f;
this.ch = ch;
this.meta23386 = meta23386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23387,meta23386__$1){
var self__ = this;
var _23387__$1 = this;
return (new cljs.core.async.t_cljs$core$async23385(self__.f,self__.ch,meta23386__$1));
});

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23387){
var self__ = this;
var _23387__$1 = this;
return self__.meta23386;
});

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23386","meta23386",-352336168,null)], null);
});

cljs.core.async.t_cljs$core$async23385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23385";

cljs.core.async.t_cljs$core$async23385.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23385");
});

cljs.core.async.__GT_t_cljs$core$async23385 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23385(f__$1,ch__$1,meta23386){
return (new cljs.core.async.t_cljs$core$async23385(f__$1,ch__$1,meta23386));
});

}

return (new cljs.core.async.t_cljs$core$async23385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23391 = (function (p,ch,meta23392){
this.p = p;
this.ch = ch;
this.meta23392 = meta23392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23393,meta23392__$1){
var self__ = this;
var _23393__$1 = this;
return (new cljs.core.async.t_cljs$core$async23391(self__.p,self__.ch,meta23392__$1));
});

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23393){
var self__ = this;
var _23393__$1 = this;
return self__.meta23392;
});

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23392","meta23392",1450668773,null)], null);
});

cljs.core.async.t_cljs$core$async23391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23391";

cljs.core.async.t_cljs$core$async23391.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.core.async/t_cljs$core$async23391");
});

cljs.core.async.__GT_t_cljs$core$async23391 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23391(p__$1,ch__$1,meta23392){
return (new cljs.core.async.t_cljs$core$async23391(p__$1,ch__$1,meta23392));
});

}

return (new cljs.core.async.t_cljs$core$async23391(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23394 = [];
var len__19864__auto___23438 = arguments.length;
var i__19865__auto___23439 = (0);
while(true){
if((i__19865__auto___23439 < len__19864__auto___23438)){
args23394.push((arguments[i__19865__auto___23439]));

var G__23440 = (i__19865__auto___23439 + (1));
i__19865__auto___23439 = G__23440;
continue;
} else {
}
break;
}

var G__23396 = args23394.length;
switch (G__23396) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23394.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23442,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23442,out){
return (function (state_23417){
var state_val_23418 = (state_23417[(1)]);
if((state_val_23418 === (7))){
var inst_23413 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23419_23443 = state_23417__$1;
(statearr_23419_23443[(2)] = inst_23413);

(statearr_23419_23443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (1))){
var state_23417__$1 = state_23417;
var statearr_23420_23444 = state_23417__$1;
(statearr_23420_23444[(2)] = null);

(statearr_23420_23444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (4))){
var inst_23399 = (state_23417[(7)]);
var inst_23399__$1 = (state_23417[(2)]);
var inst_23400 = (inst_23399__$1 == null);
var state_23417__$1 = (function (){var statearr_23421 = state_23417;
(statearr_23421[(7)] = inst_23399__$1);

return statearr_23421;
})();
if(cljs.core.truth_(inst_23400)){
var statearr_23422_23445 = state_23417__$1;
(statearr_23422_23445[(1)] = (5));

} else {
var statearr_23423_23446 = state_23417__$1;
(statearr_23423_23446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (6))){
var inst_23399 = (state_23417[(7)]);
var inst_23404 = p.call(null,inst_23399);
var state_23417__$1 = state_23417;
if(cljs.core.truth_(inst_23404)){
var statearr_23424_23447 = state_23417__$1;
(statearr_23424_23447[(1)] = (8));

} else {
var statearr_23425_23448 = state_23417__$1;
(statearr_23425_23448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (3))){
var inst_23415 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23417__$1,inst_23415);
} else {
if((state_val_23418 === (2))){
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23417__$1,(4),ch);
} else {
if((state_val_23418 === (11))){
var inst_23407 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23426_23449 = state_23417__$1;
(statearr_23426_23449[(2)] = inst_23407);

(statearr_23426_23449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (9))){
var state_23417__$1 = state_23417;
var statearr_23427_23450 = state_23417__$1;
(statearr_23427_23450[(2)] = null);

(statearr_23427_23450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (5))){
var inst_23402 = cljs.core.async.close_BANG_.call(null,out);
var state_23417__$1 = state_23417;
var statearr_23428_23451 = state_23417__$1;
(statearr_23428_23451[(2)] = inst_23402);

(statearr_23428_23451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (10))){
var inst_23410 = (state_23417[(2)]);
var state_23417__$1 = (function (){var statearr_23429 = state_23417;
(statearr_23429[(8)] = inst_23410);

return statearr_23429;
})();
var statearr_23430_23452 = state_23417__$1;
(statearr_23430_23452[(2)] = null);

(statearr_23430_23452[(1)] = (2));


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
});})(c__21118__auto___23442,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23442,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23434 = [null,null,null,null,null,null,null,null,null];
(statearr_23434[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23434[(1)] = (1));

return statearr_23434;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23417){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23435){if((e23435 instanceof Object)){
var ex__21107__auto__ = e23435;
var statearr_23436_23453 = state_23417;
(statearr_23436_23453[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23454 = state_23417;
state_23417 = G__23454;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23442,out))
})();
var state__21120__auto__ = (function (){var statearr_23437 = f__21119__auto__.call(null);
(statearr_23437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23442);

return statearr_23437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23442,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23455 = [];
var len__19864__auto___23458 = arguments.length;
var i__19865__auto___23459 = (0);
while(true){
if((i__19865__auto___23459 < len__19864__auto___23458)){
args23455.push((arguments[i__19865__auto___23459]));

var G__23460 = (i__19865__auto___23459 + (1));
i__19865__auto___23459 = G__23460;
continue;
} else {
}
break;
}

var G__23457 = args23455.length;
switch (G__23457) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23455.length)].join('')));

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
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_23627){
var state_val_23628 = (state_23627[(1)]);
if((state_val_23628 === (7))){
var inst_23623 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23629_23670 = state_23627__$1;
(statearr_23629_23670[(2)] = inst_23623);

(statearr_23629_23670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (20))){
var inst_23593 = (state_23627[(7)]);
var inst_23604 = (state_23627[(2)]);
var inst_23605 = cljs.core.next.call(null,inst_23593);
var inst_23579 = inst_23605;
var inst_23580 = null;
var inst_23581 = (0);
var inst_23582 = (0);
var state_23627__$1 = (function (){var statearr_23630 = state_23627;
(statearr_23630[(8)] = inst_23581);

(statearr_23630[(9)] = inst_23580);

(statearr_23630[(10)] = inst_23604);

(statearr_23630[(11)] = inst_23582);

(statearr_23630[(12)] = inst_23579);

return statearr_23630;
})();
var statearr_23631_23671 = state_23627__$1;
(statearr_23631_23671[(2)] = null);

(statearr_23631_23671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (1))){
var state_23627__$1 = state_23627;
var statearr_23632_23672 = state_23627__$1;
(statearr_23632_23672[(2)] = null);

(statearr_23632_23672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (4))){
var inst_23568 = (state_23627[(13)]);
var inst_23568__$1 = (state_23627[(2)]);
var inst_23569 = (inst_23568__$1 == null);
var state_23627__$1 = (function (){var statearr_23633 = state_23627;
(statearr_23633[(13)] = inst_23568__$1);

return statearr_23633;
})();
if(cljs.core.truth_(inst_23569)){
var statearr_23634_23673 = state_23627__$1;
(statearr_23634_23673[(1)] = (5));

} else {
var statearr_23635_23674 = state_23627__$1;
(statearr_23635_23674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (15))){
var state_23627__$1 = state_23627;
var statearr_23639_23675 = state_23627__$1;
(statearr_23639_23675[(2)] = null);

(statearr_23639_23675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (21))){
var state_23627__$1 = state_23627;
var statearr_23640_23676 = state_23627__$1;
(statearr_23640_23676[(2)] = null);

(statearr_23640_23676[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (13))){
var inst_23581 = (state_23627[(8)]);
var inst_23580 = (state_23627[(9)]);
var inst_23582 = (state_23627[(11)]);
var inst_23579 = (state_23627[(12)]);
var inst_23589 = (state_23627[(2)]);
var inst_23590 = (inst_23582 + (1));
var tmp23636 = inst_23581;
var tmp23637 = inst_23580;
var tmp23638 = inst_23579;
var inst_23579__$1 = tmp23638;
var inst_23580__$1 = tmp23637;
var inst_23581__$1 = tmp23636;
var inst_23582__$1 = inst_23590;
var state_23627__$1 = (function (){var statearr_23641 = state_23627;
(statearr_23641[(8)] = inst_23581__$1);

(statearr_23641[(9)] = inst_23580__$1);

(statearr_23641[(11)] = inst_23582__$1);

(statearr_23641[(12)] = inst_23579__$1);

(statearr_23641[(14)] = inst_23589);

return statearr_23641;
})();
var statearr_23642_23677 = state_23627__$1;
(statearr_23642_23677[(2)] = null);

(statearr_23642_23677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (22))){
var state_23627__$1 = state_23627;
var statearr_23643_23678 = state_23627__$1;
(statearr_23643_23678[(2)] = null);

(statearr_23643_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (6))){
var inst_23568 = (state_23627[(13)]);
var inst_23577 = f.call(null,inst_23568);
var inst_23578 = cljs.core.seq.call(null,inst_23577);
var inst_23579 = inst_23578;
var inst_23580 = null;
var inst_23581 = (0);
var inst_23582 = (0);
var state_23627__$1 = (function (){var statearr_23644 = state_23627;
(statearr_23644[(8)] = inst_23581);

(statearr_23644[(9)] = inst_23580);

(statearr_23644[(11)] = inst_23582);

(statearr_23644[(12)] = inst_23579);

return statearr_23644;
})();
var statearr_23645_23679 = state_23627__$1;
(statearr_23645_23679[(2)] = null);

(statearr_23645_23679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (17))){
var inst_23593 = (state_23627[(7)]);
var inst_23597 = cljs.core.chunk_first.call(null,inst_23593);
var inst_23598 = cljs.core.chunk_rest.call(null,inst_23593);
var inst_23599 = cljs.core.count.call(null,inst_23597);
var inst_23579 = inst_23598;
var inst_23580 = inst_23597;
var inst_23581 = inst_23599;
var inst_23582 = (0);
var state_23627__$1 = (function (){var statearr_23646 = state_23627;
(statearr_23646[(8)] = inst_23581);

(statearr_23646[(9)] = inst_23580);

(statearr_23646[(11)] = inst_23582);

(statearr_23646[(12)] = inst_23579);

return statearr_23646;
})();
var statearr_23647_23680 = state_23627__$1;
(statearr_23647_23680[(2)] = null);

(statearr_23647_23680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (3))){
var inst_23625 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23627__$1,inst_23625);
} else {
if((state_val_23628 === (12))){
var inst_23613 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23648_23681 = state_23627__$1;
(statearr_23648_23681[(2)] = inst_23613);

(statearr_23648_23681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (2))){
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23627__$1,(4),in$);
} else {
if((state_val_23628 === (23))){
var inst_23621 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23649_23682 = state_23627__$1;
(statearr_23649_23682[(2)] = inst_23621);

(statearr_23649_23682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (19))){
var inst_23608 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23650_23683 = state_23627__$1;
(statearr_23650_23683[(2)] = inst_23608);

(statearr_23650_23683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (11))){
var inst_23579 = (state_23627[(12)]);
var inst_23593 = (state_23627[(7)]);
var inst_23593__$1 = cljs.core.seq.call(null,inst_23579);
var state_23627__$1 = (function (){var statearr_23651 = state_23627;
(statearr_23651[(7)] = inst_23593__$1);

return statearr_23651;
})();
if(inst_23593__$1){
var statearr_23652_23684 = state_23627__$1;
(statearr_23652_23684[(1)] = (14));

} else {
var statearr_23653_23685 = state_23627__$1;
(statearr_23653_23685[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (9))){
var inst_23615 = (state_23627[(2)]);
var inst_23616 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23627__$1 = (function (){var statearr_23654 = state_23627;
(statearr_23654[(15)] = inst_23615);

return statearr_23654;
})();
if(cljs.core.truth_(inst_23616)){
var statearr_23655_23686 = state_23627__$1;
(statearr_23655_23686[(1)] = (21));

} else {
var statearr_23656_23687 = state_23627__$1;
(statearr_23656_23687[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (5))){
var inst_23571 = cljs.core.async.close_BANG_.call(null,out);
var state_23627__$1 = state_23627;
var statearr_23657_23688 = state_23627__$1;
(statearr_23657_23688[(2)] = inst_23571);

(statearr_23657_23688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (14))){
var inst_23593 = (state_23627[(7)]);
var inst_23595 = cljs.core.chunked_seq_QMARK_.call(null,inst_23593);
var state_23627__$1 = state_23627;
if(inst_23595){
var statearr_23658_23689 = state_23627__$1;
(statearr_23658_23689[(1)] = (17));

} else {
var statearr_23659_23690 = state_23627__$1;
(statearr_23659_23690[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (16))){
var inst_23611 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23660_23691 = state_23627__$1;
(statearr_23660_23691[(2)] = inst_23611);

(statearr_23660_23691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (10))){
var inst_23580 = (state_23627[(9)]);
var inst_23582 = (state_23627[(11)]);
var inst_23587 = cljs.core._nth.call(null,inst_23580,inst_23582);
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23627__$1,(13),out,inst_23587);
} else {
if((state_val_23628 === (18))){
var inst_23593 = (state_23627[(7)]);
var inst_23602 = cljs.core.first.call(null,inst_23593);
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23627__$1,(20),out,inst_23602);
} else {
if((state_val_23628 === (8))){
var inst_23581 = (state_23627[(8)]);
var inst_23582 = (state_23627[(11)]);
var inst_23584 = (inst_23582 < inst_23581);
var inst_23585 = inst_23584;
var state_23627__$1 = state_23627;
if(cljs.core.truth_(inst_23585)){
var statearr_23661_23692 = state_23627__$1;
(statearr_23661_23692[(1)] = (10));

} else {
var statearr_23662_23693 = state_23627__$1;
(statearr_23662_23693[(1)] = (11));

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
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____0 = (function (){
var statearr_23666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23666[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__);

(statearr_23666[(1)] = (1));

return statearr_23666;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____1 = (function (state_23627){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23667){if((e23667 instanceof Object)){
var ex__21107__auto__ = e23667;
var statearr_23668_23694 = state_23627;
(statearr_23668_23694[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23695 = state_23627;
state_23627 = G__23695;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__ = function(state_23627){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____1.call(this,state_23627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_23669 = f__21119__auto__.call(null);
(statearr_23669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_23669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23696 = [];
var len__19864__auto___23699 = arguments.length;
var i__19865__auto___23700 = (0);
while(true){
if((i__19865__auto___23700 < len__19864__auto___23699)){
args23696.push((arguments[i__19865__auto___23700]));

var G__23701 = (i__19865__auto___23700 + (1));
i__19865__auto___23700 = G__23701;
continue;
} else {
}
break;
}

var G__23698 = args23696.length;
switch (G__23698) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23696.length)].join('')));

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
var args23703 = [];
var len__19864__auto___23706 = arguments.length;
var i__19865__auto___23707 = (0);
while(true){
if((i__19865__auto___23707 < len__19864__auto___23706)){
args23703.push((arguments[i__19865__auto___23707]));

var G__23708 = (i__19865__auto___23707 + (1));
i__19865__auto___23707 = G__23708;
continue;
} else {
}
break;
}

var G__23705 = args23703.length;
switch (G__23705) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23703.length)].join('')));

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
var args23710 = [];
var len__19864__auto___23761 = arguments.length;
var i__19865__auto___23762 = (0);
while(true){
if((i__19865__auto___23762 < len__19864__auto___23761)){
args23710.push((arguments[i__19865__auto___23762]));

var G__23763 = (i__19865__auto___23762 + (1));
i__19865__auto___23762 = G__23763;
continue;
} else {
}
break;
}

var G__23712 = args23710.length;
switch (G__23712) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23710.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23765,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23765,out){
return (function (state_23736){
var state_val_23737 = (state_23736[(1)]);
if((state_val_23737 === (7))){
var inst_23731 = (state_23736[(2)]);
var state_23736__$1 = state_23736;
var statearr_23738_23766 = state_23736__$1;
(statearr_23738_23766[(2)] = inst_23731);

(statearr_23738_23766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (1))){
var inst_23713 = null;
var state_23736__$1 = (function (){var statearr_23739 = state_23736;
(statearr_23739[(7)] = inst_23713);

return statearr_23739;
})();
var statearr_23740_23767 = state_23736__$1;
(statearr_23740_23767[(2)] = null);

(statearr_23740_23767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (4))){
var inst_23716 = (state_23736[(8)]);
var inst_23716__$1 = (state_23736[(2)]);
var inst_23717 = (inst_23716__$1 == null);
var inst_23718 = cljs.core.not.call(null,inst_23717);
var state_23736__$1 = (function (){var statearr_23741 = state_23736;
(statearr_23741[(8)] = inst_23716__$1);

return statearr_23741;
})();
if(inst_23718){
var statearr_23742_23768 = state_23736__$1;
(statearr_23742_23768[(1)] = (5));

} else {
var statearr_23743_23769 = state_23736__$1;
(statearr_23743_23769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (6))){
var state_23736__$1 = state_23736;
var statearr_23744_23770 = state_23736__$1;
(statearr_23744_23770[(2)] = null);

(statearr_23744_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (3))){
var inst_23733 = (state_23736[(2)]);
var inst_23734 = cljs.core.async.close_BANG_.call(null,out);
var state_23736__$1 = (function (){var statearr_23745 = state_23736;
(statearr_23745[(9)] = inst_23733);

return statearr_23745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23736__$1,inst_23734);
} else {
if((state_val_23737 === (2))){
var state_23736__$1 = state_23736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23736__$1,(4),ch);
} else {
if((state_val_23737 === (11))){
var inst_23716 = (state_23736[(8)]);
var inst_23725 = (state_23736[(2)]);
var inst_23713 = inst_23716;
var state_23736__$1 = (function (){var statearr_23746 = state_23736;
(statearr_23746[(10)] = inst_23725);

(statearr_23746[(7)] = inst_23713);

return statearr_23746;
})();
var statearr_23747_23771 = state_23736__$1;
(statearr_23747_23771[(2)] = null);

(statearr_23747_23771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (9))){
var inst_23716 = (state_23736[(8)]);
var state_23736__$1 = state_23736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23736__$1,(11),out,inst_23716);
} else {
if((state_val_23737 === (5))){
var inst_23716 = (state_23736[(8)]);
var inst_23713 = (state_23736[(7)]);
var inst_23720 = cljs.core._EQ_.call(null,inst_23716,inst_23713);
var state_23736__$1 = state_23736;
if(inst_23720){
var statearr_23749_23772 = state_23736__$1;
(statearr_23749_23772[(1)] = (8));

} else {
var statearr_23750_23773 = state_23736__$1;
(statearr_23750_23773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (10))){
var inst_23728 = (state_23736[(2)]);
var state_23736__$1 = state_23736;
var statearr_23751_23774 = state_23736__$1;
(statearr_23751_23774[(2)] = inst_23728);

(statearr_23751_23774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23737 === (8))){
var inst_23713 = (state_23736[(7)]);
var tmp23748 = inst_23713;
var inst_23713__$1 = tmp23748;
var state_23736__$1 = (function (){var statearr_23752 = state_23736;
(statearr_23752[(7)] = inst_23713__$1);

return statearr_23752;
})();
var statearr_23753_23775 = state_23736__$1;
(statearr_23753_23775[(2)] = null);

(statearr_23753_23775[(1)] = (2));


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
});})(c__21118__auto___23765,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23765,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23757[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23757[(1)] = (1));

return statearr_23757;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23736){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23758){if((e23758 instanceof Object)){
var ex__21107__auto__ = e23758;
var statearr_23759_23776 = state_23736;
(statearr_23759_23776[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23777 = state_23736;
state_23736 = G__23777;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23765,out))
})();
var state__21120__auto__ = (function (){var statearr_23760 = f__21119__auto__.call(null);
(statearr_23760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23765);

return statearr_23760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23765,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23778 = [];
var len__19864__auto___23848 = arguments.length;
var i__19865__auto___23849 = (0);
while(true){
if((i__19865__auto___23849 < len__19864__auto___23848)){
args23778.push((arguments[i__19865__auto___23849]));

var G__23850 = (i__19865__auto___23849 + (1));
i__19865__auto___23849 = G__23850;
continue;
} else {
}
break;
}

var G__23780 = args23778.length;
switch (G__23780) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23778.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23852,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23852,out){
return (function (state_23818){
var state_val_23819 = (state_23818[(1)]);
if((state_val_23819 === (7))){
var inst_23814 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
var statearr_23820_23853 = state_23818__$1;
(statearr_23820_23853[(2)] = inst_23814);

(statearr_23820_23853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (1))){
var inst_23781 = (new Array(n));
var inst_23782 = inst_23781;
var inst_23783 = (0);
var state_23818__$1 = (function (){var statearr_23821 = state_23818;
(statearr_23821[(7)] = inst_23783);

(statearr_23821[(8)] = inst_23782);

return statearr_23821;
})();
var statearr_23822_23854 = state_23818__$1;
(statearr_23822_23854[(2)] = null);

(statearr_23822_23854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (4))){
var inst_23786 = (state_23818[(9)]);
var inst_23786__$1 = (state_23818[(2)]);
var inst_23787 = (inst_23786__$1 == null);
var inst_23788 = cljs.core.not.call(null,inst_23787);
var state_23818__$1 = (function (){var statearr_23823 = state_23818;
(statearr_23823[(9)] = inst_23786__$1);

return statearr_23823;
})();
if(inst_23788){
var statearr_23824_23855 = state_23818__$1;
(statearr_23824_23855[(1)] = (5));

} else {
var statearr_23825_23856 = state_23818__$1;
(statearr_23825_23856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (15))){
var inst_23808 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
var statearr_23826_23857 = state_23818__$1;
(statearr_23826_23857[(2)] = inst_23808);

(statearr_23826_23857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (13))){
var state_23818__$1 = state_23818;
var statearr_23827_23858 = state_23818__$1;
(statearr_23827_23858[(2)] = null);

(statearr_23827_23858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (6))){
var inst_23783 = (state_23818[(7)]);
var inst_23804 = (inst_23783 > (0));
var state_23818__$1 = state_23818;
if(cljs.core.truth_(inst_23804)){
var statearr_23828_23859 = state_23818__$1;
(statearr_23828_23859[(1)] = (12));

} else {
var statearr_23829_23860 = state_23818__$1;
(statearr_23829_23860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (3))){
var inst_23816 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23818__$1,inst_23816);
} else {
if((state_val_23819 === (12))){
var inst_23782 = (state_23818[(8)]);
var inst_23806 = cljs.core.vec.call(null,inst_23782);
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23818__$1,(15),out,inst_23806);
} else {
if((state_val_23819 === (2))){
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23818__$1,(4),ch);
} else {
if((state_val_23819 === (11))){
var inst_23798 = (state_23818[(2)]);
var inst_23799 = (new Array(n));
var inst_23782 = inst_23799;
var inst_23783 = (0);
var state_23818__$1 = (function (){var statearr_23830 = state_23818;
(statearr_23830[(7)] = inst_23783);

(statearr_23830[(10)] = inst_23798);

(statearr_23830[(8)] = inst_23782);

return statearr_23830;
})();
var statearr_23831_23861 = state_23818__$1;
(statearr_23831_23861[(2)] = null);

(statearr_23831_23861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (9))){
var inst_23782 = (state_23818[(8)]);
var inst_23796 = cljs.core.vec.call(null,inst_23782);
var state_23818__$1 = state_23818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23818__$1,(11),out,inst_23796);
} else {
if((state_val_23819 === (5))){
var inst_23791 = (state_23818[(11)]);
var inst_23786 = (state_23818[(9)]);
var inst_23783 = (state_23818[(7)]);
var inst_23782 = (state_23818[(8)]);
var inst_23790 = (inst_23782[inst_23783] = inst_23786);
var inst_23791__$1 = (inst_23783 + (1));
var inst_23792 = (inst_23791__$1 < n);
var state_23818__$1 = (function (){var statearr_23832 = state_23818;
(statearr_23832[(11)] = inst_23791__$1);

(statearr_23832[(12)] = inst_23790);

return statearr_23832;
})();
if(cljs.core.truth_(inst_23792)){
var statearr_23833_23862 = state_23818__$1;
(statearr_23833_23862[(1)] = (8));

} else {
var statearr_23834_23863 = state_23818__$1;
(statearr_23834_23863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (14))){
var inst_23811 = (state_23818[(2)]);
var inst_23812 = cljs.core.async.close_BANG_.call(null,out);
var state_23818__$1 = (function (){var statearr_23836 = state_23818;
(statearr_23836[(13)] = inst_23811);

return statearr_23836;
})();
var statearr_23837_23864 = state_23818__$1;
(statearr_23837_23864[(2)] = inst_23812);

(statearr_23837_23864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (10))){
var inst_23802 = (state_23818[(2)]);
var state_23818__$1 = state_23818;
var statearr_23838_23865 = state_23818__$1;
(statearr_23838_23865[(2)] = inst_23802);

(statearr_23838_23865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23819 === (8))){
var inst_23791 = (state_23818[(11)]);
var inst_23782 = (state_23818[(8)]);
var tmp23835 = inst_23782;
var inst_23782__$1 = tmp23835;
var inst_23783 = inst_23791;
var state_23818__$1 = (function (){var statearr_23839 = state_23818;
(statearr_23839[(7)] = inst_23783);

(statearr_23839[(8)] = inst_23782__$1);

return statearr_23839;
})();
var statearr_23840_23866 = state_23818__$1;
(statearr_23840_23866[(2)] = null);

(statearr_23840_23866[(1)] = (2));


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
});})(c__21118__auto___23852,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23852,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23844[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23844[(1)] = (1));

return statearr_23844;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23818){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23845){if((e23845 instanceof Object)){
var ex__21107__auto__ = e23845;
var statearr_23846_23867 = state_23818;
(statearr_23846_23867[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23868 = state_23818;
state_23818 = G__23868;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23852,out))
})();
var state__21120__auto__ = (function (){var statearr_23847 = f__21119__auto__.call(null);
(statearr_23847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23852);

return statearr_23847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23852,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23869 = [];
var len__19864__auto___23943 = arguments.length;
var i__19865__auto___23944 = (0);
while(true){
if((i__19865__auto___23944 < len__19864__auto___23943)){
args23869.push((arguments[i__19865__auto___23944]));

var G__23945 = (i__19865__auto___23944 + (1));
i__19865__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var G__23871 = args23869.length;
switch (G__23871) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23869.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21118__auto___23947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto___23947,out){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto___23947,out){
return (function (state_23913){
var state_val_23914 = (state_23913[(1)]);
if((state_val_23914 === (7))){
var inst_23909 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
var statearr_23915_23948 = state_23913__$1;
(statearr_23915_23948[(2)] = inst_23909);

(statearr_23915_23948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (1))){
var inst_23872 = [];
var inst_23873 = inst_23872;
var inst_23874 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23913__$1 = (function (){var statearr_23916 = state_23913;
(statearr_23916[(7)] = inst_23873);

(statearr_23916[(8)] = inst_23874);

return statearr_23916;
})();
var statearr_23917_23949 = state_23913__$1;
(statearr_23917_23949[(2)] = null);

(statearr_23917_23949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (4))){
var inst_23877 = (state_23913[(9)]);
var inst_23877__$1 = (state_23913[(2)]);
var inst_23878 = (inst_23877__$1 == null);
var inst_23879 = cljs.core.not.call(null,inst_23878);
var state_23913__$1 = (function (){var statearr_23918 = state_23913;
(statearr_23918[(9)] = inst_23877__$1);

return statearr_23918;
})();
if(inst_23879){
var statearr_23919_23950 = state_23913__$1;
(statearr_23919_23950[(1)] = (5));

} else {
var statearr_23920_23951 = state_23913__$1;
(statearr_23920_23951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (15))){
var inst_23903 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
var statearr_23921_23952 = state_23913__$1;
(statearr_23921_23952[(2)] = inst_23903);

(statearr_23921_23952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (13))){
var state_23913__$1 = state_23913;
var statearr_23922_23953 = state_23913__$1;
(statearr_23922_23953[(2)] = null);

(statearr_23922_23953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (6))){
var inst_23873 = (state_23913[(7)]);
var inst_23898 = inst_23873.length;
var inst_23899 = (inst_23898 > (0));
var state_23913__$1 = state_23913;
if(cljs.core.truth_(inst_23899)){
var statearr_23923_23954 = state_23913__$1;
(statearr_23923_23954[(1)] = (12));

} else {
var statearr_23924_23955 = state_23913__$1;
(statearr_23924_23955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (3))){
var inst_23911 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23913__$1,inst_23911);
} else {
if((state_val_23914 === (12))){
var inst_23873 = (state_23913[(7)]);
var inst_23901 = cljs.core.vec.call(null,inst_23873);
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23913__$1,(15),out,inst_23901);
} else {
if((state_val_23914 === (2))){
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23913__$1,(4),ch);
} else {
if((state_val_23914 === (11))){
var inst_23877 = (state_23913[(9)]);
var inst_23881 = (state_23913[(10)]);
var inst_23891 = (state_23913[(2)]);
var inst_23892 = [];
var inst_23893 = inst_23892.push(inst_23877);
var inst_23873 = inst_23892;
var inst_23874 = inst_23881;
var state_23913__$1 = (function (){var statearr_23925 = state_23913;
(statearr_23925[(11)] = inst_23891);

(statearr_23925[(7)] = inst_23873);

(statearr_23925[(8)] = inst_23874);

(statearr_23925[(12)] = inst_23893);

return statearr_23925;
})();
var statearr_23926_23956 = state_23913__$1;
(statearr_23926_23956[(2)] = null);

(statearr_23926_23956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (9))){
var inst_23873 = (state_23913[(7)]);
var inst_23889 = cljs.core.vec.call(null,inst_23873);
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23913__$1,(11),out,inst_23889);
} else {
if((state_val_23914 === (5))){
var inst_23877 = (state_23913[(9)]);
var inst_23881 = (state_23913[(10)]);
var inst_23874 = (state_23913[(8)]);
var inst_23881__$1 = f.call(null,inst_23877);
var inst_23882 = cljs.core._EQ_.call(null,inst_23881__$1,inst_23874);
var inst_23883 = cljs.core.keyword_identical_QMARK_.call(null,inst_23874,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23884 = (inst_23882) || (inst_23883);
var state_23913__$1 = (function (){var statearr_23927 = state_23913;
(statearr_23927[(10)] = inst_23881__$1);

return statearr_23927;
})();
if(cljs.core.truth_(inst_23884)){
var statearr_23928_23957 = state_23913__$1;
(statearr_23928_23957[(1)] = (8));

} else {
var statearr_23929_23958 = state_23913__$1;
(statearr_23929_23958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (14))){
var inst_23906 = (state_23913[(2)]);
var inst_23907 = cljs.core.async.close_BANG_.call(null,out);
var state_23913__$1 = (function (){var statearr_23931 = state_23913;
(statearr_23931[(13)] = inst_23906);

return statearr_23931;
})();
var statearr_23932_23959 = state_23913__$1;
(statearr_23932_23959[(2)] = inst_23907);

(statearr_23932_23959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (10))){
var inst_23896 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
var statearr_23933_23960 = state_23913__$1;
(statearr_23933_23960[(2)] = inst_23896);

(statearr_23933_23960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (8))){
var inst_23873 = (state_23913[(7)]);
var inst_23877 = (state_23913[(9)]);
var inst_23881 = (state_23913[(10)]);
var inst_23886 = inst_23873.push(inst_23877);
var tmp23930 = inst_23873;
var inst_23873__$1 = tmp23930;
var inst_23874 = inst_23881;
var state_23913__$1 = (function (){var statearr_23934 = state_23913;
(statearr_23934[(7)] = inst_23873__$1);

(statearr_23934[(14)] = inst_23886);

(statearr_23934[(8)] = inst_23874);

return statearr_23934;
})();
var statearr_23935_23961 = state_23913__$1;
(statearr_23935_23961[(2)] = null);

(statearr_23935_23961[(1)] = (2));


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
});})(c__21118__auto___23947,out))
;
return ((function (switch__21103__auto__,c__21118__auto___23947,out){
return (function() {
var cljs$core$async$state_machine__21104__auto__ = null;
var cljs$core$async$state_machine__21104__auto____0 = (function (){
var statearr_23939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23939[(0)] = cljs$core$async$state_machine__21104__auto__);

(statearr_23939[(1)] = (1));

return statearr_23939;
});
var cljs$core$async$state_machine__21104__auto____1 = (function (state_23913){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_23913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e23940){if((e23940 instanceof Object)){
var ex__21107__auto__ = e23940;
var statearr_23941_23962 = state_23913;
(statearr_23941_23962[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23963 = state_23913;
state_23913 = G__23963;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
cljs$core$async$state_machine__21104__auto__ = function(state_23913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21104__auto____1.call(this,state_23913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21104__auto____0;
cljs$core$async$state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21104__auto____1;
return cljs$core$async$state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto___23947,out))
})();
var state__21120__auto__ = (function (){var statearr_23942 = f__21119__auto__.call(null);
(statearr_23942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto___23947);

return statearr_23942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto___23947,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485901321807