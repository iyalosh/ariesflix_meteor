import React, {Component} from 'react'
import { Grid, Loader,Header } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import {Movies} from '/imports/api/movies/movies'

class AdminMoviesPage extends Component {
   state = {
       
   }

   render(){
       const {loading, movies} = this.props
       if(!loading){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Header as='h3'> Gestion des films</Header>
               </Grid.Column>
               {movies.ma}
           </Grid>
       )
    
    }else{
       return <Loader inline> Chargement des films </Loader>
    }
  }
}

export default AdminMoviesPageContainer = withTracker(() => {
    const moviesPublication = Meteor.subscribe('movies.all')
    const loading = !moviesPublication.ready()
    const movies = Movies.find({}, {limit: 1000, sort: {}}).fetch()
    return {
        loading,
        movies
    }
})(AdminMoviesPage)

