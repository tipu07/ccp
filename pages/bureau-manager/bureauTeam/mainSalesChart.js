import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const options = {
	chart: {
		type: "spline",
		height: 300 + "rem",
		scrollablePlotArea: {
			// minWidth: 600,
			scrollPositionX: 1,
		},
	},
	title: {
		text: "",
		align: "left",
	},
	subtitle: {
		text: "",
		align: "left",
	},
	xAxis: {
		type: "datetime",
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		/* labels: {
			overflow: "justify",
		}, */
	},
	yAxis: {
		title: {
			text: "",
		},
		minorGridLineWidth: 0,
		gridLineWidth: 0,
		alternateGridColor: null,
	},
	tooltip: {
		valueSuffix: " m/s",
	},
	plotOptions: {
		spline: {
			lineWidth: 2,
			states: {
				hover: {
					lineWidth: 3,
				},
			},
			/* marker: {
				enabled: false,
			}, */
			// pointInterval: 3600000, // one hour
			// pointStart: Date.UTC(2022, 5, 13, 0, 0, 0),
			marker: {
				radius: 5,
				enabled: true,
				lineColor: "#fff",
				lineWidth: 3,
			},
		},
	},
	legend: {
		enabled: false,
	},
	series: [
		{
			name: "",
			data: [4.5, 5, 3.8, 2.7, 3.1, 2.6, 3.3, 3.8, 4.1, 1, 3.8, 4.2],
			color: "#1ad598",
		},
	],
	navigation: {
		menuItemStyle: {
			fontSize: "1rem",
		},
	},

	/* xAxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	},
	yAxis: {
		visible: false,
		min: 0,
		title: {
			text: "",
		},
	},
	tooltip: {
		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
		shared: true,
	},
	plotOptions: {
		column: {
			stacking: "percent",
		},
	},
	legend: {
		enabled: false,
	},
	series: [
		{
			data: [4, 4, 2, 1, 6, 2, 8, 1, 3, 5, 2, 7],
			color: "#ecf0f1",
		},
		{
			data: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4],
			color: "#3A36DB",
		},
	], */
}

export default function MainSalesChart() {
	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	)
}
