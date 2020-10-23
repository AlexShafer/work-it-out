const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});