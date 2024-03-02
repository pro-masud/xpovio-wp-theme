import mongoose from "mongoose";

const CustomerSahema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        enum: ['male', 'female', 'custom'],
    },
    cell: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    photos: {
        type: String,
        default: "avada.png",
    },
    status: {
        type: Boolean,
        default: true,
    }
})


export default mongoose.model("Customer", CustomerSahema);