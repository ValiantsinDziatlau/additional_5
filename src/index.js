module.exports = function check(str, bracketsConfig) {
    let compareStr;
    let ConfigVariants=bracketsConfig.length;
    while(str.length>0&&compareStr!==str){
        compareStr=str;
    for(let i=0; i<ConfigVariants; i++){
        str=str.replace(bracketsConfig[i].join().replace(",",""),"");
    }
    }
   return Boolean(!str);
}