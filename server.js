// Membuat Server Express
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/QuizRoute')
const jobsheetRoute = require('./router/JobsheetRoute')
const kerajaanRoute = require('./router/KerajaanRoute')
const AboutUsRoute = require('./router/TentangRoute')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Kingdonesia App');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/kerajaans', kerajaanRoute)
app.use('/api/tentang', AboutUsRoute)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));