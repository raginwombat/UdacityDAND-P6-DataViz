
function draw(data){

    function dateFilter(data, startYear, EndYear){
      return data.filter( function(d){ 
                           return (d['LoanYear'].getFullYear() >= startYear && d['LoanYear'].getFullYear() < EndYear ); 
                         }  );      
    }


    //debugger;
    //Create the svg and chart    
    'use strict';
    var margin = 50,
        width = 1400 - margin,
        height = 600 - margin;

      var head = d3.select('#headerContainer')
        .append('h2')
        .text('Prosper Loans Made By Loan Date')
      d3.select()
      var svg1 = dimple.newSvg('#chartArea', width + margin, height + margin);


      var myChart = new dimple.chart(svg1, data);
    
      //Setup the x axis
      var xaxis = myChart.addTimeAxis('x',  'ListingCreationDate', '%Y-%m', '%Y');
      xaxis.timePeriod = d3.timeYear;
      xaxis.timeInterval = 1;
      xaxis.title = 'Loan Date'
      xaxis.fontSize = '1em'

      //Create the yaxis that will draw the data. The data has already been sectioned.
      //The category function is utilized to generate the color coding
      var yaxis = myChart.addMeasureAxis('y', 'ListingCreationDate' );
      yaxis.title  = 'Total Number of Loans';
      yaxis.fontSize = '1em'
      yaxis.ticks=15

      //Create the series to match the axes already crated and bind the filtered data to them
      var ser = myChart.addSeries(['Era'], dimple.plot.bar, [xaxis , yaxis])
      
      //Custom colors for serires
      myChart.defaultColors = [
          new dimple.color("#9b59b6", "#8e44ad", 1), // purple
          new dimple.color("#e67e22", "#d35400", 1), // orange
          new dimple.color("#1abc9c", "#16a085", 1), // turquoise
      ];

      // myChart.addLegend(x, y, width, height, horizontalAlign, series)

     var legend = myChart.addLegend(500, 583, '50%', 60);
     legend.fontSize = '1.5em'

      myChart.draw();
      //debugger;

    }
