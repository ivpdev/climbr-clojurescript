// Compiled by ClojureScript 1.7.170 {}
goog.provide('jamesmacaulay.zelkova.impl.signal');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('alandipert.kahn');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.set');
goog.require('jamesmacaulay.zelkova.impl.time');

/**
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol = function(){};

jamesmacaulay.zelkova.impl.signal.value = (function jamesmacaulay$zelkova$impl$signal$value(boxed){
if((!((boxed == null))) && (!((boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 == null)))){
return boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1(boxed);
} else {
var x__17460__auto__ = (((boxed == null))?null:boxed);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.value[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,boxed);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.value["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,boxed);
} else {
throw cljs.core.missing_protocol.call(null,"BoxedValueProtocol.value",boxed);
}
}
}
});


/**
 * Events come in from "the outside world" and get transformed into Messages by input signal nodes
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.EventProtocol = function(){};

jamesmacaulay.zelkova.impl.signal.topic = (function jamesmacaulay$zelkova$impl$signal$topic(event){
if((!((event == null))) && (!((event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1 == null)))){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1(event);
} else {
var x__17460__auto__ = (((event == null))?null:event);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.topic[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,event);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topic["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,event);
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.topic",event);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.timestamp = (function jamesmacaulay$zelkova$impl$signal$timestamp(event){
if((!((event == null))) && (!((event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1 == null)))){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1(event);
} else {
var x__17460__auto__ = (((event == null))?null:event);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.timestamp[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,event);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.timestamp["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,event);
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.timestamp",event);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.record_timestamp = (function jamesmacaulay$zelkova$impl$signal$record_timestamp(event,timestamp){
if((!((event == null))) && (!((event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2 == null)))){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2(event,timestamp);
} else {
var x__17460__auto__ = (((event == null))?null:event);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.record_timestamp[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,event,timestamp);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.record_timestamp["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,event,timestamp);
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.record-timestamp",event);
}
}
}
});


/**
 * Messages are propagated through the signal graph, and can either be "fresh" or "cached".
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.MessageProtocol = function(){};

/**
 * returns `true` if the message represents a fresh value, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.fresh_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$fresh_QMARK_(msg){
if((!((msg == null))) && (!((msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 == null)))){
return msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1(msg);
} else {
var x__17460__auto__ = (((msg == null))?null:msg);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,msg);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,msg);
} else {
throw cljs.core.missing_protocol.call(null,"MessageProtocol.fresh?",msg);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {jamesmacaulay.zelkova.impl.signal.EventProtocol}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.Event = (function (topic,value,timestamp,__meta,__extmap,__hash){
this.topic = topic;
this.value = value;
this.timestamp = timestamp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.topic;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timestamp;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2 = (function (e,t){
var self__ = this;
var e__$1 = this;
return cljs.core.assoc.call(null,e__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),t);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19103,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19105 = (((k19103 instanceof cljs.core.Keyword))?k19103.fqn:null);
switch (G__19105) {
case "topic":
return self__.topic;

break;
case "value":
return self__.value;

break;
case "timestamp":
return self__.timestamp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19103,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.Event{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19102){
var self__ = this;
var G__19102__$1 = this;
return (new cljs.core.RecordIter((0),G__19102__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19102){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19106 = cljs.core.keyword_identical_QMARK_;
var expr__19107 = k__17427__auto__;
if(cljs.core.truth_(pred__19106.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__19107))){
return (new jamesmacaulay.zelkova.impl.signal.Event(G__19102,self__.value,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19106.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__19107))){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,G__19102,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19106.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__19107))){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,G__19102,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19102),null));
}
}
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19102){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,G__19102,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.__GT_Event = (function jamesmacaulay$zelkova$impl$signal$__GT_Event(topic,value,timestamp){
return (new jamesmacaulay.zelkova.impl.signal.Event(topic,value,timestamp,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Event = (function jamesmacaulay$zelkova$impl$signal$map__GT_Event(G__19104){
return (new jamesmacaulay.zelkova.impl.signal.Event(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__19104),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__19104),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(G__19104),null,cljs.core.dissoc.call(null,G__19104,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),null));
});

jamesmacaulay.zelkova.impl.signal.make_event = (function jamesmacaulay$zelkova$impl$signal$make_event(topic,value){
return jamesmacaulay.zelkova.impl.signal.__GT_Event.call(null,topic,value,null);
});

/**
* @constructor
 * @implements {jamesmacaulay.zelkova.impl.signal.MessageProtocol}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.Fresh = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19111,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19113 = (((k19111 instanceof cljs.core.Keyword))?k19111.fqn:null);
switch (G__19113) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19111,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.Fresh{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19110){
var self__ = this;
var G__19110__$1 = this;
return (new cljs.core.RecordIter((0),G__19110__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19110){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19114 = cljs.core.keyword_identical_QMARK_;
var expr__19115 = k__17427__auto__;
if(cljs.core.truth_(pred__19114.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__19115))){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(G__19110,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19110),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19110){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,G__19110,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$__GT_Fresh(value){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$map__GT_Fresh(G__19112){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__19112),null,cljs.core.dissoc.call(null,G__19112,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {jamesmacaulay.zelkova.impl.signal.MessageProtocol}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.Cached = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19119,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19121 = (((k19119 instanceof cljs.core.Keyword))?k19119.fqn:null);
switch (G__19121) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19119,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.Cached{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19118){
var self__ = this;
var G__19118__$1 = this;
return (new cljs.core.RecordIter((0),G__19118__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19118){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19122 = cljs.core.keyword_identical_QMARK_;
var expr__19123 = k__17427__auto__;
if(cljs.core.truth_(pred__19122.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__19123))){
return (new jamesmacaulay.zelkova.impl.signal.Cached(G__19118,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19118),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19118){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,G__19118,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Cached.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$__GT_Cached(value){
return (new jamesmacaulay.zelkova.impl.signal.Cached(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$map__GT_Cached(G__19120){
return (new jamesmacaulay.zelkova.impl.signal.Cached(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__19120),null,cljs.core.dissoc.call(null,G__19120,new cljs.core.Keyword(null,"value","value",305978217)),null));
});

jamesmacaulay.zelkova.impl.signal.fresh = (function jamesmacaulay$zelkova$impl$signal$fresh(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Fresh.call(null,value);
});
jamesmacaulay.zelkova.impl.signal.cached = (function jamesmacaulay$zelkova$impl$signal$cached(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Cached.call(null,value);
});
/**
 * A transducer which takes in batches of signal graph messages and pipes out fresh values.
 */
