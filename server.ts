import app from "./src/app";
import { configuration } from "./src/config/Config";
import sequelizeMysqlConnect from "./src/config/databases/DB_MySql";

const startServer = async () => {
  const port = configuration.server_port || 3000;

  // Connect database
  await sequelizeMysqlConnect();
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();
