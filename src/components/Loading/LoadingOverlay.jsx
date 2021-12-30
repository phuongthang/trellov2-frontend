import React from 'react';
import { Spinner } from 'reactstrap';

export default function LoadingOverlay() {
    return (
        <div className="text-center loading-overlay">
            <Spinner>
                Loading...
            </Spinner>
        </div>

    );
}