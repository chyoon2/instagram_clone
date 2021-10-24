import React from "react";
import PostController from "./Post/PostController";
import "../css/MainStyles.css";
import CarouselWork from "./CarouselWork";
import { userData } from "../data";
import Sidebar from "./Sidebar";
import { UseMediaQuery } from "../UseMediaQuery";

// const isPageWide = UseMediaQuery("min-width: 1200px");
// // const renderSidebar = () => {
// //   console.log("console sidebar");
// //   if (isPageWide) {
// //     console.log("page is wide = true");
// //     return <Sidebar />;
// //   } else {
// //     return;
// //   }
// // };

// const Main = () => {
//   const isPageWide = UseMediaQuery("min-width: 1200px");
//   if (isPageWide) {
//     console.log("page is wide = true");
//     return (
//       <div className='main-container'>
//         <CarouselWork />
//         <Sidebar />
//         <div className='item-posts'>{renderPostController()}</div>
//       </div>
//     );
//   } else {
//     return (
//       <div className='main-container'>
//         <CarouselWork />
//         {renderSidebar()}
//         <div className='item-posts'>{renderPostController()}</div>
//       </div>
//     );
//   }
// };

// export default Main;

// const renderPostController = () => {
//   const displayData = userData.map((key) => {
//     return <PostController data={key} />;
//   });
//   return displayData;
// };

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return <div></div>;
  }
}

export default Main;
