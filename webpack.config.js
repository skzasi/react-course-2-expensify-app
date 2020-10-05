// entry point -> output 

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { config } = require('process');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
}
else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

console.log(__dirname);

module.exports = (env) => {
    const CSSExtract = new ExtractTextPlugin('styles.css');
    // console.log('env', env);
    const isProd = env === 'prod';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader', 
                            options: {
                                sourceMap: true
                        } 
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
              'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
              'process.env.FIREBASE_Auth_Domain': JSON.stringify(process.env.FIREBASE_Auth_Domain),
              'process.env.FIREBASE_Database_URL': JSON.stringify(process.env.FIREBASE_Database_URL),
              'process.env.FIREBASE_Project_ID': JSON.stringify(process.env.FIREBASE_Project_ID),
              'process.env.FIREBASE_Storage_Bucket': JSON.stringify(process.env.FIREBASE_Storage_Bucket),
              'process.env.FIREBASE_Messaging_Sender_ID': JSON.stringify(process.env.FIREBASE_Messaging_Sender_ID),
              'process.env.FIREBASE_App_ID': JSON.stringify(process.env.FIREBASE_App_ID),
              'process.env.FIREBASE_Measurement_ID': JSON.stringify(process.env.FIREBASE_Measurement_ID)
            })
        ],
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
}

// module.exports = 
