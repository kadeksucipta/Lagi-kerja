const Education = require("./model");

const store = async(req, res, next) => {
    try {
        let payload = req.body;
        let tag = new Education(payload);
        await tag.save()
        return res.json(tag);
    }catch(err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const update = async(req, res, next) => {
    try {
        let payload = req.body;
        let tag = await Education.findByIdAndUpdate(req.params.id, payload, {new: true, runValidators: true});
        return res.json(tag);
    }catch(err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const destroy = async(req, res, next) => {
    try {
        let tag = await Education.findByIdAndDelete(req.params.id);
        return res.json(tag);
    }catch(err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const index = async(req, res, next) => {
    try {
        let tag = await Education.find();
        return res.json(tag);
    }catch(err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

module.exports = {
    store,
    update,
    destroy,
    index
}