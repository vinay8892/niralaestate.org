 
  document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});


	 jQuery("#InqueryForm_Submit").click(function(){
		    if (!jQuery("#InqueryForm").valid())
			{
			   return false;
			}
            var sname=jQuery('#InqueryForm_Name').val()
			var smobile=jQuery('#InqueryForm_Mobile').val()
			var semail='No Email.'
			var sUrl=''
			sUrl='https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads'		
			jQuery("#pageloader").fadeIn();
			var d = new Date();
            jQuery.ajax({
                url: sUrl,
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaEstate2'

                },
                success: function (data) {
				     jQuery("#pageloader").fadeOut();
					  jQuery('#InqueryForm_Name').val('');
					  jQuery('#InqueryForm_Mobile').val('');
					 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');				    
                },
                error: function () {
				     jQuery("#pageloader").fadeOut();
					  jQuery('#InqueryForm_Name').val('');
					  jQuery('#InqueryForm_Mobile').val('');					 
					 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  

	 	   jQuery("#AvailtheoffersNow").click(function(){
		    if (!jQuery("#main-popup").valid())
			{
			   return false;
			}
            var sname=jQuery('#POPUPName').val()
			var smobile=jQuery('#POPUPMobile').val()
			var semail='No Email.'
			var sUrl=''
			sUrl='https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads'		
			jQuery("#pageloader").fadeIn();
			var d = new Date();
            jQuery.ajax({
                url: sUrl,
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaEstate2'

                },
                success: function (data) {
				     jQuery("#pageloader").fadeOut();
					 jQuery('#main-pop').modal('hide');
					 
					 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');				    
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();				   
					 jQuery('#main-pop').modal('hide');
					 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		  jQuery("#PricingQuerySubmit").click(function(){
			if (!jQuery("#price-popup").valid())
			{
			   return false;
			}
            var sname=jQuery('#PriceName').val()
			var smobile=jQuery('#PriceMobile').val()
			var semail='No Email.'
			jQuery("#pageloader").fadeIn();
			var d = new Date();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads',
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaEstate2'

                },
                success: function () {
				      jQuery("#pageloader").fadeOut();
                      jQuery('#price-model').modal('hide');
					  
                      window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();
                   jQuery('#price-model').modal('hide');
				 
                   window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		  jQuery("#interestedCustomer").click(function(){
		    if (!jQuery("#float-form").valid())
			{
			   return false;
			}
            var sname=jQuery('#interestedName').val()
			var smobile=jQuery('#interestedMobile').val()
			var semail=jQuery('#interestedEmail').val()
			jQuery("#pageloader").fadeIn();
			var d = new Date();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads',
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaEstate2'

                },
                success: function () {
				      jQuery("#pageloader").fadeOut();
                      jQuery('#interested-model').modal('hide');
					  
                      window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();
                   jQuery('#interested-model').modal('hide');
				   
                   window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		 jQuery('#sendMessage').click(function(){
		    if (!jQuery("#contact-form").valid())
			{
			   return false;
			}
            var scontactName=jQuery('#fnameContactUs').val() + ' ' + jQuery('#lnameContactUs').val()
			var scontactPhone=jQuery('#mobileContactUs').val()
			var scontactEmail=jQuery('#emailContactUs').val()
			var scontactMessage=jQuery('#messageContactUs').val()
			jQuery("#pageloader").fadeIn();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/ContactData',
                method: 'POST',
                data: {
					name: scontactName,
                    mobile: scontactPhone,
                    email: scontactEmail,
                    message: scontactMessage,
                    projectName:'NiralaEstate2'
                },
                success: function () {
                      jQuery("#pageloader").fadeOut();
                      window.alert('Thank you for contacting us. Soon we will reply to your query');
					  jQuery('#fnameContactUs').val('');
					  jQuery('#lnameContactUs').val('');
					  jQuery('#mobileContactUs').val('');
					  jQuery('#emailContactUs').val('');
					  jQuery('#messageContactUs').val('');
                },
                error: function () {
                   jQuery("#pageloader").fadeOut();
                   window.alert('Thank you for contacting us. Soon we will reply to your query');
                }

            });
	      });
		  
function ReadMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}	  
		 