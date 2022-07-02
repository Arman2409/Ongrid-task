import mongoose from "../backend/database.js";

const User = mongoose.Schema({
    name:{type: String, required: true},
    password:{type: String, required: true},
});

const UserModel = mongoose.model("users",User);

export default UserModel;