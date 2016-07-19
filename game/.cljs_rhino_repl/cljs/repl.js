// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8233_8247 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8234_8248 = null;
var count__8235_8249 = (0);
var i__8236_8250 = (0);
while(true){
if((i__8236_8250 < count__8235_8249)){
var f_8251 = cljs.core._nth.call(null,chunk__8234_8248,i__8236_8250);
cljs.core.println.call(null,"  ",f_8251);

var G__8252 = seq__8233_8247;
var G__8253 = chunk__8234_8248;
var G__8254 = count__8235_8249;
var G__8255 = (i__8236_8250 + (1));
seq__8233_8247 = G__8252;
chunk__8234_8248 = G__8253;
count__8235_8249 = G__8254;
i__8236_8250 = G__8255;
continue;
} else {
var temp__4425__auto___8256 = cljs.core.seq.call(null,seq__8233_8247);
if(temp__4425__auto___8256){
var seq__8233_8257__$1 = temp__4425__auto___8256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8233_8257__$1)){
var c__6023__auto___8258 = cljs.core.chunk_first.call(null,seq__8233_8257__$1);
var G__8259 = cljs.core.chunk_rest.call(null,seq__8233_8257__$1);
var G__8260 = c__6023__auto___8258;
var G__8261 = cljs.core.count.call(null,c__6023__auto___8258);
var G__8262 = (0);
seq__8233_8247 = G__8259;
chunk__8234_8248 = G__8260;
count__8235_8249 = G__8261;
i__8236_8250 = G__8262;
continue;
} else {
var f_8263 = cljs.core.first.call(null,seq__8233_8257__$1);
cljs.core.println.call(null,"  ",f_8263);

var G__8264 = cljs.core.next.call(null,seq__8233_8257__$1);
var G__8265 = null;
var G__8266 = (0);
var G__8267 = (0);
seq__8233_8247 = G__8264;
chunk__8234_8248 = G__8265;
count__8235_8249 = G__8266;
i__8236_8250 = G__8267;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8268 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5220__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5220__auto__)){
return or__5220__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8268);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8268)))?cljs.core.second.call(null,arglists_8268):arglists_8268));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8237 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8238 = null;
var count__8239 = (0);
var i__8240 = (0);
while(true){
if((i__8240 < count__8239)){
var vec__8241 = cljs.core._nth.call(null,chunk__8238,i__8240);
var name = cljs.core.nth.call(null,vec__8241,(0),null);
var map__8242 = cljs.core.nth.call(null,vec__8241,(1),null);
var map__8242__$1 = ((((!((map__8242 == null)))?((((map__8242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8242):map__8242);
var doc = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8269 = seq__8237;
var G__8270 = chunk__8238;
var G__8271 = count__8239;
var G__8272 = (i__8240 + (1));
seq__8237 = G__8269;
chunk__8238 = G__8270;
count__8239 = G__8271;
i__8240 = G__8272;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8237);
if(temp__4425__auto__){
var seq__8237__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8237__$1)){
var c__6023__auto__ = cljs.core.chunk_first.call(null,seq__8237__$1);
var G__8273 = cljs.core.chunk_rest.call(null,seq__8237__$1);
var G__8274 = c__6023__auto__;
var G__8275 = cljs.core.count.call(null,c__6023__auto__);
var G__8276 = (0);
seq__8237 = G__8273;
chunk__8238 = G__8274;
count__8239 = G__8275;
i__8240 = G__8276;
continue;
} else {
var vec__8244 = cljs.core.first.call(null,seq__8237__$1);
var name = cljs.core.nth.call(null,vec__8244,(0),null);
var map__8245 = cljs.core.nth.call(null,vec__8244,(1),null);
var map__8245__$1 = ((((!((map__8245 == null)))?((((map__8245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8245):map__8245);
var doc = cljs.core.get.call(null,map__8245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8277 = cljs.core.next.call(null,seq__8237__$1);
var G__8278 = null;
var G__8279 = (0);
var G__8280 = (0);
seq__8237 = G__8277;
chunk__8238 = G__8278;
count__8239 = G__8279;
i__8240 = G__8280;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map