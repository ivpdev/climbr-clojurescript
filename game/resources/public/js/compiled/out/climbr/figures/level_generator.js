// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level_generator');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
climbr.figures.level_generator.generate_boulder_candidate = (function climbr$figures$level_generator$generate_boulder_candidate(seed){
var rng = (new MersenneTwister(seed));
var x = (function (){var random_int__23275__auto__ = ((function (rng){
return (function (rng__23276__auto__,n__23277__auto__){
var random_raw__23278__auto__ = rng__23276__auto__.random();
return (random_raw__23278__auto__ * n__23277__auto__);
});})(rng))
;
var random_int_from_range__23279__auto__ = ((function (random_int__23275__auto__,rng){
return (function (rng__23276__auto__,range__23280__auto__){
var min__23281__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(0)):(0));
var max__23282__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(1)):(1));
return (random_int__23275__auto__.call(null,rng__23276__auto__,(min__23281__auto__ + max__23282__auto__)) - min__23281__auto__);
});})(random_int__23275__auto__,rng))
;
var random_value_with_exclude__23283__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,rng){
return (function (next_random_val_fn__23284__auto__,should_be_rejected_QMARK___23285__auto__){
while(true){
var random_value__23286__auto__ = next_random_val_fn__23284__auto__.call(null);
var excluded_QMARK___23287__auto__ = should_be_rejected_QMARK___23285__auto__.call(null,random_value__23286__auto__);
if(cljs.core.not.call(null,excluded_QMARK___23287__auto__)){
return random_value__23286__auto__;
} else {
cljs.core.println.call(null,"rejected: ",random_value__23286__auto__);

var G__23400 = next_random_val_fn__23284__auto__;
var G__23401 = should_be_rejected_QMARK___23285__auto__;
next_random_val_fn__23284__auto__ = G__23400;
should_be_rejected_QMARK___23285__auto__ = G__23401;
continue;
}
break;
}
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,rng))
;
var random_int_with__23288__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng){
return (function (opts__23289__auto__){
var range__23280__auto__ = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var exclude__23290__auto__ = new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var in_range_QMARK___23291__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng){
return (function (val__23292__auto__,range__23280__auto____$1){
var min__23281__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(0));
var max__23282__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(1));
return ((val__23292__auto__ >= min__23281__auto__)) && ((val__23292__auto__ <= max__23282__auto__));
});})(range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng))
;
var should_be_rejected_QMARK___23285__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng){
return (function (val__23292__auto__){
if(!(cljs.core.vector_QMARK_.call(null,exclude__23290__auto__))){
return false;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,exclude__23290__auto__)){
return in_range_QMARK___23291__auto__.call(null,val__23292__auto__,exclude__23290__auto__);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,exclude__23290__auto__)){
return cljs.core.every_QMARK_.call(null,((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng){
return (function (){
return cljs.core.partial.call(null,in_range_QMARK___23291__auto__,val__23292__auto__);
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng))
,exclude__23290__auto__);
} else {
return false;

}
}
}
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng))
;
var next_random_int_fn__23293__auto__ = cljs.core.partial.call(null,random_int_from_range__23279__auto__,rng,range__23280__auto__);
return random_value_with_exclude__23283__auto__.call(null,next_random_int_fn__23293__auto__,should_be_rejected_QMARK___23285__auto__);
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,rng))
;
var value__23294__auto__ = random_int_with__23288__auto__.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(400)], null)], null));
cljs.core.println.call(null,"value",value__23294__auto__);

