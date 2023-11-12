import { serveDir } from "https://deno.land/std@0.206.0/http/file_server.ts";
import { generateFavicon } from "./src/favicon.ts";

Deno.serve(async (request) => {
	const url = new URL(request.url);
	if (url.pathname == "/favicon.ico") {
		const image = generateFavicon();
		return new Response(image, {
			headers: {
				"Content-Type": "image/png",
			},
		});
	}
	return await serveDir(request, {
		showDirListing: true,
		fsRoot: "static",
		quiet: true,
	});
});
