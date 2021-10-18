$(document).ready(function()
	{
		$("button").click(function()
		{
			var fname=$("#fname").val();
			var lname=$("#lname").val();
			var emailid=$("#mymail").val();
			var pass=$("#pswrd").val();
			var conpass=$("#cnfpswrd").val();

		var regex = /^[A-Za-z0-9]+$/;
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(emailid);

		if(fname=="")
		{
			$("#lab1").show();
			$("#label").hide();
		}

		else
		{
			$("#lab1").hide();

			if(!regex.test(fname))
			{
				$("#lab1").hide();
				$("#label").show();
			}

			else
			$("#label").hide();

		}

		

		if(lname=="")
		{
			$("#lab2").show();
			$("#errorsecond").hide();
		}
		else{

			$("#lab2").hide();

			if(!regex.test(fname))
			{
				$("#errorsecond").show();
				$("#lab2").hide();
			}
			else
			$("#errorsecond").hide();

		}

		
		if(emailid=="")
		{
			$("#lab3").show();
			$("#err").hide();
		}
		else
		{
			$("#lab3").hide();
		if(!is_email)
			$("#err").show();
		else
			$("#err").hide();
		}
		
	

		if(pass==""){

			$("#lab4").show();
			$("#len").hide();
		}
		else
		{
			$("#lab4").hide();
			if(pass.length<6)
				$("#len").show();
			else
				$("#len").hide();
		}

		if(conpass=="")
			$("#lab5").show();
		else
			$("#lab5").hide();

		if(pass!=conpass)
			$("#lab6").show();
		else
			$("#lab6").hide();

		});


	});
