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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam et, nulla culpa eligendi at facere incidunt harum. Quibusdam accusamus facere neque cumque magni eaque alias rerum placeat praesentium omnis!
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
