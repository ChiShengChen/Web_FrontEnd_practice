(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

             /* MORRIS DONUT CHART
            ----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "dUSD",
                    value: 2 
                }, {
                    label: "dRMB",
                    value: 50
                }, {
                    label: "dHKD",
                    value: 50
                }],
                   colors: [ '#A6A6A6','#414e63','#e96562'],
                resize: true
            });

            // Morris.Donut({
            //     element: 'morris-donut-chart-2',
            //     data: [{
            //         label: "dUSD",
            //         value: 2 
            //     }, {
            //         label: "dRMB",
            //         value: 50
            //     }, {
            //         label: "dHKD",
            //         value: 50
            //     }],
            //        colors: [ '#A6A6A6','#414e63','#e96562'],
            //     resize: true
            // });

            /* MORRIS BAR CHART
			-----------------------------------------*/
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [{
                    y: '2018-04',
                    a: 100,
                    b: 112
                }, {
                    y: '2018-05',
                    a: 75,
                    b: 65
                }, {
                    y: '2018-06',
                    a: 50,
                    b: 40
                }, {
                    y: '2018-07',
                    a: 75,
                    b: 65
                }, {
                    y: '2018-08',
                    a: 50,
                    b: 40
                }, {
                    y: '2018-09',
                    a: 75,
                    b: 65
                }, {
                    y: '2018-10',
                    a: 200,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['dHKD->dRMB', 'dRMB->dHKD'],
				 barColors: [ '#e96562','#414e63','#A8E9DC'],
                hideHover: 'auto',
                resize: true
            });
	 


           

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2016 Q1',
                    dRMB: 2666,
                    dHKD: null,
                    dUSD: 2647
                }, {
                    period: '2016 Q2',
                    dRMB: 2778,
                    dHKD: 2294,
                    dUSD: 2441
                }, {
                    period: '2016 Q3',
                    dRMB: 4912,
                    dHKD: 1969,
                    dUSD: 2501
                }, {
                    period: '2016 Q4',
                    dRMB: 3767,
                    dHKD: 3597,
                    dUSD: 5689
                }, {
                    period: '2017 Q1',
                    dRMB: 6810,
                    dHKD: 1914,
                    dUSD: 2293
                }, {
                    period: '2017 Q2',
                    dRMB: 5670,
                    dHKD: 4293,
                    dUSD: 1881
                }, {
                    period: '2017 Q3',
                    dRMB: 4820,
                    dHKD: 3795,
                    dUSD: 1588
                }, {
                    period: '2017 Q4',
                    dRMB: 15073,
                    dHKD: 5967,
                    dUSD: 5175
                }, {
                    period: '2018 Q1',
                    dRMB: 10687,
                    dHKD: 4460,
                    dUSD: 2028
                }, {
                    period: '2018 Q2',
                    dRMB: 8432,
                    dHKD: 5713,
                    dUSD: 1791
                }],
                xkey: 'period',
                ykeys: ['dRMB', 'dHKD', 'dUSD'],
                labels: ['dRMB', 'dHKD', 'dUSD'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#A6A6A6','#414e63'],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
    //         Morris.Line({
    //             element: 'morris-line-chart',
    //             data: [
				// 	  { y: '2014', a: 50, b: 90},
				// 	  { y: '2015', a: 165,  b: 185},
				// 	  { y: '2016', a: 150,  b: 130},
				// 	  { y: '2017', a: 175,  b: 160},
				// 	  { y: '2018', a: 80,  b: 65},
				// 	  { y: '2019', a: 90,  b: 70},
				// 	  { y: '2020', a: 100, b: 125},
				// 	  { y: '2021', a: 155, b: 175},
				// 	  { y: '2022', a: 80, b: 85},
				// 	  { y: '2023', a: 145, b: 155},
				// 	  { y: '2024', a: 160, b: 195}
				// ],
            
				 
    //                   xkey: 'y',
    //                   ykeys: ['a', 'b'],
    //                   labels: ['Total Income', 'Total Outcome'],
    //                   fillOpacity: 0.6,
    //                   hideHover: 'auto',
    //                   behaveLikeLine: true,
    //                   resize: true,
    //                   pointFillColors:['#ffffff'],
    //                   pointStrokeColors: ['black'],
    //                   lineColors:['gray','#414e63']
	  
    //               });
           
        
            $('.bar-chart').cssCharts({type:"bar"});
            $('.donut-chart').cssCharts({type:"donut"}).trigger('show-donut-chart');
            $('.line-chart').cssCharts({type:"line"});

            $('.pie-thychart').cssCharts({type:"pie"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
		$(".dropdown-button").dropdown();
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
		
        mainApp.initFunction(); 
    });

	$(".dropdown-button").dropdown();
	
}(jQuery));
