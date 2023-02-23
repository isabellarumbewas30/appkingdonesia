module.exports = (sequelize, Sequelize) => {
    const Tentang = sequelize.define('tentang', {
        judul : {
            type: Sequelize.STRING,
        },
        deskripsi : {
            type: Sequelize.STRING,
        },
    });
    return Tentang;
}