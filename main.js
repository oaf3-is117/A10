
const setCookie = (key, value, days = null, path = "/") => {
	let cookie = `${key}=${value};`
	
	const currentDate = new Date()
	currentDate.setTime(currentDate.getTime() + (days * 24 * 60 * 60 * 1000));
	cookie += `${days ? `expires=${currentDate.toUTCString()};` : ``}`

	cookie += `path=${path}`

	document.cookie = cookie
}

const getCookie = (key) => {
	const cookies = document.cookie.split(';')

	return cookies.find(cookie => {
		return cookie.trim().split('=')[0] === key
	}) ?? null;
}
const checkCookies = (div = document.createElement("div")) => {
	if (!getCookie("cookie")){
		let secretPassword = prompt("Please enter the secret password:")
		setCookie("cookie", secretPassword)

		window.location.reload()
	}
	else {
		div.textContent = `the secret password is ${getCookie("cookie").split("=").slice(-1)}`
	}
}
const div = document.querySelector("#cookie")
document.querySelector("button").addEventListener("click", () => {
	setCookie("cookie", "test", -1)
	window.location.reload()
})
checkCookies(div)
console.log(document.cookie)
