import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Menu extends Component {
    render() {
        return (
            <div>
                <h3>menu</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
