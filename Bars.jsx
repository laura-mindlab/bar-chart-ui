import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from'd3'
import './bar-style.scss'


export class Bars extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { scales, margins, data, svgDimensions } = this.props
		const { xScale, yScale, yScale2 } = scales
		const { height } = svgDimensions
		const keys = ['name','age','height','build','rating','color']
		//can define x position of error bars

		const label = 'name'
		const values = ['age','height']


		//define innerData as function of data, maybe unnecessary
		const innerData = data.map( (d) =>
			keys.map( (key)=> {
				return {
					key: key,
					value: d[key]
				};
			})
		)

		console.log(innerData)
		console.log(data)

		const transX = 30

		//wanna use bars to define where each axis will be centred
		const bars1 = (
			data.map(datum =>

				<rect
					key={datum.name}
					x={xScale(datum.name)}
					y={yScale(datum.age)}
					height={height - margins.bottom - scales.yScale(datum.age)}
					width={xScale.bandwidth()}
					className='bar'
					fill={datum.color || this.props.defaultColor }
					onClick={()=> {
						console.log(datum.name)
					}}
					transform={`translate( -${0.5*(2-1)*transX} , 0)`}
				/>
		))


		//error is that yScale2 is returning null when applied to heights - 'FT' SUFFIX
		//need to sort out appropriate (relative) between bars of each 'name'
		//eventually split data orthogonally, datum one after the other 

		const bars2 = (
			data.map(datum =>

				<rect
					key={datum.name}
					x={xScale(datum.name)}
					y={yScale2(datum.height)}
					height={height - margins.bottom - scales.yScale2(datum.height)}
					width={xScale.bandwidth()}
					className='bar'
					fill={datum.color || this.props.defaultColor }
					onClick={()=> {
						console.log(datum.name)
					}}
					transform={`translate( -${0.5*(2-1)*transX} , 0)`}
				/>
		))



		const error_lines = (
			data.map((d,i) =>
				<line
					key={d.name}
					className='error-line'
					stroke='black'
					x1={((xScale.bandwidth())*0.5) + xScale(d.name)}
					x2={((xScale.bandwidth())*0.5) + xScale(d.name)}
					y1={yScale(d.age + (d.age/50))}
					y2={yScale(d.age - (d.age/50))}
				/>
		))


//here somehow iterate over each bar to write the rest of the bars in

//we dont want actual bars we want like a g

		return (
			<g>
				<g>{bars1}</g> 
				<g transform = {`translate( ${transX} )`}>{bars2}</g>
				{  this.props.errors && <g>{error_lines}</g>  }
			</g>	
		)
	}
}


				// <g>
				// 	{
				// 		_.map(values, v=> {

				// 			const v = 'age'
				// 			var yVal = datum[v]

				// 			return <rect

				// 			/>
				// 		})
				// 	}

				// </g>



				