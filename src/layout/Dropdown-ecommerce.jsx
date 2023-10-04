import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

export function SideFilter() {
  const data = useSelector((state) => state.products.products);

  const categories = [...new Set(data.map((ele) => ele.category))];
  const [openCategory, setOpenCategory] = useState(null);

  const handleOpenCategory = (ele) => {
    setOpenCategory(openCategory === ele ? null : ele);
  };

  return (
    <>
      {categories.map((ele, id) => {
        const subcategories = data
          .filter((elem) => elem.category === ele)
          .map((elem) => elem.subcategory);
        const newsub = [...new Set(subcategories)];
        return (
          <Accordion key={id} open={openCategory === ele}>
            <AccordionHeader className="bg-red-500 mt-1 p-0 "  onClick={() => handleOpenCategory(ele)}>
              {ele}
            </AccordionHeader>
            <AccordionBody className="bg-red-400 p-0">
              {newsub.map((subcategory, subId) => (
                <div className="bg-gray-200" key={subId}>
                  {subcategory}
                </div>
              ))}
            </AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
}
