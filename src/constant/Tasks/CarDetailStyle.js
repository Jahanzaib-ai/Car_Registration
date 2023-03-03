import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from '../../util/Color'
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    body: {
        flexGrow: 1,
        width: '98%',
        alignSelf: 'center'
    },
    btnContainer: {
        flex: 0.07,
        flexDirection: 'row',
        width: '40%',
        alignSelf: 'center',
        marginVertical: 15,
        elevation: 6,
        backgroundColor: COLORS.white,
        borderRadius: 8
    },
    btnEditTasks: {
        width: "75%",
        backgroundColor: COLORS.green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    textEditTasks: {
        fontSize: RFValue(10),
        fontWeight: '500',
        lineHeight: 15,
        color: COLORS.white,
        marginLeft: 4
    },
    btnDelete: {
        width: "25%",
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    infoContainer: {
        flex: 0.1,
        backgroundColor: COLORS.white,
        width: "98%",
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 6,
        padding: 20,
        paddingBottom: 0,
    },
    image: {
        width: windowWidth/8,
        height: windowHeight/17,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 10,
    },
    headingConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    textHeading: {
        fontSize: RFValue(18),
        fontWeight: '500',
        lineHeight: 27,
        color: COLORS.black
    },
    subInfoContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: RFValue(10),
        fontWeight: '500',
        lineHeight: 15,
        color: COLORS.black,
        width: '40%'
    },
    textinfo: {
        fontSize: RFValue(12),
        fontWeight: '500',
        lineHeight: 18,
        color: COLORS.black,
        width: '40%'
    },
    priorityContainer: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentsContainer: {
        backgroundColor: COLORS.white,
        flex: 0.2,
        width: '98%',
        alignSelf: 'center',
        elevation: 6,
        borderRadius: 5,
        marginTop: 20
    },
    textComments: {
        fontSize: RFValue(18),
        fontWeight: '500',
        lineHeight: 27,
        color: '#444444',
        margin: 10,
        marginBottom: 0
    },
    btnSend: {
        backgroundColor: COLORS.green,
        width: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: "5%",
        borderRadius: 7
    },


    mainContainerModal: {
        flex: 1,
        backgroundColor: '#300000',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainerModal: {
        backgroundColor: COLORS.white,
        width: '80%',
        flex: 0.8,
        borderRadius: 20,
        opacity: 1,
    },
    bodyModal: {
        flexGrow: 0.9,
        width: '94%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    imageModal: {
        width: windowWidth / 6,
        height: windowHeight / 13,
        marginHorizontal: 20,
        borderRadius: 100,
        alignSelf: 'flex-end',
        marginTop: -20
    },
    EditContinerModal: {
        backgroundColor: COLORS.orange,
        width: 25,
        height: 25,
        borderRadius: 12.5,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 10,
    },
    textHeadingModal: {
        fontSize: RFValue(12),
        fontWeight: '500',
        lineHeight: 18,
        color: '#000000',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 2
    },
    inputTextModal: {
        backgroundColor: COLORS.white,
        width: '99%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        elevation: 6,
        borderRadius: 5
    },
    completeContainerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12
    },
    dateContainerModal: {
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
    btnSave: {
        backgroundColor: COLORS.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        elevation: 6,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    textBottomBtn: {
        fontSize: RFValue(16),
        fontWeight: '500',
        lineHeight: 24,
        color: COLORS.white,
        textTransform: 'uppercase',
        marginLeft: 5
    },
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

    // Delete Modal
    modalContainer: {
        flex: 1,
        backgroundColor: '#200000',
        justifyContent: 'center',
        opacity: 0.9,
    },
    deleteModalContainer: {
        backgroundColor: COLORS.white,
        width: '80%',
        flex: 0.2,
        borderRadius: 10,
        alignSelf: 'center',
        elevation: 6,
    },
    deleteModalHeader: {
        flex: 0.3,
        backgroundColor: COLORS.orange,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center"
    },
    textDeleteModalHeader: {
        fontSize: RFValue(16),
        fontWeight: "400",
        lineHeight: 18,
        color: COLORS.white,
        textAlign: 'center'
    },
    deleteModalBody: {
        flex: 0.4,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    deleteBtnContainer: {
        flex: 0.3,
        alignSelf: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
    },
    deleteModalBtn: {
        backgroundColor: COLORS.white,
        elevation: 8,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 5,
        justifyContent:'center',
    },
    error: {
        color: 'red',
        fontSize: 12,
        fontWeight:'400',
        marginBottom: 5,
        marginLeft:5
    },
})

export default styles;