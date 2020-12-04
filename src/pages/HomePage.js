import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <main className="homepage">
                
                <div className = "homepage-content p-5">
                    <h1 className = "homepage-title">
                        <strong><u>
                            Thought Provoking Questions

                        </u>
                        </strong>
                    </h1>
                    <h2><i> What is TPQ?</i></h2>
                    <h4 className = "welcome ml-3 mr-1">
                        Welcome... To a place where one can ask <strong>questions</strong>  about any and all things philosophy. Share your <strong> response </strong>. Open doors to only people who have open minds!!!  
                    </h4>
                    <div className = "homepage-quote ml-5 mr-5 mt-4 mb-3">
                        <p>
                            <i> "Philosophy is not so much about coming up with answers as it is about the process of trying to find these answers, using reasoning rather than accepting without question, conventional views, or traditional authority"</i>
                        </p>
                        <h5>---- The Philosophy Book: Big Ideas Simply Explained </h5>
                    </div>
                    
                </div>

            </main>
        );
    }
}

export default HomePage;
