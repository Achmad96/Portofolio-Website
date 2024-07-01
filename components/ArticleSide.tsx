"use client";
import { HeadingMapStruct } from "@/types";
import { formatSlug } from "@/utils/Format";
import { mergeHeadings } from "@/utils/MergeHeadings";
import { Link } from "react-scroll";

interface IArticleSide {
  title: string;
  headings: HeadingMapStruct[];
}

const ArticleSide = ({ title, headings }: IArticleSide) => {
  const mergedHeadings = mergeHeadings(headings);
  return (
    <aside className="fixed -right-40 top-1/4 w-1/3 max-lg:hidden">
      <ul className="menu w-56 rounded-box bg-base-200">
        <h2 className="menu-title">Navigation - {title}</h2>
        {mergedHeadings.map((heading: HeadingMapStruct) => (
          <li key={heading.id}>
            <Link
              to={formatSlug(heading.text)}
              spy={true}
              smooth={true}
              duration={500}
            >
              {heading.text}
            </Link>
            {heading.sub && (
              <ul>
                {heading.sub.map((heading2: HeadingMapStruct) => (
                  <li key={heading2.id}>
                    <Link
                      to={formatSlug(heading2.text)}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {heading2.text}
                    </Link>
                    {heading2.sub && (
                      <ul>
                        {heading2.sub.map((heading3: HeadingMapStruct) => (
                          <li key={heading3.id}>
                            <Link
                              to={formatSlug(heading3.text)}
                              spy={true}
                              smooth={true}
                              duration={500}
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
        ))}
      </ul>
    </aside>
  );
};

export default ArticleSide;
