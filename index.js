const express = require("express");
const app = express();
const port = process.env.PORT||5000;
const dbConnect = require("./dbConnect");
const itemsRoute = require("./routes/itemsRoute");
const userRoute = require("./routes/userRoute");
const billsRoute = require("./routes/billsRoute");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/items", itemsRoute);
app.use("/api/users", userRoute);
app.use("/api/bills/", billsRoute);
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
