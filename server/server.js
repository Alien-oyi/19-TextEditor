const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
