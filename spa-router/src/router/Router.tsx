import { useEffect, useState } from "react";
import Root from "../component/pages/Root";
import useRouter from "../hook/useRouter";
import { RouteProps } from "./Route";

const Router = ({ children }: any): JSX.Element => {
  const [location, setLocation] = useState(window.location.pathname);
  const [page, setPage] = useState(<Root />);
  const push = useRouter;

  useEffect(() => {
    window.onpopstate = (event) => {
      setLocation(event.state.data);
    };
    children.map((e: any) => {
      const { props } = e;
      if (props.path === location) {
        setPage(props.component);
      }
    });
  }, [location]);

  const handleClick = () => {
    if (location === "/") {
      push("/about");
      setLocation("/about");
    } else {
      push("/");
      setLocation("/");
    }
  };

  return (
    <>
      {page}
      <button onClick={handleClick}>
        {location === "/" ? "about" : "go main"}
      </button>
    </>
  );
};

export default Router;
