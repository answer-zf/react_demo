import React, { Component } from 'react';

/**
 * @description HOC 是一个函数接收一个组件，返回一个新组件
 * @param {function / class} Cmp function / class 组件
 */
const foo = (Cmp) => (props) => {
	return (
		<div className="border">
			<Cmp {...props} />
		</div>
	);
};

const foo2 = (Cmp) => (props) => {
	return (
		<div className="greenBorder">
			<Cmp {...props} />
		</div>
	);
};

// function Child(props) {
// 	return <div>Child</div>;
// }

// const Foo = foo2(foo(foo(Child)));

// 使用装饰器
@foo2
@foo
@foo
class Child extends Component {
	state = {};
	render() {
		return <div>Child</div>;
	}
}

class HocPage extends Component {
	render() {
		return (
			<div>
				<h3>HocPage</h3>
				{/* <Foo /> */}
				<Child />
			</div>
		);
	}
}

export default HocPage;
