import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Value({ title, description, action }) {
  return (
    <Card className='shadow-sm h-100'>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body className='p-4 d-flex fle-column'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="success" className='mt-auto'>{action}</Button>
    </Card.Body>
  </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container className='py-5'>
      <Row>
        {values.map(({ title, description, action }) => (
          <Col key={title}>
            <Value title={title} description={description} action={action}/>
          </Col>
          ))}
      </Row>
    </Container>
  );
}
