const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const authRouter = require('./controllers/authController'); // Registration and login controller
const userRouter = require('./routes/users'); // User update and delete controller
const postRouter = require('./routes/posts');
const catRouter = require('./routes/categories');
const multer = require('multer');
dotenv.config();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Successfully connected to the database.'))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, "drip.png");
    }
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use('/api/auth', authRouter); // We register and login on this route.
app.use('/api/posts', postRouter); // Post route where we manipulate our posts.
app.use('/api/categories', catRouter);
app.use('/api/users', userRouter); // We update or delete our user accounts on this route.

app.listen(port, () => console.log(`Example app listening on port ${port}!`));