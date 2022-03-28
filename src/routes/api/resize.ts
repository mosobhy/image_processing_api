import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from '../../image_processing/resize';

const resize = express.Router();

// note: i am note specifying any uri here
resize.get('', async (req: Request, res: Response): Promise<void> => {
  if (req.query.filename && req.query.width && req.query.height) {
    const pathToHere = path.resolve();
    const width: number = (req.query.width as unknown) as number;
    const height: number = (req.query.height as unknown) as number;
    const filename: string = (req.query.filename as unknown) as string;

    const thumbedFiles = fs.readdirSync(`${pathToHere}/src/image_processing/thumbed`);
    if (thumbedFiles.includes(`${filename}_${width}_${height}.jpg`)) {
      res.status(200).sendFile(`${pathToHere}/src/image_processing/thumbed/${filename}_${width}_${height}.jpg`);
    } else {
      await resizeImage(filename, width, height)
        .then((status) => {
          res.status(status).sendFile(`${pathToHere}/src/image_processing/thumbed/${filename}_${width}_${height}.jpg`);
        })
        .catch(() => {
          res.status(400).send('<h1>No Such File<h1>');
        });
    }
  }
});

export default resize;
