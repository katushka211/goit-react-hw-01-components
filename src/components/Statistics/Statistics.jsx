import PropTypes from 'prop-types';
import { Item, List, Percentage, Section, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title ? title : 'Upload stats'}</Title>
      <List>
        {stats.map(item => (
          <Item key={item.id}>
            <span>{item.label}</span>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
  title: PropTypes.string,
};
