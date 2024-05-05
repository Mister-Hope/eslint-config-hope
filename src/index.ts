import { js } from "./js.js";
import { ts } from "./ts.js";
import { vitest } from "./vitest.js";

export * from "./globals.js";
export * from "./js.js";
export * from "./ts.js";
export * from "./vitest.js";

export default [...js, ...ts, vitest];
