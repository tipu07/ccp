import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const options = {
	chart: {
		type: "column",
		height: 260 + "rem",
	},
	title: {
		text: "",
	},
	xAxis: {
		categories: ["Mar", "May", "Aug", "Nov"],
	},
	yAxis: {
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
			data: [4, 4, 2, 1],
			color: "#ecf0f1",
		},
		{
			data: [1, 2, 3, 4],
			color: "#fe6795",
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
