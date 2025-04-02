const fs = require("fs");
const path = require("path");

const ROOT_PATH = "D:\\Fitness\\courses\\moveU"; // Change this to your actual root path

function getFilesInFolder(folderPath) {
  return fs.readdirSync(folderPath).map((file) => ({
    title: path.basename(file, path.extname(file)), // Extract title without extension
    path: path.join(folderPath, file).replace(/\\/g, "/"), // Convert Windows backslashes to forward slashes
  }));
}

function generateVideoJSON(rootPath) {
  const categories = fs
    .readdirSync(rootPath)
    .filter((folder) => fs.lstatSync(path.join(rootPath, folder)).isDirectory());

  return {
    categories: categories.map((category) => {
      const categoryPath = path.join(rootPath, category);
      const subcategories = fs
        .readdirSync(categoryPath)
        .filter((subfolder) => fs.lstatSync(path.join(categoryPath, subfolder)).isDirectory());

      return {
        name: category,
        subcategories: subcategories.map((subcategory) => {
          const subcategoryPath = path.join(categoryPath, subcategory);
          return {
            name: subcategory,
            files: getFilesInFolder(subcategoryPath),
          };
        }),
      };
    }),
  };
}

const videoJSON = generateVideoJSON(ROOT_PATH);
fs.writeFileSync("server/data.json", JSON.stringify(videoJSON, null, 2));
console.log("Video data JSON generated successfully!");
