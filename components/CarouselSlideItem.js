import { View, Text, StyleSheet, Image, Dimensions, Animated } from "react-native";
import React from "react";
import { Easing } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
const CarouselSlideItem = ({ item, activeDotIndex }) => {
    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.bounce
    });

    return (
        <View style={styles.container} >
            <Animated.Image
                source={{ uri: item.imgUrl }}
                style={[styles.image, {
                    transform: [
                        { translateY: translateYImage }
                    ]
                }]}
            // resizeMode="contain"
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        // borderRadius: 8,
        //   width: ITEM_WIDTH,
        width: width,
        height: height,
        paddingBottom: 60,
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7
    },
    image: {
        width: '80%',
        marginTop: -40,
        height: 300,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingHorizontal: 30
    }
})

export default CarouselSlideItem;