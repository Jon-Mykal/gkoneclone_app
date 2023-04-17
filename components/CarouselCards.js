import React from 'react'
import { View, Animated } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../data'

const CarouselCards = () => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

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

    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={18}
                style = {{
                    marginBottom: -50
                }}
                swipeThreshold={5}
                // snapToAlignment='center'
                // enableSnap={false}
                inactiveSlideScale={0.75}
                activeAnimationType='timing'
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                // inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                // onScroll={() => console.log("Scrolling")}
                // useScrollView={true}
            />
            {/* <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 25,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(100, 0, 0, 0.92)'
                }}
                inactiveDotStyle={{
                    width: 15,
                    height: 15,
                    // borderRadius: 5
                }}
                animatedFriction={2}
                animatedDuration={2}
                inactiveDotOpacity={0.5}
                inactiveDotScale={0.6}
                tappableDots={true}
            /> */}
        </View>
    )
}


export default CarouselCards