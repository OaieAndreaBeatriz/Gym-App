import Logo from "../../assets/LOGO.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo}/>
          <p className="my-5">
            Our goal is to create awareness of how important it is to exercise and eat properly in order to prevent diseases and musculoskeletal issues through lifestyle changes, not fad diets or workouts. 
          </p>
          <p>© Husgym All Rights Reserved. </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">email: hustlegym@gmail.com</p>
          <p>tel: 0765945231</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer