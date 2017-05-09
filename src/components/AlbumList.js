import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }  //Set to empty array
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));  //Set response to albums
  }

renderAlbums() {
  //return created array, key is needed ot be unique
  return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
}


  render() {  //Rerendered when state changes
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
