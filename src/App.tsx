import { useState, useEffect } from "react";
import useBreakpoint from "use-breakpoint";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import ExternalLink from "@/components/ExternalLink";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Phone from "./assets/svg/Phone";
import Link from "./assets/svg/Link";
import Envelope from "./assets/svg/Envelope";
import Check from "./assets/svg/Check";
import { serviceContent } from "./assets/content/services";
import { aboutMe } from "./assets/content/aboutMe";
import "./App.css";
import testimonials from "./assets/content/testimonials";

function App() {
  const { breakpoint } = useBreakpoint({
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (breakpoint === "mobile") {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (breakpoint === "tablet") {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  }, [breakpoint]);

  return (
    <div className="font-default flex flex-col items-center justify-center">
      <div className="bg-teal w-full flex justify-center">
        <div
          id="aboutMe"
          className="bg-teal p-5 md:p-10 custom1200:p-15 custom1200:min-h-[770px] w-full max-w-[1200px] flex items-center"
        >
          <div className="flex items-baseline custom1200:items-end justify-center flex-col custom1200:flex-row">
            <div className="bg-blue pb-0 p-2 md:p-3 custom1200:p-4 custom1200:min-w-[550px] flex items-center justify-center rounded-[10%] rounded-b-none custom1200:rounded-bl-[10%]">
              <img
                className="max-xs:h-[90px] max-xs:w-[90px] h-[130px] w-[130px] md:h-[250px] md:w-[250px] custom1200:h-[520px] custom1200:w-[520px] rounded-[8%]"
                src="/profile_pic.webp"
              />
            </div>
            <div className="flex flex-col justify-end p-l-10 space-y-2 max-xs:mt-[-44px] mt-[-50px] md:mt-[-100px] custom1200:mt-0">
              <Header
                header="HelloImLara"
                className="max-xs:w-[150px] w-[180px] md:w-[330px] custom1200:w-[80%] custom1200:min-w-[350px] custom1200:max-w-[500px] max-xs:ml-[115px] ml-[160px] md:ml-[290px] custom1200:ml-[40px] max-xs:mb-[-5px] mb-[-10px] md:mb-[-10px] lg:mb-[-20px]"
              />
              <div className="min-h-[60%] bg-blue p-5 text-smokey-white text-l rounded-[20px] rounded-tl-none custom1200:rounded-bl-none custom1200:rounded-tl-none">
                {aboutMe}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green w-full flex justify-center">
        <div
          id="services"
          className="bg-green p-5 md:p-10 lg:p-10 w-full lg:min-h-[770px] max-w-[1200px] flex flex-col justify-center"
        >
          <Header
            header="WhatCanIDoForYou"
            className="w-[70%] max-w-[400px] md:max-w-[550px] lg:w-[50%] min-h-[200px] max-xs:mb-[-60px] max-xs:mt-[-50px] mb-[-60px] mt-[-40px] md:mb-[-30px] md:mt-[-20px] lg:mb-[-70px]"
          />
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="mt-5 p-8 lg:h-[460px] lg:max-w-[9000px] flex flex-2 bg-teal max-xs:text-sm text-base md:text-lg lg:text-lg text-smokey-white text-left flex-col justify-center rounded-[40px]">
              {serviceContent}
            </div>
            <div className="mt-5 p-8 lg:h-[460px] lg:max-w-[9000px] flex flex-2 bg-teal max-xs:text-sm text-base md:text-lg lg:text-lg text-smokey-white text-center flex-col gap-5 rounded-[40px]">
              <div className="flex items-center gap-2">
                {Check("h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]")}
                <span>Fully insured</span>
              </div>
              <div className="flex items-center gap-2">
                {Check("h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]")}{" "}
                <span>DBS checked</span>
              </div>
              <div className="flex items-center gap-2">
                {Check("h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]")}{" "}
                <span>Safeguarding trained</span>
              </div>
              <div className="flex items-center gap-2">
                {Check("h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]")}{" "}
                <span>Great testimonials</span>
              </div>
              <div className="flex items-center gap-2">
                {Check("h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]")}{" "}
                <span>A micro provider you can trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal w-full flex justify-center">
        <div
          id="contact"
          className="bg-teal p-5 md:p-8 lg:p-25 lg:min-h-[770px] w-full md:max-w-[800px] max-w-[1200px] flex flex-col md:flex-row items-center justify-center"
        >
          <div className="w-full mt-5 lg:mt-0 flex flex-col items-center flex-1 z-1">
            <div className="w-full flex flex-2 lg:flex-0 md:justify-start mb-[20px] lg:mb-[50px] md:mr-[-30%] lg:mr-0">
              <Header
                header="ContactLara"
                className="ml-2 w-[50%] md:w-[200px] lg:w-[350px]"
              />
              {isMobile && (
                <div className="flex flex-col flex-1 items-center justify-center">
                  <img
                    className="w-[70%] max-h-[245px] max-w-[245px] rounded-[8%]"
                    src="/profile_pic_2.webp"
                  />
                </div>
              )}
            </div>
            <div className="md:w-full md:mr-[-30%] lg:mr-[0%] max-xs:ml-0 ml-5 lg:ml-0 space-y-4 md:mt-0 max-xs:text-base text-lg md:text-lg lg:text-2xl text-smokey-white">
              <p className="w-[80%]">
                I’d love to hear from you! Get in touch{" "}
                {/* {(isTablet || isDesktop) && <br />} */}
                using one of the below:
              </p>
              <ExternalLink
                text="lara.helpathome@outlook.com"
                link="mailto:lara.helpathome@outlook.com"
                icon={Envelope(
                  "text-green h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]",
                )}
              />
              <ExternalLink
                text="Find me on Facebook"
                link="https://www.facebook.com/share/1E53AmFSpR/?mibextid=wwXlfr/"
                icon={Link(
                  "text-green h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]",
                )}
              />
              <ExternalLink
                text="07976 720014"
                link="tel:07976720014"
                icon={Phone(
                  "text-green h-[24px] w-[24px] lg:h-[50px] lg:w-[50px]",
                )}
              />
            </div>
          </div>
          {(isTablet || isDesktop) && (
            <div className="flex flex-col flex-1 items-center mt-[30px] md:mt-[80px] md:ml-[-10%] lg:ml-3">
              <img
                className="md:ml-10 lg:ml-5  h-[140px] min-w-[140px] md:h-[250px] md:min-w-[250px] lg:h-[370px] lg:min-w-[370px] rounded-[8%]"
                src="/profile_pic_2.webp"
              />

              <div className="mt-1 lg:mt-3 text-smokey-white text-base md:text-lg lg:text-2xl italic z-1">
                (I’m friendly, come say hi!)
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-teal w-full flex justify-center">
        <div
          id="testimonials"
          className="bg-teal pb-[40px] lg:pb-0 pt-[20px] md:pt-[50px] lg:pt-[10px] lg:mb-[100px] lg:h-fit w-full flex flex-col items-center"
        >
          <Header
            header="DontTakeMyWord"
            className="max-w-[700px] w-[80%] md:w-[60%] lg:w-[40%] mb-[-5px] md:mb-[-10px]"
          />
          <div className="w-full max-xs:py-[20px] py-[13px] md:pt-[20px] lg:py-[25px] bg-blue flex items-center justify-center">
            <Carousel
              className="max-w-[750px] w-[75%] md:w-[80%] lg:w-[70%]"
              opts={{ loop: true, duration: 60 }}
              plugins={[
                Autoplay({
                  delay: 6000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.name}>
                    <Card className="h-full bg-blue">
                      <CardContent className="h-full flex flex-col justify-center text-center select-none">
                        <Testimonial {...t} isMobile={isMobile} />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
