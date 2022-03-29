import resizeImage from '../image_processing/resize';

describe('testing the resizeImage function', () => {
  it('should return a promise that resolve with 200 when rigth inputs are given', () =>
    resizeImage('fjord', 150, 150).then((result) => {
      expect(result).toEqual(200);
    }));
});
