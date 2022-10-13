type childrenProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: childrenProps) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
