import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '/imports/store';

import { requireGuestHook } from './hooks/routes/guest';
import { requireAuthHook } from './hooks/routes/auth';
import { logPageView } from './hooks/routes/ga';
import { verifyUser } from './hooks/routes/verify';

import { MainLayoutContainer } from '/imports/ui/containers/layouts/MainLayoutContainer';

import { UserLayoutContainer } from '/imports/ui/containers/layouts/UserLayoutContainer';
import { RegisterPageComponent } from '/imports/ui/components/pages/RegisterPageComponent';
import { LoginPageComponent } from '/imports/ui/components/pages/LoginPageComponent';
import { ResetPasswordPageContainer } from '/imports/ui/containers/pages/ResetPasswordPageContainer';
import { ForgotPasswordPageContainer } from '/imports/ui/containers/pages/ForgotPasswordPageContainer';
import { FeedbackPageContainer } from '/imports/ui/containers/pages/FeedbackPageContainer';
import { HomePageComponent } from '/imports/ui/components/pages/HomePageComponent';
import { LandingPageComponent } from '/imports/ui/components/pages/LandingPageComponent';

import { ChatPageContainer } from '/imports/ui/containers/pages/ChatPageContainer';
import { ProfilePageContainer } from '/imports/ui/containers/pages/ProfilePageContainer';
import { InvitesPageContainer } from '/imports/ui/containers/pages/InvitesPageContainer';
import { SettingsPageContainer } from '/imports/ui/containers/pages/SettingsPageContainer';
import { StorePageContainer } from '/imports/ui/containers/pages/StorePageContainer';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/verify-email/:token" onEnter={verifyUser}/>
      <Route path="/" component={MainLayoutContainer} onEnter={requireGuestHook}>
        <IndexRoute component={LandingPageComponent}/>
        <Route path="register" component={RegisterPageComponent}/>
        <Route path="login" component={LoginPageComponent}/>
        <Route path="reset-password/:token" component={ResetPasswordPageContainer}/>
        <Route path="forgot-password" component={ForgotPasswordPageContainer}/>
      </Route>
      <Route path="/" component={UserLayoutContainer} onEnter={requireAuthHook}>
        <Route path="invites" component={InvitesPageContainer}/>
        <Route path="posts" component={HomePageComponent}/>
        <Route path="settings" component={SettingsPageContainer}/>
        <Route path="store" component={StorePageContainer}/>
        <Route path="feedback" component={FeedbackPageContainer}/>
        <Route path="chat/:contactUsername" component={ChatPageContainer}/>
        <Route path="group/:groupId-:groupSlug"/> /*TODO: create group chat container and component*/
        {/*<Route path="profile/:username" component={ProfilePageContainer}/>*/}
      </Route>
    </Router>
  </Provider>
);
