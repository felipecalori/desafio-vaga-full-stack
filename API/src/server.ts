import app from "./app";
import { AppDataSource } from "./data-source"; // Linha modificada

async function init() {
  const PORT = process.env.PORT || 8000;

  await AppDataSource.initialize(); // Linha modificada

  app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
}

init();
