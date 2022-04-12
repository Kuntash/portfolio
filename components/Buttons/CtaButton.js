const CtaButton = ({ title, css, link }) => {
  return (
    <button
      className={`border-2 flex items-center hover:bg-green-light border-green rounded-md`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`text-green ${css} `}
      >
        {title}
      </a>
    </button>
  );
};

export default CtaButton;
