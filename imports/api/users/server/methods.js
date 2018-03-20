import {Meteor} from 'meteor/meteor'
Meteor.methods({
    'users.signup' (user_data){
        console.log("SERVER USER API- User signup",user_data)
        Accounts.createUser(user_data)
    }
})