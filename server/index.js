const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
var session = require('express-session');
const passport = require("passport");
const userModel42 = require("./Models/userModel42")

const app = express();
require('dotenv').config();

var FortyTwoStrategy = require('passport-42').Strategy;


app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000', // İstemciden gelen köken
    credentials: true, // Kimlik bilgileri ile isteklerin kabul edilmesi
  };
app.use(cors(corsOptions));
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use(session({ resave: false, saveUninitialized: false, secret: '!terceS' }));


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new FortyTwoStrategy({
    clientID: "u-s4t2ud-828939c420b4651d7f729101056012dee63bd1880aef13108a252cab3c3d3ea6",
    clientSecret: "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",
    callbackURL: 'http://localhost:5001/api/users/42/return'
},
    async (accessToken, refreshToken, profile, cb) => {
        cb(null,profile);
        const currentUser = await userModel42.findOne({ username: profile.username });
        if (currentUser) {
            cb(null,profile)
        } else {
            const newUser = await userModel42.create({
                username: profile.username,
                displayName: profile.displayName,
            });
            cb(null,profile);
        }
    }));


app.get('/', (req, res) => {
    res.send(`Hoşegeldin`);
});

app.get('/404', (req, res) => {
    // JSON olarak yanıt gönder
    const response = { message: 'Hoşgeldin' };
    res.json(response);
  });

app.get("/api/users/42", passport.authenticate('42'));
app.get("/api/users/42/return", passport.authenticate('42', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect("http://localhost:3000/MainPage");
    });

app.get("/api/ali",(req,res) => {
    res.send(req.user);
});

const port = process.env.PORT || 5001;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("mongodb connected"); })
    .catch((error) => console.log("error", error.message));