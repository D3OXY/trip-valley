import { Card, Row } from 'react-bootstrap';

function TwoCardRow({ cards }) {
    return (
        <Row>
            {cards.map((card, index) => (
                <Card className='m-16 ' key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}

export default TwoCardRow;
