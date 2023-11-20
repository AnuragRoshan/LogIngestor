const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const URL = "mongodb+srv://anurag:anurag@nextjs.rzvwodg.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(URL,);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
        console.log("Connected to Database");
    });
} catch (error) {
    console.error("Error while connecting to the database:", error);
}