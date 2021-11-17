import './style.scss'
import { Component } from 'react'


export default class Header extends Component {

  render(){
      return (
          <>
        <nav>
          <div>
          <img id="logo" src="https://cdn-icons-png.flaticon.com/512/5226/5226110.png" />
          </div>
            <ul>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#portifolio">Portifólio</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        </>
      )
  }
}