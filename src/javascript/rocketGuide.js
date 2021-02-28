(() => {
  let lastScrollTop = 0;
  document.addEventListener("scroll", initRocketGuide);


  
  function initRocketGuide() {
    const rocket = document.querySelector(".navbar__rocket");
    const travelRoad = document.querySelector(".navbar__guide");
    const clientWidth = travelRoad.clientWidth;
    const currentScrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientTop = document.documentElement.clientHeight;
    render();
    updateLastSrollTop();

    function render() {
      rocket.style.left = `${calcRocketTravelDistance() - 150}px`;
      rocket.style.transform = rocektRotate();
    }
    function rocektRotate() {
      return (deg =
        currentScrollTop > lastScrollTop ? "rotate(0deg)" : "rotate(180deg)");
    }
    function calcScrollTopMaximum() {
      return scrollHeight - clientTop;
    }
    function calcHeightValuePercent() {
      return Math.floor((currentScrollTop / calcScrollTopMaximum()) * 100);
    }
    function calcOnePercentWidthPixel() {
      return (clientWidth - 150) / 100;
    }
    function calcRocketTravelDistance() {
      return calcOnePercentWidthPixel() * calcHeightValuePercent() + 200;
    }
    function updateLastSrollTop() {
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
  }
})();