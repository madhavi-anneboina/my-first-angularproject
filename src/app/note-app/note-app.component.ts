import { Component } from '@angular/core';

interface Note {
  title: string;
  content: string;
}

@Component({
  selector: 'app-note-app',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.css']
})
export class NoteAppComponent {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };
  selectedNote: Note | null = null;

  addNote() {
    this.notes.push({ ...this.newNote });
    this.newNote = { title: '', content: '' };
  }

  editNote(note: Note) {
    this.selectedNote = note;
  }

  updateNote() {
    if (this.selectedNote) {
      const index = this.notes.indexOf(this.selectedNote);
      if (index >= 0) {
        this.notes[index] = { ...this.selectedNote };
        this.selectedNote = null;
      }
    }
  }

  cancelEdit() {
    this.selectedNote = null;
  }

  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }
}

