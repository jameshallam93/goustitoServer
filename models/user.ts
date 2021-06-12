const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const deletePrivates = require("./deletePrivates");


const userSchema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.ObjectId
    }
});
userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
    transform: deletePrivates.deletePrivatesAndReturn
});


const User = mongoose.model("user", userSchema);

export = User;