import React from 'react';
import { Card, Col } from 'react-bootstrap';

function MetricCard({ titulo, valor, color }) {
  return (
    <Col md={3} sm={6}>
      <Card className="border-0 shadow-sm text-center py-3">
        <Card.Body>
          <h6 className="text-muted fw-bold small">{titulo}</h6>
          <h3 className={`fw-bold text-${color} mb-0`}>{valor}</h3>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MetricCard;