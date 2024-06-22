import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Initializing Datasource
AppDataSource.initialize()
  .then(() => {
    // Starting the Server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  })
  .catch((error: unknown) => console.log('error', error));
