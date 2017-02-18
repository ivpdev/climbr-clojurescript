// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.utils.utils');
goog.require('cljs.core');
goog.require('cemerick.url');
goog.require('climbr.utils.dom');
climbr.utils.utils.def_ = (function climbr$utils$utils$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__19593__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19593__auto__);
})(),(function (){var x__19593__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19593__auto__);
})())));
});

climbr.utils.utils.def_.cljs$lang$macro = true;
climbr.utils.utils.debug = (function climbr$utils$utils$debug(x){
window.debug1 = x;

return console.log(x);
});
/**
 * Ignores body, yields nil
 */
climbr.utils.utils.TODO = (function climbr$utils$utils$TODO(var_args){
var args__19871__auto__ = [];
var len__19864__auto___37877 = arguments.length;
var i__19865__auto___37878 = (0);
while(true){
if((i__19865__auto___37878 < len__19864__auto___37877)){
args__19871__auto__.push((arguments[i__19865__auto___37878]));

var G__37879 = (i__19865__auto___37878 + (1));
i__19865__auto___37878 = G__37879;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((2) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((2)),(0),null)):null);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19872__auto__);
});

climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

climbr.utils.utils.TODO.cljs$lang$maxFixedArity = (2);

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq37874){
var G__37875 = cljs.core.first.call(null,seq37874);
var seq37874__$1 = cljs.core.next.call(null,seq37874);
var G__37876 = cljs.core.first.call(null,seq37874__$1);
var seq37874__$2 = cljs.core.next.call(null,seq37874__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__37875,G__37876,seq37874__$2);
});


climbr.utils.utils.TODO.cljs$lang$macro = true;
/**
 * true if coll contains el
 */
climbr.utils.utils.in_QMARK_ = (function climbr$utils$utils$in_QMARK_(coll,el){
return cljs.core.some.call(null,(function (p1__37880_SHARP_){
return cljs.core._EQ_.call(null,el,p1__37880_SHARP_);
}),coll);
});
climbr.utils.utils.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
/**
 * get name of level from URL
 */
climbr.utils.utils.get_current_level_name = (function climbr$utils$utils$get_current_level_name(){
var location_details = cemerick.url.url.call(null,window.location.href);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(location_details);
var level = cljs.core.get.call(null,query,"l");
var default_level = "l0";
var or__18756__auto__ = level;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return default_level;
}
});
climbr.utils.utils.hide_loading_banner_BANG_ = (function climbr$utils$utils$hide_loading_banner_BANG_(){
var loading_el = document.getElementById("loading");
return loading_el.hidden = true;
});
climbr.utils.utils.show_level_code = (function climbr$utils$utils$show_level_code(code){
climbr.utils.dom.remove_class.call(null,"hidden","#level-code-container");

return climbr.utils.dom.set_inner_html.call(null,code,"#level-code");
});
/**
 * computes cartesian product of two collections returning collection of all possible combinations
 */
climbr.utils.utils.cartesian_prod = (function climbr$utils$utils$cartesian_prod(col1,col2){
var iter__19539__auto__ = (function climbr$utils$utils$cartesian_prod_$_iter__37887(s__37888){
return (new cljs.core.LazySeq(null,(function (){
var s__37888__$1 = s__37888;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37888__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19535__auto__ = ((function (s__37888__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function climbr$utils$utils$cartesian_prod_$_iter__37887_$_iter__37889(s__37890){
return (new cljs.core.LazySeq(null,((function (s__37888__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__37890__$1 = s__37890;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37890__$1);
if(temp__4657__auto____$1){
var s__37890__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37890__$2)){
var c__19537__auto__ = cljs.core.chunk_first.call(null,s__37890__$2);
var size__19538__auto__ = cljs.core.count.call(null,c__19537__auto__);
var b__37892 = cljs.core.chunk_buffer.call(null,size__19538__auto__);
if((function (){var i__37891 = (0);
while(true){
if((i__37891 < size__19538__auto__)){
var y = cljs.core._nth.call(null,c__19537__auto__,i__37891);
cljs.core.chunk_append.call(null,b__37892,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__37893 = (i__37891 + (1));
i__37891 = G__37893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37892),climbr$utils$utils$cartesian_prod_$_iter__37887_$_iter__37889.call(null,cljs.core.chunk_rest.call(null,s__37890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37892),null);
}
} else {
var y = cljs.core.first.call(null,s__37890__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),climbr$utils$utils$cartesian_prod_$_iter__37887_$_iter__37889.call(null,cljs.core.rest.call(null,s__37890__$2)));
}
} else {
return null;
}
break;
}
});})(s__37888__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__37888__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__19536__auto__ = cljs.core.seq.call(null,iterys__19535__auto__.call(null,col2));
if(fs__19536__auto__){
return cljs.core.concat.call(null,fs__19536__auto__,climbr$utils$utils$cartesian_prod_$_iter__37887.call(null,cljs.core.rest.call(null,s__37888__$1)));
} else {
var G__37894 = cljs.core.rest.call(null,s__37888__$1);
s__37888__$1 = G__37894;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19539__auto__.call(null,col1);
});
climbr.utils.utils.get_canvas_width = (function climbr$utils$utils$get_canvas_width(){
return (800);
});
climbr.utils.utils.get_canvas_height = (function climbr$utils$utils$get_canvas_height(){
return (600);
});
climbr.utils.utils.numeric_QMARK_ = (function climbr$utils$utils$numeric_QMARK_(obj){
return cljs.core.not.call(null,isNaN(obj));
});
/**
 * Returns a predicate that tests if its argument falls in
 *     the inclusive interval [a, b].
 */
climbr.utils.utils.in_interval_QMARK_ = (function climbr$utils$utils$in_interval_QMARK_(a,b){
return (function (x){
return ((x >= a)) && ((x <= b));
});
});
climbr.utils.utils.intersects_QMARK_ = (function climbr$utils$utils$intersects_QMARK_(A_min,A_max,B_min,B_max,offset){
var target_min = (A_min - offset);
var target_max = (A_max + offset);
var in_target_interval_QMARK_ = climbr.utils.utils.in_interval_QMARK_.call(null,target_min,target_max);
var or__18756__auto__ = in_target_interval_QMARK_.call(null,B_min);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return in_target_interval_QMARK_.call(null,B_max);
}
});

//# sourceMappingURL=utils.js.map?rel=1487434214967