import React from 'react'
import Hogs from './Hogs'
import Filters from './Filters'
import HogData from '../porkers_data';
import hogs from '../porkers_data';


class HogContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            hogsArray: HogData,
            filters: 'name', //'weight'
            greased: false
        }
    }
    
    handleChecked = (event) => {
        // Set the State of grease to true if checked, or false if unchecked
        this.setState({greased: event.target.checked})
    }

    handleDropDown = (event) => {
        // Change the state of state.filters onChange of dropdown from Filters.js        
        this.setState({filters: event.target.value})
    }

    filterGreaseArray = (hogsArray) => {
        // Take in an array and only return the ones with the greased === true
        let greaseArray
        this.state.greased ? 
        greaseArray = hogsArray.filter(hog => hog.greased ) : greaseArray = hogsArray
        return greaseArray
    }

    sortArrayName = (hogsArray) => {    
        const filteredHogs = this.filterGreaseArray(hogsArray).sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        return filteredHogs
    }

    sortArrayWeight = (hogsArray) => {
        const filteredHogs = this.filterGreaseArray(hogsArray).sort((a, b) => {
            if(a.weight < b.weight) { return -1; }
            if(a.weight > b.weight) { return 1; }
            return 0;
        })
        return filteredHogs
    }


    render(){
        // console.log(this.filterGreaseArray(this.state.hogsArray))
        console.log(this.state.hogsArray)
        return( 
            <div>   
                <Filters handleDropDown={this.handleDropDown} handleChecked={this.handleChecked}/>
                {
                    this.state.filters === 'name' ?
                    <Hogs hogsArray={this.sortArrayName(this.state.hogsArray)} /> :
                    <Hogs hogsArray={this.sortArrayWeight(this.state.hogsArray)} />
                }
                {/* <Hogs hogsArray={this.state.hogsArray} /> */}
            </div>
        )
    }
}

export default HogContainer