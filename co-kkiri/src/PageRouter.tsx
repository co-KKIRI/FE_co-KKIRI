import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudyList from "@/pages/StudyList";
import Detail from "@/pages/Detail";
import Edit from "@/pages/Edit";
import Post from "@/pages/Post";
import Review from "@/pages/Review";
import NotFound from "@/pages/NotFound";
import Casting from "@/pages/Casting";
import MyPage from "@/pages/MyPage";
import Manage from "@/pages/Manage";
import MyStudy from "@/pages/MyStudy";
import Profile from "@/pages/Profile";
import { ROUTER_PATH } from "@/lib/path";
import Navigation from "./layouts/Navigation";

const {
  HOME_PATH,
  STUDY_LIST_PATH,
  DETAIL_PATH,
  EDIT_PATH,
  POST_PATH,
  REVIEW_PATH,
  CASTING,
  MY_PAGE,
  MY_STUDY,
  MANAGE,
  PROFILE,
} = ROUTER_PATH;

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={STUDY_LIST_PATH} element={<StudyList />} />
          <Route path={DETAIL_PATH} element={<Detail />} />
          <Route path={EDIT_PATH} element={<Edit />} />
          <Route path={POST_PATH} element={<Post />} />
          <Route path={REVIEW_PATH} element={<Review />} />
          <Route path={CASTING} element={<Casting />} />
          <Route path={MY_PAGE} element={<MyPage />} />
          <Route path={MY_STUDY} element={<MyStudy />} />
          //TODO: Manage 페이지에 id값을 넘겨줘야함
          <Route path={MANAGE} element={<Manage id={1} />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default PageRouter;
