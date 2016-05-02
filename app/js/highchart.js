$(document).ready(function(){
var chartOne = (function () {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge',
            // backgroundColor: '#C5BD98'
            borderColor: '#F15931',
            borderWidth: 1,
        },

        title: null,

        pane: {
            center: ['50%', '52%'],
            size: '85%',
            startAngle: 0,
            endAngle: 360,
            background: {
                backgroundColor: '#FFFFFF',
                innerRadius: '85%',
                outerRadius: '60%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false,
            hideDelay: -50,
        },

        // the value axis
       yAxis: {
            stops: [
                [0.1, '#F15931'], // green
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -65
            },
            labels: {
                y: -30
            }
        },

        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -25,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge html5
    $('#html5').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'HTML5',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:16px;color:' +
                    ('black') + '">{y}</span>%<br/>' +
                       '<span style="font-size:12px;color:black">HTML5</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
                
            }
        }]

    }));

        

});  

/*CSS#*/

var chart_two = (function(){
    // The speed gauge css3

    var gaugeOptions = {

        chart: {
            type: 'solidgauge',
            // backgroundColor: '#C5BD98'
            borderColor: '#006DB9',
            borderWidth: 1,
        },

        title: null,

        pane: {
            center: ['50%', '52%'],
            size: '85%',
            startAngle: 0,
            endAngle: 360,
            background: {
                backgroundColor: '#2CA9E1',
                innerRadius: '85%',
                outerRadius: '60%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false,
            hideDelay: -50
        },

        // the value axis
       yAxis: {
            stops: [
                [0.1, '#006DB9'], // green
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -65
            },
            labels: {
                y: -30
            }
        },

        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -25,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    $('#css3').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'CSS3',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:16px;color:' +
                    ('black') + '">{y}</span>%<br/>' +
                       '<span style="font-size:12px;color:black">CSS3</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
                
            }
        }]

    }));
});



// The speed gauge javascript
var chart_three = (function(){

    var gaugeOptions = {

        chart: {
            type: 'solidgauge',
            // backgroundColor: '#C5BD98'
            borderColor: '#FCDB38',
            borderWidth: 1,
        },

        title: null,

        pane: {
            center: ['50%', '52%'],
            size: '85%',
            startAngle: 0,
            endAngle: 360,
            background: {
                backgroundColor: '#D6BA32',
                innerRadius: '85%',
                outerRadius: '60%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false,
            hideDelay: -50
        },

        // the value axis
       yAxis: {
            stops: [
                [0.1, '#FCDB38'], // green
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -65
            },
            labels: {
                y: -30
            }
        },

        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -25,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    $('#javascript').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'JAVASCRIPT',
            data: [40],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:16px;color:' +
                    ('black') + '">{y}</span>%<br/>' +
                       '<span style="font-size:12px;color:black">JAVASCRIPT</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
                
            }
        }]

    }));
});

chartOne();
chart_two();
chart_three();    


/*ending of document ready*/
});