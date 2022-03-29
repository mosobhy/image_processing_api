import express from 'express';
import routes from './routes/mainRoute';

const app = express();
const PORT =  5000;

app.use('/api', routes);

// bind the app to port 3000
app.listen(PORT, () => {
  console.log(`app is listening to http://localhost:${PORT}`);
});

export default app;
