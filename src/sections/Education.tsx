import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// style
import styles from '../styles/Section.module.css';
import pageStyles from '../styles/Page.module.css';
// data
import educationData from '../data/educationData';
import { RefObject } from 'react';
// type
type Props = {
    refProps: RefObject<HTMLInputElement | null>;
};

export default function Education({ refProps }: Props) {
    const imagePath = import.meta.env.VITE_IMG_PATH;

    return(
        <Container fluid="lg" className={styles.educationSectionContainer} ref={refProps} id="educationSection">
            <div className={styles.nameAndTitle}>Education</div>
            {educationData.map((data, idx) => (
                <Row key={`education_${idx}`} className={pageStyles.cardsAnimation}>
                    <Col style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        <Card style={{ maxWidth: '55rem' }} className="mb-5">
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <div className={styles.titleWithIconBox}>
                                    <Image src={`${imagePath}${data.logo}`} roundedCircle className={styles.smallIconImage}/>
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