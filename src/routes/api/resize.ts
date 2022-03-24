import express from 'express';
import fs from 'fs'
import path from 'path'
import sharp from 'sharp';

const resize = express.Router()

// note: i am note specifying any uri here 
resize.get('', (req, res) => {

    if (req.query.filename && req.query.width && req.query.height) {
        
        const pathToHere = path.resolve()
        const width: number = (req.query.width as unknown) as number
        const height: number = (req.query.height as unknown) as number
        const filename: string = (req.query.filename as unknown) as string

        let thumbedFiles = fs.readdirSync(pathToHere + '/src/image_processing/thumbed')
        if (thumbedFiles.includes(`${filename}_${width}_${height}.jpg`)) {
            res.status(200).sendFile(`${pathToHere}/src/image_processing/thumbed/${filename}_${width}_${height}.jpg`)
        } else {
            (async () => {
                try {
                    await sharp(`${pathToHere}/src/image_processing/images/${filename}.jpg`)
                    .resize(Number((width)), Number(height))
                    .toFile(`${pathToHere}/src/image_processing/thumbed/${filename}_${width}_${height}.jpg`)
                    res.status(200).sendFile(`${pathToHere}/src/image_processing/thumbed/${filename}_${width}_${height}.jpg`)
                } catch (error) {
                    res.status(400).send('<h1>no such file</h1>')
                }
            })()
        }
    }
})


export default resize