// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30444){
var map__30469 = p__30444;
var map__30469__$1 = ((((!((map__30469 == null)))?((((map__30469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30469):map__30469);
var m = map__30469__$1;
var n = cljs.core.get.call(null,map__30469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30471_30493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30472_30494 = null;
var count__30473_30495 = (0);
var i__30474_30496 = (0);
while(true){
if((i__30474_30496 < count__30473_30495)){
var f_30497 = cljs.core._nth.call(null,chunk__30472_30494,i__30474_30496);
cljs.core.println.call(null,"  ",f_30497);

var G__30498 = seq__30471_30493;
var G__30499 = chunk__30472_30494;
var G__30500 = count__30473_30495;
var G__30501 = (i__30474_30496 + (1));
seq__30471_30493 = G__30498;
chunk__30472_30494 = G__30499;
count__30473_30495 = G__30500;
i__30474_30496 = G__30501;
continue;
} else {
var temp__4657__auto___30502 = cljs.core.seq.call(null,seq__30471_30493);
if(temp__4657__auto___30502){
var seq__30471_30503__$1 = temp__4657__auto___30502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30471_30503__$1)){
var c__19570__auto___30504 = cljs.core.chunk_first.call(null,seq__30471_30503__$1);
var G__30505 = cljs.core.chunk_rest.call(null,seq__30471_30503__$1);
var G__30506 = c__19570__auto___30504;
var G__30507 = cljs.core.count.call(null,c__19570__auto___30504);
var G__30508 = (0);
seq__30471_30493 = G__30505;
chunk__30472_30494 = G__30506;
count__30473_30495 = G__30507;
i__30474_30496 = G__30508;
continue;
} else {
var f_30509 = cljs.core.first.call(null,seq__30471_30503__$1);
cljs.core.println.call(null,"  ",f_30509);

var G__30510 = cljs.core.next.call(null,seq__30471_30503__$1);
var G__30511 = null;
var G__30512 = (0);
var G__30513 = (0);
seq__30471_30493 = G__30510;
chunk__30472_30494 = G__30511;
count__30473_30495 = G__30512;
i__30474_30496 = G__30513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18756__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30514)))?cljs.core.second.call(null,arglists_30514):arglists_30514));
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
var seq__30475_30515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30476_30516 = null;
var count__30477_30517 = (0);
var i__30478_30518 = (0);
while(true){
if((i__30478_30518 < count__30477_30517)){
var vec__30479_30519 = cljs.core._nth.call(null,chunk__30476_30516,i__30478_30518);
var name_30520 = cljs.core.nth.call(null,vec__30479_30519,(0),null);
var map__30482_30521 = cljs.core.nth.call(null,vec__30479_30519,(1),null);
var map__30482_30522__$1 = ((((!((map__30482_30521 == null)))?((((map__30482_30521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30482_30521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482_30521):map__30482_30521);
var doc_30523 = cljs.core.get.call(null,map__30482_30522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30524 = cljs.core.get.call(null,map__30482_30522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30520);

cljs.core.println.call(null," ",arglists_30524);

if(cljs.core.truth_(doc_30523)){
cljs.core.println.call(null," ",doc_30523);
} else {
}

var G__30525 = seq__30475_30515;
var G__30526 = chunk__30476_30516;
var G__30527 = count__30477_30517;
var G__30528 = (i__30478_30518 + (1));
seq__30475_30515 = G__30525;
chunk__30476_30516 = G__30526;
count__30477_30517 = G__30527;
i__30478_30518 = G__30528;
continue;
} else {
var temp__4657__auto___30529 = cljs.core.seq.call(null,seq__30475_30515);
if(temp__4657__auto___30529){
var seq__30475_30530__$1 = temp__4657__auto___30529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30475_30530__$1)){
var c__19570__auto___30531 = cljs.core.chunk_first.call(null,seq__30475_30530__$1);
var G__30532 = cljs.core.chunk_rest.call(null,seq__30475_30530__$1);
var G__30533 = c__19570__auto___30531;
var G__30534 = cljs.core.count.call(null,c__19570__auto___30531);
var G__30535 = (0);
seq__30475_30515 = G__30532;
chunk__30476_30516 = G__30533;
count__30477_30517 = G__30534;
i__30478_30518 = G__30535;
continue;
} else {
var vec__30484_30536 = cljs.core.first.call(null,seq__30475_30530__$1);
var name_30537 = cljs.core.nth.call(null,vec__30484_30536,(0),null);
var map__30487_30538 = cljs.core.nth.call(null,vec__30484_30536,(1),null);
var map__30487_30539__$1 = ((((!((map__30487_30538 == null)))?((((map__30487_30538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30487_30538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30487_30538):map__30487_30538);
var doc_30540 = cljs.core.get.call(null,map__30487_30539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30541 = cljs.core.get.call(null,map__30487_30539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30537);

cljs.core.println.call(null," ",arglists_30541);

if(cljs.core.truth_(doc_30540)){
cljs.core.println.call(null," ",doc_30540);
} else {
}

var G__30542 = cljs.core.next.call(null,seq__30475_30530__$1);
var G__30543 = null;
var G__30544 = (0);
var G__30545 = (0);
seq__30475_30515 = G__30542;
chunk__30476_30516 = G__30543;
count__30477_30517 = G__30544;
i__30478_30518 = G__30545;
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

var seq__30489 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30490 = null;
var count__30491 = (0);
var i__30492 = (0);
while(true){
if((i__30492 < count__30491)){
var role = cljs.core._nth.call(null,chunk__30490,i__30492);
var temp__4657__auto___30546__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30546__$1)){
var spec_30547 = temp__4657__auto___30546__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30547));
} else {
}

var G__30548 = seq__30489;
var G__30549 = chunk__30490;
var G__30550 = count__30491;
var G__30551 = (i__30492 + (1));
seq__30489 = G__30548;
chunk__30490 = G__30549;
count__30491 = G__30550;
i__30492 = G__30551;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30489);
if(temp__4657__auto____$1){
var seq__30489__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30489__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__30489__$1);
var G__30552 = cljs.core.chunk_rest.call(null,seq__30489__$1);
var G__30553 = c__19570__auto__;
var G__30554 = cljs.core.count.call(null,c__19570__auto__);
var G__30555 = (0);
seq__30489 = G__30552;
chunk__30490 = G__30553;
count__30491 = G__30554;
i__30492 = G__30555;
continue;
} else {
var role = cljs.core.first.call(null,seq__30489__$1);
var temp__4657__auto___30556__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30556__$2)){
var spec_30557 = temp__4657__auto___30556__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30557));
} else {
}

var G__30558 = cljs.core.next.call(null,seq__30489__$1);
var G__30559 = null;
var G__30560 = (0);
var G__30561 = (0);
seq__30489 = G__30558;
chunk__30490 = G__30559;
count__30491 = G__30560;
i__30492 = G__30561;
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

//# sourceMappingURL=repl.js.map?rel=1484862760878