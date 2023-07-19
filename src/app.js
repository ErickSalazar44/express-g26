const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const handlebars = require("express-handlebars"); // handlebars config

const app = express();

// Middlewares
app.use(express.json());
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);
app.use(cors());

app.use(express.static("src"));

app.use(express.static('public'));

app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "https: data:"],
        },
    })
);

// handlebars config
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.engine(
    "handlebars",
    handlebars.engine({
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "index",
    })
);

app.use("/", router);

module.exports = app;
