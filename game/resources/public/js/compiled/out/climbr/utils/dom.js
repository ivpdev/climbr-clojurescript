// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.utils.dom');
goog.require('cljs.core');
climbr.utils.dom.$ = (function climbr$utils$dom$$(selector){
return $(selector);
});
climbr.utils.dom.set_inner_html = (function climbr$utils$dom$set_inner_html(content,selector){
return climbr.utils.dom.$.call(null,selector).html(content);
});
climbr.utils.dom.remove_class = (function climbr$utils$dom$remove_class(class$,selector){
return climbr.utils.dom.$.call(null,selector).removeClass(class$);
});

//# sourceMappingURL=dom.js.map?rel=1487433947775