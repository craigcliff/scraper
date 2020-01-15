const mongoose = require(`mongoose`);
const { MONGOOSE_DB, MONGOOSE_CONNECTION } = require("./variableEnv");

const CONNECTION =
  process.env.MONGOOSE_CONNECTION || `mongodb://localhost/${MONGOOSE_DB}`;
mongoose.connect(`mongodb://localhost/${MONGOOSE_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
module.exports = db;
