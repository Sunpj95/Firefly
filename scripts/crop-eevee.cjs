// 一次性脚本：把手机截图里的伊布插画裁出来转 webp
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC_DIR = "D:\\新建文件夹\\xwechat_files\\wxid_it4zwt1mg18e22_746a\\temp\\RWTemp\\2026-10\\9e20f478899dc29eb19741386f9343c8";
const OUT_DIR = "E:\\blog\\Firefly\\src\\assets\\images\\DesktopWallpaper";

const jobs = [
  { src: "7d5dd487fa723ac8b3e9bcd6de2f1bbf.jpg", out: "eevee-swing.webp", top: 940, height: 870 },
  { src: "b43e01d3d4f6f3d0200df790e37818a1.jpg", out: "eevee-swim.webp", top: 940, height: 870 },
];

(async () => {
  for (const j of jobs) {
    const srcPath = path.join(SRC_DIR, j.src);
    const outPath = path.join(OUT_DIR, j.out);
    const meta = await sharp(srcPath).metadata();
    const w = meta.width;
    await sharp(srcPath)
      .extract({ left: 0, top: j.top, width: w, height: j.height })
      .webp({ quality: 82 })
      .toFile(outPath);
    const outMeta = await sharp(outPath).metadata();
    console.log(`${j.out}: ${outMeta.width}x${outMeta.height} (from top=${j.top})`);
  }
})();
