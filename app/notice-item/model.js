const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const noticeItemSchema = Schema({
    name: {
        type: String,
        // minlength: [5, "Panjang nama makanan minimal 5 karakter"],
        // required: [true, "name mus be filled"]
    },

    jenis: {
        type: String,
        // maxlength: [1000, "Panjang jenis maksimal 1000 karakter"]
    },

    location: {
        type: String,
        // maxlength: [1000, "Panjang lokasi maksimal 1000 karakter"]
    },

    // price: {
    //     type: Number,
    //     default: 0
    // },

    // image_url: String,

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // },

    // product: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Product"
    // }
});

module.exports = model("NoticeItem", noticeItemSchema);