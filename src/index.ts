import { config } from "./config.js";
import { js } from "./js.js";
import { prettier } from "./prettier.js";
import { ts } from "./ts.js";
import { vitest } from "./vitest.js";

export * from "./config.js";
export * from "./globals.js";
export * from "./js.js";
export * from "./prettier.js";
export * from "./ts.js";
export * from "./vitest.js";

export default config(...js, ...ts, vitest, prettier);
