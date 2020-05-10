import React from 'react'
import SearchBar from './SearchBar'
import Nasa from '../apis/Nasa'
import ItemList from './ItemList'


const request = "https://api.nasa.gov/planetary/apod?api_key=tLIyPZSx4Ohfdq4BSj4H9lQmka5Fv3Ln5qlhtgty"
const prefix = "https://images-api.nasa.gov"

class App extends React.Component{
    state={
        items:[],
        picOfTheDay:"",
        messageOfTheDay:""
    }
    
    componentDidMount = () =>{
        Nasa.get(request)
        .then((res) => {
            console.log(res)
            this.setState({picOfTheDay:res.data.hdurl})
            this.setState({messageOfTheDay:res.data.explanation})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    //https://images-api.nasa.gov/search?q=mars
    onTermSubmit = (term) =>{
        Nasa.get(`${prefix}/search?q=${term}`)
        .then((res) =>{
            console.log(res)
            this.setState({items:res.data.collection.items})
        })
        .catch(err =>{
            console.log(err)
        })
    }


    render(){
        return(
            <div id="content">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
                <ItemList items = {this.state.items}/>
                <div className="zdjecieDnia ui segment">
                    <h3>
                        Zdjęcie dnia
                    </h3>
                    <img src={this.state.picOfTheDay} alt="Zdjęcie dnia:"/>
                    <p>
                        {this.state.messageOfTheDay}
                    </p>
                </div>
            </div>
        )
    }
}


export default App