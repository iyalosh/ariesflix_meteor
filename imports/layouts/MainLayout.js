import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

export default class MainLayout extends Component {
   state = {
       
   }

   render(){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <p> MAIN LAYOUT </p>
               </Grid.Column>
           </Grid>
       )
   }
}