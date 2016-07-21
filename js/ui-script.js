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

	var numberFilter = "[number-filter]";
	

	var contentTableListTextFilterName = "$(this).find('.content-table-list-name').text()";
	var contentTableListFitlerSwitcher = "$(this).hasClass('enabled')";
	var contentTableListHolder = '.content-table-list-holder';
	var contentTableElementBox = '.content-table-list-elements-box';

	var campaignDatepicker = '.campaign-menu-datepicker-input';
	var datePicker = ".date-picker";
	var hourPicker = ".hour-picker";
	var temperatureInput = ".report-content-box.temperature ";

	var airQualityInput = ".report-content-box.air-quality .report-content-box-inputs-text";

	var airHumidityInput = ".report-content-box.air-humidity .report-content-box-inputs-text";

	var temperatureInput = ".report-content-box.temperature .report-content-box-inputs-text";

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

    $(numberFilter).bind("keydown",function(e){
    	var inputedSymbol = String.fromCharCode(e.keyCode); 
    	var trigger = /^[0-9]+$/.test(inputedSymbol);

    	//check ctrl + number

    	for(i = 48; i <= 57; i++){
    		if(e.shiftKey && e.keyCode == i){
    			return false
    		}
    	}

    	//check numpad

    	for(i = 96; i <= 105; i++){
    		if(e.keyCode == i){
    			return true
    		}
    	}

    	if((e.keyCode != 46) && (e.keyCode != 17) && (e.keyCode != 18) && (e.keyCode != 27) && (e.keyCode != 9) &&
    		(e.keyCode != 37) && (e.keyCode != 39) && (e.keyCode != 20) && (e.keyCode != 13)  && (e.keyCode != 8) && (!e.ctrlKey)){
	    	if(!trigger) {
	    		e.preventDefault();
	    	}

	    }
    });

    $(campaignDatepicker).datepicker();
    $(datePicker).datepicker();

    $(hourPicker).on('blur keydown', function(e){
    	if(e.keyCode == 13 || e.type == "blur"){
	    	var removedDots = $(this).val().replace(':','');
	    	if(isNaN(removedDots) || removedDots == ""){
	    		$(this).val(12+":"+30);
	    		return
	    	}
	    	var hour = $(this).val().split(":")[0];
	    	var minute = $(this).val().split(":")[1];
	    	if(hour.charAt(0) == 0){
	    		hour = hour.substr(1);
	    	}
	    	if(minute != undefined){
		    	if(minute.charAt(0) == 0){
		    		minute = minute.substr(1);
		    	}

	    	}
	    	if(hour < 0 || hour >= 24){
	    		hour = 12;
	    	}
	    	if(hour >= 0 && hour <= 9){
	    		hour = "0"+hour;
	    	}
	    	if(minute <= 0 || minute > 59 || minute=== undefined){
	    		minute = 0;
	    	}
	    	if(minute >= 0 && minute <= 9){
	    		minute = "0"+minute;
	    	}
	    	$(this).val(hour+":"+minute);
	    }
    	
    });

    $(airQualityInput).blur(function(){
    	if($(this).val() < 0 || $(this).val() > 500){
    		$(this).val(150);
    	}
    })

    $(airHumidityInput).blur(function(){
    	if($(this).val() < 0 || $(this).val() > 100){
    		$(this).val(40);
    	}
    })

    $(temperatureInput).blur(function(){
    	var checkValue = parseInt($(this).val());

    	if(isNaN(checkValue)){
    		$(this).val(20);
    		return
    	}

    	$(this).val(checkValue);

    })

}


function mapEvents(){

	var xCoordInput = ".report-content-box-coordinates-text.x-coord";
	var yCoordInput = ".report-content-box-coordinates-text.y-coord";
	var ratioInput = ".report-content-box-coordinates-ratio";
	var xCoordBool = true;
	var yCoordBool = true;
	var ratioBool = true;
	var xCoord = parseFloat($(xCoordInput).val());
	var yCoord = parseFloat($(yCoordInput).val());
	var ratio = parseInt($(ratioInput).val());
	var mapColor = $(".button-switcher .button-switcher-on").css("background-color");
	var marker;
	var myMarker;
	var map;


	function initMap(){
		var myLatLng = {lat:yCoord, lng: xCoord};

		if(!xCoord){
			myLatLng.lng = -0.124465;
		}
		if(!yCoord){
			myLatLng.lat = 51.500702;
		}		
		var mapProp = {
		    center:myLatLng,
		    zoom:12,
		    mapTypeId:google.maps.MapTypeId.ROADMAP,
		    scrollwheel:false,
			disableDefaultUI:false
		};

		map=new google.maps.Map(document.getElementById("report-map"),mapProp);
		
			marker = new google.maps.Marker({
			    position: myLatLng,
			    map: map,
			});
			myMarker = new google.maps.Circle({
				center:myLatLng,
				radius:ratio*1000,
				strokeColor:mapColor,
				strokeOpacity:0.8,
				strokeWeight:2,
				fillColor:mapColor,
				fillOpacity:0.2
			});
		if(xCoord && yCoord){
			myMarker.setMap(map);
		}
		else{
			marker.setMap(null);
		}
	}

	initMap();

	function checkCoordDiapason(coordInput, min, max){
		if( isNaN($(coordInput).val()) || $(coordInput).val() < min ||  $(coordInput).val() > max){
    		$(coordInput).val("Not valid coordinate");
    		return false
    	}
    	return true
	}

	function renderMarker(){
		if(xCoordBool && yCoordBool && $(xCoordInput).val() != "" && $(yCoordInput).val() != ""){
    		marker.setMap(null);
    		myMarker.setMap(null);

    		marker = new google.maps.Marker({
			    position: {lat:yCoord, lng: xCoord},
			    map: map
			});

			myMarker = new google.maps.Circle({
				center:{lat:yCoord, lng: xCoord},
				radius:ratio*1000,
				strokeColor:mapColor,
				strokeOpacity:0.8,
				strokeWeight:2,
				fillColor:mapColor,
				fillOpacity:0.2
			});

			myMarker.setMap(map);

    		map.setCenter({lat:yCoord, lng: xCoord});
    	}
	}

	$(xCoordInput).on('keypress blur', function(e) {
		if(e.keyCode == 13 || e.type == "blur"){
		    if(checkCoordDiapason(this,-85,85)){
	    		xCoordBool = true;
	    		xCoord = parseFloat($(this).val());
	    		renderMarker();
	    	}
	    	else{
	    		xCoordBool = false;
	    	}
    	}
	});

	$(yCoordInput).on('keypress blur', function(e) {
		if(e.keyCode == 13 || e.type == "blur"){
	    	if(checkCoordDiapason(this,-180,180)){
	    		yCoordBool = true;
	    		yCoord = parseFloat($(this).val());
	    		renderMarker();
	    	}else{
	    		yCoordBool = false;
	    	}

    	}
    })

    $(ratioInput).on('keypress blur', function(e) {
    	if(e.keyCode == 13 || e.type == "blur"){
	    	if( isNaN($(this).val())){
 		   		$(this).val(2);
   		 	}
   		 	if( $(this).val() > 10000000 || $(this).val()==""){
    			$(this).val(4);
    		}
    		ratio = parseInt($(this).val());
    		renderMarker();
    	}
    });


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

	mapEvents();

});