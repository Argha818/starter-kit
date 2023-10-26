import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "What is Next.Js ?",
      answer: "The React Framework for Production",
    },
    {
      id: 2,
      question: "What is Tailwindcss ?",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 3,
      question: "What is art ?",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
    {
        id: 4,
        question: "What is the work of FAQ page ?",
        answer:"FAQs enable you to deal with specific queries that your customers have about your business",
    },
    {
        id: 5,
        question:"What is the motto of Innovence 2.0?",
        answer:"Work,Learn and Build new Innovations",
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
