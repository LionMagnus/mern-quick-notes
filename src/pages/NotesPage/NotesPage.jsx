import  NoteCard from '../../components/Note/NoteCard';

import CreateNewNote from "../../components/NewNote/NewNote";

export default function AllNotes({notes, user}) {
  return (
    <>
      <h1>Notes</h1>
      <div>
        <CreateNewNote setNotes={setNotes} notes={notes} />
      </div>
      {notes.length === 0 ?
        <span>No Notes Yet!</span>
        :
        <div>
          {notes.map((note, i) => (
            <NoteCard notes={note} key={i} user={user}/>
          ))}
        </div>
      }
    </>
  );
}