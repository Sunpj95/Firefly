// 处理下载的伊布图：头像转 avif，壁纸转 webp
const sharp = require("sharp");
const path = require("path");

const TMP = "E:\\blog\\Firefly\\.tmp-eevee";
const DW = "E:\\blog\\Firefly\\src\\assets\\images\\DesktopWallpaper";
const ASSETS = "E:\\blog\\Firefly\\src\\assets\\images";

(async () => {
  // 1. 头像：裁成正方形，转 avif 替换 avatar.avif
  await sharp(path.join(TMP, "avatar.jpg"))
    .resize(512, 512, { fit: "cover", position: "center" })
    .avif({ quality: 80 })
    .toFile(path.join(ASSETS, "avatar.avif"));
  console.log("avatar.avif done");

  // 2. 壁纸：转 webp
  const walls = [
    ["wall-flower.jpg", "eevee-flower.webp"],
    ["wall-forest.jpg", "eevee-forest.webp"],
    ["wall-spring.jpg", "eevee-spring.webp"],
  ];
  for (const [src, out] of walls) {
    await sharp(path.join(TMP, src))
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(DW, out));
    const m = await sharp(path.join(DW, out)).metadata();
    console.log(`${out}: ${m.width}x${m.height}`);
  }
})();
