import githubLogo from '../assets/github.svg'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gauransh-juneja"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
   
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/GaushJ"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={githubLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
