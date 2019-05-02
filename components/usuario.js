import Link from 'next/link'

const Usuario = (props) => (

                        <div className="col-md-4" key={props.id}>    
                          <div className="card card-user">
                            <div className="card-body">
                              <p className="card-text">
                                <div className="author">
                                  <div className="block block-one"></div>
                                  <div className="block block-two"></div>
                                  <div className="block block-three"></div>
                                  <div className="block block-four"></div>
                                  <a href="javascript:void(0)">
                                    <img className="avatar" src={props.avatar} alt="..." />
                                    <h5 className="title">{props.nombre}</h5>
                                  </a>
                                  <p className="description">
                                  {props.rango}
                                  </p>
                                </div>
                              </p>
                              <div className="card-description">
                                
                              </div>
                            </div>
                            <div className="card-footer">
                            {
                              props.veContactos ?
                                <div className="button-container">
                                  <Link as={`/profile/${props.id}`} href={`/profile?prodfesorid=${props.id}`}>
                                    <button href={`/profile/${props.id}`} className="btn btn-icon btn-round btn-facebook"><i className="far fa-envelope"></i></button>
                                  </Link>
                                  <Link href="/profile">
                                    <button className="btn btn-icon btn-round btn-facebook"><i className="fab fa-whatsapp"></i></button>
                                  </Link>
                                  <Link href="/profile">
                                    <button className="btn btn-icon btn-round btn-facebook"><i className="fas fa-phone"></i></button>
                                  </Link>
                                </div>
                              :
                              <div className="button-container">
                                <Link href={`/profile/${props.id}`} >
                                  <a className="btn btn-round btn-facebook">Ir al perfil</a>
                                </Link>

                              </div>
                            }
                              
                            </div>
                          </div>
                          </div>
);

export default Usuario