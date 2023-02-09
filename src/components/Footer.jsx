
const Footer = () => {
  return (
    <div className="py-5 text-center">
      <div className="flex text-center justify-center gap-10 text-4xl">
        <a href="https://github.com/acarrascocesa/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/angel-carrasco24/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/josecesa25/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Angel Carrasco. All rights reserved.
      </p>
    </div>
  )
}

export default Footer