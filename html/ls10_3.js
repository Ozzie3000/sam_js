function CreateCookie(name, value, days, path, domain, secure){
			if (days){
				var date = new Date();
				date.setTime( date.getTime() + (das*24*60*60*1000));
				var expires = date.toGMTString();
			}
			else var expires = "";
			cookieString = name + "=" + escape (value);
			if (expires) cookieString += "; expires=" + expires;
			if (path) cookieString += "; path=" + escape (path);
			if (domain) cookieString += "; domain=" + escape (domain);
			if (secure) cookieString += "; secure=";
			document.cookie = cookieString;
		}

		function getCookie(name){
			var nameIs = name + "=";
			var crumbs = document.cookie.split(';');
			for (var i=0; i< crumbs.length; i++){
				var crumb = crumbs[i];
				if (crumb.indexOf(nameIs) ==0){
					return unescape(crumb.substring(nameIs.length,crumb.length));
				}
			}
			return null;
		}

		function deleteCookie(name){
			CreateCookie(name, "", -1);
		}