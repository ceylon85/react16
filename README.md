## React16
#### react 16 유용한 기능
  
1. `Fragment` 
- 이전 `React`는 `component`가 아니면 `null` 이라 `string` 등 리턴할 수 없었음  
- 2개 이상을 리턴하고 싶을 경우 하나의 `component`에 담아야 하거나,  `array`를 사용해서 `key`값을 입력하거나 `span` 태그로 감싸야했기에 불필요한 코드가 많았다.  
- `span`으로 감싸게 되면 웹에서도 나오거나 `css`와 꼬일 경우도 있었음.  
- `Fragment` 를 사용하면 불필요한 `span` 이나 `array`를 사용하지 않아도 되고 `string` 도 `return`이 됨.