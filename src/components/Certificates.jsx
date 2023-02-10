import certificates from "../data/certificates"
import CertificatesItem from "./CertificatesItem"


const Certificates = () => {
  return (
    <div>
    <h1 className="text-4xl md:text-4xl mb-4 md:mb-6 font-bold items-center justify-center text-center mt-24" id="certificates">Education and certificates</h1>
    <div className="flex flex-col md:flex-row items-center justify-center relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-20 ml-20">
        {certificates.map((certificate) => (
          <CertificatesItem
            key={certificate.img}
            img={certificate.img}
            title={certificate.title}
            details={certificate.details}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Certificates