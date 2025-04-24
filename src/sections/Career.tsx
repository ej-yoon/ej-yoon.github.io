import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// style
import styles from '../styles/Section.module.css';
import pageStyles from '../styles/Page.module.css';
// data
import careerData from '../data/careerData';
import skillData from '../data/skillData';
// type
import { RefObject } from 'react';
type Props = {
    refProps: RefObject<HTMLInputElement | null>;
};

export default function Career({ refProps }: Props) {
    const imagePath = import.meta.env.VITE_IMG_PATH;

    return(
        <Container fluid="lg" className={styles.careerSectionContainer} ref={refProps} id="careerSection">
            <div className={styles.nameAndTitle}>Career</div>
            <Row className="justify-content-md-center">
                <Col lg={7}>
                    <Row>
                        <Col className={styles.columnTitle}>
                            <h4>Work experience</h4>
                        </Col>
                    </Row>
                    {careerData.map((data, idx) => (
                        <Row key={`career_${idx}`} className={pageStyles.cardsAnimation}>
                            <Col className={styles.columnContainer}>
                                <Card style={{ maxWidth: '40rem' }} className="mb-5">
                                    <Card.Body>
                                        <Card.Title>{data.title} for {data.period}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.company} ({data.location})</Card.Subtitle>
                                        {data.description.map((line, idx) => (<Card.Text key={`text_${idx}`} style={{ whiteSpace: 'pre-wrap' }}>{line}</Card.Text>))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col>
                    <Row>
                        <Col className={styles.columnTitle}>
                            <h4>Experienced with</h4>
                        </Col>
                    </Row>
                    {skillData.map((data, idx) => (
                        <Row key={`skills_${idx}`} className={pageStyles.cardsAnimation}>
                            <Col className={styles.columnContainer}>
                                <Card style={{ minWidth: '90%' }} className="mb-4">
                                    <Card.Header>{data.category}</Card.Header>
                                    <Card.Body>
                                        {data.skills.map((skill, idx) => (
                                            <div key={`skill_${idx}`}>
                                                <div  className={styles.titleWithIconBox}>
                                                    <Image src={`${imagePath}${skill.logo}`} roundedCircle className={styles.smallIconImage}/>
                                                    <Card.Text>{skill.name}</Card.Text>
                                                </div>
                                            </div>
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