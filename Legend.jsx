//Legend component
import React from 'react';



export class Legend extends React.Component {

	render () {
		const { margins, data, svgDimensions } = this.props
		const { width, height } = svgDimensions

		const legend = 
			<rect 
				x={width - 110}
				y={10}
				width={100}
				height={50}
				fill='none'
				stroke='black'
			>
			</rect>

		return (
			<g className="legend">
				{legend}
			</g>
		)
	}
}