const db = require("../models");
const Tentang = db.tentang;

//CREATE ABOUT US
exports.createAbout = async (req,res) => {

    try{
        const data = await Tentang.create(req.body)
        res.json({
            message: "Data About Us berhasil ditambahkan!",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//GET ABOUT US
exports.getAbout = async(req,res) => {
    try {
        const tentangs = await Tentang.findAll()
        res.json({
            message: "Data About Us berhasil ditampilkan!",
            data: tentangs,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        });
    }
};

//UPDATE ABOUT US
//Update
exports.updateAbout = async (req, res) => {
    const id = 1
    try {
        const about = await Tentang.findByPk(id, { rejectOnEmpty: true})
        about.update(req.body, {
            where: {id}
        })
        res.json({
            message: "About Us updated successfully",
            data: about,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving about us",
            data: null,
        });
    }
}
