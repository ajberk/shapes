import React, { Component } from "react";
import styled from 'styled-components'
import FirstTry from './FirstTry'
import SecondTry from './SecondTry'

class App extends Component {
    state = {
        activeTab: FirstTry
    }


    render() {
        const ActiveComponent = this.state.activeTab
        return (
            <div>
                <Tabs>
                    <a onClick={() => this.setState({ activeTab: FirstTry })}>One</a>
                    <a onClick={() => this.setState({ activeTab: SecondTry })}>Two</a>
                </Tabs>
                <ActiveComponent />
            </div>
        )
    }
}

const Tabs = styled.div`
    * {
        margin: 10px;
        cursor: pointer;
    }
`

export default App