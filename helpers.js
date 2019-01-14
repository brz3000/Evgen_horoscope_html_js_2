prophecies_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"

$('#main_header_1').click(function(){
	$.getJSON(prophecies_url, function(data){
		console.log(data);
		paragraphs = data ["prophecies"]
		set_content_in_divs(paragraphs)
	});

	
});

function set_secret_message(msg) {
	p = $("#second-paragraph")
	p.html(prophecies)
	p.css("color", "red")
};

function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
});
};


$("p").hover(function() {hoverElem = this
	$("p").css("background", "lightgreen")
},function(){
	$("p").css("background", "")
 });


obj_hours=document.getElementById("wb_data");
name_month=new Array ("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");

day=new Array("(Воскресенье)","(Понедельник)","(Вторник)",
"(Среда)","(Четверг)","(Пятница)","(Суббота)");

function wr_hours()
{time=new Date;
time_date=time.getDate();
time_wr=((time_date<10)?'0':'')+time_date;
time_wr=time_wr+" "+name_month[time.getMonth()]+" "+time.getFullYear()+" г."+" "+day[time.getDay()];
obj_hours.innerHTML=time_wr;}

wr_hours();
setInterval("wr_hours();",1000);
