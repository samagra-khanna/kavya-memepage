const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const express_session = require('express-session');
const express_flash = require('express-flash');
const MongoDBSession = require('connect-mongodb-session')(express_session);
const bodyParser = require('body-parser');

const app = express();

const server = http.createServer(app);
server.listen(PORT);

mongoose.set('strictQuery', false);

const routes = require('./routes/routes');

app.use(express.urlencoded({ extended: true, limit: '5000mb', parameterLimit: 50000000 }));
app.use(express.json({ limit: '5000mb' }));
app.use(express.text({ limit: '2000mb' }));
app.use(bodyParser.json({ limit: "5000mb" }));
app.use(bodyParser.urlencoded({ limit: "5000mb", extended: true, parameterLimit: 50000000 }));
app.use(bodyParser.text({ limit: '2000mb' }));

app.use(express.static("public"));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const DBURI = process.env.DBURI;
mongoose.connect(DBURI)
    .then((result) => console.log("Database is connected..."))
    .catch((err) => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const sessionStorage = new MongoDBSession({
    uri: DBURI,
    collection: 'client-sessions',
});

app.use(express_session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStorage,
    cookie: { maxAge: 31556926000 },
}));

app.use(express_flash());
app.use(routes);

app.get('*', function (req, res) {
    res.status(404).render('404');
});
