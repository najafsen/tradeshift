import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MainContent from './components/MainContent';
import Panel from './components/Panel';
import Triangle from './pages/triangle/Triangle';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Panel>
                    <Main>
                        <MainContent>
                            <Triangle/>
                        </MainContent>
                    </Main>
                </Panel>
            </React.Fragment>
        );
    }
}

export default App;
