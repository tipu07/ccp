import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const options = {
	chart: {
		type: "column",
		height: 200 + "rem",
	},
	title: {
		text: "",
	},
	xAxis: {
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
	],
}

export default function MainBarChart() {
	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	)
}
