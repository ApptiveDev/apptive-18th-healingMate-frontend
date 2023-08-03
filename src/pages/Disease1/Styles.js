import { StyleSheet } from "react-native";
import box from "../../images/box.png";

const Styles = StyleSheet.create({
  bigTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },
  boardButton: {
    flex: "2",
    height: "50px",
    textAlign: "center",
    marginTop: "35px",
    fontSize: "19px",
  },
  buttonText: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "19px",
  },
  buttonBox: {
    flex: "2",
    justifyContent: "center",
    height: "50px",
    marginTop: "35px",
    backgroundImage: `url(${box})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const ListStyles = StyleSheet.create({
  listBox: {
    height: "70px",
    padding: "5px",
    margin: "10px",
    flexDirection: "row",

    borderBottomWidth: "1px",
    borderBottomColor: "gray",
    alignItems: "flex-start",
  },
  listLeft: {
    flex: "1",
    flexDirection: "column",
    height: "100%",
    width: "20%",
    alignItems: "center",
  },
  listCenter: {
    flex: "9",
    flexDirection: "column",
    height: "100%",
    width: "20%",
    alignItems: "flex-start",
  },
  listRight: {
    flex: "1",
    flexDirection: "column",
    marginRight: "20px",
    marginTop: "5px",
    height: "100%",
    width: "20%",
    alignItems: "flex-end",
  },
  likesAndComments: {
    flexDirection: "row",
    textAlign: "right",

    fontSize: "19.5px",
  },
  Bottom: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});

const WriteStyles = StyleSheet.create({
  Title: {
    width: "1050px",
    padding: "5px",
    margin: "10px",
    marginLeft: "30px",
    flexDirection: "row",
    fontSize: "20px",
    fontWeight: "bold",

    alignItems: "flex-start",
    justifyContent: "space-around",
  },
});

export { Styles, ListStyles, WriteStyles };
