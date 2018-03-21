import React, {Component} from 'react'
import {Image,Form,Button,Embed } from 'semantic-ui-react'
import {toast} from 'react-toastify'

export default class MovieForm extends Component {
   state = {
       movie:{}
   }
   componentDidMount(){
       if(this.props.movie){
           this.setState({movie: this.props.movie})
       }
   }
   handleChange = (e) => {
        let {movie} = this.state
        movie[e.target.name] = e.target.value
        this.setState({movie})
   }
   submit_form = (e) => {
       e.preventDefault()
       if(this.props.movie){
           Meteor.call('movies.update', this.state.movie, (error, result)=> {
               if(error){
                   toast.error(error.message)
               }else{
                   toast.success('Film modifié')
               }
           })
       }else{
           Meteor.call('movies.insert', this.state.movie, (error, result)=> {
            if(error){
                toast.error(error.message)
            }else{
                toast.success('Film créé')
            }
        })
       }
   }
   render(){
       const {movie} = this.state
       return(
           <Form onSubmit={this.submit_form}>
           <Form.Group width="equal">
                <Form.Input
                   label='Titre du Film'
                   onChange={this.handleChange}
                   value={movie.title}
                   name='title'
                />
                <Form.Input
                   label='Description du Film'
                   onChange={this.handleChange}
                   value={movie.description}
                   name='description'
                />
           </Form.Group>
           <Image src={movie.image_url} size="small" inline />
           <Form.Group widths='equal'>
              <Form.Input
                 label="URL de l'image"
                 onChange={this.handleChange}
                 value={movie.image_url}
                 name='image_url'
              />
           </Form.Group>
           <Form.Group width="equal">
                <Form.Input
                   label='Youtube ID'
                   onChange={this.handleChange}
                   value={movie.youtube_id}
                   name='youtube_id'
                />
           </Form.Group>
           <Embed id={movie.youtube_id} placeholder={movie.image_url} source='youtube' />
           <Button positive>{this.props.movie ? "Modifier" : "Créer"}</Button>
           </Form>
       )
   }
}