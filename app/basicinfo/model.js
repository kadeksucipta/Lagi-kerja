const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const infoSchema = Schema({

    usia: {
        type: Number,
    },

    hp: {
        type: Number,
    },

    email: {
        type: String,
        // required: [true, "Email harus diisi"],
        // maxlength: [255, "Panjang email maksimal 255 karakter"],
    },

}, { timestamps: true });

module.exports = model("Info", infoSchema);