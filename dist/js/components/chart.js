//Init Chartist charts
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
    axisX: {
      showGrid: false
    },
    axisY: { showGrid: false, showLabel: false }
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
    axisX: {
      showGrid: false
    },
    axisY: { showGrid: false, showLabel: false }
  }
);
new Chartist.Bar(
  '#chart11',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [20, 45, 15, 35]
  },
  {
    distributeSeries: true,
    axisX: {
      showGrid: false
    },
    axisY: { showGrid: false, showLabel: false }
  }
);
// new Chartist.Bar(
//   '.ct-chart',
//   {
//     labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//     series: [
//       [800000, 1200000, 1400000, 1300000],
//       [200000, 400000, 500000, 300000],
//       [100000, 200000, 400000, 600000]
//     ]
//   },
//   {
//     stackBars: true,
//     axisY: {
//       labelInterpolationFnc: function (value) {
//         return value / 1000 + 'k';
//       }
//     }
//   }
// ).on('draw', function (data) {
//   if (data.type === 'bar') {
//     data.element.attr({
//       style: 'stroke-width: 30px'
//     });
//   }
// });
new Chartist.Bar(
  '#chart5',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [10, 20, 15, 5]
  },
  {
    distributeSeries: true,
    showLabel: false,
    axisY: {
      onlyInteger: true,
      labelInterpolationFnc: function (value) {
        return '$' + value + 'k';
      }
    }
  }
);
new Chartist.Line(
  '#chart6',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [[2500, 1000, 2800, 2000]]
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
new Chartist.Line(
  '#chart3',
  {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [[2500, 1000, 2800, 2000]]
  },
  {
    fullWidth: true,
    labelOffset: 550,
    height: '60%',
    axisY: {
      onlyInteger: true,
      type: Chartist.FixedScaleAxis,
      ticks: [0, 1000, 2000, 3000, 4000, 5000],
      low: 0
    }
  }
);

function createD3Donut(
  chartID,
  dataset,
  width,
  height,
  strokeWidth,
  outerRadiusArc1,
  innerRadiusArc,
  translateX,
  translateY,
  text
) {
  if ($('chartID')) {
    // Init donut chart
    // width 217
    // height 200
    radius = Math.min(width, height) / 2;

    var color = d3.scale.category20();

    var pie = d3.layout
      .pie()
      .sort(null)
      .value(function (d) {
        return d.value;
      });

    // 30 ex val
    var arc1 = d3.svg
      .arc()
      .innerRadius(radius)
      .outerRadius(radius - outerRadiusArc1);

    //30 ex val
    var arc = d3.svg
      .arc()
      .innerRadius(radius - innerRadiusArc)
      .outerRadius(radius - 10);

    // 100 120 ex val
    var svg = d3
      .select(chartID)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + translateX + ',' + translateY + ')');

    var path = svg
      .selectAll('.background')
      .data(
        pie([
          {
            color: '#F5F6FC',
            value: 1
          }
        ])
      )
      .enter()
      .append('path')
      .attr('class', 'background')
      .attr('fill', function (d, i) {
        return d.data.color;
      })
      .attr('d', arc1);

    var path = svg
      .selectAll('.foreground')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('class', 'foreground')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', strokeWidth)
      .attr('stroke', 'none')
      .attr('stroke', function (d, i) {
        return d.data.color;
      })
      .attr('fill', 'none')
      .attr('d', arc);

    svg
      .append('text')
      .text(text)
      .attr('class', 'units-label')
      .attr('x', -43)
      .attr('y', radius / 12);
  }
}

(function () {
  $(document).ready(function () {
    createD3Donut(
      '#chart2',
      [
        {
          color: '#BFA660',
          value: 11
        },
        {
          color: '#846F35',
          value: 20
        },
        {
          color: '#292929',
          value: 12
        },
        {
          color: 'transparent',
          value: 22
        }
      ],
      210,
      200,
      30,
      30,
      30,
      100,
      120
    );
    createD3Donut(
      '#chart7',
      [
        {
          color: '#BFA660',
          value: 11
        },
        {
          color: '#846F35',
          value: 20
        },
        {
          color: '#292929',
          value: 12
        },
        {
          color: 'transparent',
          value: 22
        }
      ],
      250,
      240,
      10,
      10,
      5,
      130,
      120
    );
    createD3Donut(
      '#chart8',
      [
        {
          color: '#BFA660',
          value: 46
        },

        {
          color: 'transparent',
          value: 22
        }
      ],
      160,
      150,
      10,
      10,
      5,
      80,
      75
    );
    createD3Donut(
      '#chart9',
      [
        {
          color: '#846F35',
          value: 74
        },

        {
          color: 'transparent',
          value: 22
        }
      ],
      160,
      150,
      10,
      10,
      5,
      80,
      75
    );
    createD3Donut(
      '#chart10',
      [
        {
          color: '#292929',
          value: 14
        },

        {
          color: 'transparent',
          value: 22
        }
      ],
      160,
      150,
      10,
      10,
      5,
      80,
      75
    );
    new Chartist.Bar(
      '#chart12',
      {
        labels: ['W1', 'W2', 'W3', 'W4'],
        series: [
          [5, 4, 3, 5],
          [3, 2, 6, 5]
        ]
      },
      {
        fullWidth: true,
        axisX: {
          // On the x-axis start means top and end means bottom
          position: 'end'
        },
        axisY: {
          // On the y-axis start means left and end means right
          position: 'end'
        }
      }
    );
    new Chartist.Bar(
      '#chart13',
      {
        labels: [
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM',
          '6AM'
        ],
        series: [
          [5, 4, 3, 7, 3, 4, 7, 2, 6, 3, 4, 6, 2, 7],
          [3, 2, 7, 5, 6, 5, 6, 4, 2, 1, 3, 5, 6, 3]
        ]
      },
      {
        axisX: {
          // On the x-axis start means top and end means bottom
          position: 'end'
        },
        axisY: {
          // On the y-axis start means left and end means right
          position: 'end'
        }
      }
    );
    $('#chart3 line, #chart6 line')
      .mouseenter(function () {
        let x = +$(this).attr('x1') - 20;
        $('.chart-week-data').css('left', x + 'px');
        $('.chart-week-data').css('display', 'flex');
      })
      .mouseleave(function () {
        $('.chart-week-data').css('display', 'none');
      });
  });
})();
