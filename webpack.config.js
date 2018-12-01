const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// process.env.NODE_ENV 

const isProduction = true;//process.env.NODE_ENV === 'production';

const config = {
  entry: ["./src/applicationService.ts", "./src/app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".less"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      { 
        test: /\.less?$/, // .less and .css
        loader: [ 
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
            'css-loader', 
            'less-loader'
        ],
        exclude: /node_modules/
    },
    ]
  },
  plugins: isProduction ? [new MiniCssExtractPlugin()] : [],
  devtool: 'source-map',
};

module.exports = config;