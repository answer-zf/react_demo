import React, { Component } from 'react';
import Dialog from '../components/Dialog';

class DialogPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDialog: false,
		};
	}
	render() {
		const { showDialog } = this.state;
		return (
			<div>
				<h3>DialogPage</h3>
				<button
					type="default"
					onClick={() => {
						this.setState({ showDialog: !showDialog });
					}}
				>
					TOGGLE
				</button>
				{showDialog && (
					<Dialog>
						<p>this is text</p>
					</Dialog>
				)}
			</div>
		);
	}
}

export default DialogPage;
