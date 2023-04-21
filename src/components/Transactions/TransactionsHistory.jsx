import PropTypes from 'prop-types';
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

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
