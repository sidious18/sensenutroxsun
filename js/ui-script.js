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
	var marketingPillsAll = ".navigation-pills div";
	var marketingActiveTab = "active";
	var companiesBlock = '.companies-block';
	var campaignsBlock = ".campaigns-block";
	var campaignsReport = ".campaigns-report";
	var marketingTitle = ".navigation-title";

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

function initContentFilters(){

	var switcherButton = ".button-switcher";
	var listSwitcherButton = ".campaign-list-switcher-button";
	var contentTableElement = ".content-table-list-element";
	var enabled = "enabled";
	var disabled = 'disabled';
	var idSortButton = ".content-table-list-top .content-table-list-id";
	var nameSortButton = ".content-table-list-top .content-table-list-name";
	var priorityButton = ".content-table-list-top .content-table-list-qr.priority";
	var switcherSortButton = ".content-table-list-top .content-table-list-switcher";
	var contentTableListTextFilterID = "$(this).find('.content-table-list-id').text()";
	var contentTableListTextFilterName = "$(this).find('.content-table-list-name').text()";

	var priorityInputs = $(".content-table-block.campaign-block .content-table-list-element .content-table-list-qr.priority input");

	var priorityInputsSelector = ".content-table-block.campaign-block .content-table-list-element .content-table-list-qr.priority input";

	var contentTableListTextFilterName = "$(this).find('.content-table-list-name').text()";
	var contentTableListFitlerSwitcher = "$(this).hasClass('enabled')";
	var contentTableListHolder = '.content-table-list-holder';
	var contentTableElementBox = '.content-table-list-elements-box';
	var sortedByID = true;
	var sortedByName = true;
	var sortedByStatus = true;
	var sortedByPriority = true;

	$(switcherButton).click(function(){

		var switcherButtonTrigger = $(this).hasClass('button-disabled');

		if(!switcherButtonTrigger){
			$(this).find('.button-switcher-on').css("left","-100%");
			$(this).find('.button-switcher-off').css("left","0");
			$(this).closest(contentTableElement).addClass(disabled);
			$(this).closest(contentTableElement).removeClass(enabled);
			$(this).closest(contentTableElement).find(priorityInputs).attr('disabled',true);
			$(this).parent().attr("data-content", "Off");
			$(this).addClass("button-disabled");
		}
		else{
			$(this).find('.button-switcher-on').css("left","0");
			$(this).find('.button-switcher-off').css("left","100%");
			$(this).closest(contentTableElement).addClass(enabled);
			$(this).closest(contentTableElement).removeClass(disabled);
			$(this).closest(contentTableElement).find(priorityInputs).attr('disabled',false);
			$(this).parent().attr("data-content", "On");
			$(this).removeClass("button-disabled");
		}
	});

	$(idSortButton).click(function(){
    	if(sortedByID){
	    	var sortByID = $.sortFunc([contentTableListTextFilterID]);
        }
        else{
        	var sortByID = $.sortFunc([contentTableListTextFilterID+"::reverse"]);
        }
        sortedByID = !sortedByID;
        
        $(this).closest(contentTableListHolder).next(contentTableElementBox).sortChildren(sortByID);
    })

    $(nameSortButton).click(function(){
    	if(sortedByName){
	    	var	sortByName = $.sortFunc([contentTableListTextFilterName]);
	    }
	    else{
	    	var	sortByName = $.sortFunc([contentTableListTextFilterName+"::reverse"]);
	    }
	    sortedByName = !sortedByName;
        $(this).closest(contentTableListHolder).next(contentTableElementBox).sortChildren(sortByName);
    })

    $(switcherSortButton).click(function(){
    	if(sortedByStatus){
    		var	sortByStatus = $.sortFunc([contentTableListFitlerSwitcher+"::reverse"]);
    	}
    	else{
    		var	sortByStatus = $.sortFunc([contentTableListFitlerSwitcher]);
    	}
    	sortedByStatus = !sortedByStatus;
        $(this).closest(contentTableListHolder).next(contentTableElementBox).sortChildren(sortByStatus);
    })

    $(priorityButton).click(function(){
		var sortedList = [];

		priorityInputs.sort(function(a,b){
			var an = $(a).val(),
				bn = $(b).val();

			return an - bn

		});

		for(i=0; i < priorityInputs.length; i++){
			sortedList.push(priorityInputs.eq(i).closest(contentTableElement));
		}
		$(contentTableElementBox).html("");

		if(sortedByPriority){
			$(contentTableElementBox).append(sortedList);
		}
		else{
			$(contentTableElementBox).append(sortedList.reverse());	
		}

		sortedByPriority = !sortedByPriority;
    });

    for(i=0; i<priorityInputs.length; i++){
    	priorityInputs[i].oninput = function(){
    		var lastSymbol = this.value.substr(this.value.length - 1);
    		if(isNaN(lastSymbol)){
    			this.value = this.value.slice(0, -1);   		}
    	};
    }

}

$(document).ready(function(){

	initLoginPage();

	initMarketingTabs();

	initContentFilters();

	initFilter('companies-filter', '.companies-block .content-table-list', ".content-table-list-element", ".content-table-list-id, .content-table-list-name");
    initFilter('campaigns-filter', '.campaigns-block .content-table-list', ".content-table-list-element", ".content-table-list-id, .content-table-list-name");

	$(".profile-box-field.reset-password").click(function(){
		$("#modal-password-box").modal({
		  fadeDuration: 300
		});
	});

});