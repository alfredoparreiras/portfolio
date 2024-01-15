import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ShuffleHeroProps = {
  squareData: string[]
}

const ShuffleHero = ({ squareData }: ShuffleHeroProps) => {
  return (
    <section className="w-full px-8 py-5 grid grid-cols-1 items-center gap-8 mx-auto">
      <ShuffleGrid squareData={squareData} />
    </section>
  );
};

const shuffle = (array : string[]) => {
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

const generateSquares = (data: string[]) => {
  return shuffle(data).map((sq,index) => (
    <motion.div
      key={index}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

type ShuffleGridProps = {
  squareData: string[];
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

    timeoutRef.current = setTimeout(shuffleSquares, 6000) as unknown as number;
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleHero;
