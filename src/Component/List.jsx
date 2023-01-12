import Raect, { Component } from 'react';

export class List extends Component{

    render(){
        const numbers = [ 1, 2, 3, 4, 5];
        const listItem = numbers.map(number => { return <li key={number.toString()}>{number}</li>})
        return listItem;    
    }

}

export default List;