import signatureLogo from "../../../assets/image/signature_logo2.jpg";

import candiceDeVries from "../../../assets/image/team/candice_de_vries.webp";
import debbieFender from "../../../assets/image/team/debbie_fender.webp";
import emmaAmbriz from "../../../assets/image/team/emma_ambriz.webp";
import gloriaWright from "../../../assets/image/team/gloria_wright.webp";
import jodyBooras from "../../../assets/image/team/jody_booras.webp";
import kimBorra from "../../../assets/image/team/kim_borra.webp";
import laviniaStraka from "../../../assets/image/team/lavinia_straka.webp";
import lilleanSupat from "../../../assets/image/team/lillean_supat.webp";
import michelleRandolph from "../../../assets/image/team/michelle_randolph.webp";


export const teamPageConfig = {
  hero: {
    kicker: "Our team",
    title: "Meet the people behind Summit",
    subtitle:
      "From leadership to on-the-ground management, our team brings deep experience and fast response times.",
    logo: signatureLogo,
  },

  sections: [
    {
      id: "corporate-leadership",
      heading: "Corporate Leadership",
      items: [
        {
          id: "lavinia-straka",
          name: "Lavinia Straka",
          role: "Corporate HR & Payroll Manager",
          about:
            "Lavinia joined Summit in 2019 with 15+ years of California Human Resources and Payroll Management experience. She began her career in banking and has worked with Real Estate and legal professionals extensively throughout. She is a longtime member of SAHRA (Sacramento Area Human Resources Association). Lavinia is a Certified Professional through SHRM and attained her Professional in Human resources certification with HRCI in 2009. She holds a Bachelor's Degree from the College of Communication at the University of Texas Austin.",
          image: laviniaStraka,
          socials: {
            linkedin: "#",
          },
        },
      ],
    },

    {
      id: "commercial-property-managers",
      heading: "Property Management Staff / Commercial Property Managers",
      items: [
        {
          id: "jody-booras",
          name: "Jody Booras",
          role: "Regional Commercial Property Manager",
          about:
            "Jody joined Summit in 2000 and currently has over 20 years of Property Management experience. Her exceptional organization and tenant relation skills have allowed her rapid ascent in our company being responsible for several large projects and high profile properties. She is responsible for the management of retail properties. Jody has her Real Property Administrator (RPA) Designation and holds a California Real Estate Sales License. DRE# 01316554",
          image: jodyBooras,
          socials: { linkedin: "#" },
        },
        {
          id: "gloria-wright",
          name: "Gloria Wright",
          role: "Palladio General Manager",
          about:
            "Gloria Wright joined Summit’s team as General Manager of Palladio at Broadstone, a 550,000 square foot open air retail mall. Gloria brings over 25 years of shopping center experience. Gloria began her career as part of the development team of a national builder of outlet centers, and continued to manage and market open air centers throughout her career. She is also a founding board member of the Sunrise Market Place PBID Board of Directors and an active member of the International Council of Shopping Centers.",
          image: gloriaWright,
          socials: { linkedin: "#" },
        },
        {
          id: "kim-borra",
          name: "Kim Borra",
          role: "Regional Commercial Property Manager",
          about:
            "Kim has worked in the commercial real estate industry since 2004. Prior to joining Summit she served as Sr. Property Manager for Cemo Commercial overseeing the property management division with approximately 70 commercial properties, over 200 tenants, an in-house support staff and maintenance department. Earlier in Kim’s career she worked at Buzz Oates Management Group managing over 3 million SF (45 properties) consisting of office, retail, medical mid-rise and light industrial. Kim holds a California Real Estate Sales License. DRE# 01428501",
          image: kimBorra,
          socials: { linkedin: "#" },
        },
        {
          id: "debbie-fender",
          name: "Debbie Fender",
          role: "Regional Commercial Property Manager",
          about:
            "Debbie joined Summit in 2017 with over 30 years experience in Property Management including extensive experience in tenant and investor relations, leasing, project budget preparation, project maintenance, and tenant improvements. Debbie has had previous experience in managing residential communities of up to 600 units, and holds a California Real Estate Sales License. DRE# 1292722",
          image: debbieFender,
          socials: { linkedin: "#" },
        },
      ],
    },

    {
      id: "regional-multifamily",
      heading: "Regional Multi-Family Property Manager",
      items: [
        {
          id: "michelle-randolph",
          name: "Michelle Randolph",
          role: "Regional Multi-Family Property Manager",
          about:
            "Michelle joined Summit in 2024 bringing her extensive background in property management. With over 20 years of experience in the field, she has advanced her career since becoming an on-site multi-family leasing agent in 2000. Michelle has managed Homeowner's Associations, lease-up of new multi-family developments and an array of various other product types. She is known for her commitment to delivering top-notch customer service and achieving successful outcomes for her clients.",
          image: michelleRandolph,
          socials: { linkedin: "#" },
        },
        {
          id: "emma-ambriz",
          name: "Emma Ambriz",
          role: "Regional Multi-Family Property Manager",
          about:
            "Emma joined Summit REM in 2025, bringing over 12 years of experience in property management. She has successfully led operations across a diverse portfolio that includes commercial properties, new lease-up developments, multifamily communities, mobile home parks, and homeowners associations (HOAs). Emma is recognized for her strong leadership, hands-on management style, and ability to thrive in fast-paced environments. Her confident, results-driven approach has consistently delivered operational excellence and strengthened team performance.",
          image: emmaAmbriz,
          socials: { linkedin: "#" },
        },
      ],
    },

    {
      id: "corporate-staff",
      heading: "Corporate Staff",
      items: [
        {
          id: "lillean-supat",
          name: "Lillean Supat",
          role: "Administrative Residential Property Manager",
          about:
            "Lillean joined Summit in 2021 as a Leasing Consultant with no previous experience in property management. With Lillean’s excellent work ethic and ability to grasp new concepts quickly, she was promoted to the Community Director position in 2022. Lillean has since joined Summit’s corporate office as the Administrative Property Manager where she supports the Regional Property Managers and on-site teams.",
          image: lilleanSupat,
          socials: { linkedin: "#" },
        },
        {
          id: "candice-devries",
          name: "Candice DeVries",
          role: "Administrative Commercial Property Manager",
          about:
            "Candice joined Summit Property Management in 2024 as an Administrative Commercial Property Manager. She is a dedicated professional with 1.5 years of experience in retail property management. During her tenure she honed her skills in lease administration, tenant relations, and facility maintenance. Candice’s strong organizational abilities and keen eye for detail have contributed to enhanced tenant satisfaction and streamlined operations. Her background includes managing diverse retail clients, coordinating with vendors and overseeing onboarding new tenants. She possesses great customer service skills which allows her to problem solve and handle complex issues with professionalism and grace.",
          image: candiceDeVries,
          socials: { linkedin: "#" },
        },
      ],
    },
  ],
};
