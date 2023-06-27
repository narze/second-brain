function slugify(path) {
  // Get only 2 level up (its name and a folder above it)
  // Replace all non-word chars with -
  // Downcase
  // Remove file extension
  return path
    .split("/")
    .slice(-2)
    .join("/")
    .replace(/\W+/g, "-")
    .toLowerCase()
    .replace(/\.md$/, "")
}
module.exports = slugify
