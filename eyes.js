const balls = document.getElementsByClassName('ball');
console.log("H")
console.log(balls);
document.onmousemove = (event) => {
    // console.log("Moved!")
    // console.log("DOne")
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  // console.log("DOne1")

  for (let i = 0; i < balls.length; i++){
      // console.log("Hi");
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
      // document.appendChild(balls[i]);
      // console.log(x);
      // console.log(y);
      
  }
  console.log(x);
  console.log(y);
  // console.log("DOne2")
};
