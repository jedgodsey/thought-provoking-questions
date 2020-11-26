import React, { Component } from 'react';
import LogInForm from '../components/LogInForm';

class HomePage extends Component {
    render() {
        return (
            <main className="homepage">
                
                <div className = "homepage-left">
                    <h1 className = "ml-5">
                        HomePage!!
                    </h1>
                    <p>
                        Wow this is text
                    </p>
                </div>

                <div className = "homepage-right">
                    <LogInForm/>
                </div>

            </main>
        );
    }
}

export default HomePage;
