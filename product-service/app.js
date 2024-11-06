const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.send('Product Service: List of products.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
