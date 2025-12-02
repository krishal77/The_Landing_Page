function time(){
    const now=new Date();
    const hour=now.getHours().toString().padStart(2,0);
    const minute= now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const fulltime= `${hour}:${minute}:${seconds}`;
    document.getElementById("clock").textContent=fulltime;
}
time();
setInterval(time,1000);
