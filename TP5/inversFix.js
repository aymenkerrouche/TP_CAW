function InvTabFix (tab){

    if(tab == null){
        console.log("tab est vide");
    }
    else{
        last=tab.length-1
    demi=tab.length/2
    
    for(i=0;i<=demi-1;i++){
        
       var c=tab[i];
        tab[i]=tab[last];
        tab[last]=c;
        last=last-1;
       }
    }
       
       return(tab)

}
module.exports= InvTabFix