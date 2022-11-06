// var fs = require('fs');
// var filesname = new Array();
// function grep (search, files){

//     if(search == null) return console.log("fichiers sont vide");

//     for

//     files.forEach(async element => await fs.readFile(element, function (error, data) {
//         if (error) throw error;
//         let filename = element.replace(/^.*[\\\/]/, '');
//         if(data.includes(search)){
//             filesname.unshift(filename);
//         }
//         return filesname;
//     })
//     );
//     return filesname;
// }

// var fichiers = ['./src/ok.txt','./src/ok2.txt','./src/ok3.txt'];
// filesname = grep('ok',fichiers);

// console.log(filesname);
// //module.exports= grep;

const fs = require("fs").promises;
var fichiers = ['./src/ok.txt','./src/ok2.txt','./src/ok3.txt'];

async function grep(search,files) {
  const allResults = [];
  if(search == null) return console.log("fichiers sont vide");
  try {
    for (var file of files) {
      try {
        const content = await fs.readFile(file, {
          encoding: "utf-8"
        });
        if (content.includes(search)) {
          let filename = file.replace(/^.*[\\\/]/, '');
          allResults.push(filename);
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
grep("ok",fichiers).then(data => {
    console.log(data);
});