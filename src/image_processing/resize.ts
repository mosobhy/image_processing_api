import path from 'path';
import sharp from 'sharp';

const resizeImage = async (fileName: string, width: number, height: number): Promise<number> => {
  const inPath = `${path.resolve()}/src/image_processing/images/`;
  const outPath = `${path.resolve()}/src/image_processing/thumbed/`;
  try {
    const status = await sharp(`${inPath + fileName}.jpg`)
      .resize(Number(width), Number(height))
      .toFile(`${outPath + fileName}_${width}_${height}.jpg`);

    return 200;
  } catch (err) {
    throw new Error('no such file');
  }
};

export default resizeImage;
