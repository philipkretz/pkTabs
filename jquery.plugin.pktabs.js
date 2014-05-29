/*
 * 
 * pkTabs - A simple tab group for most use cases.
 * Version 0.1.0
 * @requires jQuery v1.5
 * 
 * Copyright (c) 2014 Philip Kretz
 * Website: http://www.philipkretz.de
 * Published for free use under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
 
 (function($) {
	$.fn.pkTabs = function(params) {
		
		// Setting and extending initial values...
		var conf = {
				tabClass: "tab",
				navigatorClass: "tab_links",
				showIndex: 0
			};
		$.extend(conf, params);
		
		var elem = $(this);
		return $(this).each(function(){
		function init() {
			var elCounter = 0;
			elem.find("."+conf.tabClass).each(function() {
				if (elCounter == conf.showIndex) $(this).show();
				else $(this).hide();
				elCounter++;
			});
			elCounter=0;
			elem.find("."+conf.navigatorClass+">a").addClass("tabLink");
			elem.find("."+conf.navigatorClass+">a").each(function() {
				if (elCounter == conf.showIndex) {
					$(this).removeClass("tabLinkHide");
					$(this).addClass("tabLinkShow");
				}
				else {
					$(this).removeClass("tabLinkShow");
					$(this).addClass("tabLinkHide");
				}
				elCounter++;
				$(this).click(function() {
					selectTab($(this).attr("href"));
				});
			});
		}
		
		function selectTab(tabId) {
			elem.find("."+conf.tabClass).each(function() {
				if (tabId == "#"+$(this).attr("id")) $(this).show();
				else $(this).hide();
			});
			elem.find("."+conf.navigatorClass+">a").each(function() {
				if (tabId == $(this).attr("href")) {
					$(this).removeClass("tabLinkHide");
					$(this).addClass("tabLinkShow");
				}
				else {
					$(this).removeClass("tabLinkShow");
					$(this).addClass("tabLinkHide");
				}
			});
		}
		
		init();
		});
	}
 })(jQuery);