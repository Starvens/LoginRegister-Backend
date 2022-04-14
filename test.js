const otpGenerator = require('otp-generator')

console.log(otpGenerator.generate(6, { lowerCaseAlphabets:false , upperCaseAlphabets: false, specialChars: false }));