import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';

const nameRules = { required: true, message: 'pl. input name' };
const pwdRules = { required: true, message: 'pl. input passwords' };

@Form.create({})
class FormPageCreate extends Component {
	submit = () => {
		console.log('submit');
		const { getFieldsValue, getFieldValue, validateFields } = this.props.form;

		validateFields((err, values) => {
			if (err) {
				console.log('err', err);
			} else {
				console.log('values', values);
			}
		});
		console.log('----', getFieldsValue(), getFieldValue('name'));
	};
	render() {
		console.log(this.props);
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<h3>FormPage</h3>
				<Form>
					<Form.Item>
						{getFieldDecorator('name', { rules: [nameRules] })(
							<Input placeholder="pl. input name" />
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', { rules: [pwdRules] })(
							<Input type="password" placeholder="pl. input psw" />
						)}
					</Form.Item>
					<Button type="primary" onClick={this.submit}>
						submit
					</Button>
				</Form>
			</div>
		);
	}
}

// 4.0 弃用 create() 后，采用的策略
// class FormPageCreate extends Component {
// 	submit = (value) => {
// 		console.log('formData:', this.refs.zfForm); =》 this.props.form
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<h3>FormPage</h3>
// 				<Form ref="zfForm">
// 					<Form.Item
// 						name="username"
// 						rules={[{ required: true, message: 'pl. input name' }]}
// 					>
// 						<Input placeholder="pl. input name" />
// 					</Form.Item>
// 					<Form.Item
// 						name="password"
// 						rules={[{ required: true, message: 'pl. input psw' }]}
// 					>
// 						<Input type="password" placeholder="pl. input psw" />
// 					</Form.Item>
// 					<Button type="primary" onClick={this.submit}>
// 						submit
// 					</Button>
// 				</Form>
// 			</div>
// 		);
// 	}
// }

export default FormPageCreate;
