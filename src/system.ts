import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `
ChatGPT对话机器人
前期一直使用个人付费账号友情免费提供服务，目前ChatGPT官方大规模封号限制，为保障服务稳定，留给更有需要的人使用，故开启使用限制，请付费购买Key使用，如有不便敬请谅解
基于gpt-3.5-tourbo，无需翻墙即可使用，回复速度特别快，纵享丝滑
想要 源码+部署文档 的朋友，可微信内长按上方二维码识别或扫码添加个人微信获取,仅需198元
内置 ChatGPT指令大全，输入 空格 或 / 解锁；Shift + Enter 换行；↑ 可编辑最近一次提问；点击顶部名称滚动到顶部，点击输入框滚动到底部`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
