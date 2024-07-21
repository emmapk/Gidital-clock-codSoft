const hourE1 = document.getElementById("hours");
 
const minutes1 = document.getElementById("minutes");

const seconds1 = document.getElementById("seconds");

const ampm1 = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if (h > 12){
      h = h - 12;
      ampm = "PM";
    }
    
    h = h < 10 ? "0" + h :h;
    m = m < 10 ? "0" + m :m;
    s = s < 10 ? "0" + s :s;


    hourE1.innerHTML = h;
    minutes1.innerHTML = m;
    seconds1.innerHTML= s;
    ampm1,(innerText = ampm);
    setTimeout(()=>{
        updateClock()
    },1000)

    
    

}

updateClock()


