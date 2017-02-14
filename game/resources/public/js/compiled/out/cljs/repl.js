// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30434){
var map__30459 = p__30434;
var map__30459__$1 = ((((!((map__30459 == null)))?((((map__30459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30459):map__30459);
var m = map__30459__$1;
var n = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30461_30483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30462_30484 = null;
var count__30463_30485 = (0);
var i__30464_30486 = (0);
while(true){
if((i__30464_30486 < count__30463_30485)){
var f_30487 = cljs.core._nth.call(null,chunk__30462_30484,i__30464_30486);
cljs.core.println.call(null,"  ",f_30487);

var G__30488 = seq__30461_30483;
var G__30489 = chunk__30462_30484;
var G__30490 = count__30463_30485;
var G__30491 = (i__30464_30486 + (1));
seq__30461_30483 = G__30488;
chunk__30462_30484 = G__30489;
count__30463_30485 = G__30490;
i__30464_30486 = G__30491;
continue;
} else {
var temp__4657__auto___30492 = cljs.core.seq.call(null,seq__30461_30483);
if(temp__4657__auto___30492){
var seq__30461_30493__$1 = temp__4657__auto___30492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30461_30493__$1)){
var c__19570__auto___30494 = cljs.core.chunk_first.call(null,seq__30461_30493__$1);
var G__30495 = cljs.core.chunk_rest.call(null,seq__30461_30493__$1);
var G__30496 = c__19570__auto___30494;
var G__30497 = cljs.core.count.call(null,c__19570__auto___30494);
var G__30498 = (0);
seq__30461_30483 = G__30495;
chunk__30462_30484 = G__30496;
count__30463_30485 = G__30497;
i__30464_30486 = G__30498;
continue;
} else {
var f_30499 = cljs.core.first.call(null,seq__30461_30493__$1);
cljs.core.println.call(null,"  ",f_30499);

var G__30500 = cljs.core.next.call(null,seq__30461_30493__$1);
var G__30501 = null;
var G__30502 = (0);
var G__30503 = (0);
seq__30461_30483 = G__30500;
chunk__30462_30484 = G__30501;
count__30463_30485 = G__30502;
i__30464_30486 = G__30503;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30504 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18756__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30504);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30504)))?cljs.core.second.call(null,arglists_30504):arglists_30504));
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
var seq__30465_30505 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30466_30506 = null;
var count__30467_30507 = (0);
var i__30468_30508 = (0);
while(true){
if((i__30468_30508 < count__30467_30507)){
var vec__30469_30509 = cljs.core._nth.call(null,chunk__30466_30506,i__30468_30508);
var name_30510 = cljs.core.nth.call(null,vec__30469_30509,(0),null);
var map__30472_30511 = cljs.core.nth.call(null,vec__30469_30509,(1),null);
var map__30472_30512__$1 = ((((!((map__30472_30511 == null)))?((((map__30472_30511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30472_30511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472_30511):map__30472_30511);
var doc_30513 = cljs.core.get.call(null,map__30472_30512__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30514 = cljs.core.get.call(null,map__30472_30512__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30510);

cljs.core.println.call(null," ",arglists_30514);

if(cljs.core.truth_(doc_30513)){
cljs.core.println.call(null," ",doc_30513);
} else {
}

var G__30515 = seq__30465_30505;
var G__30516 = chunk__30466_30506;
var G__30517 = count__30467_30507;
var G__30518 = (i__30468_30508 + (1));
seq__30465_30505 = G__30515;
chunk__30466_30506 = G__30516;
count__30467_30507 = G__30517;
i__30468_30508 = G__30518;
continue;
} else {
var temp__4657__auto___30519 = cljs.core.seq.call(null,seq__30465_30505);
if(temp__4657__auto___30519){
var seq__30465_30520__$1 = temp__4657__auto___30519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30465_30520__$1)){
var c__19570__auto___30521 = cljs.core.chunk_first.call(null,seq__30465_30520__$1);
var G__30522 = cljs.core.chunk_rest.call(null,seq__30465_30520__$1);
var G__30523 = c__19570__auto___30521;
var G__30524 = cljs.core.count.call(null,c__19570__auto___30521);
var G__30525 = (0);
seq__30465_30505 = G__30522;
chunk__30466_30506 = G__30523;
count__30467_30507 = G__30524;
i__30468_30508 = G__30525;
continue;
} else {
var vec__30474_30526 = cljs.core.first.call(null,seq__30465_30520__$1);
var name_30527 = cljs.core.nth.call(null,vec__30474_30526,(0),null);
var map__30477_30528 = cljs.core.nth.call(null,vec__30474_30526,(1),null);
var map__30477_30529__$1 = ((((!((map__30477_30528 == null)))?((((map__30477_30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30477_30528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477_30528):map__30477_30528);
var doc_30530 = cljs.core.get.call(null,map__30477_30529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30531 = cljs.core.get.call(null,map__30477_30529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30527);

cljs.core.println.call(null," ",arglists_30531);

if(cljs.core.truth_(doc_30530)){
cljs.core.println.call(null," ",doc_30530);
} else {
}

var G__30532 = cljs.core.next.call(null,seq__30465_30520__$1);
var G__30533 = null;
var G__30534 = (0);
var G__30535 = (0);
seq__30465_30505 = G__30532;
chunk__30466_30506 = G__30533;
count__30467_30507 = G__30534;
i__30468_30508 = G__30535;
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

var seq__30479 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30480 = null;
var count__30481 = (0);
var i__30482 = (0);
while(true){
if((i__30482 < count__30481)){
var role = cljs.core._nth.call(null,chunk__30480,i__30482);
var temp__4657__auto___30536__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30536__$1)){
var spec_30537 = temp__4657__auto___30536__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30537));
} else {
}

var G__30538 = seq__30479;
var G__30539 = chunk__30480;
var G__30540 = count__30481;
var G__30541 = (i__30482 + (1));
seq__30479 = G__30538;
chunk__30480 = G__30539;
count__30481 = G__30540;
i__30482 = G__30541;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30479);
if(temp__4657__auto____$1){
var seq__30479__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30479__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__30479__$1);
var G__30542 = cljs.core.chunk_rest.call(null,seq__30479__$1);
var G__30543 = c__19570__auto__;
var G__30544 = cljs.core.count.call(null,c__19570__auto__);
var G__30545 = (0);
seq__30479 = G__30542;
chunk__30480 = G__30543;
count__30481 = G__30544;
i__30482 = G__30545;
continue;
} else {
var role = cljs.core.first.call(null,seq__30479__$1);
var temp__4657__auto___30546__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30546__$2)){
var spec_30547 = temp__4657__auto___30546__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30547));
} else {
}

var G__30548 = cljs.core.next.call(null,seq__30479__$1);
var G__30549 = null;
var G__30550 = (0);
var G__30551 = (0);
seq__30479 = G__30548;
chunk__30480 = G__30549;
count__30481 = G__30550;
i__30482 = G__30551;
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

//# sourceMappingURL=repl.js.map?rel=1485901326398