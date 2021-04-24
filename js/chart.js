//Bar
new Chartist.Bar('#chart1', {
    labels: ['Week 1', 'Week 2','Week 3','Week 4'],
    series: [50, 80, 25, 80]
  },
 
  {
    distributeSeries: true,
  
  }
  );
new Chartist.Bar('#chart4', {
    labels: ['$2-$5', '$6-$10','$11-$15','$16-20$','$25-$40'],
    series: [20, 45, 15, 35,40]
  },
 
  {
    distributeSeries: true,
    showLabel: false,
  
  }
  );
new Chartist.Bar('#chart5', {
  labels: ['Week 1', 'Week 2','Week 3','Week 4'],
    series: [10, 20, 15, 5]
  },
 
  {
    distributeSeries: true,
    showLabel: false,
  
  }
  );

  
  //Pie
  new Chartist.Pie('#chart2', 
  {
    series: [25, 25, 25, 25]
  }, 
  
  {
    donut: true,
    donutWidth: 40,
    donutSolid: true,
    startAngle: 270,
    showLabel: false,
  });
  //Line
  new Chartist.Line('#chart3', {
    series: [[
      {x: 1, y: 0},
      {x: 2, y: 5},
      {x: 3, y: 3},
      {x: 4, y: 20},
      {x: 5, y: 15},
      {x: 6, y: 30},
      {x: 7, y: 25}
    ]]
  }, {
    axisX: {
      type: Chartist.AutoScaleAxis,
      onlyInteger: true,
      width:"100px",
      height:"100px"
    }
  });
  