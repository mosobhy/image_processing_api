import express from 'express';
import {Response, Request } from 'express'

const resize = express.Router()

resize.get('/', (req, res) => {
    res.send("resize path is configed")
})

export default resize