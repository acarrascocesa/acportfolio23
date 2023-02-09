
const CertificatesItem = ({ title, img, details }) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden w-full ">
        <img
        src={img}
        alt="portfolio"
        className="w-full h-52 md:h-56 object-cover cursor-pointer rounded"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {details.map(detail => (
                <p className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md" key={title}>
                    {detail}
                </p>
            ))}
        </p>
      </div>
    </div>
  )
}

export default CertificatesItem