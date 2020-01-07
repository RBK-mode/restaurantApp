import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Category extends Component {
    async componentDidMount(){
        const response = await fetch("http://localhost:8000/api/category", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth': localStorage.getItem('token')
            },
          });
          const data = await response.json();
          console.log(data);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
