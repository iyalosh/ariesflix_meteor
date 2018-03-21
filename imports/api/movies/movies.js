import {Mongo} from 'meteor/mongo'

export const Movies = new Mongo.Collection('movies')

const MoviesSchema = new SimpleSchema({
   title: {
       type: String
   },
   description:{
       type: String,
       optional: true
   },
   image_url: {
       type: String,
       defaultValue: "http://www.merayarnett.com/23600/film-logos-designs-18-01-2018/surprising-film-logos-designs-23-on-create-logo-free-with-film-logos-designs/"
   },
   youtube_id: {
       type: String
   },
   created_at: {
       type: Date
   },
   active: {
       type: Boolean,
       defaultValue: true
   }

})

Movies.attachSchema(MoviesSchema);