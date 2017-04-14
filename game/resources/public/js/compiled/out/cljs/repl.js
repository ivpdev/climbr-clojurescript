// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30487){
var map__30512 = p__30487;
var map__30512__$1 = ((((!((map__30512 == null)))?((((map__30512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);
var m = map__30512__$1;
var n = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__30514_30536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30515_30537 = null;
var count__30516_30538 = (0);
var i__30517_30539 = (0);
while(true){
if((i__30517_30539 < count__30516_30538)){
var f_30540 = cljs.core._nth.call(null,chunk__30515_30537,i__30517_30539);
cljs.core.println.call(null,"  ",f_30540);

var G__30541 = seq__30514_30536;
var G__30542 = chunk__30515_30537;
var G__30543 = count__30516_30538;
var G__30544 = (i__30517_30539 + (1));
seq__30514_30536 = G__30541;
chunk__30515_30537 = G__30542;
count__30516_30538 = G__30543;
i__30517_30539 = G__30544;
continue;
} else {
var temp__4657__auto___30545 = cljs.core.seq.call(null,seq__30514_30536);
if(temp__4657__auto___30545){
var seq__30514_30546__$1 = temp__4657__auto___30545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30514_30546__$1)){
var c__19556__auto___30547 = cljs.core.chunk_first.call(null,seq__30514_30546__$1);
var G__30548 = cljs.core.chunk_rest.call(null,seq__30514_30546__$1);
var G__30549 = c__19556__auto___30547;
var G__30550 = cljs.core.count.call(null,c__19556__auto___30547);
var G__30551 = (0);
seq__30514_30536 = G__30548;
chunk__30515_30537 = G__30549;
count__30516_30538 = G__30550;
i__30517_30539 = G__30551;
continue;
} else {
var f_30552 = cljs.core.first.call(null,seq__30514_30546__$1);
cljs.core.println.call(null,"  ",f_30552);

var G__30553 = cljs.core.next.call(null,seq__30514_30546__$1);
var G__30554 = null;
var G__30555 = (0);
var G__30556 = (0);
seq__30514_30536 = G__30553;
chunk__30515_30537 = G__30554;
count__30516_30538 = G__30555;
i__30517_30539 = G__30556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18742__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30557);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30557)))?cljs.core.second.call(null,arglists_30557):arglists_30557));
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
var seq__30518_30558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30519_30559 = null;
var count__30520_30560 = (0);
var i__30521_30561 = (0);
while(true){
if((i__30521_30561 < count__30520_30560)){
var vec__30522_30562 = cljs.core._nth.call(null,chunk__30519_30559,i__30521_30561);
var name_30563 = cljs.core.nth.call(null,vec__30522_30562,(0),null);
var map__30525_30564 = cljs.core.nth.call(null,vec__30522_30562,(1),null);
var map__30525_30565__$1 = ((((!((map__30525_30564 == null)))?((((map__30525_30564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30525_30564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30525_30564):map__30525_30564);
var doc_30566 = cljs.core.get.call(null,map__30525_30565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30567 = cljs.core.get.call(null,map__30525_30565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30563);

cljs.core.println.call(null," ",arglists_30567);

if(cljs.core.truth_(doc_30566)){
cljs.core.println.call(null," ",doc_30566);
} else {
}

var G__30568 = seq__30518_30558;
var G__30569 = chunk__30519_30559;
var G__30570 = count__30520_30560;
var G__30571 = (i__30521_30561 + (1));
seq__30518_30558 = G__30568;
chunk__30519_30559 = G__30569;
count__30520_30560 = G__30570;
i__30521_30561 = G__30571;
continue;
} else {
var temp__4657__auto___30572 = cljs.core.seq.call(null,seq__30518_30558);
if(temp__4657__auto___30572){
var seq__30518_30573__$1 = temp__4657__auto___30572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30518_30573__$1)){
var c__19556__auto___30574 = cljs.core.chunk_first.call(null,seq__30518_30573__$1);
var G__30575 = cljs.core.chunk_rest.call(null,seq__30518_30573__$1);
var G__30576 = c__19556__auto___30574;
var G__30577 = cljs.core.count.call(null,c__19556__auto___30574);
var G__30578 = (0);
seq__30518_30558 = G__30575;
chunk__30519_30559 = G__30576;
count__30520_30560 = G__30577;
i__30521_30561 = G__30578;
continue;
} else {
var vec__30527_30579 = cljs.core.first.call(null,seq__30518_30573__$1);
var name_30580 = cljs.core.nth.call(null,vec__30527_30579,(0),null);
var map__30530_30581 = cljs.core.nth.call(null,vec__30527_30579,(1),null);
var map__30530_30582__$1 = ((((!((map__30530_30581 == null)))?((((map__30530_30581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30530_30581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30530_30581):map__30530_30581);
var doc_30583 = cljs.core.get.call(null,map__30530_30582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30584 = cljs.core.get.call(null,map__30530_30582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30580);

cljs.core.println.call(null," ",arglists_30584);

if(cljs.core.truth_(doc_30583)){
cljs.core.println.call(null," ",doc_30583);
} else {
}

var G__30585 = cljs.core.next.call(null,seq__30518_30573__$1);
var G__30586 = null;
var G__30587 = (0);
var G__30588 = (0);
seq__30518_30558 = G__30585;
chunk__30519_30559 = G__30586;
count__30520_30560 = G__30587;
i__30521_30561 = G__30588;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__30532 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30533 = null;
var count__30534 = (0);
var i__30535 = (0);
while(true){
if((i__30535 < count__30534)){
var role = cljs.core._nth.call(null,chunk__30533,i__30535);
var temp__4657__auto___30589__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30589__$1)){
var spec_30590 = temp__4657__auto___30589__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30590));
} else {
}

var G__30591 = seq__30532;
var G__30592 = chunk__30533;
var G__30593 = count__30534;
var G__30594 = (i__30535 + (1));
seq__30532 = G__30591;
chunk__30533 = G__30592;
count__30534 = G__30593;
i__30535 = G__30594;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30532);
if(temp__4657__auto____$1){
var seq__30532__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30532__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__30532__$1);
var G__30595 = cljs.core.chunk_rest.call(null,seq__30532__$1);
var G__30596 = c__19556__auto__;
var G__30597 = cljs.core.count.call(null,c__19556__auto__);
var G__30598 = (0);
seq__30532 = G__30595;
chunk__30533 = G__30596;
count__30534 = G__30597;
i__30535 = G__30598;
continue;
} else {
var role = cljs.core.first.call(null,seq__30532__$1);
var temp__4657__auto___30599__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30599__$2)){
var spec_30600 = temp__4657__auto___30599__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30600));
} else {
}

var G__30601 = cljs.core.next.call(null,seq__30532__$1);
var G__30602 = null;
var G__30603 = (0);
var G__30604 = (0);
seq__30532 = G__30601;
chunk__30533 = G__30602;
count__30534 = G__30603;
i__30535 = G__30604;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1492189022167