jamesmacaulay.zelkova.impl.signal.fresh_values = cljs.core.comp.call(null,cljs.core.cat,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.value));

/**
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.SignalProtocol = function(){};

jamesmacaulay.zelkova.impl.signal.input_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$input_QMARK_(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.input_QMARK_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.input_QMARK_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.input?",s);
}
}
}
});

/**
 * returns the set of "parent" signals on which this signal depends
 */
jamesmacaulay.zelkova.impl.signal.signal_deps = (function jamesmacaulay$zelkova$impl$signal$signal_deps(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_deps[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_deps["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.signal-deps",s);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.parents_map = (function jamesmacaulay$zelkova$impl$signal$parents_map(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.parents_map[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.parents_map["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.parents-map",s);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.kids_map = (function jamesmacaulay$zelkova$impl$signal$kids_map(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.kids_map[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kids_map["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.kids-map",s);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.topsort = (function jamesmacaulay$zelkova$impl$signal$topsort(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.topsort[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topsort["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.topsort",s);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.inputs_by_topic = (function jamesmacaulay$zelkova$impl$signal$inputs_by_topic(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.inputs-by-topic",s);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$kid_indexes_map(s){
if((!((s == null))) && (!((s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1 == null)))){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1(s);
} else {
var x__17460__auto__ = (((s == null))?null:s);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,s);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.kid-indexes-map",s);
}
}
}
});

/**
 * returns `true` if the argument satisfies `SignalProtocol`, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.signal_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$signal_QMARK_(x){
if(!((x == null))){
if((false) || (x.jamesmacaulay$zelkova$impl$signal$SignalProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.impl.signal.SignalProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.impl.signal.SignalProtocol,x);
}
});
/**
 * Takes a signal and returns a zipper which can be used to traverse the signal graph.
 */
jamesmacaulay.zelkova.impl.signal.node_graph_zipper = (function jamesmacaulay$zelkova$impl$signal$node_graph_zipper(output_node){
return clojure.zip.zipper.call(null,cljs.core.constantly.call(null,true),cljs.core.comp.call(null,cljs.core.seq,jamesmacaulay.zelkova.impl.signal.signal_deps),null,output_node);
});
/**
 * Returns a new zipper location that skips the whole subtree at `loc`.
 */
jamesmacaulay.zelkova.impl.signal.skip_subtree = (function jamesmacaulay$zelkova$impl$signal$skip_subtree(loc){
var or__16805__auto__ = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p))){
var or__16805__auto____$1 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
var G__19128 = clojure.zip.up.call(null,p);
p = G__19128;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
});
/**
 * Takes a signal and returns a map of two maps:
 *  :parents-map is a map of signals to their parents,
 *  :kids-map is a map of signals to their children.
 */
jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps = (function jamesmacaulay$zelkova$impl$signal$calculate_dependency_maps(signal){
var parents_map = cljs.core.PersistentArrayMap.EMPTY;
var kids_map = cljs.core.PersistentArrayMap.fromArray([signal,cljs.core.PersistentHashSet.EMPTY], true, false);
var loc = jamesmacaulay.zelkova.impl.signal.node_graph_zipper.call(null,signal);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),parents_map,new cljs.core.Keyword(null,"kids-map","kids-map",643095940),kids_map], null);
} else {
if(cljs.core.contains_QMARK_.call(null,parents_map,clojure.zip.node.call(null,loc))){
var G__19129 = parents_map;
var G__19130 = kids_map;
var G__19131 = jamesmacaulay.zelkova.impl.signal.skip_subtree.call(null,loc);
parents_map = G__19129;
kids_map = G__19130;
loc = G__19131;
continue;
} else {
var this_sig = clojure.zip.node.call(null,loc);
var parents = jamesmacaulay.zelkova.impl.signal.signal_deps.call(null,this_sig);
var next_sig = clojure.zip.next.call(null,loc);
var G__19132 = cljs.core.assoc.call(null,parents_map,this_sig,parents);
var G__19133 = cljs.core.merge_with.call(null,clojure.set.union,kids_map,cljs.core.zipmap.call(null,parents,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([this_sig], true))));
var G__19134 = next_sig;
parents_map = G__19132;
kids_map = G__19133;
loc = G__19134;
continue;

}
}
break;
}
});
jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort = (function jamesmacaulay$zelkova$impl$signal$parents_map__GT_topsort(pm){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,alandipert.kahn.kahn_sort.call(null,pm)));
});
jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map = (function jamesmacaulay$zelkova$impl$signal$topsort__GT_topic_map(sorted_sigs){
return cljs.core.reduce.call(null,(function (m,sig){
var temp__4423__auto__ = new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(sig);
if(cljs.core.truth_(temp__4423__auto__)){
var topic = temp__4423__auto__;
return cljs.core.assoc.call(null,m,topic,cljs.core.conj.call(null,cljs.core.get.call(null,m,topic,cljs.core.PersistentVector.EMPTY),sig));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,sorted_sigs);
});
jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$build_kid_indexes_map(kids_map,sorted_sigs){
var signal__GT_index = cljs.core.zipmap.call(null,sorted_sigs,cljs.core.range.call(null));
var signals__GT_sorted_index_set = ((function (signal__GT_index){
return (function (p1__19135_SHARP_){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.map.call(null,signal__GT_index),p1__19135_SHARP_);
});})(signal__GT_index))
;
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,kids_map),cljs.core.map.call(null,signals__GT_sorted_index_set,cljs.core.vals.call(null,kids_map)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata = (function (parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,__meta,__extmap,__hash){
this.parents_map = parents_map;
this.kids_map = kids_map;
this.topsort = topsort;
this.kid_indexes_map = kid_indexes_map;
this.inputs_by_topic = inputs_by_topic;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19137,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19139 = (((k19137 instanceof cljs.core.Keyword))?k19137.fqn:null);
switch (G__19139) {
case "parents-map":
return self__.parents_map;

break;
case "kids-map":
return self__.kids_map;

break;
case "topsort":
return self__.topsort;

break;
case "kid-indexes-map":
return self__.kid_indexes_map;

break;
case "inputs-by-topic":
return self__.inputs_by_topic;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19137,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kids-map","kids-map",643095940),self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topsort","topsort",-718814409),self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19136){
var self__ = this;
var G__19136__$1 = this;
return (new cljs.core.RecordIter((0),G__19136__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),new cljs.core.Keyword(null,"kids-map","kids-map",643095940),new cljs.core.Keyword(null,"topsort","topsort",-718814409),new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kids-map","kids-map",643095940),null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),null,new cljs.core.Keyword(null,"topsort","topsort",-718814409),null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19136){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19140 = cljs.core.keyword_identical_QMARK_;
var expr__19141 = k__17427__auto__;
if(cljs.core.truth_(pred__19140.call(null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),expr__19141))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(G__19136,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19140.call(null,new cljs.core.Keyword(null,"kids-map","kids-map",643095940),expr__19141))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,G__19136,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19140.call(null,new cljs.core.Keyword(null,"topsort","topsort",-718814409),expr__19141))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,G__19136,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19140.call(null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),expr__19141))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,G__19136,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19140.call(null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),expr__19141))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,G__19136,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19136),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kids-map","kids-map",643095940),self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topsort","topsort",-718814409),self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19136){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,G__19136,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parents-map","parents-map",591846625,null),new cljs.core.Symbol(null,"kids-map","kids-map",-2011339829,null),new cljs.core.Symbol(null,"topsort","topsort",921717118,null),new cljs.core.Symbol(null,"kid-indexes-map","kid-indexes-map",519621521,null),new cljs.core.Symbol(null,"inputs-by-topic","inputs-by-topic",-680485601,null)], null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinitionMetadata(G__19138){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(G__19138),new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(G__19138),new cljs.core.Keyword(null,"topsort","topsort",-718814409).cljs$core$IFn$_invoke$arity$1(G__19138),new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006).cljs$core$IFn$_invoke$arity$1(G__19138),new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168).cljs$core$IFn$_invoke$arity$1(G__19138),null,cljs.core.dissoc.call(null,G__19138,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),new cljs.core.Keyword(null,"kids-map","kids-map",643095940),new cljs.core.Keyword(null,"topsort","topsort",-718814409),new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168)),null));
});

jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata = (function jamesmacaulay$zelkova$impl$signal$attach_delayed_metadata(sig){
var delayed_dep_maps = (new cljs.core.Delay((function (){
return jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps.call(null,sig);
}),null));
var delayed_parents_map = (new cljs.core.Delay(((function (delayed_dep_maps){
return (function (){
return new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,delayed_dep_maps));
});})(delayed_dep_maps))
,null));
var delayed_kids_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map){
return (function (){
return new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,delayed_dep_maps));
});})(delayed_dep_maps,delayed_parents_map))
,null));
var delayed_topsort = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort.call(null,cljs.core.deref.call(null,delayed_parents_map));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map))
,null));
var delayed_topic_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort){
return (function (){
return jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map.call(null,cljs.core.deref.call(null,delayed_topsort));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort))
,null));
var delayed_kid_indexes_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map.call(null,cljs.core.deref.call(null,delayed_kids_map),cljs.core.deref.call(null,delayed_topsort));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map))
,null));
return cljs.core.with_meta.call(null,sig,jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata.call(null,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_kid_indexes_map,delayed_topic_map));
});
jamesmacaulay.zelkova.impl.signal.delegate_to_channel = (function jamesmacaulay$zelkova$impl$signal$delegate_to_channel(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19147 = arguments.length;
var i__17864__auto___19148 = (0);
while(true){
if((i__17864__auto___19148 < len__17863__auto___19147)){
args__17870__auto__.push((arguments[i__17864__auto___19148]));

var G__19149 = (i__17864__auto___19148 + (1));
i__17864__auto___19148 = G__19149;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic = (function (f,ch,args){
if(!((ch == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)))))].join('')));
}

