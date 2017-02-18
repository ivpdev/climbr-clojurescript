// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.levels');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
goog.require('climbr.figures.level0');
goog.require('climbr.figures.level1');
goog.require('climbr.figures.level_generator');
climbr.figures.levels.get_level = (function climbr$figures$levels$get_level(level_name){
if(cljs.core.truth_(climbr.figures.level_generator.level_seed_QMARK_.call(null,level_name))){
return climbr.figures.level_generator.generate_level.call(null,parseInt(level_name));
} else {
if(cljs.core._EQ_.call(null,level_name,"l0")){
return climbr.figures.level0.level;
} else {
if(cljs.core._EQ_.call(null,level_name,"l1")){
return l2.level;
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
var level_name = climbr.utils.utils.get_current_level_name.call(null);
return climbr.figures.levels.get_level.call(null,level_name);
});
climbr.figures.levels.get_current_level_code = (function climbr$figures$levels$get_current_level_code(){
var level_name = climbr.utils.utils.get_current_level_name.call(null);
if(cljs.core._EQ_.call(null,level_name,"random")){
return climbr.figures.level_generator.last_seed;
} else {
return level_name;
}
});

//# sourceMappingURL=levels.js.map?rel=1487435302430