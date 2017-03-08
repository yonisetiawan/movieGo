import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}))

    }
    renderAlbums() {
        // console.log(this.state.albums);
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album}/>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }

}

export default AlbumList
