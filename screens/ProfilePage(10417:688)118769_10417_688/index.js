import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_10417_689}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbb5/0f2c/a8dd412f1c6318815fd006964b9e8c04"
          }}
          style={styles.ImageBackground_10417_690}
        />
        <View style={styles.View_10417_691}>
          <Text style={styles.Text_10417_691}>VALL DE NURIA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_692}
        />
        <View style={styles.View_10417_693}>
          <Text style={styles.Text_10417_693}>7.8</Text>
        </View>
        <View style={styles.View_10417_694}>
          <Text style={styles.Text_10417_694}>90km</Text>
        </View>
        <View style={styles.View_10417_695}>
          <Text style={styles.Text_10417_695}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35c3/1e17/a173c0b91fce504de48959a98ea3cad6"
          }}
          style={styles.ImageBackground_10417_696}
        />
        <View style={styles.View_10417_697}>
          <Text style={styles.Text_10417_697}>GIRONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_698}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_699}
        />
        <View style={styles.View_10417_700}>
          <Text style={styles.Text_10417_700}>7.8</Text>
        </View>
        <View style={styles.View_10417_701}>
          <Text style={styles.Text_10417_701}>90km</Text>
        </View>
        <View style={styles.View_10417_702}>
          <Text style={styles.Text_10417_702}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f136/25df/f7a69b37093ee3e6279d7136bad4aa50"
          }}
          style={styles.ImageBackground_10417_703}
        />
        <View style={styles.View_10417_704}>
          <Text style={styles.Text_10417_704}>LLEIDA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_705}
        />
        <View style={styles.View_10417_706}>
          <Text style={styles.Text_10417_706}>7.8</Text>
        </View>
        <View style={styles.View_10417_707}>
          <Text style={styles.Text_10417_707}>90km</Text>
        </View>
        <View style={styles.View_10417_708}>
          <Text style={styles.Text_10417_708}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9893/54f1/113b83df3bdd838e985586f01e810906"
          }}
          style={styles.ImageBackground_10417_709}
        />
        <View style={styles.View_10417_710}>
          <Text style={styles.Text_10417_710}>TOSSA DE MAR</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_711}
        />
        <View style={styles.View_10417_712}>
          <Text style={styles.Text_10417_712}>7.8</Text>
        </View>
        <View style={styles.View_10417_713}>
          <Text style={styles.Text_10417_713}>90km</Text>
        </View>
        <View style={styles.View_10417_714}>
          <Text style={styles.Text_10417_714}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a1/338b/371ad519082f8c659dd0539356e9d3f2"
          }}
          style={styles.ImageBackground_10417_715}
        />
        <View style={styles.View_10417_716}>
          <Text style={styles.Text_10417_716}>MONTSERRAT</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_717}
        />
        <View style={styles.View_10417_718}>
          <Text style={styles.Text_10417_718}>7.8</Text>
        </View>
        <View style={styles.View_10417_719}>
          <Text style={styles.Text_10417_719}>90km</Text>
        </View>
        <View style={styles.View_10417_720}>
          <Text style={styles.Text_10417_720}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e44/74b7/d233ad7628e9abf18ee81b57485ea774"
          }}
          style={styles.ImageBackground_10417_721}
        />
        <View style={styles.View_10417_722}>
          <Text style={styles.Text_10417_722}>BADALONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_723}
        />
        <View style={styles.View_10417_724}>
          <Text style={styles.Text_10417_724}>7.8</Text>
        </View>
        <View style={styles.View_10417_725}>
          <Text style={styles.Text_10417_725}>90km</Text>
        </View>
        <View style={styles.View_10417_726}>
          <Text style={styles.Text_10417_726}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_727}
        />
        <View style={styles.View_10417_728}>
          <Text style={styles.Text_10417_728}>MY ROUTES</Text>
        </View>
        <View style={styles.View_10417_729}>
          <View style={styles.View_10417_730}>
            <Text style={styles.Text_10417_730}>intermediate</Text>
          </View>
          <View style={styles.View_10417_731}>
            <Text style={styles.Text_10417_731}>7.8</Text>
          </View>
          <View style={styles.View_10417_732}>
            <Text style={styles.Text_10417_732}>24h</Text>
          </View>
          <View style={styles.View_10417_733}>
            <Text style={styles.Text_10417_733}>rating</Text>
          </View>
          <View style={styles.View_10417_734}>
            <Text style={styles.Text_10417_734}>level</Text>
          </View>
          <View style={styles.View_10417_735}>
            <Text style={styles.Text_10417_735}>avg. time</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c091/fe31/26a7487dd4bf4403a95df0c9c68353b6"
          }}
          style={styles.ImageBackground_10417_736}
        />
        <View style={styles.View_10417_737}>
          <Text style={styles.Text_10417_737}>MARCO POLO</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("143.71584699453553%") },
  View_10417_689: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143.71584699453553%"),
    minHeight: hp("143.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_690: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("67.75956284153006%")
  },
  View_10417_691: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("81.4207650273224%")
  },
  Text_10417_691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_692: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.5792349726776%"),
    resizeMode: "cover"
  },
  View_10417_693: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_693: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_694: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_694: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_695: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_695: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_696: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("67.75956284153006%")
  },
  View_10417_697: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("81.4207650273224%")
  },
  Text_10417_697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_698: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("68.5792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_699: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("68.98907103825137%")
  },
  View_10417_700: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_700: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_701: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_702: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("86.74863387978142%")
  },
  Text_10417_702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_703: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("91.66666666666666%")
  },
  View_10417_704: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("105.32786885245902%")
  },
  Text_10417_704: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_705: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("92.4863387978142%"),
    resizeMode: "cover"
  },
  View_10417_706: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_707: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_707: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_708: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_708: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_709: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("91.66666666666666%")
  },
  View_10417_710: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("105.32786885245902%")
  },
  Text_10417_710: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_711: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("92.4863387978142%"),
    resizeMode: "cover"
  },
  View_10417_712: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_712: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_713: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_713: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_714: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("110.65573770491804%")
  },
  Text_10417_714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_715: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("115.57377049180329%")
  },
  View_10417_716: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("129.23497267759564%")
  },
  Text_10417_716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_717: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("116.39344262295081%"),
    resizeMode: "cover"
  },
  View_10417_718: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_719: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_720: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_720: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_721: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("115.57377049180329%")
  },
  View_10417_722: {
    flexGrow: 1,
    width: wp("41.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("129.23497267759564%")
  },
  Text_10417_722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_723: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("116.39344262295081%"),
    resizeMode: "cover"
  },
  View_10417_724: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_725: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_726: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("134.56284153005464%")
  },
  Text_10417_726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_727: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("92.89617486338798%")
  },
  View_10417_728: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("62.431693989071036%")
  },
  Text_10417_728: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_729: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("49.45355191256831%")
  },
  View_10417_730: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_10417_730: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_731: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_10417_731: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_732: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2.185792349726775%")
  },
  Text_10417_732: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_733: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10417_733: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_734: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("0%")
  },
  Text_10417_734: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_735: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("0%")
  },
  Text_10417_735: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_736: {
    width: wp("45.86666666666667%"),
    height: hp("23.681415495325307%"),
    top: hp("18.79828614615352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%")
  },
  View_10417_737: {
    width: wp("76.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("11.202185792349727%")
  },
  Text_10417_737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
