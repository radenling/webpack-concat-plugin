import ConcatPlugin from '../../../index';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './index.js',
    plugins: [
        new HtmlWebpackPlugin({ template: './index.ejs' }),
        new ConcatPlugin({
            uglify: true,
            sourceMap: true,
            name: 'file',
            fileName: '[name].[hash].js',
            injectType: 'none',
            filesToConcat: ['../../fixtures/a.js', '../../fixtures/b.js']
        }),
    ],
};