return cljs.core.apply.call(null,f,ch,args);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$maxFixedArity = (2);

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$applyTo = (function (seq19144){
var G__19145 = cljs.core.first.call(null,seq19144);
var seq19144__$1 = cljs.core.next.call(null,seq19144);
var G__19146 = cljs.core.first.call(null,seq19144__$1);
var seq19144__$2 = cljs.core.next.call(null,seq19144__$1);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic(G__19145,G__19146,seq19144__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {jamesmacaulay.zelkova.impl.signal.SignalProtocol}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinition = (function (init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,__meta,__extmap,__hash){
this.init_fn = init_fn;
this.sources = sources;
this.relayed_event_topic = relayed_event_topic;
this.msg_xform = msg_xform;
this.deps = deps;
this.event_sources = event_sources;
this.write_port_channel = write_port_channel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19151,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19153 = (((k19151 instanceof cljs.core.Keyword))?k19151.fqn:null);
switch (G__19153) {
case "init-fn":
return self__.init_fn;

break;
case "sources":
return self__.sources;

break;
case "relayed-event-topic":
return self__.relayed_event_topic;

break;
case "msg-xform":
return self__.msg_xform;

break;
case "deps":
return self__.deps;

break;
case "event-sources":
return self__.event_sources;

break;
case "write-port-channel":
return self__.write_port_channel;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19151,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.close_BANG_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.closed_QMARK_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinition{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19150){
var self__ = this;
var G__19150__$1 = this;
return (new cljs.core.RecordIter((0),G__19150__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),null], null), null),self__.sources);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.signal_QMARK_),(function (){var or__16805__auto__ = self__.deps;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return self__.sources;
}
})());
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"topsort","topsort",-718814409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1_handler){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.put_BANG_,self__.write_port_channel,val,fn1_handler);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"event-sources","event-sources",708931713),null,new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),null,new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),null,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),null,new cljs.core.Keyword(null,"deps","deps",1883360319),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19150){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19154 = cljs.core.keyword_identical_QMARK_;
var expr__19155 = k__17427__auto__;
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(G__19150,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,G__19150,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,G__19150,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,G__19150,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,G__19150,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,G__19150,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19154.call(null,new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),expr__19155))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,G__19150,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19150),null));
}
}
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19150){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,G__19150,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init-fn","init-fn",-1877177798,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"relayed-event-topic","relayed-event-topic",1964384988,null),new cljs.core.Symbol(null,"msg-xform","msg-xform",209279042,null),new cljs.core.Symbol(null,"deps","deps",-771075450,null),new cljs.core.Symbol(null,"event-sources","event-sources",-1945504056,null),new cljs.core.Symbol(null,"write-port-channel","write-port-channel",863579225,null)], null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinition(G__19152){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"event-sources","event-sources",708931713).cljs$core$IFn$_invoke$arity$1(G__19152),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302).cljs$core$IFn$_invoke$arity$1(G__19152),null,cljs.core.dissoc.call(null,G__19152,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302)),null));
});

/**
 * Takes a topic, and returns an input signal which relays matching events as messages to its children
 */
jamesmacaulay.zelkova.impl.signal.setup_event_relay = (function jamesmacaulay$zelkova$impl$signal$setup_event_relay(opts){
var temp__4423__auto__ = new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var relayed_topic = temp__4423__auto__;
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.map.call(null,((function (relayed_topic,temp__4423__auto__){
return (function (p__19160){
var vec__19161 = p__19160;
var event = cljs.core.nth.call(null,vec__19161,(0),null);
var _prev = cljs.core.nth.call(null,vec__19161,(1),null);
var _msgs = cljs.core.nth.call(null,vec__19161,(2),null);
if(cljs.core._EQ_.call(null,relayed_topic,jamesmacaulay.zelkova.impl.signal.topic.call(null,event))){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,event));
} else {
return null;
}
});})(relayed_topic,temp__4423__auto__))
),cljs.core.remove.call(null,cljs.core.nil_QMARK_)));
} else {
return opts;
}
});
/**
 * Takes a map of opts and returns a signal.
 */
jamesmacaulay.zelkova.impl.signal.make_signal = (function jamesmacaulay$zelkova$impl$signal$make_signal(opts){
return jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata.call(null,jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition.call(null,jamesmacaulay.zelkova.impl.signal.setup_event_relay.call(null,opts)));
});
/**
 * Wraps `x` in a vector, if necessary, returning an empty vector if `x` is `nil`.
 */
jamesmacaulay.zelkova.impl.signal.ensure_sequential = (function jamesmacaulay$zelkova$impl$signal$ensure_sequential(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
 * Takes a collection of message batches, presumably from some corresponding collection
 *   of signals. Pads each batch, when necessary, with cached versions of the last message
 *   in the batch, such that the returned batches are all the same size.
 */
jamesmacaulay.zelkova.impl.signal.pad = (function jamesmacaulay$zelkova$impl$signal$pad(msg_batches){
if(((1) >= cljs.core.count.call(null,msg_batches))){
return msg_batches;
} else {
var max_count = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,msg_batches));
var pad__$1 = ((function (max_count){
return (function (msgs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.cat,cljs.core.take.call(null,max_count)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msgs,cljs.core.repeat.call(null,jamesmacaulay.zelkova.impl.signal.cached.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,cljs.core.last.call(null,msgs))))], null));
});})(max_count))
;
return cljs.core.map.call(null,pad__$1,msg_batches);
}
});
/**
 * Takes a collection of message batches and returns a sequence of vectors of corresponding
 *   messages from each batch.
 */
