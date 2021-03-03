
num=Math.floor(Math.random() * (3 - 1)) + 1;
console.log(num);
 if (num == 1){

  function1();

 }
else if(num ==2){
   function2();
 }


else{
  function1();
}




function function1(){
VANTA.BIRDS({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xf70000,
    color2: 0x3d1ff
  })


}




function function2(){

  VANTA.NET({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3a3feb,
    backgroundColor: 0x0,
    points: 14.00,
    maxDistance: 17.00,
    spacing: 14.00,
    showDots: false
  })


}
