setInterval(function(){
    const current = new Date();
     hour_time = current.getHours();
     min_time = current.getMinutes();
     sec_time = current.getSeconds();

     h_angle = 30*hour_time+min_time/2;
     m_angle = 6*min_time;
     s_angle = 360+6*sec_time;

    
   document.getElementById("hours-hand").style.transform=`rotate(${h_angle}deg)`;
   document.getElementById("minute-hand").style.transform=`rotate(${m_angle}deg)`;
   document.getElementById("seconds-hand").style.transform=`rotate(${s_angle}deg)`;

},1000);