import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AllQuestions from '../pages/questions/AllQuestions';
import AddQuestion from '../pages/questions/AddQuestion';
import QuestionCategory from '../pages/questions/QuestionCategory';
import ShowQuestion from '../pages/questions/ShowQuestion';
import NotAUser from '../pages/NotAUser';
import AllUsers from '../pages/users/AllUsers';
import PersonalDash from '../pages/users/PersonalDash';


export default (
    <Switch>
        <Route path = '/questions/:category/:questionid' component = {ShowQuestion}/>
        <Route path = '/questions/add' component = {AddQuestion}/>
        <Route path = '/questions/:category' component = {QuestionCategory}/>
        <Route path = '/questions' component = {AllQuestions}/>
        <Route path = '/GottaLoginBuddy' component = {NotAUser}/>
        <Route path = '/users' component = {AllUsers}/>
        <Route path = '/profile' component = {PersonalDash}/>
        <Route path = '/' component = {HomePage}/>
    </Switch>
)