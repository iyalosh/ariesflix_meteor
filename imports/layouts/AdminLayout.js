import React, {Component} from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

//Pages
import NotFoundPage from '/imports/pages/NotFoundPage'
import AdminMoviesPage from '/imports/pages/AdminMoviesPage'
//Component
import Navbar from '/imports/components/Navbar'

export default class AdminLayout extends Component {
   state = {
       
   }

   render(){
       return(
           <Grid stackable style={{paddingTop: "4.5em"}}>
            <Navbar />
               <Grid.Column width={16}>
               <Container>
               <Switch>
                        <Route exact path="/admin/movies" component={AdminMoviesPage}/>
                        <Route path="*" component={NotFoundPage}/>
                </Switch>
                </Container>
                <ToastContainer />
               </Grid.Column>
           </Grid>
       )
   }
}