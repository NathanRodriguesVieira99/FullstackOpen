interface HelloProps {
  name: string;
  age: number;
}

const Hello = ({ name, age }: HelloProps) => {
  console.log(name, age);
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={friends[0].name} age={friends[0].age} />
      <Hello name={friends[1].name} age={friends[1].age} />
    </>
  );
};

export default App;
