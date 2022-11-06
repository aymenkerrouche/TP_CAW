function toArray(d, f) {
    let numb = [];  
    
    while (d <= f) { 
        numb.push(d);
        d++;
    }
    return numb; 
  }

    module.exports = toArray


// function toArrayWithStep(d, f, s) {
//     let numb = [];  
        
//     while (d <= f) { 
//         numb.push(d);
//         d = d + s;
//     }
//         return numb; 
//       }
    
// module.exports = toArrayWithStep