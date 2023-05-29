const mongoose = require("mongoose");
const {model, Schema} = mongoose;
const experienceSchema = Schema({
    name: {
        type: String,
        // minlength: [3, "Panjang nama tag minimal 3 karakter"],
        // maxlength: [20, "Panjang nama tag maksimal 20 karakter"],
        // required: [true, "Nama tag harus diisi"]
    },
    position: {
        type: String
    },
    jenis: {
        type: String
    },
    waktu: {
        type: String
    }

});

module.exports = model("Experience", experienceSchema)