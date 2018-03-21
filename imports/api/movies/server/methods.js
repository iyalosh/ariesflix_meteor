import {Meteor} from 'meteor/meteor'
import {Movies} from '../movies'

Meteor.methods({
'movies.insert'(movie){
   if(!this.userId){
       throw new Meteor.Error('403', 'Vouz devez vous connecter')
   }else{
   movie.created_at = new Date()
   Movies.insert(movie)
   }
},
'movies.update'(movie){
   if(!this.userId){
       throw new Meteor.Error('403', 'Vouz devez vous connecter')
   }else{
       Movies.update({_id: movie._id}, {$set: movie})
   }
},
'movies.remove'(movie_id){
   if(!this.userId){
       throw new Meteor.Error('403', 'Vouz devez vous connecter')
   }else{
       Movies.remove({_id: movie_id})
   }
}
})