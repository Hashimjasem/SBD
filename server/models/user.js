import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    sir_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true });

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
export default User = model('user', userSchema);