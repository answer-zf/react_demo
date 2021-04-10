import React, { Component } from 'react';
import { Input, Button } from 'antd';
import kFormCreate from '../components/kFormCreate';

const nameRules = { required: true, message: 'pl. input name' };
const pwdRules = { required: true, message: 'pl. input passwords' };

@kFormCreate
class MyFormPage extends Component {
	submit = () => {
		const { getFieldsValue, getFieldValue, validateFields } = this.props;
		console.log('submit', getFieldsValue());
		console.log('submit', getFieldValue('name'));
		validateFields((err, values) => {
			if (err) {
				console.log('err', err);
			} else {
				console.log('values', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props;
		console.log('props', this.props);
		// console.log('getFieldDecorator', getFieldDecorator);

		return (
			<div>
				<h3>MyFormPage</h3>
				{getFieldDecorator('name', { rules: [nameRules] })(
					<Input type="text" placeholder="pl. input u name"></Input>
				)}
				{getFieldDecorator('password', { rules: [pwdRules] })(
					<Input type="password" placeholder="pl. input u pwd"></Input>
				)}

				<Button onClick={this.submit}> submit </Button>
			</div>
		);
	}
}

export default MyFormPage;
