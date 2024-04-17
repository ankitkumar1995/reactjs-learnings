import React, { useState } from "react";
import Notes from "../components/Notes";

const DragAndDropNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Atoms: These are the basic building blocks of your UI. They are usually simple and reusable components like buttons, input fields, icons",
    },
    {
      id: 2,
      text: "Molecules: Molecules are composed of one or more atoms. They represent slightly more complex UI elements like a search bar",
    },
    {
      id: 3,
      text: "Organisms: Organisms are more complex components that may contain multiple molecules and atoms. They represent sections of your UI, like a header, sidebar, footer",
    },
    {
      id: 4,
      text: "Templates: Templates combine organisms to create complete page layouts. They define the overall structure of a page but dont include specific content",
    },
    {
      id: 5,
      text: "Pages: Pages are the final level where specific content is added to the templates. Each page represents a different view/route in your application",
    },
  ]);
  return (
    <div>
      drag-and-drop-notes
      <div>
        <Notes notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default DragAndDropNotes;
