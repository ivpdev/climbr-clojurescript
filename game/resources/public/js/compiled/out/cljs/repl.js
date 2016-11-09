// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23362){
var map__23387 = p__23362;
var map__23387__$1 = ((((!((map__23387 == null)))?((((map__23387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23387):map__23387);
var m = map__23387__$1;
var n = cljs.core.get.call(null,map__23387__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23387__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23389_23411 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23390_23412 = null;
var count__23391_23413 = (0);
var i__23392_23414 = (0);
while(true){
if((i__23392_23414 < count__23391_23413)){
var f_23415 = cljs.core._nth.call(null,chunk__23390_23412,i__23392_23414);
cljs.core.println.call(null,"  ",f_23415);

var G__23416 = seq__23389_23411;
var G__23417 = chunk__23390_23412;
var G__23418 = count__23391_23413;
var G__23419 = (i__23392_23414 + (1));
seq__23389_23411 = G__23416;
chunk__23390_23412 = G__23417;
count__23391_23413 = G__23418;
i__23392_23414 = G__23419;
continue;
} else {
var temp__4657__auto___23420 = cljs.core.seq.call(null,seq__23389_23411);
if(temp__4657__auto___23420){
var seq__23389_23421__$1 = temp__4657__auto___23420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23389_23421__$1)){
var c__19556__auto___23422 = cljs.core.chunk_first.call(null,seq__23389_23421__$1);
var G__23423 = cljs.core.chunk_rest.call(null,seq__23389_23421__$1);
var G__23424 = c__19556__auto___23422;
var G__23425 = cljs.core.count.call(null,c__19556__auto___23422);
var G__23426 = (0);
seq__23389_23411 = G__23423;
chunk__23390_23412 = G__23424;
count__23391_23413 = G__23425;
i__23392_23414 = G__23426;
continue;
} else {
var f_23427 = cljs.core.first.call(null,seq__23389_23421__$1);
cljs.core.println.call(null,"  ",f_23427);

var G__23428 = cljs.core.next.call(null,seq__23389_23421__$1);
var G__23429 = null;
var G__23430 = (0);
var G__23431 = (0);
seq__23389_23411 = G__23428;
chunk__23390_23412 = G__23429;
count__23391_23413 = G__23430;
i__23392_23414 = G__23431;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23432 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18742__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23432);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23432)))?cljs.core.second.call(null,arglists_23432):arglists_23432));
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
var seq__23393_23433 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23394_23434 = null;
var count__23395_23435 = (0);
var i__23396_23436 = (0);
while(true){
if((i__23396_23436 < count__23395_23435)){
var vec__23397_23437 = cljs.core._nth.call(null,chunk__23394_23434,i__23396_23436);
var name_23438 = cljs.core.nth.call(null,vec__23397_23437,(0),null);
var map__23400_23439 = cljs.core.nth.call(null,vec__23397_23437,(1),null);
var map__23400_23440__$1 = ((((!((map__23400_23439 == null)))?((((map__23400_23439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23400_23439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23400_23439):map__23400_23439);
var doc_23441 = cljs.core.get.call(null,map__23400_23440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23442 = cljs.core.get.call(null,map__23400_23440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23438);

cljs.core.println.call(null," ",arglists_23442);

if(cljs.core.truth_(doc_23441)){
cljs.core.println.call(null," ",doc_23441);
} else {
}

var G__23443 = seq__23393_23433;
var G__23444 = chunk__23394_23434;
var G__23445 = count__23395_23435;
var G__23446 = (i__23396_23436 + (1));
seq__23393_23433 = G__23443;
chunk__23394_23434 = G__23444;
count__23395_23435 = G__23445;
i__23396_23436 = G__23446;
continue;
} else {
var temp__4657__auto___23447 = cljs.core.seq.call(null,seq__23393_23433);
if(temp__4657__auto___23447){
var seq__23393_23448__$1 = temp__4657__auto___23447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23393_23448__$1)){
var c__19556__auto___23449 = cljs.core.chunk_first.call(null,seq__23393_23448__$1);
var G__23450 = cljs.core.chunk_rest.call(null,seq__23393_23448__$1);
var G__23451 = c__19556__auto___23449;
var G__23452 = cljs.core.count.call(null,c__19556__auto___23449);
var G__23453 = (0);
seq__23393_23433 = G__23450;
chunk__23394_23434 = G__23451;
count__23395_23435 = G__23452;
i__23396_23436 = G__23453;
continue;
} else {
var vec__23402_23454 = cljs.core.first.call(null,seq__23393_23448__$1);
var name_23455 = cljs.core.nth.call(null,vec__23402_23454,(0),null);
var map__23405_23456 = cljs.core.nth.call(null,vec__23402_23454,(1),null);
var map__23405_23457__$1 = ((((!((map__23405_23456 == null)))?((((map__23405_23456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23405_23456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23405_23456):map__23405_23456);
var doc_23458 = cljs.core.get.call(null,map__23405_23457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23459 = cljs.core.get.call(null,map__23405_23457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23455);

cljs.core.println.call(null," ",arglists_23459);

if(cljs.core.truth_(doc_23458)){
cljs.core.println.call(null," ",doc_23458);
} else {
}

var G__23460 = cljs.core.next.call(null,seq__23393_23448__$1);
var G__23461 = null;
var G__23462 = (0);
var G__23463 = (0);
seq__23393_23433 = G__23460;
chunk__23394_23434 = G__23461;
count__23395_23435 = G__23462;
i__23396_23436 = G__23463;
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

var seq__23407 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23408 = null;
var count__23409 = (0);
var i__23410 = (0);
while(true){
if((i__23410 < count__23409)){
var role = cljs.core._nth.call(null,chunk__23408,i__23410);
var temp__4657__auto___23464__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23464__$1)){
var spec_23465 = temp__4657__auto___23464__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23465));
} else {
}

var G__23466 = seq__23407;
var G__23467 = chunk__23408;
var G__23468 = count__23409;
var G__23469 = (i__23410 + (1));
seq__23407 = G__23466;
chunk__23408 = G__23467;
count__23409 = G__23468;
i__23410 = G__23469;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__23407);
if(temp__4657__auto____$1){
var seq__23407__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23407__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__23407__$1);
var G__23470 = cljs.core.chunk_rest.call(null,seq__23407__$1);
var G__23471 = c__19556__auto__;
var G__23472 = cljs.core.count.call(null,c__19556__auto__);
var G__23473 = (0);
seq__23407 = G__23470;
chunk__23408 = G__23471;
count__23409 = G__23472;
i__23410 = G__23473;
continue;
} else {
var role = cljs.core.first.call(null,seq__23407__$1);
var temp__4657__auto___23474__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23474__$2)){
var spec_23475 = temp__4657__auto___23474__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23475));
} else {
}

var G__23476 = cljs.core.next.call(null,seq__23407__$1);
var G__23477 = null;
var G__23478 = (0);
var G__23479 = (0);
seq__23407 = G__23476;
chunk__23408 = G__23477;
count__23409 = G__23478;
i__23410 = G__23479;
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

//# sourceMappingURL=repl.js.map?rel=1478625922365