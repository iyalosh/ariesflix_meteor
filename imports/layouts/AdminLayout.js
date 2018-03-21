import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
//Pages
import NotFoundPage from '/imports/pages/NotFoundPage'
import AdminMoviesPage from '/imports/pages/AdminMoviesPage'

export default class AdminLayout extends Component {
   state = {
       
   }

   render(){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
               <Switch>
                        <Route exact path="/admin/movies" component={AdminMoviesPage}/>
                        <Route path="*" component={NotFoundPage}/>
                </Switch>
               </Grid.Column>
           </Grid>
       )
   }
}