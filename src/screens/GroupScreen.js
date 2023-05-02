import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList, SectionList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ListItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { alert('hoo') }} style={styles.list_items} activeOpacity={1}>

      <Image source={{ uri: item.uri, }} resizeMode="cover" style={styles.imgList} />

    </TouchableOpacity>
  );
}
const ListMember = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { alert('hoo') }} style={styles.member} activeOpacity={1}>

      <Image source={{ uri: item.uri, }} resizeMode="cover" style={styles.img_member} />

    </TouchableOpacity>
  );
}
const SECTIONS = [
  {
    title: "My Post",
    data: [
      {
        id: "1",

        uri: "https://tiki.vn/blog/wp-content/uploads/2023/02/LgJ0ntLs0hdy2-cPT910ug6irqilBAjtAv4XPdmAHtact090jus5sjYL1B5UViTbi7zPlpEZz_LG-KeQoIuQPEfEo08LHKzD1phWwrclrFrIw7bc-QRvLvmehxoybWGxXwqAld_p5VzwleKXRzaL_wY.jpg",
      },
      {
        id: "2",
        uri: "https://smilemedia.vn/wp-content/uploads/2022/08/Dich-vu-chup-anh-ky-yeu-Thai-Binh.jpg",
      },
      {
        id: "3",
        uri: "https://metricleo.com/wp-content/uploads/2022/03/word-image-106.jpeg",
      },
      {
        id: "4",
        uri: "https://media2.gody.vn/public/mytravelmap/images/2018/6/1/khanh2203/87805c58a3b2680d9f61e8bc8e0b4e3a.jpg",
      },

    ]
  },
  {
    title: "All",
    data: [
      {
        id: "1",

        uri: "https://alibu.com.vn/wp-content/uploads/2020/11/cach-tao-dang-chup-anh-nhom-1.jpg",
      },
      {
        id: "2",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcruYFbFwxRJc18bzLK68aX7kqVLkks9vig&usqp=CAU",
      },
      {
        id: "3",
        uri: "https://metricleo.com/wp-content/uploads/2022/03/word-image-106.jpeg",
      },
      {
        id: "4",
        uri: "https://media2.gody.vn/public/mytravelmap/images/2018/6/1/khanh2203/87805c58a3b2680d9f61e8bc8e0b4e3a.jpg",
      },
    ]

  },
];
const MEMBERS = [
  {
    id: 1,
    name: 'Hiep',
    uri: 'https://image2.tin247.news/pictures/2022/07/23/mgl1658543544.png',
  },
  {
    id: 2,
    name: 'Hiep',
    uri: 'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-minh-hoa-nhom.jpg',
  },
  {
    id: 3,
    name: 'Hiep',
    uri: 'https://img6.thuthuatphanmem.vn/uploads/2022/10/27/anh-logo-nhom-lop-dep_092523708.jpg',
  },
  {
    id: 4,
    name: 'Hiep',
    uri: 'https://haycafe.vn/wp-content/uploads/2022/03/anh-lam-viec-nhom-1.jpg',
  },
  {
    id: 5,
    name: 'Hiep',
    uri: 'https://haycafe.vn/wp-content/uploads/2022/03/Avatar-nhom-hoc-tap.jpg',
  }
]

const GroupScreen = ({navigation}) => {

    const [selectedShow, setSelectedShow] = useState(false)
  const toggleSelectedShow = () => {
    setSelectedShow(!selectedShow)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.icon_back} onPress={()=>{navigation.popToTop()}}>
          <MaterialCommunityIcons name="arrow-left" size={32} color='#fff'/>
        </TouchableOpacity>
      <ScrollView style={styles.padding_scroll}>
        
        <View style={styles.information}>
          <Image source={require('../assets/background.png')} style={styles.background_img} resizeMode='cover' />
          <View>
            <Image source={require('../assets/avatar.png')} style={styles.avatar} resizeMode='cover' />
            
          </View>
          <Text style={styles.name}>19T Group</Text>
          <View style={styles.members_list}>
          <FlatList
            data={MEMBERS}
            horizontal
            renderItem={({item}) => {
              return <ListMember item={item} />
            }} 
            keyExtractor={item => item.id}/>
          </View>
        </View>
        <View style={styles.myPost}>

          {SECTIONS.map((section)=>{
            return <View>
            <Text style={styles.text_post}>{section.title}</Text>
            <View style={styles.underline}></View>
            <FlatList
              data={section.data}
              horizontal
              
              renderItem={({ item }) => {
                return <ListItem item={item} />
              }}
              keyExtractor={item => item.id}
            />
          </View>
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.add_view} activeOpacity={1}  onPress={() => {
        toggleSelectedShow()
      }}>
        <MaterialCommunityIcons name="plus" size={24} color='#fff' />
      </TouchableOpacity>
      {selectedShow ? 
      <View style={styles.add_selected}>
        <TouchableOpacity>
          <Text style={styles.selected_items}>
            Add Video
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selected_items}>
            Add Music
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selected_items}>
            Add Picture
          </Text>
        </TouchableOpacity>
      </View> : null}
    </SafeAreaView>
  )
}


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,

  },
  padding_scroll: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  icon_back: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
    backgroundColor: '#f12711',
    padding: 6,
    borderRadius: 64/2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6
  },
  information: {
    flex: 1,
    alignItems: 'center',
  },
  background_img: {
    width: width,
    height: height * (0.25)
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    top: '-45%',
    borderWidth: 5,
    borderRadius: (width * 0.3) / 2,
    borderColor: '#f12711'
  },
  name:{
    fontSize: 24,
    top: '-10%',
    color: '#f12711'
  },
  members_list: {
    flex: 1,
    top: '-6%',

  },
  member: {
    flex: 1,
    marginHorizontal: 4,
  },
  img_member: {
    width: width * 0.2,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: (width * 0.2)/2,
    borderColor: '#f12711'
   
  },
  myPost: {
    flex: 1,
  },
  text_post: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f12711'
  },
  underline: {
    borderBottomWidth: 1,
    width: width * (0.5),
    marginTop: 10
  },
  list_items: {
    flex: 1,
    paddingVertical: 10,
    marginRight: 10
  },
  imgList: {
    width: width * 0.3,
    height: height * 0.3,
    borderRadius: 10
  },
  add_view: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
    height: 50,
    width: 50,
    backgroundColor: '#f12711',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 50 / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6
  },
  add_selected: {
    width: width * 0.4,
    height: height * 0.2,
    backgroundColor: '#f12711',
    position: 'absolute',
    bottom: 70,
    right: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5'
    

  },
  selected_items: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',

  }


});

export default GroupScreen