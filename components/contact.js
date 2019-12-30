export default function Contact() {
  return (
    <div className="bg-gray-100 mt-10 pt-10 pb-20 md:pt-20 md:pb-32">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="flex w-full mt-10 items-center md:items-start md:mt-0 md:w-2/5">
          <img
            src="/013-newsletter.png"
            className="w-24 h-24"
            alt="newsletter"
          />

          <div className="ml-8">
            <p
              className="border-b border-black mb-4"
              style={{
                width: "fit-content"
              }}
            >
              Contacto
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>

        <div className="flex w-full mt-10 items-center md:items-start md:mt-0 md:w-2/5">
          <img src="/006-like.png" className="w-24 h-24" alt="like" />

          <div className="ml-8">
            <p
              className="border-b border-black mb-4"
              style={{
                width: "fit-content"
              }}
            >
              Contacto
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
