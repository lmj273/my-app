# Portfolio Clonecording

본 프로젝트는 <https://myself.vercel.app/> 페이지를 참고하여 만들었습니다.

프로젝트 링크

<https://lmj273.github.io/my-app/>

## 개발환경

* **react** : 18.2.0

## 패키지
**react-slick**
```
npm install react-slick --save
```
**react-icons**
```
npm install react-icons --save
```

## 주요 기능

* 슬라이드배너
```js
function SlideMenu() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div id="box">
      <Slider {...settings}>
        <div className="window">
          <img src={Hello} alt="" />
          <div className="text1">
            i{`'`}m groot
            <br />
            <a href="http://naver.com" target="_blank" rel="noreferrer">
              <span>view cv</span>
            </a>
          </div>
        </div>
        <div className="window">
          <img src={Pencil} alt="" />
          <div className="text2">
            I love building <br />
            THINGS!!
            <br />
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <span>view projects</span>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}
```
* 스크롤 애니매에션효과 스크롤시 숨겨진 요소 생성

```js
const useScrollFadeIn = (direction, duration, delay) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, -50%, 0)";
      case "down":
        return "translate3d(0, 50%, 0)";
      case "left":
        return "translate3d(-50%, 0, 0)";
      case "right":
        return "translate3d(50%, 0, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.4 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
```

* 좌측 사이드 메뉴 링크 클릭시 특정 div로 스크롤 이동
```js
<div className="linkList">
        <ul>
          <li>
            <Link to="aboutTextBox" spy smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="eduTextBox" spy smooth>
              Education
            </Link>
          </li>
          <li>
            <Link to="jourTextBox" spy smooth>
              Journey
            </Link>
          </li>
        </ul>
      </div>
```
* 좌측 사이드 메뉴 이미지클릭시 modal 생성 외부 회색 영역 선택시에도 창꺼짐
* 우측하단부 화면 최상단 이동 버튼, 최상단일때는 사라짐
* 화면 너비에 따른 요소 변화

---
