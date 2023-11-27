import { NavLink } from 'react-router-dom'
import './Footer.scss'




const Footer = () => {
  return (
    
    <>
    <footer>
    <div className="news">
    <h2 className="news__title">Novedades</h2>
    <h3 className="news__title2">¿Queres recibir novedades sobre ofertas?</h3>
    <input className="news__mail" name="email" placeholder="Email" type="email"/>
    <button className="news__button">Suscribirme</button>
  </div>
  
  <div className="client">
    <h2 className="client__title">Atención al cliente</h2>
    <NavLink className="client__faq" to="#">FAQ</NavLink>
    <NavLink className="client__payment" to="#">Condiciones y formas de pago</NavLink>
  </div>

  <div className="social">
    <h2 className="social__title">Seguinos en nuestras redes sociales</h2>
    <NavLink className="social__instagram" to="#"><i className="">Instagram</i></NavLink>
    <NavLink className="social__tik-tok" to="#"><i className="">Tik-Tok</i></NavLink>
    <NavLink className="social__facebook" to="#"><i className="">Facebook</i></NavLink>
  </div>
  </footer>
  </>
  )
}

export default Footer