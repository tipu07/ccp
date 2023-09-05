import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const options = {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: "pie",
		height: 240 + "rem",
	},
	title: {
		text: "",
	},
	tooltip: {
		pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
	},
	accessibility: {
		point: {
			valueSuffix: "%",
		},
	},
	/* legend: {
		align: "right",
		verticalAlign: "middle",
		layout: "vertical",
	}, */
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: "pointer",
			dataLabels: {
				enabled: false,
			},
			showInLegend: true,
		},
	},
	series: [
		{
			name: "",
			innerSize: "80%",
			colorByPoint: true,
			data: [
				{
					name: "Dispute Item",
					y: 74.77,
					color: "#7ec67f",
				},
				{
					name: "Dispute Item",
					y: 12.82,
					color: "#fddb65",
				},
			],
		},
	],
}

export default function MainPieChart() {
	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	)
}
