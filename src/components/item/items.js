import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';


class Items extends React.Component{

    constructor(props, context){
        super(props,context);
    }
   

    render(){
        const items = this.props.items;
        console.log(items);
        return(
            <div>
                hello
                {
                    items.map((item)=>
                        <div>{item.id} - {item.name}</div>
                    )
                }
            </div>
        );
    }
}



function mapStateToProps(state, ownProps){
    return {
        items:state.items
    };
}

function mapDispatchToProps(dispatch){ 
    return{
        actions : bindActionCreators(Object.assign({}, itemActions),dispatch)
    };
}






export default connect(mapStateToProps, mapDispatchToProps )(Items);