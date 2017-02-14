// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.levels');
goog.require('cljs.core');
goog.require('climbr.utils.utils');
goog.require('climbr.figures.level0');
goog.require('climbr.figures.level1');
climbr.figures.levels.get_level = (function climbr$figures$levels$get_level(level_name){
var G__23396 = level_name;
switch (G__23396) {
case "l0":
return climbr.figures.level0.level;

break;
case "l1":
return climbr.figures.level1.level;

break;
default:
return null;

}
});
/**
 * get level according to levelname in URL
 */
climbr.figures.levels.get_current_level = (function climbr$figures$levels$get_current_level(){
var level_name = climbr.utils.utils.get_current_level_name.call(null);
var level = climbr.figures.levels.get_level.call(null,level_name);
if(!((level == null))){
return level;
} else {
return cljs.core.println.call(null,"level not found");
}
});

//# sourceMappingURL=levels.js.map?rel=1487058559612