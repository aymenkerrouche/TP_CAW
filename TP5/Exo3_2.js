const fs = require("fs").promises;

async function readDir(path,search) {
    const allResults = [];
  try {
    const files = await fs.readdir(path);

    for (const fileName of files) {
      try {
        const content = await fs.readFile(`${path}/${fileName}`, {
          encoding: "utf-8"
        });

        if (content.includes(search)) {
          allResults.push(fileName);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    return allResults;
  } catch (error) {
    console.log(error);
  }
}

readDir("./src/ok/","ok").then(data => {
    console.log(data);
});