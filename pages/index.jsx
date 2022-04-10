import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Timeline } from 'antd';
import {
  CloudOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  RocketOutlined,
  UnlockOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { ButtonComponent } from '../components/general/ButtonComponent';
import { SocialLink } from '@/components/general/SocialLink';
import { ItemRail } from '@/components/indexPage/ItemRail';
import { TimeLineItem } from '@/components/general/TimeLineItem';
import Layout from '@/components/general/Layout';
import Modal from 'antd/lib/modal/Modal';
import { getProjects } from 'utils/getProjects';

import { isMobile } from 'react-device-detect';
const Home = ({ projects }) => {
  return (
    <>
      <MainView />
      <Work projects={projects} />
      <Skills />
      <Testimonials />
    </>
  );
};

Home.suppressFirstRenderFlicker = true;
Home.getLayout = (page) => <Layout title="Home |  Feernandooff">{page}</Layout>;

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
      revalidate: 15,
    },
  };
}

export default Home;

// ** COMPONENTS

export const MainView = () => {
  return (
    <main className="container px-3 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center   min-h-[90vh]  items-center justify-center relative">
      {/* Desktop */}
      <div className="text hidden lg:block text-2xl lg:text-4xl font-semibold lg:mt-0 mt-[20vh] ">
        <span>Hello!</span>
        <br />
        <span>
          I&lsquo;m <h1 className="inline">Fernando Obregon </h1>
        </span>
        <p className="text-xl largeText">
          I&lsquo;m a web developer, and i get the
          <motion.span
            animate={{ scale: 1.2 }}
            className="text-cYellow font-bold pl-1"
          >
            THINGS DONE
          </motion.span>
        </p>
        <div className="buttons normalText hidden lg:flex font-semibold mt-[5vh] w-full lg:container mx-auto">
          <ButtonComponent href="/" primary className="mr-6 lg:mr-14">
            Contact Me
          </ButtonComponent>
          <ButtonComponent href="/about" className="lg:px-8 px-4 py-3">
            About Me
          </ButtonComponent>
        </div>
        <div className="hidden lg:flex contact mt-[5vh] justify-around max-w-[220px] lg:max-w-[300px] flex-wrap gap-4 lg:gap-8 ">
          <SocialLink href="https://www.instagram.com/feernandooff/">
            <img src="/instagram.png" />
          </SocialLink>
          <SocialLink href="/" className="cursor-not-allowed">
            <img src="/tiktok.png" />
          </SocialLink>
          <SocialLink href="https://github.com/FeernandoOFF">
            <GithubOutlined />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/feernandooff/">
            <LinkedinOutlined />
          </SocialLink>
        </div>
      </div>

      {/* Mobile */}

      <div className="max-w-[260px] lg:max-w-[550px]">
        <img src="/me.svg" alt="" className="w-full" />
      </div>
      <div className="block lg:hidden mt-10 text-center">
        <p className="text-3xl font-medium">
          Hi, My name is
          <br />
          <b className="font-bold"> Fernando</b>
          <br />
          {/* <span className="normalText">I'm a WebDeveloper</span> */}
        </p>
      </div>
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        initial={{
          opacity: 0,
        }}
        className="lg:hidden w-[1px] absolute h-[18vh] bottom-0 left-[50vw] bg-gray-800 animate-bounce"
      ></motion.div>
    </main>
  );
};

export const Work = ({ projects }) => {
  return (
    <article className="min-h-[50vh] mt-[15vh] lg:mt-[5vh] w-full ">
      <div className="tech">
        <div className="title text-center">
          <h5 className="subtitle ">What i&lsquo;m good at</h5>
          <h5 className="yellowTitle">SPECIALIZED IN</h5>
        </div>
        <div className="items w-full lg:w-10/12 flex justify-between mx-auto my-[5vh] text-xs lg:text-base text-center lg:text-left">
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between grayscale cursor-not-allowed scale-75 lg:scale-100">
            <div className="bg-[#fb920057] h-16 w-16 rounded-xl lg:mr-4 grid place-items-center">
              <img src="/phone.png" alt="" />
            </div>
            <div className="text lg:mt-0 mt-4 ">
              <h2 className="font-semibold my-2">
                App Mobile Development (Coming soon){' '}
              </h2>
              <p className="text-gray-500">Creation of multi-platform apps</p>
            </div>
          </div>
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between  ">
            <div className=" bg-[#5F31A026] h-16 w-16 rounded-[34%] lg:mr-4  grid place-items-center">
              <img src="/website.png" alt="" />
            </div>
            <div className="text lg:mt-0 mt-4">
              <h2 className="font-semibold my-2">Web Development</h2>
              <p className="text-gray-500">
                Full stack solutions for all kind of web apps
              </p>
            </div>
          </div>
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between  scale-75 lg:scale-100">
            <div className="relative h-16 w-16 rounded-md lg:mr-4 grid place-items-center">
              <img src="/cpu.png" alt="" className="semiImage" />
              <div className="semiCircle h-10 w-20 "></div>
            </div>

            <div className="text lg:mt-0 mt-4">
              <h2 className="font-semibold my-2">
                Integration with Electroics
              </h2>
              <p className="text-gray-500">
                Inegration across multiple IoT devices
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio w-full text-center mt-[20vh]">
        <div className="title">
          <h5 className="yellowTitle">PORTFOLIO</h5>
          <h5 className="subtitle ">My Recent Work</h5>
        </div>
        <ItemRail projects={projects} />
      </div>
    </article>
  );
};

