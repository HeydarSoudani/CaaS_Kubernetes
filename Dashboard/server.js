const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev});
const handler = app.getRequestHandler();
// With express
const express = require('express');
app.prepare().then(() => {
    express().use(handler).listen(4000);
});
