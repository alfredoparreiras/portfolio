import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Project = {
    src: string,
    title?: string,
    id: number,
}

type ShuffleHeroProps = {
  squareData: Project[]
}

const ShuffleHero = ({ squareData }: ShuffleHeroProps) => {
  return (
    <section className="w-full px-8 py-5 grid grid-cols-1 items-center gap-8 mx-auto">
      <ShuffleGrid squareData={squareData} />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (data) => {
  return shuffle(data).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

type ShuffleGridProps = {
  squareData: Project[];
};

const ShuffleGrid = ({ squareData }: ShuffleGridProps) => {
  const timeoutRef = useRef<number | null>(null);
  const [squares, setSquares] = useState(generateSquares(squareData));

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(squareData));

    timeoutRef.current = setTimeout(shuffleSquares, 6000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleHero;
