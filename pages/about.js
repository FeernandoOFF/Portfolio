import { ButtonComponent } from '@/components/general/ButtonComponent';
import { motion } from 'framer-motion';
import Layout from '@/components/general/Layout';
import { SocialLink } from '@/components/general/SocialLink';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const About = () => {
  return (
    <div className="grid grid-cols-1 w-3/4 lg:w-full lg:grid-cols-2 container mx-auto lg:mt-[15vh]">
      <div className="left mt-[5vh] ">
        <h2 className="text-5xl font-semibold">Hello! Im</h2>
        <h1 className="text-5xl font-semibold">Fernando Obregon.</h1>
        <p className="max-w-[500px] mt-8 text-lg">
          A <b>full-stack </b>developer with 1+ years of experience, mainly
          working with <b>JavaScript and PHP.</b> Focused on IoT devices and
          Real-Time interactions. Also like to be part of{' '}
          <b>all the process of a software</b>, since the requirements all the
          way to production.
        </p>
      </div>
      <div className="right justify-center flex flex-col my-[5vh]">
        <motion.div
          whileHover={{
            boxShadow: '#A5A5A5 3px 15px 10px',
            transition: 'translateY(-10px)',
          }}
          style={{
            background: "url('/FernandoObregon.jpeg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="circle w-[200px]  h-[200px]  lg:w-[300px] lg:h-[300px] bg-gray-300 rounded-full mx-auto shadow-xl  transition-all"
        ></motion.div>
        <div className="lg:w-1/2 mx-auto mt-11">
          <div className="buttons flex justify-between mx-4">
            <ButtonComponent primary className="mr-6 lg:mr-14">
              Contact Me
            </ButtonComponent>
            <ButtonComponent href="/projects">Projects</ButtonComponent>
          </div>
          <div className="socialLinks  mt-11  text-3xl grid grid-cols-3 gap-6 w-full lg:w-3/4  mx-auto">
            <SocialLink href="https://github.com/FeernandoOFF">
              <GithubOutlined />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/feernandooff/">
              <LinkedinOutlined />
            </SocialLink>
            <SocialLink href="/" className="cursor-not-allowed">
              <img src="/tiktok.png" />
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

About.getLayout = (page) => (
  <Layout title="About | Feernandooff">{page}</Layout>
);
export default About;
