import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { State, ActionTypes } from './types';
import * as actions from './actionCreators';

const initialState = {
  notesList: [
  {
    id: 0,
    title: "Task list",
    notes: [
      {
        id: 0,
        title: "Login form",
        description: "Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука об отношениях между объектами, о которых ничего не известно, кроме описывающих их некоторых свойств, — именно тех, которые в качестве аксиом положены в основание той или иной математической теории. Исторически сложилась на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы.",
        dueTo: new Date('December 17, 1995 03:24:00'),
        isComplete: true,
        asset: '///',
      },
      {
        id: 1,
        title: "Register form",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        dueTo: new Date('December 17, 1995 03:24:00'),
        isComplete: true,
        asset: '///',
      },
      // {
      //   id: 2,
      //   title: "Authorization",
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      //   dueTo: new Date('December 17, 1995 03:24:00'),
      //   isComplete: false,
      //   asset: '///',
      // }
    ]
  },
  {
    id: 1,
    title: "In Progress",
    notes: [
      {
        id: 3,
        title: "Create structure",
        description: "Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука об отношениях между объектами, о которых ничего не известно, кроме описывающих их некоторых свойств, — именно тех, которые в качестве аксиом положены в основание той или иной математической теории. Исторически сложилась на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы.",
        dueTo: new Date('December 17, 1995 03:24:00'),
        isComplete: false,
        asset: '///',
      },
      // {
      //   id: 3,
      //   title: "Add docker environment",
      //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //   dueTo: new Date('December 17, 1995 03:24:00'),
      //   isComplete: false,
      //   asset: '///',
      // }
    ]
  },
  // {
  //   id: 2,
  //   title: "Completed",
  //   notes: [
  //     {
  //       id: 5,
  //       title: "Create environment",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //       dueTo: new Date('December 17, 1995 03:24:00'),
  //       isComplete: true,
  //       asset: '///',
  //     },
  //     {
  //       id: 6,
  //       title: "Initial ticket",
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //       dueTo: new Date('December 17, 1995 03:24:00'),
  //       isComplete: true,
  //       asset: '///',
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Backlog",
  //   notes: [
  //     {
  //       id: 7,
  //       title: "Management",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //       dueTo: new Date('December 17, 1995 03:24:00'),
  //       isComplete: true,
  //       asset: '///',
  //     }
  //   ]
  // }
]};

export type Action = ActionType<typeof actions>;

const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES_LIST:
      return state;

    default:
      return state;
  }
};

export default reducer;
