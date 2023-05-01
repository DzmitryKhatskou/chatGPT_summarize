import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Enhance your article summarization process with ChatGPT's powerful
        algorithms, allowing you to extract key insights and ideas quickly and
        easily.
      </h2>
    </header>
  );
};

export default Hero;
