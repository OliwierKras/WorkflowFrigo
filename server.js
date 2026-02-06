// server.js
import express from "express";
import alimentRoutes from "./router/router.js";  // adapte le chemin si besoin

const app = express();
const PORT = 3000;

app.use("/api", alimentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