export const Skills = (props) => {
  const [isModalVisible, setModal] = useState(false);
  const skills = [
    { name: 'React/Next', logo: '/nextReactLogo.png', filter: 'react' },
    { name: 'Nest/Express', logo: '/nestLogo.svg', filter: 'nest' },
    { name: 'Nginx', logo: '/nginxLogo.ico', filter: 'nginx' },
    { name: 'Mysql/PostgreSQL', logo: '/mysqlLogo.png', filter: 'sql' },
    {
      name: 'Digital Ocean',
      logo: '/digitalOceanLogo.png',
      filter: 'digitalocean',
    },
    { name: 'Git', logo: '/github.png', filter: 'git' },
    {
      name: 'Docker',
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
      filter: 'docker',
    },
    {
      name: 'Laravel',
      logo: 'https://laravel.com/img/logomark.min.svg',
      filter: 'laravel',
    },
    {
      name: 'Figma',
      logo: 'https://static.figma.com/app/icon/1/favicon.ico',
      filter: 'figma',
    },
  ];
  return (
    <article className="max-w-[1500px] mx-auto text-center min-h-[50vh]">
      <div className="title">
        <h5 className="yellowTitle">MY STACK</h5>
        <h5 className="subtitle ">Skills & Experiences</h5>
      </div>
      <div className="flex w-full flex-col lg:flex-row justify-between my-[15vh]">
        <div className="skillset lg:w-[60%] grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-12 max-w-[600px]">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{
                transform: 'translateY(-8px) translateX(-8px)',
                boxShadow: 'rgb(173 173 173) 10px 10px 10px',
                filter: 'grayscale(0%)',
              }}
              initial={{
                filter: 'grayscale(98%)',
              }}
              className=" h-36 bg-yellow-600 rounded-md opacity-60 grid place-items-center  "
              // onClick={() => setModal(true)}
            >
              <img src={skill.logo} className="w-full max-w-[115px]" />
            </motion.div>
          ))}
        </div>
        <div className="trajectory w-full lg:w-1/3  mt-[10vh] lg:mt-10 hidden lg:block ">
          <CarreerHistory mode="left" />
        </div>
        <div className="trajectory w-full lg:w-1/3  mt-[10vh] lg:mt-10 block lg:hidden ">
          <CarreerHistory mode="alternate" />
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <div>Some relevant projects... request to backend</div>
      </Modal>
    </article>
  );

  function CarreerHistory({ mode }) {
    return (
      <Timeline mode={mode}>
        <Timeline.Item
          dot={<UnlockOutlined className="text-lg" />}
          label={
            <div>
              <p className="text-xl lg:text-xl text-cYellow font-semibold">
                2020- 2022
              </p>
            </div>
          }
        >
          <TimeLineItem
            title="Accesa Full-Stack Developer"
            points={[
              'Project Consulting',
              'Research',
              'Deployment',
              'Automation',
            ]}
          />
        </Timeline.Item>
        <Timeline.Item
          dot={<RocketOutlined className="text-lg" />}
          label={
            <p className="text-xl lg:text-3xl text-cYellow font-semibold">
              2021
            </p>
          }
        >
          <TimeLineItem
            title="Huawei Hackathon winner"
            points={['Team Work', 'Problem solving', 'Fast MVP delivery']}
            link="https://www.conalep.edu.mx/sites/default/files/2021-03/Convocatoria%20Hackato%CC%81n%20CONALEP%202021_1.pdf"
          />
        </Timeline.Item>
        <Timeline.Item
          dot={<CloudOutlined className="text-lg" />}
          label={
            <p className="text-xl lg:text-3xl text-cYellow font-semibold">
              2022
            </p>
          }
        >
          <TimeLineItem
            title="Call to Code | IBM Hackathon "
            points={['Team Work', 'Problem solving', 'Fast MVP delivery']}
          />
        </Timeline.Item>
      </Timeline>
    );
  }
};
export const Testimonials = (props) => {
  return (
    <article className="mt-[15vh]">
      {/* <div className="imgBackground min-h-[75vh] pt-[5vh]">
        <div className="content mx-auto mt-[5vh] max-w-[500px]">
          <div className="circle w-[200px] h-[200px] rounded-full bg-cYellow mx-auto"></div>
          <div className="text text-center mx-auto">
            <p className="font-semibold my-[5vh] text-black text-xl max-w-[450px] mx-auto">
              “Es un éxcelente programador, me ayudó a iniciar mi empresa,
              siempre fué muy amable y proponía ideas para inovar”
            </p>
            <p className="pb-[5vh]">
              <span className="text-cYellow font-medium text-lg">
                Pedro León
              </span>
              - CEO Accesa.me
            </p>
          </div>
        </div>
      </div> */}
      <div className="p-4 text-center mt-[5vh]">
        <h5 className="yellowTitle">CONTACT</h5>
        <div className="grid lg:grid-cols-3 lg:gap-48 items-center mt-8 lg:px-8">
          <div className="links my-16 lg:my-8 flex justify-between items-center max-w-[330px]">
            <SocialLink href="https://www.linkedin.com/in/feernandooff/">
              <LinkedinOutlined />
            </SocialLink>
            <SocialLink href="https://github.com/FeernandoOFF">
              <GithubOutlined />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/feernandooff/">
              <img src="/instagram.png" />
            </SocialLink>
          </div>
          <div className="text min-w-[300px] text-center">
            <h5 className="text-2xl font-bold">
              Got a Project? Let&apos;s Talk
            </h5>
            <p className="lg:max-w-[30vw] text-center font-semibold my-10 lg:my-4 mx-auto">
              If you are interested in creating a new project and you think that
              i can fit in there, dont think twice about contact me!
            </p>
          </div>
          <div className="contact ">
            <ButtonComponent href="/" primary>
              Contact Me
            </ButtonComponent>
          </div>
        </div>
        <p className="text-cYellow font-semibold text-xl my-8 text-center">
          ferobregon03@gmail.com
        </p>
      </div>
    </article>
  );
};
