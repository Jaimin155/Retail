import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        require: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        type: Boolean
    }
})
export default mongoose.model('Products', productSchema);