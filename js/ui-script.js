function initLoginPage(){
	var loginPageTrigger = true;
	var loginPageTriggerLink = ".login-page-form-footer-link span";
	var loginForm = ".login-form";
	var passwordForm = ".password-form";
	$(loginPageTriggerLink).click(function(){
		if(loginPageTrigger){
			$(loginForm).hide();
			$(passwordForm).show();
		}
		else{
			$(loginForm).show();
			$(passwordForm).hide();
		}
		loginPageTrigger = !loginPageTrigger;
	});
}


function initMarketingTabs(){

	var campaignsLink = ".campaigns-link";
	var reportsLink = ".reports-link";
	var companiesLink = ".companies-link";
	var marketingPillsAll = ".marketing-pills div";
	var marketingActiveTab = "active";
	var companiesBlock = '.companies-block';
	var campaignsBlock = ".campaigns-block";
	var campaignsReport = ".campaigns-report";
	var marketingTitle = ".marketing-title";

	$(campaignsLink).click(function(){
		$(marketingPillsAll).removeClass(marketingActiveTab);
		$(this).addClass(marketingActiveTab);
		$(companiesBlock).hide();
		$(campaignsReport).hide();
		$(campaignsBlock).show();
		$(marketingTitle).text('MARKETING CAMPAIGNS');
	});
	
	$(reportsLink).click(function(){
		$(marketingPillsAll).removeClass(marketingActiveTab);
		$(this).addClass(marketingActiveTab);
		$(companiesBlock).hide();
		$(campaignsBlock).hide();
		$(campaignsReport).show();
		$(marketingTitle).text('REPORTS');
	});

	$(companiesLink).click(function(){
		$(marketingPillsAll).removeClass(marketingActiveTab);
		$(this).addClass(marketingActiveTab);
		$(campaignsReport).hide();
		$(campaignsBlock).hide();
		$(companiesBlock).show();
		$(marketingTitle).text('COMPANIES');
	});
}

function initCampaignsListFunctions(){

	var switcherButton = ".campaigns-list-switcher-button";
	var campaignElement = ".campaigns-list-element";
	var enabled = "enabled";
	var disabled = 'disabled';
	var idSortButton = ".campaigns-list-top .campaigns-list-id";
	var nameSortButton = ".campaigns-list-top .campaigns-list-name";
	var switcherSortButton = ".campaigns-list-top .campaigns-list-switcher";
	var campaignsListTextFilterID = "$(this).find('.campaigns-list-id').text()";
	var campaignsListTextFilterID = "$(this).find('.campaigns-list-name').text()";
	var campaignsListFitlerSwitcher = "$(this).hasClass('enabled')";
	var campaignsListHolder = '.campaigns-list-holder';
	var campaignsElementBox = '.campaigns-list-elements-box';
	var sortedByID = true;
	var sortedByName = true;
	var sortedByStatus = true;


	$(switcherButton).click(function(){
		var switcherButtonTrigger = $(this).closest(campaignElement).hasClass(enabled);
		if(switcherButtonTrigger){
			$(this).find('.on').css("left","-100%");
			$(this).find('.off').css("left","0");
			$(this).closest(campaignElement).addClass(disabled);
			$(this).closest(campaignElement).removeClass(enabled);
		}
		else{
			$(this).find('.on').css("left","0");
			$(this).find('.off').css("left","100%");
			$(this).closest(campaignElement).addClass(enabled);
			$(this).closest(campaignElement).removeClass(disabled);
		}
	});


	$(idSortButton).click(function(){
    	if(sortedByID){
	    	var sortByID = $.sortFunc([campaignsListTextFilterID]);
        }
        else{
        	var sortByID = $.sortFunc([campaignsListTextFilterID+"::reverse"]);
        }
        sortedByID = !sortedByID;
        
        $(this).closest(campaignsListHolder).next(campaignsElementBox).sortChildren(sortByID);
    })

    $(nameSortButton).click(function(){
    	if(sortedByName){
	    	var	sortByName = $.sortFunc([campaignsListTextFilterID]);
	    }
	    else{
	    	var	sortByName = $.sortFunc([campaignsListTextFilterID+"::reverse"]);
	    }
	    sortedByName = !sortedByName;
        $(this).closest(campaignsListHolder).next(campaignsElementBox).sortChildren(sortByName);
    })

    $(switcherSortButton).click(function(){
    	if(sortedByStatus){
    		var	sortByStatus = $.sortFunc([campaignsListFitlerSwitcher+"::reverse"]);
    	}
    	else{
    		var	sortByStatus = $.sortFunc([campaignsListFitlerSwitcher]);
    	}
    	sortedByStatus = !sortedByStatus;
        $(this).closest(campaignsListHolder).next(campaignsElementBox).sortChildren(sortByStatus);
    })
}

