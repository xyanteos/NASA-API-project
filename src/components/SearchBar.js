import React from'react'    

// const KEY = "tLIyPZSx4Ohfdq4BSj4H9lQmka5Fv3Ln5qlhtgty"


class SearchBar extends React.Component{
    state={
        term: ""
    }
    onInputChange = (event) =>{
        this.setState({term: event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="searchBar ui segment">

                    <div className="field">
                        <form className="ui form" onSubmit={this.onFormSubmit}>
                            <label>
                            Search for info
                            </label>
                            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                        </form>
                    </div>

            </div>

        )
    }
}

export default SearchBar