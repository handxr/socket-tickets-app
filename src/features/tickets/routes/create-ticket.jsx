import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { SocketContext } from "../../../context/socket-context";
import { useHideMenu } from "../../../hooks/use-hide-menu";

const { Title, Text } = Typography;

export function CreateTicket() {
  const [ticket, setTicket] = React.useState(null);
  const { socket } = React.useContext(SocketContext);

  useHideMenu(true);

  function createTicket() {
    socket.emit("create-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Create a new ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={createTicket}
          >
            Create a new ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Your ticket number</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
}
