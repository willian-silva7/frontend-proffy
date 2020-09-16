// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherForm} />
      <Route path="/give-class" component={TeacherList} />
    </BrowserRouter>
  );
};

export default Routes;
