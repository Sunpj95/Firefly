// 把新下载的伊布图裁成 16:9 封面
const sharp = require("sharp");
const path = require("path");

const TMP = "E:\\blog\\Firefly\\.tmp-covers";
const OUT = "E:\\blog\\Firefly\\src\\content\\posts\\images";

const jobs = [
  ["c1.jpg", "eevee-6.avif"],
  ["c3.jpg", "eevee-7.avif"],
  ["c8.jpg", "eevee-8.avif"],
  ["c9.jpg", "eevee-9.avif"],
  ["c10.jpg", "eevee-10.avif"],
  ["c4.jpg", "eevee-11.avif"],
  ["c5.jpg", "eevee-12.avif"],
];

(async () => {
  for (const [src, out] of jobs) {
    await sharp(path.join(TMP, src))
      .resize(1280, 720, { fit: "cover", position: "center" })
      .avif({ quality: 78 })
      .toFile(path.join(OUT, out));
    console.log(`${out} done`);
  }
})();
