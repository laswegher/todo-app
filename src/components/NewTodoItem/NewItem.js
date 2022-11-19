import React from 'react';
import FormNewItem from './FormNewItem';
import Card from '../UI/Card';
import './NewItem.css';

function NewItem(props) {
  return (
    <>
      <Card className="new-todo">
        <h1 className="new-todo__text">Goals</h1>
        <FormNewItem {...props} />
        <p className="info">To Delete click on it</p>
      </Card>
    </>
  );
}

export default NewItem;
