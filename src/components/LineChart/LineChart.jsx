import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
export default function LineChart() {
  const mathMarksData = [
    {
      id: 1,
      name: "Alice Johnson",
      math_marks: 85,
      physics_marks: 78,
    },
    {
      id: 2,
      name: "Bob Smith",
      math_marks: 78,
      physics_marks: 85,
    },
    {
      id: 3,
      name: "Charlie Brown",
      math_marks: 92,
      physics_marks: 88,
    },
    {
      id: 4,
      name: "David Lee",
      math_marks: 88,
      physics_marks: 90,
    },
    {
      id: 5,
      name: "Eve Davis",
      math_marks: 95,
      physics_marks: 93,
    },
    {
      id: 6,
      name: "Frank Miller",
      math_marks: 67,
      physics_marks: 72,
    },
    {
      id: 7,
      name: "Grace Wilson",
      math_marks: 74,
      physics_marks: 80,
    },
    {
      id: 8,
      name: "Hannah Moore",
      math_marks: 81,
      physics_marks: 77,
    },
    {
      id: 9,
      name: "Ian Clark",
      math_marks: 89,
      physics_marks: 84,
    },
    {
      id: 10,
      name: "Jane Adams",
      math_marks: 77,
      physics_marks: 79,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-3 my-10">
        Math And Physics Marks
      </h1>
      <div className="flex justify-center px-4">
        <LChart width={700} height={400} data={mathMarksData}>
          <Line type="monotone" dataKey="math_marks" stroke="#A594F9" />
          <Line type="monotone" dataKey="physics_marks" stroke="#7AB2D3" />
          <XAxis dataKey="id" />
          <YAxis />
        </LChart>
      </div>
    </div>
  );
}
