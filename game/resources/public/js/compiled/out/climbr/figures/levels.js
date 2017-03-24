// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.levels');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
goog.require('climbr.figures.level0');
goog.require('climbr.figures.level1');
goog.require('climbr.figures.level_generator');
climbr.figures.levels.get_level = (function climbr$figures$levels$get_level(level_name){
if(cljs.core.truth_(climbr.figures.level_generator.level_seed_QMARK_.call(null,level_name))){
return climbr.figures.level_generator.generate_level.call(null,level_name);
} else {
if(cljs.core._EQ_.call(null,level_name,"l0")){
return climbr.figures.level0.level;
} else {
if(cljs.core._EQ_.call(null,level_name,"l1")){
return climbr.figures.level1.level;
} else {
if(cljs.core._EQ_.call(null,level_name,"random")){
return climbr.figures.level_generator.generate_level.call(null);
} else {
return null;

}
}
}
}
});
/**
 * get level according to levelname in URL
 */
climbr.figures.levels.get_current_level = (function climbr$figures$levels$get_current_level(){
var level_code = climbr.figures.levels.get_current_level_code.call(null);
var x = cljs.core.println.call(null,"code ",level_code);
return climbr.figures.levels.get_level.call(null,level_code);
});
climbr.figures.levels.get_current_level_code = (function climbr$figures$levels$get_current_level_code(){
var level_name = climbr.utils.utils.get_current_level_name.call(null);
var xx = cljs.core.println.call(null,level_name);
var xx__$1 = cljs.core.println.call(null,cljs.core._EQ_.call(null,level_name,"random"));
var xx__$2 = cljs.core.println.call(null,climbr.figures.level_generator.last_seed);
if(cljs.core._EQ_.call(null,level_name,"random")){
return climbr.figures.level_generator.last_seed;
} else {
return level_name;
}
});

//# sourceMappingURL=levels.js.map?rel=1490352274068