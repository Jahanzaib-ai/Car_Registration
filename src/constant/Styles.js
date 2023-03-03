import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
export const Splash_Screen_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        overflow: 'hidden'
    },
    bg: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        marginBottom: 85,
        width: 118,
        height: 132
    },
    btn_container: {
        backgroundColor: "#FFFFFF",
        width: "46%",
        padding: 15,
        borderRadius: 10,
        marginBottom: 78
    },
    btn_text: {
        color: "#000000",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        letterSpacing: 0.03
    }
})
export const Auth_Screen_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    header: {
        flex: 0.23,
    },
    bg: {
        width: "100%",
        height: 200
    },
    BackBtn: {
        backgroundColor: "#F5F4F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    body: {
        flex: 0.75,
        marginTop: 5,
        padding: 20
    },
    logo1: {
        width: 98,
        height: 98,
        alignSelf: "center",
        marginBottom: 25
    },
    heading: {
        color: Colors.heading,
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 40,
        letterSpacing: 0.03,
        marginBottom: 10
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F4F8",
        borderRadius: 10,
        flexDirection: "row",
        padding: 7,
        marginTop: 20
    },
    input_Text: {
        color: Colors.heading,
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0.03,
        padding: 10,
        width: "90%"
    },
    showpasswordContainer: {
        flexDirection: "row-reverse",
        // marginTop: 10,
        color: "#000000",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 18,
        letterSpacing: 0.03,
        marginBottom: 25
    },
    btnContainer: {
        backgroundColor: Colors.btn_color,
        width: "100%",
        alignSelf: "center",
        padding: 18,
        borderRadius: 10,
        marginTop: 30
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 19,
        letterSpacing: 0.03,
        textAlign: "center"
    },
    footer: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 20
    },
    footerText: {
        color: "#53587A",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.03
    }
})
export const Dashboard_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        overflow: 'hidden'
    },
    headerContainer:{
        // flex: 0.4, 
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        marginTop:20
    },
    SearchView:{
        backgroundColor: "#FFFFFF", 
        width: "60%", 
        height: 50, 
        borderRadius: 10, 
        elevation: 19, 
        flexDirection: "row", 
        alignItems: "center" 
    },
    searchInput:{
        width: "85%", 
        marginLeft: 5 
    },
    bigBox:{
        backgroundColor: "#FFFFFF", 
        width: "80%", 
        height: 110, 
        alignSelf: "center", 
        borderRadius: 10, 
        elevation: 19, 
        marginBottom: -70, 
    },
    smallBox:{
        backgroundColor: "#930000", 
        width: "55%", 
        height: 55, 
        alignSelf: "center", 
        borderRadius: 10, 
        elevation: 19, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: -30 
    },
    textHeading:{
        color: "#FFFFFF", 
        fontWeight: "700", 
        fontSize: 15, 
        lineHeight: 40,
        letterSpacing: 0.03
    },
    logo:{
        // backgroundColor:"red",
        // borderWidth:0.1,
        // borderColor:"red",
        width: 100, 
        height: 70,
    },
    rectangle_mainView:{
        flex:1,
        // width:"100%",
        flexDirection: "row", 
        // justifyContent: "space-around", 
        // alignItems: "center",
       
      
    },
    rectangle_Box:{
        backgroundColor: "#FFFFFF", 
        height: 80, 
        width: 85, 
        elevation: 20, 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 10,
        marginBottom:10
    },
    imageIcon:{
        width: 35, 
        height: 35
    },
    BoxText:{
        // textAlign: "center", 
        // width: "20%", 
        fontWeight: "400", 
        fontSize: 14, 
        lineHeight: 20,
        color: "#000000" 
    }
})
export const Header_Styles = StyleSheet.create({
    Header_container: {
        // flex: 0.1,
        width: "100%",
        height: 70,
        backgroundColor: Colors.btn_color,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15
    },
    headerTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 32,
        marginLeft: 15
    }
})
export const Helpdesk_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        overflow: 'hidden'
    },
    body: {
        flex: 1,
        margin: 15
    },
    headingContainer: {
        flex: 0.04
    },
    RecordContainer: {
        //  backgroundColor:"red",
        flex: 1
    },
    BottomContainer: {
        flex: 0.12,
        justifyContent: "center"
    },
    dataContainer: {
        width: "100%",
        //   height:200,
        //   backgroundColor:"blue",
        padding: 20,
        marginTop: 20,
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        elevation: 0.5
    },
    headingView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TicketNoText: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 20,
        color: "#000000"
    },
    dateText: {
        color: "#A6A6A6",
        fontWeight: "400",
        fontSize: 12,
        // lineHeight:20
    },
    RowHeading: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 20,
    },
    RowHeadingText: {
        flex: 1,
        color: "#000000",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        textAlign: "center"
    },
    RowText: {
        flex: 1,
        color: "#A6A6A6",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        textAlign: "center",
    },
    HeadingText: {
        color: "#000000",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21
    },
    emptyHistory: {
        color: "#CE0101",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 32
    },
    btnContainer: {
        backgroundColor: Colors.btn_color,
        alignItems: "center",
        borderRadius: 10,
        // width:"80%",
        // alignSelf:"center"
    },
    btnText: {
        color: "#FFFFFF",
        padding: 13,
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 22
    },
    overlayView: {
        // flex:1,
        height: "100%",
        width: "100%",
        // position: 'absolute',
        backgroundColor: 'rgba(32,31, 32, 0.9)',
        // opacity: 0.9
    },
    Modal_MainContainer: {
        height: '25%',
        marginTop: 'auto',
        backgroundColor: "#FFFFFF",
    },
    ModalContainer: {
        margin: 25
    },
    ModalHeadingText: {
        color: "#000000",
        fontWeight: "900",
        fontSize: 14,
    },
    ModalBtn:{
        borderRadius:10,
        borderWidth:1,
        borderColor:"#CE0101",
        marginTop:15
    },
    ModalBtnText:{
        color:"#000000",
        fontWeight:"700",
        fontSize:14,
        padding:12,
        textAlign:"center"
    }
})
export const CreateRequest_Styles = StyleSheet.create({
    inputHeading: {
        color: "#535353",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        marginBottom: 5
    },
    inputContainer: {
        backgroundColor: "#F8FAFF",
        // backgroundColor:"red",
        elevation: 0.4,
        marginTop: 5,
        marginBottom: 10
    },
    inputStyle: {
        paddingLeft: 15,
        color: "#788190",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 18
    },
    btnContainer: {
        backgroundColor: Colors.btn_color,
        borderRadius: 10,
        elevation: 5,
        marginTop: 30
    },
    btnText: {
        color: "#FFFFFF",
        textAlign: "center",
        padding: 13,
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 22
    },
})
