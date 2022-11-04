import React, { Component } from 'react'

export default class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ""
        }
    }
    componentDidMount(){
        fetch("https://twitok.vercel.app/userData", {
        method:"POST",
        crossDomain:true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify({
            token:window.localStorage.getItem("token")
        })
        }).then((res) => res.json())
        .then((data) => {
            this.setState({userData: data.data})
        })
    }

    render() {
        return (
            <div>
                Name <h1>{this.state.userData.username}</h1>
                Email <h1>{this.state.userData.email}</h1>
            </div>
        )
    }
}