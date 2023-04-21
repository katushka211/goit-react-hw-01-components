import { Head, Row, Table, Td } from './TransactionsHistory.styled';
export const Transactions = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <tbody>
        {items.map(item => {
          return (
            <Row key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};
