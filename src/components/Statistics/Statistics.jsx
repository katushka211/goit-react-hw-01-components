import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <StatisticCard />
          </li>
        ))}
      </ul>
    </section>
  );
};
