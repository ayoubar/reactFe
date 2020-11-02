import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import axios from "axios"

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


const  User = ({user:{login, avatar_url}}) => {
  return (
            <div class="card testimonial-card">

            <div class="card-up indigo lighten-1"></div>

            <div class="avatar mx-auto white">
            <img src={avatar_url} class="rounded-circle"
                alt="woman avatar" />
            </div>

            <div class="card-body">
            <h4 class="card-title">{`${login}`}</h4>
            <hr />
           
            </div>

            </div>
  )
}
    


// class User extends Component {
//     render() {
//         return (
//             <p> {this.props.user.firstname} </p>
//         )
//     }
// }


export class Users extends Component {
    // state

    // constructor() {
    //     super()
    //     this.state = {
    //         users: null,
    //         loading:false
    //     }
    // }


    state = {
        users: [],
        loading:false
    }


    async componentDidMount() {
        this.setState({loading:true})
       const res = await axios.get(`https://api.github.com/users`)
       
       this.setState({users: res.data, loading:false})
        
    }


    static propTypes = {
        users:PropTypes.array.isRequired,
        name:PropTypes.string.isRequired
    }



    // variable static
    // method static

    render() {
        const { loading }  = this.state
        if(loading) {
            return <Spinner />
        }

        // const { users, name } = this.props
        // const { user: { firstname, lastname, image}} = this.state
        const { users } = this.state
        // const isArray = Array.isArray(users)

        return (

            <Fragment>
            <div className="container">

            {users.map(user => (
            
               <User user={user}/>

            ))}
                </div>

           </Fragment>
            
        )
    }
}


// Users.propTypes  = {
//     users:PropTypes.object.isRequired, 
// }


export default Users;
