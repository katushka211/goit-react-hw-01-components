import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <h2>{title ? title : 'Upload stats'}</h2>
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </li>
        ))}
      </ul>
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
