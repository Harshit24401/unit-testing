const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.TEST_MONGODB_URI;
console.log(url);

mongoose.set("strictQuery", false);
mongoose.connect(url).then(() => {
  const db = mongoose.connection;
  console.log(db);
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  });

  const Note = mongoose.model("Note", noteSchema);

  const note = new Note({
    content: "HTML is easy",
    important: true,
  });

  note.save().then((result) => {
    console.log("note saved!");
  });

  const note2 = new Note({
    content: "Huh",
    important: false,
  });

  note2.save().then((result) => {
    console.log("saved");
  });
});
