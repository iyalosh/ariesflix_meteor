import React, {Component} from 'react'
import { Grid,Header,Button,Form } from 'semantic-ui-react'

export default class SigninPage extends Component {
   state = {
       user: {}
   }
   handleChange = (e) => {
       let {user} = this.state
       user[e.target.name] = e.target.value
       this.setState({user})
   }
   signin = (e) => {
       e.preventDefault()
       const {user} = this.state
       Meteor.loginWithPassword(user.username,user.password,(error,result) => {
           if(error){
               console.log('Error on sign in', error.message)
           }else{
               console.log('Signed in')
           }
       })
   }
   render(){
       const {user} =this.state
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Header as='h1'> Connexion </Header>
                   <Form onSubmit={this.signin}>
                        <Form.Input
                            label='username'
                            onChange={this.handleChange}
                            value={user.username}
                            name='username'
                        />
                        <Form.Input
                            label='password'
                            type="password"
                            onChange={this.handleChange}
                            value={user.password}
                            name='password'
                        />
                        <Button color="black"> JE ME CONNECTE </Button>
                   </Form>
               </Grid.Column>
           </Grid>
       )
   }
}