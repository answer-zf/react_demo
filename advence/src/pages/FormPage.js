import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';

export default class FormPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
		};
	}
	submit = () => {
		console.log('state', this.state);
	};
	render() {
		const { name, password } = this.state;
		return (
			<div>
				<h3>FormPage</h3>
				<Form>
					<Form.Item>
						<Input
							placeholder="pl. input name"
							value={name}
							onChange={(e) => {
								this.setState({ name: e.target.value });
							}}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="password"
							placeholder="pl. input psw"
							value={password}
							onChange={(e) => {
								this.setState({ password: e.target.value });
							}}
						/>
					</Form.Item>
					<Button type="primary" onClick={this.submit}>
						submit
					</Button>
				</Form>
			</div>
		);
	}
}
