import './style.css'
function Footer() {

    return (
      <div className="bgRodape">
        <div className="rodape container">
          <img src="./src/assets/logo_bianca.png" alt="" />
          <div className="redesSociais">
            <a href="https://github.com/BiancaBarcelos"><img src="./src/assets/git.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/bianca-barcelos-a98255114/"><img src="./src/assets/linkedin.png" alt="" /></a>
            <a href="https://www.instagram.com/bisilvabarcelos/"><img src="./src/assets/instagram.png" alt="" /></a>
          </div>
        </div>
      </div>
    )
}

export default Footer;