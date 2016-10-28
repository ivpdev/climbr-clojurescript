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
var seq__36500_36514 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36501_36515 = null;
var count__36502_36516 = (0);
var i__36503_36517 = (0);
while(true){
if((i__36503_36517 < count__36502_36516)){
var f_36518 = cljs.core._nth.call(null,chunk__36501_36515,i__36503_36517);
cljs.core.println.call(null,"  ",f_36518);

var G__36519 = seq__36500_36514;
var G__36520 = chunk__36501_36515;
var G__36521 = count__36502_36516;
var G__36522 = (i__36503_36517 + (1));
seq__36500_36514 = G__36519;
chunk__36501_36515 = G__36520;
count__36502_36516 = G__36521;
i__36503_36517 = G__36522;
continue;
} else {
var temp__4425__auto___36523 = cljs.core.seq.call(null,seq__36500_36514);
if(temp__4425__auto___36523){
var seq__36500_36524__$1 = temp__4425__auto___36523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36500_36524__$1)){
var c__17608__auto___36525 = cljs.core.chunk_first.call(null,seq__36500_36524__$1);
var G__36526 = cljs.core.chunk_rest.call(null,seq__36500_36524__$1);
var G__36527 = c__17608__auto___36525;
var G__36528 = cljs.core.count.call(null,c__17608__auto___36525);
var G__36529 = (0);
seq__36500_36514 = G__36526;
chunk__36501_36515 = G__36527;
count__36502_36516 = G__36528;
i__36503_36517 = G__36529;
continue;
} else {
var f_36530 = cljs.core.first.call(null,seq__36500_36524__$1);
cljs.core.println.call(null,"  ",f_36530);

var G__36531 = cljs.core.next.call(null,seq__36500_36524__$1);
var G__36532 = null;
var G__36533 = (0);
var G__36534 = (0);
seq__36500_36514 = G__36531;
chunk__36501_36515 = G__36532;
count__36502_36516 = G__36533;
i__36503_36517 = G__36534;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36535 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36535);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36535)))?cljs.core.second.call(null,arglists_36535):arglists_36535));
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
var seq__36504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36505 = null;
var count__36506 = (0);
var i__36507 = (0);
while(true){
if((i__36507 < count__36506)){
var vec__36508 = cljs.core._nth.call(null,chunk__36505,i__36507);
var name = cljs.core.nth.call(null,vec__36508,(0),null);
var map__36509 = cljs.core.nth.call(null,vec__36508,(1),null);
var map__36509__$1 = ((((!((map__36509 == null)))?((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var doc = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36536 = seq__36504;
var G__36537 = chunk__36505;
var G__36538 = count__36506;
var G__36539 = (i__36507 + (1));
seq__36504 = G__36536;
chunk__36505 = G__36537;
count__36506 = G__36538;
i__36507 = G__36539;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36504);
if(temp__4425__auto__){
var seq__36504__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36504__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__36504__$1);
var G__36540 = cljs.core.chunk_rest.call(null,seq__36504__$1);
var G__36541 = c__17608__auto__;
var G__36542 = cljs.core.count.call(null,c__17608__auto__);
var G__36543 = (0);
seq__36504 = G__36540;
chunk__36505 = G__36541;
count__36506 = G__36542;
i__36507 = G__36543;
continue;
} else {
var vec__36511 = cljs.core.first.call(null,seq__36504__$1);
var name = cljs.core.nth.call(null,vec__36511,(0),null);
var map__36512 = cljs.core.nth.call(null,vec__36511,(1),null);
var map__36512__$1 = ((((!((map__36512 == null)))?((((map__36512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36512):map__36512);
var doc = cljs.core.get.call(null,map__36512__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36512__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36544 = cljs.core.next.call(null,seq__36504__$1);
var G__36545 = null;
var G__36546 = (0);
var G__36547 = (0);
seq__36504 = G__36544;
chunk__36505 = G__36545;
count__36506 = G__36546;
i__36507 = G__36547;
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

//# sourceMappingURL=repl.js.map?rel=1477646669864