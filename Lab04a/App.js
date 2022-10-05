import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

const data = [
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/ca_nau_lau_hdqtzg.png",
    name: "Ca nấu lẩu, nấu mì mini",
    shop: "Devang"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/ga_bo_toi_lvmw7c.png",
    name: "1KG KHÔ GÀ BƠ TỎI",
    shop: "LTD Food"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982337/xa_can_cau_cpse21.png",
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/do_choi_dang_mo_hinh_nfk9ef.png",
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/lanh_dao_gian_don_w8jzjp.png",
    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/hieu_long_con_tre_vhh9mh.png",
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book"
  },
  {
    img: "https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982336/trump_ondeco.png",
    name: "Donal Trump thiên tài lãnh đạo",
    shop: "Devang"
  }
]

const Item = ({ img, name, shop }) => (
  <View style={{flexDirection:'row', margin:'1%'}}>
    <Image source={{ uri: img }} style={{ width: '30%', height: 90 }}></Image>
    <View style={{flexDirection:'column', marginRight:'1%', width:'50%'}}>
      <Text style={{fontSize:20}}>{name}</Text>
      <Text style={{fontSize:20}}>Shop {shop}</Text>
    </View>
    <View style={{width:'20%'}}>
      <Button title='Chat' color='#F31111'></Button>
    </View>
  </View>
)

export default function App() {

  const renderItem = ({ item }) => (
    <Item img={item.img} name={item.name} shop={item.shop}></Item>
  )

  return (
    <View style={styles.container}>
      <View style={styles.pnl1}>
        <Image source={require('./assets/icon_back_top.png')}></Image>
        <Text style={{ fontSize: 20, color: 'white', marginLeft: '40%' }}>Chat</Text>
        <Image source={require('./assets/icon_cart.png')} style={{ marginLeft: '37%' }}></Image>
      </View>

      <View style={styles.pnl2}>
        <Text style={{ fontSize: 20 }}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>

      <View>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <View style={styles.pnl4}>
        <Image source={require('./assets/icon_menu.png')}></Image>
        <Image source={require('./assets/icon_home.png')}></Image>
        <Image source={require('./assets/icon_back.png')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '5%',
    padding: '1%'
  },
  pnl1: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    height: '6%',
    paddingTop: '1%'
  },
  pnl2: {
    marginTop:'1%', 
    marginBottom:'1%'
  }, 
  pnl4:{
   flexDirection:'row',
   backgroundColor:'#1BA9FF',
  }
});
