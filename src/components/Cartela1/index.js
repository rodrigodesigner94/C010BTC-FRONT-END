import { Card, ListGroup } from 'react-bootstrap'

export const Cartela1 = ()=> {
    return(
        <Card bg='danger' style={{ width: '18rem' }}>
        <Card.Header>Cartela</Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item>1</ListGroup.Item>
            <ListGroup.Item>2</ListGroup.Item>
            <ListGroup.Item>3</ListGroup.Item>
        </ListGroup>
        </Card>   

        
    )
}