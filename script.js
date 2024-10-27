const form = document.getElementById("form")
const output = document.getElementById("result")
const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"

form.onsubmit = generatePassword
generatePassword()

function generatePassword(e) {
    e.preventDefault()
    const length = form.length.valueAsNumber
    let password = ""

    for (let i = 0; i < length; i++) {
        const i = rnd(chars.length)
        const char = chars[i]

        password += char
    }

    output.value = password
}

function rnd(limit) {
    return Math.floor(Math.random()* limit)
}