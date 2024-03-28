import {
  BarChart as BC,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { getStoreBookRead } from "../../utility/localstorage";
import { useState, useEffect } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const BarChart = ({ reads }) => {
  const [booksread, setbookread] = useState([]);
  console.log(reads);
  useEffect(() => {
    const storReadIds = getStoreBookRead();
    if (reads?.length > 0) {
      const readbook = reads.filter((read) =>
        storReadIds.includes(read.bookId)
      );
      setbookread(readbook);
    }
  }, []);

  console.log(booksread);

  return (
    <div className="bg-opp-color container mx-auto border rounded-lg ">
      <BC
        width={1000}
        height={500}
        data={booksread}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {booksread.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BC>
    </div>
  );
};

export default BarChart;
