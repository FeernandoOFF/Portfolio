import Link from 'next/link';
import { motion } from 'framer-motion';
import { Timeline } from 'antd';
import {
  CloudOutlined,
  GithubOutlined,
  InstagramOutlined,
  RocketOutlined,
  UnlockOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { ButtonComponent } from '../components/general/ButtonComponent';
import { SocialLink } from '@/components/general/SocialLink';
import { ItemRail } from '@/components/indexPage/ItemRail';
import { TimeLineItem } from '@/components/general/TimeLineItem';
import Layout from '@/components/general/Layout';

const Home = () => {
  return (
    <div>
      <MainView />
      <Work />
      <Skills />
      <Testimonials />
    </div>
  );
};

Home.suppressFirstRenderFlicker = true;
Home.getLayout = (page) => <Layout title="Home |  Feernandooff">{page}</Layout>;

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
          <span className="text-cYellow font-bold "> THIGS DONE</span>
        </p>
        <div className="buttons normalText hidden lg:flex font-semibold mt-[5vh] w-full lg:container mx-auto">
          <ButtonComponent href="/" primary>
            Contact Me
          </ButtonComponent>
          <ButtonComponent href="/about">About Me</ButtonComponent>
        </div>
        <div className="hidden lg:flex contact mt-[5vh] justify-around max-w-[220px] lg:max-w-[300px] flex-wrap gap-4 lg:gap-8 ">
          <SocialLink href="/">
            <InstagramOutlined />
          </SocialLink>
          <SocialLink href="/">
            <YoutubeOutlined />
          </SocialLink>
          <SocialLink href="/">
            <GithubOutlined />
          </SocialLink>
          <SocialLink href="/">
            <InstagramOutlined />
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

export const Work = (props) => {
  return (
    <article className="min-h-[50vh] container mt-[5vh] mx-auto">
      <div className="tech">
        <div className="title text-center">
          <h5 className="subtitle ">What i&lsquo;m good at</h5>
          <h5 className="yellowTitle">SPECIALIZED IN</h5>
        </div>
        <div className="items w-full lg:w-10/12 flex justify-between mx-auto my-[5vh] text-xs lg:text-base text-center lg:text-left">
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between ">
            <div className="bg-[#fb920057] h-16 w-16 rounded-xl lg:mr-4 grid place-items-center">
              <img src="/phone.png" alt="" />
            </div>
            <div className="text lg:mt-0 mt-4">
              <h2 className="font-semibold my-2">App Mobile Development</h2>
              <p>I’ll do a incredible app</p>
            </div>
          </div>
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between  ">
            <div className=" bg-[#5F31A026] h-16 w-16 rounded-[34%] lg:mr-4  grid place-items-center">
              <img src="/website.png" alt="" />
            </div>
            <div className="text lg:mt-0 mt-4">
              <h2 className="font-semibold my-2">Web Development</h2>
              <p>I’ll do a incredible app</p>
            </div>
          </div>
          <div className="item flex flex-col lg:flex-row justify-center items-center lg:justify-between  ">
            <div className="relative h-16 w-16 rounded-md lg:mr-4 grid place-items-center">
              <img src="/cpu.png" alt="" className="semiImage" />
              <div className="semiCircle h-10 w-20"></div>
            </div>

            <div className="text lg:mt-0 mt-4">
              <h2 className="font-semibold my-2">
                Integration with Electroics
              </h2>
              <p>I’ll do a incredible app</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio w-full text-center mt-[20vh]">
        <div className="title">
          <h5 className="yellowTitle">PORTFOLIO</h5>
          <h5 className="subtitle ">My Recent Work</h5>
        </div>
        {/* <ItemRail /> */}
      </div>
    </article>
  );
};

export const Skills = (props) => {
  const skills = [
    { name: 'HTML', value: '90' },
    { name: 'CSS', value: '90' },
    { name: 'React/Next', value: '90' },
    { name: 'Vue', value: '90' },
    { name: 'Nest/Express', value: '90' },
    { name: 'Nginx', value: '90' },
    { name: 'Mysql/PostgreSQL', value: '90' },
    { name: 'Digital Ocean', value: '90' },
    { name: 'Git', value: '90' },
  ];
  return (
    <article className="container mx-auto text-center min-h-[50vh]">
      <div className="title">
        <h5 className="yellowTitle">MY STACK</h5>
        <h5 className="subtitle ">Skills & Experiences</h5>
      </div>
      <div className="flex w-full flex-col lg:flex-row justify-between my-[15vh]">
        <div className="skillset w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 max-w-[800px]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className=" h-36 bg-cYellow rounded-md opacity-60"
            >
              {skill.name}
            </div>
          ))}
        </div>
        <div className="trayectory w-full lg:w-1/3  mt-[10vh] lg:mt-10">
          <Timeline mode="left">
            <Timeline.Item
              dot={<RocketOutlined className="text-lg" />}
              label={
                <p className="text-xl lg:text-3xl text-cYellow font-semibold">
                  2020
                </p>
              }
            >
              <TimeLineItem />
            </Timeline.Item>
            <Timeline.Item
              dot={<UnlockOutlined className="text-lg" />}
              label={
                <p className="text-xl lg:text-3xl text-cYellow font-semibold">
                  2021
                </p>
              }
            >
              <TimeLineItem />
            </Timeline.Item>
            <Timeline.Item
              dot={<CloudOutlined className="text-lg" />}
              label={
                <p className="text-xl lg:text-3xl text-cYellow font-semibold">
                  2022
                </p>
              }
            >
              <TimeLineItem />
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </article>
  );
};
export const Testimonials = (props) => {
  return (
    <article className="mt-[15vh]">
      <div className="imgBackground min-h-[75vh] pt-[5vh]">
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
              </span>{' '}
              - CEO Accesa.me
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 text-center mt-[5vh]">
        <h5 className="yellowTitle">CONTACT</h5>
        <div className="grid lg:grid-cols-3 lg:gap-48 items-center mt-8 px-8">
          <div className="links my-16 lg:my-8 flex justify-between items-center max-w-[330px]">
            <SocialLink href="/"> x</SocialLink>
            <SocialLink href="/"> x</SocialLink>
            <SocialLink href="/"> x</SocialLink>
          </div>
          <div className="text min-w-[300px] text-center">
            <h5 className="text-2xl font-bold">
              Got a Project? Let&apos;s Talk
            </h5>
            <p className="lg:max-w-[30vw] text-center font-semibold my-10 lg:my-4 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              neque voluptatibus illo exercitationem aspernatur voluptates quas!
            </p>
          </div>
          <div className="contact ">
            <button className="text-white font-semibold lg:px-8 px-4 py-3 rounded-lg bg-cYellow mr-6 lg:mr-14 shadow-md">
              Contact Me
            </button>
          </div>
        </div>
        <p className="text-cYellow font-semibold text-xl my-8 text-center">
          me@feernandooff.com
        </p>
      </div>
    </article>
  );
};
