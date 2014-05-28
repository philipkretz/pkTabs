/*
 * 
 * pkTabs - A simple tab group for most use cases.
 * Version 0.1
 * @requires jQuery v1.5
 * 
 * Copyright (c) 2014 Philip Kretz
 * Website: http://www.philipkretz.de
 * Published for free use under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
 
 (function($) {
	$.fn.extend({
		pkTabs:function(params) {
			
			// Setting and extending initial values...
			var conf = {
					tabClass: "tab",
					navigatorClass: "tab_links",
					showIndex: 0
				};
			$.extend(conf, params);
			
			var elem = $(this);
			
			function init() {
				return $(this).each(function(){
					var elCounter = 0;
					elem.find("."+conf.tabClass).each(function() {
						if (elCounter == conf.showIndex) $(this).show();
						else $(this).hide();
						elCounter++;
					});
					elCounter=0;
					elem.find("."+conf.navigatorClass+">a").each(function() {
						if (elCounter == conf.showIndex) $(this).css("text-decoration", "none");
						else $(this).css("text-decoration", "underline");
						elCounter++;
						$(this).click(function() {
							selectTab($(this).attr("href"));
						});
					});
				});
			}
			
			function selectTab(tabId) {
				return $(this).each(function(){
					elem.find("."+conf.tabClass).each(function() {
						if (tabId == "#"+$(this).attr("id")) $(this).show();
						else $(this).hide();
					});
					elem.find("."+conf.navigatorClass+">a").each(function() {
						if (tabId == $(this).attr("href")) {
							$(this).css("text-decoration", "none");
						}
						else {
							$(this).css("text-decoration", "underline");
						}
					});
				});
			}
			
			init();
		}
	});
 })(jQuery);
