interface HeaderProps {
  course: { name: string };
}

export const Header = ({ course }: HeaderProps) => {
  return <h1>{course.name}</h1>;
};
