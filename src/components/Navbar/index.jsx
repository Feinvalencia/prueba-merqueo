import React, { useState} from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { addName } from '../../redux/actions';
import  user  from '../../resources/image/profile.png'

import "./styles.scss";

 const NavBar = (props) => {

  const [ name, setName ] = useState("");

  const save = () => {
    if (name !== "") {
      props.addName(name);
    }
  };


      return(
        <div className="topnav">
          <Grid fluid>
            <Row>
              <Col xs={4} sm={6} md={6}>
                  
                    <div className="title">
                      Domicilios Test
                    </div>
              </Col>
              <Col xs={8} sm={6} md={6}>
                  <div className="content-input">
                    {
                      props.name === "" ? 
                      (
                        <div>
                          <input placeholder="Pon tu Nombre aqui!" onChange={(e) => setName(e.target.value)} value={name} />
                          <button onClick={() => save()}>Aceptar</button>
                        </div>
                      ) : <div className="content-img"><img className="imguser" alt="img" src={user}></img> <p>Hola! {name}</p></div>
                    }
                  </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
  }



function mapStateToProps(state) {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, { addName })(NavBar);