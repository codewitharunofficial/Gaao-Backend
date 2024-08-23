import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('User', UserSchema);