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
【万幂GPT】
1.扫码或长按添加上方企微，回复 密码 获取访问密码。
2.基于gpt-3.5-tourbo，无需翻墙即可使用，回复速度特别快，纵享丝滑。
3.想要 源码+部署文档 的朋友，扫码或长按添加上方企微,回复 源码 ，仅需198元。
4.内置 ChatGPT指令大全，输入 空格 或 / 解锁；Shift + Enter 换行；↑ 可编辑最近一次提问；点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
