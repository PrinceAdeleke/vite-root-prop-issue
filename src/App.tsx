import React from 'react';
import { Puck } from '@measured/puck';
import '@measured/puck/puck.css';

const initialData = {
  content: [],
  root: {},
};

const config = {
  root: {
    fields: {
      title: { type: 'text' },
      tags: {
        type: 'array',
        arrayFields: {
          id: { type: 'text' },
          title: { type: 'text' },
        }
      },
    },
    render: ({ children, tags }) => {
      return (
        <div>
          {tags?.map(({ id, title }) => <p key={id}>{`${id || ''} => ${title || ''}`}</p>)}
          {children}
        </div>
      )
    },
  },
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      render: ({ title }) => {
        return <h1>{title}</h1>;
      },
    },
  },
};

const App = () => (
  <Puck data={initialData} config={config} />
);

export default App;
