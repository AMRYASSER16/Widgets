import React, { Fragment, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

function App() {

  const items = [
    {
      title: 'title 1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      title: 'title 2',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      title: 'title 3',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
  ];

  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    }
  ];

  const [selected, setSelected] = useState(options[0])

  return (
    <Fragment>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path="/list">
      <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown selected={selected} onSelected={setSelected} options={options} label='Select a Color' />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </Fragment>
  );
}

export default App;