jamesmacaulay.zelkova.impl.signal.transpose = (function jamesmacaulay$zelkova$impl$signal$transpose(msg_batches){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,msg_batches);
});
/**
 * Takes a signal's `msg-fn` and wraps it to provide various behaviours:
 *  * return values are turned into sequences with `ensure-sequential`
 *  * message batches from each signal are padded and transposed, and `msg-fn` is called
 *    once for each vector of messages in the resulting series, as if each were the result
 *    of a separate event.
 *  * when `msg-fn` returns `nil` or an empty sequence, the previous value is returned as a
 *    cached value.
 */
jamesmacaulay.zelkova.impl.signal.wrap_msg_xform = (function jamesmacaulay$zelkova$impl$signal$wrap_msg_xform(msg_xform){
var msg_fn = (function (args){
return cljs.core.sequence.call(null,msg_xform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
});
return ((function (msg_fn){
return (function (prev,event_and_msg_batches){
var input_series = jamesmacaulay.zelkova.impl.signal.transpose.call(null,jamesmacaulay.zelkova.impl.signal.pad.call(null,event_and_msg_batches));
var output_series = cljs.core.reduce.call(null,((function (input_series,msg_fn){
return (function (acc,p__19164){
var vec__19165 = p__19164;
var event = cljs.core.nth.call(null,vec__19165,(0),null);
var msgs = cljs.core.nthnext.call(null,vec__19165,(1));
var prev__$1 = jamesmacaulay.zelkova.impl.signal.value.call(null,cljs.core.peek.call(null,acc));
var msgs__$1 = cljs.core.vec.call(null,msgs);
var new_msgs = msg_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,prev__$1,msgs__$1], null));
return cljs.core.into.call(null,acc,new_msgs);
});})(input_series,msg_fn))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.cached.call(null,prev)], null),input_series);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,output_series))){
return output_series;
} else {
return cljs.core.subvec.call(null,output_series,(1));
}
});
;})(msg_fn))
});
jamesmacaulay.zelkova.impl.signal.tap_signal = (function jamesmacaulay$zelkova$impl$signal$tap_signal(mult_map,source){
var mult = cljs.core.get.call(null,mult_map,source);
return cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));
});
jamesmacaulay.zelkova.impl.signal.tap_signals = (function jamesmacaulay$zelkova$impl$signal$tap_signals(mult_map,sources){
return cljs.core.async.map.call(null,cljs.core.vector,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.tap_signal.call(null,mult_map,new cljs.core.Keyword(null,"events","events",1792552201))], null),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.impl.signal.tap_signal,mult_map)),sources));
});
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_ = (function jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG_(init,msg_xform,c_in,c_out){
var wrapped_msg_fn = jamesmacaulay.zelkova.impl.signal.wrap_msg_xform.call(null,msg_xform);
var c__18916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18916__auto__,wrapped_msg_fn){
return (function (){
var f__18917__auto__ = (function (){var switch__18895__auto__ = ((function (c__18916__auto__,wrapped_msg_fn){
return (function (state_19223){
var state_val_19224 = (state_19223[(1)]);
if((state_val_19224 === (1))){
var inst_19204 = init;
var state_19223__$1 = (function (){var statearr_19225 = state_19223;
(statearr_19225[(7)] = inst_19204);

return statearr_19225;
})();
var statearr_19226_19242 = state_19223__$1;
(statearr_19226_19242[(2)] = null);

(statearr_19226_19242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (2))){
var state_19223__$1 = state_19223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19223__$1,(4),c_in);
} else {
if((state_val_19224 === (3))){
var inst_19221 = (state_19223[(2)]);
var state_19223__$1 = state_19223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19223__$1,inst_19221);
} else {
if((state_val_19224 === (4))){
var inst_19207 = (state_19223[(8)]);
var inst_19207__$1 = (state_19223[(2)]);
var inst_19208 = (inst_19207__$1 == null);
var state_19223__$1 = (function (){var statearr_19227 = state_19223;
(statearr_19227[(8)] = inst_19207__$1);

return statearr_19227;
})();
if(cljs.core.truth_(inst_19208)){
var statearr_19228_19243 = state_19223__$1;
(statearr_19228_19243[(1)] = (5));

} else {
var statearr_19229_19244 = state_19223__$1;
(statearr_19229_19244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (5))){
var inst_19210 = cljs.core.async.close_BANG_.call(null,c_out);
var state_19223__$1 = state_19223;
var statearr_19230_19245 = state_19223__$1;
(statearr_19230_19245[(2)] = inst_19210);

(statearr_19230_19245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (6))){
var inst_19207 = (state_19223[(8)]);
var inst_19204 = (state_19223[(7)]);
var inst_19212 = (state_19223[(9)]);
var inst_19212__$1 = wrapped_msg_fn.call(null,inst_19204,inst_19207);
var state_19223__$1 = (function (){var statearr_19231 = state_19223;
(statearr_19231[(9)] = inst_19212__$1);

return statearr_19231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19223__$1,(8),c_out,inst_19212__$1);
} else {
if((state_val_19224 === (7))){
var inst_19219 = (state_19223[(2)]);
var state_19223__$1 = state_19223;
var statearr_19232_19246 = state_19223__$1;
(statearr_19232_19246[(2)] = inst_19219);

(statearr_19232_19246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19224 === (8))){
var inst_19212 = (state_19223[(9)]);
var inst_19214 = (state_19223[(2)]);
var inst_19215 = cljs.core.last.call(null,inst_19212);
var inst_19216 = jamesmacaulay.zelkova.impl.signal.value.call(null,inst_19215);
var inst_19204 = inst_19216;
var state_19223__$1 = (function (){var statearr_19233 = state_19223;
(statearr_19233[(10)] = inst_19214);

(statearr_19233[(7)] = inst_19204);

return statearr_19233;
})();
var statearr_19234_19247 = state_19223__$1;
(statearr_19234_19247[(2)] = null);

(statearr_19234_19247[(1)] = (2));


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
});})(c__18916__auto__,wrapped_msg_fn))
;
return ((function (switch__18895__auto__,c__18916__auto__,wrapped_msg_fn){
return (function() {
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__ = null;
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____0 = (function (){
var statearr_19238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19238[(0)] = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__);

(statearr_19238[(1)] = (1));

return statearr_19238;
});
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____1 = (function (state_19223){
while(true){
var ret_value__18897__auto__ = (function (){try{while(true){
var result__18898__auto__ = switch__18895__auto__.call(null,state_19223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18898__auto__;
}
break;
}
}catch (e19239){if((e19239 instanceof Object)){
var ex__18899__auto__ = e19239;
var statearr_19240_19248 = state_19223;
(statearr_19240_19248[(5)] = ex__18899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19249 = state_19223;
state_19223 = G__19249;
continue;
} else {
return ret_value__18897__auto__;
}
break;
}
});
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__ = function(state_19223){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____1.call(this,state_19223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____0;
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto____1;
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__18896__auto__;
})()
;})(switch__18895__auto__,c__18916__auto__,wrapped_msg_fn))
})();
var state__18918__auto__ = (function (){var statearr_19241 = f__18917__auto__.call(null);
(statearr_19241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18916__auto__);

return statearr_19241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18918__auto__);
});})(c__18916__auto__,wrapped_msg_fn))
);

return c__18916__auto__;
});
jamesmacaulay.zelkova.impl.signal.build_message_mult = (function jamesmacaulay$zelkova$impl$signal$build_message_mult(mult_map,p__19250,live_graph,opts){
var map__19253 = p__19250;
var map__19253__$1 = ((((!((map__19253 == null)))?((((map__19253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19253):map__19253);
var init_fn = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"init-fn","init-fn",777257971));
var sources = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var msg_xform = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485));
var c_in = jamesmacaulay.zelkova.impl.signal.tap_signals.call(null,mult_map,sources);
var c_out = cljs.core.async.chan.call(null);
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_.call(null,init_fn.call(null,live_graph,opts),msg_xform,c_in,c_out);

return cljs.core.async.mult.call(null,c_out);
});
jamesmacaulay.zelkova.impl.signal.build_message_mult_map = (function jamesmacaulay$zelkova$impl$signal$build_message_mult_map(sorted_signals,events_mult,live_graph,opts){
return cljs.core.reduce.call(null,(function (mult_map,signal){
return cljs.core.assoc.call(null,mult_map,signal,jamesmacaulay.zelkova.impl.signal.build_message_mult.call(null,mult_map,signal,live_graph,opts));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),events_mult], null),sorted_signals);
});
jamesmacaulay.zelkova.impl.signal.gather_event_sources = (function jamesmacaulay$zelkova$impl$signal$gather_event_sources(sorted_signals){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713)),sorted_signals);
});

/**
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.LiveChannelGraphProtocol = function(){};

jamesmacaulay.zelkova.impl.signal.signal_mult = (function jamesmacaulay$zelkova$impl$signal$signal_mult(g,sig){
if((!((g == null))) && (!((g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2 == null)))){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2(g,sig);
} else {
var x__17460__auto__ = (((g == null))?null:g);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_mult[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,g,sig);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_mult["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,g,sig);
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.signal-mult",g);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.connect_to_world = (function jamesmacaulay$zelkova$impl$signal$connect_to_world(g){
if((!((g == null))) && (!((g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1 == null)))){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1(g);
} else {
var x__17460__auto__ = (((g == null))?null:g);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.connect_to_world[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,g);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.connect_to_world["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.connect-to-world",g);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.init = (function jamesmacaulay$zelkova$impl$signal$init(g){
if((!((g == null))) && (!((g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1 == null)))){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1(g);
} else {
var x__17460__auto__ = (((g == null))?null:g);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.init[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,g);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.init["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.init",g);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {jamesmacaulay.zelkova.impl.signal.LiveChannelGraphProtocol}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph = (function (definition,events_channel,mult_map,output_values_mult,opts,__meta,__extmap,__hash){
this.definition = definition;
this.events_channel = events_channel;
this.mult_map = mult_map;
this.output_values_mult = output_values_mult;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17419__auto__,k__17420__auto__){
var self__ = this;
var this__17419__auto____$1 = this;
return cljs.core._lookup.call(null,this__17419__auto____$1,k__17420__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17421__auto__,k19256,else__17422__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
var G__19258 = (((k19256 instanceof cljs.core.Keyword))?k19256.fqn:null);
switch (G__19258) {
case "definition":
return self__.definition;

break;
case "events-channel":
return self__.events_channel;

break;
case "mult-map":
return self__.mult_map;

break;
case "output-values-mult":
return self__.output_values_mult;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19256,else__17422__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17433__auto__,writer__17434__auto__,opts__17435__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
var pr_pair__17436__auto__ = ((function (this__17433__auto____$1){
return (function (keyval__17437__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,cljs.core.pr_writer,""," ","",opts__17435__auto__,keyval__17437__auto__);
});})(this__17433__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17434__auto__,pr_pair__17436__auto__,"#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{",", ","}",opts__17435__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"definition","definition",-1198729982),self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IIterable$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19255){
var self__ = this;
var G__19255__$1 = this;
return (new cljs.core.RecordIter((0),G__19255__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),new cljs.core.Keyword(null,"mult-map","mult-map",460417931),new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),new cljs.core.Keyword(null,"opts","opts",155075701)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17417__auto__){
var self__ = this;
var this__17417__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17423__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17414__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_imap.call(null,this__17414__auto____$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17415__auto__,other__17416__auto__){
var self__ = this;
var this__17415__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16793__auto__ = other__17416__auto__;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = (this__17415__auto____$1.constructor === other__17416__auto__.constructor);
if(and__16793__auto____$1){
return cljs.core.equiv_map.call(null,this__17415__auto____$1,other__17416__auto__);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2 = (function (_,sig){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.mult_map,sig);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var world_19267 = jamesmacaulay.zelkova.impl.signal.gather_event_sources.call(null,jamesmacaulay.zelkova.impl.signal.topsort.call(null,self__.definition));
var seq__19259_19268 = cljs.core.seq.call(null,cljs.core.vals.call(null,world_19267));
var chunk__19260_19269 = null;
var count__19261_19270 = (0);
var i__19262_19271 = (0);
while(true){
if((i__19262_19271 < count__19261_19270)){
var channel_fn_19272 = cljs.core._nth.call(null,chunk__19260_19269,i__19262_19271);
cljs.core.async.pipe.call(null,channel_fn_19272.call(null,g__$1,self__.opts),self__.events_channel);

var G__19273 = seq__19259_19268;
var G__19274 = chunk__19260_19269;
var G__19275 = count__19261_19270;
var G__19276 = (i__19262_19271 + (1));
seq__19259_19268 = G__19273;
chunk__19260_19269 = G__19274;
count__19261_19270 = G__19275;
i__19262_19271 = G__19276;
continue;
} else {
var temp__4425__auto___19277 = cljs.core.seq.call(null,seq__19259_19268);
if(temp__4425__auto___19277){
var seq__19259_19278__$1 = temp__4425__auto___19277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19259_19278__$1)){
var c__17608__auto___19279 = cljs.core.chunk_first.call(null,seq__19259_19278__$1);
var G__19280 = cljs.core.chunk_rest.call(null,seq__19259_19278__$1);
var G__19281 = c__17608__auto___19279;
var G__19282 = cljs.core.count.call(null,c__17608__auto___19279);
var G__19283 = (0);
seq__19259_19268 = G__19280;
chunk__19260_19269 = G__19281;
count__19261_19270 = G__19282;
i__19262_19271 = G__19283;
continue;
} else {
var channel_fn_19284 = cljs.core.first.call(null,seq__19259_19278__$1);
cljs.core.async.pipe.call(null,channel_fn_19284.call(null,g__$1,self__.opts),self__.events_channel);

var G__19285 = cljs.core.next.call(null,seq__19259_19278__$1);
var G__19286 = null;
var G__19287 = (0);
var G__19288 = (0);
seq__19259_19268 = G__19285;
chunk__19260_19269 = G__19286;
count__19261_19270 = G__19287;
i__19262_19271 = G__19288;
continue;
}
} else {
}
}
break;
}

return g__$1;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(self__.definition).call(null,g__$1,self__.opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.events_channel,val,fn1);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17428__auto__,k__17429__auto__){
var self__ = this;
var this__17428__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),null,new cljs.core.Keyword(null,"definition","definition",-1198729982),null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),null,new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),null,new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__17429__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17428__auto____$1),self__.__meta),k__17429__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17429__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17426__auto__,k__17427__auto__,G__19255){
var self__ = this;
var this__17426__auto____$1 = this;
var pred__19263 = cljs.core.keyword_identical_QMARK_;
var expr__19264 = k__17427__auto__;
if(cljs.core.truth_(pred__19263.call(null,new cljs.core.Keyword(null,"definition","definition",-1198729982),expr__19264))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(G__19255,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19263.call(null,new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),expr__19264))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,G__19255,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19263.call(null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),expr__19264))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,G__19255,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19263.call(null,new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),expr__19264))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,G__19255,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19263.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__19264))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,G__19255,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17427__auto__,G__19255),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17431__auto__){
var self__ = this;
var this__17431__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"definition","definition",-1198729982),self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17418__auto__,G__19255){
var self__ = this;
var this__17418__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,G__19255,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (g,ch,close_QMARK_){
var self__ = this;
var g__$1 = this;
return cljs.core.async.tap_STAR_.call(null,self__.output_values_mult,ch,close_QMARK_);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (g,ch){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_STAR_.call(null,self__.output_values_mult,ch);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_all_STAR_.call(null,self__.output_values_mult);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17424__auto__,entry__17425__auto__){
var self__ = this;
var this__17424__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17425__auto__)){
return cljs.core._assoc.call(null,this__17424__auto____$1,cljs.core._nth.call(null,entry__17425__auto__,(0)),cljs.core._nth.call(null,entry__17425__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17424__auto____$1,entry__17425__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"definition","definition",441801545,null),new cljs.core.Symbol(null,"events-channel","events-channel",-762258648,null),new cljs.core.Symbol(null,"mult-map","mult-map",2100949458,null),new cljs.core.Symbol(null,"output-values-mult","output-values-mult",-1627641481,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrSeq = (function (this__17453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$__GT_LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$map__GT_LiveChannelGraph(G__19257){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(G__19257),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121).cljs$core$IFn$_invoke$arity$1(G__19257),new cljs.core.Keyword(null,"mult-map","mult-map",460417931).cljs$core$IFn$_invoke$arity$1(G__19257),new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288).cljs$core$IFn$_invoke$arity$1(G__19257),new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__19257),null,cljs.core.dissoc.call(null,G__19257,new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),new cljs.core.Keyword(null,"mult-map","mult-map",460417931),new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),new cljs.core.Keyword(null,"opts","opts",155075701)),null));
});


/**
 * @interface
 */
jamesmacaulay.zelkova.impl.signal.SignalLike = function(){};

jamesmacaulay.zelkova.impl.signal.spawn_STAR_ = (function jamesmacaulay$zelkova$impl$signal$spawn_STAR_(x,opts){
if((!((x == null))) && (!((x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 == null)))){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2(x,opts);
} else {
var x__17460__auto__ = (((x == null))?null:x);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,x,opts);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"SignalLike.spawn*",x);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_ = (function jamesmacaulay$zelkova$impl$signal$pipe_to_atom_STAR_(x,a,ks){
if((!((x == null))) && (!((x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 == null)))){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3(x,a,ks);
} else {
var x__17460__auto__ = (((x == null))?null:x);
var m__17461__auto__ = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,x,a,ks);
} else {
var m__17461__auto____$1 = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,x,a,ks);
} else {
throw cljs.core.missing_protocol.call(null,"SignalLike.pipe-to-atom*",x);
}
}
}
});

