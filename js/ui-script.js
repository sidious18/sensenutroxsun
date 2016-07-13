$(document).ready(function(){
	var loginPageTrigger = true;
	$(".login-page-form-footer-link span").click(function(){
		if(loginPageTrigger){
			$(".login-form").hide();
			$(".password-form").show();
		}
		else{
			$(".login-form").show();
			$(".password-form").hide();
		}
		loginPageTrigger = !loginPageTrigger;
	});
});