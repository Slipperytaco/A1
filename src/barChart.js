import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

document.body.style.position = 'relative';

var container = document.createElement('div');
document.body.appendChild(container);

var width = 600;
var height = 300;

var chart = createChart(container, {
  width: width,
  height: height,
  rightPriceScale: {
    scaleMargins: {
      top: 0.2,
      bottom: 0.2,
    },
    borderVisible: false,
  },
  timeScale: {
    borderVisible: false,
  },
  layout: {
    backgroundColor: '#ffffff',
    textColor: '#333',
  },
  grid: {
    horzLines: {
      color: '#eee',
    },
    vertLines: {
      color: '#ffffff',
    },
  },
});


export const ChartComponent = props => {
	const {
		data,
		colors: {
			backgroundColor = 'white',
			lineColor = '#2962FF',
			textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = props;

	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			var chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: 'solid', color: backgroundColor },
					textColor,
				},
                //autoSize: true,
				//width: chartContainerRef.current.clientWidth,
				height: 300,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

const initialData1 = [
    { time: '2022-11-01', value: 0.28 },
    { time: '2022-12-23', value: 31.11 },
    { time: '2022-12-24', value: 17.11 },
    { time: '2022-12-27', value: 150.11 },
];

const initialData = [
    { time: '2018-12-03', value: 27.02 },
    { time: '2018-12-04', value: 27.02 }, // whitespace
    { time: '2018-12-05' }, // whitespace
    { time: '2018-12-06' }, // whitespace
    { time: '2018-12-07' }, // whitespace
    { time: '2018-12-08', value: 23.92 },
    { time: '2018-12-13', value: 30.74 },
];

//initialData.update({ time: '2019-01-01', value: 20 });

export default function Chart1(props) {
	return (
		<ChartComponent {...props} data={initialData}></ChartComponent>
	);
}