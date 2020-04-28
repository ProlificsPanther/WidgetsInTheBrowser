$(document).ready(function() {	
	
	//$('#selectbasic1,#selectbasic2').addClass('btn btn-default  dropdown-toggle');
	_buildGrid();
	//alert();
});


var _buildGrid = function() {
	// create the data array
	var dataSet = [];
	var i = 1;
	var serial ="";
	var id ="";
	var employee ="";
	var department ="";



	while (true) {
		
	serial = "i_" + i + "_serial";
	id = "i_" + i + "_id";
	employee = "i_" + i + "_employee";			
	department = "i_" + i + "_department";
	
		


		if (!$('input[name="' + serial + '"]').length) {
      break;
}
		var dat1= $('input[name="' + serial + '"]').val();
		var dat2= $('input[name="' + id + '"]').val();
		var dat3= $('input[name="' + employee + '"]').val();
		var dat4= $('input[name="' + department + '"]').val();
		
		

		var row = i;
		var jsonObj = {"0":"","1":dat1,"2": dat2 , "3": dat3 , "4": dat4 ,"DT_RowId": row};
		
		i++;
		dataSet.push(jsonObj);
	}

	$('#activity1').DataTable({
		data : dataSet,
		
		columns : [  {"title" : ""},
				{ "title": "Serial.No" },
			   { "title": "ID" },
			   { "title": "Employee" },			   
			   { "title": "Department" }
			   
			  
			   

		],

		'columnDefs' : [
				{
					
					    "targets": "0",

					
					'checkboxes' : {
						'selectRow' : true,
						"scrollX": true
					}
					
				},
				{
	                "targets": [0],
	                "visible": false
	            }
				
				],
		"scrollY" : "750px",
		"scrollCollapse" : true,
		"paging" : true,
		'select' : {
			'style' : 'os'

		},

		
		"bPaginate" : true,
		"bFilter" : true,
		"bInfo" : true,
		"ordering": true,
		

	
	});
	var table = $('activity1').DataTable();
	}
	
	
	//alert( 'Clicked row value '+value );
