import React from 'react'
import {Link,browserHistory} from 'react-router'
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';


class HomePage extends React.Component {

  constructor(props,context){
    super(props,context);

    this.search = this.search.bind(this);
  }

  search(){
    this.props.actions.searchItems('anything');
    browserHistory.push("/items/");
  }

  render () {
    return (
      <div>
        <input type="text"  />
        <input type="button" value="Search" onClick={(e) => {this.search()}} />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(Object.assign({}, itemActions),dispatch)
    };
}

export default connect(null, mapDispatchToProps )(HomePage);