import Header from './header';
import Footer from './footer';

const layout = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layout}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;