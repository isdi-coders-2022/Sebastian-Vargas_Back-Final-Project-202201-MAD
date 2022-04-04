import mongoose from 'mongoose';

const modelName = 'User';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },

            number: { type: Number, required: true, default: 0 },
        },
    ],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

let User;

if (mongoose.default.models[modelName]) {
    User = mongoose.model(modelName, userSchema);
} else {
    User = mongoose.model(modelName, userSchema);
}

export default User;
