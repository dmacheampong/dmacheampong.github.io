import React from "react";

function ListLoading(Component) {
    return function LoadingComponent( {isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ textAlign: 'center', fontSize: '30px', color: '#FFFFFF'}}>
                Loading up projects...
            </p>
        );
    };
}

export default ListLoading;