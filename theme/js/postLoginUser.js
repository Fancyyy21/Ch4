import { postWithToken } from "./api.js";
import { setInner,getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookie.js";

export default function LoginUser(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/Befous-LoginUser";
    let tokenkey = "token";
    let tokenvalue = "9815a916179f9bc2a6316aab568a99362ffbe2e03dbeceebeff41a5038174e60";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}

function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    setCookieWithExpireHour("username", getValue("username"), 2);
    if (result.message == "Password Salah") {
        alert("Password Salah");
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "../gis1/";
    }
}