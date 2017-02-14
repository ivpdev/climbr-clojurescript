// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19871__auto__ = [];
var len__19864__auto___30707 = arguments.length;
var i__19865__auto___30708 = (0);
while(true){
if((i__19865__auto___30708 < len__19864__auto___30707)){
args__19871__auto__.push((arguments[i__19865__auto___30708]));

var G__30709 = (i__19865__auto___30708 + (1));
i__19865__auto___30708 = G__30709;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((2) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19872__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30699_30710 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30700_30711 = null;
var count__30701_30712 = (0);
var i__30702_30713 = (0);
while(true){
if((i__30702_30713 < count__30701_30712)){
var k_30714 = cljs.core._nth.call(null,chunk__30700_30711,i__30702_30713);
e.setAttribute(cljs.core.name.call(null,k_30714),cljs.core.get.call(null,attrs,k_30714));

var G__30715 = seq__30699_30710;
var G__30716 = chunk__30700_30711;
var G__30717 = count__30701_30712;
var G__30718 = (i__30702_30713 + (1));
seq__30699_30710 = G__30715;
chunk__30700_30711 = G__30716;
count__30701_30712 = G__30717;
i__30702_30713 = G__30718;
continue;
} else {
var temp__4657__auto___30719 = cljs.core.seq.call(null,seq__30699_30710);
if(temp__4657__auto___30719){
var seq__30699_30720__$1 = temp__4657__auto___30719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30699_30720__$1)){
var c__19570__auto___30721 = cljs.core.chunk_first.call(null,seq__30699_30720__$1);
var G__30722 = cljs.core.chunk_rest.call(null,seq__30699_30720__$1);
var G__30723 = c__19570__auto___30721;
var G__30724 = cljs.core.count.call(null,c__19570__auto___30721);
var G__30725 = (0);
seq__30699_30710 = G__30722;
chunk__30700_30711 = G__30723;
count__30701_30712 = G__30724;
i__30702_30713 = G__30725;
continue;
} else {
var k_30726 = cljs.core.first.call(null,seq__30699_30720__$1);
e.setAttribute(cljs.core.name.call(null,k_30726),cljs.core.get.call(null,attrs,k_30726));

var G__30727 = cljs.core.next.call(null,seq__30699_30720__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__30699_30710 = G__30727;
chunk__30700_30711 = G__30728;
count__30701_30712 = G__30729;
i__30702_30713 = G__30730;
continue;
}
} else {
}
}
break;
}

var seq__30703_30731 = cljs.core.seq.call(null,children);
var chunk__30704_30732 = null;
var count__30705_30733 = (0);
var i__30706_30734 = (0);
while(true){
if((i__30706_30734 < count__30705_30733)){
var ch_30735 = cljs.core._nth.call(null,chunk__30704_30732,i__30706_30734);
e.appendChild(ch_30735);

var G__30736 = seq__30703_30731;
var G__30737 = chunk__30704_30732;
var G__30738 = count__30705_30733;
var G__30739 = (i__30706_30734 + (1));
seq__30703_30731 = G__30736;
chunk__30704_30732 = G__30737;
count__30705_30733 = G__30738;
i__30706_30734 = G__30739;
continue;
} else {
var temp__4657__auto___30740 = cljs.core.seq.call(null,seq__30703_30731);
if(temp__4657__auto___30740){
var seq__30703_30741__$1 = temp__4657__auto___30740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30703_30741__$1)){
var c__19570__auto___30742 = cljs.core.chunk_first.call(null,seq__30703_30741__$1);
var G__30743 = cljs.core.chunk_rest.call(null,seq__30703_30741__$1);
var G__30744 = c__19570__auto___30742;
var G__30745 = cljs.core.count.call(null,c__19570__auto___30742);
var G__30746 = (0);
seq__30703_30731 = G__30743;
chunk__30704_30732 = G__30744;
count__30705_30733 = G__30745;
i__30706_30734 = G__30746;
continue;
} else {
var ch_30747 = cljs.core.first.call(null,seq__30703_30741__$1);
e.appendChild(ch_30747);

var G__30748 = cljs.core.next.call(null,seq__30703_30741__$1);
var G__30749 = null;
var G__30750 = (0);
var G__30751 = (0);
seq__30703_30731 = G__30748;
chunk__30704_30732 = G__30749;
count__30705_30733 = G__30750;
i__30706_30734 = G__30751;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30696){
var G__30697 = cljs.core.first.call(null,seq30696);
var seq30696__$1 = cljs.core.next.call(null,seq30696);
var G__30698 = cljs.core.first.call(null,seq30696__$1);
var seq30696__$2 = cljs.core.next.call(null,seq30696__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30697,G__30698,seq30696__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19684__auto__,prefer_table__19685__auto__,method_cache__19686__auto__,cached_hierarchy__19687__auto__,hierarchy__19688__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19684__auto__,prefer_table__19685__auto__,method_cache__19686__auto__,cached_hierarchy__19687__auto__,hierarchy__19688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19688__auto__,method_table__19684__auto__,prefer_table__19685__auto__,method_cache__19686__auto__,cached_hierarchy__19687__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30752 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30752.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30752.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30752.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30752);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30753,st_map){
var map__30760 = p__30753;
var map__30760__$1 = ((((!((map__30760 == null)))?((((map__30760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);
var container_el = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30760,map__30760__$1,container_el){
return (function (p__30762){
var vec__30763 = p__30762;
var k = cljs.core.nth.call(null,vec__30763,(0),null);
var v = cljs.core.nth.call(null,vec__30763,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30760,map__30760__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30766,dom_str){
var map__30769 = p__30766;
var map__30769__$1 = ((((!((map__30769 == null)))?((((map__30769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);
var c = map__30769__$1;
var content_area_el = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30771){
var map__30774 = p__30771;
var map__30774__$1 = ((((!((map__30774 == null)))?((((map__30774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30774):map__30774);
var content_area_el = cljs.core.get.call(null,map__30774__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_30817){
var state_val_30818 = (state_30817[(1)]);
if((state_val_30818 === (1))){
var inst_30802 = (state_30817[(7)]);
var inst_30802__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30803 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30804 = ["10px","10px","100%","68px","1.0"];
var inst_30805 = cljs.core.PersistentHashMap.fromArrays(inst_30803,inst_30804);
var inst_30806 = cljs.core.merge.call(null,inst_30805,style);
var inst_30807 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30802__$1,inst_30806);
var inst_30808 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30802__$1,msg);
var inst_30809 = cljs.core.async.timeout.call(null,(300));
var state_30817__$1 = (function (){var statearr_30819 = state_30817;
(statearr_30819[(8)] = inst_30808);

(statearr_30819[(7)] = inst_30802__$1);

(statearr_30819[(9)] = inst_30807);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30817__$1,(2),inst_30809);
} else {
if((state_val_30818 === (2))){
var inst_30802 = (state_30817[(7)]);
var inst_30811 = (state_30817[(2)]);
var inst_30812 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30813 = ["auto"];
var inst_30814 = cljs.core.PersistentHashMap.fromArrays(inst_30812,inst_30813);
var inst_30815 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30802,inst_30814);
var state_30817__$1 = (function (){var statearr_30820 = state_30817;
(statearr_30820[(10)] = inst_30811);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30817__$1,inst_30815);
} else {
return null;
}
}
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____0 = (function (){
var statearr_30824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30824[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__);

(statearr_30824[(1)] = (1));

return statearr_30824;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____1 = (function (state_30817){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_30817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object)){
var ex__21107__auto__ = e30825;
var statearr_30826_30828 = state_30817;
(statearr_30826_30828[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30829 = state_30817;
state_30817 = G__30829;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__ = function(state_30817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____1.call(this,state_30817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_30827 = f__21119__auto__.call(null);
(statearr_30827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30833 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__30833,(0),null);
var ln = cljs.core.nth.call(null,vec__30833,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30840 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30840,(0),null);
var file_line = cljs.core.nth.call(null,vec__30840,(1),null);
var file_column = cljs.core.nth.call(null,vec__30840,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30840,file_name,file_line,file_column){
return (function (p1__30836_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30836_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30840,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18756__auto__ = file_line;
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
var and__18744__auto__ = cause;
if(cljs.core.truth_(and__18744__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18744__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30845 = figwheel.client.heads_up.ensure_container.call(null);
var map__30845__$1 = ((((!((map__30845 == null)))?((((map__30845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30845):map__30845);
var content_area_el = cljs.core.get.call(null,map__30845__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_30893){
var state_val_30894 = (state_30893[(1)]);
if((state_val_30894 === (1))){
var inst_30876 = (state_30893[(7)]);
var inst_30876__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30877 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30878 = ["0.0"];
var inst_30879 = cljs.core.PersistentHashMap.fromArrays(inst_30877,inst_30878);
var inst_30880 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30876__$1,inst_30879);
var inst_30881 = cljs.core.async.timeout.call(null,(300));
var state_30893__$1 = (function (){var statearr_30895 = state_30893;
(statearr_30895[(8)] = inst_30880);

(statearr_30895[(7)] = inst_30876__$1);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(2),inst_30881);
} else {
if((state_val_30894 === (2))){
var inst_30876 = (state_30893[(7)]);
var inst_30883 = (state_30893[(2)]);
var inst_30884 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30885 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30886 = cljs.core.PersistentHashMap.fromArrays(inst_30884,inst_30885);
var inst_30887 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30876,inst_30886);
var inst_30888 = cljs.core.async.timeout.call(null,(200));
var state_30893__$1 = (function (){var statearr_30896 = state_30893;
(statearr_30896[(9)] = inst_30883);

(statearr_30896[(10)] = inst_30887);

return statearr_30896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(3),inst_30888);
} else {
if((state_val_30894 === (3))){
var inst_30876 = (state_30893[(7)]);
var inst_30890 = (state_30893[(2)]);
var inst_30891 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30876,"");
var state_30893__$1 = (function (){var statearr_30897 = state_30893;
(statearr_30897[(11)] = inst_30890);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30893__$1,inst_30891);
} else {
return null;
}
}
}
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21104__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21104__auto____0 = (function (){
var statearr_30901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30901[(0)] = figwheel$client$heads_up$clear_$_state_machine__21104__auto__);

(statearr_30901[(1)] = (1));

return statearr_30901;
});
var figwheel$client$heads_up$clear_$_state_machine__21104__auto____1 = (function (state_30893){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_30893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e30902){if((e30902 instanceof Object)){
var ex__21107__auto__ = e30902;
var statearr_30903_30905 = state_30893;
(statearr_30903_30905[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30906 = state_30893;
state_30893 = G__30906;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21104__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21104__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21104__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21104__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_30904 = f__21119__auto__.call(null);
(statearr_30904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_30904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21118__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21118__auto__){
return (function (){
var f__21119__auto__ = (function (){var switch__21103__auto__ = ((function (c__21118__auto__){
return (function (state_30938){
var state_val_30939 = (state_30938[(1)]);
if((state_val_30939 === (1))){
var inst_30928 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30938__$1,(2),inst_30928);
} else {
if((state_val_30939 === (2))){
var inst_30930 = (state_30938[(2)]);
var inst_30931 = cljs.core.async.timeout.call(null,(400));
var state_30938__$1 = (function (){var statearr_30940 = state_30938;
(statearr_30940[(7)] = inst_30930);

return statearr_30940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30938__$1,(3),inst_30931);
} else {
if((state_val_30939 === (3))){
var inst_30933 = (state_30938[(2)]);
var inst_30934 = figwheel.client.heads_up.clear.call(null);
var state_30938__$1 = (function (){var statearr_30941 = state_30938;
(statearr_30941[(8)] = inst_30933);

return statearr_30941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30938__$1,(4),inst_30934);
} else {
if((state_val_30939 === (4))){
var inst_30936 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30938__$1,inst_30936);
} else {
return null;
}
}
}
}
});})(c__21118__auto__))
;
return ((function (switch__21103__auto__,c__21118__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____0 = (function (){
var statearr_30945 = [null,null,null,null,null,null,null,null,null];
(statearr_30945[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__);

(statearr_30945[(1)] = (1));

return statearr_30945;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____1 = (function (state_30938){
while(true){
var ret_value__21105__auto__ = (function (){try{while(true){
var result__21106__auto__ = switch__21103__auto__.call(null,state_30938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21106__auto__;
}
break;
}
}catch (e30946){if((e30946 instanceof Object)){
var ex__21107__auto__ = e30946;
var statearr_30947_30949 = state_30938;
(statearr_30947_30949[(5)] = ex__21107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30950 = state_30938;
state_30938 = G__30950;
continue;
} else {
return ret_value__21105__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__ = function(state_30938){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____1.call(this,state_30938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21104__auto__;
})()
;})(switch__21103__auto__,c__21118__auto__))
})();
var state__21120__auto__ = (function (){var statearr_30948 = f__21119__auto__.call(null);
(statearr_30948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21118__auto__);

return statearr_30948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21120__auto__);
});})(c__21118__auto__))
);

return c__21118__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1485901326938