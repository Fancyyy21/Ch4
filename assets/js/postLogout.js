import { deleteCookie } from "./cookie.js";

export default function Logout() {
    deleteCookie();
    alert("Berhasil Logout");
}