import mongoose from "mongoose";


const CustomerData = mongoose.Schema({
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
    customerPhoto: {
        type: String,
        default: "avada.png",
    },
    status: {
        type: Boolean,
        default: true,
    }
});


// export default data for database
export default mongoose.model("CustomerData", CustomerData);