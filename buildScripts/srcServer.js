import path    from 'path';
import open    from 'open';
import express from 'express';
import webpack from 'webpack'
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler=webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  publicPath: config.output.publicPath
}));

app.get('/',function (request,response) {
  response.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,(err)=> {
  if(err) {
    console.error(err);
  }
  else {
    open(`http://localhost:${port}`);
  }

});
