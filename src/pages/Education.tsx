import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// style
import styles from '../styles/EducationPage.module.css';
import componentStyles from '../styles/PageComponent.module.css';
// data
import educationData from '../data/educationData';

export default function EducationPage() {
    const imagePath = import.meta.env.VITE_IMG_PATH;

    return(
        <Container fluid="lg" className={styles.educationPageContainer}>
            {educationData.map((data, idx) => (
                <Row key={idx} className="justify-content-md-center">
                    <Col>
                        <Card style={{ maxWidth: '50rem' }} className="mb-5">
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <div className={componentStyles.titleWithIconBox}>
                                    <Image src={`${imagePath}${data.logo}`} roundedCircle className={componentStyles.smallIconImage}/>
                                    <Card.Subtitle className="text-muted">{data.school} ({data.location})</Card.Subtitle>
                                </div>
                                <Card.Text>{data.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}