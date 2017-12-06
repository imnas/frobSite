AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

$(".faq-q").click( function () {
    var container = $(this).parents(".faq-c");
    var answer = container.find(".faq-a");
    var trigger = container.find(".faq-t");
    
    answer.slideToggle(200);
    
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    }
    else {
      trigger.addClass("faq-o");
    }
  });

  $('#mobileNavButton').click(function(e){
    e.stopPropagation();
     $('#mobileSidebar').toggleClass('showMenu');
});
$('#mobileSidebar').click(function(e){
    e.stopPropagation();
});
$('body,html').click(function(e){
       $('#mobileSidebar').removeClass('showMenu');
});
  


  var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
  "theme": "light",
  "fontFamily": "Proxima Nova",
  "fontSize": 14,
  "color": "#fff",
  "titleBold": true,
"colors": ["#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#4c3232", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"],
    "dataProvider": [{
        "year": 2005,
        "europe": 40,
        "namerica": 30,
        "asia": 15,
        "lamerica": 10,
        "lamerica2": 05
    }],
    "valueAxes": [{
        "stackType": "100%",
        "axisAlpha": 0.5,
        "gridAlpha": 0,
        "axisThickness": 0,
        "axisColor": "",
  			"fontSize": 10,
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Europe",
        "type": "column",
				"color": "#fff",
        "valueField": "europe"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "North America",
        "type": "column",
				"color": "#fff",
        "valueField": "namerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Asia-Pacific",
        "type": "column",
				"color": "#fff",
        "valueField": "asia"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Latin America",
        "type": "column",
				"color": "#fff",
        "valueField": "lamerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 1,
      "labelText": "[[value]] %",
      "lineAlpha": 0.3,
      "columnWidth": 0.7,
      "title": "Europe",
      "type": "column",
      "color": "#fff",
      "valueField": "lamerica2"
  }],
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "labelsEnabled": false
        
    },
    "export": {
    	"enabled": false
     }
});

var chart = AmCharts.makeChart("mobileChartdiv", {
    "type": "serial",
  "theme": "light",
  "fontFamily": "Proxima Nova",
  "fontSize": 14,
  "color": "#fff",
  "titleBold": true,
"colors": ["#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#4c3232", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"],
    "dataProvider": [{
        "year": 2005,
        "europe": 40,
        "namerica": 30,
        "asia": 15,
        "lamerica": 10,
        "lamerica2": 05
    }],
    "valueAxes": [{
        "stackType": "100%",
        "axisAlpha": 0.5,
        "gridAlpha": 0,
        "axisThickness": 0,
        "axisColor": "",
  			"fontSize": 10,
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Europe",
        "type": "column",
				"color": "#fff",
        "valueField": "europe"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "North America",
        "type": "column",
				"color": "#fff",
        "valueField": "namerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Asia-Pacific",
        "type": "column",
				"color": "#fff",
        "valueField": "asia"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 1,
        "labelText": "[[value]] %",
        "lineAlpha": 0.3,
        "columnWidth": 0.7,
        "title": "Latin America",
        "type": "column",
				"color": "#fff",
        "valueField": "lamerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 1,
      "labelText": "[[value]] %",
      "lineAlpha": 0.3,
      "columnWidth": 0.7,
      "title": "Europe",
      "type": "column",
      "color": "#fff",
      "valueField": "lamerica2"
  }],
    "rotate": false,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "labelsEnabled": false
        
    },
    "export": {
    	"enabled": false
     }
});


$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});









// console.log("hello")
// // target to give background to
// var $divs = Array.from(document.getElementsByClassName("gradient"));

// $divs.forEach(($div) => {
//   // rgb vals of the gradients
// var gradients = [
//   { start: [26,27,28], stop: [41,42,43] },
//   { start: [41,42,43], stop: [26,27,28] },
//   { start: [26,27,28], stop: [41,42,43] }
// ];
// // how long for each transition
// var transition_time = 4;

// // internal type vars
// var currentIndex = 0; // where we are in the gradients array
// var nextIndex = 1; // what index of the gradients array is next
// var steps_count = 0; // steps counter
// var steps_total = Math.round(transition_time*60); // total amount of steps
// var rgb_steps = {
//   start: [0,0,0],
//   stop: [0,0,0]
// }; // how much to alter each rgb value
// var rgb_values = {
//   start: [0,0,0],
//   stop: [0,0,0]
// }; // the current rgb values, gets altered by rgb steps on each interval
// var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
// var div_style = $div.style; // short cut to actually adding styles
// var color1, color2;

// // sets next current and next index of gradients array
// function set_next(num) {
//   return (num + 1 < gradients.length) ? num + 1 : 0;
// }

// // work out how big each rgb step is
// function calc_step_size(a,b) {
//   return (a - b) / steps_total;
// }

// // populate the rgb_values and rgb_steps objects
// function calc_steps() {
//   for (var key in rgb_values) {
//     if (rgb_values.hasOwnProperty(key)) {
//       for(var i = 0; i < 3; i++) {
//         rgb_values[key][i] = gradients[currentIndex][key][i];
//         rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
//       }
//     }
//   }
// }

// // update current rgb vals, update DOM element with new CSS background
// function updateGradient(){
//   // update the current rgb vals
//   for (var key in rgb_values) {
//     if (rgb_values.hasOwnProperty(key)) {
//       for(var i = 0; i < 3; i++) {
//         rgb_values[key][i] += rgb_steps[key][i];
//       }
//     }
//   }

//   // generate CSS rgb values
//   var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
//   var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

//   // has anything changed on this interation
//   if (t_color1 != color1 || t_color2 != color2) {

//     // update cols strings
//     color1 = t_color1;
//     color2 = t_color2;

//     // update DOM element style attribute
//     div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
//     for (var i = 0; i < 4; i++) {
//       div_style.backgroundImage = prefixes[i]+"linear-gradient(90deg, "+color1+", "+color2+")";
//     }
//   }

//   // we did another step
//   steps_count++;
//   // did we do too many steps?
//   if (steps_count > steps_total) {
//     // reset steps count
//     steps_count = 0;
//     // set new indexs
//     currentIndex = set_next(currentIndex);
//     nextIndex = set_next(nextIndex);
//     // calc steps
//     calc_steps();
//   }

//   if (div_style.backgroundImage.indexOf("gradient") != -1) {
//     window.requestAnimationFrame(updateGradient)
//   }
// }

// // initial step calc
// calc_steps();

// // go go go!
// window.requestAnimationFrame(updateGradient);
// })

