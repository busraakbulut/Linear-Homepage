export const Container = ({
 children,
 className,
}: {
 children: React.ReactNode;
 className?: string;
}) => {
 return <div className={`${className} w-[120rem] mx-auto`}>{children}</div>;
};
