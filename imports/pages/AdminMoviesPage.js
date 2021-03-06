import React, {Component} from 'react'
import { Grid, Loader,Header, Button } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import {Movies} from '/imports/api/movies/movies'
//Components
import MovieForm from '/imports/components/MovieForm'
import MoviePartial from '/imports/components/MoviePartial'


class AdminMoviesPage extends Component {
   state = {
       display_form: false,
       editing_movie: null
   }

   toggleState = (e) => this.setState({
       [e.target.name]: !this.state[e.target.name],
       editing_movie: null
   })
   editMovie = (editing_movie) => this.setState({
        editing_movie,
        display_form: true
   })

   render(){
       const {loading, movies} = this.props
       const {display_form, editing_movie} = this.state
       if(!loading){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Header as='h3'> Gestion des films</Header>
                   <Button positive={!display_form} onClick={this.toggleState} name="display_form">
                        {display_form ? "Annuler": "Créer un film"}
                   </Button>
               </Grid.Column>
               {display_form ?
                <MovieForm movie={editing_movie} />
               :
                <Grid.Column width={16}>
                    <Grid stackable>
                        {movies.map(movie => {
                            return(
                                <Grid.Column width={5}>
                                    <MoviePartial movie={movie} onClick={() => this.editMovie(movie)}/>
                                </Grid.Column>
                            )
                        })}
                    </Grid>
                </Grid.Column>
                }
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

