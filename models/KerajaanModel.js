module.exports = (sequelize, Sequelize) => {
    const Kerajaan = sequelize.define('kerajaan', {
        kerajaan: {
            type: Sequelize.STRING,
        },
        nama: {
            type: Sequelize.STRING,
        },
        agama : {
            type: Sequelize.STRING,
        },
        lokasi : {
            type: Sequelize.STRING,
        },
        deskripsi : {
            type: Sequelize.STRING,
        },
    });
    return Kerajaan;
}