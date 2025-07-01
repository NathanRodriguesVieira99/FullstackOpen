interface PartProps {
  name: string;
  exercises: number;
}

interface TotalProps {
  parts: PartProps[];
}

export const Total = ({ parts }: TotalProps) => {
  return (
    <p>
      Number of exercises{" "}
      {/* reduce percorre o array acumulando valores: soma total anterior + exercises atual, começando do 0 */}
      {parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  );
};
