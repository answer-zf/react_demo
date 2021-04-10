const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy,
} = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		// antd按需加载
		libraryName: 'antd',
		libraryDirectory: 'es',
		// 加载 less
		style: true,
	}),
	// 定制主题配置
	addLessLoader({
		lessOptions: {
			// modifyVars: { '@primary-color': 'red' },
			javascriptEnabled: true,
		},
	}),
	// 配置装饰器
	addDecoratorsLegacy()
);
