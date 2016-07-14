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

	$(".campaigns-link").click(function(){
		$(".marketing-pills div").removeClass("active");
		$(this).addClass('active');
		$('.companies-block').hide();
		$(".campaigns-report").hide();
		$(".campaigns-block").show();
	});
	
	$(".reports-link").click(function(){
		$(".marketing-pills div").removeClass("active");
		$(this).addClass('active');
		$('.companies-block').hide();
		$(".campaigns-block").hide();
		$(".campaigns-report").show();
	});

	$('.companies-link').click(function(){
		$(".marketing-pills div").removeClass("active");
		$(this).addClass('active');
		$(".campaigns-report").hide();
		$(".campaigns-block").hide();
		$('.companies-block').show();
	});

	$(".campaigns-list-switcher-button").click(function(){
		var switcherButtonTrigger = $(this).closest(".campaings-list-element").hasClass('enabled');


		if(switcherButtonTrigger){
			$(this).find('.on').css("left","-100%");
			$(this).find('.off').css("left","0");
			$(this).closest(".campaings-list-element").addClass("disabled");
			$(this).closest(".campaings-list-element").removeClass("enabled");
		}
		else{
			$(this).find('.on').css("left","0");
			$(this).find('.off').css("left","100%");
			$(this).closest(".campaings-list-element").addClass("enabled");
			$(this).closest(".campaings-list-element").removeClass("disabled");
		}
	});

	var sortedByID = true;
	var sortedByName = true;
	var sortedByStatus = true;

    $(".campaigns-list-top .campaigns-list-id").click(function(){
    	if(sortedByID){
	    	var sortByID = $.sortFunc(["$(this).find('.campaigns-list-id').text()"]);
        }
        else{
        	var sortByID = $.sortFunc(["$(this).find('.campaigns-list-id').text()::reverse"]);
        }
        sortedByID = !sortedByID;
        console.log($(this).closest('.campaigns-list-holder').next('.campaings-list-elements-box'));
        
        $(this).closest('.campaigns-list-holder').next('.campaings-list-elements-box').sortChildren(sortByID);
    })

    $(".campaigns-list-top .campaigns-list-name").click(function(){
    	if(sortedByName){
	    	var	sortByName = $.sortFunc(["$(this).find('.campaigns-list-name').text()"]);
	    }
	    else{
	    	var	sortByName = $.sortFunc(["$(this).find('.campaigns-list-name').text()::reverse"]);
	    }
	    sortedByName = !sortedByName;
        $(this).closest('.campaigns-list-holder').next('.campaings-list-elements-box').sortChildren(sortByName);
    })

    $(".campaigns-list-top .campaigns-list-switcher").click(function(){
    	if(sortedByStatus){
    		var	sortByStatus = $.sortFunc(["$(this).hasClass('enabled')::reverse"]);
    	}
    	else{
    		var	sortByStatus = $.sortFunc(["$(this).hasClass('enabled')"]);
    	}
    	sortedByStatus = !sortedByStatus;
        $(this).closest('.campaigns-list-holder').next('.campaings-list-elements-box').sortChildren(sortByStatus);
    })


    initFilter('campaigns-filter', 'campaigns-list');

    initFilter('companies-filter', 'companies-list');

});