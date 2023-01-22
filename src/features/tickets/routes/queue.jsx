import React from "react";
import { Col, Divider, List, Row, Typography } from "antd";
import { useHideMenu } from "../../../hooks/use-hide-menu";
import { SocketContext } from "../../../context/socket-context";
import { useGetLastTickets } from "../api/get-last-tickets";

const { Title, Text } = Typography;

export function Queue() {
  const [tickets, setTickets] = React.useState([]);
  const { socket } = React.useContext(SocketContext);
  const { lastTickets } = useGetLastTickets();

  useHideMenu(true);

  React.useEffect(() => {
    setTickets(lastTickets);
  }, [lastTickets]);

  React.useEffect(() => {
    socket.on("last13", (tickets) => {
      setTickets(tickets);
    });
    return () => {
      socket.off("last13");
    };
  }, [socket]);

  return (
    <>
      <Title level={1}>Attending to the customer</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${ticket.number}`}
                  description={
                    <Text type="secondary">On desk: {ticket.desktop}</Text>
                  }
                />
                <Text>{ticket.agent}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${ticket.number}`}
                  description={
                    <Text type="secondary">On desk: {ticket.desktop}</Text>
                  }
                />
                <Text>{ticket.agent}</Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
