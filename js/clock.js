let kullanici = prompt ("Lütfen Adınızı Giriniz!")
    if (kullanici) {
        document.getElementById("myName").innerHTML = kullanici
    }



    function startTime() {
        const weekday = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let d =today.getDay();
        let day = weekday[d];
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s +"  "+ day;
        setTimeout(startTime, 1000);

      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

   
      
    // document.getElementById("myClock").innerHTML= par;