import { ButtonComponent } from '@/components/general/ButtonComponent';
import Layout from '@/components/general/Layout';
import { SocialLink } from '@/components/general/SocialLink';

const About = () => {
  return (
    <div className="grid grid-cols-1 w-3/4 lg:w-full lg:grid-cols-2 container mx-auto lg:mt-[15vh]">
      <div className="left mt-[5vh] ">
        <h2 className="text-5xl font-semibold">Hello!</h2>
        <h1 className="text-5xl font-semibold">Im Fernando Obregon.</h1>
        <p className="max-w-[500px] mt-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien,
          sed vel
          <b>tristique aliquet pellentesque amet</b> nisi. Et purus, nunc
          scelerisque mollis euismod habitant lectus volutpat. Netus turpis
          pellentesque in nulla adipiscing. Neque, nisl, odio a, sed vestibulum
          vel.
        </p>
      </div>
      <div className="right justify-center flex flex-col my-[5vh]">
        <div className="circle w-[200px]  h-[200px]  lg:w-[300px] lg:h-[300px] bg-gray-300 rounded-full mx-auto shadow-xl hover:shadow-2xl transition-all"></div>
        <div className="lg:w-1/2 mx-auto mt-11">
          <div className="buttons flex justify-between mx-4">
            <ButtonComponent primary className="mr-6 lg:mr-14">
              Contact Me
            </ButtonComponent>
            <ButtonComponent>Projects</ButtonComponent>
          </div>
          <div className="socialLinks mt-11 grid grid-cols-3 gap-6 w-full lg:w-3/4  mx-auto">
            <SocialLink href="/">Instagram</SocialLink>
            <SocialLink href="/">TikTok</SocialLink>
            <SocialLink href="/">Youtube</SocialLink>
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