return value__23294__auto__;
})();
var y = (function (){var random_int__23275__auto__ = ((function (x,rng){
return (function (rng__23276__auto__,n__23277__auto__){
var random_raw__23278__auto__ = rng__23276__auto__.random();
return (random_raw__23278__auto__ * n__23277__auto__);
});})(x,rng))
;
var random_int_from_range__23279__auto__ = ((function (random_int__23275__auto__,x,rng){
return (function (rng__23276__auto__,range__23280__auto__){
var min__23281__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(0)):(0));
var max__23282__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(1)):(1));
return (random_int__23275__auto__.call(null,rng__23276__auto__,(min__23281__auto__ + max__23282__auto__)) - min__23281__auto__);
});})(random_int__23275__auto__,x,rng))
;
var random_value_with_exclude__23283__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,x,rng){
return (function (next_random_val_fn__23284__auto__,should_be_rejected_QMARK___23285__auto__){
while(true){
var random_value__23286__auto__ = next_random_val_fn__23284__auto__.call(null);
var excluded_QMARK___23287__auto__ = should_be_rejected_QMARK___23285__auto__.call(null,random_value__23286__auto__);
if(cljs.core.not.call(null,excluded_QMARK___23287__auto__)){
return random_value__23286__auto__;
} else {
cljs.core.println.call(null,"rejected: ",random_value__23286__auto__);

var G__23402 = next_random_val_fn__23284__auto__;
var G__23403 = should_be_rejected_QMARK___23285__auto__;
next_random_val_fn__23284__auto__ = G__23402;
should_be_rejected_QMARK___23285__auto__ = G__23403;
continue;
}
break;
}
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,x,rng))
;
var random_int_with__23288__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng){
return (function (opts__23289__auto__){
var range__23280__auto__ = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var exclude__23290__auto__ = new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var in_range_QMARK___23291__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng){
return (function (val__23292__auto__,range__23280__auto____$1){
var min__23281__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(0));
var max__23282__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(1));
return ((val__23292__auto__ >= min__23281__auto__)) && ((val__23292__auto__ <= max__23282__auto__));
});})(range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng))
;
var should_be_rejected_QMARK___23285__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng){
return (function (val__23292__auto__){
if(!(cljs.core.vector_QMARK_.call(null,exclude__23290__auto__))){
return false;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,exclude__23290__auto__)){
return in_range_QMARK___23291__auto__.call(null,val__23292__auto__,exclude__23290__auto__);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,exclude__23290__auto__)){
return cljs.core.every_QMARK_.call(null,((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng){
return (function (){
return cljs.core.partial.call(null,in_range_QMARK___23291__auto__,val__23292__auto__);
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng))
,exclude__23290__auto__);
} else {
return false;

}
}
}
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng))
;
var next_random_int_fn__23293__auto__ = cljs.core.partial.call(null,random_int_from_range__23279__auto__,rng,range__23280__auto__);
return random_value_with_exclude__23283__auto__.call(null,next_random_int_fn__23293__auto__,should_be_rejected_QMARK___23285__auto__);
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,rng))
;
var value__23294__auto__ = random_int_with__23288__auto__.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(300)], null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(400)], null)], null));
cljs.core.println.call(null,"value",value__23294__auto__);

return value__23294__auto__;
})();
var width = (function (){var random_int__23275__auto__ = ((function (x,y,rng){
return (function (rng__23276__auto__,n__23277__auto__){
var random_raw__23278__auto__ = rng__23276__auto__.random();
return (random_raw__23278__auto__ * n__23277__auto__);
});})(x,y,rng))
;
var random_int_from_range__23279__auto__ = ((function (random_int__23275__auto__,x,y,rng){
return (function (rng__23276__auto__,range__23280__auto__){
var min__23281__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(0)):(0));
var max__23282__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(1)):(1));
return (random_int__23275__auto__.call(null,rng__23276__auto__,(min__23281__auto__ + max__23282__auto__)) - min__23281__auto__);
});})(random_int__23275__auto__,x,y,rng))
;
var random_value_with_exclude__23283__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,x,y,rng){
return (function (next_random_val_fn__23284__auto__,should_be_rejected_QMARK___23285__auto__){
while(true){
var random_value__23286__auto__ = next_random_val_fn__23284__auto__.call(null);
var excluded_QMARK___23287__auto__ = should_be_rejected_QMARK___23285__auto__.call(null,random_value__23286__auto__);
if(cljs.core.not.call(null,excluded_QMARK___23287__auto__)){
return random_value__23286__auto__;
} else {
cljs.core.println.call(null,"rejected: ",random_value__23286__auto__);

var G__23404 = next_random_val_fn__23284__auto__;
var G__23405 = should_be_rejected_QMARK___23285__auto__;
next_random_val_fn__23284__auto__ = G__23404;
should_be_rejected_QMARK___23285__auto__ = G__23405;
continue;
}
break;
}
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,x,y,rng))
;
var random_int_with__23288__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng){
return (function (opts__23289__auto__){
var range__23280__auto__ = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var exclude__23290__auto__ = new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var in_range_QMARK___23291__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng){
return (function (val__23292__auto__,range__23280__auto____$1){
var min__23281__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(0));
var max__23282__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(1));
return ((val__23292__auto__ >= min__23281__auto__)) && ((val__23292__auto__ <= max__23282__auto__));
});})(range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng))
;
var should_be_rejected_QMARK___23285__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng){
return (function (val__23292__auto__){
if(!(cljs.core.vector_QMARK_.call(null,exclude__23290__auto__))){
return false;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,exclude__23290__auto__)){
return in_range_QMARK___23291__auto__.call(null,val__23292__auto__,exclude__23290__auto__);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,exclude__23290__auto__)){
return cljs.core.every_QMARK_.call(null,((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng){
return (function (){
return cljs.core.partial.call(null,in_range_QMARK___23291__auto__,val__23292__auto__);
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng))
,exclude__23290__auto__);
} else {
return false;

}
}
}
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng))
;
var next_random_int_fn__23293__auto__ = cljs.core.partial.call(null,random_int_from_range__23279__auto__,rng,range__23280__auto__);
return random_value_with_exclude__23283__auto__.call(null,next_random_int_fn__23293__auto__,should_be_rejected_QMARK___23285__auto__);
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,rng))
;
var value__23294__auto__ = random_int_with__23288__auto__.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50)], null)], null));
cljs.core.println.call(null,"value",value__23294__auto__);

