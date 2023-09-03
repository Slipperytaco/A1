import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import './chart_styling.css';

export const ChartComponent = props => {
	const {
		data,
		colors: {
			backgroundColor = 'grey',
			lineColor = '#2962FF',
			textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = props;

	const chartContainerRef = useRef();
	const [tooltipContent, setTooltipContent] = useState(null);

	useEffect(() => {
		//console.log('useEffect is running');
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
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
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			});
			// Check if chart is available before using addCrosshair
			if (chart) {
				chart.timeScale().fitContent();
		
				const areaSeries = chart.addAreaSeries({ 
					lineColor, 
					topColor: areaTopColor, 
					bottomColor: areaBottomColor 
				});
				areaSeries.setData(data);
		
				const tooltipSeries = chart.addLineSeries({
				lineColor: 'transparent',
				lineWidth: 1,
				priceLineVisible: false,
				lastValueVisible: false,
				});
				tooltipSeries.setData(data);
				const tooltipWidth = 100;
		


			chart.subscribeCrosshairMove(param => {
				//console.log('subscribeCrosshairMove is running', param);
				if (param.time) {
					//const tooltipEl = tooltipContainerRef.current;
					const price = param.seriesPrices ? param.seriesPrices.get(tooltipSeries) : undefined;

					if (price !== undefined) { //check is price is defined
						setTooltipContent(
							`<div>Time: ${param.time}</div><div>Price: ${price.toFixed(2)}</div>`
						);
					} else {
						setTooltipContent(null);
						//tooltipEl.style.display = 'none';
					}
				}
			});

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
				chart.remove();
			};
		};
	}, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

	return (
		<div>
			<div ref={chartContainerRef}></div>
			{tooltipContent && (
				<div className="tooltip" style={{ left: '0px', top: '0px' }}>
					{tooltipContent}
				</div>
			)}
		</div>
		//<div ref={tooltipContainerRef} className="tooltip" style={{ display: 'none' }}></div>
	);
};


//We will be importing transaction data. 
//if value is not set at each tick 
const initialData = [
  { time: '2018-12-03', value: 27.02 },
  { time: '2018-12-04', value: 27.02 }, 
  { time: '2018-12-05', value: 27.02 }, // see here, inbetween these points bar is straight - which would indicate no change in value
  { time: '2018-12-06', value: 29.69 }, // whitespace 
  { time: '2018-12-07' }, // whitespace
  { time: '2018-12-08', value: 23.92 },
  { time: '2018-12-13', value: 30.74 },
];




export default function Chart(props) {
	return (
		<div>
			<ChartComponent {...props} data={initialData}></ChartComponent>
		</div>
	);
}