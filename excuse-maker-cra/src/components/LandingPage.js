import React from 'react';
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>변명시작</h1>
            <button>
                <Link to="./category">시작하기</Link>
            </button>
            
        </div>
    );
}

export default LandingPage;