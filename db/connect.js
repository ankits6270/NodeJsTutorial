const mongoose = require('mongoose');

const connectionString = "mongodb+srv://ankits6270:1234@cluster0.axnhicp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString);