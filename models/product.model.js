import mongoose from 'mongoose';

const modelName = 'Product';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String },
    subCategory: { type: String },
    number: { type: Number, required: true, default: 0 },
});

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._v;
        delete returnedObject.password;
    },
});

let Product;

if (mongoose.default.models[modelName]) {
    Product = mongoose.model(modelName, productSchema);
} else {
    Product = mongoose.model(modelName, productSchema);
}

export default Product;
