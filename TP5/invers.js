function InverTab (tab) {
    const tabl2=new Array()

    var a = tab.length-1

   for(i=0;i<tab.length;i++){
        tabl2[i]=tab[a]
        a=a-1
   }
   return(tabl2)
     
}
module.exports= InverTab