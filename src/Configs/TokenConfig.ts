import getenv from "getenv.ts";

export function getToken() {
	return getenv.string("SECRET") ?? '';
}