return value__23294__auto__;
})();
var height = (function (){var random_int__23275__auto__ = ((function (x,y,width,rng){
return (function (rng__23276__auto__,n__23277__auto__){
var random_raw__23278__auto__ = rng__23276__auto__.random();
return (random_raw__23278__auto__ * n__23277__auto__);
});})(x,y,width,rng))
;
var random_int_from_range__23279__auto__ = ((function (random_int__23275__auto__,x,y,width,rng){
return (function (rng__23276__auto__,range__23280__auto__){
var min__23281__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(0)):(0));
var max__23282__auto__ = (cljs.core.truth_(range__23280__auto__)?cljs.core.nth.call(null,range__23280__auto__,(1)):(1));
return (random_int__23275__auto__.call(null,rng__23276__auto__,(min__23281__auto__ + max__23282__auto__)) - min__23281__auto__);
});})(random_int__23275__auto__,x,y,width,rng))
;
var random_value_with_exclude__23283__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,x,y,width,rng){
return (function (next_random_val_fn__23284__auto__,should_be_rejected_QMARK___23285__auto__){
while(true){
var random_value__23286__auto__ = next_random_val_fn__23284__auto__.call(null);
var excluded_QMARK___23287__auto__ = should_be_rejected_QMARK___23285__auto__.call(null,random_value__23286__auto__);
if(cljs.core.not.call(null,excluded_QMARK___23287__auto__)){
return random_value__23286__auto__;
} else {
cljs.core.println.call(null,"rejected: ",random_value__23286__auto__);

var G__23406 = next_random_val_fn__23284__auto__;
var G__23407 = should_be_rejected_QMARK___23285__auto__;
next_random_val_fn__23284__auto__ = G__23406;
should_be_rejected_QMARK___23285__auto__ = G__23407;
continue;
}
break;
}
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,x,y,width,rng))
;
var random_int_with__23288__auto__ = ((function (random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng){
return (function (opts__23289__auto__){
var range__23280__auto__ = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var exclude__23290__auto__ = new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts__23289__auto__);
var in_range_QMARK___23291__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng){
return (function (val__23292__auto__,range__23280__auto____$1){
var min__23281__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(0));
var max__23282__auto__ = cljs.core.nth.call(null,range__23280__auto____$1,(1));
return ((val__23292__auto__ >= min__23281__auto__)) && ((val__23292__auto__ <= max__23282__auto__));
});})(range__23280__auto__,exclude__23290__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng))
;
var should_be_rejected_QMARK___23285__auto__ = ((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng){
return (function (val__23292__auto__){
if(!(cljs.core.vector_QMARK_.call(null,exclude__23290__auto__))){
return false;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,exclude__23290__auto__)){
return in_range_QMARK___23291__auto__.call(null,val__23292__auto__,exclude__23290__auto__);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,exclude__23290__auto__)){
return cljs.core.every_QMARK_.call(null,((function (range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng){
return (function (){
return cljs.core.partial.call(null,in_range_QMARK___23291__auto__,val__23292__auto__);
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng))
,exclude__23290__auto__);
} else {
return false;

}
}
}
});})(range__23280__auto__,exclude__23290__auto__,in_range_QMARK___23291__auto__,random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng))
;
var next_random_int_fn__23293__auto__ = cljs.core.partial.call(null,random_int_from_range__23279__auto__,rng,range__23280__auto__);
return random_value_with_exclude__23283__auto__.call(null,next_random_int_fn__23293__auto__,should_be_rejected_QMARK___23285__auto__);
});})(random_int__23275__auto__,random_int_from_range__23279__auto__,random_value_with_exclude__23283__auto__,x,y,width,rng))
;
var value__23294__auto__ = random_int_with__23288__auto__.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50)], null)], null));
cljs.core.println.call(null,"value",value__23294__auto__);

return value__23294__auto__;
})();
var standable = (function (){var random_int__23300__auto__ = rng.random();
var random_boolean__23301__auto__ = (random_int__23300__auto__ > 0.5);
return cljs.core.println.call(null,"random-boolean: ",random_boolean__23301__auto__);
})();
var holdable = (function (){var random_int__23300__auto__ = rng.random();
var random_boolean__23301__auto__ = (random_int__23300__auto__ > 0.5);
return cljs.core.println.call(null,"random-boolean: ",random_boolean__23301__auto__);
})();
return cljs.core.println.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"standable","standable",492063634),standable,new cljs.core.Keyword(null,"holdable","holdable",1363007938),holdable], null));
});
climbr.figures.level_generator.fits_QMARK_ = (function climbr$figures$level_generator$fits_QMARK_(level,boulder_candidate){
return null;
});
climbr.figures.level_generator.next_rand = (function climbr$figures$level_generator$next_rand(seed){
return null;
});

//# sourceMappingURL=level_generator.js.map?rel=1487058559751