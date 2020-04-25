import React, { Component } from 'react';
import { firestore } from './firebase/firebase.utils';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    projects: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    const projectRef = firestore
      .collection('projects')
      .orderBy('arrange', 'desc');
    projectRef.onSnapshot(async (snapshot) => {
      const projects = [];
      snapshot.docs.forEach((doc) => {
        projects.push(doc.data());
      });
      this.setState({ projects: projects });
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
