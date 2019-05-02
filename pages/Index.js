
import Layout from '../components/layout';
import Usuario from '../components/usuario';
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
                <Layout> 
                  <div className="row">
                    {props.profesores.map(profesor => (    
                      <Usuario 
                      id={profesor.id}
                      nombre={profesor.nombre}
                      rango={profesor.rango}
                      avatar={profesor.avatar}
                      />
                    ))}
                  </div>
                </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://www.axonplataforma.com.ar/kklucas.php')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {profesores: data}
}

export default Index
