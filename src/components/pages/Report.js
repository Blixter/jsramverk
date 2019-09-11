import React, { Component } from 'react';
import Week1 from './Week1.js';
import Week2 from './Week2.js';
import ErrorMessage from './../ErrorMessage.js';


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: props.match.params.week
    };
  }

  // Update state if new params.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.week !== prevState.week){
      const currentWeek = nextProps.match.params.week
      return {
         week: currentWeek 
       }
   }
   return null;
 }

  render() {
    const weekNumber = this.state.week;
    let reportText;
    
    switch(parseInt(weekNumber)) {
      case 1:
        reportText = < Week1 />;
        break;
      case 2:
        reportText = < Week2 />;
        break;
      default:
        reportText = < ErrorMessage />;
        break;
    }
    return (
      <main>
         { reportText }
      </main>
    );
  }
}

export default Report;
