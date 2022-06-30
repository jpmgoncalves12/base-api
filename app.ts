import express from 'express';
import router from './src/Routes/_Routes';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Api started succes! Listening in port 8080!');
});
