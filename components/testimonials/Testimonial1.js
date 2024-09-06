import Image from "next/image";

export default function Testimonial1({
  image,
  text,
  name,
  position,
  logo,
  background,
}) {
  return (
    <section
      className={`relative isolate overflow-hidden px-4 py-24 sm:py-32 ${background}`}
    >
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          width={120}
          height={40}
          alt="Testimonial Logo"
          src={logo}
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center font-primary text-xl font-semibold leading-8 text-typo-primary sm:text-2xl sm:leading-9">
            <p>{text}</p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              src={"/assets/icons/general/placeholder-testimonial.svg"}
              width={40}
              height={40}
              alt="Testimonial Miniature"
              className="mx-auto rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-primary font-semibold text-typo-primary">
                {name}
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-typo-secondary"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="font-primary font-normal text-typo-secondary">
                {position}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
