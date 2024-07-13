import mongoose from "mongoose";
import generateShortUrl from "../util/generateShortUrl.js";

const URLiteSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }, 
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => generateShortUrl(7)
  }, 
  clicks: {
    type: Number,
    default: 0
  }
})

const URLite = mongoose.model('ShortUrl', URLiteSchema);

export default URLite;