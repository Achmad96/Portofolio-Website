type HeadingType = "heading_1" | "heading_2" | "heading_3";

type HeadingMapStruct = {
  id: string;
  text: string;
  type: HeadingType;
  sub?: HeadingMapStruct[];
};

const mergeHeadings = (headings: HeadingMapStruct[]): HeadingMapStruct[] => {
  const result: HeadingMapStruct[] = [];
  const stack: HeadingMapStruct[] = [];
  headings.forEach((heading) => {
    const newHeading: HeadingMapStruct = {
      id: heading.id,
      text: heading.text,
      type: heading.type,
      sub: [],
    };

    while (
      stack.length > 0 &&
      stack[stack.length - 1].type >= newHeading.type
    ) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(newHeading);
    } else {
      const parent = stack[stack.length - 1];
      parent.sub = parent.sub || [];
      parent.sub.push(newHeading);
    }

    stack.push(newHeading);
  });
  return result;
};
export { mergeHeadings };
