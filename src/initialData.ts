export const initialData = {
  notesSections: {
    'sections/1': {
      id: 1,
      title: 'Section 1 Title',
    },
    'sections/2': {
      id: 2,
      title: 'Section 2 Title',
    }
  },
  notes: {
    'notes/1': {
      id: 1,
      sectionId: 1,
      title: 'First notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: true,
      color: '#ffffff',
    },
    'notes/2': {
      id: 2,
      sectionId: 2,
      title: 'Second notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: false,
      color: '#ffffff',
    },
    'notes/3': {
      id: 3,
      sectionId: 1,
      title: 'Third notes title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dueTo: new Date().toISOString().substring(0, 10),
      isCompleted: false,
      color: '#ffffff',
    },
  },
  idsCounter: {
    lastNotesSectionId: 2,
    lastNoteId: 3,
  },
};
