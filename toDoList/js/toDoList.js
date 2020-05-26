window.onload = function(){
	addClickListener();
	deleteItem();
}


function addToDoItem(){
	var input_content = document.getElementById('toDoContent').value;
	var list = document.getElementById('toDoList');
	var li = document.createElement('li');

	var button = document.createElement('button');
	button.className='delete';
	button.appendChild(document.createTextNode('X'));

	li.appendChild(document.createTextNode(input_content));
	li.appendChild(button);
	list.appendChild(li);

	document.getElementById('toDoContent').value = '';
	
}


function addClickListener(){
	var list = document.getElementById('toDoList');
	list.addEventListener('click',function(e){
  	if(e.target && e.target.nodeName.toUpperCase() === 'LI') {
  		if(e.target.className == 'checked'){
  			e.target.className = '';
  		}
  		else{
  			e.target.className = 'checked';
  		}
  	}
	});
}

function deleteItem(){
	var delete_btns = document.getElementsByClassName('delete');
	for(var i=0;i<delete_btns.length;i++){
		delete_btns[i].onclick = function(){
			var list = document.getElementById('toDoList');
			console.log('i='+i);
			list.remove(i);
		}
	}
}