import { serveDir } from "https://deno.land/std@0.206.0/http/file_server.ts";

Deno.serve(async (request) => {
	return await serveDir(request, {
		showDirListing: true,
		fsRoot: "static",
		quiet: true,
	});
});
