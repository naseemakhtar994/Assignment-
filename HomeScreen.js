import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Picker
} from "react-native";



class HomeScreen extends Component {

  state = {
    value: '',
    results: [],
    isloading: false,
    types: 'movie'
  }


  /**Api Call Function */
  getSearchResults = () => {
    this.setState({ isloading: true })
    const url = `https://itunes.apple.com/search?term=${this.state.value}&entity=${this.state.types}`

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          results: responseJson.results,
          isloading: false
        });

      })
      .catch((error) => {
        this.setState({
          isloading: false
        });
      });
  }


  _renderItem = (item) => {

    return (
      <View style={styles.itemStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DetailsScreen", { item: item })}
        >
          <Image
            style={styles.imageStyle}
            source={{ uri: item.item.artworkUrl100 }} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>

        <View>


          <Picker
            selectedValue={this.state.types}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ types: itemValue })
            }>
            <Picker.Item label="Movie" value="movie" />
            <Picker.Item label="Podcast" value="podcast" />
            <Picker.Item label="Music Video" value="musicVideo" />
            <Picker.Item label="TV Show" value="tvShow" />
            <Picker.Item label="Music" value="music" />
            <Picker.Item label="Audio Book" value="audiobook" />
            <Picker.Item label="Short Film" value="shortFilm" />
            <Picker.Item label="Software" value="software" />


          </Picker>

          <TextInput placeholder={'Search'}
            onChangeText={(value) => {
              this.setState({ value: value })
            }}
            style={styles.textInputStyle} />

          <View style={styles.searchButtonView}>
            <TouchableOpacity
              onPress={() => this.getSearchResults()}
            >
              <View style={styles.searchView}>
                <Text style={{ color: '#fff', padding: 10 }}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>

          {this.state.isloading == false && <FlatList
            style={styles.flatListStyle}
            keyExtractor={(item, index) => index}
            data={this.state.results}
            numColumns={3}
            renderItem={this._renderItem}
          />}

          {this.state.isloading &&
            <ActivityIndicator size="small" color="#000" />
          }

        </View>
      </ScrollView>

    );
  }
}



export default HomeScreen;
const styles = StyleSheet.create({

  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20
  },
  itemStyle: {
    flex: 1,
    padding: 15
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  searchView: {
    width: 150,
    backgroundColor: '#000',
    alignItems: 'center',
    marginTop: 15
  },
  flatListStyle: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10
  },
  textInputStyle: {
    paddingLeft: 15,
    backgroundColor: '#f9f9f9',
    height: 50,
    borderColor: '#efefef',
    marginRight: 51,
    marginLeft: 51,
    marginTop: 80,
    borderWidth: 1
  },
  searchButtonView: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  pickerStyle: {
    height: 50,
    marginBottom: 50,
    width: '100%',
    backgroundColor: '#fff'
  }
});