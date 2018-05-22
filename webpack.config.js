var path = require("path");

module.exports = {
    entry: "./src/pages/app.js",
    output: {
        path: path.join(__dirname, "./public/javascript"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }

        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(jpg|png|otf)$/,
            loader: "url?limit=8192"
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }]
    }
};