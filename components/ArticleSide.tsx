"use client";
import { HeadingMapStruct } from "@/types";
import { formatSlug } from "@/utils/Format";
import { mergeHeadings } from "@/utils/MergeHeadings";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { debounce } from "lodash";

interface IArticleSide {
  title: string;
  headings: HeadingMapStruct[];
}

const ArticleSide = ({ title, headings }: IArticleSide) => {
  const mergedHeadings = mergeHeadings(headings);
  const [elementOnRead, setElementOnRead] = useState<string | null>(null);
  const handleScroll = useCallback(
    debounce((event: any) => {
      const scrollTop = event.target.documentElement.scrollTop;
      const headingElements = document.querySelectorAll('[id^="h-"]');
      headingElements.forEach((element) => {
        const elementTop = Math.round(
          element.getBoundingClientRect().top + scrollTop,
        );
        if (scrollTop >= elementTop) {
          setElementOnRead(element.id);
        }
      });
    }, 100),
    [],
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <aside className="fixed right-0 top-1/4 flex h-auto min-h-[30%] w-1/4 justify-center max-lg:hidden">
      <ul className="menu w-56 rounded-box bg-base-200">
        <h2 className="menu-title">Navigation - {title}</h2>
        {!mergedHeadings.length ? (
          <div className="flex h-[80%] w-full items-center justify-center">
            <h2 className="text-center text-xl">No headings</h2>
          </div>
        ) : (
          mergedHeadings.map((heading: HeadingMapStruct) => (
            <li key={heading.id}>
              <Link
                to={`h-${formatSlug(heading.text)}`}
                spy={true}
                smooth={true}
                duration={500}
                className={
                  elementOnRead === `h-${formatSlug(heading.text)}`
                    ? "underline"
                    : ""
                }
              >
                {heading.text}
              </Link>
              {heading.sub && (
                <ul>
                  {heading.sub.map((heading2: HeadingMapStruct) => (
                    <li key={heading2.id}>
                      <Link
                        to={`h-${formatSlug(heading2.text)}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={
                          elementOnRead === `h-${formatSlug(heading2.text)}`
                            ? "underline"
                            : ""
                        }
                      >
                        {heading2.text}
                      </Link>
                      {heading2.sub && (
                        <ul>
                          {heading2.sub.map((heading3: HeadingMapStruct) => (
                            <li key={heading3.id}>
                              <Link
                                to={`h-${formatSlug(heading3.text)}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={
                                  elementOnRead ===
                                  `h-${formatSlug(heading3.text)}`
                                    ? "underline"
                                    : ""
                                }
                              >
                                {heading3.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default ArticleSide;
