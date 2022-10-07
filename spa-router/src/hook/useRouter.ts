const useRouter = (path: string) => {
  window.history.pushState({ data: path }, "", path);
};

export default useRouter;
