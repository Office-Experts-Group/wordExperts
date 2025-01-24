import fs from "fs/promises";
import path from "path";

const baseUrl = "https://word-experts.vercel.app";
const dirsToScan = ["app", "components", "styles", "public"];
const checked = new Set();
const errors = [];

const linkPatterns = [
  /href=["'](\/[^"']*?)["']/g,
  /href={\s*['"`](\/[^'"`]*?)['"`]\s*}/g,
  /Link\s+href=["'](\/[^"']*?)["']/g,
  /Link\s+href={\s*['"`](\/[^'"`]*?)['"`]\s*}/g,
  /href=["'](https?:\/\/[^"']*?)["']/g,
  /href={\s*['"`](https?:\/\/[^'"`]*?)['"`]\s*}/g,
  /Link\s+href=["'](https?:\/\/[^"']*?)["']/g,
  /Link\s+href={\s*['"`](https?:\/\/[^'"`]*?)['"`]\s*}/g,
];

async function findLinksInFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  const links = new Set();

  for (const pattern of linkPatterns) {
    const matches = [...content.matchAll(pattern)];
    matches.forEach((match) => {
      const link = match[1];
      if (
        link &&
        !link.includes("*") &&
        !link.includes("..") &&
        !link.match(/\.(jpg|jpeg|png|gif|svg|webp|css|scss)$/i)
      ) {
        links.add(link);
      }
    });
  }

  return Array.from(links);
}

async function scanDirectory(dir) {
  const routes = new Set();
  const scannedFiles = [];
  const linksFoundInFiles = new Map();

  async function scan(currentDir) {
    try {
      const entries = await fs.readdir(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativePath = fullPath.replace(process.cwd(), "");

        if (
          entry.isDirectory() &&
          !entry.name.startsWith("_") &&
          !entry.name.startsWith(".")
        ) {
          console.log(`Scanning directory: ${relativePath}`);
          await scan(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name);
          if ([".js", ".jsx", ".tsx", ".scss", ".css"].includes(ext)) {
            console.log(`Scanning file: ${relativePath}`);
            scannedFiles.push(relativePath);

            if (/page\.(js|jsx|tsx)$/.test(entry.name)) {
              const route =
                "/" +
                fullPath
                  .split(dir)[1]
                  .replace(/page\.(js|jsx|tsx)$/, "")
                  .replace(/\[\.{3}.*\]/, "*")
                  .replace(/\[(.*?)\]/g, ":$1")
                  .replace(/\/+$/, "")
                  .replace(/^\/+/, "");
              routes.add(route || "/");
            }

            const links = await findLinksInFile(fullPath);
            if (links.length > 0) {
              linksFoundInFiles.set(relativePath, links);
              links.forEach((link) => routes.add(link));
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning ${currentDir}:`, error);
    }
  }

  await scan(dir);
  return { routes, scannedFiles, linksFoundInFiles };
}

async function checkUrl(url, index, total) {
  if (checked.has(url)) return;
  checked.add(url);

  const urlToCheck = url.startsWith("http") ? url : `${baseUrl}${url}`;

  try {
    const response = await fetch(urlToCheck);
    const result = `${index + 1}/${total}: ${url} - Status: ${response.status}`;
    console.log(result);

    if (response.status === 404) {
      errors.push(`404: ${url}`);
    }
    return result;
  } catch (error) {
    const result = `${index + 1}/${total}: ${url} - Error: ${error.message}`;
    console.error(result);
    errors.push(result);
    return result;
  }
}

async function main() {
  const results = [];
  const allRoutes = new Set();
  const allScannedFiles = [];
  const allLinksFound = new Map();

  for (const dir of dirsToScan) {
    const { routes, scannedFiles, linksFoundInFiles } = await scanDirectory(
      dir
    );
    routes.forEach((route) => allRoutes.add(route));
    allScannedFiles.push(...scannedFiles);
    linksFoundInFiles.forEach((links, file) => allLinksFound.set(file, links));
  }

  const routesArray = Array.from(allRoutes);
  console.log("Found routes:", routesArray);

  for (let i = 0; i < routesArray.length; i++) {
    const result = await checkUrl(routesArray[i], i, routesArray.length);
    results.push(result);
  }

  const summary = `
SCAN DETAILS
============
Scanned Directories: ${dirsToScan.join(", ")}
Total Files Scanned: ${allScannedFiles.length}

FILES SCANNED
============
${allScannedFiles.join("\n")}

LINKS FOUND IN FILES
===================
${Array.from(allLinksFound.entries())
  .map(([file, links]) => `${file}:\n  ${links.join("\n  ")}`)
  .join("\n\n")}

ROUTES FOUND
===========
Total Routes: ${routesArray.length}
${routesArray.join("\n")}

CHECK RESULTS
============
${results.join("\n")}

ERRORS
======
${errors.length ? errors.join("\n") : "No errors found"}
`.trim();

  await fs.writeFile("link-check-results.txt", summary);
  console.log("\nCheck complete! Results saved to link-check-results.txt");
}

main().catch(console.error);
