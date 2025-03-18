const { exec } = require("child_process");
const fs = require("fs");

// Define files and their content or llm response
const files = [
  {
    path: "/home/coder/workspace/file1.js",
    lines: [
      "console.log('File 1 - Line 1');",
      "console.log('File 1 - Line 2');",
      "console.log('File 1 - Line 3');"
    ]
  },
  {
    path: "/home/coder/workspace/file2.js",
    lines: [
      "console.log('File 2 - Line 1');",
      "console.log('File 2 - Line 2');",
      "console.log('File 2 - Line 3');"
    ]
  }
];

// Function to create and write files sequentially
function createAndWriteFile(index = 0) {
  if (index >= files.length) {
    console.log("🎉 All files processed!");
    return;
  }

  const { path, lines } = files[index];

  // Step 1: Create an empty file
  fs.writeFileSync(path, "", "utf8");

  // Step 2: Open the file in Code-Server
  exec(`code-server ${path}`, (error) => {
    if (error) {
      console.error(`❌ Error opening file: ${error.message}`);
      return;
    }

    // Step 3: Write content line by line
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        fs.appendFileSync(path, lines[lineIndex] + "\n", "utf8");
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => createAndWriteFile(index + 1), 1000); // Move to the next file
      }
    }, 1000); // 1-second delay per line
  });
}

// Start processing files
createAndWriteFile();
