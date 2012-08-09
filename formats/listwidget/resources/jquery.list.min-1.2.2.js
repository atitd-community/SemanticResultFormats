/*! jQuery list 1.2.2 teamdf.com/jquery-plugins | teamdf.com/jquery-plugins/license */
(function(e){var k=true,m={headerSelector:"dt",zIndex:1},j={log:function(){if(k&&window.console&&window.console.log)try{window.console.log.apply(console,arguments)}catch(b){window.console.log(arguments)}},updateHeader:function(b,a){var c=b.data("list");if(c){c.fakeHeader=a.clone().removeAttr("id").addClass("-list-fakeheader");c.fakeHeader.css({position:"absolute",top:0,width:c.headers.width(),zIndex:c.settings.zIndex});b.data("list",c).children(0).eq(0).replaceWith(c.fakeHeader)}},events:{resize:function(){var b=
e(this),a=b.data("list");if(a){a.fakeHeader.width(a.headers.width());a.wrapper.css("maxHeight",b.css("maxHeight"))}},scroll:function(){var b=e(this),a=b.data("list");if(a){var c=null,d=a.headers.eq(a.currentHeader),i=a.currentHeader>=a.headers.length-1?null:a.headers.eq(a.currentHeader+1),f=a.currentHeader<=0?null:a.headers.eq(a.currentHeader-1),g=false;a.containerTop=b.offset().top+parseInt(b.css("marginTop"),10)+parseInt(b.css("borderTopWidth"),10);a.fakeHeader.css("top",0);if(f!==null){var h=d.offset().top;
d=d.outerHeight();if(h>a.containerTop){a.fakeHeader.css("top",h-d-a.containerTop);j.updateHeader(b,f);a.currentHeader-=1;g=true}if(h-d>a.containerTop){a.fakeHeader.css("top",0);c=a.currentHeader-1}}if(i!==null){h=i.offset().top;d=i.outerHeight();h-d<a.containerTop&&a.fakeHeader.css("top",h-d-a.containerTop);if(h<a.containerTop){a.fakeHeader.css("top",0);c=a.currentHeader+1}}if(c!==null){g=a.headers.eq(c);a.currentHeader=c;j.updateHeader(b,g);g=true}c=a.wrapper.scrollTop()>=a.wrapper.prop("scrollHeight")-
a.wrapper.height();if(g||c||a.max&&!c)b.trigger("headingChange",[a.currentHeader,a.headers.eq(a.currentHeader),c]);a.max=c;b.data("list",a)}}}},l={init:function(b){return e(this).each(function(){var a=e.extend({},m);typeof b=="object"&&e.extend(a,b);var c=e(this),d=c.data("list");if(!d){d={target:c,wrapper:c.wrapInner('<div class="ui-list" />').find(".ui-list"),settings:a,headers:[],containerTop:0,currentHeader:0,fakeHeader:null,scrolllist:[],original:{position:"",overflowX:"",overflowY:""},max:false};
c.addClass("-list-container").css({position:c.css("position")=="absolute"?"absolute":"relative",overflowY:"hidden"});d.headers=c.find(d.settings.headerSelector);d.fakeHeader=d.headers.eq(0).clone().removeAttr("id").addClass("-list-fakeheader");d.wrapper.bind("scroll.list",e.proxy(j.events.scroll,c)).css({height:"100%",maxHeight:c.css("maxHeight"),overflowY:"scroll",position:"relative"});d.fakeHeader.css({position:"absolute",top:0,width:d.headers.width(),zIndex:d.settings.zIndex});e(window).bind("resize.list",
e.proxy(j.events.resize,c));c.data("list",d).prepend(d.fakeHeader)}})},header:function(){var b=e(this).data("list");if(b)return b.currentHeader},scrollTo:function(b,a,c,d){return this.each(function(){var i=e(this),f=i.data("list");if(f)if(b!==undefined&&!isNaN(b)&&b>=0&&b<f.headers.length){var g=f.headers.eq(b),h=g.position().top+f.wrapper.scrollTop()+parseInt(g.css("borderTopWidth"),10)+parseInt(g.css("borderBottomWidth"),10);if(a)f.wrapper.stop().animate({scrollTop:h},a,c,d);else{f.wrapper.stop().scrollTop(h);
f.currentHeader=b;j.updateHeader(i,g);i.trigger("headingChange",[b,g]);i.data("list",f)}}})},option:function(b,a){var c=e(this),d=c.data("list");if(d){if(typeof b=="undefined")return d.settings;if(!b in d.settings)return false;if(typeof a=="undefined")return d.settings[b];else{d.settings[b]=a;return c}}},version:function(b){if(b){var a="1.2.1".split(".");b=(Number(a[0])||1)+"";var c=(Number(a[1])||0)+"";a=(Number(a[2])||0)+"";return Number("000".slice(0,3-b.length)+b+"000".slice(0,3-c.length)+c+"000".slice(0,
3-a.length)+a)}else return"list v1.2.1"},destroy:function(){return this.each(function(){var b=e(this),a=b.data("list");if(a){a.wrapper.children().unwrap();a.fakeHeader.remove();b.css(a.original).removeData("list").removeClass("-list-container").unbind(".list")}})}};e.fn.list=function(b){if(l[b])return l[b].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof b==="object"||!b)return l.init.apply(this,arguments);else e.error("Method "+b+" does not exist on jQuery.list")};e.list={};e.list.log=
function(b){if(b!==undefined)k=b;return k}})(jQuery);