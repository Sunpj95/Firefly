// 从伊布壁纸裁文章封面图（16:9 avif）
const sharp = require("sharp");
const path = require("path");

const DW = "E:\\blog\\Firefly\\src\\assets\\images\\DesktopWallpaper";
const OUT = "E:\\blog\\Firefly\\src\\content\\posts\\images";

const jobs = [
  ["eevee-swing.webp", "eevee-1.avif"],
  ["eevee-forest.webp", "eevee-2.avif"],
  ["eevee-spring.webp", "eevee-3.avif"],
  ["eevee-flower.webp", "eevee-4.avif"],
  ["eevee-swim.webp", "eevee-5.avif"],
];

(async () => {
  for (const [src, out] of jobs) {
    await sharp(path.join(DW, src))
      .resize(1280, 720, { fit: "cover", position: "center" })
      .avif({ quality: 78 })
      .toFile(path.join(OUT, out));
    const m = await sharp(path.join(OUT, out)).metadata();
    console.log(`${out}: ${m.width}x${m.height}`);
  }
})();
