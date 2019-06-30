import React from 'react';
import './blog.css';

class Blog extends React.Component {
    render() {
        return (

            <form className="" onSubmit={this.handleFilter}>
                <h1>Blog</h1>
                <p className="parrafo-buscar">Historias que te van a encantar :)</p>
            </form>
        );
    }
}


export default Blog;