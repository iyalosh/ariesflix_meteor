import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import {
    Route,
    Switch
} from 'react-router-dom'
//Pages
import LandingPage from '/imports/pages/LandingPage'
import NotFoundPage from '/imports/pages/NotFoundPage'

export default class MainLayoutServer extends Component {
   state = {
       
   }

   render(){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Route exact path="/" component={LandingPage} />
                   <Route path="*" component={NotFoundPage} />
               </Grid.Column>
           </Grid>
       )
   }
}