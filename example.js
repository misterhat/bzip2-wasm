import BZip2 from "./index.js";
import fs from 'fs';

const bzip2 = new BZip2();

await bzip2.init();

const licenseText = fs.readFileSync('./LICENSE');
console.log('original length:', licenseText.length);

const compressed = bzip2.compress(licenseText);
console.log('compressed length:', compressed.length);

const decompressed = bzip2.decompress(compressed, licenseText.length);
console.log('decompressed length:', decompressed.length);
