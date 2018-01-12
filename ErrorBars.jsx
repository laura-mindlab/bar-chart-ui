import React as 'react'
import * as d3 from 'd3'

export class ErrorBars extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		const error_lines = (
			data.map((d,i) =>
				<line
					className='error-line'
					x1={(i*.5)*xScale.step()}
					x2={(i*.5)*xScale.step()}
					y1={yScale(d.age + (d.age/50))}
					y2={yScale(d.age - (d.age/50))}
				/>
		return (
			<g>{error_lines}</g>
			)
	}
}