import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MetricCard from './MetricCard';
import TablaReservas from './TablaReservas';

function Panel() {
  return (
    <Container fluid className="py-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4">Panel de Administración - Restaurante</h2>

      {/* Fila de reportes */}
      <Row className="g-3 mb-4">
        <MetricCard titulo="Total Reservas" valor="3" color="primary" />
        <MetricCard titulo="Pendientes" valor="1" color="warning" />
        <MetricCard titulo="Mesas Ocupadas" valor="2" color="success" />
        <MetricCard titulo="Capacidad" valor="50%" color="info" />
      </Row>

      {/* Tabla */}
      <TablaReservas />
    </Container>
  );
}

export default Panel;
