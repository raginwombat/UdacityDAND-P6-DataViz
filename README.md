# UdacityDAND-P6-DataViz

## Summary - in no more than 4 sentences, briefly introduce your data visualization and add any context that can help readers understand it
Propser is a P2P lending platofrm, it lets peoeple lend to other people. Since it's inception Prosper's lending rates have grown dramatically, but none more so than the middle class 25-75k income bracket.


## Design - explain any design choices you made including changes to the visualization after collecting feedback
I wanted to create a graph that showed the changes over time for the loans. Income was chosen as a brakcet due to the fack that occupatoin, while instresting had too many categories. Income is also an easily understood bracket that seemed to show the inflation over time really well so it was used as a secondary marker.

This data source is reach so this visualtizatoin is about pairind down the data rather than adding elements.

After feedback a trendline was added to show the total number of loans over time to show how markedly it increased. The time scale was also grouped together, the titles for the graph edited,  timeline rouped by quarters and extraneous caetgoires (0$, Not Employed and No Response) removed from the graph.

A new data point "Loan Quarter" was creaed based off of the creation date and it's been used to bin th data instead of the creation date to tighten up the drawn circles

A blow out that shows the data fromthe bubble was created when clicking on a bubble. 

##Feedback - include all feedback you received from others on your visualization from the first sketch to the final visualization

Feedback 1 V1: 
"The Y axis label is not formatted well. Make the labels easier to read by putting spaces between the words and increasing the font slightly.

The graphic becomes difficult to view between 2012-2014. Is there a better way to view this? Can you use different colors or make it slightly more transparent or make all of the outlines thicker?

Otherwise it looks good. "

Feedback 2 V2:
The graph looks good. The total loan number is a little confusing to read on the right axis and could be color coded or put in a separate graph. It does help comprehend the total number of loans taken out each year though and is useful information.

The overall graphic is good; showing the number of loans separated by income bracket per year. 

Feedback 3 v3:

##Resources - list any sources you consulted to create your visualization

* https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart 
* https://stackoverflow.com/questions/31729522/aggregating-categorical-variables-w-dimple-js
* http://learnjsdata.com/group_data.html
* http://bl.ocks.org/phoebebright/raw/3176159/
* https://stackoverflow.com/questions/23864180/counting-data-items-in-d3-js
* https://github.com/d3/d3/issues/2853
* https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#timePeriod
* https://github.com/d3/d3/blob/master/API.md#time-intervals-d3-time
* https://stackoverflow.com/questions/30945581/change-axis-color-dimple
* http://dimplejs.org/adhoc_viewer.html?id=adhoc_bar_custom_tooltips