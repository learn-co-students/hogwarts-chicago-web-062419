import React from 'react';

class Hogs extends React.Component {
    
    createImageCard = (name) => {
        let fileName = name.toLowerCase().replace(/ /g,"_")
        let imgSrc = require(`../hog-imgs/${fileName}.jpg`)
        return imgSrc
    }

    render() {
        const mappedObj = this.props.hogsArray.map(obj => {
        // mapped return
        return (
            <div className="ui eight wide column">
                <img src={this.createImageCard(obj.name)} />
                <h1>{obj.name}</h1>
                <p>{obj.specialty}</p>
                <p>{obj.weight}</p>
                <p>{obj["highest medal achieved"]}</p>
                {/* <button>More Info</button> */}
                {/* <button>Hide Hog</button> */}
            </div>
            )
        })
        // rendered return
        return(
          <div className="ui grid container">{mappedObj}</div>  
        )
    }
}

export default Hogs