module.exports = {
	env: {
		NODE_ENV: '"production"',
	},
	defineConstants: {},
	// 配置 terser 工具以压缩 JS 代码。
	// 配置项同 https://github.com/terser/terser#minify-options
	terser: {
		enable: true,
	},
	mini: {},
	h5: {
		/**
		 * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
		 * 参考代码如下：
		 * webpackChain (chain) {
		 *   chain.plugin('analyzer')
		 *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
		 * }
		 */
	},
}
