
likes = (likes) => {
    if (likes < 1000) {
        return likes.toString()
    } else if (likes < 1000000) {
        return `${(likes / 1000).toFixed(0)}K`
    } else {
        return `${(likes / 1000000).toFixed(0)}M`
    }
    
}


// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"