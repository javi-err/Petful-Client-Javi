import React, { Component } from "react";
import People from "../People";
import api from '../api'
import './adopt.css'

class Adoption extends Component {
  state = {
    typeOfPet: "dog",
    dog: {},
    cat: {},
    people: [],
    first: false,
    removeTimer: null,
  };

  componentDidMount() {

    api.getPeople()
      .then((person) => {
        this.setState({
          people: person,
        });
      });

    api.getDog()
      .then((dog) => {
        this.setState({
          dog: dog,
        });
      });

    api.getCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
  }

  postUser = (name) => {
    api.addPerson(name)
      .then((people) => {
        this.setState({
          people
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let type = e.target["pet-type"].value;
    let user = e.target["addName"].value;
    this.postUser(user);

    let removeTimer = setInterval(() => {
      this.handleTimer();
    }, 4000);

    this.setState({
      typeOfPet: type,
      removeTimer,
    });
  };

  handleTimer = () => {
    let newPeople = [
      "Mata Bo",
      "Intoavc Sares",
      "Orlando Horse",
      "Bram Sho"
    ];

    if (this.state.people.length > 1) {
      api.deletePerson(this.state.people[0])
        .then((people) => {
          this.setState({
            people,
          });
        });
      api.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
      api.deleteCat()
        .then((cat) => {
          this.setState({
            cat: cat,
          });
        });
    } else {

      clearInterval(this.state.removeTimer);
      let i = 0;
      let addInterval = setInterval(() => {
        this.postUser(newPeople[i]);
        i++;
      }, 5000);
      this.postUser("Mariam Sora")

      this.setState({
        first: true
      })


      setTimeout(() => {
        clearInterval(addInterval);
      }, 20000);
    }
  };

  renderPeople = () => {
    let people = this.state.people;
    if (people.length > 1) {
      return people.map((person, index) => (
        <People key={index} name={person} />
      ));
    }
    return <People key="0" name={people[0]} />;
  };

  renderDog = () => {
    let { dog } = this.state;
    return (
      <section>
        <ul>
          <img src={dog.imageURL} alt={dog.description}></img>
          <li>Name: {dog.name}</li>
          <li>Gender: {dog.gender}</li>
          <li>Breed: {dog.breed}</li>
          <li>Description: {dog.description}</li>
          <li>Background: {dog.story}</li>
        </ul>
      </section>
    );
  };

  renderCat = () => {
    let { cat } = this.state;
    return (
      <section>
        <img src={cat.imageURL} alt={cat.description}></img>
        <ul>
          <li>Name: {cat.name}</li>
          <li>Gender: {cat.gender}</li>
          <li>Breed: {cat.breed}</li>
          <li>Description: {cat.description}</li>
          <li>Background: {cat.story}</li>
        </ul>
      </section>
    );
  };

  handleAdopt = () => {
    api.deletePerson(this.state.people[0])
      .then((people) => {
        this.setState({
          people,
          first: false,
        });
      });
    if (this.state.typeOfPet === 'dog') {
      api.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
    } else {
      api.deleteCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
    }
    alert(`Congrats, on your new pet ${this.state.typeOfPet}!!`)
  };

  render() {
    return (
      <div>
        <header>
          <h1>PETFUL</h1>
        </header>

        <main>
          <div className="stage">
            <h2>Pet up for Adoption</h2>
            {this.state.typeOfPet === "dog"
              ? this.renderDog()
              : this.renderCat()}
            <h2>Queue</h2>
            {this.renderPeople()}
          </div>

          <div id="form">
            <form
              onSubmit={this.handleSubmit}
              name="add-name-to-list"
              id="add-name-to-list"
            >
              <label htmlFor="pet-type">
               Cat or dog?
              </label>
              <select name="pet-type" defaultValue="dog">
                <option>-Select your pet-</option>
                <option>Dog</option>
                <option>Cat</option>
              </select>
              <label htmlFor="addName">Your Name:</label>
              <input type="text" name="addName" id="addName"></input>
              <button type="submit">Join the queue</button>
              {this.state.first ? (
                <button onClick={this.handleAdopt} type="button">
                  Adopt
                </button>
              ) : (
                ""
              )}
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Adoption;