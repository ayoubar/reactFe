import ayoublogo from './logo.svg';
import react , { Component, Fragment } from 'react';
import Spinner from './images/810.gif'
import './App.css';
import  Navbar from './components/Navbar'
import Users from './components/Users';





// Stateless Functional Components
const data = [
  {
    id:1,
    firstname:"ayoub",
    lastname:"ar",
    image:"https://avatars0.githubusercontent.com/u/39026279?v=4"
  },
  {
    id:2,
    firstname:"mounir",
    lastname:"al",
    image:"https://avatars0.githubusercontent.com/u/39026279?v=4"
  },
  {
    id:3,
    firstname:"Med",
    lastname:"Ba",
    image:"https://avatars0.githubusercontent.com/u/39026279?v=4"
  }
]


class App extends  Component  {
  render () {
    const name = "this is react course"
    let loading = true
    
     
    const numbers = [
      {
        id:1,
        name:"ayoub sbahi"
      },
      {
        id:2,
        name:"taha houkmelah"
      },
      {
        id:3,
        name:"salma el mouden"
      }
    ]

    if(!loading) {
      return(
        <div style={{
          width:"100wh",
          height:"100vh",
          display:'flex',
          alignItems:"center",
          justifyContent:'center'
        }}>
         <img src={Spinner} /> 
        </div>
        )
    }

      return (
       <Fragment>
       <Navbar title={"FE3 REACT"} logo={'https://mdbootstrap.com/img/logo/mdb-transparent.png'}  />
        <Users/> 

      </Fragment>

      );
    }
}

export default App;
