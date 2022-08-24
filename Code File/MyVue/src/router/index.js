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
              title:'千岛画中游'
            }
        },
        {
            path: "/FishBlack",
            component: FishBlack,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishGui",
            component: FishGui,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishJi",
            component: FishJi,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishXun",
            component: FishXun,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishGun",
            component: FishGun,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishHua",
            component: FishHua,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishLu",
            component: FishLu,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishLi",
            component: FishLi,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishJin",
            component: FishJin,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishHuang",
            component: FishHuang,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishGu",
            component: FishGu,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishBai",
            component: FishBai,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishJia",
            component: FishJia,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishNi",
            component: FishNi,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/",
            component: Login,
            meta:{
              title:'千岛画中游'
            }
        },
        {
          path:"/index",
          component:index,
          meta:{
            title:'千岛画中游'
          }
        },
        {
            path: "/index1",
            component: index1,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Subject",
            component: Subject,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Adventure",
            component: Adventure,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/MountainChange",
            component: MountainChange,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/People",
            component: People,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Rotation",
            component: Rotation,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/CenterLake",
            component: CenterLake,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FamousPerson",
            component: FamousPerson,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/ChenShuoZhen",
            component: ChenShuoZhen,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FangGan",
            component: FangGan,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FangLa",
            component: FangLa,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/HaiRui",
            component: HaiRui,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/HeQi",
            component: HeQi,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/YangGuiZhi",
            component: YangGuiZhi,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/History",
            component: History,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/NorthEast",
            component: NorthEast,
            meta:{
                title:'千岛画中游'
            }
        },
        {
            path: "/NorthWest",
            component: NorthWest,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/SouthEast",
            component: SouthEast,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/SouthWest",
            component: SouthWest,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/WaterCity",
            component: WaterCity,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Fishing",
            component: Fishing,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Visit",
            component: Visit,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/FishGame",
            component: FishGame,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Poem",
            component: Poem,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Show",
            component: Show,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Login",
            component: Login,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Register",
            component: Register,
            meta:{
              title:'千岛画中游'
            }
        },
        {
            path: "/Panorama",
            component: Panorama,
            meta:{
              title:'千岛画中游'
            }
        },
        {
          path: "/FishingAnswer",
          component: FishingAnswer,
          meta:{
            title:'千岛画中游'
          }
        },
        {
          path: "/exam",
          component: exam,
          meta:{
            title:'千岛画中游'
          }
        },
        {
          path: "/PoemExam",
          component: PoemExam,
          meta:{
            title:'千岛画中游'
          }
        },
        {
          path: "/GuessFamous",
          component: GuessFamous,
          meta:{
            title:'千岛画中游'
          }
        },
        {
          path: "/select",
          component: select,
          meta:{
            title:'千岛画中游'
          }
        },
        {
          path: "/stu_info",
          component: stu_info,
          meta:{
            title:'千岛画中游'
          }
        },
      {
        path: "/BaiMaDiGuaGan",
        component: BaiMaDiGuaGan,
        meta: {
          title: '千岛画中游'
        }
      },
      {
        path: "/DanShui",
        component: DanShui,
        meta: {
          title: '千岛画中游'
        }
      },
      {
        path: "/LuoSi",
        component: LuoSi,
        meta: {
          title: '千岛画中游'
        }
      },
      {
        path: "/XueCai",
        component: XueCai,
        meta: {
          title: '千岛画中游'
        }
      },
      {
        path: "/LinAn",
        component: LinAn,
        meta: {
          title: '千岛画中游'
        }
      },
      {
        path: "/score",
        component: score,
        meta: {
          title: '千岛画中游'
        }
      },
        {
            path: "/YeSheng",
            component: YeSheng,
            meta: {
                title: '千岛画中游'
            }
        },
    ]
})
