
function draw(data){

    data = dimple.filterData(data, 'IncomeRange', ['$1-24,999','$25,000-49,999', '$50,000-74,999', '$75,000-99,999', '$100,000+'])
    'use strict';
    var margin = 100,
        width = 1400 - margin,
        height = 600 - margin;

      var head = d3.select('#headerContainer')
        .append('h2')
        .text('Prosper Loans Made By Loan Date')
      d3.select()
      var svg1 = dimple.newSvg('#chartArea', width + margin, height + margin);


      debugger;
      /*Create chart */
      var myChart = new dimple.chart(svg1, data);
      //var myChart = new dimple.chart(svg1, loansByQuarter);

      //var xaxis = myChart.addTimeAxis('x', '%Y-%m-%d %H:%M:%S','%Y-%m', 'ListingCreationDate');
      //debugger;
      var xaxis = myChart.addTimeAxis('x',  'ListingCreationDate', '%Y-%m', '%Y-%m');
      //var xaxis = myChart.addTimeAxis('x',  'LoanQuarter', '%Y-%m', '%Y-%m');
      //var xaxis = myChart.addTimeAxis('x',  'LoanYear', '%Y-%m', '%Y-%m');
      xaxis.timePeriod = d3.timeMonth;
      //xaxis.timePeriod = d3.timeYear;
      xaxis.timeInterval = 4;
      xaxis.title = 'Loan Date'
      
      //Draw Axis 1
      var y1axis = myChart.addCategoryAxis('y', 'IncomeRange');
      y1axis.addOrderRule(['Other', '$0', '$1-24,999', '$25,000-49,999', '$50,000-74,999', '$75,000-99,999', '$100,000+']);
      y1axis.title = 'Income Range'

      //Draw axis 2
      //var y2axis = myChart.addMeasureAxis('y', 'ListingCreationDate' );
      //y2axis.title  = 'Total Number of Loans';

      var zaxis = myChart.addMeasureAxis('z', 'ListingKey');
      zaxis.title = 'Number of Loans by Income Bracket';

      var ser = myChart.addSeries(null, dimple.plot.scatter, [xaxis, y1axis, zaxis]);
      ser.addOrderRule('ListingCreationDate');
      ser.getTooltipText = function (e) {
                return [
                    "Hey you hovered over " + e.aggField[0] + "!",
                    "Each element in the array becomes a new line."
                ];
            };
      //ser.addOrderRule('LoanQuarter')
      //var totser = myChart.addSeries(null, dimple.plot.line, [xaxis , y2axis])
      myChart.draw();


      var svg2 = dimple.newSvg('#chartArea', width + margin, height + margin);

      var myChart2 = new dimple.chart(svg2, data)
      var xaxis2 = myChart2.addTimeAxis('x',  'ListingCreationDate', '%Y-%m', '%Y-%m');
      var y1axis2 = myChart2.addCategoryAxis('y', 'IncomeRange');
      y1axis2.addOrderRule(['Other', '$0', '$1-24,999', '$25,000-49,999', '$50,000-74,999', '$75,000-99,999', '$100,000+']);
      y1axis2.title = 'Income Range'

      var zaxis2 = myChart2.addMeasureAxis('z', 'ListingKey');
      zaxis2.title = 'Number of Loans by Income Bracket';

      var ser2 = myChart2.addSeries(null, dimple.plot.scatter, [xaxis2, y1axis2, zaxis2]);
      ser2.addOrderRule('ListingCreationDate');
      


    }
