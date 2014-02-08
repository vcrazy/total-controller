var home = 'http://www.remotecentral.com',
	full_data = {};

var get_codes = function(link, manufacturer_name, device_name){
	setTimeout(function(){
		$.get(link, function(data){
			$.each($(data).find('.filetablestructure'), function(col, b){
				$.each($(b).find('.hexcodes'), function(col, a){
					a = $(a).parent();

					var button_name = $(a).find('td:first b').text(),
						code = $(a).find('td:last span').text().trim().split(' ').map(function(e){return parseInt(e, 16);}).splice(4);

					full_data[manufacturer_name][device_name][button_name] = code;
				});
			});

			if($('.textnorm a').length){
				var current_page = $('.textnorm span.bluetext').text() * 1;
				var links = $('.textnorm a:not(:last)');
				if(current_page == 1){
					$.each(links, function(col, c){
						if(c.text() * 1 > current_page){
							get_codes(home + $(c).attr('href'), manufacturer_name, device_name);
						}
					});
				}
			}
		});
	}, 1000 * 100 * Math.random());
};

var get_devices = function(link, manufacturer_name){
	setTimeout(function(){
		$.get(link, function(data){
			$.each($(data).find('.brandindexcol1'), function(col, b){
				$.each($(b).find('a'), function(col, a){
					var href = $(a).attr('href'),
						device_name = $(a).text();

					full_data[manufacturer_name][device_name] = {};
					get_codes(home + href, manufacturer_name, device_name);
				});
			});

			if($('.textnorm a').length){
				var current_page = $('.textnorm span.bluetext').text() * 1;
				var links = $('.textnorm a');
				if(current_page == 1){
					$.each(links, function(col, c){
						if(c.text() * 1 > current_page){
							get_devices(home + $(c).attr('href'), manufacturer_name);
						}
					});
				}
			}
		});
	}, 1000 * 100 * Math.random());
};

$.each($('.brandindexcol2'), function(col, b){
	$.each($(b).find('a'), function(col, a){
		var href = $(a).attr('href'),
			manufacturer_name = $(a).text();

		full_data[manufacturer_name] = {};
		get_devices(home + href, manufacturer_name);
	});
});

setInterval(function(){
	console.log(JSON.stringify(full_data));
}, 60 * 1000);
