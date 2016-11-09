// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19857__auto__ = [];
var len__19850__auto___23635 = arguments.length;
var i__19851__auto___23636 = (0);
while(true){
if((i__19851__auto___23636 < len__19850__auto___23635)){
args__19857__auto__.push((arguments[i__19851__auto___23636]));

var G__23637 = (i__19851__auto___23636 + (1));
i__19851__auto___23636 = G__23637;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((2) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19858__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23627_23638 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23628_23639 = null;
var count__23629_23640 = (0);
var i__23630_23641 = (0);
while(true){
if((i__23630_23641 < count__23629_23640)){
var k_23642 = cljs.core._nth.call(null,chunk__23628_23639,i__23630_23641);
e.setAttribute(cljs.core.name.call(null,k_23642),cljs.core.get.call(null,attrs,k_23642));

var G__23643 = seq__23627_23638;
var G__23644 = chunk__23628_23639;
var G__23645 = count__23629_23640;
var G__23646 = (i__23630_23641 + (1));
seq__23627_23638 = G__23643;
chunk__23628_23639 = G__23644;
count__23629_23640 = G__23645;
i__23630_23641 = G__23646;
continue;
} else {
var temp__4657__auto___23647 = cljs.core.seq.call(null,seq__23627_23638);
if(temp__4657__auto___23647){
var seq__23627_23648__$1 = temp__4657__auto___23647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23627_23648__$1)){
var c__19556__auto___23649 = cljs.core.chunk_first.call(null,seq__23627_23648__$1);
var G__23650 = cljs.core.chunk_rest.call(null,seq__23627_23648__$1);
var G__23651 = c__19556__auto___23649;
var G__23652 = cljs.core.count.call(null,c__19556__auto___23649);
var G__23653 = (0);
seq__23627_23638 = G__23650;
chunk__23628_23639 = G__23651;
count__23629_23640 = G__23652;
i__23630_23641 = G__23653;
continue;
} else {
var k_23654 = cljs.core.first.call(null,seq__23627_23648__$1);
e.setAttribute(cljs.core.name.call(null,k_23654),cljs.core.get.call(null,attrs,k_23654));

var G__23655 = cljs.core.next.call(null,seq__23627_23648__$1);
var G__23656 = null;
var G__23657 = (0);
var G__23658 = (0);
seq__23627_23638 = G__23655;
chunk__23628_23639 = G__23656;
count__23629_23640 = G__23657;
i__23630_23641 = G__23658;
continue;
}
} else {
}
}
break;
}

var seq__23631_23659 = cljs.core.seq.call(null,children);
var chunk__23632_23660 = null;
var count__23633_23661 = (0);
var i__23634_23662 = (0);
while(true){
if((i__23634_23662 < count__23633_23661)){
var ch_23663 = cljs.core._nth.call(null,chunk__23632_23660,i__23634_23662);
e.appendChild(ch_23663);

var G__23664 = seq__23631_23659;
var G__23665 = chunk__23632_23660;
var G__23666 = count__23633_23661;
var G__23667 = (i__23634_23662 + (1));
seq__23631_23659 = G__23664;
chunk__23632_23660 = G__23665;
count__23633_23661 = G__23666;
i__23634_23662 = G__23667;
continue;
} else {
var temp__4657__auto___23668 = cljs.core.seq.call(null,seq__23631_23659);
if(temp__4657__auto___23668){
var seq__23631_23669__$1 = temp__4657__auto___23668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23631_23669__$1)){
var c__19556__auto___23670 = cljs.core.chunk_first.call(null,seq__23631_23669__$1);
var G__23671 = cljs.core.chunk_rest.call(null,seq__23631_23669__$1);
var G__23672 = c__19556__auto___23670;
var G__23673 = cljs.core.count.call(null,c__19556__auto___23670);
var G__23674 = (0);
seq__23631_23659 = G__23671;
chunk__23632_23660 = G__23672;
count__23633_23661 = G__23673;
i__23634_23662 = G__23674;
continue;
} else {
var ch_23675 = cljs.core.first.call(null,seq__23631_23669__$1);
e.appendChild(ch_23675);

var G__23676 = cljs.core.next.call(null,seq__23631_23669__$1);
var G__23677 = null;
var G__23678 = (0);
var G__23679 = (0);
seq__23631_23659 = G__23676;
chunk__23632_23660 = G__23677;
count__23633_23661 = G__23678;
i__23634_23662 = G__23679;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23624){
var G__23625 = cljs.core.first.call(null,seq23624);
var seq23624__$1 = cljs.core.next.call(null,seq23624);
var G__23626 = cljs.core.first.call(null,seq23624__$1);
var seq23624__$2 = cljs.core.next.call(null,seq23624__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23625,G__23626,seq23624__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__,hierarchy__19674__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__,hierarchy__19674__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19674__auto__,method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__));
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
var el_23680 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23680.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23680.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23680.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23680);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23681,st_map){
var map__23688 = p__23681;
var map__23688__$1 = ((((!((map__23688 == null)))?((((map__23688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23688):map__23688);
var container_el = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23688,map__23688__$1,container_el){
return (function (p__23690){
var vec__23691 = p__23690;
var k = cljs.core.nth.call(null,vec__23691,(0),null);
var v = cljs.core.nth.call(null,vec__23691,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23688,map__23688__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23694,dom_str){
var map__23697 = p__23694;
var map__23697__$1 = ((((!((map__23697 == null)))?((((map__23697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23697):map__23697);
var c = map__23697__$1;
var content_area_el = cljs.core.get.call(null,map__23697__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23699){
var map__23702 = p__23699;
var map__23702__$1 = ((((!((map__23702 == null)))?((((map__23702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23702):map__23702);
var content_area_el = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__){
return (function (state_23745){
var state_val_23746 = (state_23745[(1)]);
if((state_val_23746 === (1))){
var inst_23730 = (state_23745[(7)]);
var inst_23730__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23731 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23732 = ["10px","10px","100%","68px","1.0"];
var inst_23733 = cljs.core.PersistentHashMap.fromArrays(inst_23731,inst_23732);
var inst_23734 = cljs.core.merge.call(null,inst_23733,style);
var inst_23735 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23730__$1,inst_23734);
var inst_23736 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23730__$1,msg);
var inst_23737 = cljs.core.async.timeout.call(null,(300));
var state_23745__$1 = (function (){var statearr_23747 = state_23745;
(statearr_23747[(8)] = inst_23736);

(statearr_23747[(9)] = inst_23735);

(statearr_23747[(7)] = inst_23730__$1);

return statearr_23747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23745__$1,(2),inst_23737);
} else {
if((state_val_23746 === (2))){
var inst_23730 = (state_23745[(7)]);
var inst_23739 = (state_23745[(2)]);
var inst_23740 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23741 = ["auto"];
var inst_23742 = cljs.core.PersistentHashMap.fromArrays(inst_23740,inst_23741);
var inst_23743 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23730,inst_23742);
var state_23745__$1 = (function (){var statearr_23748 = state_23745;
(statearr_23748[(10)] = inst_23739);

return statearr_23748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else {
return null;
}
}
});})(c__20903__auto__))
;
return ((function (switch__20882__auto__,c__20903__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0 = (function (){
var statearr_23752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23752[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__);

(statearr_23752[(1)] = (1));

return statearr_23752;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1 = (function (state_23745){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23753){if((e23753 instanceof Object)){
var ex__20886__auto__ = e23753;
var statearr_23754_23756 = state_23745;
(statearr_23754_23756[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23757 = state_23745;
state_23745 = G__23757;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__))
})();
var state__20905__auto__ = (function (){var statearr_23755 = f__20904__auto__.call(null);
(statearr_23755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_23755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__))
);

return c__20903__auto__;
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
var vec__23761 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__23761,(0),null);
var ln = cljs.core.nth.call(null,vec__23761,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23768 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23768,(0),null);
var file_line = cljs.core.nth.call(null,vec__23768,(1),null);
var file_column = cljs.core.nth.call(null,vec__23768,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23768,file_name,file_line,file_column){
return (function (p1__23764_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23764_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23768,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18742__auto__ = file_line;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
var and__18730__auto__ = cause;
if(cljs.core.truth_(and__18730__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18730__auto__;
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
var map__23773 = figwheel.client.heads_up.ensure_container.call(null);
var map__23773__$1 = ((((!((map__23773 == null)))?((((map__23773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23773):map__23773);
var content_area_el = cljs.core.get.call(null,map__23773__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__){
return (function (state_23821){
var state_val_23822 = (state_23821[(1)]);
if((state_val_23822 === (1))){
var inst_23804 = (state_23821[(7)]);
var inst_23804__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23805 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23806 = ["0.0"];
var inst_23807 = cljs.core.PersistentHashMap.fromArrays(inst_23805,inst_23806);
var inst_23808 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23804__$1,inst_23807);
var inst_23809 = cljs.core.async.timeout.call(null,(300));
var state_23821__$1 = (function (){var statearr_23823 = state_23821;
(statearr_23823[(8)] = inst_23808);

(statearr_23823[(7)] = inst_23804__$1);

return statearr_23823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23821__$1,(2),inst_23809);
} else {
if((state_val_23822 === (2))){
var inst_23804 = (state_23821[(7)]);
var inst_23811 = (state_23821[(2)]);
var inst_23812 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23813 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23814 = cljs.core.PersistentHashMap.fromArrays(inst_23812,inst_23813);
var inst_23815 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23804,inst_23814);
var inst_23816 = cljs.core.async.timeout.call(null,(200));
var state_23821__$1 = (function (){var statearr_23824 = state_23821;
(statearr_23824[(9)] = inst_23815);

(statearr_23824[(10)] = inst_23811);

return statearr_23824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23821__$1,(3),inst_23816);
} else {
if((state_val_23822 === (3))){
var inst_23804 = (state_23821[(7)]);
var inst_23818 = (state_23821[(2)]);
var inst_23819 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23804,"");
var state_23821__$1 = (function (){var statearr_23825 = state_23821;
(statearr_23825[(11)] = inst_23818);

return statearr_23825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23821__$1,inst_23819);
} else {
return null;
}
}
}
});})(c__20903__auto__))
;
return ((function (switch__20882__auto__,c__20903__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20883__auto____0 = (function (){
var statearr_23829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23829[(0)] = figwheel$client$heads_up$clear_$_state_machine__20883__auto__);

(statearr_23829[(1)] = (1));

return statearr_23829;
});
var figwheel$client$heads_up$clear_$_state_machine__20883__auto____1 = (function (state_23821){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object)){
var ex__20886__auto__ = e23830;
var statearr_23831_23833 = state_23821;
(statearr_23831_23833[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23834 = state_23821;
state_23821 = G__23834;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20883__auto__ = function(state_23821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20883__auto____1.call(this,state_23821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20883__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__))
})();
var state__20905__auto__ = (function (){var statearr_23832 = f__20904__auto__.call(null);
(statearr_23832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_23832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__))
);

return c__20903__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__){
return (function (state_23866){
var state_val_23867 = (state_23866[(1)]);
if((state_val_23867 === (1))){
var inst_23856 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(2),inst_23856);
} else {
if((state_val_23867 === (2))){
var inst_23858 = (state_23866[(2)]);
var inst_23859 = cljs.core.async.timeout.call(null,(400));
var state_23866__$1 = (function (){var statearr_23868 = state_23866;
(statearr_23868[(7)] = inst_23858);

return statearr_23868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(3),inst_23859);
} else {
if((state_val_23867 === (3))){
var inst_23861 = (state_23866[(2)]);
var inst_23862 = figwheel.client.heads_up.clear.call(null);
var state_23866__$1 = (function (){var statearr_23869 = state_23866;
(statearr_23869[(8)] = inst_23861);

return statearr_23869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(4),inst_23862);
} else {
if((state_val_23867 === (4))){
var inst_23864 = (state_23866[(2)]);
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23866__$1,inst_23864);
} else {
return null;
}
}
}
}
});})(c__20903__auto__))
;
return ((function (switch__20882__auto__,c__20903__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0 = (function (){
var statearr_23873 = [null,null,null,null,null,null,null,null,null];
(statearr_23873[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__);

(statearr_23873[(1)] = (1));

return statearr_23873;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1 = (function (state_23866){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23874){if((e23874 instanceof Object)){
var ex__20886__auto__ = e23874;
var statearr_23875_23877 = state_23866;
(statearr_23875_23877[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23878 = state_23866;
state_23866 = G__23878;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__ = function(state_23866){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1.call(this,state_23866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__))
})();
var state__20905__auto__ = (function (){var statearr_23876 = f__20904__auto__.call(null);
(statearr_23876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_23876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__))
);

return c__20903__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1478625923029