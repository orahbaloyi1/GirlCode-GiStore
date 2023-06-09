const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container mx-auto flex justify-between">
        <div className="bar-contact">
          <a href="tel:+27712354815">
            <span className="material-symbols-outlined">call</span>+27712354815
          </a>
        </div>
        <div className="bar-cta">
          <p>
            Get 50% off on selected items | <a href="#">Shop Now</a>
          </p>
        </div>
        <div className="bar-localisation">
          <ul>
            <li>
              Eng<span className="material-symbols-outlined">expand_more</span>
            </li>
            <li>
              Location
              <span className="material-symbols-outlined">expand_more</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
