import { Dimensions, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const GroupList = ({item}) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={()=> navigation.navigate('GroupScreen')} style={styles.list_items} activeOpacity={1}>
      <Text style={styles.item_name}>{item.nameGroup}</Text>
    </TouchableOpacity>
  )
}
const GROUP = [
  {
    id: 1,
    nameGroup: "19T Group",
  },
  {
    id: 2,
    nameGroup: "TTCM Group",
  },
 
]

const ListGroupScreen = () => {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Groups</Text>
          <MaterialCommunityIcons name='plus' size={28} color='#f12711' style={styles.header_icon}/>
        </View>
        <FlatList  style={styles.list}
          data={GROUP}
          contentContainerStyle={{padding: 10}}
          renderItem={({item})=>{
            return <GroupList item = {item} />
          }}
        />
      </View>
    );
  }
  const {width, height} = Dimensions.get('window')
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 20
    },
    list_items:{
      padding: 20,
      marginBottom: 20,
      borderRadius: 12,
      backgroundColor: '#f12711',
      opacity: 0.8
    },
    item_name:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
    },
    header: {
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: height * 0.05,
      paddingHorizontal: 20
    },
    header_title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#f12711'
    },
    header_icon: {
     justifyContent: 'flex-end'
    }
  })
export default ListGroupScreen