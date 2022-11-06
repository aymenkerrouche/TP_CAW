function toArrayWithStep(d, f, s) {
    let numb = []; 
    
    if(s==null)s=1

    if(d > f){
        while (d >= f) { 
            numb.push(d);
            d = d - Math.abs(s);
        } 
    }else if(d < f ){
        while (d <= f) { 
            numb.push(d);
            d = d + Math.abs(s);
        }
    }
    
    return numb; 
}
console.log(toArrayWithStep(8,2));
module.exports = toArrayWithStep