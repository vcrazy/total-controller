var home = 'http://www.remotecentral.com',
	full_data = {};

// manage paging everywhere

//var get_codes = function(link, manufacturer_name, device_name){
//	setTimeout(function(){
//		$.get(link, function(data){
//			$.each($(data).find('.filetablestructure'), function(col, b){
//				$.each($(b).find('.hexcodes'), function(col, a){
//					a = $(a).parent();
//
//					var button_name = $(a).find('td:first b').text(),
//						code = $(a).find('td:last span').text().trim();
//
//				});
//			});
//		});
//	}, 100000 * Math.random());
//};
//
//var get_devices = function(link, manufacturer_name){
//	setTimeout(function(){
//		$.get(link, function(data){
//			$.each($(data).find('.brandindexcol1'), function(col, b){
//				$.each($(b).find('a'), function(col, a){
//					var href = $(a).attr('href'),
//						device_name = $(a).text();
//
//					get_codes(home + href, manufacturer_name, device_name);
//				});
//			});
//		});
//	}, 100000 * Math.random());
//};
//
//$.each($('.brandindexcol2'), function(col, b){
//	$.each($(b).find('a'), function(col, a){
//		var href = $(a).attr('href'),
//			manufacturer_name = $(a).text();
//
//		get_devices(home + href, manufacturer_name);
//	});
//});
