export const initialData = {
  notesSections: {
    data: {
      'sections/1': {
        id: 1,
        title: 'Section 1 Title',
        color: '#dfe1e6',
      },
      'sections/2': {
        id: 2,
        title: 'Section 2 Title',
        color: '#dfe1e6',
      }
    },
    ids: [
      'sections/1',
      'sections/2',
    ]
  },
  notes: {
    data: {
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
    ids: [
      'notes/1',
      'notes/2',
      'notes/3',
    ],
  },
  idsCounter: {
    lastNotesSectionId: 2,
    lastNoteId: 3,
  },
};
