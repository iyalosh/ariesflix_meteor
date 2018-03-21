import React, {Component} from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class MoviePartial extends Component {
   state = {
       
   }

   render(){
       const {movie}=this.props
       return(
        <Card {...this.props}>
        <Image src={movie.image_url} />
        <Card.Content>
          <Card.Header>
            {movie.title}
          </Card.Header>
          <Card.Description>
                {movie.description}
          </Card.Description>
        </Card.Content>
      </Card>
       )
   }
}