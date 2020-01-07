const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})


adminSchema.pre('save', async function (next) {
    const admin = this;
    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
    next();
});

adminSchema.methods.generateAuthToken = async function() {
    const admin = this;
    const token = jwt.sign({_id: admin._id}, process.env.JWT_KEY);
    admin.tokens = admin.tokens.concat({token: token});
    await admin.save();
    return token;
}

adminSchema.statics.findByCredentials = async (email, password) => {
    const admin = await Admin.findOne({ email});
    if (!admin) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    return admin
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;