import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class Dialog extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		const doc = window.document;
		this.node = doc.createElement('div');
		doc.body.appendChild(this.node);
	}
	componentWillUnmount() {
		window.document.body.removeChild(this.node);
	}
	render() {
		return createPortal(
			<div className="dialog">
				<h3>Dialog</h3>
				{this.props.children}
			</div>,
			// 容器
			this.node
		);
	}
}
