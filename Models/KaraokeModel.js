import mongoose from "mongoose";

const KaraokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
    }, 
    karaokeBy :{
        type: String
    },
    genre: {
        type: String,
        enum: ["Bollywood", "Punjabi", "English"],
        default: "Bollywood"
    },
    karaokeCoverPhoto: {
        type: {},
    },
    track: {
        type: {},
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Karaoke', KaraokeSchema);