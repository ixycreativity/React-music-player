import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Come In And Stay",
      artist: "Dotlights",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/1a58532ef45339e1bd1a3324635e3cf133f9940b-300x300.jpg",
      id: uuidv4(),
      active: true,
      color: ["#2c3584", "#75a4da"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45146",
    },
    {
      name: "Kaleidoscope",
      artist: "El Train",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#7b9a73", "#e1c78e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
    },
    {
      name: "Apple Turnover",
      artist: "Sleepy Fish, coa",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#810706", "#e56e0f"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=37127",
    },
    {
      name: "Full Circle",
      artist: "Moods",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/01/3aaa079444cf9c1d4e0a1f53947321b29ff554c0-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#567941", "#e61115"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35507",
    },
    {
      name: "Hyperspace",
      artist: "Shrimpnose, nobuddy",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6e82a1", "#f7e7da"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41702",
    },
    {
      name: "No Problem",
      artist: "cocabona, Misha, J.Lamotta",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/11/379d68b8db2ba38393c379a5cdf74ff8b255ae9a-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#23376d", "#c5b7a4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=42051",
    },
    {
      name: "Zero Point",
      artist: "dryhope",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/b7f06cec8a0bef89429dd85f68bb718a31289ec6-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#23271c", "#be985a"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41880",
    },
  ];
};

export default chillHop;
