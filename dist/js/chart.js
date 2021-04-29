//Bar
new Chartist.Bar(
  '#chart1',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [50, 80, 25, 80]
  },
  {
    fullWidth: true,
    distributeSeries: true
  }
);
new Chartist.Bar(
  '#chart4',
  {
    labels: ['$2-$5', '$6-$10', '$11-$15', '$16-20$', '$25-$40'],
    series: [20, 45, 15, 35, 40]
  },

  {
    distributeSeries: true,
    showLabel: false
  }
);
new Chartist.Bar(
  '#chart5',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [10, 20, 15, 5]
  },

  {
    distributeSeries: true,
    showLabel: false
  }
);

new Chartist.Line(
  '#chart3',
  {
    labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
    series: [['2000', 2500, 1000, 2800, 2000, 3000]]
  },
  {
    fullWidth: true,
    height: '60%',
    axisY: {
      onlyInteger: true,
      type: Chartist.FixedScaleAxis,
      ticks: [0, 1000, 2000, 3000, 4000, 5000],
      low: 0
    }
  }
);
