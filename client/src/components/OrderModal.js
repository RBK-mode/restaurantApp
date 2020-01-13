import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { approveRequestDispatcher, rejectRequestDispatcher } from './../store/actions/request';

const Order = ({request, toggle, modal, approveRequest, rejectRequest}) => {
    console.log(request)
    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{request.customerId.name}</ModalHeader>
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
            <Button color="primary" onClick={() => {
                approveRequest(request._id, request)
                // console.log(request)
                toggle();
            }}>Approve</Button>{' '}
            <Button color="danger" onClick={() => {
                rejectRequest(request._id, request)
                toggle();
            }}>Reject</Button>
            </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    approveRequest: (id, request) => dispatch(approveRequestDispatcher(id, request)),
    rejectRequest: (id, request) => dispatch(rejectRequestDispatcher(id, request))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);