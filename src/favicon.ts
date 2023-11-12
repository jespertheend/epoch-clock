import { createCanvas } from "https://deno.land/x/canvas@v1.4.1/mod.ts";

export function generateFavicon() {
	const canvas = createCanvas(256, 256);
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.fillRect(10, 10, 100, 100);
	ctx.fillText("hi", 10, 150);
	return canvas.toBuffer("image/png");
}
