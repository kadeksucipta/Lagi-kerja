const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const wordPressSchema = Schema({

    name: {
        type: String,
        minlength: [3, "Panjang nama makanan minimal 3 karakter"],
        required: [true, "Nama makanan harus diisi"]
    },

    jenis: {
        type: String,
        maxlength: [1000, "Panjang jenis maksimal 1000 karakter"]
    },

    location: {
        type: String,
        maxlength: [1000, "Panjang lokasi maksimal 1000 karakter"]
    },

    description: {
        type: String,
        maxlength: [1000, "Panjang deskripsi maksimal 1000 karakter"]
    },

    kualifikasi: {
        type: String,
        maxlength: [1000, "Panjang kualifikasi maksimal 1000 karakter"]
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },

    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }]

}, { timestamps: true });

module.exports = model("Wordpress", wordPressSchema);