// EXPRESS SERVER Index

const express = require ("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('/Users/admin/Desktop/RPP2207 Sprints/golden-fan-shop/client/dist'));

app.listen(3000, () => console.log('Our Server is listening on port 3000...'));