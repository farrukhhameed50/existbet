function uniqueID(){
  function chr4(){
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() + chr4() + chr4();
}

function registration(){
    var data			={};
    data.user_id		= uniqueID();
    data.full_name		= $("#full_name").val();
    data.user_name		= $("#user_email").val();
    data.user_password 	= $("#password").val();
	data.user_contact	= '';
	data.user_email		= $("#user_email").val();
	data.user_status	= 'Active';
	
    console.log(data);
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/registration',						
        complete : function(xhr) {
            alert(xhr.responseJSON);
        }
    });
}