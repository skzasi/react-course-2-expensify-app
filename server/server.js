const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;           //This is for heroku

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
})

// app.listen(3000, () => { console.log('server is up!!')});
app.listen(port, () => { console.log('server is up!!')});

