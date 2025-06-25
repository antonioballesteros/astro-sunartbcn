import React, { use, useEffect } from "react";
import type { Categoria } from "../lib/categorias";
import { cn } from "@/lib/utils";
import { is, tr } from "date-fns/locale";

interface ExpandableCategorySectionProps {
  categorias: Categoria[];
  className?: string;
}

const CategoryExpandable: React.FC<ExpandableCategorySectionProps> = ({
  categorias,
  className,
}) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number>(0);

  const rndNext = (prev: number): number => {
    const next = Math.round(Math.random() * categorias.length);
    return next === prev ? rndNext(prev) : next;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHover) return;
      setSelected((prev) => {
        return rndNext(prev);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <section
      className={cn("flex w-full h-[400px]", className)}
      onMouseEnter={() => {
        setSelected(-1);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        setSelected((prev) => rndNext(prev));
      }}
    >
      {categorias.map((cat, position) => (
        <div
          key={cat.id}
          className={cn(
            "relative w-0 grow transition-all duration-700 border-brand-950 group ",
            position === selected
              ? "opacity-100 w-[300px] border-4 contrast-125 border-brand-950 filter-none "
              : "opacity-80 grayscale hover:opacity-100 hover:w-[300px] hover:border-4 hover:contrast-125 hover:filter-none"
          )}
        >
          <img
            src={cat.imagen}
            alt={cat.nombre}
            className="object-cover h-full "
          />
          <div
            className={cn(
              "flex transition-all duration-500 absolute bottom-0 left-0 w-full bg-black/60 py-2.5",
              position === selected
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <span className="font-bold text-xl text-white mx-auto">
              {cat.nombre}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryExpandable;
