import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

import URLite from './models/shortUrls.js';


const app = express();
dotenv.config();

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;


mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


//Middlewear
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.get('/', async (req, res) => {
  try {
    const shortUrls = await URLite.find();
    res.json(shortUrls);
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})


app.post('/urlite', async (req, res) => {
  try {
    await URLite.create({ full: req.body.full });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


app.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrls = await URLite.findOne({ short: req.params.shortUrl });

    if(!shortUrls) return res.sendStatus(404);

    shortUrls.clicks++;
    shortUrls.save();
    res.redirect(shortUrls.full);

  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})


app.delete('/urlite/:id', async (req, res) => {
  try {
    await URLite.findByIdAndDelete(req.params.id);
    res.status(200).send('URL Deleted')
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})



app.listen(port, (err) => {
  if (err) {
    console.error('Server connection error:', err);
  } else {
    console.log(`Server started on port ${port}`);
  }
});