// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.utils.random.random');
goog.require('cljs.core');
/**
 * generate random int. options:
 *      - range: desired range for generated number (e.g.[10 20])
 *      - exclude: range (or ranges) of number which should never appear as generated-value (e.g. [5 30], or [[5 30] [35 45]])
 */
climbr.utils.random.random.random_int_with = (function climbr$utils$random$random$random_int_with(opts,rng){
var random_int = (function (rng__$1,n){
var random_raw = rng__$1.random();
return (random_raw * n);
});
var random_int_from_range = ((function (random_int){
return (function (rng__$1,range){
var min = (cljs.core.truth_(range)?cljs.core.nth.call(null,range,(0)):(0));
var max = (cljs.core.truth_(range)?cljs.core.nth.call(null,range,(1)):(1));
return (random_int.call(null,rng__$1,(max - min)) + min);
});})(random_int))
;
var random_value_with_exclude = ((function (random_int,random_int_from_range){
return (function (next_random_val_fn,should_be_rejected_QMARK_){
while(true){
var random_value = next_random_val_fn.call(null);
var excluded_QMARK_ = should_be_rejected_QMARK_.call(null,random_value);
if(cljs.core.not.call(null,excluded_QMARK_)){
return random_value;
} else {
var G__24121 = next_random_val_fn;
var G__24122 = should_be_rejected_QMARK_;
next_random_val_fn = G__24121;
should_be_rejected_QMARK_ = G__24122;
continue;
}
break;
}
});})(random_int,random_int_from_range))
;
var random_int_with = ((function (random_int,random_int_from_range,random_value_with_exclude){
return (function (rng__$1,opts__$1){
var range = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(opts__$1);
var exclude = new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts__$1);
var in_range_QMARK_ = ((function (range,exclude,random_int,random_int_from_range,random_value_with_exclude){
return (function (val,range__$1){
var min = cljs.core.nth.call(null,range__$1,(0));
var max = cljs.core.nth.call(null,range__$1,(1));
return ((val >= min)) && ((val <= max));
});})(range,exclude,random_int,random_int_from_range,random_value_with_exclude))
;
var should_be_rejected_QMARK_ = ((function (range,exclude,in_range_QMARK_,random_int,random_int_from_range,random_value_with_exclude){
return (function (val){
if(!(cljs.core.vector_QMARK_.call(null,exclude))){
return false;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,exclude)){
return in_range_QMARK_.call(null,val,exclude);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,exclude)){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,in_range_QMARK_,val),exclude);
} else {
return false;

}
}
}
});})(range,exclude,in_range_QMARK_,random_int,random_int_from_range,random_value_with_exclude))
;
var next_random_int_fn = cljs.core.partial.call(null,random_int_from_range,rng__$1,range);
return random_value_with_exclude.call(null,next_random_int_fn,should_be_rejected_QMARK_);
});})(random_int,random_int_from_range,random_value_with_exclude))
;
return random_int_with.call(null,rng,opts);
});
climbr.utils.random.random.random_boolean = (function climbr$utils$random$random$random_boolean(rng){
var random_int = rng.random();
return (random_int > 0.5);
});

//# sourceMappingURL=random.js.map?rel=1487326650657