import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
    <section className="statistics">
    {title && <h3 className="title">{title}</h3>}

     <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
              <li
                className="item"
                key={id}
                >
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
              </li>  
        ))}
                
    </ul>
    </section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};