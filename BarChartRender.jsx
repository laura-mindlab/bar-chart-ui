import React from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'
import * as d3 from 'd3'
import { interpolateLab } from 'd3-interpolate'

import { Axis } from './Axis.jsx'
import { Bars } from './Bars.jsx'
import { Legend } from './Legend.jsx'

//Let's build a bar chart using D3 and React

const settings = {
	color : '#789',

}




export class BarChartRender extends React.Component {
	constructor(props) {
		super(props)

		this.xScale = d3.scaleBand()
		this.yScale = d3.scaleLinear()
		this.innerXScale = d3.scaleBand()
		this.yScale2 = d3.scaleLinear()

	}



	render() {

		const data = this.props.data 
		console.log(data)

		const margins = {top: 50, right: 10, bottom: 50, left: 30};

		const svgDimensions = {width: 800, height: 500} //we actually dont wanna replace w props, but could do
		const maxValue = Math.max(data.map( d => d.age ))

		const keys = ['name','age','height','build','rating','color'] //wanna slice the data so that we have the first line of csv essentially


		const xScale = this.xScale
			.padding(0.7)
		    .domain(data.map(d=> d.name))
		    .range([margins.left, svgDimensions.width - margins.right])

		//need to generalise this so that we can specify what variable is plotted
		const yScale = this.yScale
			.domain([0, d3.max(data, (d)=>  d.age )]).nice()
			.range([svgDimensions.height - margins.bottom, margins.top])

		const yScale2 = this.yScale2
			.domain([0, d3.max(data, (d)=>  d.height )]).nice()
			.range([svgDimensions.height - margins.bottom, margins.top])

		//now write something that counts how many ys in the legend, 
		//and write a legend

		return (
			<div id="bar-chart-render">
				<svg id="bar-chart-svg"
					width={svgDimensions.width} 
					height={svgDimensions.height}>
					<Axis 
						orient={'Bottom'}
						scale={xScale} 
						translate={`translate(0, ${svgDimensions.height - margins.bottom})`}
						// tickSize={svgDimensions.height - margins.top - margins.bottom}
					 />
					<Axis 
						orient={'Left'}
						scale={yScale} 
						translate={`translate(${margins.left}, 0)`}
						// tickSize={svgDimensions.width - margins.left - margins.right}
					 />
					<Bars
					 	scales={{ xScale, yScale, yScale2 }}
					 	margins={margins}
					 	data={this.props.data}
					 	maxValue={maxValue}
					 	svgDimensions={svgDimensions}
					 	defaultColor={'none'}
					 	errors={false}
					 />
					 <Legend 
					 	margins={margins}
					 	data={this.props.data}
					 	svgDimensions={svgDimensions}
					 />
				</svg>
			</div>
		)
	}

}

