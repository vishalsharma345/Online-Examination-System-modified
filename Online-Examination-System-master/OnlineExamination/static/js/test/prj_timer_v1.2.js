var interval=0;(function($){$.fn.startPrjCounter=function(options,callback){var settings=$.extend({},options);var container=$(this);var init_minutes=settings.minutes;var stop_timer=false;if(init_minutes<=0){alert("Error ! Intial Minute Can not be less than 1 Minute");return;}
var total_seconds=parseInt(container.find('.total_seconds').text());var lossminutes=Math.floor(total_seconds/60);var lossseconds=total_seconds-lossminutes*60;var seconds=60-parseInt(lossseconds);var minutes=init_minutes%60;var hours=Math.floor(init_minutes/60);function set_timer(){if(hours==0&&minutes==0&&seconds==0){stop_timer=true;if(callback&&typeof callback==='function')callback();}
var str_hours=hours;var str_minutes=minutes;var str_seconds=seconds;if(hours<10){str_hours='0'+hours;}
if(minutes<10){str_minutes='0'+minutes;}
if(seconds<10){str_seconds='0'+seconds;}
container.find('.hours').text(str_hours);container.find('.minutes').text(str_minutes);container.find('#test_duration').text(str_minutes);container.find('.seconds').text(str_seconds);container.find('.total_seconds').text(total_seconds);start_test_timercheck();}
function countdown(){if(!stop_timer){total_seconds+=1;if(seconds==0){if(minutes>=0){seconds=59;if(minutes==0){if(hours>0){minutes=59;hours-=1;}}
else{minutes-=1;}}}
else{seconds-=1;}
set_timer();}};set_timer();countdown();interval=setInterval(countdown,1000);};})(jQuery);