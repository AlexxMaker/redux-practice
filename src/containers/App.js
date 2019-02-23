import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist, directorslist } from '../actions'
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList'
import DirectorsList from '../components/DirectorsList'

class App extends Component {
    
    componentWillMount() {
        this.props.movieslist();
        this.props.directorslist();
    }

    renderMovies = (movies) => (
        movies ?
            movies.map((item, i) => (
                <div key={i}>
                    {item.name}
                </div>
        )) : null
    )

    render() {
        return (
            <div>
                <MoviesList {...this.props}/>
                <br/>
                <DirectorsList {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({movieslist, directorslist}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);