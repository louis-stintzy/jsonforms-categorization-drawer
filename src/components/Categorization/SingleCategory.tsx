// packages/vanilla-renderers/src/complex/categorization/SingleCategory.tsx
import type { Category, JsonSchema } from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";

export interface CategoryProps {
  category: Category;
  schema: JsonSchema;
  path: string;
}

function SingleCategory({ category, schema, path }: CategoryProps) {
  // TODO: add selected style
  console.log("single category");
  console.log(category);
  console.log(schema);
  return (
    <div id="categorization.detail">
      {category.elements.map((child, index) => (
        <JsonFormsDispatch
          key={`${path}-${index}`}
          uischema={child}
          schema={schema}
          path={path}
        />
      ))}
    </div>
  );
}

// import { schema } from "../../schemas/Set1/schema";
// import { UISchema } from "../../schemas/Set1/UISchema";

// function SingleCategory() {
//   const category = UISchema.elements[0] as Category;
//   console.log("single category");
//   console.log(category);
//   return (
//     <div id="categorization.detail">
//       {category.elements.map((child, index) => (
//         <JsonFormsDispatch
//           key={`${index}`}
//           uischema={child}
//           schema={schema}
//           //  path={path}
//         />
//       ))}
//     </div>
//   );
// }

export default SingleCategory;
