import app from './src/server';

const isProduction = process.env.API_ENV === 'production';
const port = isProduction ? process.env.PORT : 8000;

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
