export const initialData = {
  notesSections: {
    'sections/1': {
      id: 1,
      title: 'Section 1 Title',
      notesIds: [
        'notes/1',
        'notes/3',
      ],
    },
    'sections/2': {
      id: 2,
      title: 'Section 2 Title',
      notesIds: [
        'notes/2'
      ]
    }
  },
  notes: {
    'notes/1': {
      id: 1,
      sectionId: 1,
      title: 'First notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: false,
      color: '#fff',
    },
    'notes/2': {
      id: 2,
      sectionId: 2,
      title: 'Second notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: false,
      color: '#fff',
    },
    'notes/3': {
      id: 3,
      sectionId: 1,
      title: 'Third notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: false,
      color: '#fff',
    },
  },
  idsCounter: {
    lastNotesSectionId: 2,
    lastNotesId: 3,
  },
};
