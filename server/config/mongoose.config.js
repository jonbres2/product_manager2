const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to database"))
    .catch(err => console.log("Error connection to database", err));