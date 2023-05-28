import React from 'react'
import CardList from '../Component/cardlist'
import robots from '../States'
import SearchBox from '../Component/searchbox'
import './app.css'

import ErrorBoundary from '../Component/ErrorBoundary'


class App extends React.Component
{

    constructor(){
        super()
        this.state = {
        
            searchfield:''
            

        }
    }
    

    onSearchChange = (event) =>
    {

        this.setState({ searchfield:event.target.value })

      
       

    }
    render(){

        const {searchfield} = this.state
        const filteredrobots = robots.filter(robot =>
            {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())

            })

            return (!robots.length) ?
                <h1>Loading</h1> :
    (
            
    <div className='tc' style={{}}>

    <h1>Top Places To Visit</h1>
    <SearchBox searchChange={this.onSearchChange} />
    
        <ErrorBoundary>
    <CardList robots={filteredrobots} />
        </ErrorBoundary>
    


    </div>
    );
    
}
    
}

export default App;