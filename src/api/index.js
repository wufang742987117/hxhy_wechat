import * as host from './config.js'
// import './axiosConfig'
import { get, post } from './fetch'

export const REST = {

  getCode (params) {
    return post(host.GetCode, params)
  },

  testCode (params) {
    return post(host.TestCode, params)
  },

  register (params) {
    return post(host.Register, params)
  },

  resetPwd (params) {
    return post(host.ResetPassword, params)
  },

	forgetPwd (params) {
		return post(host.ForgetPassword, params)
	},
	
  login (params) {
    return post(host.Login, params)
  },

  getFrontUserInfo (params) {
    return get(host.FrontUserInfo, params)
  },

  getMyRecommed (params) {
    return get(host.MyRecommend, params)
  },

  getMyJujian (params) {
    return get(host.MyJujian, params)
  },

  addJujian (params) {
    return post(host.AddJujian, params)
  },

  getQR (params) {
    return get(host.QR, params)
  },

  getAgencyList (params) {
    return get(host.AgencyList, params)
  },

  getIncomeData (params) {
    return post(host.IncomeData, params)
  },

  getWithdrawList (params) {
    return get(host.WithdrawList, params)
  },

	getAgentMiddlemanByUserId(params) {
		return get(host.getAgentMiddlemanByUserId, params)
	},
	
  getExamineAgentRecord (params) {
    return get(host.getExamineAgentRecord, params)
  },
	confirmMiddlemanWithdraw(params) {
		return get(host.confirmMiddlemanWithdraw, params)
	},

  toWithdraw (params) {
    return post(host.Withdraw, params)
  },

  getCommsionLimit(params) {
    return post(host.getCommsionLimit, params)
  },

  applyAgentAreaChannel(params) {
    return post(host.applyAgentAreaChannel, params)
  },
	
	updateAgentMiddleman(params) {
		return post(host.updateAgentMiddleman, params)
	},

  getProvincialData(params) {
    return post(host.getProvincialData, params)
  },

  getlowerLeve(params) {
    return get(host.getlowerLeve, params)
  },
	
	MiddlemanWithdrawList(params) {
		return get(host.MiddlemanWithdrawList, params)
	},

  applyAgentAreaArea(params) {
    return post(host.applyAgentAreaArea, params)
  },

  updateFrontUserInfoById(params) {
    return post(host.updateFrontUserInfoById, params)
  }



};




