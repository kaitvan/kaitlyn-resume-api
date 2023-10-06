const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const connectionString = `mongodb+srv://kaitvan:${process.env.API_PASSWORD}@cluster0.ufjxmfr.mongodb.net/resume?retryWrites=true&w=majority`;
mongoose.connect(connectionString);

module.exports = mongoose.connection;
