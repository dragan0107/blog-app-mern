const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const authRouter = require('./controllers/authController');
const userRouter = require('./routes/users');
dotenv.config();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Successfully connected to the database.'))
    .catch((err) => console.log(err));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));