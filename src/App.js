import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';
import NavBar from './Components/NavBar'
class App extends Component {
constructor(props){
  super(props);
  
  this.state = {
    films: [],
    people: [],
    filmsLoaded: false,
    peopleLoaded: false
  }

  this.loadPeople=this.loadPeople.bind(this)

  this.loadFilms=this.loadFilms.bind(this)
}
  loadFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(filmList => this.setState({
        films: filmList,
        filmsLoaded: true,
        peopleLoaded: false
      }))
      .catch(err => console.log(err))
  }

  loadPeople() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(peopleList => this.setState({
        people: peopleList,
        peopleLoaded: true,
        filmsLoaded:false
      }))
      .catch(err => console.log(err))
  }

  render() {

    if (this.state.filmsLoaded) {
      return (
        <>

          <NavBar loadFilms={this.loadFilms} loadPeople={this.loadPeople}/>

          {this.state.films.map((film) => {

            return (<div className="card" key={film.id}>
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.description}</p>
              </div>
            </div>
            )
          })}
        </>
      )

    } else if (this.state.peopleLoaded) {
      return (
        <>

<NavBar loadFilms={this.loadFilms} loadPeople={this.loadPeople}/>

          {this.state.people.map((person) => {

            return (<div className="card" key={person.id}>
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">{person.age}</p>
                <p className="card-text">{person.gender}</p>
              </div>
            </div>
            )
          })}
        </>
      )
    } else {
      return (
        <NavBar loadFilms={this.loadFilms} loadPeople={this.loadPeople}/>
      )
    }


  }
}

export default App

