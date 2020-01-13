import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default function CategoryItem(props) {
    var inline = {
        display: 'flex',
        flexDirection: 'row',

    }
    return (
        <div onClick={() => props.onSelectCategory(props.category)} style={inline}>
            <div onClick={() => props.onSelectCategory(props.category)} style={inline}>
                <Card>
                    <CardImg top width="100%" src={props.category.img} />
                    <CardBody>
                        <CardTitle>{props.category.name}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        </div>

    )
}
