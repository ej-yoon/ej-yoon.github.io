import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
// style
import styles from '../styles/CareerPage.module.css';
import componentStyles from '../styles/PageComponent.module.css';
// data
import careerData from '../data/careerData';
import skillData from '../data/skillData';

export default function WorkPage() {
    const imagePath = import.meta.env.VITE_IMG_PATH;

    return(
        <Container fluid="lg" className={styles.careerPageContainer}>
            <Row className="justify-content-md-center">
                <Col>
                    <Row>
                        <Col className={styles.columnTitle}>
                            <h4>Work experience</h4>
                        </Col>
                    </Row>
                    {careerData.map((data, idx) => (
                        <Row key={idx} className={componentStyles.cardsAnimation}>
                            <Col className={styles.columnContainer}>
                                <Card style={{ maxWidth: '50rem' }} className="mb-5">
                                    <Card.Body>
                                        <Card.Title>{data.title} for {data.period}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.company} ({data.location})</Card.Subtitle>
                                        <Card.Text>{data.description.map((line) => (<>{line}<br/></>))}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col className={styles.columnTitle}>
                            <h4>Experienced with</h4>
                        </Col>
                    </Row>
                    {skillData.map((data, idx) => (
                        <Row key={idx} className={componentStyles.cardsAnimation}>
                            <Col className={styles.columnContainer}>
                                <Card style={{ maxWidth: '25rem' }} className="mb-4">
                                    <Card.Body>
                                        <Card.Header>{data.category}</Card.Header>
                                        {data.skills.map((skill) => (
                                            <>
                                            <div className={componentStyles.titleWithIconBox}>
                                                <Image src={`${imagePath}${skill.logo}`} roundedCircle className={componentStyles.smallIconImage}/>
                                                <Card.Text>{skill.name}</Card.Text>
                                            </div>
                                            <ProgressBar now={skill.level} max={100} className={styles.skillLevel}/>
                                            </>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}