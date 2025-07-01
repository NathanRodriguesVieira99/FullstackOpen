interface PartProps {
  name: string;
  exercises: number;
}

interface ContentProps {
  parts: PartProps[];
}

const Part = ({ name, exercises }: PartProps) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

export const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};
