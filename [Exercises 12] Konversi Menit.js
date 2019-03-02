function konversiMenit(menit) {
  
  var hours = Math.floor(menit / 60)
  var minutes = menit % 60
    
    if (String(minutes).length === 1) {
      minutes = "0"+minutes
    }
    
    var hasil = hours + ":" + minutes
    
    return String(hasil)
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00