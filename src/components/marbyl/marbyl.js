import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export const Marbyl = ({ item, marbylsListRef, expansion, setExpansion }) => {
  const { text, backgroundColor } = item;
  const [showExpandedMarbyl, setShowExpandedMarbyl] = useState(false);
  const marbylRef = useRef(0);

  const expandMarbyl = () => {
    setShowExpandedMarbyl(!showExpandedMarbyl);
    if (showExpandedMarbyl) {
      setExpansion(false);
      marbylsListRef.current.setNativeProps({ scrollEnabled: true });
      // marbylRef.current.setNativeProps({scrollEnabled: false});
    } else {
      setExpansion(true);
      marbylsListRef.current.setNativeProps({ scrollEnabled: false });
      // marbylRef.current.setNativeProps({scrollEnabled: false});
    }
  };

  return (
    <ScrollView
      ref={marbylRef}
      scrollEnabled={showExpandedMarbyl}
      contentContainerStyle={[
        {
          backgroundColor,
        },
        styles.contentScroll,
        !showExpandedMarbyl && { height },
      ]}
    >
      <Text numberOfLines={!showExpandedMarbyl ? 20 : 100}>{text}</Text>
      {text.length > 574 && (
        <TouchableOpacity onPress={expandMarbyl} style={styles.expandButton}>
          <Text>Expand</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  expandButton: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contentScroll: {
    paddingHorizontal: 20,
    paddingTop: 40,
    width,
  },
});
