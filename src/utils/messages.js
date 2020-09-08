const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()-new Date().getTimezoneOffset()*60*1000
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()-new Date().getTimezoneOffset()*60*1000
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}