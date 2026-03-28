const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let totalCopied = 0;

// Function to copy images from a directory
function copyImages(sourceBaseName, outputPrefix) {
  // Try both directory names (with and without ñ)
  let sourceDir = path.join(__dirname, 'images', sourceBaseName);
  if (!fs.existsSync(sourceDir)) {
    sourceDir = path.join(__dirname, 'images', sourceBaseName.replace('ñ', 'aa'));
  }
  
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠ Directory not found: ${sourceDir}`);
    return;
  }

  // Read all files from source directory
  const files = fs.readdirSync(sourceDir).filter(file => 
    file.toLowerCase().endsWith('.jpeg')
  );

  // Sort files to maintain order
  files.sort();

  // Copy files with new names
  files.forEach((file, index) => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, `${outputPrefix}-${index + 1}.jpg`);
    
    try {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied: ${file} → ${outputPrefix}-${index + 1}.jpg`);
      totalCopied++;
    } catch (err) {
      console.error(`✗ Error copying ${file}:`, err.message);
    }
  });
}

// Copy cabaña1 images
copyImages('cabaña1', 'cabana1');

// Copy cabaña2 images
copyImages('cabaña2', 'cabana2');

// Copy piscina images
copyImages('piscina', 'piscina');

console.log(`\nTotal images copied: ${totalCopied}`);
