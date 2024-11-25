function sayMyName(name) {
    return `${name}`
}

function verificationAge(age) {
    if (age >= 18) {
        console.log(`${sayMyName('Marquim')} Você é de maior`)
    } else {
        console.log(`${sayMyName('Marquim')} Você é de menor`)
    }
}

verificationAge(18)