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
var seq__22939_22953 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22940_22954 = null;
var count__22941_22955 = (0);
var i__22942_22956 = (0);
while(true){
if((i__22942_22956 < count__22941_22955)){
var f_22957 = cljs.core._nth.call(null,chunk__22940_22954,i__22942_22956);
cljs.core.println.call(null,"  ",f_22957);

var G__22958 = seq__22939_22953;
var G__22959 = chunk__22940_22954;
var G__22960 = count__22941_22955;
var G__22961 = (i__22942_22956 + (1));
seq__22939_22953 = G__22958;
chunk__22940_22954 = G__22959;
count__22941_22955 = G__22960;
i__22942_22956 = G__22961;
continue;
} else {
var temp__4425__auto___22962 = cljs.core.seq.call(null,seq__22939_22953);
if(temp__4425__auto___22962){
var seq__22939_22963__$1 = temp__4425__auto___22962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22939_22963__$1)){
var c__17608__auto___22964 = cljs.core.chunk_first.call(null,seq__22939_22963__$1);
var G__22965 = cljs.core.chunk_rest.call(null,seq__22939_22963__$1);
var G__22966 = c__17608__auto___22964;
var G__22967 = cljs.core.count.call(null,c__17608__auto___22964);
var G__22968 = (0);
seq__22939_22953 = G__22965;
chunk__22940_22954 = G__22966;
count__22941_22955 = G__22967;
i__22942_22956 = G__22968;
continue;
} else {
var f_22969 = cljs.core.first.call(null,seq__22939_22963__$1);
cljs.core.println.call(null,"  ",f_22969);

var G__22970 = cljs.core.next.call(null,seq__22939_22963__$1);
var G__22971 = null;
var G__22972 = (0);
var G__22973 = (0);
seq__22939_22953 = G__22970;
chunk__22940_22954 = G__22971;
count__22941_22955 = G__22972;
i__22942_22956 = G__22973;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22974 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22974);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22974)))?cljs.core.second.call(null,arglists_22974):arglists_22974));
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
var seq__22943 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22944 = null;
var count__22945 = (0);
var i__22946 = (0);
while(true){
if((i__22946 < count__22945)){
var vec__22947 = cljs.core._nth.call(null,chunk__22944,i__22946);
var name = cljs.core.nth.call(null,vec__22947,(0),null);
var map__22948 = cljs.core.nth.call(null,vec__22947,(1),null);
var map__22948__$1 = ((((!((map__22948 == null)))?((((map__22948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
var doc = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22975 = seq__22943;
var G__22976 = chunk__22944;
var G__22977 = count__22945;
var G__22978 = (i__22946 + (1));
seq__22943 = G__22975;
chunk__22944 = G__22976;
count__22945 = G__22977;
i__22946 = G__22978;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22943);
if(temp__4425__auto__){
var seq__22943__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22943__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22943__$1);
var G__22979 = cljs.core.chunk_rest.call(null,seq__22943__$1);
var G__22980 = c__17608__auto__;
var G__22981 = cljs.core.count.call(null,c__17608__auto__);
var G__22982 = (0);
seq__22943 = G__22979;
chunk__22944 = G__22980;
count__22945 = G__22981;
i__22946 = G__22982;
continue;
} else {
var vec__22950 = cljs.core.first.call(null,seq__22943__$1);
var name = cljs.core.nth.call(null,vec__22950,(0),null);
var map__22951 = cljs.core.nth.call(null,vec__22950,(1),null);
var map__22951__$1 = ((((!((map__22951 == null)))?((((map__22951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22951):map__22951);
var doc = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22983 = cljs.core.next.call(null,seq__22943__$1);
var G__22984 = null;
var G__22985 = (0);
var G__22986 = (0);
seq__22943 = G__22983;
chunk__22944 = G__22984;
count__22945 = G__22985;
i__22946 = G__22986;
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

//# sourceMappingURL=repl.js.map?rel=1456351336678