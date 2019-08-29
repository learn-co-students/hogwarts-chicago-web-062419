import React from 'react';

class Hogs extends React.Component {
    
    createImageCard = (name) => {
        let fileName = name.toLowerCase().replace(/ /g,"_")
        let imgSrc = require(`../hog-imgs/${fileName}.jpg`)
        return imgSrc
    }

    render() {
        const testObj = [{
            name: 'Piggy smalls',
            specialty: 'Massivity',
            greased: true,
            weight: 5.1,
            'highest medal achieved': 'platinum'
        },
        {
            name: 'Trouble',
            specialty: 'Racing',
            greased: true,
            weight: 1.7,
            'highest medal achieved': 'gold'
          }
        ]
        const mappedObj = testObj.map(obj => {
        return <div className="ui eight wide column">
                <img src={this.createImageCard(obj.name)} />
                <h1>{obj.name}</h1>
                <p>{obj.specialty}</p>
                <p>{obj.weight}</p>
                <p>{obj["highest medal achieved"]}</p>
            </div>
        }
        )
        return(
          <div className="ui grid container">{mappedObj}</div>  
        )
    }
}

export default Hogs