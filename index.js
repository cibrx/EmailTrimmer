
async function trimmer(email) {
    if(email == undefined){
        return "the email can NOT be null"
    }
    const validateResults = await validate(email)

    if(!validateResults){
        return false
    }

    const [left, right] = email.split('@')

    const trimmedLeft = left.split('+')[0].replaceAll('.','')

    const newEmail = `${trimmedLeft}@${right}`
    
    return newEmail;
}


function validate(email) {
    let char = '@'
    let count = 0;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === char) count++;
    }
    if(count === 1) {
        return true;
    } else {
        return false
    }
}




module.exports = {
    trimmer
}




