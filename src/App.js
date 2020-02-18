import React, {React, Fragment} from 'react';

class ReturnTypes extends Component {
    render() {
        return "hello";
    }
}

class App extends Component {
    render() {
        return (
            <Fragment>
                <ReturnTypes/>
            </Fragment>
        );
    }
}

export default App;
