interface TitlePageProps {
  title: string;
  children?: React.ReactNode;
}

export const TitlePage = ({ title, children }: TitlePageProps) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-muted-foreground">{title}</p>
      {children}
    </div>
  );
};
