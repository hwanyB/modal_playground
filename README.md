# Modal (모달)
<br />
<br />

## 모달이란?
모달은 기본 창(window) 위에 컴포넌트를 띄우는 방식이다.
모달 아래의 창은  **비활성 상태(dimmed)**  이기 때문에 사용자가 활성된 모달 창 외부의 콘텐츠와 인터페이스 할 수 없다.
이 때문에 사용자의 주의 또는 이목을 끌기 위하여 주로 많이 사용되는 기법이라고 할 수 있다.
<br />

## 포탈(Portal)
포탈은 외부 DOM 에 엘리먼트를 렌더링하는 방법을 제공한다.

`ReactDOM.createPortal(child, container)`

첫 번째 인자(child)는 엘리먼트, 문자열, 혹은 fragment와 같은 어떤 종류든 렌더링할 수 있는 React 자식이다.
두 번째 인자(container)는 DOM 엘리먼트이다.
### 사용예시
아래의 예시에서 Portal 컴포넌트는 새로운 엘리먼트를 반환하지 않고, rootElement 하위에 자식 엘리먼트를 렌더링 한다.
여기서 rootElement 는 선언하기에 따라서 DOM 내부에 어디에 있든지 상관 없다.

```import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);

  return (
    <>
      {rootElement ? createPortal(children, rootElement) : children}
    </>
  )
}

export default Portal;
```
<br />
<br />

## react-transition-group
**react-transition-group** 은 리액트 컴포넌트에 트랜지션(transition)을 쉽게 줄 수 있는 라이브러리이다.
<br />
컴포넌트가 appear, enter, exit 될 때 적절한 트랜지션을 줄 수 있기 때문에 모달 on & off 시 좀 더 자연스러운 화면 전환 효과를 줄 수 있다.

### CSSTransition
`<CSSTransition />` 은 트랜지션의 appear, enter, exit 동안 한 쌍의 클래스 이름을 적용합니다.
첫 번째 클래스가 적용된 다음 CSS 전환을 활성화하기 위해 두 번째 *-active 클래스가 적용됩니다.
전환 후에 일치하는 *-done 클래스 이름이 적용되어 전환 상태를 유지합니다.

```
// App.js
function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
```

```
// style.css
.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

```

## 모달 구현 화면
![modal](https://user-images.githubusercontent.com/80311884/146637470-cc99d728-ff44-4764-8917-701b0cbc7b2a.gif)