jamesmacaulay.zelkova.impl.signal.events_xform = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,(function (event){
if((jamesmacaulay.zelkova.impl.signal.timestamp.call(null,event) == null)){
return jamesmacaulay.zelkova.impl.signal.record_timestamp.call(null,event,jamesmacaulay.zelkova.impl.time.now.call(null));
} else {
return event;
}
})),jamesmacaulay.zelkova.impl.signal.ensure_sequential));
jamesmacaulay.zelkova.impl.signal.build_output_values_mult = (function jamesmacaulay$zelkova$impl$signal$build_output_values_mult(mult_map,output_sig){
return cljs.core.async.mult.call(null,cljs.core.async.tap.call(null,cljs.core.get.call(null,mult_map,output_sig),cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.impl.signal.fresh_values)));
});
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (g,opts){
var g__$1 = this;
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(g__$1),opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (g,atm,ks){
var g__$1 = this;
jamesmacaulay.async_tools.core.do_effects.call(null,((cljs.core.seq.call(null,ks))?cljs.core.partial.call(null,cljs.core.swap_BANG_,atm,cljs.core.assoc_in,ks):cljs.core.partial.call(null,cljs.core.reset_BANG_,atm)),cljs.core.async.tap.call(null,g__$1,cljs.core.async.chan.call(null)));

return atm;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (s,opts){
var s__$1 = this;
var events_channel = cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.impl.signal.events_xform);
var events_mult = cljs.core.async.mult.call(null,events_channel);
var mult_map = jamesmacaulay.zelkova.impl.signal.build_message_mult_map.call(null,jamesmacaulay.zelkova.impl.signal.topsort.call(null,s__$1),events_mult,s__$1,opts);
var output_values_mult = jamesmacaulay.zelkova.impl.signal.build_output_values_mult.call(null,mult_map,s__$1);
return jamesmacaulay.zelkova.impl.signal.connect_to_world.call(null,jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph.call(null,s__$1,events_channel,mult_map,output_values_mult,opts));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (s,atm,ks){
var s__$1 = this;
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_.call(null,jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,s__$1,null),atm,ks);
});
if(typeof jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn !== 'undefined'){
} else {
/**
 * Takes some asynchronous `source` of values, plus an event `topic`, and returns
 * an event-source function. `source` may be one of the following:
 * 
 * * a function taking a live graph and an options map, and returns a channel of values
 * * a channel of values
 * * a mult of some such value channel
 * 
 * The returned event-source function has the same signature as the functions that can
 * be supplied for the `source` argument, but the values are wrapped as Events.
 */
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn = (function (){var method_table__17718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17720__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17722__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"jamesmacaulay.zelkova.impl.signal","value-source->events-fn"),((function (method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__){
return (function (source,topic){
if(((!((source == null)))?(((false) || (source.cljs$core$async$Mult$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.Mult,source):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.Mult,source))){
return new cljs.core.Keyword(null,"mult","mult",1466794774);
} else {
if(((!((source == null)))?(((false) || (source.cljs$core$async$impl$protocols$ReadPort$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,source):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,source))){
return new cljs.core.Keyword(null,"readport","readport",-1909228810);
} else {
if(cljs.core.ifn_QMARK_.call(null,source)){
return new cljs.core.Keyword(null,"ifn","ifn",230683491);
} else {
return null;
}
}
}
});})(method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17722__auto__,method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__));
})();
}
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"ifn","ifn",230683491),(function (src_fn,topic){
return (function (graph,opts){
var ch = src_fn.call(null,graph,opts);
return cljs.core.async.pipe.call(null,ch,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.impl.signal.make_event,topic))));
});
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"mult","mult",1466794774),(function (src_mult,topic){
return jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,(function (_,___$1){
return cljs.core.async.tap.call(null,src_mult,cljs.core.async.chan.call(null));
}),topic);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"readport","readport",-1909228810),(function (src_chan,topic){
return jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,cljs.core.async.mult.call(null,src_chan),topic);
}));

//# sourceMappingURL=signal.js.map?rel=1457129832607