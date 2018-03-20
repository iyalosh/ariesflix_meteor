import React, {Component} from 'react'
import { Grid,Header,Button,Form } from 'semantic-ui-react'

export default class SignupPage extends Component {
   state = {
       user: {}
   }
   handleChange = (e) => {
       let {user} = this.state
       user[e.target.name] = e.target.value
       this.setState({user})
   }
   signup = (e) => {
       e.preventDefault()
       const {user} = this.state
       Meteor.call('users.signup', this.state.user, (error,result) => {
           if(error){
               console.log('Error on signup',error.message)
           }else{
                console.log('SIGNED UP')
                Meteor.loginWithPassword(user.email,user.password)
           }
       })
   }
   render(){
       const {user} =this.state
       return(
           <Grid stackable>
               <Grid.Column width={16}>
                   <Header as='h1'> Inscrivez-vous </Header>
                   <Form onSubmit={this.signup}>
                        <Form.Input
                            label='username'
                            onChange={this.handleChange}
                            value={user.username}
                            name='username'
                        />
                        <Form.Input
                            label='email'
                            type="email"
                            onChange={this.handleChange}
                            value={user.email}
                            name='email'
                        />
                        <Form.Input
                            label='password'
                            type="password"
                            onChange={this.handleChange}
                            value={user.password}
                            name='password'
                        />
                        <Button color="black"> JE M'INSCRIS </Button>
                   </Form>
               </Grid.Column>
           </Grid>
       )
   }
}