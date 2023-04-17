import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen');
const circle = 10;

const CarouselPagination = ({ data, scrollX, activeDotIndex }) => {
    return (
        <View style={styles.container}>
            {
                data.map((_, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                    const outputRange = [circle, 50, circle];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange,
                        extrapolate: 'clamp'
                    });

                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#ccc', '#000', '#ccc'],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View key={index.toString()}
                            style={[styles.dot,
                            { width: dotWidth,  backgroundColor }
                            // activeDotIndex === index && styles.activeDot
                            ]
                            }
                        />
                    );

                })
            }
        </View>
    )
}

export default CarouselPagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    dot: {
        // width: 35,
        height: circle,
        borderRadius: 65,
        backgroundColor: '#bbb',
        marginHorizontal: 5
    },
    activeDot: {
        backgroundColor: '#000'
    }
})