export const initialData = {
  notesList: {
    '1': {
      id: 1,
      title: "Task list",
      notes: [
        {
          id: 1,
          title: "Login form",
          description: "Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука об отношениях между объектами, о которых ничего не известно, кроме описывающих их некоторых свойств, — именно тех, которые в качестве аксиом положены в основание той или иной математической теории. Исторически сложилась на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы.",
          dueTo: 'December 17, 1995 03:24:00',
          isComplete: true,
          asset: '///',
        },
        {
          id: 2,
          title: "Register form",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          dueTo: 'December 17, 1995 03:24:00',
          isComplete: true,
          asset: '///',
        },
      ]
    },
    '2': {
      id: 2,
      title: "In Progress",
      notes: [
        {
          id: 3,
          title: "Create structure",
          description: "Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука об отношениях между объектами, о которых ничего не известно, кроме описывающих их некоторых свойств, — именно тех, которые в качестве аксиом положены в основание той или иной математической теории. Исторически сложилась на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы.",
          dueTo:'December 17, 1995 03:24:00',
          isComplete: false,
          asset: '///',
        },
      ]
    },
  },
  lastNotesId: 2, //while we are storing notes in local storage, it will be removed after connecting backend part
  lastNotesListId: 3, //while we are storing notes in local storage, it will be removed after connecting backend part
};
