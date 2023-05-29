const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://lagikerja:lagikerja123@ac-yrrlk2r-shard-00-00.nwwfs2x.mongodb.net:27017,ac-yrrlk2r-shard-00-01.nwwfs2x.mongodb.net:27017,ac-yrrlk2r-shard-00-02.nwwfs2x.mongodb.net:27017/?replicaSet=atlas-lot7dq-shard-0&ssl=true&authSource=admin`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;