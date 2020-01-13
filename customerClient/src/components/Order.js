import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Order = ({request, toggle, modal}) => {
    console.log(request)
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>you order</ModalHeader>
            <ModalBody>
            <div>
                <div># {request._id}</div>            
                <div>state: {request.state}</div>
                <div>at: {request.createdAt}</div>
                <div>item list</div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                            {/* <th>category</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.items_list.map((item, i) => (
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    {/* <td>{item.categoryId.name}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Cancel Order</Button>{' '}
            <Button color="secondary" onClick={toggle}>Exit</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    request: {
        ...state.request,
        // items_list: state.request.items_list.map(item => {
        //     return {
        //         ...item, 
        //         // categoryId: state.category.filter(cat => cat._id === item.categoryId)[0]
        //     }
        // })
    }
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
