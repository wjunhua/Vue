import Vue from "vue";
import VueRouter from "vue-router";

import FishBian from "../components/FishBian.vue";
import FishBlack from "../components/FishBlack.vue";
import FishGui from "../components/FishGui.vue";
import FishJi from "../components/FishJi.vue";
import FishXun from "../components/FishXun.vue";
import FishGun from "../components/FishGun.vue";
import FishHua from "../components/FishHua.vue";
import FishLu from "../components/FishLu.vue";
import FishLi from "../components/FishLi.vue";
import FishJin from "../components/FishJin.vue";
import FishHuang from "../components/FishHuang.vue";
import FishGu from "../components/FishGu.vue";
import FishBai from "../components/FishBai.vue";
import FishJia from "../components/FishJia.vue";
import FishNi from "../components/FishNi.vue";
import MountainChange from "../components/MountainChange.vue";
import People from "../components/People.vue";
import Rotation from "../components/Rotation.vue";
import CenterLake from "../components/CenterLake.vue";
import FamousPerson from "../components/FamousPerson.vue";
import ChenShuoZhen from "../components/ChenShuoZhen.vue";
import FangGan from "../components/FangGan.vue";
import FangLa from "../components/FangLa.vue";
import HaiRui from "../components/HaiRui.vue";
import HeQi from "../components/HeQi.vue";
import YangGuiZhi from "../components/YangGuiZhi.vue";
import History from "../components/History.vue";
import NorthEast from "../components/NorthEast.vue";
import NorthWest from "../components/NorthWest.vue";
import SouthEast from "../components/SouthEast.vue";
import SouthWest from "../components/SouthWest.vue";
import WaterCity from "../components/WaterCity.vue";
import Fishing from "../components/Fishing.vue";
import Visit from "../components/Visit.vue";
import FishGame from "../components/FishGame.vue";
import Poem from "../components/Poem.vue";
import Show from "../components/Show.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import index from "../components/index.vue";
import index1 from "../components/index1.vue";
import Panorama from "../components/Panorama.vue";
import Adventure from "../components/Adventure.vue";
import Subject from "../components/Subject.vue";
import FishingAnswer from "../components/FishingAnswer.vue";
import exam from "../components/exam.vue";
import PoemExam from "../components/PoemExam.vue";
import GuessFamous from "../components/GuessFamous.vue";
import select from "../components/select.vue";
import stu_info from "../components/stu_info.vue";
import BaiMaDiGuaGan from "../components/BaiMaDiGuaGan.vue";
import DanShui from "../components/DanShui.vue";
import LuoSi from "../components/LuoSi.vue";
import XueCai from "../components/XueCai.vue";
import LinAn from "../components/LinAn.vue";
import YeSheng from "../components/YeSheng.vue";
import score from "../components/score";
Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [{
            path: "/FishBian",
            component: FishBian,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishBlack",
            component: FishBlack,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishGui",
            component: FishGui,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishJi",
            component: FishJi,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishXun",
            component: FishXun,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishGun",
            component: FishGun,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishHua",
            component: FishHua,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishLu",
            component: FishLu,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishLi",
            component: FishLi,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishJin",
            component: FishJin,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishHuang",
            component: FishHuang,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishGu",
            component: FishGu,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishBai",
            component: FishBai,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishJia",
            component: FishJia,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishNi",
            component: FishNi,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/",
            component: Login,
            meta:{
              title:'???????????????'
            }
        },
        {
          path:"/index",
          component:index,
          meta:{
            title:'???????????????'
          }
        },
        {
            path: "/index1",
            component: index1,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Subject",
            component: Subject,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Adventure",
            component: Adventure,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/MountainChange",
            component: MountainChange,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/People",
            component: People,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Rotation",
            component: Rotation,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/CenterLake",
            component: CenterLake,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FamousPerson",
            component: FamousPerson,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/ChenShuoZhen",
            component: ChenShuoZhen,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FangGan",
            component: FangGan,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FangLa",
            component: FangLa,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/HaiRui",
            component: HaiRui,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/HeQi",
            component: HeQi,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/YangGuiZhi",
            component: YangGuiZhi,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/History",
            component: History,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/NorthEast",
            component: NorthEast,
            meta:{
                title:'???????????????'
            }
        },
        {
            path: "/NorthWest",
            component: NorthWest,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/SouthEast",
            component: SouthEast,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/SouthWest",
            component: SouthWest,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/WaterCity",
            component: WaterCity,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Fishing",
            component: Fishing,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Visit",
            component: Visit,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/FishGame",
            component: FishGame,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Poem",
            component: Poem,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Show",
            component: Show,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Login",
            component: Login,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Register",
            component: Register,
            meta:{
              title:'???????????????'
            }
        },
        {
            path: "/Panorama",
            component: Panorama,
            meta:{
              title:'???????????????'
            }
        },
        {
          path: "/FishingAnswer",
          component: FishingAnswer,
          meta:{
            title:'???????????????'
          }
        },
        {
          path: "/exam",
          component: exam,
          meta:{
            title:'???????????????'
          }
        },
        {
          path: "/PoemExam",
          component: PoemExam,
          meta:{
            title:'???????????????'
          }
        },
        {
          path: "/GuessFamous",
          component: GuessFamous,
          meta:{
            title:'???????????????'
          }
        },
        {
          path: "/select",
          component: select,
          meta:{
            title:'???????????????'
          }
        },
        {
          path: "/stu_info",
          component: stu_info,
          meta:{
            title:'???????????????'
          }
        },
      {
        path: "/BaiMaDiGuaGan",
        component: BaiMaDiGuaGan,
        meta: {
          title: '???????????????'
        }
      },
      {
        path: "/DanShui",
        component: DanShui,
        meta: {
          title: '???????????????'
        }
      },
      {
        path: "/LuoSi",
        component: LuoSi,
        meta: {
          title: '???????????????'
        }
      },
      {
        path: "/XueCai",
        component: XueCai,
        meta: {
          title: '???????????????'
        }
      },
      {
        path: "/LinAn",
        component: LinAn,
        meta: {
          title: '???????????????'
        }
      },
      {
        path: "/score",
        component: score,
        meta: {
          title: '???????????????'
        }
      },
        {
            path: "/YeSheng",
            component: YeSheng,
            meta: {
                title: '???????????????'
            }
        },
    ]
})
