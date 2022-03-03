import { Card } from 'react-bootstrap'
export const Panel = (props)=> {
    return( 
        <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Bolas Sorteadas</Card.Header>
        <Card.Body>
          <Card.Text>
            12345678901234567890123456789012345678901234567890
          </Card.Text>
        </Card.Body>
      </Card>
    )
}