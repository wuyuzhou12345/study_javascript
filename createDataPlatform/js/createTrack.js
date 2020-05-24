function search_my_album(){
	var table = document.getElementById('my_albums');
	
	var rowCount=table.rows.length;  
	console.log("rowCount:"+rowCount)
     for (i=1;i<rowCount;i++){  
        table.deleteRow(i);      
        rowCount=rowCount-1;  
        i=i-1;  
    }  
    var ajax_obj = new XMLHttpRequest();
    ajax_obj.open('get','http://127.0.0.1:5000/queryalbumrpc');
    ajax_obj.setRequestHeader("Content-Type","application/json");
    ajax_obj.send();
    ajax_obj.onreadystatechange = function(){
    	console.log('hi');
    	if(ajax_obj.readyState ==4 && ajax_obj.status ==200){
    		console.log(ajax_obj.responseText);
    		var return_json = JSON.parse(ajax_obj.responseText);
    		console.log("return_json type:"+ typeof(return_json))
    		list = return_json.tableData2;
    		console.log(list);
			for(var i=0;i<list.length;i++){
				var tr = document.createElement('tr');
				var td_album_title = document.createElement('td');
				var td_album_id = document.createElement('td');
				td_album_id.innerHTML = list[i].key;
				td_album_title.innerHTML = list[i].value;
				tr.append(td_album_id);
				tr.append(td_album_title);
				table.append(tr);
			}
    	}
    }
}