import React from "react";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks";
import { SocketContext } from "../../../context/socket-context";

const { Title, Text } = Typography;

export function Desk() {
  const [assignedTicket, setAssignedTicket] = React.useState(null);
  const { auth, logout } = useAuth();
  const { socket } = React.useContext(SocketContext);

  if (!auth.agent || !auth.desk) {
    return <Navigate to="/access" />;
  }

  function nextTicket() {
    socket.emit("next-ticket", auth, (ticket) => {
      setAssignedTicket(ticket);
    });
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>
            Welcome{" "}
            {auth.agent.charAt(0).toUpperCase().concat(auth.agent.slice(1))}
          </Title>
          <Text>
            You are currently working on desk <Text strong>{auth.desk}</Text>
          </Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" danger type="primary" onClick={logout}>
            <CloseCircleOutlined />
            Logout
          </Button>
        </Col>
      </Row>
      <Divider />
      {assignedTicket && (
        <Row>
          <Col>
            <Text>You are attending the following ticket: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {assignedTicket?.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            Next
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
}
