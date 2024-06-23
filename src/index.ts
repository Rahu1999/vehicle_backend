import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { AppDataSource } from './data-source';
import driverRoutes from './routes/driver.routes'
import vehicleRoutes from './routes/vehicle.routes'
import transferRoutes from './routes/transfer.routes'
import assignRoutes from './routes/assigned-vehicle.routes'
import errorHandlingMiddleWare from './middlewares/error.handler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware to log HTTP requests
app.use(morgan('dev'));
// Middleware to enable CORS
app.use(cors());
app.use(express.json());

app.use('/drivers', driverRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/transfers', transferRoutes);
app.use('/assign-vehicles', assignRoutes);

app.use(errorHandlingMiddleWare);
app.use('*', (req, res) => {
  res.status(404).json({ status: 404, error: "Resource not found" });
});

// Initializing Datasource
AppDataSource.initialize()
  .then(() => {
    // Starting the Server
    console.log(`Database connected successfully!!`);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  })
  .catch((error: unknown) => console.log('error', error));
