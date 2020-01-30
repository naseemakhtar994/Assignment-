import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  
  Image,
  
} from "react-native";



class DetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.detailObject = {}
  }


  componentWillMount() {
    if (this.props.navigation) {
      const viewData = {
        artistName: '',
        collectionName: '',
        trackName: '',
        trackPrice: '',
        kind: '',
      }
      const { item } = this.props.navigation.getParam('item');

      this.detailObject = Object.assign({}, viewData, item);
    }

  }

  render() {

    return (
      <View >
        <View style={{ flexDirection: 'row',alignItems:'center' ,padding:20}}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: this.detailObject.artworkUrl100 }}
          ></Image>
          <View>
            <Text style={styles.artistNameStyle}>{this.detailObject.artistName}</Text>
            <Text style={styles.movieTextStyle}>{this.detailObject.collectionName}</Text>
            <Text style={styles.movieTextStyle}>{this.detailObject.trackName}</Text>
          </View>
        </View>
        <Text style={styles.movieTextStyle}>Entire Collection Price : ${this.detailObject.trackPrice}</Text>
        <Text style={styles.movieTextStyle}>Type : {this.detailObject.kind} </Text>

      </View>

    );
  }
}

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  item: {},
  artistNameStyle: {
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "#737278",
    marginStart:5,
    fontStyle: "normal",
  },
  movieTextStyle:{
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "#737278",
    marginStart:5
  },
  itemTextViewStyle:{
    marginTop:10
  }
});