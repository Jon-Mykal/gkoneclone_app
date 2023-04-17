import { FlatList, StyleSheet, Text, View,  Animated } from "react-native";
import React from "react";
import CarouselSlideItem from "./CarouselSlideItem";
import data from '../data'
import CarouselPagination from "./CarouselPagination";
import { Button } from "@react-native-material/core";

const CarouselSlider = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [index, setIndex] = React.useState(0);

    const animatePageDots = (event) => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    }
                }
            }
        ], {
            useNativeDriver: false // Done because native UI thread does not support the particular feature
        },)(event);
    }

    const handleViewableItemsChanged = React.useRef(({ changed }) => {
        // console.log('viewableItemsChanged', changed);
        setIndex(changed[0].index);
    }).current;

    const viewabilityConfig = React.useRef({
        itemVisiblePercentThreshold: 50
    }).current;
    
    return (
        <View>
            <FlatList data={data}
                renderItem={({ item }) => <CarouselSlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={animatePageDots}
                onViewableItemsChanged={handleViewableItemsChanged}
            />
            <CarouselPagination data={data} scrollX={scrollX} activeDotIndex={index} />
            {/* <Button title="Log In"
                        color="#EA0000"
                        pressEffectColor="white"
                        pressEffect="highlight"
                        style={{
                            paddingVertical: 10,
                            marginVertical: 20,
                        }}
                        tintColor="white"
                        onPress={() => alert("works")}
                    /> */}
        </View>
    );
}

export default CarouselSlider;

