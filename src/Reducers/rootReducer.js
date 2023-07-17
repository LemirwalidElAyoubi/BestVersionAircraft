//*********SEE THE CODE DOWNNN*************

//The reducer mangaes the store 

/*State: State represents the data or information that your application needs to keep track of. 
It can include things like user details, lists of items, or any other relevant data.*/

/*Actions: Actions are plain JavaScript objects that describe an event or something that happened 
in your application. For example, when a user clicks a button, an action can be dispatched to 
notify that the button was clicked.*/

/*Reducers: Reducers are pure functions that specify how the application's state should change 
in response to actions. They take the current state and an action as input and return a new state. 
Reducers are responsible for updating the state based on the actions dispatched.*/

/*as a simple application if we want to make an increment upon onClick:
create a new file called counterReducer.js to manage the state related to the counter.
 Inside the reducer, define how the state should change based on the actions.
 example:
 const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
*/

const initState={


}

const rootReducer = (state=initState,action) =>{

    return state

}

export default rootReducer;