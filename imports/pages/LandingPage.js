import React, {Component} from 'react'
import {Grid, Header, Image, Embed, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class LandingPage extends Component {

    state = {
        movies: [
            {
                movie_title: "Harry Potter",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "L8-e_VdwAME"
            },
            {
                movie_title:"Forest Gump",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "bLvqoHBptjg"
            },
            {
                movie_title:"Mary Popins",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "kvt41MIelDE"
            },
            {
                movie_title:"Mission impossible",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "wb49-oV0F78"},
            {
                movie_title:"James Bond",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "7GqClqvlObY"},
            {
                movie_title:"Spiderman",
                movie_url: "http://static1.purepeople.com/articles/2/72/63/2/@/547997-l-affiche-du-film-the-fighter-950x0-2.jpg",
                movie_id: "ii3n7hYQOl4"
            }
            ],
            active_movie: null
        }

    changeActiveMovie = (active_movie) => {
        this.setState({active_movie});
    }

    render() {
        const {movies, active_movie} = this.state
        return (
            <Grid stackable className="landing-page">
                <Grid.Column width={16} className="landing-header">
                    <Header as="h1" id="header-title" className="wow fadeInUp">
                        ARIESFLIX
                    </Header>
                    <div id="header-divider"/>
                    <Header as="h3" id="header-subtitle" className="wow fadeInUp">
                        VOS VIDEO A LA DEMANDE <br/>
                        <Link to="/signup">
                            <Button color="black" style={{marginTop:"1em"}} >Créer un compte</Button>
                        </Link>
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} className="landing-description">
                    <Header as="h3" id="title-description">
                        Découvrez notre sélection des meilleures films du web
                    </Header>
                    < div id="description">
                        <p>
                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>                    
                    </Grid.Column>
                    {
                        movies.map((movie) => {
                            return (
                                <Grid.Column width={3} className="movie-landing">
                                    <Image size="small" src={movie.movie_url} label={movie.movie_title} onClick={() => this.changeActiveMovie(movie)}className="wow fadeInUp" inline />
                                </Grid.Column>
                            )  
                        })
                    }
                    {active_movie && 
                        <Grid.Column width={16}>
                            <Embed 
                                id={active_movie.movie_id}
                                placeholder={active_movie.movie_url}
                                source="youtube"
                            />
                        </Grid.Column>
                    }
            </Grid>
        )
    }
}