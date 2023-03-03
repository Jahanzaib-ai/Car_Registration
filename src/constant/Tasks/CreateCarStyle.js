import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from '../../util/Color'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    body: {
        flexGrow: 0.9,
        width: '94%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    image: {
        width: windowWidth / 4,
        height: windowHeight / 7,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 100,
    },
    addIcon: {
        alignSelf: 'center',
        marginLeft: "18%",
        marginTop: '-15%'
    },
    textHeading: {
        fontSize: RFValue(14),
        fontWeight: '500',
        lineHeight: 18,
        color: COLORS.black,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 2
    },
    inputText: {
        backgroundColor: COLORS.white,
        width: '99%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        elevation: 6,
        borderRadius: 5
    },
    completeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12
    },
    dateContainer: {
        backgroundColor: COLORS.white,
        width: '99%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10,
        elevation: 6,
        borderRadius: 5
    },
    
    // Radio Button Container
    radiobtnContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    singleRadiobtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRadiobtn: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.darkGreen,
        marginRight: 5
    },

    commentsContainer: {
        backgroundColor: COLORS.white,
        width: '99%',
        alignSelf: 'center',
        elevation: 6,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10
    },
    textComments: {
        fontSize: RFValue(18),
        fontWeight: '500',
        lineHeight: 27,
        color: COLORS.lightestBlack,
        margin: 10,
        marginBottom: 0
    },
    btnSend: {
        backgroundColor: COLORS.green,
        width: "15%",
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: "5%",
        marginBottom: '5%'

    },
    editDescriptionContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 5
    },
    bottomBtnContainer: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 6,
        alignItems: 'flex-end'
    },
    btnSave: {
        width: "100%",
        backgroundColor: COLORS.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:12,
    },
    textBottomBtn: {
        fontSize: RFValue(12),
        fontWeight: '500',
        lineHeight: 18,
        color: COLORS.white,
        textTransform: 'uppercase',
        marginLeft: 5
    },
    error: {
        color: 'red',
        fontSize: 12,
        fontWeight:'400',
        marginBottom: 5,
        marginLeft:5
    },

    // Modal 
    modalContainer: {
        flex: 1,
        backgroundColor: '#200000',
        justifyContent: 'center',
        opacity: 0.9,
    },

    pickerStyle: {
        backgroundColor: "white",
        color: "#7D7F88", 
        justifyContent: 'center', 
        width: "100%",
        alignSelf:'center',
        borderRadius: 4,
        borderColor: "#BABCBF",
        borderWidth: 1,
        elevation: 2,
        height: 45,
        // marginLeft: 20
    },

})

export default styles;