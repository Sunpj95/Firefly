// 从伊布头像生成 logo 和 favicon
const sharp = require("sharp");
const path = require("path");

const AVATAR = "E:\\blog\\Firefly\\src\\assets\\images\\avatar.avif";
const LOGO_DIR = "E:\\blog\\Firefly\\src\\assets\\images\\logo";
const FAVICON_DIR = "E:\\blog\\Firefly\\public\\favicon";

(async () => {
  // logo: 256x256 png，亮暗通用（伊布头像黄底在亮暗模式下都清晰）
  await sharp(AVATAR)
    .resize(256, 256, { fit: "cover", position: "center" })
    .png()
    .toFile(path.join(LOGO_DIR, "eevee.png"));
  console.log("logo/eevee.png done");

  // favicon: 32x32 png
  await sharp(AVATAR)
    .resize(32, 32, { fit: "cover", position: "center" })
    .png()
    .toFile(path.join(FAVICON_DIR, "eevee-32.png"));
  console.log("favicon/eevee-32.png done");
})();
