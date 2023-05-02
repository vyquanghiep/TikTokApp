import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Video } from 'expo-av';
import Constants from '../Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getMusicNoteAnimation } from '../utils/getMusicNoteAnimation';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommentModal from './modals/CommentModal';

const VideoItems = ({ data, isActive }) => {
  const {
    id,
    channelName,
    uri,
    caption,
    musicName,
    likes,
    comments,
    avatarUri,
  } = data;

  const video = useRef(null);
  const [iconVideo, setIconVideo] = useState('pause');
  const [bgBtn, setBgBtn] = useState('transparent');
  const [isPlaying, setIsPlaying] = useState(true);

  // button wish video
  const [wish, setWish] = useState(false);
  const [colorHeart, setColorHeart] = useState('#fff');

  // button follow channel
  const [isFollow, setIsFollow] = useState(false);
  const [iconFollow, setIconFollow] = useState('plus-thick');

  // show comment model
  const [commentVisible, setCommentVisible] = useState(false);

  const handleFollow = () => {
    setIsFollow(!isFollow);
    isFollow ? setIconFollow('check-bold') : setIconFollow('plus-thick');
  };

  const handlePlayVideo = () => {
    setBgBtn('white');
    if (isPlaying) {
      setIsPlaying(false);
      video.current.pauseAsync();
      setIconVideo('play');
    } else {
      setIsPlaying(true);
      video.current.playAsync();
      setIconVideo('pause');
    }
    setTimeout(function () {
      setBgBtn('transparent');
    }, 3000);
  };

  const handleWishVideo = () => {
    setWish(!wish);
    wish ? setColorHeart('red') : setColorHeart('#fff');
  };

  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  const musicNoteAnimation1 = getMusicNoteAnimation(
    musicNoteAnimatedValue1,
    false,
  );
  const musicNoteAnimation2 = getMusicNoteAnimation(
    musicNoteAnimatedValue2,
    true,
  );

  const discAnimationLoopRef = useRef();
  const musicAnimationLoopRef = useRef();

  const triggerAnimation = useCallback(() => {
    discAnimationLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    discAnimationLoopRef.current.start();

    musicAnimationLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicNoteAnimatedValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    musicAnimationLoopRef.current.start();
  }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2]);

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimationLoopRef.current?.stop();
      musicAnimationLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
      musicNoteAnimatedValue2.setValue(0);
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    musicNoteAnimatedValue1,
    musicNoteAnimatedValue2,
  ]);

  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View
      style={[
        styles.container,
        { height: Constants.screen.height - bottomTabHeight },
      ]}
    >
      <Video
        ref={video}
        source={{ uri }}
        shouldPlay={isActive}
        resizeMode="cover"
        useNativeControls={false}
        isLooping
        style={styles.video}
      />

      <TouchableOpacity onPress={handlePlayVideo} style={styles.playButton}>
        <Icon name={iconVideo} size={30} color={bgBtn} />
      </TouchableOpacity>

      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>{channelName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={Constants.images.musicNoteImg}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>

        <View style={styles.bottomRightSection}>
          <Animated.Image
            source={Constants.images.floatingMusicNote}
            style={[styles.floatingMusicNote, musicNoteAnimation1]}
          />
          <Animated.Image
            source={Constants.images.floatingMusicNote}
            style={[styles.floatingMusicNote, musicNoteAnimation2]}
          />
          <Animated.Image
            source={Constants.images.discImg}
            style={[styles.musicDisc, discAnimation]}
          />
        </View>
      </View>

      <View style={styles.verticalBar}>
        <View style={[styles.verticalBarItem, styles.avatarContainer]}>
          <TouchableOpacity>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
            <MaterialCommunityIcons
              name={iconFollow}
              size={16}
              color="#fff"
              style={styles.followIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity onPress={handleWishVideo}>
            <MaterialCommunityIcons
              name="cards-heart"
              size={32}
              color={colorHeart}
              style={styles.verticalBarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>

        <View style={styles.verticalBarItem}>
          <TouchableOpacity
            onPress={() => {
              setCommentVisible(true);
            }}
          >
            <MaterialCommunityIcons
              name="comment-processing"
              size={32}
              color="#fff"
              style={styles.verticalBarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>
        <CommentModal
          visible={commentVisible}
          onClose={() => {
            setCommentVisible(false);
          }}
        />

        <View style={styles.verticalBarItem}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="share"
              size={32}
              color="#fff"
              style={styles.verticalBarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItems;

const styles = StyleSheet.create({
  container: {
    width: Constants.screen.width,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  playButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: Constants.colors.white,
    fontWeight: 'bold',
  },
  caption: {
    color: Constants.colors.white,
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: Constants.colors.white,
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: Constants.colors.white,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 99,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: Constants.colors.primary,
    borderRadius: 99,
  },
  followIcon: {},
  verticalBarIcon: {},
  verticalBarText: {
    color: Constants.colors.white,
    marginTop: 4,
  },
});
