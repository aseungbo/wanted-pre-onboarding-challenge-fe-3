# wanted-pre-onboarding-challenge-fe-3
## week 1 과제
1. 사전 과제 feedback
2. Router, Route 컴포넌트를 구현하여 라우팅 기능 적용하기.
- SPA의 라우팅 과정에 대해 이해하고, history API를 활용하여 custom Router를 만들어보자.
```ts
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
```
