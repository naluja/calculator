const display = document.querySelector(".display")
const currentNumber = document.querySelector(".current-number")
const previousNumber = document.querySelector(".previous-number p")
const mathSign = document.querySelector(".math-sign")
const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator")
const equalBtn = document.querySelector(".equal")
const resetBtn = document.querySelector(".reset")
const delBtn = document.querySelector(".del")

const slider = document.querySelector(".slider")
const linkTheme = document.querySelector("#link-theme")

let result = ""

function displayDigit() {
	if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return

	if (this.textContent === "." && currentNumber.innerHTML === "")
		return (currentNumber.innerHTML = ".0")

	currentNumber.innerHTML += this.textContent
}
const displayResult = () => {
	if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return

	let x = Number(currentNumber.innerHTML)
	let y = Number(previousNumber.innerHTML)
	let operator = mathSign.innerHTML

	switch (operator) {
		case "+":
			result = x + y
			break
		case "-":
			result = y - x
			break
		case "/":
			result = y / x
			break
		case "x":
			result = x * y
			break
	}
	previousNumber.innerHTML = ""
	mathSign.innerHTML = ""
	currentNumber.innerHTML = result
}
function operate() {
	if (currentNumber.innerHTML === "" && this.textContent === "-") {
		currentNumber.innerHTML = "-"
		return
	} else if (currentNumber.innerHTML === "") {
		return
	}
	if (mathSign.innerHTML !== "") {
		displayResult()
	}
	previousNumber.innerHTML = currentNumber.innerHTML
	mathSign.innerHTML = this.textContent
	currentNumber.innerHTML = ""
}
const reset = () => {
	result = ""
	previousNumber.innerHTML = ""
	mathSign.innerHTML = ""
	currentNumber.innerHTML = ""
}

const del = () => {
	if (currentNumber.textContent !== "0") {
		currentNumber.textContent = currentNumber.textContent.slice(
			0,
			currentNumber.textContent.length - 1
		)
	}
}
const themeChange = () => {
   if (slider.value == 1){
	linkTheme.setAttribute('href', '')
	console.log(slider.value)
   }
   else if (slider.value == 2){
	linkTheme.setAttribute('href', 'css/theme2.css')
   }
   else {
	linkTheme.setAttribute('href', 'css/theme3.css')
   }
}


operators.forEach(operator => operator.addEventListener("click", operate))
equalBtn.addEventListener("click", displayResult)
resetBtn.addEventListener("click", reset)
digits.forEach(digit => digit.addEventListener("click", displayDigit))
delBtn.addEventListener("click", del)
slider.addEventListener("click", themeChange)

