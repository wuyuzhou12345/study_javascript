window.onload = function(){
  var container = document.getElementById('container');
  var list = document.getElementById('list');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var buttons = document.getElementById('buttons').getElementsByTagName('span');;
  var index = 1;
  var timer;

  function animate(offset){
    var newLeft = parseInt(list.style.left) + offset
    list.style.left = newLeft + 'px';
    if(newLeft > -600){
        list.style.left = '-3000px';
    }
    if(newLeft < -3000){
        list.style.left = '-600px';
    }
  }

  function showButton(){
    for(var i=1;i<=buttons.length;i++){
        if(i === index){
            buttons[i-1].className = 'on';
        }
        else{
            buttons[i-1].className = '';
        }
    }

  }
    
  prev.onclick = function(){
    index -=1;
    if(index<1){
      index=5;
    }
    animate(600);
    showButton();
  }

  next.onclick = function(){
    index +=1;
    if(index>5){
      index=1;
    }
    animate(-600);
    showButton();
  }

  for(var m=1;m<=buttons.length;m++){
    buttons[m-1].onclick = function(){
      var button_index = parseInt(this.getAttribute('index'));
      var left = (index - button_index) * 600 + parseInt(list.style.left);
      console.log('calculete:left=' + left + 'px');
      index = button_index;
      list.style.left = left + 'px';
      showButton();
    }
  }

  function play(){
    timer = setInterval(next.onclick,1500);
  }
  function stop(){
    clearInterval(timer);
  }
  container.onmouseover = stop;
  container.onmouseout = play;
  play();

}