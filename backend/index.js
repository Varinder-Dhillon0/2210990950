const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users")
const postsRoutes = require("./routes/posts")

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

console.log(process.env.TOKEN)

app.use(cors({
    allowedOrigin : process.env.ALLOWED_ORIGIN,
    credentials : true
}))


app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);

app.listen(5000, () =>{
    console.log("App started on port 5000");
})