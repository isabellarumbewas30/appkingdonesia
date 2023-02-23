const db = require("../models");
const Quiz = db.quizzes;

//CREATE
exports.create = async (req,res) => {

    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz created successfully",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ
exports.getAll = async(req,res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        });
    }
};

//Update
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}

//Hapus
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}

//GET by id
exports.findOne = async (req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quizzes retrieved successfully with id=${id}`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
};

//GET by categories
exports.getByCourseId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            courseId : id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with courseId=${id}`,
        data: quizzes,
    });
}

//GET by Soal
exports.getBySoalId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            soalId : id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with soalId=${id}`,
        data: quizzes,
    });
} 