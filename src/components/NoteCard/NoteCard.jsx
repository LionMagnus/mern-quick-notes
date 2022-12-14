import * as notesAPI from '../../utilities/notes-api';


export default function NoteCard({ notes, user }) {
  const handleClick = async () => {
    notesAPI.deleteNote(notes._id);
    console.log(`clicked ${notes._id}`);
  }


  return (
    <div>
      <div>User: {user.name}</div>
      <div>Posted: {new Date(notes.updatedAt).toLocaleDateString()}</div>
      <div>Note: <strong>{notes.content}</strong> <button onClick={handleClick}>x</button></div>
      <hr />
    </div>
  )
}