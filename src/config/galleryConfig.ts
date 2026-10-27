import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		{
			id: "eevee-wallpaper",
			name: "伊布壁纸",
			description: "伊布壁纸合集",
			date: "2026-10-27",
			tags: ["伊布", "壁纸"],
		},
		{
			id: "eevee",
			name: "加密相册",
			description: "需要密码才能查看",
			date: "2026-10-27",
			tags: ["加密"],
			password: "218245",
		},
	],

	// 瀑布流最小列宽(px)
	columnWidth: 240,
};
