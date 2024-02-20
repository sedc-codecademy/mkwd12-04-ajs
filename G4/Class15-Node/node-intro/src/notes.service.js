import fs from "node:fs";

// fs is the node module that allows us to do file system operations

//Save notes
export const saveNotesToFile = notes => {
  const stringifiedNotes = JSON.stringify(notes);

  console.log("JS", notes);
  console.log("JSON", stringifiedNotes);

  fs.writeFileSync("./data/notes.json", stringifiedNotes, {
    encoding: "utf-8",
  });
};

//Read notes
export const readNotesFromFile = () => {
  const rawNotesData = fs.readFileSync("./data/notes.json", {
    encoding: "utf-8",
  });

  return JSON.parse(rawNotesData);
};
