import './style.scss'
import { Component } from 'react'


export default class Sobre extends Component {

  render(){
      return (
          <>
          <h2 id="sobre">Sobre mim:</h2>
          <p></p>
          <div className="perfil">
            <img className="perfil--img" src="https://avatars.githubusercontent.com/u/85467074?v=4"/>
            <p></p>

            <div className="stack">
            <img title="HTML" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img title="CSS" src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
            <img title="JavaScript" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img title="MySQL" src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />
            <img title="Java" src="https://cdn-icons-png.flaticon.com/512/919/919854.png" />
            <img title="React" src="https://cdn-icons-png.flaticon.com/512/919/919851.png" />
            
            </div>
            </div>
          </>
      )
  }
}