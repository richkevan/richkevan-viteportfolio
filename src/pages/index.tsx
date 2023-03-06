import profile from "../../assets/profile.png"

const Home = () => {
  return (
    <>
      <div className="pageTitle">Home</div>
      <div  className="content grid-cols-3">
        <div className="sub-content content-1">
          <img src={profile} alt="rich kevan" className="profile"/>
        </div>
        <div className="sub-content content-2">
        Welcome to my portfolio! My name is Rich Kevan and I am a software engineer with a passion for pushing the boundaries of technology. I strive to stay on the cutting edge of development. I'm a firm believer in always learning something new and challenging myself to create solutions that are not only efficient, but also creative and exciting. Here, you will find a selection of my work, including projects for clients in various industries and personal projects. Feel free to take a look around and see what I have to offer!
        </div>
        <div className="sub-content content-3"></div>
    </div>
      
  </>
  )
}

export default Home