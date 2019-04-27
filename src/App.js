import React, { Component } from "react";
import FriendCard from "./components/card/Card";
import Wrapper from "./components/wrapper/wrapper";
import Title from "./components/title/title";
import friends from "./friends.json";
import NavBar from "./components/navbar/navbar"
import "./App.css";
import { restElement } from "@babel/types";


let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to begin!";

class App extends Component {
  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    // Make a copy of the state matches array to work with
    const friends = this.state.friends;
    // Filter for the clicked match
    const clickedFriend = friends.filter(friend => friend.id === id);
    // If the matched image's clicked value is already true, 
    // do the game over actions
    if (clickedFriend[0].clicked){
        correctGuesses = 0;
        clickMessage = "You guessed incorrectly!"

        for (let i = 0 ; i < friends.length ; i++){
            friends[i].clicked = false;
        }

          // Shuffle the array to be rendered in a random order
          friends.sort(function(a, b){return 0.5 - Math.random()});
          
        this.setState({clickMessage});
        this.setState({correctGuesses});
        this.setState({friends});

    // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {

        // Set its value to true
        clickedFriend[0].clicked = true;

        // increment the appropriate counter
        correctGuesses++;
        
        clickMessage = "You guessed correctly!";

        if (correctGuesses > bestScore){
            bestScore = correctGuesses;
            this.setState({ bestScore });
        }

        // Shuffle the array to be rendered in a random order
        friends.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ friends });
        this.setState({correctGuesses});
        this.setState({clickMessage});
    } else {

        // Set its value to true
        clickedFriend[0].clicked = true;

        // restart the guess counter
        correctGuesses = 0;

        // Egg on the user to play again
        clickMessage = "YOU WON! Play again?";
        bestScore = 12;
        this.setState({ bestScore });
        
        for (let i = 0 ; i < friends.length ; i++){
            friends[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        friends.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ friends });
        this.setState({correctGuesses});
        this.setState({clickMessage});

    }
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
      <NavBar 
      message = {this.state.clickMessage} 
      score = {this.state.correctGuesses} 
      bestScore = {this.state.bestScore}/>
      <Title/>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard 
            setClicked = {this.setClicked}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;
