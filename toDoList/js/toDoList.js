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
	deleteItem();
	
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
		//在onclick事件处理函数中，该作用域内没有 i 变量，因此会沿着作用域链往父类中寻找 i，而在for循环中有变量i值，因此事件处理函数中会使用该变量。可是！！由于for循环是同步任务，页面加载完毕后，for循环瞬间就执行完毕了，i 瞬间就变成 固定值了，在为每个 li 注册好点击事件（异步任务）后，每次点击时，弹出的值都定值
		//下面使用了匿名函数，主要解决作用域数据问题，传了一个变量i给onclick
		(function(i){
			delete_btns[i].onclick = function(){
				var lis = document.getElementsByTagName('li');
				console.log('i='+i);
				console.log(lis[i]);
				lis[i].remove();
				deleteItem(); //此处删除之后，下标会发生变化，所以需要再次调用deleteItem，重新对click删除事件进行重新绑定
			}
		})(i);
	}
}