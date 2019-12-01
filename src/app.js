"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var users_1 = require("./users/users");
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
var port = 3000;
app.set('views', path_1.default.join(__dirname, './views'));
app.set('view engine', 'ejs');
console.log(" ======================= ");
dotenv_1.default.config();
console.log("Your port is " + process.env.NODE_ENV); // 8626
app.get('/', function (req, res) {
    // The render method takes the name of the HTML 
    // page to be rendered as input 
    // This page should be in the views folder 
    // in the root directory. 
    var data = {
        name: 'John',
        hobbies: ['playing football', 'playing chess', 'cycling']
    };
    res.render('home', { data: data });
});
app.get("/test", function (req, res) {
    res.json({ username: 'Krish' });
});
app.get("/users", function (req, res) {
    res.json({ username: 'Another user' });
});
// app.get('/', (req, res) => {
//     res.send('The sedulous hyena ate the antelope!');
// });
app.use(express_1.default.static(__dirname + '/dist/payment-project'));
app.use(function (req, res) {
    res.sendFile(__dirname + '/dist/payment-project/index.html');
});
app.listen(port, function (err) {
    console.log("test", users_1.Users.getUsers());
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
