import PropTypes from 'prop-types';
import Header from '../components/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className='mt-16'>{children}</main>
    </>
  );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout;