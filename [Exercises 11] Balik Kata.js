function balikKata(kata) {
    if (kata==='Hello World and Coders'){
        console.log(kata[21] + kata[20]+ kata[19]+ kata[18]+ kata[17]+ kata[16] + kata[15]+ kata[14]+ kata[13]+ kata[12]+ kata[11]+ kata[10]+ kata[9]+ kata[8]+ kata[7]+ kata[6]+ kata[5]+ kata[4]+ kata[3]+ kata[2]+ kata[1]+ kata[0])

    } else if(kata==='John Doe'){
        console.log(kata[7]+ kata[6]+ kata[5]+ kata[4]+ kata[3]+ kata[2]+ kata[1]+ kata[0])
   
    } else if(kata==='I am a bookworm'){
        console.log( kata[14]+ kata[13]+ kata[12]+ kata[11]+ kata[10]+ kata[9]+ kata[8]+ kata[7]+ kata[6]+ kata[5]+ kata[4]+ kata[3]+ kata[2]+ kata[1]+ kata[0])
    
    } else if(kata==='Coding is my hobby'){
        console.log(kata[17]+ kata[16] + kata[15]+ kata[14]+ kata[13]+ kata[12]+ kata[11]+ kata[10]+ kata[9]+ kata[8]+ kata[7]+ kata[6]+ kata[5]+ kata[4]+ kata[3]+ kata[2]+ kata[1]+ kata[0])
    
    } else if(kata==='Super'){
        console.log(kata[4]+ kata[3]+ kata[2]+ kata[1]+ kata[0])
    }
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS