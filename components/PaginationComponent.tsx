"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArticleType } from "@/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface IPaginationComponents {
  articles: ArticleType[];
  searchParams?: string;
  nextCursor: string | null;
  hasMore: boolean;
}

const PREV_CURSORS_NAME = "previousCursors";

const PaginationComponent = ({
  articles,
  nextCursor,
  hasMore,
  searchParams,
}: IPaginationComponents) => {
  const router = useRouter();
  const startCursor = articles[0]?.id || "";
  const [prevCursors, setPrevCursors] = useState<string[]>([]);

  useEffect(() => {
    const items: string[] = JSON.parse(
      localStorage.getItem(PREV_CURSORS_NAME) as string,
    );
    if (items) setPrevCursors(items);
    if (!searchParams) {
      setPrevCursors((_) => []);
      localStorage.setItem(PREV_CURSORS_NAME, "[]");
      return;
    }
    const handleDelete = () => localStorage.setItem(PREV_CURSORS_NAME, "[]");
    window.addEventListener("beforeunload", handleDelete);
    return () => window.removeEventListener("beforeunload", handleDelete);
  }, []);

  useEffect(() => {
    if (!searchParams) {
      localStorage.setItem(PREV_CURSORS_NAME, JSON.stringify(prevCursors));
    }
  }, [prevCursors]);

  const handlePreviousClick = () => {
    const lastIndex = prevCursors.length - 1;
    router.replace(`?startCursor=${prevCursors[lastIndex]}`);
    setPrevCursors((prev) => prev.slice(0, lastIndex));
  };

  const handleNextClick = () => {
    if (prevCursors.includes(startCursor)) return;
    setPrevCursors((prev) => [...prev, startCursor]);
    router.replace(`?startCursor=${nextCursor}`);
  };

  return (
    <div className="join">
      <button
        disabled={prevCursors.length < 1}
        className={`btn join-item ${prevCursors.length < 1 && "btn-disabled"}`}
        onClick={handlePreviousClick}
      >
        <FaArrowLeft className="h-3 w-3" />
      </button>
      <button className={"btn join-item"}>Page {prevCursors.length + 1}</button>
      <button
        className={`btn join-item ${!hasMore && "btn-disabled"}`}
        disabled={!hasMore}
        onClick={handleNextClick}
      >
        <FaArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
};
export default PaginationComponent;
