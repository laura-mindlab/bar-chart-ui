import React from 'react'
import * as d3 from 'd3'
import { Axis } from './BarChartUITest2.jsx'

//AXES component

export const Axes= ({ scales, margins, svgDimensions }) => {
	const { height, width } = svgDimensions

	const xProps = {
		orient: 'Bottom',
		scale: scales.xScale, 
		translate: `translate(0, ${height - margins.bottom})`,
		tickSize: height - margins.top - margins.bottom
	}

	const yProps = {
		orient: 'Left',
		scale: scales.yScale, 
		translate: `translate(${margins.left}, 0)`,
		tickSize: width - margins.left - margins.right
	}


	return (
		<g>
			<Axis {...xProps} /> 
			<Axis {...yProps} />

		</g>
	)
}
