import Usuario from '../components/usuario';
import Layout from '../components/layout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Profile = (props) => (
    <Layout>
       <div className="row">
            <Usuario 
            id={props.profesor.id}
            nombre={props.profesor.nombre}
            rango={props.profesor.rango}
            avatar={props.profesor.avatar}
            veContactos='true'
            />
            <div className="col-md-8">
            {props.profesor.descripcion ? 
            <div className="card card-user">
                <div className="card-body">
                <h2>Descripción</h2>
                <div className="card-description">
                <p dangerouslySetInnerHTML={{__html: props.profesor.descripcion}}></p>
                </div>
                </div>
            </div>
                :
                ''}
            </div>
       </div>
        
    </Layout>
);

Profile.getInitialProps = async function(props) {

    const res = await fetch(`https://www.axonplataforma.com.ar/kkpato.php?idprofesor=${props.query.idprofesor}`)
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {profesor: data}
  }

export default Profile