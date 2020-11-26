import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AllQuestions from '../pages/questions/AllQuestions';
import AddQuestion from '../pages/questions/AddQuestion';


export default (
    <Switch>
        <Route path = '/questions/add' component = {AddQuestion}/>
        <Route path = '/questions' component = {AllQuestions}/>
        <Route path = '/' component = {HomePage}/>
    </Switch>
)