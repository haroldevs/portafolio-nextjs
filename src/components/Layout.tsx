const Layout = ({
  children,
  className = "",
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
