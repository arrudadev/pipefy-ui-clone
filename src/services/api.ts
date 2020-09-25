export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar ReactJs',
          labels: ['#7159c1'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 2,
          content: 'Estudar React Native',
          labels: ['#7159c1'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 3,
          content: 'Estudar NodeJs',
          labels: ['#7159c1'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 4,
          content: 'Estudar NextJs',
          labels: ['#54e1f7'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 5,
          content: 'Estudar GatsbyJs',
          labels: ['#54e1f7'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
      ],
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: ['#7159c1'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
      ],
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Projeto de TimeTracking',
          labels: ['#7159c1'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 8,
          content: 'Projeto Plataforma de cursos',
          labels: ['#54e1f7'],
          user:
            'https://avatars0.githubusercontent.com/u/54924880?s=400&u=72d99d0c0ae092cc61a64c94a99a86fd7c4bf719&v=4',
        },
        {
          id: 9,
          content: 'Sites de UI Clone para estudos de front-end',
          labels: ['#7159c1'],
        },
      ],
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content:
            'ReactThemeSwitcher - Landing page with Dark/Light theme switcher.',
          labels: ['#7159c1'],
        },
        {
          id: 12,
          content: 'Discord UI Clone - Discord UI clone for study purposes.',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Twitter UI Clone - Twitter UI clone for study purposes.',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
