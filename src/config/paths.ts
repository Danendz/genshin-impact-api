import path from 'path';

const assets = () => path.join(__dirname, '../../assets/');
const assetsData = () => path.join(assets(), '/data');
const assetsImages = () => path.join(assets(), '/images');
const assetsSchema = () => path.join(assets(), '/schema');

export {
  assets,
  assetsData,
  assetsImages,
  assetsSchema
};
