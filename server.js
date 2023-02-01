import { config } from "dotenv";
config();
import { createServer } from "http";
import { connect } from "mongoose";
import app from './app.js';
const PORT = process.env.PORT || 3000;
(async () => {
  await connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connection established");
      const server = createServer(app);
      server.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))
    })
    .catch(error => console.log(error))
})()
