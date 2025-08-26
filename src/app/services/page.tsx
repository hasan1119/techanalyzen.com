import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Briefcase,
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  Shield,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Briefcase className='w-8 h-8 text-primary' />,
    title: "Business Consulting",
    description:
      "Strategic advice to help your business grow and adapt in a changing world.",
    details:
      "Our consultants work closely with you to identify opportunities, streamline operations, and drive innovation.",
  },
  {
    icon: <Code className='w-8 h-8 text-primary' />,
    title: "Custom Software",
    description: "Tailored software solutions for web, mobile, and enterprise.",
    details:
      "From MVPs to large-scale systems, we deliver robust, scalable, and secure applications.",
  },
  {
    icon: <Globe className='w-8 h-8 text-primary' />,
    title: "Digital Marketing",
    description: "Grow your brand with SEO, SEM, and social media expertise.",
    details:
      "We help you reach your audience and convert leads with data-driven campaigns.",
  },
  {
    icon: <Users className='w-8 h-8 text-primary' />,
    title: "Team Training",
    description: "Upskill your workforce with hands-on workshops and courses.",
    details:
      "Our trainers deliver practical sessions on tech, leadership, and productivity.",
  },
  {
    icon: <Database className='w-8 h-8 text-primary' />,
    title: "Data Solutions",
    description: "Unlock insights with analytics, BI, and data engineering.",
    details:
      "We design and implement data pipelines, dashboards, and reporting tools.",
  },
  {
    icon: <Cloud className='w-8 h-8 text-primary' />,
    title: "Cloud Services",
    description: "Migrate, manage, and optimize your cloud infrastructure.",
    details:
      "Certified experts in AWS, Azure, and GCP for secure, cost-effective cloud adoption.",
  },
  {
    icon: <Shield className='w-8 h-8 text-primary' />,
    title: "Cybersecurity",
    description:
      "Protect your business with audits, monitoring, and best practices.",
    details:
      "We assess risks, implement controls, and train your team to stay secure.",
  },
  {
    icon: <BarChart className='w-8 h-8 text-primary' />,
    title: "Market Research",
    description:
      "Make informed decisions with deep market and competitor analysis.",
    details:
      "Our research team delivers actionable insights for your strategy.",
  },
  {
    icon: <Layers className='w-8 h-8 text-primary' />,
    title: "Product Design",
    description: "From idea to launch, we design user-centric products.",
    details:
      "UI/UX, prototyping, and user testing to ensure your product delights customers.",
  },
];

export default function ServicesPage() {
  return (
    <section className='w-full min-h-[80vh] py-16 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Services</h1>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          Explore our full range of services designed to help your business
          thrive in the digital age.
        </p>
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {SERVICES.map((service, idx) => (
          <Card
            key={idx}
            className='flex flex-col h-full shadow-md border hover:shadow-xl transition-shadow duration-200'>
            <CardHeader className='flex flex-row items-center gap-4 pb-2'>
              <div>{service.icon}</div>
              <div>
                <CardTitle className='text-xl font-semibold mb-1'>
                  {service.title}
                </CardTitle>
                <CardDescription className='text-base text-muted-foreground'>
                  {service.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className='pt-0 text-sm text-muted-foreground'>
              {service.details}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
