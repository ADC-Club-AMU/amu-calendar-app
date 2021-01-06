import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function NewsDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.subTitle}</Text>
        <View style={styles.userContainer}>
          <ListItem
            //image={require("../assets/c.jpg")}
            title="Controller Office"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default NewsDetailsScreen;
