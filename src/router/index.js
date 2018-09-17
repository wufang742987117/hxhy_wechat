import Vue from 'vue'
import Router from 'vue-router'

/**
import Banner from                      'components/banner/banner'
import Login from                       'components/login/login'
import ResetPassword from                       'components/reset-password/reset-password'
import ResetPassword2 from                      'components/reset-password2/reset-password2'
import Register from                      'components/register/register'
import User from                      'components/user/user'
import Home from                      'components/home/home'
import UserInfo from                      'components/user-info/user-info'
import Profit from                      'components/profit/profit'
import Accounts from                      'components/accounts/accounts'
import QR from                      'components/qr/qr'
import JujianList from                      'components/jujian-list/jujian-list'
import HeightLevel from                       'components/height-level/height-level'
import AgencyCity from                      'components/agency-city/agency-city'
import AgencyCounty from                      'components/agency-county/agency-county'
import JujianAdd from                       'components/jujian-add/jujian-add'
import JujianApply from                       'components/jujian-apply/jujian-apply'
import AgencyApply from                       'components/agency-apply/agency-apply'
import AgencyApplyChannel from                      'components/agency-apply-channel/agency-apply-channel'
import AgencyApplyRegion from                       'components/agency-apply-region/agency-apply-region'
import Recommend from                       'components/recommend/recommend'
import AgencyInfo from                      'components/agency-info/agency-info'
import AgencyInfoUpdate from                      'components/agency-info-update/agency-info-update'
import Agreement from                       'components/agreement/agreement'
 */

const Banner = resolve => require(['components/banner/banner'], resolve)
const Login = resolve => require(['components/login/login'], resolve)
const ResetPassword = resolve => require(['components/reset-password/reset-password'], resolve)
const ResetPassword2 = resolve => require(['components/reset-password2/reset-password2'], resolve)
const ResetPassword3 = resolve => require(['components/reset-password3'], resolve)
const Register = resolve => require(['components/register/register'], resolve)
const User = resolve => require(['components/user/user'], resolve)
const Home = resolve => require(['components/home/home'], resolve)
const UserInfo = resolve => require(['components/user-info/user-info'], resolve)
const Profit = resolve => require(['components/profit/profit'], resolve)
const Accounts = resolve => require(['components/accounts/accounts'], resolve)
const QR = resolve => require(['components/qr/qr'], resolve)
const JujianList = resolve => require(['components/jujian-list/jujian-list'], resolve)

const JujianWithdrawList = resolve => require(['components/jujian-withdraw-list/withdraw-list'], resolve)

const JujianDetail = resolve => require(['components/jujian-detail/jujian-detail'], resolve)

const HeightLevel = resolve => require(['components/height-level/height-level'], resolve)
const AgencyCity = resolve => require(['components/agency-city/agency-city'], resolve)
const AgencyCounty = resolve => require(['components/agency-county/agency-county'], resolve)
const JujianAdd = resolve => require(['components/jujian-add/jujian-add'], resolve)
const JujianApply = resolve => require(['components/jujian-apply/jujian-apply'], resolve)
const AgencyApply = resolve => require(['components/agency-apply/agency-apply'], resolve)
const AgencyApplyChannel = resolve => require(['components/agency-apply-channel/agency-apply-channel'], resolve)
const AgencyApplyRegion = resolve => require(['components/agency-apply-region/agency-apply-region'], resolve)

const AgencyApplyRecord  = resolve => require(['components/agency-apply-record/agency-apply-record'], resolve)

const Recommend = resolve => require(['components/recommend/recommend'], resolve)
const AgencyInfo = resolve => require(['components/agency-info/agency-info'], resolve)
const AgencyInfoUpdate = resolve => require(['components/agency-info-update/agency-info-update'], resolve)
const Agreement = resolve => require(['components/agreement/agreement'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/banner',
      component: Banner
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/reset-password2',
      component: ResetPassword2
    },
    {
      path: '/user',
      component: User,
      // redirect: '/:id/home',
      children: [
        {
          path: '/:id/home',
          component: Home
        },
        {
          path: '/:id/profit',
          component: Profit
        },
        {
          path: '/:id/accounts',
          component: Accounts
        },
        {
          path: '/:id/userinfo',
          component: UserInfo
        },
        {
          path: '/:id/qr',
          component: QR
        },
        {
          path: '/:id/jujian-list',
          component: JujianList
        },
				{
					path: '/:id/withdraw-list',
					component: JujianWithdrawList
				},
				{
					path: '/:id/jujian-detail',
					component: JujianDetail
				},
        {
          path: '/:id/height-level',
          component: HeightLevel
        },
        {
          path: '/:id/agency-city',
          component: AgencyCity
        },
        {
          path: '/:id/agency-county',
          component: AgencyCounty
        },
        {
          path: '/:id/jujian-add',
          component: JujianAdd
        },
        {
          path: '/:id/jujian-apply',
          component: JujianApply
        },
        {
          path: '/:id/agency-apply',
          component: AgencyApply
        },
        {
          path: '/:id/agency-apply-record',
          component: AgencyApplyRecord
        },
        {
          path: '/:id/agency-apply-channel',
          component: AgencyApplyChannel
        },
        {
          path: '/:id/agency-apply-region',
          component: AgencyApplyRegion
        },
        {
          path: '/:id/recommend',
          component: Recommend
        },
        {
          path: '/:id/agency-info',
          component: AgencyInfo
        },
        {
          path: '/:id/agency-info-update',
          component: AgencyInfoUpdate
        },
        {
          path: '/:id/agreement',
          component: Agreement
        },
        {
          path: '/user/reset-password3/:userPhone',
          component: ResetPassword3
        },
      ]
    }
  ]
})
