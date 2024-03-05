const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://portfolio-sudeeptasarkar.vercel.app",
  pagesDirectory: path.join(__dirname, "../components/webpages"),
  targetDirectory: path.join(__dirname, "../public"),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["favicon", "index", "404", "500"],
  extraPaths: [
    "/",
    "/about",
    "/skills",
    "/projects",
    "/blogs",
    "/contact",
    "/files/RSCV.pdf",
  ],
})