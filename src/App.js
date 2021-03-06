import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {addPost, updateNewPostNext} from "./Components/Redux/State";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Profile/*' element={<Profile profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   updateNewPostNext={props.updateNewPostNext}
                        />}/>
                            <Route path='/Dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                            <Route path='/News/*' element={<News/>}/>
                            <Route path='/Music/*' element={<Music/>}/>
                            <Route path='/Settings/*' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
);
}

export default App;
