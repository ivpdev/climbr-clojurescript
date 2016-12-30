// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.levels');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
goog.require('climbr.figures.level0');
goog.require('climbr.figures.level1');
climbr.figures.levels.get = (function climbr$figures$levels$get(level_name){
var G__52340 = level_name;
switch (G__52340) {
case "l0":
return climbr.figures.level0.level;

break;
case "l1":
return climbr.figures.level1.level;

break;
default:
return "default";

}
});
/**
 * get level according to levelname in URL
 */
climbr.figures.levels.get_current_level = (function climbr$figures$levels$get_current_level(){
var level_name = climbr.utils.utils.get_current_level_name.call(null);
return climbr.figures.levels.get.call(null,level_name);
});

//# sourceMappingURL=levels.js.map?rel=1483134923567