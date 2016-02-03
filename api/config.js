module.exports = {
    facebook: { //this is a strategy and these will change depending on the service I am using.
        clientID: '1497389057235462', //change this to your facebook App ID look lik '/auth/
        clientSecret: 'a4f5687aadb49e9e4cd882dd351a005a', //facebook gives you this too
        callbackURL: 'http://localhost:3000/auth/facebook/callback' //put this in advanced facebook oath where th
        //they will be sent back to after loggin in at facebook.  callbackURL is case sensitive.
    },
    express: {
        secret: 'secret'
    }

};