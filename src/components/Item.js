import React from 'react'

const Item = (({item})=>{
    //console.log(item.links[0].href)
    // const renderedItem = item.map((zdjecie) =>{
    //     return zdjecie
    // })
    //console.log(item)
    return(
    <div className="wyniki ui segment">
        <h1>{item.data ? item.data[0].title :null}</h1>
        <img src={item ? item[0].href :null} alt={item ? item[0].rel : null}/>
        <p>{item.data ? item.data[0].description : null}</p>
    </div>
    )
})

// class Item extends React.Component{
//     state={
//         link:""
//     }
//     consol
//     render(){
//         return(
//             <div>zdjecie</div>
//         )
//     }
// }

export default Item
