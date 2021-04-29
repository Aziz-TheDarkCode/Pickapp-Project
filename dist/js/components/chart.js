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
    showLabel: false,
    axisY: {
      onlyInteger: true
    }
  }
);
new Chartist.Line(
  '#chart6',
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
    // 3267 (100%)
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
      120,
      '$10.321'
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
