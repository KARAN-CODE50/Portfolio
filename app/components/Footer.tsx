import React from "react";

// Define types for footer sections
interface FooterLink {
  title: string;
  link: string;
}

interface FooterSection {
  head: string;
  data?: FooterLink[];
  details?: string[];
}

// Footer data with type annotation
const footerData: FooterSection[] = [
  {
    head: "Information",
    data: [
      { title: "About Me", link: "/" },
      { title: "Work Experience", link: "/experience" },
      { title: "Projects", link: "/projects" },
    ],
  },
  {
    head: "Links",
    data: [
      { title: "Github", link: "https://github.com/KARAN-CODE50" },
      { title: "LinkedIn", link: "https://www.linkedin.com/in/karan-sarawagi-3883b3200/" },
      { title: "Instagram", link: "https://www.instagram.com/karan_sarawagi/" },
    ],
  },
  {
    head: "Contact Me",
    details: ["+91 7023372074", "kanuagarwal01@gmail.com"],
  },
];

function Footer() {
  return (
    <div className="relative bg-bg-color md:flex md:items-start md:justify-between md:py-10 font-nohemi p-5 overflow-hidden md:px-20">
      <div>
        <p className="text-2xl font-medium md:text-4xl">
          Karan Sarawagi<span className="text-base-purple">.</span>
        </p>
      </div>
      <div className="grid z-50 md:grid-cols-3 grid-cols-2 gap-2 md:gap-10 mb-7 mt-4 md:mt-0">
        {footerData.map((section, index) => (
          <div key={index} className="pb-3 md:pb-16">
            <p className="text-lg md:text-xl font-light">{section.head}</p>
            {section.data && (
              <div className="text-sm md:text-lg font-[100] tracking-wide">
                {section.data.map((item, subIndex) => (
                  <div key={subIndex} className="flex">
                    <a
                      className="hover:underline transition delay-1000 ease-in-out"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
            {section.details && (
              <div className="text-sm md:text-lg font-[100] tracking-wide">
                {section.details.map((item, subIndex) => (
                  <p key={subIndex}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="md:left-16 z-0 select-none left-0 text-nowrap bottom-[-5px] absolute opacity-5 md:opacity-[2%] text-5xl md:text-[10em] w-full font-bold">
        Karan Sarawagi.
      </p>
    </div>
  );
}

export default Footer;
