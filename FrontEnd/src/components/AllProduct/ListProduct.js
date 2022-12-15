import './AllProduct.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

function ListProduct({ listCard }) {
    return (
        <Grid fluid>
            <Row>
                {listCard.map((card) => (
                    <Col xs={6} md={3}>
                        {card}
                    </Col>
                ))}
            </Row>
        </Grid>
    );
}

export default ListProduct;
