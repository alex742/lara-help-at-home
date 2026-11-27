interface Testimonial {
  quote: string;
  name: string;
  jobTitle: string;
  company: string;
  isMobile: boolean;
}

const Testimonial = ({
  quote,
  name,
  jobTitle,
  company,
  isMobile,
}: Testimonial) => (
  <>
    <h2 className="text-smokey-white mb-[10px] font-normal text-base md:text-lg lg:text-xl font-semibold text-center">
      {quote}
    </h2>
    {isMobile && (
      <p className="text-green font-normal text-base md:text-lg lg:text-xl/5 italic">
        {name}, {jobTitle}
      </p>
    )}
    {!isMobile && (
      <>
        <p className="text-green font-normal text-base md:text-lg lg:text-xl/6 italic">
          {name}
        </p>
        <p className="text-green font-normal text-base md:text-lg lg:text-xl/6 italic">
          {jobTitle}
        </p>
        <p className="text-green font-normal text-base md:text-lg lg:text-xl/6 italic">
          {company}
        </p>
      </>
    )}
  </>
);

export default Testimonial;
