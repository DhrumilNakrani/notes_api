const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", function(req, res) {
    res.send("Notes Saving Application");
})
mongoose.connect(process.env.MONGO_URL)
app.listen(PORT, () => {
    console.log("server started on port no. " + PORT);
});
