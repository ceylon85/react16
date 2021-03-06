## React16
### react 16 유용한 기능
#
### 1. `Fragment` 
- `Fragment` 를 사용하면 불필요한 `span` 이나 `array`를 사용하지 않아도 되고 `string` 도 `return`이 됨.
  
- 이전 `React`는 `component`가 아니면 `null` 이라 `string` 등 리턴할 수 없었음  
  
- `span`으로 감싸게 되면 웹에서도 나오거나 `css`와 꼬일 경우도 있었음.
    
- 2개 이상을 리턴하고 싶을 경우 하나의 `component`에 담아야 하거나,  
`array`를 사용하거나 `span` 태그로 감싸야했기에 불필요한 코드가 많았다.  
#
### 2. `Portals` 
  
- `react root` 밖에서 `react`를 `render` 할 수 있도록 해준다.  
  
- `portal`은 `react dom` 안에 있음.  
  
- 다른 페이지에서 로딩을 할 때나 `html` 변경하지 못할 때, 워드프레스 작업,   
리액트 플러그인을 만들거나 플러그인 안에서 렌더를 할 때 등  
#
### 3. `Error Boundaries`

- `component`로 하여금 `component children`의 `error`를 구분하고 관리할 수 있게 함.
  
- 캐치 할 수 있는 `component`는 `App`임
#
### 4. `Error Boundaries` with `HOC`
- `HOC(Higher-Order-Component)` 원하는 모든 `component`를 보호
#
### 5. `this.setState(null)`
- `return null` 을 사용하면 업데이트를 컨트롤 할 수 있음