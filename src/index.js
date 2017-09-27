module.exports = function check(str, bracketsConfig) {
  var BracketStr=str;
  var SetBrck=[];
//section set of bracketconfig
  for(var i=0; i<bracketsConfig.length; i++ ){
  var a='';
      for(var j=0; j<2; j++ ){
      a+=bracketsConfig[i][j];
      }
      SetBrck[i]=a;
    }
   // works ---> var a= BracketStr.includes(SetBrck[2]);
  do{
      // CndChckVar update section

   var CndChckVar=false;
       for( var i=0; i<SetBrck.length; i++){
           if(BracketStr.includes(SetBrck[i])){
               CndChckVar=true;
               break;
           }
       }
        //  BracketStr update esction
       for( var i=0; i<SetBrck.length; i++){
       BracketStr=BracketStr.replace(SetBrck[i],"");
        }
   }
   while(CndChckVar);

// section closing parenthesis check
/* for( var i=0; i<SetBrck.length; i++){
while(BracketStr.includes(SetBrck[i])){
    BracketStr.search(SetBrck[i])
    BracketStr-=SetBrck[i];
}

 }*/

  return Boolean(!BracketStr) ;
}
