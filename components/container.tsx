export interface IContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = ({ children, className }: IContainerProps): React.JSX.Element => {
    return <div className={`${className} w-[1200px] mx-auto`}>{children}</div>;
};
