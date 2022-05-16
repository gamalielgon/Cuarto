const mongoose = require('mongoose');
mongoose.connect(
`mongodb+srv://Acertijo:Acertijo@cluster0.jfs9n.mongodb.net/?retryWrites=true&w=majority`,
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
});