import React, { useState } from 'react';
import { Card, Table, Button, Badge, Modal, Form, Row, Col } from 'react-bootstrap';

function TablaReservas() {
  const [reservas, setReservas] = useState([
    { id: 1, cliente: 'Juan Pérez', fecha: '2026-10-25', hora: '14:00', personas: 4, mesa: 'Mesa 3', estado: 'Confirmada' },
    { id: 2, cliente: 'María López', fecha: '2026-10-25', hora: '15:30', personas: 2, mesa: 'Mesa 1', estado: 'Pendiente' },
    { id: 3, cliente: 'Carlos Ruiz', fecha: '2026-10-26', hora: '20:00', personas: 6, mesa: 'Mesa 5', estado: 'Confirmada' }
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

  const handleCancelar = (id) => {
    setReservas(reservas.filter(r => r.id !== id));
    setShowModal(false);
  };

  return (
    <div>
      {/* Buscador */}
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body>
          <Row>
            <Col md={12}>
              <Form.Control 
                type="text" 
                placeholder="Buscar por nombre de cliente o mesa..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Tabla de Reservas */}
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white py-3">
          <h5 className="mb-0 fw-bold">Listado General de Reservaciones</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Personas</th>
                <th>Mesa</th>
                <th>Estado</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas
                .filter(r => r.cliente.toLowerCase().includes(busqueda.toLowerCase()))
                .map((res) => (
                  <tr key={res.id}>
                    <td><strong>#{res.id}</strong></td>
                    <td>{res.cliente}</td>
                    <td>{res.fecha}</td>
                    <td>{res.hora}</td>
                    <td>{res.personas} comensales</td>
                    <td><Badge bg="secondary">{res.mesa}</Badge></td>
                    <td>
                      <Badge bg={res.estado === 'Confirmada' ? 'success' : 'warning'}>
                        {res.estado}
                      </Badge>
                    </td>
                    <td className="text-center">
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => {
                          setReservaSeleccionada(res);
                          setShowModal(true);
                        }}
                      >
                        Cancelar
                      </Button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Cancelación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reservaSeleccionada && (
            <p>¿Estás seguro de cancelar la reserva de <strong>{reservaSeleccionada.cliente}</strong> para la <strong>{reservaSeleccionada.mesa}</strong>?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Volver</Button>
          <Button variant="danger" onClick={() => handleCancelar(reservaSeleccionada?.id)}>Sí, Cancelar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TablaReservas;
