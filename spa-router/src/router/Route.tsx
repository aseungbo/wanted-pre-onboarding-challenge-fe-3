export interface RouteProps {
  path: string;
  component: JSX.Element;
}

const Route = (props: RouteProps): JSX.Element => {
  const { path, component } = props;
  return component;
};

export default Route;
