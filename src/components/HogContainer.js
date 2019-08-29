import React from 'react'
import Hogs from './Hogs'
import Filters from './Filters'

class HogContainer extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {

    //     }
    // }
    render(){
        return( 
            <div>   
                <Filters />
                <Hogs />
            </div>
        )
    }
}

export default HogContainer