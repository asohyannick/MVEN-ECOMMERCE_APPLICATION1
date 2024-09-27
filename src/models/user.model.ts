import mongoose, { CallbackError, Schema } from "mongoose";
import bcryptjs from 'bcryptjs';
import { UserInterface } from "../interfaces/user.interface";

const userSchema = new Schema<UserInterface>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

userSchema.pre<UserInterface>('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcryptjs.hash(this.password, 10);
        } catch (error) {
            return next(error as CallbackError); // Pass the error to the next middleware
        }
    }
    next(); // Proceed with saving the user
});

export default mongoose.model('User', userSchema);