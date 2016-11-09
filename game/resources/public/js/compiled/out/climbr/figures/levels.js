// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.levels');
goog.require('cljs.core');
goog.require('climbr.figures.level0');
goog.require('climbr.figures.level1');
climbr.figures.levels.get = (function climbr$figures$levels$get(level_name){
var G__7716 = level_name;
switch (G__7716) {
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

//# sourceMappingURL=levels.js.map?rel=1478625868229