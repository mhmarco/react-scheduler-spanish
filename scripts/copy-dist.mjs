// Copies the built library into TourHub's vendored dist and pins the fork commit.
// Run AFTER `npm run build`. Sibling layout assumed: <parent>/react-scheduler-spanish and <parent>/TourHub.
//
// The vendored index.js gets a leading `/* eslint-disable */` (the app lints its own src tree and would otherwise
// flag the bundled output). Injecting it here keeps the copy deterministic — never hand-edit the vendored file.
import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const forkRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(forkRoot, "dist");
const vendorDir = join(forkRoot, "..", "TourHub", "tourhub-ui", "src", "thirdParty", "react-scheduler");
const destDir = join(vendorDir, "dist");

if (!existsSync(destDir)) {
  console.error(`copy-dist: vendored dist not found at ${destDir}`);
  process.exit(1);
}

const ESLINT_HEADER = "/* eslint-disable */\n";
const js = readFileSync(join(srcDir, "index.js"), "utf8");
writeFileSync(join(destDir, "index.js"), js.startsWith(ESLINT_HEADER) ? js : ESLINT_HEADER + js);

for (const f of ["index.umd.cjs", "index.d.ts", "style.css"]) {
  copyFileSync(join(srcDir, f), join(destDir, f));
}

const sha = execSync("git rev-parse HEAD", { cwd: forkRoot }).toString().trim();
writeFileSync(join(vendorDir, "FORK_VERSION"), `${sha}\n`);

console.log(`copy-dist: copied 4 artifacts -> tourhub-ui (fork ${sha.slice(0, 8)})`);