function initCompaniesListFunctions(){

	var switcherButton = ".companies-list-switcher-button";
	var companyElement = ".companies-list-element";
	var enabled = "enabled";
	var disabled = 'disabled';
	var idSortButton = ".companies-list-top .companies-list-id";
	var nameSortButton = ".companies-list-top .companies-list-name";
	var switcherSortButton = ".companies-list-top .companies-list-switcher";
	var companiesListTextFilterID = "$(this).find('.companies-list-id').text()";
	var companiesListTextFilterID = "$(this).find('.companies-list-name').text()";
	var companiesListFitlerSwitcher = "$(this).hasClass('enabled')";
	var companiesListHolder = '.companies-list-holder';
	var companiesElementBox = '.companies-list-elements-box';
	var sortedByID = true;
	var sortedByName = true;
	var sortedByStatus = true;


	$(switcherButton).click(function(){
		var switcherButtonTrigger = $(this).closest(companyElement).hasClass(enabled);
		if(switcherButtonTrigger){
			$(this).find('.on').css("left","-100%");
			$(this).find('.off').css("left","0");
			$(this).closest(companyElement).addClass(disabled);
			$(this).closest(companyElement).removeClass(enabled);
		}
		else{
			$(this).find('.on').css("left","0");
			$(this).find('.off').css("left","100%");
			$(this).closest(companyElement).addClass(enabled);
			$(this).closest(companyElement).removeClass(disabled);
		}
	});


	$(idSortButton).click(function(){
    	if(sortedByID){
	    	var sortByID = $.sortFunc([companiesListTextFilterID]);
        }
        else{
        	var sortByID = $.sortFunc([companiesListTextFilterID+"::reverse"]);
        }
        sortedByID = !sortedByID;
        
        $(this).closest(companiesListHolder).next(companiesElementBox).sortChildren(sortByID);
    })

    $(nameSortButton).click(function(){
    	if(sortedByName){
	    	var	sortByName = $.sortFunc([companiesListTextFilterID]);
	    }
	    else{
	    	var	sortByName = $.sortFunc([companiesListTextFilterID+"::reverse"]);
	    }
	    sortedByName = !sortedByName;
        $(this).closest(companiesListHolder).next(companiesElementBox).sortChildren(sortByName);
    })

    $(switcherSortButton).click(function(){
    	if(sortedByStatus){
    		var	sortByStatus = $.sortFunc([companiesListFitlerSwitcher+"::reverse"]);
    	}
    	else{
    		var	sortByStatus = $.sortFunc([companiesListFitlerSwitcher]);
    	}
    	sortedByStatus = !sortedByStatus;
        $(this).closest(companiesListHolder).next(companiesElementBox).sortChildren(sortByStatus);
    })
}


$(document).ready(function(){

	initLoginPage();
	initMarketingTabs();

	initCampaignsListFunctions();
	initCompaniesListFunctions();

	initFilter('campaigns-filter', 'campaigns-list', ".campaigns-list-element", ".campaigns-list-id, .campaigns-list-name");
    initFilter('companies-filter', 'companies-list', ".companies-list-element", ".companies-list-id, .companies-list-name");

});