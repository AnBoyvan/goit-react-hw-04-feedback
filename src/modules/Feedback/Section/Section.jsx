import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
