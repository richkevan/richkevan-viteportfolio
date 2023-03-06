import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter, faTiktok, faDev, faTwitch, faGithub, faFacebook, faBehance, faInstagram } from "@fortawesome/free-brands-svg-icons"



const Contact = () => {
  return (
    <>
    <div className="pageTitle">Contact</div>
    <div className="content grid-cols-1_2">
      <div className="grid-cols-1 gap-1">
          <div className="glass card mw-40">
            <a href='https://www.linkedin.com/in/richkevan' target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="pr-1" />
              LinkedIn
            </a>
          </div>
          <div className="glass card mw-40">
            <a href="https://twitter.com/intent/follow?screen_name=richkevan" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="pr-1" />
              Twitter
            </a>
          </div>
          <div className="glass card mw-40">
            <a href="https://github.com/richkevan" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="pr-1" />
              Github
            </a>
          </div>
          <div className="glass card mw-40"><a href="https://dev.to/richkevan" target="_blank"><FontAwesomeIcon icon={faDev} className="pr-1" />Dev</a></div>
          <div className="glass card mw-40"><a href="https://www.twitch.tv/richkevan" target="_blank"><FontAwesomeIcon icon={faTwitch} className="pr-1"/>Twitch</a></div>
          <div className="glass card mw-40"><a href="https://www.tiktok.com/@richkevan" target="_blank"><FontAwesomeIcon icon={faTiktok} className="pr-1" />TikTok</a></div>
          <div className="glass card mw-40"><a href="https://https://www.facebook.com/richkevan11/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="pr-1" />Facebook</a></div>
          <div className="glass card mw-40"><a href="https://www.instagram.com/rich.kevan/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="pr-1" />Instagram</a></div>
      </div>
      <div>
        <form className="grid-cols-1 gap-3">
          <input name="name" type="text" placeholder="Name" className="border-radius-10 p-input"/>
          <input name="email" type="email" placeholder="Email" className="border-radius-10 p-input"/>
          <textarea name="comment" placeholder="Leave a comment!" className="border-radius-10 p-input"/>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact