/**
 * 	
 * Pure javascript cookie notice 2018 by Michael Hudault, https://hudault.de
 * css for styling in /cookie_notice/cookie_notice.css
 * 
 * Without-any-warranty-do-whatever-you-want licence
 *
 */

window.onload = function(e)
	{ 
		
		if(document.cookie.indexOf('COOKIES_ACCEPTED') >= 0) 
			{
			/* Nothing to do. Cookies already accepted */
			}
		else
			{

			function accept_cookies()
				{
					
				// Set cookie
				var d = new Date();
				d.setTime( d.getTime() + ((30 * 24 * 60 * 60 * 1000) + 30) );
				var expires = "expires=" + d.toGMTString();
					
				document.cookie = "COOKIES_ACCEPTED=1;" + expires + ";path=/";

				// Hide notice
				document.getElementById('cookie_notice_container').style.display = "none";
				return false;
				
				}

			
			// Create cookie notice div
			var cookie_notice_container = document.createElement("div"); 
			
			// Add id and css class to cookie notice div
			cookie_notice_container.setAttribute("id", "cookie_notice_container");
			cookie_notice_container.setAttribute("class", "cookie-notice-container");

			/* Start Content */

			var cookie_notice_content = "";
			
			// Insert logo if any, Logo src - "" == none, otherwise path to image
			var logo_src = "";
			
			if(logo_src != "")
				{
				cookie_notice_content += '<img src="'+logo_src+'" class="cookie-notice-logo">';	
				}
			
			/* Text */
			
			cookie_notice_content += '<div class="cookie-notice-headline">Meine Webseite verwendet Cookies</div>';
			
			cookie_notice_content += '<p>Ich verwende Cookies um Funktionen für soziale Medien bereitstellen zu können und um die Zugriffe auf meine Website zu analysieren.</p>';
				
			cookie_notice_content += '<p>Indem Sie auf -Ja, ich stimme zu- klicken oder meine Webseite weiter nutzen stimmen Sie der Verwendung meiner Cookies zu.</p>';
			
			cookie_notice_content += '<p>Weitere Informationen, auch wie Sie die Verwendung von Cookies unterbinden k&ouml;nnen, entnehmen Sie bitte meiner <a href="/datenschutz" class="cookie-notice-privacy-link">Datenschutzerkl&auml;rung</a>.</p>';
				
			cookie_notice_content += '<div class="cookie-notice-buttons"><a href="#" id="cookie_notice_button_accept" class="cookie-notice-button-accept">Ja, ich stimme zu</a></div>';

			/* End Content */

			/* Transfer content to cookie notice div */

			cookie_notice_container.innerHTML = cookie_notice_content;
			
			/* Add cookie notice div to document (insert before child) */
			
			// Display cookie notice div (recommended for Themify Ultra sticky header)
			// var use_child = document.getElementById('headerwrap');

			// Default: Display cookie notice directly after body tag
			var use_child = document.body.firstChild;
			
			// Display notice
			use_child.parentNode.insertBefore(cookie_notice_container, use_child);
			
			// Bind click-accept-event to accept-button
			document.getElementById('cookie_notice_button_accept').addEventListener('click', function() {
				accept_cookies();
				});
			
			}
		
	}

