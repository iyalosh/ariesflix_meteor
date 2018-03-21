import {Meteor} from 'meteor/meteor'
import '/imports/api/users/server/methods'
import '/imports/api/movies/server/methods'
import '/imports/api/movies/server/publication'
//Server initialization of all application
Meteor.startup(() => {
    // Users initialization
    const first_user = Meteor.users.findOne({roles: 'admin'})
    if(!first_user){
        console.log("SERVER INIT : Admin creation")
        const user_id = Accounts.createUser({
            email: Meteor.settings.private.ADMIN_EMAIL,
            username: "admin",
            password: Meteor.settings.private.ADMIN_PASSWORD
        })
        Roles.addUsersToRoles(user_id, ['admin'])
    }
})