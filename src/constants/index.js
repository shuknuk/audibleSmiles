import {
  arrov,
  linkedln,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
} from "../assets/images";
import {} from "./index";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#cases", label: "Case Studies" },
  { href: "#frq", label: "FRQ" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const initiatives = [
  {
    title: "Donate Hearing Aids",
    description: "Help us gather and distribute hearing aids to those in need.",
    btn: "Learn More",
    bgColor: "bg-white",
    textColor: "text-green-700",
  },
  {
    title: "Fundraising Events",
    description: "Join our community outreach events to raise awareness and funds.",
    btn: "Join Us",
    bgColor: "bg-green-700",
    textColor: "text-white",
  },
  {
    title: "Volunteer Campaigns",
    description: "Volunteer with us to make direct impact in underserved communities.",
    btn: "Sign Up",
    bgColor: "bg-gray-100",
    textColor: "text-green-700",
  },
  {
    title: "Community Partnerships",
    description: "Collaborate with local groups and medical providers for greater reach.",
    btn: "Collaborate",
    bgColor: "bg-white",
    textColor: "text-green-700",
  },
  {
    title: "Educational Outreach",
    description: "Spread knowledge on hearing health, care, and best practices.",
    btn: "Learn More",
    bgColor: "bg-green-700",
    textColor: "text-white",
  },
  {
    title: "Ongoing Support",
    description: "Provide follow-up consultations and resources to recipients.",
    btn: "Contact Us",
    bgColor: "bg-gray-100",
    textColor: "text-green-700",
  },
];

export const caseStudies = [
  {
    title:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    icon: arrov,
    btnLabel: "learn more",
  },
  {
    title:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    icon: arrov,
    btnLabel: "learn more",
  },
  {
    title:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    icon: arrov,
    btnLabel: "learn more",
  },
];

export const workingProcess = [
  {
    number: "01",
    title: "Consultation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    desc: "We will conduct thorough research on your industry, competitors, and target audience. Based on this research, we will develop a customized marketing strategy that aligns with your business goals.",
  },
  {
    number: "03",
    title: "Implementation",
    desc: "Our team will execute the marketing strategy, implementing various tactics across different channels to achieve the desired outcomes. This may include content creation, social media management, paid advertising, and more.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    desc: "We continuously monitor the performance of our marketing efforts, analyzing data and making adjustments as needed to ensure optimal results. This includes A/B testing, performance tracking, and ongoing optimization.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    desc: "We provide regular reports on the progress and effectiveness of our marketing campaigns. Open communication ensures you are always informed about what is happening and the results we are achieving.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    desc: "Based on our findings and your feedback, we make ongoing improvements to our strategy and tactics. Our goal is to continuously enhance your marketing efforts and drive long-term success.",
  },
];

export const team = [
  {
    icon: linkedln,
    imgURL: p1,
    name: "John Smith",
    job: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
  },
  {
    icon: linkedln,
    imgURL: p2,
    name: "Jane Doe",
    job: "Chief Marketing Officer",
    desc: "8+ years of experience in branding and marketing. Skilled in social media strategy and market analysis.",
  },
  {
    icon: linkedln,
    imgURL: p3,
    name: "Robert Brown",
    job: "Lead Developer",
    desc: "7+ years of experience in web development. Specializes in front-end technologies and user experience design.",
  },
  {
    icon: linkedln,
    imgURL: p4,
    name: "Emily White",
    job: "Content Strategist",
    desc: "5+ years of experience in content creation and strategy. Expert in copywriting and content marketing.",
  },
  {
    icon: linkedln,
    imgURL: p5,
    name: "Michael Green",
    job: "SEO Specialist",
    desc: "6+ years of experience in SEO. Focused on on-page optimization, link building, and keyword research.",
  },
  {
    icon: linkedln,
    imgURL: p6,
    name: "Sarah Black",
    job: "PPC Manager",
    desc: "4+ years of experience in managing PPC campaigns. Proficient in Google Ads, Bing Ads, and social media advertising.",
  },
];

export const testimonials = [
  {
    review:
      "This company transformed our online presence and increased our revenue significantly. Their strategic approach and dedication are unmatched.",
    name: "Alice Johnson",
    position: "Marketing Director at ABC Corp",
  },
  {
    review:
      "The team's expertise in digital marketing and their ability to deliver measurable results have been a game-changer for our business.",
    name: "David Wilson",
    position: "CEO of XYZ Ltd",
  },
  {
    review:
      "Working with this team has been a pleasure. Their insights and strategies have greatly enhanced our brand visibility and engagement.",
    name: "Emma Brown",
    position: "Brand Manager at 123 Enterprises",
  },
  {
    review:
      "Their innovative approach to marketing and thorough understanding of our industry have driven impressive growth for our company.",
    name: "James Miller",
    position: "Head of Growth at Innovative Solutions",
  },
  {
    review:
      "The personalized service and exceptional results we received from this team exceeded our expectations. Highly recommended!",
    name: "Olivia Smith",
    position: "Operations Manager at Creative Ventures",
  },
];
