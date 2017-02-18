// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level_generator');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
goog.require('climbr.utils.random.random');
goog.require('climbr.figures.figures');
goog.require('climbr.matter.matter');
climbr.figures.level_generator.max_seed = (1000000);
climbr.figures.level_generator.max_seed_size = cljs.core.count.call(null,[cljs.core.str(climbr.figures.level_generator.max_seed)].join(''));
climbr.figures.level_generator.last_seed = null;
climbr.figures.level_generator.level_seed_QMARK_ = (function climbr$figures$level_generator$level_seed_QMARK_(level_name){
var and__18744__auto__ = climbr.utils.utils.numeric_QMARK_.call(null,level_name);
if(cljs.core.truth_(and__18744__auto__)){
return (cljs.core.count.call(null,level_name) < climbr.figures.level_generator.max_seed_size);
} else {
return and__18744__auto__;
}
});
climbr.figures.level_generator.generate_boulder_candidate = (function climbr$figures$level_generator$generate_boulder_candidate(rng){
var x = climbr.utils.random.random.random_int_with.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),climbr.utils.utils.get_canvas_width.call(null)], null)], null),rng);
var y = climbr.utils.random.random.random_int_with.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),climbr.utils.utils.get_canvas_height.call(null)], null)], null),rng);
var width = climbr.utils.random.random.random_int_with.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50)], null)], null),rng);
var height = climbr.utils.random.random.random_int_with.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50)], null)], null),rng);
var standable = climbr.utils.random.random.random_boolean.call(null,rng);
var holdable = climbr.utils.random.random.random_boolean.call(null,rng);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"standable","standable",492063634),standable,new cljs.core.Keyword(null,"holdable","holdable",1363007938),holdable], null);
});
climbr.figures.level_generator.fits_QMARK_ = (function climbr$figures$level_generator$fits_QMARK_(boulder_candidate,level){
var offset_x = (20);
var offset_y = (10);
var candidate_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boulder_candidate);
var candidate_x_min = candidate_x;
var candidate_x_max = (candidate_x_min + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boulder_candidate));
var candidate_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boulder_candidate);
var candidate_y_min = candidate_y;
var candidate_y_max = (candidate_y_min + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boulder_candidate));
var intersects = cljs.core.some.call(null,((function (offset_x,offset_y,candidate_x,candidate_x_min,candidate_x_max,candidate_y,candidate_y_min,candidate_y_max){
return (function (boulder){
var boulder_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boulder);
var boulder_x_min = boulder_x;
var boulder_x_max = (boulder_x_min + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boulder));
var boulder_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boulder);
var boulder_y_min = boulder_y;
var boulder_y_max = (boulder_y_min + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boulder));
var interects_horizontally = climbr.utils.utils.intersects_QMARK_.call(null,boulder_x_min,boulder_x_max,candidate_x_min,candidate_x_max,offset_x);
var interects_vertically = climbr.utils.utils.intersects_QMARK_.call(null,boulder_y_min,boulder_y_max,candidate_y_min,candidate_y_max,offset_y);
var or__18756__auto__ = interects_horizontally;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return interects_vertically;
}
});})(offset_x,offset_y,candidate_x,candidate_x_min,candidate_x_max,candidate_y,candidate_y_min,candidate_y_max))
,level);
return cljs.core.not.call(null,intersects);
});
climbr.figures.level_generator.generate_level_definition = (function climbr$figures$level_generator$generate_level_definition(seed){
var level = cljs.core.PersistentVector.EMPTY;
var max_fails_allowed = (5);
var max_boulders_allowed = (20);
var insertion_fails = (0);
var rng = (new MersenneTwister(seed));
var level__$1 = cljs.core.PersistentVector.EMPTY;
var insertion_fails__$1 = (0);
var boulders_inserted = (0);
while(true){
if(((insertion_fails__$1 >= max_fails_allowed)) || ((boulders_inserted >= max_boulders_allowed))){
return level__$1;
} else {
var boulder_candidate = climbr.figures.level_generator.generate_boulder_candidate.call(null,rng);
var fits_into_level = climbr.figures.level_generator.fits_QMARK_.call(null,boulder_candidate,level__$1);
if(cljs.core.truth_(fits_into_level)){
var G__38448 = cljs.core.conj.call(null,level__$1,boulder_candidate);
var G__38449 = (0);
var G__38450 = (boulders_inserted + (1));
level__$1 = G__38448;
insertion_fails__$1 = G__38449;
boulders_inserted = G__38450;
continue;
} else {
var G__38451 = level__$1;
var G__38452 = (insertion_fails__$1 + (1));
var G__38453 = (boulders_inserted + (1));
level__$1 = G__38451;
insertion_fails__$1 = G__38452;
boulders_inserted = G__38453;
continue;
}
}
break;
}
});
climbr.figures.level_generator.generate_level_with_seed = (function climbr$figures$level_generator$generate_level_with_seed(seed){
var boulder_defs = climbr.figures.level_generator.generate_level_definition.call(null,seed);
var composite = climbr.matter.matter.composite.create();
var boulders = cljs.core.map.call(null,climbr.figures.figures.create_boulder,boulder_defs);
climbr.figures.level_generator.last_seed = seed;

cljs.core.doall.call(null,cljs.core.map.call(null,((function (boulder_defs,composite,boulders){
return (function (p1__38454_SHARP_){
return climbr.matter.matter.composite.add(composite,p1__38454_SHARP_);
});})(boulder_defs,composite,boulders))
,boulders));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"composite","composite",-257118970),composite,new cljs.core.Keyword(null,"parts","parts",849007691),boulders], null);
});
climbr.figures.level_generator.generate_level = (function climbr$figures$level_generator$generate_level(var_args){
var args38455 = [];
var len__19864__auto___38458 = arguments.length;
var i__19865__auto___38459 = (0);
while(true){
if((i__19865__auto___38459 < len__19864__auto___38458)){
args38455.push((arguments[i__19865__auto___38459]));

var G__38460 = (i__19865__auto___38459 + (1));
i__19865__auto___38459 = G__38460;
continue;
} else {
}
break;
}

var G__38457 = args38455.length;
switch (G__38457) {
case 0:
return climbr.figures.level_generator.generate_level.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return climbr.figures.level_generator.generate_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38455.length)].join('')));

}
});

climbr.figures.level_generator.generate_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return climbr.figures.level_generator.generate_level_with_seed.call(null,cljs.core.rand_int.call(null,climbr.figures.level_generator.max_seed));
});

climbr.figures.level_generator.generate_level.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return climbr.figures.level_generator.generate_level_with_seed.call(null,seed);
});

climbr.figures.level_generator.generate_level.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=level_generator.js.map?rel=1487435302389