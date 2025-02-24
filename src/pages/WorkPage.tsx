import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
// style
import styles from '../styles/WorkPage.module.css';
// data
import careerData from '../data/careerData';
import skillData from '../data/skillData';

export default function WorkPage() {
    return(
        <Stack direction="horizontal" gap={5} className={styles.careerAndSkillStack}>
            <Container>
                <Row>
                    <Col className={styles.stackTitle}>Experience</Col>
                </Row>
                {careerData.map((data, idx) => (
                    <Row xs={1} md={2} className="g-4">
                        <Col key={idx}>
                            <Card style={{ width: '45rem' }} className="mb-2">
                                <Card.Body>
                                    <Card.Title>{data.title} for {data.period}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{data.company} ({data.location})</Card.Subtitle>
                                    <Card.Text>{data.description.map((line) => (<>{line}<br/></>))}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
            <Container>
                <Row>
                    <Col className={styles.stackTitle}>Skills</Col>
                </Row>
                {skillData.map((data, idx) => (
                    <Row>
                        <Col key={idx}>
                            <Card style={{ width: '30rem' }} className="mb-2">
                                <Card.Body>
                                    <Card.Header>{data.category}</Card.Header>
                                    {data.skills.map((skill) => (
                                        <>
                                        <div className={styles.skillNameWithIconBox}>
                                            <Image src={skill.logo} roundedCircle className={styles.skillIconImage}/>
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
            </Container>
        </Stack>
    );
}