import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import React from 'react';
import { initializeAppThunk } from "./redux/app-reducer"
import { connect } from 'react-redux';
import Preloader from './components/common/Preloaders/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {
        if(!this.props.isInitialized) return <Preloader />

        return (
            <BrowserRouter>
                <div className='app-wrapper'>

                    <HeaderContainer />

                    <Navbar />

                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/settings' render={() => <Settings />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <LoginContainer />} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, { initializeAppThunk })(App)
