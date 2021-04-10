import React, { Component } from 'react';

export default function kFormCreate(Cmp) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {};
			this.options = {};
		}

		handleChange = (e) => {
			let { name, value } = e.target;
			this.setState({ [name]: value });
		};

		getFieldDecorator = (field, option) => {
			this.options[field] = option;
			console.log(this.options);
			return (InputCmp) => {
				// 克隆
				return React.cloneElement(InputCmp, {
					name: field,
					value: this.state[field] || '',
					onChange: this.handleChange,
				});
			};
		};

		validateFields = (callback) => {
			// 校验错误信息
			const errors = {};
			const state = { ...this.state };
			for (const name in this.options) {
				if (state[name] === undefined) {
					errors[name] = 'errors';
				}
			}
			if (JSON.stringify(errors) === '{}') {
				// 信息合法
				callback(undefined, state);
			} else {
				callback(errors, state);
			}
		};

		render() {
			return (
				<div className="border">
					<Cmp
						getFieldDecorator={this.getFieldDecorator}
						getFieldsValue={() => ({ ...this.state })}
						getFieldValue={(field) => this.state[field]}
						validateFields={this.validateFields}
					/>
				</div>
			);
		}
	};
}
