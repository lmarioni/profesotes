import Header from './Header'
import Footer from './Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  // <body className="white-content">
 <body> 
    <Header />
        <div className="main-panel">
          <div className="container" style={{paddingTop: 78}}>
            {props.children}
          </div>
        </div>
    <Footer />
  </body>
)

export default Layout