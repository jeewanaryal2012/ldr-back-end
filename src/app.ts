import express from 'express';
import path from 'path';
import { Users } from "./users/users";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

console.log(" ======================= ");
dotenv.config();
console.log(`Your port is ${process.env.NODE_ENV}`); // 8626

app.get('/', (req, res) => {

    // The render method takes the name of the HTML 
    // page to be rendered as input 
    // This page should be in the views folder 
    // in the root directory. 
    var data = {
        name: 'John',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }
    res.render('home', { data: data });

});

app.get("/test", (req, res) => {
    res.json({ username: 'Krish' });
});
app.get("/users", (req, res) => {
    res.json({ username: 'Another user' });
});
// app.get('/', (req, res) => {
//     res.send('The sedulous hyena ate the antelope!');
// });

app.use(express.static(__dirname + '/dist/payment-project'))
app.use(function (req, res) {
    res.sendFile(__dirname + '/dist/payment-project/index.html')
})

app.listen(port, err => {
    console.log("test", Users.getUsers());
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});