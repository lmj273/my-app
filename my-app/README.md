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
**react-scroll**
```
npm install react-scroll
```

## 주요 기능

* 슬라이드배너

![slide](https://user-images.githubusercontent.com/122003112/212579085-f8bbcd60-4e23-46b9-b2b1-123a564233e6.gif)

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

![translate](https://user-images.githubusercontent.com/122003112/212579469-83be9609-cc39-4daf-8e6f-2d456b6ae2f8.gif)

```js
const useScrollFadeIn = (direction, duration, delay) => {
  const element = useRef();
  
//direction
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
  
//duration, delay
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
  
//한번만 동작, 동작 타이밍 설정
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

![scroll](https://user-images.githubusercontent.com/122003112/212581686-f1b76c14-f585-468d-8aa3-2087d6c069bd.gif)

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

![modal](https://user-images.githubusercontent.com/122003112/212580148-54ff6422-d780-4d1b-bfe3-730d5f8d2037.gif)

```js
function Modal(abc) {
  const { open, close, header } = abc;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <img src={Dog} alt="" />
            <div>Hellow</div>
          </main>
          <footer>
            <button type="button" className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
~~~~~~
const [modalOpen, setModalOpen] = useState(false);
<div
          className="picture"
          role="presentation"
          onClick={() => setModalOpen(!modalOpen)}
        >
          {modalOpen && (
            <Modal
              open={modalOpen}
              close={() => setModalOpen(modalOpen)}
              header="Profile"
            >
              <main />
            </Modal>
          )}
          <img className="pictureImg" src={Dog} alt="" />
        </div>

```

* 우측하단부 화면 최상단 이동 버튼, 최상단일때는 사라짐

![gotop](https://user-images.githubusercontent.com/122003112/212580548-22528f19-1c29-4c7b-9442-2769b979d1b6.gif)

```js
function GoTop() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 50) { //보이기 시작하는 위치
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <button
      type="button"
      className={BtnStatus ? "topBtn active" : "topBtn"}
      onClick={handleTop}
    >
      Top
    </button>
  );
}

export default Gotop;
```

* 화면에 따른 요소 변화

너비 ~1024 일때 sidemenu, education 영역 요소 변화

너비 ~767 일때 sidemenu 숨김

높이 ~800 일때 sidemenu fixed가 풀리고 같이 스크롤

---
