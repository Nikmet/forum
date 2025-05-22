export interface IContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = ({ children, className = "" }: IContainerProps): React.JSX.Element => {
    return <div className={`${className} max-w-[1200px] w-full px-4 mx-auto`}>{children}</div>;
};
