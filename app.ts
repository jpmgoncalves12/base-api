import cors from 'cors';
import express from 'express';
import router from './src/Routes/_Routes';

const app = express();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(options));
app.use(express.json());

app.use('/', router);

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Api started succes! Listening in port 8080!');
});
