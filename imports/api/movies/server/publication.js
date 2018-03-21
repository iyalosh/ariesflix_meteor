import {Meteor} from 'meteor/meteor'
import {Movies} from '../movies'

Meteor.publish('movies.all', function(){
       return Movies.find({}, {limit: 100000, sort: {}})
   
})

Meteor.publish('movies.last_five',function(){
    return Movies.find({active:true}, {limit:5,sort:{created_at: 1}})
})