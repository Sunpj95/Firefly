const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'src', 'content', 'posts', 'images');

const images = [
  { name: 'vaporeon', url: 'https://aka.doubaocdn.com/s/M0Kvt3qAwm' },
  { name: 'jolteon', url: 'https://aka.doubaocdn.com/s/THNVnKAWG8' },
  { name: 'flareon', url: 'https://aka.doubaocdn.com/s/OGKODnjWEs' },
  { name: 'espeon', url: 'https://aka.doubaocdn.com/s/bahVA9aV9F' },
  { name: 'umbreon', url: 'https://aka.doubaocdn.com/s/U0vuz1ClV1' },
  { name: 'leafeon', url: 'https://aka.doubaocdn.com/s/W2JAuiU0Zp' },
  { name: 'glaceon', url: 'https://aka.doubaocdn.com/s/KI7Mhj7FhG' },
  { name: 'sylveon', url: 'https://aka.doubaocdn.com/s/OVhihSlrRy' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    const buf = await download(img.url);
    const outFile = path.join(outDir, `eevee-${img.name}.avif`);
    await sharp(buf)
      .resize(1280, 720, { fit: 'cover', position: 'center' })
      .avif({ quality: 80 })
      .toFile(outFile);
    console.log(`  -> ${outFile} (${buf.length} bytes downloaded)`);
  }
  console.log('All done!');
}

main().catch(e => { console.error(e); process.exit(1); });
