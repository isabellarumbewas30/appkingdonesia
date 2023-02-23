const db = require("../models");
const Kerajaan = db.kerajaans;

//Menambahkan data kerajaan
exports.createKerajaan = async (req,res) => {

    try{
        const data = await Kerajaan.create(req.body)
        res.json({
            message: "Data kerajaan berhasil ditambahkan!",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//Mengambil semua data kerajaan 
exports.getAllKerajaan = async(req,res) => {
    try {
        const kerajaans = await Kerajaan.findAll()
        res.json({
            message: "Semua data kerajaan berhasil ditampilkan!",
            data: kerajaans,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        });
    }
};

//GET by agama 
exports.getByAgama = async(req,res) => {
    const agama = req.params.agama
    const kerajaans = await Kerajaan.findAll({
        where : {
            agama : agama
        }
    })
    res.json({
        message: `Seluruh data kerajaan berdasarkan agama ${agama} telah berhasil ditampilkan`,
        data: kerajaans,
    });
}

//GET by lokasi
exports.getByLokasi = async(req,res) => {
    const lokasi = req.params.lokasi
    const kerajaans = await Kerajaan.findAll({
        where : {
            lokasi : lokasi
        }
    })
    res.json({
        message: `Seluruh data kerajaan berdasarkan lokasi ${lokasi} telah berhasil ditampilkan`,
        data: kerajaans,
    });
}

//Update
exports.updateKerajaan = async (req, res) => {
    const id = req.params.id
    try {
        const kerajaan = await Kerajaan.findByPk(id, { rejectOnEmpty: true})
        kerajaan.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Data berhasil diubah!",
            data: kerajaan,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terdapat kesalahan saat mengubah data, silahkan coba lagi",
            data: null,
        });
    }
}

//Hapus data kerajaan
exports.deleteKerajaan = async (req, res) => {
    const id = req.params.id
    try {
        const kerajaan = await Kerajaan.findByPk(id, {rejectOnEmpty: true})

        kerajaan.destroy()

        res.json({
            message: "Data berhasil dihapus!"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terdapat kesalahan saat menghapus data, silahkan coba lagi ",
            data: null,
        });
    }
}

//GET by id
exports.getKerajaanbyid = async (req,res) => {
    const id = req.params.id
    try{
        const kerajaan = await Kerajaan.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Data kerajaan berhasil ditemukan pada id =${id}`,
            data: kerajaan,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terdapat kesalahan, silahkan coba lagi",
            data: null,
        });
    }
};

