$(document).ready( function() {
		$('#stdsignupbtn').on('click', function() {
			//e.preventDefault();
			readStudentData();
		});
	});//ready functin end*/
function readStudentData(){
	var data={};
	//1st fieldset
	data.std_name=$("#name").val();
	data.std_fname=$("#faname").val();
	data.std_mname=$("#mname").val();
	data.std_addr=$("#praddr").val();
	data.std_no=$("#phno").val();
	data.std_gender=$('input[name="gender"]:checked').val();
	//2nd fieldset
	data.std_sem=$("#sem").val();
	data.std_course=$("#crs").val();
	data.std_examrollno=$("#examrollno").val();
	data.std_classrollno=$("#classrollno").val();
	data.std_regdno=$("#registrationno").val();
	//3rd fieldset
	data.std_email=$("#email").val();
	data.std_pwd=$("#pswd").val();
	data.std_cpwd=$("#cpwd").val();

	console.log(data);
	var signupReq = $.ajax({
		url: 'http://localhost:8083/student/signup/data',
		data: data,
		method:'POST',
		dataType: 'JSON'
	});

	signupReq.done(function(res){
		console.log("response is");
		console.log(res);
		if (res.msg == "success") {
			$("#stdSignupModal").modal(hide);
			$("#stdrgstrsuccesfulModal").modal(show);
			//alert("register succssfully");
		}
	});
}