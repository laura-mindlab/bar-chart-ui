import React from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'


//this component renders the axis, whilst packing the props in objects in the axes component



export class Axis extends React.Component {
	componentDidMount() {
		this.renderAxis()
	}

	componentDidUpdate() {
		this.renderAxis()
	}

	renderAxis = () => {
		const axisType = `axis${this.props.orient}` 
		const axis = d3Axis[axisType]()
			.scale(this.props.scale)
			// .tickSize(-this.props.tickSize)
			.tickPadding([12])
			// .ticks([4])

		d3Select(this.axisElement).call(axis)
	}

	render() {
		return (
			<g
				className={`axis axis-${this.props.orient}`}
				ref = {(el) => { this.axisElement = el; }}
				transform = {this.props.translate}
			/>
		)
	}
}
