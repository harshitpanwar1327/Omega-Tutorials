import Footer from "../components/Footer"
import Header from "../components/Header"

const Gallery = () => {
  return (
    <>
        <div className='w-screen min-h-[100vh] lg:min-h-[120vh] pb-8 bg-center flex flex-col justify-between gap-16'>
          <Header />
        </div>

        <Footer />
    </>
  )
}

export default Gallery