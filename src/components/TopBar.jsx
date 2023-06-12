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
    </div>
  );
};

export default TopBar;
