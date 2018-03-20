import React, {Component} from 'react'
import { Grid,Header } from 'semantic-ui-react'

export default class NotFoundPage extends Component {
   state = {
       
   }

   render(){
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Header as='h1'> PAGE NOT FOUND </Header>
                   lorem200
               </Grid.Column>
           </Grid>
       )
   }
}