import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
    state = {input:''}
    getList = () => {
        const {destinationsList} = this.props
        const {input} = this.state
        const filterDestinationsList = destinationsList.filter((item)=>{
            if(item.name.toUpperCase().includes(input.toUpperCase())){
                return item
            }
            

        })
        return filterDestinationsList
    }

    input = (event) => {
        this.setState({input:event.target.value})
    }
    
    render() {
        const destinationsList=this.getList() 
        console.log(destinationsList)       
        return (
             <div className='bg'>
                <h1>Destination Search</h1>
                <div className='input-cart'>
                    <input type='search' placeholder='Search' onChange={this.input} value={this.state.input}/>
                    <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png ' alt='search' className='search-img'/>
                </div>
                <ul className='cart'>
                    {destinationsList.map((item)=>
                        (<DestinationItem item={item} key={item.id}/>)
                    )}
                </ul>
             </div>
        );
    }
}

export default DestinationSearch
