import { getCookie} from "./cookie.js";

export default function checkCookie() {
    let user = getCookie("token");
    let username = getCookie("username");
	if (user != "") {
	alert("Welcome " + username);
	} else {
		alert("Biasakan login sebelum melakukan sesuatu");
		window.location.href="../login";
	}
}