import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const webpackPaths = {
  srcPath: path.join(__dirname, "./src"),
  distPath: path.join(__dirname, "./dist"),
};

const config: webpack.Configuration = {
  mode: "development",

  entry: [path.join(webpackPaths.srcPath, "index.tsx")],

  output: {
    path: webpackPaths.distPath,
    publicPath: "/",
    filename: "[name].js",
    library: {
      type: "umd",
    },
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(webpackPaths.srcPath, "index.html"),
    }),
  ],
};

export default config;
