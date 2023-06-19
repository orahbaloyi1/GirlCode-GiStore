const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="bar-contact">
        <a href="tel:27712354815">
          <span className="material-symbols-outlined">call</span>27712354815
        </a>
      </div>
      <div className="bar-cta">
        <p>
          Get 50% off on selected items | <a href="#">Shop Now</a>
        </p>
      </div>
      <div className="bar-localization">
        <ul>
          <li>
            Eng<span className="material-symbol-outlined">expand_more</span>
          </li>
          <li>
            Location
            <span className="material-symbol-outlined">expand_more</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
